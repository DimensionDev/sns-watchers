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
        T = n('0KEI'),
        P = ['loggedInUser'],
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
              n = E()(e, P)
            return v()({ loggedInScreenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)('HIDDEN_REPLIES_PAGE'),
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
        B = n('ReVx'),
        F = n('WU0f'),
        M = n('oQhu'),
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
                Object(M.a)(function (e) {
                  return Object(F.a)(e)
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
          return po
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
        T = function (e) {
          return e.quickPromote.budget.durationDays
        },
        P = function (e) {
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
              durationDays: T,
              availableBudgets: S,
              lang: _.o,
              currency: k,
              audience: x,
              errorMessage: P,
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
        F = n('E6XO'),
        M = n('WM1P'),
        R = function (e) {
          return (
            (function (e) {
              Object(M.c)(function () {
                var t = F.e(),
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
                    F.c(''.concat(M.a, ':dwell:').concat(e), t.end()),
                      window.removeEventListener('focus', n),
                      window.removeEventListener('blur', a)
                  }
                )
              })
            })(e.screenType),
            null
          )
        },
        q = n('Gpeq'),
        N = n('tevE'),
        H = function (e) {
          var t = e.primaryLabel,
            n = e.subtitle,
            a = e.title
          return h.a.createElement(
            L.a,
            { style: [z.bottomBorder, z.titleContainer] },
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
                { style: z.primaryLabelContainer },
                h.a.createElement(j.b, { align: 'center', color: 'primary', size: 'title4' }, t),
              ),
            h.a.createElement(
              L.a,
              { style: z.subtitleContainer },
              h.a.createElement(N.a, { align: 'center', color: 'gray700' }, n),
            ),
          )
        },
        z = A.a.create(function (e) {
          return {
            titleContainer: { paddingVertical: e.spaces.space32 },
            primaryLabelContainer: { marginTop: e.spaces.space12 },
            subtitleContainer: { marginTop: e.spaces.space12 },
            bottomBorder: { borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: e.colors.borderColor },
          }
        }),
        U = n('3XMw'),
        V = n.n(U),
        G = 'introButton',
        W = 'nextButton',
        Q = 'objectiveScreen',
        K = 'targetingScreen',
        X = function (e) {
          return 'targetingScreenGender'.concat(e)
        },
        J = function (e) {
          return 'objectiveScreenObjective'.concat(e)
        },
        Y = 'targetingLocationScreen',
        Z = 'budgetSelectScreen',
        $ = 'reviewScreen',
        ee = 'reviewButton',
        te = 'reviewObjectiveDescription',
        ne = 'reviewTargetingDescription',
        ae = 'reviewBudgetAndDurationDescription',
        re = 'reviewPaymentPivot',
        oe = 'reviewPromotionTotalDescription',
        ce = 'targetingLocationPivot',
        ie = 'backButton',
        le = 'targetingLocationSearch',
        se = 'targetingLocationItem',
        ue = 'paymentMethodSelect',
        de = n('4zmP'),
        me = n('9RkS'),
        pe = n('v6aA'),
        ge = n('Xrkv'),
        fe = n('SrIh'),
        he = V.a.c4d0434a,
        be = V.a.dc4a9413,
        ye = V.a.bad70c09,
        ve = V.a.c133a39b,
        _e = V.a.ee5da8f4,
        Ee = V.a.g4bf9cb7,
        we = V.a.gc3ce5d9,
        Ce = V.a.c1778029,
        Ie = V.a.cb51c854,
        Te = V.a.bb7b39e1,
        Pe = V.a.eb9466d0,
        Se = V.a.c21037d0,
        ke = V.a.b07cc9f1,
        xe = V.a.ce309bed,
        Oe = V.a.c6c16a51,
        Le = V.a.cc49d03f,
        je = V.a.dbe9353d,
        Ae = V.a.c64974fb,
        De = V.a.i638f89c
      function Be(e) {
        switch (e) {
          case 'AnyGender':
            return Ie
          case 'Male':
            return Te
          case 'Female':
            return Pe
          default:
            return Object(fe.a)('Unknown gender: '.concat(e)), e
        }
      }
      function Fe(e) {
        switch (e) {
          case 'COUNTRIES':
            return Se
          case 'REGIONS':
            return ke
          case 'METROS':
            return xe
          case 'CITIES':
            return Oe
          case 'POSTAL_CODES':
            return Le
          default:
            return Object(fe.a)('Unknown targeting locationType: '.concat(e)), e
        }
      }
      function Me(e) {
        var t = e.amount,
          n = e.currency,
          a = e.fractionDigits,
          r = e.lang
        return t.toLocaleString(Object(q.a)(r), {
          currency: n,
          style: 'currency',
          maximumFractionDigits: void 0 !== a ? a : 2,
          minimumFractionDigits: void 0 !== a ? a : 2,
        })
      }
      function Re(e) {
        var t = e.currency,
          n = e.durationDays,
          a = e.lang,
          r = Me({ amount: e.totalBudgetNum, lang: a, currency: t, fractionDigits: 0 })
        return be({ totalBudget: r, durationLabel: He({ durationDays: n }) })
      }
      function qe(e) {
        var t = e.currency,
          n = e.dailyBudgetNum,
          a = e.durationDays,
          r = Me({ amount: n, lang: e.lang, currency: t, fractionDigits: 0 })
        return he({ dailyBudget: r, durationLabel: He({ durationDays: a }) })
      }
      function Ne(e) {
        var t = e.numLocations,
          n = V.a.ia24dc8c(t)
        return ye({ numLocations: n })
      }
      function He(e) {
        var t = e.durationDays,
          n = V.a.ia24dc8c(t)
        return Ee({ durationDays: n })
      }
      var ze = n('yE5w'),
        Ue = V.a.a3a09d48,
        Ve = V.a.e7eb3683,
        Ge = V.a.d9f6e3cd,
        We = V.a.d9d6e10e,
        Qe = V.a.b3954ec9,
        Ke = V.a.e1b48db4,
        Xe = Array(30)
          .fill(null)
          .map(function (e, t) {
            return t + 1
          }),
        Je = (function (e) {
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
                  c = Xe[t]
                r !== c &&
                  (Object(ze.p)(a)(ze.n.setBudgetDuration(''.concat(c))), o(c), e._fetchForecastedAudienceIfNeeded())
              }),
              g()(l()(e), '_handleBudgetSlider', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.availableBudgets,
                  o = n.dailyBudget,
                  c = n.setDailyBudget,
                  i = r[t]
                o !== i &&
                  (Object(ze.p)(a)(ze.n.setDailyBudget(''.concat(i))), c(i), e._fetchForecastedAudienceIfNeeded())
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
                  Object(ze.p)(e)(ze.n.budgetSelectPageLoad()), this._fetchForecastedAudienceIfNeeded()
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
                    p = s.toLocaleString(Object(q.a)(m), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    g = i[0].toLocaleString(Object(q.a)(m), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    f = i
                      .slice(-1)[0]
                      .toLocaleString(Object(q.a)(m), {
                        currency: l,
                        style: 'currency',
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }),
                    b = c
                      ? ((t = (e = c).high),
                        (n = e.low),
                        (a = V.a.cf8abf58(n)),
                        (r = V.a.cf8abf58(t)),
                        we({ audienceLow: a, audienceHigh: r }))
                      : ' ',
                    y = He({ durationDays: u }),
                    _ = He({ durationDays: Xe[0] }),
                    E = He({ durationDays: Xe.slice(-1)[0] }),
                    w = this._getSliderProps(i, s),
                    C = this._getSliderProps(Xe, u),
                    I = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled')
                      ? qe({ dailyBudgetNum: s, durationDays: u, lang: m, currency: l })
                      : Re({ totalBudgetNum: s * u, durationDays: u, lang: m, currency: l })
                  return h.a.createElement(
                    L.a,
                    { style: Ye.qpContainer, testID: Z },
                    h.a.createElement(R, { screenType: ze.c.BudgetSelect }),
                    d &&
                      h.a.createElement(
                        L.a,
                        { style: Ye.gutter },
                        h.a.createElement(de.a, { text: d, type: 'danger' }),
                      ),
                    h.a.createElement(H, { primaryLabel: I, subtitle: b, title: Ue }),
                    h.a.createElement(
                      D,
                      { label: Ve },
                      h.a.createElement(
                        L.a,
                        { style: Ye.childSpacing },
                        h.a.createElement(
                          me.a,
                          v()({ accessibilityLabel: Ge, accessibilityLabelValueText: '"'.concat(p, '"') }, w, {
                            maxIcon: h.a.createElement(j.b, { style: Ye.iconText }, f),
                            minIcon: h.a.createElement(j.b, { style: Ye.iconText }, g),
                            onChange: this._handleBudgetSlider,
                            thumbLabel: p,
                          }),
                        ),
                      ),
                    ),
                    h.a.createElement(
                      D,
                      { label: We },
                      h.a.createElement(
                        L.a,
                        { style: Ye.childSpacing },
                        h.a.createElement(
                          me.a,
                          v()({ accessibilityLabel: Qe, accessibilityLabelValueText: '"'.concat(y, '"') }, C, {
                            maxIcon: h.a.createElement(j.b, { style: Ye.iconText }, E),
                            minIcon: h.a.createElement(j.b, { style: Ye.iconText }, _),
                            onChange: this._handleDurationSlider,
                            thumbLabel: y,
                          }),
                        ),
                      ),
                    ),
                    h.a.createElement(
                      L.a,
                      { style: Ye.disclaimer },
                      h.a.createElement(N.a, { align: 'center', color: 'gray700', size: 'subtext2' }, Ke),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(Je, 'contextType', pe.a)
      var Ye = A.a.create(function (e) {
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
        Ze = O(Je),
        $e = n('kGix'),
        et = n('XOJV'),
        tt = function (e, t) {
          return t.match.params.statusId
        },
        nt = function (e, t) {
          return et.a.selectHydrated(e, tt(0, t))
        },
        at = function (e, t) {
          return Object($e.d)(
            et.a.selectFetchStatus(e, tt(0, t)),
            e.quickPromote.budget.availableBudgetsFetchStatus,
            e.quickPromote.targeting.initialTargetedLocationsFetchStatus,
            e.quickPromote.account.accountDataFetchStatus,
          )
        },
        rt = function (e, t) {
          return e.quickPromote.promoteStatus
        },
        ot = function (e, t) {
          return e.quickPromote.promoteErrorCode
        },
        ct = function (e, t) {
          return e.quickPromote.account.campaigns
        },
        it = Object(E.a)()
          .propsFromState(function () {
            return {
              statusId: tt,
              fetchStatus: at,
              tweet: nt,
              campaigns: ct,
              promoteFetchStatus: rt,
              promoteErrorCode: ot,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_SCREEN',
              ),
              fetchTweetIfNeeded: et.a.fetchOneIfNeeded,
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
              setPromoteFetchStatus: C.O,
            }
          })
          .withAnalytics(ze.o),
        lt = Object(E.a)().withAnalytics(ze.o),
        st = n('feu+'),
        ut = V.a.e1bca506,
        dt = V.a.e4a4c608,
        mt = V.a.a219e217,
        pt = (function (e) {
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
                Object(ze.l)(n)(o, c, r)
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
                  Object(ze.p)(e)(ze.n.donePageLoad())
                },
              },
              {
                key: 'render',
                value: function () {
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(R, { screenType: ze.c.Done }),
                    h.a.createElement(st.a, {
                      actionLabel: mt,
                      headline: ut,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToAnalytics,
                      onClose: this._handleClose,
                      subtext: dt,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(pt, 'contextType', pe.a)
      var gt = lt(pt),
        ft = n('v//M'),
        ht = n('W5XZ'),
        bt = n('jHSc'),
        yt =
          (n('Cm4o'),
          n('KrtT'),
          function (e) {
            return !!e.quickPromote.account.selectedFundingInstrument
          }),
        vt = function (e) {
          return e.quickPromote.coupons
        },
        _t = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        Et = Object(E.a)()
          .propsFromState(function () {
            return { hasFundingInstrument: yt, coupons: vt, lang: _.o, currency: _t }
          })
          .withAnalytics(ze.o),
        wt = n.p + 'desktop_header_image.bfa9e365.png',
        Ct = n('TIdA'),
        It = n('A91F')
      function Tt(e) {
        var t = e.style
        return h.a.createElement(
          L.a,
          { style: t },
          h.a.createElement(Ct.a, { accessibilityLabel: '', aspectMode: It.a.exact(750 / 306), image: wt }),
        )
      }
      var Pt = n.p + 'mobile_header_image.431e8465.png'
      function St(e) {
        var t = e.style
        return h.a.createElement(
          L.a,
          { style: t },
          h.a.createElement(Ct.a, { accessibilityLabel: '', aspectMode: It.a.COVER, image: Pt }),
        )
      }
      var kt = n('cHvH')
      function xt(e) {
        var t = e.style
        return h.a.createElement(kt.a, null, function (e) {
          var n = e.windowHeight
          return e.windowWidth > A.a.theme.breakpoints.medium
            ? h.a.createElement(Tt, { style: t })
            : h.a.createElement(St, { style: [t, { height: 0.5 * n }] })
        })
      }
      var Ot = V.a.dcfb0332,
        Lt = V.a.db841200,
        jt = V.a.hc67be9d,
        At = V.a.e8702fea,
        Dt = V.a.i2e3c1ce,
        Bt = V.a.dcfb0332,
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
                n.push(Object(ze.j)(o, c, r, i ? ze.c.Objective : ze.c.Targeting))
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
                  Object(ze.p)(r)(
                    ze.n.introPageLoad({ hasFundingInstrument: c, entryPoint: d, otherEntryPoint: m, withCoupon: g }),
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
                    c = n.match.params.quickPromotePlatform === ze.a.Rweb,
                    i = (null == a || null === (e = a.eligible_coupon) || void 0 === e ? void 0 : e.total_amount) || 0,
                    l = Me({
                      amount: i,
                      currency:
                        (null == a || null === (t = a.eligible_coupon) || void 0 === t ? void 0 : t.currency_code) || r,
                      lang: o,
                      fractionDigits: 0,
                    }),
                    s = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled') && i > 0,
                    u = s ? At({ couponAmount: l }) : Ot,
                    d = s ? Dt({ couponAmount: l }) : Lt,
                    m = s ? Bt : jt
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(R, { screenType: ze.c.Intro }),
                    h.a.createElement(st.a, {
                      actionLabel: m,
                      graphic: xt,
                      graphicDisplayMode: 'illustrationFullWidth',
                      headline: u,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToNextPage,
                      onClose: this._handleClose,
                      primaryButtonTestID: G,
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
      g()(Ft, 'contextType', pe.a)
      var Mt = Et(Ft),
        Rt = n('yiKp'),
        qt = n.n(Rt),
        Nt = n('RhWx'),
        Ht = n.n(Nt),
        zt = function (e, t) {
          return e.quickPromote.objective
        },
        Ut = function (e, t) {
          return et.a.selectHydrated(
            e,
            (function (e, t) {
              return t.match.params.statusId
            })(0, t),
          )
        },
        Vt = Object(E.a)()
          .propsFromState(function () {
            return { selectedObjective: zt, tweet: Ut }
          })
          .propsFromActions(function () {
            return { setObjective: C.K }
          })
          .withAnalytics(ze.o),
        Gt = n('h0NW'),
        Wt = V.a.d7d55f3b,
        Qt = V.a.b25fd3d6,
        Kt = V.a.bf214f47,
        Xt = function (e) {
          var t = e.infoItems,
            n = e.onClose,
            a = e.onLoad
          return (
            h.a.useEffect(function () {
              return a()
            }, []),
            h.a.createElement(st.a, {
              actionLabel: Kt,
              children: h.a.createElement(
                L.a,
                { style: Jt.infoItemGroup },
                h.a.createElement(Gt.a, { containerStyle: Jt.infoItem, items: t }),
              ),
              contentStyle: Jt.heading,
              graphicDisplayMode: 'none',
              headline: Wt,
              onAction: n,
              onClose: n,
              subtext: Qt,
              withCloseButton: !1,
            })
          )
        },
        Jt = A.a.create(function (e) {
          return {
            heading: { marginBottom: e.spaces.space40 },
            infoItemGroup: { marginBottom: e.spaces.space20 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0, marginBottom: e.spaces.space24 },
          }
        }),
        Yt = n('W2FU'),
        Zt = n('E0cF'),
        $t = n('gSL+'),
        en = n('RKmr'),
        tn = n('Oib4'),
        nn = n('Dcm7'),
        an = n('iEUn'),
        rn = n('pwey'),
        on = n('Lsrn'),
        cn = n('k/Ka'),
        ln = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(cn.a)(
            'svg',
            qt()(
              qt()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [on.a.root, e.style],
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
      ln.metadata = { width: 24, height: 24 }
      var sn = ln,
        un = V.a.fcc839b5,
        dn = V.a.d80964aa,
        mn = V.a.d4f57cce,
        pn = V.a.g06d6bf8,
        gn = V.a.c1a1817b,
        fn = V.a.efc9b3fe,
        hn = tn.a,
        bn = V.a.h277a2e8,
        yn = V.a.gd429fea,
        vn = nn.a,
        _n = V.a.icb22cdd,
        En = V.a.i859a9d3,
        wn = V.a.e974b2d4,
        Cn = V.a.b9c9b214,
        In = V.a.i0e569bf,
        Tn = A.a.create(function (e) {
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
        Pn = {
          label: dn,
          value: Yt.c.Engagements,
          decoration: h.a.createElement(an.a, { style: [Tn.icon, Tn.engagementIcon] }),
          testID: J(Yt.c.Engagements),
        },
        Sn = {
          label: mn,
          value: Yt.c.Followers,
          decoration: h.a.createElement(rn.a, { style: [Tn.icon, Tn.followersIcon] }),
          testID: J(Yt.c.Followers),
        },
        kn = {
          label: pn,
          value: Yt.c.WebsiteClicks,
          decoration: h.a.createElement(sn, { style: [Tn.icon, Tn.websiteClicksIcon] }),
          testID: J(Yt.c.WebsiteClicks),
        },
        xn = [
          { label: dn, description: wn, decoration: h.a.createElement(an.a, { style: [Tn.icon, Tn.engagementIcon] }) },
          { label: mn, description: Cn, decoration: h.a.createElement(rn.a, { style: [Tn.icon, Tn.followersIcon] }) },
          { label: pn, description: In, decoration: h.a.createElement(sn, { style: [Tn.icon, Tn.websiteClicksIcon] }) },
        ]
      function On() {
        return h.a.createElement(de.a, { Icon: hn, headline: gn, text: fn, type: 'warning' })
      }
      function Ln() {
        return h.a.createElement(de.a, { Icon: vn, headline: bn, text: yn, type: 'danger' })
      }
      var jn = Vt(function (e) {
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
            g = p ? Zt.a.getOriginalTweet(p) : p,
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
            Object(ze.p)(l)(ze.n.goalSelectionPageLoad())
          }, [])
          var v = h.a.useMemo(
              function () {
                return (function (e) {
                  var t = e.selectedObjective,
                    n = e.tweetContainsLinks,
                    a = e.tweetHasMedia,
                    r = e.tweetIsReply
                  return [Pn]
                    .concat(
                      Ht()(
                        r ? [] : [qt()(qt()({}, Sn), {}, { description: a && t === Yt.c.Followers ? On() : void 0 })],
                      ),
                      [qt()(qt()({}, kn), {}, { disabled: !n, description: !n && Ln() })],
                    )
                    .map(function (e) {
                      return qt()(
                        qt()({}, e),
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
                m(t), Object(ze.p)(l)(ze.n.setPromoteGoal(t))
              },
              [l, m],
            )
          return h.a.createElement(
            L.a,
            { style: Tn.qpContainer, testID: Q },
            h.a.createElement(R, { screenType: ze.c.Objective }),
            h.a.createElement(
              L.a,
              { style: Tn.titleContainer },
              h.a.createElement(j.b, { align: 'center', size: 'headline1', weight: 'bold' }, un),
            ),
            h.a.createElement(
              L.a,
              null,
              h.a.createElement($t.a, { name: 'objective-picker', onChange: _, options: v, value: d }),
            ),
            h.a.createElement(
              L.a,
              { style: Tn.goalSelectionCallout },
              h.a.createElement(en.a, {
                description: _n,
                learnMoreLabel: En,
                learnMoreLink: {
                  external: !1,
                  method: 'replace',
                  pathname: u.pathname,
                  state: { showEducationInterstitial: !0 },
                },
              }),
            ),
            null !== (i = u.state) && void 0 !== i && i.showEducationInterstitial
              ? h.a.createElement(Xt, {
                  infoItems: xn,
                  onClose: function () {
                    return s.replace(u.pathname, { showEducationInterstitial: !1 })
                  },
                  onLoad: function () {
                    return Object(ze.p)(l)(ze.n.educationInterstitialLoad())
                  },
                })
              : null,
          )
        }),
        An = n('ddV6'),
        Dn = n.n(An),
        Bn = function (e) {
          return e.quickPromote.paymentMethods
        },
        Fn = Object(E.a)()
          .propsFromState(function () {
            return { paymentMethods: Bn, selectedPaymentMethod: C.p }
          })
          .propsFromActions(function () {
            return { setSelectedPaymentMethod: C.Q, deletePaymentMethod: C.b }
          })
          .withAnalytics(ze.o),
        Mn = n('YeIG'),
        Rn = n('JYMr'),
        qn = n('cm6r'),
        Nn = n('mjJ+'),
        Hn = n('3rX5'),
        zn = n('Wms4'),
        Un = n('IG7M'),
        Vn = n('I4+6'),
        Gn = n('iY63'),
        Wn = n('HsFH'),
        Qn = V.a.de43b66f,
        Kn = V.a.hb4773af,
        Xn = V.a.aa2a3dd3,
        Jn = V.a.b1c5b63c,
        Yn = function (e, t) {
          return e.map(function (e) {
            return {
              label: h.a.createElement(Zn, {
                deletePaymentMethodHandler: t,
                id: e.id,
                imgSrcUrl: e.imgSrcUrl,
                lastFourDigits: e.lastFourDigits,
                status: e.cardStatus,
              }),
              value: e.id,
              containerStyle: [ea.paymentMethodRadioContainer, ea.bottomBorder],
            }
          })
        },
        Zn = function (e) {
          var t = e.deletePaymentMethodHandler
            ? function (t) {
                return h.a.createElement(Nn.a, {
                  items: [
                    {
                      Icon: Wn.a,
                      text: Xn,
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
            { style: ea.paymentMethod },
            h.a.createElement(
              L.a,
              { style: [ea.descriptionItemContainer, e.paymentDescriptionStyle] },
              e.imgSrcUrl
                ? h.a.createElement(
                    L.a,
                    { style: ea.cardImageContainer },
                    h.a.createElement(Hn.a, { source: e.imgSrcUrl, style: ea.cardImage }),
                  )
                : h.a.createElement(j.b, { size: 'body' }, 'Card'),
              h.a.createElement(
                L.a,
                { style: ea.descriptionContainer },
                h.a.createElement(
                  j.b,
                  { color: 'gray700', size: 'subtext1' },
                  ''.concat(Jn, ' ').concat(e.lastFourDigits),
                ),
              ),
              'Expired' === e.status &&
                h.a.createElement(
                  L.a,
                  { style: ea.statusBadgeContainer },
                  h.a.createElement(
                    zn.a,
                    { style: ea.expiredBadge },
                    h.a.createElement(j.b, { size: 'subtext3', style: ea.expiredBadge, weight: 'bold' }, e.status),
                  ),
                ),
            ),
            e.deletePaymentMethodHandler &&
              h.a.createElement(Un.a, { renderActionMenu: t, style: ea.actionMenuContainer }),
          )
        },
        $n = Vn.a.generate({
          backgroundColor: A.a.theme.colors.transparent,
          color: A.a.theme.colors.primary,
          insetFocusRing: !0,
        }),
        ea = A.a.create(function (e) {
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
        ta = Fn(function (e) {
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
            d = Dn()(u, 2),
            m = d[0],
            p = d[1]
          return h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(
              L.a,
              { style: ea.qpContainer, testID: ue },
              m ? h.a.createElement(Rn.a, { indeterminate: !0 }) : null,
              h.a.createElement(
                L.a,
                { style: ea.titleContainer },
                h.a.createElement(
                  j.b,
                  {
                    accessibilityLevel: 1,
                    accessibilityRole: 'heading',
                    align: 'left',
                    size: 'headline1',
                    weight: 'heavy',
                  },
                  Qn,
                ),
              ),
              h.a.createElement($t.a, {
                disabled: m,
                name: Qn,
                onChange: function (e, t) {
                  if (!Object(Mn.a)(i)) {
                    var n =
                      i.find(function (e) {
                        return e.id === t
                      }) || null
                    s(n)
                  }
                },
                options: Yn(i, function (e) {
                  e &&
                    (p(!0),
                    t(e).finally(function () {
                      return p(!1)
                    }))
                }),
                value: l ? l.id : '',
              }),
              h.a.createElement(
                L.a,
                { style: ea.addPaymentMethodContainer },
                h.a.createElement(
                  qn.a,
                  {
                    disabled: m,
                    interactive: m,
                    interactiveStyles: $n,
                    onPress: function () {
                      return n.push(Object(ze.j)(o, c, r, ze.c.Payment))
                    },
                    style: ea.addPaymentMethodInteractiveContainer,
                  },
                  h.a.createElement(Gn.a, { style: ea.plusIcon }),
                  h.a.createElement(j.b, { align: 'left', color: 'primary' }, Kn),
                ),
              ),
            ),
          )
        }),
        na = (n('ho0z'), n('zh9S')),
        aa = n('y0iL'),
        ra = function (e, t) {
          return t.match.params.statusId
        },
        oa = function (e, t) {
          return et.a.selectHydrated(e, ra(0, t))
        },
        ca = function (e, t) {
          return et.a.selectFetchStatus(e, ra(0, t))
        },
        ia = function (e, t) {
          return e.quickPromote.account.adsAccount
        },
        la = function (e, t) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        sa = Object(E.a)()
          .propsFromState(function () {
            return { fetchStatus: ca, tweet: oa, adsAccount: ia, fundingInstrument: la }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_PAYMENT_SCREEN',
              ),
              fetchTweetIfNeeded: et.a.fetchOneIfNeeded,
              scribeAction: na.c,
              savePlatformRedirectBackState: function () {
                return Object(aa.l)(e.match.params.quickPromotePlatform)
              },
              fetchAdsAccountDataIfNeeded: aa.d,
            }
          })
          .withAnalytics(ze.o),
        ua = n('tI3i'),
        da = n.n(ua),
        ma = n('Rp9C'),
        pa = n('bPFD'),
        ga = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(l()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              g()(l()(e), '_handleIFrameMessage', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.tweet
                if (t && 'quick_promote' === t.name)
                  if ('scribe' === t.type) {
                    var o = (r && Zt.a.getOriginalTweet(r)) || void 0,
                      c = o ? [ma.a.getTweetItem(o)] : [],
                      i = t.scribeData || {},
                      l = 'string' == typeof i.component ? i.component : 'quick_promote',
                      s = 'string' == typeof i.uiEvent ? i.uiEvent : ''
                    a.scribe({ component: l, action: s, data: { items: c } })
                  } else if ('navigation' === t.type) {
                    var u = e.props,
                      d = u.createLocalApiErrorHandler,
                      m = u.fetchAdsAccountDataIfNeeded,
                      p = u.history,
                      g = u.match.params,
                      f = g.quickPromotePlatform,
                      h = g.screenName,
                      b = g.statusId
                    da()(!!e.context.loggedInUserId, 'loggedInUserId must be defined'),
                      m(e.context.loggedInUserId, !0).catch(d()),
                      p.push('/'.concat(h, '/status/').concat(b, '/').concat(f, '/').concat(ze.c.Review))
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
                  var s = Object(ze.i)(i, t, l, a)
                  Object(ze.p)(n)(ze.n.paymentPageLoad(s.url)), s.isSameHost || (window.location.href = s.url)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.adsAccount,
                    n = e.fundingInstrument,
                    a = e.match.params,
                    r = a.quickPromotePlatform,
                    o = a.statusId,
                    c = Object(ze.i)(r, t, o, n)
                  return c.isSameHost
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(R, { screenType: ze.c.Payment }),
                        h.a.createElement(pa.a, {
                          dangerouslyDisableSandbox: !0,
                          onMessage: this._handleIFrameMessage,
                          reportError: fe.a,
                          src: c.url,
                          style: fa.iframe,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(ga, 'contextType', pe.a)
      var fa = A.a.create(function (e) {
          return { iframe: { flexGrow: 1, paddingTop: 0 } }
        }),
        ha = sa(ga)
      function ba(e) {
        new Image().src = e
      }
      function ya() {
        return h.a.createElement(kt.a, null, function (e) {
          e.windowHeight
          return ba(e.windowWidth > A.a.theme.breakpoints.medium ? wt : Pt), null
        })
      }
      var va = n('0zXz'),
        _a = function (e) {
          return e.quickPromote.objective
        },
        Ea = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        wa = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Ca = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        Ia = function (e, t) {
          return e.quickPromote.budget.dailyBudget
        },
        Ta = function (e, t) {
          return e.quickPromote.budget.durationDays
        },
        Pa = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        Sa = function (e) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        ka = function (e) {
          return e.quickPromote.account.vatInfo
        },
        xa = function (e) {
          return e.quickPromote.account.adsAccount
        },
        Oa = function (e) {
          return e.quickPromote.promoteStatus
        },
        La = function (e) {
          return e.quickPromote.promoteErrorCode
        },
        ja = function (e) {
          return e.quickPromote.coupons
        },
        Aa = function (e) {
          return e.quickPromote.enrollCouponErrorCode
        },
        Da = Object(E.a)()
          .propsFromState(function () {
            return {
              objective: _a,
              targetedLocations: Ea,
              ageBucket: wa,
              gender: Ca,
              dailyBudget: Ia,
              durationDays: Ta,
              lang: _.o,
              country: C.q,
              currency: Pa,
              fundingInstrument: Sa,
              vatInfo: ka,
              adsAccount: xa,
              promoteStatus: Oa,
              promoteErrorCode: La,
              coupons: ja,
              enrollCouponErrorCode: Aa,
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
          .withAnalytics(ze.o),
        Ba = n('csss'),
        Fa = n('/yvb'),
        Ma = n('shC7'),
        Ra = V.a.c3c57e3e,
        qa = V.a.h06724b4,
        Na = V.a.a96f811e,
        Ha = V.a.b069d89c,
        za = V.a.a3a09d48,
        Ua = V.a.fbd44e96,
        Va = V.a.e36bce63,
        Ga = V.a.c602f5b8,
        Wa = V.a.ia83756b,
        Qa = V.a.cc217a04,
        Ka = V.a.c602f5b8,
        Xa = V.a.g4f2b588,
        Ja = V.a.i41612d9,
        Ya = V.a.cdae1af0,
        Za = V.a.ed8bb5af,
        $a = V.a.fc640c20,
        er = V.a.be2dc078,
        tr = V.a.iaefd4de,
        nr = V.a.e5e42640,
        ar = V.a.da2805d1,
        rr = V.a.ef4602eb,
        or = V.a.a4db098b,
        cr = V.a.ef7e3916,
        ir = (function (e) {
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
                return a && a.timezone && a.country_code ? (t ? Ya : n ? $a : Za) : n ? tr : er
              }),
              g()(l()(e), '_handlePromote', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.createPromotion
                Object(ze.p)(n)(ze.n.promotionClick()), a(n)
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
                if (!n) return a === $e.a.LOADED ? ar : null
                switch (n) {
                  case 'MissingFundingInstrument':
                  case 'InvalidPaymentMethod':
                    return cr
                  case 'CampaignCreationFailed':
                  case 'PromotionIneligible':
                    return or
                  default:
                    return rr
                }
              }),
              g()(l()(e), '_getCouponErrorMessage', function () {
                var t = e.props.enrollCouponErrorCode
                if (!t) return null
                switch (t) {
                  case 'AccountIneligible':
                  case 'MissingAdsAccount':
                  default:
                    return nr
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
                  Object(ze.p)(t)(ze.n.reviewPageLoad({ hasFundingInstrument: c })), this._handleEnrollCoupon()
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
                      ((e = Yt.e[r]),
                      (t = e.maxAge),
                      (n = e.minAge),
                      t ? ve({ minAge: n, maxAge: t }) : _e({ minAge: n })),
                    I = (function (e) {
                      switch (e) {
                        case 'Engagements':
                          return je
                        case 'Followers':
                          return Ae
                        case 'WebsiteClicks':
                          return De
                        default:
                          throw b()
                      }
                    })(g),
                    T = (function (e) {
                      var t = e.formattedAge,
                        n = e.gender,
                        a = e.locations,
                        r = a.length
                      return Ce({
                        newlinePlaceholder: '\n',
                        locations: Object(ge.a)(a),
                        locationsHeading: Ne({ numLocations: r }),
                        formattedAge: t,
                        gender: n,
                      })
                    })({
                      locations: v.map(function (e) {
                        return e.localized_name
                      }),
                      formattedAge: w,
                      gender: Be(d),
                    }),
                    P = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled'),
                    S = P
                      ? qe({ dailyBudgetNum: l, durationDays: s, lang: m, currency: i })
                      : Re({ totalBudgetNum: l * s, durationDays: s, lang: m, currency: i }),
                    k =
                      u && null != c && c.existing_balance.length
                        ? c.existing_balance.find(function (e) {
                            return e.currency_code === u.currency
                          })
                        : null,
                    x = k ? '' : Me({ amount: l * s, lang: m, currency: i }),
                    O = p.params,
                    A = O.quickPromotePlatform,
                    B = O.screenName,
                    F = O.statusId,
                    M = this._getPromoteErrorMessage(),
                    q = this._getCouponErrorMessage(),
                    z = this.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                    U = _ && null === _.tax_id && null === _.tax_exemption_id && 'NOT_SET' === _.tax_category,
                    G = E ? !!y : !!u,
                    W = !(null == c || !c.eligible_coupon)
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(R, { screenType: ze.c.Review }),
                    h.a.createElement(
                      L.a,
                      { style: sr.qpContainer, testID: $ },
                      M &&
                        h.a.createElement(
                          L.a,
                          { style: sr.gutter },
                          h.a.createElement(de.a, { text: M, type: 'danger' }),
                        ),
                      q &&
                        h.a.createElement(
                          L.a,
                          { style: sr.gutter },
                          h.a.createElement(de.a, { text: q, type: 'warning' }),
                        ),
                      h.a.createElement(H, { subtitle: qa, title: Ra }),
                      z &&
                        h.a.createElement(D, {
                          description: I,
                          descriptionTestID: te,
                          label: Na,
                          withBottomBorder: !1,
                        }),
                      h.a.createElement(D, { description: T, descriptionTestID: ne, label: Ha, withBottomBorder: !1 }),
                      h.a.createElement(D, {
                        description: S,
                        descriptionDir: Ma.a.getConstants().isRTL ? 'rtl' : 'ltr',
                        descriptionTestID: ae,
                        label: P ? Ua : za,
                        withBottomBorder: !1,
                      }),
                      E
                        ? h.a.createElement(Ba.a, {
                            description:
                              y && !U
                                ? h.a.createElement(Zn, {
                                    id: y.id,
                                    imgSrcUrl: y.imgSrcUrl,
                                    lastFourDigits: y.lastFourDigits,
                                    paymentDescriptionStyle: sr.paymentDescription,
                                    status: y.cardStatus,
                                  })
                                : h.a.createElement(
                                    j.b,
                                    { color: 'primary', size: 'subtext2' },
                                    this._getPaymentDescription(G, W),
                                  ),
                            label: h.a.createElement(j.b, { weight: 'bold' }, Va),
                            link:
                              !y || U ? Object(ze.j)(B, F, A, ze.c.Payment) : Object(ze.j)(B, F, A, ze.c.PaymentSelect),
                            testID: re,
                          })
                        : h.a.createElement(Ba.a, {
                            description:
                              u && !U
                                ? u.description
                                : h.a.createElement(
                                    j.b,
                                    { color: 'primary', size: 'subtext2' },
                                    this._getPaymentDescription(G, W),
                                  ),
                            label: h.a.createElement(j.b, { weight: 'bold' }, Va),
                            link: !u || U ? Object(ze.j)(B, F, A, ze.c.Payment) : void 0,
                            testID: re,
                          }),
                      P
                        ? h.a.createElement(
                            D,
                            { description: x, descriptionTestID: oe, label: Ga, withBottomBorder: !1 },
                            k
                              ? (function (e) {
                                  var t = e.balance,
                                    n = e.currency,
                                    a = e.lang,
                                    r = e.subtotal,
                                    o = Me({ amount: r, currency: n, lang: a }),
                                    c = Me({ amount: Math.min(r, t), currency: n, lang: a }),
                                    i = Me({ amount: Math.max(0, r - t), currency: n, lang: a }),
                                    l = t > r ? Me({ amount: t - r, currency: n, lang: a }) : null
                                  return h.a.createElement(
                                    h.a.Fragment,
                                    null,
                                    h.a.createElement(
                                      L.a,
                                      { style: sr.promotionTotalRow },
                                      h.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, Wa),
                                      h.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, o),
                                    ),
                                    h.a.createElement(
                                      L.a,
                                      { style: sr.promotionTotalRow },
                                      h.a.createElement(j.b, { color: 'blue500', size: 'subtext2' }, Qa),
                                      h.a.createElement(j.b, { color: 'blue500', size: 'subtext2' }, '-', c),
                                    ),
                                    h.a.createElement(
                                      L.a,
                                      { style: sr.promotionTotalRow },
                                      h.a.createElement(
                                        j.b,
                                        { color: 'gray700', size: 'subtext2', weight: 'bold' },
                                        Ka,
                                      ),
                                      h.a.createElement(
                                        j.b,
                                        { color: 'gray700', size: 'subtext2', testID: oe, weight: 'bold' },
                                        i,
                                      ),
                                    ),
                                    l &&
                                      h.a.createElement(
                                        L.a,
                                        { style: sr.promotionTotalRow },
                                        h.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, Xa),
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
                      { style: sr.bottomElements },
                      h.a.createElement(
                        Fa.a,
                        {
                          disabled: !u || U || C.X.includes(f),
                          onPress: this._handlePromote,
                          size: 'xLarge',
                          testID: ee,
                          type: 'brandFilled',
                        },
                        Ja,
                      ),
                      h.a.createElement(
                        N.a,
                        { style: sr.terms },
                        (function (e, t) {
                          return t
                            ? h.a.createElement(
                                V.a.I18NFormatMessage,
                                { $i18n: 'cace9784' },
                                h.a.createElement(j.b, { link: Object(ze.k)(e) }, V.a.acff74af),
                                h.a.createElement(j.b, { link: Object(ze.g)(e) }, V.a.cb8d4ace),
                              )
                            : h.a.createElement(
                                V.a.I18NFormatMessage,
                                { $i18n: 'c99d7100' },
                                h.a.createElement(j.b, { link: Object(ze.k)(e) }, V.a.d56b5ac3),
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
      g()(ir, 'contextType', pe.a)
      var lr,
        sr = A.a.create(function (e) {
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
        ur = Da(ir),
        dr = n('zCf4'),
        mr =
          (n('yH/f'),
          n('7xRU'),
          n('LW0h'),
          function (e, t) {
            var n = gr(e, t)
            return e.ads.typeahead.targetingLocation[n]
          }),
        pr = function (e, t) {
          var n,
            a = gr(e, t)
          return null === (n = e.ads.typeahead.targetingLocation[a]) || void 0 === n ? void 0 : n.fetchStatus
        },
        gr = function (e, t) {
          return e.quickPromote.targeting.locationQuery
        },
        fr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        hr = function (e, t) {
          return e.quickPromote.account.campaigns
        },
        br = Object(E.a)()
          .propsFromState(function () {
            return {
              targetingLocationQuery: gr,
              targetingLocations: mr,
              targetedLocations: fr,
              fetchStatus: pr,
              userCountry: _.y,
              campaigns: hr,
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
          .withAnalytics(ze.o),
        yr = n('VwDm'),
        vr = n('G1WX'),
        _r = n('e0ey'),
        Er = n('xKuM'),
        wr = n('5Vk4'),
        Cr = n('6OUF'),
        Ir = n('zrOZ'),
        Tr = n('kevv'),
        Pr = V.a.cc642518,
        Sr = V.a.i0e8c3c6,
        kr = V.a.deaf5b15,
        xr = V.a.f69ad048,
        Or = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
        Lr = Object.freeze(
          ((lr = {}), g()(lr, ze.e.CurrentCountryMatch, 0), g()(lr, ze.e.Match, 1), g()(lr, ze.e.NoMatch, 2), lr),
        ),
        jr = (function (e) {
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
                  Ar,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: a,
                  },
                  h.a.createElement(L.a, null, h.a.createElement(j.b, { style: Dr.headingText, weight: 'heavy' }, Sr)),
                  h.a.createElement(vr.a, { fetchStatus: n, render: e._renderSearchList, retryMessage: kr }),
                )
              }),
              g()(l()(e), '_handleClear', function () {
                ;(0, e.props.setTargetingLocationQuery)('')
              }),
              g()(l()(e), '_renderSearchList', function () {
                var t = e.props.targetedLocations,
                  n = Object(Ir.a)(
                    t.map(function (e) {
                      return e.targeting_value
                    }),
                  ),
                  a = e._getTargetingLocationOptions()
                return h.a.createElement(
                  L.a,
                  { style: Dr.overflow },
                  a.map(function (t) {
                    var a = t.localized_name,
                      r = t.location_type,
                      o = t.targeting_value
                    return h.a.createElement(_r.a, {
                      checked: n.has(o),
                      helpText: Fe(r),
                      key: o,
                      label: a,
                      name: o,
                      onChange: e._handleSearchSelect,
                      testID: se,
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
                  s = Object(ze.h)(i || 'US'),
                  u = l.filter(function (e) {
                    var t = e.country_code,
                      n = e.localized_name
                    return s(n, t, o) !== ze.e.NoMatch
                  })
                return Object(Tr.a)(
                  u,
                  [
                    function (e) {
                      var t = e.country_code,
                        n = e.localized_name,
                        a = s(n, t, o)
                      return Lr[a]
                    },
                    function (e) {
                      e.localized_name
                      var t,
                        n = e.location_type
                      return null !== (t = Or[n]) && void 0 !== t
                        ? t
                        : (function (e) {
                            Object(fe.a)(
                              'Quick Promote: Unknown location type: '
                                .concat(e, '. Expected one of {')
                                .concat(Object.keys(Or).join(', '), '}'),
                            )
                          })(n) || Object.keys(Or).length
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
                    ? (Object(ze.p)(r)(
                        ze.n.setTargetingLocation({
                          id: i.targeting_value,
                          locationType: i.location_type,
                          countryCode: i.country_code,
                        }),
                      ),
                      o([i]),
                      e._handleGoBack())
                    : Object(fe.a)('Quick Promote: could not find "'.concat(t, '" in list of targeting options'))
                } else Object(ze.p)(r)(ze.n.targetingLocationError()), e.setState({ errorMessage: xr })
                c('')
              }),
              g()(l()(e), '_renderSelected', function () {
                var t = e.props,
                  n = t.targetedLocations,
                  a = t.targetingLocationQuery,
                  r = e.state.errorMessage
                return h.a.createElement(
                  Ar,
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
                        { style: Dr.gutter },
                        h.a.createElement(de.a, { text: r, type: 'danger' }),
                      ),
                    h.a.createElement(j.b, { style: Dr.headingText, weight: 'heavy' }, Ne({ numLocations: n.length })),
                  ),
                  h.a.createElement(
                    L.a,
                    null,
                    n.map(function (t) {
                      var n = t.localized_name,
                        a = t.location_type,
                        r = t.targeting_value
                      return h.a.createElement(_r.a, {
                        checked: !0,
                        helpText: Fe(a),
                        key: r,
                        label: n,
                        name: r,
                        onChange: e._handleSearchSelect,
                        testID: se,
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
                Object(ze.m)(a, r)(l, s, c, i, u, d)
              }),
              g()(l()(e), '_handleTargetingLocationChange', function (t) {
                var n = t.target.value,
                  a = e.props,
                  r = a.analytics,
                  o = a.createLocalApiErrorHandler,
                  c = a.setAndFetchTargetingLocationQuery
                Object(ze.p)(r)(ze.n.targetingLocationSearch(n)), c(n).catch(o())
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
                  Object(ze.p)(e)(ze.n.targetingLocationPageLoad())
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
                    h.a.createElement(R, { screenType: ze.c.TargetingLocation }),
                    e ? this._renderSearch() : this._renderSelected(),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(jr, 'contextType', pe.a)
      var Ar = function (e) {
          var t = e.children,
            n = e.onBack,
            a = e.onChange,
            r = e.onClear,
            o = e.targetingLocationQuery
          return h.a.createElement(
            L.a,
            { style: Dr.qpContainer, testID: Y },
            h.a.createElement(Er.a, {
              leftControl: h.a.createElement(wr.a, { onClick: n }),
              middleControl: h.a.createElement(Cr.a, {
                Icon: yr.a,
                autoFocus: !0,
                name: 'locationTargetingInput',
                onChange: a,
                onClear: r,
                placeholder: Pr,
                style: Dr.input,
                testID: le,
                value: o,
                withClearButton: !0,
              }),
            }),
            t,
          )
        },
        Dr = A.a.create(function (e) {
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
        Br = br(jr),
        Fr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Mr = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        Rr = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        qr = Object(E.a)()
          .propsFromState(function () {
            return { targetedLocations: Fr, selectedGender: Mr, selectedAgeBucket: Rr }
          })
          .propsFromActions(function () {
            return { setTargetedAgeBucket: C.R, setTargetedGender: C.S }
          })
          .withAnalytics(ze.o),
        Nr = n('JiIh'),
        Hr = n('fyvP'),
        zr = n('J4ZH'),
        Ur = n('tn7R'),
        Vr = n('mN6z'),
        Gr = V.a.hba1d105,
        Wr = V.a.cba0133d,
        Qr = V.a.e1efbead,
        Kr = V.a.c6ff7c1f,
        Xr = V.a.b555fb45,
        Jr = V.a.a8d0108d,
        Yr = [Yt.b.Any, Yt.b.Female, Yt.b.Male].map(function (e) {
          return { label: Be(e), value: e, testID: X(e) }
        }),
        Zr = V.a.j2c03e12,
        $r = ['13', '18', '21', '25', '35', '50'],
        eo = [void 0, void 0, void 0, '24', '34', '49', '54'],
        to = Object(zr.a)(Object(Ur.a)(Yt.e), function (e) {
          return e.maxAge || 'over'
        }),
        no = eo.length
      function ao(e, t) {
        var n
        if (e && t) return null === (n = Yt.d[e]) || void 0 === n ? void 0 : n[t]
      }
      var ro = (function (e) {
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
              ;(0, a.setTargetedGender)(n), Object(ze.p)(r)(ze.n.setTargetingGender(n))
            }),
            g()(l()(e), '_handleAgeBucketChange', function (t, n) {
              var a = Dn()(t, 2),
                r = a[0],
                o = a[1],
                c = e.props,
                i = c.analytics,
                l = c.selectedAgeBucket,
                s = c.setTargetedAgeBucket,
                u = e._sliderValueFromSelectedAgeBucket(l)
              if (!Object(Vr.a)(u, [r, o]))
                if (n) {
                  var d = $r[r]
                  if (!d) return
                  var m = ao(d, o === no ? 'over' : eo[o])
                  if (m) Object(ze.p)(i)(ze.n.setTargetingAgeBucket(m)), s(m)
                  else {
                    var p = Object.keys(Yt.d[d])[0]
                    e._setAgeBucket({ minAge: d, maxAge: p })
                  }
                } else {
                  var g = o === no ? 'over' : eo[o]
                  if (!g) return
                  var f = ao($r[r], g)
                  if (f) Object(ze.p)(i)(ze.n.setTargetingAgeBucket(f)), s(f)
                  else {
                    var h = to[g].slice(-1)[0].minAge
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
                i = Yt.d[a][n || 'over']
              if (!i)
                throw new Error(
                  'Age bucket not found for minAge: "'.concat(a, '", maxAge: "').concat(n || '<empty>', '"'),
                )
              Object(ze.p)(o)(ze.n.setTargetingAgeBucket(i)), c(i)
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
                Object(ze.p)(e)(ze.n.targetingPageLoad())
              },
            },
            {
              key: '_sliderValueFromSelectedAgeBucket',
              value: function (e) {
                var t = Yt.e[e],
                  n = t.maxAge,
                  a = t.minAge
                return [$r.indexOf(a), n ? eo.indexOf(n) : no]
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
                  s = Ne({ numLocations: r.length }),
                  u = Yt.e[n],
                  d = u.maxAge,
                  m = u.minAge,
                  p = this._sliderValueFromSelectedAgeBucket(n),
                  g = d || Zr
                return h.a.createElement(
                  L.a,
                  { style: oo.qpContainer, testID: K },
                  h.a.createElement(R, { screenType: ze.c.Targeting }),
                  h.a.createElement(H, { subtitle: Wr, title: Gr }),
                  h.a.createElement(Ba.a, {
                    description: Object(ge.a)(
                      r.map(function (e) {
                        return e.localized_name
                      }),
                    ),
                    label: h.a.createElement(j.b, { weight: 'bold' }, s),
                    link: Object(ze.j)(i, l, c, ze.c.TargetingLocation),
                    testID: ce,
                  }),
                  h.a.createElement(
                    D,
                    { label: Qr },
                    h.a.createElement(
                      L.a,
                      { style: oo.ageRangeSlider },
                      h.a.createElement(Nr.a, {
                        endThumbAccessibilityLabel: Xr,
                        endThumbAccessibilityLabelValueText: '"'.concat(g, '"'),
                        endThumbLabel: g,
                        max: no,
                        min: 0,
                        onChange: this._handleAgeBucketChange,
                        startThumbAccessibilityLabel: Kr,
                        startThumbAccessibilityLabelValueText: '"'.concat(m, '"'),
                        startThumbLabel: m,
                        value: p,
                      }),
                    ),
                  ),
                  h.a.createElement(
                    D,
                    { label: Jr, withBottomBorder: !1 },
                    h.a.createElement(
                      L.a,
                      { style: oo.genderSelection },
                      h.a.createElement(Hr.a, {
                        name: 'gender',
                        onChange: this._handleGenderChange,
                        options: Yr,
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
      g()(ro, 'contextType', pe.a)
      var oo = A.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            genderSelection: { marginTop: e.spaces.space4 },
            ageRangeSlider: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        co = qr(ro),
        io = n('q9Zt'),
        lo = V.a.a065172e,
        so = V.a.cfcdb4a1,
        uo = V.a.dcfb0332,
        mo = V.a.c1df579e,
        po = (function (e) {
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
                return t ? Zt.a.getOriginalTweet(t) : t
              }),
              g()(l()(e), '_render', function () {
                var t = e.props.history,
                  n = e._getRetweetOrTweet()
                return !n || (n && n.user.id_str !== e.context.loggedInUserId)
                  ? h.a.createElement(
                      bt.b,
                      { history: t, onBackClick: e._handleGoBack, title: uo },
                      h.a.createElement(io.a, { onRetry: null, title: lo }),
                    )
                  : e._renderPage()
              }),
              g()(l()(e), '_renderHeader', va.a),
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
                  p = d ? ze.d : ze.b,
                  g = function (e) {
                    return Object(ze.j)(s, u, i, e)
                  }
                switch (l) {
                  case 'intro':
                    return e._renderSplashPage()
                  case 'objective':
                    if (d) {
                      var f = g(ze.c.Targeting)
                      return e._renderProgressPage(ze.d.Objective, f)
                    }
                    n.replace(Object(ze.j)(s, u, i, ze.c.Targeting))
                    break
                  case 'targeting':
                    var h = g(ze.c.BudgetSelect)
                    return e._renderProgressPage(p.Targeting, h)
                  case 'budget_select':
                    var y = g(ze.c.Review)
                    return e._renderProgressPage(p.BudgetSelect, y)
                  case 'review':
                    var v = [$e.a.LOADING, $e.a.LOADED].includes(o) && !r
                    return e._renderProgressPage(v ? p.Finish : p.Review)
                  case 'payment':
                    return e._renderProgressPage(p.Review)
                  case 'targeting_location':
                    return e._renderPopupPage()
                  case 'payment_select':
                    return m || n.replace(Object(ze.j)(s, u, i, ze.c.Review)), e._renderNavigationPage()
                  case 'done':
                    return e._renderSplashPage()
                  default:
                    throw b()
                }
              }),
              g()(l()(e), '_renderProgressPage', function (t, n) {
                var a = e.props.history
                return h.a.createElement(
                  bt.b,
                  { documentTitle: uo, history: a, renderHeader: e._renderHeader },
                  h.a.createElement(Er.a, {
                    leftControl: h.a.createElement(wr.a, { autofocus: !0, onClick: e._handleGoBack, testID: ie }),
                    rightControl: n && h.a.createElement(Fa.a, { link: n, testID: W, type: 'brandText' }, mo),
                  }),
                  h.a.createElement(Rn.a, { progress: t, style: go.progressBar }),
                  h.a.createElement(L.a, { style: go.noScrollView }, e._renderRoutes()),
                )
              }),
              g()(l()(e), '_renderNavigationPage', function () {
                var t = e.props.history
                return h.a.createElement(
                  bt.b,
                  { documentTitle: uo, history: t, renderHeader: e._renderHeader },
                  h.a.createElement(Er.a, {
                    leftControl: h.a.createElement(wr.a, { autofocus: !0, onClick: e._handleGoBack, testID: ie }),
                  }),
                  h.a.createElement(L.a, { style: go.noScrollView }, e._renderRoutes()),
                )
              }),
              g()(l()(e), '_renderPopupPage', function () {
                var t = e.props.history
                return h.a.createElement(
                  bt.b,
                  { documentTitle: uo, history: t, renderHeader: e._renderHeader },
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
                    return h.a.createElement(dr.b, { component: Mt })
                  case 'objective':
                    return h.a.createElement(dr.b, { component: jn })
                  case 'targeting':
                    return h.a.createElement(dr.b, { component: co })
                  case 'targeting_location':
                    return h.a.createElement(dr.b, { component: Br })
                  case 'budget_select':
                    return h.a.createElement(dr.b, { component: Ze })
                  case 'review':
                    return h.a.createElement(dr.b, { component: ur })
                  case 'payment':
                    return h.a.createElement(dr.b, { component: ha })
                  case 'payment_select':
                    return h.a.createElement(dr.b, { component: ta })
                  case 'done':
                    return h.a.createElement(dr.b, { component: gt })
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
                Object(ze.p)(n)(ze.n.back(l)), Object(ze.m)(r, o)(s, u, i, l, d, m)
              }),
              g()(l()(e), '_handleRequestRetry', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.match.params.quickPromoteScreenName
                Object(ze.p)(n)(ze.n.reload(a)), window.location.reload()
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
                    ? ($e.a.LOADED === m && f !== ze.c.Done && p($e.a.NONE),
                      Object(M.b)(
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
                          a(ht.a)(e), Object(ze.p)(n)(ze.n.pageLoadFail(e.message))
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
                  var a = Object($e.d)(t, this.state.isLoaded ? $e.a.LOADED : $e.a.LOADING)
                  return a !== $e.a.LOADED
                    ? h.a.createElement(
                        bt.b,
                        { documentTitle: uo, history: n, renderHeader: this._renderHeader },
                        h.a.createElement(ya, null),
                        h.a.createElement(ft.a, {
                          fetchStatus: a,
                          onRequestRetry: this._handleRequestRetry,
                          render: this._render,
                          retryMessage: so,
                        }),
                      )
                    : h.a.createElement(ft.a, {
                        fetchStatus: a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._render,
                        retryMessage: so,
                      })
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(po, 'contextType', pe.a)
      var go = A.a.create(function (e) {
          return { progressBar: { backgroundColor: e.colors.gray50 }, noScrollView: { overflowX: 'hidden', flex: 1 } }
        }),
        fo = it(po)
      t.default = fo
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
        T = n('QK5w'),
        P = n('eSoz'),
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
        F = function (e, t) {
          return 'PUSH' === t.history.action
        },
        M = function (e, t) {
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
            a = M(e, t)
          return !!n && n.includes('/i/topics/tweet/'.concat(a))
        },
        Q = function (e, t) {
          if (!w.canUseDOM) return !1
          var n = t.location.query,
            a = Object(T.a)(e, t)
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
          return O.a.selectHydrated(e, M(e, t))
        },
        X = function (e, t) {
          var n = M(e, t),
            a = O.a.selectHydrated(e, n)
          return a && a.conversation_id_str ? O.a.selectHydrated(e, a.conversation_id_str) : null
        },
        J = function (e, t) {
          return O.a.selectFetchStatus(e, M(e, t))
        },
        Y = function (e, t) {
          return t.location.query && 'string' == typeof t.location.query.cxt ? t.location.query.cxt : void 0
        }
      function Z(e, t) {
        var n = K(e, t),
          a = n ? Object(P.g)(e, n) : void 0
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
              isForwardNavigation: F,
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
              statusId: M,
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
        Te = n('7JQg'),
        Pe = n('VS6U'),
        Se = n('tocL'),
        ke = n('HBr9'),
        xe = n('2fY8'),
        Oe = n('MWbm'),
        Le = n('G8HL'),
        je = n('pxuL'),
        Ae = n('t62R'),
        De = n('rHpw'),
        Be = n('oQhu'),
        Fe = n('mN6z'),
        Me = ie.a.ea831526,
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
                return !Object(Fe.a)(e, this.props)
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
                  Te.b,
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
                      b.a.createElement(Pe.a, {
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
                  { collectionName: Me },
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
