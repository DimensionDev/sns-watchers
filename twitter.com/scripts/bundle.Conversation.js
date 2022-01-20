;(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
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
        p = n.n(d),
        m = n('AuHH'),
        f = n.n(m),
        g = n('KEM+'),
        h = n.n(g),
        y = (n('2G9S'), n('ERkP')),
        b = n('es0u'),
        v = n('m3Bd'),
        E = n.n(v),
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
        _ = n('G6rE'),
        O = n('rxPX'),
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
      var C = function (e, t) {
          return t.match.params.statusId
        },
        T = function (e, t) {
          return t.match.params.screenName
        },
        k = function (e, t) {
          return 'PUSH' === t.history.action
        },
        j = Object(O.a)()
          .propsFromState(function () {
            return { screenName: T, statusId: C, isForwardNavigation: k, loggedInUser: _.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = E()(e, ['loggedInUser'])
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
                return Object(w.a)(e)
              },
            }
          })
          .withAnalytics({ page: 'tweet', section: 'moderated_replies' }),
        S = n('xZXe'),
        x = n('QIgh'),
        L = n('8UdT'),
        A = n('IcAo'),
        R = n('VrCx'),
        D = n('yy6l'),
        B = function (e) {
          return Object(D.a)({
            component: S.a,
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Q = V.a.d806aa19,
        X = V.a.d80c77dc,
        K = V.a.ef939f4b,
        J = V.a.f7f2db4f,
        Y = y.createElement(
          V.a.I18NFormatMessage,
          { $i18n: 'cf1aca58' },
          y.createElement(
            z.b,
            { link: 'https://help.twitter.com/using-twitter/mentions-and-replies#hidden-reply' },
            V.a.a7511618,
          ),
        ),
        Z = function () {
          return y.createElement(U.a, { header: J, message: Y })
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
                      Object(A.a)({}, x.b, h()({}, L.b.Tweet, { handlers: h()({}, R.a.Tweet, B(t)) }))),
                    module: this._getModule(),
                    renderEmptyState: Z,
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
      t.default = j($)
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
          return Ka
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
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('ERkP'))
      n('hBpG'), n('+KXO')
      function b(e) {
        throw new Error('Not reachable section reached!')
      }
      var v = n('97Jx'),
        E = n.n(v),
        w = (n('z84I'), n('i4UL'), n('vrRf'), n('M+/F'), n('RqPI')),
        _ = n('rxPX'),
        O = n('0KEI'),
        P = n('S3l+'),
        I = function (e) {
          return e.quickPromote.budget.dailyBudget
        },
        C = function (e) {
          return e.quickPromote.budget.durationDays
        },
        T = function (e) {
          return e.quickPromote.budget.errorMessage
        },
        k = function (e) {
          return (
            e.quickPromote.budget.availableBudgets ||
            (function (e) {
              throw new Error(e)
            })('No budgets found')
          )
        },
        j = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        S = function (e, t) {
          var n,
            r,
            a = Object(P.m)(e)
          return null === (n = e.ads.typeahead.forecastAudience[a]) ||
            void 0 === n ||
            null === (r = n.result) ||
            void 0 === r
            ? void 0
            : r.estimatedImpressions
        },
        x = Object(_.a)()
          .propsFromState(function () {
            return {
              dailyBudget: I,
              durationDays: C,
              availableBudgets: k,
              lang: w.o,
              currency: j,
              audience: S,
              errorMessage: T,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_BUDGET_SELECT_SCREEN',
              ),
              setDailyBudget: P.A,
              setBudgetDuration: P.w,
              fetchForecastedAudienceIfNeeded: P.g,
              setBudgetErrorMessage: P.x,
            }
          })
          .withAnalytics({ page: 'quick_promote' }),
        L = (n('1t7P'), n('jQ/y'), n('MWbm')),
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
            L.a,
            { style: [B.descriptionItem, i ? B.bottomBorder : void 0] },
            !!o && y.createElement(A.b, { weight: 'bold' }, o),
            !!n &&
              y.createElement(
                L.a,
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
            L.a,
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
                L.a,
                { style: U.primaryLabelContainer },
                y.createElement(A.b, { align: 'center', color: 'primary', size: 'title4' }, t),
              ),
            y.createElement(
              L.a,
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
        Y = function (e) {
          return 'objectiveScreenObjective'.concat(e)
        },
        Z = 'targetingLocationScreen',
        $ = 'budgetSelectScreen',
        ee = 'reviewScreen',
        te = 'reviewButton',
        ne = 'reviewObjectiveDescription',
        re = 'reviewTargetingDescription',
        ae = 'reviewBudgetAndDurationDescription',
        oe = 'reviewPaymentPivot',
        ce = 'reviewPromotionTotalDescription',
        ie = 'targetingLocationPivot',
        le = 'backButton',
        ue = 'targetingLocationSearch',
        se = 'targetingLocationItem',
        de = n('4zmP'),
        pe = n('9RkS'),
        me = n('v6aA'),
        fe = n('Xrkv'),
        ge = n('SrIh'),
        he = V.a.c4d0434a,
        ye = V.a.dc4a9413,
        be = V.a.bad70c09,
        ve = V.a.c133a39b,
        Ee = V.a.ee5da8f4,
        we = V.a.g4bf9cb7,
        _e = V.a.gc3ce5d9,
        Oe = V.a.c1778029,
        Pe = V.a.cb51c854,
        Ie = V.a.bb7b39e1,
        Ce = V.a.eb9466d0,
        Te = V.a.c21037d0,
        ke = V.a.b07cc9f1,
        je = V.a.ce309bed,
        Se = V.a.c6c16a51,
        xe = V.a.cc49d03f,
        Le = V.a.dbe9353d,
        Ae = V.a.c64974fb,
        Re = V.a.i638f89c
      function De(e) {
        switch (e) {
          case 'AnyGender':
            return Pe
          case 'Male':
            return Ie
          case 'Female':
            return Ce
          default:
            return Object(ge.a)('Unknown gender: '.concat(e)), e
        }
      }
      function Be(e) {
        switch (e) {
          case 'COUNTRIES':
            return Te
          case 'REGIONS':
            return ke
          case 'METROS':
            return je
          case 'CITIES':
            return Se
          case 'POSTAL_CODES':
            return xe
          default:
            return Object(ge.a)('Unknown targeting locationType: '.concat(e)), e
        }
      }
      function Fe(e) {
        var t = e.amount,
          n = e.currency,
          r = e.lang
        return t.toLocaleString(Object(q.a)(r), {
          currency: n,
          style: 'currency',
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })
      }
      function Ne(e) {
        var t = e.currency,
          n = e.durationDays,
          r = e.lang,
          a = e.totalBudgetNum.toLocaleString(Object(q.a)(r), {
            currency: t,
            style: 'currency',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        return ye({ totalBudget: a, durationLabel: He({ durationDays: n }) })
      }
      function Me(e) {
        var t = e.currency,
          n = e.dailyBudgetNum,
          r = e.durationDays,
          a = e.lang,
          o = n.toLocaleString(Object(q.a)(a), {
            currency: t,
            style: 'currency',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })
        return he({ dailyBudget: o, durationLabel: He({ durationDays: r }) })
      }
      function qe(e) {
        var t = e.numLocations,
          n = V.a.ia24dc8c(t)
        return be({ numLocations: n })
      }
      function He(e) {
        var t = e.durationDays,
          n = V.a.ia24dc8c(t)
        return we({ durationDays: n })
      }
      var ze = n('yE5w')
      function Ue(e) {
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
      var Ge = V.a.a3a09d48,
        Ve = V.a.e7eb3683,
        We = V.a.d9f6e3cd,
        Qe = V.a.d9d6e10e,
        Xe = V.a.b3954ec9,
        Ke = V.a.e1b48db4,
        Je = Array(30)
          .fill(null)
          .map(function (e, t) {
            return t + 1
          }),
        Ye = (function (e) {
          s()(n, e)
          var t = Ue(n)
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
                  c = Je[t]
                a !== c &&
                  (Object(ze.p)(r)(ze.n.setBudgetDuration(''.concat(c))), o(c), e._fetchForecastedAudienceIfNeeded())
              }),
              h()(l()(e), '_handleBudgetSlider', function (t) {
                var n = e.props,
                  r = n.analytics,
                  a = n.availableBudgets,
                  o = n.dailyBudget,
                  c = n.setDailyBudget,
                  i = a[t]
                o !== i &&
                  (Object(ze.p)(r)(ze.n.setDailyBudget(''.concat(i))), c(i), e._fetchForecastedAudienceIfNeeded())
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
                    m = u.toLocaleString(Object(q.a)(p), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    f = i[0].toLocaleString(Object(q.a)(p), {
                      currency: l,
                      style: 'currency',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }),
                    g = i
                      .slice(-1)[0]
                      .toLocaleString(Object(q.a)(p), {
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
                        _e({ audienceLow: r, audienceHigh: a }))
                      : ' ',
                    b = He({ durationDays: s }),
                    v = He({ durationDays: Je[0] }),
                    w = He({ durationDays: Je.slice(-1)[0] }),
                    _ = this._getSliderProps(i, u),
                    O = this._getSliderProps(Je, s),
                    P = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled')
                      ? Me({ dailyBudgetNum: u, durationDays: s, lang: p, currency: l })
                      : Ne({ totalBudgetNum: u * s, durationDays: s, lang: p, currency: l })
                  return y.createElement(
                    L.a,
                    { style: Ze.qpContainer, testID: $ },
                    y.createElement(M, { screenType: ze.c.BudgetSelect }),
                    d && y.createElement(L.a, { style: Ze.gutter }, y.createElement(de.a, { text: d, type: 'danger' })),
                    y.createElement(z, { primaryLabel: P, subtitle: h, title: Ge }),
                    y.createElement(
                      D,
                      { label: Ve },
                      y.createElement(
                        L.a,
                        { style: Ze.childSpacing },
                        y.createElement(
                          pe.a,
                          E()({ accessibilityLabel: We, accessibilityLabelValueText: '"'.concat(m, '"') }, _, {
                            maxIcon: y.createElement(A.b, { style: Ze.iconText }, g),
                            minIcon: y.createElement(A.b, { style: Ze.iconText }, f),
                            onChange: this._handleBudgetSlider,
                            thumbLabel: m,
                          }),
                        ),
                      ),
                    ),
                    y.createElement(
                      D,
                      { label: Qe },
                      y.createElement(
                        L.a,
                        { style: Ze.childSpacing },
                        y.createElement(
                          pe.a,
                          E()({ accessibilityLabel: Xe, accessibilityLabelValueText: '"'.concat(b, '"') }, O, {
                            maxIcon: y.createElement(A.b, { style: Ze.iconText }, w),
                            minIcon: y.createElement(A.b, { style: Ze.iconText }, v),
                            onChange: this._handleDurationSlider,
                            thumbLabel: b,
                          }),
                        ),
                      ),
                    ),
                    y.createElement(
                      L.a,
                      { style: Ze.disclaimer },
                      y.createElement(H.a, { align: 'center', color: 'gray700', size: 'subtext2' }, Ke),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Ye, 'contextType', me.a)
      var Ze = R.a.create(function (e) {
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
        $e = x(Ye),
        et = n('XOJV'),
        tt = n('kGix'),
        nt = function (e, t) {
          return t.match.params.statusId
        },
        rt = function (e, t) {
          return et.a.selectHydrated(e, nt(0, t))
        },
        at = function (e, t) {
          return Object(tt.d)(
            et.a.selectFetchStatus(e, nt(0, t)),
            e.quickPromote.budget.availableBudgetsFetchStatus,
            e.quickPromote.targeting.initialTargetedLocationsFetchStatus,
            e.quickPromote.account.accountDataFetchStatus,
            e.quickPromote.firstLoad ? tt.a.LOADED : tt.a.LOADING,
          )
        },
        ot = function (e, t) {
          return e.quickPromote.promoteStatus
        },
        ct = function (e, t) {
          return e.quickPromote.promoteErrorCode
        },
        it = Object(_.a)()
          .propsFromState(function () {
            return { statusId: nt, fetchStatus: at, tweet: rt, promoteFetchStatus: ot, promoteErrorCode: ct }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_SCREEN',
              ),
              fetchTweetIfNeeded: et.a.fetchOneIfNeeded,
              fetchCurrentTargetingLocationIfNeeded: P.f,
              fetchAvailableBudgetsIfNeeded: P.d,
              fetchAdsAccountDataIfNeeded: P.c,
              fetchQuickPromoteEligibilityIfNeeded: P.j,
              fetchCouponsIfNeeded: P.e,
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
                  return Object(P.k)(i, l, o, c, n, u, t)
                })(e)
              },
              setPromoteFetchStatus: P.J,
            }
          })
          .withAnalytics(ze.o),
        lt = Object(_.a)().withAnalytics(ze.o),
        ut = n('feu+')
      function st(e) {
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
      var dt = V.a.e1bca506,
        pt = V.a.e4a4c608,
        mt = V.a.a219e217,
        ft = (function (e) {
          s()(n, e)
          var t = st(n)
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
                Object(ze.l)(n)(o, c, a)
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
                  Object(ze.p)(e)(ze.n.donePageLoad())
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: ze.c.Done }),
                    y.createElement(ut.a, {
                      actionLabel: mt,
                      headline: dt,
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
        })(y.PureComponent)
      h()(ft, 'contextType', me.a)
      var gt = lt(ft),
        ht = n('v//M'),
        yt = n('W5XZ'),
        bt = n('jHSc'),
        vt =
          (n('Cm4o'),
          function (e) {
            return !!e.quickPromote.account.selectedFundingInstrument
          }),
        Et = function (e) {
          return e.quickPromote.coupons
        },
        wt = Object(_.a)()
          .propsFromState(function () {
            return { hasFundingInstrument: vt, coupons: Et }
          })
          .withAnalytics(ze.o),
        _t = n.p + 'desktop_header_image.bfa9e365.png',
        Ot = n('TIdA'),
        Pt = n('A91F')
      function It(e) {
        var t = e.style
        return y.createElement(
          L.a,
          { style: t },
          y.createElement(Ot.a, { accessibilityLabel: '', aspectMode: Pt.a.exact(750 / 306), image: _t }),
        )
      }
      var Ct = n.p + 'mobile_header_image.431e8465.png'
      function Tt(e) {
        var t = e.style
        return y.createElement(
          L.a,
          { style: t },
          y.createElement(Ot.a, { accessibilityLabel: '', aspectMode: Pt.a.COVER, image: Ct }),
        )
      }
      var kt = n('cHvH')
      function jt(e) {
        var t = e.style
        return y.createElement(kt.a, null, function (e) {
          var n = e.windowHeight
          return e.windowWidth > R.a.theme.breakpoints.medium
            ? y.createElement(It, { style: t })
            : y.createElement(Tt, { style: [t, { height: 0.5 * n }] })
        })
      }
      function St(e) {
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
      var xt = V.a.dcfb0332,
        Lt = V.a.db841200,
        At = V.a.hc67be9d,
        Rt = (function (e) {
          s()(n, e)
          var t = St(n)
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
                n.push(Object(ze.j)(o, c, a, i ? ze.c.Objective : ze.c.Targeting))
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
                  Object(ze.p)(r)(ze.n.introPageLoad({ hasFundingInstrument: a, entryPoint: u, otherEntryPoint: s }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.match.params.quickPromotePlatform === ze.a.Rweb
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: ze.c.Intro }),
                    y.createElement(ut.a, {
                      actionLabel: At,
                      graphic: jt,
                      graphicDisplayMode: 'illustrationFullWidth',
                      headline: xt,
                      isFullHeightOnMobile: !0,
                      onAction: this._handleGoToNextPage,
                      onClose: this._handleClose,
                      primaryButtonTestID: W,
                      subtext: Lt,
                      withCloseButton: e,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Rt, 'contextType', me.a)
      var Dt = wt(Rt),
        Bt = (n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        Ft = n.n(Bt),
        Nt = function (e, t) {
          return e.quickPromote.objective
        },
        Mt = function (e, t) {
          return et.a.selectHydrated(
            e,
            (function (e, t) {
              return t.match.params.statusId
            })(0, t),
          )
        },
        qt = Object(_.a)()
          .propsFromState(function () {
            return { selectedObjective: Nt, tweet: Mt }
          })
          .propsFromActions(function () {
            return { setObjective: P.H }
          })
          .withAnalytics(ze.o),
        Ht = n('h0NW'),
        zt = V.a.d7d55f3b,
        Ut = V.a.b25fd3d6,
        Gt = V.a.bf214f47,
        Vt = function (e) {
          var t = e.infoItems,
            n = e.onClose,
            r = e.onLoad
          return (
            y.useEffect(function () {
              return r()
            }, []),
            y.createElement(ut.a, {
              actionLabel: Gt,
              children: y.createElement(
                L.a,
                { style: Wt.infoItemGroup },
                y.createElement(Ht.a, { containerStyle: Wt.infoItem, items: t }),
              ),
              contentStyle: Wt.heading,
              graphicDisplayMode: 'none',
              headline: zt,
              onAction: n,
              onClose: n,
              subtext: Ut,
              withCloseButton: !1,
            })
          )
        },
        Wt = R.a.create(function (e) {
          return {
            heading: { marginBottom: e.spaces.space40 },
            infoItemGroup: { marginBottom: e.spaces.space20 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0, marginBottom: e.spaces.space24 },
          }
        }),
        Qt = n('W2FU'),
        Xt = n('E0cF'),
        Kt = n('gSL+'),
        Jt = n('xHsv'),
        Yt = n('Oib4'),
        Zt = n('Dcm7'),
        $t = n('iEUn'),
        en = n('pwey'),
        tn = n('Lsrn'),
        nn = n('k/Ka')
      function rn(e, t) {
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
      function an(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? rn(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : rn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var on = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(nn.a)(
          'svg',
          an(
            an({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [tn.a.root, e.style], viewBox: '0 0 24 24' },
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
      on.metadata = { width: 24, height: 24 }
      var cn = on
      function ln(e, t) {
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
      function un(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ln(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ln(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var sn = V.a.fcc839b5,
        dn = V.a.d80964aa,
        pn = V.a.d4f57cce,
        mn = V.a.g06d6bf8,
        fn = V.a.c1a1817b,
        gn = V.a.efc9b3fe,
        hn = Yt.a,
        yn = V.a.h277a2e8,
        bn = V.a.gd429fea,
        vn = Zt.a,
        En = V.a.icb22cdd,
        wn = V.a.i859a9d3,
        _n = V.a.e974b2d4,
        On = V.a.b9c9b214,
        Pn = V.a.i0e569bf,
        In = R.a.create(function (e) {
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
        Cn = {
          label: dn,
          value: Qt.c.Engagements,
          decoration: y.createElement($t.a, { style: [In.icon, In.engagementIcon] }),
          testID: Y(Qt.c.Engagements),
        },
        Tn = {
          label: pn,
          value: Qt.c.Followers,
          decoration: y.createElement(en.a, { style: [In.icon, In.followersIcon] }),
          testID: Y(Qt.c.Followers),
        },
        kn = {
          label: mn,
          value: Qt.c.WebsiteClicks,
          decoration: y.createElement(cn, { style: [In.icon, In.websiteClicksIcon] }),
          testID: Y(Qt.c.WebsiteClicks),
        },
        jn = [
          { label: dn, description: _n, decoration: y.createElement($t.a, { style: [In.icon, In.engagementIcon] }) },
          { label: pn, description: On, decoration: y.createElement(en.a, { style: [In.icon, In.followersIcon] }) },
          { label: mn, description: Pn, decoration: y.createElement(cn, { style: [In.icon, In.websiteClicksIcon] }) },
        ]
      function Sn() {
        return y.createElement(de.a, { Icon: hn, headline: fn, text: gn, type: 'warning' })
      }
      function xn() {
        return y.createElement(de.a, { Icon: vn, headline: yn, text: bn, type: 'danger' })
      }
      var Ln = qt(function (e) {
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
            m = e.tweet,
            f = m ? Xt.a.getOriginalTweet(m) : m,
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
            b = !!(
              (null != f && f.in_reply_to_status_id_str) ||
              (null != f && f.in_reply_to_name) ||
              (null != f && f.in_reply_to_screen_name) ||
              (null != f && f.in_reply_to_user_id_str) ||
              (null != f && f.in_reply_to_user)
            )
          y.useEffect(function () {
            Object(ze.p)(l)(ze.n.goalSelectionPageLoad())
          }, [])
          var v = y.useMemo(
              function () {
                return (function (e) {
                  var t = e.selectedObjective,
                    n = e.tweetContainsLinks,
                    r = e.tweetHasMedia,
                    a = e.tweetIsReply
                  return [Cn]
                    .concat(
                      Ft()(a ? [] : [un(un({}, Tn), {}, { description: r && t === Qt.c.Followers ? Sn() : void 0 })]),
                      [un(un({}, kn), {}, { disabled: !n, description: !n && xn() })],
                    )
                    .map(function (e) {
                      return un(
                        un({}, e),
                        {},
                        { label: y.createElement(A.b, { size: 'headline2', weight: 'bold' }, e.label) },
                      )
                    })
                })({ tweetHasMedia: g, tweetContainsLinks: h, selectedObjective: d, tweetIsReply: b })
              },
              [g, h, d, b],
            ),
            E = y.useCallback(
              function (e, t) {
                p(t), Object(ze.p)(l)(ze.n.setPromoteGoal(t))
              },
              [l, p],
            )
          return y.createElement(
            L.a,
            { style: In.qpContainer, testID: X },
            y.createElement(M, { screenType: ze.c.Objective }),
            y.createElement(
              L.a,
              { style: In.titleContainer },
              y.createElement(A.b, { align: 'center', size: 'headline1', weight: 'bold' }, sn),
            ),
            y.createElement(
              L.a,
              null,
              y.createElement(Kt.a, { name: 'objective-picker', onChange: E, options: v, value: d }),
            ),
            y.createElement(
              L.a,
              { style: In.goalSelectionCallout },
              y.createElement(Jt.a, {
                description: En,
                learnMoreLabel: wn,
                learnMoreLink: {
                  external: !1,
                  method: 'replace',
                  pathname: s.pathname,
                  state: { showEducationInterstitial: !0 },
                },
              }),
            ),
            null !== (i = s.state) && void 0 !== i && i.showEducationInterstitial
              ? y.createElement(Vt, {
                  infoItems: jn,
                  onClose: function () {
                    return u.replace(s.pathname, { showEducationInterstitial: !1 })
                  },
                  onLoad: function () {
                    return Object(ze.p)(l)(ze.n.educationInterstitialLoad())
                  },
                })
              : null,
          )
        }),
        An = (n('ho0z'), n('zh9S')),
        Rn = n('y0iL'),
        Dn = function (e, t) {
          return t.match.params.statusId
        },
        Bn = function (e, t) {
          return et.a.selectHydrated(e, Dn(0, t))
        },
        Fn = function (e, t) {
          return et.a.selectFetchStatus(e, Dn(0, t))
        },
        Nn = function (e, t) {
          return e.quickPromote.account.adsAccount
        },
        Mn = function (e, t) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        qn = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: Fn, tweet: Bn, adsAccount: Nn, fundingInstrument: Mn }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_PAYMENT_SCREEN',
              ),
              fetchTweetIfNeeded: et.a.fetchOneIfNeeded,
              scribeAction: An.c,
              savePlatformRedirectBackState: function () {
                return Object(Rn.j)(e.match.params.quickPromotePlatform)
              },
              fetchAdsAccountDataIfNeeded: Rn.c,
            }
          })
          .withAnalytics(ze.o),
        Hn = n('tI3i'),
        zn = n.n(Hn),
        Un = n('Rp9C'),
        Gn = n('bPFD')
      function Vn(e) {
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
      var Wn = (function (e) {
        s()(n, e)
        var t = Vn(n)
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
                  var o = (a && Xt.a.getOriginalTweet(a)) || void 0,
                    c = o ? [Un.a.getTweetItem(o)] : [],
                    i = t.scribeData || {},
                    l = 'string' == typeof i.component ? i.component : 'quick_promote',
                    u = 'string' == typeof i.uiEvent ? i.uiEvent : ''
                  r.scribe({ component: l, action: u, data: { items: c } })
                } else if ('navigation' === t.type) {
                  var s = e.props,
                    d = s.createLocalApiErrorHandler,
                    p = s.fetchAdsAccountDataIfNeeded,
                    m = s.history,
                    f = s.match.params,
                    g = f.quickPromotePlatform,
                    h = f.screenName,
                    y = f.statusId
                  zn()(!!e.context.loggedInUserId, 'loggedInUserId must be defined'),
                    p(e.context.loggedInUserId, !0).catch(d()),
                    m.push('/'.concat(h, '/status/').concat(y, '/').concat(g, '/').concat(ze.c.Review))
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
                var u = Object(ze.i)(i, t, l, r)
                Object(ze.p)(n)(ze.n.paymentPageLoad(u.url)), u.isSameHost || (window.location.href = u.url)
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
                  c = Object(ze.i)(a, t, o, n)
                return c.isSameHost
                  ? y.createElement(
                      y.Fragment,
                      null,
                      y.createElement(M, { screenType: ze.c.Payment }),
                      y.createElement(Gn.a, {
                        dangerouslyDisableSandbox: !0,
                        onMessage: this._handleIFrameMessage,
                        reportError: ge.a,
                        src: c.url,
                        style: Qn.iframe,
                      }),
                    )
                  : null
              },
            },
          ]),
          n
        )
      })(y.PureComponent)
      h()(Wn, 'contextType', me.a)
      var Qn = R.a.create(function (e) {
          return { iframe: { flexGrow: 1, paddingTop: 0 } }
        }),
        Xn = qn(Wn)
      function Kn(e) {
        new Image().src = e
      }
      function Jn() {
        return y.createElement(kt.a, null, function (e) {
          e.windowHeight
          return Kn(e.windowWidth > R.a.theme.breakpoints.medium ? _t : Ct), null
        })
      }
      var Yn = function (e) {
          return e.quickPromote.objective
        },
        Zn = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        $n = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        er = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        tr = function (e, t) {
          return e.quickPromote.budget.dailyBudget
        },
        nr = function (e, t) {
          return e.quickPromote.budget.durationDays
        },
        rr = function (e) {
          return e.quickPromote.budget.currency || 'USD'
        },
        ar = function (e) {
          return e.quickPromote.account.selectedFundingInstrument
        },
        or = function (e) {
          return e.quickPromote.account.vatInfo
        },
        cr = function (e) {
          return e.quickPromote.account.adsAccount
        },
        ir = function (e) {
          return e.quickPromote.promoteStatus
        },
        lr = function (e) {
          return e.quickPromote.promoteErrorCode
        },
        ur = function (e) {
          return e.quickPromote.coupons
        },
        sr = function (e) {
          return e.quickPromote.enrollCouponErrorCode
        },
        dr = Object(_.a)()
          .propsFromState(function () {
            return {
              objective: Yn,
              targetedLocations: Zn,
              ageBucket: $n,
              gender: er,
              dailyBudget: tr,
              durationDays: nr,
              lang: w.o,
              country: P.n,
              currency: rr,
              fundingInstrument: ar,
              vatInfo: or,
              adsAccount: cr,
              promoteStatus: ir,
              promoteErrorCode: lr,
              coupons: ur,
              enrollCouponErrorCode: sr,
            }
          })
          .propsFromActions(function (e) {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_REVIEW_SCREEN',
              ),
              clearPersistedRedirectBackState: function () {
                return Object(P.l)()
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
              enrollCoupon: P.b,
            }
            var t, n, r
          })
          .withAnalytics(ze.o),
        pr = n('csss'),
        mr = n('/yvb'),
        fr = n('shC7')
      function gr(e) {
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
      var hr = V.a.c3c57e3e,
        yr = V.a.h06724b4,
        br = V.a.a96f811e,
        vr = V.a.b069d89c,
        Er = V.a.a3a09d48,
        wr = V.a.fbd44e96,
        _r = V.a.e36bce63,
        Or = V.a.c602f5b8,
        Pr = V.a.ia83756b,
        Ir = V.a.cc217a04,
        Cr = V.a.c602f5b8,
        Tr = V.a.g4f2b588,
        kr = V.a.i41612d9,
        jr = V.a.cdae1af0,
        Sr = V.a.ed8bb5af,
        xr = V.a.fc640c20,
        Lr = V.a.be2dc078,
        Ar = V.a.iaefd4de,
        Rr = V.a.e5e42640,
        Dr = V.a.da2805d1,
        Br = V.a.ef4602eb,
        Fr = V.a.a4db098b,
        Nr = V.a.ef7e3916,
        Mr = (function (e) {
          s()(n, e)
          var t = gr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_getPaymentDescription', function (t, n) {
                var r = e.props.adsAccount
                return r && r.timezone && r.country_code ? (t ? jr : n ? xr : Sr) : n ? Ar : Lr
              }),
              h()(l()(e), '_handlePromote', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createPromotion
                Object(ze.p)(n)(ze.n.promotionClick()), r(n)
              }),
              h()(l()(e), '_handleEnrollCoupon', function () {
                var t = e.props,
                  n = t.coupons,
                  r = t.enrollCoupon,
                  a = t.fundingInstrument,
                  o = e._getCouponErrorMessage()
                a && null != n && n.eligible_coupon && !o && r()
              }),
              h()(l()(e), '_getPromoteErrorMessage', function () {
                var t = e.props,
                  n = t.promoteErrorCode,
                  r = t.promoteStatus
                if (!n) return r === tt.a.LOADED ? Dr : null
                switch (n) {
                  case 'MissingFundingInstrument':
                  case 'InvalidPaymentMethod':
                    return Nr
                  case 'CampaignCreationFailed':
                  case 'PromotionIneligible':
                    return Fr
                  default:
                    return Br
                }
              }),
              h()(l()(e), '_getCouponErrorMessage', function () {
                var t = e.props.enrollCouponErrorCode
                if (!t) return null
                switch (t) {
                  case 'AccountIneligible':
                  case 'MissingAdsAccount':
                  default:
                    return Rr
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
                  Object(ze.p)(t)(ze.n.reviewPageLoad({ hasFundingInstrument: a })), this._handleEnrollCoupon()
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
                    m = r.match,
                    f = r.objective,
                    g = r.promoteStatus,
                    h = r.targetedLocations,
                    v = r.vatInfo,
                    E =
                      ((e = Qt.e[a]),
                      (t = e.maxAge),
                      (n = e.minAge),
                      t ? ve({ minAge: n, maxAge: t }) : Ee({ minAge: n })),
                    w = (function (e) {
                      switch (e) {
                        case 'Engagements':
                          return Le
                        case 'Followers':
                          return Ae
                        case 'WebsiteClicks':
                          return Re
                        default:
                          throw b()
                      }
                    })(f),
                    _ = (function (e) {
                      var t = e.formattedAge,
                        n = e.gender,
                        r = e.locations,
                        a = r.length
                      return Oe({
                        newlinePlaceholder: '\n',
                        locations: Object(fe.a)(r),
                        locationsHeading: qe({ numLocations: a }),
                        formattedAge: t,
                        gender: n,
                      })
                    })({
                      locations: h.map(function (e) {
                        return e.localized_name
                      }),
                      formattedAge: E,
                      gender: De(d),
                    }),
                    O = this.context.featureSwitches.isTrue('responsive_web_qp_welcome_coupon_enabled'),
                    I = O
                      ? Me({ dailyBudgetNum: l, durationDays: u, lang: p, currency: i })
                      : Ne({ totalBudgetNum: l * u, durationDays: u, lang: p, currency: i }),
                    C =
                      s && null != c && c.existing_balance.length
                        ? c.existing_balance.find(function (e) {
                            return e.currency_code === s.currency
                          })
                        : null,
                    T = C ? '' : Fe({ amount: l * u, lang: p, currency: i }),
                    k = m.params,
                    j = k.quickPromotePlatform,
                    S = k.screenName,
                    x = k.statusId,
                    R = this._getPromoteErrorMessage(),
                    B = this._getCouponErrorMessage(),
                    F = this.context.featureSwitches.isTrue('responsive_web_qp_objective_picker_enabled'),
                    N = v && null === v.tax_id && null === v.tax_exemption_id && 'NOT_SET' === v.tax_category,
                    q = !!s,
                    U = !(null == c || !c.eligible_coupon)
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: ze.c.Review }),
                    y.createElement(
                      L.a,
                      { style: Hr.qpContainer, testID: ee },
                      R &&
                        y.createElement(L.a, { style: Hr.gutter }, y.createElement(de.a, { text: R, type: 'danger' })),
                      B &&
                        y.createElement(L.a, { style: Hr.gutter }, y.createElement(de.a, { text: B, type: 'warning' })),
                      y.createElement(z, { subtitle: yr, title: hr }),
                      F &&
                        y.createElement(D, { description: w, descriptionTestID: ne, label: br, withBottomBorder: !1 }),
                      y.createElement(D, { description: _, descriptionTestID: re, label: vr, withBottomBorder: !1 }),
                      y.createElement(D, {
                        description: I,
                        descriptionDir: fr.a.getConstants().isRTL ? 'rtl' : 'ltr',
                        descriptionTestID: ae,
                        label: O ? wr : Er,
                        withBottomBorder: !1,
                      }),
                      y.createElement(pr.a, {
                        description:
                          s && !N
                            ? s.description
                            : y.createElement(
                                A.b,
                                { color: 'primary', size: 'subtext2' },
                                this._getPaymentDescription(q, U),
                              ),
                        label: y.createElement(A.b, { weight: 'bold' }, _r),
                        link: !s || N ? Object(ze.j)(S, x, j, ze.c.Payment) : void 0,
                        testID: oe,
                      }),
                      O
                        ? y.createElement(
                            D,
                            { description: T, descriptionTestID: ce, label: Or, withBottomBorder: !1 },
                            C
                              ? (function (e) {
                                  var t = e.balance,
                                    n = e.currency,
                                    r = e.lang,
                                    a = e.subtotal,
                                    o = Fe({ amount: a, currency: n, lang: r }),
                                    c = Fe({ amount: Math.min(a, t), currency: n, lang: r }),
                                    i = Fe({ amount: Math.max(0, a - t), currency: n, lang: r }),
                                    l = t > a ? Fe({ amount: t - a, currency: n, lang: r }) : null
                                  return y.createElement(
                                    y.Fragment,
                                    null,
                                    y.createElement(
                                      L.a,
                                      { style: Hr.promotionTotalRow },
                                      y.createElement(A.b, { color: 'gray700', size: 'subtext2' }, Pr),
                                      y.createElement(A.b, { color: 'gray700', size: 'subtext2' }, o),
                                    ),
                                    y.createElement(
                                      L.a,
                                      { style: Hr.promotionTotalRow },
                                      y.createElement(A.b, { color: 'blue500', size: 'subtext2' }, Ir),
                                      y.createElement(A.b, { color: 'blue500', size: 'subtext2' }, '-', c),
                                    ),
                                    y.createElement(
                                      L.a,
                                      { style: Hr.promotionTotalRow },
                                      y.createElement(A.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, Cr),
                                      y.createElement(
                                        A.b,
                                        { color: 'gray700', size: 'subtext2', testID: ce, weight: 'bold' },
                                        i,
                                      ),
                                    ),
                                    l &&
                                      y.createElement(
                                        L.a,
                                        { style: Hr.promotionTotalRow },
                                        y.createElement(A.b, { color: 'gray700', size: 'subtext2' }, Tr),
                                        y.createElement(A.b, { color: 'gray700', size: 'subtext2' }, l),
                                      ),
                                  )
                                })({ subtotal: l * u, balance: C.total_amount || 0, currency: i, lang: p })
                              : null,
                          )
                        : null,
                    ),
                    y.createElement(
                      L.a,
                      { style: Hr.bottomElements },
                      y.createElement(
                        mr.a,
                        {
                          disabled: !s || N || P.R.includes(g),
                          onPress: this._handlePromote,
                          size: 'xLarge',
                          testID: te,
                          type: 'brandFilled',
                        },
                        kr,
                      ),
                      y.createElement(
                        H.a,
                        { style: Hr.terms },
                        (function (e, t) {
                          return t
                            ? y.createElement(
                                V.a.I18NFormatMessage,
                                { $i18n: 'cace9784' },
                                y.createElement(A.b, { link: Object(ze.k)(e) }, V.a.acff74af),
                                y.createElement(A.b, { link: Object(ze.g)(e) }, V.a.cb8d4ace),
                              )
                            : y.createElement(
                                V.a.I18NFormatMessage,
                                { $i18n: 'c99d7100' },
                                y.createElement(A.b, { link: Object(ze.k)(e) }, V.a.d56b5ac3),
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
        })(y.PureComponent)
      h()(Mr, 'contextType', me.a)
      var qr,
        Hr = R.a.create(function (e) {
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
        zr = dr(Mr),
        Ur = n('Ty5D'),
        Gr =
          (n('yH/f'),
          n('7xRU'),
          function (e, t) {
            var n = Wr(e, t)
            return e.ads.typeahead.targetingLocation[n]
          }),
        Vr = function (e, t) {
          var n,
            r = Wr(e, t)
          return null === (n = e.ads.typeahead.targetingLocation[r]) || void 0 === n ? void 0 : n.fetchStatus
        },
        Wr = function (e, t) {
          return e.quickPromote.targeting.locationQuery
        },
        Qr = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        Xr = Object(_.a)()
          .propsFromState(function () {
            return {
              targetingLocationQuery: Wr,
              targetingLocations: Gr,
              targetedLocations: Qr,
              fetchStatus: Vr,
              userCountry: w.w,
            }
          })
          .propsFromActions(function () {
            return {
              setTargetedLocations: P.N,
              setAndFetchTargetingLocationQuery: P.s,
              setTargetingLocationQuery: P.P,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'QUICK_PROMOTE_TARGETING_LOCATION_SCREEN',
              ),
            }
          })
          .withAnalytics(ze.o),
        Kr = n('VwDm'),
        Jr = n('G1WX'),
        Yr = n('cCdp'),
        Zr = n('xKuM'),
        $r = n('5Vk4'),
        ea = n('6OUF'),
        ta = n('zrOZ'),
        na = n('kevv')
      function ra(e) {
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
      var aa = V.a.cc642518,
        oa = V.a.i0e8c3c6,
        ca = V.a.deaf5b15,
        ia = V.a.f69ad048,
        la = Object.freeze({ COUNTRIES: 0, REGIONS: 1, METROS: 2, CITIES: 3, POSTAL_CODES: 4 }),
        ua = Object.freeze(
          ((qr = {}), h()(qr, ze.e.CurrentCountryMatch, 0), h()(qr, ze.e.Match, 1), h()(qr, ze.e.NoMatch, 2), qr),
        ),
        sa = (function (e) {
          s()(n, e)
          var t = ra(n)
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
                  da,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: r,
                  },
                  y.createElement(L.a, null, y.createElement(A.b, { style: pa.headingText, weight: 'heavy' }, oa)),
                  y.createElement(Jr.a, { fetchStatus: n, render: e._renderSearchList, retryMessage: ca }),
                )
              }),
              h()(l()(e), '_handleClear', function () {
                ;(0, e.props.setTargetingLocationQuery)('')
              }),
              h()(l()(e), '_renderSearchList', function () {
                var t = e.props.targetedLocations,
                  n = Object(ta.a)(
                    t.map(function (e) {
                      return e.targeting_value
                    }),
                  ),
                  r = e._getTargetingLocationOptions()
                return y.createElement(
                  L.a,
                  { style: pa.overflow },
                  r.map(function (t) {
                    var r = t.localized_name,
                      a = t.location_type,
                      o = t.targeting_value
                    return y.createElement(Yr.a, {
                      checked: n.has(o),
                      helpText: Be(a),
                      key: o,
                      label: r,
                      name: o,
                      onChange: e._handleSearchSelect,
                      testID: se,
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
                  u = Object(ze.h)(i || 'US'),
                  s = l.filter(function (e) {
                    var t = e.country_code,
                      n = e.localized_name
                    return u(n, t, o) !== ze.e.NoMatch
                  })
                return Object(na.a)(
                  s,
                  [
                    function (e) {
                      var t = e.country_code,
                        n = e.localized_name,
                        r = u(n, t, o)
                      return ua[r]
                    },
                    function (e) {
                      e.localized_name
                      var t,
                        n = e.location_type
                      return null !== (t = la[n]) && void 0 !== t
                        ? t
                        : (function (e) {
                            Object(ge.a)(
                              'Quick Promote: Unknown location type: '
                                .concat(e, '. Expected one of {')
                                .concat(Object.keys(la).join(', '), '}'),
                            )
                          })(n) || Object.keys(la).length
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
                    ? (Object(ze.p)(a)(
                        ze.n.setTargetingLocation({
                          id: i.targeting_value,
                          locationType: i.location_type,
                          countryCode: i.country_code,
                        }),
                      ),
                      o([i]),
                      e._handleGoBack())
                    : Object(ge.a)('Quick Promote: could not find "'.concat(t, '" in list of targeting options'))
                } else Object(ze.p)(a)(ze.n.targetingLocationError()), e.setState({ errorMessage: ia })
                c('')
              }),
              h()(l()(e), '_renderSelected', function () {
                var t = e.props,
                  n = t.targetedLocations,
                  r = t.targetingLocationQuery,
                  a = e.state.errorMessage
                return y.createElement(
                  da,
                  {
                    onBack: e._handleGoBack,
                    onChange: e._handleTargetingLocationChange,
                    onClear: e._handleClear,
                    targetingLocationQuery: r,
                  },
                  y.createElement(
                    L.a,
                    null,
                    a && y.createElement(L.a, { style: pa.gutter }, y.createElement(de.a, { text: a, type: 'danger' })),
                    y.createElement(A.b, { style: pa.headingText, weight: 'heavy' }, qe({ numLocations: n.length })),
                  ),
                  y.createElement(
                    L.a,
                    null,
                    n.map(function (t) {
                      var n = t.localized_name,
                        r = t.location_type,
                        a = t.targeting_value
                      return y.createElement(Yr.a, {
                        checked: !0,
                        helpText: Be(r),
                        key: a,
                        label: n,
                        name: a,
                        onChange: e._handleSearchSelect,
                        testID: se,
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
                Object(ze.m)(n, r)(i, l, o, c, u)
              }),
              h()(l()(e), '_handleTargetingLocationChange', function (t) {
                var n = t.target.value,
                  r = e.props,
                  a = r.analytics,
                  o = r.createLocalApiErrorHandler,
                  c = r.setAndFetchTargetingLocationQuery
                Object(ze.p)(a)(ze.n.targetingLocationSearch(n)), c(n).catch(o())
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
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(M, { screenType: ze.c.TargetingLocation }),
                    e ? this._renderSearch() : this._renderSelected(),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(sa, 'contextType', me.a)
      var da = function (e) {
          var t = e.children,
            n = e.onBack,
            r = e.onChange,
            a = e.onClear,
            o = e.targetingLocationQuery
          return y.createElement(
            L.a,
            { style: pa.qpContainer, testID: Z },
            y.createElement(Zr.a, {
              leftControl: y.createElement($r.a, { onClick: n }),
              middleControl: y.createElement(ea.a, {
                Icon: Kr.a,
                autoFocus: !0,
                name: 'locationTargetingInput',
                onChange: r,
                onClear: a,
                placeholder: aa,
                style: pa.input,
                testID: ue,
                value: o,
                withClearButton: !0,
              }),
            }),
            t,
          )
        },
        pa = R.a.create(function (e) {
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
        ma = Xr(sa),
        fa = n('ddV6'),
        ga = n.n(fa),
        ha = function (e, t) {
          return e.quickPromote.targeting.targetedLocations
        },
        ya = function (e, t) {
          return e.quickPromote.targeting.gender
        },
        ba = function (e, t) {
          return e.quickPromote.targeting.ageBucket
        },
        va = Object(_.a)()
          .propsFromState(function () {
            return { targetedLocations: ha, selectedGender: ya, selectedAgeBucket: ba }
          })
          .propsFromActions(function () {
            return { setTargetedAgeBucket: P.L, setTargetedGender: P.M }
          })
          .withAnalytics(ze.o),
        Ea = n('JiIh'),
        wa = n('fyvP'),
        _a = n('J4ZH'),
        Oa = n('tn7R'),
        Pa = n('mN6z')
      function Ia(e) {
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
      var Ca = V.a.hba1d105,
        Ta = V.a.cba0133d,
        ka = V.a.e1efbead,
        ja = V.a.c6ff7c1f,
        Sa = V.a.b555fb45,
        xa = V.a.a8d0108d,
        La = [Qt.b.Any, Qt.b.Female, Qt.b.Male].map(function (e) {
          return { label: De(e), value: e, testID: J(e) }
        }),
        Aa = V.a.j2c03e12,
        Ra = ['13', '18', '21', '25', '35', '50'],
        Da = [void 0, void 0, void 0, '24', '34', '49', '54'],
        Ba = Object(_a.a)(Object(Oa.a)(Qt.e), function (e) {
          return e.maxAge || 'over'
        }),
        Fa = Da.length
      function Na(e, t) {
        var n
        if (e && t) return null === (n = Qt.d[e]) || void 0 === n ? void 0 : n[t]
      }
      var Ma = (function (e) {
        s()(n, e)
        var t = Ia(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            h()(l()(e), '_handleGenderChange', function (t, n) {
              var r = e.props,
                a = r.analytics
              ;(0, r.setTargetedGender)(n), Object(ze.p)(a)(ze.n.setTargetingGender(n))
            }),
            h()(l()(e), '_handleAgeBucketChange', function (t, n) {
              var r = ga()(t, 2),
                a = r[0],
                o = r[1],
                c = e.props,
                i = c.analytics,
                l = c.selectedAgeBucket,
                u = c.setTargetedAgeBucket,
                s = e._sliderValueFromSelectedAgeBucket(l)
              if (!Object(Pa.a)(s, [a, o]))
                if (n) {
                  var d = Ra[a]
                  if (!d) return
                  var p = Na(d, o === Fa ? 'over' : Da[o])
                  if (p) Object(ze.p)(i)(ze.n.setTargetingAgeBucket(p)), u(p)
                  else {
                    var m = Object.keys(Qt.d[d])[0]
                    e._setAgeBucket({ minAge: d, maxAge: m })
                  }
                } else {
                  var f = o === Fa ? 'over' : Da[o]
                  if (!f) return
                  var g = Na(Ra[a], f)
                  if (g) Object(ze.p)(i)(ze.n.setTargetingAgeBucket(g)), u(g)
                  else {
                    var h = Ba[f].slice(-1)[0].minAge
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
                i = Qt.d[r][n || 'over']
              if (!i)
                throw new Error(
                  'Age bucket not found for minAge: "'.concat(r, '", maxAge: "').concat(n || '<empty>', '"'),
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
                var t = Qt.e[e],
                  n = t.maxAge,
                  r = t.minAge
                return [Ra.indexOf(r), n ? Da.indexOf(n) : Fa]
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
                  u = qe({ numLocations: a.length }),
                  s = Qt.e[n],
                  d = s.maxAge,
                  p = s.minAge,
                  m = this._sliderValueFromSelectedAgeBucket(n),
                  f = d || Aa
                return y.createElement(
                  L.a,
                  { style: qa.qpContainer, testID: K },
                  y.createElement(M, { screenType: ze.c.Targeting }),
                  y.createElement(z, { subtitle: Ta, title: Ca }),
                  y.createElement(pr.a, {
                    description: Object(fe.a)(
                      a.map(function (e) {
                        return e.localized_name
                      }),
                    ),
                    label: y.createElement(A.b, { weight: 'bold' }, u),
                    link: Object(ze.j)(i, l, c, ze.c.TargetingLocation),
                    testID: ie,
                  }),
                  y.createElement(
                    D,
                    { label: ka },
                    y.createElement(
                      L.a,
                      { style: qa.ageRangeSlider },
                      y.createElement(Ea.a, {
                        endThumbAccessibilityLabel: Sa,
                        endThumbAccessibilityLabelValueText: '"'.concat(f, '"'),
                        endThumbLabel: f,
                        max: Fa,
                        min: 0,
                        onChange: this._handleAgeBucketChange,
                        startThumbAccessibilityLabel: ja,
                        startThumbAccessibilityLabelValueText: '"'.concat(p, '"'),
                        startThumbLabel: p,
                        value: m,
                      }),
                    ),
                  ),
                  y.createElement(
                    D,
                    { label: xa, withBottomBorder: !1 },
                    y.createElement(
                      L.a,
                      { style: qa.genderSelection },
                      y.createElement(wa.a, {
                        name: 'gender',
                        onChange: this._handleGenderChange,
                        options: La,
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
      h()(Ma, 'contextType', me.a)
      var qa = R.a.create(function (e) {
          return {
            qpContainer: { flex: 1 },
            genderSelection: { marginTop: e.spaces.space4 },
            ageRangeSlider: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space16 },
            iconText: { textAlignVertical: 'text-bottom' },
          }
        }),
        Ha = va(Ma),
        za = n('q9Zt'),
        Ua = n('JYMr')
      function Ga(e) {
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
      var Va = V.a.a065172e,
        Wa = V.a.cfcdb4a1,
        Qa = V.a.dcfb0332,
        Xa = V.a.c1df579e,
        Ka = (function (e) {
          s()(n, e)
          var t = Ga(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_getRetweetOrTweet', function () {
                var t = e.props.tweet
                return t ? Xt.a.getOriginalTweet(t) : t
              }),
              h()(l()(e), '_render', function () {
                var t = e.props.history,
                  n = e._getRetweetOrTweet()
                return !n || (n && n.user.id_str !== e.context.loggedInUserId)
                  ? y.createElement(
                      bt.b,
                      { history: t, onBackClick: e._handleGoBack, title: Qa },
                      y.createElement(za.a, { onRetry: null, title: Va }),
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
                  p = d ? ze.d : ze.b,
                  m = function (e) {
                    return Object(ze.j)(u, s, i, e)
                  }
                switch (l) {
                  case 'intro':
                    return e._renderSplashPage()
                  case 'objective':
                    if (d) {
                      var f = m(ze.c.Targeting)
                      return e._renderProgressPage(ze.d.Objective, f)
                    }
                    n.replace(Object(ze.j)(u, s, i, ze.c.Targeting))
                    break
                  case 'targeting':
                    var g = m(ze.c.BudgetSelect)
                    return e._renderProgressPage(p.Targeting, g)
                  case 'budget_select':
                    var h = m(ze.c.Review)
                    return e._renderProgressPage(p.BudgetSelect, h)
                  case 'review':
                    var y = [tt.a.LOADING, tt.a.LOADED].includes(o) && !a
                    return e._renderProgressPage(y ? p.Finish : p.Review)
                  case 'payment':
                    return e._renderProgressPage(p.Review)
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
                  bt.b,
                  { documentTitle: Qa, history: r, renderHeader: e._renderHeader },
                  y.createElement(Zr.a, {
                    leftControl: y.createElement($r.a, { autofocus: !0, onClick: e._handleGoBack, testID: le }),
                    rightControl: n && y.createElement(mr.a, { link: n, testID: Q, type: 'brandText' }, Xa),
                  }),
                  y.createElement(Ua.a, { progress: t, style: Ja.progressBar }),
                  y.createElement(L.a, { style: Ja.noScrollView }, e._renderRoutes()),
                )
              }),
              h()(l()(e), '_renderPopupPage', function () {
                var t = e.props.history
                return y.createElement(
                  bt.b,
                  { documentTitle: Qa, history: t, renderHeader: e._renderHeader },
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
                    return y.createElement(Ur.c, { component: Dt })
                  case 'objective':
                    return y.createElement(Ur.c, { component: Ln })
                  case 'targeting':
                    return y.createElement(Ur.c, { component: Ha })
                  case 'targeting_location':
                    return y.createElement(Ur.c, { component: ma })
                  case 'budget_select':
                    return y.createElement(Ur.c, { component: $e })
                  case 'review':
                    return y.createElement(Ur.c, { component: zr })
                  case 'payment':
                    return y.createElement(Ur.c, { component: Xn })
                  case 'done':
                    return y.createElement(Ur.c, { component: gt })
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
                Object(ze.p)(n)(ze.n.back(i)), Object(ze.m)(r, a)(l, u, c, i, s)
              }),
              h()(l()(e), '_handleRequestRetry', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.match.params.quickPromoteScreenName
                Object(ze.p)(n)(ze.n.reload(r)), window.location.reload()
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
                    m = t.statusId,
                    f = s.params.quickPromoteScreenName,
                    g = this.context.loggedInUserId
                  return g
                    ? (tt.a.LOADED === d && f !== ze.c.Done && p(tt.a.NONE),
                      Object(N.b)(
                        'initial-load',
                        Promise.all([u(m), i(), a(g), c(), l({ statusId: m })])
                          .then(function () {
                            return o()
                          })
                          .then(function () {
                            return (0, e.props.handleFirstLoad)()
                          }),
                      ).catch(function (e) {
                        r(yt.a)(e), Object(ze.p)(n)(ze.n.pageLoadFail(e.message))
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
                    ? t !== tt.a.LOADED
                      ? y.createElement(
                          bt.b,
                          { documentTitle: Qa, history: n, renderHeader: this._renderHeader },
                          y.createElement(Jn, null),
                          y.createElement(ht.a, {
                            fetchStatus: t,
                            onRequestRetry: this._handleRequestRetry,
                            render: this._render,
                            retryMessage: Wa,
                          }),
                        )
                      : y.createElement(ht.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleRequestRetry,
                          render: this._render,
                          retryMessage: Wa,
                        })
                    : this._render()
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(Ka, 'contextType', me.a)
      var Ja = R.a.create(function (e) {
          return { progressBar: { backgroundColor: e.colors.gray50 }, noScrollView: { overflowX: 'hidden', flex: 1 } }
        }),
        Ya = it(Ka)
      t.default = Ya
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
          return et
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
        v = n('s4rk'),
        E = n('zI2C'),
        w = n('6ZtA'),
        _ = n('es0u'),
        O = (n('WNMA'), n('6/RC')),
        P = n('x5Pi'),
        I = n('8Lfv'),
        C = n('QK5w'),
        T = n('eSoz'),
        k = n('RqPI'),
        j = n('9D1O'),
        S = n('pNZL'),
        x = n('XOJV'),
        L = n('G6rE'),
        A = n('rxPX'),
        R = n('0KEI'),
        D = n('Mx3A'),
        B = function (e, t) {
          return e.location && e.location.state && e.location.state[t]
        },
        F = function (e, t) {
          return 'PUSH' === t.history.action
        },
        N = function (e, t) {
          var n = B(t, 'focal')
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
        q = function (e, t) {
          return t.match.params.screenName
        },
        H = function (e, t) {
          return B(t, 'socialContext')
        },
        z = function (e, t) {
          return B(t, 'topicFollowPrompt')
        },
        U = function (e, t) {
          return B(t, 'contextTweetId')
        },
        G = function (e, t) {
          return B(t, 'promotedContent')
        },
        V = function (e, t) {
          return B(t, 'overflow')
        },
        W = function (e, t) {
          return B(t, 'contextualClientEventInfo')
        },
        Q = function (e, t) {
          var n = B(t, 'referrer'),
            r = N(e, t)
          return !!n && n.includes('/i/topics/tweet/'.concat(r))
        },
        X = function (e, t) {
          if (!O.canUseDOM) return !1
          var n = t.location.query,
            r = Object(C.a)(e, t)
          return (
            Object(D.b)({
              query: n,
              httpReferer: r ? '' : document.referrer || '',
              requestUrl: window.location.href,
              emptyIfServerRendered: !1,
            }).referral_type === D.a.Web
          )
        },
        K = function (e, t) {
          return x.a.selectHydrated(e, N(e, t))
        },
        J = function (e, t) {
          var n = N(e, t),
            r = x.a.selectHydrated(e, n)
          return r && r.conversation_id_str ? x.a.selectHydrated(e, r.conversation_id_str) : null
        },
        Y = function (e, t) {
          return x.a.selectFetchStatus(e, N(e, t))
        },
        Z = function (e, t) {
          return t.location.query && 'string' == typeof t.location.query.cxt ? t.location.query.cxt : void 0
        }
      function $(e, t) {
        var n = K(e, t),
          r = n ? Object(T.f)(e, n) : void 0
        return n && r ? Object(P.c)(n, r) : void 0
      }
      var ee = Object(A.a)()
          .propsFromState(function () {
            return {
              communitySocialContextOfFocalTweet: $,
              contextTweetId: U,
              contextualClientEventInfo: W,
              focalTweet: K,
              initialFetchStatus: Y,
              isForwardNavigation: F,
              isReferralSource: X,
              isReferredFromExploreTopics: Q,
              userLanguage: k.o,
              loggedInUser: L.e.selectLoggedInUser,
              overflowCount: V,
              promotedContent: G,
              richLandingContextId: Z,
              rootTweet: J,
              screenName: q,
              selectedTweetId: M,
              socialContext: H,
              startLocation: j.t,
              statusId: N,
              topicFollowPrompt: z,
              tweetDetailNav: S.a,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)('CONVERSATION_SCREEN'),
              clearTimelineCache: function (e, t) {
                return Object(I.a)(e, t)
              },
            }
          })
          .withAnalytics({ page: 'tweet' }),
        te = n('ymux'),
        ne = n('rkhm'),
        re = n('SrtL'),
        ae = n('8UdT'),
        oe = n('kGix'),
        ce = n('muX9'),
        ie = n('3XMw'),
        le = n.n(ie),
        ue = (n('JtPf'), n('87if'), n('zb92')),
        se = Object(ue.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(182)]).then(n.bind(null, 'uo3S'))
          },
          renderPlaceholder: function (e, t) {
            return null
          },
        }),
        de = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('/yvb')),
        pe = n('sebV'),
        me = n('BXlL'),
        fe = n('Irs7'),
        ge = n('aITJ')
      function he(e, t) {
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
      function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? he(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : he(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var be = le.a.af9c8a3d,
        ve = function (e) {
          var t = e.featureSwitches,
            n = e.scribeNamespace,
            r = e.startLocation,
            a = e.userId,
            o = Object(fe.b)(),
            c = !!a && ge.b.isMobileOS() && !pe.a.isStandaloneApp(),
            i = b.useCallback(
              function (e) {
                e.preventDefault(),
                  o.scribe(ye(ye({}, n), {}, { element: 'open_app_button', action: 'click' })),
                  Object(me.b)({ startLocation: r, featureSwitches: t, userId: a })
              },
              [o, t, n, r, a],
            )
          return c && t.isTrue('responsive_web_open_app_appbar_button_enabled')
            ? b.createElement(de.a, {
                accessibilityLabel: be,
                children: be,
                onPress: i,
                size: 'small',
                type: 'primaryOutlined',
              })
            : null
        },
        Ee = n('rJoH'),
        we = n('yoO3'),
        _e = n('caTy'),
        Oe = n('PeW/'),
        Pe = n('AUxQ'),
        Ie = n('Rp9C'),
        Ce = n('7JQg'),
        Te = n('VS6U'),
        ke = n('tocL'),
        je = n('HBr9'),
        Se = n('2fY8'),
        xe = n('MWbm'),
        Le = n('G8HL'),
        Ae = n('pxuL'),
        Re = n('t62R'),
        De = n('rHpw'),
        Be = n('oQhu'),
        Fe = n('mN6z')
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
      var Me = le.a.ea831526,
        qe = le.a.a90e1e67({ noun: '' }),
        He = le.a.c299a6cf,
        ze = le.a.c2ed3314,
        Ue = le.a.ad666301,
        Ge = le.a.f0c37ddb,
        Ve = { page: 'tweet' },
        We = { page: 'tweet', section: 'landing' },
        Qe = Object(Be.a)(function (e, t) {
          return { items: [Ie.a.forTweet(e, t)], tweet_id: e }
        }),
        Xe = Object(Be.a)(function (e) {
          return Object(ne.a)(e)
        }),
        Ke = Object(Be.a)(function (e, t, n, r, a) {
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
        Je = Object(Be.a)(function (e, t, n) {
          return Object(te.a)({ focalTweetId: e, fetchOptions: t, featureSwitches: n })
        }),
        Ye = [ke.a.Community]
      function Ze(e) {
        var t = e.context
        if (!t) return null
        switch (t.contextType) {
          case ke.a.Community:
            var n = t.landingUrl ? Object(_e.b)(t.landingUrl) : void 0
            return b.createElement(Re.b, { link: n }, t.text)
          default:
            return null
        }
      }
      function $e(e) {
        if (!e) return null
        switch (e.contextType) {
          case ke.a.Community:
            return ze
          default:
            return null
        }
      }
      var et = (function (e) {
        s()(n, e)
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
              return Ke(a, t, n, c, r)
            }),
            h()(l()(o), '_getModule', function () {
              var e = o.props.statusId,
                t = o.context.featureSwitches,
                n = o._getNavigationParams()
              return Je(e, n, t)
            }),
            h()(l()(o), '_handleEntriesRendered', function (e) {
              var t = e.entries,
                n = e.fetchStatus,
                r = o.props.recordTTFL
              if ((n === oe.a.FAILED && (o._shouldRecordTTFL = !1), o._shouldRecordTTFL && t.length)) {
                var a = t.some(function (e) {
                  return e.type === ae.b.Tweet
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
              return o._shouldRenderRuxInjections() ? We : Ve
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
                  m = c.userLanguage
                l &&
                  ((e = Ge({ tweetText: Object(Se.a)(l.text), fullName: l.user.name })),
                  (t = 'twitter://status?id='.concat(l.id_str)),
                  (n = 'https://twitter.com'.concat(this._getCanonicalPath() || '')),
                  (r = Ue({ fullName: l.user.name })),
                  (a = l.possibly_sensitive))
                var f = (function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                    return t.find(function (e) {
                      return e && Ye.includes(e.contextType)
                    })
                  })(d, i),
                  g = f && b.createElement(Ze, { context: f })
                return b.createElement(
                  Ce.b,
                  { data: Qe(p, s), namespace: this._getScribeNamespace() },
                  b.createElement(
                    we.a,
                    null,
                    a
                      ? b.createElement(ce.a, null, b.createElement('meta', { content: 'adult', name: 'rating' }))
                      : null,
                    n
                      ? b.createElement(
                          ce.a,
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
                    b.createElement(Ee.a, {
                      canonical: n,
                      description: null == l ? void 0 : l.full_text,
                      image: null == l ? void 0 : l.user.profile_image_url_https,
                      title: r,
                      type: 'article',
                    }),
                    b.createElement(w.a, {
                      featureSwitches: this.context.featureSwitches,
                      loggedInUserId: o,
                      userLanguage: m,
                    }),
                    b.createElement(E.a, { deepLink: t }),
                    n ? b.createElement(v.a, { canonical: n }) : null,
                    b.createElement(
                      P.b.Provider,
                      { value: null == f ? void 0 : f.contextType },
                      b.createElement(Te.a, {
                        backLocation: '/',
                        documentTitle: e,
                        history: u,
                        primaryContent: this._renderTimeline(),
                        rightControl: this._renderRightControl(),
                        sidebarContent: this._renderSidebarContent(),
                        subtitle: g,
                        title: (f && $e(f)) || (l && l.self_thread ? He : qe),
                      }),
                    ),
                    b.createElement(re.a, { title: e, withMeta: !1 }),
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
                  xe.a,
                  { style: tt.mobileAppBarRightControl },
                  b.createElement(ve, {
                    featureSwitches: t,
                    scribeNamespace: this._getScribeNamespace(),
                    startLocation: o,
                    userId: n,
                  }),
                  b.createElement(Oe.b, { focalTweet: a, module: this._getModule() }),
                )
              },
            },
            {
              key: '_renderSidebarContent',
              value: function () {
                var e = this.props.focalTweet
                return e && e.user.id_str
                  ? b.createElement(
                      _.a,
                      { focalTweetId: null == e ? void 0 : e.id_str, withTopicsToFollow: !1, withWhoToFollow: !1 },
                      b.createElement(se, { focalTweetId: e.id_str }),
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
                  je.a,
                  { collectionName: Me },
                  b.createElement(Pe.a, {
                    apiErrorHandlerMap: Xe(c),
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
                r(e, t).catch(a(Xe(o)))
              },
            },
          ]),
          n
        )
      })(b.Component)
      h()(et, 'contextType', Ae.a), h()(et, 'defaultProps', { recordTTFL: y.c })
      var tt = De.a.create(function (e) {
        return {
          mobileAppBarRightControl: {
            flexDirection: 'row',
            alignItems: 'center',
            height: e.componentDimensions.appBarHeightPx,
          },
        }
      })
      t.default = ee(Object(Le.a)(et))
    },
  },
])
//# sourceMappingURL=WIPED
