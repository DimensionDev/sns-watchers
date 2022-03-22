;(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    'AEu/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationHiddenRepliesScreen', function () {
          return Y
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        g = n.n(p),
        f = (n('2G9S'), n('ERkP')),
        h = n.n(f),
        b = n('es0u'),
        y = n('yiKp'),
        v = n.n(y),
        _ = n('m3Bd'),
        E = n.n(_),
        w = (n('KqXw'), n('WNMA'), n('8Lfv')),
        C = n('G6rE'),
        I = n('rxPX'),
        P = n('0KEI'),
        T = ['loggedInUser'],
        S = function (e, t) {
          return t.match.params.statusId
        },
        k = function (e, t) {
          return t.match.params.screenName
        },
        x = function (e, t) {
          return 'PUSH' === t.history.action
        },
        O = Object(I.a)()
          .propsFromState(function () {
            return { screenName: k, statusId: S, isForwardNavigation: x, loggedInUser: C.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = E()(e, T)
            return v()({ loggedInScreenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('HIDDEN_REPLIES_PAGE'),
              clearTimelineCache: function (e) {
                return Object(w.a)(e)
              },
            }
          })
          .withAnalytics({ page: 'tweet', section: 'moderated_replies' }),
        L = n('QIgh'),
        j = n('8UdT'),
        A = n('IcAo'),
        D = n('VrCx'),
        B = n('xWpm'),
        M = n('WU0f'),
        F = n('oQhu'),
        R = n('yoO3'),
        q = n('fTQJ'),
        N = n('VS6U'),
        H = n('t62R'),
        z = n('FIs5'),
        U = n('3XMw'),
        V = n.n(U),
        G = V.a.d806aa19,
        W = V.a.d80c77dc,
        Q = V.a.ef939f4b,
        K = V.a.f7f2db4f,
        X = h.a.createElement(
          V.a.I18NFormatMessage,
          { $i18n: 'cf1aca58' },
          h.a.createElement(
            H.b,
            { link: 'https://help.twitter.com/using-twitter/mentions-and-replies#hidden-reply' },
            V.a.a7511618,
          ),
        ),
        J = function () {
          return h.a.createElement(z.a, { header: K, message: X })
        },
        Y = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              g()(
                l()(a),
                '_getMemoizedModule',
                Object(F.a)(function (e) {
                  return Object(M.a)(e)
                }),
              ),
              g()(l()(a), '_getModule', function () {
                var e = a.props.statusId
                return a._getMemoizedModule(e)
              }),
              a._clearTimelineCache(),
              a
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
                    a = e.screenName,
                    r = e.statusId
                  return a && r
                    ? h.a.createElement(
                        R.a,
                        null,
                        h.a.createElement(N.a, {
                          backLocation: '/'.concat(a.toLowerCase(), '/status/').concat(r),
                          history: t,
                          primaryContent: this._renderPrimaryContent(),
                          sidebarContent: h.a.createElement(b.a, null),
                          subtitle: a === n ? W : Q({ screenName: a }),
                          title: G,
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
                    a = n.loggedInScreenName,
                    r = n.screenName
                  return h.a.createElement(q.a, {
                    entryConfiguration:
                      ((e = { withUnhideReply: r === a }),
                      (t = e.withUnhideReply),
                      Object(A.a)(
                        {},
                        L.b,
                        g()({}, j.b.Tweet, {
                          handlers: g()(
                            {},
                            D.a.Tweet,
                            Object(B.f)({
                              createAdditionalProps: function () {
                                return { withUnhideReply: t }
                              },
                              displayBlocked: !0,
                              divider: { top: !0, bottom: !0 },
                            }),
                          ),
                        }),
                      )),
                    module: this._getModule(),
                    renderEmptyState: J,
                    title: G,
                  })
                },
              },
              {
                key: '_clearTimelineCache',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getModule(),
                    t = this.props,
                    n = t.clearTimelineCache,
                    a = t.createLocalApiErrorHandler,
                    r = t.isForwardNavigation
                  r && n(e).catch(a({}))
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      t.default = O(Y)
    },
    JiIh: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('0GBF')
      t.a = function (e) {
        return r.a.createElement(o.a, e)
      }
    },
    aH1V: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'QuickPromoteScreen', function () {
          return _o
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        g = n.n(p),
        f =
          (n('2G9S'),
          n('KqXw'),
          n('WNMA'),
          n('MvUL'),
          n('jQ3i'),
          n('x4t0'),
          n('7x/C'),
          n('JtPf'),
          n('Qavd'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('ERkP')),
        h = n.n(f)
      n('hBpG'), n('+KXO'), n('849X'), n('TJCb')
      function b(e) {
        throw new Error('Not reachable section reached!')
      }
      var y = n('97Jx'),
        v = n.n(y),
        _ = (n('z84I'), n('i4UL'), n('vrRf'), n('M+/F'), n('RqPI')),
        E = n('rxPX'),
        w = n('0KEI'),
        C = n('S3l+'),
        I = function (e) {
          return e.quickPromote.budget.dailyBudget
        },
        P = function (e) {
          return e.quickPromote.budget.durationDays
        },
        T = function (e) {
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
        x = function (e, t) {
          var n,
            a,
            r = Object(C.n)(e)
          return null === (n = e.ads.typeahead.forecastAudience[r]) ||
            void 0 === n ||
            null === (a = n.result) ||
            void 0 === a
            ? void 0
            : a.estimatedImpressions
        },
        O = Object(E.a)()
          .propsFromState(function () {
            return {
              dailyBudget: I,
              durationDays: P,
              availableBudgets: S,
              lang: _.o,
              currency: k,
              audience: x,
              errorMessage: T,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_BUDGET_SELECT_SCREEN',
              ),
              setDailyBudget: C.D,
              setBudgetDuration: C.y,
              fetchForecastedAudienceIfNeeded: C.h,
              setBudgetErrorMessage: C.z,
            }
          })
          .withAnalytics({ page: 'quick_promote' }),
        L = (n('1t7P'), n('jQ/y'), n('MWbm')),
        j = n('t62R'),
        A = n('rHpw'),
        D = function (e) {
          var t = e.children,
            n = e.description,
            a = e.descriptionDir,
            r = e.descriptionTestID,
            o = e.label,
            c = e.withBottomBorder,
            i = void 0 === c || c
          return h.a.createElement(
            L.a,
            { style: [B.descriptionItem, i ? B.bottomBorder : void 0] },
            !!o && h.a.createElement(j.b, { weight: 'bold' }, o),
            !!n &&
              h.a.createElement(
                L.a,
                { style: B.descriptionContainer },
                h.a.createElement(
                  j.b,
                  { color: 'gray700', dir: a, size: 'subtext2', style: B.descriptionContainer, testID: r },
                  n,
                ),
              ),
            t,
          )
        },
        B = A.a.create(function (e) {
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
        F = n('WM1P'),
        R = n('FGLp'),
        q = function (e) {
          Object(R.a)(function () {
            var t = M.e(),
              n = function () {
                t.resume()
              },
              a = function () {
                t.pause()
              }
            return (
              window.addEventListener('focus', n),
              window.addEventListener('blur', a),
              function () {
                M.c(''.concat(F.a, ':dwell:').concat(e), t.end()),
                  window.removeEventListener('focus', n),
                  window.removeEventListener('blur', a)
              }
            )
          })
        },
        N = function (e) {
          var t = e.screenType
          return q(t), null
        },
        H = n('Gpeq'),
        z = n('tevE'),
        U = function (e) {
          var t = e.primaryLabel,
            n = e.subtitle,
            a = e.title
          return h.a.createElement(
            L.a,
            { style: [V.bottomBorder, V.titleContainer] },
            h.a.createElement(
              j.b,
              {
                accessibilityLevel: 1,
                accessibilityRole: 'heading',
                align: 'center',
                size: 'headline1',
                weight: 'heavy',
              },
              a,
            ),
            !!t &&
              h.a.createElement(
                L.a,
                { style: V.primaryLabelContainer },
                h.a.createElement(j.b, { align: 'center', color: 'primary', size: 'title4' }, t),
              ),
            h.a.createElement(
              L.a,
              { style: V.subtitleContainer },
              h.a.createElement(z.a, { align: 'center', color: 'gray700' }, n),
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
        K = 'nextButton',
        X = 'objectiveScreen',
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
        ae = 'reviewObjectiveDescription',
        re = 'reviewTargetingDescription',
        oe = 'reviewBudgetAndDurationDescription',
        ce = 'reviewPaymentPivot',
        ie = 'reviewPromotionTotalDescription',
        le = 'targetingLocationPivot',
        se = 'backButton',
        ue = 'targetingLocationSearch',
        de = 'targetingLocationItem',
        me = 'paymentMethodSelect',
        pe = n('4zmP'),
        ge = n('9RkS'),
        fe = n('v6aA'),
        he = n('Xrkv'),
        be = n('SrIh'),
        ye = W.a.c4d0434a,
        ve = W.a.dc4a9413,
        _e = W.a.bad70c09,
        Ee = W.a.c133a39b,
        we = W.a.ee5da8f4,
        Ce = W.a.g4bf9cb7,
        Ie = W.a.gc3ce5d9,
        Pe = W.a.c1778029,
        Te = W.a.cb51c854,
        Se = W.a.bb7b39e1,
        ke = W.a.eb9466d0,
        xe = W.a.c21037d0,
        Oe = W.a.b07cc9f1,
        Le = W.a.ce309bed,
        je = W.a.c6c16a51,
        Ae = W.a.cc49d03f,
        De = W.a.dbe9353d,
        Be = W.a.c64974fb,
        Me = W.a.i638f89c
      function Fe(e) {
        switch (e) {
          case 'AnyGender':
            return Te
          case 'Male':
            return Se
          case 'Female':
            return ke
          default:
            return Object(be.a)('Unknown gender: '.concat(e)), e
        }
      }
      function Re(e) {
        switch (e) {
          case 'COUNTRIES':
            return xe
          case 'REGIONS':
            return Oe
          case 'METROS':
            return Le
          case 'CITIES':
            return je
          case 'POSTAL_CODES':
            return Ae
          default:
            return Object(be.a)('Unknown targeting locationType: '.concat(e)), e
        }
      }
      function qe(e) {
        var t = e.amount,
          n = e.currency,
          a = e.fractionDigits,
          r = e.lang
        return t.toLocaleString(Object(H.a)(r), {
          currency: n,
          style: 'currency',
          maximumFractionDigits: void 0 !== a ? a : 2,
          minimumFractionDigits: void 0 !== a ? a : 2,
        })
      }
      function Ne(e) {
        var t = e.currency,
          n = e.durationDays,
          a = e.lang,
          r = qe({ amount: e.totalBudgetNum, lang: a, currency: t, fractionDigits: 0 })
        return ve({ totalBudget: r, durationLabel: Ue({ durationDays: n }) })
      }
      function He(e) {
        var t = e.currency,
          n = e.dailyBudgetNum,
          a = e.durationDays,
          r = qe({ amount: n, lang: e.lang, currency: t, fractionDigits: 0 })
        return ye({ dailyBudget: r, durationLabel: Ue({ durationDays: a }) })
      }
      function ze(e) {
        var t = e.numLocations,
          n = W.a.ia24dc8c(t)
        return _e({ numLocations: n })
      }
      function Ue(e) {
        var t = e.durationDays,
          n = W.a.ia24dc8c(t)
        return Ce({ durationDays: n })
      }
      var Ve = n('yE5w'),
        Ge = W.a.a3a09d48,
        We = W.a.e7eb3683,
        Qe = W.a.d9f6e3cd,
        Ke = W.a.d9d6e10e,
        Xe = W.a.b3954ec9,
        Je = W.a.e1b48db4,
        Ye = Array(30)
          .fill(null)
          .map(function (e, t) {
            return t + 1
          }),
        Ze = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), '_fetchForecastedAudienceIfNeeded', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchForecastedAudienceIfNeeded)(t.match.params.statusId, n).catch(a())
              }),
              g()(l()(e), '_getSliderProps', function (e, t) {
                return { max: e.length - 1, min: 0, value: e.indexOf(t) }
              }),
              g()(l()(e), '_handleDurationSlider', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.durationDays,
                  o = n.setBudgetDuration,
                  c = Ye[t]
                r !== c &&
                  (Object(Ve.p)(a)(Ve.n.setBudgetDuration(''.concat(c))), o(c), e._fetchForecastedAudienceIfNeeded())
              }),
              g()(l()(e), '_handleBudgetSlider', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.availableBudgets,
                  o = n.dailyBudget,
                  c = n.setDailyBudget,
                  i = r[t]
                o !== i &&
                  (Object(Ve.p)(a)(Ve.n.setDailyBudget(''.concat(i))), c(i), e._fetchForecastedAudienceIfNeeded())
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
                    a,
                    r,
                    o = this.props,
                    c = o.audience,
                    i = o.availableBudgets,
                    l = o.currency,
                    s = o.dailyBudget,
                    u = o.durationDays,
                    d = o.errorMessage,
                    m = o.lang,
                    p = s.toLocaleString(Object(H.a)(m), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    g = i[0].toLocaleString(Object(H.a)(m), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    f = i
                      .slice(-1)[0]
                      .toLocaleString(Object(H.a)(m), {
                        currency: l,
                        style: 'currency',
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }),
                    b = c
                      ? ((t = (e = c).high),
                        (n = e.low),
                        (a = W.a.cf8abf58(n)),
                        (r = W.a.cf8abf58(t)),
                        Ie({ audienceLow: a, audienceHigh: r }))
                      : ' ',
                    y = Ue({ durationDays: u }),
                    _ = Ue({ durationDays: Ye[0] }),
                    E = Ue({ durationDays: Ye.slice(-1)[0] }),
                    w = this._getSliderProps(i, s),
                    C = this._getSliderProps(Ye, u),
                    I = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled')
                      ? He({ dailyBudgetNum: s, durationDays: u, lang: m, currency: l })
                      : Ne({ totalBudgetNum: s * u, durationDays: u, lang: m, currency: l })
                  return h.a.createElement(
                    L.a,
                    { style: $e.qpContainer, testID: ee },
                    h.a.createElement(N, { screenType: Ve.c.BudgetSelect }),
                    d &&
                      h.a.createElement(
                        L.a,
                        { style: $e.gutter },
                        h.a.createElement(pe.a, { text: d, type: 'danger' }),
                      ),
                    h.a.createElement(U, { primaryLabel: I, subtitle: b, title: Ge }),
                    h.a.createElement(
                      D,
                      { label: We },
                      h.a.createElement(
                        L.a,
                        { style: $e.childSpacing },
                        h.a.createElement(
                          ge.a,
                          v()({ accessibilityLabel: Qe, accessibilityLabelValueText: '"'.concat(p, '"') }, w, {
                            maxIcon: h.a.createElement(j.b, { style: $e.iconText }, f),
                            minIcon: h.a.createElement(j.b, { style: $e.iconText }, g),
                            onChange: this._handleBudgetSlider,
                            thumbLabel: p,
                          }),
                        ),
                      ),
                    ),
                    h.a.createElement(
                      D,
                      { label: Ke },
                      h.a.createElement(
                        L.a,
                        { style: $e.childSpacing },
                        h.a.createElement(
                          ge.a,
                          v()({ accessibilityLabel: Xe, accessibilityLabelValueText: '"'.concat(y, '"') }, C, {
                            maxIcon: h.a.createElement(j.b, { style: $e.iconText }, E),
                            minIcon: h.a.createElement(j.b, { style: $e.iconText }, _),
                            onChange: this._handleDurationSlider,
                            thumbLabel: y,
                          }),
                        ),
                      ),
                    ),
                    h.a.createElement(
                      L.a,
                      { style: $e.disclaimer },
                      h.a.createElement(z.a, { align: 'center', color: 'gray700', size: 'subtext2' }, Je),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(Ze, 'contextType', fe.a)
      var $e = A.a.create(function (e) {
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
        et = O(Ze),
        tt = n('kGix'),
        nt = n('XOJV'),
        at = function (e, t) {
          return t.match.params.statusId
        },
        rt = function (e, t) {
          return nt.a.selectHydrated(e, at(0, t))
        },
        ot = function (e, t) {
          return Object(tt.d)(
            nt.a.selectFetchStatus(e, at(0, t)),
            e.quickPromote.budget.availableBudgetsFetchStatus,
            e.quickPromote.targeting.initialTargetedLocationsFetchStatus,
            e.quickPromote.account.accountDataFetchStatus,
          )
        },
        ct = function (e, t) {
          return e.quickPromote.promoteStatus
        },
        it = function (e, t) {
          return e.quickPromote.promoteErrorCode
        },
        lt = function (e, t) {
          return e.quickPromote.account.campaigns
        },
        st = Object(E.a)()
          .propsFromState(function () {
            return {
              statusId: at,
              fetchStatus: ot,
              tweet: rt,
              campaigns: lt,
              promoteFetchStatus: ct,
              promoteErrorCode: it,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_SCREEN',
              ),
              fetchTweetIfNeeded: nt.a.fetchOneIfNeeded,
              fetchCurrentTargetingLocationIfNeeded: C.g,
              fetchAvailableBudgetsIfNeeded: C.e,
              fetchAdsAccountDataIfNeeded: C.d,
              fetchQuickPromoteEligibilityIfNeeded: C.k,
              fetchCouponsIfNeeded: C.f,
              handleFirstLoad: function () {
                return (function (e) {
                  var t = e.analytics,
                    n = e.history,
                    a = e.location,
                    r = e.match.params,
                    o = r.quickPromotePlatform,
                    c = r.quickPromoteScreenName,
                    i = r.screenName,
                    l = r.statusId,
                    s = { pa_signup_complete: a.query.pa_signup_complete || '' }
                  return Object(C.l)(i, l, o, c, n, s, t)
                })(e)
              },
              setPromoteFetchStatus: C.O,
            }
          })
          .withAnalytics(Ve.o),
        ut = Object(E.a)().withAnalytics(Ve.o),
        dt = n('feu+'),
        mt = W.a.e1bca506,
        pt = W.a.e4a4c608,
        gt = W.a.a219e217,
        ft = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), '_handleGoToAnalytics', function () {
                var t = e.props,
                  n = t.history,
                  a = t.match.params,
                  r = a.quickPromotePlatform,
                  o = a.screenName,
                  c = a.statusId
                Object(Ve.l)(n)(o, c, r)
              }),
              g()(l()(e), '_handleClose', function () {
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
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(N, { screenType: Ve.c.Done }),
                    h.a.createElement(dt.a, {
                      actionLabel: gt,
                      headline: mt,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToAnalytics,
                      onClose: this._handleClose,
                      subtext: pt,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(ft, 'contextType', fe.a)
      var ht = ut(ft),
        bt = n('v//M'),
        yt = n('W5XZ'),
        vt = n('jHSc'),
        _t =
          (n('Cm4o'),
          n('KrtT'),
          function (e) {
            return !!e.quickPromote.account.selectedFundingInstrument
          }),
        Et = function (e) {
          return e.quickPromote.coupons
        },
        wt = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        Ct = Object(E.a)()
          .propsFromState(function () {
            return { hasFundingInstrument: _t, coupons: Et, lang: _.o, currency: wt }
          })
          .withAnalytics(Ve.o),
        It = n.p + 'desktop_header_image.bfa9e365.png',
        Pt = n('TIdA'),
        Tt = n('A91F')
      function St(e) {
        var t = e.style
        return h.a.createElement(
          L.a,
          { style: t },
          h.a.createElement(Pt.a, { accessibilityLabel: '', aspectMode: Tt.a.exact(750 / 306), image: It }),
        )
      }
      var kt = n.p + 'mobile_header_image.431e8465.png'
      function xt(e) {
        var t = e.style
        return h.a.createElement(
          L.a,
          { style: t },
          h.a.createElement(Pt.a, { accessibilityLabel: '', aspectMode: Tt.a.COVER, image: kt }),
        )
      }
      var Ot = n('cHvH')
      function Lt(e) {
        var t = e.style
        return h.a.createElement(Ot.a, null, function (e) {
          var n = e.windowHeight
          return e.windowWidth > A.a.theme.breakpoints.medium
            ? h.a.createElement(St, { style: t })
            : h.a.createElement(xt, { style: [t, { height: 0.5 * n }] })
        })
      }
      var jt = W.a.dcfb0332,
        At = W.a.db841200,
        Dt = W.a.hc67be9d,
        Bt = W.a.e8702fea,
        Mt = W.a.i2e3c1ce,
        Ft = W.a.dcfb0332,
        Rt = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), '_handleGoToNextPage', function () {
                var t = e.props,
                  n = t.history,
                  a = t.match.params,
                  r = a.quickPromotePlatform,
                  o = a.screenName,
                  c = a.statusId,
                  i = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled')
                n.push(Object(Ve.j)(o, c, r, i ? Ve.c.Objective : Ve.c.Targeting))
              }),
              g()(l()(e), '_handleClose', function () {
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
                    a = this.props,
                    r = a.analytics,
                    o = a.coupons,
                    c = a.hasFundingInstrument,
                    i = a.location,
                    l = a.match.params,
                    s = l.screenName,
                    u = l.statusId,
                    d = (function (e, t, n) {
                      if (!e) return 'none'
                      var a = new URL(e, window.location.origin)
                      if (a.pathname === '/'.concat(t)) return 'me'
                      if (a.pathname === '/'.concat(t, '/status/').concat(n)) return 'tweet'
                      if (a.pathname === '/'.concat(t, '/status/').concat(n, '/analytics')) return 'analytics'
                      if ('/i/flow/convert_to_professional' === a.pathname) return 'ptt'
                      return 'other'
                    })(null === (e = i.state) || void 0 === e ? void 0 : e.previousPath, s, u),
                    m = 'other' === d ? (null === (t = i.state) || void 0 === t ? void 0 : t.previousPath) : void 0,
                    p = (null == o || null === (n = o.eligible_coupon) || void 0 === n ? void 0 : n.total_amount) || 0,
                    g = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled') && p > 0
                  Object(Ve.p)(r)(
                    Ve.n.introPageLoad({ hasFundingInstrument: c, entryPoint: d, otherEntryPoint: m, withCoupon: g }),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    a = n.coupons,
                    r = n.currency,
                    o = n.lang,
                    c = n.match.params.quickPromotePlatform === Ve.a.Rweb,
                    i = (null == a || null === (e = a.eligible_coupon) || void 0 === e ? void 0 : e.total_amount) || 0,
                    l = qe({
                      amount: i,
                      currency:
                        (null == a || null === (t = a.eligible_coupon) || void 0 === t ? void 0 : t.currency_code) || r,
                      lang: o,
                      fractionDigits: 0,
                    }),
                    s = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled') && i > 0,
                    u = s ? Bt({ couponAmount: l }) : jt,
                    d = s ? Mt({ couponAmount: l }) : At,
                    m = s ? Ft : Dt
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(N, { screenType: Ve.c.Intro }),
                    h.a.createElement(dt.a, {
                      actionLabel: m,
                      graphic: Lt,
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
        })(h.a.PureComponent)
      g()(Rt, 'contextType', fe.a)
      var qt = Ct(Rt),
        Nt = n('yiKp'),
        Ht = n.n(Nt),
        zt = n('RhWx'),
        Ut = n.n(zt),
        Vt = function (e, t) {
          return e.quickPromote.objective
        },
        Gt = function (e, t) {
          return nt.a.selectHydrated(
            e,
            (function (e, t) {
              return t.match.params.statusId
            })(0, t),
          )
        },
        Wt = Object(E.a)()
          .propsFromState(function () {
            return { selectedObjective: Vt, tweet: Gt }
          })
          .propsFromActions(function () {
            return { setObjective: C.K }
          })
          .withAnalytics(Ve.o),
        Qt = n('h0NW'),
        Kt = W.a.d7d55f3b,
        Xt = W.a.b25fd3d6,
        Jt = W.a.bf214f47,
        Yt = function (e) {
          var t = e.infoItems,
            n = e.onClose,
            a = e.onLoad
          return (
            h.a.useEffect(function () {
              return a()
            }, []),
            h.a.createElement(dt.a, {
              actionLabel: Jt,
              children: h.a.createElement(
                L.a,
                { style: Zt.infoItemGroup },
                h.a.createElement(Qt.a, { containerStyle: Zt.infoItem, items: t }),
              ),
              contentStyle: Zt.heading,
              graphicDisplayMode: 'none',
              headline: Kt,
              onAction: n,
              onClose: n,
              subtext: Xt,
              withCloseButton: !1,
            })
          )
        },
        Zt = A.a.create(function (e) {
          return {
            heading: { marginBottom: e.spaces.space40 },
            infoItemGroup: { marginBottom: e.spaces.space20 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0, marginBottom: e.spaces.space24 },
          }
        }),
        $t = n('W2FU'),
        en = n('E0cF'),
        tn = n('gSL+'),
        nn = n('RKmr'),
        an = n('Oib4'),
        rn = n('Dcm7'),
        on = n('iEUn'),
        cn = n('pwey'),
        ln = n('Lsrn'),
        sn = n('k/Ka'),
        un = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(sn.a)(
            'svg',
            Ht()(
              Ht()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ln.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            h.a.createElement(
              'g',
              null,
              h.a.createElement('path', {
                d: 'M11.25 22h-7C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v7c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7c0-.413-.337-.75-.75-.75H4.25c-.413 0-.75.337-.75.75v15.5c0 .413.337.75.75.75h7c.414 0 .75.336.75.75s-.336.75-.75.75z',
              }),
              h.a.createElement('path', {
                d: 'M22.094 20.01l-3.614-3.614 2.586-.997c.19-.074.313-.26.307-.465-.008-.204-.144-.38-.34-.44l-8.55-2.6c-.168-.05-.353-.006-.478.12-.125.124-.17.31-.12.478l2.6 8.55c.06.195.237.33.44.34h.02c.196 0 .374-.122.445-.308l.997-2.586L20 22.102c.195.194.514.194.708 0l1.386-1.386c.194-.195.194-.513 0-.707z',
              }),
            ),
          )
        }
      un.metadata = { width: 24, height: 24 }
      var dn = un,
        mn = W.a.fcc839b5,
        pn = W.a.d80964aa,
        gn = W.a.d4f57cce,
        fn = W.a.g06d6bf8,
        hn = W.a.c1a1817b,
        bn = W.a.efc9b3fe,
        yn = an.a,
        vn = W.a.h277a2e8,
        _n = W.a.gd429fea,
        En = rn.a,
        wn = W.a.icb22cdd,
        Cn = W.a.i859a9d3,
        In = W.a.e974b2d4,
        Pn = W.a.b9c9b214,
        Tn = W.a.i0e569bf,
        Sn = A.a.create(function (e) {
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
        kn = {
          label: pn,
          value: $t.c.Engagements,
          decoration: h.a.createElement(on.a, { style: [Sn.icon, Sn.engagementIcon] }),
          testID: Z($t.c.Engagements),
        },
        xn = {
          label: gn,
          value: $t.c.Followers,
          decoration: h.a.createElement(cn.a, { style: [Sn.icon, Sn.followersIcon] }),
          testID: Z($t.c.Followers),
        },
        On = {
          label: fn,
          value: $t.c.WebsiteClicks,
          decoration: h.a.createElement(dn, { style: [Sn.icon, Sn.websiteClicksIcon] }),
          testID: Z($t.c.WebsiteClicks),
        },
        Ln = [
          { label: pn, description: In, decoration: h.a.createElement(on.a, { style: [Sn.icon, Sn.engagementIcon] }) },
          { label: gn, description: Pn, decoration: h.a.createElement(cn.a, { style: [Sn.icon, Sn.followersIcon] }) },
          { label: fn, description: Tn, decoration: h.a.createElement(dn, { style: [Sn.icon, Sn.websiteClicksIcon] }) },
        ]
      function jn() {
        return h.a.createElement(pe.a, { Icon: yn, headline: hn, text: bn, type: 'warning' })
      }
      function An() {
        return h.a.createElement(pe.a, { Icon: En, headline: vn, text: _n, type: 'danger' })
      }
      var Dn = Wt(function (e) {
          var t,
            n,
            a,
            r,
            o,
            c,
            i,
            l = e.analytics,
            s = e.history,
            u = e.location,
            d = e.selectedObjective,
            m = e.setObjective,
            p = e.tweet,
            g = p ? en.a.getOriginalTweet(p) : p,
            f =
              null !=
                (null == g || null === (t = g.entities) || void 0 === t || null === (n = t.media) || void 0 === n
                  ? void 0
                  : n.length) &&
              (null == g || null === (a = g.entities) || void 0 === a || null === (r = a.media) || void 0 === r
                ? void 0
                : r.length) > 0,
            b =
              1 ===
              (null == g || null === (o = g.entities) || void 0 === o || null === (c = o.urls) || void 0 === c
                ? void 0
                : c.length),
            y = !!(
              (null != g && g.in_reply_to_status_id_str) ||
              (null != g && g.in_reply_to_name) ||
              (null != g && g.in_reply_to_screen_name) ||
              (null != g && g.in_reply_to_user_id_str) ||
              (null != g && g.in_reply_to_user)
            )
          h.a.useEffect(function () {
            Object(Ve.p)(l)(Ve.n.goalSelectionPageLoad())
          }, [])
          var v = h.a.useMemo(
              function () {
                return (function (e) {
                  var t = e.selectedObjective,
                    n = e.tweetContainsLinks,
                    a = e.tweetHasMedia,
                    r = e.tweetIsReply
                  return [kn]
                    .concat(
                      Ut()(
                        r ? [] : [Ht()(Ht()({}, xn), {}, { description: a && t === $t.c.Followers ? jn() : void 0 })],
                      ),
                      [Ht()(Ht()({}, On), {}, { disabled: !n, description: !n && An() })],
                    )
                    .map(function (e) {
                      return Ht()(
                        Ht()({}, e),
                        {},
                        { label: h.a.createElement(j.b, { size: 'headline2', weight: 'bold' }, e.label) },
                      )
                    })
                })({ tweetHasMedia: f, tweetContainsLinks: b, selectedObjective: d, tweetIsReply: y })
              },
              [f, b, d, y],
            ),
            _ = h.a.useCallback(
              function (e, t) {
                m(t), Object(Ve.p)(l)(Ve.n.setPromoteGoal(t))
              },
              [l, m],
            )
          return h.a.createElement(
            L.a,
            { style: Sn.qpContainer, testID: X },
            h.a.createElement(N, { screenType: Ve.c.Objective }),
            h.a.createElement(
              L.a,
              { style: Sn.titleContainer },
              h.a.createElement(j.b, { align: 'center', size: 'headline1', weight: 'bold' }, mn),
            ),
            h.a.createElement(
              L.a,
              null,
              h.a.createElement(tn.a, { name: 'objective-picker', onChange: _, options: v, value: d }),
            ),
            h.a.createElement(
              L.a,
              { style: Sn.goalSelectionCallout },
              h.a.createElement(nn.a, {
                description: wn,
                learnMoreLabel: Cn,
                learnMoreLink: {
                  external: !1,
                  method: 'replace',
                  pathname: u.pathname,
                  state: { showEducationInterstitial: !0 },
                },
              }),
            ),
            null !== (i = u.state) && void 0 !== i && i.showEducationInterstitial
              ? h.a.createElement(Yt, {
                  infoItems: Ln,
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
        Bn = n('ddV6'),
        Mn = n.n(Bn),
        Fn = function (e) {
          return e.quickPromote.paymentMethods
        },
        Rn = Object(E.a)()
          .propsFromState(function () {
            return { paymentMethods: Fn, selectedPaymentMethod: C.o }
          })
          .propsFromActions(function () {
            return { setSelectedPaymentMethod: C.E, deletePaymentMethod: C.b }
          })
          .withAnalytics(Ve.o),
        qn = n('YeIG'),
        Nn = n('JYMr'),
        Hn = n('cm6r'),
        zn = n('mjJ+'),
        Un = n('3rX5'),
        Vn = n('Wms4'),
        Gn = n('IG7M'),
        Wn = n('sgih'),
        Qn = n('/yvb'),
        Kn = n('I4+6'),
        Xn = n('iY63'),
        Jn = n('HsFH'),
        Yn = W.a.de43b66f,
        Zn = W.a.hb4773af,
        $n = W.a.aa2a3dd3,
        ea = W.a.b1c5b63c,
        ta = W.a.affb5877,
        na = W.a.cfd2f35d,
        aa = function (e, t, n) {
          return e.map(function (e) {
            return {
              label: h.a.createElement(ra, {
                deletePaymentMethodHandler: n,
                id: e.id,
                imgSrcUrl: e.imgSrcUrl,
                isSelected: t === e.id,
                lastFourDigits: e.lastFourDigits,
                status: e.cardStatus,
              }),
              value: e.id,
              containerStyle: [ia.paymentMethodRadioContainer, ia.bottomBorder],
            }
          })
        },
        ra = function (e) {
          var t = e.deletePaymentMethodHandler
            ? function (t) {
                return h.a.createElement(zn.a, {
                  items: [
                    {
                      Icon: Jn.a,
                      text: $n,
                      onClick: function () {
                        t(), e.deletePaymentMethodHandler && e.deletePaymentMethodHandler(e.id)
                      },
                      isEmphasized: !0,
                      disabled: e.isSelected,
                    },
                  ],
                  onCloseRequested: t,
                })
              }
            : void 0
          return h.a.createElement(
            L.a,
            { style: ia.paymentMethod },
            h.a.createElement(
              L.a,
              { style: [ia.descriptionItemContainer, e.paymentDescriptionStyle] },
              e.imgSrcUrl
                ? h.a.createElement(
                    L.a,
                    { style: ia.cardImageContainer },
                    h.a.createElement(Un.a, { source: e.imgSrcUrl, style: ia.cardImage }),
                  )
                : h.a.createElement(j.b, { size: 'body' }, 'Card'),
              h.a.createElement(
                L.a,
                { style: ia.descriptionContainer },
                h.a.createElement(
                  j.b,
                  { color: 'gray700', size: 'subtext1' },
                  ''.concat(ea, ' ').concat(e.lastFourDigits),
                ),
              ),
              ('Expired' === e.status || 'Invalid' === e.status) &&
                h.a.createElement(
                  L.a,
                  { style: ia.statusBadgeContainer },
                  h.a.createElement(
                    Vn.a,
                    { style: ia.expiredBadge },
                    h.a.createElement(j.b, { size: 'subtext3', style: ia.expiredBadge, weight: 'bold' }, e.status),
                  ),
                ),
            ),
            e.deletePaymentMethodHandler &&
              h.a.createElement(Gn.a, { renderActionMenu: t, style: ia.actionMenuContainer }),
          )
        },
        oa = function (e) {
          var t = e.cancelDeletePaymentMethodHandler,
            n = e.confirmDeletePaymentMethodHandler
          return h.a.createElement(
            Wn.a,
            { onMaskClick: t, type: 'bottom', withMask: !0 },
            h.a.createElement(
              L.a,
              { style: ia.deleteCardConfirmContainer },
              h.a.createElement(
                Qn.a,
                { icon: h.a.createElement(Jn.a, null), onPress: n, style: ia.modalButton, type: 'destructiveOutlined' },
                ta,
              ),
              h.a.createElement(Qn.a, { onPress: t, style: ia.modalButton, type: 'primaryOutlined' }, na),
            ),
          )
        },
        ca = Kn.a.generate({
          backgroundColor: A.a.theme.colors.transparent,
          color: A.a.theme.colors.primary,
          insetFocusRing: !0,
        }),
        ia = A.a.create(function (e) {
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
            modalButton: { margin: e.spaces.space8 },
          }
        }),
        la = Rn(function (e) {
          var t = e.analytics,
            n = e.deletePaymentMethod,
            a = e.history,
            r = e.match.params,
            o = r.quickPromotePlatform,
            c = r.screenName,
            i = r.statusId,
            l = e.paymentMethods,
            s = e.selectedPaymentMethod,
            u = e.setSelectedPaymentMethod
          q(Ve.c.PaymentSelect)
          var d = s ? s.id : '',
            m = h.a.useState(!1),
            p = Mn()(m, 2),
            g = p[0],
            f = p[1],
            b = h.a.useState(null),
            y = Mn()(b, 2),
            v = y[0],
            _ = y[1]
          return (
            h.a.useEffect(
              function () {
                Object(Ve.p)(t)(Ve.n.paymentSelectPageLoad())
              },
              [t],
            ),
            h.a.createElement(
              h.a.Fragment,
              null,
              h.a.createElement(
                L.a,
                { style: ia.qpContainer, testID: me },
                g ? h.a.createElement(Nn.a, { indeterminate: !0 }) : null,
                h.a.createElement(
                  L.a,
                  { style: ia.titleContainer },
                  h.a.createElement(
                    j.b,
                    {
                      accessibilityLevel: 1,
                      accessibilityRole: 'heading',
                      align: 'left',
                      size: 'headline1',
                      weight: 'heavy',
                    },
                    Yn,
                  ),
                ),
                h.a.createElement(tn.a, {
                  disabled: g,
                  name: Yn,
                  onChange: function (e, n) {
                    if (!Object(qn.a)(l)) {
                      var a =
                        l.find(function (e) {
                          return e.id === n
                        }) || null
                      ;(a && 'Invalid' === a.cardStatus) ||
                        (f(!0),
                        u(n)
                          .catch(function (e) {
                            Object(Ve.p)(t)(Ve.n.paymentMethodChanged(e))
                          })
                          .finally(function () {
                            f(!1)
                          }),
                        Object(Ve.p)(t)(Ve.n.paymentMethodChanged()))
                    }
                  },
                  options: aa(l, d, function (e) {
                    return _(e)
                  }),
                  value: d,
                }),
                h.a.createElement(
                  L.a,
                  { style: ia.addPaymentMethodContainer },
                  h.a.createElement(
                    Hn.a,
                    {
                      disabled: g,
                      interactive: g,
                      interactiveStyles: ca,
                      onPress: function () {
                        return a.push(''.concat(Object(Ve.j)(c, i, o, Ve.c.Payment), '?isAddingPayment=true'))
                      },
                      style: ia.addPaymentMethodInteractiveContainer,
                    },
                    h.a.createElement(Xn.a, { style: ia.plusIcon }),
                    h.a.createElement(j.b, { align: 'left', color: 'primary' }, Zn),
                  ),
                ),
                v &&
                  h.a.createElement(oa, {
                    cancelDeletePaymentMethodHandler: function () {
                      return _(null)
                    },
                    confirmDeletePaymentMethodHandler: function () {
                      v &&
                        (_(null),
                        f(!0),
                        n(v)
                          .catch(function (e) {
                            Object(Ve.p)(t)(Ve.n.paymentMethodDeleted(e))
                          })
                          .finally(function () {
                            f(!1)
                          }),
                        Object(Ve.p)(t)(Ve.n.paymentMethodDeleted()))
                    },
                  }),
              ),
            )
          )
        }),
        sa = (n('LJOr'), n('ho0z'), n('zh9S')),
        ua = n('y0iL'),
        da = function (e, t) {
          return t.match.params.statusId
        },
        ma = function (e, t) {
          return nt.a.selectHydrated(e, da(0, t))
        },
        pa = function (e, t) {
          return nt.a.selectFetchStatus(e, da(0, t))
        },
        ga = function (e, t) {
          return e.quickPromote.account.adsAccount
        },
        fa = function (e, t) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        ha = function (e) {
          return e.quickPromote.account.vatInfo
        },
        ba = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: pa,
              tweet: ma,
              adsAccount: ga,
              fundingInstrument: fa,
              selectedPaymentMethod: C.o,
              vatInfo: ha,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_PAYMENT_SCREEN',
              ),
              fetchTweetIfNeeded: nt.a.fetchOneIfNeeded,
              scribeAction: sa.c,
              savePlatformRedirectBackState: function () {
                return Object(ua.k)(e.match.params.quickPromotePlatform)
              },
              fetchAdsAccountDataIfNeeded: ua.d,
            }
          })
          .withAnalytics(Ve.o),
        ya = n('tI3i'),
        va = n.n(ya),
        _a = n('Rp9C'),
        Ea = n('bPFD'),
        wa = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(
                l()(e),
                'isPaymentSelectEnabled',
                e.context.featureSwitches.isTrue('responsive_web_qp_payment_select_enabled'),
              ),
              g()(l()(e), '_getIsAddingPayment', function () {
                var t = e._getQueryParameter('isAddingPayment')
                return !!t && 'true' === t
              }),
              g()(l()(e), '_getQueryParameter', function (t) {
                var n = e.props.location.search
                return new URLSearchParams(n).get(t)
              }),
              g()(l()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              g()(l()(e), '_handleIFrameMessage', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.tweet,
                  o = e._getIsAddingPayment()
                if (t && 'quick_promote' === t.name)
                  if ('scribe' === t.type) {
                    var c = (r && en.a.getOriginalTweet(r)) || void 0,
                      i = c ? [_a.a.getTweetItem(c)] : [],
                      l = t.scribeData || {},
                      s = 'string' == typeof l.component ? l.component : 'quick_promote',
                      u = 'string' == typeof l.uiEvent ? l.uiEvent : ''
                    a.scribe({ component: s, action: u, data: { items: i } })
                  } else if ('navigation' === t.type) {
                    var d = e.props,
                      m = d.createLocalApiErrorHandler,
                      p = d.fetchAdsAccountDataIfNeeded,
                      g = d.history,
                      f = d.match.params,
                      h = f.quickPromotePlatform,
                      b = f.screenName,
                      y = f.statusId
                    va()(!!e.context.loggedInUserId, 'loggedInUserId must be defined'),
                      p(e.context.loggedInUserId, !0).catch(m()),
                      g.push(
                        '/'
                          .concat(b, '/status/')
                          .concat(y, '/')
                          .concat(h, '/')
                          .concat(e.isPaymentSelectEnabled && o ? Ve.c.PaymentSelect : Ve.c.Review),
                      )
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
                    a = e.fundingInstrument,
                    r = e.match,
                    o = e.savePlatformRedirectBackState,
                    c = r.params,
                    i = c.quickPromotePlatform,
                    l = c.statusId
                  o()
                  var s = this._getIsAddingPayment(),
                    u = Object(Ve.i)(i, t, l, a, s)
                  s && Object(Ve.p)(n)(Ve.n.paymentPageLoadAddingCard()),
                    Object(Ve.p)(n)(Ve.n.paymentPageLoad(u.url)),
                    u.isSameHost || (window.location.href = u.url)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.adsAccount,
                    n = e.fundingInstrument,
                    a = e.match,
                    r = this._getIsAddingPayment(),
                    o = a.params,
                    c = o.quickPromotePlatform,
                    i = o.statusId,
                    l = Object(Ve.i)(c, t, i, n, r)
                  return l.isSameHost
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(N, { screenType: Ve.c.Payment }),
                        h.a.createElement(Ea.a, {
                          dangerouslyDisableSandbox: !0,
                          onMessage: this._handleIFrameMessage,
                          reportError: be.a,
                          src: l.url,
                          style: Ca.iframe,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(wa, 'contextType', fe.a)
      var Ca = A.a.create(function (e) {
          return { iframe: { flexGrow: 1, paddingTop: 0 } }
        }),
        Ia = ba(wa)
      function Pa(e) {
        new Image().src = e
      }
      function Ta() {
        return h.a.createElement(Ot.a, null, function (e) {
          e.windowHeight
          return Pa(e.windowWidth > A.a.theme.breakpoints.medium ? It : kt), null
        })
      }
      var Sa = n('0zXz'),
        ka = function (e) {
          return e.quickPromote.objective
        },
        xa = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Oa = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        La = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        ja = function (e, t) {
          return e.quickPromote.budget.dailyBudget
        },
        Aa = function (e, t) {
          return e.quickPromote.budget.durationDays
        },
        Da = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        Ba = function (e) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        Ma = function (e) {
          return e.quickPromote.account.vatInfo
        },
        Fa = function (e) {
          return e.quickPromote.account.adsAccount
        },
        Ra = function (e) {
          return e.quickPromote.promoteStatus
        },
        qa = function (e) {
          return e.quickPromote.promoteErrorCode
        },
        Na = function (e) {
          return e.quickPromote.coupons
        },
        Ha = function (e) {
          return e.quickPromote.enrollCouponErrorCode
        },
        za = Object(E.a)()
          .propsFromState(function () {
            return {
              objective: ka,
              targetedLocations: xa,
              ageBucket: Oa,
              gender: La,
              dailyBudget: ja,
              durationDays: Aa,
              lang: _.o,
              country: C.p,
              currency: Da,
              fundingInstrument: Ba,
              vatInfo: Ma,
              adsAccount: Fa,
              promoteStatus: Ra,
              promoteErrorCode: qa,
              coupons: Na,
              enrollCouponErrorCode: Ha,
              selectedPaymentMethod: C.o,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_REVIEW_SCREEN',
              ),
              clearPersistedRedirectBackState: function () {
                return Object(C.m)()
              },
              createPromotion:
                ((t = e),
                (n = t.history),
                (a = t.match),
                function (e) {
                  var t = a.params,
                    r = t.quickPromotePlatform,
                    o = t.screenName,
                    c = t.statusId
                  return Object(C.a)(n, o, c, r, e)
                }),
              enrollCoupon: C.c,
            }
            var t, n, a
          })
          .withAnalytics(Ve.o),
        Ua = n('csss'),
        Va = n('shC7'),
        Ga = W.a.c3c57e3e,
        Wa = W.a.h06724b4,
        Qa = W.a.a96f811e,
        Ka = W.a.b069d89c,
        Xa = W.a.a3a09d48,
        Ja = W.a.fbd44e96,
        Ya = W.a.e36bce63,
        Za = W.a.c602f5b8,
        $a = W.a.ia83756b,
        er = W.a.cc217a04,
        tr = W.a.c602f5b8,
        nr = W.a.g4f2b588,
        ar = W.a.i41612d9,
        rr = W.a.cdae1af0,
        or = W.a.ed8bb5af,
        cr = W.a.fc640c20,
        ir = W.a.be2dc078,
        lr = W.a.iaefd4de,
        sr = W.a.e5e42640,
        ur = W.a.da2805d1,
        dr = W.a.ef4602eb,
        mr = W.a.a4db098b,
        pr = W.a.ef7e3916,
        gr = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), '_getPaymentDescription', function (t, n) {
                var a = e.props.adsAccount
                return a && a.timezone && a.country_code ? (t ? rr : n ? cr : or) : n ? lr : ir
              }),
              g()(l()(e), '_handlePromote', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.createPromotion
                Object(Ve.p)(n)(Ve.n.promotionClick()), a(n)
              }),
              g()(l()(e), '_handleEnrollCoupon', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.coupons,
                  r = t.enrollCoupon,
                  o = t.fundingInstrument,
                  c = e._getCouponErrorMessage()
                o && null != a && a.eligible_coupon && !c && r(n)
              }),
              g()(l()(e), '_getPromoteErrorMessage', function () {
                var t = e.props,
                  n = t.promoteErrorCode,
                  a = t.promoteStatus
                if (!n) return a === tt.a.LOADED ? ur : null
                switch (n) {
                  case 'MissingFundingInstrument':
                  case 'InvalidPaymentMethod':
                    return pr
                  case 'CampaignCreationFailed':
                  case 'PromotionIneligible':
                    return mr
                  default:
                    return dr
                }
              }),
              g()(l()(e), '_getCouponErrorMessage', function () {
                var t = e.props.enrollCouponErrorCode
                if (!t) return null
                switch (t) {
                  case 'AccountIneligible':
                  case 'MissingAdsAccount':
                  default:
                    return sr
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
                    a = e.fundingInstrument,
                    r = e.selectedPaymentMethod,
                    o = this.context.featureSwitches.isTrue('responsive_web_qp_payment_select_enabled')
                  n()
                  var c = o ? !!r : !!a
                  Object(Ve.p)(t)(Ve.n.reviewPageLoad({ hasFundingInstrument: c })), this._handleEnrollCoupon()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    a = this.props,
                    r = a.ageBucket,
                    o = a.country,
                    c = a.coupons,
                    i = a.currency,
                    l = a.dailyBudget,
                    s = a.durationDays,
                    u = a.fundingInstrument,
                    d = a.gender,
                    m = a.lang,
                    p = a.match,
                    g = a.objective,
                    f = a.promoteStatus,
                    y = a.selectedPaymentMethod,
                    v = a.targetedLocations,
                    _ = a.vatInfo,
                    E = this.context.featureSwitches.isTrue('responsive_web_qp_payment_select_enabled'),
                    w =
                      ((e = $t.e[r]),
                      (t = e.maxAge),
                      (n = e.minAge),
                      t ? Ee({ minAge: n, maxAge: t }) : we({ minAge: n })),
                    I = (function (e) {
                      switch (e) {
                        case 'Engagements':
                          return De
                        case 'Followers':
                          return Be
                        case 'WebsiteClicks':
                          return Me
                        default:
                          throw b()
                      }
                    })(g),
                    P = (function (e) {
                      var t = e.formattedAge,
                        n = e.gender,
                        a = e.locations,
                        r = a.length
                      return Pe({
                        newlinePlaceholder: '\n',
                        locations: Object(he.a)(a),
                        locationsHeading: ze({ numLocations: r }),
                        formattedAge: t,
                        gender: n,
                      })
                    })({
                      locations: v.map(function (e) {
                        return e.localized_name
                      }),
                      formattedAge: w,
                      gender: Fe(d),
                    }),
                    T = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled'),
                    S = T
                      ? He({ dailyBudgetNum: l, durationDays: s, lang: m, currency: i })
                      : Ne({ totalBudgetNum: l * s, durationDays: s, lang: m, currency: i }),
                    k =
                      u && null != c && c.existing_balance.length
                        ? c.existing_balance.find(function (e) {
                            return e.currency_code === u.currency
                          })
                        : null,
                    x = k ? '' : qe({ amount: l * s, lang: m, currency: i }),
                    O = p.params,
                    A = O.quickPromotePlatform,
                    B = O.screenName,
                    M = O.statusId,
                    F = this._getPromoteErrorMessage(),
                    R = this._getCouponErrorMessage(),
                    q = this.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                    H = _ && null === _.tax_id && null === _.tax_exemption_id && 'NOT_SET' === _.tax_category,
                    V = E ? !!y : !!u,
                    G = !(null == c || !c.eligible_coupon)
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(N, { screenType: Ve.c.Review }),
                    h.a.createElement(
                      L.a,
                      { style: hr.qpContainer, testID: te },
                      F &&
                        h.a.createElement(
                          L.a,
                          { style: hr.gutter },
                          h.a.createElement(pe.a, { text: F, type: 'danger' }),
                        ),
                      R &&
                        h.a.createElement(
                          L.a,
                          { style: hr.gutter },
                          h.a.createElement(pe.a, { text: R, type: 'warning' }),
                        ),
                      h.a.createElement(U, { subtitle: Wa, title: Ga }),
                      q &&
                        h.a.createElement(D, {
                          description: I,
                          descriptionTestID: ae,
                          label: Qa,
                          withBottomBorder: !1,
                        }),
                      h.a.createElement(D, { description: P, descriptionTestID: re, label: Ka, withBottomBorder: !1 }),
                      h.a.createElement(D, {
                        description: S,
                        descriptionDir: Va.a.getConstants().isRTL ? 'rtl' : 'ltr',
                        descriptionTestID: oe,
                        label: T ? Ja : Xa,
                        withBottomBorder: !1,
                      }),
                      E
                        ? h.a.createElement(Ua.a, {
                            description:
                              y && !H
                                ? h.a.createElement(ra, {
                                    id: y.id,
                                    imgSrcUrl: y.imgSrcUrl,
                                    lastFourDigits: y.lastFourDigits,
                                    paymentDescriptionStyle: hr.paymentDescription,
                                    status: y.cardStatus,
                                  })
                                : h.a.createElement(
                                    j.b,
                                    { color: 'primary', size: 'subtext2' },
                                    this._getPaymentDescription(V, G),
                                  ),
                            label: h.a.createElement(j.b, { weight: 'bold' }, Ya),
                            link:
                              !y || H ? Object(Ve.j)(B, M, A, Ve.c.Payment) : Object(Ve.j)(B, M, A, Ve.c.PaymentSelect),
                            testID: ce,
                          })
                        : h.a.createElement(Ua.a, {
                            description:
                              u && !H
                                ? u.description
                                : h.a.createElement(
                                    j.b,
                                    { color: 'primary', size: 'subtext2' },
                                    this._getPaymentDescription(V, G),
                                  ),
                            label: h.a.createElement(j.b, { weight: 'bold' }, Ya),
                            link: !u || H ? Object(Ve.j)(B, M, A, Ve.c.Payment) : void 0,
                            testID: ce,
                          }),
                      T
                        ? h.a.createElement(
                            D,
                            { description: x, descriptionTestID: ie, label: Za, withBottomBorder: !1 },
                            k
                              ? (function (e) {
                                  var t = e.balance,
                                    n = e.currency,
                                    a = e.lang,
                                    r = e.subtotal,
                                    o = qe({ amount: r, currency: n, lang: a }),
                                    c = qe({ amount: Math.min(r, t), currency: n, lang: a }),
                                    i = qe({ amount: Math.max(0, r - t), currency: n, lang: a }),
                                    l = t > r ? qe({ amount: t - r, currency: n, lang: a }) : null
                                  return h.a.createElement(
                                    h.a.Fragment,
                                    null,
                                    h.a.createElement(
                                      L.a,
                                      { style: hr.promotionTotalRow },
                                      h.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, $a),
                                      h.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, o),
                                    ),
                                    h.a.createElement(
                                      L.a,
                                      { style: hr.promotionTotalRow },
                                      h.a.createElement(j.b, { color: 'blue500', size: 'subtext2' }, er),
                                      h.a.createElement(j.b, { color: 'blue500', size: 'subtext2' }, '-', c),
                                    ),
                                    h.a.createElement(
                                      L.a,
                                      { style: hr.promotionTotalRow },
                                      h.a.createElement(
                                        j.b,
                                        { color: 'gray700', size: 'subtext2', weight: 'bold' },
                                        tr,
                                      ),
                                      h.a.createElement(
                                        j.b,
                                        { color: 'gray700', size: 'subtext2', testID: ie, weight: 'bold' },
                                        i,
                                      ),
                                    ),
                                    l &&
                                      h.a.createElement(
                                        L.a,
                                        { style: hr.promotionTotalRow },
                                        h.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, nr),
                                        h.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, l),
                                      ),
                                  )
                                })({ subtotal: l * s, balance: k.total_amount || 0, currency: i, lang: m })
                              : null,
                          )
                        : null,
                    ),
                    h.a.createElement(
                      L.a,
                      { style: hr.bottomElements },
                      h.a.createElement(
                        Qn.a,
                        {
                          disabled: (E && !y) || !u || H || C.W.includes(f),
                          onPress: this._handlePromote,
                          size: 'xLarge',
                          testID: ne,
                          type: 'brandFilled',
                        },
                        ar,
                      ),
                      h.a.createElement(
                        z.a,
                        { style: hr.terms },
                        (function (e, t, n) {
                          return n
                            ? h.a.createElement(
                                W.a.I18NFormatMessage,
                                { $i18n: 'cace9784' },
                                h.a.createElement(j.b, { link: Object(Ve.k)(e) }, W.a.acff74af),
                                h.a.createElement(j.b, { link: Object(Ve.g)(t) }, W.a.cb8d4ace),
                              )
                            : h.a.createElement(
                                W.a.I18NFormatMessage,
                                { $i18n: 'c99d7100' },
                                h.a.createElement(j.b, { link: Object(Ve.k)(e) }, W.a.d56b5ac3),
                              )
                        })(o, m, !!k),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(gr, 'contextType', fe.a)
      var fr,
        hr = A.a.create(function (e) {
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
        br = za(gr),
        yr = n('zCf4'),
        vr =
          (n('yH/f'),
          n('7xRU'),
          n('LW0h'),
          function (e, t) {
            var n = Er(e, t)
            return e.ads.typeahead.targetingLocation[n]
          }),
        _r = function (e, t) {
          var n,
            a = Er(e, t)
          return null === (n = e.ads.typeahead.targetingLocation[a]) || void 0 === n ? void 0 : n.fetchStatus
        },
        Er = function (e, t) {
          return e.quickPromote.targeting.locationQuery
        },
        wr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Cr = function (e, t) {
          return e.quickPromote.account.campaigns
        },
        Ir = Object(E.a)()
          .propsFromState(function () {
            return {
              targetingLocationQuery: Er,
              targetingLocations: vr,
              targetedLocations: wr,
              fetchStatus: _r,
              userCountry: _.y,
              campaigns: Cr,
            }
          })
          .propsFromActions(function () {
            return {
              setTargetedLocations: C.S,
              setAndFetchTargetingLocationQuery: C.u,
              setTargetingLocationQuery: C.U,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_TARGETING_LOCATION_SCREEN',
              ),
            }
          })
          .withAnalytics(Ve.o),
        Pr = n('VwDm'),
        Tr = n('G1WX'),
        Sr = n('e0ey'),
        kr = n('xKuM'),
        xr = n('5Vk4'),
        Or = n('6OUF'),
        Lr = n('zrOZ'),
        jr = n('kevv'),
        Ar = W.a.cc642518,
        Dr = W.a.i0e8c3c6,
        Br = W.a.deaf5b15,
        Mr = W.a.f69ad048,
        Fr = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
        Rr = Object.freeze(
          ((fr = {}), g()(fr, Ve.e.CurrentCountryMatch, 0), g()(fr, Ve.e.Match, 1), g()(fr, Ve.e.NoMatch, 2), fr),
        ),
        qr = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), 'state', { errorMessage: null }),
              g()(l()(e), '_renderSearch', function () {
                var t = e.props,
                  n = t.fetchStatus,
                  a = t.targetingLocationQuery
                return h.a.createElement(
                  Nr,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: a,
                  },
                  h.a.createElement(L.a, null, h.a.createElement(j.b, { style: Hr.headingText, weight: 'heavy' }, Dr)),
                  h.a.createElement(Tr.a, { fetchStatus: n, render: e._renderSearchList, retryMessage: Br }),
                )
              }),
              g()(l()(e), '_handleClear', function () {
                ;(0, e.props.setTargetingLocationQuery)('')
              }),
              g()(l()(e), '_renderSearchList', function () {
                var t = e.props.targetedLocations,
                  n = Object(Lr.a)(
                    t.map(function (e) {
                      return e.targeting_value
                    }),
                  ),
                  a = e._getTargetingLocationOptions()
                return h.a.createElement(
                  L.a,
                  { style: Hr.overflow },
                  a.map(function (t) {
                    var a = t.localized_name,
                      r = t.location_type,
                      o = t.targeting_value
                    return h.a.createElement(Sr.a, {
                      checked: n.has(o),
                      helpText: Re(r),
                      key: o,
                      label: a,
                      name: o,
                      onChange: e._handleSearchSelect,
                      testID: de,
                    })
                  }),
                )
              }),
              g()(l()(e), '_getTargetingLocationOptions', function () {
                var t,
                  n,
                  a,
                  r = e.props,
                  o = r.targetingLocationQuery,
                  c = r.targetingLocations,
                  i = r.userCountry,
                  l =
                    null !==
                      (t =
                        null == c || null === (n = c.result) || void 0 === n || null === (a = n[0]) || void 0 === a
                          ? void 0
                          : a.locations) && void 0 !== t
                      ? t
                      : [],
                  s = Object(Ve.h)(i || 'US'),
                  u = l.filter(function (e) {
                    var t = e.country_code,
                      n = e.localized_name
                    return s(n, t, o) !== Ve.e.NoMatch
                  })
                return Object(jr.a)(
                  u,
                  [
                    function (e) {
                      var t = e.country_code,
                        n = e.localized_name,
                        a = s(n, t, o)
                      return Rr[a]
                    },
                    function (e) {
                      e.localized_name
                      var t,
                        n = e.location_type
                      return null !== (t = Fr[n]) && void 0 !== t
                        ? t
                        : (function (e) {
                            Object(be.a)(
                              'Quick Promote: Unknown location type: '
                                .concat(e, '. Expected one of {')
                                .concat(Object.keys(Fr).join(', '), '}'),
                            )
                          })(n) || Object.keys(Fr).length
                    },
                    function (e) {
                      return e.localized_name
                    },
                  ],
                  'asc',
                )
              }),
              g()(l()(e), '_handleSearchSelect', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  o = a.setTargetedLocations,
                  c = a.setTargetingLocationQuery
                if (n) {
                  e.setState({ errorMessage: null })
                  var i = e._getTargetingLocationOptions().find(function (e) {
                    return e.targeting_value === t
                  })
                  i
                    ? (Object(Ve.p)(r)(
                        Ve.n.setTargetingLocation({
                          id: i.targeting_value,
                          locationType: i.location_type,
                          countryCode: i.country_code,
                        }),
                      ),
                      o([i]),
                      e._handleGoBack())
                    : Object(be.a)('Quick Promote: could not find "'.concat(t, '" in list of targeting options'))
                } else Object(Ve.p)(r)(Ve.n.targetingLocationError()), e.setState({ errorMessage: Mr })
                c('')
              }),
              g()(l()(e), '_renderSelected', function () {
                var t = e.props,
                  n = t.targetedLocations,
                  a = t.targetingLocationQuery,
                  r = e.state.errorMessage
                return h.a.createElement(
                  Nr,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: a,
                  },
                  h.a.createElement(
                    L.a,
                    null,
                    r &&
                      h.a.createElement(
                        L.a,
                        { style: Hr.gutter },
                        h.a.createElement(pe.a, { text: r, type: 'danger' }),
                      ),
                    h.a.createElement(j.b, { style: Hr.headingText, weight: 'heavy' }, ze({ numLocations: n.length })),
                  ),
                  h.a.createElement(
                    L.a,
                    null,
                    n.map(function (t) {
                      var n = t.localized_name,
                        a = t.location_type,
                        r = t.targeting_value
                      return h.a.createElement(Sr.a, {
                        checked: !0,
                        helpText: Re(a),
                        key: r,
                        label: n,
                        name: r,
                        onChange: e._handleSearchSelect,
                        testID: de,
                      })
                    }),
                  ),
                )
              }),
              g()(l()(e), '_handleGoBack', function () {
                var t = e.props,
                  n = t.campaigns,
                  a = t.history,
                  r = t.location,
                  o = t.match.params,
                  c = o.quickPromotePlatform,
                  i = o.quickPromoteScreenName,
                  l = o.screenName,
                  s = o.statusId,
                  u = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                  d =
                    e.context.featureSwitches.isTrue('responsive_web_qp_intro_experiment_enabled') &&
                    !(null == n || !n.length)
                Object(Ve.m)(a, r)(l, s, c, i, u, d)
              }),
              g()(l()(e), '_handleTargetingLocationChange', function (t) {
                var n = t.target.value,
                  a = e.props,
                  r = a.analytics,
                  o = a.createLocalApiErrorHandler,
                  c = a.setAndFetchTargetingLocationQuery
                Object(Ve.p)(r)(Ve.n.targetingLocationSearch(n)), c(n).catch(o())
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
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(N, { screenType: Ve.c.TargetingLocation }),
                    e ? this._renderSearch() : this._renderSelected(),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(qr, 'contextType', fe.a)
      var Nr = function (e) {
          var t = e.children,
            n = e.onBack,
            a = e.onChange,
            r = e.onClear,
            o = e.targetingLocationQuery
          return h.a.createElement(
            L.a,
            { style: Hr.qpContainer, testID: $ },
            h.a.createElement(kr.a, {
              leftControl: h.a.createElement(xr.a, { onClick: n }),
              middleControl: h.a.createElement(Or.a, {
                Icon: Pr.a,
                autoFocus: !0,
                name: 'locationTargetingInput',
                onChange: a,
                onClear: r,
                placeholder: Ar,
                style: Hr.input,
                testID: ue,
                value: o,
                withClearButton: !0,
              }),
            }),
            t,
          )
        },
        Hr = A.a.create(function (e) {
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
            overflow: { flexGrow: 1, flexShrink: 1, flexBasis: '200px', overflowY: 'auto' },
          }
        }),
        zr = Ir(qr),
        Ur = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Vr = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        Gr = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Wr = Object(E.a)()
          .propsFromState(function () {
            return { targetedLocations: Ur, selectedGender: Vr, selectedAgeBucket: Gr }
          })
          .propsFromActions(function () {
            return { setTargetedAgeBucket: C.Q, setTargetedGender: C.R }
          })
          .withAnalytics(Ve.o),
        Qr = n('JiIh'),
        Kr = n('fyvP'),
        Xr = n('J4ZH'),
        Jr = n('tn7R'),
        Yr = n('mN6z'),
        Zr = W.a.hba1d105,
        $r = W.a.cba0133d,
        eo = W.a.e1efbead,
        to = W.a.c6ff7c1f,
        no = W.a.b555fb45,
        ao = W.a.a8d0108d,
        ro = [$t.b.Any, $t.b.Female, $t.b.Male].map(function (e) {
          return { label: Fe(e), value: e, testID: Y(e) }
        }),
        oo = W.a.j2c03e12,
        co = ['13', '18', '21', '25', '35', '50'],
        io = [void 0, void 0, void 0, '24', '34', '49', '54'],
        lo = Object(Xr.a)(Object(Jr.a)($t.e), function (e) {
          return e.maxAge || 'over'
        }),
        so = io.length
      function uo(e, t) {
        var n
        if (e && t) return null === (n = $t.d[e]) || void 0 === n ? void 0 : n[t]
      }
      var mo = (function (e) {
        u()(n, e)
        var t = m()(n)
        function n() {
          var e
          r()(this, n)
          for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            g()(l()(e), '_handleGenderChange', function (t, n) {
              var a = e.props,
                r = a.analytics
              ;(0, a.setTargetedGender)(n), Object(Ve.p)(r)(Ve.n.setTargetingGender(n))
            }),
            g()(l()(e), '_handleAgeBucketChange', function (t, n) {
              var a = Mn()(t, 2),
                r = a[0],
                o = a[1],
                c = e.props,
                i = c.analytics,
                l = c.selectedAgeBucket,
                s = c.setTargetedAgeBucket,
                u = e._sliderValueFromSelectedAgeBucket(l)
              if (!Object(Yr.a)(u, [r, o]))
                if (n) {
                  var d = co[r]
                  if (!d) return
                  var m = uo(d, o === so ? 'over' : io[o])
                  if (m) Object(Ve.p)(i)(Ve.n.setTargetingAgeBucket(m)), s(m)
                  else {
                    var p = Object.keys($t.d[d])[0]
                    e._setAgeBucket({ minAge: d, maxAge: p })
                  }
                } else {
                  var g = o === so ? 'over' : io[o]
                  if (!g) return
                  var f = uo(co[r], g)
                  if (f) Object(Ve.p)(i)(Ve.n.setTargetingAgeBucket(f)), s(f)
                  else {
                    var h = lo[g].slice(-1)[0].minAge
                    e._setAgeBucket({ minAge: h, maxAge: g })
                  }
                }
            }),
            g()(l()(e), '_setAgeBucket', function (t) {
              var n = t.maxAge,
                a = t.minAge,
                r = e.props,
                o = r.analytics,
                c = r.setTargetedAgeBucket,
                i = $t.d[a][n || 'over']
              if (!i)
                throw new Error(
                  'Age bucket not found for minAge: "'.concat(a, '", maxAge: "').concat(n || '<empty>', '"'),
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
                var t = $t.e[e],
                  n = t.maxAge,
                  a = t.minAge
                return [co.indexOf(a), n ? io.indexOf(n) : so]
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.match,
                  n = e.selectedAgeBucket,
                  a = e.selectedGender,
                  r = e.targetedLocations,
                  o = t.params,
                  c = o.quickPromotePlatform,
                  i = o.screenName,
                  l = o.statusId,
                  s = ze({ numLocations: r.length }),
                  u = $t.e[n],
                  d = u.maxAge,
                  m = u.minAge,
                  p = this._sliderValueFromSelectedAgeBucket(n),
                  g = d || oo
                return h.a.createElement(
                  L.a,
                  { style: po.qpContainer, testID: J },
                  h.a.createElement(N, { screenType: Ve.c.Targeting }),
                  h.a.createElement(U, { subtitle: $r, title: Zr }),
                  h.a.createElement(Ua.a, {
                    description: Object(he.a)(
                      r.map(function (e) {
                        return e.localized_name
                      }),
                    ),
                    label: h.a.createElement(j.b, { weight: 'bold' }, s),
                    link: Object(Ve.j)(i, l, c, Ve.c.TargetingLocation),
                    testID: le,
                  }),
                  h.a.createElement(
                    D,
                    { label: eo },
                    h.a.createElement(
                      L.a,
                      { style: po.ageRangeSlider },
                      h.a.createElement(Qr.a, {
                        endThumbAccessibilityLabel: no,
                        endThumbAccessibilityLabelValueText: '"'.concat(g, '"'),
                        endThumbLabel: g,
                        max: so,
                        min: 0,
                        onChange: this._handleAgeBucketChange,
                        startThumbAccessibilityLabel: to,
                        startThumbAccessibilityLabelValueText: '"'.concat(m, '"'),
                        startThumbLabel: m,
                        value: p,
                      }),
                    ),
                  ),
                  h.a.createElement(
                    D,
                    { label: ao, withBottomBorder: !1 },
                    h.a.createElement(
                      L.a,
                      { style: po.genderSelection },
                      h.a.createElement(Kr.a, {
                        name: 'gender',
                        onChange: this._handleGenderChange,
                        options: ro,
                        value: a,
                      }),
                    ),
                  ),
                )
              },
            },
          ]),
          n
        )
      })(h.a.PureComponent)
      g()(mo, 'contextType', fe.a)
      var po = A.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            genderSelection: { marginTop: e.spaces.space4 },
            ageRangeSlider: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        go = Wr(mo),
        fo = n('q9Zt'),
        ho = W.a.a065172e,
        bo = W.a.cfcdb4a1,
        yo = W.a.dcfb0332,
        vo = W.a.c1df579e,
        _o = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), 'state', { isLoaded: !1 }),
              g()(l()(e), '_getRetweetOrTweet', function () {
                var t = e.props.tweet
                return t ? en.a.getOriginalTweet(t) : t
              }),
              g()(l()(e), '_render', function () {
                var t = e.props.history,
                  n = e._getRetweetOrTweet()
                return !n || (n && n.user.id_str !== e.context.loggedInUserId)
                  ? h.a.createElement(
                      vt.b,
                      { history: t, onBackClick: e._handleGoBack, title: yo },
                      h.a.createElement(fo.a, { onRetry: null, title: ho }),
                    )
                  : e._renderPage()
              }),
              g()(l()(e), '_renderHeader', Sa.a),
              g()(l()(e), '_renderPage', function () {
                var t = e.props,
                  n = t.history,
                  a = t.match,
                  r = t.promoteErrorCode,
                  o = t.promoteFetchStatus,
                  c = a.params,
                  i = c.quickPromotePlatform,
                  l = c.quickPromoteScreenName,
                  s = c.screenName,
                  u = c.statusId,
                  d = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                  m = e.context.featureSwitches.isTrue('responsive_web_qp_payment_select_enabled'),
                  p = d ? Ve.d : Ve.b,
                  g = function (e) {
                    return Object(Ve.j)(s, u, i, e)
                  }
                switch (l) {
                  case 'intro':
                    return e._renderSplashPage()
                  case 'objective':
                    if (d) {
                      var f = g(Ve.c.Targeting)
                      return e._renderProgressPage(Ve.d.Objective, f)
                    }
                    n.replace(Object(Ve.j)(s, u, i, Ve.c.Targeting))
                    break
                  case 'targeting':
                    var h = g(Ve.c.BudgetSelect)
                    return e._renderProgressPage(p.Targeting, h)
                  case 'budget_select':
                    var y = g(Ve.c.Review)
                    return e._renderProgressPage(p.BudgetSelect, y)
                  case 'review':
                    var v = [tt.a.LOADING, tt.a.LOADED].includes(o) && !r
                    return e._renderProgressPage(v ? p.Finish : p.Review)
                  case 'payment':
                    return e._renderProgressPage(p.Review)
                  case 'targeting_location':
                    return e._renderPopupPage()
                  case 'payment_select':
                    return m || n.replace(Object(Ve.j)(s, u, i, Ve.c.Review)), e._renderNavigationPage()
                  case 'done':
                    return e._renderSplashPage()
                  default:
                    throw b()
                }
              }),
              g()(l()(e), '_renderProgressPage', function (t, n) {
                var a = e.props.history
                return h.a.createElement(
                  vt.b,
                  { documentTitle: yo, history: a, renderHeader: e._renderHeader },
                  h.a.createElement(kr.a, {
                    leftControl: h.a.createElement(xr.a, { autofocus: !0, onClick: e._handleGoBack, testID: se }),
                    rightControl: n && h.a.createElement(Qn.a, { link: n, testID: K, type: 'brandText' }, vo),
                  }),
                  h.a.createElement(Nn.a, { progress: t, style: Eo.progressBar }),
                  h.a.createElement(L.a, { style: Eo.noScrollView }, e._renderRoutes()),
                )
              }),
              g()(l()(e), '_renderNavigationPage', function () {
                var t = e.props.history
                return h.a.createElement(
                  vt.b,
                  { documentTitle: yo, history: t, renderHeader: e._renderHeader },
                  h.a.createElement(kr.a, {
                    leftControl: h.a.createElement(xr.a, { autofocus: !0, onClick: e._handleGoBack, testID: se }),
                  }),
                  h.a.createElement(L.a, { style: Eo.noScrollView }, e._renderRoutes()),
                )
              }),
              g()(l()(e), '_renderPopupPage', function () {
                var t = e.props.history
                return h.a.createElement(
                  vt.b,
                  { documentTitle: yo, history: t, renderHeader: e._renderHeader },
                  e._renderRoutes(),
                )
              }),
              g()(l()(e), '_renderSplashPage', function () {
                return e._renderRoutes()
              }),
              g()(l()(e), '_renderRoutes', function () {
                var t = e.props.match.params.quickPromoteScreenName
                switch (t) {
                  case 'intro':
                    return h.a.createElement(yr.b, { component: qt })
                  case 'objective':
                    return h.a.createElement(yr.b, { component: Dn })
                  case 'targeting':
                    return h.a.createElement(yr.b, { component: go })
                  case 'targeting_location':
                    return h.a.createElement(yr.b, { component: zr })
                  case 'budget_select':
                    return h.a.createElement(yr.b, { component: et })
                  case 'review':
                    return h.a.createElement(yr.b, { component: br })
                  case 'payment':
                    return h.a.createElement(yr.b, { component: Ia })
                  case 'payment_select':
                    return h.a.createElement(yr.b, { component: la })
                  case 'done':
                    return h.a.createElement(yr.b, { component: ht })
                  default:
                    throw b()
                }
              }),
              g()(l()(e), '_handleGoBack', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.campaigns,
                  r = t.history,
                  o = t.location,
                  c = t.match.params,
                  i = c.quickPromotePlatform,
                  l = c.quickPromoteScreenName,
                  s = c.screenName,
                  u = c.statusId,
                  d = e.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                  m =
                    e.context.featureSwitches.isTrue('responsive_web_qp_intro_experiment_enabled') &&
                    !(null == a || !a.length)
                Object(Ve.p)(n)(Ve.n.back(l)), Object(Ve.m)(r, o)(s, u, i, l, d, m)
              }),
              g()(l()(e), '_handleRequestRetry', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.match.params.quickPromoteScreenName
                Object(Ve.p)(n)(Ve.n.reload(a)), window.location.reload()
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
                    a = t.createLocalApiErrorHandler,
                    r = t.fetchAdsAccountDataIfNeeded,
                    o = t.fetchAvailableBudgetsIfNeeded,
                    c = t.fetchCouponsIfNeeded,
                    i = t.fetchCurrentTargetingLocationIfNeeded,
                    l = t.fetchQuickPromoteEligibilityIfNeeded,
                    s = t.fetchTweetIfNeeded,
                    u = t.match,
                    d = t.promoteFetchStatus,
                    m = t.setPromoteFetchStatus,
                    p = t.statusId,
                    g = u.params.quickPromoteScreenName,
                    f = this.context.loggedInUserId
                  return f
                    ? (tt.a.LOADED === d && g !== Ve.c.Done && m(tt.a.NONE),
                      Object(F.b)(
                        'initial-load',
                        Promise.all([s(p), i(), r(f), c(), l({ statusId: p })])
                          .then(function () {
                            return o()
                          })
                          .then(function () {
                            return (0, e.props.handleFirstLoad)()
                          }),
                      )
                        .catch(function (e) {
                          a(yt.a)(e), Object(Ve.p)(n)(Ve.n.pageLoadFail(e.message))
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
                  var a = Object(tt.d)(t, this.state.isLoaded ? tt.a.LOADED : tt.a.LOADING)
                  return a !== tt.a.LOADED
                    ? h.a.createElement(
                        vt.b,
                        { documentTitle: yo, history: n, renderHeader: this._renderHeader },
                        h.a.createElement(Ta, null),
                        h.a.createElement(bt.a, {
                          fetchStatus: a,
                          onRequestRetry: this._handleRequestRetry,
                          render: this._render,
                          retryMessage: bo,
                        }),
                      )
                    : h.a.createElement(bt.a, {
                        fetchStatus: a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._render,
                        retryMessage: bo,
                      })
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(_o, 'contextType', fe.a)
      var Eo = A.a.create(function (e) {
          return { progressBar: { backgroundColor: e.colors.gray50 }, noScrollView: { overflowX: 'hidden', flex: 1 } }
        }),
        wo = st(_o)
      t.default = wo
    },
    kevv: function (e, t, n) {
      'use strict'
      var a = n('T0aG'),
        r = n.n(a),
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
        var a = Object(c.a)(n) ? Array(t.length).fill(n) : n,
          l = t.map(function (e) {
            return Object(c.a)(e)
              ? function (t) {
                  var n = 'object' === r()(t) ? (null == t ? void 0 : t[e]) : void 0
                  return Object(c.a)(n) || Object(o.a)(n) ? n : void 0
                }
              : e
          })
        return e.concat().sort(
          (function (e, t) {
            return function (n, a) {
              for (var r = 0; r < e.length; r++) {
                var o = e[r],
                  c = t[r] || 'asc',
                  l = i(o(n), o(a))
                if (0 !== l) return 'desc' === c ? -1 * l : l
              }
              return 0
            }
          })(l, a),
        )
      }
    },
    z4TA: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationScreen', function () {
          return Ze
        })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        g = n.n(p),
        f =
          (n('hBpG'),
          n('7x/C'),
          n('jQ3i'),
          n('x4t0'),
          n('lTEL'),
          n('kYxP'),
          n('5BYb'),
          n('KqXw'),
          n('MvUL'),
          n('2G9S'),
          n('ho0z'),
          n('aeN7')),
        h = n('ERkP'),
        b = n.n(h),
        y = n('s4rk'),
        v = n('zI2C'),
        _ = n('6ZtA'),
        E = n('es0u'),
        w = (n('WNMA'), n('6/RC')),
        C = n('x5Pi'),
        I = n('8Lfv'),
        P = n('QK5w'),
        T = n('eSoz'),
        S = n('RqPI'),
        k = n('9D1O'),
        x = n('pNZL'),
        O = n('XOJV'),
        L = n('G6rE'),
        j = n('rxPX'),
        A = n('0KEI'),
        D = n('Mx3A'),
        B = function (e, t) {
          return e.location && e.location.state && e.location.state[t]
        },
        M = function (e, t) {
          return 'PUSH' === t.history.action
        },
        F = function (e, t) {
          var n = B(t, 'focal')
          return n || R(e, t)
        },
        R = function (e, t) {
          var n = t.location,
            a = t.match
          return a.params && a.params.statusId
            ? a.params.statusId
            : n.query && n.query.tweet_id && 'string' == typeof n.query.tweet_id
            ? n.query.tweet_id
            : ''
        },
        q = function (e, t) {
          return t.match.params.screenName
        },
        N = function (e, t) {
          return B(t, 'socialContext')
        },
        H = function (e, t) {
          return B(t, 'topicFollowPrompt')
        },
        z = function (e, t) {
          return B(t, 'contextTweetId')
        },
        U = function (e, t) {
          return B(t, 'promotedContent')
        },
        V = function (e, t) {
          return B(t, 'overflow')
        },
        G = function (e, t) {
          return B(t, 'contextualClientEventInfo')
        },
        W = function (e, t) {
          var n = B(t, 'referrer'),
            a = F(e, t)
          return !!n && n.includes('/i/topics/tweet/'.concat(a))
        },
        Q = function (e, t) {
          if (!w.canUseDOM) return !1
          var n = t.location.query,
            a = Object(P.a)(e, t)
          return (
            Object(D.b)({
              query: n,
              httpReferer: a ? '' : document.referrer || '',
              requestUrl: window.location.href,
              emptyIfServerRendered: !1,
            }).referral_type === D.a.Web
          )
        },
        K = function (e, t) {
          return O.a.selectHydrated(e, F(e, t))
        },
        X = function (e, t) {
          var n = F(e, t),
            a = O.a.selectHydrated(e, n)
          return a && a.conversation_id_str ? O.a.selectHydrated(e, a.conversation_id_str) : null
        },
        J = function (e, t) {
          return O.a.selectFetchStatus(e, F(e, t))
        },
        Y = function (e, t) {
          return t.location.query && 'string' == typeof t.location.query.cxt ? t.location.query.cxt : void 0
        }
      function Z(e, t) {
        var n = K(e, t),
          a = n ? Object(T.g)(e, n) : void 0
        return n && a ? Object(C.c)(n, a) : void 0
      }
      var $ = Object(j.a)()
          .propsFromState(function () {
            return {
              communitySocialContextOfFocalTweet: Z,
              contextTweetId: z,
              contextualClientEventInfo: G,
              focalTweet: K,
              initialFetchStatus: J,
              isForwardNavigation: M,
              isReferralSource: Q,
              isReferredFromExploreTopics: W,
              userLanguage: S.o,
              loggedInUser: L.e.selectLoggedInUser,
              overflowCount: V,
              promotedContent: U,
              richLandingContextId: Y,
              rootTweet: X,
              screenName: q,
              selectedTweetId: R,
              socialContext: N,
              startLocation: k.t,
              statusId: F,
              topicFollowPrompt: H,
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
        ee = n('ymux'),
        te = n('rkhm'),
        ne = n('SrtL'),
        ae = n('8UdT'),
        re = n('kGix'),
        oe = n('muX9'),
        ce = n('3XMw'),
        ie = n.n(ce),
        le = (n('JtPf'), n('87if'), n('zb92')),
        se = Object(le.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(6), n.e(189)]).then(n.bind(null, 'uo3S'))
          },
          renderPlaceholder: function (e, t) {
            return null
          },
        }),
        ue = n('yiKp'),
        de = n.n(ue),
        me = n('/yvb'),
        pe = n('sebV'),
        ge = n('BXlL'),
        fe = n('Irs7'),
        he = n('aITJ'),
        be = ie.a.af9c8a3d,
        ye = function (e) {
          var t = e.featureSwitches,
            n = e.scribeNamespace,
            a = e.startLocation,
            r = e.userId,
            o = Object(fe.b)(),
            c = !!r && he.b.isMobileOS() && !pe.a.isStandaloneApp(),
            i = b.a.useCallback(
              function (e) {
                e.preventDefault(),
                  o.scribe(de()(de()({}, n), {}, { element: 'open_app_button', action: 'click' })),
                  Object(ge.b)({ startLocation: a, featureSwitches: t, userId: r })
              },
              [o, t, n, a, r],
            )
          return c && t.isTrue('responsive_web_open_app_appbar_button_enabled')
            ? b.a.createElement(me.a, {
                accessibilityLabel: be,
                children: be,
                onPress: i,
                size: 'small',
                type: 'primaryOutlined',
              })
            : null
        },
        ve = n('rJoH'),
        _e = n('yoO3'),
        Ee = n('caTy'),
        we = n('PeW/'),
        Ce = n('AUxQ'),
        Ie = n('Rp9C'),
        Pe = n('7JQg'),
        Te = n('VS6U'),
        Se = n('tocL'),
        ke = n('HBr9'),
        xe = n('2fY8'),
        Oe = n('MWbm'),
        Le = n('G8HL'),
        je = n('pxuL'),
        Ae = n('t62R'),
        De = n('rHpw'),
        Be = n('oQhu'),
        Me = n('mN6z'),
        Fe = ie.a.ea831526,
        Re = ie.a.a90e1e67({ noun: '' }),
        qe = ie.a.c299a6cf,
        Ne = ie.a.c2ed3314,
        He = ie.a.ad666301,
        ze = ie.a.f0c37ddb,
        Ue = { page: 'tweet' },
        Ve = { page: 'tweet', section: 'landing' },
        Ge = Object(Be.a)(function (e, t) {
          return { items: [Ie.a.forTweet(e, t)], tweet_id: e }
        }),
        We = Object(Be.a)(function (e) {
          return Object(te.a)(e)
        }),
        Qe = Object(Be.a)(function (e, t, n, a, r) {
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
            with_rux_injections: a,
            rux_context: r,
          }
        }),
        Ke = Object(Be.a)(function (e, t, n) {
          return Object(ee.a)({ focalTweetId: e, fetchOptions: t, featureSwitches: n })
        }),
        Xe = [Se.a.Community]
      function Je(e) {
        var t = e.context
        if (!t) return null
        switch (t.contextType) {
          case Se.a.Community:
            var n = t.landingUrl ? Object(Ee.b)(t.landingUrl) : void 0
            return b.a.createElement(Ae.b, { link: n }, t.text)
          default:
            return null
        }
      }
      function Ye(e) {
        if (!e) return null
        switch (e.contextType) {
          case Se.a.Community:
            return Ne
          default:
            return null
        }
      }
      var Ze = (function (e) {
        u()(n, e)
        var t = m()(n)
        function n(e, a) {
          var o
          return (
            r()(this, n),
            (o = t.call(this, e, a)),
            g()(l()(o), '_getFabState', function () {
              var e = o.props,
                t = e.promotedContent
              return { inReplyToStatusId: e.statusId, promotedContent: t }
            }),
            g()(l()(o), '_getNavigationParams', function () {
              var e = o.props,
                t = e.contextualClientEventInfo,
                n = e.overflowCount,
                a = e.richLandingContextId,
                r = e.tweetDetailNav,
                c = o._shouldRenderRuxInjections()
              return Qe(r, t, n, c, a)
            }),
            g()(l()(o), '_getModule', function () {
              var e = o.props.statusId,
                t = o.context.featureSwitches,
                n = o._getNavigationParams()
              return Ke(e, n, t)
            }),
            g()(l()(o), '_handleEntriesRendered', function (e) {
              var t = e.entries,
                n = e.fetchStatus,
                a = o.props.recordTTFL
              if ((n === re.a.FAILED && (o._shouldRecordTTFL = !1), o._shouldRecordTTFL && t.length)) {
                var r = t.some(function (e) {
                  return e.type === ae.b.Tweet
                })
                ;(o._shouldRecordTTFL = !1), r && a && a('permalink')
              }
            }),
            g()(l()(o), '_shouldRedirectToCanonical', function () {
              var e,
                t = o.props,
                n = t.focalTweet,
                a = t.screenName
              return (
                !(
                  t.selectedTweetId !== t.statusId ||
                  null == n ||
                  null === (e = n.user) ||
                  void 0 === e ||
                  !e.screen_name
                ) &&
                a &&
                n &&
                a.toLowerCase() !== n.user.screen_name.toLowerCase()
              )
            }),
            g()(l()(o), '_redirectToCanonical', function () {
              var e = o.props,
                t = e.history,
                n = e.location
              t.replace({ pathname: o._getCanonicalPath(), query: n.query, state: n.state })
            }),
            g()(l()(o), '_getCanonicalPath', function () {
              var e = o.props.focalTweet
              return e ? '/'.concat(e.user.screen_name, '/status/').concat(e.id_str) : '/'
            }),
            g()(l()(o), '_getPathForTweetId', function (e, t) {
              return '/'.concat(t || 'i', '/status/').concat(e)
            }),
            g()(l()(o), '_getScribeNamespace', function () {
              return o._shouldRenderRuxInjections() ? Ve : Ue
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
                  a,
                  r,
                  o,
                  c,
                  i = this.context.loggedInUserId,
                  l = this.props,
                  s = l.communitySocialContextOfFocalTweet,
                  u = l.focalTweet,
                  d = l.history,
                  m = l.promotedContent,
                  p = l.socialContext,
                  g = l.statusId,
                  f = l.userLanguage
                if (u) {
                  var h, E, w, I
                  ;(e = ze({ tweetText: Object(xe.a)(u.text), fullName: u.user.name })),
                    (t = 'twitter://status?id='.concat(u.id_str)),
                    (n = 'https://twitter.com'.concat(this._getCanonicalPath() || '')),
                    (a = He({ fullName: u.user.name })),
                    (r = u.possibly_sensitive),
                    (o = '“'.concat((null == u ? void 0 : u.full_text) || '', '”')),
                    (c =
                      (null == u || null === (h = u.entities) || void 0 === h || null === (E = h.media) || void 0 === E
                        ? void 0
                        : E[0].media_url_https) || '')
                  var P =
                    null === (w = u.entities) || void 0 === w || null === (I = w.media) || void 0 === I
                      ? void 0
                      : I[0].url
                  P && ((o = o.replace(' '.concat(P), '')), (c = ''.concat(c, ':large')))
                }
                var T = (function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                    return t.find(function (e) {
                      return e && Xe.includes(e.contextType)
                    })
                  })(p, s),
                  S = T && b.a.createElement(Je, { context: T })
                return b.a.createElement(
                  Pe.c,
                  { data: Ge(g, m), namespace: this._getScribeNamespace() },
                  b.a.createElement(
                    _e.a,
                    { behavioralEventViewType: 'tweet_details' },
                    r
                      ? b.a.createElement(oe.a, null, b.a.createElement('meta', { content: 'adult', name: 'rating' }))
                      : null,
                    n
                      ? b.a.createElement(
                          oe.a,
                          null,
                          b.a.createElement('link', { href: n, rel: 'canonical' }),
                          b.a.createElement('link', {
                            href: 'https://publish.twitter.com/oembed?url='.concat(n),
                            rel: 'alternate',
                            title: e,
                            type: 'application/json+oembed',
                          }),
                        )
                      : null,
                    b.a.createElement(ve.a, { canonical: n, description: o, image: c, title: a, type: 'article' }),
                    b.a.createElement(_.a, {
                      featureSwitches: this.context.featureSwitches,
                      loggedInUserId: i,
                      userLanguage: f,
                    }),
                    b.a.createElement(v.a, { deepLink: t }),
                    n ? b.a.createElement(y.a, { canonical: n }) : null,
                    b.a.createElement(
                      C.b.Provider,
                      { value: null == T ? void 0 : T.contextType },
                      b.a.createElement(Te.a, {
                        backLocation: '/',
                        documentTitle: e,
                        history: d,
                        primaryContent: this._renderTimeline(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: this._renderSidebarContent(),
                        subtitle: S,
                        title: (T && Ye(T)) || (u && u.self_thread ? qe : Re),
                      }),
                    ),
                    b.a.createElement(ne.a, { title: e, withMeta: !1 }),
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
                  a = this.props,
                  r = a.focalTweet,
                  o = a.startLocation
                return b.a.createElement(
                  Oe.a,
                  { style: $e.mobileAppBarRightControl },
                  b.a.createElement(ye, {
                    featureSwitches: t,
                    scribeNamespace: this._getScribeNamespace(),
                    startLocation: o,
                    userId: n,
                  }),
                  b.a.createElement(we.b, { focalTweet: r, module: this._getModule() }),
                )
              },
            },
            {
              key: '_renderSidebarContent',
              value: function () {
                var e = this.props.focalTweet
                return e && e.user.id_str
                  ? b.a.createElement(
                      E.a,
                      { focalTweetId: null == e ? void 0 : e.id_str, withTopicsToFollow: !1, withWhoToFollow: !1 },
                      b.a.createElement(se, { focalTweetId: e.id_str }),
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
                  a = e.location,
                  r = e.promotedContent,
                  o = e.rootTweet,
                  c = e.screenName,
                  i = e.selectedTweetId,
                  l = e.socialContext,
                  s = e.statusId,
                  u = e.topicFollowPrompt,
                  d = { selectedTweetId: i }
                return b.a.createElement(
                  ke.a,
                  { collectionName: Fe },
                  b.a.createElement(Ce.a, {
                    apiErrorHandlerMap: We(c),
                    contextTweetId: t,
                    fetchOptions: this._getNavigationParams(),
                    focalTweet: n,
                    focalTweetId: s,
                    location: a,
                    module: this._getModule(),
                    onEntriesRendered: this._handleEntriesRendered,
                    promotedContent: r,
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
                  a = n.clearTimelineCache,
                  r = n.createLocalApiErrorHandler,
                  o = n.screenName
                a(e, t).catch(r(We(o)))
              },
            },
          ]),
          n
        )
      })(b.a.Component)
      g()(Ze, 'contextType', je.a), g()(Ze, 'defaultProps', { recordTTFL: f.c })
      var $e = De.a.create(function (e) {
        return {
          mobileAppBarRightControl: {
            flexDirection: 'row',
            alignItems: 'center',
            height: e.componentDimensions.appBarHeightPx,
          },
        }
      })
      t.default = $(Object(Le.a)(Ze))
    },
  },
])
//# sourceMappingURL=WIPED
