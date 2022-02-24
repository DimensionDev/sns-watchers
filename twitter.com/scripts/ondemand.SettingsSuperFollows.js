;(window.webpackJsonp = window.webpackJsonp || []).push([
  [238],
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
        h = n('P1r1'),
        y = n('G6rE'),
        w = n('rxPX'),
        _ = n('0KEI'),
        v = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: h.o, loggedInUser: y.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: h.f,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
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
      a.a = v(O)
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
        var w = u(
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
        return [w, b]
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
            id: '0-heqLY1OV4T-8MISRvN9Q',
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
        h = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        w = n.n(y),
        _ = n('HPNB'),
        v = n('VAZu'),
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
                  ? w.a.createElement(
                      K.a,
                      { style: x.fill },
                      w.a.createElement(
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
                  return w.a.createElement(P.a, null, function (a) {
                    var n = a.windowWidth
                    return _.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    Object(k.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : w.a.createElement(S.a.Configure, n),
                    a,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return w.a.createElement(
                    w.a.Fragment,
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
                    _ = n.showSubtitleOnWideDetail,
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
                    B = (I && _) || (O && y),
                    R = O || (I && a),
                    V = O ? h.c : I ? h.a : void 0,
                    z = w.a.createElement(
                      K.a,
                      { style: x.appBarContainer },
                      w.a.createElement(v.a, {
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
                        : w.a.createElement(S.a.Configure, {
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
                  return w.a.createElement(w.a.Fragment, null, A, z)
                },
              },
            ]),
            n
          )
        })(w.a.Component)
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
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksSummaryFramed_viewer' }],
        type: 'Viewer',
        abstractKey: null,
        hash: '6b86ff0ca3746915c797a2c459408f86',
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
    STrk: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksSummaryFramed_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'ExclusiveDemoVIPContent_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '2ba1e5891c80f64ca49f8547633a713f',
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
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksSummaryFramed_user' }],
        type: 'User',
        abstractKey: null,
        hash: '00fdff4ed1db74a1a25274467b820967',
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
    bWed: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsPerksSummaryFramed_viewer',
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
        hash: '7bff4288ccc51437d7299d5819a68082',
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
              name: 'clientOnlyState_viewer',
              selections: [
                {
                  kind: 'ClientExtension',
                  selections: (t = [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }]),
                },
              ],
            },
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
      ;(r.hash = 'e56518dbb90a1348585c398e96155404'), (a.default = r)
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
              name: 'clientOnlyState_viewer',
              selections: [
                {
                  kind: 'ClientExtension',
                  selections: (t = [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }]),
                },
              ],
            },
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
      ;(r.hash = '65fbfb20b12d67ce9db48b414ecbd3af'), (a.default = r)
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
        w = function (e) {
          var a = e.accessibilityLabel,
            n = e.accessibilityPosInSet,
            t = e.accessibilitySetSize,
            r = e.checked,
            l = e.disabled,
            o = e.helpText,
            s = e.label,
            c = e.name,
            w = e.onChange,
            _ = m.a.generate({
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
                    { disabled: l, interactiveStyles: _, interactivityState: e, style: h.radioBackground },
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
                    onChange: r ? void 0 : w,
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
              return i.a.createElement(w, r()({}, e, { key: e.value }))
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
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingDescription_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsSaveOnboarding_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '867c9b598cb16cde4fe54a44d91927b1',
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
              name: 'clientOnlyState_viewer',
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
      ;(r.hash = 'c3b696a2f27a89cc27c1f255357e536c'), (a.default = r)
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
          return zu
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return J
        }),
        n.d(t, 'Arrow2x', function () {
          return Z
        }),
        n.d(t, 'Arrow3x', function () {
          return $
        }),
        n.d(t, 'Bench', function () {
          return ee
        }),
        n.d(t, 'Bench2x', function () {
          return ae
        }),
        n.d(t, 'Bench3x', function () {
          return ne
        }),
        n.d(t, 'Cat', function () {
          return te
        }),
        n.d(t, 'Cat2x', function () {
          return re
        }),
        n.d(t, 'Cat3x', function () {
          return le
        }),
        n.d(t, 'Clipboard', function () {
          return ie
        }),
        n.d(t, 'Clipboard2x', function () {
          return oe
        }),
        n.d(t, 'Clipboard3x', function () {
          return se
        }),
        n.d(t, 'CoinStairs', function () {
          return ce
        }),
        n.d(t, 'CoinStairs2x', function () {
          return ue
        }),
        n.d(t, 'CoinStairs3x', function () {
          return de
        }),
        n.d(t, 'HandCoins', function () {
          return pe
        }),
        n.d(t, 'HandCoins2x', function () {
          return me
        }),
        n.d(t, 'HandCoins3x', function () {
          return ge
        }),
        n.d(t, 'OneFinger', function () {
          return fe
        }),
        n.d(t, 'OneFinger2x', function () {
          return be
        }),
        n.d(t, 'OneFinger3x', function () {
          return he
        }),
        n.d(t, 'PaperAirplane', function () {
          return ye
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return we
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return _e
        }),
        n.d(t, 'Pricing', function () {
          return ve
        }),
        n.d(t, 'Pricing2x', function () {
          return Se
        }),
        n.d(t, 'Pricing3x', function () {
          return ke
        }),
        n.d(t, 'Puzzle', function () {
          return Fe
        }),
        n.d(t, 'Puzzle2x', function () {
          return Ee
        }),
        n.d(t, 'Puzzle3x', function () {
          return Ce
        }),
        n.d(t, 'Thumbsup', function () {
          return xe
        }),
        n.d(t, 'Thumbsup2x', function () {
          return Ke
        }),
        n.d(t, 'Thumbsup3x', function () {
          return Le
        }),
        n.d(t, 'TrafficLight', function () {
          return Te
        }),
        n.d(t, 'TrafficLight2x', function () {
          return Pe
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Oe
        }),
        n.d(t, 'Uturn', function () {
          return De
        }),
        n.d(t, 'Uturn2x', function () {
          return Ie
        }),
        n.d(t, 'Uturn3x', function () {
          return Be
        })
      var r = {}
      n.r(r),
        n.d(r, 'Chat', function () {
          return bi
        }),
        n.d(r, 'Chat2x', function () {
          return hi
        }),
        n.d(r, 'Chat3x', function () {
          return yi
        }),
        n.d(r, 'Cog', function () {
          return wi
        }),
        n.d(r, 'Cog2x', function () {
          return _i
        }),
        n.d(r, 'Cog3x', function () {
          return vi
        }),
        n.d(r, 'Coin', function () {
          return Si
        }),
        n.d(r, 'Coin2x', function () {
          return ki
        }),
        n.d(r, 'Coin3x', function () {
          return Fi
        }),
        n.d(r, 'CoinPurse', function () {
          return Ei
        }),
        n.d(r, 'CoinPurse2x', function () {
          return Ci
        }),
        n.d(r, 'CoinPurse3x', function () {
          return xi
        }),
        n.d(r, 'Cone', function () {
          return Ki
        }),
        n.d(r, 'Cone2x', function () {
          return Li
        }),
        n.d(r, 'Cone3x', function () {
          return Ti
        }),
        n.d(r, 'Cross', function () {
          return Pi
        }),
        n.d(r, 'Cross2x', function () {
          return Oi
        }),
        n.d(r, 'Cross3x', function () {
          return Di
        }),
        n.d(r, 'FirstAid', function () {
          return Ii
        }),
        n.d(r, 'FirstAid2x', function () {
          return Bi
        }),
        n.d(r, 'FirstAid3x', function () {
          return Ri
        }),
        n.d(r, 'Heart', function () {
          return Vi
        }),
        n.d(r, 'Heart2x', function () {
          return zi
        }),
        n.d(r, 'Heart3x', function () {
          return Ai
        }),
        n.d(r, 'LifeSaver', function () {
          return Mi
        }),
        n.d(r, 'LifeSaver2x', function () {
          return Ui
        }),
        n.d(r, 'LifeSaver3x', function () {
          return Hi
        }),
        n.d(r, 'Lightbulb', function () {
          return ji
        }),
        n.d(r, 'Lightbulb2x', function () {
          return Wi
        }),
        n.d(r, 'Lightbulb3x', function () {
          return Ni
        }),
        n.d(r, 'NoEntry', function () {
          return Gi
        }),
        n.d(r, 'NoEntry2x', function () {
          return qi
        }),
        n.d(r, 'NoEntry3x', function () {
          return Qi
        }),
        n.d(r, 'Pencil', function () {
          return Xi
        }),
        n.d(r, 'Pencil2x', function () {
          return Yi
        }),
        n.d(r, 'Pencil3x', function () {
          return Ji
        }),
        n.d(r, 'PiggyBank', function () {
          return Zi
        }),
        n.d(r, 'PiggyBank2x', function () {
          return $i
        }),
        n.d(r, 'PiggyBank3x', function () {
          return eo
        }),
        n.d(r, 'Plant', function () {
          return ao
        }),
        n.d(r, 'Plant2x', function () {
          return no
        }),
        n.d(r, 'Plant3x', function () {
          return to
        }),
        n.d(r, 'Puzzle', function () {
          return ro
        }),
        n.d(r, 'Puzzle2x', function () {
          return lo
        }),
        n.d(r, 'Puzzle3x', function () {
          return io
        }),
        n.d(r, 'Ribbon', function () {
          return oo
        }),
        n.d(r, 'Ribbon2x', function () {
          return so
        }),
        n.d(r, 'Ribbon3x', function () {
          return co
        }),
        n.d(r, 'Spheres', function () {
          return uo
        }),
        n.d(r, 'Spheres2x', function () {
          return po
        }),
        n.d(r, 'Spheres3x', function () {
          return mo
        }),
        n.d(r, 'Star', function () {
          return go
        }),
        n.d(r, 'Star2x', function () {
          return fo
        }),
        n.d(r, 'Star3x', function () {
          return bo
        }),
        n.d(r, 'TrashCan', function () {
          return ho
        }),
        n.d(r, 'TrashCan2x', function () {
          return yo
        }),
        n.d(r, 'TrashCan3x', function () {
          return wo
        }),
        n.d(r, 'Wallet', function () {
          return _o
        }),
        n.d(r, 'Wallet2x', function () {
          return vo
        }),
        n.d(r, 'Wallet3x', function () {
          return So
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
        h = n.n(b),
        y = n('jHSc'),
        w = n('lUZE'),
        _ = 'https://help.twitter.com/using-twitter/super-follows-creator',
        v = ''.concat(_, '#pricechange'),
        S = n('/yvb'),
        k = n('6s7X'),
        F = function () {
          return c.a.createElement(S.a, { icon: c.a.createElement(k.a, null), link: _, type: 'primaryText' })
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
            i = h()(e, L),
            o = Object(E.f)(),
            s = a ? 'close' : 'back',
            u = a ? '/settings/monetization' : void 0,
            d = r ? c.a.createElement(w.a, { style: O.iconTwitter }) : void 0,
            p = l ? c.a.createElement(C.a, { style: O.rightControl }, c.a.createElement(F, null), t) : t,
            m = n ? c.a.createElement(x.a, { progress: n }) : void 0
          return c.a.createElement(
            y.b,
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
        I = (n('849X'), n('TJCb'), n('v6aA')),
        B = p.a.g92a2343,
        R = p.a.a91bb144,
        V = function () {
          var e = Object(E.f)(),
            a = c.a.createElement(
              S.a,
              {
                onPress: function () {
                  e.push('/settings/superfollows/application/submit')
                },
                type: 'primaryFilled',
              },
              R,
            )
          return c.a.createElement(P, { rightControl: a, title: B })
        },
        z = (n('jQ3i'), n('x4t0'), n('z84I'), n('KqXw'), n('3uku'), n('855f')),
        A = n('t62R'),
        M = n('WtWS'),
        U = n('0ULw'),
        H = function (e) {
          var a = e.items
          return c.a.createElement(
            C.a,
            { style: j.root },
            a.map(function (e) {
              return c.a.createElement(
                C.a,
                { key: e.label, style: j.item },
                c.a.createElement(A.b, { style: j.label, weight: 'bold' }, e.label),
                e.checked
                  ? c.a.createElement(M.a, { style: j.iconChecked })
                  : c.a.createElement(U.a, { style: j.iconUnchecked }),
              )
            }),
          )
        },
        j = K.a.create(function (e) {
          return {
            root: { gap: e.spaces.space24 },
            item: { flexDirection: 'row' },
            label: { flex: 1 },
            iconChecked: { color: e.colors.green500 },
            iconUnchecked: { color: e.colors.gray200 },
          }
        }),
        W = function () {
          return c.a.createElement(
            A.b,
            { align: 'center', color: 'gray700' },
            c.a.createElement(
              p.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              c.a.createElement(
                A.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                p.a.ebc0cbbc,
              ),
            ),
          )
        },
        N = n('ddV6'),
        G = n.n(N),
        q = (n('7x/C'), n('JtPf'), n('Qavd'), ['disabled', 'label', 'onPress', 'path']),
        Q = function (e) {
          var a = e.disabled,
            n = e.label,
            t = e.onPress,
            r = e.path,
            l = h()(e, q),
            i = Object(E.f)(),
            o = c.a.useState(!1),
            s = G()(o, 2),
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
        X = n('jAXQ'),
        Y = n.n(X),
        J = (n('yH/f'), n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        Z = n.p + 'Arrow@2x.8af675c5.png',
        $ = n.p + 'Arrow@3x.949d4365.png',
        ee = n.p + 'Bench.ed26a435.png',
        ae = n.p + 'Bench@2x.ef9fb7d5.png',
        ne = n.p + 'Bench@3x.a306fd55.png',
        te = n.p + 'Cat.089435a5.png',
        re = n.p + 'Cat@2x.bca70155.png',
        le = n.p + 'Cat@3x.2b225ef5.png',
        ie = n.p + 'Clipboard.540710d5.png',
        oe = n.p + 'Clipboard@2x.72ca72e5.png',
        se = n.p + 'Clipboard@3x.1b952e95.png',
        ce = n.p + 'CoinStairs.8488b245.png',
        ue = n.p + 'CoinStairs@2x.34fd5855.png',
        de = n.p + 'CoinStairs@3x.1b706305.png',
        pe = n.p + 'HandCoins.fbd23965.png',
        me = n.p + 'HandCoins@2x.c1b62b75.png',
        ge = n.p + 'HandCoins@3x.7dd5f3d5.png',
        fe = n.p + 'OneFinger.6eb5d9c5.png',
        be = n.p + 'OneFinger@2x.a13e1ba5.png',
        he = n.p + 'OneFinger@3x.7f22c175.png',
        ye = n.p + 'PaperAirplane.1ef48a05.png',
        we = n.p + 'PaperAirplane@2x.2923eb15.png',
        _e = n.p + 'PaperAirplane@3x.47e4b145.png',
        ve = n.p + 'Pricing.ec5962d5.png',
        Se = n.p + 'Pricing@2x.f8284265.png',
        ke = n.p + 'Pricing@3x.b6cf0185.png',
        Fe = n.p + 'Puzzle.aa045515.png',
        Ee = n.p + 'Puzzle@2x.5be7ab15.png',
        Ce = n.p + 'Puzzle@3x.1796b225.png',
        xe = n.p + 'Thumbsup.f5be79d5.png',
        Ke = n.p + 'Thumbsup@2x.6d106945.png',
        Le = n.p + 'Thumbsup@3x.6a81e6d5.png',
        Te = n.p + 'TrafficLight.11644b65.png',
        Pe = n.p + 'TrafficLight@2x.5657de25.png',
        Oe = n.p + 'TrafficLight@3x.a5a35335.png',
        De = n.p + 'Uturn.c8267f55.png',
        Ie = n.p + 'Uturn@2x.db3f94d5.png',
        Be = n.p + 'Uturn@3x.22f27905.png',
        Re = n('tn7R'),
        Ve = n('TIdA'),
        ze = n('A91F'),
        Ae = 400,
        Me = [1, 2, 3],
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
        He = Object(Re.a)(Ue).reduce(function (e, a) {
          var n = Math.max.apply(Math, Me)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Ae * n, height: 250 * n },
              customVariants: Me.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Ae * e, height: 250 * e }
              }),
            }),
            e
          )
        }, {}),
        je = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? Ae : n,
            r = He[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            C.a,
            { style: [We.illustration, s] },
            c.a.createElement(Ve.a, {
              accessibilityLabel: '',
              aspectMode: ze.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        We = K.a.create(function (e) {
          return { illustration: { alignSelf: 'center' } }
        }),
        Ne = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            r = e.subtext
          return c.a.createElement(
            c.a.Fragment,
            null,
            t && c.a.createElement(je, { type: t, width: 311 }),
            c.a.createElement(
              A.b,
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
            c.a.createElement(A.b, { align: a, color: 'gray700', style: Ge.subtext }, r),
          )
        },
        Ge = K.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space16 } }
        }),
        qe = p.a.feb54b4f,
        Qe = p.a.bac156a6,
        Xe = p.a.a3a20a10,
        Ye = p.a.b26ae507,
        Je = p.a.a753a87f,
        Ze = p.a.abfaa527,
        $e = z.a.getTruncatedCount(1e4),
        ea = p.a.fdd95737({ minFollowersCount: $e }),
        aa = z.a.getTruncatedCount(25),
        na = [
          {
            label: ea,
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
            label: p.a.a0dcad86({ minTweetsCount: aa }),
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
        ta = void 0 !== l ? l : (l = n('RLjm')),
        ra = function (e) {
          var a = e.user,
            n = Y()(ta, a),
            t = 0 === ((null == n ? void 0 : n.super_following_eligibility) || []).length,
            r = t ? Ue.Arrow : Ue.TrafficLight,
            l = t ? qe : Xe,
            i = t ? Qe : Ye,
            o = na.map(function (e) {
              return { label: e.label, checked: (0, e.test)(n) }
            })
          return c.a.createElement(
            P,
            { withInfoButton: !0 },
            c.a.createElement(Ne, { headline: l, illustration: r, subtext: i }),
            c.a.createElement(H, { items: o }),
            t && c.a.createElement(W, null),
            c.a.createElement(Q, {
              disabled: !t,
              label: Je,
              path: '/settings/superfollows/application/one_more_thing',
            }),
            c.a.createElement(Q, { label: Ze, path: '/settings/superfollows/application/one_more_thing' }),
          )
        },
        la = n('9RkS'),
        ia = p.a.bbb89925,
        oa = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            o = c.a.useState(i),
            s = G()(o, 2),
            u = s[0],
            d = s[1],
            m = Math.round(a * r * (u / 100))
          return c.a.createElement(
            C.a,
            { style: sa.container },
            c.a.createElement(
              A.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              c.a.createElement(
                p.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                c.a.createElement(A.b, { weight: 'bold' }, p.a.a7dd00ea),
                c.a.createElement(
                  A.b,
                  { style: sa.earnings, weight: 'heavy' },
                  p.a.c62c1d30({ earnings: '$'.concat(z.a.getTruncatedCount(m)) }),
                ),
                c.a.createElement(A.b, { color: 'green500', style: sa.asteriskLeft }, p.a.e0fb982b),
              ),
            ),
            c.a.createElement(
              C.a,
              { style: sa.slider },
              c.a.createElement(la.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: ia({ percent: u }),
                value: u,
              }),
            ),
            c.a.createElement(
              A.b,
              { color: 'green500', size: 'subtext3', style: sa.footnote },
              c.a.createElement(
                p.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                c.a.createElement(A.b, { style: sa.asteriskRight }, p.a.e263c38e),
              ),
            ),
          )
        },
        sa = K.a.create(function (e) {
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
        ca = n('6iuV'),
        ua = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        da = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return c.a.createElement(
            C.a,
            { style: pa.container },
            c.a.createElement(ua.a, { Icon: a, color: 'neutral' }),
            c.a.createElement(A.b, { size: 'headline2', style: pa.title, weight: 'bold' }, t),
            c.a.createElement(A.b, { color: 'gray700', style: pa.description }, n),
          )
        },
        pa = K.a.create(function (e) {
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
        ma = n('sUoZ'),
        ga = n('witV'),
        fa = n('ACHU'),
        ba = [
          { Icon: ma.a, title: p.a.d31c5997, description: p.a.hda1e780 },
          { Icon: ga.a, title: p.a.d08d0bb2, description: p.a.cbd8b105 },
          { Icon: fa.a, title: p.a.becb4930, description: p.a.g743ef96 },
        ],
        ha = function () {
          return c.a.createElement(
            ca.a,
            null,
            ba.map(function (e) {
              return c.a.createElement(da, f()({}, e, { key: e.title }))
            }),
          )
        },
        ya = p.a.a6777c1b,
        wa = p.a.j5dc36d7,
        _a = p.a.c45b2f06,
        va = p.a.hb6b432e,
        Sa = p.a.cd5cae15,
        ka = p.a.f7239f4c,
        Fa = p.a.g8cdf707,
        Ea = p.a.bff8472e,
        Ca = p.a.e533715d,
        xa = void 0 !== i ? i : (i = n('xd+q')),
        Ka = function (e) {
          var a = e.user,
            n = Y()(xa, a).legacy.followers_count
          return c.a.createElement(
            P,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            c.a.createElement(
              A.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ya,
            ),
            c.a.createElement(A.b, null, wa),
            c.a.createElement(
              A.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              _a,
            ),
            c.a.createElement(A.b, { color: 'gray700' }, va),
            c.a.createElement(je, { type: Ue.HandCoins }),
            c.a.createElement(
              A.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Sa,
            ),
            c.a.createElement(ha, null),
            c.a.createElement(
              A.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ka,
            ),
            c.a.createElement(oa, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            c.a.createElement(
              A.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Fa,
            ),
            c.a.createElement(A.b, { color: 'gray700' }, Ea),
            c.a.createElement(Q, {
              color: 'plum500',
              label: Ca,
              path: '/settings/superfollows/application/eligibility',
            }),
          )
        },
        La = p.a.d0fc4890,
        Ta = p.a.c64384b6,
        Pa = p.a.c3d89aca,
        Oa = function () {
          return c.a.createElement(
            P,
            { withInfoButton: !0 },
            c.a.createElement(Ne, { align: 'center', headline: La, illustration: Ue.OneFinger, subtext: Ta }),
            c.a.createElement(Q, { label: Pa, path: '/settings/superfollows/application/complete_profile' }),
          )
        },
        Da = n('tI3i'),
        Ia = n.n(Da),
        Ba = n('FGLp'),
        Ra = (n('2G9S'), n('Hsf0')),
        Va = n.n(Ra),
        za = 'super_follows_application_draft',
        Aa = 'super_follows_onboarding_draft',
        Ma = function (e) {
          return Va()(void 0 !== o ? o : (o = n('PlkH')), e).__id
        },
        Ua = function (e, a) {
          var n = Ma(a),
            t = e.get(n)
          return Ia()(t, 'viewer must be defined'), t
        },
        Ha = function (e, a) {
          return Ua(e, a).getLinkedRecord(za)
        },
        ja = function (e, a) {
          return Ua(e, a).getLinkedRecord(Aa)
        },
        Wa = n('HG4m'),
        Na = n.n(Wa),
        Ga = n('Ud88'),
        qa = n.n(Ga)
      function Qa(e, a) {
        var n = qa()()
        Object(Ba.a)(function () {
          Ia()(e, 'viewerRef must be defined'),
            Na()(n, function (n) {
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
                  h = Ma(a),
                  y = Ua(e, a)
                if (!Ha(e, a)) {
                  var w = e.create(''.concat(h, ':').concat(za), 'SuperFollowsApplicationDraft')
                  w.setValue(r, 'content_category'),
                    w.setValue(i, 'content_category_other'),
                    w.setValue(s, 'content_creation_platform'),
                    w.setValue(u, 'content_creation_platform_other'),
                    w.setValue(b, 'purpose'),
                    w.setValue(p, 'ethnicity'),
                    w.setValue(g, 'gender'),
                    y.setLinkedRecord(w, za)
                }
              })(n, e, a)
            })
        })
      }
      function Xa(e, a) {
        var n = qa()()
        Object(Ba.a)(function () {
          Ia()(e, 'viewerRef must be defined'),
            Na()(n, function (n) {
              !(function (e, a) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  t = n.creator_intro,
                  r = void 0 === t ? null : t,
                  l = n.description,
                  i = void 0 === l ? null : l,
                  o = n.selected_price,
                  s = void 0 === o ? null : o,
                  c = Ma(a),
                  u = Ua(e, a)
                if (!ja(e, a)) {
                  var d = e.create(''.concat(c, ':').concat(Aa), 'SuperFollowsOnboardingDraft')
                  d.setValue(r, 'creator_intro'),
                    d.setValue(i, 'description'),
                    d.setValue(s, 'selected_price'),
                    u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                }
              })(n, e, a)
            })
        })
      }
      function Ya(e, a) {
        var n = qa()()
        return c.a.useCallback(
          function (t) {
            Ia()(e, 'viewerRef must be defined'),
              Na()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Ha(e, a)
                  Ia()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      function Ja(e, a) {
        var n = qa()()
        return c.a.useCallback(
          function (t) {
            Ia()(e, 'viewerId must be defined'),
              Na()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = ja(e, a)
                  Ia()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Za,
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
        hn,
        yn,
        wn,
        _n,
        vn,
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
        Mn,
        Un,
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
        et,
        at,
        nt,
        tt,
        rt = n('p+r5'),
        lt = p.a.f7997b16,
        it = p.a.fc00ab5b,
        ot = p.a.c249167f,
        st = p.a.b772cd65,
        ct = void 0 !== Za ? Za : (Za = n('xhT1')),
        ut = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(ct, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = Ya(r, 'content_category_other')
          return c.a.createElement(
            P,
            { title: lt },
            c.a.createElement(rt.a, {
              helperText: ot,
              label: it,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(S.a, null, st),
          )
        },
        dt = n('fyvP'),
        pt = n('csss'),
        mt = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(E.f)()
          return c.a.createElement(pt.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        gt = p.a.f7997b16,
        ft = p.a.c144fa52,
        bt = [
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
        ht = p.a.c365dcc5,
        yt = p.a.bd44a8a8,
        wt = void 0 !== $a ? $a : ($a = n('JB6R')),
        _t = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(wt, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Ya(r, 'content_category'),
            o = bt.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            P,
            { title: gt },
            c.a.createElement(dt.a, {
              description: ft,
              label: ft,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(mt, {
              helpText: yt,
              label: ht,
              path: '/settings/superfollows/application/submit_categories_other',
            }),
          )
        },
        vt = p.a.d94a9a17,
        St = p.a.a35394b3,
        kt = [
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
        Ft = void 0 !== en ? en : (en = n('H1we')),
        Et = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Ft, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Ya(r, 'ethnicity'),
            o = kt.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            P,
            { title: vt },
            c.a.createElement(dt.a, {
              description: St,
              label: St,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        Ct = p.a.a8d0108d,
        xt = p.a.a35394b3,
        Kt = [
          p.a.de32365f,
          p.a.b6ab31bd,
          p.a.ffc23188,
          p.a.h1cc7091,
          p.a.hca27829,
          p.a.b3af7344,
          p.a.he3f1435,
          p.a.c3c16abb,
        ],
        Lt = void 0 !== an ? an : (an = n('VG5i')),
        Tt = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Lt, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Ya(r, 'gender'),
            o = Kt.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            P,
            { title: Ct },
            c.a.createElement(dt.a, {
              description: xt,
              label: xt,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        Pt = p.a.da8ea7da,
        Ot = p.a.d7081f91,
        Dt = p.a.j349548f,
        It = p.a.b772cd65,
        Bt = void 0 !== nn ? nn : (nn = n('+OUG')),
        Rt = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Bt, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = Ya(r, 'content_creation_platform_other')
          return c.a.createElement(
            P,
            { title: Pt },
            c.a.createElement(rt.a, {
              helperText: Dt,
              label: Ot,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(S.a, null, It),
          )
        },
        Vt = p.a.da8ea7da,
        zt = p.a.d4062c9a,
        At = [p.a.a3021317, p.a.eb4a600d, p.a.d4d74bb3, p.a.fc738909, p.a.d8552c1a, p.a.ca07aa46],
        Mt = p.a.c365dcc5,
        Ut = p.a.bd44a8a8,
        Ht = void 0 !== tn ? tn : (tn = n('xnrs')),
        jt = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Ht, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Ya(r, 'content_creation_platform'),
            o = At.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            P,
            { title: Vt },
            c.a.createElement(dt.a, {
              description: zt,
              label: zt,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(mt, {
              helpText: Ut,
              label: Mt,
              path: '/settings/superfollows/application/submit_platforms_other',
            }),
          )
        },
        Wt = (n('tVqn'), n('uFXj'), p.a.f4f4dd6f),
        Nt = p.a.f448cbcb,
        Gt = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? Wt : 'optional' === n ? Nt : void 0
          return c.a.createElement(
            C.a,
            { style: qt.container },
            c.a.createElement(A.b, { size: 'headline1', weight: 'heavy' }, a),
            r && c.a.createElement(A.b, { color: t, size: 'subtext2', style: qt.subtext }, r),
          )
        },
        qt = K.a.create(function (e) {
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
        Qt = n('jV+4'),
        Xt = n('Xrkv'),
        Yt = n('9SqB'),
        Jt = n.n(Yt),
        Zt = p.a.e873f0ae,
        $t = p.a.f095a24a,
        er = p.a.i5f7b6b8,
        ar = p.a.d1f6d336,
        nr = p.a.f7997b16,
        tr = p.a.c144fa52,
        rr = p.a.f1bf337d,
        lr = p.a.da8ea7da,
        ir = p.a.d4062c9a,
        or = p.a.e963d587,
        sr = p.a.ede0ac3e,
        cr = p.a.ffb6cb88,
        ur = p.a.b2159e8e,
        dr = p.a.feacb49d,
        pr = p.a.je17c987,
        mr = p.a.d94a9a17,
        gr = p.a.a8d0108d,
        fr = p.a.gfc80842,
        br = void 0 !== rn ? rn : (rn = n('pLb/')),
        hr = void 0 !== ln ? ln : (ln = n('3qCL')),
        yr = void 0 !== on ? on : (on = n('AyUU')),
        wr = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i,
            o,
            s = e.user,
            u = e.viewer,
            d = Y()(br, s),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = Y()(hr, u),
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
            v = Ya(m, 'purpose'),
            S = Jt()(yr),
            k = G()(S, 2),
            F = k[0],
            E = k[1]
          return c.a.createElement(
            P,
            { withInfoButton: !0 },
            c.a.createElement(Ne, { headline: Zt, illustration: Ue.Clipboard, subtext: $t }),
            c.a.createElement(Gt, { title: er }),
            c.a.createElement(A.b, null, ar),
            p && c.a.createElement(Qt.a, { screenName: p }),
            c.a.createElement(Gt, { title: nr, type: 'required' }),
            c.a.createElement(A.b, { color: 'gray700' }, tr),
            c.a.createElement(mt, {
              description: Object(Xt.a)(f, !0),
              label: rr,
              path: '/settings/superfollows/application/submit_categories',
            }),
            c.a.createElement(Gt, { title: lr, type: 'required' }),
            c.a.createElement(A.b, { color: 'gray700' }, ir),
            c.a.createElement(mt, {
              description: Object(Xt.a)(b, !0),
              label: or,
              path: '/settings/superfollows/application/submit_platforms',
            }),
            c.a.createElement(Gt, { title: sr, type: 'required' }),
            c.a.createElement(rt.a, {
              helperText: ur,
              label: cr,
              name: 'plannedUsage',
              onChange: function (e) {
                v(e.currentTarget.value)
              },
              value: h,
            }),
            c.a.createElement(Gt, { title: dr, type: 'optional' }),
            c.a.createElement(A.b, { color: 'gray700' }, pr),
            c.a.createElement(mt, {
              description: Object(Xt.a)(y, !0),
              label: mr,
              path: '/settings/superfollows/application/submit_ethnicities',
            }),
            c.a.createElement(mt, {
              description: Object(Xt.a)(w, !0),
              label: gr,
              path: '/settings/superfollows/application/submit_genders',
            }),
            c.a.createElement(W, null),
            c.a.createElement(Q, {
              disabled: !_ || E,
              label: fr,
              onPress: function () {
                return new Promise(function (e, a) {
                  F({
                    variables: { category: f, platform: b, purpose: h, ethnicity: y, gender: w },
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
        _r = void 0 !== sn ? sn : (sn = n('o/nB')),
        vr = void 0 !== cn ? cn : (cn = n('lZLw')),
        Sr = function (e) {
          var a = e.user,
            n = e.viewer,
            t = c.a.useContext(I.a).featureSwitches,
            r = Y()(_r, a),
            l = Y()(vr, n)
          if ((Qa(l), !t.isTrue('super_follow_web_application_enabled')))
            throw new Error('Super Follows application is not enabled')
          return null == l.super_follows_application_draft
            ? c.a.createElement(D.a, { to: '/settings/superfollows' })
            : c.a.createElement(
                E.d,
                null,
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/eligibility' },
                  c.a.createElement(ra, { user: r }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/one_more_thing' },
                  c.a.createElement(Oa, null),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/complete_profile' },
                  c.a.createElement(V, null),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit' },
                  c.a.createElement(wr, { user: r, viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_categories' },
                  c.a.createElement(_t, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_categories_other' },
                  c.a.createElement(ut, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_platforms' },
                  c.a.createElement(jt, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_platforms_other' },
                  c.a.createElement(Rt, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_ethnicities' },
                  c.a.createElement(Et, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_genders' },
                  c.a.createElement(Tt, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { path: '/settings/superfollows/application' },
                  c.a.createElement(Ka, { user: r }),
                ),
              )
        },
        kr = (n('hBpG'), n('cHvH')),
        Fr = function (e) {
          var a = e.children,
            n = e.style,
            t = Object(kr.b)().windowWidth > K.a.theme.breakpoints.medium ? Er.marginWide : Er.marginNarrow
          return c.a.createElement(C.a, { style: [n, t] }, a)
        },
        Er = K.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space80 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        Cr = (n('ho0z'), n('+7VC')),
        xr = n('1k08'),
        Kr = ['style'],
        Lr = p.a.b600eb88,
        Tr = p.a.b08bbeb4,
        Pr = function (e) {
          var a = e.style,
            n = h()(e, Kr),
            t = Object(kr.b)().windowWidth > K.a.theme.breakpoints.medium
          return c.a.createElement(
            C.a,
            { style: [Or.root, t && Or.rootWide, a] },
            c.a.createElement(xr.a, { description: Tr, title: Lr }),
            c.a.createElement(Cr.a, f()({}, n, { style: Or.exclusiveDemoVIPContent })),
          )
        },
        Or = K.a.create(function (e) {
          return {
            description: { marginTop: e.spaces.space8 },
            exclusiveDemoVIPContent: { alignSelf: 'center', marginTop: e.spaces.space32 },
            root: {
              paddingBottom: e.spaces.space16,
              paddingHorizontal: e.spaces.space32,
              paddingTop: e.spaces.space48,
            },
            rootWide: { paddingHorizontal: e.spaces.space48 },
          }
        }),
        Dr = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(
            C.a,
            { style: [Rr.frame, n] },
            c.a.createElement(
              C.a,
              { style: Rr.browserBar },
              c.a.createElement(
                C.a,
                { style: Rr.browserBarButtons },
                c.a.createElement(C.a, { style: Rr.browserBarButton }),
                c.a.createElement(C.a, { style: Rr.browserBarButton }),
                c.a.createElement(C.a, { style: Rr.browserBarButton }),
              ),
              c.a.createElement(
                C.a,
                { style: Rr.browserBarUrlInputWrapper },
                c.a.createElement(C.a, { style: Rr.browserBarUrlInput }),
              ),
            ),
            a,
          )
        },
        Ir = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(C.a, { style: n }, c.a.createElement(C.a, { style: Rr.content }, a))
        },
        Br = function (e) {
          var a = e.children,
            n = e.style
          return Object(kr.b)().windowWidth > K.a.theme.breakpoints.medium
            ? c.a.createElement(Dr, { style: n }, c.a.createElement(Ir, { style: Rr.contentWide }, a))
            : c.a.createElement(Ir, { style: n }, a)
        },
        Rr = K.a.create(function (e) {
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
        Vr = n('lD8l'),
        zr = (n('kH1Z'), n('6U7i'), n('9VLy')),
        Ar = n('6OUF'),
        Mr = n('yTN1'),
        Ur = p.a.a329ce87,
        Hr = function (e, a) {
          var n,
            t = e.autoFocus,
            r = e.imageUrl,
            l = e.onChange,
            i = e.screenName,
            o = e.style,
            s = e.value,
            u = e.valueMaxLength
          return c.a.createElement(
            C.a,
            { style: [Wr.root, o] },
            l
              ? c.a.createElement(Ar.a, {
                  autoFocus: t,
                  inputStyle: Wr.descriptionInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'description',
                  numberOfLines: 1,
                  onChange: l,
                  placeholder: Ur,
                  ref: a,
                  style: Wr.description,
                  value: s,
                })
              : c.a.createElement(A.b, { color: 'gray700', style: Wr.description }, s),
            c.a.createElement(
              C.a,
              { style: Wr.signatureWrapper },
              c.a.createElement(zr.a, { imageUrl: r, screenName: i, style: [Wr.signature, !s && Wr.visibilityHidden] }),
              l &&
                u &&
                c.a.createElement(Mr.a, {
                  count: null !== (n = null == s ? void 0 : s.length) && void 0 !== n ? n : 0,
                  maxCount: u,
                  warningCount: u - 10,
                }),
            ),
          )
        },
        jr = c.a.forwardRef(Hr),
        Wr = K.a.create(function (e) {
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
            signatureWrapper: {
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: e.spaces.space12,
              width: '100%',
            },
            signature: { flex: 1 },
            visibilityHidden: { visibility: 'hidden' },
          }
        }),
        Nr = ['style'],
        Gr = p.a.cbc8ce27,
        qr = function (e, a) {
          var n = e.style,
            t = h()(e, Nr),
            r = Object(kr.b)().windowWidth > K.a.theme.breakpoints.medium
          return c.a.createElement(
            C.a,
            { style: [Xr.root, r && Xr.rootWide, n] },
            c.a.createElement(
              A.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Gr,
            ),
            c.a.createElement(jr, f()({}, t, { ref: a, style: Xr.description })),
          )
        },
        Qr = c.a.forwardRef(qr),
        Xr = K.a.create(function (e) {
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
        Yr = ['style'],
        Jr = function (e, a) {
          e.style
          var n = h()(e, Yr)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Qr, f()({}, n, { ref: a })),
            c.a.createElement(Vr.a, { style: $r.exclusiveDemoBonusContent }),
          )
        },
        Zr = c.a.forwardRef(Jr),
        $r = K.a.create(function (e) {
          return {
            exclusiveDemoBonusContent: {
              alignSelf: 'center',
              marginBottom: e.spaces.space32,
              marginTop: e.spaces.space16,
            },
          }
        }),
        el = n('MAc7'),
        al = void 0 !== un ? un : (un = n('STrk')),
        nl = void 0 !== dn ? dn : (dn = n('bWed')),
        tl = function (e) {
          var a,
            n,
            t,
            r,
            l = e.user,
            i = e.viewer,
            o = Y()(al, l),
            s = Y()(nl, i),
            u = (null == o ? void 0 : o.legacy) || {},
            d = u.name,
            p = u.profile_image_url_https,
            m = u.screen_name,
            g =
              null !==
                (a = null === (n = s.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : '',
            f =
              null !== (t = null === (r = s.super_follows_onboarding_draft) || void 0 === r ? void 0 : r.description) &&
              void 0 !== t
                ? t
                : ''
          return (
            Ia()('string' == typeof p, 'imageUrl must be defined'),
            Ia()('string' == typeof d, 'name must be defined'),
            Ia()('string' == typeof m, 'screenName must be defined'),
            c.a.createElement(
              Br,
              null,
              c.a.createElement(
                C.a,
                { style: rl.browserContent },
                c.a.createElement(el.a, { imageUrl: p, name: d, value: g }),
                c.a.createElement(Zr, { imageUrl: p, screenName: m, value: f }),
                c.a.createElement(Pr, { user: o }),
              ),
            )
          )
        },
        rl = K.a.create(function (e) {
          return {
            browserContent: { paddingBottom: e.spaces.space48 },
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            blob: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
          }
        }),
        ll = ['label', 'path'],
        il = function (e) {
          var a = e.label,
            n = e.path,
            t = h()(e, ll),
            r = Object(E.f)()
          return c.a.createElement(
            A.b,
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
        ol = p.a.hf6f2913,
        sl = p.a.i859a9d3,
        cl = K.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        ul = function (e) {
          var a = e.path,
            n = e.style
          return c.a.createElement(
            C.a,
            { style: [cl.root, n] },
            c.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, ol),
            c.a.createElement(il, { label: sl, path: a }),
          )
        },
        dl = n('0yYu'),
        pl = p.a.iba08a94,
        ml = p.a.ef354e83,
        gl = void 0 !== pn ? pn : (pn = n('UFp0')),
        fl = void 0 !== mn ? mn : (mn = n('NmgE')),
        bl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Y()(gl, a),
            r = Y()(fl, n)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Fr, { style: hl.interstitial }, c.a.createElement(Ne, { headline: pl, subtext: ml })),
            c.a.createElement(dl.a, null),
            c.a.createElement(
              Fr,
              { style: hl.previewCallout },
              c.a.createElement(ul, { path: '/settings/superfollows/perks_preview' }),
            ),
            c.a.createElement(C.a, { style: hl.summaryFramed }, c.a.createElement(tl, { user: t, viewer: r })),
          )
        },
        hl = K.a.create(function (e) {
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
        yl = p.a.hf6f2913,
        wl = void 0 !== gn ? gn : (gn = n('MvEh')),
        _l = void 0 !== fn ? fn : (fn = n('U5ka')),
        vl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Y()(wl, a),
            r = Y()(_l, n)
          return c.a.createElement(P, { title: yl, withInfoButton: !0 }, c.a.createElement(bl, { user: t, viewer: r }))
        },
        Sl = ['style'],
        kl = function (e, a) {
          var n = e.style,
            t = h()(e, Sl)
          return c.a.createElement(
            Br,
            { style: n },
            c.a.createElement(c.a.Fragment, null, c.a.createElement(Zr, f()({}, t, { ref: a }))),
          )
        },
        Fl = c.a.forwardRef(kl),
        El = p.a.gf32cca1,
        Cl = p.a.j8ba99b3,
        xl = p.a.j679dcda,
        Kl = void 0 !== bn ? bn : (bn = n('yjSu')),
        Ll = void 0 !== hn ? hn : (hn = n('RTdz')),
        Tl = function (e, a) {
          var n,
            t,
            r = e.autoFocus,
            l = e.descriptionMaxLength,
            i = e.user,
            o = e.viewer,
            s = c.a.useRef()
          Object(Ba.a)(function () {
            var e
            r && null !== (e = s.current) && void 0 !== e && e.scrollIntoView && s.current.scrollIntoView()
          })
          var u = Y()(Kl, i),
            d = Y()(Ll, o),
            p = u.legacy,
            m = p.profile_image_url_https,
            g = p.screen_name,
            f =
              null !== (n = null === (t = d.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.description) &&
              void 0 !== n
                ? n
                : '',
            b = Ja(d, 'description')
          return (
            Ia()('string' == typeof m, 'imageUrl must be defined'),
            Ia()('string' == typeof g, 'screenName must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Fr, { style: Ol.interstitial }, c.a.createElement(Ne, { headline: El, subtext: Cl })),
              c.a.createElement(
                Fr,
                { style: Ol.examplesLink },
                c.a.createElement(il, { label: xl, path: '/settings/superfollows/perks_description_examples' }),
              ),
              c.a.createElement(dl.a, null),
              c.a.createElement(
                Fr,
                { style: Ol.previewCallout },
                c.a.createElement(ul, { path: '/settings/superfollows/perks_preview' }),
              ),
              c.a.createElement(Fl, {
                autoFocus: r,
                imageUrl: m,
                onChange: function (e) {
                  b(e.currentTarget.value)
                },
                ref: a,
                screenName: g,
                style: Ol.preview,
                value: f,
                valueMaxLength: l,
              }),
              c.a.createElement(C.a, { ref: s }),
            )
          )
        },
        Pl = c.a.forwardRef(Tl),
        Ol = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Dl =
          (n('5BYb'),
          function (e) {
            var a, t
            return null !==
              (a =
                null === (t = Y()(void 0 !== wn ? wn : (wn = n('WDhg')), e).super_follow_creator_benefits) ||
                void 0 === t
                  ? void 0
                  : t.creator_intro) && void 0 !== a
              ? a
              : void 0
          }),
        Il = function (e) {
          var a,
            t,
            r,
            l = (
              null !==
                (a =
                  null === (t = Y()(void 0 !== _n ? _n : (_n = n('G/nI')), e).super_follow_creator_benefits) ||
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
        Bl = (n('jwue'), n('+oxZ'), void 0 !== Sn ? Sn : (Sn = n('rwq4'))),
        Rl = void 0 !== kn ? kn : (kn = n('E9LA')),
        Vl = function (e, a) {
          var t,
            r,
            l = a.creatorIntro,
            i = a.description,
            o = Y()(Bl, e),
            s = (function (e) {
              var a
              return null === (a = Y()(void 0 !== yn ? yn : (yn = n('lWeI')), e).super_follow_creator_benefits) ||
                void 0 === a
                ? void 0
                : a.__id
            })(o),
            u = Dl(o),
            d = Il(o),
            p = null !== (t = l || u) && void 0 !== t ? t : '',
            m = null !== (r = i || d) && void 0 !== r ? r : '',
            g = Jt()(Rl),
            f = G()(g, 2),
            b = f[0],
            h = f[1]
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
                      Ia()(s, 'benefitsId must be specified')
                      var a = e.get(s)
                      if (
                        (Ia()(a, 'benefitsRecord must be specified'),
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
            h,
          ]
        },
        zl = p.a.cd5cae15,
        Al = p.a.e36287c6,
        Ml = p.a.b772cd65,
        Ul = void 0 !== Fn ? Fn : (Fn = n('kz1e')),
        Hl = void 0 !== En ? En : (En = n('M3aw')),
        jl = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = Y()(Ul, t),
            i = Y()(Hl, r),
            o = Il(l),
            s =
              null !== (a = null === (n = i.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
              void 0 !== a
                ? a
                : '',
            u = s.length > 0 && s.length <= 140 && s !== o,
            d = Vl(l, { description: s }),
            p = G()(d, 2),
            m = p[0],
            g = p[1],
            b = {
              disabled: !u || g,
              label: Ml,
              onPress: m,
              path: '/settings/superfollows/management',
              type: 'primaryFilled',
            },
            h = c.a.createElement(Q, f()({}, b, { size: 'small' }))
          return c.a.createElement(
            P,
            { rightControl: h, subtitle: Al, title: zl },
            c.a.createElement(Pl, { autoFocus: !0, descriptionMaxLength: 140, user: l, viewer: i }),
          )
        },
        Wl = ['style'],
        Nl = function (e, a) {
          var n = e.style,
            t = h()(e, Wl)
          return c.a.createElement(Br, { style: n }, c.a.createElement(el.a, f()({}, t, { ref: a })))
        },
        Gl = c.a.forwardRef(Nl),
        ql = p.a.j3253319,
        Ql = p.a.h1e80993,
        Xl = p.a.j679dcda,
        Yl = void 0 !== Cn ? Cn : (Cn = n('hGtx')),
        Jl = void 0 !== xn ? xn : (xn = n('DWSt')),
        Zl = function (e, a) {
          var n,
            t,
            r = e.autoFocus,
            l = e.introMaxLength,
            i = e.user,
            o = e.viewer,
            s = c.a.useRef()
          Object(Ba.a)(function () {
            var e
            r && null !== (e = s.current) && void 0 !== e && e.scrollIntoView && s.current.scrollIntoView()
          })
          var u = Y()(Yl, i),
            d = Y()(Jl, o),
            p = u.legacy,
            m = p.name,
            g = p.profile_image_url_https,
            f =
              null !==
                (n = null === (t = d.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            b = Ja(d, 'creator_intro')
          return (
            Ia()('string' == typeof g, 'imageUrl must be defined'),
            Ia()('string' == typeof m, 'name must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Fr, { style: ei.interstitial }, c.a.createElement(Ne, { headline: ql, subtext: Ql })),
              c.a.createElement(
                Fr,
                { style: ei.examplesLink },
                c.a.createElement(il, { label: Xl, path: '/settings/superfollows/perks_intro_examples' }),
              ),
              c.a.createElement(dl.a, null),
              c.a.createElement(
                Fr,
                { style: ei.previewCallout },
                c.a.createElement(ul, { path: '/settings/superfollows/perks_preview' }),
              ),
              c.a.createElement(Gl, {
                autoFocus: r,
                imageUrl: g,
                name: m,
                onChange: function (e) {
                  b(e.currentTarget.value)
                },
                ref: a,
                style: ei.preview,
                value: f,
                valueMaxLength: l,
              }),
              c.a.createElement(C.a, { ref: s }),
            )
          )
        },
        $l = c.a.forwardRef(Zl),
        ei = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        ai = p.a.cd5cae15,
        ni = p.a.c0348963,
        ti = p.a.b772cd65,
        ri = void 0 !== Kn ? Kn : (Kn = n('oyMe')),
        li = void 0 !== Ln ? Ln : (Ln = n('RL7R')),
        ii = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = Y()(ri, t),
            i = Y()(li, r),
            o = Dl(l),
            s =
              null !==
                (a = null === (n = i.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : '',
            u = s.length > 0 && s.length <= 140 && s !== o,
            d = Vl(l, { creatorIntro: s }),
            p = G()(d, 2),
            m = p[0],
            g = p[1],
            b = {
              disabled: !u || g,
              label: ti,
              onPress: m,
              path: '/settings/superfollows/management',
              type: 'primaryFilled',
            },
            h = c.a.createElement(Q, f()({}, b, { size: 'small' }))
          return c.a.createElement(
            P,
            { rightControl: h, subtitle: ni, title: ai },
            c.a.createElement($l, { autoFocus: !0, introMaxLength: 140, user: l, viewer: i }),
          )
        },
        oi = n('Nh1N'),
        si = n('yoO3'),
        ci = n('7FtF'),
        ui = p.a.be103b84,
        di = function () {
          return c.a.createElement(
            C.a,
            { style: pi.root },
            c.a.createElement(M.a, { style: pi.icon }),
            c.a.createElement(A.b, { size: 'subtext2', weight: 'bold' }, ui),
          )
        },
        pi = K.a.create(function (e) {
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
        mi = function (e) {
          var a = e.children,
            n = e.headline,
            t = e.rightControl
          return c.a.createElement(
            C.a,
            { style: gi.root },
            c.a.createElement(
              C.a,
              { style: gi.header },
              c.a.createElement(
                A.b,
                {
                  accessibilityLevel: 4,
                  accessibilityRole: 'heading',
                  size: 'headline2',
                  style: gi.headline,
                  weight: 'heavy',
                },
                n,
              ),
              a,
            ),
            t,
          )
        },
        gi = K.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        fi = n('4zmP'),
        bi = n.p + 'Chat.62494e65.png',
        hi = n.p + 'Chat@2x.f6eeca05.png',
        yi = n.p + 'Chat@3x.dd8438c5.png',
        wi = n.p + 'Cog.788d3515.png',
        _i = n.p + 'Cog@2x.3528d165.png',
        vi = n.p + 'Cog@3x.e4185e95.png',
        Si = n.p + 'Coin.684ea185.png',
        ki = n.p + 'Coin@2x.9e020695.png',
        Fi = n.p + 'Coin@3x.d5ecbc95.png',
        Ei = n.p + 'CoinPurse.5e7e5f25.png',
        Ci = n.p + 'CoinPurse@2x.62abfad5.png',
        xi = n.p + 'CoinPurse@3x.6b9f5d05.png',
        Ki = n.p + 'Cone.e7e68c95.png',
        Li = n.p + 'Cone@2x.94d66a15.png',
        Ti = n.p + 'Cone@3x.f4718655.png',
        Pi = n.p + 'Cross.eed0ff55.png',
        Oi = n.p + 'Cross@2x.68249435.png',
        Di = n.p + 'Cross@3x.59595055.png',
        Ii = n.p + 'FirstAid.962ae7e5.png',
        Bi = n.p + 'FirstAid@2x.09640055.png',
        Ri = n.p + 'FirstAid@3x.b6884b15.png',
        Vi = n.p + 'Heart.a7bdca85.png',
        zi = n.p + 'Heart@2x.a3108ce5.png',
        Ai = n.p + 'Heart@3x.2866f2f5.png',
        Mi = n.p + 'LifeSaver.19af1fb5.png',
        Ui = n.p + 'LifeSaver@2x.5f9465a5.png',
        Hi = n.p + 'LifeSaver@3x.3cde1ca5.png',
        ji = n.p + 'Lightbulb.632a0de5.png',
        Wi = n.p + 'Lightbulb@2x.ea0a7dc5.png',
        Ni = n.p + 'Lightbulb@3x.d47fac75.png',
        Gi = n.p + 'NoEntry.89a117a5.png',
        qi = n.p + 'NoEntry@2x.6460d275.png',
        Qi = n.p + 'NoEntry@3x.cf8e9465.png',
        Xi = n.p + 'Pencil.6ac7a9a5.png',
        Yi = n.p + 'Pencil@2x.e6d394c5.png',
        Ji = n.p + 'Pencil@3x.7e45c2e5.png',
        Zi = n.p + 'PiggyBank.571af825.png',
        $i = n.p + 'PiggyBank@2x.f6b3cb15.png',
        eo = n.p + 'PiggyBank@3x.f166bc15.png',
        ao = n.p + 'Plant.2e93bbb5.png',
        no = n.p + 'Plant@2x.5660c145.png',
        to = n.p + 'Plant@3x.60b66855.png',
        ro = n.p + 'Puzzle.59175915.png',
        lo = n.p + 'Puzzle@2x.d2394395.png',
        io = n.p + 'Puzzle@3x.ed9bd735.png',
        oo = n.p + 'Ribbon.a0d66a65.png',
        so = n.p + 'Ribbon@2x.d981e095.png',
        co = n.p + 'Ribbon@3x.d6c8e505.png',
        uo = n.p + 'Spheres.c33c7b95.png',
        po = n.p + 'Spheres@2x.6b6732f5.png',
        mo = n.p + 'Spheres@3x.5e58c985.png',
        go = n.p + 'Star.2714eb95.png',
        fo = n.p + 'Star@2x.25a57fd5.png',
        bo = n.p + 'Star@3x.206f9d85.png',
        ho = n.p + 'TrashCan.7ed17045.png',
        yo = n.p + 'TrashCan@2x.79c8ba35.png',
        wo = n.p + 'TrashCan@3x.91184ba5.png',
        _o = n.p + 'Wallet.0ca99435.png',
        vo = n.p + 'Wallet@2x.d3b05545.png',
        So = n.p + 'Wallet@3x.90c942f5.png',
        ko = [1, 2, 3],
        Fo = Object.freeze({
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
        Eo = Object(Re.a)(Fo),
        Co = Eo.reduce(function (e, a) {
          var n = Math.max.apply(Math, ko)
          return (
            (e[a] = {
              aspectRatio: 1,
              image: { url: r[a], width: 36 * n, height: 36 * n },
              customVariants: ko.map(function (e) {
                return { uri: r[a + (1 !== e ? ''.concat(e, 'x') : '')], width: 36 * e, height: 36 * e }
              }),
            }),
            e
          )
        }, {}),
        xo = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? 36 : n,
            r = Co[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            C.a,
            { style: s },
            c.a.createElement(Ve.a, {
              accessibilityLabel: '',
              aspectMode: ze.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        Ko = function (e) {
          var a = e.children,
            n = e.childrenStyle,
            t = e.headline,
            r = e.illustration,
            l = e.rightControl
          return c.a.createElement(
            C.a,
            { style: Lo.root },
            r && c.a.createElement(xo, { type: r, width: 36 }),
            c.a.createElement(
              C.a,
              { style: Lo.header },
              c.a.createElement(
                A.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: Lo.headline,
                  weight: 'heavy',
                },
                t,
              ),
              l,
            ),
            c.a.createElement(C.a, { style: n }, a),
          )
        },
        Lo = K.a.create(function (e) {
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
        To = ['$refType'],
        Po = p.a.a6777c1b,
        Oo = p.a.a384fda0,
        Do = p.a.i4313618,
        Io = p.a.c0348963,
        Bo = p.a.ic624ab2,
        Ro = p.a.ifc9b709,
        Vo = p.a.b08bbeb4,
        zo = p.a.ia9c37c4,
        Ao = p.a.fb1e4eb6,
        Mo = p.a.be54a312,
        Uo = p.a.cca48545,
        Ho = p.a.de67bc6e,
        jo = p.a.a46cead5,
        Wo = p.a.idd8ae44,
        No = p.a.b28a1b48,
        Go = p.a.f2df375b,
        qo = p.a.f3ce76c0,
        Qo = p.a.i8982e7e,
        Xo = p.a.ca5ca5ed,
        Yo = p.a.abd845fd,
        Jo = p.a.i859a9d3,
        Zo = p.a.d14c7bbc,
        $o = p.a.g867481d,
        es = p.a.f66d24be,
        as = p.a.g5925628,
        ns = void 0 !== Tn ? Tn : (Tn = n('EM6u')),
        ts = void 0 !== Pn ? Pn : (Pn = n('oNwH')),
        rs = function (e) {
          var a,
            t,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = Object(E.g)(),
            s = Y()(ns, l),
            u = (s.$refType, h()(s, To)),
            d = Y()(ts, i),
            p = Dl(d),
            m = Il(d),
            g =
              null !==
                (a = (function (e) {
                  var a, t
                  return null !==
                    (a =
                      null ===
                        (t = Y()(void 0 !== vn ? vn : (vn = n('dGIC')), e).super_follow_creator_price_metadata) ||
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
            y = c.a.createElement(il, {
              label: Xo,
              path: '/settings/superfollows/management/perks_confirm',
              size: 'subtext1',
            }),
            w = c.a.createElement(Q, {
              label: Yo,
              path: '/settings/superfollows/management/perks_intro',
              size: 'small',
              type: 'primaryOutlined',
            }),
            k = c.a.createElement(Q, {
              label: Yo,
              path: '/settings/superfollows/management/perks_description',
              size: 'small',
              type: 'primaryOutlined',
            })
          return c.a.createElement(
            si.a,
            null,
            c.a.createElement(
              ci.a,
              { location: o, screenType: 'secondaryDetail', title: Po },
              c.a.createElement(
                C.a,
                { style: ls.title },
                c.a.createElement(
                  A.b,
                  { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                  Po,
                ),
                c.a.createElement(di, null),
              ),
              c.a.createElement(dl.a, null),
              c.a.createElement(
                Ko,
                { childrenStyle: ls.benefits, headline: Oo, illustration: Fo.Ribbon, rightControl: y },
                c.a.createElement(A.b, { color: 'gray700' }, Do),
                c.a.createElement(
                  mi,
                  { headline: Io, rightControl: w },
                  c.a.createElement(jr, { imageUrl: f, screenName: b, value: p }),
                ),
                c.a.createElement(
                  mi,
                  { headline: Bo, rightControl: k },
                  c.a.createElement(jr, { imageUrl: f, screenName: b, value: m }),
                ),
                c.a.createElement(mi, { headline: Ro }, c.a.createElement(A.b, { color: 'gray700' }, Vo)),
              ),
              c.a.createElement(dl.a, null),
              c.a.createElement(
                Ko,
                { childrenStyle: ls.other, headline: zo, illustration: Fo.PiggyBank },
                c.a.createElement(A.b, { color: 'gray700' }, Ao),
                c.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, Mo({ price: u[g] })),
                c.a.createElement(fi.a, { Icon: oi.a, action: { label: Jo, link: v }, headline: Uo, text: Ho }),
              ),
              c.a.createElement(dl.a, null),
              c.a.createElement(
                Ko,
                { childrenStyle: ls.other, headline: jo, illustration: Fo.Chat },
                c.a.createElement(A.b, { color: 'gray700' }, Wo),
                c.a.createElement(
                  C.a,
                  { style: ls.buttons },
                  c.a.createElement(
                    S.a,
                    {
                      dominantColor: '#5865F2',
                      link: 'https://t.co/jPqvg6tFrDJG',
                      style: ls.button,
                      type: 'onMediaDominantColorFilled',
                    },
                    Zo,
                  ),
                ),
              ),
              c.a.createElement(dl.a, null),
              c.a.createElement(
                Ko,
                { childrenStyle: ls.other, headline: No, illustration: Fo.Lightbulb },
                c.a.createElement(A.b, { color: 'gray700' }, Go),
                c.a.createElement(
                  C.a,
                  { style: ls.buttons },
                  c.a.createElement(
                    S.a,
                    { link: 'https://t.co/RL2NN3bEVkes', style: ls.button, type: 'primaryOutlined' },
                    $o,
                  ),
                ),
              ),
              c.a.createElement(dl.a, null),
              c.a.createElement(
                Ko,
                { childrenStyle: ls.other, headline: qo, illustration: Fo.LifeSaver },
                c.a.createElement(A.b, { color: 'gray700' }, Qo),
                c.a.createElement(
                  C.a,
                  { style: ls.buttons },
                  c.a.createElement(S.a, { link: _, style: ls.button, type: 'primaryOutlined' }, es),
                  c.a.createElement(
                    S.a,
                    {
                      link: 'https://help.twitter.com/forms/paid-features/superfollows',
                      style: ls.button,
                      type: 'primaryOutlined',
                    },
                    as,
                  ),
                ),
              ),
            ),
          )
        },
        ls = K.a.create(function (e) {
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
        is = void 0 !== On ? On : (On = n('MXCg')),
        os = void 0 !== Dn ? Dn : (Dn = n('mEFY')),
        ss = void 0 !== In ? In : (In = n('d8Sa')),
        cs = function (e) {
          var a,
            n,
            t,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = e.viewer,
            s = c.a.useContext(I.a).featureSwitches,
            u = Y()(is, l),
            d = Y()(os, i),
            p = Y()(ss, o),
            m = null === (a = d.super_follow_creator_benefits) || void 0 === a ? void 0 : a.creator_intro,
            g = (
              null !==
                (n =
                  null == d || null === (t = d.super_follow_creator_benefits) || void 0 === t
                    ? void 0
                    : t.benefits_data) && void 0 !== n
                ? n
                : []
            ).find(function (e) {
              return 'ExclusiveContent' === e.benefit_type
            })
          if (
            (Xa(p, {
              creator_intro: m,
              description: null == g ? void 0 : g.description,
              selected_price:
                null === (r = d.super_follow_creator_price_metadata) || void 0 === r ? void 0 : r.selected_price,
            }),
            !s.isTrue('super_follow_web_edit_perks_enabled'))
          )
            throw new Error('Super Follows management is not enabled')
          return null == p.super_follows_onboarding_draft
            ? c.a.createElement(D.a, { to: '/settings/superfollows' })
            : c.a.createElement(
                E.d,
                null,
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/management/perks_intro' },
                  c.a.createElement(ii, { user: d, viewer: p }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/management/perks_description' },
                  c.a.createElement(jl, { user: d, viewer: p }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/management/perks_confirm' },
                  c.a.createElement(vl, { user: d, viewer: p }),
                ),
                c.a.createElement(
                  E.b,
                  { path: '/settings/superfollows/management' },
                  c.a.createElement(rs, { priceOfferings: u, user: d }),
                ),
              )
        },
        us = p.a.b422cb62,
        ds = p.a.f08705e0,
        ps = p.a.e2cd700f,
        ms = p.a.fbfd7397,
        gs = p.a.c1df579e,
        fs = [
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
        bs = void 0 !== Bn ? Bn : (Bn = n('wQp3')),
        hs = void 0 !== Rn ? Rn : (Rn = n('tfBr')),
        ys = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = Y()(bs, n),
            l = Y()(hs, t),
            i = fs.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: r, viewer: l }) }
            }),
            o = i.some(function (e) {
              return e.checked
            }),
            s = c.a.createElement(Q, {
              label: gs,
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
              Fr,
              { style: ws.interstitial },
              c.a.createElement(Ne, {
                headline: o ? ps : us,
                illustration: o ? Ue.Puzzle : Ue.Cat,
                subtext: o ? ms : ds,
              }),
            ),
            c.a.createElement(Fr, { style: ws.checks }, c.a.createElement(H, { items: i })),
          )
        },
        ws = K.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        _s = ['style'],
        vs = function (e) {
          var a = e.style,
            n = h()(e, _s)
          return c.a.createElement(
            Br,
            { style: a },
            c.a.createElement(Pr, f()({ style: Ss.exclusiveDemoVIPContentHeader }, n)),
          )
        },
        Ss = K.a.create(function (e) {
          return { exclusiveDemoVIPContentHeader: { alignSelf: 'center', marginBottom: e.spaces.space16 } }
        }),
        ks = p.a.cda6bb6d,
        Fs = p.a.a15b98ec,
        Es = void 0 !== Vn ? Vn : (Vn = n('mDly')),
        Cs = function (e) {
          var a = e.user,
            n = Y()(Es, a)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Fr, { style: xs.interstitial }, c.a.createElement(Ne, { headline: ks, subtext: Fs })),
            c.a.createElement(dl.a, null),
            c.a.createElement(
              Fr,
              { style: xs.previewCallout },
              c.a.createElement(ul, { path: '/settings/superfollows/perks_preview' }),
            ),
            c.a.createElement(vs, { style: xs.preview, user: n }),
          )
        },
        xs = K.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Ks = p.a.cd5cae15,
        Ls = p.a.ad4a92a2,
        Ts = p.a.c1df579e,
        Ps = void 0 !== zn ? zn : (zn = n('QmjQ')),
        Os = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = { label: Ts, path: '/settings/superfollows/onboarding/perks_confirm', type: 'primaryFilled' },
            r = c.a.createElement(Q, t),
            l = c.a.createElement(Q, f()({}, t, { size: 'small' })),
            i = Y()(Ps, n)
          return c.a.createElement(
            P,
            { percentageComplete: a, rightControl: l, subtitle: Ls, title: Ks },
            c.a.createElement(Cs, { user: i }),
            c.a.createElement(Fr, { style: Ds.buttons }, r),
          )
        },
        Ds = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Is = p.a.cd5cae15,
        Bs = p.a.e18b7a71,
        Rs = p.a.c1df579e,
        Vs = void 0 !== An ? An : (An = n('Rthh')),
        zs = void 0 !== Mn ? Mn : (Mn = n('aREQ')),
        As = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = Y()(Vs, n),
            l = Y()(zs, t),
            i = { label: Rs, path: '/settings/superfollows/onboarding/pricing', type: 'primaryFilled' },
            o = c.a.createElement(Q, i),
            s = c.a.createElement(Q, f()({}, i, { size: 'small' }))
          return c.a.createElement(
            P,
            { percentageComplete: a, rightControl: s, subtitle: Bs, title: Is },
            c.a.createElement(bl, { user: r, viewer: l }),
            c.a.createElement(Fr, { style: Ms.buttons }, o),
          )
        },
        Ms = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Us = p.a.cd5cae15,
        Hs = p.a.e36287c6,
        js = p.a.be76dc33,
        Ws = p.a.c1df579e,
        Ns = void 0 !== Un ? Un : (Un = n('6rkJ')),
        Gs = void 0 !== Hn ? Hn : (Hn = n('tJ4s')),
        qs = function (e) {
          var a,
            n,
            t = e.percentageComplete,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef(),
            o = Y()(Gs, l),
            s = Y()(Ns, r),
            u =
              null !== (a = null === (n = o.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
              void 0 !== a
                ? a
                : '',
            d = u.length > 0 && u.length <= 140,
            p = {
              disabled: !d,
              label: Ws,
              path: '/settings/superfollows/onboarding/perks_badges',
              type: 'primaryFilled',
            },
            m = c.a.createElement(Q, p),
            g = c.a.createElement(Q, f()({}, p, { size: 'small' })),
            b = {
              children: js,
              onClick: function () {
                var e
                null == i || null === (e = i.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            h = c.a.createElement(S.a, b),
            y = c.a.createElement(S.a, f()({}, b, { size: 'small' }))
          return c.a.createElement(
            P,
            { percentageComplete: t, rightControl: d ? g : y, subtitle: Hs, title: Us },
            c.a.createElement(Pl, { descriptionMaxLength: 140, ref: i, user: s, viewer: o }),
            c.a.createElement(Fr, { style: Qs.buttons }, d ? m : h),
          )
        },
        Qs = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Xs = p.a.cd5cae15,
        Ys = p.a.c0348963,
        Js = p.a.ef5406e3,
        Zs = p.a.c1df579e,
        $s = void 0 !== jn ? jn : (jn = n('02qo')),
        ec = void 0 !== Wn ? Wn : (Wn = n('TXsE')),
        ac = function (e) {
          var a,
            n,
            t = e.percentageComplete,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef(),
            o = Y()($s, r),
            s = Y()(ec, l),
            u =
              null !==
                (a = null === (n = s.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== a
                ? a
                : '',
            d = u.length > 0 && u.length <= 140,
            p = {
              disabled: !d,
              label: Zs,
              path: '/settings/superfollows/onboarding/perks_description',
              type: 'primaryFilled',
            },
            m = c.a.createElement(Q, p),
            g = c.a.createElement(Q, f()({}, p, { size: 'small' })),
            b = {
              children: Js,
              onClick: function () {
                var e
                null == i || null === (e = i.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            h = c.a.createElement(S.a, b),
            y = c.a.createElement(S.a, f()({}, b, { size: 'small' }))
          return c.a.createElement(
            P,
            { percentageComplete: t, rightControl: d ? g : y, subtitle: Ys, title: Xs },
            c.a.createElement($l, { introMaxLength: 140, ref: i, user: o, viewer: s }),
            c.a.createElement(Fr, { style: nc.buttons }, d ? m : h),
          )
        },
        nc = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        tc = ['$refType'],
        rc = p.a.ea8a3d2d,
        lc = p.a.f77bb178,
        ic = p.a.cd75a5d4,
        oc = p.a.g9677c6d,
        sc = p.a.abd845fd,
        cc = void 0 !== Nn ? Nn : (Nn = n('IeZm')),
        uc = void 0 !== Gn ? Gn : (Gn = n('7ESn')),
        dc = void 0 !== qn ? qn : (qn = n('By/j')),
        pc = function (e) {
          var a,
            n,
            t,
            r = e.percentageComplete,
            l = e.priceOfferings,
            i = e.viewer,
            o = Y()(cc, l),
            s = (o.$refType, h()(o, tc)),
            u = Y()(uc, i).super_follows_onboarding_draft,
            d = null !== (a = null == u ? void 0 : u.creator_intro) && void 0 !== a ? a : '',
            p = null !== (n = null == u ? void 0 : u.description) && void 0 !== n ? n : '',
            m = null !== (t = null == u ? void 0 : u.selected_price) && void 0 !== t ? t : s[0],
            g = Jt()(dc),
            f = G()(g, 2),
            b = f[0],
            y = f[1]
          return c.a.createElement(
            P,
            { percentageComplete: r, title: rc, withInfoButton: !0 },
            c.a.createElement(
              Fr,
              { style: mc.interstitial },
              c.a.createElement(Ne, { headline: lc({ price: s[m] }), illustration: Ue.Pricing, subtext: ic }),
            ),
            c.a.createElement(
              Fr,
              { style: mc.buttons },
              c.a.createElement(Q, {
                disabled: y,
                label: oc,
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
              c.a.createElement(Q, {
                disabled: y,
                label: sc,
                path: '/settings/superfollows/onboarding/pricing',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        mc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        gc = (n('+KXO'), n('7xRU'), n('hznd')),
        fc = ['$refType'],
        bc = p.a.ea8a3d2d,
        hc = p.a.ic9124bf,
        yc = p.a.g5923869,
        wc = {
          offer1: [p.a.f025ab39, p.a.c5602dfd],
          offer2: [p.a.ib075804, p.a.j8a72f06],
          offer3: [p.a.c246656e, p.a.a92ab16c],
        },
        _c = p.a.c1df579e,
        vc = void 0 !== Qn ? Qn : (Qn = n('5jO1')),
        Sc = void 0 !== Xn ? Xn : (Xn = n('mKqc')),
        kc = function (e) {
          var a = e.percentageComplete,
            n = e.priceOfferings,
            t = e.viewer,
            r = Y()(vc, n),
            l = (r.$refType, h()(r, fc)),
            i = Y()(Sc, t),
            o = i.super_follows_onboarding_draft,
            s = null == o ? void 0 : o.selected_price,
            u = Ja(i, 'selected_price'),
            d = c.a.createElement(
              p.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              c.a.createElement(A.b, { link: _ }, p.a.c336b06a),
            ),
            m = Object.keys(l).map(function (e) {
              return { label: yc({ price: l[e] }), value: e, helpText: wc[e].join(' ') }
            }),
            g = c.a.createElement(Q, {
              disabled: !s,
              label: _c,
              path: '/settings/superfollows/onboarding/pricing_confirm',
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            P,
            { percentageComplete: a, rightControl: g, title: bc, withInfoButton: !0 },
            c.a.createElement(Fr, { style: Fc.interstitial }, c.a.createElement(Ne, { headline: hc, subtext: d })),
            c.a.createElement(
              Fr,
              { style: Fc.prices },
              c.a.createElement(gc.a, {
                accessibilityLabel: hc,
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
        Fc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        Ec = p.a.f1cb36b8,
        Cc = p.a.e20f6661,
        xc = p.a.a9ee1ecc,
        Kc = p.a.b772cd65,
        Lc = function (e) {
          var a = e.percentageComplete
          return c.a.createElement(
            P,
            { leftControlShouldClose: !0, percentageComplete: a, title: Ec, withInfoButton: !0 },
            c.a.createElement(
              Fr,
              { style: Tc.interstitial },
              c.a.createElement(Ne, { headline: Cc, illustration: Ue.Thumbsup, subtext: xc }),
            ),
            c.a.createElement(
              Fr,
              { style: Tc.buttons },
              c.a.createElement(Q, { label: Kc, path: '/settings/monetization', type: 'primaryFilled' }),
            ),
          )
        },
        Tc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Pc = p.a.e2cd700f,
        Oc = p.a.d6bfb60c,
        Dc = p.a.b9cbb370,
        Ic = function () {
          return c.a.createElement(
            P,
            { withInfoButton: !0 },
            c.a.createElement(Ne, { headline: Pc, illustration: Ue.Puzzle, subtext: Oc }),
            c.a.createElement(Q, { label: Dc, path: '/settings/superfollows/onboarding/stripe_setup' }),
          )
        },
        Bc = n('8jkQ'),
        Rc = p.a.f1cb36b8,
        Vc = p.a.ja884230,
        zc = p.a.af1b808d,
        Ac = p.a.fe339750,
        Mc = p.a.j912510a,
        Uc = void 0 !== Yn ? Yn : (Yn = n('xHLM')),
        Hc = function (e) {
          var a = e.percentageComplete,
            n = Jt()(Uc),
            t = G()(n, 2),
            r = t[0],
            l = t[1],
            i = function () {
              r({
                variables: {},
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && Bc.b.navigateTo(n)
                },
              })
            }
          return c.a.createElement(
            P,
            { percentageComplete: a, title: Rc, withInfoButton: !0 },
            c.a.createElement(
              Fr,
              { style: jc.interstitial },
              c.a.createElement(Ne, { headline: Vc, illustration: Ue.CoinStairs, subtext: zc }),
            ),
            c.a.createElement(
              Fr,
              { style: jc.buttons },
              c.a.createElement(S.a, { disabled: l, onPress: i, type: 'primaryFilled' }, Ac),
              c.a.createElement(S.a, { disabled: l, onPress: i, type: 'primaryOutlined' }, Mc),
            ),
          )
        },
        jc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Wc = void 0 !== Jn ? Jn : (Jn = n('UNVS')),
        Nc = void 0 !== Zn ? Zn : (Zn = n('6byF')),
        Gc = void 0 !== $n ? $n : ($n = n('dNhZ')),
        qc = function (e) {
          return e / 8
        },
        Qc = function (e) {
          var a,
            n,
            t,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = e.viewer,
            s = c.a.useContext(I.a).featureSwitches,
            u = Y()(Wc, l),
            d = Y()(Nc, i),
            p = Y()(Gc, o),
            m = null === (a = d.super_follow_creator_benefits) || void 0 === a ? void 0 : a.creator_intro,
            g = (
              null !==
                (n =
                  null == d || null === (t = d.super_follow_creator_benefits) || void 0 === t
                    ? void 0
                    : t.benefits_data) && void 0 !== n
                ? n
                : []
            ).find(function (e) {
              return 'ExclusiveContent' === e.benefit_type
            })
          if (
            (Xa(p, {
              creator_intro: m,
              description: null == g ? void 0 : g.description,
              selected_price:
                null === (r = d.super_follow_creator_price_metadata) || void 0 === r ? void 0 : r.selected_price,
            }),
            !s.isTrue('super_follow_web_onboarding_enabled'))
          )
            throw new Error('Super Follows onboarding is not enabled')
          return null == p.super_follows_onboarding_draft
            ? c.a.createElement(D.a, { to: '/settings/superfollows' })
            : c.a.createElement(
                E.d,
                null,
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/onboarding/perks_intro' },
                  c.a.createElement(ac, { percentageComplete: qc(1), user: d, viewer: p }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/onboarding/perks_description' },
                  c.a.createElement(qs, { percentageComplete: qc(2), user: d, viewer: p }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/onboarding/perks_badges' },
                  c.a.createElement(Os, { percentageComplete: qc(3), user: d }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/onboarding/perks_confirm' },
                  c.a.createElement(As, { percentageComplete: qc(4), user: d, viewer: p }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/onboarding/pricing' },
                  c.a.createElement(kc, { percentageComplete: qc(5), priceOfferings: u, viewer: p }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/onboarding/pricing_confirm' },
                  c.a.createElement(pc, { percentageComplete: qc(6), priceOfferings: u, viewer: p }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/onboarding/stripe_setup' },
                  c.a.createElement(Hc, { percentageComplete: qc(7) }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/onboarding/stripe_incomplete' },
                  c.a.createElement(Ic, null),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/onboarding/stripe_completed' },
                  c.a.createElement(Lc, { percentageComplete: qc(8) }),
                ),
                c.a.createElement(
                  E.b,
                  { path: '/settings/superfollows/onboarding' },
                  c.a.createElement(ys, { percentageComplete: qc(0), user: d, viewer: p }),
                ),
              )
        },
        Xc = p.a.ebfb897c,
        Yc = p.a.dc4feb19,
        Jc = p.a.c183d271,
        Zc = p.a.ic130fd5,
        $c = p.a.dd913e24,
        eu = p.a.h580543e,
        au = function () {
          return c.a.createElement(
            P,
            { title: Xc },
            c.a.createElement(Fr, { style: nu.interstitial }, c.a.createElement(Ne, { headline: Yc, subtext: Jc })),
            c.a.createElement(
              Fr,
              { style: nu.exampleDescriptions },
              c.a.createElement(dl.a, null),
              c.a.createElement(jr, { value: Zc }),
              c.a.createElement(dl.a, null),
              c.a.createElement(jr, { value: $c }),
              c.a.createElement(dl.a, null),
              c.a.createElement(jr, { value: eu }),
            ),
          )
        },
        nu = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        tu = n('JWc1'),
        ru = p.a.ebfb897c,
        lu = p.a.dc4feb19,
        iu = p.a.a0bb2076,
        ou = p.a.ace46d40,
        su = p.a.h2c4511f,
        cu = p.a.hbe4f99e,
        uu = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        du = function () {
          return c.a.createElement(
            P,
            { title: ru },
            c.a.createElement(Fr, { style: uu.interstitial }, c.a.createElement(Ne, { headline: lu, subtext: iu })),
            c.a.createElement(
              Fr,
              { style: uu.exampleIntros },
              c.a.createElement(tu.a, { value: ou }),
              c.a.createElement(tu.a, { value: su }),
              c.a.createElement(tu.a, { value: cu }),
            ),
          )
        },
        pu = n('VTDR'),
        mu = n('a2Fh'),
        gu = p.a.hf6f2913,
        fu = p.a.fb278c81,
        bu = p.a.e6b60e94,
        hu = K.a.create(function (e) {
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
        yu = function () {
          return c.a.createElement(
            P,
            { title: gu },
            c.a.createElement(Fr, { style: hu.interstitial }, c.a.createElement(Ne, { headline: fu, subtext: bu })),
            c.a.createElement(
              Br,
              { style: hu.preview },
              c.a.createElement(
                pu.a,
                null,
                c.a.createElement(mu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(mu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(mu.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: hu.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        wu = p.a.aa7e35ed,
        _u = p.a.f67e69bf,
        vu = function () {
          if (!c.a.useContext(I.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            P,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Fr,
              { style: Su.interstitial },
              c.a.createElement(Ne, { headline: wu, illustration: Ue.Uturn, subtext: _u }),
            ),
          )
        },
        Su = K.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        ku = p.a.d3d6c52c,
        Fu = p.a.c53e9129,
        Eu = function () {
          if (!c.a.useContext(I.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            P,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            c.a.createElement(
              Fr,
              { style: Cu.interstitial },
              c.a.createElement(Ne, { headline: ku, illustration: Ue.PaperAirplane, subtext: Fu }),
            ),
          )
        },
        Cu = K.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        xu = p.a.j274e6aa,
        Ku = p.a.d7f65127,
        Lu = function () {
          if (!c.a.useContext(I.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            P,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Fr,
              { style: Tu.interstitial },
              c.a.createElement(Ne, { headline: xu, illustration: Ue.Bench, subtext: Ku }),
            ),
          )
        },
        Tu = K.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Pu = void 0 !== et ? et : (et = n('nEN5')),
        Ou = void 0 !== at ? at : (at = n('toKZ')),
        Du = void 0 !== nt ? nt : (nt = n('ucRr')),
        Iu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = Y()(Pu, a),
            l = Y()(Ou, n),
            i = Y()(Du, t),
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
              isActiveCreator: !!i.is_active_creator,
              superFollowsApplicationStatus: l.super_follows_application_status || 'NotStarted',
              stripeAccountStatus: l.stripe_account_status || 'NotStarted',
            })
          return c.a.createElement(
            E.d,
            null,
            c.a.createElement(
              E.b,
              { path: '/settings/superfollows/application' },
              c.a.createElement(Sr, { user: l, viewer: i }),
            ),
            c.a.createElement(
              E.b,
              { path: '/settings/superfollows/onboarding' },
              c.a.createElement(Qc, { priceOfferings: r, user: l, viewer: i }),
            ),
            c.a.createElement(
              E.b,
              { path: '/settings/superfollows/management' },
              c.a.createElement(cs, { priceOfferings: r, user: l, viewer: i }),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/submitted' },
              c.a.createElement(Eu, null),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/waitlisted' },
              c.a.createElement(Lu, null),
            ),
            c.a.createElement(E.b, { exact: !0, path: '/settings/superfollows/rejected' }, c.a.createElement(vu, null)),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/perks_intro_examples' },
              c.a.createElement(du, null),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/perks_description_examples' },
              c.a.createElement(au, null),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/perks_preview' },
              c.a.createElement(yu, null),
            ),
            c.a.createElement(E.b, { exact: !0, path: '/settings/superfollows' }, c.a.createElement(D.a, { to: o })),
          )
        },
        Bu = n('n0Rl'),
        Ru = n('q9Zt'),
        Vu = p.a.hae1c933,
        zu = void 0 !== tt ? tt : (tt = n('G8I5')),
        Au = Object(Bu.b)(zu, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        Mu = K.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      a.default = function () {
        return c.a.createElement(Au, {
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
                  : c.a.createElement(Iu, { priceOfferings: i, user: o, viewer: s })
              },
              renderFailure: function () {
                return c.a.createElement(P, null, c.a.createElement(Ru.a, { onRetry: l, style: Mu.error, title: Vu }))
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
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsOnboardingCreatorIntro_user' },
          { args: null, kind: 'FragmentSpread', name: 'useSuperFollowsSaveOnboarding_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '17ab5877e44f1eadee5db2ce800fcaab',
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
        h = n('KEM+'),
        y = n.n(h),
        w = (n('2G9S'), n('ERkP')),
        _ = n.n(w),
        v = n('38/B'),
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
        M = function (e) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A
          return a(e)
        },
        U = C.a.de540c32,
        H = C.a.b4abfdb3,
        j = (function (e) {
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
                Object(L.a)(function (e) {
                  return [W.root, !e && W.disabled]
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
              y()(p()(t), '_handleBlur', function (e) {
                var a = t.props.onBlur,
                  n = e.currentTarget.value,
                  r = t._calculateLength(n),
                  l = t._getActualCount(n)
                t.setState({ isFocused: !1, displayCount: r, actualCount: l }), a && a(e)
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
              y()(p()(t), '_handleFocus', function (e) {
                var a = t.props.onFocus
                t.setState({ isFocused: !0 }), a && a(e)
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
                P.b.isKaiOS() && 'Backspace' === e.key && n ? (t._blurOnBackspaceKeyUpForKaiOS = n) : a && a(e)
              }),
              y()(p()(t), '_handleKeyUp', function (e) {
                var a = t.props.onKeyUp
                P.b.isKaiOS() &&
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
                    return _.a.createElement(
                      O.a,
                      { style: [N.root, l] },
                      _.a.createElement(
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
                        _.a.createElement(
                          O.a,
                          { style: N.textInputFormWrapper },
                          _.a.createElement(
                            O.a,
                            { style: N.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        O.a,
                        { style: [N.sidePadding, N.underTextInputForm] },
                        _.a.createElement(
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
                    return _.a.createElement(
                      S.b,
                      {
                        color: t ? 'gray700' : n,
                        numberOfLines: 1,
                        size: t ? 'headline1' : 'subtext2',
                        style: [
                          N.textInputHeaderItem,
                          t && N.placeholderText,
                          !v.a.reducedMotionEnabled && N.transition,
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
                    return _.a.createElement(
                      O.a,
                      { style: W.container },
                      a && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        S.b,
                        { size: 'headline1', style: W.wrapper },
                        _.a.createElement(
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
                      ? _.a.createElement(
                          O.a,
                          { style: N.passwordVisibilityIconContainer },
                          _.a.createElement(k.a, {
                            accessibilityLabel: t ? H : U,
                            focusable: !0,
                            hoverLabel: { label: t ? H : U },
                            icon: t ? _.a.createElement(D.a, null) : _.a.createElement(I.a, null),
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
                    return _.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'polite' },
                      _.a.createElement(
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
                    return _.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'assertive' },
                      _.a.createElement(
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
                    return _.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'polite', style: [N.textInputHeaderItem, N.displayCount] },
                      _.a.createElement(
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
                    return e && _.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? _.a.createElement(B.a, { style: [N.validationIcon, F.a.invalidColor] })
                      : _.a.createElement(R.a, { style: [N.validationIcon, F.a.validColor] })
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
        })(_.a.Component)
      y()(j, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
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
