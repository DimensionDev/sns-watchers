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
            id: 'sNgfsqO2Wb-ukn3Qz0h8tg',
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksIntroScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksDescriptionScreen_viewer' },
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsManagementPerksConfirmScreen_viewer' },
        ],
        type: 'Viewer',
        abstractKey: null,
        hash: '22d80514bb3ec9df0e08f5886505ace5',
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
          return Xs
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
        qt = t('p+r5'),
        Gt = d.a.f7997b16,
        Xt = d.a.fc00ab5b,
        Qt = d.a.c249167f,
        Jt = d.a.b772cd65,
        Yt = void 0 !== Qa ? Qa : (Qa = t('xhT1')),
        Zt = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(Yt, n),
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
            { title: Gt },
            s.a.createElement(qt.a, {
              helperText: Qt,
              label: Xt,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            s.a.createElement(v.a, null, Jt),
          )
        },
        $t = t('fyvP'),
        en = t('csss'),
        an = function (e) {
          var a = e.description,
            t = e.disabled,
            n = e.history,
            r = e.label,
            l = e.path,
            i = Object(F.f)()
          return s.a.createElement(en.a, {
            description: a,
            disabled: t,
            label: r,
            onPress: function () {
              ;(null != n ? n : i).push(l)
            },
          })
        },
        tn = d.a.f7997b16,
        nn = d.a.c144fa52,
        rn = [
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
        ln = d.a.c365dcc5,
        on = d.a.bd44a8a8,
        sn = void 0 !== Ja ? Ja : (Ja = t('JB6R')),
        cn = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(sn, n),
            l =
              null !==
                (a = null === (t = r.super_follows_application_draft) || void 0 === t ? void 0 : t.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Ga(r, 'content_category'),
            o = rn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            L,
            { title: tn },
            s.a.createElement($t.a, {
              description: nn,
              label: nn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            s.a.createElement(an, {
              helpText: on,
              label: ln,
              path: '/settings/superfollows/application/submit_categories_other',
            }),
          )
        },
        un = d.a.d94a9a17,
        dn = d.a.a35394b3,
        pn = [
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
        mn = void 0 !== Ya ? Ya : (Ya = t('H1we')),
        gn = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(mn, n),
            l =
              null !== (a = null === (t = r.super_follows_application_draft) || void 0 === t ? void 0 : t.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Ga(r, 'ethnicity'),
            o = pn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            L,
            { title: un },
            s.a.createElement($t.a, {
              description: dn,
              label: dn,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        fn = d.a.a8d0108d,
        bn = d.a.a35394b3,
        yn = [
          d.a.de32365f,
          d.a.b6ab31bd,
          d.a.ffc23188,
          d.a.h1cc7091,
          d.a.hca27829,
          d.a.b3af7344,
          d.a.he3f1435,
          d.a.c3c16abb,
        ],
        hn = void 0 !== Za ? Za : (Za = t('VG5i')),
        wn = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(hn, n),
            l =
              null !== (a = null === (t = r.super_follows_application_draft) || void 0 === t ? void 0 : t.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Ga(r, 'gender'),
            o = yn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            L,
            { title: fn },
            s.a.createElement($t.a, {
              description: bn,
              label: bn,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        _n = d.a.da8ea7da,
        vn = d.a.d7081f91,
        kn = d.a.j349548f,
        Sn = d.a.b772cd65,
        Fn = void 0 !== $a ? $a : ($a = t('+OUG')),
        En = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(Fn, n),
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
            { title: _n },
            s.a.createElement(qt.a, {
              helperText: kn,
              label: vn,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            s.a.createElement(v.a, null, Sn),
          )
        },
        Cn = d.a.da8ea7da,
        xn = d.a.d4062c9a,
        Kn = [d.a.a3021317, d.a.eb4a600d, d.a.d4d74bb3, d.a.fc738909, d.a.d8552c1a, d.a.ca07aa46],
        Tn = d.a.c365dcc5,
        Ln = d.a.bd44a8a8,
        Dn = void 0 !== et ? et : (et = t('xnrs')),
        On = function (e) {
          var a,
            t,
            n = e.viewer,
            r = X()(Dn, n),
            l =
              null !==
                (a =
                  null === (t = r.super_follows_application_draft) || void 0 === t
                    ? void 0
                    : t.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Ga(r, 'content_creation_platform'),
            o = Kn.map(function (e) {
              return { label: e, value: e }
            })
          return s.a.createElement(
            L,
            { title: Cn },
            s.a.createElement($t.a, {
              description: xn,
              label: xn,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            s.a.createElement(an, {
              helpText: Ln,
              label: Tn,
              path: '/settings/superfollows/application/submit_platforms_other',
            }),
          )
        },
        In = (t('tVqn'), t('uFXj'), d.a.f4f4dd6f),
        Pn = d.a.f448cbcb,
        Bn = function (e) {
          var a = e.title,
            t = e.type,
            n = 'required' === t ? 'red500' : 'optional' === t ? 'gray700' : void 0,
            r = 'required' === t ? In : 'optional' === t ? Pn : void 0
          return s.a.createElement(
            E.a,
            { style: Rn.container },
            s.a.createElement(V.b, { size: 'headline1', weight: 'heavy' }, a),
            r && s.a.createElement(V.b, { color: n, size: 'subtext2', style: Rn.subtext }, r),
          )
        },
        Rn = x.a.create(function (e) {
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
        Vn = t('jV+4'),
        An = t('Xrkv'),
        zn = t('9SqB'),
        Mn = t.n(zn),
        Un = d.a.e873f0ae,
        Hn = d.a.f095a24a,
        jn = d.a.i5f7b6b8,
        Wn = d.a.d1f6d336,
        Nn = d.a.f7997b16,
        qn = d.a.c144fa52,
        Gn = d.a.f1bf337d,
        Xn = d.a.da8ea7da,
        Qn = d.a.d4062c9a,
        Jn = d.a.e963d587,
        Yn = d.a.ede0ac3e,
        Zn = d.a.ffb6cb88,
        $n = d.a.b2159e8e,
        er = d.a.feacb49d,
        ar = d.a.je17c987,
        tr = d.a.d94a9a17,
        nr = d.a.a8d0108d,
        rr = d.a.gfc80842,
        lr = void 0 !== at ? at : (at = t('pLb/')),
        ir = void 0 !== tt ? tt : (tt = t('3qCL')),
        or = void 0 !== nt ? nt : (nt = t('AyUU')),
        sr = function (e) {
          var a,
            t,
            n,
            r,
            l,
            i,
            o,
            c = e.user,
            u = e.viewer,
            d = X()(lr, c),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = X()(ir, u),
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
            k = Mn()(or),
            S = W()(k, 2),
            F = S[0],
            E = S[1]
          return s.a.createElement(
            L,
            { withInfoButton: !0 },
            s.a.createElement(je, { headline: Un, illustration: ze.Clipboard, subtext: Hn }),
            s.a.createElement(Bn, { title: jn }),
            s.a.createElement(V.b, null, Wn),
            p && s.a.createElement(Vn.a, { screenName: p }),
            s.a.createElement(Bn, { title: Nn, type: 'required' }),
            s.a.createElement(V.b, { color: 'gray700' }, qn),
            s.a.createElement(an, {
              description: Object(An.a)(f, !0),
              label: Gn,
              path: '/settings/superfollows/application/submit_categories',
            }),
            s.a.createElement(Bn, { title: Xn, type: 'required' }),
            s.a.createElement(V.b, { color: 'gray700' }, Qn),
            s.a.createElement(an, {
              description: Object(An.a)(b, !0),
              label: Jn,
              path: '/settings/superfollows/application/submit_platforms',
            }),
            s.a.createElement(Bn, { title: Yn, type: 'required' }),
            s.a.createElement(qt.a, {
              helperText: $n,
              label: Zn,
              name: 'plannedUsage',
              onChange: function (e) {
                v(e.currentTarget.value)
              },
              value: y,
            }),
            s.a.createElement(Bn, { title: er, type: 'optional' }),
            s.a.createElement(V.b, { color: 'gray700' }, ar),
            s.a.createElement(an, {
              description: Object(An.a)(h, !0),
              label: tr,
              path: '/settings/superfollows/application/submit_ethnicities',
            }),
            s.a.createElement(an, {
              description: Object(An.a)(w, !0),
              label: nr,
              path: '/settings/superfollows/application/submit_genders',
            }),
            s.a.createElement(H, null),
            s.a.createElement(q, {
              disabled: !_ || E,
              label: rr,
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
        cr = void 0 !== rt ? rt : (rt = t('o/nB')),
        ur = void 0 !== lt ? lt : (lt = t('lZLw')),
        dr = function (e) {
          var a = e.user,
            t = e.viewer,
            n = X()(cr, a),
            r = X()(ur, t)
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
                s.a.createElement(sr, { user: n, viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_categories' },
                s.a.createElement(cn, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_categories_other' },
                s.a.createElement(Zt, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_platforms' },
                s.a.createElement(On, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_platforms_other' },
                s.a.createElement(En, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_ethnicities' },
                s.a.createElement(gn, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/application/submit_genders' },
                s.a.createElement(wn, { viewer: r }),
              ),
              s.a.createElement(
                F.b,
                { path: '/settings/superfollows/application' },
                s.a.createElement(Ca, { user: n }),
              ),
            )
          )
        },
        pr = (t('hBpG'), t('ho0z'), t('cHvH')),
        mr = function (e) {
          var a = e.children,
            t = e.style
          return s.a.createElement(
            E.a,
            { style: [br.frame, t] },
            s.a.createElement(
              E.a,
              { style: br.browserBar },
              s.a.createElement(
                E.a,
                { style: br.browserBarButtons },
                s.a.createElement(E.a, { style: br.browserBarButton }),
                s.a.createElement(E.a, { style: br.browserBarButton }),
                s.a.createElement(E.a, { style: br.browserBarButton }),
              ),
              s.a.createElement(
                E.a,
                { style: br.browserBarUrlInputWrapper },
                s.a.createElement(E.a, { style: br.browserBarUrlInput }),
              ),
            ),
            a,
          )
        },
        gr = function (e) {
          var a = e.children,
            t = e.style
          return s.a.createElement(E.a, { style: t }, s.a.createElement(E.a, { style: br.content }, a))
        },
        fr = function (e) {
          var a = e.children,
            t = e.style
          return Object(pr.b)().windowWidth > x.a.theme.breakpoints.medium
            ? s.a.createElement(mr, { style: t }, s.a.createElement(gr, { style: br.contentWide }, a))
            : s.a.createElement(gr, { style: t }, a)
        },
        br = x.a.create(function (e) {
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
        yr = t('MAc7'),
        hr = ['style'],
        wr = function (e, a) {
          var t = e.style,
            n = b()(e, hr)
          return s.a.createElement(fr, { style: t }, s.a.createElement(yr.a, g()({}, n, { ref: a })))
        },
        _r = s.a.forwardRef(wr),
        vr = function (e) {
          var a = e.children,
            t = e.style,
            n = Object(pr.b)().windowWidth > x.a.theme.breakpoints.medium ? kr.marginWide : kr.marginNarrow
          return s.a.createElement(E.a, { style: [t, n] }, a)
        },
        kr = x.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space80 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        Sr = ['label', 'path'],
        Fr = function (e) {
          var a = e.label,
            t = e.path,
            n = b()(e, Sr),
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
        Er = d.a.hf6f2913,
        Cr = d.a.i859a9d3,
        xr = x.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        Kr = function (e) {
          var a = e.path,
            t = e.style
          return s.a.createElement(
            E.a,
            { style: [xr.root, t] },
            s.a.createElement(V.b, { size: 'headline2', weight: 'heavy' }, Er),
            s.a.createElement(Fr, { label: Cr, path: a }),
          )
        },
        Tr = t('0yYu'),
        Lr = d.a.iba08a94,
        Dr = d.a.bcb1e4e6,
        Or = void 0 !== it ? it : (it = t('UFp0')),
        Ir = void 0 !== ot ? ot : (ot = t('NmgE')),
        Pr = function (e) {
          var a,
            t,
            n = e.user,
            r = e.viewer,
            l = X()(Or, n),
            i = X()(Ir, r),
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
              s.a.createElement(vr, { style: Br.interstitial }, s.a.createElement(je, { headline: Lr, subtext: Dr })),
              s.a.createElement(Tr.a, null),
              s.a.createElement(
                vr,
                { style: Br.previewCallout },
                s.a.createElement(Kr, { path: '/settings/superfollows/perks_preview' }),
              ),
              s.a.createElement(_r, { imageUrl: u, name: c, style: Br.preview, value: d }),
            )
          )
        },
        Br = x.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Rr = d.a.hf6f2913,
        Vr = void 0 !== st ? st : (st = t('MvEh')),
        Ar = void 0 !== ct ? ct : (ct = t('U5ka')),
        zr = function (e) {
          var a = e.user,
            t = e.viewer,
            n = X()(Vr, a),
            r = X()(Ar, t)
          return s.a.createElement(L, { title: Rr, withInfoButton: !0 }, s.a.createElement(Pr, { user: n, viewer: r }))
        },
        Mr = t('lD8l'),
        Ur = (t('kH1Z'), t('6U7i'), t('9VLy')),
        Hr = t('6OUF'),
        jr = d.a.a329ce87,
        Wr = function (e, a) {
          var t = e.imageUrl,
            n = e.onChange,
            r = e.screenName,
            l = e.style,
            i = e.value
          return s.a.createElement(
            E.a,
            { style: [qr.root, l] },
            n
              ? s.a.createElement(Hr.a, {
                  inputStyle: qr.descriptionInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxLength: 140,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'description',
                  numberOfLines: 1,
                  onChange: n,
                  placeholder: jr,
                  ref: a,
                  style: qr.description,
                  value: i,
                })
              : s.a.createElement(V.b, { color: 'gray700', style: qr.description }, i),
            s.a.createElement(Ur.a, { imageUrl: t, screenName: r, style: [qr.signature, !i && qr.visibilityHidden] }),
          )
        },
        Nr = s.a.forwardRef(Wr),
        qr = x.a.create(function (e) {
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
        Gr = ['style'],
        Xr = d.a.cbc8ce27,
        Qr = function (e, a) {
          var t = e.style,
            n = b()(e, Gr),
            r = Object(pr.b)().windowWidth > x.a.theme.breakpoints.medium
          return s.a.createElement(
            E.a,
            { style: [Yr.root, r && Yr.rootWide, t] },
            s.a.createElement(
              V.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Xr,
            ),
            s.a.createElement(Nr, g()({}, n, { ref: a, style: Yr.description })),
          )
        },
        Jr = s.a.forwardRef(Qr),
        Yr = x.a.create(function (e) {
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
        Zr = ['style'],
        $r = function (e, a) {
          var t = e.style,
            n = b()(e, Zr)
          return s.a.createElement(
            fr,
            { style: t },
            s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(Jr, g()({}, n, { ref: a })),
              s.a.createElement(Mr.a, { style: al.exclusiveDemoBonusContent }),
            ),
          )
        },
        el = s.a.forwardRef($r),
        al = x.a.create(function (e) {
          return {
            exclusiveDemoBonusContent: {
              alignSelf: 'center',
              marginBottom: e.spaces.space32,
              marginTop: e.spaces.space16,
            },
          }
        }),
        tl = d.a.gf32cca1,
        nl = d.a.j8ba99b3,
        rl = d.a.j679dcda,
        ll = void 0 !== ut ? ut : (ut = t('yjSu')),
        il = void 0 !== dt ? dt : (dt = t('RTdz')),
        ol = function (e, a) {
          var t,
            n,
            r = e.user,
            l = e.viewer,
            i = X()(ll, r),
            o = X()(il, l),
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
              s.a.createElement(vr, { style: cl.interstitial }, s.a.createElement(je, { headline: tl, subtext: nl })),
              s.a.createElement(
                vr,
                { style: cl.examplesLink },
                s.a.createElement(Fr, { label: rl, path: '/settings/superfollows/perks_description_examples' }),
              ),
              s.a.createElement(Tr.a, null),
              s.a.createElement(
                vr,
                { style: cl.previewCallout },
                s.a.createElement(Kr, { path: '/settings/superfollows/perks_preview' }),
              ),
              s.a.createElement(el, {
                imageUrl: d,
                onChange: function (e) {
                  m(e.currentTarget.value)
                },
                ref: a,
                screenName: u,
                style: cl.preview,
                value: p,
              }),
            )
          )
        },
        sl = s.a.forwardRef(ol),
        cl = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        ul = d.a.cd5cae15,
        dl = d.a.e36287c6,
        pl = d.a.b772cd65,
        ml = void 0 !== pt ? pt : (pt = t('kz1e')),
        gl = void 0 !== mt ? mt : (mt = t('M3aw')),
        fl = void 0 !== gt ? gt : (gt = t('XFyS')),
        bl = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        yl = function (e) {
          var a,
            t,
            n,
            r,
            l = e.user,
            i = e.viewer,
            o = X()(ml, l),
            c = X()(gl, i),
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
            p = Mn()(fl),
            m = W()(p, 2),
            f = m[0],
            b = m[1],
            y = {
              disabled: !!!d || b,
              label: pl,
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
            { rightControl: w, subtitle: dl, title: ul },
            s.a.createElement(sl, { user: o, viewer: c }),
            s.a.createElement(vr, { style: bl.buttons }, h),
          )
        },
        hl = d.a.j3253319,
        wl = d.a.h1e80993,
        _l = d.a.j679dcda,
        vl = void 0 !== ft ? ft : (ft = t('hGtx')),
        kl = void 0 !== bt ? bt : (bt = t('DWSt')),
        Sl = function (e, a) {
          var t,
            n,
            r = e.user,
            l = e.viewer,
            i = X()(vl, r),
            o = X()(kl, l),
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
              s.a.createElement(vr, { style: El.interstitial }, s.a.createElement(je, { headline: hl, subtext: wl })),
              s.a.createElement(
                vr,
                { style: El.examplesLink },
                s.a.createElement(Fr, { label: _l, path: '/settings/superfollows/perks_intro_examples' }),
              ),
              s.a.createElement(Tr.a, null),
              s.a.createElement(
                vr,
                { style: El.previewCallout },
                s.a.createElement(Kr, { path: '/settings/superfollows/perks_preview' }),
              ),
              s.a.createElement(_r, {
                imageUrl: d,
                name: u,
                onChange: function (e) {
                  m(e.currentTarget.value)
                },
                ref: a,
                style: El.preview,
                value: p,
              }),
            )
          )
        },
        Fl = s.a.forwardRef(Sl),
        El = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Cl = d.a.cd5cae15,
        xl = d.a.c0348963,
        Kl = d.a.b772cd65,
        Tl = void 0 !== yt ? yt : (yt = t('oyMe')),
        Ll = void 0 !== ht ? ht : (ht = t('RL7R')),
        Dl = void 0 !== wt ? wt : (wt = t('VzX/')),
        Ol = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Il = function (e) {
          var a,
            t,
            n,
            r = e.user,
            l = e.viewer,
            i = X()(Tl, r),
            o = X()(Ll, l),
            c = null === (a = i.super_follow_creator_benefits) || void 0 === a ? void 0 : a.benefits_data,
            u =
              null !==
                (t = null === (n = o.super_follows_onboarding_draft) || void 0 === n ? void 0 : n.creator_intro) &&
              void 0 !== t
                ? t
                : '',
            d = Mn()(Dl),
            p = W()(d, 2),
            m = p[0],
            f = p[1],
            b = {
              disabled: !!!u || f,
              label: Kl,
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
            { rightControl: h, subtitle: xl, title: Cl },
            s.a.createElement(Fl, { user: i, viewer: o }),
            s.a.createElement(vr, { style: Ol.buttons }, y),
          )
        },
        Pl = t('Nh1N'),
        Bl = t('yoO3'),
        Rl = t('7FtF'),
        Vl = d.a.be103b84,
        Al = function () {
          return s.a.createElement(
            E.a,
            { style: zl.root },
            s.a.createElement(A.a, { style: zl.icon }),
            s.a.createElement(V.b, { size: 'subtext2', weight: 'bold' }, Vl),
          )
        },
        zl = x.a.create(function (e) {
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
        Ml = function (e) {
          var a = e.children,
            t = e.childrenStyle,
            n = e.headline,
            r = e.rightControl
          return s.a.createElement(
            E.a,
            { style: Ul.root },
            s.a.createElement(
              E.a,
              { style: Ul.header },
              s.a.createElement(
                V.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: Ul.headline,
                  weight: 'heavy',
                },
                n,
              ),
              r,
            ),
            s.a.createElement(E.a, { style: t }, a),
          )
        },
        Ul = x.a.create(function (e) {
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
        Hl = function (e) {
          var a = e.children,
            t = e.headline,
            n = e.rightControl
          return s.a.createElement(
            E.a,
            { style: jl.root },
            s.a.createElement(
              E.a,
              { style: jl.header },
              s.a.createElement(
                V.b,
                {
                  accessibilityLevel: 4,
                  accessibilityRole: 'heading',
                  size: 'headline2',
                  style: jl.headline,
                  weight: 'heavy',
                },
                t,
              ),
              a,
            ),
            n,
          )
        },
        jl = x.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        Wl = t('4zmP'),
        Nl = ['$refType'],
        ql = d.a.a6777c1b,
        Gl = d.a.fcd2be23,
        Xl = d.a.c0348963,
        Ql = d.a.d08d0bb2,
        Jl = d.a.ifc9b709,
        Yl = d.a.b08bbeb4,
        Zl = d.a.ia9c37c4,
        $l = d.a.fb1e4eb6,
        ei = d.a.be54a312,
        ai = d.a.cca48545,
        ti = d.a.de67bc6e,
        ni = d.a.a46cead5,
        ri = d.a.idd8ae44,
        li = d.a.b28a1b48,
        ii = d.a.f2df375b,
        oi = d.a.f3ce76c0,
        si = d.a.i8982e7e,
        ci = d.a.ca5ca5ed,
        ui = d.a.abd845fd,
        di = d.a.i859a9d3,
        pi = d.a.d14c7bbc,
        mi = d.a.g867481d,
        gi = d.a.f66d24be,
        fi = d.a.g5925628,
        bi = void 0 !== _t ? _t : (_t = t('EM6u')),
        yi = void 0 !== vt ? vt : (vt = t('oNwH')),
        hi = function (e) {
          var a,
            t,
            n,
            r,
            l,
            i,
            o,
            c,
            u,
            d = e.priceOfferings,
            p = e.user,
            m = Object(F.g)(),
            g = X()(bi, d),
            f = (g.$refType, b()(g, Nl)),
            y = X()(yi, p),
            h = null !== (a = y.legacy.profile_image_url_https) && void 0 !== a ? a : void 0,
            k = null !== (t = y.legacy.screen_name) && void 0 !== t ? t : void 0,
            S =
              null !==
                (n = null === (r = y.super_follow_creator_benefits) || void 0 === r ? void 0 : r.creator_intro) &&
              void 0 !== n
                ? n
                : '',
            C = (
              null !==
                (l =
                  null == y || null === (i = y.super_follow_creator_benefits) || void 0 === i
                    ? void 0
                    : i.benefits_data) && void 0 !== l
                ? l
                : []
            ).find(function (e) {
              return 'ExclusiveContent' === e.benefit_type
            }),
            x = null !== (o = null == C ? void 0 : C.description) && void 0 !== o ? o : '',
            K =
              null !==
                (c =
                  null === (u = y.super_follow_creator_price_metadata) || void 0 === u ? void 0 : u.selected_price) &&
              void 0 !== c
                ? c
                : 'offer2',
            T = s.a.createElement(Fr, {
              label: ci,
              path: '/settings/superfollows/management/perks_confirm',
              size: 'subtext1',
            }),
            L = s.a.createElement(q, {
              label: ui,
              path: '/settings/superfollows/management/perks_intro',
              size: 'small',
              type: 'primaryOutlined',
            }),
            D = s.a.createElement(q, {
              label: ui,
              path: '/settings/superfollows/management/perks_description',
              size: 'small',
              type: 'primaryOutlined',
            })
          return s.a.createElement(
            Bl.a,
            null,
            s.a.createElement(
              Rl.a,
              { location: m, screenType: 'secondaryDetail', title: ql },
              s.a.createElement(
                E.a,
                { style: wi.title },
                s.a.createElement(
                  V.b,
                  { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                  ql,
                ),
                s.a.createElement(Al, null),
              ),
              s.a.createElement(Tr.a, null),
              s.a.createElement(
                Ml,
                { childrenStyle: wi.benefits, headline: Gl, rightControl: T },
                s.a.createElement(
                  Hl,
                  { headline: Xl, rightControl: L },
                  s.a.createElement(Nr, { imageUrl: h, screenName: k, value: S }),
                ),
                s.a.createElement(
                  Hl,
                  { headline: Ql, rightControl: D },
                  s.a.createElement(Nr, { imageUrl: h, screenName: k, value: x }),
                ),
                s.a.createElement(Hl, { headline: Jl }, s.a.createElement(V.b, { color: 'gray700' }, Yl)),
              ),
              s.a.createElement(Tr.a, null),
              s.a.createElement(
                Ml,
                { childrenStyle: wi.other, headline: Zl },
                s.a.createElement(V.b, { color: 'gray700' }, $l),
                s.a.createElement(V.b, { size: 'headline2', weight: 'heavy' }, ei({ price: f[K] })),
                s.a.createElement(Wl.a, { Icon: Pl.a, action: { label: di, link: _ }, headline: ai, text: ti }),
              ),
              s.a.createElement(Tr.a, null),
              s.a.createElement(
                Ml,
                { childrenStyle: wi.other, headline: ni },
                s.a.createElement(V.b, { color: 'gray700' }, ri),
                s.a.createElement(
                  E.a,
                  { style: wi.buttons },
                  s.a.createElement(
                    v.a,
                    {
                      dominantColor: '#5865F2',
                      link: 'https://t.co/jPqvg6tFrDJG',
                      style: wi.button,
                      type: 'onMediaDominantColorFilled',
                    },
                    pi,
                  ),
                ),
              ),
              s.a.createElement(Tr.a, null),
              s.a.createElement(
                Ml,
                { childrenStyle: wi.other, headline: li },
                s.a.createElement(V.b, { color: 'gray700' }, ii),
                s.a.createElement(
                  E.a,
                  { style: wi.buttons },
                  s.a.createElement(
                    v.a,
                    { link: 'https://t.co/RL2NN3bEVkes', style: wi.button, type: 'primaryOutlined' },
                    mi,
                  ),
                ),
              ),
              s.a.createElement(Tr.a, null),
              s.a.createElement(
                Ml,
                { childrenStyle: wi.other, headline: oi },
                s.a.createElement(V.b, { color: 'gray700' }, si),
                s.a.createElement(
                  E.a,
                  { style: wi.buttons },
                  s.a.createElement(v.a, { link: w, style: wi.button, type: 'primaryOutlined' }, gi),
                  s.a.createElement(
                    v.a,
                    {
                      link: 'https://help.twitter.com/forms/paid-features/superfollows',
                      style: wi.button,
                      type: 'primaryOutlined',
                    },
                    fi,
                  ),
                ),
              ),
            ),
          )
        },
        wi = x.a.create(function (e) {
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
        _i = void 0 !== kt ? kt : (kt = t('MXCg')),
        vi = void 0 !== St ? St : (St = t('mEFY')),
        ki = void 0 !== Ft ? Ft : (Ft = t('d8Sa')),
        Si = function (e) {
          var a,
            t,
            n,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = e.viewer,
            c = X()(_i, l),
            u = X()(vi, i),
            d = X()(ki, o),
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
                s.a.createElement(Il, { user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/management/perks_description' },
                s.a.createElement(yl, { user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/management/perks_confirm' },
                s.a.createElement(zr, { user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { path: '/settings/superfollows/management' },
                s.a.createElement(hi, { priceOfferings: c, user: u }),
              ),
            )
          )
        },
        Fi = (t('5BYb'), d.a.b422cb62),
        Ei = d.a.f08705e0,
        Ci = d.a.e2cd700f,
        xi = d.a.fbfd7397,
        Ki = d.a.c1df579e,
        Ti = [
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
        Li = void 0 !== Et ? Et : (Et = t('wQp3')),
        Di = void 0 !== Ct ? Ct : (Ct = t('tfBr')),
        Oi = function (e) {
          var a = e.percentageComplete,
            t = e.user,
            n = e.viewer,
            r = X()(Li, t),
            l = X()(Di, n),
            i = Ti.map(function (e) {
              return { label: e.label, checked: (0, e.test)({ user: r, viewer: l }) }
            }),
            o = i.some(function (e) {
              return e.checked
            }),
            c = s.a.createElement(q, {
              label: Ki,
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
              vr,
              { style: Ii.interstitial },
              s.a.createElement(je, {
                headline: o ? Ci : Fi,
                illustration: o ? ze.Puzzle : ze.Cat,
                subtext: o ? xi : Ei,
              }),
            ),
            s.a.createElement(vr, { style: Ii.checks }, s.a.createElement(M, { items: i })),
          )
        },
        Ii = x.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        Pi = d.a.cda6bb6d,
        Bi = d.a.a15b98ec,
        Ri = function () {
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(vr, { style: Vi.interstitial }, s.a.createElement(je, { headline: Pi, subtext: Bi })),
            s.a.createElement(Tr.a, null),
            s.a.createElement(
              vr,
              { style: Vi.previewCallout },
              s.a.createElement(Kr, { path: '/settings/superfollows/perks_preview' }),
            ),
            s.a.createElement(fr, { style: Vi.preview }),
          )
        },
        Vi = x.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Ai = d.a.cd5cae15,
        zi = d.a.ad4a92a2,
        Mi = d.a.c1df579e,
        Ui = function (e) {
          var a = e.percentageComplete,
            t = { label: Mi, path: '/settings/superfollows/onboarding/perks_confirm', type: 'primaryFilled' },
            n = s.a.createElement(q, t),
            r = s.a.createElement(q, g()({}, t, { size: 'small' }))
          return s.a.createElement(
            L,
            { percentageComplete: a, rightControl: r, subtitle: zi, title: Ai },
            s.a.createElement(Ri, null),
            s.a.createElement(vr, { style: Hi.buttons }, n),
          )
        },
        Hi = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        ji = d.a.cd5cae15,
        Wi = d.a.e18b7a71,
        Ni = d.a.c1df579e,
        qi = void 0 !== xt ? xt : (xt = t('Rthh')),
        Gi = void 0 !== Kt ? Kt : (Kt = t('aREQ')),
        Xi = function (e) {
          var a = e.percentageComplete,
            t = e.user,
            n = e.viewer,
            r = X()(qi, t),
            l = X()(Gi, n),
            i = { label: Ni, path: '/settings/superfollows/onboarding/pricing', type: 'primaryFilled' },
            o = s.a.createElement(q, i),
            c = s.a.createElement(q, g()({}, i, { size: 'small' }))
          return s.a.createElement(
            L,
            { percentageComplete: a, rightControl: c, subtitle: Wi, title: ji },
            s.a.createElement(Pr, { user: r, viewer: l }),
            s.a.createElement(vr, { style: Qi.buttons }, o),
          )
        },
        Qi = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Ji = d.a.cd5cae15,
        Yi = d.a.e36287c6,
        Zi = d.a.be76dc33,
        $i = d.a.c1df579e,
        eo = void 0 !== Tt ? Tt : (Tt = t('6rkJ')),
        ao = void 0 !== Lt ? Lt : (Lt = t('tJ4s')),
        to = function (e) {
          var a,
            t,
            n = e.percentageComplete,
            r = e.user,
            l = e.viewer,
            i = s.a.useRef(),
            o = X()(ao, l),
            c = X()(eo, r),
            u = !!(null !==
              (a = null === (t = o.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.description) &&
            void 0 !== a
              ? a
              : ''),
            d = {
              disabled: !u,
              label: $i,
              path: '/settings/superfollows/onboarding/perks_badges',
              type: 'primaryFilled',
            },
            p = s.a.createElement(q, d),
            m = s.a.createElement(q, g()({}, d, { size: 'small' })),
            f = {
              children: Zi,
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
            { percentageComplete: n, rightControl: u ? m : y, subtitle: Yi, title: Ji },
            s.a.createElement(sl, { ref: i, user: c, viewer: o }),
            s.a.createElement(vr, { style: no.buttons }, u ? p : b),
          )
        },
        no = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        ro = d.a.cd5cae15,
        lo = d.a.c0348963,
        io = d.a.ef5406e3,
        oo = d.a.c1df579e,
        so = void 0 !== Dt ? Dt : (Dt = t('02qo')),
        co = void 0 !== Ot ? Ot : (Ot = t('TXsE')),
        uo = function (e) {
          var a,
            t,
            n = e.percentageComplete,
            r = e.user,
            l = e.viewer,
            i = s.a.useRef(),
            o = X()(so, r),
            c = X()(co, l),
            u = !!(null !==
              (a = null === (t = c.super_follows_onboarding_draft) || void 0 === t ? void 0 : t.creator_intro) &&
            void 0 !== a
              ? a
              : ''),
            d = {
              disabled: !u,
              label: oo,
              path: '/settings/superfollows/onboarding/perks_description',
              type: 'primaryFilled',
            },
            p = s.a.createElement(q, d),
            m = s.a.createElement(q, g()({}, d, { size: 'small' })),
            f = {
              children: io,
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
            { percentageComplete: n, rightControl: u ? m : y, subtitle: lo, title: ro },
            s.a.createElement(Fl, { ref: i, user: o, viewer: c }),
            s.a.createElement(vr, { style: po.buttons }, u ? p : b),
          )
        },
        po = x.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        mo = ['$refType'],
        go = d.a.ea8a3d2d,
        fo = d.a.f77bb178,
        bo = d.a.cd75a5d4,
        yo = d.a.g9677c6d,
        ho = d.a.abd845fd,
        wo = void 0 !== It ? It : (It = t('IeZm')),
        _o = void 0 !== Pt ? Pt : (Pt = t('7ESn')),
        vo = void 0 !== Bt ? Bt : (Bt = t('By/j')),
        ko = function (e) {
          var a,
            t,
            n,
            r = e.percentageComplete,
            l = e.priceOfferings,
            i = e.viewer,
            o = X()(wo, l),
            c = (o.$refType, b()(o, mo)),
            u = X()(_o, i).super_follows_onboarding_draft,
            d = null !== (a = null == u ? void 0 : u.creator_intro) && void 0 !== a ? a : '',
            p = null !== (t = null == u ? void 0 : u.description) && void 0 !== t ? t : '',
            m = null !== (n = null == u ? void 0 : u.selected_price) && void 0 !== n ? n : c[0],
            g = Mn()(vo),
            f = W()(g, 2),
            y = f[0],
            h = f[1]
          return s.a.createElement(
            L,
            { percentageComplete: r, title: go, withInfoButton: !0 },
            s.a.createElement(
              vr,
              { style: So.interstitial },
              s.a.createElement(je, { headline: fo({ price: c[m] }), illustration: ze.Pricing, subtext: bo }),
            ),
            s.a.createElement(
              vr,
              { style: So.buttons },
              s.a.createElement(q, {
                disabled: h,
                label: yo,
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
                label: ho,
                path: '/settings/superfollows/onboarding/pricing',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        So = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        Fo = (t('+KXO'), t('7xRU'), t('hznd')),
        Eo = ['$refType'],
        Co = d.a.ea8a3d2d,
        xo = d.a.ic9124bf,
        Ko = d.a.g5923869,
        To = {
          offer1: [d.a.f025ab39, d.a.c5602dfd],
          offer2: [d.a.ib075804, d.a.j8a72f06],
          offer3: [d.a.c246656e, d.a.a92ab16c],
        },
        Lo = d.a.c1df579e,
        Do = void 0 !== Rt ? Rt : (Rt = t('5jO1')),
        Oo = void 0 !== Vt ? Vt : (Vt = t('mKqc')),
        Io = function (e) {
          var a = e.percentageComplete,
            t = e.priceOfferings,
            n = e.viewer,
            r = X()(Do, t),
            l = (r.$refType, b()(r, Eo)),
            i = X()(Oo, n),
            o = i.super_follows_onboarding_draft,
            c = null == o ? void 0 : o.selected_price,
            u = Xa(i, 'selected_price'),
            p = s.a.createElement(
              d.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              s.a.createElement(V.b, { link: w }, d.a.c336b06a),
            ),
            m = Object.keys(l).map(function (e) {
              return { label: Ko({ price: l[e] }), value: e, helpText: To[e].join(' ') }
            }),
            g = s.a.createElement(q, {
              disabled: !c,
              label: Lo,
              path: '/settings/superfollows/onboarding/pricing_confirm',
              size: 'small',
              type: 'primaryFilled',
            })
          return s.a.createElement(
            L,
            { percentageComplete: a, rightControl: g, title: Co, withInfoButton: !0 },
            s.a.createElement(vr, { style: Po.interstitial }, s.a.createElement(je, { headline: xo, subtext: p })),
            s.a.createElement(
              vr,
              { style: Po.prices },
              s.a.createElement(Fo.a, {
                accessibilityLabel: xo,
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
        Po = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        Bo = d.a.f1cb36b8,
        Ro = d.a.e20f6661,
        Vo = d.a.a9ee1ecc,
        Ao = d.a.b772cd65,
        zo = function (e) {
          var a = e.percentageComplete
          return s.a.createElement(
            L,
            { leftControlShouldClose: !0, percentageComplete: a, title: Bo, withInfoButton: !0 },
            s.a.createElement(
              vr,
              { style: Mo.interstitial },
              s.a.createElement(je, { headline: Ro, illustration: ze.Thumbsup, subtext: Vo }),
            ),
            s.a.createElement(
              vr,
              { style: Mo.buttons },
              s.a.createElement(q, { label: Ao, path: '/settings/monetization', type: 'primaryFilled' }),
            ),
          )
        },
        Mo = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Uo = d.a.e2cd700f,
        Ho = d.a.d6bfb60c,
        jo = d.a.b9cbb370,
        Wo = function () {
          return s.a.createElement(
            L,
            { withInfoButton: !0 },
            s.a.createElement(je, { headline: Uo, illustration: ze.Puzzle, subtext: Ho }),
            s.a.createElement(q, { label: jo, path: '/settings/superfollows/onboarding/stripe_setup' }),
          )
        },
        No = t('8jkQ'),
        qo = d.a.f1cb36b8,
        Go = d.a.ja884230,
        Xo = d.a.af1b808d,
        Qo = d.a.fe339750,
        Jo = d.a.j912510a,
        Yo = void 0 !== At ? At : (At = t('xHLM')),
        Zo = function (e) {
          var a = e.percentageComplete,
            t = Mn()(Yo),
            n = W()(t, 2),
            r = n[0],
            l = n[1],
            i = function () {
              r({
                variables: {},
                onCompleted: function (e, a) {
                  var t = e.stripe_account_create_onboarding_url
                  t && No.b.navigateTo(t)
                },
              })
            }
          return s.a.createElement(
            L,
            { percentageComplete: a, title: qo, withInfoButton: !0 },
            s.a.createElement(
              vr,
              { style: $o.interstitial },
              s.a.createElement(je, { headline: Go, illustration: ze.CoinStairs, subtext: Xo }),
            ),
            s.a.createElement(
              vr,
              { style: $o.buttons },
              s.a.createElement(v.a, { disabled: l, onPress: i, type: 'primaryFilled' }, Qo),
              s.a.createElement(v.a, { disabled: l, onPress: i, type: 'primaryOutlined' }, Jo),
            ),
          )
        },
        $o = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        es = void 0 !== zt ? zt : (zt = t('UNVS')),
        as = void 0 !== Mt ? Mt : (Mt = t('6byF')),
        ts = void 0 !== Ut ? Ut : (Ut = t('dNhZ')),
        ns = function (e) {
          return e / 8
        },
        rs = function (e) {
          var a,
            t,
            n,
            r,
            l = e.priceOfferings,
            i = e.user,
            o = e.viewer,
            c = X()(es, l),
            u = X()(as, i),
            d = X()(ts, o),
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
                s.a.createElement(uo, { percentageComplete: ns(1), user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_description' },
                s.a.createElement(to, { percentageComplete: ns(2), user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_badges' },
                s.a.createElement(Ui, { percentageComplete: ns(3) }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/perks_confirm' },
                s.a.createElement(Xi, { percentageComplete: ns(4), user: u, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/pricing' },
                s.a.createElement(Io, { percentageComplete: ns(5), priceOfferings: c, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/pricing_confirm' },
                s.a.createElement(ko, { percentageComplete: ns(6), priceOfferings: c, viewer: d }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_setup' },
                s.a.createElement(Zo, { percentageComplete: ns(7) }),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_incomplete' },
                s.a.createElement(Wo, null),
              ),
              s.a.createElement(
                F.b,
                { exact: !0, path: '/settings/superfollows/onboarding/stripe_completed' },
                s.a.createElement(zo, { percentageComplete: ns(8) }),
              ),
              s.a.createElement(
                F.b,
                { path: '/settings/superfollows/onboarding' },
                s.a.createElement(Oi, { percentageComplete: ns(0), user: u, viewer: d }),
              ),
            )
          )
        },
        ls = d.a.ebfb897c,
        is = d.a.dc4feb19,
        os = d.a.c183d271,
        ss = d.a.ic130fd5,
        cs = d.a.dd913e24,
        us = d.a.h580543e,
        ds = function () {
          return s.a.createElement(
            L,
            { title: ls },
            s.a.createElement(vr, { style: ps.interstitial }, s.a.createElement(je, { headline: is, subtext: os })),
            s.a.createElement(
              vr,
              { style: ps.exampleDescriptions },
              s.a.createElement(Tr.a, null),
              s.a.createElement(Nr, { value: ss }),
              s.a.createElement(Tr.a, null),
              s.a.createElement(Nr, { value: cs }),
              s.a.createElement(Tr.a, null),
              s.a.createElement(Nr, { value: us }),
            ),
          )
        },
        ps = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        ms = t('JWc1'),
        gs = d.a.ebfb897c,
        fs = d.a.dc4feb19,
        bs = d.a.a0bb2076,
        ys = d.a.ace46d40,
        hs = d.a.h2c4511f,
        ws = d.a.hbe4f99e,
        _s = x.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        vs = function () {
          return s.a.createElement(
            L,
            { title: gs },
            s.a.createElement(vr, { style: _s.interstitial }, s.a.createElement(je, { headline: fs, subtext: bs })),
            s.a.createElement(
              vr,
              { style: _s.exampleIntros },
              s.a.createElement(ms.a, { value: ys }),
              s.a.createElement(ms.a, { value: hs }),
              s.a.createElement(ms.a, { value: ws }),
            ),
          )
        },
        ks = t('VTDR'),
        Ss = t('a2Fh'),
        Fs = d.a.hf6f2913,
        Es = d.a.fb278c81,
        Cs = d.a.e6b60e94,
        xs = x.a.create(function (e) {
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
        Ks = function () {
          return s.a.createElement(
            L,
            { title: Fs },
            s.a.createElement(vr, { style: xs.interstitial }, s.a.createElement(je, { headline: Es, subtext: Cs })),
            s.a.createElement(
              fr,
              { style: xs.preview },
              s.a.createElement(
                ks.a,
                null,
                s.a.createElement(Ss.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                s.a.createElement(Ss.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                s.a.createElement(Ss.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: xs.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        Ts = d.a.aa7e35ed,
        Ls = d.a.f67e69bf,
        Ds = function () {
          return s.a.createElement(
            L,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            s.a.createElement(
              vr,
              { style: Os.interstitial },
              s.a.createElement(je, { headline: Ts, illustration: ze.Uturn, subtext: Ls }),
            ),
          )
        },
        Os = x.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Is = d.a.d3d6c52c,
        Ps = d.a.c53e9129,
        Bs = function () {
          return s.a.createElement(
            L,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            s.a.createElement(
              vr,
              { style: Rs.interstitial },
              s.a.createElement(je, { headline: Is, illustration: ze.PaperAirplane, subtext: Ps }),
            ),
          )
        },
        Rs = x.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Vs = d.a.j274e6aa,
        As = d.a.d7f65127,
        zs = function () {
          return s.a.createElement(
            L,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            s.a.createElement(
              vr,
              { style: Ms.interstitial },
              s.a.createElement(je, { headline: Vs, illustration: ze.Bench, subtext: As }),
            ),
          )
        },
        Ms = x.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Us = void 0 !== Ht ? Ht : (Ht = t('nEN5')),
        Hs = void 0 !== jt ? jt : (jt = t('toKZ')),
        js = void 0 !== Wt ? Wt : (Wt = t('ucRr')),
        Ws = function (e) {
          var a = e.priceOfferings,
            t = e.user,
            n = e.viewer,
            r = X()(Us, a),
            l = X()(Hs, t),
            i = X()(js, n),
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
              s.a.createElement(dr, { user: l, viewer: i }),
            ),
            s.a.createElement(
              F.b,
              { path: '/settings/superfollows/onboarding' },
              s.a.createElement(rs, { priceOfferings: r, user: l, viewer: i }),
            ),
            s.a.createElement(
              F.b,
              { path: '/settings/superfollows/management' },
              s.a.createElement(Si, { priceOfferings: r, user: l, viewer: i }),
            ),
            s.a.createElement(
              F.b,
              { exact: !0, path: '/settings/superfollows/submitted' },
              s.a.createElement(Bs, null),
            ),
            s.a.createElement(
              F.b,
              { exact: !0, path: '/settings/superfollows/waitlisted' },
              s.a.createElement(zs, null),
            ),
            s.a.createElement(F.b, { exact: !0, path: '/settings/superfollows/rejected' }, s.a.createElement(Ds, null)),
            s.a.createElement(
              F.b,
              { exact: !0, path: '/settings/superfollows/perks_intro_examples' },
              s.a.createElement(vs, null),
            ),
            s.a.createElement(
              F.b,
              { exact: !0, path: '/settings/superfollows/perks_description_examples' },
              s.a.createElement(ds, null),
            ),
            s.a.createElement(
              F.b,
              { exact: !0, path: '/settings/superfollows/perks_preview' },
              s.a.createElement(Ks, null),
            ),
            s.a.createElement(F.b, { exact: !0, path: '/settings/superfollows' }, s.a.createElement(O.a, { to: o })),
          )
        },
        Ns = t('n0Rl'),
        qs = t('q9Zt'),
        Gs = d.a.hae1c933,
        Xs = void 0 !== Nt ? Nt : (Nt = t('G8I5')),
        Qs = Object(Ns.b)(Xs, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        Js = x.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      a.default = function () {
        return s.a.createElement(Qs, {
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
                  : s.a.createElement(Ws, { priceOfferings: i, user: o, viewer: u })
              },
              renderFailure: function () {
                return s.a.createElement(L, null, s.a.createElement(qs.a, { onRetry: l, style: Js.error, title: Gs }))
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
        ],
        type: 'User',
        abstractKey: null,
        hash: '2a3b2164ecb4625e96369149fe1c5401',
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
