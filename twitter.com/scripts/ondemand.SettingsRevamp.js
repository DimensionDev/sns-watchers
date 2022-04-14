;(window.webpackJsonp = window.webpackJsonp || []).push([
  [238],
  {
    '1Uii': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'OffTwitterActivity', function () {
          return H
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ddV6'),
        s = n.n(o),
        l = n('ERkP'),
        u = n.n(l),
        d = n('NeAX'),
        f = n('RqPI'),
        m = n('P1r1'),
        p = n('hqKg'),
        b = n('rxPX'),
        h = n('0KEI'),
        E = Object(b.a)()
          .propsFromState(function () {
            return {
              settings: d.selectUserPreferences,
              isEUUser: Object(p.createSelector)(f.n, m.g, d.selectPreferences, function (e, t, n) {
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
              updateSettings: d.updateSettings,
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)(
                'OFF_TWITTER_ACTIVITY_SCREEN',
              ),
            }
          }),
        g = n('3XMw'),
        v = n.n(g),
        y = n('yoO3'),
        S = n('7JQg'),
        _ = n('7FtF'),
        w = n('k89r'),
        C = n('RKmr'),
        k = n('e0ey'),
        T = n('eb3s'),
        O = v.a.bcae496c,
        L = v.a.acc60551,
        I = v.a.f80a33af,
        A = v.a.b276596b,
        P = v.a.c966aaf4,
        F = v.a.e8313b32,
        R = v.a.f1d46fd5,
        M = v.a.cfd2f35d,
        x = v.a.f6c8ccc7,
        U = v.a.f748b0fc,
        D = { page: 'settings', section: 'off_twitter_activity' }
      function H(e) {
        var t = e.allowDeviceAccess,
          n = e.createLocalApiErrorHandler,
          a = e.isEUUser,
          i = e.location,
          o = e.updateSettings,
          l = Object(w.a)(),
          d = (function (e, t, n) {
            var a = u.a.useState(!1),
              r = s()(a, 2),
              i = r[0],
              c = r[1]
            function o(e) {
              n('allowCookieUse', e)
            }
            return {
              showConfirmation: i,
              enabled: e,
              controlDisabled: t && !e,
              _handleChanged: function (e, n) {
                t && !n ? c(!0) : o(n)
              },
              _handleConfirmationCancel: function () {
                c(!1)
              },
              _handleConfirmationConfirm: function () {
                c(!1), o(!1)
              },
            }
          })(Boolean(e.allowCookieUse), Boolean(a), f)
        function f(e, t) {
          l.scribe(c()(c()({}, D), {}, { element: e, action: t ? 'enable' : 'disable' })),
            o(r()({}, e, t)).catch(n({ showToast: !0 }))
        }
        return u.a.createElement(
          S.c,
          { namespace: D },
          u.a.createElement(
            y.a,
            null,
            u.a.createElement(
              _.a,
              { location: i, screenType: 'secondaryDetail', title: O },
              u.a.createElement(C.a, { description: L }),
              u.a.createElement(k.a, {
                checked: d.enabled,
                disabled: d.controlDisabled,
                helpText: a ? P : A,
                label: I,
                learnMoreLink: 'https://support.twitter.com/articles/20169421',
                name: 'allowCookieUse',
                onChange: d._handleChanged,
              }),
              u.a.createElement(k.a, {
                checked: t,
                helpText: U,
                label: x,
                learnMoreLink: 'https://support.twitter.com/articles/20175257',
                name: 'allowDeviceAccess',
                onChange: f,
              }),
            ),
            d.showConfirmation &&
              u.a.createElement(T.a, {
                cancelButtonLabel: M,
                confirmButtonLabel: R,
                onCancel: d._handleConfirmationCancel,
                onConfirm: d._handleConfirmationConfirm,
                text: F,
              }),
          ),
        )
      }
      var j = E(H)
      t.default = j
    },
    '35hZ': function (e, t, n) {
      'use strict'
      var a = n('EORa').useTrackLoadQueryInRender,
        r = n('h2Du'),
        i = n('6zvL'),
        c = n('PJTX'),
        o = n('I9iR'),
        s = (n('ERkP').useDebugValue, n('e1/f').__internal),
        l = s.fetchQueryDeduped,
        u = s.fetchQuery
      n('/2Cm')
      e.exports = function (e, t, n) {
        a()
        var s,
          d = c(),
          f = t.fetchKey,
          m = t.fetchPolicy,
          p = t.source,
          b = t.variables,
          h = t.networkCacheConfig,
          E = i(e, b, h)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          E.request.node.params.name !== t.name && o(!1),
            (s = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: f,
              fetchObservable: l(d, E.request.identifier, function () {
                return d === t.environment && null != p
                  ? d.executeWithSource({ operation: E, source: p })
                  : d.execute({ operation: E })
              }),
              fetchPolicy: m,
              query: E,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var g = u(d, E)
          s = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && d === t.environment ? p.ifEmpty(g) : (t.environment, g),
            fetchKey: f,
            fetchPolicy: m,
            query: E,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(s)
      }
    },
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('fyvP'),
        c = n('rHpw'),
        o = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(o.a, { style: s.root }, r.a.createElement(i.a, e))
      }
      var s = c.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '3Ohe': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        m = n('KEM+'),
        p = n.n(m),
        b = (n('2G9S'), n('uFXj'), n('ERkP')),
        h = n.n(b),
        E = n('t62R'),
        g = n('rHpw'),
        v = n('MWbm'),
        y = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(s()(e), '_renderSubtextAndLink', function () {
                var t = e.props.subtext
                return h.a.createElement(E.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
              }),
              p()(s()(e), '_renderLearnMore', function () {
                var t = e.props,
                  n = t.learnMoreLabel,
                  a = t.learnMoreLink
                return a && n ? h.a.createElement(E.b, { link: a, size: 'subtext2' }, n) : null
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
                    t = e.label,
                    n = e.learnMoreLabel,
                    a = e.learnMoreLink,
                    r = e.subtext,
                    i = e.withBottomBorder
                  return h.a.createElement(
                    v.a,
                    { style: [S.root, i && S.bottomBorder] },
                    h.a.createElement(E.b, null, t),
                    r
                      ? n && a
                        ? this._renderSubtextAndLink()
                        : h.a.createElement(E.b, { color: 'gray700', size: 'subtext2' }, r)
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      p()(y, 'defaultProps', { withBottomBorder: !0 })
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
      t.a = y
    },
    '4BrD': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z',
              }),
              c.a.createElement('path', {
                d: 'M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    '5Y3x': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'monetizationSettingsQuery', function () {
          return R
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = (n('YWiL'), n('3XMw')),
        c = n.n(i),
        o = n('yiKp'),
        s = n.n(o),
        l = n('Lsrn'),
        u = n('k/Ka'),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(u.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
        p = n('yoO3'),
        b = n('7FtF'),
        h = n('zCf4'),
        E = n('n0Rl'),
        g = n('6vad'),
        v = n('0yYu'),
        y = n('OySi'),
        S = n('Irs7'),
        _ = c.a.d299431b,
        w = c.a.h93824cc,
        C = c.a.a6777c1b,
        k = c.a.c1b71878,
        T = c.a.e939cc53,
        O = c.a.ibb5e1c8,
        L = c.a.b255df58,
        I = c.a.b3f834c7,
        A = c.a.i724fb49,
        P = c.a.f66d24be,
        F = { Approved: T, NotStarted: null, Rejected: O, Submitted: L, Waitlisted: I },
        R = void 0 !== f ? f : (f = n('jN9l')),
        M = Object(E.b)(R, { errorConfig: { context: 'MONETIZATION_SETTINGS' } })
      t.default = r.a.memo(
        Object(S.a)(
          function () {
            var e = Object(h.g)()
            return r.a.createElement(M, {
              render: function (t) {
                var n,
                  a,
                  i,
                  c,
                  o = t.data,
                  s = t.error,
                  l = !s && !(null == o || null === (n = o.viewer) || void 0 === n || !n.is_active_creator),
                  u =
                    (!s &&
                      (null == o ||
                      null === (a = o.viewer) ||
                      void 0 === a ||
                      null === (i = a.user_results) ||
                      void 0 === i ||
                      null === (c = i.result) ||
                      void 0 === c
                        ? void 0
                        : c.super_follows_application_status)) ||
                    'NotStarted',
                  d = l ? k : F[u]
                return r.a.createElement(
                  p.a,
                  null,
                  r.a.createElement(
                    b.a,
                    { location: e, screenType: 'primaryDetail', title: _ },
                    r.a.createElement(g.b, { text: w }),
                    r.a.createElement(y.b, { Icon: m, description: d, label: C, link: '/settings/superfollows' }),
                    r.a.createElement(v.a, null),
                    r.a.createElement(g.b, { text: A }),
                    r.a.createElement(y.a, { label: P, link: 'https://help.twitter.com/using-twitter#creators' }),
                  ),
                )
              },
              variables: {},
            })
          },
          { page: 'settings', section: 'monetization' },
        ),
      )
    },
    '5ZXc': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Languages', function () {
          return R
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('S/HT'),
        c = n('RqPI'),
        o = n('rxPX'),
        s = n('0KEI'),
        l = n('FDFL'),
        u = function (e) {
          var t = Object(c.p)(e)
          return t && Object(l.b)(e, t)
        },
        d = Object(o.a)()
          .propsFromState(function () {
            return { languageName: u, languageCode: c.p }
          })
          .propsFromActions(function () {
            return {
              fetchCountryNamesIfNeeded: i.a,
              fetchAvailableLanguagesIfNeeded: l.a,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)('LANGUAGES_SCREEN'),
            }
          }),
        f = n('3XMw'),
        m = n.n(f),
        p = n('yoO3'),
        b = n('7JQg'),
        h = n('7FtF'),
        E = n('RKmr'),
        g = n('6vad'),
        v = n('csss'),
        y = n('0yYu'),
        S = m.a.d495680d,
        _ = m.a.f9c98140,
        w = m.a.a4b69cbb,
        C = m.a.da3b2587,
        k = m.a.a4b69cbb,
        T = m.a.cab61d58,
        O = m.a.f0853ba6,
        L = m.a.bca1de49,
        I = m.a.c3aa76c3,
        A = m.a.b2a77838,
        P = m.a.c3aa76c3,
        F = { page: 'settings', section: 'languages' }
      function R(e) {
        var t = e.createLocalApiErrorHandler,
          n = e.fetchAvailableLanguagesIfNeeded,
          a = e.fetchCountryNamesIfNeeded,
          i = e.languageCode,
          c = e.languageName,
          o = e.location
        return (
          r.a.useEffect(
            function () {
              i && a(i).catch(t()), n().catch(t())
            },
            [i, a, n, t],
          ),
          r.a.createElement(
            b.c,
            { namespace: F },
            r.a.createElement(
              p.a,
              null,
              r.a.createElement(
                h.a,
                { location: o, screenType: 'secondaryDetail', title: S },
                r.a.createElement(E.a, { description: _ }),
                r.a.createElement(g.b, { text: w }),
                r.a.createElement(E.a, { description: C }),
                r.a.createElement(v.a, { description: c, label: k, link: '/settings/language' }),
                r.a.createElement(y.a, null),
                r.a.createElement(g.b, { text: T }),
                r.a.createElement(E.a, { description: O }),
                r.a.createElement(v.a, { label: L, link: '/i/flow/language_selector' }),
                r.a.createElement(y.a, null),
                r.a.createElement(g.b, { text: I }),
                r.a.createElement(E.a, { description: A }),
                r.a.createElement(v.a, { label: P, link: '/settings/your_twitter_data/language' }),
              ),
            ),
          )
        )
      }
      var M = d(R)
      t.default = M
    },
    '6qBT': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        c = n('rxPX'),
        o = n('2gv2'),
        s = Object(c.a)()
          .propsFromState(function () {
            return { isToolboxShown: o.b }
          })
          .propsFromActions(function () {
            return { setToolboxSettingsUpsellDismissedEpochMillis: o.d }
          }),
        l = n('3XMw'),
        u = n.n(l),
        d = n('yoO3'),
        f = n('7JQg'),
        m = n('7FtF'),
        p = n('2V3d'),
        b = n('RKmr'),
        h = n('csss'),
        E = u.a.cbd449af,
        g = u.a.ab125232,
        v = u.a.a5f32aa2,
        y = u.a.daef29b7,
        S = u.a.i0dd9b9d,
        _ = u.a.aaafffd9,
        w = { page: 'settings', section: 'mute_and_block' }
      var C = s(function (e) {
        var t = r.a.useContext(i.a).featureSwitches,
          n = e.isToolboxShown,
          a = e.location,
          c = e.setToolboxSettingsUpsellDismissedEpochMillis,
          o = t.isTrue('responsive_web_drew_mute_and_block_enabled'),
          s = r.a.useCallback(
            function () {
              c()
            },
            [c],
          )
        return r.a.createElement(
          f.c,
          { namespace: w },
          r.a.createElement(
            d.a,
            null,
            r.a.createElement(
              m.a,
              { location: a, screenType: 'secondaryDetail', title: E },
              r.a.createElement(b.a, { description: g }),
              r.a.createElement(h.a, { label: v, link: '/settings/blocked/all' }),
              r.a.createElement(h.a, { label: y, link: '/settings/muted/all' }),
              r.a.createElement(h.a, { label: S, link: '/settings/muted_keywords' }),
              r.a.createElement(h.a, { label: _, link: '/settings/notifications/advanced_filters' }),
              o && n ? r.a.createElement(p.a, { onDismiss: s }) : null,
            ),
          ),
        )
      })
      t.default = C
    },
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      n('yH/f')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        c = n('EHV7'),
        o = n('rHpw'),
        s = o.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        l = n('7Mjr'),
        u = n('I4+6'),
        d = n('cm6r'),
        f = n('MWbm'),
        m = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var p = o.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          n = e.landingUrl,
          a = e.nativeID,
          b = e.rightControl,
          h = e.style,
          E = e.subtext,
          g = e.testID,
          v = e.text,
          y = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return r.a.createElement(c.a, { style: s.icon })
              default:
                return null
            }
          })(t),
          S = E ? null : p.withSubtext,
          _ = u.a.generate({
            backgroundColor: o.a.theme.colors.gray0,
            color: o.a.theme.colors.cellBackground,
            customFocusBackgroundColor: o.a.theme.colors.gray0,
            customHoverBackgroundColor: o.a.theme.colors.gray0,
            customPressedBackgroundColor: o.a.theme.colors.gray0,
          })
        return r.a.createElement(
          d.a,
          {
            interactiveStyles: n ? _ : null,
            link: null == n ? void 0 : n.url,
            nativeID: a,
            style: [p.root, h],
            testID: g,
          },
          r.a.createElement(
            f.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: p.mainContent },
            r.a.createElement(f.a, { style: p.icon }, y),
            r.a.createElement(
              i.b,
              { numberOfLines: 3, size: 'headline1', style: S, weight: 'heavy', withHashflags: !0 },
              v,
            ),
            r.a.createElement(
              f.a,
              { style: p.rightControlGroup },
              n ? r.a.createElement(f.a, { style: S }, r.a.createElement(l.a, { style: p.iconArrow })) : null,
              b ? r.a.createElement(f.a, null, b) : null,
            ),
          ),
          E
            ? r.a.createElement(
                i.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: p.subtext, withHashflags: !0 },
                E,
              )
            : null,
        )
      }
    },
    '7FtF': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        m = n('KEM+'),
        p = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        h = n.n(b),
        E = n('P1r1'),
        g = n('G6rE'),
        v = n('rxPX'),
        y = n('0KEI'),
        S = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: E.n, loggedInUser: g.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: E.f,
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        _ = n('v//M'),
        w = n('3XMw'),
        C = n.n(w),
        k = n('M2mT'),
        T = 'settingsDetailSave',
        O = n('mw9i'),
        L = n('0yYu'),
        I = n('/yvb'),
        A = n('rHpw'),
        P = C.a.i2209530,
        F = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(s()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return h.a.createElement(_.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              p()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.onSubmit,
                  r = t.submitDisabled,
                  i = t.submitLabel,
                  c = t.submitType,
                  o = t.withMarginBottom
                return h.a.createElement(
                  O.a,
                  { style: [R.contentRoot, o && R.withMarginBottom] },
                  n,
                  a
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(L.a, null),
                        h.a.createElement(
                          O.a,
                          { style: R.buttonContainer },
                          h.a.createElement(I.a, { disabled: r, onPress: a, style: R.button, testID: T, type: c }, i),
                        ),
                      )
                    : null,
                )
              }),
              p()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSettingsIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    a = e.rightControl,
                    r = e.screenType,
                    i = e.secondaryBar,
                    c = e.title,
                    o = e.withBottomBorder,
                    s = this.getBackLocation(),
                    l = t ? '@'.concat(t.screen_name) : void 0
                  return h.a.createElement(
                    k.a,
                    {
                      backLocation: s,
                      onBackClick: n,
                      rightControl: a,
                      screenType: r,
                      secondaryBar: i,
                      showSubtitleOnWideDetail: !1,
                      subtitle: l,
                      title: c,
                      withBottomBorder: o,
                    },
                    t ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      p()(F, 'defaultProps', { submitLabel: P, submitType: 'brandFilled', withMarginBottom: !0 })
      var R = A.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(A.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = S(F)
    },
    '899o': function (e, t, n) {
      'use strict'
      n.r(t)
      n('KqXw'), n('WNMA')
      var a,
        r = n('ERkP'),
        i = n.n(r),
        c = n('v6aA'),
        o = n('FIs5'),
        s = n('KEM+'),
        l = n.n(s),
        u = n('yiKp'),
        d = n.n(u),
        f = n('PnFR'),
        m = n('8UdT'),
        p = n('S/Qv'),
        b = n('5Y9N'),
        h = n('91Nr'),
        E = n('Yy//'),
        g = d()(
          d()({}, Object(b.a)({})),
          {},
          ((a = {}),
          l()(a, m.b.Message, Object(p.a)({})),
          l()(a, m.b.Tombstone, h.a),
          l()(a, m.b.Tweet, Object(E.a)({ displayBlocked: !0 })),
          l()(a, m.b.TimelineCursor, Object(f.a)({})),
          a),
        ),
        v = n('3XMw'),
        y = n.n(v),
        S = n('yoO3'),
        _ = n('fTQJ'),
        w = n('WpDa'),
        C = n('ZNT5'),
        k = n('7JQg'),
        T = n('7FtF'),
        O = n('TnO6'),
        L = y.a.f154bd64,
        I = { page: 'settings', component: 'autoblocked_account_tweets' },
        A = { context: 'safety_mode' },
        P = y.a.e9f1fbcb,
        F = y.a.de9b6641,
        R = function () {
          return i.a.createElement(o.a, { header: P, message: F })
        }
      t.default = function (e) {
        var t = e.history,
          n = e.location,
          a = e.match,
          r = a.params.userId,
          o = i.a.useContext(c.a).featureSwitches,
          s = i.a.useMemo(
            function () {
              return (
                (e = r),
                Object(C.a)({
                  timelineId: 'ritoActionedTweets-'.concat(e),
                  getEndpoint: function (e) {
                    return e.RitoActionedTweets.fetchRitoActionedTweets
                  },
                  getEndpointParams: function (t) {
                    var n = t.count,
                      a = t.cursor
                    return { count: n, cursor: 'string' == typeof a ? a : void 0, userId: e }
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
          l = o.isTrue('rito_safety_mode_modal_prompt_enabled')
            ? i.a.createElement(O.b, { history: t, location: n, match: a, timelineType: O.a.ActionedTweets })
            : null
        return i.a.createElement(
          k.c,
          { data: A, namespace: I },
          i.a.createElement(
            S.a,
            null,
            i.a.createElement(
              T.a,
              { screenType: 'secondaryDetail', title: L, withMarginBottom: !1 },
              i.a.createElement(_.a, { entryConfiguration: g, footer: l, module: s, renderEmptyState: R, title: L }),
            ),
          ),
        )
      }
    },
    AS3p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'c', function () {
          return o
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
      var a = n('SrIh'),
        r = n('JbbX'),
        i = 1e3,
        c = Object.freeze({
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
                ? c.AcceptAllCookies
                : t[2]
                ? c.RefuseNonEssentialCookies
                : (Object(a.a)('Invalid consent signal state'), c.Invalid)
              : c.NotSet
            : c.Invalid
          : c.NotSet
      }
      function s(e) {
        Object(r.b)({ consent_version: 2, text_version: i, 1: !0 }, e)
      }
      function l(e) {
        Object(r.b)({ consent_version: 2, text_version: i, 2: !0 }, e)
      }
      function u(e) {
        return !(e[1] && e[2])
      }
      function d(e) {
        return e[1] || e[2]
      }
      function f(e) {
        var t = Object(r.a)(e)
        return !t || !u(t) || !d(t) || t.consent_version < 2 || t.text_version < i
      }
    },
    B4m3: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UndoTweetScreen', function () {
          return D
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('KqXw'), n('WNMA'), n('TJCb'), n('7x/C'), n('DZ+c'), n('z84I'), n('6U7i'), n('ERkP')),
        s = n.n(o),
        l = n('v6aA'),
        u = n('gUb7'),
        d = n('rxPX'),
        f = n('u7LJ'),
        m = Object(d.a)()
          .propsFromState(function () {
            return { undoTweetSettings: f.d, userClaimsFetchStatus: u.c }
          })
          .propsFromActions(function () {
            return { updateSettings: f.e }
          })
          .withAnalytics({ page: 'settings', section: 'subscriptions' }),
        p = n('5oBF'),
        b = n('v//M'),
        h = n('3XMw'),
        E = n.n(h),
        g = n('/de5'),
        v = n('yoO3'),
        y = n('7FtF'),
        S = n('0KEI'),
        _ = n('ehR8'),
        w = n('MWbm'),
        C = n('RKmr'),
        k = n('e0ey'),
        T = n('fyvP'),
        O = n('rHpw'),
        L = E.a.de43eaf2,
        I = E.a.b6ab9962,
        A = E.a.jdceda6f,
        P = E.a.j45978a8,
        F = E.a.be077e8b,
        R = E.a.f3429f2b,
        M = E.a.i9028824,
        x = E.a.j905e6fe,
        U = E.a.e2c39a4c
      function D(e) {
        var t = e.analytics,
          n = e.undoTweetSettings,
          a = e.updateSettings,
          i = e.userClaimsFetchStatus,
          o = n.durationSecs,
          u = n.original,
          d = n.poll,
          f = n.quote,
          m = n.reply,
          h = n.thread,
          O = Object(_.a)(),
          D = O.history,
          j = O.location,
          N = O.match,
          z = s.a.useContext(l.a),
          B = z.featureSwitches,
          K = z.userClaims,
          V = (o || p.a).toString(),
          G = Object(S.useCreateLocalApiErrorHandler)('UNDO_TWEET_SCREEN_CONTEXT'),
          X = K.isTrueAndEnabled('subscriptions_feature_1003'),
          Q = B.isTrue('subscriptions_product_feature_list_api_enabled'),
          W = E.a.i3b7a017,
          q = [5, 10, 20, 30, 60].map(function (e) {
            return { label: W(e), value: e.toString() }
          })
        function Y(e, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          if (null != e && e.undoPreview) {
            var i = e.undoPreview
            Q
              ? a({ undoPreview: i })
                  .then(function () {
                    t.scribe({
                      action: 'product_feature_settings_update',
                      data: { subscription_details: c()(c()({}, n), {}, { success: !0 }) },
                    })
                  })
                  .catch(function (e) {
                    t.scribe({
                      action: 'product_feature_settings_update',
                      data: { subscription_details: c()(c()({}, n), {}, { success: !1 }) },
                    }),
                      r && G({})(e)
                  })
              : a({ undoPreview: i })
          }
        }
        function J(e, a) {
          var i = {
            product_feature_id: 'undoTweet',
            product_feature_settings_element: e,
            product_feature_settings_value: a,
          }
          if ('period' === e) {
            var o = Number(a)
            return (
              Y({ undoPreview: c()(c()({}, n), {}, { durationSecs: o }) }, i),
              void t.scribe({
                component: 'undo_send',
                element: 'undo_period',
                action: 'select',
                data: { subscription_details: { undo_period: o } },
              })
            )
          }
          Y({ undoPreview: c()(c()({}, n), {}, r()({}, e, !n[e])) }, i)
        }
        return s.a.createElement(b.a, {
          accessibilityLabel: M,
          fetchStatus: i,
          render: function () {
            return X
              ? s.a.createElement(
                  v.a,
                  null,
                  s.a.createElement(
                    y.a,
                    { location: j, title: L },
                    s.a.createElement(C.a, { description: U }),
                    s.a.createElement(k.a, { checked: void 0 === u || u, label: I, name: 'original', onChange: J }),
                    s.a.createElement(k.a, { checked: void 0 === m || m, label: A, name: 'reply', onChange: J }),
                    s.a.createElement(k.a, { checked: void 0 === d || d, label: R, name: 'poll', onChange: J }),
                    s.a.createElement(k.a, { checked: void 0 === f || f, label: P, name: 'quote', onChange: J }),
                    s.a.createElement(k.a, { checked: void 0 === h || h, label: F, name: 'thread', onChange: J }),
                    s.a.createElement(
                      w.a,
                      { style: H.radioGroup },
                      s.a.createElement(T.a, { label: x, name: 'period', onChange: J, options: q, value: V }),
                    ),
                  ),
                )
              : s.a.createElement(g.b, { history: D, location: j, match: N })
          },
        })
      }
      var H = O.a.create(function (e) {
        return { radioGroup: { padding: e.spaces.space16 } }
      })
      t.default = m(D)
    },
    CiSv: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        c = n.n(i),
        o = n('7FtF'),
        s = n('G6rE'),
        l = n('rxPX'),
        u = Object(l.a)()
          .propsFromState(function () {
            return { loggedInUser: s.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { loggedInUserScreenName: t ? t.screen_name : void 0 }
          }),
        d = n('FIs5'),
        f = n('RKmr'),
        m = c.a.gaac7109,
        p = c.a.ga055179,
        b = c.a.ea1715cf,
        h = [
          {
            height: 200,
            uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/parrot-400x200.v1.png',
            width: 400,
          },
          {
            height: 400,
            uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/parrot-800x400.v1.png',
            width: 800,
          },
          {
            height: 600,
            uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/parrot-1200x600.v1.png',
            width: 1200,
          },
        ]
      var E = u(function (e) {
        var t = e.loggedInUserScreenName,
          n = t ? '@'.concat(t) : ''
        return r.a.createElement(
          o.a,
          { screenType: 'primaryDetail', title: m, withMarginBottom: !1 },
          r.a.createElement(f.a, { description: n }),
          r.a.createElement(d.a, { header: p, imageVariants: h, message: b }),
        )
      })
      t.default = E
    },
    DFUC: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return we
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('LW0h'), n('7x/C'), n('z84I'), n('ERkP')),
        c = n.n(i),
        o = n('v6aA'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('yoO3'),
        d = n('7JQg'),
        f = n('7FtF'),
        m = 'privacyAndSafetyScreen',
        p = n('MWbm'),
        b = n('RKmr'),
        h = n('6vad'),
        E = n('0yYu'),
        g = n('S+H3'),
        v = n('TW8A'),
        y = n('yiKp'),
        S = n.n(y),
        _ = n('Lsrn'),
        w = n('k/Ka'),
        C = function () {
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M19.98 1.775H4.02c-1.24 0-2.25 1.01-2.25 2.25v15.95c0 1.24 1.01 2.25 2.25 2.25h15.96c1.24 0 2.25-1.01 2.25-2.25V4.025c0-1.24-1.01-2.25-2.25-2.25zm.75 18.2c0 .42-.34.75-.75.75H4.02c-.41 0-.75-.33-.75-.75v-9.48h17.46v9.48zm0-10.23H3.27v-5.72c0-.42.34-.75.75-.75h15.96c.41 0 .75.33.75.75v5.72z',
              }),
              c.a.createElement('path', {
                d: 'M8.96 6.515v.09c0 .95-.78 1.72-1.73 1.72h-.08c-.95 0-1.73-.77-1.73-1.72v-.09c0-.95.78-1.73 1.73-1.73h.08c.95 0 1.73.78 1.73 1.73zm9.54.04c0 .42-.34.75-.75.75h-6.39c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h6.39c.41 0 .75.34.75.75zm-9.54 7.17v.09c0 .95-.78 1.73-1.73 1.73h-.08c-.95 0-1.73-.78-1.73-1.73v-.09c0-.95.78-1.72 1.73-1.72h.08c.95 0 1.73.77 1.73 1.72zm9.54.05c0 .41-.34.75-.75.75h-6.39c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h6.39c.41 0 .75.33.75.75zm0 3.6c0 .42-.34.75-.75.75h-6.39c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75h6.39c.41 0 .75.34.75.75z',
              }),
            ),
          )
        }
      C.metadata = { width: 24, height: 24 }
      var k = C,
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M21.6 3.139c-6.01-3.25-13.2-3.25-19.21 0-.24.13-.39.39-.39.66v8.58c0 8.59 9.73 10.88 9.83 10.9.05.02.11.02.17.02.05 0 .11 0 .16-.02.1-.02 9.84-2.31 9.84-10.9v-8.58c0-.27-.16-.53-.4-.66zm-1.1 9.24c0 6.9-7.27 9.08-8.5 9.4-1.24-.32-8.5-2.5-8.5-9.4v-8.13c5.35-2.73 11.64-2.73 17 0v8.13z',
              }),
              c.a.createElement('path', {
                d: 'M14.12 7.639H9.87c-1 0-1.9.4-2.56 1.06-.65.66-1.05 1.56-1.05 2.56 0 1.99 1.61 3.61 3.61 3.61h4.25c1 0 1.9-.41 2.55-1.06.66-.65 1.06-1.55 1.06-2.55 0-2-1.61-3.62-3.61-3.62zm-4.24 5.82c-1.22 0-2.2-.99-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.21-.98 2.2-2.2 2.2z',
              }),
            ),
          )
        }
      T.metadata = { width: 24, height: 24 }
      var O = T,
        L = n('qz6Z'),
        I = n('SOvA'),
        A = n('qo8F'),
        P = function () {
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z',
              }),
              c.a.createElement('path', {
                d: 'M11 10.57c-.572 0-1.21-.064-1.62-.53-.342-.392-.453-.998-.34-1.85.162-1.193.894-1.904 1.96-1.904 1.066 0 1.8.71 1.958 1.902.115.853.003 1.46-.34 1.85-.407.468-1.046.53-1.618.53zM13.59 15H8.41c-.292 0-.552-.124-.73-.348-.186-.236-.254-.56-.18-.87.37-1.563 1.808-2.474 3.5-2.474s3.13.91 3.5 2.474c.074.31.006.634-.18.87-.18.224-.438.348-.73.348z',
              }),
            ),
          )
        }
      P.metadata = { width: 24, height: 24 }
      var F = P,
        R = n('4BrD'),
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M22.52 12.78c-.17-.16-.41-.23-.65-.2-1.01.18-1.98-.29-2.5-1.17-.46-.8-.56-1.91-.2-2.52.19-.33.17-.74-.08-1.05-.2-.26-.52-.38-.84-.35-.06.01-.12.03-.17.04-1.46.45-3.02-.16-3.78-1.47-.63-1.08-.57-2.45.14-3.47.15-.21.18-.48.08-.72-.09-.24-.3-.4-.55-.45-3-.54-6.13.22-8.58 2.11-3.89 3-5.23 8.42-3.19 12.9 1.29 2.82 3.62 4.88 6.56 5.81 1.47.47 2.99.61 4.49.44 1.47-.16 2.92-.63 4.22-1.39 2.91-1.68 4.83-4.55 5.27-7.87.04-.23-.05-.47-.22-.64zM16.71 20c-2.26 1.31-4.99 1.61-7.49.82-2.53-.8-4.54-2.59-5.65-5.01-1.75-3.85-.6-8.51 2.74-11.1 1.39-1.06 3.01-1.72 4.7-1.91.55-.06 1.09-.07 1.66-.03-.5 1.31-.4 2.8.33 4.05.94 1.61 2.7 2.49 4.5 2.34-.16.96.02 2.08.58 3.02.65 1.11 1.77 1.81 3.01 1.92-.58 2.48-2.14 4.6-4.38 5.9z',
              }),
              c.a.createElement('path', {
                d: 'M13.19 12.67c-.67.18-1.36-.2-1.54-.87-.19-.67.21-1.36.88-1.54.66-.19 1.35.21 1.53.87.19.66-.21 1.35-.87 1.54zM9.83 6.48c-.53.15-1.07-.16-1.22-.69-.16-.53.16-1.09.69-1.23.53-.15 1.09.16 1.23.69.15.53-.16 1.09-.7 1.23zm-2.59 3.98c-.53.14-1.09-.17-1.23-.69-.15-.54.16-1.09.69-1.24.54-.14 1.09.17 1.23.7.16.54-.15 1.09-.69 1.23zm-.06 5.48c-.72.2-1.49-.23-1.69-.96-.21-.74.23-1.49.96-1.69.73-.21 1.48.22 1.69.96.2.73-.23 1.49-.96 1.69zm5 2.66c-.67.18-1.36-.21-1.54-.87-.19-.66.2-1.36.88-1.54.66-.19 1.35.21 1.53.87.19.66-.21 1.35-.87 1.54zm5.6-1.5c-.54.16-1.09-.15-1.24-.69-.15-.53.16-1.08.7-1.23.53-.15 1.08.17 1.23.7.15.53-.16 1.08-.69 1.22z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var x = M,
        U = function () {
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M14.875 22c-.023 0-.046 0-.07-.003-.32-.03-.586-.26-.66-.574l-3.854-16.3-3.1 7.175c-.12.274-.39.452-.69.452H2.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3.257L9.81 2.452c.13-.297.437-.473.755-.45.322.03.59.26.664.575l3.86 16.33 2.473-5.595c.12-.27.39-.446.686-.446h3c.413 0 .75.336.75.75s-.337.75-.75.75h-2.513l-3.177 7.188c-.12.272-.39.446-.685.446z',
              }),
            ),
          )
        }
      U.metadata = { width: 24, height: 24 }
      var D = U,
        H = n('aPcQ'),
        j = n('KrGU'),
        N = n('OySi'),
        z = l.a.cad53943,
        B = l.a.df5fa1d0,
        K = l.a.a244ed50,
        V = l.a.e908903a,
        G = l.a.h7a0dfbe,
        X = l.a.b38d81ae,
        Q = l.a.f8d4746b,
        W = l.a.f2bd9c47,
        q = l.a.b2810ee7,
        Y = l.a.f01fd982,
        J = l.a.dcc5aa06,
        Z = l.a.cbd449af,
        $ = l.a.ab125232,
        ee = l.a.d4986f85,
        te = l.a.cc950d94,
        ne = l.a.ded416bf,
        ae = l.a.fe37f854,
        re = l.a.fd4d9068,
        ie = l.a.ab987f3b,
        ce = l.a.d3d319d5,
        oe = l.a.d035a8d0,
        se = l.a.f9ff2201,
        le = l.a.d0b74a5a,
        ue = l.a.gd4302ec,
        de = l.a.bcae496c,
        fe = l.a.acc60551,
        me = l.a.h14ba864,
        pe = l.a.d7fcc4fa,
        be = l.a.jabb9c9a,
        he = l.a.a686c489,
        Ee = l.a.cdcef7b6,
        ge = l.a.a607862a,
        ve = l.a.g5925628,
        ye = l.a.dd6012f7,
        Se = { page: 'settings', section: 'privacy_and_safety' },
        _e = [
          { label: ye, link: 'https://privacy.twitter.com/' },
          { label: ge, link: 'https://twitter.com/en/privacy' },
          { label: ve, link: 'https://help.twitter.com/forms/privacy' },
        ]
      function we(e) {
        var t,
          n,
          a,
          i = e.location,
          s = c.a.useContext(o.a).featureSwitches,
          l = s.isTrue('rito_safety_mode_settings_enabled'),
          y = s.isTrue('voice_rooms_sharing_listening_data_with_followers_setting_enabled'),
          S = s.isTrue('responsive_web_cookie_compliance_banner_enabled')
        return c.a.createElement(
          d.c,
          { namespace: Se },
          c.a.createElement(
            u.a,
            null,
            c.a.createElement(
              f.a,
              { location: i, screenType: 'primaryDetail', title: z },
              c.a.createElement(
                p.a,
                { testID: m },
                c.a.createElement(b.a, { description: B }),
                c.a.createElement(h.b, { text: K }),
                (function (e) {
                  var t = e.includeSafetyMode,
                    n = void 0 !== t && t,
                    a = e.includeSpacesSection
                  return [
                    { label: V, description: G, link: '/settings/audience_and_tagging', Icon: g.a },
                    { label: X, description: Q, link: '/settings/your_tweets', Icon: v.a },
                    { label: W, description: q, link: '/settings/content_you_see', Icon: k },
                    n ? { label: Y, description: J, link: '/settings/safety_mode', Icon: O } : void 0,
                    { label: Z, description: $, link: '/settings/mute_and_block', Icon: L.a },
                    { label: ee, description: te, link: '/settings/direct_messages', Icon: I.a },
                    a ? { label: ne, description: ae, link: '/settings/spaces', Icon: A.a } : void 0,
                    { label: re, description: ie, link: '/settings/contacts', Icon: F },
                  ].filter(Boolean)
                })({ includeSafetyMode: l, includeSpacesSection: y }).map(function (e) {
                  return c.a.createElement(N.b, r()({}, e, { key: e.label }))
                }),
                c.a.createElement(E.a, null),
                c.a.createElement(h.b, { text: ce }),
                ((t = { includeCookiePreferences: S }),
                (n = t.includeCookiePreferences),
                (a = void 0 !== n && n),
                [
                  { label: oe, description: se, link: '/settings/ads_preferences', Icon: R.a },
                  a ? { label: le, description: ue, link: '/settings/cookie_preferences', Icon: x } : void 0,
                  { label: de, description: fe, link: '/settings/off_twitter_activity', Icon: D },
                  { label: me, description: pe, link: '/settings/data_sharing_with_business_partners', Icon: H.a },
                  { label: be, description: he, link: '/settings/location_information', Icon: j.a },
                ].filter(Boolean)).map(function (e) {
                  return c.a.createElement(N.b, r()({}, e, { key: e.label }))
                }),
                c.a.createElement(E.a, null),
                c.a.createElement(h.b, { text: Ee }),
                _e.map(function (e) {
                  return c.a.createElement(N.a, r()({}, e, { key: e.label }))
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
          return D
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('z84I'), n('ERkP')),
        c = n.n(i),
        o = n('3XMw'),
        s = n.n(o),
        l = n('yoO3'),
        u = n('7JQg'),
        d = n('RKmr'),
        f = n('7FtF'),
        m = n('OySi'),
        p = 'accessibilityScreen',
        b = n('MWbm'),
        h = n('yiKp'),
        E = n.n(h),
        g = n('Lsrn'),
        v = n('k/Ka'),
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(v.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M3.194 12.223l-.03-.03.02-.01c.01.01.01.02.01.04zm4.82-7.21c-.12.05-.22.13-.3.23l-.06-.06c.12-.07.24-.12.36-.17z',
              }),
              c.a.createElement('path', {
                d: 'M22.194 12.763c0 .01-.01.03-.03.06-.16.36-1.06 2.26-2.88 3.99l-.46-.46-.59-.63c1.67-1.56 2.47-3.29 2.57-3.52 0-.01.01-.02.01-.02.01-.02.02-.05.03-.07.04-.08.04-.17 0-.25-.14-.31-2.66-6.12-8.85-6.12-1.13 0-2.2.19-3.2.58l-.03-.03-1.05-1.05c.08-.1.18-.18.3-.23 1.25-.51 2.58-.77 3.98-.77 7.2 0 10.08 6.69 10.2 6.98.24.44.25 1.03 0 1.54zm-18.98-.52l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06z',
              }),
              c.a.createElement('path', {
                d: 'M19.284 16.813c-.01 0-.01 0-.02.01l-.44-.47.46.46zm2.83 4.24l-3.59-3.59-2.95-2.95-6.09-6.09-1.66-1.66-4.88-4.88c-.3-.3-.77-.29-1.06 0-.22.21-.28.53-.17.8.01.03.02.06.04.08.03.05.07.1.1.14.01.01.02.03.03.04l3.58 3.58c-2.51 1.99-3.6 4.54-3.63 4.63-.27.51-.28 1.1-.04 1.61 0 .01.01.03.03.06.32.73 3.25 6.92 10.17 6.92 1.91 0 3.68-.47 5.27-1.41h.01l3.78 3.78c.29.3.77.3 1.06 0 .15-.14.22-.33.22-.53 0-.19-.07-.38-.22-.53zm-18.9-8.81l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06l5.33 5.33c-3.5-1.47-5.11-4.83-5.33-5.33zm8.78 6c-.3 0-.6-.01-.88-.05-1.33-1.44-4.01-4.19-4.12-4.3l-3.21-3.2c.21-.35.49-.76.84-1.19l8.64 8.64c-.41.07-.84.1-1.27.1zm2.98-.51l-9.35-9.35c.28-.27.59-.54.92-.78l9.61 9.62c-.38.21-.78.38-1.18.51zm1.4-5.73c0 .56-.11 1.1-.31 1.59-.12.33-.29.64-.49.92l-6.09-6.09c.28-.2.59-.37.92-.49.5-.2 1.03-.31 1.59-.31.39 0 .77.05 1.13.16-.47.4-.77.99-.77 1.66 0 .18.02.35.07.51.18.8.81 1.43 1.62 1.62.16.04.33.06.5.06.67 0 1.27-.3 1.67-.78.11.37.16.75.16 1.15z',
              }),
              c.a.createElement('path', { d: 'M3.214 12.243l-.02-.02-.03-.03.02-.01c0 .01.01.03.03.06z' }),
            ),
          )
        }
      y.metadata = { width: 24, height: 24 }
      var S = y,
        _ = n('tuke'),
        w = n('Zg3A'),
        C = n('xrkw'),
        k = s.a.f2b23061,
        T = s.a.jf907f5b,
        O = s.a.e3719c15,
        L = s.a.f371a361,
        I = s.a.c4881c66,
        A = s.a.a5ce82a4,
        P = s.a.d495680d,
        F = s.a.f9c98140,
        R = s.a.eafe3287,
        M = s.a.d76fe4fc,
        x = [
          { label: O, description: L, link: '/settings/accessibility', Icon: S },
          { label: I, description: A, link: '/settings/display', Icon: _.a },
          { label: P, description: F, link: '/settings/languages', Icon: w.a },
          { label: R, description: M, link: '/settings/data', Icon: C.a },
        ],
        U = { page: 'settings', section: 'accessibility_display_and_languages' }
      function D(e) {
        var t = e.location
        return c.a.createElement(
          u.c,
          { namespace: U },
          c.a.createElement(
            l.a,
            null,
            c.a.createElement(
              f.a,
              { location: t, screenType: 'primaryDetail', title: k },
              c.a.createElement(
                b.a,
                { testID: p },
                c.a.createElement(d.a, { description: T }),
                x.map(function (e) {
                  return c.a.createElement(m.b, r()({}, e, { key: e.label }))
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
          return y
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        c = n.n(i),
        o = n('yoO3'),
        s = n('7JQg'),
        l = n('7FtF'),
        u = n('MWbm'),
        d = n('RKmr'),
        f = n('csss'),
        m = c.a.ae72d4c4,
        p = c.a.g2841de4,
        b = c.a.jc02ae67,
        h = c.a.dd823129,
        E = c.a.b523ecc5,
        g = c.a.hc36dbba,
        v = { page: 'settings', section: 'apps_and_sessions' }
      function y(e) {
        var t = e.location
        return r.a.createElement(
          s.c,
          { namespace: v },
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              l.a,
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
    EAH3: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return S
        })
      n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('jHSc'),
        c = n('3XMw'),
        o = n.n(c),
        s = n('Irs7'),
        l = n('MWbm'),
        u = n('cHvH'),
        d = n('Wd7d'),
        f = n('t62R'),
        m = n('rHpw'),
        p = o.a.g0cba83f,
        b = o.a.b92fa3be,
        h = o.a.d45866f3,
        E = o.a.e83ecbf6,
        g = o.a.ha597018,
        v = o.a.bcb2afc3,
        y = o.a.bff84f29
      function S(e) {
        var t = e.history,
          n = Object(s.b)()
        return (
          r.a.useEffect(
            function () {
              n.scribe({ page: 'settings', section: 'safety_mode', component: 'education_sheet', action: 'impression' })
            },
            [n],
          ),
          r.a.createElement(u.a, null, function (e) {
            var n = e.screenWidth
            return r.a.createElement(
              i.b,
              { backButtonType: 'back', history: t },
              r.a.createElement(
                l.a,
                { style: d.a.isNarrowScreenWidth(n) ? _.narrowScreen : _.wideScreen },
                r.a.createElement(
                  l.a,
                  { style: [_.item, _.title] },
                  r.a.createElement(f.b, { size: 'title4', weight: 'heavy' }, p),
                ),
                r.a.createElement(
                  l.a,
                  { style: _.item },
                  r.a.createElement(f.b, { style: _.heading, weight: 'bold' }, b),
                  r.a.createElement(f.b, { size: 'body' }, h),
                ),
                r.a.createElement(
                  l.a,
                  { style: _.item },
                  r.a.createElement(f.b, { style: _.heading, weight: 'bold' }, E),
                  r.a.createElement(f.b, { size: 'body' }, g),
                ),
                r.a.createElement(
                  l.a,
                  { style: _.item },
                  r.a.createElement(f.b, { style: _.heading, weight: 'bold' }, v),
                  r.a.createElement(f.b, { size: 'body' }, y),
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
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        m = n('KEM+'),
        p = n.n(m),
        b = n('ERkP'),
        h = n.n(b),
        E = n('jtO7'),
        g = n('eb3s'),
        v = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(s()(a), '_handleClick', function (e) {
                a.setState({ showConfirmation: !0 })
              }),
              p()(s()(a), '_handleCancel', function () {
                a.setState({ showConfirmation: !1 })
              }),
              p()(s()(a), '_handleConfirm', function () {
                a.setState({ showConfirmation: !1 }), a.props.onConfirmationSheetConfirm()
              }),
              (a.state = { showConfirmation: !1 }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    r = e.confirmationSheetConfirmButtonType,
                    i = e.confirmationSheetHeadline,
                    c = e.confirmationSheetText,
                    o = e.label
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(E.a, { align: t, color: n, label: o, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? h.a.createElement(g.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: r,
                          headline: i,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: c,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      p()(v, 'defaultProps', { color: 'red500', align: 'center' })
    },
    FDFL: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return E
      }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'a', function () {
          return v
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('ho0z'), n('tQbP'), n('hBpG'), n('7x/C'), n('JtPf'), n('oEOe')),
        s = n('kGix'),
        l = n('ikiw'),
        u = n('Ssj5'),
        d = n('RqPI'),
        f = 'availableLanguages',
        m = 'rweb/'.concat(f),
        p = o.a(m, 'FETCH_AVAILABLE_LANGUAGES'),
        b = { fetchStatus: s.a.NONE, languages: [] }
      function h() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.meta && t.meta.lang ? t.meta.lang : 'en',
          a = 'undefined' != typeof Intl && Intl.Collator && new Intl.Collator(n),
          r = a
            ? function (e, t) {
                return a.compare(e.name, t.name)
              }
            : void 0
        switch (t.type) {
          case p.REQUEST:
            return c()(c()({}, e), {}, { fetchStatus: s.a.LOADING })
          case p.FAILURE:
            return c()(c()({}, e), {}, { error: t.payload, fetchStatus: s.a.FAILED })
          case p.SUCCESS:
            return c()(c()({}, e), {}, { languages: t.payload.sort(r), fetchStatus: s.a.LOADED })
          default:
            return e
        }
      }
      u.a.register(r()({}, f, h))
      var E = function (e) {
          return e[f].languages
        },
        g = function (e, t) {
          var n = Object(l.c)(t).toLowerCase(),
            a = e[f].languages.find(function (e) {
              return e.code === n
            })
          return a ? a.name : null
        },
        v = function () {
          return function (e, t) {
            return t()[f].fetchStatus === s.a.LOADED ? Promise.resolve() : e(y())
          }
        },
        y = function (e) {
          return function (t, n, a) {
            var r = a.api
            return o.b(t, { params: e, meta: { lang: Object(d.p)(n()) }, request: r.FeatureSwitch.fetchLanguages })({
              actionTypes: p,
              context: 'FETCH_AVAILABLE_LANGUAGES',
            })
          }
        }
    },
    FR63: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('rHpw'),
        c = n('MWbm')
      var o = i.a.create(function (e) {
        return {
          root: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
      t.a = function (e) {
        var t = e.children
        return r.a.createElement(c.a, { style: o.root }, t)
      }
    },
    KPFR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'T1LabsScreen', function () {
          return L
        })
      n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        c = n('gUb7'),
        o = n('rxPX'),
        s = Object(o.a)()
          .propsFromState(function () {
            return { userClaimsFetchStatus: c.c }
          })
          .withAnalytics({ page: 'settings', section: 't1_labs' }),
        l = n('v//M'),
        u = n('3XMw'),
        d = n.n(u),
        f = n('yoO3'),
        m = n('7FtF'),
        p = n('zCf4'),
        b = n('RKmr'),
        h = n('0yYu'),
        E = n('3Ohe'),
        g = d.a.f6e88161,
        v = d.a.i9028824,
        y = d.a.e4972a1a,
        S = d.a.e4b3f520,
        _ = d.a.db8346ee,
        w = d.a.a99d8e60,
        C = d.a.fb00a8ee,
        k = d.a.h7693c0d,
        T = d.a.cac1046d,
        O = d.a.j813bbee
      function L(e) {
        var t = e.userClaimsFetchStatus,
          n = Object(p.g)(),
          a = r.a.useContext(i.a),
          c = a.featureSwitches,
          o = a.userClaims,
          s = o.isTrueAndEnabled('subscriptions_feature_labs_1001'),
          u = o.isTrueAndEnabled('subscriptions_long_video_upload'),
          d = o.isTrueAndEnabled('subscriptions_feature_1011'),
          L = c.isTrue('dm_conversation_labels_pinned_enabled'),
          I = c.isTrue('subscriptions_long_video_rweb_new_copy_enabled'),
          A = [
            { label: S, subtext: _, shouldRender: s && !L },
            { label: w, subtext: I ? k : C, shouldRender: u },
            { label: T, subtext: O, shouldRender: d },
          ]
        return r.a.createElement(l.a, {
          accessibilityLabel: v,
          fetchStatus: t,
          render: function () {
            return r.a.createElement(
              f.a,
              null,
              r.a.createElement(
                m.a,
                { location: n, title: g },
                r.a.createElement(b.a, { description: y }),
                r.a.createElement(h.a, null),
                A.map(function (e) {
                  var t = e.label,
                    n = e.shouldRender,
                    a = e.subtext
                  return n ? r.a.createElement(E.a, { key: t, label: t, subtext: a }) : null
                }),
              ),
            )
          },
        })
      }
      t.default = s(L)
    },
    LtDK: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SpacesSettingsScreen', function () {
          return v
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ERkP')),
        c = n.n(i),
        o = n('tM6R'),
        s = n('P1r1'),
        l = n('rxPX'),
        u = Object(l.a)()
          .propsFromState(function () {
            return { sharingAudiospacesListeningDataWithFollowersEnabled: s.z }
          })
          .propsFromActions(function () {
            return { updateSharingAudiospacesListeningDataWithFollowersSetting: s.N }
          })
          .withAnalytics({ page: 'settings' }),
        d = n('3XMw'),
        f = n.n(d),
        m = n('yoO3'),
        p = n('7FtF'),
        b = n('k89r'),
        h = n('RKmr'),
        E = n('e0ey'),
        g = { page: 'settings' }
      function v(e) {
        var t = e.location,
          n = e.sharingAudiospacesListeningDataWithFollowersEnabled,
          a = e.updateSharingAudiospacesListeningDataWithFollowersSetting,
          i = Object(b.a)()
        return c.a.createElement(
          m.a,
          null,
          c.a.createElement(
            p.a,
            { location: t, screenType: 'secondaryDetail', title: y.screen.title },
            c.a.createElement(h.a, { description: y.screen.description }),
            c.a.createElement(E.a, {
              checked: n,
              helpText: y.audiospaceListeningTransparency.help,
              label: y.audiospaceListeningTransparency.label,
              learnMoreLink: o.a.help,
              name: 'ext_sharing_audiospaces_listening_data_with_followers',
              onChange: function (e, t) {
                a(t),
                  i.scribe(
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
      var y = {
          screen: { title: f.a.ded416bf, description: f.a.fe37f854 },
          audiospaceListeningTransparency: { label: f.a.j3d2cfc4, help: f.a.d9588ae6 },
        },
        S = u(v)
      t.default = S
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('VrFO'),
        c = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        m = n('2VqO'),
        p = n.n(m),
        b = n('KEM+'),
        h = n.n(b),
        E = (n('2G9S'), n('i4UL'), n('+/5o')),
        g = n('ERkP'),
        v = n.n(g),
        y = n('HPNB'),
        S = n('VAZu'),
        _ = n('wiP2'),
        w = n('Es6L'),
        C = n('yiKp'),
        k = n.n(C),
        T = n('rHpw'),
        O = T.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: k()(k()({}, T.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        L = n('MWbm'),
        I = n('yw4N'),
        A = n('TnY3'),
        P = n('cHvH'),
        F = n('3xLC'),
        R = [
          'appBarStyle',
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        M = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      L.a,
                      { style: O.fill },
                      v.a.createElement(
                        I.a,
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
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(P.a, null, function (t) {
                    var n = t.windowWidth
                    return y.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = (e.appBarStyle, e.children),
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, R))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(w.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(_.a.Configure, n),
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
                    a = n.SideNavButton,
                    r = n.TabBar,
                    i = n.TeamsSwitcher,
                    c = n.appBarStyle,
                    o = n.backLocation,
                    s = n.documentTitle,
                    l = n.headerless,
                    u = n.history,
                    d = n.leftControl,
                    f = n.middleControl,
                    m = n.onBackClick,
                    p = n.rightControl,
                    b = n.screenType,
                    h = n.searchBoxOptions,
                    g = n.secondaryBar,
                    y = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    k = n.title,
                    T = n.titleIconCell,
                    I = n.titleIconCellSize,
                    A = n.withDetailOpen,
                    P = n.withSearchBox,
                    F = n.withTweetButton,
                    R = 'root' === b,
                    M = 'secondaryRoot' === b,
                    x = 'primaryDetail' === b,
                    U = (x && w) || (R && y),
                    D = R || (x && t),
                    H = R ? E.c : x ? E.a : void 0,
                    j = v.a.createElement(
                      L.a,
                      { style: O.appBarContainer },
                      v.a.createElement(S.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: D,
                        history: u,
                        leftControl: d,
                        middleControl: f,
                        onBackClick: m,
                        rightControl: p,
                        secondaryBar: g,
                        style: c,
                        subtitle: U ? C : void 0,
                        title: k,
                        titleDomId: H,
                        titleIconCell: T,
                        titleIconCellSize: I,
                      }),
                    ),
                    N =
                      R || (M && A)
                        ? null
                        : v.a.createElement(_.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: s,
                            headerless: l,
                            middleControl: f,
                            onBackClick: m,
                            rightControl: p,
                            searchBoxOptions: h,
                            subtitle: C,
                            title: k,
                            withSearchBox: P,
                            withTweetButton: F,
                          })
                  return v.a.createElement(v.a.Fragment, null, N, j)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(M, 'contextType', F.a),
        h()(M, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(M)
    },
    OOKO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('rHpw'),
        c = n('MWbm')
      function o(e) {
        var t = e.spacing
        return r.a.createElement(c.a, {
          accessibilityRole: 'separator',
          style: [s.divider, { marginVertical: null != t ? i.a.theme.spaces[t] : void 0 }],
        })
      }
      var s = i.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    OsOl: function (e, t, n) {
      'use strict'
      n('z84I'), n('Blm6'), n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('wsOx'),
        c = n('rxPX'),
        o = n('0KEI'),
        s = Object(c.a)()
          .propsFromState(function () {
            return { fetchSettingsFetchStatus: i.b, updateSettingsFetchStatus: i.d, safetyModeSettings: i.c }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchSettingsFetchStatus,
              n = e.safetyModeSettings,
              a = e.updateSettingsFetchStatus
            return {
              enabled: n.enabled,
              expiration: n.expiration,
              fetchSettingsFetchStatus: t,
              updateSettingsFetchStatus: a,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(o.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSafetyModeSettings: i.a,
              updateSafetyModeSettings: i.e,
            }
          })
          .withAnalytics(),
        l = n('v//M'),
        u = n('3XMw'),
        d = n.n(u),
        f = n('tuLS'),
        m = n('fs1G'),
        p = n('MWbm'),
        b = n('mjJ+'),
        h = n('t62R'),
        E = n('CK8+'),
        g = n('rHpw'),
        v = d.a.c6cb90eb,
        y = d.a.a37e9b09,
        S = d.a.ccafffde,
        _ = d.a.j2e184d8,
        w = d.a.fc638aa2,
        C = d.a.d94b2246,
        k = d.a.bfea13ab,
        T = d.a.fc209bb7,
        O = d.a.ee95bb8d,
        L = [
          { label: S, value: 'OneDay' },
          { label: _, value: 'ThreeDays' },
          { label: w, value: 'SevenDays' },
        ]
      var I = s(function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.enabled,
            a = e.expiration,
            i = e.fetchSafetyModeSettings,
            c = e.fetchSettingsFetchStatus,
            o = e.updateSafetyModeSettings,
            s = e.withBorder,
            u = r.a.useCallback(
              function () {
                i().catch(function (e) {
                  t({ showToast: !0 })(e)
                })
              },
              [i, t],
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
                    t({ showToast: !0, defaultToast: { text: k } })(e)
                  })
            },
            S = function () {
              return function (e) {
                var n = L.map(function (e) {
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
                                t({ showToast: !0, defaultToast: { text: k } })(e)
                              }))
                      })(e)
                    },
                  }
                })
                return r.a.createElement(b.a, { items: n, onCloseRequested: e })
              }
            }
          return r.a.createElement(l.a, {
            fetchStatus: c,
            onRequestRetry: u,
            render: function () {
              var e = new Date(parseInt(a, 10))
              return r.a.createElement(
                p.a,
                { style: s && A.border },
                r.a.createElement(
                  p.a,
                  { style: A.safetyModeToggleContainer },
                  r.a.createElement(h.b, null, v),
                  n
                    ? r.a.createElement(E.a, { onValueChange: g, value: n })
                    : r.a.createElement(
                        f.a,
                        { accessibilityLabel: v, renderMenu: S() },
                        r.a.createElement(E.a, { onValueChange: m.a, value: n }),
                      ),
                ),
                r.a.createElement(
                  p.a,
                  { style: A.safetyModeDescriptionContainer },
                  n && a
                    ? r.a.createElement(
                        h.b,
                        { color: 'gray700', size: 'subtext2', style: A.safetyModeExpiration },
                        (function (e, t) {
                          return Math.floor(Math.abs((t || Date.now()) - e) / 36e5) <= 1
                        })(e)
                          ? C
                          : O({ date: T(e) }),
                      )
                    : null,
                  r.a.createElement(h.b, { color: 'gray700', size: 'subtext2', style: A.settingDescription }, y),
                ),
              )
            },
          })
        }),
        A =
          ((t.a = I),
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
    OySi: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return b
      }),
        n.d(t, 'a', function () {
          return h
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        c = n.n(i),
        o = (n('hBvt'), n('ERkP')),
        s = n.n(o),
        l = n('rHpw'),
        u = n('csss'),
        d = ['Icon'],
        f = ['link'],
        m = function (e) {
          return s.a.createElement(e.Icon, { style: p.thumbnail })
        },
        p = l.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function b(e) {
        var t = e.Icon,
          n = c()(e, d)
        return s.a.createElement(
          u.a,
          r()({}, n, { thumbnail: s.a.createElement(m, { Icon: t }), thumbnailSize: 'large' }),
        )
      }
      function h(e) {
        e.link
        var t = c()(e, f)
        return s.a.createElement(u.a, r()({}, t, { link: { external: !0, pathname: e.link } }))
      }
    },
    Ryu4: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AudienceAndTagging', function () {
          return U
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        l = n('v6aA'),
        u = n('P1r1'),
        d = n('li/m'),
        f = n('G6rE'),
        m = n('rxPX'),
        p = n('0KEI'),
        b = Object(m.a)()
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
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'AUDIENCE_AND_TAGGING_SCREEN',
              ),
              patchUser: f.e.patchUser,
              updateSettings: u.M,
            }
          }),
        h = n('3XMw'),
        E = n.n(h),
        g = n('yoO3'),
        v = n('7JQg'),
        y = n('7FtF'),
        S = n('k89r'),
        _ = n('RKmr'),
        w = n('e0ey'),
        C = n('csss'),
        k = n('eb3s'),
        T = E.a.e908903a,
        O = E.a.h7a0dfbe,
        L = E.a.f5e59e90,
        I = E.a.e860ff84,
        A = { headline: E.a.j8bf07ab, text: E.a.ca8034b3, confirmButtonLabel: E.a.c5d4192a },
        P = { headline: E.a.gea6cc19, text: E.a.j7fc0afc, confirmButtonLabel: E.a.f527b322 },
        F = E.a.f56d108e,
        R = { all: E.a.d165c992, following: E.a.ea339390, none: E.a.e3a761ee },
        M = { page: 'settings', section: 'audience_and_tagging' }
      function x(e, t, n, a) {
        var i = s.a.useState(!1),
          o = r()(i, 2),
          u = o[0],
          d = o[1],
          f = (function (e, t, n, a) {
            var r = s.a.useContext(l.a).loggedInUserId,
              i = Object(S.a)()
            return {
              setEnabled: function (t) {
                a({ protected: t })
                  .then(function () {
                    i.scribe(c()(c()({}, M), {}, { element: 'protected', action: t ? 'enable' : 'disable' })),
                      r && n(r, { protected: t })
                  })
                  .catch(e())
              },
            }
          })(e, 0, n, a)
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
      function U(e) {
        var t = e.allowMediaTagging,
          n = e.createLocalApiErrorHandler,
          a = e.hasCommunityMemberships,
          r = e.location,
          i = e.patchUser,
          c = e.protectedEnabled,
          o = x(n, 0, i, e.updateSettings),
          l = R[t],
          u = a ? P : A
        return s.a.createElement(
          v.c,
          { namespace: M },
          s.a.createElement(
            g.a,
            null,
            s.a.createElement(
              y.a,
              { location: r, screenType: 'secondaryDetail', title: T },
              s.a.createElement(_.a, { description: O }),
              s.a.createElement(w.a, {
                checked: c,
                helpText: I,
                label: L,
                learnMoreLink: 'https://help.twitter.com/safety-and-security/public-and-protected-tweets',
                name: 'protected',
                onChange: o._handleChanged,
              }),
              s.a.createElement(C.a, { description: l, label: F, link: '/settings/tagging' }),
            ),
            o.showConfirmation
              ? s.a.createElement(k.a, {
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
      var D = b(U)
      t.default = D
    },
    'S+H3': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    'S/HT': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return b
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('849X'), n('TJCb'), n('kGix')),
        s = n('Ssj5'),
        l = 'countryNames',
        u = { fetchStatus: o.a.NONE, countries: {} },
        d = { REQUEST: ''.concat(l, '_REQUEST'), FAILURE: ''.concat(l, '_FAILURE'), SUCCESS: ''.concat(l, '_SUCCESS') },
        f = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              return c()(c()({}, e), {}, { fetchStatus: o.a.LOADING })
            case d.FAILURE:
              return c()(c()({}, e), {}, { fetchStatus: o.a.NONE })
            case d.SUCCESS:
              return c()(c()({}, e), {}, { countries: t.payload, fetchStatus: o.a.LOADED })
            default:
              return e
          }
        }
      s.a.register(r()({}, l, f))
      var m = function (e) {
          return e.countryNames.countries
        },
        p = function (e, t) {
          var n = t && t.toUpperCase()
          return e.countryNames.countries[n]
        },
        b = function e(t) {
          return function (a, r) {
            return r().countryNames.fetchStatus === o.a.LOADED
              ? Promise.resolve()
              : (a({ type: d.REQUEST }),
                (function (e) {
                  switch (e) {
                    case 'ar':
                      return n.e(253).then(n.t.bind(null, 'heBS', 3))
                    case 'bg':
                      return n.e(254).then(n.t.bind(null, '9kpF', 3))
                    case 'bn':
                      return n.e(255).then(n.t.bind(null, 'GG9y', 3))
                    case 'ca':
                      return n.e(256).then(n.t.bind(null, 'icrD', 3))
                    case 'cs':
                      return n.e(257).then(n.t.bind(null, 'rxOR', 3))
                    case 'da':
                      return n.e(258).then(n.t.bind(null, '6Nxr', 3))
                    case 'de':
                      return n.e(259).then(n.t.bind(null, 'zSOo', 3))
                    case 'el':
                      return n.e(260).then(n.t.bind(null, 'MOmn', 3))
                    case 'en-GB':
                      return n.e(262).then(n.t.bind(null, 'vzeG', 3))
                    case 'en':
                      return n.e(261).then(n.t.bind(null, 'WqZ6', 3))
                    case 'es':
                      return n.e(263).then(n.t.bind(null, 'v4/g', 3))
                    case 'eu':
                      return n.e(264).then(n.t.bind(null, 'KXIK', 3))
                    case 'fa':
                      return n.e(265).then(n.t.bind(null, 'vzCi', 3))
                    case 'fi':
                      return n.e(266).then(n.t.bind(null, 'YthM', 3))
                    case 'fil':
                      return n.e(267).then(n.t.bind(null, 'AcRS', 3))
                    case 'fr':
                      return n.e(268).then(n.t.bind(null, 'PuNY', 3))
                    case 'ga':
                      return n.e(269).then(n.t.bind(null, 'FSy8', 3))
                    case 'gl':
                      return n.e(270).then(n.t.bind(null, 'igcB', 3))
                    case 'gu':
                      return n.e(271).then(n.t.bind(null, 'DaQw', 3))
                    case 'he':
                      return n.e(272).then(n.t.bind(null, '8mgg', 3))
                    case 'hi':
                      return n.e(273).then(n.t.bind(null, 'w88S', 3))
                    case 'hr':
                      return n.e(274).then(n.t.bind(null, 'dvLs', 3))
                    case 'hu':
                      return n.e(275).then(n.t.bind(null, '9fGX', 3))
                    case 'id':
                      return n.e(276).then(n.t.bind(null, 'elf3', 3))
                    case 'it':
                      return n.e(277).then(n.t.bind(null, 'sxFK', 3))
                    case 'ja':
                      return n.e(278).then(n.t.bind(null, '1/Dg', 3))
                    case 'kn':
                      return n.e(279).then(n.t.bind(null, 'nFOI', 3))
                    case 'ko':
                      return n.e(280).then(n.t.bind(null, 'RRUG', 3))
                    case 'mr':
                      return n.e(281).then(n.t.bind(null, 'EpxJ', 3))
                    case 'ms':
                      return n.e(282).then(n.t.bind(null, 'cSS2', 3))
                    case 'nb':
                      return n.e(283).then(n.t.bind(null, 'bg3k', 3))
                    case 'nl':
                      return n.e(284).then(n.t.bind(null, 'eXnI', 3))
                    case 'pl':
                      return n.e(285).then(n.t.bind(null, 'ACpo', 3))
                    case 'pt':
                      return n.e(286).then(n.t.bind(null, 'J0At', 3))
                    case 'ro':
                      return n.e(287).then(n.t.bind(null, 'hxXa', 3))
                    case 'ru':
                      return n.e(288).then(n.t.bind(null, 'gXfs', 3))
                    case 'sk':
                      return n.e(289).then(n.t.bind(null, 'fy2h', 3))
                    case 'sr':
                      return n.e(290).then(n.t.bind(null, 'FmvU', 3))
                    case 'sv':
                      return n.e(291).then(n.t.bind(null, 'prb2', 3))
                    case 'ta':
                      return n.e(292).then(n.t.bind(null, '8KkY', 3))
                    case 'th':
                      return n.e(293).then(n.t.bind(null, 'g4c5', 3))
                    case 'tr':
                      return n.e(294).then(n.t.bind(null, 'NngR', 3))
                    case 'uk':
                      return n.e(295).then(n.t.bind(null, '62bs', 3))
                    case 'ur':
                      return n.e(296).then(n.t.bind(null, 'aKQ3', 3))
                    case 'zh-Hant':
                      return n.e(298).then(n.t.bind(null, 'Wk8C', 3))
                    case 'zh':
                      return n.e(297).then(n.t.bind(null, 'YXaK', 3))
                    default:
                      return Promise.reject(
                        new Error('Tried to import country names for unknown language key: '.concat(e)),
                      )
                  }
                })(t)
                  .then(function (e) {
                    var n = e.main[t].localeDisplayNames.territories
                    a({ type: d.SUCCESS, payload: n })
                  })
                  .catch(function () {
                    a('en' === t ? { type: d.FAILURE } : e('en'))
                  }))
          }
        }
    },
    TW8A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    TnO6: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      })
      var a = n('KEM+'),
        r = n.n(a),
        i = (n('yH/f'), n('ERkP')),
        c = n.n(i),
        o = n('EbOo'),
        s = n('EPsT'),
        l = (n('KqXw'), n('WNMA'), n('1YZw')),
        u = n('118N'),
        d = n('G6rE'),
        f = n('rxPX'),
        m = n('0KEI'),
        p = function (e, t) {
          var n
          return null === (n = t.match) || void 0 === n ? void 0 : n.params.userId
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
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'RITO_TIMELINE_ACTION_BUTTONS_CONTEXT',
              ),
              fetchOneUserIfNeeded: d.e.fetchOneIfNeeded,
              dismissRitoSuggestedAction: u.b,
              unblock: d.e.unblock,
            }
          })
          .withAnalytics({ component: 'safety_mode_timeline_action_buttons' }),
        E = n('3XMw'),
        g = n.n(E),
        v = n('u0B7'),
        y = n('0yYu'),
        S = n('jtO7'),
        _ = n('24HD'),
        w = g.a.cd702bc3,
        C = g.a.ebd2abb2,
        k = g.a.f2f4d0e7,
        T = g.a.jcba15d2,
        O = g.a.e1f2f8bd,
        L = g.a.e68b09b4,
        I = g.a.hc676c4a,
        A = g.a.badf3f34,
        P = g.a.ca95bd23,
        F = g.a.bbe47125,
        R = '/settings/safety_mode/autoblocked',
        M = '/i/safety_mode/flagged_accounts',
        x = Object.freeze({ ActionedTweets: 'actioned_tweets', PreviewFlaggedTweets: 'preview_flagged_tweets' }),
        U = Object.freeze({
          report: { component: 'user_action', action: 'report' },
          block: { action: 'block' },
          unblock: { action: 'unblock' },
        })
      function D(e) {
        var t,
          n = e.addToast,
          a = e.analytics,
          i = e.createLocalApiErrorHandler,
          o = e.dismissRitoSuggestedAction,
          l = e.history,
          u = e.timelineType,
          d = e.unblock,
          f = e.violatorScreenName,
          m = e.violatorUserId,
          p = Object.freeze(
            ((t = {}),
            r()(t, x.ActionedTweets, {
              backLocation: R,
              confirmationSheetHeadline: Object(_.e)({ screenName: f }),
              label: T,
              toastLabel: P({ screenName: f }),
            }),
            r()(t, x.PreviewFlaggedTweets, {
              backLocation: M,
              confirmationSheetHeadline: O({ screenName: f }),
              label: k,
              toastLabel: A({ screenName: f }),
            }),
            t),
          )
        return c.a.createElement(s.a, {
          color: 'primary',
          confirmationSheetConfirmButtonLabel: L,
          confirmationSheetHeadline: p[u].confirmationSheetHeadline,
          confirmationSheetText: F,
          label: p[u].label,
          onConfirmationSheetConfirm: function () {
            u === x.ActionedTweets
              ? d(m)
                  .then(function () {
                    a.scribe(U.unblock), n({ text: p[u].toastLabel }), l.goBack({ backLocation: p[u].backLocation })
                  })
                  .catch(i(v.a))
              : o(m)
                  .then(function () {
                    a.scribe(U.unblock), n({ text: p[u].toastLabel }), l.goBack({ backLocation: p[u].backLocation })
                  })
                  .catch(i(v.a))
          },
          withBottomBorder: !0,
        })
      }
      function H(e) {
        var t = e.analytics,
          n = e.violatorUserId,
          a = {
            pathname: '/i/report/user/'.concat(n),
            state: { clientReferer: window.location.pathname, scribeNamespace: t.contextualScribeNamespace },
          }
        return c.a.createElement(S.a, {
          color: 'primary',
          label: w,
          link: a,
          onPress: function () {
            t.scribe(U.report)
          },
        })
      }
      function j(e) {
        var t = e.addToast,
          n = e.analytics,
          a = e.block,
          r = e.createLocalApiErrorHandler,
          i = e.history,
          l = e.timelineType,
          u = e.unblock,
          d = e.violatorScreenName,
          f = e.violatorUserId,
          m = l === x.ActionedTweets ? R : M,
          p = function () {
            u(f).catch(r(v.a)), n.scribe(U.unblock)
          }
        return c.a.createElement(s.a, {
          color: 'red500',
          confirmationSheetConfirmButtonLabel: _.a,
          confirmationSheetConfirmButtonType: 'destructiveFilled',
          confirmationSheetHeadline: Object(_.c)({ screenName: d }),
          confirmationSheetText: Object(_.b)({ screenName: d }),
          label: C,
          onConfirmationSheetConfirm: function () {
            a(f)
              .then(function () {
                n.scribe(U.block),
                  t({ action: { label: _.l, onAction: p }, text: I({ screenName: d }) }),
                  i.goBack({ backLocation: m })
              })
              .catch(r(o.a))
          },
        })
      }
      t.b = h(function (e) {
        var t = e.createLocalApiErrorHandler,
          n = e.fetchOneUserIfNeeded,
          a = e.userId,
          r = e.violatorScreenName,
          i = e.violatorUserId
        return (
          c.a.useEffect(
            function () {
              a && n(a).catch(t())
            },
            [a, n, t],
          ),
          '' === r || '' === i
            ? null
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(y.a, null),
                c.a.createElement(H, e),
                c.a.createElement(D, e),
                c.a.createElement(j, e),
              )
        )
      })
    },
    UQuz: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LocationInformation', function () {
          return P
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        l = n('v6aA'),
        u = n('NeAX'),
        d = n('rxPX'),
        f = n('0KEI'),
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
        p = n('3XMw'),
        b = n.n(p),
        h = n('yoO3'),
        E = n('7JQg'),
        g = n('7FtF'),
        v = n('k89r'),
        y = n('RKmr'),
        S = n('e0ey'),
        _ = n('csss'),
        w = b.a.jabb9c9a,
        C = b.a.a686c489,
        k = b.a.dc20d917,
        T = b.a.cb2ed998,
        O = b.a.d9138165,
        L = b.a.eb029cab,
        I = b.a.j018f2a1,
        A = { page: 'settings', section: 'location_information' }
      function P(e) {
        var t = e.allowLocationHistoryUseEnabled,
          n = e.createLocalApiErrorHandler,
          a = e.location,
          i = e.updateSettings,
          o = Object(v.a)(),
          u = s.a.useContext(l.a)
        return s.a.createElement(
          E.c,
          { namespace: A },
          s.a.createElement(
            h.a,
            null,
            s.a.createElement(
              g.a,
              { location: a, screenType: 'secondaryDetail', title: w },
              s.a.createElement(y.a, { description: C }),
              u &&
                s.a.createElement(S.a, {
                  checked: t,
                  helpText: T,
                  label: k,
                  name: 'allowLocationHistoryUse',
                  onChange: function (e, t) {
                    o.scribe(c()(c()({}, A), {}, { element: e, action: t ? 'enable' : 'disable' })),
                      i(r()({}, e, t)).catch(n())
                  },
                }),
              s.a.createElement(_.a, { label: O, link: '/settings/your_twitter_data/locations' }),
              s.a.createElement(_.a, { label: L, link: '/settings/location' }),
              s.a.createElement(_.a, { label: I, link: '/settings/explore' }),
            ),
          ),
        )
      }
      var F = m(P)
      t.default = F
    },
    VKnd: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return i
        }),
        n.d(t, 'c', function () {
          return c
        })
      var a = 'https://'.concat(window.location.host),
        r = ''.concat(a, '/settings/subscription'),
        i = ''.concat(a, '/i/twitter_blue_sign_up'),
        c = ''.concat(i, '/welcome')
      ''.concat(i, '/unsuccessful')
    },
    XiYe: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = a.useEffect,
        i = a.useRef
      e.exports = function () {
        var e = i(!0)
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
    ZNbl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SafetyMode', function () {
          return S
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('yoO3'),
        c = n('OsOl'),
        o = n('7JQg'),
        s = n('7FtF'),
        l = n('Irs7'),
        u = n('t62R'),
        d = n('RKmr'),
        f = n('0yYu'),
        m = n('6vad'),
        p = n('csss'),
        b = n('3XMw'),
        h = n.n(b),
        E = { page: 'settings', section: 'safety_mode' },
        g = h.a.c6cb90eb,
        v = h.a.fabe1397,
        y = h.a.c0786021
      function S() {
        var e,
          t = Object(l.b)()
        return r.a.createElement(
          o.c,
          { namespace: E },
          r.a.createElement(
            i.a,
            null,
            r.a.createElement(
              s.a,
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
              r.a.createElement(c.a, null),
              r.a.createElement(f.a, null),
              r.a.createElement(m.b, { text: v }),
              r.a.createElement(p.a, { label: y, link: '/settings/safety_mode/autoblocked' }),
            ),
          ),
        )
      }
      t.default = S
    },
    Zg3A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    'Zi/f': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'YourTweets', function () {
          return L
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        l = n('P1r1'),
        u = n('rxPX'),
        d = Object(u.a)()
          .propsFromState(function () {
            return { settings: l.g }
          })
          .adjustStateProps(function (e) {
            var t = e.settings
            return { nsfwUserEnabled: t.nsfw_user, nsfwAdminEnabled: t.nsfw_admin }
          })
          .propsFromActions(function () {
            return { updateSettings: l.M }
          }),
        f = n('3XMw'),
        m = n.n(f),
        p = n('yoO3'),
        b = n('7JQg'),
        h = n('7FtF'),
        E = n('k89r'),
        g = n('0KEI'),
        v = n('RKmr'),
        y = n('e0ey'),
        S = n('csss'),
        _ = m.a.b38d81ae,
        w = m.a.f8d4746b,
        C = m.a.c0a55f4a,
        k = m.a.ea28ca63,
        T = m.a.eb029cab,
        O = { page: 'settings', section: 'your_tweets' }
      function L(e) {
        var t = e.location,
          n = e.nsfwAdminEnabled,
          a = e.nsfwUserEnabled,
          i = e.updateSettings,
          o = Object(E.a)(),
          l = Object(g.useCreateLocalApiErrorHandler)('YOUR_TWEETS_SCREEN')
        return s.a.createElement(
          b.c,
          { namespace: O },
          s.a.createElement(
            p.a,
            null,
            s.a.createElement(
              h.a,
              { location: t, screenType: 'secondaryDetail', title: _ },
              s.a.createElement(v.a, { description: w }),
              s.a.createElement(y.a, {
                checked: a,
                disabled: n,
                helpText: k,
                label: C,
                learnMoreLink: 'https://help.twitter.com/rules-and-policies/media-policy',
                name: 'nsfw_user',
                onChange: function (e, t) {
                  o.scribe(c()(c()({}, O), {}, { element: 'nsfw_user', action: t ? 'enable' : 'disable' })),
                    i(r()({}, e, t)).catch(l({ showToast: !0 }))
                },
              }),
              s.a.createElement(S.a, { label: T, link: '/settings/location' }),
            ),
          ),
        )
      }
      var I = d(L)
      t.default = I
    },
    ZvNX: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        o = n('5Yy7'),
        s = n.n(o),
        l = n('2VqO'),
        u = n.n(l),
        d = (n('6U7i'), n('ho0z'), n('hBvt'), n('ERkP')),
        f = n.n(d),
        m = (n('TJCb'), n('7x/C'), n('DZ+c'), n('j7Bv')),
        p = n('hBoh'),
        b = n('yiKp'),
        h = n.n(b),
        E = n('Lsrn'),
        g = n('k/Ka'),
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(g.a)(
            'svg',
            h()(
              h()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M22.5 16.855H22V4.358C22 3.058 20.957 2 19.675 2H4.388C3.105 2 2.062 3.058 2.062 4.358v12.497H1.5c-.414 0-.75.336-.75.75v2.036C.75 20.943 1.793 22 3.075 22h17.85c1.282 0 2.325-1.058 2.325-2.358v-2.036c0-.415-.336-.75-.75-.75zM3.562 4.358c0-.474.37-.858.825-.858h15.287c.455 0 .825.385.825.858v12.497H3.56V4.358zM20.925 20.5H3.075c-.455 0-.825-.385-.825-.858v-1.286h19.5v1.286c0 .473-.37.858-.825.858z',
              }),
            ),
          )
        }
      v.metadata = { width: 24, height: 24 }
      var y = v,
        S = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(g.a)(
            'svg',
            h()(
              h()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M12.574 18.322h-1.167c-.414 0-.75.336-.75.75s.336.75.75.75h1.167c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
              f.a.createElement('path', {
                d: 'M18.49 2h-13C4.25 2 3.24 3.01 3.24 4.25v15.5c0 1.24 1.01 2.25 2.25 2.25h13c1.24 0 2.25-1.01 2.25-2.25V4.25c0-1.24-1.01-2.25-2.25-2.25zm-13 1.5h13c.414 0 .75.337.75.75v11.865H4.74V4.25c0-.413.338-.75.75-.75zm13 17h-13c-.412 0-.75-.337-.75-.75v-2.135h14.5v2.135c0 .413-.336.75-.75.75z',
              }),
            ),
          )
        }
      S.metadata = { width: 24, height: 24 }
      var _ = S,
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(g.a)(
            'svg',
            h()(
              h()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zm.75 17.75c0 .413-.337.75-.75.75H4.25c-.413 0-.75-.337-.75-.75V4.25c0-.413.337-.75.75-.75h15.5c.413 0 .75.337.75.75v15.5z',
              }),
              f.a.createElement('circle', { cx: '11.958', cy: '16.926', r: '1.011' }),
              f.a.createElement('path', {
                d: 'M11.958 6.22c-2.138 0-3.876 1.737-3.876 3.875 0 .414.336.75.75.75s.75-.336.75-.75c0-1.31 1.065-2.376 2.376-2.376s2.377 1.064 2.377 2.375-1.066 2.377-2.377 2.377c-.414 0-.75.336-.75.75v1.03c0 .415.336.75.75.75s.75-.335.75-.75v-.356c1.78-.35 3.127-1.92 3.127-3.8 0-2.14-1.74-3.877-3.877-3.877z',
              }),
            ),
          )
        }
      w.metadata = { width: 24, height: 24 }
      var C = w,
        k = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  switch (this.props.deviceType.toString().toLowerCase()) {
                    case 'mobile':
                      return f.a.createElement(m.a, { Icon: p.a, color: 'neutral' })
                    case 'laptop':
                      return f.a.createElement(m.a, { Icon: y, color: 'neutral' })
                    case 'tablet':
                      return f.a.createElement(m.a, { Icon: _, color: 'neutral' })
                    default:
                      return f.a.createElement(m.a, { Icon: C, color: 'neutral' })
                  }
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent),
        T = n('3XMw'),
        O = n.n(T),
        L = n('GBcw'),
        I = n('Wms4'),
        A = n('pjBI'),
        P = n('t62R'),
        F = n('csss'),
        R = O.a.ed5ab169,
        M = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: '_renderLocationAndDateLabel',
                value: function () {
                  var e = this.props.session,
                    t = e.last_seen_time_ms,
                    n = e.location,
                    a = t ? f.a.createElement(L.a, { cutoff: 'years', humanReadable: !0, timestamp: Number(t) }) : null,
                    r = e.is_current_session ? f.a.createElement(I.a, { background: 'primary' }, R) : a
                  return f.a.createElement(A.a, null, n && f.a.createElement(P.b, null, n), r)
                },
              },
              {
                key: '_renderDeviceIcon',
                value: function () {
                  var e = this.props.session
                  return f.a.createElement(k, { deviceType: e.icon_type })
                },
              },
              {
                key: '_renderDeviceName',
                value: function () {
                  return this.props.session.name
                },
              },
              {
                key: '_renderDescription',
                value: function () {
                  var e = this.props,
                    t = e.session,
                    n = e.withSummary
                  return f.a.createElement(
                    P.b,
                    { color: 'gray700', numberOfLines: 1, size: 'subtext2' },
                    n ? t.summary : this._renderLocationAndDateLabel(),
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.link
                  return f.a.createElement(F.a, {
                    description: this._renderDescription(),
                    label: this._renderDeviceName(),
                    link: e,
                    thumbnail: this._renderDeviceIcon(),
                  })
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent)
    },
    aNjN: function (e, t, n) {
      'use strict'
      n.r(t)
      n('KqXw'), n('WNMA')
      var a,
        r = n('ERkP'),
        i = n.n(r),
        c = n('FIs5'),
        o = n('KEM+'),
        s = n.n(o),
        l = n('yiKp'),
        u = n.n(l),
        d = n('QIgh'),
        f = n('8UdT'),
        m = n('Yy//'),
        p = n('88ay'),
        b = n('Ka9G'),
        h = u()(
          u()({}, d.default),
          {},
          ((a = {}),
          s()(a, f.b.Tweet, Object(m.a)({ displayBlocked: !0 })),
          s()(a, f.b.User, Object(b.a)({ decoration: p.d })),
          a),
        ),
        E = n('jHSc'),
        g = n('3XMw'),
        v = n.n(g),
        y = n('fTQJ'),
        S = n('WpDa'),
        _ = n('ZNT5'),
        w = n('TnO6'),
        C = v.a.hae5825e,
        k = v.a.e9f1fbcb,
        T = v.a.de9b6641,
        O = function () {
          return i.a.createElement(c.a, { header: k, message: T })
        }
      t.default = function (e) {
        var t = e.history,
          n = e.location,
          a = e.match,
          r = a.params.userId,
          c = i.a.useMemo(
            function () {
              return (
                (e = r),
                Object(_.a)({
                  timelineId: 'ritoFlaggedTweets-'.concat(e),
                  getEndpoint: function (e) {
                    return e.RitoFlaggedTweets.fetchRitoFlaggedTweets
                  },
                  getEndpointParams: function (t) {
                    var n = t.count,
                      a = t.cursor
                    return { count: n, cursor: 'string' == typeof a ? a : void 0, userId: e }
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
          o = i.a.createElement(w.b, { history: t, location: n, match: a, timelineType: w.a.PreviewFlaggedTweets })
        return i.a.createElement(
          E.b,
          {
            backButtonType: 'back',
            behavioralEventViewType: 'safety_mode_flagged_tweets',
            history: t,
            onBackClick: function () {
              t.goBack()
            },
            title: C,
          },
          i.a.createElement(y.a, { entryConfiguration: h, footer: o, module: c, renderEmptyState: O, title: C }),
        )
      }
    },
    aY7H: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DirectMessages', function () {
          return R
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        l = n('v6aA'),
        u = n('P1r1'),
        d = n('rxPX'),
        f = n('0KEI'),
        m = Object(d.a)()
          .propsFromState(function () {
            return { nsfwMediaFilter: u.q, settings: u.g }
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
              updateSettings: u.M,
              updateDmNsfwMediaFilter: u.L,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'settings' }),
        p = n('3XMw'),
        b = n.n(p),
        h = n('yoO3'),
        E = n('7JQg'),
        g = n('7FtF'),
        v = n('k89r'),
        y = n('RKmr'),
        S = n('e0ey'),
        _ = b.a.d4986f85,
        w = b.a.cc950d94,
        C = b.a.b4006390,
        k = b.a.f7da127c,
        T = b.a.b3d8566e,
        O = b.a.cfda8c44,
        L = b.a.e6c411d7,
        I = b.a.g558101a,
        A = b.a.d9172541,
        P = b.a.bd557505,
        F = { page: 'settings', section: 'direct_messages' }
      function R(e) {
        var t = e.allowDmsFrom,
          n = e.createLocalApiErrorHandler,
          a = e.dmQualityFilter,
          i = e.dmReceiptSetting,
          o = e.location,
          u = e.nsfwMediaFilter,
          d = e.updateDmNsfwMediaFilter,
          f = e.updateSettings,
          m = Object(v.a)()
        function p(t, a) {
          var i = '/messages/settings' === e.location.pathname ? 'dm_tab' : 'global_settings_menu'
          m.scribe(c()(c()({}, F), {}, { element: t, data: { entry_point: i }, action: a })),
            f(r()({}, t, a)).catch(n({ showToast: !0 }))
        }
        var b = s.a.useContext(l.a).featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
        return s.a.createElement(
          E.c,
          { namespace: F },
          s.a.createElement(
            h.a,
            null,
            s.a.createElement(
              g.a,
              { location: o, screenType: 'secondaryDetail', title: _ },
              s.a.createElement(y.a, { description: w }),
              s.a.createElement(S.a, {
                checked: 'all' === t,
                helpText: k,
                label: C,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#receive',
                name: 'allow_dms_from',
                onChange: function (e, t) {
                  p(e, t ? 'all' : 'following')
                },
              }),
              s.a.createElement(S.a, {
                checked: 'enabled' === a,
                helpText: O,
                label: T,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages',
                name: 'dm_quality_filter',
                onChange: function (e, t) {
                  p(e, t ? 'enabled' : 'disabled')
                },
              }),
              b
                ? s.a.createElement(S.a, {
                    checked: u,
                    helpText: I,
                    label: L,
                    learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#graphic-media',
                    name: 'ext_dm_nsfw_media_filter',
                    onChange: function (e, t) {
                      m.scribe(
                        c()(c()({}, F), {}, { element: 'dm_nsfw_filter_setting', action: t ? 'enable' : 'disable' }),
                      ),
                        d(t)
                    },
                  })
                : null,
              s.a.createElement(S.a, {
                checked: 'all_enabled' === i,
                helpText: P,
                label: A,
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
      var M = m(R)
      t.default = M
    },
    'bT/0': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AdsPreferences', function () {
          return A
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        l = n('NeAX'),
        u = n('rxPX'),
        d = n('0KEI'),
        f = Object(u.a)()
          .propsFromState(function () {
            return { settings: l.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowPersonalizationEnabled: e.settings.allowPersonalization }
          })
          .propsFromActions(function () {
            return {
              updateSettings: l.updateSettings,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'ADS_PREFERENCES_SCREEN',
              ),
            }
          }),
        m = n('3XMw'),
        p = n.n(m),
        b = n('yoO3'),
        h = n('7JQg'),
        E = n('7FtF'),
        g = n('k89r'),
        v = n('RKmr'),
        y = n('e0ey'),
        S = n('csss'),
        _ = p.a.d035a8d0,
        w = p.a.f9ff2201,
        C = p.a.ib3357a5,
        k = p.a.c4ca418c,
        T = p.a.b0b3ed8e,
        O = p.a.h1f01a24,
        L = p.a.da202f9a,
        I = { page: 'settings', section: 'ads_preferences' }
      function A(e) {
        var t,
          n = e.allowPersonalizationEnabled,
          a = e.createLocalApiErrorHandler,
          i = e.location,
          o = e.updateSettings,
          l = Object(g.a)(),
          u =
            ((t = s.a.useRef()),
            s.a.useEffect(function () {
              return (
                window.apkInterface && window.apkInterface.isOsAdsTrackingOn && !window.apkInterface.isOsAdsTrackingOn()
              )
            }, []),
            t.current)
        return s.a.createElement(
          h.c,
          { namespace: I },
          s.a.createElement(
            b.a,
            null,
            s.a.createElement(
              E.a,
              { location: i, screenType: 'secondaryDetail', title: _ },
              s.a.createElement(v.a, { description: w }),
              s.a.createElement(y.a, {
                checked: n,
                disabled: u,
                helpText: u ? T : k,
                label: C,
                learnMoreLink: 'https://support.twitter.com/articles/20170405',
                name: 'allowPersonalization',
                onChange: function (e, t) {
                  l.scribe(c()(c()({}, I), {}, { element: e, action: t ? 'enable' : 'disable' })),
                    o(r()({}, e, t)).catch(a())
                },
              }),
              s.a.createElement(S.a, { label: O, link: '/settings/your_twitter_data/twitter_interests' }),
              s.a.createElement(S.a, { label: L, link: '/settings/your_twitter_data/audiences' }),
            ),
          ),
        )
      }
      var P = f(A)
      t.default = P
    },
    cQiO: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ApplicationsScreen', function () {
          return K
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        f = n.n(d),
        m = n('KEM+'),
        p = n.n(m),
        b = (n('2G9S'), n('z84I'), n('ho0z'), n('uFXj'), n('ERkP')),
        h = n.n(b),
        E = n('dZRF'),
        g = n('kGix'),
        v = n('rxPX'),
        y = n('0KEI'),
        S = function (e, t) {
          return Object(g.d)(E.d(e))
        },
        _ = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: S, applications: E.a.selectUniqUnrevokedApps }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchApplications: E.b,
            }
          }),
        w = n('v//M'),
        C = n('yoO3'),
        k = n('7JQg'),
        T = n('7FtF'),
        O = n('RKmr'),
        L = n('t62R'),
        I = n('FIs5'),
        A = n('csss'),
        P = n('rHpw'),
        F = n('3XMw'),
        R = n.n(F),
        M = n('U+bB'),
        x = n('MWbm'),
        U = R.a.jc02ae67,
        D = R.a.e5e8a899,
        H = R.a.ge06310e,
        j = R.a.dd1b86f9,
        N = R.a.ee4b16f8,
        z = 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
        B = { page: 'settings', section: 'connected_apps' },
        K = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(s()(e), '_fetchApps', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchApplications)().catch(n({ showToast: !0 }))
              }),
              p()(s()(e), '_handleRetry', function () {
                e._fetchApps()
              }),
              p()(s()(e), '_render', function () {
                var t = e.props.applications
                return h.a.createElement(
                  x.a,
                  null,
                  h.a.createElement(O.a, {
                    description: h.a.createElement(
                      R.a.I18NFormatMessage,
                      { $i18n: 'hcecd237' },
                      h.a.createElement(L.b, { link: z }, R.a.b63b0b1c),
                    ),
                  }),
                  t.length ? null : h.a.createElement(I.a, { header: H, message: N }),
                  t.map(function (e, t) {
                    var n = '/settings/applications/'.concat(e.app_id)
                    return h.a.createElement(A.a, {
                      description: e.organization ? j({ name: e.organization }) : null,
                      key: e.app_id,
                      label: e.name,
                      link: n,
                      thumbnail: h.a.createElement(M.a, { accessibilityLabel: '', source: e.img_url, style: V.avatar }),
                    })
                  }),
                )
              }),
              e
            )
          }
          return (
            c()(n, [
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
                  return h.a.createElement(
                    k.c,
                    { namespace: B },
                    h.a.createElement(
                      C.a,
                      null,
                      h.a.createElement(
                        T.a,
                        { location: n, title: U },
                        h.a.createElement(w.a, {
                          accessibilityLabel: D,
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
        })(h.a.Component)
      p()(K, 'defaultProps', { applications: [] })
      var V = P.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.small, height: '100%', width: '100%' } }
        }),
        G = _(K)
      t.default = G
    },
    dZRF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return k
        }),
        n.d(t, 'c', function () {
          return T
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('LW0h'), n('7x/C'), n('1IsZ'), n('JtPf'), n('oEOe')),
        s = n('/kEJ'),
        l = n('hqKg'),
        u = n('3zvM'),
        d = n('lMB6'),
        f = n('kGix'),
        m = n('XMGw'),
        p = n('Ssj5'),
        b = n('s1N3'),
        h = ''.concat(m.a, '/applications'),
        E = 'rweb/'.concat(h),
        g = o.a(E, 'FETCH_APPLICATIONS'),
        v = { fetchStatus: f.a.NONE }
      function y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        switch (t.type) {
          case g.REQUEST:
            return c()(c()({}, e), {}, { fetchStatus: f.a.LOADING })
          case g.FAILURE:
            return c()(c()({}, e), {}, { error: t.payload, fetchStatus: f.a.FAILED })
          case g.SUCCESS:
            return c()(c()({}, e), {}, { error: null, fetchStatus: f.a.LOADED })
          default:
            return e
        }
      }
      p.a.register(r()({}, h, y))
      var S = {
          revokeApplication: {
            reducer: function (e, t) {
              if (t.type === _.customActionTypes.revokeApplication.SUCCESS) {
                var n = t.payload.revoked,
                  a = t.meta.entityId,
                  i = e.entities[a]
                return c()(
                  c()({}, e),
                  {},
                  { entities: c()(c()({}, e.entities), {}, r()({}, a, c()(c()({}, i), {}, { revoked: n }))) },
                )
              }
              return e
            },
            getParams: function (e) {
              return { token: e }
            },
            getApiMethod: function (e) {
              return e.Settings.revokeApplication
            },
          },
          revokeOauth2Token: {
            reducer: function (e, t) {
              if (t.type === _.customActionTypes.revokeOauth2Token.SUCCESS) {
                var n = t.payload.revoked,
                  a = t.meta.entityId,
                  i = e.entities[a]
                return c()(
                  c()({}, e),
                  {},
                  { entities: c()(c()({}, e.entities), {}, r()({}, a, c()(c()({}, i), {}, { revoked: n }))) },
                )
              }
              return e
            },
            getParams: function (e) {
              return { token_hash: e }
            },
            getApiMethod: function (e) {
              return e.Settings.revokeOauth2Token
            },
          },
        },
        _ = Object(u.e)({ namespace: 'applications', customActions: S })
      ;(_.selectUniqUnrevokedApps = Object(l.createSelector)(_.selectAll, function (e) {
        var t = Object.values(e).filter(function (e) {
          return !0 !== e.revoked
        })
        return Object(b.a)(t, function (e) {
          return e.app_id
        })
      })),
        (_.selectAppsById = Object(l.createSelector)(
          _.selectAll,
          function (e, t) {
            return t
          },
          function (e, t) {
            return Object.values(e).filter(function (e) {
              return e.app_id === t
            })
          },
        ))
      var w = d.a.register(_),
        C = function (e) {
          return e[h].fetchStatus
        },
        k = function (e) {
          return function (t, n) {
            return C(n()) === f.a.LOADED ? Promise.resolve() : t(O(e))
          }
        },
        T = function (e, t, n) {
          return function (n, a, r) {
            r.api
            var i = a()
            return _.selectAppsById(i, e).length > 0 ? Promise.resolve() : n(O(t))
          }
        },
        O = function (e) {
          return function (t, n, a) {
            var r = a.api
            return o.b(t, { params: e, request: r.Settings.fetchApplications })(
              { actionTypes: g, context: 'FETCH_APPLICATIONS' },
              function (e, t) {
                if (e) return [Object(s.c)(e.entities)]
              },
            )
          }
        }
    },
    e5HP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        o = n('5Yy7'),
        s = n.n(o),
        l = n('2VqO'),
        u = n.n(l),
        d = n('KEM+'),
        f = n.n(d),
        m = n('ERkP'),
        p = n.n(m),
        b = n('t62R'),
        h = n('3XMw'),
        E = n.n(h),
        g = n('rHpw'),
        v = n('MWbm'),
        y = n('yiKp'),
        S = n.n(y),
        _ = n('Lsrn'),
        w = n('k/Ka'),
        C = function () {
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
            p.a.createElement(
              'g',
              null,
              p.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      C.metadata = { width: 24, height: 24 }
      var k = C,
        T = n('uFYP'),
        O = E.a.f1a1b790,
        L = E.a.if2bf8b3,
        I = E.a.f3624b5c,
        A = E.a.b4b3b113,
        P = E.a.be22205f,
        F = E.a.hcbbe447,
        R = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    n = e.nativeID,
                    a = e.style,
                    r = e.withCircleIcon ? k : T.a
                  return p.a.createElement(
                    v.a,
                    { style: [M.root, a] },
                    p.a.createElement(r, { style: [M.icon, t && M[t]] }),
                    p.a.createElement(b.b, { color: t, nativeID: n, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    n = e.label,
                    a = e.promotedContent,
                    r = a.adMetadataContainer,
                    i = a.advertiser,
                    c = a.advertiser_name,
                    o = a.disclosure_type,
                    s = t && i && t === i.id_str,
                    l = 'string' == typeof o && 'political' === o.toLowerCase(),
                    u = 'string' == typeof o && 'issue' === o.toLowerCase(),
                    d = !(!r || 'POLITICAL' !== r.disclaimerType) || l,
                    f = !(!r || 'ISSUE' !== r.disclaimerType) || u,
                    m = (r || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!c || s || m
                      ? d
                        ? I
                        : f
                        ? P
                        : L
                      : d
                      ? A({ fullName: c })
                      : f
                      ? F({ fullName: c })
                      : O({ fullName: c }))
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      f()(R, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var M = g.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    eM8g: function (e, t, n) {
      'use strict'
      n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('MWbm'),
        c = n('t62R'),
        o = n('rHpw')
      t.a = function (e) {
        var t = e.children
        return r.a.createElement(
          i.a,
          { style: s.labelContainer },
          r.a.createElement(
            i.a,
            { style: s.contentContainer },
            r.a.createElement(
              i.a,
              { style: s.appText },
              r.a.createElement(c.b, { color: 'gray700', size: 'subtext2' }, t),
            ),
          ),
        )
      }
      var s = o.a.create(function (e) {
        return {
          contentContainer: { alignItems: 'center', flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
          labelContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            minHeight: 'calc('
              .concat(o.a.theme.lineHeights.headline1, ' + 2 * ')
              .concat(e.componentDimensions.gutterVertical, ')'),
          },
          appText: { flexShrink: 1, width: '100%' },
        }
      })
    },
    ehR8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('zCf4')
      function r() {
        return { location: Object(a.g)(), match: Object(a.i)(), history: Object(a.f)() }
      }
    },
    hBoh: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M16.5 2h-9C6.26 2 5.25 3.01 5.25 4.25v15.5C5.25 20.99 6.26 22 7.5 22h9c1.24 0 2.25-1.01 2.25-2.25V4.25C18.75 3.01 17.74 2 16.5 2zm-9 1.5h9c.413 0 .75.337.75.75v11.865H6.75V4.25c0-.413.337-.75.75-.75zm9 17h-9c-.413 0-.75-.337-.75-.75v-2.135h10.5v2.135c0 .413-.337.75-.75.75z',
              }),
              c.a.createElement('path', {
                d: 'M12.583 18.322h-1.166c-.414 0-.75.336-.75.75s.336.75.75.75h1.166c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    jN9l: function (e, t, n) {
      'use strict'
      var a,
        r,
        i,
        c = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'MonetizationSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: (a = [{ kind: 'Literal', name: 's', value: 23 }]),
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
                              (i = {
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
                storageKey: 'viewer_v2(s:23)',
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
                args: a,
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
                              i,
                              { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                            ],
                            type: 'User',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        filters: null,
                        handle: 'user',
                        key: '',
                        kind: 'LinkedHandle',
                        name: 'result',
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:23)',
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
      ;(c.hash = '84ef2c297c0f036f20c8545d37f51c88'), (e.exports = c)
    },
    jZqz: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SessionsScreen', function () {
          return te
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('VrFO'),
        c = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        m = n('2VqO'),
        p = n.n(m),
        b = n('KEM+'),
        h = n.n(b),
        E = (n('2G9S'), n('z84I'), n('ERkP')),
        g = n.n(E),
        v = n('EPsT'),
        y = n('uo4S'),
        S = n('kGix'),
        _ = n('rxPX'),
        w = n('0KEI'),
        C = function (e, t) {
          return Object(S.d)(y.d(e))
        },
        k = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: C, sessions: y.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSessionsIfNeeded: y.a,
              revokeAllSessions: y.b,
            }
          }),
        T = n('v//M'),
        O = n('yoO3'),
        L = n('VIKJ'),
        I = n('7JQg'),
        A = n('ZvNX'),
        P = n('eM8g'),
        F = n('7FtF'),
        R = n('MWbm'),
        M = n('RKmr'),
        x = n('6vad'),
        U = n('0yYu'),
        D = n('t62R'),
        H = n('3XMw'),
        j = n.n(H),
        N = j.a.dd823129,
        z = j.a.c2cb5560,
        B = j.a.bca43fd0,
        K = j.a.bef6fc56,
        V = j.a.bbe9579b,
        G = j.a.b850cbd0,
        X = j.a.ae1bbb26,
        Q = j.a.i859a9d3,
        W = j.a.e5e8a899,
        q = j.a.cf3e3164,
        Y = j.a.f810f279,
        J = j.a.a19f4b20,
        Z = j.a.e25e40f0,
        $ = j.a.d1baa458,
        ee = { page: 'settings', section: 'sessions' },
        te = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(u()(e), '_fetchSessions', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSessionsIfNeeded)().catch(n({ showToast: !0 }))
              }),
              h()(u()(e), '_handleRetry', function () {
                e._fetchSessions()
              }),
              h()(u()(e), '_handleLogOutAll', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.revokeAllSessions)().catch(n({ showToast: !0 }))
              }),
              h()(u()(e), '_renderSession', function (e, t) {
                var n = '/settings/sessions/'.concat(encodeURIComponent(e.token))
                return g.a.createElement(A.a, {
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
                    a = t.location
                  return g.a.createElement(
                    I.c,
                    { namespace: ee },
                    g.a.createElement(
                      O.a,
                      null,
                      g.a.createElement(
                        F.a,
                        { location: a, title: N },
                        g.a.createElement(T.a, {
                          accessibilityLabel: W,
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
                    a = Object(L.a)(t, function (e) {
                      return e.is_current_session
                    }),
                    i = r()(a, 2),
                    c = i[0],
                    o = i[1]
                  return n
                    ? g.a.createElement(
                        R.a,
                        null,
                        g.a.createElement(M.a, { description: K }),
                        g.a.createElement(x.b, { text: z }),
                        g.a.createElement(P.a, null, V),
                        c[0] ? this._renderSession(c[0], !1) : null,
                        g.a.createElement(U.a, null),
                        g.a.createElement(x.b, { text: B }),
                        g.a.createElement(P.a, null, G),
                        g.a.createElement(
                          P.a,
                          null,
                          g.a.createElement(
                            j.a.I18NFormatMessage,
                            { $i18n: 'i34eeb36', infoText: n > 1 ? J({ num: n - 1 }) : Z },
                            g.a.createElement(
                              D.b,
                              {
                                link: 'https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps',
                                withInteractiveStyling: !1,
                              },
                              j.a.j3223a5b({ learnMoreLabel: Q }),
                            ),
                          ),
                        ),
                        g.a.createElement(v.a, {
                          align: 'left',
                          confirmationSheetConfirmButtonLabel: X,
                          confirmationSheetConfirmButtonType: 'primary',
                          confirmationSheetHeadline: Y,
                          confirmationSheetText: $,
                          label: q,
                          onConfirmationSheetConfirm: this._handleLogOutAll,
                        }),
                        o.map(function (t, a) {
                          return e._renderSession(t, n - 1 === a)
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(te, 'defaultProps', { sessions: [] })
      var ne = k(te)
      t.default = ne
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        c = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        l = n('t62R'),
        u = n('I4+6'),
        d = n('cm6r'),
        f = n('rHpw'),
        m = n('MWbm'),
        p = ['align', 'color', 'label'],
        b = f.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          a = e.color,
          i = e.label,
          o = c()(e, p),
          h = u.a.generate({
            backgroundColor: f.a.theme.colors.transparent,
            color: f.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          m.a,
          { style: b.container },
          s.a.createElement(
            d.a,
            r()({}, o, { interactiveStyles: h, style: b.root }),
            s.a.createElement(l.b, { align: n, color: a }, i),
          ),
        )
      }
    },
    k5o5: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('EORa'),
        i = r.loadQuery,
        c = r.useTrackLoadQueryInRender,
        o = n('XiYe'),
        s = n('PJTX'),
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        f = l.useRef,
        m = l.useState,
        p = n('e1/f').getRequest,
        b = { kind: 'NullQueryReference' }
      function h(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : b,
          r = s()
        c()
        var l = o(),
          p = f(new Set([n])),
          E = m(function () {
            return n
          }),
          g = E[0],
          v = E[1],
          y = m(function () {
            return n
          }),
          S = y[0],
          _ = y[1]
        n !== S && (p.current.add(n), _(n), v(n))
        var w = u(
            function () {
              l.current && (p.current.add(b), v(b))
            },
            [l],
          ),
          C = u(
            function (t, n) {
              var a =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (l.current) {
                var c,
                  o = i(null !== (c = null == n ? void 0 : n.__environment) && void 0 !== c ? c : r, e, t, a)
                p.current.add(o), v(o)
              }
            },
            [r, e, v, l],
          ),
          k = f(!1)
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
                    C(g.variables, { fetchPolicy: g.fetchPolicy, networkCacheConfig: g.networkCacheConfig })
                  )
                )
              var t = p.current
              if (l.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var i = n.value
                    if (i === g) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (h(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (c) {
                  r.e(c)
                } finally {
                  r.f()
                }
              }
            },
            [g, l, C, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(p.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (h(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (i) {
                  n.e(i)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === g.kind ? null : g, C, w]
        )
      }
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return j
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('VrFO'),
        c = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        f = n.n(d),
        m = n('2VqO'),
        p = n.n(m),
        b = n('KEM+'),
        h = n.n(b),
        E = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        g = n.n(E),
        v = n('pXBW'),
        y = n('6/RC'),
        S = n('P74S'),
        _ = n.n(S),
        w = n('kGix')
      n.d(t, 'a', function () {
        return w.a
      })
      var C = n('tI3i'),
        k = n.n(C),
        T = n('fs1G'),
        O = n('0KEI'),
        L = n('VYI2'),
        I = n.n(L),
        A = n('35hZ'),
        P = n.n(A),
        F = n('k5o5'),
        R = n.n(F),
        M = n('PJTX'),
        x = n.n(M),
        U = function (e) {
          return (0, e.render)({ fetchStatus: w.a.LOADING, data: null, error: null, retry: T.a })
        },
        D = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), h()(u()(e), 'state', { error: null }), e
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
        })(g.a.Component),
        H = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = P()(t, n)
          return a({ fetchStatus: w.a.LOADED, data: r, error: null, retry: T.a })
        },
        j = function (e, t) {
          if (y.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                i = void 0 === a ? 'store-or-network' : a,
                c = n.render,
                o = n.variables,
                s = R()(e),
                l = r()(s, 2),
                u = l[0],
                d = l[1],
                f = Object(O.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = I()(o),
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
                    d(p, { fetchPolicy: i })
                  },
                  [i, d, p],
                ),
                u
                  ? g.a.createElement(
                      g.a.Suspense,
                      { fallback: g.a.createElement(U, { render: c }) },
                      g.a.createElement(
                        D,
                        { errorHandler: f(t.errorConfig.options || {}), key: u.fetchKey, retry: b },
                        function (t, n) {
                          return t
                            ? c({ fetchStatus: w.a.FAILED, error: t, data: null, retry: n })
                            : g.a.createElement(H, { query: e, queryRef: u, render: c })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var i = a.render,
              c = a.variables,
              o = x()(),
              s = Object(O.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = I()(c),
              u = r()(l, 1)[0],
              d = n.get(o)
            if (d) return d
            var f = g.a.lazy(function () {
              return _()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return (
                      k()(e, 'Fetch query returned empty data'),
                      i({ fetchStatus: w.a.LOADED, data: e, error: null, retry: T.a })
                    )
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (s(t.errorConfig.options || {})(e),
                        i({ fetchStatus: w.a.FAILED, data: null, error: e, retry: T.a }))
                      : g.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(o, e).get.bind(n, o) }
                })
            })
            return g.a.createElement(g.a.Suspense, null, g.a.createElement(f, null))
          }
        }
    },
    ndvG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'adFreeSitesLabel', function () {
          return R
        }),
        n.d(t, 'yourImpactLabel', function () {
          return M
        }),
        n.d(t, 'adFreeHelpCenterLabel', function () {
          return x
        }),
        n.d(t, 'adFreeHelpScribeElement', function () {
          return G
        }),
        n.d(t, 'adFreeImpactScribeElement', function () {
          return X
        }),
        n.d(t, 'adFreeSitesScribeElement', function () {
          return Q
        }),
        n.d(t, 'TwitterBlue', function () {
          return W
        })
      n('KqXw'), n('WNMA'), n('z84I'), n('1t7P'), n('jQ/y'), n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        c = n('EGrD'),
        o = n('gUb7'),
        s = n('rxPX'),
        l = n('0KEI'),
        u = n('u7LJ'),
        d = Object(s.a)()
          .propsFromState(function () {
            return { userClaimsFetchStatus: o.c, twitterBlueLinksStaticData: u.c, twitterBlueLinksApiData: u.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'TWITTER_BLUE_SETTINGS',
              ),
              fetchAdFreeToken: c.a,
            }
          })
          .withAnalytics({ page: 'settings', section: 'twitter_blue' }),
        f = n('v//M'),
        m = n('3XMw'),
        p = n.n(m),
        b = n('/de5'),
        h = n('yoO3'),
        E = n('7FtF'),
        g = 'adFreeSection',
        v = n('ehR8'),
        y = n('MWbm'),
        S = n('6vad'),
        _ = n('csss'),
        w = n('RKmr'),
        C = n('OOKO'),
        k = n('rHpw'),
        T = n('LSr9'),
        O = n('vMn4'),
        L = n('tH6R'),
        I = n('OySi'),
        A = p.a.ed21f885,
        P = p.a.je84decd,
        F = p.a.i65802df,
        R = p.a.a21b8ad2,
        M = p.a.hd885aef,
        x = p.a.je4ccd3a,
        U = p.a.i9028824,
        D = p.a.e5fff0c7,
        H = p.a.ib35705d,
        j = p.a.d15f6d3d,
        N = p.a.jc8487c1,
        z = p.a.ad45e9b2,
        B = p.a.db529452,
        K = p.a.f66d24be,
        V = p.a.d248d75e,
        G = 'ad_free_articles_help',
        X = 'ad_free_articles_impact',
        Q = 'ad_free_articles_sites'
      function W(e) {
        var t = e.analytics,
          n = e.createLocalApiErrorHandler,
          a = e.fetchAdFreeToken,
          c = e.twitterBlueLinksApiData,
          o = e.twitterBlueLinksStaticData,
          s = e.userClaimsFetchStatus,
          l = Object(v.a)(),
          u = l.history,
          d = l.location,
          m = l.match,
          p = r.a.useContext(i.a),
          k = p.featureSwitches,
          W = p.userClaims,
          Y = W.isTwitterBlueSubscriber(),
          J = W.isTrueAndEnabled('subscriptions_feature_1006'),
          Z = k.isTrue('subscriptions_management_enabled'),
          $ = k.isTrue('subscriptions_product_feature_list_api_enabled') ? c : o,
          ee = function () {
            ne(Q)
          },
          te = function () {
            ne(G)
          },
          ne = function (e) {
            t.scribe({ page: 'subscriptions', section: 'settings', element: e, action: 'click' })
          }
        return r.a.createElement(f.a, {
          accessibilityLabel: U,
          fetchStatus: s,
          render: function () {
            return Y
              ? r.a.createElement(
                  h.a,
                  null,
                  r.a.createElement(
                    E.a,
                    { location: d, screenType: 'primaryDetail', title: A },
                    r.a.createElement(
                      y.a,
                      { style: q.iconWrapper },
                      r.a.createElement(L.a, { style: q.iconTwitterBlue }),
                      r.a.createElement(w.a, { description: D }),
                    ),
                    r.a.createElement(C.a, { spacing: 'space2' }),
                    r.a.createElement(S.b, { text: P }),
                    $.map(function (e) {
                      var t = e.Icon,
                        n = e.description,
                        a = e.label,
                        i = e.link
                      return e.shouldRender && t
                        ? r.a.createElement(I.b, { Icon: t, description: n, key: a, label: a, link: i })
                        : null
                    }),
                    J &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(S.b, { testID: g, text: F }),
                        r.a.createElement(I.a, {
                          description: j,
                          label: R,
                          link: 'https://twitter.com/i/lists/1448014243245150209',
                          onPress: ee,
                        }),
                        r.a.createElement(_.a, {
                          description: N,
                          label: M,
                          link: { external: !0, pathname: T.b },
                          onPress: function (e) {
                            new T.a(a, n()).getYourImpactChartLinkHandler()(e), ne(X)
                          },
                        }),
                        r.a.createElement(I.a, {
                          label: x,
                          link: 'https://help.twitter.com/using-twitter/twitter-blue-ad-free-articles',
                          onPress: te,
                        }),
                      ),
                    Z &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(S.b, { text: B }),
                        r.a.createElement(I.b, {
                          Icon: O.a,
                          description: z,
                          key: H,
                          label: H,
                          link: '/settings/subscription',
                        }),
                      ),
                    r.a.createElement(I.a, { label: K, link: 'https://help.twitter.com/using-twitter/twitter-blue' }),
                    r.a.createElement(I.a, { label: V, link: 'https://help.twitter.com/forms/subscriptions' }),
                  ),
                )
              : r.a.createElement(b.b, { history: u, location: d, match: m })
          },
        })
      }
      var q = k.a.create(function (e) {
        return {
          iconWrapper: { display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: e.spaces.space16 },
          iconTwitterBlue: { fill: e.colors.text },
        }
      })
      t.default = d(W)
    },
    sGy1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ContentYouSee', function () {
          return R
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        l = n('v6aA'),
        u = n('P1r1'),
        d = n('G6rE'),
        f = n('rxPX'),
        m = n('0KEI'),
        p = Object(f.a)()
          .propsFromState(function () {
            return { settings: u.g, loggedInUser: d.e.selectLoggedInUser }
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
              updateSettings: u.M,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'CONTENT_YOU_SEE_SCREEN',
              ),
            }
          }),
        b = n('3XMw'),
        h = n.n(b),
        E = n('yoO3'),
        g = n('7JQg'),
        v = n('7FtF'),
        y = n('k89r'),
        S = n('RKmr'),
        _ = n('e0ey'),
        w = n('csss'),
        C = h.a.f2bd9c47,
        k = h.a.b2810ee7,
        T = h.a.fc1d217b,
        O = h.a.b8533bac,
        L = h.a.h1f01a24,
        I = h.a.j018f2a1,
        A = h.a.h1ef00db,
        P = h.a.h9f2da68,
        F = { page: 'settings', section: 'content_you_see' }
      function R(e) {
        var t = e.createLocalApiErrorHandler,
          n = e.displaySensitiveMediaEnabled,
          a = e.location,
          i = e.loggedInUserScreenName,
          o = e.updateSettings,
          u = Object(y.a)(),
          d = s.a.useContext(l.a).featureSwitches.isTrue('sensitive_media_settings_enabled')
        return void 0 !== i
          ? s.a.createElement(
              g.c,
              { namespace: F },
              s.a.createElement(
                E.a,
                null,
                s.a.createElement(
                  v.a,
                  { location: a, screenType: 'secondaryDetail', title: C },
                  s.a.createElement(S.a, { description: k }),
                  d
                    ? null
                    : s.a.createElement(_.a, {
                        checked: n,
                        label: T,
                        name: 'display_sensitive_media',
                        onChange: function (e, n) {
                          u.scribe(c()(c()({}, F), {}, { element: e, action: n ? 'enable' : 'disable' })),
                            o(r()({}, e, n)).catch(t({ showToast: !0 }))
                        },
                      }),
                  s.a.createElement(w.a, { label: O, link: '/'.concat(i, '/topics') }),
                  s.a.createElement(w.a, { label: L, link: '/settings/your_twitter_data/twitter_interests' }),
                  s.a.createElement(w.a, { label: I, link: '/settings/explore' }),
                  s.a.createElement(w.a, { label: A, link: '/settings/search' }),
                  d ? s.a.createElement(w.a, { label: P, link: '/settings/sensitive_media' }) : null,
                ),
              ),
            )
          : null
      }
      var M = p(R)
      t.default = M
    },
    sZlh: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return L
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ddV6'),
        c = n.n(i),
        o = (n('jQ3i'), n('x4t0'), n('849X'), n('TJCb'), n('AS3p')),
        s = n('ERkP'),
        l = n.n(s),
        u = n('v6aA'),
        d = n('3XMw'),
        f = n.n(d),
        m = n('yoO3'),
        p = n('7JQg'),
        b = n('BTou'),
        h = n('7FtF'),
        E = n('k89r'),
        g = n('RKmr'),
        v = n('3JAx'),
        y = f.a.d0b74a5a,
        S = f.a.i9c8698d,
        _ = f.a.d8817e36,
        w = f.a.b9288ee6,
        C = f.a.ad881a6b,
        k = f.a.d9c5161f,
        T = [
          { label: _, value: o.a.AcceptAllCookies, helpText: C },
          { label: w, value: o.a.RefuseNonEssentialCookies, helpText: k },
        ],
        O = { page: 'settings', section: 'cookie_preferences' }
      function L(e) {
        var t = e.location,
          n = Object(E.a)(),
          a = (function () {
            var e = l.a.useContext(u.a).featureSwitches,
              t = l.a.useState(function () {
                var t = o.c(e)
                return [o.a.NotSet, o.a.Invalid].includes(t) ? o.a.RefuseNonEssentialCookies : t
              }),
              n = c()(t, 2),
              a = n[0],
              r = n[1]
            return {
              cookiePreference: a,
              setCookiePreference: function (t) {
                if (t === o.a.AcceptAllCookies) o.b(e), r(o.a.AcceptAllCookies)
                else {
                  if (t !== o.a.RefuseNonEssentialCookies) throw new Error('Invalid cookie preference')
                  o.d(e), r(o.a.RefuseNonEssentialCookies)
                }
              },
            }
          })(),
          i = a.cookiePreference,
          s = a.setCookiePreference
        return l.a.createElement(
          p.c,
          { namespace: O },
          l.a.createElement(
            m.a,
            null,
            l.a.createElement(
              h.a,
              { location: t, screenType: 'secondaryDetail', title: y },
              l.a.createElement(g.a, { description: S }),
              l.a.createElement(v.a, {
                name: 'cookie_preferences',
                onChange: function (e, t) {
                  n.scribe(
                    r()(
                      r()({}, O),
                      {},
                      { action: 'change', element: t === o.a.AcceptAllCookies ? 'accept_all' : 'refuse_non_essential' },
                    ),
                  ),
                    s(t),
                    t === o.a.RefuseNonEssentialCookies && (b.a.flushHTMLCache(), window.location.reload())
                },
                options: T,
                value: i,
              }),
            ),
          ),
        )
      }
    },
    su2V: function (e, t, n) {
      'use strict'
      n.d(t, 'l', function () {
        return h
      }),
        n.d(t, 'k', function () {
          return E
        }),
        n.d(t, 'f', function () {
          return g
        }),
        n.d(t, 'e', function () {
          return v
        }),
        n.d(t, 'j', function () {
          return y
        }),
        n.d(t, 'i', function () {
          return S
        }),
        n.d(t, 'h', function () {
          return _
        }),
        n.d(t, 'g', function () {
          return w
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return k
        }),
        n.d(t, 'a', function () {
          return T
        }),
        n.d(t, 'c', function () {
          return O
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('yH/f'), n('hBpG'), n('7x/C'), n('jQ3i'), n('x4t0'), n('JtPf'), n('oEOe')),
        s = n('Ssj5'),
        l = n('kGix'),
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
        b = { products: {}, checkoutUrls: {}, productSubscriptions: { fetchStatus: l.a.NONE }, customerPortalUrls: {} }
      var h = function (e, t) {
          var n = e[u].products[t]
          return (null == n ? void 0 : n.fetchStatus) || l.a.NONE
        },
        E = function (e, t) {
          var n = e[u].products[t]
          return null == n ? void 0 : n.details
        },
        g = function (e, t) {
          var n = e[u].checkoutUrls[t]
          return (null == n ? void 0 : n.fetchStatus) || l.a.NONE
        },
        v = function (e, t) {
          var n = e[u].checkoutUrls[t]
          return null == n ? void 0 : n.checkoutUrl
        },
        y = function (e) {
          return e[u].productSubscriptions.fetchStatus
        },
        S = function (e, t) {
          return (e[u].productSubscriptions.subscriptions || []).find(function (e) {
            var n, a
            return (
              (null === (n = e.product) || void 0 === n ? void 0 : n.rest_id) &&
              (null === (a = e.product) || void 0 === a ? void 0 : a.rest_id.includes(t)) &&
              'Inactive' !== e.state
            )
          })
        },
        _ = function (e, t) {
          var n = e[u].customerPortalUrls[t]
          return (null == n ? void 0 : n.fetchStatus) || l.a.NONE
        },
        w = function (e, t) {
          var n = e[u].customerPortalUrls[t]
          return null == n ? void 0 : n.customerPortalUrl
        },
        C = function (e) {
          return function (t, n, a) {
            var r = a.api,
              i = Object(o.b)(t, {
                params: { id: e },
                request: r.SubscriptionPayments.fetchSubscriptionProductDetails,
              }),
              c = h(n(), e)
            return c !== l.a.NONE && c !== l.a.FAILED
              ? Promise.resolve()
              : i({ actionTypes: d, context: 'FETCH_SUBSCRIPTION_PRODUCT_DETAILS', meta: { id: e } })
          }
        },
        k = function (e, t, n, a) {
          return function (r, i, c) {
            var s = c.api,
              u = Object(o.b)(r, {
                params: { external_product_id: t, success_url: n, cancel_url: a },
                request: s.SubscriptionPayments.fetchSubscriptionProductCheckoutUrl,
              }),
              d = g(i(), e)
            return d !== l.a.NONE && d !== l.a.FAILED
              ? Promise.resolve()
              : u({ actionTypes: f, context: 'FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL', meta: { id: e } })
          }
        },
        T = function () {
          return function (e, t, n) {
            var a = n.api,
              r = Object(o.b)(e, { params: {}, request: a.SubscriptionPayments.fetchProductSubscriptions }),
              i = y(t())
            return i !== l.a.NONE && i !== l.a.FAILED
              ? Promise.resolve()
              : r({ actionTypes: m, context: 'FETCH_PRODUCT_SUBSCRIPTIONS', meta: {} })
          }
        },
        O = function (e, t) {
          return function (n, a, r) {
            var i = r.api,
              c = Object(o.b)(n, {
                params: { return_url: t },
                request: i.SubscriptionPayments.fetchSubscriptionProductCustomerPortalUrl,
              }),
              s = _(a(), e)
            return s !== l.a.NONE && s !== l.a.FAILED
              ? Promise.resolve()
              : c({ actionTypes: p, context: 'FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL', meta: { id: e } })
          }
        }
      s.a.register(
        r()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              var n = t.meta.id
              return c()(
                c()({}, e),
                {},
                { products: c()(c()({}, e.products), {}, r()({}, n, { fetchStatus: l.a.LOADING })) },
              )
            case d.SUCCESS:
              var a = t.meta.id
              return c()(
                c()({}, e),
                {},
                { products: c()(c()({}, e.products), {}, r()({}, a, { fetchStatus: l.a.LOADED, details: t.payload })) },
              )
            case d.FAILURE:
              var i = t.meta.id
              return c()(
                c()({}, e),
                {},
                { products: c()(c()({}, e.products), {}, r()({}, i, { fetchStatus: l.a.FAILED, error: t.payload })) },
              )
            case f.REQUEST:
              var o = t.meta.id
              return c()(
                c()({}, e),
                {},
                { checkoutUrls: c()(c()({}, e.checkoutUrls), {}, r()({}, o, { fetchStatus: l.a.LOADING })) },
              )
            case f.SUCCESS:
              var s = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  checkoutUrls: c()(
                    c()({}, e.checkoutUrls),
                    {},
                    r()({}, s, { fetchStatus: l.a.LOADED, checkoutUrl: t.payload }),
                  ),
                },
              )
            case f.FAILURE:
              var u = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  checkoutUrls: c()(
                    c()({}, e.checkoutUrls),
                    {},
                    r()({}, u, { fetchStatus: l.a.FAILED, error: t.payload }),
                  ),
                },
              )
            case m.REQUEST:
              return c()(c()({}, e), {}, { productSubscriptions: { fetchStatus: l.a.LOADING } })
            case m.SUCCESS:
              return c()(
                c()({}, e),
                {},
                { productSubscriptions: { fetchStatus: l.a.LOADED, subscriptions: t.payload } },
              )
            case m.FAILURE:
              return c()(c()({}, e), {}, { productSubscriptions: { fetchStatus: l.a.FAILED, error: t.payload } })
            case p.REQUEST:
              var h = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  customerPortalUrls: c()(c()({}, e.customerPortalUrls), {}, r()({}, h, { fetchStatus: l.a.LOADING })),
                },
              )
            case p.SUCCESS:
              var E = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  customerPortalUrls: c()(
                    c()({}, e.customerPortalUrls),
                    {},
                    r()({}, E, { fetchStatus: l.a.LOADED, customerPortalUrl: t.payload }),
                  ),
                },
              )
            case p.FAILURE:
              var g = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  customerPortalUrls: c()(
                    c()({}, e.customerPortalUrls),
                    {},
                    r()({}, g, { fetchStatus: l.a.FAILED, error: t.payload }),
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
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.854-.225 3.917-.72 1.048-.481 1.866-1.147 2.381-2.025.489-.833.732-1.749.732-2.732 0-1.25-.356-2.336-1.128-3.184-.317-.348-.69-.635-1.113-.867.302-.21.572-.455.809-.738.675-.806 1.014-1.754 1.014-2.813 0-1.49-.605-2.722-1.786-3.626C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.498-.059.972-.189 1.414-.381l-.001.002c-.329.485-.747.911-1.228 1.254.005.104.007.209.007.313 0 3.202-2.476 6.895-7.005 6.895-1.39 0-2.684-.401-3.773-1.089.193.022.389.034.588.034 1.153 0 2.215-.388 3.058-1.038-1.078-.019-1.987-.72-2.3-1.682.15.028.305.043.463.043.224 0 .441-.029.648-.084-1.127-.223-1.975-1.202-1.975-2.376v-.031c.332.181.711.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.122-.859.333-1.218 1.214 1.466 3.028 2.431 5.075 2.532-.041-.178-.064-.362-.064-.551 0-1.339 1.102-2.424 2.462-2.424.708 0 1.348.294 1.797.765.561-.108 1.088-.31 1.563-.588-.183.563-.573 1.039-1.082 1.338zm14.776 12.285H25.64V2.625h5.222v18.378zm10.35.482c-2.163 0-3.844-.54-5.044-1.622-1.183-1.082-1.775-2.62-1.775-4.614V8.33h5.222v5.626c0 1.37.33 2.366.99 2.99.658.627 1.57.94 2.737.94 1.436 0 2.535-.39 3.295-1.167.76-.795 1.14-1.8 1.14-3.017V8.33H53v12.673h-5.12v-2.89c-.56 1.1-1.43 1.936-2.612 2.51-1.183.575-2.535.862-4.056.862zm33.311-5.729H60.53c.186.794.7 1.41 1.546 1.85.845.44 1.943.66 3.295.66 1 0 1.91-.152 2.74-.457.844-.322 1.495-.76 1.95-1.32l3.956 1.725c-.896 1.065-2.096 1.876-3.6 2.433-1.487.558-3.245.837-5.273.837-1.994 0-3.71-.262-5.146-.786-1.436-.542-2.543-1.32-3.32-2.333-.76-1.03-1.14-2.248-1.14-3.65 0-1.42.388-2.645 1.165-3.676.777-1.03 1.876-1.816 3.295-2.356 1.437-.558 3.11-.837 5.02-.837 1.994 0 3.7.296 5.12.887 1.437.575 2.527 1.403 3.27 2.485.744 1.08 1.116 2.373 1.116 3.877v.66l-.001.001zM69.35 13.17c-.032-.76-.455-1.377-1.266-1.85-.794-.473-1.825-.71-3.093-.71-1.25 0-2.272.228-3.066.684-.794.457-1.267 1.082-1.42 1.876h8.847-.002z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 76, height: 24 }), (t.a = l)
    },
    tM6R: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var a = { help: 'https://help.twitter.com/using-twitter/spaces', settings: 'https://twitter.com/settings/spaces' }
    },
    twgV: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DataSharingWithBusinessPartners', function () {
          return T
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        l = n('NeAX'),
        u = n('rxPX'),
        d = n('0KEI'),
        f = Object(u.a)()
          .propsFromState(function () {
            return { settings: l.selectUserPreferences }
          })
          .adjustStateProps(function (e) {
            return { allowPartnerships: e.settings.allowPartnerships }
          })
          .propsFromActions(function () {
            return {
              updateSettings: l.updateSettings,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'DATA_SHARING_WITH_BUSINESS_PARTNERS_SCREEN',
              ),
            }
          }),
        m = n('3XMw'),
        p = n.n(m),
        b = n('yoO3'),
        h = n('7JQg'),
        E = n('7FtF'),
        g = n('k89r'),
        v = n('RKmr'),
        y = n('e0ey'),
        S = p.a.h14ba864,
        _ = p.a.d7fcc4fa,
        w = p.a.d3c20d8f,
        C = p.a.jdaf84e3,
        k = { page: 'settings', section: 'data_sharing_with_business_partners' }
      function T(e) {
        var t = e.allowPartnerships,
          n = e.createLocalApiErrorHandler,
          a = e.location,
          i = e.updateSettings,
          o = Object(g.a)()
        return s.a.createElement(
          h.c,
          { namespace: k },
          s.a.createElement(
            b.a,
            null,
            s.a.createElement(
              E.a,
              { location: a, screenType: 'secondaryDetail', title: S },
              s.a.createElement(v.a, { description: _ }),
              s.a.createElement(y.a, {
                checked: t,
                helpText: C,
                label: w,
                learnMoreLink: 'https://support.twitter.com/articles/20175379',
                name: 'allowPartnerships',
                onChange: function (e, t) {
                  o.scribe(c()(c()({}, k), {}, { element: e, action: t ? 'enable' : 'disable' })),
                    i(r()({}, e, t)).catch(n({ showToast: !0 }))
                },
              }),
            ),
          ),
        )
      }
      var O = f(T)
      t.default = O
    },
    uAEl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return H
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('z84I'), n('hBvt'), n('ERkP')),
        c = n.n(i),
        o = n('v6aA'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('yoO3'),
        d = n('7JQg'),
        f = n('RKmr'),
        m = n('7FtF'),
        p = n('OySi'),
        b = 'accountAccessScreen',
        h = n('MWbm'),
        E = n('yiKp'),
        g = n.n(E),
        v = n('Lsrn'),
        y = n('k/Ka'),
        S = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(y.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [v.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M17.89 7.673c-.002-3.246-2.644-5.888-5.89-5.888S6.112 4.427 6.11 7.673v.002c0 .414.337.75.75.75.415 0 .75-.336.75-.75 0-2.42 1.97-4.39 4.39-4.39s4.39 1.97 4.39 4.39c0 .414.335.75.75.75.413 0 .75-.336.75-.75v-.002z',
              }),
              c.a.createElement('path', {
                d: 'M19.75 7.31H4.25C3.01 7.31 2 8.317 2 9.56v10.23c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V9.56c0-1.242-1.01-2.25-2.25-2.25zm.75 12.482c0 .413-.336.75-.75.75H4.25c-.414 0-.75-.337-.75-.75V9.56c0-.414.336-.75.75-.75h15.5c.414 0 .75.336.75.75v10.23z',
              }),
              c.a.createElement('path', {
                d: 'M12 11.72c-1.136 0-2.057.92-2.057 2.056 0 .87.543 1.61 1.307 1.91v1.397c0 .414.336.75.75.75s.75-.336.75-.75v-1.396c.764-.3 1.307-1.04 1.307-1.91 0-1.137-.92-2.058-2.057-2.058z',
              }),
            ),
          )
        }
      S.metadata = { width: 24, height: 24 }
      var _ = S,
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(y.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [v.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M6.11 4.25v1.86H4.25C3.01 6.11 2 7.12 2 8.36v11.39C2 20.99 3.01 22 4.25 22h11.39c1.24 0 2.25-1.01 2.25-2.25v-1.86h1.86c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2H8.36C7.12 2 6.11 3.01 6.11 4.25zm9.53 16.25H4.25c-.413 0-.75-.337-.75-.75V8.36c0-.412.337-.75.75-.75h11.39c.412 0 .75.338.75.75v11.39c0 .413-.338.75-.75.75zm4.11-17c.413 0 .75.337.75.75v11.39c0 .412-.337.75-.75.75h-1.86V8.36c0-1.24-1.01-2.25-2.25-2.25H7.61V4.25c0-.413.338-.75.75-.75h11.39z',
              }),
            ),
          )
        }
      w.metadata = { width: 24, height: 24 }
      var C = w,
        k = n('3JQt'),
        T = n('wz7L'),
        O = l.a.f8645654,
        L = l.a.b02df747,
        I = l.a.a2197725,
        A = l.a.j95edf76,
        P = l.a.g2841de4,
        F = l.a.ae72d4c4,
        R = l.a.h1abfbcd,
        M = l.a.j748604a,
        x = l.a.f280cc87,
        U = l.a.a310511c,
        D = { page: 'settings', section: 'security_and_account_access' }
      function H(e) {
        var t = e.location,
          n = (function (e) {
            return [
              { label: A, description: I, link: '/settings/security', Icon: _ },
              { label: F, description: P, link: '/settings/apps_and_sessions', Icon: C },
              e.isTrue('responsive_web_disconnect_third_party_sso_enabled')
                ? { label: R, description: M, link: '/settings/connected_accounts', Icon: k.a }
                : void 0,
              e.isTrue('responsive_web_delegate_enabled')
                ? {
                    description: U,
                    label: x,
                    link: '/settings/delegate?enable_filtered_bundle=bundle.Delegate',
                    Icon: T.a,
                  }
                : void 0,
            ]
          })(c.a.useContext(o.a).featureSwitches)
        return c.a.createElement(
          d.c,
          { namespace: D },
          c.a.createElement(
            u.a,
            null,
            c.a.createElement(
              m.a,
              { location: t, screenType: 'primaryDetail', title: O },
              c.a.createElement(
                h.a,
                { testID: b },
                c.a.createElement(f.a, { description: L }),
                n.map(function (e) {
                  return e && c.a.createElement(p.b, r()({}, e, { key: e.link }))
                }),
              ),
            ),
          ),
        )
      }
    },
    uFYP: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    uo4S: function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return C
      }),
        n.d(t, 'e', function () {
          return k
        }),
        n.d(t, 'd', function () {
          return T
        }),
        n.d(t, 'a', function () {
          return O
        }),
        n.d(t, 'c', function () {
          return I
        }),
        n.d(t, 'b', function () {
          return A
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('z84I'), n('1IsZ'), n('7x/C'), n('JtPf'), n('oEOe')),
        s = n('hqKg'),
        l = n('kGix'),
        u = n('XMGw'),
        d = n('Ssj5'),
        f = n('iChn'),
        m = n('3A2y'),
        p = ''.concat(u.a, '/sessions'),
        b = 'rweb/'.concat(p),
        h = o.a(b, 'FETCH_SESSIONS'),
        E = o.a(b, 'REVOKE_SESSION'),
        g = o.a(b, 'REVOKE_ALL_SESSIONS'),
        v = { fetchStatus: l.a.NONE, sessions: {} }
      function y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case h.REQUEST:
            return c()(c()({}, e), {}, { fetchStatus: l.a.LOADING })
          case h.FAILURE:
            return c()(c()({}, e), {}, { error: t.payload, fetchStatus: l.a.FAILED })
          case h.SUCCESS:
            return c()(
              c()({}, e),
              {},
              {
                error: null,
                fetchStatus: l.a.LOADED,
                sessions: Object(f.a)(_(t.payload), function (e) {
                  return e.token
                }),
              },
            )
          case E.SUCCESS:
            return c()(c()({}, e), {}, { sessions: Object(m.a)(e.sessions, t.meta.hashed_token) })
          default:
            return e
        }
      }
      d.a.register(r()({}, p, y))
      function S(e) {
        return {
          token: e.hashed_token,
          name: e.device_name,
          summary: e.device_summary,
          icon_type: e.icon_type,
          is_current_session: e.is_current_session,
          location: e.location,
          last_seen_time_ms: e.last_seen_at,
        }
      }
      var _ = function (e) {
          var t, n, a, r, i
          return null != e &&
            null !== (t = e.viewer) &&
            void 0 !== t &&
            null !== (n = t.user_results) &&
            void 0 !== n &&
            null !== (a = n.result) &&
            void 0 !== a &&
            a.sessions_list
            ? e.viewer.user_results.result.sessions_list
            : null !== (r = e.viewer) && void 0 !== r && null !== (i = r.user) && void 0 !== i && i.sessions_list
            ? e.viewer.user.sessions_list
            : e.sessions
            ? e.sessions.map(S)
            : []
        },
        w = function (e) {
          return e[p].sessions
        },
        C = Object(s.createSelector)(w, function (e) {
          return Object.values(e)
        }),
        k = function (e, t) {
          return w(e)[t]
        },
        T = function (e) {
          return e[p].fetchStatus
        },
        O = function (e) {
          return function (t, n) {
            return T(n()) === l.a.LOADED ? Promise.resolve() : t(L(e))
          }
        },
        L = function (e) {
          return function (t, n, a) {
            var r = a.api
            return o.b(t, { params: e, request: r.Settings.fetchSessions })({
              actionTypes: h,
              context: 'FETCH_SESSIONS',
            })
          }
        },
        I = function (e) {
          return function (t, n, a) {
            var r = a.api,
              i = { hashed_token: e }
            return o.b(t, { params: i, request: r.Settings.revokeSession })({
              actionTypes: E,
              context: 'REVOKE_SESSION',
              meta: { hashed_token: e },
            })
          }
        },
        A = function (e) {
          return function (t, n, a) {
            var r = a.api
            return o
              .b(t, { params: e, request: r.Settings.revokeAllSessions })({
                actionTypes: g,
                context: 'REVOKE_ALL_SESSIONS',
              })
              .then(function () {
                return L()(t, n, { api: r })
              })
          }
        }
    },
    vMn4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M21 3.25H6c-1.24 0-2.25 1.01-2.25 2.25v.75H3C1.76 6.25.75 7.26.75 8.5v10c0 1.24 1.01 2.25 2.25 2.25h15c1.24 0 2.25-1.01 2.25-2.25v-.75H21c1.24 0 2.25-1.01 2.25-2.25v-10c0-1.24-1.01-2.25-2.25-2.25zM2.25 8.5c0-.413.337-.75.75-.75h1.654C4.37 8.938 3.438 9.87 2.25 10.154V8.5zM3 19.25c-.413 0-.75-.337-.75-.75v-1.654c1.188.283 2.12 1.216 2.404 2.404H3zm15.75-.75c0 .413-.337.75-.75.75h-1.654c.283-1.188 1.216-2.12 2.404-2.404V18.5zm0-3.174c-2.016.323-3.6 1.908-3.924 3.924H6.174c-.323-2.016-1.908-3.6-3.924-3.924v-3.652c2.016-.323 3.6-1.908 3.924-3.924h8.652c.323 2.016 1.908 3.6 3.924 3.924v3.652zm0-5.172c-1.188-.283-2.12-1.216-2.404-2.404H18c.413 0 .75.337.75.75v1.654zm3 5.346c0 .413-.337.75-.75.75h-.75V8.5c0-1.24-1.01-2.25-2.25-2.25H5.25V5.5c0-.413.337-.75.75-.75h15c.413 0 .75.337.75.75v10z',
              }),
              c.a.createElement('path', {
                d: 'M10.5 9.316c-1.878 0-3.406 1.877-3.406 4.184s1.528 4.184 3.406 4.184 3.406-1.877 3.406-4.184-1.528-4.184-3.406-4.184zm0 6.868c-1.033 0-1.906-1.23-1.906-2.684s.873-2.684 1.906-2.684 1.906 1.23 1.906 2.684-.873 2.684-1.906 2.684z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    wsOx: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'd', function () {
          return g
        }),
        n.d(t, 'a', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return y
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('yH/f'), n('kGix')),
        s = n('Ssj5'),
        l = n('RqPI'),
        u = n('oEOe'),
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
            var n,
              a = null === (n = t.payload) || void 0 === n ? void 0 : n.duration
            return c()(c()({}, e), {}, { duration: a, updateSettingsFetchStatus: o.a.LOADED })
          case m.REQUEST:
            return c()(c()({}, e), {}, { fetchSettingsFetchStatus: o.a.LOADING })
          case m.SUCCESS:
            var r,
              i,
              s,
              l = !(null === (r = t.payload) || void 0 === r || !r.enabled),
              u = null === (i = t.payload) || void 0 === i ? void 0 : i.duration,
              d = null === (s = t.payload) || void 0 === s ? void 0 : s.expiration
            return c()(c()({}, e), {}, { enabled: l, duration: u, expiration: d, fetchSettingsFetchStatus: o.a.LOADED })
          case m.FAILURE:
            return c()(c()({}, e), {}, { fetchSettingsFetchStatus: o.a.FAILED })
          default:
            return e
        }
      }
      s.a.register(r()({}, d, b))
      var h = function (e) {
          return e.safetyMode || {}
        },
        E = function (e) {
          return e.safetyMode.fetchSettingsFetchStatus
        },
        g = function (e) {
          return e.safetyMode.updateSettingsFetchStatus
        },
        v = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(u.b)(e, { request: a.SettingsGraphQL.fetchSafetyModeSettings })({
              actionTypes: m,
              context: 'FETCH_SAFETY_MODE_SETTINGS',
            })
          }
        },
        y = function (e) {
          return function (t, n, a) {
            var r = a.api,
              i = n(),
              c = { userId: Object(l.r)(i) || '', duration: e }
            return Object(u.c)(t, { params: c, request: r.SettingsGraphQL.updateSafetyModeSettings })({
              actionTypes: f,
              context: 'UPDATE_SAFETY_MODE_SETTINGS',
              payload: c,
            })
          }
        }
    },
    wz7L: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    x8q0: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        i = n('G6rE'),
        c = n('rxPX'),
        o = Object(c.a)()
          .propsFromState(function () {
            return { loggedInUser: i.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userId: (null == t ? void 0 : t.id_str) || '' }
          })
          .withAnalytics({ component: 'safety_mode_modal_flagged_accounts' }),
        s = n('KEM+'),
        l = n.n(s),
        u = n('yiKp'),
        d = n.n(u),
        f = n('QIgh'),
        m = n('8UdT'),
        p = n('88ay'),
        b = n('Ka9G'),
        h = d()(d()({}, f.default), {}, l()({}, m.b.User, Object(b.a)({ decoration: p.d }))),
        E = n('jHSc'),
        g = n('fTQJ'),
        v = n('118N'),
        y = n('t62R'),
        S = n('rHpw'),
        _ = n('FIs5'),
        w = n('3XMw'),
        C = n.n(w),
        k = C.a.f2351b97,
        T = C.a.e9f1fbcb,
        O = r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'd724f426' },
            r.a.createElement(
              y.b,
              { style: { display: 'block', paddingBottom: S.a.theme.spaces.space20 } },
              C.a.c51dcdfc,
            ),
          ),
          r.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'h3d97f03' },
            r.a.createElement(y.b, { link: '/settings/blocked/all' }, C.a.bd0a88c1),
          ),
        ),
        L = function () {
          return r.a.createElement(_.a, { header: T, message: O })
        }
      t.default = o(function (e) {
        var t = e.history,
          n = e.userId,
          a = r.a.useMemo(
            function () {
              return Object(v.a)(n)
            },
            [n],
          )
        return r.a.createElement(
          E.b,
          {
            backButtonType: 'back',
            history: t,
            onBackClick: function () {
              t.goBack()
            },
            title: k,
          },
          r.a.createElement(g.a, { entryConfiguration: h, module: a, renderEmptyState: L, title: k }),
        )
      })
    },
    xJPF: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ManageSubscriptionScreen', function () {
          return k
        })
      n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('wrlS'),
        c = n('rxPX'),
        o = n('su2V'),
        s = n('cnVF'),
        l = function (e) {
          return Object(i.d)(e).isTrue('subscriptions_stripe_testing') ? s.G : s.D
        },
        u = Object(c.a)()
          .propsFromState(function () {
            return {
              productSubscriptionsFetchStatus: o.j,
              subscription: function (e) {
                return Object(o.i)(e, s.F)
              },
              customerPortalUrlFetchStatus: function (e) {
                return Object(o.h)(e, l(e))
              },
              customerPortalUrl: function (e) {
                return Object(o.g)(e, l(e))
              },
              twitterBlueID: l,
            }
          })
          .propsFromActions(function () {
            return { fetchProductSubscriptions: o.a, fetchSubscriptionProductCustomerPortalUrl: o.c }
          })
          .withAnalytics({ page: 'subscriptions', section: 'management' }),
        d = n('v//M'),
        f = n('3XMw'),
        m = n.n(f),
        p = n('Wc+h'),
        b = n('yoO3'),
        h =
          (n('yH/f'),
          Object.freeze({ AppleAppStore: 'AppleAppStore', GooglePlay: 'GooglePlay', TPay: 'TPay', Stripe: 'Stripe' })),
        E = n('VKnd'),
        g = n('7FtF'),
        v = n('zCf4'),
        y = n('MWbm'),
        S = n('cm6r'),
        _ = n('FR63'),
        w = n('t62R'),
        C = n('RKmr')
      function k(e) {
        var t = e.analytics,
          n = e.customerPortalUrl,
          a = e.customerPortalUrlFetchStatus,
          i = e.fetchProductSubscriptions,
          c = e.fetchSubscriptionProductCustomerPortalUrl,
          o = e.productSubscriptionsFetchStatus,
          s = e.subscription,
          l = e.twitterBlueID,
          u = Object(v.g)(),
          f = m.a.ib35705d,
          k = m.a.e5fff0c7,
          O = m.a.baf97715,
          L = 'Expire' === (null == s ? void 0 : s.state) ? ''.concat(k, ' ').concat(O) : k,
          I = m.a.fff413dc,
          A = m.a.h201c4c1,
          P = m.a.i8385a2c,
          F = m.a.h80834de,
          R = m.a.ib8ebf3b,
          M = function () {
            i()
          }
        r.a.useEffect(function () {
          t.scribe({ action: 'impression' })
        }, []),
          r.a.useEffect(
            function () {
              M()
            },
            [i],
          )
        var x = function () {
          t.scribe({
            action: 'click',
            data: {
              payment_source: (null == s ? void 0 : s.payment_source) || '',
              status: (null == s ? void 0 : s.state) || '',
            },
          }),
            c(l, E.b)
        }
        return r.a.createElement(
          b.a,
          null,
          r.a.createElement(
            g.a,
            { location: u, title: f },
            r.a.createElement(C.a, { description: L }),
            r.a.createElement(
              y.a,
              null,
              r.a.createElement(d.a, {
                fetchStatus: o,
                onRequestRetry: M,
                render: function () {
                  var e,
                    t = null == s ? void 0 : s.payment_source
                  t && t !== h.Stripe && (e = t === h.AppleAppStore ? A : t === h.GooglePlay ? P : F)
                  var n = R({ mobilePlatform: e })
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    t === h.Stripe
                      ? r.a.createElement(
                          S.a,
                          { accessibilityRole: 'button', onPress: x, style: T.manageSubscriptionInteraction },
                          r.a.createElement(
                            _.a,
                            null,
                            r.a.createElement(
                              y.a,
                              { style: T.manageSubscriptionSection },
                              r.a.createElement(w.b, null, I),
                              r.a.createElement(p.a, { style: T.goToSubscriptionPortalIcon }),
                            ),
                          ),
                        )
                      : r.a.createElement(C.a, { description: n }),
                  )
                },
                retryable: !0,
              }),
              r.a.createElement(d.a, {
                fetchStatus: a,
                onRequestRetry: function () {
                  c(l, E.b)
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
      var T = n('rHpw').a.create(function (e) {
          return {
            manageSubscriptionSection: { flexDirection: 'row', justifyContent: 'space-between' },
            goToSubscriptionPortalIcon: { color: e.colors.gray700 },
            manageSubscriptionInteraction: { cursor: 'pointer' },
          }
        }),
        O = u(k)
      t.default = O
    },
    xrkw: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
  },
])
//# sourceMappingURL=WIPED
