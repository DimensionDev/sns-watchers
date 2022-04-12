;(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
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
        E = n('m3Bd'),
        _ = n.n(E),
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
              n = _()(e, T)
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
                      Object(j.a)(
                        {},
                        L.b,
                        g()({}, A.b.Tweet, {
                          handlers: g()(
                            {},
                            D.a.Tweet,
                            Object(B.e)({
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
        E = (n('z84I'), n('i4UL'), n('vrRf'), n('M+/F'), n('RqPI')),
        _ = n('rxPX'),
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
        O = Object(_.a)()
          .propsFromState(function () {
            return {
              dailyBudget: I,
              durationDays: P,
              availableBudgets: S,
              lang: E.p,
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
                { style: V.primaryLabelContainer },
                h.a.createElement(A.b, { align: 'center', color: 'primary', size: 'title4' }, t),
              ),
            h.a.createElement(
              L.a,
              { style: V.subtitleContainer },
              h.a.createElement(z.a, { align: 'center', color: 'gray700' }, n),
            ),
          )
        },
        V = j.a.create(function (e) {
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
        Ee = W.a.bad70c09,
        _e = W.a.c133a39b,
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
        Ae = W.a.c6c16a51,
        je = W.a.cc49d03f,
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
            return Ae
          case 'POSTAL_CODES':
            return je
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
        return Ee({ numLocations: n })
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
                    E = Ue({ durationDays: Ye[0] }),
                    _ = Ue({ durationDays: Ye.slice(-1)[0] }),
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
                            maxIcon: h.a.createElement(A.b, { style: $e.iconText }, f),
                            minIcon: h.a.createElement(A.b, { style: $e.iconText }, g),
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
                            maxIcon: h.a.createElement(A.b, { style: $e.iconText }, _),
                            minIcon: h.a.createElement(A.b, { style: $e.iconText }, E),
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
      var $e = j.a.create(function (e) {
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
            e.quickPromote.couponsFetchStatus,
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
        st = Object(_.a)()
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
        ut = Object(_.a)().withAnalytics(Ve.o),
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
        Et =
          (n('Cm4o'),
          n('KrtT'),
          function (e) {
            return !!e.quickPromote.account.selectedFundingInstrument
          }),
        _t = function (e) {
          return e.quickPromote.coupons
        },
        wt = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        Ct = Object(_.a)()
          .propsFromState(function () {
            return { hasFundingInstrument: Et, coupons: _t, lang: E.p, currency: wt }
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
          return e.windowWidth > j.a.theme.breakpoints.medium
            ? h.a.createElement(St, { style: t })
            : h.a.createElement(xt, { style: [t, { height: 0.5 * n }] })
        })
      }
      var At = W.a.dcfb0332,
        jt = W.a.db841200,
        Dt = W.a.hc67be9d,
        Bt = W.a.e8702fea,
        Mt = W.a.e44dc578,
        Ft = (0, W.a.ba2e82a1)(new Date(2022, 3, 30)),
        Rt = W.a.dcfb0332,
        qt = (function (e) {
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
                    u = s ? Bt({ couponAmount: l }) : At,
                    d = s ? Mt({ couponAmount: l, date: Ft }) : jt,
                    m = s ? Rt : Dt
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
      g()(qt, 'contextType', fe.a)
      var Nt = Ct(qt),
        Ht = n('yiKp'),
        zt = n.n(Ht),
        Ut = n('RhWx'),
        Vt = n.n(Ut),
        Gt = function (e, t) {
          return e.quickPromote.objective
        },
        Wt = function (e, t) {
          return nt.a.selectHydrated(
            e,
            (function (e, t) {
              return t.match.params.statusId
            })(0, t),
          )
        },
        Qt = Object(_.a)()
          .propsFromState(function () {
            return { selectedObjective: Gt, tweet: Wt }
          })
          .propsFromActions(function () {
            return { setObjective: C.K }
          })
          .withAnalytics(Ve.o),
        Kt = n('h0NW'),
        Xt = W.a.d7d55f3b,
        Jt = W.a.b25fd3d6,
        Yt = W.a.bf214f47,
        Zt = function (e) {
          var t = e.infoItems,
            n = e.onClose,
            a = e.onLoad
          return (
            h.a.useEffect(function () {
              return a()
            }, []),
            h.a.createElement(dt.a, {
              actionLabel: Yt,
              children: h.a.createElement(
                L.a,
                { style: $t.infoItemGroup },
                h.a.createElement(Kt.a, { containerStyle: $t.infoItem, items: t }),
              ),
              contentStyle: $t.heading,
              graphicDisplayMode: 'none',
              headline: Xt,
              onAction: n,
              onClose: n,
              subtext: Jt,
              withCloseButton: !1,
            })
          )
        },
        $t = j.a.create(function (e) {
          return {
            heading: { marginBottom: e.spaces.space40 },
            infoItemGroup: { marginBottom: e.spaces.space20 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0, marginBottom: e.spaces.space24 },
          }
        }),
        en = n('W2FU'),
        tn = n('E0cF'),
        nn = n('gSL+'),
        an = n('RKmr'),
        rn = n('Oib4'),
        on = n('Dcm7'),
        cn = n('iEUn'),
        ln = n('pwey'),
        sn = n('Lsrn'),
        un = n('k/Ka'),
        dn = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(un.a)(
            'svg',
            zt()(
              zt()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [sn.a.root, e.style],
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
      dn.metadata = { width: 24, height: 24 }
      var mn = dn,
        pn = W.a.fcc839b5,
        gn = W.a.d80964aa,
        fn = W.a.d4f57cce,
        hn = W.a.g06d6bf8,
        bn = W.a.c1a1817b,
        yn = W.a.efc9b3fe,
        vn = rn.a,
        En = W.a.h277a2e8,
        _n = W.a.gd429fea,
        wn = on.a,
        Cn = W.a.icb22cdd,
        In = W.a.i859a9d3,
        Pn = W.a.e974b2d4,
        Tn = W.a.b9c9b214,
        Sn = W.a.i0e569bf,
        kn = j.a.create(function (e) {
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
          label: gn,
          value: en.c.Engagements,
          decoration: h.a.createElement(cn.a, { style: [kn.icon, kn.engagementIcon] }),
          testID: Z(en.c.Engagements),
        },
        On = {
          label: fn,
          value: en.c.Followers,
          decoration: h.a.createElement(ln.a, { style: [kn.icon, kn.followersIcon] }),
          testID: Z(en.c.Followers),
        },
        Ln = {
          label: hn,
          value: en.c.WebsiteClicks,
          decoration: h.a.createElement(mn, { style: [kn.icon, kn.websiteClicksIcon] }),
          testID: Z(en.c.WebsiteClicks),
        },
        An = [
          { label: gn, description: Pn, decoration: h.a.createElement(cn.a, { style: [kn.icon, kn.engagementIcon] }) },
          { label: fn, description: Tn, decoration: h.a.createElement(ln.a, { style: [kn.icon, kn.followersIcon] }) },
          { label: hn, description: Sn, decoration: h.a.createElement(mn, { style: [kn.icon, kn.websiteClicksIcon] }) },
        ]
      function jn() {
        return h.a.createElement(pe.a, { Icon: vn, headline: bn, text: yn, type: 'warning' })
      }
      function Dn() {
        return h.a.createElement(pe.a, { Icon: wn, headline: En, text: _n, type: 'danger' })
      }
      var Bn = Qt(function (e) {
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
            g = p ? tn.a.getOriginalTweet(p) : p,
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
                  return [xn]
                    .concat(
                      Vt()(
                        r ? [] : [zt()(zt()({}, On), {}, { description: a && t === en.c.Followers ? jn() : void 0 })],
                      ),
                      [zt()(zt()({}, Ln), {}, { disabled: !n, description: !n && Dn() })],
                    )
                    .map(function (e) {
                      return zt()(
                        zt()({}, e),
                        {},
                        { label: h.a.createElement(A.b, { size: 'headline2', weight: 'bold' }, e.label) },
                      )
                    })
                })({ tweetHasMedia: f, tweetContainsLinks: b, selectedObjective: d, tweetIsReply: y })
              },
              [f, b, d, y],
            ),
            E = h.a.useCallback(
              function (e, t) {
                m(t), Object(Ve.p)(l)(Ve.n.setPromoteGoal(t))
              },
              [l, m],
            )
          return h.a.createElement(
            L.a,
            { style: kn.qpContainer, testID: X },
            h.a.createElement(N, { screenType: Ve.c.Objective }),
            h.a.createElement(
              L.a,
              { style: kn.titleContainer },
              h.a.createElement(A.b, { align: 'center', size: 'headline1', weight: 'bold' }, pn),
            ),
            h.a.createElement(
              L.a,
              null,
              h.a.createElement(nn.a, { name: 'objective-picker', onChange: E, options: v, value: d }),
            ),
            h.a.createElement(
              L.a,
              { style: kn.goalSelectionCallout },
              h.a.createElement(an.a, {
                description: Cn,
                learnMoreLabel: In,
                learnMoreLink: {
                  external: !1,
                  method: 'replace',
                  pathname: u.pathname,
                  state: { showEducationInterstitial: !0 },
                },
              }),
            ),
            null !== (i = u.state) && void 0 !== i && i.showEducationInterstitial
              ? h.a.createElement(Zt, {
                  infoItems: An,
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
        Mn = n('ddV6'),
        Fn = n.n(Mn),
        Rn = function (e) {
          return e.quickPromote.paymentMethods
        },
        qn = Object(_.a)()
          .propsFromState(function () {
            return { paymentMethods: Rn, selectedPaymentMethod: C.o }
          })
          .propsFromActions(function () {
            return { setSelectedPaymentMethod: C.E, deletePaymentMethod: C.b }
          })
          .withAnalytics(Ve.o),
        Nn = n('YeIG'),
        Hn = n('JYMr'),
        zn = n('cm6r'),
        Un = n('mjJ+'),
        Vn = n('3rX5'),
        Gn = n('Wms4'),
        Wn = n('IG7M'),
        Qn = n('sgih'),
        Kn = n('/yvb'),
        Xn = n('I4+6'),
        Jn = n('iY63'),
        Yn = n('HsFH'),
        Zn = W.a.de43b66f,
        $n = W.a.hb4773af,
        ea = W.a.aa2a3dd3,
        ta = W.a.b1c5b63c,
        na = W.a.affb5877,
        aa = W.a.cfd2f35d,
        ra = function (e, t, n) {
          return e.map(function (e) {
            return {
              label: h.a.createElement(oa, {
                deletePaymentMethodHandler: n,
                id: e.id,
                imgSrcUrl: e.imgSrcUrl,
                isSelected: t === e.id,
                lastFourDigits: e.lastFourDigits,
                status: e.cardStatus,
              }),
              value: e.id,
              containerStyle: [la.paymentMethodRadioContainer, la.bottomBorder],
            }
          })
        },
        oa = function (e) {
          var t = e.deletePaymentMethodHandler
            ? function (t) {
                return h.a.createElement(Un.a, {
                  items: [
                    {
                      Icon: Yn.a,
                      text: ea,
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
            { style: la.paymentMethod },
            h.a.createElement(
              L.a,
              { style: [la.descriptionItemContainer, e.paymentDescriptionStyle] },
              e.imgSrcUrl
                ? h.a.createElement(
                    L.a,
                    { style: la.cardImageContainer },
                    h.a.createElement(Vn.a, { source: e.imgSrcUrl, style: la.cardImage }),
                  )
                : h.a.createElement(A.b, { size: 'body' }, 'Card'),
              h.a.createElement(
                L.a,
                { style: la.descriptionContainer },
                h.a.createElement(
                  A.b,
                  { color: 'gray700', size: 'subtext1' },
                  ''.concat(ta, ' ').concat(e.lastFourDigits),
                ),
              ),
              ('Expired' === e.status || 'Invalid' === e.status) &&
                h.a.createElement(
                  L.a,
                  { style: la.statusBadgeContainer },
                  h.a.createElement(
                    Gn.a,
                    { style: la.expiredBadge },
                    h.a.createElement(A.b, { size: 'subtext3', style: la.expiredBadge, weight: 'bold' }, e.status),
                  ),
                ),
            ),
            e.deletePaymentMethodHandler &&
              h.a.createElement(Wn.a, { renderActionMenu: t, style: la.actionMenuContainer }),
          )
        },
        ca = function (e) {
          var t = e.cancelDeletePaymentMethodHandler,
            n = e.confirmDeletePaymentMethodHandler
          return h.a.createElement(
            Qn.a,
            { onMaskClick: t, type: 'bottom', withMask: !0 },
            h.a.createElement(
              L.a,
              { style: la.deleteCardConfirmContainer },
              h.a.createElement(
                Kn.a,
                { icon: h.a.createElement(Yn.a, null), onPress: n, style: la.modalButton, type: 'destructiveOutlined' },
                na,
              ),
              h.a.createElement(Kn.a, { onPress: t, style: la.modalButton, type: 'primaryOutlined' }, aa),
            ),
          )
        },
        ia = Xn.a.generate({
          backgroundColor: j.a.theme.colors.transparent,
          color: j.a.theme.colors.primary,
          insetFocusRing: !0,
        }),
        la = j.a.create(function (e) {
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
        sa = qn(function (e) {
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
            p = Fn()(m, 2),
            g = p[0],
            f = p[1],
            b = h.a.useState(null),
            y = Fn()(b, 2),
            v = y[0],
            E = y[1]
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
                { style: la.qpContainer, testID: me },
                g ? h.a.createElement(Hn.a, { indeterminate: !0 }) : null,
                h.a.createElement(
                  L.a,
                  { style: la.titleContainer },
                  h.a.createElement(
                    A.b,
                    {
                      accessibilityLevel: 1,
                      accessibilityRole: 'heading',
                      align: 'left',
                      size: 'headline1',
                      weight: 'heavy',
                    },
                    Zn,
                  ),
                ),
                h.a.createElement(nn.a, {
                  disabled: g,
                  name: Zn,
                  onChange: function (e, n) {
                    if (!Object(Nn.a)(l)) {
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
                  options: ra(l, d, function (e) {
                    return E(e)
                  }),
                  value: d,
                }),
                h.a.createElement(
                  L.a,
                  { style: la.addPaymentMethodContainer },
                  h.a.createElement(
                    zn.a,
                    {
                      disabled: g,
                      interactive: g,
                      interactiveStyles: ia,
                      onPress: function () {
                        return a.push(''.concat(Object(Ve.j)(c, i, o, Ve.c.Payment), '?isAddingPayment=true'))
                      },
                      style: la.addPaymentMethodInteractiveContainer,
                    },
                    h.a.createElement(Jn.a, { style: la.plusIcon }),
                    h.a.createElement(A.b, { align: 'left', color: 'primary' }, $n),
                  ),
                ),
                v &&
                  h.a.createElement(ca, {
                    cancelDeletePaymentMethodHandler: function () {
                      return E(null)
                    },
                    confirmDeletePaymentMethodHandler: function () {
                      v &&
                        (E(null),
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
        ua = (n('LJOr'), n('ho0z'), n('zh9S')),
        da = n('y0iL'),
        ma = function (e, t) {
          return t.match.params.statusId
        },
        pa = function (e, t) {
          return nt.a.selectHydrated(e, ma(0, t))
        },
        ga = function (e, t) {
          return nt.a.selectFetchStatus(e, ma(0, t))
        },
        fa = function (e, t) {
          return e.quickPromote.account.adsAccount
        },
        ha = function (e, t) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        ba = function (e) {
          return e.quickPromote.account.vatInfo
        },
        ya = Object(_.a)()
          .propsFromState(function () {
            return {
              fetchStatus: ga,
              tweet: pa,
              adsAccount: fa,
              fundingInstrument: ha,
              selectedPaymentMethod: C.o,
              vatInfo: ba,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_PAYMENT_SCREEN',
              ),
              fetchTweetIfNeeded: nt.a.fetchOneIfNeeded,
              scribeAction: ua.scribeAction,
              savePlatformRedirectBackState: function () {
                return Object(da.k)(e.match.params.quickPromotePlatform)
              },
              fetchAdsAccountDataIfNeeded: da.d,
            }
          })
          .withAnalytics(Ve.o),
        va = n('tI3i'),
        Ea = n.n(va),
        _a = n('Rp9C'),
        wa = n('bPFD'),
        Ca = (function (e) {
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
                    var c = (r && tn.a.getOriginalTweet(r)) || void 0,
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
                    Ea()(!!e.context.loggedInUserId, 'loggedInUserId must be defined'),
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
                        h.a.createElement(wa.a, {
                          dangerouslyDisableSandbox: !0,
                          onMessage: this._handleIFrameMessage,
                          reportError: be.a,
                          src: l.url,
                          style: Ia.iframe,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(Ca, 'contextType', fe.a)
      var Ia = j.a.create(function (e) {
          return { iframe: { flexGrow: 1, paddingTop: 0 } }
        }),
        Pa = ya(Ca)
      function Ta(e) {
        new Image().src = e
      }
      function Sa() {
        return h.a.createElement(Ot.a, null, function (e) {
          e.windowHeight
          return Ta(e.windowWidth > j.a.theme.breakpoints.medium ? It : kt), null
        })
      }
      var ka = n('0zXz'),
        xa = function (e) {
          return e.quickPromote.objective
        },
        Oa = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        La = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Aa = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        ja = function (e, t) {
          return e.quickPromote.budget.dailyBudget
        },
        Da = function (e, t) {
          return e.quickPromote.budget.durationDays
        },
        Ba = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        Ma = function (e) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        Fa = function (e) {
          return e.quickPromote.account.vatInfo
        },
        Ra = function (e) {
          return e.quickPromote.account.adsAccount
        },
        qa = function (e) {
          return e.quickPromote.promoteStatus
        },
        Na = function (e) {
          return e.quickPromote.promoteErrorCode
        },
        Ha = function (e) {
          return e.quickPromote.coupons
        },
        za = function (e) {
          return e.quickPromote.enrollCouponErrorCode
        },
        Ua = Object(_.a)()
          .propsFromState(function () {
            return {
              objective: xa,
              targetedLocations: Oa,
              ageBucket: La,
              gender: Aa,
              dailyBudget: ja,
              durationDays: Da,
              lang: E.p,
              country: C.p,
              currency: Ba,
              fundingInstrument: Ma,
              vatInfo: Fa,
              adsAccount: Ra,
              promoteStatus: qa,
              promoteErrorCode: Na,
              coupons: Ha,
              enrollCouponErrorCode: za,
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
        Va = n('csss'),
        Ga = n('shC7'),
        Wa = W.a.c3c57e3e,
        Qa = W.a.h06724b4,
        Ka = W.a.a96f811e,
        Xa = W.a.b069d89c,
        Ja = W.a.a3a09d48,
        Ya = W.a.fbd44e96,
        Za = W.a.e36bce63,
        $a = W.a.c602f5b8,
        er = W.a.ia83756b,
        tr = W.a.cc217a04,
        nr = W.a.c602f5b8,
        ar = W.a.g4f2b588,
        rr = W.a.i41612d9,
        or = W.a.cdae1af0,
        cr = W.a.ed8bb5af,
        ir = W.a.fc640c20,
        lr = W.a.be2dc078,
        sr = W.a.iaefd4de,
        ur = W.a.e5e42640,
        dr = W.a.da2805d1,
        mr = W.a.ef4602eb,
        pr = W.a.a4db098b,
        gr = W.a.ef7e3916,
        fr = (function (e) {
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
                return a && a.timezone && a.country_code ? (t ? or : n ? ir : cr) : n ? sr : lr
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
                if (!n) return a === tt.a.LOADED ? dr : null
                switch (n) {
                  case 'MissingFundingInstrument':
                  case 'InvalidPaymentMethod':
                    return gr
                  case 'CampaignCreationFailed':
                  case 'PromotionIneligible':
                    return pr
                  default:
                    return mr
                }
              }),
              g()(l()(e), '_getCouponErrorMessage', function () {
                var t = e.props.enrollCouponErrorCode
                if (!t) return null
                switch (t) {
                  case 'AccountIneligible':
                  case 'MissingAdsAccount':
                  default:
                    return ur
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
                    a = e.fundingInstrument
                  n()
                  var r = !!a
                  Object(Ve.p)(t)(Ve.n.reviewPageLoad({ hasFundingInstrument: r })), this._handleEnrollCoupon()
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
                    E = a.vatInfo,
                    _ = this.context.featureSwitches.isTrue('responsive_web_qp_payment_select_enabled'),
                    w =
                      ((e = en.e[r]),
                      (t = e.maxAge),
                      (n = e.minAge),
                      t ? _e({ minAge: n, maxAge: t }) : we({ minAge: n })),
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
                    j = O.quickPromotePlatform,
                    B = O.screenName,
                    M = O.statusId,
                    F = this._getPromoteErrorMessage(),
                    R = this._getCouponErrorMessage(),
                    q = this.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                    H = E && null === E.tax_id && null === E.tax_exemption_id && 'NOT_SET' === E.tax_category,
                    V = !!u,
                    G = !(null == c || !c.eligible_coupon)
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(N, { screenType: Ve.c.Review }),
                    h.a.createElement(
                      L.a,
                      { style: br.qpContainer, testID: te },
                      F &&
                        h.a.createElement(
                          L.a,
                          { style: br.gutter },
                          h.a.createElement(pe.a, { text: F, type: 'danger' }),
                        ),
                      R &&
                        h.a.createElement(
                          L.a,
                          { style: br.gutter },
                          h.a.createElement(pe.a, { text: R, type: 'warning' }),
                        ),
                      h.a.createElement(U, { subtitle: Qa, title: Wa }),
                      q &&
                        h.a.createElement(D, {
                          description: I,
                          descriptionTestID: ae,
                          label: Ka,
                          withBottomBorder: !1,
                        }),
                      h.a.createElement(D, { description: P, descriptionTestID: re, label: Xa, withBottomBorder: !1 }),
                      h.a.createElement(D, {
                        description: S,
                        descriptionDir: Ga.a.getConstants().isRTL ? 'rtl' : 'ltr',
                        descriptionTestID: oe,
                        label: T ? Ya : Ja,
                        withBottomBorder: !1,
                      }),
                      _
                        ? h.a.createElement(Va.a, {
                            description:
                              'CREDIT_CARD' === (null == u ? void 0 : u.type) && y && !H
                                ? h.a.createElement(oa, {
                                    id: y.id,
                                    imgSrcUrl: y.imgSrcUrl,
                                    lastFourDigits: y.lastFourDigits,
                                    paymentDescriptionStyle: br.paymentDescription,
                                    status: y.cardStatus,
                                  })
                                : u && !H
                                ? u.description
                                : h.a.createElement(
                                    A.b,
                                    { color: 'primary', size: 'subtext2' },
                                    this._getPaymentDescription(V, G),
                                  ),
                            label: h.a.createElement(A.b, { weight: 'bold' }, Za),
                            link:
                              !u || H
                                ? Object(Ve.j)(B, M, j, Ve.c.Payment)
                                : 'CREDIT_CARD' === (null == u ? void 0 : u.type)
                                ? Object(Ve.j)(B, M, j, Ve.c.PaymentSelect)
                                : void 0,
                            testID: ce,
                          })
                        : h.a.createElement(Va.a, {
                            description:
                              u && !H
                                ? u.description
                                : h.a.createElement(
                                    A.b,
                                    { color: 'primary', size: 'subtext2' },
                                    this._getPaymentDescription(V, G),
                                  ),
                            label: h.a.createElement(A.b, { weight: 'bold' }, Za),
                            link: !u || H ? Object(Ve.j)(B, M, j, Ve.c.Payment) : void 0,
                            testID: ce,
                          }),
                      T
                        ? h.a.createElement(
                            D,
                            { description: x, descriptionTestID: ie, label: $a, withBottomBorder: !1 },
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
                                      { style: br.promotionTotalRow },
                                      h.a.createElement(A.b, { color: 'gray700', size: 'subtext2' }, er),
                                      h.a.createElement(A.b, { color: 'gray700', size: 'subtext2' }, o),
                                    ),
                                    h.a.createElement(
                                      L.a,
                                      { style: br.promotionTotalRow },
                                      h.a.createElement(A.b, { color: 'blue500', size: 'subtext2' }, tr),
                                      h.a.createElement(A.b, { color: 'blue500', size: 'subtext2' }, '-', c),
                                    ),
                                    h.a.createElement(
                                      L.a,
                                      { style: br.promotionTotalRow },
                                      h.a.createElement(
                                        A.b,
                                        { color: 'gray700', size: 'subtext2', weight: 'bold' },
                                        nr,
                                      ),
                                      h.a.createElement(
                                        A.b,
                                        { color: 'gray700', size: 'subtext2', testID: ie, weight: 'bold' },
                                        i,
                                      ),
                                    ),
                                    l &&
                                      h.a.createElement(
                                        L.a,
                                        { style: br.promotionTotalRow },
                                        h.a.createElement(A.b, { color: 'gray700', size: 'subtext2' }, ar),
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
                      { style: br.bottomElements },
                      h.a.createElement(
                        Kn.a,
                        {
                          disabled: !u || H || C.W.includes(f),
                          onPress: this._handlePromote,
                          size: 'xLarge',
                          testID: ne,
                          type: 'brandFilled',
                        },
                        rr,
                      ),
                      h.a.createElement(
                        z.a,
                        { style: br.terms },
                        (function (e, t, n) {
                          return n
                            ? h.a.createElement(
                                W.a.I18NFormatMessage,
                                { $i18n: 'cace9784' },
                                h.a.createElement(A.b, { link: Object(Ve.k)(e) }, W.a.acff74af),
                                h.a.createElement(A.b, { link: Object(Ve.g)(t) }, W.a.cb8d4ace),
                              )
                            : h.a.createElement(
                                W.a.I18NFormatMessage,
                                { $i18n: 'c99d7100' },
                                h.a.createElement(A.b, { link: Object(Ve.k)(e) }, W.a.d56b5ac3),
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
      g()(fr, 'contextType', fe.a)
      var hr,
        br = j.a.create(function (e) {
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
        yr = Ua(fr),
        vr = n('zCf4'),
        Er =
          (n('yH/f'),
          n('7xRU'),
          n('LW0h'),
          function (e, t) {
            var n = wr(e, t)
            return e.ads.typeahead.targetingLocation[n]
          }),
        _r = function (e, t) {
          var n,
            a = wr(e, t)
          return null === (n = e.ads.typeahead.targetingLocation[a]) || void 0 === n ? void 0 : n.fetchStatus
        },
        wr = function (e, t) {
          return e.quickPromote.targeting.locationQuery
        },
        Cr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Ir = function (e, t) {
          return e.quickPromote.account.campaigns
        },
        Pr = Object(_.a)()
          .propsFromState(function () {
            return {
              targetingLocationQuery: wr,
              targetingLocations: Er,
              targetedLocations: Cr,
              fetchStatus: _r,
              userCountry: E.z,
              campaigns: Ir,
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
        Tr = n('VwDm'),
        Sr = n('G1WX'),
        kr = n('e0ey'),
        xr = n('xKuM'),
        Or = n('5Vk4'),
        Lr = n('6OUF'),
        Ar = n('zrOZ'),
        jr = n('kevv'),
        Dr = W.a.cc642518,
        Br = W.a.i0e8c3c6,
        Mr = W.a.deaf5b15,
        Fr = W.a.f69ad048,
        Rr = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
        qr = Object.freeze(
          ((hr = {}), g()(hr, Ve.e.CurrentCountryMatch, 0), g()(hr, Ve.e.Match, 1), g()(hr, Ve.e.NoMatch, 2), hr),
        ),
        Nr = (function (e) {
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
                  Hr,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: a,
                  },
                  h.a.createElement(L.a, null, h.a.createElement(A.b, { style: zr.headingText, weight: 'heavy' }, Br)),
                  h.a.createElement(Sr.a, { fetchStatus: n, render: e._renderSearchList, retryMessage: Mr }),
                )
              }),
              g()(l()(e), '_handleClear', function () {
                ;(0, e.props.setTargetingLocationQuery)('')
              }),
              g()(l()(e), '_renderSearchList', function () {
                var t = e.props.targetedLocations,
                  n = Object(Ar.a)(
                    t.map(function (e) {
                      return e.targeting_value
                    }),
                  ),
                  a = e._getTargetingLocationOptions()
                return h.a.createElement(
                  L.a,
                  { style: zr.overflow },
                  a.map(function (t) {
                    var a = t.localized_name,
                      r = t.location_type,
                      o = t.targeting_value
                    return h.a.createElement(kr.a, {
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
                      return qr[a]
                    },
                    function (e) {
                      e.localized_name
                      var t,
                        n = e.location_type
                      return null !== (t = Rr[n]) && void 0 !== t
                        ? t
                        : (function (e) {
                            Object(be.a)(
                              'Quick Promote: Unknown location type: '
                                .concat(e, '. Expected one of {')
                                .concat(Object.keys(Rr).join(', '), '}'),
                            )
                          })(n) || Object.keys(Rr).length
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
                } else Object(Ve.p)(r)(Ve.n.targetingLocationError()), e.setState({ errorMessage: Fr })
                c('')
              }),
              g()(l()(e), '_renderSelected', function () {
                var t = e.props,
                  n = t.targetedLocations,
                  a = t.targetingLocationQuery,
                  r = e.state.errorMessage
                return h.a.createElement(
                  Hr,
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
                        { style: zr.gutter },
                        h.a.createElement(pe.a, { text: r, type: 'danger' }),
                      ),
                    h.a.createElement(A.b, { style: zr.headingText, weight: 'heavy' }, ze({ numLocations: n.length })),
                  ),
                  h.a.createElement(
                    L.a,
                    null,
                    n.map(function (t) {
                      var n = t.localized_name,
                        a = t.location_type,
                        r = t.targeting_value
                      return h.a.createElement(kr.a, {
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
      g()(Nr, 'contextType', fe.a)
      var Hr = function (e) {
          var t = e.children,
            n = e.onBack,
            a = e.onChange,
            r = e.onClear,
            o = e.targetingLocationQuery
          return h.a.createElement(
            L.a,
            { style: zr.qpContainer, testID: $ },
            h.a.createElement(xr.a, {
              leftControl: h.a.createElement(Or.a, { onClick: n }),
              middleControl: h.a.createElement(Lr.a, {
                Icon: Tr.a,
                autoFocus: !0,
                name: 'locationTargetingInput',
                onChange: a,
                onClear: r,
                placeholder: Dr,
                style: zr.input,
                testID: ue,
                value: o,
                withClearButton: !0,
              }),
            }),
            t,
          )
        },
        zr = j.a.create(function (e) {
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
        Ur = Pr(Nr),
        Vr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Gr = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        Wr = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        Qr = Object(_.a)()
          .propsFromState(function () {
            return { targetedLocations: Vr, selectedGender: Gr, selectedAgeBucket: Wr }
          })
          .propsFromActions(function () {
            return { setTargetedAgeBucket: C.Q, setTargetedGender: C.R }
          })
          .withAnalytics(Ve.o),
        Kr = n('JiIh'),
        Xr = n('fyvP'),
        Jr = n('J4ZH'),
        Yr = n('tn7R'),
        Zr = n('mN6z'),
        $r = W.a.hba1d105,
        eo = W.a.cba0133d,
        to = W.a.e1efbead,
        no = W.a.c6ff7c1f,
        ao = W.a.b555fb45,
        ro = W.a.a8d0108d,
        oo = [en.b.Any, en.b.Female, en.b.Male].map(function (e) {
          return { label: Fe(e), value: e, testID: Y(e) }
        }),
        co = W.a.j2c03e12,
        io = ['13', '18', '21', '25', '35', '50'],
        lo = [void 0, void 0, void 0, '24', '34', '49', '54'],
        so = Object(Jr.a)(Object(Yr.a)(en.e), function (e) {
          return e.maxAge || 'over'
        }),
        uo = lo.length
      function mo(e, t) {
        var n
        if (e && t) return null === (n = en.d[e]) || void 0 === n ? void 0 : n[t]
      }
      var po = (function (e) {
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
              var a = Fn()(t, 2),
                r = a[0],
                o = a[1],
                c = e.props,
                i = c.analytics,
                l = c.selectedAgeBucket,
                s = c.setTargetedAgeBucket,
                u = e._sliderValueFromSelectedAgeBucket(l)
              if (!Object(Zr.a)(u, [r, o]))
                if (n) {
                  var d = io[r]
                  if (!d) return
                  var m = mo(d, o === uo ? 'over' : lo[o])
                  if (m) Object(Ve.p)(i)(Ve.n.setTargetingAgeBucket(m)), s(m)
                  else {
                    var p = Object.keys(en.d[d])[0]
                    e._setAgeBucket({ minAge: d, maxAge: p })
                  }
                } else {
                  var g = o === uo ? 'over' : lo[o]
                  if (!g) return
                  var f = mo(io[r], g)
                  if (f) Object(Ve.p)(i)(Ve.n.setTargetingAgeBucket(f)), s(f)
                  else {
                    var h = so[g].slice(-1)[0].minAge
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
                i = en.d[a][n || 'over']
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
                var t = en.e[e],
                  n = t.maxAge,
                  a = t.minAge
                return [io.indexOf(a), n ? lo.indexOf(n) : uo]
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
                  u = en.e[n],
                  d = u.maxAge,
                  m = u.minAge,
                  p = this._sliderValueFromSelectedAgeBucket(n),
                  g = d || co
                return h.a.createElement(
                  L.a,
                  { style: go.qpContainer, testID: J },
                  h.a.createElement(N, { screenType: Ve.c.Targeting }),
                  h.a.createElement(U, { subtitle: eo, title: $r }),
                  h.a.createElement(Va.a, {
                    description: Object(he.a)(
                      r.map(function (e) {
                        return e.localized_name
                      }),
                    ),
                    label: h.a.createElement(A.b, { weight: 'bold' }, s),
                    link: Object(Ve.j)(i, l, c, Ve.c.TargetingLocation),
                    testID: le,
                  }),
                  h.a.createElement(
                    D,
                    { label: to },
                    h.a.createElement(
                      L.a,
                      { style: go.ageRangeSlider },
                      h.a.createElement(Kr.a, {
                        endThumbAccessibilityLabel: ao,
                        endThumbAccessibilityLabelValueText: '"'.concat(g, '"'),
                        endThumbLabel: g,
                        max: uo,
                        min: 0,
                        onChange: this._handleAgeBucketChange,
                        startThumbAccessibilityLabel: no,
                        startThumbAccessibilityLabelValueText: '"'.concat(m, '"'),
                        startThumbLabel: m,
                        value: p,
                      }),
                    ),
                  ),
                  h.a.createElement(
                    D,
                    { label: ro, withBottomBorder: !1 },
                    h.a.createElement(
                      L.a,
                      { style: go.genderSelection },
                      h.a.createElement(Xr.a, {
                        name: 'gender',
                        onChange: this._handleGenderChange,
                        options: oo,
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
      g()(po, 'contextType', fe.a)
      var go = j.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            genderSelection: { marginTop: e.spaces.space4 },
            ageRangeSlider: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        fo = Qr(po),
        ho = n('q9Zt'),
        bo = W.a.a065172e,
        yo = W.a.cfcdb4a1,
        vo = W.a.dcfb0332,
        Eo = W.a.c1df579e,
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
                return t ? tn.a.getOriginalTweet(t) : t
              }),
              g()(l()(e), '_render', function () {
                var t = e.props.history,
                  n = e._getRetweetOrTweet()
                return !n || (n && n.user.id_str !== e.context.loggedInUserId)
                  ? h.a.createElement(
                      vt.b,
                      { history: t, onBackClick: e._handleGoBack, title: vo },
                      h.a.createElement(ho.a, { onRetry: null, title: bo }),
                    )
                  : e._renderPage()
              }),
              g()(l()(e), '_renderHeader', ka.a),
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
                  { documentTitle: vo, history: a, renderHeader: e._renderHeader },
                  h.a.createElement(xr.a, {
                    leftControl: h.a.createElement(Or.a, { autofocus: !0, onClick: e._handleGoBack, testID: se }),
                    rightControl: n && h.a.createElement(Kn.a, { link: n, testID: K, type: 'brandText' }, Eo),
                  }),
                  h.a.createElement(Hn.a, { progress: t, style: wo.progressBar }),
                  h.a.createElement(L.a, { style: wo.noScrollView }, e._renderRoutes()),
                )
              }),
              g()(l()(e), '_renderNavigationPage', function () {
                var t = e.props.history
                return h.a.createElement(
                  vt.b,
                  { documentTitle: vo, history: t, renderHeader: e._renderHeader },
                  h.a.createElement(xr.a, {
                    leftControl: h.a.createElement(Or.a, { autofocus: !0, onClick: e._handleGoBack, testID: se }),
                  }),
                  h.a.createElement(L.a, { style: wo.noScrollView }, e._renderRoutes()),
                )
              }),
              g()(l()(e), '_renderPopupPage', function () {
                var t = e.props.history
                return h.a.createElement(
                  vt.b,
                  { documentTitle: vo, history: t, renderHeader: e._renderHeader },
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
                    return h.a.createElement(vr.b, { component: Nt })
                  case 'objective':
                    return h.a.createElement(vr.b, { component: Bn })
                  case 'targeting':
                    return h.a.createElement(vr.b, { component: fo })
                  case 'targeting_location':
                    return h.a.createElement(vr.b, { component: Ur })
                  case 'budget_select':
                    return h.a.createElement(vr.b, { component: et })
                  case 'review':
                    return h.a.createElement(vr.b, { component: yr })
                  case 'payment':
                    return h.a.createElement(vr.b, { component: Pa })
                  case 'payment_select':
                    return h.a.createElement(vr.b, { component: sa })
                  case 'done':
                    return h.a.createElement(vr.b, { component: ht })
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
                        Promise.all([s(p), i(), r(f), c(n), l({ statusId: p })])
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
                        { documentTitle: vo, history: n, renderHeader: this._renderHeader },
                        h.a.createElement(Sa, null),
                        h.a.createElement(bt.a, {
                          fetchStatus: a,
                          onRequestRetry: this._handleRequestRetry,
                          render: this._render,
                          retryMessage: yo,
                        }),
                      )
                    : h.a.createElement(bt.a, {
                        fetchStatus: a,
                        onRequestRetry: this._handleRequestRetry,
                        render: this._render,
                        retryMessage: yo,
                      })
                },
              },
            ]),
            n
          )
        })(h.a.PureComponent)
      g()(_o, 'contextType', fe.a)
      var wo = j.a.create(function (e) {
          return { progressBar: { backgroundColor: e.colors.gray50 }, noScrollView: { overflowX: 'hidden', flex: 1 } }
        }),
        Co = st(_o)
      t.default = Co
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
        E = n('6ZtA'),
        _ = n('es0u'),
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
              userLanguage: S.p,
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
            return Promise.all([n.e(0), n.e(3), n.e(6), n.e(187)]).then(n.bind(null, 'uo3S'))
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
        Ee = n('yoO3'),
        _e = n('caTy'),
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
            var n = t.landingUrl ? Object(_e.b)(t.landingUrl) : void 0
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
                  var h, _, w, I
                  ;(e = ze({ tweetText: Object(xe.a)(u.text), fullName: u.user.name })),
                    (t = 'twitter://status?id='.concat(u.id_str)),
                    (n = 'https://twitter.com'.concat(this._getCanonicalPath() || '')),
                    (a = He({ fullName: u.user.name })),
                    (r = u.possibly_sensitive),
                    (o = '“'.concat((null == u ? void 0 : u.full_text) || '', '”')),
                    (c =
                      (null == u || null === (h = u.entities) || void 0 === h || null === (_ = h.media) || void 0 === _
                        ? void 0
                        : _[0].media_url_https) || '')
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
                    Ee.a,
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
                    b.a.createElement(E.a, {
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
                      _.a,
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
