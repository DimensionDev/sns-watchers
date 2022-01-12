;(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    dpj4: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'NewsletterSubscribeSheet', function () {
          return me
        })
      var n = r('ddV6'),
        a = r.n(n),
        c = (r('jQ3i'), r('x4t0'), r('ERkP')),
        o = (r('WNMA'), r('KqXw'), r('G6rE')),
        i = r('rxPX'),
        l = r('0KEI'),
        s = r('+WwN'),
        u = r('kGix'),
        m = r('YeSc'),
        d =
          (r('yH/f'),
          Object.freeze({
            CONFIRM: 'CONFIRM',
            INITIAL_WITH_EMAIL: 'INITIAL_WITH_EMAIL',
            INITIAL_WITHOUT_EMAIL: 'INITIAL_WITHOUT_EMAIL',
            SUBSCRIBED: 'SUBSCRIBED',
          })),
        p = Object.freeze({
          NEWSLETTER_ISSUE_CARD: 'twitter-issue-card',
          NEWSLETTER_PUBLICATION_CARD: 'twitter-publication-card',
          TWITTER_PROFILE: 'twitter profile',
        }),
        f = function (e, t) {
          var r, n
          return null == t || null === (r = t.match) || void 0 === r || null === (n = r.params) || void 0 === n
            ? void 0
            : n.screenName
        },
        b = function (e, t) {
          var r = f(0, t)
          return r ? o.e.selectByScreenName(e, r) : null
        },
        v = function (e, t) {
          var r = f(0, t)
          return r ? o.e.selectIdByScreenName(e, r) : null
        },
        E = function (e, t) {
          var r = f(0, t)
          return r ? o.e.selectIsUserNotFound(e, r) : null
        },
        _ = function (e, t) {
          var r
          return null === (r = t.location.state) || void 0 === r ? void 0 : r.revueAccountId
        },
        g = function (e, t) {
          var r
          return null === (r = t.location.state) || void 0 === r ? void 0 : r.newsletterTitle
        },
        I = function (e, t) {
          var r
          return null === (r = t.location.state) || void 0 === r ? void 0 : r.sampleUrl
        },
        y = function (e, t) {
          var r
          return null === (r = t.location.state) || void 0 === r ? void 0 : r.profileUrl
        },
        T = function (e, t) {
          var r
          return null === (r = t.location.state) || void 0 === r ? void 0 : r.subscribeSource
        },
        w = function (e, t) {
          var r = _(0, t)
          return r ? Object(s.c)(e, r) : void 0
        },
        S = function (e, t) {
          var r = v(e, t)
          return r ? Object(m.f)(e, { userId: r }) : void 0
        },
        L = function (e, t) {
          if (f(0, t)) {
            var r = (function (e, t) {
                var r = v(e, t)
                return r ? Object(m.e)(e, r) : void 0
              })(e, t),
              n = (function (e, t) {
                var r = f(0, t)
                return r ? o.e.selectFetchStatusByScreenName(e, r) : void 0
              })(e, t)
            return Object(u.d)(r, n)
          }
          return _(0, t)
            ? (function (e, t) {
                var r = _(0, t)
                return r ? Object(s.b)(e, r) : void 0
              })(e, t)
            : u.a.NONE
        },
        h = Object(i.a)()
          .propsFromState(function () {
            return {
              fetchStatus: L,
              isUserNotFound: E,
              newsletter: S,
              newsletterTitleFromLocationState: g,
              profileUrlFromLocationState: y,
              revueAccountIdFromLocationState: _,
              revueCardContext: w,
              screenName: f,
              sampleUrlFromLocationState: I,
              subscribeSource: T,
              user: b,
              userId: v,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              r,
              n,
              a = e.fetchStatus,
              c = e.isUserNotFound,
              o = e.newsletter,
              i = e.newsletterTitleFromLocationState,
              l = e.profileUrlFromLocationState,
              s = e.revueAccountIdFromLocationState,
              u = e.revueCardContext,
              m = e.sampleUrlFromLocationState,
              d = e.screenName,
              f = e.subscribeSource,
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
                    null === (r = o.data) || void 0 === r || null === (n = r.sample_issue) || void 0 === n
                      ? void 0
                      : n.sample_issue_url,
                  subscribeSource: p.TWITTER_PROFILE,
                })
              : u &&
                s &&
                (t = {
                  maskedEmail: u.user_masked_email,
                  newsletterTitle: i,
                  profileUrl: l,
                  revueAccountId: s,
                  revuePrivacyUrl: u.terms_of_service.privacy_policy_url,
                  revueTermsUrl: u.terms_of_service.terms_of_service_url,
                  sampleUrl: m,
                  subscribeSource: f,
                })
            return {
              fetchStatus: a,
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
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'NEWSLETTER_SUBSCRIBE_SHEET',
              ),
              fetchOneUserByScreenNameIfNeeded: o.e.fetchOneByScreenNameIfNeeded,
              fetchRevueAccount: s.a,
              fetchUserBizProfile: m.b,
            }
          })
          .withAnalytics({ page: 'profile' }),
        O = r('v//M'),
        k = r('jHSc'),
        N = r('3XMw'),
        A = r.n(N),
        B = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        U = r.n(B),
        C = (r('2G9S'), r('uFXj'), r('hBvt'), r('v6aA')),
        F = r('1YZw'),
        R = Object(i.a)().propsFromActions(function () {
          return {
            addToast: F.b,
            createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
              'NEWSLETTER_SUBSCRIBE_SHEET',
            ),
            subscribe: m.h,
          }
        }),
        M = r('rHpw'),
        P = r('t62R'),
        j = r('/yvb'),
        H = r('Qwev'),
        x = r('cHvH'),
        W = r('W55q'),
        z = r('i4Oy'),
        D = r('MWbm')
      function X(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? X(Object(r), !0).forEach(function (t) {
                U()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : X(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var G = A.a.cfd2f35d,
        K = A.a.ia5e7487,
        V = A.a.jdfb861a,
        q = A.a.b6e3edd8,
        J = A.a.cd9a90aa,
        Q = A.a.g30241f5,
        Y = A.a.fcd1fdda,
        Z = A.a.a976a91d,
        ee = A.a.ab0deccf,
        te = A.a.h3281ce9,
        re = A.a.f05df263,
        ne = A.a.b78d403f,
        ae = A.a.d1bc4330,
        ce = A.a.b6f9f574,
        oe = M.a.create(function (e) {
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
        ie = R(function (e) {
          var t = e.addToast,
            r = e.createLocalApiErrorHandler,
            n = e.currentPage,
            o = e.newsletterMetadata,
            i = e.onClose,
            l = e.scribeAction,
            s = e.setCurrentPage,
            u = e.subscribe,
            m = c.useState(void 0),
            f = a()(m, 2),
            b = f[0],
            v = f[1],
            E = c
              .useContext(C.a)
              .featureSwitches.isTrue('responsive_web_newsletters_subscribe_double_opt_in_removal_enabled'),
            _ = o.maskedEmail,
            g = o.newsletterTitle,
            I = o.profileUrl,
            y = o.revueAccountId,
            T = o.revuePrivacyUrl,
            w = o.revueTermsUrl,
            S = o.sampleUrl,
            L = o.subscribeSource,
            h = function () {
              return z.a.get('window').width <= M.a.theme.breakpoints.small ? W.a : W.b
            },
            O = function (e) {
              return (function (e, t) {
                return ''.concat(e, '&client=').concat(t)
              })(e, h())
            },
            k = I && O(I),
            N = S && ''.concat(O(S), '&element=read-sample-issue'),
            B = function (e) {
              return function () {
                l('click', e)
              }
            },
            U = function () {
              N && l('click', 'sample_issue', N)
            },
            F = n === d.INITIAL_WITH_EMAIL,
            R = n === d.INITIAL_WITHOUT_EMAIL,
            X = n === d.CONFIRM,
            ie = n === d.SUBSCRIBED,
            le = L === p.TWITTER_PROFILE,
            se = function (e, t) {
              return c.createElement(
                P.b,
                {
                  align: ie ? 'center' : 'left',
                  color: 'normal',
                  size: 'title4',
                  style: t ? oe.titleMobile : oe.titleDesktop,
                  weight: 'bold',
                },
                e,
              )
            },
            ue = function () {
              return c.createElement(P.b, { color: 'gray700', dir: 'ltr', weight: E ? 'normal' : 'bold' }, _)
            },
            me =
              E && _ && k
                ? c.createElement(
                    D.a,
                    null,
                    c.createElement(
                      P.b,
                      { color: 'gray700', size: 'subtext1', style: oe.marginTopLarge },
                      c.createElement(
                        A.a.I18NFormatMessage,
                        { $i18n: 'gd686e7e' },
                        c.createElement(ue, null),
                        c.createElement(
                          P.b,
                          {
                            color: 'buttonBlack',
                            link: ''.concat(k, '&element=different-email'),
                            onPress: B('different_email'),
                            withUnderline: !0,
                          },
                          A.a.g12413e9,
                        ),
                      ),
                    ),
                    c.createElement(
                      P.b,
                      { color: 'gray700', size: 'subtext1', style: oe.marginTopSubtext },
                      c.createElement(
                        A.a.I18NFormatMessage,
                        { $i18n: 'b9c12eee' },
                        c.createElement(
                          P.b,
                          { color: 'buttonBlack', link: w, onPress: B('revue_terms'), withUnderline: !0 },
                          A.a.jc9f083d,
                        ),
                        c.createElement(
                          P.b,
                          { color: 'buttonBlack', link: T, onPress: B('revue_privacy'), withUnderline: !0 },
                          A.a.h75d5bd5,
                        ),
                        g || '',
                      ),
                    ),
                  )
                : c.createElement(
                    P.b,
                    { color: 'gray700', style: oe.marginTop },
                    c.createElement(
                      A.a.I18NFormatMessage,
                      { $i18n: 'efdeb336' },
                      c.createElement(
                        P.b,
                        { color: 'buttonBlack', link: w, onPress: B('revue_terms'), withUnderline: !0 },
                        A.a.d1c4aeaf,
                      ),
                      c.createElement(
                        P.b,
                        { color: 'buttonBlack', link: T, onPress: B('revue_privacy'), withUnderline: !0 },
                        A.a.a5d264ec,
                      ),
                    ),
                  ),
            de = function (e) {
              return c.createElement(
                c.Fragment,
                null,
                se(ce, e),
                E
                  ? null
                  : c.createElement(
                      D.a,
                      { style: oe.marginBottom },
                      c.createElement(
                        P.b,
                        { color: 'gray700' },
                        c.createElement(
                          A.a.I18NFormatMessage,
                          { $i18n: 'bc543cd9' },
                          g || '',
                          c.createElement(ue, null),
                        ),
                      ),
                      me,
                    ),
                c.createElement(
                  j.a,
                  {
                    onClick: function () {
                      if (y) {
                        v(!0), l('click', 'subscribe_btn')
                        var e = $($({ revueAccountId: y, doubleOptIn: !E }, L ? { via: L } : null), {}, { client: h() })
                        u(e)
                          .then(function (e) {
                            var r,
                              n =
                                null == e || null === (r = e.subscribe_to_revue_account) || void 0 === r
                                  ? void 0
                                  : r.subscription_status
                            E ? (t({ text: ne }), i()) : (n === W.c.Subscribed ? s(d.SUBSCRIBED) : s(d.CONFIRM), v(!1)),
                              l('impression', 'success_msg')
                          })
                          .catch(function (e) {
                            var t = r({ showToast: !0 })
                            l('impression', 'error_msg'), v(!1), t(e)
                          })
                      }
                    },
                    size: 'xLarge',
                    style: !E && oe.marginTop,
                    type: 'primaryFilled',
                  },
                  E ? V : ee,
                ),
                N && le
                  ? c.createElement(
                      j.a,
                      { link: N, onClick: U, size: 'xLarge', style: oe.marginTop, type: 'primaryOutlined' },
                      Y,
                    )
                  : null,
                E && me,
              )
            },
            pe = function (e) {
              return c.createElement(
                D.a,
                { style: e ? oe.mobilePadding : oe.padding },
                F ? de(e) : null,
                R
                  ? (function (e) {
                      return c.createElement(
                        c.Fragment,
                        null,
                        se(J, e),
                        c.createElement(P.b, { color: 'gray700', style: oe.marginBottom }, Q),
                        k
                          ? c.createElement(
                              j.a,
                              {
                                link: ''.concat(k, '&element=subscribe-through-revue'),
                                onClick: B('subscribe_revue_btn'),
                                size: 'xLarge',
                                style: oe.marginTop,
                                type: 'primaryFilled',
                              },
                              ae,
                            )
                          : null,
                        c.createElement(
                          j.a,
                          { onClick: i, size: 'xLarge', style: oe.marginTop, type: 'primaryOutlined' },
                          G,
                        ),
                      )
                    })(e)
                  : null,
                X
                  ? (function (e) {
                      return c.createElement(
                        c.Fragment,
                        null,
                        se(V, e),
                        c.createElement(P.b, { color: 'gray700', style: oe.marginBottom }, q),
                        c.createElement(
                          j.a,
                          { onClick: i, size: 'xLarge', style: oe.marginTop, type: 'primaryOutlined' },
                          K,
                        ),
                      )
                    })(e)
                  : null,
                ie
                  ? c.createElement(
                      c.Fragment,
                      null,
                      se(te),
                      c.createElement(P.b, { align: 'center', color: 'gray700' }, re),
                      k
                        ? c.createElement(
                            j.a,
                            { link: k, size: 'xLarge', style: oe.marginTopLarge, type: 'primaryFilled' },
                            Z,
                          )
                        : null,
                      c.createElement(
                        j.a,
                        { onClick: i, size: 'xLarge', style: oe.marginTop, type: 'primaryOutlined' },
                        G,
                      ),
                    )
                  : null,
              )
            }
          return b
            ? c.createElement(H.a, { style: oe.activityIndicator })
            : c.createElement(x.a, null, function (e) {
                var t = e.windowWidth <= M.a.theme.breakpoints.small
                return pe(t)
              })
        }),
        le = r('5FtR'),
        se = r('Rp9C'),
        ue = A.a.i9028824,
        me = function (e) {
          var t,
            r,
            n,
            o = e.analytics,
            i = e.createLocalApiErrorHandler,
            l = e.fetchOneUserByScreenNameIfNeeded,
            s = e.fetchRevueAccount,
            m = e.fetchStatus,
            f = e.fetchUserBizProfile,
            b = e.history,
            v = e.isUserNotFound,
            E = e.location,
            _ = e.newsletterMetadata,
            g = e.revueAccountIdFromLocationState,
            I = e.screenName,
            y = e.user,
            T = e.userId,
            w = c.useState(void 0),
            S = a()(w, 2),
            L = S[0],
            h = S[1]
          c.useEffect(
            function () {
              I && l(I).catch(i())
            },
            [i, l, I],
          )
          var N = c.useCallback(
            function () {
              T && f(T).catch(i())
            },
            [i, f, T],
          )
          c.useEffect(
            function () {
              N()
            },
            [N],
          )
          var A = c.useCallback(
            function () {
              g && s(g).catch(i())
            },
            [i, s, g],
          )
          c.useEffect(
            function () {
              A()
            },
            [A],
          ),
            c.useEffect(
              function () {
                var e = null != _ && _.maskedEmail ? d.INITIAL_WITH_EMAIL : d.INITIAL_WITHOUT_EMAIL
                h(e)
              },
              [_],
            )
          var B = c.useCallback(
              function () {
                switch (L) {
                  case d.INITIAL_WITH_EMAIL:
                    return 'newsletter_subscribe'
                  case d.INITIAL_WITHOUT_EMAIL:
                    return 'newsletter_email_needed'
                  case d.CONFIRM:
                    return 'newsletter_confirm'
                  case d.SUBSCRIBED:
                    return 'newsletter_already_subscribed'
                  default:
                    return
                }
              },
              [L],
            ),
            U = c.useCallback(
              function (e, t, r) {
                if (null != _ && _.revueAccountId) {
                  var n = B(),
                    a = { id: _.revueAccountId }
                  if (y) {
                    var c = se.a.getUserItem(y),
                      i = c.is_user_follows_viewer,
                      l = c.is_viewer_follows_user
                    ;(a.is_user_follows_viewer = i), (a.is_viewer_follows_user = l)
                  }
                  _.subscribeSource && (a.newsletter_details = { subscribe_source: _.subscribeSource })
                  var s = _.subscribeSource === p.TWITTER_PROFILE ? 'profile_modules' : void 0
                  o.scribe({ action: e, section: s, component: n, element: t, data: { items: [a], url: r } })
                }
              },
              [o, B, _, y],
            )
          c.useEffect(
            function () {
              if (L) {
                var e = L === d.SUBSCRIBED ? 'youre_in_the_loop' : void 0
                U('impression', e)
              }
            },
            [L],
          )
          var C = m === u.a.LOADED || m === u.a.FAILED,
            F =
              I &&
              (null === (t = E.state) ||
              void 0 === t ||
              null === (r = t.previousPath) ||
              void 0 === r ||
              null === (n = r.includes) ||
              void 0 === n
                ? void 0
                : n.call(r, '/'.concat(I))),
            R = function () {
              L === d.CONFIRM ? U('click', 'done') : U('dismiss'), b.goBack()
            }
          return (!I || (I && C && v)) && (!g || (g && C && !_))
            ? c.createElement(le.a, { to: '/home' })
            : I && C && !F
            ? c.createElement(le.a, { to: '/'.concat(I) })
            : c.createElement(O.a, {
                accessibilityLabel: ue,
                fetchStatus: m,
                onRequestRetry: I ? N : A,
                render: function () {
                  return _
                    ? c.createElement(
                        k.b,
                        { history: b, onBackClick: R, withBottomBorder: !1 },
                        c.createElement(ie, {
                          currentPage: L,
                          newsletterMetadata: _,
                          onClose: R,
                          scribeAction: U,
                          setCurrentPage: h,
                        }),
                      )
                    : null
                },
              })
        },
        de = h(me)
      t.default = de
    },
    s9gk: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'NewslettersScreen', function () {
          return T
        })
      r('2G9S')
      var n = r('ERkP'),
        a = r('jHSc'),
        c = r.p + 'logo_revue.31c21585.svg',
        o = r('7N4s'),
        i = r('t62R'),
        l = r('/yvb'),
        s = r('rHpw'),
        u = r('3XMw'),
        m = r.n(u),
        d = r('U+bB'),
        p = r('MWbm'),
        f = m.a.d0a51fb1,
        b = m.a.e217e03c,
        v = m.a.fadf0f86,
        E = m.a.f8df10b9,
        _ = m.a.hb47d72b,
        g = m.a.dcbba9e7,
        I = m.a.bf916530,
        y = m.a.af5cd00d,
        T = function (e) {
          var t = n.useContext(o.b).isModal
          return n.createElement(
            a.b,
            { documentTitle: f, history: e.history, withBottomBorder: !1 },
            n.createElement(
              p.a,
              { style: t ? w.root : w.mobileRoot },
              n.createElement(p.a, { style: w.logoContainer }, n.createElement(d.a, { source: c, style: w.revueLogo })),
              n.createElement(
                p.a,
                { style: w.contentContainer },
                n.createElement(i.b, { size: 'title4', style: w.newsletterHeader, weight: 'bold' }, b),
                n.createElement(
                  i.b,
                  { style: w.descriptionContainer },
                  n.createElement(
                    m.a.I18NFormatMessage,
                    { $i18n: 'j28cabeb' },
                    n.createElement(i.b, { link: '/revue' }, m.a.h8041a49),
                  ),
                ),
                n.createElement(
                  p.a,
                  { style: w.featuresList },
                  n.createElement(
                    i.b,
                    null,
                    n.createElement(
                      'ul',
                      null,
                      n.createElement('li', null, v),
                      n.createElement('li', null, E),
                      n.createElement('li', null, _),
                      n.createElement('li', null, g),
                      n.createElement('li', null, I),
                    ),
                  ),
                ),
                n.createElement(
                  l.a,
                  {
                    accessibilityLabel: y,
                    hoverLabel: { label: y },
                    link: 'https://www.getrevue.co?utm_source=twitter-nav&utm_campaign=announcement-modal&utm_content=find-out-more',
                    size: 'xLarge',
                    style: w.moreButton,
                    type: 'brandFilled',
                  },
                  y,
                ),
              ),
            ),
          )
        },
        w = s.a.create(function (e) {
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
      t.default = T
    },
  },
])
//# sourceMappingURL=WIPED
