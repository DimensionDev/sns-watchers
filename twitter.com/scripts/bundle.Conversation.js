;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    'AEu/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationHiddenRepliesScreen', function () {
          return ee
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
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        g = n('KEM+'),
        h = n.n(g),
        y = (n('2G9S'), n('ERkP')),
        b = n.n(y),
        v = n('es0u'),
        E = n('m3Bd'),
        _ = n.n(E),
        w =
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
        P = n('rxPX'),
        I = n('0KEI')
      function C(e, t) {
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
        k = function (e, t) {
          return t.match.params.screenName
        },
        j = function (e, t) {
          return 'PUSH' === t.history.action
        },
        S = Object(P.a)()
          .propsFromState(function () {
            return { screenName: k, statusId: T, isForwardNavigation: j, loggedInUser: O.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = _()(e, ['loggedInUser'])
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? C(Object(n), !0).forEach(function (t) {
                      h()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : C(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ loggedInScreenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)('HIDDEN_REPLIES_PAGE'),
              clearTimelineCache: function (e) {
                return Object(w.a)(e)
              },
            }
          })
          .withAnalytics({ page: 'tweet', section: 'moderated_replies' }),
        x = n('xZXe'),
        L = n('QIgh'),
        A = n('8UdT'),
        R = n('IcAo'),
        D = n('VrCx'),
        B = n('yy6l'),
        F = function (e) {
          return Object(B.a)({
            component: x.a,
            createAdditionalProps: function () {
              return { withUnhideReply: e }
            },
            displayBlocked: !0,
            divider: { top: !0, bottom: !0 },
          })
        },
        N = n('WU0f'),
        q = n('oQhu'),
        M = n('yoO3'),
        H = n('fTQJ'),
        z = n('VS6U'),
        U = n('t62R'),
        G = n('FIs5'),
        V = n('3XMw'),
        W = n.n(V)
      function Q(e) {
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
          return p()(this, n)
        }
      }
      var X = W.a.d806aa19,
        K = W.a.d80c77dc,
        J = W.a.ef939f4b,
        Y = W.a.f7f2db4f,
        Z = b.a.createElement(
          W.a.I18NFormatMessage,
          { $i18n: 'cf1aca58' },
          b.a.createElement(
            U.b,
            { link: 'https://help.twitter.com/using-twitter/mentions-and-replies#hidden-reply' },
            W.a.a7511618,
          ),
        ),
        $ = function () {
          return b.a.createElement(G.a, { header: Y, message: Z })
        },
        ee = (function (e) {
          s()(n, e)
          var t = Q(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              h()(
                l()(r),
                '_getMemoizedModule',
                Object(q.a)(function (e) {
                  return Object(N.a)(e)
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
                    ? b.a.createElement(
                        M.a,
                        null,
                        b.a.createElement(z.a, {
                          backLocation: '/'.concat(r.toLowerCase(), '/status/').concat(a),
                          history: t,
                          primaryContent: this._renderPrimaryContent(),
                          sidebarContent: b.a.createElement(v.a, null),
                          subtitle: r === n ? K : J({ screenName: r }),
                          title: X,
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
                  return b.a.createElement(H.a, {
                    entryConfiguration:
                      ((e = { withUnhideReply: a === r }),
                      (t = e.withUnhideReply),
                      Object(R.a)({}, L.b, h()({}, A.b.Tweet, { handlers: h()({}, D.a.Tweet, F(t)) }))),
                    module: this._getModule(),
                    renderEmptyState: $,
                    title: X,
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
        })(b.a.Component)
      t.default = S(ee)
    },
    JiIh: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('0GBF')
      t.a = function (e) {
        return a.a.createElement(o.a, e)
      }
    },
    aH1V: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'QuickPromoteScreen', function () {
          return eo
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
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
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
          n('ERkP')),
        b = n.n(y)
      n('hBpG'), n('+KXO')
      function v(e) {
        throw new Error('Not reachable section reached!')
      }
      var E = n('97Jx'),
        _ = n.n(E),
        w = (n('z84I'), n('i4UL'), n('vrRf'), n('M+/F'), n('RqPI')),
        O = n('rxPX'),
        P = n('0KEI'),
        I = n('S3l+'),
        C = function (e) {
          return e.quickPromote.budget.dailyBudget
        },
        T = function (e) {
          return e.quickPromote.budget.durationDays
        },
        k = function (e) {
          return e.quickPromote.budget.errorMessage
        },
        j = function (e) {
          return (
            e.quickPromote.budget.availableBudgets ||
            (function (e) {
              throw new Error(e)
            })('No budgets found')
          )
        },
        S = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        x = function (e, t) {
          var n,
            r,
            a = Object(I.m)(e)
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
              dailyBudget: C,
              durationDays: T,
              availableBudgets: j,
              lang: w.o,
              currency: S,
              audience: x,
              errorMessage: k,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_BUDGET_SELECT_SCREEN',
              ),
              setDailyBudget: I.A,
              setBudgetDuration: I.w,
              fetchForecastedAudienceIfNeeded: I.g,
              setBudgetErrorMessage: I.x,
            }
          })
          .withAnalytics({ page: 'quick_promote' }),
        A = (n('1t7P'), n('jQ/y'), n('MWbm')),
        R = n('t62R'),
        D = n('rHpw'),
        B = function (e) {
          var t = e.children,
            n = e.description,
            r = e.descriptionDir,
            a = e.descriptionTestID,
            o = e.label,
            c = e.withBottomBorder,
            i = void 0 === c || c
          return b.a.createElement(
            A.a,
            { style: [F.descriptionItem, i ? F.bottomBorder : void 0] },
            !!o && b.a.createElement(R.b, { weight: 'bold' }, o),
            !!n &&
              b.a.createElement(
                A.a,
                { style: F.descriptionContainer },
                b.a.createElement(
                  R.b,
                  { color: 'gray700', dir: r, size: 'subtext2', style: F.descriptionContainer, testID: a },
                  n,
                ),
              ),
            t,
          )
        },
        F = D.a.create(function (e) {
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
        N = n('E6XO'),
        q = n('WM1P'),
        M = function (e) {
          return (
            (function (e) {
              Object(q.c)(function () {
                var t = N.e(),
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
                    N.c(''.concat(q.a, ':dwell:').concat(e), t.end()),
                      window.removeEventListener('focus', n),
                      window.removeEventListener('blur', r)
                  }
                )
              })
            })(e.screenType),
            null
          )
        },
        H = n('Gpeq'),
        z = n('tevE'),
        U = function (e) {
          var t = e.primaryLabel,
            n = e.subtitle,
            r = e.title
          return b.a.createElement(
            A.a,
            { style: [G.bottomBorder, G.titleContainer] },
            b.a.createElement(
              R.b,
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
              b.a.createElement(
                A.a,
                { style: G.primaryLabelContainer },
                b.a.createElement(R.b, { align: 'center', color: 'primary', size: 'title4' }, t),
              ),
            b.a.createElement(
              A.a,
              { style: G.subtitleContainer },
              b.a.createElement(z.a, { align: 'center', color: 'gray700' }, n),
            ),
          )
        },
        G = D.a.create(function (e) {
          return {
            titleContainer: { paddingVertical: e.spaces.space32 },
            primaryLabelContainer: { marginTop: e.spaces.space12 },
            subtitleContainer: { marginTop: e.spaces.space12 },
            bottomBorder: { borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: e.colors.borderColor },
          }
        }),
        V = n('3XMw'),
        W = n.n(V),
        Q = 'introButton',
        X = 'nextButton',
        K = 'objectiveScreen',
        J = 'targetingScreen',
        Y = function (e) {
          return 'targetingScreenGender'.concat(e)
        },
        Z = function (e) {
          return 'objectiveScreenObjective'.concat(e)
        },
        $ = 'targetingLocationScreen',
        ee = 'budgetSelectScreen',
        te = 'reviewScreen',
        ne = 'reviewButton',
        re = 'reviewObjectiveDescription',
        ae = 'reviewTargetingDescription',
        oe = 'reviewBudgetAndDurationDescription',
        ce = 'reviewPaymentPivot',
        ie = 'reviewPromotionTotalDescription',
        le = 'targetingLocationPivot',
        ue = 'backButton',
        se = 'targetingLocationSearch',
        de = 'targetingLocationItem',
        pe = n('4zmP'),
        fe = n('9RkS'),
        me = n('v6aA'),
        ge = n('Xrkv'),
        he = n('SrIh'),
        ye = W.a.c4d0434a,
        be = W.a.dc4a9413,
        ve = W.a.bad70c09,
        Ee = W.a.c133a39b,
        _e = W.a.ee5da8f4,
        we = W.a.g4bf9cb7,
        Oe = W.a.gc3ce5d9,
        Pe = W.a.c1778029,
        Ie = W.a.cb51c854,
        Ce = W.a.bb7b39e1,
        Te = W.a.eb9466d0,
        ke = W.a.c21037d0,
        je = W.a.b07cc9f1,
        Se = W.a.ce309bed,
        xe = W.a.c6c16a51,
        Le = W.a.cc49d03f,
        Ae = W.a.dbe9353d,
        Re = W.a.c64974fb,
        De = W.a.i638f89c
      function Be(e) {
        switch (e) {
          case 'AnyGender':
            return Ie
          case 'Male':
            return Ce
          case 'Female':
            return Te
          default:
            return Object(he.a)('Unknown gender: '.concat(e)), e
        }
      }
      function Fe(e) {
        switch (e) {
          case 'COUNTRIES':
            return ke
          case 'REGIONS':
            return je
          case 'METROS':
            return Se
          case 'CITIES':
            return xe
          case 'POSTAL_CODES':
            return Le
          default:
            return Object(he.a)('Unknown targeting locationType: '.concat(e)), e
        }
      }
      function Ne(e) {
        var t = e.amount,
          n = e.currency,
          r = e.fractionDigits,
          a = e.lang
        return t.toLocaleString(Object(H.a)(a), {
          currency: n,
          style: 'currency',
          maximumFractionDigits: void 0 !== r ? r : 2,
          minimumFractionDigits: void 0 !== r ? r : 2,
        })
      }
      function qe(e) {
        var t = e.currency,
          n = e.durationDays,
          r = e.lang,
          a = Ne({ amount: e.totalBudgetNum, lang: r, currency: t, fractionDigits: 0 })
        return be({ totalBudget: a, durationLabel: ze({ durationDays: n }) })
      }
      function Me(e) {
        var t = e.currency,
          n = e.dailyBudgetNum,
          r = e.durationDays,
          a = Ne({ amount: n, lang: e.lang, currency: t, fractionDigits: 0 })
        return ye({ dailyBudget: a, durationLabel: ze({ durationDays: r }) })
      }
      function He(e) {
        var t = e.numLocations,
          n = W.a.ia24dc8c(t)
        return ve({ numLocations: n })
      }
      function ze(e) {
        var t = e.durationDays,
          n = W.a.ia24dc8c(t)
        return we({ durationDays: n })
      }
      var Ue = n('yE5w')
      function Ge(e) {
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
          return p()(this, n)
        }
      }
      var Ve = W.a.a3a09d48,
        We = W.a.e7eb3683,
        Qe = W.a.d9f6e3cd,
        Xe = W.a.d9d6e10e,
        Ke = W.a.b3954ec9,
        Je = W.a.e1b48db4,
        Ye = Array(30)
          .fill(null)
          .map(function (e, t) {
            return t + 1
          }),
        Ze = (function (e) {
          s()(n, e)
          var t = Ge(n)
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
                  c = Ye[t]
                a !== c &&
                  (Object(Ue.p)(r)(Ue.n.setBudgetDuration(''.concat(c))), o(c), e._fetchForecastedAudienceIfNeeded())
              }),
              h()(l()(e), '_handleBudgetSlider', function (t) {
                var n = e.props,
                  r = n.analytics,
                  a = n.availableBudgets,
                  o = n.dailyBudget,
                  c = n.setDailyBudget,
                  i = a[t]
                o !== i &&
                  (Object(Ue.p)(r)(Ue.n.setDailyBudget(''.concat(i))), c(i), e._fetchForecastedAudienceIfNeeded())
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
                  Object(Ue.p)(e)(Ue.n.budgetSelectPageLoad()), this._fetchForecastedAudienceIfNeeded()
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
                    p = o.lang,
                    f = u.toLocaleString(Object(H.a)(p), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    m = i[0].toLocaleString(Object(H.a)(p), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    g = i
                      .slice(-1)[0]
                      .toLocaleString(Object(H.a)(p), {
                        currency: l,
                        style: 'currency',
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }),
                    h = c
                      ? ((t = (e = c).high),
                        (n = e.low),
                        (r = W.a.cf8abf58(n)),
                        (a = W.a.cf8abf58(t)),
                        Oe({ audienceLow: r, audienceHigh: a }))
                      : ' ',
                    y = ze({ durationDays: s }),
                    v = ze({ durationDays: Ye[0] }),
                    E = ze({ durationDays: Ye.slice(-1)[0] }),
                    w = this._getSliderProps(i, u),
                    O = this._getSliderProps(Ye, s),
                    P = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled')
                      ? Me({ dailyBudgetNum: u, durationDays: s, lang: p, currency: l })
                      : qe({ totalBudgetNum: u * s, durationDays: s, lang: p, currency: l })
                  return b.a.createElement(
                    A.a,
                    { style: $e.qpContainer, testID: ee },
                    b.a.createElement(M, { screenType: Ue.c.BudgetSelect }),
                    d &&
                      b.a.createElement(
                        A.a,
                        { style: $e.gutter },
                        b.a.createElement(pe.a, { text: d, type: 'danger' }),
                      ),
                    b.a.createElement(U, { primaryLabel: P, subtitle: h, title: Ve }),
                    b.a.createElement(
                      B,
                      { label: We },
                      b.a.createElement(
                        A.a,
                        { style: $e.childSpacing },
                        b.a.createElement(
                          fe.a,
                          _()({ accessibilityLabel: Qe, accessibilityLabelValueText: '"'.concat(f, '"') }, w, {
                            maxIcon: b.a.createElement(R.b, { style: $e.iconText }, g),
                            minIcon: b.a.createElement(R.b, { style: $e.iconText }, m),
                            onChange: this._handleBudgetSlider,
                            thumbLabel: f,
                          }),
                        ),
                      ),
                    ),
                    b.a.createElement(
                      B,
                      { label: Xe },
                      b.a.createElement(
                        A.a,
                        { style: $e.childSpacing },
                        b.a.createElement(
                          fe.a,
                          _()({ accessibilityLabel: Ke, accessibilityLabelValueText: '"'.concat(y, '"') }, O, {
                            maxIcon: b.a.createElement(R.b, { style: $e.iconText }, E),
                            minIcon: b.a.createElement(R.b, { style: $e.iconText }, v),
                            onChange: this._handleDurationSlider,
                            thumbLabel: y,
                          }),
                        ),
                      ),
                    ),
                    b.a.createElement(
                      A.a,
                      { style: $e.disclaimer },
                      b.a.createElement(z.a, { align: 'center', color: 'gray700', size: 'subtext2' }, Je),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()(Ze, 'contextType', me.a)
      var $e = D.a.create(function (e) {
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
        et = L(Ze),
        tt = n('XOJV'),
        nt = n('kGix'),
        rt = function (e, t) {
          return t.match.params.statusId
        },
        at = function (e, t) {
          return tt.a.selectHydrated(e, rt(0, t))
        },
        ot = function (e, t) {
          return Object(nt.d)(
            tt.a.selectFetchStatus(e, rt(0, t)),
            e.quickPromote.budget.availableBudgetsFetchStatus,
            e.quickPromote.targeting.initialTargetedLocationsFetchStatus,
            e.quickPromote.account.accountDataFetchStatus,
            e.quickPromote.firstLoad ? nt.a.LOADED : nt.a.LOADING,
          )
        },
        ct = function (e, t) {
          return e.quickPromote.promoteStatus
        },
        it = function (e, t) {
          return e.quickPromote.promoteErrorCode
        },
        lt = Object(O.a)()
          .propsFromState(function () {
            return { statusId: rt, fetchStatus: ot, tweet: at, promoteFetchStatus: ct, promoteErrorCode: it }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_SCREEN',
              ),
              fetchTweetIfNeeded: tt.a.fetchOneIfNeeded,
              fetchCurrentTargetingLocationIfNeeded: I.f,
              fetchAvailableBudgetsIfNeeded: I.d,
              fetchAdsAccountDataIfNeeded: I.c,
              fetchQuickPromoteEligibilityIfNeeded: I.j,
              fetchCouponsIfNeeded: I.e,
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
                  return Object(I.k)(i, l, o, c, n, u, t)
                })(e)
              },
              setPromoteFetchStatus: I.J,
            }
          })
          .withAnalytics(Ue.o),
        ut = Object(O.a)().withAnalytics(Ue.o),
        st = n('feu+')
      function dt(e) {
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
          return p()(this, n)
        }
      }
      var pt = W.a.e1bca506,
        ft = W.a.e4a4c608,
        mt = W.a.a219e217,
        gt = (function (e) {
          s()(n, e)
          var t = dt(n)
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
                Object(Ue.l)(n)(o, c, a)
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
                  Object(Ue.p)(e)(Ue.n.donePageLoad())
                },
              },
              {
                key: 'render',
                value: function () {
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(M, { screenType: Ue.c.Done }),
                    b.a.createElement(st.a, {
                      actionLabel: mt,
                      headline: pt,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToAnalytics,
                      onClose: this._handleClose,
                      subtext: ft,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()(gt, 'contextType', me.a)
      var ht = ut(gt),
        yt = n('v//M'),
        bt = n('W5XZ'),
        vt = n('jHSc'),
        Et =
          (n('Cm4o'),
          function (e) {
            return !!e.quickPromote.account.selectedFundingInstrument
          }),
        _t = function (e) {
          return e.quickPromote.coupons
        },
        wt = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        Ot = Object(O.a)()
          .propsFromState(function () {
            return { hasFundingInstrument: Et, coupons: _t, lang: w.o, currency: wt }
          })
          .withAnalytics(Ue.o),
        Pt = n.p + 'desktop_header_image.bfa9e365.png',
        It = n('TIdA'),
        Ct = n('A91F')
      function Tt(e) {
        var t = e.style
        return b.a.createElement(
          A.a,
          { style: t },
          b.a.createElement(It.a, { accessibilityLabel: '', aspectMode: Ct.a.exact(750 / 306), image: Pt }),
        )
      }
      var kt = n.p + 'mobile_header_image.431e8465.png'
      function jt(e) {
        var t = e.style
        return b.a.createElement(
          A.a,
          { style: t },
          b.a.createElement(It.a, { accessibilityLabel: '', aspectMode: Ct.a.COVER, image: kt }),
        )
      }
      var St = n('cHvH')
      function xt(e) {
        var t = e.style
        return b.a.createElement(St.a, null, function (e) {
          var n = e.windowHeight
          return e.windowWidth > D.a.theme.breakpoints.medium
            ? b.a.createElement(Tt, { style: t })
            : b.a.createElement(jt, { style: [t, { height: 0.5 * n }] })
        })
      }
      function Lt(e) {
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
          return p()(this, n)
        }
      }
      var At = W.a.dcfb0332,
        Rt = W.a.db841200,
        Dt = W.a.hc67be9d,
        Bt = W.a.gdb4ffae,
        Ft = W.a.a1228fee,
        Nt = W.a.dcfb0332,
        qt = (function (e) {
          s()(n, e)
          var t = Lt(n)
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
                n.push(Object(Ue.j)(o, c, a, i ? Ue.c.Objective : Ue.c.Targeting))
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
                    n,
                    r = this.props,
                    a = r.analytics,
                    o = r.coupons,
                    c = r.hasFundingInstrument,
                    i = r.location,
                    l = r.match.params,
                    u = l.screenName,
                    s = l.statusId,
                    d = (function (e, t, n) {
                      if (!e) return 'none'
                      var r = new URL(e, window.location.origin)
                      if (r.pathname === '/'.concat(t)) return 'me'
                      if (r.pathname === '/'.concat(t, '/status/').concat(n)) return 'tweet'
                      if (r.pathname === '/'.concat(t, '/status/').concat(n, '/analytics')) return 'analytics'
                      if ('/i/flow/convert_to_professional' === r.pathname) return 'ptt'
                      return 'other'
                    })(null === (e = i.state) || void 0 === e ? void 0 : e.previousPath, u, s),
                    p = 'other' === d ? (null === (t = i.state) || void 0 === t ? void 0 : t.previousPath) : void 0,
                    f = (null == o || null === (n = o.eligible_coupon) || void 0 === n ? void 0 : n.total_amount) || 0,
                    m = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled') && f > 0
                  Object(Ue.p)(a)(
                    Ue.n.introPageLoad({ hasFundingInstrument: c, entryPoint: d, otherEntryPoint: p, withCoupon: m }),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.coupons,
                    a = n.currency,
                    o = n.lang,
                    c = n.match.params.quickPromotePlatform === Ue.a.Rweb,
                    i = (null == r || null === (e = r.eligible_coupon) || void 0 === e ? void 0 : e.total_amount) || 0,
                    l = Ne({
                      amount: i,
                      currency:
                        (null == r || null === (t = r.eligible_coupon) || void 0 === t ? void 0 : t.currency_code) || a,
                      lang: o,
                      fractionDigits: 2,
                    }),
                    u = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled') && i > 0,
                    s = u ? Bt : At,
                    d = u ? Ft({ couponAmount: l }) : Rt,
                    p = u ? Nt : Dt
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(M, { screenType: Ue.c.Intro }),
                    b.a.createElement(st.a, {
                      actionLabel: p,
                      graphic: xt,
                      graphicDisplayMode: 'illustrationFullWidth',
                      headline: s,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToNextPage,
                      onClose: this._handleClose,
                      primaryButtonTestID: Q,
                      subtext: d,
                      withCloseButton: c,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()(qt, 'contextType', me.a)
      var Mt = Ot(qt),
        Ht = (n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        zt = n.n(Ht),
        Ut = function (e, t) {
          return e.quickPromote.objective
        },
        Gt = function (e, t) {
          return tt.a.selectHydrated(
            e,
            (function (e, t) {
              return t.match.params.statusId
            })(0, t),
          )
        },
        Vt = Object(O.a)()
          .propsFromState(function () {
            return { selectedObjective: Ut, tweet: Gt }
          })
          .propsFromActions(function () {
            return { setObjective: I.H }
          })
          .withAnalytics(Ue.o),
        Wt = n('h0NW'),
        Qt = W.a.d7d55f3b,
        Xt = W.a.b25fd3d6,
        Kt = W.a.bf214f47,
        Jt = function (e) {
          var t = e.infoItems,
            n = e.onClose,
            r = e.onLoad
          return (
            b.a.useEffect(function () {
              return r()
            }, []),
            b.a.createElement(st.a, {
              actionLabel: Kt,
              children: b.a.createElement(
                A.a,
                { style: Yt.infoItemGroup },
                b.a.createElement(Wt.a, { containerStyle: Yt.infoItem, items: t }),
              ),
              contentStyle: Yt.heading,
              graphicDisplayMode: 'none',
              headline: Qt,
              onAction: n,
              onClose: n,
              subtext: Xt,
              withCloseButton: !1,
            })
          )
        },
        Yt = D.a.create(function (e) {
          return {
            heading: { marginBottom: e.spaces.space40 },
            infoItemGroup: { marginBottom: e.spaces.space20 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0, marginBottom: e.spaces.space24 },
          }
        }),
        Zt = n('W2FU'),
        $t = n('E0cF'),
        en = n('gSL+'),
        tn = n('xHsv'),
        nn = n('Oib4'),
        rn = n('Dcm7'),
        an = n('iEUn'),
        on = n('pwey'),
        cn = n('Lsrn'),
        ln = n('k/Ka')
      function un(e, t) {
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
      function sn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? un(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : un(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var dn = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ln.a)(
          'svg',
          sn(
            sn({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [cn.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M11.25 22h-7C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v7c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7c0-.413-.337-.75-.75-.75H4.25c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h7c.414 0 .75.336.75.75s-.336.75-.75.75z',
            }),
            b.a.createElement('path', {
              d: 'M22.094 20.01l-3.614-3.614 2.586-.997c.19-.074.313-.26.307-.465-.008-.204-.144-.38-.34-.44l-8.55-2.6c-.168-.05-.353-.006-.478.12-.125.124-.17.31-.12.478l2.6 8.55c.06.195.237.33.44.34h.02c.196 0 .374-.122.445-.308l.997-2.586L20 22.102c.195.194.514.194.708 0l1.386-1.386c.194-.195.194-.513 0-.707z',
            }),
          ),
        )
      }
      dn.metadata = { width: 24, height: 24 }
      var pn = dn
      function fn(e, t) {
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
      function mn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fn(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var gn = W.a.fcc839b5,
        hn = W.a.d80964aa,
        yn = W.a.d4f57cce,
        bn = W.a.g06d6bf8,
        vn = W.a.c1a1817b,
        En = W.a.efc9b3fe,
        _n = nn.a,
        wn = W.a.h277a2e8,
        On = W.a.gd429fea,
        Pn = rn.a,
        In = W.a.icb22cdd,
        Cn = W.a.i859a9d3,
        Tn = W.a.e974b2d4,
        kn = W.a.b9c9b214,
        jn = W.a.i0e569bf,
        Sn = D.a.create(function (e) {
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
        xn = {
          label: hn,
          value: Zt.c.Engagements,
          decoration: b.a.createElement(an.a, { style: [Sn.icon, Sn.engagementIcon] }),
          testID: Z(Zt.c.Engagements),
        },
        Ln = {
          label: yn,
          value: Zt.c.Followers,
          decoration: b.a.createElement(on.a, { style: [Sn.icon, Sn.followersIcon] }),
          testID: Z(Zt.c.Followers),
        },
        An = {
          label: bn,
          value: Zt.c.WebsiteClicks,
          decoration: b.a.createElement(pn, { style: [Sn.icon, Sn.websiteClicksIcon] }),
          testID: Z(Zt.c.WebsiteClicks),
        },
        Rn = [
          { label: hn, description: Tn, decoration: b.a.createElement(an.a, { style: [Sn.icon, Sn.engagementIcon] }) },
          { label: yn, description: kn, decoration: b.a.createElement(on.a, { style: [Sn.icon, Sn.followersIcon] }) },
          { label: bn, description: jn, decoration: b.a.createElement(pn, { style: [Sn.icon, Sn.websiteClicksIcon] }) },
        ]
      function Dn() {
        return b.a.createElement(pe.a, { Icon: _n, headline: vn, text: En, type: 'warning' })
      }
      function Bn() {
        return b.a.createElement(pe.a, { Icon: Pn, headline: wn, text: On, type: 'danger' })
      }
      var Fn = Vt(function (e) {
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
            p = e.setObjective,
            f = e.tweet,
            m = f ? $t.a.getOriginalTweet(f) : f,
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
            y = !!(
              (null != m && m.in_reply_to_status_id_str) ||
              (null != m && m.in_reply_to_name) ||
              (null != m && m.in_reply_to_screen_name) ||
              (null != m && m.in_reply_to_user_id_str) ||
              (null != m && m.in_reply_to_user)
            )
          b.a.useEffect(function () {
            Object(Ue.p)(l)(Ue.n.goalSelectionPageLoad())
          }, [])
          var v = b.a.useMemo(
              function () {
                return (function (e) {
                  var t = e.selectedObjective,
                    n = e.tweetContainsLinks,
                    r = e.tweetHasMedia,
                    a = e.tweetIsReply
                  return [xn]
                    .concat(
                      zt()(a ? [] : [mn(mn({}, Ln), {}, { description: r && t === Zt.c.Followers ? Dn() : void 0 })]),
                      [mn(mn({}, An), {}, { disabled: !n, description: !n && Bn() })],
                    )
                    .map(function (e) {
                      return mn(
                        mn({}, e),
                        {},
                        { label: b.a.createElement(R.b, { size: 'headline2', weight: 'bold' }, e.label) },
                      )
                    })
                })({ tweetHasMedia: g, tweetContainsLinks: h, selectedObjective: d, tweetIsReply: y })
              },
              [g, h, d, y],
            ),
            E = b.a.useCallback(
              function (e, t) {
                p(t), Object(Ue.p)(l)(Ue.n.setPromoteGoal(t))
              },
              [l, p],
            )
          return b.a.createElement(
            A.a,
            { style: Sn.qpContainer, testID: K },
            b.a.createElement(M, { screenType: Ue.c.Objective }),
            b.a.createElement(
              A.a,
              { style: Sn.titleContainer },
              b.a.createElement(R.b, { align: 'center', size: 'headline1', weight: 'bold' }, gn),
            ),
            b.a.createElement(
              A.a,
              null,
              b.a.createElement(en.a, { name: 'objective-picker', onChange: E, options: v, value: d }),
            ),
            b.a.createElement(
              A.a,
              { style: Sn.goalSelectionCallout },
              b.a.createElement(tn.a, {
                description: In,
                learnMoreLabel: Cn,
                learnMoreLink: {
                  external: !1,
                  method: 'replace',
                  pathname: s.pathname,
                  state: { showEducationInterstitial: !0 },
                },
              }),
            ),
            null !== (i = s.state) && void 0 !== i && i.showEducationInterstitial
              ? b.a.createElement(Jt, {
                  infoItems: Rn,
                  onClose: function () {
                    return u.replace(s.pathname, { showEducationInterstitial: !1 })
                  },
                  onLoad: function () {
                    return Object(Ue.p)(l)(Ue.n.educationInterstitialLoad())
                  },
                })
              : null,
          )
        }),
        Nn = (n('ho0z'), n('zh9S')),
        qn = n('y0iL'),
        Mn = function (e, t) {
          return t.match.params.statusId
        },
        Hn = function (e, t) {
          return tt.a.selectHydrated(e, Mn(0, t))
        },
        zn = function (e, t) {
          return tt.a.selectFetchStatus(e, Mn(0, t))
        },
        Un = function (e, t) {
          return e.quickPromote.account.adsAccount
        },
        Gn = function (e, t) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        Vn = Object(O.a)()
          .propsFromState(function () {
            return { fetchStatus: zn, tweet: Hn, adsAccount: Un, fundingInstrument: Gn }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_PAYMENT_SCREEN',
              ),
              fetchTweetIfNeeded: tt.a.fetchOneIfNeeded,
              scribeAction: Nn.c,
              savePlatformRedirectBackState: function () {
                return Object(qn.j)(e.match.params.quickPromotePlatform)
              },
              fetchAdsAccountDataIfNeeded: qn.c,
            }
          })
          .withAnalytics(Ue.o),
        Wn = n('tI3i'),
        Qn = n.n(Wn),
        Xn = n('Rp9C'),
        Kn = n('bPFD')
      function Jn(e) {
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
          return p()(this, n)
        }
      }
      var Yn = (function (e) {
        s()(n, e)
        var t = Jn(n)
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
                  var o = (a && $t.a.getOriginalTweet(a)) || void 0,
                    c = o ? [Xn.a.getTweetItem(o)] : [],
                    i = t.scribeData || {},
                    l = 'string' == typeof i.component ? i.component : 'quick_promote',
                    u = 'string' == typeof i.uiEvent ? i.uiEvent : ''
                  r.scribe({ component: l, action: u, data: { items: c } })
                } else if ('navigation' === t.type) {
                  var s = e.props,
                    d = s.createLocalApiErrorHandler,
                    p = s.fetchAdsAccountDataIfNeeded,
                    f = s.history,
                    m = s.match.params,
                    g = m.quickPromotePlatform,
                    h = m.screenName,
                    y = m.statusId
                  Qn()(!!e.context.loggedInUserId, 'loggedInUserId must be defined'),
                    p(e.context.loggedInUserId, !0).catch(d()),
                    f.push('/'.concat(h, '/status/').concat(y, '/').concat(g, '/').concat(Ue.c.Review))
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
                var u = Object(Ue.i)(i, t, l, r)
                Object(Ue.p)(n)(Ue.n.paymentPageLoad(u.url)), u.isSameHost || (window.location.href = u.url)
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
                  c = Object(Ue.i)(a, t, o, n)
                return c.isSameHost
                  ? b.a.createElement(
                      b.a.Fragment,
                      null,
                      b.a.createElement(M, { screenType: Ue.c.Payment }),
                      b.a.createElement(Kn.a, {
                        dangerouslyDisableSandbox: !0,
                        onMessage: this._handleIFrameMessage,
                        reportError: he.a,
                        src: c.url,
                        style: Zn.iframe,
                      }),
                    )
                  : null
              },
            },
          ]),
          n
        )
      })(b.a.PureComponent)
      h()(Yn, 'contextType', me.a)
      var Zn = D.a.create(function (e) {
          return { iframe: { flexGrow: 1, paddingTop: 0 } }
        }),
        $n = Vn(Yn)
      function er(e) {
        new Image().src = e
      }
      function tr() {
        return b.a.createElement(St.a, null, function (e) {
          e.windowHeight
          return er(e.windowWidth > D.a.theme.breakpoints.medium ? Pt : kt), null
        })
      }
      var nr = function (e) {
          return e.quickPromote.objective
        },
        rr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        ar = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        or = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        cr = function (e, t) {
          return e.quickPromote.budget.dailyBudget
        },
        ir = function (e, t) {
          return e.quickPromote.budget.durationDays
        },
        lr = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        ur = function (e) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        sr = function (e) {
          return e.quickPromote.account.vatInfo
        },
        dr = function (e) {
          return e.quickPromote.account.adsAccount
        },
        pr = function (e) {
          return e.quickPromote.promoteStatus
        },
        fr = function (e) {
          return e.quickPromote.promoteErrorCode
        },
        mr = function (e) {
          return e.quickPromote.coupons
        },
        gr = function (e) {
          return e.quickPromote.enrollCouponErrorCode
        },
        hr = Object(O.a)()
          .propsFromState(function () {
            return {
              objective: nr,
              targetedLocations: rr,
              ageBucket: ar,
              gender: or,
              dailyBudget: cr,
              durationDays: ir,
              lang: w.o,
              country: I.n,
              currency: lr,
              fundingInstrument: ur,
              vatInfo: sr,
              adsAccount: dr,
              promoteStatus: pr,
              promoteErrorCode: fr,
              coupons: mr,
              enrollCouponErrorCode: gr,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_REVIEW_SCREEN',
              ),
              clearPersistedRedirectBackState: function () {
                return Object(I.l)()
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
                  return Object(I.a)(n, o, c, a, e)
                }),
              enrollCoupon: I.b,
            }
            var t, n, r
          })
          .withAnalytics(Ue.o),
        yr = n('csss'),
        br = n('/yvb'),
        vr = n('shC7')
      function Er(e) {
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
          return p()(this, n)
        }
      }
      var _r = W.a.c3c57e3e,
        wr = W.a.h06724b4,
        Or = W.a.a96f811e,
        Pr = W.a.b069d89c,
        Ir = W.a.a3a09d48,
        Cr = W.a.fbd44e96,
        Tr = W.a.e36bce63,
        kr = W.a.c602f5b8,
        jr = W.a.ia83756b,
        Sr = W.a.cc217a04,
        xr = W.a.c602f5b8,
        Lr = W.a.g4f2b588,
        Ar = W.a.i41612d9,
        Rr = W.a.cdae1af0,
        Dr = W.a.ed8bb5af,
        Br = W.a.fc640c20,
        Fr = W.a.be2dc078,
        Nr = W.a.iaefd4de,
        qr = W.a.e5e42640,
        Mr = W.a.da2805d1,
        Hr = W.a.ef4602eb,
        zr = W.a.a4db098b,
        Ur = W.a.ef7e3916,
        Gr = (function (e) {
          s()(n, e)
          var t = Er(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_getPaymentDescription', function (t, n) {
                var r = e.props.adsAccount
                return r && r.timezone && r.country_code ? (t ? Rr : n ? Br : Dr) : n ? Nr : Fr
              }),
              h()(l()(e), '_handlePromote', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createPromotion
                Object(Ue.p)(n)(Ue.n.promotionClick()), r(n)
              }),
              h()(l()(e), '_handleEnrollCoupon', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.coupons,
                  a = t.enrollCoupon,
                  o = t.fundingInstrument,
                  c = e._getCouponErrorMessage()
                o && null != r && r.eligible_coupon && !c && a(n)
              }),
              h()(l()(e), '_getPromoteErrorMessage', function () {
                var t = e.props,
                  n = t.promoteErrorCode,
                  r = t.promoteStatus
                if (!n) return r === nt.a.LOADED ? Mr : null
                switch (n) {
                  case 'MissingFundingInstrument':
                  case 'InvalidPaymentMethod':
                    return Ur
                  case 'CampaignCreationFailed':
                  case 'PromotionIneligible':
                    return zr
                  default:
                    return Hr
                }
              }),
              h()(l()(e), '_getCouponErrorMessage', function () {
                var t = e.props.enrollCouponErrorCode
                if (!t) return null
                switch (t) {
                  case 'AccountIneligible':
                  case 'MissingAdsAccount':
                  default:
                    return qr
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
                  Object(Ue.p)(t)(Ue.n.reviewPageLoad({ hasFundingInstrument: a })), this._handleEnrollCoupon()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    r = this.props,
                    a = r.ageBucket,
                    o = r.country,
                    c = r.coupons,
                    i = r.currency,
                    l = r.dailyBudget,
                    u = r.durationDays,
                    s = r.fundingInstrument,
                    d = r.gender,
                    p = r.lang,
                    f = r.match,
                    m = r.objective,
                    g = r.promoteStatus,
                    h = r.targetedLocations,
                    y = r.vatInfo,
                    E =
                      ((e = Zt.e[a]),
                      (t = e.maxAge),
                      (n = e.minAge),
                      t ? Ee({ minAge: n, maxAge: t }) : _e({ minAge: n })),
                    _ = (function (e) {
                      switch (e) {
                        case 'Engagements':
                          return Ae
                        case 'Followers':
                          return Re
                        case 'WebsiteClicks':
                          return De
                        default:
                          throw v()
                      }
                    })(m),
                    w = (function (e) {
                      var t = e.formattedAge,
                        n = e.gender,
                        r = e.locations,
                        a = r.length
                      return Pe({
                        newlinePlaceholder: '\n',
                        locations: Object(ge.a)(r),
                        locationsHeading: He({ numLocations: a }),
                        formattedAge: t,
                        gender: n,
                      })
                    })({
                      locations: h.map(function (e) {
                        return e.localized_name
                      }),
                      formattedAge: E,
                      gender: Be(d),
                    }),
                    O = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled'),
                    P = O
                      ? Me({ dailyBudgetNum: l, durationDays: u, lang: p, currency: i })
                      : qe({ totalBudgetNum: l * u, durationDays: u, lang: p, currency: i }),
                    C =
                      s && null != c && c.existing_balance.length
                        ? c.existing_balance.find(function (e) {
                            return e.currency_code === s.currency
                          })
                        : null,
                    T = C ? '' : Ne({ amount: l * u, lang: p, currency: i }),
                    k = f.params,
                    j = k.quickPromotePlatform,
                    S = k.screenName,
                    x = k.statusId,
                    L = this._getPromoteErrorMessage(),
                    D = this._getCouponErrorMessage(),
                    F = this.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                    N = y && null === y.tax_id && null === y.tax_exemption_id && 'NOT_SET' === y.tax_category,
                    q = !!s,
                    H = !(null == c || !c.eligible_coupon)
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(M, { screenType: Ue.c.Review }),
                    b.a.createElement(
                      A.a,
                      { style: Wr.qpContainer, testID: te },
                      L &&
                        b.a.createElement(
                          A.a,
                          { style: Wr.gutter },
                          b.a.createElement(pe.a, { text: L, type: 'danger' }),
                        ),
                      D &&
                        b.a.createElement(
                          A.a,
                          { style: Wr.gutter },
                          b.a.createElement(pe.a, { text: D, type: 'warning' }),
                        ),
                      b.a.createElement(U, { subtitle: wr, title: _r }),
                      F &&
                        b.a.createElement(B, {
                          description: _,
                          descriptionTestID: re,
                          label: Or,
                          withBottomBorder: !1,
                        }),
                      b.a.createElement(B, { description: w, descriptionTestID: ae, label: Pr, withBottomBorder: !1 }),
                      b.a.createElement(B, {
                        description: P,
                        descriptionDir: vr.a.getConstants().isRTL ? 'rtl' : 'ltr',
                        descriptionTestID: oe,
                        label: O ? Cr : Ir,
                        withBottomBorder: !1,
                      }),
                      b.a.createElement(yr.a, {
                        description:
                          s && !N
                            ? s.description
                            : b.a.createElement(
                                R.b,
                                { color: 'primary', size: 'subtext2' },
                                this._getPaymentDescription(q, H),
                              ),
                        label: b.a.createElement(R.b, { weight: 'bold' }, Tr),
                        link: !s || N ? Object(Ue.j)(S, x, j, Ue.c.Payment) : void 0,
                        testID: ce,
                      }),
                      O
                        ? b.a.createElement(
                            B,
                            { description: T, descriptionTestID: ie, label: kr, withBottomBorder: !1 },
                            C
                              ? (function (e) {
                                  var t = e.balance,
                                    n = e.currency,
                                    r = e.lang,
                                    a = e.subtotal,
                                    o = Ne({ amount: a, currency: n, lang: r }),
                                    c = Ne({ amount: Math.min(a, t), currency: n, lang: r }),
                                    i = Ne({ amount: Math.max(0, a - t), currency: n, lang: r }),
                                    l = t > a ? Ne({ amount: t - a, currency: n, lang: r }) : null
                                  return b.a.createElement(
                                    b.a.Fragment,
                                    null,
                                    b.a.createElement(
                                      A.a,
                                      { style: Wr.promotionTotalRow },
                                      b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, jr),
                                      b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, o),
                                    ),
                                    b.a.createElement(
                                      A.a,
                                      { style: Wr.promotionTotalRow },
                                      b.a.createElement(R.b, { color: 'blue500', size: 'subtext2' }, Sr),
                                      b.a.createElement(R.b, { color: 'blue500', size: 'subtext2' }, '-', c),
                                    ),
                                    b.a.createElement(
                                      A.a,
                                      { style: Wr.promotionTotalRow },
                                      b.a.createElement(
                                        R.b,
                                        { color: 'gray700', size: 'subtext2', weight: 'bold' },
                                        xr,
                                      ),
                                      b.a.createElement(
                                        R.b,
                                        { color: 'gray700', size: 'subtext2', testID: ie, weight: 'bold' },
                                        i,
                                      ),
                                    ),
                                    l &&
                                      b.a.createElement(
                                        A.a,
                                        { style: Wr.promotionTotalRow },
                                        b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, Lr),
                                        b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, l),
                                      ),
                                  )
                                })({ subtotal: l * u, balance: C.total_amount || 0, currency: i, lang: p })
                              : null,
                          )
                        : null,
                    ),
                    b.a.createElement(
                      A.a,
                      { style: Wr.bottomElements },
                      b.a.createElement(
                        br.a,
                        {
                          disabled: !s || N || I.R.includes(g),
                          onPress: this._handlePromote,
                          size: 'xLarge',
                          testID: ne,
                          type: 'brandFilled',
                        },
                        Ar,
                      ),
                      b.a.createElement(
                        z.a,
                        { style: Wr.terms },
                        (function (e, t) {
                          return t
                            ? b.a.createElement(
                                W.a.I18NFormatMessage,
                                { $i18n: 'cace9784' },
                                b.a.createElement(R.b, { link: Object(Ue.k)(e) }, W.a.acff74af),
                                b.a.createElement(R.b, { link: Object(Ue.g)(e) }, W.a.cb8d4ace),
                              )
                            : b.a.createElement(
                                W.a.I18NFormatMessage,
                                { $i18n: 'c99d7100' },
                                b.a.createElement(R.b, { link: Object(Ue.k)(e) }, W.a.d56b5ac3),
                              )
                        })(o, !!C),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()(Gr, 'contextType', me.a)
      var Vr,
        Wr = D.a.create(function (e) {
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
            promotionTotalRow: { marginTop: e.spaces.space2, justifyContent: 'space-between', flexDirection: 'row' },
          }
        }),
        Qr = hr(Gr),
        Xr = n('Ty5D'),
        Kr =
          (n('yH/f'),
          n('7xRU'),
          function (e, t) {
            var n = Yr(e, t)
            return e.ads.typeahead.targetingLocation[n]
          }),
        Jr = function (e, t) {
          var n,
            r = Yr(e, t)
          return null === (n = e.ads.typeahead.targetingLocation[r]) || void 0 === n ? void 0 : n.fetchStatus
        },
        Yr = function (e, t) {
          return e.quickPromote.targeting.locationQuery
        },
        Zr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        $r = Object(O.a)()
          .propsFromState(function () {
            return {
              targetingLocationQuery: Yr,
              targetingLocations: Kr,
              targetedLocations: Zr,
              fetchStatus: Jr,
              userCountry: w.y,
            }
          })
          .propsFromActions(function () {
            return {
              setTargetedLocations: I.N,
              setAndFetchTargetingLocationQuery: I.s,
              setTargetingLocationQuery: I.P,
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_TARGETING_LOCATION_SCREEN',
              ),
            }
          })
          .withAnalytics(Ue.o),
        ea = n('VwDm'),
        ta = n('G1WX'),
        na = n('cCdp'),
        ra = n('xKuM'),
        aa = n('5Vk4'),
        oa = n('6OUF'),
        ca = n('zrOZ'),
        ia = n('kevv')
      function la(e) {
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
          return p()(this, n)
        }
      }
      var ua = W.a.cc642518,
        sa = W.a.i0e8c3c6,
        da = W.a.deaf5b15,
        pa = W.a.f69ad048,
        fa = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
        ma = Object.freeze(
          ((Vr = {}), h()(Vr, Ue.e.CurrentCountryMatch, 0), h()(Vr, Ue.e.Match, 1), h()(Vr, Ue.e.NoMatch, 2), Vr),
        ),
        ga = (function (e) {
          s()(n, e)
          var t = la(n)
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
                return b.a.createElement(
                  ha,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: r,
                  },
                  b.a.createElement(A.a, null, b.a.createElement(R.b, { style: ya.headingText, weight: 'heavy' }, sa)),
                  b.a.createElement(ta.a, { fetchStatus: n, render: e._renderSearchList, retryMessage: da }),
                )
              }),
              h()(l()(e), '_handleClear', function () {
                ;(0, e.props.setTargetingLocationQuery)('')
              }),
              h()(l()(e), '_renderSearchList', function () {
                var t = e.props.targetedLocations,
                  n = Object(ca.a)(
                    t.map(function (e) {
                      return e.targeting_value
                    }),
                  ),
                  r = e._getTargetingLocationOptions()
                return b.a.createElement(
                  A.a,
                  { style: ya.overflow },
                  r.map(function (t) {
                    var r = t.localized_name,
                      a = t.location_type,
                      o = t.targeting_value
                    return b.a.createElement(na.a, {
                      checked: n.has(o),
                      helpText: Fe(a),
                      key: o,
                      label: r,
                      name: o,
                      onChange: e._handleSearchSelect,
                      testID: de,
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
                  u = Object(Ue.h)(i || 'US'),
                  s = l.filter(function (e) {
                    var t = e.country_code,
                      n = e.localized_name
                    return u(n, t, o) !== Ue.e.NoMatch
                  })
                return Object(ia.a)(
                  s,
                  [
                    function (e) {
                      var t = e.country_code,
                        n = e.localized_name,
                        r = u(n, t, o)
                      return ma[r]
                    },
                    function (e) {
                      e.localized_name
                      var t,
                        n = e.location_type
                      return null !== (t = fa[n]) && void 0 !== t
                        ? t
                        : (function (e) {
                            Object(he.a)(
                              'Quick Promote: Unknown location type: '
                                .concat(e, '. Expected one of {')
                                .concat(Object.keys(fa).join(', '), '}'),
                            )
                          })(n) || Object.keys(fa).length
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
                    ? (Object(Ue.p)(a)(
                        Ue.n.setTargetingLocation({
                          id: i.targeting_value,
                          locationType: i.location_type,
                          countryCode: i.country_code,
                        }),
                      ),
                      o([i]),
                      e._handleGoBack())
                    : Object(he.a)('Quick Promote: could not find "'.concat(t, '" in list of targeting options'))
                } else Object(Ue.p)(a)(Ue.n.targetingLocationError()), e.setState({ errorMessage: pa })
                c('')
              }),
              h()(l()(e), '_renderSelected', function () {
                var t = e.props,
                  n = t.targetedLocations,
                  r = t.targetingLocationQuery,
                  a = e.state.errorMessage
                return b.a.createElement(
                  ha,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: r,
                  },
                  b.a.createElement(
                    A.a,
                    null,
                    a &&
                      b.a.createElement(
                        A.a,
                        { style: ya.gutter },
                        b.a.createElement(pe.a, { text: a, type: 'danger' }),
                      ),
                    b.a.createElement(R.b, { style: ya.headingText, weight: 'heavy' }, He({ numLocations: n.length })),
                  ),
                  b.a.createElement(
                    A.a,
                    null,
                    n.map(function (t) {
                      var n = t.localized_name,
                        r = t.location_type,
                        a = t.targeting_value
                      return b.a.createElement(na.a, {
                        checked: !0,
                        helpText: Fe(r),
                        key: a,
                        label: n,
                        name: a,
                        onChange: e._handleSearchSelect,
                        testID: de,
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
                Object(Ue.m)(n, r)(i, l, o, c, u)
              }),
              h()(l()(e), '_handleTargetingLocationChange', function (t) {
                var n = t.target.value,
                  r = e.props,
                  a = r.analytics,
                  o = r.createLocalApiErrorHandler,
                  c = r.setAndFetchTargetingLocationQuery
                Object(Ue.p)(a)(Ue.n.targetingLocationSearch(n)), c(n).catch(o())
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
                  Object(Ue.p)(e)(Ue.n.targetingLocationPageLoad())
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
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(M, { screenType: Ue.c.TargetingLocation }),
                    e ? this._renderSearch() : this._renderSelected(),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()(ga, 'contextType', me.a)
      var ha = function (e) {
          var t = e.children,
            n = e.onBack,
            r = e.onChange,
            a = e.onClear,
            o = e.targetingLocationQuery
          return b.a.createElement(
            A.a,
            { style: ya.qpContainer, testID: $ },
            b.a.createElement(ra.a, {
              leftControl: b.a.createElement(aa.a, { onClick: n }),
              middleControl: b.a.createElement(oa.a, {
                Icon: ea.a,
                autoFocus: !0,
                name: 'locationTargetingInput',
                onChange: r,
                onClear: a,
                placeholder: ua,
                style: ya.input,
                testID: se,
                value: o,
                withClearButton: !0,
              }),
            }),
            t,
          )
        },
        ya = D.a.create(function (e) {
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
        ba = $r(ga),
        va = n('ddV6'),
        Ea = n.n(va),
        _a = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        wa = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        Oa = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Pa = Object(O.a)()
          .propsFromState(function () {
            return { targetedLocations: _a, selectedGender: wa, selectedAgeBucket: Oa }
          })
          .propsFromActions(function () {
            return { setTargetedAgeBucket: I.L, setTargetedGender: I.M }
          })
          .withAnalytics(Ue.o),
        Ia = n('JiIh'),
        Ca = n('fyvP'),
        Ta = n('J4ZH'),
        ka = n('tn7R'),
        ja = n('mN6z')
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
          return p()(this, n)
        }
      }
      var xa = W.a.hba1d105,
        La = W.a.cba0133d,
        Aa = W.a.e1efbead,
        Ra = W.a.c6ff7c1f,
        Da = W.a.b555fb45,
        Ba = W.a.a8d0108d,
        Fa = [Zt.b.Any, Zt.b.Female, Zt.b.Male].map(function (e) {
          return { label: Be(e), value: e, testID: Y(e) }
        }),
        Na = W.a.j2c03e12,
        qa = ['13', '18', '21', '25', '35', '50'],
        Ma = [void 0, void 0, void 0, '24', '34', '49', '54'],
        Ha = Object(Ta.a)(Object(ka.a)(Zt.e), function (e) {
          return e.maxAge || 'over'
        }),
        za = Ma.length
      function Ua(e, t) {
        var n
        if (e && t) return null === (n = Zt.d[e]) || void 0 === n ? void 0 : n[t]
      }
      var Ga = (function (e) {
        s()(n, e)
        var t = Sa(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            h()(l()(e), '_handleGenderChange', function (t, n) {
              var r = e.props,
                a = r.analytics
              ;(0, r.setTargetedGender)(n), Object(Ue.p)(a)(Ue.n.setTargetingGender(n))
            }),
            h()(l()(e), '_handleAgeBucketChange', function (t, n) {
              var r = Ea()(t, 2),
                a = r[0],
                o = r[1],
                c = e.props,
                i = c.analytics,
                l = c.selectedAgeBucket,
                u = c.setTargetedAgeBucket,
                s = e._sliderValueFromSelectedAgeBucket(l)
              if (!Object(ja.a)(s, [a, o]))
                if (n) {
                  var d = qa[a]
                  if (!d) return
                  var p = Ua(d, o === za ? 'over' : Ma[o])
                  if (p) Object(Ue.p)(i)(Ue.n.setTargetingAgeBucket(p)), u(p)
                  else {
                    var f = Object.keys(Zt.d[d])[0]
                    e._setAgeBucket({ minAge: d, maxAge: f })
                  }
                } else {
                  var m = o === za ? 'over' : Ma[o]
                  if (!m) return
                  var g = Ua(qa[a], m)
                  if (g) Object(Ue.p)(i)(Ue.n.setTargetingAgeBucket(g)), u(g)
                  else {
                    var h = Ha[m].slice(-1)[0].minAge
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
                i = Zt.d[r][n || 'over']
              if (!i)
                throw new Error(
                  'Age bucket not found for minAge: "'.concat(r, '", maxAge: "').concat(n || '<empty>', '"'),
                )
              Object(Ue.p)(o)(Ue.n.setTargetingAgeBucket(i)), c(i)
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
                Object(Ue.p)(e)(Ue.n.targetingPageLoad())
              },
            },
            {
              key: '_sliderValueFromSelectedAgeBucket',
              value: function (e) {
                var t = Zt.e[e],
                  n = t.maxAge,
                  r = t.minAge
                return [qa.indexOf(r), n ? Ma.indexOf(n) : za]
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
                  u = He({ numLocations: a.length }),
                  s = Zt.e[n],
                  d = s.maxAge,
                  p = s.minAge,
                  f = this._sliderValueFromSelectedAgeBucket(n),
                  m = d || Na
                return b.a.createElement(
                  A.a,
                  { style: Va.qpContainer, testID: J },
                  b.a.createElement(M, { screenType: Ue.c.Targeting }),
                  b.a.createElement(U, { subtitle: La, title: xa }),
                  b.a.createElement(yr.a, {
                    description: Object(ge.a)(
                      a.map(function (e) {
                        return e.localized_name
                      }),
                    ),
                    label: b.a.createElement(R.b, { weight: 'bold' }, u),
                    link: Object(Ue.j)(i, l, c, Ue.c.TargetingLocation),
                    testID: le,
                  }),
                  b.a.createElement(
                    B,
                    { label: Aa },
                    b.a.createElement(
                      A.a,
                      { style: Va.ageRangeSlider },
                      b.a.createElement(Ia.a, {
                        endThumbAccessibilityLabel: Da,
                        endThumbAccessibilityLabelValueText: '"'.concat(m, '"'),
                        endThumbLabel: m,
                        max: za,
                        min: 0,
                        onChange: this._handleAgeBucketChange,
                        startThumbAccessibilityLabel: Ra,
                        startThumbAccessibilityLabelValueText: '"'.concat(p, '"'),
                        startThumbLabel: p,
                        value: f,
                      }),
                    ),
                  ),
                  b.a.createElement(
                    B,
                    { label: Ba, withBottomBorder: !1 },
                    b.a.createElement(
                      A.a,
                      { style: Va.genderSelection },
                      b.a.createElement(Ca.a, {
                        name: 'gender',
                        onChange: this._handleGenderChange,
                        options: Fa,
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
      })(b.a.PureComponent)
      h()(Ga, 'contextType', me.a)
      var Va = D.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            genderSelection: { marginTop: e.spaces.space4 },
            ageRangeSlider: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        Wa = Pa(Ga),
        Qa = n('q9Zt'),
        Xa = n('JYMr')
      function Ka(e) {
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
          return p()(this, n)
        }
      }
      var Ja = W.a.a065172e,
        Ya = W.a.cfcdb4a1,
        Za = W.a.dcfb0332,
        $a = W.a.c1df579e,
        eo = (function (e) {
          s()(n, e)
          var t = Ka(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_getRetweetOrTweet', function () {
                var t = e.props.tweet
                return t ? $t.a.getOriginalTweet(t) : t
              }),
              h()(l()(e), '_render', function () {
                var t = e.props.history,
                  n = e._getRetweetOrTweet()
                return !n || (n && n.user.id_str !== e.context.loggedInUserId)
                  ? b.a.createElement(
                      vt.b,
                      { history: t, onBackClick: e._handleGoBack, title: Za },
                      b.a.createElement(Qa.a, { onRetry: null, title: Ja }),
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
                  p = d ? Ue.d : Ue.b,
                  f = function (e) {
                    return Object(Ue.j)(u, s, i, e)
                  }
                switch (l) {
                  case 'intro':
                    return e._renderSplashPage()
                  case 'objective':
                    if (d) {
                      var m = f(Ue.c.Targeting)
                      return e._renderProgressPage(Ue.d.Objective, m)
                    }
                    n.replace(Object(Ue.j)(u, s, i, Ue.c.Targeting))
                    break
                  case 'targeting':
                    var g = f(Ue.c.BudgetSelect)
                    return e._renderProgressPage(p.Targeting, g)
                  case 'budget_select':
                    var h = f(Ue.c.Review)
                    return e._renderProgressPage(p.BudgetSelect, h)
                  case 'review':
                    var y = [nt.a.LOADING, nt.a.LOADED].includes(o) && !a
                    return e._renderProgressPage(y ? p.Finish : p.Review)
                  case 'payment':
                    return e._renderProgressPage(p.Review)
                  case 'targeting_location':
                    return e._renderPopupPage()
                  case 'done':
                    return e._renderSplashPage()
                  default:
                    throw v()
                }
              }),
              h()(l()(e), '_renderProgressPage', function (t, n) {
                var r = e.props.history
                return b.a.createElement(
                  vt.b,
                  { documentTitle: Za, history: r, renderHeader: e._renderHeader },
                  b.a.createElement(ra.a, {
                    leftControl: b.a.createElement(aa.a, { autofocus: !0, onClick: e._handleGoBack, testID: ue }),
                    rightControl: n && b.a.createElement(br.a, { link: n, testID: X, type: 'brandText' }, $a),
                  }),
                  b.a.createElement(Xa.a, { progress: t, style: to.progressBar }),
                  b.a.createElement(A.a, { style: to.noScrollView }, e._renderRoutes()),
                )
              }),
              h()(l()(e), '_renderPopupPage', function () {
                var t = e.props.history
                return b.a.createElement(
                  vt.b,
                  { documentTitle: Za, history: t, renderHeader: e._renderHeader },
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
                    return b.a.createElement(Xr.c, { component: Mt })
                  case 'objective':
                    return b.a.createElement(Xr.c, { component: Fn })
                  case 'targeting':
                    return b.a.createElement(Xr.c, { component: Wa })
                  case 'targeting_location':
                    return b.a.createElement(Xr.c, { component: ba })
                  case 'budget_select':
                    return b.a.createElement(Xr.c, { component: et })
                  case 'review':
                    return b.a.createElement(Xr.c, { component: Qr })
                  case 'payment':
                    return b.a.createElement(Xr.c, { component: $n })
                  case 'done':
                    return b.a.createElement(Xr.c, { component: ht })
                  default:
                    throw v()
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
                Object(Ue.p)(n)(Ue.n.back(i)), Object(Ue.m)(r, a)(l, u, c, i, s)
              }),
              h()(l()(e), '_handleRequestRetry', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.match.params.quickPromoteScreenName
                Object(Ue.p)(n)(Ue.n.reload(r)), window.location.reload()
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
                    c = t.fetchCouponsIfNeeded,
                    i = t.fetchCurrentTargetingLocationIfNeeded,
                    l = t.fetchQuickPromoteEligibilityIfNeeded,
                    u = t.fetchTweetIfNeeded,
                    s = t.match,
                    d = t.promoteFetchStatus,
                    p = t.setPromoteFetchStatus,
                    f = t.statusId,
                    m = s.params.quickPromoteScreenName,
                    g = this.context.loggedInUserId
                  return g
                    ? (nt.a.LOADED === d && m !== Ue.c.Done && p(nt.a.NONE),
                      Object(q.b)(
                        'initial-load',
                        Promise.all([u(f), i(), a(g), c(), l({ statusId: f })])
                          .then(function () {
                            return o()
                          })
                          .then(function () {
                            return (0, e.props.handleFirstLoad)()
                          }),
                      ).catch(function (e) {
                        r(bt.a)(e), Object(Ue.p)(n)(Ue.n.pageLoadFail(e.message))
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
                    ? t !== nt.a.LOADED
                      ? b.a.createElement(
                          vt.b,
                          { documentTitle: Za, history: n, renderHeader: this._renderHeader },
                          b.a.createElement(tr, null),
                          b.a.createElement(yt.a, {
                            fetchStatus: t,
                            onRequestRetry: this._handleRequestRetry,
                            render: this._render,
                            retryMessage: Ya,
                          }),
                        )
                      : b.a.createElement(yt.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleRequestRetry,
                          render: this._render,
                          retryMessage: Ya,
                        })
                    : this._render()
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()(eo, 'contextType', me.a)
      var to = D.a.create(function (e) {
          return { progressBar: { backgroundColor: e.colors.gray50 }, noScrollView: { overflowX: 'hidden', flex: 1 } }
        }),
        no = lt(eo)
      t.default = no
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
          return tt
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
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
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
        v = n.n(b),
        E = n('s4rk'),
        _ = n('zI2C'),
        w = n('6ZtA'),
        O = n('es0u'),
        P = (n('WNMA'), n('6/RC')),
        I = n('x5Pi'),
        C = n('8Lfv'),
        T = n('QK5w'),
        k = n('eSoz'),
        j = n('RqPI'),
        S = n('9D1O'),
        x = n('pNZL'),
        L = n('XOJV'),
        A = n('G6rE'),
        R = n('rxPX'),
        D = n('0KEI'),
        B = n('Mx3A'),
        F = function (e, t) {
          return e.location && e.location.state && e.location.state[t]
        },
        N = function (e, t) {
          return 'PUSH' === t.history.action
        },
        q = function (e, t) {
          var n = F(t, 'focal')
          return n || M(e, t)
        },
        M = function (e, t) {
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
            r = q(e, t)
          return !!n && n.includes('/i/topics/tweet/'.concat(r))
        },
        K = function (e, t) {
          if (!P.canUseDOM) return !1
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
          return L.a.selectHydrated(e, q(e, t))
        },
        Y = function (e, t) {
          var n = q(e, t),
            r = L.a.selectHydrated(e, n)
          return r && r.conversation_id_str ? L.a.selectHydrated(e, r.conversation_id_str) : null
        },
        Z = function (e, t) {
          return L.a.selectFetchStatus(e, q(e, t))
        },
        $ = function (e, t) {
          return t.location.query && 'string' == typeof t.location.query.cxt ? t.location.query.cxt : void 0
        }
      function ee(e, t) {
        var n = J(e, t),
          r = n ? Object(k.g)(e, n) : void 0
        return n && r ? Object(I.c)(n, r) : void 0
      }
      var te = Object(R.a)()
          .propsFromState(function () {
            return {
              communitySocialContextOfFocalTweet: ee,
              contextTweetId: G,
              contextualClientEventInfo: Q,
              focalTweet: J,
              initialFetchStatus: Z,
              isForwardNavigation: N,
              isReferralSource: K,
              isReferredFromExploreTopics: X,
              userLanguage: j.o,
              loggedInUser: A.e.selectLoggedInUser,
              overflowCount: W,
              promotedContent: V,
              richLandingContextId: $,
              rootTweet: Y,
              screenName: H,
              selectedTweetId: M,
              socialContext: z,
              startLocation: S.t,
              statusId: q,
              topicFollowPrompt: U,
              tweetDetailNav: x.a,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)('CONVERSATION_SCREEN'),
              clearTimelineCache: function (e, t) {
                return Object(C.a)(e, t)
              },
            }
          })
          .withAnalytics({ page: 'tweet' }),
        ne = n('ymux'),
        re = n('rkhm'),
        ae = n('SrtL'),
        oe = n('8UdT'),
        ce = n('kGix'),
        ie = n('muX9'),
        le = n('3XMw'),
        ue = n.n(le),
        se = (n('JtPf'), n('87if'), n('zb92')),
        de = Object(se.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(7), n.e(184)]).then(n.bind(null, 'uo3S'))
          },
          renderPlaceholder: function (e, t) {
            return null
          },
        }),
        pe = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('/yvb')),
        fe = n('sebV'),
        me = n('BXlL'),
        ge = n('Irs7'),
        he = n('aITJ')
      function ye(e, t) {
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
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ye(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ye(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ve = ue.a.af9c8a3d,
        Ee = function (e) {
          var t = e.featureSwitches,
            n = e.scribeNamespace,
            r = e.startLocation,
            a = e.userId,
            o = Object(ge.b)(),
            c = !!a && he.b.isMobileOS() && !fe.a.isStandaloneApp(),
            i = v.a.useCallback(
              function (e) {
                e.preventDefault(),
                  o.scribe(be(be({}, n), {}, { element: 'open_app_button', action: 'click' })),
                  Object(me.b)({ startLocation: r, featureSwitches: t, userId: a })
              },
              [o, t, n, r, a],
            )
          return c && t.isTrue('responsive_web_open_app_appbar_button_enabled')
            ? v.a.createElement(pe.a, {
                accessibilityLabel: ve,
                children: ve,
                onPress: i,
                size: 'small',
                type: 'primaryOutlined',
              })
            : null
        },
        _e = n('rJoH'),
        we = n('yoO3'),
        Oe = n('caTy'),
        Pe = n('PeW/'),
        Ie = n('AUxQ'),
        Ce = n('Rp9C'),
        Te = n('7JQg'),
        ke = n('VS6U'),
        je = n('tocL'),
        Se = n('HBr9'),
        xe = n('2fY8'),
        Le = n('MWbm'),
        Ae = n('G8HL'),
        Re = n('pxuL'),
        De = n('t62R'),
        Be = n('rHpw'),
        Fe = n('oQhu'),
        Ne = n('mN6z')
      function qe(e) {
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
          return p()(this, n)
        }
      }
      var Me = ue.a.ea831526,
        He = ue.a.a90e1e67({ noun: '' }),
        ze = ue.a.c299a6cf,
        Ue = ue.a.c2ed3314,
        Ge = ue.a.ad666301,
        Ve = ue.a.f0c37ddb,
        We = { page: 'tweet' },
        Qe = { page: 'tweet', section: 'landing' },
        Xe = Object(Fe.a)(function (e, t) {
          return { items: [Ce.a.forTweet(e, t)], tweet_id: e }
        }),
        Ke = Object(Fe.a)(function (e) {
          return Object(re.a)(e)
        }),
        Je = Object(Fe.a)(function (e, t, n, r, a) {
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
        Ye = Object(Fe.a)(function (e, t, n) {
          return Object(ne.a)({ focalTweetId: e, fetchOptions: t, featureSwitches: n })
        }),
        Ze = [je.a.Community]
      function $e(e) {
        var t = e.context
        if (!t) return null
        switch (t.contextType) {
          case je.a.Community:
            var n = t.landingUrl ? Object(Oe.b)(t.landingUrl) : void 0
            return v.a.createElement(De.b, { link: n }, t.text)
          default:
            return null
        }
      }
      function et(e) {
        if (!e) return null
        switch (e.contextType) {
          case je.a.Community:
            return Ue
          default:
            return null
        }
      }
      var tt = (function (e) {
        s()(n, e)
        var t = qe(n)
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
            h()(l()(o), '_getNavigationParams', function () {
              var e = o.props,
                t = e.contextualClientEventInfo,
                n = e.overflowCount,
                r = e.richLandingContextId,
                a = e.tweetDetailNav,
                c = o._shouldRenderRuxInjections()
              return Je(a, t, n, c, r)
            }),
            h()(l()(o), '_getModule', function () {
              var e = o.props.statusId,
                t = o.context.featureSwitches,
                n = o._getNavigationParams()
              return Ye(e, n, t)
            }),
            h()(l()(o), '_handleEntriesRendered', function (e) {
              var t = e.entries,
                n = e.fetchStatus,
                r = o.props.recordTTFL
              if ((n === ce.a.FAILED && (o._shouldRecordTTFL = !1), o._shouldRecordTTFL && t.length)) {
                var a = t.some(function (e) {
                  return e.type === oe.b.Tweet
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
              return o._shouldRenderRuxInjections() ? Qe : We
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
                return !Object(Ne.a)(e, this.props)
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
                  i = c.communitySocialContextOfFocalTweet,
                  l = c.focalTweet,
                  u = c.history,
                  s = c.promotedContent,
                  d = c.socialContext,
                  p = c.statusId,
                  f = c.userLanguage
                l &&
                  ((e = Ve({ tweetText: Object(xe.a)(l.text), fullName: l.user.name })),
                  (t = 'twitter://status?id='.concat(l.id_str)),
                  (n = 'https://twitter.com'.concat(this._getCanonicalPath() || '')),
                  (r = Ge({ fullName: l.user.name })),
                  (a = l.possibly_sensitive))
                var m = (function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                    return t.find(function (e) {
                      return e && Ze.includes(e.contextType)
                    })
                  })(d, i),
                  g = m && v.a.createElement($e, { context: m })
                return v.a.createElement(
                  Te.b,
                  { data: Xe(p, s), namespace: this._getScribeNamespace() },
                  v.a.createElement(
                    we.a,
                    null,
                    a
                      ? v.a.createElement(ie.a, null, v.a.createElement('meta', { content: 'adult', name: 'rating' }))
                      : null,
                    n
                      ? v.a.createElement(
                          ie.a,
                          null,
                          v.a.createElement('link', { href: n, rel: 'canonical' }),
                          v.a.createElement('link', {
                            href: 'https://publish.twitter.com/oembed?url='.concat(n),
                            rel: 'alternate',
                            title: e,
                            type: 'application/json+oembed',
                          }),
                        )
                      : null,
                    v.a.createElement(_e.a, {
                      canonical: n,
                      description: null == l ? void 0 : l.full_text,
                      image: null == l ? void 0 : l.user.profile_image_url_https,
                      title: r,
                      type: 'article',
                    }),
                    v.a.createElement(w.a, {
                      featureSwitches: this.context.featureSwitches,
                      loggedInUserId: o,
                      userLanguage: f,
                    }),
                    v.a.createElement(_.a, { deepLink: t }),
                    n ? v.a.createElement(E.a, { canonical: n }) : null,
                    v.a.createElement(
                      I.b.Provider,
                      { value: null == m ? void 0 : m.contextType },
                      v.a.createElement(ke.a, {
                        backLocation: '/',
                        documentTitle: e,
                        history: u,
                        primaryContent: this._renderTimeline(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: this._renderSidebarContent(),
                        subtitle: g,
                        title: (m && et(m)) || (l && l.self_thread ? ze : He),
                      }),
                    ),
                    v.a.createElement(ae.a, { title: e, withMeta: !1 }),
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
                return v.a.createElement(
                  Le.a,
                  { style: nt.mobileAppBarRightControl },
                  v.a.createElement(Ee, {
                    featureSwitches: t,
                    scribeNamespace: this._getScribeNamespace(),
                    startLocation: o,
                    userId: n,
                  }),
                  v.a.createElement(Pe.b, { focalTweet: a, module: this._getModule() }),
                )
              },
            },
            {
              key: '_renderSidebarContent',
              value: function () {
                var e = this.props.focalTweet
                return e && e.user.id_str
                  ? v.a.createElement(
                      O.a,
                      { focalTweetId: null == e ? void 0 : e.id_str, withTopicsToFollow: !1, withWhoToFollow: !1 },
                      v.a.createElement(de, { focalTweetId: e.id_str }),
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
                return v.a.createElement(
                  Se.a,
                  { collectionName: Me },
                  v.a.createElement(Ie.a, {
                    apiErrorHandlerMap: Ke(c),
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
                r(e, t).catch(a(Ke(o)))
              },
            },
          ]),
          n
        )
      })(v.a.Component)
      h()(tt, 'contextType', Re.a), h()(tt, 'defaultProps', { recordTTFL: y.c })
      var nt = Be.a.create(function (e) {
        return {
          mobileAppBarRightControl: {
            flexDirection: 'row',
            alignItems: 'center',
            height: e.componentDimensions.appBarHeightPx,
          },
        }
      })
      t.default = te(Object(Ae.a)(tt))
    },
  },
])
//# sourceMappingURL=WIPED
