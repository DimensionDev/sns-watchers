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
        k = n('v//M'),
        _ = n('3XMw'),
        F = n.n(_),
        E = n('M2mT'),
        C = 'settingsDetailSave',
        x = n('mw9i'),
        O = n('0yYu'),
        K = n('/yvb'),
        P = n('rHpw'),
        L = F.a.i2209530,
        T = (function (e) {
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
                return b.a.createElement(k.a, { fetchStatus: a, onRequestRetry: e._handleFetch, render: e._render })
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
                  { style: [D.contentRoot, o && D.withMarginBottom] },
                  n,
                  t
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(O.a, null),
                        b.a.createElement(
                          x.a,
                          { style: D.buttonContainer },
                          b.a.createElement(K.a, { disabled: r, onPress: t, style: D.button, testID: C, type: i }, l),
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
      g()(T, 'defaultProps', { submitLabel: L, submitType: 'brandFilled', withMarginBottom: !0 })
      var D = P.a.create(function (e) {
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
      a.a = S(T)
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
        S = n('VAZu'),
        k = n('wiP2'),
        _ = n('Es6L'),
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
        T = n('3xLC'),
        D = [
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
                    a = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, D))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(_.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(k.a.Configure, n),
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
                    _ = n.subtitle,
                    F = n.title,
                    E = n.titleIconCell,
                    C = n.titleIconCellSize,
                    K = n.withDetailOpen,
                    P = n.withSearchBox,
                    L = n.withTweetButton,
                    T = 'root' === g,
                    D = 'secondaryRoot' === g,
                    B = 'primaryDetail' === g,
                    I = (B && w) || (T && y),
                    R = T || (B && a),
                    V = T ? h.c : B ? h.a : void 0,
                    z = v.a.createElement(
                      O.a,
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
                        subtitle: I ? _ : void 0,
                        title: F,
                        titleDomId: V,
                        titleIconCell: E,
                        titleIconCellSize: C,
                      }),
                    ),
                    A =
                      T || (D && K)
                        ? null
                        : v.a.createElement(k.a.Configure, {
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
                            subtitle: _,
                            title: F,
                            withSearchBox: P,
                            withTweetButton: L,
                          })
                  return v.a.createElement(v.a.Fragment, null, A, z)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()(B, 'contextType', T.a),
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
      ;(r.hash = '2d462164983df8bbdf54c547f4c8f097'), (e.exports = r)
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
          return Zu
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return Z
        }),
        n.d(t, 'Arrow2x', function () {
          return $
        }),
        n.d(t, 'Arrow3x', function () {
          return ee
        }),
        n.d(t, 'Bench', function () {
          return ae
        }),
        n.d(t, 'Bench2x', function () {
          return ne
        }),
        n.d(t, 'Bench3x', function () {
          return te
        }),
        n.d(t, 'Cat', function () {
          return re
        }),
        n.d(t, 'Cat2x', function () {
          return le
        }),
        n.d(t, 'Cat3x', function () {
          return ie
        }),
        n.d(t, 'Clipboard', function () {
          return oe
        }),
        n.d(t, 'Clipboard2x', function () {
          return se
        }),
        n.d(t, 'Clipboard3x', function () {
          return ce
        }),
        n.d(t, 'CoinStairs', function () {
          return ue
        }),
        n.d(t, 'CoinStairs2x', function () {
          return de
        }),
        n.d(t, 'CoinStairs3x', function () {
          return pe
        }),
        n.d(t, 'HandCoins', function () {
          return me
        }),
        n.d(t, 'HandCoins2x', function () {
          return ge
        }),
        n.d(t, 'HandCoins3x', function () {
          return fe
        }),
        n.d(t, 'OneFinger', function () {
          return be
        }),
        n.d(t, 'OneFinger2x', function () {
          return he
        }),
        n.d(t, 'OneFinger3x', function () {
          return ye
        }),
        n.d(t, 'PaperAirplane', function () {
          return ve
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return we
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return Se
        }),
        n.d(t, 'Pricing', function () {
          return ke
        }),
        n.d(t, 'Pricing2x', function () {
          return _e
        }),
        n.d(t, 'Pricing3x', function () {
          return Fe
        }),
        n.d(t, 'Puzzle', function () {
          return Ee
        }),
        n.d(t, 'Puzzle2x', function () {
          return Ce
        }),
        n.d(t, 'Puzzle3x', function () {
          return xe
        }),
        n.d(t, 'Thumbsup', function () {
          return Oe
        }),
        n.d(t, 'Thumbsup2x', function () {
          return Ke
        }),
        n.d(t, 'Thumbsup3x', function () {
          return Pe
        }),
        n.d(t, 'TrafficLight', function () {
          return Le
        }),
        n.d(t, 'TrafficLight2x', function () {
          return Te
        }),
        n.d(t, 'TrafficLight3x', function () {
          return De
        }),
        n.d(t, 'Uturn', function () {
          return Be
        }),
        n.d(t, 'Uturn2x', function () {
          return Ie
        }),
        n.d(t, 'Uturn3x', function () {
          return Re
        })
      var r = {}
      n.r(r),
        n.d(r, 'Chat', function () {
          return Di
        }),
        n.d(r, 'Chat2x', function () {
          return Bi
        }),
        n.d(r, 'Chat3x', function () {
          return Ii
        }),
        n.d(r, 'Cog', function () {
          return Ri
        }),
        n.d(r, 'Cog2x', function () {
          return Vi
        }),
        n.d(r, 'Cog3x', function () {
          return zi
        }),
        n.d(r, 'Coin', function () {
          return Ai
        }),
        n.d(r, 'Coin2x', function () {
          return Mi
        }),
        n.d(r, 'Coin3x', function () {
          return Ui
        }),
        n.d(r, 'CoinPurse', function () {
          return Hi
        }),
        n.d(r, 'CoinPurse2x', function () {
          return Ni
        }),
        n.d(r, 'CoinPurse3x', function () {
          return ji
        }),
        n.d(r, 'Cone', function () {
          return Wi
        }),
        n.d(r, 'Cone2x', function () {
          return qi
        }),
        n.d(r, 'Cone3x', function () {
          return Gi
        }),
        n.d(r, 'Cross', function () {
          return Qi
        }),
        n.d(r, 'Cross2x', function () {
          return Xi
        }),
        n.d(r, 'Cross3x', function () {
          return Yi
        }),
        n.d(r, 'FirstAid', function () {
          return Ji
        }),
        n.d(r, 'FirstAid2x', function () {
          return Zi
        }),
        n.d(r, 'FirstAid3x', function () {
          return $i
        }),
        n.d(r, 'Heart', function () {
          return eo
        }),
        n.d(r, 'Heart2x', function () {
          return ao
        }),
        n.d(r, 'Heart3x', function () {
          return no
        }),
        n.d(r, 'LifeSaver', function () {
          return to
        }),
        n.d(r, 'LifeSaver2x', function () {
          return ro
        }),
        n.d(r, 'LifeSaver3x', function () {
          return lo
        }),
        n.d(r, 'Lightbulb', function () {
          return io
        }),
        n.d(r, 'Lightbulb2x', function () {
          return oo
        }),
        n.d(r, 'Lightbulb3x', function () {
          return so
        }),
        n.d(r, 'NoEntry', function () {
          return co
        }),
        n.d(r, 'NoEntry2x', function () {
          return uo
        }),
        n.d(r, 'NoEntry3x', function () {
          return po
        }),
        n.d(r, 'Pencil', function () {
          return mo
        }),
        n.d(r, 'Pencil2x', function () {
          return go
        }),
        n.d(r, 'Pencil3x', function () {
          return fo
        }),
        n.d(r, 'PiggyBank', function () {
          return bo
        }),
        n.d(r, 'PiggyBank2x', function () {
          return ho
        }),
        n.d(r, 'PiggyBank3x', function () {
          return yo
        }),
        n.d(r, 'Plant', function () {
          return vo
        }),
        n.d(r, 'Plant2x', function () {
          return wo
        }),
        n.d(r, 'Plant3x', function () {
          return So
        }),
        n.d(r, 'Puzzle', function () {
          return ko
        }),
        n.d(r, 'Puzzle2x', function () {
          return _o
        }),
        n.d(r, 'Puzzle3x', function () {
          return Fo
        }),
        n.d(r, 'Ribbon', function () {
          return Eo
        }),
        n.d(r, 'Ribbon2x', function () {
          return Co
        }),
        n.d(r, 'Ribbon3x', function () {
          return xo
        }),
        n.d(r, 'Spheres', function () {
          return Oo
        }),
        n.d(r, 'Spheres2x', function () {
          return Ko
        }),
        n.d(r, 'Spheres3x', function () {
          return Po
        }),
        n.d(r, 'Star', function () {
          return Lo
        }),
        n.d(r, 'Star2x', function () {
          return To
        }),
        n.d(r, 'Star3x', function () {
          return Do
        }),
        n.d(r, 'TrashCan', function () {
          return Bo
        }),
        n.d(r, 'TrashCan2x', function () {
          return Io
        }),
        n.d(r, 'TrashCan3x', function () {
          return Ro
        }),
        n.d(r, 'Wallet', function () {
          return Vo
        }),
        n.d(r, 'Wallet2x', function () {
          return zo
        }),
        n.d(r, 'Wallet3x', function () {
          return Ao
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
        S = Object.freeze({
          root: ''.concat(y, '/management'),
          perksIntro: ''.concat(y, '/management/perks_intro'),
          perksDescription: ''.concat(y, '/management/perks_description'),
          perksConfirm: ''.concat(y, '/management/perks_confirm'),
        }),
        k = ''.concat(y, '/perks_intro_examples'),
        _ = ''.concat(y, '/perks_description_examples'),
        F = ''.concat(y, '/perks_preview'),
        E = n('jHSc'),
        C = n('3XMw'),
        x = n.n(C),
        O = n('lUZE'),
        K = 'https://help.twitter.com/using-twitter/super-follows-creator',
        P = ''.concat(K, '#pricechange'),
        L = n('/yvb'),
        T = n('6s7X'),
        D = function () {
          return c.a.createElement(L.a, { icon: c.a.createElement(T.a, null), link: K, type: 'primaryText' })
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
            m = i ? c.a.createElement(O.a, { style: U.iconTwitter }) : void 0,
            f = o ? c.a.createElement(I.a, { style: U.rightControl }, c.a.createElement(D, null), r) : r,
            y = t ? c.a.createElement(R.a, { progress: t }) : void 0,
            v = c.a.createElement(I.a, { style: U.childrenWrapper }, a),
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
        U = V.a.create(function (e) {
          return {
            iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
            rightControl: { alignItems: 'center', flexDirection: 'row', gap: e.spaces.space4 },
            childrenWrapper: { flexBasis: 0, flexGrow: 1, flexShrink: 1, overflow: 'auto' },
          }
        }),
        H = n('5FtR'),
        N = n('v6aA'),
        j = x.a.g92a2343,
        W = x.a.a91bb144,
        q = function () {
          var e = Object(B.f)(),
            a = c.a.createElement(
              L.a,
              {
                onPress: function () {
                  e.push(v.submit)
                },
                type: 'primaryFilled',
              },
              W,
            )
          return c.a.createElement(M, { rightControl: a, title: j })
        },
        G = n('cHvH'),
        Q = function (e, a) {
          var n = e.children,
            t = e.style,
            r = Object(G.b)().windowWidth > V.a.theme.breakpoints.medium ? Y.marginWide : Y.marginNarrow
          return c.a.createElement(I.a, { ref: a, style: [t, r] }, n)
        },
        X = c.a.forwardRef(Q),
        Y = V.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space72 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        J = n('t62R'),
        Z = (n('KOtZ'), n('7x/C'), n('z84I'), n.p + 'Arrow.e8910965.png'),
        $ = n.p + 'Arrow@2x.8af675c5.png',
        ee = n.p + 'Arrow@3x.949d4365.png',
        ae = n.p + 'Bench.ed26a435.png',
        ne = n.p + 'Bench@2x.ef9fb7d5.png',
        te = n.p + 'Bench@3x.a306fd55.png',
        re = n.p + 'Cat.089435a5.png',
        le = n.p + 'Cat@2x.bca70155.png',
        ie = n.p + 'Cat@3x.2b225ef5.png',
        oe = n.p + 'Clipboard.540710d5.png',
        se = n.p + 'Clipboard@2x.72ca72e5.png',
        ce = n.p + 'Clipboard@3x.1b952e95.png',
        ue = n.p + 'CoinStairs.8488b245.png',
        de = n.p + 'CoinStairs@2x.34fd5855.png',
        pe = n.p + 'CoinStairs@3x.1b706305.png',
        me = n.p + 'HandCoins.fbd23965.png',
        ge = n.p + 'HandCoins@2x.c1b62b75.png',
        fe = n.p + 'HandCoins@3x.7dd5f3d5.png',
        be = n.p + 'OneFinger.6eb5d9c5.png',
        he = n.p + 'OneFinger@2x.a13e1ba5.png',
        ye = n.p + 'OneFinger@3x.7f22c175.png',
        ve = n.p + 'PaperAirplane.1ef48a05.png',
        we = n.p + 'PaperAirplane@2x.2923eb15.png',
        Se = n.p + 'PaperAirplane@3x.47e4b145.png',
        ke = n.p + 'Pricing.ec5962d5.png',
        _e = n.p + 'Pricing@2x.f8284265.png',
        Fe = n.p + 'Pricing@3x.b6cf0185.png',
        Ee = n.p + 'Puzzle.aa045515.png',
        Ce = n.p + 'Puzzle@2x.5be7ab15.png',
        xe = n.p + 'Puzzle@3x.1796b225.png',
        Oe = n.p + 'Thumbsup.f5be79d5.png',
        Ke = n.p + 'Thumbsup@2x.6d106945.png',
        Pe = n.p + 'Thumbsup@3x.6a81e6d5.png',
        Le = n.p + 'TrafficLight.11644b65.png',
        Te = n.p + 'TrafficLight@2x.5657de25.png',
        De = n.p + 'TrafficLight@3x.a5a35335.png',
        Be = n.p + 'Uturn.c8267f55.png',
        Ie = n.p + 'Uturn@2x.db3f94d5.png',
        Re = n.p + 'Uturn@3x.22f27905.png',
        Ve = n('tn7R'),
        ze = n('TIdA'),
        Ae = n('A91F'),
        Me = 400,
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
        Ne = Object(Ve.a)(He).reduce(function (e, a) {
          var n = Math.max.apply(Math, Ue)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Me * n, height: 250 * n },
              customVariants: Ue.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Me * e, height: 250 * e }
              }),
            }),
            e
          )
        }, {}),
        je = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? Me : n,
            r = Ne[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            I.a,
            { style: [We.illustration, s] },
            c.a.createElement(ze.a, {
              accessibilityLabel: '',
              aspectMode: Ae.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        We = V.a.create(function (e) {
          return { illustration: { alignSelf: 'center' } }
        }),
        qe = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            r = e.subtext
          return c.a.createElement(
            c.a.Fragment,
            null,
            t && c.a.createElement(je, { type: t, width: 311 }),
            c.a.createElement(
              J.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title2',
                style: t && Ge.headline,
                weight: 'heavy',
              },
              n,
            ),
            c.a.createElement(J.b, { align: a, color: 'gray700', style: Ge.subtext }, r),
          )
        },
        Ge = V.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space8 } }
        }),
        Qe = x.a.i84c5de8,
        Xe = x.a.d9c1174f,
        Ye = function () {
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              X,
              { style: Je.interstitial },
              c.a.createElement(qe, { headline: Qe, illustration: He.TrafficLight, subtext: Xe }),
            ),
          )
        },
        Je = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Ze = (n('jQ3i'), n('x4t0'), n('855f')),
        $e = n('WtWS'),
        ea = n('0ULw'),
        aa = function (e) {
          var a = e.items
          return c.a.createElement(
            I.a,
            { style: na.root },
            a.map(function (e) {
              return c.a.createElement(
                I.a,
                { key: e.label, style: na.item },
                c.a.createElement(J.b, { style: na.label, weight: 'bold' }, e.label),
                e.checked
                  ? c.a.createElement($e.a, { style: na.iconChecked })
                  : c.a.createElement(ea.a, { style: na.iconUnchecked }),
              )
            }),
          )
        },
        na = V.a.create(function (e) {
          return {
            root: { gap: e.spaces.space24 },
            item: { flexDirection: 'row' },
            label: { flex: 1 },
            iconChecked: { color: e.colors.green500 },
            iconUnchecked: { color: e.colors.gray200 },
          }
        }),
        ta = function () {
          return c.a.createElement(
            J.b,
            { align: 'center', color: 'gray700' },
            c.a.createElement(
              x.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              c.a.createElement(
                J.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                x.a.ebc0cbbc,
              ),
            ),
          )
        },
        ra = n('ddV6'),
        la = n.n(ra),
        ia = (n('JtPf'), n('Qavd'), ['disabled', 'label', 'onPress', 'path']),
        oa = function (e) {
          var a = e.disabled,
            n = e.label,
            t = e.onPress,
            r = e.path,
            l = b()(e, ia),
            i = Object(B.f)(),
            o = c.a.useState(!1),
            s = la()(o, 2),
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
        sa = n('CVPS'),
        ca = n.n(sa),
        ua = x.a.feb54b4f,
        da = x.a.bac156a6,
        pa = x.a.a3a20a10,
        ma = x.a.b26ae507,
        ga = x.a.a753a87f,
        fa = x.a.abfaa527,
        ba = Ze.a.getTruncatedCount(1e4),
        ha = x.a.fdd95737({ minFollowersCount: ba }),
        ya = Ze.a.getTruncatedCount(25),
        va = x.a.a0dcad86({ minTweetsCount: ya }),
        wa = x.a.c27f57ac,
        Sa = void 0 !== l ? l : (l = n('RLjm')),
        ka = function (e) {
          var a = e.user,
            n = ca()(Sa, a),
            t = (null == n ? void 0 : n.super_following_eligibility) || [],
            r = 0 === t.length,
            l = r ? He.Arrow : He.TrafficLight,
            i = r ? ua : pa,
            o = r ? da : ma,
            s = [
              { label: ha, checked: !t.includes('followers') },
              { label: va, checked: !t.includes('tweets') },
              { label: wa, checked: !t.includes('age') },
            ]
          return c.a.createElement(
            M,
            { withInfoButton: !0 },
            c.a.createElement(qe, { headline: i, illustration: l, subtext: o }),
            c.a.createElement(aa, { items: s }),
            r && c.a.createElement(ta, null),
            c.a.createElement(oa, { disabled: !r, label: ga, path: v.oneMoreThing }),
            c.a.createElement(oa, { label: fa, path: v.oneMoreThing }),
          )
        },
        _a = n('9RkS'),
        Fa = x.a.bbb89925,
        Ea = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            o = c.a.useState(i),
            s = la()(o, 2),
            u = s[0],
            d = s[1],
            p = Math.round(a * r * (u / 100))
          return c.a.createElement(
            I.a,
            { style: Ca.container },
            c.a.createElement(
              J.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              c.a.createElement(
                x.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                c.a.createElement(J.b, { weight: 'bold' }, x.a.a7dd00ea),
                c.a.createElement(
                  J.b,
                  { style: Ca.earnings, weight: 'heavy' },
                  x.a.c62c1d30({ earnings: '$'.concat(Ze.a.getTruncatedCount(p)) }),
                ),
                c.a.createElement(J.b, { color: 'green500', style: Ca.asteriskLeft }, x.a.e0fb982b),
              ),
            ),
            c.a.createElement(
              I.a,
              { style: Ca.slider },
              c.a.createElement(_a.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: Fa({ percent: u }),
                value: u,
              }),
            ),
            c.a.createElement(
              J.b,
              { color: 'green500', size: 'subtext3', style: Ca.footnote },
              c.a.createElement(
                x.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                c.a.createElement(J.b, { style: Ca.asteriskRight }, x.a.e263c38e),
              ),
            ),
          )
        },
        Ca = V.a.create(function (e) {
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
        xa = n('6iuV'),
        Oa = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        Ka = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return c.a.createElement(
            I.a,
            { style: Pa.container },
            c.a.createElement(Oa.a, { Icon: a, color: 'neutral' }),
            c.a.createElement(J.b, { size: 'headline2', style: Pa.title, weight: 'bold' }, t),
            c.a.createElement(J.b, { color: 'gray700', style: Pa.description }, n),
          )
        },
        Pa = V.a.create(function (e) {
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
        La = n('sUoZ'),
        Ta = n('witV'),
        Da = n('ACHU'),
        Ba = [
          { Icon: La.a, title: x.a.d31c5997, description: x.a.hda1e780 },
          { Icon: Ta.a, title: x.a.d08d0bb2, description: x.a.cbd8b105 },
          { Icon: Da.a, title: x.a.becb4930, description: x.a.g743ef96 },
        ],
        Ia = function () {
          return c.a.createElement(
            xa.a,
            null,
            Ba.map(function (e) {
              return c.a.createElement(Ka, g()({}, e, { key: e.title }))
            }),
          )
        },
        Ra = x.a.a6777c1b,
        Va = x.a.j5dc36d7,
        za = x.a.c45b2f06,
        Aa = x.a.hb6b432e,
        Ma = x.a.cd5cae15,
        Ua = x.a.f7239f4c,
        Ha = x.a.g8cdf707,
        Na = x.a.bff8472e,
        ja = x.a.e533715d,
        Wa = void 0 !== i ? i : (i = n('xd+q')),
        qa = function (e) {
          var a = e.user,
            n = ca()(Wa, a).legacy.followers_count
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            c.a.createElement(
              J.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ra,
            ),
            c.a.createElement(J.b, null, Va),
            c.a.createElement(
              J.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              za,
            ),
            c.a.createElement(J.b, { color: 'gray700' }, Aa),
            c.a.createElement(je, { type: He.HandCoins }),
            c.a.createElement(
              J.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ma,
            ),
            c.a.createElement(Ia, null),
            c.a.createElement(
              J.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ua,
            ),
            c.a.createElement(Ea, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            c.a.createElement(
              J.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ha,
            ),
            c.a.createElement(J.b, { color: 'gray700' }, Na),
            c.a.createElement(oa, { color: 'plum500', label: ja, path: v.eligibility }),
          )
        },
        Ga = x.a.d0fc4890,
        Qa = x.a.c64384b6,
        Xa = x.a.c3d89aca,
        Ya = function () {
          return c.a.createElement(
            M,
            { withInfoButton: !0 },
            c.a.createElement(qe, { align: 'center', headline: Ga, illustration: He.OneFinger, subtext: Qa }),
            c.a.createElement(oa, { label: Xa, path: v.completeProfile }),
          )
        },
        Ja = x.a.aa7e35ed,
        Za = x.a.f67e69bf,
        $a = function () {
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              X,
              { style: en.interstitial },
              c.a.createElement(qe, { headline: Ja, illustration: He.Uturn, subtext: Za }),
            ),
          )
        },
        en = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        an = n('tI3i'),
        nn = n.n(an),
        tn = n('FGLp'),
        rn = (n('2G9S'), n('wxEq')),
        ln = n.n(rn),
        on = function (e) {
          return ln()(void 0 !== o ? o : (o = n('l/EB')), e).__id
        },
        sn = function (e, a) {
          var n = on(a),
            t = e.get(n)
          return nn()(t, 'viewer must be defined'), t
        },
        cn = 'super_follows_application_draft',
        un = function (e, a) {
          return sn(e, a).getLinkedRecord(cn)
        },
        dn = n('6u/5'),
        pn = n.n(dn),
        mn = n('PJTX'),
        gn = n.n(mn)
      function fn(e, a) {
        var n = gn()()
        Object(tn.a)(function () {
          nn()(e, 'viewerRef must be defined'),
            pn()(n, function (n) {
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
                  h = on(a),
                  y = sn(e, a)
                if (!un(e, a)) {
                  var v = e.create(''.concat(h, ':').concat(cn), 'SuperFollowsApplicationDraft')
                  v.setValue(r, 'content_category'),
                    v.setValue(i, 'content_category_other'),
                    v.setValue(s, 'content_creation_platform'),
                    v.setValue(u, 'content_creation_platform_other'),
                    v.setValue(b, 'purpose'),
                    v.setValue(p, 'ethnicity'),
                    v.setValue(g, 'gender'),
                    y.setLinkedRecord(v, cn)
                }
              })(n, e, a)
            })
        })
      }
      function bn(e, a) {
        var n = gn()()
        return c.a.useCallback(
          function (t) {
            nn()(e, 'viewerRef must be defined'),
              pn()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = un(e, a)
                  nn()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var hn,
        yn,
        vn,
        wn,
        Sn,
        kn,
        _n,
        Fn,
        En,
        Cn,
        xn,
        On,
        Kn,
        Pn,
        Ln = n('p+r5'),
        Tn = x.a.f7997b16,
        Dn = x.a.fc00ab5b,
        Bn = x.a.c249167f,
        In = x.a.b772cd65,
        Rn = void 0 !== hn ? hn : (hn = n('xhT1')),
        Vn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ca()(Rn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = bn(r, 'content_category_other')
          return c.a.createElement(
            M,
            { title: Tn },
            c.a.createElement(Ln.a, {
              helperText: Bn,
              label: Dn,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(L.a, null, In),
          )
        },
        zn = n('fyvP'),
        An = n('csss'),
        Mn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(B.f)()
          return c.a.createElement(An.a, {
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
        jn = x.a.c365dcc5,
        Wn = x.a.bd44a8a8,
        qn = void 0 !== yn ? yn : (yn = n('JB6R')),
        Gn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ca()(qn, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = bn(r, 'content_category'),
            o = Nn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            M,
            { title: Un },
            c.a.createElement(zn.a, {
              description: Hn,
              label: Hn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(Mn, { helpText: Wn, label: jn, path: v.submitCategoriesOther }),
          )
        },
        Qn = x.a.d94a9a17,
        Xn = x.a.a35394b3,
        Yn = [
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
        Jn = void 0 !== vn ? vn : (vn = n('H1we')),
        Zn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ca()(Jn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = bn(r, 'ethnicity'),
            o = Yn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            M,
            { title: Qn },
            c.a.createElement(zn.a, {
              description: Xn,
              label: Xn,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        $n = x.a.a8d0108d,
        et = x.a.a35394b3,
        at = [
          x.a.de32365f,
          x.a.b6ab31bd,
          x.a.ffc23188,
          x.a.h1cc7091,
          x.a.hca27829,
          x.a.b3af7344,
          x.a.he3f1435,
          x.a.c3c16abb,
        ],
        nt = void 0 !== wn ? wn : (wn = n('VG5i')),
        tt = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ca()(nt, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = bn(r, 'gender'),
            o = at.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            M,
            { title: $n },
            c.a.createElement(zn.a, {
              description: et,
              label: et,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        rt = x.a.da8ea7da,
        lt = x.a.d7081f91,
        it = x.a.j349548f,
        ot = x.a.b772cd65,
        st = void 0 !== Sn ? Sn : (Sn = n('+OUG')),
        ct = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ca()(st, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = bn(r, 'content_creation_platform_other')
          return c.a.createElement(
            M,
            { title: rt },
            c.a.createElement(Ln.a, {
              helperText: it,
              label: lt,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(L.a, null, ot),
          )
        },
        ut = x.a.da8ea7da,
        dt = x.a.d4062c9a,
        pt = [x.a.a3021317, x.a.eb4a600d, x.a.d4d74bb3, x.a.fc738909, x.a.d8552c1a, x.a.ca07aa46],
        mt = x.a.c365dcc5,
        gt = x.a.bd44a8a8,
        ft = void 0 !== kn ? kn : (kn = n('xnrs')),
        bt = function (e) {
          var a,
            n,
            t = e.viewer,
            r = ca()(ft, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = bn(r, 'content_creation_platform'),
            o = pt.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            M,
            { title: ut },
            c.a.createElement(zn.a, {
              description: dt,
              label: dt,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(Mn, { helpText: gt, label: mt, path: v.submitPlatformsOther }),
          )
        },
        ht = (n('tVqn'), n('uFXj'), x.a.f4f4dd6f),
        yt = x.a.f448cbcb,
        vt = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? ht : 'optional' === n ? yt : void 0
          return c.a.createElement(
            I.a,
            { style: wt.container },
            c.a.createElement(J.b, { size: 'headline1', weight: 'heavy' }, a),
            r && c.a.createElement(J.b, { color: t, size: 'subtext2', style: wt.subtext }, r),
          )
        },
        wt = V.a.create(function (e) {
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
        _t = n('HvW7'),
        Ft = n.n(_t),
        Et = x.a.e873f0ae,
        Ct = x.a.f095a24a,
        xt = x.a.i5f7b6b8,
        Ot = x.a.d1f6d336,
        Kt = x.a.f7997b16,
        Pt = x.a.c144fa52,
        Lt = x.a.f1bf337d,
        Tt = x.a.da8ea7da,
        Dt = x.a.d4062c9a,
        Bt = x.a.e963d587,
        It = x.a.ede0ac3e,
        Rt = x.a.ffb6cb88,
        Vt = x.a.b2159e8e,
        zt = x.a.feacb49d,
        At = x.a.je17c987,
        Mt = x.a.d94a9a17,
        Ut = x.a.a8d0108d,
        Ht = x.a.gfc80842,
        Nt = void 0 !== _n ? _n : (_n = n('pLb/')),
        jt = void 0 !== Fn ? Fn : (Fn = n('3qCL')),
        Wt = void 0 !== En ? En : (En = n('AyUU')),
        qt = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i,
            o,
            s = e.user,
            u = e.viewer,
            d = ca()(Nt, s),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = ca()(jt, u),
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
            k = bn(m, 'purpose'),
            _ = Ft()(Wt),
            F = la()(_, 2),
            E = F[0],
            C = F[1]
          return c.a.createElement(
            M,
            { withInfoButton: !0 },
            c.a.createElement(qe, { headline: Et, illustration: He.Clipboard, subtext: Ct }),
            c.a.createElement(vt, { title: xt }),
            c.a.createElement(J.b, null, Ot),
            p && c.a.createElement(St.a, { screenName: p }),
            c.a.createElement(vt, { title: Kt, type: 'required' }),
            c.a.createElement(J.b, { color: 'gray700' }, Pt),
            c.a.createElement(Mn, { description: Object(kt.a)(f, !0), label: Lt, path: v.submitCategories }),
            c.a.createElement(vt, { title: Tt, type: 'required' }),
            c.a.createElement(J.b, { color: 'gray700' }, Dt),
            c.a.createElement(Mn, { description: Object(kt.a)(b, !0), label: Bt, path: v.submitPlatforms }),
            c.a.createElement(vt, { title: It, type: 'required' }),
            c.a.createElement(Ln.a, {
              helperText: Vt,
              label: Rt,
              name: 'plannedUsage',
              onChange: function (e) {
                k(e.currentTarget.value)
              },
              value: h,
            }),
            c.a.createElement(vt, { title: zt, type: 'optional' }),
            c.a.createElement(J.b, { color: 'gray700' }, At),
            c.a.createElement(Mn, { description: Object(kt.a)(y, !0), label: Mt, path: v.submitEthnicities }),
            c.a.createElement(Mn, { description: Object(kt.a)(w, !0), label: Ut, path: v.submitGenders }),
            c.a.createElement(ta, null),
            c.a.createElement(oa, {
              disabled: !S || C,
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
        Gt = x.a.d3d6c52c,
        Qt = x.a.c53e9129,
        Xt = function () {
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            c.a.createElement(
              X,
              { style: Yt.interstitial },
              c.a.createElement(qe, { headline: Gt, illustration: He.PaperAirplane, subtext: Qt }),
            ),
          )
        },
        Yt = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Jt = x.a.j274e6aa,
        Zt = x.a.d7f65127,
        $t = function () {
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              X,
              { style: er.interstitial },
              c.a.createElement(qe, { headline: Jt, illustration: He.Bench, subtext: Zt }),
            ),
          )
        },
        er = V.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        ar = void 0 !== Cn ? Cn : (Cn = n('o/nB')),
        nr = void 0 !== xn ? xn : (xn = n('lZLw')),
        tr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = c.a.useContext(N.a).featureSwitches,
            r = ca()(ar, a),
            l = ca()(nr, n)
          return (
            fn(l),
            t.isTrue('super_follow_web_application_enabled')
              ? null == l.super_follows_application_draft
                ? c.a.createElement(H.a, { to: y })
                : c.a.createElement(
                    B.d,
                    null,
                    c.a.createElement(B.b, { exact: !0, path: v.eligibility }, c.a.createElement(ka, { user: r })),
                    c.a.createElement(B.b, { exact: !0, path: v.oneMoreThing }, c.a.createElement(Ya, null)),
                    c.a.createElement(B.b, { exact: !0, path: v.completeProfile }, c.a.createElement(q, null)),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submit },
                      c.a.createElement(qt, { user: r, viewer: l }),
                    ),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submitCategories },
                      c.a.createElement(Gn, { viewer: l }),
                    ),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submitCategoriesOther },
                      c.a.createElement(Vn, { viewer: l }),
                    ),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submitPlatforms },
                      c.a.createElement(bt, { viewer: l }),
                    ),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submitPlatformsOther },
                      c.a.createElement(ct, { viewer: l }),
                    ),
                    c.a.createElement(
                      B.b,
                      { exact: !0, path: v.submitEthnicities },
                      c.a.createElement(Zn, { viewer: l }),
                    ),
                    c.a.createElement(B.b, { exact: !0, path: v.submitGenders }, c.a.createElement(tt, { viewer: l })),
                    c.a.createElement(B.b, { exact: !0, path: v.submitted }, c.a.createElement(Xt, null)),
                    c.a.createElement(B.b, { exact: !0, path: v.waitlisted }, c.a.createElement($t, null)),
                    c.a.createElement(B.b, { exact: !0, path: v.rejected }, c.a.createElement($a, null)),
                    c.a.createElement(B.b, { path: v.root }, c.a.createElement(qa, { user: r })),
                  )
              : c.a.createElement(Ye, null)
          )
        },
        rr = (n('849X'), n('TJCb'), n('KqXw'), n('MvUL'), n('eb3s')),
        lr = x.a.af4d0a80,
        ir = x.a.c701e5cc,
        or = x.a.a649778b,
        sr = x.a.d4ab68e2,
        cr = function (e) {
          var a = e.onNavigation,
            n = e.shouldBlockNavigation,
            t = Object(B.f)(),
            r = c.a.useState(void 0),
            l = la()(r, 2),
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
            ? c.a.createElement(rr.a, {
                cancelButtonLabel: or,
                confirmButtonLabel: sr,
                confirmButtonType: 'destructiveFilled',
                headline: lr,
                onCancel: u,
                onConfirm: d,
                text: ir,
              })
            : null
        },
        ur =
          (n('ho0z'),
          function (e) {
            var a = e.children,
              n = e.style
            return c.a.createElement(
              I.a,
              { style: [mr.frame, n] },
              c.a.createElement(
                I.a,
                { style: mr.browserBar },
                c.a.createElement(
                  I.a,
                  { style: mr.browserBarButtons },
                  c.a.createElement(I.a, { style: mr.browserBarButton }),
                  c.a.createElement(I.a, { style: mr.browserBarButton }),
                  c.a.createElement(I.a, { style: mr.browserBarButton }),
                ),
                c.a.createElement(
                  I.a,
                  { style: mr.browserBarUrlInputWrapper },
                  c.a.createElement(I.a, { style: mr.browserBarUrlInput }),
                ),
              ),
              a,
            )
          }),
        dr = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(I.a, { style: n }, c.a.createElement(I.a, { style: mr.content }, a))
        },
        pr = function (e) {
          var a = e.children,
            n = e.style
          return Object(G.b)().windowWidth > V.a.theme.breakpoints.medium
            ? c.a.createElement(ur, { style: n }, c.a.createElement(dr, { style: mr.contentWide }, a))
            : c.a.createElement(dr, { style: n }, a)
        },
        mr = V.a.create(function (e) {
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
        gr = n('2fsM'),
        fr = function (e) {
          return c.a.createElement(
            pr,
            null,
            c.a.createElement(I.a, { style: br.browserContent }, c.a.createElement(gr.a, e)),
          )
        },
        br = V.a.create(function (e) {
          return { browserContent: { paddingBottom: e.spaces.space48 } }
        }),
        hr = ['label', 'path'],
        yr = function (e) {
          var a = e.label,
            n = e.path,
            t = b()(e, hr),
            r = Object(B.f)()
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
        vr = x.a.hf6f2913,
        wr = x.a.i859a9d3,
        Sr = V.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        kr = function (e) {
          var a = e.path,
            n = e.style
          return c.a.createElement(
            I.a,
            { style: [Sr.root, n] },
            c.a.createElement(J.b, { size: 'headline2', weight: 'heavy' }, vr),
            c.a.createElement(yr, { label: wr, path: a }),
          )
        },
        _r = n('0yYu'),
        Fr = 'super_follows_onboarding_draft',
        Er = function (e, a) {
          return sn(e, a).getLinkedRecord(Fr)
        }
      function Cr(e, a) {
        var n = gn()()
        Object(tn.a)(function () {
          nn()(e, 'viewerRef must be defined'),
            pn()(n, function (n) {
              !(function (e, a) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  t = n.creator_intro,
                  r = void 0 === t ? null : t,
                  l = n.description,
                  i = void 0 === l ? null : l,
                  o = n.selected_price,
                  s = void 0 === o ? null : o,
                  c = on(a),
                  u = sn(e, a)
                if (!Er(e, a)) {
                  var d = e.create(''.concat(c, ':').concat(Fr), 'SuperFollowsOnboardingDraft')
                  d.setValue(r, 'creator_intro'),
                    d.setValue(i, 'description'),
                    d.setValue(s, 'selected_price'),
                    u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                }
              })(n, e, a)
            })
        })
      }
      function xr(e, a) {
        var n = gn()()
        return c.a.useCallback(
          function (t) {
            nn()(e, 'viewerId must be defined'),
              pn()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Er(e, a)
                  nn()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Or,
        Kr,
        Pr,
        Lr,
        Tr,
        Dr,
        Br,
        Ir,
        Rr,
        Vr,
        zr,
        Ar,
        Mr,
        Ur,
        Hr,
        Nr,
        jr,
        Wr,
        qr,
        Gr,
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
        Sl,
        kl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ca()(void 0 !== On ? On : (On = n('krsm')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.creator_intro) && void 0 !== a
            ? a
            : ''
        },
        _l = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ca()(void 0 !== Kn ? Kn : (Kn = n('ZaCQ')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.description) && void 0 !== a
            ? a
            : ''
        },
        Fl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ca()(void 0 !== Pn ? Pn : (Pn = n('K7/K')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        El = x.a.iba08a94,
        Cl = x.a.ef354e83,
        xl = void 0 !== Or ? Or : (Or = n('UFp0')),
        Ol = void 0 !== Kr ? Kr : (Kr = n('NmgE')),
        Kl = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = ca()(xl, t),
            i = ca()(Ol, r),
            o = (null == l ? void 0 : l.legacy) || {},
            s = o.name,
            u = o.profile_image_url_https,
            d = o.protected,
            p = o.screen_name,
            m = o.verified,
            g = null !== (a = kl(i)) && void 0 !== a ? a : '',
            f = null !== (n = _l(i)) && void 0 !== n ? n : ''
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(X, { style: Pl.interstitial }, c.a.createElement(qe, { headline: El, subtext: Cl })),
            c.a.createElement(_r.a, null),
            c.a.createElement(X, { style: Pl.previewCallout }, c.a.createElement(kr, { path: F })),
            c.a.createElement(
              I.a,
              { style: Pl.summaryFramed },
              c.a.createElement(fr, {
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
        Pl = V.a.create(function (e) {
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
        Ll = x.a.hf6f2913,
        Tl = void 0 !== Pr ? Pr : (Pr = n('MvEh')),
        Dl = void 0 !== Lr ? Lr : (Lr = n('U5ka')),
        Bl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = ca()(Tl, a),
            r = ca()(Dl, n)
          return c.a.createElement(M, { title: Ll, withInfoButton: !0 }, c.a.createElement(Kl, { user: t, viewer: r }))
        },
        Il = n('44Bp'),
        Rl = ['style'],
        Vl = function (e, a) {
          var n = e.style,
            t = b()(e, Rl)
          return c.a.createElement(
            pr,
            { style: n },
            c.a.createElement(c.a.Fragment, null, c.a.createElement(Il.a, g()({}, t, { ref: a }))),
          )
        },
        zl = c.a.forwardRef(Vl),
        Al = x.a.gf32cca1,
        Ml = x.a.j8ba99b3,
        Ul = x.a.j679dcda,
        Hl = void 0 !== Tr ? Tr : (Tr = n('yjSu')),
        Nl = void 0 !== Dr ? Dr : (Dr = n('RTdz')),
        jl = function (e, a) {
          var n = e.autoFocus,
            t = e.descriptionMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(tn.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = ca()(Hl, r),
            s = ca()(Nl, l),
            u = o.legacy,
            d = u.profile_image_url_https,
            p = u.screen_name,
            m = _l(s),
            g = xr(s, 'description')
          return (
            nn()('string' == typeof d, 'imageUrl must be defined'),
            nn()('string' == typeof p, 'screenName must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(X, { style: ql.interstitial }, c.a.createElement(qe, { headline: Al, subtext: Ml })),
              c.a.createElement(X, { style: ql.examplesLink }, c.a.createElement(yr, { label: Ul, path: _ })),
              c.a.createElement(_r.a, null),
              c.a.createElement(X, { style: ql.previewCallout }, c.a.createElement(kr, { path: F })),
              c.a.createElement(zl, {
                autoFocus: n,
                imageUrl: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                screenName: p,
                style: ql.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(I.a, { ref: i }),
            )
          )
        },
        Wl = c.a.forwardRef(jl),
        ql = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Gl =
          (n('hBpG'),
          n('5BYb'),
          function (e) {
            var a, t
            return null !==
              (a =
                null === (t = ca()(void 0 !== Ir ? Ir : (Ir = n('WDhg')), e).super_follow_creator_benefits) ||
                void 0 === t
                  ? void 0
                  : t.creator_intro) && void 0 !== a
              ? a
              : ''
          }),
        Ql = function (e) {
          var a,
            t,
            r,
            l = (
              null !==
                (a =
                  null === (t = ca()(void 0 !== Rr ? Rr : (Rr = n('G/nI')), e).super_follow_creator_benefits) ||
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
        Xl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = ca()(void 0 !== Vr ? Vr : (Vr = n('dGIC')), e).super_follow_creator_price_metadata) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        Yl = (n('jwue'), n('+oxZ'), void 0 !== zr ? zr : (zr = n('rwq4'))),
        Jl = void 0 !== Ar ? Ar : (Ar = n('E9LA')),
        Zl = function (e, a) {
          var t = a.creatorIntro,
            r = a.description,
            l = ca()(Yl, e),
            i = (function (e) {
              var a
              return null === (a = ca()(void 0 !== Br ? Br : (Br = n('lWeI')), e).super_follow_creator_benefits) ||
                void 0 === a
                ? void 0
                : a.__id
            })(l),
            o = Gl(l),
            s = Ql(l),
            u = t || o,
            d = r || s,
            p = Ft()(Jl),
            m = la()(p, 2),
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
                      nn()(i, 'benefitsId must be specified')
                      var a = e.get(i)
                      if (
                        (nn()(a, 'benefitsRecord must be specified'),
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
        $l = x.a.cd5cae15,
        ei = x.a.e36287c6,
        ai = x.a.b772cd65,
        ni = void 0 !== Mr ? Mr : (Mr = n('kz1e')),
        ti = void 0 !== Ur ? Ur : (Ur = n('M3aw')),
        ri = function (e) {
          var a = e.user,
            n = e.viewer,
            t = ca()(ni, a),
            r = ca()(ti, n),
            l = Ql(t),
            i = _l(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = Zl(t, { description: i }),
            u = la()(s, 2),
            d = u[0],
            p = u[1],
            m = { disabled: !o || p, label: ai, onPress: d, path: S.root, type: 'primaryFilled' },
            f = c.a.createElement(oa, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            M,
            { rightControl: f, subtitle: ei, title: $l },
            c.a.createElement(Wl, { autoFocus: !0, descriptionMaxLength: 140, user: t, viewer: r }),
          )
        },
        li = n('MAc7'),
        ii = ['style'],
        oi = function (e, a) {
          var n = e.style,
            t = b()(e, ii)
          return c.a.createElement(pr, { style: n }, c.a.createElement(li.a, g()({}, t, { ref: a })))
        },
        si = c.a.forwardRef(oi),
        ci = x.a.j3253319,
        ui = x.a.h1e80993,
        di = x.a.j679dcda,
        pi = void 0 !== Hr ? Hr : (Hr = n('hGtx')),
        mi = void 0 !== Nr ? Nr : (Nr = n('DWSt')),
        gi = function (e, a) {
          var n = e.autoFocus,
            t = e.introMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(tn.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = ca()(pi, r),
            s = ca()(mi, l),
            u = o.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m = kl(s),
            g = xr(s, 'creator_intro')
          return (
            nn()('string' == typeof p, 'imageUrl must be defined'),
            nn()('string' == typeof d, 'name must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(X, { style: bi.interstitial }, c.a.createElement(qe, { headline: ci, subtext: ui })),
              c.a.createElement(X, { style: bi.examplesLink }, c.a.createElement(yr, { label: di, path: k })),
              c.a.createElement(_r.a, null),
              c.a.createElement(X, { style: bi.previewCallout }, c.a.createElement(kr, { path: F })),
              c.a.createElement(si, {
                autoFocus: n,
                imageUrl: p,
                name: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                style: bi.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(I.a, { ref: i }),
            )
          )
        },
        fi = c.a.forwardRef(gi),
        bi = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        hi = x.a.cd5cae15,
        yi = x.a.c0348963,
        vi = x.a.b772cd65,
        wi = void 0 !== jr ? jr : (jr = n('oyMe')),
        Si = void 0 !== Wr ? Wr : (Wr = n('RL7R')),
        ki = function (e) {
          var a = e.user,
            n = e.viewer,
            t = ca()(wi, a),
            r = ca()(Si, n),
            l = Gl(t),
            i = kl(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = Zl(t, { creatorIntro: i }),
            u = la()(s, 2),
            d = u[0],
            p = u[1],
            m = { disabled: !o || p, label: vi, onPress: d, path: S.root, type: 'primaryFilled' },
            f = c.a.createElement(oa, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            M,
            { rightControl: f, subtitle: yi, title: hi },
            c.a.createElement(fi, { autoFocus: !0, introMaxLength: 140, user: t, viewer: r }),
          )
        },
        _i = n('Nh1N'),
        Fi = n('yoO3'),
        Ei = n('7FtF'),
        Ci = n('PCeD'),
        xi = x.a.be103b84,
        Oi = function () {
          return c.a.createElement(
            I.a,
            { style: Ki.root },
            c.a.createElement($e.a, { style: Ki.icon }),
            c.a.createElement(J.b, { size: 'subtext2', weight: 'bold' }, xi),
          )
        },
        Ki = V.a.create(function (e) {
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
        Pi = function (e) {
          var a = e.children,
            n = e.headline,
            t = e.rightControl
          return c.a.createElement(
            I.a,
            { style: Li.root },
            c.a.createElement(
              I.a,
              { style: Li.header },
              c.a.createElement(
                J.b,
                {
                  accessibilityLevel: 4,
                  accessibilityRole: 'heading',
                  size: 'headline2',
                  style: Li.headline,
                  weight: 'heavy',
                },
                n,
              ),
              a,
            ),
            t,
          )
        },
        Li = V.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        Ti = n('4zmP'),
        Di = n.p + 'Chat.62494e65.png',
        Bi = n.p + 'Chat@2x.f6eeca05.png',
        Ii = n.p + 'Chat@3x.dd8438c5.png',
        Ri = n.p + 'Cog.788d3515.png',
        Vi = n.p + 'Cog@2x.3528d165.png',
        zi = n.p + 'Cog@3x.e4185e95.png',
        Ai = n.p + 'Coin.684ea185.png',
        Mi = n.p + 'Coin@2x.9e020695.png',
        Ui = n.p + 'Coin@3x.d5ecbc95.png',
        Hi = n.p + 'CoinPurse.5e7e5f25.png',
        Ni = n.p + 'CoinPurse@2x.62abfad5.png',
        ji = n.p + 'CoinPurse@3x.6b9f5d05.png',
        Wi = n.p + 'Cone.e7e68c95.png',
        qi = n.p + 'Cone@2x.94d66a15.png',
        Gi = n.p + 'Cone@3x.f4718655.png',
        Qi = n.p + 'Cross.eed0ff55.png',
        Xi = n.p + 'Cross@2x.68249435.png',
        Yi = n.p + 'Cross@3x.59595055.png',
        Ji = n.p + 'FirstAid.962ae7e5.png',
        Zi = n.p + 'FirstAid@2x.09640055.png',
        $i = n.p + 'FirstAid@3x.b6884b15.png',
        eo = n.p + 'Heart.a7bdca85.png',
        ao = n.p + 'Heart@2x.a3108ce5.png',
        no = n.p + 'Heart@3x.2866f2f5.png',
        to = n.p + 'LifeSaver.19af1fb5.png',
        ro = n.p + 'LifeSaver@2x.5f9465a5.png',
        lo = n.p + 'LifeSaver@3x.3cde1ca5.png',
        io = n.p + 'Lightbulb.632a0de5.png',
        oo = n.p + 'Lightbulb@2x.ea0a7dc5.png',
        so = n.p + 'Lightbulb@3x.d47fac75.png',
        co = n.p + 'NoEntry.89a117a5.png',
        uo = n.p + 'NoEntry@2x.6460d275.png',
        po = n.p + 'NoEntry@3x.cf8e9465.png',
        mo = n.p + 'Pencil.6ac7a9a5.png',
        go = n.p + 'Pencil@2x.e6d394c5.png',
        fo = n.p + 'Pencil@3x.7e45c2e5.png',
        bo = n.p + 'PiggyBank.571af825.png',
        ho = n.p + 'PiggyBank@2x.f6b3cb15.png',
        yo = n.p + 'PiggyBank@3x.f166bc15.png',
        vo = n.p + 'Plant.2e93bbb5.png',
        wo = n.p + 'Plant@2x.5660c145.png',
        So = n.p + 'Plant@3x.60b66855.png',
        ko = n.p + 'Puzzle.59175915.png',
        _o = n.p + 'Puzzle@2x.d2394395.png',
        Fo = n.p + 'Puzzle@3x.ed9bd735.png',
        Eo = n.p + 'Ribbon.a0d66a65.png',
        Co = n.p + 'Ribbon@2x.d981e095.png',
        xo = n.p + 'Ribbon@3x.d6c8e505.png',
        Oo = n.p + 'Spheres.c33c7b95.png',
        Ko = n.p + 'Spheres@2x.6b6732f5.png',
        Po = n.p + 'Spheres@3x.5e58c985.png',
        Lo = n.p + 'Star.2714eb95.png',
        To = n.p + 'Star@2x.25a57fd5.png',
        Do = n.p + 'Star@3x.206f9d85.png',
        Bo = n.p + 'TrashCan.7ed17045.png',
        Io = n.p + 'TrashCan@2x.79c8ba35.png',
        Ro = n.p + 'TrashCan@3x.91184ba5.png',
        Vo = n.p + 'Wallet.0ca99435.png',
        zo = n.p + 'Wallet@2x.d3b05545.png',
        Ao = n.p + 'Wallet@3x.90c942f5.png',
        Mo = [1, 2, 3],
        Uo = Object.freeze({
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
        Ho = Object(Ve.a)(Uo),
        No = Ho.reduce(function (e, a) {
          var n = Math.max.apply(Math, Mo)
          return (
            (e[a] = {
              aspectRatio: 1,
              image: { url: r[a], width: 36 * n, height: 36 * n },
              customVariants: Mo.map(function (e) {
                return { uri: r[a + (1 !== e ? ''.concat(e, 'x') : '')], width: 36 * e, height: 36 * e }
              }),
            }),
            e
          )
        }, {}),
        jo = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? 36 : n,
            r = No[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            I.a,
            { style: s },
            c.a.createElement(ze.a, {
              accessibilityLabel: '',
              aspectMode: Ae.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        Wo = function (e) {
          var a = e.children,
            n = e.childrenStyle,
            t = e.headline,
            r = e.illustration,
            l = e.rightControl
          return c.a.createElement(
            I.a,
            { style: qo.root },
            r && c.a.createElement(jo, { type: r, width: 36 }),
            c.a.createElement(
              I.a,
              { style: qo.header },
              c.a.createElement(
                J.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: qo.headline,
                  weight: 'heavy',
                },
                t,
              ),
              l,
            ),
            c.a.createElement(I.a, { style: n }, a),
          )
        },
        qo = V.a.create(function (e) {
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
        Go = ['$fragmentType'],
        Qo = x.a.a6777c1b,
        Xo = x.a.a384fda0,
        Yo = x.a.i4313618,
        Jo = x.a.c0348963,
        Zo = x.a.ic624ab2,
        $o = x.a.ifc9b709,
        es = x.a.b08bbeb4,
        as = x.a.ia9c37c4,
        ns = x.a.fb1e4eb6,
        ts = x.a.be54a312,
        rs = x.a.cca48545,
        ls = x.a.de67bc6e,
        is = x.a.a46cead5,
        os = x.a.idd8ae44,
        ss = x.a.b28a1b48,
        cs = x.a.f2df375b,
        us = x.a.f3ce76c0,
        ds = x.a.i8982e7e,
        ps = x.a.ca5ca5ed,
        ms = x.a.abd845fd,
        gs = x.a.i859a9d3,
        fs = x.a.d14c7bbc,
        bs = x.a.g867481d,
        hs = x.a.f66d24be,
        ys = x.a.g5925628,
        vs = void 0 !== qr ? qr : (qr = n('EM6u')),
        ws = void 0 !== Gr ? Gr : (Gr = n('oNwH')),
        Ss = function (e) {
          var a,
            n,
            t,
            r = e.priceOfferings,
            l = e.user,
            i = Object(B.g)(),
            o = ca()(vs, r),
            s = (o.$fragmentType, b()(o, Go)),
            u = ca()(ws, l),
            d = Gl(u),
            p = Ql(u),
            m = null !== (a = Xl(u)) && void 0 !== a ? a : 'offer2',
            g = null !== (n = u.legacy.profile_image_url_https) && void 0 !== n ? n : void 0,
            f = null !== (t = u.legacy.screen_name) && void 0 !== t ? t : void 0,
            h = c.a.createElement(yr, { label: ps, path: S.perksConfirm, size: 'subtext1' }),
            y = c.a.createElement(oa, { label: ms, path: S.perksIntro, size: 'small', type: 'primaryOutlined' }),
            v = c.a.createElement(oa, { label: ms, path: S.perksDescription, size: 'small', type: 'primaryOutlined' })
          return c.a.createElement(
            Fi.a,
            null,
            c.a.createElement(
              Ei.a,
              { location: i, screenType: 'secondaryDetail', title: Qo },
              c.a.createElement(
                I.a,
                { style: ks.title },
                c.a.createElement(
                  J.b,
                  { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                  Qo,
                ),
                c.a.createElement(Oi, null),
              ),
              c.a.createElement(_r.a, null),
              c.a.createElement(
                Wo,
                { childrenStyle: ks.benefits, headline: Xo, illustration: Uo.Ribbon, rightControl: h },
                c.a.createElement(J.b, { color: 'gray700' }, Yo),
                c.a.createElement(
                  Pi,
                  { headline: Jo, rightControl: y },
                  c.a.createElement(Ci.a, { imageUrl: g, screenName: f, value: d }),
                ),
                c.a.createElement(
                  Pi,
                  { headline: Zo, rightControl: v },
                  c.a.createElement(Ci.a, { imageUrl: g, screenName: f, value: p }),
                ),
                c.a.createElement(Pi, { headline: $o }, c.a.createElement(J.b, { color: 'gray700' }, es)),
              ),
              c.a.createElement(_r.a, null),
              c.a.createElement(
                Wo,
                { childrenStyle: ks.other, headline: as, illustration: Uo.PiggyBank },
                c.a.createElement(J.b, { color: 'gray700' }, ns),
                c.a.createElement(J.b, { size: 'headline2', weight: 'heavy' }, ts({ price: s[m] })),
                c.a.createElement(Ti.a, { Icon: _i.a, action: { label: gs, link: P }, headline: rs, text: ls }),
              ),
              c.a.createElement(_r.a, null),
              c.a.createElement(
                Wo,
                { childrenStyle: ks.other, headline: is, illustration: Uo.Chat },
                c.a.createElement(J.b, { color: 'gray700' }, os),
                c.a.createElement(
                  I.a,
                  { style: ks.buttons },
                  c.a.createElement(
                    L.a,
                    {
                      dominantColor: '#5865F2',
                      link: 'https://t.co/jPqvg6tFrDJG',
                      style: ks.button,
                      type: 'onMediaDominantColorFilled',
                    },
                    fs,
                  ),
                ),
              ),
              c.a.createElement(_r.a, null),
              c.a.createElement(
                Wo,
                { childrenStyle: ks.other, headline: ss, illustration: Uo.Lightbulb },
                c.a.createElement(J.b, { color: 'gray700' }, cs),
                c.a.createElement(
                  I.a,
                  { style: ks.buttons },
                  c.a.createElement(
                    L.a,
                    { link: 'https://t.co/RL2NN3bEVkes', style: ks.button, type: 'primaryOutlined' },
                    bs,
                  ),
                ),
              ),
              c.a.createElement(_r.a, null),
              c.a.createElement(
                Wo,
                { childrenStyle: ks.other, headline: us, illustration: Uo.LifeSaver },
                c.a.createElement(J.b, { color: 'gray700' }, ds),
                c.a.createElement(
                  I.a,
                  { style: ks.buttons },
                  c.a.createElement(L.a, { link: K, style: ks.button, type: 'primaryOutlined' }, hs),
                  c.a.createElement(
                    L.a,
                    {
                      link: 'https://help.twitter.com/forms/paid-features/superfollows',
                      style: ks.button,
                      type: 'primaryOutlined',
                    },
                    ys,
                  ),
                ),
              ),
            ),
          )
        },
        ks = V.a.create(function (e) {
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
        _s = void 0 !== Qr ? Qr : (Qr = n('N6s9')),
        Fs = void 0 !== Xr ? Xr : (Xr = n('h3lO')),
        Es = function (e) {
          var a = e.rootPath,
            n = e.user,
            t = e.viewer,
            r = ca()(_s, n),
            l = ca()(Fs, t),
            i = Gl(r),
            o = Ql(r),
            s = Xl(r),
            u = kl(l),
            d = _l(l),
            p = Fl(l),
            m = xr(l, 'creator_intro'),
            g = xr(l, 'description'),
            f = xr(l, 'selected_price')
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
        Cs = void 0 !== Yr ? Yr : (Yr = n('MXCg')),
        xs = void 0 !== Jr ? Jr : (Jr = n('mEFY')),
        Os = void 0 !== Zr ? Zr : (Zr = n('d8Sa')),
        Ks = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(N.a).featureSwitches,
            l = ca()(Cs, a),
            i = ca()(xs, n),
            o = ca()(Os, t),
            s = Gl(i),
            u = Ql(i),
            d = Xl(i),
            p = Es({ rootPath: S.root, user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (Cr(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_edit_perks_enabled'))
          )
            throw new Error('Super Follows management is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(H.a, { to: y })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(cr, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  B.d,
                  null,
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: S.perksIntro },
                    c.a.createElement(ki, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: S.perksDescription },
                    c.a.createElement(ri, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: S.perksConfirm },
                    c.a.createElement(Bl, { user: i, viewer: o }),
                  ),
                  c.a.createElement(B.b, { path: S.root }, c.a.createElement(Ss, { priceOfferings: l, user: i })),
                ),
              )
        },
        Ps = x.a.b422cb62,
        Ls = x.a.f08705e0,
        Ts = x.a.e2cd700f,
        Ds = x.a.fbfd7397,
        Bs = x.a.c1df579e,
        Is = x.a.d8637c96,
        Rs = x.a.b92892dc,
        Vs = x.a.b123a502,
        zs = void 0 !== $r ? $r : ($r = n('wQp3')),
        As = void 0 !== el ? el : (el = n('tfBr')),
        Ms = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = ca()(zs, n),
            l = ca()(As, t),
            i = r.stripe_account_status,
            o = kl(l),
            s = _l(l),
            u = Fl(l),
            d = [
              { label: Is, checked: !!o && !!s },
              { label: Rs, checked: !!u },
              { label: Vs, checked: 'Completed' === i },
            ],
            p = d.some(function (e) {
              return e.checked
            }),
            m = c.a.createElement(oa, { label: Bs, path: w.perksIntro, size: 'small', type: 'primaryFilled' })
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
              X,
              { style: Us.interstitial },
              c.a.createElement(qe, {
                headline: p ? Ts : Ps,
                illustration: p ? He.Puzzle : He.Cat,
                subtext: p ? Ds : Ls,
              }),
            ),
            c.a.createElement(X, { style: Us.checks }, c.a.createElement(aa, { items: d })),
          )
        },
        Us = V.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        Hs = n('hG8M'),
        Ns = ['style'],
        js = function (e) {
          var a = e.style,
            n = b()(e, Ns)
          return c.a.createElement(
            pr,
            { style: a },
            c.a.createElement(Hs.a, g()({ style: Ws.superFollowsDemoBadgeHeader }, n)),
          )
        },
        Ws = V.a.create(function (e) {
          return { superFollowsDemoBadgeHeader: { alignSelf: 'center', marginBottom: e.spaces.space16 } }
        }),
        qs = x.a.cda6bb6d,
        Gs = x.a.a15b98ec,
        Qs = void 0 !== al ? al : (al = n('mDly')),
        Xs = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i = e.user,
            o = ca()(Qs, i),
            s = null !== (a = null == o ? void 0 : o.legacy.profile_image_url_https) && void 0 !== a ? a : void 0,
            u = null !== (n = null == o ? void 0 : o.legacy.protected) && void 0 !== n && n,
            d = null !== (t = null == o ? void 0 : o.legacy.verified) && void 0 !== t && t,
            p = null !== (r = null == o ? void 0 : o.legacy.name) && void 0 !== r ? r : void 0,
            m = null !== (l = null == o ? void 0 : o.legacy.screen_name) && void 0 !== l ? l : void 0
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(X, { style: Ys.interstitial }, c.a.createElement(qe, { headline: qs, subtext: Gs })),
            c.a.createElement(_r.a, null),
            c.a.createElement(X, { style: Ys.previewCallout }, c.a.createElement(kr, { path: F })),
            c.a.createElement(js, {
              imageUrl: s,
              isProtected: u,
              isVerified: d,
              name: p,
              screenName: m,
              style: Ys.preview,
            }),
          )
        },
        Ys = V.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Js = n('86D9'),
        Zs = x.a.cd5cae15,
        $s = x.a.ad4a92a2,
        ec = x.a.c1df579e,
        ac = void 0 !== nl ? nl : (nl = n('QmjQ')),
        nc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = c.a.useRef(),
            r = Object(Js.a)(t, { threshold: 0.5 }),
            l = { label: ec, path: w.perksConfirm, type: 'primaryFilled' },
            i = c.a.createElement(oa, g()({}, l, { size: 'xLarge' })),
            o = c.a.createElement(
              oa,
              g()({}, l, { size: 'small', style: [tc.transitionOpacity, r ? tc.opacityNone : void 0] }),
            ),
            s = ca()(ac, n)
          return c.a.createElement(
            M,
            { percentageComplete: a, rightControl: o, subtitle: $s, title: Zs },
            c.a.createElement(Xs, { user: s }),
            c.a.createElement(X, { ref: t, style: tc.bigButtons }, i),
          )
        },
        tc = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        rc = x.a.cd5cae15,
        lc = x.a.e18b7a71,
        ic = x.a.c1df579e,
        oc = void 0 !== tl ? tl : (tl = n('Rthh')),
        sc = void 0 !== rl ? rl : (rl = n('aREQ')),
        cc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = Object(Js.a)(r, { threshold: 0.5 }),
            i = ca()(oc, n),
            o = ca()(sc, t),
            s = { label: ic, path: w.pricing, type: 'primaryFilled' },
            u = c.a.createElement(oa, g()({}, s, { size: 'xLarge' })),
            d = c.a.createElement(
              oa,
              g()({}, s, { size: 'small', style: [uc.transitionOpacity, l ? uc.opacityNone : void 0] }),
            )
          return c.a.createElement(
            M,
            { percentageComplete: a, rightControl: d, subtitle: lc, title: rc },
            c.a.createElement(Kl, { user: i, viewer: o }),
            c.a.createElement(X, { ref: r, style: uc.bigButtons }, u),
          )
        },
        uc = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        dc = x.a.cd5cae15,
        pc = x.a.e36287c6,
        mc = x.a.be76dc33,
        gc = x.a.c1df579e,
        fc = void 0 !== ll ? ll : (ll = n('6rkJ')),
        bc = void 0 !== il ? il : (il = n('tJ4s')),
        hc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = c.a.useRef(),
            i = Object(Js.a)(l, { threshold: 0.5 }),
            o = ca()(bc, t),
            s = ca()(fc, n),
            u = _l(o),
            d = u.length > 0 && u.length <= 140,
            p = c.a.useCallback(function () {
              var e
              null == r || null === (e = r.current) || void 0 === e || e.focus()
            }, []),
            m = { disabled: !d, label: gc, path: w.perksBadges, type: 'primaryFilled' },
            f = c.a.createElement(oa, g()({}, m, { size: 'xLarge' })),
            b = c.a.createElement(oa, g()({}, m, { size: 'small' })),
            h = { children: mc, onClick: p, type: 'primaryFilled' },
            y = c.a.createElement(L.a, g()({}, h, { size: 'xLarge' })),
            v = c.a.createElement(L.a, g()({}, h, { size: 'small' })),
            S = d ? f : y,
            k = c.a.createElement(I.a, { style: [yc.transitionOpacity, i ? yc.opacityNone : void 0] }, d ? b : v)
          return c.a.createElement(
            M,
            { percentageComplete: a, rightControl: k, subtitle: pc, title: dc },
            c.a.createElement(Wl, { descriptionMaxLength: 140, ref: r, user: s, viewer: o }),
            c.a.createElement(X, { ref: l, style: yc.bigButtons }, S),
          )
        },
        yc = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        vc = x.a.cd5cae15,
        wc = x.a.c0348963,
        Sc = x.a.ef5406e3,
        kc = x.a.c1df579e,
        _c = void 0 !== ol ? ol : (ol = n('02qo')),
        Fc = void 0 !== sl ? sl : (sl = n('TXsE')),
        Ec = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = c.a.useRef(),
            i = Object(Js.a)(l, { threshold: 0.5 }),
            o = ca()(_c, n),
            s = ca()(Fc, t),
            u = kl(s),
            d = u.length > 0 && u.length <= 140,
            p = c.a.useCallback(function () {
              var e
              null == r || null === (e = r.current) || void 0 === e || e.focus()
            }, []),
            m = { disabled: !d, label: kc, path: w.perksDescription, type: 'primaryFilled' },
            f = c.a.createElement(oa, g()({}, m, { size: 'xLarge' })),
            b = c.a.createElement(oa, g()({}, m, { size: 'small' })),
            h = { children: Sc, onClick: p, type: 'primaryFilled' },
            y = c.a.createElement(L.a, g()({}, h, { size: 'xLarge' })),
            v = c.a.createElement(L.a, g()({}, h, { size: 'small' })),
            S = d ? f : y,
            k = c.a.createElement(I.a, { style: [Cc.transitionOpacity, i ? Cc.opacityNone : void 0] }, d ? b : v)
          return c.a.createElement(
            M,
            { percentageComplete: a, rightControl: k, subtitle: wc, title: vc },
            c.a.createElement(fi, { introMaxLength: 140, ref: r, user: o, viewer: s }),
            c.a.createElement(X, { ref: l, style: Cc.bigButtons }, S),
          )
        },
        Cc = V.a.create(function (e) {
          return {
            bigButtons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            opacityNone: { opacity: 0 },
          }
        }),
        xc = ['$fragmentType'],
        Oc = x.a.ea8a3d2d,
        Kc = x.a.f77bb178,
        Pc = x.a.cd75a5d4,
        Lc = x.a.g9677c6d,
        Tc = x.a.abd845fd,
        Dc = void 0 !== cl ? cl : (cl = n('IeZm')),
        Bc = void 0 !== ul ? ul : (ul = n('7ESn')),
        Ic = void 0 !== dl ? dl : (dl = n('By/j')),
        Rc = function (e) {
          var a,
            n = e.percentageComplete,
            t = e.priceOfferings,
            r = e.viewer,
            l = ca()(Dc, t),
            i = (l.$fragmentType, b()(l, xc)),
            o = ca()(Bc, r),
            s = kl(o),
            u = _l(o),
            d = null !== (a = Fl(o)) && void 0 !== a ? a : i[0],
            p = Ft()(Ic),
            m = la()(p, 2),
            g = m[0],
            f = m[1]
          return c.a.createElement(
            M,
            { percentageComplete: n, title: Oc, withInfoButton: !0 },
            c.a.createElement(
              X,
              { style: Vc.interstitial },
              c.a.createElement(qe, { headline: Kc({ price: i[d] }), illustration: He.Pricing, subtext: Pc }),
            ),
            c.a.createElement(
              X,
              { style: Vc.buttons },
              c.a.createElement(oa, {
                disabled: f,
                label: Lc,
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
              c.a.createElement(oa, {
                disabled: f,
                label: Tc,
                path: w.pricing,
                size: 'large',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        Vc = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        zc = (n('+KXO'), n('7xRU'), n('hznd')),
        Ac = ['$fragmentType'],
        Mc = x.a.ea8a3d2d,
        Uc = x.a.ic9124bf,
        Hc = x.a.g5923869,
        Nc = {
          offer1: [x.a.f025ab39, x.a.c5602dfd],
          offer2: [x.a.ib075804, x.a.j8a72f06],
          offer3: [x.a.c246656e, x.a.a92ab16c],
        },
        jc = x.a.c1df579e,
        Wc = void 0 !== pl ? pl : (pl = n('5jO1')),
        qc = void 0 !== ml ? ml : (ml = n('mKqc')),
        Gc = function (e) {
          var a = e.percentageComplete,
            n = e.priceOfferings,
            t = e.viewer,
            r = ca()(Wc, n),
            l = (r.$fragmentType, b()(r, Ac)),
            i = ca()(qc, t),
            o = Fl(i),
            s = xr(i, 'selected_price'),
            u = c.a.createElement(
              x.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              c.a.createElement(J.b, { link: K }, x.a.c336b06a),
            ),
            d = Object.keys(l).map(function (e) {
              return { label: Hc({ price: l[e] }), value: e, helpText: Nc[e].join(' ') }
            }),
            p = c.a.createElement(oa, {
              disabled: !o,
              label: jc,
              path: w.pricingConfirm,
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            M,
            { percentageComplete: a, rightControl: p, title: Mc, withInfoButton: !0 },
            c.a.createElement(X, { style: Qc.interstitial }, c.a.createElement(qe, { headline: Uc, subtext: u })),
            c.a.createElement(
              X,
              { style: Qc.prices },
              c.a.createElement(zc.a, {
                accessibilityLabel: Uc,
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
        Qc = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        Xc = x.a.f1cb36b8,
        Yc = x.a.e20f6661,
        Jc = x.a.b772cd65,
        Zc = function (e) {
          var a = e.percentageComplete,
            n = c.a.useRef(),
            t = c.a.useCallback(function () {
              var e
              null === (e = n.current) || void 0 === e || e.goBack()
            }, []),
            r = c.a.createElement(
              x.a.I18NFormatMessage,
              { $i18n: 'cf780193' },
              c.a.createElement(J.b, { weight: 'bold' }, x.a.d7d4da89),
            )
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, percentageComplete: a, screenRef: n, title: Xc, withInfoButton: !0 },
            c.a.createElement(
              X,
              { style: $c.interstitial },
              c.a.createElement(qe, { headline: Yc, illustration: He.Thumbsup, subtext: r }),
            ),
            c.a.createElement(
              X,
              { style: $c.buttons },
              c.a.createElement(L.a, { onPress: t, size: 'large', type: 'primaryFilled' }, Jc),
            ),
          )
        },
        $c = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        eu = x.a.f1cb36b8,
        au = x.a.g88e146c,
        nu = x.a.dfe973a6,
        tu = x.a.b772cd65,
        ru = function (e) {
          var a = e.percentageComplete,
            n = c.a.useRef(),
            t = c.a.useCallback(function () {
              var e
              null === (e = n.current) || void 0 === e || e.goBack()
            }, [])
          return c.a.createElement(
            M,
            { leftControlShouldClose: !0, percentageComplete: a, screenRef: n, title: eu, withInfoButton: !0 },
            c.a.createElement(
              X,
              { style: lu.interstitial },
              c.a.createElement(qe, { headline: au, illustration: He.Bench, subtext: nu }),
            ),
            c.a.createElement(
              X,
              { style: lu.buttons },
              c.a.createElement(L.a, { onPress: t, size: 'large', type: 'primaryFilled' }, tu),
            ),
          )
        },
        lu = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        iu = n('8jkQ'),
        ou = void 0 !== gl ? gl : (gl = n('M+ld')),
        su = function () {
          var e = Ft()(ou),
            a = la()(e, 2),
            n = a[0],
            t = a[1]
          return [
            c.a.useCallback(
              function () {
                return new Promise(function (e, a) {
                  var t = iu.b.get().href
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
        cu = n('Qwev'),
        uu = x.a.f1cb36b8,
        du = x.a.ja884230,
        pu = x.a.af1b808d,
        mu = x.a.fe339750,
        gu = x.a.j912510a,
        fu = function (e) {
          var a = e.percentageComplete,
            n = c.a.useState(!1),
            t = la()(n, 2),
            r = t[0],
            l = t[1],
            i = c.a.useState(!1),
            o = la()(i, 2),
            s = o[0],
            u = o[1],
            d = su(),
            p = la()(d, 2),
            m = p[0],
            g = p[1],
            f = c.a.useCallback(
              function () {
                m()
                  .then(function (e) {
                    iu.b.navigateTo(e)
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
            { percentageComplete: a, title: uu, withInfoButton: !0 },
            c.a.createElement(
              X,
              { style: bu.interstitial },
              c.a.createElement(qe, { headline: du, illustration: He.CoinStairs, subtext: pu }),
            ),
            c.a.createElement(
              X,
              { style: bu.buttons },
              c.a.createElement(
                L.a,
                { disabled: y, onPress: b, size: 'large', type: 'primaryFilled' },
                r ? c.a.createElement(cu.a, null) : mu,
              ),
              c.a.createElement(
                L.a,
                { disabled: y, onPress: h, size: 'large', type: 'primaryOutlined' },
                s ? c.a.createElement(cu.a, null) : gu,
              ),
            ),
          )
        },
        bu = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        hu = void 0 !== fl ? fl : (fl = n('UNVS')),
        yu = void 0 !== bl ? bl : (bl = n('6byF')),
        vu = void 0 !== hl ? hl : (hl = n('dNhZ')),
        wu = function (e) {
          return e / 8
        },
        Su = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(N.a).featureSwitches,
            l = ca()(hu, a),
            i = ca()(yu, n),
            o = ca()(vu, t),
            s = Gl(i),
            u = Ql(i),
            d = Xl(i),
            p = Es({ rootPath: h, user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (Cr(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_onboarding_enabled'))
          )
            throw new Error('Super Follows onboarding is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(H.a, { to: y })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(cr, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  B.d,
                  null,
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksIntro },
                    c.a.createElement(Ec, { percentageComplete: wu(1), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksDescription },
                    c.a.createElement(hc, { percentageComplete: wu(2), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksBadges },
                    c.a.createElement(nc, { percentageComplete: wu(3), user: i }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.perksConfirm },
                    c.a.createElement(cc, { percentageComplete: wu(4), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.pricing },
                    c.a.createElement(Gc, { percentageComplete: wu(5), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.pricingConfirm },
                    c.a.createElement(Rc, { percentageComplete: wu(6), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.stripeSetup },
                    c.a.createElement(fu, { percentageComplete: wu(7) }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.stripePending },
                    c.a.createElement(ru, { percentageComplete: wu(8) }),
                  ),
                  c.a.createElement(
                    B.b,
                    { exact: !0, path: w.stripeCompleted },
                    c.a.createElement(Zc, { percentageComplete: wu(8) }),
                  ),
                  c.a.createElement(
                    B.b,
                    { path: w.root },
                    c.a.createElement(Ms, { percentageComplete: wu(0), user: i, viewer: o }),
                  ),
                ),
              )
        },
        ku = x.a.ebfb897c,
        _u = x.a.dc4feb19,
        Fu = x.a.c183d271,
        Eu = x.a.ic130fd5,
        Cu = x.a.dd913e24,
        xu = x.a.h580543e,
        Ou = function () {
          return c.a.createElement(
            M,
            { title: ku },
            c.a.createElement(X, { style: Ku.interstitial }, c.a.createElement(qe, { headline: _u, subtext: Fu })),
            c.a.createElement(
              X,
              { style: Ku.exampleDescriptions },
              c.a.createElement(_r.a, null),
              c.a.createElement(Ci.a, { value: Eu }),
              c.a.createElement(_r.a, null),
              c.a.createElement(Ci.a, { value: Cu }),
              c.a.createElement(_r.a, null),
              c.a.createElement(Ci.a, { value: xu }),
            ),
          )
        },
        Ku = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        Pu = n('JWc1'),
        Lu = x.a.ebfb897c,
        Tu = x.a.dc4feb19,
        Du = x.a.a0bb2076,
        Bu = x.a.ace46d40,
        Iu = x.a.h2c4511f,
        Ru = x.a.hbe4f99e,
        Vu = V.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        zu = function () {
          return c.a.createElement(
            M,
            { title: Lu },
            c.a.createElement(X, { style: Vu.interstitial }, c.a.createElement(qe, { headline: Tu, subtext: Du })),
            c.a.createElement(
              X,
              { style: Vu.exampleIntros },
              c.a.createElement(Pu.a, { value: Bu }),
              c.a.createElement(Pu.a, { value: Iu }),
              c.a.createElement(Pu.a, { value: Ru }),
            ),
          )
        },
        Au = n('VTDR'),
        Mu = n('a2Fh'),
        Uu = x.a.hf6f2913,
        Hu = x.a.fb278c81,
        Nu = x.a.e6b60e94,
        ju = V.a.create(function (e) {
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
        Wu = function () {
          return c.a.createElement(
            M,
            { title: Uu },
            c.a.createElement(X, { style: ju.interstitial }, c.a.createElement(qe, { headline: Hu, subtext: Nu })),
            c.a.createElement(
              pr,
              { style: ju.preview },
              c.a.createElement(
                Au.a,
                null,
                c.a.createElement(Mu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Mu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Mu.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: ju.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        qu = void 0 !== yl ? yl : (yl = n('nEN5')),
        Gu = void 0 !== vl ? vl : (vl = n('toKZ')),
        Qu = void 0 !== wl ? wl : (wl = n('ucRr')),
        Xu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = ca()(qu, a),
            l = ca()(Gu, n),
            i = ca()(Qu, t),
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
            c.a.createElement(B.b, { path: v.root }, c.a.createElement(tr, { user: l, viewer: i })),
            c.a.createElement(B.b, { path: w.root }, c.a.createElement(Su, { priceOfferings: r, user: l, viewer: i })),
            c.a.createElement(B.b, { path: S.root }, c.a.createElement(Ks, { priceOfferings: r, user: l, viewer: i })),
            c.a.createElement(B.b, { exact: !0, path: k }, c.a.createElement(zu, null)),
            c.a.createElement(B.b, { exact: !0, path: _ }, c.a.createElement(Ou, null)),
            c.a.createElement(B.b, { exact: !0, path: F }, c.a.createElement(Wu, null)),
            c.a.createElement(B.b, { exact: !0, path: y }, c.a.createElement(H.a, { to: o })),
          )
        },
        Yu = n('IAZG'),
        Ju = n('Irs7'),
        Zu = void 0 !== Sl ? Sl : (Sl = n('G8I5')),
        $u = function () {
          var e,
            a,
            n = Object(Yu.a)(Zu, {}),
            t = null == n ? void 0 : n.super_follows_price_offerings,
            r =
              null == n || null === (e = n.viewer) || void 0 === e || null === (a = e.user_results) || void 0 === a
                ? void 0
                : a.result,
            l = null == n ? void 0 : n.viewer
          return null == t || 'User' !== (null == r ? void 0 : r.__typename) || null == l
            ? null
            : c.a.createElement(Xu, { priceOfferings: t, user: r, viewer: l })
        },
        ed = { context: 'SuperFollowsSettings' }
      a.default = c.a.memo(
        Object(Ju.a)(
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
              { errorConfig: ed, fallback: e },
              c.a.createElement(d.a, null, c.a.createElement($u, null)),
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
        k = n('t62R'),
        _ = n('/yvb'),
        F = n('piX5'),
        E = n('3XMw'),
        C = n.n(E),
        x = n('tI3i'),
        O = n.n(x),
        K = n('oQhu'),
        P = n('rHpw'),
        L = n('aITJ'),
        T = n('MWbm'),
        D = n('n5fo'),
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
        H = C.a.b4abfdb3,
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
                Object(K.a)(function (e) {
                  return [j.root, !e && j.disabled]
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
                      T.a,
                      { style: [W.root, l] },
                      w.a.createElement(
                        T.a,
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
                          T.a,
                          { style: W.textInputFormWrapper },
                          w.a.createElement(
                            T.a,
                            { style: W.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        T.a,
                        { style: [W.sidePadding, W.underTextInputForm] },
                        w.a.createElement(
                          T.a,
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
                      k.b,
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
                      T.a,
                      { style: j.container },
                      a && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        k.b,
                        { size: 'headline1', style: j.wrapper },
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
                          T.a,
                          { style: W.passwordVisibilityIconContainer },
                          w.a.createElement(_.a, {
                            accessibilityLabel: t ? H : U,
                            focusable: !0,
                            hoverLabel: { label: t ? H : U },
                            icon: t ? w.a.createElement(D.a, null) : w.a.createElement(B.a, null),
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
                      T.a,
                      { accessibilityLiveRegion: 'polite' },
                      w.a.createElement(
                        k.b,
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
                      T.a,
                      { accessibilityLiveRegion: 'assertive' },
                      w.a.createElement(
                        k.b,
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
                      T.a,
                      { accessibilityLiveRegion: 'polite', style: [W.textInputHeaderItem, W.displayCount] },
                      w.a.createElement(
                        k.b,
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
      var j = P.a.create(function (e) {
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
