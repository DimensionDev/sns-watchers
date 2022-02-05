;(window.webpackJsonp = window.webpackJsonp || []).push([
  [230],
  {
    '1Uii': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'OffTwitterActivity', function () {
          return x
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ddV6'),
        o = n.n(c),
        i = n('ERkP'),
        s = n.n(i),
        l = n('NeAX'),
        u = n('RqPI'),
        d = n('P1r1'),
        f = n('hqKg'),
        p = n('rxPX'),
        b = n('0KEI'),
        m = Object(p.a)()
          .propsFromState(function () {
            return {
              settings: l.selectUserPreferences,
              isEUUser: Object(f.createSelector)(u.m, d.g, l.selectPreferences, function (e, t, n) {
                return !(!t.settings_metadata || !t.settings_metadata.is_eu) || n.is_eu_country
              }),
            }
          })
          .adjustStateProps(function (e) {
            var t = e.isEUUser,
              n = e.settings
            return { allowCookieUse: n.allowCookieUse, allowDeviceAccess: n.allowDeviceAccess, isEUUser: t }
          })
          .propsFromActions(function () {
            return {
              updateSettings: l.updateSettings,
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(
                'OFF_TWITTER_ACTIVITY_SCREEN',
              ),
            }
          }),
        y = n('3XMw'),
        h = n.n(y),
        O = n('yoO3'),
        g = n('7JQg'),
        E = n('7FtF'),
        v = n('k89r'),
        w = n('xHsv'),
        S = n('cCdp'),
        j = n('eb3s')
      function P(e, t) {
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
            ? P(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var k = h.a.bcae496c,
        C = h.a.acc60551,
        T = h.a.f80a33af,
        D = h.a.b276596b,
        R = h.a.c966aaf4,
        F = h.a.e8313b32,
        L = h.a.f1d46fd5,
        M = h.a.cfd2f35d,
        A = h.a.f6c8ccc7,
        I = h.a.f748b0fc,
        H = { page: 'settings', section: 'off_twitter_activity' }
      function x(e) {
        var t = e.allowDeviceAccess,
          n = e.createLocalApiErrorHandler,
          r = e.isEUUser,
          c = e.location,
          i = e.updateSettings,
          l = Object(v.a)(),
          u = (function (e, t, n) {
            var r = s.a.useState(!1),
              a = o()(r, 2),
              c = a[0],
              i = a[1]
            function l(e) {
              n('allowCookieUse', e)
            }
            return {
              showConfirmation: c,
              enabled: e,
              controlDisabled: t && !e,
              _handleChanged: function (e, n) {
                t && !n ? i(!0) : l(n)
              },
              _handleConfirmationCancel: function () {
                i(!1)
              },
              _handleConfirmationConfirm: function () {
                i(!1), l(!1)
              },
            }
          })(Boolean(e.allowCookieUse), Boolean(r), d)
        function d(e, t) {
          l.scribe(_(_({}, H), {}, { element: e, action: t ? 'enable' : 'disable' })),
            i(a()({}, e, t)).catch(n({ showToast: !0 }))
        }
        return s.a.createElement(
          g.b,
          { namespace: H },
          s.a.createElement(
            O.a,
            null,
            s.a.createElement(
              E.a,
              { location: c, screenType: 'secondaryDetail', title: k },
              s.a.createElement(w.a, { description: C }),
              s.a.createElement(S.a, {
                checked: u.enabled,
                disabled: u.controlDisabled,
                helpText: r ? R : D,
                label: T,
                learnMoreLink: 'https://support.twitter.com/articles/20169421',
                name: 'allowCookieUse',
                onChange: u._handleChanged,
              }),
              s.a.createElement(S.a, {
                checked: t,
                helpText: I,
                label: A,
                learnMoreLink: 'https://support.twitter.com/articles/20175257',
                name: 'allowDeviceAccess',
                onChange: d,
              }),
            ),
            u.showConfirmation &&
              s.a.createElement(j.a, {
                cancelButtonLabel: M,
                confirmButtonLabel: L,
                onCancel: u._handleConfirmationCancel,
                onConfirm: u._handleConfirmationConfirm,
                text: F,
              }),
          ),
        )
      }
      var U = m(x)
      t.default = U
    },
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
        c = n('yLYC'),
        o = n('Ud88'),
        i = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        s = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        l = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, t, n) {
        i()
        var s,
          d = o(),
          f = t.fetchKey,
          p = t.fetchPolicy,
          b = t.source,
          m = t.variables,
          y = t.networkCacheConfig,
          h = c(e, m, y)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          h.request.node.params.name !== t.name && r(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: f,
              fetchObservable: l(d, h.request.identifier, function () {
                return d === t.environment && null != b
                  ? d.executeWithSource({ operation: h, source: b })
                  : d.execute({ operation: h })
              }),
              fetchPolicy: p,
              query: h,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var O = u(d, h)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != b && d === t.environment ? b.ifEmpty(O) : (t.environment, O),
            fetchKey: f,
            fetchPolicy: p,
            query: h,
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
        c = r.useRef
      e.exports = function () {
        var e = c(!0)
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
    '4BrD': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('Lsrn'),
        s = n('k/Ka')
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z',
            }),
            o.a.createElement('path', {
              d: 'M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    '5Y3x': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'monetizationSettingsQuery', function () {
          return M
        })
      var r = n('ERkP'),
        a = n.n(r),
        c = (n('enFi'), n('3XMw')),
        o = n.n(c),
        i = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        s = n.n(i),
        l = n('Lsrn'),
        u = n('k/Ka')
      function d(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var p = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(u.a)(
          'svg',
          f(
            f({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [l.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M22.856 15.271l-3.681 2.692 1.393 4.338c.06.14 0 .289-.119.379-.06.05-.129.07-.199.07-.08 0-.149-.02-.209-.07l-3.681-2.673-3.681 2.673c-.06.05-.129.07-.209.07-.07 0-.139-.02-.199-.07-.129-.09-.189-.239-.129-.379l1.393-4.338-3.671-2.692c-.119-.08-.169-.249-.129-.389.05-.15.179-.239.338-.239h4.546l1.403-4.338c.05-.15.189-.229.338-.229.139 0 .289.08.338.229l1.403 4.338h4.546c.149 0 .298.09.338.239.04.14 0 .309-.129.389zM9.421 21.94H3.217c-.699 0-1.336-.303-1.748-.83-.426-.547-.571-1.262-.397-1.961.709-2.858 3.074-5.082 6.171-5.805.399-.098.812.158.908.567.095.408-.159.815-.565.91-2.541.593-4.474 2.392-5.046 4.693-.06.245-.017.486.121.662.126.162.319.248.556.248h6.204c.418 0 .756.34.756.758s-.338.758-.756.758zm0-10.342c-1.378 0-2.918-.152-3.901-1.279-.827-.947-1.095-2.411-.819-4.473.385-2.878 2.15-4.596 4.72-4.596s4.334 1.717 4.721 4.596c.276 2.062.008 3.526-.819 4.473-.984 1.128-2.525 1.279-3.902 1.279zm0-8.826c-2.414 0-3.051 2.053-3.215 3.276-.212 1.579-.058 2.679.457 3.27.464.532 1.289.758 2.758.758s2.294-.227 2.758-.758c.514-.589.669-1.69.457-3.269-.165-1.224-.8-3.277-3.215-3.277z',
            }),
          ),
        )
      }
      p.metadata = { width: 24, height: 24 }
      var b,
        m = p,
        y = n('yoO3'),
        h = n('7FtF'),
        O = n('Ty5D'),
        g = n('n0Rl'),
        E = n('6vad'),
        v = n('0yYu'),
        w = n('OySi'),
        S = o.a.d299431b,
        j = o.a.h93824cc,
        P = o.a.a6777c1b,
        _ = o.a.c1b71878,
        k = o.a.e939cc53,
        C = o.a.ibb5e1c8,
        T = o.a.b255df58,
        D = o.a.b3f834c7,
        R = o.a.i724fb49,
        F = o.a.f66d24be,
        L = { Approved: k, NotStarted: null, Rejected: C, Submitted: T, Waitlisted: D },
        M = void 0 !== b ? b : (b = n('jN9l')),
        A = Object(g.b)(M, { errorConfig: { context: 'MONETIZATION_SETTINGS' } })
      t.default = function () {
        var e = Object(O.h)()
        return a.a.createElement(A, {
          render: function (t) {
            var n,
              r,
              c,
              o,
              i = t.data,
              s = t.error,
              l = !s && !(null == i || null === (n = i.viewer) || void 0 === n || !n.is_active_creator),
              u =
                (!s &&
                  (null == i ||
                  null === (r = i.viewer) ||
                  void 0 === r ||
                  null === (c = r.user_results) ||
                  void 0 === c ||
                  null === (o = c.result) ||
                  void 0 === o
                    ? void 0
                    : o.super_follows_application_status)) ||
                'NotStarted',
              d = l ? _ : L[u]
            return a.a.createElement(
              y.a,
              null,
              a.a.createElement(
                h.a,
                { location: e, screenType: 'primaryDetail', title: S },
                a.a.createElement(E.b, { text: j }),
                a.a.createElement(w.b, { Icon: m, description: d, label: P, link: '/settings/superfollows' }),
                a.a.createElement(v.a, null),
                a.a.createElement(E.b, { text: R }),
                a.a.createElement(w.a, { label: F, link: 'https://help.twitter.com/forms/paid-features/superfollows' }),
              ),
            )
          },
          variables: {},
        })
      }
    },
    '5ZXc': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Languages', function () {
          return L
        })
      var r = n('ERkP'),
        a = n.n(r),
        c = n('S/HT'),
        o = n('RqPI'),
        i = n('rxPX'),
        s = n('0KEI'),
        l = n('FDFL'),
        u = function (e) {
          var t = Object(o.o)(e)
          return t && Object(l.b)(e, t)
        },
        d = Object(i.a)()
          .propsFromState(function () {
            return { languageName: u, languageCode: o.o }
          })
          .propsFromActions(function () {
            return {
              fetchCountryNamesIfNeeded: c.a,
              fetchAvailableLanguagesIfNeeded: l.a,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('LANGUAGES_SCREEN'),
            }
          }),
        f = n('3XMw'),
        p = n.n(f),
        b = n('yoO3'),
        m = n('7JQg'),
        y = n('7FtF'),
        h = n('xHsv'),
        O = n('6vad'),
        g = n('csss'),
        E = n('0yYu'),
        v = p.a.d495680d,
        w = p.a.f9c98140,
        S = p.a.a4b69cbb,
        j = p.a.da3b2587,
        P = p.a.a4b69cbb,
        _ = p.a.cab61d58,
        k = p.a.f0853ba6,
        C = p.a.bca1de49,
        T = p.a.c3aa76c3,
        D = p.a.b2a77838,
        R = p.a.c3aa76c3,
        F = { page: 'settings', section: 'languages' }
      function L(e) {
        var t = e.createLocalApiErrorHandler,
          n = e.fetchAvailableLanguagesIfNeeded,
          r = e.fetchCountryNamesIfNeeded,
          c = e.languageCode,
          o = e.languageName,
          i = e.location
        return (
          a.a.useEffect(
            function () {
              c && r(c).catch(t()), n().catch(t())
            },
            [c, r, n, t],
          ),
          a.a.createElement(
            m.b,
            { namespace: F },
            a.a.createElement(
              b.a,
              null,
              a.a.createElement(
                y.a,
                { location: i, screenType: 'secondaryDetail', title: v },
                a.a.createElement(h.a, { description: w }),
                a.a.createElement(O.b, { text: S }),
                a.a.createElement(h.a, { description: j }),
                a.a.createElement(g.a, { description: o, label: P, link: '/settings/language' }),
                a.a.createElement(E.a, null),
                a.a.createElement(O.b, { text: _ }),
                a.a.createElement(h.a, { description: k }),
                a.a.createElement(g.a, { label: C, link: '/i/flow/language_selector' }),
                a.a.createElement(E.a, null),
                a.a.createElement(O.b, { text: T }),
                a.a.createElement(h.a, { description: D }),
                a.a.createElement(g.a, { label: R, link: '/settings/your_twitter_data/language' }),
              ),
            ),
          )
        )
      }
      var M = d(L)
      t.default = M
    },
    '6qBT': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return E
        })
      var r = n('ERkP'),
        a = n.n(r),
        c = n('3XMw'),
        o = n.n(c),
        i = n('yoO3'),
        s = n('7JQg'),
        l = n('7FtF'),
        u = n('MWbm'),
        d = n('xHsv'),
        f = n('csss'),
        p = o.a.cbd449af,
        b = o.a.ab125232,
        m = o.a.a5f32aa2,
        y = o.a.daef29b7,
        h = o.a.i0dd9b9d,
        O = o.a.aaafffd9,
        g = { page: 'settings', section: 'mute_and_block' }
      function E(e) {
        var t = e.location
        return a.a.createElement(
          s.b,
          { namespace: g },
          a.a.createElement(
            i.a,
            null,
            a.a.createElement(
              l.a,
              { location: t, screenType: 'secondaryDetail', title: p },
              a.a.createElement(
                u.a,
                null,
                a.a.createElement(d.a, { description: b }),
                a.a.createElement(f.a, { label: m, link: '/settings/blocked/all' }),
                a.a.createElement(f.a, { label: y, link: '/settings/muted/all' }),
                a.a.createElement(f.a, { label: h, link: '/settings/muted_keywords' }),
                a.a.createElement(f.a, { label: O, link: '/settings/notifications/advanced_filters' }),
              ),
            ),
          ),
        )
      }
    },
    '7FtF': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        h = (n('2G9S'), n('ERkP')),
        O = n.n(h),
        g = n('P1r1'),
        E = n('G6rE'),
        v = n('rxPX'),
        w = n('0KEI'),
        S = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: g.o, loggedInUser: E.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: g.f,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        j = n('v//M'),
        P = n('3XMw'),
        _ = n.n(P),
        k = n('M2mT'),
        C = 'settingsDetailSave',
        T = n('mw9i'),
        D = n('0yYu'),
        R = n('/yvb'),
        F = n('rHpw')
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var M = _.a.i2209530,
        A = (function (e) {
          u()(n, e)
          var t = L(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(s()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return O.a.createElement(j.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              y()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.onSubmit,
                  a = t.submitDisabled,
                  c = t.submitLabel,
                  o = t.submitType,
                  i = t.withMarginBottom
                return O.a.createElement(
                  T.a,
                  { style: [I.contentRoot, i && I.withMarginBottom] },
                  n,
                  r
                    ? O.a.createElement(
                        O.a.Fragment,
                        null,
                        O.a.createElement(D.a, null),
                        O.a.createElement(
                          T.a,
                          { style: I.buttonContainer },
                          O.a.createElement(R.a, { disabled: a, onPress: r, style: I.button, testID: C, type: o }, c),
                        ),
                      )
                    : null,
                )
              }),
              y()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSettingsIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            o()(n, [
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
                    n = e.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return t && t.pathname === n ? '/' : n
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUser,
                    n = e.onBackClick,
                    r = e.rightControl,
                    a = e.screenType,
                    c = e.secondaryBar,
                    o = e.title,
                    i = e.withBottomBorder,
                    s = this.getBackLocation(),
                    l = t ? '@'.concat(t.screen_name) : void 0
                  return O.a.createElement(
                    k.a,
                    {
                      backLocation: s,
                      onBackClick: n,
                      rightControl: r,
                      screenType: a,
                      secondaryBar: c,
                      showSubtitleOnWideDetail: !1,
                      subtitle: l,
                      title: o,
                      withBottomBorder: i,
                    },
                    t ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(O.a.Component)
      y()(A, 'defaultProps', { submitLabel: M, submitType: 'brandFilled', withMarginBottom: !0 })
      var I = F.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(F.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = S(A)
    },
    '899o': function (e, t, n) {
      'use strict'
      n.r(t)
      n('WNMA'), n('KqXw')
      var r,
        a = n('ERkP'),
        c = n.n(a),
        o = n('v6aA'),
        i = n('FIs5'),
        s = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        l = n.n(s),
        u = n('PnFR'),
        d = n('8UdT'),
        f = n('S/Qv'),
        p = n('5Y9N'),
        b = n('91Nr'),
        m = n('Yy//')
      function y(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var O = h(
          h({}, Object(p.a)({})),
          {},
          ((r = {}),
          l()(r, d.b.Message, Object(f.a)({})),
          l()(r, d.b.Tombstone, b.a),
          l()(r, d.b.Tweet, Object(m.a)({ displayBlocked: !0 })),
          l()(r, d.b.TimelineCursor, Object(u.a)({})),
          r),
        ),
        g = n('3XMw'),
        E = n.n(g),
        v = n('yoO3'),
        w = n('fTQJ'),
        S = n('WpDa'),
        j = n('ZNT5'),
        P = n('7JQg'),
        _ = n('7FtF'),
        k = n('TnO6'),
        C = E.a.f154bd64,
        T = { page: 'settings', component: 'autoblocked_account_tweets' },
        D = { context: 'safety_mode' },
        R = E.a.e9f1fbcb,
        F = E.a.de9b6641,
        L = function () {
          return c.a.createElement(i.a, { header: R, message: F })
        }
      t.default = function (e) {
        var t = e.history,
          n = e.location,
          r = e.match,
          a = r.params.userId,
          i = c.a.useContext(o.a).featureSwitches,
          s = c.a.useMemo(
            function () {
              return (
                (e = a),
                Object(j.a)({
                  timelineId: 'ritoActionedTweets-'.concat(e),
                  getEndpoint: function (e) {
                    return e.RitoActionedTweets.fetchRitoActionedTweets
                  },
                  getEndpointParams: function (t) {
                    var n = t.count,
                      r = t.cursor
                    return { count: n, cursor: 'string' == typeof r ? r : void 0, userId: e }
                  },
                  context: 'FETCH_RITO_ACTIONED_TWEETS_TIMELINE',
                  perfKey: 'ritoActionedTweets',
                  formatResponse: S.a,
                })
              )
              var e
            },
            [a],
          ),
          l = i.isTrue('rito_safety_mode_modal_prompt_enabled')
            ? c.a.createElement(k.b, { history: t, location: n, match: r, timelineType: k.a.ActionedTweets })
            : null
        return c.a.createElement(
          P.b,
          { data: D, namespace: T },
          c.a.createElement(
            v.a,
            null,
            c.a.createElement(
              _.a,
              { screenType: 'secondaryDetail', title: C, withMarginBottom: !1 },
              c.a.createElement(w.a, { entryConfiguration: O, footer: l, module: s, renderEmptyState: L, title: C }),
            ),
          ),
        )
      }
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'b', function () {
          return s
        }),
        n.d(t, 'd', function () {
          return l
        }),
        n.d(t, 'e', function () {
          return f
        })
      n('yH/f')
      var r = n('SrIh'),
        a = n('JbbX'),
        c = 1e3,
        o = Object.freeze({
          AcceptAllCookies: 'acceptAllCookies',
          RefuseNonEssentialCookies: 'refuseNonEssentialCookies',
          Invalid: 'invalid',
          NotSet: 'notSet',
        })
      function i(e) {
        var t = Object(a.a)(e)
        return t
          ? u(t)
            ? d(t)
              ? t[1]
                ? o.AcceptAllCookies
                : t[2]
                ? o.RefuseNonEssentialCookies
                : (Object(r.a)('Invalid consent signal state'), o.Invalid)
              : o.NotSet
            : o.Invalid
          : o.NotSet
      }
      function s(e) {
        Object(a.b)({ consent_version: 2, text_version: c, 1: !0 }, e)
      }
      function l(e) {
        Object(a.b)({ consent_version: 2, text_version: c, 2: !0 }, e)
      }
      function u(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function f(e) {
        var t = Object(a.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < c
      }
    },
    B4m3: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UndoTweetScreen', function () {
          return I
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('WNMA'), n('KqXw'), n('7x/C'), n('DZ+c'), n('z84I'), n('6U7i'), n('ERkP')),
        o = n.n(c),
        i = n('v6aA'),
        s = n('gUb7'),
        l = n('qlwE'),
        u = n('P1r1'),
        d = n('rxPX'),
        f = Object(d.a)()
          .propsFromState(function () {
            return { undoTweetSettings: l.p, userClaimsFetchStatus: s.c }
          })
          .propsFromActions(function () {
            return { updateSettings: u.L }
          })
          .withAnalytics({ page: 'settings', section: 'undo_tweet' }),
        p = n('5oBF'),
        b = n('v//M'),
        m = n('3XMw'),
        y = n.n(m),
        h = n('/de5'),
        O = n('yoO3'),
        g = n('7FtF'),
        E = n('0KEI'),
        v = n('ehR8'),
        w = n('MWbm'),
        S = n('xHsv'),
        j = n('cCdp'),
        P = n('fyvP'),
        _ = n('rHpw')
      function k(e, t) {
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
            ? k(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var T = y.a.de43eaf2,
        D = y.a.b6ab9962,
        R = y.a.jdceda6f,
        F = y.a.j45978a8,
        L = y.a.i9028824,
        M = y.a.j905e6fe,
        A = y.a.e2c39a4c
      function I(e) {
        var t = e.undoTweetSettings,
          n = e.updateSettings,
          r = e.userClaimsFetchStatus,
          c = t.durationSecs,
          s = t.original,
          l = t.quote,
          u = t.reply,
          d = Object(v.a)(),
          f = d.history,
          m = d.location,
          _ = d.match,
          k = o.a.useContext(i.a),
          I = k.featureSwitches,
          x = k.userClaims,
          U = (c || p.a).toString(),
          N = Object(E.useCreateLocalApiErrorHandler)('UNDO_TWEET_SCREEN_CONTEXT'),
          B = x.isTrueAndEnabled('subscriptions_feature_1003'),
          z = I.isTrue('subscriptions_undo_quote_tweets_enabled'),
          K = y.a.i3b7a017,
          W = [5, 10, 20, 30, 60].map(function (e) {
            return { label: K(e), value: e.toString() }
          })
        function X(e, r) {
          if ('period' !== e) {
            var c = { undoPreview: C(C({}, t), {}, a()({}, e, !t[e])) }
            n(c).catch(N({}))
          } else n({ undoPreview: C(C({}, t), {}, { durationSecs: Number(r) }) })
        }
        return o.a.createElement(b.a, {
          accessibilityLabel: L,
          fetchStatus: r,
          render: function () {
            return B
              ? o.a.createElement(
                  O.a,
                  null,
                  o.a.createElement(
                    g.a,
                    { location: m, title: T },
                    o.a.createElement(S.a, { description: A }),
                    o.a.createElement(j.a, { checked: void 0 === s || s, label: D, name: 'original', onChange: X }),
                    o.a.createElement(j.a, { checked: void 0 === u || u, label: R, name: 'reply', onChange: X }),
                    z && o.a.createElement(j.a, { checked: void 0 === l || l, label: F, name: 'quote', onChange: X }),
                    o.a.createElement(
                      w.a,
                      { style: H.radioGroup },
                      o.a.createElement(P.a, { label: M, name: 'period', onChange: X, options: W, value: U }),
                    ),
                  ),
                )
              : o.a.createElement(h.b, { history: f, location: m, match: _ })
          },
        })
      }
      var H = _.a.create(function (e) {
        return { radioGroup: { padding: e.spaces.space16 } }
      })
      t.default = f(I)
    },
    DFUC: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return Le
        })
      var r = n('97Jx'),
        a = n.n(r),
        c = (n('LW0h'), n('z84I'), n('ERkP')),
        o = n.n(c),
        i = n('v6aA'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('yoO3'),
        d = n('7JQg'),
        f = n('7FtF'),
        p = 'privacyAndSafetyScreen',
        b = n('MWbm'),
        m = n('xHsv'),
        y = n('6vad'),
        h = n('0yYu'),
        O = n('S+H3'),
        g = n('TW8A'),
        E = (n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        v = n.n(E),
        w = n('Lsrn'),
        S = n('k/Ka')
      function j(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _ = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(S.a)(
          'svg',
          P(
            P({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [w.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M19.98 1.775H4.02c-1.24 0-2.25 1.01-2.25 2.25v15.95c0 1.24 1.01 2.25 2.25 2.25h15.96c1.24 0 2.25-1.01 2.25-2.25V4.025c0-1.24-1.01-2.25-2.25-2.25zm.75 18.2c0 .42-.34.75-.75.75H4.02c-.41 0-.75-.33-.75-.75v-9.48h17.46v9.48zm0-10.23H3.27v-5.72c0-.42.34-.75.75-.75h15.96c.41 0 .75.33.75.75v5.72z',
            }),
            o.a.createElement('path', {
              d: 'M8.96 6.515v.09c0 .95-.78 1.72-1.73 1.72h-.08c-.95 0-1.73-.77-1.73-1.72v-.09c0-.95.78-1.73 1.73-1.73h.08c.95 0 1.73.78 1.73 1.73zm9.54.04c0 .42-.34.75-.75.75h-6.39c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h6.39c.41 0 .75.34.75.75zm-9.54 7.17v.09c0 .95-.78 1.73-1.73 1.73h-.08c-.95 0-1.73-.78-1.73-1.73v-.09c0-.95.78-1.72 1.73-1.72h.08c.95 0 1.73.77 1.73 1.72zm9.54.05c0 .41-.34.75-.75.75h-6.39c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h6.39c.41 0 .75.33.75.75zm0 3.6c0 .42-.34.75-.75.75h-6.39c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h6.39c.41 0 .75.34.75.75z',
            }),
          ),
        )
      }
      _.metadata = { width: 24, height: 24 }
      var k = _
      function C(e, t) {
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
            ? C(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var D = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(S.a)(
          'svg',
          T(
            T({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [w.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M21.6 3.139c-6.01-3.25-13.2-3.25-19.21 0-.24.13-.39.39-.39.66v8.58c0 8.59 9.73 10.88 9.83 10.9.05.02.11.02.17.02.05 0 .11 0 .16-.02.1-.02 9.84-2.31 9.84-10.9v-8.58c0-.27-.16-.53-.4-.66zm-1.1 9.24c0 6.9-7.27 9.08-8.5 9.4-1.24-.32-8.5-2.5-8.5-9.4v-8.13c5.35-2.73 11.64-2.73 17 0v8.13z',
            }),
            o.a.createElement('path', {
              d: 'M14.12 7.639H9.87c-1 0-1.9.4-2.56 1.06-.65.66-1.05 1.56-1.05 2.56 0 1.99 1.61 3.61 3.61 3.61h4.25c1 0 1.9-.41 2.55-1.06.66-.65 1.06-1.55 1.06-2.55 0-2-1.61-3.62-3.61-3.62zm-4.24 5.82c-1.22 0-2.2-.99-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.21-.98 2.2-2.2 2.2z',
            }),
          ),
        )
      }
      D.metadata = { width: 24, height: 24 }
      var R = D,
        F = n('qz6Z'),
        L = n('SOvA'),
        M = n('qo8F')
      function A(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var H = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(S.a)(
          'svg',
          I(
            I({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [w.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            o.a.createElement('path', {
              d: 'M11 10.57c-.572 0-1.21-.064-1.62-.53-.342-.392-.453-.998-.34-1.85.162-1.193.894-1.904 1.96-1.904 1.066 0 1.8.71 1.958 1.902.115.853.003 1.46-.34 1.85-.407.468-1.046.53-1.618.53zM13.59 15H8.41c-.292 0-.552-.124-.73-.348-.186-.236-.254-.56-.18-.87.37-1.563 1.808-2.474 3.5-2.474s3.13.91 3.5 2.474c.074.31.006.634-.18.87-.18.224-.438.348-.73.348z',
            }),
          ),
        )
      }
      H.metadata = { width: 24, height: 24 }
      var x = H,
        U = n('4BrD')
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
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(S.a)(
          'svg',
          B(
            B({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [w.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M22.52 12.78c-.17-.16-.41-.23-.65-.2-1.01.18-1.98-.29-2.5-1.17-.46-.8-.56-1.91-.2-2.52.19-.33.17-.74-.08-1.05-.2-.26-.52-.38-.84-.35-.06.01-.12.03-.17.04-1.46.45-3.02-.16-3.78-1.47-.63-1.08-.57-2.45.14-3.47.15-.21.18-.48.08-.72-.09-.24-.3-.4-.55-.45-3-.54-6.13.22-8.58 2.11-3.89 3-5.23 8.42-3.19 12.9 1.29 2.82 3.62 4.88 6.56 5.81 1.47.47 2.99.61 4.49.44 1.47-.16 2.92-.63 4.22-1.39 2.91-1.68 4.83-4.55 5.27-7.87.04-.23-.05-.47-.22-.64zM16.71 20c-2.26 1.31-4.99 1.61-7.49.82-2.53-.8-4.54-2.59-5.65-5.01-1.75-3.85-.6-8.51 2.74-11.1 1.39-1.06 3.01-1.72 4.7-1.91.55-.06 1.09-.07 1.66-.03-.5 1.31-.4 2.8.33 4.05.94 1.61 2.7 2.49 4.5 2.34-.16.96.02 2.08.58 3.02.65 1.11 1.77 1.81 3.01 1.92-.58 2.48-2.14 4.6-4.38 5.9z',
            }),
            o.a.createElement('path', {
              d: 'M13.19 12.67c-.67.18-1.36-.2-1.54-.87-.19-.67.21-1.36.88-1.54.66-.19 1.35.21 1.53.87.19.66-.21 1.35-.87 1.54zM9.83 6.48c-.53.15-1.07-.16-1.22-.69-.16-.53.16-1.09.69-1.23.53-.15 1.09.16 1.23.69.15.53-.16 1.09-.7 1.23zm-2.59 3.98c-.53.14-1.09-.17-1.23-.69-.15-.54.16-1.09.69-1.24.54-.14 1.09.17 1.23.7.16.54-.15 1.09-.69 1.23zm-.06 5.48c-.72.2-1.49-.23-1.69-.96-.21-.74.23-1.49.96-1.69.73-.21 1.48.22 1.69.96.2.73-.23 1.49-.96 1.69zm5 2.66c-.67.18-1.36-.21-1.54-.87-.19-.66.2-1.36.88-1.54.66-.19 1.35.21 1.53.87.19.66-.21 1.35-.87 1.54zm5.6-1.5c-.54.16-1.09-.15-1.24-.69-.15-.53.16-1.08.7-1.23.53-.15 1.08.17 1.23.7.15.53-.16 1.08-.69 1.22z',
            }),
          ),
        )
      }
      z.metadata = { width: 24, height: 24 }
      var K = z
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
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? W(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Q = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(S.a)(
          'svg',
          X(
            X({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [w.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M14.875 22c-.023 0-.046 0-.07-.003-.32-.03-.586-.26-.66-.574l-3.854-16.3-3.1 7.175c-.12.274-.39.452-.69.452H2.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.257L9.81 2.452c.13-.297.437-.473.755-.45.322.03.59.26.664.575l3.86 16.33 2.473-5.595c.12-.27.39-.446.686-.446h3c.413 0 .75.336.75.75s-.337.75-.75.75h-2.513l-3.177 7.188c-.12.272-.39.446-.685.446z',
            }),
          ),
        )
      }
      Q.metadata = { width: 24, height: 24 }
      var G = Q,
        V = n('aPcQ'),
        Z = n('KrGU'),
        Y = n('OySi'),
        q = l.a.cad53943,
        J = l.a.df5fa1d0,
        $ = l.a.a244ed50,
        ee = l.a.e908903a,
        te = l.a.h7a0dfbe,
        ne = l.a.b38d81ae,
        re = l.a.f8d4746b,
        ae = l.a.f2bd9c47,
        ce = l.a.b2810ee7,
        oe = l.a.f01fd982,
        ie = l.a.dcc5aa06,
        se = l.a.cbd449af,
        le = l.a.ab125232,
        ue = l.a.d4986f85,
        de = l.a.cc950d94,
        fe = l.a.ded416bf,
        pe = l.a.fe37f854,
        be = l.a.fd4d9068,
        me = l.a.ab987f3b,
        ye = l.a.d3d319d5,
        he = l.a.d035a8d0,
        Oe = l.a.f9ff2201,
        ge = l.a.d0b74a5a,
        Ee = l.a.gd4302ec,
        ve = l.a.bcae496c,
        we = l.a.acc60551,
        Se = l.a.h14ba864,
        je = l.a.d7fcc4fa,
        Pe = l.a.jabb9c9a,
        _e = l.a.a686c489,
        ke = l.a.cdcef7b6,
        Ce = l.a.a607862a,
        Te = l.a.g5925628,
        De = l.a.dd6012f7,
        Re = { page: 'settings', section: 'privacy_and_safety' },
        Fe = [
          { label: De, link: 'https://privacy.twitter.com/' },
          { label: Ce, link: 'https://twitter.com/en/privacy' },
          { label: Te, link: 'https://help.twitter.com/forms/privacy' },
        ]
      function Le(e) {
        var t,
          n,
          r,
          c = e.location,
          s = o.a.useContext(i.a).featureSwitches,
          l = s.isTrue('rito_safety_mode_settings_enabled'),
          E = s.isTrue('voice_rooms_sharing_listening_data_with_followers_setting_enabled'),
          v = s.isTrue('responsive_web_cookie_compliance_banner_enabled')
        return o.a.createElement(
          d.b,
          { namespace: Re },
          o.a.createElement(
            u.a,
            null,
            o.a.createElement(
              f.a,
              { location: c, screenType: 'primaryDetail', title: q },
              o.a.createElement(
                b.a,
                { testID: p },
                o.a.createElement(m.a, { description: J }),
                o.a.createElement(y.b, { text: $ }),
                (function (e) {
                  var t = e.includeSafetyMode,
                    n = void 0 !== t && t,
                    r = e.includeSpacesSection
                  return [
                    { label: ee, description: te, link: '/settings/audience_and_tagging', Icon: O.a },
                    { label: ne, description: re, link: '/settings/your_tweets', Icon: g.a },
                    { label: ae, description: ce, link: '/settings/content_you_see', Icon: k },
                    n ? { label: oe, description: ie, link: '/settings/safety_mode', Icon: R } : void 0,
                    { label: se, description: le, link: '/settings/mute_and_block', Icon: F.a },
                    { label: ue, description: de, link: '/settings/direct_messages', Icon: L.a },
                    r ? { label: fe, description: pe, link: '/settings/spaces', Icon: M.a } : void 0,
                    { label: be, description: me, link: '/settings/contacts', Icon: x },
                  ].filter(Boolean)
                })({ includeSafetyMode: l, includeSpacesSection: E }).map(function (e) {
                  return o.a.createElement(Y.b, a()({}, e, { key: e.label }))
                }),
                o.a.createElement(h.a, null),
                o.a.createElement(y.b, { text: ye }),
                ((t = { includeCookiePreferences: v }),
                (n = t.includeCookiePreferences),
                (r = void 0 !== n && n),
                [
                  { label: he, description: Oe, link: '/settings/ads_preferences', Icon: U.a },
                  r ? { label: ge, description: Ee, link: '/settings/cookie_preferences', Icon: K } : void 0,
                  { label: ve, description: we, link: '/settings/off_twitter_activity', Icon: G },
                  { label: Se, description: je, link: '/settings/data_sharing_with_business_partners', Icon: V.a },
                  { label: Pe, description: _e, link: '/settings/location_information', Icon: Z.a },
                ].filter(Boolean)).map(function (e) {
                  return o.a.createElement(Y.b, a()({}, e, { key: e.label }))
                }),
                o.a.createElement(h.a, null),
                o.a.createElement(y.b, { text: ke }),
                Fe.map(function (e) {
                  return o.a.createElement(Y.a, a()({}, e, { key: e.label }))
                }),
              ),
            ),
          ),
        )
      }
    },
    DbkT: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return U
        })
      var r = n('97Jx'),
        a = n.n(r),
        c = (n('z84I'), n('ERkP')),
        o = n.n(c),
        i = n('3XMw'),
        s = n.n(i),
        l = n('yoO3'),
        u = n('7JQg'),
        d = n('xHsv'),
        f = n('7FtF'),
        p = n('OySi'),
        b = 'accessibilityScreen',
        m = n('MWbm'),
        y = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        h = n.n(y),
        O = n('Lsrn'),
        g = n('k/Ka')
      function E(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(g.a)(
          'svg',
          v(
            v({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [O.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M3.194 12.223l-.03-.03.02-.01c.01.01.01.02.01.04zm4.82-7.21c-.12.05-.22.13-.3.23l-.06-.06c.12-.07.24-.12.36-.17z',
            }),
            o.a.createElement('path', {
              d: 'M22.194 12.763c0 .01-.01.03-.03.06-.16.36-1.06 2.26-2.88 3.99l-.46-.46-.59-.63c1.67-1.56 2.47-3.29 2.57-3.52 0-.01.01-.02.01-.02.01-.02.02-.05.03-.07.04-.08.04-.17 0-.25-.14-.31-2.66-6.12-8.85-6.12-1.13 0-2.2.19-3.2.58l-.03-.03-1.05-1.05c.08-.1.18-.18.3-.23 1.25-.51 2.58-.77 3.98-.77 7.2 0 10.08 6.69 10.2 6.98.24.44.25 1.03 0 1.54zm-18.98-.52l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06z',
            }),
            o.a.createElement('path', {
              d: 'M19.284 16.813c-.01 0-.01 0-.02.01l-.44-.47.46.46zm2.83 4.24l-3.59-3.59-2.95-2.95-6.09-6.09-1.66-1.66-4.88-4.88c-.3-.3-.77-.29-1.06 0-.22.21-.28.53-.17.8.01.03.02.06.04.08.03.05.07.1.1.14.01.01.02.03.03.04l3.58 3.58c-2.51 1.99-3.6 4.54-3.63 4.63-.27.51-.28 1.1-.04 1.61 0 .01.01.03.03.06.32.73 3.25 6.92 10.17 6.92 1.91 0 3.68-.47 5.27-1.41h.01l3.78 3.78c.29.3.77.3 1.06 0 .15-.14.22-.33.22-.53 0-.19-.07-.38-.22-.53zm-18.9-8.81l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06l5.33 5.33c-3.5-1.47-5.11-4.83-5.33-5.33zm8.78 6c-.3 0-.6-.01-.88-.05-1.33-1.44-4.01-4.19-4.12-4.3l-3.21-3.2c.21-.35.49-.76.84-1.19l8.64 8.64c-.41.07-.84.1-1.27.1zm2.98-.51l-9.35-9.35c.28-.27.59-.54.92-.78l9.61 9.62c-.38.21-.78.38-1.18.51zm1.4-5.73c0 .56-.11 1.1-.31 1.59-.12.33-.29.64-.49.92l-6.09-6.09c.28-.2.59-.37.92-.49.5-.2 1.03-.31 1.59-.31.39 0 .77.05 1.13.16-.47.4-.77.99-.77 1.66 0 .18.02.35.07.51.18.8.81 1.43 1.62 1.62.16.04.33.06.5.06.67 0 1.27-.3 1.67-.78.11.37.16.75.16 1.15z',
            }),
            o.a.createElement('path', { d: 'M3.214 12.243l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06z' }),
          ),
        )
      }
      w.metadata = { width: 24, height: 24 }
      var S = w,
        j = n('tuke'),
        P = n('Zg3A'),
        _ = n('xrkw'),
        k = s.a.f2b23061,
        C = s.a.jf907f5b,
        T = s.a.e3719c15,
        D = s.a.f371a361,
        R = s.a.c4881c66,
        F = s.a.a5ce82a4,
        L = s.a.d495680d,
        M = s.a.f9c98140,
        A = s.a.eafe3287,
        I = s.a.d76fe4fc,
        H = [
          { label: T, description: D, link: '/settings/accessibility', Icon: S },
          { label: R, description: F, link: '/settings/display', Icon: j.a },
          { label: L, description: M, link: '/settings/languages', Icon: P.a },
          { label: A, description: I, link: '/settings/data', Icon: _.a },
        ],
        x = { page: 'settings', section: 'accessibility_display_and_languages' }
      function U(e) {
        var t = e.location
        return o.a.createElement(
          u.b,
          { namespace: x },
          o.a.createElement(
            l.a,
            null,
            o.a.createElement(
              f.a,
              { location: t, screenType: 'primaryDetail', title: k },
              o.a.createElement(
                m.a,
                { testID: b },
                o.a.createElement(d.a, { description: C }),
                H.map(function (e) {
                  return o.a.createElement(p.b, a()({}, e, { key: e.label }))
                }),
              ),
            ),
          ),
        )
      }
    },
    E8tr: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return E
        })
      var r = n('ERkP'),
        a = n.n(r),
        c = n('3XMw'),
        o = n.n(c),
        i = n('yoO3'),
        s = n('7JQg'),
        l = n('7FtF'),
        u = n('MWbm'),
        d = n('xHsv'),
        f = n('csss'),
        p = o.a.ae72d4c4,
        b = o.a.g2841de4,
        m = o.a.jc02ae67,
        y = o.a.dd823129,
        h = o.a.b523ecc5,
        O = o.a.hc36dbba,
        g = { page: 'settings', section: 'apps_and_sessions' }
      function E(e) {
        var t = e.location
        return a.a.createElement(
          s.b,
          { namespace: g },
          a.a.createElement(
            i.a,
            null,
            a.a.createElement(
              l.a,
              { location: t, screenType: 'secondaryDetail', title: p },
              a.a.createElement(
                u.a,
                null,
                a.a.createElement(d.a, { description: b }),
                a.a.createElement(f.a, { label: m, link: '/settings/connected_apps' }),
                a.a.createElement(f.a, { label: y, link: '/settings/sessions' }),
                a.a.createElement(f.a, { label: h, link: '/settings/your_twitter_data/login_history' }),
                a.a.createElement(f.a, { label: O, link: '/settings/your_twitter_data/devices' }),
              ),
            ),
          ),
        )
      }
    },
    EAH3: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return v
        })
      n('2G9S')
      var r = n('ERkP'),
        a = n.n(r),
        c = n('jHSc'),
        o = n('3XMw'),
        i = n.n(o),
        s = n('Irs7'),
        l = n('MWbm'),
        u = n('cHvH'),
        d = n('Wd7d'),
        f = n('t62R'),
        p = n('rHpw'),
        b = i.a.g0cba83f,
        m = i.a.b92fa3be,
        y = i.a.d45866f3,
        h = i.a.e83ecbf6,
        O = i.a.ha597018,
        g = i.a.bcb2afc3,
        E = i.a.bff84f29
      function v(e) {
        var t = e.history,
          n = Object(s.b)()
        return (
          a.a.useEffect(
            function () {
              n.scribe({ page: 'settings', section: 'safety_mode', component: 'education_sheet', action: 'impression' })
            },
            [n],
          ),
          a.a.createElement(u.a, null, function (e) {
            var n = e.screenWidth
            return a.a.createElement(
              c.b,
              { backButtonType: 'back', history: t, withBottomBorder: !1 },
              a.a.createElement(
                l.a,
                { style: d.a.isNarrowScreenWidth(n) ? w.narrowScreen : w.wideScreen },
                a.a.createElement(
                  l.a,
                  { style: [w.item, w.title] },
                  a.a.createElement(f.b, { size: 'title4', weight: 'heavy' }, b),
                ),
                a.a.createElement(
                  l.a,
                  { style: w.item },
                  a.a.createElement(f.b, { style: w.heading, weight: 'bold' }, m),
                  a.a.createElement(f.b, { size: 'body' }, y),
                ),
                a.a.createElement(
                  l.a,
                  { style: w.item },
                  a.a.createElement(f.b, { style: w.heading, weight: 'bold' }, h),
                  a.a.createElement(f.b, { size: 'body' }, O),
                ),
                a.a.createElement(
                  l.a,
                  { style: w.item },
                  a.a.createElement(f.b, { style: w.heading, weight: 'bold' }, g),
                  a.a.createElement(f.b, { size: 'body' }, E),
                ),
              ),
            )
          })
        )
      }
      var w = p.a.create(function (e) {
        return {
          wideScreen: { marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space80 },
          narrowScreen: {
            paddingBottom: 'calc('.concat(e.spaces.space32, ' + ').concat(p.a.iPhoneOffsetBottom, ')'),
            marginHorizontal: e.spaces.space32,
          },
          item: { paddingBottom: e.spaces.space24 },
          title: { paddingTop: e.spaces.space24 },
          heading: { paddingBottom: e.spaces.space8 },
        }
      })
    },
    KPFR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'T1LabsScreen', function () {
          return P
        })
      n('z84I')
      var r = n('ERkP'),
        a = n.n(r),
        c = n('v6aA'),
        o = n('gUb7'),
        i = n('rxPX'),
        s = Object(i.a)()
          .propsFromState(function () {
            return { userClaimsFetchStatus: o.c }
          })
          .withAnalytics({ page: 'settings', section: 't1_labs' }),
        l = n('v//M'),
        u = n('3XMw'),
        d = n.n(u),
        f = n('yoO3'),
        p = n('7FtF'),
        b = n('Ty5D'),
        m = n('xHsv'),
        y = n('0yYu'),
        h = n('o1YB'),
        O = d.a.f6e88161,
        g = d.a.i9028824,
        E = d.a.e4972a1a,
        v = d.a.e4b3f520,
        w = d.a.db8346ee,
        S = d.a.a99d8e60,
        j = d.a.fb00a8ee
      function P(e) {
        var t = e.userClaimsFetchStatus,
          n = Object(b.h)(),
          r = a.a.useContext(c.a),
          o = r.featureSwitches,
          i = r.userClaims,
          s = i.isTrueAndEnabled('subscriptions_feature_labs_1001'),
          u = i.isTrueAndEnabled('subscriptions_long_video_upload'),
          d = o.isTrue('dm_conversation_labels_pinned_enabled'),
          P = [
            { label: v, subtext: w, shouldRender: s && !d },
            { label: S, subtext: j, shouldRender: u },
          ]
        return a.a.createElement(l.a, {
          accessibilityLabel: g,
          fetchStatus: t,
          render: function () {
            return a.a.createElement(
              f.a,
              null,
              a.a.createElement(
                p.a,
                { location: n, title: O },
                a.a.createElement(m.a, { description: E }),
                a.a.createElement(y.a, null),
                P.map(function (e) {
                  var t = e.label,
                    n = e.shouldRender,
                    r = e.subtext
                  return n ? a.a.createElement(h.a, { key: t, label: t, subtext: r }) : null
                }),
              ),
            )
          },
        })
      }
      t.default = s(P)
    },
    LtDK: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SpacesSettingsScreen', function () {
          return v
        })
      n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('1t7P'), n('jQ/y'), n('ERkP')),
        o = n.n(c),
        i = n('tM6R'),
        s = n('P1r1'),
        l = n('rxPX'),
        u = Object(l.a)()
          .propsFromState(function () {
            return { sharingAudiospacesListeningDataWithFollowersEnabled: s.z }
          })
          .propsFromActions(function () {
            return { updateSharingAudiospacesListeningDataWithFollowersSetting: s.M }
          })
          .withAnalytics({ page: 'settings' }),
        d = n('3XMw'),
        f = n.n(d),
        p = n('yoO3'),
        b = n('7FtF'),
        m = n('k89r'),
        y = n('xHsv'),
        h = n('cCdp')
      function O(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var E = { page: 'settings' }
      function v(e) {
        var t = e.location,
          n = e.sharingAudiospacesListeningDataWithFollowersEnabled,
          r = e.updateSharingAudiospacesListeningDataWithFollowersSetting,
          a = Object(m.a)()
        return o.a.createElement(
          p.a,
          null,
          o.a.createElement(
            b.a,
            { location: t, screenType: 'secondaryDetail', title: w.screen.title },
            o.a.createElement(y.a, { description: w.screen.description }),
            o.a.createElement(h.a, {
              checked: n,
              helpText: w.audiospaceListeningTransparency.help,
              label: w.audiospaceListeningTransparency.label,
              learnMoreLink: i.a.help,
              name: 'ext_sharing_audiospaces_listening_data_with_followers',
              onChange: function (e, t) {
                r(t),
                  a.scribe(
                    g(
                      g({}, E),
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
      var w = {
          screen: { title: f.a.ded416bf, description: f.a.fe37f854 },
          audiospaceListeningTransparency: { label: f.a.j3d2cfc4, help: f.a.d9588ae6 },
        },
        S = u(v)
      t.default = S
    },
    M2mT: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('m3Bd'),
        a = n.n(r),
        c = n('VrFO'),
        o = n.n(c),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        p = n('N+ot'),
        b = n.n(p),
        m = n('AuHH'),
        y = n.n(m),
        h = n('KEM+'),
        O = n.n(h),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        E = n('ERkP'),
        v = n.n(E),
        w = n('HPNB'),
        S = n('VAZu'),
        j = n('wiP2'),
        P = n('Es6L'),
        _ = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
      function k(e, t) {
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
            ? k(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var T = _.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: C(C({}, _.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        D = n('MWbm'),
        R = n('yw4N'),
        F = n('TnY3'),
        L = n('cHvH'),
        M = n('3xLC')
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return b()(this, n)
        }
      }
      var I = (function (e) {
        f()(n, e)
        var t = A(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            O()(u()(e), '_renderChildren', function () {
              var t = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? v.a.createElement(
                    D.a,
                    { style: T.fill },
                    v.a.createElement(R.a, { style: T.viewportView }, e._renderInlineNav({ isTwoColumnLayout: !0 }), t),
                  )
                : t
            }),
            e
          )
        }
        return (
          s()(n, [
            {
              key: 'render',
              value: function () {
                var e = this
                return v.a.createElement(L.a, null, function (t) {
                  var n = t.windowWidth
                  return w.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                })
              },
            },
            {
              key: '_renderForOneColumnLayout',
              value: function () {
                var e = this.props,
                  t = e.children,
                  n =
                    (e.leftControl,
                    e.screenType,
                    e.showSubtitleOnRoot,
                    e.showSubtitleOnWideDetail,
                    e.withBottomBorder,
                    e.withDetailOpen,
                    a()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  Object(P.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : v.a.createElement(j.a.Configure, n),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this.context.rootDetailPerColumnScroll
                return v.a.createElement(
                  v.a.Fragment,
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
                  n = this.props,
                  r = n.SideNavButton,
                  a = n.TabBar,
                  c = n.TeamsSwitcher,
                  o = n.backLocation,
                  i = n.documentTitle,
                  s = n.headerless,
                  l = n.history,
                  u = n.leftControl,
                  d = n.middleControl,
                  f = n.onBackClick,
                  p = n.rightControl,
                  b = n.screenType,
                  m = n.searchBoxOptions,
                  y = n.secondaryBar,
                  h = n.showSubtitleOnRoot,
                  O = n.showSubtitleOnWideDetail,
                  E = n.subtitle,
                  w = n.title,
                  P = n.titleIconCell,
                  _ = n.titleIconCellSize,
                  k = n.withBottomBorder,
                  C = n.withDetailOpen,
                  R = n.withSearchBox,
                  F = n.withTweetButton,
                  L = 'root' === b,
                  M = 'secondaryRoot' === b,
                  A = 'primaryDetail' === b,
                  I = (A && O) || (L && h),
                  H = L || (A && t),
                  x = L ? g.c : A ? g.a : void 0,
                  U = v.a.createElement(
                    D.a,
                    { style: T.appBarContainer },
                    v.a.createElement(S.a, {
                      backLocation: o,
                      fixed: !1,
                      hideBackButton: H,
                      history: l,
                      leftControl: u,
                      middleControl: d,
                      onBackClick: f,
                      rightControl: p,
                      secondaryBar: y,
                      subtitle: I ? E : void 0,
                      title: w,
                      titleDomId: x,
                      titleIconCell: P,
                      titleIconCellSize: _,
                      withBottomBorder: k,
                    }),
                  ),
                  N =
                    L || (M && C)
                      ? null
                      : v.a.createElement(j.a.Configure, {
                          SideNavButton: r,
                          TabBar: a,
                          TeamsSwitcher: c,
                          backLocation: o,
                          documentTitle: i,
                          headerless: s,
                          middleControl: d,
                          onBackClick: f,
                          rightControl: p,
                          searchBoxOptions: m,
                          subtitle: E,
                          title: w,
                          withSearchBox: R,
                          withTweetButton: F,
                        })
                return v.a.createElement(v.a.Fragment, null, N, U)
              },
            },
          ]),
          n
        )
      })(v.a.Component)
      O()(I, 'contextType', M.a),
        O()(I, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(F.a)(I)
    },
    OsOl: function (e, t, n) {
      'use strict'
      n('z84I'), n('Blm6'), n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        c = n('wsOx'),
        o = n('rxPX'),
        i = n('0KEI'),
        s = Object(o.a)()
          .propsFromState(function () {
            return { fetchSettingsFetchStatus: c.b, updateSettingsFetchStatus: c.d, safetyModeSettings: c.c }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchSettingsFetchStatus,
              n = e.safetyModeSettings,
              r = e.updateSettingsFetchStatus
            return {
              enabled: n.enabled,
              expiration: n.expiration,
              fetchSettingsFetchStatus: t,
              updateSettingsFetchStatus: r,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(i.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSafetyModeSettings: c.a,
              updateSafetyModeSettings: c.e,
            }
          })
          .withAnalytics(),
        l = n('v//M'),
        u = n('3XMw'),
        d = n.n(u),
        f = n('tuLS'),
        p = n('fs1G'),
        b = n('MWbm'),
        m = n('mjJ+'),
        y = n('t62R'),
        h = n('CK8+'),
        O = n('rHpw'),
        g = d.a.c6cb90eb,
        E = d.a.a37e9b09,
        v = d.a.ccafffde,
        w = d.a.j2e184d8,
        S = d.a.fc638aa2,
        j = d.a.d94b2246,
        P = d.a.bfea13ab,
        _ = d.a.fc209bb7,
        k = d.a.ee95bb8d,
        C = [
          { label: v, value: 'OneDay' },
          { label: w, value: 'ThreeDays' },
          { label: S, value: 'SevenDays' },
        ]
      var T = s(function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.enabled,
            r = e.expiration,
            c = e.fetchSafetyModeSettings,
            o = e.fetchSettingsFetchStatus,
            i = e.updateSafetyModeSettings,
            s = e.withBorder,
            u = a.a.useCallback(
              function () {
                c().catch(function (e) {
                  t({ showToast: !0 })(e)
                })
              },
              [c, t],
            )
          a.a.useEffect(
            function () {
              u()
            },
            [u],
          )
          var d = e.analytics
          a.a.useEffect(
            function () {
              d.scribe({ action: 'impression' })
            },
            [d],
          )
          var O = function () {
              d.scribe({ action: 'click', element: 'disabled' }),
                i('none')
                  .then(function () {
                    return u()
                  })
                  .catch(function (e) {
                    t({ showToast: !0, defaultToast: { text: P } })(e)
                  })
            },
            v = function () {
              return function (e) {
                var n = C.map(function (e) {
                  return {
                    text: e.label,
                    onClick: function () {
                      return (function (e) {
                        d.scribe({ action: 'click', element: 'enabled' }),
                          ('OneDay' !== e.value && 'ThreeDays' !== e.value && 'SevenDays' !== e.value) ||
                            (d.scribe({ action: 'click', component: 'duration', element: e.value }),
                            i(e.value)
                              .then(function () {
                                return u()
                              })
                              .catch(function (e) {
                                t({ showToast: !0, defaultToast: { text: P } })(e)
                              }))
                      })(e)
                    },
                  }
                })
                return a.a.createElement(m.a, { items: n, onCloseRequested: e })
              }
            }
          return a.a.createElement(l.a, {
            fetchStatus: o,
            onRequestRetry: u,
            render: function () {
              var e = new Date(parseInt(r, 10))
              return a.a.createElement(
                b.a,
                { style: s && D.border },
                a.a.createElement(
                  b.a,
                  { style: D.safetyModeToggleContainer },
                  a.a.createElement(y.b, { color: 'normal' }, g),
                  n
                    ? a.a.createElement(h.a, { onValueChange: O, value: n })
                    : a.a.createElement(
                        f.a,
                        { accessibilityLabel: g, renderMenu: v() },
                        a.a.createElement(h.a, { onValueChange: p.a, value: n }),
                      ),
                ),
                a.a.createElement(
                  b.a,
                  { style: D.safetyModeDescriptionContainer },
                  n && r
                    ? a.a.createElement(
                        y.b,
                        { color: 'gray700', size: 'subtext2', style: D.safetyModeExpiration },
                        (function (e, t) {
                          return Math.floor(Math.abs((t || Date.now()) - e) / 36e5) <= 1
                        })(e)
                          ? j
                          : k({ date: _(e) }),
                      )
                    : null,
                  a.a.createElement(y.b, { color: 'gray700', size: 'subtext2', style: D.settingDescription }, E),
                ),
              )
            },
          })
        }),
        D =
          ((t.a = T),
          O.a.create(function (e) {
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
    Ryu4: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AudienceAndTagging', function () {
          return x
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('ddV6'),
        a = n.n(r),
        c = n('KEM+'),
        o = n.n(c),
        i = n('ERkP'),
        s = n.n(i),
        l = n('v6aA'),
        u = n('P1r1'),
        d = n('li/m'),
        f = n('G6rE'),
        p = n('rxPX'),
        b = n('0KEI'),
        m = Object(p.a)()
          .propsFromState(function () {
            return { settings: u.g, hasCommunityMemberships: d.d }
          })
          .adjustStateProps(function (e) {
            var t = e.hasCommunityMemberships,
              n = e.settings
            return {
              protectedEnabled: n.protected,
              allowMediaTagging: n.allow_media_tagging,
              hasCommunityMemberships: t,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(
                'AUDIENCE_AND_TAGGING_SCREEN',
              ),
              patchUser: f.e.patchUser,
              updateSettings: u.L,
            }
          }),
        y = n('3XMw'),
        h = n.n(y),
        O = n('yoO3'),
        g = n('7JQg'),
        E = n('7FtF'),
        v = n('k89r'),
        w = n('xHsv'),
        S = n('cCdp'),
        j = n('csss'),
        P = n('eb3s')
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
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var C = h.a.e908903a,
        T = h.a.h7a0dfbe,
        D = h.a.f5e59e90,
        R = h.a.e860ff84,
        F = { headline: h.a.j8bf07ab, text: h.a.ca8034b3, confirmButtonLabel: h.a.c5d4192a },
        L = { headline: h.a.gea6cc19, text: h.a.j7fc0afc, confirmButtonLabel: h.a.f527b322 },
        M = h.a.f56d108e,
        A = { all: h.a.d165c992, following: h.a.ea339390, none: h.a.e3a761ee },
        I = { page: 'settings', section: 'audience_and_tagging' }
      function H(e, t, n, r) {
        var c = s.a.useState(!1),
          o = a()(c, 2),
          i = o[0],
          u = o[1],
          d = (function (e, t, n, r) {
            var a = s.a.useContext(l.a).loggedInUserId,
              c = Object(v.a)()
            return {
              setEnabled: function (t) {
                r({ protected: t })
                  .then(function () {
                    c.scribe(k(k({}, I), {}, { element: 'protected', action: t ? 'enable' : 'disable' })),
                      a && n(a, { protected: t })
                  })
                  .catch(e())
              },
            }
          })(e, 0, n, r)
        return {
          showConfirmation: i,
          _handleChanged: function (e, t) {
            t ? u(!0) : d.setEnabled(!1)
          },
          _handleConfirmationCancel: function () {
            u(!1)
          },
          _handleConfirmationConfirm: function () {
            u(!1), d.setEnabled(!0)
          },
        }
      }
      function x(e) {
        var t = e.allowMediaTagging,
          n = e.createLocalApiErrorHandler,
          r = e.hasCommunityMemberships,
          a = e.location,
          c = e.patchUser,
          o = e.protectedEnabled,
          i = H(n, 0, c, e.updateSettings),
          l = A[t],
          u = r ? L : F
        return s.a.createElement(
          g.b,
          { namespace: I },
          s.a.createElement(
            O.a,
            null,
            s.a.createElement(
              E.a,
              { location: a, screenType: 'secondaryDetail', title: C },
              s.a.createElement(w.a, { description: T }),
              s.a.createElement(S.a, {
                checked: o,
                helpText: R,
                label: D,
                learnMoreLink: 'https://help.twitter.com/safety-and-security/public-and-protected-tweets',
                name: 'protected',
                onChange: i._handleChanged,
              }),
              s.a.createElement(j.a, { description: l, label: M, link: '/settings/tagging' }),
            ),
            i.showConfirmation
              ? s.a.createElement(P.a, {
                  confirmButtonLabel: u.confirmButtonLabel,
                  confirmButtonType: 'primary',
                  headline: u.headline,
                  onCancel: i._handleConfirmationCancel,
                  onConfirm: i._handleConfirmationConfirm,
                  text: u.text,
                })
              : null,
          ),
        )
      }
      var U = m(x)
      t.default = U
    },
    'S+H3': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('Lsrn'),
        s = n('k/Ka')
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    TnO6: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      })
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('yH/f'), n('ERkP')),
        o = n.n(c),
        i = n('EbOo'),
        s = n('EPsT'),
        l = (n('WNMA'), n('KqXw'), n('1YZw')),
        u = n('118N'),
        d = n('G6rE'),
        f = n('rxPX'),
        p = n('0KEI'),
        b = function (e, t) {
          var n
          return null === (n = t.match) || void 0 === n ? void 0 : n.params.userId
        },
        m = function (e, t) {
          return d.e.select(e, b(0, t))
        },
        y = Object(f.a)()
          .propsFromState(function () {
            return { user: m, userId: b }
          })
          .adjustStateProps(function (e) {
            var t = e.user,
              n = e.userId
            return {
              violatorScreenName: (null == t ? void 0 : t.screen_name) || '',
              violatorUserId: (null == t ? void 0 : t.id_str) || '',
              userId: n || '',
            }
          })
          .propsFromActions(function () {
            return {
              addToast: l.b,
              block: d.e.block,
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'RITO_TIMELINE_ACTION_BUTTONS_CONTEXT',
              ),
              fetchOneUserIfNeeded: d.e.fetchOneIfNeeded,
              dismissRitoSuggestedAction: u.b,
              unblock: d.e.unblock,
            }
          })
          .withAnalytics({ component: 'safety_mode_timeline_action_buttons' }),
        h = n('3XMw'),
        O = n.n(h),
        g = n('u0B7'),
        E = n('0yYu'),
        v = n('jtO7'),
        w = n('24HD'),
        S = O.a.cd702bc3,
        j = O.a.ebd2abb2,
        P = O.a.f2f4d0e7,
        _ = O.a.jcba15d2,
        k = O.a.e1f2f8bd,
        C = O.a.e68b09b4,
        T = O.a.hc676c4a,
        D = O.a.badf3f34,
        R = O.a.ca95bd23,
        F = O.a.bbe47125,
        L = '/settings/safety_mode/autoblocked',
        M = '/i/safety_mode/flagged_accounts',
        A = Object.freeze({ ActionedTweets: 'actioned_tweets', PreviewFlaggedTweets: 'preview_flagged_tweets' }),
        I = Object.freeze({
          report: { component: 'user_action', action: 'report' },
          block: { action: 'block' },
          unblock: { action: 'unblock' },
        })
      function H(e) {
        var t,
          n = e.addToast,
          r = e.analytics,
          c = e.createLocalApiErrorHandler,
          i = e.dismissRitoSuggestedAction,
          l = e.history,
          u = e.timelineType,
          d = e.unblock,
          f = e.violatorScreenName,
          p = e.violatorUserId,
          b = Object.freeze(
            ((t = {}),
            a()(t, A.ActionedTweets, {
              backLocation: L,
              confirmationSheetHeadline: Object(w.e)({ screenName: f }),
              label: _,
              toastLabel: R({ screenName: f }),
            }),
            a()(t, A.PreviewFlaggedTweets, {
              backLocation: M,
              confirmationSheetHeadline: k({ screenName: f }),
              label: P,
              toastLabel: D({ screenName: f }),
            }),
            t),
          )
        return o.a.createElement(s.a, {
          color: 'primary',
          confirmationSheetConfirmButtonLabel: C,
          confirmationSheetHeadline: b[u].confirmationSheetHeadline,
          confirmationSheetText: F,
          label: b[u].label,
          onConfirmationSheetConfirm: function () {
            u === A.ActionedTweets
              ? d(p)
                  .then(function () {
                    r.scribe(I.unblock), n({ text: b[u].toastLabel }), l.goBack({ backLocation: b[u].backLocation })
                  })
                  .catch(c(g.a))
              : i(p)
                  .then(function () {
                    r.scribe(I.unblock), n({ text: b[u].toastLabel }), l.goBack({ backLocation: b[u].backLocation })
                  })
                  .catch(c(g.a))
          },
          withBottomBorder: !0,
        })
      }
      function x(e) {
        var t = e.analytics,
          n = e.violatorUserId,
          r = {
            pathname: '/i/report/user/'.concat(n),
            state: { clientReferer: window.location.pathname, scribeNamespace: t.contextualScribeNamespace },
          }
        return o.a.createElement(v.a, {
          color: 'primary',
          label: S,
          link: r,
          onPress: function () {
            t.scribe(I.report)
          },
        })
      }
      function U(e) {
        var t = e.addToast,
          n = e.analytics,
          r = e.block,
          a = e.createLocalApiErrorHandler,
          c = e.history,
          l = e.timelineType,
          u = e.unblock,
          d = e.violatorScreenName,
          f = e.violatorUserId,
          p = l === A.ActionedTweets ? L : M,
          b = function () {
            u(f).catch(a(g.a)), n.scribe(I.unblock)
          }
        return o.a.createElement(s.a, {
          color: 'red500',
          confirmationSheetConfirmButtonLabel: w.a,
          confirmationSheetConfirmButtonType: 'destructiveFilled',
          confirmationSheetHeadline: Object(w.c)({ screenName: d }),
          confirmationSheetText: Object(w.b)({ screenName: d }),
          label: j,
          onConfirmationSheetConfirm: function () {
            r(f)
              .then(function () {
                n.scribe(I.block),
                  t({ action: { label: w.l, onAction: b }, text: T({ screenName: d }) }),
                  c.goBack({ backLocation: p })
              })
              .catch(a(i.a))
          },
        })
      }
      t.b = y(function (e) {
        var t = e.createLocalApiErrorHandler,
          n = e.fetchOneUserIfNeeded,
          r = e.userId,
          a = e.violatorScreenName,
          c = e.violatorUserId
        return (
          o.a.useEffect(
            function () {
              r && n(r).catch(t())
            },
            [r, n, t],
          ),
          '' === a || '' === c
            ? null
            : o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(E.a, null),
                o.a.createElement(x, e),
                o.a.createElement(H, e),
                o.a.createElement(U, e),
              )
        )
      })
    },
    UQuz: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LocationInformation', function () {
          return R
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('v6aA'),
        s = n('NeAX'),
        l = n('rxPX'),
        u = n('0KEI'),
        d = Object(l.a)()
          .propsFromState(function () {
            return { settings: s.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowLocationHistoryUseEnabled: e.settings.allowLocationHistoryUse }
          })
          .propsFromActions(function () {
            return {
              updateSettings: s.updateSettings,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(
                'LOCATION_INFORMATION_SCREEN',
              ),
            }
          }),
        f = n('3XMw'),
        p = n.n(f),
        b = n('yoO3'),
        m = n('7JQg'),
        y = n('7FtF'),
        h = n('k89r'),
        O = n('xHsv'),
        g = n('cCdp'),
        E = n('csss')
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = p.a.jabb9c9a,
        j = p.a.a686c489,
        P = p.a.dc20d917,
        _ = p.a.cb2ed998,
        k = p.a.d9138165,
        C = p.a.eb029cab,
        T = p.a.j018f2a1,
        D = { page: 'settings', section: 'location_information' }
      function R(e) {
        var t = e.allowLocationHistoryUseEnabled,
          n = e.createLocalApiErrorHandler,
          r = e.location,
          c = e.updateSettings,
          s = Object(h.a)(),
          l = o.a.useContext(i.a)
        return o.a.createElement(
          m.b,
          { namespace: D },
          o.a.createElement(
            b.a,
            null,
            o.a.createElement(
              y.a,
              { location: r, screenType: 'secondaryDetail', title: S },
              o.a.createElement(O.a, { description: j }),
              l &&
                o.a.createElement(g.a, {
                  checked: t,
                  helpText: _,
                  label: P,
                  name: 'allowLocationHistoryUse',
                  onChange: function (e, t) {
                    s.scribe(w(w({}, D), {}, { element: e, action: t ? 'enable' : 'disable' })),
                      c(a()({}, e, t)).catch(n())
                  },
                }),
              o.a.createElement(E.a, { label: k, link: '/settings/your_twitter_data/locations' }),
              o.a.createElement(E.a, { label: C, link: '/settings/location' }),
              o.a.createElement(E.a, { label: T, link: '/settings/explore' }),
            ),
          ),
        )
      }
      var F = d(R)
      t.default = F
    },
    XOb8: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return r
      }),
        n.d(t, 'e', function () {
          return a
        }),
        n.d(t, 'b', function () {
          return o
        }),
        n.d(t, 'a', function () {
          return i
        }),
        n.d(t, 'c', function () {
          return s
        })
      var r = 'V2ViU3Vic2NyaXB0aW9uUHJvZHVjdERldGFpbHM6cHJvZF9LT21pYTlJYXRWVG1JNQ==',
        a = 'rogue-one',
        c = 'https://'.concat(window.location.host),
        o = ''.concat(c, '/settings/subscription'),
        i = ''.concat(c, '/i/twitter_blue_sign_up'),
        s = ''.concat(i, '/welcome')
      ''.concat(i, '/unsuccessful')
    },
    ZNbl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SafetyMode', function () {
          return v
        })
      var r = n('ERkP'),
        a = n.n(r),
        c = n('yoO3'),
        o = n('OsOl'),
        i = n('7JQg'),
        s = n('7FtF'),
        l = n('Irs7'),
        u = n('t62R'),
        d = n('xHsv'),
        f = n('0yYu'),
        p = n('6vad'),
        b = n('csss'),
        m = n('3XMw'),
        y = n.n(m),
        h = { page: 'settings', section: 'safety_mode' },
        O = y.a.c6cb90eb,
        g = y.a.fabe1397,
        E = y.a.c0786021
      function v() {
        var e,
          t = Object(l.b)()
        return a.a.createElement(
          i.b,
          { namespace: h },
          a.a.createElement(
            c.a,
            null,
            a.a.createElement(
              s.a,
              { screenType: 'secondaryDetail', title: O, withMarginBottom: !1 },
              a.a.createElement(d.a, {
                description:
                  ((e = function () {
                    t.scribe({ page: 'settings', component: 'education_sheet', action: 'click' })
                  }),
                  a.a.createElement(
                    y.a.I18NFormatMessage,
                    { $i18n: 'b8437d64' },
                    a.a.createElement(u.b, { link: '/settings/safety_mode/about', onPress: e }, y.a.db89884f),
                  )),
              }),
              a.a.createElement(f.a, null),
              a.a.createElement(o.a, null),
              a.a.createElement(f.a, null),
              a.a.createElement(p.b, { text: g }),
              a.a.createElement(b.a, { label: E, link: '/settings/safety_mode/autoblocked' }),
            ),
          ),
        )
      }
      t.default = v
    },
    Zg3A: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('Lsrn'),
        s = n('k/Ka')
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    'Zi/f': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'YourTweets', function () {
          return C
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('P1r1'),
        s = n('rxPX'),
        l = Object(s.a)()
          .propsFromState(function () {
            return { settings: i.g }
          })
          .adjustStateProps(function (e) {
            var t = e.settings
            return { nsfwUserEnabled: t.nsfw_user, nsfwAdminEnabled: t.nsfw_admin }
          })
          .propsFromActions(function () {
            return { updateSettings: i.L }
          }),
        u = n('3XMw'),
        d = n.n(u),
        f = n('yoO3'),
        p = n('7JQg'),
        b = n('7FtF'),
        m = n('k89r'),
        y = n('0KEI'),
        h = n('xHsv'),
        O = n('cCdp'),
        g = n('csss')
      function E(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = d.a.b38d81ae,
        S = d.a.f8d4746b,
        j = d.a.c0a55f4a,
        P = d.a.ea28ca63,
        _ = d.a.eb029cab,
        k = { page: 'settings', section: 'your_tweets' }
      function C(e) {
        var t = e.location,
          n = e.nsfwAdminEnabled,
          r = e.nsfwUserEnabled,
          c = e.updateSettings,
          i = Object(m.a)(),
          s = Object(y.useCreateLocalApiErrorHandler)('YOUR_TWEETS_SCREEN')
        return o.a.createElement(
          p.b,
          { namespace: k },
          o.a.createElement(
            f.a,
            null,
            o.a.createElement(
              b.a,
              { location: t, screenType: 'secondaryDetail', title: w },
              o.a.createElement(h.a, { description: S }),
              o.a.createElement(O.a, {
                checked: r,
                disabled: n,
                helpText: P,
                label: j,
                learnMoreLink: 'https://help.twitter.com/rules-and-policies/media-policy',
                name: 'nsfw_user',
                onChange: function (e, t) {
                  i.scribe(v(v({}, k), {}, { element: 'nsfw_user', action: t ? 'enable' : 'disable' })),
                    c(a()({}, e, t)).catch(s({ showToast: !0 }))
                },
              }),
              o.a.createElement(g.a, { label: _, link: '/settings/location' }),
            ),
          ),
        )
      }
      var T = l(C)
      t.default = T
    },
    aNjN: function (e, t, n) {
      'use strict'
      n.r(t)
      n('WNMA'), n('KqXw')
      var r,
        a = n('ERkP'),
        c = n.n(a),
        o = n('FIs5'),
        i = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        s = n.n(i),
        l = n('QIgh'),
        u = n('8UdT'),
        d = n('Yy//'),
        f = n('88ay'),
        p = n('Ka9G')
      function b(e, t) {
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
            ? b(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var y = m(
          m({}, l.b),
          {},
          ((r = {}),
          s()(r, u.b.Tweet, Object(d.a)({ displayBlocked: !0 })),
          s()(r, u.b.User, Object(p.a)({ decoration: f.d })),
          r),
        ),
        h = n('jHSc'),
        O = n('3XMw'),
        g = n.n(O),
        E = n('fTQJ'),
        v = n('WpDa'),
        w = n('ZNT5'),
        S = n('TnO6'),
        j = g.a.hae5825e,
        P = g.a.e9f1fbcb,
        _ = g.a.de9b6641,
        k = function () {
          return c.a.createElement(o.a, { header: P, message: _ })
        }
      t.default = function (e) {
        var t = e.history,
          n = e.location,
          r = e.match,
          a = r.params.userId,
          o = c.a.useMemo(
            function () {
              return (
                (e = a),
                Object(w.a)({
                  timelineId: 'ritoFlaggedTweets-'.concat(e),
                  getEndpoint: function (e) {
                    return e.RitoFlaggedTweets.fetchRitoFlaggedTweets
                  },
                  getEndpointParams: function (t) {
                    var n = t.count,
                      r = t.cursor
                    return { count: n, cursor: 'string' == typeof r ? r : void 0, userId: e }
                  },
                  context: 'FETCH_RITO_FLAGGED_TWEETS_TIMELINE',
                  perfKey: 'ritoFlaggedTweets',
                  formatResponse: v.a,
                })
              )
              var e
            },
            [a],
          ),
          i = c.a.createElement(S.b, { history: t, location: n, match: r, timelineType: S.a.PreviewFlaggedTweets })
        return c.a.createElement(
          h.b,
          {
            backButtonType: 'back',
            behavioralEventViewType: 'safety_mode_flagged_tweets',
            history: t,
            onBackClick: function () {
              t.goBack()
            },
            title: j,
            withBottomBorder: !1,
          },
          c.a.createElement(E.a, { entryConfiguration: y, footer: i, module: o, renderEmptyState: k, title: j }),
        )
      }
    },
    aY7H: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DirectMessages', function () {
          return L
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('v6aA'),
        s = n('P1r1'),
        l = n('rxPX'),
        u = n('0KEI'),
        d = Object(l.a)()
          .propsFromState(function () {
            return { nsfwMediaFilter: s.r, settings: s.g }
          })
          .adjustStateProps(function (e) {
            var t = e.nsfwMediaFilter,
              n = e.settings
            return {
              allowDmsFrom: n.allow_dms_from,
              dmQualityFilter: n.dm_quality_filter,
              dmReceiptSetting: n.dm_receipt_setting,
              nsfwMediaFilter: t,
            }
          })
          .propsFromActions(function () {
            return {
              updateSettings: s.L,
              updateDmNsfwMediaFilter: s.K,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'settings' }),
        f = n('3XMw'),
        p = n.n(f),
        b = n('yoO3'),
        m = n('7JQg'),
        y = n('7FtF'),
        h = n('k89r'),
        O = n('xHsv'),
        g = n('cCdp')
      function E(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = p.a.d4986f85,
        S = p.a.cc950d94,
        j = p.a.b4006390,
        P = p.a.f7da127c,
        _ = p.a.b3d8566e,
        k = p.a.cfda8c44,
        C = p.a.e6c411d7,
        T = p.a.g558101a,
        D = p.a.d9172541,
        R = p.a.bd557505,
        F = { page: 'settings', section: 'direct_messages' }
      function L(e) {
        var t = e.allowDmsFrom,
          n = e.createLocalApiErrorHandler,
          r = e.dmQualityFilter,
          c = e.dmReceiptSetting,
          s = e.location,
          l = e.nsfwMediaFilter,
          u = e.updateDmNsfwMediaFilter,
          d = e.updateSettings,
          f = Object(h.a)()
        function p(t, r) {
          var c = '/messages/settings' === e.location.pathname ? 'dm_tab' : 'global_settings_menu'
          f.scribe(v(v({}, F), {}, { element: t, data: { entry_point: c }, action: r })),
            d(a()({}, t, r)).catch(n({ showToast: !0 }))
        }
        var E = o.a.useContext(i.a).featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
        return o.a.createElement(
          m.b,
          { namespace: F },
          o.a.createElement(
            b.a,
            null,
            o.a.createElement(
              y.a,
              { location: s, screenType: 'secondaryDetail', title: w },
              o.a.createElement(O.a, { description: S }),
              o.a.createElement(g.a, {
                checked: 'all' === t,
                helpText: P,
                label: j,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#receive',
                name: 'allow_dms_from',
                onChange: function (e, t) {
                  p(e, t ? 'all' : 'following')
                },
              }),
              o.a.createElement(g.a, {
                checked: 'enabled' === r,
                helpText: k,
                label: _,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages',
                name: 'dm_quality_filter',
                onChange: function (e, t) {
                  p(e, t ? 'enabled' : 'disabled')
                },
              }),
              E
                ? o.a.createElement(g.a, {
                    checked: l,
                    helpText: T,
                    label: C,
                    learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#graphic-media',
                    name: 'ext_dm_nsfw_media_filter',
                    onChange: function (e, t) {
                      f.scribe(
                        v(v({}, F), {}, { element: 'dm_nsfw_filter_setting', action: t ? 'enable' : 'disable' }),
                      ),
                        u(t)
                    },
                  })
                : null,
              o.a.createElement(g.a, {
                checked: 'all_enabled' === c,
                helpText: R,
                label: D,
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
      var M = d(L)
      t.default = M
    },
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        c = n('Ud88'),
        o = n('aQQo'),
        i = o.loadQuery,
        s = o.useTrackLoadQueryInRender,
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        f = l.useRef,
        p = l.useState,
        b = n('K1lQ').getRequest,
        m = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== b(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : m,
          o = c()
        s()
        var l = a(),
          b = f(new Set([n])),
          h = p(function () {
            return n
          }),
          O = h[0],
          g = h[1],
          E = p(function () {
            return n
          }),
          v = E[0],
          w = E[1]
        n !== v && (b.current.add(n), w(n), g(n))
        var S = u(
            function () {
              l.current && (b.current.add(m), g(m))
            },
            [l],
          ),
          j = u(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (l.current) {
                var a,
                  c = i(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : o, e, t, r)
                b.current.add(c), g(c)
              }
            },
            [o, e, g, l],
          ),
          P = f(!1)
        return (
          d(function () {
            return function () {
              P.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === P.current)
                return (
                  (P.current = !1),
                  void (
                    'NullQueryReference' !== O.kind &&
                    j(O.variables, { fetchPolicy: O.fetchPolicy, networkCacheConfig: O.networkCacheConfig })
                  )
                )
              var t = b.current
              if (l.current) {
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var c = n.value
                    if (c === O) break
                    t.delete(c),
                      'NullQueryReference' !== c.kind &&
                        (y(e) ? c.dispose && c.dispose() : c.releaseQuery && c.releaseQuery())
                  }
                } catch (o) {
                  a.e(o)
                } finally {
                  a.f()
                }
              }
            },
            [O, l, j, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, r.default)(b.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value
                    'NullQueryReference' !== a.kind &&
                      (y(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (c) {
                  n.e(c)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === O.kind ? null : O, j, S]
        )
      }
    },
    'bT/0': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AdsPreferences', function () {
          return D
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('NeAX'),
        s = n('rxPX'),
        l = n('0KEI'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { settings: i.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowPersonalizationEnabled: e.settings.allowPersonalization }
          })
          .propsFromActions(function () {
            return {
              updateSettings: i.updateSettings,
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'ADS_PREFERENCES_SCREEN',
              ),
            }
          }),
        d = n('3XMw'),
        f = n.n(d),
        p = n('yoO3'),
        b = n('7JQg'),
        m = n('7FtF'),
        y = n('k89r'),
        h = n('xHsv'),
        O = n('cCdp'),
        g = n('csss')
      function E(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = f.a.d035a8d0,
        S = f.a.f9ff2201,
        j = f.a.ib3357a5,
        P = f.a.c4ca418c,
        _ = f.a.b0b3ed8e,
        k = f.a.h1f01a24,
        C = f.a.da202f9a,
        T = { page: 'settings', section: 'ads_preferences' }
      function D(e) {
        var t,
          n = e.allowPersonalizationEnabled,
          r = e.createLocalApiErrorHandler,
          c = e.location,
          i = e.updateSettings,
          s = Object(y.a)(),
          l =
            ((t = o.a.useRef()),
            o.a.useEffect(function () {
              return (
                window.apkInterface && window.apkInterface.isOsAdsTrackingOn && !window.apkInterface.isOsAdsTrackingOn()
              )
            }, []),
            t.current)
        return o.a.createElement(
          b.b,
          { namespace: T },
          o.a.createElement(
            p.a,
            null,
            o.a.createElement(
              m.a,
              { location: c, screenType: 'secondaryDetail', title: w },
              o.a.createElement(h.a, { description: S }),
              o.a.createElement(O.a, {
                checked: n,
                disabled: l,
                helpText: l ? _ : P,
                label: j,
                learnMoreLink: 'https://support.twitter.com/articles/20170405',
                name: 'allowPersonalization',
                onChange: function (e, t) {
                  s.scribe(v(v({}, T), {}, { element: e, action: t ? 'enable' : 'disable' })),
                    i(a()({}, e, t)).catch(r())
                },
              }),
              o.a.createElement(g.a, { label: k, link: '/settings/your_twitter_data/twitter_interests' }),
              o.a.createElement(g.a, { label: C, link: '/settings/your_twitter_data/audiences' }),
            ),
          ),
        )
      }
      var R = u(D)
      t.default = R
    },
    cQiO: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ApplicationsScreen', function () {
          return Q
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        h = (n('2G9S'), n('z84I'), n('ho0z'), n('uFXj'), n('ERkP')),
        O = n.n(h),
        g = n('dZRF'),
        E = n('kGix'),
        v = n('rxPX'),
        w = n('0KEI'),
        S = function (e, t) {
          return Object(E.d)(g.d(e))
        },
        j = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: S, applications: g.a.selectUniqUnrevokedApps }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchApplications: g.b,
            }
          }),
        P = n('v//M'),
        _ = n('yoO3'),
        k = n('7JQg'),
        C = n('7FtF'),
        T = n('xHsv'),
        D = n('t62R'),
        R = n('FIs5'),
        F = n('csss'),
        L = n('rHpw'),
        M = n('3XMw'),
        A = n.n(M),
        I = n('U+bB'),
        H = n('MWbm')
      function x(e) {
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
          return f()(this, n)
        }
      }
      var U = A.a.jc02ae67,
        N = A.a.e5e8a899,
        B = A.a.ge06310e,
        z = A.a.dd1b86f9,
        K = A.a.ee4b16f8,
        W = 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
        X = { page: 'settings', section: 'connected_apps' },
        Q = (function (e) {
          u()(n, e)
          var t = x(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(s()(e), '_fetchApps', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchApplications)().catch(n({ showToast: !0 }))
              }),
              y()(s()(e), '_handleRetry', function () {
                e._fetchApps()
              }),
              y()(s()(e), '_render', function () {
                var t = e.props.applications
                return O.a.createElement(
                  H.a,
                  null,
                  O.a.createElement(T.a, {
                    description: O.a.createElement(
                      A.a.I18NFormatMessage,
                      { $i18n: 'hcecd237' },
                      O.a.createElement(D.b, { link: W }, A.a.b63b0b1c),
                    ),
                  }),
                  t.length ? null : O.a.createElement(R.a, { header: B, message: K }),
                  t.map(function (e, t) {
                    var n = '/settings/applications/'.concat(e.app_id)
                    return O.a.createElement(F.a, {
                      description: e.organization ? z({ name: e.organization }) : null,
                      key: e.app_id,
                      label: e.name,
                      link: n,
                      thumbnail: O.a.createElement(I.a, { accessibilityLabel: '', source: e.img_url, style: G.avatar }),
                    })
                  }),
                )
              }),
              e
            )
          }
          return (
            o()(n, [
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
                    n = e.location
                  return O.a.createElement(
                    k.b,
                    { namespace: X },
                    O.a.createElement(
                      _.a,
                      null,
                      O.a.createElement(
                        C.a,
                        { location: n, title: U },
                        O.a.createElement(P.a, {
                          accessibilityLabel: N,
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
            n
          )
        })(O.a.Component)
      y()(Q, 'defaultProps', { applications: [] })
      var G = L.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.small, height: '100%', width: '100%' } }
        }),
        V = j(Q)
      t.default = V
    },
    ehR8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('Ty5D')
      function a() {
        return { location: Object(r.h)(), match: Object(r.j)(), history: Object(r.g)() }
      }
    },
    g7Ra: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('Lsrn'),
        s = n('shC7'),
        l = n('k/Ka')
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
      function d(e) {
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
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          d(
            d({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [i.a.root, e.style, s.a.getConstants().isRTL && i.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M13.967 5.852H4.602l2.97-2.97c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0L2.26 6.07c-.294.292-.294.767 0 1.06l4.25 4.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L4.6 7.35h9.364c3.625 0 6.574 2.948 6.574 6.573S17.592 20.5 13.967 20.5H7.79c-.415 0-.75.336-.75.75s.335.75.75.75h6.178c4.452 0 8.074-3.622 8.074-8.074s-3.623-8.074-8.075-8.074z',
            }),
          ),
        )
      }
      ;(f.metadata = { width: 24, height: 24 }), (t.a = f)
    },
    jN9l: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        c,
        o = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'MonetizationSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: (r = [{ kind: 'Literal', name: 's', value: 21 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  (a = { alias: null, args: null, kind: 'ScalarField', name: 'is_active_creator', storageKey: null }),
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
                          (c = {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'super_follows_application_status',
                                storageKey: null,
                              },
                            ],
                            type: 'User',
                            abstractKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:21)',
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
                args: r,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  a,
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
                          c,
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:21)',
              },
            ],
          },
          params: {
            id: 'QEgD7hJZS5CRxfrKIrhM2Q',
            metadata: {},
            name: 'MonetizationSettingsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '84ef2c297c0f036f20c8545d37f51c88'), (t.default = o)
    },
    jZqz: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SessionsScreen', function () {
          return ae
        })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        c = n('VrFO'),
        o = n.n(c),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        p = n('N+ot'),
        b = n.n(p),
        m = n('AuHH'),
        y = n.n(m),
        h = n('KEM+'),
        O = n.n(h),
        g = (n('2G9S'), n('z84I'), n('ERkP')),
        E = n.n(g),
        v = n('EPsT'),
        w = n('uo4S'),
        S = n('kGix'),
        j = n('rxPX'),
        P = n('0KEI'),
        _ = function (e, t) {
          return Object(S.d)(w.d(e))
        },
        k = Object(j.a)()
          .propsFromState(function () {
            return { fetchStatus: _, sessions: w.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSessionsIfNeeded: w.a,
              revokeAllSessions: w.b,
            }
          }),
        C = n('v//M'),
        T = n('yoO3'),
        D = n('VIKJ'),
        R = n('7JQg'),
        F = n('ZvNX'),
        L = n('eM8g'),
        M = n('7FtF'),
        A = n('MWbm'),
        I = n('xHsv'),
        H = n('6vad'),
        x = n('0yYu'),
        U = n('t62R'),
        N = n('3XMw'),
        B = n.n(N)
      function z(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return b()(this, n)
        }
      }
      var K = B.a.dd823129,
        W = B.a.c2cb5560,
        X = B.a.bca43fd0,
        Q = B.a.bef6fc56,
        G = B.a.bbe9579b,
        V = B.a.b850cbd0,
        Z = B.a.ae1bbb26,
        Y = B.a.i859a9d3,
        q = B.a.e5e8a899,
        J = B.a.cf3e3164,
        $ = B.a.f810f279,
        ee = B.a.a19f4b20,
        te = B.a.e25e40f0,
        ne = B.a.d1baa458,
        re = { page: 'settings', section: 'sessions' },
        ae = (function (e) {
          f()(n, e)
          var t = z(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              O()(u()(e), '_fetchSessions', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSessionsIfNeeded)().catch(n({ showToast: !0 }))
              }),
              O()(u()(e), '_handleRetry', function () {
                e._fetchSessions()
              }),
              O()(u()(e), '_handleLogOutAll', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.revokeAllSessions)().catch(n({ showToast: !0 }))
              }),
              O()(u()(e), '_renderSession', function (e, t) {
                var n = '/settings/sessions/'.concat(encodeURIComponent(e.token))
                return E.a.createElement(F.a, {
                  key: e.token,
                  link: n,
                  session: e,
                  withBottomBorder: !t,
                  withSummary: !1,
                })
              }),
              e
            )
          }
          return (
            s()(n, [
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
                    n = t.fetchStatus,
                    r = t.location
                  return E.a.createElement(
                    R.b,
                    { namespace: re },
                    E.a.createElement(
                      T.a,
                      null,
                      E.a.createElement(
                        M.a,
                        { location: r, title: K },
                        E.a.createElement(C.a, {
                          accessibilityLabel: q,
                          fetchStatus: n,
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
                    n = t.length,
                    r = Object(D.a)(t, function (e) {
                      return e.is_current_session
                    }),
                    c = a()(r, 2),
                    o = c[0],
                    i = c[1]
                  return n
                    ? E.a.createElement(
                        A.a,
                        null,
                        E.a.createElement(I.a, { description: Q }),
                        E.a.createElement(H.b, { text: W }),
                        E.a.createElement(L.a, null, G),
                        o[0] ? this._renderSession(o[0], !1) : null,
                        E.a.createElement(x.a, null),
                        E.a.createElement(H.b, { text: X }),
                        E.a.createElement(L.a, null, V),
                        E.a.createElement(
                          L.a,
                          null,
                          E.a.createElement(
                            B.a.I18NFormatMessage,
                            { $i18n: 'i34eeb36', infoText: n > 1 ? ee({ num: n - 1 }) : te },
                            E.a.createElement(
                              U.b,
                              {
                                link: 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                                withInteractiveStyling: !1,
                              },
                              B.a.j3223a5b({ learnMoreLabel: Y }),
                            ),
                          ),
                        ),
                        E.a.createElement(v.a, {
                          align: 'left',
                          confirmationSheetConfirmButtonLabel: Z,
                          confirmationSheetConfirmButtonType: 'primary',
                          confirmationSheetHeadline: $,
                          confirmationSheetText: ne,
                          label: J,
                          onConfirmationSheetConfirm: this._handleLogOutAll,
                        }),
                        i.map(function (t, r) {
                          return e._renderSession(t, n - 1 === r)
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      O()(ae, 'defaultProps', { sessions: [] })
      var ce = k(ae)
      t.default = ce
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return N
      })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        c = n('VrFO'),
        o = n.n(c),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        p = n('N+ot'),
        b = n.n(p),
        m = n('AuHH'),
        y = n.n(m),
        h = n('KEM+'),
        O = n.n(h),
        g = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        E = n.n(g),
        v = n('pXBW'),
        w = n('6/RC'),
        S = n('UIzd'),
        j = n.n(S),
        P = n('kGix')
      n.d(t, 'a', function () {
        return P.a
      })
      var _ = n('fs1G'),
        k = n('0KEI'),
        C = n('lU4h'),
        T = n.n(C),
        D = n('21nk'),
        R = n.n(D),
        F = n('bCEw'),
        L = n.n(F),
        M = n('Ud88'),
        A = n.n(M)
      function I(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return b()(this, n)
        }
      }
      var H = function (e) {
          return (0, e.render)({ fetchStatus: P.a.LOADING, data: null, error: null, retry: _.a })
        },
        x = (function (e) {
          f()(n, e)
          var t = I(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (e = t.call.apply(t, [this].concat(a))), O()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof v.a)) throw e
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
        })(E.a.Component),
        U = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = R()(t, n)
          return r({ fetchStatus: P.a.LOADED, data: a, error: null, retry: _.a })
        },
        N = function (e, t) {
          if (w.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                c = void 0 === r ? 'store-or-network' : r,
                o = n.render,
                i = n.variables,
                s = L()(e),
                l = a()(s, 2),
                u = l[0],
                d = l[1],
                f = Object(k.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = T()(i),
                b = a()(p, 1)[0],
                m = E.a.useCallback(
                  function () {
                    d(b, { fetchPolicy: 'network-only' })
                  },
                  [d, b],
                )
              return (
                E.a.useLayoutEffect(
                  function () {
                    d(b, { fetchPolicy: c })
                  },
                  [c, d, b],
                ),
                u
                  ? E.a.createElement(
                      E.a.Suspense,
                      { fallback: E.a.createElement(H, { render: o }) },
                      E.a.createElement(
                        x,
                        { errorHandler: f(t.errorConfig.options || {}), key: u.fetchKey, retry: m },
                        function (t, n) {
                          return t
                            ? o({ fetchStatus: P.a.FAILED, error: t, data: null, retry: n })
                            : E.a.createElement(U, { query: e, queryRef: u, render: o })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (r) {
            r.fetchPolicy
            var c = r.render,
              o = r.variables,
              i = A()(),
              s = Object(k.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = T()(o),
              u = a()(l, 1)[0],
              d = n.get(i)
            if (d) return d
            var f = E.a.lazy(function () {
              return j()(i, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return c({ fetchStatus: P.a.LOADED, data: e, error: null, retry: _.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (s(t.errorConfig.options || {})(e),
                        c({ fetchStatus: P.a.FAILED, data: null, error: e, retry: _.a }))
                      : E.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(i, e).get.bind(n, i) }
                })
            })
            return E.a.createElement(E.a.Suspense, null, E.a.createElement(f, null))
          }
        }
    },
    ndvG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'adFreeSitesLabel', function () {
          return K
        }),
        n.d(t, 'yourImpactLabel', function () {
          return W
        }),
        n.d(t, 'adFreeHelpCenterLabel', function () {
          return X
        }),
        n.d(t, 'topArticlesLabel', function () {
          return V
        }),
        n.d(t, 'adFreeHelpScribeElement', function () {
          return oe
        }),
        n.d(t, 'adFreeImpactScribeElement', function () {
          return ie
        }),
        n.d(t, 'adFreeSitesScribeElement', function () {
          return se
        }),
        n.d(t, 'TwitterBlue', function () {
          return le
        })
      n('WNMA'), n('KqXw'), n('z84I'), n('1t7P'), n('jQ/y'), n('hBvt')
      var r = n('ERkP'),
        a = n.n(r),
        c = n('v6aA'),
        o = n('EGrD'),
        i = n('gUb7'),
        s = n('rxPX'),
        l = n('0KEI'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { userClaimsFetchStatus: i.c }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_BLUE_SETTINGS',
              ),
              fetchAdFreeToken: o.a,
            }
          })
          .withAnalytics({ page: 'settings', section: 'twitter_blue' }),
        d = n('v//M'),
        f = n('3XMw'),
        p = n.n(f),
        b = n('/de5'),
        m = n('yoO3'),
        y = n('7FtF'),
        h = 'adFreeSection',
        O = n('ehR8'),
        g = n('MWbm'),
        E = n('6vad'),
        v = n('csss'),
        w = n('xHsv'),
        S = n('OOKO'),
        j = n('rHpw'),
        P = n('LSr9'),
        _ = n('g7Ra'),
        k = (n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        C = n.n(k),
        T = n('Lsrn'),
        D = n('k/Ka')
      function R(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                C()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var L = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(D.a)(
          'svg',
          F(
            F({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [T.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M20.803 17.6l-4.88-8.256c-.113-.192-.173-.412-.173-.636V3.356c.368-.048.657-.35.657-.73 0-.415-.336-.75-.75-.75H8.342c-.414 0-.75.335-.75.75 0 .38.29.683.658.73v5.352c0 .224-.06.443-.174.636L3.196 17.6c-.554.938-.562 2.065-.022 3.013s1.515 1.513 2.605 1.513h12.44c1.09 0 2.065-.565 2.606-1.514.54-.948.53-2.074-.023-3.013zm-1.28 2.268c-.27.474-.758.757-1.304.757H5.78c-.545 0-1.032-.283-1.303-.757-.26-.456-.26-.993-.012-1.452.092.04.192.063.298.063h2.59c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H5.305l.91-1.54c.06.018.12.04.188.04h2.59c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H7.078l.906-1.535c.056.014.11.034.17.034h2.59c.414 0 .75-.337.75-.75s-.336-.75-.75-.75H8.852l.515-.873c.25-.423.383-.907.383-1.4V3.376h4.5v5.333c0 .493.133.977.383 1.4l4.88 8.254c.276.47.28 1.033.01 1.506z',
            }),
          ),
        )
      }
      L.metadata = { width: 24, height: 24 }
      var M = L,
        A = n('5VjN'),
        I = n('vMn4'),
        H = n('tH6R'),
        x = n('OySi'),
        U = p.a.ed21f885,
        N = p.a.je84decd,
        B = p.a.de43eaf2,
        z = p.a.i65802df,
        K = p.a.a21b8ad2,
        W = p.a.hd885aef,
        X = p.a.je4ccd3a,
        Q = p.a.f6e88161,
        G = p.a.e4972a1a,
        V = p.a.b7fa0cfd,
        Z = p.a.adcaa213,
        Y = p.a.i9028824,
        q = p.a.e5fff0c7,
        J = p.a.ib35705d,
        $ = p.a.ccfdbb86,
        ee = p.a.d15f6d3d,
        te = p.a.jc8487c1,
        ne = p.a.ad45e9b2,
        re = p.a.db529452,
        ae = p.a.f66d24be,
        ce = p.a.d248d75e,
        oe = 'ad_free_articles_help',
        ie = 'ad_free_articles_impact',
        se = 'ad_free_articles_sites'
      function le(e) {
        var t = e.analytics,
          n = e.createLocalApiErrorHandler,
          r = e.fetchAdFreeToken,
          o = e.userClaimsFetchStatus,
          i = Object(O.a)(),
          s = i.history,
          l = i.location,
          u = i.match,
          f = a.a.useContext(c.a),
          p = f.featureSwitches,
          j = f.userClaims,
          k = j.isTwitterBlueSubscriber(),
          C = j.isTrueAndEnabled('subscriptions_feature_1003'),
          T = j.isTrueAndEnabled('subscriptions_feature_1009'),
          D = j.isTrueAndEnabled('subscriptions_feature_1007'),
          R = j.isTrueAndEnabled('subscriptions_feature_1006'),
          F = p.isTrue('subscriptions_management_enabled'),
          L = [
            { label: B, description: $, link: '/settings/undo_tweet', Icon: _.a, shouldRender: C },
            { label: Q, description: G, link: '/settings/t1_labs', Icon: M, shouldRender: T },
            { label: V, description: Z, link: '/i/articles', Icon: A.a, shouldRender: D },
          ],
          le = function () {
            fe(se)
          },
          de = function () {
            fe(oe)
          },
          fe = function (e) {
            t.scribe({ page: 'subscriptions', section: 'settings', element: e, action: 'click' })
          }
        return a.a.createElement(d.a, {
          accessibilityLabel: Y,
          fetchStatus: o,
          render: function () {
            return k
              ? a.a.createElement(
                  m.a,
                  null,
                  a.a.createElement(
                    y.a,
                    { location: l, screenType: 'primaryDetail', title: U },
                    a.a.createElement(
                      g.a,
                      { style: ue.iconWrapper },
                      a.a.createElement(H.a, { style: ue.iconTwitterBlue }),
                      a.a.createElement(w.a, { description: q }),
                    ),
                    a.a.createElement(S.a, { spacing: 'space2' }),
                    a.a.createElement(E.b, { text: N }),
                    L.map(function (e) {
                      var t = e.Icon,
                        n = e.description,
                        r = e.label,
                        c = e.link
                      return e.shouldRender
                        ? a.a.createElement(x.b, { Icon: t, description: n, key: r, label: r, link: c })
                        : null
                    }),
                    R &&
                      a.a.createElement(
                        a.a.Fragment,
                        null,
                        a.a.createElement(E.b, { testID: h, text: z }),
                        a.a.createElement(x.a, {
                          description: ee,
                          label: K,
                          link: 'https://help.twitter.com/using-twitter/twitter-blue-ad-free-articles#publishers',
                          onPress: le,
                        }),
                        a.a.createElement(v.a, {
                          description: te,
                          label: W,
                          link: { external: !0, pathname: P.b },
                          onPress: function (e) {
                            new P.a(r, n()).getYourImpactChartLinkHandler()(e), fe(ie)
                          },
                        }),
                        a.a.createElement(x.a, {
                          label: X,
                          link: 'https://help.twitter.com/using-twitter/twitter-blue-ad-free-articles',
                          onPress: de,
                        }),
                      ),
                    F &&
                      a.a.createElement(
                        a.a.Fragment,
                        null,
                        a.a.createElement(E.b, { text: re }),
                        a.a.createElement(x.b, {
                          Icon: I.a,
                          description: ne,
                          key: J,
                          label: J,
                          link: '/settings/subscription',
                        }),
                      ),
                    a.a.createElement(x.a, { label: ae, link: 'https://help.twitter.com/using-twitter/twitter-blue' }),
                    a.a.createElement(x.a, { label: ce, link: 'https://help.twitter.com/forms/subscriptions' }),
                  ),
                )
              : a.a.createElement(b.b, { history: s, location: l, match: u })
          },
        })
      }
      var ue = j.a.create(function (e) {
        return {
          iconWrapper: { display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: e.spaces.space16 },
          iconTwitterBlue: { fill: e.colors.text },
        }
      })
      t.default = u(le)
    },
    o1YB: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        m = n('KEM+'),
        y = n.n(m),
        h = (n('2G9S'), n('uFXj'), n('ERkP')),
        O = n.n(h),
        g = n('t62R'),
        E = n('rHpw'),
        v = n('MWbm')
      function w(e) {
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
          return f()(this, n)
        }
      }
      var S = (function (e) {
        u()(n, e)
        var t = w(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(c))),
            y()(s()(e), '_renderSubtextAndLink', function () {
              var t = e.props.subtext
              return O.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
            }),
            y()(s()(e), '_renderLearnMore', function () {
              var t = e.props,
                n = t.learnMoreLabel,
                r = t.learnMoreLink
              return r && n ? O.a.createElement(g.b, { link: r, size: 'subtext2' }, n) : null
            }),
            e
          )
        }
        return (
          o()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.label,
                  n = e.learnMoreLabel,
                  r = e.learnMoreLink,
                  a = e.subtext,
                  c = e.withBottomBorder
                return O.a.createElement(
                  v.a,
                  { style: [j.root, c && j.bottomBorder] },
                  O.a.createElement(g.b, null, t),
                  a
                    ? n && r
                      ? this._renderSubtextAndLink()
                      : O.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, a)
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(O.a.Component)
      y()(S, 'defaultProps', { withBottomBorder: !0 })
      var j = E.a.create(function (e) {
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
      t.a = S
    },
    sGy1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ContentYouSee', function () {
          return R
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('P1r1'),
        s = n('G6rE'),
        l = n('rxPX'),
        u = n('0KEI'),
        d = Object(l.a)()
          .propsFromState(function () {
            return { settings: i.g, loggedInUser: s.e.selectLoggedInUser }
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
              updateSettings: i.L,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(
                'CONTENT_YOU_SEE_SCREEN',
              ),
            }
          }),
        f = n('3XMw'),
        p = n.n(f),
        b = n('yoO3'),
        m = n('7JQg'),
        y = n('7FtF'),
        h = n('k89r'),
        O = n('xHsv'),
        g = n('cCdp'),
        E = n('csss')
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = p.a.f2bd9c47,
        j = p.a.b2810ee7,
        P = p.a.fc1d217b,
        _ = p.a.b8533bac,
        k = p.a.h1f01a24,
        C = p.a.j018f2a1,
        T = p.a.h1ef00db,
        D = { page: 'settings', section: 'content_you_see' }
      function R(e) {
        var t = e.createLocalApiErrorHandler,
          n = e.displaySensitiveMediaEnabled,
          r = e.location,
          c = e.loggedInUserScreenName,
          i = e.updateSettings,
          s = Object(h.a)()
        return void 0 !== c
          ? o.a.createElement(
              m.b,
              { namespace: D },
              o.a.createElement(
                b.a,
                null,
                o.a.createElement(
                  y.a,
                  { location: r, screenType: 'secondaryDetail', title: S },
                  o.a.createElement(O.a, { description: j }),
                  o.a.createElement(g.a, {
                    checked: n,
                    label: P,
                    name: 'display_sensitive_media',
                    onChange: function (e, n) {
                      s.scribe(w(w({}, D), {}, { element: e, action: n ? 'enable' : 'disable' })),
                        i(a()({}, e, n)).catch(t({ showToast: !0 }))
                    },
                  }),
                  o.a.createElement(E.a, { label: _, link: '/'.concat(c, '/topics') }),
                  o.a.createElement(E.a, { label: k, link: '/settings/your_twitter_data/twitter_interests' }),
                  o.a.createElement(E.a, { label: C, link: '/settings/explore' }),
                  o.a.createElement(E.a, { label: T, link: '/settings/search' }),
                ),
              ),
            )
          : null
      }
      var F = d(R)
      t.default = F
    },
    sZlh: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return D
        })
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ddV6'),
        o = n.n(c),
        i =
          (n('jQ3i'),
          n('x4t0'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('AS3p')),
        s = n('ERkP'),
        l = n.n(s),
        u = n('v6aA'),
        d = n('3XMw'),
        f = n.n(d),
        p = n('yoO3'),
        b = n('7JQg'),
        m = n('BTou'),
        y = n('7FtF'),
        h = n('k89r'),
        O = n('xHsv'),
        g = n('Y3cQ')
      function E(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var w = f.a.d0b74a5a,
        S = f.a.i9c8698d,
        j = f.a.d8817e36,
        P = f.a.b9288ee6,
        _ = f.a.ad881a6b,
        k = f.a.d9c5161f,
        C = [
          { label: j, value: i.a.AcceptAllCookies, helpText: _ },
          { label: P, value: i.a.RefuseNonEssentialCookies, helpText: k },
        ],
        T = { page: 'settings', section: 'cookie_preferences' }
      function D(e) {
        var t = e.location,
          n = Object(h.a)(),
          r = (function () {
            var e = l.a.useContext(u.a).featureSwitches,
              t = l.a.useState(function () {
                var t = i.c(e)
                return [i.a.NotSet, i.a.Invalid].includes(t) ? i.a.RefuseNonEssentialCookies : t
              }),
              n = o()(t, 2),
              r = n[0],
              a = n[1]
            return {
              cookiePreference: r,
              setCookiePreference: function (t) {
                if (t === i.a.AcceptAllCookies) i.b(e), a(i.a.AcceptAllCookies)
                else {
                  if (t !== i.a.RefuseNonEssentialCookies) throw new Error('Invalid cookie preference')
                  i.d(e), a(i.a.RefuseNonEssentialCookies)
                }
              },
            }
          })(),
          a = r.cookiePreference,
          c = r.setCookiePreference
        return l.a.createElement(
          b.b,
          { namespace: T },
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(
              y.a,
              { location: t, screenType: 'secondaryDetail', title: w },
              l.a.createElement(O.a, { description: S }),
              l.a.createElement(g.a, {
                name: 'cookie_preferences',
                onChange: function (e, t) {
                  n.scribe(
                    v(
                      v({}, T),
                      {},
                      { action: 'change', element: t === i.a.AcceptAllCookies ? 'accept_all' : 'refuse_non_essential' },
                    ),
                  ),
                    c(t),
                    t === i.a.RefuseNonEssentialCookies && (m.a.flushHTMLCache(), window.location.reload())
                },
                options: C,
                value: a,
              }),
            ),
          ),
        )
      }
    },
    su2V: function (e, t, n) {
      'use strict'
      n.d(t, 'l', function () {
        return y
      }),
        n.d(t, 'k', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return O
        }),
        n.d(t, 'e', function () {
          return g
        }),
        n.d(t, 'j', function () {
          return E
        }),
        n.d(t, 'i', function () {
          return v
        }),
        n.d(t, 'h', function () {
          return w
        }),
        n.d(t, 'g', function () {
          return S
        }),
        n.d(t, 'd', function () {
          return j
        }),
        n.d(t, 'b', function () {
          return P
        }),
        n.d(t, 'a', function () {
          return _
        }),
        n.d(t, 'c', function () {
          return k
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('yH/f'), n('hBpG'), n('jQ3i'), n('x4t0'), n('JtPf'), n('7x/C'), n('oEOe')),
        o = n('Ssj5'),
        i = n('kGix')
      function s(e, t) {
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
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = 'subscriptionPayments',
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
        p = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_PRODUCT_SUBSCRIPTIONS_FAILURE',
        }),
        b = Object.freeze({
          REQUEST: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_REQUEST',
          SUCCESS: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_SUCCESS',
          FAILURE: 'rweb/subscriptionPayments/FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL_FAILURE',
        }),
        m = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: i.a.NONE }, customerPortalUrls: {} }
      var y = function (e, t) {
          var n = e[u].products[t]
          return (null == n ? void 0 : n.fetchStatus) || i.a.NONE
        },
        h = function (e, t) {
          var n = e[u].products[t]
          return null == n ? void 0 : n.details
        },
        O = function (e, t) {
          var n = e[u].checkoutUrls[t]
          return (null == n ? void 0 : n.fetchStatus) || i.a.NONE
        },
        g = function (e, t) {
          var n = e[u].checkoutUrls[t]
          return null == n ? void 0 : n.checkoutUrl
        },
        E = function (e) {
          return e[u].productSubscriptions.fetchStatus
        },
        v = function (e, t) {
          return (e[u].productSubscriptions.subscriptions || []).find(function (e) {
            var n, r
            return (
              (null === (n = e.product) || void 0 === n ? void 0 : n.rest_id) &&
              (null === (r = e.product) || void 0 === r ? void 0 : r.rest_id.includes(t)) &&
              'Inactive' !== e.state
            )
          })
        },
        w = function (e, t) {
          var n = e[u].customerPortalUrls[t]
          return (null == n ? void 0 : n.fetchStatus) || i.a.NONE
        },
        S = function (e, t) {
          var n = e[u].customerPortalUrls[t]
          return null == n ? void 0 : n.customerPortalUrl
        },
        j = function (e) {
          return function (t, n, r) {
            var a = r.api,
              o = Object(c.b)(t, {
                params: { id: e },
                request: a.SubscriptionPayments.fetchSubscriptionProductDetails,
              }),
              s = y(n(), e)
            return s !== i.a.NONE && s !== i.a.FAILED
              ? Promise.resolve()
              : o({ actionTypes: d, context: 'FETCH_SUBSCRIPTION_PRODUCT_DETAILS', meta: { id: e } })
          }
        },
        P = function (e, t, n, r) {
          return function (a, o, s) {
            var l = s.api,
              u = Object(c.b)(a, {
                params: { price_id: t, success_url: n, cancel_url: r },
                request: l.SubscriptionPayments.fetchSubscriptionProductCheckoutUrl,
              }),
              d = O(o(), e)
            return d !== i.a.NONE && d !== i.a.FAILED
              ? Promise.resolve()
              : u({ actionTypes: f, context: 'FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL', meta: { id: e } })
          }
        },
        _ = function () {
          return function (e, t, n) {
            var r = n.api,
              a = Object(c.b)(e, { params: {}, request: r.SubscriptionPayments.fetchProductSubscriptions }),
              o = E(t())
            return o !== i.a.NONE && o !== i.a.FAILED
              ? Promise.resolve()
              : a({ actionTypes: p, context: 'FETCH_PRODUCT_SUBSCRIPTIONS', meta: {} })
          }
        },
        k = function (e, t) {
          return function (n, r, a) {
            var o = a.api,
              s = Object(c.b)(n, {
                params: { return_url: t },
                request: o.SubscriptionPayments.fetchSubscriptionProductCustomerPortalUrl,
              }),
              l = w(r(), e)
            return l !== i.a.NONE && l !== i.a.FAILED
              ? Promise.resolve()
              : s({ actionTypes: b, context: 'FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL', meta: { id: e } })
          }
        }
      o.a.register(
        a()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              var n = t.meta.id
              return l(l({}, e), {}, { products: l(l({}, e.products), {}, a()({}, n, { fetchStatus: i.a.LOADING })) })
            case d.SUCCESS:
              var r = t.meta.id
              return l(
                l({}, e),
                {},
                { products: l(l({}, e.products), {}, a()({}, r, { fetchStatus: i.a.LOADED, details: t.payload })) },
              )
            case d.FAILURE:
              var c = t.meta.id
              return l(
                l({}, e),
                {},
                { products: l(l({}, e.products), {}, a()({}, c, { fetchStatus: i.a.FAILED, error: t.payload })) },
              )
            case f.REQUEST:
              var o = t.meta.id
              return l(
                l({}, e),
                {},
                { checkoutUrls: l(l({}, e.checkoutUrls), {}, a()({}, o, { fetchStatus: i.a.LOADING })) },
              )
            case f.SUCCESS:
              var s = t.meta.id
              return l(
                l({}, e),
                {},
                {
                  checkoutUrls: l(
                    l({}, e.checkoutUrls),
                    {},
                    a()({}, s, { fetchStatus: i.a.LOADED, checkoutUrl: t.payload }),
                  ),
                },
              )
            case f.FAILURE:
              var u = t.meta.id
              return l(
                l({}, e),
                {},
                {
                  checkoutUrls: l(l({}, e.checkoutUrls), {}, a()({}, u, { fetchStatus: i.a.FAILED, error: t.payload })),
                },
              )
            case p.REQUEST:
              return l(l({}, e), {}, { productSubscriptions: { fetchStatus: i.a.LOADING } })
            case p.SUCCESS:
              return l(l({}, e), {}, { productSubscriptions: { fetchStatus: i.a.LOADED, subscriptions: t.payload } })
            case p.FAILURE:
              return l(l({}, e), {}, { productSubscriptions: { fetchStatus: i.a.FAILED, error: t.payload } })
            case b.REQUEST:
              var y = t.meta.id
              return l(
                l({}, e),
                {},
                { customerPortalUrls: l(l({}, e.customerPortalUrls), {}, a()({}, y, { fetchStatus: i.a.LOADING })) },
              )
            case b.SUCCESS:
              var h = t.meta.id
              return l(
                l({}, e),
                {},
                {
                  customerPortalUrls: l(
                    l({}, e.customerPortalUrls),
                    {},
                    a()({}, h, { fetchStatus: i.a.LOADED, customerPortalUrl: t.payload }),
                  ),
                },
              )
            case b.FAILURE:
              var O = t.meta.id
              return l(
                l({}, e),
                {},
                {
                  customerPortalUrls: l(
                    l({}, e.customerPortalUrls),
                    {},
                    a()({}, O, { fetchStatus: i.a.FAILED, error: t.payload }),
                  ),
                },
              )
            default:
              return e
          }
        }),
      )
    },
    tH6R: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('Lsrn'),
        s = n('k/Ka')
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 76 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.854-.225 3.917-.72 1.048-.481 1.866-1.147 2.381-2.025.489-.833.732-1.749.732-2.732 0-1.25-.356-2.336-1.128-3.184-.317-.348-.69-.635-1.113-.867.302-.21.572-.455.809-.738.675-.806 1.014-1.754 1.014-2.813 0-1.49-.605-2.722-1.786-3.626C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.498-.059.972-.189 1.414-.381l-.001.002c-.329.485-.747.911-1.228 1.254.005.104.007.209.007.313 0 3.202-2.476 6.895-7.005 6.895-1.39 0-2.684-.401-3.773-1.089.193.022.389.034.588.034 1.153 0 2.215-.388 3.058-1.038-1.078-.019-1.987-.72-2.3-1.682.15.028.305.043.463.043.224 0 .441-.029.648-.084-1.127-.223-1.975-1.202-1.975-2.376v-.031c.332.181.711.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.122-.859.333-1.218 1.214 1.466 3.028 2.431 5.075 2.532-.041-.178-.064-.362-.064-.551 0-1.339 1.102-2.424 2.462-2.424.708 0 1.348.294 1.797.765.561-.108 1.088-.31 1.563-.588-.183.563-.573 1.039-1.082 1.338zm14.776 12.285H25.64V2.625h5.222v18.378zm10.35.482c-2.163 0-3.844-.54-5.044-1.622-1.183-1.082-1.775-2.62-1.775-4.614V8.33h5.222v5.626c0 1.37.33 2.366.99 2.99.658.627 1.57.94 2.737.94 1.436 0 2.535-.39 3.295-1.167.76-.795 1.14-1.8 1.14-3.017V8.33H53v12.673h-5.12v-2.89c-.56 1.1-1.43 1.936-2.612 2.51-1.183.575-2.535.862-4.056.862zm33.311-5.729H60.53c.186.794.7 1.41 1.546 1.85.845.44 1.943.66 3.295.66 1 0 1.91-.152 2.74-.457.844-.322 1.495-.76 1.95-1.32l3.956 1.725c-.896 1.065-2.096 1.876-3.6 2.433-1.487.558-3.245.837-5.273.837-1.994 0-3.71-.262-5.146-.786-1.436-.542-2.543-1.32-3.32-2.333-.76-1.03-1.14-2.248-1.14-3.65 0-1.42.388-2.645 1.165-3.676.777-1.03 1.876-1.816 3.295-2.356 1.437-.558 3.11-.837 5.02-.837 1.994 0 3.7.296 5.12.887 1.437.575 2.527 1.403 3.27 2.485.744 1.08 1.116 2.373 1.116 3.877v.66l-.001.001zM69.35 13.17c-.032-.76-.455-1.377-1.266-1.85-.794-.473-1.825-.71-3.093-.71-1.25 0-2.272.228-3.066.684-.794.457-1.267 1.082-1.42 1.876h8.847-.002z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 76, height: 24 }), (t.a = d)
    },
    tM6R: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var r = { help: 'https://help.twitter.com/using-twitter/spaces', settings: 'https://twitter.com/settings/spaces' }
    },
    twgV: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DataSharingWithBusinessPartners', function () {
          return _
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('NeAX'),
        s = n('rxPX'),
        l = n('0KEI'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { settings: i.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowPartnerships: e.settings.allowPartnerships }
          })
          .propsFromActions(function () {
            return {
              updateSettings: i.updateSettings,
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_SHARING_WITH_BUSINESS_PARTNERS_SCREEN',
              ),
            }
          }),
        d = n('3XMw'),
        f = n.n(d),
        p = n('yoO3'),
        b = n('7JQg'),
        m = n('7FtF'),
        y = n('k89r'),
        h = n('xHsv'),
        O = n('cCdp')
      function g(e, t) {
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
            ? g(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var v = f.a.h14ba864,
        w = f.a.d7fcc4fa,
        S = f.a.d3c20d8f,
        j = f.a.jdaf84e3,
        P = { page: 'settings', section: 'data_sharing_with_business_partners' }
      function _(e) {
        var t = e.allowPartnerships,
          n = e.createLocalApiErrorHandler,
          r = e.location,
          c = e.updateSettings,
          i = Object(y.a)()
        return o.a.createElement(
          b.b,
          { namespace: P },
          o.a.createElement(
            p.a,
            null,
            o.a.createElement(
              m.a,
              { location: r, screenType: 'secondaryDetail', title: v },
              o.a.createElement(h.a, { description: w }),
              o.a.createElement(O.a, {
                checked: t,
                helpText: j,
                label: S,
                learnMoreLink: 'https://support.twitter.com/articles/20175379',
                name: 'allowPartnerships',
                onChange: function (e, t) {
                  i.scribe(E(E({}, P), {}, { element: e, action: t ? 'enable' : 'disable' })),
                    c(a()({}, e, t)).catch(n({ showToast: !0 }))
                },
              }),
            ),
          ),
        )
      }
      var k = u(_)
      t.default = k
    },
    uAEl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return N
        })
      var r = n('97Jx'),
        a = n.n(r),
        c = (n('z84I'), n('hBvt'), n('ERkP')),
        o = n.n(c),
        i = n('v6aA'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('yoO3'),
        d = n('7JQg'),
        f = n('xHsv'),
        p = n('7FtF'),
        b = n('OySi'),
        m = 'accountAccessScreen',
        y = n('MWbm'),
        h = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        O = n.n(h),
        g = n('Lsrn'),
        E = n('k/Ka')
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(E.a)(
          'svg',
          w(
            w({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [g.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M17.89 7.673c-.002-3.246-2.644-5.888-5.89-5.888S6.112 4.427 6.11 7.673v.002c0 .414.337.75.75.75.415 0 .75-.336.75-.75 0-2.42 1.97-4.39 4.39-4.39s4.39 1.97 4.39 4.39c0 .414.335.75.75.75.413 0 .75-.336.75-.75v-.002z',
            }),
            o.a.createElement('path', {
              d: 'M19.75 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm.75 12.482c0 .413-.336.75-.75.75H4.25c-.414 0-.75-.337-.75-.75V9.56c0-.414.336-.75.75-.75h15.5c.414 0 .75.336.75.75v10.23z',
            }),
            o.a.createElement('path', {
              d: 'M12 11.72c-1.136 0-2.057.92-2.057 2.056 0 .87.543 1.61 1.307 1.91v1.397c0 .414.336.75.75.75s.75-.336.75-.75v-1.396c.764-.3 1.307-1.04 1.307-1.91 0-1.137-.92-2.058-2.057-2.058z',
            }),
          ),
        )
      }
      S.metadata = { width: 24, height: 24 }
      var j = S
      function P(e, t) {
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
            ? P(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var k = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(E.a)(
          'svg',
          _(
            _({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [g.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M6.11 4.25v1.86H4.25C3.01 6.11 2 7.12 2 8.36v11.39C2 20.99 3.01 22 4.25 22h11.39c1.24 0 2.25-1.01 2.25-2.25v-1.86h1.86c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2H8.36C7.12 2 6.11 3.01 6.11 4.25zm9.53 16.25H4.25c-.413 0-.75-.337-.75-.75V8.36c0-.412.337-.75.75-.75h11.39c.412 0 .75.338.75.75v11.39c0 .413-.338.75-.75.75zm4.11-17c.413 0 .75.337.75.75v11.39c0 .412-.337.75-.75.75h-1.86V8.36c0-1.24-1.01-2.25-2.25-2.25H7.61V4.25c0-.413.338-.75.75-.75h11.39z',
            }),
          ),
        )
      }
      k.metadata = { width: 24, height: 24 }
      var C = k,
        T = n('3JQt'),
        D = n('wz7L'),
        R = l.a.f8645654,
        F = l.a.b02df747,
        L = l.a.a2197725,
        M = l.a.j95edf76,
        A = l.a.g2841de4,
        I = l.a.ae72d4c4,
        H = l.a.h1abfbcd,
        x = l.a.j748604a,
        U = { page: 'settings', section: 'security_and_account_access' }
      function N(e) {
        var t = e.location,
          n = (function (e) {
            return [
              { label: M, description: L, link: '/settings/security', Icon: j },
              { label: I, description: A, link: '/settings/apps_and_sessions', Icon: C },
              e.isTrue('responsive_web_disconnect_third_party_sso_enabled')
                ? { label: H, description: x, link: '/settings/connected_accounts', Icon: T.a }
                : void 0,
              e.isTrue('responsive_web_delegate_enabled')
                ? {
                    description: 'Manage an organization and Team.',
                    label: 'Twitter Delegate',
                    link: '/settings/delegate?enable_filtered_bundle=bundle.Delegate',
                    Icon: D.a,
                  }
                : void 0,
            ]
          })(o.a.useContext(i.a).featureSwitches)
        return o.a.createElement(
          d.b,
          { namespace: U },
          o.a.createElement(
            u.a,
            null,
            o.a.createElement(
              p.a,
              { location: t, screenType: 'primaryDetail', title: R },
              o.a.createElement(
                y.a,
                { testID: m },
                o.a.createElement(f.a, { description: F }),
                n.map(function (e) {
                  return e && o.a.createElement(b.b, a()({}, e, { key: e.link }))
                }),
              ),
            ),
          ),
        )
      }
    },
    vMn4: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('Lsrn'),
        s = n('k/Ka')
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M21 3.25H6c-1.24 0-2.25 1.01-2.25 2.25v.75H3C1.76 6.25.75 7.26.75 8.5v10c0 1.24 1.01 2.25 2.25 2.25h15c1.24 0 2.25-1.01 2.25-2.25v-.75H21c1.24 0 2.25-1.01 2.25-2.25v-10c0-1.24-1.01-2.25-2.25-2.25zM2.25 8.5c0-.413.337-.75.75-.75h1.654C4.37 8.938 3.438 9.87 2.25 10.154V8.5zM3 19.25c-.413 0-.75-.337-.75-.75v-1.654c1.188.283 2.12 1.216 2.404 2.404H3zm15.75-.75c0 .413-.337.75-.75.75h-1.654c.283-1.188 1.216-2.12 2.404-2.404V18.5zm0-3.174c-2.016.323-3.6 1.908-3.924 3.924H6.174c-.323-2.016-1.908-3.6-3.924-3.924v-3.652c2.016-.323 3.6-1.908 3.924-3.924h8.652c.323 2.016 1.908 3.6 3.924 3.924v3.652zm0-5.172c-1.188-.283-2.12-1.216-2.404-2.404H18c.413 0 .75.337.75.75v1.654zm3 5.346c0 .413-.337.75-.75.75h-.75V8.5c0-1.24-1.01-2.25-2.25-2.25H5.25V5.5c0-.413.337-.75.75-.75h15c.413 0 .75.337.75.75v10z',
            }),
            o.a.createElement('path', {
              d: 'M10.5 9.316c-1.878 0-3.406 1.877-3.406 4.184s1.528 4.184 3.406 4.184 3.406-1.877 3.406-4.184-1.528-4.184-3.406-4.184zm0 6.868c-1.033 0-1.906-1.23-1.906-2.684s.873-2.684 1.906-2.684 1.906 1.23 1.906 2.684-.873 2.684-1.906 2.684z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    wsOx: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return y
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return O
        }),
        n.d(t, 'a', function () {
          return g
        }),
        n.d(t, 'e', function () {
          return E
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = (n('yH/f'), n('kGix')),
        o = n('Ssj5'),
        i = n('RqPI'),
        s = n('oEOe')
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = 'safetyMode',
        f = Object.freeze({
          REQUEST: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_REQUEST',
          SUCCESS: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_SUCCESS',
          FAILURE: 'rweb/safetyMode/UPDATE_SAFETY_MODE_SETTINGS_FAILURE',
        }),
        p = Object.freeze({
          REQUEST: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_REQUEST',
          SUCCESS: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_SUCCESS',
          FAILURE: 'rweb/safetyMode/FETCH_SAFETY_MODE_SETTINGS_FAILURE',
        }),
        b = { enabled: !1, duration: 'none', fetchSettingsFetchStatus: c.a.NONE, updateSettingsFetchStatus: c.a.NONE }
      function m() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case f.REQUEST:
            var n,
              r = null === (n = t.payload) || void 0 === n ? void 0 : n.duration
            return u(u({}, e), {}, { duration: r, updateSettingsFetchStatus: c.a.LOADED })
          case p.REQUEST:
            return u(u({}, e), {}, { fetchSettingsFetchStatus: c.a.LOADING })
          case p.SUCCESS:
            var a,
              o,
              i,
              s = !(null === (a = t.payload) || void 0 === a || !a.enabled),
              l = null === (o = t.payload) || void 0 === o ? void 0 : o.duration,
              d = null === (i = t.payload) || void 0 === i ? void 0 : i.expiration
            return u(u({}, e), {}, { enabled: s, duration: l, expiration: d, fetchSettingsFetchStatus: c.a.LOADED })
          case p.FAILURE:
            return u(u({}, e), {}, { fetchSettingsFetchStatus: c.a.FAILED })
          default:
            return e
        }
      }
      o.a.register(a()({}, d, m))
      var y = function (e) {
          return e.safetyMode || {}
        },
        h = function (e) {
          return e.safetyMode.fetchSettingsFetchStatus
        },
        O = function (e) {
          return e.safetyMode.updateSettingsFetchStatus
        },
        g = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(s.b)(e, { request: r.SettingsGraphQL.fetchSafetyModeSettings })({
              actionTypes: p,
              context: 'FETCH_SAFETY_MODE_SETTINGS',
            })
          }
        },
        E = function (e) {
          return function (t, n, r) {
            var a = r.api,
              c = n(),
              o = { userId: Object(i.q)(c) || '', duration: e }
            return Object(s.c)(t, { params: o, request: a.SettingsGraphQL.updateSafetyModeSettings })({
              actionTypes: f,
              context: 'UPDATE_SAFETY_MODE_SETTINGS',
              payload: o,
            })
          }
        }
    },
    wz7L: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('Lsrn'),
        s = n('k/Ka')
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    x8q0: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ERkP'),
        a = n.n(r),
        c = n('G6rE'),
        o = n('rxPX'),
        i = Object(o.a)()
          .propsFromState(function () {
            return { loggedInUser: c.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userId: (null == t ? void 0 : t.id_str) || '' }
          })
          .withAnalytics({ component: 'safety_mode_modal_flagged_accounts' }),
        s = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        l = n.n(s),
        u = n('QIgh'),
        d = n('8UdT'),
        f = n('88ay'),
        p = n('Ka9G')
      function b(e, t) {
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
            ? b(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var y = m(m({}, u.b), {}, l()({}, d.b.User, Object(p.a)({ decoration: f.d }))),
        h = n('jHSc'),
        O = n('fTQJ'),
        g = n('118N'),
        E = n('t62R'),
        v = n('rHpw'),
        w = n('FIs5'),
        S = n('3XMw'),
        j = n.n(S),
        P = j.a.f2351b97,
        _ = j.a.e9f1fbcb,
        k = a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            j.a.I18NFormatMessage,
            { $i18n: 'd724f426' },
            a.a.createElement(
              E.b,
              { style: { display: 'block', paddingBottom: v.a.theme.spaces.space20 } },
              j.a.c51dcdfc,
            ),
          ),
          a.a.createElement(
            j.a.I18NFormatMessage,
            { $i18n: 'h3d97f03' },
            a.a.createElement(E.b, { link: '/settings/blocked/all' }, j.a.bd0a88c1),
          ),
        ),
        C = function () {
          return a.a.createElement(w.a, { header: _, message: k })
        }
      t.default = i(function (e) {
        var t = e.history,
          n = e.userId,
          r = a.a.useMemo(
            function () {
              return Object(g.a)(n)
            },
            [n],
          )
        return a.a.createElement(
          h.b,
          {
            backButtonType: 'back',
            history: t,
            onBackClick: function () {
              t.goBack()
            },
            title: P,
            withBottomBorder: !1,
          },
          a.a.createElement(O.a, { entryConfiguration: y, module: r, renderEmptyState: C, title: P }),
        )
      })
    },
    xJPF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ManageSubscriptionScreen', function () {
          return w
        })
      n('2G9S')
      var r = n('ERkP'),
        a = n.n(r),
        c = n('rxPX'),
        o = n('su2V'),
        i = n('XOb8'),
        s = Object(c.a)()
          .propsFromState(function () {
            return {
              productSubscriptionsFetchStatus: o.j,
              subscription: function (e) {
                return Object(o.i)(e, i.e)
              },
              customerPortalUrlFetchStatus: function (e) {
                return Object(o.h)(e, i.d)
              },
              customerPortalUrl: function (e) {
                return Object(o.g)(e, i.d)
              },
            }
          })
          .propsFromActions(function () {
            return { fetchProductSubscriptions: o.a, fetchSubscriptionProductCustomerPortalUrl: o.c }
          })
          .withAnalytics({ page: 'subscriptions', section: 'management' }),
        l = n('v//M'),
        u = n('3XMw'),
        d = n.n(u),
        f = n('Wc+h'),
        p = n('yoO3'),
        b =
          (n('yH/f'),
          Object.freeze({ AppleAppStore: 'AppleAppStore', GooglePlay: 'GooglePlay', TPay: 'TPay', Stripe: 'Stripe' })),
        m = n('7FtF'),
        y = n('Ty5D'),
        h = n('MWbm'),
        O = n('cm6r'),
        g = n('atVN'),
        E = n('t62R'),
        v = n('xHsv')
      function w(e) {
        var t = e.analytics,
          n = e.customerPortalUrl,
          r = e.customerPortalUrlFetchStatus,
          c = e.fetchProductSubscriptions,
          o = e.fetchSubscriptionProductCustomerPortalUrl,
          s = e.productSubscriptionsFetchStatus,
          u = e.subscription,
          w = Object(y.h)(),
          j = d.a.ib35705d,
          P = d.a.e5fff0c7,
          _ = d.a.baf97715,
          k = 'Expire' === (null == u ? void 0 : u.state) ? ''.concat(P, ' ').concat(_) : P,
          C = d.a.fff413dc,
          T = d.a.h201c4c1,
          D = d.a.i8385a2c,
          R = d.a.h80834de,
          F = d.a.ib8ebf3b,
          L = function () {
            c()
          }
        a.a.useEffect(function () {
          t.scribe({ action: 'impression' })
        }, []),
          a.a.useEffect(
            function () {
              L()
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
            o(i.d, i.b)
        }
        return a.a.createElement(
          p.a,
          null,
          a.a.createElement(
            m.a,
            { location: w, title: j },
            a.a.createElement(v.a, { description: k }),
            a.a.createElement(
              h.a,
              null,
              a.a.createElement(l.a, {
                fetchStatus: s,
                onRequestRetry: L,
                render: function () {
                  var e,
                    t = null == u ? void 0 : u.payment_source
                  t && t !== b.Stripe && (e = t === b.AppleAppStore ? T : t === b.GooglePlay ? D : R)
                  var n = F({ mobilePlatform: e })
                  return a.a.createElement(
                    a.a.Fragment,
                    null,
                    t === b.Stripe
                      ? a.a.createElement(
                          O.a,
                          { accessibilityRole: 'button', onPress: M, style: S.manageSubscriptionInteraction },
                          a.a.createElement(
                            g.a,
                            null,
                            a.a.createElement(
                              h.a,
                              { style: S.manageSubscriptionSection },
                              a.a.createElement(E.b, null, C),
                              a.a.createElement(f.a, { style: S.goToSubscriptionPortalIcon }),
                            ),
                          ),
                        )
                      : a.a.createElement(v.a, { description: n }),
                  )
                },
                retryable: !0,
              }),
              a.a.createElement(l.a, {
                fetchStatus: r,
                onRequestRetry: function () {
                  o(i.d, i.b)
                },
                render: function () {
                  return n && (window.location.href = n), null
                },
                retryable: !0,
              }),
            ),
          ),
        )
      }
      var S = n('rHpw').a.create(function (e) {
          return {
            manageSubscriptionSection: { flexDirection: 'row', justifyContent: 'space-between' },
            goToSubscriptionPortalIcon: { color: e.colors.gray700 },
            manageSubscriptionInteraction: { cursor: 'pointer' },
          }
        }),
        j = s(w)
      t.default = j
    },
  },
])
//# sourceMappingURL=WIPED
