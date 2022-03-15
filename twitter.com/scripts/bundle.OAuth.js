;(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    '5xYW': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'OAuthConsentScreen', function () {
          return Ce
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
        g = a.n(E),
        y = a('yiKp'),
        f = a.n(y),
        S = (a('yH/f'), a('oEOe')),
        _ = a('kGix'),
        b = a('Ssj5'),
        C = 'oAuthConsent',
        v = Object.freeze({
          REQUEST: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_REQUEST',
          SUCCESS: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_SUCCESS',
          FAILURE: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_FAILURE',
        }),
        A = Object.freeze({
          REQUEST: 'rweb/oAuthConsent/POST_CONSENT_REQUEST',
          SUCCESS: 'rweb/oAuthConsent/POST_CONSENT_SUCCESS',
          FAILURE: 'rweb/oAuthConsent/POST_CONSENT_FAILURE',
        }),
        w = 'rweb/oAuthConsent/FETCH_FAILED',
        L = { consentMetadata: void 0, fetchStatus: _.a.NONE, postStatus: _.a.NONE, redirectUri: void 0 }
      function O() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case v.REQUEST:
            return f()(f()({}, e), {}, { fetchStatus: _.a.LOADING })
          case v.FAILURE:
            return f()(f()({}, e), {}, { fetchStatus: _.a.FAILED })
          case v.SUCCESS:
            return t.payload ? f()(f()({}, e), {}, { consentMetadata: t.payload, fetchStatus: _.a.LOADED }) : e
          case w:
            return t.payload ? f()(f()({}, e), {}, { fetchStatus: _.a.FAILED, redirectUri: t.payload.redirectUri }) : e
          case A.REQUEST:
            return f()(f()({}, e), {}, { postStatus: _.a.LOADING })
          case A.FAILURE:
            return f()(f()({}, e), {}, { postStatus: _.a.FAILED })
          case A.SUCCESS:
            return t.payload ? f()(f()({}, e), {}, { redirectUri: t.payload.redirect_uri, postStatus: _.a.LOADED }) : e
          default:
            return e
        }
      }
      b.a.register(m()({}, C, O))
      var T = function (e) {
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
            return S.b(t, { params: e, request: r.OAuth.fetch })({ actionTypes: v, context: 'FETCH_CONSENT_METADATA' })
          }
        },
        D = function (e) {
          return function (t, a, n) {
            var r = n.api
            return S.b(t, { params: e, request: r.OAuth.post })({ actionTypes: A, context: 'POST_CONSENT' })
          }
        },
        F = a('RqPI'),
        x = a('G6rE'),
        N = a('rxPX'),
        R = a('0KEI'),
        H = Object(N.a)()
          .propsFromState(function () {
            return {
              fetchStatus: I,
              isLoggedIn: F.m,
              oAuthConsentMetadata: T,
              postStatus: M,
              redirectUri: k,
              user: x.e.selectLoggedInUser,
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
              ? { payload: { redirectUri: t[0].redirect_uri }, type: w }
              : { payload: {}, type: w }
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
        V = (function (e) {
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
                  return g.a.createElement(
                    j.a,
                    { style: X.container },
                    g.a.createElement(j.a, { style: X.navbar }, g.a.createElement(W.a, { style: X.icon })),
                    g.a.createElement(j.a, { style: X.body }, g.a.createElement(q.a, { showReload: !0 }, t)),
                    a
                      ? g.a.createElement(
                          j.a,
                          { style: X.footer },
                          g.a.createElement(G.b, { style: X.footerContent }, a),
                        )
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      m()(V, 'contextType', Q.a)
      var X = K.a.create(function (e) {
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
        Y = V,
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
        ge = le.a.j3998a15,
        ye = le.a.bb347bbb,
        fe = le.a.eeee7736,
        Se = le.a.e919c3bc,
        _e = le.a.fc2a5c92,
        be = le.a.e0876919,
        Ce = (function (e) {
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
                    g.a.createElement(
                      Y,
                      { footerContent: this._renderFooterContent() },
                      g.a.createElement(ee.a, { style: ve.layout }, e),
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
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    c ? this._renderErrorState() : null,
                    g.a.createElement(
                      j.a,
                      { style: E ? ve.mobileContainer : ve.container },
                      g.a.createElement(
                        j.a,
                        { style: ve.head },
                        g.a.createElement(se.a, { source: n, style: ve.image }),
                        g.a.createElement(
                          G.b,
                          { size: 'title4', style: ve.headline, weight: 'heavy' },
                          ue({ appName: r }),
                          '.',
                        ),
                        g.a.createElement(te.a, {
                          avatarUri: h,
                          displayMode: 'UserCompact',
                          name: d,
                          screenName: m,
                          style: ve.userCell,
                          userId: p,
                        }),
                        g.a.createElement(
                          j.a,
                          { accessibilityLiveRegion: 'polite', style: ve.actionContainer },
                          l
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
                                pe,
                              ),
                        ),
                        g.a.createElement(
                          G.b,
                          { accessibilityLabel: me, color: 'link', onPress: this._handleCancel, size: 'subtext2' },
                          he,
                        ),
                      ),
                      g.a.createElement(re.a, { spacing: 'space32' }),
                      g.a.createElement(G.b, null, a),
                      this._renderScopesList(),
                      this._renderCanDoScopes(),
                      g.a.createElement(re.a, { spacing: 'space32' }),
                      this._renderPrivacyAndTerms(),
                    ),
                    g.a.createElement(G.b, { link: 'https://www.twitter.com', style: ve.twitterLink }, 'Twitter'),
                  )
                },
              },
              {
                key: '_renderFooterContent',
                value: function () {
                  return g.a.createElement(
                    G.b,
                    null,
                    g.a.createElement(
                      le.a.I18NFormatMessage,
                      { $i18n: 'b004e8bf' },
                      g.a.createElement(
                        G.b,
                        {
                          link: 'https://help.twitter.com/en/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                        },
                        ye,
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
                  return t.length ? g.a.createElement(z.a, { scopes: t, title: Ee }) : null
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
                  return t.length ? g.a.createElement(z.a, { scopes: t, title: ge }) : null
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
                    G.b,
                    null,
                    g.a.createElement(
                      le.a.I18NFormatMessage,
                      { $i18n: 'afd52f45', orgName: t },
                      g.a.createElement(G.b, { link: r }, t),
                      g.a.createElement(G.b, { link: a }, 'privacy policy'),
                      g.a.createElement(G.b, { link: n }, 'terms'),
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
                    j.a,
                    { style: ve.mobileContainer },
                    g.a.createElement(G.b, { size: 'title4', style: ve.loggedOutText, weight: 'heavy' }, fe),
                    g.a.createElement(
                      ne.a,
                      { link: e, size: 'xLarge', style: ve.logInButton, testID: $, type: 'brandFilled' },
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
                    ? g.a.createElement(
                        oe.a,
                        { buttonLink: n, retryLabel: de, style: ve.errorState, testID: Z, title: _e },
                        be,
                      )
                    : g.a.createElement(
                        oe.a,
                        {
                          onRetry: function (e) {
                            return t()
                          },
                          retryLabel: de,
                          style: ve.errorState,
                          testID: Z,
                          title: _e,
                        },
                        be,
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
        })(g.a.Component),
        ve = K.a.create(function (e) {
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
        Ae = H(Ce)
      t.default = Ae
    },
    OOKO: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('rHpw'),
        i = a('MWbm')
      function s(e) {
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
    av9q: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return A
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
        g = a.n(E),
        y = a('3XMw'),
        f = a.n(y),
        S = a('t62R'),
        _ = a('htQn'),
        b = a('rHpw'),
        C = f.a.c174e46e,
        v = f.a.a39075ff,
        A = (function (e) {
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
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(S.b, { style: w.scopesHeader, weight: 'bold' }, n),
                    g.a.createElement(
                      _.a,
                      { withInteractiveStyling: !1 },
                      o.map(function (e) {
                        return g.a.createElement(
                          S.b,
                          { color: 'subtext2' === a ? 'gray700' : void 0, key: e.name, size: a, style: w.listItem },
                          e.description,
                        )
                      }),
                    ),
                    i && r
                      ? g.a.createElement(
                          S.b,
                          { onPress: this._handleToggleShowMoreScopes, style: w.toggleMoreLink },
                          C,
                        )
                      : null,
                    i && !r
                      ? g.a.createElement(
                          S.b,
                          { onPress: this._handleToggleShowMoreScopes, style: w.toggleMoreLink },
                          v({ n: t.length - 3 }),
                        )
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component),
        w = b.a.create(function (e) {
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
