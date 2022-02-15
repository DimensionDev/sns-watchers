;(window.webpackJsonp = window.webpackJsonp || []).push([
  [236],
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
            name: 'clientOnlyState_viewer',
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
        hash: '55cd0beb19747f9f51eb603808953534',
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
            name: 'clientOnlyState_viewer',
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
        hash: '01c6511cbc1b8fc1f300b50bd8bec34f',
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
          {
            alias: null,
            args: null,
            concreteType: 'AudienceRewardsBenefitsData',
            kind: 'LinkedField',
            name: 'super_follow_creator_benefits',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingGetStartedScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksBadgesScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksDescriptionScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '225d709f425ee45942383084a6afa7c6',
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
    '7ESn': function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPricingConfirmScreen_viewer',
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '12548aff81a962bdc47dabcad89df823',
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
        y = n('P1r1'),
        h = n('G6rE'),
        v = n('rxPX'),
        w = n('0KEI'),
        _ = Object(v.a)()
          .propsFromState(function () {
            return { fetchStatus: y.o, loggedInUser: h.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: y.f,
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        S = n('v//M'),
        k = n('3XMw'),
        F = n.n(k),
        E = n('M2mT'),
        C = 'settingsDetailSave',
        x = n('mw9i'),
        K = n('0yYu'),
        L = n('/yvb'),
        T = n('rHpw'),
        P = F.a.i2209530,
        O = (function (e) {
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
                  { style: [D.contentRoot, o && D.withMarginBottom] },
                  n,
                  t
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(K.a, null),
                        b.a.createElement(
                          x.a,
                          { style: D.buttonContainer },
                          b.a.createElement(L.a, { disabled: r, onPress: t, style: D.button, testID: C, type: i }, l),
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
      g()(O, 'defaultProps', { submitLabel: P, submitType: 'brandFilled', withMarginBottom: !0 })
      var D = T.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(T.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      a.a = _(O)
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
          y = f[1],
          h = u(
            function (a) {
              p.current === n && m.current === e && (g.current.delete(a), r.current && y(g.current.size > 0))
            },
            [n, r, e],
          )
        s(
          function () {
            ;(p.current === n && m.current === e) ||
              ((g.current = new Set()), r.current && y(!1), (p.current = n), (m.current = e))
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
                    h(i), l.onCompleted && l.onCompleted(e, a)
                  },
                  onError: function (e) {
                    h(i), l.onError && l.onError(e)
                  },
                  onUnsubscribe: function () {
                    h(i), l.onUnsubscribe && l.onUnsubscribe()
                  },
                },
              ),
            )
            return g.current.add(i), r.current && y(!0), i
          },
          [h, a, n, r, e],
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
            name: 'clientOnlyState_viewer',
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
        hash: '092140d55d803d1874ea1c3de447b1cd',
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
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
        hash: 'a870a52d2192078949a9299576e8b226',
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
                                      { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
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
                        selections: [l, i, s],
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
            id: 'jAjCJE8_3jnMKCHZuxhY3w',
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
            name: 'clientOnlyState_viewer',
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
        hash: '12221550738bb9a9e2d43bc4ad78d9c0',
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
            name: 'clientOnlyState_viewer',
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
        hash: '63ef624d384eef22524153c672b8543c',
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
        y = (n('2G9S'), n('i4UL'), n('+/5o')),
        h = n('ERkP'),
        v = n.n(h),
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
        K = n('MWbm'),
        L = n('yw4N'),
        T = n('TnY3'),
        P = n('cHvH'),
        O = n('3xLC'),
        D = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        I = (function (e) {
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
                        L.a,
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
                  return v.a.createElement(P.a, null, function (a) {
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
                    h = n.showSubtitleOnRoot,
                    w = n.showSubtitleOnWideDetail,
                    k = n.subtitle,
                    F = n.title,
                    E = n.titleIconCell,
                    C = n.titleIconCellSize,
                    L = n.withDetailOpen,
                    T = n.withSearchBox,
                    P = n.withTweetButton,
                    O = 'root' === g,
                    D = 'secondaryRoot' === g,
                    I = 'primaryDetail' === g,
                    B = (I && w) || (O && h),
                    R = O || (I && a),
                    V = O ? y.c : I ? y.a : void 0,
                    z = v.a.createElement(
                      K.a,
                      { style: x.appBarContainer },
                      v.a.createElement(_.a, {
                        backLocation: i,
                        fixed: !1,
                        hideBackButton: R,
                        history: c,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: m,
                        secondaryBar: b,
                        subtitle: B ? k : void 0,
                        title: F,
                        titleDomId: V,
                        titleIconCell: E,
                        titleIconCellSize: C,
                      }),
                    ),
                    A =
                      O || (D && L)
                        ? null
                        : v.a.createElement(S.a.Configure, {
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
                            withSearchBox: T,
                            withTweetButton: P,
                          })
                  return v.a.createElement(v.a.Fragment, null, A, z)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()(I, 'contextType', O.a),
        b()(I, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      a.a = Object(T.a)(I)
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksDescriptionCore_viewer' },
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
        hash: '1711669f9b840d77c3e278ed7f9807a2',
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
            name: 'clientOnlyState_viewer',
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
                concreteType: 'SuperFollowsOnboardingDraft',
                kind: 'LinkedField',
                name: 'super_follows_onboarding_draft',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'd3a2512cac9bc511b556178f6aa170d9',
      }
      a.default = t
    },
    PlkH: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = { kind: 'InlineDataFragment', name: 'clientOnlyState_viewer', hash: '339dd7e582bd34b9ab5ab7f2f43bfa62' }
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksIntroCore_viewer' },
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
        hash: '0cdbbb12c21101c1cdd0dd7021e1b813',
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
            name: 'clientOnlyState_viewer',
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
        hash: '3fc142458266ca3bffb38b9075c53786',
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksIntroCore_viewer' },
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
        hash: 'f601d73f459672946c6004f212f0d961',
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
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '7f7680ea4be9119d130482714174b0f3',
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
            name: 'clientOnlyState_viewer',
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
        hash: '852624662798db5d799e10a2aaf34c6b',
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
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSwitch_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksIntroScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksDescriptionScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksConfirmScreen_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '22d80514bb3ec9df0e08f5886505ace5',
      }
      a.default = t
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
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingSwitch_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
              },
            ],
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingGetStartedScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksDescriptionScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPricingConfirmScreen_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'b139f549587e1adaf9eaa44f4db4e390',
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
        y = f.a.create(function (e) {
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
        h = c()(
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
              { style: y.root },
              i.a.createElement(
                b.a,
                { accessibilityRole: 'label', style: [y.base, y.border, !l && y.interactive] },
                i.a.createElement(
                  b.a,
                  { style: y.textContainer },
                  i.a.createElement(u.b, { weight: 'bold' }, s),
                  o && i.a.createElement(u.b, { color: 'gray700', size: 'subtext2', style: y.helpText }, o),
                ),
                i.a.createElement(
                  b.a,
                  { style: y.radioContainer },
                  i.a.createElement(
                    g.a,
                    { disabled: l, interactiveStyles: w, interactivityState: e, style: y.radioBackground },
                    i.a.createElement(
                      b.a,
                      {
                        style: [
                          y.circle,
                          r && y.circleActive,
                          l && y.circleDisabled,
                          r && l && y.circleCheckedAndDisabled,
                        ],
                      },
                      r ? i.a.createElement(d.a, { style: y.checkMark }) : null,
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
                    style: h,
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
    kz1e: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksDescriptionScreen_user',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksDescriptionCore_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsSaveOnboarding_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '7a55c66e2311fad251ddc4cc5642b647',
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
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsApplicationSwitch_viewer',
        selections: [
          {
            kind: 'InlineDataFragmentSpread',
            name: 'clientOnlyState_viewer',
            selections: [
              {
                kind: 'ClientExtension',
                selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
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
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '538ad0d6c6e4fd3b239bde44abe8a547',
      }
      a.default = t
    },
    mDly: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksBadgesCore_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'ExclusiveDemoVIPContent_user' }],
        type: 'User',
        abstractKey: null,
        hash: '7f5ebe11b3f4635e6736559b3701b6ca',
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
          {
            alias: null,
            args: null,
            concreteType: 'AudienceRewardsBenefitsData',
            kind: 'LinkedField',
            name: 'super_follow_creator_benefits',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSummaryScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksIntroScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksDescriptionScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksConfirmScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '639ed4135796f9b7b9afb2b9db03f992',
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
            name: 'clientOnlyState_viewer',
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
        hash: '539c7296bcbf0532a3a4975dc3fdf47a',
      }
      a.default = t
    },
    nAiE: function (e, a, n) {
      'use strict'
      n.r(a),
        n.d(a, 'superFollowsSettingsQuery', function () {
          return Ku
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return Y
        }),
        n.d(t, 'Arrow2x', function () {
          return J
        }),
        n.d(t, 'Arrow3x', function () {
          return Z
        }),
        n.d(t, 'Bench', function () {
          return $
        }),
        n.d(t, 'Bench2x', function () {
          return ee
        }),
        n.d(t, 'Bench3x', function () {
          return ae
        }),
        n.d(t, 'Cat', function () {
          return ne
        }),
        n.d(t, 'Cat2x', function () {
          return te
        }),
        n.d(t, 'Cat3x', function () {
          return re
        }),
        n.d(t, 'Clipboard', function () {
          return le
        }),
        n.d(t, 'Clipboard2x', function () {
          return ie
        }),
        n.d(t, 'Clipboard3x', function () {
          return oe
        }),
        n.d(t, 'CoinStairs', function () {
          return se
        }),
        n.d(t, 'CoinStairs2x', function () {
          return ce
        }),
        n.d(t, 'CoinStairs3x', function () {
          return ue
        }),
        n.d(t, 'HandCoins', function () {
          return de
        }),
        n.d(t, 'HandCoins2x', function () {
          return pe
        }),
        n.d(t, 'HandCoins3x', function () {
          return me
        }),
        n.d(t, 'OneFinger', function () {
          return ge
        }),
        n.d(t, 'OneFinger2x', function () {
          return fe
        }),
        n.d(t, 'OneFinger3x', function () {
          return be
        }),
        n.d(t, 'PaperAirplane', function () {
          return ye
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return he
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return ve
        }),
        n.d(t, 'Pricing', function () {
          return we
        }),
        n.d(t, 'Pricing2x', function () {
          return _e
        }),
        n.d(t, 'Pricing3x', function () {
          return Se
        }),
        n.d(t, 'Puzzle', function () {
          return ke
        }),
        n.d(t, 'Puzzle2x', function () {
          return Fe
        }),
        n.d(t, 'Puzzle3x', function () {
          return Ee
        }),
        n.d(t, 'Thumbsup', function () {
          return Ce
        }),
        n.d(t, 'Thumbsup2x', function () {
          return xe
        }),
        n.d(t, 'Thumbsup3x', function () {
          return Ke
        }),
        n.d(t, 'TrafficLight', function () {
          return Le
        }),
        n.d(t, 'TrafficLight2x', function () {
          return Te
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Pe
        }),
        n.d(t, 'Uturn', function () {
          return Oe
        }),
        n.d(t, 'Uturn2x', function () {
          return De
        }),
        n.d(t, 'Uturn3x', function () {
          return Ie
        })
      var r = {}
      n.r(r),
        n.d(r, 'Chat', function () {
          return $l
        }),
        n.d(r, 'Chat2x', function () {
          return ei
        }),
        n.d(r, 'Chat3x', function () {
          return ai
        }),
        n.d(r, 'Cog', function () {
          return ni
        }),
        n.d(r, 'Cog2x', function () {
          return ti
        }),
        n.d(r, 'Cog3x', function () {
          return ri
        }),
        n.d(r, 'Coin', function () {
          return li
        }),
        n.d(r, 'Coin2x', function () {
          return ii
        }),
        n.d(r, 'Coin3x', function () {
          return oi
        }),
        n.d(r, 'CoinPurse', function () {
          return si
        }),
        n.d(r, 'CoinPurse2x', function () {
          return ci
        }),
        n.d(r, 'CoinPurse3x', function () {
          return ui
        }),
        n.d(r, 'Cone', function () {
          return di
        }),
        n.d(r, 'Cone2x', function () {
          return pi
        }),
        n.d(r, 'Cone3x', function () {
          return mi
        }),
        n.d(r, 'Cross', function () {
          return gi
        }),
        n.d(r, 'Cross2x', function () {
          return fi
        }),
        n.d(r, 'Cross3x', function () {
          return bi
        }),
        n.d(r, 'FirstAid', function () {
          return yi
        }),
        n.d(r, 'FirstAid2x', function () {
          return hi
        }),
        n.d(r, 'FirstAid3x', function () {
          return vi
        }),
        n.d(r, 'Heart', function () {
          return wi
        }),
        n.d(r, 'Heart2x', function () {
          return _i
        }),
        n.d(r, 'Heart3x', function () {
          return Si
        }),
        n.d(r, 'LifeSaver', function () {
          return ki
        }),
        n.d(r, 'LifeSaver2x', function () {
          return Fi
        }),
        n.d(r, 'LifeSaver3x', function () {
          return Ei
        }),
        n.d(r, 'Lightbulb', function () {
          return Ci
        }),
        n.d(r, 'Lightbulb2x', function () {
          return xi
        }),
        n.d(r, 'Lightbulb3x', function () {
          return Ki
        }),
        n.d(r, 'NoEntry', function () {
          return Li
        }),
        n.d(r, 'NoEntry2x', function () {
          return Ti
        }),
        n.d(r, 'NoEntry3x', function () {
          return Pi
        }),
        n.d(r, 'Pencil', function () {
          return Oi
        }),
        n.d(r, 'Pencil2x', function () {
          return Di
        }),
        n.d(r, 'Pencil3x', function () {
          return Ii
        }),
        n.d(r, 'PiggyBank', function () {
          return Bi
        }),
        n.d(r, 'PiggyBank2x', function () {
          return Ri
        }),
        n.d(r, 'PiggyBank3x', function () {
          return Vi
        }),
        n.d(r, 'Plant', function () {
          return zi
        }),
        n.d(r, 'Plant2x', function () {
          return Ai
        }),
        n.d(r, 'Plant3x', function () {
          return Ui
        }),
        n.d(r, 'Puzzle', function () {
          return Mi
        }),
        n.d(r, 'Puzzle2x', function () {
          return Hi
        }),
        n.d(r, 'Puzzle3x', function () {
          return ji
        }),
        n.d(r, 'Ribbon', function () {
          return Wi
        }),
        n.d(r, 'Ribbon2x', function () {
          return Ni
        }),
        n.d(r, 'Ribbon3x', function () {
          return Gi
        }),
        n.d(r, 'Spheres', function () {
          return qi
        }),
        n.d(r, 'Spheres2x', function () {
          return Qi
        }),
        n.d(r, 'Spheres3x', function () {
          return Xi
        }),
        n.d(r, 'Star', function () {
          return Yi
        }),
        n.d(r, 'Star2x', function () {
          return Ji
        }),
        n.d(r, 'Star3x', function () {
          return Zi
        }),
        n.d(r, 'TrashCan', function () {
          return $i
        }),
        n.d(r, 'TrashCan2x', function () {
          return eo
        }),
        n.d(r, 'TrashCan3x', function () {
          return ao
        }),
        n.d(r, 'Wallet', function () {
          return no
        }),
        n.d(r, 'Wallet2x', function () {
          return to
        }),
        n.d(r, 'Wallet3x', function () {
          return ro
        })
      var l,
        i,
        o,
        s = n('ERkP'),
        c = n.n(s),
        u = n('v//M'),
        d = (n('enFi'), n('3XMw')),
        p = n.n(d),
        m = n('kGix'),
        g = n('97Jx'),
        f = n.n(g),
        b = n('m3Bd'),
        y = n.n(b),
        h = n('jHSc'),
        v = n('lUZE'),
        w = 'https://help.twitter.com/using-twitter/super-follows-creator',
        _ = ''.concat(w, '#pricechange'),
        S = n('/yvb'),
        k = n('6s7X'),
        F = function () {
          return c.a.createElement(S.a, { icon: c.a.createElement(k.a, null), link: w, type: 'primaryText' })
        },
        E = n('zCf4'),
        C = n('MWbm'),
        x = n('JYMr'),
        K = n('rHpw'),
        L = ['leftControlShouldClose', 'percentageComplete', 'rightControl', 'withCenteredLogo', 'withInfoButton'],
        T = p.a.a6777c1b,
        P = function (e) {
          var a = e.leftControlShouldClose,
            n = e.percentageComplete,
            t = e.rightControl,
            r = e.withCenteredLogo,
            l = e.withInfoButton,
            i = y()(e, L),
            o = Object(E.f)(),
            s = a ? 'close' : 'back',
            u = a ? '/settings/monetization' : void 0,
            d = r ? c.a.createElement(v.a, { style: O.iconTwitter }) : void 0,
            p = l ? c.a.createElement(C.a, { style: O.rightControl }, c.a.createElement(F, null), t) : t,
            m = n ? c.a.createElement(x.a, { progress: n }) : void 0
          return c.a.createElement(
            h.b,
            f()({}, i, {
              backButtonType: s,
              backLocation: u,
              centeredLogo: d,
              documentTitle: T,
              onBackClick: function () {
                a ? o.push('/settings/monetization') : o.goBack()
              },
              rightControl: p,
              secondaryBar: m,
            }),
          )
        },
        O = K.a.create(function (e) {
          return {
            iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
            rightControl: { alignItems: 'center', flexDirection: 'row', gap: e.spaces.space4 },
          }
        }),
        D = n('5FtR'),
        I = p.a.g92a2343,
        B = p.a.a91bb144,
        R = function () {
          var e = Object(E.f)(),
            a = c.a.createElement(
              S.a,
              {
                onPress: function () {
                  e.push('/settings/superfollows/application/submit')
                },
                type: 'primaryFilled',
              },
              B,
            )
          return c.a.createElement(P, { rightControl: a, title: I })
        },
        V = (n('jQ3i'), n('x4t0'), n('z84I'), n('KqXw'), n('3uku'), n('855f')),
        z = n('t62R'),
        A = n('WtWS'),
        U = n('0ULw'),
        M = function (e) {
          var a = e.items
          return c.a.createElement(
            C.a,
            { style: H.root },
            a.map(function (e) {
              return c.a.createElement(
                C.a,
                { key: e.label, style: H.item },
                c.a.createElement(z.b, { style: H.label, weight: 'bold' }, e.label),
                e.checked
                  ? c.a.createElement(A.a, { style: H.iconChecked })
                  : c.a.createElement(U.a, { style: H.iconUnchecked }),
              )
            }),
          )
        },
        H = K.a.create(function (e) {
          return {
            root: { gap: e.spaces.space24 },
            item: { flexDirection: 'row' },
            label: { flex: 1 },
            iconChecked: { color: e.colors.green500 },
            iconUnchecked: { color: e.colors.gray200 },
          }
        }),
        j = function () {
          return c.a.createElement(
            z.b,
            { align: 'center', color: 'gray700' },
            c.a.createElement(
              p.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              c.a.createElement(
                z.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                p.a.ebc0cbbc,
              ),
            ),
          )
        },
        W = n('ddV6'),
        N = n.n(W),
        G = (n('7x/C'), n('JtPf'), n('Qavd'), ['disabled', 'label', 'onPress', 'path']),
        q = function (e) {
          var a = e.disabled,
            n = e.label,
            t = e.onPress,
            r = e.path,
            l = y()(e, G),
            i = Object(E.f)(),
            o = c.a.useState(!1),
            s = N()(o, 2),
            u = s[0],
            d = s[1],
            p = function () {
              i.push(r)
            }
          return c.a.createElement(
            S.a,
            f()({}, l, {
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
        Q = n('jAXQ'),
        X = n.n(Q),
        Y = (n('yH/f'), n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        J = n.p + 'Arrow@2x.8af675c5.png',
        Z = n.p + 'Arrow@3x.949d4365.png',
        $ = n.p + 'Bench.ed26a435.png',
        ee = n.p + 'Bench@2x.ef9fb7d5.png',
        ae = n.p + 'Bench@3x.a306fd55.png',
        ne = n.p + 'Cat.089435a5.png',
        te = n.p + 'Cat@2x.bca70155.png',
        re = n.p + 'Cat@3x.2b225ef5.png',
        le = n.p + 'Clipboard.540710d5.png',
        ie = n.p + 'Clipboard@2x.72ca72e5.png',
        oe = n.p + 'Clipboard@3x.1b952e95.png',
        se = n.p + 'CoinStairs.8488b245.png',
        ce = n.p + 'CoinStairs@2x.34fd5855.png',
        ue = n.p + 'CoinStairs@3x.1b706305.png',
        de = n.p + 'HandCoins.fbd23965.png',
        pe = n.p + 'HandCoins@2x.c1b62b75.png',
        me = n.p + 'HandCoins@3x.7dd5f3d5.png',
        ge = n.p + 'OneFinger.6eb5d9c5.png',
        fe = n.p + 'OneFinger@2x.a13e1ba5.png',
        be = n.p + 'OneFinger@3x.7f22c175.png',
        ye = n.p + 'PaperAirplane.1ef48a05.png',
        he = n.p + 'PaperAirplane@2x.2923eb15.png',
        ve = n.p + 'PaperAirplane@3x.47e4b145.png',
        we = n.p + 'Pricing.ec5962d5.png',
        _e = n.p + 'Pricing@2x.f8284265.png',
        Se = n.p + 'Pricing@3x.b6cf0185.png',
        ke = n.p + 'Puzzle.aa045515.png',
        Fe = n.p + 'Puzzle@2x.5be7ab15.png',
        Ee = n.p + 'Puzzle@3x.1796b225.png',
        Ce = n.p + 'Thumbsup.f5be79d5.png',
        xe = n.p + 'Thumbsup@2x.6d106945.png',
        Ke = n.p + 'Thumbsup@3x.6a81e6d5.png',
        Le = n.p + 'TrafficLight.11644b65.png',
        Te = n.p + 'TrafficLight@2x.5657de25.png',
        Pe = n.p + 'TrafficLight@3x.a5a35335.png',
        Oe = n.p + 'Uturn.c8267f55.png',
        De = n.p + 'Uturn@2x.db3f94d5.png',
        Ie = n.p + 'Uturn@3x.22f27905.png',
        Be = n('tn7R'),
        Re = n('TIdA'),
        Ve = n('A91F'),
        ze = 400,
        Ae = [1, 2, 3],
        Ue = Object.freeze({
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
        Me = Object(Be.a)(Ue).reduce(function (e, a) {
          var n = Math.max.apply(Math, Ae)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: ze * n, height: 250 * n },
              customVariants: Ae.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: ze * e, height: 250 * e }
              }),
            }),
            e
          )
        }, {}),
        He = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? ze : n,
            r = Me[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            C.a,
            { style: [je.illustration, s] },
            c.a.createElement(Re.a, {
              accessibilityLabel: '',
              aspectMode: Ve.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        je = K.a.create(function (e) {
          return { illustration: { alignSelf: 'center' } }
        }),
        We = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            r = e.subtext
          return c.a.createElement(
            c.a.Fragment,
            null,
            t && c.a.createElement(He, { type: t, width: 311 }),
            c.a.createElement(
              z.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title2',
                style: t && Ne.headline,
                weight: 'heavy',
              },
              n,
            ),
            c.a.createElement(z.b, { align: a, color: 'gray700', style: Ne.subtext }, r),
          )
        },
        Ne = K.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space16 } }
        }),
        Ge = p.a.feb54b4f,
        qe = p.a.bac156a6,
        Qe = p.a.a3a20a10,
        Xe = p.a.b26ae507,
        Ye = p.a.a753a87f,
        Je = p.a.abfaa527,
        Ze = V.a.getTruncatedCount(1e4),
        $e = p.a.fdd95737({ minFollowersCount: Ze }),
        ea = V.a.getTruncatedCount(25),
        aa = [
          {
            label: $e,
            test: function (e) {
              var a
              return !(
                null != e &&
                null !== (a = e.super_following_eligibility) &&
                void 0 !== a &&
                a.includes('followers')
              )
            },
          },
          {
            label: p.a.a0dcad86({ minTweetsCount: ea }),
            test: function (e) {
              var a
              return !(
                null != e &&
                null !== (a = e.super_following_eligibility) &&
                void 0 !== a &&
                a.includes('tweets')
              )
            },
          },
          {
            label: p.a.c27f57ac,
            test: function (e) {
              var a
              return !(null != e && null !== (a = e.super_following_eligibility) && void 0 !== a && a.includes('age'))
            },
          },
        ],
        na = void 0 !== l ? l : (l = n('RLjm')),
        ta = function (e) {
          var a = e.user,
            n = X()(na, a),
            t = 0 === ((null == n ? void 0 : n.super_following_eligibility) || []).length,
            r = t ? Ue.Arrow : Ue.TrafficLight,
            l = t ? Ge : Qe,
            i = t ? qe : Xe,
            o = aa.map(function (e) {
              return { label: e.label, checked: (0, e.test)(n) }
            })
          return c.a.createElement(
            P,
            { withInfoButton: !0 },
            c.a.createElement(We, { headline: l, illustration: r, subtext: i }),
            c.a.createElement(M, { items: o }),
            t && c.a.createElement(j, null),
            c.a.createElement(q, {
              disabled: !t,
              label: Ye,
              path: '/settings/superfollows/application/one_more_thing',
            }),
            c.a.createElement(q, { label: Je, path: '/settings/superfollows/application/one_more_thing' }),
          )
        },
        ra = n('9RkS'),
        la = p.a.bbb89925,
        ia = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            o = c.a.useState(i),
            s = N()(o, 2),
            u = s[0],
            d = s[1],
            m = Math.round(a * r * (u / 100))
          return c.a.createElement(
            C.a,
            { style: oa.container },
            c.a.createElement(
              z.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              c.a.createElement(
                p.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                c.a.createElement(z.b, { weight: 'bold' }, p.a.a7dd00ea),
                c.a.createElement(
                  z.b,
                  { style: oa.earnings, weight: 'heavy' },
                  p.a.c62c1d30({ earnings: '$'.concat(V.a.getTruncatedCount(m)) }),
                ),
                c.a.createElement(z.b, { color: 'green500', style: oa.asteriskLeft }, p.a.e0fb982b),
              ),
            ),
            c.a.createElement(
              C.a,
              { style: oa.slider },
              c.a.createElement(ra.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: la({ percent: u }),
                value: u,
              }),
            ),
            c.a.createElement(
              z.b,
              { color: 'green500', size: 'subtext3', style: oa.footnote },
              c.a.createElement(
                p.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                c.a.createElement(z.b, { style: oa.asteriskRight }, p.a.e263c38e),
              ),
            ),
          )
        },
        oa = K.a.create(function (e) {
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
        sa = n('6iuV'),
        ca = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        ua = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return c.a.createElement(
            C.a,
            { style: da.container },
            c.a.createElement(ca.a, { Icon: a, color: 'neutral' }),
            c.a.createElement(z.b, { size: 'headline2', style: da.title, weight: 'bold' }, t),
            c.a.createElement(z.b, { color: 'gray700', style: da.description }, n),
          )
        },
        da = K.a.create(function (e) {
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
        pa = n('sUoZ'),
        ma = n('witV'),
        ga = n('ACHU'),
        fa = [
          { Icon: pa.a, title: p.a.d31c5997, description: p.a.hda1e780 },
          { Icon: ma.a, title: p.a.d08d0bb2, description: p.a.cbd8b105 },
          { Icon: ga.a, title: p.a.becb4930, description: p.a.g743ef96 },
        ],
        ba = function () {
          return c.a.createElement(
            sa.a,
            null,
            fa.map(function (e) {
              return c.a.createElement(ua, f()({}, e, { key: e.title }))
            }),
          )
        },
        ya = p.a.a6777c1b,
        ha = p.a.j5dc36d7,
        va = p.a.c45b2f06,
        wa = p.a.hb6b432e,
        _a = p.a.cd5cae15,
        Sa = p.a.f7239f4c,
        ka = p.a.g8cdf707,
        Fa = p.a.bff8472e,
        Ea = p.a.e533715d,
        Ca = void 0 !== i ? i : (i = n('xd+q')),
        xa = function (e) {
          var a = e.user,
            n = X()(Ca, a).legacy.followers_count
          return c.a.createElement(
            P,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            c.a.createElement(
              z.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ya,
            ),
            c.a.createElement(z.b, null, ha),
            c.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              va,
            ),
            c.a.createElement(z.b, { color: 'gray700' }, wa),
            c.a.createElement(He, { type: Ue.HandCoins }),
            c.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              _a,
            ),
            c.a.createElement(ba, null),
            c.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Sa,
            ),
            c.a.createElement(ia, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            c.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ka,
            ),
            c.a.createElement(z.b, { color: 'gray700' }, Fa),
            c.a.createElement(q, {
              color: 'plum500',
              label: Ea,
              path: '/settings/superfollows/application/eligibility',
            }),
          )
        },
        Ka = p.a.d0fc4890,
        La = p.a.c64384b6,
        Ta = p.a.c3d89aca,
        Pa = function () {
          return c.a.createElement(
            P,
            { withInfoButton: !0 },
            c.a.createElement(We, { align: 'center', headline: Ka, illustration: Ue.OneFinger, subtext: La }),
            c.a.createElement(q, { label: Ta, path: '/settings/superfollows/application/complete_profile' }),
          )
        },
        Oa = n('tI3i'),
        Da = n.n(Oa),
        Ia = (n('2G9S'), n('Hsf0')),
        Ba = n.n(Ia),
        Ra = 'super_follows_application_draft',
        Va = 'super_follows_onboarding_draft',
        za = function (e) {
          return Ba()(void 0 !== o ? o : (o = n('PlkH')), e).__id
        },
        Aa = function (e, a) {
          var n = za(a),
            t = e.get(n)
          return Da()(t, 'viewer must be defined'), t
        },
        Ua = function (e, a) {
          return Aa(e, a).getLinkedRecord(Ra)
        },
        Ma = function (e, a) {
          return Aa(e, a).getLinkedRecord(Va)
        },
        Ha = n('HG4m'),
        ja = n.n(Ha),
        Wa = n('Ud88'),
        Na = n.n(Wa)
      function Ga(e, a) {
        var n = Na()()
        c.a.useEffect(
          function () {
            Da()(e, 'viewerRef must be defined'),
              ja()(n, function (n) {
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
                    y = za(a),
                    h = Aa(e, a)
                  if (!Ua(e, a)) {
                    var v = e.create(''.concat(y, ':').concat(Ra), 'SuperFollowsApplicationDraft')
                    v.setValue(r, 'content_category'),
                      v.setValue(i, 'content_category_other'),
                      v.setValue(s, 'content_creation_platform'),
                      v.setValue(u, 'content_creation_platform_other'),
                      v.setValue(b, 'purpose'),
                      v.setValue(p, 'ethnicity'),
                      v.setValue(g, 'gender'),
                      h.setLinkedRecord(v, Ra)
                  }
                })(n, e, a)
              })
          },
          [a, n, e],
        )
      }
      function qa(e, a) {
        var n = Na()()
        c.a.useEffect(
          function () {
            Da()(e, 'viewerRef must be defined'),
              ja()(n, function (n) {
                !(function (e, a) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = n.creator_intro,
                    r = void 0 === t ? null : t,
                    l = n.description,
                    i = void 0 === l ? null : l,
                    o = n.selected_price,
                    s = void 0 === o ? null : o,
                    c = za(a),
                    u = Aa(e, a)
                  if (!Ma(e, a)) {
                    var d = e.create(''.concat(c, ':').concat(Va), 'SuperFollowsOnboardingDraft')
                    d.setValue(r, 'creator_intro'),
                      d.setValue(i, 'description'),
                      d.setValue(s, 'selected_price'),
                      u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                  }
                })(n, e, a)
              })
          },
          [n, a, e],
        )
      }
      function Qa(e, a) {
        var n = Na()()
        return c.a.useCallback(
          function (t) {
            Da()(e, 'viewerRef must be defined'),
              ja()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Ua(e, a)
                  Da()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      function Xa(e, a) {
        var n = Na()()
        return c.a.useCallback(
          function (t) {
            Da()(e, 'viewerId must be defined'),
              ja()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Ma(e, a)
                  Da()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Ya,
        Ja,
        Za,
        $a,
        en,
        an,
        nn,
        tn,
        rn,
        ln,
        on,
        sn,
        cn,
        un,
        dn,
        pn,
        mn,
        gn,
        fn,
        bn,
        yn,
        hn,
        vn,
        wn,
        _n,
        Sn,
        kn,
        Fn,
        En,
        Cn,
        xn,
        Kn,
        Ln,
        Tn,
        Pn,
        On,
        Dn,
        In,
        Bn,
        Rn,
        Vn,
        zn,
        An,
        Un,
        Mn,
        Hn,
        jn,
        Wn,
        Nn,
        Gn,
        qn,
        Qn,
        Xn,
        Yn,
        Jn,
        Zn,
        $n,
        et = n('p+r5'),
        at = p.a.f7997b16,
        nt = p.a.fc00ab5b,
        tt = p.a.c249167f,
        rt = p.a.b772cd65,
        lt = void 0 !== Ya ? Ya : (Ya = n('xhT1')),
        it = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(lt, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = Qa(r, 'content_category_other')
          return c.a.createElement(
            P,
            { title: at },
            c.a.createElement(et.a, {
              helperText: tt,
              label: nt,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(S.a, null, rt),
          )
        },
        ot = n('fyvP'),
        st = n('csss'),
        ct = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(E.f)()
          return c.a.createElement(st.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        ut = p.a.f7997b16,
        dt = p.a.c144fa52,
        pt = [
          p.a.b1f2e8ce,
          p.a.jfec3aa0,
          p.a.e08a6e6f,
          p.a.b743702c,
          p.a.h2401e36,
          p.a.ed7e6675,
          p.a.fecc3791,
          p.a.d80b0f11,
          p.a.b29a93b1,
          p.a.c5d190c0,
          p.a.i6dfc494,
          p.a.ff2b68ca,
          p.a.e404203c,
          p.a.ab389321,
          p.a.a46fdec4,
          p.a.add55c97,
          p.a.f28d8b06,
          p.a.c8ee31da,
          p.a.e0234d02,
          p.a.h9d38a08,
          p.a.fe6841bd,
          p.a.e031e06a,
          p.a.i5cade16,
          p.a.e084f2af,
          p.a.a9db15b2,
          p.a.d27beb9e,
          p.a.a92db4a9,
          p.a.fc64990d,
          p.a.hb5f1d64,
        ],
        mt = p.a.c365dcc5,
        gt = p.a.bd44a8a8,
        ft = void 0 !== Ja ? Ja : (Ja = n('JB6R')),
        bt = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(ft, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Qa(r, 'content_category'),
            o = pt.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            P,
            { title: ut },
            c.a.createElement(ot.a, {
              description: dt,
              label: dt,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(ct, {
              helpText: gt,
              label: mt,
              path: '/settings/superfollows/application/submit_categories_other',
            }),
          )
        },
        yt = p.a.d94a9a17,
        ht = p.a.a35394b3,
        vt = [
          p.a.e375c2df,
          p.a.gf30371a,
          p.a.b3773d47,
          p.a.a45caf17,
          p.a.e5f515b8,
          p.a.e3b35497,
          p.a.i83206dc,
          p.a.a4ee9393,
          p.a.ab09972f,
          p.a.jafe3705,
        ],
        wt = void 0 !== Za ? Za : (Za = n('H1we')),
        _t = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(wt, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Qa(r, 'ethnicity'),
            o = vt.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            P,
            { title: yt },
            c.a.createElement(ot.a, {
              description: ht,
              label: ht,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        St = p.a.a8d0108d,
        kt = p.a.a35394b3,
        Ft = [
          p.a.de32365f,
          p.a.b6ab31bd,
          p.a.ffc23188,
          p.a.h1cc7091,
          p.a.hca27829,
          p.a.b3af7344,
          p.a.he3f1435,
          p.a.c3c16abb,
        ],
        Et = void 0 !== $a ? $a : ($a = n('VG5i')),
        Ct = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(Et, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Qa(r, 'gender'),
            o = Ft.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            P,
            { title: St },
            c.a.createElement(ot.a, {
              description: kt,
              label: kt,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        xt = p.a.da8ea7da,
        Kt = p.a.d7081f91,
        Lt = p.a.j349548f,
        Tt = p.a.b772cd65,
        Pt = void 0 !== en ? en : (en = n('+OUG')),
        Ot = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(Pt, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = Qa(r, 'content_creation_platform_other')
          return c.a.createElement(
            P,
            { title: xt },
            c.a.createElement(et.a, {
              helperText: Lt,
              label: Kt,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(S.a, null, Tt),
          )
        },
        Dt = p.a.da8ea7da,
        It = p.a.d4062c9a,
        Bt = [p.a.a3021317, p.a.eb4a600d, p.a.d4d74bb3, p.a.fc738909, p.a.d8552c1a, p.a.ca07aa46],
        Rt = p.a.c365dcc5,
        Vt = p.a.bd44a8a8,
        zt = void 0 !== an ? an : (an = n('xnrs')),
        At = function (e) {
          var a,
            n,
            t = e.viewer,
            r = X()(zt, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Qa(r, 'content_creation_platform'),
            o = Bt.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            P,
            { title: Dt },
            c.a.createElement(ot.a, {
              description: It,
              label: It,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(ct, {
              helpText: Vt,
              label: Rt,
              path: '/settings/superfollows/application/submit_platforms_other',
            }),
          )
        },
        Ut = (n('tVqn'), n('uFXj'), p.a.f4f4dd6f),
        Mt = p.a.f448cbcb,
        Ht = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? Ut : 'optional' === n ? Mt : void 0
          return c.a.createElement(
            C.a,
            { style: jt.container },
            c.a.createElement(z.b, { size: 'headline1', weight: 'heavy' }, a),
            r && c.a.createElement(z.b, { color: t, size: 'subtext2', style: jt.subtext }, r),
          )
        },
        jt = K.a.create(function (e) {
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
        Wt = n('jV+4'),
        Nt = n('Xrkv'),
        Gt = n('9SqB'),
        qt = n.n(Gt),
        Qt = p.a.e873f0ae,
        Xt = p.a.f095a24a,
        Yt = p.a.i5f7b6b8,
        Jt = p.a.d1f6d336,
        Zt = p.a.f7997b16,
        $t = p.a.c144fa52,
        er = p.a.f1bf337d,
        ar = p.a.da8ea7da,
        nr = p.a.d4062c9a,
        tr = p.a.e963d587,
        rr = p.a.ede0ac3e,
        lr = p.a.ffb6cb88,
        ir = p.a.b2159e8e,
        or = p.a.feacb49d,
        sr = p.a.je17c987,
        cr = p.a.d94a9a17,
        ur = p.a.a8d0108d,
        dr = p.a.gfc80842,
        pr = void 0 !== nn ? nn : (nn = n('pLb/')),
        mr = void 0 !== tn ? tn : (tn = n('3qCL')),
        gr = void 0 !== rn ? rn : (rn = n('AyUU')),
        fr = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i,
            o,
            s = e.user,
            u = e.viewer,
            d = X()(pr, s),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = X()(mr, u),
            g = m.super_follows_application_draft,
            f = (null !== (a = null == g ? void 0 : g.content_category) && void 0 !== a ? a : []).concat(
              null !== (n = null == g ? void 0 : g.content_category_other) && void 0 !== n ? n : [],
            ),
            b = (null !== (t = null == g ? void 0 : g.content_creation_platform) && void 0 !== t ? t : []).concat(
              null !== (r = null == g ? void 0 : g.content_creation_platform_other) && void 0 !== r ? r : [],
            ),
            y = null !== (l = null == g ? void 0 : g.purpose) && void 0 !== l ? l : '',
            h = null !== (i = null == g ? void 0 : g.ethnicity) && void 0 !== i ? i : [],
            v = null !== (o = null == g ? void 0 : g.gender) && void 0 !== o ? o : [],
            w = f.length && b.length && y.trim(),
            _ = Qa(m, 'purpose'),
            S = qt()(gr),
            k = N()(S, 2),
            F = k[0],
            E = k[1]
          return c.a.createElement(
            P,
            { withInfoButton: !0 },
            c.a.createElement(We, { headline: Qt, illustration: Ue.Clipboard, subtext: Xt }),
            c.a.createElement(Ht, { title: Yt }),
            c.a.createElement(z.b, null, Jt),
            p && c.a.createElement(Wt.a, { screenName: p }),
            c.a.createElement(Ht, { title: Zt, type: 'required' }),
            c.a.createElement(z.b, { color: 'gray700' }, $t),
            c.a.createElement(ct, {
              description: Object(Nt.a)(f, !0),
              label: er,
              path: '/settings/superfollows/application/submit_categories',
            }),
            c.a.createElement(Ht, { title: ar, type: 'required' }),
            c.a.createElement(z.b, { color: 'gray700' }, nr),
            c.a.createElement(ct, {
              description: Object(Nt.a)(b, !0),
              label: tr,
              path: '/settings/superfollows/application/submit_platforms',
            }),
            c.a.createElement(Ht, { title: rr, type: 'required' }),
            c.a.createElement(et.a, {
              helperText: ir,
              label: lr,
              name: 'plannedUsage',
              onChange: function (e) {
                _(e.currentTarget.value)
              },
              value: y,
            }),
            c.a.createElement(Ht, { title: or, type: 'optional' }),
            c.a.createElement(z.b, { color: 'gray700' }, sr),
            c.a.createElement(ct, {
              description: Object(Nt.a)(h, !0),
              label: cr,
              path: '/settings/superfollows/application/submit_ethnicities',
            }),
            c.a.createElement(ct, {
              description: Object(Nt.a)(v, !0),
              label: ur,
              path: '/settings/superfollows/application/submit_genders',
            }),
            c.a.createElement(j, null),
            c.a.createElement(q, {
              disabled: !w || E,
              label: dr,
              onPress: function () {
                return new Promise(function (e, a) {
                  F({
                    variables: { category: f, platform: b, purpose: y, ethnicity: h, gender: v },
                    onCompleted: function (a, n) {
                      return e()
                    },
                    onError: a,
                  })
                })
              },
              path: '/settings/superfollows/submitted',
            }),
          )
        },
        br = void 0 !== ln ? ln : (ln = n('o/nB')),
        yr = void 0 !== on ? on : (on = n('lZLw')),
        hr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = X()(br, a),
            r = X()(yr, n)
          return (
            Ga(r),
            c.a.createElement(
              E.d,
              null,
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/application/eligibility' },
                c.a.createElement(ta, { user: t }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/application/one_more_thing' },
                c.a.createElement(Pa, null),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/application/complete_profile' },
                c.a.createElement(R, null),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/application/submit' },
                c.a.createElement(fr, { user: t, viewer: r }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/application/submit_categories' },
                c.a.createElement(bt, { viewer: r }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/application/submit_categories_other' },
                c.a.createElement(it, { viewer: r }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/application/submit_platforms' },
                c.a.createElement(At, { viewer: r }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/application/submit_platforms_other' },
                c.a.createElement(Ot, { viewer: r }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/application/submit_ethnicities' },
                c.a.createElement(_t, { viewer: r }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/application/submit_genders' },
                c.a.createElement(Ct, { viewer: r }),
              ),
              c.a.createElement(
                E.b,
                { path: '/settings/superfollows/application' },
                c.a.createElement(xa, { user: t }),
              ),
            )
          )
        },
        vr = (n('hBpG'), n('ho0z'), n('cHvH')),
        wr = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(
            C.a,
            { style: [kr.frame, n] },
            c.a.createElement(
              C.a,
              { style: kr.browserBar },
              c.a.createElement(
                C.a,
                { style: kr.browserBarButtons },
                c.a.createElement(C.a, { style: kr.browserBarButton }),
                c.a.createElement(C.a, { style: kr.browserBarButton }),
                c.a.createElement(C.a, { style: kr.browserBarButton }),
              ),
              c.a.createElement(
                C.a,
                { style: kr.browserBarUrlInputWrapper },
                c.a.createElement(C.a, { style: kr.browserBarUrlInput }),
              ),
            ),
            a,
          )
        },
        _r = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(C.a, { style: n }, c.a.createElement(C.a, { style: kr.content }, a))
        },
        Sr = function (e) {
          var a = e.children,
            n = e.style
          return Object(vr.b)().windowWidth > K.a.theme.breakpoints.medium
            ? c.a.createElement(wr, { style: n }, c.a.createElement(_r, { style: kr.contentWide }, a))
            : c.a.createElement(_r, { style: n }, a)
        },
        kr = K.a.create(function (e) {
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
              paddingBottom: e.spaces.space24,
              paddingHorizontal: e.spaces.space40,
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
        Fr = n('MAc7'),
        Er = ['style'],
        Cr = function (e, a) {
          var n = e.style,
            t = y()(e, Er)
          return c.a.createElement(Sr, { style: n }, c.a.createElement(Fr.a, f()({}, t, { ref: a })))
        },
        xr = c.a.forwardRef(Cr),
        Kr = function (e) {
          var a = e.children,
            n = e.style,
            t = Object(vr.b)().windowWidth > K.a.theme.breakpoints.medium ? Lr.marginWide : Lr.marginNarrow
          return c.a.createElement(C.a, { style: [n, t] }, a)
        },
        Lr = K.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space80 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        Tr = ['label', 'path'],
        Pr = function (e) {
          var a = e.label,
            n = e.path,
            t = y()(e, Tr),
            r = Object(E.f)()
          return c.a.createElement(
            z.b,
            f()({}, t, {
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
        Or = p.a.hf6f2913,
        Dr = p.a.i859a9d3,
        Ir = K.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        Br = function (e) {
          var a = e.path,
            n = e.style
          return c.a.createElement(
            C.a,
            { style: [Ir.root, n] },
            c.a.createElement(z.b, { size: 'headline2', weight: 'heavy' }, Or),
            c.a.createElement(Pr, { label: Dr, path: a }),
          )
        },
        Rr = n('0yYu'),
        Vr = p.a.iba08a94,
        zr = p.a.ef354e83,
        Ar = void 0 !== sn ? sn : (sn = n('UFp0')),
        Ur = void 0 !== cn ? cn : (cn = n('NmgE')),
        Mr = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = X()(Ar, t),
            i = X()(Ur, r),
            o = l.legacy,
            s = o.name,
            u = o.profile_image_url_https,
            d =
              null !==
                (a = null === (n = i.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : ''
          return (
            Da()('string' == typeof u, 'imageUrl must be defined'),
            Da()('string' == typeof s, 'name must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Kr, { style: Hr.interstitial }, c.a.createElement(We, { headline: Vr, subtext: zr })),
              c.a.createElement(Rr.a, null),
              c.a.createElement(
                Kr,
                { style: Hr.previewCallout },
                c.a.createElement(Br, { path: '/settings/superfollows/perks_preview' }),
              ),
              c.a.createElement(xr, { imageUrl: u, name: s, style: Hr.preview, value: d }),
            )
          )
        },
        Hr = K.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        jr = p.a.hf6f2913,
        Wr = void 0 !== un ? un : (un = n('MvEh')),
        Nr = void 0 !== dn ? dn : (dn = n('U5ka')),
        Gr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = X()(Wr, a),
            r = X()(Nr, n)
          return c.a.createElement(P, { title: jr, withInfoButton: !0 }, c.a.createElement(Mr, { user: t, viewer: r }))
        },
        qr = n('lD8l'),
        Qr = (n('kH1Z'), n('6U7i'), n('9VLy')),
        Xr = n('6OUF'),
        Yr = p.a.a329ce87,
        Jr = function (e, a) {
          var n = e.imageUrl,
            t = e.onChange,
            r = e.screenName,
            l = e.style,
            i = e.value
          return c.a.createElement(
            C.a,
            { style: [$r.root, l] },
            t
              ? c.a.createElement(Xr.a, {
                  inputStyle: $r.descriptionInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxLength: 140,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'description',
                  numberOfLines: 1,
                  onChange: t,
                  placeholder: Yr,
                  ref: a,
                  style: $r.description,
                  value: i,
                })
              : c.a.createElement(z.b, { color: 'gray700', style: $r.description }, i),
            c.a.createElement(Qr.a, { imageUrl: n, screenName: r, style: [$r.signature, !i && $r.visibilityHidden] }),
          )
        },
        Zr = c.a.forwardRef(Jr),
        $r = K.a.create(function (e) {
          return {
            root: { display: 'inline-flex', alignItems: 'start', flexDirection: 'column' },
            description: { borderRadius: 0, borderColor: 'transparent', minHeight: 0, width: '100%' },
            descriptionInput: {
              color: e.colors.gray700,
              minHeight: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
            },
            signature: { marginTop: e.spaces.space12 },
            visibilityHidden: { visibility: 'hidden' },
          }
        }),
        el = ['style'],
        al = p.a.cbc8ce27,
        nl = function (e, a) {
          var n = e.style,
            t = y()(e, el),
            r = Object(vr.b)().windowWidth > K.a.theme.breakpoints.medium
          return c.a.createElement(
            C.a,
            { style: [rl.root, r && rl.rootWide, n] },
            c.a.createElement(
              z.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              al,
            ),
            c.a.createElement(Zr, f()({}, t, { ref: a, style: rl.description })),
          )
        },
        tl = c.a.forwardRef(nl),
        rl = K.a.create(function (e) {
          return {
            root: {
              paddingBottom: e.spaces.space16,
              paddingHorizontal: e.spaces.space32,
              paddingTop: e.spaces.space48,
            },
            rootWide: { paddingHorizontal: e.spaces.space48 },
            description: { marginTop: e.spaces.space8 },
          }
        }),
        ll = ['style'],
        il = function (e, a) {
          var n = e.style,
            t = y()(e, ll)
          return c.a.createElement(
            Sr,
            { style: n },
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(tl, f()({}, t, { ref: a })),
              c.a.createElement(qr.a, { style: sl.exclusiveDemoBonusContent }),
            ),
          )
        },
        ol = c.a.forwardRef(il),
        sl = K.a.create(function (e) {
          return {
            exclusiveDemoBonusContent: {
              alignSelf: 'center',
              marginBottom: e.spaces.space32,
              marginTop: e.spaces.space16,
            },
          }
        }),
        cl = p.a.gf32cca1,
        ul = p.a.j8ba99b3,
        dl = p.a.j679dcda,
        pl = void 0 !== pn ? pn : (pn = n('yjSu')),
        ml = void 0 !== mn ? mn : (mn = n('RTdz')),
        gl = function (e, a) {
          var n,
            t,
            r = e.user,
            l = e.viewer,
            i = X()(pl, r),
            o = X()(ml, l),
            s = i.legacy,
            u = s.profile_image_url_https,
            d = s.screen_name,
            p =
              null !== (n = null === (t = o.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.description) &&
              void 0 !== n
                ? n
                : '',
            m = Xa(o, 'description')
          return (
            Da()('string' == typeof u, 'imageUrl must be defined'),
            Da()('string' == typeof d, 'screenName must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Kr, { style: bl.interstitial }, c.a.createElement(We, { headline: cl, subtext: ul })),
              c.a.createElement(
                Kr,
                { style: bl.examplesLink },
                c.a.createElement(Pr, { label: dl, path: '/settings/superfollows/perks_description_examples' }),
              ),
              c.a.createElement(Rr.a, null),
              c.a.createElement(
                Kr,
                { style: bl.previewCallout },
                c.a.createElement(Br, { path: '/settings/superfollows/perks_preview' }),
              ),
              c.a.createElement(ol, {
                imageUrl: u,
                onChange: function (e) {
                  m(e.currentTarget.value)
                },
                ref: a,
                screenName: d,
                style: bl.preview,
                value: p,
              }),
            )
          )
        },
        fl = c.a.forwardRef(gl),
        bl = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        yl =
          (n('jwue'),
          n('+oxZ'),
          n('5BYb'),
          function (e) {
            var a, t
            return null !==
              (a =
                null === (t = X()(void 0 !== fn ? fn : (fn = n('WDhg')), e).super_follow_creator_benefits) ||
                void 0 === t
                  ? void 0
                  : t.creator_intro) && void 0 !== a
              ? a
              : void 0
          }),
        hl = function (e) {
          var a,
            t,
            r,
            l = (
              null !==
                (a =
                  null === (t = X()(void 0 !== bn ? bn : (bn = n('G/nI')), e).super_follow_creator_benefits) ||
                  void 0 === t
                    ? void 0
                    : t.benefits_data) && void 0 !== a
                ? a
                : []
            ).find(function (e) {
              return 'ExclusiveContent' === e.benefit_type
            })
          return null !== (r = null == l ? void 0 : l.description) && void 0 !== r ? r : void 0
        },
        vl = void 0 !== hn ? hn : (hn = n('rwq4')),
        wl = void 0 !== vn ? vn : (vn = n('E9LA')),
        _l = function (e, a) {
          var t,
            r,
            l = a.creatorIntro,
            i = a.description,
            o = X()(vl, e),
            s = (function (e) {
              var a
              return null === (a = X()(void 0 !== gn ? gn : (gn = n('lWeI')), e).super_follow_creator_benefits) ||
                void 0 === a
                ? void 0
                : a.__id
            })(o),
            u = yl(o),
            d = hl(o),
            p = null !== (t = l || u) && void 0 !== t ? t : '',
            m = null !== (r = i || d) && void 0 !== r ? r : '',
            g = qt()(wl),
            f = N()(g, 2),
            b = f[0],
            y = f[1]
          return [
            c.a.useCallback(
              function () {
                return new Promise(function (e, a) {
                  b({
                    variables: {
                      creator_intro: p,
                      benefits_data: [{ benefit_type: 'ExclusiveContent', title: '', description: m }],
                    },
                    onCompleted: function (a, n) {
                      return e()
                    },
                    onError: a,
                    updater: function (e) {
                      Da()(s, 'benefitsId must be specified')
                      var a = e.get(s)
                      if (
                        (Da()(a, 'benefitsRecord must be specified'),
                        p !== u && a.setValue(p, 'creator_intro'),
                        m !== d)
                      ) {
                        var n = a.getLinkedRecords('benefits_data')
                        null == n ||
                          n.forEach(function (e) {
                            'ExclusiveContent' === (null == e ? void 0 : e.getValue('benefit_type')) &&
                              (null == e || e.setValue(m, 'description'))
                          })
                      }
                    },
                  })
                })
              },
              [s, p, m, u, d, b],
            ),
            y,
          ]
        },
        Sl = p.a.cd5cae15,
        kl = p.a.e36287c6,
        Fl = p.a.b772cd65,
        El = void 0 !== wn ? wn : (wn = n('kz1e')),
        Cl = void 0 !== _n ? _n : (_n = n('M3aw')),
        xl = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Kl = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = X()(El, t),
            i = X()(Cl, r),
            o =
              null !== (a = null === (n = i.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
              void 0 !== a
                ? a
                : '',
            s = !!o,
            u = _l(l, { description: o }),
            d = N()(u, 2),
            p = d[0],
            m = d[1],
            g = {
              disabled: !s || m,
              label: Fl,
              onPress: p,
              path: '/settings/superfollows/management',
              type: 'primaryFilled',
            },
            b = c.a.createElement(q, g),
            y = c.a.createElement(q, f()({}, g, { size: 'small' }))
          return c.a.createElement(
            P,
            { rightControl: y, subtitle: kl, title: Sl },
            c.a.createElement(fl, { user: l, viewer: i }),
            c.a.createElement(Kr, { style: xl.buttons }, b),
          )
        },
        Ll = p.a.j3253319,
        Tl = p.a.h1e80993,
        Pl = p.a.j679dcda,
        Ol = void 0 !== Sn ? Sn : (Sn = n('hGtx')),
        Dl = void 0 !== kn ? kn : (kn = n('DWSt')),
        Il = function (e, a) {
          var n,
            t,
            r = e.user,
            l = e.viewer,
            i = X()(Ol, r),
            o = X()(Dl, l),
            s = i.legacy,
            u = s.name,
            d = s.profile_image_url_https,
            p =
              null !==
                (n = null === (t = o.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            m = Xa(o, 'creator_intro')
          return (
            Da()('string' == typeof d, 'imageUrl must be defined'),
            Da()('string' == typeof u, 'name must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Kr, { style: Rl.interstitial }, c.a.createElement(We, { headline: Ll, subtext: Tl })),
              c.a.createElement(
                Kr,
                { style: Rl.examplesLink },
                c.a.createElement(Pr, { label: Pl, path: '/settings/superfollows/perks_intro_examples' }),
              ),
              c.a.createElement(Rr.a, null),
              c.a.createElement(
                Kr,
                { style: Rl.previewCallout },
                c.a.createElement(Br, { path: '/settings/superfollows/perks_preview' }),
              ),
              c.a.createElement(xr, {
                imageUrl: d,
                name: u,
                onChange: function (e) {
                  m(e.currentTarget.value)
                },
                ref: a,
                style: Rl.preview,
                value: p,
              }),
            )
          )
        },
        Bl = c.a.forwardRef(Il),
        Rl = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Vl = p.a.cd5cae15,
        zl = p.a.c0348963,
        Al = p.a.b772cd65,
        Ul = void 0 !== Fn ? Fn : (Fn = n('oyMe')),
        Ml = void 0 !== En ? En : (En = n('RL7R')),
        Hl = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        jl = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = X()(Ul, t),
            i = X()(Ml, r),
            o =
              null !==
                (a = null === (n = i.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : '',
            s = !!o,
            u = _l(l, { creatorIntro: o }),
            d = N()(u, 2),
            p = d[0],
            m = d[1],
            g = {
              disabled: !s || m,
              label: Al,
              onPress: p,
              path: '/settings/superfollows/management',
              type: 'primaryFilled',
            },
            b = c.a.createElement(q, g),
            y = c.a.createElement(q, f()({}, g, { size: 'small' }))
          return c.a.createElement(
            P,
            { rightControl: y, subtitle: zl, title: Vl },
            c.a.createElement(Bl, { user: l, viewer: i }),
            c.a.createElement(Kr, { style: Hl.buttons }, b),
          )
        },
        Wl = n('Nh1N'),
        Nl = n('yoO3'),
        Gl = n('7FtF'),
        ql = p.a.be103b84,
        Ql = function () {
          return c.a.createElement(
            C.a,
            { style: Xl.root },
            c.a.createElement(A.a, { style: Xl.icon }),
            c.a.createElement(z.b, { size: 'subtext2', weight: 'bold' }, ql),
          )
        },
        Xl = K.a.create(function (e) {
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
        Yl = function (e) {
          var a = e.children,
            n = e.headline,
            t = e.rightControl
          return c.a.createElement(
            C.a,
            { style: Jl.root },
            c.a.createElement(
              C.a,
              { style: Jl.header },
              c.a.createElement(
                z.b,
                {
                  accessibilityLevel: 4,
                  accessibilityRole: 'heading',
                  size: 'headline2',
                  style: Jl.headline,
                  weight: 'heavy',
                },
                n,
              ),
              a,
            ),
            t,
          )
        },
        Jl = K.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        Zl = n('4zmP'),
        $l = n.p + 'Chat.62494e65.png',
        ei = n.p + 'Chat@2x.f6eeca05.png',
        ai = n.p + 'Chat@3x.dd8438c5.png',
        ni = n.p + 'Cog.788d3515.png',
        ti = n.p + 'Cog@2x.3528d165.png',
        ri = n.p + 'Cog@3x.e4185e95.png',
        li = n.p + 'Coin.684ea185.png',
        ii = n.p + 'Coin@2x.9e020695.png',
        oi = n.p + 'Coin@3x.d5ecbc95.png',
        si = n.p + 'CoinPurse.5e7e5f25.png',
        ci = n.p + 'CoinPurse@2x.62abfad5.png',
        ui = n.p + 'CoinPurse@3x.6b9f5d05.png',
        di = n.p + 'Cone.e7e68c95.png',
        pi = n.p + 'Cone@2x.94d66a15.png',
        mi = n.p + 'Cone@3x.f4718655.png',
        gi = n.p + 'Cross.eed0ff55.png',
        fi = n.p + 'Cross@2x.68249435.png',
        bi = n.p + 'Cross@3x.59595055.png',
        yi = n.p + 'FirstAid.962ae7e5.png',
        hi = n.p + 'FirstAid@2x.09640055.png',
        vi = n.p + 'FirstAid@3x.b6884b15.png',
        wi = n.p + 'Heart.a7bdca85.png',
        _i = n.p + 'Heart@2x.a3108ce5.png',
        Si = n.p + 'Heart@3x.2866f2f5.png',
        ki = n.p + 'LifeSaver.19af1fb5.png',
        Fi = n.p + 'LifeSaver@2x.5f9465a5.png',
        Ei = n.p + 'LifeSaver@3x.3cde1ca5.png',
        Ci = n.p + 'Lightbulb.632a0de5.png',
        xi = n.p + 'Lightbulb@2x.ea0a7dc5.png',
        Ki = n.p + 'Lightbulb@3x.d47fac75.png',
        Li = n.p + 'NoEntry.89a117a5.png',
        Ti = n.p + 'NoEntry@2x.6460d275.png',
        Pi = n.p + 'NoEntry@3x.cf8e9465.png',
        Oi = n.p + 'Pencil.6ac7a9a5.png',
        Di = n.p + 'Pencil@2x.e6d394c5.png',
        Ii = n.p + 'Pencil@3x.7e45c2e5.png',
        Bi = n.p + 'PiggyBank.571af825.png',
        Ri = n.p + 'PiggyBank@2x.f6b3cb15.png',
        Vi = n.p + 'PiggyBank@3x.f166bc15.png',
        zi = n.p + 'Plant.2e93bbb5.png',
        Ai = n.p + 'Plant@2x.5660c145.png',
        Ui = n.p + 'Plant@3x.60b66855.png',
        Mi = n.p + 'Puzzle.59175915.png',
        Hi = n.p + 'Puzzle@2x.d2394395.png',
        ji = n.p + 'Puzzle@3x.ed9bd735.png',
        Wi = n.p + 'Ribbon.a0d66a65.png',
        Ni = n.p + 'Ribbon@2x.d981e095.png',
        Gi = n.p + 'Ribbon@3x.d6c8e505.png',
        qi = n.p + 'Spheres.c33c7b95.png',
        Qi = n.p + 'Spheres@2x.6b6732f5.png',
        Xi = n.p + 'Spheres@3x.5e58c985.png',
        Yi = n.p + 'Star.2714eb95.png',
        Ji = n.p + 'Star@2x.25a57fd5.png',
        Zi = n.p + 'Star@3x.206f9d85.png',
        $i = n.p + 'TrashCan.7ed17045.png',
        eo = n.p + 'TrashCan@2x.79c8ba35.png',
        ao = n.p + 'TrashCan@3x.91184ba5.png',
        no = n.p + 'Wallet.0ca99435.png',
        to = n.p + 'Wallet@2x.d3b05545.png',
        ro = n.p + 'Wallet@3x.90c942f5.png',
        lo = [1, 2, 3],
        io = Object.freeze({
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
        oo = Object(Be.a)(io),
        so = oo.reduce(function (e, a) {
          var n = Math.max.apply(Math, lo)
          return (
            (e[a] = {
              aspectRatio: 1,
              image: { url: r[a], width: 36 * n, height: 36 * n },
              customVariants: lo.map(function (e) {
                return { uri: r[a + (1 !== e ? ''.concat(e, 'x') : '')], width: 36 * e, height: 36 * e }
              }),
            }),
            e
          )
        }, {}),
        co = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? 36 : n,
            r = so[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            C.a,
            { style: s },
            c.a.createElement(Re.a, {
              accessibilityLabel: '',
              aspectMode: Ve.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        uo = function (e) {
          var a = e.children,
            n = e.childrenStyle,
            t = e.headline,
            r = e.illustration,
            l = e.rightControl
          return c.a.createElement(
            C.a,
            { style: po.root },
            r && c.a.createElement(co, { type: r, width: 36 }),
            c.a.createElement(
              C.a,
              { style: po.header },
              c.a.createElement(
                z.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: po.headline,
                  weight: 'heavy',
                },
                t,
              ),
              l,
            ),
            c.a.createElement(C.a, { style: n }, a),
          )
        },
        po = K.a.create(function (e) {
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
        mo = ['$refType'],
        go = p.a.a6777c1b,
        fo = p.a.a384fda0,
        bo = p.a.i4313618,
        yo = p.a.c0348963,
        ho = p.a.ic624ab2,
        vo = p.a.ifc9b709,
        wo = p.a.b08bbeb4,
        _o = p.a.ia9c37c4,
        So = p.a.fb1e4eb6,
        ko = p.a.be54a312,
        Fo = p.a.cca48545,
        Eo = p.a.de67bc6e,
        Co = p.a.a46cead5,
        xo = p.a.idd8ae44,
        Ko = p.a.b28a1b48,
        Lo = p.a.f2df375b,
        To = p.a.f3ce76c0,
        Po = p.a.i8982e7e,
        Oo = p.a.ca5ca5ed,
        Do = p.a.abd845fd,
        Io = p.a.i859a9d3,
        Bo = p.a.d14c7bbc,
        Ro = p.a.g867481d,
        Vo = p.a.f66d24be,
        zo = p.a.g5925628,
        Ao = void 0 !== Cn ? Cn : (Cn = n('EM6u')),
        Uo = void 0 !== xn ? xn : (xn = n('oNwH')),
        Mo = function (e) {
          var a,
            t,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = Object(E.g)(),
            s = X()(Ao, l),
            u = (s.$refType, y()(s, mo)),
            d = X()(Uo, i),
            p = yl(d),
            m = hl(d),
            g =
              null !==
                (a = (function (e) {
                  var a, t
                  return null !==
                    (a =
                      null ===
                        (t = X()(void 0 !== yn ? yn : (yn = n('dGIC')), e).super_follow_creator_price_metadata) ||
                      void 0 === t
                        ? void 0
                        : t.selected_price) && void 0 !== a
                    ? a
                    : void 0
                })(d)) && void 0 !== a
                ? a
                : 'offer2',
            f = null !== (t = d.legacy.profile_image_url_https) && void 0 !== t ? t : void 0,
            b = null !== (r = d.legacy.screen_name) && void 0 !== r ? r : void 0,
            h = c.a.createElement(Pr, {
              label: Oo,
              path: '/settings/superfollows/management/perks_confirm',
              size: 'subtext1',
            }),
            v = c.a.createElement(q, {
              label: Do,
              path: '/settings/superfollows/management/perks_intro',
              size: 'small',
              type: 'primaryOutlined',
            }),
            k = c.a.createElement(q, {
              label: Do,
              path: '/settings/superfollows/management/perks_description',
              size: 'small',
              type: 'primaryOutlined',
            })
          return c.a.createElement(
            Nl.a,
            null,
            c.a.createElement(
              Gl.a,
              { location: o, screenType: 'secondaryDetail', title: go },
              c.a.createElement(
                C.a,
                { style: Ho.title },
                c.a.createElement(
                  z.b,
                  { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                  go,
                ),
                c.a.createElement(Ql, null),
              ),
              c.a.createElement(Rr.a, null),
              c.a.createElement(
                uo,
                { childrenStyle: Ho.benefits, headline: fo, illustration: io.Ribbon, rightControl: h },
                c.a.createElement(z.b, { color: 'gray700' }, bo),
                c.a.createElement(
                  Yl,
                  { headline: yo, rightControl: v },
                  c.a.createElement(Zr, { imageUrl: f, screenName: b, value: p }),
                ),
                c.a.createElement(
                  Yl,
                  { headline: ho, rightControl: k },
                  c.a.createElement(Zr, { imageUrl: f, screenName: b, value: m }),
                ),
                c.a.createElement(Yl, { headline: vo }, c.a.createElement(z.b, { color: 'gray700' }, wo)),
              ),
              c.a.createElement(Rr.a, null),
              c.a.createElement(
                uo,
                { childrenStyle: Ho.other, headline: _o, illustration: io.PiggyBank },
                c.a.createElement(z.b, { color: 'gray700' }, So),
                c.a.createElement(z.b, { size: 'headline2', weight: 'heavy' }, ko({ price: u[g] })),
                c.a.createElement(Zl.a, { Icon: Wl.a, action: { label: Io, link: _ }, headline: Fo, text: Eo }),
              ),
              c.a.createElement(Rr.a, null),
              c.a.createElement(
                uo,
                { childrenStyle: Ho.other, headline: Co, illustration: io.Chat },
                c.a.createElement(z.b, { color: 'gray700' }, xo),
                c.a.createElement(
                  C.a,
                  { style: Ho.buttons },
                  c.a.createElement(
                    S.a,
                    {
                      dominantColor: '#5865F2',
                      link: 'https://t.co/jPqvg6tFrDJG',
                      style: Ho.button,
                      type: 'onMediaDominantColorFilled',
                    },
                    Bo,
                  ),
                ),
              ),
              c.a.createElement(Rr.a, null),
              c.a.createElement(
                uo,
                { childrenStyle: Ho.other, headline: Ko, illustration: io.Lightbulb },
                c.a.createElement(z.b, { color: 'gray700' }, Lo),
                c.a.createElement(
                  C.a,
                  { style: Ho.buttons },
                  c.a.createElement(
                    S.a,
                    { link: 'https://t.co/RL2NN3bEVkes', style: Ho.button, type: 'primaryOutlined' },
                    Ro,
                  ),
                ),
              ),
              c.a.createElement(Rr.a, null),
              c.a.createElement(
                uo,
                { childrenStyle: Ho.other, headline: To, illustration: io.LifeSaver },
                c.a.createElement(z.b, { color: 'gray700' }, Po),
                c.a.createElement(
                  C.a,
                  { style: Ho.buttons },
                  c.a.createElement(S.a, { link: w, style: Ho.button, type: 'primaryOutlined' }, Vo),
                  c.a.createElement(
                    S.a,
                    {
                      link: 'https://help.twitter.com/forms/paid-features/superfollows',
                      style: Ho.button,
                      type: 'primaryOutlined',
                    },
                    zo,
                  ),
                ),
              ),
            ),
          )
        },
        Ho = K.a.create(function (e) {
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
        jo = void 0 !== Kn ? Kn : (Kn = n('MXCg')),
        Wo = void 0 !== Ln ? Ln : (Ln = n('mEFY')),
        No = void 0 !== Tn ? Tn : (Tn = n('d8Sa')),
        Go = function (e) {
          var a,
            n,
            t,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = e.viewer,
            s = X()(jo, l),
            u = X()(Wo, i),
            d = X()(No, o),
            p = null === (a = u.super_follow_creator_benefits) || void 0 === a ? void 0 : a.creator_intro,
            m = (
              null !==
                (n =
                  null == u || null === (t = u.super_follow_creator_benefits) || void 0 === t
                    ? void 0
                    : t.benefits_data) && void 0 !== n
                ? n
                : []
            ).find(function (e) {
              return 'ExclusiveContent' === e.benefit_type
            })
          return (
            qa(d, {
              creator_intro: p,
              description: null == m ? void 0 : m.description,
              selected_price:
                null === (r = u.super_follow_creator_price_metadata) || void 0 === r ? void 0 : r.selected_price,
            }),
            c.a.createElement(
              E.d,
              null,
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/management/perks_intro' },
                c.a.createElement(jl, { user: u, viewer: d }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/management/perks_description' },
                c.a.createElement(Kl, { user: u, viewer: d }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/management/perks_confirm' },
                c.a.createElement(Gr, { user: u, viewer: d }),
              ),
              c.a.createElement(
                E.b,
                { path: '/settings/superfollows/management' },
                c.a.createElement(Mo, { priceOfferings: s, user: u }),
              ),
            )
          )
        },
        qo = p.a.b422cb62,
        Qo = p.a.f08705e0,
        Xo = p.a.e2cd700f,
        Yo = p.a.fbfd7397,
        Jo = p.a.c1df579e,
        Zo = [
          {
            label: p.a.d8637c96,
            test: function (e) {
              var a,
                n = null !== (a = e.viewer.super_follows_onboarding_draft) && void 0 !== a ? a : {},
                t = n.creator_intro,
                r = n.description
              return !!t && !!r
            },
          },
          {
            label: p.a.b92892dc,
            test: function (e) {
              var a
              return !(null === (a = e.viewer.super_follows_onboarding_draft) || void 0 === a || !a.selected_price)
            },
          },
          {
            label: p.a.b123a502,
            test: function (e) {
              return 'Completed' === e.user.stripe_account_status
            },
          },
        ],
        $o = void 0 !== Pn ? Pn : (Pn = n('wQp3')),
        es = void 0 !== On ? On : (On = n('tfBr')),
        as = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = X()($o, n),
            l = X()(es, t),
            i = Zo.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: r, viewer: l }) }
            }),
            o = i.some(function (e) {
              return e.checked
            }),
            s = c.a.createElement(q, {
              label: Jo,
              path: '/settings/superfollows/onboarding/perks_intro',
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            P,
            {
              leftControlShouldClose: !0,
              percentageComplete: a,
              rightControl: s,
              withCenteredLogo: !0,
              withInfoButton: !0,
            },
            c.a.createElement(
              Kr,
              { style: ns.interstitial },
              c.a.createElement(We, {
                headline: o ? Xo : qo,
                illustration: o ? Ue.Puzzle : Ue.Cat,
                subtext: o ? Yo : Qo,
              }),
            ),
            c.a.createElement(Kr, { style: ns.checks }, c.a.createElement(M, { items: i })),
          )
        },
        ns = K.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        ts = n('+7VC'),
        rs = n('1k08'),
        ls = ['style'],
        is = p.a.b600eb88,
        os = p.a.a15b98ec,
        ss = function (e) {
          var a = e.style,
            n = y()(e, ls),
            t = Object(vr.b)().windowWidth > K.a.theme.breakpoints.medium
          return c.a.createElement(
            C.a,
            { style: [cs.root, t && cs.rootWide, a] },
            c.a.createElement(rs.a, { description: os, title: is }),
            c.a.createElement(ts.a, f()({}, n, { style: cs.exclusiveDemoVIPContentWrapper })),
          )
        },
        cs = K.a.create(function (e) {
          return {
            description: { marginTop: e.spaces.space8 },
            exclusiveDemoVIPContentWrapper: { marginTop: e.spaces.space32 },
            root: {
              alignItems: 'center',
              paddingBottom: e.spaces.space16,
              paddingHorizontal: e.spaces.space32,
              paddingTop: e.spaces.space48,
            },
            rootWide: { paddingHorizontal: e.spaces.space48 },
          }
        }),
        us = ['style'],
        ds = function (e) {
          var a = e.style,
            n = y()(e, us)
          return c.a.createElement(
            Sr,
            { style: a },
            c.a.createElement(ss, f()({ style: ps.exclusiveDemoVIPContentHeader }, n)),
          )
        },
        ps = K.a.create(function (e) {
          return { exclusiveDemoVIPContentHeader: { alignSelf: 'center', marginBottom: e.spaces.space16 } }
        }),
        ms = p.a.cda6bb6d,
        gs = p.a.a15b98ec,
        fs = void 0 !== Dn ? Dn : (Dn = n('mDly')),
        bs = function (e) {
          var a = e.user,
            n = X()(fs, a)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Kr, { style: ys.interstitial }, c.a.createElement(We, { headline: ms, subtext: gs })),
            c.a.createElement(Rr.a, null),
            c.a.createElement(
              Kr,
              { style: ys.previewCallout },
              c.a.createElement(Br, { path: '/settings/superfollows/perks_preview' }),
            ),
            c.a.createElement(ds, { style: ys.preview, user: n }),
          )
        },
        ys = K.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        hs = p.a.cd5cae15,
        vs = p.a.ad4a92a2,
        ws = p.a.c1df579e,
        _s = void 0 !== In ? In : (In = n('QmjQ')),
        Ss = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = { label: ws, path: '/settings/superfollows/onboarding/perks_confirm', type: 'primaryFilled' },
            r = c.a.createElement(q, t),
            l = c.a.createElement(q, f()({}, t, { size: 'small' })),
            i = X()(_s, n)
          return c.a.createElement(
            P,
            { percentageComplete: a, rightControl: l, subtitle: vs, title: hs },
            c.a.createElement(bs, { user: i }),
            c.a.createElement(Kr, { style: ks.buttons }, r),
          )
        },
        ks = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Fs = p.a.cd5cae15,
        Es = p.a.e18b7a71,
        Cs = p.a.c1df579e,
        xs = void 0 !== Bn ? Bn : (Bn = n('Rthh')),
        Ks = void 0 !== Rn ? Rn : (Rn = n('aREQ')),
        Ls = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = X()(xs, n),
            l = X()(Ks, t),
            i = { label: Cs, path: '/settings/superfollows/onboarding/pricing', type: 'primaryFilled' },
            o = c.a.createElement(q, i),
            s = c.a.createElement(q, f()({}, i, { size: 'small' }))
          return c.a.createElement(
            P,
            { percentageComplete: a, rightControl: s, subtitle: Es, title: Fs },
            c.a.createElement(Mr, { user: r, viewer: l }),
            c.a.createElement(Kr, { style: Ts.buttons }, o),
          )
        },
        Ts = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Ps = p.a.cd5cae15,
        Os = p.a.e36287c6,
        Ds = p.a.be76dc33,
        Is = p.a.c1df579e,
        Bs = void 0 !== Vn ? Vn : (Vn = n('6rkJ')),
        Rs = void 0 !== zn ? zn : (zn = n('tJ4s')),
        Vs = function (e) {
          var a,
            n,
            t = e.percentageComplete,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef(),
            o = X()(Rs, l),
            s = X()(Bs, r),
            u = !!(null !==
              (a = null === (n = o.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
            void 0 !== a
              ? a
              : ''),
            d = {
              disabled: !u,
              label: Is,
              path: '/settings/superfollows/onboarding/perks_badges',
              type: 'primaryFilled',
            },
            p = c.a.createElement(q, d),
            m = c.a.createElement(q, f()({}, d, { size: 'small' })),
            g = {
              children: Ds,
              onClick: function () {
                var e
                null == i || null === (e = i.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            b = c.a.createElement(S.a, g),
            y = c.a.createElement(S.a, f()({}, g, { size: 'small' }))
          return c.a.createElement(
            P,
            { percentageComplete: t, rightControl: u ? m : y, subtitle: Os, title: Ps },
            c.a.createElement(fl, { ref: i, user: s, viewer: o }),
            c.a.createElement(Kr, { style: zs.buttons }, u ? p : b),
          )
        },
        zs = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        As = p.a.cd5cae15,
        Us = p.a.c0348963,
        Ms = p.a.ef5406e3,
        Hs = p.a.c1df579e,
        js = void 0 !== An ? An : (An = n('02qo')),
        Ws = void 0 !== Un ? Un : (Un = n('TXsE')),
        Ns = function (e) {
          var a,
            n,
            t = e.percentageComplete,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef(),
            o = X()(js, r),
            s = X()(Ws, l),
            u = !!(null !==
              (a = null === (n = s.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
            void 0 !== a
              ? a
              : ''),
            d = {
              disabled: !u,
              label: Hs,
              path: '/settings/superfollows/onboarding/perks_description',
              type: 'primaryFilled',
            },
            p = c.a.createElement(q, d),
            m = c.a.createElement(q, f()({}, d, { size: 'small' })),
            g = {
              children: Ms,
              onClick: function () {
                var e
                null == i || null === (e = i.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            b = c.a.createElement(S.a, g),
            y = c.a.createElement(S.a, f()({}, g, { size: 'small' }))
          return c.a.createElement(
            P,
            { percentageComplete: t, rightControl: u ? m : y, subtitle: Us, title: As },
            c.a.createElement(Bl, { ref: i, user: o, viewer: s }),
            c.a.createElement(Kr, { style: Gs.buttons }, u ? p : b),
          )
        },
        Gs = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        qs = ['$refType'],
        Qs = p.a.ea8a3d2d,
        Xs = p.a.f77bb178,
        Ys = p.a.cd75a5d4,
        Js = p.a.g9677c6d,
        Zs = p.a.abd845fd,
        $s = void 0 !== Mn ? Mn : (Mn = n('IeZm')),
        ec = void 0 !== Hn ? Hn : (Hn = n('7ESn')),
        ac = void 0 !== jn ? jn : (jn = n('By/j')),
        nc = function (e) {
          var a,
            n,
            t,
            r = e.percentageComplete,
            l = e.priceOfferings,
            i = e.viewer,
            o = X()($s, l),
            s = (o.$refType, y()(o, qs)),
            u = X()(ec, i).super_follows_onboarding_draft,
            d = null !== (a = null == u ? void 0 : u.creator_intro) && void 0 !== a ? a : '',
            p = null !== (n = null == u ? void 0 : u.description) && void 0 !== n ? n : '',
            m = null !== (t = null == u ? void 0 : u.selected_price) && void 0 !== t ? t : s[0],
            g = qt()(ac),
            f = N()(g, 2),
            b = f[0],
            h = f[1]
          return c.a.createElement(
            P,
            { percentageComplete: r, title: Qs, withInfoButton: !0 },
            c.a.createElement(
              Kr,
              { style: tc.interstitial },
              c.a.createElement(We, { headline: Xs({ price: s[m] }), illustration: Ue.Pricing, subtext: Ys }),
            ),
            c.a.createElement(
              Kr,
              { style: tc.buttons },
              c.a.createElement(q, {
                disabled: h,
                label: Js,
                onPress: function () {
                  return new Promise(function (e, a) {
                    b({
                      variables: {
                        creator_intro: d,
                        benefits_data: [{ benefit_type: 'ExclusiveContent', title: '', description: p }],
                        selected_price: m,
                      },
                      onCompleted: function (a, n) {
                        return e()
                      },
                      onError: a,
                    })
                  })
                },
                path: '/settings/superfollows/onboarding/stripe_setup',
                type: 'primaryFilled',
              }),
              c.a.createElement(q, {
                disabled: h,
                label: Zs,
                path: '/settings/superfollows/onboarding/pricing',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        tc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        rc = (n('+KXO'), n('7xRU'), n('hznd')),
        lc = ['$refType'],
        ic = p.a.ea8a3d2d,
        oc = p.a.ic9124bf,
        sc = p.a.g5923869,
        cc = {
          offer1: [p.a.f025ab39, p.a.c5602dfd],
          offer2: [p.a.ib075804, p.a.j8a72f06],
          offer3: [p.a.c246656e, p.a.a92ab16c],
        },
        uc = p.a.c1df579e,
        dc = void 0 !== Wn ? Wn : (Wn = n('5jO1')),
        pc = void 0 !== Nn ? Nn : (Nn = n('mKqc')),
        mc = function (e) {
          var a = e.percentageComplete,
            n = e.priceOfferings,
            t = e.viewer,
            r = X()(dc, n),
            l = (r.$refType, y()(r, lc)),
            i = X()(pc, t),
            o = i.super_follows_onboarding_draft,
            s = null == o ? void 0 : o.selected_price,
            u = Xa(i, 'selected_price'),
            d = c.a.createElement(
              p.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              c.a.createElement(z.b, { link: w }, p.a.c336b06a),
            ),
            m = Object.keys(l).map(function (e) {
              return { label: sc({ price: l[e] }), value: e, helpText: cc[e].join(' ') }
            }),
            g = c.a.createElement(q, {
              disabled: !s,
              label: uc,
              path: '/settings/superfollows/onboarding/pricing_confirm',
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            P,
            { percentageComplete: a, rightControl: g, title: ic, withInfoButton: !0 },
            c.a.createElement(Kr, { style: gc.interstitial }, c.a.createElement(We, { headline: oc, subtext: d })),
            c.a.createElement(
              Kr,
              { style: gc.prices },
              c.a.createElement(rc.a, {
                accessibilityLabel: oc,
                name: 'selectedPrice',
                onChange: function (e, a) {
                  u(a)
                },
                options: m,
                value: s,
              }),
            ),
          )
        },
        gc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        fc = p.a.f1cb36b8,
        bc = p.a.e20f6661,
        yc = p.a.a9ee1ecc,
        hc = p.a.b772cd65,
        vc = function (e) {
          var a = e.percentageComplete
          return c.a.createElement(
            P,
            { leftControlShouldClose: !0, percentageComplete: a, title: fc, withInfoButton: !0 },
            c.a.createElement(
              Kr,
              { style: wc.interstitial },
              c.a.createElement(We, { headline: bc, illustration: Ue.Thumbsup, subtext: yc }),
            ),
            c.a.createElement(
              Kr,
              { style: wc.buttons },
              c.a.createElement(q, { label: hc, path: '/settings/monetization', type: 'primaryFilled' }),
            ),
          )
        },
        wc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        _c = p.a.e2cd700f,
        Sc = p.a.d6bfb60c,
        kc = p.a.b9cbb370,
        Fc = function () {
          return c.a.createElement(
            P,
            { withInfoButton: !0 },
            c.a.createElement(We, { headline: _c, illustration: Ue.Puzzle, subtext: Sc }),
            c.a.createElement(q, { label: kc, path: '/settings/superfollows/onboarding/stripe_setup' }),
          )
        },
        Ec = n('8jkQ'),
        Cc = p.a.f1cb36b8,
        xc = p.a.ja884230,
        Kc = p.a.af1b808d,
        Lc = p.a.fe339750,
        Tc = p.a.j912510a,
        Pc = void 0 !== Gn ? Gn : (Gn = n('xHLM')),
        Oc = function (e) {
          var a = e.percentageComplete,
            n = qt()(Pc),
            t = N()(n, 2),
            r = t[0],
            l = t[1],
            i = function () {
              r({
                variables: {},
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && Ec.b.navigateTo(n)
                },
              })
            }
          return c.a.createElement(
            P,
            { percentageComplete: a, title: Cc, withInfoButton: !0 },
            c.a.createElement(
              Kr,
              { style: Dc.interstitial },
              c.a.createElement(We, { headline: xc, illustration: Ue.CoinStairs, subtext: Kc }),
            ),
            c.a.createElement(
              Kr,
              { style: Dc.buttons },
              c.a.createElement(S.a, { disabled: l, onPress: i, type: 'primaryFilled' }, Lc),
              c.a.createElement(S.a, { disabled: l, onPress: i, type: 'primaryOutlined' }, Tc),
            ),
          )
        },
        Dc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Ic = void 0 !== qn ? qn : (qn = n('UNVS')),
        Bc = void 0 !== Qn ? Qn : (Qn = n('6byF')),
        Rc = void 0 !== Xn ? Xn : (Xn = n('dNhZ')),
        Vc = function (e) {
          return e / 8
        },
        zc = function (e) {
          var a,
            n,
            t,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = e.viewer,
            s = X()(Ic, l),
            u = X()(Bc, i),
            d = X()(Rc, o),
            p = null === (a = u.super_follow_creator_benefits) || void 0 === a ? void 0 : a.creator_intro,
            m = (
              null !==
                (n =
                  null == u || null === (t = u.super_follow_creator_benefits) || void 0 === t
                    ? void 0
                    : t.benefits_data) && void 0 !== n
                ? n
                : []
            ).find(function (e) {
              return 'ExclusiveContent' === e.benefit_type
            })
          return (
            qa(d, {
              creator_intro: p,
              description: null == m ? void 0 : m.description,
              selected_price:
                null === (r = u.super_follow_creator_price_metadata) || void 0 === r ? void 0 : r.selected_price,
            }),
            c.a.createElement(
              E.d,
              null,
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_intro' },
                c.a.createElement(Ns, { percentageComplete: Vc(1), user: u, viewer: d }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_description' },
                c.a.createElement(Vs, { percentageComplete: Vc(2), user: u, viewer: d }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_badges' },
                c.a.createElement(Ss, { percentageComplete: Vc(3), user: u }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_confirm' },
                c.a.createElement(Ls, { percentageComplete: Vc(4), user: u, viewer: d }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/onboarding/pricing' },
                c.a.createElement(mc, { percentageComplete: Vc(5), priceOfferings: s, viewer: d }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/onboarding/pricing_confirm' },
                c.a.createElement(nc, { percentageComplete: Vc(6), priceOfferings: s, viewer: d }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_setup' },
                c.a.createElement(Oc, { percentageComplete: Vc(7) }),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_incomplete' },
                c.a.createElement(Fc, null),
              ),
              c.a.createElement(
                E.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_completed' },
                c.a.createElement(vc, { percentageComplete: Vc(8) }),
              ),
              c.a.createElement(
                E.b,
                { path: '/settings/superfollows/onboarding' },
                c.a.createElement(as, { percentageComplete: Vc(0), user: u, viewer: d }),
              ),
            )
          )
        },
        Ac = p.a.ebfb897c,
        Uc = p.a.dc4feb19,
        Mc = p.a.c183d271,
        Hc = p.a.ic130fd5,
        jc = p.a.dd913e24,
        Wc = p.a.h580543e,
        Nc = function () {
          return c.a.createElement(
            P,
            { title: Ac },
            c.a.createElement(Kr, { style: Gc.interstitial }, c.a.createElement(We, { headline: Uc, subtext: Mc })),
            c.a.createElement(
              Kr,
              { style: Gc.exampleDescriptions },
              c.a.createElement(Rr.a, null),
              c.a.createElement(Zr, { value: Hc }),
              c.a.createElement(Rr.a, null),
              c.a.createElement(Zr, { value: jc }),
              c.a.createElement(Rr.a, null),
              c.a.createElement(Zr, { value: Wc }),
            ),
          )
        },
        Gc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        qc = n('JWc1'),
        Qc = p.a.ebfb897c,
        Xc = p.a.dc4feb19,
        Yc = p.a.a0bb2076,
        Jc = p.a.ace46d40,
        Zc = p.a.h2c4511f,
        $c = p.a.hbe4f99e,
        eu = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        au = function () {
          return c.a.createElement(
            P,
            { title: Qc },
            c.a.createElement(Kr, { style: eu.interstitial }, c.a.createElement(We, { headline: Xc, subtext: Yc })),
            c.a.createElement(
              Kr,
              { style: eu.exampleIntros },
              c.a.createElement(qc.a, { value: Jc }),
              c.a.createElement(qc.a, { value: Zc }),
              c.a.createElement(qc.a, { value: $c }),
            ),
          )
        },
        nu = n('VTDR'),
        tu = n('a2Fh'),
        ru = p.a.hf6f2913,
        lu = p.a.fb278c81,
        iu = p.a.e6b60e94,
        ou = K.a.create(function (e) {
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
        su = function () {
          return c.a.createElement(
            P,
            { title: ru },
            c.a.createElement(Kr, { style: ou.interstitial }, c.a.createElement(We, { headline: lu, subtext: iu })),
            c.a.createElement(
              Sr,
              { style: ou.preview },
              c.a.createElement(
                nu.a,
                null,
                c.a.createElement(tu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(tu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(tu.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: ou.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        cu = p.a.aa7e35ed,
        uu = p.a.f67e69bf,
        du = function () {
          return c.a.createElement(
            P,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Kr,
              { style: pu.interstitial },
              c.a.createElement(We, { headline: cu, illustration: Ue.Uturn, subtext: uu }),
            ),
          )
        },
        pu = K.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        mu = p.a.d3d6c52c,
        gu = p.a.c53e9129,
        fu = function () {
          return c.a.createElement(
            P,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            c.a.createElement(
              Kr,
              { style: bu.interstitial },
              c.a.createElement(We, { headline: mu, illustration: Ue.PaperAirplane, subtext: gu }),
            ),
          )
        },
        bu = K.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        yu = p.a.j274e6aa,
        hu = p.a.d7f65127,
        vu = function () {
          return c.a.createElement(
            P,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Kr,
              { style: wu.interstitial },
              c.a.createElement(We, { headline: yu, illustration: Ue.Bench, subtext: hu }),
            ),
          )
        },
        wu = K.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        _u = void 0 !== Yn ? Yn : (Yn = n('nEN5')),
        Su = void 0 !== Jn ? Jn : (Jn = n('toKZ')),
        ku = void 0 !== Zn ? Zn : (Zn = n('ucRr')),
        Fu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = X()(_u, a),
            l = X()(Su, n),
            i = X()(ku, t),
            o = (function (e) {
              var a = e.isActiveCreator,
                n = e.stripeAccountStatus,
                t = e.superFollowsApplicationStatus
              if (a) return '/settings/superfollows/management'
              switch (t) {
                case 'Submitted':
                  return '/settings/superfollows/submitted'
                case 'Waitlisted':
                  return '/settings/superfollows/waitlisted'
                case 'Rejected':
                  return '/settings/superfollows/rejected'
                case 'Approved':
                  switch (n) {
                    case 'Incomplete':
                      return '/settings/superfollows/onboarding/stripe_incomplete'
                    case 'Completed':
                      return '/settings/superfollows/onboarding/stripe_completed'
                    default:
                      return '/settings/superfollows/onboarding'
                  }
                default:
                  return '/settings/superfollows/application'
              }
            })({
              isActiveCreator: !(null == i || !i.is_active_creator),
              superFollowsApplicationStatus: (null == l ? void 0 : l.super_follows_application_status) || 'NotStarted',
              stripeAccountStatus: (null == l ? void 0 : l.stripe_account_status) || 'NotStarted',
            })
          return c.a.createElement(
            E.d,
            null,
            c.a.createElement(
              E.b,
              { path: '/settings/superfollows/application' },
              c.a.createElement(hr, { user: l, viewer: i }),
            ),
            c.a.createElement(
              E.b,
              { path: '/settings/superfollows/onboarding' },
              c.a.createElement(zc, { priceOfferings: r, user: l, viewer: i }),
            ),
            c.a.createElement(
              E.b,
              { path: '/settings/superfollows/management' },
              c.a.createElement(Go, { priceOfferings: r, user: l, viewer: i }),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/submitted' },
              c.a.createElement(fu, null),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/waitlisted' },
              c.a.createElement(vu, null),
            ),
            c.a.createElement(E.b, { exact: !0, path: '/settings/superfollows/rejected' }, c.a.createElement(du, null)),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/perks_intro_examples' },
              c.a.createElement(au, null),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/perks_description_examples' },
              c.a.createElement(Nc, null),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/perks_preview' },
              c.a.createElement(su, null),
            ),
            c.a.createElement(E.b, { exact: !0, path: '/settings/superfollows' }, c.a.createElement(D.a, { to: o })),
          )
        },
        Eu = n('n0Rl'),
        Cu = n('q9Zt'),
        xu = p.a.hae1c933,
        Ku = void 0 !== $n ? $n : ($n = n('G8I5')),
        Lu = Object(Eu.b)(Ku, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        Tu = K.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      a.default = function () {
        return c.a.createElement(Lu, {
          render: function (e) {
            var a,
              n,
              t = e.data,
              r = (e.error, e.fetchStatus),
              l = e.retry,
              i = null == t ? void 0 : t.super_follows_price_offerings,
              o =
                null == t || null === (a = t.viewer) || void 0 === a || null === (n = a.user_results) || void 0 === n
                  ? void 0
                  : n.result,
              s = null == t ? void 0 : t.viewer
            return c.a.createElement(u.a, {
              fetchStatus: Object(m.b)(r, null != i && 'User' === (null == o ? void 0 : o.__typename) && null != s),
              onRequestRetry: l,
              render: function () {
                return null == i || 'User' !== (null == o ? void 0 : o.__typename) || null == s
                  ? null
                  : c.a.createElement(Fu, { priceOfferings: i, user: o, viewer: s })
              },
              renderFailure: function () {
                return c.a.createElement(P, null, c.a.createElement(Cu.a, { onRetry: l, style: Tu.error, title: xu }))
              },
              retryable: !1,
            })
          },
          variables: {},
        })
      }
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksIntroCore_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsSaveOnboarding_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '85df13f919973a59919cc34fa4580c96',
      }
      a.default = t
    },
    'p+r5': function (e, a, n) {
      'use strict'
      n.d(a, 'a', function () {
        return j
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
        y = n('KEM+'),
        h = n.n(y),
        v = (n('2G9S'), n('ERkP')),
        w = n.n(v),
        _ = n('38/B'),
        S = n('t62R'),
        k = n('/yvb'),
        F = n('piX5'),
        E = n('3XMw'),
        C = n.n(E),
        x = n('tI3i'),
        K = n.n(x),
        L = n('oQhu'),
        T = n('rHpw'),
        P = n('aITJ'),
        O = n('MWbm'),
        D = n('n5fo'),
        I = n('5emT'),
        B = n('Oib4'),
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
        U = function (e) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A
          return a(e)
        },
        M = C.a.de540c32,
        H = C.a.b4abfdb3,
        j = (function (e) {
          g()(n, e)
          var a = b()(n)
          function n(e) {
            var t
            s()(this, n),
              (t = a.call(this, e)),
              h()(p()(t), '_blurOnBackspaceKeyUpForKaiOS', !1),
              h()(p()(t), '_isLabelLarge', function () {
                var e = t.state,
                  a = e.actualCount,
                  n = e.isFocused
                return !a && !n
              }),
              h()(
                p()(t),
                '_getTextInputStyle',
                Object(L.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              h()(p()(t), '_getTextInputType', function () {
                var e = t.props,
                  a = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = t.state.isPasswordRevealed
                return 'password' === n && a ? (r ? 'text' : 'password') : n
              }),
              h()(p()(t), '_calculateLength', function (e) {
                return U(e, t.props.calculateLength)
              }),
              h()(p()(t), '_shouldRenderDisplayCount', function () {
                var e = t.state.isFocused,
                  a = t._isFormInvalid()
                return Boolean((e || a) && t._getMaxDisplayCount())
              }),
              h()(p()(t), '_isInvalidNumber', function () {
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
              h()(p()(t), '_getActualCount', function (e) {
                var a = e.length
                return t._isInvalidNumber() && (a = 1), a
              }),
              h()(p()(t), '_handleBlur', function (e) {
                var a = t.props.onBlur,
                  n = e.currentTarget.value,
                  r = t._calculateLength(n),
                  l = t._getActualCount(n)
                t.setState({ isFocused: !1, displayCount: r, actualCount: l }), a && a(e)
              }),
              h()(p()(t), '_handleChange', function (e) {
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
              h()(p()(t), '_handleFocus', function (e) {
                var a = t.props.onFocus
                t.setState({ isFocused: !0 }), a && a(e)
              }),
              h()(p()(t), '_handleKeyPress', function (e) {
                var a = t.props,
                  n = a.multiline,
                  r = a.onKeyPress,
                  l = a.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !l || (e.preventDefault(), l(e))
              }),
              h()(p()(t), '_handleKeyDown', function (e) {
                var a = t.props.onKeyDown,
                  n = 0 === t.state.displayCount
                P.b.isKaiOS() && 'Backspace' === e.key && n ? (t._blurOnBackspaceKeyUpForKaiOS = n) : a && a(e)
              }),
              h()(p()(t), '_handleKeyUp', function (e) {
                var a = t.props.onKeyUp
                P.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  t._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), t.blur()),
                  a && a(e)
              }),
              h()(p()(t), '_handlePasswordVisibilityClick', function (e) {
                t.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              h()(p()(t), '_setTextInputRef', function (e) {
                t._textInput = e
              }),
              h()(p()(t), '_checkComponentPropsUsageCorrectness', function (e) {
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
              h()(p()(t), '_exceedsValidLength', function (e) {
                var a = t._getMaxDisplayCount()
                return !!a && e > a
              }),
              h()(p()(t), '_getMaxDisplayCount', function () {
                return t.props.validLength || t.props.maxLength
              }),
              h()(p()(t), '_getAdjustedMaxLength', function () {
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
                      O.a,
                      { style: [N.root, l] },
                      w.a.createElement(
                        O.a,
                        {
                          accessibilityLabel: a,
                          accessibilityRole: 'label',
                          style: [
                            F.a.border,
                            N.textInputFormStyle,
                            o && F.a.invalidBorderColor,
                            i && o && F.a.focusedBorderInvalid,
                            i && !o && F.a.focusedBorderValid,
                            !n && F.a.disabled,
                          ],
                        },
                        w.a.createElement(
                          O.a,
                          { style: N.textInputFormWrapper },
                          w.a.createElement(
                            O.a,
                            { style: N.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        O.a,
                        { style: [N.sidePadding, N.underTextInputForm] },
                        w.a.createElement(
                          O.a,
                          { style: N.subtextWrapper },
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
                          N.textInputHeaderItem,
                          t && N.placeholderText,
                          !_.a.reducedMotionEnabled && N.transition,
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
                      O.a,
                      { style: W.container },
                      a && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        S.b,
                        { size: 'headline1', style: W.wrapper },
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
                          O.a,
                          { style: N.passwordVisibilityIconContainer },
                          w.a.createElement(k.a, {
                            accessibilityLabel: t ? H : M,
                            focusable: !0,
                            hoverLabel: { label: t ? H : M },
                            icon: t ? w.a.createElement(D.a, null) : w.a.createElement(I.a, null),
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
                      O.a,
                      { accessibilityLiveRegion: 'polite' },
                      w.a.createElement(
                        S.b,
                        { color: 'gray700', size: 'subtext2', style: N.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return w.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'assertive' },
                      w.a.createElement(
                        S.b,
                        { color: 'red500', size: 'subtext2', style: N.subtext },
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
                      O.a,
                      { accessibilityLiveRegion: 'polite', style: [N.textInputHeaderItem, N.displayCount] },
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
                      n = [N.icon, a && N.focusedIcon]
                    return e && w.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? w.a.createElement(B.a, { style: [N.validationIcon, F.a.invalidColor] })
                      : w.a.createElement(R.a, { style: [N.validationIcon, F.a.validColor] })
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
                      r = 'string' == typeof t ? U(t, n) : 0
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
      h()(j, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (j.propTypes = {})
      var W = T.a.create(function (e) {
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
        N = T.a.create(function (e) {
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
    tJ4s: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksDescriptionScreen_viewer',
        selections: [
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksDescriptionCore_viewer' },
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
        hash: '14f43a5a4607d106a815a1d9ac6f3202',
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'creator_intro', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'selected_price', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: 'edc848fe657e8dd7b1c0f47d400a82d7',
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
        r = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            selections: (t = [
              {
                alias: null,
                args: [{ kind: 'Literal', name: 's', value: 23 }],
                kind: 'ScalarField',
                name: 'stripe_account_create_onboarding_url',
                storageKey: 'stripe_account_create_onboarding_url(s:23)',
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [],
            kind: 'Operation',
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            selections: t,
          },
          params: {
            id: 'nRB8N1tre2yDNBjO6rLziw',
            metadata: {},
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(r.hash = '8e42f33fe72435124b83c69d58590c08'), (a.default = r)
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
            name: 'clientOnlyState_viewer',
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
        hash: '3abdf03b827490342dcb1cd466cb6120',
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
            name: 'clientOnlyState_viewer',
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
        hash: 'b499e804fb129a1620e7d1f71e30ebc8',
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
