;(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    '7mm0': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicLandingPage', function () {
          return D
        })
      n('ho0z')
      var o = n('ERkP'),
        a = n.n(o),
        i = n('zI2C'),
        r = n('es0u'),
        c = (n('KqXw'), n('WNMA'), n('oQhu')),
        l = n('3IPs'),
        s = n('yiKp'),
        u = n.n(s),
        p = n('m3Bd'),
        f = n.n(p),
        d = n('owBv'),
        m = n('ZNT5'),
        h = ['cursor'],
        g = 'topic-landing-page',
        b = n('Zejx'),
        v = n('rxPX'),
        w = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.referringScribeNamespace
        },
        T = function (e, t) {
          return t.match.params.topicId
        },
        y = function (e, t) {
          var n = T(0, t)
          return n ? b.a.select(e, n) : void 0
        },
        E = Object(v.a)().propsFromState(function () {
          var e = Object(c.a)(function (e, t) {
            return (function (e) {
              var t = e.params,
                n = e.topicId
              return Object(m.a)({
                context: 'FETCH_TOPIC_TIMELINE',
                getEndpoint: function (e) {
                  return e.Topics.fetchTopicLandingPage
                },
                getEndpointParams: function (e) {
                  var o = e.cursor,
                    a = f()(e, h)
                  return u()(u()(u()({}, a), t), {}, { cursor: 'string' == typeof o ? o : void 0, topicId: n })
                },
                formatResponse: d.a,
                perfKey: g,
                timelineId: ''.concat(g, '-').concat(n),
              })
            })({ topicId: e, params: t ? { data_lookup_id: t } : void 0 })
          })
          return {
            module: function (t, n) {
              var o = T(0, n),
                a = Object(l.j)(t, n)
              return e(o, a)
            },
            referringScribeNamespace: w,
            topic: y,
            topicId: T,
          }
        }),
        _ = n('KEM+'),
        I = n.n(_),
        O = n('QIgh'),
        P = n('8UdT'),
        S = n('Ka9G'),
        N = u()(u()({}, O.b), {}, I()({}, P.b.User, Object(S.a)({ shouldScribeImpression: !0 }))),
        C = (n('2G9S'), n('qzfk')),
        j = n('Rp9C'),
        F = Object(c.a)(function (e, t) {
          var n
          if (e) {
            var o = e.action,
              a = void 0 === o ? '' : o,
              i = e.component,
              r = void 0 === i ? '' : i,
              c = e.element,
              l = void 0 === c ? '' : c,
              s = e.page,
              p = void 0 === s ? '' : s,
              f = e.section,
              d = void 0 === f ? '' : f
            n = ''
              .concat(Object(C.a)().clientName, ':')
              .concat(p, ':')
              .concat(d, ':')
              .concat(r, ':')
              .concat(l, ':')
              .concat(a)
          }
          return { items: t ? [u()({}, j.a.forTopic(t))] : void 0, referring_event: n }
        }),
        k = n('9Bb1'),
        x = n('3XMw'),
        L = n.n(x),
        H = n('rJoH'),
        A = n('UZjl'),
        R = n('7JQg'),
        B = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        M = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        U = L.a.a2a3824a,
        K = L.a.f68f0fc7,
        X = L.a.ieb6f5c1,
        G = L.a.d848d612,
        z = L.a.j70f0f35,
        W = a.a.createElement(r.a, { withWhoToFollow: !1 }),
        Z = { page: 'topic_landing', section: 'main' }
      function D(e) {
        var t = e.history,
          n = e.module,
          o = e.referringScribeNamespace,
          r = e.topic,
          c = e.topicId,
          l = null != r && r.name ? X({ topicName: null == r ? void 0 : r.name }) : K,
          s = null != r && r.name ? z({ topicName: null == r ? void 0 : r.name }) : G
        return a.a.createElement(
          R.c,
          { data: F(o, c) },
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(k.a, { description: s }),
            a.a.createElement(H.a, { canonical: B(c), description: s, title: l, type: 'article' }),
            a.a.createElement(i.a, { deepLink: M(c) }),
            a.a.createElement(A.a, {
              backLocation: '/',
              documentTitle: l,
              entryConfiguration: N,
              history: t,
              initialPageNamespace: Z,
              module: n,
              sidebarContent: W,
              timelinePrefix: g,
              title: U,
            }),
          ),
        )
      }
      var q = E(D)
      t.default = q
    },
    BO6E: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TOPICS_MANAGEMENT_PREFIX', function () {
          return B
        }),
        n.d(t, 'VIEWING_OTHER_USERS_TOPICS_PREFIX', function () {
          return M
        }),
        n.d(t, 'UserTopicsScreen', function () {
          return K
        })
      var o = n('VrFO'),
        a = n.n(o),
        i = n('Y9Ll'),
        r = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        p = n('2VqO'),
        f = n.n(p),
        d = n('KEM+'),
        m = n.n(d),
        h = (n('KqXw'), n('WNMA'), n('2G9S'), n('vrRf'), n('ERkP')),
        g = n.n(h),
        b = n('es0u'),
        v = n('0KEI'),
        w = n('8Lfv'),
        T = n('G6rE'),
        y = n('rxPX'),
        E = function (e, t) {
          return t.location.pathname
        },
        _ = function (e, t) {
          return 'PUSH' === t.history.action || 'REPLACE' === t.history.action
        },
        I = function (e, t) {
          return t.match.params.tabId || void 0
        },
        O = function (e, t) {
          return T.e.selectByScreenName(e, t.match.params.screenName)
        },
        P = Object(y.a)()
          .propsFromState(function () {
            return { isForwardNavigation: _, pathname: E, selectedTabId: I, user: O }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: w.a,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('USER_TOPICS_SCREEN'),
              fetchUserByScreenNameIfNeeded: T.e.fetchOneByScreenNameIfNeeded,
            }
          }),
        S = n('7wqI'),
        N = n('3XMw'),
        C = n.n(N),
        j = n('oQhu'),
        F = n('5FtR'),
        k = n('UZjl'),
        x = n('owBv'),
        L = n('ZNT5'),
        H = Object(L.a)({
          timelineId: 'topics-management-graphql',
          getEndpoint: function (e) {
            return e.Topics.fetchTopicsManagementPage
          },
          getEndpointParams: function (e) {
            var t = e.cursor
            return { cursor: 'string' == typeof t ? t : void 0 }
          },
          formatResponse: x.a,
          context: 'FETCH_TOPICS_MANAGEMENT',
          perfKey: 'topics-management-GraphQL',
        }),
        A = n('v6aA'),
        R = C.a.b8533bac,
        B = 'topics-management-',
        M = 'viewing-other-users-topics-',
        U = g.a.createElement(b.a, { withTopicsToFollow: !1 }),
        K = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e, o) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, o)),
              m()(l()(i), '_getTabLink', function (e) {
                var t = i.props.match
                return '/'.concat(t.params.screenName, '/topics/').concat(e)
              }),
              m()(
                l()(i),
                '_getScribeNamespace',
                Object(j.a)(function (e, t) {
                  return { page: e ? 'not_interested_topics' : 'followed_topics', section: t ? 'self' : 'other' }
                }),
              ),
              e.isForwardNavigation && i._clearTimelineCache(),
              i
            )
          }
          return (
            r()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props
                  ;(0, e.fetchUserByScreenNameIfNeeded)(e.match.params.screenName)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;((e.isForwardNavigation && !this.props.isForwardNavigation) || e.pathname !== this.props.pathname) &&
                    this._clearTimelineCache()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.match,
                    o = e.selectedTabId,
                    a = e.user,
                    i = this._isOwnProfile(),
                    r = a && Object(S.b)({ isOwnProfile: i, user: a }),
                    c = !i && this._isOnNotInterestedPage(),
                    l = a && (!r || c),
                    s = '/'.concat(n.params.screenName)
                  if (l) {
                    var u = c ? s.concat('/topics') : s
                    return g.a.createElement(F.a, { to: u })
                  }
                  var p,
                    f = this._getScribeNamespace(this._isOnNotInterestedPage(), i),
                    d = i
                      ? H
                      : ((p = (a && a.id_str) || ''),
                        Object(L.a)({
                          timelineId: 'viewing-user-'.concat(p, '-topics-page-graphql'),
                          getEndpoint: function (e) {
                            return e.Topics.fetchViewingOtherUsersTopicsPagePage
                          },
                          getEndpointParams: function (e) {
                            return { count: e.count, userId: p }
                          },
                          formatResponse: x.a,
                          context: 'FETCH_OTHER_USERS_TOPICS_PAGE',
                          perfKey: 'viewing-other-users-topics-page-GraphQL',
                        })),
                    m = i ? B : M
                  return g.a.createElement(k.a, {
                    backLocation: s,
                    getTabLink: this._getTabLink,
                    history: t,
                    initialPageNamespace: f,
                    module: d,
                    selectedTabId: o,
                    sidebarContent: U,
                    timelinePrefix: m,
                    title: R,
                  })
                },
              },
              {
                key: '_isOwnProfile',
                value: function () {
                  var e = this.props.user,
                    t = this.context.loggedInUserId
                  return !(!e || e.id_str !== t)
                },
              },
              {
                key: '_isOnNotInterestedPage',
                value: function () {
                  return this.props.pathname.indexOf(this._getNotInterestedUrl()) > -1
                },
              },
              {
                key: '_clearTimelineCache',
                value: function () {
                  var e = this.props,
                    t = e.clearTimelineCache,
                    n = e.createLocalApiErrorHandler
                  this._isOwnProfile() && t(H).catch(n())
                },
              },
              {
                key: '_getNotInterestedUrl',
                value: function () {
                  var e = this.props.match
                  return '/'.concat(e.params.screenName, '/topics/not_interested')
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(K, 'contextType', A.a)
      var X = P(K)
      t.default = X
    },
    'Ih+Y': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicsEducationScreen', function () {
          return x
        })
      var o = n('VrFO'),
        a = n.n(o),
        i = n('Y9Ll'),
        r = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        p = n('2VqO'),
        f = n.n(p),
        d = n('KEM+'),
        m = n.n(d),
        h = (n('2G9S'), n('ERkP')),
        g = n.n(h),
        b = n('G6rE'),
        v = n('rxPX'),
        w = Object(v.a)()
          .propsFromState(function () {
            return { loggedInUser: b.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { screenName: t && t.screen_name }
          })
          .withAnalytics({ page: 'topic_education' }),
        T = n('jHSc'),
        y = n('EHV7'),
        E = n('5FtR'),
        _ = n('MWbm'),
        I = n('t62R'),
        O = n('cmUU'),
        P = n('rHpw'),
        S = n('3XMw'),
        N = n.n(S),
        C = N.a.g931a6e4,
        j = N.a.j24c37b2,
        F = N.a.c5bb3cd1,
        k = N.a.e241095e,
        x = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            a()(this, n)
            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_renderHeader', function (e) {
                return null
              }),
              m()(l()(e), '_handleClose', function () {
                e.props.history.goBack()
              }),
              m()(l()(e), '_getSubtext', function () {
                return g.a.createElement(
                  _.a,
                  null,
                  g.a.createElement(I.b, { color: 'gray700' }, F),
                  g.a.createElement(I.b, { color: 'gray700', style: L.paddingTop }, e._getSecondaryText()),
                )
              }),
              m()(l()(e), '_getSecondaryText', function () {
                var t = e.props.screenName,
                  n = { pathname: t ? '/'.concat(t, '/topics') : '/home', method: 'replace' },
                  o = {
                    yourTopicsLink: g.a.createElement(I.b, {
                      accessibilityLabel: k,
                      accessibilityRole: 'link',
                      color: 'link',
                      link: n,
                      withInteractiveStyling: !0,
                    }),
                  }
                return g.a.createElement(
                  N.a.I18NFormatMessage,
                  { $i18n: 'e1d95725' },
                  g.a.cloneElement(o.yourTopicsLink, null, N.a.f8bc75e2),
                )
              }),
              e
            )
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.location
                  return e.state && e.state.topicName
                    ? g.a.createElement(
                        T.b,
                        { renderHeader: this._renderHeader },
                        this._renderContent(e.state.topicName),
                      )
                    : g.a.createElement(E.a, { to: '/home' })
                },
              },
              {
                key: '_renderContent',
                value: function (e) {
                  return g.a.createElement(O.a, {
                    actionLabel: j,
                    graphic: y.a,
                    headline: C({ topic: e }),
                    onAction: this._handleClose,
                    onClose: this._handleClose,
                    subtext: this._getSubtext(),
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        L = P.a.create(function (e) {
          return { paddingTop: { paddingTop: e.spaces.space16 } }
        }),
        H = w(x)
      t.default = H
    },
    LWCC: function (e, t, n) {
      'use strict'
      var o = n('VrFO'),
        a = n.n(o),
        i = n('Y9Ll'),
        r = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        p = n('2VqO'),
        f = n.n(p),
        d = n('KEM+'),
        m = n.n(d),
        h = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        g = n.n(h),
        b = n('Zejx'),
        v = n('rxPX'),
        w = n('0KEI'),
        T = Object(v.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: b.a.follow,
              unfollow: b.a.unfollow,
            }
          })
          .withAnalytics(),
        y = n('CGyZ'),
        E = n('PbbS'),
        _ = n('3XMw'),
        I = n.n(_),
        O = n('sUoZ'),
        P = n('Tp1h'),
        S = n('Jkc4'),
        N = n('TnY3'),
        C = Object.freeze({ follow: I.a.i79ab12a, following: I.a.d960b55b, unfollow: I.a.c0f56044 }),
        j = Object.freeze({
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
        k = Object.freeze({
          follow: I.a.e0e730b0,
          following: I.a.e0e730b0,
          unfollow: I.a.b1850062,
          confirmationHeadline: I.a.gd3f996f,
          confirmationSheetText: I.a.i36c403c,
        }),
        x = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            a()(this, n)
            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_getDisplayMode', function (t) {
                return void 0 === e._getFollowButtonIcon(t) ? 'only-text' : 'icon-text'
              }),
              m()(l()(e), '_getFollowButtonIcon', function (e) {
                switch (e) {
                  case E.a.Favorite:
                  case E.a.Star:
                  case E.a.Interested:
                    return g.a.createElement(O.a, null)
                  case E.a.FollowTopic:
                  case E.a.Default:
                  default:
                    return
                }
              }),
              m()(l()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? g.a.createElement(g.a.Fragment, null) : void 0
              }),
              m()(l()(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case E.a.FollowTopic:
                    return { follow: C.follow, unfollow: C.unfollow, following: C.following }
                  case E.a.Favorite:
                    return {
                      follow: F.follow,
                      unfollow: F.unfollow,
                      following: F.following,
                      confirmationHeadline: F.confirmationHeadline && F.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: F.confirmationSheetText,
                    }
                  case E.a.Star:
                    return {
                      follow: j.follow,
                      unfollow: j.unfollow,
                      following: j.following,
                      confirmationHeadline: j.confirmationHeadline && j.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: j.confirmationSheetText,
                    }
                  case E.a.Interested:
                    return {
                      follow: k.follow,
                      unfollow: k.unfollow,
                      following: k.following,
                      confirmationHeadline: k.confirmationHeadline && k.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: k.confirmationSheetText,
                    }
                  case E.a.Default:
                  default:
                    return
                }
              }),
              m()(l()(e), '_handleOnFollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  o = t.educateOnFollow,
                  a = t.follow,
                  i = t.history,
                  r = t.topic
                a(r.id).catch(n()),
                  e._handleScribe('follow'),
                  o && r && i.push({ pathname: '/i/topics/education', state: { topicName: r.name } })
              }),
              m()(l()(e), '_handleOnUnfollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  o = t.topic
                ;(0, t.unfollow)(o.id).catch(n()), e._handleScribe('unfollow')
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
                    o = t.isTransparent,
                    a = t.nativeID,
                    i = t.showRelationshipChangeConfirmation,
                    r = t.size,
                    c = t.style,
                    l = t.textMode,
                    s = t.topic,
                    u = s.following,
                    p = s.name
                  return g.a.createElement(S.a, { customText: p, displayMode: P.a.topic }, function (t) {
                    return g.a.createElement(y.a, {
                      ariaDescribedBy: n,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(l),
                        followingIcon: e._getFollowingButtonIcon(l),
                      },
                      buttonText: e._getButtonText(l),
                      displayMode: e._getDisplayMode(l),
                      isFollowing: u,
                      isTransparent: o,
                      name: p,
                      nativeID: a,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: i,
                      size: r,
                      style: c,
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
        })(g.a.Component)
      m()(x, 'defaultProps', { size: 'small', textMode: E.a.Default })
      t.a = Object(N.a)(T(x))
    },
    PbbS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      n('yH/f'), n('ERkP')
      var o = Object.freeze({
        Default: 'default',
        FollowTopic: 'follow',
        Star: 'star',
        Interested: 'interested',
        Favorite: 'favorite',
      })
    },
    SQcl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicsPicker', function () {
          return P
        })
      n('jQ3i'), n('x4t0')
      var o = n('ERkP'),
        a = n.n(o),
        i = n('zI2C'),
        r = n('es0u'),
        c = (n('KqXw'), n('WNMA'), n('hqKg')),
        l = n('8Lfv'),
        s = n('owBv'),
        u = n('ZNT5'),
        p = n('rxPX'),
        f = function (e, t) {
          return 'PUSH' === t.history.action || 'REPLACE' === t.history.action
        },
        d = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.previousPath
        },
        m = function (e, t) {
          var n, o
          return (
            (null === (n = t.match) || void 0 === n || null === (o = n.params) || void 0 === o ? void 0 : o.tabId) ||
            void 0
          )
        },
        h = function () {
          return Object(c.createSelector)(m, function (e) {
            return (
              (t = e),
              Object(u.a)({
                context: 'FETCH_TOPICS_PICKER_PAGE',
                getEndpoint: function (e) {
                  return e.Topics.fetchTopicsPickerPage
                },
                getEndpointParams: function () {
                  return { topicId: t }
                },
                perfKey: 'topics-picker',
                formatResponse: s.a,
                timelineId: 'topics-picker-'.concat(t || 'home'),
              })
            )
            var t
          })
        },
        g = Object(p.a)()
          .propsFromState(function () {
            return { isForwardNavigation: f, module: h(), previousPath: d, selectedTabId: m }
          })
          .propsFromActions(function () {
            return { clearTimelineCache: l.a }
          }),
        b = n('3XMw'),
        v = n.n(b),
        w = n('UZjl'),
        T = n('FGLp'),
        y = v.a.d094c720,
        E = { page: 'topics_picker', section: 'main' },
        _ = function (e) {
          return e ? 'twitter://topics/picker/'.concat(e) : 'twitter://topics/picker'
        },
        I = function (e) {
          return { pathname: '/i/topics/picker/'.concat(e) }
        },
        O = a.a.createElement(r.a, { withTopicsToFollow: !1 }),
        P = function (e) {
          var t = e.clearTimelineCache,
            n = e.history,
            o = e.isForwardNavigation,
            r = e.module,
            c = e.previousPath,
            l = e.selectedTabId
          return (
            Object(T.a)(function () {
              !o || (null != c && c.includes('/i/topics/picker')) || t(r)
            }),
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(i.a, { deepLink: _(l) }),
              a.a.createElement(w.a, {
                backLocation: '/home',
                getTabLink: I,
                history: n,
                initialPageNamespace: E,
                module: r,
                selectedTabId: l,
                sidebarContent: O,
                timelinePrefix: 'topics-picker-',
                title: y,
              }),
            )
          )
        },
        S = g(P)
      t.default = S
    },
    XsZp: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NoteworthyAccountsScreen', function () {
          return y
        })
      n('ho0z')
      var o = n('ERkP'),
        a = n.n(o),
        i = n('es0u'),
        r = (n('KqXw'), n('WNMA'), n('oQhu')),
        c = n('owBv'),
        l = n('ZNT5'),
        s = n('Zejx'),
        u = n('rxPX'),
        p = n('0KEI'),
        f = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.referringScribeNamespace
        },
        d = function (e, t) {
          return t.match.params.topicId
        },
        m = function (e, t) {
          var n = d(0, t)
          return n ? s.a.select(e, n) : void 0
        },
        h = Object(r.a)(function (e) {
          return (function (e) {
            return Object(l.a)({
              context: 'FETCH_NOTEWORTHY_ACCOUNTS_PAGE',
              getEndpoint: function (e) {
                return e.Topics.fetchNoteworthyAccountsPage
              },
              getEndpointParams: function () {
                return { topicId: e }
              },
              formatResponse: c.a,
              perfKey: 'noteworthy-accounts',
              timelineId: ''.concat('noteworthy-accounts-', '-').concat(e),
            })
          })(e)
        }),
        g = function (e, t) {
          var n = d(0, t)
          return h(n)
        },
        b = Object(u.a)()
          .propsFromState(function () {
            return { referringScribeNamespace: f, topic: m, topicId: d, module: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'NOTEWORTHY_ACCOUNTS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'noteworthy_accounts' }),
        v = n('UZjl'),
        w = { page: 'noteworthy_accounts', section: 'main' },
        T = a.a.createElement(i.a, { withTopicsToFollow: !1 }),
        y = function (e) {
          var t = e.history,
            n = e.module,
            o = e.topic,
            i = e.topicId,
            r = null != o && o.name ? ''.concat(o.name) : '',
            c = '/i/topics/'.concat(i)
          return a.a.createElement(v.a, {
            backLocation: c,
            history: t,
            initialPageNamespace: w,
            module: n,
            sidebarContent: T,
            timelinePrefix: 'noteworthy-accounts',
            title: r,
          })
        },
        E = b(y)
      t.default = E
    },
    owBv: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('lTXM'),
        r = n('m3Bd'),
        c = n.n(r),
        l = (n('z84I'), n('ho0z'), n('YeIG')),
        s = n('kLu5'),
        u = n('7MdP'),
        p = ['__typename', 'facepile', 'topic'],
        f = function (e) {
          var t = Object(s.b)(),
            n = (function (e) {
              if ('SegmentedTimelines' === e.body.__typename) {
                var t = e.body.timelines.map(function (e) {
                  return {
                    graphQLTimelineId: e.timeline.id,
                    id: e.id,
                    labelText: e.labelText,
                    scribeConfig: Object(l.a)(e.scribeConfig) ? void 0 : a()({}, e.scribeConfig),
                    refreshIntervalSec: e.refreshIntervalSec,
                  }
                })
                return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t }
              }
            })(e),
            o = (function (e, t) {
              var n = t.header
              if (n && 'TopicPageHeader' === n.__typename) {
                n.__typename
                var o = n.facepile,
                  i = n.topic,
                  r = c()(n, p),
                  l = o && Object(u.b)(e, o),
                  s = Object(u.a)(e, i)
                return a()(a()({}, r), {}, { topicId: s, facepile: l })
              }
            })(t, e),
            i = (function (e, t) {
              var n = t.navBar
              if (!n) return {}
              switch (n.__typename) {
                case 'TitleNavBar':
                  return { title: n.title, subtitle: n.subtitle }
                case 'TopicPageNavBar':
                  return {
                    navBar: { topicId: Object(u.a)(e, n.topic), clientEventInfo: n.clientEventInfo },
                    title: n.topic.name,
                    subtitle: void 0,
                  }
                default:
                  return {}
              }
            })(t, e)
          return {
            globalObjects: t,
            pageConfiguration: {
              id: e.id,
              tabs: n,
              header: o,
              navBar: i.navBar && i.navBar,
              title: i.title,
              subtitle: i.subtitle,
              scribeConfig: a()({}, e.scribeConfig),
            },
          }
        },
        d = n('WpDa'),
        m = n('IcAo')
      t.a = function (e) {
        var t,
          n,
          o =
            'Timeline' === (t = e.body).__typename && t.timeline
              ? Object(d.a)(t.timeline)
              : 'SegmentedTimelines' === t.__typename &&
                null !== (n = t.initialTimeline) &&
                void 0 !== n &&
                n.timeline.timeline
              ? Object(d.a)(t.initialTimeline.timeline.timeline)
              : Object(d.a)(i.c),
          r = f(e),
          c = r.globalObjects,
          l = r.pageConfiguration
        return a()(a()({}, o), {}, { globalObjects: Object(m.a)(c, o.globalObjects), pageConfiguration: l })
      }
    },
    sUoZ: function (e, t, n) {
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
