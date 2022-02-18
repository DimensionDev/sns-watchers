;(window.webpackJsonp = window.webpackJsonp || []).push([
  [105],
  {
    '0ULw': function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '4k/t': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'sidebarLayoutScreenTitle', function () {
          return I
        }),
        n.d(t, 'TwitterArticleScreen', function () {
          return S
        })
      n('KqXw'), n('WNMA'), n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('es0u'),
        o = n('6au1'),
        l = n('rxPX'),
        c = function (e, t) {
          return o.a.selectFetchStatus(e, t.match.params.twitterArticleId)
        },
        s = Object(l.a)()
          .propsFromState(function () {
            return { fetchStatus: c }
          })
          .propsFromActions(function () {
            return { fetchTwitterArticle: o.a.fetchOne }
          }),
        u = n('VS6U'),
        d = (n('ho0z'), n('6U7i'), n('G6rE')),
        p = function (e, t) {
          var n = t.twitterArticleId
          return o.a.select(e, n)
        },
        h = function (e, t) {
          var n,
            r = p(e, t),
            a = null == r || null === (n = r.metadata) || void 0 === n ? void 0 : n.authorResults.result,
            i = 'User' === (null == a ? void 0 : a.__typename) ? (null == a ? void 0 : a.rest_id) : void 0
          return i ? d.e.select(e, i) : void 0
        },
        m = Object(l.a)().propsFromState(function () {
          return { author: h, twitterArticle: p }
        }),
        f = (n('849X'), n('TJCb'), n('nXUu')),
        y = function (e) {
          var t = e.contentStateJson,
            n = t
              ? (function (e) {
                  try {
                    var t = JSON.parse(e)
                    if (!t.entityMap || !t.blocks) throw new Error('Malformed RawDraftContentState')
                    return t
                  } catch (n) {}
                })(t)
              : void 0
          return n ? a.a.createElement(f.a, { contentState: n }) : null
        },
        b = n('t62R'),
        g = function (e) {
          var t = e.size,
            n = e.title
          return a.a.createElement(
            b.b,
            {
              color: n ? 'normal' : 'gray700',
              numberOfLines: 1,
              size: t,
              testID: 'twitterArticleTitleComponent',
              weight: 'bold',
            },
            n || 'Untitled',
          )
        },
        v = n('MWbm'),
        w = n('jV+4'),
        C = n('GBcw'),
        E = n('rHpw'),
        T = E.a.create(function (e) {
          return {
            container: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
              minHeight: e.spaces.space80,
            },
            paddedView: { paddingVertical: e.spaces.space12 },
          }
        }),
        x = m(function (e) {
          var t = e.author,
            n = e.twitterArticle
          if (!n || !t) return null
          var r = n.data,
            i = n.metadata,
            o = n.title
          return a.a.createElement(
            v.a,
            { style: T.container },
            a.a.createElement(w.a, {
              isVerified: t.verified,
              name: t.name,
              profileImageUrl: t.profile_image_url_https,
              screenName: t.screen_name,
              style: T.paddedView,
              withLink: !0,
            }),
            a.a.createElement(v.a, { style: T.paddedView }, a.a.createElement(g, { size: 'title1', title: o })),
            null != i && i.publishedAtMs
              ? a.a.createElement(
                  v.a,
                  { style: T.paddedView },
                  a.a.createElement(C.a, { humanReadable: !0, timestamp: Number(i.publishedAtMs) }),
                )
              : null,
            null != r && r.contentStateJson
              ? a.a.createElement(
                  v.a,
                  { style: T.paddedView, testID: 'twitterArticleRichTextView' },
                  a.a.createElement(y, { contentStateJson: r.contentStateJson }),
                )
              : null,
          )
        }),
        k = n('G1WX'),
        I = 'Twitter Article',
        S = function (e) {
          var t = e.fetchStatus,
            n = e.fetchTwitterArticle,
            r = e.history,
            o = e.match.params.twitterArticleId,
            l = a.a.useCallback(
              function () {
                n(o)
              },
              [n, o],
            )
          a.a.useEffect(
            function () {
              l()
            },
            [l],
          )
          var c = function () {
            return a.a.createElement(
              v.a,
              { testID: 'twitterArticleView' },
              a.a.createElement(x, { twitterArticleId: o }),
            )
          }
          return a.a.createElement(u.a, {
            history: r,
            primaryContent: function () {
              return a.a.createElement(
                v.a,
                { style: L.container },
                a.a.createElement(k.a, { fetchStatus: t, onRequestRetry: l, render: c }),
              )
            },
            sidebarContent: a.a.createElement(i.a, null),
            title: I,
          })
        },
        L = E.a.create(function (e) {
          return {
            container: {
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              color: e.colors.text,
              padding: e.spaces.space24,
            },
            author: { paddingBottom: e.spaces.space24 },
            title: { paddingBottom: e.spaces.space24 },
          }
        }),
        _ = s(S)
      t.default = _
    },
    '5emT': function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              o.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    AEJ6: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        l = n('3XMw'),
        c = n.n(l),
        s = n('MWbm'),
        u = n('/yvb'),
        d = n('sgih'),
        p = n('xKuM'),
        h = n('rHpw'),
        m = n('95Se'),
        f = n('hOZg'),
        y = c.a.b08821f3,
        b = c.a.ia5e7487,
        g = o.a.createElement(m.a, null),
        v = o.a.createElement(f.a, null),
        w = h.a.create(function (e) {
          return {
            sheet: { borderRadius: e.borderRadii.xLarge, maxHeight: '100vh' },
            buttonContainer: { flexDirection: 'row-reverse' },
            secondaryButton: { marginRight: e.spaces.space8 },
            content: { flex: 1, overflowY: 'auto' },
          }
        })
      t.a = function (e) {
        var t = e.children,
          n = e.onBackClick,
          r = e.onClose,
          i = e.primaryButtonConfig,
          l = e.secondaryButtonConfig,
          c = e.style,
          h = e.title,
          m = o.a.useState(!1),
          f = a()(m, 2),
          C = f[0],
          E = f[1],
          T = function () {
            E(function (e) {
              return !e
            })
          },
          x = o.a.createElement(u.a, { accessibilityLabel: y, icon: g, onPress: n, pullLeft: !0, type: 'primaryText' }),
          k = o.a.createElement(u.a, { accessibilityLabel: b, icon: v, onPress: r, pullLeft: !0, type: 'primaryText' }),
          I = i
            ? o.a.createElement(
                u.a,
                {
                  accessibilityLabel: i.label,
                  disabled: C || i.forceDisabled,
                  onClick: function () {
                    T(), null == i || i.onClick(T)
                  },
                  size: 'small',
                  type: 'primaryFilled',
                },
                i.label,
              )
            : null,
          S = l
            ? o.a.createElement(
                u.a,
                {
                  accessibilityLabel: l.label,
                  onClick: l.onClick,
                  size: 'small',
                  style: w.secondaryButton,
                  type: 'primaryOutlined',
                },
                l.label,
              )
            : null,
          L = o.a.createElement(s.a, { style: w.buttonContainer }, I, S)
        return o.a.createElement(
          d.a,
          {
            enableMaskForDismiss: !0,
            onMaskClick: r,
            style: [w.sheet, c],
            type: 'full',
            withKeyboardNavigation: !0,
            withMask: !0,
          },
          o.a.createElement(p.a, { leftControl: n ? x : k, rightControl: L, title: h }),
          o.a.createElement(s.a, { style: w.content }, t),
        )
      }
    },
    CUXw: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('yiKp'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        y = n.n(f),
        b = n('KEM+'),
        g = n.n(b),
        v = (n('2G9S'), n('ERkP')),
        w = n.n(v),
        C = n('XOJV'),
        E = n('E0cF'),
        T = n('rxPX'),
        x = n('0KEI'),
        k = function (e, t) {
          return t.tweetId
        },
        I = Object(T.a)()
          .propsFromState(function () {
            return { tweet: C.a.createHydratedTweetSelector(k) }
          })
          .adjustStateProps(function (e) {
            var t = e.tweet
            return { originalTweet: (t && E.a.getOriginalTweet(t)) || t, tweet: t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_SELECT_CONTEXT',
              ),
            }
          }),
        S = n('3XMw'),
        L = n.n(S),
        _ = n('x5Pi'),
        A = n('fs1G'),
        B = n('kXdP'),
        O = n('BLtI'),
        P = n('MWbm'),
        F = n('htQn'),
        M = n('Znyr'),
        D = n('kY28'),
        R = n('rHpw'),
        z = n('v6aA'),
        V = n('6Rrp'),
        H = n('0ULw'),
        W = n('pu5c'),
        j = L.a.h6beb5fa,
        K = function (e) {
          return e && e.preventDefault()
        },
        U = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(p()(e), '_renderDisabledTweet', function (t) {
                return w.a.createElement(
                  P.a,
                  { style: G.root },
                  e._renderContent(),
                  w.a.createElement(P.a, { style: G.disabledTweetMask }),
                  w.a.createElement(
                    P.a,
                    { style: [G.disabledIconWrapper, G.iconMargins] },
                    w.a.createElement(B.a, { hoverText: t }, N, w.a.createElement(P.a, { style: G.disabledTweetMask })),
                  ),
                )
              }),
              g()(p()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.replyContext,
                  r = t.tweet,
                  a = t.withActions
                if (r) {
                  var i,
                    o = Object(_.f)(r, e.context.loggedInUserId)
                  return w.a.createElement(
                    P.a,
                    { style: G.tweet },
                    w.a.createElement(O.b, {
                      excludeCardUrl: null === (i = r.card) || void 0 === i ? void 0 : i.url,
                      linkableQuotedTweet: !0,
                      onAnalyticsClick: A.a,
                      onAvatarClick: A.a,
                      onEntityClick: A.a,
                      onMediaClick: K,
                      onReplyContextClick: A.a,
                      preventVideoPlayback: !0,
                      replyContext: n,
                      socialContext: o,
                      tweet: r,
                      withActions: a,
                      withActionsDisabled: !0,
                      withSocialContext: !0,
                    }),
                  )
                }
                return null
              }),
              g()(p()(e), '_renderSelectIcon', function (e) {
                return e
                  ? w.a.createElement(V.a, { style: [G.icon, G.iconMargins, G.iconCheckmark] })
                  : w.a.createElement(H.a, { style: [G.icon, G.iconMargins] })
              }),
              g()(p()(e), '_handleOnClick', function () {
                var t = e.props,
                  n = t.onClick,
                  r = t.originalTweet,
                  a = t.tweetId
                n && n((null == r ? void 0 : r.id_str) || a)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.disabledMessage,
                    n = e.isPartOfDraggedSelection,
                    r = e.isSelected,
                    a = e.showDragCount,
                    i = e.tweet
                  return t
                    ? this._renderDisabledTweet(t)
                    : i
                    ? w.a.createElement(
                        F.a,
                        { onPress: this._handleOnClick, style: G.root },
                        this._renderDragCount(a),
                        this._renderContent(),
                        this._renderSelectIcon(r),
                        n && w.a.createElement(P.a, { style: G.disabledTweetMask }),
                      )
                    : null
                },
              },
              {
                key: '_renderDragCount',
                value: function (e) {
                  return e < 2
                    ? null
                    : w.a.createElement(
                        P.a,
                        { style: G.countBadgeContainer },
                        w.a.createElement(M.a, {
                          count: e,
                          standalone: !0,
                          style: G.countBadge,
                          truncatedCountFormatter: j,
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
        })(w.a.PureComponent)
      g()(U, 'contextType', z.a),
        g()(U, 'defaultProps', {
          replyContext: D.a.ReplyContextTypes.Isolated,
          withActions: !0,
          showDragCount: 0,
          isPartOfDraggedSelection: !1,
          isSelected: !1,
        })
      var G = R.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground, flexDirection: 'row' },
            tweet: { flex: 1 },
            disabledTweetMask: o()(
              o()({}, R.a.absoluteFillObject),
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
        N = w.a.createElement(W.a, { style: G.icon }),
        X = w.a.forwardRef(function (e, t) {
          return w.a.createElement(U, a()({}, e, { ref: t }))
        }),
        J = I.forwardRef(X)
      t.a = J
    },
    CwxE: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    'Fcw+': function (e, t, n) {
      'use strict'
      n('jQ3i'), n('x4t0')
      var r = n('ezF+'),
        a = n('VPAj'),
        i = n('kY28'),
        o = n('CUXw')
      t.a = function (e) {
        var t = e.onClick,
          n = e.selectedTweetIds
        return r.g({
          component: o.a,
          createProps: function (e) {
            var r = e.entry
            return {
              index: r.index,
              tweetId: r.content.id,
              onClick: t,
              replyContext: i.a.ReplyContextTypes.None,
              withActions: !1,
              isSelected: n.includes(r.content.id),
            }
          },
          isClickable: Object(a.a)(!0),
          isFocusable: Object(a.a)(!0),
          shouldDisplayBorder: Object(a.a)(!0),
        })
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        y = n.n(f),
        b = (n('2G9S'), n('i4UL'), n('+/5o')),
        g = n('ERkP'),
        v = n.n(g),
        w = n('HPNB'),
        C = n('VAZu'),
        E = n('wiP2'),
        T = n('Es6L'),
        x = n('yiKp'),
        k = n.n(x),
        I = n('rHpw'),
        S = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k()(k()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        L = n('MWbm'),
        _ = n('yw4N'),
        A = n('TnY3'),
        B = n('cHvH'),
        O = n('3xLC'),
        P = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        F = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      L.a,
                      { style: S.fill },
                      v.a.createElement(
                        _.a,
                        { style: S.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(B.a, null, function (t) {
                    var n = t.windowWidth
                    return w.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      a()(e, P))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(T.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(E.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var t = e.isTwoColumnLayout,
                    n = this.props,
                    r = n.SideNavButton,
                    a = n.TabBar,
                    i = n.TeamsSwitcher,
                    o = n.backLocation,
                    l = n.documentTitle,
                    c = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    h = n.rightControl,
                    m = n.screenType,
                    f = n.searchBoxOptions,
                    y = n.secondaryBar,
                    g = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    T = n.subtitle,
                    x = n.title,
                    k = n.titleIconCell,
                    I = n.titleIconCellSize,
                    _ = n.withDetailOpen,
                    A = n.withSearchBox,
                    B = n.withTweetButton,
                    O = 'root' === m,
                    P = 'secondaryRoot' === m,
                    F = 'primaryDetail' === m,
                    M = (F && w) || (O && g),
                    D = O || (F && t),
                    R = O ? b.c : F ? b.a : void 0,
                    z = v.a.createElement(
                      L.a,
                      { style: S.appBarContainer },
                      v.a.createElement(C.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: D,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: h,
                        secondaryBar: y,
                        subtitle: M ? T : void 0,
                        title: x,
                        titleDomId: R,
                        titleIconCell: k,
                        titleIconCellSize: I,
                      }),
                    ),
                    V =
                      O || (P && _)
                        ? null
                        : v.a.createElement(E.a.Configure, {
                            SideNavButton: r,
                            TabBar: a,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: l,
                            headerless: c,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: h,
                            searchBoxOptions: f,
                            subtitle: T,
                            title: x,
                            withSearchBox: A,
                            withTweetButton: B,
                          })
                  return v.a.createElement(v.a.Fragment, null, V, z)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      y()(F, 'contextType', O.a),
        y()(F, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(F)
    },
    QdNu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'saveLabel', function () {
          return he
        }),
        n.d(t, 'publishLabel', function () {
          return me
        }),
        n.d(t, 'unpublishLabel', function () {
          return fe
        }),
        n.d(t, 'viewLabel', function () {
          return ye
        }),
        n.d(t, 'successfulSaveMessage', function () {
          return ge
        }),
        n.d(t, 'successfulPublishMessage', function () {
          return ve
        }),
        n.d(t, 'successfulUnpublishMessage', function () {
          return we
        }),
        n.d(t, 'TwitterArticleComposer', function () {
          return Ee
        })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('KqXw'), n('WNMA'), n('0zG9'), n('MvUL'), n('uFXj'), n('ERkP')),
        o = n.n(i),
        l = n('1YZw'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = n('kGix'),
        d = n('6au1'),
        p = function (e, t) {
          return t.match.params.twitterArticleId
        },
        h = function (e, t) {
          var n = p(0, t)
          return d.a.selectFetchStatus(e, n) || u.a.NONE
        },
        m = function (e, t) {
          var n = p(0, t)
          return d.a.select(e, n)
        },
        f = function (e, t) {
          var n = p(0, t)
          return Object(d.b)(e, n)
        },
        y = Object(c.a)()
          .propsFromState(function () {
            return { fetchStatus: h, title: f, twitterArticle: m }
          })
          .propsFromActions(function () {
            return {
              addToast: l.b,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_ARTICLE_COMPOSER',
              ),
              deleteTwitterArticle: d.a.delete,
              fetchTwitterArticle: d.a.fetchOneIfNeeded,
              saveTwitterArticle: d.a.updateData,
              updateTwitterArticleVisibility: d.a.updateVisibility,
              updateTwitterArticleTitle: d.a.updateTitle,
            }
          }),
        b = n('VY6S'),
        g = n('HsFH'),
        v = n('M2mT'),
        w = (n('jQ3i'), n('x4t0'), n('LW0h'), n('7x/C'), n('2G9S'), n('G6rE')),
        C = Object(c.a)().propsFromState(function () {
          return { loggedInUser: w.e.selectLoggedInUser }
        }),
        E = n('KEM+'),
        T = n.n(E),
        x = n('yiKp'),
        k = n.n(x),
        I = n('Fcw+'),
        S = n('QIgh'),
        L = n('8UdT'),
        _ = n('VrCx'),
        A = n('oQhu'),
        B = n('fTQJ'),
        O = n('AEJ6'),
        P = n('7fPw'),
        F = n('MWbm'),
        M = n('t62R'),
        D = n('/yvb'),
        R = n('rHpw'),
        z = Object(A.a)(function (e) {
          return Object(P.a)(e)
        }),
        V = R.a.create(function (e) {
          return {
            sheet: { maxHeight: '80vh' },
            container: { paddingHorizontal: e.spaces.space20 },
            bottomBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              bottom: 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: e.componentDimensions.gutterVertical,
              position: 'sticky',
            },
          }
        }),
        H = C(function (e) {
          var t,
            n = e.loggedInUser,
            r = e.onAddTweets,
            i = e.onClose,
            l = e.title,
            c = o.a.useState([]),
            s = a()(c, 2),
            u = s[0],
            d = s[1],
            p = o.a.useCallback(
              function (e) {
                d(function (t) {
                  return t.includes(e)
                    ? t.filter(function (t) {
                        return e !== t
                      })
                    : t.concat(e)
                })
              },
              [d],
            ),
            h = o.a.useMemo(
              function () {
                return (function (e) {
                  var t = e.handleTweetClick,
                    n = e.selectedTweetIds
                  return k()(
                    k()({}, S.b),
                    {},
                    T()(
                      {},
                      L.b.Tweet,
                      k()(
                        k()({}, S.b[L.b.Tweet]),
                        {},
                        { handlers: T()({}, _.a.Tweet, Object(I.a)({ onClick: t, selectedTweetIds: n })) },
                      ),
                    ),
                  )
                })({ handleTweetClick: p, selectedTweetIds: u })
              },
              [p, u],
            ),
            m = n ? z(n.id_str) : null
          return m
            ? o.a.createElement(
                O.a,
                { onClose: i, style: V.sheet, title: l },
                o.a.createElement(
                  F.a,
                  { style: V.container },
                  o.a.createElement(B.a, { entryConfiguration: h, module: m, title: 'Liked' }),
                  o.a.createElement(
                    F.a,
                    { style: V.bottomBar },
                    o.a.createElement(M.b, null, ((t = u.length), ''.concat(t, ' Tweets selected'))),
                    o.a.createElement(
                      D.a,
                      {
                        onPress: function () {
                          r(u)
                        },
                        type: 'primaryFilled',
                      },
                      'Add Tweets',
                    ),
                  ),
                ),
              )
            : null
        }),
        W = (n('KOtZ'), n('zpdM')),
        j = (n('yH/f'), Object.freeze({ DRAFT: 'Draft', PUBLISHED: 'Published' })),
        K = Object.freeze({ TWEET: 'TWEET' }),
        U = Object.freeze({ IMMUTABLE: 'IMMUTABLE' }),
        G = function (e, t) {
          var n = e.getCurrentContent().createEntity(K.TWEET, U.IMMUTABLE, { tweetId: t }),
            r = n.getLastCreatedEntityKey(),
            a = W.EditorState.set(e, { currentContent: n })
          return W.AtomicBlockUtils.insertAtomicBlock(a, r, ' ')
        },
        N = n('XOJV'),
        X = function (e, t) {
          var n = t.tweetId
          return n ? N.a.selectHydrated(e, n) : void 0
        },
        J = Object(c.a)()
          .propsFromState(function () {
            return { tweet: X }
          })
          .propsFromActions(function () {
            return { fetchTweetIfNeeded: N.a.fetchOneIfNeeded }
          }),
        Y = n('fs1G'),
        q = n('BLtI'),
        Q = function (e) {
          return e && e.preventDefault()
        },
        Z = R.a.create(function (e) {
          return {
            container: {
              borderColor: e.colors.gray200,
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.small,
              width: '100%',
            },
          }
        }),
        $ = J(function (e) {
          var t = e.fetchTweetIfNeeded,
            n = e.tweet,
            r = e.tweetId
          return (
            o.a.useEffect(
              function () {
                r && t(r)
              },
              [t, r],
            ),
            n
              ? o.a.createElement(
                  F.a,
                  { style: Z.container },
                  o.a.createElement(q.b, {
                    linkableQuotedTweet: !0,
                    onAnalyticsClick: Y.a,
                    onAvatarClick: Y.a,
                    onEntityClick: Y.a,
                    onMediaClick: Q,
                    onReplyContextClick: Y.a,
                    preventVideoPlayback: !0,
                    tweet: n,
                    withActions: !0,
                    withActionsDisabled: !0,
                  }),
                )
              : null
          )
        }),
        ee = function (e) {
          var t = e.block,
            n = e.contentState,
            r = t.getEntityAt(0),
            a = r ? n.getEntity(r) : null
          if (a && (null == a ? void 0 : a.type) === K.TWEET) {
            var i = a.getData().tweetId
            return o.a.createElement($, { tweetId: i })
          }
          return null
        },
        te = n('Lsrn'),
        ne = n('k/Ka'),
        re = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ne.a)(
            'svg',
            k()(
              k()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [te.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm4.62 8.83c.004.095.007.192.007.29 0 2.956-2.25 6.366-6.368 6.366-1.265 0-2.44-.37-3.43-1.005.174.022.352.032.533.032 1.048 0 2.013-.358 2.78-.958-.98-.018-1.806-.665-2.09-1.554.135.026.276.04.42.04.204 0 .402-.028.59-.08-1.024-.204-1.795-1.11-1.795-2.194v-.028c.302.168.647.268 1.014.28-.6-.4-.995-1.087-.995-1.863 0-.41.11-.794.303-1.125 1.104 1.354 2.753 2.245 4.613 2.338-.038-.164-.058-.334-.058-.51 0-1.236 1.002-2.238 2.238-2.238.644 0 1.225.272 1.633.706.51-.1.99-.287 1.42-.543-.166.522-.52.96-.983 1.238.453-.053.884-.174 1.285-.35-.3.45-.68.843-1.118 1.16z',
              }),
            ),
          )
        }
      re.metadata = { width: 24, height: 24 }
      var ae = re,
        ie = n('UwBx'),
        oe = n('keCP'),
        le = o.a.createElement(ae, null),
        ce = function (e) {
          var t = e.editorState,
            n = e.onChange,
            r = o.a.useState(!1),
            i = a()(r, 2),
            l = i[0],
            c = i[1],
            s = function () {
              c(!l)
            },
            u = [{ icon: le, key: 'embed tweet', onPress: s, type: 'brandText' }]
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(ie.a, {
              additionalToolbarButtonConfigs: u,
              onChange: n,
              placeholder: 'Start writing',
              richTextInputContext: {
                blockRendererFn: function (e) {
                  if ('atomic' === e.getType()) return { component: ee, editable: !1 }
                },
                editorState: t,
                element: oe.a,
              },
            }),
            l
              ? o.a.createElement(H, {
                  onAddTweets: function (e) {
                    var r = (function (e, t) {
                      return t.reduce(function (e, t) {
                        return G(e, t)
                      }, e)
                    })(t, e)
                    n(r), s()
                  },
                  onClose: s,
                  title: 'Add Tweets',
                })
              : null,
          )
        },
        se = n('hHEM'),
        ue = n('p+r5'),
        de = n('eb3s'),
        pe = n('G1WX'),
        he = 'Save',
        me = 'Publish',
        fe = 'Unpublish',
        ye = 'View',
        be = 'Twitter Article Title',
        ge = 'Twitter Article Saved',
        ve = 'Twitter Article Published',
        we = 'Twitter Article Unpublished',
        Ce = o.a.createElement(g.a, null),
        Ee = function (e) {
          var t,
            n = e.addToast,
            r = e.createLocalApiErrorHandler,
            i = e.deleteTwitterArticle,
            l = e.fetchStatus,
            c = e.fetchTwitterArticle,
            s = e.history,
            u = e.match.params.twitterArticleId,
            d = e.saveTwitterArticle,
            p = e.title,
            h = e.twitterArticle,
            m = e.updateTwitterArticleTitle,
            f = e.updateTwitterArticleVisibility,
            y = (null == h || null === (t = h.metadata) || void 0 === t ? void 0 : t.visibility) === j.PUBLISHED,
            g = function (e) {
              var t
              try {
                t = e ? JSON.parse(e) : void 0
              } catch (r) {
                t = void 0
              }
              var n = se.a.initEditorState(t)
              return se.a.convertEmojiToEntities(n)
            },
            w = o.a.useState(g()),
            C = a()(w, 2),
            E = C[0],
            T = C[1],
            x = o.a.useState(!1),
            k = a()(x, 2),
            I = k[0],
            S = k[1]
          o.a.useEffect(
            function () {
              c(u)
            },
            [c, u],
          ),
            o.a.useEffect(
              function () {
                var e,
                  t = g(null == h || null === (e = h.data) || void 0 === e ? void 0 : e.contentStateJson)
                T(t)
              },
              [h],
            )
          var L = function (e) {
              var t = se.a.convertEmojiToEntities(e)
              T(t)
            },
            _ = function (e) {
              A(e.target.value)
            },
            A = o.a.useMemo(
              function () {
                return Object(b.a)(function (e) {
                  m(u, { title: e || '' }).catch(r({}))
                }, 250)
              },
              [r, u, m],
            ),
            B = function () {
              S(function (e) {
                return !e
              })
            },
            O = o.a.createElement(
              F.a,
              { style: Te.controlsContainer },
              o.a.createElement(
                D.a,
                {
                  onClick: function () {
                    var e = JSON.stringify(Object(W.convertToRaw)(E.getCurrentContent()))
                    d(u, { contentStateJson: e })
                      .then(n({ text: ge }))
                      .catch(r({}))
                  },
                  style: Te.buttonMargin,
                },
                he,
              ),
              o.a.createElement(
                D.a,
                {
                  onClick: function () {
                    f(u, { visibility: y ? j.DRAFT : j.PUBLISHED })
                      .then(
                        n({
                          text: y ? we : ve,
                          action: y ? void 0 : { label: ye, link: '/i/twitter-articles/'.concat(u) },
                        }),
                      )
                      .catch(r({}))
                  },
                  style: Te.buttonMargin,
                  type: 'brandFilled',
                },
                y ? fe : me,
              ),
              o.a.createElement(D.a, { icon: Ce, onClick: B, type: 'destructiveText' }),
            )
          return o.a.createElement(
            v.a,
            { rightControl: O, screenType: 'primaryDetail', title: 'Edit Twitter Article' },
            I
              ? o.a.createElement(de.a, {
                  headline: 'Delete Twitter Article?',
                  onCancel: B,
                  onConfirm: function () {
                    i(u).then(function () {
                      s.replace('/i/twitter-article-composer')
                    })
                  },
                })
              : null,
            o.a.createElement(
              F.a,
              { style: Te.container },
              o.a.createElement(pe.a, {
                fetchStatus: l,
                render: function () {
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(ue.a, {
                      defaultValue: p,
                      key: 'title-input-'.concat(u),
                      label: be,
                      name: be,
                      onChange: _,
                    }),
                    o.a.createElement(
                      F.a,
                      { style: Te.inputWrapper },
                      o.a.createElement(ce, { editorState: E, onChange: L }),
                    ),
                  )
                },
              }),
            ),
          )
        },
        Te = R.a.create(function (e) {
          return {
            container: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small },
            controlsContainer: { flexDirection: 'row' },
            buttonMargin: { marginRight: e.spaces.space8 },
            inputWrapper: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        xe = y(Ee)
      t.default = xe
    },
    UwBx: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return W
      })
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('97Jx'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        y = n.n(f),
        b = n('KEM+'),
        g = n.n(b),
        v = (n('2G9S'), n('z84I'), n('uFXj'), n('ERkP')),
        w = n.n(v),
        C = n('mjJ+'),
        E = n('t62R'),
        T = n('/yvb'),
        x = n('IG7M'),
        k = n('rHpw'),
        I = n('MWbm'),
        S = k.a.create(function (e) {
          return {
            separator: {
              borderRightWidth: e.borderWidths.small,
              borderColor: e.colors.nestedBorderColor,
              marginVertical: e.spaces.space4,
            },
          }
        }),
        L = function (e) {
          var t = e.style
          return w.a.createElement(I.a, { style: [S.separator, t] })
        },
        _ = n('6OUF'),
        A = n('FG+G'),
        B = n('yiKp'),
        O = n.n(B),
        P = n('Lsrn'),
        F = n('k/Ka'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            O()(
              O()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [P.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M20.737 16.47c0 3.21-2.31 5.634-6.845 5.634H4.09v-20h9.492c4.508 0 6.676 2.14 6.676 5.126 0 2.113-1.295 3.83-3.662 4.423 2.648.423 4.14 2.17 4.14 4.817zM9.13 5.625v4.648h2.987c1.972 0 2.817-1.014 2.817-2.366s-.9-2.282-2.817-2.282H9.13zm6.312 10.395c0-1.493-1.042-2.48-2.93-2.48h-3.38v5.043h3.295c2.028 0 3.015-1.07 3.015-2.563z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var D = M,
        R = n('x0mb'),
        z = n('CwxE'),
        V = ['additionalToolbarButtonConfigs', 'inputStyle'],
        H = [
          { label: 'Heading 1', size: 'headline1' },
          { label: 'Heading 2', size: 'headline2' },
          { label: 'Paragraph', size: 'body' },
        ],
        W = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(p()(e), 'state', { selectedTextSize: H[2] }),
              g()(p()(e), '_handleTextSizeClick', function (t) {
                return function () {
                  e.setState({ selectedTextSize: t })
                }
              }),
              g()(p()(e), '_renderToolbarButtonGroup', function (e, t) {
                return w.a.createElement(
                  I.a,
                  { style: j.buttonGroup },
                  t ? null : w.a.createElement(L, { style: j.itemMargin }),
                  e.map(function (e, n) {
                    return w.a.createElement(
                      T.a,
                      o()({ style: 0 === n && t ? null : j.itemMargin, type: 'primaryText' }, e),
                    )
                  }),
                )
              }),
              g()(p()(e), '_renderActionMenu', function (t) {
                var n = H.map(function (t) {
                  return {
                    disabled: e.state.selectedTextSize === t,
                    text: w.a.createElement(E.b, { size: t.size }, t.label),
                    onClick: e._handleTextSizeClick(t),
                  }
                })
                return w.a.createElement(C.a, { items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.additionalToolbarButtonConfigs,
                    n = e.inputStyle,
                    r = a()(e, V),
                    i = this.state.selectedTextSize,
                    l = [
                      { icon: K.iconBold, key: 'bold' },
                      { icon: K.iconItalic, key: 'italic' },
                      { icon: K.iconCode, key: 'code' },
                      { icon: K.iconStrikethrough, key: 'strikethrough' },
                    ],
                    c = [
                      { icon: K.iconBulletedList, key: 'bulleted list' },
                      { icon: K.iconOrderedList, key: 'ordered list' },
                    ]
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      I.a,
                      { style: j.toolbar },
                      this._renderToolbarButtonGroup(l, !0),
                      w.a.createElement(L, { style: j.itemMargin }),
                      w.a.createElement(
                        I.a,
                        { style: j.textSizeSelection },
                        w.a.createElement(E.b, { color: 'gray700', numberOfLines: 1 }, null == i ? void 0 : i.label),
                        w.a.createElement(x.a, {
                          Icon: A.a,
                          iconSize: 'small',
                          renderActionMenu: this._renderActionMenu,
                          style: j.itemMargin,
                        }),
                      ),
                      this._renderToolbarButtonGroup(c),
                      t ? this._renderToolbarButtonGroup(t) : null,
                    ),
                    w.a.createElement(_.a, o()({ inputStyle: [j.input, n] }, r)),
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      g()(W, 'defaultProps', { leftAligned: !0, multiline: !0, styleType: 'selection' })
      var j = k.a.create(function (e) {
          return {
            buttonGroup: { flexDirection: 'row' },
            iconGray: { color: e.colors.gray700 },
            input: { paddingHorizontal: 0, paddingBottom: 0 },
            itemMargin: { marginLeft: e.spaces.space8 },
            textSizeSelection: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: e.spaces.space16,
              marginRight: e.spaces.space8,
              width: 'calc('.concat(e.spaces.space32, ' * 3)'),
            },
            toolbar: {
              borderBottomWidth: e.borderWidths.small,
              borderColor: e.colors.nestedBorderColor,
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingBottom: e.spaces.space4,
              justifyContent: 'center',
              width: '100%',
            },
          }
        }),
        K = {
          iconBold: w.a.createElement(D, { style: j.iconGray }),
          iconItalic: w.a.createElement(R.a, { style: j.iconGray }),
          iconCode: w.a.createElement(z.a, { style: j.iconGray }),
          iconStrikethrough: w.a.createElement(R.a, { style: j.iconGray }),
          iconBulletedList: w.a.createElement(R.a, { style: j.iconGray }),
          iconOrderedList: w.a.createElement(R.a, { style: j.iconGray }),
        }
    },
    kXdP: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        i = n('t62R'),
        o = n('OiMc'),
        l = n('rHpw').a.create(function (e) {
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
        return a.a.createElement(
          o.a,
          {
            contentStyle: l.popover,
            enableHover: !0,
            renderContent: function () {
              return a.a.createElement(i.b, { style: l.hoverText }, n)
            },
            withArrow: !0,
          },
          t,
        )
      }
    },
    nXUu: function (e, t, n) {
      'use strict'
      n('z84I')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('t62R'),
        o = n('MWbm')
      t.a = function (e) {
        var t = e.contentState.blocks.map(function (e) {
          return a.a.createElement(i.b, { key: e.key }, e.text)
        })
        return a.a.createElement(o.a, null, t)
      }
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return K
      })
      n('yiKp')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        y = n.n(f),
        b = n('KEM+'),
        g = n.n(b),
        v = (n('2G9S'), n('ERkP')),
        w = n.n(v),
        C = n('38/B'),
        E = n('t62R'),
        T = n('/yvb'),
        x = n('piX5'),
        k = n('3XMw'),
        I = n.n(k),
        S = n('tI3i'),
        L = n.n(S),
        _ = n('oQhu'),
        A = n('rHpw'),
        B = n('aITJ'),
        O = n('MWbm'),
        P = n('n5fo'),
        F = n('5emT'),
        M = n('Oib4'),
        D = n('WtWS'),
        R = n('ioan'),
        z = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        V = function (e) {
          return e.length
        },
        H = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V
          return t(e)
        },
        W = I.a.de540c32,
        j = I.a.b4abfdb3,
        K = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n(e) {
            var r
            c()(this, n),
              (r = t.call(this, e)),
              g()(p()(r), '_blurOnBackspaceKeyUpForKaiOS', !1),
              g()(p()(r), '_isLabelLarge', function () {
                var e = r.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              g()(
                p()(r),
                '_getTextInputStyle',
                Object(_.a)(function (e) {
                  return [U.root, !e && U.disabled]
                }),
              ),
              g()(p()(r), '_getTextInputType', function () {
                var e = r.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  a = r.state.isPasswordRevealed
                return 'password' === n && t ? (a ? 'text' : 'password') : n
              }),
              g()(p()(r), '_calculateLength', function (e) {
                return H(e, r.props.calculateLength)
              }),
              g()(p()(r), '_shouldRenderDisplayCount', function () {
                var e = r.state.isFocused,
                  t = r._isFormInvalid()
                return Boolean((e || t) && r._getMaxDisplayCount())
              }),
              g()(p()(r), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  a,
                  i,
                  o = r.props.type,
                  l =
                    null === (e = r._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (n = r._textInput) ||
                    void 0 === n ||
                    null === (a = n.textInputNode) ||
                    void 0 === a ||
                    null === (i = a.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === l && !0 === c
              }),
              g()(p()(r), '_getActualCount', function (e) {
                var t = e.length
                return r._isInvalidNumber() && (t = 1), t
              }),
              g()(p()(r), '_handleBlur', function (e) {
                var t = r.props.onBlur,
                  n = e.currentTarget.value,
                  a = r._calculateLength(n),
                  i = r._getActualCount(n)
                r.setState({ isFocused: !1, displayCount: a, actualCount: i }), t && t(e)
              }),
              g()(p()(r), '_handleChange', function (e) {
                var t = r.props.onChange,
                  n = r.state.previousValue,
                  a = e.currentTarget.value,
                  i = r._calculateLength(a),
                  o = r._getActualCount(a),
                  l = r._getAdjustedMaxLength()
                void 0 !== l && a.length > l && n.length < a.length
                  ? (e.currentTarget.value = n)
                  : (r.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              g()(p()(r), '_handleFocus', function (e) {
                var t = r.props.onFocus
                r.setState({ isFocused: !0 }), t && t(e)
              }),
              g()(p()(r), '_handleKeyPress', function (e) {
                var t = r.props,
                  n = t.multiline,
                  a = t.onKeyPress,
                  i = t.onSubmitEditing
                a && a(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              g()(p()(r), '_handleKeyDown', function (e) {
                var t = r.props.onKeyDown,
                  n = 0 === r.state.displayCount
                B.b.isKaiOS() && 'Backspace' === e.key && n ? (r._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              g()(p()(r), '_handleKeyUp', function (e) {
                var t = r.props.onKeyUp
                B.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  r._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), r.blur()),
                  t && t(e)
              }),
              g()(p()(r), '_handlePasswordVisibilityClick', function (e) {
                r.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              g()(p()(r), '_setTextInputRef', function (e) {
                r._textInput = e
              }),
              g()(p()(r), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  r = e.onChange,
                  a = e.validLength,
                  i = !!r,
                  o = 'string' == typeof e.value,
                  l = 'string' == typeof t
                L()(
                  !(!l && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  L()(!(n && a && a > n), 'Max length should be equal or greater than valid length.'),
                  L()(
                    !((void 0 !== n && n <= 0) || (void 0 !== a && a <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              g()(p()(r), '_exceedsValidLength', function (e) {
                var t = r._getMaxDisplayCount()
                return !!t && e > t
              }),
              g()(p()(r), '_getMaxDisplayCount', function () {
                return r.props.validLength || r.props.maxLength
              }),
              g()(p()(r), '_getAdjustedMaxLength', function () {
                var e = r.props.maxLength,
                  t = r.getValue(),
                  n = r._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              r._checkComponentPropsUsageCorrectness(e)
            var a = e.defaultValue,
              i = e.value || a || ''
            return (
              (r.state = {
                displayCount: r._calculateLength(i),
                actualCount: V(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              r
            )
          }
          return (
            u()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.maxLength,
                      r = t.onChange,
                      a = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      l = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === a && n === o && !!r === !!l && ('string' == typeof i) === ('string' == typeof s)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      r = e.errorText,
                      a = e.helperText,
                      i = e.style,
                      o = this.state.isFocused,
                      l = this._isFormInvalid()
                    return w.a.createElement(
                      O.a,
                      { style: [G.root, i] },
                      w.a.createElement(
                        O.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            x.a.border,
                            G.textInputFormStyle,
                            l && x.a.invalidBorderColor,
                            o && l && x.a.focusedBorderInvalid,
                            o && !l && x.a.focusedBorderValid,
                            !n && x.a.disabled,
                          ],
                        },
                        w.a.createElement(
                          O.a,
                          { style: G.textInputFormWrapper },
                          w.a.createElement(
                            O.a,
                            { style: G.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        O.a,
                        { style: [G.sidePadding, G.underTextInputForm] },
                        w.a.createElement(
                          O.a,
                          { style: G.subtextWrapper },
                          a ? this._renderHelperText() : null,
                          l && r ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      n = this._isFormInvalid() ? 'red500' : t,
                      r = this._isLabelLarge()
                    return w.a.createElement(
                      E.b,
                      {
                        color: r ? 'gray700' : n,
                        numberOfLines: 1,
                        size: r ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          r && G.placeholderText,
                          !C.a.reducedMotionEnabled && G.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      t = e.Icon,
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      r =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      i = (e.style, e.type, e.validLength, o()(e, z))
                    return w.a.createElement(
                      O.a,
                      { style: U.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        E.b,
                        { size: 'headline1', style: U.wrapper },
                        w.a.createElement(
                          R.a,
                          a()({}, i, {
                            editable: n,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(n),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      r && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      n = e.type,
                      r = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? w.a.createElement(
                          O.a,
                          { style: G.passwordVisibilityIconContainer },
                          w.a.createElement(T.a, {
                            accessibilityLabel: r ? j : W,
                            focusable: !0,
                            hoverLabel: { label: r ? j : W },
                            icon: r ? w.a.createElement(P.a, null) : w.a.createElement(F.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return w.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'polite' },
                      w.a.createElement(
                        E.b,
                        { color: 'gray700', size: 'subtext2', style: G.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return w.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'assertive' },
                      w.a.createElement(
                        E.b,
                        { color: 'red500', size: 'subtext2', style: G.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      n = this._exceedsValidLength(e),
                      r = t && I.a.ia24dc8c(t),
                      a = I.a.ia24dc8c(e)
                    return w.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      w.a.createElement(
                        E.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        r ? ''.concat(a, ' / ').concat(r) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [G.icon, t && G.focusedIcon]
                    return e && w.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? w.a.createElement(M.a, { style: [G.validationIcon, x.a.invalidColor] })
                      : w.a.createElement(D.a, { style: [G.validationIcon, x.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.calculateLength,
                      r = e.value,
                      a = 'string' == typeof r ? H(r, n) : 0
                    return 'string' == typeof r && a !== t.displayCount
                      ? { displayCount: a, actualCount: r.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(w.a.Component)
      g()(K, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (K.propTypes = {})
      var U = A.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        G = A.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
          }
        })
    },
    piX5: function (e, t, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var r = n('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      t.a = r
    },
    taB0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'rootDetailScreenTitle', function () {
          return b
        }),
        n.d(t, 'TwitterArticleListScreen', function () {
          return g
        })
      var r = n('ERkP'),
        a = n.n(r),
        i = n('pxuL'),
        o = n('RqPI'),
        l = n('6au1'),
        c = n('rxPX'),
        s = n('0KEI'),
        u = Object(c.a)()
          .propsFromState(function () {
            return { loggedInUserId: o.q }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSE_TWITTER_ARTICLE_BUTTON',
              ),
              createTwitterArticle: l.a.create,
            }
          }),
        d = n('7oQY'),
        p = n('M2mT'),
        h = n('c6pJ'),
        m = n('MWbm'),
        f = n('/yvb'),
        y = n('rHpw'),
        b = 'Twitter Articles',
        g = function (e) {
          var t = a.a.useContext(i.a),
            n = t.decrementDmDrawerInhibitorCount,
            r = t.incrementDmDrawerInhibitorCount,
            o = e.createLocalApiErrorHandler,
            l = e.createTwitterArticle,
            c = e.history,
            s = e.loggedInUserId
          a.a.useEffect(
            function () {
              return (
                r(),
                function () {
                  n()
                }
              )
            },
            [n, r],
          )
          var u = a.a.createElement(f.a, {
            accessibilityLabel: 'create',
            icon: w,
            onPress: function () {
              l('')
                .then(function (e) {
                  if ('string' == typeof (null == e ? void 0 : e.result)) {
                    var t,
                      n,
                      r =
                        null == e ||
                        null === (t = e.entities) ||
                        void 0 === t ||
                        null === (n = t.twitterArticles) ||
                        void 0 === n
                          ? void 0
                          : n[e.result].rest_id
                    r && c.push('/i/twitter-article-composer/edit/'.concat(r))
                  }
                })
                .catch(o({ showToast: !0 }))
            },
            type: 'primaryText',
          })
          return s
            ? a.a.createElement(
                p.a,
                { rightControl: u, screenType: 'secondaryRoot', title: b },
                a.a.createElement(
                  m.a,
                  { style: v.container },
                  a.a.createElement(h.a, { linkToEditScreen: !0, publishedOnly: !1, userId: s }),
                ),
              )
            : null
        },
        v = y.a.create(function (e) {
          return { container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }
        }),
        w = a.a.createElement(d.a, null),
        C = u(g)
      t.default = C
    },
    uy10: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'emptyStateHeaderLabel', function () {
          return p
        }),
        n.d(t, 'emptyStateMessage', function () {
          return h
        }),
        n.d(t, 'emptyStateButtonText', function () {
          return m
        }),
        n.d(t, 'errorToastText', function () {
          return f
        }),
        n.d(t, 'TwitterArticleComposerEmptyState', function () {
          return y
        })
      var r = n('ERkP'),
        a = n.n(r),
        i = n('6au1'),
        o = n('rxPX'),
        l = n('0KEI'),
        c = Object(o.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
              'CREATE_TWITTER_ARTICLE_BUTTON',
            ),
            createTwitterArticle: i.a.create,
          }
        }),
        s = n('zCf4'),
        u = n('FIs5'),
        d = n('rHpw'),
        p = "You don't have a draft selected",
        h = 'Choose one from your existing drafts, or start a new one.',
        m = 'New draft',
        f = 'There was an error creating a new draft',
        y = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.createTwitterArticle,
            r = Object(s.f)()
          return a.a.createElement(u.a, {
            buttonLink: '/i/twitter-article-composer',
            buttonText: m,
            header: p,
            message: h,
            onButtonPress: function () {
              n('', { contentStateJson: '' })
                .then(function (e) {
                  var t
                  null != e &&
                    e.result &&
                    'string' == typeof e.result &&
                    null !== (t = e.entities) &&
                    void 0 !== t &&
                    t.twitterArticles[e.result] &&
                    r.push('/i/twitter-article-composer/edit/'.concat(e.entities.twitterArticles[e.result].rest_id))
                })
                .catch(t({ showToast: !0 }))
            },
            style: b.root,
          })
        },
        b = d.a.create(function (e) {
          return {
            root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
          }
        }),
        g = c(y)
      t.default = g
    },
  },
])
//# sourceMappingURL=WIPED
