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
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        m = n('AuHH'),
        f = n.n(m),
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
        C = n('0KEI')
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
        S = function (e, t) {
          return t.match.params.screenName
        },
        j = function (e, t) {
          return 'PUSH' === t.history.action
        },
        k = Object(P.a)()
          .propsFromState(function () {
            return { screenName: S, statusId: T, isForwardNavigation: j, loggedInUser: O.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = _()(e, ['loggedInUser'])
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
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)('HIDDEN_REPLIES_PAGE'),
              clearTimelineCache: function (e) {
                return Object(w.a)(e)
              },
            }
          })
          .withAnalytics({ page: 'tweet', section: 'moderated_replies' }),
        x = n('xZXe'),
        L = n('QIgh'),
        D = n('8UdT'),
        R = n('IcAo'),
        A = n('VrCx'),
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
        M = n('WU0f'),
        N = n('oQhu'),
        q = n('yoO3'),
        H = n('fTQJ'),
        z = n('VS6U'),
        U = n('t62R'),
        V = n('FIs5'),
        G = n('3XMw'),
        W = n.n(G)
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
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
          return b.a.createElement(V.a, { header: Y, message: Z })
        },
        ee = (function (e) {
          u()(n, e)
          var t = Q(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              h()(
                l()(r),
                '_getMemoizedModule',
                Object(N.a)(function (e) {
                  return Object(M.a)(e)
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
                        q.a,
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
                      Object(R.a)({}, L.b, h()({}, D.b.Tweet, { handlers: h()({}, A.a.Tweet, F(t)) }))),
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
      t.default = k(ee)
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
          return So
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        m = n('AuHH'),
        f = n.n(m),
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
          n('Qavd'),
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
        C = n('S3l+'),
        I = function (e) {
          return e.quickPromote.budget.dailyBudget
        },
        T = function (e) {
          return e.quickPromote.budget.durationDays
        },
        S = function (e) {
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
        k = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        x = function (e, t) {
          var n,
            r,
            a = Object(C.o)(e)
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
              availableBudgets: j,
              lang: w.o,
              currency: k,
              audience: x,
              errorMessage: S,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_BUDGET_SELECT_SCREEN',
              ),
              setDailyBudget: C.E,
              setBudgetDuration: C.z,
              fetchForecastedAudienceIfNeeded: C.h,
              setBudgetErrorMessage: C.A,
            }
          })
          .withAnalytics({ page: 'quick_promote' }),
        D = (n('1t7P'), n('jQ/y'), n('MWbm')),
        R = n('t62R'),
        A = n('rHpw'),
        B = function (e) {
          var t = e.children,
            n = e.description,
            r = e.descriptionDir,
            a = e.descriptionTestID,
            o = e.label,
            c = e.withBottomBorder,
            i = void 0 === c || c
          return b.a.createElement(
            D.a,
            { style: [F.descriptionItem, i ? F.bottomBorder : void 0] },
            !!o && b.a.createElement(R.b, { weight: 'bold' }, o),
            !!n &&
              b.a.createElement(
                D.a,
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
        F = A.a.create(function (e) {
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
        M = n('E6XO'),
        N = n('WM1P'),
        q = function (e) {
          return (
            (function (e) {
              Object(N.c)(function () {
                var t = M.e(),
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
                    M.c(''.concat(N.a, ':dwell:').concat(e), t.end()),
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
            D.a,
            { style: [V.bottomBorder, V.titleContainer] },
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
                D.a,
                { style: V.primaryLabelContainer },
                b.a.createElement(R.b, { align: 'center', color: 'primary', size: 'title4' }, t),
              ),
            b.a.createElement(
              D.a,
              { style: V.subtitleContainer },
              b.a.createElement(z.a, { align: 'center', color: 'gray700' }, n),
            ),
          )
        },
        V = A.a.create(function (e) {
          return {
            titleContainer: { paddingVertical: e.spaces.space32 },
            primaryLabelContainer: { marginTop: e.spaces.space12 },
            subtitleContainer: { marginTop: e.spaces.space12 },
            bottomBorder: { borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: e.colors.borderColor },
          }
        }),
        G = n('3XMw'),
        W = n.n(G),
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
        se = 'backButton',
        ue = 'targetingLocationSearch',
        de = 'targetingLocationItem',
        pe = 'paymentMethodSelect',
        me = n('4zmP'),
        fe = n('9RkS'),
        ge = n('v6aA'),
        he = n('Xrkv'),
        ye = n('SrIh'),
        be = W.a.c4d0434a,
        ve = W.a.dc4a9413,
        Ee = W.a.bad70c09,
        _e = W.a.c133a39b,
        we = W.a.ee5da8f4,
        Oe = W.a.g4bf9cb7,
        Pe = W.a.gc3ce5d9,
        Ce = W.a.c1778029,
        Ie = W.a.cb51c854,
        Te = W.a.bb7b39e1,
        Se = W.a.eb9466d0,
        je = W.a.c21037d0,
        ke = W.a.b07cc9f1,
        xe = W.a.ce309bed,
        Le = W.a.c6c16a51,
        De = W.a.cc49d03f,
        Re = W.a.dbe9353d,
        Ae = W.a.c64974fb,
        Be = W.a.i638f89c
      function Fe(e) {
        switch (e) {
          case 'AnyGender':
            return Ie
          case 'Male':
            return Te
          case 'Female':
            return Se
          default:
            return Object(ye.a)('Unknown gender: '.concat(e)), e
        }
      }
      function Me(e) {
        switch (e) {
          case 'COUNTRIES':
            return je
          case 'REGIONS':
            return ke
          case 'METROS':
            return xe
          case 'CITIES':
            return Le
          case 'POSTAL_CODES':
            return De
          default:
            return Object(ye.a)('Unknown targeting locationType: '.concat(e)), e
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
        return ve({ totalBudget: a, durationLabel: Ue({ durationDays: n }) })
      }
      function He(e) {
        var t = e.currency,
          n = e.dailyBudgetNum,
          r = e.durationDays,
          a = Ne({ amount: n, lang: e.lang, currency: t, fractionDigits: 0 })
        return be({ dailyBudget: a, durationLabel: Ue({ durationDays: r }) })
      }
      function ze(e) {
        var t = e.numLocations,
          n = W.a.ia24dc8c(t)
        return Ee({ numLocations: n })
      }
      function Ue(e) {
        var t = e.durationDays,
          n = W.a.ia24dc8c(t)
        return Oe({ durationDays: n })
      }
      var Ve = n('yE5w')
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var We = W.a.a3a09d48,
        Qe = W.a.e7eb3683,
        Xe = W.a.d9f6e3cd,
        Ke = W.a.d9d6e10e,
        Je = W.a.b3954ec9,
        Ye = W.a.e1b48db4,
        Ze = Array(30)
          .fill(null)
          .map(function (e, t) {
            return t + 1
          }),
        $e = (function (e) {
          u()(n, e)
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
                  c = Ze[t]
                a !== c &&
                  (Object(Ve.p)(r)(Ve.n.setBudgetDuration(''.concat(c))), o(c), e._fetchForecastedAudienceIfNeeded())
              }),
              h()(l()(e), '_handleBudgetSlider', function (t) {
                var n = e.props,
                  r = n.analytics,
                  a = n.availableBudgets,
                  o = n.dailyBudget,
                  c = n.setDailyBudget,
                  i = a[t]
                o !== i &&
                  (Object(Ve.p)(r)(Ve.n.setDailyBudget(''.concat(i))), c(i), e._fetchForecastedAudienceIfNeeded())
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
                  Object(Ve.p)(e)(Ve.n.budgetSelectPageLoad()), this._fetchForecastedAudienceIfNeeded()
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
                    s = o.dailyBudget,
                    u = o.durationDays,
                    d = o.errorMessage,
                    p = o.lang,
                    m = s.toLocaleString(Object(H.a)(p), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    f = i[0].toLocaleString(Object(H.a)(p), {
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
                        Pe({ audienceLow: r, audienceHigh: a }))
                      : ' ',
                    y = Ue({ durationDays: u }),
                    v = Ue({ durationDays: Ze[0] }),
                    E = Ue({ durationDays: Ze.slice(-1)[0] }),
                    w = this._getSliderProps(i, s),
                    O = this._getSliderProps(Ze, u),
                    P = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled')
                      ? He({ dailyBudgetNum: s, durationDays: u, lang: p, currency: l })
                      : qe({ totalBudgetNum: s * u, durationDays: u, lang: p, currency: l })
                  return b.a.createElement(
                    D.a,
                    { style: et.qpContainer, testID: ee },
                    b.a.createElement(q, { screenType: Ve.c.BudgetSelect }),
                    d &&
                      b.a.createElement(
                        D.a,
                        { style: et.gutter },
                        b.a.createElement(me.a, { text: d, type: 'danger' }),
                      ),
                    b.a.createElement(U, { primaryLabel: P, subtitle: h, title: We }),
                    b.a.createElement(
                      B,
                      { label: Qe },
                      b.a.createElement(
                        D.a,
                        { style: et.childSpacing },
                        b.a.createElement(
                          fe.a,
                          _()({ accessibilityLabel: Xe, accessibilityLabelValueText: '"'.concat(m, '"') }, w, {
                            maxIcon: b.a.createElement(R.b, { style: et.iconText }, g),
                            minIcon: b.a.createElement(R.b, { style: et.iconText }, f),
                            onChange: this._handleBudgetSlider,
                            thumbLabel: m,
                          }),
                        ),
                      ),
                    ),
                    b.a.createElement(
                      B,
                      { label: Ke },
                      b.a.createElement(
                        D.a,
                        { style: et.childSpacing },
                        b.a.createElement(
                          fe.a,
                          _()({ accessibilityLabel: Je, accessibilityLabelValueText: '"'.concat(y, '"') }, O, {
                            maxIcon: b.a.createElement(R.b, { style: et.iconText }, E),
                            minIcon: b.a.createElement(R.b, { style: et.iconText }, v),
                            onChange: this._handleDurationSlider,
                            thumbLabel: y,
                          }),
                        ),
                      ),
                    ),
                    b.a.createElement(
                      D.a,
                      { style: et.disclaimer },
                      b.a.createElement(z.a, { align: 'center', color: 'gray700', size: 'subtext2' }, Ye),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()($e, 'contextType', ge.a)
      var et = A.a.create(function (e) {
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
        tt = L($e),
        nt = n('kGix'),
        rt = n('XOJV'),
        at = function (e, t) {
          return t.match.params.statusId
        },
        ot = function (e, t) {
          return rt.a.selectHydrated(e, at(0, t))
        },
        ct = function (e, t) {
          return Object(nt.d)(
            rt.a.selectFetchStatus(e, at(0, t)),
            e.quickPromote.budget.availableBudgetsFetchStatus,
            e.quickPromote.targeting.initialTargetedLocationsFetchStatus,
            e.quickPromote.account.accountDataFetchStatus,
          )
        },
        it = function (e, t) {
          return e.quickPromote.promoteStatus
        },
        lt = function (e, t) {
          return e.quickPromote.promoteErrorCode
        },
        st = function (e, t) {
          return e.quickPromote.account.campaigns
        },
        ut = Object(O.a)()
          .propsFromState(function () {
            return {
              statusId: at,
              fetchStatus: ct,
              tweet: ot,
              campaigns: st,
              promoteFetchStatus: it,
              promoteErrorCode: lt,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_SCREEN',
              ),
              fetchTweetIfNeeded: rt.a.fetchOneIfNeeded,
              fetchCurrentTargetingLocationIfNeeded: C.g,
              fetchAvailableBudgetsIfNeeded: C.e,
              fetchAdsAccountDataIfNeeded: C.d,
              fetchQuickPromoteEligibilityIfNeeded: C.l,
              fetchPaymentMethods: C.i,
              fetchCouponsIfNeeded: C.f,
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
                    s = { pa_signup_complete: r.query.pa_signup_complete || '' }
                  return Object(C.m)(i, l, o, c, n, s, t)
                })(e)
              },
              setPromoteFetchStatus: C.O,
            }
          })
          .withAnalytics(Ve.o),
        dt = Object(O.a)().withAnalytics(Ve.o),
        pt = n('feu+')
      function mt(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ft = W.a.e1bca506,
        gt = W.a.e4a4c608,
        ht = W.a.a219e217,
        yt = (function (e) {
          u()(n, e)
          var t = mt(n)
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
                Object(Ve.l)(n)(o, c, a)
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
                  Object(Ve.p)(e)(Ve.n.donePageLoad())
                },
              },
              {
                key: 'render',
                value: function () {
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(q, { screenType: Ve.c.Done }),
                    b.a.createElement(pt.a, {
                      actionLabel: ht,
                      headline: ft,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToAnalytics,
                      onClose: this._handleClose,
                      subtext: gt,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()(yt, 'contextType', ge.a)
      var bt = dt(yt),
        vt = n('v//M'),
        Et = n('W5XZ'),
        _t = n('jHSc'),
        wt =
          (n('Cm4o'),
          function (e) {
            return !!e.quickPromote.account.selectedFundingInstrument
          }),
        Ot = function (e) {
          return e.quickPromote.coupons
        },
        Pt = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        Ct = Object(O.a)()
          .propsFromState(function () {
            return { hasFundingInstrument: wt, coupons: Ot, lang: w.o, currency: Pt }
          })
          .withAnalytics(Ve.o),
        It = n.p + 'desktop_header_image.bfa9e365.png',
        Tt = n('TIdA'),
        St = n('A91F')
      function jt(e) {
        var t = e.style
        return b.a.createElement(
          D.a,
          { style: t },
          b.a.createElement(Tt.a, { accessibilityLabel: '', aspectMode: St.a.exact(750 / 306), image: It }),
        )
      }
      var kt = n.p + 'mobile_header_image.431e8465.png'
      function xt(e) {
        var t = e.style
        return b.a.createElement(
          D.a,
          { style: t },
          b.a.createElement(Tt.a, { accessibilityLabel: '', aspectMode: St.a.COVER, image: kt }),
        )
      }
      var Lt = n('cHvH')
      function Dt(e) {
        var t = e.style
        return b.a.createElement(Lt.a, null, function (e) {
          var n = e.windowHeight
          return e.windowWidth > A.a.theme.breakpoints.medium
            ? b.a.createElement(jt, { style: t })
            : b.a.createElement(xt, { style: [t, { height: 0.5 * n }] })
        })
      }
      function Rt(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var At = W.a.dcfb0332,
        Bt = W.a.db841200,
        Ft = W.a.hc67be9d,
        Mt = W.a.gdb4ffae,
        Nt = W.a.a1228fee,
        qt = W.a.dcfb0332,
        Ht = (function (e) {
          u()(n, e)
          var t = Rt(n)
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
                n.push(Object(Ve.j)(o, c, a, i ? Ve.c.Objective : Ve.c.Targeting))
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
                    s = l.screenName,
                    u = l.statusId,
                    d = (function (e, t, n) {
                      if (!e) return 'none'
                      var r = new URL(e, window.location.origin)
                      if (r.pathname === '/'.concat(t)) return 'me'
                      if (r.pathname === '/'.concat(t, '/status/').concat(n)) return 'tweet'
                      if (r.pathname === '/'.concat(t, '/status/').concat(n, '/analytics')) return 'analytics'
                      if ('/i/flow/convert_to_professional' === r.pathname) return 'ptt'
                      return 'other'
                    })(null === (e = i.state) || void 0 === e ? void 0 : e.previousPath, s, u),
                    p = 'other' === d ? (null === (t = i.state) || void 0 === t ? void 0 : t.previousPath) : void 0,
                    m = (null == o || null === (n = o.eligible_coupon) || void 0 === n ? void 0 : n.total_amount) || 0,
                    f = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled') && m > 0
                  Object(Ve.p)(a)(
                    Ve.n.introPageLoad({ hasFundingInstrument: c, entryPoint: d, otherEntryPoint: p, withCoupon: f }),
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
                    c = n.match.params.quickPromotePlatform === Ve.a.Rweb,
                    i = (null == r || null === (e = r.eligible_coupon) || void 0 === e ? void 0 : e.total_amount) || 0,
                    l = Ne({
                      amount: i,
                      currency:
                        (null == r || null === (t = r.eligible_coupon) || void 0 === t ? void 0 : t.currency_code) || a,
                      lang: o,
                      fractionDigits: 2,
                    }),
                    s = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled') && i > 0,
                    u = s ? Mt : At,
                    d = s ? Nt({ couponAmount: l }) : Bt,
                    p = s ? qt : Ft
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(q, { screenType: Ve.c.Intro }),
                    b.a.createElement(pt.a, {
                      actionLabel: p,
                      graphic: Dt,
                      graphicDisplayMode: 'illustrationFullWidth',
                      headline: u,
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
      h()(Ht, 'contextType', ge.a)
      var zt = Ct(Ht),
        Ut = (n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        Vt = n.n(Ut),
        Gt = function (e, t) {
          return e.quickPromote.objective
        },
        Wt = function (e, t) {
          return rt.a.selectHydrated(
            e,
            (function (e, t) {
              return t.match.params.statusId
            })(0, t),
          )
        },
        Qt = Object(O.a)()
          .propsFromState(function () {
            return { selectedObjective: Gt, tweet: Wt }
          })
          .propsFromActions(function () {
            return { setObjective: C.K }
          })
          .withAnalytics(Ve.o),
        Xt = n('h0NW'),
        Kt = W.a.d7d55f3b,
        Jt = W.a.b25fd3d6,
        Yt = W.a.bf214f47,
        Zt = function (e) {
          var t = e.infoItems,
            n = e.onClose,
            r = e.onLoad
          return (
            b.a.useEffect(function () {
              return r()
            }, []),
            b.a.createElement(pt.a, {
              actionLabel: Yt,
              children: b.a.createElement(
                D.a,
                { style: $t.infoItemGroup },
                b.a.createElement(Xt.a, { containerStyle: $t.infoItem, items: t }),
              ),
              contentStyle: $t.heading,
              graphicDisplayMode: 'none',
              headline: Kt,
              onAction: n,
              onClose: n,
              subtext: Jt,
              withCloseButton: !1,
            })
          )
        },
        $t = A.a.create(function (e) {
          return {
            heading: { marginBottom: e.spaces.space40 },
            infoItemGroup: { marginBottom: e.spaces.space20 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0, marginBottom: e.spaces.space24 },
          }
        }),
        en = n('W2FU'),
        tn = n('E0cF'),
        nn = n('gSL+'),
        rn = n('xHsv'),
        an = n('Oib4'),
        on = n('Dcm7'),
        cn = n('iEUn'),
        ln = n('pwey'),
        sn = n('Lsrn'),
        un = n('k/Ka')
      function dn(e, t) {
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
      function pn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? dn(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : dn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var mn = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(un.a)(
          'svg',
          pn(
            pn({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [sn.a.root, e.style], viewBox: '0 0 24 24' },
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
      mn.metadata = { width: 24, height: 24 }
      var fn = mn
      function gn(e, t) {
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
      function hn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? gn(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : gn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var yn = W.a.fcc839b5,
        bn = W.a.d80964aa,
        vn = W.a.d4f57cce,
        En = W.a.g06d6bf8,
        _n = W.a.c1a1817b,
        wn = W.a.efc9b3fe,
        On = an.a,
        Pn = W.a.h277a2e8,
        Cn = W.a.gd429fea,
        In = on.a,
        Tn = W.a.icb22cdd,
        Sn = W.a.i859a9d3,
        jn = W.a.e974b2d4,
        kn = W.a.b9c9b214,
        xn = W.a.i0e569bf,
        Ln = A.a.create(function (e) {
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
        Dn = {
          label: bn,
          value: en.c.Engagements,
          decoration: b.a.createElement(cn.a, { style: [Ln.icon, Ln.engagementIcon] }),
          testID: Z(en.c.Engagements),
        },
        Rn = {
          label: vn,
          value: en.c.Followers,
          decoration: b.a.createElement(ln.a, { style: [Ln.icon, Ln.followersIcon] }),
          testID: Z(en.c.Followers),
        },
        An = {
          label: En,
          value: en.c.WebsiteClicks,
          decoration: b.a.createElement(fn, { style: [Ln.icon, Ln.websiteClicksIcon] }),
          testID: Z(en.c.WebsiteClicks),
        },
        Bn = [
          { label: bn, description: jn, decoration: b.a.createElement(cn.a, { style: [Ln.icon, Ln.engagementIcon] }) },
          { label: vn, description: kn, decoration: b.a.createElement(ln.a, { style: [Ln.icon, Ln.followersIcon] }) },
          { label: En, description: xn, decoration: b.a.createElement(fn, { style: [Ln.icon, Ln.websiteClicksIcon] }) },
        ]
      function Fn() {
        return b.a.createElement(me.a, { Icon: On, headline: _n, text: wn, type: 'warning' })
      }
      function Mn() {
        return b.a.createElement(me.a, { Icon: In, headline: Pn, text: Cn, type: 'danger' })
      }
      var Nn = Qt(function (e) {
          var t,
            n,
            r,
            a,
            o,
            c,
            i,
            l = e.analytics,
            s = e.history,
            u = e.location,
            d = e.selectedObjective,
            p = e.setObjective,
            m = e.tweet,
            f = m ? tn.a.getOriginalTweet(m) : m,
            g =
              null !=
                (null == f || null === (t = f.entities) || void 0 === t || null === (n = t.media) || void 0 === n
                  ? void 0
                  : n.length) &&
              (null == f || null === (r = f.entities) || void 0 === r || null === (a = r.media) || void 0 === a
                ? void 0
                : a.length) > 0,
            h =
              1 ===
              (null == f || null === (o = f.entities) || void 0 === o || null === (c = o.urls) || void 0 === c
                ? void 0
                : c.length),
            y = !!(
              (null != f && f.in_reply_to_status_id_str) ||
              (null != f && f.in_reply_to_name) ||
              (null != f && f.in_reply_to_screen_name) ||
              (null != f && f.in_reply_to_user_id_str) ||
              (null != f && f.in_reply_to_user)
            )
          b.a.useEffect(function () {
            Object(Ve.p)(l)(Ve.n.goalSelectionPageLoad())
          }, [])
          var v = b.a.useMemo(
              function () {
                return (function (e) {
                  var t = e.selectedObjective,
                    n = e.tweetContainsLinks,
                    r = e.tweetHasMedia,
                    a = e.tweetIsReply
                  return [Dn]
                    .concat(
                      Vt()(a ? [] : [hn(hn({}, Rn), {}, { description: r && t === en.c.Followers ? Fn() : void 0 })]),
                      [hn(hn({}, An), {}, { disabled: !n, description: !n && Mn() })],
                    )
                    .map(function (e) {
                      return hn(
                        hn({}, e),
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
                p(t), Object(Ve.p)(l)(Ve.n.setPromoteGoal(t))
              },
              [l, p],
            )
          return b.a.createElement(
            D.a,
            { style: Ln.qpContainer, testID: K },
            b.a.createElement(q, { screenType: Ve.c.Objective }),
            b.a.createElement(
              D.a,
              { style: Ln.titleContainer },
              b.a.createElement(R.b, { align: 'center', size: 'headline1', weight: 'bold' }, yn),
            ),
            b.a.createElement(
              D.a,
              null,
              b.a.createElement(nn.a, { name: 'objective-picker', onChange: E, options: v, value: d }),
            ),
            b.a.createElement(
              D.a,
              { style: Ln.goalSelectionCallout },
              b.a.createElement(rn.a, {
                description: Tn,
                learnMoreLabel: Sn,
                learnMoreLink: {
                  external: !1,
                  method: 'replace',
                  pathname: u.pathname,
                  state: { showEducationInterstitial: !0 },
                },
              }),
            ),
            null !== (i = u.state) && void 0 !== i && i.showEducationInterstitial
              ? b.a.createElement(Zt, {
                  infoItems: Bn,
                  onClose: function () {
                    return s.replace(u.pathname, { showEducationInterstitial: !1 })
                  },
                  onLoad: function () {
                    return Object(Ve.p)(l)(Ve.n.educationInterstitialLoad())
                  },
                })
              : null,
          )
        }),
        qn = n('ddV6'),
        Hn = n.n(qn),
        zn = function (e) {
          return e.quickPromote.paymentMethods
        },
        Un = Object(O.a)()
          .propsFromState(function () {
            return { paymentMethods: zn, selectedPaymentMethod: C.p }
          })
          .propsFromActions(function () {
            return { setSelectedPaymentMethod: C.Q, deletePaymentMethod: C.b }
          })
          .withAnalytics(Ve.o),
        Vn = n('YeIG'),
        Gn = n('JYMr'),
        Wn = n('cm6r'),
        Qn = n('mjJ+'),
        Xn = n('3rX5'),
        Kn = n('Wms4'),
        Jn = n('IG7M'),
        Yn = n('I4+6'),
        Zn = n('iY63')
      function $n(e, t) {
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
      function er(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $n(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $n(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var tr = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(un.a)(
          'svg',
          er(
            er({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [sn.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.a.createElement(
            'g',
            null,
            b.a.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM10.75 17c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7c0-.414.336-.75.75-.75s.75.336.75.75v7zm4 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7c0-.414.336-.75.75-.75s.75.336.75.75v7zm.746-11.764h-7V4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986z',
            }),
          ),
        )
      }
      tr.metadata = { width: 24, height: 24 }
      var nr = tr,
        rr = W.a.de43b66f,
        ar = W.a.hb4773af,
        or = W.a.aa2a3dd3,
        cr = W.a.b1c5b63c,
        ir = function (e, t) {
          return e.map(function (e) {
            return {
              label: b.a.createElement(lr, {
                deletePaymentMethodHandler: t,
                id: e.id,
                imgSrcUrl: e.imgSrcUrl,
                lastFourDigits: e.lastFourDigits,
                status: e.cardStatus,
              }),
              value: e.id,
              containerStyle: [ur.paymentMethodRadioContainer, ur.bottomBorder],
            }
          })
        },
        lr = function (e) {
          var t = e.deletePaymentMethodHandler
            ? function (t) {
                return b.a.createElement(Qn.a, {
                  items: [
                    {
                      Icon: nr,
                      text: or,
                      onClick: function () {
                        t(), e.deletePaymentMethodHandler && e.deletePaymentMethodHandler(e.id)
                      },
                      isEmphasized: !0,
                    },
                  ],
                  onCloseRequested: t,
                })
              }
            : void 0
          return b.a.createElement(
            D.a,
            { style: ur.paymentMethod },
            b.a.createElement(
              D.a,
              { style: [ur.descriptionItemContainer, e.paymentDescriptionStyle] },
              e.imgSrcUrl
                ? b.a.createElement(
                    D.a,
                    { style: ur.cardImageContainer },
                    b.a.createElement(Xn.a, { source: e.imgSrcUrl, style: ur.cardImage }),
                  )
                : b.a.createElement(R.b, { size: 'body' }, 'Card'),
              b.a.createElement(
                D.a,
                { style: ur.descriptionContainer },
                b.a.createElement(
                  R.b,
                  { color: 'gray700', size: 'subtext1' },
                  ''.concat(cr, ' ').concat(e.lastFourDigits),
                ),
              ),
              'Expired' === e.status &&
                b.a.createElement(
                  D.a,
                  { style: ur.statusBadgeContainer },
                  b.a.createElement(
                    Kn.a,
                    { style: ur.expiredBadge },
                    b.a.createElement(R.b, { size: 'subtext3', style: ur.expiredBadge, weight: 'bold' }, e.status),
                  ),
                ),
            ),
            e.deletePaymentMethodHandler &&
              b.a.createElement(Jn.a, { renderActionMenu: t, style: ur.actionMenuContainer }),
          )
        },
        sr = Yn.a.generate({
          backgroundColor: A.a.theme.colors.transparent,
          color: A.a.theme.colors.primary,
          insetFocusRing: !0,
        }),
        ur = A.a.create(function (e) {
          return {
            qpContainer: { flex: 1, overflow: 'auto' },
            paymentMethod: { flexDirection: 'row', justifyContent: 'space-between' },
            descriptionItemContainer: {
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space8,
              marginLeft: e.spaces.space12,
            },
            statusBadgeContainer: { margin: e.spaces.space2 },
            descriptionContainer: { margin: e.spaces.space2 },
            actionMenuContainer: { marginRight: e.spaces.space16 },
            paymentMethodRadioContainer: {
              flexDirection: 'row-reverse',
              paddingHorizontal: e.spaces.space2,
              paddingVertical: e.spaces.space8,
            },
            bottomBorder: { borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: e.colors.borderColor },
            deleteCardConfirmContainer: { justifyContent: 'flex-end', padding: e.spaces.space8 },
            titleContainer: {
              paddingTop: e.spaces.space32,
              paddingBottom: e.spaces.space20,
              paddingLeft: e.spaces.space20,
            },
            addPaymentMethodContainer: { backgroundColor: e.colors.cellBackground, paddingLeft: e.spaces.space4 },
            addPaymentMethodInteractiveContainer: {
              flexDirection: 'row',
              minHeight: e.spaces.space48,
              paddingVertical: e.spaces.space16,
              paddingLeft: e.spaces.space24,
            },
            plusIcon: { color: e.colors.primary, marginRight: e.spaces.space16 },
            expiredBadge: { backgroundColor: e.colors.red50, color: e.colors.red900 },
            cardImageContainer: { height: '20px', flexDirection: 'row', width: '32px', margin: e.spaces.space2 },
            cardImage: { resizeMode: 'contain', flex: 1 },
          }
        }),
        dr = Un(function (e) {
          var t = e.deletePaymentMethod,
            n = e.history,
            r = e.match.params,
            a = r.quickPromotePlatform,
            o = r.screenName,
            c = r.statusId,
            i = e.paymentMethods,
            l = e.selectedPaymentMethod,
            s = e.setSelectedPaymentMethod,
            u = b.a.useState(!1),
            d = Hn()(u, 2),
            p = d[0],
            m = d[1]
          return b.a.createElement(
            b.a.Fragment,
            null,
            b.a.createElement(
              D.a,
              { style: ur.qpContainer, testID: pe },
              p ? b.a.createElement(Gn.a, { indeterminate: !0 }) : null,
              b.a.createElement(
                D.a,
                { style: ur.titleContainer },
                b.a.createElement(
                  R.b,
                  {
                    accessibilityLevel: 1,
                    accessibilityRole: 'heading',
                    align: 'left',
                    size: 'headline1',
                    weight: 'heavy',
                  },
                  rr,
                ),
              ),
              b.a.createElement(nn.a, {
                disabled: p,
                name: rr,
                onChange: function (e, t) {
                  if (!Object(Vn.a)(i)) {
                    var n =
                      i.find(function (e) {
                        return e.id === t
                      }) || null
                    s(n)
                  }
                },
                options: ir(i, function (e) {
                  e &&
                    (m(!0),
                    t(e).finally(function () {
                      return m(!1)
                    }))
                }),
                value: l ? l.id : '',
              }),
              b.a.createElement(
                D.a,
                { style: ur.addPaymentMethodContainer },
                b.a.createElement(
                  Wn.a,
                  {
                    disabled: p,
                    interactive: p,
                    interactiveStyles: sr,
                    onPress: function () {
                      return n.push(Object(Ve.j)(o, c, a, Ve.c.Payment))
                    },
                    style: ur.addPaymentMethodInteractiveContainer,
                  },
                  b.a.createElement(Zn.a, { style: ur.plusIcon }),
                  b.a.createElement(R.b, { align: 'left', color: 'primary' }, ar),
                ),
              ),
            ),
          )
        }),
        pr = (n('ho0z'), n('zh9S')),
        mr = n('y0iL'),
        fr = function (e, t) {
          return t.match.params.statusId
        },
        gr = function (e, t) {
          return rt.a.selectHydrated(e, fr(0, t))
        },
        hr = function (e, t) {
          return rt.a.selectFetchStatus(e, fr(0, t))
        },
        yr = function (e, t) {
          return e.quickPromote.account.adsAccount
        },
        br = function (e, t) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        vr = Object(O.a)()
          .propsFromState(function () {
            return { fetchStatus: hr, tweet: gr, adsAccount: yr, fundingInstrument: br }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_PAYMENT_SCREEN',
              ),
              fetchTweetIfNeeded: rt.a.fetchOneIfNeeded,
              scribeAction: pr.c,
              savePlatformRedirectBackState: function () {
                return Object(mr.l)(e.match.params.quickPromotePlatform)
              },
              fetchAdsAccountDataIfNeeded: mr.d,
            }
          })
          .withAnalytics(Ve.o),
        Er = n('tI3i'),
        _r = n.n(Er),
        wr = n('Rp9C'),
        Or = n('bPFD')
      function Pr(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Cr = (function (e) {
        u()(n, e)
        var t = Pr(n)
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
                  var o = (a && tn.a.getOriginalTweet(a)) || void 0,
                    c = o ? [wr.a.getTweetItem(o)] : [],
                    i = t.scribeData || {},
                    l = 'string' == typeof i.component ? i.component : 'quick_promote',
                    s = 'string' == typeof i.uiEvent ? i.uiEvent : ''
                  r.scribe({ component: l, action: s, data: { items: c } })
                } else if ('navigation' === t.type) {
                  var u = e.props,
                    d = u.createLocalApiErrorHandler,
                    p = u.fetchAdsAccountDataIfNeeded,
                    m = u.history,
                    f = u.match.params,
                    g = f.quickPromotePlatform,
                    h = f.screenName,
                    y = f.statusId
                  _r()(!!e.context.loggedInUserId, 'loggedInUserId must be defined'),
                    p(e.context.loggedInUserId, !0).catch(d()),
                    m.push('/'.concat(h, '/status/').concat(y, '/').concat(g, '/').concat(Ve.c.Review))
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
                var s = Object(Ve.i)(i, t, l, r)
                Object(Ve.p)(n)(Ve.n.paymentPageLoad(s.url)), s.isSameHost || (window.location.href = s.url)
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
                  c = Object(Ve.i)(a, t, o, n)
                return c.isSameHost
                  ? b.a.createElement(
                      b.a.Fragment,
                      null,
                      b.a.createElement(q, { screenType: Ve.c.Payment }),
                      b.a.createElement(Or.a, {
                        dangerouslyDisableSandbox: !0,
                        onMessage: this._handleIFrameMessage,
                        reportError: ye.a,
                        src: c.url,
                        style: Ir.iframe,
                      }),
                    )
                  : null
              },
            },
          ]),
          n
        )
      })(b.a.PureComponent)
      h()(Cr, 'contextType', ge.a)
      var Ir = A.a.create(function (e) {
          return { iframe: { flexGrow: 1, paddingTop: 0 } }
        }),
        Tr = vr(Cr)
      function Sr(e) {
        new Image().src = e
      }
      function jr() {
        return b.a.createElement(Lt.a, null, function (e) {
          e.windowHeight
          return Sr(e.windowWidth > A.a.theme.breakpoints.medium ? It : kt), null
        })
      }
      var kr = n('0zXz'),
        xr = function (e) {
          return e.quickPromote.objective
        },
        Lr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Dr = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Rr = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        Ar = function (e, t) {
          return e.quickPromote.budget.dailyBudget
        },
        Br = function (e, t) {
          return e.quickPromote.budget.durationDays
        },
        Fr = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        Mr = function (e) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        Nr = function (e) {
          return e.quickPromote.account.vatInfo
        },
        qr = function (e) {
          return e.quickPromote.account.adsAccount
        },
        Hr = function (e) {
          return e.quickPromote.promoteStatus
        },
        zr = function (e) {
          return e.quickPromote.promoteErrorCode
        },
        Ur = function (e) {
          return e.quickPromote.coupons
        },
        Vr = function (e) {
          return e.quickPromote.enrollCouponErrorCode
        },
        Gr = Object(O.a)()
          .propsFromState(function () {
            return {
              objective: xr,
              targetedLocations: Lr,
              ageBucket: Dr,
              gender: Rr,
              dailyBudget: Ar,
              durationDays: Br,
              lang: w.o,
              country: C.q,
              currency: Fr,
              fundingInstrument: Mr,
              vatInfo: Nr,
              adsAccount: qr,
              promoteStatus: Hr,
              promoteErrorCode: zr,
              coupons: Ur,
              enrollCouponErrorCode: Vr,
              selectedPaymentMethod: C.p,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_REVIEW_SCREEN',
              ),
              clearPersistedRedirectBackState: function () {
                return Object(C.n)()
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
                  return Object(C.a)(n, o, c, a, e)
                }),
              enrollCoupon: C.c,
            }
            var t, n, r
          })
          .withAnalytics(Ve.o),
        Wr = n('csss'),
        Qr = n('/yvb'),
        Xr = n('shC7')
      function Kr(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Jr = W.a.c3c57e3e,
        Yr = W.a.h06724b4,
        Zr = W.a.a96f811e,
        $r = W.a.b069d89c,
        ea = W.a.a3a09d48,
        ta = W.a.fbd44e96,
        na = W.a.e36bce63,
        ra = W.a.c602f5b8,
        aa = W.a.ia83756b,
        oa = W.a.cc217a04,
        ca = W.a.c602f5b8,
        ia = W.a.g4f2b588,
        la = W.a.i41612d9,
        sa = W.a.cdae1af0,
        ua = W.a.ed8bb5af,
        da = W.a.fc640c20,
        pa = W.a.be2dc078,
        ma = W.a.iaefd4de,
        fa = W.a.e5e42640,
        ga = W.a.da2805d1,
        ha = W.a.ef4602eb,
        ya = W.a.a4db098b,
        ba = W.a.ef7e3916,
        va = (function (e) {
          u()(n, e)
          var t = Kr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_getPaymentDescription', function (t, n) {
                var r = e.props.adsAccount
                return r && r.timezone && r.country_code ? (t ? sa : n ? da : ua) : n ? ma : pa
              }),
              h()(l()(e), '_handlePromote', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createPromotion
                Object(Ve.p)(n)(Ve.n.promotionClick()), r(n)
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
                if (!n) return r === nt.a.LOADED ? ga : null
                switch (n) {
                  case 'MissingFundingInstrument':
                  case 'InvalidPaymentMethod':
                    return ba
                  case 'CampaignCreationFailed':
                  case 'PromotionIneligible':
                    return ya
                  default:
                    return ha
                }
              }),
              h()(l()(e), '_getCouponErrorMessage', function () {
                var t = e.props.enrollCouponErrorCode
                if (!t) return null
                switch (t) {
                  case 'AccountIneligible':
                  case 'MissingAdsAccount':
                  default:
                    return fa
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
                    r = e.fundingInstrument,
                    a = e.selectedPaymentMethod,
                    o = this.context.featureSwitches.isTrue('responsive_web_qp_payment_select_enabled')
                  n()
                  var c = o ? !!a : !!r
                  Object(Ve.p)(t)(Ve.n.reviewPageLoad({ hasFundingInstrument: c })), this._handleEnrollCoupon()
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
                    s = r.durationDays,
                    u = r.fundingInstrument,
                    d = r.gender,
                    p = r.lang,
                    m = r.match,
                    f = r.objective,
                    g = r.promoteStatus,
                    h = r.selectedPaymentMethod,
                    y = r.targetedLocations,
                    E = r.vatInfo,
                    _ = this.context.featureSwitches.isTrue('responsive_web_qp_payment_select_enabled'),
                    w =
                      ((e = en.e[a]),
                      (t = e.maxAge),
                      (n = e.minAge),
                      t ? _e({ minAge: n, maxAge: t }) : we({ minAge: n })),
                    O = (function (e) {
                      switch (e) {
                        case 'Engagements':
                          return Re
                        case 'Followers':
                          return Ae
                        case 'WebsiteClicks':
                          return Be
                        default:
                          throw v()
                      }
                    })(f),
                    P = (function (e) {
                      var t = e.formattedAge,
                        n = e.gender,
                        r = e.locations,
                        a = r.length
                      return Ce({
                        newlinePlaceholder: '\n',
                        locations: Object(he.a)(r),
                        locationsHeading: ze({ numLocations: a }),
                        formattedAge: t,
                        gender: n,
                      })
                    })({
                      locations: y.map(function (e) {
                        return e.localized_name
                      }),
                      formattedAge: w,
                      gender: Fe(d),
                    }),
                    I = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled'),
                    T = I
                      ? He({ dailyBudgetNum: l, durationDays: s, lang: p, currency: i })
                      : qe({ totalBudgetNum: l * s, durationDays: s, lang: p, currency: i }),
                    S =
                      u && null != c && c.existing_balance.length
                        ? c.existing_balance.find(function (e) {
                            return e.currency_code === u.currency
                          })
                        : null,
                    j = S ? '' : Ne({ amount: l * s, lang: p, currency: i }),
                    k = m.params,
                    x = k.quickPromotePlatform,
                    L = k.screenName,
                    A = k.statusId,
                    F = this._getPromoteErrorMessage(),
                    M = this._getCouponErrorMessage(),
                    N = this.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                    H = E && null === E.tax_id && null === E.tax_exemption_id && 'NOT_SET' === E.tax_category,
                    V = _ ? !!h : !!u,
                    G = !(null == c || !c.eligible_coupon)
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    b.a.createElement(q, { screenType: Ve.c.Review }),
                    b.a.createElement(
                      D.a,
                      { style: _a.qpContainer, testID: te },
                      F &&
                        b.a.createElement(
                          D.a,
                          { style: _a.gutter },
                          b.a.createElement(me.a, { text: F, type: 'danger' }),
                        ),
                      M &&
                        b.a.createElement(
                          D.a,
                          { style: _a.gutter },
                          b.a.createElement(me.a, { text: M, type: 'warning' }),
                        ),
                      b.a.createElement(U, { subtitle: Yr, title: Jr }),
                      N &&
                        b.a.createElement(B, {
                          description: O,
                          descriptionTestID: re,
                          label: Zr,
                          withBottomBorder: !1,
                        }),
                      b.a.createElement(B, { description: P, descriptionTestID: ae, label: $r, withBottomBorder: !1 }),
                      b.a.createElement(B, {
                        description: T,
                        descriptionDir: Xr.a.getConstants().isRTL ? 'rtl' : 'ltr',
                        descriptionTestID: oe,
                        label: I ? ta : ea,
                        withBottomBorder: !1,
                      }),
                      _
                        ? b.a.createElement(Wr.a, {
                            description:
                              h && !H
                                ? b.a.createElement(lr, {
                                    id: h.id,
                                    imgSrcUrl: h.imgSrcUrl,
                                    lastFourDigits: h.lastFourDigits,
                                    paymentDescriptionStyle: _a.paymentDescription,
                                    status: h.cardStatus,
                                  })
                                : b.a.createElement(
                                    R.b,
                                    { color: 'primary', size: 'subtext2' },
                                    this._getPaymentDescription(V, G),
                                  ),
                            label: b.a.createElement(R.b, { weight: 'bold' }, na),
                            link:
                              !h || H ? Object(Ve.j)(L, A, x, Ve.c.Payment) : Object(Ve.j)(L, A, x, Ve.c.PaymentSelect),
                            testID: ce,
                          })
                        : b.a.createElement(Wr.a, {
                            description:
                              u && !H
                                ? u.description
                                : b.a.createElement(
                                    R.b,
                                    { color: 'primary', size: 'subtext2' },
                                    this._getPaymentDescription(V, G),
                                  ),
                            label: b.a.createElement(R.b, { weight: 'bold' }, na),
                            link: !u || H ? Object(Ve.j)(L, A, x, Ve.c.Payment) : void 0,
                            testID: ce,
                          }),
                      I
                        ? b.a.createElement(
                            B,
                            { description: j, descriptionTestID: ie, label: ra, withBottomBorder: !1 },
                            S
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
                                      D.a,
                                      { style: _a.promotionTotalRow },
                                      b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, aa),
                                      b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, o),
                                    ),
                                    b.a.createElement(
                                      D.a,
                                      { style: _a.promotionTotalRow },
                                      b.a.createElement(R.b, { color: 'blue500', size: 'subtext2' }, oa),
                                      b.a.createElement(R.b, { color: 'blue500', size: 'subtext2' }, '-', c),
                                    ),
                                    b.a.createElement(
                                      D.a,
                                      { style: _a.promotionTotalRow },
                                      b.a.createElement(
                                        R.b,
                                        { color: 'gray700', size: 'subtext2', weight: 'bold' },
                                        ca,
                                      ),
                                      b.a.createElement(
                                        R.b,
                                        { color: 'gray700', size: 'subtext2', testID: ie, weight: 'bold' },
                                        i,
                                      ),
                                    ),
                                    l &&
                                      b.a.createElement(
                                        D.a,
                                        { style: _a.promotionTotalRow },
                                        b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, ia),
                                        b.a.createElement(R.b, { color: 'gray700', size: 'subtext2' }, l),
                                      ),
                                  )
                                })({ subtotal: l * s, balance: S.total_amount || 0, currency: i, lang: p })
                              : null,
                          )
                        : null,
                    ),
                    b.a.createElement(
                      D.a,
                      { style: _a.bottomElements },
                      b.a.createElement(
                        Qr.a,
                        {
                          disabled: !u || H || C.X.includes(g),
                          onPress: this._handlePromote,
                          size: 'xLarge',
                          testID: ne,
                          type: 'brandFilled',
                        },
                        la,
                      ),
                      b.a.createElement(
                        z.a,
                        { style: _a.terms },
                        (function (e, t) {
                          return t
                            ? b.a.createElement(
                                W.a.I18NFormatMessage,
                                { $i18n: 'cace9784' },
                                b.a.createElement(R.b, { link: Object(Ve.k)(e) }, W.a.acff74af),
                                b.a.createElement(R.b, { link: Object(Ve.g)(e) }, W.a.cb8d4ace),
                              )
                            : b.a.createElement(
                                W.a.I18NFormatMessage,
                                { $i18n: 'c99d7100' },
                                b.a.createElement(R.b, { link: Object(Ve.k)(e) }, W.a.d56b5ac3),
                              )
                        })(o, !!S),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()(va, 'contextType', ge.a)
      var Ea,
        _a = A.a.create(function (e) {
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
            paymentDescription: {
              flexDirection: 'row',
              marginLeft: void 0,
              marginVertical: void 0,
              backgroundColor: void 0,
            },
          }
        }),
        wa = Gr(va),
        Oa = n('Ty5D'),
        Pa =
          (n('yH/f'),
          n('7xRU'),
          function (e, t) {
            var n = Ia(e, t)
            return e.ads.typeahead.targetingLocation[n]
          }),
        Ca = function (e, t) {
          var n,
            r = Ia(e, t)
          return null === (n = e.ads.typeahead.targetingLocation[r]) || void 0 === n ? void 0 : n.fetchStatus
        },
        Ia = function (e, t) {
          return e.quickPromote.targeting.locationQuery
        },
        Ta = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Sa = function (e, t) {
          return e.quickPromote.account.campaigns
        },
        ja = Object(O.a)()
          .propsFromState(function () {
            return {
              targetingLocationQuery: Ia,
              targetingLocations: Pa,
              targetedLocations: Ta,
              fetchStatus: Ca,
              userCountry: w.y,
              campaigns: Sa,
            }
          })
          .propsFromActions(function () {
            return {
              setTargetedLocations: C.T,
              setAndFetchTargetingLocationQuery: C.v,
              setTargetingLocationQuery: C.V,
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_TARGETING_LOCATION_SCREEN',
              ),
            }
          })
          .withAnalytics(Ve.o),
        ka = n('VwDm'),
        xa = n('G1WX'),
        La = n('cCdp'),
        Da = n('xKuM'),
        Ra = n('5Vk4'),
        Aa = n('6OUF'),
        Ba = n('zrOZ'),
        Fa = n('kevv')
      function Ma(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Na = W.a.cc642518,
        qa = W.a.i0e8c3c6,
        Ha = W.a.deaf5b15,
        za = W.a.f69ad048,
        Ua = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
        Va = Object.freeze(
          ((Ea = {}), h()(Ea, Ve.e.CurrentCountryMatch, 0), h()(Ea, Ve.e.Match, 1), h()(Ea, Ve.e.NoMatch, 2), Ea),
        ),
        Ga = (function (e) {
          u()(n, e)
          var t = Ma(n)
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
                  Wa,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: r,
                  },
                  b.a.createElement(D.a, null, b.a.createElement(R.b, { style: Qa.headingText, weight: 'heavy' }, qa)),
                  b.a.createElement(xa.a, { fetchStatus: n, render: e._renderSearchList, retryMessage: Ha }),
                )
              }),
              h()(l()(e), '_handleClear', function () {
                ;(0, e.props.setTargetingLocationQuery)('')
              }),
              h()(l()(e), '_renderSearchList', function () {
                var t = e.props.targetedLocations,
                  n = Object(Ba.a)(
                    t.map(function (e) {
                      return e.targeting_value
                    }),
                  ),
                  r = e._getTargetingLocationOptions()
                return b.a.createElement(
                  D.a,
                  { style: Qa.overflow },
                  r.map(function (t) {
                    var r = t.localized_name,
                      a = t.location_type,
                      o = t.targeting_value
                    return b.a.createElement(La.a, {
                      checked: n.has(o),
                      helpText: Me(a),
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
                  s = Object(Ve.h)(i || 'US'),
                  u = l.filter(function (e) {
                    var t = e.country_code,
                      n = e.localized_name
                    return s(n, t, o) !== Ve.e.NoMatch
                  })
                return Object(Fa.a)(
                  u,
                  [
                    function (e) {
                      var t = e.country_code,
                        n = e.localized_name,
                        r = s(n, t, o)
                      return Va[r]
                    },
                    function (e) {
                      e.localized_name
                      var t,
                        n = e.location_type
                      return null !== (t = Ua[n]) && void 0 !== t
                        ? t
                        : (function (e) {
                            Object(ye.a)(
                              'Quick Promote: Unknown location type: '
                                .concat(e, '. Expected one of {')
                                .concat(Object.keys(Ua).join(', '), '}'),
                            )
                          })(n) || Object.keys(Ua).length
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
                    ? (Object(Ve.p)(a)(
                        Ve.n.setTargetingLocation({
                          id: i.targeting_value,
                          locationType: i.location_type,
                          countryCode: i.country_code,
                        }),
                      ),
                      o([i]),
                      e._handleGoBack())
                    : Object(ye.a)('Quick Promote: could not find "'.concat(t, '" in list of targeting options'))
                } else Object(Ve.p)(a)(Ve.n.targetingLocationError()), e.setState({ errorMessage: za })
                c('')
              }),
              h()(l()(e), '_renderSelected', function () {
                var t = e.props,
                  n = t.targetedLocations,
                  r = t.targetingLocationQuery,
                  a = e.state.errorMessage
                return b.a.createElement(
                  Wa,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: r,
                  },
                  b.a.createElement(
                    D.a,
                    null,
                    a &&
                      b.a.createElement(
                        D.a,
                        { style: Qa.gutter },
                        b.a.createElement(me.a, { text: a, type: 'danger' }),
                      ),
                    b.a.createElement(R.b, { style: Qa.headingText, weight: 'heavy' }, ze({ numLocations: n.length })),
                  ),
                  b.a.createElement(
                    D.a,
                    null,
                    n.map(function (t) {
                      var n = t.localized_name,
                        r = t.location_type,
                        a = t.targeting_value
                      return b.a.createElement(La.a, {
                        checked: !0,
                        helpText: Me(r),
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
                  n = t.campaigns,
                  r = t.history,
                  a = t.location,
                  o = t.match.params,
                  c = o.quickPromotePlatform,
                  i = o.quickPromoteScreenName,
                  l = o.screenName,
                  s = o.statusId,
                  u = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                  d =
                    e.context.featureSwitches.isTrue('responsive_web_qp_intro_experiment_enabled') &&
                    !(null == n || !n.length)
                Object(Ve.m)(r, a)(l, s, c, i, u, d)
              }),
              h()(l()(e), '_handleTargetingLocationChange', function (t) {
                var n = t.target.value,
                  r = e.props,
                  a = r.analytics,
                  o = r.createLocalApiErrorHandler,
                  c = r.setAndFetchTargetingLocationQuery
                Object(Ve.p)(a)(Ve.n.targetingLocationSearch(n)), c(n).catch(o())
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
                  Object(Ve.p)(e)(Ve.n.targetingLocationPageLoad())
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
                    b.a.createElement(q, { screenType: Ve.c.TargetingLocation }),
                    e ? this._renderSearch() : this._renderSelected(),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()(Ga, 'contextType', ge.a)
      var Wa = function (e) {
          var t = e.children,
            n = e.onBack,
            r = e.onChange,
            a = e.onClear,
            o = e.targetingLocationQuery
          return b.a.createElement(
            D.a,
            { style: Qa.qpContainer, testID: $ },
            b.a.createElement(Da.a, {
              leftControl: b.a.createElement(Ra.a, { onClick: n }),
              middleControl: b.a.createElement(Aa.a, {
                Icon: ka.a,
                autoFocus: !0,
                name: 'locationTargetingInput',
                onChange: r,
                onClear: a,
                placeholder: Na,
                style: Qa.input,
                testID: ue,
                value: o,
                withClearButton: !0,
              }),
            }),
            t,
          )
        },
        Qa = A.a.create(function (e) {
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
        Xa = ja(Ga),
        Ka = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Ja = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        Ya = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Za = Object(O.a)()
          .propsFromState(function () {
            return { targetedLocations: Ka, selectedGender: Ja, selectedAgeBucket: Ya }
          })
          .propsFromActions(function () {
            return { setTargetedAgeBucket: C.R, setTargetedGender: C.S }
          })
          .withAnalytics(Ve.o),
        $a = n('JiIh'),
        eo = n('fyvP'),
        to = n('J4ZH'),
        no = n('tn7R'),
        ro = n('mN6z')
      function ao(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var oo = W.a.hba1d105,
        co = W.a.cba0133d,
        io = W.a.e1efbead,
        lo = W.a.c6ff7c1f,
        so = W.a.b555fb45,
        uo = W.a.a8d0108d,
        po = [en.b.Any, en.b.Female, en.b.Male].map(function (e) {
          return { label: Fe(e), value: e, testID: Y(e) }
        }),
        mo = W.a.j2c03e12,
        fo = ['13', '18', '21', '25', '35', '50'],
        go = [void 0, void 0, void 0, '24', '34', '49', '54'],
        ho = Object(to.a)(Object(no.a)(en.e), function (e) {
          return e.maxAge || 'over'
        }),
        yo = go.length
      function bo(e, t) {
        var n
        if (e && t) return null === (n = en.d[e]) || void 0 === n ? void 0 : n[t]
      }
      var vo = (function (e) {
        u()(n, e)
        var t = ao(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            h()(l()(e), '_handleGenderChange', function (t, n) {
              var r = e.props,
                a = r.analytics
              ;(0, r.setTargetedGender)(n), Object(Ve.p)(a)(Ve.n.setTargetingGender(n))
            }),
            h()(l()(e), '_handleAgeBucketChange', function (t, n) {
              var r = Hn()(t, 2),
                a = r[0],
                o = r[1],
                c = e.props,
                i = c.analytics,
                l = c.selectedAgeBucket,
                s = c.setTargetedAgeBucket,
                u = e._sliderValueFromSelectedAgeBucket(l)
              if (!Object(ro.a)(u, [a, o]))
                if (n) {
                  var d = fo[a]
                  if (!d) return
                  var p = bo(d, o === yo ? 'over' : go[o])
                  if (p) Object(Ve.p)(i)(Ve.n.setTargetingAgeBucket(p)), s(p)
                  else {
                    var m = Object.keys(en.d[d])[0]
                    e._setAgeBucket({ minAge: d, maxAge: m })
                  }
                } else {
                  var f = o === yo ? 'over' : go[o]
                  if (!f) return
                  var g = bo(fo[a], f)
                  if (g) Object(Ve.p)(i)(Ve.n.setTargetingAgeBucket(g)), s(g)
                  else {
                    var h = ho[f].slice(-1)[0].minAge
                    e._setAgeBucket({ minAge: h, maxAge: f })
                  }
                }
            }),
            h()(l()(e), '_setAgeBucket', function (t) {
              var n = t.maxAge,
                r = t.minAge,
                a = e.props,
                o = a.analytics,
                c = a.setTargetedAgeBucket,
                i = en.d[r][n || 'over']
              if (!i)
                throw new Error(
                  'Age bucket not found for minAge: "'.concat(r, '", maxAge: "').concat(n || '<empty>', '"'),
                )
              Object(Ve.p)(o)(Ve.n.setTargetingAgeBucket(i)), c(i)
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
                Object(Ve.p)(e)(Ve.n.targetingPageLoad())
              },
            },
            {
              key: '_sliderValueFromSelectedAgeBucket',
              value: function (e) {
                var t = en.e[e],
                  n = t.maxAge,
                  r = t.minAge
                return [fo.indexOf(r), n ? go.indexOf(n) : yo]
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
                  s = ze({ numLocations: a.length }),
                  u = en.e[n],
                  d = u.maxAge,
                  p = u.minAge,
                  m = this._sliderValueFromSelectedAgeBucket(n),
                  f = d || mo
                return b.a.createElement(
                  D.a,
                  { style: Eo.qpContainer, testID: J },
                  b.a.createElement(q, { screenType: Ve.c.Targeting }),
                  b.a.createElement(U, { subtitle: co, title: oo }),
                  b.a.createElement(Wr.a, {
                    description: Object(he.a)(
                      a.map(function (e) {
                        return e.localized_name
                      }),
                    ),
                    label: b.a.createElement(R.b, { weight: 'bold' }, s),
                    link: Object(Ve.j)(i, l, c, Ve.c.TargetingLocation),
                    testID: le,
                  }),
                  b.a.createElement(
                    B,
                    { label: io },
                    b.a.createElement(
                      D.a,
                      { style: Eo.ageRangeSlider },
                      b.a.createElement($a.a, {
                        endThumbAccessibilityLabel: so,
                        endThumbAccessibilityLabelValueText: '"'.concat(f, '"'),
                        endThumbLabel: f,
                        max: yo,
                        min: 0,
                        onChange: this._handleAgeBucketChange,
                        startThumbAccessibilityLabel: lo,
                        startThumbAccessibilityLabelValueText: '"'.concat(p, '"'),
                        startThumbLabel: p,
                        value: m,
                      }),
                    ),
                  ),
                  b.a.createElement(
                    B,
                    { label: uo, withBottomBorder: !1 },
                    b.a.createElement(
                      D.a,
                      { style: Eo.genderSelection },
                      b.a.createElement(eo.a, {
                        name: 'gender',
                        onChange: this._handleGenderChange,
                        options: po,
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
      h()(vo, 'contextType', ge.a)
      var Eo = A.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            genderSelection: { marginTop: e.spaces.space4 },
            ageRangeSlider: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        _o = Za(vo),
        wo = n('q9Zt')
      function Oo(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Po = W.a.a065172e,
        Co = W.a.cfcdb4a1,
        Io = W.a.dcfb0332,
        To = W.a.c1df579e,
        So = (function (e) {
          u()(n, e)
          var t = Oo(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', { isLoaded: !1 }),
              h()(l()(e), '_getRetweetOrTweet', function () {
                var t = e.props.tweet
                return t ? tn.a.getOriginalTweet(t) : t
              }),
              h()(l()(e), '_render', function () {
                var t = e.props.history,
                  n = e._getRetweetOrTweet()
                return !n || (n && n.user.id_str !== e.context.loggedInUserId)
                  ? b.a.createElement(
                      _t.b,
                      { history: t, onBackClick: e._handleGoBack, title: Io },
                      b.a.createElement(wo.a, { onRetry: null, title: Po }),
                    )
                  : e._renderPage()
              }),
              h()(l()(e), '_renderHeader', kr.a),
              h()(l()(e), '_renderPage', function () {
                var t = e.props,
                  n = t.history,
                  r = t.match,
                  a = t.promoteErrorCode,
                  o = t.promoteFetchStatus,
                  c = r.params,
                  i = c.quickPromotePlatform,
                  l = c.quickPromoteScreenName,
                  s = c.screenName,
                  u = c.statusId,
                  d = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                  p = e.context.featureSwitches.isTrue('responsive_web_qp_payment_select_enabled'),
                  m = d ? Ve.d : Ve.b,
                  f = function (e) {
                    return Object(Ve.j)(s, u, i, e)
                  }
                switch (l) {
                  case 'intro':
                    return e._renderSplashPage()
                  case 'objective':
                    if (d) {
                      var g = f(Ve.c.Targeting)
                      return e._renderProgressPage(Ve.d.Objective, g)
                    }
                    n.replace(Object(Ve.j)(s, u, i, Ve.c.Targeting))
                    break
                  case 'targeting':
                    var h = f(Ve.c.BudgetSelect)
                    return e._renderProgressPage(m.Targeting, h)
                  case 'budget_select':
                    var y = f(Ve.c.Review)
                    return e._renderProgressPage(m.BudgetSelect, y)
                  case 'review':
                    var b = [nt.a.LOADING, nt.a.LOADED].includes(o) && !a
                    return e._renderProgressPage(b ? m.Finish : m.Review)
                  case 'payment':
                    return e._renderProgressPage(m.Review)
                  case 'targeting_location':
                    return e._renderPopupPage()
                  case 'payment_select':
                    return p || n.replace(Object(Ve.j)(s, u, i, Ve.c.Review)), e._renderNavigationPage()
                  case 'done':
                    return e._renderSplashPage()
                  default:
                    throw v()
                }
              }),
              h()(l()(e), '_renderProgressPage', function (t, n) {
                var r = e.props.history
                return b.a.createElement(
                  _t.b,
                  { documentTitle: Io, history: r, renderHeader: e._renderHeader },
                  b.a.createElement(Da.a, {
                    leftControl: b.a.createElement(Ra.a, { autofocus: !0, onClick: e._handleGoBack, testID: se }),
                    rightControl: n && b.a.createElement(Qr.a, { link: n, testID: X, type: 'brandText' }, To),
                  }),
                  b.a.createElement(Gn.a, { progress: t, style: jo.progressBar }),
                  b.a.createElement(D.a, { style: jo.noScrollView }, e._renderRoutes()),
                )
              }),
              h()(l()(e), '_renderNavigationPage', function () {
                var t = e.props.history
                return b.a.createElement(
                  _t.b,
                  { documentTitle: Io, history: t, renderHeader: e._renderHeader },
                  b.a.createElement(Da.a, {
                    leftControl: b.a.createElement(Ra.a, { autofocus: !0, onClick: e._handleGoBack, testID: se }),
                  }),
                  b.a.createElement(D.a, { style: jo.noScrollView }, e._renderRoutes()),
                )
              }),
              h()(l()(e), '_renderPopupPage', function () {
                var t = e.props.history
                return b.a.createElement(
                  _t.b,
                  { documentTitle: Io, history: t, renderHeader: e._renderHeader },
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
                    return b.a.createElement(Oa.c, { component: zt })
                  case 'objective':
                    return b.a.createElement(Oa.c, { component: Nn })
                  case 'targeting':
                    return b.a.createElement(Oa.c, { component: _o })
                  case 'targeting_location':
                    return b.a.createElement(Oa.c, { component: Xa })
                  case 'budget_select':
                    return b.a.createElement(Oa.c, { component: tt })
                  case 'review':
                    return b.a.createElement(Oa.c, { component: wa })
                  case 'payment':
                    return b.a.createElement(Oa.c, { component: Tr })
                  case 'payment_select':
                    return b.a.createElement(Oa.c, { component: dr })
                  case 'done':
                    return b.a.createElement(Oa.c, { component: bt })
                  default:
                    throw v()
                }
              }),
              h()(l()(e), '_handleGoBack', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.campaigns,
                  a = t.history,
                  o = t.location,
                  c = t.match.params,
                  i = c.quickPromotePlatform,
                  l = c.quickPromoteScreenName,
                  s = c.screenName,
                  u = c.statusId,
                  d = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                  p =
                    e.context.featureSwitches.isTrue('responsive_web_qp_intro_experiment_enabled') &&
                    !(null == r || !r.length)
                Object(Ve.p)(n)(Ve.n.back(l)), Object(Ve.m)(a, o)(s, u, i, l, d, p)
              }),
              h()(l()(e), '_handleRequestRetry', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.match.params.quickPromoteScreenName
                Object(Ve.p)(n)(Ve.n.reload(r)), window.location.reload()
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
                    l = t.fetchPaymentMethods,
                    s = t.fetchQuickPromoteEligibilityIfNeeded,
                    u = t.fetchTweetIfNeeded,
                    d = t.match,
                    p = t.promoteFetchStatus,
                    m = t.setPromoteFetchStatus,
                    f = t.statusId,
                    g = d.params.quickPromoteScreenName,
                    h = this.context.loggedInUserId,
                    y = this.context.featureSwitches.isTrue('responsive_web_qp_payment_select_enabled')
                  return h
                    ? (nt.a.LOADED === p && g !== Ve.c.Done && m(nt.a.NONE),
                      Object(N.b)(
                        'initial-load',
                        Promise.all([u(f), i(), a(h), c(), s({ statusId: f }), y ? l() : Promise.resolve()])
                          .then(function () {
                            return o()
                          })
                          .then(function () {
                            return (0, e.props.handleFirstLoad)()
                          }),
                      )
                        .catch(function (e) {
                          r(Et.a)(e), Object(Ve.p)(n)(Ve.n.pageLoadFail(e.message))
                        })
                        .finally(function () {
                          e.setState({ isLoaded: !0 })
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
                  if (!this.context.loggedInUserId) return this._render()
                  var r = Object(nt.d)(t, this.state.isLoaded ? nt.a.LOADED : nt.a.LOADING)
                  return r !== nt.a.LOADED
                    ? b.a.createElement(
                        _t.b,
                        { documentTitle: Io, history: n, renderHeader: this._renderHeader },
                        b.a.createElement(jr, null),
                        b.a.createElement(vt.a, {
                          fetchStatus: r,
                          onRequestRetry: this._handleRequestRetry,
                          render: this._render,
                          retryMessage: Co,
                        }),
                      )
                    : b.a.createElement(vt.a, {
                        fetchStatus: r,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._render,
                        retryMessage: Co,
                      })
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      h()(So, 'contextType', ge.a)
      var jo = A.a.create(function (e) {
          return { progressBar: { backgroundColor: e.colors.gray50 }, noScrollView: { overflowX: 'hidden', flex: 1 } }
        }),
        ko = ut(So)
      t.default = ko
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
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        m = n('AuHH'),
        f = n.n(m),
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
        C = n('x5Pi'),
        I = n('8Lfv'),
        T = n('QK5w'),
        S = n('eSoz'),
        j = n('RqPI'),
        k = n('9D1O'),
        x = n('pNZL'),
        L = n('XOJV'),
        D = n('G6rE'),
        R = n('rxPX'),
        A = n('0KEI'),
        B = n('Mx3A'),
        F = function (e, t) {
          return e.location && e.location.state && e.location.state[t]
        },
        M = function (e, t) {
          return 'PUSH' === t.history.action
        },
        N = function (e, t) {
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
        V = function (e, t) {
          return F(t, 'contextTweetId')
        },
        G = function (e, t) {
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
            r = N(e, t)
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
          return L.a.selectHydrated(e, N(e, t))
        },
        Y = function (e, t) {
          var n = N(e, t),
            r = L.a.selectHydrated(e, n)
          return r && r.conversation_id_str ? L.a.selectHydrated(e, r.conversation_id_str) : null
        },
        Z = function (e, t) {
          return L.a.selectFetchStatus(e, N(e, t))
        },
        $ = function (e, t) {
          return t.location.query && 'string' == typeof t.location.query.cxt ? t.location.query.cxt : void 0
        }
      function ee(e, t) {
        var n = J(e, t),
          r = n ? Object(S.g)(e, n) : void 0
        return n && r ? Object(C.c)(n, r) : void 0
      }
      var te = Object(R.a)()
          .propsFromState(function () {
            return {
              communitySocialContextOfFocalTweet: ee,
              contextTweetId: V,
              contextualClientEventInfo: Q,
              focalTweet: J,
              initialFetchStatus: Z,
              isForwardNavigation: M,
              isReferralSource: K,
              isReferredFromExploreTopics: X,
              userLanguage: j.o,
              loggedInUser: D.e.selectLoggedInUser,
              overflowCount: W,
              promotedContent: G,
              richLandingContextId: $,
              rootTweet: Y,
              screenName: H,
              selectedTweetId: q,
              socialContext: z,
              startLocation: k.t,
              statusId: N,
              topicFollowPrompt: U,
              tweetDetailNav: x.a,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('CONVERSATION_SCREEN'),
              clearTimelineCache: function (e, t) {
                return Object(I.a)(e, t)
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
        se = n.n(le),
        ue = (n('JtPf'), n('87if'), n('zb92')),
        de = Object(ue.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(7), n.e(185)]).then(n.bind(null, 'uo3S'))
          },
          renderPlaceholder: function (e, t) {
            return null
          },
        }),
        pe = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('/yvb')),
        me = n('sebV'),
        fe = n('BXlL'),
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
      var ve = se.a.af9c8a3d,
        Ee = function (e) {
          var t = e.featureSwitches,
            n = e.scribeNamespace,
            r = e.startLocation,
            a = e.userId,
            o = Object(ge.b)(),
            c = !!a && he.b.isMobileOS() && !me.a.isStandaloneApp(),
            i = v.a.useCallback(
              function (e) {
                e.preventDefault(),
                  o.scribe(be(be({}, n), {}, { element: 'open_app_button', action: 'click' })),
                  Object(fe.b)({ startLocation: r, featureSwitches: t, userId: a })
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
        Ce = n('AUxQ'),
        Ie = n('Rp9C'),
        Te = n('7JQg'),
        Se = n('VS6U'),
        je = n('tocL'),
        ke = n('HBr9'),
        xe = n('2fY8'),
        Le = n('MWbm'),
        De = n('G8HL'),
        Re = n('pxuL'),
        Ae = n('t62R'),
        Be = n('rHpw'),
        Fe = n('oQhu'),
        Me = n('mN6z')
      function Ne(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var qe = se.a.ea831526,
        He = se.a.a90e1e67({ noun: '' }),
        ze = se.a.c299a6cf,
        Ue = se.a.c2ed3314,
        Ve = se.a.ad666301,
        Ge = se.a.f0c37ddb,
        We = { page: 'tweet' },
        Qe = { page: 'tweet', section: 'landing' },
        Xe = Object(Fe.a)(function (e, t) {
          return { items: [Ie.a.forTweet(e, t)], tweet_id: e }
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
            return v.a.createElement(Ae.b, { link: n }, t.text)
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
        u()(n, e)
        var t = Ne(n)
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
                return !Object(Me.a)(e, this.props)
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
                  s = c.history,
                  u = c.promotedContent,
                  d = c.socialContext,
                  p = c.statusId,
                  m = c.userLanguage
                l &&
                  ((e = Ge({ tweetText: Object(xe.a)(l.text), fullName: l.user.name })),
                  (t = 'twitter://status?id='.concat(l.id_str)),
                  (n = 'https://twitter.com'.concat(this._getCanonicalPath() || '')),
                  (r = Ve({ fullName: l.user.name })),
                  (a = l.possibly_sensitive))
                var f = (function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                    return t.find(function (e) {
                      return e && Ze.includes(e.contextType)
                    })
                  })(d, i),
                  g = f && v.a.createElement($e, { context: f })
                return v.a.createElement(
                  Te.b,
                  { data: Xe(p, u), namespace: this._getScribeNamespace() },
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
                      userLanguage: m,
                    }),
                    v.a.createElement(_.a, { deepLink: t }),
                    n ? v.a.createElement(E.a, { canonical: n }) : null,
                    v.a.createElement(
                      C.b.Provider,
                      { value: null == f ? void 0 : f.contextType },
                      v.a.createElement(Se.a, {
                        backLocation: '/',
                        documentTitle: e,
                        history: s,
                        primaryContent: this._renderTimeline(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: this._renderSidebarContent(),
                        subtitle: g,
                        title: (f && et(f)) || (l && l.self_thread ? ze : He),
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
                  s = e.statusId,
                  u = e.topicFollowPrompt,
                  d = { selectedTweetId: i }
                return v.a.createElement(
                  ke.a,
                  { collectionName: qe },
                  v.a.createElement(Ce.a, {
                    apiErrorHandlerMap: Ke(c),
                    contextTweetId: t,
                    fetchOptions: this._getNavigationParams(),
                    focalTweet: n,
                    focalTweetId: s,
                    location: r,
                    module: this._getModule(),
                    onEntriesRendered: this._handleEntriesRendered,
                    promotedContent: a,
                    rootTweet: o || void 0,
                    selectedTweet: d,
                    socialContext: l,
                    topicFollowPrompt: u,
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
      t.default = te(Object(De.a)(tt))
    },
  },
])
//# sourceMappingURL=WIPED
