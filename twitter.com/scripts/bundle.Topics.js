;(window.webpackJsonp = window.webpackJsonp || []).push([
  [95],
  {
    '7mm0': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicLandingPage', function () {
          return Y
        })
      n('ho0z')
      var r = n('ERkP'),
        o = n.n(r),
        i = n('zI2C'),
        c = n('es0u'),
        a = (n('WNMA'), n('KqXw'), n('oQhu')),
        s = n('3IPs'),
        u = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        p = n.n(u),
        l = n('m3Bd'),
        f = n.n(l),
        d = n('owBv'),
        m = n('ZNT5')
      function b(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                p()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var g = 'topic-landing-page',
        O = n('Zejx'),
        v = n('rxPX'),
        y = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.referringScribeNamespace
        },
        P = function (e, t) {
          return t.match.params.topicId
        },
        j = function (e, t) {
          var n = P(0, t)
          return n ? O.a.select(e, n) : void 0
        },
        E = Object(v.a)().propsFromState(function () {
          var e = Object(a.a)(function (e, t) {
            return (function (e) {
              var t = e.params,
                n = e.topicId
              return Object(m.a)({
                context: 'FETCH_TOPIC_TIMELINE',
                getEndpoint: function (e) {
                  return e.Topics.fetchTopicLandingPage
                },
                getEndpointParams: function (e) {
                  var r = e.cursor
                  return h(
                    h(h({}, f()(e, ['cursor'])), t),
                    {},
                    { cursor: 'string' == typeof r ? r : void 0, topicId: n },
                  )
                },
                formatResponse: d.a,
                perfKey: g,
                timelineId: ''.concat(g, '-').concat(n),
              })
            })({ topicId: e, params: t ? { data_lookup_id: t } : void 0 })
          })
          return {
            module: function (t, n) {
              var r = P(0, n),
                o = Object(s.j)(t, n)
              return e(r, o)
            },
            referringScribeNamespace: y,
            topic: j,
            topicId: P,
          }
        }),
        w = n('QIgh'),
        T = n('8UdT'),
        _ = n('Ka9G')
      function I(e, t) {
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
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                p()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = N(N({}, w.b), {}, p()({}, T.b.User, Object(_.a)({ shouldScribeImpression: !0 }))),
        C = (n('2G9S'), n('qzfk')),
        k = n('Rp9C')
      function R(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                p()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var L = Object(a.a)(function (e, t) {
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
              .concat(Object(C.a)().clientName, ':')
              .concat(p, ':')
              .concat(f, ':')
              .concat(c, ':')
              .concat(s, ':')
              .concat(o)
          }
          return { items: t ? [F({}, k.a.forTopic(t))] : void 0, referring_event: n }
        }),
        x = n('3XMw'),
        A = n.n(x),
        H = n('rJoH'),
        U = n('UZjl'),
        M = n('7JQg'),
        B = function (e) {
          return 'https://twitter.com/i/topics/'.concat(e)
        },
        D = function (e) {
          return 'twitter://topics_timeline?id='.concat(e)
        },
        K = A.a.a2a3824a,
        X = A.a.f68f0fc7,
        G = A.a.ieb6f5c1,
        Z = A.a.d848d612,
        W = A.a.j70f0f35,
        Q = o.a.createElement(c.a, { withWhoToFollow: !1 }),
        q = { page: 'topic_landing', section: 'main' }
      function Y(e) {
        var t = e.history,
          n = e.module,
          r = e.referringScribeNamespace,
          c = e.topic,
          a = e.topicId,
          s = null != c && c.name ? G({ topicName: null == c ? void 0 : c.name }) : X,
          u = null != c && c.name ? W({ topicName: null == c ? void 0 : c.name }) : Z
        return o.a.createElement(
          M.b,
          { data: L(r, a) },
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(H.a, { canonical: B(a), description: u, title: s, type: 'article' }),
            o.a.createElement(i.a, { deepLink: D(a) }),
            o.a.createElement(U.a, {
              backLocation: '/',
              entryConfiguration: S,
              history: t,
              initialPageNamespace: q,
              module: n,
              sidebarContent: Q,
              timelinePrefix: g,
              title: K,
            }),
          ),
        )
      }
      var z = E(Y)
      t.default = z
    },
    BO6E: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TOPICS_MANAGEMENT_PREFIX', function () {
          return D
        }),
        n.d(t, 'VIEWING_OTHER_USERS_TOPICS_PREFIX', function () {
          return K
        }),
        n.d(t, 'UserTopicsScreen', function () {
          return G
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
        O = n.n(g),
        v = n('es0u'),
        y = n('0KEI'),
        P = n('8Lfv'),
        j = n('G6rE'),
        E = n('rxPX'),
        w = function (e, t) {
          return t.location.pathname
        },
        T = function (e, t) {
          return 'PUSH' === t.history.action || 'REPLACE' === t.history.action
        },
        _ = function (e, t) {
          return t.match.params.tabId || void 0
        },
        I = function (e, t) {
          return j.e.selectByScreenName(e, t.match.params.screenName)
        },
        N = Object(E.a)()
          .propsFromState(function () {
            return { isForwardNavigation: T, pathname: w, selectedTabId: _, user: I }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: P.a,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('USER_TOPICS_SCREEN'),
              fetchUserByScreenNameIfNeeded: j.e.fetchOneByScreenNameIfNeeded,
            }
          }),
        S = n('7wqI'),
        C = n('3XMw'),
        k = n.n(C),
        R = n('oQhu'),
        F = n('5FtR'),
        L = n('UZjl'),
        x = n('owBv'),
        A = n('ZNT5'),
        H = Object(A.a)({
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
        U = n('v6aA')
      function M(e) {
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
      var B = k.a.b8533bac,
        D = 'topics-management-',
        K = 'viewing-other-users-topics-',
        X = O.a.createElement(v.a, { withTopicsToFollow: !1 }),
        G = (function (e) {
          p()(n, e)
          var t = M(n)
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
                Object(R.a)(function (e, t) {
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
                    c = o && Object(S.b)({ isOwnProfile: i, user: o }),
                    a = !i && this._isOnNotInterestedPage(),
                    s = o && (!c || a),
                    u = '/'.concat(n.params.screenName)
                  if (s) {
                    var p = a ? u.concat('/topics') : u
                    return O.a.createElement(F.a, { to: p })
                  }
                  var l,
                    f = this._getScribeNamespace(this._isOnNotInterestedPage(), i),
                    d = i
                      ? H
                      : ((l = (o && o.id_str) || ''),
                        Object(A.a)({
                          timelineId: 'viewing-user-'.concat(l, '-topics-page-graphql'),
                          getEndpoint: function (e) {
                            return e.Topics.fetchViewingOtherUsersTopicsPagePage
                          },
                          getEndpointParams: function (e) {
                            return { count: e.count, userId: l }
                          },
                          formatResponse: x.a,
                          context: 'FETCH_OTHER_USERS_TOPICS_PAGE',
                          perfKey: 'viewing-other-users-topics-page-GraphQL',
                        })),
                    m = i ? D : K
                  return O.a.createElement(L.a, {
                    backLocation: u,
                    getTabLink: this._getTabLink,
                    history: t,
                    initialPageNamespace: f,
                    module: d,
                    selectedTabId: r,
                    sidebarContent: X,
                    timelinePrefix: m,
                    title: B,
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
        })(O.a.Component)
      h()(G, 'contextType', U.a)
      var Z = N(G)
      t.default = Z
    },
    'Ih+Y': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicsEducationScreen', function () {
          return A
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
        O = n.n(g),
        v = n('G6rE'),
        y = n('rxPX'),
        P = Object(y.a)()
          .propsFromState(function () {
            return { loggedInUser: v.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { screenName: t && t.screen_name }
          })
          .withAnalytics({ page: 'topic_education' }),
        j = n('jHSc'),
        E = n('EHV7'),
        w = n('5FtR'),
        T = n('MWbm'),
        _ = n('t62R'),
        I = n('cmUU'),
        N = n('rHpw'),
        S = n('3XMw'),
        C = n.n(S)
      function k(e) {
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
      var R = C.a.g931a6e4,
        F = C.a.j24c37b2,
        L = C.a.c5bb3cd1,
        x = C.a.e241095e,
        A = (function (e) {
          p()(n, e)
          var t = k(n)
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
                return O.a.createElement(
                  T.a,
                  null,
                  O.a.createElement(_.b, { color: 'gray700' }, L),
                  O.a.createElement(_.b, { color: 'gray700', style: H.paddingTop }, e._getSecondaryText()),
                )
              }),
              h()(s()(e), '_getSecondaryText', function () {
                var t = e.props.screenName,
                  n = { pathname: t ? '/'.concat(t, '/topics') : '/home', method: 'replace' },
                  r = {
                    yourTopicsLink: O.a.createElement(_.b, {
                      accessibilityLabel: x,
                      accessibilityRole: 'link',
                      color: 'link',
                      link: n,
                      withInteractiveStyling: !0,
                    }),
                  }
                return O.a.createElement(
                  C.a.I18NFormatMessage,
                  { $i18n: 'e1d95725' },
                  O.a.cloneElement(r.yourTopicsLink, null, C.a.f8bc75e2),
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
                    ? O.a.createElement(
                        j.b,
                        { renderHeader: this._renderHeader },
                        this._renderContent(e.state.topicName),
                      )
                    : O.a.createElement(w.a, { to: '/home' })
                },
              },
              {
                key: '_renderContent',
                value: function (e) {
                  return O.a.createElement(I.a, {
                    actionLabel: F,
                    graphic: E.a,
                    headline: R({ topic: e }),
                    onAction: this._handleClose,
                    onClose: this._handleClose,
                    subtext: this._getSubtext(),
                  })
                },
              },
            ]),
            n
          )
        })(O.a.Component),
        H = N.a.create(function (e) {
          return { paddingTop: { paddingTop: e.spaces.space16 } }
        }),
        U = P(A)
      t.default = U
    },
    SQcl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TopicsPicker', function () {
          return T
        })
      n('jQ3i'), n('x4t0')
      var r = n('ERkP'),
        o = n.n(r),
        i = n('zI2C'),
        c = n('es0u'),
        a = (n('WNMA'), n('KqXw'), n('hqKg')),
        s = n('8Lfv'),
        u = n('owBv'),
        p = n('ZNT5'),
        l = n('rxPX'),
        f = function (e, t) {
          return 'PUSH' === t.history.action || 'REPLACE' === t.history.action
        },
        d = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.previousPath
        },
        m = function (e, t) {
          var n, r
          return (
            (null === (n = t.match) || void 0 === n || null === (r = n.params) || void 0 === r ? void 0 : r.tabId) ||
            void 0
          )
        },
        b = function () {
          return Object(a.createSelector)(m, function (e) {
            return (
              (t = e),
              Object(p.a)({
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
        h = Object(l.a)()
          .propsFromState(function () {
            return { isForwardNavigation: f, module: b(), previousPath: d, selectedTabId: m }
          })
          .propsFromActions(function () {
            return { clearTimelineCache: s.a }
          }),
        g = n('3XMw'),
        O = n.n(g),
        v = n('UZjl'),
        y = O.a.d094c720,
        P = { page: 'topics_picker', section: 'main' },
        j = function (e) {
          return e ? 'twitter://topics/picker/'.concat(e) : 'twitter://topics/picker'
        },
        E = function (e) {
          return { pathname: '/i/topics/picker/'.concat(e) }
        },
        w = o.a.createElement(c.a, { withTopicsToFollow: !1 }),
        T = function (e) {
          var t = e.clearTimelineCache,
            n = e.history,
            r = e.isForwardNavigation,
            c = e.module,
            a = e.previousPath,
            s = e.selectedTabId
          return (
            o.a.useEffect(function () {
              !r || (null != a && a.includes('/i/topics/picker')) || t(c)
            }),
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(i.a, { deepLink: j(s) }),
              o.a.createElement(v.a, {
                backLocation: '/home',
                getTabLink: E,
                history: n,
                initialPageNamespace: P,
                module: c,
                selectedTabId: s,
                sidebarContent: w,
                timelinePrefix: 'topics-picker-',
                title: y,
              }),
            )
          )
        },
        _ = h(T)
      t.default = _
    },
    XsZp: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NoteworthyAccountsScreen', function () {
          return P
        })
      n('ho0z')
      var r = n('ERkP'),
        o = n.n(r),
        i = n('es0u'),
        c = (n('WNMA'), n('KqXw'), n('oQhu')),
        a = n('owBv'),
        s = n('ZNT5'),
        u = n('Zejx'),
        p = n('rxPX'),
        l = n('0KEI'),
        f = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.referringScribeNamespace
        },
        d = function (e, t) {
          return t.match.params.topicId
        },
        m = function (e, t) {
          var n = d(0, t)
          return n ? u.a.select(e, n) : void 0
        },
        b = Object(c.a)(function (e) {
          return (function (e) {
            return Object(s.a)({
              context: 'FETCH_NOTEWORTHY_ACCOUNTS_PAGE',
              getEndpoint: function (e) {
                return e.Topics.fetchNoteworthyAccountsPage
              },
              getEndpointParams: function () {
                return { topicId: e }
              },
              formatResponse: a.a,
              perfKey: 'noteworthy-accounts',
              timelineId: ''.concat('noteworthy-accounts-', '-').concat(e),
            })
          })(e)
        }),
        h = function (e, t) {
          var n = d(0, t)
          return b(n)
        },
        g = Object(p.a)()
          .propsFromState(function () {
            return { referringScribeNamespace: f, topic: m, topicId: d, module: h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'NOTEWORTHY_ACCOUNTS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'noteworthy_accounts' }),
        O = n('UZjl'),
        v = { page: 'noteworthy_accounts', section: 'main' },
        y = o.a.createElement(i.a, { withTopicsToFollow: !1 }),
        P = function (e) {
          var t = e.history,
            n = e.module,
            r = e.topic,
            i = e.topicId,
            c = null != r && r.name ? ''.concat(r.name) : '',
            a = '/i/topics/'.concat(i)
          return o.a.createElement(O.a, {
            backLocation: a,
            history: t,
            initialPageNamespace: v,
            module: n,
            sidebarContent: y,
            timelinePrefix: 'noteworthy-accounts',
            title: c,
          })
        },
        j = g(P)
      t.default = j
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
