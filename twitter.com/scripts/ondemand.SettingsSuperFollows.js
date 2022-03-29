;(window.webpackJsonp = window.webpackJsonp || []).push([
  [240],
  {
    '+OUG': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitPlatformsOtherScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'content_creation_platform_other',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '47d942c03c899c9d3a5429a1041379c9',
      }
      a.default = t
    },
    '02qo': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksIntroScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksIntroCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: '8ac49b919368d9d38290d155622cb0f7',
      }
      a.default = t
    },
    '0ULw': function (e, a, n) {
      'use strict'
      var t = n('yiKp'),
        r = n.n(t),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (a.a = c)
    },
    '23An': function (e, a, n) {
      'use strict'
      var t = n('ERkP'),
        r = t.useEffect,
        l = t.useRef
      e.exports = function () {
        var e = l(!0)
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
    '3qCL': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_category', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_category_other', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_creation_platform', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'content_creation_platform_other',
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'purpose', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'ethnicity', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'gender', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '6127e1fe3ccc90c8fc8f954981afd53b',
      }
      a.default = t
    },
    '5emT': function (e, a, n) {
      'use strict'
      var t = n('yiKp'),
        r = n.n(t),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              i.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (a.a = c)
    },
    '5jO1': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPricingScreen_priceOfferings',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'offer1', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer2', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer3', storageKey: null },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: 'c8b5422e4768462695d5eb3442ab3a34',
      }
      a.default = t
    },
    '6byF': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingSwitch_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingCreatorIntro_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDescription_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingSelectedPrice_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsBlockOnboardingNavigation_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingGetStartedScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksBadgesScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksDescriptionScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'de4b2addf8047ad2870c65fb8c542507',
      }
      a.default = t
    },
    '6rkJ': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksDescriptionScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksDescriptionCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: 'c756b8456bb34cd08df691a92eee0833',
      }
      a.default = t
    },
    '6s7X': function (e, a, n) {
      'use strict'
      var t = n('yiKp'),
        r = n.n(t),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z',
              }),
              i.a.createElement('circle', { cx: '12', cy: '8.042', r: '1.25' }),
              i.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (a.a = c)
    },
    '7ESn': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPricingConfirmScreen_viewer',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftCreatorIntro_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftDescription_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftSelectedPrice_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'a3742e5cfba091e6f073b741c7c725a1',
      }
      a.default = t
    },
    '7FtF': function (e, a, n) {
      'use strict'
      var t = n('VrFO'),
        r = n.n(t),
        l = n('Y9Ll'),
        i = n.n(l),
        o = n('1Pcy'),
        s = n.n(o),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        g = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        h = n('P1r1'),
        y = n('G6rE'),
        v = n('rxPX'),
        w = n('0KEI'),
        S = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: h.n, loggedInUser: y.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: h.f,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        _ = n('v//M'),
        k = n('3XMw'),
        F = n.n(k),
        E = n('M2mT'),
        C = 'settingsDetailSave',
        x = n('mw9i'),
        K = n('0yYu'),
        P = n('/yvb'),
        L = n('rHpw'),
        O = F.a.i2209530,
        D = (function (e) {
          u()(n, e)
          var a = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var t = arguments.length, l = new Array(t), i = 0; i < t; i++) l[i] = arguments[i]
            return (
              (e = a.call.apply(a, [this].concat(l))),
              g()(s()(e), '_renderWithFetchSettings', function () {
                var a = e.props.fetchStatus
                return b.a.createElement(_.a, { fetchStatus: a, onRequestRetry: e._handleFetch, render: e._render })
              }),
              g()(s()(e), '_render', function () {
                var a = e.props,
                  n = a.children,
                  t = a.onSubmit,
                  r = a.submitDisabled,
                  l = a.submitLabel,
                  i = a.submitType,
                  o = a.withMarginBottom
                return b.a.createElement(
                  x.a,
                  { style: [T.contentRoot, o && T.withMarginBottom] },
                  n,
                  t
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(K.a, null),
                        b.a.createElement(
                          x.a,
                          { style: T.buttonContainer },
                          b.a.createElement(P.a, { disabled: r, onPress: t, style: T.button, testID: C, type: i }, l),
                        ),
                      )
                    : null,
                )
              }),
              g()(s()(e), '_handleFetch', function () {
                var a = e.props,
                  n = a.createLocalApiErrorHandler
                ;(0, a.fetchSettingsIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            i()(n, [
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
                    a = e.location,
                    n = e.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return a && a.pathname === n ? '/' : n
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.loggedInUser,
                    n = e.onBackClick,
                    t = e.rightControl,
                    r = e.screenType,
                    l = e.secondaryBar,
                    i = e.title,
                    o = e.withBottomBorder,
                    s = this.getBackLocation(),
                    c = a ? '@'.concat(a.screen_name) : void 0
                  return b.a.createElement(
                    E.a,
                    {
                      backLocation: s,
                      onBackClick: n,
                      rightControl: t,
                      screenType: r,
                      secondaryBar: l,
                      showSubtitleOnWideDetail: !1,
                      subtitle: c,
                      title: i,
                      withBottomBorder: o,
                    },
                    a ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(D, 'defaultProps', { submitLabel: O, submitType: 'brandFilled', withMarginBottom: !0 })
      var T = L.a.create(function (e) {
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
      a.a = S(D)
    },
    '86D9': function (e, a, n) {
      'use strict'
      n.d(a, 'a', function () {
        return o
      })
      var t = n('ddV6'),
        r = n.n(t),
        l = (n('5BYb'), n('7x/C'), n('0zG9'), n('ERkP')),
        i = n.n(l)
      function o(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = i.a.useState(!1),
          t = r()(n, 2),
          l = t[0],
          o = t[1],
          s = 'IntersectionObserver' in window,
          c = a.root,
          u = void 0 === c ? null : c,
          d = a.rootMargin,
          p = void 0 === d ? '0%' : d,
          m = a.threshold,
          g = void 0 === m ? 0 : m,
          f = i.a.useCallback(function (e) {
            o(
              e.some(function (e) {
                return e.isIntersecting
              }),
            )
          }, []),
          b = s ? new IntersectionObserver(f, { root: u, rootMargin: p, threshold: g }) : void 0
        return (
          i.a.useEffect(
            function () {
              return (
                requestAnimationFrame(function () {
                  var a = null == e ? void 0 : e.current
                  b && a && b.observe(a)
                }),
                function () {
                  b && b.disconnect()
                }
              )
            },
            [e, u, p, JSON.stringify(g)],
          ),
          l
        )
      }
    },
    '9SqB': function (e, a, n) {
      'use strict'
      var t = n('IGGJ')(n('yiKp')),
        r = n('ERkP'),
        l = n('Ud88'),
        i = n('K1lQ').commitMutation,
        o = r.useState,
        s = r.useEffect,
        c = r.useRef,
        u = r.useCallback,
        d = n('23An')
      e.exports = function (e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          n = l(),
          r = d(),
          p = c(n),
          m = c(e),
          g = c(new Set()),
          f = o(!1),
          b = f[0],
          h = f[1],
          y = u(
            function (a) {
              p.current === n && m.current === e && (g.current.delete(a), r.current && h(g.current.size > 0))
            },
            [n, r, e],
          )
        s(
          function () {
            ;(p.current === n && m.current === e) ||
              ((g.current = new Set()), r.current && h(!1), (p.current = n), (m.current = e))
          },
          [n, r, e],
        )
        var v = u(
          function (l) {
            var i = a(
              n,
              (0, t.default)(
                (0, t.default)({}, l),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, a) {
                    y(i), l.onCompleted && l.onCompleted(e, a)
                  },
                  onError: function (e) {
                    y(i), l.onError && l.onError(e)
                  },
                  onUnsubscribe: function () {
                    y(i), l.onUnsubscribe && l.onUnsubscribe()
                  },
                },
              ),
            )
            return g.current.add(i), r.current && h(!0), i
          },
          [y, a, n, r, e],
        )
        return [v, b]
      }
    },
    AyUU: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        r,
        l,
        i,
        o,
        s,
        c = {
          fragment: {
            argumentDefinitions: [
              (t = { defaultValue: null, kind: 'LocalArgument', name: 'category' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'ethnicity' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'gender' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'platform' }),
              (o = { defaultValue: null, kind: 'LocalArgument', name: 'purpose' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsApplicationSubmitScreenMutation',
            selections: (s = [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'content_category', variableName: 'category' },
                  { kind: 'Variable', name: 'content_creation_platform', variableName: 'platform' },
                  { kind: 'Variable', name: 'ethnicity', variableName: 'ethnicity' },
                  { kind: 'Variable', name: 'gender', variableName: 'gender' },
                  { kind: 'Variable', name: 'purpose', variableName: 'purpose' },
                  { kind: 'Literal', name: 'track', value: 'SuperFollows' },
                ],
                kind: 'ScalarField',
                name: 'seller_application_put',
                storageKey: null,
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [t, i, o, r, l],
            kind: 'Operation',
            name: 'SuperFollowsApplicationSubmitScreenMutation',
            selections: s,
          },
          params: {
            id: 'xAwoXB0xodQu-Yma6pR2Lw',
            metadata: {},
            name: 'SuperFollowsApplicationSubmitScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(c.hash = '38de90823c3fb6770d441acfd7d6c0d5'), (a.default = c)
    },
    'By/j': function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        r,
        l = {
          fragment: {
            argumentDefinitions: (t = [
              { defaultValue: null, kind: 'LocalArgument', name: 'benefits_data' },
              { defaultValue: null, kind: 'LocalArgument', name: 'creator_intro' },
              { defaultValue: null, kind: 'LocalArgument', name: 'selected_price' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsOnboardingPricingConfirmScreenMutation',
            selections: (r = [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'benefits_data', variableName: 'benefits_data' },
                  { kind: 'Variable', name: 'creator_intro', variableName: 'creator_intro' },
                ],
                kind: 'ScalarField',
                name: 'set_creator_benefits_put',
                storageKey: null,
              },
              {
                alias: null,
                args: [
                  { kind: 'Literal', name: 's', value: 23 },
                  { kind: 'Variable', name: 'selected_price', variableName: 'selected_price' },
                ],
                kind: 'ScalarField',
                name: 'set_creator_price_metadata',
                storageKey: null,
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: t,
            kind: 'Operation',
            name: 'SuperFollowsOnboardingPricingConfirmScreenMutation',
            selections: r,
          },
          params: {
            id: '_97mdj3S3wU106zmC8Wy3A',
            metadata: {},
            name: 'SuperFollowsOnboardingPricingConfirmScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(l.hash = 'c1a6db8f58f9e0b096f1a134ad2ef927'), (a.default = l)
    },
    DWSt: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksIntroCore_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftCreatorIntro_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '837cd51625531128d0020203d44d4364',
      }
      a.default = t
    },
    E9LA: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        r,
        l = {
          fragment: {
            argumentDefinitions: (t = [
              { defaultValue: null, kind: 'LocalArgument', name: 'benefits_data' },
              { defaultValue: null, kind: 'LocalArgument', name: 'creator_intro' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'useSuperFollowsSaveOnboardingMutation',
            selections: (r = [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'benefits_data', variableName: 'benefits_data' },
                  { kind: 'Variable', name: 'creator_intro', variableName: 'creator_intro' },
                ],
                kind: 'ScalarField',
                name: 'set_creator_benefits_put',
                storageKey: null,
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: t,
            kind: 'Operation',
            name: 'useSuperFollowsSaveOnboardingMutation',
            selections: r,
          },
          params: {
            id: 'tYYBdo8fCA4AHLbLpVCjSg',
            metadata: {},
            name: 'useSuperFollowsSaveOnboardingMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(l.hash = 'b142db4c70fbbc54fea0835c0bae56e8'), (a.default = l)
    },
    EM6u: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSummaryScreen_priceOfferings',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'offer1', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer2', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer3', storageKey: null },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: 'c8327c06a912f18626acb4cfe69bc035',
      }
      a.default = t
    },
    'G/nI': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsOnboardingDescription_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AudienceRewardsBenefitsData',
            kind: 'LinkedField',
            name: 'super_follow_creator_benefits',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'AudienceRewardsBenefitInfo',
                kind: 'LinkedField',
                name: 'benefits_data',
                plural: !0,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'benefit_type', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'f63f3bedef01a304535ac954b5279837',
      }
      a.default = t
    },
    G8I5: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        r,
        l,
        i,
        o,
        s,
        c = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: (t = [{ kind: 'Literal', name: 's', value: 23 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                            selections: [r, { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSwitch_user' }],
                            type: 'User',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSwitch_viewer' },
                ],
                storageKey: 'viewer_v2(s:23)',
              },
              {
                alias: null,
                args: t,
                concreteType: 'SuperFollowsPriceOfferings',
                kind: 'LinkedField',
                name: 'super_follows_price_offerings',
                plural: !1,
                selections: [r, { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSwitch_priceOfferings' }],
                storageKey: 'super_follows_price_offerings(s:23)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'SuperFollowsSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: t,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
                selections: [
                  r,
                  { alias: null, args: null, kind: 'ScalarField', name: 'is_active_creator', storageKey: null },
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
                          r,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'stripe_account_status',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'super_follows_application_status',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'ApiUser',
                                kind: 'LinkedField',
                                name: 'legacy',
                                plural: !1,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'followers_count',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'screen_name',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'profile_image_url_https',
                                    storageKey: null,
                                  },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                                  { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                filters: null,
                                handle: 'defaultScalars',
                                key: '',
                                kind: 'LinkedHandle',
                                name: 'legacy',
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'super_following_eligibility',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'AudienceRewardsBenefitsData',
                                kind: 'LinkedField',
                                name: 'super_follow_creator_benefits',
                                plural: !1,
                                selections: [
                                  (l = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'creator_intro',
                                    storageKey: null,
                                  }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'AudienceRewardsBenefitInfo',
                                    kind: 'LinkedField',
                                    name: 'benefits_data',
                                    plural: !0,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'benefit_type',
                                        storageKey: null,
                                      },
                                      (i = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'description',
                                        storageKey: null,
                                      }),
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    kind: 'ClientExtension',
                                    selections: [
                                      (o = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: '__id',
                                        storageKey: null,
                                      }),
                                    ],
                                  },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                concreteType: 'SuperFollowsSelectedPrice',
                                kind: 'LinkedField',
                                name: 'super_follow_creator_price_metadata',
                                plural: !1,
                                selections: [
                                  (s = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'selected_price',
                                    storageKey: null,
                                  }),
                                ],
                                storageKey: null,
                              },
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
                  {
                    kind: 'ClientExtension',
                    selections: [
                      o,
                      {
                        alias: null,
                        args: null,
                        concreteType: 'SuperFollowsApplicationDraft',
                        kind: 'LinkedField',
                        name: 'super_follows_application_draft',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'content_category', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'content_category_other',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'content_creation_platform',
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'content_creation_platform_other',
                            storageKey: null,
                          },
                          { alias: null, args: null, kind: 'ScalarField', name: 'purpose', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'ethnicity', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'gender', storageKey: null },
                          o,
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'SuperFollowsOnboardingDraft',
                        kind: 'LinkedField',
                        name: 'super_follows_onboarding_draft',
                        plural: !1,
                        selections: [l, i, s, o],
                        storageKey: null,
                      },
                    ],
                  },
                ],
                storageKey: 'viewer_v2(s:23)',
              },
              {
                alias: null,
                args: t,
                concreteType: 'SuperFollowsPriceOfferings',
                kind: 'LinkedField',
                name: 'super_follows_price_offerings',
                plural: !1,
                selections: [
                  r,
                  { alias: null, args: null, kind: 'ScalarField', name: 'offer1', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'offer2', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'offer3', storageKey: null },
                ],
                storageKey: 'super_follows_price_offerings(s:23)',
              },
            ],
          },
          params: {
            id: 'xlj6K_nceNqkvL7Ay2zfhQ',
            metadata: {},
            name: 'SuperFollowsSettingsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(c.hash = '59ab5118b2247c2e05bcaf23a5f58cf4'), (a.default = c)
    },
    H1we: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitEthnicitiesScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'ethnicity', storageKey: null }],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'df25ea9ad03b5f8d07759b33364597f8',
      }
      a.default = t
    },
    IeZm: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPricingConfirmScreen_priceOfferings',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'offer1', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer2', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'offer3', storageKey: null },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: '02dfb83cd097503a0c0b2c04ef04119e',
      }
      a.default = t
    },
    JB6R: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitCategoriesScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_category', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '227407cdf4acefeb0694bbfa4c8fd4b6',
      }
      a.default = t
    },
    'K7/K': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsOnboardingDraftSelectedPrice_viewer',
        selections: [
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsOnboardingDraft',
                kind: 'LinkedField',
                name: 'super_follows_onboarding_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '465d5034703427b8cee56d8d91b4f27a',
      }
      a.default = t
    },
    M2mT: function (e, a, n) {
      'use strict'
      var t = n('m3Bd'),
        r = n.n(t),
        l = n('VrFO'),
        i = n.n(l),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        g = n.n(m),
        f = n('KEM+'),
        b = n.n(f),
        h = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        v = n.n(y),
        w = n('HPNB'),
        S = n('VAZu'),
        _ = n('wiP2'),
        k = n('Es6L'),
        F = n('yiKp'),
        E = n.n(F),
        C = n('rHpw'),
        x = C.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: E()(E()({}, C.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        K = n('MWbm'),
        P = n('yw4N'),
        L = n('TnY3'),
        O = n('cHvH'),
        D = n('3xLC'),
        T = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        B = (function (e) {
          p()(n, e)
          var a = g()(n)
          function n() {
            var e
            i()(this, n)
            for (var t = arguments.length, r = new Array(t), l = 0; l < t; l++) r[l] = arguments[l]
            return (
              (e = a.call.apply(a, [this].concat(r))),
              b()(u()(e), '_renderChildren', function () {
                var a = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      K.a,
                      { style: x.fill },
                      v.a.createElement(
                        P.a,
                        { style: x.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        a,
                      ),
                    )
                  : a
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
                  return v.a.createElement(O.a, null, function (a) {
                    var n = a.windowWidth
                    return w.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    a = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, T))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(k.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(_.a.Configure, n),
                    a,
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
                  var a = e.isTwoColumnLayout,
                    n = this.props,
                    t = n.SideNavButton,
                    r = n.TabBar,
                    l = n.TeamsSwitcher,
                    i = n.backLocation,
                    o = n.documentTitle,
                    s = n.headerless,
                    c = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    m = n.rightControl,
                    g = n.screenType,
                    f = n.searchBoxOptions,
                    b = n.secondaryBar,
                    y = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    k = n.subtitle,
                    F = n.title,
                    E = n.titleIconCell,
                    C = n.titleIconCellSize,
                    P = n.withDetailOpen,
                    L = n.withSearchBox,
                    O = n.withTweetButton,
                    D = 'root' === g,
                    T = 'secondaryRoot' === g,
                    B = 'primaryDetail' === g,
                    I = (B && w) || (D && y),
                    R = D || (B && a),
                    V = D ? h.c : B ? h.a : void 0,
                    z = v.a.createElement(
                      K.a,
                      { style: x.appBarContainer },
                      v.a.createElement(S.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: R,
                        history: c,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: m,
                        secondaryBar: b,
                        subtitle: I ? k : void 0,
                        title: F,
                        titleDomId: V,
                        titleIconCell: E,
                        titleIconCellSize: C,
                      }),
                    ),
                    A =
                      D || (T && P)
                        ? null
                        : v.a.createElement(_.a.Configure, {
                            SideNavButton: t,
                            TabBar: r,
                            TeamsSwitcher: l,
                            backLocation: i,
                            documentTitle: o,
                            headerless: s,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: m,
                            searchBoxOptions: f,
                            subtitle: k,
                            title: F,
                            withSearchBox: L,
                            withTweetButton: O,
                          })
                  return v.a.createElement(v.a.Fragment, null, A, z)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()(B, 'contextType', D.a),
        b()(B, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      a.a = Object(L.a)(B)
    },
    M3aw: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksDescriptionScreen_viewer',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftDescription_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksDescriptionCore_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '02f161584b8d9666df3acdf1f3ef817e',
      }
      a.default = t
    },
    MXCg: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSwitch_priceOfferings',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSummaryScreen_priceOfferings' },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: 'bece66f9ce665e1562f02db458398326',
      }
      a.default = t
    },
    MvEh: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksConfirmScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksConfirmCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: '917f96d69ad720b93ab8f315cf935d4e',
      }
      a.default = t
    },
    N6s9: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsBlockOnboardingNavigation_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingCreatorIntro_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDescription_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingSelectedPrice_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'd4ef5c7a8bf68d8b8b6c7c99cadedfba',
      }
      a.default = t
    },
    NmgE: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksConfirmCore_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftCreatorIntro_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftDescription_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'efbd797e69223eb51548efbb869a60a1',
      }
      a.default = t
    },
    QmjQ: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksBadgesScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksBadgesCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: 'a877dc43c3fb96fe1f69f1150d4972bf',
      }
      a.default = t
    },
    RL7R: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksIntroScreen_viewer',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftCreatorIntro_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksIntroCore_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'faf9eb7aeb9b7090c7004522c7522a48',
      }
      a.default = t
    },
    RLjm: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationEligibilityScreen_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'super_following_eligibility', storageKey: null },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'ad902c8bf33468dccb33365e2b5ae866',
      }
      a.default = t
    },
    RTdz: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksDescriptionCore_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftDescription_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '6e7aad3b00b93acae78cf80d430838ee',
      }
      a.default = t
    },
    Rthh: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksConfirmScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksConfirmCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: '20bef5b5794024e957982e19eb9df728',
      }
      a.default = t
    },
    TXsE: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksIntroScreen_viewer',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftCreatorIntro_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksIntroCore_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '8a45db7030e196c1e405633700fe386d',
      }
      a.default = t
    },
    U5ka: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksConfirmScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksConfirmCore_viewer' }],
        type: 'Viewer',
        abstractKey: null,
        hash: '4c4388061d4dc4455ddbf56f7902c6ed',
      }
      a.default = t
    },
    UFp0: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksConfirmCore_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '93286f1ac3b20e27564fbc971fc1eede',
      }
      a.default = t
    },
    UNVS: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingSwitch_priceOfferings',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingScreen_priceOfferings' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingConfirmScreen_priceOfferings' },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: 'abcc7b8bb494dcd3849da219de5ae4ad',
      }
      a.default = t
    },
    VG5i: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitGendersScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'gender', storageKey: null }],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '433c12e9ed3b6ce573165b9a21c2fd91',
      }
      a.default = t
    },
    WDhg: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsOnboardingCreatorIntro_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AudienceRewardsBenefitsData',
            kind: 'LinkedField',
            name: 'super_follow_creator_benefits',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '2c78fe8b9b3d66c42a2981bebc726b36',
      }
      a.default = t
    },
    ZaCQ: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsOnboardingDraftDescription_viewer',
        selections: [
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsOnboardingDraft',
                kind: 'LinkedField',
                name: 'super_follows_onboarding_draft',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null }],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '6f17367ec2cf59e4facac9cf8d0483cb',
      }
      a.default = t
    },
    aREQ: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksConfirmScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksConfirmCore_viewer' }],
        type: 'Viewer',
        abstractKey: null,
        hash: '339c26b88fcc2f785b8eece37d429287',
      }
      a.default = t
    },
    d8Sa: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'SuperFollowsManagementSwitch_viewer',
          selections: [
            {
              kind: 'InlineDataFragmentSpread',
              name: 'superFollowsShared_viewer',
              selections: [
                {
                  kind: 'ClientExtension',
                  selections: (t = [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }]),
                },
              ],
            },
            { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsBlockOnboardingNavigation_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksIntroScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksDescriptionScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksConfirmScreen_viewer' },
            {
              kind: 'ClientExtension',
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'SuperFollowsOnboardingDraft',
                  kind: 'LinkedField',
                  name: 'super_follows_onboarding_draft',
                  plural: !1,
                  selections: t,
                  storageKey: null,
                },
              ],
            },
          ],
          type: 'Viewer',
          abstractKey: null,
        }
      ;(r.hash = '2d462164983df8bbdf54c547f4c8f097'), (a.default = r)
    },
    dGIC: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsOnboardingSelectedPrice_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'SuperFollowsSelectedPrice',
            kind: 'LinkedField',
            name: 'super_follow_creator_price_metadata',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '24836cae0468e75f38acec52f2fbb824',
      }
      a.default = t
    },
    dNhZ: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'SuperFollowsOnboardingSwitch_viewer',
          selections: [
            {
              kind: 'InlineDataFragmentSpread',
              name: 'superFollowsShared_viewer',
              selections: [
                {
                  kind: 'ClientExtension',
                  selections: (t = [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }]),
                },
              ],
            },
            { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsBlockOnboardingNavigation_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingGetStartedScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksDescriptionScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingConfirmScreen_viewer' },
            {
              kind: 'ClientExtension',
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'SuperFollowsOnboardingDraft',
                  kind: 'LinkedField',
                  name: 'super_follows_onboarding_draft',
                  plural: !1,
                  selections: t,
                  storageKey: null,
                },
              ],
            },
          ],
          type: 'Viewer',
          abstractKey: null,
        }
      ;(r.hash = '9518ed5436554b04d556e1d7292d246a'), (a.default = r)
    },
    h3lO: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsBlockOnboardingNavigation_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftCreatorIntro_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftDescription_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftSelectedPrice_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'f9188152a6d877d6a0ff16e4cfbd2cb2',
      }
      a.default = t
    },
    hGtx: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksIntroCore_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'eee1e983d2879a2379fdd9d9aa5bc035',
      }
      a.default = t
    },
    hznd: function (e, a, n) {
      'use strict'
      var t = n('97Jx'),
        r = n.n(t),
        l = n('ERkP'),
        i = n.n(l),
        o = n('BedV'),
        s = n('yiKp'),
        c = n.n(s),
        u = (n('ho0z'), n('t62R')),
        d = n('IMYl'),
        p = n('py1r'),
        m = n('I4+6'),
        g = n('cm6r'),
        f = n('rHpw'),
        b = n('MWbm'),
        h = f.a.create(function (e) {
          return {
            root: { padding: e.spaces.space4, borderRadius: e.borderRadii.large, overflow: 'hidden' },
            base: {
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexGrow: 1,
            },
            border: {
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.large,
              borderWidth: e.borderWidths.medium,
            },
            containerClicked: { backgroundColor: e.colors.primary },
            interactive: { cursor: 'pointer' },
            radioBackground: {
              borderRadius: e.borderRadii.infinite,
              margin: '-'.concat(e.spaces.space8),
              padding: e.spaces.space8,
            },
            textContainer: { margin: e.spaces.space12, flexShrink: 1 },
            radioContainer: { userSelect: 'none', marginRight: e.spaces.space12, marginTop: e.spaces.space12 },
            helpText: { marginTop: e.spaces.space8 },
            tileStyle: { height: 'inherit' },
            mainContainer: { padding: e.spaces.space4 },
            circleDisabled: { borderColor: e.colors.gray200 },
            circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 },
            circle: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.gray700,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.medium,
              borderRadius: e.spaces.space32,
              height: e.spaces.space20,
              justifyContent: 'center',
              width: e.spaces.space20,
            },
            circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary },
            checkMark: { width: '18px', height: '18px', color: e.colors.whiteOnColor },
          }
        }),
        y = c()(
          c()({}, f.a.absoluteFillObject),
          {},
          { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
        ),
        v = function (e) {
          var a = e.accessibilityLabel,
            n = e.accessibilityPosInSet,
            t = e.accessibilitySetSize,
            r = e.checked,
            l = e.disabled,
            o = e.helpText,
            s = e.label,
            c = e.name,
            v = e.onChange,
            w = m.a.generate({
              backgroundColor: f.a.theme.colors.transparent,
              color: r ? f.a.theme.colors.primary : f.a.theme.colors.gray700,
              withFocusWithinFocusRing: !0,
            })
          return i.a.createElement(p.a, { disabled: l }, function (e) {
            return i.a.createElement(
              b.a,
              { style: h.root },
              i.a.createElement(
                b.a,
                { accessibilityRole: 'label', style: [h.base, h.border, !l && h.interactive] },
                i.a.createElement(
                  b.a,
                  { style: h.textContainer },
                  i.a.createElement(u.b, { weight: 'bold' }, s),
                  o && i.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: h.helpText }, o),
                ),
                i.a.createElement(
                  b.a,
                  { style: h.radioContainer },
                  i.a.createElement(
                    g.a,
                    { disabled: l, interactiveStyles: w, interactivityState: e, style: h.radioBackground },
                    i.a.createElement(
                      b.a,
                      {
                        style: [
                          h.circle,
                          r && h.circleActive,
                          l && h.circleDisabled,
                          r && l && h.circleCheckedAndDisabled,
                        ],
                      },
                      r ? i.a.createElement(d.a, { style: h.checkMark }) : null,
                    ),
                  ),
                  i.a.createElement('input', {
                    'aria-label': a,
                    'aria-posinset': n,
                    'aria-setsize': t,
                    checked: r,
                    disabled: l,
                    name: c,
                    onChange: r ? void 0 : v,
                    style: y,
                    type: 'radio',
                  }),
                ),
              ),
            )
          })
        }
      a.a = function (e) {
        return i.a.createElement(
          o.a,
          r()({}, e, {
            renderSelector: function (e) {
              return i.a.createElement(v, r()({}, e, { key: e.value }))
            },
          }),
        )
      }
    },
    krsm: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsOnboardingDraftCreatorIntro_viewer',
        selections: [
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsOnboardingDraft',
                kind: 'LinkedField',
                name: 'super_follows_onboarding_draft',
                plural: !1,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null }],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '17a492d43e8514a76d7864a04c0ed95c',
      }
      a.default = t
    },
    kz1e: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksDescriptionScreen_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDescription_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsSaveOnboarding_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksDescriptionCore_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '04ba46becf16dda65f26d3268fcf0e8a',
      }
      a.default = t
    },
    'l/EB': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        kind: 'InlineDataFragment',
        name: 'superFollowsShared_viewer',
        hash: '7d93eb3778f44bb69f422e49ec09cd27',
      }
      a.default = t
    },
    lWeI: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsOnboardingBenefitsId_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AudienceRewardsBenefitsData',
            kind: 'LinkedField',
            name: 'super_follow_creator_benefits',
            plural: !1,
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '6d25264b378a634b21185a5d8eebd0b7',
      }
      a.default = t
    },
    lZLw: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'SuperFollowsApplicationSwitch_viewer',
          selections: [
            {
              kind: 'InlineDataFragmentSpread',
              name: 'superFollowsShared_viewer',
              selections: [
                {
                  kind: 'ClientExtension',
                  selections: (t = [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }]),
                },
              ],
            },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitCategoriesScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitCategoriesOtherScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitPlatformsScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitPlatformsOtherScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitEthnicitiesScreen_viewer' },
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitGendersScreen_viewer' },
            {
              kind: 'ClientExtension',
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'SuperFollowsApplicationDraft',
                  kind: 'LinkedField',
                  name: 'super_follows_application_draft',
                  plural: !1,
                  selections: t,
                  storageKey: null,
                },
              ],
            },
          ],
          type: 'Viewer',
          abstractKey: null,
        }
      ;(r.hash = '8f7f25ee72f87f2e8a9830a5880189c5'), (a.default = r)
    },
    mDly: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksBadgesCore_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'f3857156a260b346e85b8007d2e238a1',
      }
      a.default = t
    },
    mEFY: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSwitch_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingCreatorIntro_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDescription_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingSelectedPrice_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsBlockOnboardingNavigation_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSummaryScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksIntroScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksDescriptionScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksConfirmScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '5e1002a53061aa856a8f30d974ad6150',
      }
      a.default = t
    },
    mKqc: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPricingScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftSelectedPrice_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '247efb82ea8bcfad59ed75a1750f152a',
      }
      a.default = t
    },
    nAiE: function (e, a, n) {
      'use strict'
      n.r(a),
        n.d(a, 'superFollowsSettingsQuery', function () {
          return Qu
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return ue
        }),
        n.d(t, 'Arrow2x', function () {
          return de
        }),
        n.d(t, 'Arrow3x', function () {
          return pe
        }),
        n.d(t, 'Bench', function () {
          return me
        }),
        n.d(t, 'Bench2x', function () {
          return ge
        }),
        n.d(t, 'Bench3x', function () {
          return fe
        }),
        n.d(t, 'Cat', function () {
          return be
        }),
        n.d(t, 'Cat2x', function () {
          return he
        }),
        n.d(t, 'Cat3x', function () {
          return ye
        }),
        n.d(t, 'Clipboard', function () {
          return ve
        }),
        n.d(t, 'Clipboard2x', function () {
          return we
        }),
        n.d(t, 'Clipboard3x', function () {
          return Se
        }),
        n.d(t, 'CoinStairs', function () {
          return _e
        }),
        n.d(t, 'CoinStairs2x', function () {
          return ke
        }),
        n.d(t, 'CoinStairs3x', function () {
          return Fe
        }),
        n.d(t, 'HandCoins', function () {
          return Ee
        }),
        n.d(t, 'HandCoins2x', function () {
          return Ce
        }),
        n.d(t, 'HandCoins3x', function () {
          return xe
        }),
        n.d(t, 'OneFinger', function () {
          return Ke
        }),
        n.d(t, 'OneFinger2x', function () {
          return Pe
        }),
        n.d(t, 'OneFinger3x', function () {
          return Le
        }),
        n.d(t, 'PaperAirplane', function () {
          return Oe
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return De
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return Te
        }),
        n.d(t, 'Pricing', function () {
          return Be
        }),
        n.d(t, 'Pricing2x', function () {
          return Ie
        }),
        n.d(t, 'Pricing3x', function () {
          return Re
        }),
        n.d(t, 'Puzzle', function () {
          return Ve
        }),
        n.d(t, 'Puzzle2x', function () {
          return ze
        }),
        n.d(t, 'Puzzle3x', function () {
          return Ae
        }),
        n.d(t, 'Thumbsup', function () {
          return Me
        }),
        n.d(t, 'Thumbsup2x', function () {
          return Ue
        }),
        n.d(t, 'Thumbsup3x', function () {
          return je
        }),
        n.d(t, 'TrafficLight', function () {
          return He
        }),
        n.d(t, 'TrafficLight2x', function () {
          return Ne
        }),
        n.d(t, 'TrafficLight3x', function () {
          return We
        }),
        n.d(t, 'Uturn', function () {
          return Ge
        }),
        n.d(t, 'Uturn2x', function () {
          return qe
        }),
        n.d(t, 'Uturn3x', function () {
          return Qe
        })
      var r = {}
      n.r(r),
        n.d(r, 'Chat', function () {
          return wi
        }),
        n.d(r, 'Chat2x', function () {
          return Si
        }),
        n.d(r, 'Chat3x', function () {
          return _i
        }),
        n.d(r, 'Cog', function () {
          return ki
        }),
        n.d(r, 'Cog2x', function () {
          return Fi
        }),
        n.d(r, 'Cog3x', function () {
          return Ei
        }),
        n.d(r, 'Coin', function () {
          return Ci
        }),
        n.d(r, 'Coin2x', function () {
          return xi
        }),
        n.d(r, 'Coin3x', function () {
          return Ki
        }),
        n.d(r, 'CoinPurse', function () {
          return Pi
        }),
        n.d(r, 'CoinPurse2x', function () {
          return Li
        }),
        n.d(r, 'CoinPurse3x', function () {
          return Oi
        }),
        n.d(r, 'Cone', function () {
          return Di
        }),
        n.d(r, 'Cone2x', function () {
          return Ti
        }),
        n.d(r, 'Cone3x', function () {
          return Bi
        }),
        n.d(r, 'Cross', function () {
          return Ii
        }),
        n.d(r, 'Cross2x', function () {
          return Ri
        }),
        n.d(r, 'Cross3x', function () {
          return Vi
        }),
        n.d(r, 'FirstAid', function () {
          return zi
        }),
        n.d(r, 'FirstAid2x', function () {
          return Ai
        }),
        n.d(r, 'FirstAid3x', function () {
          return Mi
        }),
        n.d(r, 'Heart', function () {
          return Ui
        }),
        n.d(r, 'Heart2x', function () {
          return ji
        }),
        n.d(r, 'Heart3x', function () {
          return Hi
        }),
        n.d(r, 'LifeSaver', function () {
          return Ni
        }),
        n.d(r, 'LifeSaver2x', function () {
          return Wi
        }),
        n.d(r, 'LifeSaver3x', function () {
          return Gi
        }),
        n.d(r, 'Lightbulb', function () {
          return qi
        }),
        n.d(r, 'Lightbulb2x', function () {
          return Qi
        }),
        n.d(r, 'Lightbulb3x', function () {
          return Xi
        }),
        n.d(r, 'NoEntry', function () {
          return Yi
        }),
        n.d(r, 'NoEntry2x', function () {
          return Ji
        }),
        n.d(r, 'NoEntry3x', function () {
          return Zi
        }),
        n.d(r, 'Pencil', function () {
          return $i
        }),
        n.d(r, 'Pencil2x', function () {
          return eo
        }),
        n.d(r, 'Pencil3x', function () {
          return ao
        }),
        n.d(r, 'PiggyBank', function () {
          return no
        }),
        n.d(r, 'PiggyBank2x', function () {
          return to
        }),
        n.d(r, 'PiggyBank3x', function () {
          return ro
        }),
        n.d(r, 'Plant', function () {
          return lo
        }),
        n.d(r, 'Plant2x', function () {
          return io
        }),
        n.d(r, 'Plant3x', function () {
          return oo
        }),
        n.d(r, 'Puzzle', function () {
          return so
        }),
        n.d(r, 'Puzzle2x', function () {
          return co
        }),
        n.d(r, 'Puzzle3x', function () {
          return uo
        }),
        n.d(r, 'Ribbon', function () {
          return po
        }),
        n.d(r, 'Ribbon2x', function () {
          return mo
        }),
        n.d(r, 'Ribbon3x', function () {
          return go
        }),
        n.d(r, 'Spheres', function () {
          return fo
        }),
        n.d(r, 'Spheres2x', function () {
          return bo
        }),
        n.d(r, 'Spheres3x', function () {
          return ho
        }),
        n.d(r, 'Star', function () {
          return yo
        }),
        n.d(r, 'Star2x', function () {
          return vo
        }),
        n.d(r, 'Star3x', function () {
          return wo
        }),
        n.d(r, 'TrashCan', function () {
          return So
        }),
        n.d(r, 'TrashCan2x', function () {
          return _o
        }),
        n.d(r, 'TrashCan3x', function () {
          return ko
        }),
        n.d(r, 'Wallet', function () {
          return Fo
        }),
        n.d(r, 'Wallet2x', function () {
          return Eo
        }),
        n.d(r, 'Wallet3x', function () {
          return Co
        })
      var l,
        i,
        o,
        s = n('ERkP'),
        c = n.n(s),
        u = (n('enFi'), n('L/9f')),
        d = n('3G7m'),
        p = n('LLQb'),
        m = n('97Jx'),
        g = n.n(m),
        f = n('m3Bd'),
        b = n.n(f),
        h = (n('yH/f'), '/settings/monetization'),
        y = '/settings/superfollows',
        v = Object.freeze({
          root: ''.concat(y, '/application'),
          eligibility: ''.concat(y, '/application/eligibility'),
          oneMoreThing: ''.concat(y, '/application/one_more_thing'),
          completeProfile: ''.concat(y, '/application/complete_profile'),
          submit: ''.concat(y, '/application/submit'),
          submitCategories: ''.concat(y, '/application/submit_categories'),
          submitCategoriesOther: ''.concat(y, '/application/submit_categories_other'),
          submitPlatforms: ''.concat(y, '/application/submit_platforms'),
          submitPlatformsOther: ''.concat(y, '/application/submit_platforms_other'),
          submitEthnicities: ''.concat(y, '/application/submit_ethnicities'),
          submitGenders: ''.concat(y, '/application/submit_genders'),
        }),
        w = Object.freeze({
          root: ''.concat(y, '/onboarding'),
          perksIntro: ''.concat(y, '/onboarding/perks_intro'),
          perksDescription: ''.concat(y, '/onboarding/perks_description'),
          perksBadges: ''.concat(y, '/onboarding/perks_badges'),
          perksConfirm: ''.concat(y, '/onboarding/perks_confirm'),
          pricing: ''.concat(y, '/onboarding/pricing'),
          pricingConfirm: ''.concat(y, '/onboarding/pricing_confirm'),
          stripeSetup: ''.concat(y, '/onboarding/stripe_setup'),
          stripeIncomplete: ''.concat(y, '/onboarding/stripe_incomplete'),
          stripeCompleted: ''.concat(y, '/onboarding/stripe_completed'),
        }),
        S = Object.freeze({
          root: ''.concat(y, '/management'),
          perksIntro: ''.concat(y, '/management/perks_intro'),
          perksDescription: ''.concat(y, '/management/perks_description'),
          perksConfirm: ''.concat(y, '/management/perks_confirm'),
        }),
        _ = ''.concat(y, '/submitted'),
        k = ''.concat(y, '/waitlisted'),
        F = ''.concat(y, '/rejected'),
        E = ''.concat(y, '/perks_intro_examples'),
        C = ''.concat(y, '/perks_description_examples'),
        x = ''.concat(y, '/perks_preview'),
        K = n('jHSc'),
        P = n('3XMw'),
        L = n.n(P),
        O = n('lUZE'),
        D = 'https://help.twitter.com/using-twitter/super-follows-creator',
        T = ''.concat(D, '#pricechange'),
        B = n('/yvb'),
        I = n('6s7X'),
        R = function () {
          return c.a.createElement(B.a, { icon: c.a.createElement(I.a, null), link: D, type: 'primaryText' })
        },
        V = n('zCf4'),
        z = n('MWbm'),
        A = n('JYMr'),
        M = n('rHpw'),
        U = [
          'leftControlShouldClose',
          'percentageComplete',
          'rightControl',
          'screenRef',
          'withCenteredLogo',
          'withInfoButton',
        ],
        j = L.a.a6777c1b,
        H = function (e) {
          var a = e.leftControlShouldClose,
            n = e.percentageComplete,
            t = e.rightControl,
            r = e.screenRef,
            l = e.withCenteredLogo,
            i = e.withInfoButton,
            o = b()(e, U),
            s = Object(V.f)(),
            u = a ? 'close' : 'back',
            d = h,
            p = l ? c.a.createElement(O.a, { style: N.iconTwitter }) : void 0,
            m = i ? c.a.createElement(z.a, { style: N.rightControl }, c.a.createElement(R, null), t) : t,
            f = n ? c.a.createElement(A.a, { progress: n }) : void 0,
            y = function () {
              a ? s.goBackThroughModals({ fallbackPath: d }) : s.goBack({ backLocation: d })
            }
          return (
            r && (r.current = { goBack: y }),
            c.a.createElement(
              K.b,
              g()({}, o, {
                backButtonType: u,
                backLocation: d,
                centeredLogo: p,
                documentTitle: j,
                onBackClick: y,
                rightControl: m,
                secondaryBar: f,
              }),
            )
          )
        },
        N = M.a.create(function (e) {
          return {
            iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
            rightControl: { alignItems: 'center', flexDirection: 'row', gap: e.spaces.space4 },
          }
        }),
        W = n('5FtR'),
        G = (n('849X'), n('TJCb'), n('v6aA')),
        q = L.a.g92a2343,
        Q = L.a.a91bb144,
        X = function () {
          var e = Object(V.f)(),
            a = c.a.createElement(
              B.a,
              {
                onPress: function () {
                  e.push(v.submit)
                },
                type: 'primaryFilled',
              },
              Q,
            )
          return c.a.createElement(H, { rightControl: a, title: q })
        },
        Y = (n('jQ3i'), n('x4t0'), n('855f')),
        J = (n('z84I'), n('t62R')),
        Z = n('WtWS'),
        $ = n('0ULw'),
        ee = function (e) {
          var a = e.items
          return c.a.createElement(
            z.a,
            { style: ae.root },
            a.map(function (e) {
              return c.a.createElement(
                z.a,
                { key: e.label, style: ae.item },
                c.a.createElement(J.b, { style: ae.label, weight: 'bold' }, e.label),
                e.checked
                  ? c.a.createElement(Z.a, { style: ae.iconChecked })
                  : c.a.createElement($.a, { style: ae.iconUnchecked }),
              )
            }),
          )
        },
        ae = M.a.create(function (e) {
          return {
            root: { gap: e.spaces.space24 },
            item: { flexDirection: 'row' },
            label: { flex: 1 },
            iconChecked: { color: e.colors.green500 },
            iconUnchecked: { color: e.colors.gray200 },
          }
        }),
        ne = function () {
          return c.a.createElement(
            J.b,
            { align: 'center', color: 'gray700' },
            c.a.createElement(
              L.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              c.a.createElement(
                J.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                L.a.ebc0cbbc,
              ),
            ),
          )
        },
        te = n('ddV6'),
        re = n.n(te),
        le = (n('7x/C'), n('JtPf'), n('Qavd'), ['disabled', 'label', 'onPress', 'path']),
        ie = function (e, a) {
          var n = e.disabled,
            t = e.label,
            r = e.onPress,
            l = e.path,
            i = b()(e, le),
            o = Object(V.f)(),
            s = c.a.useState(!1),
            u = re()(s, 2),
            d = u[0],
            p = u[1],
            m = function () {
              o.push(l)
            }
          return c.a.createElement(
            B.a,
            g()({}, i, {
              disabled: d || n,
              onPress: function (e) {
                r
                  ? (p(!0),
                    r(e)
                      .then(m)
                      .finally(function () {
                        return p(!1)
                      }))
                  : m()
              },
              ref: a,
            }),
            t,
          )
        },
        oe = c.a.forwardRef(ie),
        se = n('jAXQ'),
        ce = n.n(se),
        ue = (n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        de = n.p + 'Arrow@2x.8af675c5.png',
        pe = n.p + 'Arrow@3x.949d4365.png',
        me = n.p + 'Bench.ed26a435.png',
        ge = n.p + 'Bench@2x.ef9fb7d5.png',
        fe = n.p + 'Bench@3x.a306fd55.png',
        be = n.p + 'Cat.089435a5.png',
        he = n.p + 'Cat@2x.bca70155.png',
        ye = n.p + 'Cat@3x.2b225ef5.png',
        ve = n.p + 'Clipboard.540710d5.png',
        we = n.p + 'Clipboard@2x.72ca72e5.png',
        Se = n.p + 'Clipboard@3x.1b952e95.png',
        _e = n.p + 'CoinStairs.8488b245.png',
        ke = n.p + 'CoinStairs@2x.34fd5855.png',
        Fe = n.p + 'CoinStairs@3x.1b706305.png',
        Ee = n.p + 'HandCoins.fbd23965.png',
        Ce = n.p + 'HandCoins@2x.c1b62b75.png',
        xe = n.p + 'HandCoins@3x.7dd5f3d5.png',
        Ke = n.p + 'OneFinger.6eb5d9c5.png',
        Pe = n.p + 'OneFinger@2x.a13e1ba5.png',
        Le = n.p + 'OneFinger@3x.7f22c175.png',
        Oe = n.p + 'PaperAirplane.1ef48a05.png',
        De = n.p + 'PaperAirplane@2x.2923eb15.png',
        Te = n.p + 'PaperAirplane@3x.47e4b145.png',
        Be = n.p + 'Pricing.ec5962d5.png',
        Ie = n.p + 'Pricing@2x.f8284265.png',
        Re = n.p + 'Pricing@3x.b6cf0185.png',
        Ve = n.p + 'Puzzle.aa045515.png',
        ze = n.p + 'Puzzle@2x.5be7ab15.png',
        Ae = n.p + 'Puzzle@3x.1796b225.png',
        Me = n.p + 'Thumbsup.f5be79d5.png',
        Ue = n.p + 'Thumbsup@2x.6d106945.png',
        je = n.p + 'Thumbsup@3x.6a81e6d5.png',
        He = n.p + 'TrafficLight.11644b65.png',
        Ne = n.p + 'TrafficLight@2x.5657de25.png',
        We = n.p + 'TrafficLight@3x.a5a35335.png',
        Ge = n.p + 'Uturn.c8267f55.png',
        qe = n.p + 'Uturn@2x.db3f94d5.png',
        Qe = n.p + 'Uturn@3x.22f27905.png',
        Xe = n('tn7R'),
        Ye = n('TIdA'),
        Je = n('A91F'),
        Ze = 400,
        $e = [1, 2, 3],
        ea = Object.freeze({
          Arrow: 'Arrow',
          Bench: 'Bench',
          Cat: 'Cat',
          Clipboard: 'Clipboard',
          CoinStairs: 'CoinStairs',
          HandCoins: 'HandCoins',
          OneFinger: 'OneFinger',
          PaperAirplane: 'PaperAirplane',
          Pricing: 'Pricing',
          Puzzle: 'Puzzle',
          Thumbsup: 'Thumbsup',
          TrafficLight: 'TrafficLight',
          Uturn: 'Uturn',
        }),
        aa = Object(Xe.a)(ea).reduce(function (e, a) {
          var n = Math.max.apply(Math, $e)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Ze * n, height: 250 * n },
              customVariants: $e.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Ze * e, height: 250 * e }
              }),
            }),
            e
          )
        }, {}),
        na = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? Ze : n,
            r = aa[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            z.a,
            { style: [ta.illustration, s] },
            c.a.createElement(Ye.a, {
              accessibilityLabel: '',
              aspectMode: Je.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        ta = M.a.create(function (e) {
          return { illustration: { alignSelf: 'center' } }
        }),
        ra = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            r = e.subtext
          return c.a.createElement(
            c.a.Fragment,
            null,
            t && c.a.createElement(na, { type: t, width: 311 }),
            c.a.createElement(
              J.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title2',
                style: t && la.headline,
                weight: 'heavy',
              },
              n,
            ),
            c.a.createElement(J.b, { align: a, color: 'gray700', style: la.subtext }, r),
          )
        },
        la = M.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space8 } }
        }),
        ia = L.a.feb54b4f,
        oa = L.a.bac156a6,
        sa = L.a.a3a20a10,
        ca = L.a.b26ae507,
        ua = L.a.a753a87f,
        da = L.a.abfaa527,
        pa = Y.a.getTruncatedCount(1e4),
        ma = L.a.fdd95737({ minFollowersCount: pa }),
        ga = Y.a.getTruncatedCount(25),
        fa = L.a.a0dcad86({ minTweetsCount: ga }),
        ba = L.a.c27f57ac,
        ha = void 0 !== l ? l : (l = n('RLjm')),
        ya = function (e) {
          var a = e.user,
            n = ce()(ha, a),
            t = (null == n ? void 0 : n.super_following_eligibility) || [],
            r = 0 === t.length,
            l = r ? ea.Arrow : ea.TrafficLight,
            i = r ? ia : sa,
            o = r ? oa : ca,
            s = [
              { label: ma, checked: !t.includes('followers') },
              { label: fa, checked: !t.includes('tweets') },
              { label: ba, checked: !t.includes('age') },
            ]
          return c.a.createElement(
            H,
            { withInfoButton: !0 },
            c.a.createElement(ra, { headline: i, illustration: l, subtext: o }),
            c.a.createElement(ee, { items: s }),
            r && c.a.createElement(ne, null),
            c.a.createElement(oe, { disabled: !r, label: ua, path: v.oneMoreThing }),
            c.a.createElement(oe, { label: da, path: v.oneMoreThing }),
          )
        },
        va = n('9RkS'),
        wa = L.a.bbb89925,
        Sa = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            o = c.a.useState(i),
            s = re()(o, 2),
            u = s[0],
            d = s[1],
            p = Math.round(a * r * (u / 100))
          return c.a.createElement(
            z.a,
            { style: _a.container },
            c.a.createElement(
              J.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              c.a.createElement(
                L.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                c.a.createElement(J.b, { weight: 'bold' }, L.a.a7dd00ea),
                c.a.createElement(
                  J.b,
                  { style: _a.earnings, weight: 'heavy' },
                  L.a.c62c1d30({ earnings: '$'.concat(Y.a.getTruncatedCount(p)) }),
                ),
                c.a.createElement(J.b, { color: 'green500', style: _a.asteriskLeft }, L.a.e0fb982b),
              ),
            ),
            c.a.createElement(
              z.a,
              { style: _a.slider },
              c.a.createElement(va.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: wa({ percent: u }),
                value: u,
              }),
            ),
            c.a.createElement(
              J.b,
              { color: 'green500', size: 'subtext3', style: _a.footnote },
              c.a.createElement(
                L.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                c.a.createElement(J.b, { style: _a.asteriskRight }, L.a.e263c38e),
              ),
            ),
          )
        },
        _a = M.a.create(function (e) {
          return {
            container: {
              backgroundColor: e.colors.green50,
              paddingHorizontal: e.spaces.space56,
              paddingVertical: e.spaces.space32,
            },
            earnings: {
              display: 'block',
              lineHeight: '70px',
              fontSize: '60px',
              marginTop: e.spaces.space12,
              marginBottom: e.spaces.space2,
            },
            slider: { marginTop: e.spaces.space24 },
            asteriskLeft: { marginLeft: e.spaces.space2 },
            asteriskRight: { marginRight: e.spaces.space2 },
            footnote: { marginTop: e.spaces.space24 },
          }
        }),
        ka = n('6iuV'),
        Fa = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        Ea = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return c.a.createElement(
            z.a,
            { style: Ca.container },
            c.a.createElement(Fa.a, { Icon: a, color: 'neutral' }),
            c.a.createElement(J.b, { size: 'headline2', style: Ca.title, weight: 'bold' }, t),
            c.a.createElement(J.b, { color: 'gray700', style: Ca.description }, n),
          )
        },
        Ca = M.a.create(function (e) {
          return {
            container: {
              borderRadius: e.borderRadii.medium,
              boxShadow: e.boxShadows.xSmall,
              width: 224,
              margin: e.spaces.space12,
              padding: e.spaces.space24,
            },
            title: { marginTop: e.spaces.space12 },
            description: { marginTop: e.spaces.space4 },
          }
        }),
        xa = n('sUoZ'),
        Ka = n('witV'),
        Pa = n('ACHU'),
        La = [
          { Icon: xa.a, title: L.a.d31c5997, description: L.a.hda1e780 },
          { Icon: Ka.a, title: L.a.d08d0bb2, description: L.a.cbd8b105 },
          { Icon: Pa.a, title: L.a.becb4930, description: L.a.g743ef96 },
        ],
        Oa = function () {
          return c.a.createElement(
            ka.a,
            null,
            La.map(function (e) {
              return c.a.createElement(Ea, g()({}, e, { key: e.title }))
            }),
          )
        },
        Da = L.a.a6777c1b,
        Ta = L.a.j5dc36d7,
        Ba = L.a.c45b2f06,
        Ia = L.a.hb6b432e,
        Ra = L.a.cd5cae15,
        Va = L.a.f7239f4c,
        za = L.a.g8cdf707,
        Aa = L.a.bff8472e,
        Ma = L.a.e533715d,
        Ua = void 0 !== i ? i : (i = n('xd+q')),
        ja = function (e) {
          var a = e.user,
            n = ce()(Ua, a).legacy.followers_count
          return c.a.createElement(
            H,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            c.a.createElement(
              J.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Da,
            ),
            c.a.createElement(J.b, null, Ta),
            c.a.createElement(
              J.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ba,
            ),
            c.a.createElement(J.b, { color: 'gray700' }, Ia),
            c.a.createElement(na, { type: ea.HandCoins }),
            c.a.createElement(
              J.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ra,
            ),
            c.a.createElement(Oa, null),
            c.a.createElement(
              J.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Va,
            ),
            c.a.createElement(Sa, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            c.a.createElement(
              J.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              za,
            ),
            c.a.createElement(J.b, { color: 'gray700' }, Aa),
            c.a.createElement(oe, { color: 'plum500', label: Ma, path: v.eligibility }),
          )
        },
        Ha = L.a.d0fc4890,
        Na = L.a.c64384b6,
        Wa = L.a.c3d89aca,
        Ga = function () {
          return c.a.createElement(
            H,
            { withInfoButton: !0 },
            c.a.createElement(ra, { align: 'center', headline: Ha, illustration: ea.OneFinger, subtext: Na }),
            c.a.createElement(oe, { label: Wa, path: v.completeProfile }),
          )
        },
        qa = n('tI3i'),
        Qa = n.n(qa),
        Xa = n('FGLp'),
        Ya = (n('2G9S'), n('Hsf0')),
        Ja = n.n(Ya),
        Za = function (e) {
          return Ja()(void 0 !== o ? o : (o = n('l/EB')), e).__id
        },
        $a = function (e, a) {
          var n = Za(a),
            t = e.get(n)
          return Qa()(t, 'viewer must be defined'), t
        },
        en = 'super_follows_application_draft',
        an = function (e, a) {
          return $a(e, a).getLinkedRecord(en)
        },
        nn = n('HG4m'),
        tn = n.n(nn),
        rn = n('Ud88'),
        ln = n.n(rn)
      function on(e, a) {
        var n = ln()()
        Object(Xa.a)(function () {
          Qa()(e, 'viewerRef must be defined'),
            tn()(n, function (n) {
              !(function (e, a) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  t = n.content_category,
                  r = void 0 === t ? [] : t,
                  l = n.content_category_other,
                  i = void 0 === l ? null : l,
                  o = n.content_creation_platform,
                  s = void 0 === o ? [] : o,
                  c = n.content_creation_platform_other,
                  u = void 0 === c ? null : c,
                  d = n.ethnicity,
                  p = void 0 === d ? [] : d,
                  m = n.gender,
                  g = void 0 === m ? [] : m,
                  f = n.purpose,
                  b = void 0 === f ? null : f,
                  h = Za(a),
                  y = $a(e, a)
                if (!an(e, a)) {
                  var v = e.create(''.concat(h, ':').concat(en), 'SuperFollowsApplicationDraft')
                  v.setValue(r, 'content_category'),
                    v.setValue(i, 'content_category_other'),
                    v.setValue(s, 'content_creation_platform'),
                    v.setValue(u, 'content_creation_platform_other'),
                    v.setValue(b, 'purpose'),
                    v.setValue(p, 'ethnicity'),
                    v.setValue(g, 'gender'),
                    y.setLinkedRecord(v, en)
                }
              })(n, e, a)
            })
        })
      }
      function sn(e, a) {
        var n = ln()()
        return c.a.useCallback(
          function (t) {
            Qa()(e, 'viewerRef must be defined'),
              tn()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = an(e, a)
                  Qa()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var cn,
        un,
        dn,
        pn,
        mn,
        gn,
        fn,
        bn,
        hn,
        yn,
        vn,
        wn,
        Sn,
        _n,
        kn = n('p+r5'),
        Fn = L.a.f7997b16,
        En = L.a.fc00ab5b,
        Cn = L.a.c249167f,
        xn = L.a.b772cd65,
        Kn = void 0 !== cn ? cn : (cn = n('xhT1')),
        Pn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ce()(Kn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = sn(r, 'content_category_other')
          return c.a.createElement(
            H,
            { title: Fn },
            c.a.createElement(kn.a, {
              helperText: Cn,
              label: En,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(B.a, null, xn),
          )
        },
        Ln = n('fyvP'),
        On = n('csss'),
        Dn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(V.f)()
          return c.a.createElement(On.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        Tn = L.a.f7997b16,
        Bn = L.a.c144fa52,
        In = [
          L.a.b1f2e8ce,
          L.a.jfec3aa0,
          L.a.e08a6e6f,
          L.a.b743702c,
          L.a.h2401e36,
          L.a.ed7e6675,
          L.a.fecc3791,
          L.a.d80b0f11,
          L.a.b29a93b1,
          L.a.c5d190c0,
          L.a.i6dfc494,
          L.a.ff2b68ca,
          L.a.e404203c,
          L.a.ab389321,
          L.a.a46fdec4,
          L.a.add55c97,
          L.a.f28d8b06,
          L.a.c8ee31da,
          L.a.e0234d02,
          L.a.h9d38a08,
          L.a.fe6841bd,
          L.a.e031e06a,
          L.a.i5cade16,
          L.a.e084f2af,
          L.a.a9db15b2,
          L.a.d27beb9e,
          L.a.a92db4a9,
          L.a.fc64990d,
          L.a.hb5f1d64,
        ],
        Rn = L.a.c365dcc5,
        Vn = L.a.bd44a8a8,
        zn = void 0 !== un ? un : (un = n('JB6R')),
        An = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ce()(zn, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = sn(r, 'content_category'),
            o = In.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            H,
            { title: Tn },
            c.a.createElement(Ln.a, {
              description: Bn,
              label: Bn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(Dn, { helpText: Vn, label: Rn, path: v.submitCategoriesOther }),
          )
        },
        Mn = L.a.d94a9a17,
        Un = L.a.a35394b3,
        jn = [
          L.a.e375c2df,
          L.a.gf30371a,
          L.a.b3773d47,
          L.a.a45caf17,
          L.a.e5f515b8,
          L.a.e3b35497,
          L.a.i83206dc,
          L.a.a4ee9393,
          L.a.ab09972f,
          L.a.jafe3705,
        ],
        Hn = void 0 !== dn ? dn : (dn = n('H1we')),
        Nn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ce()(Hn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = sn(r, 'ethnicity'),
            o = jn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            H,
            { title: Mn },
            c.a.createElement(Ln.a, {
              description: Un,
              label: Un,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        Wn = L.a.a8d0108d,
        Gn = L.a.a35394b3,
        qn = [
          L.a.de32365f,
          L.a.b6ab31bd,
          L.a.ffc23188,
          L.a.h1cc7091,
          L.a.hca27829,
          L.a.b3af7344,
          L.a.he3f1435,
          L.a.c3c16abb,
        ],
        Qn = void 0 !== pn ? pn : (pn = n('VG5i')),
        Xn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ce()(Qn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = sn(r, 'gender'),
            o = qn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            H,
            { title: Wn },
            c.a.createElement(Ln.a, {
              description: Gn,
              label: Gn,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        Yn = L.a.da8ea7da,
        Jn = L.a.d7081f91,
        Zn = L.a.j349548f,
        $n = L.a.b772cd65,
        et = void 0 !== mn ? mn : (mn = n('+OUG')),
        at = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ce()(et, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = sn(r, 'content_creation_platform_other')
          return c.a.createElement(
            H,
            { title: Yn },
            c.a.createElement(kn.a, {
              helperText: Zn,
              label: Jn,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(B.a, null, $n),
          )
        },
        nt = L.a.da8ea7da,
        tt = L.a.d4062c9a,
        rt = [L.a.a3021317, L.a.eb4a600d, L.a.d4d74bb3, L.a.fc738909, L.a.d8552c1a, L.a.ca07aa46],
        lt = L.a.c365dcc5,
        it = L.a.bd44a8a8,
        ot = void 0 !== gn ? gn : (gn = n('xnrs')),
        st = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ce()(ot, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = sn(r, 'content_creation_platform'),
            o = rt.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            H,
            { title: nt },
            c.a.createElement(Ln.a, {
              description: tt,
              label: tt,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(Dn, { helpText: it, label: lt, path: v.submitPlatformsOther }),
          )
        },
        ct = (n('tVqn'), n('uFXj'), L.a.f4f4dd6f),
        ut = L.a.f448cbcb,
        dt = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? ct : 'optional' === n ? ut : void 0
          return c.a.createElement(
            z.a,
            { style: pt.container },
            c.a.createElement(J.b, { size: 'headline1', weight: 'heavy' }, a),
            r && c.a.createElement(J.b, { color: t, size: 'subtext2', style: pt.subtext }, r),
          )
        },
        pt = M.a.create(function (e) {
          return {
            container: {
              borderColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              borderBottomWidth: e.borderWidths.small,
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space12,
              paddingHorizontal: e.spaces.space16,
            },
            subtext: { marginTop: e.spaces.space2 },
          }
        }),
        mt = n('jV+4'),
        gt = n('Xrkv'),
        ft = n('9SqB'),
        bt = n.n(ft),
        ht = L.a.e873f0ae,
        yt = L.a.f095a24a,
        vt = L.a.i5f7b6b8,
        wt = L.a.d1f6d336,
        St = L.a.f7997b16,
        _t = L.a.c144fa52,
        kt = L.a.f1bf337d,
        Ft = L.a.da8ea7da,
        Et = L.a.d4062c9a,
        Ct = L.a.e963d587,
        xt = L.a.ede0ac3e,
        Kt = L.a.ffb6cb88,
        Pt = L.a.b2159e8e,
        Lt = L.a.feacb49d,
        Ot = L.a.je17c987,
        Dt = L.a.d94a9a17,
        Tt = L.a.a8d0108d,
        Bt = L.a.gfc80842,
        It = void 0 !== fn ? fn : (fn = n('pLb/')),
        Rt = void 0 !== bn ? bn : (bn = n('3qCL')),
        Vt = void 0 !== hn ? hn : (hn = n('AyUU')),
        zt = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i,
            o,
            s = e.user,
            u = e.viewer,
            d = ce()(It, s),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = ce()(Rt, u),
            g = m.super_follows_application_draft,
            f = (null !== (a = null == g ? void 0 : g.content_category) && void 0 !== a ? a : []).concat(
              null !== (n = null == g ? void 0 : g.content_category_other) && void 0 !== n ? n : [],
            ),
            b = (null !== (t = null == g ? void 0 : g.content_creation_platform) && void 0 !== t ? t : []).concat(
              null !== (r = null == g ? void 0 : g.content_creation_platform_other) && void 0 !== r ? r : [],
            ),
            h = null !== (l = null == g ? void 0 : g.purpose) && void 0 !== l ? l : '',
            y = null !== (i = null == g ? void 0 : g.ethnicity) && void 0 !== i ? i : [],
            w = null !== (o = null == g ? void 0 : g.gender) && void 0 !== o ? o : [],
            S = f.length && b.length && h.trim(),
            k = sn(m, 'purpose'),
            F = bt()(Vt),
            E = re()(F, 2),
            C = E[0],
            x = E[1]
          return c.a.createElement(
            H,
            { withInfoButton: !0 },
            c.a.createElement(ra, { headline: ht, illustration: ea.Clipboard, subtext: yt }),
            c.a.createElement(dt, { title: vt }),
            c.a.createElement(J.b, null, wt),
            p && c.a.createElement(mt.a, { screenName: p }),
            c.a.createElement(dt, { title: St, type: 'required' }),
            c.a.createElement(J.b, { color: 'gray700' }, _t),
            c.a.createElement(Dn, { description: Object(gt.a)(f, !0), label: kt, path: v.submitCategories }),
            c.a.createElement(dt, { title: Ft, type: 'required' }),
            c.a.createElement(J.b, { color: 'gray700' }, Et),
            c.a.createElement(Dn, { description: Object(gt.a)(b, !0), label: Ct, path: v.submitPlatforms }),
            c.a.createElement(dt, { title: xt, type: 'required' }),
            c.a.createElement(kn.a, {
              helperText: Pt,
              label: Kt,
              name: 'plannedUsage',
              onChange: function (e) {
                k(e.currentTarget.value)
              },
              value: h,
            }),
            c.a.createElement(dt, { title: Lt, type: 'optional' }),
            c.a.createElement(J.b, { color: 'gray700' }, Ot),
            c.a.createElement(Dn, { description: Object(gt.a)(y, !0), label: Dt, path: v.submitEthnicities }),
            c.a.createElement(Dn, { description: Object(gt.a)(w, !0), label: Tt, path: v.submitGenders }),
            c.a.createElement(ne, null),
            c.a.createElement(oe, {
              disabled: !S || x,
              label: Bt,
              onPress: function () {
                return new Promise(function (e, a) {
                  C({
                    variables: { category: f, platform: b, purpose: h, ethnicity: y, gender: w },
                    onCompleted: function (a, n) {
                      return e()
                    },
                    onError: a,
                  })
                })
              },
              path: _,
            }),
          )
        },
        At = void 0 !== yn ? yn : (yn = n('o/nB')),
        Mt = void 0 !== vn ? vn : (vn = n('lZLw')),
        Ut = function (e) {
          var a = e.user,
            n = e.viewer,
            t = c.a.useContext(G.a).featureSwitches,
            r = ce()(At, a),
            l = ce()(Mt, n)
          if ((on(l), !t.isTrue('super_follow_web_application_enabled')))
            throw new Error('Super Follows application is not enabled')
          return null == l.super_follows_application_draft
            ? c.a.createElement(W.a, { to: y })
            : c.a.createElement(
                V.d,
                null,
                c.a.createElement(V.b, { exact: !0, path: v.eligibility }, c.a.createElement(ya, { user: r })),
                c.a.createElement(V.b, { exact: !0, path: v.oneMoreThing }, c.a.createElement(Ga, null)),
                c.a.createElement(V.b, { exact: !0, path: v.completeProfile }, c.a.createElement(X, null)),
                c.a.createElement(V.b, { exact: !0, path: v.submit }, c.a.createElement(zt, { user: r, viewer: l })),
                c.a.createElement(V.b, { exact: !0, path: v.submitCategories }, c.a.createElement(An, { viewer: l })),
                c.a.createElement(
                  V.b,
                  { exact: !0, path: v.submitCategoriesOther },
                  c.a.createElement(Pn, { viewer: l }),
                ),
                c.a.createElement(V.b, { exact: !0, path: v.submitPlatforms }, c.a.createElement(st, { viewer: l })),
                c.a.createElement(
                  V.b,
                  { exact: !0, path: v.submitPlatformsOther },
                  c.a.createElement(at, { viewer: l }),
                ),
                c.a.createElement(V.b, { exact: !0, path: v.submitEthnicities }, c.a.createElement(Nn, { viewer: l })),
                c.a.createElement(V.b, { exact: !0, path: v.submitGenders }, c.a.createElement(Xn, { viewer: l })),
                c.a.createElement(V.b, { path: v.root }, c.a.createElement(ja, { user: r })),
              )
        },
        jt = (n('KqXw'), n('MvUL'), n('eb3s')),
        Ht = L.a.af4d0a80,
        Nt = L.a.c701e5cc,
        Wt = L.a.a649778b,
        Gt = L.a.d4ab68e2,
        qt = function (e) {
          var a = e.onNavigation,
            n = e.shouldBlockNavigation,
            t = Object(V.f)(),
            r = c.a.useState(void 0),
            l = re()(r, 2),
            i = l[0],
            o = l[1],
            s = c.a.useCallback(
              function (e, a) {
                return !n(e, a) || (o({ nextLocation: e, action: a }), !1)
              },
              [o, n],
            )
          c.a.useEffect(
            function () {
              return t.block(s)
            },
            [s, t],
          )
          var u = c.a.useCallback(
              function () {
                o(void 0)
              },
              [o],
            ),
            d = c.a.useCallback(
              function () {
                null == a || a(),
                  o(function (e) {
                    if (null != e) {
                      var a = e.action,
                        n = e.nextLocation
                      switch (a) {
                        case 'PUSH':
                          t.push(n)
                          break
                        case 'REPLACE':
                          t.replace(n)
                          break
                        case 'POP':
                          t.goBackThroughModals({ fallbackPath: h })
                      }
                    }
                  })
              },
              [t, a, o],
            )
          return i
            ? c.a.createElement(jt.a, {
                cancelButtonLabel: Wt,
                confirmButtonLabel: Gt,
                confirmButtonType: 'destructiveFilled',
                headline: Ht,
                onCancel: u,
                onConfirm: d,
                text: Nt,
              })
            : null
        },
        Qt = (n('ho0z'), n('cHvH')),
        Xt = function (e) {
          var a = e.children,
            n = e.style,
            t = Object(Qt.b)().windowWidth > M.a.theme.breakpoints.medium ? Yt.marginWide : Yt.marginNarrow
          return c.a.createElement(z.a, { style: [n, t] }, a)
        },
        Yt = M.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space72 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        Jt = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(
            z.a,
            { style: [er.frame, n] },
            c.a.createElement(
              z.a,
              { style: er.browserBar },
              c.a.createElement(
                z.a,
                { style: er.browserBarButtons },
                c.a.createElement(z.a, { style: er.browserBarButton }),
                c.a.createElement(z.a, { style: er.browserBarButton }),
                c.a.createElement(z.a, { style: er.browserBarButton }),
              ),
              c.a.createElement(
                z.a,
                { style: er.browserBarUrlInputWrapper },
                c.a.createElement(z.a, { style: er.browserBarUrlInput }),
              ),
            ),
            a,
          )
        },
        Zt = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(z.a, { style: n }, c.a.createElement(z.a, { style: er.content }, a))
        },
        $t = function (e) {
          var a = e.children,
            n = e.style
          return Object(Qt.b)().windowWidth > M.a.theme.breakpoints.medium
            ? c.a.createElement(Jt, { style: n }, c.a.createElement(Zt, { style: er.contentWide }, a))
            : c.a.createElement(Zt, { style: n }, a)
        },
        er = M.a.create(function (e) {
          return {
            frame: {
              backgroundColor: e.colors.gray50,
              borderRadius: e.borderRadii.medium,
              boxShadow: e.boxShadows.medium,
            },
            browserBar: {
              backgroundColor: e.colors.cellBackground,
              borderTopLeftRadius: e.borderRadii.medium,
              borderTopRightRadius: e.borderRadii.medium,
              borderBottomWidth: e.spaces.space1,
              borderBottomColor: e.colors.gray200,
              display: 'inline-flex',
              flexDirection: 'row',
              gap: e.spaces.space36,
              paddingHorizontal: e.spaces.space20,
            },
            browserBarButtons: {
              alignItems: 'center',
              display: 'inline-flex',
              flexDirection: 'row',
              gap: e.spaces.space8,
              height: e.spaces.space40,
            },
            browserBarButton: {
              backgroundColor: e.colors.gray200,
              borderColor: e.colors.gray400,
              borderRadius: e.borderRadii.infinite,
              borderWidth: e.borderWidths.small,
              height: e.spaces.space12,
              width: e.spaces.space12,
            },
            browserBarUrlInputWrapper: { flex: 1, height: e.spaces.space40, justifyContent: 'center' },
            browserBarUrlInput: {
              backgroundColor: e.colors.gray50,
              borderRadius: e.borderRadii.infinite,
              height: e.spaces.space28,
            },
            contentWide: {
              paddingBottom: e.spaces.space32,
              paddingHorizontal: e.spaces.space32,
              paddingTop: e.spaces.space12,
            },
            content: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.large,
              boxShadow: e.boxShadows.medium,
              minHeight: 358,
              overflow: 'hidden',
            },
          }
        }),
        ar = n('2fsM'),
        nr = function (e) {
          return c.a.createElement(
            $t,
            null,
            c.a.createElement(z.a, { style: tr.browserContent }, c.a.createElement(ar.a, e)),
          )
        },
        tr = M.a.create(function (e) {
          return { browserContent: { paddingBottom: e.spaces.space48 } }
        }),
        rr = ['label', 'path'],
        lr = function (e) {
          var a = e.label,
            n = e.path,
            t = b()(e, rr),
            r = Object(V.f)()
          return c.a.createElement(
            J.b,
            g()({}, t, {
              onPress: function () {
                r.push(n)
              },
              underlineWeight: 'heavy',
              weight: 'bold',
              withUnderline: !0,
            }),
            a,
          )
        },
        ir = L.a.hf6f2913,
        or = L.a.i859a9d3,
        sr = M.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        cr = function (e) {
          var a = e.path,
            n = e.style
          return c.a.createElement(
            z.a,
            { style: [sr.root, n] },
            c.a.createElement(J.b, { size: 'headline2', weight: 'heavy' }, ir),
            c.a.createElement(lr, { label: or, path: a }),
          )
        },
        ur = n('0yYu'),
        dr = 'super_follows_onboarding_draft',
        pr = function (e, a) {
          return $a(e, a).getLinkedRecord(dr)
        }
      function mr(e, a) {
        var n = ln()()
        Object(Xa.a)(function () {
          Qa()(e, 'viewerRef must be defined'),
            tn()(n, function (n) {
              !(function (e, a) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  t = n.creator_intro,
                  r = void 0 === t ? null : t,
                  l = n.description,
                  i = void 0 === l ? null : l,
                  o = n.selected_price,
                  s = void 0 === o ? null : o,
                  c = Za(a),
                  u = $a(e, a)
                if (!pr(e, a)) {
                  var d = e.create(''.concat(c, ':').concat(dr), 'SuperFollowsOnboardingDraft')
                  d.setValue(r, 'creator_intro'),
                    d.setValue(i, 'description'),
                    d.setValue(s, 'selected_price'),
                    u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                }
              })(n, e, a)
            })
        })
      }
      function gr(e, a) {
        var n = ln()()
        return c.a.useCallback(
          function (t) {
            Qa()(e, 'viewerId must be defined'),
              tn()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = pr(e, a)
                  Qa()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var fr,
        br,
        hr,
        yr,
        vr,
        wr,
        Sr,
        _r,
        kr,
        Fr,
        Er,
        Cr,
        xr,
        Kr,
        Pr,
        Lr,
        Or,
        Dr,
        Tr,
        Br,
        Ir,
        Rr,
        Vr,
        zr,
        Ar,
        Mr,
        Ur,
        jr,
        Hr,
        Nr,
        Wr,
        Gr,
        qr,
        Qr,
        Xr,
        Yr,
        Jr,
        Zr,
        $r,
        el,
        al,
        nl,
        tl,
        rl,
        ll,
        il,
        ol,
        sl,
        cl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ce()(void 0 !== wn ? wn : (wn = n('krsm')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.creator_intro) && void 0 !== a
            ? a
            : ''
        },
        ul = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ce()(void 0 !== Sn ? Sn : (Sn = n('ZaCQ')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.description) && void 0 !== a
            ? a
            : ''
        },
        dl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ce()(void 0 !== _n ? _n : (_n = n('K7/K')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        pl = L.a.iba08a94,
        ml = L.a.ef354e83,
        gl = void 0 !== fr ? fr : (fr = n('UFp0')),
        fl = void 0 !== br ? br : (br = n('NmgE')),
        bl = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = ce()(gl, t),
            i = ce()(fl, r),
            o = (null == l ? void 0 : l.legacy) || {},
            s = o.name,
            u = o.profile_image_url_https,
            d = o.protected,
            p = o.screen_name,
            m = o.verified,
            g = null !== (a = cl(i)) && void 0 !== a ? a : '',
            f = null !== (n = ul(i)) && void 0 !== n ? n : ''
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Xt, { style: hl.interstitial }, c.a.createElement(ra, { headline: pl, subtext: ml })),
            c.a.createElement(ur.a, null),
            c.a.createElement(Xt, { style: hl.previewCallout }, c.a.createElement(cr, { path: x })),
            c.a.createElement(
              z.a,
              { style: hl.summaryFramed },
              c.a.createElement(nr, {
                badgeImageUrl: null != u ? u : void 0,
                badgeName: null != s ? s : void 0,
                badgeScreenName: null != p ? p : void 0,
                descriptionValue: f,
                imageUrl: null != u ? u : void 0,
                introValue: g,
                isProtected: d,
                isVerified: m,
                name: null != s ? s : void 0,
                screenName: null != p ? p : void 0,
              }),
            ),
          )
        },
        hl = M.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            blob: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
            summaryFramed: {
              marginTop: e.spaces.space20,
              marginHorizontal: e.spaces.space20,
              marginBottom: e.spaces.space32,
            },
          }
        }),
        yl = L.a.hf6f2913,
        vl = void 0 !== hr ? hr : (hr = n('MvEh')),
        wl = void 0 !== yr ? yr : (yr = n('U5ka')),
        Sl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = ce()(vl, a),
            r = ce()(wl, n)
          return c.a.createElement(H, { title: yl, withInfoButton: !0 }, c.a.createElement(bl, { user: t, viewer: r }))
        },
        _l = n('44Bp'),
        kl = ['style'],
        Fl = function (e, a) {
          var n = e.style,
            t = b()(e, kl)
          return c.a.createElement(
            $t,
            { style: n },
            c.a.createElement(c.a.Fragment, null, c.a.createElement(_l.a, g()({}, t, { ref: a }))),
          )
        },
        El = c.a.forwardRef(Fl),
        Cl = L.a.gf32cca1,
        xl = L.a.j8ba99b3,
        Kl = L.a.j679dcda,
        Pl = void 0 !== vr ? vr : (vr = n('yjSu')),
        Ll = void 0 !== wr ? wr : (wr = n('RTdz')),
        Ol = function (e, a) {
          var n = e.autoFocus,
            t = e.descriptionMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(Xa.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = ce()(Pl, r),
            s = ce()(Ll, l),
            u = o.legacy,
            d = u.profile_image_url_https,
            p = u.screen_name,
            m = ul(s),
            g = gr(s, 'description')
          return (
            Qa()('string' == typeof d, 'imageUrl must be defined'),
            Qa()('string' == typeof p, 'screenName must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Xt, { style: Tl.interstitial }, c.a.createElement(ra, { headline: Cl, subtext: xl })),
              c.a.createElement(Xt, { style: Tl.examplesLink }, c.a.createElement(lr, { label: Kl, path: C })),
              c.a.createElement(ur.a, null),
              c.a.createElement(Xt, { style: Tl.previewCallout }, c.a.createElement(cr, { path: x })),
              c.a.createElement(El, {
                autoFocus: n,
                imageUrl: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                screenName: p,
                style: Tl.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(z.a, { ref: i }),
            )
          )
        },
        Dl = c.a.forwardRef(Ol),
        Tl = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Bl =
          (n('hBpG'),
          n('5BYb'),
          function (e) {
            var a, t
            return null !==
              (a =
                null === (t = ce()(void 0 !== _r ? _r : (_r = n('WDhg')), e).super_follow_creator_benefits) ||
                void 0 === t
                  ? void 0
                  : t.creator_intro) && void 0 !== a
              ? a
              : ''
          }),
        Il = function (e) {
          var a,
            t,
            r,
            l = (
              null !==
                (a =
                  null === (t = ce()(void 0 !== kr ? kr : (kr = n('G/nI')), e).super_follow_creator_benefits) ||
                  void 0 === t
                    ? void 0
                    : t.benefits_data) && void 0 !== a
                ? a
                : []
            ).find(function (e) {
              return 'ExclusiveContent' === e.benefit_type
            })
          return null !== (r = null == l ? void 0 : l.description) && void 0 !== r ? r : ''
        },
        Rl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ce()(void 0 !== Fr ? Fr : (Fr = n('dGIC')), e).super_follow_creator_price_metadata) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        Vl = (n('jwue'), n('+oxZ'), void 0 !== Er ? Er : (Er = n('rwq4'))),
        zl = void 0 !== Cr ? Cr : (Cr = n('E9LA')),
        Al = function (e, a) {
          var t = a.creatorIntro,
            r = a.description,
            l = ce()(Vl, e),
            i = (function (e) {
              var a
              return null === (a = ce()(void 0 !== Sr ? Sr : (Sr = n('lWeI')), e).super_follow_creator_benefits) ||
                void 0 === a
                ? void 0
                : a.__id
            })(l),
            o = Bl(l),
            s = Il(l),
            u = t || o,
            d = r || s,
            p = bt()(zl),
            m = re()(p, 2),
            g = m[0],
            f = m[1]
          return [
            c.a.useCallback(
              function () {
                return new Promise(function (e, a) {
                  g({
                    variables: {
                      creator_intro: u,
                      benefits_data: [{ benefit_type: 'ExclusiveContent', title: '', description: d }],
                    },
                    onCompleted: function (a, n) {
                      return e()
                    },
                    onError: a,
                    updater: function (e) {
                      Qa()(i, 'benefitsId must be specified')
                      var a = e.get(i)
                      if (
                        (Qa()(a, 'benefitsRecord must be specified'),
                        u !== o && a.setValue(u, 'creator_intro'),
                        d !== s)
                      ) {
                        var n = a.getLinkedRecords('benefits_data')
                        null == n ||
                          n.forEach(function (e) {
                            'ExclusiveContent' === (null == e ? void 0 : e.getValue('benefit_type')) &&
                              (null == e || e.setValue(d, 'description'))
                          })
                      }
                    },
                  })
                })
              },
              [i, u, d, o, s, g],
            ),
            f,
          ]
        },
        Ml = L.a.cd5cae15,
        Ul = L.a.e36287c6,
        jl = L.a.b772cd65,
        Hl = void 0 !== xr ? xr : (xr = n('kz1e')),
        Nl = void 0 !== Kr ? Kr : (Kr = n('M3aw')),
        Wl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = ce()(Hl, a),
            r = ce()(Nl, n),
            l = Il(t),
            i = ul(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = Al(t, { description: i }),
            u = re()(s, 2),
            d = u[0],
            p = u[1],
            m = { disabled: !o || p, label: jl, onPress: d, path: S.root, type: 'primaryFilled' },
            f = c.a.createElement(oe, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            H,
            { rightControl: f, subtitle: Ul, title: Ml },
            c.a.createElement(Dl, { autoFocus: !0, descriptionMaxLength: 140, user: t, viewer: r }),
          )
        },
        Gl = n('MAc7'),
        ql = ['style'],
        Ql = function (e, a) {
          var n = e.style,
            t = b()(e, ql)
          return c.a.createElement($t, { style: n }, c.a.createElement(Gl.a, g()({}, t, { ref: a })))
        },
        Xl = c.a.forwardRef(Ql),
        Yl = L.a.j3253319,
        Jl = L.a.h1e80993,
        Zl = L.a.j679dcda,
        $l = void 0 !== Pr ? Pr : (Pr = n('hGtx')),
        ei = void 0 !== Lr ? Lr : (Lr = n('DWSt')),
        ai = function (e, a) {
          var n = e.autoFocus,
            t = e.introMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(Xa.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = ce()($l, r),
            s = ce()(ei, l),
            u = o.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m = cl(s),
            g = gr(s, 'creator_intro')
          return (
            Qa()('string' == typeof p, 'imageUrl must be defined'),
            Qa()('string' == typeof d, 'name must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Xt, { style: ti.interstitial }, c.a.createElement(ra, { headline: Yl, subtext: Jl })),
              c.a.createElement(Xt, { style: ti.examplesLink }, c.a.createElement(lr, { label: Zl, path: E })),
              c.a.createElement(ur.a, null),
              c.a.createElement(Xt, { style: ti.previewCallout }, c.a.createElement(cr, { path: x })),
              c.a.createElement(Xl, {
                autoFocus: n,
                imageUrl: p,
                name: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                style: ti.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(z.a, { ref: i }),
            )
          )
        },
        ni = c.a.forwardRef(ai),
        ti = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        ri = L.a.cd5cae15,
        li = L.a.c0348963,
        ii = L.a.b772cd65,
        oi = void 0 !== Or ? Or : (Or = n('oyMe')),
        si = void 0 !== Dr ? Dr : (Dr = n('RL7R')),
        ci = function (e) {
          var a = e.user,
            n = e.viewer,
            t = ce()(oi, a),
            r = ce()(si, n),
            l = Bl(t),
            i = cl(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = Al(t, { creatorIntro: i }),
            u = re()(s, 2),
            d = u[0],
            p = u[1],
            m = { disabled: !o || p, label: ii, onPress: d, path: S.root, type: 'primaryFilled' },
            f = c.a.createElement(oe, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            H,
            { rightControl: f, subtitle: li, title: ri },
            c.a.createElement(ni, { autoFocus: !0, introMaxLength: 140, user: t, viewer: r }),
          )
        },
        ui = n('Nh1N'),
        di = n('yoO3'),
        pi = n('7FtF'),
        mi = n('PCeD'),
        gi = L.a.be103b84,
        fi = function () {
          return c.a.createElement(
            z.a,
            { style: bi.root },
            c.a.createElement(Z.a, { style: bi.icon }),
            c.a.createElement(J.b, { size: 'subtext2', weight: 'bold' }, gi),
          )
        },
        bi = M.a.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.medium,
              borderWidth: e.borderWidths.small,
              flexDirection: 'row',
              gap: e.spaces.space4,
              paddingHorizontal: e.spaces.space16,
              paddingVertical: e.spaces.space12,
            },
            icon: { color: e.colors.plum500, height: e.spaces.space16 },
          }
        }),
        hi = function (e) {
          var a = e.children,
            n = e.headline,
            t = e.rightControl
          return c.a.createElement(
            z.a,
            { style: yi.root },
            c.a.createElement(
              z.a,
              { style: yi.header },
              c.a.createElement(
                J.b,
                {
                  accessibilityLevel: 4,
                  accessibilityRole: 'heading',
                  size: 'headline2',
                  style: yi.headline,
                  weight: 'heavy',
                },
                n,
              ),
              a,
            ),
            t,
          )
        },
        yi = M.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        vi = n('4zmP'),
        wi = n.p + 'Chat.62494e65.png',
        Si = n.p + 'Chat@2x.f6eeca05.png',
        _i = n.p + 'Chat@3x.dd8438c5.png',
        ki = n.p + 'Cog.788d3515.png',
        Fi = n.p + 'Cog@2x.3528d165.png',
        Ei = n.p + 'Cog@3x.e4185e95.png',
        Ci = n.p + 'Coin.684ea185.png',
        xi = n.p + 'Coin@2x.9e020695.png',
        Ki = n.p + 'Coin@3x.d5ecbc95.png',
        Pi = n.p + 'CoinPurse.5e7e5f25.png',
        Li = n.p + 'CoinPurse@2x.62abfad5.png',
        Oi = n.p + 'CoinPurse@3x.6b9f5d05.png',
        Di = n.p + 'Cone.e7e68c95.png',
        Ti = n.p + 'Cone@2x.94d66a15.png',
        Bi = n.p + 'Cone@3x.f4718655.png',
        Ii = n.p + 'Cross.eed0ff55.png',
        Ri = n.p + 'Cross@2x.68249435.png',
        Vi = n.p + 'Cross@3x.59595055.png',
        zi = n.p + 'FirstAid.962ae7e5.png',
        Ai = n.p + 'FirstAid@2x.09640055.png',
        Mi = n.p + 'FirstAid@3x.b6884b15.png',
        Ui = n.p + 'Heart.a7bdca85.png',
        ji = n.p + 'Heart@2x.a3108ce5.png',
        Hi = n.p + 'Heart@3x.2866f2f5.png',
        Ni = n.p + 'LifeSaver.19af1fb5.png',
        Wi = n.p + 'LifeSaver@2x.5f9465a5.png',
        Gi = n.p + 'LifeSaver@3x.3cde1ca5.png',
        qi = n.p + 'Lightbulb.632a0de5.png',
        Qi = n.p + 'Lightbulb@2x.ea0a7dc5.png',
        Xi = n.p + 'Lightbulb@3x.d47fac75.png',
        Yi = n.p + 'NoEntry.89a117a5.png',
        Ji = n.p + 'NoEntry@2x.6460d275.png',
        Zi = n.p + 'NoEntry@3x.cf8e9465.png',
        $i = n.p + 'Pencil.6ac7a9a5.png',
        eo = n.p + 'Pencil@2x.e6d394c5.png',
        ao = n.p + 'Pencil@3x.7e45c2e5.png',
        no = n.p + 'PiggyBank.571af825.png',
        to = n.p + 'PiggyBank@2x.f6b3cb15.png',
        ro = n.p + 'PiggyBank@3x.f166bc15.png',
        lo = n.p + 'Plant.2e93bbb5.png',
        io = n.p + 'Plant@2x.5660c145.png',
        oo = n.p + 'Plant@3x.60b66855.png',
        so = n.p + 'Puzzle.59175915.png',
        co = n.p + 'Puzzle@2x.d2394395.png',
        uo = n.p + 'Puzzle@3x.ed9bd735.png',
        po = n.p + 'Ribbon.a0d66a65.png',
        mo = n.p + 'Ribbon@2x.d981e095.png',
        go = n.p + 'Ribbon@3x.d6c8e505.png',
        fo = n.p + 'Spheres.c33c7b95.png',
        bo = n.p + 'Spheres@2x.6b6732f5.png',
        ho = n.p + 'Spheres@3x.5e58c985.png',
        yo = n.p + 'Star.2714eb95.png',
        vo = n.p + 'Star@2x.25a57fd5.png',
        wo = n.p + 'Star@3x.206f9d85.png',
        So = n.p + 'TrashCan.7ed17045.png',
        _o = n.p + 'TrashCan@2x.79c8ba35.png',
        ko = n.p + 'TrashCan@3x.91184ba5.png',
        Fo = n.p + 'Wallet.0ca99435.png',
        Eo = n.p + 'Wallet@2x.d3b05545.png',
        Co = n.p + 'Wallet@3x.90c942f5.png',
        xo = [1, 2, 3],
        Ko = Object.freeze({
          Chat: 'Chat',
          Cog: 'Cog',
          Coin: 'Coin',
          CoinPurse: 'CoinPurse',
          Cone: 'Cone',
          Cross: 'Cross',
          FirstAid: 'FirstAid',
          Heart: 'Heart',
          LifeSaver: 'LifeSaver',
          Lightbulb: 'Lightbulb',
          NoEntry: 'NoEntry',
          Pencil: 'Pencil',
          PiggyBank: 'PiggyBank',
          Plant: 'Plant',
          Puzzle: 'Puzzle',
          Ribbon: 'Ribbon',
          Spheres: 'Spheres',
          Star: 'Star',
          TrashCan: 'TrashCan',
          Wallet: 'Wallet',
        }),
        Po = Object(Xe.a)(Ko),
        Lo = Po.reduce(function (e, a) {
          var n = Math.max.apply(Math, xo)
          return (
            (e[a] = {
              aspectRatio: 1,
              image: { url: r[a], width: 36 * n, height: 36 * n },
              customVariants: xo.map(function (e) {
                return { uri: r[a + (1 !== e ? ''.concat(e, 'x') : '')], width: 36 * e, height: 36 * e }
              }),
            }),
            e
          )
        }, {}),
        Oo = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? 36 : n,
            r = Lo[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            z.a,
            { style: s },
            c.a.createElement(Ye.a, {
              accessibilityLabel: '',
              aspectMode: Je.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        Do = function (e) {
          var a = e.children,
            n = e.childrenStyle,
            t = e.headline,
            r = e.illustration,
            l = e.rightControl
          return c.a.createElement(
            z.a,
            { style: To.root },
            r && c.a.createElement(Oo, { type: r, width: 36 }),
            c.a.createElement(
              z.a,
              { style: To.header },
              c.a.createElement(
                J.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: To.headline,
                  weight: 'heavy',
                },
                t,
              ),
              l,
            ),
            c.a.createElement(z.a, { style: n }, a),
          )
        },
        To = M.a.create(function (e) {
          return {
            root: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginTop: e.spaces.space20,
              marginBottom: e.spaces.space24,
            },
            header: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            headline: { marginVertical: e.spaces.space12 },
          }
        }),
        Bo = ['$refType'],
        Io = L.a.a6777c1b,
        Ro = L.a.a384fda0,
        Vo = L.a.i4313618,
        zo = L.a.c0348963,
        Ao = L.a.ic624ab2,
        Mo = L.a.ifc9b709,
        Uo = L.a.b08bbeb4,
        jo = L.a.ia9c37c4,
        Ho = L.a.fb1e4eb6,
        No = L.a.be54a312,
        Wo = L.a.cca48545,
        Go = L.a.de67bc6e,
        qo = L.a.a46cead5,
        Qo = L.a.idd8ae44,
        Xo = L.a.b28a1b48,
        Yo = L.a.f2df375b,
        Jo = L.a.f3ce76c0,
        Zo = L.a.i8982e7e,
        $o = L.a.ca5ca5ed,
        es = L.a.abd845fd,
        as = L.a.i859a9d3,
        ns = L.a.d14c7bbc,
        ts = L.a.g867481d,
        rs = L.a.f66d24be,
        ls = L.a.g5925628,
        is = void 0 !== Tr ? Tr : (Tr = n('EM6u')),
        os = void 0 !== Br ? Br : (Br = n('oNwH')),
        ss = function (e) {
          var a,
            n,
            t,
            r = e.priceOfferings,
            l = e.user,
            i = Object(V.g)(),
            o = ce()(is, r),
            s = (o.$refType, b()(o, Bo)),
            u = ce()(os, l),
            d = Bl(u),
            p = Il(u),
            m = null !== (a = Rl(u)) && void 0 !== a ? a : 'offer2',
            g = null !== (n = u.legacy.profile_image_url_https) && void 0 !== n ? n : void 0,
            f = null !== (t = u.legacy.screen_name) && void 0 !== t ? t : void 0,
            h = c.a.createElement(lr, { label: $o, path: S.perksConfirm, size: 'subtext1' }),
            y = c.a.createElement(oe, { label: es, path: S.perksIntro, size: 'small', type: 'primaryOutlined' }),
            v = c.a.createElement(oe, { label: es, path: S.perksDescription, size: 'small', type: 'primaryOutlined' })
          return c.a.createElement(
            di.a,
            null,
            c.a.createElement(
              pi.a,
              { location: i, screenType: 'secondaryDetail', title: Io },
              c.a.createElement(
                z.a,
                { style: cs.title },
                c.a.createElement(
                  J.b,
                  { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                  Io,
                ),
                c.a.createElement(fi, null),
              ),
              c.a.createElement(ur.a, null),
              c.a.createElement(
                Do,
                { childrenStyle: cs.benefits, headline: Ro, illustration: Ko.Ribbon, rightControl: h },
                c.a.createElement(J.b, { color: 'gray700' }, Vo),
                c.a.createElement(
                  hi,
                  { headline: zo, rightControl: y },
                  c.a.createElement(mi.a, { imageUrl: g, screenName: f, value: d }),
                ),
                c.a.createElement(
                  hi,
                  { headline: Ao, rightControl: v },
                  c.a.createElement(mi.a, { imageUrl: g, screenName: f, value: p }),
                ),
                c.a.createElement(hi, { headline: Mo }, c.a.createElement(J.b, { color: 'gray700' }, Uo)),
              ),
              c.a.createElement(ur.a, null),
              c.a.createElement(
                Do,
                { childrenStyle: cs.other, headline: jo, illustration: Ko.PiggyBank },
                c.a.createElement(J.b, { color: 'gray700' }, Ho),
                c.a.createElement(J.b, { size: 'headline2', weight: 'heavy' }, No({ price: s[m] })),
                c.a.createElement(vi.a, { Icon: ui.a, action: { label: as, link: T }, headline: Wo, text: Go }),
              ),
              c.a.createElement(ur.a, null),
              c.a.createElement(
                Do,
                { childrenStyle: cs.other, headline: qo, illustration: Ko.Chat },
                c.a.createElement(J.b, { color: 'gray700' }, Qo),
                c.a.createElement(
                  z.a,
                  { style: cs.buttons },
                  c.a.createElement(
                    B.a,
                    {
                      dominantColor: '#5865F2',
                      link: 'https://t.co/jPqvg6tFrDJG',
                      style: cs.button,
                      type: 'onMediaDominantColorFilled',
                    },
                    ns,
                  ),
                ),
              ),
              c.a.createElement(ur.a, null),
              c.a.createElement(
                Do,
                { childrenStyle: cs.other, headline: Xo, illustration: Ko.Lightbulb },
                c.a.createElement(J.b, { color: 'gray700' }, Yo),
                c.a.createElement(
                  z.a,
                  { style: cs.buttons },
                  c.a.createElement(
                    B.a,
                    { link: 'https://t.co/RL2NN3bEVkes', style: cs.button, type: 'primaryOutlined' },
                    ts,
                  ),
                ),
              ),
              c.a.createElement(ur.a, null),
              c.a.createElement(
                Do,
                { childrenStyle: cs.other, headline: Jo, illustration: Ko.LifeSaver },
                c.a.createElement(J.b, { color: 'gray700' }, Zo),
                c.a.createElement(
                  z.a,
                  { style: cs.buttons },
                  c.a.createElement(B.a, { link: D, style: cs.button, type: 'primaryOutlined' }, rs),
                  c.a.createElement(
                    B.a,
                    {
                      link: 'https://help.twitter.com/forms/paid-features/superfollows',
                      style: cs.button,
                      type: 'primaryOutlined',
                    },
                    ls,
                  ),
                ),
              ),
            ),
          )
        },
        cs = M.a.create(function (e) {
          return {
            title: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            benefits: { gap: e.spaces.space32, marginTop: e.spaces.space16 },
            other: { gap: e.spaces.space24, marginTop: e.spaces.space12 },
            buttons: { flexDirection: 'row', flexWrap: 'wrap', gap: e.spaces.space8 },
            button: { flex: '1 1 '.concat(e.breakpoints.micro, 'px') },
          }
        }),
        us = void 0 !== Ir ? Ir : (Ir = n('N6s9')),
        ds = void 0 !== Rr ? Rr : (Rr = n('h3lO')),
        ps = function (e) {
          var a = e.rootPath,
            n = e.user,
            t = e.viewer,
            r = ce()(us, n),
            l = ce()(ds, t),
            i = Bl(r),
            o = Il(r),
            s = Rl(r),
            u = cl(l),
            d = ul(l),
            p = dl(l),
            m = gr(l, 'creator_intro'),
            g = gr(l, 'description'),
            f = gr(l, 'selected_price')
          return {
            shouldBlockNavigation: c.a.useCallback(
              function (e, n) {
                return e.pathname === a && 'POP' === n && (u !== i || d !== o || p !== s)
              },
              [u, d, p, i, o, s, a],
            ),
            discardChanges: c.a.useCallback(
              function () {
                m(i), g(o), f(s)
              },
              [i, o, s, m, g, f],
            ),
          }
        },
        ms = void 0 !== Vr ? Vr : (Vr = n('MXCg')),
        gs = void 0 !== zr ? zr : (zr = n('mEFY')),
        fs = void 0 !== Ar ? Ar : (Ar = n('d8Sa')),
        bs = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(G.a).featureSwitches,
            l = ce()(ms, a),
            i = ce()(gs, n),
            o = ce()(fs, t),
            s = Bl(i),
            u = Il(i),
            d = Rl(i),
            p = ps({ rootPath: S.root, user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (mr(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_edit_perks_enabled'))
          )
            throw new Error('Super Follows management is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(W.a, { to: y })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(qt, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  V.d,
                  null,
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: S.perksIntro },
                    c.a.createElement(ci, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: S.perksDescription },
                    c.a.createElement(Wl, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: S.perksConfirm },
                    c.a.createElement(Sl, { user: i, viewer: o }),
                  ),
                  c.a.createElement(V.b, { path: S.root }, c.a.createElement(ss, { priceOfferings: l, user: i })),
                ),
              )
        },
        hs = L.a.b422cb62,
        ys = L.a.f08705e0,
        vs = L.a.e2cd700f,
        ws = L.a.fbfd7397,
        Ss = L.a.c1df579e,
        _s = L.a.d8637c96,
        ks = L.a.b92892dc,
        Fs = L.a.b123a502,
        Es = void 0 !== Mr ? Mr : (Mr = n('wQp3')),
        Cs = void 0 !== Ur ? Ur : (Ur = n('tfBr')),
        xs = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = ce()(Es, n),
            l = ce()(Cs, t),
            i = r.stripe_account_status,
            o = cl(l),
            s = ul(l),
            u = dl(l),
            d = [
              { label: _s, checked: !!o && !!s },
              { label: ks, checked: !!u },
              { label: Fs, checked: 'Completed' === i },
            ],
            p = d.some(function (e) {
              return e.checked
            }),
            m = c.a.createElement(oe, { label: Ss, path: w.perksIntro, size: 'small', type: 'primaryFilled' })
          return c.a.createElement(
            H,
            {
              leftControlShouldClose: !0,
              percentageComplete: a,
              rightControl: m,
              withCenteredLogo: !0,
              withInfoButton: !0,
            },
            c.a.createElement(
              Xt,
              { style: Ks.interstitial },
              c.a.createElement(ra, {
                headline: p ? vs : hs,
                illustration: p ? ea.Puzzle : ea.Cat,
                subtext: p ? ws : ys,
              }),
            ),
            c.a.createElement(Xt, { style: Ks.checks }, c.a.createElement(ee, { items: d })),
          )
        },
        Ks = M.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        Ps = n('hG8M'),
        Ls = ['style'],
        Os = function (e) {
          var a = e.style,
            n = b()(e, Ls)
          return c.a.createElement(
            $t,
            { style: a },
            c.a.createElement(Ps.a, g()({ style: Ds.superFollowsDemoBadgeHeader }, n)),
          )
        },
        Ds = M.a.create(function (e) {
          return { superFollowsDemoBadgeHeader: { alignSelf: 'center', marginBottom: e.spaces.space16 } }
        }),
        Ts = L.a.cda6bb6d,
        Bs = L.a.a15b98ec,
        Is = void 0 !== jr ? jr : (jr = n('mDly')),
        Rs = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i = e.user,
            o = ce()(Is, i),
            s = null !== (a = null == o ? void 0 : o.legacy.profile_image_url_https) && void 0 !== a ? a : void 0,
            u = null !== (n = null == o ? void 0 : o.legacy.protected) && void 0 !== n && n,
            d = null !== (t = null == o ? void 0 : o.legacy.verified) && void 0 !== t && t,
            p = null !== (r = null == o ? void 0 : o.legacy.name) && void 0 !== r ? r : void 0,
            m = null !== (l = null == o ? void 0 : o.legacy.screen_name) && void 0 !== l ? l : void 0
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Xt, { style: Vs.interstitial }, c.a.createElement(ra, { headline: Ts, subtext: Bs })),
            c.a.createElement(ur.a, null),
            c.a.createElement(Xt, { style: Vs.previewCallout }, c.a.createElement(cr, { path: x })),
            c.a.createElement(Os, {
              imageUrl: s,
              isProtected: u,
              isVerified: d,
              name: p,
              screenName: m,
              style: Vs.preview,
            }),
          )
        },
        Vs = M.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        zs = n('86D9'),
        As = L.a.cd5cae15,
        Ms = L.a.ad4a92a2,
        Us = L.a.c1df579e,
        js = void 0 !== Hr ? Hr : (Hr = n('QmjQ')),
        Hs = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = c.a.useRef(null),
            r = Object(zs.a)(t, { threshold: 0.5 }),
            l = { label: Us, path: w.perksConfirm, type: 'primaryFilled' },
            i = c.a.createElement(oe, g()({}, l, { ref: t, size: 'xLarge' })),
            o = c.a.createElement(
              oe,
              g()({}, l, { size: 'small', style: [Ns.smallButton, r ? Ns.smallButtonHidden : void 0] }),
            ),
            s = ce()(js, n)
          return c.a.createElement(
            H,
            { percentageComplete: a, rightControl: o, subtitle: Ms, title: As },
            c.a.createElement(Rs, { user: s }),
            c.a.createElement(Xt, { style: Ns.buttons }, i),
          )
        },
        Ns = M.a.create(function (e) {
          return {
            buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            smallButton: { transition: 'opacity 0.2s 0s ease-in-out' },
            smallButtonHidden: { opacity: 0 },
          }
        }),
        Ws = L.a.cd5cae15,
        Gs = L.a.e18b7a71,
        qs = L.a.c1df579e,
        Qs = void 0 !== Nr ? Nr : (Nr = n('Rthh')),
        Xs = void 0 !== Wr ? Wr : (Wr = n('aREQ')),
        Ys = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(null),
            l = Object(zs.a)(r, { threshold: 0.5 }),
            i = ce()(Qs, n),
            o = ce()(Xs, t),
            s = { label: qs, path: w.pricing, type: 'primaryFilled' },
            u = c.a.createElement(oe, g()({}, s, { ref: r, size: 'xLarge' })),
            d = c.a.createElement(
              oe,
              g()({}, s, { size: 'small', style: [Js.smallButton, l ? Js.smallButtonHidden : void 0] }),
            )
          return c.a.createElement(
            H,
            { percentageComplete: a, rightControl: d, subtitle: Gs, title: Ws },
            c.a.createElement(bl, { user: i, viewer: o }),
            c.a.createElement(Xt, { style: Js.buttons }, u),
          )
        },
        Js = M.a.create(function (e) {
          return {
            buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            smallButton: { transition: 'opacity 0.2s 0s ease-in-out' },
            smallButtonHidden: { opacity: 0 },
          }
        }),
        Zs = L.a.cd5cae15,
        $s = L.a.e36287c6,
        ec = L.a.be76dc33,
        ac = L.a.c1df579e,
        nc = void 0 !== Gr ? Gr : (Gr = n('6rkJ')),
        tc = void 0 !== qr ? qr : (qr = n('tJ4s')),
        rc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = ce()(tc, t),
            i = ce()(nc, n),
            o = ul(l),
            s = o.length > 0 && o.length <= 140,
            u = { disabled: !s, label: ac, path: w.perksBadges, type: 'primaryFilled' },
            d = c.a.createElement(oe, g()({}, u, { size: 'xLarge' })),
            p = c.a.createElement(oe, g()({}, u, { size: 'small' })),
            m = {
              children: ec,
              onClick: function () {
                var e
                null == r || null === (e = r.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            f = c.a.createElement(B.a, m),
            b = c.a.createElement(B.a, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            H,
            { percentageComplete: a, rightControl: s ? p : b, subtitle: $s, title: Zs },
            c.a.createElement(Dl, { descriptionMaxLength: 140, ref: r, user: i, viewer: l }),
            c.a.createElement(Xt, { style: lc.buttons }, s ? d : f),
          )
        },
        lc = M.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        ic = L.a.cd5cae15,
        oc = L.a.c0348963,
        sc = L.a.ef5406e3,
        cc = L.a.c1df579e,
        uc = void 0 !== Qr ? Qr : (Qr = n('02qo')),
        dc = void 0 !== Xr ? Xr : (Xr = n('TXsE')),
        pc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = ce()(uc, n),
            i = ce()(dc, t),
            o = cl(i),
            s = o.length > 0 && o.length <= 140,
            u = { disabled: !s, label: cc, path: w.perksDescription, type: 'primaryFilled' },
            d = c.a.createElement(oe, g()({}, u, { size: 'xLarge' })),
            p = c.a.createElement(oe, g()({}, u, { size: 'small' })),
            m = {
              children: sc,
              onClick: function () {
                var e
                null == r || null === (e = r.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            f = c.a.createElement(B.a, m),
            b = c.a.createElement(B.a, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            H,
            { percentageComplete: a, rightControl: s ? p : b, subtitle: oc, title: ic },
            c.a.createElement(ni, { introMaxLength: 140, ref: r, user: l, viewer: i }),
            c.a.createElement(Xt, { style: mc.buttons }, s ? d : f),
          )
        },
        mc = M.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        gc = ['$refType'],
        fc = L.a.ea8a3d2d,
        bc = L.a.f77bb178,
        hc = L.a.cd75a5d4,
        yc = L.a.g9677c6d,
        vc = L.a.abd845fd,
        wc = void 0 !== Yr ? Yr : (Yr = n('IeZm')),
        Sc = void 0 !== Jr ? Jr : (Jr = n('7ESn')),
        _c = void 0 !== Zr ? Zr : (Zr = n('By/j')),
        kc = function (e) {
          var a,
            n = e.percentageComplete,
            t = e.priceOfferings,
            r = e.viewer,
            l = ce()(wc, t),
            i = (l.$refType, b()(l, gc)),
            o = ce()(Sc, r),
            s = cl(o),
            u = ul(o),
            d = null !== (a = dl(o)) && void 0 !== a ? a : i[0],
            p = bt()(_c),
            m = re()(p, 2),
            g = m[0],
            f = m[1]
          return c.a.createElement(
            H,
            { percentageComplete: n, title: fc, withInfoButton: !0 },
            c.a.createElement(
              Xt,
              { style: Fc.interstitial },
              c.a.createElement(ra, { headline: bc({ price: i[d] }), illustration: ea.Pricing, subtext: hc }),
            ),
            c.a.createElement(
              Xt,
              { style: Fc.buttons },
              c.a.createElement(oe, {
                disabled: f,
                label: yc,
                onPress: function () {
                  return new Promise(function (e, a) {
                    g({
                      variables: {
                        creator_intro: s,
                        benefits_data: [{ benefit_type: 'ExclusiveContent', title: '', description: u }],
                        selected_price: d,
                      },
                      onCompleted: function (a, n) {
                        return e()
                      },
                      onError: a,
                    })
                  })
                },
                path: w.stripeSetup,
                size: 'large',
                type: 'primaryFilled',
              }),
              c.a.createElement(oe, {
                disabled: f,
                label: vc,
                path: w.pricing,
                size: 'large',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        Fc = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        Ec = (n('+KXO'), n('7xRU'), n('hznd')),
        Cc = ['$refType'],
        xc = L.a.ea8a3d2d,
        Kc = L.a.ic9124bf,
        Pc = L.a.g5923869,
        Lc = {
          offer1: [L.a.f025ab39, L.a.c5602dfd],
          offer2: [L.a.ib075804, L.a.j8a72f06],
          offer3: [L.a.c246656e, L.a.a92ab16c],
        },
        Oc = L.a.c1df579e,
        Dc = void 0 !== $r ? $r : ($r = n('5jO1')),
        Tc = void 0 !== el ? el : (el = n('mKqc')),
        Bc = function (e) {
          var a = e.percentageComplete,
            n = e.priceOfferings,
            t = e.viewer,
            r = ce()(Dc, n),
            l = (r.$refType, b()(r, Cc)),
            i = ce()(Tc, t),
            o = dl(i),
            s = gr(i, 'selected_price'),
            u = c.a.createElement(
              L.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              c.a.createElement(J.b, { link: D }, L.a.c336b06a),
            ),
            d = Object.keys(l).map(function (e) {
              return { label: Pc({ price: l[e] }), value: e, helpText: Lc[e].join(' ') }
            }),
            p = c.a.createElement(oe, {
              disabled: !o,
              label: Oc,
              path: w.pricingConfirm,
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            H,
            { percentageComplete: a, rightControl: p, title: xc, withInfoButton: !0 },
            c.a.createElement(Xt, { style: Ic.interstitial }, c.a.createElement(ra, { headline: Kc, subtext: u })),
            c.a.createElement(
              Xt,
              { style: Ic.prices },
              c.a.createElement(Ec.a, {
                accessibilityLabel: Kc,
                name: 'selectedPrice',
                onChange: function (e, a) {
                  s(a)
                },
                options: d,
                value: o,
              }),
            ),
          )
        },
        Ic = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        Rc = L.a.f1cb36b8,
        Vc = L.a.e20f6661,
        zc = L.a.b772cd65,
        Ac = function (e) {
          var a = e.percentageComplete,
            n = c.a.useRef(),
            t = c.a.useCallback(function () {
              var e
              null === (e = n.current) || void 0 === e || e.goBack()
            }, []),
            r = c.a.createElement(
              L.a.I18NFormatMessage,
              { $i18n: 'cf780193' },
              c.a.createElement(J.b, { weight: 'bold' }, L.a.d7d4da89),
            )
          return c.a.createElement(
            H,
            { leftControlShouldClose: !0, percentageComplete: a, screenRef: n, title: Rc, withInfoButton: !0 },
            c.a.createElement(
              Xt,
              { style: Mc.interstitial },
              c.a.createElement(ra, { headline: Vc, illustration: ea.Thumbsup, subtext: r }),
            ),
            c.a.createElement(
              Xt,
              { style: Mc.buttons },
              c.a.createElement(B.a, { onPress: t, size: 'large', type: 'primaryFilled' }, zc),
            ),
          )
        },
        Mc = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Uc = L.a.f1cb36b8,
        jc = L.a.e20f6661,
        Hc = L.a.j24c37b2,
        Nc = function (e) {
          var a = e.percentageComplete,
            n = c.a.useRef(),
            t = c.a.useCallback(function () {
              var e
              null === (e = n.current) || void 0 === e || e.goBack()
            }, []),
            r = c.a.createElement(
              L.a.I18NFormatMessage,
              { $i18n: 'cf780193' },
              c.a.createElement(J.b, { weight: 'bold' }, L.a.d7d4da89),
            )
          return c.a.createElement(
            H,
            { leftControlShouldClose: !0, percentageComplete: a, screenRef: n, title: Uc, withInfoButton: !0 },
            c.a.createElement(
              Xt,
              { style: Wc.interstitial },
              c.a.createElement(ra, { headline: jc, illustration: ea.Bench, subtext: r }),
            ),
            c.a.createElement(
              Xt,
              { style: Wc.buttons },
              c.a.createElement(B.a, { onPress: t, size: 'large', type: 'primaryFilled' }, Hc),
            ),
          )
        },
        Wc = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Gc = n('8jkQ'),
        qc = L.a.f1cb36b8,
        Qc = L.a.ja884230,
        Xc = L.a.af1b808d,
        Yc = L.a.fe339750,
        Jc = L.a.j912510a,
        Zc = void 0 !== al ? al : (al = n('xHLM')),
        $c = function (e) {
          var a = e.percentageComplete,
            n = bt()(Zc),
            t = re()(n, 2),
            r = t[0],
            l = t[1],
            i = function () {
              var e = Gc.b.get().href
              r({
                variables: { refresh_url: e, return_url: e },
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && Gc.b.navigateTo(n)
                },
              })
            }
          return c.a.createElement(
            H,
            { percentageComplete: a, title: qc, withInfoButton: !0 },
            c.a.createElement(
              Xt,
              { style: eu.interstitial },
              c.a.createElement(ra, { headline: Qc, illustration: ea.CoinStairs, subtext: Xc }),
            ),
            c.a.createElement(
              Xt,
              { style: eu.buttons },
              c.a.createElement(B.a, { disabled: l, onPress: i, size: 'large', type: 'primaryFilled' }, Yc),
              c.a.createElement(B.a, { disabled: l, onPress: i, size: 'large', type: 'primaryOutlined' }, Jc),
            ),
          )
        },
        eu = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        au = void 0 !== nl ? nl : (nl = n('UNVS')),
        nu = void 0 !== tl ? tl : (tl = n('6byF')),
        tu = void 0 !== rl ? rl : (rl = n('dNhZ')),
        ru = function (e) {
          return e / 8
        },
        lu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(G.a).featureSwitches,
            l = ce()(au, a),
            i = ce()(nu, n),
            o = ce()(tu, t),
            s = Bl(i),
            u = Il(i),
            d = Rl(i),
            p = ps({ rootPath: h, user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (mr(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_onboarding_enabled'))
          )
            throw new Error('Super Follows onboarding is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(W.a, { to: y })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(qt, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  V.d,
                  null,
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: w.perksIntro },
                    c.a.createElement(pc, { percentageComplete: ru(1), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: w.perksDescription },
                    c.a.createElement(rc, { percentageComplete: ru(2), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: w.perksBadges },
                    c.a.createElement(Hs, { percentageComplete: ru(3), user: i }),
                  ),
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: w.perksConfirm },
                    c.a.createElement(Ys, { percentageComplete: ru(4), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: w.pricing },
                    c.a.createElement(Bc, { percentageComplete: ru(5), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: w.pricingConfirm },
                    c.a.createElement(kc, { percentageComplete: ru(6), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: w.stripeSetup },
                    c.a.createElement($c, { percentageComplete: ru(7) }),
                  ),
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: w.stripeIncomplete },
                    c.a.createElement(Nc, { percentageComplete: ru(8) }),
                  ),
                  c.a.createElement(
                    V.b,
                    { exact: !0, path: w.stripeCompleted },
                    c.a.createElement(Ac, { percentageComplete: ru(8) }),
                  ),
                  c.a.createElement(
                    V.b,
                    { path: w.root },
                    c.a.createElement(xs, { percentageComplete: ru(0), user: i, viewer: o }),
                  ),
                ),
              )
        },
        iu = L.a.ebfb897c,
        ou = L.a.dc4feb19,
        su = L.a.c183d271,
        cu = L.a.ic130fd5,
        uu = L.a.dd913e24,
        du = L.a.h580543e,
        pu = function () {
          return c.a.createElement(
            H,
            { title: iu },
            c.a.createElement(Xt, { style: mu.interstitial }, c.a.createElement(ra, { headline: ou, subtext: su })),
            c.a.createElement(
              Xt,
              { style: mu.exampleDescriptions },
              c.a.createElement(ur.a, null),
              c.a.createElement(mi.a, { value: cu }),
              c.a.createElement(ur.a, null),
              c.a.createElement(mi.a, { value: uu }),
              c.a.createElement(ur.a, null),
              c.a.createElement(mi.a, { value: du }),
            ),
          )
        },
        mu = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        gu = n('JWc1'),
        fu = L.a.ebfb897c,
        bu = L.a.dc4feb19,
        hu = L.a.a0bb2076,
        yu = L.a.ace46d40,
        vu = L.a.h2c4511f,
        wu = L.a.hbe4f99e,
        Su = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        _u = function () {
          return c.a.createElement(
            H,
            { title: fu },
            c.a.createElement(Xt, { style: Su.interstitial }, c.a.createElement(ra, { headline: bu, subtext: hu })),
            c.a.createElement(
              Xt,
              { style: Su.exampleIntros },
              c.a.createElement(gu.a, { value: yu }),
              c.a.createElement(gu.a, { value: vu }),
              c.a.createElement(gu.a, { value: wu }),
            ),
          )
        },
        ku = n('VTDR'),
        Fu = n('a2Fh'),
        Eu = L.a.hf6f2913,
        Cu = L.a.fb278c81,
        xu = L.a.e6b60e94,
        Ku = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            preview: {
              marginBottom: e.spaces.space16,
              marginHorizontal: e.spaces.space16,
              marginTop: e.spaces.space40,
            },
            subheader: { marginTop: e.spaces.space8 },
          }
        }),
        Pu = function () {
          return c.a.createElement(
            H,
            { title: Eu },
            c.a.createElement(Xt, { style: Ku.interstitial }, c.a.createElement(ra, { headline: Cu, subtext: xu })),
            c.a.createElement(
              $t,
              { style: Ku.preview },
              c.a.createElement(
                ku.a,
                null,
                c.a.createElement(Fu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Fu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Fu.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: Ku.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        Lu = L.a.aa7e35ed,
        Ou = L.a.f67e69bf,
        Du = function () {
          if (!c.a.useContext(G.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            H,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Xt,
              { style: Tu.interstitial },
              c.a.createElement(ra, { headline: Lu, illustration: ea.Uturn, subtext: Ou }),
            ),
          )
        },
        Tu = M.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Bu = L.a.d3d6c52c,
        Iu = L.a.c53e9129,
        Ru = function () {
          if (!c.a.useContext(G.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            H,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            c.a.createElement(
              Xt,
              { style: Vu.interstitial },
              c.a.createElement(ra, { headline: Bu, illustration: ea.PaperAirplane, subtext: Iu }),
            ),
          )
        },
        Vu = M.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        zu = L.a.j274e6aa,
        Au = L.a.d7f65127,
        Mu = function () {
          if (!c.a.useContext(G.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            H,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Xt,
              { style: Uu.interstitial },
              c.a.createElement(ra, { headline: zu, illustration: ea.Bench, subtext: Au }),
            ),
          )
        },
        Uu = M.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        ju = void 0 !== ll ? ll : (ll = n('nEN5')),
        Hu = void 0 !== il ? il : (il = n('toKZ')),
        Nu = void 0 !== ol ? ol : (ol = n('ucRr')),
        Wu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = ce()(ju, a),
            l = ce()(Hu, n),
            i = ce()(Nu, t),
            o = (function (e) {
              var a = e.isActiveCreator,
                n = e.stripeAccountStatus,
                t = e.superFollowsApplicationStatus
              if (a) return S.root
              switch (t) {
                case 'Submitted':
                  return _
                case 'Waitlisted':
                  return k
                case 'Rejected':
                  return F
                case 'Approved':
                  switch (n) {
                    case 'Incomplete':
                    case 'Pending':
                      return w.stripeIncomplete
                    case 'Completed':
                      return w.stripeCompleted
                    default:
                      return w.root
                  }
                default:
                  return v.root
              }
            })({
              isActiveCreator: !!i.is_active_creator,
              superFollowsApplicationStatus: l.super_follows_application_status || 'NotStarted',
              stripeAccountStatus: l.stripe_account_status || 'NotStarted',
            })
          return c.a.createElement(
            V.d,
            null,
            c.a.createElement(V.b, { path: v.root }, c.a.createElement(Ut, { user: l, viewer: i })),
            c.a.createElement(V.b, { path: w.root }, c.a.createElement(lu, { priceOfferings: r, user: l, viewer: i })),
            c.a.createElement(V.b, { path: S.root }, c.a.createElement(bs, { priceOfferings: r, user: l, viewer: i })),
            c.a.createElement(V.b, { exact: !0, path: _ }, c.a.createElement(Ru, null)),
            c.a.createElement(V.b, { exact: !0, path: k }, c.a.createElement(Mu, null)),
            c.a.createElement(V.b, { exact: !0, path: F }, c.a.createElement(Du, null)),
            c.a.createElement(V.b, { exact: !0, path: E }, c.a.createElement(_u, null)),
            c.a.createElement(V.b, { exact: !0, path: C }, c.a.createElement(pu, null)),
            c.a.createElement(V.b, { exact: !0, path: x }, c.a.createElement(Pu, null)),
            c.a.createElement(V.b, { exact: !0, path: y }, c.a.createElement(W.a, { to: o })),
          )
        },
        Gu = n('IAZG'),
        qu = n('Irs7'),
        Qu = void 0 !== sl ? sl : (sl = n('G8I5')),
        Xu = function () {
          var e,
            a,
            n = Object(Gu.a)(Qu, {}),
            t = null == n ? void 0 : n.super_follows_price_offerings,
            r =
              null == n || null === (e = n.viewer) || void 0 === e || null === (a = e.user_results) || void 0 === a
                ? void 0
                : a.result,
            l = null == n ? void 0 : n.viewer
          return null == t || 'User' !== (null == r ? void 0 : r.__typename) || null == l
            ? null
            : c.a.createElement(Wu, { priceOfferings: t, user: r, viewer: l })
        },
        Yu = { context: 'SuperFollowsSettings' }
      a.default = c.a.memo(
        Object(qu.a)(
          function () {
            var e = c.a.useMemo(function () {
              return {
                type: 'CustomRetry',
                content: function (e) {
                  return c.a.createElement(H, null, c.a.createElement(p.a, { onRequestRetry: e }))
                },
              }
            }, [])
            return c.a.createElement(
              u.a,
              { errorConfig: Yu, fallback: e },
              c.a.createElement(d.a, null, c.a.createElement(Xu, null)),
            )
          },
          { page: 'settings', section: 'superfollows' },
        ),
      )
    },
    nEN5: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSwitch_priceOfferings',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_priceOfferings' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSwitch_priceOfferings' },
        ],
        type: 'SuperFollowsPriceOfferings',
        abstractKey: null,
        hash: 'c0b6c6ce2a6b19c031c93a3e40adfd6a',
      }
      a.default = t
    },
    'o/nB': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSwitch_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationMarketingScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationEligibilityScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSubmitScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '6d66e65030535b15a01bfd34ce1eba73',
      }
      a.default = t
    },
    oNwH: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSummaryScreen_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingCreatorIntro_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDescription_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingSelectedPrice_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '722ff7a074a54c88ba88adecf412cb22',
      }
      a.default = t
    },
    oyMe: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksIntroScreen_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingCreatorIntro_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsSaveOnboarding_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksIntroCore_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '256ae68f663dd663c27261e9bbf6e769',
      }
      a.default = t
    },
    'p+r5': function (e, a, n) {
      'use strict'
      n.d(a, 'a', function () {
        return H
      })
      n('yiKp')
      var t = n('97Jx'),
        r = n.n(t),
        l = n('m3Bd'),
        i = n.n(l),
        o = n('VrFO'),
        s = n.n(o),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        g = n.n(m),
        f = n('2VqO'),
        b = n.n(f),
        h = n('KEM+'),
        y = n.n(h),
        v = (n('2G9S'), n('ERkP')),
        w = n.n(v),
        S = n('38/B'),
        _ = n('t62R'),
        k = n('/yvb'),
        F = n('piX5'),
        E = n('3XMw'),
        C = n.n(E),
        x = n('tI3i'),
        K = n.n(x),
        P = n('oQhu'),
        L = n('rHpw'),
        O = n('aITJ'),
        D = n('MWbm'),
        T = n('n5fo'),
        B = n('5emT'),
        I = n('Oib4'),
        R = n('WtWS'),
        V = n('ioan'),
        z = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        A = function (e) {
          return e.length
        },
        M = function (e) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A
          return a(e)
        },
        U = C.a.de540c32,
        j = C.a.b4abfdb3,
        H = (function (e) {
          g()(n, e)
          var a = b()(n)
          function n(e) {
            var t
            s()(this, n),
              (t = a.call(this, e)),
              y()(p()(t), '_blurOnBackspaceKeyUpForKaiOS', !1),
              y()(p()(t), '_isLabelLarge', function () {
                var e = t.state,
                  a = e.actualCount,
                  n = e.isFocused
                return !a && !n
              }),
              y()(
                p()(t),
                '_getTextInputStyle',
                Object(P.a)(function (e) {
                  return [N.root, !e && N.disabled]
                }),
              ),
              y()(p()(t), '_getTextInputType', function () {
                var e = t.props,
                  a = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = t.state.isPasswordRevealed
                return 'password' === n && a ? (r ? 'text' : 'password') : n
              }),
              y()(p()(t), '_calculateLength', function (e) {
                return M(e, t.props.calculateLength)
              }),
              y()(p()(t), '_shouldRenderDisplayCount', function () {
                var e = t.state.isFocused,
                  a = t._isFormInvalid()
                return Boolean((e || a) && t._getMaxDisplayCount())
              }),
              y()(p()(t), '_isInvalidNumber', function () {
                var e,
                  a,
                  n,
                  r,
                  l,
                  i = t.props.type,
                  o =
                    null === (e = t._textInput) || void 0 === e || null === (a = e.textInputNode) || void 0 === a
                      ? void 0
                      : a.value,
                  s =
                    null === (n = t._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (l = r.validity) ||
                    void 0 === l
                      ? void 0
                      : l.badInput
                return 'number' === i && '' === o && !0 === s
              }),
              y()(p()(t), '_getActualCount', function (e) {
                var a = e.length
                return t._isInvalidNumber() && (a = 1), a
              }),
              y()(p()(t), '_handleBlur', function () {
                var e,
                  a = t.props.onBlur,
                  n = (null === (e = t._textInput) || void 0 === e ? void 0 : e.getValue()) || '',
                  r = t._calculateLength(n),
                  l = t._getActualCount(n)
                t.setState({ isFocused: !1, displayCount: r, actualCount: l }), a && a()
              }),
              y()(p()(t), '_handleChange', function (e) {
                var a = t.props.onChange,
                  n = t.state.previousValue,
                  r = e.currentTarget.value,
                  l = t._calculateLength(r),
                  i = t._getActualCount(r),
                  o = t._getAdjustedMaxLength()
                void 0 !== o && r.length > o && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (t.setState({
                      isFocused: !0,
                      displayCount: l,
                      actualCount: i,
                      previousValue: e.currentTarget.value,
                    }),
                    a && a(e))
              }),
              y()(p()(t), '_handleFocus', function () {
                var e = t.props.onFocus
                t.setState({ isFocused: !0 }), e && e()
              }),
              y()(p()(t), '_handleKeyPress', function (e) {
                var a = t.props,
                  n = a.multiline,
                  r = a.onKeyPress,
                  l = a.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !l || (e.preventDefault(), l(e))
              }),
              y()(p()(t), '_handleKeyDown', function (e) {
                var a = t.props.onKeyDown,
                  n = 0 === t.state.displayCount
                O.b.isKaiOS() && 'Backspace' === e.key && n ? (t._blurOnBackspaceKeyUpForKaiOS = n) : a && a(e)
              }),
              y()(p()(t), '_handleKeyUp', function (e) {
                var a = t.props.onKeyUp
                O.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  t._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), t.blur()),
                  a && a(e)
              }),
              y()(p()(t), '_handlePasswordVisibilityClick', function (e) {
                t.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              y()(p()(t), '_setTextInputRef', function (e) {
                t._textInput = e
              }),
              y()(p()(t), '_checkComponentPropsUsageCorrectness', function (e) {
                var a = e.defaultValue,
                  n = e.maxLength,
                  t = e.onChange,
                  r = e.validLength,
                  l = !!t,
                  i = 'string' == typeof e.value,
                  o = 'string' == typeof a
                K()(
                  !(!o && i && !l),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  K()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  K()(
                    !((void 0 !== n && n <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              y()(p()(t), '_exceedsValidLength', function (e) {
                var a = t._getMaxDisplayCount()
                return !!a && e > a
              }),
              y()(p()(t), '_getMaxDisplayCount', function () {
                return t.props.validLength || t.props.maxLength
              }),
              y()(p()(t), '_getAdjustedMaxLength', function () {
                var e = t.props.maxLength,
                  a = t.getValue(),
                  n = t._calculateLength(a)
                return e ? e + a.length - n : void 0
              }),
              t._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              l = e.value || r || ''
            return (
              (t.state = {
                displayCount: t._calculateLength(l),
                actualCount: A(l),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: l,
              }),
              t
            )
          }
          return (
            u()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var a = this.props,
                      n = a.maxLength,
                      t = a.onChange,
                      r = a.validLength,
                      l = a.value,
                      i = e.maxLength,
                      o = e.onChange,
                      s = e.validLength,
                      c = e.value
                    ;(s === r && n === i && !!t === !!o && ('string' == typeof l) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      a = e.accessibilityLabel,
                      n = e.editable,
                      t = e.errorText,
                      r = e.helperText,
                      l = e.style,
                      i = this.state.isFocused,
                      o = this._isFormInvalid()
                    return w.a.createElement(
                      D.a,
                      { style: [W.root, l] },
                      w.a.createElement(
                        D.a,
                        {
                          accessibilityLabel: a,
                          accessibilityRole: 'label',
                          style: [
                            F.a.border,
                            W.textInputFormStyle,
                            o && F.a.invalidBorderColor,
                            i && o && F.a.focusedBorderInvalid,
                            i && !o && F.a.focusedBorderValid,
                            !n && F.a.disabled,
                          ],
                        },
                        w.a.createElement(
                          D.a,
                          { style: W.textInputFormWrapper },
                          w.a.createElement(
                            D.a,
                            { style: W.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        D.a,
                        { style: [W.sidePadding, W.underTextInputForm] },
                        w.a.createElement(
                          D.a,
                          { style: W.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          o && t ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      a = this.state.isFocused ? 'primary' : 'gray700',
                      n = this._isFormInvalid() ? 'red500' : a,
                      t = this._isLabelLarge()
                    return w.a.createElement(
                      _.b,
                      {
                        color: t ? 'gray700' : n,
                        numberOfLines: 1,
                        size: t ? 'headline1' : 'subtext2',
                        style: [
                          W.textInputHeaderItem,
                          t && W.placeholderText,
                          !S.a.reducedMotionEnabled && W.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      a = e.Icon,
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      t =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      l = (e.style, e.type, e.validLength, i()(e, z))
                    return w.a.createElement(
                      D.a,
                      { style: N.container },
                      a && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        _.b,
                        { size: 'headline1', style: N.wrapper },
                        w.a.createElement(
                          V.a,
                          r()({}, l, {
                            editable: n,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(n),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      t && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      a = e.showPasswordVisibilityIcon,
                      n = e.type,
                      t = this.state.isPasswordRevealed
                    return 'password' === n && a
                      ? w.a.createElement(
                          D.a,
                          { style: W.passwordVisibilityIconContainer },
                          w.a.createElement(k.a, {
                            accessibilityLabel: t ? j : U,
                            focusable: !0,
                            hoverLabel: { label: t ? j : U },
                            icon: t ? w.a.createElement(T.a, null) : w.a.createElement(B.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return w.a.createElement(
                      D.a,
                      { accessibilityLiveRegion: 'polite' },
                      w.a.createElement(
                        _.b,
                        { color: 'gray700', size: 'subtext2', style: W.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return w.a.createElement(
                      D.a,
                      { accessibilityLiveRegion: 'assertive' },
                      w.a.createElement(
                        _.b,
                        { color: 'red500', size: 'subtext2', style: W.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      a = this._getMaxDisplayCount(),
                      n = this._exceedsValidLength(e),
                      t = a && C.a.ia24dc8c(a),
                      r = C.a.ia24dc8c(e)
                    return w.a.createElement(
                      D.a,
                      { accessibilityLiveRegion: 'polite', style: [W.textInputHeaderItem, W.displayCount] },
                      w.a.createElement(
                        _.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        t ? ''.concat(r, ' / ').concat(t) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      a = this.state.isFocused,
                      n = [W.icon, a && W.focusedIcon]
                    return e && w.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? w.a.createElement(I.a, { style: [W.validationIcon, F.a.invalidColor] })
                      : w.a.createElement(R.a, { style: [W.validationIcon, F.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      a = this._calculateLength(e)
                    return !this._exceedsValidLength(a)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, a) {
                    var n = e.calculateLength,
                      t = e.value,
                      r = 'string' == typeof t ? M(t, n) : 0
                    return 'string' == typeof t && r !== a.displayCount
                      ? { displayCount: r, actualCount: t.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(w.a.Component)
      y()(H, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (H.propTypes = {})
      var N = L.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        W = L.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
          }
        })
    },
    'pLb/': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitScreen_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '891cd330d47f73923bd3ce7dad37df31',
      }
      a.default = t
    },
    piX5: function (e, a, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var t = n('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      a.a = t
    },
    rwq4: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsSaveOnboarding_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingBenefitsId_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingCreatorIntro_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDescription_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '7143b7f1c3bddaa1d03d17cef9f58fa4',
      }
      a.default = t
    },
    sUoZ: function (e, a, n) {
      'use strict'
      var t = n('yiKp'),
        r = n.n(t),
        l = n('ERkP'),
        i = n.n(l),
        o = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M22.18 9.565c-.157-.487-.61-.82-1.126-.82h-5.928l-2.007-5.88c-.164-.476-.612-.8-1.12-.8s-.956.322-1.12.8L8.874 8.743H2.945c-.513 0-.97.332-1.126.82-.158.49.02 1.02.44 1.318l4.735 3.357-2.018 5.908c-.164.484 0 1.02.415 1.324.415.304.97.31 1.39.016L12 17.782l5.22 3.703c.206.146.446.218.686.218.25 0 .497-.08.705-.233.41-.305.577-.84.41-1.324l-2.015-5.906 4.735-3.356c.414-.3.595-.83.44-1.32z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (a.a = c)
    },
    tJ4s: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksDescriptionScreen_viewer',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftDescription_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksDescriptionCore_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '31b6d2f42f854c50a0cc1df5fcd2773c',
      }
      a.default = t
    },
    tfBr: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingGetStartedScreen_viewer',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftCreatorIntro_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftDescription_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDraftSelectedPrice_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'e8e04ad2010f6832e9b6a8a33fb5a760',
      }
      a.default = t
    },
    toKZ: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSwitch_user',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'stripe_account_status', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'super_follows_application_status', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSwitch_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSwitch_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '0b75eda42bee495240f9a311b2c9dbd1',
      }
      a.default = t
    },
    ucRr: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsSwitch_viewer',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'is_active_creator', storageKey: null },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsApplicationSwitch_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingSwitch_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSwitch_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'fd85d9f42c6887069474dcaa99102083',
      }
      a.default = t
    },
    wQp3: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingGetStartedScreen_user',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'stripe_account_status', storageKey: null }],
        type: 'User',
        abstractKey: null,
        hash: '89d53e7f51d77e01d95fe5e756509ce9',
      }
      a.default = t
    },
    xHLM: function (e, a, n) {
      'use strict'
      n.r(a)
      var t,
        r,
        l = {
          fragment: {
            argumentDefinitions: (t = [
              { defaultValue: null, kind: 'LocalArgument', name: 'refresh_url' },
              { defaultValue: null, kind: 'LocalArgument', name: 'return_url' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            selections: (r = [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'refresh_url', variableName: 'refresh_url' },
                  { kind: 'Variable', name: 'return_url', variableName: 'return_url' },
                  { kind: 'Literal', name: 's', value: 23 },
                ],
                kind: 'ScalarField',
                name: 'stripe_account_create_onboarding_url',
                storageKey: null,
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: t,
            kind: 'Operation',
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            selections: r,
          },
          params: {
            id: 'Sn2c0FTsxzQ1Pm_3OKQYqQ',
            metadata: {},
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(l.hash = '30a12f5fb8a41d9488d04e2ca054a76b'), (a.default = l)
    },
    'xd+q': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationMarketingScreen_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'followers_count', storageKey: null }],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'f9d66c36366fcbae31378fec6edbd005',
      }
      a.default = t
    },
    xhT1: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitCategoriesOtherScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_category_other', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '2a5ad7b1a1b9a1015040e349406c25ec',
      }
      a.default = t
    },
    xnrs: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitPlatformsScreen_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'superFollowsShared_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          {
            kind: 'ClientExtension',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'SuperFollowsApplicationDraft',
                kind: 'LinkedField',
                name: 'super_follows_application_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'content_creation_platform', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '6e38d8b984911ba4cb1bef210114e76b',
      }
      a.default = t
    },
    yjSu: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksDescriptionCore_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'ea94577a2c8128b8322c451f71d7d819',
      }
      a.default = t
    },
    yuPD: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsOnboardingHasBadge_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AudienceRewardsBenefitsData',
            kind: 'LinkedField',
            name: 'super_follow_creator_benefits',
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'AudienceRewardsBenefitInfo',
                kind: 'LinkedField',
                name: 'benefits_data',
                plural: !0,
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'benefit_type', storageKey: null }],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '7635562e02db8d19186a4c5581828a54',
      }
      a.default = t
    },
  },
])
//# sourceMappingURL=WIPED
