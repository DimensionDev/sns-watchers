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
    'M+ld': function (e, a, n) {
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
            name: 'useSuperFollowsCreateStripeOnboardingUrlMutation',
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
            name: 'useSuperFollowsCreateStripeOnboardingUrlMutation',
            selections: r,
          },
          params: {
            id: 'KCzv96qeUky_-C22g3lZSw',
            metadata: {},
            name: 'useSuperFollowsCreateStripeOnboardingUrlMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(l.hash = '3c4630f45d60062b9f4ac93d65eeec15'), (a.default = l)
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
          return ie
        }),
        n.d(t, 'Arrow2x', function () {
          return oe
        }),
        n.d(t, 'Arrow3x', function () {
          return se
        }),
        n.d(t, 'Bench', function () {
          return ce
        }),
        n.d(t, 'Bench2x', function () {
          return ue
        }),
        n.d(t, 'Bench3x', function () {
          return de
        }),
        n.d(t, 'Cat', function () {
          return pe
        }),
        n.d(t, 'Cat2x', function () {
          return me
        }),
        n.d(t, 'Cat3x', function () {
          return ge
        }),
        n.d(t, 'Clipboard', function () {
          return fe
        }),
        n.d(t, 'Clipboard2x', function () {
          return be
        }),
        n.d(t, 'Clipboard3x', function () {
          return he
        }),
        n.d(t, 'CoinStairs', function () {
          return ye
        }),
        n.d(t, 'CoinStairs2x', function () {
          return ve
        }),
        n.d(t, 'CoinStairs3x', function () {
          return we
        }),
        n.d(t, 'HandCoins', function () {
          return Se
        }),
        n.d(t, 'HandCoins2x', function () {
          return _e
        }),
        n.d(t, 'HandCoins3x', function () {
          return ke
        }),
        n.d(t, 'OneFinger', function () {
          return Fe
        }),
        n.d(t, 'OneFinger2x', function () {
          return Ee
        }),
        n.d(t, 'OneFinger3x', function () {
          return Ce
        }),
        n.d(t, 'PaperAirplane', function () {
          return xe
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return Ke
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return Pe
        }),
        n.d(t, 'Pricing', function () {
          return Le
        }),
        n.d(t, 'Pricing2x', function () {
          return Oe
        }),
        n.d(t, 'Pricing3x', function () {
          return De
        }),
        n.d(t, 'Puzzle', function () {
          return Te
        }),
        n.d(t, 'Puzzle2x', function () {
          return Be
        }),
        n.d(t, 'Puzzle3x', function () {
          return Ie
        }),
        n.d(t, 'Thumbsup', function () {
          return Re
        }),
        n.d(t, 'Thumbsup2x', function () {
          return Ve
        }),
        n.d(t, 'Thumbsup3x', function () {
          return ze
        }),
        n.d(t, 'TrafficLight', function () {
          return Ae
        }),
        n.d(t, 'TrafficLight2x', function () {
          return Me
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Ue
        }),
        n.d(t, 'Uturn', function () {
          return je
        }),
        n.d(t, 'Uturn2x', function () {
          return Ne
        }),
        n.d(t, 'Uturn3x', function () {
          return He
        })
      var r = {}
      n.r(r),
        n.d(r, 'Chat', function () {
          return Pi
        }),
        n.d(r, 'Chat2x', function () {
          return Li
        }),
        n.d(r, 'Chat3x', function () {
          return Oi
        }),
        n.d(r, 'Cog', function () {
          return Di
        }),
        n.d(r, 'Cog2x', function () {
          return Ti
        }),
        n.d(r, 'Cog3x', function () {
          return Bi
        }),
        n.d(r, 'Coin', function () {
          return Ii
        }),
        n.d(r, 'Coin2x', function () {
          return Ri
        }),
        n.d(r, 'Coin3x', function () {
          return Vi
        }),
        n.d(r, 'CoinPurse', function () {
          return zi
        }),
        n.d(r, 'CoinPurse2x', function () {
          return Ai
        }),
        n.d(r, 'CoinPurse3x', function () {
          return Mi
        }),
        n.d(r, 'Cone', function () {
          return Ui
        }),
        n.d(r, 'Cone2x', function () {
          return ji
        }),
        n.d(r, 'Cone3x', function () {
          return Ni
        }),
        n.d(r, 'Cross', function () {
          return Hi
        }),
        n.d(r, 'Cross2x', function () {
          return Wi
        }),
        n.d(r, 'Cross3x', function () {
          return Gi
        }),
        n.d(r, 'FirstAid', function () {
          return qi
        }),
        n.d(r, 'FirstAid2x', function () {
          return Qi
        }),
        n.d(r, 'FirstAid3x', function () {
          return Xi
        }),
        n.d(r, 'Heart', function () {
          return Zi
        }),
        n.d(r, 'Heart2x', function () {
          return Ji
        }),
        n.d(r, 'Heart3x', function () {
          return Yi
        }),
        n.d(r, 'LifeSaver', function () {
          return $i
        }),
        n.d(r, 'LifeSaver2x', function () {
          return eo
        }),
        n.d(r, 'LifeSaver3x', function () {
          return ao
        }),
        n.d(r, 'Lightbulb', function () {
          return no
        }),
        n.d(r, 'Lightbulb2x', function () {
          return to
        }),
        n.d(r, 'Lightbulb3x', function () {
          return ro
        }),
        n.d(r, 'NoEntry', function () {
          return lo
        }),
        n.d(r, 'NoEntry2x', function () {
          return io
        }),
        n.d(r, 'NoEntry3x', function () {
          return oo
        }),
        n.d(r, 'Pencil', function () {
          return so
        }),
        n.d(r, 'Pencil2x', function () {
          return co
        }),
        n.d(r, 'Pencil3x', function () {
          return uo
        }),
        n.d(r, 'PiggyBank', function () {
          return po
        }),
        n.d(r, 'PiggyBank2x', function () {
          return mo
        }),
        n.d(r, 'PiggyBank3x', function () {
          return go
        }),
        n.d(r, 'Plant', function () {
          return fo
        }),
        n.d(r, 'Plant2x', function () {
          return bo
        }),
        n.d(r, 'Plant3x', function () {
          return ho
        }),
        n.d(r, 'Puzzle', function () {
          return yo
        }),
        n.d(r, 'Puzzle2x', function () {
          return vo
        }),
        n.d(r, 'Puzzle3x', function () {
          return wo
        }),
        n.d(r, 'Ribbon', function () {
          return So
        }),
        n.d(r, 'Ribbon2x', function () {
          return _o
        }),
        n.d(r, 'Ribbon3x', function () {
          return ko
        }),
        n.d(r, 'Spheres', function () {
          return Fo
        }),
        n.d(r, 'Spheres2x', function () {
          return Eo
        }),
        n.d(r, 'Spheres3x', function () {
          return Co
        }),
        n.d(r, 'Star', function () {
          return xo
        }),
        n.d(r, 'Star2x', function () {
          return Ko
        }),
        n.d(r, 'Star3x', function () {
          return Po
        }),
        n.d(r, 'TrashCan', function () {
          return Lo
        }),
        n.d(r, 'TrashCan2x', function () {
          return Oo
        }),
        n.d(r, 'TrashCan3x', function () {
          return Do
        }),
        n.d(r, 'Wallet', function () {
          return To
        }),
        n.d(r, 'Wallet2x', function () {
          return Bo
        }),
        n.d(r, 'Wallet3x', function () {
          return Io
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
          submitted: ''.concat(y, '/application/submitted'),
          waitlisted: ''.concat(y, '/application/waitlisted'),
          rejected: ''.concat(y, '/application/rejected'),
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
          stripePending: ''.concat(y, '/onboarding/stripe_pending'),
          stripeCompleted: ''.concat(y, '/onboarding/stripe_completed'),
        }),
        S = Object.freeze({
          root: ''.concat(y, '/management'),
          perksIntro: ''.concat(y, '/management/perks_intro'),
          perksDescription: ''.concat(y, '/management/perks_description'),
          perksConfirm: ''.concat(y, '/management/perks_confirm'),
        }),
        _ = ''.concat(y, '/perks_intro_examples'),
        k = ''.concat(y, '/perks_description_examples'),
        F = ''.concat(y, '/perks_preview'),
        E = n('jHSc'),
        C = n('3XMw'),
        x = n.n(C),
        K = n('lUZE'),
        P = 'https://help.twitter.com/using-twitter/super-follows-creator',
        L = ''.concat(P, '#pricechange'),
        O = n('/yvb'),
        D = n('6s7X'),
        T = function () {
          return c.a.createElement(O.a, { icon: c.a.createElement(D.a, null), link: P, type: 'primaryText' })
        },
        B = n('zCf4'),
        I = n('MWbm'),
        R = n('JYMr'),
        V = n('rHpw'),
        z = [
          'leftControlShouldClose',
          'percentageComplete',
          'rightControl',
          'screenRef',
          'withCenteredLogo',
          'withInfoButton',
        ],
        A = x.a.a6777c1b,
        M = function (e) {
          var a = e.leftControlShouldClose,
            n = e.percentageComplete,
            t = e.rightControl,
            r = e.screenRef,
            l = e.withCenteredLogo,
            i = e.withInfoButton,
            o = b()(e, z),
            s = Object(B.f)(),
            u = a ? 'close' : 'back',
            d = h,
            p = l ? c.a.createElement(K.a, { style: U.iconTwitter }) : void 0,
            m = i ? c.a.createElement(I.a, { style: U.rightControl }, c.a.createElement(T, null), t) : t,
            f = n ? c.a.createElement(R.a, { progress: n }) : void 0,
            y = function () {
              a ? s.goBackThroughModals({ fallbackPath: d }) : s.goBack({ backLocation: d })
            }
          return (
            r && (r.current = { goBack: y }),
            c.a.createElement(
              E.b,
              g()({}, o, {
                backButtonType: u,
                backLocation: d,
                centeredLogo: p,
                documentTitle: A,
                onBackClick: y,
                rightControl: m,
                secondaryBar: f,
              }),
            )
          )
        },
        U = V.a.create(function (e) {
          return {
            iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
            rightControl: { alignItems: 'center', flexDirection: 'row', gap: e.spaces.space4 },
          }
        }),
        j = n('5FtR'),
        N = (n('849X'), n('TJCb'), n('v6aA')),
        H = x.a.g92a2343,
        W = x.a.a91bb144,
        G = function () {
          var e = Object(B.f)(),
            a = c.a.createElement(
              O.a,
              {
                onPress: function () {
                  e.push(v.submit)
                },
                type: 'primaryFilled',
              },
              W,
            )
          return c.a.createElement(M, { rightControl: a, title: H })
        },
        q = (n('jQ3i'), n('x4t0'), n('855f')),
        Q = (n('z84I'), n('t62R')),
        X = n('WtWS'),
        Z = n('0ULw'),
        J = function (e) {
          var a = e.items
          return c.a.createElement(
            I.a,
            { style: Y.root },
            a.map(function (e) {
              return c.a.createElement(
                I.a,
                { key: e.label, style: Y.item },
                c.a.createElement(Q.b, { style: Y.label, weight: 'bold' }, e.label),
                e.checked
                  ? c.a.createElement(X.a, { style: Y.iconChecked })
                  : c.a.createElement(Z.a, { style: Y.iconUnchecked }),
              )
            }),
          )
        },
        Y = V.a.create(function (e) {
          return {
            root: { gap: e.spaces.space24 },
            item: { flexDirection: 'row' },
            label: { flex: 1 },
            iconChecked: { color: e.colors.green500 },
            iconUnchecked: { color: e.colors.gray200 },
          }
        }),
        $ = function () {
          return c.a.createElement(
            Q.b,
            { align: 'center', color: 'gray700' },
            c.a.createElement(
              x.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              c.a.createElement(
                Q.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                x.a.ebc0cbbc,
              ),
            ),
          )
        },
        ee = n('ddV6'),
        ae = n.n(ee),
        ne = (n('7x/C'), n('JtPf'), n('Qavd'), ['disabled', 'label', 'onPress', 'path']),
        te = function (e) {
          var a = e.disabled,
            n = e.label,
            t = e.onPress,
            r = e.path,
            l = b()(e, ne),
            i = Object(B.f)(),
            o = c.a.useState(!1),
            s = ae()(o, 2),
            u = s[0],
            d = s[1],
            p = function () {
              i.push(r)
            }
          return c.a.createElement(
            O.a,
            g()({}, l, {
              disabled: u || a,
              onPress: function (e) {
                t
                  ? (d(!0),
                    t(e)
                      .then(p)
                      .finally(function () {
                        return d(!1)
                      }))
                  : p()
              },
            }),
            n,
          )
        },
        re = n('jAXQ'),
        le = n.n(re),
        ie = (n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        oe = n.p + 'Arrow@2x.8af675c5.png',
        se = n.p + 'Arrow@3x.949d4365.png',
        ce = n.p + 'Bench.ed26a435.png',
        ue = n.p + 'Bench@2x.ef9fb7d5.png',
        de = n.p + 'Bench@3x.a306fd55.png',
        pe = n.p + 'Cat.089435a5.png',
        me = n.p + 'Cat@2x.bca70155.png',
        ge = n.p + 'Cat@3x.2b225ef5.png',
        fe = n.p + 'Clipboard.540710d5.png',
        be = n.p + 'Clipboard@2x.72ca72e5.png',
        he = n.p + 'Clipboard@3x.1b952e95.png',
        ye = n.p + 'CoinStairs.8488b245.png',
        ve = n.p + 'CoinStairs@2x.34fd5855.png',
        we = n.p + 'CoinStairs@3x.1b706305.png',
        Se = n.p + 'HandCoins.fbd23965.png',
        _e = n.p + 'HandCoins@2x.c1b62b75.png',
        ke = n.p + 'HandCoins@3x.7dd5f3d5.png',
        Fe = n.p + 'OneFinger.6eb5d9c5.png',
        Ee = n.p + 'OneFinger@2x.a13e1ba5.png',
        Ce = n.p + 'OneFinger@3x.7f22c175.png',
        xe = n.p + 'PaperAirplane.1ef48a05.png',
        Ke = n.p + 'PaperAirplane@2x.2923eb15.png',
        Pe = n.p + 'PaperAirplane@3x.47e4b145.png',
        Le = n.p + 'Pricing.ec5962d5.png',
        Oe = n.p + 'Pricing@2x.f8284265.png',
        De = n.p + 'Pricing@3x.b6cf0185.png',
        Te = n.p + 'Puzzle.aa045515.png',
        Be = n.p + 'Puzzle@2x.5be7ab15.png',
        Ie = n.p + 'Puzzle@3x.1796b225.png',
        Re = n.p + 'Thumbsup.f5be79d5.png',
        Ve = n.p + 'Thumbsup@2x.6d106945.png',
        ze = n.p + 'Thumbsup@3x.6a81e6d5.png',
        Ae = n.p + 'TrafficLight.11644b65.png',
        Me = n.p + 'TrafficLight@2x.5657de25.png',
        Ue = n.p + 'TrafficLight@3x.a5a35335.png',
        je = n.p + 'Uturn.c8267f55.png',
        Ne = n.p + 'Uturn@2x.db3f94d5.png',
        He = n.p + 'Uturn@3x.22f27905.png',
        We = n('tn7R'),
        Ge = n('TIdA'),
        qe = n('A91F'),
        Qe = 400,
        Xe = [1, 2, 3],
        Ze = Object.freeze({
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
        Je = Object(We.a)(Ze).reduce(function (e, a) {
          var n = Math.max.apply(Math, Xe)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Qe * n, height: 250 * n },
              customVariants: Xe.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Qe * e, height: 250 * e }
              }),
            }),
            e
          )
        }, {}),
        Ye = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? Qe : n,
            r = Je[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            I.a,
            { style: [$e.illustration, s] },
            c.a.createElement(Ge.a, {
              accessibilityLabel: '',
              aspectMode: qe.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        $e = V.a.create(function (e) {
          return { illustration: { alignSelf: 'center' } }
        }),
        ea = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            r = e.subtext
          return c.a.createElement(
            c.a.Fragment,
            null,
            t && c.a.createElement(Ye, { type: t, width: 311 }),
            c.a.createElement(
              Q.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title2',
                style: t && aa.headline,
                weight: 'heavy',
              },
              n,
            ),
            c.a.createElement(Q.b, { align: a, color: 'gray700', style: aa.subtext }, r),
          )
        },
        aa = V.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space8 } }
        }),
        na = x.a.feb54b4f,
        ta = x.a.bac156a6,
        ra = x.a.a3a20a10,
        la = x.a.b26ae507,
        ia = x.a.a753a87f,
        oa = x.a.abfaa527,
        sa = q.a.getTruncatedCount(1e4),
        ca = x.a.fdd95737({ minFollowersCount: sa }),
        ua = q.a.getTruncatedCount(25),
        da = x.a.a0dcad86({ minTweetsCount: ua }),
        pa = x.a.c27f57ac,
        ma = void 0 !== l ? l : (l = n('RLjm')),
        ga = function (e) {
          var a = e.user,
            n = le()(ma, a),
            t = (null == n ? void 0 : n.super_following_eligibility) || [],
            r = 0 === t.length,
            l = r ? Ze.Arrow : Ze.TrafficLight,
            i = r ? na : ra,
            o = r ? ta : la,
            s = [
              { label: ca, checked: !t.includes('followers') },
              { label: da, checked: !t.includes('tweets') },
              { label: pa, checked: !t.includes('age') },
            ]
          return c.a.createElement(
            M,
            { withInfoButton: !0 },
            c.a.createElement(ea, { headline: i, illustration: l, subtext: o }),
            c.a.createElement(J, { items: s }),
            r && c.a.createElement($, null),
            c.a.createElement(te, { disabled: !r, label: ia, path: v.oneMoreThing }),
            c.a.createElement(te, { label: oa, path: v.oneMoreThing }),
          )
        },
        fa = n('9RkS'),
        ba = x.a.bbb89925,
        ha = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            o = c.a.useState(i),
            s = ae()(o, 2),
            u = s[0],
            d = s[1],
            p = Math.round(a * r * (u / 100))
          return c.a.createElement(
            I.a,
            { style: ya.container },
            c.a.createElement(
              Q.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              c.a.createElement(
                x.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                c.a.createElement(Q.b, { weight: 'bold' }, x.a.a7dd00ea),
                c.a.createElement(
                  Q.b,
                  { style: ya.earnings, weight: 'heavy' },
                  x.a.c62c1d30({ earnings: '$'.concat(q.a.getTruncatedCount(p)) }),
                ),
                c.a.createElement(Q.b, { color: 'green500', style: ya.asteriskLeft }, x.a.e0fb982b),
              ),
            ),
            c.a.createElement(
              I.a,
              { style: ya.slider },
              c.a.createElement(fa.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: ba({ percent: u }),
                value: u,
              }),
            ),
            c.a.createElement(
              Q.b,
              { color: 'green500', size: 'subtext3', style: ya.footnote },
              c.a.createElement(
                x.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                c.a.createElement(Q.b, { style: ya.asteriskRight }, x.a.e263c38e),
              ),
            ),
          )
        },
        ya = V.a.create(function (e) {
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
        va = n('6iuV'),
        wa = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        Sa = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return c.a.createElement(
            I.a,
            { style: _a.container },
            c.a.createElement(wa.a, { Icon: a, color: 'neutral' }),
            c.a.createElement(Q.b, { size: 'headline2', style: _a.title, weight: 'bold' }, t),
            c.a.createElement(Q.b, { color: 'gray700', style: _a.description }, n),
          )
        },
        _a = V.a.create(function (e) {
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
        ka = n('sUoZ'),
        Fa = n('witV'),
        Ea = n('ACHU'),
        Ca = [
          { Icon: ka.a, title: x.a.d31c5997, description: x.a.hda1e780 },
          { Icon: Fa.a, title: x.a.d08d0bb2, description: x.a.cbd8b105 },
          { Icon: Ea.a, title: x.a.becb4930, description: x.a.g743ef96 },
        ],
        xa = function () {
          return c.a.createElement(
            va.a,
            null,
            Ca.map(function (e) {
              return c.a.createElement(Sa, g()({}, e, { key: e.title }))
            }),
          )
        },
        Ka = x.a.a6777c1b,
        Pa = x.a.j5dc36d7,
        La = x.a.c45b2f06,
        Oa = x.a.hb6b432e,
        Da = x.a.cd5cae15,
        Ta = x.a.f7239f4c,
        Ba = x.a.g8cdf707,
        Ia = x.a.bff8472e,
        Ra = x.a.e533715d,
        Va = void 0 !== i ? i : (i = n('xd+q')),
        za = function (e) {
          var a = e.user,
            n = le()(Va, a).legacy.followers_count
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            c.a.createElement(
              Q.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ka,
            ),
            c.a.createElement(Q.b, null, Pa),
            c.a.createElement(
              Q.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              La,
            ),
            c.a.createElement(Q.b, { color: 'gray700' }, Oa),
            c.a.createElement(Ye, { type: Ze.HandCoins }),
            c.a.createElement(
              Q.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Da,
            ),
            c.a.createElement(xa, null),
            c.a.createElement(
              Q.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ta,
            ),
            c.a.createElement(ha, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            c.a.createElement(
              Q.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ba,
            ),
            c.a.createElement(Q.b, { color: 'gray700' }, Ia),
            c.a.createElement(te, { color: 'plum500', label: Ra, path: v.eligibility }),
          )
        },
        Aa = x.a.d0fc4890,
        Ma = x.a.c64384b6,
        Ua = x.a.c3d89aca,
        ja = function () {
          return c.a.createElement(
            M,
            { withInfoButton: !0 },
            c.a.createElement(ea, { align: 'center', headline: Aa, illustration: Ze.OneFinger, subtext: Ma }),
            c.a.createElement(te, { label: Ua, path: v.completeProfile }),
          )
        },
        Na = n('cHvH'),
        Ha = function (e, a) {
          var n = e.children,
            t = e.style,
            r = Object(Na.b)().windowWidth > V.a.theme.breakpoints.medium ? Ga.marginWide : Ga.marginNarrow
          return c.a.createElement(I.a, { ref: a, style: [t, r] }, n)
        },
        Wa = c.a.forwardRef(Ha),
        Ga = V.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space72 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        qa = x.a.aa7e35ed,
        Qa = x.a.f67e69bf,
        Xa = function () {
          if (!c.a.useContext(N.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Wa,
              { style: Za.interstitial },
              c.a.createElement(ea, { headline: qa, illustration: Ze.Uturn, subtext: Qa }),
            ),
          )
        },
        Za = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Ja = n('tI3i'),
        Ya = n.n(Ja),
        $a = n('FGLp'),
        en = (n('2G9S'), n('Hsf0')),
        an = n.n(en),
        nn = function (e) {
          return an()(void 0 !== o ? o : (o = n('l/EB')), e).__id
        },
        tn = function (e, a) {
          var n = nn(a),
            t = e.get(n)
          return Ya()(t, 'viewer must be defined'), t
        },
        rn = 'super_follows_application_draft',
        ln = function (e, a) {
          return tn(e, a).getLinkedRecord(rn)
        },
        on = n('HG4m'),
        sn = n.n(on),
        cn = n('Ud88'),
        un = n.n(cn)
      function dn(e, a) {
        var n = un()()
        Object($a.a)(function () {
          Ya()(e, 'viewerRef must be defined'),
            sn()(n, function (n) {
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
                  h = nn(a),
                  y = tn(e, a)
                if (!ln(e, a)) {
                  var v = e.create(''.concat(h, ':').concat(rn), 'SuperFollowsApplicationDraft')
                  v.setValue(r, 'content_category'),
                    v.setValue(i, 'content_category_other'),
                    v.setValue(s, 'content_creation_platform'),
                    v.setValue(u, 'content_creation_platform_other'),
                    v.setValue(b, 'purpose'),
                    v.setValue(p, 'ethnicity'),
                    v.setValue(g, 'gender'),
                    y.setLinkedRecord(v, rn)
                }
              })(n, e, a)
            })
        })
      }
      function pn(e, a) {
        var n = un()()
        return c.a.useCallback(
          function (t) {
            Ya()(e, 'viewerRef must be defined'),
              sn()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = ln(e, a)
                  Ya()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var mn,
        gn,
        fn,
        bn,
        hn,
        yn,
        vn,
        wn,
        Sn,
        _n,
        kn,
        Fn,
        En,
        Cn,
        xn = n('p+r5'),
        Kn = x.a.f7997b16,
        Pn = x.a.fc00ab5b,
        Ln = x.a.c249167f,
        On = x.a.b772cd65,
        Dn = void 0 !== mn ? mn : (mn = n('xhT1')),
        Tn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = le()(Dn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = pn(r, 'content_category_other')
          return c.a.createElement(
            M,
            { title: Kn },
            c.a.createElement(xn.a, {
              helperText: Ln,
              label: Pn,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(O.a, null, On),
          )
        },
        Bn = n('fyvP'),
        In = n('csss'),
        Rn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(B.f)()
          return c.a.createElement(In.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        Vn = x.a.f7997b16,
        zn = x.a.c144fa52,
        An = [
          x.a.b1f2e8ce,
          x.a.jfec3aa0,
          x.a.e08a6e6f,
          x.a.b743702c,
          x.a.h2401e36,
          x.a.ed7e6675,
          x.a.fecc3791,
          x.a.d80b0f11,
          x.a.b29a93b1,
          x.a.c5d190c0,
          x.a.i6dfc494,
          x.a.ff2b68ca,
          x.a.e404203c,
          x.a.ab389321,
          x.a.a46fdec4,
          x.a.add55c97,
          x.a.f28d8b06,
          x.a.c8ee31da,
          x.a.e0234d02,
          x.a.h9d38a08,
          x.a.fe6841bd,
          x.a.e031e06a,
          x.a.i5cade16,
          x.a.e084f2af,
          x.a.a9db15b2,
          x.a.d27beb9e,
          x.a.a92db4a9,
          x.a.fc64990d,
          x.a.hb5f1d64,
        ],
        Mn = x.a.c365dcc5,
        Un = x.a.bd44a8a8,
        jn = void 0 !== gn ? gn : (gn = n('JB6R')),
        Nn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = le()(jn, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = pn(r, 'content_category'),
            o = An.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            M,
            { title: Vn },
            c.a.createElement(Bn.a, {
              description: zn,
              label: zn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(Rn, { helpText: Un, label: Mn, path: v.submitCategoriesOther }),
          )
        },
        Hn = x.a.d94a9a17,
        Wn = x.a.a35394b3,
        Gn = [
          x.a.e375c2df,
          x.a.gf30371a,
          x.a.b3773d47,
          x.a.a45caf17,
          x.a.e5f515b8,
          x.a.e3b35497,
          x.a.i83206dc,
          x.a.a4ee9393,
          x.a.ab09972f,
          x.a.jafe3705,
        ],
        qn = void 0 !== fn ? fn : (fn = n('H1we')),
        Qn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = le()(qn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = pn(r, 'ethnicity'),
            o = Gn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            M,
            { title: Hn },
            c.a.createElement(Bn.a, {
              description: Wn,
              label: Wn,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        Xn = x.a.a8d0108d,
        Zn = x.a.a35394b3,
        Jn = [
          x.a.de32365f,
          x.a.b6ab31bd,
          x.a.ffc23188,
          x.a.h1cc7091,
          x.a.hca27829,
          x.a.b3af7344,
          x.a.he3f1435,
          x.a.c3c16abb,
        ],
        Yn = void 0 !== bn ? bn : (bn = n('VG5i')),
        $n = function (e) {
          var a,
            n,
            t = e.viewer,
            r = le()(Yn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = pn(r, 'gender'),
            o = Jn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            M,
            { title: Xn },
            c.a.createElement(Bn.a, {
              description: Zn,
              label: Zn,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        et = x.a.da8ea7da,
        at = x.a.d7081f91,
        nt = x.a.j349548f,
        tt = x.a.b772cd65,
        rt = void 0 !== hn ? hn : (hn = n('+OUG')),
        lt = function (e) {
          var a,
            n,
            t = e.viewer,
            r = le()(rt, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = pn(r, 'content_creation_platform_other')
          return c.a.createElement(
            M,
            { title: et },
            c.a.createElement(xn.a, {
              helperText: nt,
              label: at,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(O.a, null, tt),
          )
        },
        it = x.a.da8ea7da,
        ot = x.a.d4062c9a,
        st = [x.a.a3021317, x.a.eb4a600d, x.a.d4d74bb3, x.a.fc738909, x.a.d8552c1a, x.a.ca07aa46],
        ct = x.a.c365dcc5,
        ut = x.a.bd44a8a8,
        dt = void 0 !== yn ? yn : (yn = n('xnrs')),
        pt = function (e) {
          var a,
            n,
            t = e.viewer,
            r = le()(dt, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = pn(r, 'content_creation_platform'),
            o = st.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            M,
            { title: it },
            c.a.createElement(Bn.a, {
              description: ot,
              label: ot,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(Rn, { helpText: ut, label: ct, path: v.submitPlatformsOther }),
          )
        },
        mt = (n('tVqn'), n('uFXj'), x.a.f4f4dd6f),
        gt = x.a.f448cbcb,
        ft = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? mt : 'optional' === n ? gt : void 0
          return c.a.createElement(
            I.a,
            { style: bt.container },
            c.a.createElement(Q.b, { size: 'headline1', weight: 'heavy' }, a),
            r && c.a.createElement(Q.b, { color: t, size: 'subtext2', style: bt.subtext }, r),
          )
        },
        bt = V.a.create(function (e) {
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
        ht = n('jV+4'),
        yt = n('Xrkv'),
        vt = n('9SqB'),
        wt = n.n(vt),
        St = x.a.e873f0ae,
        _t = x.a.f095a24a,
        kt = x.a.i5f7b6b8,
        Ft = x.a.d1f6d336,
        Et = x.a.f7997b16,
        Ct = x.a.c144fa52,
        xt = x.a.f1bf337d,
        Kt = x.a.da8ea7da,
        Pt = x.a.d4062c9a,
        Lt = x.a.e963d587,
        Ot = x.a.ede0ac3e,
        Dt = x.a.ffb6cb88,
        Tt = x.a.b2159e8e,
        Bt = x.a.feacb49d,
        It = x.a.je17c987,
        Rt = x.a.d94a9a17,
        Vt = x.a.a8d0108d,
        zt = x.a.gfc80842,
        At = void 0 !== vn ? vn : (vn = n('pLb/')),
        Mt = void 0 !== wn ? wn : (wn = n('3qCL')),
        Ut = void 0 !== Sn ? Sn : (Sn = n('AyUU')),
        jt = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i,
            o,
            s = e.user,
            u = e.viewer,
            d = le()(At, s),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = le()(Mt, u),
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
            _ = pn(m, 'purpose'),
            k = wt()(Ut),
            F = ae()(k, 2),
            E = F[0],
            C = F[1]
          return c.a.createElement(
            M,
            { withInfoButton: !0 },
            c.a.createElement(ea, { headline: St, illustration: Ze.Clipboard, subtext: _t }),
            c.a.createElement(ft, { title: kt }),
            c.a.createElement(Q.b, null, Ft),
            p && c.a.createElement(ht.a, { screenName: p }),
            c.a.createElement(ft, { title: Et, type: 'required' }),
            c.a.createElement(Q.b, { color: 'gray700' }, Ct),
            c.a.createElement(Rn, { description: Object(yt.a)(f, !0), label: xt, path: v.submitCategories }),
            c.a.createElement(ft, { title: Kt, type: 'required' }),
            c.a.createElement(Q.b, { color: 'gray700' }, Pt),
            c.a.createElement(Rn, { description: Object(yt.a)(b, !0), label: Lt, path: v.submitPlatforms }),
            c.a.createElement(ft, { title: Ot, type: 'required' }),
            c.a.createElement(xn.a, {
              helperText: Tt,
              label: Dt,
              name: 'plannedUsage',
              onChange: function (e) {
                _(e.currentTarget.value)
              },
              value: h,
            }),
            c.a.createElement(ft, { title: Bt, type: 'optional' }),
            c.a.createElement(Q.b, { color: 'gray700' }, It),
            c.a.createElement(Rn, { description: Object(yt.a)(y, !0), label: Rt, path: v.submitEthnicities }),
            c.a.createElement(Rn, { description: Object(yt.a)(w, !0), label: Vt, path: v.submitGenders }),
            c.a.createElement($, null),
            c.a.createElement(te, {
              disabled: !S || C,
              label: zt,
              onPress: function () {
                return new Promise(function (e, a) {
                  E({
                    variables: { category: f, platform: b, purpose: h, ethnicity: y, gender: w },
                    onCompleted: function (a, n) {
                      return e()
                    },
                    onError: a,
                  })
                })
              },
              path: v.submitted,
            }),
          )
        },
        Nt = x.a.d3d6c52c,
        Ht = x.a.c53e9129,
        Wt = function () {
          if (!c.a.useContext(N.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            c.a.createElement(
              Wa,
              { style: Gt.interstitial },
              c.a.createElement(ea, { headline: Nt, illustration: Ze.PaperAirplane, subtext: Ht }),
            ),
          )
        },
        Gt = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        qt = x.a.j274e6aa,
        Qt = x.a.d7f65127,
        Xt = function () {
          if (!c.a.useContext(N.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Wa,
              { style: Zt.interstitial },
              c.a.createElement(ea, { headline: qt, illustration: Ze.Bench, subtext: Qt }),
            ),
          )
        },
        Zt = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Jt = void 0 !== _n ? _n : (_n = n('o/nB')),
        Yt = void 0 !== kn ? kn : (kn = n('lZLw')),
        $t = function (e) {
          var a = e.user,
            n = e.viewer,
            t = c.a.useContext(N.a).featureSwitches,
            r = le()(Jt, a),
            l = le()(Yt, n)
          if ((dn(l), !t.isTrue('super_follow_web_application_enabled')))
            throw new Error('Super Follows application is not enabled')
          return null == l.super_follows_application_draft
            ? c.a.createElement(j.a, { to: y })
            : c.a.createElement(
                B.d,
                null,
                c.a.createElement(B.b, { exact: !0, path: v.eligibility }, c.a.createElement(ga, { user: r })),
                c.a.createElement(B.b, { exact: !0, path: v.oneMoreThing }, c.a.createElement(ja, null)),
                c.a.createElement(B.b, { exact: !0, path: v.completeProfile }, c.a.createElement(G, null)),
                c.a.createElement(B.b, { exact: !0, path: v.submit }, c.a.createElement(jt, { user: r, viewer: l })),
                c.a.createElement(B.b, { exact: !0, path: v.submitCategories }, c.a.createElement(Nn, { viewer: l })),
                c.a.createElement(
                  B.b,
                  { exact: !0, path: v.submitCategoriesOther },
                  c.a.createElement(Tn, { viewer: l }),
                ),
                c.a.createElement(B.b, { exact: !0, path: v.submitPlatforms }, c.a.createElement(pt, { viewer: l })),
                c.a.createElement(
                  B.b,
                  { exact: !0, path: v.submitPlatformsOther },
                  c.a.createElement(lt, { viewer: l }),
                ),
                c.a.createElement(B.b, { exact: !0, path: v.submitEthnicities }, c.a.createElement(Qn, { viewer: l })),
                c.a.createElement(B.b, { exact: !0, path: v.submitGenders }, c.a.createElement($n, { viewer: l })),
                c.a.createElement(B.b, { exact: !0, path: v.submitted }, c.a.createElement(Wt, null)),
                c.a.createElement(B.b, { exact: !0, path: v.waitlisted }, c.a.createElement(Xt, null)),
                c.a.createElement(B.b, { exact: !0, path: v.rejected }, c.a.createElement(Xa, null)),
                c.a.createElement(B.b, { path: v.root }, c.a.createElement(za, { user: r })),
              )
        },
        er = (n('KqXw'), n('MvUL'), n('eb3s')),
        ar = x.a.af4d0a80,
        nr = x.a.c701e5cc,
        tr = x.a.a649778b,
        rr = x.a.d4ab68e2,
        lr = function (e) {
          var a = e.onNavigation,
            n = e.shouldBlockNavigation,
            t = Object(B.f)(),
            r = c.a.useState(void 0),
            l = ae()(r, 2),
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
            ? c.a.createElement(er.a, {
                cancelButtonLabel: tr,
                confirmButtonLabel: rr,
                confirmButtonType: 'destructiveFilled',
                headline: ar,
                onCancel: u,
                onConfirm: d,
                text: nr,
              })
            : null
        },
        ir =
          (n('ho0z'),
          function (e) {
            var a = e.children,
              n = e.style
            return c.a.createElement(
              I.a,
              { style: [cr.frame, n] },
              c.a.createElement(
                I.a,
                { style: cr.browserBar },
                c.a.createElement(
                  I.a,
                  { style: cr.browserBarButtons },
                  c.a.createElement(I.a, { style: cr.browserBarButton }),
                  c.a.createElement(I.a, { style: cr.browserBarButton }),
                  c.a.createElement(I.a, { style: cr.browserBarButton }),
                ),
                c.a.createElement(
                  I.a,
                  { style: cr.browserBarUrlInputWrapper },
                  c.a.createElement(I.a, { style: cr.browserBarUrlInput }),
                ),
              ),
              a,
            )
          }),
        or = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(I.a, { style: n }, c.a.createElement(I.a, { style: cr.content }, a))
        },
        sr = function (e) {
          var a = e.children,
            n = e.style
          return Object(Na.b)().windowWidth > V.a.theme.breakpoints.medium
            ? c.a.createElement(ir, { style: n }, c.a.createElement(or, { style: cr.contentWide }, a))
            : c.a.createElement(or, { style: n }, a)
        },
        cr = V.a.create(function (e) {
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
        ur = n('2fsM'),
        dr = function (e) {
          return c.a.createElement(
            sr,
            null,
            c.a.createElement(I.a, { style: pr.browserContent }, c.a.createElement(ur.a, e)),
          )
        },
        pr = V.a.create(function (e) {
          return { browserContent: { paddingBottom: e.spaces.space48 } }
        }),
        mr = ['label', 'path'],
        gr = function (e) {
          var a = e.label,
            n = e.path,
            t = b()(e, mr),
            r = Object(B.f)()
          return c.a.createElement(
            Q.b,
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
        fr = x.a.hf6f2913,
        br = x.a.i859a9d3,
        hr = V.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        yr = function (e) {
          var a = e.path,
            n = e.style
          return c.a.createElement(
            I.a,
            { style: [hr.root, n] },
            c.a.createElement(Q.b, { size: 'headline2', weight: 'heavy' }, fr),
            c.a.createElement(gr, { label: br, path: a }),
          )
        },
        vr = n('0yYu'),
        wr = 'super_follows_onboarding_draft',
        Sr = function (e, a) {
          return tn(e, a).getLinkedRecord(wr)
        }
      function _r(e, a) {
        var n = un()()
        Object($a.a)(function () {
          Ya()(e, 'viewerRef must be defined'),
            sn()(n, function (n) {
              !(function (e, a) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  t = n.creator_intro,
                  r = void 0 === t ? null : t,
                  l = n.description,
                  i = void 0 === l ? null : l,
                  o = n.selected_price,
                  s = void 0 === o ? null : o,
                  c = nn(a),
                  u = tn(e, a)
                if (!Sr(e, a)) {
                  var d = e.create(''.concat(c, ':').concat(wr), 'SuperFollowsOnboardingDraft')
                  d.setValue(r, 'creator_intro'),
                    d.setValue(i, 'description'),
                    d.setValue(s, 'selected_price'),
                    u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                }
              })(n, e, a)
            })
        })
      }
      function kr(e, a) {
        var n = un()()
        return c.a.useCallback(
          function (t) {
            Ya()(e, 'viewerId must be defined'),
              sn()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Sr(e, a)
                  Ya()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Fr,
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
        Nr,
        Hr,
        Wr,
        Gr,
        qr,
        Qr,
        Xr,
        Zr,
        Jr,
        Yr,
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
        cl,
        ul,
        dl,
        pl,
        ml,
        gl,
        fl,
        bl,
        hl,
        yl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = le()(void 0 !== Fn ? Fn : (Fn = n('krsm')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.creator_intro) && void 0 !== a
            ? a
            : ''
        },
        vl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = le()(void 0 !== En ? En : (En = n('ZaCQ')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.description) && void 0 !== a
            ? a
            : ''
        },
        wl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = le()(void 0 !== Cn ? Cn : (Cn = n('K7/K')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        Sl = x.a.iba08a94,
        _l = x.a.ef354e83,
        kl = void 0 !== Fr ? Fr : (Fr = n('UFp0')),
        Fl = void 0 !== Er ? Er : (Er = n('NmgE')),
        El = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = le()(kl, t),
            i = le()(Fl, r),
            o = (null == l ? void 0 : l.legacy) || {},
            s = o.name,
            u = o.profile_image_url_https,
            d = o.protected,
            p = o.screen_name,
            m = o.verified,
            g = null !== (a = yl(i)) && void 0 !== a ? a : '',
            f = null !== (n = vl(i)) && void 0 !== n ? n : ''
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Wa, { style: Cl.interstitial }, c.a.createElement(ea, { headline: Sl, subtext: _l })),
            c.a.createElement(vr.a, null),
            c.a.createElement(Wa, { style: Cl.previewCallout }, c.a.createElement(yr, { path: F })),
            c.a.createElement(
              I.a,
              { style: Cl.summaryFramed },
              c.a.createElement(dr, {
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
        Cl = V.a.create(function (e) {
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
        xl = x.a.hf6f2913,
        Kl = void 0 !== Cr ? Cr : (Cr = n('MvEh')),
        Pl = void 0 !== xr ? xr : (xr = n('U5ka')),
        Ll = function (e) {
          var a = e.user,
            n = e.viewer,
            t = le()(Kl, a),
            r = le()(Pl, n)
          return c.a.createElement(M, { title: xl, withInfoButton: !0 }, c.a.createElement(El, { user: t, viewer: r }))
        },
        Ol = n('44Bp'),
        Dl = ['style'],
        Tl = function (e, a) {
          var n = e.style,
            t = b()(e, Dl)
          return c.a.createElement(
            sr,
            { style: n },
            c.a.createElement(c.a.Fragment, null, c.a.createElement(Ol.a, g()({}, t, { ref: a }))),
          )
        },
        Bl = c.a.forwardRef(Tl),
        Il = x.a.gf32cca1,
        Rl = x.a.j8ba99b3,
        Vl = x.a.j679dcda,
        zl = void 0 !== Kr ? Kr : (Kr = n('yjSu')),
        Al = void 0 !== Pr ? Pr : (Pr = n('RTdz')),
        Ml = function (e, a) {
          var n = e.autoFocus,
            t = e.descriptionMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object($a.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = le()(zl, r),
            s = le()(Al, l),
            u = o.legacy,
            d = u.profile_image_url_https,
            p = u.screen_name,
            m = vl(s),
            g = kr(s, 'description')
          return (
            Ya()('string' == typeof d, 'imageUrl must be defined'),
            Ya()('string' == typeof p, 'screenName must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Wa, { style: jl.interstitial }, c.a.createElement(ea, { headline: Il, subtext: Rl })),
              c.a.createElement(Wa, { style: jl.examplesLink }, c.a.createElement(gr, { label: Vl, path: k })),
              c.a.createElement(vr.a, null),
              c.a.createElement(Wa, { style: jl.previewCallout }, c.a.createElement(yr, { path: F })),
              c.a.createElement(Bl, {
                autoFocus: n,
                imageUrl: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                screenName: p,
                style: jl.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(I.a, { ref: i }),
            )
          )
        },
        Ul = c.a.forwardRef(Ml),
        jl = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Nl =
          (n('hBpG'),
          n('5BYb'),
          function (e) {
            var a, t
            return null !==
              (a =
                null === (t = le()(void 0 !== Or ? Or : (Or = n('WDhg')), e).super_follow_creator_benefits) ||
                void 0 === t
                  ? void 0
                  : t.creator_intro) && void 0 !== a
              ? a
              : ''
          }),
        Hl = function (e) {
          var a,
            t,
            r,
            l = (
              null !==
                (a =
                  null === (t = le()(void 0 !== Dr ? Dr : (Dr = n('G/nI')), e).super_follow_creator_benefits) ||
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
        Wl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = le()(void 0 !== Tr ? Tr : (Tr = n('dGIC')), e).super_follow_creator_price_metadata) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        Gl = (n('jwue'), n('+oxZ'), void 0 !== Br ? Br : (Br = n('rwq4'))),
        ql = void 0 !== Ir ? Ir : (Ir = n('E9LA')),
        Ql = function (e, a) {
          var t = a.creatorIntro,
            r = a.description,
            l = le()(Gl, e),
            i = (function (e) {
              var a
              return null === (a = le()(void 0 !== Lr ? Lr : (Lr = n('lWeI')), e).super_follow_creator_benefits) ||
                void 0 === a
                ? void 0
                : a.__id
            })(l),
            o = Nl(l),
            s = Hl(l),
            u = t || o,
            d = r || s,
            p = wt()(ql),
            m = ae()(p, 2),
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
                      Ya()(i, 'benefitsId must be specified')
                      var a = e.get(i)
                      if (
                        (Ya()(a, 'benefitsRecord must be specified'),
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
        Xl = x.a.cd5cae15,
        Zl = x.a.e36287c6,
        Jl = x.a.b772cd65,
        Yl = void 0 !== Rr ? Rr : (Rr = n('kz1e')),
        $l = void 0 !== Vr ? Vr : (Vr = n('M3aw')),
        ei = function (e) {
          var a = e.user,
            n = e.viewer,
            t = le()(Yl, a),
            r = le()($l, n),
            l = Hl(t),
            i = vl(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = Ql(t, { description: i }),
            u = ae()(s, 2),
            d = u[0],
            p = u[1],
            m = { disabled: !o || p, label: Jl, onPress: d, path: S.root, type: 'primaryFilled' },
            f = c.a.createElement(te, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            M,
            { rightControl: f, subtitle: Zl, title: Xl },
            c.a.createElement(Ul, { autoFocus: !0, descriptionMaxLength: 140, user: t, viewer: r }),
          )
        },
        ai = n('MAc7'),
        ni = ['style'],
        ti = function (e, a) {
          var n = e.style,
            t = b()(e, ni)
          return c.a.createElement(sr, { style: n }, c.a.createElement(ai.a, g()({}, t, { ref: a })))
        },
        ri = c.a.forwardRef(ti),
        li = x.a.j3253319,
        ii = x.a.h1e80993,
        oi = x.a.j679dcda,
        si = void 0 !== zr ? zr : (zr = n('hGtx')),
        ci = void 0 !== Ar ? Ar : (Ar = n('DWSt')),
        ui = function (e, a) {
          var n = e.autoFocus,
            t = e.introMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object($a.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = le()(si, r),
            s = le()(ci, l),
            u = o.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m = yl(s),
            g = kr(s, 'creator_intro')
          return (
            Ya()('string' == typeof p, 'imageUrl must be defined'),
            Ya()('string' == typeof d, 'name must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Wa, { style: pi.interstitial }, c.a.createElement(ea, { headline: li, subtext: ii })),
              c.a.createElement(Wa, { style: pi.examplesLink }, c.a.createElement(gr, { label: oi, path: _ })),
              c.a.createElement(vr.a, null),
              c.a.createElement(Wa, { style: pi.previewCallout }, c.a.createElement(yr, { path: F })),
              c.a.createElement(ri, {
                autoFocus: n,
                imageUrl: p,
                name: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                style: pi.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(I.a, { ref: i }),
            )
          )
        },
        di = c.a.forwardRef(ui),
        pi = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        mi = x.a.cd5cae15,
        gi = x.a.c0348963,
        fi = x.a.b772cd65,
        bi = void 0 !== Mr ? Mr : (Mr = n('oyMe')),
        hi = void 0 !== Ur ? Ur : (Ur = n('RL7R')),
        yi = function (e) {
          var a = e.user,
            n = e.viewer,
            t = le()(bi, a),
            r = le()(hi, n),
            l = Nl(t),
            i = yl(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = Ql(t, { creatorIntro: i }),
            u = ae()(s, 2),
            d = u[0],
            p = u[1],
            m = { disabled: !o || p, label: fi, onPress: d, path: S.root, type: 'primaryFilled' },
            f = c.a.createElement(te, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            M,
            { rightControl: f, subtitle: gi, title: mi },
            c.a.createElement(di, { autoFocus: !0, introMaxLength: 140, user: t, viewer: r }),
          )
        },
        vi = n('Nh1N'),
        wi = n('yoO3'),
        Si = n('7FtF'),
        _i = n('PCeD'),
        ki = x.a.be103b84,
        Fi = function () {
          return c.a.createElement(
            I.a,
            { style: Ei.root },
            c.a.createElement(X.a, { style: Ei.icon }),
            c.a.createElement(Q.b, { size: 'subtext2', weight: 'bold' }, ki),
          )
        },
        Ei = V.a.create(function (e) {
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
        Ci = function (e) {
          var a = e.children,
            n = e.headline,
            t = e.rightControl
          return c.a.createElement(
            I.a,
            { style: xi.root },
            c.a.createElement(
              I.a,
              { style: xi.header },
              c.a.createElement(
                Q.b,
                {
                  accessibilityLevel: 4,
                  accessibilityRole: 'heading',
                  size: 'headline2',
                  style: xi.headline,
                  weight: 'heavy',
                },
                n,
              ),
              a,
            ),
            t,
          )
        },
        xi = V.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        Ki = n('4zmP'),
        Pi = n.p + 'Chat.62494e65.png',
        Li = n.p + 'Chat@2x.f6eeca05.png',
        Oi = n.p + 'Chat@3x.dd8438c5.png',
        Di = n.p + 'Cog.788d3515.png',
        Ti = n.p + 'Cog@2x.3528d165.png',
        Bi = n.p + 'Cog@3x.e4185e95.png',
        Ii = n.p + 'Coin.684ea185.png',
        Ri = n.p + 'Coin@2x.9e020695.png',
        Vi = n.p + 'Coin@3x.d5ecbc95.png',
        zi = n.p + 'CoinPurse.5e7e5f25.png',
        Ai = n.p + 'CoinPurse@2x.62abfad5.png',
        Mi = n.p + 'CoinPurse@3x.6b9f5d05.png',
        Ui = n.p + 'Cone.e7e68c95.png',
        ji = n.p + 'Cone@2x.94d66a15.png',
        Ni = n.p + 'Cone@3x.f4718655.png',
        Hi = n.p + 'Cross.eed0ff55.png',
        Wi = n.p + 'Cross@2x.68249435.png',
        Gi = n.p + 'Cross@3x.59595055.png',
        qi = n.p + 'FirstAid.962ae7e5.png',
        Qi = n.p + 'FirstAid@2x.09640055.png',
        Xi = n.p + 'FirstAid@3x.b6884b15.png',
        Zi = n.p + 'Heart.a7bdca85.png',
        Ji = n.p + 'Heart@2x.a3108ce5.png',
        Yi = n.p + 'Heart@3x.2866f2f5.png',
        $i = n.p + 'LifeSaver.19af1fb5.png',
        eo = n.p + 'LifeSaver@2x.5f9465a5.png',
        ao = n.p + 'LifeSaver@3x.3cde1ca5.png',
        no = n.p + 'Lightbulb.632a0de5.png',
        to = n.p + 'Lightbulb@2x.ea0a7dc5.png',
        ro = n.p + 'Lightbulb@3x.d47fac75.png',
        lo = n.p + 'NoEntry.89a117a5.png',
        io = n.p + 'NoEntry@2x.6460d275.png',
        oo = n.p + 'NoEntry@3x.cf8e9465.png',
        so = n.p + 'Pencil.6ac7a9a5.png',
        co = n.p + 'Pencil@2x.e6d394c5.png',
        uo = n.p + 'Pencil@3x.7e45c2e5.png',
        po = n.p + 'PiggyBank.571af825.png',
        mo = n.p + 'PiggyBank@2x.f6b3cb15.png',
        go = n.p + 'PiggyBank@3x.f166bc15.png',
        fo = n.p + 'Plant.2e93bbb5.png',
        bo = n.p + 'Plant@2x.5660c145.png',
        ho = n.p + 'Plant@3x.60b66855.png',
        yo = n.p + 'Puzzle.59175915.png',
        vo = n.p + 'Puzzle@2x.d2394395.png',
        wo = n.p + 'Puzzle@3x.ed9bd735.png',
        So = n.p + 'Ribbon.a0d66a65.png',
        _o = n.p + 'Ribbon@2x.d981e095.png',
        ko = n.p + 'Ribbon@3x.d6c8e505.png',
        Fo = n.p + 'Spheres.c33c7b95.png',
        Eo = n.p + 'Spheres@2x.6b6732f5.png',
        Co = n.p + 'Spheres@3x.5e58c985.png',
        xo = n.p + 'Star.2714eb95.png',
        Ko = n.p + 'Star@2x.25a57fd5.png',
        Po = n.p + 'Star@3x.206f9d85.png',
        Lo = n.p + 'TrashCan.7ed17045.png',
        Oo = n.p + 'TrashCan@2x.79c8ba35.png',
        Do = n.p + 'TrashCan@3x.91184ba5.png',
        To = n.p + 'Wallet.0ca99435.png',
        Bo = n.p + 'Wallet@2x.d3b05545.png',
        Io = n.p + 'Wallet@3x.90c942f5.png',
        Ro = [1, 2, 3],
        Vo = Object.freeze({
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
        zo = Object(We.a)(Vo),
        Ao = zo.reduce(function (e, a) {
          var n = Math.max.apply(Math, Ro)
          return (
            (e[a] = {
              aspectRatio: 1,
              image: { url: r[a], width: 36 * n, height: 36 * n },
              customVariants: Ro.map(function (e) {
                return { uri: r[a + (1 !== e ? ''.concat(e, 'x') : '')], width: 36 * e, height: 36 * e }
              }),
            }),
            e
          )
        }, {}),
        Mo = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? 36 : n,
            r = Ao[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            I.a,
            { style: s },
            c.a.createElement(Ge.a, {
              accessibilityLabel: '',
              aspectMode: qe.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        Uo = function (e) {
          var a = e.children,
            n = e.childrenStyle,
            t = e.headline,
            r = e.illustration,
            l = e.rightControl
          return c.a.createElement(
            I.a,
            { style: jo.root },
            r && c.a.createElement(Mo, { type: r, width: 36 }),
            c.a.createElement(
              I.a,
              { style: jo.header },
              c.a.createElement(
                Q.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: jo.headline,
                  weight: 'heavy',
                },
                t,
              ),
              l,
            ),
            c.a.createElement(I.a, { style: n }, a),
          )
        },
        jo = V.a.create(function (e) {
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
        No = ['$refType'],
        Ho = x.a.a6777c1b,
        Wo = x.a.a384fda0,
        Go = x.a.i4313618,
        qo = x.a.c0348963,
        Qo = x.a.ic624ab2,
        Xo = x.a.ifc9b709,
        Zo = x.a.b08bbeb4,
        Jo = x.a.ia9c37c4,
        Yo = x.a.fb1e4eb6,
        $o = x.a.be54a312,
        es = x.a.cca48545,
        as = x.a.de67bc6e,
        ns = x.a.a46cead5,
        ts = x.a.idd8ae44,
        rs = x.a.b28a1b48,
        ls = x.a.f2df375b,
        is = x.a.f3ce76c0,
        os = x.a.i8982e7e,
        ss = x.a.ca5ca5ed,
        cs = x.a.abd845fd,
        us = x.a.i859a9d3,
        ds = x.a.d14c7bbc,
        ps = x.a.g867481d,
        ms = x.a.f66d24be,
        gs = x.a.g5925628,
        fs = void 0 !== jr ? jr : (jr = n('EM6u')),
        bs = void 0 !== Nr ? Nr : (Nr = n('oNwH')),
        hs = function (e) {
          var a,
            n,
            t,
            r = e.priceOfferings,
            l = e.user,
            i = Object(B.g)(),
            o = le()(fs, r),
            s = (o.$refType, b()(o, No)),
            u = le()(bs, l),
            d = Nl(u),
            p = Hl(u),
            m = null !== (a = Wl(u)) && void 0 !== a ? a : 'offer2',
            g = null !== (n = u.legacy.profile_image_url_https) && void 0 !== n ? n : void 0,
            f = null !== (t = u.legacy.screen_name) && void 0 !== t ? t : void 0,
            h = c.a.createElement(gr, { label: ss, path: S.perksConfirm, size: 'subtext1' }),
            y = c.a.createElement(te, { label: cs, path: S.perksIntro, size: 'small', type: 'primaryOutlined' }),
            v = c.a.createElement(te, { label: cs, path: S.perksDescription, size: 'small', type: 'primaryOutlined' })
          return c.a.createElement(
            wi.a,
            null,
            c.a.createElement(
              Si.a,
              { location: i, screenType: 'secondaryDetail', title: Ho },
              c.a.createElement(
                I.a,
                { style: ys.title },
                c.a.createElement(
                  Q.b,
                  { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                  Ho,
                ),
                c.a.createElement(Fi, null),
              ),
              c.a.createElement(vr.a, null),
              c.a.createElement(
                Uo,
                { childrenStyle: ys.benefits, headline: Wo, illustration: Vo.Ribbon, rightControl: h },
                c.a.createElement(Q.b, { color: 'gray700' }, Go),
                c.a.createElement(
                  Ci,
                  { headline: qo, rightControl: y },
                  c.a.createElement(_i.a, { imageUrl: g, screenName: f, value: d }),
                ),
                c.a.createElement(
                  Ci,
                  { headline: Qo, rightControl: v },
                  c.a.createElement(_i.a, { imageUrl: g, screenName: f, value: p }),
                ),
                c.a.createElement(Ci, { headline: Xo }, c.a.createElement(Q.b, { color: 'gray700' }, Zo)),
              ),
              c.a.createElement(vr.a, null),
              c.a.createElement(
                Uo,
                { childrenStyle: ys.other, headline: Jo, illustration: Vo.PiggyBank },
                c.a.createElement(Q.b, { color: 'gray700' }, Yo),
                c.a.createElement(Q.b, { size: 'headline2', weight: 'heavy' }, $o({ price: s[m] })),
                c.a.createElement(Ki.a, { Icon: vi.a, action: { label: us, link: L }, headline: es, text: as }),
              ),
              c.a.createElement(vr.a, null),
              c.a.createElement(
                Uo,
                { childrenStyle: ys.other, headline: ns, illustration: Vo.Chat },
                c.a.createElement(Q.b, { color: 'gray700' }, ts),
                c.a.createElement(
                  I.a,
                  { style: ys.buttons },
                  c.a.createElement(
                    O.a,
                    {
                      dominantColor: '#5865F2',
                      link: 'https://t.co/jPqvg6tFrDJG',
                      style: ys.button,
                      type: 'onMediaDominantColorFilled',
                    },
                    ds,
                  ),
                ),
              ),
              c.a.createElement(vr.a, null),
              c.a.createElement(
                Uo,
                { childrenStyle: ys.other, headline: rs, illustration: Vo.Lightbulb },
                c.a.createElement(Q.b, { color: 'gray700' }, ls),
                c.a.createElement(
                  I.a,
                  { style: ys.buttons },
                  c.a.createElement(
                    O.a,
                    { link: 'https://t.co/RL2NN3bEVkes', style: ys.button, type: 'primaryOutlined' },
                    ps,
                  ),
                ),
              ),
              c.a.createElement(vr.a, null),
              c.a.createElement(
                Uo,
                { childrenStyle: ys.other, headline: is, illustration: Vo.LifeSaver },
                c.a.createElement(Q.b, { color: 'gray700' }, os),
                c.a.createElement(
                  I.a,
                  { style: ys.buttons },
                  c.a.createElement(O.a, { link: P, style: ys.button, type: 'primaryOutlined' }, ms),
                  c.a.createElement(
                    O.a,
                    {
                      link: 'https://help.twitter.com/forms/paid-features/superfollows',
                      style: ys.button,
                      type: 'primaryOutlined',
                    },
                    gs,
                  ),
                ),
              ),
            ),
          )
        },
        ys = V.a.create(function (e) {
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
        vs = void 0 !== Hr ? Hr : (Hr = n('N6s9')),
        ws = void 0 !== Wr ? Wr : (Wr = n('h3lO')),
        Ss = function (e) {
          var a = e.rootPath,
            n = e.user,
            t = e.viewer,
            r = le()(vs, n),
            l = le()(ws, t),
            i = Nl(r),
            o = Hl(r),
            s = Wl(r),
            u = yl(l),
            d = vl(l),
            p = wl(l),
            m = kr(l, 'creator_intro'),
            g = kr(l, 'description'),
            f = kr(l, 'selected_price')
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
        _s = void 0 !== Gr ? Gr : (Gr = n('MXCg')),
        ks = void 0 !== qr ? qr : (qr = n('mEFY')),
        Fs = void 0 !== Qr ? Qr : (Qr = n('d8Sa')),
        Es = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(N.a).featureSwitches,
            l = le()(_s, a),
            i = le()(ks, n),
            o = le()(Fs, t),
            s = Nl(i),
            u = Hl(i),
            d = Wl(i),
            p = Ss({ rootPath: S.root, user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (_r(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_edit_perks_enabled'))
          )
            throw new Error('Super Follows management is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(j.a, { to: y })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(lr, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  B.d,
                  null,
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: S.perksIntro },
                    c.a.createElement(yi, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: S.perksDescription },
                    c.a.createElement(ei, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: S.perksConfirm },
                    c.a.createElement(Ll, { user: i, viewer: o }),
                  ),
                  c.a.createElement(B.b, { path: S.root }, c.a.createElement(hs, { priceOfferings: l, user: i })),
                ),
              )
        },
        Cs = x.a.b422cb62,
        xs = x.a.f08705e0,
        Ks = x.a.e2cd700f,
        Ps = x.a.fbfd7397,
        Ls = x.a.c1df579e,
        Os = x.a.d8637c96,
        Ds = x.a.b92892dc,
        Ts = x.a.b123a502,
        Bs = void 0 !== Xr ? Xr : (Xr = n('wQp3')),
        Is = void 0 !== Zr ? Zr : (Zr = n('tfBr')),
        Rs = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = le()(Bs, n),
            l = le()(Is, t),
            i = r.stripe_account_status,
            o = yl(l),
            s = vl(l),
            u = wl(l),
            d = [
              { label: Os, checked: !!o && !!s },
              { label: Ds, checked: !!u },
              { label: Ts, checked: 'Completed' === i },
            ],
            p = d.some(function (e) {
              return e.checked
            }),
            m = c.a.createElement(te, { label: Ls, path: w.perksIntro, size: 'small', type: 'primaryFilled' })
          return c.a.createElement(
            M,
            {
              leftControlShouldClose: !0,
              percentageComplete: a,
              rightControl: m,
              withCenteredLogo: !0,
              withInfoButton: !0,
            },
            c.a.createElement(
              Wa,
              { style: Vs.interstitial },
              c.a.createElement(ea, {
                headline: p ? Ks : Cs,
                illustration: p ? Ze.Puzzle : Ze.Cat,
                subtext: p ? Ps : xs,
              }),
            ),
            c.a.createElement(Wa, { style: Vs.checks }, c.a.createElement(J, { items: d })),
          )
        },
        Vs = V.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        zs = n('hG8M'),
        As = ['style'],
        Ms = function (e) {
          var a = e.style,
            n = b()(e, As)
          return c.a.createElement(
            sr,
            { style: a },
            c.a.createElement(zs.a, g()({ style: Us.superFollowsDemoBadgeHeader }, n)),
          )
        },
        Us = V.a.create(function (e) {
          return { superFollowsDemoBadgeHeader: { alignSelf: 'center', marginBottom: e.spaces.space16 } }
        }),
        js = x.a.cda6bb6d,
        Ns = x.a.a15b98ec,
        Hs = void 0 !== Jr ? Jr : (Jr = n('mDly')),
        Ws = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i = e.user,
            o = le()(Hs, i),
            s = null !== (a = null == o ? void 0 : o.legacy.profile_image_url_https) && void 0 !== a ? a : void 0,
            u = null !== (n = null == o ? void 0 : o.legacy.protected) && void 0 !== n && n,
            d = null !== (t = null == o ? void 0 : o.legacy.verified) && void 0 !== t && t,
            p = null !== (r = null == o ? void 0 : o.legacy.name) && void 0 !== r ? r : void 0,
            m = null !== (l = null == o ? void 0 : o.legacy.screen_name) && void 0 !== l ? l : void 0
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Wa, { style: Gs.interstitial }, c.a.createElement(ea, { headline: js, subtext: Ns })),
            c.a.createElement(vr.a, null),
            c.a.createElement(Wa, { style: Gs.previewCallout }, c.a.createElement(yr, { path: F })),
            c.a.createElement(Ms, {
              imageUrl: s,
              isProtected: u,
              isVerified: d,
              name: p,
              screenName: m,
              style: Gs.preview,
            }),
          )
        },
        Gs = V.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        qs = n('86D9'),
        Qs = x.a.cd5cae15,
        Xs = x.a.ad4a92a2,
        Zs = x.a.c1df579e,
        Js = void 0 !== Yr ? Yr : (Yr = n('QmjQ')),
        Ys = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = c.a.useRef(),
            r = Object(qs.a)(t, { threshold: 0.5 }),
            l = { label: Zs, path: w.perksConfirm, type: 'primaryFilled' },
            i = c.a.createElement(te, g()({}, l, { size: 'xLarge' })),
            o = c.a.createElement(
              te,
              g()({}, l, { size: 'small', style: [$s.transitionOpacity, r ? $s.opacityNone : void 0] }),
            ),
            s = le()(Js, n)
          return c.a.createElement(
            M,
            { percentageComplete: a, rightControl: o, subtitle: Xs, title: Qs },
            c.a.createElement(Ws, { user: s }),
            c.a.createElement(Wa, { ref: t, style: $s.bigButtons }, i),
          )
        },
        $s = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        ec = x.a.cd5cae15,
        ac = x.a.e18b7a71,
        nc = x.a.c1df579e,
        tc = void 0 !== $r ? $r : ($r = n('Rthh')),
        rc = void 0 !== el ? el : (el = n('aREQ')),
        lc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = Object(qs.a)(r, { threshold: 0.5 }),
            i = le()(tc, n),
            o = le()(rc, t),
            s = { label: nc, path: w.pricing, type: 'primaryFilled' },
            u = c.a.createElement(te, g()({}, s, { size: 'xLarge' })),
            d = c.a.createElement(
              te,
              g()({}, s, { size: 'small', style: [ic.transitionOpacity, l ? ic.opacityNone : void 0] }),
            )
          return c.a.createElement(
            M,
            { percentageComplete: a, rightControl: d, subtitle: ac, title: ec },
            c.a.createElement(El, { user: i, viewer: o }),
            c.a.createElement(Wa, { ref: r, style: ic.bigButtons }, u),
          )
        },
        ic = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        oc = x.a.cd5cae15,
        sc = x.a.e36287c6,
        cc = x.a.be76dc33,
        uc = x.a.c1df579e,
        dc = void 0 !== al ? al : (al = n('6rkJ')),
        pc = void 0 !== nl ? nl : (nl = n('tJ4s')),
        mc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = c.a.useRef(),
            i = Object(qs.a)(l, { threshold: 0.5 }),
            o = le()(pc, t),
            s = le()(dc, n),
            u = vl(o),
            d = u.length > 0 && u.length <= 140,
            p = c.a.useCallback(function () {
              var e
              null == r || null === (e = r.current) || void 0 === e || e.focus()
            }, []),
            m = { disabled: !d, label: uc, path: w.perksBadges, type: 'primaryFilled' },
            f = c.a.createElement(te, g()({}, m, { size: 'xLarge' })),
            b = c.a.createElement(te, g()({}, m, { size: 'small' })),
            h = { children: cc, onClick: p, type: 'primaryFilled' },
            y = c.a.createElement(O.a, g()({}, h, { size: 'xLarge' })),
            v = c.a.createElement(O.a, g()({}, h, { size: 'small' })),
            S = d ? f : y,
            _ = c.a.createElement(I.a, { style: [gc.transitionOpacity, i ? gc.opacityNone : void 0] }, d ? b : v)
          return c.a.createElement(
            M,
            { percentageComplete: a, rightControl: _, subtitle: sc, title: oc },
            c.a.createElement(Ul, { descriptionMaxLength: 140, ref: r, user: s, viewer: o }),
            c.a.createElement(Wa, { ref: l, style: gc.bigButtons }, S),
          )
        },
        gc = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        fc = x.a.cd5cae15,
        bc = x.a.c0348963,
        hc = x.a.ef5406e3,
        yc = x.a.c1df579e,
        vc = void 0 !== tl ? tl : (tl = n('02qo')),
        wc = void 0 !== rl ? rl : (rl = n('TXsE')),
        Sc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = c.a.useRef(),
            i = Object(qs.a)(l, { threshold: 0.5 }),
            o = le()(vc, n),
            s = le()(wc, t),
            u = yl(s),
            d = u.length > 0 && u.length <= 140,
            p = c.a.useCallback(function () {
              var e
              null == r || null === (e = r.current) || void 0 === e || e.focus()
            }, []),
            m = { disabled: !d, label: yc, path: w.perksDescription, type: 'primaryFilled' },
            f = c.a.createElement(te, g()({}, m, { size: 'xLarge' })),
            b = c.a.createElement(te, g()({}, m, { size: 'small' })),
            h = { children: hc, onClick: p, type: 'primaryFilled' },
            y = c.a.createElement(O.a, g()({}, h, { size: 'xLarge' })),
            v = c.a.createElement(O.a, g()({}, h, { size: 'small' })),
            S = d ? f : y,
            _ = c.a.createElement(I.a, { style: [_c.transitionOpacity, i ? _c.opacityNone : void 0] }, d ? b : v)
          return c.a.createElement(
            M,
            { percentageComplete: a, rightControl: _, subtitle: bc, title: fc },
            c.a.createElement(di, { introMaxLength: 140, ref: r, user: o, viewer: s }),
            c.a.createElement(Wa, { ref: l, style: _c.bigButtons }, S),
          )
        },
        _c = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        kc = ['$refType'],
        Fc = x.a.ea8a3d2d,
        Ec = x.a.f77bb178,
        Cc = x.a.cd75a5d4,
        xc = x.a.g9677c6d,
        Kc = x.a.abd845fd,
        Pc = void 0 !== ll ? ll : (ll = n('IeZm')),
        Lc = void 0 !== il ? il : (il = n('7ESn')),
        Oc = void 0 !== ol ? ol : (ol = n('By/j')),
        Dc = function (e) {
          var a,
            n = e.percentageComplete,
            t = e.priceOfferings,
            r = e.viewer,
            l = le()(Pc, t),
            i = (l.$refType, b()(l, kc)),
            o = le()(Lc, r),
            s = yl(o),
            u = vl(o),
            d = null !== (a = wl(o)) && void 0 !== a ? a : i[0],
            p = wt()(Oc),
            m = ae()(p, 2),
            g = m[0],
            f = m[1]
          return c.a.createElement(
            M,
            { percentageComplete: n, title: Fc, withInfoButton: !0 },
            c.a.createElement(
              Wa,
              { style: Tc.interstitial },
              c.a.createElement(ea, { headline: Ec({ price: i[d] }), illustration: Ze.Pricing, subtext: Cc }),
            ),
            c.a.createElement(
              Wa,
              { style: Tc.buttons },
              c.a.createElement(te, {
                disabled: f,
                label: xc,
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
              c.a.createElement(te, {
                disabled: f,
                label: Kc,
                path: w.pricing,
                size: 'large',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        Tc = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        Bc = (n('+KXO'), n('7xRU'), n('hznd')),
        Ic = ['$refType'],
        Rc = x.a.ea8a3d2d,
        Vc = x.a.ic9124bf,
        zc = x.a.g5923869,
        Ac = {
          offer1: [x.a.f025ab39, x.a.c5602dfd],
          offer2: [x.a.ib075804, x.a.j8a72f06],
          offer3: [x.a.c246656e, x.a.a92ab16c],
        },
        Mc = x.a.c1df579e,
        Uc = void 0 !== sl ? sl : (sl = n('5jO1')),
        jc = void 0 !== cl ? cl : (cl = n('mKqc')),
        Nc = function (e) {
          var a = e.percentageComplete,
            n = e.priceOfferings,
            t = e.viewer,
            r = le()(Uc, n),
            l = (r.$refType, b()(r, Ic)),
            i = le()(jc, t),
            o = wl(i),
            s = kr(i, 'selected_price'),
            u = c.a.createElement(
              x.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              c.a.createElement(Q.b, { link: P }, x.a.c336b06a),
            ),
            d = Object.keys(l).map(function (e) {
              return { label: zc({ price: l[e] }), value: e, helpText: Ac[e].join(' ') }
            }),
            p = c.a.createElement(te, {
              disabled: !o,
              label: Mc,
              path: w.pricingConfirm,
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            M,
            { percentageComplete: a, rightControl: p, title: Rc, withInfoButton: !0 },
            c.a.createElement(Wa, { style: Hc.interstitial }, c.a.createElement(ea, { headline: Vc, subtext: u })),
            c.a.createElement(
              Wa,
              { style: Hc.prices },
              c.a.createElement(Bc.a, {
                accessibilityLabel: Vc,
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
        Hc = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        Wc = x.a.f1cb36b8,
        Gc = x.a.e20f6661,
        qc = x.a.b772cd65,
        Qc = function (e) {
          var a = e.percentageComplete,
            n = c.a.useRef(),
            t = c.a.useCallback(function () {
              var e
              null === (e = n.current) || void 0 === e || e.goBack()
            }, []),
            r = c.a.createElement(
              x.a.I18NFormatMessage,
              { $i18n: 'cf780193' },
              c.a.createElement(Q.b, { weight: 'bold' }, x.a.d7d4da89),
            )
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, percentageComplete: a, screenRef: n, title: Wc, withInfoButton: !0 },
            c.a.createElement(
              Wa,
              { style: Xc.interstitial },
              c.a.createElement(ea, { headline: Gc, illustration: Ze.Thumbsup, subtext: r }),
            ),
            c.a.createElement(
              Wa,
              { style: Xc.buttons },
              c.a.createElement(O.a, { onPress: t, size: 'large', type: 'primaryFilled' }, qc),
            ),
          )
        },
        Xc = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Zc = x.a.f1cb36b8,
        Jc = x.a.g88e146c,
        Yc = x.a.dfe973a6,
        $c = x.a.b772cd65,
        eu = function (e) {
          var a = e.percentageComplete,
            n = c.a.useRef(),
            t = c.a.useCallback(function () {
              var e
              null === (e = n.current) || void 0 === e || e.goBack()
            }, [])
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, percentageComplete: a, screenRef: n, title: Zc, withInfoButton: !0 },
            c.a.createElement(
              Wa,
              { style: au.interstitial },
              c.a.createElement(ea, { headline: Jc, illustration: Ze.Bench, subtext: Yc }),
            ),
            c.a.createElement(
              Wa,
              { style: au.buttons },
              c.a.createElement(O.a, { onPress: t, size: 'large', type: 'primaryFilled' }, $c),
            ),
          )
        },
        au = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        nu = n('8jkQ'),
        tu = void 0 !== ul ? ul : (ul = n('M+ld')),
        ru = function () {
          var e = wt()(tu),
            a = ae()(e, 2),
            n = a[0],
            t = a[1]
          return [
            c.a.useCallback(
              function () {
                return new Promise(function (e, a) {
                  var t = nu.b.get().href
                  n({
                    variables: { refresh_url: t, return_url: t },
                    onCompleted: function (n, t) {
                      var r = n.stripe_account_create_onboarding_url
                      r ? e(r) : a(new Error('Missing onboarding URL'))
                    },
                    onError: a,
                  })
                })
              },
              [n],
            ),
            t,
          ]
        },
        lu = n('Qwev'),
        iu = x.a.f1cb36b8,
        ou = x.a.ja884230,
        su = x.a.af1b808d,
        cu = x.a.fe339750,
        uu = x.a.j912510a,
        du = function (e) {
          var a = e.percentageComplete,
            n = c.a.useState(!1),
            t = ae()(n, 2),
            r = t[0],
            l = t[1],
            i = c.a.useState(!1),
            o = ae()(i, 2),
            s = o[0],
            u = o[1],
            d = ru(),
            p = ae()(d, 2),
            m = p[0],
            g = p[1],
            f = c.a.useCallback(
              function () {
                m()
                  .then(function (e) {
                    nu.b.navigateTo(e)
                  })
                  .catch(function () {
                    l(!1), u(!1)
                  })
              },
              [m],
            ),
            b = c.a.useCallback(
              function () {
                l(!0), f()
              },
              [f],
            ),
            h = c.a.useCallback(
              function () {
                u(!0), f()
              },
              [f],
            ),
            y = r || s || g
          return c.a.createElement(
            M,
            { percentageComplete: a, title: iu, withInfoButton: !0 },
            c.a.createElement(
              Wa,
              { style: pu.interstitial },
              c.a.createElement(ea, { headline: ou, illustration: Ze.CoinStairs, subtext: su }),
            ),
            c.a.createElement(
              Wa,
              { style: pu.buttons },
              c.a.createElement(
                O.a,
                { disabled: y, onPress: b, size: 'large', type: 'primaryFilled' },
                r ? c.a.createElement(lu.a, null) : cu,
              ),
              c.a.createElement(
                O.a,
                { disabled: y, onPress: h, size: 'large', type: 'primaryOutlined' },
                s ? c.a.createElement(lu.a, null) : uu,
              ),
            ),
          )
        },
        pu = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        mu = void 0 !== dl ? dl : (dl = n('UNVS')),
        gu = void 0 !== pl ? pl : (pl = n('6byF')),
        fu = void 0 !== ml ? ml : (ml = n('dNhZ')),
        bu = function (e) {
          return e / 8
        },
        hu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(N.a).featureSwitches,
            l = le()(mu, a),
            i = le()(gu, n),
            o = le()(fu, t),
            s = Nl(i),
            u = Hl(i),
            d = Wl(i),
            p = Ss({ rootPath: h, user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (_r(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_onboarding_enabled'))
          )
            throw new Error('Super Follows onboarding is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(j.a, { to: y })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(lr, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  B.d,
                  null,
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksIntro },
                    c.a.createElement(Sc, { percentageComplete: bu(1), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksDescription },
                    c.a.createElement(mc, { percentageComplete: bu(2), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksBadges },
                    c.a.createElement(Ys, { percentageComplete: bu(3), user: i }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksConfirm },
                    c.a.createElement(lc, { percentageComplete: bu(4), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.pricing },
                    c.a.createElement(Nc, { percentageComplete: bu(5), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.pricingConfirm },
                    c.a.createElement(Dc, { percentageComplete: bu(6), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.stripeSetup },
                    c.a.createElement(du, { percentageComplete: bu(7) }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.stripePending },
                    c.a.createElement(eu, { percentageComplete: bu(8) }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.stripeCompleted },
                    c.a.createElement(Qc, { percentageComplete: bu(8) }),
                  ),
                  c.a.createElement(
                    B.b,
                    { path: w.root },
                    c.a.createElement(Rs, { percentageComplete: bu(0), user: i, viewer: o }),
                  ),
                ),
              )
        },
        yu = x.a.ebfb897c,
        vu = x.a.dc4feb19,
        wu = x.a.c183d271,
        Su = x.a.ic130fd5,
        _u = x.a.dd913e24,
        ku = x.a.h580543e,
        Fu = function () {
          return c.a.createElement(
            M,
            { title: yu },
            c.a.createElement(Wa, { style: Eu.interstitial }, c.a.createElement(ea, { headline: vu, subtext: wu })),
            c.a.createElement(
              Wa,
              { style: Eu.exampleDescriptions },
              c.a.createElement(vr.a, null),
              c.a.createElement(_i.a, { value: Su }),
              c.a.createElement(vr.a, null),
              c.a.createElement(_i.a, { value: _u }),
              c.a.createElement(vr.a, null),
              c.a.createElement(_i.a, { value: ku }),
            ),
          )
        },
        Eu = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        Cu = n('JWc1'),
        xu = x.a.ebfb897c,
        Ku = x.a.dc4feb19,
        Pu = x.a.a0bb2076,
        Lu = x.a.ace46d40,
        Ou = x.a.h2c4511f,
        Du = x.a.hbe4f99e,
        Tu = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        Bu = function () {
          return c.a.createElement(
            M,
            { title: xu },
            c.a.createElement(Wa, { style: Tu.interstitial }, c.a.createElement(ea, { headline: Ku, subtext: Pu })),
            c.a.createElement(
              Wa,
              { style: Tu.exampleIntros },
              c.a.createElement(Cu.a, { value: Lu }),
              c.a.createElement(Cu.a, { value: Ou }),
              c.a.createElement(Cu.a, { value: Du }),
            ),
          )
        },
        Iu = n('VTDR'),
        Ru = n('a2Fh'),
        Vu = x.a.hf6f2913,
        zu = x.a.fb278c81,
        Au = x.a.e6b60e94,
        Mu = V.a.create(function (e) {
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
        Uu = function () {
          return c.a.createElement(
            M,
            { title: Vu },
            c.a.createElement(Wa, { style: Mu.interstitial }, c.a.createElement(ea, { headline: zu, subtext: Au })),
            c.a.createElement(
              sr,
              { style: Mu.preview },
              c.a.createElement(
                Iu.a,
                null,
                c.a.createElement(Ru.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Ru.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Ru.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: Mu.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        ju = void 0 !== gl ? gl : (gl = n('nEN5')),
        Nu = void 0 !== fl ? fl : (fl = n('toKZ')),
        Hu = void 0 !== bl ? bl : (bl = n('ucRr')),
        Wu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = le()(ju, a),
            l = le()(Nu, n),
            i = le()(Hu, t),
            o = (function (e) {
              var a = e.isActiveCreator,
                n = e.stripeAccountStatus,
                t = e.superFollowsApplicationStatus
              if (a) return S.root
              switch (t) {
                case 'Submitted':
                  return v.submitted
                case 'Waitlisted':
                  return v.waitlisted
                case 'Rejected':
                  return v.rejected
                case 'Approved':
                  switch (n) {
                    case 'Pending':
                      return w.stripePending
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
            B.d,
            null,
            c.a.createElement(B.b, { path: v.root }, c.a.createElement($t, { user: l, viewer: i })),
            c.a.createElement(B.b, { path: w.root }, c.a.createElement(hu, { priceOfferings: r, user: l, viewer: i })),
            c.a.createElement(B.b, { path: S.root }, c.a.createElement(Es, { priceOfferings: r, user: l, viewer: i })),
            c.a.createElement(B.b, { exact: !0, path: _ }, c.a.createElement(Bu, null)),
            c.a.createElement(B.b, { exact: !0, path: k }, c.a.createElement(Fu, null)),
            c.a.createElement(B.b, { exact: !0, path: F }, c.a.createElement(Uu, null)),
            c.a.createElement(B.b, { exact: !0, path: y }, c.a.createElement(j.a, { to: o })),
          )
        },
        Gu = n('IAZG'),
        qu = n('Irs7'),
        Qu = void 0 !== hl ? hl : (hl = n('G8I5')),
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
        Zu = { context: 'SuperFollowsSettings' }
      a.default = c.a.memo(
        Object(qu.a)(
          function () {
            var e = c.a.useMemo(function () {
              return {
                type: 'CustomRetry',
                content: function (e) {
                  return c.a.createElement(M, null, c.a.createElement(p.a, { onRequestRetry: e }))
                },
              }
            }, [])
            return c.a.createElement(
              u.a,
              { errorConfig: Zu, fallback: e },
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
        return N
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
        N = (function (e) {
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
                  return [H.root, !e && H.disabled]
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
                      { style: H.container },
                      a && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        _.b,
                        { size: 'headline1', style: H.wrapper },
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
      y()(N, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (N.propTypes = {})
      var H = L.a.create(function (e) {
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
