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
        l = n.n(o),
        s = n('ERkP'),
        u = n.n(s),
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
        y = n.n(g),
        v = n('yoO3'),
        S = n('7JQg'),
        _ = n('7FtF'),
        w = n('k89r'),
        C = n('RKmr'),
        k = n('e0ey'),
        T = n('eb3s'),
        O = y.a.bcae496c,
        I = y.a.acc60551,
        L = y.a.f80a33af,
        A = y.a.b276596b,
        P = y.a.c966aaf4,
        R = y.a.e8313b32,
        F = y.a.f1d46fd5,
        x = y.a.cfd2f35d,
        M = y.a.f6c8ccc7,
        U = y.a.f748b0fc,
        D = { page: 'settings', section: 'off_twitter_activity' }
      function H(e) {
        var t = e.allowDeviceAccess,
          n = e.createLocalApiErrorHandler,
          a = e.isEUUser,
          i = e.location,
          o = e.updateSettings,
          s = Object(w.a)(),
          d = (function (e, t, n) {
            var a = u.a.useState(!1),
              r = l()(a, 2),
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
          s.scribe(c()(c()({}, D), {}, { element: e, action: t ? 'enable' : 'disable' })),
            o(r()({}, e, t)).catch(n({ showToast: !0 }))
        }
        return u.a.createElement(
          S.c,
          { namespace: D },
          u.a.createElement(
            v.a,
            null,
            u.a.createElement(
              _.a,
              { location: i, screenType: 'secondaryDetail', title: O },
              u.a.createElement(C.a, { description: I }),
              u.a.createElement(k.a, {
                checked: d.enabled,
                disabled: d.controlDisabled,
                helpText: a ? P : A,
                label: L,
                learnMoreLink: 'https://support.twitter.com/articles/20169421',
                name: 'allowCookieUse',
                onChange: d._handleChanged,
              }),
              u.a.createElement(k.a, {
                checked: t,
                helpText: U,
                label: M,
                learnMoreLink: 'https://support.twitter.com/articles/20175257',
                name: 'allowDeviceAccess',
                onChange: f,
              }),
            ),
            d.showConfirmation &&
              u.a.createElement(T.a, {
                cancelButtonLabel: x,
                confirmButtonLabel: F,
                onCancel: d._handleConfirmationCancel,
                onConfirm: d._handleConfirmationConfirm,
                text: R,
              }),
          ),
        )
      }
      var j = E(H)
      t.default = j
    },
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
        i = n('yLYC'),
        c = n('Ud88'),
        o = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        l = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        s = l.fetchQueryDeduped,
        u = l.fetchQuery
      e.exports = function (e, t, n) {
        o()
        var l,
          d = c(),
          f = t.fetchKey,
          m = t.fetchPolicy,
          p = t.source,
          b = t.variables,
          h = t.networkCacheConfig,
          E = i(e, b, h)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          E.request.node.params.name !== t.name && a(!1),
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
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var g = u(d, E)
          l = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != p && d === t.environment ? p.ifEmpty(g) : (t.environment, g),
            fetchKey: f,
            fetchPolicy: m,
            query: E,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(l)
      }
    },
    '23An': function (e, t, n) {
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
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('fyvP'),
        c = n('rHpw'),
        o = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(o.a, { style: l.root }, r.a.createElement(i.a, e))
      }
      var l = c.a.create(function (e) {
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
        l = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        f = n.n(d),
        m = n('KEM+'),
        p = n.n(m),
        b = (n('2G9S'), n('uFXj'), n('ERkP')),
        h = n.n(b),
        E = n('t62R'),
        g = n('rHpw'),
        y = n('MWbm'),
        v = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(l()(e), '_renderSubtextAndLink', function () {
                var t = e.props.subtext
                return h.a.createElement(E.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
              }),
              p()(l()(e), '_renderLearnMore', function () {
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
                    y.a,
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
    '4BrD': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        l = n('k/Ka'),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '5Y3x': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'monetizationSettingsQuery', function () {
          return F
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = (n('enFi'), n('3XMw')),
        c = n.n(i),
        o = n('yiKp'),
        l = n.n(o),
        s = n('Lsrn'),
        u = n('k/Ka'),
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
        p = n('yoO3'),
        b = n('7FtF'),
        h = n('zCf4'),
        E = n('n0Rl'),
        g = n('6vad'),
        y = n('0yYu'),
        v = n('OySi'),
        S = n('Irs7'),
        _ = c.a.d299431b,
        w = c.a.h93824cc,
        C = c.a.a6777c1b,
        k = c.a.c1b71878,
        T = c.a.e939cc53,
        O = c.a.ibb5e1c8,
        I = c.a.b255df58,
        L = c.a.b3f834c7,
        A = c.a.i724fb49,
        P = c.a.f66d24be,
        R = { Approved: T, NotStarted: null, Rejected: O, Submitted: I, Waitlisted: L },
        F = void 0 !== f ? f : (f = n('jN9l')),
        x = Object(E.b)(F, { errorConfig: { context: 'MONETIZATION_SETTINGS' } })
      t.default = r.a.memo(
        Object(S.a)(
          function () {
            var e = Object(h.g)()
            return r.a.createElement(x, {
              render: function (t) {
                var n,
                  a,
                  i,
                  c,
                  o = t.data,
                  l = t.error,
                  s = !l && !(null == o || null === (n = o.viewer) || void 0 === n || !n.is_active_creator),
                  u =
                    (!l &&
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
                  d = s ? k : R[u]
                return r.a.createElement(
                  p.a,
                  null,
                  r.a.createElement(
                    b.a,
                    { location: e, screenType: 'primaryDetail', title: _ },
                    r.a.createElement(g.b, { text: w }),
                    r.a.createElement(v.b, { Icon: m, description: d, label: C, link: '/settings/superfollows' }),
                    r.a.createElement(y.a, null),
                    r.a.createElement(g.b, { text: A }),
                    r.a.createElement(v.a, { label: P, link: 'https://help.twitter.com/using-twitter#creators' }),
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
          return F
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('S/HT'),
        c = n('RqPI'),
        o = n('rxPX'),
        l = n('0KEI'),
        s = n('FDFL'),
        u = function (e) {
          var t = Object(c.p)(e)
          return t && Object(s.b)(e, t)
        },
        d = Object(o.a)()
          .propsFromState(function () {
            return { languageName: u, languageCode: c.p }
          })
          .propsFromActions(function () {
            return {
              fetchCountryNamesIfNeeded: i.a,
              fetchAvailableLanguagesIfNeeded: s.a,
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)('LANGUAGES_SCREEN'),
            }
          }),
        f = n('3XMw'),
        m = n.n(f),
        p = n('yoO3'),
        b = n('7JQg'),
        h = n('7FtF'),
        E = n('RKmr'),
        g = n('6vad'),
        y = n('csss'),
        v = n('0yYu'),
        S = m.a.d495680d,
        _ = m.a.f9c98140,
        w = m.a.a4b69cbb,
        C = m.a.da3b2587,
        k = m.a.a4b69cbb,
        T = m.a.cab61d58,
        O = m.a.f0853ba6,
        I = m.a.bca1de49,
        L = m.a.c3aa76c3,
        A = m.a.b2a77838,
        P = m.a.c3aa76c3,
        R = { page: 'settings', section: 'languages' }
      function F(e) {
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
            { namespace: R },
            r.a.createElement(
              p.a,
              null,
              r.a.createElement(
                h.a,
                { location: o, screenType: 'secondaryDetail', title: S },
                r.a.createElement(E.a, { description: _ }),
                r.a.createElement(g.b, { text: w }),
                r.a.createElement(E.a, { description: C }),
                r.a.createElement(y.a, { description: c, label: k, link: '/settings/language' }),
                r.a.createElement(v.a, null),
                r.a.createElement(g.b, { text: T }),
                r.a.createElement(E.a, { description: O }),
                r.a.createElement(y.a, { label: I, link: '/i/flow/language_selector' }),
                r.a.createElement(v.a, null),
                r.a.createElement(g.b, { text: L }),
                r.a.createElement(E.a, { description: A }),
                r.a.createElement(y.a, { label: P, link: '/settings/your_twitter_data/language' }),
              ),
            ),
          )
        )
      }
      var x = d(F)
      t.default = x
    },
    '6qBT': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return j
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('v6aA'),
        l = n('3XMw'),
        s = n.n(l),
        u = n('yoO3'),
        d = n('7JQg'),
        f = n('7FtF'),
        m = (n('z84I'), n('1t7P'), n('jQ/y'), n('uFXj'), n.p + 'block_party.5a58d7a5.png'),
        p = n.p + 'bodyguard_ai.51f7c3c5.png',
        b = n('Bwid'),
        h = n.p + 'moderate.366e1895.png',
        E = n('Irs7'),
        g = n('htQn'),
        y = n('3rX5'),
        v = n('mw9i'),
        S = n('t62R'),
        _ = n('/yvb'),
        w = n('mjJ+'),
        C = n('IG7M'),
        k = n('rHpw'),
        T = [
          {
            url: 'https://developer.twitter.com/en/community/toolbox/block-party',
            title: 'BlockParty App',
            avatarURI: m,
            description:
              'Say "bye-bye" to trolls with a suite of anti-harassment tools to help you reclaim your Twitter experience.',
          },
          {
            url: 'https://developer.twitter.com/en/community/toolbox/bodyguard',
            title: 'Bodyguard.ai',
            avatarURI: p,
            description: 'Protecting people against toxic content.',
          },
          {
            url: 'https://developer.twitter.com/en/community/toolbox/moderate',
            title: 'Moderate',
            avatarURI: h,
            description:
              'Improve your social media experience and beat the trolls with simple, AI based moderation tools.',
          },
        ],
        O = k.a.create(function (e) {
          return {
            root: { display: 'flex', paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
            headerContainer: { display: 'flex', justifyContent: 'space-between' },
            headerText: { flexDirection: 'row', justifyContent: 'space-between' },
            headerTitle: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
            titleSubText: { marginTop: e.spaces.space4 },
            toolboxHeader: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: e.spaces.space4,
            },
            toolboxItem: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: e.spaces.space12,
            },
            avatar: {
              borderColor: e.colors.gray100,
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.small,
              width: e.spaces.space48,
              height: e.spaces.space48,
            },
            toolboxRightContent: { flex: '1', paddingHorizontal: e.spaces.space16 },
            footerLink: { marginTop: e.spaces.space12 },
          }
        }),
        I = function (e) {
          var t = e.onDismiss,
            n = Object(E.b)()
          c.a.useEffect(
            function () {
              n.scribe({ action: 'show', component: 'TwitterToolboxUpsell' })
            },
            [n],
          )
          var a = c.a.useCallback(
              function (e) {
                n.scribe({ action: 'click', component: 'TwitterToolboxUpsell', element: e })
              },
              [n],
            ),
            r = c.a.useCallback(
              function () {
                return T.map(function (e) {
                  return c.a.createElement(
                    g.a,
                    { key: e.title, style: O.toolboxItem, withInteractiveStyling: !1 },
                    c.a.createElement(y.a, { source: { uri: e.avatarURI }, style: O.avatar }),
                    c.a.createElement(
                      v.a,
                      { style: O.toolboxRightContent },
                      c.a.createElement(S.b, { size: 'body', style: O.toolboxHeader, weight: 'bold' }, e.title),
                      c.a.createElement(S.b, { size: 'subtext2' }, e.description),
                    ),
                    c.a.createElement(
                      _.a,
                      {
                        link: e.url,
                        onClick: function () {
                          return a(e.title)
                        },
                        testID: ''.concat(e.title, ' button'),
                        type: 'primaryOutlined',
                      },
                      'Learn more',
                    ),
                  )
                })
              },
              [a],
            ),
            i = c.a.useCallback(
              function (e) {
                return c.a.createElement(w.a, {
                  items: [{ Icon: b.a, text: 'Hide this', onClick: t }],
                  onCloseRequested: e,
                })
              },
              [t],
            )
          return c.a.createElement(
            v.a,
            { style: O.root },
            c.a.createElement(
              v.a,
              { style: O.headerContainer },
              c.a.createElement(
                v.a,
                { style: O.headerText },
                c.a.createElement(
                  S.b,
                  { size: 'headline1', testID: 'title', weight: 'heavy' },
                  'Discover more blocking tools',
                ),
                c.a.createElement(C.a, { renderActionMenu: i }),
              ),
              c.a.createElement(
                S.b,
                { color: 'gray700', size: 'subtext2', style: O.titleSubText, testID: 'subTitle' },
                'The Twitter Toolbox offers more solutions to improve your experience on Twitter.',
              ),
            ),
            r(),
            c.a.createElement(
              S.b,
              {
                link: 'https://developer.twitter.com/en/community/toolbox#safety',
                onPress: function () {
                  return a('View Twitter Toolbox')
                },
                style: O.footerLink,
              },
              'View Twitter Toolbox',
            ),
          )
        },
        L = n('MWbm'),
        A = n('RKmr'),
        P = n('csss'),
        R = s.a.cbd449af,
        F = s.a.ab125232,
        x = s.a.a5f32aa2,
        M = s.a.daef29b7,
        U = s.a.i0dd9b9d,
        D = s.a.aaafffd9,
        H = { page: 'settings', section: 'mute_and_block' }
      function j(e) {
        var t = c.a.useContext(o.a).featureSwitches,
          n = e.location,
          a = t.isTrue('responsive_web_drew_mute_and_block_enabled'),
          i = c.a.useState(a),
          l = r()(i, 2),
          s = l[0],
          m = l[1]
        return c.a.createElement(
          d.c,
          { namespace: H },
          c.a.createElement(
            u.a,
            null,
            c.a.createElement(
              f.a,
              { location: n, screenType: 'secondaryDetail', title: R },
              c.a.createElement(
                L.a,
                null,
                c.a.createElement(A.a, { description: F }),
                c.a.createElement(P.a, { label: x, link: '/settings/blocked/all' }),
                c.a.createElement(P.a, { label: M, link: '/settings/muted/all' }),
                c.a.createElement(P.a, { label: U, link: '/settings/muted_keywords' }),
                c.a.createElement(P.a, { label: D, link: '/settings/notifications/advanced_filters' }),
                s
                  ? c.a.createElement(I, {
                      onDismiss: function () {
                        m(!1)
                      },
                    })
                  : null,
              ),
            ),
          ),
        )
      }
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
        l = o.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        s = n('7Mjr'),
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
          y = e.text,
          v = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return r.a.createElement(c.a, { style: l.icon })
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
            r.a.createElement(f.a, { style: p.icon }, v),
            r.a.createElement(
              i.b,
              { numberOfLines: 3, size: 'headline1', style: S, weight: 'heavy', withHashflags: !0 },
              y,
            ),
            r.a.createElement(
              f.a,
              { style: p.rightControlGroup },
              n ? r.a.createElement(f.a, { style: S }, r.a.createElement(s.a, { style: p.iconArrow })) : null,
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
        l = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        f = n.n(d),
        m = n('KEM+'),
        p = n.n(m),
        b = (n('2G9S'), n('ERkP')),
        h = n.n(b),
        E = n('P1r1'),
        g = n('G6rE'),
        y = n('rxPX'),
        v = n('0KEI'),
        S = Object(y.a)()
          .propsFromState(function () {
            return { fetchStatus: E.n, loggedInUser: g.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: E.f,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        _ = n('v//M'),
        w = n('3XMw'),
        C = n.n(w),
        k = n('M2mT'),
        T = 'settingsDetailSave',
        O = n('mw9i'),
        I = n('0yYu'),
        L = n('/yvb'),
        A = n('rHpw'),
        P = C.a.i2209530,
        R = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              p()(l()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return h.a.createElement(_.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              p()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.onSubmit,
                  r = t.submitDisabled,
                  i = t.submitLabel,
                  c = t.submitType,
                  o = t.withMarginBottom
                return h.a.createElement(
                  O.a,
                  { style: [F.contentRoot, o && F.withMarginBottom] },
                  n,
                  a
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(I.a, null),
                        h.a.createElement(
                          O.a,
                          { style: F.buttonContainer },
                          h.a.createElement(L.a, { disabled: r, onPress: a, style: F.button, testID: T, type: c }, i),
                        ),
                      )
                    : null,
                )
              }),
              p()(l()(e), '_handleFetch', function () {
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
                    l = this.getBackLocation(),
                    s = t ? '@'.concat(t.screen_name) : void 0
                  return h.a.createElement(
                    k.a,
                    {
                      backLocation: l,
                      onBackClick: n,
                      rightControl: a,
                      screenType: r,
                      secondaryBar: i,
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
            n
          )
        })(h.a.Component)
      p()(R, 'defaultProps', { submitLabel: P, submitType: 'brandFilled', withMarginBottom: !0 })
      var F = A.a.create(function (e) {
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
      t.a = S(R)
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
        l = n('KEM+'),
        s = n.n(l),
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
          s()(a, m.b.Message, Object(p.a)({})),
          s()(a, m.b.Tombstone, h.a),
          s()(a, m.b.Tweet, Object(E.a)({ displayBlocked: !0 })),
          s()(a, m.b.TimelineCursor, Object(f.a)({})),
          a),
        ),
        y = n('3XMw'),
        v = n.n(y),
        S = n('yoO3'),
        _ = n('fTQJ'),
        w = n('WpDa'),
        C = n('ZNT5'),
        k = n('7JQg'),
        T = n('7FtF'),
        O = n('TnO6'),
        I = v.a.f154bd64,
        L = { page: 'settings', component: 'autoblocked_account_tweets' },
        A = { context: 'safety_mode' },
        P = v.a.e9f1fbcb,
        R = v.a.de9b6641,
        F = function () {
          return i.a.createElement(o.a, { header: P, message: R })
        }
      t.default = function (e) {
        var t = e.history,
          n = e.location,
          a = e.match,
          r = a.params.userId,
          o = i.a.useContext(c.a).featureSwitches,
          l = i.a.useMemo(
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
          s = o.isTrue('rito_safety_mode_modal_prompt_enabled')
            ? i.a.createElement(O.b, { history: t, location: n, match: a, timelineType: O.a.ActionedTweets })
            : null
        return i.a.createElement(
          k.c,
          { data: A, namespace: L },
          i.a.createElement(
            S.a,
            null,
            i.a.createElement(
              T.a,
              { screenType: 'secondaryDetail', title: I, withMarginBottom: !1 },
              i.a.createElement(_.a, { entryConfiguration: g, footer: s, module: l, renderEmptyState: F, title: I }),
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
          return l
        }),
        n.d(t, 'd', function () {
          return s
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
      function l(e) {
        Object(r.b)({ consent_version: 2, text_version: i, 1: !0 }, e)
      }
      function s(e) {
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
          return U
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('KqXw'), n('WNMA'), n('TJCb'), n('7x/C'), n('DZ+c'), n('z84I'), n('6U7i'), n('ERkP')),
        l = n.n(o),
        s = n('v6aA'),
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
          .withAnalytics({ page: 'settings', section: 'undo_tweet' }),
        p = n('5oBF'),
        b = n('v//M'),
        h = n('3XMw'),
        E = n.n(h),
        g = n('/de5'),
        y = n('yoO3'),
        v = n('7FtF'),
        S = n('0KEI'),
        _ = n('ehR8'),
        w = n('MWbm'),
        C = n('RKmr'),
        k = n('e0ey'),
        T = n('fyvP'),
        O = n('rHpw'),
        I = E.a.de43eaf2,
        L = E.a.b6ab9962,
        A = E.a.jdceda6f,
        P = E.a.j45978a8,
        R = E.a.be077e8b,
        F = E.a.i9028824,
        x = E.a.j905e6fe,
        M = E.a.e2c39a4c
      function U(e) {
        var t = e.analytics,
          n = e.undoTweetSettings,
          a = e.updateSettings,
          i = e.userClaimsFetchStatus,
          o = n.durationSecs,
          u = n.original,
          d = n.quote,
          f = n.reply,
          m = n.thread,
          h = Object(_.a)(),
          O = h.history,
          U = h.location,
          H = h.match,
          j = l.a.useContext(s.a),
          N = j.featureSwitches,
          z = j.userClaims,
          B = (o || p.a).toString(),
          K = Object(S.useCreateLocalApiErrorHandler)('UNDO_TWEET_SCREEN_CONTEXT'),
          V = z.isTrueAndEnabled('subscriptions_feature_1003'),
          Q = N.isTrue('subscriptions_product_feature_list_api_enabled'),
          G = E.a.i3b7a017,
          W = [5, 10, 20, 30, 60].map(function (e) {
            return { label: G(e), value: e.toString() }
          })
        function X(e, n) {
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
                      r && K({})(e)
                  })
              : a({ undoPreview: i })
          }
        }
        function q(e, t) {
          var a = {
            product_feature_id: 'undoTweet',
            product_feature_settings_element: e,
            product_feature_settings_value: t,
          }
          'period' !== e
            ? X({ undoPreview: c()(c()({}, n), {}, r()({}, e, !n[e])) }, a)
            : X({ undoPreview: c()(c()({}, n), {}, { durationSecs: Number(t) }) }, a)
        }
        return l.a.createElement(b.a, {
          accessibilityLabel: F,
          fetchStatus: i,
          render: function () {
            return V
              ? l.a.createElement(
                  y.a,
                  null,
                  l.a.createElement(
                    v.a,
                    { location: U, title: I },
                    l.a.createElement(C.a, { description: M }),
                    l.a.createElement(k.a, { checked: void 0 === u || u, label: L, name: 'original', onChange: q }),
                    l.a.createElement(k.a, { checked: void 0 === f || f, label: A, name: 'reply', onChange: q }),
                    l.a.createElement(k.a, { checked: void 0 === d || d, label: P, name: 'quote', onChange: q }),
                    l.a.createElement(k.a, { checked: void 0 === m || m, label: R, name: 'thread', onChange: q }),
                    l.a.createElement(
                      w.a,
                      { style: D.radioGroup },
                      l.a.createElement(T.a, { label: x, name: 'period', onChange: q, options: W, value: B }),
                    ),
                  ),
                )
              : l.a.createElement(g.b, { history: O, location: U, match: H })
          },
        })
      }
      var D = O.a.create(function (e) {
        return { radioGroup: { padding: e.spaces.space16 } }
      })
      t.default = m(U)
    },
    CiSv: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        c = n.n(i),
        o = n('7FtF'),
        l = n('G6rE'),
        s = n('rxPX'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { loggedInUser: l.e.selectLoggedInUser }
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
        l = n('3XMw'),
        s = n.n(l),
        u = n('yoO3'),
        d = n('7JQg'),
        f = n('7FtF'),
        m = 'privacyAndSafetyScreen',
        p = n('MWbm'),
        b = n('RKmr'),
        h = n('6vad'),
        E = n('0yYu'),
        g = n('S+H3'),
        y = n('TW8A'),
        v = n('yiKp'),
        S = n.n(v),
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
        I = n('qz6Z'),
        L = n('SOvA'),
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
      var R = P,
        F = n('4BrD'),
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
      x.metadata = { width: 24, height: 24 }
      var M = x,
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
        z = s.a.cad53943,
        B = s.a.df5fa1d0,
        K = s.a.a244ed50,
        V = s.a.e908903a,
        Q = s.a.h7a0dfbe,
        G = s.a.b38d81ae,
        W = s.a.f8d4746b,
        X = s.a.f2bd9c47,
        q = s.a.b2810ee7,
        Y = s.a.f01fd982,
        J = s.a.dcc5aa06,
        Z = s.a.cbd449af,
        $ = s.a.ab125232,
        ee = s.a.d4986f85,
        te = s.a.cc950d94,
        ne = s.a.ded416bf,
        ae = s.a.fe37f854,
        re = s.a.fd4d9068,
        ie = s.a.ab987f3b,
        ce = s.a.d3d319d5,
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
          n,
          a,
          i = e.location,
          l = c.a.useContext(o.a).featureSwitches,
          s = l.isTrue('rito_safety_mode_settings_enabled'),
          v = l.isTrue('voice_rooms_sharing_listening_data_with_followers_setting_enabled'),
          S = l.isTrue('responsive_web_cookie_compliance_banner_enabled')
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
                    { label: V, description: Q, link: '/settings/audience_and_tagging', Icon: g.a },
                    { label: G, description: W, link: '/settings/your_tweets', Icon: y.a },
                    { label: X, description: q, link: '/settings/content_you_see', Icon: k },
                    n ? { label: Y, description: J, link: '/settings/safety_mode', Icon: O } : void 0,
                    { label: Z, description: $, link: '/settings/mute_and_block', Icon: I.a },
                    { label: ee, description: te, link: '/settings/direct_messages', Icon: L.a },
                    a ? { label: ne, description: ae, link: '/settings/spaces', Icon: A.a } : void 0,
                    { label: re, description: ie, link: '/settings/contacts', Icon: R },
                  ].filter(Boolean)
                })({ includeSafetyMode: s, includeSpacesSection: v }).map(function (e) {
                  return c.a.createElement(N.b, r()({}, e, { key: e.label }))
                }),
                c.a.createElement(E.a, null),
                c.a.createElement(h.b, { text: ce }),
                ((t = { includeCookiePreferences: S }),
                (n = t.includeCookiePreferences),
                (a = void 0 !== n && n),
                [
                  { label: oe, description: le, link: '/settings/ads_preferences', Icon: F.a },
                  a ? { label: se, description: ue, link: '/settings/cookie_preferences', Icon: M } : void 0,
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
        l = n.n(o),
        s = n('yoO3'),
        u = n('7JQg'),
        d = n('RKmr'),
        f = n('7FtF'),
        m = n('OySi'),
        p = 'accessibilityScreen',
        b = n('MWbm'),
        h = n('yiKp'),
        E = n.n(h),
        g = n('Lsrn'),
        y = n('k/Ka'),
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
      v.metadata = { width: 24, height: 24 }
      var S = v,
        _ = n('tuke'),
        w = n('Zg3A'),
        C = n('xrkw'),
        k = l.a.f2b23061,
        T = l.a.jf907f5b,
        O = l.a.e3719c15,
        I = l.a.f371a361,
        L = l.a.c4881c66,
        A = l.a.a5ce82a4,
        P = l.a.d495680d,
        R = l.a.f9c98140,
        F = l.a.eafe3287,
        x = l.a.d76fe4fc,
        M = [
          { label: O, description: I, link: '/settings/accessibility', Icon: S },
          { label: L, description: A, link: '/settings/display', Icon: _.a },
          { label: P, description: R, link: '/settings/languages', Icon: w.a },
          { label: F, description: x, link: '/settings/data', Icon: C.a },
        ],
        U = { page: 'settings', section: 'accessibility_display_and_languages' }
      function D(e) {
        var t = e.location
        return c.a.createElement(
          u.c,
          { namespace: U },
          c.a.createElement(
            s.a,
            null,
            c.a.createElement(
              f.a,
              { location: t, screenType: 'primaryDetail', title: k },
              c.a.createElement(
                b.a,
                { testID: p },
                c.a.createElement(d.a, { description: T }),
                M.map(function (e) {
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
          return v
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        c = n.n(i),
        o = n('yoO3'),
        l = n('7JQg'),
        s = n('7FtF'),
        u = n('MWbm'),
        d = n('RKmr'),
        f = n('csss'),
        m = c.a.ae72d4c4,
        p = c.a.g2841de4,
        b = c.a.jc02ae67,
        h = c.a.dd823129,
        E = c.a.b523ecc5,
        g = c.a.hc36dbba,
        y = { page: 'settings', section: 'apps_and_sessions' }
      function v(e) {
        var t = e.location
        return r.a.createElement(
          l.c,
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
        l = n('Irs7'),
        s = n('MWbm'),
        u = n('cHvH'),
        d = n('Wd7d'),
        f = n('t62R'),
        m = n('rHpw'),
        p = o.a.g0cba83f,
        b = o.a.b92fa3be,
        h = o.a.d45866f3,
        E = o.a.e83ecbf6,
        g = o.a.ha597018,
        y = o.a.bcb2afc3,
        v = o.a.bff84f29
      function S(e) {
        var t = e.history,
          n = Object(l.b)()
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
                s.a,
                { style: d.a.isNarrowScreenWidth(n) ? _.narrowScreen : _.wideScreen },
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
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        o = n('1Pcy'),
        l = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        f = n.n(d),
        m = n('KEM+'),
        p = n.n(m),
        b = n('ERkP'),
        h = n.n(b),
        E = n('jtO7'),
        g = n('eb3s'),
        y = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              p()(l()(a), '_handleClick', function (e) {
                a.setState({ showConfirmation: !0 })
              }),
              p()(l()(a), '_handleCancel', function () {
                a.setState({ showConfirmation: !1 })
              }),
              p()(l()(a), '_handleConfirm', function () {
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
      p()(y, 'defaultProps', { color: 'red500', align: 'center' })
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
          return y
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('ho0z'), n('tQbP'), n('hBpG'), n('7x/C'), n('JtPf'), n('oEOe')),
        l = n('kGix'),
        s = n('ikiw'),
        u = n('Ssj5'),
        d = n('RqPI'),
        f = 'availableLanguages',
        m = 'rweb/'.concat(f),
        p = o.a(m, 'FETCH_AVAILABLE_LANGUAGES'),
        b = { fetchStatus: l.a.NONE, languages: [] }
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
            return c()(c()({}, e), {}, { fetchStatus: l.a.LOADING })
          case p.FAILURE:
            return c()(c()({}, e), {}, { error: t.payload, fetchStatus: l.a.FAILED })
          case p.SUCCESS:
            return c()(c()({}, e), {}, { languages: t.payload.sort(r), fetchStatus: l.a.LOADED })
          default:
            return e
        }
      }
      u.a.register(r()({}, f, h))
      var E = function (e) {
          return e[f].languages
        },
        g = function (e, t) {
          var n = Object(s.c)(t).toLowerCase(),
            a = e[f].languages.find(function (e) {
              return e.code === n
            })
          return a ? a.name : null
        },
        y = function () {
          return function (e, t) {
            return t()[f].fetchStatus === l.a.LOADED ? Promise.resolve() : e(v())
          }
        },
        v = function (e) {
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
          return I
        })
      n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        c = n('gUb7'),
        o = n('rxPX'),
        l = Object(o.a)()
          .propsFromState(function () {
            return { userClaimsFetchStatus: c.c }
          })
          .withAnalytics({ page: 'settings', section: 't1_labs' }),
        s = n('v//M'),
        u = n('3XMw'),
        d = n.n(u),
        f = n('yoO3'),
        m = n('7FtF'),
        p = n('zCf4'),
        b = n('RKmr'),
        h = n('0yYu'),
        E = n('3Ohe'),
        g = d.a.f6e88161,
        y = d.a.i9028824,
        v = d.a.e4972a1a,
        S = d.a.e4b3f520,
        _ = d.a.db8346ee,
        w = d.a.a99d8e60,
        C = d.a.fb00a8ee,
        k = d.a.h7693c0d,
        T = d.a.cac1046d,
        O = d.a.j813bbee
      function I(e) {
        var t = e.userClaimsFetchStatus,
          n = Object(p.g)(),
          a = r.a.useContext(i.a),
          c = a.featureSwitches,
          o = a.userClaims,
          l = o.isTrueAndEnabled('subscriptions_feature_labs_1001'),
          u = o.isTrueAndEnabled('subscriptions_long_video_upload'),
          d = o.isTrueAndEnabled('subscriptions_feature_1011'),
          I = c.isTrue('dm_conversation_labels_pinned_enabled'),
          L = c.isTrue('subscriptions_long_video_rweb_new_copy_enabled'),
          A = [
            { label: S, subtext: _, shouldRender: l && !I },
            { label: w, subtext: L ? k : C, shouldRender: u },
            { label: T, subtext: O, shouldRender: d },
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
                { location: n, title: g },
                r.a.createElement(b.a, { description: v }),
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
      t.default = l(I)
    },
    LtDK: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'SpacesSettingsScreen', function () {
          return y
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ERkP')),
        c = n.n(i),
        o = n('tM6R'),
        l = n('P1r1'),
        s = n('rxPX'),
        u = Object(s.a)()
          .propsFromState(function () {
            return { sharingAudiospacesListeningDataWithFollowersEnabled: l.z }
          })
          .propsFromActions(function () {
            return { updateSharingAudiospacesListeningDataWithFollowersSetting: l.N }
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
      function y(e) {
        var t = e.location,
          n = e.sharingAudiospacesListeningDataWithFollowersEnabled,
          a = e.updateSharingAudiospacesListeningDataWithFollowersSetting,
          i = Object(b.a)()
        return c.a.createElement(
          m.a,
          null,
          c.a.createElement(
            p.a,
            { location: t, screenType: 'secondaryDetail', title: v.screen.title },
            c.a.createElement(h.a, { description: v.screen.description }),
            c.a.createElement(E.a, {
              checked: n,
              helpText: v.audiospaceListeningTransparency.help,
              label: v.audiospaceListeningTransparency.label,
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
      var v = {
          screen: { title: f.a.ded416bf, description: f.a.fe37f854 },
          audiospaceListeningTransparency: { label: f.a.j3d2cfc4, help: f.a.d9588ae6 },
        },
        S = u(y)
      t.default = S
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('VrFO'),
        c = n.n(i),
        o = n('Y9Ll'),
        l = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        f = n.n(d),
        m = n('2VqO'),
        p = n.n(m),
        b = n('KEM+'),
        h = n.n(b),
        E = (n('2G9S'), n('i4UL'), n('+/5o')),
        g = n('ERkP'),
        y = n.n(g),
        v = n('HPNB'),
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
        I = n('MWbm'),
        L = n('yw4N'),
        A = n('TnY3'),
        P = n('cHvH'),
        R = n('3xLC'),
        F = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        x = (function (e) {
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
                  ? y.a.createElement(
                      I.a,
                      { style: O.fill },
                      y.a.createElement(
                        L.a,
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
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return y.a.createElement(P.a, null, function (t) {
                    var n = t.windowWidth
                    return v.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                      r()(e, F))
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    Object(w.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : y.a.createElement(_.a.Configure, n),
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
                    n = this.props,
                    a = n.SideNavButton,
                    r = n.TabBar,
                    i = n.TeamsSwitcher,
                    c = n.backLocation,
                    o = n.documentTitle,
                    l = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    f = n.onBackClick,
                    m = n.rightControl,
                    p = n.screenType,
                    b = n.searchBoxOptions,
                    h = n.secondaryBar,
                    g = n.showSubtitleOnRoot,
                    v = n.showSubtitleOnWideDetail,
                    w = n.subtitle,
                    C = n.title,
                    k = n.titleIconCell,
                    T = n.titleIconCellSize,
                    L = n.withDetailOpen,
                    A = n.withSearchBox,
                    P = n.withTweetButton,
                    R = 'root' === p,
                    F = 'secondaryRoot' === p,
                    x = 'primaryDetail' === p,
                    M = (x && v) || (R && g),
                    U = R || (x && t),
                    D = R ? E.c : x ? E.a : void 0,
                    H = y.a.createElement(
                      I.a,
                      { style: O.appBarContainer },
                      y.a.createElement(S.a, {
                        backLocation: c,
                        fixed: !1,
                        hideBackButton: U,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: f,
                        rightControl: m,
                        secondaryBar: h,
                        subtitle: M ? w : void 0,
                        title: C,
                        titleDomId: D,
                        titleIconCell: k,
                        titleIconCellSize: T,
                      }),
                    ),
                    j =
                      R || (F && L)
                        ? null
                        : y.a.createElement(_.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: c,
                            documentTitle: o,
                            headerless: l,
                            middleControl: d,
                            onBackClick: f,
                            rightControl: m,
                            searchBoxOptions: b,
                            subtitle: w,
                            title: C,
                            withSearchBox: A,
                            withTweetButton: P,
                          })
                  return y.a.createElement(y.a.Fragment, null, j, H)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      h()(x, 'contextType', R.a),
        h()(x, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(x)
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
          style: [l.divider, { marginVertical: null != t ? i.a.theme.spaces[t] : void 0 }],
        })
      }
      var l = i.a.create(function (e) {
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
        l = Object(c.a)()
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
        s = n('v//M'),
        u = n('3XMw'),
        d = n.n(u),
        f = n('tuLS'),
        m = n('fs1G'),
        p = n('MWbm'),
        b = n('mjJ+'),
        h = n('t62R'),
        E = n('CK8+'),
        g = n('rHpw'),
        y = d.a.c6cb90eb,
        v = d.a.a37e9b09,
        S = d.a.ccafffde,
        _ = d.a.j2e184d8,
        w = d.a.fc638aa2,
        C = d.a.d94b2246,
        k = d.a.bfea13ab,
        T = d.a.fc209bb7,
        O = d.a.ee95bb8d,
        I = [
          { label: S, value: 'OneDay' },
          { label: _, value: 'ThreeDays' },
          { label: w, value: 'SevenDays' },
        ]
      var L = l(function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.enabled,
            a = e.expiration,
            i = e.fetchSafetyModeSettings,
            c = e.fetchSettingsFetchStatus,
            o = e.updateSafetyModeSettings,
            l = e.withBorder,
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
                var n = I.map(function (e) {
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
          return r.a.createElement(s.a, {
            fetchStatus: c,
            onRequestRetry: u,
            render: function () {
              var e = new Date(parseInt(a, 10))
              return r.a.createElement(
                p.a,
                { style: l && A.border },
                r.a.createElement(
                  p.a,
                  { style: A.safetyModeToggleContainer },
                  r.a.createElement(h.b, null, y),
                  n
                    ? r.a.createElement(E.a, { onValueChange: g, value: n })
                    : r.a.createElement(
                        f.a,
                        { accessibilityLabel: y, renderMenu: S() },
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
                  r.a.createElement(h.b, { color: 'gray700', size: 'subtext2', style: A.settingDescription }, v),
                ),
              )
            },
          })
        }),
        A =
          ((t.a = L),
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
        l = n.n(o),
        s = n('rHpw'),
        u = n('csss'),
        d = ['Icon'],
        f = ['link'],
        m = function (e) {
          return l.a.createElement(e.Icon, { style: p.thumbnail })
        },
        p = s.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        })
      function b(e) {
        var t = e.Icon,
          n = c()(e, d)
        return l.a.createElement(
          u.a,
          r()({}, n, { thumbnail: l.a.createElement(m, { Icon: t }), thumbnailSize: 'large' }),
        )
      }
      function h(e) {
        e.link
        var t = c()(e, f)
        return l.a.createElement(u.a, r()({}, t, { link: { external: !0, pathname: e.link } }))
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
        l = n.n(o),
        s = n('v6aA'),
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
        y = n('7JQg'),
        v = n('7FtF'),
        S = n('k89r'),
        _ = n('RKmr'),
        w = n('e0ey'),
        C = n('csss'),
        k = n('eb3s'),
        T = E.a.e908903a,
        O = E.a.h7a0dfbe,
        I = E.a.f5e59e90,
        L = E.a.e860ff84,
        A = { headline: E.a.j8bf07ab, text: E.a.ca8034b3, confirmButtonLabel: E.a.c5d4192a },
        P = { headline: E.a.gea6cc19, text: E.a.j7fc0afc, confirmButtonLabel: E.a.f527b322 },
        R = E.a.f56d108e,
        F = { all: E.a.d165c992, following: E.a.ea339390, none: E.a.e3a761ee },
        x = { page: 'settings', section: 'audience_and_tagging' }
      function M(e, t, n, a) {
        var i = l.a.useState(!1),
          o = r()(i, 2),
          u = o[0],
          d = o[1],
          f = (function (e, t, n, a) {
            var r = l.a.useContext(s.a).loggedInUserId,
              i = Object(S.a)()
            return {
              setEnabled: function (t) {
                a({ protected: t })
                  .then(function () {
                    i.scribe(c()(c()({}, x), {}, { element: 'protected', action: t ? 'enable' : 'disable' })),
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
          o = M(n, 0, i, e.updateSettings),
          s = F[t],
          u = a ? P : A
        return l.a.createElement(
          y.c,
          { namespace: x },
          l.a.createElement(
            g.a,
            null,
            l.a.createElement(
              v.a,
              { location: r, screenType: 'secondaryDetail', title: T },
              l.a.createElement(_.a, { description: O }),
              l.a.createElement(w.a, {
                checked: c,
                helpText: L,
                label: I,
                learnMoreLink: 'https://help.twitter.com/safety-and-security/public-and-protected-tweets',
                name: 'protected',
                onChange: o._handleChanged,
              }),
              l.a.createElement(C.a, { description: s, label: R, link: '/settings/tagging' }),
            ),
            o.showConfirmation
              ? l.a.createElement(k.a, {
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
        l = n('k/Ka'),
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
        l = n('Ssj5'),
        s = 'countryNames',
        u = { fetchStatus: o.a.NONE, countries: {} },
        d = { REQUEST: ''.concat(s, '_REQUEST'), FAILURE: ''.concat(s, '_FAILURE'), SUCCESS: ''.concat(s, '_SUCCESS') },
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
      l.a.register(r()({}, s, f))
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
        l = n('k/Ka'),
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    TnO6: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      var a = n('KEM+'),
        r = n.n(a),
        i = (n('yH/f'), n('ERkP')),
        c = n.n(i),
        o = n('EbOo'),
        l = n('EPsT'),
        s = (n('KqXw'), n('WNMA'), n('1YZw')),
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
        E = n('3XMw'),
        g = n.n(E),
        y = n('u0B7'),
        v = n('0yYu'),
        S = n('jtO7'),
        _ = n('24HD'),
        w = g.a.cd702bc3,
        C = g.a.ebd2abb2,
        k = g.a.f2f4d0e7,
        T = g.a.jcba15d2,
        O = g.a.e1f2f8bd,
        I = g.a.e68b09b4,
        L = g.a.hc676c4a,
        A = g.a.badf3f34,
        P = g.a.ca95bd23,
        R = g.a.bbe47125,
        F = '/settings/safety_mode/autoblocked',
        x = '/i/safety_mode/flagged_accounts',
        M = Object.freeze({ ActionedTweets: 'actioned_tweets', PreviewFlaggedTweets: 'preview_flagged_tweets' }),
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
          s = e.history,
          u = e.timelineType,
          d = e.unblock,
          f = e.violatorScreenName,
          m = e.violatorUserId,
          p = Object.freeze(
            ((t = {}),
            r()(t, M.ActionedTweets, {
              backLocation: F,
              confirmationSheetHeadline: Object(_.e)({ screenName: f }),
              label: T,
              toastLabel: P({ screenName: f }),
            }),
            r()(t, M.PreviewFlaggedTweets, {
              backLocation: x,
              confirmationSheetHeadline: O({ screenName: f }),
              label: k,
              toastLabel: A({ screenName: f }),
            }),
            t),
          )
        return c.a.createElement(l.a, {
          color: 'primary',
          confirmationSheetConfirmButtonLabel: I,
          confirmationSheetHeadline: p[u].confirmationSheetHeadline,
          confirmationSheetText: R,
          label: p[u].label,
          onConfirmationSheetConfirm: function () {
            u === M.ActionedTweets
              ? d(m)
                  .then(function () {
                    a.scribe(U.unblock), n({ text: p[u].toastLabel }), s.goBack({ backLocation: p[u].backLocation })
                  })
                  .catch(i(y.a))
              : o(m)
                  .then(function () {
                    a.scribe(U.unblock), n({ text: p[u].toastLabel }), s.goBack({ backLocation: p[u].backLocation })
                  })
                  .catch(i(y.a))
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
          s = e.timelineType,
          u = e.unblock,
          d = e.violatorScreenName,
          f = e.violatorUserId,
          m = s === M.ActionedTweets ? F : x,
          p = function () {
            u(f).catch(r(y.a)), n.scribe(U.unblock)
          }
        return c.a.createElement(l.a, {
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
                  t({ action: { label: _.l, onAction: p }, text: L({ screenName: d }) }),
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
                c.a.createElement(v.a, null),
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
        l = n.n(o),
        s = n('v6aA'),
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
        y = n('k89r'),
        v = n('RKmr'),
        S = n('e0ey'),
        _ = n('csss'),
        w = b.a.jabb9c9a,
        C = b.a.a686c489,
        k = b.a.dc20d917,
        T = b.a.cb2ed998,
        O = b.a.d9138165,
        I = b.a.eb029cab,
        L = b.a.j018f2a1,
        A = { page: 'settings', section: 'location_information' }
      function P(e) {
        var t = e.allowLocationHistoryUseEnabled,
          n = e.createLocalApiErrorHandler,
          a = e.location,
          i = e.updateSettings,
          o = Object(y.a)(),
          u = l.a.useContext(s.a)
        return l.a.createElement(
          E.c,
          { namespace: A },
          l.a.createElement(
            h.a,
            null,
            l.a.createElement(
              g.a,
              { location: a, screenType: 'secondaryDetail', title: w },
              l.a.createElement(v.a, { description: C }),
              u &&
                l.a.createElement(S.a, {
                  checked: t,
                  helpText: T,
                  label: k,
                  name: 'allowLocationHistoryUse',
                  onChange: function (e, t) {
                    o.scribe(c()(c()({}, A), {}, { element: e, action: t ? 'enable' : 'disable' })),
                      i(r()({}, e, t)).catch(n())
                  },
                }),
              l.a.createElement(_.a, { label: O, link: '/settings/your_twitter_data/locations' }),
              l.a.createElement(_.a, { label: I, link: '/settings/location' }),
              l.a.createElement(_.a, { label: L, link: '/settings/explore' }),
            ),
          ),
        )
      }
      var R = m(P)
      t.default = R
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
        l = n('7FtF'),
        s = n('Irs7'),
        u = n('t62R'),
        d = n('RKmr'),
        f = n('0yYu'),
        m = n('6vad'),
        p = n('csss'),
        b = n('3XMw'),
        h = n.n(b),
        E = { page: 'settings', section: 'safety_mode' },
        g = h.a.c6cb90eb,
        y = h.a.fabe1397,
        v = h.a.c0786021
      function S() {
        var e,
          t = Object(s.b)()
        return r.a.createElement(
          o.c,
          { namespace: E },
          r.a.createElement(
            i.a,
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
              r.a.createElement(c.a, null),
              r.a.createElement(f.a, null),
              r.a.createElement(m.b, { text: y }),
              r.a.createElement(p.a, { label: v, link: '/settings/safety_mode/autoblocked' }),
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
        l = n('k/Ka'),
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    'Zi/f': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'YourTweets', function () {
          return I
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ERkP'),
        l = n.n(o),
        s = n('P1r1'),
        u = n('rxPX'),
        d = Object(u.a)()
          .propsFromState(function () {
            return { settings: s.g }
          })
          .adjustStateProps(function (e) {
            var t = e.settings
            return { nsfwUserEnabled: t.nsfw_user, nsfwAdminEnabled: t.nsfw_admin }
          })
          .propsFromActions(function () {
            return { updateSettings: s.M }
          }),
        f = n('3XMw'),
        m = n.n(f),
        p = n('yoO3'),
        b = n('7JQg'),
        h = n('7FtF'),
        E = n('k89r'),
        g = n('0KEI'),
        y = n('RKmr'),
        v = n('e0ey'),
        S = n('csss'),
        _ = m.a.b38d81ae,
        w = m.a.f8d4746b,
        C = m.a.c0a55f4a,
        k = m.a.ea28ca63,
        T = m.a.eb029cab,
        O = { page: 'settings', section: 'your_tweets' }
      function I(e) {
        var t = e.location,
          n = e.nsfwAdminEnabled,
          a = e.nsfwUserEnabled,
          i = e.updateSettings,
          o = Object(E.a)(),
          s = Object(g.useCreateLocalApiErrorHandler)('YOUR_TWEETS_SCREEN')
        return l.a.createElement(
          b.c,
          { namespace: O },
          l.a.createElement(
            p.a,
            null,
            l.a.createElement(
              h.a,
              { location: t, screenType: 'secondaryDetail', title: _ },
              l.a.createElement(y.a, { description: w }),
              l.a.createElement(v.a, {
                checked: a,
                disabled: n,
                helpText: k,
                label: C,
                learnMoreLink: 'https://help.twitter.com/rules-and-policies/media-policy',
                name: 'nsfw_user',
                onChange: function (e, t) {
                  o.scribe(c()(c()({}, O), {}, { element: 'nsfw_user', action: t ? 'enable' : 'disable' })),
                    i(r()({}, e, t)).catch(s({ showToast: !0 }))
                },
              }),
              l.a.createElement(S.a, { label: T, link: '/settings/location' }),
            ),
          ),
        )
      }
      var L = d(I)
      t.default = L
    },
    ZvNX: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        o = n('5Yy7'),
        l = n.n(o),
        s = n('2VqO'),
        u = n.n(s),
        d = (n('6U7i'), n('ho0z'), n('hBvt'), n('ERkP')),
        f = n.n(d),
        m = (n('TJCb'), n('7x/C'), n('DZ+c'), n('j7Bv')),
        p = n('hBoh'),
        b = n('yiKp'),
        h = n.n(b),
        E = n('Lsrn'),
        g = n('k/Ka'),
        y = function () {
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
      y.metadata = { width: 24, height: 24 }
      var v = y,
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
          l()(n, e)
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
                      return f.a.createElement(m.a, { Icon: v, color: 'neutral' })
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
        I = n('GBcw'),
        L = n('Wms4'),
        A = n('pjBI'),
        P = n('t62R'),
        R = n('csss'),
        F = O.a.ed5ab169,
        x = (function (e) {
          l()(n, e)
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
                    a = t ? f.a.createElement(I.a, { cutoff: 'years', humanReadable: !0, timestamp: Number(t) }) : null,
                    r = e.is_current_session ? f.a.createElement(L.a, { background: 'primary' }, F) : a
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
                  return f.a.createElement(R.a, {
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
        l = n.n(o),
        s = n('yiKp'),
        u = n.n(s),
        d = n('QIgh'),
        f = n('8UdT'),
        m = n('Yy//'),
        p = n('88ay'),
        b = n('Ka9G'),
        h = u()(
          u()({}, d.b),
          {},
          ((a = {}),
          l()(a, f.b.Tweet, Object(m.a)({ displayBlocked: !0 })),
          l()(a, f.b.User, Object(b.a)({ decoration: p.d })),
          a),
        ),
        E = n('jHSc'),
        g = n('3XMw'),
        y = n.n(g),
        v = n('fTQJ'),
        S = n('WpDa'),
        _ = n('ZNT5'),
        w = n('TnO6'),
        C = y.a.hae5825e,
        k = y.a.e9f1fbcb,
        T = y.a.de9b6641,
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
          i.a.createElement(v.a, { entryConfiguration: h, footer: o, module: c, renderEmptyState: O, title: C }),
        )
      }
    },
    aY7H: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DirectMessages', function () {
          return F
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ERkP'),
        l = n.n(o),
        s = n('v6aA'),
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
        y = n('k89r'),
        v = n('RKmr'),
        S = n('e0ey'),
        _ = b.a.d4986f85,
        w = b.a.cc950d94,
        C = b.a.b4006390,
        k = b.a.f7da127c,
        T = b.a.b3d8566e,
        O = b.a.cfda8c44,
        I = b.a.e6c411d7,
        L = b.a.g558101a,
        A = b.a.d9172541,
        P = b.a.bd557505,
        R = { page: 'settings', section: 'direct_messages' }
      function F(e) {
        var t = e.allowDmsFrom,
          n = e.createLocalApiErrorHandler,
          a = e.dmQualityFilter,
          i = e.dmReceiptSetting,
          o = e.location,
          u = e.nsfwMediaFilter,
          d = e.updateDmNsfwMediaFilter,
          f = e.updateSettings,
          m = Object(y.a)()
        function p(t, a) {
          var i = '/messages/settings' === e.location.pathname ? 'dm_tab' : 'global_settings_menu'
          m.scribe(c()(c()({}, R), {}, { element: t, data: { entry_point: i }, action: a })),
            f(r()({}, t, a)).catch(n({ showToast: !0 }))
        }
        var b = l.a.useContext(s.a).featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
        return l.a.createElement(
          E.c,
          { namespace: R },
          l.a.createElement(
            h.a,
            null,
            l.a.createElement(
              g.a,
              { location: o, screenType: 'secondaryDetail', title: _ },
              l.a.createElement(v.a, { description: w }),
              l.a.createElement(S.a, {
                checked: 'all' === t,
                helpText: k,
                label: C,
                learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#receive',
                name: 'allow_dms_from',
                onChange: function (e, t) {
                  p(e, t ? 'all' : 'following')
                },
              }),
              l.a.createElement(S.a, {
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
                ? l.a.createElement(S.a, {
                    checked: u,
                    helpText: L,
                    label: I,
                    learnMoreLink: 'https://help.twitter.com/using-twitter/direct-messages#graphic-media',
                    name: 'ext_dm_nsfw_media_filter',
                    onChange: function (e, t) {
                      m.scribe(
                        c()(c()({}, R), {}, { element: 'dm_nsfw_filter_setting', action: t ? 'enable' : 'disable' }),
                      ),
                        d(t)
                    },
                  })
                : null,
              l.a.createElement(S.a, {
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
      var x = m(F)
      t.default = x
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        i = n('Ud88'),
        c = n('aQQo'),
        o = c.loadQuery,
        l = c.useTrackLoadQueryInRender,
        s = n('ERkP'),
        u = s.useCallback,
        d = s.useEffect,
        f = s.useRef,
        m = s.useState,
        p = n('K1lQ').getRequest,
        b = { kind: 'NullQueryReference' }
      function h(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== p(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : b,
          c = i()
        l()
        var s = r(),
          p = f(new Set([n])),
          E = m(function () {
            return n
          }),
          g = E[0],
          y = E[1],
          v = m(function () {
            return n
          }),
          S = v[0],
          _ = v[1]
        n !== S && (p.current.add(n), _(n), y(n))
        var w = u(
            function () {
              s.current && (p.current.add(b), y(b))
            },
            [s],
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
              if (s.current) {
                var r,
                  i = o(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : c, e, t, a)
                p.current.add(i), y(i)
              }
            },
            [c, e, y, s],
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
              if (s.current) {
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
            [g, s, C, e],
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
        l = n.n(o),
        s = n('NeAX'),
        u = n('rxPX'),
        d = n('0KEI'),
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
        m = n('3XMw'),
        p = n.n(m),
        b = n('yoO3'),
        h = n('7JQg'),
        E = n('7FtF'),
        g = n('k89r'),
        y = n('RKmr'),
        v = n('e0ey'),
        S = n('csss'),
        _ = p.a.d035a8d0,
        w = p.a.f9ff2201,
        C = p.a.ib3357a5,
        k = p.a.c4ca418c,
        T = p.a.b0b3ed8e,
        O = p.a.h1f01a24,
        I = p.a.da202f9a,
        L = { page: 'settings', section: 'ads_preferences' }
      function A(e) {
        var t,
          n = e.allowPersonalizationEnabled,
          a = e.createLocalApiErrorHandler,
          i = e.location,
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
          h.c,
          { namespace: L },
          l.a.createElement(
            b.a,
            null,
            l.a.createElement(
              E.a,
              { location: i, screenType: 'secondaryDetail', title: _ },
              l.a.createElement(y.a, { description: w }),
              l.a.createElement(v.a, {
                checked: n,
                disabled: u,
                helpText: u ? T : k,
                label: C,
                learnMoreLink: 'https://support.twitter.com/articles/20170405',
                name: 'allowPersonalization',
                onChange: function (e, t) {
                  s.scribe(c()(c()({}, L), {}, { element: e, action: t ? 'enable' : 'disable' })),
                    o(r()({}, e, t)).catch(a())
                },
              }),
              l.a.createElement(S.a, { label: O, link: '/settings/your_twitter_data/twitter_interests' }),
              l.a.createElement(S.a, { label: I, link: '/settings/your_twitter_data/audiences' }),
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
        l = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        f = n.n(d),
        m = n('KEM+'),
        p = n.n(m),
        b = (n('2G9S'), n('z84I'), n('ho0z'), n('uFXj'), n('ERkP')),
        h = n.n(b),
        E = n('dZRF'),
        g = n('kGix'),
        y = n('rxPX'),
        v = n('0KEI'),
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
        w = n('v//M'),
        C = n('yoO3'),
        k = n('7JQg'),
        T = n('7FtF'),
        O = n('RKmr'),
        I = n('t62R'),
        L = n('FIs5'),
        A = n('csss'),
        P = n('rHpw'),
        R = n('3XMw'),
        F = n.n(R),
        x = n('U+bB'),
        M = n('MWbm'),
        U = F.a.jc02ae67,
        D = F.a.e5e8a899,
        H = F.a.ge06310e,
        j = F.a.dd1b86f9,
        N = F.a.ee4b16f8,
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
              p()(l()(e), '_fetchApps', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchApplications)().catch(n({ showToast: !0 }))
              }),
              p()(l()(e), '_handleRetry', function () {
                e._fetchApps()
              }),
              p()(l()(e), '_render', function () {
                var t = e.props.applications
                return h.a.createElement(
                  M.a,
                  null,
                  h.a.createElement(O.a, {
                    description: h.a.createElement(
                      F.a.I18NFormatMessage,
                      { $i18n: 'hcecd237' },
                      h.a.createElement(I.b, { link: z }, F.a.b63b0b1c),
                    ),
                  }),
                  t.length ? null : h.a.createElement(L.a, { header: H, message: N }),
                  t.map(function (e, t) {
                    var n = '/settings/applications/'.concat(e.app_id)
                    return h.a.createElement(A.a, {
                      description: e.organization ? j({ name: e.organization }) : null,
                      key: e.app_id,
                      label: e.name,
                      link: n,
                      thumbnail: h.a.createElement(x.a, { accessibilityLabel: '', source: e.img_url, style: V.avatar }),
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
        Q = _(K)
      t.default = Q
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
        l = n('/kEJ'),
        s = n('hqKg'),
        u = n('3zvM'),
        d = n('lMB6'),
        f = n('kGix'),
        m = n('XMGw'),
        p = n('Ssj5'),
        b = n('s1N3'),
        h = ''.concat(m.a, '/applications'),
        E = 'rweb/'.concat(h),
        g = o.a(E, 'FETCH_APPLICATIONS'),
        y = { fetchStatus: f.a.NONE }
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
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
      p.a.register(r()({}, h, v))
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
      ;(_.selectUniqUnrevokedApps = Object(s.createSelector)(_.selectAll, function (e) {
        var t = Object.values(e).filter(function (e) {
          return !0 !== e.revoked
        })
        return Object(b.a)(t, function (e) {
          return e.app_id
        })
      })),
        (_.selectAppsById = Object(s.createSelector)(
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
                if (e) return [Object(l.c)(e.entities)]
              },
            )
          }
        }
    },
    e5HP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return F
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        o = n('5Yy7'),
        l = n.n(o),
        s = n('2VqO'),
        u = n.n(s),
        d = n('KEM+'),
        f = n.n(d),
        m = n('ERkP'),
        p = n.n(m),
        b = n('t62R'),
        h = n('3XMw'),
        E = n.n(h),
        g = n('rHpw'),
        y = n('MWbm'),
        v = n('yiKp'),
        S = n.n(v),
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
        I = E.a.if2bf8b3,
        L = E.a.f3624b5c,
        A = E.a.b4b3b113,
        P = E.a.be22205f,
        R = E.a.hcbbe447,
        F = (function (e) {
          l()(n, e)
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
                    y.a,
                    { style: [x.root, a] },
                    p.a.createElement(r, { style: [x.icon, t && x[t]] }),
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
                    l = t && i && t === i.id_str,
                    s = 'string' == typeof o && 'political' === o.toLowerCase(),
                    u = 'string' == typeof o && 'issue' === o.toLowerCase(),
                    d = !(!r || 'POLITICAL' !== r.disclaimerType) || s,
                    f = !(!r || 'ISSUE' !== r.disclaimerType) || u,
                    m = (r || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!c || l || m
                      ? d
                        ? L
                        : f
                        ? P
                        : I
                      : d
                      ? A({ fullName: c })
                      : f
                      ? R({ fullName: c })
                      : O({ fullName: c }))
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      f()(F, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var x = g.a.create(function (e) {
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
          { style: l.labelContainer },
          r.a.createElement(
            i.a,
            { style: l.contentContainer },
            r.a.createElement(
              i.a,
              { style: l.appText },
              r.a.createElement(c.b, { color: 'gray700', size: 'subtext2' }, t),
            ),
          ),
        )
      }
      var l = o.a.create(function (e) {
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
        l = n('k/Ka'),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    jN9l: function (e, t, n) {
      'use strict'
      n.r(t)
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
      ;(c.hash = '84ef2c297c0f036f20c8545d37f51c88'), (t.default = c)
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
        l = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        f = n.n(d),
        m = n('2VqO'),
        p = n.n(m),
        b = n('KEM+'),
        h = n.n(b),
        E = (n('2G9S'), n('z84I'), n('ERkP')),
        g = n.n(E),
        y = n('EPsT'),
        v = n('uo4S'),
        S = n('kGix'),
        _ = n('rxPX'),
        w = n('0KEI'),
        C = function (e, t) {
          return Object(S.d)(v.d(e))
        },
        k = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: C, sessions: v.f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('APPLICATIONS'),
              fetchSessionsIfNeeded: v.a,
              revokeAllSessions: v.b,
            }
          }),
        T = n('v//M'),
        O = n('yoO3'),
        I = n('VIKJ'),
        L = n('7JQg'),
        A = n('ZvNX'),
        P = n('eM8g'),
        R = n('7FtF'),
        F = n('MWbm'),
        x = n('RKmr'),
        M = n('6vad'),
        U = n('0yYu'),
        D = n('t62R'),
        H = n('3XMw'),
        j = n.n(H),
        N = j.a.dd823129,
        z = j.a.c2cb5560,
        B = j.a.bca43fd0,
        K = j.a.bef6fc56,
        V = j.a.bbe9579b,
        Q = j.a.b850cbd0,
        G = j.a.ae1bbb26,
        W = j.a.i859a9d3,
        X = j.a.e5e8a899,
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
            l()(n, [
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
                    L.c,
                    { namespace: ee },
                    g.a.createElement(
                      O.a,
                      null,
                      g.a.createElement(
                        R.a,
                        { location: a, title: N },
                        g.a.createElement(T.a, {
                          accessibilityLabel: X,
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
                    a = Object(I.a)(t, function (e) {
                      return e.is_current_session
                    }),
                    i = r()(a, 2),
                    c = i[0],
                    o = i[1]
                  return n
                    ? g.a.createElement(
                        F.a,
                        null,
                        g.a.createElement(x.a, { description: K }),
                        g.a.createElement(M.b, { text: z }),
                        g.a.createElement(P.a, null, V),
                        c[0] ? this._renderSession(c[0], !1) : null,
                        g.a.createElement(U.a, null),
                        g.a.createElement(M.b, { text: B }),
                        g.a.createElement(P.a, null, Q),
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
                              j.a.j3223a5b({ learnMoreLabel: W }),
                            ),
                          ),
                        ),
                        g.a.createElement(y.a, {
                          align: 'left',
                          confirmationSheetConfirmButtonLabel: G,
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
        l = n.n(o),
        s = n('t62R'),
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
        return l.a.createElement(
          m.a,
          { style: b.container },
          l.a.createElement(
            d.a,
            r()({}, o, { interactiveStyles: h, style: b.root }),
            l.a.createElement(s.b, { align: n, color: a }, i),
          ),
        )
      }
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return D
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('VrFO'),
        c = n.n(i),
        o = n('Y9Ll'),
        l = n.n(o),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        f = n.n(d),
        m = n('2VqO'),
        p = n.n(m),
        b = n('KEM+'),
        h = n.n(b),
        E = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        g = n.n(E),
        y = n('pXBW'),
        v = n('6/RC'),
        S = n('UIzd'),
        _ = n.n(S),
        w = n('kGix')
      n.d(t, 'a', function () {
        return w.a
      })
      var C = n('fs1G'),
        k = n('0KEI'),
        T = n('lU4h'),
        O = n.n(T),
        I = n('21nk'),
        L = n.n(I),
        A = n('bCEw'),
        P = n.n(A),
        R = n('Ud88'),
        F = n.n(R),
        x = function (e) {
          return (0, e.render)({ fetchStatus: w.a.LOADING, data: null, error: null, retry: C.a })
        },
        M = (function (e) {
          f()(n, e)
          var t = p()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), h()(u()(e), 'state', { error: null }), e
          }
          return (
            l()(
              n,
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
            n
          )
        })(g.a.Component),
        U = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = L()(t, n)
          return a({ fetchStatus: w.a.LOADED, data: r, error: null, retry: C.a })
        },
        D = function (e, t) {
          if (v.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                i = void 0 === a ? 'store-or-network' : a,
                c = n.render,
                o = n.variables,
                l = P()(e),
                s = r()(l, 2),
                u = s[0],
                d = s[1],
                f = Object(k.useCreateLocalApiErrorHandler)(t.errorConfig.context),
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
                    d(p, { fetchPolicy: i })
                  },
                  [i, d, p],
                ),
                u
                  ? g.a.createElement(
                      g.a.Suspense,
                      { fallback: g.a.createElement(x, { render: c }) },
                      g.a.createElement(
                        M,
                        { errorHandler: f(t.errorConfig.options || {}), key: u.fetchKey, retry: b },
                        function (t, n) {
                          return t
                            ? c({ fetchStatus: w.a.FAILED, error: t, data: null, retry: n })
                            : g.a.createElement(U, { query: e, queryRef: u, render: c })
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
              o = F()(),
              l = Object(k.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = O()(c),
              u = r()(s, 1)[0],
              d = n.get(o)
            if (d) return d
            var f = g.a.lazy(function () {
              return _()(o, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: w.a.LOADED, data: e, error: null, retry: C.a })
                  },
                  function (e) {
                    return e instanceof y.a
                      ? (l(t.errorConfig.options || {})(e),
                        i({ fetchStatus: w.a.FAILED, data: null, error: e, retry: C.a }))
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
          return F
        }),
        n.d(t, 'yourImpactLabel', function () {
          return x
        }),
        n.d(t, 'adFreeHelpCenterLabel', function () {
          return M
        }),
        n.d(t, 'adFreeHelpScribeElement', function () {
          return Q
        }),
        n.d(t, 'adFreeImpactScribeElement', function () {
          return G
        }),
        n.d(t, 'adFreeSitesScribeElement', function () {
          return W
        }),
        n.d(t, 'TwitterBlue', function () {
          return X
        })
      n('KqXw'), n('WNMA'), n('z84I'), n('1t7P'), n('jQ/y'), n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        c = n('EGrD'),
        o = n('gUb7'),
        l = n('rxPX'),
        s = n('0KEI'),
        u = n('u7LJ'),
        d = Object(l.a)()
          .propsFromState(function () {
            return { userClaimsFetchStatus: o.c, twitterBlueLinksStaticData: u.c, twitterBlueLinksApiData: u.b }
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
        f = n('v//M'),
        m = n('3XMw'),
        p = n.n(m),
        b = n('/de5'),
        h = n('yoO3'),
        E = n('7FtF'),
        g = 'adFreeSection',
        y = n('ehR8'),
        v = n('MWbm'),
        S = n('6vad'),
        _ = n('csss'),
        w = n('RKmr'),
        C = n('OOKO'),
        k = n('rHpw'),
        T = n('LSr9'),
        O = n('vMn4'),
        I = n('tH6R'),
        L = n('OySi'),
        A = p.a.ed21f885,
        P = p.a.je84decd,
        R = p.a.i65802df,
        F = p.a.a21b8ad2,
        x = p.a.hd885aef,
        M = p.a.je4ccd3a,
        U = p.a.i9028824,
        D = p.a.e5fff0c7,
        H = p.a.ib35705d,
        j = p.a.d15f6d3d,
        N = p.a.jc8487c1,
        z = p.a.ad45e9b2,
        B = p.a.db529452,
        K = p.a.f66d24be,
        V = p.a.d248d75e,
        Q = 'ad_free_articles_help',
        G = 'ad_free_articles_impact',
        W = 'ad_free_articles_sites'
      function X(e) {
        var t = e.analytics,
          n = e.createLocalApiErrorHandler,
          a = e.fetchAdFreeToken,
          c = e.twitterBlueLinksApiData,
          o = e.twitterBlueLinksStaticData,
          l = e.userClaimsFetchStatus,
          s = Object(y.a)(),
          u = s.history,
          d = s.location,
          m = s.match,
          p = r.a.useContext(i.a),
          k = p.featureSwitches,
          X = p.userClaims,
          Y = X.isTwitterBlueSubscriber(),
          J = X.isTrueAndEnabled('subscriptions_feature_1006'),
          Z = k.isTrue('subscriptions_management_enabled'),
          $ = k.isTrue('subscriptions_product_feature_list_api_enabled') ? c : o,
          ee = function () {
            ne(W)
          },
          te = function () {
            ne(Q)
          },
          ne = function (e) {
            t.scribe({ page: 'subscriptions', section: 'settings', element: e, action: 'click' })
          }
        return r.a.createElement(f.a, {
          accessibilityLabel: U,
          fetchStatus: l,
          render: function () {
            return Y
              ? r.a.createElement(
                  h.a,
                  null,
                  r.a.createElement(
                    E.a,
                    { location: d, screenType: 'primaryDetail', title: A },
                    r.a.createElement(
                      v.a,
                      { style: q.iconWrapper },
                      r.a.createElement(I.a, { style: q.iconTwitterBlue }),
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
                        ? r.a.createElement(L.b, { Icon: t, description: n, key: a, label: a, link: i })
                        : null
                    }),
                    J &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(S.b, { testID: g, text: R }),
                        r.a.createElement(L.a, {
                          description: j,
                          label: F,
                          link: 'https://help.twitter.com/using-twitter/twitter-blue-ad-free-articles#publishers',
                          onPress: ee,
                        }),
                        r.a.createElement(_.a, {
                          description: N,
                          label: x,
                          link: { external: !0, pathname: T.b },
                          onPress: function (e) {
                            new T.a(a, n()).getYourImpactChartLinkHandler()(e), ne(G)
                          },
                        }),
                        r.a.createElement(L.a, {
                          label: M,
                          link: 'https://help.twitter.com/using-twitter/twitter-blue-ad-free-articles',
                          onPress: te,
                        }),
                      ),
                    Z &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(S.b, { text: B }),
                        r.a.createElement(L.b, {
                          Icon: O.a,
                          description: z,
                          key: H,
                          label: H,
                          link: '/settings/subscription',
                        }),
                      ),
                    r.a.createElement(L.a, { label: K, link: 'https://help.twitter.com/using-twitter/twitter-blue' }),
                    r.a.createElement(L.a, { label: V, link: 'https://help.twitter.com/forms/subscriptions' }),
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
      t.default = d(X)
    },
    sGy1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ContentYouSee', function () {
          return F
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = n('ERkP'),
        l = n.n(o),
        s = n('v6aA'),
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
        y = n('7FtF'),
        v = n('k89r'),
        S = n('RKmr'),
        _ = n('e0ey'),
        w = n('csss'),
        C = h.a.f2bd9c47,
        k = h.a.b2810ee7,
        T = h.a.fc1d217b,
        O = h.a.b8533bac,
        I = h.a.h1f01a24,
        L = h.a.j018f2a1,
        A = h.a.h1ef00db,
        P = h.a.h9f2da68,
        R = { page: 'settings', section: 'content_you_see' }
      function F(e) {
        var t = e.createLocalApiErrorHandler,
          n = e.displaySensitiveMediaEnabled,
          a = e.location,
          i = e.loggedInUserScreenName,
          o = e.updateSettings,
          u = Object(v.a)(),
          d = l.a.useContext(s.a).featureSwitches.isTrue('sensitive_media_settings_enabled')
        return void 0 !== i
          ? l.a.createElement(
              g.c,
              { namespace: R },
              l.a.createElement(
                E.a,
                null,
                l.a.createElement(
                  y.a,
                  { location: a, screenType: 'secondaryDetail', title: C },
                  l.a.createElement(S.a, { description: k }),
                  d
                    ? null
                    : l.a.createElement(_.a, {
                        checked: n,
                        label: T,
                        name: 'display_sensitive_media',
                        onChange: function (e, n) {
                          u.scribe(c()(c()({}, R), {}, { element: e, action: n ? 'enable' : 'disable' })),
                            o(r()({}, e, n)).catch(t({ showToast: !0 }))
                        },
                      }),
                  l.a.createElement(w.a, { label: O, link: '/'.concat(i, '/topics') }),
                  l.a.createElement(w.a, { label: I, link: '/settings/your_twitter_data/twitter_interests' }),
                  l.a.createElement(w.a, { label: L, link: '/settings/explore' }),
                  l.a.createElement(w.a, { label: A, link: '/settings/search' }),
                  d ? l.a.createElement(w.a, { label: P, link: '/settings/sensitive_media' }) : null,
                ),
              ),
            )
          : null
      }
      var x = p(F)
      t.default = x
    },
    sZlh: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return I
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ddV6'),
        c = n.n(i),
        o = (n('jQ3i'), n('x4t0'), n('849X'), n('TJCb'), n('AS3p')),
        l = n('ERkP'),
        s = n.n(l),
        u = n('v6aA'),
        d = n('3XMw'),
        f = n.n(d),
        m = n('yoO3'),
        p = n('7JQg'),
        b = n('BTou'),
        h = n('7FtF'),
        E = n('k89r'),
        g = n('RKmr'),
        y = n('3JAx'),
        v = f.a.d0b74a5a,
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
      function I(e) {
        var t = e.location,
          n = Object(E.a)(),
          a = (function () {
            var e = s.a.useContext(u.a).featureSwitches,
              t = s.a.useState(function () {
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
          l = a.setCookiePreference
        return s.a.createElement(
          p.c,
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
                  n.scribe(
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
          return y
        }),
        n.d(t, 'j', function () {
          return v
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
        l = n('Ssj5'),
        s = n('kGix'),
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
          var n = e[u].products[t]
          return (null == n ? void 0 : n.fetchStatus) || s.a.NONE
        },
        E = function (e, t) {
          var n = e[u].products[t]
          return null == n ? void 0 : n.details
        },
        g = function (e, t) {
          var n = e[u].checkoutUrls[t]
          return (null == n ? void 0 : n.fetchStatus) || s.a.NONE
        },
        y = function (e, t) {
          var n = e[u].checkoutUrls[t]
          return null == n ? void 0 : n.checkoutUrl
        },
        v = function (e) {
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
          return (null == n ? void 0 : n.fetchStatus) || s.a.NONE
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
            return c !== s.a.NONE && c !== s.a.FAILED
              ? Promise.resolve()
              : i({ actionTypes: d, context: 'FETCH_SUBSCRIPTION_PRODUCT_DETAILS', meta: { id: e } })
          }
        },
        k = function (e, t, n, a) {
          return function (r, i, c) {
            var l = c.api,
              u = Object(o.b)(r, {
                params: { external_product_id: t, success_url: n, cancel_url: a },
                request: l.SubscriptionPayments.fetchSubscriptionProductCheckoutUrl,
              }),
              d = g(i(), e)
            return d !== s.a.NONE && d !== s.a.FAILED
              ? Promise.resolve()
              : u({ actionTypes: f, context: 'FETCH_SUBSCRIPTION_PRODUCT_CHECKOUT_URL', meta: { id: e } })
          }
        },
        T = function () {
          return function (e, t, n) {
            var a = n.api,
              r = Object(o.b)(e, { params: {}, request: a.SubscriptionPayments.fetchProductSubscriptions }),
              i = v(t())
            return i !== s.a.NONE && i !== s.a.FAILED
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
              l = _(a(), e)
            return l !== s.a.NONE && l !== s.a.FAILED
              ? Promise.resolve()
              : c({ actionTypes: p, context: 'FETCH_SUBSCRIPTION_PRODUCT_CUSTOMER_PORTAL_URL', meta: { id: e } })
          }
        }
      l.a.register(
        r()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case d.REQUEST:
              var n = t.meta.id
              return c()(
                c()({}, e),
                {},
                { products: c()(c()({}, e.products), {}, r()({}, n, { fetchStatus: s.a.LOADING })) },
              )
            case d.SUCCESS:
              var a = t.meta.id
              return c()(
                c()({}, e),
                {},
                { products: c()(c()({}, e.products), {}, r()({}, a, { fetchStatus: s.a.LOADED, details: t.payload })) },
              )
            case d.FAILURE:
              var i = t.meta.id
              return c()(
                c()({}, e),
                {},
                { products: c()(c()({}, e.products), {}, r()({}, i, { fetchStatus: s.a.FAILED, error: t.payload })) },
              )
            case f.REQUEST:
              var o = t.meta.id
              return c()(
                c()({}, e),
                {},
                { checkoutUrls: c()(c()({}, e.checkoutUrls), {}, r()({}, o, { fetchStatus: s.a.LOADING })) },
              )
            case f.SUCCESS:
              var l = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  checkoutUrls: c()(
                    c()({}, e.checkoutUrls),
                    {},
                    r()({}, l, { fetchStatus: s.a.LOADED, checkoutUrl: t.payload }),
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
                    r()({}, u, { fetchStatus: s.a.FAILED, error: t.payload }),
                  ),
                },
              )
            case m.REQUEST:
              return c()(c()({}, e), {}, { productSubscriptions: { fetchStatus: s.a.LOADING } })
            case m.SUCCESS:
              return c()(
                c()({}, e),
                {},
                { productSubscriptions: { fetchStatus: s.a.LOADED, subscriptions: t.payload } },
              )
            case m.FAILURE:
              return c()(c()({}, e), {}, { productSubscriptions: { fetchStatus: s.a.FAILED, error: t.payload } })
            case p.REQUEST:
              var h = t.meta.id
              return c()(
                c()({}, e),
                {},
                {
                  customerPortalUrls: c()(c()({}, e.customerPortalUrls), {}, r()({}, h, { fetchStatus: s.a.LOADING })),
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
                    r()({}, E, { fetchStatus: s.a.LOADED, customerPortalUrl: t.payload }),
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
    tH6R: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        c = n.n(i),
        o = n('Lsrn'),
        l = n('k/Ka'),
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M15.543 3H2.75c-.414 0-.75.336-.75.75v16.5c0 .414.336.75.75.75h12.886c1.534 0 2.854-.225 3.917-.72 1.048-.481 1.866-1.147 2.381-2.025.489-.833.732-1.749.732-2.732 0-1.25-.356-2.336-1.128-3.184-.317-.348-.69-.635-1.113-.867.302-.21.572-.455.809-.738.675-.806 1.014-1.754 1.014-2.813 0-1.49-.605-2.722-1.786-3.626C19.28 3.39 17.598 3 15.543 3zm.543 5.718c.498-.059.972-.189 1.414-.381l-.001.002c-.329.485-.747.911-1.228 1.254.005.104.007.209.007.313 0 3.202-2.476 6.895-7.005 6.895-1.39 0-2.684-.401-3.773-1.089.193.022.389.034.588.034 1.153 0 2.215-.388 3.058-1.038-1.078-.019-1.987-.72-2.3-1.682.15.028.305.043.463.043.224 0 .441-.029.648-.084-1.127-.223-1.975-1.202-1.975-2.376v-.031c.332.181.711.29 1.115.303-.66-.434-1.095-1.177-1.095-2.017 0-.443.122-.859.333-1.218 1.214 1.466 3.028 2.431 5.075 2.532-.041-.178-.064-.362-.064-.551 0-1.339 1.102-2.424 2.462-2.424.708 0 1.348.294 1.797.765.561-.108 1.088-.31 1.563-.588-.183.563-.573 1.039-1.082 1.338zm14.776 12.285H25.64V2.625h5.222v18.378zm10.35.482c-2.163 0-3.844-.54-5.044-1.622-1.183-1.082-1.775-2.62-1.775-4.614V8.33h5.222v5.626c0 1.37.33 2.366.99 2.99.658.627 1.57.94 2.737.94 1.436 0 2.535-.39 3.295-1.167.76-.795 1.14-1.8 1.14-3.017V8.33H53v12.673h-5.12v-2.89c-.56 1.1-1.43 1.936-2.612 2.51-1.183.575-2.535.862-4.056.862zm33.311-5.729H60.53c.186.794.7 1.41 1.546 1.85.845.44 1.943.66 3.295.66 1 0 1.91-.152 2.74-.457.844-.322 1.495-.76 1.95-1.32l3.956 1.725c-.896 1.065-2.096 1.876-3.6 2.433-1.487.558-3.245.837-5.273.837-1.994 0-3.71-.262-5.146-.786-1.436-.542-2.543-1.32-3.32-2.333-.76-1.03-1.14-2.248-1.14-3.65 0-1.42.388-2.645 1.165-3.676.777-1.03 1.876-1.816 3.295-2.356 1.437-.558 3.11-.837 5.02-.837 1.994 0 3.7.296 5.12.887 1.437.575 2.527 1.403 3.27 2.485.744 1.08 1.116 2.373 1.116 3.877v.66l-.001.001zM69.35 13.17c-.032-.76-.455-1.377-1.266-1.85-.794-.473-1.825-.71-3.093-.71-1.25 0-2.272.228-3.066.684-.794.457-1.267 1.082-1.42 1.876h8.847-.002z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 76, height: 24 }), (t.a = s)
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
        l = n.n(o),
        s = n('NeAX'),
        u = n('rxPX'),
        d = n('0KEI'),
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
        m = n('3XMw'),
        p = n.n(m),
        b = n('yoO3'),
        h = n('7JQg'),
        E = n('7FtF'),
        g = n('k89r'),
        y = n('RKmr'),
        v = n('e0ey'),
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
        return l.a.createElement(
          h.c,
          { namespace: k },
          l.a.createElement(
            b.a,
            null,
            l.a.createElement(
              E.a,
              { location: a, screenType: 'secondaryDetail', title: S },
              l.a.createElement(y.a, { description: _ }),
              l.a.createElement(v.a, {
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
        l = n('3XMw'),
        s = n.n(l),
        u = n('yoO3'),
        d = n('7JQg'),
        f = n('RKmr'),
        m = n('7FtF'),
        p = n('OySi'),
        b = 'accountAccessScreen',
        h = n('MWbm'),
        E = n('yiKp'),
        g = n.n(E),
        y = n('Lsrn'),
        v = n('k/Ka'),
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
        O = s.a.f8645654,
        I = s.a.b02df747,
        L = s.a.a2197725,
        A = s.a.j95edf76,
        P = s.a.g2841de4,
        R = s.a.ae72d4c4,
        F = s.a.h1abfbcd,
        x = s.a.j748604a,
        M = s.a.f280cc87,
        U = s.a.a310511c,
        D = { page: 'settings', section: 'security_and_account_access' }
      function H(e) {
        var t = e.location,
          n = (function (e) {
            return [
              { label: A, description: L, link: '/settings/security', Icon: _ },
              { label: R, description: P, link: '/settings/apps_and_sessions', Icon: C },
              e.isTrue('responsive_web_disconnect_third_party_sso_enabled')
                ? { label: F, description: x, link: '/settings/connected_accounts', Icon: k.a }
                : void 0,
              e.isTrue('responsive_web_delegate_enabled')
                ? {
                    description: U,
                    label: M,
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
                c.a.createElement(f.a, { description: I }),
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
        l = n('k/Ka'),
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
          return L
        }),
        n.d(t, 'b', function () {
          return A
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('z84I'), n('1IsZ'), n('7x/C'), n('JtPf'), n('oEOe')),
        l = n('hqKg'),
        s = n('kGix'),
        u = n('XMGw'),
        d = n('Ssj5'),
        f = n('iChn'),
        m = n('3A2y'),
        p = ''.concat(u.a, '/sessions'),
        b = 'rweb/'.concat(p),
        h = o.a(b, 'FETCH_SESSIONS'),
        E = o.a(b, 'REVOKE_SESSION'),
        g = o.a(b, 'REVOKE_ALL_SESSIONS'),
        y = { fetchStatus: s.a.NONE, sessions: {} }
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case h.REQUEST:
            return c()(c()({}, e), {}, { fetchStatus: s.a.LOADING })
          case h.FAILURE:
            return c()(c()({}, e), {}, { error: t.payload, fetchStatus: s.a.FAILED })
          case h.SUCCESS:
            return c()(
              c()({}, e),
              {},
              {
                error: null,
                fetchStatus: s.a.LOADED,
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
      d.a.register(r()({}, p, v))
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
        C = Object(l.createSelector)(w, function (e) {
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
            return T(n()) === s.a.LOADED ? Promise.resolve() : t(I(e))
          }
        },
        I = function (e) {
          return function (t, n, a) {
            var r = a.api
            return o.b(t, { params: e, request: r.Settings.fetchSessions })({
              actionTypes: h,
              context: 'FETCH_SESSIONS',
            })
          }
        },
        L = function (e) {
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
                return I()(t, n, { api: r })
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
        l = n('k/Ka'),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
          return y
        }),
        n.d(t, 'e', function () {
          return v
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        c = n.n(i),
        o = (n('yH/f'), n('kGix')),
        l = n('Ssj5'),
        s = n('RqPI'),
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
              l,
              s = !(null === (r = t.payload) || void 0 === r || !r.enabled),
              u = null === (i = t.payload) || void 0 === i ? void 0 : i.duration,
              d = null === (l = t.payload) || void 0 === l ? void 0 : l.expiration
            return c()(c()({}, e), {}, { enabled: s, duration: u, expiration: d, fetchSettingsFetchStatus: o.a.LOADED })
          case m.FAILURE:
            return c()(c()({}, e), {}, { fetchSettingsFetchStatus: o.a.FAILED })
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
          return function (e, t, n) {
            var a = n.api
            return Object(u.b)(e, { request: a.SettingsGraphQL.fetchSafetyModeSettings })({
              actionTypes: m,
              context: 'FETCH_SAFETY_MODE_SETTINGS',
            })
          }
        },
        v = function (e) {
          return function (t, n, a) {
            var r = a.api,
              i = n(),
              c = { userId: Object(s.r)(i) || '', duration: e }
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
        l = n('k/Ka'),
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M16.695 13.037c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM14.098 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.054 2.187-.358 2.657-.367.42-1.036.6-2.238.6s-1.87-.18-2.24-.6c-.412-.47-.533-1.364-.36-2.658zm9.788 11.222c-.763-3.066-3.72-5.208-7.19-5.208-1.765 0-3.392.558-4.67 1.505-1.278-.948-2.905-1.506-4.67-1.506-3.47 0-6.428 2.142-7.19 5.208-.156.625-.025 1.265.356 1.754.37.473.94.744 1.567.744h19.87c.628 0 1.2-.27 1.57-.745.382-.49.512-1.13.356-1.753zm-1.537.83c-.09.11-.22.168-.39.168h-7.413c.078-.32.084-.66 0-.998-.25-1-.75-1.888-1.41-2.65.993-.665 2.223-1.058 3.558-1.058 2.78 0 5.14 1.674 5.735 4.07.044.174.014.344-.08.467zM7.354 20.5H2.09c-.17 0-.3-.057-.388-.168-.096-.123-.126-.294-.083-.47.596-2.395 2.954-4.068 5.735-4.068 2.78 0 5.14 1.674 5.735 4.07.043.174.014.344-.082.467-.088.113-.22.17-.388.17H7.355zm.001-7.463c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.236 1.766-.002 3.023.717 3.846.858.98 2.184 1.11 3.368 1.11zM4.758 8.28c.134-.992.648-2.656 2.598-2.656 1.948 0 2.463 1.664 2.597 2.655.174 1.293.053 2.187-.358 2.658-.368.42-1.037.6-2.238.6-1.202 0-1.87-.18-2.24-.6-.412-.47-.533-1.365-.36-2.66z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
        l = n('KEM+'),
        s = n.n(l),
        u = n('yiKp'),
        d = n.n(u),
        f = n('QIgh'),
        m = n('8UdT'),
        p = n('88ay'),
        b = n('Ka9G'),
        h = d()(d()({}, f.b), {}, s()({}, m.b.User, Object(b.a)({ decoration: p.d }))),
        E = n('jHSc'),
        g = n('fTQJ'),
        y = n('118N'),
        v = n('t62R'),
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
              v.b,
              { style: { display: 'block', paddingBottom: S.a.theme.spaces.space20 } },
              C.a.c51dcdfc,
            ),
          ),
          r.a.createElement(
            C.a.I18NFormatMessage,
            { $i18n: 'h3d97f03' },
            r.a.createElement(v.b, { link: '/settings/blocked/all' }, C.a.bd0a88c1),
          ),
        ),
        I = function () {
          return r.a.createElement(_.a, { header: T, message: O })
        }
      t.default = o(function (e) {
        var t = e.history,
          n = e.userId,
          a = r.a.useMemo(
            function () {
              return Object(y.a)(n)
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
          r.a.createElement(g.a, { entryConfiguration: h, module: a, renderEmptyState: I, title: k }),
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
        l = n('cnVF'),
        s = function (e) {
          return Object(i.d)(e).isTrue('subscriptions_stripe_testing') ? l.G : l.D
        },
        u = Object(c.a)()
          .propsFromState(function () {
            return {
              productSubscriptionsFetchStatus: o.j,
              subscription: function (e) {
                return Object(o.i)(e, l.F)
              },
              customerPortalUrlFetchStatus: function (e) {
                return Object(o.h)(e, s(e))
              },
              customerPortalUrl: function (e) {
                return Object(o.g)(e, s(e))
              },
              twitterBlueID: s,
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
        y = n('zCf4'),
        v = n('MWbm'),
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
          l = e.subscription,
          s = e.twitterBlueID,
          u = Object(y.g)(),
          f = m.a.ib35705d,
          k = m.a.e5fff0c7,
          O = m.a.baf97715,
          I = 'Expire' === (null == l ? void 0 : l.state) ? ''.concat(k, ' ').concat(O) : k,
          L = m.a.fff413dc,
          A = m.a.h201c4c1,
          P = m.a.i8385a2c,
          R = m.a.h80834de,
          F = m.a.ib8ebf3b,
          x = function () {
            i()
          }
        r.a.useEffect(function () {
          t.scribe({ action: 'impression' })
        }, []),
          r.a.useEffect(
            function () {
              x()
            },
            [i],
          )
        var M = function () {
          t.scribe({
            action: 'click',
            data: {
              payment_source: (null == l ? void 0 : l.payment_source) || '',
              status: (null == l ? void 0 : l.state) || '',
            },
          }),
            c(s, E.b)
        }
        return r.a.createElement(
          b.a,
          null,
          r.a.createElement(
            g.a,
            { location: u, title: f },
            r.a.createElement(C.a, { description: I }),
            r.a.createElement(
              v.a,
              null,
              r.a.createElement(d.a, {
                fetchStatus: o,
                onRequestRetry: x,
                render: function () {
                  var e,
                    t = null == l ? void 0 : l.payment_source
                  t && t !== h.Stripe && (e = t === h.AppleAppStore ? A : t === h.GooglePlay ? P : R)
                  var n = F({ mobilePlatform: e })
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    t === h.Stripe
                      ? r.a.createElement(
                          S.a,
                          { accessibilityRole: 'button', onPress: M, style: T.manageSubscriptionInteraction },
                          r.a.createElement(
                            _.a,
                            null,
                            r.a.createElement(
                              v.a,
                              { style: T.manageSubscriptionSection },
                              r.a.createElement(w.b, null, L),
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
                  c(s, E.b)
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
        l = n('k/Ka'),
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
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
