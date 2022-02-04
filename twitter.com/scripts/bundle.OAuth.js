;(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    '5xYW': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'OAuthConsentScreen', function () {
          return ge
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
        f = a('yiKp'),
        g = a.n(f),
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
        w = 'rweb/oAuthConsent/FETCH_FAILED',
        L = { consentMetadata: void 0, fetchStatus: _.a.NONE, postStatus: _.a.NONE, redirectUri: void 0 }
      function T() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case A.REQUEST:
            return g()(g()({}, e), {}, { fetchStatus: _.a.LOADING })
          case A.FAILURE:
            return g()(g()({}, e), {}, { fetchStatus: _.a.FAILED })
          case A.SUCCESS:
            return t.payload ? g()(g()({}, e), {}, { consentMetadata: t.payload, fetchStatus: _.a.LOADED }) : e
          case w:
            return t.payload ? g()(g()({}, e), {}, { fetchStatus: _.a.FAILED, redirectUri: t.payload.redirectUri }) : e
          case v.REQUEST:
            return g()(g()({}, e), {}, { postStatus: _.a.LOADING })
          case v.FAILURE:
            return g()(g()({}, e), {}, { postStatus: _.a.FAILED })
          case v.SUCCESS:
            return t.payload ? g()(g()({}, e), {}, { redirectUri: t.payload.redirect_uri, postStatus: _.a.LOADED }) : e
          default:
            return e
        }
      }
      C.a.register(m()({}, b, T))
      var k = function (e) {
          return e.oAuthConsent.consentMetadata || {}
        },
        O = function (e) {
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
        F = a('G6rE'),
        N = a('rxPX'),
        x = a('0KEI'),
        R = Object(N.a)()
          .propsFromState(function () {
            return {
              fetchStatus: I,
              oAuthConsentMetadata: k,
              postStatus: M,
              redirectUri: O,
              user: F.e.selectLoggedInUser,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('OAUTH_CONSENT'),
              fetchConsentMetadata: U,
              postConsent: D,
            }
          }),
        H = {
          customErrorHandler: function (e) {
            var t = e.errors
            return Array.isArray(t) && t.length > 0
              ? { payload: { redirectUri: t[0].redirect_uri }, type: w }
              : { payload: {}, type: w }
          },
        },
        P = a('av9q'),
        W = a('lUZE'),
        z = a('Es6L'),
        j = a('MWbm'),
        Q = a('pxuL'),
        B = a('SyIi'),
        q = a('t62R'),
        G = a('rHpw'),
        K = (function (e) {
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
                  Object(z.a)() && (this.context.setSideNavSupport(!1), this.context.incrementDmDrawerInhibitorCount())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  Object(z.a)() && (this.context.setSideNavSupport(!0), this.context.decrementDmDrawerInhibitorCount())
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
                    { style: Y.container },
                    y.a.createElement(j.a, { style: Y.navbar }, y.a.createElement(W.a, { style: Y.icon })),
                    y.a.createElement(j.a, { style: Y.body }, y.a.createElement(B.a, { showReload: !0 }, t)),
                    a
                      ? y.a.createElement(
                          j.a,
                          { style: Y.footer },
                          y.a.createElement(q.b, { style: Y.footerContent }, a),
                        )
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      m()(K, 'contextType', Q.a)
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
        V = K,
        X = 'OAuth_Consent_Button',
        J = 'OAuth_Consent_Error_Detail',
        Z = a('mw9i'),
        $ = a('IMA+'),
        ee = a('Qwev'),
        te = a('/yvb'),
        ae = a('OOKO'),
        ne = a('q9Zt'),
        re = a('i4Oy'),
        oe = a('U+bB'),
        ie = a('3XMw'),
        se = a.n(ie),
        ce = se.a.bfaadb2c,
        le = se.a.f4392d00,
        ue = se.a.b08821f3,
        pe = se.a.cfd2f35d,
        de = se.a.ee4dca3c,
        he = se.a.eafcc76a,
        me = se.a.j3998a15,
        Ee = se.a.bb347bbb,
        ye = se.a.fc2a5c92,
        fe = se.a.e0876919,
        ge = (function (e) {
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
                    t = this.props.fetchStatus,
                    a = t === _.a.FAILED
                  return (
                    (e =
                      t === _.a.LOADING
                        ? y.a.createElement(j.a, null, this._renderLoading())
                        : a
                        ? y.a.createElement(j.a, null, this._renderErrorState())
                        : this._renderMainContent()),
                    y.a.createElement(
                      V,
                      { footerContent: this._renderFooterContent() },
                      y.a.createElement(Z.a, { style: Se.layout }, e),
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
                    E = re.a.get('window').width < G.a.theme.breakpoints.medium
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    c ? this._renderErrorState() : null,
                    y.a.createElement(
                      j.a,
                      { style: E ? Se.mobileContainer : Se.container },
                      y.a.createElement(
                        j.a,
                        { style: Se.head },
                        y.a.createElement(oe.a, { source: n, style: Se.image }),
                        y.a.createElement(
                          q.b,
                          { size: 'title4', style: Se.headline, weight: 'heavy' },
                          ce({ appName: r }),
                          '.',
                        ),
                        y.a.createElement($.a, {
                          avatarUri: h,
                          displayMode: 'UserCompact',
                          name: d,
                          screenName: m,
                          style: Se.userCell,
                          userId: p,
                        }),
                        y.a.createElement(
                          j.a,
                          { accessibilityLiveRegion: 'polite', style: Se.actionContainer },
                          l
                            ? y.a.createElement(ee.a, null)
                            : y.a.createElement(
                                te.a,
                                {
                                  disabled: !o,
                                  onClick: this._handleSubmit,
                                  size: 'xLarge',
                                  testID: X,
                                  type: 'brandFilled',
                                },
                                le,
                              ),
                        ),
                        y.a.createElement(
                          q.b,
                          { accessibilityLabel: de, color: 'link', onPress: this._handleCancel, size: 'subtext2' },
                          pe,
                        ),
                      ),
                      y.a.createElement(ae.a, { spacing: 'space32' }),
                      y.a.createElement(q.b, null, a),
                      this._renderScopesList(),
                      this._renderCanDoScopes(),
                      y.a.createElement(ae.a, { spacing: 'space32' }),
                      this._renderPrivacyAndTerms(),
                    ),
                    y.a.createElement(q.b, { link: 'https://www.twitter.com', style: Se.twitterLink }, 'Twitter'),
                  )
                },
              },
              {
                key: '_renderFooterContent',
                value: function () {
                  return y.a.createElement(
                    q.b,
                    null,
                    y.a.createElement(
                      se.a.I18NFormatMessage,
                      { $i18n: 'a0b6818f' },
                      y.a.createElement(
                        q.b,
                        {
                          link: 'https://help.twitter.com/en/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                        },
                        Ee,
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
                  return t.length ? y.a.createElement(P.a, { scopes: t, title: he }) : null
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
                  return t.length ? y.a.createElement(P.a, { scopes: t, title: me }) : null
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
                    q.b,
                    null,
                    y.a.createElement(
                      se.a.I18NFormatMessage,
                      { $i18n: 'afd52f45', orgName: t },
                      y.a.createElement(q.b, { link: r }, t),
                      y.a.createElement(q.b, { link: a }, 'privacy policy'),
                      y.a.createElement(q.b, { link: n }, 'terms'),
                    ),
                  )
                },
              },
              {
                key: '_renderLoading',
                value: function () {
                  return y.a.createElement(ee.a, null)
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
                        ne.a,
                        { buttonLink: n, retryLabel: ue, style: Se.errorState, testID: J, title: ye },
                        fe,
                      )
                    : y.a.createElement(
                        ne.a,
                        {
                          onRetry: function (e) {
                            return t()
                          },
                          retryLabel: ue,
                          style: Se.errorState,
                          testID: J,
                          title: ye,
                        },
                        fe,
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
                  ).catch(n(H))
                },
              },
            ]),
            a
          )
        })(y.a.Component),
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
            mobileContainer: { maxWidth: 414, padding: e.spaces.space32 },
            twitterLink: { marginTop: e.spaces.space32 },
            userCell: { minWidth: '65%' },
          }
        }),
        _e = R(ge)
      t.default = _e
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
        f = a('3XMw'),
        g = a.n(f),
        S = a('t62R'),
        _ = a('htQn'),
        C = a('rHpw'),
        b = g.a.c174e46e,
        A = g.a.a39075ff,
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
                    y.a.createElement(S.b, { style: w.scopesHeader, weight: 'bold' }, n),
                    y.a.createElement(
                      _.a,
                      { withInteractiveStyling: !1 },
                      o.map(function (e) {
                        return y.a.createElement(
                          S.b,
                          { color: 'subtext2' === a ? 'gray700' : void 0, key: e.name, size: a, style: w.listItem },
                          e.description,
                        )
                      }),
                    ),
                    i && r
                      ? y.a.createElement(
                          S.b,
                          { onPress: this._handleToggleShowMoreScopes, style: w.toggleMoreLink },
                          b,
                        )
                      : null,
                    i && !r
                      ? y.a.createElement(
                          S.b,
                          { onPress: this._handleToggleShowMoreScopes, style: w.toggleMoreLink },
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
        w = C.a.create(function (e) {
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
