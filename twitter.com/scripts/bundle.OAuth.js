;(window.webpackJsonp = window.webpackJsonp || []).push([
  [73],
  {
    '5xYW': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'OAuthConsentScreen', function () {
          return ve
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        p = n('N+ot'),
        d = n.n(p),
        h = n('AuHH'),
        f = n.n(h),
        m = n('KEM+'),
        y = n.n(m),
        E = (n('2G9S'), n('ho0z'), n('tQbP'), n('LW0h'), n('uFXj'), n('ERkP')),
        g = (n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('yH/f'), n('oEOe')),
        b = n('kGix'),
        S = n('Ssj5')
      function v(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var C = 'oAuthConsent',
        A = Object.freeze({
          REQUEST: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_REQUEST',
          SUCCESS: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_SUCCESS',
          FAILURE: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_FAILURE',
        }),
        O = Object.freeze({
          REQUEST: 'rweb/oAuthConsent/POST_CONSENT_REQUEST',
          SUCCESS: 'rweb/oAuthConsent/POST_CONSENT_SUCCESS',
          FAILURE: 'rweb/oAuthConsent/POST_CONSENT_FAILURE',
        }),
        w = 'rweb/oAuthConsent/FETCH_FAILED',
        L = { consentMetadata: void 0, fetchStatus: b.a.NONE, postStatus: b.a.NONE, redirectUri: void 0 }
      function T() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case A.REQUEST:
            return _(_({}, e), {}, { fetchStatus: b.a.LOADING })
          case A.FAILURE:
            return _(_({}, e), {}, { fetchStatus: b.a.FAILED })
          case A.SUCCESS:
            return t.payload ? _(_({}, e), {}, { consentMetadata: t.payload, fetchStatus: b.a.LOADED }) : e
          case w:
            return t.payload ? _(_({}, e), {}, { fetchStatus: b.a.FAILED, redirectUri: t.payload.redirectUri }) : e
          case O.REQUEST:
            return _(_({}, e), {}, { postStatus: b.a.LOADING })
          case O.FAILURE:
            return _(_({}, e), {}, { postStatus: b.a.FAILED })
          case O.SUCCESS:
            return t.payload ? _(_({}, e), {}, { redirectUri: t.payload.redirect_uri, postStatus: b.a.LOADED }) : e
          default:
            return e
        }
      }
      S.a.register(y()({}, C, T))
      var k = function (e) {
          return e.oAuthConsent.consentMetadata || {}
        },
        D = function (e) {
          return e.oAuthConsent.redirectUri || ''
        },
        M = function (e) {
          return e.oAuthConsent.fetchStatus
        },
        I = function (e) {
          return e.oAuthConsent.postStatus
        },
        R = function (e) {
          return function (t, n, r) {
            var a = r.api
            return g.b(t, { params: e, request: a.OAuth.fetch })({ actionTypes: A, context: 'FETCH_CONSENT_METADATA' })
          }
        },
        U = function (e) {
          return function (t, n, r) {
            var a = r.api
            return g.b(t, { params: e, request: a.OAuth.post })({ actionTypes: O, context: 'POST_CONSENT' })
          }
        },
        N = n('G6rE'),
        F = n('rxPX'),
        x = n('0KEI'),
        P = Object(F.a)()
          .propsFromState(function () {
            return {
              fetchStatus: M,
              oAuthConsentMetadata: k,
              postStatus: I,
              redirectUri: D,
              user: N.e.selectLoggedInUser,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('OAUTH_CONSENT'),
              fetchConsentMetadata: R,
              postConsent: U,
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
        j = n('av9q'),
        B = n('lUZE'),
        W = n('Es6L'),
        z = n('MWbm'),
        Q = n('pxuL'),
        G = n('SyIi'),
        q = n('t62R'),
        K = n('rHpw')
      function X(e) {
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
          return d()(this, n)
        }
      }
      var Y = (function (e) {
        u()(n, e)
        var t = X(n)
        function n() {
          return a()(this, n), t.apply(this, arguments)
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(W.a)() && (this.context.setSideNavSupport(!1), this.context.incrementDmDrawerInhibitorCount())
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(W.a)() && (this.context.setSideNavSupport(!0), this.context.decrementDmDrawerInhibitorCount())
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.children,
                  n = e.footerContent
                return E.createElement(
                  z.a,
                  { style: Z.container },
                  E.createElement(z.a, { style: Z.navbar }, E.createElement(B.a, { style: Z.icon })),
                  E.createElement(z.a, { style: Z.body }, E.createElement(G.a, { showReload: !0 }, t)),
                  n
                    ? E.createElement(z.a, { style: Z.footer }, E.createElement(q.b, { style: Z.footerContent }, n))
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(E.Component)
      y()(Y, 'contextType', Q.a)
      var Z = K.a.create(function (e) {
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
        J = Y,
        V = 'OAuth_Consent_Button',
        $ = 'OAuth_Consent_Error_Detail',
        ee = n('mw9i'),
        te = n('IMA+'),
        ne = n('Qwev'),
        re = n('/yvb'),
        ae = n('OOKO'),
        oe = n('q9Zt'),
        ce = n('i4Oy'),
        ie = n('U+bB'),
        se = n('3XMw'),
        le = n.n(se)
      function ue(e) {
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
          return d()(this, n)
        }
      }
      var pe = le.a.bfaadb2c,
        de = le.a.f4392d00,
        he = le.a.b08821f3,
        fe = le.a.cfd2f35d,
        me = le.a.ee4dca3c,
        ye = le.a.eafcc76a,
        Ee = le.a.j3998a15,
        ge = le.a.bb347bbb,
        be = le.a.fc2a5c92,
        Se = le.a.e0876919,
        ve = (function (e) {
          u()(n, e)
          var t = ue(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.oAuthConsentMetadata.auth_code
                ;(0, t.postConsent)({ approval: !0, code: r }).catch(n())
              }),
              y()(s()(e), '_handleCancel', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.oAuthConsentMetadata.auth_code,
                  a = t.postConsent
                r && a({ approval: !1, code: r }).catch(n())
              }),
              y()(s()(e), '_changeWindowLocation', function (e) {
                window.location.href = e
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    n = t.fetchStatus,
                    r = t.redirectUri
                  n === b.a.FAILED || '' === r || e.redirectUri === r || this._changeWindowLocation(r)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props.fetchStatus,
                    n = t === b.a.FAILED
                  return (
                    (e =
                      t === b.a.LOADING
                        ? E.createElement(z.a, null, this._renderLoading())
                        : n
                        ? E.createElement(z.a, null, this._renderErrorState())
                        : this._renderMainContent()),
                    E.createElement(
                      J,
                      { footerContent: this._renderFooterContent() },
                      E.createElement(ee.a, { style: _e.layout }, e),
                    )
                  )
                },
              },
              {
                key: '_renderMainContent',
                value: function () {
                  var e = this.props,
                    t = e.oAuthConsentMetadata,
                    n = t.app_description,
                    r = t.app_image_uri,
                    a = t.app_name,
                    o = t.auth_code,
                    c = e.postStatus,
                    i = e.user,
                    s = c === b.a.FAILED,
                    l = c === b.a.LOADING || c === b.a.LOADED,
                    u = i || {},
                    p = u.id_str,
                    d = u.name,
                    h = u.profile_image_url_https,
                    f = u.screen_name,
                    m = ce.a.get('window').width < K.a.theme.breakpoints.medium
                  return E.createElement(
                    E.Fragment,
                    null,
                    s ? this._renderErrorState() : null,
                    E.createElement(
                      z.a,
                      { style: m ? _e.mobileContainer : _e.container },
                      E.createElement(
                        z.a,
                        { style: _e.head },
                        E.createElement(ie.a, { source: r, style: _e.image }),
                        E.createElement(
                          q.b,
                          { size: 'title4', style: _e.headline, weight: 'heavy' },
                          pe({ appName: a }),
                          '.',
                        ),
                        E.createElement(te.a, {
                          avatarUri: h,
                          displayMode: 'UserCompact',
                          name: d,
                          screenName: f,
                          style: _e.userCell,
                          userId: p,
                        }),
                        E.createElement(
                          z.a,
                          { accessibilityLiveRegion: 'polite', style: _e.actionContainer },
                          l
                            ? E.createElement(ne.a, null)
                            : E.createElement(
                                re.a,
                                {
                                  disabled: !o,
                                  onClick: this._handleSubmit,
                                  size: 'xLarge',
                                  testID: V,
                                  type: 'brandFilled',
                                },
                                de,
                              ),
                        ),
                        E.createElement(
                          q.b,
                          { accessibilityLabel: me, color: 'link', onPress: this._handleCancel, size: 'subtext2' },
                          fe,
                        ),
                      ),
                      E.createElement(ae.a, { spacing: 'space32' }),
                      E.createElement(q.b, null, n),
                      this._renderScopesList(),
                      this._renderCanDoScopes(),
                      E.createElement(ae.a, { spacing: 'space32' }),
                      this._renderPrivacyAndTerms(),
                    ),
                    E.createElement(q.b, { link: 'https://www.twitter.com', style: _e.twitterLink }, 'Twitter'),
                  )
                },
              },
              {
                key: '_renderFooterContent',
                value: function () {
                  return E.createElement(
                    q.b,
                    null,
                    E.createElement(
                      le.a.I18NFormatMessage,
                      { $i18n: 'a0b6818f' },
                      E.createElement(
                        q.b,
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
                  return t.length ? E.createElement(j.a, { scopes: t, title: ye }) : null
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
                  return t.length ? E.createElement(j.a, { scopes: t, title: Ee }) : null
                },
              },
              {
                key: '_renderPrivacyAndTerms',
                value: function () {
                  var e = this.props.oAuthConsentMetadata,
                    t = e.organization_name,
                    n = e.organization_privacy_policy_uri,
                    r = e.organization_terms_and_conditions_uri,
                    a = e.organization_uri
                  return E.createElement(
                    q.b,
                    null,
                    E.createElement(
                      le.a.I18NFormatMessage,
                      { $i18n: 'afd52f45', orgName: t },
                      E.createElement(q.b, { link: a }, t),
                      E.createElement(q.b, { link: n }, 'privacy policy'),
                      E.createElement(q.b, { link: r }, 'terms'),
                    ),
                  )
                },
              },
              {
                key: '_renderLoading',
                value: function () {
                  return E.createElement(ne.a, null)
                },
              },
              {
                key: '_renderErrorState',
                value: function () {
                  var e = this.props,
                    t = e.history.goBack,
                    n = e.redirectUri,
                    r = { openInSameFrame: !0, pathname: n }
                  return n
                    ? E.createElement(
                        oe.a,
                        { buttonLink: r, retryLabel: he, style: _e.errorState, testID: $, title: be },
                        Se,
                      )
                    : E.createElement(
                        oe.a,
                        {
                          onRetry: function (e) {
                            return t()
                          },
                          retryLabel: he,
                          style: _e.errorState,
                          testID: $,
                          title: be,
                        },
                        Se,
                      )
                },
              },
              {
                key: '_fetchConsentMetadata',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.createLocalApiErrorHandler,
                    a = n.fetchConsentMetadata,
                    o = n.history.location.query
                  a(
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
                  ).catch(r(H))
                },
              },
            ]),
            n
          )
        })(E.Component),
        _e = K.a.create(function (e) {
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
        Ce = P(ve)
      t.default = Ce
    },
    av9q: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        p = n('N+ot'),
        d = n.n(p),
        h = n('AuHH'),
        f = n.n(h),
        m = n('KEM+'),
        y = n.n(m),
        E = (n('2G9S'), n('M+/F'), n('z84I'), n('ho0z'), n('1t7P'), n('jQ/y'), n('hBvt'), n('ERkP')),
        g = n('3XMw'),
        b = n.n(g),
        S = n('t62R'),
        v = n('htQn'),
        _ = n('rHpw')
      function C(e) {
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
          return d()(this, n)
        }
      }
      var A = b.a.c174e46e,
        O = b.a.a39075ff,
        w = (function (e) {
          u()(n, e)
          var t = C(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', { showAllScopes: !1 }),
              y()(s()(e), '_handleToggleShowMoreScopes', function () {
                var t = e.state.showAllScopes
                e.setState({ showAllScopes: !t })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.scopes,
                    n = e.size,
                    r = e.title,
                    a = this.state.showAllScopes,
                    o = a ? t : t.slice(0, 3),
                    c = t.length > 3
                  return E.createElement(
                    E.Fragment,
                    null,
                    E.createElement(S.b, { style: L.scopesHeader, weight: 'bold' }, r),
                    E.createElement(
                      v.a,
                      { withInteractiveStyling: !1 },
                      o.map(function (e) {
                        return E.createElement(
                          S.b,
                          { color: 'subtext2' === n ? 'gray700' : void 0, key: e.name, size: n, style: L.listItem },
                          e.description,
                        )
                      }),
                    ),
                    c && a
                      ? E.createElement(S.b, { onPress: this._handleToggleShowMoreScopes, style: L.toggleMoreLink }, A)
                      : null,
                    c && !a
                      ? E.createElement(
                          S.b,
                          { onPress: this._handleToggleShowMoreScopes, style: L.toggleMoreLink },
                          O({ n: t.length - 3 }),
                        )
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(E.Component),
        L = _.a.create(function (e) {
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
