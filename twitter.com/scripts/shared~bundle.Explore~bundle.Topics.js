;(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('TJCb'), n('7x/C'), n('DZ+c'), n('KOtZ'), n('0zG9'), n('KqXw'), n('Ysgh'), n('tQbP'), n('7xRU')
      var a = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return r(n, 0).toString()
        },
        r = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), a = t, r = 0; r < n.length; r++) {
            ;(a = (a << 5) - a + n.charCodeAt(r)), (a &= a)
          }
          return a
        }
    },
    I6Uj: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a)
      function i(e) {
        return null
      }
      var o = n('97Jx'),
        l = n.n(o),
        c = n('yiKp'),
        u = n.n(c),
        s = (n('jwue'), n('7x/C'), n('+oxZ'), n('3XMw')),
        f = n.n(s),
        d = n('/yvb'),
        p = n('fn9Y'),
        m = f.a.c0530da5,
        b = f.a.ifea3114
      var h = function (e) {
          return r.a.createElement(d.a, {
            accessibilityLabel: m,
            hoverLabel: { label: b },
            icon: r.a.createElement(p.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        v = 'share-button',
        g = 'share-by-tweet',
        w = n('m3Bd'),
        y = n.n(w),
        E = n('1YZw'),
        T = n('CaKu'),
        C = n('y+lG'),
        I = n('SrIh'),
        x = n('Irs7'),
        S = n('uDfI'),
        O = n('zCf4'),
        L = n('jwTb'),
        _ = n('SOvA'),
        k = n('I/9y'),
        F = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: L.a,
            text: f.a.fcc684a9,
            testID: g,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: _.a,
            text: f.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return T.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: k.a,
            text: f.a.e05c00b4,
          },
          via: {
            isAvailable: function () {
              return 'function' == typeof window.navigator.share
            },
            scribeAction: 'share_via',
            Icon: p.a,
            text: f.a.if23a251,
          },
        },
        j = ['isAvailable', 'scribeAction']
      function A(e) {
        var t = Object(x.b)()
        return {
          getActionItem: (function (e, t) {
            var n = Object(S.c)(),
              a = Object(O.f)()
            return r.a.useMemo(
              function () {
                return function (r) {
                  var i = F[r.type],
                    o = i.isAvailable,
                    l = i.scribeAction,
                    c = y()(i, j)
                  if (!o()) return null
                  var s = u()({}, c)
                  function f() {
                    var i = r.shareText || e.shareText,
                      o = e.url,
                      c = u()(u()({}, e.scribeNamespace), {}, { action: l }, r.scribeNamespace),
                      s = { text: i, url: o },
                      f = { analytics: t, dispatch: n, history: a, mergedScribeNamespace: c }
                    !(function (e, t, n) {
                      var a = function () {
                        return n.analytics.scribe(n.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return a(), void n.history.push(u()(u()({}, M(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            T.a.setString(Object(C.a)(t.url)),
                            a(),
                            void n.dispatch(Object(E.b)({ text: B.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            a(),
                            void n.history.push(
                              u()(
                                u()({ pathname: '/compose/tweet' }, M(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: Object(C.a)(t.url) })
                            .then(a)
                            .catch(function () {
                              n.analytics.scribe(u()(u()({}, n.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(I.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(r.type, s, f)
                  }
                  return r.label && (s.text = r.label), u()(u()({}, s), {}, { onClick: f })
                }
              },
              [t, n, a, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var B = { copyLinkSuccessMessage: f.a.f88553c8, shareTextPrefixFormatter: f.a.gb5851d7 }
      function M(e) {
        var t = e.url,
          n = e.text
        return { query: { text: n ? B.shareTextPrefixFormatter({ prefix: n, url: t }) : t } }
      }
      var H = n('mN6z')
      var P = n('mjJ+'),
        D = n('rHpw'),
        N = { element: 'share' }
      function R(e) {
        var t = (function (e) {
            var t = r.a.useRef({ previous: void 0 })
            function n(e) {
              return (t.current.previous = e), e
            }
            var a = t.current.previous
            return a && (e === a || Object(H.a)(e, a)) ? a : n(e)
          })(u()(u()({}, N), e.scribeNamespace)),
          n = A(u()(u()({}, e), {}, { scribeNamespace: t })),
          a = n.analytics,
          i = n.getActionItem
        var o = e.ButtonComponent || U
        return r.a.createElement(o, {
          onPress: function () {
            var e = u()(u()({}, t), {}, { action: 'share_menu_click' })
            a.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var n = []
            return (
              e.children
                ? r.a.Children.forEach(e.children, function (e) {
                    if (r.a.isValidElement(e)) {
                      var t = i(e.props)
                      t && n.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = i({ type: e })
                    t && n.push(t)
                  }),
              r.a.createElement(P.a, { isFixed: e.isFixed, items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function U(e) {
        return r.a.createElement(h, l()({}, e, { style: G.button, testID: v }))
      }
      var G = D.a.create(function (e) {
          return { button: { marginRight: e.spaces.space4 } }
        }),
        z = ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel']
      function K(e) {
        var t = e.copyLinkShareLabel,
          n = e.dmShareLabel,
          a = e.externalShareLabel,
          o = e.tweetShareLabel,
          l = y()(e, z)
        return r.a.createElement(
          R,
          l,
          r.a.createElement(i, { label: o, type: 'tweet' }),
          r.a.createElement(i, { label: n, type: 'dm' }),
          r.a.createElement(i, { label: t, type: 'copy' }),
          r.a.createElement(i, { label: a, type: 'via' }),
        )
      }
      ;(K.Action = i), (K.Custom = R)
      t.a = K
    },
    LWCC: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        u = n('5Yy7'),
        s = n.n(u),
        f = n('2VqO'),
        d = n.n(f),
        p = n('KEM+'),
        m = n.n(p),
        b = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        h = n.n(b),
        v = n('Zejx'),
        g = n('rxPX'),
        w = n('0KEI'),
        y = Object(g.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: v.a.follow,
              unfollow: v.a.unfollow,
            }
          })
          .withAnalytics(),
        E = n('CGyZ'),
        T = n('PbbS'),
        C = n('3XMw'),
        I = n.n(C),
        x = n('sUoZ'),
        S = n('Tp1h'),
        O = n('Jkc4'),
        L = n('TnY3'),
        _ = Object.freeze({ follow: I.a.i79ab12a, following: I.a.d960b55b, unfollow: I.a.c0f56044 }),
        k = Object.freeze({
          follow: I.a.fcf51fe6,
          following: I.a.e9a90d71,
          unfollow: I.a.bf403715,
          confirmationHeadline: I.a.c9f08e28,
          confirmationSheetText: I.a.abc600f3,
        }),
        F = Object.freeze({
          follow: I.a.cd876e01,
          following: I.a.f2816e02,
          unfollow: I.a.f5b04fbb,
          confirmationHeadline: I.a.c481ae3f,
          confirmationSheetText: I.a.aa3ba123,
        }),
        j = Object.freeze({
          follow: I.a.e0e730b0,
          following: I.a.e0e730b0,
          unfollow: I.a.b1850062,
          confirmationHeadline: I.a.gd3f996f,
          confirmationSheetText: I.a.i36c403c,
        }),
        A = (function (e) {
          s()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_getDisplayMode', function (t) {
                return void 0 === e._getFollowButtonIcon(t) ? 'only-text' : 'icon-text'
              }),
              m()(c()(e), '_getFollowButtonIcon', function (e) {
                switch (e) {
                  case T.a.Favorite:
                  case T.a.Star:
                  case T.a.Interested:
                    return h.a.createElement(x.a, null)
                  case T.a.FollowTopic:
                  case T.a.Default:
                  default:
                    return
                }
              }),
              m()(c()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? h.a.createElement(h.a.Fragment, null) : void 0
              }),
              m()(c()(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case T.a.FollowTopic:
                    return { follow: _.follow, unfollow: _.unfollow, following: _.following }
                  case T.a.Favorite:
                    return {
                      follow: F.follow,
                      unfollow: F.unfollow,
                      following: F.following,
                      confirmationHeadline: F.confirmationHeadline && F.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: F.confirmationSheetText,
                    }
                  case T.a.Star:
                    return {
                      follow: k.follow,
                      unfollow: k.unfollow,
                      following: k.following,
                      confirmationHeadline: k.confirmationHeadline && k.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: k.confirmationSheetText,
                    }
                  case T.a.Interested:
                    return {
                      follow: j.follow,
                      unfollow: j.unfollow,
                      following: j.following,
                      confirmationHeadline: j.confirmationHeadline && j.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: j.confirmationSheetText,
                    }
                  case T.a.Default:
                  default:
                    return
                }
              }),
              m()(c()(e), '_handleOnFollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.educateOnFollow,
                  r = t.follow,
                  i = t.history,
                  o = t.topic
                r(o.id).catch(n()),
                  e._handleScribe('follow'),
                  a && o && i.push({ pathname: '/i/topics/education', state: { topicName: o.name } })
              }),
              m()(c()(e), '_handleOnUnfollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.topic
                ;(0, t.unfollow)(a.id).catch(n()), e._handleScribe('unfollow')
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.ariaDescribedBy,
                    a = t.isTransparent,
                    r = t.nativeID,
                    i = t.showRelationshipChangeConfirmation,
                    o = t.size,
                    l = t.style,
                    c = t.textMode,
                    u = t.topic,
                    s = u.following,
                    f = u.name
                  return h.a.createElement(O.a, { customText: f, displayMode: S.a.topic }, function (t) {
                    return h.a.createElement(E.a, {
                      ariaDescribedBy: n,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(c),
                        followingIcon: e._getFollowingButtonIcon(c),
                      },
                      buttonText: e._getButtonText(c),
                      displayMode: e._getDisplayMode(c),
                      isFollowing: s,
                      isTransparent: a,
                      name: f,
                      nativeID: r,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: i,
                      size: o,
                      style: l,
                      type: 'topic',
                      withConfirmationSheetText: s,
                    })
                  })
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribe({ element: 'topic', action: e })
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      m()(A, 'defaultProps', { size: 'small', textMode: T.a.Default })
      t.a = Object(L.a)(y(A))
    },
    PbbS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f'), n('ERkP')
      var a = Object.freeze({
        Default: 'default',
        FollowTopic: 'follow',
        Star: 'star',
        Interested: 'interested',
        Favorite: 'favorite',
      })
    },
    UZjl: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('m3Bd'),
        c = n.n(l),
        u = (n('hBpG'), n('7x/C'), n('ERkP')),
        s = n.n(u),
        f = n('es0u'),
        d = n('hqKg'),
        p = n('MDbM'),
        m = n('rxPX'),
        b = function (e, t) {
          return t.module.selectPageConfiguration(e)
        },
        h = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        v = Object(d.createSelector)(b, h, function (e, t) {
          return t !== p.a.LOADED || (!!e && !!e.tabs)
        }),
        g = Object(m.a)()
          .propsFromState(function () {
            return { hasTabNavigation: v, pageConfiguration: b, initialFetchStatus: h }
          })
          .withAnalytics(),
        w = n('QIgh'),
        y = n('s14A'),
        E = n('dwig'),
        T = (n('uFXj'), n('7JQg')),
        C = n('rHpw'),
        I = n('GKOv'),
        x = n('Rp9C'),
        S = n('Irs7'),
        O = n('FGLp')
      function L(e, t) {
        var n = Object(S.b)(),
          a = t || {},
          r = a.component,
          i = a.element,
          o = s.a.useMemo(
            function () {
              return { items: [x.a.forTopic(e, t)] }
            },
            [t, e],
          )
        return (
          Object(O.a)(function () {
            n.scribe({ component: r, element: i, action: 'impression', data: o })
          }),
          { namespace: { component: r, element: i }, data: o }
        )
      }
      var _ = n('MWbm')
      function k(e) {
        var t = e.header,
          n = t.clientEventInfo,
          a = t.displayType,
          r = t.facepile,
          i = t.landingContext,
          o = t.topicId,
          l = e.onHeaderVisible,
          c = L(o, n),
          u = c.data,
          f = c.namespace
        return s.a.createElement(
          _.a,
          { style: F.root },
          s.a.createElement(
            T.c,
            { data: u, namespace: f },
            s.a.createElement(I.a, {
              displayType: a,
              facepile: r,
              onFollowHeaderOffscreen: function (e) {
                var t = e.isOffscreen
                return l(!t)
              },
              topicId: o,
              topicLandingContext: i,
              withDivider: !0,
            }),
          ),
        )
      }
      var F = C.a.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        j = n('3XMw'),
        A = n.n(j),
        B = (n('1t7P'), n('jQ/y'), n('ho0z'), n('zI2C')),
        M = n('v6aA'),
        H = n('Zejx'),
        P = function (e, t) {
          var n = t.navBar.topicId ? t.navBar.topicId : ''
          return H.a.select(e, n)
        },
        D = Object(m.a)().propsFromState(function () {
          return { topic: P }
        }),
        N = n('PbbS'),
        R = n('LWCC'),
        U = n('IcAo'),
        G = n('rJoH'),
        z = n('I6Uj'),
        K = n('zfvc'),
        V = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        W = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        Q = A.a.ed88e742
      var Z = C.a.create(function (e) {
          return {
            rightControl: { flexDirection: 'row' },
            followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
          }
        }),
        J = D(function (e) {
          var t = e.navBar.topicId ? e.navBar.topicId : '',
            n = e.isHeaderOffscreen,
            a = e.navBar.clientEventInfo,
            r = e.pageNamespace,
            i = e.topic,
            o = e.withAppLinks,
            l = e.withOpenGraphMeta,
            c = s.a.useContext(M.a).featureSwitches.isTrue('topic_landing_page_share_enabled'),
            u = L(t, a),
            f = u.data,
            d = u.namespace,
            p = Object(U.a)({}, r, d)
          return i
            ? s.a.createElement(
                T.c,
                { data: f, namespace: p },
                s.a.createElement(
                  s.a.Fragment,
                  null,
                  l
                    ? s.a.createElement(G.a, {
                        canonical: V(t),
                        description: i.description,
                        title: i.name,
                        type: 'article',
                      })
                    : null,
                  o ? s.a.createElement(B.a, { deepLink: W(t) }) : null,
                  s.a.createElement(
                    _.a,
                    { style: Z.rightControl },
                    s.a.createElement(
                      _.a,
                      { style: Z.followButtonContainer },
                      s.a.createElement(
                        K.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        s.a.createElement(R.a, { size: 'medium', textMode: N.a.FollowTopic, topic: i }),
                      ),
                    ),
                    c ? s.a.createElement(z.a, { copyLinkShareLabel: Q, scribeNamespace: p, url: V(t) }) : null,
                  ),
                ),
              )
            : null
        }),
        q = n('yoO3'),
        Y = n('VrFO'),
        X = n.n(Y),
        $ = n('Y9Ll'),
        ee = n.n($),
        te = n('1Pcy'),
        ne = n.n(te),
        ae = n('5Yy7'),
        re = n.n(ae),
        ie = n('2VqO'),
        oe = n.n(ie),
        le = n('KEM+'),
        ce = n.n(le),
        ue = (n('2G9S'), n('v84o')),
        se = n('0KEI'),
        fe = function (e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        de = function (e, t) {
          var n = t.selectedTabId,
            a = fe(e, t)
          return (
            a &&
            a.tabs &&
            a.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        pe = Object(m.a)()
          .propsFromState(function () {
            return { pageConfiguration: fe, selectedTab: de }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(se.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
            }
          })
          .withAnalytics(),
        me = n('doI8'),
        be = n('oQhu'),
        he = n('fTQJ'),
        ve = ['entityToken'],
        ge = pe(
          (function (e) {
            re()(n, e)
            var t = oe()(n)
            function n() {
              var e
              X()(this, n)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                ce()(ne()(e), '_getTimelineNamespace', function () {
                  var t = e.props,
                    n = t.analytics,
                    a = t.pageConfiguration,
                    r = t.selectedTab,
                    i = (null == r ? void 0 : r.scribeConfig) || (null == a ? void 0 : a.scribeConfig)
                  if (i) {
                    i.entityToken
                    return c()(i, ve)
                  }
                  return n.contextualScribeNamespace
                }),
                ce()(
                  ne()(e),
                  '_getModule',
                  Object(be.a)(function (e, t, n, a) {
                    if ((null == e ? void 0 : e.id) !== t) {
                      if (null != e && e.urtEndpoint)
                        return Object(ue.a)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: a })
                      if (null != e && e.graphQLTimelineId) return Object(me.a)(e.graphQLTimelineId)
                    }
                    return n
                  }),
                ),
                ce()(ne()(e), '_getRefreshIntervalSecForCurrentTab', function () {
                  var t,
                    n = e.props,
                    a = n.pageConfiguration,
                    r = n.selectedTab,
                    i = null == a || null === (t = a.tabs) || void 0 === t ? void 0 : t.initialTabId
                  if (r) return r.refreshIntervalSec
                  if (i) {
                    var o,
                      l =
                        null == a || null === (o = a.tabs) || void 0 === o
                          ? void 0
                          : o.tabs.find(function (e) {
                              return i === e.id
                            })
                    return null == l ? void 0 : l.refreshIntervalSec
                  }
                }),
                e
              )
            }
            return (
              ee()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t,
                      n = this.props,
                      a = n.entryConfiguration,
                      r = n.initialModule,
                      i = n.pageConfiguration,
                      o = n.prerollDisplayLocation,
                      l = n.refreshControl,
                      c = n.renderEmptyState,
                      u = n.renderUnavailable,
                      f = n.selectedTab,
                      d = n.timelinePrefix,
                      p = n.title,
                      m = n.withoutHeadroom,
                      b = {
                        token: null == i || null === (e = i.scribeConfig) || void 0 === e ? void 0 : e.entityToken,
                      },
                      h = this._getModule(
                        f,
                        null == i || null === (t = i.tabs) || void 0 === t ? void 0 : t.initialTabId,
                        r,
                        d,
                      ),
                      v = this._getRefreshIntervalSecForCurrentTab(),
                      g = v ? 1e3 * v : void 0
                    return s.a.createElement(
                      T.c,
                      { namespace: this._getTimelineNamespace() },
                      s.a.createElement(he.a, {
                        behavioralEventContext: b,
                        entryConfiguration: a,
                        module: h,
                        pollingIntervalMsOverride: g,
                        prerollDisplayLocation: o,
                        refreshControl: l,
                        renderEmptyState: c,
                        renderUnavailable: u,
                        title: p,
                        withoutHeadroom: m,
                      }),
                    )
                  },
                },
              ]),
              n
            )
          })(s.a.Component),
        ),
        we = (n('z84I'), n('+Kfv')),
        ye = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        Ee = function (e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        Te = function (e, t) {
          var n = t.selectedTabId,
            a = Ee(e, t)
          return (
            a &&
            a.tabs &&
            a.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        Ce = Object(m.a)()
          .propsFromState(function () {
            return { initialFetchStatus: ye, pageConfiguration: Ee, selectedTab: Te }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(se.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
              fetchInitial: t.fetchInitial,
            }
          })
          .withAnalytics(),
        Ie = n('Nhmk'),
        xe = n('k/OQ'),
        Se = n('G8HL'),
        Oe = ['entityToken'],
        Le = { viewType: 'controls' },
        _e = (function (e) {
          re()(n, e)
          var t = oe()(n)
          function n() {
            var e
            X()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              ce()(ne()(e), '_fetchPageModule', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetchInitial,
                  i = t.pageConfiguration,
                  l = i ? i.scribeConfig : void 0
                return r().then(function (t) {
                  t.performed && n.scribe(o()(o()({}, e._getScribeNamespace(l)), {}, { action: 'get_initial' }))
                }, a(Ie.a))
              }),
              ce()(ne()(e), '_render', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.getTabLink,
                  r = t.pageConfiguration,
                  i = t.selectedTab,
                  o = null == r ? void 0 : r.tabs
                if (o && o.tabs) {
                  var l,
                    c = (i && i.id) || o.initialTabId,
                    u = r ? r.scribeConfig : void 0,
                    f = o.tabs.map(function (t, r) {
                      var i,
                        o = t.id === c
                      return (
                        o && (l = r),
                        {
                          isActive: function () {
                            return o
                          },
                          key: t.labelText,
                          label: t.labelText,
                          onClick: function () {
                            n.scribe(
                              e._buildTabNamespace(e._getScribeNamespace(u), e._getScribeNamespace(t.scribeConfig)),
                            )
                          },
                          to: a(t.id),
                          token: null === (i = t.scribeConfig) || void 0 === i ? void 0 : i.entityToken,
                        }
                      )
                    })
                  return s.a.createElement(
                    we.a,
                    { behavioralEventContext: Le },
                    s.a.createElement(xe.a, { links: f, visibleItemIndex: l }),
                  )
                }
                return null
              }),
              e
            )
          }
          return (
            ee()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchPageModule()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(e.module === this.props.module && this.props.initialFetchStatus) || this._fetchPageModule()
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.initialFetchStatus === p.a.LOADED ? this._render() : null
                },
              },
              {
                key: '_buildTabNamespace',
                value: function (e, t) {
                  var n
                  return (
                    e && (n = e),
                    t && (n = o()(o()({}, n), t)),
                    o()(o()({}, n), {}, { element: 'tab', action: 'navigate' })
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function (e) {
                  if (e) {
                    e.entityToken
                    return c()(e, Oe)
                  }
                },
              },
            ]),
            n
          )
        })(s.a.Component),
        ke = Ce(Object(Se.a)(_e)),
        Fe = n('VS6U'),
        je = n('5Y9N'),
        Ae = n('FIs5'),
        Be = n('cHvH'),
        Me = n('mw9i'),
        He = ['entityToken'],
        Pe = ['entityToken'],
        De = A.a.e9f1fbcb,
        Ne = s.a.createElement(f.a, null),
        Re = function (e) {
          var t = e.TabBar,
            n = e.backLocation,
            a = e.behavioralEventViewType,
            i = e.documentTitle,
            l = e.entryConfiguration,
            u = e.fab,
            f = e.getTabLink,
            d = e.hasTabNavigation,
            m = e.history,
            b = e.initialFetchStatus,
            h = e.initialPageNamespace,
            v = e.logoButton,
            g = e.module,
            w = e.onBackClick,
            I = e.pageConfiguration,
            x = e.prerollDisplayLocation,
            S = e.renderEmptyState,
            O = e.renderUnavailable,
            L = e.rightControl,
            _ = e.searchBoxRef,
            F = e.selectedTabId,
            j = e.sidebarContent,
            A = e.timelinePrefix,
            B = e.title,
            M = e.withAppLinks,
            H = e.withBottomLoginSignupBar,
            P = e.withDeferredView,
            D = e.withOpenGraphMeta,
            N = e.withSearchBox,
            R = e.withTweetButton,
            G = s.a.useRef(
              Object(be.a)(function (e, t) {
                return o()(o()({}, t), Object(je.a)({ isWide: e }))
              }),
            ).current,
            z = s.a.useState(!0),
            K = r()(z, 2),
            V = K[0],
            W = K[1],
            Q = I || {},
            Z = Q.header,
            Y = Q.navBar,
            X = Q.subtitle,
            $ = Q.title,
            ee = b === p.a.LOADED ? $ || B : '',
            te = (function (e, t, n) {
              var a = (null == t ? void 0 : t.scribeConfig) || {},
                r = (a.entityToken, c()(a, He)),
                i = null == t ? void 0 : t.tabs,
                o = e || (null == i ? void 0 : i.initialTabId),
                l =
                  null == i
                    ? void 0
                    : i.tabs.find(function (e) {
                        return e.id === o
                      }),
                u = (null == l ? void 0 : l.scribeConfig) || {},
                s = (u.entityToken, c()(u, Pe))
              return Object(U.a)({}, n, r, s)
            })(F, I, h),
            ne = Z ? s.a.createElement(k, { header: Z, onHeaderVisible: W }) : null,
            ae = Y
              ? s.a.createElement(J, {
                  isHeaderOffscreen: !V,
                  navBar: Y,
                  pageNamespace: te,
                  withAppLinks: M,
                  withOpenGraphMeta: D,
                })
              : null,
            re = P ? y.a : s.a.Fragment,
            ie = s.a.createElement(Be.a, null, function (e) {
              var t = e.windowWidth >= C.a.theme.breakpoints.medium
              return s.a.createElement(
                s.a.Fragment,
                null,
                ne,
                s.a.createElement(
                  re,
                  null,
                  s.a.createElement(ge, {
                    entryConfiguration: G(t, l),
                    initialModule: g,
                    prerollDisplayLocation: x,
                    renderEmptyState: S,
                    renderUnavailable: O,
                    selectedTabId: F,
                    timelinePrefix: A,
                    title: B,
                    withoutHeadroom: !0,
                  }),
                ),
              )
            }),
            oe = u ? s.a.createElement(E.a, { component: Me.a, fab: u }, ie) : ie,
            le = f && d ? s.a.createElement(ke, { getTabLink: f, module: g, selectedTabId: F }) : void 0
          return s.a.createElement(
            T.c,
            { namespace: te },
            s.a.createElement(
              q.a,
              { behavioralEventViewType: a },
              s.a.createElement(Fe.a, {
                TabBar: t,
                backLocation: n,
                documentTitle: i,
                history: m,
                logoButton: v,
                onBackClick: w,
                primaryContent: oe,
                rightControl: ae || L,
                searchBoxRef: _,
                secondaryBar: le,
                sidebarContent: j,
                subtitle: X,
                title: ne && V ? B : ee,
                withBottomLoginSignupBar: H,
                withSearchBox: N,
                withTweetButton: R,
              }),
            ),
          )
        }
      Re.defaultProps = {
        entryConfiguration: w.default,
        renderEmptyState: function () {
          return s.a.createElement(Ae.a, { header: De })
        },
        sidebarContent: Ne,
        withDeferredView: !1,
        withAppLinks: !1,
        withOpenGraphMeta: !1,
      }
      var Ue = g(Re)
      t.a = Ue
    },
    doI8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('WpDa'),
        o = n('ZNT5')
      t.b = function (e) {
        var t = e.endpointParams,
          n = e.endpointUrl,
          a = e.timelineId
        return Object(o.a)({
          timelineId: a,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var a = e.count,
              i = e.cursor
            return r()(r()({}, t), {}, { cursor: 'string' == typeof i ? i : void 0, count: a, endpointUrl: n })
          },
          context: 'FETCH_TIMELINE',
          perfKey: 'generic',
        })
      }
      var l = function (e) {
        return Object(o.a)({
          timelineId: 'generic-graphql-timeline-'.concat(e),
          getEndpoint: function (e) {
            return e.Graphql.fetchGenericTimelineById
          },
          getEndpointParams: function (t) {
            var n = t.count,
              a = t.cursor
            return { cursor: 'string' == typeof a ? a : void 0, count: n, timelineId: e }
          },
          formatResponse: i.a,
          context: 'FETCH_GENERIC_TIMELINE_GQL',
          perfKey: 'genericGQL',
        })
      }
    },
    sUoZ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        u = function () {
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
                d: 'M22.18 9.565c-.157-.487-.61-.82-1.126-.82h-5.928l-2.007-5.88c-.164-.476-.612-.8-1.12-.8s-.956.322-1.12.8L8.874 8.743H2.945c-.513 0-.97.332-1.126.82-.158.49.02 1.02.44 1.318l4.735 3.357-2.018 5.908c-.164.484 0 1.02.415 1.324.415.304.97.31 1.39.016L12 17.782l5.22 3.703c.206.146.446.218.686.218.25 0 .497-.08.705-.233.41-.305.577-.84.41-1.324l-2.015-5.906 4.735-3.356c.414-.3.595-.83.44-1.32z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    v84o: function (e, t, n) {
      'use strict'
      n('2G9S')
      var a = n('180P'),
        r = n('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          n = void 0 === t ? 'generic-timeline-' : t,
          i = e.urtUrl,
          o = i.url,
          l = i.urtEndpointOptions || {},
          c = l.cacheId,
          u = l.requestParams
        return Object(r.b)({
          timelineId: c || ''.concat(n).concat(Object(a.a)(i)),
          endpointUrl: o,
          endpointParams: u || {},
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
