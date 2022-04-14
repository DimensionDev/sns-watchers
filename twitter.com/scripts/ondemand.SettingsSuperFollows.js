;(window.webpackJsonp = window.webpackJsonp || []).push([
  [239],
  {
    '+OUG': function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    '02qo': function (e, a, n) {
      'use strict'
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
      e.exports = t
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
    '3qCL': function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    '40vp': function (e, a, n) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'useSuperFollowsDeactivate_viewer',
        selections: [
          {
            kind: 'ClientExtension',
            selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'be30a750d32c634903dac132ededc4bf',
      }
      e.exports = t
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
      e.exports = t
    },
    '6byF': function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    '6rkJ': function (e, a, n) {
      'use strict'
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
      e.exports = t
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
      e.exports = t
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
        _ = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: h.n, loggedInUser: y.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: h.f,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        S = n('v//M'),
        k = n('3XMw'),
        F = n.n(k),
        E = n('M2mT'),
        C = 'settingsDetailSave',
        x = n('mw9i'),
        O = n('0yYu'),
        K = n('/yvb'),
        P = n('rHpw'),
        L = F.a.i2209530,
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
                return b.a.createElement(S.a, { fetchStatus: a, onRequestRetry: e._handleFetch, render: e._render })
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
                        b.a.createElement(O.a, null),
                        b.a.createElement(
                          x.a,
                          { style: T.buttonContainer },
                          b.a.createElement(K.a, { disabled: r, onPress: t, style: T.button, testID: C, type: i }, l),
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
      g()(D, 'defaultProps', { submitLabel: L, submitType: 'brandFilled', withMarginBottom: !0 })
      var T = P.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(P.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      a.a = _(D)
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
    AyUU: function (e, a, n) {
      'use strict'
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
      ;(c.hash = '38de90823c3fb6770d441acfd7d6c0d5'), (e.exports = c)
    },
    'By/j': function (e, a, n) {
      'use strict'
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
      ;(l.hash = 'c1a6db8f58f9e0b096f1a134ad2ef927'), (e.exports = l)
    },
    DWSt: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    E9LA: function (e, a, n) {
      'use strict'
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
      ;(l.hash = 'b142db4c70fbbc54fea0835c0bae56e8'), (e.exports = l)
    },
    EFaa: function (e, a, n) {
      'use strict'
      var t,
        r = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'useSuperFollowsDeactivateMutation',
            selections: (t = [
              {
                alias: null,
                args: [{ kind: 'Literal', name: 's', value: 23 }],
                kind: 'ScalarField',
                name: 'deactivate_super_follows_creator',
                storageKey: 'deactivate_super_follows_creator(s:23)',
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'useSuperFollowsDeactivateMutation',
            selections: t,
          },
          params: {
            id: 'K5_KjMpjdtjQXzKGLqyFXw',
            metadata: {},
            name: 'useSuperFollowsDeactivateMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(r.hash = 'c33de27607da73145e2d32d5855eaa27'), (e.exports = r)
    },
    EM6u: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    'G/nI': function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    G8I5: function (e, a, n) {
      'use strict'
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
                  { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSwitch_viewer' },
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
      ;(c.hash = '59ab5118b2247c2e05bcaf23a5f58cf4'), (e.exports = c)
    },
    H1we: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    HvW7: function (e, a, n) {
      'use strict'
      var t = n('IGGJ')(n('yiKp')),
        r = n('XiYe'),
        l = n('PJTX'),
        i = n('ERkP'),
        o = n('e1/f').commitMutation,
        s = i.useState,
        c = i.useEffect,
        u = i.useRef,
        d = i.useCallback
      e.exports = function (e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          n = l(),
          i = r(),
          p = u(n),
          m = u(e),
          g = u(new Set()),
          f = s(!1),
          b = f[0],
          h = f[1],
          y = d(
            function (a) {
              p.current === n && m.current === e && (g.current.delete(a), i.current && h(g.current.size > 0))
            },
            [n, i, e],
          )
        c(
          function () {
            ;(p.current === n && m.current === e) ||
              ((g.current = new Set()), i.current && h(!1), (p.current = n), (m.current = e))
          },
          [n, i, e],
        )
        var v = d(
          function (r) {
            var l = a(
              n,
              (0, t.default)(
                (0, t.default)({}, r),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, a) {
                    var n
                    y(l), null === (n = r.onCompleted) || void 0 === n || n.call(r, e, a)
                  },
                  onError: function (e) {
                    var a
                    y(l), null === (a = r.onError) || void 0 === a || a.call(r, e)
                  },
                  onUnsubscribe: function () {
                    var e
                    y(l), null === (e = r.onUnsubscribe) || void 0 === e || e.call(r)
                  },
                  onNext: function () {
                    var e
                    null === (e = r.onNext) || void 0 === e || e.call(r)
                  },
                },
              ),
            )
            return g.current.add(l), i.current && h(!0), l
          },
          [y, a, n, i, e],
        )
        return [v, b]
      }
    },
    IeZm: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    JB6R: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    'K7/K': function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    'M+ld': function (e, a, n) {
      'use strict'
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
      ;(l.hash = '3c4630f45d60062b9f4ac93d65eeec15'), (e.exports = l)
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
        _ = n('VAZu'),
        S = n('wiP2'),
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
        O = n('MWbm'),
        K = n('yw4N'),
        P = n('TnY3'),
        L = n('cHvH'),
        D = n('3xLC'),
        T = [
          'appBarStyle',
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
                      O.a,
                      { style: x.fill },
                      v.a.createElement(
                        K.a,
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
                  return v.a.createElement(L.a, null, function (a) {
                    var n = a.windowWidth
                    return w.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    a = (e.appBarStyle, e.children),
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
                      : v.a.createElement(S.a.Configure, n),
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
                    i = n.appBarStyle,
                    o = n.backLocation,
                    s = n.documentTitle,
                    c = n.headerless,
                    u = n.history,
                    d = n.leftControl,
                    p = n.middleControl,
                    m = n.onBackClick,
                    g = n.rightControl,
                    f = n.screenType,
                    b = n.searchBoxOptions,
                    y = n.secondaryBar,
                    w = n.showSubtitleOnRoot,
                    k = n.showSubtitleOnWideDetail,
                    F = n.subtitle,
                    E = n.title,
                    C = n.titleIconCell,
                    K = n.titleIconCellSize,
                    P = n.withDetailOpen,
                    L = n.withSearchBox,
                    D = n.withTweetButton,
                    T = 'root' === f,
                    B = 'secondaryRoot' === f,
                    I = 'primaryDetail' === f,
                    R = (I && k) || (T && w),
                    V = T || (I && a),
                    z = T ? h.c : I ? h.a : void 0,
                    A = v.a.createElement(
                      O.a,
                      { style: x.appBarContainer },
                      v.a.createElement(_.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: V,
                        history: u,
                        leftControl: d,
                        middleControl: p,
                        onBackClick: m,
                        rightControl: g,
                        secondaryBar: y,
                        style: i,
                        subtitle: R ? F : void 0,
                        title: E,
                        titleDomId: z,
                        titleIconCell: C,
                        titleIconCellSize: K,
                      }),
                    ),
                    M =
                      T || (B && P)
                        ? null
                        : v.a.createElement(S.a.Configure, {
                            SideNavButton: t,
                            TabBar: r,
                            TeamsSwitcher: l,
                            backLocation: o,
                            documentTitle: s,
                            headerless: c,
                            middleControl: p,
                            onBackClick: m,
                            rightControl: g,
                            searchBoxOptions: b,
                            subtitle: F,
                            title: E,
                            withSearchBox: L,
                            withTweetButton: D,
                          })
                  return v.a.createElement(v.a.Fragment, null, M, A)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()(B, 'contextType', D.a),
        b()(B, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      a.a = Object(P.a)(B)
    },
    M3aw: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    MXCg: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    MvEh: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    N6s9: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    NmgE: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    QmjQ: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    RL7R: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    RLjm: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    RTdz: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    Rthh: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    TXsE: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    U5ka: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    UFp0: function (e, a, n) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksConfirmCore_user',
        selections: [
          {
            kind: 'RequiredField',
            field: {
              alias: null,
              args: null,
              concreteType: 'ApiUser',
              kind: 'LinkedField',
              name: 'legacy',
              plural: !1,
              selections: [
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.protected',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.verified',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '93286f1ac3b20e27564fbc971fc1eede',
      }
      e.exports = t
    },
    UNVS: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    VG5i: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    WDhg: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    XiYe: function (e, a, n) {
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
    ZaCQ: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    aREQ: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    bIlA: function (e, a, n) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsDeactivateButton_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'useSuperFollowsDeactivate_viewer' }],
        type: 'Viewer',
        abstractKey: null,
        hash: '4afbdff48be896080e44496b4cd6868e',
      }
      e.exports = t
    },
    d8Sa: function (e, a, n) {
      'use strict'
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
            { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSummaryScreen_viewer' },
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
      ;(r.hash = 'f925364acc6a314720af8c5d522a0411'), (e.exports = r)
    },
    dGIC: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    dNhZ: function (e, a, n) {
      'use strict'
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
      ;(r.hash = '9518ed5436554b04d556e1d7292d246a'), (e.exports = r)
    },
    h3lO: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    hGtx: function (e, a, n) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksIntroCore_user',
        selections: [
          {
            kind: 'RequiredField',
            field: {
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
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'eee1e983d2879a2379fdd9d9aa5bc035',
      }
      e.exports = t
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
      e.exports = t
    },
    kz1e: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    'l/EB': function (e, a, n) {
      'use strict'
      var t = {
        kind: 'InlineDataFragment',
        name: 'superFollowsShared_viewer',
        hash: '7d93eb3778f44bb69f422e49ec09cd27',
      }
      e.exports = t
    },
    lWeI: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    lZLw: function (e, a, n) {
      'use strict'
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
      ;(r.hash = '8f7f25ee72f87f2e8a9830a5880189c5'), (e.exports = r)
    },
    mDly: function (e, a, n) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksBadgesCore_user',
        selections: [
          {
            kind: 'RequiredField',
            field: {
              alias: null,
              args: null,
              concreteType: 'ApiUser',
              kind: 'LinkedField',
              name: 'legacy',
              plural: !1,
              selections: [
                { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.protected',
                },
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.verified',
                },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'f3857156a260b346e85b8007d2e238a1',
      }
      e.exports = t
    },
    mEFY: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    mKqc: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    nAiE: function (e, a, n) {
      'use strict'
      n.r(a),
        n.d(a, 'superFollowsSettingsQuery', function () {
          return wd
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return $
        }),
        n.d(t, 'Arrow2x', function () {
          return ee
        }),
        n.d(t, 'Arrow3x', function () {
          return ae
        }),
        n.d(t, 'Bench', function () {
          return ne
        }),
        n.d(t, 'Bench2x', function () {
          return te
        }),
        n.d(t, 'Bench3x', function () {
          return re
        }),
        n.d(t, 'Cat', function () {
          return le
        }),
        n.d(t, 'Cat2x', function () {
          return ie
        }),
        n.d(t, 'Cat3x', function () {
          return oe
        }),
        n.d(t, 'Clipboard', function () {
          return se
        }),
        n.d(t, 'Clipboard2x', function () {
          return ce
        }),
        n.d(t, 'Clipboard3x', function () {
          return ue
        }),
        n.d(t, 'CoinStairs', function () {
          return de
        }),
        n.d(t, 'CoinStairs2x', function () {
          return pe
        }),
        n.d(t, 'CoinStairs3x', function () {
          return me
        }),
        n.d(t, 'HandCoins', function () {
          return ge
        }),
        n.d(t, 'HandCoins2x', function () {
          return fe
        }),
        n.d(t, 'HandCoins3x', function () {
          return be
        }),
        n.d(t, 'OneFinger', function () {
          return he
        }),
        n.d(t, 'OneFinger2x', function () {
          return ye
        }),
        n.d(t, 'OneFinger3x', function () {
          return ve
        }),
        n.d(t, 'PaperAirplane', function () {
          return we
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return _e
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return Se
        }),
        n.d(t, 'Pricing', function () {
          return ke
        }),
        n.d(t, 'Pricing2x', function () {
          return Fe
        }),
        n.d(t, 'Pricing3x', function () {
          return Ee
        }),
        n.d(t, 'Puzzle', function () {
          return Ce
        }),
        n.d(t, 'Puzzle2x', function () {
          return xe
        }),
        n.d(t, 'Puzzle3x', function () {
          return Oe
        }),
        n.d(t, 'Thumbsup', function () {
          return Ke
        }),
        n.d(t, 'Thumbsup2x', function () {
          return Pe
        }),
        n.d(t, 'Thumbsup3x', function () {
          return Le
        }),
        n.d(t, 'TrafficLight', function () {
          return De
        }),
        n.d(t, 'TrafficLight2x', function () {
          return Te
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Be
        }),
        n.d(t, 'Uturn', function () {
          return Ie
        }),
        n.d(t, 'Uturn2x', function () {
          return Re
        }),
        n.d(t, 'Uturn3x', function () {
          return Ve
        })
      var r = {}
      n.r(r),
        n.d(r, 'Chat', function () {
          return Zi
        }),
        n.d(r, 'Chat2x', function () {
          return $i
        }),
        n.d(r, 'Chat3x', function () {
          return eo
        }),
        n.d(r, 'Cog', function () {
          return ao
        }),
        n.d(r, 'Cog2x', function () {
          return no
        }),
        n.d(r, 'Cog3x', function () {
          return to
        }),
        n.d(r, 'Coin', function () {
          return ro
        }),
        n.d(r, 'Coin2x', function () {
          return lo
        }),
        n.d(r, 'Coin3x', function () {
          return io
        }),
        n.d(r, 'CoinPurse', function () {
          return oo
        }),
        n.d(r, 'CoinPurse2x', function () {
          return so
        }),
        n.d(r, 'CoinPurse3x', function () {
          return co
        }),
        n.d(r, 'Cone', function () {
          return uo
        }),
        n.d(r, 'Cone2x', function () {
          return po
        }),
        n.d(r, 'Cone3x', function () {
          return mo
        }),
        n.d(r, 'Cross', function () {
          return go
        }),
        n.d(r, 'Cross2x', function () {
          return fo
        }),
        n.d(r, 'Cross3x', function () {
          return bo
        }),
        n.d(r, 'FirstAid', function () {
          return ho
        }),
        n.d(r, 'FirstAid2x', function () {
          return yo
        }),
        n.d(r, 'FirstAid3x', function () {
          return vo
        }),
        n.d(r, 'Heart', function () {
          return wo
        }),
        n.d(r, 'Heart2x', function () {
          return _o
        }),
        n.d(r, 'Heart3x', function () {
          return So
        }),
        n.d(r, 'LifeSaver', function () {
          return ko
        }),
        n.d(r, 'LifeSaver2x', function () {
          return Fo
        }),
        n.d(r, 'LifeSaver3x', function () {
          return Eo
        }),
        n.d(r, 'Lightbulb', function () {
          return Co
        }),
        n.d(r, 'Lightbulb2x', function () {
          return xo
        }),
        n.d(r, 'Lightbulb3x', function () {
          return Oo
        }),
        n.d(r, 'NoEntry', function () {
          return Ko
        }),
        n.d(r, 'NoEntry2x', function () {
          return Po
        }),
        n.d(r, 'NoEntry3x', function () {
          return Lo
        }),
        n.d(r, 'Pencil', function () {
          return Do
        }),
        n.d(r, 'Pencil2x', function () {
          return To
        }),
        n.d(r, 'Pencil3x', function () {
          return Bo
        }),
        n.d(r, 'PiggyBank', function () {
          return Io
        }),
        n.d(r, 'PiggyBank2x', function () {
          return Ro
        }),
        n.d(r, 'PiggyBank3x', function () {
          return Vo
        }),
        n.d(r, 'Plant', function () {
          return zo
        }),
        n.d(r, 'Plant2x', function () {
          return Ao
        }),
        n.d(r, 'Plant3x', function () {
          return Mo
        }),
        n.d(r, 'Puzzle', function () {
          return jo
        }),
        n.d(r, 'Puzzle2x', function () {
          return Uo
        }),
        n.d(r, 'Puzzle3x', function () {
          return Ho
        }),
        n.d(r, 'Ribbon', function () {
          return No
        }),
        n.d(r, 'Ribbon2x', function () {
          return Wo
        }),
        n.d(r, 'Ribbon3x', function () {
          return qo
        }),
        n.d(r, 'Spheres', function () {
          return Go
        }),
        n.d(r, 'Spheres2x', function () {
          return Xo
        }),
        n.d(r, 'Spheres3x', function () {
          return Qo
        }),
        n.d(r, 'Star', function () {
          return Yo
        }),
        n.d(r, 'Star2x', function () {
          return Jo
        }),
        n.d(r, 'Star3x', function () {
          return Zo
        }),
        n.d(r, 'TrashCan', function () {
          return $o
        }),
        n.d(r, 'TrashCan2x', function () {
          return es
        }),
        n.d(r, 'TrashCan3x', function () {
          return as
        }),
        n.d(r, 'Wallet', function () {
          return ns
        }),
        n.d(r, 'Wallet2x', function () {
          return ts
        }),
        n.d(r, 'Wallet3x', function () {
          return rs
        })
      var l,
        i,
        o,
        s = n('ERkP'),
        c = n.n(s),
        u = (n('YWiL'), n('L/9f')),
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
        _ = Object.freeze({
          root: ''.concat(y, '/management'),
          perksIntro: ''.concat(y, '/management/perks_intro'),
          perksDescription: ''.concat(y, '/management/perks_description'),
          perksConfirm: ''.concat(y, '/management/perks_confirm'),
        }),
        S = ''.concat(y, '/perks_intro_examples'),
        k = ''.concat(y, '/perks_description_examples'),
        F = ''.concat(y, '/perks_preview'),
        E = n('jHSc'),
        C = n('3XMw'),
        x = n.n(C),
        O = n('lUZE'),
        K = 'https://help.twitter.com/using-twitter/super-follows-creator',
        P = ''.concat(K, '#pricechange'),
        L = n('/yvb'),
        D = n('6s7X'),
        T = function () {
          return c.a.createElement(L.a, { icon: c.a.createElement(D.a, null), link: K, type: 'primaryText' })
        },
        B = n('zCf4'),
        I = n('MWbm'),
        R = n('JYMr'),
        V = n('rHpw'),
        z = [
          'children',
          'leftControlShouldClose',
          'percentageComplete',
          'rightControl',
          'screenRef',
          'withCenteredLogo',
          'withInfoButton',
        ],
        A = x.a.a6777c1b,
        M = function (e) {
          var a = e.children,
            n = e.leftControlShouldClose,
            t = e.percentageComplete,
            r = e.rightControl,
            l = e.screenRef,
            i = e.withCenteredLogo,
            o = e.withInfoButton,
            s = b()(e, z),
            u = Object(B.f)(),
            d = n ? 'close' : 'back',
            p = h,
            m = i ? c.a.createElement(O.a, { style: j.iconTwitter }) : void 0,
            f = o ? c.a.createElement(I.a, { style: j.rightControl }, c.a.createElement(T, null), r) : r,
            y = t ? c.a.createElement(R.a, { progress: t }) : void 0,
            v = c.a.createElement(I.a, { style: j.childrenWrapper }, a),
            w = function () {
              n ? u.goBackThroughModals({ fallbackPath: p }) : u.goBack({ backLocation: p })
            }
          return (
            l && (l.current = { goBack: w }),
            c.a.createElement(
              E.b,
              g()({}, s, {
                backButtonType: d,
                backLocation: p,
                centeredLogo: m,
                children: v,
                documentTitle: A,
                onBackClick: w,
                rightControl: f,
                secondaryBar: y,
              }),
            )
          )
        },
        j = V.a.create(function (e) {
          return {
            iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
            rightControl: { alignItems: 'center', flexDirection: 'row', gap: e.spaces.space4 },
            childrenWrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: 'auto' },
          }
        }),
        U = n('5FtR'),
        H = n('v6aA'),
        N = n('Irs7'),
        W = x.a.g92a2343,
        q = x.a.a91bb144,
        G = Object(N.a)(
          function () {
            var e = Object(B.f)(),
              a = c.a.createElement(
                L.a,
                {
                  onPress: function () {
                    e.push(v.submit)
                  },
                  type: 'primaryFilled',
                },
                q,
              )
            return c.a.createElement(M, { rightControl: a, title: W })
          },
          { component: 'application_complete_profile' },
        ),
        X = n('cHvH'),
        Q = function (e, a) {
          var n = e.children,
            t = e.style,
            r = Object(X.b)().windowWidth > V.a.theme.breakpoints.medium ? J.marginWide : J.marginNarrow
          return c.a.createElement(I.a, { ref: a, style: [t, r] }, n)
        },
        Y = c.a.forwardRef(Q),
        J = V.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space72 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        Z = n('t62R'),
        $ = (n('KOtZ'), n('7x/C'), n('z84I'), n.p + 'Arrow.e8910965.png'),
        ee = n.p + 'Arrow@2x.8af675c5.png',
        ae = n.p + 'Arrow@3x.949d4365.png',
        ne = n.p + 'Bench.ed26a435.png',
        te = n.p + 'Bench@2x.ef9fb7d5.png',
        re = n.p + 'Bench@3x.a306fd55.png',
        le = n.p + 'Cat.089435a5.png',
        ie = n.p + 'Cat@2x.bca70155.png',
        oe = n.p + 'Cat@3x.2b225ef5.png',
        se = n.p + 'Clipboard.540710d5.png',
        ce = n.p + 'Clipboard@2x.72ca72e5.png',
        ue = n.p + 'Clipboard@3x.1b952e95.png',
        de = n.p + 'CoinStairs.8488b245.png',
        pe = n.p + 'CoinStairs@2x.34fd5855.png',
        me = n.p + 'CoinStairs@3x.1b706305.png',
        ge = n.p + 'HandCoins.fbd23965.png',
        fe = n.p + 'HandCoins@2x.c1b62b75.png',
        be = n.p + 'HandCoins@3x.7dd5f3d5.png',
        he = n.p + 'OneFinger.6eb5d9c5.png',
        ye = n.p + 'OneFinger@2x.a13e1ba5.png',
        ve = n.p + 'OneFinger@3x.7f22c175.png',
        we = n.p + 'PaperAirplane.1ef48a05.png',
        _e = n.p + 'PaperAirplane@2x.2923eb15.png',
        Se = n.p + 'PaperAirplane@3x.47e4b145.png',
        ke = n.p + 'Pricing.ec5962d5.png',
        Fe = n.p + 'Pricing@2x.f8284265.png',
        Ee = n.p + 'Pricing@3x.b6cf0185.png',
        Ce = n.p + 'Puzzle.aa045515.png',
        xe = n.p + 'Puzzle@2x.5be7ab15.png',
        Oe = n.p + 'Puzzle@3x.1796b225.png',
        Ke = n.p + 'Thumbsup.f5be79d5.png',
        Pe = n.p + 'Thumbsup@2x.6d106945.png',
        Le = n.p + 'Thumbsup@3x.6a81e6d5.png',
        De = n.p + 'TrafficLight.11644b65.png',
        Te = n.p + 'TrafficLight@2x.5657de25.png',
        Be = n.p + 'TrafficLight@3x.a5a35335.png',
        Ie = n.p + 'Uturn.c8267f55.png',
        Re = n.p + 'Uturn@2x.db3f94d5.png',
        Ve = n.p + 'Uturn@3x.22f27905.png',
        ze = n('tn7R'),
        Ae = n('TIdA'),
        Me = n('A91F'),
        je = 400,
        Ue = [1, 2, 3],
        He = Object.freeze({
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
        Ne = Object(ze.a)(He).reduce(function (e, a) {
          var n = Math.max.apply(Math, Ue)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: je * n, height: 250 * n },
              customVariants: Ue.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: je * e, height: 250 * e }
              }),
            }),
            e
          )
        }, {}),
        We = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? je : n,
            r = Ne[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            I.a,
            { style: [qe.illustration, s] },
            c.a.createElement(Ae.a, {
              accessibilityLabel: '',
              aspectMode: Me.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        qe = V.a.create(function (e) {
          return { illustration: { alignSelf: 'center' } }
        }),
        Ge = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            r = e.subtext
          return c.a.createElement(
            c.a.Fragment,
            null,
            t && c.a.createElement(We, { type: t, width: 311 }),
            c.a.createElement(
              Z.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title2',
                style: t && Xe.headline,
                weight: 'heavy',
              },
              n,
            ),
            c.a.createElement(Z.b, { align: a, color: 'gray700', style: Xe.subtext }, r),
          )
        },
        Xe = V.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space8 } }
        }),
        Qe = x.a.i84c5de8,
        Ye = x.a.d9c1174f,
        Je = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Ze = Object(N.a)(
          function () {
            return c.a.createElement(
              M,
              { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
              c.a.createElement(
                Y,
                { style: Je.interstitial },
                c.a.createElement(Ge, { headline: Qe, illustration: He.TrafficLight, subtext: Ye }),
              ),
            )
          },
          { component: 'application_disabled' },
        ),
        $e = (n('jQ3i'), n('x4t0'), n('855f')),
        ea = n('WtWS'),
        aa = n('0ULw'),
        na = function (e) {
          var a = e.items
          return c.a.createElement(
            I.a,
            { style: ta.root },
            a.map(function (e) {
              return c.a.createElement(
                I.a,
                { key: e.label, style: ta.item },
                c.a.createElement(Z.b, { style: ta.label, weight: 'bold' }, e.label),
                e.checked
                  ? c.a.createElement(ea.a, { style: ta.iconChecked })
                  : c.a.createElement(aa.a, { style: ta.iconUnchecked }),
              )
            }),
          )
        },
        ta = V.a.create(function (e) {
          return {
            root: { gap: e.spaces.space24 },
            item: { flexDirection: 'row' },
            label: { flex: 1 },
            iconChecked: { color: e.colors.green500 },
            iconUnchecked: { color: e.colors.gray200 },
          }
        }),
        ra = function () {
          return c.a.createElement(
            Z.b,
            { align: 'center', color: 'gray700' },
            c.a.createElement(
              x.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              c.a.createElement(
                Z.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                x.a.ebc0cbbc,
              ),
            ),
          )
        },
        la = n('ddV6'),
        ia = n.n(la),
        oa = (n('JtPf'), n('Qavd'), ['disabled', 'label', 'onPress', 'path']),
        sa = function (e) {
          var a = e.disabled,
            n = e.label,
            t = e.onPress,
            r = e.path,
            l = b()(e, oa),
            i = Object(B.f)(),
            o = c.a.useState(!1),
            s = ia()(o, 2),
            u = s[0],
            d = s[1],
            p = function () {
              i.push(r)
            }
          return c.a.createElement(
            L.a,
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
        ca = n('CVPS'),
        ua = n.n(ca),
        da = x.a.feb54b4f,
        pa = x.a.bac156a6,
        ma = x.a.a3a20a10,
        ga = x.a.b26ae507,
        fa = x.a.a753a87f,
        ba = x.a.abfaa527,
        ha = $e.a.getTruncatedCount(1e4),
        ya = x.a.fdd95737({ minFollowersCount: ha }),
        va = $e.a.getTruncatedCount(25),
        wa = x.a.a0dcad86({ minTweetsCount: va }),
        _a = x.a.c27f57ac,
        Sa = void 0 !== l ? l : (l = n('RLjm')),
        ka = Object(N.a)(
          function (e) {
            var a = e.user,
              n = ua()(Sa, a),
              t = (null == n ? void 0 : n.super_following_eligibility) || [],
              r = 0 === t.length,
              l = r ? He.Arrow : He.TrafficLight,
              i = r ? da : ma,
              o = r ? pa : ga,
              s = [
                { label: ya, checked: !t.includes('followers') },
                { label: wa, checked: !t.includes('tweets') },
                { label: _a, checked: !t.includes('age') },
              ]
            return c.a.createElement(
              M,
              { withInfoButton: !0 },
              c.a.createElement(Ge, { headline: i, illustration: l, subtext: o }),
              c.a.createElement(na, { items: s }),
              r && c.a.createElement(ra, null),
              c.a.createElement(sa, { disabled: !r, label: fa, path: v.oneMoreThing }),
              c.a.createElement(sa, { label: ba, path: v.oneMoreThing }),
            )
          },
          { component: 'application_eligibility' },
        ),
        Fa = n('9RkS'),
        Ea = x.a.bbb89925,
        Ca = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            o = c.a.useState(i),
            s = ia()(o, 2),
            u = s[0],
            d = s[1],
            p = Math.round(a * r * (u / 100))
          return c.a.createElement(
            I.a,
            { style: xa.container },
            c.a.createElement(
              Z.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              c.a.createElement(
                x.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                c.a.createElement(Z.b, { weight: 'bold' }, x.a.a7dd00ea),
                c.a.createElement(
                  Z.b,
                  { style: xa.earnings, weight: 'heavy' },
                  x.a.c62c1d30({ earnings: '$'.concat($e.a.getTruncatedCount(p)) }),
                ),
                c.a.createElement(Z.b, { color: 'green500', style: xa.asteriskLeft }, x.a.e0fb982b),
              ),
            ),
            c.a.createElement(
              I.a,
              { style: xa.slider },
              c.a.createElement(Fa.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: Ea({ percent: u }),
                value: u,
              }),
            ),
            c.a.createElement(
              Z.b,
              { color: 'green500', size: 'subtext3', style: xa.footnote },
              c.a.createElement(
                x.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                c.a.createElement(Z.b, { style: xa.asteriskRight }, x.a.e263c38e),
              ),
            ),
          )
        },
        xa = V.a.create(function (e) {
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
        Oa = n('6iuV'),
        Ka = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        Pa = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return c.a.createElement(
            I.a,
            { style: La.container },
            c.a.createElement(Ka.a, { Icon: a, color: 'neutral' }),
            c.a.createElement(Z.b, { size: 'headline2', style: La.title, weight: 'bold' }, t),
            c.a.createElement(Z.b, { color: 'gray700', style: La.description }, n),
          )
        },
        La = V.a.create(function (e) {
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
        Da = n('sUoZ'),
        Ta = n('witV'),
        Ba = n('ACHU'),
        Ia = [
          { Icon: Da.a, title: x.a.d31c5997, description: x.a.hda1e780 },
          { Icon: Ta.a, title: x.a.d08d0bb2, description: x.a.cbd8b105 },
          { Icon: Ba.a, title: x.a.becb4930, description: x.a.g743ef96 },
        ],
        Ra = function () {
          return c.a.createElement(
            Oa.a,
            null,
            Ia.map(function (e) {
              return c.a.createElement(Pa, g()({}, e, { key: e.title }))
            }),
          )
        },
        Va = x.a.a6777c1b,
        za = x.a.j5dc36d7,
        Aa = x.a.c45b2f06,
        Ma = x.a.hb6b432e,
        ja = x.a.cd5cae15,
        Ua = x.a.f7239f4c,
        Ha = x.a.g8cdf707,
        Na = x.a.bff8472e,
        Wa = x.a.e533715d,
        qa = void 0 !== i ? i : (i = n('xd+q')),
        Ga = Object(N.a)(
          function (e) {
            var a = e.user,
              n = ua()(qa, a).legacy.followers_count
            return c.a.createElement(
              M,
              { leftControlShouldClose: !0, withCenteredLogo: !0 },
              c.a.createElement(
                Z.b,
                { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
                Va,
              ),
              c.a.createElement(Z.b, null, za),
              c.a.createElement(
                Z.b,
                { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
                Aa,
              ),
              c.a.createElement(Z.b, { color: 'gray700' }, Ma),
              c.a.createElement(We, { type: He.HandCoins }),
              c.a.createElement(
                Z.b,
                { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
                ja,
              ),
              c.a.createElement(Ra, null),
              c.a.createElement(
                Z.b,
                { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
                Ua,
              ),
              c.a.createElement(Ca, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
              c.a.createElement(
                Z.b,
                { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
                Ha,
              ),
              c.a.createElement(Z.b, { color: 'gray700' }, Na),
              c.a.createElement(sa, { color: 'plum500', label: Wa, path: v.eligibility }),
            )
          },
          { component: 'application_marketing' },
        ),
        Xa = x.a.d0fc4890,
        Qa = x.a.c64384b6,
        Ya = x.a.c3d89aca,
        Ja = Object(N.a)(
          function () {
            return c.a.createElement(
              M,
              { withInfoButton: !0 },
              c.a.createElement(Ge, { align: 'center', headline: Xa, illustration: He.OneFinger, subtext: Qa }),
              c.a.createElement(sa, { label: Ya, path: v.completeProfile }),
            )
          },
          { component: 'application_one_more_thing' },
        ),
        Za = x.a.aa7e35ed,
        $a = x.a.f67e69bf,
        en = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        an = Object(N.a)(
          function () {
            return c.a.createElement(
              M,
              { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
              c.a.createElement(
                Y,
                { style: en.interstitial },
                c.a.createElement(Ge, { headline: Za, illustration: He.Uturn, subtext: $a }),
              ),
            )
          },
          { component: 'application_rejected' },
        ),
        nn = n('tI3i'),
        tn = n.n(nn),
        rn = n('FGLp'),
        ln = (n('2G9S'), n('wxEq')),
        on = n.n(ln),
        sn = function (e) {
          return on()(void 0 !== o ? o : (o = n('l/EB')), e).__id
        },
        cn = function (e, a) {
          var n = sn(a),
            t = e.get(n)
          return tn()(t, 'viewer must be defined'), t
        },
        un = 'super_follows_application_draft',
        dn = function (e, a) {
          return cn(e, a).getLinkedRecord(un)
        },
        pn = n('6u/5'),
        mn = n.n(pn),
        gn = n('PJTX'),
        fn = n.n(gn)
      function bn(e, a) {
        var n = fn()()
        Object(rn.a)(function () {
          tn()(e, 'viewerRef must be defined'),
            mn()(n, function (n) {
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
                  h = sn(a),
                  y = cn(e, a)
                if (!dn(e, a)) {
                  var v = e.create(''.concat(h, ':').concat(un), 'SuperFollowsApplicationDraft')
                  v.setValue(r, 'content_category'),
                    v.setValue(i, 'content_category_other'),
                    v.setValue(s, 'content_creation_platform'),
                    v.setValue(u, 'content_creation_platform_other'),
                    v.setValue(b, 'purpose'),
                    v.setValue(p, 'ethnicity'),
                    v.setValue(g, 'gender'),
                    y.setLinkedRecord(v, un)
                }
              })(n, e, a)
            })
        })
      }
      function hn(e, a) {
        var n = fn()()
        return c.a.useCallback(
          function (t) {
            tn()(e, 'viewerRef must be defined'),
              mn()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = dn(e, a)
                  tn()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var yn,
        vn,
        wn,
        _n,
        Sn,
        kn,
        Fn,
        En,
        Cn,
        xn,
        On,
        Kn,
        Pn,
        Ln,
        Dn = n('p+r5'),
        Tn = x.a.f7997b16,
        Bn = x.a.fc00ab5b,
        In = x.a.c249167f,
        Rn = x.a.b772cd65,
        Vn = void 0 !== yn ? yn : (yn = n('xhT1')),
        zn = Object(N.a)(
          function (e) {
            var a,
              n,
              t = e.viewer,
              r = ua()(Vn, t),
              l =
                null !==
                  (a =
                    null === (n = r.super_follows_application_draft) || void 0 === n
                      ? void 0
                      : n.content_category_other) && void 0 !== a
                  ? a
                  : '',
              i = hn(r, 'content_category_other')
            return c.a.createElement(
              M,
              { title: Tn },
              c.a.createElement(Dn.a, {
                helperText: In,
                label: Bn,
                name: 'otherCategory',
                onChange: function (e) {
                  i(e.currentTarget.value)
                },
                value: l,
              }),
              c.a.createElement(L.a, null, Rn),
            )
          },
          { component: 'application_submit_categories_other' },
        ),
        An = n('fyvP'),
        Mn = n('csss'),
        jn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(B.f)()
          return c.a.createElement(Mn.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        Un = x.a.f7997b16,
        Hn = x.a.c144fa52,
        Nn = [
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
        Wn = x.a.c365dcc5,
        qn = x.a.bd44a8a8,
        Gn = void 0 !== vn ? vn : (vn = n('JB6R')),
        Xn = Object(N.a)(
          function (e) {
            var a,
              n,
              t = e.viewer,
              r = ua()(Gn, t),
              l =
                null !==
                  (a =
                    null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
                void 0 !== a
                  ? a
                  : [],
              i = hn(r, 'content_category'),
              o = Nn.map(function (e) {
                return { label: e, value: e }
              })
            return c.a.createElement(
              M,
              { title: Un },
              c.a.createElement(An.a, {
                description: Hn,
                label: Hn,
                name: 'categories',
                onChange: function (e, a) {
                  i([a])
                },
                options: o,
                value: l[0],
              }),
              c.a.createElement(jn, { helpText: qn, label: Wn, path: v.submitCategoriesOther }),
            )
          },
          { component: 'application_submit_categories' },
        ),
        Qn = x.a.d94a9a17,
        Yn = x.a.a35394b3,
        Jn = [
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
        Zn = void 0 !== wn ? wn : (wn = n('H1we')),
        $n = Object(N.a)(
          function (e) {
            var a,
              n,
              t = e.viewer,
              r = ua()(Zn, t),
              l =
                null !==
                  (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
                void 0 !== a
                  ? a
                  : [],
              i = hn(r, 'ethnicity'),
              o = Jn.map(function (e) {
                return { label: e, value: e }
              })
            return c.a.createElement(
              M,
              { title: Qn },
              c.a.createElement(An.a, {
                description: Yn,
                label: Yn,
                name: 'ethnicities',
                onChange: function (e, a) {
                  i([a])
                },
                options: o,
                value: l[0],
              }),
            )
          },
          { component: 'application_submit_ethnicities' },
        ),
        et = x.a.a8d0108d,
        at = x.a.a35394b3,
        nt = [
          x.a.de32365f,
          x.a.b6ab31bd,
          x.a.ffc23188,
          x.a.h1cc7091,
          x.a.hca27829,
          x.a.b3af7344,
          x.a.he3f1435,
          x.a.c3c16abb,
        ],
        tt = void 0 !== _n ? _n : (_n = n('VG5i')),
        rt = Object(N.a)(
          function (e) {
            var a,
              n,
              t = e.viewer,
              r = ua()(tt, t),
              l =
                null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
                void 0 !== a
                  ? a
                  : [],
              i = hn(r, 'gender'),
              o = nt.map(function (e) {
                return { label: e, value: e }
              })
            return c.a.createElement(
              M,
              { title: et },
              c.a.createElement(An.a, {
                description: at,
                label: at,
                name: 'genders',
                onChange: function (e, a) {
                  i([a])
                },
                options: o,
                value: l[0],
              }),
            )
          },
          { component: 'application_submit_genders' },
        ),
        lt = x.a.da8ea7da,
        it = x.a.d7081f91,
        ot = x.a.j349548f,
        st = x.a.b772cd65,
        ct = void 0 !== Sn ? Sn : (Sn = n('+OUG')),
        ut = Object(N.a)(
          function (e) {
            var a,
              n,
              t = e.viewer,
              r = ua()(ct, t),
              l =
                null !==
                  (a =
                    null === (n = r.super_follows_application_draft) || void 0 === n
                      ? void 0
                      : n.content_creation_platform_other) && void 0 !== a
                  ? a
                  : '',
              i = hn(r, 'content_creation_platform_other')
            return c.a.createElement(
              M,
              { title: lt },
              c.a.createElement(Dn.a, {
                helperText: ot,
                label: it,
                name: 'otherPlatform',
                onChange: function (e) {
                  i(e.currentTarget.value)
                },
                value: l,
              }),
              c.a.createElement(L.a, null, st),
            )
          },
          { component: 'application_submit_platforms_other' },
        ),
        dt = x.a.da8ea7da,
        pt = x.a.d4062c9a,
        mt = [x.a.a3021317, x.a.eb4a600d, x.a.d4d74bb3, x.a.fc738909, x.a.d8552c1a, x.a.ca07aa46],
        gt = x.a.c365dcc5,
        ft = x.a.bd44a8a8,
        bt = void 0 !== kn ? kn : (kn = n('xnrs')),
        ht = Object(N.a)(
          function (e) {
            var a,
              n,
              t = e.viewer,
              r = ua()(bt, t),
              l =
                null !==
                  (a =
                    null === (n = r.super_follows_application_draft) || void 0 === n
                      ? void 0
                      : n.content_creation_platform) && void 0 !== a
                  ? a
                  : [],
              i = hn(r, 'content_creation_platform'),
              o = mt.map(function (e) {
                return { label: e, value: e }
              })
            return c.a.createElement(
              M,
              { title: dt },
              c.a.createElement(An.a, {
                description: pt,
                label: pt,
                name: 'platforms',
                onChange: function (e, a) {
                  i([a])
                },
                options: o,
                value: l[0],
              }),
              c.a.createElement(jn, { helpText: ft, label: gt, path: v.submitPlatformsOther }),
            )
          },
          { component: 'application_submit_platforms' },
        ),
        yt = (n('tVqn'), n('uFXj'), x.a.f4f4dd6f),
        vt = x.a.f448cbcb,
        wt = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? yt : 'optional' === n ? vt : void 0
          return c.a.createElement(
            I.a,
            { style: _t.container },
            c.a.createElement(Z.b, { size: 'headline1', weight: 'heavy' }, a),
            r && c.a.createElement(Z.b, { color: t, size: 'subtext2', style: _t.subtext }, r),
          )
        },
        _t = V.a.create(function (e) {
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
        St = n('jV+4'),
        kt = n('Xrkv'),
        Ft = n('HvW7'),
        Et = n.n(Ft),
        Ct = x.a.e873f0ae,
        xt = x.a.f095a24a,
        Ot = x.a.i5f7b6b8,
        Kt = x.a.d1f6d336,
        Pt = x.a.f7997b16,
        Lt = x.a.c144fa52,
        Dt = x.a.f1bf337d,
        Tt = x.a.da8ea7da,
        Bt = x.a.d4062c9a,
        It = x.a.e963d587,
        Rt = x.a.ede0ac3e,
        Vt = x.a.ffb6cb88,
        zt = x.a.b2159e8e,
        At = x.a.feacb49d,
        Mt = x.a.je17c987,
        jt = x.a.d94a9a17,
        Ut = x.a.a8d0108d,
        Ht = x.a.gfc80842,
        Nt = void 0 !== Fn ? Fn : (Fn = n('pLb/')),
        Wt = void 0 !== En ? En : (En = n('3qCL')),
        qt = void 0 !== Cn ? Cn : (Cn = n('AyUU')),
        Gt = Object(N.a)(
          function (e) {
            var a,
              n,
              t,
              r,
              l,
              i,
              o,
              s = e.user,
              u = e.viewer,
              d = ua()(Nt, s),
              p = null == d ? void 0 : d.legacy.screen_name,
              m = ua()(Wt, u),
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
              _ = f.length && b.length && h.trim(),
              S = hn(m, 'purpose'),
              k = Et()(qt),
              F = ia()(k, 2),
              E = F[0],
              C = F[1]
            return c.a.createElement(
              M,
              { withInfoButton: !0 },
              c.a.createElement(Ge, { headline: Ct, illustration: He.Clipboard, subtext: xt }),
              c.a.createElement(wt, { title: Ot }),
              c.a.createElement(Z.b, null, Kt),
              p && c.a.createElement(St.a, { screenName: p }),
              c.a.createElement(wt, { title: Pt, type: 'required' }),
              c.a.createElement(Z.b, { color: 'gray700' }, Lt),
              c.a.createElement(jn, { description: Object(kt.a)(f, !0), label: Dt, path: v.submitCategories }),
              c.a.createElement(wt, { title: Tt, type: 'required' }),
              c.a.createElement(Z.b, { color: 'gray700' }, Bt),
              c.a.createElement(jn, { description: Object(kt.a)(b, !0), label: It, path: v.submitPlatforms }),
              c.a.createElement(wt, { title: Rt, type: 'required' }),
              c.a.createElement(Dn.a, {
                helperText: zt,
                label: Vt,
                name: 'plannedUsage',
                onChange: function (e) {
                  S(e.currentTarget.value)
                },
                value: h,
              }),
              c.a.createElement(wt, { title: At, type: 'optional' }),
              c.a.createElement(Z.b, { color: 'gray700' }, Mt),
              c.a.createElement(jn, { description: Object(kt.a)(y, !0), label: jt, path: v.submitEthnicities }),
              c.a.createElement(jn, { description: Object(kt.a)(w, !0), label: Ut, path: v.submitGenders }),
              c.a.createElement(ra, null),
              c.a.createElement(sa, {
                disabled: !_ || C,
                label: Ht,
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
          { component: 'application_submit' },
        ),
        Xt = x.a.d3d6c52c,
        Qt = x.a.c53e9129,
        Yt = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Jt = Object(N.a)(
          function () {
            return c.a.createElement(
              M,
              { leftControlShouldClose: !0, withInfoButton: !0 },
              c.a.createElement(
                Y,
                { style: Yt.interstitial },
                c.a.createElement(Ge, { headline: Xt, illustration: He.PaperAirplane, subtext: Qt }),
              ),
            )
          },
          { component: 'application_submitted' },
        ),
        Zt = x.a.j274e6aa,
        $t = x.a.d7f65127,
        er = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        ar = Object(N.a)(
          function () {
            return c.a.createElement(
              M,
              { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
              c.a.createElement(
                Y,
                { style: er.interstitial },
                c.a.createElement(Ge, { headline: Zt, illustration: He.Bench, subtext: $t }),
              ),
            )
          },
          { component: 'application_waitlisted' },
        ),
        nr = void 0 !== xn ? xn : (xn = n('o/nB')),
        tr = void 0 !== On ? On : (On = n('lZLw')),
        rr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = c.a.useContext(H.a).featureSwitches,
            r = ua()(nr, a),
            l = ua()(tr, n)
          return (
            bn(l),
            t.isTrue('super_follow_web_application_enabled')
              ? null == l.super_follows_application_draft
                ? c.a.createElement(U.a, { to: y })
                : c.a.createElement(
                    B.d,
                    null,
                    c.a.createElement(B.b, { exact: !0, path: v.eligibility }, c.a.createElement(ka, { user: r })),
                    c.a.createElement(B.b, { exact: !0, path: v.oneMoreThing }, c.a.createElement(Ja, null)),
                    c.a.createElement(B.b, { exact: !0, path: v.completeProfile }, c.a.createElement(G, null)),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submit },
                      c.a.createElement(Gt, { user: r, viewer: l }),
                    ),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submitCategories },
                      c.a.createElement(Xn, { viewer: l }),
                    ),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submitCategoriesOther },
                      c.a.createElement(zn, { viewer: l }),
                    ),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submitPlatforms },
                      c.a.createElement(ht, { viewer: l }),
                    ),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submitPlatformsOther },
                      c.a.createElement(ut, { viewer: l }),
                    ),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submitEthnicities },
                      c.a.createElement($n, { viewer: l }),
                    ),
                    c.a.createElement(B.b, { exact: !0, path: v.submitGenders }, c.a.createElement(rt, { viewer: l })),
                    c.a.createElement(B.b, { exact: !0, path: v.submitted }, c.a.createElement(Jt, null)),
                    c.a.createElement(B.b, { exact: !0, path: v.waitlisted }, c.a.createElement(ar, null)),
                    c.a.createElement(B.b, { exact: !0, path: v.rejected }, c.a.createElement(an, null)),
                    c.a.createElement(B.b, { path: v.root }, c.a.createElement(Ga, { user: r })),
                  )
              : c.a.createElement(Ze, null)
          )
        },
        lr = (n('849X'), n('TJCb'), n('KqXw'), n('MvUL'), n('eb3s')),
        ir = x.a.af4d0a80,
        or = x.a.c701e5cc,
        sr = x.a.a649778b,
        cr = x.a.d4ab68e2,
        ur = function (e) {
          var a = e.onNavigation,
            n = e.shouldBlockNavigation,
            t = Object(B.f)(),
            r = c.a.useState(void 0),
            l = ia()(r, 2),
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
            ? c.a.createElement(lr.a, {
                cancelButtonLabel: sr,
                confirmButtonLabel: cr,
                confirmButtonType: 'destructiveFilled',
                headline: ir,
                onCancel: u,
                onConfirm: d,
                text: or,
              })
            : null
        },
        dr =
          (n('ho0z'),
          function (e) {
            var a = e.children,
              n = e.style
            return c.a.createElement(
              I.a,
              { style: [gr.frame, n] },
              c.a.createElement(
                I.a,
                { style: gr.browserBar },
                c.a.createElement(
                  I.a,
                  { style: gr.browserBarButtons },
                  c.a.createElement(I.a, { style: gr.browserBarButton }),
                  c.a.createElement(I.a, { style: gr.browserBarButton }),
                  c.a.createElement(I.a, { style: gr.browserBarButton }),
                ),
                c.a.createElement(
                  I.a,
                  { style: gr.browserBarUrlInputWrapper },
                  c.a.createElement(I.a, { style: gr.browserBarUrlInput }),
                ),
              ),
              a,
            )
          }),
        pr = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(I.a, { style: n }, c.a.createElement(I.a, { style: gr.content }, a))
        },
        mr = function (e) {
          var a = e.children,
            n = e.style
          return Object(X.b)().windowWidth > V.a.theme.breakpoints.medium
            ? c.a.createElement(dr, { style: n }, c.a.createElement(pr, { style: gr.contentWide }, a))
            : c.a.createElement(pr, { style: n }, a)
        },
        gr = V.a.create(function (e) {
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
        fr = n('2fsM'),
        br = function (e) {
          return c.a.createElement(
            mr,
            null,
            c.a.createElement(I.a, { style: hr.browserContent }, c.a.createElement(fr.a, e)),
          )
        },
        hr = V.a.create(function (e) {
          return { browserContent: { paddingBottom: e.spaces.space48 } }
        }),
        yr = ['label', 'path'],
        vr = function (e) {
          var a = e.label,
            n = e.path,
            t = b()(e, yr),
            r = Object(B.f)()
          return c.a.createElement(
            Z.b,
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
        wr = x.a.hf6f2913,
        _r = x.a.i859a9d3,
        Sr = V.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        kr = function (e) {
          var a = e.path,
            n = e.style
          return c.a.createElement(
            I.a,
            { style: [Sr.root, n] },
            c.a.createElement(Z.b, { size: 'headline2', weight: 'heavy' }, wr),
            c.a.createElement(vr, { label: _r, path: a }),
          )
        },
        Fr = n('0yYu'),
        Er = 'super_follows_onboarding_draft',
        Cr = function (e, a) {
          return cn(e, a).getLinkedRecord(Er)
        }
      function xr(e, a) {
        var n = fn()()
        Object(rn.a)(function () {
          tn()(e, 'viewerRef must be defined'),
            mn()(n, function (n) {
              !(function (e, a) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  t = n.creator_intro,
                  r = void 0 === t ? null : t,
                  l = n.description,
                  i = void 0 === l ? null : l,
                  o = n.selected_price,
                  s = void 0 === o ? null : o,
                  c = sn(a),
                  u = cn(e, a)
                if (!Cr(e, a)) {
                  var d = e.create(''.concat(c, ':').concat(Er), 'SuperFollowsOnboardingDraft')
                  d.setValue(r, 'creator_intro'),
                    d.setValue(i, 'description'),
                    d.setValue(s, 'selected_price'),
                    u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                }
              })(n, e, a)
            })
        })
      }
      function Or(e, a) {
        var n = fn()()
        return c.a.useCallback(
          function (t) {
            tn()(e, 'viewerId must be defined'),
              mn()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Cr(e, a)
                  tn()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Kr,
        Pr,
        Lr,
        Dr,
        Tr,
        Br,
        Ir,
        Rr,
        Vr,
        zr,
        Ar,
        Mr,
        jr,
        Ur,
        Hr,
        Nr,
        Wr,
        qr,
        Gr,
        Xr,
        Qr,
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
        cl,
        ul,
        dl,
        pl,
        ml,
        gl,
        fl,
        bl,
        hl,
        yl,
        vl,
        wl,
        _l,
        Sl,
        kl,
        Fl,
        El,
        Cl,
        xl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ua()(void 0 !== Kn ? Kn : (Kn = n('krsm')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.creator_intro) && void 0 !== a
            ? a
            : ''
        },
        Ol = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ua()(void 0 !== Pn ? Pn : (Pn = n('ZaCQ')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.description) && void 0 !== a
            ? a
            : ''
        },
        Kl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ua()(void 0 !== Ln ? Ln : (Ln = n('K7/K')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        Pl = x.a.iba08a94,
        Ll = x.a.ef354e83,
        Dl = void 0 !== Kr ? Kr : (Kr = n('UFp0')),
        Tl = void 0 !== Pr ? Pr : (Pr = n('NmgE')),
        Bl = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = ua()(Dl, t),
            i = ua()(Tl, r),
            o = (null == l ? void 0 : l.legacy) || {},
            s = o.name,
            u = o.profile_image_url_https,
            d = o.protected,
            p = o.screen_name,
            m = o.verified,
            g = null !== (a = xl(i)) && void 0 !== a ? a : '',
            f = null !== (n = Ol(i)) && void 0 !== n ? n : ''
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Y, { style: Il.interstitial }, c.a.createElement(Ge, { headline: Pl, subtext: Ll })),
            c.a.createElement(Fr.a, null),
            c.a.createElement(Y, { style: Il.previewCallout }, c.a.createElement(kr, { path: F })),
            c.a.createElement(
              I.a,
              { style: Il.summaryFramed },
              c.a.createElement(br, {
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
        Il = V.a.create(function (e) {
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
        Rl = x.a.hf6f2913,
        Vl = void 0 !== Lr ? Lr : (Lr = n('MvEh')),
        zl = void 0 !== Dr ? Dr : (Dr = n('U5ka')),
        Al = Object(N.a)(
          function (e) {
            var a = e.user,
              n = e.viewer,
              t = ua()(Vl, a),
              r = ua()(zl, n)
            return c.a.createElement(
              M,
              { title: Rl, withInfoButton: !0 },
              c.a.createElement(Bl, { user: t, viewer: r }),
            )
          },
          { component: 'management_perks_confirm' },
        ),
        Ml = n('44Bp'),
        jl = ['style'],
        Ul = function (e, a) {
          var n = e.style,
            t = b()(e, jl)
          return c.a.createElement(
            mr,
            { style: n },
            c.a.createElement(c.a.Fragment, null, c.a.createElement(Ml.a, g()({}, t, { ref: a }))),
          )
        },
        Hl = c.a.forwardRef(Ul),
        Nl = x.a.gf32cca1,
        Wl = x.a.j8ba99b3,
        ql = x.a.j679dcda,
        Gl = void 0 !== Tr ? Tr : (Tr = n('yjSu')),
        Xl = void 0 !== Br ? Br : (Br = n('RTdz')),
        Ql = function (e, a) {
          var n = e.autoFocus,
            t = e.descriptionMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(rn.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = ua()(Gl, r),
            s = ua()(Xl, l),
            u = o.legacy,
            d = u.profile_image_url_https,
            p = u.screen_name,
            m = Ol(s),
            g = Or(s, 'description')
          return (
            tn()('string' == typeof d, 'imageUrl must be defined'),
            tn()('string' == typeof p, 'screenName must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Y, { style: Jl.interstitial }, c.a.createElement(Ge, { headline: Nl, subtext: Wl })),
              c.a.createElement(Y, { style: Jl.examplesLink }, c.a.createElement(vr, { label: ql, path: k })),
              c.a.createElement(Fr.a, null),
              c.a.createElement(Y, { style: Jl.previewCallout }, c.a.createElement(kr, { path: F })),
              c.a.createElement(Hl, {
                autoFocus: n,
                imageUrl: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                screenName: p,
                style: Jl.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(I.a, { ref: i }),
            )
          )
        },
        Yl = c.a.forwardRef(Ql),
        Jl = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Zl =
          (n('hBpG'),
          n('5BYb'),
          function (e) {
            var a, t
            return null !==
              (a =
                null === (t = ua()(void 0 !== Rr ? Rr : (Rr = n('WDhg')), e).super_follow_creator_benefits) ||
                void 0 === t
                  ? void 0
                  : t.creator_intro) && void 0 !== a
              ? a
              : ''
          }),
        $l = function (e) {
          var a,
            t,
            r,
            l = (
              null !==
                (a =
                  null === (t = ua()(void 0 !== Vr ? Vr : (Vr = n('G/nI')), e).super_follow_creator_benefits) ||
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
        ei = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ua()(void 0 !== zr ? zr : (zr = n('dGIC')), e).super_follow_creator_price_metadata) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        ai = (n('jwue'), n('+oxZ'), void 0 !== Ar ? Ar : (Ar = n('rwq4'))),
        ni = void 0 !== Mr ? Mr : (Mr = n('E9LA')),
        ti = function (e, a) {
          var t = a.creatorIntro,
            r = a.description,
            l = ua()(ai, e),
            i = (function (e) {
              var a
              return null === (a = ua()(void 0 !== Ir ? Ir : (Ir = n('lWeI')), e).super_follow_creator_benefits) ||
                void 0 === a
                ? void 0
                : a.__id
            })(l),
            o = Zl(l),
            s = $l(l),
            u = t || o,
            d = r || s,
            p = Et()(ni),
            m = ia()(p, 2),
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
                      tn()(i, 'benefitsId must be specified')
                      var a = e.get(i)
                      if (
                        (tn()(a, 'benefitsRecord must be specified'),
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
        ri = x.a.cd5cae15,
        li = x.a.e36287c6,
        ii = x.a.b772cd65,
        oi = void 0 !== jr ? jr : (jr = n('kz1e')),
        si = void 0 !== Ur ? Ur : (Ur = n('M3aw')),
        ci = Object(N.a)(
          function (e) {
            var a = e.user,
              n = e.viewer,
              t = ua()(oi, a),
              r = ua()(si, n),
              l = $l(t),
              i = Ol(r),
              o = i.length > 0 && i.length <= 140 && i !== l,
              s = ti(t, { description: i }),
              u = ia()(s, 2),
              d = u[0],
              p = u[1],
              m = { disabled: !o || p, label: ii, onPress: d, path: _.root, type: 'primaryFilled' },
              f = c.a.createElement(sa, g()({}, m, { size: 'small' }))
            return c.a.createElement(
              M,
              { rightControl: f, subtitle: li, title: ri },
              c.a.createElement(Yl, { autoFocus: !0, descriptionMaxLength: 140, user: t, viewer: r }),
            )
          },
          { component: 'management_perks_description' },
        ),
        ui = n('MAc7'),
        di = ['style'],
        pi = function (e, a) {
          var n = e.style,
            t = b()(e, di)
          return c.a.createElement(mr, { style: n }, c.a.createElement(ui.a, g()({}, t, { ref: a })))
        },
        mi = c.a.forwardRef(pi),
        gi = x.a.j3253319,
        fi = x.a.h1e80993,
        bi = x.a.j679dcda,
        hi = void 0 !== Hr ? Hr : (Hr = n('hGtx')),
        yi = void 0 !== Nr ? Nr : (Nr = n('DWSt')),
        vi = function (e, a) {
          var n = e.autoFocus,
            t = e.introMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(rn.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = ua()(hi, r),
            s = ua()(yi, l),
            u = o.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m = xl(s),
            g = Or(s, 'creator_intro')
          return (
            tn()('string' == typeof p, 'imageUrl must be defined'),
            tn()('string' == typeof d, 'name must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Y, { style: _i.interstitial }, c.a.createElement(Ge, { headline: gi, subtext: fi })),
              c.a.createElement(Y, { style: _i.examplesLink }, c.a.createElement(vr, { label: bi, path: S })),
              c.a.createElement(Fr.a, null),
              c.a.createElement(Y, { style: _i.previewCallout }, c.a.createElement(kr, { path: F })),
              c.a.createElement(mi, {
                autoFocus: n,
                imageUrl: p,
                name: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                style: _i.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(I.a, { ref: i }),
            )
          )
        },
        wi = c.a.forwardRef(vi),
        _i = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Si = x.a.cd5cae15,
        ki = x.a.c0348963,
        Fi = x.a.b772cd65,
        Ei = void 0 !== Wr ? Wr : (Wr = n('oyMe')),
        Ci = void 0 !== qr ? qr : (qr = n('RL7R')),
        xi = Object(N.a)(
          function (e) {
            var a = e.user,
              n = e.viewer,
              t = ua()(Ei, a),
              r = ua()(Ci, n),
              l = Zl(t),
              i = xl(r),
              o = i.length > 0 && i.length <= 140 && i !== l,
              s = ti(t, { creatorIntro: i }),
              u = ia()(s, 2),
              d = u[0],
              p = u[1],
              m = { disabled: !o || p, label: Fi, onPress: d, path: _.root, type: 'primaryFilled' },
              f = c.a.createElement(sa, g()({}, m, { size: 'small' }))
            return c.a.createElement(
              M,
              { rightControl: f, subtitle: ki, title: Si },
              c.a.createElement(wi, { autoFocus: !0, introMaxLength: 140, user: t, viewer: r }),
            )
          },
          { component: 'management_perks_intro' },
        ),
        Oi = n('Nh1N'),
        Ki = n('yoO3'),
        Pi = n('7FtF'),
        Li = n('1YZw'),
        Di = n('rxPX'),
        Ti = Object(Di.a)().propsFromActions(function () {
          return { addToast: Li.b }
        }),
        Bi = void 0 !== Gr ? Gr : (Gr = n('40vp')),
        Ii = void 0 !== Xr ? Xr : (Xr = n('EFaa')),
        Ri = function (e) {
          var a = ua()(Bi, e),
            n = Et()(Ii),
            t = ia()(n, 2),
            r = t[0],
            l = t[1]
          return [
            c.a.useCallback(
              function () {
                return new Promise(function (e, n) {
                  r({
                    variables: {},
                    onCompleted: function (a, n) {
                      return e()
                    },
                    onError: n,
                    updater: function (e) {
                      var n = a.__id
                      tn()(n, 'viewerId must be specified')
                      var t = e.get(n)
                      tn()(t, 'viewerRecord must be specified'), t.setValue(!1, 'is_active_creator')
                    },
                  })
                })
              },
              [r, a.__id],
            ),
            l,
          ]
        },
        Vi = ['addToast', 'disabled', 'label', 'onCancel', 'onConfirm', 'viewer'],
        zi = x.a.j5c45e80,
        Ai = x.a.h92e1b74,
        Mi = x.a.cfd2f35d,
        ji = x.a.bee26fa7,
        Ui = x.a.cd659e6e,
        Hi = void 0 !== Qr ? Qr : (Qr = n('bIlA')),
        Ni = Ti(function (e) {
          var a = e.addToast,
            n = e.disabled,
            t = e.label,
            r = e.onCancel,
            l = e.onConfirm,
            i = e.viewer,
            o = b()(e, Vi),
            s = ua()(Hi, i),
            u = c.a.useState(!1),
            d = ia()(u, 2),
            p = d[0],
            m = d[1],
            f = Ri(s),
            h = ia()(f, 2),
            y = h[0],
            v = h[1],
            w = c.a.useCallback(function () {
              m(!0)
            }, []),
            _ = c.a.useCallback(
              function () {
                y().then(function () {
                  m(!1), a({ text: Ui }), null == l || l()
                })
              },
              [a, y, l],
            ),
            S = c.a.useCallback(
              function () {
                m(!1), null == r || r()
              },
              [r],
            )
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(L.a, g()({}, o, { disabled: v || n, onPress: w, type: 'destructiveOutlined' }), t),
            p &&
              c.a.createElement(lr.a, {
                cancelButtonLabel: Mi,
                confirmButtonLabel: ji,
                confirmButtonType: 'destructiveFilled',
                headline: zi,
                onCancel: S,
                onConfirm: _,
                text: Ai,
              }),
          )
        }),
        Wi = n('PCeD'),
        qi = x.a.be103b84,
        Gi = function () {
          return c.a.createElement(
            I.a,
            { style: Xi.root },
            c.a.createElement(ea.a, { style: Xi.icon }),
            c.a.createElement(Z.b, { size: 'subtext2', weight: 'bold' }, qi),
          )
        },
        Xi = V.a.create(function (e) {
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
        Qi = function (e) {
          var a = e.children,
            n = e.headline,
            t = e.rightControl
          return c.a.createElement(
            I.a,
            { style: Yi.root },
            c.a.createElement(
              I.a,
              { style: Yi.header },
              c.a.createElement(
                Z.b,
                {
                  accessibilityLevel: 4,
                  accessibilityRole: 'heading',
                  size: 'headline2',
                  style: Yi.headline,
                  weight: 'heavy',
                },
                n,
              ),
              a,
            ),
            t,
          )
        },
        Yi = V.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        Ji = n('4zmP'),
        Zi = n.p + 'Chat.62494e65.png',
        $i = n.p + 'Chat@2x.f6eeca05.png',
        eo = n.p + 'Chat@3x.dd8438c5.png',
        ao = n.p + 'Cog.788d3515.png',
        no = n.p + 'Cog@2x.3528d165.png',
        to = n.p + 'Cog@3x.e4185e95.png',
        ro = n.p + 'Coin.684ea185.png',
        lo = n.p + 'Coin@2x.9e020695.png',
        io = n.p + 'Coin@3x.d5ecbc95.png',
        oo = n.p + 'CoinPurse.5e7e5f25.png',
        so = n.p + 'CoinPurse@2x.62abfad5.png',
        co = n.p + 'CoinPurse@3x.6b9f5d05.png',
        uo = n.p + 'Cone.e7e68c95.png',
        po = n.p + 'Cone@2x.94d66a15.png',
        mo = n.p + 'Cone@3x.f4718655.png',
        go = n.p + 'Cross.eed0ff55.png',
        fo = n.p + 'Cross@2x.68249435.png',
        bo = n.p + 'Cross@3x.59595055.png',
        ho = n.p + 'FirstAid.962ae7e5.png',
        yo = n.p + 'FirstAid@2x.09640055.png',
        vo = n.p + 'FirstAid@3x.b6884b15.png',
        wo = n.p + 'Heart.a7bdca85.png',
        _o = n.p + 'Heart@2x.a3108ce5.png',
        So = n.p + 'Heart@3x.2866f2f5.png',
        ko = n.p + 'LifeSaver.19af1fb5.png',
        Fo = n.p + 'LifeSaver@2x.5f9465a5.png',
        Eo = n.p + 'LifeSaver@3x.3cde1ca5.png',
        Co = n.p + 'Lightbulb.632a0de5.png',
        xo = n.p + 'Lightbulb@2x.ea0a7dc5.png',
        Oo = n.p + 'Lightbulb@3x.d47fac75.png',
        Ko = n.p + 'NoEntry.89a117a5.png',
        Po = n.p + 'NoEntry@2x.6460d275.png',
        Lo = n.p + 'NoEntry@3x.cf8e9465.png',
        Do = n.p + 'Pencil.6ac7a9a5.png',
        To = n.p + 'Pencil@2x.e6d394c5.png',
        Bo = n.p + 'Pencil@3x.7e45c2e5.png',
        Io = n.p + 'PiggyBank.571af825.png',
        Ro = n.p + 'PiggyBank@2x.f6b3cb15.png',
        Vo = n.p + 'PiggyBank@3x.f166bc15.png',
        zo = n.p + 'Plant.2e93bbb5.png',
        Ao = n.p + 'Plant@2x.5660c145.png',
        Mo = n.p + 'Plant@3x.60b66855.png',
        jo = n.p + 'Puzzle.59175915.png',
        Uo = n.p + 'Puzzle@2x.d2394395.png',
        Ho = n.p + 'Puzzle@3x.ed9bd735.png',
        No = n.p + 'Ribbon.a0d66a65.png',
        Wo = n.p + 'Ribbon@2x.d981e095.png',
        qo = n.p + 'Ribbon@3x.d6c8e505.png',
        Go = n.p + 'Spheres.c33c7b95.png',
        Xo = n.p + 'Spheres@2x.6b6732f5.png',
        Qo = n.p + 'Spheres@3x.5e58c985.png',
        Yo = n.p + 'Star.2714eb95.png',
        Jo = n.p + 'Star@2x.25a57fd5.png',
        Zo = n.p + 'Star@3x.206f9d85.png',
        $o = n.p + 'TrashCan.7ed17045.png',
        es = n.p + 'TrashCan@2x.79c8ba35.png',
        as = n.p + 'TrashCan@3x.91184ba5.png',
        ns = n.p + 'Wallet.0ca99435.png',
        ts = n.p + 'Wallet@2x.d3b05545.png',
        rs = n.p + 'Wallet@3x.90c942f5.png',
        ls = [1, 2, 3],
        is = Object.freeze({
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
        os = Object(ze.a)(is),
        ss = os.reduce(function (e, a) {
          var n = Math.max.apply(Math, ls)
          return (
            (e[a] = {
              aspectRatio: 1,
              image: { url: r[a], width: 36 * n, height: 36 * n },
              customVariants: ls.map(function (e) {
                return { uri: r[a + (1 !== e ? ''.concat(e, 'x') : '')], width: 36 * e, height: 36 * e }
              }),
            }),
            e
          )
        }, {}),
        cs = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? 36 : n,
            r = ss[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            I.a,
            { style: s },
            c.a.createElement(Ae.a, {
              accessibilityLabel: '',
              aspectMode: Me.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        us = function (e) {
          var a = e.children,
            n = e.childrenStyle,
            t = e.headline,
            r = e.illustration,
            l = e.rightControl
          return c.a.createElement(
            I.a,
            { style: ds.root },
            r && c.a.createElement(cs, { type: r, width: 36 }),
            c.a.createElement(
              I.a,
              { style: ds.header },
              c.a.createElement(
                Z.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: ds.headline,
                  weight: 'heavy',
                },
                t,
              ),
              l,
            ),
            c.a.createElement(I.a, { style: n }, a),
          )
        },
        ds = V.a.create(function (e) {
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
        ps = ['$fragmentType'],
        ms = x.a.a6777c1b,
        gs = x.a.a384fda0,
        fs = x.a.i4313618,
        bs = x.a.c0348963,
        hs = x.a.ic624ab2,
        ys = x.a.ifc9b709,
        vs = x.a.b08bbeb4,
        ws = x.a.ia9c37c4,
        _s = x.a.fb1e4eb6,
        Ss = x.a.be54a312,
        ks = x.a.cca48545,
        Fs = x.a.de67bc6e,
        Es = x.a.a46cead5,
        Cs = x.a.idd8ae44,
        xs = x.a.b28a1b48,
        Os = x.a.f2df375b,
        Ks = x.a.f3ce76c0,
        Ps = x.a.i8982e7e,
        Ls = x.a.dba12b51,
        Ds = x.a.ffaae231,
        Ts = x.a.ca5ca5ed,
        Bs = x.a.abd845fd,
        Is = x.a.i859a9d3,
        Rs = x.a.d14c7bbc,
        Vs = x.a.g867481d,
        zs = x.a.f66d24be,
        As = x.a.g5925628,
        Ms = x.a.e58e85d2,
        js = void 0 !== Yr ? Yr : (Yr = n('EM6u')),
        Us = void 0 !== Jr ? Jr : (Jr = n('oNwH')),
        Hs = void 0 !== Zr ? Zr : (Zr = n('qOMr')),
        Ns = V.a.create(function (e) {
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
        Ws = Object(N.a)(
          function (e) {
            var a,
              n,
              t,
              r = e.priceOfferings,
              l = e.user,
              i = e.viewer,
              o = Object(B.f)(),
              s = Object(B.g)(),
              u = ua()(js, r),
              d = (u.$fragmentType, b()(u, ps)),
              p = ua()(Us, l),
              m = ua()(Hs, i),
              g = Zl(p),
              f = $l(p),
              y = null !== (a = ei(p)) && void 0 !== a ? a : 'offer2',
              v = null !== (n = p.legacy.profile_image_url_https) && void 0 !== n ? n : void 0,
              w = null !== (t = p.legacy.screen_name) && void 0 !== t ? t : void 0,
              S = c.a.createElement(vr, { label: Ts, path: _.perksConfirm, size: 'subtext1' }),
              k = c.a.createElement(sa, { label: Bs, path: _.perksIntro, size: 'small', type: 'primaryOutlined' }),
              F = c.a.createElement(sa, {
                label: Bs,
                path: _.perksDescription,
                size: 'small',
                type: 'primaryOutlined',
              }),
              E = c.a.useCallback(
                function () {
                  o.push(h)
                },
                [o],
              )
            return c.a.createElement(
              Ki.a,
              null,
              c.a.createElement(
                Pi.a,
                { location: s, screenType: 'secondaryDetail', title: ms },
                c.a.createElement(
                  I.a,
                  { style: Ns.title },
                  c.a.createElement(
                    Z.b,
                    { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                    ms,
                  ),
                  c.a.createElement(Gi, null),
                ),
                c.a.createElement(Fr.a, null),
                c.a.createElement(
                  us,
                  { childrenStyle: Ns.benefits, headline: gs, illustration: is.Ribbon, rightControl: S },
                  c.a.createElement(Z.b, { color: 'gray700' }, fs),
                  c.a.createElement(
                    Qi,
                    { headline: bs, rightControl: k },
                    c.a.createElement(Wi.a, { imageUrl: v, screenName: w, value: g }),
                  ),
                  c.a.createElement(
                    Qi,
                    { headline: hs, rightControl: F },
                    c.a.createElement(Wi.a, { imageUrl: v, screenName: w, value: f }),
                  ),
                  c.a.createElement(Qi, { headline: ys }, c.a.createElement(Z.b, { color: 'gray700' }, vs)),
                ),
                c.a.createElement(Fr.a, null),
                c.a.createElement(
                  us,
                  { childrenStyle: Ns.other, headline: ws, illustration: is.PiggyBank },
                  c.a.createElement(Z.b, { color: 'gray700' }, _s),
                  c.a.createElement(Z.b, { size: 'headline2', weight: 'heavy' }, Ss({ price: d[y] })),
                  c.a.createElement(Ji.a, { Icon: Oi.a, action: { label: Is, link: P }, headline: ks, text: Fs }),
                ),
                c.a.createElement(Fr.a, null),
                c.a.createElement(
                  us,
                  { childrenStyle: Ns.other, headline: Es, illustration: is.Chat },
                  c.a.createElement(Z.b, { color: 'gray700' }, Cs),
                  c.a.createElement(
                    I.a,
                    { style: Ns.buttons },
                    c.a.createElement(
                      L.a,
                      {
                        dominantColor: '#5865F2',
                        link: 'https://t.co/jPqvg6tFrDJG',
                        style: Ns.button,
                        type: 'onMediaDominantColorFilled',
                      },
                      Rs,
                    ),
                  ),
                ),
                c.a.createElement(Fr.a, null),
                c.a.createElement(
                  us,
                  { childrenStyle: Ns.other, headline: xs, illustration: is.Lightbulb },
                  c.a.createElement(Z.b, { color: 'gray700' }, Os),
                  c.a.createElement(
                    I.a,
                    { style: Ns.buttons },
                    c.a.createElement(
                      L.a,
                      { link: 'https://t.co/RL2NN3bEVkes', style: Ns.button, type: 'primaryOutlined' },
                      Vs,
                    ),
                  ),
                ),
                c.a.createElement(Fr.a, null),
                c.a.createElement(
                  us,
                  { childrenStyle: Ns.other, headline: Ks, illustration: is.LifeSaver },
                  c.a.createElement(Z.b, { color: 'gray700' }, Ps),
                  c.a.createElement(
                    I.a,
                    { style: Ns.buttons },
                    c.a.createElement(L.a, { link: K, style: Ns.button, type: 'primaryOutlined' }, zs),
                    c.a.createElement(
                      L.a,
                      {
                        link: 'https://help.twitter.com/forms/paid-features/superfollows',
                        style: Ns.button,
                        type: 'primaryOutlined',
                      },
                      As,
                    ),
                  ),
                ),
                c.a.createElement(Fr.a, null),
                c.a.createElement(
                  us,
                  { childrenStyle: Ns.other, headline: Ls, illustration: is.Cone },
                  c.a.createElement(Z.b, { color: 'gray700' }, Ds),
                  c.a.createElement(
                    I.a,
                    { style: Ns.buttons },
                    c.a.createElement(Ni, { label: Ms, onConfirm: E, style: Ns.button, viewer: m }),
                  ),
                ),
              ),
            )
          },
          { component: 'management_summary' },
        ),
        qs = void 0 !== $r ? $r : ($r = n('N6s9')),
        Gs = void 0 !== el ? el : (el = n('h3lO')),
        Xs = function (e) {
          var a = e.rootPath,
            n = e.user,
            t = e.viewer,
            r = ua()(qs, n),
            l = ua()(Gs, t),
            i = Zl(r),
            o = $l(r),
            s = ei(r),
            u = xl(l),
            d = Ol(l),
            p = Kl(l),
            m = Or(l, 'creator_intro'),
            g = Or(l, 'description'),
            f = Or(l, 'selected_price')
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
        Qs = void 0 !== al ? al : (al = n('MXCg')),
        Ys = void 0 !== nl ? nl : (nl = n('mEFY')),
        Js = void 0 !== tl ? tl : (tl = n('d8Sa')),
        Zs = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(H.a).featureSwitches,
            l = ua()(Qs, a),
            i = ua()(Ys, n),
            o = ua()(Js, t),
            s = Zl(i),
            u = $l(i),
            d = ei(i),
            p = Xs({ rootPath: _.root, user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (xr(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_edit_perks_enabled'))
          )
            throw new Error('Super Follows management is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(U.a, { to: y })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(ur, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  B.d,
                  null,
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: _.perksIntro },
                    c.a.createElement(xi, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: _.perksDescription },
                    c.a.createElement(ci, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: _.perksConfirm },
                    c.a.createElement(Al, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { path: _.root },
                    c.a.createElement(Ws, { priceOfferings: l, user: i, viewer: o }),
                  ),
                ),
              )
        },
        $s = x.a.b422cb62,
        ec = x.a.f08705e0,
        ac = x.a.e2cd700f,
        nc = x.a.fbfd7397,
        tc = x.a.c1df579e,
        rc = x.a.d8637c96,
        lc = x.a.b92892dc,
        ic = x.a.b123a502,
        oc = void 0 !== rl ? rl : (rl = n('wQp3')),
        sc = void 0 !== ll ? ll : (ll = n('tfBr')),
        cc = V.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        uc = Object(N.a)(
          function (e) {
            var a = e.percentageComplete,
              n = e.user,
              t = e.viewer,
              r = ua()(oc, n),
              l = ua()(sc, t),
              i = r.stripe_account_status,
              o = xl(l),
              s = Ol(l),
              u = Kl(l),
              d = [
                { label: rc, checked: !!o && !!s },
                { label: lc, checked: !!u },
                { label: ic, checked: 'Completed' === i },
              ],
              p = d.some(function (e) {
                return e.checked
              }),
              m = c.a.createElement(sa, { label: tc, path: w.perksIntro, size: 'small', type: 'primaryFilled' })
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
                Y,
                { style: cc.interstitial },
                c.a.createElement(Ge, {
                  headline: p ? ac : $s,
                  illustration: p ? He.Puzzle : He.Cat,
                  subtext: p ? nc : ec,
                }),
              ),
              c.a.createElement(Y, { style: cc.checks }, c.a.createElement(na, { items: d })),
            )
          },
          { component: 'onboarding_get_started' },
        ),
        dc = n('hG8M'),
        pc = ['style'],
        mc = function (e) {
          var a = e.style,
            n = b()(e, pc)
          return c.a.createElement(
            mr,
            { style: a },
            c.a.createElement(dc.a, g()({ style: gc.superFollowsDemoBadgeHeader }, n)),
          )
        },
        gc = V.a.create(function (e) {
          return { superFollowsDemoBadgeHeader: { alignSelf: 'center', marginBottom: e.spaces.space16 } }
        }),
        fc = x.a.cda6bb6d,
        bc = x.a.a15b98ec,
        hc = void 0 !== il ? il : (il = n('mDly')),
        yc = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i = e.user,
            o = ua()(hc, i),
            s = null !== (a = null == o ? void 0 : o.legacy.profile_image_url_https) && void 0 !== a ? a : void 0,
            u = null !== (n = null == o ? void 0 : o.legacy.protected) && void 0 !== n && n,
            d = null !== (t = null == o ? void 0 : o.legacy.verified) && void 0 !== t && t,
            p = null !== (r = null == o ? void 0 : o.legacy.name) && void 0 !== r ? r : void 0,
            m = null !== (l = null == o ? void 0 : o.legacy.screen_name) && void 0 !== l ? l : void 0
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Y, { style: vc.interstitial }, c.a.createElement(Ge, { headline: fc, subtext: bc })),
            c.a.createElement(Fr.a, null),
            c.a.createElement(Y, { style: vc.previewCallout }, c.a.createElement(kr, { path: F })),
            c.a.createElement(mc, {
              imageUrl: s,
              isProtected: u,
              isVerified: d,
              name: p,
              screenName: m,
              style: vc.preview,
            }),
          )
        },
        vc = V.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        wc = n('86D9'),
        _c = x.a.cd5cae15,
        Sc = x.a.ad4a92a2,
        kc = x.a.c1df579e,
        Fc = void 0 !== ol ? ol : (ol = n('QmjQ')),
        Ec = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        Cc = Object(N.a)(
          function (e) {
            var a = e.percentageComplete,
              n = e.user,
              t = c.a.useRef(),
              r = Object(wc.a)(t, { threshold: 0.5 }),
              l = { label: kc, path: w.perksConfirm, type: 'primaryFilled' },
              i = c.a.createElement(sa, g()({}, l, { size: 'xLarge' })),
              o = c.a.createElement(
                sa,
                g()({}, l, { size: 'small', style: [Ec.transitionOpacity, r ? Ec.opacityNone : void 0] }),
              ),
              s = ua()(Fc, n)
            return c.a.createElement(
              M,
              { percentageComplete: a, rightControl: o, subtitle: Sc, title: _c },
              c.a.createElement(yc, { user: s }),
              c.a.createElement(Y, { ref: t, style: Ec.bigButtons }, i),
            )
          },
          { component: 'onboarding_perks_badges' },
        ),
        xc = x.a.cd5cae15,
        Oc = x.a.e18b7a71,
        Kc = x.a.c1df579e,
        Pc = void 0 !== sl ? sl : (sl = n('Rthh')),
        Lc = void 0 !== cl ? cl : (cl = n('aREQ')),
        Dc = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        Tc = Object(N.a)(
          function (e) {
            var a = e.percentageComplete,
              n = e.user,
              t = e.viewer,
              r = c.a.useRef(),
              l = Object(wc.a)(r, { threshold: 0.5 }),
              i = ua()(Pc, n),
              o = ua()(Lc, t),
              s = { label: Kc, path: w.pricing, type: 'primaryFilled' },
              u = c.a.createElement(sa, g()({}, s, { size: 'xLarge' })),
              d = c.a.createElement(
                sa,
                g()({}, s, { size: 'small', style: [Dc.transitionOpacity, l ? Dc.opacityNone : void 0] }),
              )
            return c.a.createElement(
              M,
              { percentageComplete: a, rightControl: d, subtitle: Oc, title: xc },
              c.a.createElement(Bl, { user: i, viewer: o }),
              c.a.createElement(Y, { ref: r, style: Dc.bigButtons }, u),
            )
          },
          { component: 'onboarding_perks_confirm' },
        ),
        Bc = x.a.cd5cae15,
        Ic = x.a.e36287c6,
        Rc = x.a.be76dc33,
        Vc = x.a.c1df579e,
        zc = void 0 !== ul ? ul : (ul = n('6rkJ')),
        Ac = void 0 !== dl ? dl : (dl = n('tJ4s')),
        Mc = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        jc = Object(N.a)(
          function (e) {
            var a = e.percentageComplete,
              n = e.user,
              t = e.viewer,
              r = c.a.useRef(),
              l = c.a.useRef(),
              i = Object(wc.a)(l, { threshold: 0.5 }),
              o = ua()(Ac, t),
              s = ua()(zc, n),
              u = Ol(o),
              d = u.length > 0 && u.length <= 140,
              p = c.a.useCallback(function () {
                var e
                null == r || null === (e = r.current) || void 0 === e || e.focus()
              }, []),
              m = { disabled: !d, label: Vc, path: w.perksBadges, type: 'primaryFilled' },
              f = c.a.createElement(sa, g()({}, m, { size: 'xLarge' })),
              b = c.a.createElement(sa, g()({}, m, { size: 'small' })),
              h = { children: Rc, onClick: p, type: 'primaryFilled' },
              y = c.a.createElement(L.a, g()({}, h, { size: 'xLarge' })),
              v = c.a.createElement(L.a, g()({}, h, { size: 'small' })),
              _ = d ? f : y,
              S = c.a.createElement(I.a, { style: [Mc.transitionOpacity, i ? Mc.opacityNone : void 0] }, d ? b : v)
            return c.a.createElement(
              M,
              { percentageComplete: a, rightControl: S, subtitle: Ic, title: Bc },
              c.a.createElement(Yl, { descriptionMaxLength: 140, ref: r, user: s, viewer: o }),
              c.a.createElement(Y, { ref: l, style: Mc.bigButtons }, _),
            )
          },
          { component: 'onboarding_perks_description' },
        ),
        Uc = x.a.cd5cae15,
        Hc = x.a.c0348963,
        Nc = x.a.ef5406e3,
        Wc = x.a.c1df579e,
        qc = void 0 !== pl ? pl : (pl = n('02qo')),
        Gc = void 0 !== ml ? ml : (ml = n('TXsE')),
        Xc = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        Qc = Object(N.a)(
          function (e) {
            var a = e.percentageComplete,
              n = e.user,
              t = e.viewer,
              r = c.a.useRef(),
              l = c.a.useRef(),
              i = Object(wc.a)(l, { threshold: 0.5 }),
              o = ua()(qc, n),
              s = ua()(Gc, t),
              u = xl(s),
              d = u.length > 0 && u.length <= 140,
              p = c.a.useCallback(function () {
                var e
                null == r || null === (e = r.current) || void 0 === e || e.focus()
              }, []),
              m = { disabled: !d, label: Wc, path: w.perksDescription, type: 'primaryFilled' },
              f = c.a.createElement(sa, g()({}, m, { size: 'xLarge' })),
              b = c.a.createElement(sa, g()({}, m, { size: 'small' })),
              h = { children: Nc, onClick: p, type: 'primaryFilled' },
              y = c.a.createElement(L.a, g()({}, h, { size: 'xLarge' })),
              v = c.a.createElement(L.a, g()({}, h, { size: 'small' })),
              _ = d ? f : y,
              S = c.a.createElement(I.a, { style: [Xc.transitionOpacity, i ? Xc.opacityNone : void 0] }, d ? b : v)
            return c.a.createElement(
              M,
              { percentageComplete: a, rightControl: S, subtitle: Hc, title: Uc },
              c.a.createElement(wi, { introMaxLength: 140, ref: r, user: o, viewer: s }),
              c.a.createElement(Y, { ref: l, style: Xc.bigButtons }, _),
            )
          },
          { component: 'onboarding_perks_intro' },
        ),
        Yc = ['$fragmentType'],
        Jc = x.a.ea8a3d2d,
        Zc = x.a.f77bb178,
        $c = x.a.cd75a5d4,
        eu = x.a.g9677c6d,
        au = x.a.abd845fd,
        nu = void 0 !== gl ? gl : (gl = n('IeZm')),
        tu = void 0 !== fl ? fl : (fl = n('7ESn')),
        ru = void 0 !== bl ? bl : (bl = n('By/j')),
        lu = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        iu = Object(N.a)(
          function (e) {
            var a,
              n = e.percentageComplete,
              t = e.priceOfferings,
              r = e.viewer,
              l = ua()(nu, t),
              i = (l.$fragmentType, b()(l, Yc)),
              o = ua()(tu, r),
              s = xl(o),
              u = Ol(o),
              d = null !== (a = Kl(o)) && void 0 !== a ? a : i[0],
              p = Et()(ru),
              m = ia()(p, 2),
              g = m[0],
              f = m[1]
            return c.a.createElement(
              M,
              { percentageComplete: n, title: Jc, withInfoButton: !0 },
              c.a.createElement(
                Y,
                { style: lu.interstitial },
                c.a.createElement(Ge, { headline: Zc({ price: i[d] }), illustration: He.Pricing, subtext: $c }),
              ),
              c.a.createElement(
                Y,
                { style: lu.buttons },
                c.a.createElement(sa, {
                  disabled: f,
                  label: eu,
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
                c.a.createElement(sa, {
                  disabled: f,
                  label: au,
                  path: w.pricing,
                  size: 'large',
                  type: 'primaryOutlined',
                }),
              ),
            )
          },
          { component: 'onboarding_pricing_confirm' },
        ),
        ou = (n('+KXO'), n('7xRU'), n('hznd')),
        su = ['$fragmentType'],
        cu = x.a.ea8a3d2d,
        uu = x.a.ic9124bf,
        du = x.a.g5923869,
        pu = {
          offer1: [x.a.f025ab39, x.a.c5602dfd],
          offer2: [x.a.ib075804, x.a.j8a72f06],
          offer3: [x.a.c246656e, x.a.a92ab16c],
        },
        mu = x.a.c1df579e,
        gu = void 0 !== hl ? hl : (hl = n('5jO1')),
        fu = void 0 !== yl ? yl : (yl = n('mKqc')),
        bu = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        hu = Object(N.a)(
          function (e) {
            var a = e.percentageComplete,
              n = e.priceOfferings,
              t = e.viewer,
              r = ua()(gu, n),
              l = (r.$fragmentType, b()(r, su)),
              i = ua()(fu, t),
              o = Kl(i),
              s = Or(i, 'selected_price'),
              u = c.a.createElement(
                x.a.I18NFormatMessage,
                { $i18n: 'geee69de' },
                c.a.createElement(Z.b, { link: K }, x.a.c336b06a),
              ),
              d = Object.keys(l).map(function (e) {
                return { label: du({ price: l[e] }), value: e, helpText: pu[e].join(' ') }
              }),
              p = c.a.createElement(sa, {
                disabled: !o,
                label: mu,
                path: w.pricingConfirm,
                size: 'small',
                type: 'primaryFilled',
              })
            return c.a.createElement(
              M,
              { percentageComplete: a, rightControl: p, title: cu, withInfoButton: !0 },
              c.a.createElement(Y, { style: bu.interstitial }, c.a.createElement(Ge, { headline: uu, subtext: u })),
              c.a.createElement(
                Y,
                { style: bu.prices },
                c.a.createElement(ou.a, {
                  accessibilityLabel: uu,
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
          { component: 'onboarding_pricing' },
        ),
        yu = x.a.f1cb36b8,
        vu = x.a.e20f6661,
        wu = x.a.b772cd65,
        _u = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Su = Object(N.a)(
          function (e) {
            var a = e.percentageComplete,
              n = c.a.useRef(),
              t = c.a.useCallback(function () {
                var e
                null === (e = n.current) || void 0 === e || e.goBack()
              }, []),
              r = c.a.createElement(
                x.a.I18NFormatMessage,
                { $i18n: 'cf780193' },
                c.a.createElement(Z.b, { weight: 'bold' }, x.a.d7d4da89),
              )
            return c.a.createElement(
              M,
              { leftControlShouldClose: !0, percentageComplete: a, screenRef: n, title: yu, withInfoButton: !0 },
              c.a.createElement(
                Y,
                { style: _u.interstitial },
                c.a.createElement(Ge, { headline: vu, illustration: He.Thumbsup, subtext: r }),
              ),
              c.a.createElement(
                Y,
                { style: _u.buttons },
                c.a.createElement(L.a, { onPress: t, size: 'large', type: 'primaryFilled' }, wu),
              ),
            )
          },
          { component: 'onboarding_stripe_completed' },
        ),
        ku = x.a.f1cb36b8,
        Fu = x.a.g88e146c,
        Eu = x.a.dfe973a6,
        Cu = x.a.b772cd65,
        xu = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Ou = Object(N.a)(
          function (e) {
            var a = e.percentageComplete,
              n = c.a.useRef(),
              t = c.a.useCallback(function () {
                var e
                null === (e = n.current) || void 0 === e || e.goBack()
              }, [])
            return c.a.createElement(
              M,
              { leftControlShouldClose: !0, percentageComplete: a, screenRef: n, title: ku, withInfoButton: !0 },
              c.a.createElement(
                Y,
                { style: xu.interstitial },
                c.a.createElement(Ge, { headline: Fu, illustration: He.Bench, subtext: Eu }),
              ),
              c.a.createElement(
                Y,
                { style: xu.buttons },
                c.a.createElement(L.a, { onPress: t, size: 'large', type: 'primaryFilled' }, Cu),
              ),
            )
          },
          { component: 'onboarding_stripe_pending' },
        ),
        Ku = n('8jkQ'),
        Pu = void 0 !== vl ? vl : (vl = n('M+ld')),
        Lu = function () {
          var e = Et()(Pu),
            a = ia()(e, 2),
            n = a[0],
            t = a[1]
          return [
            c.a.useCallback(
              function () {
                return new Promise(function (e, a) {
                  var t = Ku.b.get().href
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
        Du = n('Qwev'),
        Tu = x.a.f1cb36b8,
        Bu = x.a.ja884230,
        Iu = x.a.af1b808d,
        Ru = x.a.fe339750,
        Vu = x.a.j912510a,
        zu = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Au = Object(N.a)(
          function (e) {
            var a = e.percentageComplete,
              n = c.a.useState(!1),
              t = ia()(n, 2),
              r = t[0],
              l = t[1],
              i = c.a.useState(!1),
              o = ia()(i, 2),
              s = o[0],
              u = o[1],
              d = Lu(),
              p = ia()(d, 2),
              m = p[0],
              g = p[1],
              f = c.a.useCallback(
                function () {
                  m()
                    .then(function (e) {
                      Ku.b.navigateTo(e)
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
              { percentageComplete: a, title: Tu, withInfoButton: !0 },
              c.a.createElement(
                Y,
                { style: zu.interstitial },
                c.a.createElement(Ge, { headline: Bu, illustration: He.CoinStairs, subtext: Iu }),
              ),
              c.a.createElement(
                Y,
                { style: zu.buttons },
                c.a.createElement(
                  L.a,
                  { disabled: y, onPress: b, size: 'large', type: 'primaryFilled' },
                  r ? c.a.createElement(Du.a, null) : Ru,
                ),
                c.a.createElement(
                  L.a,
                  { disabled: y, onPress: h, size: 'large', type: 'primaryOutlined' },
                  s ? c.a.createElement(Du.a, null) : Vu,
                ),
              ),
            )
          },
          { component: 'onboarding_stripe_setup' },
        ),
        Mu = void 0 !== wl ? wl : (wl = n('UNVS')),
        ju = void 0 !== _l ? _l : (_l = n('6byF')),
        Uu = void 0 !== Sl ? Sl : (Sl = n('dNhZ')),
        Hu = function (e) {
          return e / 8
        },
        Nu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(H.a).featureSwitches,
            l = ua()(Mu, a),
            i = ua()(ju, n),
            o = ua()(Uu, t),
            s = Zl(i),
            u = $l(i),
            d = ei(i),
            p = Xs({ rootPath: h, user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (xr(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_onboarding_enabled'))
          )
            throw new Error('Super Follows onboarding is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(U.a, { to: y })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(ur, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  B.d,
                  null,
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksIntro },
                    c.a.createElement(Qc, { percentageComplete: Hu(1), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksDescription },
                    c.a.createElement(jc, { percentageComplete: Hu(2), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksBadges },
                    c.a.createElement(Cc, { percentageComplete: Hu(3), user: i }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksConfirm },
                    c.a.createElement(Tc, { percentageComplete: Hu(4), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.pricing },
                    c.a.createElement(hu, { percentageComplete: Hu(5), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.pricingConfirm },
                    c.a.createElement(iu, { percentageComplete: Hu(6), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.stripeSetup },
                    c.a.createElement(Au, { percentageComplete: Hu(7) }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.stripePending },
                    c.a.createElement(Ou, { percentageComplete: Hu(8) }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.stripeCompleted },
                    c.a.createElement(Su, { percentageComplete: Hu(8) }),
                  ),
                  c.a.createElement(
                    B.b,
                    { path: w.root },
                    c.a.createElement(uc, { percentageComplete: Hu(0), user: i, viewer: o }),
                  ),
                ),
              )
        },
        Wu = x.a.ebfb897c,
        qu = x.a.dc4feb19,
        Gu = x.a.c183d271,
        Xu = x.a.ic130fd5,
        Qu = x.a.dd913e24,
        Yu = x.a.h580543e,
        Ju = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        Zu = Object(N.a)(
          function () {
            return c.a.createElement(
              M,
              { title: Wu },
              c.a.createElement(Y, { style: Ju.interstitial }, c.a.createElement(Ge, { headline: qu, subtext: Gu })),
              c.a.createElement(
                Y,
                { style: Ju.exampleDescriptions },
                c.a.createElement(Fr.a, null),
                c.a.createElement(Wi.a, { value: Xu }),
                c.a.createElement(Fr.a, null),
                c.a.createElement(Wi.a, { value: Qu }),
                c.a.createElement(Fr.a, null),
                c.a.createElement(Wi.a, { value: Yu }),
              ),
            )
          },
          { component: 'perks_description_examples' },
        ),
        $u = n('JWc1'),
        ed = x.a.ebfb897c,
        ad = x.a.dc4feb19,
        nd = x.a.a0bb2076,
        td = x.a.ace46d40,
        rd = x.a.h2c4511f,
        ld = x.a.hbe4f99e,
        id = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        od = Object(N.a)(
          function () {
            return c.a.createElement(
              M,
              { title: ed },
              c.a.createElement(Y, { style: id.interstitial }, c.a.createElement(Ge, { headline: ad, subtext: nd })),
              c.a.createElement(
                Y,
                { style: id.exampleIntros },
                c.a.createElement($u.a, { value: td }),
                c.a.createElement($u.a, { value: rd }),
                c.a.createElement($u.a, { value: ld }),
              ),
            )
          },
          { component: 'perks_intro_examples' },
        ),
        sd = n('VTDR'),
        cd = n('a2Fh'),
        ud = x.a.hf6f2913,
        dd = x.a.fb278c81,
        pd = x.a.e6b60e94,
        md = V.a.create(function (e) {
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
        gd = Object(N.a)(
          function () {
            return c.a.createElement(
              M,
              { title: ud },
              c.a.createElement(Y, { style: md.interstitial }, c.a.createElement(Ge, { headline: dd, subtext: pd })),
              c.a.createElement(
                mr,
                { style: md.preview },
                c.a.createElement(
                  sd.a,
                  null,
                  c.a.createElement(cd.a, {
                    color: 'text',
                    lineHeightPx: 30,
                    wordHeightPx: 7,
                    wordPercentWidths: [18, 17],
                    wordSpacingPx: 15,
                  }),
                  c.a.createElement(cd.a, {
                    color: 'text',
                    lineHeightPx: 30,
                    wordHeightPx: 7,
                    wordPercentWidths: [17, 20],
                    wordSpacingPx: 15,
                  }),
                  c.a.createElement(cd.a, {
                    color: 'text',
                    lineHeightPx: 20,
                    style: md.subheader,
                    withBorderRadius: !0,
                    withLineWrap: !0,
                    wordHeightPx: 5,
                    wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                  }),
                ),
              ),
            )
          },
          { component: 'perks_preview' },
        ),
        fd = void 0 !== kl ? kl : (kl = n('nEN5')),
        bd = void 0 !== Fl ? Fl : (Fl = n('toKZ')),
        hd = void 0 !== El ? El : (El = n('ucRr')),
        yd = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = ua()(fd, a),
            l = ua()(bd, n),
            i = ua()(hd, t),
            o = (function (e) {
              var a = e.isActiveCreator,
                n = e.stripeAccountStatus,
                t = e.superFollowsApplicationStatus
              if (a) return _.root
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
            c.a.createElement(B.b, { path: v.root }, c.a.createElement(rr, { user: l, viewer: i })),
            c.a.createElement(B.b, { path: w.root }, c.a.createElement(Nu, { priceOfferings: r, user: l, viewer: i })),
            c.a.createElement(B.b, { path: _.root }, c.a.createElement(Zs, { priceOfferings: r, user: l, viewer: i })),
            c.a.createElement(B.b, { exact: !0, path: S }, c.a.createElement(od, null)),
            c.a.createElement(B.b, { exact: !0, path: k }, c.a.createElement(Zu, null)),
            c.a.createElement(B.b, { exact: !0, path: F }, c.a.createElement(gd, null)),
            c.a.createElement(B.b, { exact: !0, path: y }, c.a.createElement(U.a, { to: o })),
          )
        },
        vd = n('IAZG'),
        wd = void 0 !== Cl ? Cl : (Cl = n('G8I5')),
        _d = function () {
          var e,
            a,
            n = Object(vd.a)(wd, {}),
            t = null == n ? void 0 : n.super_follows_price_offerings,
            r =
              null == n || null === (e = n.viewer) || void 0 === e || null === (a = e.user_results) || void 0 === a
                ? void 0
                : a.result,
            l = null == n ? void 0 : n.viewer
          return null == t || 'User' !== (null == r ? void 0 : r.__typename) || null == l
            ? null
            : c.a.createElement(yd, { priceOfferings: t, user: r, viewer: l })
        },
        Sd = { context: 'SuperFollowsSettings' }
      a.default = c.a.memo(
        Object(N.a)(
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
              { errorConfig: Sd, fallback: e },
              c.a.createElement(d.a, null, c.a.createElement(_d, null)),
            )
          },
          { page: 'settings', section: 'superfollows' },
        ),
      )
    },
    nEN5: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    'o/nB': function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    oNwH: function (e, a, n) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSummaryScreen_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingCreatorIntro_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDescription_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingSelectedPrice_user' },
          {
            kind: 'RequiredField',
            field: {
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
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '722ff7a074a54c88ba88adecf412cb22',
      }
      e.exports = t
    },
    oyMe: function (e, a, n) {
      'use strict'
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
      e.exports = t
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
        _ = n('38/B'),
        S = n('t62R'),
        k = n('/yvb'),
        F = n('piX5'),
        E = n('3XMw'),
        C = n.n(E),
        x = n('tI3i'),
        O = n.n(x),
        K = n('oQhu'),
        P = n('rHpw'),
        L = n('aITJ'),
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
        j = C.a.de540c32,
        U = C.a.b4abfdb3,
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
                Object(K.a)(function (e) {
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
                L.b.isKaiOS() && 'Backspace' === e.key && n ? (t._blurOnBackspaceKeyUpForKaiOS = n) : a && a(e)
              }),
              y()(p()(t), '_handleKeyUp', function (e) {
                var a = t.props.onKeyUp
                L.b.isKaiOS() &&
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
                O()(
                  !(!o && i && !l),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  O()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  O()(
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
                      S.b,
                      {
                        color: t ? 'gray700' : n,
                        numberOfLines: 1,
                        size: t ? 'headline1' : 'subtext2',
                        style: [
                          W.textInputHeaderItem,
                          t && W.placeholderText,
                          !_.a.reducedMotionEnabled && W.transition,
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
                        S.b,
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
                            accessibilityLabel: t ? U : j,
                            focusable: !0,
                            hoverLabel: { label: t ? U : j },
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
                        S.b,
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
                        S.b,
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
                        S.b,
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
      var N = P.a.create(function (e) {
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
        W = P.a.create(function (e) {
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
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSubmitScreen_user',
        selections: [
          {
            kind: 'RequiredField',
            field: {
              alias: null,
              args: null,
              concreteType: 'ApiUser',
              kind: 'LinkedField',
              name: 'legacy',
              plural: !1,
              selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null }],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '891cd330d47f73923bd3ce7dad37df31',
      }
      e.exports = t
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
    qOMr: function (e, a, n) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSummaryScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsDeactivateButton_viewer' }],
        type: 'Viewer',
        abstractKey: null,
        hash: '8a276cbc102a5ad8be1ae83387f39166',
      }
      e.exports = t
    },
    rwq4: function (e, a, n) {
      'use strict'
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
      e.exports = t
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
      e.exports = t
    },
    tfBr: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    toKZ: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    ucRr: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    wQp3: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    'xd+q': function (e, a, n) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationMarketingScreen_user',
        selections: [
          {
            kind: 'RequiredField',
            field: {
              alias: null,
              args: null,
              concreteType: 'ApiUser',
              kind: 'LinkedField',
              name: 'legacy',
              plural: !1,
              selections: [
                {
                  kind: 'RequiredField',
                  field: { alias: null, args: null, kind: 'ScalarField', name: 'followers_count', storageKey: null },
                  action: 'THROW',
                  path: 'legacy.followers_count',
                },
              ],
              storageKey: null,
            },
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'f9d66c36366fcbae31378fec6edbd005',
      }
      e.exports = t
    },
    xhT1: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    xnrs: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
    yjSu: function (e, a, n) {
      'use strict'
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksDescriptionCore_user',
        selections: [
          {
            kind: 'RequiredField',
            field: {
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
            action: 'THROW',
            path: 'legacy',
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: 'ea94577a2c8128b8322c451f71d7d819',
      }
      e.exports = t
    },
    yuPD: function (e, a, n) {
      'use strict'
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
      e.exports = t
    },
  },
])
//# sourceMappingURL=WIPED
