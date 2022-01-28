;(window.webpackJsonp = window.webpackJsonp || []).push([
  [61, 186],
  {
    '0+0m': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'c', function () {
          return a
        }),
        n.d(t, 'b', function () {
          return o
        }),
        n.d(t, 'f', function () {
          return c
        }),
        n.d(t, 'd', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return s
        })
      n('yH/f')
      var r = 'com.twitter.twitter.siwa',
        a = '49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com',
        o = 300,
        c = 'popup_closed_by_user',
        i = Object.freeze({ SignUp: 'signup_with', SignIn: 'signin_with' }),
        s = Object.freeze({ Button: 'button', Prompt: 'prompt' })
    },
    '1zbE': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return s
      }),
        n.d(t, 'a', function () {
          return u
        }),
        n.d(t, 'c', function () {
          return l
        })
      n('yH/f')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        c = n('3XMw'),
        i = n.n(c),
        s = 'phone_email',
        u = Object.freeze({ LogIn: 'login', SignUp: 'signup' }),
        l = a.a.createElement(
          i.a.I18NFormatMessage,
          { $i18n: 'c4d3d078' },
          a.a.createElement(o.b, { link: 'https://twitter.com/tos' }, i.a.c8c5faad),
          a.a.createElement(o.b, { link: 'https://twitter.com/privacy' }, i.a.ba5b7ecb),
          a.a.createElement(o.b, { link: 'https://help.twitter.com/rules-and-policies/twitter-cookies' }, i.a.f4fe46c3),
        )
    },
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
        o = n('yLYC'),
        c = n('Ud88'),
        i = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        s = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        u = s.fetchQueryDeduped,
        l = s.fetchQuery
      e.exports = function (e, t, n) {
        i()
        var s,
          d = c(),
          p = t.fetchKey,
          f = t.fetchPolicy,
          h = t.source,
          m = t.variables,
          b = t.networkCacheConfig,
          y = o(e, m, b)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          y.request.node.params.name !== t.name && r(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: u(d, y.request.identifier, function () {
                return d === t.environment && null != h
                  ? d.executeWithSource({ operation: y, source: h })
                  : d.execute({ operation: y })
              }),
              fetchPolicy: f,
              query: y,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var g = l(d, y)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != h && d === t.environment ? h.ifEmpty(g) : (t.environment, g),
            fetchKey: p,
            fetchPolicy: f,
            query: y,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(s)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = r.useEffect,
        o = r.useRef
      e.exports = function () {
        var e = o(!0)
        return (
          a(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    '3rEN': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return U
      })
      n('yH/f')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('Hde2'),
        c = n('bojF'),
        i = n('3XMw'),
        s = n.n(i),
        u = n('lUZE'),
        l = n('1f8Q'),
        d = n('72nz'),
        p = n('rHpw'),
        f = n('MWbm'),
        h = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        m = n.n(h),
        b = (n('M+/F'), n('z84I'), n('uFXj'), n('2G9S'), n('FQwk')),
        y = n('iCMz'),
        g = n('Rp9C'),
        v = n('Irs7'),
        S = n('htQn'),
        _ = n('t62R')
      function w(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var O,
        k = s.a.d228a9a0,
        I = s.a.jae84f3a,
        P = { section: 'logged_out_search', component: 'trend' },
        C = function (e) {
          var t = e.position,
            n = e.trend,
            r = Object(v.b)(),
            o = a.a.useMemo(
              function () {
                return [E(E({}, g.a.getTrendItem(n)), {}, { position: t })]
              },
              [n, t],
            )
          a.a.useEffect(
            function () {
              r.scribe(E(E({}, P), {}, { action: 'impression', data: { items: o } }))
            },
            [r, o],
          )
          var c = '/search?src=logged_out_home_trend_click&vertical=trends&q='.concat(encodeURIComponent(n))
          return a.a.createElement(
            S.a,
            {
              accessibilityRole: 'listitem',
              onClick: function () {
                return r.scribe(E(E({}, P), {}, { action: 'click', data: { items: o } }))
              },
              withInteractiveStyling: !1,
            },
            a.a.createElement(_.b, { color: 'gray700', key: n, link: c, style: j.searchTrend }, n),
          )
        },
        R = function (e) {
          var t = e.deviceSize,
            n = e.trendResults.slice(0, 5)
          return a.a.createElement(
            f.a,
            {
              accessibilityLabel: I,
              accessibilityRole: 'list',
              style: [j.searchTrends, 'desktop' === t && j.searchTrendsWide],
            },
            n.map(function (e, t) {
              return a.a.createElement(C, { key: e, position: t, trend: e })
            }),
            a.a.createElement(
              S.a,
              { accessibilityRole: 'listitem', withInteractiveStyling: !1 },
              a.a.createElement(_.b, { link: '/explore', style: j.searchTrend }, k),
            ),
          )
        },
        j = p.a.create(function (e) {
          return {
            bottomBarForMobile: {
              backgroundColor: e.colors.navigationBackground,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              padding: 'calc('.concat(e.spaces.space16, ' + ').concat(p.a.iPhoneOffsetBottom, ')'),
            },
            searchHomeFooter: { backgroundColor: e.colors.gray50 },
            searchHomeFooterMobile: {
              marginBottom: 'calc('.concat(e.spaces.space56, ' + ').concat(e.spaces.space4, ')'),
            },
            searchRoot: { flex: 1, alignItems: 'center', marginTop: '25vh', zIndex: 1 },
            searchRootMobile: { marginBottom: '55vh' },
            searchBox: {
              height: e.spaces.space40,
              width: 'calc(100% - '.concat(e.spaces.space32, ')'),
              marginBottom: e.spaces.space12,
              zIndex: 1,
            },
            searchBoxWide: { width: 'calc('.concat(e.spaces.space48, ' * 10)') },
            searchNavBar: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              margin: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space2, ')'),
            },
            searchNavButtons: { flexDirection: 'row' },
            searchTrend: { marginTop: e.spaces.space12, marginHorizontal: e.spaces.space8 },
            searchTrends: {
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: 'calc(100% - '.concat(e.spaces.space32, ')'),
            },
            searchTrendsWide: { width: 'calc('.concat(e.spaces.space48, ' * 10)') },
            twitterIconSearch: {
              alignSelf: 'center',
              color: e.colors.brandColor,
              marginBottom: 'calc('.concat(e.spaces.space36, ' + ').concat(e.spaces.space2, ')'),
              height: e.spaces.space48,
            },
          }
        }),
        x = function (e) {
          var t = e.deviceSize,
            n = e.scribeNamespace,
            r = e.trendResults,
            i = function () {
              return a.a.createElement(y.a, {
                buttonSize: 'large',
                loginButtonType: 'primaryOutlined',
                scribeNamespace: E(E({}, n), {}, { component: 'signup_callout', element: 'form', section: 'front' }),
                signupButtonType: 'primaryFilled',
              })
            }
          return a.a.createElement(
            a.a.Fragment,
            null,
            'desktop' !== t
              ? a.a.createElement(o.a, { style: j.bottomBarForMobile }, i())
              : a.a.createElement(
                  f.a,
                  { style: j.searchNavBar },
                  a.a.createElement(f.a, { style: j.searchNavButtons }, i()),
                ),
            a.a.createElement(
              f.a,
              { style: [j.searchRoot, 'desktop' !== t && j.searchRootMobile] },
              a.a.createElement(u.a, { style: j.twitterIconSearch }),
              a.a.createElement(
                f.a,
                { style: [j.searchBox, 'desktop' === t && j.searchBoxWide] },
                a.a.createElement(d.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
              ),
              r && a.a.createElement(R, { deviceSize: t, trendResults: r }),
            ),
            a.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              a.a.createElement(
                f.a,
                { style: [j.searchHomeFooter, 'desktop' !== t && j.searchHomeFooterMobile] },
                a.a.createElement(b.a, { align: 'center' }),
              ),
            ),
          )
        },
        D = s.a.g0ff1ca8,
        T = s.a.g3aa4a89,
        L = p.a.create(function (e) {
          return {
            bottomBarBanner: {
              paddingBottom: p.a.iPhoneOffsetBottom,
              backgroundColor: e.colors.primary,
              boxShadow: e.boxShadows.medium,
            },
            searchRootWithBanner: { marginTop: '30vh', marginBottom: '0' },
          }
        }),
        A = function (e) {
          var t = e.deviceSize,
            n = e.trendResults
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              f.a,
              { style: [j.searchRoot, 'desktop' !== t && j.searchRootMobile, L.searchRootWithBanner] },
              a.a.createElement(u.a, { style: j.twitterIconSearch }),
              a.a.createElement(
                f.a,
                { style: [j.searchBox, 'desktop' === t && j.searchBoxWide] },
                a.a.createElement(d.default, { forceVdlDisable: !1, isOnHomepage: !0, shouldHandleSearchShortcut: !0 }),
              ),
              n && a.a.createElement(R, { deviceSize: t, trendResults: n }),
            ),
            a.a.createElement(
              c.CookieComplianceBannerPadder,
              null,
              a.a.createElement(
                o.a,
                { style: L.bottomBarBanner },
                a.a.createElement(l.a, { buttonSize: 'large', fullWidth: !0, subtext: T, text: D }),
              ),
            ),
          )
        },
        B = n('n0Rl'),
        F = n('RgK2'),
        z = n.n(F),
        N = n('kGix'),
        U = (n('enFi'), Object.freeze({ original: 'original', banner: 'banner', split: 'split' })),
        H = void 0 !== O ? O : (O = n('x1T0')),
        M = Object(B.b)(H, { errorConfig: { context: 'LOGGED_OUT_SEARCH_SCREEN' } })
      t.b = function (e) {
        var t = e.deviceSize,
          n = e.scribeNamespace,
          r = e.variation
        return a.a.createElement(M, {
          render: function (e) {
            var o,
              c = e.data,
              i = e.fetchStatus,
              s =
                (e.retry,
                i === N.a.LOADED
                  ? null == c || null === (o = c.logged_out_trends_list) || void 0 === o
                    ? void 0
                    : o.trends
                  : void 0)
            return r === U.original
              ? a.a.createElement(x, { deviceSize: t, scribeNamespace: n, trendResults: s })
              : r === U.banner
              ? a.a.createElement(A, { deviceSize: t, trendResults: s })
              : null
          },
          variables: z.a,
        })
      }
    },
    '4ZbN': function (e, t, n) {
      'use strict'
      t.a = {
        deleteRecentSearchesDialog: 'deleteRecentSearchesDialog',
        deleteSavedSearchDialog: 'deleteSavedSearchDialog',
        typeaheadEmptySearch: 'typeaheadEmptySearch',
        typeaheadRecentSearchesHeader: 'typeaheadRecentSearchesHeader',
        typeaheadRecentSearchesItem: 'typeaheadRecentSearchesItem',
        typeaheadSavedSearchesContainer: 'typeaheadSavedSearchesContainer',
        typeaheadSavedSearchesHeader: 'typeaheadSavedSearchesHeader',
        typeaheadSavedSearchesItem: 'typeaheadSavedSearchesItem',
      }
    },
    '6oVL': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('2G9S'), n('MvUL'), n('KqXw'), n('Ysgh'), n('ERkP')),
        S = n.n(v),
        _ = n('3XMw'),
        w = n.n(_),
        E = n('cnVF'),
        O = n('Ukpf'),
        k = n('BTou'),
        I = n('mrHL'),
        P = 'LoginForm_Login_Button',
        C = n('fEA7'),
        R = n.n(C),
        j = n('MWbm'),
        x = n('Irs7'),
        D = n('v6aA'),
        T = n('/yvb'),
        L = n('rHpw')
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var B = w.a.e919c3bc,
        F = (function (e) {
          p()(n, e)
          var t = A(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(l()(e), '_mobileLoginToken', R.a.v1().replace(/-/g, '')),
              g()(l()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onSubmit
                if ((n.scribe({ action: 'submit' }), k.a.flushHTMLCache(), e._setLoginCookie(), r))
                  return r(e._form.elements), !1
              }),
              g()(l()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              g()(l()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              g()(l()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(I.e)(E.q, e._mobileLoginToken, {
                    featureSwitches: e.context.featureSwitches,
                    cookieOptions: { domain: void 0, expires: t },
                  })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.autoSubmit && !e.autoSubmit && this._handleSubmitButtonClick()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  O.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.formActionUrl,
                    r = e.hideSubmitButton,
                    o = e.horizontalLayout,
                    c = e.loginReturnPath,
                    i = e.submitButtonDisabled,
                    s = e.submitButtonLabel,
                    u = e.submitButtonSize,
                    l = e.submitButtonStyle,
                    d = e.submitButtonType,
                    p = 'string' == typeof c ? c.split('?') : [],
                    f = a()(p, 2),
                    h = f[0],
                    m = f[1],
                    b = encodeURI(h || '/'),
                    y = m ? '?'.concat(m) : '',
                    g = ''.concat('').concat(b).concat(y),
                    v = S.a.createElement(
                      j.a,
                      { style: o && z.horizontalFields },
                      S.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: g }),
                      S.a.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      S.a.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      S.a.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      S.a.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      r
                        ? null
                        : S.a.createElement(
                            j.a,
                            { style: o && z.loginButtonContainer },
                            S.a.createElement(
                              T.a,
                              {
                                disabled: i,
                                onPress: this._handleSubmitButtonClick,
                                size: u,
                                style: l,
                                testID: P,
                                type: d,
                              },
                              s,
                            ),
                          ),
                    )
                  return S.a.createElement(
                    j.a,
                    { style: z.loginForm },
                    S.a.createElement('form', {
                      action: n,
                      children: v,
                      method: 'post',
                      noValidate: !0,
                      onSubmit: this._handleSubmit,
                      ref: this._setFormRef,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      g()(F, 'contextType', D.a),
        g()(F, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: B,
          submitButtonType: 'brandFilled',
        })
      var z = L.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(x.a)(F, { element: 'inline_login_form' })
    },
    '72nz': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SearchBoxContainer', function () {
          return vt
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('hBvt'), n('ho0z'), n('WNMA'), n('KqXw'), n('MvUL'), n('ERkP')),
        S = n.n(v),
        _ = n('+Kfv'),
        w = n('lnti'),
        E = n('wtjx'),
        O = n('rxPX'),
        k = Object(O.a)()
          .propsFromActions(function () {
            return { addQuery: E.a }
          })
          .withAnalytics({ component: 'search_box' }),
        I = n('Hw0q'),
        P = n('3XMw'),
        C = n.n(P),
        R = n('8jkQ'),
        j = n('u3ZE'),
        x = n('rRIm'),
        D = n('Rp9C'),
        T = n('RhWx'),
        L = n.n(T),
        A =
          (n('z84I'),
          n('vrRf'),
          n('2G9S'),
          n('5BYb'),
          n('jQ3i'),
          n('x4t0'),
          n('M+/F'),
          n('wFPu'),
          n('vfdX'),
          n('hqKg')),
        B = n('3IPs'),
        F = n('M0jS'),
        z = n('G6rE'),
        N = n('k49u'),
        U = n('J4ZH'),
        H = n('0KEI'),
        M = n('v4XE'),
        q = n('kGix')
      function W(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? W(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var K = function (e) {
          return (
            Object(N.c)(e, N.a.GenericUserNotFound) ||
            Object(N.c)(e, N.a.OtherUserSuspended) ||
            Object(N.c)(e, N.a.AddressBookLookupNotFound)
          )
        },
        Q = Object(O.a)()
          .propsFromState(function () {
            var e = Object(A.createSelector)(E.g, z.e.selectFetchStatuses, function (e, t) {
                var n = Object(w.a)(
                  e.map(function (e) {
                    var n,
                      r = null === (n = e.user) || void 0 === n ? void 0 : n.id
                    return r && t[r] ? { id: r, fetchStatus: t[r] } : void 0
                  }),
                )
                return Object(U.a)(n, function (e) {
                  return e.fetchStatus
                })
              }),
              t = Object(A.createSelector)(e, function (e) {
                return (e[q.a.FAILED] || []).map(function (e) {
                  return e.id
                })
              }),
              n = Object(A.createSelector)(e, z.e.selectErrors, function (e, t) {
                return (e[q.a.FAILED] || [])
                  .filter(function (e) {
                    var n = e.id
                    return K(t[n] || {})
                  })
                  .map(function (e) {
                    return e.id
                  })
              }),
              r = Object(A.createSelector)(e, z.e.selectErrors, function (e, t) {
                var n = (e[q.a.FAILED] || []).filter(function (e) {
                  var n = e.id
                  return !K(t[n] || {})
                })
                return (e[q.a.LOADING] || []).length > 0
                  ? q.a.LOADING
                  : (e[q.a.LOADED] || []).length > 0
                  ? q.a.LOADED
                  : n.length > 0
                  ? q.a.FAILED
                  : q.a.NONE
              }),
              a = Object(A.createSelector)(E.g, function (e) {
                return e.map(function (e) {
                  return V(V({}, e), {}, { category: B.b.RecentSearch })
                })
              }),
              o = Object(A.createSelector)(M.d, function (e) {
                return e.map(function (e) {
                  return { keyword: { query: e.query }, savedSearchId: e.id_str, category: B.b.SavedSearch }
                })
              })
            return {
              isRecentSearchDataLoaded: E.e,
              recentSearches: a,
              usersFetchStatus: r,
              invalidRecentSearchUserIds: n,
              failedRecentSearchUserIds: t,
              savedSearches: o,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.failedRecentSearchUserIds,
              n = e.invalidRecentSearchUserIds,
              r = e.isRecentSearchDataLoaded,
              a = e.recentSearches,
              o = e.savedSearches,
              c = e.usersFetchStatus,
              i = !a.filter(function (e) {
                var t = e.user
                return t && n.indexOf(t.id) < 0
              }).length,
              s = c !== q.a.LOADING && r && i ? q.a.LOADED : c
            return {
              failedRecentSearchUserIds: t,
              invalidRecentSearchUserIds: n,
              recentSearches: a,
              fetchStatus: s,
              savedSearches: o,
            }
          })
          .propsFromActions(function () {
            return {
              clearAll: E.b,
              createLocalApiErrorHandler: Object(H.createLocalApiErrorHandlerWithContextFactory)('SEARCH_ONE_CLICK'),
              deleteSavedSearch: M.a,
              fetchRecentSearchesIfNeeded: E.c,
              fetchSavedSearchesIfNeeded: M.b,
              fetchUsersIfNeeded: z.e.fetchManyIfNeeded,
              fetchUsersPresenceIfNeeded: F.b.fetchManyIfNeeded,
              removeQuery: E.d,
            }
          })
          .withAnalytics({ element: 'typeahead' }),
        G = n('sYRn'),
        X = n('v//M'),
        Z = n('7nmT'),
        J = n.n(Z),
        Y = (n('jQ/y'), n('m3Bd')),
        $ = n.n(Y),
        ee = n('hOZg'),
        te = n('5T6p'),
        ne = n('MWbm'),
        re = n('/yvb'),
        ae = n('rHpw')
      function oe(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ce = C.a.e68b09b4,
        ie = (function (e) {
          p()(n, e)
          var t = oe(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.onRemove,
                    r = $()(e, ['id', 'onRemove'])
                  return t
                    ? S.a.createElement(
                        ne.a,
                        { style: se.root },
                        S.a.createElement(te.a, r),
                        S.a.createElement(re.a, {
                          accessibilityLabel: ce,
                          icon: S.a.createElement(ee.a, null),
                          onPress: n,
                          size: 'small',
                          style: se.button,
                          type: 'brandText',
                        }),
                      )
                    : null
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  var e = this.props,
                    t = e.id,
                    n = e.image,
                    r = e.supportText,
                    a = e.title
                  return {
                    category: B.b.RecentSearch,
                    query: t,
                    recentSearchType: B.a.Event,
                    queryMetadata: { id: t, image: n, title: a, supportText: r },
                  }
                },
              },
            ]),
            n
          )
        })(S.a.PureComponent),
        se = ae.a.create(function (e) {
          return { root: { flexDirection: 'row', justifyContent: 'space-between' }, button: { alignSelf: 'center' } }
        }),
        ue = ie,
        le = n('j7Bv'),
        de = n('5mJL'),
        pe = n('t62R'),
        fe = n('EHV7')
      function he(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var me = S.a.createElement(ee.a, null),
        be = C.a.e68b09b4,
        ye = (function (e) {
          p()(n, e)
          var t = he(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.id,
                    r = e.name,
                    a = e.onRemove,
                    o = e.withNewTypeaheadUI
                  if (!n) return null
                  var c = o ? 'xxxLarge' : 'xLarge',
                    i = S.a.createElement(le.a, { Icon: fe.a, color: 'primary', size: c, style: ge.searchIcon })
                  return S.a.createElement(
                    de.a,
                    { avatarCell: i, avatarSize: c, cellStyle: ge.bodyColumn },
                    S.a.createElement(
                      ne.a,
                      null,
                      S.a.createElement(pe.b, { numberOfLines: 1, weight: 'bold', withHashflags: !0 }, r),
                      S.a.createElement(pe.b, { color: 'gray700', numberOfLines: 1, withHashflags: !0 }, t),
                    ),
                    S.a.createElement(re.a, {
                      accessibilityLabel: be,
                      icon: me,
                      onPress: a,
                      size: 'small',
                      type: 'brandText',
                    }),
                  )
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.id,
                    r = e.name
                  return n
                    ? {
                        category: B.b.RecentSearch,
                        query: n,
                        recentSearchType: B.a.Topic,
                        queryMetadata: { id: n, name: r, description: t },
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(S.a.Component),
        ge = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        ve = function (e, t) {
          return z.e.select(e, t.id)
        },
        Se = function (e, t) {
          return Object(F.c)(e, t.id)
        },
        _e = Object(O.a)().propsFromState(function () {
          return { user: ve, userSpace: Se }
        }),
        we = n('v6aA'),
        Ee = n('IMA+')
      function Oe(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ke = S.a.createElement(ee.a, null),
        Ie = C.a.e68b09b4,
        Pe = C.a.fd06b02f,
        Ce = (function (e) {
          p()(n, e)
          var t = Oe(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(l()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              g()(l()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.index,
                  r = t.onItemClick,
                  a = e.searchItemData
                a && r(a, n)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    n = e.style,
                    r = e.user,
                    a = e.userSpace,
                    o = e.withNewTypeaheadUI,
                    c = this.context.featureSwitches
                  if (!r) return null
                  var i = a && c.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') ? a : void 0
                  i && (i.accessibilityLabel = Pe({ screenName: r.screen_name }))
                  var s = S.a.createElement(re.a, {
                    accessibilityLabel: Ie,
                    icon: ke,
                    onPress: t,
                    size: 'small',
                    type: 'brandText',
                  })
                  return S.a.createElement(Ee.a, {
                    avatarSize: 'xLarge',
                    avatarUri: r.profile_image_url_https,
                    decoration: s,
                    displayMode: o ? 'ExperimentalUserTypeahead' : 'UserCompact',
                    isProtected: r.protected,
                    isVerified: r.verified,
                    name: r.name,
                    onAvatarClick: this._handleAvatarClick,
                    onCellClick: this._handleClick,
                    onScreenNameClick: this._handleClick,
                    presenceIndicator: i,
                    screenName: r.screen_name,
                    style: n,
                    userId: r.id_str,
                    withInteractiveStyling: !1,
                    withLink: !1,
                    withUsernameCenterAligned: !0,
                  })
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  return this.props.user
                    ? {
                        category: B.b.RecentSearch,
                        link: this.props.user.screen_name,
                        query: this.props.id,
                        recentSearchType: B.a.User,
                      }
                    : null
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      g()(Ce, 'contextType', we.a)
      var Re = _e.forwardRef(Ce),
        je = n('oQhu'),
        xe = n('hiGS'),
        De = n('VwDm')
      function Te(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Le = S.a.createElement(ee.a, null),
        Ae = S.a.createElement(xe.a, null),
        Be = Object(je.a)(function (e) {
          return e === B.b.SavedSearch ? 'destructiveText' : 'brandText'
        }),
        Fe = Object(je.a)(function (e) {
          return e === B.b.SavedSearch ? Ae : Le
        }),
        ze = (function (e) {
          p()(n, e)
          var t = Te(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(l()(e), '_getButtonType', function () {
                var t = e.props.category
                return Be(t)
              }),
              g()(l()(e), '_getRemoveIcon', function () {
                var t = e.props.category
                return Fe(t)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onRemove,
                    n = e.query,
                    r = e.withNewTypeaheadUI ? 'xxxLarge' : 'xLarge',
                    a = S.a.createElement(le.a, { Icon: De.a, color: 'neutral', size: r, style: Ne.searchIcon })
                  return S.a.createElement(
                    de.a,
                    { avatarCell: a, avatarSize: r, cellStyle: Ne.bodyColumn },
                    S.a.createElement(pe.b, { numberOfLines: 1, withHashflags: !0 }, n),
                    S.a.createElement(re.a, {
                      accessibilityLabel: '',
                      icon: this._getRemoveIcon(),
                      onPress: t,
                      size: 'small',
                      type: this._getButtonType(),
                    }),
                  )
                },
              },
              {
                key: 'searchItemData',
                get: function () {
                  var e = this.props,
                    t = e.category
                  return {
                    category: t,
                    query: e.query,
                    recentSearchType: t === B.b.RecentSearch ? B.a.Keyword : void 0,
                  }
                },
              },
            ]),
            n
          )
        })(S.a.Component),
        Ne = ae.a.create(function (e) {
          return {
            bodyColumn: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            searchIcon: { marginRight: e.spaces.space12 },
          }
        }),
        Ue = ze,
        He = n('htQn')
      function Me(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var qe = (function (e) {
        p()(n, e)
        var t = Me(n)
        function n(e, r) {
          var a
          return (
            c()(this, n),
            (a = t.call(this, e, r)),
            g()(l()(a), '_renderSearchItem', function () {
              var e = a.props,
                t = e.index,
                n = e.item,
                r = e.onItemClick
              return n.keyword
                ? S.a.createElement(Ue, {
                    category: n.category,
                    onRemove: a._handleOnRemove,
                    query: n.keyword.query,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.user
                ? S.a.createElement(Re, {
                    id: n.user.id || '',
                    index: t,
                    onItemClick: r,
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    style: We.itemPadding,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.topic
                ? S.a.createElement(ye, {
                    description: n.topic.description || '',
                    id: n.topic.id,
                    name: n.topic.name || '',
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : n.event
                ? S.a.createElement(ue, {
                    id: n.event.id,
                    image: n.event.image || { url: '', height: 0, width: 0 },
                    onRemove: a._handleOnRemove,
                    ref: a._handleItemRef,
                    supportText: n.event.supportText || '',
                    title: n.event.title || '',
                    withNewTypeaheadUI: a._withNewTypeaheadUI,
                  })
                : null
            }),
            g()(l()(a), '_handleItemRef', function (e) {
              a._itemRef = e
            }),
            g()(l()(a), '_handleOnRemove', function (e) {
              var t = a.props,
                n = t.index,
                r = t.item
              ;(0, t.onRemoveQuery)(r, n), e.stopPropagation()
            }),
            g()(l()(a), '_handleOnClick', function () {
              var e = a.props,
                t = e.index,
                n = e.item,
                r = e.onItemClick
              n.user || (a.searchItemData && r(a.searchItemData, t))
            }),
            (a._withNewTypeaheadUI = a.context.featureSwitches.isTrue(
              'responsive_web_account_search_readability_enabled',
            )),
            a
          )
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.domId,
                  n = e.item,
                  r = e.testID
                return S.a.createElement(
                  _.a,
                  { viewType: 'search_item' },
                  S.a.createElement(
                    He.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: { selected: !!t },
                      focusable: !0,
                      nativeID: t,
                      onClick: this._handleOnClick,
                      style: [We.root, t && We.focused, !(null != n && n.user) && We.itemPadding],
                      testID: r,
                    },
                    this._renderSearchItem(),
                  ),
                )
              },
            },
            {
              key: 'searchItemData',
              get: function () {
                return this._itemRef ? this._itemRef.searchItemData : null
              },
            },
          ]),
          n
        )
      })(S.a.Component)
      g()(qe, 'contextType', we.a)
      var We = ae.a.create(function (e) {
          return {
            root: { cursor: 'pointer' },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            focused: { backgroundColor: e.colors.gray0 },
          }
        }),
        Ve = qe,
        Ke = n('4ZbN'),
        Qe = n('eb3s'),
        Ge = n('MXDK')
      function Xe(e, t) {
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
      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xe(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Je(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ye = C.a.ee295fbe,
        $e = { headline: C.a.f45c425f, text: C.a.caae4dd9, confirmButtonLabel: C.a.dbd5d40f },
        et = C.a.a8d68f61,
        tt = C.a.c6530778,
        nt = C.a.e047b8fa,
        rt = ['user', 'keyword'],
        at = (function (e) {
          p()(n, e)
          var t = Je(n)
          function n(e, r) {
            var a
            c()(this, n),
              (a = t.call(this, e, r)),
              g()(l()(a), '_withNewTypeaheadUI', !1),
              g()(l()(a), '_getRecentSearchItems', function () {
                var e = a.props,
                  t = e.failedRecentSearchUserIds,
                  n = e.recentSearches,
                  r = a.state.allowedRecentSearchItems,
                  o = n
                    .filter(function (e) {
                      var n = e.user
                      return !n || t.indexOf(n.id) < 0
                    })
                    .filter(function (e) {
                      return Object.keys(e).some(function (e) {
                        return r.includes(e)
                      })
                    })
                return o.length > 15 ? o.slice(0, 15) : o
              }),
              g()(l()(a), '_render', function () {
                var e = a.props,
                  t = e.domId,
                  n = e.savedSearches,
                  r = 0 === a._getNumOfSearchItems(),
                  o = a._getRecentSearchItems()
                return r
                  ? S.a.createElement(
                      ne.a,
                      { style: ot.emptyState, testID: Ke.a.typeaheadEmptySearch },
                      S.a.createElement(pe.b, { align: 'center', color: 'gray700' }, Ye),
                    )
                  : S.a.createElement(
                      ne.a,
                      { accessibilityRole: 'listbox', nativeID: t },
                      o.length > 0
                        ? S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              ne.a,
                              { style: ot.header, testID: Ke.a.typeaheadRecentSearchesHeader },
                              S.a.createElement(pe.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, et),
                              S.a.createElement(
                                re.a,
                                { onPress: a._handleClearAllClick, size: 'xSmall', type: 'brandText' },
                                nt,
                              ),
                            ),
                            o.map(function (e, t) {
                              return a._renderRecentSearchItem(e, t)
                            }),
                          )
                        : null,
                      n.length > 0
                        ? S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              ne.a,
                              {
                                accessibilityHidden: !0,
                                style: [ot.header, ot.borderTop],
                                testID: Ke.a.typeaheadSavedSearchesHeader,
                              },
                              S.a.createElement(pe.b, { numberOfLines: 1, size: 'headline1', weight: 'bold' }, tt),
                            ),
                            a._renderSavedSearches(),
                          )
                        : null,
                    )
              }),
              g()(l()(a), '_renderRecentSearchItem', function (e, t) {
                var n = a.props.ariaDescendantId,
                  r = a.state.focusIndex === t
                return S.a.createElement(Ve, {
                  domId: r ? n : void 0,
                  index: t,
                  item: e,
                  key: a._chooseKeyType(e, t),
                  onItemClick: a._handleOnItemClick,
                  onRemoveQuery: a._handleRemoveQuery,
                  ref: r ? a._setFocusedItemRef : void 0,
                  testID: Ke.a.typeaheadRecentSearchesItem,
                })
              }),
              g()(l()(a), '_chooseKeyType', function (e, t) {
                return e.keyword
                  ? 'keyword_'.concat(e.keyword.query)
                  : e.user
                  ? 'user_'.concat(e.user.id)
                  : e.topic
                  ? 'topic_'.concat(e.topic.id)
                  : e.event
                  ? 'event_'.concat(e.event.id)
                  : ''.concat(t)
              }),
              g()(l()(a), '_renderSavedSearches', function () {
                var e = a.props,
                  t = e.ariaDescendantId,
                  n = e.savedSearches,
                  r = a.state.focusIndex,
                  o = a._getRecentSearchItems(),
                  c = L()(n)
                return (
                  c.reverse(),
                  S.a.createElement(
                    ne.a,
                    { testID: Ke.a.typeaheadSavedSearchesContainer },
                    c.map(function (e, n) {
                      var c = r === n + o.length
                      return S.a.createElement(Ve, {
                        domId: c ? t : void 0,
                        index: n,
                        item: e,
                        key: e.savedSearchId,
                        onItemClick: a._handleOnItemClick,
                        onRemoveQuery: a._handleRemoveQuery,
                        ref: c ? a._setFocusedItemRef : void 0,
                        testID: Ke.a.typeaheadSavedSearchesItem,
                      })
                    }),
                  )
                )
              }),
              g()(l()(a), '_getNumOfSearchItems', function () {
                var e = a.props.savedSearches,
                  t = a._getRecentSearchItems()
                return e.length + t.length
              }),
              g()(l()(a), '_handleUsersRetry', function () {
                a._fetchUsersDetailsIfNeeded()
              }),
              g()(l()(a), '_fetchUsersDetailsIfNeeded', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchUsersIfNeeded,
                  r = e.fetchUsersPresenceIfNeeded,
                  o = e.invalidRecentSearchUserIds,
                  c = e.recentSearches,
                  i = a.context,
                  s = i.featureSwitches,
                  u = i.loggedInUserId,
                  l = (function (e, t) {
                    return e
                      .map(function (e) {
                        var t
                        return null == e || null === (t = e.user) || void 0 === t ? void 0 : t.id
                      })
                      .filter(Boolean)
                      .filter(function (e) {
                        return t.indexOf(e) < 0
                      })
                  })(c, o)
                n(l).catch(t({})),
                  u && s.isTrue('voice_rooms_recent_search_audiospace_ring_enabled') && r(l).catch(t({}))
              }),
              g()(l()(a), '_handleRemoveQuery', function (e, t) {
                var n = a.props,
                  r = n.analytics,
                  o = n.removeQuery
                switch (e.category) {
                  case B.b.RecentSearch:
                    var c = { keyword: e.keyword, user: e.user, topic: e.topic, event: e.event }
                    o(c), a._resetFocus()
                    var i = D.a.forRecentSearchResult(c, t),
                      s = a._handleRemoveAction(e)
                    i && r.scribe({ action: s, data: { items: [i] } })
                    break
                  case B.b.SavedSearch:
                    a.setState({ shouldShowDeleteSavedSearchConfirmation: !0, savedSearchIdToDelete: e.savedSearchId })
                    break
                  default:
                    return
                }
              }),
              g()(l()(a), '_handleRemoveAction', function (e) {
                return e.user
                  ? 'clear_user'
                  : e.topic
                  ? 'clear_topic_interests'
                  : e.event
                  ? 'clear_event'
                  : 'clear_topic'
              }),
              g()(l()(a), '_handleClearAllClick', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !0 })
              }),
              g()(l()(a), '_handleOnClearAllConfirm', function () {
                var e = a.props,
                  t = e.analytics
                ;(0, e.clearAll)(), t.scribeAction('clear_all'), a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              g()(l()(a), '_handleOnClearAllCancel', function () {
                a.setState({ shouldShowClearAllConfirmationSheet: !1 })
              }),
              g()(l()(a), '_handleOnDeleteSavedSearchConfirm', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.deleteSavedSearch,
                  r = e.savedSearches,
                  o = a.state.savedSearchIdToDelete,
                  c = r.findIndex(function (e) {
                    return e.savedSearchId === o
                  }),
                  i = r[c]
                if (o) {
                  n(o)
                  var s = i && D.a.forSavedSearchResult(i.keyword.query, c)
                  s && t.scribe({ element: 'saved_search', action: 'delete', data: { items: [s] } })
                }
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              g()(l()(a), '_handleOnDeleteSavedSearchCancel', function () {
                a.setState({ shouldShowDeleteSavedSearchConfirmation: !1, savedSearchIdToDelete: void 0 })
              }),
              g()(l()(a), '_handleOnItemClick', function (e, t) {
                var n = a.props,
                  r = n.onDismiss
                ;(0, n.onItemClick)(e, t), a._scribeClick(e, t), r && r()
              }),
              g()(l()(a), '_scribeRecentSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.recentSearches
                if (n && n.length) {
                  var r = Object(w.a)(
                    n.map(function (e, t) {
                      return D.a.forRecentSearchResult(e, t)
                    }),
                  )
                  t.scribe({ action: 'impression', data: { items: r } })
                }
              }),
              g()(l()(a), '_scribeSavedSearchImpression', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.savedSearches
                if (n && n.length) {
                  var r = Object(w.a)(
                    n.map(function (e, t) {
                      return D.a.forSavedSearchResult(e.keyword.query, t)
                    }),
                  )
                  t.scribe({ element: 'saved_search', action: 'impression', data: { items: r } })
                }
              }),
              g()(l()(a), '_scribeClick', function (e, t) {
                var n = a.props.analytics
                switch (e.category) {
                  case B.b.SavedSearch:
                    var r = D.a.forSavedSearchResult(e.query, t)
                    n.scribe({ element: 'typeahead', action: 'click', data: { targets: [r] } })
                    break
                  case B.b.RecentSearch:
                    var o
                    e.recentSearchType &&
                      (o =
                        e.recentSearchType === B.a.User
                          ? { user: { type: B.a.User, id: e.query } }
                          : e.recentSearchType === B.a.Event && e.queryMetadata && e.queryMetadata.title
                          ? { event: Ze(Ze({}, e.queryMetadata), {}, { type: B.a.Event, id: e.query }) }
                          : e.recentSearchType === B.a.Topic && e.queryMetadata && e.queryMetadata.name
                          ? { topic: Ze(Ze({}, e.queryMetadata), {}, { type: B.a.Topic, id: e.query }) }
                          : { keyword: { type: B.a.Keyword, query: e.query } })
                    var c = o && D.a.forRecentSearchResult(o, t)
                    c && n.scribe({ action: 'click', data: { targets: [c] } })
                }
              }),
              g()(l()(a), '_setFocusedItemRef', function (e) {
                ;(a._focusedItemRef = e),
                  e &&
                    a._shouldScrollToFocusedItem &&
                    (Object(Ge.c)(a._getScrollParent(), a._getFocusedItem()), (a._shouldScrollToFocusedItem = !1))
              }),
              g()(l()(a), 'hasFocusedItem', function () {
                return a._getNumOfSearchItems() > 0
              }),
              g()(l()(a), 'selectFocusedItem', function () {
                if (a.hasFocusedItem()) {
                  var e = a._focusedItemRef && a._focusedItemRef.searchItemData
                  e && a._handleOnItemClick(e, a.state.focusIndex)
                }
              }),
              g()(l()(a), '_setFocusIndex', function (e, t) {
                var n = a.props.onItemFocusChanged
                ;(a._shouldScrollToFocusedItem = t), a.setState({ focusIndex: e }), n && n()
              }),
              g()(l()(a), '_resetFocus', function () {
                a._setFocusIndex(-1)
              }),
              g()(l()(a), 'focusNext', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  a._setFocusIndex(n, !0)
                }
              }),
              g()(l()(a), 'focusPrevious', function () {
                var e = a.state.focusIndex,
                  t = a._getNumOfSearchItems()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  a._setFocusIndex(n, !0)
                }
              })
            var o,
              i,
              s = a.context.featureSwitches
            return (
              (a.state = {
                focusIndex: 0,
                shouldShowClearAllConfirmationSheet: !1,
                shouldShowDeleteSavedSearchConfirmation: !1,
                allowedRecentSearchItems:
                  ((o = !0 === s.getValueWithoutScribeImpression('responsive_web_recent_searches_topics_enabled')),
                  (i = !0 === s.getValueWithoutScribeImpression('responsive_web_recent_searches_events_enabled')),
                  [].concat(rt, [o ? 'topic' : '', i ? 'event' : ''])),
              }),
              (a._withNewTypeaheadUI = a.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              a
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchRecentSearchesIfNeeded,
                    r = e.fetchSavedSearchesIfNeeded,
                    a = e.recentSearches,
                    o = e.savedSearches
                  n(),
                    r().catch(t({})),
                    this._fetchUsersDetailsIfNeeded(),
                    this._scribeRecentSearchImpression(),
                    this._scribeSavedSearchImpression(),
                    ((a && a.length) || (o && o.length)) && this._resetFocus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.recentSearches,
                    r = t.savedSearches
                  e.recentSearches !== n &&
                    (this._fetchUsersDetailsIfNeeded(), this._resetFocus(), this._scribeRecentSearchImpression()),
                    e.savedSearches !== r && (this._resetFocus(), this._scribeSavedSearchImpression())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.style,
                    r = this.state,
                    a = r.shouldShowClearAllConfirmationSheet,
                    o = r.shouldShowDeleteSavedSearchConfirmation
                  return S.a.createElement(
                    ne.a,
                    { style: n },
                    S.a.createElement(X.a, {
                      fetchStatus: t,
                      onRequestRetry: this._handleUsersRetry,
                      render: this._render,
                    }),
                    a
                      ? S.a.createElement(Qe.a, {
                          confirmButtonLabel: $e.confirmButtonLabel,
                          confirmButtonType: 'destructiveFilled',
                          headline: $e.headline,
                          onCancel: this._handleOnClearAllCancel,
                          onConfirm: this._handleOnClearAllConfirm,
                          testID: Ke.a.deleteRecentSearchesDialog,
                          text: $e.text,
                        })
                      : null,
                    o
                      ? S.a.createElement(G.a, {
                          onCancel: this._handleOnDeleteSavedSearchCancel,
                          onConfirm: this._handleOnDeleteSavedSearchConfirm,
                        })
                      : null,
                  )
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = Object(Ge.a)(J.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
              {
                key: '_getFocusedItem',
                value: function () {
                  var e = this._focusedItemRef && J.a.findDOMNode(this._focusedItemRef)
                  return e instanceof Element ? e : null
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      g()(at, 'contextType', we.a)
      var ot = ae.a.create(function (e) {
          return {
            emptyState: { padding: e.spaces.space12, paddingTop: e.spaces.space20 },
            borderTop: { borderTopColor: e.colors.borderColor, borderTopStyle: 'solid', borderTopWidth: 1 },
            header: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
          }
        }),
        ct = Q.forwardRef(at),
        it = 'SearchBox_Search_Input',
        st = n('TnY3'),
        ut = n('GZwR'),
        lt = n('4e/K')
      function dt(e, t) {
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
      function pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? dt(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : dt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ft(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ht = C.a.ib2e46ee,
        mt = C.a.hbc99b02,
        bt = /^(\w+)$/,
        yt = [ut.a.Events, ut.a.Users, ut.a.Topics],
        gt = function (e) {
          return '@' === e[0] ? e.substring(1) : e
        },
        vt = (function (e) {
          p()(n, e)
          var t = ft(n)
          function n(e, r) {
            var o, i
            return (
              c()(this, n),
              (i = t.call(this, e, r)),
              g()(l()(i), '_withNewTypeaheadUI', !1),
              g()(l()(i), '_reorderResults', function (e, t, n, r) {
                return Object(w.a)([e, t.length ? t : void 0, n.length ? n : void 0, r.length ? r : void 0])
              }),
              g()(l()(i), '_renderSearchBoxEmptyState', function (e) {
                return S.a.createElement(ct, a()({}, e, { onItemClick: i._handleSearchItemClick }))
              }),
              g()(l()(i), '_handleSearchItemClick', function (e) {
                var t = e.category,
                  n = e.link,
                  r = e.query,
                  a = e.queryMetadata,
                  o = e.recentSearchType,
                  c = i.props.addQuery
                t === B.b.SavedSearch
                  ? i._submitQuery({ query: r, shouldAddToRecentSearch: !1, src: j.a.SavedSearchClick })
                  : o === B.a.Keyword
                  ? i._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: j.a.RecentSearchClick })
                  : o === B.a.Event
                  ? (i._routeTransition({ pathname: '/i/events/'.concat(r) }),
                    a && a.title && c({ event: pt(pt({}, a), {}, { id: r, type: B.a.Event }) }))
                  : o === B.a.Topic
                  ? (i._routeTransition({ pathname: '/i/topics/'.concat(r) }),
                    a && a.name && c({ topic: pt(pt({}, a), {}, { id: r, type: B.a.Topic }) }))
                  : n && (i._routeTransition({ pathname: '/'.concat(n) }), c({ user: { id: r, type: B.a.User } }))
              }),
              g()(l()(i), '_handleSearchShortcut', function (e) {
                var t = i._inputRef
                t && (e && t.setQuery(e), t.focus())
              }),
              g()(l()(i), '_getUserExactMatch', function (e) {
                e.hasResults, e.isLoaded
                var t = e.query,
                  n = gt(t)
                if (n.match(bt))
                  return {
                    id: ''.concat(t, '_no_result_user'),
                    type: ut.b.NoResult,
                    data: { text: mt({ screenName: n }), type: 'user' },
                  }
              }),
              g()(l()(i), '_handleOnDismiss', function () {
                var e = i.props.history,
                  t = e.location,
                  n = t.state || {}
                if (n.searchFocused) {
                  var r = pt(pt({}, t), {}, { state: pt(pt({}, n), {}, { lockScroll: !1, searchFocused: !1 }) })
                  e.replace(r)
                }
              }),
              g()(l()(i), '_handleOnFocus', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.history,
                  r = n.location,
                  a = r.state || {}
                if (!a.searchFocused) {
                  var o = pt(pt({}, r), {}, { state: pt(pt({}, a), {}, { searchFocused: !0, lockScroll: !0 }) })
                  t.scribe({ action: 'focus_field' }), n.push(o)
                }
              }),
              g()(l()(i), '_handleChange', function (e) {
                i.setState({ query: e })
              }),
              g()(l()(i), '_handleTypeaheadSubmit', function () {
                var e = i.state,
                  t = e.items,
                  n = e.query,
                  r = i.props.analytics
                ;/^\s*$/.test(n) ||
                  (r.scribe({
                    action: 'search',
                    data: { items: D.a.forTypeaheadResults(t), search_details: { query: n } },
                  }),
                  i._submitQuery({ query: n, shouldAddToRecentSearch: !0 }))
              }),
              g()(l()(i), '_handleItemClick', function (e, t) {
                var n = i.props.addQuery,
                  r = i.state.query
                switch (e.type) {
                  case ut.b.User:
                    if (e.data.id_str) n({ user: { id: e.data.id_str, type: B.a.User } })
                    i._routeTransition({ pathname: '/'.concat(e.data.screen_name) })
                    break
                  case ut.b.Topic:
                  case ut.b.Hashtag:
                    i._submitQuery({ query: e.data.topic, shouldAddToRecentSearch: !0, src: j.a.TypeaheadClick })
                    break
                  case ut.b.Event:
                    e.data && e.data.url
                      ? i._routeTransition({ pathname: R.b.parseInternalUrl(e.data.url) })
                      : i._submitQuery({ query: e.data.topic, src: j.a.TypeaheadClick })
                    break
                  case ut.b.NoResult:
                    var a = e.data.type
                    'user' === a
                      ? i._routeTransition({ pathname: '/'.concat(gt(r)) })
                      : 'topic' === a &&
                        i._submitQuery({ query: r, shouldAddToRecentSearch: !0, src: j.a.TypeaheadClick })
                }
              }),
              g()(l()(i), '_handleItemsChanged', function (e) {
                i.setState({ items: e })
              }),
              g()(l()(i), '_routeTransition', function (e) {
                var t = e.params,
                  n = e.pathname,
                  r = e.query,
                  a = e.src,
                  o = i.props,
                  c = o.history,
                  s = o.location,
                  u = pt(
                    pt({}, s),
                    {},
                    {
                      pathname: n,
                      search: '',
                      query: t || (r ? { q: r, src: a } : {}),
                      state: pt(pt({}, s.state), {}, { searchFocused: !1, lockScroll: !1 }),
                    },
                  )
                c.replace(u)
              }),
              g()(l()(i), '_submitQuery', function (e) {
                var t = e.query,
                  n = e.shouldAddToRecentSearch,
                  r = void 0 !== n && n,
                  a = e.src,
                  o = void 0 === a ? j.a.Typed : a,
                  c = i.props,
                  s = c.addQuery,
                  u = c.mode,
                  l = c.onSubmit,
                  d = c.searchFilters,
                  p = c.searchRoute
                ;(l && l(t, o, i.state.lastSubmittedQuery === t), r) && s({ keyword: { query: t, type: B.a.Keyword } })
                var f = Object(B.g)({ query: t, querySrc: o, mode: u, searchFilters: d })
                i._routeTransition({ pathname: p, params: f, src: o }), i.setState({ lastSubmittedQuery: t })
              }),
              g()(l()(i), '_setInputRef', function (e) {
                i._inputRef = e
              }),
              (i.state = {
                query: e.initialValue,
                items: [],
                lastSubmittedQuery: Object(I.a)(null === (o = e.location.query) || void 0 === o ? void 0 : o.q),
              }),
              (i._withNewTypeaheadUI = i.context.featureSwitches.isTrue(
                'responsive_web_account_search_readability_enabled',
              )),
              i
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.shouldHandleSearchShortcut &&
                    (this._unregisterSearchShortcutHandler = Object(x.b)(this._handleSearchShortcut))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unregisterSearchShortcutHandler && this._unregisterSearchShortcutHandler()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.forceVdlDisable,
                    r = t.history,
                    a = t.isCompact,
                    o = t.isInSidebar,
                    c = t.isOnHomepage,
                    i = t.location,
                    s = t.placeholder,
                    u = this.state.query,
                    l = r.location.state || {},
                    d = (i.state || {}).searchPrefill,
                    p = this.props.initialValue || d,
                    f = !!i.state && !!i.state.searchFocused
                  return (
                    l.searchFocused &&
                      (e = this.context.featureSwitches.isTrue(
                        'responsive_web_search_reorder_typeahead_results_enabled',
                      )),
                    S.a.createElement(
                      _.a,
                      { viewType: 'search_field' },
                      S.a.createElement(
                        ne.a,
                        { style: St.root },
                        S.a.createElement(lt.default, {
                          filter: yt,
                          forceVdlDisable: n,
                          getTopicExactMatch: u ? ut.f : void 0,
                          getUserExactMatch: u ? this._getUserExactMatch : void 0,
                          initialValue: p,
                          inputStyle: St.input,
                          isCompact: a,
                          isInSidebar: o,
                          isOnHomepage: c,
                          onDismiss: this._handleOnDismiss,
                          onFocus: this._handleOnFocus,
                          onItemClick: this._handleItemClick,
                          onItemsChanged: this._handleItemsChanged,
                          onQueryChange: this._handleChange,
                          onSubmit: this._handleTypeaheadSubmit,
                          orderResults: e ? this._reorderResults : void 0,
                          placeholder: s,
                          ref: this._setInputRef,
                          renderEmptyState: this._renderSearchBoxEmptyState,
                          rounded: !0,
                          shouldAutoFocus: f,
                          shouldClearOnSelect: !0,
                          shouldDeferPrefetch: !0,
                          source: ut.d.SearchBox,
                          testID: it,
                          withFixedPositioning: !0,
                          withFocusStyling: !0,
                          withSectionDivider: !this._withNewTypeaheadUI,
                        }),
                      ),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      g()(vt, 'defaultProps', {
        initialValue: '',
        isInSidebar: !1,
        placeholder: ht,
        searchRoute: '/search',
        forceVdlDisable: !0,
      }),
        g()(vt, 'contextType', we.a)
      var St = ae.a.create(function (e) {
        return {
          root: { alignItems: 'stretch', flexBasis: 0, flexDirection: 'row', flexGrow: 1 },
          input: { flexShrink: 1 },
        }
      })
      t.default = Object(st.a)(k(vt))
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'b', function () {
          return s
        }),
        n.d(t, 'd', function () {
          return u
        }),
        n.d(t, 'e', function () {
          return p
        })
      n('yH/f')
      var r = n('SrIh'),
        a = n('JbbX'),
        o = 1e3,
        c = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function i(e) {
        var t = Object(a.a)(e)
        return t
          ? l(t)
            ? d(t)
              ? t[1]
                ? c.AcceptAllCookies
                : t[2]
                ? c.RefuseNonEssentialCookies
                : (Object(r.a)('Invalid consent signal state'), c.Invalid)
              : c.NotSet
            : c.Invalid
          : c.NotSet
      }
      function s(e) {
        Object(a.b)({ consent_version: 2, text_version: o, 1: !0 }, e)
      }
      function u(e) {
        Object(a.b)({ consent_version: 2, text_version: o, 2: !0 }, e)
      }
      function l(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function p(e) {
        var t = Object(a.a)(e)
        return !t || !l(t) || !d(t) || t.consent_version < 2 || t.text_version < o
      }
    },
    Chb3: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('jQ3i'), n('ERkP')),
        c = n.n(o),
        i = n('Hde2'),
        s = n('H1k/'),
        u = n('Ty5D'),
        l = n('496R')
      function d(e) {
        return !['/i/flow/login'].includes(e)
      }
      function p() {
        var e = Object(u.h)(),
          t = c.a.useState(function () {
            return d(e.pathname)
          }),
          n = a()(t, 2),
          r = n[0],
          o = n[1]
        return (
          c.a.useEffect(
            function () {
              o(d(e.pathname))
            },
            [o, e],
          ),
          r
        )
      }
      t.a = Object(l.a)(function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { hideCookieBannerPicker: !1 },
          t = p()
        return !e.hideCookieBannerPicker && t ? c.a.createElement(i.a, null, c.a.createElement(s.a, null)) : null
      })
    },
    'H1k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return oe
      })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('v6aA'),
        c = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        i = n.n(c),
        s = n('ddV6'),
        u = n.n(s),
        l = n('AS3p'),
        d = n('KUGV'),
        p = n('Irs7'),
        f = n('MWbm'),
        h = n('t62R'),
        m = n('cHvH'),
        b = n('rHpw'),
        y = n('/yvb'),
        g = n('3XMw'),
        v = n.n(g)
      function S(e, t) {
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
            ? S(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = v.a.d8817e36,
        E = v.a.b9288ee6,
        O = v.a.i1390ec2,
        k = { page: 'cookie_compliance_banner' }
      function I() {
        var e = a.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'ad048ab9' },
          a.a.createElement(
            h.b,
            {
              color: 'buttonWhite',
              link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
              withUnderline: !0,
            },
            v.a.id7ef73f,
          ),
        )
        return a.a.createElement(C, { body: e, title: O })
      }
      function P(e) {
        var t = a.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'bc8736af' },
          a.a.createElement(
            h.b,
            { accessibilityRole: 'button', color: 'buttonWhite', onClick: e.onExpand, withUnderline: !0 },
            v.a.gfb2ba0f,
          ),
        )
        return a.a.createElement(C, { body: t, title: O })
      }
      function C(e) {
        return a.a.createElement(
          f.a,
          { style: j.cookieComplianceMessageWrap },
          a.a.createElement(h.b, { color: 'buttonWhite', size: 'headline2', weight: 'medium' }, e.title),
          a.a.createElement(
            h.b,
            { color: 'buttonWhite', size: 'subtext2', style: j.cookieComplianceExpandedDetails },
            e.body,
          ),
        )
      }
      var R = a.a.forwardRef(function (e, t) {
          var n = Object(p.b)()
          a.a.useEffect(
            function () {
              n.scribe(_(_({}, k), {}, { action: 'impression' }))
            },
            [n],
          )
          var r = (function () {
              var e = a.a.useState(!1),
                t = u()(e, 2),
                n = t[0],
                r = t[1],
                o = Object(p.b)()
              return {
                isExpanded: n,
                expand: function () {
                  o.scribe(_(_({}, k), {}, { action: 'click', element: 'expand_message' })), r(!0)
                },
              }
            })(),
            c = r.expand,
            i = r.isExpanded,
            s = (function () {
              var e = Object(p.b)(),
                t = a.a.useContext(o.a).featureSwitches,
                n = a.a.useState(function () {
                  return l.e(t) && !Object(d.a)()
                }),
                r = u()(n, 2),
                c = r[0],
                i = r[1]
              return {
                isBannerOpen: c,
                acceptAllCookies: function () {
                  e.scribe(_(_({}, k), {}, { action: 'click', element: 'accept_all' })), l.b(t), i(!1)
                },
                refuseNonEssentialCookies: function () {
                  e.scribe(_(_({}, k), {}, { action: 'click', element: 'refuse_non_essential' })), l.d(t), i(!1)
                },
              }
            })(),
            h = s.acceptAllCookies,
            g = s.isBannerOpen,
            v = s.refuseNonEssentialCookies
          return g
            ? a.a.createElement(m.a, null, function (e) {
                var n = e.windowWidth < b.a.theme.breakpoints.xLarge
                return a.a.createElement(
                  f.a,
                  { ref: t, style: [j.root, n && j.rootNarrow] },
                  i ? a.a.createElement(I, null) : a.a.createElement(P, { onExpand: c }),
                  a.a.createElement(
                    f.a,
                    { style: [j.buttonContainer, n && j.buttonContainerNarrow] },
                    a.a.createElement(
                      y.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: h,
                        size: 'medium',
                        style: [j.ctaButton, n && j.ctaButtonNarrow],
                        type: b.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      w,
                    ),
                    a.a.createElement(
                      y.a,
                      {
                        dominantColor: 'buttonAlwaysBlack',
                        onPress: v,
                        size: 'medium',
                        style: [j.ctaButton, n && j.ctaButtonNarrow],
                        type: b.a.isDarkMode() ? 'onMediaDominantColorFilled' : 'onMediaWhiteFilled',
                      },
                      E,
                    ),
                  ),
                )
              })
            : null
        }),
        j = b.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              boxShadow: e.boxShadows.xSmall,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              backgroundColor: e.colors.buttonBlack,
            },
            rootNarrow: {
              flexDirection: 'column',
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingTop: e.spaces.space20,
              backgroundColor: e.colors.buttonBlack,
            },
            buttonContainer: {
              flexDirection: 'column',
              marginVertical: e.spaces.space16,
              marginLeft: e.spaces.space20,
            },
            buttonContainerNarrow: {
              width: '100%',
              maxWidth: 550,
              marginLeft: 0,
              flexDirection: 'column',
              flexWrap: 'wrap',
            },
            ctaButton: {
              height: e.spaces.space40,
              marginBottom: e.spaces.space8,
              width: 420,
              flexGrow: 0,
              flexShrink: 0,
            },
            ctaButtonNarrow: { marginLeft: 0, width: '100%' },
            cookieComplianceMessageWrap: { flex: 1, maxWidth: 640 },
            cookieComplianceExpandedDetails: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 },
            background: { backgroundColor: e.colors.buttonBlack },
          }
        }),
        x = (n('OZaJ'), n('97Jx')),
        D = n.n(x),
        T = n('VrFO'),
        L = n.n(T),
        A = n('Y9Ll'),
        B = n.n(A),
        F = n('1Pcy'),
        z = n.n(F),
        N = n('5Yy7'),
        U = n.n(N),
        H = n('N+ot'),
        M = n.n(H),
        q = n('AuHH'),
        W = n.n(q),
        V = (n('hBvt'), n('RqPI')),
        K = n('rxPX'),
        Q = Object(K.a)().propsFromState(function () {
          return { currentCountry: V.y }
        }),
        G = n('cnVF'),
        X = n('mrHL'),
        Z =
          (n('vrRf'),
          function (e, t, n) {
            return e.indexOf(t.toLowerCase()) > -1 && '1' !== n
          })
      function J(e) {
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
            r = W()(e)
          if (t) {
            var a = W()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return M()(this, n)
        }
      }
      var Y = v.a.ia5e7487,
        $ = (function (e) {
          U()(n, e)
          var t = J(n)
          function n(e, r) {
            var o
            L()(this, n),
              (o = t.call(this, e, r)),
              i()(z()(o), 'state', { euWarningIsOpen: !1 }),
              i()(z()(o), '_renderMessage', function () {
                return a.a.createElement(
                  h.b,
                  { color: 'white', size: 'subtext2' },
                  a.a.createElement(
                    v.a.I18NFormatMessage,
                    { $i18n: 'i3c34582' },
                    a.a.createElement(
                      h.b,
                      {
                        color: 'white',
                        link: 'https://help.twitter.com/rules-and-policies/twitter-cookies',
                        style: ee.link,
                      },
                      v.a.fd0ff73b,
                    ),
                  ),
                )
              }),
              i()(z()(o), '_handleEUBannerClose', function () {
                !(function (e) {
                  Object(X.e)(G.k, '1', { featureSwitches: e })
                })(o.context.featureSwitches),
                  o.setState({ euWarningIsOpen: !1 })
              })
            var c = o.props.currentCountry,
              s = o.context.featureSwitches,
              u = s.getArrayValue('responsive_web_eu_countries', []),
              l = Object(X.d)({ featureSwitches: s, cookieName: G.k })
            return (o.state = { euWarningIsOpen: !!c && Z(u, c, l) }), o
          }
          return (
            B()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return this.state.euWarningIsOpen
                    ? a.a.createElement(m.a, null, function (t) {
                        var n = t.windowWidth < b.a.theme.breakpoints.medium
                        return a.a.createElement(
                          f.a,
                          { ref: e.props.innerRef, style: [ee.root, n && ee.rootNarrow] },
                          e._renderMessage(),
                          a.a.createElement(
                            y.a,
                            {
                              onPress: e._handleEUBannerClose,
                              size: 'medium',
                              style: [ee.closeButton, n && ee.closeButtonNarrow],
                              type: 'onMediaOutlined',
                            },
                            Y,
                          ),
                        )
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(a.a.Component)
      i()($, 'contextType', o.a)
      var ee = b.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              boxShadow: e.boxShadows.medium,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              backgroundColor: e.colors.gray1100,
              paddingHorizontal: e.spaces.space20,
              paddingVertical: e.spaces.space20,
            },
            rootNarrow: { flexDirection: 'column' },
            container: { alignItems: 'center', flexShrink: 1 },
            closeButton: { marginLeft: e.spaces.space12, marginTop: 0, flexGrow: 0, flexShrink: 0 },
            closeButtonNarrow: { marginLeft: 0, marginTop: e.spaces.space12, width: '100%' },
            link: { textDecorationLine: 'underline' },
          }
        }),
        te = a.a.forwardRef(function (e, t) {
          return a.a.createElement($, D()({}, e, { innerRef: t }))
        }),
        ne = Q.forwardRef(te),
        re = n('+d3d')
      function ae(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
          n = a.a.useCallback(
            Object(re.a)(function (t) {
              if (e)
                if (t) {
                  var n = t.getBoundingClientRect()
                  n && e(n)
                } else e(null)
            }, t),
            [e, t],
          )
        return a.a.useCallback(
          function (t) {
            if ('function' == typeof e) {
              var r,
                a = n.bind(null, t)
              return (
                a(),
                window.addEventListener('resize', a),
                t && (r = new ResizeObserver(a)).observe(t),
                function () {
                  window.removeEventListener('resize', a), r && r.disconnect(), n.cancel()
                }
              )
            }
          },
          [e, n],
        )
      }
      function oe(e) {
        var t,
          n = a.a.useContext(o.a).featureSwitches,
          r =
            ((t = e.onHeightChange),
            ae(
              a.a.useMemo(
                function () {
                  return 'function' == typeof t
                    ? function (e) {
                        t(e ? e.height : null)
                      }
                    : void 0
                },
                [t],
              ),
            ))
        return n.isTrue('responsive_web_cookie_compliance_banner_enabled')
          ? a.a.createElement(R, { ref: r })
          : a.a.createElement(ne, { ref: r })
      }
    },
    NeAX: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return C
        }),
        n.d(t, 'selectPreferences', function () {
          return D
        }),
        n.d(t, 'selectData', function () {
          return T
        }),
        n.d(t, 'selectUserPreferences', function () {
          return L
        }),
        n.d(t, 'selectPreferencesFetchStatus', function () {
          return A
        }),
        n.d(t, 'selectFetchDataStatus', function () {
          return B
        }),
        n.d(t, 'selectAge', function () {
          return F
        }),
        n.d(t, 'selectBirthdate', function () {
          return z
        }),
        n.d(t, 'selectHasExactAge', function () {
          return N
        }),
        n.d(t, 'selectGender', function () {
          return U
        }),
        n.d(t, 'selectLanguage', function () {
          return H
        }),
        n.d(t, 'selectSignupDetails', function () {
          return M
        }),
        n.d(t, 'selectTwitterInterests', function () {
          return q
        }),
        n.d(t, 'selectFetchTwitterInterestsStatus', function () {
          return W
        }),
        n.d(t, 'selectPartnerInterests', function () {
          return V
        }),
        n.d(t, 'selectFetchPartnerInterestsStatus', function () {
          return K
        }),
        n.d(t, 'clearLocations', function () {
          return Q
        }),
        n.d(t, 'updateGender', function () {
          return G
        }),
        n.d(t, 'updateLanguage', function () {
          return X
        }),
        n.d(t, 'updateInterest', function () {
          return Z
        }),
        n.d(t, 'fetchPreferencesIfNeeded', function () {
          return J
        }),
        n.d(t, 'updatePreferences', function () {
          return $
        }),
        n.d(t, 'updateSettings', function () {
          return ee
        }),
        n.d(t, 'fetchDataIfNeeded', function () {
          return ne
        }),
        n.d(t, 'createAudienceDownload', function () {
          return ae
        }),
        n.d(t, 'createDataDownload', function () {
          return oe
        }),
        n.d(t, 'fetchTwitterInterestsIfNeeded', function () {
          return ce
        }),
        n.d(t, 'fetchPartnerInterestsIfNeeded', function () {
          return se
        }),
        n.d(t, 'syncSettings', function () {
          return de
        })
      n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        i = (n('KOtZ'), n('+KXO'), n('JtPf'), n('7x/C'), n('vrRf'), n('Ee2X'), n('RqPI')),
        s = n('P1r1'),
        u = n('cmwl'),
        l = n('hqKg'),
        d = n('kGix'),
        p = n('YeIG'),
        f = n('Ssj5'),
        h = n('oEOe')
      function m(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var y,
        g = 'personalization',
        v = 'rweb/'.concat(g),
        S = Object(h.a)(v, 'FETCH_PREFERENCES'),
        _ = Object(h.a)(v, 'UPDATE_PREFERENCES'),
        w = Object(h.a)(v, 'FETCH_DATA'),
        E = Object(h.a)(v, 'UPDATE_COOKIES'),
        O = Object(h.a)(v, 'FETCH_TWITTER_INTERESTS'),
        k = Object(h.a)(v, 'FETCH_PARTNER_INTERESTS'),
        I = ((y = 'CLEAR_LOCATIONS'), ''.concat(v, '/').concat(y)),
        P = {
          preferences: { data: {}, fetchStatus: d.a.NONE },
          data: { data: {}, fetchStatus: d.a.NONE },
          twitter_interests: { data: {}, fetchStatus: d.a.NONE },
          partner_interests: { data: {}, fetchStatus: d.a.NONE },
        }
      function C() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case S.REQUEST:
            return b(b({}, e), {}, { preferences: b(b({}, e.preferences), {}, { fetchStatus: d.a.LOADING }) })
          case S.SUCCESS:
            return b(
              b({}, e),
              {},
              { preferences: { data: b(b({}, e.preferences.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case S.FAILURE:
            return b(
              b({}, e),
              {},
              { preferences: b(b({}, e.preferences), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case _.REQUEST:
            return b(
              b({}, e),
              {},
              { preferences: { data: b(b({}, e.preferences.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case w.REQUEST:
            return b(b({}, e), {}, { data: b(b({}, e.data), {}, { fetchStatus: d.a.LOADING }) })
          case w.SUCCESS:
            return b(
              b({}, e),
              {},
              { data: { data: b(b({}, e.data.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case w.FAILURE:
            return b(b({}, e), {}, { data: b(b({}, e.data), {}, { error: t.payload, fetchStatus: d.a.FAILED }) })
          case O.REQUEST:
            return b(
              b({}, e),
              {},
              { twitter_interests: b(b({}, e.twitter_interests), {}, { fetchStatus: d.a.LOADING }) },
            )
          case O.SUCCESS:
            return b(
              b({}, e),
              {},
              {
                twitter_interests: {
                  data: b(b({}, e.twitter_interests.data), t.payload),
                  error: null,
                  fetchStatus: d.a.LOADED,
                },
              },
            )
          case O.FAILURE:
            return b(
              b({}, e),
              {},
              { twitter_interests: b(b({}, e.twitter_interests), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case k.REQUEST:
            return b(
              b({}, e),
              {},
              { partner_interests: b(b({}, e.partner_interests), {}, { fetchStatus: d.a.LOADING }) },
            )
          case k.SUCCESS:
            return b(
              b({}, e),
              {},
              {
                partner_interests: {
                  data: b(b({}, e.partner_interests.data), t.payload),
                  error: null,
                  fetchStatus: d.a.LOADED,
                },
              },
            )
          case k.FAILURE:
            return b(
              b({}, e),
              {},
              { partner_interests: b(b({}, e.partner_interests), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case I:
            return b(
              b({}, e),
              {},
              { data: b(b({}, e.data), {}, { data: b(b({}, e.data.data), {}, { location_history: [] }) }) },
            )
          default:
            return e
        }
      }
      f.a.register(c()({}, g, C))
      var R = {
          allowCookieUse: 'use_cookie_personalization',
          allowDeviceAccess: 'allow_logged_out_device_personalization',
          allowLocationHistoryUse: 'allow_location_history_personalization',
          allowPartnerships: 'allow_sharing_data_for_third_party_personalization',
          allowPersonalization: 'allow_ads_personalization',
        },
        j = {
          allowCookieUse: 'use_cookie_personalization',
          allowDeviceAccess: 'link_logged_out_devices',
          allowPartnerships: 'share_data_with_third_party',
          allowPersonalization: 'allow_ads_personalization',
        },
        x = { use_age_for_personalization: 'age_preferences', use_gender_for_personalization: 'gender_preferences' },
        D = function (e) {
          return e.personalization.preferences.data
        },
        T = function (e) {
          return e.personalization.data.data
        },
        L = Object(l.createSelector)(i.m, D, s.g, function (e, t, n) {
          var r = e ? [R, n] : [j, t],
            o = a()(r, 2),
            c = o[0],
            i = o[1]
          return Object.keys(c).reduce(function (e, t) {
            return (e[t] = i[c[t]]), e
          }, {})
        }),
        A = function (e) {
          var t = D(e)
          return Object(p.a)(t) ? e.personalization.preferences.fetchStatus : d.a.LOADED
        },
        B = function (e) {
          return e.personalization.data.fetchStatus
        },
        F = function (e) {
          return e.personalization.data.data.age ? e.personalization.data.data.age : []
        },
        z = function (e) {
          return e.personalization.data.data.birth_date ? e.personalization.data.data.birth_date : ''
        },
        N = function (e) {
          return !!e.personalization.data.data.has_exact_age
        },
        U = function (e) {
          var t = T(e),
            n = D(e),
            r = n.gender_preferences && n.gender_preferences.gender_override
          return r && r.type ? r : { type: t.gender, value: t.gender }
        },
        H = function (e) {
          return e.personalization.data.data.languages ? e.personalization.data.data.languages : []
        },
        M = function (e) {
          return e.personalization.data.data.sign_up_details ? e.personalization.data.data.sign_up_details : {}
        },
        q = function (e) {
          return e.personalization.twitter_interests.data
        },
        W = function (e) {
          return e.personalization.twitter_interests.fetchStatus
        },
        V = function (e) {
          return e.personalization.partner_interests.data
        },
        K = function (e) {
          return e.personalization.partner_interests.fetchStatus
        },
        Q = function () {
          return function (e, t) {
            var n = t(),
              r = D(n),
              a = Date.now(),
              o = { location_preferences: b(b({}, r.location_preferences), {}, { override_times: [a] }) }
            return e($(o)).then(function () {
              return e({ type: I })
            })
          }
        },
        G = function (e) {
          return function (t, n) {
            var r = n(),
              a = { gender_preferences: b(b({}, D(r).gender_preferences), {}, { gender_override: e }) }
            return t($(a))
          }
        },
        X = function (e, t) {
          return function (n, r) {
            if (Object(p.a)(e)) return Promise.resolve()
            var a = r(),
              o = D(a),
              c = o.language_preferences.disabled_languages || [],
              i = c.indexOf(e),
              s = i > -1
            if (s && t) c.splice(i, 1)
            else {
              if (s || t) return Promise.resolve()
              c.push(e)
            }
            var u = { language_preferences: b(b({}, o.language_preferences), {}, { disabled_languages: c }) }
            return n($(u))
          }
        },
        Z = function (e, t, n) {
          return function (r, a) {
            if (Object(p.a)(e) || -1 === ['ads', 'partner'].indexOf(n)) return Promise.resolve()
            var o = 'partner' === n,
              i = a(),
              s = D(i).interest_preferences,
              u = o ? 'disabled_partner_interests' : 'disabled_interests',
              l = s[u],
              d = l.indexOf(e),
              f = d > -1
            if (f && t) l.splice(d, 1)
            else {
              if (f || t) return Promise.resolve()
              l.push(e)
            }
            var h = {
              interest_preferences: c()(
                { disabled_interests: s.disabled_interests, disabled_partner_interests: s.disabled_partner_interests },
                u,
                l,
              ),
            }
            return r($(h))
          }
        },
        J = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.preferences
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(Y()) : Promise.resolve()
          }
        },
        Y = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchPreferences })({
              actionTypes: S,
              context: 'FETCH_PERSONALIZATION_PREFERENCES',
            })
          }
        },
        $ = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(p.a)(e)
              ? Promise.resolve()
              : Object(h.c)(t, { params: { preferences: e }, request: a.Personalization.updatePreferences })({
                  actionTypes: _,
                  context: 'ACTION_UPDATE_PERSONALIZATION_PREFERENCES',
                  payload: e,
                })
          }
        },
        ee = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = r.featureSwitches
            if (Object(p.a)(e)) return Promise.resolve()
            var l = n(),
              d = i.m(l),
              f = d ? R : j,
              h = Object.keys(e).reduce(function (t, n) {
                n in f && (t[f[n]] = e[n])
                n in x && (t[x[n]] = c()({}, n, e[n]))
                return t
              }, {})
            return d
              ? t(s.L(h)).then(function () {
                  Object(u.a)().then(function (e) {
                    e.updateBranchTracking(o, a)
                  }),
                    t(le(h))
                })
              : te(o, t, h, a)
          }
        },
        te = function (e, t, n, r) {
          return Object(h.c)(t, { params: { preferences: n }, request: r.Personalization.updatePreferences })({
            actionTypes: _,
            context: 'ACTION_UPDATE_PERSONALIZATION_PREFERENCES',
            payload: n,
          }).then(function () {
            Object(u.a)().then(function (t) {
              t.updateBranchTracking(e, r)
            })
          })
        },
        ne = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.data
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(re()) : Promise.resolve()
          }
        },
        re = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchData })({
              actionTypes: w,
              context: 'FETCH_PERSONALIZATION_DATA',
            })
          }
        },
        ae = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.d)(e, { request: r.Personalization.createAudienceDownload })('CREATE_AUDIENCE_DOWNLOAD')
          }
        },
        oe = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.d)(e, { request: r.Personalization.createDataDownload })('CREATE_DATA_DOWNLOAD')
          }
        },
        ce = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.twitter_interests
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(ie()) : Promise.resolve()
          }
        },
        ie = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchTwitterInterests })({
              actionTypes: O,
              context: 'FETCH_PERSONALIZATION_TWITTER_INTERESTS',
            })
          }
        },
        se = function () {
          return function (e, t, n) {
            n.api
            var r = t().personalization.partner_interests
            return r.fetchStatus !== d.a.LOADING && r.fetchStatus !== d.a.LOADED ? e(ue()) : Promise.resolve()
          }
        },
        ue = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.b)(e, { request: r.Personalization.fetchPartnerInterests })({
              actionTypes: k,
              context: 'FETCH_PERSONALIZATION_PARTNER_INTERESTS',
            })
          }
        },
        le = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = {}
            return (
              e.hasOwnProperty('use_cookie_personalization') &&
                (o.use_cookie_personalization = e.use_cookie_personalization),
              e.hasOwnProperty('allow_ads_personalization') &&
                (o.allow_ads_personalization = e.allow_ads_personalization),
              Object(p.a)(o)
                ? Promise.resolve()
                : Object(h.b)(t, { params: o, request: a.Personalization.updateCookies })({
                    actionTypes: E,
                    context: 'APP_UPDATE_PERSONALIZATION_COOKIES',
                    params: o,
                  })
            )
          }
        },
        de = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(h.d)(e, { request: r.Personalization.syncSettings })('SYNC_SETTINGS')
          }
        }
    },
    Ukpf: function (e, t, n) {
      'use strict'
      var r = {
        inject: function (e) {
          var t = e.callback,
            n = e.scriptId,
            r = e.src
          if (document.getElementById(n)) t && t()
          else {
            var a = document.createElement('script')
            ;(a.src = r),
              (a.id = n),
              (a.async = !0),
              (a.defer = !0),
              document.body.appendChild(a),
              (a.onload = function () {
                t && t()
              })
          }
        },
        replace: function (e) {
          var t,
            n = e.callback,
            a = e.scriptId,
            o = e.src,
            c = document.getElementById(a)
          c && (null === (t = c.parentNode) || void 0 === t || t.removeChild(c))
          r.inject({ callback: n, scriptId: a, src: o })
        },
      }
      t.a = r
    },
    UpKB: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('ho0z'), n('ERkP')),
        g = n.n(y),
        v = n('/yvb'),
        S = n('hUVV'),
        _ = n('3XMw'),
        w = n.n(_),
        E = n('iKTg'),
        O = n('TaB8'),
        k = n('1zbE'),
        I = n('Ukpf'),
        P = n('cnVF'),
        C = n('TnY3'),
        R = n('0+0m'),
        j = n('v6aA'),
        x = n('2qJZ')
      function D(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function L(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var A = w.a.ib65b1c6,
        B = w.a.f55cebb7,
        F = w.a.g61ed8a4,
        z = { clientId: R.a, scope: 'name email', usePopup: !0 },
        N = (function (e) {
          l()(n, e)
          var t = L(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(s()(e), 'state', { isScriptLoaded: !1 }),
              b()(
                s()(e),
                '_is3rdPartyIntegrationDisabled',
                Object(O.a)('responsive_web_3rd_party_category_sign_in_with_apple', e.context.featureSwitches),
              ),
              b()(s()(e), '_initAppleIDAuth', function () {
                var t = window.AppleID,
                  n = e.props.fetchSsoInitToken,
                  r = Object(x.c)(e.context.featureSwitches) ? 'https://'.concat(x.b) : 'https://'.concat(x.a)
                t &&
                  n(P.A.Apple).then(function (e) {
                    var n = e.state
                    t.auth.init(T(T({}, z), {}, { redirectURI: r, state: n }))
                  })
              }),
              b()(s()(e), '_handleOnPress', function () {
                var t = window.AppleID,
                  n = e.props,
                  r = n.analytics,
                  a = n.buttonState,
                  o = n.history,
                  c = n.personalizationSettings,
                  i = n.shouldPropagateP13nSettings,
                  s = n.ssoInitTokens,
                  u = c || {},
                  l = u.allowCookieUse,
                  d = u.allowDeviceAccess,
                  p = u.allowPartnerships,
                  f = u.allowPersonalization
                r.scribe({ component: 'apple_sign_in', element: a, action: 'click' }),
                  t.auth
                    .signIn()
                    .then(function (e) {
                      r.scribe({ component: 'apple_sign_in', element: a, action: 'success' })
                      var t = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName
                      o.push({
                        pathname: '/i/flow/single_sign_on',
                        state: {
                          input: {
                            cookie_personalization_settings: i && {
                              allow_cookie_use: !!l,
                              allow_device_personalization: !!d,
                              allow_partnerships: !!p,
                              allow_ads_personalization: !!f,
                            },
                            requested_variant: JSON.stringify({
                              display_name: t && ''.concat(e.user.name.firstName, ' ').concat(e.user.name.lastName),
                              id_token: e.authorization.id_token,
                              provider: P.A.Apple,
                              state: s[P.A.Apple],
                            }),
                          },
                        },
                      })
                    })
                    .catch(function (t) {
                      var n = e.props.addToast
                      t.error !== R.f
                        ? (r.scribe({ component: 'apple_sign_in', element: a, action: 'failure' }), n({ text: F }))
                        : r.scribe({ component: 'apple_sign_in', element: 'auth', action: 'user_closed_popup' })
                    })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._is3rdPartyIntegrationDisabled ||
                    I.a.inject({
                      callback: function () {
                        e._initAppleIDAuth(), e.setState({ isScriptLoaded: !0 })
                      },
                      scriptId: 'signInWithAppleJsLibrary',
                      src: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.buttonSize,
                    n = e.buttonState,
                    r = e.style,
                    a = this.state.isScriptLoaded,
                    o = n === k.a.SignUp ? A : B
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : g.a.createElement(v.a, {
                        backgroundColor: 'white',
                        borderColor: 'gray200',
                        children: o,
                        color: 'gray1100',
                        disabled: !a,
                        icon: g.a.createElement(E.a, null),
                        onPress: this._handleOnPress,
                        size: t,
                        style: r,
                      })
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      b()(N, 'contextType', j.a),
        b()(N, 'defaultProps', { buttonSize: 'xLarge', buttonState: 'signup' }),
        (t.a = Object(C.a)(Object(S.a)(N)))
    },
    XJCT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      }),
        n.d(t, 'b', function () {
          return P
        })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        c = n.n(o),
        i = n('ERkP'),
        s = n.n(i),
        u = n('t62R'),
        l = n('3XMw'),
        d = n.n(l),
        p = (n('yH/f'), n('ho0z'), n('p+r5')),
        f = Object.freeze({ password: 'password', username: 'username_or_email' }),
        h = function (e) {
          var t = e.name,
            n = c()(e, ['name'])
          return s.a.createElement(
            p.a,
            a()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        m = d.a.d1091f50,
        b = s.a.createElement(
          u.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          m,
        ),
        y = d.a.dec3c9b8,
        g = function (e) {
          var t = e.helperText,
            n = e.label,
            r = e.withForgotPasswordLink,
            o = c()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return s.a.createElement(
            h,
            a()({}, o, { helperText: r ? b : t, label: n || y, name: f.password, type: 'password' }),
          )
        }
      g.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var v = g,
        S = n('v6aA'),
        _ = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        w = d.a.e1ec8c17,
        E = d.a.d0a750f2,
        O = d.a.e2dd29b5,
        k = d.a.jb4eb245,
        I = function (e) {
          var t = e.autoFocus,
            n = e.label,
            r = e.withEmailDisabled,
            o = e.withPhoneDisabled,
            i = e.withUsernameDisabled,
            u = c()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            l = s.a.useContext(S.a).featureSwitches,
            d = w
          return (
            i ? (d = E) : o ? (d = k) : r && (d = O),
            s.a.createElement(h, a()({}, u, { autoFocus: t, label: n || d, name: f.username, type: _(l) }))
          )
        }
      I.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var P = I
    },
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        o = n('Ud88'),
        c = n('aQQo'),
        i = c.loadQuery,
        s = c.useTrackLoadQueryInRender,
        u = n('ERkP'),
        l = u.useCallback,
        d = u.useEffect,
        p = u.useRef,
        f = u.useState,
        h = n('K1lQ').getRequest,
        m = { kind: 'NullQueryReference' }
      function b(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== h(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : m,
          c = o()
        s()
        var u = a(),
          h = p(new Set([n])),
          y = f(function () {
            return n
          }),
          g = y[0],
          v = y[1],
          S = f(function () {
            return n
          }),
          _ = S[0],
          w = S[1]
        n !== _ && (h.current.add(n), w(n), v(n))
        var E = l(
            function () {
              u.current && (h.current.add(m), v(m))
            },
            [u],
          ),
          O = l(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (u.current) {
                var a,
                  o = i(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : c, e, t, r)
                h.current.add(o), v(o)
              }
            },
            [c, e, v, u],
          ),
          k = p(!1)
        return (
          d(function () {
            return function () {
              k.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === k.current)
                return (
                  (k.current = !1),
                  void (
                    'NullQueryReference' !== g.kind &&
                    O(g.variables, { fetchPolicy: g.fetchPolicy, networkCacheConfig: g.networkCacheConfig })
                  )
                )
              var t = h.current
              if (u.current) {
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var o = n.value
                    if (o === g) break
                    t.delete(o),
                      'NullQueryReference' !== o.kind &&
                        (b(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery())
                  }
                } catch (c) {
                  a.e(c)
                } finally {
                  a.f()
                }
              }
            },
            [g, u, O, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, r.default)(h.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value
                    'NullQueryReference' !== a.kind &&
                      (b(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (o) {
                  n.e(o)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === g.kind ? null : g, O, E]
        )
      }
    },
    bojF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CookieComplianceBannerPadder', function () {
          return je
        }),
        n.d(t, 'LoggedOutHome', function () {
          return xe
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        y = n('ddV6'),
        g = n.n(y),
        v = (n('z84I'), n('ERkP')),
        S = n.n(v),
        _ = n('UpKB'),
        w = n('zI2C'),
        E = n('Hde2'),
        O = n('Chb3'),
        k = n('zh9S'),
        I = n('RqPI'),
        P = n('rxPX'),
        C = Object(P.a)()
          .propsFromState(function () {
            return { userLanguage: I.o }
          })
          .propsFromActions(function () {
            return { scribeAction: k.c }
          }),
        R = n('H1k/'),
        j = n('SrtL'),
        x = n('FQwk'),
        D = n('0+0m'),
        T = n('kG2l'),
        L = n('muX9'),
        A = n('6oVL'),
        B = n('rJoH'),
        F = n('yoO3'),
        z = n('Es6L'),
        N = 'signupButton',
        U = 'loginButton',
        H = 'logInSignUpFooter',
        M = n('MWbm'),
        q = n('t62R'),
        W = n('/yvb'),
        V = n('0yYu'),
        K = n('cHvH'),
        Q = n('TIdA'),
        G = n('A91F'),
        X = n('rHpw'),
        Z = n('pxuL'),
        J = (n('3voH'), 'https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png'),
        Y = 'https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png',
        $ = 380,
        ee = 500,
        te = 1e3,
        ne = n('7JQg'),
        re = n('AS3p'),
        ae = n('3XMw'),
        oe = n.n(ae),
        ce = n('VwDm'),
        ie = n('wz7L'),
        se = n('dFWS'),
        ue = n('lUZE'),
        le = n('3rEN'),
        de = n('1zbE'),
        pe = n('XJCT')
      function fe(e, t) {
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
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fe(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function me(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var be = [
          { text: oe.a.a62c9c33, Icon: ce.a },
          { text: oe.a.cf39fca2, Icon: ie.a },
          { text: oe.a.j86184fd, Icon: se.a },
        ],
        ye = oe.a.d1091f50,
        ge = oe.a.d9e109ae,
        ve = oe.a.f86f23b5,
        Se = oe.a.eba1b197,
        _e = oe.a.a565833d,
        we = oe.a.aa95ddc0,
        Ee = oe.a.fa811c30,
        Oe = oe.a.e919c3bc,
        ke = oe.a.b0dbe914,
        Ie = oe.a.e5b0e543,
        Pe = oe.a.h0ff39da,
        Ce = oe.a.j3f49ff6,
        Re = oe.a.ca86b62c
      function je(e) {
        var t = S.a.useState(0),
          n = g()(t, 2),
          r = n[0],
          a = n[1],
          o = S.a.useCallback(function (e) {
            a(e || 0)
          }, [])
        return S.a.createElement(
          S.a.Fragment,
          null,
          S.a.createElement(O.a.Configure, { hideCookieBannerPicker: !0 }),
          S.a.createElement(E.a, null, S.a.createElement(R.a, { onHeightChange: o })),
          S.a.createElement(M.a, { style: [{ marginBottom: r }, Te.bannerPadderChildren] }, e.children),
        )
      }
      var xe = (function (e) {
        l()(n, e)
        var t = me(n)
        function n(e, r) {
          var o
          return (
            a()(this, n),
            (o = t.call(this, e, r)),
            b()(
              s()(o),
              '_thirdPartySsoButtonsEnabled',
              o.context.featureSwitches.isTrue('responsive_web_third_party_sso_buttons_enabled'),
            ),
            b()(
              s()(o),
              '_ssoInSliShowProminentLoginButton',
              o.context.featureSwitches.isTrue('responsive_web_sso_in_sli_show_prominent_login_button'),
            ),
            b()(
              s()(o),
              '_isPlaceholderSIWGButtonEnabled',
              o.context.featureSwitches.isTrue('responsive_web_placeholder_siwg_button_enabled'),
            ),
            b()(
              s()(o),
              '_cookieComplianceGingersnapEnabled',
              o.context.featureSwitches.isTrue('responsive_web_cookie_compliance_gingersnap_enabled'),
            ),
            b()(
              s()(o),
              '_searchHomePageVariation',
              o.context.featureSwitches.getStringValue('responsive_web_search_home_page_design_variation'),
            ),
            b()(s()(o), '_renderLoginSignupButtons', function (e) {
              var t = e ? Te.ctaButton : Te.ctaButtonMobile
              return S.a.createElement(
                M.a,
                { style: !o._thirdPartySsoButtonsEnabled && 'tablet' === e && Te.ctaButtonContainer },
                o._thirdPartySsoButtonsEnabled
                  ? S.a.createElement(
                      S.a.Fragment,
                      null,
                      o._renderSSOButtons(e),
                      o._ssoInSliShowProminentLoginButton
                        ? o._renderProminentLoginButtonVariation(e)
                        : o._renderLessProminentLoginButtonVariation(e),
                    )
                  : S.a.createElement(
                      S.a.Fragment,
                      null,
                      S.a.createElement(
                        W.a,
                        {
                          link: '/i/flow/signup',
                          onPress: o._handleSignupButton,
                          size: 'xLarge',
                          style: [t, 'tablet' === e && Te.ctaButtonSplitSpacing],
                          testID: N,
                          type: 'brandFilled',
                        },
                        _e,
                      ),
                      S.a.createElement(
                        W.a,
                        {
                          link: '/login',
                          onPress: o._handleLoginButton,
                          size: 'xLarge',
                          style: t,
                          testID: U,
                          type: 'brandOutlined',
                        },
                        Oe,
                      ),
                    ),
              )
            }),
            b()(s()(o), '_renderSSOButtons', function (e) {
              var t = o.state,
                n = t.buttonState,
                r = t.isCookieCompliant,
                a = e ? Te.ctaButton : Te.ctaButtonMobile
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(T.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  isCookieCompliant:
                    o._cookieComplianceGingersnapEnabled && o._isPlaceholderSIWGButtonEnabled ? r : void 0,
                  onPress: o._handleCookieCompliance,
                  style: [a, 'tablet' === e && Te.ctaButtonSplitSpacing, Te.ssoButtonStyles],
                }),
                S.a.createElement(_.a, {
                  buttonSize: 'medium',
                  buttonState: n,
                  style: [
                    a,
                    'tablet' === e && Te.ctaButtonSplitSpacing,
                    Te.ssoButtonStyles,
                    o._ssoInSliShowProminentLoginButton && { marginBottom: 0 },
                  ],
                }),
              )
            }),
            b()(s()(o), '_renderProminentLoginButtonVariation', function (e) {
              var t = e ? Te.ctaButton : Te.ctaButtonMobile
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(
                  M.a,
                  { style: Te.gapContainer },
                  S.a.createElement(V.a, { label: S.a.createElement(q.b, { children: Re }) }),
                ),
                S.a.createElement(
                  W.a,
                  {
                    link: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: de.b }) } },
                    },
                    onPress: o._handleSignupButton,
                    size: 'medium',
                    style: [t, 'tablet' === e && Te.ctaButtonSplitSpacing, Te.ssoButtonStyles],
                    testID: N,
                    type: 'brandFilled',
                  },
                  we,
                ),
                S.a.createElement(q.b, { color: 'gray700', size: 'subtext3', style: [t, { width: D.b }] }, de.c),
                S.a.createElement(
                  M.a,
                  { style: Te.signInButtonContainer },
                  S.a.createElement(q.b, { size: 'headline2', style: t, weight: 'bold' }, Ee),
                  S.a.createElement(
                    W.a,
                    {
                      link: '/login',
                      onPress: o._handleLoginButton,
                      size: 'medium',
                      style: [t, 'tablet' === e && Te.ctaButtonSplitSpacing, Te.ssoButtonStyles],
                      testID: U,
                      type: 'brandOutlined',
                    },
                    Ie,
                  ),
                ),
              )
            }),
            b()(s()(o), '_renderLessProminentLoginButtonVariation', function (e) {
              var t = o.state.buttonState,
                n = e ? Te.ctaButton : Te.ctaButtonMobile,
                r = o._getLoginSignupProps() || {},
                a = r.handleLoginSignUpButton,
                c = r.loginSignUpButtonLabel,
                i = r.loginSignUpButtonLink
              return S.a.createElement(
                S.a.Fragment,
                null,
                S.a.createElement(
                  W.a,
                  {
                    backgroundColor: 'white',
                    borderColor: 'gray200',
                    color: 'gray1100',
                    link: i,
                    onPress: a,
                    size: 'medium',
                    style: [n, 'tablet' === e && Te.ctaButtonSplitSpacing, Te.ssoButtonStyles],
                    testID: t === de.a.LogIn ? U : N,
                  },
                  c,
                ),
                t === de.a.SignUp
                  ? S.a.createElement(q.b, { color: 'gray700', size: 'subtext2', style: n }, de.c)
                  : null,
                S.a.createElement(q.b, { testID: H }, o._getLoginSignupFooter()),
              )
            }),
            b()(s()(o), '_renderUsernameInputField', function () {
              return S.a.createElement(
                M.a,
                { style: De.inputContainer },
                S.a.createElement(pe.b, {
                  onChange: o._handleUsernameChange,
                  onSubmitEditing: o._handleSubmitEditing,
                  style: De.input,
                }),
              )
            }),
            b()(s()(o), '_renderHalfForm', function () {
              var e = o.state.usernameValue
              return S.a.createElement(
                M.a,
                { style: [De.container, De.halfForm] },
                o._renderUsernameInputField(),
                S.a.createElement(
                  W.a,
                  {
                    link: { pathname: '/login', query: { username_or_email: e } },
                    onPress: o._handleHalfFormLoginClick,
                    size: 'xLarge',
                    style: De.submitButtonStyle,
                    type: 'brandOutlined',
                  },
                  Oe,
                ),
              )
            }),
            b()(s()(o), '_getLoginSignupProps', function () {
              switch (o.state.buttonState) {
                case de.a.SignUp:
                  return {
                    loginSignUpButtonLabel: we,
                    loginSignUpButtonLink: {
                      pathname: '/i/flow/signup',
                      state: { input: { requested_variant: JSON.stringify({ signup_type: de.b }) } },
                    },
                    handleLoginSignUpButton: o._handleSignupButton,
                  }
                case de.a.LogIn:
                  return {
                    loginSignUpButtonLabel: ke,
                    loginSignUpButtonLink: '/login',
                    handleLoginSignUpButton: o._handleLoginButton,
                  }
                default:
                  return
              }
            }),
            b()(s()(o), '_getLoginSignupFooter', function () {
              var e
              switch (o.state.buttonState) {
                case de.a.SignUp:
                  return (
                    (e = {
                      onPress: function () {
                        return o.setState({ buttonState: de.a.LogIn })
                      },
                    }.onPress),
                    S.a.createElement(
                      oe.a.I18NFormatMessage,
                      { $i18n: 'c83ef3f5' },
                      S.a.createElement(q.b, { color: 'link', onPress: e }, oe.a.fb9dd9b0),
                    )
                  )
                case de.a.LogIn:
                  return (function (e) {
                    var t = e.onPress
                    return S.a.createElement(
                      oe.a.I18NFormatMessage,
                      { $i18n: 'i89d7b70' },
                      S.a.createElement(q.b, { color: 'link', onPress: t }, oe.a.ie4dd8d6),
                    )
                  })({
                    onPress: function () {
                      return o.setState({ buttonState: de.a.SignUp })
                    },
                  })
                default:
                  return
              }
            }),
            b()(s()(o), '_handleHalfFormLoginClick', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(he(he({}, e.scribeNamespace), {}, { component: 'half_form', element: 'login', action: 'click' }))
            }),
            b()(s()(o), '_handleSubmitEditing', function () {
              o.setState({ autoSubmit: !0 })
            }),
            b()(s()(o), '_handleSignupButton', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(he(he({}, e.scribeNamespace), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'signup' }))
            }),
            b()(s()(o), '_handleLoginButton', function () {
              var e = o.props
              ;(0,
              e.scribeAction)(he(he({}, e.scribeNamespace), {}, { section: 'front', component: 'signup_callout', element: 'form', action: 'login' }))
            }),
            b()(s()(o), '_handleUsernameChange', function (e) {
              o.setState({ usernameValue: e.target.value })
            }),
            b()(s()(o), '_handleCookieCompliance', function () {
              o.setState({ isCookieCompliant: !0 })
            }),
            (o.state = {
              autoSubmit: !1,
              buttonState: 'signup',
              isCookieCompliant: Object(re.c)(o.context.featureSwitches) === re.a.AcceptAllCookies,
            }),
            o
          )
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                Object(z.a)() && this.context.setSideNavSupport(!1)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Object(z.a)() && this.context.setSideNavSupport(!0)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props.scribeNamespace,
                  n = !!le.a[this._searchHomePageVariation]
                return S.a.createElement(
                  F.a,
                  null,
                  S.a.createElement(j.a, { title: Pe }),
                  S.a.createElement(B.a, {
                    canonical: 'https://twitter.com/',
                    description: Ce,
                    title: Pe,
                    type: 'website',
                  }),
                  S.a.createElement(w.a, { deepLink: 'twitter://' }),
                  S.a.createElement(
                    L.a,
                    null,
                    S.a.createElement('meta', { content: 'NOODP', name: 'robots' }),
                    S.a.createElement('meta', { content: Ce, name: 'description' }),
                  ),
                  S.a.createElement(K.a, null, function (r) {
                    var a = r.windowHeight,
                      o = (function (e, t) {
                        return {
                          deviceSize: e > te ? 'desktop' : e > ee ? 'tablet' : void 0,
                          showLoginForm: e / 2 > 500 && t >= 750,
                        }
                      })(r.windowWidth, a),
                      c = o.deviceSize,
                      i = o.showLoginForm
                    return S.a.createElement(
                      M.a,
                      { style: Te.root },
                      n
                        ? S.a.createElement(le.b, {
                            deviceSize: c,
                            scribeNamespace: t,
                            variation: le.a[e._searchHomePageVariation],
                          })
                        : S.a.createElement(
                            S.a.Fragment,
                            null,
                            S.a.createElement(
                              M.a,
                              { style: [Te.main, 'desktop' === c && Te.mainWide] },
                              e._renderCTA({ deviceSize: c, showLoginForm: i }),
                              e._renderHero(c),
                            ),
                            S.a.createElement(je, null, S.a.createElement(x.a, { align: 'center' })),
                          ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderHero',
              value: function (e) {
                var t,
                  n,
                  r =
                    ((t = this.props.userLanguage),
                    {
                      variants: [
                        {
                          uri: (n = null == t ? void 0 : t.startsWith('en'))
                            ? 'https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png'
                            : 'https://abs.twimg.com/sticky/illustrations/lohp_850x623.png',
                          width: 850,
                          height: 623,
                        },
                        { uri: n ? J : Y, width: 1302, height: 955 },
                      ],
                      original: { url: n ? J : Y, width: 1302, height: 958 },
                    }),
                  a = r.original,
                  o = r.variants
                return S.a.createElement(
                  M.a,
                  { style: [Te.block, Te.communication, Te.blockHero] },
                  S.a.createElement(
                    M.a,
                    { style: Te.blockImg },
                    S.a.createElement(Q.a, {
                      accessibilityLabel: '',
                      aspectMode: G.a.COVER,
                      backgroundColor: X.a.theme.colors.blue500,
                      customVariants: o,
                      draggable: !1,
                      image: a,
                    }),
                    S.a.createElement(ue.a, { style: [Te.twitterIconHero, 'desktop' === e && Te.twitterIconHeroWide] }),
                  ),
                )
              },
            },
            {
              key: '_renderCommunicationItems',
              value: function () {
                var e = be.length
                return S.a.createElement(
                  M.a,
                  { style: Te.communicationItems },
                  be.map(function (t, n) {
                    var r = t.Icon,
                      a = t.text,
                      o = n + 1 === e
                    return S.a.createElement(
                      M.a,
                      { key: a, style: [Te.communicationItem, o && Te.communicationItemLast] },
                      S.a.createElement(r, { style: Te.communicationItemIcon }),
                      S.a.createElement(
                        q.b,
                        { color: 'white', size: 'headline1', style: Te.communicationItemText, weight: 'bold' },
                        a,
                      ),
                    )
                  }),
                )
              },
            },
            {
              key: '_renderCTA',
              value: function (e) {
                var t = e.deviceSize,
                  n = e.showLoginForm,
                  r = this.state.buttonState
                return S.a.createElement(
                  M.a,
                  { style: [Te.block, Te.blockCTA, 'tablet' === t && Te.blockTabletCTA] },
                  n ? this._renderLoginForm() : null,
                  S.a.createElement(
                    M.a,
                    { style: [Te.blockInnerWrapper, 'desktop' === t && Te.blockInnerWrapperWide] },
                    S.a.createElement(ue.a, { style: Te.twitterIcon }),
                    S.a.createElement(
                      q.b,
                      { extendedWidth: !0, style: t ? Te.ctaTitleLarge : Te.ctaTitle, weight: 'bold' },
                      Se,
                    ),
                    S.a.createElement(
                      q.b,
                      {
                        extendedWidth: !0,
                        size: t ? 'title2' : 'title4',
                        style: t ? Te.ctaTextLarge : Te.ctaText,
                        weight: 'bold',
                      },
                      this._thirdPartySsoButtonsEnabled ? (r === de.a.SignUp ? ge : ve) : ge,
                    ),
                    this._renderLoginSignupButtons(t),
                  ),
                )
              },
            },
            {
              key: '_renderLoginForm',
              value: function () {
                var e = this.state,
                  t = e.autoSubmit,
                  n = e.usernameValue,
                  r = n ? '?account_identifier='.concat(n) : '',
                  a = this.context.featureSwitches.getValue('responsive_web_inline_login_box_enabled'),
                  o = 'full' === a
                return 'none' === a
                  ? null
                  : 'half' === a
                  ? this._renderHalfForm()
                  : o
                  ? S.a.createElement(
                      M.a,
                      { style: De.container },
                      S.a.createElement(
                        A.a,
                        {
                          autoSubmit: t,
                          horizontalLayout: !0,
                          submitButtonSize: 'xLarge',
                          submitButtonStyle: De.submitButtonStyle,
                          submitButtonType: 'brandOutlined',
                        },
                        this._renderUsernameInputField(),
                        S.a.createElement(
                          M.a,
                          { style: De.inputContainer },
                          S.a.createElement(pe.a, { onSubmitEditing: this._handleSubmitEditing, style: De.input }),
                          S.a.createElement(
                            q.b,
                            {
                              link: {
                                pathname: 'https://twitter.com/account/begin_password_reset'.concat(r),
                                external: !0,
                                openInSameFrame: !0,
                              },
                              size: 'subtext2',
                              style: De.forgotPassword,
                            },
                            ye,
                          ),
                        ),
                      ),
                    )
                  : void 0
              },
            },
          ]),
          n
        )
      })(S.a.Component)
      b()(xe, 'contextType', Z.a)
      var De = X.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              paddingHorizontal: e.spaces.space32,
              position: 'absolute',
              top: e.spaces.space16,
              left: '0px',
              maxWidth: '100%',
            },
            submitButtonStyle: { marginBottom: e.spaces.space4 },
            halfForm: { flexDirection: 'row', justifyContent: 'center' },
            inputContainer: { flexShrink: 1, width: '225px' },
            input: { paddingLeft: 0, paddingTop: 0, paddingBottom: 0 },
            forgotPassword: {
              height: 0,
              overflowY: 'visible',
              marginLeft: e.spaces.space12,
              marginTop: e.spaces.space4,
            },
          }
        }),
        Te = X.a.create(function (e) {
          return {
            root: { flex: 1 },
            main: { minHeight: 'auto' },
            mainWide: { flex: 'auto', flexDirection: 'row-reverse' },
            block: { justifyContent: 'center', padding: e.spaces.space16 },
            blockHero: { flex: 1, padding: 0, minHeight: '45vh' },
            blockImg: he(
              he({}, X.a.absoluteFillObject),
              {},
              { flex: 1, resizeMode: 'cover', justifyContent: 'center', backgroundColor: e.colors.primary },
            ),
            blockCTA: { minWidth: '45vw' },
            blockTabletCTA: { maxWidth: '600px', margin: 'auto', width: '100%' },
            blockInnerWrapper: { width: '100%', padding: e.spaces.space20 },
            blockInnerWrapperWide: { minWidth: ''.concat(436.99999999999994, 'px'), maxWidth: ''.concat(760, 'px') },
            bottomButton: { flexGrow: 1, maxWidth: '180px' },
            bottomButtonLeft: { marginRight: '10px' },
            bottomButtonRight: { marginLeft: '10px' },
            bottomButtonsBlock: { flexDirection: 'row', paddingTop: e.spaces.space40, paddingBottom: e.spaces.space32 },
            communication: { backgroundColor: e.colors.blue300, overflow: 'hidden' },
            communicationItem: { flexDirection: 'row', marginBottom: '40px' },
            communicationItemIcon: { color: e.colors.white, flexShrink: 0, fontSize: e.fontSizes.title4 },
            communicationItemLast: { marginBottom: 0 },
            communicationItems: {
              alignSelf: 'center',
              maxWidth: ''.concat($, 'px'),
              paddingVertical: e.spaces.space16,
            },
            communicationItemText: { lineHeight: '30px', marginLeft: e.spaces.space16 },
            seeWhatsHappening: { marginTop: e.spaces.space20 },
            happeningButton: { marginBottom: e.spaces.space16 },
            joinToday: { marginTop: e.spaces.space64, marginBottom: e.spaces.space16 },
            ctaTitle: {
              fontSize: e.spaces.space40,
              letterSpacing: -0.8,
              lineHeight: ''.concat(X.a.theme.spacesPx.space40 + X.a.theme.spacesPx.space12, 'px'),
              marginVertical: e.spaces.space40,
            },
            ctaTitleLarge: {
              fontSize: e.spaces.space64,
              letterSpacing: -1.2,
              lineHeight: ''.concat(X.a.theme.spacesPx.space64 + X.a.theme.spacesPx.space20, 'px'),
              marginVertical: e.spaces.space48,
            },
            ctaText: { marginBottom: e.spaces.space20 },
            ctaTextLarge: { marginBottom: e.spaces.space32 },
            ctaButtonContainer: { flexDirection: 'row' },
            ctaButton: { marginBottom: e.spaces.space20, maxWidth: ''.concat($, 'px'), flex: 1 },
            ssoButtonStyles: { marginBottom: e.spaces.space8, width: D.b, height: e.spaces.space40, flex: 'none' },
            signInButtonContainer: { marginTop: X.a.theme.spaces.space40 },
            gapContainer: { marginVertical: e.spaces.space4, maxWidth: ''.concat($, 'px'), width: D.b },
            ctaButtonMobile: { marginBottom: e.spaces.space16 },
            ctaButtonSplitSpacing: { marginRight: e.spaces.space20 },
            twitterIcon: {
              alignSelf: 'flex-start',
              color: e.colors.brandColor,
              height: '3rem',
              paddingBottom: e.spaces.space12,
            },
            twitterIconBg: { color: e.colors.blue500, maxWidth: 'none', position: 'absolute' },
            twitterIconBgNarrow: { height: '60vh', top: '-10vh', right: '-10vh' },
            twitterIconBgWide: { height: '160vh', top: '-30vh', right: '-50vh' },
            twitterIconHero: {
              color: e.colors.whiteOnColor,
              justifyContent: 'center',
              height: 'fit-content',
              padding: e.spaces.space32,
            },
            twitterIconHeroWide: { height: '50%', maxHeight: ''.concat($, 'px') },
            bannerPadderChildren: { transitionProperty: 'margin-bottom', transitionDuration: '100ms' },
          }
        })
      t.default = Object(ne.c)({ page: 'front' })(C(xe))
    },
    hUVV: function (e, t, n) {
      'use strict'
      var r = n('NeAX'),
        a = n('1YZw'),
        o = n('rxPX'),
        c = n('RqPI')
      t.a = Object(o.a)()
        .propsFromState(function () {
          return {
            personalizationPreferences: r.selectPreferences,
            personalizationSettings: r.selectUserPreferences,
            ssoInitTokens: c.w,
            userLanguage: c.o,
          }
        })
        .adjustStateProps(function (e) {
          var t = e.personalizationPreferences,
            n = e.personalizationSettings,
            r = e.ssoInitTokens,
            a = e.userLanguage
          return {
            personalizationSettings: n,
            shouldPropagateP13nSettings: !t.is_eu_country,
            ssoInitTokens: r,
            userLanguage: a,
          }
        })
        .propsFromActions(function () {
          return { addToast: a.b, fetchSsoInitToken: c.e }
        })
        .withAnalytics()
    },
    hiGS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function u(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            c.a.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    iKTg: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function u(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    jmcQ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function u(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z',
              fill: '#EA4335',
            }),
            c.a.createElement('path', {
              d: 'M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z',
              fill: '#FBBC05',
            }),
            c.a.createElement('path', {
              d: 'M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z',
              fill: '#34A853',
            }),
            c.a.createElement('path', {
              d: 'M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z',
              fill: '#4285F4',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    kG2l: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        y = n('ERkP'),
        g = n.n(y),
        v = n('hUVV'),
        S = n('3XMw'),
        _ = n.n(S),
        w = n('jmcQ'),
        E = n('TaB8'),
        O = n('1zbE'),
        k = n('Ukpf'),
        I = n('cnVF'),
        P = n('aITJ'),
        C = n('MWbm'),
        R = n('TnY3'),
        j = n('/yvb'),
        x = n('Qwev'),
        D = n('v6aA'),
        T = n('0+0m')
      function L(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var A = _.a.e0870f25,
        B = _.a.gfeffd69,
        F = (function (e) {
          l()(n, e)
          var t = L(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              b()(s()(o), '_buttonInitialized', !1),
              b()(s()(o), '_viewRef', g.a.createRef()),
              b()(
                s()(o),
                '_is3rdPartyIntegrationDisabled',
                Object(E.a)('responsive_web_3rd_party_category_google_platform', o.context.featureSwitches),
              ),
              b()(s()(o), '_initGoogleClient', function () {
                var e = window.google
                o._buttonInitialized ||
                  (e &&
                    (e.accounts.id.initialize({ client_id: T.c, callback: o._handleOnPress }),
                    (o._buttonInitialized = !0)))
              }),
              b()(s()(o), '_renderGoogleSignInButton', function () {
                var e = window.google,
                  t = o.props,
                  n = t.buttonState,
                  r = t.displayType,
                  a = t.userLanguage,
                  c = n === O.a.SignUp ? T.d.SignUp : T.d.SignIn,
                  i = r !== T.e.Prompt && o._buttonInitialized
                e &&
                  i &&
                  e.accounts.id.renderButton(o._viewRef.current, {
                    theme: 'outline',
                    size: 'large',
                    shape: 'circle',
                    locale: a,
                    logo_alignment: 'center',
                    text: c,
                    width: T.b,
                  })
              }),
              b()(s()(o), '_renderGoogleOneTapPrompt', function () {
                var e = window.google,
                  t = o.props,
                  n = t.analytics,
                  r = t.displayType,
                  a = t.isCookieCompliant,
                  c = !P.b.isIOS() && !P.b.isSafari(),
                  i = r !== T.e.Button && c && a
                e &&
                  i &&
                  e.accounts.id.prompt(function (e) {
                    n.scribe({ component: 'google_sign_in', element: 'one_tap', action: e.getMomentType() })
                  })
              }),
              b()(s()(o), '_renderPlaceholderButton', function () {
                var e = o.props,
                  t = e.buttonSize,
                  n = e.buttonState,
                  r = e.onPress,
                  a = e.style,
                  c = n === O.a.SignUp ? A : B
                return g.a.createElement(j.a, {
                  backgroundColor: 'white',
                  borderColor: 'gray200',
                  children: c,
                  color: 'gray1100',
                  icon: g.a.createElement(w.a, null),
                  onPress: r,
                  size: t,
                  style: a,
                })
              }),
              b()(s()(o), '_injectGoogleGsiLibraryScript', function () {
                k.a.inject({
                  callback: function () {
                    o.setState({ isScriptLoaded: !0 }, function () {
                      o._initGoogleClient(), o._renderGoogleSignInButton(), o._renderGoogleOneTapPrompt()
                    })
                  },
                  scriptId: 'googleGSILibrary',
                  src: 'https://accounts.google.com/gsi/client',
                })
              }),
              b()(s()(o), '_handleOnPress', function (e) {
                var t = o.props,
                  n = t.analytics,
                  r = t.buttonState,
                  a = t.fetchSsoInitToken
                n.scribe({ component: 'google_sign_in', element: r, action: 'click' }),
                  a(I.A.Google).then(function () {
                    o._handleGoogleAccSignInSuccess(e)
                  })
              }),
              b()(s()(o), '_handleGoogleAccSignInSuccess', function (e) {
                var t = o.props,
                  n = t.analytics,
                  r = t.buttonState,
                  a = t.history,
                  c = t.personalizationSettings,
                  i = t.shouldPropagateP13nSettings,
                  s = t.ssoInitTokens,
                  u = c || {},
                  l = u.allowCookieUse,
                  d = u.allowDeviceAccess,
                  p = u.allowPartnerships,
                  f = u.allowPersonalization
                n.scribe({ component: 'google_sign_in', element: r, action: 'success' }),
                  a.push({
                    pathname: '/i/flow/single_sign_on',
                    state: {
                      input: {
                        cookie_personalization_settings: i && {
                          allow_cookie_use: !!l,
                          allow_device_personalization: !!d,
                          allow_partnerships: !!p,
                          allow_ads_personalization: !!f,
                        },
                        requested_variant: JSON.stringify({
                          id_token: e.credential,
                          provider: I.A.Google,
                          state: s[I.A.Google],
                        }),
                      },
                    },
                  })
              }),
              (o.state = { isScriptLoaded: !1 }),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.isCookieCompliant
                  !this._is3rdPartyIntegrationDisabled && e && this._injectGoogleGsiLibraryScript()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.isCookieCompliant,
                    n = this.state.isScriptLoaded
                  n &&
                    this._buttonInitialized &&
                    (e.userLanguage !== this.props.userLanguage || e.buttonState !== this.props.buttonState) &&
                    this._renderGoogleSignInButton(),
                    !n && t && this._injectGoogleGsiLibraryScript()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isScriptLoaded,
                    t = this.props,
                    n = t.isCookieCompliant,
                    r = t.style
                  return this._is3rdPartyIntegrationDisabled
                    ? null
                    : n
                    ? e
                      ? g.a.createElement(C.a, { ref: this._viewRef, style: r })
                      : g.a.createElement(x.a, { style: [r, { width: T.b }] })
                    : this._renderPlaceholderButton()
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      b()(F, 'defaultProps', { buttonState: 'signup', isCookieCompliant: !0 }),
        b()(F, 'contextType', D.a),
        (t.a = Object(R.a)(Object(v.a)(F)))
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return o
        })
      var r = n('0vv5'),
        a = 500,
        o = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(r).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return U
      })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        o = n('VrFO'),
        c = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        S = n.n(v),
        _ = n('pXBW'),
        w = n('6/RC'),
        E = n('UIzd'),
        O = n.n(E),
        k = n('kGix')
      n.d(t, 'a', function () {
        return k.a
      })
      var I = n('fs1G'),
        P = n('0KEI'),
        C = n('lU4h'),
        R = n.n(C),
        j = n('21nk'),
        x = n.n(j),
        D = n('bCEw'),
        T = n.n(D),
        L = n('Ud88'),
        A = n.n(L)
      function B(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var F = function (e) {
          return (0, e.render)({ fetchStatus: k.a.LOADING, data: null, error: null, retry: I.a })
        },
        z = (function (e) {
          p()(n, e)
          var t = B(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(a))), g()(l()(e), 'state', { error: null }), e
          }
          return (
            s()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof _.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            n
          )
        })(S.a.Component),
        N = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = x()(t, n)
          return r({ fetchStatus: k.a.LOADED, data: a, error: null, retry: I.a })
        },
        U = function (e, t) {
          if (w.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                o = void 0 === r ? 'store-or-network' : r,
                c = n.render,
                i = n.variables,
                s = T()(e),
                u = a()(s, 2),
                l = u[0],
                d = u[1],
                p = Object(P.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                f = R()(i),
                h = a()(f, 1)[0],
                m = S.a.useCallback(
                  function () {
                    d(h, { fetchPolicy: 'network-only' })
                  },
                  [d, h],
                )
              return (
                S.a.useLayoutEffect(
                  function () {
                    d(h, { fetchPolicy: o })
                  },
                  [o, d, h],
                ),
                l
                  ? S.a.createElement(
                      S.a.Suspense,
                      { fallback: S.a.createElement(F, { render: c }) },
                      S.a.createElement(
                        z,
                        { errorHandler: p(t.errorConfig.options || {}), key: l.fetchKey, retry: m },
                        function (t, n) {
                          return t
                            ? c({ fetchStatus: k.a.FAILED, error: t, data: null, retry: n })
                            : S.a.createElement(N, { query: e, queryRef: l, render: c })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (r) {
            r.fetchPolicy
            var o = r.render,
              c = r.variables,
              i = A()(),
              s = Object(P.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              u = R()(c),
              l = a()(u, 1)[0],
              d = n.get(i)
            if (d) return d
            var p = S.a.lazy(function () {
              return O()(i, e, l)
                .toPromise()
                .then(
                  function (e) {
                    return o({ fetchStatus: k.a.LOADED, data: e, error: null, retry: I.a })
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (s(t.errorConfig.options || {})(e),
                        o({ fetchStatus: k.a.FAILED, data: null, error: e, retry: I.a }))
                      : S.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(i, e).get.bind(n, i) }
                })
            })
            return S.a.createElement(S.a.Suspense, null, S.a.createElement(p, null))
          }
        }
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return p
      }),
        n.d(t, 'c', function () {
          return f
        }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'g', function () {
          return m
        }),
        n.d(t, 'a', function () {
          return b
        }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'f', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        i =
          (n('hBpG'),
          n('vrRf'),
          n('WNMA'),
          n('KqXw'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        s = n('kIAd'),
        u = n('rHpw')
      function l(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function p(e, t) {
        var n,
          r = s.b.scoper.find(function (r) {
            if (-1 !== r.srcInputs.indexOf(t)) return (n = e.match(r.regexp))
          }),
          a = ''
        return n && (a = n && (1 === n.length ? n[0] : n[1])), r ? d(d({}, r.scope), {}, { src: t, q: a }) : null
      }
      function f(e, t) {
        var n = t.slice(0, e),
          r = t.slice(e, t.length),
          a = n.search(s.b.WordEnd),
          o = a >= 0 ? n.slice(a) : '',
          c = r.search(s.b.WordBoundary),
          i = o + r.slice(0, c)
        return i.trim() ? { start: a, end: e + c, word: i } : { start: -1, end: -1, word: '' }
      }
      function h() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function m(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          r = e.metaKey
        return !(t || n || r)
      }
      function b(e, t) {
        var n = []
        e.forEach(function (e) {
          var r = t.find(function (t) {
            return t.id === e.id
          })
          r && r.data && r.data.result_context ? n.push(r) : n.push(e)
        })
        var r = n.map(function (e) {
            return e.id
          }),
          o = t.filter(function (e) {
            return r.indexOf(e.id) < 0
          })
        return [].concat(n, a()(o))
      }
      var y = Object(i.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(u.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        g = 0,
        v = function () {
          return 'typeaheadDropdown-'.concat((g += 1))
        }
    },
    rRIm: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return K
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('LJOr'), n('KqXw'), n('ERkP')),
        g = n.n(y),
        v = n('sTyV'),
        S = n('6/RC'),
        _ = n('sebV'),
        w = n('G6rE'),
        E = n('rxPX'),
        O = Object(E.a)()
          .propsFromState(function () {
            return { loggedInUser: w.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        k = n('3XMw'),
        I = n.n(k),
        P = n('OrGc'),
        C = n('QK5w'),
        R = n('aITJ'),
        j = n('MWbm'),
        x = n('TnY3'),
        D = n('rHpw'),
        T = n('t62R'),
        L = n('v6aA'),
        A = n('uScj'),
        B = n('fs1G'),
        F = n('BcsE'),
        z = n('VPAj')
      function N(e, t) {
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function H(e) {
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
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var M = I.a.b47e760d,
        q = I.a.fd2c7b43,
        W = new A.a(),
        V = function (e) {
          if (e.target instanceof HTMLInputElement) {
            var t = e.target.tagName.toLowerCase()
            return 'input' === t || 'textarea' === t
          }
          return !1
        },
        K = function (e) {
          return S.canUseDOM ? W.subscribe(e).unsubscribe : B.a
        },
        Q = (function (e) {
          l()(n, e)
          var t = H(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(s()(e), '_bindKeyboardShortcuts', function () {
                var t,
                  n,
                  r = e.props,
                  a = r.history,
                  o = r.loggedInUserScreenName,
                  c = function (e) {
                    return function (t) {
                      t.preventDefault(),
                        W.getListeners().length
                          ? W.notify(e)
                          : a.push({ pathname: '/explore', state: { searchFocused: !0, searchPrefill: e } })
                    }
                  },
                  i =
                    ((t = {}),
                    b()(t, P.e.search, c()),
                    b()(t, P.e.goToUser, c('@')),
                    b()(t, P.e.openKeyboardShortcuts, function () {
                      return a.push('/i/keyboard_shortcuts')
                    }),
                    b()(t, P.e.goExplore, function () {
                      return a.push('/explore')
                    }),
                    b()(t, P.e.goSettings, function () {
                      return a.push('/settings')
                    }),
                    t),
                  s = function (e) {
                    var t
                    return (
                      (t = {}),
                      b()(t, P.e.goProfile, function () {
                        return a.push('/'.concat(e))
                      }),
                      b()(t, P.e.goLikes, function () {
                        return a.push('/'.concat(e, '/likes'))
                      }),
                      b()(t, P.e.goLists, function () {
                        return a.push('/'.concat(e, '/lists'))
                      }),
                      t
                    )
                  },
                  u = e.context.userClaims.isTrueAndEnabled('subscriptions_feature_1007'),
                  l =
                    o && u
                      ? U(
                          U({}, s(o)),
                          {},
                          b()({}, P.e.goTopArticles, function () {
                            return a.push('/i/articles')
                          }),
                        )
                      : o
                      ? s(o)
                      : {},
                  d = U(
                    U(U({}, i), l),
                    {},
                    ((n = {}),
                    b()(n, P.e.goHome, function () {
                      return a.push('/home')
                    }),
                    b()(n, P.e.goDisplay, function () {
                      return a.push('/i/display')
                    }),
                    b()(n, P.e.goNotifications, function () {
                      return a.push('/notifications')
                    }),
                    b()(n, P.e.goMentions, function () {
                      return a.push('/notifications/mentions')
                    }),
                    b()(n, P.e.goMessages, function () {
                      return a.push('/messages')
                    }),
                    b()(n, P.e.newMessage, function () {
                      return a.push('/messages/compose')
                    }),
                    b()(n, P.e.newTweet, function () {
                      return a.push('/compose/tweet')
                    }),
                    b()(n, P.e.goMomentMaker, function () {
                      return a.push('/i/moment_maker')
                    }),
                    b()(n, P.e.goBookmarks, function () {
                      return a.push('/i/bookmarks')
                    }),
                    n),
                  ),
                  p = e.props.loggedInUserScreenName ? d : i
                e._unbindKeyboardShortcuts = Object(v.a)(p)
              }),
              b()(s()(e), '_handleKeyDown', function (t) {
                V(t) ||
                  'Backspace' !== t.key ||
                  ((e._backspaceDown = Date.now()), t.preventDefault(), t.stopPropagation())
              }),
              b()(s()(e), '_handleKeyUp', function (t) {
                if (!V(t) && 'Backspace' === t.key) {
                  t.preventDefault(), t.stopPropagation()
                  var n = e._backspaceDown,
                    r = !!Object(F.a)(n) && Date.now() - n < 500,
                    a = Object(C.a)({}, { location: e.props.location })
                  r && a ? e.props.history.goBack() : window.close()
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
                  this._bindKeyboardShortcuts(),
                    R.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.addEventListener('keydown', this._handleKeyDown),
                      document.addEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(),
                    R.b.isKaiOS() &&
                      _.a.isStandaloneApp() &&
                      (document.removeEventListener('keydown', this._handleKeyDown),
                      document.removeEventListener('keyup', this._handleKeyUp))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.loggedInUserScreenName
                    ? g.a.createElement(
                        j.a,
                        { accessibilityLevel: 2, accessibilityRole: 'heading', style: D.a.visuallyHidden },
                        g.a.createElement(T.b, null, M),
                        g.a.createElement(T.b, { focusable: !1, link: '/i/keyboard_shortcuts' }, q),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      b()(Q, 'contextType', L.a)
      var G = O(Q),
        X = S.canUseDOM ? Object(x.a)(G) : Object(z.a)(null)
      t.a = X
    },
    sYRn: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('eb3s'),
        c = n('3XMw'),
        i = n.n(c),
        s = n('4ZbN'),
        u = i.a.hffea05c,
        l = i.a.j037e373,
        d = i.a.d96cf7cd
      t.a = function (e) {
        var t = e.onCancel,
          n = e.onConfirm
        return a.a.createElement(o.a, {
          confirmButtonLabel: d,
          confirmButtonType: 'destructiveFilled',
          headline: u,
          onCancel: t,
          onConfirm: n,
          testID: s.a.deleteSavedSearchDialog,
          text: l,
        })
      }
    },
    u3ZE: function (e, t, n) {
      'use strict'
      t.a = {
        AdvancedSearchPage: 'advanced_search_page',
        CashtagClick: 'cashtag_click',
        HashtagClick: 'hashtag_click',
        PromotedTrendClick: 'promoted_trend_click',
        RecentSearchClick: 'recent_search_click',
        SavedSearchClick: 'saved_search_click',
        RelatedQueryClick: 'related_query_click',
        SpellingCorrectionClick: 'spelling_correction_click',
        SpellingCorrectionRevertClick: 'spelling_suggestion_revert_click',
        SpellingExpansionClick: 'spelling_expansion_click',
        SpellingExpansionRevertClick: 'spelling_expansion_revert_click',
        SpellingSuggestionClick: 'spelling_suggestion_click',
        TrendClick: 'trend_click',
        TrendView: 'trend_view',
        TypeaheadClick: 'typeahead_click',
        Typed: 'typed_query',
        TweetDetailQuoteTweet: 'tdqt',
      }
    },
    v4XE: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return w
      }),
        n.d(t, 'c', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return O
        }),
        n.d(t, 'b', function () {
          return k
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        i = n('T0aG'),
        s = n.n(i),
        u = (n('yH/f'), n('2G9S'), n('LW0h'), n('JtPf'), n('7x/C'), n('oEOe')),
        l = n('kGix'),
        d = n('Ssj5'),
        p = n('SrIh'),
        f = n('RqPI')
      function h(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var b = 'savedSearches',
        y = { fetchStatus: l.a.NONE, savedSearches: [] },
        g = Object.freeze({
          REQUEST: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST',
          SUCCESS: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS',
          FAILURE: 'rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE',
        }),
        v = Object.freeze({
          REQUEST: 'rweb/savedSearches/SAVE_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/SAVE_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/SAVE_SEARCH_FAILURE',
        }),
        S = Object.freeze({
          REQUEST: 'rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST',
          SUCCESS: 'rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS',
          FAILURE: 'rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE',
        })
      function _() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case g.SUCCESS:
            var n = t.payload,
              r = Array.isArray(n)
            return (
              r ||
                Object(p.a)('Saved search results are not type array', { extra: { savedSearchResultsType: s()(n) } }),
              m(m({}, e), {}, { fetchStatus: l.a.LOADED, savedSearches: r && n ? n : [] })
            )
          case g.FAILURE:
            return m(m({}, e), {}, { fetchStatus: l.a.FAILED })
          case v.SUCCESS:
            return m(
              m({}, e),
              {},
              { savedSearches: t.payload ? [].concat(a()(e.savedSearches), [t.payload]) : e.savedSearches },
            )
          case S.SUCCESS:
            return t.payload
              ? m(
                  m({}, e),
                  {},
                  {
                    savedSearches: e.savedSearches.filter(function (e) {
                      return e.id_str !== t.payload.id_str
                    }),
                  },
                )
              : e
          default:
            return e
        }
      }
      d.a.register(c()({}, b, _))
      var w = function (e) {
          return e.savedSearches.savedSearches
        },
        E = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.SavedSearches.create, params: { query: e } })({
              actionTypes: v,
              context: 'SAVE_SEARCH',
            })
          }
        },
        O = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(u.b)(t, { request: a.SavedSearches.destroy, params: { id: e } })({
              actionTypes: S,
              context: 'DELETE_SAVED_SEARCH',
            })
          }
        },
        k = function () {
          return function (e, t, n) {
            n.api
            var r = t()
            return Object(f.m)(r)
              ? (function (e) {
                  return e.savedSearches.fetchStatus
                })(r) === l.a.LOADED
                ? Promise.resolve()
                : e(function (e, t, n) {
                    var r = n.api
                    return Object(u.b)(e, { request: r.SavedSearches.fetch, params: {} })({
                      actionTypes: g,
                      context: 'FETCH_SAVED_SEARCHES',
                    })
                  })
              : Promise.resolve()
          }
        }
    },
    wz7L: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        c = n.n(o),
        i = n('Lsrn'),
        s = n('k/Ka')
      function u(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.a.createElement(
            'g',
            null,
            c.a.createElement('path', {
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    x1T0: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'LoggedOutSearchHomeTrendsListQuery',
            selections: (r = [
              {
                alias: null,
                args: [{ kind: 'Literal', name: 's', value: 21 }],
                concreteType: 'LoggedOutTrendsList',
                kind: 'LinkedField',
                name: 'logged_out_trends_list',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'trends', storageKey: null }],
                storageKey: 'logged_out_trends_list(s:21)',
              },
            ]),
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'LoggedOutSearchHomeTrendsListQuery',
            selections: r,
          },
          params: {
            id: 'jFSVxO6XekDkqa9LhEqxug',
            metadata: {},
            name: 'LoggedOutSearchHomeTrendsListQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(a.hash = 'd776a0f7400b83db0b925f0352d2b751'), (t.default = a)
    },
  },
])
//# sourceMappingURL=WIPED
