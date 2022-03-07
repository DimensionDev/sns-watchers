;(window.webpackJsonp = window.webpackJsonp || []).push([
  [75],
  {
    '5xYW': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'OAuthConsentScreen', function () {
          return be
        })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        s = a('1Pcy'),
        c = a.n(s),
        l = a('5Yy7'),
        u = a.n(l),
        p = a('2VqO'),
        d = a.n(p),
        h = a('KEM+'),
        m = a.n(h),
        E = (a('2G9S'), a('ho0z'), a('tQbP'), a('LW0h'), a('7x/C'), a('uFXj'), a('ERkP')),
        y = a.n(E),
        g = a('yiKp'),
        f = a.n(g),
        S = (a('yH/f'), a('oEOe')),
        _ = a('kGix'),
        C = a('Ssj5'),
        b = 'oAuthConsent',
        A = Object.freeze({
          REQUEST: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_REQUEST',
          SUCCESS: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_SUCCESS',
          FAILURE: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_FAILURE',
        }),
        v = Object.freeze({
          REQUEST: 'rweb/oAuthConsent/POST_CONSENT_REQUEST',
          SUCCESS: 'rweb/oAuthConsent/POST_CONSENT_SUCCESS',
          FAILURE: 'rweb/oAuthConsent/POST_CONSENT_FAILURE',
        }),
        L = 'rweb/oAuthConsent/FETCH_FAILED',
        w = { consentMetadata: void 0, fetchStatus: _.a.NONE, postStatus: _.a.NONE, redirectUri: void 0 }
      function T() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case A.REQUEST:
            return f()(f()({}, e), {}, { fetchStatus: _.a.LOADING })
          case A.FAILURE:
            return f()(f()({}, e), {}, { fetchStatus: _.a.FAILED })
          case A.SUCCESS:
            return t.payload ? f()(f()({}, e), {}, { consentMetadata: t.payload, fetchStatus: _.a.LOADED }) : e
          case L:
            return t.payload ? f()(f()({}, e), {}, { fetchStatus: _.a.FAILED, redirectUri: t.payload.redirectUri }) : e
          case v.REQUEST:
            return f()(f()({}, e), {}, { postStatus: _.a.LOADING })
          case v.FAILURE:
            return f()(f()({}, e), {}, { postStatus: _.a.FAILED })
          case v.SUCCESS:
            return t.payload ? f()(f()({}, e), {}, { redirectUri: t.payload.redirect_uri, postStatus: _.a.LOADED }) : e
          default:
            return e
        }
      }
      C.a.register(m()({}, b, T))
      var O = function (e) {
          return e.oAuthConsent.consentMetadata || {}
        },
        k = function (e) {
          return e.oAuthConsent.redirectUri || ''
        },
        I = function (e) {
          return e.oAuthConsent.fetchStatus
        },
        M = function (e) {
          return e.oAuthConsent.postStatus
        },
        U = function (e) {
          return function (t, a, n) {
            var r = n.api
            return S.b(t, { params: e, request: r.OAuth.fetch })({ actionTypes: A, context: 'FETCH_CONSENT_METADATA' })
          }
        },
        D = function (e) {
          return function (t, a, n) {
            var r = n.api
            return S.b(t, { params: e, request: r.OAuth.post })({ actionTypes: v, context: 'POST_CONSENT' })
          }
        },
        x = a('RqPI'),
        F = a('G6rE'),
        N = a('rxPX'),
        R = a('0KEI'),
        H = Object(N.a)()
          .propsFromState(function () {
            return {
              fetchStatus: I,
              isLoggedIn: x.m,
              oAuthConsentMetadata: O,
              postStatus: M,
              redirectUri: k,
              user: F.e.selectLoggedInUser,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)('OAUTH_CONSENT'),
              fetchConsentMetadata: U,
              postConsent: D,
            }
          }),
        P = {
          customErrorHandler: function (e) {
            var t = e.errors
            return Array.isArray(t) && t.length > 0
              ? { payload: { redirectUri: t[0].redirect_uri }, type: L }
              : { payload: {}, type: L }
          },
        },
        z = a('av9q'),
        W = a('lUZE'),
        B = a('Es6L'),
        j = a('MWbm'),
        Q = a('pxuL'),
        q = a('SyIi'),
        G = a('t62R'),
        K = a('rHpw'),
        Y = (function (e) {
          u()(a, e)
          var t = d()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            i()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  Object(B.a)() && (this.context.setSideNavSupport(!1), this.context.incrementDmDrawerInhibitorCount())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  Object(B.a)() && (this.context.setSideNavSupport(!0), this.context.decrementDmDrawerInhibitorCount())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a = e.footerContent
                  return y.a.createElement(
                    j.a,
                    { style: V.container },
                    y.a.createElement(j.a, { style: V.navbar }, y.a.createElement(W.a, { style: V.icon })),
                    y.a.createElement(j.a, { style: V.body }, y.a.createElement(q.a, { showReload: !0 }, t)),
                    a
                      ? y.a.createElement(
                          j.a,
                          { style: V.footer },
                          y.a.createElement(G.b, { style: V.footerContent }, a),
                        )
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      m()(Y, 'contextType', Q.a)
      var V = K.a.create(function (e) {
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
        X = Y,
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
        se = a('U+bB'),
        ce = a('3XMw'),
        le = a.n(ce),
        ue = le.a.bfaadb2c,
        pe = le.a.f4392d00,
        de = le.a.b08821f3,
        he = le.a.cfd2f35d,
        me = le.a.ee4dca3c,
        Ee = le.a.eafcc76a,
        ye = le.a.j3998a15,
        ge = le.a.bb347bbb,
        fe = le.a.eeee7736,
        Se = le.a.e919c3bc,
        _e = le.a.fc2a5c92,
        Ce = le.a.e0876919,
        be = (function (e) {
          u()(a, e)
          var t = d()(a)
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
                  a === _.a.FAILED || '' === n || e.redirectUri === n || this._changeWindowLocation(n)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.fetchStatus,
                    n = t.isLoggedIn,
                    r = a === _.a.FAILED,
                    o = a === _.a.LOADING
                  return (
                    (e = n
                      ? o
                        ? this._renderLoading()
                        : r
                        ? this._renderErrorState()
                        : this._renderMainContent()
                      : this._renderLoggedOutState()),
                    y.a.createElement(
                      X,
                      { footerContent: this._renderFooterContent() },
                      y.a.createElement(ee.a, { style: Ae.layout }, e),
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
                    s = e.user,
                    c = i === _.a.FAILED,
                    l = i === _.a.LOADING || i === _.a.LOADED,
                    u = s || {},
                    p = u.id_str,
                    d = u.name,
                    h = u.profile_image_url_https,
                    m = u.screen_name,
                    E = ie.a.get('window').width < K.a.theme.breakpoints.medium
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    c ? this._renderErrorState() : null,
                    y.a.createElement(
                      j.a,
                      { style: E ? Ae.mobileContainer : Ae.container },
                      y.a.createElement(
                        j.a,
                        { style: Ae.head },
                        y.a.createElement(se.a, { source: n, style: Ae.image }),
                        y.a.createElement(
                          G.b,
                          { size: 'title4', style: Ae.headline, weight: 'heavy' },
                          ue({ appName: r }),
                          '.',
                        ),
                        y.a.createElement(te.a, {
                          avatarUri: h,
                          displayMode: 'UserCompact',
                          name: d,
                          screenName: m,
                          style: Ae.userCell,
                          userId: p,
                        }),
                        y.a.createElement(
                          j.a,
                          { accessibilityLiveRegion: 'polite', style: Ae.actionContainer },
                          l
                            ? y.a.createElement(ae.a, null)
                            : y.a.createElement(
                                ne.a,
                                {
                                  disabled: !o,
                                  onClick: this._handleSubmit,
                                  size: 'xLarge',
                                  testID: J,
                                  type: 'brandFilled',
                                },
                                pe,
                              ),
                        ),
                        y.a.createElement(
                          G.b,
                          { accessibilityLabel: me, color: 'link', onPress: this._handleCancel, size: 'subtext2' },
                          he,
                        ),
                      ),
                      y.a.createElement(re.a, { spacing: 'space32' }),
                      y.a.createElement(G.b, null, a),
                      this._renderScopesList(),
                      this._renderCanDoScopes(),
                      y.a.createElement(re.a, { spacing: 'space32' }),
                      this._renderPrivacyAndTerms(),
                    ),
                    y.a.createElement(G.b, { link: 'https://www.twitter.com', style: Ae.twitterLink }, 'Twitter'),
                  )
                },
              },
              {
                key: '_renderFooterContent',
                value: function () {
                  return y.a.createElement(
                    G.b,
                    null,
                    y.a.createElement(
                      le.a.I18NFormatMessage,
                      { $i18n: 'b004e8bf' },
                      y.a.createElement(
                        G.b,
                        {
                          link: 'https://help.twitter.com/en/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                        },
                        ge,
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
                  return t.length ? y.a.createElement(z.a, { scopes: t, title: Ee }) : null
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
                  return t.length ? y.a.createElement(z.a, { scopes: t, title: ye }) : null
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
                  return y.a.createElement(
                    G.b,
                    null,
                    y.a.createElement(
                      le.a.I18NFormatMessage,
                      { $i18n: 'afd52f45', orgName: t },
                      y.a.createElement(G.b, { link: r }, t),
                      y.a.createElement(G.b, { link: a }, 'privacy policy'),
                      y.a.createElement(G.b, { link: n }, 'terms'),
                    ),
                  )
                },
              },
              {
                key: '_renderLoading',
                value: function () {
                  return y.a.createElement(ae.a, null)
                },
              },
              {
                key: '_renderLoggedOutState',
                value: function () {
                  var e = this.props.redirectUri
                  return y.a.createElement(
                    j.a,
                    { style: Ae.mobileContainer },
                    y.a.createElement(G.b, { size: 'title4', style: Ae.loggedOutText, weight: 'heavy' }, fe),
                    y.a.createElement(
                      ne.a,
                      { link: e, size: 'xLarge', style: Ae.logInButton, testID: $, type: 'brandFilled' },
                      Se,
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
                    ? y.a.createElement(
                        oe.a,
                        { buttonLink: n, retryLabel: de, style: Ae.errorState, testID: Z, title: _e },
                        Ce,
                      )
                    : y.a.createElement(
                        oe.a,
                        {
                          onRetry: function (e) {
                            return t()
                          },
                          retryLabel: de,
                          style: Ae.errorState,
                          testID: Z,
                          title: _e,
                        },
                        Ce,
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
                  ).catch(n(P))
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        Ae = K.a.create(function (e) {
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
        ve = H(be)
      t.default = ve
    },
    av9q: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return v
      })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        s = a('1Pcy'),
        c = a.n(s),
        l = a('5Yy7'),
        u = a.n(l),
        p = a('2VqO'),
        d = a.n(p),
        h = a('KEM+'),
        m = a.n(h),
        E = (a('2G9S'), a('M+/F'), a('z84I'), a('ho0z'), a('1t7P'), a('jQ/y'), a('hBvt'), a('ERkP')),
        y = a.n(E),
        g = a('3XMw'),
        f = a.n(g),
        S = a('t62R'),
        _ = a('htQn'),
        C = a('rHpw'),
        b = f.a.c174e46e,
        A = f.a.a39075ff,
        v = (function (e) {
          u()(a, e)
          var t = d()(a)
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
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(S.b, { style: L.scopesHeader, weight: 'bold' }, n),
                    y.a.createElement(
                      _.a,
                      { withInteractiveStyling: !1 },
                      o.map(function (e) {
                        return y.a.createElement(
                          S.b,
                          { color: 'subtext2' === a ? 'gray700' : void 0, key: e.name, size: a, style: L.listItem },
                          e.description,
                        )
                      }),
                    ),
                    i && r
                      ? y.a.createElement(
                          S.b,
                          { onPress: this._handleToggleShowMoreScopes, style: L.toggleMoreLink },
                          b,
                        )
                      : null,
                    i && !r
                      ? y.a.createElement(
                          S.b,
                          { onPress: this._handleToggleShowMoreScopes, style: L.toggleMoreLink },
                          A({ n: t.length - 3 }),
                        )
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        L = C.a.create(function (e) {
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
  },
])
//# sourceMappingURL=WIPED
