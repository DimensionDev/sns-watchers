;(window.webpackJsonp = window.webpackJsonp || []).push([
  [70],
  {
    dpj4: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'NewsletterSubscribeSheet', function () {
          return ue
        })
      var r = a('ddV6'),
        n = a.n(r),
        c = (a('jQ3i'), a('x4t0'), a('ERkP')),
        o = a.n(c),
        l = (a('KqXw'), a('WNMA'), a('G6rE')),
        i = a('rxPX'),
        s = a('0KEI'),
        u = a('+WwN'),
        m = a('kGix'),
        d = a('YeSc'),
        p =
          (a('yH/f'),
          Object.freeze({
            CONFIRM: 'CONFIRM',
            INITIAL_WITH_EMAIL: 'INITIAL_WITH_EMAIL',
            INITIAL_WITHOUT_EMAIL: 'INITIAL_WITHOUT_EMAIL',
            SUBSCRIBED: 'SUBSCRIBED',
          })),
        f = Object.freeze({
          NEWSLETTER_ISSUE_CARD: 'twitter-issue-card',
          NEWSLETTER_PUBLICATION_CARD: 'twitter-publication-card',
          TWITTER_PROFILE: 'twitter profile',
        }),
        b = function (e, t) {
          var a, r
          return null == t || null === (a = t.match) || void 0 === a || null === (r = a.params) || void 0 === r
            ? void 0
            : r.screenName
        },
        v = function (e, t) {
          var a = b(0, t)
          return a ? l.e.selectByScreenName(e, a) : null
        },
        E = function (e, t) {
          var a = b(0, t)
          return a ? l.e.selectIdByScreenName(e, a) : null
        },
        _ = function (e, t) {
          var a = b(0, t)
          return a ? l.e.selectIsUserNotFound(e, a) : null
        },
        I = function (e, t) {
          var a
          return null === (a = t.location.state) || void 0 === a ? void 0 : a.revueAccountId
        },
        g = function (e, t) {
          var a
          return null === (a = t.location.state) || void 0 === a ? void 0 : a.newsletterTitle
        },
        y = function (e, t) {
          var a
          return null === (a = t.location.state) || void 0 === a ? void 0 : a.sampleUrl
        },
        T = function (e, t) {
          var a
          return null === (a = t.location.state) || void 0 === a ? void 0 : a.profileUrl
        },
        w = function (e, t) {
          var a
          return null === (a = t.location.state) || void 0 === a ? void 0 : a.subscribeSource
        },
        S = function (e, t) {
          var a = I(0, t)
          return a ? Object(u.c)(e, a) : void 0
        },
        L = function (e, t) {
          var a = E(e, t)
          return a ? Object(d.f)(e, { userId: a }) : void 0
        },
        h = function (e, t) {
          if (b(0, t)) {
            var a = (function (e, t) {
                var a = E(e, t)
                return a ? Object(d.e)(e, a) : void 0
              })(e, t),
              r = (function (e, t) {
                var a = b(0, t)
                return a ? l.e.selectFetchStatusByScreenName(e, a) : void 0
              })(e, t)
            return Object(m.d)(a, r)
          }
          return I(0, t)
            ? (function (e, t) {
                var a = I(0, t)
                return a ? Object(u.b)(e, a) : void 0
              })(e, t)
            : m.a.NONE
        },
        N = Object(i.a)()
          .propsFromState(function () {
            return {
              fetchStatus: h,
              isUserNotFound: _,
              newsletter: L,
              newsletterTitleFromLocationState: g,
              profileUrlFromLocationState: T,
              revueAccountIdFromLocationState: I,
              revueCardContext: S,
              screenName: b,
              sampleUrlFromLocationState: y,
              subscribeSource: w,
              user: v,
              userId: E,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              a,
              r,
              n = e.fetchStatus,
              c = e.isUserNotFound,
              o = e.newsletter,
              l = e.newsletterTitleFromLocationState,
              i = e.profileUrlFromLocationState,
              s = e.revueAccountIdFromLocationState,
              u = e.revueCardContext,
              m = e.sampleUrlFromLocationState,
              d = e.screenName,
              p = e.subscribeSource,
              b = e.user,
              v = e.userId
            o
              ? (t = {
                  maskedEmail: o.context.user_masked_email,
                  newsletterTitle: o.data.revue_account.newsletter_info.title,
                  profileUrl: o.data.revue_account.profile_info.profile_url,
                  revueAccountId: o.config.revue_account_id,
                  revuePrivacyUrl: o.context.terms_of_service.privacy_policy_url,
                  revueTermsUrl: o.context.terms_of_service.terms_of_service_url,
                  sampleUrl:
                    null === (a = o.data) || void 0 === a || null === (r = a.sample_issue) || void 0 === r
                      ? void 0
                      : r.sample_issue_url,
                  subscribeSource: f.TWITTER_PROFILE,
                })
              : u &&
                s &&
                (t = {
                  maskedEmail: u.user_masked_email,
                  newsletterTitle: l,
                  profileUrl: i,
                  revueAccountId: s,
                  revuePrivacyUrl: u.terms_of_service.privacy_policy_url,
                  revueTermsUrl: u.terms_of_service.terms_of_service_url,
                  sampleUrl: m,
                  subscribeSource: p,
                })
            return {
              fetchStatus: n,
              isUserNotFound: c,
              newsletterMetadata: t,
              revueAccountIdFromLocationState: s,
              screenName: d,
              user: b,
              userId: v,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'NEWSLETTER_SUBSCRIBE_SHEET',
              ),
              fetchOneUserByScreenNameIfNeeded: l.e.fetchOneByScreenNameIfNeeded,
              fetchRevueAccount: u.a,
              fetchUserBizProfile: d.b,
            }
          })
          .withAnalytics({ page: 'profile' }),
        k = a('v//M'),
        A = a('jHSc'),
        B = a('3XMw'),
        U = a.n(B),
        C = a('yiKp'),
        F = a.n(C),
        R = (a('2G9S'), a('uFXj'), a('hBvt'), a('v6aA')),
        O = a('1YZw'),
        M = Object(i.a)().propsFromActions(function () {
          return {
            addToast: O.b,
            createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
              'NEWSLETTER_SUBSCRIBE_SHEET',
            ),
            subscribe: d.h,
          }
        }),
        H = a('rHpw'),
        x = a('t62R'),
        P = a('/yvb'),
        W = a('Qwev'),
        j = a('cHvH'),
        z = a('W55q'),
        D = a('i4Oy'),
        X = a('MWbm'),
        $ = U.a.cfd2f35d,
        G = U.a.ia5e7487,
        V = U.a.jdfb861a,
        q = U.a.b6e3edd8,
        K = U.a.cd9a90aa,
        J = U.a.g30241f5,
        Q = U.a.fcd1fdda,
        Y = U.a.a976a91d,
        Z = U.a.ab0deccf,
        ee = U.a.h3281ce9,
        te = U.a.f05df263,
        ae = U.a.b78d403f,
        re = U.a.d1bc4330,
        ne = U.a.b6f9f574,
        ce = H.a.create(function (e) {
          return {
            activityIndicator: { paddingBottom: e.spaces.space48 },
            link: { color: e.colors.link, marginTop: e.spaces.space16 },
            mobilePadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            padding: { paddingBottom: e.spaces.space80, paddingHorizontal: e.spaces.space80 },
            marginBottom: { marginBottom: e.spaces.space16 },
            marginTop: { marginTop: e.spaces.space16 },
            marginTopSubtext: { marginTop: e.spaces.space8 },
            marginTopLarge: { marginTop: e.spaces.space32 },
            titleDesktop: { marginVertical: e.spaces.space28 },
            titleMobile: { marginBottom: e.spaces.space28 },
          }
        }),
        oe = M(function (e) {
          var t = e.addToast,
            a = e.createLocalApiErrorHandler,
            r = e.currentPage,
            c = e.newsletterMetadata,
            l = e.onClose,
            i = e.scribeAction,
            s = e.setCurrentPage,
            u = e.subscribe,
            m = o.a.useState(void 0),
            d = n()(m, 2),
            b = d[0],
            v = d[1],
            E = o.a
              .useContext(R.a)
              .featureSwitches.isTrue('responsive_web_newsletters_subscribe_double_opt_in_removal_enabled'),
            _ = c.maskedEmail,
            I = c.newsletterTitle,
            g = c.profileUrl,
            y = c.revueAccountId,
            T = c.revuePrivacyUrl,
            w = c.revueTermsUrl,
            S = c.sampleUrl,
            L = c.subscribeSource,
            h = function () {
              return D.a.get('window').width <= H.a.theme.breakpoints.small ? z.a : z.b
            },
            N = function (e) {
              return (function (e, t) {
                return ''.concat(e, '&client=').concat(t)
              })(e, h())
            },
            k = g && N(g),
            A = S && ''.concat(N(S), '&element=read-sample-issue'),
            B = function (e) {
              return function () {
                i('click', e)
              }
            },
            C = function () {
              A && i('click', 'sample_issue', A)
            },
            O = r === p.INITIAL_WITH_EMAIL,
            M = r === p.INITIAL_WITHOUT_EMAIL,
            oe = r === p.CONFIRM,
            le = r === p.SUBSCRIBED,
            ie = L === f.TWITTER_PROFILE,
            se = function (e, t) {
              return o.a.createElement(
                x.b,
                {
                  align: le ? 'center' : 'left',
                  color: 'normal',
                  size: 'title4',
                  style: t ? ce.titleMobile : ce.titleDesktop,
                  weight: 'bold',
                },
                e,
              )
            },
            ue = function () {
              return o.a.createElement(x.b, { color: 'gray700', dir: 'ltr', weight: E ? 'normal' : 'bold' }, _)
            },
            me =
              E && _ && k
                ? o.a.createElement(
                    X.a,
                    null,
                    o.a.createElement(
                      x.b,
                      { color: 'gray700', size: 'subtext1', style: ce.marginTopLarge },
                      o.a.createElement(
                        U.a.I18NFormatMessage,
                        { $i18n: 'gd686e7e' },
                        o.a.createElement(ue, null),
                        o.a.createElement(
                          x.b,
                          {
                            color: 'buttonBlack',
                            link: ''.concat(k, '&element=different-email'),
                            onPress: B('different_email'),
                            withUnderline: !0,
                          },
                          U.a.g12413e9,
                        ),
                      ),
                    ),
                    o.a.createElement(
                      x.b,
                      { color: 'gray700', size: 'subtext1', style: ce.marginTopSubtext },
                      o.a.createElement(
                        U.a.I18NFormatMessage,
                        { $i18n: 'b9c12eee' },
                        o.a.createElement(
                          x.b,
                          { color: 'buttonBlack', link: w, onPress: B('revue_terms'), withUnderline: !0 },
                          U.a.jc9f083d,
                        ),
                        o.a.createElement(
                          x.b,
                          { color: 'buttonBlack', link: T, onPress: B('revue_privacy'), withUnderline: !0 },
                          U.a.h75d5bd5,
                        ),
                        I || '',
                      ),
                    ),
                  )
                : o.a.createElement(
                    x.b,
                    { color: 'gray700', style: ce.marginTop },
                    o.a.createElement(
                      U.a.I18NFormatMessage,
                      { $i18n: 'efdeb336' },
                      o.a.createElement(
                        x.b,
                        { color: 'buttonBlack', link: w, onPress: B('revue_terms'), withUnderline: !0 },
                        U.a.d1c4aeaf,
                      ),
                      o.a.createElement(
                        x.b,
                        { color: 'buttonBlack', link: T, onPress: B('revue_privacy'), withUnderline: !0 },
                        U.a.a5d264ec,
                      ),
                    ),
                  ),
            de = function (e) {
              return o.a.createElement(
                o.a.Fragment,
                null,
                se(ne, e),
                E
                  ? null
                  : o.a.createElement(
                      X.a,
                      { style: ce.marginBottom },
                      o.a.createElement(
                        x.b,
                        { color: 'gray700' },
                        o.a.createElement(
                          U.a.I18NFormatMessage,
                          { $i18n: 'bc543cd9' },
                          I || '',
                          o.a.createElement(ue, null),
                        ),
                      ),
                      me,
                    ),
                o.a.createElement(
                  P.a,
                  {
                    onClick: function () {
                      if (y) {
                        v(!0), i('click', 'subscribe_btn')
                        var e = F()(
                          F()({ revueAccountId: y, doubleOptIn: !E }, L ? { via: L } : null),
                          {},
                          { client: h() },
                        )
                        u(e)
                          .then(function (e) {
                            var a,
                              r =
                                null == e || null === (a = e.subscribe_to_revue_account) || void 0 === a
                                  ? void 0
                                  : a.subscription_status
                            E ? (t({ text: ae }), l()) : (r === z.c.Subscribed ? s(p.SUBSCRIBED) : s(p.CONFIRM), v(!1)),
                              i('impression', 'success_msg')
                          })
                          .catch(function (e) {
                            var t = a({ showToast: !0 })
                            i('impression', 'error_msg'), v(!1), t(e)
                          })
                      }
                    },
                    size: 'xLarge',
                    style: !E && ce.marginTop,
                    type: 'primaryFilled',
                  },
                  E ? V : Z,
                ),
                A && ie
                  ? o.a.createElement(
                      P.a,
                      { link: A, onClick: C, size: 'xLarge', style: ce.marginTop, type: 'primaryOutlined' },
                      Q,
                    )
                  : null,
                E && me,
              )
            },
            pe = function (e) {
              return o.a.createElement(
                X.a,
                { style: e ? ce.mobilePadding : ce.padding },
                O ? de(e) : null,
                M
                  ? (function (e) {
                      return o.a.createElement(
                        o.a.Fragment,
                        null,
                        se(K, e),
                        o.a.createElement(x.b, { color: 'gray700', style: ce.marginBottom }, J),
                        k
                          ? o.a.createElement(
                              P.a,
                              {
                                link: ''.concat(k, '&element=subscribe-through-revue'),
                                onClick: B('subscribe_revue_btn'),
                                size: 'xLarge',
                                style: ce.marginTop,
                                type: 'primaryFilled',
                              },
                              re,
                            )
                          : null,
                        o.a.createElement(
                          P.a,
                          { onClick: l, size: 'xLarge', style: ce.marginTop, type: 'primaryOutlined' },
                          $,
                        ),
                      )
                    })(e)
                  : null,
                oe
                  ? (function (e) {
                      return o.a.createElement(
                        o.a.Fragment,
                        null,
                        se(V, e),
                        o.a.createElement(x.b, { color: 'gray700', style: ce.marginBottom }, q),
                        o.a.createElement(
                          P.a,
                          { onClick: l, size: 'xLarge', style: ce.marginTop, type: 'primaryOutlined' },
                          G,
                        ),
                      )
                    })(e)
                  : null,
                le
                  ? o.a.createElement(
                      o.a.Fragment,
                      null,
                      se(ee),
                      o.a.createElement(x.b, { align: 'center', color: 'gray700' }, te),
                      k
                        ? o.a.createElement(
                            P.a,
                            { link: k, size: 'xLarge', style: ce.marginTopLarge, type: 'primaryFilled' },
                            Y,
                          )
                        : null,
                      o.a.createElement(
                        P.a,
                        { onClick: l, size: 'xLarge', style: ce.marginTop, type: 'primaryOutlined' },
                        $,
                      ),
                    )
                  : null,
              )
            }
          return b
            ? o.a.createElement(W.a, { style: ce.activityIndicator })
            : o.a.createElement(j.a, null, function (e) {
                var t = e.windowWidth <= H.a.theme.breakpoints.small
                return pe(t)
              })
        }),
        le = a('5FtR'),
        ie = a('Rp9C'),
        se = U.a.i9028824,
        ue = function (e) {
          var t,
            a,
            r,
            c = e.analytics,
            l = e.createLocalApiErrorHandler,
            i = e.fetchOneUserByScreenNameIfNeeded,
            s = e.fetchRevueAccount,
            u = e.fetchStatus,
            d = e.fetchUserBizProfile,
            b = e.history,
            v = e.isUserNotFound,
            E = e.location,
            _ = e.newsletterMetadata,
            I = e.revueAccountIdFromLocationState,
            g = e.screenName,
            y = e.user,
            T = e.userId,
            w = o.a.useState(void 0),
            S = n()(w, 2),
            L = S[0],
            h = S[1]
          o.a.useEffect(
            function () {
              g && i(g).catch(l())
            },
            [l, i, g],
          )
          var N = o.a.useCallback(
            function () {
              T && d(T).catch(l())
            },
            [l, d, T],
          )
          o.a.useEffect(
            function () {
              N()
            },
            [N],
          )
          var B = o.a.useCallback(
            function () {
              I && s(I).catch(l())
            },
            [l, s, I],
          )
          o.a.useEffect(
            function () {
              B()
            },
            [B],
          ),
            o.a.useEffect(
              function () {
                var e = null != _ && _.maskedEmail ? p.INITIAL_WITH_EMAIL : p.INITIAL_WITHOUT_EMAIL
                h(e)
              },
              [_],
            )
          var U = o.a.useCallback(
              function () {
                switch (L) {
                  case p.INITIAL_WITH_EMAIL:
                    return 'newsletter_subscribe'
                  case p.INITIAL_WITHOUT_EMAIL:
                    return 'newsletter_email_needed'
                  case p.CONFIRM:
                    return 'newsletter_confirm'
                  case p.SUBSCRIBED:
                    return 'newsletter_already_subscribed'
                  default:
                    return
                }
              },
              [L],
            ),
            C = o.a.useCallback(
              function (e, t, a) {
                if (null != _ && _.revueAccountId) {
                  var r = U(),
                    n = { id: _.revueAccountId }
                  if (y) {
                    var o = ie.a.getUserItem(y),
                      l = o.is_user_follows_viewer,
                      i = o.is_viewer_follows_user
                    ;(n.is_user_follows_viewer = l), (n.is_viewer_follows_user = i)
                  }
                  _.subscribeSource && (n.newsletter_details = { subscribe_source: _.subscribeSource })
                  var s = _.subscribeSource === f.TWITTER_PROFILE ? 'profile_modules' : void 0
                  c.scribe({ action: e, section: s, component: r, element: t, data: { items: [n], url: a } })
                }
              },
              [c, U, _, y],
            )
          o.a.useEffect(
            function () {
              if (L) {
                var e = L === p.SUBSCRIBED ? 'youre_in_the_loop' : void 0
                C('impression', e)
              }
            },
            [L],
          )
          var F = u === m.a.LOADED || u === m.a.FAILED,
            R =
              g &&
              (null === (t = E.state) ||
              void 0 === t ||
              null === (a = t.previousPath) ||
              void 0 === a ||
              null === (r = a.includes) ||
              void 0 === r
                ? void 0
                : r.call(a, '/'.concat(g))),
            O = function () {
              L === p.CONFIRM ? C('click', 'done') : C('dismiss'), b.goBack()
            }
          return (!g || (g && F && v)) && (!I || (I && F && !_))
            ? o.a.createElement(le.a, { to: '/home' })
            : g && F && !R
            ? o.a.createElement(le.a, { to: '/'.concat(g) })
            : o.a.createElement(k.a, {
                accessibilityLabel: se,
                fetchStatus: u,
                onRequestRetry: g ? N : B,
                render: function () {
                  return _
                    ? o.a.createElement(
                        A.b,
                        { history: b, onBackClick: O, withBottomBorder: !1 },
                        o.a.createElement(oe, {
                          currentPage: L,
                          newsletterMetadata: _,
                          onClose: O,
                          scribeAction: C,
                          setCurrentPage: h,
                        }),
                      )
                    : null
                },
              })
        },
        me = N(ue)
      t.default = me
    },
    s9gk: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'NewslettersScreen', function () {
          return w
        })
      a('2G9S')
      var r = a('ERkP'),
        n = a.n(r),
        c = a('jHSc'),
        o = a.p + 'logo_revue.31c21585.svg',
        l = a('7N4s'),
        i = a('t62R'),
        s = a('/yvb'),
        u = a('rHpw'),
        m = a('3XMw'),
        d = a.n(m),
        p = a('U+bB'),
        f = a('MWbm'),
        b = d.a.d0a51fb1,
        v = d.a.e217e03c,
        E = d.a.fadf0f86,
        _ = d.a.f8df10b9,
        I = d.a.hb47d72b,
        g = d.a.dcbba9e7,
        y = d.a.bf916530,
        T = d.a.af5cd00d,
        w = function (e) {
          var t = n.a.useContext(l.b).isModal
          return n.a.createElement(
            c.b,
            { documentTitle: b, history: e.history, withBottomBorder: !1 },
            n.a.createElement(
              f.a,
              { style: t ? S.root : S.mobileRoot },
              n.a.createElement(
                f.a,
                { style: S.logoContainer },
                n.a.createElement(p.a, { source: o, style: S.revueLogo }),
              ),
              n.a.createElement(
                f.a,
                { style: S.contentContainer },
                n.a.createElement(i.b, { size: 'title4', style: S.newsletterHeader, weight: 'bold' }, v),
                n.a.createElement(
                  i.b,
                  { style: S.descriptionContainer },
                  n.a.createElement(
                    d.a.I18NFormatMessage,
                    { $i18n: 'j28cabeb' },
                    n.a.createElement(i.b, { link: '/revue' }, d.a.h8041a49),
                  ),
                ),
                n.a.createElement(
                  f.a,
                  { style: S.featuresList },
                  n.a.createElement(
                    i.b,
                    null,
                    n.a.createElement(
                      'ul',
                      null,
                      n.a.createElement('li', null, E),
                      n.a.createElement('li', null, _),
                      n.a.createElement('li', null, I),
                      n.a.createElement('li', null, g),
                      n.a.createElement('li', null, y),
                    ),
                  ),
                ),
                n.a.createElement(
                  s.a,
                  {
                    accessibilityLabel: T,
                    hoverLabel: { label: T },
                    link: 'https://www.getrevue.co?utm_source=twitter-nav&utm_campaign=announcement-modal&utm_content=find-out-more',
                    size: 'xLarge',
                    style: S.moreButton,
                    type: 'brandFilled',
                  },
                  T,
                ),
              ),
            ),
          )
        },
        S = u.a.create(function (e) {
          return {
            contentContainer: { flex: 12 },
            descriptionContainer: { display: 'inline-block' },
            featuresList: { marginLeft: '-'.concat(e.spaces.space20) },
            revueLogo: {
              height: 'calc(('.concat(e.spaces.space32, ' + ').concat(e.spaces.space12, '))'),
              width: 'calc(('.concat(e.spaces.space32, ' * 6) + ').concat(e.spaces.space12, ')'),
            },
            logoContainer: {
              alignItems: 'flex-start',
              flex: 1,
              justifyContent: 'flex-start',
              marginBottom: e.spaces.space16,
            },
            mobileRoot: { margin: e.spaces.space16 },
            moreButton: { marginTop: e.spaces.space16 },
            newsletterHeader: { marginBottom: e.spaces.space16 },
            root: {
              marginBottom: 'calc(('.concat(e.spaces.space40, ' * 2) + ').concat(e.spaces.space2, ')'),
              marginLeft: 'calc('.concat(e.spaces.space64, ' * 2)'),
              marginRight: 'calc('.concat(e.spaces.space64, ' * 2)'),
              marginTop: e.spaces.space16,
            },
          }
        })
      t.default = w
    },
  },
])
//# sourceMappingURL=WIPED
