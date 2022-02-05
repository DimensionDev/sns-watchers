;(window.webpackJsonp = window.webpackJsonp || []).push([
  [69],
  {
    dpj4: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'NewsletterSubscribeSheet', function () {
          return de
        })
      var a = r('ddV6'),
        n = r.n(a),
        c = (r('jQ3i'), r('x4t0'), r('ERkP')),
        o = r.n(c),
        i = (r('WNMA'), r('KqXw'), r('G6rE')),
        l = r('rxPX'),
        s = r('0KEI'),
        u = r('+WwN'),
        m = r('kGix'),
        d = r('YeSc'),
        p =
          (r('yH/f'),
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
          var r, a
          return null == t || null === (r = t.match) || void 0 === r || null === (a = r.params) || void 0 === a
            ? void 0
            : a.screenName
        },
        v = function (e, t) {
          var r = b(0, t)
          return r ? i.e.selectByScreenName(e, r) : null
        },
        E = function (e, t) {
          var r = b(0, t)
          return r ? i.e.selectIdByScreenName(e, r) : null
        },
        _ = function (e, t) {
          var r = b(0, t)
          return r ? i.e.selectIsUserNotFound(e, r) : null
        },
        g = function (e, t) {
          var r
          return null === (r = t.location.state) || void 0 === r ? void 0 : r.revueAccountId
        },
        I = function (e, t) {
          var r
          return null === (r = t.location.state) || void 0 === r ? void 0 : r.newsletterTitle
        },
        y = function (e, t) {
          var r
          return null === (r = t.location.state) || void 0 === r ? void 0 : r.sampleUrl
        },
        T = function (e, t) {
          var r
          return null === (r = t.location.state) || void 0 === r ? void 0 : r.profileUrl
        },
        w = function (e, t) {
          var r
          return null === (r = t.location.state) || void 0 === r ? void 0 : r.subscribeSource
        },
        S = function (e, t) {
          var r = g(0, t)
          return r ? Object(u.c)(e, r) : void 0
        },
        L = function (e, t) {
          var r = E(e, t)
          return r ? Object(d.f)(e, { userId: r }) : void 0
        },
        h = function (e, t) {
          if (b(0, t)) {
            var r = (function (e, t) {
                var r = E(e, t)
                return r ? Object(d.e)(e, r) : void 0
              })(e, t),
              a = (function (e, t) {
                var r = b(0, t)
                return r ? i.e.selectFetchStatusByScreenName(e, r) : void 0
              })(e, t)
            return Object(m.d)(r, a)
          }
          return g(0, t)
            ? (function (e, t) {
                var r = g(0, t)
                return r ? Object(u.b)(e, r) : void 0
              })(e, t)
            : m.a.NONE
        },
        O = Object(l.a)()
          .propsFromState(function () {
            return {
              fetchStatus: h,
              isUserNotFound: _,
              newsletter: L,
              newsletterTitleFromLocationState: I,
              profileUrlFromLocationState: T,
              revueAccountIdFromLocationState: g,
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
              r,
              a,
              n = e.fetchStatus,
              c = e.isUserNotFound,
              o = e.newsletter,
              i = e.newsletterTitleFromLocationState,
              l = e.profileUrlFromLocationState,
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
                    null === (r = o.data) || void 0 === r || null === (a = r.sample_issue) || void 0 === a
                      ? void 0
                      : a.sample_issue_url,
                  subscribeSource: f.TWITTER_PROFILE,
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
              fetchOneUserByScreenNameIfNeeded: i.e.fetchOneByScreenNameIfNeeded,
              fetchRevueAccount: u.a,
              fetchUserBizProfile: d.b,
            }
          })
          .withAnalytics({ page: 'profile' }),
        k = r('v//M'),
        N = r('jHSc'),
        A = r('3XMw'),
        B = r.n(A),
        U = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        C = r.n(U),
        F = (r('2G9S'), r('uFXj'), r('hBvt'), r('v6aA')),
        R = r('1YZw'),
        M = Object(l.a)().propsFromActions(function () {
          return {
            addToast: R.b,
            createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
              'NEWSLETTER_SUBSCRIBE_SHEET',
            ),
            subscribe: d.h,
          }
        }),
        P = r('rHpw'),
        j = r('t62R'),
        H = r('/yvb'),
        x = r('Qwev'),
        W = r('cHvH'),
        z = r('W55q'),
        D = r('i4Oy'),
        X = r('MWbm')
      function $(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, a)
        }
        return r
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $(Object(r), !0).forEach(function (t) {
                C()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : $(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var K = B.a.cfd2f35d,
        V = B.a.ia5e7487,
        q = B.a.jdfb861a,
        J = B.a.b6e3edd8,
        Q = B.a.cd9a90aa,
        Y = B.a.g30241f5,
        Z = B.a.fcd1fdda,
        ee = B.a.a976a91d,
        te = B.a.ab0deccf,
        re = B.a.h3281ce9,
        ae = B.a.f05df263,
        ne = B.a.b78d403f,
        ce = B.a.d1bc4330,
        oe = B.a.b6f9f574,
        ie = P.a.create(function (e) {
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
        le = M(function (e) {
          var t = e.addToast,
            r = e.createLocalApiErrorHandler,
            a = e.currentPage,
            c = e.newsletterMetadata,
            i = e.onClose,
            l = e.scribeAction,
            s = e.setCurrentPage,
            u = e.subscribe,
            m = o.a.useState(void 0),
            d = n()(m, 2),
            b = d[0],
            v = d[1],
            E = o.a
              .useContext(F.a)
              .featureSwitches.isTrue('responsive_web_newsletters_subscribe_double_opt_in_removal_enabled'),
            _ = c.maskedEmail,
            g = c.newsletterTitle,
            I = c.profileUrl,
            y = c.revueAccountId,
            T = c.revuePrivacyUrl,
            w = c.revueTermsUrl,
            S = c.sampleUrl,
            L = c.subscribeSource,
            h = function () {
              return D.a.get('window').width <= P.a.theme.breakpoints.small ? z.a : z.b
            },
            O = function (e) {
              return (function (e, t) {
                return ''.concat(e, '&client=').concat(t)
              })(e, h())
            },
            k = I && O(I),
            N = S && ''.concat(O(S), '&element=read-sample-issue'),
            A = function (e) {
              return function () {
                l('click', e)
              }
            },
            U = function () {
              N && l('click', 'sample_issue', N)
            },
            C = a === p.INITIAL_WITH_EMAIL,
            R = a === p.INITIAL_WITHOUT_EMAIL,
            M = a === p.CONFIRM,
            $ = a === p.SUBSCRIBED,
            le = L === f.TWITTER_PROFILE,
            se = function (e, t) {
              return o.a.createElement(
                j.b,
                {
                  align: $ ? 'center' : 'left',
                  color: 'normal',
                  size: 'title4',
                  style: t ? ie.titleMobile : ie.titleDesktop,
                  weight: 'bold',
                },
                e,
              )
            },
            ue = function () {
              return o.a.createElement(j.b, { color: 'gray700', dir: 'ltr', weight: E ? 'normal' : 'bold' }, _)
            },
            me =
              E && _ && k
                ? o.a.createElement(
                    X.a,
                    null,
                    o.a.createElement(
                      j.b,
                      { color: 'gray700', size: 'subtext1', style: ie.marginTopLarge },
                      o.a.createElement(
                        B.a.I18NFormatMessage,
                        { $i18n: 'gd686e7e' },
                        o.a.createElement(ue, null),
                        o.a.createElement(
                          j.b,
                          {
                            color: 'buttonBlack',
                            link: ''.concat(k, '&element=different-email'),
                            onPress: A('different_email'),
                            withUnderline: !0,
                          },
                          B.a.g12413e9,
                        ),
                      ),
                    ),
                    o.a.createElement(
                      j.b,
                      { color: 'gray700', size: 'subtext1', style: ie.marginTopSubtext },
                      o.a.createElement(
                        B.a.I18NFormatMessage,
                        { $i18n: 'b9c12eee' },
                        o.a.createElement(
                          j.b,
                          { color: 'buttonBlack', link: w, onPress: A('revue_terms'), withUnderline: !0 },
                          B.a.jc9f083d,
                        ),
                        o.a.createElement(
                          j.b,
                          { color: 'buttonBlack', link: T, onPress: A('revue_privacy'), withUnderline: !0 },
                          B.a.h75d5bd5,
                        ),
                        g || '',
                      ),
                    ),
                  )
                : o.a.createElement(
                    j.b,
                    { color: 'gray700', style: ie.marginTop },
                    o.a.createElement(
                      B.a.I18NFormatMessage,
                      { $i18n: 'efdeb336' },
                      o.a.createElement(
                        j.b,
                        { color: 'buttonBlack', link: w, onPress: A('revue_terms'), withUnderline: !0 },
                        B.a.d1c4aeaf,
                      ),
                      o.a.createElement(
                        j.b,
                        { color: 'buttonBlack', link: T, onPress: A('revue_privacy'), withUnderline: !0 },
                        B.a.a5d264ec,
                      ),
                    ),
                  ),
            de = function (e) {
              return o.a.createElement(
                o.a.Fragment,
                null,
                se(oe, e),
                E
                  ? null
                  : o.a.createElement(
                      X.a,
                      { style: ie.marginBottom },
                      o.a.createElement(
                        j.b,
                        { color: 'gray700' },
                        o.a.createElement(
                          B.a.I18NFormatMessage,
                          { $i18n: 'bc543cd9' },
                          g || '',
                          o.a.createElement(ue, null),
                        ),
                      ),
                      me,
                    ),
                o.a.createElement(
                  H.a,
                  {
                    onClick: function () {
                      if (y) {
                        v(!0), l('click', 'subscribe_btn')
                        var e = G(G({ revueAccountId: y, doubleOptIn: !E }, L ? { via: L } : null), {}, { client: h() })
                        u(e)
                          .then(function (e) {
                            var r,
                              a =
                                null == e || null === (r = e.subscribe_to_revue_account) || void 0 === r
                                  ? void 0
                                  : r.subscription_status
                            E ? (t({ text: ne }), i()) : (a === z.c.Subscribed ? s(p.SUBSCRIBED) : s(p.CONFIRM), v(!1)),
                              l('impression', 'success_msg')
                          })
                          .catch(function (e) {
                            var t = r({ showToast: !0 })
                            l('impression', 'error_msg'), v(!1), t(e)
                          })
                      }
                    },
                    size: 'xLarge',
                    style: !E && ie.marginTop,
                    type: 'primaryFilled',
                  },
                  E ? q : te,
                ),
                N && le
                  ? o.a.createElement(
                      H.a,
                      { link: N, onClick: U, size: 'xLarge', style: ie.marginTop, type: 'primaryOutlined' },
                      Z,
                    )
                  : null,
                E && me,
              )
            },
            pe = function (e) {
              return o.a.createElement(
                X.a,
                { style: e ? ie.mobilePadding : ie.padding },
                C ? de(e) : null,
                R
                  ? (function (e) {
                      return o.a.createElement(
                        o.a.Fragment,
                        null,
                        se(Q, e),
                        o.a.createElement(j.b, { color: 'gray700', style: ie.marginBottom }, Y),
                        k
                          ? o.a.createElement(
                              H.a,
                              {
                                link: ''.concat(k, '&element=subscribe-through-revue'),
                                onClick: A('subscribe_revue_btn'),
                                size: 'xLarge',
                                style: ie.marginTop,
                                type: 'primaryFilled',
                              },
                              ce,
                            )
                          : null,
                        o.a.createElement(
                          H.a,
                          { onClick: i, size: 'xLarge', style: ie.marginTop, type: 'primaryOutlined' },
                          K,
                        ),
                      )
                    })(e)
                  : null,
                M
                  ? (function (e) {
                      return o.a.createElement(
                        o.a.Fragment,
                        null,
                        se(q, e),
                        o.a.createElement(j.b, { color: 'gray700', style: ie.marginBottom }, J),
                        o.a.createElement(
                          H.a,
                          { onClick: i, size: 'xLarge', style: ie.marginTop, type: 'primaryOutlined' },
                          V,
                        ),
                      )
                    })(e)
                  : null,
                $
                  ? o.a.createElement(
                      o.a.Fragment,
                      null,
                      se(re),
                      o.a.createElement(j.b, { align: 'center', color: 'gray700' }, ae),
                      k
                        ? o.a.createElement(
                            H.a,
                            { link: k, size: 'xLarge', style: ie.marginTopLarge, type: 'primaryFilled' },
                            ee,
                          )
                        : null,
                      o.a.createElement(
                        H.a,
                        { onClick: i, size: 'xLarge', style: ie.marginTop, type: 'primaryOutlined' },
                        K,
                      ),
                    )
                  : null,
              )
            }
          return b
            ? o.a.createElement(x.a, { style: ie.activityIndicator })
            : o.a.createElement(W.a, null, function (e) {
                var t = e.windowWidth <= P.a.theme.breakpoints.small
                return pe(t)
              })
        }),
        se = r('5FtR'),
        ue = r('Rp9C'),
        me = B.a.i9028824,
        de = function (e) {
          var t,
            r,
            a,
            c = e.analytics,
            i = e.createLocalApiErrorHandler,
            l = e.fetchOneUserByScreenNameIfNeeded,
            s = e.fetchRevueAccount,
            u = e.fetchStatus,
            d = e.fetchUserBizProfile,
            b = e.history,
            v = e.isUserNotFound,
            E = e.location,
            _ = e.newsletterMetadata,
            g = e.revueAccountIdFromLocationState,
            I = e.screenName,
            y = e.user,
            T = e.userId,
            w = o.a.useState(void 0),
            S = n()(w, 2),
            L = S[0],
            h = S[1]
          o.a.useEffect(
            function () {
              I && l(I).catch(i())
            },
            [i, l, I],
          )
          var O = o.a.useCallback(
            function () {
              T && d(T).catch(i())
            },
            [i, d, T],
          )
          o.a.useEffect(
            function () {
              O()
            },
            [O],
          )
          var A = o.a.useCallback(
            function () {
              g && s(g).catch(i())
            },
            [i, s, g],
          )
          o.a.useEffect(
            function () {
              A()
            },
            [A],
          ),
            o.a.useEffect(
              function () {
                var e = null != _ && _.maskedEmail ? p.INITIAL_WITH_EMAIL : p.INITIAL_WITHOUT_EMAIL
                h(e)
              },
              [_],
            )
          var B = o.a.useCallback(
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
            U = o.a.useCallback(
              function (e, t, r) {
                if (null != _ && _.revueAccountId) {
                  var a = B(),
                    n = { id: _.revueAccountId }
                  if (y) {
                    var o = ue.a.getUserItem(y),
                      i = o.is_user_follows_viewer,
                      l = o.is_viewer_follows_user
                    ;(n.is_user_follows_viewer = i), (n.is_viewer_follows_user = l)
                  }
                  _.subscribeSource && (n.newsletter_details = { subscribe_source: _.subscribeSource })
                  var s = _.subscribeSource === f.TWITTER_PROFILE ? 'profile_modules' : void 0
                  c.scribe({ action: e, section: s, component: a, element: t, data: { items: [n], url: r } })
                }
              },
              [c, B, _, y],
            )
          o.a.useEffect(
            function () {
              if (L) {
                var e = L === p.SUBSCRIBED ? 'youre_in_the_loop' : void 0
                U('impression', e)
              }
            },
            [L],
          )
          var C = u === m.a.LOADED || u === m.a.FAILED,
            F =
              I &&
              (null === (t = E.state) ||
              void 0 === t ||
              null === (r = t.previousPath) ||
              void 0 === r ||
              null === (a = r.includes) ||
              void 0 === a
                ? void 0
                : a.call(r, '/'.concat(I))),
            R = function () {
              L === p.CONFIRM ? U('click', 'done') : U('dismiss'), b.goBack()
            }
          return (!I || (I && C && v)) && (!g || (g && C && !_))
            ? o.a.createElement(se.a, { to: '/home' })
            : I && C && !F
            ? o.a.createElement(se.a, { to: '/'.concat(I) })
            : o.a.createElement(k.a, {
                accessibilityLabel: me,
                fetchStatus: u,
                onRequestRetry: I ? O : A,
                render: function () {
                  return _
                    ? o.a.createElement(
                        N.b,
                        { history: b, onBackClick: R, withBottomBorder: !1 },
                        o.a.createElement(le, {
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
        pe = O(de)
      t.default = pe
    },
    s9gk: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'NewslettersScreen', function () {
          return w
        })
      r('2G9S')
      var a = r('ERkP'),
        n = r.n(a),
        c = r('jHSc'),
        o = r.p + 'logo_revue.31c21585.svg',
        i = r('7N4s'),
        l = r('t62R'),
        s = r('/yvb'),
        u = r('rHpw'),
        m = r('3XMw'),
        d = r.n(m),
        p = r('U+bB'),
        f = r('MWbm'),
        b = d.a.d0a51fb1,
        v = d.a.e217e03c,
        E = d.a.fadf0f86,
        _ = d.a.f8df10b9,
        g = d.a.hb47d72b,
        I = d.a.dcbba9e7,
        y = d.a.bf916530,
        T = d.a.af5cd00d,
        w = function (e) {
          var t = n.a.useContext(i.b).isModal
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
                n.a.createElement(l.b, { size: 'title4', style: S.newsletterHeader, weight: 'bold' }, v),
                n.a.createElement(
                  l.b,
                  { style: S.descriptionContainer },
                  n.a.createElement(
                    d.a.I18NFormatMessage,
                    { $i18n: 'j28cabeb' },
                    n.a.createElement(l.b, { link: '/revue' }, d.a.h8041a49),
                  ),
                ),
                n.a.createElement(
                  f.a,
                  { style: S.featuresList },
                  n.a.createElement(
                    l.b,
                    null,
                    n.a.createElement(
                      'ul',
                      null,
                      n.a.createElement('li', null, E),
                      n.a.createElement('li', null, _),
                      n.a.createElement('li', null, g),
                      n.a.createElement('li', null, I),
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
