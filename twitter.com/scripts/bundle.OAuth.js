;(window.webpackJsonp = window.webpackJsonp || []).push([
  [73],
  {
    '5xYW': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'OAuthConsentScreen', function () {
          return _e
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
        g = n.n(E),
        b = (n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('yH/f'), n('oEOe')),
        S = n('kGix'),
        v = n('Ssj5')
      function _(e, t) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var A = 'oAuthConsent',
        O = Object.freeze({
          REQUEST: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_REQUEST',
          SUCCESS: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_SUCCESS',
          FAILURE: 'rweb/oAuthConsent/FETCH_CONSENT_METADATA_FAILURE',
        }),
        w = Object.freeze({
          REQUEST: 'rweb/oAuthConsent/POST_CONSENT_REQUEST',
          SUCCESS: 'rweb/oAuthConsent/POST_CONSENT_SUCCESS',
          FAILURE: 'rweb/oAuthConsent/POST_CONSENT_FAILURE',
        }),
        L = 'rweb/oAuthConsent/FETCH_FAILED',
        T = { consentMetadata: void 0, fetchStatus: S.a.NONE, postStatus: S.a.NONE, redirectUri: void 0 }
      function k() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case O.REQUEST:
            return C(C({}, e), {}, { fetchStatus: S.a.LOADING })
          case O.FAILURE:
            return C(C({}, e), {}, { fetchStatus: S.a.FAILED })
          case O.SUCCESS:
            return t.payload ? C(C({}, e), {}, { consentMetadata: t.payload, fetchStatus: S.a.LOADED }) : e
          case L:
            return t.payload ? C(C({}, e), {}, { fetchStatus: S.a.FAILED, redirectUri: t.payload.redirectUri }) : e
          case w.REQUEST:
            return C(C({}, e), {}, { postStatus: S.a.LOADING })
          case w.FAILURE:
            return C(C({}, e), {}, { postStatus: S.a.FAILED })
          case w.SUCCESS:
            return t.payload ? C(C({}, e), {}, { redirectUri: t.payload.redirect_uri, postStatus: S.a.LOADED }) : e
          default:
            return e
        }
      }
      v.a.register(y()({}, A, k))
      var D = function (e) {
          return e.oAuthConsent.consentMetadata || {}
        },
        M = function (e) {
          return e.oAuthConsent.redirectUri || ''
        },
        I = function (e) {
          return e.oAuthConsent.fetchStatus
        },
        R = function (e) {
          return e.oAuthConsent.postStatus
        },
        U = function (e) {
          return function (t, n, r) {
            var a = r.api
            return b.b(t, { params: e, request: a.OAuth.fetch })({ actionTypes: O, context: 'FETCH_CONSENT_METADATA' })
          }
        },
        N = function (e) {
          return function (t, n, r) {
            var a = r.api
            return b.b(t, { params: e, request: a.OAuth.post })({ actionTypes: w, context: 'POST_CONSENT' })
          }
        },
        F = n('G6rE'),
        x = n('rxPX'),
        P = n('0KEI'),
        H = Object(x.a)()
          .propsFromState(function () {
            return {
              fetchStatus: I,
              oAuthConsentMetadata: D,
              postStatus: R,
              redirectUri: M,
              user: F.e.selectLoggedInUser,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('OAUTH_CONSENT'),
              fetchConsentMetadata: U,
              postConsent: N,
            }
          }),
        j = {
          customErrorHandler: function (e) {
            var t = e.errors
            return Array.isArray(t) && t.length > 0
              ? { payload: { redirectUri: t[0].redirect_uri }, type: L }
              : { payload: {}, type: L }
          },
        },
        B = n('av9q'),
        W = n('lUZE'),
        z = n('Es6L'),
        Q = n('MWbm'),
        G = n('pxuL'),
        q = n('SyIi'),
        K = n('t62R'),
        X = n('rHpw')
      function Y(e) {
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
      var Z = (function (e) {
        u()(n, e)
        var t = Y(n)
        function n() {
          return a()(this, n), t.apply(this, arguments)
        }
        return (
          c()(n, [
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
                  n = e.footerContent
                return g.a.createElement(
                  Q.a,
                  { style: J.container },
                  g.a.createElement(Q.a, { style: J.navbar }, g.a.createElement(W.a, { style: J.icon })),
                  g.a.createElement(Q.a, { style: J.body }, g.a.createElement(q.a, { showReload: !0 }, t)),
                  n
                    ? g.a.createElement(Q.a, { style: J.footer }, g.a.createElement(K.b, { style: J.footerContent }, n))
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      y()(Z, 'contextType', G.a)
      var J = X.a.create(function (e) {
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
        V = Z,
        $ = 'OAuth_Consent_Button',
        ee = 'OAuth_Consent_Error_Detail',
        te = n('mw9i'),
        ne = n('IMA+'),
        re = n('Qwev'),
        ae = n('/yvb'),
        oe = n('OOKO'),
        ce = n('q9Zt'),
        ie = n('i4Oy'),
        se = n('U+bB'),
        le = n('3XMw'),
        ue = n.n(le)
      function pe(e) {
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
      var de = ue.a.bfaadb2c,
        he = ue.a.f4392d00,
        fe = ue.a.b08821f3,
        me = ue.a.cfd2f35d,
        ye = ue.a.ee4dca3c,
        Ee = ue.a.eafcc76a,
        ge = ue.a.j3998a15,
        be = ue.a.bb347bbb,
        Se = ue.a.fc2a5c92,
        ve = ue.a.e0876919,
        _e = (function (e) {
          u()(n, e)
          var t = pe(n)
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
                  n === S.a.FAILED || '' === r || e.redirectUri === r || this._changeWindowLocation(r)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props.fetchStatus,
                    n = t === S.a.FAILED
                  return (
                    (e =
                      t === S.a.LOADING
                        ? g.a.createElement(Q.a, null, this._renderLoading())
                        : n
                        ? g.a.createElement(Q.a, null, this._renderErrorState())
                        : this._renderMainContent()),
                    g.a.createElement(
                      V,
                      { footerContent: this._renderFooterContent() },
                      g.a.createElement(te.a, { style: Ce.layout }, e),
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
                    s = c === S.a.FAILED,
                    l = c === S.a.LOADING || c === S.a.LOADED,
                    u = i || {},
                    p = u.id_str,
                    d = u.name,
                    h = u.profile_image_url_https,
                    f = u.screen_name,
                    m = ie.a.get('window').width < X.a.theme.breakpoints.medium
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    s ? this._renderErrorState() : null,
                    g.a.createElement(
                      Q.a,
                      { style: m ? Ce.mobileContainer : Ce.container },
                      g.a.createElement(
                        Q.a,
                        { style: Ce.head },
                        g.a.createElement(se.a, { source: r, style: Ce.image }),
                        g.a.createElement(
                          K.b,
                          { size: 'title4', style: Ce.headline, weight: 'heavy' },
                          de({ appName: a }),
                          '.',
                        ),
                        g.a.createElement(ne.a, {
                          avatarUri: h,
                          displayMode: 'UserCompact',
                          name: d,
                          screenName: f,
                          style: Ce.userCell,
                          userId: p,
                        }),
                        g.a.createElement(
                          Q.a,
                          { accessibilityLiveRegion: 'polite', style: Ce.actionContainer },
                          l
                            ? g.a.createElement(re.a, null)
                            : g.a.createElement(
                                ae.a,
                                {
                                  disabled: !o,
                                  onClick: this._handleSubmit,
                                  size: 'xLarge',
                                  testID: $,
                                  type: 'brandFilled',
                                },
                                he,
                              ),
                        ),
                        g.a.createElement(
                          K.b,
                          { accessibilityLabel: ye, color: 'link', onPress: this._handleCancel, size: 'subtext2' },
                          me,
                        ),
                      ),
                      g.a.createElement(oe.a, { spacing: 'space32' }),
                      g.a.createElement(K.b, null, n),
                      this._renderScopesList(),
                      this._renderCanDoScopes(),
                      g.a.createElement(oe.a, { spacing: 'space32' }),
                      this._renderPrivacyAndTerms(),
                    ),
                    g.a.createElement(K.b, { link: 'https://www.twitter.com', style: Ce.twitterLink }, 'Twitter'),
                  )
                },
              },
              {
                key: '_renderFooterContent',
                value: function () {
                  return g.a.createElement(
                    K.b,
                    null,
                    g.a.createElement(
                      ue.a.I18NFormatMessage,
                      { $i18n: 'a0b6818f' },
                      g.a.createElement(
                        K.b,
                        {
                          link: 'https://help.twitter.com/en/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                        },
                        be,
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
                  return t.length ? g.a.createElement(B.a, { scopes: t, title: Ee }) : null
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
                  return t.length ? g.a.createElement(B.a, { scopes: t, title: ge }) : null
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
                  return g.a.createElement(
                    K.b,
                    null,
                    g.a.createElement(
                      ue.a.I18NFormatMessage,
                      { $i18n: 'afd52f45', orgName: t },
                      g.a.createElement(K.b, { link: a }, t),
                      g.a.createElement(K.b, { link: n }, 'privacy policy'),
                      g.a.createElement(K.b, { link: r }, 'terms'),
                    ),
                  )
                },
              },
              {
                key: '_renderLoading',
                value: function () {
                  return g.a.createElement(re.a, null)
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
                    ? g.a.createElement(
                        ce.a,
                        { buttonLink: r, retryLabel: fe, style: Ce.errorState, testID: ee, title: Se },
                        ve,
                      )
                    : g.a.createElement(
                        ce.a,
                        {
                          onRetry: function (e) {
                            return t()
                          },
                          retryLabel: fe,
                          style: Ce.errorState,
                          testID: ee,
                          title: Se,
                        },
                        ve,
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
                  ).catch(r(j))
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Ce = X.a.create(function (e) {
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
        Ae = H(_e)
      t.default = Ae
    },
    av9q: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return L
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
        g = n.n(E),
        b = n('3XMw'),
        S = n.n(b),
        v = n('t62R'),
        _ = n('htQn'),
        C = n('rHpw')
      function A(e) {
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
      var O = S.a.c174e46e,
        w = S.a.a39075ff,
        L = (function (e) {
          u()(n, e)
          var t = A(n)
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
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(v.b, { style: T.scopesHeader, weight: 'bold' }, r),
                    g.a.createElement(
                      _.a,
                      { withInteractiveStyling: !1 },
                      o.map(function (e) {
                        return g.a.createElement(
                          v.b,
                          { color: 'subtext2' === n ? 'gray700' : void 0, key: e.name, size: n, style: T.listItem },
                          e.description,
                        )
                      }),
                    ),
                    c && a
                      ? g.a.createElement(
                          v.b,
                          { onPress: this._handleToggleShowMoreScopes, style: T.toggleMoreLink },
                          O,
                        )
                      : null,
                    c && !a
                      ? g.a.createElement(
                          v.b,
                          { onPress: this._handleToggleShowMoreScopes, style: T.toggleMoreLink },
                          w({ n: t.length - 3 }),
                        )
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        T = C.a.create(function (e) {
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
