;(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
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
        A = n('8UdT'),
        j = n('IcAo'),
        D = n('VrCx'),
        B = n('ReVx'),
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
                      Object(j.a)(
                        {},
                        L.b,
                        g()({}, A.b.Tweet, {
                          handlers: g()(
                            {},
                            D.a.Tweet,
                            Object(B.a)({
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
          return vo
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
            r = Object(C.o)(e)
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
              setDailyBudget: C.E,
              setBudgetDuration: C.z,
              fetchForecastedAudienceIfNeeded: C.h,
              setBudgetErrorMessage: C.A,
            }
          })
          .withAnalytics({ page: 'quick_promote' }),
        L = (n('1t7P'), n('jQ/y'), n('MWbm')),
        A = n('t62R'),
        j = n('rHpw'),
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
            !!o && h.a.createElement(A.b, { weight: 'bold' }, o),
            !!n &&
              h.a.createElement(
                L.a,
                { style: B.descriptionContainer },
                h.a.createElement(
                  A.b,
                  { color: 'gray700', dir: a, size: 'subtext2', style: B.descriptionContainer, testID: r },
                  n,
                ),
              ),
            t,
          )
        },
        B = j.a.create(function (e) {
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
          return (
            (function (e) {
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
            })(e.screenType),
            null
          )
        },
        N = n('Gpeq'),
        H = n('tevE'),
        z = function (e) {
          var t = e.primaryLabel,
            n = e.subtitle,
            a = e.title
          return h.a.createElement(
            L.a,
            { style: [U.bottomBorder, U.titleContainer] },
            h.a.createElement(
              A.b,
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
                { style: U.primaryLabelContainer },
                h.a.createElement(A.b, { align: 'center', color: 'primary', size: 'title4' }, t),
              ),
            h.a.createElement(
              L.a,
              { style: U.subtitleContainer },
              h.a.createElement(H.a, { align: 'center', color: 'gray700' }, n),
            ),
          )
        },
        U = j.a.create(function (e) {
          return {
            titleContainer: { paddingVertical: e.spaces.space32 },
            primaryLabelContainer: { marginTop: e.spaces.space12 },
            subtitleContainer: { marginTop: e.spaces.space12 },
            bottomBorder: { borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: e.colors.borderColor },
          }
        }),
        V = n('3XMw'),
        G = n.n(V),
        W = 'introButton',
        Q = 'nextButton',
        K = 'objectiveScreen',
        X = 'targetingScreen',
        J = function (e) {
          return 'targetingScreenGender'.concat(e)
        },
        Y = function (e) {
          return 'objectiveScreenObjective'.concat(e)
        },
        Z = 'targetingLocationScreen',
        $ = 'budgetSelectScreen',
        ee = 'reviewScreen',
        te = 'reviewButton',
        ne = 'reviewObjectiveDescription',
        ae = 'reviewTargetingDescription',
        re = 'reviewBudgetAndDurationDescription',
        oe = 'reviewPaymentPivot',
        ce = 'reviewPromotionTotalDescription',
        ie = 'targetingLocationPivot',
        le = 'backButton',
        se = 'targetingLocationSearch',
        ue = 'targetingLocationItem',
        de = 'paymentMethodSelect',
        me = n('4zmP'),
        pe = n('9RkS'),
        ge = n('v6aA'),
        fe = n('Xrkv'),
        he = n('SrIh'),
        be = G.a.c4d0434a,
        ye = G.a.dc4a9413,
        ve = G.a.bad70c09,
        _e = G.a.c133a39b,
        Ee = G.a.ee5da8f4,
        we = G.a.g4bf9cb7,
        Ce = G.a.gc3ce5d9,
        Ie = G.a.c1778029,
        Pe = G.a.cb51c854,
        Te = G.a.bb7b39e1,
        Se = G.a.eb9466d0,
        ke = G.a.c21037d0,
        xe = G.a.b07cc9f1,
        Oe = G.a.ce309bed,
        Le = G.a.c6c16a51,
        Ae = G.a.cc49d03f,
        je = G.a.dbe9353d,
        De = G.a.c64974fb,
        Be = G.a.i638f89c
      function Me(e) {
        switch (e) {
          case 'AnyGender':
            return Pe
          case 'Male':
            return Te
          case 'Female':
            return Se
          default:
            return Object(he.a)('Unknown gender: '.concat(e)), e
        }
      }
      function Fe(e) {
        switch (e) {
          case 'COUNTRIES':
            return ke
          case 'REGIONS':
            return xe
          case 'METROS':
            return Oe
          case 'CITIES':
            return Le
          case 'POSTAL_CODES':
            return Ae
          default:
            return Object(he.a)('Unknown targeting locationType: '.concat(e)), e
        }
      }
      function Re(e) {
        var t = e.amount,
          n = e.currency,
          a = e.fractionDigits,
          r = e.lang
        return t.toLocaleString(Object(N.a)(r), {
          currency: n,
          style: 'currency',
          maximumFractionDigits: void 0 !== a ? a : 2,
          minimumFractionDigits: void 0 !== a ? a : 2,
        })
      }
      function qe(e) {
        var t = e.currency,
          n = e.durationDays,
          a = e.lang,
          r = Re({ amount: e.totalBudgetNum, lang: a, currency: t, fractionDigits: 0 })
        return ye({ totalBudget: r, durationLabel: ze({ durationDays: n }) })
      }
      function Ne(e) {
        var t = e.currency,
          n = e.dailyBudgetNum,
          a = e.durationDays,
          r = Re({ amount: n, lang: e.lang, currency: t, fractionDigits: 0 })
        return be({ dailyBudget: r, durationLabel: ze({ durationDays: a }) })
      }
      function He(e) {
        var t = e.numLocations,
          n = G.a.ia24dc8c(t)
        return ve({ numLocations: n })
      }
      function ze(e) {
        var t = e.durationDays,
          n = G.a.ia24dc8c(t)
        return we({ durationDays: n })
      }
      var Ue = n('yE5w'),
        Ve = G.a.a3a09d48,
        Ge = G.a.e7eb3683,
        We = G.a.d9f6e3cd,
        Qe = G.a.d9d6e10e,
        Ke = G.a.b3954ec9,
        Xe = G.a.e1b48db4,
        Je = Array(30)
          .fill(null)
          .map(function (e, t) {
            return t + 1
          }),
        Ye = (function (e) {
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
                  c = Je[t]
                r !== c &&
                  (Object(Ue.p)(a)(Ue.n.setBudgetDuration(''.concat(c))), o(c), e._fetchForecastedAudienceIfNeeded())
              }),
              g()(l()(e), '_handleBudgetSlider', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.availableBudgets,
                  o = n.dailyBudget,
                  c = n.setDailyBudget,
                  i = r[t]
                o !== i &&
                  (Object(Ue.p)(a)(Ue.n.setDailyBudget(''.concat(i))), c(i), e._fetchForecastedAudienceIfNeeded())
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
                    p = s.toLocaleString(Object(N.a)(m), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    g = i[0].toLocaleString(Object(N.a)(m), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    f = i
                      .slice(-1)[0]
                      .toLocaleString(Object(N.a)(m), {
                        currency: l,
                        style: 'currency',
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }),
                    b = c
                      ? ((t = (e = c).high),
                        (n = e.low),
                        (a = G.a.cf8abf58(n)),
                        (r = G.a.cf8abf58(t)),
                        Ce({ audienceLow: a, audienceHigh: r }))
                      : ' ',
                    y = ze({ durationDays: u }),
                    _ = ze({ durationDays: Je[0] }),
                    E = ze({ durationDays: Je.slice(-1)[0] }),
                    w = this._getSliderProps(i, s),
                    C = this._getSliderProps(Je, u),
                    I = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled')
                      ? Ne({ dailyBudgetNum: s, durationDays: u, lang: m, currency: l })
                      : qe({ totalBudgetNum: s * u, durationDays: u, lang: m, currency: l })
                  return h.a.createElement(
                    L.a,
                    { style: Ze.qpContainer, testID: $ },
                    h.a.createElement(q, { screenType: Ue.c.BudgetSelect }),
                    d &&
                      h.a.createElement(
                        L.a,
                        { style: Ze.gutter },
                        h.a.createElement(me.a, { text: d, type: 'danger' }),
                      ),
                    h.a.createElement(z, { primaryLabel: I, subtitle: b, title: Ve }),
                    h.a.createElement(
                      D,
                      { label: Ge },
                      h.a.createElement(
                        L.a,
                        { style: Ze.childSpacing },
                        h.a.createElement(
                          pe.a,
                          v()({ accessibilityLabel: We, accessibilityLabelValueText: '"'.concat(p, '"') }, w, {
                            maxIcon: h.a.createElement(A.b, { style: Ze.iconText }, f),
                            minIcon: h.a.createElement(A.b, { style: Ze.iconText }, g),
                            onChange: this._handleBudgetSlider,
                            thumbLabel: p,
                          }),
                        ),
                      ),
                    ),
                    h.a.createElement(
                      D,
                      { label: Qe },
                      h.a.createElement(
                        L.a,
                        { style: Ze.childSpacing },
                        h.a.createElement(
                          pe.a,
                          v()({ accessibilityLabel: Ke, accessibilityLabelValueText: '"'.concat(y, '"') }, C, {
                            maxIcon: h.a.createElement(A.b, { style: Ze.iconText }, E),
                            minIcon: h.a.createElement(A.b, { style: Ze.iconText }, _),
                            onChange: this._handleDurationSlider,
                            thumbLabel: y,
                          }),
                        ),
                      ),
                    ),
                    h.a.createElement(
                      L.a,
                      { style: Ze.disclaimer },
                      h.a.createElement(H.a, { align: 'center', color: 'gray700', size: 'subtext2' }, Xe),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(Ye, 'contextType', ge.a)
      var Ze = j.a.create(function (e) {
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
        $e = O(Ye),
        et = n('kGix'),
        tt = n('XOJV'),
        nt = function (e, t) {
          return t.match.params.statusId
        },
        at = function (e, t) {
          return tt.a.selectHydrated(e, nt(0, t))
        },
        rt = function (e, t) {
          return Object(et.d)(
            tt.a.selectFetchStatus(e, nt(0, t)),
            e.quickPromote.budget.availableBudgetsFetchStatus,
            e.quickPromote.targeting.initialTargetedLocationsFetchStatus,
            e.quickPromote.account.accountDataFetchStatus,
          )
        },
        ot = function (e, t) {
          return e.quickPromote.promoteStatus
        },
        ct = function (e, t) {
          return e.quickPromote.promoteErrorCode
        },
        it = function (e, t) {
          return e.quickPromote.account.campaigns
        },
        lt = Object(E.a)()
          .propsFromState(function () {
            return {
              statusId: nt,
              fetchStatus: rt,
              tweet: at,
              campaigns: it,
              promoteFetchStatus: ot,
              promoteErrorCode: ct,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_SCREEN',
              ),
              fetchTweetIfNeeded: tt.a.fetchOneIfNeeded,
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
                    a = e.location,
                    r = e.match.params,
                    o = r.quickPromotePlatform,
                    c = r.quickPromoteScreenName,
                    i = r.screenName,
                    l = r.statusId,
                    s = { pa_signup_complete: a.query.pa_signup_complete || '' }
                  return Object(C.m)(i, l, o, c, n, s, t)
                })(e)
              },
              setPromoteFetchStatus: C.P,
            }
          })
          .withAnalytics(Ue.o),
        st = Object(E.a)().withAnalytics(Ue.o),
        ut = n('feu+'),
        dt = G.a.e1bca506,
        mt = G.a.e4a4c608,
        pt = G.a.a219e217,
        gt = (function (e) {
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
                Object(Ue.l)(n)(o, c, r)
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
                  Object(Ue.p)(e)(Ue.n.donePageLoad())
                },
              },
              {
                key: 'render',
                value: function () {
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(q, { screenType: Ue.c.Done }),
                    h.a.createElement(ut.a, {
                      actionLabel: pt,
                      headline: dt,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToAnalytics,
                      onClose: this._handleClose,
                      subtext: mt,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(gt, 'contextType', ge.a)
      var ft = st(gt),
        ht = n('v//M'),
        bt = n('W5XZ'),
        yt = n('jHSc'),
        vt =
          (n('Cm4o'),
          n('KrtT'),
          function (e) {
            return !!e.quickPromote.account.selectedFundingInstrument
          }),
        _t = function (e) {
          return e.quickPromote.coupons
        },
        Et = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        wt = Object(E.a)()
          .propsFromState(function () {
            return { hasFundingInstrument: vt, coupons: _t, lang: _.o, currency: Et }
          })
          .withAnalytics(Ue.o),
        Ct = n.p + 'desktop_header_image.bfa9e365.png',
        It = n('TIdA'),
        Pt = n('A91F')
      function Tt(e) {
        var t = e.style
        return h.a.createElement(
          L.a,
          { style: t },
          h.a.createElement(It.a, { accessibilityLabel: '', aspectMode: Pt.a.exact(750 / 306), image: Ct }),
        )
      }
      var St = n.p + 'mobile_header_image.431e8465.png'
      function kt(e) {
        var t = e.style
        return h.a.createElement(
          L.a,
          { style: t },
          h.a.createElement(It.a, { accessibilityLabel: '', aspectMode: Pt.a.COVER, image: St }),
        )
      }
      var xt = n('cHvH')
      function Ot(e) {
        var t = e.style
        return h.a.createElement(xt.a, null, function (e) {
          var n = e.windowHeight
          return e.windowWidth > j.a.theme.breakpoints.medium
            ? h.a.createElement(Tt, { style: t })
            : h.a.createElement(kt, { style: [t, { height: 0.5 * n }] })
        })
      }
      var Lt = G.a.dcfb0332,
        At = G.a.db841200,
        jt = G.a.hc67be9d,
        Dt = G.a.e8702fea,
        Bt = G.a.i2e3c1ce,
        Mt = G.a.dcfb0332,
        Ft = (function (e) {
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
                n.push(Object(Ue.j)(o, c, r, i ? Ue.c.Objective : Ue.c.Targeting))
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
                  Object(Ue.p)(r)(
                    Ue.n.introPageLoad({ hasFundingInstrument: c, entryPoint: d, otherEntryPoint: m, withCoupon: g }),
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
                    c = n.match.params.quickPromotePlatform === Ue.a.Rweb,
                    i = (null == a || null === (e = a.eligible_coupon) || void 0 === e ? void 0 : e.total_amount) || 0,
                    l = Re({
                      amount: i,
                      currency:
                        (null == a || null === (t = a.eligible_coupon) || void 0 === t ? void 0 : t.currency_code) || r,
                      lang: o,
                      fractionDigits: 0,
                    }),
                    s = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled') && i > 0,
                    u = s ? Dt({ couponAmount: l }) : Lt,
                    d = s ? Bt({ couponAmount: l }) : At,
                    m = s ? Mt : jt
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(q, { screenType: Ue.c.Intro }),
                    h.a.createElement(ut.a, {
                      actionLabel: m,
                      graphic: Ot,
                      graphicDisplayMode: 'illustrationFullWidth',
                      headline: u,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToNextPage,
                      onClose: this._handleClose,
                      primaryButtonTestID: W,
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
      g()(Ft, 'contextType', ge.a)
      var Rt = wt(Ft),
        qt = n('yiKp'),
        Nt = n.n(qt),
        Ht = n('RhWx'),
        zt = n.n(Ht),
        Ut = function (e, t) {
          return e.quickPromote.objective
        },
        Vt = function (e, t) {
          return tt.a.selectHydrated(
            e,
            (function (e, t) {
              return t.match.params.statusId
            })(0, t),
          )
        },
        Gt = Object(E.a)()
          .propsFromState(function () {
            return { selectedObjective: Ut, tweet: Vt }
          })
          .propsFromActions(function () {
            return { setObjective: C.L }
          })
          .withAnalytics(Ue.o),
        Wt = n('h0NW'),
        Qt = G.a.d7d55f3b,
        Kt = G.a.b25fd3d6,
        Xt = G.a.bf214f47,
        Jt = function (e) {
          var t = e.infoItems,
            n = e.onClose,
            a = e.onLoad
          return (
            h.a.useEffect(function () {
              return a()
            }, []),
            h.a.createElement(ut.a, {
              actionLabel: Xt,
              children: h.a.createElement(
                L.a,
                { style: Yt.infoItemGroup },
                h.a.createElement(Wt.a, { containerStyle: Yt.infoItem, items: t }),
              ),
              contentStyle: Yt.heading,
              graphicDisplayMode: 'none',
              headline: Qt,
              onAction: n,
              onClose: n,
              subtext: Kt,
              withCloseButton: !1,
            })
          )
        },
        Yt = j.a.create(function (e) {
          return {
            heading: { marginBottom: e.spaces.space40 },
            infoItemGroup: { marginBottom: e.spaces.space20 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0, marginBottom: e.spaces.space24 },
          }
        }),
        Zt = n('W2FU'),
        $t = n('E0cF'),
        en = n('gSL+'),
        tn = n('RKmr'),
        nn = n('Oib4'),
        an = n('Dcm7'),
        rn = n('iEUn'),
        on = n('pwey'),
        cn = n('Lsrn'),
        ln = n('k/Ka'),
        sn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ln.a)(
            'svg',
            Nt()(
              Nt()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [cn.a.root, e.style],
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
      sn.metadata = { width: 24, height: 24 }
      var un = sn,
        dn = G.a.fcc839b5,
        mn = G.a.d80964aa,
        pn = G.a.d4f57cce,
        gn = G.a.g06d6bf8,
        fn = G.a.c1a1817b,
        hn = G.a.efc9b3fe,
        bn = nn.a,
        yn = G.a.h277a2e8,
        vn = G.a.gd429fea,
        _n = an.a,
        En = G.a.icb22cdd,
        wn = G.a.i859a9d3,
        Cn = G.a.e974b2d4,
        In = G.a.b9c9b214,
        Pn = G.a.i0e569bf,
        Tn = j.a.create(function (e) {
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
        Sn = {
          label: mn,
          value: Zt.c.Engagements,
          decoration: h.a.createElement(rn.a, { style: [Tn.icon, Tn.engagementIcon] }),
          testID: Y(Zt.c.Engagements),
        },
        kn = {
          label: pn,
          value: Zt.c.Followers,
          decoration: h.a.createElement(on.a, { style: [Tn.icon, Tn.followersIcon] }),
          testID: Y(Zt.c.Followers),
        },
        xn = {
          label: gn,
          value: Zt.c.WebsiteClicks,
          decoration: h.a.createElement(un, { style: [Tn.icon, Tn.websiteClicksIcon] }),
          testID: Y(Zt.c.WebsiteClicks),
        },
        On = [
          { label: mn, description: Cn, decoration: h.a.createElement(rn.a, { style: [Tn.icon, Tn.engagementIcon] }) },
          { label: pn, description: In, decoration: h.a.createElement(on.a, { style: [Tn.icon, Tn.followersIcon] }) },
          { label: gn, description: Pn, decoration: h.a.createElement(un, { style: [Tn.icon, Tn.websiteClicksIcon] }) },
        ]
      function Ln() {
        return h.a.createElement(me.a, { Icon: bn, headline: fn, text: hn, type: 'warning' })
      }
      function An() {
        return h.a.createElement(me.a, { Icon: _n, headline: yn, text: vn, type: 'danger' })
      }
      var jn = Gt(function (e) {
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
            g = p ? $t.a.getOriginalTweet(p) : p,
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
            Object(Ue.p)(l)(Ue.n.goalSelectionPageLoad())
          }, [])
          var v = h.a.useMemo(
              function () {
                return (function (e) {
                  var t = e.selectedObjective,
                    n = e.tweetContainsLinks,
                    a = e.tweetHasMedia,
                    r = e.tweetIsReply
                  return [Sn]
                    .concat(
                      zt()(
                        r ? [] : [Nt()(Nt()({}, kn), {}, { description: a && t === Zt.c.Followers ? Ln() : void 0 })],
                      ),
                      [Nt()(Nt()({}, xn), {}, { disabled: !n, description: !n && An() })],
                    )
                    .map(function (e) {
                      return Nt()(
                        Nt()({}, e),
                        {},
                        { label: h.a.createElement(A.b, { size: 'headline2', weight: 'bold' }, e.label) },
                      )
                    })
                })({ tweetHasMedia: f, tweetContainsLinks: b, selectedObjective: d, tweetIsReply: y })
              },
              [f, b, d, y],
            ),
            _ = h.a.useCallback(
              function (e, t) {
                m(t), Object(Ue.p)(l)(Ue.n.setPromoteGoal(t))
              },
              [l, m],
            )
          return h.a.createElement(
            L.a,
            { style: Tn.qpContainer, testID: K },
            h.a.createElement(q, { screenType: Ue.c.Objective }),
            h.a.createElement(
              L.a,
              { style: Tn.titleContainer },
              h.a.createElement(A.b, { align: 'center', size: 'headline1', weight: 'bold' }, dn),
            ),
            h.a.createElement(
              L.a,
              null,
              h.a.createElement(en.a, { name: 'objective-picker', onChange: _, options: v, value: d }),
            ),
            h.a.createElement(
              L.a,
              { style: Tn.goalSelectionCallout },
              h.a.createElement(tn.a, {
                description: En,
                learnMoreLabel: wn,
                learnMoreLink: {
                  external: !1,
                  method: 'replace',
                  pathname: u.pathname,
                  state: { showEducationInterstitial: !0 },
                },
              }),
            ),
            null !== (i = u.state) && void 0 !== i && i.showEducationInterstitial
              ? h.a.createElement(Jt, {
                  infoItems: On,
                  onClose: function () {
                    return s.replace(u.pathname, { showEducationInterstitial: !1 })
                  },
                  onLoad: function () {
                    return Object(Ue.p)(l)(Ue.n.educationInterstitialLoad())
                  },
                })
              : null,
          )
        }),
        Dn = n('ddV6'),
        Bn = n.n(Dn),
        Mn = function (e) {
          return e.quickPromote.paymentMethods
        },
        Fn = Object(E.a)()
          .propsFromState(function () {
            return { paymentMethods: Mn, selectedPaymentMethod: C.p }
          })
          .propsFromActions(function () {
            return { setSelectedPaymentMethod: C.F, deletePaymentMethod: C.b }
          })
          .withAnalytics(Ue.o),
        Rn = n('YeIG'),
        qn = n('JYMr'),
        Nn = n('cm6r'),
        Hn = n('mjJ+'),
        zn = n('3rX5'),
        Un = n('Wms4'),
        Vn = n('IG7M'),
        Gn = n('sgih'),
        Wn = n('/yvb'),
        Qn = n('I4+6'),
        Kn = n('iY63'),
        Xn = n('HsFH'),
        Jn = G.a.de43b66f,
        Yn = G.a.hb4773af,
        Zn = G.a.aa2a3dd3,
        $n = G.a.b1c5b63c,
        ea = G.a.affb5877,
        ta = G.a.cfd2f35d,
        na = function (e, t) {
          return e.map(function (e) {
            return {
              label: h.a.createElement(aa, {
                deletePaymentMethodHandler: t,
                id: e.id,
                imgSrcUrl: e.imgSrcUrl,
                lastFourDigits: e.lastFourDigits,
                status: e.cardStatus,
              }),
              value: e.id,
              containerStyle: [ca.paymentMethodRadioContainer, ca.bottomBorder],
            }
          })
        },
        aa = function (e) {
          var t = e.deletePaymentMethodHandler
            ? function (t) {
                return h.a.createElement(Hn.a, {
                  items: [
                    {
                      Icon: Xn.a,
                      text: Zn,
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
          return h.a.createElement(
            L.a,
            { style: ca.paymentMethod },
            h.a.createElement(
              L.a,
              { style: [ca.descriptionItemContainer, e.paymentDescriptionStyle] },
              e.imgSrcUrl
                ? h.a.createElement(
                    L.a,
                    { style: ca.cardImageContainer },
                    h.a.createElement(zn.a, { source: e.imgSrcUrl, style: ca.cardImage }),
                  )
                : h.a.createElement(A.b, { size: 'body' }, 'Card'),
              h.a.createElement(
                L.a,
                { style: ca.descriptionContainer },
                h.a.createElement(
                  A.b,
                  { color: 'gray700', size: 'subtext1' },
                  ''.concat($n, ' ').concat(e.lastFourDigits),
                ),
              ),
              ('Expired' === e.status || 'Invalid' === e.status) &&
                h.a.createElement(
                  L.a,
                  { style: ca.statusBadgeContainer },
                  h.a.createElement(
                    Un.a,
                    { style: ca.expiredBadge },
                    h.a.createElement(A.b, { size: 'subtext3', style: ca.expiredBadge, weight: 'bold' }, e.status),
                  ),
                ),
            ),
            e.deletePaymentMethodHandler &&
              h.a.createElement(Vn.a, { renderActionMenu: t, style: ca.actionMenuContainer }),
          )
        },
        ra = function (e) {
          var t = e.cancelDeletePaymentMethodHandler,
            n = e.confirmDeletePaymentMethodHandler
          return h.a.createElement(
            Gn.a,
            { onMaskClick: t, type: 'bottom', withMask: !0 },
            h.a.createElement(
              L.a,
              { style: ca.deleteCardConfirmContainer },
              h.a.createElement(
                Wn.a,
                { icon: h.a.createElement(Xn.a, null), onPress: n, style: ca.modalButton, type: 'destructiveOutlined' },
                ea,
              ),
              h.a.createElement(Wn.a, { onPress: t, style: ca.modalButton, type: 'primaryOutlined' }, ta),
            ),
          )
        },
        oa = Qn.a.generate({
          backgroundColor: j.a.theme.colors.transparent,
          color: j.a.theme.colors.primary,
          insetFocusRing: !0,
        }),
        ca = j.a.create(function (e) {
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
        ia = Fn(function (e) {
          var t = e.deletePaymentMethod,
            n = e.history,
            a = e.match.params,
            r = a.quickPromotePlatform,
            o = a.screenName,
            c = a.statusId,
            i = e.paymentMethods,
            l = e.selectedPaymentMethod,
            s = e.setSelectedPaymentMethod,
            u = h.a.useState(!1),
            d = Bn()(u, 2),
            m = d[0],
            p = d[1],
            g = h.a.useState(null),
            f = Bn()(g, 2),
            b = f[0],
            y = f[1]
          return h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(
              L.a,
              { style: ca.qpContainer, testID: de },
              m ? h.a.createElement(qn.a, { indeterminate: !0 }) : null,
              h.a.createElement(
                L.a,
                { style: ca.titleContainer },
                h.a.createElement(
                  A.b,
                  {
                    accessibilityLevel: 1,
                    accessibilityRole: 'heading',
                    align: 'left',
                    size: 'headline1',
                    weight: 'heavy',
                  },
                  Jn,
                ),
              ),
              h.a.createElement(en.a, {
                disabled: m,
                name: Jn,
                onChange: function (e, t) {
                  if (!Object(Rn.a)(i)) {
                    var n =
                      i.find(function (e) {
                        return e.id === t
                      }) || null
                    ;(n && 'Invalid' === n.cardStatus) ||
                      (p(!0),
                      s(t).finally(function () {
                        p(!1)
                      }))
                  }
                },
                options: na(i, function (e) {
                  return y(e)
                }),
                value: l ? l.id : '',
              }),
              h.a.createElement(
                L.a,
                { style: ca.addPaymentMethodContainer },
                h.a.createElement(
                  Nn.a,
                  {
                    disabled: m,
                    interactive: m,
                    interactiveStyles: oa,
                    onPress: function () {
                      return n.push(''.concat(Object(Ue.j)(o, c, r, Ue.c.Payment), '?isAddingPayment=true'))
                    },
                    style: ca.addPaymentMethodInteractiveContainer,
                  },
                  h.a.createElement(Kn.a, { style: ca.plusIcon }),
                  h.a.createElement(A.b, { align: 'left', color: 'primary' }, Yn),
                ),
              ),
              b &&
                h.a.createElement(ra, {
                  cancelDeletePaymentMethodHandler: function () {
                    return y(null)
                  },
                  confirmDeletePaymentMethodHandler: function () {
                    b &&
                      (y(null),
                      p(!0),
                      t(b).finally(function () {
                        p(!1)
                      }))
                  },
                }),
            ),
          )
        }),
        la = (n('LJOr'), n('ho0z'), n('zh9S')),
        sa = n('y0iL'),
        ua = function (e, t) {
          return t.match.params.statusId
        },
        da = function (e, t) {
          return tt.a.selectHydrated(e, ua(0, t))
        },
        ma = function (e, t) {
          return tt.a.selectFetchStatus(e, ua(0, t))
        },
        pa = function (e, t) {
          return e.quickPromote.account.adsAccount
        },
        ga = function (e, t) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        fa = function (e) {
          return e.quickPromote.account.vatInfo
        },
        ha = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: ma,
              tweet: da,
              adsAccount: pa,
              fundingInstrument: ga,
              selectedPaymentMethod: C.p,
              vatInfo: fa,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_PAYMENT_SCREEN',
              ),
              fetchTweetIfNeeded: tt.a.fetchOneIfNeeded,
              scribeAction: la.c,
              savePlatformRedirectBackState: function () {
                return Object(sa.l)(e.match.params.quickPromotePlatform)
              },
              fetchAdsAccountDataIfNeeded: sa.d,
              fetchPaymentMethodsIfNeeded: sa.i,
            }
          })
          .withAnalytics(Ue.o),
        ba = n('tI3i'),
        ya = n.n(ba),
        va = n('Rp9C'),
        _a = n('bPFD'),
        Ea = (function (e) {
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
                    var c = (r && $t.a.getOriginalTweet(r)) || void 0,
                      i = c ? [va.a.getTweetItem(c)] : [],
                      l = t.scribeData || {},
                      s = 'string' == typeof l.component ? l.component : 'quick_promote',
                      u = 'string' == typeof l.uiEvent ? l.uiEvent : ''
                    a.scribe({ component: s, action: u, data: { items: i } })
                  } else if ('navigation' === t.type) {
                    var d = e.props,
                      m = d.createLocalApiErrorHandler,
                      p = d.fetchAdsAccountDataIfNeeded,
                      g = d.fetchPaymentMethodsIfNeeded,
                      f = d.history,
                      h = d.match.params,
                      b = h.quickPromotePlatform,
                      y = h.screenName,
                      v = h.statusId
                    ya()(!!e.context.loggedInUserId, 'loggedInUserId must be defined'),
                      e.isPaymentSelectEnabled ? g(!0).catch(m()) : p(e.context.loggedInUserId, !0).catch(m()),
                      f.push(
                        '/'
                          .concat(y, '/status/')
                          .concat(v, '/')
                          .concat(b, '/')
                          .concat(e.isPaymentSelectEnabled && o ? Ue.c.PaymentSelect : Ue.c.Review),
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
                    u = Object(Ue.i)(i, t, l, a, s)
                  Object(Ue.p)(n)(Ue.n.paymentPageLoad(u.url)), u.isSameHost || (window.location.href = u.url)
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
                    l = Object(Ue.i)(c, t, i, n, r)
                  return l.isSameHost
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(q, { screenType: Ue.c.Payment }),
                        h.a.createElement(_a.a, {
                          dangerouslyDisableSandbox: !0,
                          onMessage: this._handleIFrameMessage,
                          reportError: he.a,
                          src: l.url,
                          style: wa.iframe,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(Ea, 'contextType', ge.a)
      var wa = j.a.create(function (e) {
          return { iframe: { flexGrow: 1, paddingTop: 0 } }
        }),
        Ca = ha(Ea)
      function Ia(e) {
        new Image().src = e
      }
      function Pa() {
        return h.a.createElement(xt.a, null, function (e) {
          e.windowHeight
          return Ia(e.windowWidth > j.a.theme.breakpoints.medium ? Ct : St), null
        })
      }
      var Ta = n('0zXz'),
        Sa = function (e) {
          return e.quickPromote.objective
        },
        ka = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        xa = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Oa = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        La = function (e, t) {
          return e.quickPromote.budget.dailyBudget
        },
        Aa = function (e, t) {
          return e.quickPromote.budget.durationDays
        },
        ja = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        Da = function (e) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        Ba = function (e) {
          return e.quickPromote.account.vatInfo
        },
        Ma = function (e) {
          return e.quickPromote.account.adsAccount
        },
        Fa = function (e) {
          return e.quickPromote.promoteStatus
        },
        Ra = function (e) {
          return e.quickPromote.promoteErrorCode
        },
        qa = function (e) {
          return e.quickPromote.coupons
        },
        Na = function (e) {
          return e.quickPromote.enrollCouponErrorCode
        },
        Ha = Object(E.a)()
          .propsFromState(function () {
            return {
              objective: Sa,
              targetedLocations: ka,
              ageBucket: xa,
              gender: Oa,
              dailyBudget: La,
              durationDays: Aa,
              lang: _.o,
              country: C.q,
              currency: ja,
              fundingInstrument: Da,
              vatInfo: Ba,
              adsAccount: Ma,
              promoteStatus: Fa,
              promoteErrorCode: Ra,
              coupons: qa,
              enrollCouponErrorCode: Na,
              selectedPaymentMethod: C.p,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_REVIEW_SCREEN',
              ),
              clearPersistedRedirectBackState: function () {
                return Object(C.n)()
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
          .withAnalytics(Ue.o),
        za = n('csss'),
        Ua = n('shC7'),
        Va = G.a.c3c57e3e,
        Ga = G.a.h06724b4,
        Wa = G.a.a96f811e,
        Qa = G.a.b069d89c,
        Ka = G.a.a3a09d48,
        Xa = G.a.fbd44e96,
        Ja = G.a.e36bce63,
        Ya = G.a.c602f5b8,
        Za = G.a.ia83756b,
        $a = G.a.cc217a04,
        er = G.a.c602f5b8,
        tr = G.a.g4f2b588,
        nr = G.a.i41612d9,
        ar = G.a.cdae1af0,
        rr = G.a.ed8bb5af,
        or = G.a.fc640c20,
        cr = G.a.be2dc078,
        ir = G.a.iaefd4de,
        lr = G.a.e5e42640,
        sr = G.a.da2805d1,
        ur = G.a.ef4602eb,
        dr = G.a.a4db098b,
        mr = G.a.ef7e3916,
        pr = (function (e) {
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
                return a && a.timezone && a.country_code ? (t ? ar : n ? or : rr) : n ? ir : cr
              }),
              g()(l()(e), '_handlePromote', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.createPromotion
                Object(Ue.p)(n)(Ue.n.promotionClick()), a(n)
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
                if (!n) return a === et.a.LOADED ? sr : null
                switch (n) {
                  case 'MissingFundingInstrument':
                  case 'InvalidPaymentMethod':
                    return mr
                  case 'CampaignCreationFailed':
                  case 'PromotionIneligible':
                    return dr
                  default:
                    return ur
                }
              }),
              g()(l()(e), '_getCouponErrorMessage', function () {
                var t = e.props.enrollCouponErrorCode
                if (!t) return null
                switch (t) {
                  case 'AccountIneligible':
                  case 'MissingAdsAccount':
                  default:
                    return lr
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
                  Object(Ue.p)(t)(Ue.n.reviewPageLoad({ hasFundingInstrument: c })), this._handleEnrollCoupon()
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
                      ((e = Zt.e[r]),
                      (t = e.maxAge),
                      (n = e.minAge),
                      t ? _e({ minAge: n, maxAge: t }) : Ee({ minAge: n })),
                    I = (function (e) {
                      switch (e) {
                        case 'Engagements':
                          return je
                        case 'Followers':
                          return De
                        case 'WebsiteClicks':
                          return Be
                        default:
                          throw b()
                      }
                    })(g),
                    P = (function (e) {
                      var t = e.formattedAge,
                        n = e.gender,
                        a = e.locations,
                        r = a.length
                      return Ie({
                        newlinePlaceholder: '\n',
                        locations: Object(fe.a)(a),
                        locationsHeading: He({ numLocations: r }),
                        formattedAge: t,
                        gender: n,
                      })
                    })({
                      locations: v.map(function (e) {
                        return e.localized_name
                      }),
                      formattedAge: w,
                      gender: Me(d),
                    }),
                    T = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled'),
                    S = T
                      ? Ne({ dailyBudgetNum: l, durationDays: s, lang: m, currency: i })
                      : qe({ totalBudgetNum: l * s, durationDays: s, lang: m, currency: i }),
                    k =
                      u && null != c && c.existing_balance.length
                        ? c.existing_balance.find(function (e) {
                            return e.currency_code === u.currency
                          })
                        : null,
                    x = k ? '' : Re({ amount: l * s, lang: m, currency: i }),
                    O = p.params,
                    j = O.quickPromotePlatform,
                    B = O.screenName,
                    M = O.statusId,
                    F = this._getPromoteErrorMessage(),
                    R = this._getCouponErrorMessage(),
                    N = this.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                    U = _ && null === _.tax_id && null === _.tax_exemption_id && 'NOT_SET' === _.tax_category,
                    V = E ? !!y : !!u,
                    W = !(null == c || !c.eligible_coupon)
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(q, { screenType: Ue.c.Review }),
                    h.a.createElement(
                      L.a,
                      { style: fr.qpContainer, testID: ee },
                      F &&
                        h.a.createElement(
                          L.a,
                          { style: fr.gutter },
                          h.a.createElement(me.a, { text: F, type: 'danger' }),
                        ),
                      R &&
                        h.a.createElement(
                          L.a,
                          { style: fr.gutter },
                          h.a.createElement(me.a, { text: R, type: 'warning' }),
                        ),
                      h.a.createElement(z, { subtitle: Ga, title: Va }),
                      N &&
                        h.a.createElement(D, {
                          description: I,
                          descriptionTestID: ne,
                          label: Wa,
                          withBottomBorder: !1,
                        }),
                      h.a.createElement(D, { description: P, descriptionTestID: ae, label: Qa, withBottomBorder: !1 }),
                      h.a.createElement(D, {
                        description: S,
                        descriptionDir: Ua.a.getConstants().isRTL ? 'rtl' : 'ltr',
                        descriptionTestID: re,
                        label: T ? Xa : Ka,
                        withBottomBorder: !1,
                      }),
                      E
                        ? h.a.createElement(za.a, {
                            description:
                              y && !U
                                ? h.a.createElement(aa, {
                                    id: y.id,
                                    imgSrcUrl: y.imgSrcUrl,
                                    lastFourDigits: y.lastFourDigits,
                                    paymentDescriptionStyle: fr.paymentDescription,
                                    status: y.cardStatus,
                                  })
                                : h.a.createElement(
                                    A.b,
                                    { color: 'primary', size: 'subtext2' },
                                    this._getPaymentDescription(V, W),
                                  ),
                            label: h.a.createElement(A.b, { weight: 'bold' }, Ja),
                            link:
                              !y || U ? Object(Ue.j)(B, M, j, Ue.c.Payment) : Object(Ue.j)(B, M, j, Ue.c.PaymentSelect),
                            testID: oe,
                          })
                        : h.a.createElement(za.a, {
                            description:
                              u && !U
                                ? u.description
                                : h.a.createElement(
                                    A.b,
                                    { color: 'primary', size: 'subtext2' },
                                    this._getPaymentDescription(V, W),
                                  ),
                            label: h.a.createElement(A.b, { weight: 'bold' }, Ja),
                            link: !u || U ? Object(Ue.j)(B, M, j, Ue.c.Payment) : void 0,
                            testID: oe,
                          }),
                      T
                        ? h.a.createElement(
                            D,
                            { description: x, descriptionTestID: ce, label: Ya, withBottomBorder: !1 },
                            k
                              ? (function (e) {
                                  var t = e.balance,
                                    n = e.currency,
                                    a = e.lang,
                                    r = e.subtotal,
                                    o = Re({ amount: r, currency: n, lang: a }),
                                    c = Re({ amount: Math.min(r, t), currency: n, lang: a }),
                                    i = Re({ amount: Math.max(0, r - t), currency: n, lang: a }),
                                    l = t > r ? Re({ amount: t - r, currency: n, lang: a }) : null
                                  return h.a.createElement(
                                    h.a.Fragment,
                                    null,
                                    h.a.createElement(
                                      L.a,
                                      { style: fr.promotionTotalRow },
                                      h.a.createElement(A.b, { color: 'gray700', size: 'subtext2' }, Za),
                                      h.a.createElement(A.b, { color: 'gray700', size: 'subtext2' }, o),
                                    ),
                                    h.a.createElement(
                                      L.a,
                                      { style: fr.promotionTotalRow },
                                      h.a.createElement(A.b, { color: 'blue500', size: 'subtext2' }, $a),
                                      h.a.createElement(A.b, { color: 'blue500', size: 'subtext2' }, '-', c),
                                    ),
                                    h.a.createElement(
                                      L.a,
                                      { style: fr.promotionTotalRow },
                                      h.a.createElement(
                                        A.b,
                                        { color: 'gray700', size: 'subtext2', weight: 'bold' },
                                        er,
                                      ),
                                      h.a.createElement(
                                        A.b,
                                        { color: 'gray700', size: 'subtext2', testID: ce, weight: 'bold' },
                                        i,
                                      ),
                                    ),
                                    l &&
                                      h.a.createElement(
                                        L.a,
                                        { style: fr.promotionTotalRow },
                                        h.a.createElement(A.b, { color: 'gray700', size: 'subtext2' }, tr),
                                        h.a.createElement(A.b, { color: 'gray700', size: 'subtext2' }, l),
                                      ),
                                  )
                                })({ subtotal: l * s, balance: k.total_amount || 0, currency: i, lang: m })
                              : null,
                          )
                        : null,
                    ),
                    h.a.createElement(
                      L.a,
                      { style: fr.bottomElements },
                      h.a.createElement(
                        Wn.a,
                        {
                          disabled: (E && !y) || !u || U || C.X.includes(f),
                          onPress: this._handlePromote,
                          size: 'xLarge',
                          testID: te,
                          type: 'brandFilled',
                        },
                        nr,
                      ),
                      h.a.createElement(
                        H.a,
                        { style: fr.terms },
                        (function (e, t) {
                          return t
                            ? h.a.createElement(
                                G.a.I18NFormatMessage,
                                { $i18n: 'cace9784' },
                                h.a.createElement(A.b, { link: Object(Ue.k)(e) }, G.a.acff74af),
                                h.a.createElement(A.b, { link: Object(Ue.g)(e) }, G.a.cb8d4ace),
                              )
                            : h.a.createElement(
                                G.a.I18NFormatMessage,
                                { $i18n: 'c99d7100' },
                                h.a.createElement(A.b, { link: Object(Ue.k)(e) }, G.a.d56b5ac3),
                              )
                        })(o, !!k),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(pr, 'contextType', ge.a)
      var gr,
        fr = j.a.create(function (e) {
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
        hr = Ha(pr),
        br = n('zCf4'),
        yr =
          (n('yH/f'),
          n('7xRU'),
          n('LW0h'),
          function (e, t) {
            var n = _r(e, t)
            return e.ads.typeahead.targetingLocation[n]
          }),
        vr = function (e, t) {
          var n,
            a = _r(e, t)
          return null === (n = e.ads.typeahead.targetingLocation[a]) || void 0 === n ? void 0 : n.fetchStatus
        },
        _r = function (e, t) {
          return e.quickPromote.targeting.locationQuery
        },
        Er = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        wr = function (e, t) {
          return e.quickPromote.account.campaigns
        },
        Cr = Object(E.a)()
          .propsFromState(function () {
            return {
              targetingLocationQuery: _r,
              targetingLocations: yr,
              targetedLocations: Er,
              fetchStatus: vr,
              userCountry: _.y,
              campaigns: wr,
            }
          })
          .propsFromActions(function () {
            return {
              setTargetedLocations: C.T,
              setAndFetchTargetingLocationQuery: C.v,
              setTargetingLocationQuery: C.V,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_TARGETING_LOCATION_SCREEN',
              ),
            }
          })
          .withAnalytics(Ue.o),
        Ir = n('VwDm'),
        Pr = n('G1WX'),
        Tr = n('e0ey'),
        Sr = n('xKuM'),
        kr = n('5Vk4'),
        xr = n('6OUF'),
        Or = n('zrOZ'),
        Lr = n('kevv'),
        Ar = G.a.cc642518,
        jr = G.a.i0e8c3c6,
        Dr = G.a.deaf5b15,
        Br = G.a.f69ad048,
        Mr = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
        Fr = Object.freeze(
          ((gr = {}), g()(gr, Ue.e.CurrentCountryMatch, 0), g()(gr, Ue.e.Match, 1), g()(gr, Ue.e.NoMatch, 2), gr),
        ),
        Rr = (function (e) {
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
                  qr,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: a,
                  },
                  h.a.createElement(L.a, null, h.a.createElement(A.b, { style: Nr.headingText, weight: 'heavy' }, jr)),
                  h.a.createElement(Pr.a, { fetchStatus: n, render: e._renderSearchList, retryMessage: Dr }),
                )
              }),
              g()(l()(e), '_handleClear', function () {
                ;(0, e.props.setTargetingLocationQuery)('')
              }),
              g()(l()(e), '_renderSearchList', function () {
                var t = e.props.targetedLocations,
                  n = Object(Or.a)(
                    t.map(function (e) {
                      return e.targeting_value
                    }),
                  ),
                  a = e._getTargetingLocationOptions()
                return h.a.createElement(
                  L.a,
                  { style: Nr.overflow },
                  a.map(function (t) {
                    var a = t.localized_name,
                      r = t.location_type,
                      o = t.targeting_value
                    return h.a.createElement(Tr.a, {
                      checked: n.has(o),
                      helpText: Fe(r),
                      key: o,
                      label: a,
                      name: o,
                      onChange: e._handleSearchSelect,
                      testID: ue,
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
                  s = Object(Ue.h)(i || 'US'),
                  u = l.filter(function (e) {
                    var t = e.country_code,
                      n = e.localized_name
                    return s(n, t, o) !== Ue.e.NoMatch
                  })
                return Object(Lr.a)(
                  u,
                  [
                    function (e) {
                      var t = e.country_code,
                        n = e.localized_name,
                        a = s(n, t, o)
                      return Fr[a]
                    },
                    function (e) {
                      e.localized_name
                      var t,
                        n = e.location_type
                      return null !== (t = Mr[n]) && void 0 !== t
                        ? t
                        : (function (e) {
                            Object(he.a)(
                              'Quick Promote: Unknown location type: '
                                .concat(e, '. Expected one of {')
                                .concat(Object.keys(Mr).join(', '), '}'),
                            )
                          })(n) || Object.keys(Mr).length
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
                    ? (Object(Ue.p)(r)(
                        Ue.n.setTargetingLocation({
                          id: i.targeting_value,
                          locationType: i.location_type,
                          countryCode: i.country_code,
                        }),
                      ),
                      o([i]),
                      e._handleGoBack())
                    : Object(he.a)('Quick Promote: could not find "'.concat(t, '" in list of targeting options'))
                } else Object(Ue.p)(r)(Ue.n.targetingLocationError()), e.setState({ errorMessage: Br })
                c('')
              }),
              g()(l()(e), '_renderSelected', function () {
                var t = e.props,
                  n = t.targetedLocations,
                  a = t.targetingLocationQuery,
                  r = e.state.errorMessage
                return h.a.createElement(
                  qr,
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
                        { style: Nr.gutter },
                        h.a.createElement(me.a, { text: r, type: 'danger' }),
                      ),
                    h.a.createElement(A.b, { style: Nr.headingText, weight: 'heavy' }, He({ numLocations: n.length })),
                  ),
                  h.a.createElement(
                    L.a,
                    null,
                    n.map(function (t) {
                      var n = t.localized_name,
                        a = t.location_type,
                        r = t.targeting_value
                      return h.a.createElement(Tr.a, {
                        checked: !0,
                        helpText: Fe(a),
                        key: r,
                        label: n,
                        name: r,
                        onChange: e._handleSearchSelect,
                        testID: ue,
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
                Object(Ue.m)(a, r)(l, s, c, i, u, d)
              }),
              g()(l()(e), '_handleTargetingLocationChange', function (t) {
                var n = t.target.value,
                  a = e.props,
                  r = a.analytics,
                  o = a.createLocalApiErrorHandler,
                  c = a.setAndFetchTargetingLocationQuery
                Object(Ue.p)(r)(Ue.n.targetingLocationSearch(n)), c(n).catch(o())
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
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(q, { screenType: Ue.c.TargetingLocation }),
                    e ? this._renderSearch() : this._renderSelected(),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(Rr, 'contextType', ge.a)
      var qr = function (e) {
          var t = e.children,
            n = e.onBack,
            a = e.onChange,
            r = e.onClear,
            o = e.targetingLocationQuery
          return h.a.createElement(
            L.a,
            { style: Nr.qpContainer, testID: Z },
            h.a.createElement(Sr.a, {
              leftControl: h.a.createElement(kr.a, { onClick: n }),
              middleControl: h.a.createElement(xr.a, {
                Icon: Ir.a,
                autoFocus: !0,
                name: 'locationTargetingInput',
                onChange: a,
                onClear: r,
                placeholder: Ar,
                style: Nr.input,
                testID: se,
                value: o,
                withClearButton: !0,
              }),
            }),
            t,
          )
        },
        Nr = j.a.create(function (e) {
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
        Hr = Cr(Rr),
        zr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Ur = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        Vr = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Gr = Object(E.a)()
          .propsFromState(function () {
            return { targetedLocations: zr, selectedGender: Ur, selectedAgeBucket: Vr }
          })
          .propsFromActions(function () {
            return { setTargetedAgeBucket: C.R, setTargetedGender: C.S }
          })
          .withAnalytics(Ue.o),
        Wr = n('JiIh'),
        Qr = n('fyvP'),
        Kr = n('J4ZH'),
        Xr = n('tn7R'),
        Jr = n('mN6z'),
        Yr = G.a.hba1d105,
        Zr = G.a.cba0133d,
        $r = G.a.e1efbead,
        eo = G.a.c6ff7c1f,
        to = G.a.b555fb45,
        no = G.a.a8d0108d,
        ao = [Zt.b.Any, Zt.b.Female, Zt.b.Male].map(function (e) {
          return { label: Me(e), value: e, testID: J(e) }
        }),
        ro = G.a.j2c03e12,
        oo = ['13', '18', '21', '25', '35', '50'],
        co = [void 0, void 0, void 0, '24', '34', '49', '54'],
        io = Object(Kr.a)(Object(Xr.a)(Zt.e), function (e) {
          return e.maxAge || 'over'
        }),
        lo = co.length
      function so(e, t) {
        var n
        if (e && t) return null === (n = Zt.d[e]) || void 0 === n ? void 0 : n[t]
      }
      var uo = (function (e) {
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
              ;(0, a.setTargetedGender)(n), Object(Ue.p)(r)(Ue.n.setTargetingGender(n))
            }),
            g()(l()(e), '_handleAgeBucketChange', function (t, n) {
              var a = Bn()(t, 2),
                r = a[0],
                o = a[1],
                c = e.props,
                i = c.analytics,
                l = c.selectedAgeBucket,
                s = c.setTargetedAgeBucket,
                u = e._sliderValueFromSelectedAgeBucket(l)
              if (!Object(Jr.a)(u, [r, o]))
                if (n) {
                  var d = oo[r]
                  if (!d) return
                  var m = so(d, o === lo ? 'over' : co[o])
                  if (m) Object(Ue.p)(i)(Ue.n.setTargetingAgeBucket(m)), s(m)
                  else {
                    var p = Object.keys(Zt.d[d])[0]
                    e._setAgeBucket({ minAge: d, maxAge: p })
                  }
                } else {
                  var g = o === lo ? 'over' : co[o]
                  if (!g) return
                  var f = so(oo[r], g)
                  if (f) Object(Ue.p)(i)(Ue.n.setTargetingAgeBucket(f)), s(f)
                  else {
                    var h = io[g].slice(-1)[0].minAge
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
                i = Zt.d[a][n || 'over']
              if (!i)
                throw new Error(
                  'Age bucket not found for minAge: "'.concat(a, '", maxAge: "').concat(n || '<empty>', '"'),
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
                  a = t.minAge
                return [oo.indexOf(a), n ? co.indexOf(n) : lo]
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
                  s = He({ numLocations: r.length }),
                  u = Zt.e[n],
                  d = u.maxAge,
                  m = u.minAge,
                  p = this._sliderValueFromSelectedAgeBucket(n),
                  g = d || ro
                return h.a.createElement(
                  L.a,
                  { style: mo.qpContainer, testID: X },
                  h.a.createElement(q, { screenType: Ue.c.Targeting }),
                  h.a.createElement(z, { subtitle: Zr, title: Yr }),
                  h.a.createElement(za.a, {
                    description: Object(fe.a)(
                      r.map(function (e) {
                        return e.localized_name
                      }),
                    ),
                    label: h.a.createElement(A.b, { weight: 'bold' }, s),
                    link: Object(Ue.j)(i, l, c, Ue.c.TargetingLocation),
                    testID: ie,
                  }),
                  h.a.createElement(
                    D,
                    { label: $r },
                    h.a.createElement(
                      L.a,
                      { style: mo.ageRangeSlider },
                      h.a.createElement(Wr.a, {
                        endThumbAccessibilityLabel: to,
                        endThumbAccessibilityLabelValueText: '"'.concat(g, '"'),
                        endThumbLabel: g,
                        max: lo,
                        min: 0,
                        onChange: this._handleAgeBucketChange,
                        startThumbAccessibilityLabel: eo,
                        startThumbAccessibilityLabelValueText: '"'.concat(m, '"'),
                        startThumbLabel: m,
                        value: p,
                      }),
                    ),
                  ),
                  h.a.createElement(
                    D,
                    { label: no, withBottomBorder: !1 },
                    h.a.createElement(
                      L.a,
                      { style: mo.genderSelection },
                      h.a.createElement(Qr.a, {
                        name: 'gender',
                        onChange: this._handleGenderChange,
                        options: ao,
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
      g()(uo, 'contextType', ge.a)
      var mo = j.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            genderSelection: { marginTop: e.spaces.space4 },
            ageRangeSlider: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        po = Gr(uo),
        go = n('q9Zt'),
        fo = G.a.a065172e,
        ho = G.a.cfcdb4a1,
        bo = G.a.dcfb0332,
        yo = G.a.c1df579e,
        vo = (function (e) {
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
                return t ? $t.a.getOriginalTweet(t) : t
              }),
              g()(l()(e), '_render', function () {
                var t = e.props.history,
                  n = e._getRetweetOrTweet()
                return !n || (n && n.user.id_str !== e.context.loggedInUserId)
                  ? h.a.createElement(
                      yt.b,
                      { history: t, onBackClick: e._handleGoBack, title: bo },
                      h.a.createElement(go.a, { onRetry: null, title: fo }),
                    )
                  : e._renderPage()
              }),
              g()(l()(e), '_renderHeader', Ta.a),
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
                  p = d ? Ue.d : Ue.b,
                  g = function (e) {
                    return Object(Ue.j)(s, u, i, e)
                  }
                switch (l) {
                  case 'intro':
                    return e._renderSplashPage()
                  case 'objective':
                    if (d) {
                      var f = g(Ue.c.Targeting)
                      return e._renderProgressPage(Ue.d.Objective, f)
                    }
                    n.replace(Object(Ue.j)(s, u, i, Ue.c.Targeting))
                    break
                  case 'targeting':
                    var h = g(Ue.c.BudgetSelect)
                    return e._renderProgressPage(p.Targeting, h)
                  case 'budget_select':
                    var y = g(Ue.c.Review)
                    return e._renderProgressPage(p.BudgetSelect, y)
                  case 'review':
                    var v = [et.a.LOADING, et.a.LOADED].includes(o) && !r
                    return e._renderProgressPage(v ? p.Finish : p.Review)
                  case 'payment':
                    return e._renderProgressPage(p.Review)
                  case 'targeting_location':
                    return e._renderPopupPage()
                  case 'payment_select':
                    return m || n.replace(Object(Ue.j)(s, u, i, Ue.c.Review)), e._renderNavigationPage()
                  case 'done':
                    return e._renderSplashPage()
                  default:
                    throw b()
                }
              }),
              g()(l()(e), '_renderProgressPage', function (t, n) {
                var a = e.props.history
                return h.a.createElement(
                  yt.b,
                  { documentTitle: bo, history: a, renderHeader: e._renderHeader },
                  h.a.createElement(Sr.a, {
                    leftControl: h.a.createElement(kr.a, { autofocus: !0, onClick: e._handleGoBack, testID: le }),
                    rightControl: n && h.a.createElement(Wn.a, { link: n, testID: Q, type: 'brandText' }, yo),
                  }),
                  h.a.createElement(qn.a, { progress: t, style: _o.progressBar }),
                  h.a.createElement(L.a, { style: _o.noScrollView }, e._renderRoutes()),
                )
              }),
              g()(l()(e), '_renderNavigationPage', function () {
                var t = e.props.history
                return h.a.createElement(
                  yt.b,
                  { documentTitle: bo, history: t, renderHeader: e._renderHeader },
                  h.a.createElement(Sr.a, {
                    leftControl: h.a.createElement(kr.a, { autofocus: !0, onClick: e._handleGoBack, testID: le }),
                  }),
                  h.a.createElement(L.a, { style: _o.noScrollView }, e._renderRoutes()),
                )
              }),
              g()(l()(e), '_renderPopupPage', function () {
                var t = e.props.history
                return h.a.createElement(
                  yt.b,
                  { documentTitle: bo, history: t, renderHeader: e._renderHeader },
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
                    return h.a.createElement(br.b, { component: Rt })
                  case 'objective':
                    return h.a.createElement(br.b, { component: jn })
                  case 'targeting':
                    return h.a.createElement(br.b, { component: po })
                  case 'targeting_location':
                    return h.a.createElement(br.b, { component: Hr })
                  case 'budget_select':
                    return h.a.createElement(br.b, { component: $e })
                  case 'review':
                    return h.a.createElement(br.b, { component: hr })
                  case 'payment':
                    return h.a.createElement(br.b, { component: Ca })
                  case 'payment_select':
                    return h.a.createElement(br.b, { component: ia })
                  case 'done':
                    return h.a.createElement(br.b, { component: ft })
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
                Object(Ue.p)(n)(Ue.n.back(l)), Object(Ue.m)(r, o)(s, u, i, l, d, m)
              }),
              g()(l()(e), '_handleRequestRetry', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.match.params.quickPromoteScreenName
                Object(Ue.p)(n)(Ue.n.reload(a)), window.location.reload()
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
                    l = t.fetchPaymentMethods,
                    s = t.fetchQuickPromoteEligibilityIfNeeded,
                    u = t.fetchTweetIfNeeded,
                    d = t.match,
                    m = t.promoteFetchStatus,
                    p = t.setPromoteFetchStatus,
                    g = t.statusId,
                    f = d.params.quickPromoteScreenName,
                    h = this.context.loggedInUserId,
                    b = this.context.featureSwitches.isTrue('responsive_web_qp_payment_select_enabled')
                  return h
                    ? (et.a.LOADED === m && f !== Ue.c.Done && p(et.a.NONE),
                      Object(F.b)(
                        'initial-load',
                        Promise.all([u(g), i(), r(h), c(), s({ statusId: g }), b ? l() : Promise.resolve()])
                          .then(function () {
                            return o()
                          })
                          .then(function () {
                            return (0, e.props.handleFirstLoad)()
                          }),
                      )
                        .catch(function (e) {
                          a(bt.a)(e), Object(Ue.p)(n)(Ue.n.pageLoadFail(e.message))
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
                  var a = Object(et.d)(t, this.state.isLoaded ? et.a.LOADED : et.a.LOADING)
                  return a !== et.a.LOADED
                    ? h.a.createElement(
                        yt.b,
                        { documentTitle: bo, history: n, renderHeader: this._renderHeader },
                        h.a.createElement(Pa, null),
                        h.a.createElement(ht.a, {
                          fetchStatus: a,
                          onRequestRetry: this._handleRequestRetry,
                          render: this._render,
                          retryMessage: ho,
                        }),
                      )
                    : h.a.createElement(ht.a, {
                        fetchStatus: a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._render,
                        retryMessage: ho,
                      })
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(vo, 'contextType', ge.a)
      var _o = j.a.create(function (e) {
          return { progressBar: { backgroundColor: e.colors.gray50 }, noScrollView: { overflowX: 'hidden', flex: 1 } }
        }),
        Eo = lt(vo)
      t.default = Eo
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
        A = n('rxPX'),
        j = n('0KEI'),
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
      var $ = Object(A.a)()
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
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)('CONVERSATION_SCREEN'),
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
            return Promise.all([n.e(0), n.e(21), n.e(188)]).then(n.bind(null, 'uo3S'))
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
        Ae = n('pxuL'),
        je = n('t62R'),
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
            return b.a.createElement(je.b, { link: n }, t.text)
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
                  o = this.context.loggedInUserId,
                  c = this.props,
                  i = c.communitySocialContextOfFocalTweet,
                  l = c.focalTweet,
                  s = c.history,
                  u = c.promotedContent,
                  d = c.socialContext,
                  m = c.statusId,
                  p = c.userLanguage
                l &&
                  ((e = ze({ tweetText: Object(xe.a)(l.text), fullName: l.user.name })),
                  (t = 'twitter://status?id='.concat(l.id_str)),
                  (n = 'https://twitter.com'.concat(this._getCanonicalPath() || '')),
                  (a = He({ fullName: l.user.name })),
                  (r = l.possibly_sensitive))
                var g = (function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                    return t.find(function (e) {
                      return e && Xe.includes(e.contextType)
                    })
                  })(d, i),
                  f = g && b.a.createElement(Je, { context: g })
                return b.a.createElement(
                  Pe.c,
                  { data: Ge(m, u), namespace: this._getScribeNamespace() },
                  b.a.createElement(
                    _e.a,
                    null,
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
                    b.a.createElement(ve.a, {
                      canonical: n,
                      description: null == l ? void 0 : l.full_text,
                      image: null == l ? void 0 : l.user.profile_image_url_https,
                      title: a,
                      type: 'article',
                    }),
                    b.a.createElement(_.a, {
                      featureSwitches: this.context.featureSwitches,
                      loggedInUserId: o,
                      userLanguage: p,
                    }),
                    b.a.createElement(v.a, { deepLink: t }),
                    n ? b.a.createElement(y.a, { canonical: n }) : null,
                    b.a.createElement(
                      C.b.Provider,
                      { value: null == g ? void 0 : g.contextType },
                      b.a.createElement(Te.a, {
                        backLocation: '/',
                        documentTitle: e,
                        history: s,
                        primaryContent: this._renderTimeline(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: this._renderSidebarContent(),
                        subtitle: f,
                        title: (g && Ye(g)) || (l && l.self_thread ? qe : Re),
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
      g()(Ze, 'contextType', Ae.a), g()(Ze, 'defaultProps', { recordTTFL: f.c })
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
