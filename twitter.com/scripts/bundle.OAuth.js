;(window.webpackJsonp = window.webpackJsonp || []).push([
  [76],
  {
    '5xYW': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'OAuthConsentScreen', function () {
          return we
        })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        l = a('1Pcy'),
        c = a.n(l),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        p = a.n(u),
        h = a('KEM+'),
        m = a.n(h),
        y = (a('2G9S'), a('ho0z'), a('tQbP'), a('LW0h'), a('7x/C'), a('uFXj'), a('ERkP')),
        g = a.n(y),
        C = a('yiKp'),
        v = a.n(C),
        b = (a('yH/f'), a('oEOe')),
        f = a('kGix'),
        E = a('Ssj5'),
        w = 'oAuthConsent',
        S = Object.freeze({
          REQUEST: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_REQUEST',
          SUCCESS: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_SUCCESS',
          FAILURE: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_FAILURE',
        }),
        x = Object.freeze({
          REQUEST: 'rweb/oAuthConsent/POST_CONSENT_REQUEST',
          SUCCESS: 'rweb/oAuthConsent/POST_CONSENT_SUCCESS',
          FAILURE: 'rweb/oAuthConsent/POST_CONSENT_FAILURE',
        }),
        k = 'rweb/oAuthConsent/FETCH_FAILED',
        L = { consentMetadata: void 0, fetchStatus: f.a.NONE, postStatus: f.a.NONE, redirectUri: void 0 }
      function _() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case S.REQUEST:
            return v()(v()({}, e), {}, { fetchStatus: f.a.LOADING })
          case S.FAILURE:
            return v()(v()({}, e), {}, { fetchStatus: f.a.FAILED })
          case S.SUCCESS:
            return t.payload ? v()(v()({}, e), {}, { consentMetadata: t.payload, fetchStatus: f.a.LOADED }) : e
          case k:
            return t.payload ? v()(v()({}, e), {}, { fetchStatus: f.a.FAILED, redirectUri: t.payload.redirectUri }) : e
          case x.REQUEST:
            return v()(v()({}, e), {}, { postStatus: f.a.LOADING })
          case x.FAILURE:
            return v()(v()({}, e), {}, { postStatus: f.a.FAILED })
          case x.SUCCESS:
            return t.payload ? v()(v()({}, e), {}, { redirectUri: t.payload.redirect_uri, postStatus: f.a.LOADED }) : e
          default:
            return e
        }
      }
      E.a.register(m()({}, w, _))
      var T = function (e) {
          return e.oAuthConsent.consentMetadata || {}
        },
        I = function (e) {
          return e.oAuthConsent.redirectUri || ''
        },
        A = function (e) {
          return e.oAuthConsent.fetchStatus
        },
        O = function (e) {
          return e.oAuthConsent.postStatus
        },
        M = function (e) {
          return function (t, a, n) {
            var r = n.api
            return b.b(t, { params: e, request: r.OAuth.fetch })({ actionTypes: S, context: 'FETCH_CONSENT_METADATA' })
          }
        },
        F = function (e) {
          return function (t, a, n) {
            var r = n.api
            return b.b(t, { params: e, request: r.OAuth.post })({ actionTypes: x, context: 'POST_CONSENT' })
          }
        },
        D = a('RqPI'),
        U = a('G6rE'),
        B = a('rxPX'),
        R = a('0KEI'),
        H = Object(B.a)()
          .propsFromState(function () {
            return {
              fetchStatus: A,
              isLoggedIn: D.n,
              oAuthConsentMetadata: T,
              postStatus: O,
              redirectUri: I,
              user: U.e.selectLoggedInUser,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)('OAUTH_CONSENT'),
              fetchConsentMetadata: M,
              postConsent: F,
            }
          }),
        N = {
          customErrorHandler: function (e) {
            var t = e.errors
            return Array.isArray(t) && t.length > 0
              ? { payload: { redirectUri: t[0].redirect_uri }, type: k }
              : { payload: {}, type: k }
          },
        },
        P = a('av9q'),
        z = a('lUZE'),
        j = a('Es6L'),
        W = a('MWbm'),
        V = a('pxuL'),
        K = a('SyIi'),
        q = a('t62R'),
        G = a('rHpw'),
        Q = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            i()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  Object(j.a)() && (this.context.setSideNavSupport(!1), this.context.incrementDmDrawerSuppressorCount())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  Object(j.a)() && (this.context.setSideNavSupport(!0), this.context.decrementDmDrawerSuppressorCount())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a = e.footerContent
                  return g.a.createElement(
                    W.a,
                    { style: Y.container },
                    g.a.createElement(W.a, { style: Y.navbar }, g.a.createElement(z.a, { style: Y.icon })),
                    g.a.createElement(W.a, { style: Y.body }, g.a.createElement(K.a, { showReload: !0 }, t)),
                    a
                      ? g.a.createElement(
                          W.a,
                          { style: Y.footer },
                          g.a.createElement(q.b, { style: Y.footerContent }, a),
                        )
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      m()(Q, 'contextType', V.a)
      var Y = G.a.create(function (e) {
          return {
            body: { flex: '1 0 auto' },
            container: { display: 'flex', flexDirection: 'column', height: '100%' },
            footer: {
              alignItems: 'center',
              backgroundColor: e.colors.gray0,
              display: 'flex',
              flexShrink: 0,
              minHeight: e.spaces.space64,
              paddingLeft: e.spaces.space20,
              paddingRight: e.spaces.space20,
              textAlign: 'center',
            },
            footerContent: { margin: 'auto' },
            icon: { color: e.colors.primary, height: e.spaces.space36, margin: 'auto', width: e.spaces.space36 },
            navbar: {
              alignItems: 'center',
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              display: 'flex',
              minHeight: e.spaces.space64,
              textAlign: 'center',
            },
          }
        }),
        X = Q,
        J = 'OAuth_Consent_Button',
        Z = 'OAuth_Consent_Error_Detail',
        $ = 'OAuth_Consent_Log_In_Button',
        ee = a('mw9i'),
        te = a('IMA+'),
        ae = a('Qwev'),
        ne = a('/yvb'),
        re = a('OOKO'),
        oe = a('q9Zt'),
        ie = a('i4Oy'),
        le = a('U+bB'),
        ce = a('3XMw'),
        se = a.n(ce),
        de = se.a.bfaadb2c,
        ue = se.a.f4392d00,
        pe = se.a.b08821f3,
        he = se.a.cfd2f35d,
        me = se.a.ee4dca3c,
        ye = se.a.eafcc76a,
        ge = se.a.j3998a15,
        Ce = se.a.bb347bbb,
        ve = se.a.eeee7736,
        be = se.a.e919c3bc,
        fe = se.a.fc2a5c92,
        Ee = se.a.e0876919,
        we = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(c()(e), '_handleSubmit', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler,
                  n = t.oAuthConsentMetadata.auth_code
                ;(0, t.postConsent)({ approval: !0, code: n }).catch(a())
              }),
              m()(c()(e), '_handleCancel', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler,
                  n = t.oAuthConsentMetadata.auth_code,
                  r = t.postConsent
                n && r({ approval: !1, code: n }).catch(a())
              }),
              m()(c()(e), '_changeWindowLocation', function (e) {
                window.location.href = e
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchConsentMetadata()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.fetchStatus,
                    n = t.redirectUri
                  a === f.a.FAILED || '' === n || e.redirectUri === n || this._changeWindowLocation(n)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.fetchStatus,
                    n = t.isLoggedIn,
                    r = a === f.a.FAILED,
                    o = a === f.a.LOADING
                  return (
                    (e = n
                      ? o
                        ? this._renderLoading()
                        : r
                        ? this._renderErrorState()
                        : this._renderMainContent()
                      : this._renderLoggedOutState()),
                    g.a.createElement(
                      X,
                      { footerContent: this._renderFooterContent() },
                      g.a.createElement(ee.a, { style: Se.layout }, e),
                    )
                  )
                },
              },
              {
                key: '_renderMainContent',
                value: function () {
                  var e = this.props,
                    t = e.oAuthConsentMetadata,
                    a = t.app_description,
                    n = t.app_image_uri,
                    r = t.app_name,
                    o = t.auth_code,
                    i = e.postStatus,
                    l = e.user,
                    c = i === f.a.FAILED,
                    s = i === f.a.LOADING || i === f.a.LOADED,
                    d = l || {},
                    u = d.id_str,
                    p = d.name,
                    h = d.profile_image_url_https,
                    m = d.screen_name,
                    y = ie.a.get('window').width < G.a.theme.breakpoints.medium
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    c ? this._renderErrorState() : null,
                    g.a.createElement(
                      W.a,
                      { style: y ? Se.mobileContainer : Se.container },
                      g.a.createElement(
                        W.a,
                        { style: Se.head },
                        g.a.createElement(le.a, { source: n, style: Se.image }),
                        g.a.createElement(
                          q.b,
                          { size: 'title4', style: Se.headline, weight: 'heavy' },
                          de({ appName: r }),
                          '.',
                        ),
                        g.a.createElement(te.a, {
                          avatarUri: h,
                          displayMode: 'UserCompact',
                          name: p,
                          screenName: m,
                          style: Se.userCell,
                          userId: u,
                        }),
                        g.a.createElement(
                          W.a,
                          { accessibilityLiveRegion: 'polite', style: Se.actionContainer },
                          s
                            ? g.a.createElement(ae.a, null)
                            : g.a.createElement(
                                ne.a,
                                {
                                  disabled: !o,
                                  onClick: this._handleSubmit,
                                  size: 'xLarge',
                                  testID: J,
                                  type: 'brandFilled',
                                },
                                ue,
                              ),
                        ),
                        g.a.createElement(
                          q.b,
                          { accessibilityLabel: me, color: 'link', onPress: this._handleCancel, size: 'subtext2' },
                          he,
                        ),
                      ),
                      g.a.createElement(re.a, { spacing: 'space32' }),
                      g.a.createElement(q.b, null, a),
                      this._renderScopesList(),
                      this._renderCanDoScopes(),
                      g.a.createElement(re.a, { spacing: 'space32' }),
                      this._renderPrivacyAndTerms(),
                    ),
                    g.a.createElement(q.b, { link: 'https://www.twitter.com', style: Se.twitterLink }, 'Twitter'),
                  )
                },
              },
              {
                key: '_renderFooterContent',
                value: function () {
                  return g.a.createElement(
                    q.b,
                    null,
                    g.a.createElement(
                      se.a.I18NFormatMessage,
                      { $i18n: 'b004e8bf' },
                      g.a.createElement(
                        q.b,
                        {
                          link: 'https://help.twitter.com/en/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                        },
                        Ce,
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderScopesList',
                value: function () {
                  var e = this.props.oAuthConsentMetadata.scopes,
                    t = (void 0 === e ? [] : e)
                      .filter(function (e) {
                        return 'can_view' === e.category
                      })
                      .sort(function (e, t) {
                        return e.rank - t.rank
                      })
                  return t.length ? g.a.createElement(P.a, { scopes: t, title: ye }) : null
                },
              },
              {
                key: '_renderCanDoScopes',
                value: function () {
                  var e = this.props.oAuthConsentMetadata.scopes,
                    t = (void 0 === e ? [] : e)
                      .filter(function (e) {
                        return 'can_do' === e.category
                      })
                      .sort(function (e, t) {
                        return e.rank - t.rank
                      })
                  return t.length ? g.a.createElement(P.a, { scopes: t, title: ge }) : null
                },
              },
              {
                key: '_renderPrivacyAndTerms',
                value: function () {
                  var e = this.props.oAuthConsentMetadata,
                    t = e.organization_name,
                    a = e.organization_privacy_policy_uri,
                    n = e.organization_terms_and_conditions_uri,
                    r = e.organization_uri
                  return g.a.createElement(
                    q.b,
                    null,
                    g.a.createElement(
                      se.a.I18NFormatMessage,
                      { $i18n: 'afd52f45', orgName: t },
                      g.a.createElement(q.b, { link: r }, t),
                      g.a.createElement(q.b, { link: a }, 'privacy policy'),
                      g.a.createElement(q.b, { link: n }, 'terms'),
                    ),
                  )
                },
              },
              {
                key: '_renderLoading',
                value: function () {
                  return g.a.createElement(ae.a, null)
                },
              },
              {
                key: '_renderLoggedOutState',
                value: function () {
                  var e = this.props.redirectUri
                  return g.a.createElement(
                    W.a,
                    { style: Se.mobileContainer },
                    g.a.createElement(q.b, { size: 'title4', style: Se.loggedOutText, weight: 'heavy' }, ve),
                    g.a.createElement(
                      ne.a,
                      { link: e, size: 'xLarge', style: Se.logInButton, testID: $, type: 'brandFilled' },
                      be,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorState',
                value: function () {
                  var e = this.props,
                    t = e.history.goBack,
                    a = e.redirectUri,
                    n = { openInSameFrame: !0, pathname: a }
                  return a
                    ? g.a.createElement(
                        oe.a,
                        { buttonLink: n, retryLabel: pe, style: Se.errorState, testID: Z, title: fe },
                        Ee,
                      )
                    : g.a.createElement(
                        oe.a,
                        {
                          onRetry: function (e) {
                            return t()
                          },
                          retryLabel: pe,
                          style: Se.errorState,
                          testID: Z,
                          title: fe,
                        },
                        Ee,
                      )
                },
              },
              {
                key: '_fetchConsentMetadata',
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.createLocalApiErrorHandler,
                    r = a.fetchConsentMetadata,
                    o = a.history.location.query
                  r(
                    ((t = (e = o).client_id),
                    {
                      code_challenge: e.code_challenge,
                      code_challenge_method: e.code_challenge_method,
                      client_id: t,
                      redirect_uri: e.redirect_uri,
                      response_type: e.response_type,
                      scope: e.scope,
                      state: e.state,
                    }),
                  ).catch(n(N))
                },
              },
            ]),
            a
          )
        })(g.a.Component),
        Se = G.a.create(function (e) {
          return {
            actionContainer: { paddingTop: e.spaces.space40, paddingBottom: e.spaces.space32 },
            container: {
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              borderRadius: e.borderRadii.large,
              maxWidth: 414,
              padding: e.spaces.space32,
            },
            errorState: { maxWidth: 414 },
            head: { alignItems: 'center', display: 'flex', textAlign: 'center' },
            headline: { marginBottom: e.spaces.space40, marginTop: e.spaces.space40 },
            image: { height: 100, width: 100 },
            layout: {
              alignItems: 'center',
              display: 'flex',
              paddingBottom: e.spaces.space80,
              paddingTop: e.spaces.space40,
            },
            loggedOutText: { marginBottom: e.spaces.space28, textAlign: 'center' },
            logInButton: { marginHorizontal: e.spaces.space64 },
            mobileContainer: { maxWidth: 414, padding: e.spaces.space32 },
            twitterLink: { marginTop: e.spaces.space32 },
            userCell: { minWidth: '65%' },
          }
        }),
        xe = H(we)
      t.default = xe
    },
    FITr: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    'IMA+': function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        l = a('Y9Ll'),
        c = a.n(l),
        s = a('1Pcy'),
        d = a.n(s),
        u = a('5Yy7'),
        p = a.n(u),
        h = a('2VqO'),
        m = a.n(h),
        y = a('KEM+'),
        g = a.n(y),
        C = (a('yH/f'), a('2G9S'), a('ho0z'), a('hBvt'), a('vrRf'), a('1t7P'), a('jQ/y'), a('SV7d')),
        v = a('ERkP'),
        b = a.n(v),
        f = a('TIdA'),
        E = a('t62R'),
        w = a('5mJL'),
        S = a('DNho'),
        x = a('nBUg'),
        k = a('qjak'),
        L = a('ir4X'),
        _ = a('htQn'),
        T = a('e5HP'),
        I = a('FBXD'),
        A = a('Nqmc'),
        O = a('rHpw'),
        M = a('jhWN'),
        F = a('1I0O'),
        D = a('pBrB'),
        U = a('jV+4'),
        B = a('MWbm'),
        R = Object.freeze({ TWEET: 'tweets', USER: 'users' }),
        H = Object.freeze({
          UserCompact: 'UserCompact',
          UserConcise: 'UserConcise',
          UserDetailed: 'UserDetailed',
          ExperimentalUserTypeahead: 'ExperimentalUserTypeahead',
        }),
        N = f.a.createLayoutCache(),
        P = { viewType: 'user_cell' },
        z = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(d()(e), '_renderUserName', function () {
                var t = e.props,
                  a = t.badgeContext,
                  n = t.disabledMessage,
                  r = t.displayNameLabel,
                  o = t.isBlocking,
                  i = t.isDisabled,
                  l = t.isFollowedBy,
                  c = t.isProtected,
                  s = t.isVerified,
                  d = t.name,
                  u = t.onScreenNameClick,
                  p = t.promotedContent,
                  h = t.promotedItemType,
                  m = t.screenName,
                  y = t.screenNameSuffix,
                  g = t.translatorType,
                  C = t.withFollowsYou,
                  v = t.withLink,
                  f = b.a.createElement(U.a, {
                    badgeContext: a,
                    displayNameLabel: r,
                    isProtected: c,
                    isVerified: s,
                    name: d,
                    onLinkClick: u,
                    promotedContent: h === R.TWEET ? p : void 0,
                    screenName: m,
                    screenNameSuffix: y,
                    translatorType: g,
                    withFollowsYou: C && l,
                    withHoverCard: !o && !i && v,
                    withLink: !i && v,
                    withScreenName: !n,
                    withStackedLayout: !0,
                  })
                return n
                  ? b.a.createElement(
                      B.a,
                      { style: j.disabledMessageContainer },
                      f,
                      b.a.createElement(E.b, { color: 'gray700' }, n),
                    )
                  : f
              }),
              g()(d()(e), '_renderSocialContext', function () {
                var t = e.props,
                  a = t.avatarSize,
                  n = t.displayMode,
                  r = t.socialContext
                return r
                  ? b.a.createElement(x.b.UseProps, null, function (e) {
                      return b.a.createElement(A.a, {
                        avatarSize: a,
                        contextType: r.contextType,
                        iconSize: 'large',
                        link: r.link,
                        style: j.socialContext,
                        text: r.text,
                        weight: 'bold',
                        withLeftPadding: !e.socialContextRefreshEnabled() && n !== H.ExperimentalUserTypeahead,
                      })
                    })
                  : null
              }),
              g()(d()(e), '_renderUserTypeaheadSocialContext', function () {
                var t = e.props.socialContext,
                  a =
                    (t && Object(k.a)({ link: t.link, text: t.text, iconSize: 'small', contextType: t.contextType })) ||
                    {},
                  n = a.Icon,
                  r = a.text
                return t
                  ? b.a.createElement(
                      B.a,
                      { style: j.userTypeaheadSocialContext },
                      b.a.createElement(B.a, { style: j.userTypeaheadSocialContextIcon }, n),
                      b.a.createElement(
                        E.b,
                        { color: 'gray700', numberOfLines: 1, style: j.userTypeaheadSocialContextText },
                        r,
                      ),
                    )
                  : null
              }),
              g()(d()(e), '_renderHighlightedUserLabel', function () {
                var t = e.props.highlightedLabel
                return t ? b.a.createElement(L.a, { label: t }) : null
              }),
              g()(d()(e), '_isEligibleForBio', function () {
                var t = e.props.displayMode
                return -1 !== [H.UserDetailed, H.UserConcise].indexOf(t)
              }),
              g()(d()(e), '_handleKeyPress', function (t) {
                t.defaultPrevented || 'Enter' !== t.key || e._handleClick(t)
              }),
              g()(
                d()(e),
                '_handleClick',
                Object(I.a)(function (t) {
                  var a = e.props.onCellClick
                  t.preventDefault(), a && a()
                }),
              ),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.accessibilityState,
                    n = e.avatarDecoration,
                    o = e.avatarSize,
                    i = e.avatarUri,
                    l = e.bottomControl,
                    c = e.decoration,
                    s = e.displayMode,
                    d = e.isBlocking,
                    u = e.isDisabled,
                    p = e.onAvatarClick,
                    h = e.onCellClick,
                    m = e.onScreenNameClick,
                    y = e.presenceIndicator,
                    g = e.promotedContent,
                    v = e.promotedItemType,
                    f = e.screenName,
                    E = e.style,
                    x = e.testID,
                    k = e.userId,
                    L = e.withDarkerInteractiveBackground,
                    I = e.withInteractiveStyling,
                    A = e.withLink,
                    O = e.withUsernameCenterAligned,
                    D = A && !d,
                    U = s === H.UserCompact || O,
                    z = s === H.ExperimentalUserTypeahead,
                    W =
                      g && v === R.USER && 'earned' !== (g.disclosure_type && g.disclosure_type.toLowerCase())
                        ? b.a.createElement(T.a, { contentAuthorId: k, promotedContent: g, style: j.promotedIndicator })
                        : null,
                    V = {
                      accessibilityHidden: !0,
                      decoration: n,
                      focusable: !1,
                      imageLayoutCache: N,
                      onClick: p,
                      onHoverCardScreenNameClick: m,
                      promotedContent: g,
                      screenName: f,
                      style: j.avatar,
                      uri: i,
                      withHoverCard: D,
                      withLink: A,
                    },
                    K = b.a.createElement(S.a.Consumer, null, function (e) {
                      var t = e.avatarSize
                      return y
                        ? b.a.createElement(F.a, r()({}, V, y, { size: t }))
                        : b.a.createElement(M.a, r()({ size: t }, V))
                    }),
                    q = a && 'boolean' == typeof a.checked,
                    G = void 0 !== h,
                    Q = (q ? 'radio' : G && 'button') || 'listitem',
                    Y = this._renderUserName(),
                    X = this._renderHighlightedUserLabel(),
                    J = this._renderBio(),
                    Z = X || J || W || l,
                    $ = b.a.createElement(
                      b.a.Fragment,
                      null,
                      X,
                      J,
                      W,
                      l ? b.a.createElement(B.a, { style: j.bottomControl }, l) : null,
                    )
                  return b.a.createElement(
                    C.a,
                    { behavioralEventContext: P },
                    b.a.createElement(
                      _.a,
                      {
                        accessibilityLabel: t,
                        accessibilityRole: Q,
                        accessibilityState: a,
                        disabled: !!u,
                        focusable: q || G,
                        onClick: this._handleClick,
                        onKeyPress: this._handleKeyPress,
                        pointerEvents: u ? 'none' : void 0,
                        style: [j.root, E],
                        testID: x,
                        withDarkerInteractiveBackground: L,
                        withInteractiveStyling: null != I ? I : !!h,
                      },
                      z ? null : this._renderSocialContext(),
                      b.a.createElement(
                        w.a,
                        {
                          avatarCell: K,
                          avatarCellStyle: [j.avatarColumn, U && j.bodyColumnCentered],
                          avatarSize: z ? 'xxxLarge' : o,
                          cellStyle: [j.bodyColumn, U && j.bodyColumnCentered],
                        },
                        b.a.createElement(B.a, { style: j.body }, Y, c),
                        U ? null : $,
                        z ? this._renderUserTypeaheadSocialContext() : null,
                      ),
                      Z && U
                        ? b.a.createElement(
                            w.a,
                            { avatarCell: null, avatarCellStyle: j.avatarColumn, cellStyle: j.bodyColumn },
                            $,
                          )
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderBio',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    a = e.displayMode,
                    n = e.entities,
                    r = e.userId,
                    o = e.withheldDescription,
                    i = e.withheldEntities
                  return n && t && this._isEligibleForBio()
                    ? b.a.createElement(D.a, {
                        description: t,
                        entities: n,
                        isConcise: a === H.UserConcise,
                        style: j.bio,
                        userId: r,
                        withheldDescription: o,
                        withheldEntities: i,
                      })
                    : null
                },
              },
            ]),
            a
          )
        })(b.a.PureComponent)
      g()(z, 'defaultProps', { testID: 'UserCell', withLink: !0 })
      var j = O.a.create(function (e) {
        return {
          root: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          avatarColumn: { justifyContent: 'flex-start' },
          bodyColumn: { flexGrow: 1 },
          bodyColumnCentered: { justifyContent: 'center' },
          avatar: { display: 'block', width: '100%' },
          bio: { paddingTop: e.spaces.space4, whiteSpace: 'normal' },
          socialContext: { marginBottom: e.spaces.space4 },
          userTypeaheadSocialContext: { alignItems: 'center', flexDirection: 'row', textColor: e.colors.gray700 },
          userTypeaheadSocialContextIcon: { flexShrink: 0 },
          userTypeaheadSocialContextText: { paddingLeft: e.spaces.space2 },
          body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          promotedIndicator: { margin: 0, paddingTop: e.spaces.space4, paddingBottom: 0, paddingHorizontal: 0 },
          bottomControl: { paddingTop: e.spaces.space4 },
          disabledMessageContainer: { flexShrink: 1 },
        }
      })
      t.a = z
    },
    Nqmc: function (e, t, a) {
      'use strict'
      var n = a('m3Bd'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        l = a('Y9Ll'),
        c = a.n(l),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        p = a.n(u),
        h = a('KEM+'),
        m = a.n(h),
        y = (a('hBvt'), a('uFXj'), a('2G9S'), a('SV7d')),
        g = a('ERkP'),
        C = a.n(g),
        v = a('t62R'),
        b = a('5mJL'),
        f = a('nBUg'),
        E = a('qjak'),
        w = a('dC06'),
        S = a('rHpw'),
        x = a('XIXT'),
        k = a('yDX5'),
        L = a('MWbm'),
        _ = [
          'avatarSize',
          'bottomControl',
          'iconStyle',
          'nativeID',
          'onLayout',
          'rightControl',
          'style',
          'testID',
          'textColor',
          'textSize',
          'topControl',
          'weight',
          'withBottomBorder',
          'withLeftPadding',
          'withTextCentered',
        ],
        T = { viewType: 'social_context' },
        I = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            return i()(this, a), t.apply(this, arguments)
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarSize,
                    n = t.bottomControl,
                    o = t.iconStyle,
                    i = t.nativeID,
                    l = t.onLayout,
                    c = t.rightControl,
                    s = t.style,
                    d = t.testID,
                    u = t.textColor,
                    p = t.textSize,
                    h = t.topControl,
                    m = t.weight,
                    g = (t.withBottomBorder, t.withLeftPadding),
                    w = (t.withTextCentered, r()(t, _)),
                    S = Object(E.a)(w),
                    x = S.Icon,
                    k = S.accessibilityLabel,
                    I = S.link,
                    O = S.text,
                    M = C.a.createElement(
                      v.b,
                      { accessibilityLabel: k, color: u, nativeID: i, numberOfLines: 2, size: p, testID: d, weight: m },
                      O,
                    ),
                    F = this._getStyles(),
                    D = F.cellStyle,
                    U = F.viewStyle
                  return O
                    ? C.a.createElement(f.b.UseProps, null, function (t) {
                        return C.a.createElement(
                          y.a,
                          { behavioralEventContext: T },
                          C.a.createElement(
                            C.a.Fragment,
                            null,
                            h || null,
                            C.a.createElement(
                              L.a,
                              {
                                onLayout: l,
                                style: [s, U, t.socialContextRefreshEnabled() && !g && A.socialContextRefresh],
                              },
                              C.a.createElement(
                                b.a,
                                {
                                  avatarCell: x || (g ? null : void 0),
                                  avatarCellStyle: [
                                    o,
                                    A.socialContextIconColumn,
                                    !g && A.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !g && A.socialContextRefreshIcon,
                                  ],
                                  avatarSize: a,
                                  cellStyle: D,
                                },
                                C.a.createElement(
                                  L.a,
                                  { style: A.cellWrapper },
                                  C.a.createElement(
                                    L.a,
                                    {
                                      style: [
                                        A.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !g && A.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    I ? e._renderLink(I, M) : M,
                                  ),
                                  c || null,
                                ),
                              ),
                              n || null,
                            ),
                          ),
                        )
                      })
                    : null
                },
              },
              {
                key: '_renderLink',
                value: function (e, t) {
                  var a = this.props,
                    n = a.contextType,
                    r = a.nativeID,
                    o = a.onClick,
                    i = a.retweetData,
                    l = a.textColor,
                    c = a.topicData,
                    s = (i || {}).screenName,
                    d = C.a.createElement(v.b, { color: l, link: e, nativeID: r, onClick: o }, t)
                  return n === w.a.Topic && c
                    ? C.a.createElement(x.a, { topicId: c.topicId }, d)
                    : n === w.a.Retweet && s
                    ? C.a.createElement(k.a, { screenName: s }, d)
                    : d
                },
              },
              {
                key: '_getStyles',
                value: function () {
                  var e = this.props,
                    t = e.bottomControl,
                    a = e.contextType,
                    n = e.withBottomBorder,
                    r = e.withTextCentered,
                    o = a === w.a.TextOnly,
                    i = n ? [A.bottomBorderMargin, t && A.bottomBorder] : [],
                    l = n && !t ? [A.bottomBorder] : []
                  return (
                    o && l.push(A.topicContext),
                    r && l.push(A.socialContextTextCentered),
                    { viewStyle: i, cellStyle: l }
                  )
                },
              },
            ]),
            a
          )
        })(C.a.PureComponent)
      m()(I, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var A = S.a.create(function (e) {
        return {
          socialContextIconColumn: { alignItems: 'flex-end', justifyContent: 'center' },
          bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical },
          cellWrapper: { flexDirection: 'row' },
          bottomBorder: {
            paddingBottom: e.spaces.space4,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            borderBottomColor: e.colors.borderColor,
          },
          topicContext: { paddingBottom: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')') },
          socialContextTextColumn: { alignItems: 'flex-start', flexShrink: 1, justifyContent: 'center' },
          unsetIconWidth: { flexBasis: 'unset' },
          socialContextRefreshIcon: { marginRight: e.spaces.space8 },
          socialContextRefresh: { marginBottom: e.spaces.space8 },
          socialContextRefreshTextColumn: { minHeight: e.spaces.space32 },
          socialContextTextCentered: { justifyContent: 'center' },
        }
      })
      t.a = I
    },
    OOKO: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return l
      })
      a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('rHpw'),
        i = a('MWbm')
      function l(e) {
        var t = e.spacing
        return r.a.createElement(i.a, {
          accessibilityRole: 'separator',
          style: [c.divider, { marginVertical: null != t ? o.a.theme.spaces[t] : void 0 }],
        })
      }
      var c = o.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    aPcQ: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20 16H5.81l2.72-2.72c.294-.293.294-.768 0-1.06s-.767-.294-1.06 0l-4 4c-.293.292-.293.767 0 1.06l4 4c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06L5.81 17.5H20c.414 0 .75-.337.75-.75S20.414 16 20 16zm.53-9.28l-4-4c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l2.72 2.72H4c-.414 0-.75.337-.75.75S3.586 8 4 8h14.19l-2.72 2.72c-.294.293-.294.768 0 1.06.146.147.338.22.53.22s.384-.073.53-.22l4-4c.293-.293.293-.767 0-1.06z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    av9q: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return x
      })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        l = a('1Pcy'),
        c = a.n(l),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        p = a.n(u),
        h = a('KEM+'),
        m = a.n(h),
        y = (a('2G9S'), a('M+/F'), a('z84I'), a('ho0z'), a('1t7P'), a('jQ/y'), a('hBvt'), a('ERkP')),
        g = a.n(y),
        C = a('3XMw'),
        v = a.n(C),
        b = a('t62R'),
        f = a('htQn'),
        E = a('rHpw'),
        w = v.a.c174e46e,
        S = v.a.a39075ff,
        x = (function (e) {
          d()(a, e)
          var t = p()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(c()(e), 'state', { showAllScopes: !1 }),
              m()(c()(e), '_handleToggleShowMoreScopes', function () {
                var t = e.state.showAllScopes
                e.setState({ showAllScopes: !t })
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.scopes,
                    a = e.size,
                    n = e.title,
                    r = this.state.showAllScopes,
                    o = r ? t : t.slice(0, 3),
                    i = t.length > 3
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(b.b, { style: k.scopesHeader, weight: 'bold' }, n),
                    g.a.createElement(
                      f.a,
                      { withInteractiveStyling: !1 },
                      o.map(function (e) {
                        return g.a.createElement(
                          b.b,
                          { color: 'subtext2' === a ? 'gray700' : void 0, key: e.name, size: a, style: k.listItem },
                          e.description,
                        )
                      }),
                    ),
                    i && r
                      ? g.a.createElement(
                          b.b,
                          { onPress: this._handleToggleShowMoreScopes, style: k.toggleMoreLink },
                          w,
                        )
                      : null,
                    i && !r
                      ? g.a.createElement(
                          b.b,
                          { onPress: this._handleToggleShowMoreScopes, style: k.toggleMoreLink },
                          S({ n: t.length - 3 }),
                        )
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component),
        k = E.a.create(function (e) {
          return {
            listItem: {
              display: 'list-item',
              listStylePosition: 'outside',
              marginBottom: e.spaces.space12,
              marginLeft: e.spaces.space12,
            },
            scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 },
            toggleMoreLink: { color: e.colors.link, weight: 'bold' },
          }
        })
    },
    dC06: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f'), a('ERkP')
      var n = Object.freeze({
        Community: 'Community',
        Pin: 'Pin',
        Retweet: 'Retweet',
        Like: 'Like',
        Follow: 'Follow',
        Moment: 'Moment',
        NewTweets: 'NewTweets',
        Reply: 'Reply',
        Conversation: 'Conversation',
        TextOnly: 'TextOnly',
        Facepile: 'Facepile',
        Feedback: 'Feedback',
        Topic: 'Topic',
        List: 'List',
        Location: 'Location',
        Megaphone: 'Megaphone',
        Bird: 'Bird',
        NewUser: 'NewUser',
        SmartBlockExpiration: 'SmartBlockExpiration',
        FollowMutual: 'FollowMutual',
        FollowFollowing: 'FollowFollowing',
        FollowFollowed: 'FollowFollowed',
        SocialProof: 'SocialProof',
        Spaces: 'Spaces',
        Sparkle: 'Sparkle',
        Trending: 'Trending',
      })
    },
    e5HP: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return F
      })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        l = a('5Yy7'),
        c = a.n(l),
        s = a('2VqO'),
        d = a.n(s),
        u = a('KEM+'),
        p = a.n(u),
        h = a('ERkP'),
        m = a.n(h),
        y = a('t62R'),
        g = a('3XMw'),
        C = a.n(g),
        v = a('rHpw'),
        b = a('MWbm'),
        f = a('yiKp'),
        E = a.n(f),
        w = a('Lsrn'),
        S = a('k/Ka'),
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(S.a)(
            'svg',
            E()(
              E()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            m.a.createElement(
              'g',
              null,
              m.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      x.metadata = { width: 24, height: 24 }
      var k = x,
        L = a('uFYP'),
        _ = C.a.f1a1b790,
        T = C.a.if2bf8b3,
        I = C.a.f3624b5c,
        A = C.a.b4b3b113,
        O = C.a.be22205f,
        M = C.a.hcbbe447,
        F = (function (e) {
          c()(a, e)
          var t = d()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    a = e.nativeID,
                    n = e.style,
                    r = e.withCircleIcon ? k : L.a
                  return m.a.createElement(
                    b.a,
                    { style: [D.root, n] },
                    m.a.createElement(r, { style: [D.icon, t && D[t]] }),
                    m.a.createElement(y.b, { color: t, nativeID: a, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    a = e.label,
                    n = e.promotedContent,
                    r = n.adMetadataContainer,
                    o = n.advertiser,
                    i = n.advertiser_name,
                    l = n.disclosure_type,
                    c = t && o && t === o.id_str,
                    s = 'string' == typeof l && 'political' === l.toLowerCase(),
                    d = 'string' == typeof l && 'issue' === l.toLowerCase(),
                    u = !(!r || 'POLITICAL' !== r.disclaimerType) || s,
                    p = !(!r || 'ISSUE' !== r.disclaimerType) || d,
                    h = (r || {}).removePromotedAttributionForPreroll
                  return (
                    a ||
                    (!i || c || h
                      ? u
                        ? I
                        : p
                        ? O
                        : T
                      : u
                      ? A({ fullName: i })
                      : p
                      ? M({ fullName: i })
                      : _({ fullName: i }))
                  )
                },
              },
            ]),
            a
          )
        })(m.a.Component)
      p()(F, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var D = v.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    qjak: function (e, t, a) {
      'use strict'
      a('hBvt'), a('ho0z')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('t62R'),
        i = a('MAI/'),
        l = a('shC7'),
        c = a('dC06'),
        s = a('rHpw'),
        d = a('3XMw'),
        u = a.n(d),
        p = a('FITr'),
        h = a('yVEN'),
        m = a('uCrx'),
        y = a('6ZHn'),
        g = a('GcQN'),
        C = a('x0mb'),
        v = a('Hp3u'),
        b = a('yiKp'),
        f = a.n(b),
        E = a('Lsrn'),
        w = a('k/Ka'),
        S = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            f()(
              f()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z',
              }),
            ),
          )
        }
      S.metadata = { width: 24, height: 24 }
      var x = S,
        k = a('EHV7'),
        L = a('wpLu'),
        _ = a('EfHu'),
        T = a('cOhU'),
        I = a('cap5'),
        A = a('r9x5'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            f()(
              f()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.75 12.257c-.038 0-.074-.003-.11-.008l-3.667-.54s-.28-.048-.292-.053c-.343-.07-.602-.372-.602-.735V6.417c0-.414.336-.75.75-.75s.75.336.75.75v5.115l3.28.483c.41.06.692.44.632.852-.055.372-.375.64-.74.64z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var M = O,
        F = a('0qK0'),
        D = a('aPcQ'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            f()(
              f()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      U.metadata = { width: 24, height: 24 }
      var B = U,
        R = a('lUZE'),
        H = u.a.jb767df7,
        N = u.a.bb3323fa,
        P = u.a.db0798ed,
        z = u.a.dc716ec8,
        j = function (e) {
          return r.a.createElement(o.b, { dir: l.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        W = function (e, t) {
          return t
            ? H
            : (function (e) {
                var t = j(e)
                return r.a.createElement(u.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        V = s.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        K = s.a.create(function (e) {
          return {
            circle: { color: e.colors.primary, width: '0.5em' },
            colorDeepGray: { color: e.colors.gray700 },
            colorBlue: { color: e.colors.blue500 },
            colorGreen: { color: e.colors.green500 },
            colorOrange: { color: e.colors.orange500 },
            colorPrimary: { color: e.colors.primary },
            colorRed: { color: e.colors.magenta500 },
            grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: 'grayscale(100%)' },
            brandColor: { color: e.colors.brandColor },
          }
        })
      t.a = function (e) {
        var t = e.contextType,
          a = e.iconSize,
          n = e.link,
          o = e.retweetData,
          l = e.text,
          s = e.topicData,
          d = e.userAvatarUrls,
          u = o || {},
          b = u.isSelfRetweet,
          f = u.name,
          E = u.screenName,
          w = (function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              n = V[t],
              o = [K.colorDeepGray, n],
              l = r.a.createElement(p.a, { style: o }),
              s = r.a.createElement(h.a, { style: o }),
              d = r.a.createElement(m.a, { style: o }),
              u = r.a.createElement(y.a, { style: o }),
              b = r.a.createElement(g.a, { style: o }),
              f = r.a.createElement(C.a, { style: K.circle }),
              E = r.a.createElement(v.a, { style: o }),
              w = r.a.createElement(x, { style: o }),
              S = r.a.createElement(k.a, { style: o }),
              O = r.a.createElement(L.a, { style: o }),
              U = r.a.createElement(_.a, { style: o }),
              H = r.a.createElement(T.a, { style: o }),
              N = r.a.createElement(I.a, { style: o }),
              P = r.a.createElement(A.a, { style: o }),
              z = r.a.createElement(M, { style: o }),
              j = r.a.createElement(F.a, { style: o }),
              W = r.a.createElement(D.a, { style: o }),
              q = r.a.createElement(B, { style: o }),
              G = r.a.createElement(i.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              Q = r.a.createElement(R.a, { style: o })
            switch (e) {
              case c.a.Pin:
                return l
              case c.a.Retweet:
                return s
              case c.a.Like:
                return d
              case c.a.Follow:
                return u
              case c.a.Moment:
                return b
              case c.a.NewTweets:
                return f
              case c.a.Reply:
              case c.a.Conversation:
                return E
              case c.a.Feedback:
                return w
              case c.a.Topic:
                return S
              case c.a.List:
                return O
              case c.a.Location:
                return U
              case c.a.Community:
                return H
              case c.a.Spaces:
                return N
              case c.a.Sparkle:
                return P
              case c.a.SmartBlockExpiration:
                return z
              case c.a.SocialProof:
              case c.a.FollowFollowed:
                return q
              case c.a.FollowMutual:
                return W
              case c.a.FollowFollowing:
                return j
              case c.a.Facepile:
                return G
              case c.a.Bird:
                return Q
              case c.a.TextOnly:
              default:
                return null
            }
          })(t, a, d)
        switch (t) {
          case c.a.Retweet:
            return { Icon: w, text: l || W(f, b), link: E ? 'https://twitter.com/'.concat(E) : void 0 }
          case c.a.Pin:
            return { Icon: w, text: l || N }
          case c.a.Topic:
            return {
              Icon: w,
              accessibilityLabel:
                'Recommendation' === (null == s ? void 0 : s.functionalityType) ||
                'RecWithEducation' === (null == s ? void 0 : s.functionalityType)
                  ? z({ topicName: l })
                  : P({ topicName: l }),
              text: l ? j(l) : null,
              link: n,
            }
          default:
            return { Icon: w, text: l ? j(l) : null, link: n }
        }
      }
    },
    r9x5: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zM7.413 4.562c0-.414-.336-.75-.75-.75h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75zm1.785 14.872h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    uFYP: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    x0mb: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
