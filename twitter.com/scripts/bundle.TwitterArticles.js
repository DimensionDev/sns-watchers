;(window.webpackJsonp = window.webpackJsonp || []).push([
  [105],
  {
    '0ULw': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
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
      var a = n('ERkP'),
        r = n.n(a),
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
            a = p(e, t),
            r = null == a || null === (n = a.metadata) || void 0 === n ? void 0 : n.authorResults.result,
            i = 'User' === (null == r ? void 0 : r.__typename) ? (null == r ? void 0 : r.rest_id) : void 0
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
          return n ? r.a.createElement(f.a, { contentState: n }) : null
        },
        b = n('t62R'),
        v = function (e) {
          var t = e.size,
            n = e.title
          return r.a.createElement(
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
        g = n('MWbm'),
        w = n('jV+4'),
        E = n('GBcw'),
        C = n('rHpw'),
        T = C.a.create(function (e) {
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
          var a = n.data,
            i = n.metadata,
            o = n.title
          return r.a.createElement(
            g.a,
            { style: T.container },
            r.a.createElement(w.a, {
              isVerified: t.verified,
              name: t.name,
              profileImageUrl: t.profile_image_url_https,
              screenName: t.screen_name,
              style: T.paddedView,
              withLink: !0,
            }),
            r.a.createElement(g.a, { style: T.paddedView }, r.a.createElement(v, { size: 'title1', title: o })),
            null != i && i.publishedAtMs
              ? r.a.createElement(
                  g.a,
                  { style: T.paddedView },
                  r.a.createElement(E.a, { humanReadable: !0, timestamp: Number(i.publishedAtMs) }),
                )
              : null,
            null != a && a.contentStateJson
              ? r.a.createElement(
                  g.a,
                  { style: T.paddedView, testID: 'twitterArticleRichTextView' },
                  r.a.createElement(y, { contentStateJson: a.contentStateJson }),
                )
              : null,
          )
        }),
        k = n('G1WX'),
        I = 'Twitter Article',
        S = function (e) {
          var t = e.fetchStatus,
            n = e.fetchTwitterArticle,
            a = e.history,
            o = e.match.params.twitterArticleId,
            l = r.a.useCallback(
              function () {
                n(o)
              },
              [n, o],
            )
          r.a.useEffect(
            function () {
              l()
            },
            [l],
          )
          var c = function () {
            return r.a.createElement(
              g.a,
              { testID: 'twitterArticleView' },
              r.a.createElement(x, { twitterArticleId: o }),
            )
          }
          return r.a.createElement(u.a, {
            history: a,
            primaryContent: function () {
              return r.a.createElement(
                g.a,
                { style: L.container },
                r.a.createElement(k.a, { fetchStatus: t, onRequestRetry: l, render: c }),
              )
            },
            sidebarContent: r.a.createElement(i.a, null),
            title: I,
          })
        },
        L = C.a.create(function (e) {
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
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
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
      var a = n('ddV6'),
        r = n.n(a),
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
        v = o.a.createElement(m.a, null),
        g = o.a.createElement(f.a, null),
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
          a = e.onClose,
          i = e.primaryButtonConfig,
          l = e.secondaryButtonConfig,
          c = e.style,
          h = e.title,
          m = o.a.useState(!1),
          f = r()(m, 2),
          E = f[0],
          C = f[1],
          T = function () {
            C(function (e) {
              return !e
            })
          },
          x = o.a.createElement(u.a, { accessibilityLabel: y, icon: v, onPress: n, pullLeft: !0, type: 'primaryText' }),
          k = o.a.createElement(u.a, { accessibilityLabel: b, icon: g, onPress: a, pullLeft: !0, type: 'primaryText' }),
          I = i
            ? o.a.createElement(
                u.a,
                {
                  accessibilityLabel: i.label,
                  disabled: E || i.forceDisabled,
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
            onMaskClick: a,
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
      var a = n('97Jx'),
        r = n.n(a),
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
        v = n.n(b),
        g = (n('2G9S'), n('ERkP')),
        w = n.n(g),
        E = n('XOJV'),
        C = n('E0cF'),
        T = n('rxPX'),
        x = n('0KEI'),
        k = function (e, t) {
          return t.tweetId
        },
        I = Object(T.a)()
          .propsFromState(function () {
            return { tweet: E.a.createHydratedTweetSelector(k) }
          })
          .adjustStateProps(function (e) {
            var t = e.tweet
            return { originalTweet: (t && C.a.getOriginalTweet(t)) || t, tweet: t }
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
        M = n('MWbm'),
        z = n('htQn'),
        F = n('Znyr'),
        P = n('kY28'),
        R = n('rHpw'),
        H = n('v6aA'),
        D = n('6Rrp'),
        V = n('0ULw'),
        j = n('pu5c'),
        W = L.a.h6beb5fa,
        K = function (e) {
          return e && e.preventDefault()
        },
        U = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), '_renderDisabledTweet', function (t) {
                return w.a.createElement(
                  M.a,
                  { style: G.root },
                  e._renderContent(),
                  w.a.createElement(M.a, { style: G.disabledTweetMask }),
                  w.a.createElement(
                    M.a,
                    { style: [G.disabledIconWrapper, G.iconMargins] },
                    w.a.createElement(B.a, { hoverText: t }, N, w.a.createElement(M.a, { style: G.disabledTweetMask })),
                  ),
                )
              }),
              v()(p()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.replyContext,
                  a = t.tweet,
                  r = t.withActions
                if (a) {
                  var i,
                    o = Object(_.f)(a, e.context.loggedInUserId)
                  return w.a.createElement(
                    M.a,
                    { style: G.tweet },
                    w.a.createElement(O.b, {
                      excludeCardUrl: null === (i = a.card) || void 0 === i ? void 0 : i.url,
                      linkableQuotedTweet: !0,
                      onAnalyticsClick: A.a,
                      onAvatarClick: A.a,
                      onEntityClick: A.a,
                      onMediaClick: K,
                      onReplyContextClick: A.a,
                      preventVideoPlayback: !0,
                      replyContext: n,
                      socialContext: o,
                      tweet: a,
                      withActions: r,
                      withActionsDisabled: !0,
                      withSocialContext: !0,
                    }),
                  )
                }
                return null
              }),
              v()(p()(e), '_renderSelectIcon', function (e) {
                return e
                  ? w.a.createElement(D.a, { style: [G.icon, G.iconMargins, G.iconCheckmark] })
                  : w.a.createElement(V.a, { style: [G.icon, G.iconMargins] })
              }),
              v()(p()(e), '_handleOnClick', function () {
                var t = e.props,
                  n = t.onClick,
                  a = t.originalTweet,
                  r = t.tweetId
                n && n((null == a ? void 0 : a.id_str) || r)
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
                    a = e.isSelected,
                    r = e.showDragCount,
                    i = e.tweet
                  return t
                    ? this._renderDisabledTweet(t)
                    : i
                    ? w.a.createElement(
                        z.a,
                        { onPress: this._handleOnClick, style: G.root },
                        this._renderDragCount(r),
                        this._renderContent(),
                        this._renderSelectIcon(a),
                        n && w.a.createElement(M.a, { style: G.disabledTweetMask }),
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
                        M.a,
                        { style: G.countBadgeContainer },
                        w.a.createElement(F.a, {
                          count: e,
                          standalone: !0,
                          style: G.countBadge,
                          truncatedCountFormatter: W,
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
      v()(U, 'contextType', H.a),
        v()(U, 'defaultProps', {
          replyContext: P.a.ReplyContextTypes.Isolated,
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
        N = w.a.createElement(j.a, { style: G.icon }),
        X = w.a.forwardRef(function (e, t) {
          return w.a.createElement(U, r()({}, e, { ref: t }))
        }),
        J = I.forwardRef(X)
      t.a = J
    },
    Cp2k: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
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
                d: 'M12.341 20.5H23V22H10.842l1.088-1.088zm-9.265 1.248h-.073a.75.75 0 01-.746-.823l.543-5.562a2.745 2.745 0 01.8-1.676l11.155-11.16a2.385 2.385 0 013.182 0l3.535 3.536a2.248 2.248 0 010 3.18L10.313 20.407a2.756 2.756 0 01-1.675.792zM14.667 4.736l4.6 4.6 1.151-1.151a.747.747 0 000-1.06l-3.542-3.538a.81.81 0 00-1.061 0zM3.839 20.165l4.652-.459a1.253 1.253 0 00.762-.36l.555-.555 8.394-8.4-4.6-4.6-8.946 8.957a1.251 1.251 0 00-.36.761z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    CwxE: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
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
      var a = n('ezF+'),
        r = n('VPAj'),
        i = n('kY28'),
        o = n('CUXw')
      t.a = function (e) {
        var t = e.onClick,
          n = e.selectedTweetIds
        return a.g({
          component: o.a,
          createProps: function (e) {
            var a = e.entry
            return {
              index: a.index,
              tweetId: a.content.id,
              onClick: t,
              replyContext: i.a.ReplyContextTypes.None,
              withActions: !1,
              isSelected: n.includes(a.content.id),
            }
          },
          isClickable: Object(r.a)(!0),
          isFocusable: Object(r.a)(!0),
          shouldDisplayBorder: Object(r.a)(!0),
        })
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
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
        v = n('ERkP'),
        g = n.n(v),
        w = n('HPNB'),
        E = n('VAZu'),
        C = n('wiP2'),
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
        M = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        z = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? g.a.createElement(
                      L.a,
                      { style: S.fill },
                      g.a.createElement(
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
                  return g.a.createElement(B.a, null, function (t) {
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
                      r()(e, M))
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    Object(T.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : g.a.createElement(C.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return g.a.createElement(
                    g.a.Fragment,
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
                    a = n.SideNavButton,
                    r = n.TabBar,
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
                    v = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    T = n.subtitle,
                    x = n.title,
                    k = n.titleIconCell,
                    I = n.titleIconCellSize,
                    _ = n.withDetailOpen,
                    A = n.withSearchBox,
                    B = n.withTweetButton,
                    O = 'root' === m,
                    M = 'secondaryRoot' === m,
                    z = 'primaryDetail' === m,
                    F = (z && w) || (O && v),
                    P = O || (z && t),
                    R = O ? b.c : z ? b.a : void 0,
                    H = g.a.createElement(
                      L.a,
                      { style: S.appBarContainer },
                      g.a.createElement(E.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: P,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: h,
                        secondaryBar: y,
                        subtitle: F ? T : void 0,
                        title: x,
                        titleDomId: R,
                        titleIconCell: k,
                        titleIconCellSize: I,
                      }),
                    ),
                    D =
                      O || (M && _)
                        ? null
                        : g.a.createElement(C.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
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
                  return g.a.createElement(g.a.Fragment, null, D, H)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      y()(z, 'contextType', O.a),
        y()(z, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(z)
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
          return ve
        }),
        n.d(t, 'successfulPublishMessage', function () {
          return ge
        }),
        n.d(t, 'successfulUnpublishMessage', function () {
          return we
        }),
        n.d(t, 'TwitterArticleComposer', function () {
          return Ce
        })
      var a = n('ddV6'),
        r = n.n(a),
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
        v = n('HsFH'),
        g = n('M2mT'),
        w = (n('jQ3i'), n('x4t0'), n('LW0h'), n('7x/C'), n('2G9S'), n('G6rE')),
        E = Object(c.a)().propsFromState(function () {
          return { loggedInUser: w.e.selectLoggedInUser }
        }),
        C = n('KEM+'),
        T = n.n(C),
        x = n('yiKp'),
        k = n.n(x),
        I = n('Fcw+'),
        S = n('QIgh'),
        L = n('8UdT'),
        _ = n('VrCx'),
        A = n('oQhu'),
        B = n('fTQJ'),
        O = n('AEJ6'),
        M = n('7fPw'),
        z = n('MWbm'),
        F = n('t62R'),
        P = n('/yvb'),
        R = n('rHpw'),
        H = Object(A.a)(function (e) {
          return Object(M.a)(e)
        }),
        D = R.a.create(function (e) {
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
        V = E(function (e) {
          var t,
            n = e.loggedInUser,
            a = e.onAddTweets,
            i = e.onClose,
            l = e.title,
            c = o.a.useState([]),
            s = r()(c, 2),
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
            m = n ? H(n.id_str) : null
          return m
            ? o.a.createElement(
                O.a,
                { onClose: i, style: D.sheet, title: l },
                o.a.createElement(
                  z.a,
                  { style: D.container },
                  o.a.createElement(B.a, { entryConfiguration: h, module: m, title: 'Liked' }),
                  o.a.createElement(
                    z.a,
                    { style: D.bottomBar },
                    o.a.createElement(F.b, null, ((t = u.length), ''.concat(t, ' Tweets selected'))),
                    o.a.createElement(
                      P.a,
                      {
                        onPress: function () {
                          a(u)
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
        j = (n('KOtZ'), n('zpdM')),
        W = (n('yH/f'), Object.freeze({ DRAFT: 'Draft', PUBLISHED: 'Published' })),
        K = Object.freeze({ TWEET: 'TWEET' }),
        U = Object.freeze({ IMMUTABLE: 'IMMUTABLE' }),
        G = function (e, t) {
          var n = e.getCurrentContent().createEntity(K.TWEET, U.IMMUTABLE, { tweetId: t }),
            a = n.getLastCreatedEntityKey(),
            r = j.EditorState.set(e, { currentContent: n })
          return j.AtomicBlockUtils.insertAtomicBlock(r, a, ' ')
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
            a = e.tweetId
          return (
            o.a.useEffect(
              function () {
                a && t(a)
              },
              [t, a],
            ),
            n
              ? o.a.createElement(
                  z.a,
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
            a = t.getEntityAt(0),
            r = a ? n.getEntity(a) : null
          if (r && (null == r ? void 0 : r.type) === K.TWEET) {
            var i = r.getData().tweetId
            return o.a.createElement($, { tweetId: i })
          }
          return null
        },
        te = n('Lsrn'),
        ne = n('k/Ka'),
        ae = function () {
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
      ae.metadata = { width: 24, height: 24 }
      var re = ae,
        ie = n('UwBx'),
        oe = n('keCP'),
        le = o.a.createElement(re, null),
        ce = function (e) {
          var t = e.editorState,
            n = e.onChange,
            a = o.a.useState(!1),
            i = r()(a, 2),
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
              ? o.a.createElement(V, {
                  onAddTweets: function (e) {
                    var a = (function (e, t) {
                      return t.reduce(function (e, t) {
                        return G(e, t)
                      }, e)
                    })(t, e)
                    n(a), s()
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
        ve = 'Twitter Article Saved',
        ge = 'Twitter Article Published',
        we = 'Twitter Article Unpublished',
        Ee = o.a.createElement(v.a, null),
        Ce = function (e) {
          var t,
            n = e.addToast,
            a = e.createLocalApiErrorHandler,
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
            y = (null == h || null === (t = h.metadata) || void 0 === t ? void 0 : t.visibility) === W.PUBLISHED,
            v = function (e) {
              var t
              try {
                t = e ? JSON.parse(e) : void 0
              } catch (a) {
                t = void 0
              }
              var n = se.a.initEditorState(t)
              return se.a.convertEmojiToEntities(n)
            },
            w = o.a.useState(v()),
            E = r()(w, 2),
            C = E[0],
            T = E[1],
            x = o.a.useState(!1),
            k = r()(x, 2),
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
                  t = v(null == h || null === (e = h.data) || void 0 === e ? void 0 : e.contentStateJson)
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
                  m(u, { title: e || '' }).catch(a({}))
                }, 250)
              },
              [a, u, m],
            ),
            B = function () {
              S(function (e) {
                return !e
              })
            },
            O = o.a.createElement(
              z.a,
              { style: Te.controlsContainer },
              o.a.createElement(
                P.a,
                {
                  onClick: function () {
                    var e = JSON.stringify(Object(j.convertToRaw)(C.getCurrentContent()))
                    d(u, { contentStateJson: e })
                      .then(n({ text: ve }))
                      .catch(a({}))
                  },
                  style: Te.buttonMargin,
                },
                he,
              ),
              o.a.createElement(
                P.a,
                {
                  onClick: function () {
                    f(u, { visibility: y ? W.DRAFT : W.PUBLISHED })
                      .then(
                        n({
                          text: y ? we : ge,
                          action: y ? void 0 : { label: ye, link: '/i/twitter-articles/'.concat(u) },
                        }),
                      )
                      .catch(a({}))
                  },
                  style: Te.buttonMargin,
                  type: 'brandFilled',
                },
                y ? fe : me,
              ),
              o.a.createElement(P.a, { icon: Ee, onClick: B, type: 'destructiveText' }),
            )
          return o.a.createElement(
            g.a,
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
              z.a,
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
                      z.a,
                      { style: Te.inputWrapper },
                      o.a.createElement(ce, { editorState: C, onChange: L }),
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
        xe = y(Ce)
      t.default = xe
    },
    UwBx: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return J
      })
      var a = n('m3Bd'),
        r = n.n(a),
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
        v = n.n(b),
        g = (n('2G9S'), n('z84I'), n('uFXj'), n('ERkP')),
        w = n.n(g),
        E = n('mjJ+'),
        C = n('t62R'),
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
        M = n('Lsrn'),
        z = n('k/Ka'),
        F = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            O()(
              O()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M17.481 12.934a3.862 3.862 0 01.856 2.6 4.422 4.422 0 01-.585 2.251 4.078 4.078 0 01-1.8 1.61 6.811 6.811 0 01-3.016.6H5.75V4.009h6.85a5.871 5.871 0 014 1.17 3.8 3.8 0 011.309 2.971 3.554 3.554 0 01-.731 2.218 3.733 3.733 0 01-2.078 1.317 3.812 3.812 0 012.381 1.249zM9.018 6.439v4.233h2.836a2.79 2.79 0 001.981-.585 2 2 0 00.607-1.509 2.049 2.049 0 00-.618-1.542 2.765 2.765 0 00-1.97-.6zm5.166 10.468a2.238 2.238 0 00.664-1.666 2.1 2.1 0 00-.653-1.632 2.785 2.785 0 00-1.936-.6H9.018v4.551h3.128a2.8 2.8 0 002.038-.653z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      F.metadata = { width: 24, height: 24 }
      var P = F,
        R = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            O()(
              O()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M19 4H9a.75.75 0 000 1.5h4.075l-3.71 13H5A.75.75 0 005 20h10a.75.75 0 000-1.5h-4.075l3.71-13H19A.75.75 0 0019 4z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      R.metadata = { width: 24, height: 24 }
      var H = R,
        D = n('CwxE'),
        V = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            O()(
              O()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M17.91 14.554a5.5 5.5 0 01.13 1.224c0 2.959-2.165 4.8-5.65 4.8-3.594 0-5.934-1.8-6.42-4.955a.75.75 0 111.482-.228c.5 3.205 3.306 3.683 4.938 3.683 1.55 0 4.15-.429 4.15-3.3a4 4 0 00-.092-.89.75.75 0 111.462-.334zM21 11h-8.173c-.236-.04-.474-.079-.716-.114-2.965-.447-4.121-1.375-4.121-3.315 0-1.9 1.462-3 4.01-3 2.353 0 3.755.988 4.17 2.937a.93.93 0 00.2.467.751.751 0 001.189-.911c.061.093.083.161.075.132C17.072 4.54 15.07 3.075 12 3.075c-4.063 0-5.51 2.322-5.51 4.5A4.047 4.047 0 008.046 11H3a.75.75 0 000 1.5h9.715a.758.758 0 00.106.009c.017 0 .033-.008.05-.009H21a.75.75 0 000-1.5z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      V.metadata = { width: 24, height: 24 }
      var j = V,
        W = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            O()(
              O()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M21.75 16.75a.75.75 0 01-.75.75H9A.75.75 0 019 16h12a.75.75 0 01.75.75zM9 7.5h12A.75.75 0 0021 6H9a.75.75 0 000 1.5zM4.5 4.25A2.25 2.25 0 106.75 6.5 2.253 2.253 0 004.5 4.25zm0 10a2.25 2.25 0 102.25 2.25 2.253 2.253 0 00-2.25-2.25z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      W.metadata = { width: 24, height: 24 }
      var K = W,
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            O()(
              O()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            w.a.createElement(
              'g',
              null,
              w.a.createElement('path', {
                d: 'M2.079 6.085a.75.75 0 01.336-1.006l2-1A.75.75 0 015.5 4.75v5a.75.75 0 01-1.5 0V5.964l-.915.457a.748.748 0 01-1.006-.336zM6 18.25H4.8l1.306-1.313a2.162 2.162 0 00-1.531-3.687 2.328 2.328 0 00-2.325 2.325v.368a.75.75 0 101.5 0v-.368a.826.826 0 01.825-.825.664.664 0 01.47.2.652.652 0 01.192.472.662.662 0 01-.192.462l-2.577 2.588A.75.75 0 003 19.75h3a.75.75 0 000-1.5zM21 16H9a.75.75 0 000 1.5h12a.75.75 0 000-1.5zm0-10H9a.75.75 0 000 1.5h12A.75.75 0 0021 6z',
                fillRule: 'evenodd',
              }),
            ),
          )
        }
      U.metadata = { width: 24, height: 24 }
      var G = U,
        N = ['additionalToolbarButtonConfigs', 'inputStyle'],
        X = [
          { label: 'Heading 1', size: 'headline1' },
          { label: 'Heading 2', size: 'headline2' },
          { label: 'Paragraph', size: 'body' },
        ],
        J = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(p()(e), 'state', { selectedTextSize: X[2] }),
              v()(p()(e), '_handleTextSizeClick', function (t) {
                return function () {
                  e.setState({ selectedTextSize: t })
                }
              }),
              v()(p()(e), '_renderToolbarButtonGroup', function (e, t) {
                return w.a.createElement(
                  I.a,
                  { style: Y.buttonGroup },
                  t ? null : w.a.createElement(L, { style: Y.itemMargin }),
                  e.map(function (e, n) {
                    return w.a.createElement(
                      T.a,
                      o()({ style: 0 === n && t ? null : Y.itemMargin, type: 'primaryText' }, e),
                    )
                  }),
                )
              }),
              v()(p()(e), '_renderActionMenu', function (t) {
                var n = X.map(function (t) {
                  return {
                    disabled: e.state.selectedTextSize === t,
                    text: w.a.createElement(C.b, { size: t.size }, t.label),
                    onClick: e._handleTextSizeClick(t),
                  }
                })
                return w.a.createElement(E.a, { items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
              }),
              v()(p()(e), '_setFieldTextInputRef', function (t) {
                e.fieldTextInput = t
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
                    a = r()(e, N),
                    i = this.state.selectedTextSize,
                    l = [
                      { icon: q.iconBold, key: 'bold' },
                      { icon: q.iconItalic, key: 'italic' },
                      { icon: q.iconCode, key: 'code' },
                      { icon: q.iconStrikethrough, key: 'strikethrough' },
                    ],
                    c = [
                      { icon: q.iconBulletedList, key: 'bulleted list' },
                      { icon: q.iconNumberedList, key: 'numbered list' },
                    ]
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      I.a,
                      { style: Y.toolbar },
                      this._renderToolbarButtonGroup(l, !0),
                      w.a.createElement(L, { style: Y.itemMargin }),
                      w.a.createElement(
                        I.a,
                        { style: Y.textSizeSelection },
                        w.a.createElement(C.b, { color: 'gray700', numberOfLines: 1 }, null == i ? void 0 : i.label),
                        w.a.createElement(x.a, {
                          Icon: A.a,
                          iconSize: 'small',
                          renderActionMenu: this._renderActionMenu,
                          style: Y.itemMargin,
                        }),
                      ),
                      this._renderToolbarButtonGroup(c),
                      t ? this._renderToolbarButtonGroup(t) : null,
                    ),
                    w.a.createElement(_.a, o()({ inputStyle: [Y.input, n], ref: this._setFieldTextInputRef }, a)),
                  )
                },
              },
              {
                key: 'focus',
                value: function () {
                  var e
                  null === (e = this.fieldTextInput) || void 0 === e || e.focus()
                },
              },
              {
                key: 'getTextInputHeight',
                value: function () {
                  var e
                  return null === (e = this.fieldTextInput) || void 0 === e ? void 0 : e.getTextInputHeight()
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      v()(J, 'defaultProps', { leftAligned: !0, multiline: !0, styleType: 'selection' })
      var Y = k.a.create(function (e) {
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
        q = {
          iconBold: w.a.createElement(P, { style: Y.iconGray }),
          iconItalic: w.a.createElement(H, { style: Y.iconGray }),
          iconCode: w.a.createElement(D.a, { style: Y.iconGray }),
          iconStrikethrough: w.a.createElement(j, { style: Y.iconGray }),
          iconBulletedList: w.a.createElement(K, { style: Y.iconGray }),
          iconNumberedList: w.a.createElement(G, { style: Y.iconGray }),
        }
    },
    kXdP: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
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
        return r.a.createElement(
          o.a,
          {
            contentStyle: l.popover,
            enableHover: !0,
            renderContent: function () {
              return r.a.createElement(i.b, { style: l.hoverText }, n)
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
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('MWbm')
      t.a = function (e) {
        var t = e.contentState.blocks.map(function (e) {
          return r.a.createElement(i.b, { key: e.key }, e.text)
        })
        return r.a.createElement(o.a, null, t)
      }
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return K
      })
      n('yiKp')
      var a = n('97Jx'),
        r = n.n(a),
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
        v = n.n(b),
        g = (n('2G9S'), n('ERkP')),
        w = n.n(g),
        E = n('38/B'),
        C = n('t62R'),
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
        M = n('n5fo'),
        z = n('5emT'),
        F = n('Oib4'),
        P = n('WtWS'),
        R = n('ioan'),
        H = [
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
        D = function (e) {
          return e.length
        },
        V = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D
          return t(e)
        },
        j = I.a.de540c32,
        W = I.a.b4abfdb3,
        K = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n(e) {
            var a
            c()(this, n),
              (a = t.call(this, e)),
              v()(p()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              v()(p()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              v()(
                p()(a),
                '_getTextInputStyle',
                Object(_.a)(function (e) {
                  return [U.root, !e && U.disabled]
                }),
              ),
              v()(p()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = a.state.isPasswordRevealed
                return 'password' === n && t ? (r ? 'text' : 'password') : n
              }),
              v()(p()(a), '_calculateLength', function (e) {
                return V(e, a.props.calculateLength)
              }),
              v()(p()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              v()(p()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o = a.props.type,
                  l =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  c =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === l && !0 === c
              }),
              v()(p()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              v()(p()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  r = a._calculateLength(n),
                  i = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              v()(p()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  r = e.currentTarget.value,
                  i = a._calculateLength(r),
                  o = a._getActualCount(r),
                  l = a._getAdjustedMaxLength()
                void 0 !== l && r.length > l && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              v()(p()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t(e)
              }),
              v()(p()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              v()(p()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                B.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              v()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                B.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              v()(p()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              v()(p()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              v()(p()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  r = e.validLength,
                  i = !!a,
                  o = 'string' == typeof e.value,
                  l = 'string' == typeof t
                L()(
                  !(!l && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  L()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  L()(
                    !((void 0 !== n && n <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              v()(p()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              v()(p()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              v()(p()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  t = a.getValue(),
                  n = a._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              a._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              i = e.value || r || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(i),
                actualCount: D(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              a
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
                      a = t.onChange,
                      r = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      l = e.onChange,
                      c = e.validLength,
                      s = e.value
                    ;(c === r && n === o && !!a === !!l && ('string' == typeof i) === ('string' == typeof s)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      a = e.errorText,
                      r = e.helperText,
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
                          r ? this._renderHelperText() : null,
                          l && a ? this._renderErrorText() : null,
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
                      a = this._isLabelLarge()
                    return w.a.createElement(
                      C.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          G.textInputHeaderItem,
                          a && G.placeholderText,
                          !E.a.reducedMotionEnabled && G.transition,
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
                      a =
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
                      i = (e.style, e.type, e.validLength, o()(e, H))
                    return w.a.createElement(
                      O.a,
                      { style: U.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        C.b,
                        { size: 'headline1', style: U.wrapper },
                        w.a.createElement(
                          R.a,
                          r()({}, i, {
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
                      a && !this._isLabelLarge() ? this._renderValidationIcon() : null,
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
                      a = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? w.a.createElement(
                          O.a,
                          { style: G.passwordVisibilityIconContainer },
                          w.a.createElement(T.a, {
                            accessibilityLabel: a ? W : j,
                            focusable: !0,
                            hoverLabel: { label: a ? W : j },
                            icon: a ? w.a.createElement(M.a, null) : w.a.createElement(z.a, null),
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
                        C.b,
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
                        C.b,
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
                      a = t && I.a.ia24dc8c(t),
                      r = I.a.ia24dc8c(e)
                    return w.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'polite', style: [G.textInputHeaderItem, G.displayCount] },
                      w.a.createElement(
                        C.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(r, ' / ').concat(a) : '',
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
                      ? w.a.createElement(F.a, { style: [G.validationIcon, x.a.invalidColor] })
                      : w.a.createElement(P.a, { style: [G.validationIcon, x.a.validColor] })
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
                      a = e.value,
                      r = 'string' == typeof a ? V(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(w.a.Component)
      v()(K, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
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
      var a = n('rHpw').a.create(function (e) {
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
      t.a = a
    },
    taB0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'rootDetailScreenTitle', function () {
          return b
        }),
        n.d(t, 'TwitterArticleListScreen', function () {
          return v
        })
      var a = n('ERkP'),
        r = n.n(a),
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
        d = n('Cp2k'),
        p = n('M2mT'),
        h = n('c6pJ'),
        m = n('MWbm'),
        f = n('/yvb'),
        y = n('rHpw'),
        b = 'Twitter Articles',
        v = function (e) {
          var t = r.a.useContext(i.a),
            n = t.decrementDmDrawerInhibitorCount,
            a = t.incrementDmDrawerInhibitorCount,
            o = e.createLocalApiErrorHandler,
            l = e.createTwitterArticle,
            c = e.history,
            s = e.loggedInUserId
          r.a.useEffect(
            function () {
              return (
                a(),
                function () {
                  n()
                }
              )
            },
            [n, a],
          )
          var u = r.a.createElement(f.a, {
            accessibilityLabel: 'create',
            icon: w,
            onPress: function () {
              l('')
                .then(function (e) {
                  if ('string' == typeof (null == e ? void 0 : e.result)) {
                    var t,
                      n,
                      a =
                        null == e ||
                        null === (t = e.entities) ||
                        void 0 === t ||
                        null === (n = t.twitterArticles) ||
                        void 0 === n
                          ? void 0
                          : n[e.result].rest_id
                    a && c.push('/i/twitter-article-composer/edit/'.concat(a))
                  }
                })
                .catch(o({ showToast: !0 }))
            },
            type: 'primaryText',
          })
          return s
            ? r.a.createElement(
                p.a,
                { rightControl: u, screenType: 'secondaryRoot', title: b },
                r.a.createElement(
                  m.a,
                  { style: g.container },
                  r.a.createElement(h.a, { linkToEditScreen: !0, publishedOnly: !1, userId: s }),
                ),
              )
            : null
        },
        g = y.a.create(function (e) {
          return { container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }
        }),
        w = r.a.createElement(d.a, null),
        E = u(v)
      t.default = E
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
      var a = n('ERkP'),
        r = n.n(a),
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
            a = Object(s.f)()
          return r.a.createElement(u.a, {
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
                    a.push('/i/twitter-article-composer/edit/'.concat(e.entities.twitterArticles[e.result].rest_id))
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
        v = c(y)
      t.default = v
    },
  },
])
//# sourceMappingURL=WIPED
