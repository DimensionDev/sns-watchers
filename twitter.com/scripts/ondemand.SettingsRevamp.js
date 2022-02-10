;(window.webpackJsonp = window.webpackJsonp || []).push([
  [234],
  {
    '1Uii': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'OffTwitterActivity', function () {
          return N
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = a('ddV6'),
        l = a.n(o),
        s = a('ERkP'),
        u = a.n(s),
        d = a('NeAX'),
        f = a('RqPI'),
        m = a('P1r1'),
        p = a('hqKg'),
        b = a('rxPX'),
        h = a('0KEI'),
        E = Object(b.a)()
          .propsFromState(function () {
            return {
              settings: d.selectUserPreferences,
              isEUUser: Object(p.createSelector)(f.m, m.g, d.selectPreferences, function (e, t, a) {
                return !(!t.settings_metadata || !t.settings_metadata.is_eu) || a.is_eu_country
              }),
            }
          })
          .adjustStateProps(function (e) {
            var t = e.isEUUser,
              a = e.settings
            return { allowCookieUse: a.allowCookieUse, allowDeviceAccess: a.allowDeviceAccess, isEUUser: t }
          })
          .propsFromActions(function () {
            return {
              updateSettings: d.updateSettings,
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)(
                'OFF_TWITTER_ACTIVITY_SCREEN',
              ),
            }
          }),
        g = a('3XMw'),
        y = a.n(g),
        v = a('yoO3'),
        S = a('7JQg'),
        _ = a('7FtF'),
        w = a('k89r'),
        k = a('RKmr'),
        C = a('e0ey'),
        T = a('eb3s'),
        O = y.a.bcae496c,
        F = y.a.acc60551,
        R = y.a.f80a33af,
        L = y.a.b276596b,
        A = y.a.c966aaf4,
        I = y.a.e8313b32,
        P = y.a.f1d46fd5,
        M = y.a.cfd2f35d,
        U = y.a.f6c8ccc7,
        x = y.a.f748b0fc,
        H = { page: 'settings', section: 'off_twitter_activity' }
      function N(e) {
        var t = e.allowDeviceAccess,
          a = e.createLocalApiErrorHandler,
          n = e.isEUUser,
          c = e.location,
          o = e.updateSettings,
          s = Object(w.a)(),
          d = (function (e, t, a) {
            var n = u.a.useState(!1),
              r = l()(n, 2),
              c = r[0],
              i = r[1]
            function o(e) {
              a('allowCookieUse', e)
            }
            return {
              showConfirmation: c,
              enabled: e,
              controlDisabled: t && !e,
              _handleChanged: function (e, a) {
                t && !a ? i(!0) : o(a)
              },
              _handleConfirmationCancel: function () {
                i(!1)
              },
              _handleConfirmationConfirm: function () {
                i(!1), o(!1)
              },
            }
          })(Boolean(e.allowCookieUse), Boolean(n), f)
        function f(e, t) {
          s.scribe(i()(i()({}, H), {}, { element: e, action: t ? 'enable' : 'disable' })),
            o(r()({}, e, t)).catch(a({ showToast: !0 }))
        }
        return u.a.createElement(
          S.b,
          { namespace: H },
          u.a.createElement(
            v.a,
            null,
            u.a.createElement(
              _.a,
              { location: c, screenType: 'secondaryDetail', title: O },
              u.a.createElement(k.a, { description: F }),
              u.a.createElement(C.a, {
                checked: d.enabled,
                disabled: d.controlDisabled,
                helpText: n ? A : L,
                label: R,
                learnMoreLink: 'https://support.twitter.com/articles/20169421',
                name: 'allowCookieUse',
                onChange: d._handleChanged,
              }),
              u.a.createElement(C.a, {
                checked: t,
                helpText: x,
                label: U,
                learnMoreLink: 'https://support.twitter.com/articles/20175257',
                name: 'allowDeviceAccess',
                onChange: f,
              }),
            ),
            d.showConfirmation &&
              u.a.createElement(T.a, {
                cancelButtonLabel: M,
                confirmButtonLabel: P,
                onCancel: d._handleConfirmationCancel,
                onConfirm: d._handleConfirmationConfirm,
                text: I,
              }),
          ),
        )
      }
      var j = E(N)
      t.default = j
    },
    '21nk': function (e, t, a) {
      'use strict'
      var n = a('I9iR'),
        r = a('3KVO'),
        c = a('yLYC'),
        i = a('Ud88'),
        o = (a('/2Cm'), a('aQQo').useTrackLoadQueryInRender),
        l = (a('ERkP').useDebugValue, a('K1lQ').__internal),
        s = l.fetchQueryDeduped,
        u = l.fetchQuery
      e.exports = function (e, t, a) {
        o()
        var l,
          d = i(),
          f = t.fetchKey,
          m = t.fetchPolicy,
          p = t.source,
          b = t.variables,
          h = t.networkCacheConfig,
          E = c(e, b, h)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          E.request.node.params.name !== t.name && n(!1),
            (l = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: f,
              fetchObservable: s(d, E.request.identifier, function () {
                return d === t.environment && null != p
                  ? d.executeWithSource({ operation: E, source: p })
                  : d.execute({ operation: E })
              }),
              fetchPolicy: m,
              query: E,
              renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
            })
        else {
          var g = u(d, E)
          l = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && d === t.environment ? p.ifEmpty(g) : (t.environment, g),
            fetchKey: f,
            fetchPolicy: m,
            query: E,
            renderPolicy: null == a ? void 0 : a.UNSTABLE_renderPolicy,
          }
        }
        return r(l)
      }
    },
    '23An': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = n.useEffect,
        c = n.useRef
      e.exports = function () {
        var e = c(!0)
        return (
          r(function () {
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
    '3Ohe': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        i = a.n(c),
        o = a('1Pcy'),
        l = a.n(o),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        f = a.n(d),
        m = a('KEM+'),
        p = a.n(m),
        b = (a('2G9S'), a('uFXj'), a('ERkP')),
        h = a.n(b),
        E = a('t62R'),
        g = a('rHpw'),
        y = a('MWbm'),
        v = (function (e) {
          u()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(l()(e), '_renderSubtextAndLink', function () {
                var t = e.props.subtext
                return h.a.createElement(E.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
              }),
              p()(l()(e), '_renderLearnMore', function () {
                var t = e.props,
                  a = t.learnMoreLabel,
                  n = t.learnMoreLink
                return n && a ? h.a.createElement(E.b, { link: n, size: 'subtext2' }, a) : null
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
                    t = e.label,
                    a = e.learnMoreLabel,
                    n = e.learnMoreLink,
                    r = e.subtext,
                    c = e.withBottomBorder
                  return h.a.createElement(
                    y.a,
                    { style: [S.root, c && S.bottomBorder] },
                    h.a.createElement(E.b, null, t),
                    r
                      ? a && n
                        ? this._renderSubtextAndLink()
                        : h.a.createElement(E.b, { color: 'gray700', size: 'subtext2' }, r)
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      p()(v, 'defaultProps', { withBottomBorder: !0 })
      var S = g.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          bottomBorder: {
            borderBottomWidth: e.borderWidths.small,
            borderBottomStyle: 'solid',
            borderBottomColor: e.colors.borderColor,
          },
        }
      })
      t.a = v
    },
    '4BrD': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ERkP'),
        i = a.n(c),
        o = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z',
              }),
              i.a.createElement('path', {
                d: 'M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '5Y3x': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'monetizationSettingsQuery', function () {
          return I
        })
      var n = a('ERkP'),
        r = a.n(n),
        c = (a('enFi'), a('3XMw')),
        i = a.n(c),
        o = a('yiKp'),
        l = a.n(o),
        s = a('Lsrn'),
        u = a('k/Ka'),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(u.a)(
            'svg',
            l()(
              l()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M22.856 15.271l-3.681 2.692 1.393 4.338c.06.14 0 .289-.119.379-.06.05-.129.07-.199.07-.08 0-.149-.02-.209-.07l-3.681-2.673-3.681 2.673c-.06.05-.129.07-.209.07-.07 0-.139-.02-.199-.07-.129-.09-.189-.239-.129-.379l1.393-4.338-3.671-2.692c-.119-.08-.169-.249-.129-.389.05-.15.179-.239.338-.239h4.546l1.403-4.338c.05-.15.189-.229.338-.229.139 0 .289.08.338.229l1.403 4.338h4.546c.149 0 .298.09.338.239.04.14 0 .309-.129.389zM9.421 21.94H3.217c-.699 0-1.336-.303-1.748-.83-.426-.547-.571-1.262-.397-1.961.709-2.858 3.074-5.082 6.171-5.805.399-.098.812.158.908.567.095.408-.159.815-.565.91-2.541.593-4.474 2.392-5.046 4.693-.06.245-.017.486.121.662.126.162.319.248.556.248h6.204c.418 0 .756.34.756.758s-.338.758-.756.758zm0-10.342c-1.378 0-2.918-.152-3.901-1.279-.827-.947-1.095-2.411-.819-4.473.385-2.878 2.15-4.596 4.72-4.596s4.334 1.717 4.721 4.596c.276 2.062.008 3.526-.819 4.473-.984 1.128-2.525 1.279-3.902 1.279zm0-8.826c-2.414 0-3.051 2.053-3.215 3.276-.212 1.579-.058 2.679.457 3.27.464.532 1.289.758 2.758.758s2.294-.227 2.758-.758c.514-.589.669-1.69.457-3.269-.165-1.224-.8-3.277-3.215-3.277z',
              }),
            ),
          )
        }
      d.metadata = { width: 24, height: 24 }
      var f,
        m = d,
        p = a('yoO3'),
        b = a('7FtF'),
        h = a('zCf4'),
        E = a('n0Rl'),
        g = a('6vad'),
        y = a('0yYu'),
        v = a('OySi'),
        S = i.a.d299431b,
        _ = i.a.h93824cc,
        w = i.a.a6777c1b,
        k = i.a.c1b71878,
        C = i.a.e939cc53,
        T = i.a.ibb5e1c8,
        O = i.a.b255df58,
        F = i.a.b3f834c7,
        R = i.a.i724fb49,
        L = i.a.f66d24be,
        A = { Approved: C, NotStarted: null, Rejected: T, Submitted: O, Waitlisted: F },
        I = void 0 !== f ? f : (f = a('jN9l')),
        P = Object(E.b)(I, { errorConfig: { context: 'MONETIZATION_SETTINGS' } })
      t.default = function () {
        var e = Object(h.g)()
        return r.a.createElement(P, {
          render: function (t) {
            var a,
              n,
              c,
              i,
              o = t.data,
              l = t.error,
              s = !l && !(null == o || null === (a = o.viewer) || void 0 === a || !a.is_active_creator),
              u =
                (!l &&
                  (null == o ||
                  null === (n = o.viewer) ||
                  void 0 === n ||
                  null === (c = n.user_results) ||
                  void 0 === c ||
                  null === (i = c.result) ||
                  void 0 === i
                    ? void 0
                    : i.super_follows_application_status)) ||
                'NotStarted',
              d = s ? k : A[u]
            return r.a.createElement(
              p.a,
              null,
              r.a.createElement(
                b.a,
                { location: e, screenType: 'primaryDetail', title: S },
                r.a.createElement(g.b, { text: _ }),
                r.a.createElement(v.b, { Icon: m, description: d, label: w, link: '/settings/superfollows' }),
                r.a.createElement(y.a, null),
                r.a.createElement(g.b, { text: R }),
                r.a.createElement(v.a, { label: L, link: 'https://help.twitter.com/forms/paid-features/superfollows' }),
              ),
            )
          },
          variables: {},
        })
      }
    },
    '5ZXc': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'Languages', function () {
          return P
        })
      var n = a('ERkP'),
        r = a.n(n),
        c = a('S/HT'),
        i = a('RqPI'),
        o = a('rxPX'),
        l = a('0KEI'),
        s = a('FDFL'),
        u = function (e) {
          var t = Object(i.o)(e)
          return t && Object(s.b)(e, t)
        },
        d = Object(o.a)()
          .propsFromState(function () {
            return { languageName: u, languageCode: i.o }
          })
          .propsFromActions(function () {
            return {
              fetchCountryNamesIfNeeded: c.a,
              fetchAvailableLanguagesIfNeeded: s.a,
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)('LANGUAGES_SCREEN'),
            }
          }),
        f = a('3XMw'),
        m = a.n(f),
        p = a('yoO3'),
        b = a('7JQg'),
        h = a('7FtF'),
        E = a('RKmr'),
        g = a('6vad'),
        y = a('csss'),
        v = a('0yYu'),
        S = m.a.d495680d,
        _ = m.a.f9c98140,
        w = m.a.a4b69cbb,
        k = m.a.da3b2587,
        C = m.a.a4b69cbb,
        T = m.a.cab61d58,
        O = m.a.f0853ba6,
        F = m.a.bca1de49,
        R = m.a.c3aa76c3,
        L = m.a.b2a77838,
        A = m.a.c3aa76c3,
        I = { page: 'settings', section: 'languages' }
      function P(e) {
        var t = e.createLocalApiErrorHandler,
          a = e.fetchAvailableLanguagesIfNeeded,
          n = e.fetchCountryNamesIfNeeded,
          c = e.languageCode,
          i = e.languageName,
          o = e.location
        return (
          r.a.useEffect(
            function () {
              c && n(c).catch(t()), a().catch(t())
            },
            [c, n, a, t],
          ),
          r.a.createElement(
            b.b,
            { namespace: I },
            r.a.createElement(
              p.a,
              null,
              r.a.createElement(
                h.a,
                { location: o, screenType: 'secondaryDetail', title: S },
                r.a.createElement(E.a, { description: _ }),
                r.a.createElement(g.b, { text: w }),
                r.a.createElement(E.a, { description: k }),
                r.a.createElement(y.a, { description: i, label: C, link: '/settings/language' }),
                r.a.createElement(v.a, null),
                r.a.createElement(g.b, { text: T }),
                r.a.createElement(E.a, { description: O }),
                r.a.createElement(y.a, { label: F, link: '/i/flow/language_selector' }),
                r.a.createElement(v.a, null),
                r.a.createElement(g.b, { text: R }),
                r.a.createElement(E.a, { description: L }),
                r.a.createElement(y.a, { label: A, link: '/settings/your_twitter_data/language' }),
              ),
            ),
          )
        )
      }
      var M = d(P)
      t.default = M
    },
    '6qBT': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return v
        })
      var n = a('ERkP'),
        r = a.n(n),
        c = a('3XMw'),
        i = a.n(c),
        o = a('yoO3'),
        l = a('7JQg'),
        s = a('7FtF'),
        u = a('MWbm'),
        d = a('RKmr'),
        f = a('csss'),
        m = i.a.cbd449af,
        p = i.a.ab125232,
        b = i.a.a5f32aa2,
        h = i.a.daef29b7,
        E = i.a.i0dd9b9d,
        g = i.a.aaafffd9,
        y = { page: 'settings', section: 'mute_and_block' }
      function v(e) {
        var t = e.location
        return r.a.createElement(
          l.b,
          { namespace: y },
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: m },
              r.a.createElement(
                u.a,
                null,
                r.a.createElement(d.a, { description: p }),
                r.a.createElement(f.a, { label: b, link: '/settings/blocked/all' }),
                r.a.createElement(f.a, { label: h, link: '/settings/muted/all' }),
                r.a.createElement(f.a, { label: E, link: '/settings/muted_keywords' }),
                r.a.createElement(f.a, { label: g, link: '/settings/notifications/advanced_filters' }),
              ),
            ),
          ),
        )
      }
    },
    '7FtF': function (e, t, a) {
      'use strict'
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        i = a.n(c),
        o = a('1Pcy'),
        l = a.n(o),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        f = a.n(d),
        m = a('KEM+'),
        p = a.n(m),
        b = (a('2G9S'), a('ERkP')),
        h = a.n(b),
        E = a('P1r1'),
        g = a('G6rE'),
        y = a('rxPX'),
        v = a('0KEI'),
        S = Object(y.a)()
          .propsFromState(function () {
            return { fetchStatus: E.o, loggedInUser: g.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: E.f,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        _ = a('v//M'),
        w = a('3XMw'),
        k = a.n(w),
        C = a('M2mT'),
        T = 'settingsDetailSave',
        O = a('mw9i'),
        F = a('0yYu'),
        R = a('/yvb'),
        L = a('rHpw'),
        A = k.a.i2209530,
        I = (function (e) {
          u()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(l()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return h.a.createElement(_.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              p()(l()(e), '_render', function () {
                var t = e.props,
                  a = t.children,
                  n = t.onSubmit,
                  r = t.submitDisabled,
                  c = t.submitLabel,
                  i = t.submitType,
                  o = t.withMarginBottom
                return h.a.createElement(
                  O.a,
                  { style: [P.contentRoot, o && P.withMarginBottom] },
                  a,
                  n
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(F.a, null),
                        h.a.createElement(
                          O.a,
                          { style: P.buttonContainer },
                          h.a.createElement(R.a, { disabled: r, onPress: n, style: P.button, testID: T, type: i }, c),
                        ),
                      )
                    : null,
                )
              }),
              p()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchSettingsIfNeeded)().catch(a())
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'getBackLocation',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    a = e.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return t && t.pathname === a ? '/' : a
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUser,
                    a = e.onBackClick,
                    n = e.rightControl,
                    r = e.screenType,
                    c = e.secondaryBar,
                    i = e.title,
                    o = e.withBottomBorder,
                    l = this.getBackLocation(),
                    s = t ? '@'.concat(t.screen_name) : void 0
                  return h.a.createElement(
                    C.a,
                    {
                      backLocation: l,
                      onBackClick: a,
                      rightControl: n,
                      screenType: r,
                      secondaryBar: c,
                      showSubtitleOnWideDetail: !1,
                      subtitle: s,
                      title: i,
                      withBottomBorder: o,
                    },
                    t ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      p()(I, 'defaultProps', { submitLabel: A, submitType: 'brandFilled', withMarginBottom: !0 })
      var P = L.a.create(function (e) {
        return {
          contentRoot: {
            backgroundColor: e.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
          },
          buttonContainer: {
            backgroundColor: e.colors.cellBackground,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginVertical: 0,
            marginHorizontal: 'auto',
            paddingVertical: e.spaces.space12,
            paddingHorizontal: 0,
          },
          button: { marginVertical: 0, marginHorizontal: e.spaces.space12 },
          withMarginBottom: {
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(L.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = S(I)
    },
    '899o': function (e, t, a) {
      'use strict'
      a.r(t)
      a('KqXw'), a('WNMA')
      var n,
        r = a('ERkP'),
        c = a.n(r),
        i = a('v6aA'),
        o = a('FIs5'),
        l = a('KEM+'),
        s = a.n(l),
        u = a('yiKp'),
        d = a.n(u),
        f = a('PnFR'),
        m = a('8UdT'),
        p = a('S/Qv'),
        b = a('5Y9N'),
        h = a('91Nr'),
        E = a('Yy//'),
        g = d()(
          d()({}, Object(b.a)({})),
          {},
          ((n = {}),
          s()(n, m.b.Message, Object(p.a)({})),
          s()(n, m.b.Tombstone, h.a),
          s()(n, m.b.Tweet, Object(E.a)({ displayBlocked: !0 })),
          s()(n, m.b.TimelineCursor, Object(f.a)({})),
          n),
        ),
        y = a('3XMw'),
        v = a.n(y),
        S = a('yoO3'),
        _ = a('fTQJ'),
        w = a('WpDa'),
        k = a('ZNT5'),
        C = a('7JQg'),
        T = a('7FtF'),
        O = a('TnO6'),
        F = v.a.f154bd64,
        R = { page: 'settings', component: 'autoblocked_account_tweets' },
        L = { context: 'safety_mode' },
        A = v.a.e9f1fbcb,
        I = v.a.de9b6641,
        P = function () {
          return c.a.createElement(o.a, { header: A, message: I })
        }
      t.default = function (e) {
        var t = e.history,
          a = e.location,
          n = e.match,
          r = n.params.userId,
          o = c.a.useContext(i.a).featureSwitches,
          l = c.a.useMemo(
            function () {
              return (
                (e = r),
                Object(k.a)({
                  timelineId: 'ritoActionedTweets-'.concat(e),
                  getEndpoint: function (e) {
                    return e.RitoActionedTweets.fetchRitoActionedTweets
                  },
                  getEndpointParams: function (t) {
                    var a = t.count,
                      n = t.cursor
                    return { count: a, cursor: 'string' == typeof n ? n : void 0, userId: e }
                  },
                  context: 'FETCH_RITO_ACTIONED_TWEETS_TIMELINE',
                  perfKey: 'ritoActionedTweets',
                  formatResponse: w.a,
                })
              )
              var e
            },
            [r],
          ),
          s = o.isTrue('rito_safety_mode_modal_prompt_enabled')
            ? c.a.createElement(O.b, { history: t, location: a, match: n, timelineType: O.a.ActionedTweets })
            : null
        return c.a.createElement(
          C.b,
          { data: L, namespace: R },
          c.a.createElement(
            S.a,
            null,
            c.a.createElement(
              T.a,
              { screenType: 'secondaryDetail', title: F, withMarginBottom: !1 },
              c.a.createElement(_.a, { entryConfiguration: g, footer: s, module: l, renderEmptyState: P, title: F }),
            ),
          ),
        )
      }
    },
    AS3p: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return i
      }),
        a.d(t, 'c', function () {
          return o
        }),
        a.d(t, 'b', function () {
          return l
        }),
        a.d(t, 'd', function () {
          return s
        }),
        a.d(t, 'e', function () {
          return f
        })
      a('yH/f')
      var n = a('SrIh'),
        r = a('JbbX'),
        c = 1e3,
        i = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function o(e) {
        var t = Object(r.a)(e)
        return t
          ? u(t)
            ? d(t)
              ? t[1]
                ? i.AcceptAllCookies
                : t[2]
                ? i.RefuseNonEssentialCookies
                : (Object(n.a)('Invalid consent signal state'), i.Invalid)
              : i.NotSet
            : i.Invalid
          : i.NotSet
      }
      function l(e) {
        Object(r.b)({ consent_version: 2, text_version: c, 1: !0 }, e)
      }
      function s(e) {
        Object(r.b)({ consent_version: 2, text_version: c, 2: !0 }, e)
      }
      function u(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function f(e) {
        var t = Object(r.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < c
      }
    },
    B4m3: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'UndoTweetScreen', function () {
          return x
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = (a('KqXw'), a('WNMA'), a('TJCb'), a('7x/C'), a('DZ+c'), a('z84I'), a('6U7i'), a('ERkP')),
        l = a.n(o),
        s = a('v6aA'),
        u = a('gUb7'),
        d = a('qlwE'),
        f = a('P1r1'),
        m = a('rxPX'),
        p = Object(m.a)()
          .propsFromState(function () {
            return { undoTweetSettings: d.q, userClaimsFetchStatus: u.c }
          })
          .propsFromActions(function () {
            return { updateSettings: f.N }
          })
          .withAnalytics({ page: 'settings', section: 'undo_tweet' }),
        b = a('5oBF'),
        h = a('v//M'),
        E = a('3XMw'),
        g = a.n(E),
        y = a('/de5'),
        v = a('yoO3'),
        S = a('7FtF'),
        _ = a('0KEI'),
        w = a('ehR8'),
        k = a('MWbm'),
        C = a('RKmr'),
        T = a('e0ey'),
        O = a('fyvP'),
        F = a('rHpw'),
        R = g.a.de43eaf2,
        L = g.a.b6ab9962,
        A = g.a.jdceda6f,
        I = g.a.j45978a8,
        P = g.a.i9028824,
        M = g.a.j905e6fe,
        U = g.a.e2c39a4c
      function x(e) {
        var t = e.undoTweetSettings,
          a = e.updateSettings,
          n = e.userClaimsFetchStatus,
          c = t.durationSecs,
          o = t.original,
          u = t.quote,
          d = t.reply,
          f = Object(w.a)(),
          m = f.history,
          p = f.location,
          E = f.match,
          F = l.a.useContext(s.a),
          x = F.featureSwitches,
          N = F.userClaims,
          j = (c || b.a).toString(),
          D = Object(_.useCreateLocalApiErrorHandler)('UNDO_TWEET_SCREEN_CONTEXT'),
          z = N.isTrueAndEnabled('subscriptions_feature_1003'),
          B = x.isTrue('subscriptions_undo_quote_tweets_enabled'),
          K = g.a.i3b7a017,
          Q = [5, 10, 20, 30, 60].map(function (e) {
            return { label: K(e), value: e.toString() }
          })
        function W(e, n) {
          if ('period' !== e) {
            var c = { undoPreview: i()(i()({}, t), {}, r()({}, e, !t[e])) }
            a(c).catch(D({}))
          } else a({ undoPreview: i()(i()({}, t), {}, { durationSecs: Number(n) }) })
        }
        return l.a.createElement(h.a, {
          accessibilityLabel: P,
          fetchStatus: n,
          render: function () {
            return z
              ? l.a.createElement(
                  v.a,
                  null,
                  l.a.createElement(
                    S.a,
                    { location: p, title: R },
                    l.a.createElement(C.a, { description: U }),
                    l.a.createElement(T.a, { checked: void 0 === o || o, label: L, name: 'original', onChange: W }),
                    l.a.createElement(T.a, { checked: void 0 === d || d, label: A, name: 'reply', onChange: W }),
                    B && l.a.createElement(T.a, { checked: void 0 === u || u, label: I, name: 'quote', onChange: W }),
                    l.a.createElement(
                      k.a,
                      { style: H.radioGroup },
                      l.a.createElement(O.a, { label: M, name: 'period', onChange: W, options: Q, value: j }),
                    ),
                  ),
                )
              : l.a.createElement(y.b, { history: m, location: p, match: E })
          },
        })
      }
      var H = F.a.create(function (e) {
        return { radioGroup: { padding: e.spaces.space16 } }
      })
      t.default = p(x)
    },
    DFUC: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return we
        })
      var n = a('97Jx'),
        r = a.n(n),
        c = (a('LW0h'), a('7x/C'), a('z84I'), a('ERkP')),
        i = a.n(c),
        o = a('v6aA'),
        l = a('3XMw'),
        s = a.n(l),
        u = a('yoO3'),
        d = a('7JQg'),
        f = a('7FtF'),
        m = 'privacyAndSafetyScreen',
        p = a('MWbm'),
        b = a('RKmr'),
        h = a('6vad'),
        E = a('0yYu'),
        g = a('S+H3'),
        y = a('TW8A'),
        v = a('yiKp'),
        S = a.n(v),
        _ = a('Lsrn'),
        w = a('k/Ka'),
        k = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M19.98 1.775H4.02c-1.24 0-2.25 1.01-2.25 2.25v15.95c0 1.24 1.01 2.25 2.25 2.25h15.96c1.24 0 2.25-1.01 2.25-2.25V4.025c0-1.24-1.01-2.25-2.25-2.25zm.75 18.2c0 .42-.34.75-.75.75H4.02c-.41 0-.75-.33-.75-.75v-9.48h17.46v9.48zm0-10.23H3.27v-5.72c0-.42.34-.75.75-.75h15.96c.41 0 .75.33.75.75v5.72z',
              }),
              i.a.createElement('path', {
                d: 'M8.96 6.515v.09c0 .95-.78 1.72-1.73 1.72h-.08c-.95 0-1.73-.77-1.73-1.72v-.09c0-.95.78-1.73 1.73-1.73h.08c.95 0 1.73.78 1.73 1.73zm9.54.04c0 .42-.34.75-.75.75h-6.39c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h6.39c.41 0 .75.34.75.75zm-9.54 7.17v.09c0 .95-.78 1.73-1.73 1.73h-.08c-.95 0-1.73-.78-1.73-1.73v-.09c0-.95.78-1.72 1.73-1.72h.08c.95 0 1.73.77 1.73 1.72zm9.54.05c0 .41-.34.75-.75.75h-6.39c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h6.39c.41 0 .75.33.75.75zm0 3.6c0 .42-.34.75-.75.75h-6.39c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h6.39c.41 0 .75.34.75.75z',
              }),
            ),
          )
        }
      k.metadata = { width: 24, height: 24 }
      var C = k,
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M21.6 3.139c-6.01-3.25-13.2-3.25-19.21 0-.24.13-.39.39-.39.66v8.58c0 8.59 9.73 10.88 9.83 10.9.05.02.11.02.17.02.05 0 .11 0 .16-.02.1-.02 9.84-2.31 9.84-10.9v-8.58c0-.27-.16-.53-.4-.66zm-1.1 9.24c0 6.9-7.27 9.08-8.5 9.4-1.24-.32-8.5-2.5-8.5-9.4v-8.13c5.35-2.73 11.64-2.73 17 0v8.13z',
              }),
              i.a.createElement('path', {
                d: 'M14.12 7.639H9.87c-1 0-1.9.4-2.56 1.06-.65.66-1.05 1.56-1.05 2.56 0 1.99 1.61 3.61 3.61 3.61h4.25c1 0 1.9-.41 2.55-1.06.66-.65 1.06-1.55 1.06-2.55 0-2-1.61-3.62-3.61-3.62zm-4.24 5.82c-1.22 0-2.2-.99-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.21-.98 2.2-2.2 2.2z',
              }),
            ),
          )
        }
      T.metadata = { width: 24, height: 24 }
      var O = T,
        F = a('qz6Z'),
        R = a('SOvA'),
        L = a('qo8F'),
        A = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              i.a.createElement('path', {
                d: 'M11 10.57c-.572 0-1.21-.064-1.62-.53-.342-.392-.453-.998-.34-1.85.162-1.193.894-1.904 1.96-1.904 1.066 0 1.8.71 1.958 1.902.115.853.003 1.46-.34 1.85-.407.468-1.046.53-1.618.53zM13.59 15H8.41c-.292 0-.552-.124-.73-.348-.186-.236-.254-.56-.18-.87.37-1.563 1.808-2.474 3.5-2.474s3.13.91 3.5 2.474c.074.31.006.634-.18.87-.18.224-.438.348-.73.348z',
              }),
            ),
          )
        }
      A.metadata = { width: 24, height: 24 }
      var I = A,
        P = a('4BrD'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M22.52 12.78c-.17-.16-.41-.23-.65-.2-1.01.18-1.98-.29-2.5-1.17-.46-.8-.56-1.91-.2-2.52.19-.33.17-.74-.08-1.05-.2-.26-.52-.38-.84-.35-.06.01-.12.03-.17.04-1.46.45-3.02-.16-3.78-1.47-.63-1.08-.57-2.45.14-3.47.15-.21.18-.48.08-.72-.09-.24-.3-.4-.55-.45-3-.54-6.13.22-8.58 2.11-3.89 3-5.23 8.42-3.19 12.9 1.29 2.82 3.62 4.88 6.56 5.81 1.47.47 2.99.61 4.49.44 1.47-.16 2.92-.63 4.22-1.39 2.91-1.68 4.83-4.55 5.27-7.87.04-.23-.05-.47-.22-.64zM16.71 20c-2.26 1.31-4.99 1.61-7.49.82-2.53-.8-4.54-2.59-5.65-5.01-1.75-3.85-.6-8.51 2.74-11.1 1.39-1.06 3.01-1.72 4.7-1.91.55-.06 1.09-.07 1.66-.03-.5 1.31-.4 2.8.33 4.05.94 1.61 2.7 2.49 4.5 2.34-.16.96.02 2.08.58 3.02.65 1.11 1.77 1.81 3.01 1.92-.58 2.48-2.14 4.6-4.38 5.9z',
              }),
              i.a.createElement('path', {
                d: 'M13.19 12.67c-.67.18-1.36-.2-1.54-.87-.19-.67.21-1.36.88-1.54.66-.19 1.35.21 1.53.87.19.66-.21 1.35-.87 1.54zM9.83 6.48c-.53.15-1.07-.16-1.22-.69-.16-.53.16-1.09.69-1.23.53-.15 1.09.16 1.23.69.15.53-.16 1.09-.7 1.23zm-2.59 3.98c-.53.14-1.09-.17-1.23-.69-.15-.54.16-1.09.69-1.24.54-.14 1.09.17 1.23.7.16.54-.15 1.09-.69 1.23zm-.06 5.48c-.72.2-1.49-.23-1.69-.96-.21-.74.23-1.49.96-1.69.73-.21 1.48.22 1.69.96.2.73-.23 1.49-.96 1.69zm5 2.66c-.67.18-1.36-.21-1.54-.87-.19-.66.2-1.36.88-1.54.66-.19 1.35.21 1.53.87.19.66-.21 1.35-.87 1.54zm5.6-1.5c-.54.16-1.09-.15-1.24-.69-.15-.53.16-1.08.7-1.23.53-.15 1.08.17 1.23.7.15.53-.16 1.08-.69 1.22z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var U = M,
        x = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            S()(
              S()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M14.875 22c-.023 0-.046 0-.07-.003-.32-.03-.586-.26-.66-.574l-3.854-16.3-3.1 7.175c-.12.274-.39.452-.69.452H2.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.257L9.81 2.452c.13-.297.437-.473.755-.45.322.03.59.26.664.575l3.86 16.33 2.473-5.595c.12-.27.39-.446.686-.446h3c.413 0 .75.336.75.75s-.337.75-.75.75h-2.513l-3.177 7.188c-.12.272-.39.446-.685.446z',
              }),
            ),
          )
        }
      x.metadata = { width: 24, height: 24 }
      var H = x,
        N = a('aPcQ'),
        j = a('KrGU'),
        D = a('OySi'),
        z = s.a.cad53943,
        B = s.a.df5fa1d0,
        K = s.a.a244ed50,
        Q = s.a.e908903a,
        W = s.a.h7a0dfbe,
        X = s.a.b38d81ae,
        G = s.a.f8d4746b,
        V = s.a.f2bd9c47,
        q = s.a.b2810ee7,
        Y = s.a.f01fd982,
        J = s.a.dcc5aa06,
        Z = s.a.cbd449af,
        $ = s.a.ab125232,
        ee = s.a.d4986f85,
        te = s.a.cc950d94,
        ae = s.a.ded416bf,
        ne = s.a.fe37f854,
        re = s.a.fd4d9068,
        ce = s.a.ab987f3b,
        ie = s.a.d3d319d5,
        oe = s.a.d035a8d0,
        le = s.a.f9ff2201,
        se = s.a.d0b74a5a,
        ue = s.a.gd4302ec,
        de = s.a.bcae496c,
        fe = s.a.acc60551,
        me = s.a.h14ba864,
        pe = s.a.d7fcc4fa,
        be = s.a.jabb9c9a,
        he = s.a.a686c489,
        Ee = s.a.cdcef7b6,
        ge = s.a.a607862a,
        ye = s.a.g5925628,
        ve = s.a.dd6012f7,
        Se = { page: 'settings', section: 'privacy_and_safety' },
        _e = [
          { label: ve, link: 'https://privacy.twitter.com/' },
          { label: ge, link: 'https://twitter.com/en/privacy' },
          { label: ye, link: 'https://help.twitter.com/forms/privacy' },
        ]
      function we(e) {
        var t,
          a,
          n,
          c = e.location,
          l = i.a.useContext(o.a).featureSwitches,
          s = l.isTrue('rito_safety_mode_settings_enabled'),
          v = l.isTrue('voice_rooms_sharing_listening_data_with_followers_setting_enabled'),
          S = l.isTrue('responsive_web_cookie_compliance_banner_enabled')
        return i.a.createElement(
          d.b,
          { namespace: Se },
          i.a.createElement(
            u.a,
            null,
            i.a.createElement(
              f.a,
              { location: c, screenType: 'primaryDetail', title: z },
              i.a.createElement(
                p.a,
                { testID: m },
                i.a.createElement(b.a, { description: B }),
                i.a.createElement(h.b, { text: K }),
                (function (e) {
                  var t = e.includeSafetyMode,
                    a = void 0 !== t && t,
                    n = e.includeSpacesSection
                  return [
                    { label: Q, description: W, link: '/settings/audience_and_tagging', Icon: g.a },
                    { label: X, description: G, link: '/settings/your_tweets', Icon: y.a },
                    { label: V, description: q, link: '/settings/content_you_see', Icon: C },
                    a ? { label: Y, description: J, link: '/settings/safety_mode', Icon: O } : void 0,
                    { label: Z, description: $, link: '/settings/mute_and_block', Icon: F.a },
                    { label: ee, description: te, link: '/settings/direct_messages', Icon: R.a },
                    n ? { label: ae, description: ne, link: '/settings/spaces', Icon: L.a } : void 0,
                    { label: re, description: ce, link: '/settings/contacts', Icon: I },
                  ].filter(Boolean)
                })({ includeSafetyMode: s, includeSpacesSection: v }).map(function (e) {
                  return i.a.createElement(D.b, r()({}, e, { key: e.label }))
                }),
                i.a.createElement(E.a, null),
                i.a.createElement(h.b, { text: ie }),
                ((t = { includeCookiePreferences: S }),
                (a = t.includeCookiePreferences),
                (n = void 0 !== a && a),
                [
                  { label: oe, description: le, link: '/settings/ads_preferences', Icon: P.a },
                  n ? { label: se, description: ue, link: '/settings/cookie_preferences', Icon: U } : void 0,
                  { label: de, description: fe, link: '/settings/off_twitter_activity', Icon: H },
                  { label: me, description: pe, link: '/settings/data_sharing_with_business_partners', Icon: N.a },
                  { label: be, description: he, link: '/settings/location_information', Icon: j.a },
                ].filter(Boolean)).map(function (e) {
                  return i.a.createElement(D.b, r()({}, e, { key: e.label }))
                }),
                i.a.createElement(E.a, null),
                i.a.createElement(h.b, { text: Ee }),
                _e.map(function (e) {
                  return i.a.createElement(D.a, r()({}, e, { key: e.label }))
                }),
              ),
            ),
          ),
        )
      }
    },
    DbkT: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return H
        })
      var n = a('97Jx'),
        r = a.n(n),
        c = (a('z84I'), a('ERkP')),
        i = a.n(c),
        o = a('3XMw'),
        l = a.n(o),
        s = a('yoO3'),
        u = a('7JQg'),
        d = a('RKmr'),
        f = a('7FtF'),
        m = a('OySi'),
        p = 'accessibilityScreen',
        b = a('MWbm'),
        h = a('yiKp'),
        E = a.n(h),
        g = a('Lsrn'),
        y = a('k/Ka'),
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(y.a)(
            'svg',
            E()(
              E()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [g.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M3.194 12.223l-.03-.03.02-.01c.01.01.01.02.01.04zm4.82-7.21c-.12.05-.22.13-.3.23l-.06-.06c.12-.07.24-.12.36-.17z',
              }),
              i.a.createElement('path', {
                d: 'M22.194 12.763c0 .01-.01.03-.03.06-.16.36-1.06 2.26-2.88 3.99l-.46-.46-.59-.63c1.67-1.56 2.47-3.29 2.57-3.52 0-.01.01-.02.01-.02.01-.02.02-.05.03-.07.04-.08.04-.17 0-.25-.14-.31-2.66-6.12-8.85-6.12-1.13 0-2.2.19-3.2.58l-.03-.03-1.05-1.05c.08-.1.18-.18.3-.23 1.25-.51 2.58-.77 3.98-.77 7.2 0 10.08 6.69 10.2 6.98.24.44.25 1.03 0 1.54zm-18.98-.52l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06z',
              }),
              i.a.createElement('path', {
                d: 'M19.284 16.813c-.01 0-.01 0-.02.01l-.44-.47.46.46zm2.83 4.24l-3.59-3.59-2.95-2.95-6.09-6.09-1.66-1.66-4.88-4.88c-.3-.3-.77-.29-1.06 0-.22.21-.28.53-.17.8.01.03.02.06.04.08.03.05.07.1.1.14.01.01.02.03.03.04l3.58 3.58c-2.51 1.99-3.6 4.54-3.63 4.63-.27.51-.28 1.1-.04 1.61 0 .01.01.03.03.06.32.73 3.25 6.92 10.17 6.92 1.91 0 3.68-.47 5.27-1.41h.01l3.78 3.78c.29.3.77.3 1.06 0 .15-.14.22-.33.22-.53 0-.19-.07-.38-.22-.53zm-18.9-8.81l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06l5.33 5.33c-3.5-1.47-5.11-4.83-5.33-5.33zm8.78 6c-.3 0-.6-.01-.88-.05-1.33-1.44-4.01-4.19-4.12-4.3l-3.21-3.2c.21-.35.49-.76.84-1.19l8.64 8.64c-.41.07-.84.1-1.27.1zm2.98-.51l-9.35-9.35c.28-.27.59-.54.92-.78l9.61 9.62c-.38.21-.78.38-1.18.51zm1.4-5.73c0 .56-.11 1.1-.31 1.59-.12.33-.29.64-.49.92l-6.09-6.09c.28-.2.59-.37.92-.49.5-.2 1.03-.31 1.59-.31.39 0 .77.05 1.13.16-.47.4-.77.99-.77 1.66 0 .18.02.35.07.51.18.8.81 1.43 1.62 1.62.16.04.33.06.5.06.67 0 1.27-.3 1.67-.78.11.37.16.75.16 1.15z',
              }),
              i.a.createElement('path', { d: 'M3.214 12.243l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06z' }),
            ),
          )
        }
      v.metadata = { width: 24, height: 24 }
      var S = v,
        _ = a('tuke'),
        w = a('Zg3A'),
        k = a('xrkw'),
        C = l.a.f2b23061,
        T = l.a.jf907f5b,
        O = l.a.e3719c15,
        F = l.a.f371a361,
        R = l.a.c4881c66,
        L = l.a.a5ce82a4,
        A = l.a.d495680d,
        I = l.a.f9c98140,
        P = l.a.eafe3287,
        M = l.a.d76fe4fc,
        U = [
          { label: O, description: F, link: '/settings/accessibility', Icon: S },
          { label: R, description: L, link: '/settings/display', Icon: _.a },
          { label: A, description: I, link: '/settings/languages', Icon: w.a },
          { label: P, description: M, link: '/settings/data', Icon: k.a },
        ],
        x = { page: 'settings', section: 'accessibility_display_and_languages' }
      function H(e) {
        var t = e.location
        return i.a.createElement(
          u.b,
          { namespace: x },
          i.a.createElement(
            s.a,
            null,
            i.a.createElement(
              f.a,
              { location: t, screenType: 'primaryDetail', title: C },
              i.a.createElement(
                b.a,
                { testID: p },
                i.a.createElement(d.a, { description: T }),
                U.map(function (e) {
                  return i.a.createElement(m.b, r()({}, e, { key: e.label }))
                }),
              ),
            ),
          ),
        )
      }
    },
    E8tr: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return v
        })
      var n = a('ERkP'),
        r = a.n(n),
        c = a('3XMw'),
        i = a.n(c),
        o = a('yoO3'),
        l = a('7JQg'),
        s = a('7FtF'),
        u = a('MWbm'),
        d = a('RKmr'),
        f = a('csss'),
        m = i.a.ae72d4c4,
        p = i.a.g2841de4,
        b = i.a.jc02ae67,
        h = i.a.dd823129,
        E = i.a.b523ecc5,
        g = i.a.hc36dbba,
        y = { page: 'settings', section: 'apps_and_sessions' }
      function v(e) {
        var t = e.location
        return r.a.createElement(
          l.b,
          { namespace: y },
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: m },
              r.a.createElement(
                u.a,
                null,
                r.a.createElement(d.a, { description: p }),
                r.a.createElement(f.a, { label: b, link: '/settings/connected_apps' }),
                r.a.createElement(f.a, { label: h, link: '/settings/sessions' }),
                r.a.createElement(f.a, { label: E, link: '/settings/your_twitter_data/login_history' }),
                r.a.createElement(f.a, { label: g, link: '/settings/your_twitter_data/devices' }),
              ),
            ),
          ),
        )
      }
    },
    EAH3: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return S
        })
      a('2G9S')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('jHSc'),
        i = a('3XMw'),
        o = a.n(i),
        l = a('Irs7'),
        s = a('MWbm'),
        u = a('cHvH'),
        d = a('Wd7d'),
        f = a('t62R'),
        m = a('rHpw'),
        p = o.a.g0cba83f,
        b = o.a.b92fa3be,
        h = o.a.d45866f3,
        E = o.a.e83ecbf6,
        g = o.a.ha597018,
        y = o.a.bcb2afc3,
        v = o.a.bff84f29
      function S(e) {
        var t = e.history,
          a = Object(l.b)()
        return (
          r.a.useEffect(
            function () {
              a.scribe({ page: 'settings', section: 'safety_mode', component: 'education_sheet', action: 'impression' })
            },
            [a],
          ),
          r.a.createElement(u.a, null, function (e) {
            var a = e.screenWidth
            return r.a.createElement(
              c.b,
              { backButtonType: 'back', history: t },
              r.a.createElement(
                s.a,
                { style: d.a.isNarrowScreenWidth(a) ? _.narrowScreen : _.wideScreen },
                r.a.createElement(
                  s.a,
                  { style: [_.item, _.title] },
                  r.a.createElement(f.b, { size: 'title4', weight: 'heavy' }, p),
                ),
                r.a.createElement(
                  s.a,
                  { style: _.item },
                  r.a.createElement(f.b, { style: _.heading, weight: 'bold' }, b),
                  r.a.createElement(f.b, { size: 'body' }, h),
                ),
                r.a.createElement(
                  s.a,
                  { style: _.item },
                  r.a.createElement(f.b, { style: _.heading, weight: 'bold' }, E),
                  r.a.createElement(f.b, { size: 'body' }, g),
                ),
                r.a.createElement(
                  s.a,
                  { style: _.item },
                  r.a.createElement(f.b, { style: _.heading, weight: 'bold' }, y),
                  r.a.createElement(f.b, { size: 'body' }, v),
                ),
              ),
            )
          })
        )
      }
      var _ = m.a.create(function (e) {
        return {
          wideScreen: { marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space80 },
          narrowScreen: {
            paddingBottom: 'calc('.concat(e.spaces.space32, ' + ').concat(m.a.iPhoneOffsetBottom, ')'),
            marginHorizontal: e.spaces.space32,
          },
          item: { paddingBottom: e.spaces.space24 },
          title: { paddingTop: e.spaces.space24 },
          heading: { paddingBottom: e.spaces.space8 },
        }
      })
    },
    KPFR: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'T1LabsScreen', function () {
          return T
        })
      a('z84I')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('v6aA'),
        i = a('gUb7'),
        o = a('rxPX'),
        l = Object(o.a)()
          .propsFromState(function () {
            return { userClaimsFetchStatus: i.c }
          })
          .withAnalytics({ page: 'settings', section: 't1_labs' }),
        s = a('v//M'),
        u = a('3XMw'),
        d = a.n(u),
        f = a('yoO3'),
        m = a('7FtF'),
        p = a('zCf4'),
        b = a('RKmr'),
        h = a('0yYu'),
        E = a('3Ohe'),
        g = d.a.f6e88161,
        y = d.a.i9028824,
        v = d.a.e4972a1a,
        S = d.a.e4b3f520,
        _ = d.a.db8346ee,
        w = d.a.a99d8e60,
        k = d.a.fb00a8ee,
        C = d.a.h7693c0d
      function T(e) {
        var t = e.userClaimsFetchStatus,
          a = Object(p.g)(),
          n = r.a.useContext(c.a),
          i = n.featureSwitches,
          o = n.userClaims,
          l = o.isTrueAndEnabled('subscriptions_feature_labs_1001'),
          u = o.isTrueAndEnabled('subscriptions_long_video_upload'),
          d = i.isTrue('dm_conversation_labels_pinned_enabled'),
          T = i.isTrue('subscriptions_long_video_rweb_new_copy_enabled'),
          O = [
            { label: S, subtext: _, shouldRender: l && !d },
            { label: w, subtext: T ? C : k, shouldRender: u },
          ]
        return r.a.createElement(s.a, {
          accessibilityLabel: y,
          fetchStatus: t,
          render: function () {
            return r.a.createElement(
              f.a,
              null,
              r.a.createElement(
                m.a,
                { location: a, title: g },
                r.a.createElement(b.a, { description: v }),
                r.a.createElement(h.a, null),
                O.map(function (e) {
                  var t = e.label,
                    a = e.shouldRender,
                    n = e.subtext
                  return a ? r.a.createElement(E.a, { key: t, label: t, subtext: n }) : null
                }),
              ),
            )
          },
        })
      }
      t.default = l(T)
    },
    LtDK: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'SpacesSettingsScreen', function () {
          return y
        })
      var n = a('yiKp'),
        r = a.n(n),
        c = (a('1t7P'), a('jQ/y'), a('ERkP')),
        i = a.n(c),
        o = a('tM6R'),
        l = a('P1r1'),
        s = a('rxPX'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { sharingAudiospacesListeningDataWithFollowersEnabled: l.A }
          })
          .propsFromActions(function () {
            return { updateSharingAudiospacesListeningDataWithFollowersSetting: l.O }
          })
          .withAnalytics({ page: 'settings' }),
        d = a('3XMw'),
        f = a.n(d),
        m = a('yoO3'),
        p = a('7FtF'),
        b = a('k89r'),
        h = a('RKmr'),
        E = a('e0ey'),
        g = { page: 'settings' }
      function y(e) {
        var t = e.location,
          a = e.sharingAudiospacesListeningDataWithFollowersEnabled,
          n = e.updateSharingAudiospacesListeningDataWithFollowersSetting,
          c = Object(b.a)()
        return i.a.createElement(
          m.a,
          null,
          i.a.createElement(
            p.a,
            { location: t, screenType: 'secondaryDetail', title: v.screen.title },
            i.a.createElement(h.a, { description: v.screen.description }),
            i.a.createElement(E.a, {
              checked: a,
              helpText: v.audiospaceListeningTransparency.help,
              label: v.audiospaceListeningTransparency.label,
              learnMoreLink: o.a.help,
              name: 'ext_sharing_audiospaces_listening_data_with_followers',
              onChange: function (e, t) {
                n(t),
                  c.scribe(
                    r()(
                      r()({}, g),
                      {},
                      {
                        section: 'privacy',
                        element: 'audiospaces_sharing_listening_data_with_followers_setting',
                        action: t ? 'enable' : 'disable',
                      },
                    ),
                  )
              },
              type: 'switch',
            }),
          ),
        )
      }
      var v = {
          screen: { title: f.a.ded416bf, description: f.a.fe37f854 },
          audiospaceListeningTransparency: { label: f.a.j3d2cfc4, help: f.a.d9588ae6 },
        },
        S = u(y)
      t.default = S
    },
    M2mT: function (e, t, a) {
      'use strict'
      var n = a('m3Bd'),
        r = a.n(n),
        c = a('VrFO'),
        i = a.n(c),
        o = a('Y9Ll'),
        l = a.n(o),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        f = a.n(d),
        m = a('2VqO'),
        p = a.n(m),
        b = a('KEM+'),
        h = a.n(b),
        E = (a('2G9S'), a('i4UL'), a('+/5o')),
        g = a('ERkP'),
        y = a.n(g),
        v = a('HPNB'),
        S = a('VAZu'),
        _ = a('wiP2'),
        w = a('Es6L'),
        k = a('yiKp'),
        C = a.n(k),
        T = a('rHpw'),
        O = T.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: C()(C()({}, T.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        F = a('MWbm'),
        R = a('yw4N'),
        L = a('TnY3'),
        A = a('cHvH'),
        I = a('3xLC'),
        P = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        M = (function (e) {
          f()(a, e)
          var t = p()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? y.a.createElement(
                      F.a,
                      { style: O.fill },
                      y.a.createElement(
                        R.a,
                        { style: O.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return y.a.createElement(A.a, null, function (t) {
                    var a = t.windowWidth
                    return v.a.isTwoColumnLayout(a) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, P))
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    Object(w.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : y.a.createElement(_.a.Configure, a),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var t = e.isTwoColumnLayout,
                    a = this.props,
                    n = a.SideNavButton,
                    r = a.TabBar,
                    c = a.TeamsSwitcher,
                    i = a.backLocation,
                    o = a.documentTitle,
                    l = a.headerless,
                    s = a.history,
                    u = a.leftControl,
                    d = a.middleControl,
                    f = a.onBackClick,
                    m = a.rightControl,
                    p = a.screenType,
                    b = a.searchBoxOptions,
                    h = a.secondaryBar,
                    g = a.showSubtitleOnRoot,
                    v = a.showSubtitleOnWideDetail,
                    w = a.subtitle,
                    k = a.title,
                    C = a.titleIconCell,
                    T = a.titleIconCellSize,
                    R = a.withDetailOpen,
                    L = a.withSearchBox,
                    A = a.withTweetButton,
                    I = 'root' === p,
                    P = 'secondaryRoot' === p,
                    M = 'primaryDetail' === p,
                    U = (M && v) || (I && g),
                    x = I || (M && t),
                    H = I ? E.c : M ? E.a : void 0,
                    N = y.a.createElement(
                      F.a,
                      { style: O.appBarContainer },
                      y.a.createElement(S.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: x,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: f,
                        rightControl: m,
                        secondaryBar: h,
                        subtitle: U ? w : void 0,
                        title: k,
                        titleDomId: H,
                        titleIconCell: C,
                        titleIconCellSize: T,
                      }),
                    ),
                    j =
                      I || (P && R)
                        ? null
                        : y.a.createElement(_.a.Configure, {
                            SideNavButton: n,
                            TabBar: r,
                            TeamsSwitcher: c,
                            backLocation: i,
                            documentTitle: o,
                            headerless: l,
                            middleControl: d,
                            onBackClick: f,
                            rightControl: m,
                            searchBoxOptions: b,
                            subtitle: w,
                            title: k,
                            withSearchBox: L,
                            withTweetButton: A,
                          })
                  return y.a.createElement(y.a.Fragment, null, j, N)
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      h()(M, 'contextType', I.a),
        h()(M, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(L.a)(M)
    },
    OsOl: function (e, t, a) {
      'use strict'
      a('z84I'), a('Blm6'), a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('wsOx'),
        i = a('rxPX'),
        o = a('0KEI'),
        l = Object(i.a)()
          .propsFromState(function () {
            return { fetchSettingsFetchStatus: c.b, updateSettingsFetchStatus: c.d, safetyModeSettings: c.c }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchSettingsFetchStatus,
              a = e.safetyModeSettings,
              n = e.updateSettingsFetchStatus
            return {
              enabled: a.enabled,
              expiration: a.expiration,
              fetchSettingsFetchStatus: t,
              updateSettingsFetchStatus: n,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(o.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSafetyModeSettings: c.a,
              updateSafetyModeSettings: c.e,
            }
          })
          .withAnalytics(),
        s = a('v//M'),
        u = a('3XMw'),
        d = a.n(u),
        f = a('tuLS'),
        m = a('fs1G'),
        p = a('MWbm'),
        b = a('mjJ+'),
        h = a('t62R'),
        E = a('CK8+'),
        g = a('rHpw'),
        y = d.a.c6cb90eb,
        v = d.a.a37e9b09,
        S = d.a.ccafffde,
        _ = d.a.j2e184d8,
        w = d.a.fc638aa2,
        k = d.a.d94b2246,
        C = d.a.bfea13ab,
        T = d.a.fc209bb7,
        O = d.a.ee95bb8d,
        F = [
          { label: S, value: 'OneDay' },
          { label: _, value: 'ThreeDays' },
          { label: w, value: 'SevenDays' },
        ]
      var R = l(function (e) {
          var t = e.createLocalApiErrorHandler,
            a = e.enabled,
            n = e.expiration,
            c = e.fetchSafetyModeSettings,
            i = e.fetchSettingsFetchStatus,
            o = e.updateSafetyModeSettings,
            l = e.withBorder,
            u = r.a.useCallback(
              function () {
                c().catch(function (e) {
                  t({ showToast: !0 })(e)
                })
              },
              [c, t],
            )
          r.a.useEffect(
            function () {
              u()
            },
            [u],
          )
          var d = e.analytics
          r.a.useEffect(
            function () {
              d.scribe({ action: 'impression' })
            },
            [d],
          )
          var g = function () {
              d.scribe({ action: 'click', element: 'disabled' }),
                o('none')
                  .then(function () {
                    return u()
                  })
                  .catch(function (e) {
                    t({ showToast: !0, defaultToast: { text: C } })(e)
                  })
            },
            S = function () {
              return function (e) {
                var a = F.map(function (e) {
                  return {
                    text: e.label,
                    onClick: function () {
                      return (function (e) {
                        d.scribe({ action: 'click', element: 'enabled' }),
                          ('OneDay' !== e.value && 'ThreeDays' !== e.value && 'SevenDays' !== e.value) ||
                            (d.scribe({ action: 'click', component: 'duration', element: e.value }),
                            o(e.value)
                              .then(function () {
                                return u()
                              })
                              .catch(function (e) {
                                t({ showToast: !0, defaultToast: { text: C } })(e)
                              }))
                      })(e)
                    },
                  }
                })
                return r.a.createElement(b.a, { items: a, onCloseRequested: e })
              }
            }
          return r.a.createElement(s.a, {
            fetchStatus: i,
            onRequestRetry: u,
            render: function () {
              var e = new Date(parseInt(n, 10))
              return r.a.createElement(
                p.a,
                { style: l && L.border },
                r.a.createElement(
                  p.a,
                  { style: L.safetyModeToggleContainer },
                  r.a.createElement(h.b, { color: 'normal' }, y),
                  a
                    ? r.a.createElement(E.a, { onValueChange: g, value: a })
                    : r.a.createElement(
                        f.a,
                        { accessibilityLabel: y, renderMenu: S() },
                        r.a.createElement(E.a, { onValueChange: m.a, value: a }),
                      ),
                ),
                r.a.createElement(
                  p.a,
                  { style: L.safetyModeDescriptionContainer },
                  a && n
                    ? r.a.createElement(
                        h.b,
                        { color: 'gray700', size: 'subtext2', style: L.safetyModeExpiration },
                        (function (e, t) {
                          return Math.floor(Math.abs((t || Date.now()) - e) / 36e5) <= 1
                        })(e)
                          ? k
                          : O({ date: T(e) }),
                      )
                    : null,
                  r.a.createElement(h.b, { color: 'gray700', size: 'subtext2', style: L.settingDescription }, v),
                ),
              )
            },
          })
        }),
        L =
          ((t.a = R),
          g.a.create(function (e) {
            return {
              border: {
                borderStyle: 'solid',
                borderWidth: e.borderWidths.small,
                borderColor: e.colors.borderColor,
                borderRadius: e.borderRadii.xLarge,
                outlineStyle: 'none',
              },
              radioGroupPaddingOverride: { paddingTop: 0 },
              safetyModeExpiration: { paddingVertical: 0 },
              safetyModeToggleContainer: {
                alignItems: 'center',
                flexDirection: 'row',
                flexGrow: 1,
                justifyContent: 'space-between',
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                paddingTop: e.spaces.space12,
                paddingBottom: e.spaces.space4,
              },
              safetyModeDescriptionContainer: {
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                paddingBottom: e.spaces.space8,
              },
              settingDescription: { paddingTop: e.spaces.space4 },
            }
          }))
    },
    Ryu4: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'AudienceAndTagging', function () {
          return x
        })
      var n = a('ddV6'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = a('ERkP'),
        l = a.n(o),
        s = a('v6aA'),
        u = a('P1r1'),
        d = a('li/m'),
        f = a('G6rE'),
        m = a('rxPX'),
        p = a('0KEI'),
        b = Object(m.a)()
          .propsFromState(function () {
            return { settings: u.g, hasCommunityMemberships: d.d }
          })
          .adjustStateProps(function (e) {
            var t = e.hasCommunityMemberships,
              a = e.settings
            return {
              protectedEnabled: a.protected,
              allowMediaTagging: a.allow_media_tagging,
              hasCommunityMemberships: t,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'AUDIENCE_AND_TAGGING_SCREEN',
              ),
              patchUser: f.e.patchUser,
              updateSettings: u.N,
            }
          }),
        h = a('3XMw'),
        E = a.n(h),
        g = a('yoO3'),
        y = a('7JQg'),
        v = a('7FtF'),
        S = a('k89r'),
        _ = a('RKmr'),
        w = a('e0ey'),
        k = a('csss'),
        C = a('eb3s'),
        T = E.a.e908903a,
        O = E.a.h7a0dfbe,
        F = E.a.f5e59e90,
        R = E.a.e860ff84,
        L = { headline: E.a.j8bf07ab, text: E.a.ca8034b3, confirmButtonLabel: E.a.c5d4192a },
        A = { headline: E.a.gea6cc19, text: E.a.j7fc0afc, confirmButtonLabel: E.a.f527b322 },
        I = E.a.f56d108e,
        P = { all: E.a.d165c992, following: E.a.ea339390, none: E.a.e3a761ee },
        M = { page: 'settings', section: 'audience_and_tagging' }
      function U(e, t, a, n) {
        var c = l.a.useState(!1),
          o = r()(c, 2),
          u = o[0],
          d = o[1],
          f = (function (e, t, a, n) {
            var r = l.a.useContext(s.a).loggedInUserId,
              c = Object(S.a)()
            return {
              setEnabled: function (t) {
                n({ protected: t })
                  .then(function () {
                    c.scribe(i()(i()({}, M), {}, { element: 'protected', action: t ? 'enable' : 'disable' })),
                      r && a(r, { protected: t })
                  })
                  .catch(e())
              },
            }
          })(e, 0, a, n)
        return {
          showConfirmation: u,
          _handleChanged: function (e, t) {
            t ? d(!0) : f.setEnabled(!1)
          },
          _handleConfirmationCancel: function () {
            d(!1)
          },
          _handleConfirmationConfirm: function () {
            d(!1), f.setEnabled(!0)
          },
        }
      }
      function x(e) {
        var t = e.allowMediaTagging,
          a = e.createLocalApiErrorHandler,
          n = e.hasCommunityMemberships,
          r = e.location,
          c = e.patchUser,
          i = e.protectedEnabled,
          o = U(a, 0, c, e.updateSettings),
          s = P[t],
          u = n ? A : L
        return l.a.createElement(
          y.b,
          { namespace: M },
          l.a.createElement(
            g.a,
            null,
            l.a.createElement(
              v.a,
              { location: r, screenType: 'secondaryDetail', title: T },
              l.a.createElement(_.a, { description: O }),
              l.a.createElement(w.a, {
                checked: i,
                helpText: R,
                label: F,
                learnMoreLink: 'https://help.twitter.com/safety-and-security/public-and-protected-tweets',
                name: 'protected',
                onChange: o._handleChanged,
              }),
              l.a.createElement(k.a, { description: s, label: I, link: '/settings/tagging' }),
            ),
            o.showConfirmation
              ? l.a.createElement(C.a, {
                  confirmButtonLabel: u.confirmButtonLabel,
                  confirmButtonType: 'primary',
                  headline: u.headline,
                  onCancel: o._handleConfirmationCancel,
                  onConfirm: o._handleConfirmationConfirm,
                  text: u.text,
                })
              : null,
          ),
        )
      }
      var H = b(x)
      t.default = H
    },
    'S+H3': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ERkP'),
        i = a.n(c),
        o = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    TnO6: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return U
      })
      var n = a('KEM+'),
        r = a.n(n),
        c = (a('yH/f'), a('ERkP')),
        i = a.n(c),
        o = a('EbOo'),
        l = a('EPsT'),
        s = (a('KqXw'), a('WNMA'), a('1YZw')),
        u = a('118N'),
        d = a('G6rE'),
        f = a('rxPX'),
        m = a('0KEI'),
        p = function (e, t) {
          var a
          return null === (a = t.match) || void 0 === a ? void 0 : a.params.userId
        },
        b = function (e, t) {
          return d.e.select(e, p(0, t))
        },
        h = Object(f.a)()
          .propsFromState(function () {
            return { user: b, userId: p }
          })
          .adjustStateProps(function (e) {
            var t = e.user,
              a = e.userId
            return {
              violatorScreenName: (null == t ? void 0 : t.screen_name) || '',
              violatorUserId: (null == t ? void 0 : t.id_str) || '',
              userId: a || '',
            }
          })
          .propsFromActions(function () {
            return {
              addToast: s.b,
              block: d.e.block,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'RITO_TIMELINE_ACTION_BUTTONS_CONTEXT',
              ),
              fetchOneUserIfNeeded: d.e.fetchOneIfNeeded,
              dismissRitoSuggestedAction: u.b,
              unblock: d.e.unblock,
            }
          })
          .withAnalytics({ component: 'safety_mode_timeline_action_buttons' }),
        E = a('3XMw'),
        g = a.n(E),
        y = a('u0B7'),
        v = a('0yYu'),
        S = a('jtO7'),
        _ = a('24HD'),
        w = g.a.cd702bc3,
        k = g.a.ebd2abb2,
        C = g.a.f2f4d0e7,
        T = g.a.jcba15d2,
        O = g.a.e1f2f8bd,
        F = g.a.e68b09b4,
        R = g.a.hc676c4a,
        L = g.a.badf3f34,
        A = g.a.ca95bd23,
        I = g.a.bbe47125,
        P = '/settings/safety_mode/autoblocked',
        M = '/i/safety_mode/flagged_accounts',
        U = Object.freeze({ ActionedTweets: 'actioned_tweets', PreviewFlaggedTweets: 'preview_flagged_tweets' }),
        x = Object.freeze({
          report: { component: 'user_action', action: 'report' },
          block: { action: 'block' },
          unblock: { action: 'unblock' },
        })
      function H(e) {
        var t,
          a = e.addToast,
          n = e.analytics,
          c = e.createLocalApiErrorHandler,
          o = e.dismissRitoSuggestedAction,
          s = e.history,
          u = e.timelineType,
          d = e.unblock,
          f = e.violatorScreenName,
          m = e.violatorUserId,
          p = Object.freeze(
            ((t = {}),
            r()(t, U.ActionedTweets, {
              backLocation: P,
              confirmationSheetHeadline: Object(_.e)({ screenName: f }),
              label: T,
              toastLabel: A({ screenName: f }),
            }),
            r()(t, U.PreviewFlaggedTweets, {
              backLocation: M,
              confirmationSheetHeadline: O({ screenName: f }),
              label: C,
              toastLabel: L({ screenName: f }),
            }),
            t),
          )
        return i.a.createElement(l.a, {
          color: 'primary',
          confirmationSheetConfirmButtonLabel: F,
          confirmationSheetHeadline: p[u].confirmationSheetHeadline,
          confirmationSheetText: I,
          label: p[u].label,
          onConfirmationSheetConfirm: function () {
            u === U.ActionedTweets
              ? d(m)
                  .then(function () {
                    n.scribe(x.unblock), a({ text: p[u].toastLabel }), s.goBack({ backLocation: p[u].backLocation })
                  })
                  .catch(c(y.a))
              : o(m)
                  .then(function () {
                    n.scribe(x.unblock), a({ text: p[u].toastLabel }), s.goBack({ backLocation: p[u].backLocation })
                  })
                  .catch(c(y.a))
          },
          withBottomBorder: !0,
        })
      }
      function N(e) {
        var t = e.analytics,
          a = e.violatorUserId,
          n = {
            pathname: '/i/report/user/'.concat(a),
            state: { clientReferer: window.location.pathname, scribeNamespace: t.contextualScribeNamespace },
          }
        return i.a.createElement(S.a, {
          color: 'primary',
          label: w,
          link: n,
          onPress: function () {
            t.scribe(x.report)
          },
        })
      }
      function j(e) {
        var t = e.addToast,
          a = e.analytics,
          n = e.block,
          r = e.createLocalApiErrorHandler,
          c = e.history,
          s = e.timelineType,
          u = e.unblock,
          d = e.violatorScreenName,
          f = e.violatorUserId,
          m = s === U.ActionedTweets ? P : M,
          p = function () {
            u(f).catch(r(y.a)), a.scribe(x.unblock)
          }
        return i.a.createElement(l.a, {
          color: 'red500',
          confirmationSheetConfirmButtonLabel: _.a,
          confirmationSheetConfirmButtonType: 'destructiveFilled',
          confirmationSheetHeadline: Object(_.c)({ screenName: d }),
          confirmationSheetText: Object(_.b)({ screenName: d }),
          label: k,
          onConfirmationSheetConfirm: function () {
            n(f)
              .then(function () {
                a.scribe(x.block),
                  t({ action: { label: _.l, onAction: p }, text: R({ screenName: d }) }),
                  c.goBack({ backLocation: m })
              })
              .catch(r(o.a))
          },
        })
      }
      t.b = h(function (e) {
        var t = e.createLocalApiErrorHandler,
          a = e.fetchOneUserIfNeeded,
          n = e.userId,
          r = e.violatorScreenName,
          c = e.violatorUserId
        return (
          i.a.useEffect(
            function () {
              n && a(n).catch(t())
            },
            [n, a, t],
          ),
          '' === r || '' === c
            ? null
            : i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(v.a, null),
                i.a.createElement(N, e),
                i.a.createElement(H, e),
                i.a.createElement(j, e),
              )
        )
      })
    },
    UQuz: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'LocationInformation', function () {
          return A
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = a('ERkP'),
        l = a.n(o),
        s = a('v6aA'),
        u = a('NeAX'),
        d = a('rxPX'),
        f = a('0KEI'),
        m = Object(d.a)()
          .propsFromState(function () {
            return { settings: u.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowLocationHistoryUseEnabled: e.settings.allowLocationHistoryUse }
          })
          .propsFromActions(function () {
            return {
              updateSettings: u.updateSettings,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'LOCATION_INFORMATION_SCREEN',
              ),
            }
          }),
        p = a('3XMw'),
        b = a.n(p),
        h = a('yoO3'),
        E = a('7JQg'),
        g = a('7FtF'),
        y = a('k89r'),
        v = a('RKmr'),
        S = a('e0ey'),
        _ = a('csss'),
        w = b.a.jabb9c9a,
        k = b.a.a686c489,
        C = b.a.dc20d917,
        T = b.a.cb2ed998,
        O = b.a.d9138165,
        F = b.a.eb029cab,
        R = b.a.j018f2a1,
        L = { page: 'settings', section: 'location_information' }
      function A(e) {
        var t = e.allowLocationHistoryUseEnabled,
          a = e.createLocalApiErrorHandler,
          n = e.location,
          c = e.updateSettings,
          o = Object(y.a)(),
          u = l.a.useContext(s.a)
        return l.a.createElement(
          E.b,
          { namespace: L },
          l.a.createElement(
            h.a,
            null,
            l.a.createElement(
              g.a,
              { location: n, screenType: 'secondaryDetail', title: w },
              l.a.createElement(v.a, { description: k }),
              u &&
                l.a.createElement(S.a, {
                  checked: t,
                  helpText: T,
                  label: C,
                  name: 'allowLocationHistoryUse',
                  onChange: function (e, t) {
                    o.scribe(i()(i()({}, L), {}, { element: e, action: t ? 'enable' : 'disable' })),
                      c(r()({}, e, t)).catch(a())
                  },
                }),
              l.a.createElement(_.a, { label: O, link: '/settings/your_twitter_data/locations' }),
              l.a.createElement(_.a, { label: F, link: '/settings/location' }),
              l.a.createElement(_.a, { label: R, link: '/settings/explore' }),
            ),
          ),
        )
      }
      var I = m(A)
      t.default = I
    },
    XOb8: function (e, t, a) {
      'use strict'
      a.d(t, 'd', function () {
        return n
      }),
        a.d(t, 'e', function () {
          return r
        }),
        a.d(t, 'b', function () {
          return i
        }),
        a.d(t, 'a', function () {
          return o
        }),
        a.d(t, 'c', function () {
          return l
        })
      var n = 'V2ViU3Vic2NyaXB0aW9uUHJvZHVjdERldGFpbHM6cHJvZF9LT21pYTlJYXRWVG1JNQ==',
        r = 'rogue-one',
        c = 'https://'.concat(window.location.host),
        i = ''.concat(c, '/settings/subscription'),
        o = ''.concat(c, '/i/twitter_blue_sign_up'),
        l = ''.concat(o, '/welcome')
      ''.concat(o, '/unsuccessful')
    },
    ZNbl: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'SafetyMode', function () {
          return S
        })
      var n = a('ERkP'),
        r = a.n(n),
        c = a('yoO3'),
        i = a('OsOl'),
        o = a('7JQg'),
        l = a('7FtF'),
        s = a('Irs7'),
        u = a('t62R'),
        d = a('RKmr'),
        f = a('0yYu'),
        m = a('6vad'),
        p = a('csss'),
        b = a('3XMw'),
        h = a.n(b),
        E = { page: 'settings', section: 'safety_mode' },
        g = h.a.c6cb90eb,
        y = h.a.fabe1397,
        v = h.a.c0786021
      function S() {
        var e,
          t = Object(s.b)()
        return r.a.createElement(
          o.b,
          { namespace: E },
          r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              l.a,
              { screenType: 'secondaryDetail', title: g, withMarginBottom: !1 },
              r.a.createElement(d.a, {
                description:
                  ((e = function () {
                    t.scribe({ page: 'settings', component: 'education_sheet', action: 'click' })
                  }),
                  r.a.createElement(
                    h.a.I18NFormatMessage,
                    { $i18n: 'b8437d64' },
                    r.a.createElement(u.b, { link: '/settings/safety_mode/about', onPress: e }, h.a.db89884f),
                  )),
              }),
              r.a.createElement(f.a, null),
              r.a.createElement(i.a, null),
              r.a.createElement(f.a, null),
              r.a.createElement(m.b, { text: y }),
              r.a.createElement(p.a, { label: v, link: '/settings/safety_mode/autoblocked' }),
            ),
          ),
        )
      }
      t.default = S
    },
    Zg3A: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ERkP'),
        i = a.n(c),
        o = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    'Zi/f': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'YourTweets', function () {
          return F
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = a('ERkP'),
        l = a.n(o),
        s = a('P1r1'),
        u = a('rxPX'),
        d = Object(u.a)()
          .propsFromState(function () {
            return { settings: s.g }
          })
          .adjustStateProps(function (e) {
            var t = e.settings
            return { nsfwUserEnabled: t.nsfw_user, nsfwAdminEnabled: t.nsfw_admin }
          })
          .propsFromActions(function () {
            return { updateSettings: s.N }
          }),
        f = a('3XMw'),
        m = a.n(f),
        p = a('yoO3'),
        b = a('7JQg'),
        h = a('7FtF'),
        E = a('k89r'),
        g = a('0KEI'),
        y = a('RKmr'),
        v = a('e0ey'),
        S = a('csss'),
        _ = m.a.b38d81ae,
        w = m.a.f8d4746b,
        k = m.a.c0a55f4a,
        C = m.a.ea28ca63,
        T = m.a.eb029cab,
        O = { page: 'settings', section: 'your_tweets' }
      function F(e) {
        var t = e.location,
          a = e.nsfwAdminEnabled,
          n = e.nsfwUserEnabled,
          c = e.updateSettings,
          o = Object(E.a)(),
          s = Object(g.useCreateLocalApiErrorHandler)('YOUR_TWEETS_SCREEN')
        return l.a.createElement(
          b.b,
          { namespace: O },
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(
              h.a,
              { location: t, screenType: 'secondaryDetail', title: _ },
              l.a.createElement(y.a, { description: w }),
              l.a.createElement(v.a, {
                checked: n,
                disabled: a,
                helpText: C,
                label: k,
                learnMoreLink: 'https://help.twitter.com/rules-and-policies/media-policy',
                name: 'nsfw_user',
                onChange: function (e, t) {
                  o.scribe(i()(i()({}, O), {}, { element: 'nsfw_user', action: t ? 'enable' : 'disable' })),
                    c(r()({}, e, t)).catch(s({ showToast: !0 }))
                },
              }),
              l.a.createElement(S.a, { label: T, link: '/settings/location' }),
            ),
          ),
        )
      }
      var R = d(F)
      t.default = R
    },
    aNjN: function (e, t, a) {
      'use strict'
      a.r(t)
      a('KqXw'), a('WNMA')
      var n,
        r = a('ERkP'),
        c = a.n(r),
        i = a('FIs5'),
        o = a('KEM+'),
        l = a.n(o),
        s = a('yiKp'),
        u = a.n(s),
        d = a('QIgh'),
        f = a('8UdT'),
        m = a('Yy//'),
        p = a('88ay'),
        b = a('Ka9G'),
        h = u()(
          u()({}, d.b),
          {},
          ((n = {}),
          l()(n, f.b.Tweet, Object(m.a)({ displayBlocked: !0 })),
          l()(n, f.b.User, Object(b.a)({ decoration: p.d })),
          n),
        ),
        E = a('jHSc'),
        g = a('3XMw'),
        y = a.n(g),
        v = a('fTQJ'),
        S = a('WpDa'),
        _ = a('ZNT5'),
        w = a('TnO6'),
        k = y.a.hae5825e,
        C = y.a.e9f1fbcb,
        T = y.a.de9b6641,
        O = function () {
          return c.a.createElement(i.a, { header: C, message: T })
        }
      t.default = function (e) {
        var t = e.history,
          a = e.location,
          n = e.match,
          r = n.params.userId,
          i = c.a.useMemo(
            function () {
              return (
                (e = r),
                Object(_.a)({
                  timelineId: 'ritoFlaggedTweets-'.concat(e),
                  getEndpoint: function (e) {
                    return e.RitoFlaggedTweets.fetchRitoFlaggedTweets
                  },
                  getEndpointParams: function (t) {
                    var a = t.count,
                      n = t.cursor
                    return { count: a, cursor: 'string' == typeof n ? n : void 0, userId: e }
                  },
                  context: 'FETCH_RITO_FLAGGED_TWEETS_TIMELINE',
                  perfKey: 'ritoFlaggedTweets',
                  formatResponse: S.a,
                })
              )
              var e
            },
            [r],
          ),
          o = c.a.createElement(w.b, { history: t, location: a, match: n, timelineType: w.a.PreviewFlaggedTweets })
        return c.a.createElement(
          E.b,
          {
            backButtonType: 'back',
            behavioralEventViewType: 'safety_mode_flagged_tweets',
            history: t,
            onBackClick: function () {
              t.goBack()
            },
            title: k,
          },
          c.a.createElement(v.a, { entryConfiguration: h, footer: o, module: i, renderEmptyState: O, title: k }),
        )
      }
    },
    aY7H: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'DirectMessages', function () {
          return P
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = a('ERkP'),
        l = a.n(o),
        s = a('v6aA'),
        u = a('P1r1'),
        d = a('rxPX'),
        f = a('0KEI'),
        m = Object(d.a)()
          .propsFromState(function () {
            return { nsfwMediaFilter: u.r, settings: u.g }
          })
          .adjustStateProps(function (e) {
            var t = e.nsfwMediaFilter,
              a = e.settings
            return {
              allowDmsFrom: a.allow_dms_from,
              dmQualityFilter: a.dm_quality_filter,
              dmReceiptSetting: a.dm_receipt_setting,
              nsfwMediaFilter: t,
            }
          })
          .propsFromActions(function () {
            return {
              updateSettings: u.N,
              updateDmNsfwMediaFilter: u.M,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'settings' }),
        p = a('3XMw'),
        b = a.n(p),
        h = a('yoO3'),
        E = a('7JQg'),
        g = a('7FtF'),
        y = a('k89r'),
        v = a('RKmr'),
        S = a('e0ey'),
        _ = b.a.d4986f85,
        w = b.a.cc950d94,
        k = b.a.b4006390,
        C = b.a.f7da127c,
        T = b.a.b3d8566e,
        O = b.a.cfda8c44,
        F = b.a.e6c411d7,
        R = b.a.g558101a,
        L = b.a.d9172541,
        A = b.a.bd557505,
        I = { page: 'settings', section: 'direct_messages' }
      function P(e) {
        var t = e.allowDmsFrom,
          a = e.createLocalApiErrorHandler,
          n = e.dmQualityFilter,
          c = e.dmReceiptSetting,
          o = e.location,
          u = e.nsfwMediaFilter,
          d = e.updateDmNsfwMediaFilter,
          f = e.updateSettings,
          m = Object(y.a)()
        function p(t, n) {
          var c = '/messages/settings' === e.location.pathname ? 'dm_tab' : 'global_settings_menu'
          m.scribe(i()(i()({}, I), {}, { element: t, data: { entry_point: c }, action: n })),
            f(r()({}, t, n)).catch(a({ showToast: !0 }))
        }
        var b = l.a.useContext(s.a).featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
        return l.a.createElement(
          E.b,
          { namespace: I },
          l.a.createElement(
            h.a,
            null,
            l.a.createElement(
              g.a,
              { location: o, screenType: 'secondaryDetail', title: _ },
              l.a.createElement(v.a, { description: w }),
              l.a.createElement(S.a, {
                checked: 'all' === t,
                helpText: C,
                label: k,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#receive',
                name: 'allow_dms_from',
                onChange: function (e, t) {
                  p(e, t ? 'all' : 'following')
                },
              }),
              l.a.createElement(S.a, {
                checked: 'enabled' === n,
                helpText: O,
                label: T,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages',
                name: 'dm_quality_filter',
                onChange: function (e, t) {
                  p(e, t ? 'enabled' : 'disabled')
                },
              }),
              b
                ? l.a.createElement(S.a, {
                    checked: u,
                    helpText: R,
                    label: F,
                    learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#graphic-media',
                    name: 'ext_dm_nsfw_media_filter',
                    onChange: function (e, t) {
                      m.scribe(
                        i()(i()({}, I), {}, { element: 'dm_nsfw_filter_setting', action: t ? 'enable' : 'disable' }),
                      ),
                        d(t)
                    },
                  })
                : null,
              l.a.createElement(S.a, {
                checked: 'all_enabled' === c,
                helpText: A,
                label: L,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#receipts',
                name: 'dm_receipt_setting',
                onChange: function (e, t) {
                  p(e, t ? 'all_enabled' : 'all_disabled')
                },
              }),
            ),
          ),
        )
      }
      var M = m(P)
      t.default = M
    },
    bCEw: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')(a('K1iM')),
        r = a('23An'),
        c = a('Ud88'),
        i = a('aQQo'),
        o = i.loadQuery,
        l = i.useTrackLoadQueryInRender,
        s = a('ERkP'),
        u = s.useCallback,
        d = s.useEffect,
        f = s.useRef,
        m = s.useState,
        p = a('K1lQ').getRequest,
        b = { kind: 'NullQueryReference' }
      function h(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var a = null != t ? t : b,
          i = c()
        l()
        var s = r(),
          p = f(new Set([a])),
          E = m(function () {
            return a
          }),
          g = E[0],
          y = E[1],
          v = m(function () {
            return a
          }),
          S = v[0],
          _ = v[1]
        a !== S && (p.current.add(a), _(a), y(a))
        var w = u(
            function () {
              s.current && (p.current.add(b), y(b))
            },
            [s],
          ),
          k = u(
            function (t, a) {
              var n =
                null != a && a.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: a.fetchPolicy,
                      networkCacheConfig: a.networkCacheConfig,
                      __nameForWarning: a.__nameForWarning,
                    }
                  : a
              if (s.current) {
                var r,
                  c = o(null !== (r = null == a ? void 0 : a.__environment) && void 0 !== r ? r : i, e, t, n)
                p.current.add(c), y(c)
              }
            },
            [i, e, y, s],
          ),
          C = f(!1)
        return (
          d(function () {
            return function () {
              C.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === C.current)
                return (
                  (C.current = !1),
                  void (
                    'NullQueryReference' !== g.kind &&
                    k(g.variables, { fetchPolicy: g.fetchPolicy, networkCacheConfig: g.networkCacheConfig })
                  )
                )
              var t = p.current
              if (s.current) {
                var a,
                  r = (0, n.default)(t)
                try {
                  for (r.s(); !(a = r.n()).done; ) {
                    var c = a.value
                    if (c === g) break
                    t.delete(c),
                      'NullQueryReference' !== c.kind &&
                        (h(e) ? c.dispose && c.dispose() : c.releaseQuery && c.releaseQuery())
                  }
                } catch (i) {
                  r.e(i)
                } finally {
                  r.f()
                }
              }
            },
            [g, s, k, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  a = (0, n.default)(p.current)
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (h(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (c) {
                  a.e(c)
                } finally {
                  a.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === g.kind ? null : g, k, w]
        )
      }
    },
    'bT/0': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'AdsPreferences', function () {
          return L
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = a('ERkP'),
        l = a.n(o),
        s = a('NeAX'),
        u = a('rxPX'),
        d = a('0KEI'),
        f = Object(u.a)()
          .propsFromState(function () {
            return { settings: s.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowPersonalizationEnabled: e.settings.allowPersonalization }
          })
          .propsFromActions(function () {
            return {
              updateSettings: s.updateSettings,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'ADS_PREFERENCES_SCREEN',
              ),
            }
          }),
        m = a('3XMw'),
        p = a.n(m),
        b = a('yoO3'),
        h = a('7JQg'),
        E = a('7FtF'),
        g = a('k89r'),
        y = a('RKmr'),
        v = a('e0ey'),
        S = a('csss'),
        _ = p.a.d035a8d0,
        w = p.a.f9ff2201,
        k = p.a.ib3357a5,
        C = p.a.c4ca418c,
        T = p.a.b0b3ed8e,
        O = p.a.h1f01a24,
        F = p.a.da202f9a,
        R = { page: 'settings', section: 'ads_preferences' }
      function L(e) {
        var t,
          a = e.allowPersonalizationEnabled,
          n = e.createLocalApiErrorHandler,
          c = e.location,
          o = e.updateSettings,
          s = Object(g.a)(),
          u =
            ((t = l.a.useRef()),
            l.a.useEffect(function () {
              return (
                window.apkInterface && window.apkInterface.isOsAdsTrackingOn && !window.apkInterface.isOsAdsTrackingOn()
              )
            }, []),
            t.current)
        return l.a.createElement(
          h.b,
          { namespace: R },
          l.a.createElement(
            b.a,
            null,
            l.a.createElement(
              E.a,
              { location: c, screenType: 'secondaryDetail', title: _ },
              l.a.createElement(y.a, { description: w }),
              l.a.createElement(v.a, {
                checked: a,
                disabled: u,
                helpText: u ? T : C,
                label: k,
                learnMoreLink: 'https://support.twitter.com/articles/20170405',
                name: 'allowPersonalization',
                onChange: function (e, t) {
                  s.scribe(i()(i()({}, R), {}, { element: e, action: t ? 'enable' : 'disable' })),
                    o(r()({}, e, t)).catch(n())
                },
              }),
              l.a.createElement(S.a, { label: O, link: '/settings/your_twitter_data/twitter_interests' }),
              l.a.createElement(S.a, { label: F, link: '/settings/your_twitter_data/audiences' }),
            ),
          ),
        )
      }
      var A = f(L)
      t.default = A
    },
    cQiO: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ApplicationsScreen', function () {
          return K
        })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        i = a.n(c),
        o = a('1Pcy'),
        l = a.n(o),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        f = a.n(d),
        m = a('KEM+'),
        p = a.n(m),
        b = (a('2G9S'), a('z84I'), a('ho0z'), a('uFXj'), a('ERkP')),
        h = a.n(b),
        E = a('dZRF'),
        g = a('kGix'),
        y = a('rxPX'),
        v = a('0KEI'),
        S = function (e, t) {
          return Object(g.d)(E.d(e))
        },
        _ = Object(y.a)()
          .propsFromState(function () {
            return { fetchStatus: S, applications: E.a.selectUniqUnrevokedApps }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchApplications: E.b,
            }
          }),
        w = a('v//M'),
        k = a('yoO3'),
        C = a('7JQg'),
        T = a('7FtF'),
        O = a('RKmr'),
        F = a('t62R'),
        R = a('FIs5'),
        L = a('csss'),
        A = a('rHpw'),
        I = a('3XMw'),
        P = a.n(I),
        M = a('U+bB'),
        U = a('MWbm'),
        x = P.a.jc02ae67,
        H = P.a.e5e8a899,
        N = P.a.ge06310e,
        j = P.a.dd1b86f9,
        D = P.a.ee4b16f8,
        z = 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
        B = { page: 'settings', section: 'connected_apps' },
        K = (function (e) {
          u()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(l()(e), '_fetchApps', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchApplications)().catch(a({ showToast: !0 }))
              }),
              p()(l()(e), '_handleRetry', function () {
                e._fetchApps()
              }),
              p()(l()(e), '_render', function () {
                var t = e.props.applications
                return h.a.createElement(
                  U.a,
                  null,
                  h.a.createElement(O.a, {
                    description: h.a.createElement(
                      P.a.I18NFormatMessage,
                      { $i18n: 'hcecd237' },
                      h.a.createElement(F.b, { link: z }, P.a.b63b0b1c),
                    ),
                  }),
                  t.length ? null : h.a.createElement(R.a, { header: N, message: D }),
                  t.map(function (e, t) {
                    var a = '/settings/applications/'.concat(e.app_id)
                    return h.a.createElement(L.a, {
                      description: e.organization ? j({ name: e.organization }) : null,
                      key: e.app_id,
                      label: e.name,
                      link: a,
                      thumbnail: h.a.createElement(M.a, { accessibilityLabel: '', source: e.img_url, style: Q.avatar }),
                    })
                  }),
                )
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchApps()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.location
                  return h.a.createElement(
                    C.b,
                    { namespace: B },
                    h.a.createElement(
                      k.a,
                      null,
                      h.a.createElement(
                        T.a,
                        { location: a, title: x },
                        h.a.createElement(w.a, {
                          accessibilityLabel: H,
                          fetchStatus: t,
                          onRequestRetry: this._handleRetry,
                          render: this._render,
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(h.a.Component)
      p()(K, 'defaultProps', { applications: [] })
      var Q = A.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.small, height: '100%', width: '100%' } }
        }),
        W = _(K)
      t.default = W
    },
    ehR8: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('zCf4')
      function r() {
        return { location: Object(n.g)(), match: Object(n.i)(), history: Object(n.f)() }
      }
    },
    g7Ra: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ERkP'),
        i = a.n(c),
        o = a('Lsrn'),
        l = a('shC7'),
        s = a('k/Ka'),
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style, l.a.getConstants().isRTL && o.a.iconRTL],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M13.967 5.852H4.602l2.97-2.97c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0L2.26 6.07c-.294.292-.294.767 0 1.06l4.25 4.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L4.6 7.35h9.364c3.625 0 6.574 2.948 6.574 6.573S17.592 20.5 13.967 20.5H7.79c-.415 0-.75.336-.75.75s.335.75.75.75h6.178c4.452 0 8.074-3.622 8.074-8.074s-3.623-8.074-8.075-8.074z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    jN9l: function (e, t, a) {
      'use strict'
      a.r(t)
      var n,
        r,
        c,
        i = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'MonetizationSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: (n = [{ kind: 'Literal', name: 's', value: 22 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: 'is_active_creator', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'UserResults',
                    kind: 'LinkedField',
                    name: 'user_results',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'result',
                        plural: !1,
                        selections: [
                          {
                            kind: 'InlineFragment',
                            selections: [
                              (c = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'super_follows_application_status',
                                storageKey: null,
                              }),
                            ],
                            type: 'User',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:22)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'MonetizationSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: n,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  r,
                  {
                    alias: null,
                    args: null,
                    concreteType: 'UserResults',
                    kind: 'LinkedField',
                    name: 'user_results',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'result',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                          {
                            kind: 'InlineFragment',
                            selections: [
                              c,
                              { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                            ],
                            type: 'User',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:22)',
              },
            ],
          },
          params: {
            id: '4rEP9orRCxK8D1HOYZv9jw',
            metadata: {},
            name: 'MonetizationSettingsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = '84ef2c297c0f036f20c8545d37f51c88'), (t.default = i)
    },
    jZqz: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'SessionsScreen', function () {
          return te
        })
      var n = a('ddV6'),
        r = a.n(n),
        c = a('VrFO'),
        i = a.n(c),
        o = a('Y9Ll'),
        l = a.n(o),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        f = a.n(d),
        m = a('2VqO'),
        p = a.n(m),
        b = a('KEM+'),
        h = a.n(b),
        E = (a('2G9S'), a('z84I'), a('ERkP')),
        g = a.n(E),
        y = a('EPsT'),
        v = a('uo4S'),
        S = a('kGix'),
        _ = a('rxPX'),
        w = a('0KEI'),
        k = function (e, t) {
          return Object(S.d)(v.d(e))
        },
        C = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: k, sessions: v.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSessionsIfNeeded: v.a,
              revokeAllSessions: v.b,
            }
          }),
        T = a('v//M'),
        O = a('yoO3'),
        F = a('VIKJ'),
        R = a('7JQg'),
        L = a('ZvNX'),
        A = a('eM8g'),
        I = a('7FtF'),
        P = a('MWbm'),
        M = a('RKmr'),
        U = a('6vad'),
        x = a('0yYu'),
        H = a('t62R'),
        N = a('3XMw'),
        j = a.n(N),
        D = j.a.dd823129,
        z = j.a.c2cb5560,
        B = j.a.bca43fd0,
        K = j.a.bef6fc56,
        Q = j.a.bbe9579b,
        W = j.a.b850cbd0,
        X = j.a.ae1bbb26,
        G = j.a.i859a9d3,
        V = j.a.e5e8a899,
        q = j.a.cf3e3164,
        Y = j.a.f810f279,
        J = j.a.a19f4b20,
        Z = j.a.e25e40f0,
        $ = j.a.d1baa458,
        ee = { page: 'settings', section: 'sessions' },
        te = (function (e) {
          f()(a, e)
          var t = p()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(u()(e), '_fetchSessions', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.fetchSessionsIfNeeded)().catch(a({ showToast: !0 }))
              }),
              h()(u()(e), '_handleRetry', function () {
                e._fetchSessions()
              }),
              h()(u()(e), '_handleLogOutAll', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler
                ;(0, t.revokeAllSessions)().catch(a({ showToast: !0 }))
              }),
              h()(u()(e), '_renderSession', function (e, t) {
                var a = '/settings/sessions/'.concat(encodeURIComponent(e.token))
                return g.a.createElement(L.a, {
                  key: e.token,
                  link: a,
                  session: e,
                  withBottomBorder: !t,
                  withSummary: !1,
                })
              }),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._fetchSessions()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.fetchStatus,
                    n = t.location
                  return g.a.createElement(
                    R.b,
                    { namespace: ee },
                    g.a.createElement(
                      O.a,
                      null,
                      g.a.createElement(
                        I.a,
                        { location: n, title: D },
                        g.a.createElement(T.a, {
                          accessibilityLabel: V,
                          fetchStatus: a,
                          onRequestRetry: this._handleRetry,
                          render: function () {
                            return e._renderSessionsDashboard()
                          },
                        }),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderSessionsDashboard',
                value: function () {
                  var e = this,
                    t = this.props.sessions,
                    a = t.length,
                    n = Object(F.a)(t, function (e) {
                      return e.is_current_session
                    }),
                    c = r()(n, 2),
                    i = c[0],
                    o = c[1]
                  return a
                    ? g.a.createElement(
                        P.a,
                        null,
                        g.a.createElement(M.a, { description: K }),
                        g.a.createElement(U.b, { text: z }),
                        g.a.createElement(A.a, null, Q),
                        i[0] ? this._renderSession(i[0], !1) : null,
                        g.a.createElement(x.a, null),
                        g.a.createElement(U.b, { text: B }),
                        g.a.createElement(A.a, null, W),
                        g.a.createElement(
                          A.a,
                          null,
                          g.a.createElement(
                            j.a.I18NFormatMessage,
                            { $i18n: 'i34eeb36', infoText: a > 1 ? J({ num: a - 1 }) : Z },
                            g.a.createElement(
                              H.b,
                              {
                                link: 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                                withInteractiveStyling: !1,
                              },
                              j.a.j3223a5b({ learnMoreLabel: G }),
                            ),
                          ),
                        ),
                        g.a.createElement(y.a, {
                          align: 'left',
                          confirmationSheetConfirmButtonLabel: X,
                          confirmationSheetConfirmButtonType: 'primary',
                          confirmationSheetHeadline: Y,
                          confirmationSheetText: $,
                          label: q,
                          onConfirmationSheetConfirm: this._handleLogOutAll,
                        }),
                        o.map(function (t, n) {
                          return e._renderSession(t, a - 1 === n)
                        }),
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      h()(te, 'defaultProps', { sessions: [] })
      var ae = C(te)
      t.default = ae
    },
    n0Rl: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return H
      })
      var n = a('ddV6'),
        r = a.n(n),
        c = a('VrFO'),
        i = a.n(c),
        o = a('Y9Ll'),
        l = a.n(o),
        s = a('1Pcy'),
        u = a.n(s),
        d = a('5Yy7'),
        f = a.n(d),
        m = a('2VqO'),
        p = a.n(m),
        b = a('KEM+'),
        h = a.n(b),
        E = (a('2G9S'), a('lTEL'), a('7x/C'), a('87if'), a('ZUdG'), a('kYxP'), a('ERkP')),
        g = a.n(E),
        y = a('pXBW'),
        v = a('6/RC'),
        S = a('UIzd'),
        _ = a.n(S),
        w = a('kGix')
      a.d(t, 'a', function () {
        return w.a
      })
      var k = a('fs1G'),
        C = a('0KEI'),
        T = a('lU4h'),
        O = a.n(T),
        F = a('21nk'),
        R = a.n(F),
        L = a('bCEw'),
        A = a.n(L),
        I = a('Ud88'),
        P = a.n(I),
        M = function (e) {
          return (0, e.render)({ fetchStatus: w.a.LOADING, data: null, error: null, retry: k.a })
        },
        U = (function (e) {
          f()(a, e)
          var t = p()(a)
          function a() {
            var e
            i()(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (e = t.call.apply(t, [this].concat(r))), h()(u()(e), 'state', { error: null }), e
          }
          return (
            l()(
              a,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof y.a)) throw e
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
            a
          )
        })(g.a.Component),
        x = function (e) {
          var t = e.query,
            a = e.queryRef,
            n = e.render,
            r = R()(t, a)
          return n({ fetchStatus: w.a.LOADED, data: r, error: null, retry: k.a })
        },
        H = function (e, t) {
          if (v.canUseDOM)
            return function (a) {
              var n = a.fetchPolicy,
                c = void 0 === n ? 'store-or-network' : n,
                i = a.render,
                o = a.variables,
                l = A()(e),
                s = r()(l, 2),
                u = s[0],
                d = s[1],
                f = Object(C.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = O()(o),
                p = r()(m, 1)[0],
                b = g.a.useCallback(
                  function () {
                    d(p, { fetchPolicy: 'network-only' })
                  },
                  [d, p],
                )
              return (
                g.a.useLayoutEffect(
                  function () {
                    d(p, { fetchPolicy: c })
                  },
                  [c, d, p],
                ),
                u
                  ? g.a.createElement(
                      g.a.Suspense,
                      { fallback: g.a.createElement(M, { render: i }) },
                      g.a.createElement(
                        U,
                        { errorHandler: f(t.errorConfig.options || {}), key: u.fetchKey, retry: b },
                        function (t, a) {
                          return t
                            ? i({ fetchStatus: w.a.FAILED, error: t, data: null, retry: a })
                            : g.a.createElement(x, { query: e, queryRef: u, render: i })
                        },
                      ),
                    )
                  : null
              )
            }
          var a = new WeakMap()
          return function (n) {
            n.fetchPolicy
            var c = n.render,
              i = n.variables,
              o = P()(),
              l = Object(C.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = O()(i),
              u = r()(s, 1)[0],
              d = a.get(o)
            if (d) return d
            var f = g.a.lazy(function () {
              return _()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return c({ fetchStatus: w.a.LOADED, data: e, error: null, retry: k.a })
                  },
                  function (e) {
                    return e instanceof y.a
                      ? (l(t.errorConfig.options || {})(e),
                        c({ fetchStatus: w.a.FAILED, data: null, error: e, retry: k.a }))
                      : g.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: a.set(o, e).get.bind(a, o) }
                })
            })
            return g.a.createElement(g.a.Suspense, null, g.a.createElement(f, null))
          }
        }
    },
    ndvG: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'adFreeSitesLabel', function () {
          return z
        }),
        a.d(t, 'yourImpactLabel', function () {
          return B
        }),
        a.d(t, 'adFreeHelpCenterLabel', function () {
          return K
        }),
        a.d(t, 'topArticlesLabel', function () {
          return X
        }),
        a.d(t, 'adFreeHelpScribeElement', function () {
          return re
        }),
        a.d(t, 'adFreeImpactScribeElement', function () {
          return ce
        }),
        a.d(t, 'adFreeSitesScribeElement', function () {
          return ie
        }),
        a.d(t, 'TwitterBlue', function () {
          return oe
        })
      a('KqXw'), a('WNMA'), a('z84I'), a('1t7P'), a('jQ/y'), a('hBvt')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('v6aA'),
        i = a('EGrD'),
        o = a('gUb7'),
        l = a('rxPX'),
        s = a('0KEI'),
        u = Object(l.a)()
          .propsFromState(function () {
            return { userClaimsFetchStatus: o.c }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_BLUE_SETTINGS',
              ),
              fetchAdFreeToken: i.a,
            }
          })
          .withAnalytics({ page: 'settings', section: 'twitter_blue' }),
        d = a('v//M'),
        f = a('3XMw'),
        m = a.n(f),
        p = a('/de5'),
        b = a('yoO3'),
        h = a('7FtF'),
        E = 'adFreeSection',
        g = a('ehR8'),
        y = a('MWbm'),
        v = a('6vad'),
        S = a('csss'),
        _ = a('RKmr'),
        w = a('OOKO'),
        k = a('rHpw'),
        C = a('LSr9'),
        T = a('g7Ra'),
        O = a('yiKp'),
        F = a.n(O),
        R = a('Lsrn'),
        L = a('k/Ka'),
        A = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(L.a)(
            'svg',
            F()(
              F()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M20.803 17.6l-4.88-8.256c-.113-.192-.173-.412-.173-.636V3.356c.368-.048.657-.35.657-.73 0-.415-.336-.75-.75-.75H8.342c-.414 0-.75.335-.75.75 0 .38.29.683.658.73v5.352c0 .224-.06.443-.174.636L3.196 17.6c-.554.938-.562 2.065-.022 3.013s1.515 1.513 2.605 1.513h12.44c1.09 0 2.065-.565 2.606-1.514.54-.948.53-2.074-.023-3.013zm-1.28 2.268c-.27.474-.758.757-1.304.757H5.78c-.545 0-1.032-.283-1.303-.757-.26-.456-.26-.993-.012-1.452.092.04.192.063.298.063h2.59c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H5.305l.91-1.54c.06.018.12.04.188.04h2.59c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H7.078l.906-1.535c.056.014.11.034.17.034h2.59c.414 0 .75-.337.75-.75s-.336-.75-.75-.75H8.852l.515-.873c.25-.423.383-.907.383-1.4V3.376h4.5v5.333c0 .493.133.977.383 1.4l4.88 8.254c.276.47.28 1.033.01 1.506z',
              }),
            ),
          )
        }
      A.metadata = { width: 24, height: 24 }
      var I = A,
        P = a('5VjN'),
        M = a('vMn4'),
        U = a('tH6R'),
        x = a('OySi'),
        H = m.a.ed21f885,
        N = m.a.je84decd,
        j = m.a.de43eaf2,
        D = m.a.i65802df,
        z = m.a.a21b8ad2,
        B = m.a.hd885aef,
        K = m.a.je4ccd3a,
        Q = m.a.f6e88161,
        W = m.a.e4972a1a,
        X = m.a.b7fa0cfd,
        G = m.a.adcaa213,
        V = m.a.i9028824,
        q = m.a.e5fff0c7,
        Y = m.a.ib35705d,
        J = m.a.ccfdbb86,
        Z = m.a.d15f6d3d,
        $ = m.a.jc8487c1,
        ee = m.a.ad45e9b2,
        te = m.a.db529452,
        ae = m.a.f66d24be,
        ne = m.a.d248d75e,
        re = 'ad_free_articles_help',
        ce = 'ad_free_articles_impact',
        ie = 'ad_free_articles_sites'
      function oe(e) {
        var t = e.analytics,
          a = e.createLocalApiErrorHandler,
          n = e.fetchAdFreeToken,
          i = e.userClaimsFetchStatus,
          o = Object(g.a)(),
          l = o.history,
          s = o.location,
          u = o.match,
          f = r.a.useContext(c.a),
          m = f.featureSwitches,
          k = f.userClaims,
          O = k.isTwitterBlueSubscriber(),
          F = k.isTrueAndEnabled('subscriptions_feature_1003'),
          R = k.isTrueAndEnabled('subscriptions_feature_1009'),
          L = k.isTrueAndEnabled('subscriptions_feature_1007'),
          A = k.isTrueAndEnabled('subscriptions_feature_1006'),
          oe = m.isTrue('subscriptions_management_enabled'),
          se = [
            { label: j, description: J, link: '/settings/undo_tweet', Icon: T.a, shouldRender: F },
            { label: Q, description: W, link: '/settings/t1_labs', Icon: I, shouldRender: R },
            { label: X, description: G, link: '/i/articles', Icon: P.a, shouldRender: L },
          ],
          ue = function () {
            fe(ie)
          },
          de = function () {
            fe(re)
          },
          fe = function (e) {
            t.scribe({ page: 'subscriptions', section: 'settings', element: e, action: 'click' })
          }
        return r.a.createElement(d.a, {
          accessibilityLabel: V,
          fetchStatus: i,
          render: function () {
            return O
              ? r.a.createElement(
                  b.a,
                  null,
                  r.a.createElement(
                    h.a,
                    { location: s, screenType: 'primaryDetail', title: H },
                    r.a.createElement(
                      y.a,
                      { style: le.iconWrapper },
                      r.a.createElement(U.a, { style: le.iconTwitterBlue }),
                      r.a.createElement(_.a, { description: q }),
                    ),
                    r.a.createElement(w.a, { spacing: 'space2' }),
                    r.a.createElement(v.b, { text: N }),
                    se.map(function (e) {
                      var t = e.Icon,
                        a = e.description,
                        n = e.label,
                        c = e.link
                      return e.shouldRender
                        ? r.a.createElement(x.b, { Icon: t, description: a, key: n, label: n, link: c })
                        : null
                    }),
                    A &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(v.b, { testID: E, text: D }),
                        r.a.createElement(x.a, {
                          description: Z,
                          label: z,
                          link: 'https://help.twitter.com/using-twitter/twitter-blue-ad-free-articles#publishers',
                          onPress: ue,
                        }),
                        r.a.createElement(S.a, {
                          description: $,
                          label: B,
                          link: { external: !0, pathname: C.b },
                          onPress: function (e) {
                            new C.a(n, a()).getYourImpactChartLinkHandler()(e), fe(ce)
                          },
                        }),
                        r.a.createElement(x.a, {
                          label: K,
                          link: 'https://help.twitter.com/using-twitter/twitter-blue-ad-free-articles',
                          onPress: de,
                        }),
                      ),
                    oe &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(v.b, { text: te }),
                        r.a.createElement(x.b, {
                          Icon: M.a,
                          description: ee,
                          key: Y,
                          label: Y,
                          link: '/settings/subscription',
                        }),
                      ),
                    r.a.createElement(x.a, { label: ae, link: 'https://help.twitter.com/using-twitter/twitter-blue' }),
                    r.a.createElement(x.a, { label: ne, link: 'https://help.twitter.com/forms/subscriptions' }),
                  ),
                )
              : r.a.createElement(p.b, { history: l, location: s, match: u })
          },
        })
      }
      var le = k.a.create(function (e) {
        return {
          iconWrapper: { display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: e.spaces.space16 },
          iconTwitterBlue: { fill: e.colors.text },
        }
      })
      t.default = u(oe)
    },
    sGy1: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ContentYouSee', function () {
          return A
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = a('ERkP'),
        l = a.n(o),
        s = a('P1r1'),
        u = a('G6rE'),
        d = a('rxPX'),
        f = a('0KEI'),
        m = Object(d.a)()
          .propsFromState(function () {
            return { settings: s.g, loggedInUser: u.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return {
              displaySensitiveMediaEnabled: e.settings.display_sensitive_media,
              loggedInUserScreenName: null == t ? void 0 : t.screen_name,
            }
          })
          .propsFromActions(function () {
            return {
              updateSettings: s.N,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'CONTENT_YOU_SEE_SCREEN',
              ),
            }
          }),
        p = a('3XMw'),
        b = a.n(p),
        h = a('yoO3'),
        E = a('7JQg'),
        g = a('7FtF'),
        y = a('k89r'),
        v = a('RKmr'),
        S = a('e0ey'),
        _ = a('csss'),
        w = b.a.f2bd9c47,
        k = b.a.b2810ee7,
        C = b.a.fc1d217b,
        T = b.a.b8533bac,
        O = b.a.h1f01a24,
        F = b.a.j018f2a1,
        R = b.a.h1ef00db,
        L = { page: 'settings', section: 'content_you_see' }
      function A(e) {
        var t = e.createLocalApiErrorHandler,
          a = e.displaySensitiveMediaEnabled,
          n = e.location,
          c = e.loggedInUserScreenName,
          o = e.updateSettings,
          s = Object(y.a)()
        return void 0 !== c
          ? l.a.createElement(
              E.b,
              { namespace: L },
              l.a.createElement(
                h.a,
                null,
                l.a.createElement(
                  g.a,
                  { location: n, screenType: 'secondaryDetail', title: w },
                  l.a.createElement(v.a, { description: k }),
                  l.a.createElement(S.a, {
                    checked: a,
                    label: C,
                    name: 'display_sensitive_media',
                    onChange: function (e, a) {
                      s.scribe(i()(i()({}, L), {}, { element: e, action: a ? 'enable' : 'disable' })),
                        o(r()({}, e, a)).catch(t({ showToast: !0 }))
                    },
                  }),
                  l.a.createElement(_.a, { label: T, link: '/'.concat(c, '/topics') }),
                  l.a.createElement(_.a, { label: O, link: '/settings/your_twitter_data/twitter_interests' }),
                  l.a.createElement(_.a, { label: F, link: '/settings/explore' }),
                  l.a.createElement(_.a, { label: R, link: '/settings/search' }),
                ),
              ),
            )
          : null
      }
      var I = m(A)
      t.default = I
    },
    sZlh: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return F
        })
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ddV6'),
        i = a.n(c),
        o = (a('jQ3i'), a('x4t0'), a('849X'), a('TJCb'), a('AS3p')),
        l = a('ERkP'),
        s = a.n(l),
        u = a('v6aA'),
        d = a('3XMw'),
        f = a.n(d),
        m = a('yoO3'),
        p = a('7JQg'),
        b = a('BTou'),
        h = a('7FtF'),
        E = a('k89r'),
        g = a('RKmr'),
        y = a('3JAx'),
        v = f.a.d0b74a5a,
        S = f.a.i9c8698d,
        _ = f.a.d8817e36,
        w = f.a.b9288ee6,
        k = f.a.ad881a6b,
        C = f.a.d9c5161f,
        T = [
          { label: _, value: o.a.AcceptAllCookies, helpText: k },
          { label: w, value: o.a.RefuseNonEssentialCookies, helpText: C },
        ],
        O = { page: 'settings', section: 'cookie_preferences' }
      function F(e) {
        var t = e.location,
          a = Object(E.a)(),
          n = (function () {
            var e = s.a.useContext(u.a).featureSwitches,
              t = s.a.useState(function () {
                var t = o.c(e)
                return [o.a.NotSet, o.a.Invalid].includes(t) ? o.a.RefuseNonEssentialCookies : t
              }),
              a = i()(t, 2),
              n = a[0],
              r = a[1]
            return {
              cookiePreference: n,
              setCookiePreference: function (t) {
                if (t === o.a.AcceptAllCookies) o.b(e), r(o.a.AcceptAllCookies)
                else {
                  if (t !== o.a.RefuseNonEssentialCookies) throw new Error('Invalid cookie preference')
                  o.d(e), r(o.a.RefuseNonEssentialCookies)
                }
              },
            }
          })(),
          c = n.cookiePreference,
          l = n.setCookiePreference
        return s.a.createElement(
          p.b,
          { namespace: O },
          s.a.createElement(
            m.a,
            null,
            s.a.createElement(
              h.a,
              { location: t, screenType: 'secondaryDetail', title: v },
              s.a.createElement(g.a, { description: S }),
              s.a.createElement(y.a, {
                name: 'cookie_preferences',
                onChange: function (e, t) {
                  a.scribe(
                    r()(
                      r()({}, O),
                      {},
                      { action: 'change', element: t === o.a.AcceptAllCookies ? 'accept_all' : 'refuse_non_essential' },
                    ),
                  ),
                    l(t),
                    t === o.a.RefuseNonEssentialCookies && (b.a.flushHTMLCache(), window.location.reload())
                },
                options: T,
                value: c,
              }),
            ),
          ),
        )
      }
    },
    su2V: function (e, t, a) {
      'use strict'
      a.d(t, 'l', function () {
        return h
      }),
        a.d(t, 'k', function () {
          return E
        }),
        a.d(t, 'f', function () {
          return g
        }),
        a.d(t, 'e', function () {
          return y
        }),
        a.d(t, 'j', function () {
          return v
        }),
        a.d(t, 'i', function () {
          return S
        }),
        a.d(t, 'h', function () {
          return _
        }),
        a.d(t, 'g', function () {
          return w
        }),
        a.d(t, 'd', function () {
          return k
        }),
        a.d(t, 'b', function () {
          return C
        }),
        a.d(t, 'a', function () {
          return T
        }),
        a.d(t, 'c', function () {
          return O
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = (a('yH/f'), a('hBpG'), a('7x/C'), a('jQ3i'), a('x4t0'), a('JtPf'), a('oEOe')),
        l = a('Ssj5'),
        s = a('kGix'),
        u = 'subscriptionPayments',
        d = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_DETAILS_FAILURE',
        }),
        f = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL_FAILURE',
        }),
        m = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_FAILURE',
        }),
        p = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_FAILURE',
        }),
        b = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: s.a.NONE }, customerPortalUrls: {} }
      var h = function (e, t) {
          var a = e[u].products[t]
          return (null == a ? void 0 : a.fetchStatus) || s.a.NONE
        },
        E = function (e, t) {
          var a = e[u].products[t]
          return null == a ? void 0 : a.details
        },
        g = function (e, t) {
          var a = e[u].checkoutUrls[t]
          return (null == a ? void 0 : a.fetchStatus) || s.a.NONE
        },
        y = function (e, t) {
          var a = e[u].checkoutUrls[t]
          return null == a ? void 0 : a.checkoutUrl
        },
        v = function (e) {
          return e[u].productSubscriptions.fetchStatus
        },
        S = function (e, t) {
          return (e[u].productSubscriptions.subscriptions || []).find(function (e) {
            var a, n
            return (
              (null === (a = e.product) || void 0 === a ? void 0 : a.rest_id) &&
              (null === (n = e.product) || void 0 === n ? void 0 : n.rest_id.includes(t)) &&
              'Inactive' !== e.state
            )
          })
        },
        _ = function (e, t) {
          var a = e[u].customerPortalUrls[t]
          return (null == a ? void 0 : a.fetchStatus) || s.a.NONE
        },
        w = function (e, t) {
          var a = e[u].customerPortalUrls[t]
          return null == a ? void 0 : a.customerPortalUrl
        },
        k = function (e) {
          return function (t, a, n) {
            var r = n.api,
              c = Object(o.b)(t, {
                params: { id: e },
                request: r.SubscriptionPayments.fetchSubscriptionProductDetails,
              }),
              i = h(a(), e)
            return i !== s.a.NONE && i !== s.a.FAILED
              ? Promise.resolve()
              : c({ actionTypes: d, context: 'FETCH_SUBSCRIPTION_PRODUCT_DETAILS', meta: { id: e } })
          }
        },
        C = function (e, t, a, n) {
          return function (r, c, i) {
            var l = i.api,
              u = Object(o.b)(r, {
                params: { price_id: t, success_url: a, cancel_url: n },
                request: l.SubscriptionPayments.fetchSubscriptionProductCheckoutUrl,
              }),
              d = g(c(), e)
            return d !== s.a.NONE && d !== s.a.FAILED
              ? Promise.resolve()
              : u({ actionTypes: f, context: 'FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL', meta: { id: e } })
          }
        },
        T = function () {
          return function (e, t, a) {
            var n = a.api,
              r = Object(o.b)(e, { params: {}, request: n.SubscriptionPayments.fetchProductSubscriptions }),
              c = v(t())
            return c !== s.a.NONE && c !== s.a.FAILED
              ? Promise.resolve()
              : r({ actionTypes: m, context: 'FETCH_PRODUCT_SUBSCRIPTIONS', meta: {} })
          }
        },
        O = function (e, t) {
          return function (a, n, r) {
            var c = r.api,
              i = Object(o.b)(a, {
                params: { return_url: t },
                request: c.SubscriptionPayments.fetchSubscriptionProductCustomerPortalUrl,
              }),
              l = _(n(), e)
            return l !== s.a.NONE && l !== s.a.FAILED
              ? Promise.resolve()
              : i({ actionTypes: p, context: 'FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL', meta: { id: e } })
          }
        }
      l.a.register(
        r()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              var a = t.meta.id
              return i()(
                i()({}, e),
                {},
                { products: i()(i()({}, e.products), {}, r()({}, a, { fetchStatus: s.a.LOADING })) },
              )
            case d.SUCCESS:
              var n = t.meta.id
              return i()(
                i()({}, e),
                {},
                { products: i()(i()({}, e.products), {}, r()({}, n, { fetchStatus: s.a.LOADED, details: t.payload })) },
              )
            case d.FAILURE:
              var c = t.meta.id
              return i()(
                i()({}, e),
                {},
                { products: i()(i()({}, e.products), {}, r()({}, c, { fetchStatus: s.a.FAILED, error: t.payload })) },
              )
            case f.REQUEST:
              var o = t.meta.id
              return i()(
                i()({}, e),
                {},
                { checkoutUrls: i()(i()({}, e.checkoutUrls), {}, r()({}, o, { fetchStatus: s.a.LOADING })) },
              )
            case f.SUCCESS:
              var l = t.meta.id
              return i()(
                i()({}, e),
                {},
                {
                  checkoutUrls: i()(
                    i()({}, e.checkoutUrls),
                    {},
                    r()({}, l, { fetchStatus: s.a.LOADED, checkoutUrl: t.payload }),
                  ),
                },
              )
            case f.FAILURE:
              var u = t.meta.id
              return i()(
                i()({}, e),
                {},
                {
                  checkoutUrls: i()(
                    i()({}, e.checkoutUrls),
                    {},
                    r()({}, u, { fetchStatus: s.a.FAILED, error: t.payload }),
                  ),
                },
              )
            case m.REQUEST:
              return i()(i()({}, e), {}, { productSubscriptions: { fetchStatus: s.a.LOADING } })
            case m.SUCCESS:
              return i()(
                i()({}, e),
                {},
                { productSubscriptions: { fetchStatus: s.a.LOADED, subscriptions: t.payload } },
              )
            case m.FAILURE:
              return i()(i()({}, e), {}, { productSubscriptions: { fetchStatus: s.a.FAILED, error: t.payload } })
            case p.REQUEST:
              var h = t.meta.id
              return i()(
                i()({}, e),
                {},
                {
                  customerPortalUrls: i()(i()({}, e.customerPortalUrls), {}, r()({}, h, { fetchStatus: s.a.LOADING })),
                },
              )
            case p.SUCCESS:
              var E = t.meta.id
              return i()(
                i()({}, e),
                {},
                {
                  customerPortalUrls: i()(
                    i()({}, e.customerPortalUrls),
                    {},
                    r()({}, E, { fetchStatus: s.a.LOADED, customerPortalUrl: t.payload }),
                  ),
                },
              )
            case p.FAILURE:
              var g = t.meta.id
              return i()(
                i()({}, e),
                {},
                {
                  customerPortalUrls: i()(
                    i()({}, e.customerPortalUrls),
                    {},
                    r()({}, g, { fetchStatus: s.a.FAILED, error: t.payload }),
                  ),
                },
              )
            default:
              return e
          }
        }),
      )
    },
    tH6R: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ERkP'),
        i = a.n(c),
        o = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 76 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.854-.225 3.917-.72 1.048-.481 1.866-1.147 2.381-2.025.489-.833.732-1.749.732-2.732 0-1.25-.356-2.336-1.128-3.184-.317-.348-.69-.635-1.113-.867.302-.21.572-.455.809-.738.675-.806 1.014-1.754 1.014-2.813 0-1.49-.605-2.722-1.786-3.626C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.498-.059.972-.189 1.414-.381l-.001.002c-.329.485-.747.911-1.228 1.254.005.104.007.209.007.313 0 3.202-2.476 6.895-7.005 6.895-1.39 0-2.684-.401-3.773-1.089.193.022.389.034.588.034 1.153 0 2.215-.388 3.058-1.038-1.078-.019-1.987-.72-2.3-1.682.15.028.305.043.463.043.224 0 .441-.029.648-.084-1.127-.223-1.975-1.202-1.975-2.376v-.031c.332.181.711.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.122-.859.333-1.218 1.214 1.466 3.028 2.431 5.075 2.532-.041-.178-.064-.362-.064-.551 0-1.339 1.102-2.424 2.462-2.424.708 0 1.348.294 1.797.765.561-.108 1.088-.31 1.563-.588-.183.563-.573 1.039-1.082 1.338zm14.776 12.285H25.64V2.625h5.222v18.378zm10.35.482c-2.163 0-3.844-.54-5.044-1.622-1.183-1.082-1.775-2.62-1.775-4.614V8.33h5.222v5.626c0 1.37.33 2.366.99 2.99.658.627 1.57.94 2.737.94 1.436 0 2.535-.39 3.295-1.167.76-.795 1.14-1.8 1.14-3.017V8.33H53v12.673h-5.12v-2.89c-.56 1.1-1.43 1.936-2.612 2.51-1.183.575-2.535.862-4.056.862zm33.311-5.729H60.53c.186.794.7 1.41 1.546 1.85.845.44 1.943.66 3.295.66 1 0 1.91-.152 2.74-.457.844-.322 1.495-.76 1.95-1.32l3.956 1.725c-.896 1.065-2.096 1.876-3.6 2.433-1.487.558-3.245.837-5.273.837-1.994 0-3.71-.262-5.146-.786-1.436-.542-2.543-1.32-3.32-2.333-.76-1.03-1.14-2.248-1.14-3.65 0-1.42.388-2.645 1.165-3.676.777-1.03 1.876-1.816 3.295-2.356 1.437-.558 3.11-.837 5.02-.837 1.994 0 3.7.296 5.12.887 1.437.575 2.527 1.403 3.27 2.485.744 1.08 1.116 2.373 1.116 3.877v.66l-.001.001zM69.35 13.17c-.032-.76-.455-1.377-1.266-1.85-.794-.473-1.825-.71-3.093-.71-1.25 0-2.272.228-3.066.684-.794.457-1.267 1.082-1.42 1.876h8.847-.002z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 76, height: 24 }), (t.a = s)
    },
    tM6R: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      var n = { help: 'https://help.twitter.com/using-twitter/spaces', settings: 'https://twitter.com/settings/spaces' }
    },
    twgV: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'DataSharingWithBusinessPartners', function () {
          return T
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = a('ERkP'),
        l = a.n(o),
        s = a('NeAX'),
        u = a('rxPX'),
        d = a('0KEI'),
        f = Object(u.a)()
          .propsFromState(function () {
            return { settings: s.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowPartnerships: e.settings.allowPartnerships }
          })
          .propsFromActions(function () {
            return {
              updateSettings: s.updateSettings,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_SHARING_WITH_BUSINESS_PARTNERS_SCREEN',
              ),
            }
          }),
        m = a('3XMw'),
        p = a.n(m),
        b = a('yoO3'),
        h = a('7JQg'),
        E = a('7FtF'),
        g = a('k89r'),
        y = a('RKmr'),
        v = a('e0ey'),
        S = p.a.h14ba864,
        _ = p.a.d7fcc4fa,
        w = p.a.d3c20d8f,
        k = p.a.jdaf84e3,
        C = { page: 'settings', section: 'data_sharing_with_business_partners' }
      function T(e) {
        var t = e.allowPartnerships,
          a = e.createLocalApiErrorHandler,
          n = e.location,
          c = e.updateSettings,
          o = Object(g.a)()
        return l.a.createElement(
          h.b,
          { namespace: C },
          l.a.createElement(
            b.a,
            null,
            l.a.createElement(
              E.a,
              { location: n, screenType: 'secondaryDetail', title: S },
              l.a.createElement(y.a, { description: _ }),
              l.a.createElement(v.a, {
                checked: t,
                helpText: k,
                label: w,
                learnMoreLink: 'https://support.twitter.com/articles/20175379',
                name: 'allowPartnerships',
                onChange: function (e, t) {
                  o.scribe(i()(i()({}, C), {}, { element: e, action: t ? 'enable' : 'disable' })),
                    c(r()({}, e, t)).catch(a({ showToast: !0 }))
                },
              }),
            ),
          ),
        )
      }
      var O = f(T)
      t.default = O
    },
    uAEl: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function () {
          return x
        })
      var n = a('97Jx'),
        r = a.n(n),
        c = (a('z84I'), a('hBvt'), a('ERkP')),
        i = a.n(c),
        o = a('v6aA'),
        l = a('3XMw'),
        s = a.n(l),
        u = a('yoO3'),
        d = a('7JQg'),
        f = a('RKmr'),
        m = a('7FtF'),
        p = a('OySi'),
        b = 'accountAccessScreen',
        h = a('MWbm'),
        E = a('yiKp'),
        g = a.n(E),
        y = a('Lsrn'),
        v = a('k/Ka'),
        S = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(v.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [y.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M17.89 7.673c-.002-3.246-2.644-5.888-5.89-5.888S6.112 4.427 6.11 7.673v.002c0 .414.337.75.75.75.415 0 .75-.336.75-.75 0-2.42 1.97-4.39 4.39-4.39s4.39 1.97 4.39 4.39c0 .414.335.75.75.75.413 0 .75-.336.75-.75v-.002z',
              }),
              i.a.createElement('path', {
                d: 'M19.75 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm.75 12.482c0 .413-.336.75-.75.75H4.25c-.414 0-.75-.337-.75-.75V9.56c0-.414.336-.75.75-.75h15.5c.414 0 .75.336.75.75v10.23z',
              }),
              i.a.createElement('path', {
                d: 'M12 11.72c-1.136 0-2.057.92-2.057 2.056 0 .87.543 1.61 1.307 1.91v1.397c0 .414.336.75.75.75s.75-.336.75-.75v-1.396c.764-.3 1.307-1.04 1.307-1.91 0-1.137-.92-2.058-2.057-2.058z',
              }),
            ),
          )
        }
      S.metadata = { width: 24, height: 24 }
      var _ = S,
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(v.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [y.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M6.11 4.25v1.86H4.25C3.01 6.11 2 7.12 2 8.36v11.39C2 20.99 3.01 22 4.25 22h11.39c1.24 0 2.25-1.01 2.25-2.25v-1.86h1.86c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2H8.36C7.12 2 6.11 3.01 6.11 4.25zm9.53 16.25H4.25c-.413 0-.75-.337-.75-.75V8.36c0-.412.337-.75.75-.75h11.39c.412 0 .75.338.75.75v11.39c0 .413-.338.75-.75.75zm4.11-17c.413 0 .75.337.75.75v11.39c0 .412-.337.75-.75.75h-1.86V8.36c0-1.24-1.01-2.25-2.25-2.25H7.61V4.25c0-.413.338-.75.75-.75h11.39z',
              }),
            ),
          )
        }
      w.metadata = { width: 24, height: 24 }
      var k = w,
        C = a('3JQt'),
        T = a('wz7L'),
        O = s.a.f8645654,
        F = s.a.b02df747,
        R = s.a.a2197725,
        L = s.a.j95edf76,
        A = s.a.g2841de4,
        I = s.a.ae72d4c4,
        P = s.a.h1abfbcd,
        M = s.a.j748604a,
        U = { page: 'settings', section: 'security_and_account_access' }
      function x(e) {
        var t = e.location,
          a = (function (e) {
            return [
              { label: L, description: R, link: '/settings/security', Icon: _ },
              { label: I, description: A, link: '/settings/apps_and_sessions', Icon: k },
              e.isTrue('responsive_web_disconnect_third_party_sso_enabled')
                ? { label: P, description: M, link: '/settings/connected_accounts', Icon: C.a }
                : void 0,
              e.isTrue('responsive_web_delegate_enabled')
                ? {
                    description: 'Manage an organization and Team.',
                    label: 'Twitter Delegate',
                    link: '/settings/delegate?enable_filtered_bundle=bundle.Delegate',
                    Icon: T.a,
                  }
                : void 0,
            ]
          })(i.a.useContext(o.a).featureSwitches)
        return i.a.createElement(
          d.b,
          { namespace: U },
          i.a.createElement(
            u.a,
            null,
            i.a.createElement(
              m.a,
              { location: t, screenType: 'primaryDetail', title: O },
              i.a.createElement(
                h.a,
                { testID: b },
                i.a.createElement(f.a, { description: F }),
                a.map(function (e) {
                  return e && i.a.createElement(p.b, r()({}, e, { key: e.link }))
                }),
              ),
            ),
          ),
        )
      }
    },
    vMn4: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ERkP'),
        i = a.n(c),
        o = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M21 3.25H6c-1.24 0-2.25 1.01-2.25 2.25v.75H3C1.76 6.25.75 7.26.75 8.5v10c0 1.24 1.01 2.25 2.25 2.25h15c1.24 0 2.25-1.01 2.25-2.25v-.75H21c1.24 0 2.25-1.01 2.25-2.25v-10c0-1.24-1.01-2.25-2.25-2.25zM2.25 8.5c0-.413.337-.75.75-.75h1.654C4.37 8.938 3.438 9.87 2.25 10.154V8.5zM3 19.25c-.413 0-.75-.337-.75-.75v-1.654c1.188.283 2.12 1.216 2.404 2.404H3zm15.75-.75c0 .413-.337.75-.75.75h-1.654c.283-1.188 1.216-2.12 2.404-2.404V18.5zm0-3.174c-2.016.323-3.6 1.908-3.924 3.924H6.174c-.323-2.016-1.908-3.6-3.924-3.924v-3.652c2.016-.323 3.6-1.908 3.924-3.924h8.652c.323 2.016 1.908 3.6 3.924 3.924v3.652zm0-5.172c-1.188-.283-2.12-1.216-2.404-2.404H18c.413 0 .75.337.75.75v1.654zm3 5.346c0 .413-.337.75-.75.75h-.75V8.5c0-1.24-1.01-2.25-2.25-2.25H5.25V5.5c0-.413.337-.75.75-.75h15c.413 0 .75.337.75.75v10z',
              }),
              i.a.createElement('path', {
                d: 'M10.5 9.316c-1.878 0-3.406 1.877-3.406 4.184s1.528 4.184 3.406 4.184 3.406-1.877 3.406-4.184-1.528-4.184-3.406-4.184zm0 6.868c-1.033 0-1.906-1.23-1.906-2.684s.873-2.684 1.906-2.684 1.906 1.23 1.906 2.684-.873 2.684-1.906 2.684z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    wsOx: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return h
      }),
        a.d(t, 'b', function () {
          return E
        }),
        a.d(t, 'd', function () {
          return g
        }),
        a.d(t, 'a', function () {
          return y
        }),
        a.d(t, 'e', function () {
          return v
        })
      var n = a('KEM+'),
        r = a.n(n),
        c = a('yiKp'),
        i = a.n(c),
        o = (a('yH/f'), a('kGix')),
        l = a('Ssj5'),
        s = a('RqPI'),
        u = a('oEOe'),
        d = 'safetyMode',
        f = Object.freeze({
          REQUEST: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_REQUEST',
          SUCCESS: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_SUCCESS',
          FAILURE: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_FAILURE',
        }),
        m = Object.freeze({
          REQUEST: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_REQUEST',
          SUCCESS: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_SUCCESS',
          FAILURE: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_FAILURE',
        }),
        p = { enabled: !1, duration: 'none', fetchSettingsFetchStatus: o.a.NONE, updateSettingsFetchStatus: o.a.NONE }
      function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case f.REQUEST:
            var a,
              n = null === (a = t.payload) || void 0 === a ? void 0 : a.duration
            return i()(i()({}, e), {}, { duration: n, updateSettingsFetchStatus: o.a.LOADED })
          case m.REQUEST:
            return i()(i()({}, e), {}, { fetchSettingsFetchStatus: o.a.LOADING })
          case m.SUCCESS:
            var r,
              c,
              l,
              s = !(null === (r = t.payload) || void 0 === r || !r.enabled),
              u = null === (c = t.payload) || void 0 === c ? void 0 : c.duration,
              d = null === (l = t.payload) || void 0 === l ? void 0 : l.expiration
            return i()(i()({}, e), {}, { enabled: s, duration: u, expiration: d, fetchSettingsFetchStatus: o.a.LOADED })
          case m.FAILURE:
            return i()(i()({}, e), {}, { fetchSettingsFetchStatus: o.a.FAILED })
          default:
            return e
        }
      }
      l.a.register(r()({}, d, b))
      var h = function (e) {
          return e.safetyMode || {}
        },
        E = function (e) {
          return e.safetyMode.fetchSettingsFetchStatus
        },
        g = function (e) {
          return e.safetyMode.updateSettingsFetchStatus
        },
        y = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(u.b)(e, { request: n.SettingsGraphQL.fetchSafetyModeSettings })({
              actionTypes: m,
              context: 'FETCH_SAFETY_MODE_SETTINGS',
            })
          }
        },
        v = function (e) {
          return function (t, a, n) {
            var r = n.api,
              c = a(),
              i = { userId: Object(s.q)(c) || '', duration: e }
            return Object(u.c)(t, { params: i, request: r.SettingsGraphQL.updateSafetyModeSettings })({
              actionTypes: f,
              context: 'UPDATE_SAFETY_MODE_SETTINGS',
              payload: i,
            })
          }
        }
    },
    wz7L: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        c = a('ERkP'),
        i = a.n(c),
        o = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    x8q0: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ERkP'),
        r = a.n(n),
        c = a('G6rE'),
        i = a('rxPX'),
        o = Object(i.a)()
          .propsFromState(function () {
            return { loggedInUser: c.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userId: (null == t ? void 0 : t.id_str) || '' }
          })
          .withAnalytics({ component: 'safety_mode_modal_flagged_accounts' }),
        l = a('KEM+'),
        s = a.n(l),
        u = a('yiKp'),
        d = a.n(u),
        f = a('QIgh'),
        m = a('8UdT'),
        p = a('88ay'),
        b = a('Ka9G'),
        h = d()(d()({}, f.b), {}, s()({}, m.b.User, Object(b.a)({ decoration: p.d }))),
        E = a('jHSc'),
        g = a('fTQJ'),
        y = a('118N'),
        v = a('t62R'),
        S = a('rHpw'),
        _ = a('FIs5'),
        w = a('3XMw'),
        k = a.n(w),
        C = k.a.f2351b97,
        T = k.a.e9f1fbcb,
        O = r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            k.a.I18NFormatMessage,
            { $i18n: 'd724f426' },
            r.a.createElement(
              v.b,
              { style: { display: 'block', paddingBottom: S.a.theme.spaces.space20 } },
              k.a.c51dcdfc,
            ),
          ),
          r.a.createElement(
            k.a.I18NFormatMessage,
            { $i18n: 'h3d97f03' },
            r.a.createElement(v.b, { link: '/settings/blocked/all' }, k.a.bd0a88c1),
          ),
        ),
        F = function () {
          return r.a.createElement(_.a, { header: T, message: O })
        }
      t.default = o(function (e) {
        var t = e.history,
          a = e.userId,
          n = r.a.useMemo(
            function () {
              return Object(y.a)(a)
            },
            [a],
          )
        return r.a.createElement(
          E.b,
          {
            backButtonType: 'back',
            history: t,
            onBackClick: function () {
              t.goBack()
            },
            title: C,
          },
          r.a.createElement(g.a, { entryConfiguration: h, module: n, renderEmptyState: F, title: C }),
        )
      })
    },
    xJPF: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'ManageSubscriptionScreen', function () {
          return _
        })
      a('2G9S')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('rxPX'),
        i = a('su2V'),
        o = a('XOb8'),
        l = Object(c.a)()
          .propsFromState(function () {
            return {
              productSubscriptionsFetchStatus: i.j,
              subscription: function (e) {
                return Object(i.i)(e, o.e)
              },
              customerPortalUrlFetchStatus: function (e) {
                return Object(i.h)(e, o.d)
              },
              customerPortalUrl: function (e) {
                return Object(i.g)(e, o.d)
              },
            }
          })
          .propsFromActions(function () {
            return { fetchProductSubscriptions: i.a, fetchSubscriptionProductCustomerPortalUrl: i.c }
          })
          .withAnalytics({ page: 'subscriptions', section: 'management' }),
        s = a('v//M'),
        u = a('3XMw'),
        d = a.n(u),
        f = a('Wc+h'),
        m = a('yoO3'),
        p =
          (a('yH/f'),
          Object.freeze({ AppleAppStore: 'AppleAppStore', GooglePlay: 'GooglePlay', TPay: 'TPay', Stripe: 'Stripe' })),
        b = a('7FtF'),
        h = a('zCf4'),
        E = a('MWbm'),
        g = a('cm6r'),
        y = a('FR63'),
        v = a('t62R'),
        S = a('RKmr')
      function _(e) {
        var t = e.analytics,
          a = e.customerPortalUrl,
          n = e.customerPortalUrlFetchStatus,
          c = e.fetchProductSubscriptions,
          i = e.fetchSubscriptionProductCustomerPortalUrl,
          l = e.productSubscriptionsFetchStatus,
          u = e.subscription,
          _ = Object(h.g)(),
          k = d.a.ib35705d,
          C = d.a.e5fff0c7,
          T = d.a.baf97715,
          O = 'Expire' === (null == u ? void 0 : u.state) ? ''.concat(C, ' ').concat(T) : C,
          F = d.a.fff413dc,
          R = d.a.h201c4c1,
          L = d.a.i8385a2c,
          A = d.a.h80834de,
          I = d.a.ib8ebf3b,
          P = function () {
            c()
          }
        r.a.useEffect(function () {
          t.scribe({ action: 'impression' })
        }, []),
          r.a.useEffect(
            function () {
              P()
            },
            [c],
          )
        var M = function () {
          t.scribe({
            action: 'click',
            data: {
              payment_source: (null == u ? void 0 : u.payment_source) || '',
              status: (null == u ? void 0 : u.state) || '',
            },
          }),
            i(o.d, o.b)
        }
        return r.a.createElement(
          m.a,
          null,
          r.a.createElement(
            b.a,
            { location: _, title: k },
            r.a.createElement(S.a, { description: O }),
            r.a.createElement(
              E.a,
              null,
              r.a.createElement(s.a, {
                fetchStatus: l,
                onRequestRetry: P,
                render: function () {
                  var e,
                    t = null == u ? void 0 : u.payment_source
                  t && t !== p.Stripe && (e = t === p.AppleAppStore ? R : t === p.GooglePlay ? L : A)
                  var a = I({ mobilePlatform: e })
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    t === p.Stripe
                      ? r.a.createElement(
                          g.a,
                          { accessibilityRole: 'button', onPress: M, style: w.manageSubscriptionInteraction },
                          r.a.createElement(
                            y.a,
                            null,
                            r.a.createElement(
                              E.a,
                              { style: w.manageSubscriptionSection },
                              r.a.createElement(v.b, null, F),
                              r.a.createElement(f.a, { style: w.goToSubscriptionPortalIcon }),
                            ),
                          ),
                        )
                      : r.a.createElement(S.a, { description: a }),
                  )
                },
                retryable: !0,
              }),
              r.a.createElement(s.a, {
                fetchStatus: n,
                onRequestRetry: function () {
                  i(o.d, o.b)
                },
                render: function () {
                  return a && (window.location.href = a), null
                },
                retryable: !0,
              }),
            ),
          ),
        )
      }
      var w = a('rHpw').a.create(function (e) {
          return {
            manageSubscriptionSection: { flexDirection: 'row', justifyContent: 'space-between' },
            goToSubscriptionPortalIcon: { color: e.colors.gray700 },
            manageSubscriptionInteraction: { cursor: 'pointer' },
          }
        }),
        k = l(_)
      t.default = k
    },
  },
])
//# sourceMappingURL=WIPED
