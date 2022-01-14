;(window.webpackJsonp = window.webpackJsonp || []).push([
  [225, 184],
  {
    '1Uii': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'OffTwitterActivity', function () {
          return x
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ddV6'),
        o = r.n(c),
        i = r('ERkP'),
        s = r('NeAX'),
        l = r('RqPI'),
        u = r('P1r1'),
        d = r('hqKg'),
        f = r('rxPX'),
        p = r('0KEI'),
        b = Object(f.a)()
          .propsFromState(function () {
            return {
              settings: s.selectUserPreferences,
              isEUUser: Object(d.createSelector)(l.l, u.g, s.selectPreferences, function (e, t, r) {
                return !(!t.settings_metadata || !t.settings_metadata.is_eu) || r.is_eu_country
              }),
            }
          })
          .adjustStateProps(function (e) {
            var t = e.isEUUser,
              r = e.settings
            return { allowCookieUse: r.allowCookieUse, allowDeviceAccess: r.allowDeviceAccess, isEUUser: t }
          })
          .propsFromActions(function () {
            return {
              updateSettings: s.updateSettings,
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'OFF_TWITTER_ACTIVITY_SCREEN',
              ),
            }
          }),
        m = r('3XMw'),
        y = r.n(m),
        h = r('yoO3'),
        O = r('7JQg'),
        g = r('7FtF'),
        E = r('k89r'),
        v = r('xHsv'),
        w = r('cCdp'),
        S = r('eb3s')
      function P(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var _ = y.a.bcae496c,
        T = y.a.acc60551,
        k = y.a.f80a33af,
        C = y.a.b276596b,
        D = y.a.c966aaf4,
        R = y.a.e8313b32,
        A = y.a.f1d46fd5,
        L = y.a.cfd2f35d,
        F = y.a.f6c8ccc7,
        I = y.a.f748b0fc,
        M = { page: 'settings', section: 'off_twitter_activity' }
      function x(e) {
        var t = e.allowDeviceAccess,
          r = e.createLocalApiErrorHandler,
          n = e.isEUUser,
          c = e.location,
          s = e.updateSettings,
          l = Object(E.a)(),
          u = (function (e, t, r) {
            var n = i.useState(!1),
              a = o()(n, 2),
              c = a[0],
              s = a[1]
            function l(e) {
              r('allowCookieUse', e)
            }
            return {
              showConfirmation: c,
              enabled: e,
              controlDisabled: t && !e,
              _handleChanged: function (e, r) {
                t && !r ? s(!0) : l(r)
              },
              _handleConfirmationCancel: function () {
                s(!1)
              },
              _handleConfirmationConfirm: function () {
                s(!1), l(!1)
              },
            }
          })(Boolean(e.allowCookieUse), Boolean(n), d)
        function d(e, t) {
          l.scribe(j(j({}, M), {}, { element: e, action: t ? 'enable' : 'disable' })),
            s(a()({}, e, t)).catch(r({ showToast: !0 }))
        }
        return i.createElement(
          O.b,
          { namespace: M },
          i.createElement(
            h.a,
            null,
            i.createElement(
              g.a,
              { location: c, screenType: 'secondaryDetail', title: _ },
              i.createElement(v.a, { description: T }),
              i.createElement(w.a, {
                checked: u.enabled,
                disabled: u.controlDisabled,
                helpText: n ? D : C,
                label: k,
                learnMoreLink: 'https://support.twitter.com/articles/20169421',
                name: 'allowCookieUse',
                onChange: u._handleChanged,
              }),
              i.createElement(w.a, {
                checked: t,
                helpText: I,
                label: F,
                learnMoreLink: 'https://support.twitter.com/articles/20175257',
                name: 'allowDeviceAccess',
                onChange: d,
              }),
            ),
            u.showConfirmation &&
              i.createElement(S.a, {
                cancelButtonLabel: L,
                confirmButtonLabel: A,
                onCancel: u._handleConfirmationCancel,
                onConfirm: u._handleConfirmationConfirm,
                text: R,
              }),
          ),
        )
      }
      var H = b(x)
      t.default = H
    },
    '21nk': function (e, t, r) {
      'use strict'
      var n = r('I9iR'),
        a = r('3KVO'),
        c = r('yLYC'),
        o = r('Ud88'),
        i = (r('/2Cm'), r('aQQo').useTrackLoadQueryInRender),
        s = (r('ERkP').useDebugValue, r('K1lQ').__internal),
        l = s.fetchQueryDeduped,
        u = s.fetchQuery
      e.exports = function (e, t, r) {
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
          h.request.node.params.name !== t.name && n(!1),
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
              renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
            })
        else {
          var O = u(d, h)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != b && d === t.environment ? b.ifEmpty(O) : (t.environment, O),
            fetchKey: f,
            fetchPolicy: p,
            query: h,
            renderPolicy: null == r ? void 0 : r.UNSTABLE_renderPolicy,
          }
        }
        return a(s)
      }
    },
    '23An': function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = n.useEffect,
        c = n.useRef
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
    '4BrD': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z',
            }),
            c.createElement('path', {
              d: 'M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    '5Y3x': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'monetizationSettingsQuery', function () {
          return L
        })
      var n = r('ERkP'),
        a = (r('enFi'), r('3XMw')),
        c = r.n(a),
        o = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        i = r.n(o),
        s = r('Lsrn'),
        l = r('k/Ka')
      function u(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [s.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          n.createElement(
            'g',
            null,
            n.createElement('path', {
              d: 'M22.856 15.271l-3.681 2.692 1.393 4.338c.06.14 0 .289-.119.379-.06.05-.129.07-.199.07-.08 0-.149-.02-.209-.07l-3.681-2.673-3.681 2.673c-.06.05-.129.07-.209.07-.07 0-.139-.02-.199-.07-.129-.09-.189-.239-.129-.379l1.393-4.338-3.671-2.692c-.119-.08-.169-.249-.129-.389.05-.15.179-.239.338-.239h4.546l1.403-4.338c.05-.15.189-.229.338-.229.139 0 .289.08.338.229l1.403 4.338h4.546c.149 0 .298.09.338.239.04.14 0 .309-.129.389zM9.421 21.94H3.217c-.699 0-1.336-.303-1.748-.83-.426-.547-.571-1.262-.397-1.961.709-2.858 3.074-5.082 6.171-5.805.399-.098.812.158.908.567.095.408-.159.815-.565.91-2.541.593-4.474 2.392-5.046 4.693-.06.245-.017.486.121.662.126.162.319.248.556.248h6.204c.418 0 .756.34.756.758s-.338.758-.756.758zm0-10.342c-1.378 0-2.918-.152-3.901-1.279-.827-.947-1.095-2.411-.819-4.473.385-2.878 2.15-4.596 4.72-4.596s4.334 1.717 4.721 4.596c.276 2.062.008 3.526-.819 4.473-.984 1.128-2.525 1.279-3.902 1.279zm0-8.826c-2.414 0-3.051 2.053-3.215 3.276-.212 1.579-.058 2.679.457 3.27.464.532 1.289.758 2.758.758s2.294-.227 2.758-.758c.514-.589.669-1.69.457-3.269-.165-1.224-.8-3.277-3.215-3.277z',
            }),
          ),
        )
      }
      f.metadata = { width: 24, height: 24 }
      var p,
        b = f,
        m = r('yoO3'),
        y = r('7FtF'),
        h = r('Ty5D'),
        O = r('n0Rl'),
        g = r('6vad'),
        E = r('0yYu'),
        v = r('OySi'),
        w = c.a.d299431b,
        S = c.a.h93824cc,
        P = c.a.a6777c1b,
        j = c.a.c1b71878,
        _ = c.a.e939cc53,
        T = c.a.ibb5e1c8,
        k = c.a.b255df58,
        C = c.a.b3f834c7,
        D = c.a.i724fb49,
        R = c.a.f66d24be,
        A = { Approved: _, NotStarted: null, Rejected: T, Submitted: k, Waitlisted: C },
        L = void 0 !== p ? p : (p = r('jN9l')),
        F = Object(O.b)(L, { errorConfig: { context: 'MONETIZATION_SETTINGS' } })
      t.default = function () {
        var e = Object(h.h)()
        return n.createElement(F, {
          render: function (t) {
            var r,
              a,
              c,
              o,
              i = t.data,
              s = t.error,
              l = !s && !(null == i || null === (r = i.viewer) || void 0 === r || !r.is_active_creator),
              u =
                (!s &&
                  (null == i ||
                  null === (a = i.viewer) ||
                  void 0 === a ||
                  null === (c = a.user_results) ||
                  void 0 === c ||
                  null === (o = c.result) ||
                  void 0 === o
                    ? void 0
                    : o.super_follows_application_status)) ||
                'NotStarted',
              d = l ? j : A[u]
            return n.createElement(
              m.a,
              null,
              n.createElement(
                y.a,
                { location: e, screenType: 'primaryDetail', title: w },
                n.createElement(g.b, { text: S }),
                n.createElement(v.b, { Icon: b, description: d, label: P, link: '/settings/superfollows' }),
                n.createElement(E.a, null),
                n.createElement(g.b, { text: D }),
                n.createElement(v.a, { label: R, link: 'https://help.twitter.com/forms/paid-features/superfollows' }),
              ),
            )
          },
          variables: {},
        })
      }
    },
    '5ZXc': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'Languages', function () {
          return A
        })
      var n = r('ERkP'),
        a = r('S/HT'),
        c = r('RqPI'),
        o = r('rxPX'),
        i = r('0KEI'),
        s = r('FDFL'),
        l = function (e) {
          var t = Object(c.n)(e)
          return t && Object(s.b)(e, t)
        },
        u = Object(o.a)()
          .propsFromState(function () {
            return { languageName: l, languageCode: c.n }
          })
          .propsFromActions(function () {
            return {
              fetchCountryNamesIfNeeded: a.a,
              fetchAvailableLanguagesIfNeeded: s.a,
              createLocalApiErrorHandler: Object(i.createLocalApiErrorHandlerWithContextFactory)('LANGUAGES_SCREEN'),
            }
          }),
        d = r('3XMw'),
        f = r.n(d),
        p = r('yoO3'),
        b = r('7JQg'),
        m = r('7FtF'),
        y = r('xHsv'),
        h = r('6vad'),
        O = r('csss'),
        g = r('0yYu'),
        E = f.a.d495680d,
        v = f.a.f9c98140,
        w = f.a.a4b69cbb,
        S = f.a.da3b2587,
        P = f.a.a4b69cbb,
        j = f.a.cab61d58,
        _ = f.a.f0853ba6,
        T = f.a.bca1de49,
        k = f.a.c3aa76c3,
        C = f.a.b2a77838,
        D = f.a.c3aa76c3,
        R = { page: 'settings', section: 'languages' }
      function A(e) {
        var t = e.createLocalApiErrorHandler,
          r = e.fetchAvailableLanguagesIfNeeded,
          a = e.fetchCountryNamesIfNeeded,
          c = e.languageCode,
          o = e.languageName,
          i = e.location
        return (
          n.useEffect(
            function () {
              c && a(c).catch(t()), r().catch(t())
            },
            [c, a, r, t],
          ),
          n.createElement(
            b.b,
            { namespace: R },
            n.createElement(
              p.a,
              null,
              n.createElement(
                m.a,
                { location: i, screenType: 'secondaryDetail', title: E },
                n.createElement(y.a, { description: v }),
                n.createElement(h.b, { text: w }),
                n.createElement(y.a, { description: S }),
                n.createElement(O.a, { description: o, label: P, link: '/settings/language' }),
                n.createElement(g.a, null),
                n.createElement(h.b, { text: j }),
                n.createElement(y.a, { description: _ }),
                n.createElement(O.a, { label: T, link: '/i/flow/language_selector' }),
                n.createElement(g.a, null),
                n.createElement(h.b, { text: k }),
                n.createElement(y.a, { description: C }),
                n.createElement(O.a, { label: D, link: '/settings/your_twitter_data/language' }),
              ),
            ),
          )
        )
      }
      var L = u(A)
      t.default = L
    },
    '6qBT': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return g
        })
      var n = r('ERkP'),
        a = r('3XMw'),
        c = r.n(a),
        o = r('yoO3'),
        i = r('7JQg'),
        s = r('7FtF'),
        l = r('MWbm'),
        u = r('xHsv'),
        d = r('csss'),
        f = c.a.cbd449af,
        p = c.a.ab125232,
        b = c.a.a5f32aa2,
        m = c.a.daef29b7,
        y = c.a.i0dd9b9d,
        h = c.a.aaafffd9,
        O = { page: 'settings', section: 'mute_and_block' }
      function g(e) {
        var t = e.location
        return n.createElement(
          i.b,
          { namespace: O },
          n.createElement(
            o.a,
            null,
            n.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: f },
              n.createElement(
                l.a,
                null,
                n.createElement(u.a, { description: p }),
                n.createElement(d.a, { label: b, link: '/settings/blocked/all' }),
                n.createElement(d.a, { label: m, link: '/settings/muted/all' }),
                n.createElement(d.a, { label: y, link: '/settings/muted_keywords' }),
                n.createElement(d.a, { label: h, link: '/settings/notifications/advanced_filters' }),
              ),
            ),
          ),
        )
      }
    },
    '7FtF': function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('1Pcy'),
        s = r.n(i),
        l = r('5Yy7'),
        u = r.n(l),
        d = r('N+ot'),
        f = r.n(d),
        p = r('AuHH'),
        b = r.n(p),
        m = r('KEM+'),
        y = r.n(m),
        h = (r('2G9S'), r('ERkP')),
        O = r('P1r1'),
        g = r('G6rE'),
        E = r('rxPX'),
        v = r('0KEI'),
        w = Object(E.a)()
          .propsFromState(function () {
            return { fetchStatus: O.o, loggedInUser: g.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: O.f,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        S = r('v//M'),
        P = r('3XMw'),
        j = r.n(P),
        _ = r('M2mT'),
        T = 'settingsDetailSave',
        k = r('mw9i'),
        C = r('0yYu'),
        D = r('/yvb'),
        R = r('rHpw')
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
          var r,
            n = b()(e)
          if (t) {
            var a = b()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var L = j.a.i2209530,
        F = (function (e) {
          u()(r, e)
          var t = A(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(s()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return h.createElement(S.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              y()(s()(e), '_render', function () {
                var t = e.props,
                  r = t.children,
                  n = t.onSubmit,
                  a = t.submitDisabled,
                  c = t.submitLabel,
                  o = t.submitType,
                  i = t.withMarginBottom
                return h.createElement(
                  k.a,
                  { style: [I.contentRoot, i && I.withMarginBottom] },
                  r,
                  n
                    ? h.createElement(
                        h.Fragment,
                        null,
                        h.createElement(C.a, null),
                        h.createElement(
                          k.a,
                          { style: I.buttonContainer },
                          h.createElement(D.a, { disabled: a, onPress: n, style: I.button, testID: T, type: o }, c),
                        ),
                      )
                    : null,
                )
              }),
              y()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchSettingsIfNeeded)().catch(r())
              }),
              e
            )
          }
          return (
            o()(r, [
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
                    r = e.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return t && t.pathname === r ? '/' : r
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUser,
                    r = e.rightControl,
                    n = e.screenType,
                    a = e.secondaryBar,
                    c = e.title,
                    o = e.withBottomBorder,
                    i = this.getBackLocation(),
                    s = t ? '@'.concat(t.screen_name) : void 0
                  return h.createElement(
                    _.a,
                    {
                      backLocation: i,
                      rightControl: r,
                      screenType: n,
                      secondaryBar: a,
                      showSubtitleOnWideDetail: !1,
                      subtitle: s,
                      title: c,
                      withBottomBorder: o,
                    },
                    t ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            r
          )
        })(h.Component)
      y()(F, 'defaultProps', { submitLabel: L, submitType: 'brandFilled', withMarginBottom: !0 })
      var I = R.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(R.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = w(F)
    },
    '899o': function (e, t, r) {
      'use strict'
      r.r(t)
      r('WNMA'), r('KqXw')
      var n,
        a = r('ERkP'),
        c = r('v6aA'),
        o = r('FIs5'),
        i = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        s = r.n(i),
        l = r('PnFR'),
        u = r('8UdT'),
        d = r('S/Qv'),
        f = r('5Y9N'),
        p = r('91Nr'),
        b = r('Yy//')
      function m(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                s()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var h = y(
          y({}, Object(f.a)({})),
          {},
          ((n = {}),
          s()(n, u.b.Message, Object(d.a)({})),
          s()(n, u.b.Tombstone, p.a),
          s()(n, u.b.Tweet, Object(b.a)({ displayBlocked: !0 })),
          s()(n, u.b.TimelineCursor, Object(l.a)({})),
          n),
        ),
        O = r('3XMw'),
        g = r.n(O),
        E = r('yoO3'),
        v = r('fTQJ'),
        w = r('WpDa'),
        S = r('ZNT5'),
        P = r('7JQg'),
        j = r('7FtF'),
        _ = r('TnO6'),
        T = g.a.f154bd64,
        k = { page: 'settings', component: 'autoblocked_account_tweets' },
        C = { context: 'safety_mode' },
        D = g.a.e9f1fbcb,
        R = g.a.de9b6641,
        A = function () {
          return a.createElement(o.a, { header: D, message: R })
        }
      t.default = function (e) {
        var t = e.history,
          r = e.location,
          n = e.match,
          o = n.params.userId,
          i = a.useContext(c.a).featureSwitches,
          s = a.useMemo(
            function () {
              return (
                (e = o),
                Object(S.a)({
                  timelineId: 'ritoActionedTweets-'.concat(e),
                  getEndpoint: function (e) {
                    return e.RitoActionedTweets.fetchRitoActionedTweets
                  },
                  getEndpointParams: function (t) {
                    var r = t.count,
                      n = t.cursor
                    return { count: r, cursor: 'string' == typeof n ? n : void 0, userId: e }
                  },
                  context: 'FETCH_RITO_ACTIONED_TWEETS_TIMELINE',
                  perfKey: 'ritoActionedTweets',
                  formatResponse: w.a,
                })
              )
              var e
            },
            [o],
          ),
          l = i.isTrue('rito_safety_mode_modal_prompt_enabled')
            ? a.createElement(_.b, { history: t, location: r, match: n, timelineType: _.a.ActionedTweets })
            : null
        return a.createElement(
          P.b,
          { data: C, namespace: k },
          a.createElement(
            E.a,
            null,
            a.createElement(
              j.a,
              { screenType: 'secondaryDetail', title: T, withMarginBottom: !1 },
              a.createElement(v.a, { entryConfiguration: h, footer: l, module: s, renderEmptyState: A, title: T }),
            ),
          ),
        )
      }
    },
    AS3p: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return o
      }),
        r.d(t, 'c', function () {
          return i
        }),
        r.d(t, 'b', function () {
          return s
        }),
        r.d(t, 'd', function () {
          return l
        }),
        r.d(t, 'e', function () {
          return f
        })
      r('yH/f')
      var n = r('SrIh'),
        a = r('JbbX'),
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
                : (Object(n.a)('Invalid consent signal state'), o.Invalid)
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
    B4m3: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'UndoTweetScreen', function () {
          return F
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = (r('WNMA'), r('KqXw'), r('7x/C'), r('DZ+c'), r('z84I'), r('6U7i'), r('ERkP')),
        o = r('v6aA'),
        i = r('gUb7'),
        s = r('qlwE'),
        l = r('P1r1'),
        u = r('rxPX'),
        d = Object(u.a)()
          .propsFromState(function () {
            return { undoTweetSettings: s.p, userClaimsFetchStatus: i.c }
          })
          .propsFromActions(function () {
            return { updateSettings: l.L }
          })
          .withAnalytics({ page: 'settings', section: 'undo_tweet' }),
        f = r('5oBF'),
        p = r('v//M'),
        b = r('3XMw'),
        m = r.n(b),
        y = r('/de5'),
        h = r('yoO3'),
        O = r('7FtF'),
        g = r('0KEI'),
        E = r('ehR8'),
        v = r('MWbm'),
        w = r('xHsv'),
        S = r('cCdp'),
        P = r('fyvP'),
        j = r('rHpw')
      function _(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var k = m.a.de43eaf2,
        C = m.a.b6ab9962,
        D = m.a.jdceda6f,
        R = m.a.i9028824,
        A = m.a.j905e6fe,
        L = m.a.e2c39a4c
      function F(e) {
        var t = e.undoTweetSettings,
          r = e.updateSettings,
          n = e.userClaimsFetchStatus,
          i = t.durationSecs,
          s = t.original,
          l = t.reply,
          u = Object(E.a)(),
          d = u.history,
          b = u.location,
          j = u.match,
          _ = c.useContext(o.a).userClaims,
          F = (i || f.a).toString(),
          M = Object(g.useCreateLocalApiErrorHandler)('UNDO_TWEET_SCREEN_CONTEXT'),
          x = _.isTrueAndEnabled('subscriptions_feature_1003'),
          H = m.a.i3b7a017,
          N = [5, 10, 20, 30, 60].map(function (e) {
            return { label: H(e), value: e.toString() }
          })
        function U(e, n) {
          if ('period' !== e) {
            var c = { undoPreview: T(T({}, t), {}, a()({}, e, !t[e])) }
            r(c).catch(M({}))
          } else r({ undoPreview: T(T({}, t), {}, { durationSecs: Number(n) }) })
        }
        return c.createElement(p.a, {
          accessibilityLabel: R,
          fetchStatus: n,
          render: function () {
            return x
              ? c.createElement(
                  h.a,
                  null,
                  c.createElement(
                    O.a,
                    { location: b, title: k },
                    c.createElement(w.a, { description: L }),
                    c.createElement(S.a, { checked: void 0 === s || s, label: C, name: 'original', onChange: U }),
                    c.createElement(S.a, { checked: void 0 === l || l, label: D, name: 'reply', onChange: U }),
                    c.createElement(
                      v.a,
                      { style: I.radioGroup },
                      c.createElement(P.a, { label: A, name: 'period', onChange: U, options: N, value: F }),
                    ),
                  ),
                )
              : c.createElement(y.b, { history: d, location: b, match: j })
          },
        })
      }
      var I = j.a.create(function (e) {
        return { radioGroup: { padding: e.spaces.space16 } }
      })
      t.default = d(F)
    },
    DFUC: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return Ae
        })
      var n = r('97Jx'),
        a = r.n(n),
        c = (r('LW0h'), r('z84I'), r('ERkP')),
        o = r('v6aA'),
        i = r('3XMw'),
        s = r.n(i),
        l = r('yoO3'),
        u = r('7JQg'),
        d = r('7FtF'),
        f = 'privacyAndSafetyScreen',
        p = r('MWbm'),
        b = r('xHsv'),
        m = r('6vad'),
        y = r('0yYu'),
        h = r('S+H3'),
        O = r('TW8A'),
        g = (r('+KXO'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        E = r.n(g),
        v = r('Lsrn'),
        w = r('k/Ka')
      function S(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                E()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var j = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(w.a)(
          'svg',
          P(
            P({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [v.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M19.98 1.775H4.02c-1.24 0-2.25 1.01-2.25 2.25v15.95c0 1.24 1.01 2.25 2.25 2.25h15.96c1.24 0 2.25-1.01 2.25-2.25V4.025c0-1.24-1.01-2.25-2.25-2.25zm.75 18.2c0 .42-.34.75-.75.75H4.02c-.41 0-.75-.33-.75-.75v-9.48h17.46v9.48zm0-10.23H3.27v-5.72c0-.42.34-.75.75-.75h15.96c.41 0 .75.33.75.75v5.72z',
            }),
            c.createElement('path', {
              d: 'M8.96 6.515v.09c0 .95-.78 1.72-1.73 1.72h-.08c-.95 0-1.73-.77-1.73-1.72v-.09c0-.95.78-1.73 1.73-1.73h.08c.95 0 1.73.78 1.73 1.73zm9.54.04c0 .42-.34.75-.75.75h-6.39c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h6.39c.41 0 .75.34.75.75zm-9.54 7.17v.09c0 .95-.78 1.73-1.73 1.73h-.08c-.95 0-1.73-.78-1.73-1.73v-.09c0-.95.78-1.72 1.73-1.72h.08c.95 0 1.73.77 1.73 1.72zm9.54.05c0 .41-.34.75-.75.75h-6.39c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h6.39c.41 0 .75.33.75.75zm0 3.6c0 .42-.34.75-.75.75h-6.39c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h6.39c.41 0 .75.34.75.75z',
            }),
          ),
        )
      }
      j.metadata = { width: 24, height: 24 }
      var _ = j
      function T(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                E()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : T(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var C = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(w.a)(
          'svg',
          k(
            k({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [v.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M21.6 3.139c-6.01-3.25-13.2-3.25-19.21 0-.24.13-.39.39-.39.66v8.58c0 8.59 9.73 10.88 9.83 10.9.05.02.11.02.17.02.05 0 .11 0 .16-.02.1-.02 9.84-2.31 9.84-10.9v-8.58c0-.27-.16-.53-.4-.66zm-1.1 9.24c0 6.9-7.27 9.08-8.5 9.4-1.24-.32-8.5-2.5-8.5-9.4v-8.13c5.35-2.73 11.64-2.73 17 0v8.13z',
            }),
            c.createElement('path', {
              d: 'M14.12 7.639H9.87c-1 0-1.9.4-2.56 1.06-.65.66-1.05 1.56-1.05 2.56 0 1.99 1.61 3.61 3.61 3.61h4.25c1 0 1.9-.41 2.55-1.06.66-.65 1.06-1.55 1.06-2.55 0-2-1.61-3.62-3.61-3.62zm-4.24 5.82c-1.22 0-2.2-.99-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.21-.98 2.2-2.2 2.2z',
            }),
          ),
        )
      }
      C.metadata = { width: 24, height: 24 }
      var D = C,
        R = r('qz6Z'),
        A = r('SOvA'),
        L = r('qo8F')
      function F(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? F(Object(r), !0).forEach(function (t) {
                E()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : F(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var M = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(w.a)(
          'svg',
          I(
            I({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [v.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
            }),
            c.createElement('path', {
              d: 'M11 10.57c-.572 0-1.21-.064-1.62-.53-.342-.392-.453-.998-.34-1.85.162-1.193.894-1.904 1.96-1.904 1.066 0 1.8.71 1.958 1.902.115.853.003 1.46-.34 1.85-.407.468-1.046.53-1.618.53zM13.59 15H8.41c-.292 0-.552-.124-.73-.348-.186-.236-.254-.56-.18-.87.37-1.563 1.808-2.474 3.5-2.474s3.13.91 3.5 2.474c.074.31.006.634-.18.87-.18.224-.438.348-.73.348z',
            }),
          ),
        )
      }
      M.metadata = { width: 24, height: 24 }
      var x = M,
        H = r('4BrD')
      function N(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(r), !0).forEach(function (t) {
                E()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(w.a)(
          'svg',
          U(
            U({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [v.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M22.52 12.78c-.17-.16-.41-.23-.65-.2-1.01.18-1.98-.29-2.5-1.17-.46-.8-.56-1.91-.2-2.52.19-.33.17-.74-.08-1.05-.2-.26-.52-.38-.84-.35-.06.01-.12.03-.17.04-1.46.45-3.02-.16-3.78-1.47-.63-1.08-.57-2.45.14-3.47.15-.21.18-.48.08-.72-.09-.24-.3-.4-.55-.45-3-.54-6.13.22-8.58 2.11-3.89 3-5.23 8.42-3.19 12.9 1.29 2.82 3.62 4.88 6.56 5.81 1.47.47 2.99.61 4.49.44 1.47-.16 2.92-.63 4.22-1.39 2.91-1.68 4.83-4.55 5.27-7.87.04-.23-.05-.47-.22-.64zM16.71 20c-2.26 1.31-4.99 1.61-7.49.82-2.53-.8-4.54-2.59-5.65-5.01-1.75-3.85-.6-8.51 2.74-11.1 1.39-1.06 3.01-1.72 4.7-1.91.55-.06 1.09-.07 1.66-.03-.5 1.31-.4 2.8.33 4.05.94 1.61 2.7 2.49 4.5 2.34-.16.96.02 2.08.58 3.02.65 1.11 1.77 1.81 3.01 1.92-.58 2.48-2.14 4.6-4.38 5.9z',
            }),
            c.createElement('path', {
              d: 'M13.19 12.67c-.67.18-1.36-.2-1.54-.87-.19-.67.21-1.36.88-1.54.66-.19 1.35.21 1.53.87.19.66-.21 1.35-.87 1.54zM9.83 6.48c-.53.15-1.07-.16-1.22-.69-.16-.53.16-1.09.69-1.23.53-.15 1.09.16 1.23.69.15.53-.16 1.09-.7 1.23zm-2.59 3.98c-.53.14-1.09-.17-1.23-.69-.15-.54.16-1.09.69-1.24.54-.14 1.09.17 1.23.7.16.54-.15 1.09-.69 1.23zm-.06 5.48c-.72.2-1.49-.23-1.69-.96-.21-.74.23-1.49.96-1.69.73-.21 1.48.22 1.69.96.2.73-.23 1.49-.96 1.69zm5 2.66c-.67.18-1.36-.21-1.54-.87-.19-.66.2-1.36.88-1.54.66-.19 1.35.21 1.53.87.19.66-.21 1.35-.87 1.54zm5.6-1.5c-.54.16-1.09-.15-1.24-.69-.15-.53.16-1.08.7-1.23.53-.15 1.08.17 1.23.7.15.53-.16 1.08-.69 1.22z',
            }),
          ),
        )
      }
      z.metadata = { width: 24, height: 24 }
      var B = z
      function K(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                E()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var X = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(w.a)(
          'svg',
          W(
            W({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [v.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M14.875 22c-.023 0-.046 0-.07-.003-.32-.03-.586-.26-.66-.574l-3.854-16.3-3.1 7.175c-.12.274-.39.452-.69.452H2.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.257L9.81 2.452c.13-.297.437-.473.755-.45.322.03.59.26.664.575l3.86 16.33 2.473-5.595c.12-.27.39-.446.686-.446h3c.413 0 .75.336.75.75s-.337.75-.75.75h-2.513l-3.177 7.188c-.12.272-.39.446-.685.446z',
            }),
          ),
        )
      }
      X.metadata = { width: 24, height: 24 }
      var Q = X,
        G = r('aPcQ'),
        Z = r('KrGU'),
        q = r('OySi'),
        V = s.a.cad53943,
        Y = s.a.df5fa1d0,
        J = s.a.a244ed50,
        $ = s.a.e908903a,
        ee = s.a.h7a0dfbe,
        te = s.a.b38d81ae,
        re = s.a.f8d4746b,
        ne = s.a.f2bd9c47,
        ae = s.a.b2810ee7,
        ce = s.a.f01fd982,
        oe = s.a.dcc5aa06,
        ie = s.a.cbd449af,
        se = s.a.ab125232,
        le = s.a.d4986f85,
        ue = s.a.cc950d94,
        de = s.a.ded416bf,
        fe = s.a.fe37f854,
        pe = s.a.fd4d9068,
        be = s.a.ab987f3b,
        me = s.a.d3d319d5,
        ye = s.a.d035a8d0,
        he = s.a.f9ff2201,
        Oe = s.a.d0b74a5a,
        ge = s.a.gd4302ec,
        Ee = s.a.bcae496c,
        ve = s.a.acc60551,
        we = s.a.h14ba864,
        Se = s.a.d7fcc4fa,
        Pe = s.a.jabb9c9a,
        je = s.a.a686c489,
        _e = s.a.cdcef7b6,
        Te = s.a.a607862a,
        ke = s.a.g5925628,
        Ce = s.a.dd6012f7,
        De = { page: 'settings', section: 'privacy_and_safety' },
        Re = [
          { label: Ce, link: 'https://privacy.twitter.com/' },
          { label: Te, link: 'https://twitter.com/en/privacy' },
          { label: ke, link: 'https://help.twitter.com/forms/privacy' },
        ]
      function Ae(e) {
        var t,
          r,
          n,
          i = e.location,
          s = c.useContext(o.a).featureSwitches,
          g = s.isTrue('rito_safety_mode_settings_enabled'),
          E = s.isTrue('voice_rooms_sharing_listening_data_with_followers_setting_enabled'),
          v = s.isTrue('responsive_web_cookie_compliance_banner_enabled')
        return c.createElement(
          u.b,
          { namespace: De },
          c.createElement(
            l.a,
            null,
            c.createElement(
              d.a,
              { location: i, screenType: 'primaryDetail', title: V },
              c.createElement(
                p.a,
                { testID: f },
                c.createElement(b.a, { description: Y }),
                c.createElement(m.b, { text: J }),
                (function (e) {
                  var t = e.includeSafetyMode,
                    r = void 0 !== t && t,
                    n = e.includeSpacesSection
                  return [
                    { label: $, description: ee, link: '/settings/audience_and_tagging', Icon: h.a },
                    { label: te, description: re, link: '/settings/your_tweets', Icon: O.a },
                    { label: ne, description: ae, link: '/settings/content_you_see', Icon: _ },
                    r ? { label: ce, description: oe, link: '/settings/safety_mode', Icon: D } : void 0,
                    { label: ie, description: se, link: '/settings/mute_and_block', Icon: R.a },
                    { label: le, description: ue, link: '/settings/direct_messages', Icon: A.a },
                    n ? { label: de, description: fe, link: '/settings/spaces', Icon: L.a } : void 0,
                    { label: pe, description: be, link: '/settings/contacts', Icon: x },
                  ].filter(Boolean)
                })({ includeSafetyMode: g, includeSpacesSection: E }).map(function (e) {
                  return c.createElement(q.b, a()({}, e, { key: e.label }))
                }),
                c.createElement(y.a, null),
                c.createElement(m.b, { text: me }),
                ((t = { includeCookiePreferences: v }),
                (r = t.includeCookiePreferences),
                (n = void 0 !== r && r),
                [
                  { label: ye, description: he, link: '/settings/ads_preferences', Icon: H.a },
                  n ? { label: Oe, description: ge, link: '/settings/cookie_preferences', Icon: B } : void 0,
                  { label: Ee, description: ve, link: '/settings/off_twitter_activity', Icon: Q },
                  { label: we, description: Se, link: '/settings/data_sharing_with_business_partners', Icon: G.a },
                  { label: Pe, description: je, link: '/settings/location_information', Icon: Z.a },
                ].filter(Boolean)).map(function (e) {
                  return c.createElement(q.b, a()({}, e, { key: e.label }))
                }),
                c.createElement(y.a, null),
                c.createElement(m.b, { text: _e }),
                Re.map(function (e) {
                  return c.createElement(q.a, a()({}, e, { key: e.label }))
                }),
              ),
            ),
          ),
        )
      }
    },
    DbkT: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return H
        })
      var n = r('97Jx'),
        a = r.n(n),
        c = (r('z84I'), r('ERkP')),
        o = r('3XMw'),
        i = r.n(o),
        s = r('yoO3'),
        l = r('7JQg'),
        u = r('xHsv'),
        d = r('7FtF'),
        f = r('OySi'),
        p = 'accessibilityScreen',
        b = r('MWbm'),
        m = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        y = r.n(m),
        h = r('Lsrn'),
        O = r('k/Ka')
      function g(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                y()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var v = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(O.a)(
          'svg',
          E(
            E({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [h.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M3.194 12.223l-.03-.03.02-.01c.01.01.01.02.01.04zm4.82-7.21c-.12.05-.22.13-.3.23l-.06-.06c.12-.07.24-.12.36-.17z',
            }),
            c.createElement('path', {
              d: 'M22.194 12.763c0 .01-.01.03-.03.06-.16.36-1.06 2.26-2.88 3.99l-.46-.46-.59-.63c1.67-1.56 2.47-3.29 2.57-3.52 0-.01.01-.02.01-.02.01-.02.02-.05.03-.07.04-.08.04-.17 0-.25-.14-.31-2.66-6.12-8.85-6.12-1.13 0-2.2.19-3.2.58l-.03-.03-1.05-1.05c.08-.1.18-.18.3-.23 1.25-.51 2.58-.77 3.98-.77 7.2 0 10.08 6.69 10.2 6.98.24.44.25 1.03 0 1.54zm-18.98-.52l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06z',
            }),
            c.createElement('path', {
              d: 'M19.284 16.813c-.01 0-.01 0-.02.01l-.44-.47.46.46zm2.83 4.24l-3.59-3.59-2.95-2.95-6.09-6.09-1.66-1.66-4.88-4.88c-.3-.3-.77-.29-1.06 0-.22.21-.28.53-.17.8.01.03.02.06.04.08.03.05.07.1.1.14.01.01.02.03.03.04l3.58 3.58c-2.51 1.99-3.6 4.54-3.63 4.63-.27.51-.28 1.1-.04 1.61 0 .01.01.03.03.06.32.73 3.25 6.92 10.17 6.92 1.91 0 3.68-.47 5.27-1.41h.01l3.78 3.78c.29.3.77.3 1.06 0 .15-.14.22-.33.22-.53 0-.19-.07-.38-.22-.53zm-18.9-8.81l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06l5.33 5.33c-3.5-1.47-5.11-4.83-5.33-5.33zm8.78 6c-.3 0-.6-.01-.88-.05-1.33-1.44-4.01-4.19-4.12-4.3l-3.21-3.2c.21-.35.49-.76.84-1.19l8.64 8.64c-.41.07-.84.1-1.27.1zm2.98-.51l-9.35-9.35c.28-.27.59-.54.92-.78l9.61 9.62c-.38.21-.78.38-1.18.51zm1.4-5.73c0 .56-.11 1.1-.31 1.59-.12.33-.29.64-.49.92l-6.09-6.09c.28-.2.59-.37.92-.49.5-.2 1.03-.31 1.59-.31.39 0 .77.05 1.13.16-.47.4-.77.99-.77 1.66 0 .18.02.35.07.51.18.8.81 1.43 1.62 1.62.16.04.33.06.5.06.67 0 1.27-.3 1.67-.78.11.37.16.75.16 1.15z',
            }),
            c.createElement('path', { d: 'M3.214 12.243l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06z' }),
          ),
        )
      }
      v.metadata = { width: 24, height: 24 }
      var w = v,
        S = r('tuke'),
        P = r('Zg3A'),
        j = r('xrkw'),
        _ = i.a.f2b23061,
        T = i.a.jf907f5b,
        k = i.a.e3719c15,
        C = i.a.f371a361,
        D = i.a.c4881c66,
        R = i.a.a5ce82a4,
        A = i.a.d495680d,
        L = i.a.f9c98140,
        F = i.a.eafe3287,
        I = i.a.d76fe4fc,
        M = [
          { label: k, description: C, link: '/settings/accessibility', Icon: w },
          { label: D, description: R, link: '/settings/display', Icon: S.a },
          { label: A, description: L, link: '/settings/languages', Icon: P.a },
          { label: F, description: I, link: '/settings/data', Icon: j.a },
        ],
        x = { page: 'settings', section: 'accessibility_display_and_languages' }
      function H(e) {
        var t = e.location
        return c.createElement(
          l.b,
          { namespace: x },
          c.createElement(
            s.a,
            null,
            c.createElement(
              d.a,
              { location: t, screenType: 'primaryDetail', title: _ },
              c.createElement(
                b.a,
                { testID: p },
                c.createElement(u.a, { description: T }),
                M.map(function (e) {
                  return c.createElement(f.b, a()({}, e, { key: e.label }))
                }),
              ),
            ),
          ),
        )
      }
    },
    E8tr: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return g
        })
      var n = r('ERkP'),
        a = r('3XMw'),
        c = r.n(a),
        o = r('yoO3'),
        i = r('7JQg'),
        s = r('7FtF'),
        l = r('MWbm'),
        u = r('xHsv'),
        d = r('csss'),
        f = c.a.ae72d4c4,
        p = c.a.g2841de4,
        b = c.a.jc02ae67,
        m = c.a.dd823129,
        y = c.a.b523ecc5,
        h = c.a.hc36dbba,
        O = { page: 'settings', section: 'apps_and_sessions' }
      function g(e) {
        var t = e.location
        return n.createElement(
          i.b,
          { namespace: O },
          n.createElement(
            o.a,
            null,
            n.createElement(
              s.a,
              { location: t, screenType: 'secondaryDetail', title: f },
              n.createElement(
                l.a,
                null,
                n.createElement(u.a, { description: p }),
                n.createElement(d.a, { label: b, link: '/settings/connected_apps' }),
                n.createElement(d.a, { label: m, link: '/settings/sessions' }),
                n.createElement(d.a, { label: y, link: '/settings/your_twitter_data/login_history' }),
                n.createElement(d.a, { label: h, link: '/settings/your_twitter_data/devices' }),
              ),
            ),
          ),
        )
      }
    },
    EAH3: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return E
        })
      r('2G9S')
      var n = r('ERkP'),
        a = r('jHSc'),
        c = r('3XMw'),
        o = r.n(c),
        i = r('Irs7'),
        s = r('MWbm'),
        l = r('cHvH'),
        u = r('Wd7d'),
        d = r('t62R'),
        f = r('rHpw'),
        p = o.a.g0cba83f,
        b = o.a.b92fa3be,
        m = o.a.d45866f3,
        y = o.a.e83ecbf6,
        h = o.a.ha597018,
        O = o.a.bcb2afc3,
        g = o.a.bff84f29
      function E(e) {
        var t = e.history,
          r = Object(i.b)()
        return (
          n.useEffect(
            function () {
              r.scribe({ page: 'settings', section: 'safety_mode', component: 'education_sheet', action: 'impression' })
            },
            [r],
          ),
          n.createElement(l.a, null, function (e) {
            var r = e.screenWidth
            return n.createElement(
              a.b,
              { backButtonType: 'back', history: t, withBottomBorder: !1 },
              n.createElement(
                s.a,
                { style: u.a.isNarrowScreenWidth(r) ? v.narrowScreen : v.wideScreen },
                n.createElement(
                  s.a,
                  { style: [v.item, v.title] },
                  n.createElement(d.b, { size: 'title4', weight: 'heavy' }, p),
                ),
                n.createElement(
                  s.a,
                  { style: v.item },
                  n.createElement(d.b, { style: v.heading, weight: 'bold' }, b),
                  n.createElement(d.b, { size: 'body' }, m),
                ),
                n.createElement(
                  s.a,
                  { style: v.item },
                  n.createElement(d.b, { style: v.heading, weight: 'bold' }, y),
                  n.createElement(d.b, { size: 'body' }, h),
                ),
                n.createElement(
                  s.a,
                  { style: v.item },
                  n.createElement(d.b, { style: v.heading, weight: 'bold' }, O),
                  n.createElement(d.b, { size: 'body' }, g),
                ),
              ),
            )
          })
        )
      }
      var v = f.a.create(function (e) {
        return {
          wideScreen: { marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space80 },
          narrowScreen: {
            paddingBottom: 'calc('.concat(e.spaces.space32, ' + ').concat(f.a.iPhoneOffsetBottom, ')'),
            marginHorizontal: e.spaces.space32,
          },
          item: { paddingBottom: e.spaces.space24 },
          title: { paddingTop: e.spaces.space24 },
          heading: { paddingBottom: e.spaces.space8 },
        }
      })
    },
    KPFR: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'T1LabsScreen', function () {
          return P
        })
      r('z84I')
      var n = r('ERkP'),
        a = r('v6aA'),
        c = r('gUb7'),
        o = r('rxPX'),
        i = Object(o.a)()
          .propsFromState(function () {
            return { userClaimsFetchStatus: c.c }
          })
          .withAnalytics({ page: 'settings', section: 't1_labs' }),
        s = r('v//M'),
        l = r('3XMw'),
        u = r.n(l),
        d = r('yoO3'),
        f = r('7FtF'),
        p = r('Ty5D'),
        b = r('xHsv'),
        m = r('0yYu'),
        y = r('o1YB'),
        h = u.a.f6e88161,
        O = u.a.i9028824,
        g = u.a.e4972a1a,
        E = u.a.e4b3f520,
        v = u.a.db8346ee,
        w = u.a.a99d8e60,
        S = u.a.fb00a8ee
      function P(e) {
        var t = e.userClaimsFetchStatus,
          r = Object(p.h)(),
          c = n.useContext(a.a).userClaims,
          o = c.isTrueAndEnabled('subscriptions_feature_labs_1001'),
          i = c.isTrueAndEnabled('subscriptions_long_video_upload'),
          l = [
            { label: E, subtext: v, shouldRender: o },
            { label: w, subtext: S, shouldRender: i },
          ]
        return n.createElement(s.a, {
          accessibilityLabel: O,
          fetchStatus: t,
          render: function () {
            return n.createElement(
              d.a,
              null,
              n.createElement(
                f.a,
                { location: r, title: h },
                n.createElement(b.a, { description: g }),
                n.createElement(m.a, null),
                l.map(function (e) {
                  var t = e.label,
                    r = e.shouldRender,
                    a = e.subtext
                  return r ? n.createElement(y.a, { key: t, label: t, subtext: a }) : null
                }),
              ),
            )
          },
        })
      }
      t.default = i(P)
    },
    LtDK: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'SpacesSettingsScreen', function () {
          return E
        })
      r('+KXO'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = (r('1t7P'), r('jQ/y'), r('ERkP')),
        o = r('tM6R'),
        i = r('P1r1'),
        s = r('rxPX'),
        l = Object(s.a)()
          .propsFromState(function () {
            return { sharingAudiospacesListeningDataWithFollowersEnabled: i.z }
          })
          .propsFromActions(function () {
            return { updateSharingAudiospacesListeningDataWithFollowersSetting: i.M }
          })
          .withAnalytics({ page: 'settings' }),
        u = r('3XMw'),
        d = r.n(u),
        f = r('yoO3'),
        p = r('7FtF'),
        b = r('k89r'),
        m = r('xHsv'),
        y = r('cCdp')
      function h(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var g = { page: 'settings' }
      function E(e) {
        var t = e.location,
          r = e.sharingAudiospacesListeningDataWithFollowersEnabled,
          n = e.updateSharingAudiospacesListeningDataWithFollowersSetting,
          a = Object(b.a)()
        return c.createElement(
          f.a,
          null,
          c.createElement(
            p.a,
            { location: t, screenType: 'secondaryDetail', title: v.screen.title },
            c.createElement(m.a, { description: v.screen.description }),
            c.createElement(y.a, {
              checked: r,
              helpText: v.audiospaceListeningTransparency.help,
              label: v.audiospaceListeningTransparency.label,
              learnMoreLink: o.a.help,
              name: 'ext_sharing_audiospaces_listening_data_with_followers',
              onChange: function (e, t) {
                n(t),
                  a.scribe(
                    O(
                      O({}, g),
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
          screen: { title: d.a.ded416bf, description: d.a.fe37f854 },
          audiospaceListeningTransparency: { label: d.a.j3d2cfc4, help: d.a.d9588ae6 },
        },
        w = l(E)
      t.default = w
    },
    M2mT: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('m3Bd'),
        a = r.n(n),
        c = r('VrFO'),
        o = r.n(c),
        i = r('Y9Ll'),
        s = r.n(i),
        l = r('1Pcy'),
        u = r.n(l),
        d = r('5Yy7'),
        f = r.n(d),
        p = r('N+ot'),
        b = r.n(p),
        m = r('AuHH'),
        y = r.n(m),
        h = r('KEM+'),
        O = r.n(h),
        g = (r('2G9S'), r('i4UL'), r('+/5o')),
        E = r('ERkP'),
        v = r('HPNB'),
        w = r('v6aA'),
        S = r('VAZu'),
        P = r('wiP2'),
        j = r('Es6L'),
        _ = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('rHpw'))
      function T(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                O()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : T(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var C = _.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k(k({}, _.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: { position: 'sticky', top: 0 },
            appBarZindex: { backfaceVisibility: 'hidden', zIndex: e.componentZIndices.appBarZIndex },
          }
        }),
        D = r('MWbm'),
        R = r('yw4N'),
        A = r('TnY3'),
        L = r('cHvH'),
        F = r('3xLC')
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return b()(this, r)
        }
      }
      var M = (function (e) {
        f()(r, e)
        var t = I(r)
        function r() {
          var e
          o()(this, r)
          for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            O()(u()(e), '_renderChildren', function (t) {
              var r = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? E.createElement(
                    D.a,
                    { style: C.fill },
                    E.createElement(
                      R.a,
                      { style: C.viewportView },
                      t ? e._renderInlineNav({ isTwoColumnLayout: !0, appBarScrollEnabled: !0 }) : null,
                      r,
                    ),
                  )
                : r
            }),
            e
          )
        }
        return (
          s()(r, [
            {
              key: 'render',
              value: function () {
                var e = this
                return E.createElement(L.a, null, function (t) {
                  var r = t.windowWidth
                  return v.a.isTwoColumnLayout(r) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                })
              },
            },
            {
              key: '_renderForOneColumnLayout',
              value: function () {
                var e = this.props,
                  t = e.children,
                  r =
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
                return E.createElement(
                  E.Fragment,
                  null,
                  Object(j.a)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : E.createElement(P.a.Configure, r),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this,
                  t = this.context.rootDetailPerColumnScroll
                return E.createElement(w.a.Consumer, null, function (r) {
                  var n = r.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
                    a = t
                      ? !n && e._renderInlineNav({ isTwoColumnLayout: !0 })
                      : e._renderInlineNav({ isTwoColumnLayout: !0 })
                  return E.createElement(E.Fragment, null, a, e._renderChildren(n))
                })
              },
            },
            {
              key: '_renderInlineNav',
              value: function (e) {
                var t = e.appBarScrollEnabled,
                  r = void 0 !== t && t,
                  n = e.isTwoColumnLayout,
                  a = this.props,
                  c = a.SideNavButton,
                  o = a.TabBar,
                  i = a.TeamsSwitcher,
                  s = a.backLocation,
                  l = a.documentTitle,
                  u = a.headerless,
                  d = a.history,
                  f = a.leftControl,
                  p = a.middleControl,
                  b = a.onBackClick,
                  m = a.rightControl,
                  y = a.screenType,
                  h = a.searchBoxOptions,
                  O = a.secondaryBar,
                  v = a.showSubtitleOnRoot,
                  w = a.showSubtitleOnWideDetail,
                  j = a.subtitle,
                  _ = a.title,
                  T = a.titleIconCell,
                  k = a.titleIconCellSize,
                  R = a.withBottomBorder,
                  A = a.withDetailOpen,
                  L = a.withSearchBox,
                  F = a.withTweetButton,
                  I = 'root' === y,
                  M = 'secondaryRoot' === y,
                  x = 'primaryDetail' === y,
                  H = (x && w) || (I && v),
                  N = I || (x && n),
                  U = I ? g.c : x ? g.a : void 0,
                  z = E.createElement(
                    D.a,
                    { style: r ? [C.appBarContainer, C.appBarZindex] : C.appBarZindex },
                    E.createElement(S.a, {
                      backLocation: s,
                      fixed: !1,
                      hideBackButton: N,
                      history: d,
                      leftControl: f,
                      middleControl: p,
                      onBackClick: b,
                      rightControl: m,
                      secondaryBar: r ? O : null,
                      subtitle: H ? j : void 0,
                      title: _,
                      titleDomId: U,
                      titleIconCell: T,
                      titleIconCellSize: k,
                      withBottomBorder: R,
                    }),
                  ),
                  B =
                    I || (M && A)
                      ? null
                      : E.createElement(P.a.Configure, {
                          SideNavButton: c,
                          TabBar: o,
                          TeamsSwitcher: i,
                          backLocation: s,
                          documentTitle: l,
                          headerless: u,
                          middleControl: p,
                          onBackClick: b,
                          rightControl: m,
                          searchBoxOptions: h,
                          subtitle: j,
                          title: _,
                          withSearchBox: L,
                          withTweetButton: F,
                        })
                return E.createElement(E.Fragment, null, B, z, r ? null : O)
              },
            },
          ]),
          r
        )
      })(E.Component)
      O()(M, 'contextType', F.a),
        O()(M, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(M)
    },
    NeAX: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return k
        }),
        r.d(t, 'selectPreferences', function () {
          return A
        }),
        r.d(t, 'selectData', function () {
          return L
        }),
        r.d(t, 'selectUserPreferences', function () {
          return F
        }),
        r.d(t, 'selectPreferencesFetchStatus', function () {
          return I
        }),
        r.d(t, 'selectFetchDataStatus', function () {
          return M
        }),
        r.d(t, 'selectAge', function () {
          return x
        }),
        r.d(t, 'selectBirthdate', function () {
          return H
        }),
        r.d(t, 'selectHasExactAge', function () {
          return N
        }),
        r.d(t, 'selectGender', function () {
          return U
        }),
        r.d(t, 'selectLanguage', function () {
          return z
        }),
        r.d(t, 'selectSignupDetails', function () {
          return B
        }),
        r.d(t, 'selectTwitterInterests', function () {
          return K
        }),
        r.d(t, 'selectFetchTwitterInterestsStatus', function () {
          return W
        }),
        r.d(t, 'selectPartnerInterests', function () {
          return X
        }),
        r.d(t, 'selectFetchPartnerInterestsStatus', function () {
          return Q
        }),
        r.d(t, 'clearLocations', function () {
          return G
        }),
        r.d(t, 'updateGender', function () {
          return Z
        }),
        r.d(t, 'updateLanguage', function () {
          return q
        }),
        r.d(t, 'updateInterest', function () {
          return V
        }),
        r.d(t, 'fetchPreferencesIfNeeded', function () {
          return Y
        }),
        r.d(t, 'updatePreferences', function () {
          return $
        }),
        r.d(t, 'updateSettings', function () {
          return ee
        }),
        r.d(t, 'fetchDataIfNeeded', function () {
          return re
        }),
        r.d(t, 'createAudienceDownload', function () {
          return ae
        }),
        r.d(t, 'createDataDownload', function () {
          return ce
        }),
        r.d(t, 'fetchTwitterInterestsIfNeeded', function () {
          return oe
        }),
        r.d(t, 'fetchPartnerInterestsIfNeeded', function () {
          return se
        }),
        r.d(t, 'syncSettings', function () {
          return de
        })
      r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('ddV6'),
        a = r.n(n),
        c = r('KEM+'),
        o = r.n(c),
        i = (r('KOtZ'), r('+KXO'), r('JtPf'), r('7x/C'), r('vrRf'), r('Ee2X'), r('RqPI')),
        s = r('P1r1'),
        l = r('cmwl'),
        u = r('hqKg'),
        d = r('kGix'),
        f = r('YeIG'),
        p = r('Ssj5'),
        b = r('oEOe')
      function m(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var h,
        O = 'personalization',
        g = 'rweb/'.concat(O),
        E = Object(b.a)(g, 'FETCH_PREFERENCES'),
        v = Object(b.a)(g, 'UPDATE_PREFERENCES'),
        w = Object(b.a)(g, 'FETCH_DATA'),
        S = Object(b.a)(g, 'UPDATE_COOKIES'),
        P = Object(b.a)(g, 'FETCH_TWITTER_INTERESTS'),
        j = Object(b.a)(g, 'FETCH_PARTNER_INTERESTS'),
        _ = ((h = 'CLEAR_LOCATIONS'), ''.concat(g, '/').concat(h)),
        T = {
          preferences: { data: {}, fetchStatus: d.a.NONE },
          data: { data: {}, fetchStatus: d.a.NONE },
          twitter_interests: { data: {}, fetchStatus: d.a.NONE },
          partner_interests: { data: {}, fetchStatus: d.a.NONE },
        }
      function k() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case E.REQUEST:
            return y(y({}, e), {}, { preferences: y(y({}, e.preferences), {}, { fetchStatus: d.a.LOADING }) })
          case E.SUCCESS:
            return y(
              y({}, e),
              {},
              { preferences: { data: y(y({}, e.preferences.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case E.FAILURE:
            return y(
              y({}, e),
              {},
              { preferences: y(y({}, e.preferences), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case v.REQUEST:
            return y(
              y({}, e),
              {},
              { preferences: { data: y(y({}, e.preferences.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case w.REQUEST:
            return y(y({}, e), {}, { data: y(y({}, e.data), {}, { fetchStatus: d.a.LOADING }) })
          case w.SUCCESS:
            return y(
              y({}, e),
              {},
              { data: { data: y(y({}, e.data.data), t.payload), error: null, fetchStatus: d.a.LOADED } },
            )
          case w.FAILURE:
            return y(y({}, e), {}, { data: y(y({}, e.data), {}, { error: t.payload, fetchStatus: d.a.FAILED }) })
          case P.REQUEST:
            return y(
              y({}, e),
              {},
              { twitter_interests: y(y({}, e.twitter_interests), {}, { fetchStatus: d.a.LOADING }) },
            )
          case P.SUCCESS:
            return y(
              y({}, e),
              {},
              {
                twitter_interests: {
                  data: y(y({}, e.twitter_interests.data), t.payload),
                  error: null,
                  fetchStatus: d.a.LOADED,
                },
              },
            )
          case P.FAILURE:
            return y(
              y({}, e),
              {},
              { twitter_interests: y(y({}, e.twitter_interests), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case j.REQUEST:
            return y(
              y({}, e),
              {},
              { partner_interests: y(y({}, e.partner_interests), {}, { fetchStatus: d.a.LOADING }) },
            )
          case j.SUCCESS:
            return y(
              y({}, e),
              {},
              {
                partner_interests: {
                  data: y(y({}, e.partner_interests.data), t.payload),
                  error: null,
                  fetchStatus: d.a.LOADED,
                },
              },
            )
          case j.FAILURE:
            return y(
              y({}, e),
              {},
              { partner_interests: y(y({}, e.partner_interests), {}, { error: t.payload, fetchStatus: d.a.FAILED }) },
            )
          case _:
            return y(
              y({}, e),
              {},
              { data: y(y({}, e.data), {}, { data: y(y({}, e.data.data), {}, { location_history: [] }) }) },
            )
          default:
            return e
        }
      }
      p.a.register(o()({}, O, k))
      var C = {
          allowCookieUse: 'use_cookie_personalization',
          allowDeviceAccess: 'allow_logged_out_device_personalization',
          allowLocationHistoryUse: 'allow_location_history_personalization',
          allowPartnerships: 'allow_sharing_data_for_third_party_personalization',
          allowPersonalization: 'allow_ads_personalization',
        },
        D = {
          allowCookieUse: 'use_cookie_personalization',
          allowDeviceAccess: 'link_logged_out_devices',
          allowPartnerships: 'share_data_with_third_party',
          allowPersonalization: 'allow_ads_personalization',
        },
        R = { use_age_for_personalization: 'age_preferences', use_gender_for_personalization: 'gender_preferences' },
        A = function (e) {
          return e.personalization.preferences.data
        },
        L = function (e) {
          return e.personalization.data.data
        },
        F = Object(u.createSelector)(i.l, A, s.g, function (e, t, r) {
          var n = e ? [C, r] : [D, t],
            c = a()(n, 2),
            o = c[0],
            i = c[1]
          return Object.keys(o).reduce(function (e, t) {
            return (e[t] = i[o[t]]), e
          }, {})
        }),
        I = function (e) {
          var t = A(e)
          return Object(f.a)(t) ? e.personalization.preferences.fetchStatus : d.a.LOADED
        },
        M = function (e) {
          return e.personalization.data.fetchStatus
        },
        x = function (e) {
          return e.personalization.data.data.age ? e.personalization.data.data.age : []
        },
        H = function (e) {
          return e.personalization.data.data.birth_date ? e.personalization.data.data.birth_date : ''
        },
        N = function (e) {
          return !!e.personalization.data.data.has_exact_age
        },
        U = function (e) {
          var t = L(e),
            r = A(e),
            n = r.gender_preferences && r.gender_preferences.gender_override
          return n && n.type ? n : { type: t.gender, value: t.gender }
        },
        z = function (e) {
          return e.personalization.data.data.languages ? e.personalization.data.data.languages : []
        },
        B = function (e) {
          return e.personalization.data.data.sign_up_details ? e.personalization.data.data.sign_up_details : {}
        },
        K = function (e) {
          return e.personalization.twitter_interests.data
        },
        W = function (e) {
          return e.personalization.twitter_interests.fetchStatus
        },
        X = function (e) {
          return e.personalization.partner_interests.data
        },
        Q = function (e) {
          return e.personalization.partner_interests.fetchStatus
        },
        G = function () {
          return function (e, t) {
            var r = t(),
              n = A(r),
              a = Date.now(),
              c = { location_preferences: y(y({}, n.location_preferences), {}, { override_times: [a] }) }
            return e($(c)).then(function () {
              return e({ type: _ })
            })
          }
        },
        Z = function (e) {
          return function (t, r) {
            var n = r(),
              a = { gender_preferences: y(y({}, A(n).gender_preferences), {}, { gender_override: e }) }
            return t($(a))
          }
        },
        q = function (e, t) {
          return function (r, n) {
            if (Object(f.a)(e)) return Promise.resolve()
            var a = n(),
              c = A(a),
              o = c.language_preferences.disabled_languages || [],
              i = o.indexOf(e),
              s = i > -1
            if (s && t) o.splice(i, 1)
            else {
              if (s || t) return Promise.resolve()
              o.push(e)
            }
            var l = { language_preferences: y(y({}, c.language_preferences), {}, { disabled_languages: o }) }
            return r($(l))
          }
        },
        V = function (e, t, r) {
          return function (n, a) {
            if (Object(f.a)(e) || -1 === ['ads', 'partner'].indexOf(r)) return Promise.resolve()
            var c = 'partner' === r,
              i = a(),
              s = A(i).interest_preferences,
              l = c ? 'disabled_partner_interests' : 'disabled_interests',
              u = s[l],
              d = u.indexOf(e),
              p = d > -1
            if (p && t) u.splice(d, 1)
            else {
              if (p || t) return Promise.resolve()
              u.push(e)
            }
            var b = {
              interest_preferences: o()(
                { disabled_interests: s.disabled_interests, disabled_partner_interests: s.disabled_partner_interests },
                l,
                u,
              ),
            }
            return n($(b))
          }
        },
        Y = function () {
          return function (e, t, r) {
            r.api
            var n = t().personalization.preferences
            return n.fetchStatus !== d.a.LOADING && n.fetchStatus !== d.a.LOADED ? e(J()) : Promise.resolve()
          }
        },
        J = function () {
          return function (e, t, r) {
            var n = r.api
            return Object(b.b)(e, { request: n.Personalization.fetchPreferences })({
              actionTypes: E,
              context: 'FETCH_PERSONALIZATION_PREFERENCES',
            })
          }
        },
        $ = function (e) {
          return function (t, r, n) {
            var a = n.api
            return Object(f.a)(e)
              ? Promise.resolve()
              : Object(b.c)(t, { params: { preferences: e }, request: a.Personalization.updatePreferences })({
                  actionTypes: v,
                  context: 'ACTION_UPDATE_PERSONALIZATION_PREFERENCES',
                  payload: e,
                })
          }
        },
        ee = function (e) {
          return function (t, r, n) {
            var a = n.api,
              c = n.featureSwitches
            if (Object(f.a)(e)) return Promise.resolve()
            var u = r(),
              d = i.l(u),
              p = d ? C : D,
              b = Object.keys(e).reduce(function (t, r) {
                r in p && (t[p[r]] = e[r])
                r in R && (t[R[r]] = o()({}, r, e[r]))
                return t
              }, {})
            return d
              ? t(s.L(b)).then(function () {
                  Object(l.a)().then(function (e) {
                    e.updateBranchTracking(c, a)
                  }),
                    t(ue(b))
                })
              : te(c, t, b, a)
          }
        },
        te = function (e, t, r, n) {
          return Object(b.c)(t, { params: { preferences: r }, request: n.Personalization.updatePreferences })({
            actionTypes: v,
            context: 'ACTION_UPDATE_PERSONALIZATION_PREFERENCES',
            payload: r,
          }).then(function () {
            Object(l.a)().then(function (t) {
              t.updateBranchTracking(e, n)
            })
          })
        },
        re = function () {
          return function (e, t, r) {
            r.api
            var n = t().personalization.data
            return n.fetchStatus !== d.a.LOADING && n.fetchStatus !== d.a.LOADED ? e(ne()) : Promise.resolve()
          }
        },
        ne = function () {
          return function (e, t, r) {
            var n = r.api
            return Object(b.b)(e, { request: n.Personalization.fetchData })({
              actionTypes: w,
              context: 'FETCH_PERSONALIZATION_DATA',
            })
          }
        },
        ae = function () {
          return function (e, t, r) {
            var n = r.api
            return Object(b.d)(e, { request: n.Personalization.createAudienceDownload })('CREATE_AUDIENCE_DOWNLOAD')
          }
        },
        ce = function () {
          return function (e, t, r) {
            var n = r.api
            return Object(b.d)(e, { request: n.Personalization.createDataDownload })('CREATE_DATA_DOWNLOAD')
          }
        },
        oe = function () {
          return function (e, t, r) {
            r.api
            var n = t().personalization.twitter_interests
            return n.fetchStatus !== d.a.LOADING && n.fetchStatus !== d.a.LOADED ? e(ie()) : Promise.resolve()
          }
        },
        ie = function () {
          return function (e, t, r) {
            var n = r.api
            return Object(b.b)(e, { request: n.Personalization.fetchTwitterInterests })({
              actionTypes: P,
              context: 'FETCH_PERSONALIZATION_TWITTER_INTERESTS',
            })
          }
        },
        se = function () {
          return function (e, t, r) {
            r.api
            var n = t().personalization.partner_interests
            return n.fetchStatus !== d.a.LOADING && n.fetchStatus !== d.a.LOADED ? e(le()) : Promise.resolve()
          }
        },
        le = function () {
          return function (e, t, r) {
            var n = r.api
            return Object(b.b)(e, { request: n.Personalization.fetchPartnerInterests })({
              actionTypes: j,
              context: 'FETCH_PERSONALIZATION_PARTNER_INTERESTS',
            })
          }
        },
        ue = function (e) {
          return function (t, r, n) {
            var a = n.api,
              c = {}
            return (
              e.hasOwnProperty('use_cookie_personalization') &&
                (c.use_cookie_personalization = e.use_cookie_personalization),
              e.hasOwnProperty('allow_ads_personalization') &&
                (c.allow_ads_personalization = e.allow_ads_personalization),
              Object(f.a)(c)
                ? Promise.resolve()
                : Object(b.b)(t, { params: c, request: a.Personalization.updateCookies })({
                    actionTypes: S,
                    context: 'APP_UPDATE_PERSONALIZATION_COOKIES',
                    params: c,
                  })
            )
          }
        },
        de = function () {
          return function (e, t, r) {
            var n = r.api
            return Object(b.d)(e, { request: n.Personalization.syncSettings })('SYNC_SETTINGS')
          }
        }
    },
    OsOl: function (e, t, r) {
      'use strict'
      r('z84I'), r('Blm6'), r('uFXj')
      var n = r('ERkP'),
        a = r('wsOx'),
        c = r('rxPX'),
        o = r('0KEI'),
        i = Object(c.a)()
          .propsFromState(function () {
            return { fetchSettingsFetchStatus: a.b, updateSettingsFetchStatus: a.d, safetyModeSettings: a.c }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchSettingsFetchStatus,
              r = e.safetyModeSettings,
              n = e.updateSettingsFetchStatus
            return {
              enabled: r.enabled,
              expiration: r.expiration,
              fetchSettingsFetchStatus: t,
              updateSettingsFetchStatus: n,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(o.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSafetyModeSettings: a.a,
              updateSafetyModeSettings: a.e,
            }
          })
          .withAnalytics(),
        s = r('v//M'),
        l = r('3XMw'),
        u = r.n(l),
        d = r('tuLS'),
        f = r('fs1G'),
        p = r('MWbm'),
        b = r('mjJ+'),
        m = r('t62R'),
        y = r('CK8+'),
        h = r('rHpw'),
        O = u.a.c6cb90eb,
        g = u.a.a37e9b09,
        E = u.a.ccafffde,
        v = u.a.j2e184d8,
        w = u.a.fc638aa2,
        S = u.a.d94b2246,
        P = u.a.bfea13ab,
        j = u.a.fc209bb7,
        _ = u.a.ee95bb8d,
        T = [
          { label: E, value: 'OneDay' },
          { label: v, value: 'ThreeDays' },
          { label: w, value: 'SevenDays' },
        ]
      var k = i(function (e) {
          var t = e.createLocalApiErrorHandler,
            r = e.enabled,
            a = e.expiration,
            c = e.fetchSafetyModeSettings,
            o = e.fetchSettingsFetchStatus,
            i = e.updateSafetyModeSettings,
            l = e.withBorder,
            u = n.useCallback(
              function () {
                c().catch(function (e) {
                  t({ showToast: !0 })(e)
                })
              },
              [c, t],
            )
          n.useEffect(
            function () {
              u()
            },
            [u],
          )
          var h = e.analytics
          n.useEffect(
            function () {
              h.scribe({ action: 'impression' })
            },
            [h],
          )
          var E = function () {
              h.scribe({ action: 'click', element: 'disabled' }),
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
                var r = T.map(function (e) {
                  return {
                    text: e.label,
                    onClick: function () {
                      return (function (e) {
                        h.scribe({ action: 'click', element: 'enabled' }),
                          ('OneDay' !== e.value && 'ThreeDays' !== e.value && 'SevenDays' !== e.value) ||
                            (h.scribe({ action: 'click', component: 'duration', element: e.value }),
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
                return n.createElement(b.a, { items: r, onCloseRequested: e })
              }
            }
          return n.createElement(s.a, {
            fetchStatus: o,
            onRequestRetry: u,
            render: function () {
              var e = new Date(parseInt(a, 10))
              return n.createElement(
                p.a,
                { style: l && C.border },
                n.createElement(
                  p.a,
                  { style: C.safetyModeToggleContainer },
                  n.createElement(m.b, { color: 'normal' }, O),
                  r
                    ? n.createElement(y.a, { onValueChange: E, value: r })
                    : n.createElement(
                        d.a,
                        { accessibilityLabel: O, renderMenu: v() },
                        n.createElement(y.a, { onValueChange: f.a, value: r }),
                      ),
                ),
                n.createElement(
                  p.a,
                  { style: C.safetyModeDescriptionContainer },
                  r && a
                    ? n.createElement(
                        m.b,
                        { color: 'gray700', size: 'subtext2', style: C.safetyModeExpiration },
                        (function (e, t) {
                          return Math.floor(Math.abs((t || Date.now()) - e) / 36e5) <= 1
                        })(e)
                          ? S
                          : _({ date: j(e) }),
                      )
                    : null,
                  n.createElement(m.b, { color: 'gray700', size: 'subtext2', style: C.settingDescription }, g),
                ),
              )
            },
          })
        }),
        C =
          ((t.a = k),
          h.a.create(function (e) {
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
    Ryu4: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'AudienceAndTagging', function () {
          return x
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('ddV6'),
        a = r.n(n),
        c = r('KEM+'),
        o = r.n(c),
        i = r('ERkP'),
        s = r('v6aA'),
        l = r('P1r1'),
        u = r('RqPI'),
        d = r('G6rE'),
        f = r('rxPX'),
        p = r('0KEI'),
        b = Object(f.a)()
          .propsFromState(function () {
            return { settings: l.g, hasCommunityMemberships: u.j }
          })
          .adjustStateProps(function (e) {
            var t = e.hasCommunityMemberships,
              r = e.settings
            return {
              protectedEnabled: r.protected,
              allowMediaTagging: r.allow_media_tagging,
              hasCommunityMemberships: t,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'AUDIENCE_AND_TAGGING_SCREEN',
              ),
              patchUser: d.e.patchUser,
              updateSettings: l.L,
            }
          }),
        m = r('3XMw'),
        y = r.n(m),
        h = r('yoO3'),
        O = r('7JQg'),
        g = r('7FtF'),
        E = r('k89r'),
        v = r('xHsv'),
        w = r('cCdp'),
        S = r('csss'),
        P = r('eb3s')
      function j(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var T = y.a.e908903a,
        k = y.a.h7a0dfbe,
        C = y.a.f5e59e90,
        D = y.a.e860ff84,
        R = { headline: y.a.j8bf07ab, text: y.a.ca8034b3, confirmButtonLabel: y.a.c5d4192a },
        A = { headline: y.a.gea6cc19, text: y.a.j7fc0afc, confirmButtonLabel: y.a.f527b322 },
        L = y.a.f56d108e,
        F = { all: y.a.d165c992, following: y.a.ea339390, none: y.a.e3a761ee },
        I = { page: 'settings', section: 'audience_and_tagging' }
      function M(e, t, r, n) {
        var c = i.useState(!1),
          o = a()(c, 2),
          l = o[0],
          u = o[1],
          d = (function (e, t, r, n) {
            var a = i.useContext(s.a).loggedInUserId,
              c = Object(E.a)()
            return {
              setEnabled: function (t) {
                n({ protected: t })
                  .then(function () {
                    c.scribe(_(_({}, I), {}, { element: 'protected', action: t ? 'enable' : 'disable' })),
                      a && r(a, { protected: t })
                  })
                  .catch(e())
              },
            }
          })(e, 0, r, n)
        return {
          showConfirmation: l,
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
          r = e.createLocalApiErrorHandler,
          n = e.hasCommunityMemberships,
          a = e.location,
          c = e.patchUser,
          o = e.protectedEnabled,
          s = M(r, 0, c, e.updateSettings),
          l = F[t],
          u = n ? A : R
        return i.createElement(
          O.b,
          { namespace: I },
          i.createElement(
            h.a,
            null,
            i.createElement(
              g.a,
              { location: a, screenType: 'secondaryDetail', title: T },
              i.createElement(v.a, { description: k }),
              i.createElement(w.a, {
                checked: o,
                helpText: D,
                label: C,
                learnMoreLink: 'https://help.twitter.com/safety-and-security/public-and-protected-tweets',
                name: 'protected',
                onChange: s._handleChanged,
              }),
              i.createElement(S.a, { description: l, label: L, link: '/settings/tagging' }),
            ),
            s.showConfirmation
              ? i.createElement(P.a, {
                  confirmButtonLabel: u.confirmButtonLabel,
                  confirmButtonType: 'primary',
                  headline: u.headline,
                  onCancel: s._handleConfirmationCancel,
                  onConfirm: s._handleConfirmationConfirm,
                  text: u.text,
                })
              : null,
          ),
        )
      }
      var H = b(x)
      t.default = H
    },
    'S+H3': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    TnO6: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return F
      })
      var n = r('KEM+'),
        a = r.n(n),
        c = (r('yH/f'), r('ERkP')),
        o = r('EbOo'),
        i = r('EPsT'),
        s = (r('WNMA'), r('KqXw'), r('1YZw')),
        l = r('118N'),
        u = r('G6rE'),
        d = r('rxPX'),
        f = r('0KEI'),
        p = function (e, t) {
          var r
          return null === (r = t.match) || void 0 === r ? void 0 : r.params.userId
        },
        b = function (e, t) {
          return u.e.select(e, p(0, t))
        },
        m = Object(d.a)()
          .propsFromState(function () {
            return { user: b, userId: p }
          })
          .adjustStateProps(function (e) {
            var t = e.user,
              r = e.userId
            return {
              violatorScreenName: (null == t ? void 0 : t.screen_name) || '',
              violatorUserId: (null == t ? void 0 : t.id_str) || '',
              userId: r || '',
            }
          })
          .propsFromActions(function () {
            return {
              addToast: s.b,
              block: u.e.block,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'RITO_TIMELINE_ACTION_BUTTONS_CONTEXT',
              ),
              fetchOneUserIfNeeded: u.e.fetchOneIfNeeded,
              dismissRitoSuggestedAction: l.b,
              unblock: u.e.unblock,
            }
          })
          .withAnalytics({ component: 'safety_mode_timeline_action_buttons' }),
        y = r('3XMw'),
        h = r.n(y),
        O = r('u0B7'),
        g = r('0yYu'),
        E = r('jtO7'),
        v = r('24HD'),
        w = h.a.cd702bc3,
        S = h.a.ebd2abb2,
        P = h.a.f2f4d0e7,
        j = h.a.jcba15d2,
        _ = h.a.e1f2f8bd,
        T = h.a.e68b09b4,
        k = h.a.hc676c4a,
        C = h.a.badf3f34,
        D = h.a.ca95bd23,
        R = h.a.bbe47125,
        A = '/settings/safety_mode/autoblocked',
        L = '/i/safety_mode/flagged_accounts',
        F = Object.freeze({ ActionedTweets: 'actioned_tweets', PreviewFlaggedTweets: 'preview_flagged_tweets' }),
        I = Object.freeze({
          report: { component: 'user_action', action: 'report' },
          block: { action: 'block' },
          unblock: { action: 'unblock' },
        })
      function M(e) {
        var t,
          r = e.addToast,
          n = e.analytics,
          o = e.createLocalApiErrorHandler,
          s = e.dismissRitoSuggestedAction,
          l = e.history,
          u = e.timelineType,
          d = e.unblock,
          f = e.violatorScreenName,
          p = e.violatorUserId,
          b = Object.freeze(
            ((t = {}),
            a()(t, F.ActionedTweets, {
              backLocation: A,
              confirmationSheetHeadline: Object(v.e)({ screenName: f }),
              label: j,
              toastLabel: D({ screenName: f }),
            }),
            a()(t, F.PreviewFlaggedTweets, {
              backLocation: L,
              confirmationSheetHeadline: _({ screenName: f }),
              label: P,
              toastLabel: C({ screenName: f }),
            }),
            t),
          )
        return c.createElement(i.a, {
          color: 'primary',
          confirmationSheetConfirmButtonLabel: T,
          confirmationSheetHeadline: b[u].confirmationSheetHeadline,
          confirmationSheetText: R,
          label: b[u].label,
          onConfirmationSheetConfirm: function () {
            u === F.ActionedTweets
              ? d(p)
                  .then(function () {
                    n.scribe(I.unblock), r({ text: b[u].toastLabel }), l.goBack({ backLocation: b[u].backLocation })
                  })
                  .catch(o(O.a))
              : s(p)
                  .then(function () {
                    n.scribe(I.unblock), r({ text: b[u].toastLabel }), l.goBack({ backLocation: b[u].backLocation })
                  })
                  .catch(o(O.a))
          },
          withBottomBorder: !0,
        })
      }
      function x(e) {
        var t = e.analytics,
          r = e.violatorUserId,
          n = {
            pathname: '/i/report/user/'.concat(r),
            state: { clientReferer: window.location.pathname, scribeNamespace: t.contextualScribeNamespace },
          }
        return c.createElement(E.a, {
          color: 'primary',
          label: w,
          link: n,
          onPress: function () {
            t.scribe(I.report)
          },
        })
      }
      function H(e) {
        var t = e.addToast,
          r = e.analytics,
          n = e.block,
          a = e.createLocalApiErrorHandler,
          s = e.history,
          l = e.timelineType,
          u = e.unblock,
          d = e.violatorScreenName,
          f = e.violatorUserId,
          p = l === F.ActionedTweets ? A : L,
          b = function () {
            u(f).catch(a(O.a)), r.scribe(I.unblock)
          }
        return c.createElement(i.a, {
          color: 'red500',
          confirmationSheetConfirmButtonLabel: v.a,
          confirmationSheetConfirmButtonType: 'destructiveFilled',
          confirmationSheetHeadline: Object(v.c)({ screenName: d }),
          confirmationSheetText: Object(v.b)({ screenName: d }),
          label: S,
          onConfirmationSheetConfirm: function () {
            n(f)
              .then(function () {
                r.scribe(I.block),
                  t({ action: { label: v.l, onAction: b }, text: k({ screenName: d }) }),
                  s.goBack({ backLocation: p })
              })
              .catch(a(o.a))
          },
        })
      }
      t.b = m(function (e) {
        var t = e.createLocalApiErrorHandler,
          r = e.fetchOneUserIfNeeded,
          n = e.userId,
          a = e.violatorScreenName,
          o = e.violatorUserId
        return (
          c.useEffect(
            function () {
              n && r(n).catch(t())
            },
            [n, r, t],
          ),
          '' === a || '' === o
            ? null
            : c.createElement(
                c.Fragment,
                null,
                c.createElement(g.a, null),
                c.createElement(x, e),
                c.createElement(M, e),
                c.createElement(H, e),
              )
        )
      })
    },
    UQuz: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'LocationInformation', function () {
          return D
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('v6aA'),
        i = r('NeAX'),
        s = r('rxPX'),
        l = r('0KEI'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { settings: i.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowLocationHistoryUseEnabled: e.settings.allowLocationHistoryUse }
          })
          .propsFromActions(function () {
            return {
              updateSettings: i.updateSettings,
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'LOCATION_INFORMATION_SCREEN',
              ),
            }
          }),
        d = r('3XMw'),
        f = r.n(d),
        p = r('yoO3'),
        b = r('7JQg'),
        m = r('7FtF'),
        y = r('k89r'),
        h = r('xHsv'),
        O = r('cCdp'),
        g = r('csss')
      function E(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var w = f.a.jabb9c9a,
        S = f.a.a686c489,
        P = f.a.dc20d917,
        j = f.a.cb2ed998,
        _ = f.a.d9138165,
        T = f.a.eb029cab,
        k = f.a.j018f2a1,
        C = { page: 'settings', section: 'location_information' }
      function D(e) {
        var t = e.allowLocationHistoryUseEnabled,
          r = e.createLocalApiErrorHandler,
          n = e.location,
          i = e.updateSettings,
          s = Object(y.a)(),
          l = c.useContext(o.a)
        return c.createElement(
          b.b,
          { namespace: C },
          c.createElement(
            p.a,
            null,
            c.createElement(
              m.a,
              { location: n, screenType: 'secondaryDetail', title: w },
              c.createElement(h.a, { description: S }),
              l &&
                c.createElement(O.a, {
                  checked: t,
                  helpText: j,
                  label: P,
                  name: 'allowLocationHistoryUse',
                  onChange: function (e, t) {
                    s.scribe(v(v({}, C), {}, { element: e, action: t ? 'enable' : 'disable' })),
                      i(a()({}, e, t)).catch(r())
                  },
                }),
              c.createElement(g.a, { label: _, link: '/settings/your_twitter_data/locations' }),
              c.createElement(g.a, { label: T, link: '/settings/location' }),
              c.createElement(g.a, { label: k, link: '/settings/explore' }),
            ),
          ),
        )
      }
      var R = u(D)
      t.default = R
    },
    XOb8: function (e, t, r) {
      'use strict'
      r.d(t, 'd', function () {
        return n
      }),
        r.d(t, 'e', function () {
          return a
        }),
        r.d(t, 'b', function () {
          return o
        }),
        r.d(t, 'a', function () {
          return i
        }),
        r.d(t, 'c', function () {
          return s
        })
      var n = 'V2ViU3Vic2NyaXB0aW9uUHJvZHVjdERldGFpbHM6cHJvZF9LT21pYTlJYXRWVG1JNQ==',
        a = 'rogue-one',
        c = 'https://'.concat(window.location.host),
        o = ''.concat(c, '/settings/subscription'),
        i = ''.concat(c, '/i/twitter_blue_sign_up'),
        s = ''.concat(i, '/welcome')
      ''.concat(i, '/unsuccessful')
    },
    ZNbl: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'SafetyMode', function () {
          return E
        })
      var n = r('ERkP'),
        a = r('yoO3'),
        c = r('OsOl'),
        o = r('7JQg'),
        i = r('7FtF'),
        s = r('Irs7'),
        l = r('t62R'),
        u = r('xHsv'),
        d = r('0yYu'),
        f = r('6vad'),
        p = r('csss'),
        b = r('3XMw'),
        m = r.n(b),
        y = { page: 'settings', section: 'safety_mode' },
        h = m.a.c6cb90eb,
        O = m.a.fabe1397,
        g = m.a.c0786021
      function E() {
        var e,
          t = Object(s.b)()
        return n.createElement(
          o.b,
          { namespace: y },
          n.createElement(
            a.a,
            null,
            n.createElement(
              i.a,
              { screenType: 'secondaryDetail', title: h, withMarginBottom: !1 },
              n.createElement(u.a, {
                description:
                  ((e = function () {
                    t.scribe({ page: 'settings', component: 'education_sheet', action: 'click' })
                  }),
                  n.createElement(
                    m.a.I18NFormatMessage,
                    { $i18n: 'b8437d64' },
                    n.createElement(l.b, { link: '/settings/safety_mode/about', onPress: e }, m.a.db89884f),
                  )),
              }),
              n.createElement(d.a, null),
              n.createElement(c.a, null),
              n.createElement(d.a, null),
              n.createElement(f.b, { text: O }),
              n.createElement(p.a, { label: g, link: '/settings/safety_mode/autoblocked' }),
            ),
          ),
        )
      }
      t.default = E
    },
    Zg3A: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    'Zi/f': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'YourTweets', function () {
          return T
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('P1r1'),
        i = r('rxPX'),
        s = Object(i.a)()
          .propsFromState(function () {
            return { settings: o.g }
          })
          .adjustStateProps(function (e) {
            var t = e.settings
            return { nsfwUserEnabled: t.nsfw_user, nsfwAdminEnabled: t.nsfw_admin }
          })
          .propsFromActions(function () {
            return { updateSettings: o.L }
          }),
        l = r('3XMw'),
        u = r.n(l),
        d = r('yoO3'),
        f = r('7JQg'),
        p = r('7FtF'),
        b = r('k89r'),
        m = r('0KEI'),
        y = r('xHsv'),
        h = r('cCdp'),
        O = r('csss')
      function g(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var v = u.a.b38d81ae,
        w = u.a.f8d4746b,
        S = u.a.c0a55f4a,
        P = u.a.ea28ca63,
        j = u.a.eb029cab,
        _ = { page: 'settings', section: 'your_tweets' }
      function T(e) {
        var t = e.location,
          r = e.nsfwAdminEnabled,
          n = e.nsfwUserEnabled,
          o = e.updateSettings,
          i = Object(b.a)(),
          s = Object(m.useCreateLocalApiErrorHandler)('YOUR_TWEETS_SCREEN')
        return c.createElement(
          f.b,
          { namespace: _ },
          c.createElement(
            d.a,
            null,
            c.createElement(
              p.a,
              { location: t, screenType: 'secondaryDetail', title: v },
              c.createElement(y.a, { description: w }),
              c.createElement(h.a, {
                checked: n,
                disabled: r,
                helpText: P,
                label: S,
                learnMoreLink: 'https://help.twitter.com/rules-and-policies/media-policy',
                name: 'nsfw_user',
                onChange: function (e, t) {
                  i.scribe(E(E({}, _), {}, { element: 'nsfw_user', action: t ? 'enable' : 'disable' })),
                    o(a()({}, e, t)).catch(s({ showToast: !0 }))
                },
              }),
              c.createElement(O.a, { label: j, link: '/settings/location' }),
            ),
          ),
        )
      }
      var k = s(T)
      t.default = k
    },
    aNjN: function (e, t, r) {
      'use strict'
      r.r(t)
      r('WNMA'), r('KqXw')
      var n,
        a = r('ERkP'),
        c = r('FIs5'),
        o = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        i = r.n(o),
        s = r('QIgh'),
        l = r('8UdT'),
        u = r('Yy//'),
        d = r('88ay'),
        f = r('Ka9G')
      function p(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                i()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var m = b(
          b({}, s.b),
          {},
          ((n = {}),
          i()(n, l.b.Tweet, Object(u.a)({ displayBlocked: !0 })),
          i()(n, l.b.User, Object(f.a)({ decoration: d.d })),
          n),
        ),
        y = r('jHSc'),
        h = r('3XMw'),
        O = r.n(h),
        g = r('fTQJ'),
        E = r('WpDa'),
        v = r('ZNT5'),
        w = r('TnO6'),
        S = O.a.hae5825e,
        P = O.a.e9f1fbcb,
        j = O.a.de9b6641,
        _ = function () {
          return a.createElement(c.a, { header: P, message: j })
        }
      t.default = function (e) {
        var t = e.history,
          r = e.location,
          n = e.match,
          c = n.params.userId,
          o = a.useMemo(
            function () {
              return (
                (e = c),
                Object(v.a)({
                  timelineId: 'ritoFlaggedTweets-'.concat(e),
                  getEndpoint: function (e) {
                    return e.RitoFlaggedTweets.fetchRitoFlaggedTweets
                  },
                  getEndpointParams: function (t) {
                    var r = t.count,
                      n = t.cursor
                    return { count: r, cursor: 'string' == typeof n ? n : void 0, userId: e }
                  },
                  context: 'FETCH_RITO_FLAGGED_TWEETS_TIMELINE',
                  perfKey: 'ritoFlaggedTweets',
                  formatResponse: E.a,
                })
              )
              var e
            },
            [c],
          ),
          i = a.createElement(w.b, { history: t, location: r, match: n, timelineType: w.a.PreviewFlaggedTweets })
        return a.createElement(
          y.b,
          {
            backButtonType: 'back',
            behavioralEventViewType: 'safety_mode_flagged_tweets',
            history: t,
            onBackClick: function () {
              t.goBack()
            },
            title: S,
            withBottomBorder: !1,
          },
          a.createElement(g.a, { entryConfiguration: m, footer: i, module: o, renderEmptyState: _, title: S }),
        )
      }
    },
    aY7H: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'DirectMessages', function () {
          return A
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('v6aA'),
        i = r('P1r1'),
        s = r('rxPX'),
        l = r('0KEI'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { nsfwMediaFilter: i.r, settings: i.g }
          })
          .adjustStateProps(function (e) {
            var t = e.nsfwMediaFilter,
              r = e.settings
            return {
              allowDmsFrom: r.allow_dms_from,
              dmQualityFilter: r.dm_quality_filter,
              dmReceiptSetting: r.dm_receipt_setting,
              nsfwMediaFilter: t,
            }
          })
          .propsFromActions(function () {
            return {
              updateSettings: i.L,
              updateDmNsfwMediaFilter: i.K,
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'settings' }),
        d = r('3XMw'),
        f = r.n(d),
        p = r('yoO3'),
        b = r('7JQg'),
        m = r('7FtF'),
        y = r('k89r'),
        h = r('xHsv'),
        O = r('cCdp')
      function g(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var v = f.a.d4986f85,
        w = f.a.cc950d94,
        S = f.a.b4006390,
        P = f.a.f7da127c,
        j = f.a.b3d8566e,
        _ = f.a.cfda8c44,
        T = f.a.e6c411d7,
        k = f.a.g558101a,
        C = f.a.d9172541,
        D = f.a.bd557505,
        R = { page: 'settings', section: 'direct_messages' }
      function A(e) {
        var t = e.allowDmsFrom,
          r = e.createLocalApiErrorHandler,
          n = e.dmQualityFilter,
          i = e.dmReceiptSetting,
          s = e.location,
          l = e.nsfwMediaFilter,
          u = e.updateDmNsfwMediaFilter,
          d = e.updateSettings,
          f = Object(y.a)()
        function g(t, n) {
          var c = '/messages/settings' === e.location.pathname ? 'dm_tab' : 'global_settings_menu'
          f.scribe(E(E({}, R), {}, { element: t, data: { entry_point: c }, action: n })),
            d(a()({}, t, n)).catch(r({ showToast: !0 }))
        }
        var A = c.useContext(o.a).featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
        return c.createElement(
          b.b,
          { namespace: R },
          c.createElement(
            p.a,
            null,
            c.createElement(
              m.a,
              { location: s, screenType: 'secondaryDetail', title: v },
              c.createElement(h.a, { description: w }),
              c.createElement(O.a, {
                checked: 'all' === t,
                helpText: P,
                label: S,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#receive',
                name: 'allow_dms_from',
                onChange: function (e, t) {
                  g(e, t ? 'all' : 'following')
                },
              }),
              c.createElement(O.a, {
                checked: 'enabled' === n,
                helpText: _,
                label: j,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages',
                name: 'dm_quality_filter',
                onChange: function (e, t) {
                  g(e, t ? 'enabled' : 'disabled')
                },
              }),
              A
                ? c.createElement(O.a, {
                    checked: l,
                    helpText: k,
                    label: T,
                    learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#graphic-media',
                    name: 'ext_dm_nsfw_media_filter',
                    onChange: function (e, t) {
                      f.scribe(
                        E(E({}, R), {}, { element: 'dm_nsfw_filter_setting', action: t ? 'enable' : 'disable' }),
                      ),
                        u(t)
                    },
                  })
                : null,
              c.createElement(O.a, {
                checked: 'all_enabled' === i,
                helpText: D,
                label: C,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#receipts',
                name: 'dm_receipt_setting',
                onChange: function (e, t) {
                  g(e, t ? 'all_enabled' : 'all_disabled')
                },
              }),
            ),
          ),
        )
      }
      var L = u(A)
      t.default = L
    },
    bCEw: function (e, t, r) {
      'use strict'
      var n = r('IGGJ')(r('K1iM')),
        a = r('23An'),
        c = r('Ud88'),
        o = r('aQQo'),
        i = o.loadQuery,
        s = o.useTrackLoadQueryInRender,
        l = r('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        f = l.useRef,
        p = l.useState,
        b = r('K1lQ').getRequest,
        m = { kind: 'NullQueryReference' }
      function y(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== b(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var r = null != t ? t : m,
          o = c()
        s()
        var l = a(),
          b = f(new Set([r])),
          h = p(function () {
            return r
          }),
          O = h[0],
          g = h[1],
          E = p(function () {
            return r
          }),
          v = E[0],
          w = E[1]
        r !== v && (b.current.add(r), w(r), g(r))
        var S = u(
            function () {
              l.current && (b.current.add(m), g(m))
            },
            [l],
          ),
          P = u(
            function (t, r) {
              var n =
                null != r && r.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: r.fetchPolicy,
                      networkCacheConfig: r.networkCacheConfig,
                      __nameForWarning: r.__nameForWarning,
                    }
                  : r
              if (l.current) {
                var a,
                  c = i(null !== (a = null == r ? void 0 : r.__environment) && void 0 !== a ? a : o, e, t, n)
                b.current.add(c), g(c)
              }
            },
            [o, e, g, l],
          ),
          j = f(!1)
        return (
          d(function () {
            return function () {
              j.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === j.current)
                return (
                  (j.current = !1),
                  void (
                    'NullQueryReference' !== O.kind &&
                    P(O.variables, { fetchPolicy: O.fetchPolicy, networkCacheConfig: O.networkCacheConfig })
                  )
                )
              var t = b.current
              if (l.current) {
                var r,
                  a = (0, n.default)(t)
                try {
                  for (a.s(); !(r = a.n()).done; ) {
                    var c = r.value
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
            [O, l, P, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  r = (0, n.default)(b.current)
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var a = t.value
                    'NullQueryReference' !== a.kind &&
                      (y(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (c) {
                  r.e(c)
                } finally {
                  r.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === O.kind ? null : O, P, S]
        )
      }
    },
    'bT/0': function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'AdsPreferences', function () {
          return C
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('NeAX'),
        i = r('rxPX'),
        s = r('0KEI'),
        l = Object(i.a)()
          .propsFromState(function () {
            return { settings: o.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowPersonalizationEnabled: e.settings.allowPersonalization }
          })
          .propsFromActions(function () {
            return {
              updateSettings: o.updateSettings,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'ADS_PREFERENCES_SCREEN',
              ),
            }
          }),
        u = r('3XMw'),
        d = r.n(u),
        f = r('yoO3'),
        p = r('7JQg'),
        b = r('7FtF'),
        m = r('k89r'),
        y = r('xHsv'),
        h = r('cCdp'),
        O = r('csss')
      function g(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var v = d.a.d035a8d0,
        w = d.a.f9ff2201,
        S = d.a.ib3357a5,
        P = d.a.c4ca418c,
        j = d.a.b0b3ed8e,
        _ = d.a.h1f01a24,
        T = d.a.da202f9a,
        k = { page: 'settings', section: 'ads_preferences' }
      function C(e) {
        var t,
          r = e.allowPersonalizationEnabled,
          n = e.createLocalApiErrorHandler,
          o = e.location,
          i = e.updateSettings,
          s = Object(m.a)(),
          l =
            ((t = c.useRef()),
            c.useEffect(function () {
              return (
                window.apkInterface && window.apkInterface.isOsAdsTrackingOn && !window.apkInterface.isOsAdsTrackingOn()
              )
            }, []),
            t.current)
        return c.createElement(
          p.b,
          { namespace: k },
          c.createElement(
            f.a,
            null,
            c.createElement(
              b.a,
              { location: o, screenType: 'secondaryDetail', title: v },
              c.createElement(y.a, { description: w }),
              c.createElement(h.a, {
                checked: r,
                disabled: l,
                helpText: l ? j : P,
                label: S,
                learnMoreLink: 'https://support.twitter.com/articles/20170405',
                name: 'allowPersonalization',
                onChange: function (e, t) {
                  s.scribe(E(E({}, k), {}, { element: e, action: t ? 'enable' : 'disable' })),
                    i(a()({}, e, t)).catch(n())
                },
              }),
              c.createElement(O.a, { label: _, link: '/settings/your_twitter_data/twitter_interests' }),
              c.createElement(O.a, { label: T, link: '/settings/your_twitter_data/audiences' }),
            ),
          ),
        )
      }
      var D = l(C)
      t.default = D
    },
    cQiO: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ApplicationsScreen', function () {
          return X
        })
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        c = r('Y9Ll'),
        o = r.n(c),
        i = r('1Pcy'),
        s = r.n(i),
        l = r('5Yy7'),
        u = r.n(l),
        d = r('N+ot'),
        f = r.n(d),
        p = r('AuHH'),
        b = r.n(p),
        m = r('KEM+'),
        y = r.n(m),
        h = (r('2G9S'), r('z84I'), r('ho0z'), r('uFXj'), r('ERkP')),
        O = r('dZRF'),
        g = r('kGix'),
        E = r('rxPX'),
        v = r('0KEI'),
        w = function (e, t) {
          return Object(g.d)(O.d(e))
        },
        S = Object(E.a)()
          .propsFromState(function () {
            return { fetchStatus: w, applications: O.a.selectUniqUnrevokedApps }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchApplications: O.b,
            }
          }),
        P = r('v//M'),
        j = r('yoO3'),
        _ = r('7JQg'),
        T = r('7FtF'),
        k = r('xHsv'),
        C = r('t62R'),
        D = r('FIs5'),
        R = r('csss'),
        A = r('rHpw'),
        L = r('3XMw'),
        F = r.n(L),
        I = r('U+bB'),
        M = r('MWbm')
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
          var r,
            n = b()(e)
          if (t) {
            var a = b()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return f()(this, r)
        }
      }
      var H = F.a.jc02ae67,
        N = F.a.e5e8a899,
        U = F.a.ge06310e,
        z = F.a.dd1b86f9,
        B = F.a.ee4b16f8,
        K = 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
        W = { page: 'settings', section: 'connected_apps' },
        X = (function (e) {
          u()(r, e)
          var t = x(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              y()(s()(e), '_fetchApps', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchApplications)().catch(r({ showToast: !0 }))
              }),
              y()(s()(e), '_handleRetry', function () {
                e._fetchApps()
              }),
              y()(s()(e), '_render', function () {
                var t = e.props.applications
                return h.createElement(
                  M.a,
                  null,
                  h.createElement(k.a, {
                    description: h.createElement(
                      F.a.I18NFormatMessage,
                      { $i18n: 'hcecd237' },
                      h.createElement(C.b, { link: K }, F.a.b63b0b1c),
                    ),
                  }),
                  t.length ? null : h.createElement(D.a, { header: U, message: B }),
                  t.map(function (e, t) {
                    var r = '/settings/applications/'.concat(e.app_id)
                    return h.createElement(R.a, {
                      description: e.organization ? z({ name: e.organization }) : null,
                      key: e.app_id,
                      label: e.name,
                      link: r,
                      thumbnail: h.createElement(I.a, { accessibilityLabel: '', source: e.img_url, style: Q.avatar }),
                    })
                  }),
                )
              }),
              e
            )
          }
          return (
            o()(r, [
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
                    r = e.location
                  return h.createElement(
                    _.b,
                    { namespace: W },
                    h.createElement(
                      j.a,
                      null,
                      h.createElement(
                        T.a,
                        { location: r, title: H },
                        h.createElement(P.a, {
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
            r
          )
        })(h.Component)
      y()(X, 'defaultProps', { applications: [] })
      var Q = A.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.small, height: '100%', width: '100%' } }
        }),
        G = S(X)
      t.default = G
    },
    ehR8: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return a
      })
      var n = r('Ty5D')
      function a() {
        return { location: Object(n.h)(), match: Object(n.j)(), history: Object(n.g)() }
      }
    },
    g7Ra: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('shC7'),
        s = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [o.a.root, e.style, i.a.getConstants().isRTL && o.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M13.967 5.852H4.602l2.97-2.97c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0L2.26 6.07c-.294.292-.294.767 0 1.06l4.25 4.25c.145.146.337.22.53.22s.383-.073.53-.22c.292-.293.292-.768 0-1.06L4.6 7.35h9.364c3.625 0 6.574 2.948 6.574 6.573S17.592 20.5 13.967 20.5H7.79c-.415 0-.75.336-.75.75s.335.75.75.75h6.178c4.452 0 8.074-3.622 8.074-8.074s-3.623-8.074-8.075-8.074z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    jN9l: function (e, t, r) {
      'use strict'
      r.r(t)
      var n,
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
                args: (n = [{ kind: 'Literal', name: 's', value: 21 }]),
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
                args: n,
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
    jZqz: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'SessionsScreen', function () {
          return ne
        })
      r('OZaJ')
      var n = r('ddV6'),
        a = r.n(n),
        c = r('VrFO'),
        o = r.n(c),
        i = r('Y9Ll'),
        s = r.n(i),
        l = r('1Pcy'),
        u = r.n(l),
        d = r('5Yy7'),
        f = r.n(d),
        p = r('N+ot'),
        b = r.n(p),
        m = r('AuHH'),
        y = r.n(m),
        h = r('KEM+'),
        O = r.n(h),
        g = (r('2G9S'), r('z84I'), r('ERkP')),
        E = r('EPsT'),
        v = r('uo4S'),
        w = r('kGix'),
        S = r('rxPX'),
        P = r('0KEI'),
        j = function (e, t) {
          return Object(w.d)(v.d(e))
        },
        _ = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: j, sessions: v.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSessionsIfNeeded: v.a,
              revokeAllSessions: v.b,
            }
          }),
        T = r('v//M'),
        k = r('yoO3'),
        C = r('VIKJ'),
        D = r('7JQg'),
        R = r('ZvNX'),
        A = r('eM8g'),
        L = r('7FtF'),
        F = r('MWbm'),
        I = r('xHsv'),
        M = r('6vad'),
        x = r('0yYu'),
        H = r('t62R'),
        N = r('3XMw'),
        U = r.n(N)
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return b()(this, r)
        }
      }
      var B = U.a.dd823129,
        K = U.a.c2cb5560,
        W = U.a.bca43fd0,
        X = U.a.bef6fc56,
        Q = U.a.bbe9579b,
        G = U.a.b850cbd0,
        Z = U.a.ae1bbb26,
        q = U.a.i859a9d3,
        V = U.a.e5e8a899,
        Y = U.a.cf3e3164,
        J = U.a.f810f279,
        $ = U.a.a19f4b20,
        ee = U.a.e25e40f0,
        te = U.a.d1baa458,
        re = { page: 'settings', section: 'sessions' },
        ne = (function (e) {
          f()(r, e)
          var t = z(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              O()(u()(e), '_fetchSessions', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchSessionsIfNeeded)().catch(r({ showToast: !0 }))
              }),
              O()(u()(e), '_handleRetry', function () {
                e._fetchSessions()
              }),
              O()(u()(e), '_handleLogOutAll', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.revokeAllSessions)().catch(r({ showToast: !0 }))
              }),
              O()(u()(e), '_renderSession', function (e, t) {
                var r = '/settings/sessions/'.concat(encodeURIComponent(e.token))
                return g.createElement(R.a, {
                  key: e.token,
                  link: r,
                  session: e,
                  withBottomBorder: !t,
                  withSummary: !1,
                })
              }),
              e
            )
          }
          return (
            s()(r, [
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
                    r = t.fetchStatus,
                    n = t.location
                  return g.createElement(
                    D.b,
                    { namespace: re },
                    g.createElement(
                      k.a,
                      null,
                      g.createElement(
                        L.a,
                        { location: n, title: B },
                        g.createElement(T.a, {
                          accessibilityLabel: V,
                          fetchStatus: r,
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
                    r = t.length,
                    n = Object(C.a)(t, function (e) {
                      return e.is_current_session
                    }),
                    c = a()(n, 2),
                    o = c[0],
                    i = c[1]
                  return r
                    ? g.createElement(
                        F.a,
                        null,
                        g.createElement(I.a, { description: X }),
                        g.createElement(M.b, { text: K }),
                        g.createElement(A.a, null, Q),
                        o[0] ? this._renderSession(o[0], !1) : null,
                        g.createElement(x.a, null),
                        g.createElement(M.b, { text: W }),
                        g.createElement(A.a, null, G),
                        g.createElement(
                          A.a,
                          null,
                          g.createElement(
                            U.a.I18NFormatMessage,
                            { $i18n: 'i34eeb36', infoText: r > 1 ? $({ num: r - 1 }) : ee },
                            g.createElement(
                              H.b,
                              {
                                link: 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                                withInteractiveStyling: !1,
                              },
                              U.a.j3223a5b({ learnMoreLabel: q }),
                            ),
                          ),
                        ),
                        g.createElement(E.a, {
                          align: 'left',
                          confirmationSheetConfirmButtonLabel: Z,
                          confirmationSheetConfirmButtonType: 'primary',
                          confirmationSheetHeadline: J,
                          confirmationSheetText: te,
                          label: Y,
                          onConfirmationSheetConfirm: this._handleLogOutAll,
                        }),
                        i.map(function (t, n) {
                          return e._renderSession(t, r - 1 === n)
                        }),
                      )
                    : null
                },
              },
            ]),
            r
          )
        })(g.Component)
      O()(ne, 'defaultProps', { sessions: [] })
      var ae = _(ne)
      t.default = ae
    },
    n0Rl: function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return N
      })
      r('OZaJ')
      var n = r('ddV6'),
        a = r.n(n),
        c = r('VrFO'),
        o = r.n(c),
        i = r('Y9Ll'),
        s = r.n(i),
        l = r('1Pcy'),
        u = r.n(l),
        d = r('5Yy7'),
        f = r.n(d),
        p = r('N+ot'),
        b = r.n(p),
        m = r('AuHH'),
        y = r.n(m),
        h = r('KEM+'),
        O = r.n(h),
        g = (r('2G9S'), r('ZUdG'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('ERkP')),
        E = r('pXBW'),
        v = r('6/RC'),
        w = r('UIzd'),
        S = r.n(w),
        P = r('kGix')
      r.d(t, 'a', function () {
        return P.a
      })
      var j = r('fs1G'),
        _ = r('0KEI'),
        T = r('lU4h'),
        k = r.n(T),
        C = r('21nk'),
        D = r.n(C),
        R = r('bCEw'),
        A = r.n(R),
        L = r('Ud88'),
        F = r.n(L)
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return b()(this, r)
        }
      }
      var M = function (e) {
          return (0, e.render)({ fetchStatus: P.a.LOADING, data: null, error: null, retry: j.a })
        },
        x = (function (e) {
          f()(r, e)
          var t = I(r)
          function r() {
            var e
            o()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (e = t.call.apply(t, [this].concat(a))), O()(u()(e), 'state', { error: null }), e
          }
          return (
            s()(
              r,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof E.a)) throw e
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
            r
          )
        })(g.Component),
        H = function (e) {
          var t = e.query,
            r = e.queryRef,
            n = e.render,
            a = D()(t, r)
          return n({ fetchStatus: P.a.LOADED, data: a, error: null, retry: j.a })
        },
        N = function (e, t) {
          if (v.canUseDOM)
            return function (r) {
              var n = r.fetchPolicy,
                c = void 0 === n ? 'store-or-network' : n,
                o = r.render,
                i = r.variables,
                s = A()(e),
                l = a()(s, 2),
                u = l[0],
                d = l[1],
                f = Object(_.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = k()(i),
                b = a()(p, 1)[0],
                m = g.useCallback(
                  function () {
                    d(b, { fetchPolicy: 'network-only' })
                  },
                  [d, b],
                )
              return (
                g.useLayoutEffect(
                  function () {
                    d(b, { fetchPolicy: c })
                  },
                  [c, d, b],
                ),
                u
                  ? g.createElement(
                      g.Suspense,
                      { fallback: g.createElement(M, { render: o }) },
                      g.createElement(
                        x,
                        { errorHandler: f(t.errorConfig.options || {}), key: u.fetchKey, retry: m },
                        function (t, r) {
                          return t
                            ? o({ fetchStatus: P.a.FAILED, error: t, data: null, retry: r })
                            : g.createElement(H, { query: e, queryRef: u, render: o })
                        },
                      ),
                    )
                  : null
              )
            }
          var r = new WeakMap()
          return function (n) {
            n.fetchPolicy
            var c = n.render,
              o = n.variables,
              i = F()(),
              s = Object(_.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = k()(o),
              u = a()(l, 1)[0],
              d = r.get(i)
            if (d) return d
            var f = g.lazy(function () {
              return S()(i, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return c({ fetchStatus: P.a.LOADED, data: e, error: null, retry: j.a })
                  },
                  function (e) {
                    return e instanceof E.a
                      ? (s(t.errorConfig.options || {})(e),
                        c({ fetchStatus: P.a.FAILED, data: null, error: e, retry: j.a }))
                      : g.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: r.set(i, e).get.bind(r, i) }
                })
            })
            return g.createElement(g.Suspense, null, g.createElement(f, null))
          }
        }
    },
    ndvG: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'adFreeSitesLabel', function () {
          return z
        }),
        r.d(t, 'yourImpactLabel', function () {
          return B
        }),
        r.d(t, 'adFreeHelpCenterLabel', function () {
          return K
        }),
        r.d(t, 'adFreeHelpScribeElement', function () {
          return re
        }),
        r.d(t, 'adFreeImpactScribeElement', function () {
          return ne
        }),
        r.d(t, 'adFreeSitesScribeElement', function () {
          return ae
        }),
        r.d(t, 'TwitterBlue', function () {
          return ce
        })
      r('WNMA'), r('KqXw'), r('z84I'), r('1t7P'), r('jQ/y'), r('hBvt')
      var n = r('ERkP'),
        a = r('v6aA'),
        c = r('EGrD'),
        o = r('gUb7'),
        i = r('rxPX'),
        s = r('0KEI'),
        l = Object(i.a)()
          .propsFromState(function () {
            return { userClaimsFetchStatus: o.c }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_BLUE_SETTINGS',
              ),
              fetchAdFreeToken: c.a,
            }
          })
          .withAnalytics({ page: 'settings', section: 'twitter_blue' }),
        u = r('v//M'),
        d = r('3XMw'),
        f = r.n(d),
        p = r('/de5'),
        b = r('yoO3'),
        m = r('7FtF'),
        y = 'adFreeSection',
        h = r('ehR8'),
        O = r('MWbm'),
        g = r('6vad'),
        E = r('csss'),
        v = r('xHsv'),
        w = r('OOKO'),
        S = r('rHpw'),
        P = r('LSr9'),
        j = r('g7Ra'),
        _ = (r('+KXO'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        T = r.n(_),
        k = r('Lsrn'),
        C = r('k/Ka')
      function D(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(r), !0).forEach(function (t) {
                T()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var A = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(C.a)(
          'svg',
          R(
            R({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [k.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          n.createElement(
            'g',
            null,
            n.createElement('path', {
              d: 'M20.803 17.6l-4.88-8.256c-.113-.192-.173-.412-.173-.636V3.356c.368-.048.657-.35.657-.73 0-.415-.336-.75-.75-.75H8.342c-.414 0-.75.335-.75.75 0 .38.29.683.658.73v5.352c0 .224-.06.443-.174.636L3.196 17.6c-.554.938-.562 2.065-.022 3.013s1.515 1.513 2.605 1.513h12.44c1.09 0 2.065-.565 2.606-1.514.54-.948.53-2.074-.023-3.013zm-1.28 2.268c-.27.474-.758.757-1.304.757H5.78c-.545 0-1.032-.283-1.303-.757-.26-.456-.26-.993-.012-1.452.092.04.192.063.298.063h2.59c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H5.305l.91-1.54c.06.018.12.04.188.04h2.59c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H7.078l.906-1.535c.056.014.11.034.17.034h2.59c.414 0 .75-.337.75-.75s-.336-.75-.75-.75H8.852l.515-.873c.25-.423.383-.907.383-1.4V3.376h4.5v5.333c0 .493.133.977.383 1.4l4.88 8.254c.276.47.28 1.033.01 1.506z',
            }),
          ),
        )
      }
      A.metadata = { width: 24, height: 24 }
      var L = A,
        F = r('vMn4'),
        I = r('tH6R'),
        M = r('OySi'),
        x = f.a.ed21f885,
        H = f.a.je84decd,
        N = f.a.de43eaf2,
        U = f.a.i65802df,
        z = f.a.a21b8ad2,
        B = f.a.hd885aef,
        K = f.a.je4ccd3a,
        W = f.a.f6e88161,
        X = f.a.e4972a1a,
        Q = f.a.i9028824,
        G = f.a.e5fff0c7,
        Z = f.a.ib35705d,
        q = f.a.ccfdbb86,
        V = f.a.d15f6d3d,
        Y = f.a.jc8487c1,
        J = f.a.ad45e9b2,
        $ = f.a.db529452,
        ee = f.a.f66d24be,
        te = f.a.d248d75e,
        re = 'ad_free_articles_help',
        ne = 'ad_free_articles_impact',
        ae = 'ad_free_articles_sites'
      function ce(e) {
        var t = e.analytics,
          r = e.createLocalApiErrorHandler,
          c = e.fetchAdFreeToken,
          o = e.userClaimsFetchStatus,
          i = Object(h.a)(),
          s = i.history,
          l = i.location,
          d = i.match,
          f = n.useContext(a.a),
          S = f.featureSwitches,
          _ = f.userClaims,
          T = _.isTwitterBlueSubscriber(),
          k = _.isTrueAndEnabled('subscriptions_feature_1003'),
          C = _.isTrueAndEnabled('subscriptions_feature_1009'),
          D = _.isTrueAndEnabled('subscriptions_feature_1006'),
          R = S.isTrue('subscriptions_management_enabled'),
          A = [
            { label: N, description: q, link: '/settings/undo_tweet', Icon: j.a, shouldRender: k },
            { label: W, description: X, link: '/settings/t1_labs', Icon: L, shouldRender: C },
          ],
          ce = function () {
            se(ae)
          },
          ie = function () {
            se(re)
          },
          se = function (e) {
            t.scribe({ page: 'subscriptions', section: 'settings', element: e, action: 'click' })
          }
        return n.createElement(u.a, {
          accessibilityLabel: Q,
          fetchStatus: o,
          render: function () {
            return T
              ? n.createElement(
                  b.a,
                  null,
                  n.createElement(
                    m.a,
                    { location: l, screenType: 'primaryDetail', title: x },
                    n.createElement(
                      O.a,
                      { style: oe.iconWrapper },
                      n.createElement(I.a, { style: oe.iconTwitterBlue }),
                      n.createElement(v.a, { description: G }),
                    ),
                    n.createElement(w.a, { spacing: 'space2' }),
                    n.createElement(g.b, { text: H }),
                    A.map(function (e) {
                      var t = e.Icon,
                        r = e.description,
                        a = e.label,
                        c = e.link
                      return e.shouldRender
                        ? n.createElement(M.b, { Icon: t, description: r, key: a, label: a, link: c })
                        : null
                    }),
                    D &&
                      n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(g.b, { testID: y, text: U }),
                        n.createElement(M.a, {
                          description: V,
                          label: z,
                          link: 'https://help.twitter.com/using-twitter/twitter-blue-ad-free-articles#publishers',
                          onPress: ce,
                        }),
                        n.createElement(E.a, {
                          description: Y,
                          label: B,
                          link: { external: !0, pathname: P.b },
                          onPress: function (e) {
                            new P.a(c, r()).getYourImpactChartLinkHandler()(e), se(ne)
                          },
                        }),
                        n.createElement(M.a, {
                          label: K,
                          link: 'https://help.twitter.com/using-twitter/twitter-blue-ad-free-articles',
                          onPress: ie,
                        }),
                      ),
                    R &&
                      n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(g.b, { text: $ }),
                        n.createElement(M.b, {
                          Icon: F.a,
                          description: J,
                          key: Z,
                          label: Z,
                          link: '/settings/subscription',
                        }),
                      ),
                    n.createElement(M.a, { label: ee, link: 'https://help.twitter.com/using-twitter/twitter-blue' }),
                    n.createElement(M.a, { label: te, link: 'https://help.twitter.com/forms/subscriptions' }),
                  ),
                )
              : n.createElement(p.b, { history: s, location: l, match: d })
          },
        })
      }
      var oe = S.a.create(function (e) {
        return {
          iconWrapper: { display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: e.spaces.space16 },
          iconTwitterBlue: { fill: e.colors.text },
        }
      })
      t.default = l(ce)
    },
    sGy1: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ContentYouSee', function () {
          return D
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('P1r1'),
        i = r('G6rE'),
        s = r('rxPX'),
        l = r('0KEI'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { settings: o.g, loggedInUser: i.e.selectLoggedInUser }
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
              updateSettings: o.L,
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'CONTENT_YOU_SEE_SCREEN',
              ),
            }
          }),
        d = r('3XMw'),
        f = r.n(d),
        p = r('yoO3'),
        b = r('7JQg'),
        m = r('7FtF'),
        y = r('k89r'),
        h = r('xHsv'),
        O = r('cCdp'),
        g = r('csss')
      function E(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var w = f.a.f2bd9c47,
        S = f.a.b2810ee7,
        P = f.a.fc1d217b,
        j = f.a.b8533bac,
        _ = f.a.h1f01a24,
        T = f.a.j018f2a1,
        k = f.a.h1ef00db,
        C = { page: 'settings', section: 'content_you_see' }
      function D(e) {
        var t = e.createLocalApiErrorHandler,
          r = e.displaySensitiveMediaEnabled,
          n = e.location,
          o = e.loggedInUserScreenName,
          i = e.updateSettings,
          s = Object(y.a)()
        return void 0 !== o
          ? c.createElement(
              b.b,
              { namespace: C },
              c.createElement(
                p.a,
                null,
                c.createElement(
                  m.a,
                  { location: n, screenType: 'secondaryDetail', title: w },
                  c.createElement(h.a, { description: S }),
                  c.createElement(O.a, {
                    checked: r,
                    label: P,
                    name: 'display_sensitive_media',
                    onChange: function (e, r) {
                      s.scribe(v(v({}, C), {}, { element: e, action: r ? 'enable' : 'disable' })),
                        i(a()({}, e, r)).catch(t({ showToast: !0 }))
                    },
                  }),
                  c.createElement(g.a, { label: j, link: '/'.concat(o, '/topics') }),
                  c.createElement(g.a, { label: _, link: '/settings/your_twitter_data/twitter_interests' }),
                  c.createElement(g.a, { label: T, link: '/settings/explore' }),
                  c.createElement(g.a, { label: k, link: '/settings/search' }),
                ),
              ),
            )
          : null
      }
      var R = u(D)
      t.default = R
    },
    sZlh: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return C
        })
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ddV6'),
        o = r.n(c),
        i =
          (r('jQ3i'),
          r('x4t0'),
          r('+KXO'),
          r('1t7P'),
          r('LW0h'),
          r('daRM'),
          r('jwue'),
          r('+oxZ'),
          r('FtHn'),
          r('AS3p')),
        s = r('ERkP'),
        l = r('v6aA'),
        u = r('3XMw'),
        d = r.n(u),
        f = r('yoO3'),
        p = r('7JQg'),
        b = r('BTou'),
        m = r('7FtF'),
        y = r('k89r'),
        h = r('xHsv'),
        O = r('Y3cQ')
      function g(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var v = d.a.d0b74a5a,
        w = d.a.i9c8698d,
        S = d.a.d8817e36,
        P = d.a.b9288ee6,
        j = d.a.ad881a6b,
        _ = d.a.d9c5161f,
        T = [
          { label: S, value: i.a.AcceptAllCookies, helpText: j },
          { label: P, value: i.a.RefuseNonEssentialCookies, helpText: _ },
        ],
        k = { page: 'settings', section: 'cookie_preferences' }
      function C(e) {
        var t = e.location,
          r = Object(y.a)(),
          n = (function () {
            var e = s.useContext(l.a).featureSwitches,
              t = s.useState(function () {
                var t = i.c(e)
                return [i.a.NotSet, i.a.Invalid].includes(t) ? i.a.RefuseNonEssentialCookies : t
              }),
              r = o()(t, 2),
              n = r[0],
              a = r[1]
            return {
              cookiePreference: n,
              setCookiePreference: function (t) {
                if (t === i.a.AcceptAllCookies) i.b(e), a(i.a.AcceptAllCookies)
                else {
                  if (t !== i.a.RefuseNonEssentialCookies) throw new Error('Invalid cookie preference')
                  i.d(e), a(i.a.RefuseNonEssentialCookies)
                }
              },
            }
          })(),
          a = n.cookiePreference,
          c = n.setCookiePreference
        return s.createElement(
          p.b,
          { namespace: k },
          s.createElement(
            f.a,
            null,
            s.createElement(
              m.a,
              { location: t, screenType: 'secondaryDetail', title: v },
              s.createElement(h.a, { description: w }),
              s.createElement(O.a, {
                name: 'cookie_preferences',
                onChange: function (e, t) {
                  r.scribe(
                    E(
                      E({}, k),
                      {},
                      { action: 'change', element: t === i.a.AcceptAllCookies ? 'accept_all' : 'refuse_non_essential' },
                    ),
                  ),
                    c(t),
                    t === i.a.RefuseNonEssentialCookies && (b.a.flushHTMLCache(), window.location.reload())
                },
                options: T,
                value: a,
              }),
            ),
          ),
        )
      }
    },
    su2V: function (e, t, r) {
      'use strict'
      r.d(t, 'l', function () {
        return y
      }),
        r.d(t, 'k', function () {
          return h
        }),
        r.d(t, 'f', function () {
          return O
        }),
        r.d(t, 'e', function () {
          return g
        }),
        r.d(t, 'j', function () {
          return E
        }),
        r.d(t, 'i', function () {
          return v
        }),
        r.d(t, 'h', function () {
          return w
        }),
        r.d(t, 'g', function () {
          return S
        }),
        r.d(t, 'd', function () {
          return P
        }),
        r.d(t, 'b', function () {
          return j
        }),
        r.d(t, 'a', function () {
          return _
        }),
        r.d(t, 'c', function () {
          return T
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = (r('yH/f'), r('hBpG'), r('jQ3i'), r('x4t0'), r('JtPf'), r('7x/C'), r('oEOe')),
        o = r('Ssj5'),
        i = r('kGix')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          var r = e[u].products[t]
          return (null == r ? void 0 : r.fetchStatus) || i.a.NONE
        },
        h = function (e, t) {
          var r = e[u].products[t]
          return null == r ? void 0 : r.details
        },
        O = function (e, t) {
          var r = e[u].checkoutUrls[t]
          return (null == r ? void 0 : r.fetchStatus) || i.a.NONE
        },
        g = function (e, t) {
          var r = e[u].checkoutUrls[t]
          return null == r ? void 0 : r.checkoutUrl
        },
        E = function (e) {
          return e[u].productSubscriptions.fetchStatus
        },
        v = function (e, t) {
          return (e[u].productSubscriptions.subscriptions || []).find(function (e) {
            var r, n
            return (
              (null === (r = e.product) || void 0 === r ? void 0 : r.rest_id) &&
              (null === (n = e.product) || void 0 === n ? void 0 : n.rest_id.includes(t)) &&
              'Inactive' !== e.state
            )
          })
        },
        w = function (e, t) {
          var r = e[u].customerPortalUrls[t]
          return (null == r ? void 0 : r.fetchStatus) || i.a.NONE
        },
        S = function (e, t) {
          var r = e[u].customerPortalUrls[t]
          return null == r ? void 0 : r.customerPortalUrl
        },
        P = function (e) {
          return function (t, r, n) {
            var a = n.api,
              o = Object(c.b)(t, {
                params: { id: e },
                request: a.SubscriptionPayments.fetchSubscriptionProductDetails,
              }),
              s = y(r(), e)
            return s !== i.a.NONE && s !== i.a.FAILED
              ? Promise.resolve()
              : o({ actionTypes: d, context: 'FETCH_SUBSCRIPTION_PRODUCT_DETAILS', meta: { id: e } })
          }
        },
        j = function (e, t, r, n) {
          return function (a, o, s) {
            var l = s.api,
              u = Object(c.b)(a, {
                params: { price_id: t, success_url: r, cancel_url: n },
                request: l.SubscriptionPayments.fetchSubscriptionProductCheckoutUrl,
              }),
              d = O(o(), e)
            return d !== i.a.NONE && d !== i.a.FAILED
              ? Promise.resolve()
              : u({ actionTypes: f, context: 'FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL', meta: { id: e } })
          }
        },
        _ = function () {
          return function (e, t, r) {
            var n = r.api,
              a = Object(c.b)(e, { params: {}, request: n.SubscriptionPayments.fetchProductSubscriptions }),
              o = E(t())
            return o !== i.a.NONE && o !== i.a.FAILED
              ? Promise.resolve()
              : a({ actionTypes: p, context: 'FETCH_PRODUCT_SUBSCRIPTIONS', meta: {} })
          }
        },
        T = function (e, t) {
          return function (r, n, a) {
            var o = a.api,
              s = Object(c.b)(r, {
                params: { return_url: t },
                request: o.SubscriptionPayments.fetchSubscriptionProductCustomerPortalUrl,
              }),
              l = w(n(), e)
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
              var r = t.meta.id
              return l(l({}, e), {}, { products: l(l({}, e.products), {}, a()({}, r, { fetchStatus: i.a.LOADING })) })
            case d.SUCCESS:
              var n = t.meta.id
              return l(
                l({}, e),
                {},
                { products: l(l({}, e.products), {}, a()({}, n, { fetchStatus: i.a.LOADED, details: t.payload })) },
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
    tH6R: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 76 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.854-.225 3.917-.72 1.048-.481 1.866-1.147 2.381-2.025.489-.833.732-1.749.732-2.732 0-1.25-.356-2.336-1.128-3.184-.317-.348-.69-.635-1.113-.867.302-.21.572-.455.809-.738.675-.806 1.014-1.754 1.014-2.813 0-1.49-.605-2.722-1.786-3.626C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.498-.059.972-.189 1.414-.381l-.001.002c-.329.485-.747.911-1.228 1.254.005.104.007.209.007.313 0 3.202-2.476 6.895-7.005 6.895-1.39 0-2.684-.401-3.773-1.089.193.022.389.034.588.034 1.153 0 2.215-.388 3.058-1.038-1.078-.019-1.987-.72-2.3-1.682.15.028.305.043.463.043.224 0 .441-.029.648-.084-1.127-.223-1.975-1.202-1.975-2.376v-.031c.332.181.711.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.122-.859.333-1.218 1.214 1.466 3.028 2.431 5.075 2.532-.041-.178-.064-.362-.064-.551 0-1.339 1.102-2.424 2.462-2.424.708 0 1.348.294 1.797.765.561-.108 1.088-.31 1.563-.588-.183.563-.573 1.039-1.082 1.338zm14.776 12.285H25.64V2.625h5.222v18.378zm10.35.482c-2.163 0-3.844-.54-5.044-1.622-1.183-1.082-1.775-2.62-1.775-4.614V8.33h5.222v5.626c0 1.37.33 2.366.99 2.99.658.627 1.57.94 2.737.94 1.436 0 2.535-.39 3.295-1.167.76-.795 1.14-1.8 1.14-3.017V8.33H53v12.673h-5.12v-2.89c-.56 1.1-1.43 1.936-2.612 2.51-1.183.575-2.535.862-4.056.862zm33.311-5.729H60.53c.186.794.7 1.41 1.546 1.85.845.44 1.943.66 3.295.66 1 0 1.91-.152 2.74-.457.844-.322 1.495-.76 1.95-1.32l3.956 1.725c-.896 1.065-2.096 1.876-3.6 2.433-1.487.558-3.245.837-5.273.837-1.994 0-3.71-.262-5.146-.786-1.436-.542-2.543-1.32-3.32-2.333-.76-1.03-1.14-2.248-1.14-3.65 0-1.42.388-2.645 1.165-3.676.777-1.03 1.876-1.816 3.295-2.356 1.437-.558 3.11-.837 5.02-.837 1.994 0 3.7.296 5.12.887 1.437.575 2.527 1.403 3.27 2.485.744 1.08 1.116 2.373 1.116 3.877v.66l-.001.001zM69.35 13.17c-.032-.76-.455-1.377-1.266-1.85-.794-.473-1.825-.71-3.093-.71-1.25 0-2.272.228-3.066.684-.794.457-1.267 1.082-1.42 1.876h8.847-.002z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 76, height: 24 }), (t.a = u)
    },
    tM6R: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      var n = { help: 'https://help.twitter.com/using-twitter/spaces', settings: 'https://twitter.com/settings/spaces' }
    },
    twgV: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'DataSharingWithBusinessPartners', function () {
          return j
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('NeAX'),
        i = r('rxPX'),
        s = r('0KEI'),
        l = Object(i.a)()
          .propsFromState(function () {
            return { settings: o.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowPartnerships: e.settings.allowPartnerships }
          })
          .propsFromActions(function () {
            return {
              updateSettings: o.updateSettings,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_SHARING_WITH_BUSINESS_PARTNERS_SCREEN',
              ),
            }
          }),
        u = r('3XMw'),
        d = r.n(u),
        f = r('yoO3'),
        p = r('7JQg'),
        b = r('7FtF'),
        m = r('k89r'),
        y = r('xHsv'),
        h = r('cCdp')
      function O(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var E = d.a.h14ba864,
        v = d.a.d7fcc4fa,
        w = d.a.d3c20d8f,
        S = d.a.jdaf84e3,
        P = { page: 'settings', section: 'data_sharing_with_business_partners' }
      function j(e) {
        var t = e.allowPartnerships,
          r = e.createLocalApiErrorHandler,
          n = e.location,
          o = e.updateSettings,
          i = Object(m.a)()
        return c.createElement(
          p.b,
          { namespace: P },
          c.createElement(
            f.a,
            null,
            c.createElement(
              b.a,
              { location: n, screenType: 'secondaryDetail', title: E },
              c.createElement(y.a, { description: v }),
              c.createElement(h.a, {
                checked: t,
                helpText: S,
                label: w,
                learnMoreLink: 'https://support.twitter.com/articles/20175379',
                name: 'allowPartnerships',
                onChange: function (e, t) {
                  i.scribe(g(g({}, P), {}, { element: e, action: t ? 'enable' : 'disable' })),
                    o(a()({}, e, t)).catch(r({ showToast: !0 }))
                },
              }),
            ),
          ),
        )
      }
      var _ = l(j)
      t.default = _
    },
    uAEl: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return N
        })
      var n = r('97Jx'),
        a = r.n(n),
        c = (r('z84I'), r('hBvt'), r('ERkP')),
        o = r('v6aA'),
        i = r('3XMw'),
        s = r.n(i),
        l = r('yoO3'),
        u = r('7JQg'),
        d = r('xHsv'),
        f = r('7FtF'),
        p = r('OySi'),
        b = 'accountAccessScreen',
        m = r('MWbm'),
        y = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        h = r.n(y),
        O = r('Lsrn'),
        g = r('k/Ka')
      function E(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                h()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : E(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M17.89 7.673c-.002-3.246-2.644-5.888-5.89-5.888S6.112 4.427 6.11 7.673v.002c0 .414.337.75.75.75.415 0 .75-.336.75-.75 0-2.42 1.97-4.39 4.39-4.39s4.39 1.97 4.39 4.39c0 .414.335.75.75.75.413 0 .75-.336.75-.75v-.002z',
            }),
            c.createElement('path', {
              d: 'M19.75 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm.75 12.482c0 .413-.336.75-.75.75H4.25c-.414 0-.75-.337-.75-.75V9.56c0-.414.336-.75.75-.75h15.5c.414 0 .75.336.75.75v10.23z',
            }),
            c.createElement('path', {
              d: 'M12 11.72c-1.136 0-2.057.92-2.057 2.056 0 .87.543 1.61 1.307 1.91v1.397c0 .414.336.75.75.75s.75-.336.75-.75v-1.396c.764-.3 1.307-1.04 1.307-1.91 0-1.137-.92-2.058-2.057-2.058z',
            }),
          ),
        )
      }
      w.metadata = { width: 24, height: 24 }
      var S = w
      function P(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                h()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var _ = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(g.a)(
          'svg',
          j(
            j({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [O.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M6.11 4.25v1.86H4.25C3.01 6.11 2 7.12 2 8.36v11.39C2 20.99 3.01 22 4.25 22h11.39c1.24 0 2.25-1.01 2.25-2.25v-1.86h1.86c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2H8.36C7.12 2 6.11 3.01 6.11 4.25zm9.53 16.25H4.25c-.413 0-.75-.337-.75-.75V8.36c0-.412.337-.75.75-.75h11.39c.412 0 .75.338.75.75v11.39c0 .413-.338.75-.75.75zm4.11-17c.413 0 .75.337.75.75v11.39c0 .412-.337.75-.75.75h-1.86V8.36c0-1.24-1.01-2.25-2.25-2.25H7.61V4.25c0-.413.338-.75.75-.75h11.39z',
            }),
          ),
        )
      }
      _.metadata = { width: 24, height: 24 }
      var T = _,
        k = r('3JQt'),
        C = r('wz7L'),
        D = s.a.f8645654,
        R = s.a.b02df747,
        A = s.a.a2197725,
        L = s.a.j95edf76,
        F = s.a.g2841de4,
        I = s.a.ae72d4c4,
        M = s.a.h1abfbcd,
        x = s.a.j748604a,
        H = { page: 'settings', section: 'security_and_account_access' }
      function N(e) {
        var t = e.location,
          r = (function (e) {
            return [
              { label: L, description: A, link: '/settings/security', Icon: S },
              { label: I, description: F, link: '/settings/apps_and_sessions', Icon: T },
              e.isTrue('responsive_web_disconnect_third_party_sso_enabled')
                ? { label: M, description: x, link: '/settings/connected_accounts', Icon: k.a }
                : void 0,
              e.isTrue('responsive_web_delegate_enabled')
                ? {
                    description: 'Manage an organization and Team.',
                    label: 'Twitter Delegate',
                    link: '/settings/delegate?enable_filtered_bundle=bundle.Delegate',
                    Icon: C.a,
                  }
                : void 0,
            ]
          })(c.useContext(o.a).featureSwitches)
        return c.createElement(
          u.b,
          { namespace: H },
          c.createElement(
            l.a,
            null,
            c.createElement(
              f.a,
              { location: t, screenType: 'primaryDetail', title: D },
              c.createElement(
                m.a,
                { testID: b },
                c.createElement(d.a, { description: R }),
                r.map(function (e) {
                  return e && c.createElement(p.b, a()({}, e, { key: e.link }))
                }),
              ),
            ),
          ),
        )
      }
    },
    vMn4: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M21 3.25H6c-1.24 0-2.25 1.01-2.25 2.25v.75H3C1.76 6.25.75 7.26.75 8.5v10c0 1.24 1.01 2.25 2.25 2.25h15c1.24 0 2.25-1.01 2.25-2.25v-.75H21c1.24 0 2.25-1.01 2.25-2.25v-10c0-1.24-1.01-2.25-2.25-2.25zM2.25 8.5c0-.413.337-.75.75-.75h1.654C4.37 8.938 3.438 9.87 2.25 10.154V8.5zM3 19.25c-.413 0-.75-.337-.75-.75v-1.654c1.188.283 2.12 1.216 2.404 2.404H3zm15.75-.75c0 .413-.337.75-.75.75h-1.654c.283-1.188 1.216-2.12 2.404-2.404V18.5zm0-3.174c-2.016.323-3.6 1.908-3.924 3.924H6.174c-.323-2.016-1.908-3.6-3.924-3.924v-3.652c2.016-.323 3.6-1.908 3.924-3.924h8.652c.323 2.016 1.908 3.6 3.924 3.924v3.652zm0-5.172c-1.188-.283-2.12-1.216-2.404-2.404H18c.413 0 .75.337.75.75v1.654zm3 5.346c0 .413-.337.75-.75.75h-.75V8.5c0-1.24-1.01-2.25-2.25-2.25H5.25V5.5c0-.413.337-.75.75-.75h15c.413 0 .75.337.75.75v10z',
            }),
            c.createElement('path', {
              d: 'M10.5 9.316c-1.878 0-3.406 1.877-3.406 4.184s1.528 4.184 3.406 4.184 3.406-1.877 3.406-4.184-1.528-4.184-3.406-4.184zm0 6.868c-1.033 0-1.906-1.23-1.906-2.684s.873-2.684 1.906-2.684 1.906 1.23 1.906 2.684-.873 2.684-1.906 2.684z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    wsOx: function (e, t, r) {
      'use strict'
      r.d(t, 'c', function () {
        return y
      }),
        r.d(t, 'b', function () {
          return h
        }),
        r.d(t, 'd', function () {
          return O
        }),
        r.d(t, 'a', function () {
          return g
        }),
        r.d(t, 'e', function () {
          return E
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = (r('yH/f'), r('kGix')),
        o = r('Ssj5'),
        i = r('RqPI'),
        s = r('oEOe')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
            var r,
              n = null === (r = t.payload) || void 0 === r ? void 0 : r.duration
            return u(u({}, e), {}, { duration: n, updateSettingsFetchStatus: c.a.LOADED })
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
          return function (e, t, r) {
            var n = r.api
            return Object(s.b)(e, { request: n.SettingsGraphQL.fetchSafetyModeSettings })({
              actionTypes: p,
              context: 'FETCH_SAFETY_MODE_SETTINGS',
            })
          }
        },
        E = function (e) {
          return function (t, r, n) {
            var a = n.api,
              c = r(),
              o = { userId: Object(i.p)(c) || '', duration: e }
            return Object(s.c)(t, { params: o, request: a.SettingsGraphQL.updateSafetyModeSettings })({
              actionTypes: f,
              context: 'UPDATE_SAFETY_MODE_SETTINGS',
              payload: o,
            })
          }
        }
    },
    wz7L: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        c = r('ERkP'),
        o = r('Lsrn'),
        i = r('k/Ka')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    x8q0: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ERkP'),
        a = r('G6rE'),
        c = r('rxPX'),
        o = Object(c.a)()
          .propsFromState(function () {
            return { loggedInUser: a.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userId: (null == t ? void 0 : t.id_str) || '' }
          })
          .withAnalytics({ component: 'safety_mode_modal_flagged_accounts' }),
        i = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('KEM+')),
        s = r.n(i),
        l = r('QIgh'),
        u = r('8UdT'),
        d = r('88ay'),
        f = r('Ka9G')
      function p(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                s()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var m = b(b({}, l.b), {}, s()({}, u.b.User, Object(f.a)({ decoration: d.d }))),
        y = r('jHSc'),
        h = r('fTQJ'),
        O = r('118N'),
        g = r('t62R'),
        E = r('rHpw'),
        v = r('FIs5'),
        w = r('3XMw'),
        S = r.n(w),
        P = S.a.f2351b97,
        j = S.a.e9f1fbcb,
        _ = n.createElement(
          n.Fragment,
          null,
          n.createElement(
            S.a.I18NFormatMessage,
            { $i18n: 'd724f426' },
            n.createElement(
              g.b,
              { style: { display: 'block', paddingBottom: E.a.theme.spaces.space20 } },
              S.a.c51dcdfc,
            ),
          ),
          n.createElement(
            S.a.I18NFormatMessage,
            { $i18n: 'h3d97f03' },
            n.createElement(g.b, { link: '/settings/blocked/all' }, S.a.bd0a88c1),
          ),
        ),
        T = function () {
          return n.createElement(v.a, { header: j, message: _ })
        }
      t.default = o(function (e) {
        var t = e.history,
          r = e.userId,
          a = n.useMemo(
            function () {
              return Object(O.a)(r)
            },
            [r],
          )
        return n.createElement(
          y.b,
          {
            backButtonType: 'back',
            history: t,
            onBackClick: function () {
              t.goBack()
            },
            title: P,
            withBottomBorder: !1,
          },
          n.createElement(h.a, { entryConfiguration: m, module: a, renderEmptyState: T, title: P }),
        )
      })
    },
    xJPF: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ManageSubscriptionScreen', function () {
          return v
        })
      r('2G9S')
      var n = r('ERkP'),
        a = r('rxPX'),
        c = r('su2V'),
        o = r('XOb8'),
        i = Object(a.a)()
          .propsFromState(function () {
            return {
              productSubscriptionsFetchStatus: c.j,
              subscription: function (e) {
                return Object(c.i)(e, o.e)
              },
              customerPortalUrlFetchStatus: function (e) {
                return Object(c.h)(e, o.d)
              },
              customerPortalUrl: function (e) {
                return Object(c.g)(e, o.d)
              },
            }
          })
          .propsFromActions(function () {
            return { fetchProductSubscriptions: c.a, fetchSubscriptionProductCustomerPortalUrl: c.c }
          })
          .withAnalytics({ page: 'subscriptions', section: 'management' }),
        s = r('v//M'),
        l = r('3XMw'),
        u = r.n(l),
        d = r('Wc+h'),
        f = r('yoO3'),
        p =
          (r('yH/f'),
          Object.freeze({ AppleAppStore: 'AppleAppStore', GooglePlay: 'GooglePlay', TPay: 'TPay', Stripe: 'Stripe' })),
        b = r('7FtF'),
        m = r('Ty5D'),
        y = r('MWbm'),
        h = r('cm6r'),
        O = r('atVN'),
        g = r('t62R'),
        E = r('xHsv')
      function v(e) {
        var t = e.analytics,
          r = e.customerPortalUrl,
          a = e.customerPortalUrlFetchStatus,
          c = e.fetchProductSubscriptions,
          i = e.fetchSubscriptionProductCustomerPortalUrl,
          l = e.productSubscriptionsFetchStatus,
          v = e.subscription,
          S = Object(m.h)(),
          P = u.a.ib35705d,
          j = u.a.e5fff0c7,
          _ = u.a.baf97715,
          T = 'Expire' === (null == v ? void 0 : v.state) ? ''.concat(j, ' ').concat(_) : j,
          k = u.a.fff413dc,
          C = u.a.h201c4c1,
          D = u.a.i8385a2c,
          R = u.a.h80834de,
          A = u.a.ib8ebf3b,
          L = function () {
            c()
          }
        n.useEffect(function () {
          t.scribe({ action: 'impression' })
        }, []),
          n.useEffect(
            function () {
              L()
            },
            [c],
          )
        var F = function () {
          t.scribe({
            action: 'click',
            data: {
              payment_source: (null == v ? void 0 : v.payment_source) || '',
              status: (null == v ? void 0 : v.state) || '',
            },
          }),
            i(o.d, o.b)
        }
        return n.createElement(
          f.a,
          null,
          n.createElement(
            b.a,
            { location: S, title: P },
            n.createElement(E.a, { description: T }),
            n.createElement(
              y.a,
              null,
              n.createElement(s.a, {
                fetchStatus: l,
                onRequestRetry: L,
                render: function () {
                  var e,
                    t = null == v ? void 0 : v.payment_source
                  t && t !== p.Stripe && (e = t === p.AppleAppStore ? C : t === p.GooglePlay ? D : R)
                  var r = A({ mobilePlatform: e })
                  return n.createElement(
                    n.Fragment,
                    null,
                    t === p.Stripe
                      ? n.createElement(
                          h.a,
                          { accessibilityRole: 'button', onPress: F, style: w.manageSubscriptionInteraction },
                          n.createElement(
                            O.a,
                            null,
                            n.createElement(
                              y.a,
                              { style: w.manageSubscriptionSection },
                              n.createElement(g.b, null, k),
                              n.createElement(d.a, { style: w.goToSubscriptionPortalIcon }),
                            ),
                          ),
                        )
                      : n.createElement(E.a, { description: r }),
                  )
                },
                retryable: !0,
              }),
              n.createElement(s.a, {
                fetchStatus: a,
                onRequestRetry: function () {
                  i(o.d, o.b)
                },
                render: function () {
                  return r && (window.location.href = r), null
                },
                retryable: !0,
              }),
            ),
          ),
        )
      }
      var w = r('rHpw').a.create(function (e) {
          return {
            manageSubscriptionSection: { flexDirection: 'row', justifyContent: 'space-between' },
            goToSubscriptionPortalIcon: { color: e.colors.gray700 },
            manageSubscriptionInteraction: { cursor: 'pointer' },
          }
        }),
        S = i(v)
      t.default = S
    },
  },
])
//# sourceMappingURL=WIPED
