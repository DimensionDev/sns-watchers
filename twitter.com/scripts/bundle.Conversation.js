;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    '8BIC': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationAnalyticsScreen', function () {
          return Q
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        g = n('KEM+'),
        h = n.n(g),
        y = (n('2G9S'), n('ho0z'), n('WNMA'), n('KqXw'), n('ERkP')),
        b = n('zh9S'),
        v = n('hqKg'),
        w = n('XOJV'),
        E = n('0KEI'),
        O = n('oEGd'),
        _ = function (e, t) {
          return t.match.params.statusId
        },
        P = Object(v.createSelector)(
          function (e, t) {
            return w.a.selectFetchStatus(e, _(0, t))
          },
          _,
          function (e, t) {
            return w.a.selectHydrated(e, _(0, t))
          },
          function (e, t, n) {
            return { fetchStatus: e, statusId: t, tweet: n }
          },
        ),
        I = {
          createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)(
            'CONVERSATION_ANALYTICS_SCREEN',
          ),
          fetchTweetIfNeeded: w.a.fetchOneIfNeeded,
          scribeAction: b.c,
        },
        T = Object(O.g)(P, I),
        C = n('v//M'),
        S = n('W5XZ'),
        k = n('jHSc'),
        j = n('3XMw'),
        L = n.n(j),
        x = n('SrIh'),
        A = n('Rp9C'),
        R = n('v6aA'),
        D = n('7JQg'),
        B = n('E0cF'),
        F = n('q9Zt'),
        N = n('bPFD'),
        M = n('rHpw'),
        q = n('yE5w')
      function H(e, t) {
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
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var G = L.a.g9079b93,
        V = L.a.a57daeb1,
        W = L.a.deaf5b15,
        Q = (function (e) {
          s()(n, e)
          var t = U(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(n(S.a))
              }),
              h()(l()(e), '_render', function () {
                var t = e.props.tweet,
                  n = (t && B.a.getOriginalTweet(t)) || void 0
                if (!n || (n && n.user.id_str !== e.context.loggedInUserId))
                  return y.createElement(F.a, { onRetry: null, title: G })
                return y.createElement(N.a, {
                  dangerouslyDisableSandbox: !0,
                  onMessage: e._handleIFrameMessage,
                  reportError: x.a,
                  src: ''.concat('', '/i/tfb/v1/quick_promote/lite/').concat(n.id_str),
                  style: X.iframe,
                })
              }),
              h()(l()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              h()(l()(e), '_handleGoBack', function () {
                e.props.history.goBackThroughModals()
              }),
              h()(l()(e), '_handleIFrameMessage', function (t) {
                if (t && 'quick_promote' === t.name)
                  if ('scribe' === t.type) {
                    var n = e.props,
                      r = n.scribeAction,
                      a = n.scribeNamespace,
                      o = n.tweet,
                      c = (o && B.a.getOriginalTweet(o)) || void 0,
                      i = t.scribeData || {},
                      l = 'string' == typeof i.component ? i.component : 'quick_promote',
                      u = 'string' == typeof i.uiEvent ? i.uiEvent : ''
                    r(
                      z(z({}, a), {}, { component: l, action: u }),
                      z(z({}, i), {}, { items: c ? [A.a.getTweetItem(c)] : [] }),
                    )
                  } else if ('navigation' === t.type) {
                    var s = e.props,
                      d = s.history,
                      f = s.match,
                      p = s.tweet,
                      m = p && B.a.getOriginalTweet(p)
                    m &&
                      d.push(
                        '/'
                          .concat(f.params.screenName, '/status/')
                          .concat(m.id_str, '/')
                          .concat(q.a.Rweb, '/')
                          .concat(q.c.Intro),
                      )
                  } else 'close' === t.type && e._appBarRef && e._appBarRef.goBack()
              }),
              h()(l()(e), '_handleScribeAction', function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'IframeTweetAnalytics',
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'view',
                  a = e.props,
                  o = a.scribeAction,
                  c = a.scribeNamespace,
                  i = a.tweet,
                  l = (i && B.a.getOriginalTweet(i)) || void 0
                o(
                  z(z({}, c), {}, { component: n, action: r }),
                  z(z({}, t), {}, { items: l ? [A.a.getTweetItem(l)] : [] }),
                )
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchTweet(), (this._dwellStartTime = Date.now())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history,
                    r = e.tweet,
                    a = (r && B.a.getOriginalTweet(r)) || void 0
                  return y.createElement(
                    k.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: a ? a.permalink : '/',
                      history: n,
                      onBackClick: this._handleGoBack,
                      title: V,
                    },
                    y.createElement(C.a, { fetchStatus: t, render: this._render, retryMessage: W }),
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = Date.now() - this._dwellStartTime
                  this._handleScribeAction({ event_info: JSON.stringify({ duration_ms: e }) })
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Q, 'contextType', R.a)
      var X = M.a.create(function (e) {
        return { iframe: { flexGrow: 1 } }
      })
      t.default = Object(D.c)({ page: 'tweet', section: 'analytics' })(T(Q))
    },
    'AEu/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationHiddenRepliesScreen', function () {
          return $
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        g = n('KEM+'),
        h = n.n(g),
        y = (n('2G9S'), n('ERkP')),
        b = n('es0u'),
        v = n('m3Bd'),
        w = n.n(v),
        E =
          (n('WNMA'),
          n('KqXw'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('8Lfv')),
        O = n('G6rE'),
        _ = n('rxPX'),
        P = n('0KEI')
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
      var T = function (e, t) {
          return t.match.params.statusId
        },
        C = function (e, t) {
          return t.match.params.screenName
        },
        S = function (e, t) {
          return 'PUSH' === t.history.action
        },
        k = Object(_.a)()
          .propsFromState(function () {
            return { screenName: C, statusId: T, isForwardNavigation: S, loggedInUser: O.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = w()(e, ['loggedInUser'])
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? I(Object(n), !0).forEach(function (t) {
                      h()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : I(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ loggedInScreenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('HIDDEN_REPLIES_PAGE'),
              clearTimelineCache: function (e) {
                return Object(E.a)(e)
              },
            }
          })
          .withAnalytics({ page: 'tweet', section: 'moderated_replies' }),
        j = n('xZXe'),
        L = n('QIgh'),
        x = n('8UdT'),
        A = n('IcAo'),
        R = n('VrCx'),
        D = n('yy6l'),
        B = function (e) {
          return Object(D.a)({
            component: j.a,
            createAdditionalProps: function () {
              return { withUnhideReply: e }
            },
            displayBlocked: !0,
            divider: { top: !0, bottom: !0 },
          })
        },
        F = n('WU0f'),
        N = n('oQhu'),
        M = n('yoO3'),
        q = n('fTQJ'),
        H = n('VS6U'),
        z = n('t62R'),
        U = n('FIs5'),
        G = n('3XMw'),
        V = n.n(G)
      function W(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Q = V.a.d806aa19,
        X = V.a.d80c77dc,
        K = V.a.ef939f4b,
        J = V.a.f7f2db4f,
        Z = y.createElement(
          V.a.I18NFormatMessage,
          { $i18n: 'cf1aca58' },
          y.createElement(
            z.b,
            { link: 'https://help.twitter.com/using-twitter/mentions-and-replies#hidden-reply' },
            V.a.a7511618,
          ),
        ),
        Y = function () {
          return y.createElement(U.a, { header: J, message: Z })
        },
        $ = (function (e) {
          s()(n, e)
          var t = W(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              h()(
                l()(r),
                '_getMemoizedModule',
                Object(N.a)(function (e) {
                  return Object(F.a)(e)
                }),
              ),
              h()(l()(r), '_getModule', function () {
                var e = r.props.statusId
                return r._getMemoizedModule(e)
              }),
              r._clearTimelineCache(),
              r
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.loggedInScreenName,
                    r = e.screenName,
                    a = e.statusId
                  return r && a
                    ? y.createElement(
                        M.a,
                        null,
                        y.createElement(H.a, {
                          backLocation: '/'.concat(r.toLowerCase(), '/status/').concat(a),
                          history: t,
                          primaryContent: this._renderPrimaryContent(),
                          sidebarContent: y.createElement(b.a, null),
                          subtitle: r === n ? X : K({ screenName: r }),
                          title: Q,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderPrimaryContent',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.loggedInScreenName,
                    a = n.screenName
                  return y.createElement(q.a, {
                    entryConfiguration:
                      ((e = { withUnhideReply: a === r }),
                      (t = e.withUnhideReply),
                      Object(A.a)({}, L.b, h()({}, x.b.Tweet, { handlers: h()({}, R.a.Tweet, B(t)) }))),
                    module: this._getModule(),
                    renderEmptyState: Y,
                    title: Q,
                  })
                },
              },
              {
                key: '_clearTimelineCache',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getModule(),
                    t = this.props,
                    n = t.clearTimelineCache,
                    r = t.createLocalApiErrorHandler,
                    a = t.isForwardNavigation
                  a && n(e).catch(r({}))
                },
              },
            ]),
            n
          )
        })(y.Component)
      t.default = k($)
    },
    JiIh: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('0GBF')
      t.a = function (e) {
        return r.createElement(a.a, e)
      }
    },
    aH1V: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'QuickPromoteScreen', function () {
          return Aa
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        g = n('KEM+'),
        h = n.n(g),
        y =
          (n('2G9S'),
          n('WNMA'),
          n('KqXw'),
          n('MvUL'),
          n('jQ3i'),
          n('x4t0'),
          n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('ERkP'))
      n('hBpG'), n('+KXO')
      function b(e) {
        throw new Error('Not reachable section reached!')
      }
      var v = n('97Jx'),
        w = n.n(v),
        E = (n('z84I'), n('i4UL'), n('vrRf'), n('M+/F'), n('RqPI')),
        O = n('rxPX'),
        _ = n('0KEI'),
        P = n('S3l+'),
        I = function (e) {
          return e.quickPromote.budget.dailyBudget
        },
        T = function (e) {
          return e.quickPromote.budget.durationDays
        },
        C = function (e) {
          return e.quickPromote.budget.errorMessage
        },
        S = function (e) {
          return (
            e.quickPromote.budget.availableBudgets ||
            (function (e) {
              throw new Error(e)
            })('No budgets found')
          )
        },
        k = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        j = function (e, t) {
          var n,
            r,
            a = Object(P.j)(e)
          return null === (n = e.ads.typeahead.forecastAudience[a]) ||
            void 0 === n ||
            null === (r = n.result) ||
            void 0 === r
            ? void 0
            : r.estimatedImpressions
        },
        L = Object(O.a)()
          .propsFromState(function () {
            return {
              dailyBudget: I,
              durationDays: T,
              availableBudgets: S,
              lang: E.n,
              currency: k,
              audience: j,
              errorMessage: C,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_BUDGET_SELECT_SCREEN',
              ),
              setDailyBudget: P.x,
              setBudgetDuration: P.t,
              fetchForecastedAudienceIfNeeded: P.e,
              setBudgetErrorMessage: P.u,
            }
          })
          .withAnalytics({ page: 'quick_promote' }),
        x = (n('1t7P'), n('jQ/y'), n('MWbm')),
        A = n('t62R'),
        R = n('rHpw'),
        D = function (e) {
          var t = e.children,
            n = e.description,
            r = e.descriptionDir,
            a = e.descriptionTestID,
            o = e.label,
            c = e.withBottomBorder,
            i = void 0 === c || c
          return y.createElement(
            x.a,
            { style: [B.descriptionItem, i ? B.bottomBorder : void 0] },
            !!o && y.createElement(A.b, { weight: 'bold' }, o),
            !!n &&
              y.createElement(
                x.a,
                { style: B.descriptionContainer },
                y.createElement(
                  A.b,
                  { color: 'gray700', dir: r, size: 'subtext2', style: B.descriptionContainer, testID: a },
                  n,
                ),
              ),
            t,
          )
        },
        B = R.a.create(function (e) {
          return {
            descriptionItem: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            descriptionContainer: { marginTop: e.spaces.space2 },
            bottomBorder: { borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: e.colors.borderColor },
          }
        }),
        F = n('E6XO'),
        N = n('WM1P'),
        M = function (e) {
          return (
            (function (e) {
              Object(N.c)(function () {
                var t = F.e(),
                  n = function () {
                    t.resume()
                  },
                  r = function () {
                    t.pause()
                  }
                return (
                  window.addEventListener('focus', n),
                  window.addEventListener('blur', r),
                  function () {
                    F.c(''.concat(N.a, ':dwell:').concat(e), t.end()),
                      window.removeEventListener('focus', n),
                      window.removeEventListener('blur', r)
                  }
                )
              })
            })(e.screenType),
            null
          )
        },
        q = n('Gpeq'),
        H = n('tevE'),
        z = function (e) {
          var t = e.primaryLabel,
            n = e.subtitle,
            r = e.title
          return y.createElement(
            x.a,
            { style: [U.bottomBorder, U.titleContainer] },
            y.createElement(
              A.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                align: 'center',
                size: 'headline1',
                weight: 'heavy',
              },
              r,
            ),
            !!t &&
              y.createElement(
                x.a,
                { style: U.primaryLabelContainer },
                y.createElement(A.b, { align: 'center', color: 'primary', size: 'title4' }, t),
              ),
            y.createElement(
              x.a,
              { style: U.subtitleContainer },
              y.createElement(H.a, { align: 'center', color: 'gray700' }, n),
            ),
          )
        },
        U = R.a.create(function (e) {
          return {
            titleContainer: { paddingVertical: e.spaces.space32 },
            primaryLabelContainer: { marginTop: e.spaces.space12 },
            subtitleContainer: { marginTop: e.spaces.space12 },
            bottomBorder: { borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: e.colors.borderColor },
          }
        }),
        G = n('3XMw'),
        V = n.n(G),
        W = 'introButton',
        Q = 'nextButton',
        X = 'objectiveScreen',
        K = 'targetingScreen',
        J = function (e) {
          return 'targetingScreenGender'.concat(e)
        },
        Z = function (e) {
          return 'objectiveScreenObjective'.concat(e)
        },
        Y = 'targetingLocationScreen',
        $ = 'budgetSelectScreen',
        ee = 'reviewScreen',
        te = 'reviewButton',
        ne = 'reviewObjectiveDescription',
        re = 'reviewTargetingDescription',
        ae = 'reviewBudgetAndDurationDescription',
        oe = 'reviewPaymentPivot',
        ce = 'targetingLocationPivot',
        ie = 'backButton',
        le = 'targetingLocationSearch',
        ue = 'targetingLocationItem',
        se = n('4zmP'),
        de = n('9RkS'),
        fe = n('v6aA'),
        pe = n('Xrkv'),
        me = n('SrIh'),
        ge = V.a.dc4a9413,
        he = V.a.bad70c09,
        ye = V.a.c133a39b,
        be = V.a.ee5da8f4,
        ve = V.a.g4bf9cb7,
        we = V.a.gc3ce5d9,
        Ee = V.a.c1778029,
        Oe = V.a.cb51c854,
        _e = V.a.bb7b39e1,
        Pe = V.a.eb9466d0,
        Ie = V.a.c21037d0,
        Te = V.a.b07cc9f1,
        Ce = V.a.ce309bed,
        Se = V.a.c6c16a51,
        ke = V.a.cc49d03f,
        je = V.a.dbe9353d,
        Le = V.a.c64974fb,
        xe = V.a.i638f89c
      function Ae(e) {
        switch (e) {
          case 'AnyGender':
            return Oe
          case 'Male':
            return _e
          case 'Female':
            return Pe
          default:
            return Object(me.a)('Unknown gender: '.concat(e)), e
        }
      }
      function Re(e) {
        switch (e) {
          case 'COUNTRIES':
            return Ie
          case 'REGIONS':
            return Te
          case 'METROS':
            return Ce
          case 'CITIES':
            return Se
          case 'POSTAL_CODES':
            return ke
          default:
            return Object(me.a)('Unknown targeting locationType: '.concat(e)), e
        }
      }
      function De(e) {
        var t = e.currency,
          n = e.durationDays,
          r = e.lang,
          a = e.totalBudgetNum.toLocaleString(Object(q.a)(r), {
            currency: t,
            style: 'currency',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        return ge({ totalBudget: a, durationLabel: Fe({ durationDays: n }) })
      }
      function Be(e) {
        var t = e.numLocations,
          n = V.a.ia24dc8c(t)
        return he({ numLocations: n })
      }
      function Fe(e) {
        var t = e.durationDays,
          n = V.a.ia24dc8c(t)
        return ve({ durationDays: n })
      }
      var Ne = n('yE5w')
      function Me(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var qe = V.a.a3a09d48,
        He = V.a.e7eb3683,
        ze = V.a.d9f6e3cd,
        Ue = V.a.d9d6e10e,
        Ge = V.a.b3954ec9,
        Ve = V.a.e1b48db4,
        We = Array(30)
          .fill(null)
          .map(function (e, t) {
            return t + 1
          }),
        Qe = (function (e) {
          s()(n, e)
          var t = Me(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_fetchForecastedAudienceIfNeeded', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchForecastedAudienceIfNeeded)(t.match.params.statusId, n).catch(r())
              }),
              h()(l()(e), '_getSliderProps', function (e, t) {
                return { max: e.length - 1, min: 0, value: e.indexOf(t) }
              }),
              h()(l()(e), '_handleDurationSlider', function (t) {
                var n = e.props,
                  r = n.analytics,
                  a = n.durationDays,
                  o = n.setBudgetDuration,
                  c = We[t]
                a !== c &&
                  (Object(Ne.o)(r)(Ne.m.setBudgetDuration(''.concat(c))), o(c), e._fetchForecastedAudienceIfNeeded())
              }),
              h()(l()(e), '_handleBudgetSlider', function (t) {
                var n = e.props,
                  r = n.analytics,
                  a = n.availableBudgets,
                  o = n.dailyBudget,
                  c = n.setDailyBudget,
                  i = a[t]
                o !== i &&
                  (Object(Ne.o)(r)(Ne.m.setDailyBudget(''.concat(i))), c(i), e._fetchForecastedAudienceIfNeeded())
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.analytics
                  Object(Ne.o)(e)(Ne.m.budgetSelectPageLoad()), this._fetchForecastedAudienceIfNeeded()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(0, this.props.setBudgetErrorMessage)(null)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    r,
                    a,
                    o = this.props,
                    c = o.audience,
                    i = o.availableBudgets,
                    l = o.currency,
                    u = o.dailyBudget,
                    s = o.durationDays,
                    d = o.errorMessage,
                    f = o.lang,
                    p = u.toLocaleString(Object(q.a)(f), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    m = i[0].toLocaleString(Object(q.a)(f), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    g = i
                      .slice(-1)[0]
                      .toLocaleString(Object(q.a)(f), {
                        currency: l,
                        style: 'currency',
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }),
                    h = c
                      ? ((t = (e = c).high),
                        (n = e.low),
                        (r = V.a.cf8abf58(n)),
                        (a = V.a.cf8abf58(t)),
                        we({ audienceLow: r, audienceHigh: a }))
                      : ' ',
                    b = Fe({ durationDays: s }),
                    v = Fe({ durationDays: We[0] }),
                    E = Fe({ durationDays: We.slice(-1)[0] }),
                    O = this._getSliderProps(i, u),
                    _ = this._getSliderProps(We, s),
                    P = De({ totalBudgetNum: u * s, durationDays: s, lang: f, currency: l })
                  return y.createElement(
                    x.a,
                    { style: Xe.qpContainer, testID: $ },
                    y.createElement(M, { screenType: Ne.c.BudgetSelect }),
                    d && y.createElement(x.a, { style: Xe.gutter }, y.createElement(se.a, { text: d, type: 'danger' })),
                    y.createElement(z, { primaryLabel: P, subtitle: h, title: qe }),
                    y.createElement(
                      D,
                      { label: He },
                      y.createElement(
                        x.a,
                        { style: Xe.childSpacing },
                        y.createElement(
                          de.a,
                          w()({ accessibilityLabel: ze, accessibilityLabelValueText: '"'.concat(p, '"') }, O, {
                            maxIcon: y.createElement(A.b, { style: Xe.iconText }, g),
                            minIcon: y.createElement(A.b, { style: Xe.iconText }, m),
                            onChange: this._handleBudgetSlider,
                            thumbLabel: p,
                          }),
                        ),
                      ),
                    ),
                    y.createElement(
                      D,
                      { label: Ue },
                      y.createElement(
                        x.a,
                        { style: Xe.childSpacing },
                        y.createElement(
                          de.a,
                          w()({ accessibilityLabel: Ge, accessibilityLabelValueText: '"'.concat(b, '"') }, _, {
                            maxIcon: y.createElement(A.b, { style: Xe.iconText }, E),
                            minIcon: y.createElement(A.b, { style: Xe.iconText }, v),
                            onChange: this._handleDurationSlider,
                            thumbLabel: b,
                          }),
                        ),
                      ),
                    ),
                    y.createElement(
                      x.a,
                      { style: Xe.disclaimer },
                      y.createElement(H.a, { align: 'center', color: 'gray700', size: 'subtext2' }, Ve),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Qe, 'contextType', fe.a)
      var Xe = R.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            disclaimer: {
              marginVertical: e.componentDimensions.gutterVertical,
              marginHorizontal: e.componentDimensions.gutterHorizontal,
            },
            gutter: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            childSpacing: { marginTop: e.spaces.space4 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        Ke = L(Qe),
        Je = n('XOJV'),
        Ze = n('kGix'),
        Ye = function (e, t) {
          return t.match.params.statusId
        },
        $e = function (e, t) {
          return Je.a.selectHydrated(e, Ye(0, t))
        },
        et = function (e, t) {
          return Object(Ze.d)(
            Je.a.selectFetchStatus(e, Ye(0, t)),
            e.quickPromote.budget.availableBudgetsFetchStatus,
            e.quickPromote.targeting.initialTargetedLocationsFetchStatus,
            e.quickPromote.account.accountDataFetchStatus,
            e.quickPromote.firstLoad ? Ze.a.LOADED : Ze.a.LOADING,
          )
        },
        tt = function (e, t) {
          return e.quickPromote.promoteStatus
        },
        nt = function (e, t) {
          return e.quickPromote.promoteErrorCode
        },
        rt = Object(O.a)()
          .propsFromState(function () {
            return { statusId: Ye, fetchStatus: et, tweet: $e, promoteFetchStatus: tt, promoteErrorCode: nt }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_SCREEN',
              ),
              fetchTweetIfNeeded: Je.a.fetchOneIfNeeded,
              fetchCurrentTargetingLocationIfNeeded: P.d,
              fetchAvailableBudgetsIfNeeded: P.c,
              fetchAdsAccountDataIfNeeded: P.b,
              fetchProfessionalEligibilityIfNeeded: P.g,
              handleFirstLoad: function () {
                return (function (e) {
                  var t = e.analytics,
                    n = e.history,
                    r = e.location,
                    a = e.match.params,
                    o = a.quickPromotePlatform,
                    c = a.quickPromoteScreenName,
                    i = a.screenName,
                    l = a.statusId,
                    u = { pa_signup_complete: r.query.pa_signup_complete || '' }
                  return Object(P.i)(i, l, o, c, n, u, t)
                })(e)
              },
              setPromoteFetchStatus: P.D,
            }
          })
          .withAnalytics(Ne.n),
        at = Object(O.a)().withAnalytics(Ne.n),
        ot = n('feu+')
      function ct(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var it = V.a.e1bca506,
        lt = V.a.e4a4c608,
        ut = V.a.a219e217,
        st = (function (e) {
          s()(n, e)
          var t = ct(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_handleGoToAnalytics', function () {
                var t = e.props,
                  n = t.history,
                  r = t.match.params,
                  a = r.quickPromotePlatform,
                  o = r.screenName,
                  c = r.statusId
                Object(Ne.k)(n)(o, c, a)
              }),
              h()(l()(e), '_handleClose', function () {
                e.props.history.goBackThroughModals()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.analytics
                  Object(Ne.o)(e)(Ne.m.donePageLoad())
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: Ne.c.Done }),
                    y.createElement(ot.a, {
                      actionLabel: ut,
                      headline: it,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToAnalytics,
                      onClose: this._handleClose,
                      subtext: lt,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(st, 'contextType', fe.a)
      var dt = at(st),
        ft = n('v//M'),
        pt = n('W5XZ'),
        mt = n('jHSc'),
        gt =
          (n('Cm4o'),
          function (e) {
            return !!e.quickPromote.account.selectedFundingInstrument
          }),
        ht = Object(O.a)()
          .propsFromState(function () {
            return { hasFundingInstrument: gt }
          })
          .withAnalytics(Ne.n),
        yt = n.p + 'desktop_header_image.bfa9e365.png',
        bt = n('TIdA'),
        vt = n('A91F')
      function wt(e) {
        var t = e.style
        return y.createElement(
          x.a,
          { style: t },
          y.createElement(bt.a, { accessibilityLabel: '', aspectMode: vt.a.exact(750 / 306), image: yt }),
        )
      }
      var Et = n.p + 'mobile_header_image.431e8465.png'
      function Ot(e) {
        var t = e.style
        return y.createElement(
          x.a,
          { style: t },
          y.createElement(bt.a, { accessibilityLabel: '', aspectMode: vt.a.COVER, image: Et }),
        )
      }
      var _t = n('cHvH')
      function Pt(e) {
        var t = e.style
        return y.createElement(_t.a, null, function (e) {
          var n = e.windowHeight
          return e.windowWidth > R.a.theme.breakpoints.medium
            ? y.createElement(wt, { style: t })
            : y.createElement(Ot, { style: [t, { height: 0.5 * n }] })
        })
      }
      function It(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Tt = V.a.dcfb0332,
        Ct = V.a.db841200,
        St = V.a.hc67be9d,
        kt = (function (e) {
          s()(n, e)
          var t = It(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_handleGoToNextPage', function () {
                var t = e.props,
                  n = t.history,
                  r = t.match.params,
                  a = r.quickPromotePlatform,
                  o = r.screenName,
                  c = r.statusId,
                  i = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled')
                n.push(Object(Ne.i)(o, c, a, i ? Ne.c.Objective : Ne.c.Targeting))
              }),
              h()(l()(e), '_handleClose', function () {
                e.props.history.goBackThroughModals()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.analytics,
                    a = n.hasFundingInstrument,
                    o = n.location,
                    c = n.match.params,
                    i = c.screenName,
                    l = c.statusId,
                    u = (function (e, t, n) {
                      if (!e) return 'none'
                      var r = new URL(e, window.location.origin)
                      if (r.pathname === '/'.concat(t)) return 'me'
                      if (r.pathname === '/'.concat(t, '/status/').concat(n)) return 'tweet'
                      if (r.pathname === '/'.concat(t, '/status/').concat(n, '/analytics')) return 'analytics'
                      if ('/i/flow/convert_to_professional' === r.pathname) return 'ptt'
                      return 'other'
                    })(null === (e = o.state) || void 0 === e ? void 0 : e.previousPath, i, l),
                    s = 'other' === u ? (null === (t = o.state) || void 0 === t ? void 0 : t.previousPath) : void 0
                  Object(Ne.o)(r)(Ne.m.introPageLoad({ hasFundingInstrument: a, entryPoint: u, otherEntryPoint: s }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.match.params.quickPromotePlatform === Ne.a.Rweb
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: Ne.c.Intro }),
                    y.createElement(ot.a, {
                      actionLabel: St,
                      graphic: Pt,
                      graphicDisplayMode: 'illustrationFullWidth',
                      headline: Tt,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToNextPage,
                      onClose: this._handleClose,
                      primaryButtonTestID: W,
                      subtext: Ct,
                      withCloseButton: e,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(kt, 'contextType', fe.a)
      var jt = ht(kt),
        Lt = (n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        xt = n.n(Lt),
        At = function (e, t) {
          return e.quickPromote.objective
        },
        Rt = function (e, t) {
          return Je.a.selectHydrated(
            e,
            (function (e, t) {
              return t.match.params.statusId
            })(0, t),
          )
        },
        Dt = Object(O.a)()
          .propsFromState(function () {
            return { selectedObjective: At, tweet: Rt }
          })
          .propsFromActions(function () {
            return { setObjective: P.B }
          })
          .withAnalytics(Ne.n),
        Bt = n('h0NW'),
        Ft = V.a.d7d55f3b,
        Nt = V.a.b25fd3d6,
        Mt = V.a.bf214f47,
        qt = function (e) {
          var t = e.infoItems,
            n = e.onClose,
            r = e.onLoad
          return (
            y.useEffect(function () {
              return r()
            }, []),
            y.createElement(ot.a, {
              actionLabel: Mt,
              children: y.createElement(
                x.a,
                { style: Ht.infoItemGroup },
                y.createElement(Bt.a, { containerStyle: Ht.infoItem, items: t }),
              ),
              contentStyle: Ht.heading,
              graphicDisplayMode: 'none',
              headline: Ft,
              onAction: n,
              onClose: n,
              subtext: Nt,
              withCloseButton: !1,
            })
          )
        },
        Ht = R.a.create(function (e) {
          return {
            heading: { marginBottom: e.spaces.space40 },
            infoItemGroup: { marginBottom: e.spaces.space20 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0, marginBottom: e.spaces.space24 },
          }
        }),
        zt = n('W2FU'),
        Ut = n('E0cF'),
        Gt = n('gSL+'),
        Vt = n('xHsv'),
        Wt = n('Oib4'),
        Qt = n('Dcm7'),
        Xt = n('iEUn'),
        Kt = n('pwey'),
        Jt = n('Lsrn'),
        Zt = n('k/Ka')
      function Yt(e, t) {
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
      function $t(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Yt(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Yt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var en = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Zt.a)(
          'svg',
          $t(
            $t({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Jt.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M11.25 22h-7C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v7c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7c0-.413-.337-.75-.75-.75H4.25c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h7c.414 0 .75.336.75.75s-.336.75-.75.75z',
            }),
            y.createElement('path', {
              d: 'M22.094 20.01l-3.614-3.614 2.586-.997c.19-.074.313-.26.307-.465-.008-.204-.144-.38-.34-.44l-8.55-2.6c-.168-.05-.353-.006-.478.12-.125.124-.17.31-.12.478l2.6 8.55c.06.195.237.33.44.34h.02c.196 0 .374-.122.445-.308l.997-2.586L20 22.102c.195.194.514.194.708 0l1.386-1.386c.194-.195.194-.513 0-.707z',
            }),
          ),
        )
      }
      en.metadata = { width: 24, height: 24 }
      var tn = en
      function nn(e, t) {
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
      function rn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nn(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : nn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var an = V.a.fcc839b5,
        on = V.a.d80964aa,
        cn = V.a.d4f57cce,
        ln = V.a.g06d6bf8,
        un = V.a.c1a1817b,
        sn = V.a.efc9b3fe,
        dn = Wt.a,
        fn = V.a.h277a2e8,
        pn = V.a.gd429fea,
        mn = Qt.a,
        gn = V.a.icb22cdd,
        hn = V.a.i859a9d3,
        yn = V.a.e974b2d4,
        bn = V.a.b9c9b214,
        vn = V.a.i0e569bf,
        wn = R.a.create(function (e) {
          return {
            labelContainer: { flexGrow: 1, paddingVertical: e.spaces.space16 },
            qpContainer: { flex: 1 },
            radioGroupContainer: { paddingHorizontal: e.spaces.space32 },
            titleContainer: { paddingVertical: e.spaces.space32 },
            icon: { marginRight: e.spaces.space24, fontSize: e.spaces.space20 },
            engagementIcon: { color: e.colors.red600 },
            followersIcon: { color: e.colors.green600 },
            websiteClicksIcon: { color: e.colors.blue500 },
            goalSelectionCallout: { marginHorizontal: 'auto', marginTop: 'auto', marginBottom: e.spaces.space36 },
          }
        }),
        En = {
          label: on,
          value: zt.c.Engagements,
          decoration: y.createElement(Xt.a, { style: [wn.icon, wn.engagementIcon] }),
          testID: Z(zt.c.Engagements),
        },
        On = {
          label: cn,
          value: zt.c.Followers,
          decoration: y.createElement(Kt.a, { style: [wn.icon, wn.followersIcon] }),
          testID: Z(zt.c.Followers),
        },
        _n = {
          label: ln,
          value: zt.c.WebsiteClicks,
          decoration: y.createElement(tn, { style: [wn.icon, wn.websiteClicksIcon] }),
          testID: Z(zt.c.WebsiteClicks),
        },
        Pn = [
          { label: on, description: yn, decoration: y.createElement(Xt.a, { style: [wn.icon, wn.engagementIcon] }) },
          { label: cn, description: bn, decoration: y.createElement(Kt.a, { style: [wn.icon, wn.followersIcon] }) },
          { label: ln, description: vn, decoration: y.createElement(tn, { style: [wn.icon, wn.websiteClicksIcon] }) },
        ]
      function In() {
        return y.createElement(se.a, { Icon: dn, headline: un, text: sn, type: 'warning' })
      }
      function Tn() {
        return y.createElement(se.a, { Icon: mn, headline: fn, text: pn, type: 'danger' })
      }
      var Cn = Dt(function (e) {
          var t,
            n,
            r,
            a,
            o,
            c,
            i,
            l = e.analytics,
            u = e.history,
            s = e.location,
            d = e.selectedObjective,
            f = e.setObjective,
            p = e.tweet,
            m = p ? Ut.a.getOriginalTweet(p) : p,
            g =
              null !=
                (null == m || null === (t = m.entities) || void 0 === t || null === (n = t.media) || void 0 === n
                  ? void 0
                  : n.length) &&
              (null == m || null === (r = m.entities) || void 0 === r || null === (a = r.media) || void 0 === a
                ? void 0
                : a.length) > 0,
            h =
              1 ===
              (null == m || null === (o = m.entities) || void 0 === o || null === (c = o.urls) || void 0 === c
                ? void 0
                : c.length),
            b = !(null == m || !m.in_reply_to_status_id_str)
          y.useEffect(function () {
            Object(Ne.o)(l)(Ne.m.goalSelectionPageLoad())
          }, [])
          var v = y.useMemo(
              function () {
                return (function (e) {
                  var t = e.selectedObjective,
                    n = e.tweetContainsLinks,
                    r = e.tweetHasMedia,
                    a = e.tweetIsReply
                  return [En]
                    .concat(
                      xt()(a ? [] : [rn(rn({}, On), {}, { description: r && t === zt.c.Followers ? In() : void 0 })]),
                      [rn(rn({}, _n), {}, { disabled: !n, description: !n && Tn() })],
                    )
                    .map(function (e) {
                      return rn(
                        rn({}, e),
                        {},
                        { label: y.createElement(A.b, { size: 'headline2', weight: 'bold' }, e.label) },
                      )
                    })
                })({ tweetHasMedia: g, tweetContainsLinks: h, selectedObjective: d, tweetIsReply: b })
              },
              [g, h, d, b],
            ),
            w = y.useCallback(
              function (e, t) {
                f(t), Object(Ne.o)(l)(Ne.m.setPromoteGoal(t))
              },
              [l, f],
            )
          return y.createElement(
            x.a,
            { style: wn.qpContainer, testID: X },
            y.createElement(M, { screenType: Ne.c.Objective }),
            y.createElement(
              x.a,
              { style: wn.titleContainer },
              y.createElement(A.b, { align: 'center', size: 'headline1', weight: 'bold' }, an),
            ),
            y.createElement(
              x.a,
              null,
              y.createElement(Gt.a, { name: 'objective-picker', onChange: w, options: v, value: d }),
            ),
            y.createElement(
              x.a,
              { style: wn.goalSelectionCallout },
              y.createElement(Vt.a, {
                description: gn,
                learnMoreLabel: hn,
                learnMoreLink: {
                  external: !1,
                  method: 'replace',
                  pathname: s.pathname,
                  state: { showEducationInterstitial: !0 },
                },
              }),
            ),
            null !== (i = s.state) && void 0 !== i && i.showEducationInterstitial
              ? y.createElement(qt, {
                  infoItems: Pn,
                  onClose: function () {
                    return u.replace(s.pathname, { showEducationInterstitial: !1 })
                  },
                  onLoad: function () {
                    return Object(Ne.o)(l)(Ne.m.educationInterstitialLoad())
                  },
                })
              : null,
          )
        }),
        Sn = (n('ho0z'), n('zh9S')),
        kn = n('y0iL'),
        jn = function (e, t) {
          return t.match.params.statusId
        },
        Ln = function (e, t) {
          return Je.a.selectHydrated(e, jn(0, t))
        },
        xn = function (e, t) {
          return Je.a.selectFetchStatus(e, jn(0, t))
        },
        An = function (e, t) {
          return e.quickPromote.account.adsAccount
        },
        Rn = function (e, t) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        Dn = Object(O.a)()
          .propsFromState(function () {
            return { fetchStatus: xn, tweet: Ln, adsAccount: An, fundingInstrument: Rn }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_PAYMENT_SCREEN',
              ),
              fetchTweetIfNeeded: Je.a.fetchOneIfNeeded,
              scribeAction: Sn.c,
              savePlatformRedirectBackState: function () {
                return Object(kn.h)(e.match.params.quickPromotePlatform)
              },
              fetchAdsAccountDataIfNeeded: kn.b,
            }
          })
          .withAnalytics(Ne.n),
        Bn = n('tI3i'),
        Fn = n.n(Bn),
        Nn = n('Rp9C'),
        Mn = n('bPFD')
      function qn(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Hn = (function (e) {
        s()(n, e)
        var t = qn(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            h()(l()(e), '_setAppBarRef', function (t) {
              e._appBarRef = t
            }),
            h()(l()(e), '_handleIFrameMessage', function (t) {
              var n = e.props,
                r = n.analytics,
                a = n.tweet
              if (t && 'quick_promote' === t.name)
                if ('scribe' === t.type) {
                  var o = (a && Ut.a.getOriginalTweet(a)) || void 0,
                    c = o ? [Nn.a.getTweetItem(o)] : [],
                    i = t.scribeData || {},
                    l = 'string' == typeof i.component ? i.component : 'quick_promote',
                    u = 'string' == typeof i.uiEvent ? i.uiEvent : ''
                  r.scribe({ component: l, action: u, data: { items: c } })
                } else if ('navigation' === t.type) {
                  var s = e.props,
                    d = s.createLocalApiErrorHandler,
                    f = s.fetchAdsAccountDataIfNeeded,
                    p = s.history,
                    m = s.match.params,
                    g = m.quickPromotePlatform,
                    h = m.screenName,
                    y = m.statusId
                  Fn()(!!e.context.loggedInUserId, 'loggedInUserId must be defined'),
                    f(e.context.loggedInUserId, !0).catch(d()),
                    p.push('/'.concat(h, '/status/').concat(y, '/').concat(g, '/').concat(Ne.c.Review))
                } else 'close' === t.type && e._appBarRef && e._appBarRef.goBack()
            }),
            e
          )
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this.props,
                  t = e.adsAccount,
                  n = e.analytics,
                  r = e.fundingInstrument,
                  a = e.match,
                  o = e.savePlatformRedirectBackState,
                  c = a.params,
                  i = c.quickPromotePlatform,
                  l = c.statusId
                o()
                var u = Object(Ne.h)(i, t, l, r)
                Object(Ne.o)(n)(Ne.m.paymentPageLoad(u.url)), u.isSameHost || (window.location.href = u.url)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.adsAccount,
                  n = e.fundingInstrument,
                  r = e.match.params,
                  a = r.quickPromotePlatform,
                  o = r.statusId,
                  c = Object(Ne.h)(a, t, o, n)
                return c.isSameHost
                  ? y.createElement(
                      y.Fragment,
                      null,
                      y.createElement(M, { screenType: Ne.c.Payment }),
                      y.createElement(Mn.a, {
                        dangerouslyDisableSandbox: !0,
                        onMessage: this._handleIFrameMessage,
                        reportError: me.a,
                        src: c.url,
                        style: zn.iframe,
                      }),
                    )
                  : null
              },
            },
          ]),
          n
        )
      })(y.PureComponent)
      h()(Hn, 'contextType', fe.a)
      var zn = R.a.create(function (e) {
          return { iframe: { flexGrow: 1 } }
        }),
        Un = Dn(Hn)
      function Gn(e) {
        new Image().src = e
      }
      function Vn() {
        return y.createElement(_t.a, null, function (e) {
          e.windowHeight
          return Gn(e.windowWidth > R.a.theme.breakpoints.medium ? yt : Et), null
        })
      }
      var Wn = function (e) {
          return e.quickPromote.objective
        },
        Qn = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Xn = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Kn = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        Jn = function (e, t) {
          return e.quickPromote.budget.dailyBudget
        },
        Zn = function (e, t) {
          return e.quickPromote.budget.durationDays
        },
        Yn = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        $n = function (e) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        er = function (e) {
          return e.quickPromote.account.vatInfo
        },
        tr = function (e) {
          return e.quickPromote.account.adsAccount
        },
        nr = function (e) {
          return e.quickPromote.promoteStatus
        },
        rr = function (e) {
          return e.quickPromote.promoteErrorCode
        },
        ar = Object(O.a)()
          .propsFromState(function () {
            return {
              objective: Wn,
              targetedLocations: Qn,
              ageBucket: Xn,
              gender: Kn,
              dailyBudget: Jn,
              durationDays: Zn,
              lang: E.n,
              country: P.m,
              currency: Yn,
              fundingInstrument: $n,
              vatInfo: er,
              adsAccount: tr,
              promoteStatus: nr,
              promoteErrorCode: rr,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_REVIEW_SCREEN',
              ),
              clearPersistedRedirectBackState: function () {
                return Object(kn.h)()
              },
              createPromotion:
                ((t = e),
                (n = t.history),
                (r = t.match),
                function (e) {
                  var t = r.params,
                    a = t.quickPromotePlatform,
                    o = t.screenName,
                    c = t.statusId
                  return Object(P.a)(n, o, c, a, e)
                }),
            }
            var t, n, r
          })
          .withAnalytics(Ne.n),
        or = n('csss'),
        cr = n('/yvb'),
        ir = n('shC7')
      function lr(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ur = V.a.c3c57e3e,
        sr = V.a.h06724b4,
        dr = V.a.a96f811e,
        fr = V.a.b069d89c,
        pr = V.a.a3a09d48,
        mr = V.a.e36bce63,
        gr = V.a.i41612d9,
        hr = V.a.cdae1af0,
        yr = V.a.ed8bb5af,
        br = V.a.be2dc078,
        vr = V.a.da2805d1,
        wr = V.a.ef4602eb,
        Er = V.a.a4db098b,
        Or = V.a.ef7e3916,
        _r = (function (e) {
          s()(n, e)
          var t = lr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_getPaymentDescription', function (t) {
                var n = e.props.adsAccount
                return n && n.timezone && n.country_code ? (t ? hr : yr) : br
              }),
              h()(l()(e), '_handlePromote', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createPromotion
                Object(Ne.o)(n)(Ne.m.promotionClick()), r(n)
              }),
              h()(l()(e), '_getErrorMessage', function () {
                var t = e.props,
                  n = t.promoteErrorCode,
                  r = t.promoteStatus
                if (!n) return r === Ze.a.LOADED ? vr : null
                switch (n) {
                  case 'MissingFundingInstrument':
                  case 'InvalidPaymentMethod':
                    return Or
                  case 'CampaignCreationFailed':
                  case 'PromotionIneligible':
                    return Er
                  default:
                    return wr
                }
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.clearPersistedRedirectBackState,
                    r = e.fundingInstrument
                  n()
                  var a = !!r
                  Object(Ne.o)(t)(Ne.m.reviewPageLoad({ hasFundingInstrument: a }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    r,
                    a = this.props,
                    o = a.ageBucket,
                    c = a.country,
                    i = a.currency,
                    l = a.dailyBudget,
                    u = a.durationDays,
                    s = a.fundingInstrument,
                    d = a.gender,
                    f = a.lang,
                    p = a.match,
                    m = a.objective,
                    g = a.promoteStatus,
                    h = a.targetedLocations,
                    v = a.vatInfo,
                    w =
                      ((e = zt.e[o]),
                      (t = e.maxAge),
                      (n = e.minAge),
                      t ? ye({ minAge: n, maxAge: t }) : be({ minAge: n })),
                    E = (function (e) {
                      switch (e) {
                        case 'Engagements':
                          return je
                        case 'Followers':
                          return Le
                        case 'WebsiteClicks':
                          return xe
                        default:
                          throw b()
                      }
                    })(m),
                    O = (function (e) {
                      var t = e.formattedAge,
                        n = e.gender,
                        r = e.locations,
                        a = r.length
                      return Ee({
                        newlinePlaceholder: '\n',
                        locations: Object(pe.a)(r),
                        locationsHeading: Be({ numLocations: a }),
                        formattedAge: t,
                        gender: n,
                      })
                    })({
                      locations: h.map(function (e) {
                        return e.localized_name
                      }),
                      formattedAge: w,
                      gender: Ae(d),
                    }),
                    _ = De({ totalBudgetNum: l * u, durationDays: u, lang: f, currency: i }),
                    I = p.params,
                    T = I.quickPromotePlatform,
                    C = I.screenName,
                    S = I.statusId,
                    k = this._getErrorMessage(),
                    j = this.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                    L = v && null === v.tax_id && null === v.tax_exemption_id && 'NOT_SET' === v.tax_category,
                    R = !!s
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: Ne.c.Review }),
                    y.createElement(
                      x.a,
                      { style: Ir.qpContainer, testID: ee },
                      k &&
                        y.createElement(x.a, { style: Ir.gutter }, y.createElement(se.a, { text: k, type: 'danger' })),
                      y.createElement(z, { subtitle: sr, title: ur }),
                      j && y.createElement(D, { description: E, descriptionTestID: ne, label: dr }),
                      y.createElement(D, { description: O, descriptionTestID: re, label: fr }),
                      y.createElement(D, {
                        description: _,
                        descriptionDir: ir.a.getConstants().isRTL ? 'rtl' : 'ltr',
                        descriptionTestID: ae,
                        label: pr,
                      }),
                      y.createElement(or.a, {
                        description:
                          s && !L
                            ? s.description
                            : y.createElement(
                                A.b,
                                { color: 'primary', size: 'subtext2' },
                                this._getPaymentDescription(R),
                              ),
                        label: y.createElement(A.b, { weight: 'bold' }, mr),
                        link: !s || L ? Object(Ne.i)(C, S, T, Ne.c.Payment) : void 0,
                        testID: oe,
                      }),
                    ),
                    y.createElement(
                      x.a,
                      { style: Ir.bottomElements },
                      y.createElement(
                        cr.a,
                        {
                          disabled: !s || L || P.L.includes(g),
                          onPress: this._handlePromote,
                          size: 'xLarge',
                          testID: te,
                          type: 'brandFilled',
                        },
                        gr,
                      ),
                      y.createElement(
                        H.a,
                        { style: Ir.terms },
                        ((r = c),
                        y.createElement(
                          V.a.I18NFormatMessage,
                          { $i18n: 'c99d7100' },
                          y.createElement(A.b, { link: Object(Ne.j)(r) }, V.a.d56b5ac3),
                        )),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(_r, 'contextType', fe.a)
      var Pr,
        Ir = R.a.create(function (e) {
          return {
            qpContainer: { flex: 1, overflow: 'auto' },
            bottomElements: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space32 },
            terms: {
              marginTop: e.spaces.space12,
              textAlign: 'center',
              color: e.colors.gray700,
              fontSize: e.fontSizes.subtext3,
            },
            gutter: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        Tr = ar(_r),
        Cr = n('Ty5D'),
        Sr =
          (n('yH/f'),
          n('7xRU'),
          function (e, t) {
            var n = jr(e, t)
            return e.ads.typeahead.targetingLocation[n]
          }),
        kr = function (e, t) {
          var n,
            r = jr(e, t)
          return null === (n = e.ads.typeahead.targetingLocation[r]) || void 0 === n ? void 0 : n.fetchStatus
        },
        jr = function (e, t) {
          return e.quickPromote.targeting.locationQuery
        },
        Lr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        xr = Object(O.a)()
          .propsFromState(function () {
            return {
              targetingLocationQuery: jr,
              targetingLocations: Sr,
              targetedLocations: Lr,
              fetchStatus: kr,
              userCountry: E.v,
            }
          })
          .propsFromActions(function () {
            return {
              setTargetedLocations: P.H,
              setAndFetchTargetingLocationQuery: P.p,
              setTargetingLocationQuery: P.J,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_TARGETING_LOCATION_SCREEN',
              ),
            }
          })
          .withAnalytics(Ne.n),
        Ar = n('VwDm'),
        Rr = n('G1WX'),
        Dr = n('cCdp'),
        Br = n('xKuM'),
        Fr = n('5Vk4'),
        Nr = n('6OUF'),
        Mr = n('zrOZ'),
        qr = n('kevv')
      function Hr(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var zr = V.a.cc642518,
        Ur = V.a.i0e8c3c6,
        Gr = V.a.deaf5b15,
        Vr = V.a.f69ad048,
        Wr = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
        Qr = Object.freeze(
          ((Pr = {}), h()(Pr, Ne.e.CurrentCountryMatch, 0), h()(Pr, Ne.e.Match, 1), h()(Pr, Ne.e.NoMatch, 2), Pr),
        ),
        Xr = (function (e) {
          s()(n, e)
          var t = Hr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', { errorMessage: null }),
              h()(l()(e), '_renderSearch', function () {
                var t = e.props,
                  n = t.fetchStatus,
                  r = t.targetingLocationQuery
                return y.createElement(
                  Kr,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: r,
                  },
                  y.createElement(x.a, null, y.createElement(A.b, { style: Jr.headingText, weight: 'heavy' }, Ur)),
                  y.createElement(Rr.a, { fetchStatus: n, render: e._renderSearchList, retryMessage: Gr }),
                )
              }),
              h()(l()(e), '_handleClear', function () {
                ;(0, e.props.setTargetingLocationQuery)('')
              }),
              h()(l()(e), '_renderSearchList', function () {
                var t = e.props.targetedLocations,
                  n = Object(Mr.a)(
                    t.map(function (e) {
                      return e.targeting_value
                    }),
                  ),
                  r = e._getTargetingLocationOptions()
                return y.createElement(
                  x.a,
                  { style: Jr.overflow },
                  r.map(function (t) {
                    var r = t.localized_name,
                      a = t.location_type,
                      o = t.targeting_value
                    return y.createElement(Dr.a, {
                      checked: n.has(o),
                      helpText: Re(a),
                      key: o,
                      label: r,
                      name: o,
                      onChange: e._handleSearchSelect,
                      testID: ue,
                    })
                  }),
                )
              }),
              h()(l()(e), '_getTargetingLocationOptions', function () {
                var t,
                  n,
                  r,
                  a = e.props,
                  o = a.targetingLocationQuery,
                  c = a.targetingLocations,
                  i = a.userCountry,
                  l =
                    null !==
                      (t =
                        null == c || null === (n = c.result) || void 0 === n || null === (r = n[0]) || void 0 === r
                          ? void 0
                          : r.locations) && void 0 !== t
                      ? t
                      : [],
                  u = Object(Ne.g)(i || 'US'),
                  s = l.filter(function (e) {
                    var t = e.country_code,
                      n = e.localized_name
                    return u(n, t, o) !== Ne.e.NoMatch
                  })
                return Object(qr.a)(
                  s,
                  [
                    function (e) {
                      var t = e.country_code,
                        n = e.localized_name,
                        r = u(n, t, o)
                      return Qr[r]
                    },
                    function (e) {
                      e.localized_name
                      var t,
                        n = e.location_type
                      return null !== (t = Wr[n]) && void 0 !== t
                        ? t
                        : (function (e) {
                            Object(me.a)(
                              'Quick Promote: Unknown location type: '
                                .concat(e, '. Expected one of {')
                                .concat(Object.keys(Wr).join(', '), '}'),
                            )
                          })(n) || Object.keys(Wr).length
                    },
                    function (e) {
                      return e.localized_name
                    },
                  ],
                  'asc',
                )
              }),
              h()(l()(e), '_handleSearchSelect', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  o = r.setTargetedLocations,
                  c = r.setTargetingLocationQuery
                if (n) {
                  e.setState({ errorMessage: null })
                  var i = e._getTargetingLocationOptions().find(function (e) {
                    return e.targeting_value === t
                  })
                  i
                    ? (Object(Ne.o)(a)(
                        Ne.m.setTargetingLocation({
                          id: i.targeting_value,
                          locationType: i.location_type,
                          countryCode: i.country_code,
                        }),
                      ),
                      o([i]),
                      e._handleGoBack())
                    : Object(me.a)('Quick Promote: could not find "'.concat(t, '" in list of targeting options'))
                } else Object(Ne.o)(a)(Ne.m.targetingLocationError()), e.setState({ errorMessage: Vr })
                c('')
              }),
              h()(l()(e), '_renderSelected', function () {
                var t = e.props,
                  n = t.targetedLocations,
                  r = t.targetingLocationQuery,
                  a = e.state.errorMessage
                return y.createElement(
                  Kr,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: r,
                  },
                  y.createElement(
                    x.a,
                    null,
                    a && y.createElement(x.a, { style: Jr.gutter }, y.createElement(se.a, { text: a, type: 'danger' })),
                    y.createElement(A.b, { style: Jr.headingText, weight: 'heavy' }, Be({ numLocations: n.length })),
                  ),
                  y.createElement(
                    x.a,
                    null,
                    n.map(function (t) {
                      var n = t.localized_name,
                        r = t.location_type,
                        a = t.targeting_value
                      return y.createElement(Dr.a, {
                        checked: !0,
                        helpText: Re(r),
                        key: a,
                        label: n,
                        name: a,
                        onChange: e._handleSearchSelect,
                        testID: ue,
                      })
                    }),
                  ),
                )
              }),
              h()(l()(e), '_handleGoBack', function () {
                var t = e.props,
                  n = t.history,
                  r = t.location,
                  a = t.match.params,
                  o = a.quickPromotePlatform,
                  c = a.quickPromoteScreenName,
                  i = a.screenName,
                  l = a.statusId,
                  u = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled')
                Object(Ne.l)(n, r)(i, l, o, c, u)
              }),
              h()(l()(e), '_handleTargetingLocationChange', function (t) {
                var n = t.target.value,
                  r = e.props,
                  a = r.analytics,
                  o = r.createLocalApiErrorHandler,
                  c = r.setAndFetchTargetingLocationQuery
                Object(Ne.o)(a)(Ne.m.targetingLocationSearch(n)), c(n).catch(o())
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.analytics
                  Object(Ne.o)(e)(Ne.m.targetingLocationPageLoad())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._handleClear()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.targetingLocationQuery
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: Ne.c.TargetingLocation }),
                    e ? this._renderSearch() : this._renderSelected(),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Xr, 'contextType', fe.a)
      var Kr = function (e) {
          var t = e.children,
            n = e.onBack,
            r = e.onChange,
            a = e.onClear,
            o = e.targetingLocationQuery
          return y.createElement(
            x.a,
            { style: Jr.qpContainer, testID: Y },
            y.createElement(Br.a, {
              leftControl: y.createElement(Fr.a, { onClick: n }),
              middleControl: y.createElement(Nr.a, {
                Icon: Ar.a,
                autoFocus: !0,
                name: 'locationTargetingInput',
                onChange: r,
                onClear: a,
                placeholder: zr,
                style: Jr.input,
                testID: le,
                value: o,
                withClearButton: !0,
              }),
            }),
            t,
          )
        },
        Jr = R.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            input: { marginVertical: e.spaces.space12 },
            headingText: {
              fontSize: e.fontSizes.headline1,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              borderBottomWidth: 1,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              borderTopWidth: 1,
              borderTopStyle: 'solid',
              borderTopColor: e.colors.borderColor,
            },
            gutter: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            overflow: { flex: '1 1 200px', overflowY: 'auto' },
          }
        }),
        Zr = xr(Xr),
        Yr = n('ddV6'),
        $r = n.n(Yr),
        ea = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        ta = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        na = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        ra = Object(O.a)()
          .propsFromState(function () {
            return { targetedLocations: ea, selectedGender: ta, selectedAgeBucket: na }
          })
          .propsFromActions(function () {
            return { setTargetedAgeBucket: P.F, setTargetedGender: P.G }
          })
          .withAnalytics(Ne.n),
        aa = n('JiIh'),
        oa = n('fyvP'),
        ca = n('J4ZH'),
        ia = n('tn7R'),
        la = n('mN6z')
      function ua(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var sa = V.a.hba1d105,
        da = V.a.cba0133d,
        fa = V.a.e1efbead,
        pa = V.a.c6ff7c1f,
        ma = V.a.b555fb45,
        ga = V.a.a8d0108d,
        ha = [zt.b.Any, zt.b.Female, zt.b.Male].map(function (e) {
          return { label: Ae(e), value: e, testID: J(e) }
        }),
        ya = V.a.j2c03e12,
        ba = ['13', '18', '21', '25', '35', '50'],
        va = [void 0, void 0, void 0, '24', '34', '49', '54'],
        wa = Object(ca.a)(Object(ia.a)(zt.e), function (e) {
          return e.maxAge || 'over'
        }),
        Ea = va.length
      function Oa(e, t) {
        var n
        if (e && t) return null === (n = zt.d[e]) || void 0 === n ? void 0 : n[t]
      }
      var _a = (function (e) {
        s()(n, e)
        var t = ua(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            h()(l()(e), '_handleGenderChange', function (t, n) {
              var r = e.props,
                a = r.analytics
              ;(0, r.setTargetedGender)(n), Object(Ne.o)(a)(Ne.m.setTargetingGender(n))
            }),
            h()(l()(e), '_handleAgeBucketChange', function (t, n) {
              var r = $r()(t, 2),
                a = r[0],
                o = r[1],
                c = e.props,
                i = c.analytics,
                l = c.selectedAgeBucket,
                u = c.setTargetedAgeBucket,
                s = e._sliderValueFromSelectedAgeBucket(l)
              if (!Object(la.a)(s, [a, o]))
                if (n) {
                  var d = ba[a]
                  if (!d) return
                  var f = Oa(d, o === Ea ? 'over' : va[o])
                  if (f) Object(Ne.o)(i)(Ne.m.setTargetingAgeBucket(f)), u(f)
                  else {
                    var p = Object.keys(zt.d[d])[0]
                    e._setAgeBucket({ minAge: d, maxAge: p })
                  }
                } else {
                  var m = o === Ea ? 'over' : va[o]
                  if (!m) return
                  var g = Oa(ba[a], m)
                  if (g) Object(Ne.o)(i)(Ne.m.setTargetingAgeBucket(g)), u(g)
                  else {
                    var h = wa[m].slice(-1)[0].minAge
                    e._setAgeBucket({ minAge: h, maxAge: m })
                  }
                }
            }),
            h()(l()(e), '_setAgeBucket', function (t) {
              var n = t.maxAge,
                r = t.minAge,
                a = e.props,
                o = a.analytics,
                c = a.setTargetedAgeBucket,
                i = zt.d[r][n || 'over']
              if (!i)
                throw new Error(
                  'Age bucket not found for minAge: "'.concat(r, '", maxAge: "').concat(n || '<empty>', '"'),
                )
              Object(Ne.o)(o)(Ne.m.setTargetingAgeBucket(i)), c(i)
            }),
            e
          )
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this.props.analytics
                Object(Ne.o)(e)(Ne.m.targetingPageLoad())
              },
            },
            {
              key: '_sliderValueFromSelectedAgeBucket',
              value: function (e) {
                var t = zt.e[e],
                  n = t.maxAge,
                  r = t.minAge
                return [ba.indexOf(r), n ? va.indexOf(n) : Ea]
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.match,
                  n = e.selectedAgeBucket,
                  r = e.selectedGender,
                  a = e.targetedLocations,
                  o = t.params,
                  c = o.quickPromotePlatform,
                  i = o.screenName,
                  l = o.statusId,
                  u = Be({ numLocations: a.length }),
                  s = zt.e[n],
                  d = s.maxAge,
                  f = s.minAge,
                  p = this._sliderValueFromSelectedAgeBucket(n),
                  m = d || ya
                return y.createElement(
                  x.a,
                  { style: Pa.qpContainer, testID: K },
                  y.createElement(M, { screenType: Ne.c.Targeting }),
                  y.createElement(z, { subtitle: da, title: sa }),
                  y.createElement(or.a, {
                    description: Object(pe.a)(
                      a.map(function (e) {
                        return e.localized_name
                      }),
                    ),
                    label: y.createElement(A.b, { weight: 'bold' }, u),
                    link: Object(Ne.i)(i, l, c, Ne.c.TargetingLocation),
                    testID: ce,
                  }),
                  y.createElement(
                    D,
                    { label: fa },
                    y.createElement(
                      x.a,
                      { style: Pa.ageRangeSlider },
                      y.createElement(aa.a, {
                        endThumbAccessibilityLabel: ma,
                        endThumbAccessibilityLabelValueText: '"'.concat(m, '"'),
                        endThumbLabel: m,
                        max: Ea,
                        min: 0,
                        onChange: this._handleAgeBucketChange,
                        startThumbAccessibilityLabel: pa,
                        startThumbAccessibilityLabelValueText: '"'.concat(f, '"'),
                        startThumbLabel: f,
                        value: p,
                      }),
                    ),
                  ),
                  y.createElement(
                    D,
                    { label: ga, withBottomBorder: !1 },
                    y.createElement(
                      x.a,
                      { style: Pa.genderSelection },
                      y.createElement(oa.a, {
                        name: 'gender',
                        onChange: this._handleGenderChange,
                        options: ha,
                        value: r,
                      }),
                    ),
                  ),
                )
              },
            },
          ]),
          n
        )
      })(y.PureComponent)
      h()(_a, 'contextType', fe.a)
      var Pa = R.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            genderSelection: { marginTop: e.spaces.space4 },
            ageRangeSlider: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        Ia = ra(_a),
        Ta = n('q9Zt'),
        Ca = n('JYMr')
      function Sa(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ka = V.a.a065172e,
        ja = V.a.cfcdb4a1,
        La = V.a.dcfb0332,
        xa = V.a.c1df579e,
        Aa = (function (e) {
          s()(n, e)
          var t = Sa(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_getRetweetOrTweet', function () {
                var t = e.props.tweet
                return t ? Ut.a.getOriginalTweet(t) : t
              }),
              h()(l()(e), '_render', function () {
                var t = e.props.history,
                  n = e._getRetweetOrTweet()
                return !n || (n && n.user.id_str !== e.context.loggedInUserId)
                  ? y.createElement(
                      mt.b,
                      { history: t, onBackClick: e._handleGoBack, title: La },
                      y.createElement(Ta.a, { onRetry: null, title: ka }),
                    )
                  : e._renderPage()
              }),
              h()(l()(e), '_renderHeader', function () {
                return null
              }),
              h()(l()(e), '_renderPage', function () {
                var t = e.props,
                  n = t.history,
                  r = t.match,
                  a = t.promoteErrorCode,
                  o = t.promoteFetchStatus,
                  c = r.params,
                  i = c.quickPromotePlatform,
                  l = c.quickPromoteScreenName,
                  u = c.screenName,
                  s = c.statusId,
                  d = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                  f = d ? Ne.d : Ne.b,
                  p = function (e) {
                    return Object(Ne.i)(u, s, i, e)
                  }
                switch (l) {
                  case 'intro':
                    return e._renderSplashPage()
                  case 'objective':
                    if (d) {
                      var m = p(Ne.c.Targeting)
                      return e._renderProgressPage(Ne.d.Objective, m)
                    }
                    n.replace(Object(Ne.i)(u, s, i, Ne.c.Targeting))
                    break
                  case 'targeting':
                    var g = p(Ne.c.BudgetSelect)
                    return e._renderProgressPage(f.Targeting, g)
                  case 'budget_select':
                    var h = p(Ne.c.Review)
                    return e._renderProgressPage(f.BudgetSelect, h)
                  case 'review':
                    var y = [Ze.a.LOADING, Ze.a.LOADED].includes(o) && !a
                    return e._renderProgressPage(y ? f.Finish : f.Review)
                  case 'payment':
                    return e._renderProgressPage(f.Review)
                  case 'targeting_location':
                    return e._renderPopupPage()
                  case 'done':
                    return e._renderSplashPage()
                  default:
                    throw b()
                }
              }),
              h()(l()(e), '_renderProgressPage', function (t, n) {
                var r = e.props.history
                return y.createElement(
                  mt.b,
                  { documentTitle: La, history: r, renderHeader: e._renderHeader },
                  y.createElement(Br.a, {
                    leftControl: y.createElement(Fr.a, { autofocus: !0, onClick: e._handleGoBack, testID: ie }),
                    rightControl: n && y.createElement(cr.a, { link: n, testID: Q, type: 'brandText' }, xa),
                  }),
                  y.createElement(Ca.a, { progress: t, style: Ra.progressBar }),
                  y.createElement(x.a, { style: Ra.noScrollView }, e._renderRoutes()),
                )
              }),
              h()(l()(e), '_renderPopupPage', function () {
                var t = e.props.history
                return y.createElement(
                  mt.b,
                  { documentTitle: La, history: t, renderHeader: e._renderHeader },
                  e._renderRoutes(),
                )
              }),
              h()(l()(e), '_renderSplashPage', function () {
                return e._renderRoutes()
              }),
              h()(l()(e), '_renderRoutes', function () {
                var t = e.props.match.params.quickPromoteScreenName
                switch (t) {
                  case 'intro':
                    return y.createElement(Cr.c, { component: jt })
                  case 'objective':
                    return y.createElement(Cr.c, { component: Cn })
                  case 'targeting':
                    return y.createElement(Cr.c, { component: Ia })
                  case 'targeting_location':
                    return y.createElement(Cr.c, { component: Zr })
                  case 'budget_select':
                    return y.createElement(Cr.c, { component: Ke })
                  case 'review':
                    return y.createElement(Cr.c, { component: Tr })
                  case 'payment':
                    return y.createElement(Cr.c, { component: Un })
                  case 'done':
                    return y.createElement(Cr.c, { component: dt })
                  default:
                    throw b()
                }
              }),
              h()(l()(e), '_handleGoBack', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.history,
                  a = t.location,
                  o = t.match.params,
                  c = o.quickPromotePlatform,
                  i = o.quickPromoteScreenName,
                  l = o.screenName,
                  u = o.statusId,
                  s = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled')
                Object(Ne.o)(n)(Ne.m.back(i)), Object(Ne.l)(r, a)(l, u, c, i, s)
              }),
              h()(l()(e), '_handleRequestRetry', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.match.params.quickPromoteScreenName
                Object(Ne.o)(n)(Ne.m.reload(r)), window.location.reload()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.analytics,
                    r = t.createLocalApiErrorHandler,
                    a = t.fetchAdsAccountDataIfNeeded,
                    o = t.fetchAvailableBudgetsIfNeeded,
                    c = t.fetchCurrentTargetingLocationIfNeeded,
                    i = t.fetchProfessionalEligibilityIfNeeded,
                    l = t.fetchTweetIfNeeded,
                    u = t.match,
                    s = t.promoteFetchStatus,
                    d = t.setPromoteFetchStatus,
                    f = t.statusId,
                    p = u.params.quickPromoteScreenName,
                    m = this.context.loggedInUserId
                  return m
                    ? (Ze.a.LOADED === s && p !== Ne.c.Done && d(Ze.a.NONE),
                      Object(N.b)(
                        'initial-load',
                        Promise.all([l(f), c(), a(m), i()])
                          .then(function () {
                            return o()
                          })
                          .then(function () {
                            return (0, e.props.handleFirstLoad)()
                          }),
                      ).catch(function (e) {
                        r(pt.a)(e), Object(Ne.o)(n)(Ne.m.pageLoadFail(e.message))
                      }))
                    : Promise.resolve()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history
                  return this.context.loggedInUserId
                    ? t !== Ze.a.LOADED
                      ? y.createElement(
                          mt.b,
                          { documentTitle: La, history: n, renderHeader: this._renderHeader },
                          y.createElement(Vn, null),
                          y.createElement(ft.a, {
                            fetchStatus: t,
                            onRequestRetry: this._handleRequestRetry,
                            render: this._render,
                            retryMessage: ja,
                          }),
                        )
                      : y.createElement(ft.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleRequestRetry,
                          render: this._render,
                          retryMessage: ja,
                        })
                    : this._render()
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Aa, 'contextType', fe.a)
      var Ra = R.a.create(function (e) {
          return { progressBar: { backgroundColor: e.colors.gray50 }, noScrollView: { overflowX: 'hidden', flex: 1 } }
        }),
        Da = rt(Aa)
      t.default = Da
    },
    kevv: function (e, t, n) {
      'use strict'
      var r = n('T0aG'),
        a = n.n(r),
        o = (n('i4UL'), n('z84I'), n('tQbP'), n('2G9S'), n('BcsE')),
        c = n('aTAq'),
        i = function (e, t) {
          if (Object(o.a)(e) && Object(o.a)(t)) {
            if (e > t) return 1
            if (e < t) return -1
          } else if (Object(c.a)(e) && Object(c.a)(t)) {
            if (e > t) return 1
            if (e < t) return -1
          }
          return 0
        }
      t.a = function (e, t, n) {
        var r = Object(c.a)(n) ? Array(t.length).fill(n) : n,
          l = t.map(function (e) {
            return Object(c.a)(e)
              ? function (t) {
                  var n = 'object' === a()(t) ? (null == t ? void 0 : t[e]) : void 0
                  return Object(c.a)(n) || Object(o.a)(n) ? n : void 0
                }
              : e
          })
        return e.concat().sort(
          (function (e, t) {
            return function (n, r) {
              for (var a = 0; a < e.length; a++) {
                var o = e[a],
                  c = t[a] || 'asc',
                  l = i(o(n), o(r))
                if (0 !== l) return 'desc' === c ? -1 * l : l
              }
              return 0
            }
          })(l, r),
        )
      }
    },
    z4TA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationScreen', function () {
          return rt
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        g = n('KEM+'),
        h = n.n(g),
        y =
          (n('hBpG'),
          n('jQ3i'),
          n('x4t0'),
          n('7x/C'),
          n('lTEL'),
          n('kYxP'),
          n('5BYb'),
          n('MvUL'),
          n('KqXw'),
          n('2G9S'),
          n('ho0z'),
          n('aeN7')),
        b = n('ERkP'),
        v = n('s4rk'),
        w = n('zI2C'),
        E = n('6ZtA'),
        O = n('es0u'),
        _ = (n('WNMA'), n('6/RC')),
        P = n('x5Pi'),
        I = n('8Lfv'),
        T = n('QK5w'),
        C = n('eSoz'),
        S = n('RqPI'),
        k = n('If64'),
        j = n('pNZL'),
        L = n('XOJV'),
        x = n('G6rE'),
        A = n('xZGM'),
        R = n('rxPX'),
        D = n('0KEI'),
        B = n('Mx3A'),
        F = function (e, t) {
          return e.location && e.location.state && e.location.state[t]
        },
        N = function (e, t) {
          return 'PUSH' === t.history.action
        },
        M = function (e, t) {
          var n = F(t, 'focal')
          return n || q(e, t)
        },
        q = function (e, t) {
          var n = t.location,
            r = t.match
          return r.params && r.params.statusId
            ? r.params.statusId
            : n.query && n.query.tweet_id && 'string' == typeof n.query.tweet_id
            ? n.query.tweet_id
            : ''
        },
        H = function (e, t) {
          return t.match.params.screenName
        },
        z = function (e, t) {
          return F(t, 'socialContext')
        },
        U = function (e, t) {
          return F(t, 'topicFollowPrompt')
        },
        G = function (e, t) {
          return F(t, 'contextTweetId')
        },
        V = function (e, t) {
          return F(t, 'promotedContent')
        },
        W = function (e, t) {
          return F(t, 'overflow')
        },
        Q = function (e, t) {
          return F(t, 'contextualClientEventInfo')
        },
        X = function (e, t) {
          var n = F(t, 'referrer'),
            r = M(e, t)
          return !!n && n.includes('/i/topics/tweet/'.concat(r))
        },
        K = function (e, t) {
          if (!_.canUseDOM) return !1
          var n = t.location.query,
            r = Object(T.a)(e, t)
          return (
            Object(B.b)({
              query: n,
              httpReferer: r ? '' : document.referrer || '',
              requestUrl: window.location.href,
              emptyIfServerRendered: !1,
            }).referral_type === B.a.Web
          )
        },
        J = function (e, t) {
          return L.a.selectHydrated(e, M(e, t))
        },
        Z = function (e, t) {
          var n = M(e, t),
            r = L.a.selectHydrated(e, n)
          return r && r.conversation_id_str ? L.a.selectHydrated(e, r.conversation_id_str) : null
        },
        Y = function (e, t) {
          return L.a.selectFetchStatus(e, M(e, t))
        },
        $ = function (e, t) {
          return t.location.query && 'string' == typeof t.location.query.cxt ? t.location.query.cxt : void 0
        }
      function ee(e, t) {
        var n = J(e, t),
          r = n ? Object(C.f)(e, n) : void 0
        return n && r ? Object(P.c)(n, r) : void 0
      }
      var te = function (e, t) {
          return Object(A.y)(e, A.k)
        },
        ne = Object(R.a)()
          .propsFromState(function () {
            return {
              communitySocialContextOfFocalTweet: ee,
              contextTweetId: G,
              contextualClientEventInfo: Q,
              focalTweet: J,
              initialFetchStatus: Y,
              isForwardNavigation: N,
              isReferralSource: K,
              isReferredFromExploreTopics: X,
              userLanguage: S.n,
              loggedInUser: x.e.selectLoggedInUser,
              overflowCount: W,
              promotedContent: V,
              richLandingContextId: $,
              rootTweet: Z,
              screenName: H,
              selectedTweetId: q,
              shouldShowDownvoteEducation: te,
              socialContext: z,
              startLocation: k.a,
              statusId: M,
              topicFollowPrompt: U,
              tweetDetailNav: j.a,
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: A.v,
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)('CONVERSATION_SCREEN'),
              clearTimelineCache: function (e, t) {
                return Object(I.a)(e, t)
              },
            }
          })
          .withAnalytics({ page: 'tweet' }),
        re = n('ymux'),
        ae = n('rkhm'),
        oe = n('SrtL'),
        ce = (n('JtPf'), n('87if'), n('zb92')),
        ie = Object(ce.a)({
          loader: function () {
            return n.e(196).then(n.bind(null, 'YOtM'))
          },
        }),
        le = n('8UdT'),
        ue = n('kGix'),
        se = n('muX9'),
        de = n('3XMw'),
        fe = n.n(de),
        pe = Object(ce.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(7), n.e(182)]).then(n.bind(null, 'uo3S'))
          },
          renderPlaceholder: function (e, t) {
            return null
          },
        }),
        me = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('/yvb')),
        ge = n('sebV'),
        he = n('BXlL'),
        ye = n('Irs7'),
        be = n('aITJ')
      function ve(e, t) {
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
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ve(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ve(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ee = fe.a.af9c8a3d,
        Oe = function (e) {
          var t = e.featureSwitches,
            n = e.scribeNamespace,
            r = e.startLocation,
            a = e.userId,
            o = Object(ye.b)(),
            c = !!a && be.b.isMobileOS() && !ge.a.isStandaloneApp(),
            i = b.useCallback(
              function (e) {
                e.preventDefault(),
                  o.scribe(we(we({}, n), {}, { element: 'open_app_button', action: 'click' })),
                  Object(he.b)({ startLocation: r, featureSwitches: t, userId: a })
              },
              [o, t, n, r, a],
            )
          return c && t.isTrue('responsive_web_open_app_appbar_button_enabled')
            ? b.createElement(me.a, {
                accessibilityLabel: Ee,
                children: Ee,
                onPress: i,
                size: 'small',
                type: 'primaryOutlined',
              })
            : null
        },
        _e = n('rJoH'),
        Pe = n('yoO3'),
        Ie = n('caTy'),
        Te = n('PeW/'),
        Ce = n('AUxQ'),
        Se = n('Rp9C'),
        ke = n('7JQg'),
        je = n('VS6U'),
        Le = n('tocL'),
        xe = n('HBr9'),
        Ae = n('2fY8'),
        Re = n('MWbm'),
        De = n('G8HL'),
        Be = n('pxuL'),
        Fe = n('t62R'),
        Ne = n('rHpw'),
        Me = n('oQhu'),
        qe = n('mN6z')
      function He(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ze = fe.a.ea831526,
        Ue = fe.a.a90e1e67({ noun: '' }),
        Ge = fe.a.c299a6cf,
        Ve = fe.a.c2ed3314,
        We = fe.a.ad666301,
        Qe = fe.a.f0c37ddb,
        Xe = { page: 'tweet' },
        Ke = { page: 'tweet', section: 'landing' },
        Je = Object(Me.a)(function (e, t) {
          return { items: [Se.a.forTweet(e, t)], tweet_id: e }
        }),
        Ze = Object(Me.a)(function (e) {
          return Object(ae.a)(e)
        }),
        Ye = Object(Me.a)(function (e, t, n, r, a) {
          var o, c
          return {
            referrer: e,
            controller_data:
              e &&
              (null == t ||
              null === (o = t.details) ||
              void 0 === o ||
              null === (c = o.timelinesDetails) ||
              void 0 === c
                ? void 0
                : c.controllerData),
            overflowCount: n,
            with_rux_injections: r,
            rux_context: a,
          }
        }),
        $e = Object(Me.a)(function (e, t, n) {
          return Object(re.a)({ focalTweetId: e, fetchOptions: t, featureSwitches: n })
        }),
        et = [Le.a.Community]
      function tt(e) {
        var t = e.context
        if (!t) return null
        switch (t.contextType) {
          case Le.a.Community:
            var n = t.landingUrl ? Object(Ie.b)(t.landingUrl) : void 0
            return b.createElement(Fe.b, { link: n }, t.text)
          default:
            return null
        }
      }
      function nt(e) {
        if (!e) return null
        switch (e.contextType) {
          case Le.a.Community:
            return Ve
          default:
            return null
        }
      }
      var rt = (function (e) {
        s()(n, e)
        var t = He(n)
        function n(e, r) {
          var o
          return (
            a()(this, n),
            (o = t.call(this, e, r)),
            h()(l()(o), '_getFabState', function () {
              var e = o.props,
                t = e.promotedContent
              return { inReplyToStatusId: e.statusId, promotedContent: t }
            }),
            h()(l()(o), '_shouldShowDownvoteEducation', function () {
              var e = o.props,
                t = e.isForwardNavigation,
                n = e.loggedInUser,
                r = e.shouldShowDownvoteEducation,
                a = new Date()
              a.setDate(a.getDate() - 14)
              var c = n && new Date(null == n ? void 0 : n.created_at) < a
              return n && c && !o._shouldRenderRuxInjections() && t && o._downvoteEnabled && r
            }),
            h()(l()(o), '_getNavigationParams', function () {
              var e = o.props,
                t = e.contextualClientEventInfo,
                n = e.overflowCount,
                r = e.richLandingContextId,
                a = e.tweetDetailNav,
                c = o._shouldRenderRuxInjections()
              return Ye(a, t, n, c, r)
            }),
            h()(l()(o), '_getModule', function () {
              var e = o.props.statusId,
                t = o.context.featureSwitches,
                n = o._getNavigationParams()
              return $e(e, n, t)
            }),
            h()(l()(o), '_handleEntriesRendered', function (e) {
              var t = e.entries,
                n = e.fetchStatus,
                r = o.props.recordTTFL
              if ((n === ue.a.FAILED && (o._shouldRecordTTFL = !1), o._shouldRecordTTFL && t.length)) {
                var a = t.some(function (e) {
                  return e.type === le.b.Tweet
                })
                ;(o._shouldRecordTTFL = !1), a && r && r('permalink')
              }
            }),
            h()(l()(o), '_shouldRedirectToCanonical', function () {
              var e,
                t = o.props,
                n = t.focalTweet,
                r = t.screenName
              return (
                !(
                  t.selectedTweetId !== t.statusId ||
                  null == n ||
                  null === (e = n.user) ||
                  void 0 === e ||
                  !e.screen_name
                ) &&
                r &&
                n &&
                r.toLowerCase() !== n.user.screen_name.toLowerCase()
              )
            }),
            h()(l()(o), '_redirectToCanonical', function () {
              var e = o.props,
                t = e.history,
                n = e.location
              t.replace({ pathname: o._getCanonicalPath(), query: n.query, state: n.state })
            }),
            h()(l()(o), '_getCanonicalPath', function () {
              var e = o.props.focalTweet
              return e ? '/'.concat(e.user.screen_name, '/status/').concat(e.id_str) : '/'
            }),
            h()(l()(o), '_getPathForTweetId', function (e, t) {
              return '/'.concat(t || 'i', '/status/').concat(e)
            }),
            h()(l()(o), '_getScribeNamespace', function () {
              return o._shouldRenderRuxInjections() ? Ke : Xe
            }),
            (o._shouldRecordTTFL = !0),
            (o._downvoteEnabled = o.context.featureSwitches.isTrue('rweb_reply_downvote_enabled')),
            o
          )
        }
        return (
          c()(n, [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return !Object(qe.a)(e, this.props)
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                this.props.isForwardNavigation && this._clearTimelineCache()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.context.setBackgroundClickHandler(null)
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this._shouldRedirectToCanonical()
                  ? this._redirectToCanonical()
                  : this.props.statusId !== e.statusId && this.props.isForwardNavigation && this._clearTimelineCache()
              },
            },
            {
              key: 'render',
              value: function () {
                var e,
                  t,
                  n,
                  r,
                  a,
                  o = this.context.loggedInUserId,
                  c = this.props,
                  i = c.addFlag,
                  l = c.communitySocialContextOfFocalTweet,
                  u = c.focalTweet,
                  s = c.history,
                  d = c.promotedContent,
                  f = c.socialContext,
                  p = c.statusId,
                  m = c.userLanguage
                u &&
                  ((e = Qe({ tweetText: Object(Ae.a)(u.text), fullName: u.user.name })),
                  (t = 'twitter://status?id='.concat(u.id_str)),
                  (n = 'https://twitter.com'.concat(this._getCanonicalPath() || '')),
                  (r = We({ fullName: u.user.name })),
                  (a = u.possibly_sensitive))
                var g = (function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                    return t.find(function (e) {
                      return e && et.includes(e.contextType)
                    })
                  })(f, l),
                  h = g && b.createElement(tt, { context: g })
                return b.createElement(
                  ke.b,
                  { data: Je(p, d), namespace: this._getScribeNamespace() },
                  b.createElement(
                    Pe.a,
                    null,
                    a
                      ? b.createElement(se.a, null, b.createElement('meta', { content: 'adult', name: 'rating' }))
                      : null,
                    n
                      ? b.createElement(
                          se.a,
                          null,
                          b.createElement('link', { href: n, rel: 'canonical' }),
                          b.createElement('link', {
                            href: 'https://publish.twitter.com/oembed?url='.concat(n),
                            rel: 'alternate',
                            title: e,
                            type: 'application/json+oembed',
                          }),
                        )
                      : null,
                    b.createElement(_e.a, {
                      canonical: n,
                      description: null == u ? void 0 : u.full_text,
                      image: null == u ? void 0 : u.user.profile_image_url_https,
                      title: r,
                      type: 'article',
                    }),
                    b.createElement(E.a, {
                      featureSwitches: this.context.featureSwitches,
                      loggedInUserId: o,
                      userLanguage: m,
                    }),
                    b.createElement(w.a, { deepLink: t }),
                    n ? b.createElement(v.a, { canonical: n }) : null,
                    b.createElement(
                      P.b.Provider,
                      { value: null == g ? void 0 : g.contextType },
                      b.createElement(je.a, {
                        backLocation: '/',
                        documentTitle: e,
                        history: s,
                        primaryContent: this._renderTimeline(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: this._renderSidebarContent(),
                        subtitle: h,
                        title: (g && nt(g)) || (u && u.self_thread ? Ge : Ue),
                      }),
                    ),
                    b.createElement(oe.a, { title: e, withMeta: !1 }),
                    this._shouldShowDownvoteEducation()
                      ? b.createElement(ie, {
                          onDismiss: function () {
                            i(A.k)
                          },
                        })
                      : null,
                  ),
                )
              },
            },
            {
              key: '_renderRightControl',
              value: function () {
                var e = this.context,
                  t = e.featureSwitches,
                  n = e.loggedInUserId,
                  r = this.props,
                  a = r.focalTweet,
                  o = r.startLocation
                return b.createElement(
                  Re.a,
                  { style: at.mobileAppBarRightControl },
                  b.createElement(Oe, {
                    featureSwitches: t,
                    scribeNamespace: this._getScribeNamespace(),
                    startLocation: o,
                    userId: n,
                  }),
                  b.createElement(Te.b, { focalTweet: a, module: this._getModule() }),
                )
              },
            },
            {
              key: '_renderSidebarContent',
              value: function () {
                var e = this.props.focalTweet
                return e && e.user.id_str
                  ? b.createElement(
                      O.a,
                      { focalTweetId: null == e ? void 0 : e.id_str, withTopicsToFollow: !1, withWhoToFollow: !1 },
                      b.createElement(pe, { focalTweetId: e.id_str }),
                    )
                  : null
              },
            },
            {
              key: '_renderTimeline',
              value: function () {
                var e = this.props,
                  t = e.contextTweetId,
                  n = e.focalTweet,
                  r = e.location,
                  a = e.promotedContent,
                  o = e.rootTweet,
                  c = e.screenName,
                  i = e.selectedTweetId,
                  l = e.socialContext,
                  u = e.statusId,
                  s = e.topicFollowPrompt,
                  d = { selectedTweetId: i }
                return b.createElement(
                  xe.a,
                  { collectionName: ze },
                  b.createElement(Ce.a, {
                    apiErrorHandlerMap: Ze(c),
                    contextTweetId: t,
                    fetchOptions: this._getNavigationParams(),
                    focalTweet: n,
                    focalTweetId: u,
                    location: r,
                    module: this._getModule(),
                    onEntriesRendered: this._handleEntriesRendered,
                    promotedContent: a,
                    rootTweet: o || void 0,
                    selectedTweet: d,
                    socialContext: l,
                    topicFollowPrompt: s,
                    withRuxInjections: this._shouldRenderRuxInjections(),
                  }),
                )
              },
            },
            {
              key: '_shouldRenderRuxInjections',
              value: function () {
                var e = this.props,
                  t = e.isReferralSource,
                  n = e.isReferredFromExploreTopics
                return !!e.richLandingContextId || n || t
              },
            },
            {
              key: '_clearTimelineCache',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getModule(),
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getNavigationParams(),
                  n = this.props,
                  r = n.clearTimelineCache,
                  a = n.createLocalApiErrorHandler,
                  o = n.screenName
                r(e, t).catch(a(Ze(o)))
              },
            },
          ]),
          n
        )
      })(b.Component)
      h()(rt, 'contextType', Be.a), h()(rt, 'defaultProps', { recordTTFL: y.c })
      var at = Ne.a.create(function (e) {
        return {
          mobileAppBarRightControl: {
            flexDirection: 'row',
            alignItems: 'center',
            height: e.componentDimensions.appBarHeightPx,
          },
        }
      })
      t.default = ne(Object(De.a)(rt))
    },
  },
])
//# sourceMappingURL=WIPED
