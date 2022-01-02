;(window.webpackJsonp = window.webpackJsonp || []).push([
  [94],
  {
    '7mm0': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicLandingPage', function () {
          return q
        })
      n('ho0z')
      var r = n('ERkP'),
        o = n('zI2C'),
        i = n('es0u'),
        c = (n('WNMA'), n('KqXw'), n('oQhu')),
        a = n('3IPs'),
        s = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        u = n.n(s),
        p = n('m3Bd'),
        l = n.n(p),
        f = n('owBv'),
        d = n('ZNT5')
      function m(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var h = 'topic-landing-page',
        g = n('Zejx'),
        O = n('rxPX'),
        v = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.referringScribeNamespace
        },
        y = function (e, t) {
          return t.match.params.topicId
        },
        P = function (e, t) {
          var n = y(0, t)
          return n ? g.a.select(e, n) : void 0
        },
        j = Object(O.a)().propsFromState(function () {
          var e = Object(c.a)(function (e, t) {
            return (function (e) {
              var t = e.params,
                n = e.topicId
              return Object(d.a)({
                context: 'FETCH_TOPIC_TIMELINE',
                getEndpoint: function (e) {
                  return e.Topics.fetchTopicLandingPage
                },
                getEndpointParams: function (e) {
                  var r = e.cursor
                  return b(
                    b(b({}, l()(e, ['cursor'])), t),
                    {},
                    { cursor: 'string' == typeof r ? r : void 0, topicId: n },
                  )
                },
                formatResponse: f.a,
                perfKey: h,
                timelineId: ''.concat(h, '-').concat(n),
              })
            })({ topicId: e, params: t ? { data_lookup_id: t } : void 0 })
          })
          return {
            module: function (t, n) {
              var r = y(0, n),
                o = Object(a.j)(t, n)
              return e(r, o)
            },
            referringScribeNamespace: v,
            topic: P,
            topicId: y,
          }
        }),
        E = n('QIgh'),
        w = n('8UdT'),
        T = n('Ka9G')
      function _(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var N = I(I({}, E.b), {}, u()({}, w.b.User, Object(T.a)({ shouldScribeImpression: !0 }))),
        S = (n('2G9S'), n('qzfk')),
        C = n('Rp9C')
      function k(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var F = Object(c.a)(function (e, t) {
          var n
          if (e) {
            var r = e.action,
              o = void 0 === r ? '' : r,
              i = e.component,
              c = void 0 === i ? '' : i,
              a = e.element,
              s = void 0 === a ? '' : a,
              u = e.page,
              p = void 0 === u ? '' : u,
              l = e.section,
              f = void 0 === l ? '' : l
            n = ''
              .concat(Object(S.a)().clientName, ':')
              .concat(p, ':')
              .concat(f, ':')
              .concat(c, ':')
              .concat(s, ':')
              .concat(o)
          }
          return { items: t ? [R({}, C.a.forTopic(t))] : void 0, referring_event: n }
        }),
        L = n('3XMw'),
        x = n.n(L),
        A = n('rJoH'),
        H = n('UZjl'),
        U = n('7JQg'),
        M = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        B = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        D = x.a.a2a3824a,
        K = x.a.f68f0fc7,
        X = x.a.ieb6f5c1,
        G = x.a.d848d612,
        Z = x.a.j70f0f35,
        W = r.createElement(i.a, { withWhoToFollow: !1 }),
        Q = { page: 'topic_landing', section: 'main' }
      function q(e) {
        var t = e.history,
          n = e.module,
          i = e.referringScribeNamespace,
          c = e.topic,
          a = e.topicId,
          s = null != c && c.name ? X({ topicName: null == c ? void 0 : c.name }) : K,
          u = null != c && c.name ? Z({ topicName: null == c ? void 0 : c.name }) : G
        return r.createElement(
          U.b,
          { data: F(i, a) },
          r.createElement(
            r.Fragment,
            null,
            r.createElement(A.a, { canonical: M(a), description: u, title: s, type: 'article' }),
            r.createElement(o.a, { deepLink: B(a) }),
            r.createElement(H.a, {
              backLocation: '/',
              entryConfiguration: N,
              history: t,
              initialPageNamespace: Q,
              module: n,
              sidebarContent: W,
              timelinePrefix: h,
              title: D,
            }),
          ),
        )
      }
      var Y = j(q)
      t.default = Y
    },
    BO6E: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TOPICS_MANAGEMENT_PREFIX', function () {
          return B
        }),
        n.d(t, 'VIEWING_OTHER_USERS_TOPICS_PREFIX', function () {
          return D
        }),
        n.d(t, 'UserTopicsScreen', function () {
          return X
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        c = n.n(i),
        a = n('1Pcy'),
        s = n.n(a),
        u = n('5Yy7'),
        p = n.n(u),
        l = n('N+ot'),
        f = n.n(l),
        d = n('AuHH'),
        m = n.n(d),
        b = n('KEM+'),
        h = n.n(b),
        g = (n('WNMA'), n('KqXw'), n('2G9S'), n('vrRf'), n('ERkP')),
        O = n('es0u'),
        v = n('0KEI'),
        y = n('8Lfv'),
        P = n('G6rE'),
        j = n('rxPX'),
        E = function (e, t) {
          return t.location.pathname
        },
        w = function (e, t) {
          return 'PUSH' === t.history.action || 'REPLACE' === t.history.action
        },
        T = function (e, t) {
          return t.match.params.tabId || void 0
        },
        _ = function (e, t) {
          return P.e.selectByScreenName(e, t.match.params.screenName)
        },
        I = Object(j.a)()
          .propsFromState(function () {
            return { isForwardNavigation: w, pathname: E, selectedTabId: T, user: _ }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: y.a,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('USER_TOPICS_SCREEN'),
              fetchUserByScreenNameIfNeeded: P.e.fetchOneByScreenNameIfNeeded,
            }
          }),
        N = n('7wqI'),
        S = n('3XMw'),
        C = n.n(S),
        k = n('oQhu'),
        R = n('5FtR'),
        F = n('UZjl'),
        L = n('owBv'),
        x = n('ZNT5'),
        A = Object(x.a)({
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
        H = n('v6aA')
      function U(e) {
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
            r = m()(e)
          if (t) {
            var o = m()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var M = C.a.b8533bac,
        B = 'topics-management-',
        D = 'viewing-other-users-topics-',
        K = g.createElement(O.a, { withTopicsToFollow: !1 }),
        X = (function (e) {
          p()(n, e)
          var t = U(n)
          function n(e, r) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              h()(s()(i), '_getTabLink', function (e) {
                var t = i.props.match
                return '/'.concat(t.params.screenName, '/topics/').concat(e)
              }),
              h()(
                s()(i),
                '_getScribeNamespace',
                Object(k.a)(function (e, t) {
                  return { page: e ? 'not_interested_topics' : 'followed_topics', section: t ? 'self' : 'other' }
                }),
              ),
              e.isForwardNavigation && i._clearTimelineCache(),
              i
            )
          }
          return (
            c()(n, [
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
                    r = e.selectedTabId,
                    o = e.user,
                    i = this._isOwnProfile(),
                    c = o && Object(N.b)({ isOwnProfile: i, user: o }),
                    a = !i && this._isOnNotInterestedPage(),
                    s = o && (!c || a),
                    u = '/'.concat(n.params.screenName)
                  if (s) {
                    var p = a ? u.concat('/topics') : u
                    return g.createElement(R.a, { to: p })
                  }
                  var l,
                    f = this._getScribeNamespace(this._isOnNotInterestedPage(), i),
                    d = i
                      ? A
                      : ((l = (o && o.id_str) || ''),
                        Object(x.a)({
                          timelineId: 'viewing-user-'.concat(l, '-topics-page-graphql'),
                          getEndpoint: function (e) {
                            return e.Topics.fetchViewingOtherUsersTopicsPagePage
                          },
                          getEndpointParams: function (e) {
                            return { count: e.count, userId: l }
                          },
                          formatResponse: L.a,
                          context: 'FETCH_OTHER_USERS_TOPICS_PAGE',
                          perfKey: 'viewing-other-users-topics-page-GraphQL',
                        })),
                    m = i ? B : D
                  return g.createElement(F.a, {
                    backLocation: u,
                    getTabLink: this._getTabLink,
                    history: t,
                    initialPageNamespace: f,
                    module: d,
                    selectedTabId: r,
                    sidebarContent: K,
                    timelinePrefix: m,
                    title: M,
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
                  this._isOwnProfile() && t(A).catch(n())
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
        })(g.Component)
      h()(X, 'contextType', H.a)
      var G = I(X)
      t.default = G
    },
    'Ih+Y': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicsEducationScreen', function () {
          return x
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        c = n.n(i),
        a = n('1Pcy'),
        s = n.n(a),
        u = n('5Yy7'),
        p = n.n(u),
        l = n('N+ot'),
        f = n.n(l),
        d = n('AuHH'),
        m = n.n(d),
        b = n('KEM+'),
        h = n.n(b),
        g = (n('2G9S'), n('ERkP')),
        O = n('G6rE'),
        v = n('rxPX'),
        y = Object(v.a)()
          .propsFromState(function () {
            return { loggedInUser: O.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { screenName: t && t.screen_name }
          })
          .withAnalytics({ page: 'topic_education' }),
        P = n('jHSc'),
        j = n('EHV7'),
        E = n('5FtR'),
        w = n('MWbm'),
        T = n('t62R'),
        _ = n('cmUU'),
        I = n('rHpw'),
        N = n('3XMw'),
        S = n.n(N)
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
            r = m()(e)
          if (t) {
            var o = m()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var k = S.a.g931a6e4,
        R = S.a.j24c37b2,
        F = S.a.c5bb3cd1,
        L = S.a.e241095e,
        x = (function (e) {
          p()(n, e)
          var t = C(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_renderHeader', function (e) {
                return null
              }),
              h()(s()(e), '_handleClose', function () {
                e.props.history.goBack()
              }),
              h()(s()(e), '_getSubtext', function () {
                return g.createElement(
                  w.a,
                  null,
                  g.createElement(T.b, { color: 'gray700' }, F),
                  g.createElement(T.b, { color: 'gray700', style: A.paddingTop }, e._getSecondaryText()),
                )
              }),
              h()(s()(e), '_getSecondaryText', function () {
                var t = e.props.screenName,
                  n = { pathname: t ? '/'.concat(t, '/topics') : '/home', method: 'replace' },
                  r = {
                    yourTopicsLink: g.createElement(T.b, {
                      accessibilityLabel: L,
                      accessibilityRole: 'link',
                      color: 'link',
                      link: n,
                      withInteractiveStyling: !0,
                    }),
                  }
                return g.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'e1d95725' },
                  g.cloneElement(r.yourTopicsLink, null, S.a.f8bc75e2),
                )
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.location
                  return e.state && e.state.topicName
                    ? g.createElement(P.b, { renderHeader: this._renderHeader }, this._renderContent(e.state.topicName))
                    : g.createElement(E.a, { to: '/home' })
                },
              },
              {
                key: '_renderContent',
                value: function (e) {
                  return g.createElement(_.a, {
                    actionLabel: R,
                    graphic: j.a,
                    headline: k({ topic: e }),
                    onAction: this._handleClose,
                    onClose: this._handleClose,
                    subtext: this._getSubtext(),
                  })
                },
              },
            ]),
            n
          )
        })(g.Component),
        A = I.a.create(function (e) {
          return { paddingTop: { paddingTop: e.spaces.space16 } }
        }),
        H = y(x)
      t.default = H
    },
    SQcl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicsPicker', function () {
          return w
        })
      n('jQ3i'), n('x4t0')
      var r = n('ERkP'),
        o = n('zI2C'),
        i = n('es0u'),
        c = (n('WNMA'), n('KqXw'), n('hqKg')),
        a = n('8Lfv'),
        s = n('owBv'),
        u = n('ZNT5'),
        p = n('rxPX'),
        l = function (e, t) {
          return 'PUSH' === t.history.action || 'REPLACE' === t.history.action
        },
        f = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.previousPath
        },
        d = function (e, t) {
          var n, r
          return (
            (null === (n = t.match) || void 0 === n || null === (r = n.params) || void 0 === r ? void 0 : r.tabId) ||
            void 0
          )
        },
        m = function () {
          return Object(c.createSelector)(d, function (e) {
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
        b = Object(p.a)()
          .propsFromState(function () {
            return { isForwardNavigation: l, module: m(), previousPath: f, selectedTabId: d }
          })
          .propsFromActions(function () {
            return { clearTimelineCache: a.a }
          }),
        h = n('3XMw'),
        g = n.n(h),
        O = n('UZjl'),
        v = g.a.d094c720,
        y = { page: 'topics_picker', section: 'main' },
        P = function (e) {
          return e ? 'twitter://topics/picker/'.concat(e) : 'twitter://topics/picker'
        },
        j = function (e) {
          return { pathname: '/i/topics/picker/'.concat(e) }
        },
        E = r.createElement(i.a, { withTopicsToFollow: !1 }),
        w = function (e) {
          var t = e.clearTimelineCache,
            n = e.history,
            i = e.isForwardNavigation,
            c = e.module,
            a = e.previousPath,
            s = e.selectedTabId
          return (
            r.useEffect(function () {
              !i || (null != a && a.includes('/i/topics/picker')) || t(c)
            }),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(o.a, { deepLink: P(s) }),
              r.createElement(O.a, {
                backLocation: '/home',
                getTabLink: j,
                history: n,
                initialPageNamespace: y,
                module: c,
                selectedTabId: s,
                sidebarContent: E,
                timelinePrefix: 'topics-picker-',
                title: v,
              }),
            )
          )
        },
        T = b(w)
      t.default = T
    },
    XsZp: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NoteworthyAccountsScreen', function () {
          return y
        })
      n('ho0z')
      var r = n('ERkP'),
        o = n('es0u'),
        i = (n('WNMA'), n('KqXw'), n('oQhu')),
        c = n('owBv'),
        a = n('ZNT5'),
        s = n('Zejx'),
        u = n('rxPX'),
        p = n('0KEI'),
        l = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.referringScribeNamespace
        },
        f = function (e, t) {
          return t.match.params.topicId
        },
        d = function (e, t) {
          var n = f(0, t)
          return n ? s.a.select(e, n) : void 0
        },
        m = Object(i.a)(function (e) {
          return (function (e) {
            return Object(a.a)({
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
        b = function (e, t) {
          var n = f(0, t)
          return m(n)
        },
        h = Object(u.a)()
          .propsFromState(function () {
            return { referringScribeNamespace: l, topic: d, topicId: f, module: b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'NOTEWORTHY_ACCOUNTS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'noteworthy_accounts' }),
        g = n('UZjl'),
        O = { page: 'noteworthy_accounts', section: 'main' },
        v = r.createElement(o.a, { withTopicsToFollow: !1 }),
        y = function (e) {
          var t = e.history,
            n = e.module,
            o = e.topic,
            i = e.topicId,
            c = null != o && o.name ? ''.concat(o.name) : '',
            a = '/i/topics/'.concat(i)
          return r.createElement(g.a, {
            backLocation: a,
            history: t,
            initialPageNamespace: O,
            module: n,
            sidebarContent: v,
            timelinePrefix: 'noteworthy-accounts',
            title: c,
          })
        },
        P = h(y)
      t.default = P
    },
    owBv: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        i = n('lTXM'),
        c = n('m3Bd'),
        a = n.n(c),
        s = (n('z84I'), n('ho0z'), n('YeIG')),
        u = n('kLu5'),
        p = n('7MdP')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function (e) {
          var t = Object(u.b)(),
            n = (function (e) {
              if ('SegmentedTimelines' === e.body.__typename) {
                var t = e.body.timelines.map(function (e) {
                  return {
                    graphQLTimelineId: e.timeline.id,
                    id: e.id,
                    labelText: e.labelText,
                    scribeConfig: Object(s.a)(e.scribeConfig) ? void 0 : f({}, e.scribeConfig),
                    refreshIntervalSec: e.refreshIntervalSec,
                  }
                })
                return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t }
              }
            })(e),
            r = (function (e, t) {
              var n = t.header
              if (n && 'TopicPageHeader' === n.__typename) {
                n.__typename
                var r = n.facepile,
                  o = n.topic,
                  i = a()(n, ['__typename', 'facepile', 'topic']),
                  c = r && Object(p.b)(e, r),
                  s = Object(p.a)(e, o)
                return f(f({}, i), {}, { topicId: s, facepile: c })
              }
            })(t, e),
            o = (function (e, t) {
              var n = t.navBar
              if (!n) return {}
              switch (n.__typename) {
                case 'TitleNavBar':
                  return { title: n.title, subtitle: n.subtitle }
                case 'TopicPageNavBar':
                  return {
                    navBar: { topicId: Object(p.a)(e, n.topic), clientEventInfo: n.clientEventInfo },
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
              header: r,
              navBar: o.navBar && o.navBar,
              title: o.title,
              subtitle: o.subtitle,
              scribeConfig: f({}, e.scribeConfig),
            },
          }
        },
        m = n('WpDa'),
        b = n('IcAo')
      function h(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.a = function (e) {
        var t,
          n,
          r =
            'Timeline' === (t = e.body).__typename && t.timeline
              ? Object(m.a)(t.timeline)
              : 'SegmentedTimelines' === t.__typename &&
                null !== (n = t.initialTimeline) &&
                void 0 !== n &&
                n.timeline.timeline
              ? Object(m.a)(t.initialTimeline.timeline.timeline)
              : Object(m.a)(i.c),
          o = d(e),
          c = o.globalObjects,
          a = o.pageConfiguration
        return g(g({}, r), {}, { globalObjects: Object(b.a)(c, r.globalObjects), pageConfiguration: a })
      }
    },
  },
])
//# sourceMappingURL=WIPED
