;(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        o = n.n(a),
        i = n('3XMw'),
        r = n.n(i),
        l = n('M2x3'),
        c = 'settingsAppBar',
        s = n('/yvb'),
        u = n('rHpw'),
        f = r.a.bb081ea1,
        d = { viewType: 'settings_button' },
        p = o.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return o.a.createElement(s.a, {
            accessibilityLabel: f,
            behavioralEventContext: d,
            hoverLabel: { label: f },
            icon: o.a.createElement(l.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: m.button,
            testID: c,
            type: 'primaryText',
          })
        }),
        m = u.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = p
    },
    '+o05': function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        o = n.n(a),
        i = n('ezF+'),
        r = (n('yH/f'), Object.freeze({ Cell: 'Cell', Hero: 'Hero', Tile: 'Tile' })),
        l =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(237).then(n.bind(null, 'QPD4'))
            },
            loaderKey: 'defaultScoreEventSummaryLoader',
            strategy: n('XBtf').a.Critical,
          })
      t.a = i.c({
        selectDisplayType: function (e) {
          return e.content.displayType
        },
        handlers: o()({}, r.Cell, l),
      })
    },
    BxsD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      }),
        n.d(t, 'b', function () {
          return f
        }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'd', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return w
        }),
        n.d(t, 'e', function () {
          return b
        }),
        n.d(t, 'g', function () {
          return g
        })
      var a = n('yiKp'),
        o = n.n(a),
        i = (n('yH/f'), n('2G9S'), n('z84I'), n('LW0h'), n('7x/C'), n('vrRf'), n('vXCH')),
        r = n('oQhu'),
        l = n('ZNT5'),
        c = n('eR3e'),
        s = Object.freeze({ Trends: 'trends' }),
        u = Object.freeze({ WebSidebar: 'web_sidebar' }),
        f = 'explore-',
        d = 9e5,
        p = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.contentType,
            n = e.displayLocation,
            a = e.featureSwitches,
            i = e.focalTweetId,
            r = e.includePageConfiguration,
            c = void 0 !== r && r,
            s = e.initialTabId,
            u = e.profileUserId,
            p = t || n || 'main',
            h = i
              ? ''.concat(f).concat(p, '-tweet-').concat(i)
              : u
              ? ''.concat(f).concat(p, '-user-').concat(u)
              : ''.concat(f).concat(p),
            w = a.isTrue('responsive_web_new_client_events_enabled')
          return Object(l.a)({
            timelineId: h,
            formatResponse: m(w),
            getEndpoint: function (e) {
              return e.URT.fetchExplore
            },
            getEndpointParams: function (e) {
              return o()(
                o()({}, e),
                {},
                {
                  candidate_source: t,
                  display_location: n,
                  focal_tweet_id: i,
                  include_page_configuration: c,
                  initial_tab_id: s,
                  profile_user_id: u,
                  entity_tokens: w,
                },
              )
            },
            context: 'FETCH_EXPLORE',
            perfKey: ''.concat(f).concat(p),
            staleIntervalMs: d,
          })
        },
        m = function (e) {
          return function (t) {
            var n = t.pageConfiguration
            if (e && n && n.tabs) {
              var a = n.tabs.tabs.map(function (t) {
                  var n,
                    a,
                    i,
                    r = o()(
                      o()(
                        {},
                        null === (n = t.urtEndpoint) ||
                          void 0 === n ||
                          null === (a = n.urtEndpointOptions) ||
                          void 0 === a
                          ? void 0
                          : a.requestParams,
                      ),
                      {},
                      { entity_tokens: e },
                    )
                  return o()(
                    o()({}, t),
                    {},
                    {
                      urtEndpoint: o()(
                        o()({}, t.urtEndpoint),
                        {},
                        {
                          urtEndpointOptions: o()(
                            o()({}, null === (i = t.urtEndpoint) || void 0 === i ? void 0 : i.urtEndpointOptions),
                            {},
                            { requestParams: r },
                          ),
                        },
                      ),
                    },
                  )
                }),
                r = o()(
                  o()({}, t),
                  {},
                  { pageConfiguration: o()(o()({}, n), {}, { tabs: o()(o()({}, n.tabs), {}, { tabs: a }) }) },
                )
              return Object(i.a)(r)
            }
            return Object(i.a)(t)
          }
        },
        h = function (e, t) {
          return p({ featureSwitches: e, includePageConfiguration: !0, initialTabId: t })
        },
        w = Object(r.a)(function (e) {
          return p({ featureSwitches: e, contentType: s.Trends })
        }),
        b = Object(r.a)(function (e) {
          return p({ featureSwitches: e, displayLocation: u.WebSidebar })
        }),
        g = function () {
          return function (e, t) {
            return e(
              Object(c.t)(t())
                .filter(function (e) {
                  return 0 === e.indexOf(f)
                })
                .map(function (e) {
                  return Object(c.g)(e)
                }),
            )
          }
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
        s = n('5Yy7'),
        u = n.n(s),
        f = n('2VqO'),
        d = n.n(f),
        p = n('KEM+'),
        m = n.n(p),
        h = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        w = n.n(h),
        b = n('Zejx'),
        g = n('rxPX'),
        y = n('0KEI'),
        v = Object(g.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: b.a.follow,
              unfollow: b.a.unfollow,
            }
          })
          .withAnalytics(),
        E = n('CGyZ'),
        T = n('PbbS'),
        x = n('3XMw'),
        C = n.n(x),
        _ = n('sUoZ'),
        O = n('Tp1h'),
        S = n('Jkc4'),
        P = n('TnY3'),
        k = Object.freeze({ follow: C.a.i79ab12a, following: C.a.d960b55b, unfollow: C.a.c0f56044 }),
        L = Object.freeze({
          follow: C.a.fcf51fe6,
          following: C.a.e9a90d71,
          unfollow: C.a.bf403715,
          confirmationHeadline: C.a.c9f08e28,
          confirmationSheetText: C.a.abc600f3,
        }),
        B = Object.freeze({
          follow: C.a.cd876e01,
          following: C.a.f2816e02,
          unfollow: C.a.f5b04fbb,
          confirmationHeadline: C.a.c481ae3f,
          confirmationSheetText: C.a.aa3ba123,
        }),
        H = Object.freeze({
          follow: C.a.e0e730b0,
          following: C.a.e0e730b0,
          unfollow: C.a.b1850062,
          confirmationHeadline: C.a.gd3f996f,
          confirmationSheetText: C.a.i36c403c,
        }),
        j = (function (e) {
          u()(n, e)
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
                    return w.a.createElement(_.a, null)
                  case T.a.FollowTopic:
                  case T.a.Default:
                  default:
                    return
                }
              }),
              m()(c()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? w.a.createElement(w.a.Fragment, null) : void 0
              }),
              m()(c()(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case T.a.FollowTopic:
                    return { follow: k.follow, unfollow: k.unfollow, following: k.following }
                  case T.a.Favorite:
                    return {
                      follow: B.follow,
                      unfollow: B.unfollow,
                      following: B.following,
                      confirmationHeadline: B.confirmationHeadline && B.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: B.confirmationSheetText,
                    }
                  case T.a.Star:
                    return {
                      follow: L.follow,
                      unfollow: L.unfollow,
                      following: L.following,
                      confirmationHeadline: L.confirmationHeadline && L.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: L.confirmationSheetText,
                    }
                  case T.a.Interested:
                    return {
                      follow: H.follow,
                      unfollow: H.unfollow,
                      following: H.following,
                      confirmationHeadline: H.confirmationHeadline && H.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: H.confirmationSheetText,
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
                    s = t.topic,
                    u = s.following,
                    f = s.name
                  return w.a.createElement(S.a, { customText: f, displayMode: O.a.topic }, function (t) {
                    return w.a.createElement(E.a, {
                      ariaDescribedBy: n,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(c),
                        followingIcon: e._getFollowingButtonIcon(c),
                      },
                      buttonText: e._getButtonText(c),
                      displayMode: e._getDisplayMode(c),
                      isFollowing: u,
                      isTransparent: a,
                      name: f,
                      nativeID: o,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: i,
                      size: r,
                      style: l,
                      type: 'topic',
                      withConfirmationSheetText: u,
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
        })(w.a.Component)
      m()(j, 'defaultProps', { size: 'small', textMode: T.a.Default })
      t.a = Object(P.a)(v(j))
    },
    PH3B: function (e, t, n) {
      'use strict'
      var a,
        o = n('KEM+'),
        i = n.n(o),
        r = n('ezF+'),
        l = (n('yH/f'), Object.freeze({ Cell: 'Cell', PreviewCard: 'PreviewCard' })),
        c = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('XBtf')),
        s = {
          loader: function () {
            return Promise.all([n.e(0), n.e(352)]).then(n.bind(null, 'a+ad'))
          },
          loaderKey: 'newsCellLoader',
          strategy: c.a.Critical,
        },
        u = {
          loader: function () {
            return Promise.all([n.e(0), n.e(354)]).then(n.bind(null, 'hX2d'))
          },
          loaderKey: 'newsPreviewCardLoader',
          strategy: c.a.Critical,
        }
      t.a = r.c({
        selectDisplayType: function (e) {
          return e.content.newsDisplayType
        },
        handlers: ((a = {}), i()(a, l.Cell, s), i()(a, l.PreviewCard, u), a),
      })
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
    XtkE: function (e, t, n) {
      'use strict'
      var a = n('ezF+'),
        o = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('XBtf'))
      t.a = function (e) {
        var t = e.errorContext,
          i = e.withThirdPartyCards,
          r = void 0 !== i && i
        return a.e({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(246)]).then(n.bind(null, '+92Z'))
          },
          loaderKey: 'trendDefaultLoader',
          loaderOptions: { withThirdPartyCards: r, errorContext: t },
          strategy: o.a.Critical,
        })
      }
    },
    jcx9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ExploreScreen', function () {
          return oe
        })
      var a,
        o = n('VrFO'),
        i = n.n(o),
        r = n('Y9Ll'),
        l = n.n(r),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        f = n.n(u),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        w = (n('2G9S'), n('ERkP')),
        b = n.n(w),
        g = n('es0u'),
        y = (n('KqXw'), n('WNMA'), n('hqKg')),
        v = n('BxsD'),
        E = n('oQhu'),
        T = n('wrlS'),
        x = n('rxPX'),
        C = function (e, t) {
          var n, a
          return (
            (null === (n = t.match) || void 0 === n || null === (a = n.params) || void 0 === a ? void 0 : a.tabId) ||
            void 0
          )
        },
        _ = Object(x.a)()
          .propsFromState(function () {
            return {
              initialTabModule:
                ((e = Object(E.a)(function (e) {
                  return Object(v.d)(e)
                })),
                (t = Object(E.a)(function (e, t) {
                  return Object(v.d)(e, t)
                })),
                Object(y.createSelector)(
                  T.d,
                  C,
                  function (t) {
                    return e(Object(T.d)(t)).selectPageConfiguration(t)
                  },
                  function (e, n, a) {
                    var o
                    return t(e, a ? (null == a || null === (o = a.tabs) || void 0 === o ? void 0 : o.initialTabId) : n)
                  },
                )),
              selectedTabId: C,
            }
            var e, t
          })
          .withAnalytics({ page: 'guide', section: 'main' }),
        O = n('FIs5'),
        S = n('yiKp'),
        P = n.n(S),
        k = n('QIgh'),
        L = n('8UdT'),
        B = n('iu0J'),
        H = n('PH3B'),
        j = n('+o05'),
        F = n('XtkE'),
        I = P()(
          P()({}, k.b),
          {},
          ((a = {}),
          h()(a, L.b.EventSummary, Object(B.a)({})),
          h()(a, L.b.News, H.a),
          h()(a, L.b.ScoreEventSummary, j.a),
          h()(a, L.b.Trend, Object(F.a)({ withThirdPartyCards: !0, errorContext: 'EXPLORE_SCREEN' })),
          a),
        ),
        R = n('0+qk'),
        M = n('3XMw'),
        D = n.n(M),
        K = n('VTxf'),
        z = n('rJoH'),
        X = n('7BdX'),
        A = n('7nmT'),
        U = n.n(A),
        J = n('UZjl'),
        Y = n('+Bsv'),
        N = n('LsPn'),
        q = n('aITJ'),
        V = n('v6aA'),
        W = D.a.fcf3e54b,
        Z = D.a.ead349a7,
        Q = D.a.a19ce06f,
        G = D.a.a9ae1e78,
        $ = function () {
          return b.a.createElement(K.a, null)
        },
        ee = function () {
          return b.a.createElement(O.a, { message: Q })
        },
        te = 600,
        ne = 315,
        ae = 'https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg',
        oe = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(s()(e), '_getTabLink', function (e) {
                return { pathname: '/explore/tabs/'.concat(e) }
              }),
              h()(s()(e), '_handleSettingsClick', function (t) {
                e.props.analytics.scribe({ element: 'settings_button', action: 'click' })
              }),
              h()(s()(e), '_handleBackClick', function () {
                e.props.history.goBack()
              }),
              h()(s()(e), '_setSearchBoxRef', function (t) {
                e._searchBoxRef = t
              }),
              h()(s()(e), '_handleSoftLeftClick', function () {
                var t = U.a.findDOMNode(e._searchBoxRef)
                t && t instanceof window.HTMLElement && t.querySelector('input').focus()
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.history,
                    a = e.initialTabModule,
                    o = e.location,
                    i = e.selectedTabId,
                    r = b.a.createElement(R.a, { history: n }),
                    l = this.context.featureSwitches.isTrue('responsive_web_trends_setting_new_endpoints')
                      ? '/settings/explore'
                      : '/settings/trends',
                    c = b.a.createElement(Y.a, { onPress: this._handleSettingsClick, pullRight: !0, to: l }),
                    s = o.state && o.state.searchFocused,
                    u = b.a.createElement(g.a, { withSearchBox: !1, withTrends: !1 })
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(z.a, {
                      canonical: 'https://twitter.com/explore',
                      description: Z,
                      image: ae,
                      imageH: ne,
                      imageW: te,
                      title: W,
                      type: 'article',
                    }),
                    b.a.createElement(J.a, {
                      behavioralEventViewType: 'guide',
                      entryConfiguration: I,
                      fab: r,
                      getTabLink: this._getTabLink,
                      history: n,
                      initialPageNamespace: t.contextualScribeNamespace,
                      module: a,
                      onBackClick: s ? this._handleBackClick : void 0,
                      prerollDisplayLocation: X.c.OTHER,
                      renderEmptyState: $,
                      renderUnavailable: ee,
                      rightControl: c,
                      searchBoxRef: this._setSearchBoxRef,
                      selectedTabId: i,
                      sidebarContent: u,
                      timelinePrefix: v.b,
                      title: W,
                      withBottomLoginSignupBar: !0,
                      withDeferredView: !0,
                      withSearchBox: !0,
                    }),
                    q.b.isKaiOS()
                      ? b.a.createElement(N.a, { leftText: G, onLeftClick: this._handleSoftLeftClick })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      h()(oe, 'contextType', V.a)
      t.default = _(oe)
    },
    rA3t: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ExploreRevampScreen', function () {
          return I
        })
      var a = n('yiKp'),
        o = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        l = n('v6aA'),
        c = n('es0u'),
        s = n('mw9i'),
        u = n('s14A'),
        f = n('dwig'),
        d = n('0+qk'),
        p = n('WpDa'),
        m = n('ZNT5'),
        h = Object(m.a)({
          timelineId: 'forYouExploreGraphQL',
          getEndpoint: function (e) {
            return e.Explore.fetchForYouExplore
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_FOR_YOU_EXPLORE',
          perfKey: 'forYouExploreGraphQL',
          formatResponse: p.a,
        }),
        w = n('3XMw'),
        b = n.n(w),
        g = n('rJoH'),
        y = n('yoO3'),
        v = n('7nmT'),
        E = n.n(v),
        T = n('fTQJ'),
        x = n('+Bsv'),
        C = n('VS6U'),
        _ = n('LsPn'),
        O = n('aITJ'),
        S = n('Irs7'),
        P = b.a.fcf3e54b,
        k = b.a.ead349a7,
        L = b.a.a9ae1e78,
        B = { page: 'guide', section: 'main' },
        H = 600,
        j = 315,
        F = 'https://abs.twimg.com/a/1602199131/img/moments/moments-card.jpg',
        I = function (e) {
          var t = e.analytics,
            n = e.history,
            a = e.location,
            i = r.a.useContext(l.a).featureSwitches,
            p = r.a.useRef(null),
            m = a.state && a.state.searchFocused,
            w = i.isTrue('responsive_web_trends_setting_new_endpoints') ? '/settings/explore' : '/settings/trends',
            b = r.a.useCallback(
              function (e) {
                t.scribe(o()(o()({}, B), {}, { element: 'settings_button', action: 'click' }))
              },
              [t],
            ),
            v = r.a.useCallback(
              function () {
                n.goBack({ backLocation: '/' })
              },
              [n],
            ),
            S = r.a.useCallback(
              function () {
                var e = E.a.findDOMNode(p.current)
                e && e instanceof window.HTMLElement && e.querySelector('input').focus()
              },
              [p],
            ),
            I = r.a.createElement(d.a, { history: n }),
            R = r.a.createElement(x.a, { onPress: b, pullRight: !0, to: w }),
            M = r.a.createElement(c.a, { withSearchBox: !1, withTrends: !1 })
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              y.a,
              { behavioralEventViewType: 'guide' },
              r.a.createElement(g.a, {
                canonical: 'https://twitter.com/explore',
                description: k,
                image: F,
                imageH: j,
                imageW: H,
                title: P,
                type: 'article',
              }),
              r.a.createElement(C.a, {
                history: n,
                onBackClick: m ? v : void 0,
                primaryContent: r.a.createElement(
                  f.a,
                  { component: s.a, fab: I },
                  r.a.createElement(u.a, null, r.a.createElement(T.a, { module: h, title: P })),
                ),
                rightControl: R,
                searchBoxRef: function (e) {
                  p.current = e
                },
                secondaryBar: null,
                sidebarContent: M,
                title: P,
                withBottomLoginSignupBar: !0,
                withSearchBox: !0,
              }),
            ),
            O.b.isKaiOS() ? r.a.createElement(_.a, { leftText: L, onLeftClick: S }) : null,
          )
        }
      t.default = Object(S.a)(I)
    },
    sUoZ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        o = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
