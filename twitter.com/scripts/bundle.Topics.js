;(window.webpackJsonp = window.webpackJsonp || []).push([
  [98],
  {
    '7mm0': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicLandingPage', function () {
          return Q
        })
      n('ho0z')
      var a = n('ERkP'),
        i = n.n(a),
        r = n('zI2C'),
        o = n('es0u'),
        c = (n('KqXw'), n('WNMA'), n('oQhu')),
        s = n('3IPs'),
        u = n('yiKp'),
        l = n.n(u),
        p = n('m3Bd'),
        d = n.n(p),
        m = n('owBv'),
        f = n('ZNT5'),
        h = ['cursor'],
        g = 'topic-landing-page',
        v = n('Zejx'),
        b = n('rxPX'),
        E = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.referringScribeNamespace
        },
        T = function (e, t) {
          return t.match.params.topicId
        },
        _ = function (e, t) {
          var n = T(0, t)
          return n ? v.a.select(e, n) : void 0
        },
        y = Object(b.a)().propsFromState(function () {
          var e = Object(c.a)(function (e, t) {
            return (function (e) {
              var t = e.params,
                n = e.topicId
              return Object(f.a)({
                context: 'FETCH_TOPIC_TIMELINE',
                getEndpoint: function (e) {
                  return e.Topics.fetchTopicLandingPage
                },
                getEndpointParams: function (e) {
                  var a = e.cursor,
                    i = d()(e, h)
                  return l()(l()(l()({}, i), t), {}, { cursor: 'string' == typeof a ? a : void 0, topicId: n })
                },
                formatResponse: m.a,
                perfKey: g,
                timelineId: ''.concat(g, '-').concat(n),
              })
            })({ topicId: e, params: t ? { data_lookup_id: t } : void 0 })
          })
          return {
            module: function (t, n) {
              var a = T(0, n),
                i = Object(s.j)(t, n)
              return e(a, i)
            },
            referringScribeNamespace: E,
            topic: _,
            topicId: T,
          }
        }),
        I = n('KEM+'),
        N = n.n(I),
        P = n('QIgh'),
        O = n('8UdT'),
        w = n('Ka9G'),
        C = l()(l()({}, P.b), {}, N()({}, O.b.User, Object(w.a)({ shouldScribeImpression: !0 }))),
        S = (n('2G9S'), n('qzfk')),
        j = n('Rp9C'),
        k = Object(c.a)(function (e, t) {
          var n
          if (e) {
            var a = e.action,
              i = void 0 === a ? '' : a,
              r = e.component,
              o = void 0 === r ? '' : r,
              c = e.element,
              s = void 0 === c ? '' : c,
              u = e.page,
              p = void 0 === u ? '' : u,
              d = e.section,
              m = void 0 === d ? '' : d
            n = ''
              .concat(Object(S.a)().clientName, ':')
              .concat(p, ':')
              .concat(m, ':')
              .concat(o, ':')
              .concat(s, ':')
              .concat(i)
          }
          return { items: t ? [l()({}, j.a.forTopic(t))] : void 0, referring_event: n }
        }),
        F = n('9Bb1'),
        L = n('3XMw'),
        A = n.n(L),
        R = n('rJoH'),
        x = n('UZjl'),
        U = n('7JQg'),
        H = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        M = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        B = A.a.a2a3824a,
        K = A.a.f68f0fc7,
        X = A.a.ieb6f5c1,
        G = A.a.d848d612,
        W = A.a.j70f0f35,
        q = i.a.createElement(o.a, { withWhoToFollow: !1 }),
        Z = { page: 'topic_landing', section: 'main' }
      function Q(e) {
        var t = e.history,
          n = e.module,
          a = e.referringScribeNamespace,
          o = e.topic,
          c = e.topicId,
          s = null != o && o.name ? X({ topicName: null == o ? void 0 : o.name }) : K,
          u = null != o && o.name ? W({ topicName: null == o ? void 0 : o.name }) : G
        return i.a.createElement(
          U.c,
          { data: k(a, c) },
          i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(F.a, { description: u }),
            i.a.createElement(R.a, { canonical: H(c), description: u, title: s, type: 'article' }),
            i.a.createElement(r.a, { deepLink: M(c) }),
            i.a.createElement(x.a, {
              backLocation: '/',
              documentTitle: s,
              entryConfiguration: C,
              history: t,
              initialPageNamespace: Z,
              module: n,
              sidebarContent: q,
              timelinePrefix: g,
              title: B,
            }),
          ),
        )
      }
      var Y = y(Q)
      t.default = Y
    },
    BO6E: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TOPICS_MANAGEMENT_PREFIX', function () {
          return H
        }),
        n.d(t, 'VIEWING_OTHER_USERS_TOPICS_PREFIX', function () {
          return M
        }),
        n.d(t, 'UserTopicsScreen', function () {
          return K
        })
      var a = n('VrFO'),
        i = n.n(a),
        r = n('Y9Ll'),
        o = n.n(r),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        l = n.n(u),
        p = n('2VqO'),
        d = n.n(p),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('KqXw'), n('WNMA'), n('2G9S'), n('vrRf'), n('ERkP')),
        g = n.n(h),
        v = n('es0u'),
        b = n('0KEI'),
        E = n('8Lfv'),
        T = n('G6rE'),
        _ = n('rxPX'),
        y = function (e, t) {
          return t.location.pathname
        },
        I = function (e, t) {
          return 'PUSH' === t.history.action || 'REPLACE' === t.history.action
        },
        N = function (e, t) {
          return t.match.params.tabId || void 0
        },
        P = function (e, t) {
          return T.e.selectByScreenName(e, t.match.params.screenName)
        },
        O = Object(_.a)()
          .propsFromState(function () {
            return { isForwardNavigation: I, pathname: y, selectedTabId: N, user: P }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: E.a,
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('USER_TOPICS_SCREEN'),
              fetchUserByScreenNameIfNeeded: T.e.fetchOneByScreenNameIfNeeded,
            }
          }),
        w = n('7wqI'),
        C = n('3XMw'),
        S = n.n(C),
        j = n('oQhu'),
        k = n('5FtR'),
        F = n('UZjl'),
        L = n('owBv'),
        A = n('ZNT5'),
        R = Object(A.a)({
          timelineId: 'topics-management-graphql',
          getEndpoint: function (e) {
            return e.Topics.fetchTopicsManagementPage
          },
          getEndpointParams: function (e) {
            var t = e.cursor
            return { cursor: 'string' == typeof t ? t : void 0 }
          },
          formatResponse: L.a,
          context: 'FETCH_TOPICS_MANAGEMENT',
          perfKey: 'topics-management-GraphQL',
        }),
        x = n('v6aA'),
        U = S.a.b8533bac,
        H = 'topics-management-',
        M = 'viewing-other-users-topics-',
        B = g.a.createElement(v.a, { withTopicsToFollow: !1 }),
        K = (function (e) {
          l()(n, e)
          var t = d()(n)
          function n(e, a) {
            var r
            return (
              i()(this, n),
              (r = t.call(this, e, a)),
              f()(s()(r), '_getTabLink', function (e) {
                var t = r.props.match
                return '/'.concat(t.params.screenName, '/topics/').concat(e)
              }),
              f()(
                s()(r),
                '_getScribeNamespace',
                Object(j.a)(function (e, t) {
                  return { page: e ? 'not_interested_topics' : 'followed_topics', section: t ? 'self' : 'other' }
                }),
              ),
              e.isForwardNavigation && r._clearTimelineCache(),
              r
            )
          }
          return (
            o()(n, [
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
                    a = e.selectedTabId,
                    i = e.user,
                    r = this._isOwnProfile(),
                    o = i && Object(w.b)({ isOwnProfile: r, user: i }),
                    c = !r && this._isOnNotInterestedPage(),
                    s = i && (!o || c),
                    u = '/'.concat(n.params.screenName)
                  if (s) {
                    var l = c ? u.concat('/topics') : u
                    return g.a.createElement(k.a, { to: l })
                  }
                  var p,
                    d = this._getScribeNamespace(this._isOnNotInterestedPage(), r),
                    m = r
                      ? R
                      : ((p = (i && i.id_str) || ''),
                        Object(A.a)({
                          timelineId: 'viewing-user-'.concat(p, '-topics-page-graphql'),
                          getEndpoint: function (e) {
                            return e.Topics.fetchViewingOtherUsersTopicsPagePage
                          },
                          getEndpointParams: function (e) {
                            return { count: e.count, userId: p }
                          },
                          formatResponse: L.a,
                          context: 'FETCH_OTHER_USERS_TOPICS_PAGE',
                          perfKey: 'viewing-other-users-topics-page-GraphQL',
                        })),
                    f = r ? H : M
                  return g.a.createElement(F.a, {
                    backLocation: u,
                    getTabLink: this._getTabLink,
                    history: t,
                    initialPageNamespace: d,
                    module: m,
                    selectedTabId: a,
                    sidebarContent: B,
                    timelinePrefix: f,
                    title: U,
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
                  this._isOwnProfile() && t(R).catch(n())
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
      f()(K, 'contextType', x.a)
      var X = O(K)
      t.default = X
    },
    'Ih+Y': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicsEducationScreen', function () {
          return L
        })
      var a = n('VrFO'),
        i = n.n(a),
        r = n('Y9Ll'),
        o = n.n(r),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        l = n.n(u),
        p = n('2VqO'),
        d = n.n(p),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('ERkP')),
        g = n.n(h),
        v = n('G6rE'),
        b = n('rxPX'),
        E = Object(b.a)()
          .propsFromState(function () {
            return { loggedInUser: v.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { screenName: t && t.screen_name }
          })
          .withAnalytics({ page: 'topic_education' }),
        T = n('jHSc'),
        _ = n('EHV7'),
        y = n('5FtR'),
        I = n('MWbm'),
        N = n('t62R'),
        P = n('cmUU'),
        O = n('rHpw'),
        w = n('3XMw'),
        C = n.n(w),
        S = C.a.g931a6e4,
        j = C.a.j24c37b2,
        k = C.a.c5bb3cd1,
        F = C.a.e241095e,
        L = (function (e) {
          l()(n, e)
          var t = d()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(s()(e), '_renderHeader', function (e) {
                return null
              }),
              f()(s()(e), '_handleClose', function () {
                e.props.history.goBack()
              }),
              f()(s()(e), '_getSubtext', function () {
                return g.a.createElement(
                  I.a,
                  null,
                  g.a.createElement(N.b, { color: 'gray700' }, k),
                  g.a.createElement(N.b, { color: 'gray700', style: A.paddingTop }, e._getSecondaryText()),
                )
              }),
              f()(s()(e), '_getSecondaryText', function () {
                var t = e.props.screenName,
                  n = { pathname: t ? '/'.concat(t, '/topics') : '/home', method: 'replace' },
                  a = {
                    yourTopicsLink: g.a.createElement(N.b, {
                      accessibilityLabel: F,
                      accessibilityRole: 'link',
                      color: 'link',
                      link: n,
                      withInteractiveStyling: !0,
                    }),
                  }
                return g.a.createElement(
                  C.a.I18NFormatMessage,
                  { $i18n: 'e1d95725' },
                  g.a.cloneElement(a.yourTopicsLink, null, C.a.f8bc75e2),
                )
              }),
              e
            )
          }
          return (
            o()(n, [
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
                    : g.a.createElement(y.a, { to: '/home' })
                },
              },
              {
                key: '_renderContent',
                value: function (e) {
                  return g.a.createElement(P.a, {
                    actionLabel: j,
                    graphic: _.a,
                    headline: S({ topic: e }),
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
        A = O.a.create(function (e) {
          return { paddingTop: { paddingTop: e.spaces.space16 } }
        }),
        R = E(L)
      t.default = R
    },
    SQcl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicsPicker', function () {
          return O
        })
      n('jQ3i'), n('x4t0')
      var a = n('ERkP'),
        i = n.n(a),
        r = n('zI2C'),
        o = n('es0u'),
        c = (n('KqXw'), n('WNMA'), n('hqKg')),
        s = n('8Lfv'),
        u = n('owBv'),
        l = n('ZNT5'),
        p = n('rxPX'),
        d = function (e, t) {
          return 'PUSH' === t.history.action || 'REPLACE' === t.history.action
        },
        m = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.previousPath
        },
        f = function (e, t) {
          var n, a
          return (
            (null === (n = t.match) || void 0 === n || null === (a = n.params) || void 0 === a ? void 0 : a.tabId) ||
            void 0
          )
        },
        h = function () {
          return Object(c.createSelector)(f, function (e) {
            return (
              (t = e),
              Object(l.a)({
                context: 'FETCH_TOPICS_PICKER_PAGE',
                getEndpoint: function (e) {
                  return e.Topics.fetchTopicsPickerPage
                },
                getEndpointParams: function () {
                  return { topicId: t }
                },
                perfKey: 'topics-picker',
                formatResponse: u.a,
                timelineId: 'topics-picker-'.concat(t || 'home'),
              })
            )
            var t
          })
        },
        g = Object(p.a)()
          .propsFromState(function () {
            return { isForwardNavigation: d, module: h(), previousPath: m, selectedTabId: f }
          })
          .propsFromActions(function () {
            return { clearTimelineCache: s.a }
          }),
        v = n('3XMw'),
        b = n.n(v),
        E = n('UZjl'),
        T = n('FGLp'),
        _ = b.a.d094c720,
        y = { page: 'topics_picker', section: 'main' },
        I = function (e) {
          return e ? 'twitter://topics/picker/'.concat(e) : 'twitter://topics/picker'
        },
        N = function (e) {
          return { pathname: '/i/topics/picker/'.concat(e) }
        },
        P = i.a.createElement(o.a, { withTopicsToFollow: !1 }),
        O = function (e) {
          var t = e.clearTimelineCache,
            n = e.history,
            a = e.isForwardNavigation,
            o = e.module,
            c = e.previousPath,
            s = e.selectedTabId
          return (
            Object(T.a)(function () {
              !a || (null != c && c.includes('/i/topics/picker')) || t(o)
            }),
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(r.a, { deepLink: I(s) }),
              i.a.createElement(E.a, {
                backLocation: '/home',
                getTabLink: N,
                history: n,
                initialPageNamespace: y,
                module: o,
                selectedTabId: s,
                sidebarContent: P,
                timelinePrefix: 'topics-picker-',
                title: _,
              }),
            )
          )
        },
        w = g(O)
      t.default = w
    },
    XsZp: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NoteworthyAccountsScreen', function () {
          return _
        })
      n('ho0z')
      var a = n('ERkP'),
        i = n.n(a),
        r = n('es0u'),
        o = (n('KqXw'), n('WNMA'), n('oQhu')),
        c = n('owBv'),
        s = n('ZNT5'),
        u = n('Zejx'),
        l = n('rxPX'),
        p = n('0KEI'),
        d = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.referringScribeNamespace
        },
        m = function (e, t) {
          return t.match.params.topicId
        },
        f = function (e, t) {
          var n = m(0, t)
          return n ? u.a.select(e, n) : void 0
        },
        h = Object(o.a)(function (e) {
          return (function (e) {
            return Object(s.a)({
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
          var n = m(0, t)
          return h(n)
        },
        v = Object(l.a)()
          .propsFromState(function () {
            return { referringScribeNamespace: d, topic: f, topicId: m, module: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'NOTEWORTHY_ACCOUNTS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'noteworthy_accounts' }),
        b = n('UZjl'),
        E = { page: 'noteworthy_accounts', section: 'main' },
        T = i.a.createElement(r.a, { withTopicsToFollow: !1 }),
        _ = function (e) {
          var t = e.history,
            n = e.module,
            a = e.topic,
            r = e.topicId,
            o = null != a && a.name ? ''.concat(a.name) : '',
            c = '/i/topics/'.concat(r)
          return i.a.createElement(b.a, {
            backLocation: c,
            history: t,
            initialPageNamespace: E,
            module: n,
            sidebarContent: T,
            timelinePrefix: 'noteworthy-accounts',
            title: o,
          })
        },
        y = v(_)
      t.default = y
    },
    owBv: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        r = n('lTXM'),
        o = n('m3Bd'),
        c = n.n(o),
        s = (n('z84I'), n('ho0z'), n('YeIG')),
        u = n('kLu5'),
        l = n('7MdP'),
        p = ['__typename', 'facepile', 'topic'],
        d = function (e) {
          var t = Object(u.b)(),
            n = (function (e) {
              if ('SegmentedTimelines' === e.body.__typename) {
                var t = e.body.timelines.map(function (e) {
                  return {
                    graphQLTimelineId: e.timeline.id,
                    id: e.id,
                    labelText: e.labelText,
                    scribeConfig: Object(s.a)(e.scribeConfig) ? void 0 : i()({}, e.scribeConfig),
                    refreshIntervalSec: e.refreshIntervalSec,
                  }
                })
                return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t }
              }
            })(e),
            a = (function (e, t) {
              var n = t.header
              if (n && 'TopicPageHeader' === n.__typename) {
                n.__typename
                var a = n.facepile,
                  r = n.topic,
                  o = c()(n, p),
                  s = a && Object(l.b)(e, a),
                  u = Object(l.a)(e, r)
                return i()(i()({}, o), {}, { topicId: u, facepile: s })
              }
            })(t, e),
            r = (function (e, t) {
              var n = t.navBar
              if (!n) return {}
              switch (n.__typename) {
                case 'TitleNavBar':
                  return { title: n.title, subtitle: n.subtitle }
                case 'TopicPageNavBar':
                  return {
                    navBar: { topicId: Object(l.a)(e, n.topic), clientEventInfo: n.clientEventInfo },
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
              header: a,
              navBar: r.navBar && r.navBar,
              title: r.title,
              subtitle: r.subtitle,
              scribeConfig: i()({}, e.scribeConfig),
            },
          }
        },
        m = n('WpDa'),
        f = n('IcAo')
      t.a = function (e) {
        var t,
          n,
          a =
            'Timeline' === (t = e.body).__typename && t.timeline
              ? Object(m.a)(t.timeline)
              : 'SegmentedTimelines' === t.__typename &&
                null !== (n = t.initialTimeline) &&
                void 0 !== n &&
                n.timeline.timeline
              ? Object(m.a)(t.initialTimeline.timeline.timeline)
              : Object(m.a)(r.c),
          o = d(e),
          c = o.globalObjects,
          s = o.pageConfiguration
        return i()(i()({}, a), {}, { globalObjects: Object(f.a)(c, a.globalObjects), pageConfiguration: s })
      }
    },
  },
])
//# sourceMappingURL=WIPED
