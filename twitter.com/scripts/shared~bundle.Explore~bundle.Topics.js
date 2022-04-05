;(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
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
          return o(n, 0).toString()
        },
        o = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), a = t, o = 0; o < n.length; o++) {
            ;(a = (a << 5) - a + n.charCodeAt(o)), (a &= a)
          }
          return a
        }
    },
    LWCC: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        o = n.n(a),
        i = n('Y9Ll'),
        r = n.n(i),
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
        g = n('Zejx'),
        v = n('rxPX'),
        w = n('0KEI'),
        y = Object(v.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: g.a.follow,
              unfollow: g.a.unfollow,
            }
          })
          .withAnalytics(),
        E = n('CGyZ'),
        T = n('PbbS'),
        C = n('3XMw'),
        I = n.n(C),
        S = n('sUoZ'),
        O = n('Tp1h'),
        x = n('Jkc4'),
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
        B = Object.freeze({
          follow: I.a.e0e730b0,
          following: I.a.e0e730b0,
          unfollow: I.a.b1850062,
          confirmationHeadline: I.a.gd3f996f,
          confirmationSheetText: I.a.i36c403c,
        }),
        H = (function (e) {
          s()(n, e)
          var t = d()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
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
                    return h.a.createElement(S.a, null)
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
                      follow: B.follow,
                      unfollow: B.unfollow,
                      following: B.following,
                      confirmationHeadline: B.confirmationHeadline && B.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: B.confirmationSheetText,
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
                  o = t.follow,
                  i = t.history,
                  r = t.topic
                o(r.id).catch(n()),
                  e._handleScribe('follow'),
                  a && r && i.push({ pathname: '/i/topics/education', state: { topicName: r.name } })
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
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.ariaDescribedBy,
                    a = t.isTransparent,
                    o = t.nativeID,
                    i = t.showRelationshipChangeConfirmation,
                    r = t.size,
                    l = t.style,
                    c = t.textMode,
                    u = t.topic,
                    s = u.following,
                    f = u.name
                  return h.a.createElement(x.a, { customText: f, displayMode: O.a.topic }, function (t) {
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
                      nativeID: o,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: i,
                      size: r,
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
      m()(H, 'defaultProps', { size: 'small', textMode: T.a.Default })
      t.a = Object(L.a)(y(H))
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
        o = n.n(a),
        i = n('m3Bd'),
        r = n.n(i),
        l = n('yiKp'),
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
        g = Object(d.createSelector)(b, h, function (e, t) {
          return t !== p.a.LOADED || (!!e && !!e.tabs)
        }),
        v = Object(m.a)()
          .propsFromState(function () {
            return { hasTabNavigation: g, pageConfiguration: b, initialFetchStatus: h }
          })
          .withAnalytics(),
        w = n('QIgh'),
        y = n('s14A'),
        E = n('dwig'),
        T = (n('uFXj'), n('7JQg')),
        C = n('rHpw'),
        I = n('GKOv'),
        S = n('Rp9C'),
        O = n('Irs7')
      function x(e, t) {
        var n = Object(O.b)(),
          a = t || {},
          o = a.component,
          i = a.element,
          r = s.a.useMemo(
            function () {
              return { items: [S.a.forTopic(e, t)] }
            },
            [t, e],
          )
        return (
          s.a.useEffect(
            function () {
              n.scribe({ component: o, element: i, action: 'impression', data: r })
            },
            [r, o, i, n],
          ),
          { namespace: { component: o, element: i }, data: r }
        )
      }
      var L = n('MWbm')
      function _(e) {
        var t = e.header,
          n = t.clientEventInfo,
          a = t.displayType,
          o = t.facepile,
          i = t.landingContext,
          r = t.topicId,
          l = e.onHeaderVisible,
          c = x(r, n),
          u = c.data,
          f = c.namespace
        return s.a.createElement(
          L.a,
          { style: k.root },
          s.a.createElement(
            T.c,
            { data: u, namespace: f },
            s.a.createElement(I.a, {
              displayType: a,
              facepile: o,
              onFollowHeaderOffscreen: function (e) {
                var t = e.isOffscreen
                return l(!t)
              },
              topicId: r,
              topicLandingContext: i,
              withDivider: !0,
            }),
          ),
        )
      }
      var k = C.a.create(function (e) {
          return {
            root: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        F = n('3XMw'),
        B = n.n(F),
        H = (n('1t7P'), n('jQ/y'), n('ho0z'), n('zI2C')),
        M = n('v6aA'),
        j = n('Zejx'),
        P = function (e, t) {
          var n = t.navBar.topicId ? t.navBar.topicId : ''
          return j.a.select(e, n)
        },
        D = Object(m.a)().propsFromState(function () {
          return { topic: P }
        }),
        A = n('PbbS'),
        N = n('LWCC'),
        U = n('IcAo'),
        G = n('rJoH'),
        R = n('I6Uj'),
        z = n('zfvc'),
        K = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        V = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        W = B.a.ed88e742
      var Q = C.a.create(function (e) {
          return {
            rightControl: { flexDirection: 'row' },
            followButtonContainer: { justifyContent: 'center', paddingEnd: e.spaces.space4 },
          }
        }),
        Z = D(function (e) {
          var t = e.navBar.topicId ? e.navBar.topicId : '',
            n = e.isHeaderOffscreen,
            a = e.navBar.clientEventInfo,
            o = e.pageNamespace,
            i = e.topic,
            r = e.withAppLinks,
            l = e.withOpenGraphMeta,
            c = s.a.useContext(M.a).featureSwitches.isTrue('topic_landing_page_share_enabled'),
            u = x(t, a),
            f = u.data,
            d = u.namespace,
            p = Object(U.a)({}, o, d)
          return i
            ? s.a.createElement(
                T.c,
                { data: f, namespace: p },
                s.a.createElement(
                  s.a.Fragment,
                  null,
                  l
                    ? s.a.createElement(G.a, {
                        canonical: K(t),
                        description: i.description,
                        title: i.name,
                        type: 'article',
                      })
                    : null,
                  r ? s.a.createElement(H.a, { deepLink: V(t) }) : null,
                  s.a.createElement(
                    L.a,
                    { style: Q.rightControl },
                    s.a.createElement(
                      L.a,
                      { style: Q.followButtonContainer },
                      s.a.createElement(
                        z.b,
                        { animateMount: !0, show: n, type: 'fade' },
                        s.a.createElement(N.a, { size: 'medium', textMode: A.a.FollowTopic, topic: i }),
                      ),
                    ),
                    c ? s.a.createElement(R.a, { copyLinkShareLabel: W, scribeNamespace: p, url: K(t) }) : null,
                  ),
                ),
              )
            : null
        }),
        J = n('yoO3'),
        q = n('VrFO'),
        Y = n.n(q),
        X = n('Y9Ll'),
        $ = n.n(X),
        ee = n('1Pcy'),
        te = n.n(ee),
        ne = n('5Yy7'),
        ae = n.n(ne),
        oe = n('2VqO'),
        ie = n.n(oe),
        re = n('KEM+'),
        le = n.n(re),
        ce = (n('2G9S'), n('v84o')),
        ue = n('0KEI'),
        se = function (e, t) {
          return t.initialModule.selectPageConfiguration && t.initialModule.selectPageConfiguration(e)
        },
        fe = function (e, t) {
          var n = t.selectedTabId,
            a = se(e, t)
          return (
            a &&
            a.tabs &&
            a.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        de = Object(m.a)()
          .propsFromState(function () {
            return { pageConfiguration: se, selectedTab: fe }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ue.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
            }
          })
          .withAnalytics(),
        pe = n('doI8'),
        me = n('oQhu'),
        be = n('fTQJ'),
        he = ['entityToken'],
        ge = de(
          (function (e) {
            ae()(n, e)
            var t = ie()(n)
            function n() {
              var e
              Y()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                le()(te()(e), '_getTimelineNamespace', function () {
                  var t = e.props,
                    n = t.analytics,
                    a = t.pageConfiguration,
                    o = t.selectedTab,
                    i = (null == o ? void 0 : o.scribeConfig) || (null == a ? void 0 : a.scribeConfig)
                  if (i) {
                    i.entityToken
                    return r()(i, he)
                  }
                  return n.contextualScribeNamespace
                }),
                le()(
                  te()(e),
                  '_getModule',
                  Object(me.a)(function (e, t, n, a) {
                    if ((null == e ? void 0 : e.id) !== t) {
                      if (null != e && e.urtEndpoint)
                        return Object(ce.a)({ urtUrl: null == e ? void 0 : e.urtEndpoint, timelinePrefix: a })
                      if (null != e && e.graphQLTimelineId) return Object(pe.a)(e.graphQLTimelineId)
                    }
                    return n
                  }),
                ),
                le()(te()(e), '_getRefreshIntervalSecForCurrentTab', function () {
                  var t,
                    n = e.props,
                    a = n.pageConfiguration,
                    o = n.selectedTab,
                    i = null == a || null === (t = a.tabs) || void 0 === t ? void 0 : t.initialTabId
                  if (o) return o.refreshIntervalSec
                  if (i) {
                    var r,
                      l =
                        null == a || null === (r = a.tabs) || void 0 === r
                          ? void 0
                          : r.tabs.find(function (e) {
                              return i === e.id
                            })
                    return null == l ? void 0 : l.refreshIntervalSec
                  }
                }),
                e
              )
            }
            return (
              $()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t,
                      n = this.props,
                      a = n.entryConfiguration,
                      o = n.initialModule,
                      i = n.pageConfiguration,
                      r = n.prerollDisplayLocation,
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
                        o,
                        d,
                      ),
                      g = this._getRefreshIntervalSecForCurrentTab(),
                      v = g ? 1e3 * g : void 0
                    return s.a.createElement(
                      T.c,
                      { namespace: this._getTimelineNamespace() },
                      s.a.createElement(be.a, {
                        behavioralEventContext: b,
                        entryConfiguration: a,
                        module: h,
                        pollingIntervalMsOverride: v,
                        prerollDisplayLocation: r,
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
        ve = (n('z84I'), n('+Kfv')),
        we = function (e, t) {
          return t.module.selectInitialFetchStatus(e)
        },
        ye = function (e, t) {
          return t.module.selectPageConfiguration && t.module.selectPageConfiguration(e)
        },
        Ee = function (e, t) {
          var n = t.selectedTabId,
            a = ye(e, t)
          return (
            a &&
            a.tabs &&
            a.tabs.tabs.find(function (e) {
              return e.id === n
            })
          )
        },
        Te = Object(m.a)()
          .propsFromState(function () {
            return { initialFetchStatus: we, pageConfiguration: ye, selectedTab: Ee }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(ue.createLocalApiErrorHandlerWithContextFactory)(
                'RICH_SEGMENTED_TIMELINE',
              ),
              fetchInitial: t.fetchInitial,
            }
          })
          .withAnalytics(),
        Ce = n('Nhmk'),
        Ie = n('k/OQ'),
        Se = n('G8HL'),
        Oe = ['entityToken'],
        xe = { viewType: 'controls' },
        Le = (function (e) {
          ae()(n, e)
          var t = ie()(n)
          function n() {
            var e
            Y()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              le()(te()(e), '_fetchPageModule', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.createLocalApiErrorHandler,
                  o = t.fetchInitial,
                  i = t.pageConfiguration,
                  r = i ? i.scribeConfig : void 0
                return o().then(function (t) {
                  t.performed && n.scribe(c()(c()({}, e._getScribeNamespace(r)), {}, { action: 'get_initial' }))
                }, a(Ce.a))
              }),
              le()(te()(e), '_render', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.getTabLink,
                  o = t.pageConfiguration,
                  i = t.selectedTab,
                  r = null == o ? void 0 : o.tabs
                if (r && r.tabs) {
                  var l,
                    c = (i && i.id) || r.initialTabId,
                    u = o ? o.scribeConfig : void 0,
                    f = r.tabs.map(function (t, o) {
                      var i,
                        r = t.id === c
                      return (
                        r && (l = o),
                        {
                          isActive: function () {
                            return r
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
                    ve.a,
                    { behavioralEventContext: xe },
                    s.a.createElement(Ie.a, { links: f, visibleItemIndex: l }),
                  )
                }
                return null
              }),
              e
            )
          }
          return (
            $()(n, [
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
                    t && (n = c()(c()({}, n), t)),
                    c()(c()({}, n), {}, { element: 'tab', action: 'navigate' })
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function (e) {
                  if (e) {
                    e.entityToken
                    return r()(e, Oe)
                  }
                },
              },
            ]),
            n
          )
        })(s.a.Component),
        _e = Te(Object(Se.a)(Le)),
        ke = n('VS6U'),
        Fe = n('5Y9N'),
        Be = n('FIs5'),
        He = n('cHvH'),
        Me = n('mw9i'),
        je = ['entityToken'],
        Pe = ['entityToken'],
        De = B.a.e9f1fbcb,
        Ae = s.a.createElement(f.a, null),
        Ne = Object(me.a)(function (e, t) {
          return c()(c()({}, t), Object(Fe.a)({ isWide: e }))
        }),
        Ue = function (e) {
          var t = e.TabBar,
            n = e.backLocation,
            a = e.behavioralEventViewType,
            i = e.documentTitle,
            l = e.entryConfiguration,
            c = e.fab,
            u = e.getTabLink,
            f = e.hasTabNavigation,
            d = e.history,
            m = e.initialFetchStatus,
            b = e.initialPageNamespace,
            h = e.logoButton,
            g = e.module,
            v = e.onBackClick,
            w = e.pageConfiguration,
            I = e.prerollDisplayLocation,
            S = e.renderEmptyState,
            O = e.renderUnavailable,
            x = e.rightControl,
            L = e.searchBoxRef,
            k = e.selectedTabId,
            F = e.sidebarContent,
            B = e.timelinePrefix,
            H = e.title,
            M = e.withAppLinks,
            j = e.withBottomLoginSignupBar,
            P = e.withDeferredView,
            D = e.withOpenGraphMeta,
            A = e.withSearchBox,
            N = e.withTweetButton,
            G = s.a.useState(!0),
            R = o()(G, 2),
            z = R[0],
            K = R[1],
            V = w || {},
            W = V.header,
            Q = V.navBar,
            q = V.subtitle,
            Y = V.title,
            X = m === p.a.LOADED ? Y || H : '',
            $ = (function (e, t, n) {
              var a = (null == t ? void 0 : t.scribeConfig) || {},
                o = (a.entityToken, r()(a, je)),
                i = null == t ? void 0 : t.tabs,
                l = e || (null == i ? void 0 : i.initialTabId),
                c =
                  null == i
                    ? void 0
                    : i.tabs.find(function (e) {
                        return e.id === l
                      }),
                u = (null == c ? void 0 : c.scribeConfig) || {},
                s = (u.entityToken, r()(u, Pe))
              return Object(U.a)({}, n, o, s)
            })(k, w, b),
            ee = W ? s.a.createElement(_, { header: W, onHeaderVisible: K }) : null,
            te = Q
              ? s.a.createElement(Z, {
                  isHeaderOffscreen: !z,
                  navBar: Q,
                  pageNamespace: $,
                  withAppLinks: M,
                  withOpenGraphMeta: D,
                })
              : null,
            ne = P ? y.a : s.a.Fragment,
            ae = s.a.createElement(He.a, null, function (e) {
              var t = e.windowWidth >= C.a.theme.breakpoints.medium
              return s.a.createElement(
                s.a.Fragment,
                null,
                ee,
                s.a.createElement(
                  ne,
                  null,
                  s.a.createElement(ge, {
                    entryConfiguration: Ne(t, l),
                    initialModule: g,
                    prerollDisplayLocation: I,
                    renderEmptyState: S,
                    renderUnavailable: O,
                    selectedTabId: k,
                    timelinePrefix: B,
                    title: H,
                    withoutHeadroom: !0,
                  }),
                ),
              )
            }),
            oe = c ? s.a.createElement(E.a, { component: Me.a, fab: c }, ae) : ae,
            ie = u && f ? s.a.createElement(_e, { getTabLink: u, module: g, selectedTabId: k }) : void 0
          return s.a.createElement(
            T.c,
            { namespace: $ },
            s.a.createElement(
              J.a,
              { behavioralEventViewType: a },
              s.a.createElement(ke.a, {
                TabBar: t,
                backLocation: n,
                documentTitle: i,
                history: d,
                logoButton: h,
                onBackClick: v,
                primaryContent: oe,
                rightControl: te || x,
                searchBoxRef: L,
                secondaryBar: ie,
                sidebarContent: F,
                subtitle: q,
                title: ee && z ? H : X,
                withBottomLoginSignupBar: j,
                withSearchBox: A,
                withTweetButton: N,
              }),
            ),
          )
        }
      Ue.defaultProps = {
        entryConfiguration: w.b,
        renderEmptyState: function () {
          return s.a.createElement(Be.a, { header: De })
        },
        sidebarContent: Ae,
        withDeferredView: !1,
        withAppLinks: !1,
        withOpenGraphMeta: !1,
      }
      var Ge = v(Ue)
      t.a = Ge
    },
    doI8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('yiKp'),
        o = n.n(a),
        i = n('WpDa'),
        r = n('ZNT5')
      t.b = function (e) {
        var t = e.endpointParams,
          n = e.endpointUrl,
          a = e.timelineId
        return Object(r.a)({
          timelineId: a,
          getEndpoint: function (e) {
            return e.URT.fetchGeneric
          },
          getEndpointParams: function (e) {
            var a = e.count,
              i = e.cursor
            return o()(o()({}, t), {}, { cursor: 'string' == typeof i ? i : void 0, count: a, endpointUrl: n })
          },
          context: 'FETCH_TIMELINE',
          perfKey: 'generic',
        })
      }
      var l = function (e) {
        return Object(r.a)({
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
        o = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
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
        o = n('doI8')
      t.a = function (e) {
        var t = e.timelinePrefix,
          n = void 0 === t ? 'generic-timeline-' : t,
          i = e.urtUrl,
          r = i.url,
          l = i.urtEndpointOptions || {},
          c = l.cacheId,
          u = l.requestParams
        return Object(o.b)({
          timelineId: c || ''.concat(n).concat(Object(a.a)(i)),
          endpointUrl: r,
          endpointParams: u || {},
        })
      }
    },
  },
])
//# sourceMappingURL=WIPED
