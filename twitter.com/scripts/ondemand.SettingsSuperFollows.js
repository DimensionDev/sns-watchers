;(window.webpackJsonp = window.webpackJsonp || []).push([
  [235],
  {
    '+OUG': function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    '02qo': function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksIntroScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksIntroCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: '8ac49b919368d9d38290d155622cb0f7',
      }
      a.default = n
    },
    '0ULw': function (e, a, t) {
      'use strict'
      var n = t('yiKp'),
        r = t.n(n),
        l = t('ERkP'),
        i = t.n(l),
        o = t('Lsrn'),
        s = t('k/Ka'),
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
    '3qCL': function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    '5emT': function (e, a, t) {
      'use strict'
      var n = t('yiKp'),
        r = t.n(n),
        l = t('ERkP'),
        i = t.n(l),
        o = t('Lsrn'),
        s = t('k/Ka'),
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
    '5jO1': function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    '6byF': function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksIntroScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksDescriptionScreen_user' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsOnboardingPerksConfirmScreen_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '503826dc8b64be2554ee40c9e30c6968',
      }
      a.default = n
    },
    '6rkJ': function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksDescriptionScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksDescriptionCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: 'c756b8456bb34cd08df691a92eee0833',
      }
      a.default = n
    },
    '7ESn': function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    '7FtF': function (e, a, t) {
      'use strict'
      var n = t('VrFO'),
        r = t.n(n),
        l = t('Y9Ll'),
        i = t.n(l),
        o = t('1Pcy'),
        s = t.n(o),
        c = t('5Yy7'),
        u = t.n(c),
        d = t('2VqO'),
        p = t.n(d),
        m = t('KEM+'),
        g = t.n(m),
        f = (t('2G9S'), t('ERkP')),
        b = t.n(f),
        y = t('P1r1'),
        h = t('G6rE'),
        w = t('rxPX'),
        _ = t('0KEI'),
        v = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: y.o, loggedInUser: h.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: y.f,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        k = t('v//M'),
        S = t('3XMw'),
        F = t.n(S),
        E = t('M2mT'),
        C = 'settingsDetailSave',
        x = t('mw9i'),
        K = t('0yYu'),
        T = t('/yvb'),
        L = t('rHpw'),
        D = F.a.i2209530,
        O = (function (e) {
          u()(t, e)
          var a = p()(t)
          function t() {
            var e
            r()(this, t)
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i]
            return (
              (e = a.call.apply(a, [this].concat(l))),
              g()(s()(e), '_renderWithFetchSettings', function () {
                var a = e.props.fetchStatus
                return b.a.createElement(k.a, { fetchStatus: a, onRequestRetry: e._handleFetch, render: e._render })
              }),
              g()(s()(e), '_render', function () {
                var a = e.props,
                  t = a.children,
                  n = a.onSubmit,
                  r = a.submitDisabled,
                  l = a.submitLabel,
                  i = a.submitType,
                  o = a.withMarginBottom
                return b.a.createElement(
                  x.a,
                  { style: [I.contentRoot, o && I.withMarginBottom] },
                  t,
                  n
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(K.a, null),
                        b.a.createElement(
                          x.a,
                          { style: I.buttonContainer },
                          b.a.createElement(T.a, { disabled: r, onPress: n, style: I.button, testID: C, type: i }, l),
                        ),
                      )
                    : null,
                )
              }),
              g()(s()(e), '_handleFetch', function () {
                var a = e.props,
                  t = a.createLocalApiErrorHandler
                ;(0, a.fetchSettingsIfNeeded)().catch(t())
              }),
              e
            )
          }
          return (
            i()(t, [
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
                    t = e.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return a && a.pathname === t ? '/' : t
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.loggedInUser,
                    t = e.onBackClick,
                    n = e.rightControl,
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
                      onBackClick: t,
                      rightControl: n,
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
            t
          )
        })(b.a.Component)
      g()(O, 'defaultProps', { submitLabel: D, submitType: 'brandFilled', withMarginBottom: !0 })
      var I = L.a.create(function (e) {
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
      a.a = v(O)
    },
    '9SqB': function (e, a, t) {
      'use strict'
      var n = t('IGGJ')(t('yiKp')),
        r = t('ERkP'),
        l = t('Ud88'),
        i = t('K1lQ').commitMutation,
        o = r.useState,
        s = r.useEffect,
        c = r.useRef,
        u = r.useCallback,
        d = t('23An')
      e.exports = function (e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
          t = l(),
          r = d(),
          p = c(t),
          m = c(e),
          g = c(new Set()),
          f = o(!1),
          b = f[0],
          y = f[1],
          h = u(
            function (a) {
              p.current === t && m.current === e && (g.current.delete(a), r.current && y(g.current.size > 0))
            },
            [t, r, e],
          )
        s(
          function () {
            ;(p.current === t && m.current === e) ||
              ((g.current = new Set()), r.current && y(!1), (p.current = t), (m.current = e))
          },
          [t, r, e],
        )
        var w = u(
          function (l) {
            var i = a(
              t,
              (0, n.default)(
                (0, n.default)({}, l),
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
          [h, a, t, r, e],
        )
        return [w, b]
      }
    },
    AyUU: function (e, a, t) {
      'use strict'
      t.r(a)
      var n,
        r,
        l,
        i,
        o,
        s,
        c = {
          fragment: {
            argumentDefinitions: [
              (n = { defaultValue: null, kind: 'LocalArgument', name: 'category' }),
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
            argumentDefinitions: [n, i, o, r, l],
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
    'By/j': function (e, a, t) {
      'use strict'
      t.r(a)
      var n,
        r,
        l = {
          fragment: {
            argumentDefinitions: (n = [
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
                  { kind: 'Literal', name: 's', value: 22 },
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
            argumentDefinitions: n,
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
    DWSt: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    EM6u: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    G8I5: function (e, a, t) {
      'use strict'
      t.r(a)
      var n,
        r,
        l,
        i,
        o,
        s = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsSettingsQuery',
            selections: [
              {
                alias: 'viewer',
                args: (n = [{ kind: 'Literal', name: 's', value: 22 }]),
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
                storageKey: 'viewer_v2(s:22)',
              },
              {
                alias: null,
                args: n,
                concreteType: 'SuperFollowsPriceOfferings',
                kind: 'LinkedField',
                name: 'super_follows_price_offerings',
                plural: !1,
                selections: [r, { args: null, kind: 'FragmentSpread', name: 'SuperFollowsSwitch_priceOfferings' }],
                storageKey: 'super_follows_price_offerings(s:22)',
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
                args: n,
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
                                  (o = {
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
                      { alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null },
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
                        selections: [l, i, o],
                        storageKey: null,
                      },
                    ],
                  },
                ],
                storageKey: 'viewer_v2(s:22)',
              },
              {
                alias: null,
                args: n,
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
                storageKey: 'super_follows_price_offerings(s:22)',
              },
            ],
          },
          params: {
            id: 'AkVKFwwmwBD31F41TqEs4g',
            metadata: {},
            name: 'SuperFollowsSettingsQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(s.hash = '59ab5118b2247c2e05bcaf23a5f58cf4'), (a.default = s)
    },
    H1we: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    IeZm: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    JB6R: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    M2mT: function (e, a, t) {
      'use strict'
      var n = t('m3Bd'),
        r = t.n(n),
        l = t('VrFO'),
        i = t.n(l),
        o = t('Y9Ll'),
        s = t.n(o),
        c = t('1Pcy'),
        u = t.n(c),
        d = t('5Yy7'),
        p = t.n(d),
        m = t('2VqO'),
        g = t.n(m),
        f = t('KEM+'),
        b = t.n(f),
        y = (t('2G9S'), t('i4UL'), t('+/5o')),
        h = t('ERkP'),
        w = t.n(h),
        _ = t('HPNB'),
        v = t('VAZu'),
        k = t('wiP2'),
        S = t('Es6L'),
        F = t('yiKp'),
        E = t.n(F),
        C = t('rHpw'),
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
        K = t('MWbm'),
        T = t('yw4N'),
        L = t('TnY3'),
        D = t('cHvH'),
        O = t('3xLC'),
        I = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        P = (function (e) {
          p()(t, e)
          var a = g()(t)
          function t() {
            var e
            i()(this, t)
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l]
            return (
              (e = a.call.apply(a, [this].concat(r))),
              b()(u()(e), '_renderChildren', function () {
                var a = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? w.a.createElement(
                      K.a,
                      { style: x.fill },
                      w.a.createElement(
                        T.a,
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
            s()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return w.a.createElement(D.a, null, function (a) {
                    var t = a.windowWidth
                    return _.a.isTwoColumnLayout(t) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    a = e.children,
                    t =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, I))
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    Object(S.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : w.a.createElement(k.a.Configure, t),
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
                    t = this.props,
                    n = t.SideNavButton,
                    r = t.TabBar,
                    l = t.TeamsSwitcher,
                    i = t.backLocation,
                    o = t.documentTitle,
                    s = t.headerless,
                    c = t.history,
                    u = t.leftControl,
                    d = t.middleControl,
                    p = t.onBackClick,
                    m = t.rightControl,
                    g = t.screenType,
                    f = t.searchBoxOptions,
                    b = t.secondaryBar,
                    h = t.showSubtitleOnRoot,
                    _ = t.showSubtitleOnWideDetail,
                    S = t.subtitle,
                    F = t.title,
                    E = t.titleIconCell,
                    C = t.titleIconCellSize,
                    T = t.withDetailOpen,
                    L = t.withSearchBox,
                    D = t.withTweetButton,
                    O = 'root' === g,
                    I = 'secondaryRoot' === g,
                    P = 'primaryDetail' === g,
                    B = (P && _) || (O && h),
                    R = O || (P && a),
                    V = O ? y.c : P ? y.a : void 0,
                    A = w.a.createElement(
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
                        subtitle: B ? S : void 0,
                        title: F,
                        titleDomId: V,
                        titleIconCell: E,
                        titleIconCellSize: C,
                      }),
                    ),
                    z =
                      O || (I && T)
                        ? null
                        : w.a.createElement(k.a.Configure, {
                            SideNavButton: n,
                            TabBar: r,
                            TeamsSwitcher: l,
                            backLocation: i,
                            documentTitle: o,
                            headerless: s,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: m,
                            searchBoxOptions: f,
                            subtitle: S,
                            title: F,
                            withSearchBox: L,
                            withTweetButton: D,
                          })
                  return w.a.createElement(w.a.Fragment, null, z, A)
                },
              },
            ]),
            t
          )
        })(w.a.Component)
      b()(P, 'contextType', O.a),
        b()(P, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      a.a = Object(L.a)(P)
    },
    M3aw: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    MXCg: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    MvEh: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksConfirmScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksConfirmCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: '917f96d69ad720b93ab8f315cf935d4e',
      }
      a.default = n
    },
    NmgE: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    PlkH: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = { kind: 'InlineDataFragment', name: 'clientOnlyState_viewer', hash: '339dd7e582bd34b9ab5ab7f2f43bfa62' }
      a.default = n
    },
    RL7R: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    RLjm: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    RTdz: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    Rthh: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksConfirmScreen_user',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksConfirmCore_user' }],
        type: 'User',
        abstractKey: null,
        hash: '20bef5b5794024e957982e19eb9df728',
      }
      a.default = n
    },
    TXsE: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    U5ka: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksConfirmScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksConfirmCore_viewer' }],
        type: 'Viewer',
        abstractKey: null,
        hash: '4c4388061d4dc4455ddbf56f7902c6ed',
      }
      a.default = n
    },
    UFp0: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    UNVS: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    VG5i: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    'VzX/': function (e, a, t) {
      'use strict'
      t.r(a)
      var n,
        r,
        l = {
          fragment: {
            argumentDefinitions: (n = [
              { defaultValue: null, kind: 'LocalArgument', name: 'benefits_data' },
              { defaultValue: null, kind: 'LocalArgument', name: 'creator_intro' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsManagementPerksIntroScreenMutation',
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
            argumentDefinitions: n,
            kind: 'Operation',
            name: 'SuperFollowsManagementPerksIntroScreenMutation',
            selections: r,
          },
          params: {
            id: '8qvi0MQ7inSOKFRwbQIfXg',
            metadata: {},
            name: 'SuperFollowsManagementPerksIntroScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(l.hash = '5f9c7dfac83002ea4ec87405a6e13b8f'), (a.default = l)
    },
    XFyS: function (e, a, t) {
      'use strict'
      t.r(a)
      var n,
        r,
        l = {
          fragment: {
            argumentDefinitions: (n = [
              { defaultValue: null, kind: 'LocalArgument', name: 'benefits_data' },
              { defaultValue: null, kind: 'LocalArgument', name: 'creator_intro' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsManagementPerksDescriptionScreenMutation',
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
            argumentDefinitions: n,
            kind: 'Operation',
            name: 'SuperFollowsManagementPerksDescriptionScreenMutation',
            selections: r,
          },
          params: {
            id: 'e6EVmh-A3nX2zLeEfAS27w',
            metadata: {},
            name: 'SuperFollowsManagementPerksDescriptionScreenMutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(l.hash = '49ddb34d8182005881aaa8e2cea22703'), (a.default = l)
    },
    aREQ: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingPerksConfirmScreen_viewer',
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksConfirmCore_viewer' }],
        type: 'Viewer',
        abstractKey: null,
        hash: '339c26b88fcc2f785b8eece37d429287',
      }
      a.default = n
    },
    d8Sa: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementSummaryScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksIntroScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksDescriptionScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksConfirmScreen_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '225cbc8123476614f9ec189316a7f47b',
      }
      a.default = n
    },
    dNhZ: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    hGtx: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    hznd: function (e, a, t) {
      'use strict'
      var n = t('97Jx'),
        r = t.n(n),
        l = t('ERkP'),
        i = t.n(l),
        o = t('BedV'),
        s = t('yiKp'),
        c = t.n(s),
        u = (t('ho0z'), t('t62R')),
        d = t('IMYl'),
        p = t('py1r'),
        m = t('I4+6'),
        g = t('cm6r'),
        f = t('rHpw'),
        b = t('MWbm'),
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
        w = function (e) {
          var a = e.accessibilityLabel,
            t = e.accessibilityPosInSet,
            n = e.accessibilitySetSize,
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
                    { disabled: l, interactiveStyles: _, interactivityState: e, style: y.radioBackground },
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
                    'aria-posinset': t,
                    'aria-setsize': n,
                    checked: r,
                    disabled: l,
                    name: c,
                    onChange: r ? void 0 : w,
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
              return i.a.createElement(w, r()({}, e, { key: e.value }))
            },
          }),
        )
      }
    },
    kz1e: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksDescriptionScreen_user',
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
                  { alias: null, args: null, kind: 'ScalarField', name: 'title', storageKey: null },
                  { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksDescriptionCore_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '1459083fa29ac5b53f78c701302cf278',
      }
      a.default = n
    },
    lZLw: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    mEFY: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    mKqc: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    nAiE: function (e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'superFollowsSettingsQuery', function () {
          return Js
        })
      var n = {}
      t.r(n),
        t.d(n, 'Arrow', function () {
          return Q
        }),
        t.d(n, 'Arrow2x', function () {
          return J
        }),
        t.d(n, 'Arrow3x', function () {
          return Y
        }),
        t.d(n, 'Bench', function () {
          return Z
        }),
        t.d(n, 'Bench2x', function () {
          return $
        }),
        t.d(n, 'Bench3x', function () {
          return ee
        }),
        t.d(n, 'Cat', function () {
          return ae
        }),
        t.d(n, 'Cat2x', function () {
          return te
        }),
        t.d(n, 'Cat3x', function () {
          return ne
        }),
        t.d(n, 'Clipboard', function () {
          return re
        }),
        t.d(n, 'Clipboard2x', function () {
          return le
        }),
        t.d(n, 'Clipboard3x', function () {
          return ie
        }),
        t.d(n, 'CoinStairs', function () {
          return oe
        }),
        t.d(n, 'CoinStairs2x', function () {
          return se
        }),
        t.d(n, 'CoinStairs3x', function () {
          return ce
        }),
        t.d(n, 'HandCoins', function () {
          return ue
        }),
        t.d(n, 'HandCoins2x', function () {
          return de
        }),
        t.d(n, 'HandCoins3x', function () {
          return pe
        }),
        t.d(n, 'OneFinger', function () {
          return me
        }),
        t.d(n, 'OneFinger2x', function () {
          return ge
        }),
        t.d(n, 'OneFinger3x', function () {
          return fe
        }),
        t.d(n, 'PaperAirplane', function () {
          return be
        }),
        t.d(n, 'PaperAirplane2x', function () {
          return ye
        }),
        t.d(n, 'PaperAirplane3x', function () {
          return he
        }),
        t.d(n, 'Pricing', function () {
          return we
        }),
        t.d(n, 'Pricing2x', function () {
          return _e
        }),
        t.d(n, 'Pricing3x', function () {
          return ve
        }),
        t.d(n, 'Puzzle', function () {
          return ke
        }),
        t.d(n, 'Puzzle2x', function () {
          return Se
        }),
        t.d(n, 'Puzzle3x', function () {
          return Fe
        }),
        t.d(n, 'Thumbsup', function () {
          return Ee
        }),
        t.d(n, 'Thumbsup2x', function () {
          return Ce
        }),
        t.d(n, 'Thumbsup3x', function () {
          return xe
        }),
        t.d(n, 'TrafficLight', function () {
          return Ke
        }),
        t.d(n, 'TrafficLight2x', function () {
          return Te
        }),
        t.d(n, 'TrafficLight3x', function () {
          return Le
        }),
        t.d(n, 'Uturn', function () {
          return De
        }),
        t.d(n, 'Uturn2x', function () {
          return Oe
        }),
        t.d(n, 'Uturn3x', function () {
          return Ie
        })
      var r,
        l,
        i,
        o = t('ERkP'),
        s = t.n(o),
        c = t('v//M'),
        u = (t('enFi'), t('3XMw')),
        d = t.n(u),
        p = t('kGix'),
        m = t('97Jx'),
        g = t.n(m),
        f = t('m3Bd'),
        b = t.n(f),
        y = t('jHSc'),
        h = t('lUZE'),
        w = 'https://help.twitter.com/using-twitter/super-follows-creator',
        _ = ''.concat(w, '#pricechange'),
        v = t('/yvb'),
        k = t('6s7X'),
        S = function () {
          return s.a.createElement(v.a, { icon: s.a.createElement(k.a, null), link: w, type: 'primaryText' })
        },
        F = t('zCf4'),
        E = t('MWbm'),
        C = t('JYMr'),
        x = t('rHpw'),
        K = ['leftControlShouldClose', 'percentageComplete', 'rightControl', 'withCenteredLogo', 'withInfoButton'],
        T = d.a.a6777c1b,
        L = function (e) {
          var a = e.leftControlShouldClose,
            t = e.percentageComplete,
            n = e.rightControl,
            r = e.withCenteredLogo,
            l = e.withInfoButton,
            i = b()(e, K),
            o = Object(F.f)(),
            c = a ? 'close' : 'back',
            u = a ? '/settings/monetization' : void 0,
            d = r ? s.a.createElement(h.a, { style: D.iconTwitter }) : void 0,
            p = l ? s.a.createElement(E.a, { style: D.rightControl }, s.a.createElement(S, null), n) : n,
            m = t ? s.a.createElement(C.a, { progress: t }) : void 0
          return s.a.createElement(
            y.b,
            g()({}, i, {
              backButtonType: c,
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
        D = x.a.create(function (e) {
          return {
            iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
            rightControl: { alignItems: 'center', flexDirection: 'row', gap: e.spaces.space4 },
          }
        }),
        O = t('5FtR'),
        I = d.a.g92a2343,
        P = d.a.a91bb144,
        B = function () {
          var e = Object(F.f)(),
            a = s.a.createElement(
              v.a,
              {
                onPress: function () {
                  e.push('/settings/superfollows/application/submit')
                },
                type: 'primaryFilled',
              },
              P,
            )
          return s.a.createElement(L, { rightControl: a, title: I })
        },
        R = (t('jQ3i'), t('x4t0'), t('z84I'), t('KqXw'), t('3uku'), t('855f')),
        V = t('t62R'),
        A = t('WtWS'),
        z = t('0ULw'),
        M = function (e) {
          var a = e.items
          return s.a.createElement(
            E.a,
            { style: U.root },
            a.map(function (e) {
              return s.a.createElement(
                E.a,
                { key: e.label, style: U.item },
                s.a.createElement(V.b, { style: U.label, weight: 'bold' }, e.label),
                e.checked
                  ? s.a.createElement(A.a, { style: U.iconChecked })
                  : s.a.createElement(z.a, { style: U.iconUnchecked }),
              )
            }),
          )
        },
        U = x.a.create(function (e) {
          return {
            root: { gap: e.spaces.space24 },
            item: { flexDirection: 'row' },
            label: { flex: 1 },
            iconChecked: { color: e.colors.green500 },
            iconUnchecked: { color: e.colors.gray200 },
          }
        }),
        H = function () {
          return s.a.createElement(
            V.b,
            { align: 'center', color: 'gray700' },
            s.a.createElement(
              d.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              s.a.createElement(
                V.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                d.a.ebc0cbbc,
              ),
            ),
          )
        },
        j = t('ddV6'),
        W = t.n(j),
        N = (t('7x/C'), t('JtPf'), t('Qavd'), ['disabled', 'label', 'onPress', 'path']),
        q = function (e) {
          var a = e.disabled,
            t = e.label,
            n = e.onPress,
            r = e.path,
            l = b()(e, N),
            i = Object(F.f)(),
            o = s.a.useState(!1),
            c = W()(o, 2),
            u = c[0],
            d = c[1],
            p = function () {
              i.push(r)
            }
          return s.a.createElement(
            v.a,
            g()({}, l, {
              disabled: u || a,
              onPress: function (e) {
                n
                  ? (d(!0),
                    n(e)
                      .then(p)
                      .finally(function () {
                        return d(!1)
                      }))
                  : p()
              },
            }),
            t,
          )
        },
        G = t('jAXQ'),
        X = t.n(G),
        Q = (t('yH/f'), t('KOtZ'), t.p + 'Arrow.e8910965.png'),
        J = t.p + 'Arrow@2x.8af675c5.png',
        Y = t.p + 'Arrow@3x.949d4365.png',
        Z = t.p + 'Bench.ed26a435.png',
        $ = t.p + 'Bench@2x.ef9fb7d5.png',
        ee = t.p + 'Bench@3x.a306fd55.png',
        ae = t.p + 'Cat.089435a5.png',
        te = t.p + 'Cat@2x.bca70155.png',
        ne = t.p + 'Cat@3x.2b225ef5.png',
        re = t.p + 'Clipboard.540710d5.png',
        le = t.p + 'Clipboard@2x.72ca72e5.png',
        ie = t.p + 'Clipboard@3x.1b952e95.png',
        oe = t.p + 'CoinStairs.8488b245.png',
        se = t.p + 'CoinStairs@2x.34fd5855.png',
        ce = t.p + 'CoinStairs@3x.1b706305.png',
        ue = t.p + 'HandCoins.fbd23965.png',
        de = t.p + 'HandCoins@2x.c1b62b75.png',
        pe = t.p + 'HandCoins@3x.7dd5f3d5.png',
        me = t.p + 'OneFinger.6eb5d9c5.png',
        ge = t.p + 'OneFinger@2x.a13e1ba5.png',
        fe = t.p + 'OneFinger@3x.7f22c175.png',
        be = t.p + 'PaperAirplane.1ef48a05.png',
        ye = t.p + 'PaperAirplane@2x.2923eb15.png',
        he = t.p + 'PaperAirplane@3x.47e4b145.png',
        we = t.p + 'Pricing.ec5962d5.png',
        _e = t.p + 'Pricing@2x.f8284265.png',
        ve = t.p + 'Pricing@3x.b6cf0185.png',
        ke = t.p + 'Puzzle.aa045515.png',
        Se = t.p + 'Puzzle@2x.5be7ab15.png',
        Fe = t.p + 'Puzzle@3x.1796b225.png',
        Ee = t.p + 'Thumbsup.f5be79d5.png',
        Ce = t.p + 'Thumbsup@2x.6d106945.png',
        xe = t.p + 'Thumbsup@3x.6a81e6d5.png',
        Ke = t.p + 'TrafficLight.11644b65.png',
        Te = t.p + 'TrafficLight@2x.5657de25.png',
        Le = t.p + 'TrafficLight@3x.a5a35335.png',
        De = t.p + 'Uturn.c8267f55.png',
        Oe = t.p + 'Uturn@2x.db3f94d5.png',
        Ie = t.p + 'Uturn@3x.22f27905.png',
        Pe = t('tn7R'),
        Be = t('TIdA'),
        Re = t('A91F'),
        Ve = 400,
        Ae = [1, 2, 3],
        ze = Object.freeze({
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
        Me = Object(Pe.a)(ze).reduce(function (e, a) {
          var t = Math.max.apply(Math, Ae)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: n[a], width: Ve * t, height: 250 * t },
              customVariants: Ae.map(function (e) {
                return { uri: n[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Ve * e, height: 250 * e }
              }),
            }),
            e
          )
        }, {}),
        Ue = function (e) {
          var a = e.type,
            t = e.width,
            n = void 0 === t ? Ve : t,
            r = Me[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            c = { width: n, height: Math.round(n / l) }
          return s.a.createElement(
            E.a,
            { style: [He.illustration, c] },
            s.a.createElement(Be.a, {
              accessibilityLabel: '',
              aspectMode: Re.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        He = x.a.create(function (e) {
          return { illustration: { alignSelf: 'center' } }
        }),
        je = function (e) {
          var a = e.align,
            t = e.headline,
            n = e.illustration,
            r = e.subtext
          return s.a.createElement(
            s.a.Fragment,
            null,
            n && s.a.createElement(Ue, { type: n, width: 311 }),
            s.a.createElement(
              V.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title2',
                style: n && We.headline,
                weight: 'heavy',
              },
              t,
            ),
            s.a.createElement(V.b, { align: a, color: 'gray700', style: We.subtext }, r),
          )
        },
        We = x.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space16 } }
        }),
        Ne = d.a.feb54b4f,
        qe = d.a.bac156a6,
        Ge = d.a.a3a20a10,
        Xe = d.a.b26ae507,
        Qe = d.a.a753a87f,
        Je = d.a.abfaa527,
        Ye = R.a.getTruncatedCount(1e4),
        Ze = d.a.fdd95737({ minFollowersCount: Ye }),
        $e = R.a.getTruncatedCount(25),
        ea = [
          {
            label: Ze,
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
            label: d.a.a0dcad86({ minTweetsCount: $e }),
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
            label: d.a.c27f57ac,
            test: function (e) {
              var a
              return !(null != e && null !== (a = e.super_following_eligibility) && void 0 !== a && a.includes('age'))
            },
          },
        ],
        aa = void 0 !== r ? r : (r = t('RLjm')),
        ta = function (e) {
          var a = e.user,
            t = X()(aa, a),
            n = 0 === ((null == t ? void 0 : t.super_following_eligibility) || []).length,
            r = n ? ze.Arrow : ze.TrafficLight,
            l = n ? Ne : Ge,
            i = n ? qe : Xe,
            o = ea.map(function (e) {
              return { label: e.label, checked: (0, e.test)(t) }
            })
          return s.a.createElement(
            L,
            { withInfoButton: !0 },
            s.a.createElement(je, { headline: l, illustration: r, subtext: i }),
            s.a.createElement(M, { items: o }),
            n && s.a.createElement(H, null),
            s.a.createElement(q, {
              disabled: !n,
              label: Qe,
              path: '/settings/superfollows/application/one_more_thing',
            }),
            s.a.createElement(q, { label: Je, path: '/settings/superfollows/application/one_more_thing' }),
          )
        },
        na = t('9RkS'),
        ra = d.a.bbb89925,
        la = function (e) {
          var a = e.followersCount,
            t = e.max,
            n = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            o = s.a.useState(i),
            c = W()(o, 2),
            u = c[0],
            p = c[1],
            m = Math.round(a * r * (u / 100))
          return s.a.createElement(
            E.a,
            { style: ia.container },
            s.a.createElement(
              V.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              s.a.createElement(
                d.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                s.a.createElement(V.b, { weight: 'bold' }, d.a.a7dd00ea),
                s.a.createElement(
                  V.b,
                  { style: ia.earnings, weight: 'heavy' },
                  d.a.c62c1d30({ earnings: '$'.concat(R.a.getTruncatedCount(m)) }),
                ),
                s.a.createElement(V.b, { color: 'green500', style: ia.asteriskLeft }, d.a.e0fb982b),
              ),
            ),
            s.a.createElement(
              E.a,
              { style: ia.slider },
              s.a.createElement(na.a, {
                accessibilityLabel: '',
                max: t,
                min: n,
                onChange: p,
                step: l,
                thumbLabel: ra({ percent: u }),
                value: u,
              }),
            ),
            s.a.createElement(
              V.b,
              { color: 'green500', size: 'subtext3', style: ia.footnote },
              s.a.createElement(
                d.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                s.a.createElement(V.b, { style: ia.asteriskRight }, d.a.e263c38e),
              ),
            ),
          )
        },
        ia = x.a.create(function (e) {
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
        oa = t('6iuV'),
        sa = (t('1t7P'), t('jQ/y'), t('j7Bv')),
        ca = function (e) {
          var a = e.Icon,
            t = e.description,
            n = e.title
          return s.a.createElement(
            E.a,
            { style: ua.container },
            s.a.createElement(sa.a, { Icon: a, color: 'neutral' }),
            s.a.createElement(V.b, { size: 'headline2', style: ua.title, weight: 'bold' }, n),
            s.a.createElement(V.b, { color: 'gray700', style: ua.description }, t),
          )
        },
        ua = x.a.create(function (e) {
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
        da = t('sUoZ'),
        pa = t('witV'),
        ma = t('ACHU'),
        ga = [
          { Icon: da.a, title: d.a.d31c5997, description: d.a.hda1e780 },
          { Icon: pa.a, title: d.a.d08d0bb2, description: d.a.cbd8b105 },
          { Icon: ma.a, title: d.a.becb4930, description: d.a.g743ef96 },
        ],
        fa = function () {
          return s.a.createElement(
            oa.a,
            null,
            ga.map(function (e) {
              return s.a.createElement(ca, g()({}, e, { key: e.title }))
            }),
          )
        },
        ba = d.a.a6777c1b,
        ya = d.a.j5dc36d7,
        ha = d.a.c45b2f06,
        wa = d.a.hb6b432e,
        _a = d.a.cd5cae15,
        va = d.a.f7239f4c,
        ka = d.a.g8cdf707,
        Sa = d.a.bff8472e,
        Fa = d.a.e533715d,
        Ea = void 0 !== l ? l : (l = t('xd+q')),
        Ca = function (e) {
          var a = e.user,
            t = X()(Ea, a).legacy.followers_count
          return s.a.createElement(
            L,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            s.a.createElement(
              V.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ba,
            ),
            s.a.createElement(V.b, null, ya),
            s.a.createElement(
              V.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ha,
            ),
            s.a.createElement(V.b, { color: 'gray700' }, wa),
            s.a.createElement(Ue, { type: ze.HandCoins }),
            s.a.createElement(
              V.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              _a,
            ),
            s.a.createElement(fa, null),
            s.a.createElement(
              V.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              va,
            ),
            s.a.createElement(la, { followersCount: t, max: 10, min: 1, price: 4.99, value: 2 }),
            s.a.createElement(
              V.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ka,
            ),
            s.a.createElement(V.b, { color: 'gray700' }, Sa),
            s.a.createElement(q, {
              color: 'plum500',
              label: Fa,
              path: '/settings/superfollows/application/eligibility',
            }),
          )
        },
        xa = d.a.d0fc4890,
        Ka = d.a.c64384b6,
        Ta = d.a.c3d89aca,
        La = function () {
          return s.a.createElement(
            L,
            { withInfoButton: !0 },
            s.a.createElement(je, { align: 'center', headline: xa, illustration: ze.OneFinger, subtext: Ka }),
            s.a.createElement(q, { label: Ta, path: '/settings/superfollows/application/complete_profile' }),
          )
        },
        Da = t('tI3i'),
        Oa = t.n(Da),
        Ia = (t('2G9S'), t('Hsf0')),
        Pa = t.n(Ia),
        Ba = 'super_follows_application_draft',
        Ra = 'super_follows_onboarding_draft',
        Va = function (e) {
          return Pa()(void 0 !== i ? i : (i = t('PlkH')), e).__id
        },
        Aa = function (e, a) {
          var t = Va(a),
            n = e.get(t)
          return Oa()(n, 'viewer must be defined'), n
        },
        za = function (e, a) {
          return Aa(e, a).getLinkedRecord(Ba)
        },
        Ma = function (e, a) {
          return Aa(e, a).getLinkedRecord(Ra)
        },
        Ua = t('HG4m'),
        Ha = t.n(Ua),
        ja = t('Ud88'),
        Wa = t.n(ja)
      function Na(e, a) {
        var t = Wa()()
        s.a.useEffect(
          function () {
            Oa()(e, 'viewerRef must be defined'),
              Ha()(t, function (t) {
                !(function (e, a) {
                  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = t.content_category,
                    r = void 0 === n ? [] : n,
                    l = t.content_category_other,
                    i = void 0 === l ? null : l,
                    o = t.content_creation_platform,
                    s = void 0 === o ? [] : o,
                    c = t.content_creation_platform_other,
                    u = void 0 === c ? null : c,
                    d = t.ethnicity,
                    p = void 0 === d ? [] : d,
                    m = t.gender,
                    g = void 0 === m ? [] : m,
                    f = t.purpose,
                    b = void 0 === f ? null : f,
                    y = Va(a),
                    h = Aa(e, a)
                  if (!za(e, a)) {
                    var w = e.create(''.concat(y, ':').concat(Ba), 'SuperFollowsApplicationDraft')
                    w.setValue(r, 'content_category'),
                      w.setValue(i, 'content_category_other'),
                      w.setValue(s, 'content_creation_platform'),
                      w.setValue(u, 'content_creation_platform_other'),
                      w.setValue(b, 'purpose'),
                      w.setValue(p, 'ethnicity'),
                      w.setValue(g, 'gender'),
                      h.setLinkedRecord(w, Ba)
                  }
                })(t, e, a)
              })
          },
          [a, t, e],
        )
      }
      function qa(e, a) {
        var t = Wa()()
        s.a.useEffect(
          function () {
            Oa()(e, 'viewerRef must be defined'),
              Ha()(t, function (t) {
                !(function (e, a) {
                  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = t.creator_intro,
                    r = void 0 === n ? null : n,
                    l = t.description,
                    i = void 0 === l ? null : l,
                    o = t.selected_price,
                    s = void 0 === o ? null : o,
                    c = Va(a),
                    u = Aa(e, a)
                  if (!Ma(e, a)) {
                    var d = e.create(''.concat(c, ':').concat(Ra), 'SuperFollowsOnboardingDraft')
                    d.setValue(r, 'creator_intro'),
                      d.setValue(i, 'description'),
                      d.setValue(s, 'selected_price'),
                      u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                  }
                })(t, e, a)
              })
          },
          [t, a, e],
        )
      }
      function Ga(e, a) {
        var t = Wa()()
        return s.a.useCallback(
          function (n) {
            Oa()(e, 'viewerRef must be defined'),
              Ha()(t, function (t) {
                !(function (e, a, t, n) {
                  var r = za(e, a)
                  Oa()(r, 'applicationDraft must be defined'), r.setValue(n, t)
                })(t, e, a, n)
              })
          },
          [t, a, e],
        )
      }
      function Xa(e, a) {
        var t = Wa()()
        return s.a.useCallback(
          function (n) {
            Oa()(e, 'viewerId must be defined'),
              Ha()(t, function (t) {
                !(function (e, a, t, n) {
                  var r = Ma(e, a)
                  Oa()(r, 'onboardingDraft must be defined'), r.setValue(n, t)
                })(t, e, a, n)
              })
          },
          [t, a, e],
        )
      }
      var Qa,
        Ja,
        Ya,
        Za,
        $a,
        et,
        at,
        tt,
        nt,
        rt,
        lt,
        it,
        ot,
        st,
        ct,
        ut,
        dt,
        pt,
        mt,
        gt,
        ft,
        bt,
        yt,
        ht,
        wt,
        _t,
        vt,
        kt,
        St,
        Ft,
        Et,
        Ct,
        xt,
        Kt,
        Tt,
        Lt,
        Dt,
        Ot,
        It,
        Pt,
        Bt,
        Rt,
        Vt,
        At,
        zt,
        Mt,
        Ut,
        Ht,
        jt,
        Wt,
        Nt,
        qt,
        Gt = t('p+r5'),
        Xt = d.a.f7997b16,
        Qt = d.a.fc00ab5b,
        Jt = d.a.c249167f,
        Yt = d.a.b772cd65,
        Zt = void 0 !== Qa ? Qa : (Qa = t('xhT1')),
        $t = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(Zt, n),
            l =
              null !==
                (a =
                  null === (t = r.super_follows_application_draft) || void 0 === t
                    ? void 0
                    : t.content_category_other) && void 0 !== a
                ? a
                : '',
            i = Ga(r, 'content_category_other')
          return s.a.createElement(
            L,
            { title: Xt },
            s.a.createElement(Gt.a, {
              helperText: Jt,
              label: Qt,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            s.a.createElement(v.a, null, Yt),
          )
        },
        en = t('fyvP'),
        an = t('csss'),
        tn = function (e) {
          var a = e.description,
            t = e.disabled,
            n = e.history,
            r = e.label,
            l = e.path,
            i = Object(F.f)()
          return s.a.createElement(an.a, {
            description: a,
            disabled: t,
            label: r,
            onPress: function () {
              ;(null != n ? n : i).push(l)
            },
          })
        },
        nn = d.a.f7997b16,
        rn = d.a.c144fa52,
        ln = [
          d.a.b1f2e8ce,
          d.a.jfec3aa0,
          d.a.e08a6e6f,
          d.a.b743702c,
          d.a.h2401e36,
          d.a.ed7e6675,
          d.a.fecc3791,
          d.a.d80b0f11,
          d.a.b29a93b1,
          d.a.c5d190c0,
          d.a.i6dfc494,
          d.a.ff2b68ca,
          d.a.e404203c,
          d.a.ab389321,
          d.a.a46fdec4,
          d.a.add55c97,
          d.a.f28d8b06,
          d.a.c8ee31da,
          d.a.e0234d02,
          d.a.h9d38a08,
          d.a.fe6841bd,
          d.a.e031e06a,
          d.a.i5cade16,
          d.a.e084f2af,
          d.a.a9db15b2,
          d.a.d27beb9e,
          d.a.a92db4a9,
          d.a.fc64990d,
          d.a.hb5f1d64,
        ],
        on = d.a.c365dcc5,
        sn = d.a.bd44a8a8,
        cn = void 0 !== Ja ? Ja : (Ja = t('JB6R')),
        un = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(cn, n),
            l =
              null !==
                (a = null === (t = r.super_follows_application_draft) || void 0 === t ? void 0 : t.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Ga(r, 'content_category'),
            o = ln.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            L,
            { title: nn },
            s.a.createElement(en.a, {
              description: rn,
              label: rn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            s.a.createElement(tn, {
              helpText: sn,
              label: on,
              path: '/settings/superfollows/application/submit_categories_other',
            }),
          )
        },
        dn = d.a.d94a9a17,
        pn = d.a.a35394b3,
        mn = [
          d.a.e375c2df,
          d.a.gf30371a,
          d.a.b3773d47,
          d.a.a45caf17,
          d.a.e5f515b8,
          d.a.e3b35497,
          d.a.i83206dc,
          d.a.a4ee9393,
          d.a.ab09972f,
          d.a.jafe3705,
        ],
        gn = void 0 !== Ya ? Ya : (Ya = t('H1we')),
        fn = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(gn, n),
            l =
              null !== (a = null === (t = r.super_follows_application_draft) || void 0 === t ? void 0 : t.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Ga(r, 'ethnicity'),
            o = mn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            L,
            { title: dn },
            s.a.createElement(en.a, {
              description: pn,
              label: pn,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        bn = d.a.a8d0108d,
        yn = d.a.a35394b3,
        hn = [
          d.a.de32365f,
          d.a.b6ab31bd,
          d.a.ffc23188,
          d.a.h1cc7091,
          d.a.hca27829,
          d.a.b3af7344,
          d.a.he3f1435,
          d.a.c3c16abb,
        ],
        wn = void 0 !== Za ? Za : (Za = t('VG5i')),
        _n = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(wn, n),
            l =
              null !== (a = null === (t = r.super_follows_application_draft) || void 0 === t ? void 0 : t.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Ga(r, 'gender'),
            o = hn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            L,
            { title: bn },
            s.a.createElement(en.a, {
              description: yn,
              label: yn,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        vn = d.a.da8ea7da,
        kn = d.a.d7081f91,
        Sn = d.a.j349548f,
        Fn = d.a.b772cd65,
        En = void 0 !== $a ? $a : ($a = t('+OUG')),
        Cn = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(En, n),
            l =
              null !==
                (a =
                  null === (t = r.super_follows_application_draft) || void 0 === t
                    ? void 0
                    : t.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = Ga(r, 'content_creation_platform_other')
          return s.a.createElement(
            L,
            { title: vn },
            s.a.createElement(Gt.a, {
              helperText: Sn,
              label: kn,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            s.a.createElement(v.a, null, Fn),
          )
        },
        xn = d.a.da8ea7da,
        Kn = d.a.d4062c9a,
        Tn = [d.a.a3021317, d.a.eb4a600d, d.a.d4d74bb3, d.a.fc738909, d.a.d8552c1a, d.a.ca07aa46],
        Ln = d.a.c365dcc5,
        Dn = d.a.bd44a8a8,
        On = void 0 !== et ? et : (et = t('xnrs')),
        In = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(On, n),
            l =
              null !==
                (a =
                  null === (t = r.super_follows_application_draft) || void 0 === t
                    ? void 0
                    : t.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Ga(r, 'content_creation_platform'),
            o = Tn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            L,
            { title: xn },
            s.a.createElement(en.a, {
              description: Kn,
              label: Kn,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            s.a.createElement(tn, {
              helpText: Dn,
              label: Ln,
              path: '/settings/superfollows/application/submit_platforms_other',
            }),
          )
        },
        Pn = (t('tVqn'), t('uFXj'), d.a.f4f4dd6f),
        Bn = d.a.f448cbcb,
        Rn = function (e) {
          var a = e.title,
            t = e.type,
            n = 'required' === t ? 'red500' : 'optional' === t ? 'gray700' : void 0,
            r = 'required' === t ? Pn : 'optional' === t ? Bn : void 0
          return s.a.createElement(
            E.a,
            { style: Vn.container },
            s.a.createElement(V.b, { size: 'headline1', weight: 'heavy' }, a),
            r && s.a.createElement(V.b, { color: n, size: 'subtext2', style: Vn.subtext }, r),
          )
        },
        Vn = x.a.create(function (e) {
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
        An = t('jV+4'),
        zn = t('Xrkv'),
        Mn = t('9SqB'),
        Un = t.n(Mn),
        Hn = d.a.e873f0ae,
        jn = d.a.f095a24a,
        Wn = d.a.i5f7b6b8,
        Nn = d.a.d1f6d336,
        qn = d.a.f7997b16,
        Gn = d.a.c144fa52,
        Xn = d.a.f1bf337d,
        Qn = d.a.da8ea7da,
        Jn = d.a.d4062c9a,
        Yn = d.a.e963d587,
        Zn = d.a.ede0ac3e,
        $n = d.a.ffb6cb88,
        er = d.a.b2159e8e,
        ar = d.a.feacb49d,
        tr = d.a.je17c987,
        nr = d.a.d94a9a17,
        rr = d.a.a8d0108d,
        lr = d.a.gfc80842,
        ir = void 0 !== at ? at : (at = t('pLb/')),
        or = void 0 !== tt ? tt : (tt = t('3qCL')),
        sr = void 0 !== nt ? nt : (nt = t('AyUU')),
        cr = function (e) {
          var a,
            t,
            n,
            r,
            l,
            i,
            o,
            c = e.user,
            u = e.viewer,
            d = X()(ir, c),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = X()(or, u),
            g = m.super_follows_application_draft,
            f = (null !== (a = null == g ? void 0 : g.content_category) && void 0 !== a ? a : []).concat(
              null !== (t = null == g ? void 0 : g.content_category_other) && void 0 !== t ? t : [],
            ),
            b = (null !== (n = null == g ? void 0 : g.content_creation_platform) && void 0 !== n ? n : []).concat(
              null !== (r = null == g ? void 0 : g.content_creation_platform_other) && void 0 !== r ? r : [],
            ),
            y = null !== (l = null == g ? void 0 : g.purpose) && void 0 !== l ? l : '',
            h = null !== (i = null == g ? void 0 : g.ethnicity) && void 0 !== i ? i : [],
            w = null !== (o = null == g ? void 0 : g.gender) && void 0 !== o ? o : [],
            _ = f.length && b.length && y.trim(),
            v = Ga(m, 'purpose'),
            k = Un()(sr),
            S = W()(k, 2),
            F = S[0],
            E = S[1]
          return s.a.createElement(
            L,
            { withInfoButton: !0 },
            s.a.createElement(je, { headline: Hn, illustration: ze.Clipboard, subtext: jn }),
            s.a.createElement(Rn, { title: Wn }),
            s.a.createElement(V.b, null, Nn),
            p && s.a.createElement(An.a, { screenName: p }),
            s.a.createElement(Rn, { title: qn, type: 'required' }),
            s.a.createElement(V.b, { color: 'gray700' }, Gn),
            s.a.createElement(tn, {
              description: Object(zn.a)(f, !0),
              label: Xn,
              path: '/settings/superfollows/application/submit_categories',
            }),
            s.a.createElement(Rn, { title: Qn, type: 'required' }),
            s.a.createElement(V.b, { color: 'gray700' }, Jn),
            s.a.createElement(tn, {
              description: Object(zn.a)(b, !0),
              label: Yn,
              path: '/settings/superfollows/application/submit_platforms',
            }),
            s.a.createElement(Rn, { title: Zn, type: 'required' }),
            s.a.createElement(Gt.a, {
              helperText: er,
              label: $n,
              name: 'plannedUsage',
              onChange: function (e) {
                v(e.currentTarget.value)
              },
              value: y,
            }),
            s.a.createElement(Rn, { title: ar, type: 'optional' }),
            s.a.createElement(V.b, { color: 'gray700' }, tr),
            s.a.createElement(tn, {
              description: Object(zn.a)(h, !0),
              label: nr,
              path: '/settings/superfollows/application/submit_ethnicities',
            }),
            s.a.createElement(tn, {
              description: Object(zn.a)(w, !0),
              label: rr,
              path: '/settings/superfollows/application/submit_genders',
            }),
            s.a.createElement(H, null),
            s.a.createElement(q, {
              disabled: !_ || E,
              label: lr,
              onPress: function () {
                return new Promise(function (e, a) {
                  F({
                    variables: { category: f, platform: b, purpose: y, ethnicity: h, gender: w },
                    onCompleted: function (a, t) {
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
        ur = void 0 !== rt ? rt : (rt = t('o/nB')),
        dr = void 0 !== lt ? lt : (lt = t('lZLw')),
        pr = function (e) {
          var a = e.user,
            t = e.viewer,
            n = X()(ur, a),
            r = X()(dr, t)
          return (
            Na(r),
            s.a.createElement(
              F.d,
              null,
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/eligibility' },
                s.a.createElement(ta, { user: n }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/one_more_thing' },
                s.a.createElement(La, null),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/complete_profile' },
                s.a.createElement(B, null),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit' },
                s.a.createElement(cr, { user: n, viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_categories' },
                s.a.createElement(un, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_categories_other' },
                s.a.createElement($t, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_platforms' },
                s.a.createElement(In, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_platforms_other' },
                s.a.createElement(Cn, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_ethnicities' },
                s.a.createElement(fn, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_genders' },
                s.a.createElement(_n, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { path: '/settings/superfollows/application' },
                s.a.createElement(Ca, { user: n }),
              ),
            )
          )
        },
        mr = (t('hBpG'), t('ho0z'), t('cHvH')),
        gr = function (e) {
          var a = e.children,
            t = e.style
          return s.a.createElement(
            E.a,
            { style: [yr.frame, t] },
            s.a.createElement(
              E.a,
              { style: yr.browserBar },
              s.a.createElement(
                E.a,
                { style: yr.browserBarButtons },
                s.a.createElement(E.a, { style: yr.browserBarButton }),
                s.a.createElement(E.a, { style: yr.browserBarButton }),
                s.a.createElement(E.a, { style: yr.browserBarButton }),
              ),
              s.a.createElement(
                E.a,
                { style: yr.browserBarUrlInputWrapper },
                s.a.createElement(E.a, { style: yr.browserBarUrlInput }),
              ),
            ),
            a,
          )
        },
        fr = function (e) {
          var a = e.children,
            t = e.style
          return s.a.createElement(E.a, { style: t }, s.a.createElement(E.a, { style: yr.content }, a))
        },
        br = function (e) {
          var a = e.children,
            t = e.style
          return Object(mr.b)().windowWidth > x.a.theme.breakpoints.medium
            ? s.a.createElement(gr, { style: t }, s.a.createElement(fr, { style: yr.contentWide }, a))
            : s.a.createElement(fr, { style: t }, a)
        },
        yr = x.a.create(function (e) {
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
        hr = t('MAc7'),
        wr = ['style'],
        _r = function (e, a) {
          var t = e.style,
            n = b()(e, wr)
          return s.a.createElement(br, { style: t }, s.a.createElement(hr.a, g()({}, n, { ref: a })))
        },
        vr = s.a.forwardRef(_r),
        kr = function (e) {
          var a = e.children,
            t = e.style,
            n = Object(mr.b)().windowWidth > x.a.theme.breakpoints.medium ? Sr.marginWide : Sr.marginNarrow
          return s.a.createElement(E.a, { style: [t, n] }, a)
        },
        Sr = x.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space80 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        Fr = ['label', 'path'],
        Er = function (e) {
          var a = e.label,
            t = e.path,
            n = b()(e, Fr),
            r = Object(F.f)()
          return s.a.createElement(
            V.b,
            g()({}, n, {
              onPress: function () {
                r.push(t)
              },
              underlineWeight: 'heavy',
              weight: 'bold',
              withUnderline: !0,
            }),
            a,
          )
        },
        Cr = d.a.hf6f2913,
        xr = d.a.i859a9d3,
        Kr = x.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        Tr = function (e) {
          var a = e.path,
            t = e.style
          return s.a.createElement(
            E.a,
            { style: [Kr.root, t] },
            s.a.createElement(V.b, { size: 'headline2', weight: 'heavy' }, Cr),
            s.a.createElement(Er, { label: xr, path: a }),
          )
        },
        Lr = t('0yYu'),
        Dr = d.a.iba08a94,
        Or = d.a.bcb1e4e6,
        Ir = void 0 !== it ? it : (it = t('UFp0')),
        Pr = void 0 !== ot ? ot : (ot = t('NmgE')),
        Br = function (e) {
          var a,
            t,
            n = e.user,
            r = e.viewer,
            l = X()(Ir, n),
            i = X()(Pr, r),
            o = l.legacy,
            c = o.name,
            u = o.profile_image_url_https,
            d =
              null !==
                (a = null === (t = i.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== a
                ? a
                : ''
          return (
            Oa()('string' == typeof u, 'imageUrl must be defined'),
            Oa()('string' == typeof c, 'name must be defined'),
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(kr, { style: Rr.interstitial }, s.a.createElement(je, { headline: Dr, subtext: Or })),
              s.a.createElement(Lr.a, null),
              s.a.createElement(
                kr,
                { style: Rr.previewCallout },
                s.a.createElement(Tr, { path: '/settings/superfollows/perks_preview' }),
              ),
              s.a.createElement(vr, { imageUrl: u, name: c, style: Rr.preview, value: d }),
            )
          )
        },
        Rr = x.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Vr = d.a.hf6f2913,
        Ar = void 0 !== st ? st : (st = t('MvEh')),
        zr = void 0 !== ct ? ct : (ct = t('U5ka')),
        Mr = function (e) {
          var a = e.user,
            t = e.viewer,
            n = X()(Ar, a),
            r = X()(zr, t)
          return s.a.createElement(L, { title: Vr, withInfoButton: !0 }, s.a.createElement(Br, { user: n, viewer: r }))
        },
        Ur = t('lD8l'),
        Hr = (t('kH1Z'), t('6U7i'), t('9VLy')),
        jr = t('6OUF'),
        Wr = d.a.a329ce87,
        Nr = function (e, a) {
          var t = e.imageUrl,
            n = e.onChange,
            r = e.screenName,
            l = e.style,
            i = e.value
          return s.a.createElement(
            E.a,
            { style: [Gr.root, l] },
            n
              ? s.a.createElement(jr.a, {
                  inputStyle: Gr.descriptionInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxLength: 140,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'description',
                  numberOfLines: 1,
                  onChange: n,
                  placeholder: Wr,
                  ref: a,
                  style: Gr.description,
                  value: i,
                })
              : s.a.createElement(V.b, { color: 'gray700', style: Gr.description }, i),
            s.a.createElement(Hr.a, { imageUrl: t, screenName: r, style: [Gr.signature, !i && Gr.visibilityHidden] }),
          )
        },
        qr = s.a.forwardRef(Nr),
        Gr = x.a.create(function (e) {
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
        Xr = ['style'],
        Qr = d.a.cbc8ce27,
        Jr = function (e, a) {
          var t = e.style,
            n = b()(e, Xr),
            r = Object(mr.b)().windowWidth > x.a.theme.breakpoints.medium
          return s.a.createElement(
            E.a,
            { style: [Zr.root, r && Zr.rootWide, t] },
            s.a.createElement(
              V.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Qr,
            ),
            s.a.createElement(qr, g()({}, n, { ref: a, style: Zr.description })),
          )
        },
        Yr = s.a.forwardRef(Jr),
        Zr = x.a.create(function (e) {
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
        $r = ['style'],
        el = function (e, a) {
          var t = e.style,
            n = b()(e, $r)
          return s.a.createElement(
            br,
            { style: t },
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(Yr, g()({}, n, { ref: a })),
              s.a.createElement(Ur.a, { style: tl.exclusiveDemoBonusContent }),
            ),
          )
        },
        al = s.a.forwardRef(el),
        tl = x.a.create(function (e) {
          return {
            exclusiveDemoBonusContent: {
              alignSelf: 'center',
              marginBottom: e.spaces.space32,
              marginTop: e.spaces.space16,
            },
          }
        }),
        nl = d.a.gf32cca1,
        rl = d.a.j8ba99b3,
        ll = d.a.j679dcda,
        il = void 0 !== ut ? ut : (ut = t('yjSu')),
        ol = void 0 !== dt ? dt : (dt = t('RTdz')),
        sl = function (e, a) {
          var t,
            n,
            r = e.user,
            l = e.viewer,
            i = X()(il, r),
            o = X()(ol, l),
            c = i.legacy,
            u = c.name,
            d = c.profile_image_url_https,
            p =
              null !== (t = null === (n = o.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.description) &&
              void 0 !== t
                ? t
                : '',
            m = Xa(o, 'description')
          return (
            Oa()('string' == typeof d, 'imageUrl must be defined'),
            Oa()('string' == typeof u, 'name must be defined'),
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(kr, { style: ul.interstitial }, s.a.createElement(je, { headline: nl, subtext: rl })),
              s.a.createElement(
                kr,
                { style: ul.examplesLink },
                s.a.createElement(Er, { label: ll, path: '/settings/superfollows/perks_description_examples' }),
              ),
              s.a.createElement(Lr.a, null),
              s.a.createElement(
                kr,
                { style: ul.previewCallout },
                s.a.createElement(Tr, { path: '/settings/superfollows/perks_preview' }),
              ),
              s.a.createElement(al, {
                imageUrl: d,
                onChange: function (e) {
                  m(e.currentTarget.value)
                },
                ref: a,
                screenName: u,
                style: ul.preview,
                value: p,
              }),
            )
          )
        },
        cl = s.a.forwardRef(sl),
        ul = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        dl = d.a.cd5cae15,
        pl = d.a.e36287c6,
        ml = d.a.b772cd65,
        gl = void 0 !== pt ? pt : (pt = t('kz1e')),
        fl = void 0 !== mt ? mt : (mt = t('M3aw')),
        bl = void 0 !== gt ? gt : (gt = t('XFyS')),
        yl = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        hl = function (e) {
          var a,
            t,
            n,
            r,
            l = e.user,
            i = e.viewer,
            o = X()(gl, l),
            c = X()(fl, i),
            u =
              null !==
                (a = null === (t = o.super_follow_creator_benefits) || void 0 === t ? void 0 : t.creator_intro) &&
              void 0 !== a
                ? a
                : '',
            d =
              null !== (n = null === (r = c.super_follows_onboarding_draft) || void 0 === r ? void 0 : r.description) &&
              void 0 !== n
                ? n
                : '',
            p = Un()(bl),
            m = W()(p, 2),
            f = m[0],
            b = m[1],
            y = {
              disabled: !!!d || b,
              label: ml,
              onPress: function () {
                return new Promise(function (e, a) {
                  f({
                    variables: {
                      creator_intro: u,
                      benefits_data: [{ benefit_type: 'ExclusiveContent', title: '', description: d }],
                    },
                    onCompleted: function (a, t) {
                      return e()
                    },
                    onError: a,
                  })
                })
              },
              path: '/settings/superfollows/management',
              type: 'primaryFilled',
            },
            h = s.a.createElement(q, y),
            w = s.a.createElement(q, g()({}, y, { size: 'small' }))
          return s.a.createElement(
            L,
            { rightControl: w, subtitle: pl, title: dl },
            s.a.createElement(cl, { user: o, viewer: c }),
            s.a.createElement(kr, { style: yl.buttons }, h),
          )
        },
        wl = d.a.j3253319,
        _l = d.a.h1e80993,
        vl = d.a.j679dcda,
        kl = void 0 !== ft ? ft : (ft = t('hGtx')),
        Sl = void 0 !== bt ? bt : (bt = t('DWSt')),
        Fl = function (e, a) {
          var t,
            n,
            r = e.user,
            l = e.viewer,
            i = X()(kl, r),
            o = X()(Sl, l),
            c = i.legacy,
            u = c.name,
            d = c.profile_image_url_https,
            p =
              null !==
                (t = null === (n = o.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== t
                ? t
                : '',
            m = Xa(o, 'creator_intro')
          return (
            Oa()('string' == typeof d, 'imageUrl must be defined'),
            Oa()('string' == typeof u, 'name must be defined'),
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(kr, { style: Cl.interstitial }, s.a.createElement(je, { headline: wl, subtext: _l })),
              s.a.createElement(
                kr,
                { style: Cl.examplesLink },
                s.a.createElement(Er, { label: vl, path: '/settings/superfollows/perks_intro_examples' }),
              ),
              s.a.createElement(Lr.a, null),
              s.a.createElement(
                kr,
                { style: Cl.previewCallout },
                s.a.createElement(Tr, { path: '/settings/superfollows/perks_preview' }),
              ),
              s.a.createElement(vr, {
                imageUrl: d,
                name: u,
                onChange: function (e) {
                  m(e.currentTarget.value)
                },
                ref: a,
                style: Cl.preview,
                value: p,
              }),
            )
          )
        },
        El = s.a.forwardRef(Fl),
        Cl = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        xl = d.a.cd5cae15,
        Kl = d.a.c0348963,
        Tl = d.a.b772cd65,
        Ll = void 0 !== yt ? yt : (yt = t('oyMe')),
        Dl = void 0 !== ht ? ht : (ht = t('RL7R')),
        Ol = void 0 !== wt ? wt : (wt = t('VzX/')),
        Il = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Pl = function (e) {
          var a,
            t,
            n,
            r = e.user,
            l = e.viewer,
            i = X()(Ll, r),
            o = X()(Dl, l),
            c = null === (a = i.super_follow_creator_benefits) || void 0 === a ? void 0 : a.benefits_data,
            u =
              null !==
                (t = null === (n = o.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== t
                ? t
                : '',
            d = Un()(Ol),
            p = W()(d, 2),
            m = p[0],
            f = p[1],
            b = {
              disabled: !!!u || f,
              label: Tl,
              onPress: function () {
                return new Promise(function (e, a) {
                  m({
                    variables: { benefits_data: c, creator_intro: u },
                    onCompleted: function (a, t) {
                      return e()
                    },
                    onError: a,
                  })
                })
              },
              path: '/settings/superfollows/management',
              type: 'primaryFilled',
            },
            y = s.a.createElement(q, b),
            h = s.a.createElement(q, g()({}, b, { size: 'small' }))
          return s.a.createElement(
            L,
            { rightControl: h, subtitle: Kl, title: xl },
            s.a.createElement(El, { user: i, viewer: o }),
            s.a.createElement(kr, { style: Il.buttons }, y),
          )
        },
        Bl = t('Nh1N'),
        Rl = t('yoO3'),
        Vl = t('7FtF'),
        Al = d.a.be103b84,
        zl = function () {
          return s.a.createElement(
            E.a,
            { style: Ml.root },
            s.a.createElement(A.a, { style: Ml.icon }),
            s.a.createElement(V.b, { size: 'subtext2', weight: 'bold' }, Al),
          )
        },
        Ml = x.a.create(function (e) {
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
        Ul = function (e) {
          var a = e.children,
            t = e.childrenStyle,
            n = e.headline,
            r = e.rightControl
          return s.a.createElement(
            E.a,
            { style: Hl.root },
            s.a.createElement(
              E.a,
              { style: Hl.header },
              s.a.createElement(
                V.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: Hl.headline,
                  weight: 'heavy',
                },
                n,
              ),
              r,
            ),
            s.a.createElement(E.a, { style: t }, a),
          )
        },
        Hl = x.a.create(function (e) {
          return {
            root: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginTop: e.componentDimensions.gutterVertical,
              marginBottom: e.spaces.space24,
            },
            header: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            headline: { marginVertical: e.spaces.space12 },
          }
        }),
        jl = function (e) {
          var a = e.children,
            t = e.headline,
            n = e.rightControl
          return s.a.createElement(
            E.a,
            { style: Wl.root },
            s.a.createElement(
              E.a,
              { style: Wl.header },
              s.a.createElement(
                V.b,
                {
                  accessibilityLevel: 4,
                  accessibilityRole: 'heading',
                  size: 'headline2',
                  style: Wl.headline,
                  weight: 'heavy',
                },
                t,
              ),
              a,
            ),
            n,
          )
        },
        Wl = x.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        Nl = t('4zmP'),
        ql = ['$refType'],
        Gl = d.a.a6777c1b,
        Xl = d.a.fcd2be23,
        Ql = d.a.c0348963,
        Jl = d.a.d08d0bb2,
        Yl = d.a.ifc9b709,
        Zl = d.a.b08bbeb4,
        $l = d.a.ia9c37c4,
        ei = d.a.fb1e4eb6,
        ai = d.a.be54a312,
        ti = d.a.cca48545,
        ni = d.a.de67bc6e,
        ri = d.a.a46cead5,
        li = d.a.idd8ae44,
        ii = d.a.b28a1b48,
        oi = d.a.f2df375b,
        si = d.a.f3ce76c0,
        ci = d.a.i8982e7e,
        ui = d.a.ca5ca5ed,
        di = d.a.abd845fd,
        pi = d.a.i859a9d3,
        mi = d.a.d14c7bbc,
        gi = d.a.g867481d,
        fi = d.a.f66d24be,
        bi = d.a.g5925628,
        yi = void 0 !== _t ? _t : (_t = t('EM6u')),
        hi = void 0 !== vt ? vt : (vt = t('oNwH')),
        wi = void 0 !== kt ? kt : (kt = t('qOMr')),
        _i = function (e) {
          var a,
            t,
            n,
            r,
            l,
            i = e.priceOfferings,
            o = e.user,
            c = e.viewer,
            u = Object(F.g)(),
            d = X()(yi, i),
            p = (d.$refType, b()(d, ql)),
            m = X()(hi, o),
            g = X()(wi, c),
            f = null !== (a = m.legacy.profile_image_url_https) && void 0 !== a ? a : void 0,
            y = null !== (t = m.legacy.screen_name) && void 0 !== t ? t : void 0,
            h = g.super_follows_onboarding_draft,
            k = null !== (n = null == h ? void 0 : h.creator_intro) && void 0 !== n ? n : '',
            S = null !== (r = null == h ? void 0 : h.description) && void 0 !== r ? r : '',
            C = null !== (l = null == h ? void 0 : h.selected_price) && void 0 !== l ? l : 'offer2',
            x = s.a.createElement(Er, {
              label: ui,
              path: '/settings/superfollows/management/perks_confirm',
              size: 'subtext1',
            }),
            K = s.a.createElement(q, {
              label: di,
              path: '/settings/superfollows/management/perks_intro',
              size: 'small',
              type: 'primaryOutlined',
            }),
            T = s.a.createElement(q, {
              label: di,
              path: '/settings/superfollows/management/perks_description',
              size: 'small',
              type: 'primaryOutlined',
            })
          return s.a.createElement(
            Rl.a,
            null,
            s.a.createElement(
              Vl.a,
              { location: u, screenType: 'secondaryDetail', title: Gl },
              s.a.createElement(
                E.a,
                { style: vi.title },
                s.a.createElement(
                  V.b,
                  { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                  Gl,
                ),
                s.a.createElement(zl, null),
              ),
              s.a.createElement(Lr.a, null),
              s.a.createElement(
                Ul,
                { childrenStyle: vi.benefits, headline: Xl, rightControl: x },
                s.a.createElement(
                  jl,
                  { headline: Ql, rightControl: K },
                  s.a.createElement(qr, { imageUrl: f, screenName: y, value: k }),
                ),
                s.a.createElement(
                  jl,
                  { headline: Jl, rightControl: T },
                  s.a.createElement(qr, { imageUrl: f, screenName: y, value: S }),
                ),
                s.a.createElement(jl, { headline: Yl }, s.a.createElement(V.b, { color: 'gray700' }, Zl)),
              ),
              s.a.createElement(Lr.a, null),
              s.a.createElement(
                Ul,
                { childrenStyle: vi.other, headline: $l },
                s.a.createElement(V.b, { color: 'gray700' }, ei),
                s.a.createElement(V.b, { size: 'headline2', weight: 'heavy' }, ai({ price: p[C] })),
                s.a.createElement(Nl.a, { Icon: Bl.a, action: { label: pi, link: _ }, headline: ti, text: ni }),
              ),
              s.a.createElement(Lr.a, null),
              s.a.createElement(
                Ul,
                { childrenStyle: vi.other, headline: ri },
                s.a.createElement(V.b, { color: 'gray700' }, li),
                s.a.createElement(
                  E.a,
                  { style: vi.buttons },
                  s.a.createElement(
                    v.a,
                    {
                      dominantColor: '#5865F2',
                      link: 'https://t.co/jPqvg6tFrDJG',
                      style: vi.button,
                      type: 'onMediaDominantColorFilled',
                    },
                    mi,
                  ),
                ),
              ),
              s.a.createElement(Lr.a, null),
              s.a.createElement(
                Ul,
                { childrenStyle: vi.other, headline: ii },
                s.a.createElement(V.b, { color: 'gray700' }, oi),
                s.a.createElement(
                  E.a,
                  { style: vi.buttons },
                  s.a.createElement(
                    v.a,
                    { link: 'https://t.co/RL2NN3bEVkes', style: vi.button, type: 'primaryOutlined' },
                    gi,
                  ),
                ),
              ),
              s.a.createElement(Lr.a, null),
              s.a.createElement(
                Ul,
                { childrenStyle: vi.other, headline: si },
                s.a.createElement(V.b, { color: 'gray700' }, ci),
                s.a.createElement(
                  E.a,
                  { style: vi.buttons },
                  s.a.createElement(v.a, { link: w, style: vi.button, type: 'primaryOutlined' }, fi),
                  s.a.createElement(
                    v.a,
                    {
                      link: 'https://help.twitter.com/forms/paid-features/superfollows',
                      style: vi.button,
                      type: 'primaryOutlined',
                    },
                    bi,
                  ),
                ),
              ),
            ),
          )
        },
        vi = x.a.create(function (e) {
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
        ki = void 0 !== St ? St : (St = t('MXCg')),
        Si = void 0 !== Ft ? Ft : (Ft = t('mEFY')),
        Fi = void 0 !== Et ? Et : (Et = t('d8Sa')),
        Ei = function (e) {
          var a,
            t,
            n,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = e.viewer,
            c = X()(ki, l),
            u = X()(Si, i),
            d = X()(Fi, o),
            p = null === (a = u.super_follow_creator_benefits) || void 0 === a ? void 0 : a.creator_intro,
            m = (
              null !==
                (t =
                  null == u || null === (n = u.super_follow_creator_benefits) || void 0 === n
                    ? void 0
                    : n.benefits_data) && void 0 !== t
                ? t
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
            s.a.createElement(
              F.d,
              null,
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/management/perks_intro' },
                s.a.createElement(Pl, { user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/management/perks_description' },
                s.a.createElement(hl, { user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/management/perks_confirm' },
                s.a.createElement(Mr, { user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { path: '/settings/superfollows/management' },
                s.a.createElement(_i, { priceOfferings: c, user: u, viewer: d }),
              ),
            )
          )
        },
        Ci = (t('5BYb'), d.a.b422cb62),
        xi = d.a.f08705e0,
        Ki = d.a.e2cd700f,
        Ti = d.a.fbfd7397,
        Li = d.a.c1df579e,
        Di = [
          {
            label: d.a.d8637c96,
            test: function (e) {
              var a,
                t = null !== (a = e.viewer.super_follows_onboarding_draft) && void 0 !== a ? a : {},
                n = t.creator_intro,
                r = t.description
              return !!n && !!r
            },
          },
          {
            label: d.a.b92892dc,
            test: function (e) {
              var a
              return !(null === (a = e.viewer.super_follows_onboarding_draft) || void 0 === a || !a.selected_price)
            },
          },
          {
            label: d.a.b123a502,
            test: function (e) {
              return 'Completed' === e.user.stripe_account_status
            },
          },
        ],
        Oi = void 0 !== Ct ? Ct : (Ct = t('wQp3')),
        Ii = void 0 !== xt ? xt : (xt = t('tfBr')),
        Pi = function (e) {
          var a = e.percentageComplete,
            t = e.user,
            n = e.viewer,
            r = X()(Oi, t),
            l = X()(Ii, n),
            i = Di.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: r, viewer: l }) }
            }),
            o = i.some(function (e) {
              return e.checked
            }),
            c = s.a.createElement(q, {
              label: Li,
              path: '/settings/superfollows/onboarding/perks_intro',
              size: 'small',
              type: 'primaryFilled',
            })
          return s.a.createElement(
            L,
            {
              leftControlShouldClose: !0,
              percentageComplete: a,
              rightControl: c,
              withCenteredLogo: !0,
              withInfoButton: !0,
            },
            s.a.createElement(
              kr,
              { style: Bi.interstitial },
              s.a.createElement(je, {
                headline: o ? Ki : Ci,
                illustration: o ? ze.Puzzle : ze.Cat,
                subtext: o ? Ti : xi,
              }),
            ),
            s.a.createElement(kr, { style: Bi.checks }, s.a.createElement(M, { items: i })),
          )
        },
        Bi = x.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        Ri = d.a.cda6bb6d,
        Vi = d.a.a15b98ec,
        Ai = function () {
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(kr, { style: zi.interstitial }, s.a.createElement(je, { headline: Ri, subtext: Vi })),
            s.a.createElement(Lr.a, null),
            s.a.createElement(
              kr,
              { style: zi.previewCallout },
              s.a.createElement(Tr, { path: '/settings/superfollows/perks_preview' }),
            ),
            s.a.createElement(br, { style: zi.preview }),
          )
        },
        zi = x.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Mi = d.a.cd5cae15,
        Ui = d.a.ad4a92a2,
        Hi = d.a.c1df579e,
        ji = function (e) {
          var a = e.percentageComplete,
            t = { label: Hi, path: '/settings/superfollows/onboarding/perks_confirm', type: 'primaryFilled' },
            n = s.a.createElement(q, t),
            r = s.a.createElement(q, g()({}, t, { size: 'small' }))
          return s.a.createElement(
            L,
            { percentageComplete: a, rightControl: r, subtitle: Ui, title: Mi },
            s.a.createElement(Ai, null),
            s.a.createElement(kr, { style: Wi.buttons }, n),
          )
        },
        Wi = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Ni = d.a.cd5cae15,
        qi = d.a.e18b7a71,
        Gi = d.a.c1df579e,
        Xi = void 0 !== Kt ? Kt : (Kt = t('Rthh')),
        Qi = void 0 !== Tt ? Tt : (Tt = t('aREQ')),
        Ji = function (e) {
          var a = e.percentageComplete,
            t = e.user,
            n = e.viewer,
            r = X()(Xi, t),
            l = X()(Qi, n),
            i = { label: Gi, path: '/settings/superfollows/onboarding/pricing', type: 'primaryFilled' },
            o = s.a.createElement(q, i),
            c = s.a.createElement(q, g()({}, i, { size: 'small' }))
          return s.a.createElement(
            L,
            { percentageComplete: a, rightControl: c, subtitle: qi, title: Ni },
            s.a.createElement(Br, { user: r, viewer: l }),
            s.a.createElement(kr, { style: Yi.buttons }, o),
          )
        },
        Yi = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Zi = d.a.cd5cae15,
        $i = d.a.e36287c6,
        eo = d.a.be76dc33,
        ao = d.a.c1df579e,
        to = void 0 !== Lt ? Lt : (Lt = t('6rkJ')),
        no = void 0 !== Dt ? Dt : (Dt = t('tJ4s')),
        ro = function (e) {
          var a,
            t,
            n = e.percentageComplete,
            r = e.user,
            l = e.viewer,
            i = s.a.useRef(),
            o = X()(no, l),
            c = X()(to, r),
            u = !!(null !==
              (a = null === (t = o.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.description) &&
            void 0 !== a
              ? a
              : ''),
            d = {
              disabled: !u,
              label: ao,
              path: '/settings/superfollows/onboarding/perks_badges',
              type: 'primaryFilled',
            },
            p = s.a.createElement(q, d),
            m = s.a.createElement(q, g()({}, d, { size: 'small' })),
            f = {
              children: eo,
              onClick: function () {
                var e
                null == i || null === (e = i.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            b = s.a.createElement(v.a, f),
            y = s.a.createElement(v.a, g()({}, f, { size: 'small' }))
          return s.a.createElement(
            L,
            { percentageComplete: n, rightControl: u ? m : y, subtitle: $i, title: Zi },
            s.a.createElement(cl, { ref: i, user: c, viewer: o }),
            s.a.createElement(kr, { style: lo.buttons }, u ? p : b),
          )
        },
        lo = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        io = d.a.cd5cae15,
        oo = d.a.c0348963,
        so = d.a.ef5406e3,
        co = d.a.c1df579e,
        uo = void 0 !== Ot ? Ot : (Ot = t('02qo')),
        po = void 0 !== It ? It : (It = t('TXsE')),
        mo = function (e) {
          var a,
            t,
            n = e.percentageComplete,
            r = e.user,
            l = e.viewer,
            i = s.a.useRef(),
            o = X()(uo, r),
            c = X()(po, l),
            u = !!(null !==
              (a = null === (t = c.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
            void 0 !== a
              ? a
              : ''),
            d = {
              disabled: !u,
              label: co,
              path: '/settings/superfollows/onboarding/perks_description',
              type: 'primaryFilled',
            },
            p = s.a.createElement(q, d),
            m = s.a.createElement(q, g()({}, d, { size: 'small' })),
            f = {
              children: so,
              onClick: function () {
                var e
                null == i || null === (e = i.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            b = s.a.createElement(v.a, f),
            y = s.a.createElement(v.a, g()({}, f, { size: 'small' }))
          return s.a.createElement(
            L,
            { percentageComplete: n, rightControl: u ? m : y, subtitle: oo, title: io },
            s.a.createElement(El, { ref: i, user: o, viewer: c }),
            s.a.createElement(kr, { style: go.buttons }, u ? p : b),
          )
        },
        go = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        fo = ['$refType'],
        bo = d.a.ea8a3d2d,
        yo = d.a.f77bb178,
        ho = d.a.cd75a5d4,
        wo = d.a.g9677c6d,
        _o = d.a.abd845fd,
        vo = void 0 !== Pt ? Pt : (Pt = t('IeZm')),
        ko = void 0 !== Bt ? Bt : (Bt = t('7ESn')),
        So = void 0 !== Rt ? Rt : (Rt = t('By/j')),
        Fo = function (e) {
          var a,
            t,
            n,
            r = e.percentageComplete,
            l = e.priceOfferings,
            i = e.viewer,
            o = X()(vo, l),
            c = (o.$refType, b()(o, fo)),
            u = X()(ko, i).super_follows_onboarding_draft,
            d = null !== (a = null == u ? void 0 : u.creator_intro) && void 0 !== a ? a : '',
            p = null !== (t = null == u ? void 0 : u.description) && void 0 !== t ? t : '',
            m = null !== (n = null == u ? void 0 : u.selected_price) && void 0 !== n ? n : c[0],
            g = Un()(So),
            f = W()(g, 2),
            y = f[0],
            h = f[1]
          return s.a.createElement(
            L,
            { percentageComplete: r, title: bo, withInfoButton: !0 },
            s.a.createElement(
              kr,
              { style: Eo.interstitial },
              s.a.createElement(je, { headline: yo({ price: c[m] }), illustration: ze.Pricing, subtext: ho }),
            ),
            s.a.createElement(
              kr,
              { style: Eo.buttons },
              s.a.createElement(q, {
                disabled: h,
                label: wo,
                onPress: function () {
                  return new Promise(function (e, a) {
                    y({
                      variables: {
                        creator_intro: d,
                        benefits_data: [{ benefit_type: 'ExclusiveContent', title: '', description: p }],
                        selected_price: m,
                      },
                      onCompleted: function (a, t) {
                        return e()
                      },
                      onError: a,
                    })
                  })
                },
                path: '/settings/superfollows/onboarding/stripe_setup',
                type: 'primaryFilled',
              }),
              s.a.createElement(q, {
                disabled: h,
                label: _o,
                path: '/settings/superfollows/onboarding/pricing',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        Eo = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        Co = (t('+KXO'), t('7xRU'), t('hznd')),
        xo = ['$refType'],
        Ko = d.a.ea8a3d2d,
        To = d.a.ic9124bf,
        Lo = d.a.g5923869,
        Do = {
          offer1: [d.a.f025ab39, d.a.c5602dfd],
          offer2: [d.a.ib075804, d.a.j8a72f06],
          offer3: [d.a.c246656e, d.a.a92ab16c],
        },
        Oo = d.a.c1df579e,
        Io = void 0 !== Vt ? Vt : (Vt = t('5jO1')),
        Po = void 0 !== At ? At : (At = t('mKqc')),
        Bo = function (e) {
          var a = e.percentageComplete,
            t = e.priceOfferings,
            n = e.viewer,
            r = X()(Io, t),
            l = (r.$refType, b()(r, xo)),
            i = X()(Po, n),
            o = i.super_follows_onboarding_draft,
            c = null == o ? void 0 : o.selected_price,
            u = Xa(i, 'selected_price'),
            p = s.a.createElement(
              d.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              s.a.createElement(V.b, { link: w }, d.a.c336b06a),
            ),
            m = Object.keys(l).map(function (e) {
              return { label: Lo({ price: l[e] }), value: e, helpText: Do[e].join(' ') }
            }),
            g = s.a.createElement(q, {
              disabled: !c,
              label: Oo,
              path: '/settings/superfollows/onboarding/pricing_confirm',
              size: 'small',
              type: 'primaryFilled',
            })
          return s.a.createElement(
            L,
            { percentageComplete: a, rightControl: g, title: Ko, withInfoButton: !0 },
            s.a.createElement(kr, { style: Ro.interstitial }, s.a.createElement(je, { headline: To, subtext: p })),
            s.a.createElement(
              kr,
              { style: Ro.prices },
              s.a.createElement(Co.a, {
                accessibilityLabel: To,
                name: 'selectedPrice',
                onChange: function (e, a) {
                  u(a)
                },
                options: m,
                value: c,
              }),
            ),
          )
        },
        Ro = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        Vo = d.a.f1cb36b8,
        Ao = d.a.e20f6661,
        zo = d.a.a9ee1ecc,
        Mo = d.a.b772cd65,
        Uo = function (e) {
          var a = e.percentageComplete
          return s.a.createElement(
            L,
            { leftControlShouldClose: !0, percentageComplete: a, title: Vo, withInfoButton: !0 },
            s.a.createElement(
              kr,
              { style: Ho.interstitial },
              s.a.createElement(je, { headline: Ao, illustration: ze.Thumbsup, subtext: zo }),
            ),
            s.a.createElement(
              kr,
              { style: Ho.buttons },
              s.a.createElement(q, { label: Mo, path: '/settings/monetization', type: 'primaryFilled' }),
            ),
          )
        },
        Ho = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        jo = d.a.e2cd700f,
        Wo = d.a.d6bfb60c,
        No = d.a.b9cbb370,
        qo = function () {
          return s.a.createElement(
            L,
            { withInfoButton: !0 },
            s.a.createElement(je, { headline: jo, illustration: ze.Puzzle, subtext: Wo }),
            s.a.createElement(q, { label: No, path: '/settings/superfollows/onboarding/stripe_setup' }),
          )
        },
        Go = t('8jkQ'),
        Xo = d.a.f1cb36b8,
        Qo = d.a.ja884230,
        Jo = d.a.af1b808d,
        Yo = d.a.fe339750,
        Zo = d.a.j912510a,
        $o = void 0 !== zt ? zt : (zt = t('xHLM')),
        es = function (e) {
          var a = e.percentageComplete,
            t = Un()($o),
            n = W()(t, 2),
            r = n[0],
            l = n[1],
            i = function () {
              r({
                variables: {},
                onCompleted: function (e, a) {
                  var t = e.stripe_account_create_onboarding_url
                  t && Go.b.navigateTo(t)
                },
              })
            }
          return s.a.createElement(
            L,
            { percentageComplete: a, title: Xo, withInfoButton: !0 },
            s.a.createElement(
              kr,
              { style: as.interstitial },
              s.a.createElement(je, { headline: Qo, illustration: ze.CoinStairs, subtext: Jo }),
            ),
            s.a.createElement(
              kr,
              { style: as.buttons },
              s.a.createElement(v.a, { disabled: l, onPress: i, type: 'primaryFilled' }, Yo),
              s.a.createElement(v.a, { disabled: l, onPress: i, type: 'primaryOutlined' }, Zo),
            ),
          )
        },
        as = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        ts = void 0 !== Mt ? Mt : (Mt = t('UNVS')),
        ns = void 0 !== Ut ? Ut : (Ut = t('6byF')),
        rs = void 0 !== Ht ? Ht : (Ht = t('dNhZ')),
        ls = function (e) {
          return e / 8
        },
        is = function (e) {
          var a,
            t,
            n,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = e.viewer,
            c = X()(ts, l),
            u = X()(ns, i),
            d = X()(rs, o),
            p = null === (a = u.super_follow_creator_benefits) || void 0 === a ? void 0 : a.creator_intro,
            m = (
              null !==
                (t =
                  null == u || null === (n = u.super_follow_creator_benefits) || void 0 === n
                    ? void 0
                    : n.benefits_data) && void 0 !== t
                ? t
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
            s.a.createElement(
              F.d,
              null,
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_intro' },
                s.a.createElement(mo, { percentageComplete: ls(1), user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_description' },
                s.a.createElement(ro, { percentageComplete: ls(2), user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_badges' },
                s.a.createElement(ji, { percentageComplete: ls(3) }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_confirm' },
                s.a.createElement(Ji, { percentageComplete: ls(4), user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/pricing' },
                s.a.createElement(Bo, { percentageComplete: ls(5), priceOfferings: c, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/pricing_confirm' },
                s.a.createElement(Fo, { percentageComplete: ls(6), priceOfferings: c, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_setup' },
                s.a.createElement(es, { percentageComplete: ls(7) }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_incomplete' },
                s.a.createElement(qo, null),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_completed' },
                s.a.createElement(Uo, { percentageComplete: ls(8) }),
              ),
              s.a.createElement(
                F.b,
                { path: '/settings/superfollows/onboarding' },
                s.a.createElement(Pi, { percentageComplete: ls(0), user: u, viewer: d }),
              ),
            )
          )
        },
        os = d.a.ebfb897c,
        ss = d.a.dc4feb19,
        cs = d.a.c183d271,
        us = d.a.ic130fd5,
        ds = d.a.dd913e24,
        ps = d.a.h580543e,
        ms = function () {
          return s.a.createElement(
            L,
            { title: os },
            s.a.createElement(kr, { style: gs.interstitial }, s.a.createElement(je, { headline: ss, subtext: cs })),
            s.a.createElement(
              kr,
              { style: gs.exampleDescriptions },
              s.a.createElement(Lr.a, null),
              s.a.createElement(qr, { value: us }),
              s.a.createElement(Lr.a, null),
              s.a.createElement(qr, { value: ds }),
              s.a.createElement(Lr.a, null),
              s.a.createElement(qr, { value: ps }),
            ),
          )
        },
        gs = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        fs = t('JWc1'),
        bs = d.a.ebfb897c,
        ys = d.a.dc4feb19,
        hs = d.a.a0bb2076,
        ws = d.a.ace46d40,
        _s = d.a.h2c4511f,
        vs = d.a.hbe4f99e,
        ks = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        Ss = function () {
          return s.a.createElement(
            L,
            { title: bs },
            s.a.createElement(kr, { style: ks.interstitial }, s.a.createElement(je, { headline: ys, subtext: hs })),
            s.a.createElement(
              kr,
              { style: ks.exampleIntros },
              s.a.createElement(fs.a, { value: ws }),
              s.a.createElement(fs.a, { value: _s }),
              s.a.createElement(fs.a, { value: vs }),
            ),
          )
        },
        Fs = t('VTDR'),
        Es = t('a2Fh'),
        Cs = d.a.hf6f2913,
        xs = d.a.fb278c81,
        Ks = d.a.e6b60e94,
        Ts = x.a.create(function (e) {
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
        Ls = function () {
          return s.a.createElement(
            L,
            { title: Cs },
            s.a.createElement(kr, { style: Ts.interstitial }, s.a.createElement(je, { headline: xs, subtext: Ks })),
            s.a.createElement(
              br,
              { style: Ts.preview },
              s.a.createElement(
                Fs.a,
                null,
                s.a.createElement(Es.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                s.a.createElement(Es.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                s.a.createElement(Es.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: Ts.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        Ds = d.a.aa7e35ed,
        Os = d.a.f67e69bf,
        Is = function () {
          return s.a.createElement(
            L,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            s.a.createElement(
              kr,
              { style: Ps.interstitial },
              s.a.createElement(je, { headline: Ds, illustration: ze.Uturn, subtext: Os }),
            ),
          )
        },
        Ps = x.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Bs = d.a.d3d6c52c,
        Rs = d.a.c53e9129,
        Vs = function () {
          return s.a.createElement(
            L,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            s.a.createElement(
              kr,
              { style: As.interstitial },
              s.a.createElement(je, { headline: Bs, illustration: ze.PaperAirplane, subtext: Rs }),
            ),
          )
        },
        As = x.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        zs = d.a.j274e6aa,
        Ms = d.a.d7f65127,
        Us = function () {
          return s.a.createElement(
            L,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            s.a.createElement(
              kr,
              { style: Hs.interstitial },
              s.a.createElement(je, { headline: zs, illustration: ze.Bench, subtext: Ms }),
            ),
          )
        },
        Hs = x.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        js = void 0 !== jt ? jt : (jt = t('nEN5')),
        Ws = void 0 !== Wt ? Wt : (Wt = t('toKZ')),
        Ns = void 0 !== Nt ? Nt : (Nt = t('ucRr')),
        qs = function (e) {
          var a = e.priceOfferings,
            t = e.user,
            n = e.viewer,
            r = X()(js, a),
            l = X()(Ws, t),
            i = X()(Ns, n),
            o = (function (e) {
              var a = e.isActiveCreator,
                t = e.stripeAccountStatus,
                n = e.superFollowsApplicationStatus
              if (a) return '/settings/superfollows/management'
              switch (n) {
                case 'Submitted':
                  return '/settings/superfollows/submitted'
                case 'Waitlisted':
                  return '/settings/superfollows/waitlisted'
                case 'Rejected':
                  return '/settings/superfollows/rejected'
                case 'Approved':
                  switch (t) {
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
          return s.a.createElement(
            F.d,
            null,
            s.a.createElement(
              F.b,
              { path: '/settings/superfollows/application' },
              s.a.createElement(pr, { user: l, viewer: i }),
            ),
            s.a.createElement(
              F.b,
              { path: '/settings/superfollows/onboarding' },
              s.a.createElement(is, { priceOfferings: r, user: l, viewer: i }),
            ),
            s.a.createElement(
              F.b,
              { path: '/settings/superfollows/management' },
              s.a.createElement(Ei, { priceOfferings: r, user: l, viewer: i }),
            ),
            s.a.createElement(
              F.b,
              { exact: !0, path: '/settings/superfollows/submitted' },
              s.a.createElement(Vs, null),
            ),
            s.a.createElement(
              F.b,
              { exact: !0, path: '/settings/superfollows/waitlisted' },
              s.a.createElement(Us, null),
            ),
            s.a.createElement(F.b, { exact: !0, path: '/settings/superfollows/rejected' }, s.a.createElement(Is, null)),
            s.a.createElement(
              F.b,
              { exact: !0, path: '/settings/superfollows/perks_intro_examples' },
              s.a.createElement(Ss, null),
            ),
            s.a.createElement(
              F.b,
              { exact: !0, path: '/settings/superfollows/perks_description_examples' },
              s.a.createElement(ms, null),
            ),
            s.a.createElement(
              F.b,
              { exact: !0, path: '/settings/superfollows/perks_preview' },
              s.a.createElement(Ls, null),
            ),
            s.a.createElement(F.b, { exact: !0, path: '/settings/superfollows' }, s.a.createElement(O.a, { to: o })),
          )
        },
        Gs = t('n0Rl'),
        Xs = t('q9Zt'),
        Qs = d.a.hae1c933,
        Js = void 0 !== qt ? qt : (qt = t('G8I5')),
        Ys = Object(Gs.b)(Js, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        Zs = x.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      a.default = function () {
        return s.a.createElement(Ys, {
          render: function (e) {
            var a,
              t,
              n = e.data,
              r = (e.error, e.fetchStatus),
              l = e.retry,
              i = null == n ? void 0 : n.super_follows_price_offerings,
              o =
                null == n || null === (a = n.viewer) || void 0 === a || null === (t = a.user_results) || void 0 === t
                  ? void 0
                  : t.result,
              u = null == n ? void 0 : n.viewer
            return s.a.createElement(c.a, {
              fetchStatus: Object(p.b)(r, null != i && 'User' === (null == o ? void 0 : o.__typename) && null != u),
              onRequestRetry: l,
              render: function () {
                return null == i || 'User' !== (null == o ? void 0 : o.__typename) || null == u
                  ? null
                  : s.a.createElement(qs, { priceOfferings: i, user: o, viewer: u })
              },
              renderFailure: function () {
                return s.a.createElement(L, null, s.a.createElement(Xs.a, { onRetry: l, style: Zs.error, title: Qs }))
              },
              retryable: !1,
            })
          },
          variables: {},
        })
      }
    },
    nEN5: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    'o/nB': function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    oNwH: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
        ],
        type: 'User',
        abstractKey: null,
        hash: '2d06deed679112f45baf7c4342ba484e',
      }
      a.default = n
    },
    oyMe: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementPerksIntroScreen_user',
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksIntroCore_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '0ae946dbbd73b1014df82d9f8b459ee9',
      }
      a.default = n
    },
    'p+r5': function (e, a, t) {
      'use strict'
      t.d(a, 'a', function () {
        return j
      })
      t('yiKp')
      var n = t('97Jx'),
        r = t.n(n),
        l = t('m3Bd'),
        i = t.n(l),
        o = t('VrFO'),
        s = t.n(o),
        c = t('Y9Ll'),
        u = t.n(c),
        d = t('1Pcy'),
        p = t.n(d),
        m = t('5Yy7'),
        g = t.n(m),
        f = t('2VqO'),
        b = t.n(f),
        y = t('KEM+'),
        h = t.n(y),
        w = (t('2G9S'), t('ERkP')),
        _ = t.n(w),
        v = t('38/B'),
        k = t('t62R'),
        S = t('/yvb'),
        F = t('piX5'),
        E = t('3XMw'),
        C = t.n(E),
        x = t('tI3i'),
        K = t.n(x),
        T = t('oQhu'),
        L = t('rHpw'),
        D = t('aITJ'),
        O = t('MWbm'),
        I = t('n5fo'),
        P = t('5emT'),
        B = t('Oib4'),
        R = t('WtWS'),
        V = t('ioan'),
        A = [
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
        z = function (e) {
          return e.length
        },
        M = function (e) {
          var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z
          return a(e)
        },
        U = C.a.de540c32,
        H = C.a.b4abfdb3,
        j = (function (e) {
          g()(t, e)
          var a = b()(t)
          function t(e) {
            var n
            s()(this, t),
              (n = a.call(this, e)),
              h()(p()(n), '_blurOnBackspaceKeyUpForKaiOS', !1),
              h()(p()(n), '_isLabelLarge', function () {
                var e = n.state,
                  a = e.actualCount,
                  t = e.isFocused
                return !a && !t
              }),
              h()(
                p()(n),
                '_getTextInputStyle',
                Object(T.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              h()(p()(n), '_getTextInputType', function () {
                var e = n.props,
                  a = e.showPasswordVisibilityIcon,
                  t = e.type,
                  r = n.state.isPasswordRevealed
                return 'password' === t && a ? (r ? 'text' : 'password') : t
              }),
              h()(p()(n), '_calculateLength', function (e) {
                return M(e, n.props.calculateLength)
              }),
              h()(p()(n), '_shouldRenderDisplayCount', function () {
                var e = n.state.isFocused,
                  a = n._isFormInvalid()
                return Boolean((e || a) && n._getMaxDisplayCount())
              }),
              h()(p()(n), '_isInvalidNumber', function () {
                var e,
                  a,
                  t,
                  r,
                  l,
                  i = n.props.type,
                  o =
                    null === (e = n._textInput) || void 0 === e || null === (a = e.textInputNode) || void 0 === a
                      ? void 0
                      : a.value,
                  s =
                    null === (t = n._textInput) ||
                    void 0 === t ||
                    null === (r = t.textInputNode) ||
                    void 0 === r ||
                    null === (l = r.validity) ||
                    void 0 === l
                      ? void 0
                      : l.badInput
                return 'number' === i && '' === o && !0 === s
              }),
              h()(p()(n), '_getActualCount', function (e) {
                var a = e.length
                return n._isInvalidNumber() && (a = 1), a
              }),
              h()(p()(n), '_handleBlur', function (e) {
                var a = n.props.onBlur,
                  t = e.currentTarget.value,
                  r = n._calculateLength(t),
                  l = n._getActualCount(t)
                n.setState({ isFocused: !1, displayCount: r, actualCount: l }), a && a(e)
              }),
              h()(p()(n), '_handleChange', function (e) {
                var a = n.props.onChange,
                  t = n.state.previousValue,
                  r = e.currentTarget.value,
                  l = n._calculateLength(r),
                  i = n._getActualCount(r),
                  o = n._getAdjustedMaxLength()
                void 0 !== o && r.length > o && t.length < r.length
                  ? (e.currentTarget.value = t)
                  : (n.setState({
                      isFocused: !0,
                      displayCount: l,
                      actualCount: i,
                      previousValue: e.currentTarget.value,
                    }),
                    a && a(e))
              }),
              h()(p()(n), '_handleFocus', function (e) {
                var a = n.props.onFocus
                n.setState({ isFocused: !0 }), a && a(e)
              }),
              h()(p()(n), '_handleKeyPress', function (e) {
                var a = n.props,
                  t = a.multiline,
                  r = a.onKeyPress,
                  l = a.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || t || !l || (e.preventDefault(), l(e))
              }),
              h()(p()(n), '_handleKeyDown', function (e) {
                var a = n.props.onKeyDown,
                  t = 0 === n.state.displayCount
                D.b.isKaiOS() && 'Backspace' === e.key && t ? (n._blurOnBackspaceKeyUpForKaiOS = t) : a && a(e)
              }),
              h()(p()(n), '_handleKeyUp', function (e) {
                var a = n.props.onKeyUp
                D.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  n._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), n.blur()),
                  a && a(e)
              }),
              h()(p()(n), '_handlePasswordVisibilityClick', function (e) {
                n.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              h()(p()(n), '_setTextInputRef', function (e) {
                n._textInput = e
              }),
              h()(p()(n), '_checkComponentPropsUsageCorrectness', function (e) {
                var a = e.defaultValue,
                  t = e.maxLength,
                  n = e.onChange,
                  r = e.validLength,
                  l = !!n,
                  i = 'string' == typeof e.value,
                  o = 'string' == typeof a
                K()(
                  !(!o && i && !l),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  K()(!(t && r && r > t), 'Max length should be equal or greater than valid length.'),
                  K()(
                    !((void 0 !== t && t <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              h()(p()(n), '_exceedsValidLength', function (e) {
                var a = n._getMaxDisplayCount()
                return !!a && e > a
              }),
              h()(p()(n), '_getMaxDisplayCount', function () {
                return n.props.validLength || n.props.maxLength
              }),
              h()(p()(n), '_getAdjustedMaxLength', function () {
                var e = n.props.maxLength,
                  a = n.getValue(),
                  t = n._calculateLength(a)
                return e ? e + a.length - t : void 0
              }),
              n._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              l = e.value || r || ''
            return (
              (n.state = {
                displayCount: n._calculateLength(l),
                actualCount: z(l),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: l,
              }),
              n
            )
          }
          return (
            u()(
              t,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var a = this.props,
                      t = a.maxLength,
                      n = a.onChange,
                      r = a.validLength,
                      l = a.value,
                      i = e.maxLength,
                      o = e.onChange,
                      s = e.validLength,
                      c = e.value
                    ;(s === r && t === i && !!n === !!o && ('string' == typeof l) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      a = e.accessibilityLabel,
                      t = e.editable,
                      n = e.errorText,
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
                            !t && F.a.disabled,
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
                          o && n ? this._renderErrorText() : null,
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
                      t = this._isFormInvalid() ? 'red500' : a,
                      n = this._isLabelLarge()
                    return _.a.createElement(
                      k.b,
                      {
                        color: n ? 'gray700' : t,
                        numberOfLines: 1,
                        size: n ? 'headline1' : 'subtext2',
                        style: [
                          N.textInputHeaderItem,
                          n && N.placeholderText,
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
                      t = (e.accessibilityLabel, e.calculateLength, e.editable),
                      n =
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
                      l = (e.style, e.type, e.validLength, i()(e, A))
                    return _.a.createElement(
                      O.a,
                      { style: W.container },
                      a && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        k.b,
                        { size: 'headline1', style: W.wrapper },
                        _.a.createElement(
                          V.a,
                          r()({}, l, {
                            editable: t,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(t),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      n && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      a = e.showPasswordVisibilityIcon,
                      t = e.type,
                      n = this.state.isPasswordRevealed
                    return 'password' === t && a
                      ? _.a.createElement(
                          O.a,
                          { style: N.passwordVisibilityIconContainer },
                          _.a.createElement(S.a, {
                            accessibilityLabel: n ? H : U,
                            focusable: !0,
                            hoverLabel: { label: n ? H : U },
                            icon: n ? _.a.createElement(I.a, null) : _.a.createElement(P.a, null),
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
                        k.b,
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
                        k.b,
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
                      t = this._exceedsValidLength(e),
                      n = a && C.a.ia24dc8c(a),
                      r = C.a.ia24dc8c(e)
                    return _.a.createElement(
                      O.a,
                      { accessibilityLiveRegion: 'polite', style: [N.textInputHeaderItem, N.displayCount] },
                      _.a.createElement(
                        k.b,
                        { color: t ? 'red500' : 'gray700', size: 'subtext2' },
                        n ? ''.concat(r, ' / ').concat(n) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      a = this.state.isFocused,
                      t = [N.icon, a && N.focusedIcon]
                    return e && _.a.createElement(e, { style: t })
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
                    var t = e.calculateLength,
                      n = e.value,
                      r = 'string' == typeof n ? M(n, t) : 0
                    return 'string' == typeof n && r !== a.displayCount
                      ? { displayCount: r, actualCount: n.length }
                      : null
                  },
                },
              ],
            ),
            t
          )
        })(_.a.Component)
      h()(j, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (j.propTypes = {})
      var W = L.a.create(function (e) {
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
        N = L.a.create(function (e) {
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
    'pLb/': function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    piX5: function (e, a, t) {
      'use strict'
      t('uFXj'), t('2G9S')
      var n = t('rHpw').a.create(function (e) {
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
      a.a = n
    },
    qOMr: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsManagementSummaryScreen_viewer',
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
        hash: 'fb25c5185caf6f59e863f1c2f8071cf8',
      }
      a.default = n
    },
    tJ4s: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    tfBr: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    toKZ: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    ucRr: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    wQp3: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'SuperFollowsOnboardingGetStartedScreen_user',
        selections: [{ alias: null, args: null, kind: 'ScalarField', name: 'stripe_account_status', storageKey: null }],
        type: 'User',
        abstractKey: null,
        hash: '89d53e7f51d77e01d95fe5e756509ce9',
      }
      a.default = n
    },
    xHLM: function (e, a, t) {
      'use strict'
      t.r(a)
      var n,
        r = {
          fragment: {
            argumentDefinitions: [],
            kind: 'Fragment',
            metadata: null,
            name: 'SuperFollowsOnboardingStripeSetupScreenMutation',
            selections: (n = [
              {
                alias: null,
                args: [{ kind: 'Literal', name: 's', value: 22 }],
                kind: 'ScalarField',
                name: 'stripe_account_create_onboarding_url',
                storageKey: 'stripe_account_create_onboarding_url(s:22)',
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
            selections: n,
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
    'xd+q': function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    xhT1: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    xnrs: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
      a.default = n
    },
    yjSu: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = {
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
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '6b3cdea724d55edbc985af2e07c1f18b',
      }
      a.default = n
    },
  },
])
//# sourceMappingURL=WIPED
