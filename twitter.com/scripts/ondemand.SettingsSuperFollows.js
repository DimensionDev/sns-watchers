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
        w = n('rxPX'),
        v = n('0KEI'),
        S = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: h.o, loggedInUser: y.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: h.f,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
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
        D = F.a.i2209530,
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
                  { style: [O.contentRoot, o && O.withMarginBottom] },
                  n,
                  t
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(K.a, null),
                        b.a.createElement(
                          x.a,
                          { style: O.buttonContainer },
                          b.a.createElement(P.a, { disabled: r, onPress: t, style: O.button, testID: C, type: i }, l),
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
      g()(T, 'defaultProps', { submitLabel: D, submitType: 'brandFilled', withMarginBottom: !0 })
      var O = L.a.create(function (e) {
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
      a.a = S(T)
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
            id: 'oBB1cAU62MzNbryV4Sh8Yw',
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
        w = n.n(y),
        v = n('HPNB'),
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
        D = n('cHvH'),
        T = n('3xLC'),
        O = [
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
                  return w.a.createElement(D.a, null, function (a) {
                    var n = a.windowWidth
                    return v.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                      r()(e, O))
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    Object(k.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : w.a.createElement(_.a.Configure, n),
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
                    v = n.showSubtitleOnWideDetail,
                    k = n.subtitle,
                    F = n.title,
                    E = n.titleIconCell,
                    C = n.titleIconCellSize,
                    P = n.withDetailOpen,
                    L = n.withSearchBox,
                    D = n.withTweetButton,
                    T = 'root' === g,
                    O = 'secondaryRoot' === g,
                    I = 'primaryDetail' === g,
                    B = (I && v) || (T && y),
                    R = T || (I && a),
                    V = T ? h.c : I ? h.a : void 0,
                    z = w.a.createElement(
                      K.a,
                      { style: x.appBarContainer },
                      w.a.createElement(S.a, {
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
                      T || (O && P)
                        ? null
                        : w.a.createElement(_.a.Configure, {
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
                            withTweetButton: D,
                          })
                  return w.a.createElement(w.a.Fragment, null, A, z)
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(I, 'contextType', T.a),
        b()(I, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      a.a = Object(L.a)(I)
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
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsPerksSummaryFramed_viewer' }],
        type: 'Viewer',
        abstractKey: null,
        hash: '6b86ff0ca3746915c797a2c459408f86',
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
        hash: 'adc1229000e86018aeed874a5c91a089',
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
            v = m.a.generate({
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
                    { disabled: l, interactiveStyles: v, interactivityState: e, style: h.radioBackground },
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
          return ld
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return Z
        }),
        n.d(t, 'Arrow2x', function () {
          return J
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
          return ve
        }),
        n.d(t, 'Pricing', function () {
          return Se
        }),
        n.d(t, 'Pricing2x', function () {
          return _e
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
          return Pe
        }),
        n.d(t, 'TrafficLight', function () {
          return Le
        }),
        n.d(t, 'TrafficLight2x', function () {
          return De
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Te
        }),
        n.d(t, 'Uturn', function () {
          return Oe
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
          return Ti
        }),
        n.d(r, 'Chat2x', function () {
          return Oi
        }),
        n.d(r, 'Chat3x', function () {
          return Ii
        }),
        n.d(r, 'Cog', function () {
          return Bi
        }),
        n.d(r, 'Cog2x', function () {
          return Ri
        }),
        n.d(r, 'Cog3x', function () {
          return Vi
        }),
        n.d(r, 'Coin', function () {
          return zi
        }),
        n.d(r, 'Coin2x', function () {
          return Ai
        }),
        n.d(r, 'Coin3x', function () {
          return Mi
        }),
        n.d(r, 'CoinPurse', function () {
          return Ui
        }),
        n.d(r, 'CoinPurse2x', function () {
          return Hi
        }),
        n.d(r, 'CoinPurse3x', function () {
          return Ni
        }),
        n.d(r, 'Cone', function () {
          return ji
        }),
        n.d(r, 'Cone2x', function () {
          return Wi
        }),
        n.d(r, 'Cone3x', function () {
          return Gi
        }),
        n.d(r, 'Cross', function () {
          return qi
        }),
        n.d(r, 'Cross2x', function () {
          return Qi
        }),
        n.d(r, 'Cross3x', function () {
          return Xi
        }),
        n.d(r, 'FirstAid', function () {
          return Yi
        }),
        n.d(r, 'FirstAid2x', function () {
          return Zi
        }),
        n.d(r, 'FirstAid3x', function () {
          return Ji
        }),
        n.d(r, 'Heart', function () {
          return $i
        }),
        n.d(r, 'Heart2x', function () {
          return eo
        }),
        n.d(r, 'Heart3x', function () {
          return ao
        }),
        n.d(r, 'LifeSaver', function () {
          return no
        }),
        n.d(r, 'LifeSaver2x', function () {
          return to
        }),
        n.d(r, 'LifeSaver3x', function () {
          return ro
        }),
        n.d(r, 'Lightbulb', function () {
          return lo
        }),
        n.d(r, 'Lightbulb2x', function () {
          return io
        }),
        n.d(r, 'Lightbulb3x', function () {
          return oo
        }),
        n.d(r, 'NoEntry', function () {
          return so
        }),
        n.d(r, 'NoEntry2x', function () {
          return co
        }),
        n.d(r, 'NoEntry3x', function () {
          return uo
        }),
        n.d(r, 'Pencil', function () {
          return po
        }),
        n.d(r, 'Pencil2x', function () {
          return mo
        }),
        n.d(r, 'Pencil3x', function () {
          return go
        }),
        n.d(r, 'PiggyBank', function () {
          return fo
        }),
        n.d(r, 'PiggyBank2x', function () {
          return bo
        }),
        n.d(r, 'PiggyBank3x', function () {
          return ho
        }),
        n.d(r, 'Plant', function () {
          return yo
        }),
        n.d(r, 'Plant2x', function () {
          return wo
        }),
        n.d(r, 'Plant3x', function () {
          return vo
        }),
        n.d(r, 'Puzzle', function () {
          return So
        }),
        n.d(r, 'Puzzle2x', function () {
          return _o
        }),
        n.d(r, 'Puzzle3x', function () {
          return ko
        }),
        n.d(r, 'Ribbon', function () {
          return Fo
        }),
        n.d(r, 'Ribbon2x', function () {
          return Eo
        }),
        n.d(r, 'Ribbon3x', function () {
          return Co
        }),
        n.d(r, 'Spheres', function () {
          return xo
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
          return Do
        }),
        n.d(r, 'Star3x', function () {
          return To
        }),
        n.d(r, 'TrashCan', function () {
          return Oo
        }),
        n.d(r, 'TrashCan2x', function () {
          return Io
        }),
        n.d(r, 'TrashCan3x', function () {
          return Bo
        }),
        n.d(r, 'Wallet', function () {
          return Ro
        }),
        n.d(r, 'Wallet2x', function () {
          return Vo
        }),
        n.d(r, 'Wallet3x', function () {
          return zo
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
        v = 'https://help.twitter.com/using-twitter/super-follows-creator',
        S = ''.concat(v, '#pricechange'),
        _ = n('/yvb'),
        k = n('6s7X'),
        F = function () {
          return c.a.createElement(_.a, { icon: c.a.createElement(k.a, null), link: v, type: 'primaryText' })
        },
        E = n('zCf4'),
        C = n('MWbm'),
        x = n('JYMr'),
        K = n('rHpw'),
        P = ['leftControlShouldClose', 'percentageComplete', 'rightControl', 'withCenteredLogo', 'withInfoButton'],
        L = p.a.a6777c1b,
        D = function (e) {
          var a = e.leftControlShouldClose,
            n = e.percentageComplete,
            t = e.rightControl,
            r = e.withCenteredLogo,
            l = e.withInfoButton,
            i = h()(e, P),
            o = Object(E.f)(),
            s = a ? 'close' : 'back',
            u = '/settings/monetization',
            d = r ? c.a.createElement(w.a, { style: T.iconTwitter }) : void 0,
            p = l ? c.a.createElement(C.a, { style: T.rightControl }, c.a.createElement(F, null), t) : t,
            m = n ? c.a.createElement(x.a, { progress: n }) : void 0
          return c.a.createElement(
            y.b,
            f()({}, i, {
              backButtonType: s,
              backLocation: u,
              centeredLogo: d,
              documentTitle: L,
              onBackClick: function () {
                a ? o.goBackThroughModals({ fallbackPath: u }) : o.goBack({ backLocation: u })
              },
              rightControl: p,
              secondaryBar: m,
            }),
          )
        },
        T = K.a.create(function (e) {
          return {
            iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
            rightControl: { alignItems: 'center', flexDirection: 'row', gap: e.spaces.space4 },
          }
        }),
        O = n('5FtR'),
        I = (n('849X'), n('TJCb'), n('v6aA')),
        B = p.a.g92a2343,
        R = p.a.a91bb144,
        V = function () {
          var e = Object(E.f)(),
            a = c.a.createElement(
              _.a,
              {
                onPress: function () {
                  e.push('/settings/superfollows/application/submit')
                },
                type: 'primaryFilled',
              },
              R,
            )
          return c.a.createElement(D, { rightControl: a, title: B })
        },
        z = (n('jQ3i'), n('x4t0'), n('855f')),
        A = (n('z84I'), n('t62R')),
        M = n('WtWS'),
        U = n('0ULw'),
        H = function (e) {
          var a = e.items
          return c.a.createElement(
            C.a,
            { style: N.root },
            a.map(function (e) {
              return c.a.createElement(
                C.a,
                { key: e.label, style: N.item },
                c.a.createElement(A.b, { style: N.label, weight: 'bold' }, e.label),
                e.checked
                  ? c.a.createElement(M.a, { style: N.iconChecked })
                  : c.a.createElement(U.a, { style: N.iconUnchecked }),
              )
            }),
          )
        },
        N = K.a.create(function (e) {
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
        W = n('ddV6'),
        G = n.n(W),
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
            _.a,
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
        Z = (n('yH/f'), n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        J = n.p + 'Arrow@2x.8af675c5.png',
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
        ve = n.p + 'PaperAirplane@3x.47e4b145.png',
        Se = n.p + 'Pricing.ec5962d5.png',
        _e = n.p + 'Pricing@2x.f8284265.png',
        ke = n.p + 'Pricing@3x.b6cf0185.png',
        Fe = n.p + 'Puzzle.aa045515.png',
        Ee = n.p + 'Puzzle@2x.5be7ab15.png',
        Ce = n.p + 'Puzzle@3x.1796b225.png',
        xe = n.p + 'Thumbsup.f5be79d5.png',
        Ke = n.p + 'Thumbsup@2x.6d106945.png',
        Pe = n.p + 'Thumbsup@3x.6a81e6d5.png',
        Le = n.p + 'TrafficLight.11644b65.png',
        De = n.p + 'TrafficLight@2x.5657de25.png',
        Te = n.p + 'TrafficLight@3x.a5a35335.png',
        Oe = n.p + 'Uturn.c8267f55.png',
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
        Ne = function (e) {
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
            { style: [je.illustration, s] },
            c.a.createElement(Ve.a, {
              accessibilityLabel: '',
              aspectMode: ze.a.exact(l),
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
            t && c.a.createElement(Ne, { type: t, width: 311 }),
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
        Ze = p.a.a753a87f,
        Je = p.a.abfaa527,
        $e = z.a.getTruncatedCount(1e4),
        ea = p.a.fdd95737({ minFollowersCount: $e }),
        aa = z.a.getTruncatedCount(25),
        na = p.a.a0dcad86({ minTweetsCount: aa }),
        ta = p.a.c27f57ac,
        ra = void 0 !== l ? l : (l = n('RLjm')),
        la = function (e) {
          var a = e.user,
            n = Y()(ra, a),
            t = (null == n ? void 0 : n.super_following_eligibility) || [],
            r = 0 === t.length,
            l = r ? Ue.Arrow : Ue.TrafficLight,
            i = r ? qe : Xe,
            o = r ? Qe : Ye,
            s = [
              { label: ea, checked: !t.includes('followers') },
              { label: na, checked: !t.includes('tweets') },
              { label: ta, checked: !t.includes('age') },
            ]
          return c.a.createElement(
            D,
            { withInfoButton: !0 },
            c.a.createElement(We, { headline: i, illustration: l, subtext: o }),
            c.a.createElement(H, { items: s }),
            r && c.a.createElement(j, null),
            c.a.createElement(Q, {
              disabled: !r,
              label: Ze,
              path: '/settings/superfollows/application/one_more_thing',
            }),
            c.a.createElement(Q, { label: Je, path: '/settings/superfollows/application/one_more_thing' }),
          )
        },
        ia = n('9RkS'),
        oa = p.a.bbb89925,
        sa = function (e) {
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
            { style: ca.container },
            c.a.createElement(
              A.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              c.a.createElement(
                p.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                c.a.createElement(A.b, { weight: 'bold' }, p.a.a7dd00ea),
                c.a.createElement(
                  A.b,
                  { style: ca.earnings, weight: 'heavy' },
                  p.a.c62c1d30({ earnings: '$'.concat(z.a.getTruncatedCount(m)) }),
                ),
                c.a.createElement(A.b, { color: 'green500', style: ca.asteriskLeft }, p.a.e0fb982b),
              ),
            ),
            c.a.createElement(
              C.a,
              { style: ca.slider },
              c.a.createElement(ia.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: oa({ percent: u }),
                value: u,
              }),
            ),
            c.a.createElement(
              A.b,
              { color: 'green500', size: 'subtext3', style: ca.footnote },
              c.a.createElement(
                p.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                c.a.createElement(A.b, { style: ca.asteriskRight }, p.a.e263c38e),
              ),
            ),
          )
        },
        ca = K.a.create(function (e) {
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
        ua = n('6iuV'),
        da = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        pa = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return c.a.createElement(
            C.a,
            { style: ma.container },
            c.a.createElement(da.a, { Icon: a, color: 'neutral' }),
            c.a.createElement(A.b, { size: 'headline2', style: ma.title, weight: 'bold' }, t),
            c.a.createElement(A.b, { color: 'gray700', style: ma.description }, n),
          )
        },
        ma = K.a.create(function (e) {
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
        ga = n('sUoZ'),
        fa = n('witV'),
        ba = n('ACHU'),
        ha = [
          { Icon: ga.a, title: p.a.d31c5997, description: p.a.hda1e780 },
          { Icon: fa.a, title: p.a.d08d0bb2, description: p.a.cbd8b105 },
          { Icon: ba.a, title: p.a.becb4930, description: p.a.g743ef96 },
        ],
        ya = function () {
          return c.a.createElement(
            ua.a,
            null,
            ha.map(function (e) {
              return c.a.createElement(pa, f()({}, e, { key: e.title }))
            }),
          )
        },
        wa = p.a.a6777c1b,
        va = p.a.j5dc36d7,
        Sa = p.a.c45b2f06,
        _a = p.a.hb6b432e,
        ka = p.a.cd5cae15,
        Fa = p.a.f7239f4c,
        Ea = p.a.g8cdf707,
        Ca = p.a.bff8472e,
        xa = p.a.e533715d,
        Ka = void 0 !== i ? i : (i = n('xd+q')),
        Pa = function (e) {
          var a = e.user,
            n = Y()(Ka, a).legacy.followers_count
          return c.a.createElement(
            D,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            c.a.createElement(
              A.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              wa,
            ),
            c.a.createElement(A.b, null, va),
            c.a.createElement(
              A.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Sa,
            ),
            c.a.createElement(A.b, { color: 'gray700' }, _a),
            c.a.createElement(Ne, { type: Ue.HandCoins }),
            c.a.createElement(
              A.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              ka,
            ),
            c.a.createElement(ya, null),
            c.a.createElement(
              A.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Fa,
            ),
            c.a.createElement(sa, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            c.a.createElement(
              A.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ea,
            ),
            c.a.createElement(A.b, { color: 'gray700' }, Ca),
            c.a.createElement(Q, {
              color: 'plum500',
              label: xa,
              path: '/settings/superfollows/application/eligibility',
            }),
          )
        },
        La = p.a.d0fc4890,
        Da = p.a.c64384b6,
        Ta = p.a.c3d89aca,
        Oa = function () {
          return c.a.createElement(
            D,
            { withInfoButton: !0 },
            c.a.createElement(We, { align: 'center', headline: La, illustration: Ue.OneFinger, subtext: Da }),
            c.a.createElement(Q, { label: Ta, path: '/settings/superfollows/application/complete_profile' }),
          )
        },
        Ia = n('tI3i'),
        Ba = n.n(Ia),
        Ra = n('FGLp'),
        Va = (n('2G9S'), n('Hsf0')),
        za = n.n(Va),
        Aa = function (e) {
          return za()(void 0 !== o ? o : (o = n('l/EB')), e).__id
        },
        Ma = function (e, a) {
          var n = Aa(a),
            t = e.get(n)
          return Ba()(t, 'viewer must be defined'), t
        },
        Ua = 'super_follows_application_draft',
        Ha = function (e, a) {
          return Ma(e, a).getLinkedRecord(Ua)
        },
        Na = n('HG4m'),
        ja = n.n(Na),
        Wa = n('Ud88'),
        Ga = n.n(Wa)
      function qa(e, a) {
        var n = Ga()()
        Object(Ra.a)(function () {
          Ba()(e, 'viewerRef must be defined'),
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
                  h = Aa(a),
                  y = Ma(e, a)
                if (!Ha(e, a)) {
                  var w = e.create(''.concat(h, ':').concat(Ua), 'SuperFollowsApplicationDraft')
                  w.setValue(r, 'content_category'),
                    w.setValue(i, 'content_category_other'),
                    w.setValue(s, 'content_creation_platform'),
                    w.setValue(u, 'content_creation_platform_other'),
                    w.setValue(b, 'purpose'),
                    w.setValue(p, 'ethnicity'),
                    w.setValue(g, 'gender'),
                    y.setLinkedRecord(w, Ua)
                }
              })(n, e, a)
            })
        })
      }
      function Qa(e, a) {
        var n = Ga()()
        return c.a.useCallback(
          function (t) {
            Ba()(e, 'viewerRef must be defined'),
              ja()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Ha(e, a)
                  Ba()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Xa,
        Ya,
        Za,
        Ja,
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
        un = n('p+r5'),
        dn = p.a.f7997b16,
        pn = p.a.fc00ab5b,
        mn = p.a.c249167f,
        gn = p.a.b772cd65,
        fn = void 0 !== Xa ? Xa : (Xa = n('xhT1')),
        bn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(fn, t),
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
            D,
            { title: dn },
            c.a.createElement(un.a, {
              helperText: mn,
              label: pn,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(_.a, null, gn),
          )
        },
        hn = n('fyvP'),
        yn = n('csss'),
        wn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(E.f)()
          return c.a.createElement(yn.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        vn = p.a.f7997b16,
        Sn = p.a.c144fa52,
        _n = [
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
        kn = p.a.c365dcc5,
        Fn = p.a.bd44a8a8,
        En = void 0 !== Ya ? Ya : (Ya = n('JB6R')),
        Cn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(En, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Qa(r, 'content_category'),
            o = _n.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            D,
            { title: vn },
            c.a.createElement(hn.a, {
              description: Sn,
              label: Sn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(wn, {
              helpText: Fn,
              label: kn,
              path: '/settings/superfollows/application/submit_categories_other',
            }),
          )
        },
        xn = p.a.d94a9a17,
        Kn = p.a.a35394b3,
        Pn = [
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
        Ln = void 0 !== Za ? Za : (Za = n('H1we')),
        Dn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Ln, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Qa(r, 'ethnicity'),
            o = Pn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            D,
            { title: xn },
            c.a.createElement(hn.a, {
              description: Kn,
              label: Kn,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        Tn = p.a.a8d0108d,
        On = p.a.a35394b3,
        In = [
          p.a.de32365f,
          p.a.b6ab31bd,
          p.a.ffc23188,
          p.a.h1cc7091,
          p.a.hca27829,
          p.a.b3af7344,
          p.a.he3f1435,
          p.a.c3c16abb,
        ],
        Bn = void 0 !== Ja ? Ja : (Ja = n('VG5i')),
        Rn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Bn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Qa(r, 'gender'),
            o = In.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            D,
            { title: Tn },
            c.a.createElement(hn.a, {
              description: On,
              label: On,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        Vn = p.a.da8ea7da,
        zn = p.a.d7081f91,
        An = p.a.j349548f,
        Mn = p.a.b772cd65,
        Un = void 0 !== $a ? $a : ($a = n('+OUG')),
        Hn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Un, t),
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
            D,
            { title: Vn },
            c.a.createElement(un.a, {
              helperText: An,
              label: zn,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(_.a, null, Mn),
          )
        },
        Nn = p.a.da8ea7da,
        jn = p.a.d4062c9a,
        Wn = [p.a.a3021317, p.a.eb4a600d, p.a.d4d74bb3, p.a.fc738909, p.a.d8552c1a, p.a.ca07aa46],
        Gn = p.a.c365dcc5,
        qn = p.a.bd44a8a8,
        Qn = void 0 !== en ? en : (en = n('xnrs')),
        Xn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Qn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Qa(r, 'content_creation_platform'),
            o = Wn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            D,
            { title: Nn },
            c.a.createElement(hn.a, {
              description: jn,
              label: jn,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(wn, {
              helpText: qn,
              label: Gn,
              path: '/settings/superfollows/application/submit_platforms_other',
            }),
          )
        },
        Yn = (n('tVqn'), n('uFXj'), p.a.f4f4dd6f),
        Zn = p.a.f448cbcb,
        Jn = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? Yn : 'optional' === n ? Zn : void 0
          return c.a.createElement(
            C.a,
            { style: $n.container },
            c.a.createElement(A.b, { size: 'headline1', weight: 'heavy' }, a),
            r && c.a.createElement(A.b, { color: t, size: 'subtext2', style: $n.subtext }, r),
          )
        },
        $n = K.a.create(function (e) {
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
        et = n('jV+4'),
        at = n('Xrkv'),
        nt = n('9SqB'),
        tt = n.n(nt),
        rt = p.a.e873f0ae,
        lt = p.a.f095a24a,
        it = p.a.i5f7b6b8,
        ot = p.a.d1f6d336,
        st = p.a.f7997b16,
        ct = p.a.c144fa52,
        ut = p.a.f1bf337d,
        dt = p.a.da8ea7da,
        pt = p.a.d4062c9a,
        mt = p.a.e963d587,
        gt = p.a.ede0ac3e,
        ft = p.a.ffb6cb88,
        bt = p.a.b2159e8e,
        ht = p.a.feacb49d,
        yt = p.a.je17c987,
        wt = p.a.d94a9a17,
        vt = p.a.a8d0108d,
        St = p.a.gfc80842,
        _t = void 0 !== an ? an : (an = n('pLb/')),
        kt = void 0 !== nn ? nn : (nn = n('3qCL')),
        Ft = void 0 !== tn ? tn : (tn = n('AyUU')),
        Et = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i,
            o,
            s = e.user,
            u = e.viewer,
            d = Y()(_t, s),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = Y()(kt, u),
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
            v = f.length && b.length && h.trim(),
            S = Qa(m, 'purpose'),
            _ = tt()(Ft),
            k = G()(_, 2),
            F = k[0],
            E = k[1]
          return c.a.createElement(
            D,
            { withInfoButton: !0 },
            c.a.createElement(We, { headline: rt, illustration: Ue.Clipboard, subtext: lt }),
            c.a.createElement(Jn, { title: it }),
            c.a.createElement(A.b, null, ot),
            p && c.a.createElement(et.a, { screenName: p }),
            c.a.createElement(Jn, { title: st, type: 'required' }),
            c.a.createElement(A.b, { color: 'gray700' }, ct),
            c.a.createElement(wn, {
              description: Object(at.a)(f, !0),
              label: ut,
              path: '/settings/superfollows/application/submit_categories',
            }),
            c.a.createElement(Jn, { title: dt, type: 'required' }),
            c.a.createElement(A.b, { color: 'gray700' }, pt),
            c.a.createElement(wn, {
              description: Object(at.a)(b, !0),
              label: mt,
              path: '/settings/superfollows/application/submit_platforms',
            }),
            c.a.createElement(Jn, { title: gt, type: 'required' }),
            c.a.createElement(un.a, {
              helperText: bt,
              label: ft,
              name: 'plannedUsage',
              onChange: function (e) {
                S(e.currentTarget.value)
              },
              value: h,
            }),
            c.a.createElement(Jn, { title: ht, type: 'optional' }),
            c.a.createElement(A.b, { color: 'gray700' }, yt),
            c.a.createElement(wn, {
              description: Object(at.a)(y, !0),
              label: wt,
              path: '/settings/superfollows/application/submit_ethnicities',
            }),
            c.a.createElement(wn, {
              description: Object(at.a)(w, !0),
              label: vt,
              path: '/settings/superfollows/application/submit_genders',
            }),
            c.a.createElement(j, null),
            c.a.createElement(Q, {
              disabled: !v || E,
              label: St,
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
        Ct = void 0 !== rn ? rn : (rn = n('o/nB')),
        xt = void 0 !== ln ? ln : (ln = n('lZLw')),
        Kt = function (e) {
          var a = e.user,
            n = e.viewer,
            t = c.a.useContext(I.a).featureSwitches,
            r = Y()(Ct, a),
            l = Y()(xt, n)
          if ((qa(l), !t.isTrue('super_follow_web_application_enabled')))
            throw new Error('Super Follows application is not enabled')
          return null == l.super_follows_application_draft
            ? c.a.createElement(O.a, { to: '/settings/superfollows' })
            : c.a.createElement(
                E.d,
                null,
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/eligibility' },
                  c.a.createElement(la, { user: r }),
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
                  c.a.createElement(Et, { user: r, viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_categories' },
                  c.a.createElement(Cn, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_categories_other' },
                  c.a.createElement(bn, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_platforms' },
                  c.a.createElement(Xn, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_platforms_other' },
                  c.a.createElement(Hn, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_ethnicities' },
                  c.a.createElement(Dn, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_genders' },
                  c.a.createElement(Rn, { viewer: l }),
                ),
                c.a.createElement(
                  E.b,
                  { path: '/settings/superfollows/application' },
                  c.a.createElement(Pa, { user: r }),
                ),
              )
        },
        Pt = (n('KqXw'), n('MvUL'), n('eb3s')),
        Lt = p.a.af4d0a80,
        Dt = p.a.c701e5cc,
        Tt = p.a.a649778b,
        Ot = p.a.d4ab68e2,
        It = function (e) {
          var a = e.onNavigation,
            n = e.shouldBlockNavigation,
            t = Object(E.f)(),
            r = c.a.useState(void 0),
            l = G()(r, 2),
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
                          t.goBackThroughModals({ fallbackPath: '/settings/monetization' })
                      }
                    }
                  })
              },
              [t, a, o],
            )
          return i
            ? c.a.createElement(Pt.a, {
                cancelButtonLabel: Tt,
                confirmButtonLabel: Ot,
                confirmButtonType: 'destructiveFilled',
                headline: Lt,
                onCancel: u,
                onConfirm: d,
                text: Dt,
              })
            : null
        },
        Bt = n('cHvH'),
        Rt = function (e) {
          var a = e.children,
            n = e.style,
            t = Object(Bt.b)().windowWidth > K.a.theme.breakpoints.medium ? Vt.marginWide : Vt.marginNarrow
          return c.a.createElement(C.a, { style: [n, t] }, a)
        },
        Vt = K.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space80 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        zt = (n('ho0z'), n('+7VC')),
        At = n('1k08'),
        Mt = ['style'],
        Ut = p.a.b600eb88,
        Ht = p.a.b08bbeb4,
        Nt = function (e) {
          var a = e.style,
            n = h()(e, Mt),
            t = Object(Bt.b)().windowWidth > K.a.theme.breakpoints.medium
          return c.a.createElement(
            C.a,
            { style: [jt.root, t && jt.rootWide, a] },
            c.a.createElement(At.a, { description: Ht, title: Ut }),
            c.a.createElement(zt.a, f()({}, n, { style: jt.exclusiveDemoVIPContent })),
          )
        },
        jt = K.a.create(function (e) {
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
        Wt = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(
            C.a,
            { style: [Qt.frame, n] },
            c.a.createElement(
              C.a,
              { style: Qt.browserBar },
              c.a.createElement(
                C.a,
                { style: Qt.browserBarButtons },
                c.a.createElement(C.a, { style: Qt.browserBarButton }),
                c.a.createElement(C.a, { style: Qt.browserBarButton }),
                c.a.createElement(C.a, { style: Qt.browserBarButton }),
              ),
              c.a.createElement(
                C.a,
                { style: Qt.browserBarUrlInputWrapper },
                c.a.createElement(C.a, { style: Qt.browserBarUrlInput }),
              ),
            ),
            a,
          )
        },
        Gt = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(C.a, { style: n }, c.a.createElement(C.a, { style: Qt.content }, a))
        },
        qt = function (e) {
          var a = e.children,
            n = e.style
          return Object(Bt.b)().windowWidth > K.a.theme.breakpoints.medium
            ? c.a.createElement(Wt, { style: n }, c.a.createElement(Gt, { style: Qt.contentWide }, a))
            : c.a.createElement(Gt, { style: n }, a)
        },
        Qt = K.a.create(function (e) {
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
        Xt = n('lD8l'),
        Yt = (n('kH1Z'), n('6U7i'), n('9VLy')),
        Zt = n('6OUF'),
        Jt = n('yTN1'),
        $t = p.a.a329ce87,
        er = function (e, a) {
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
            { style: [nr.root, o] },
            l
              ? c.a.createElement(Zt.a, {
                  autoFocus: t,
                  inputStyle: nr.descriptionInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'description',
                  numberOfLines: 1,
                  onChange: l,
                  placeholder: $t,
                  ref: a,
                  style: nr.description,
                  value: s,
                })
              : c.a.createElement(A.b, { color: 'gray700', style: nr.description }, s),
            c.a.createElement(
              C.a,
              { style: nr.signatureWrapper },
              c.a.createElement(Yt.a, { imageUrl: r, screenName: i, style: [nr.signature, !s && nr.visibilityHidden] }),
              l &&
                u &&
                c.a.createElement(Jt.a, {
                  count: null !== (n = null == s ? void 0 : s.length) && void 0 !== n ? n : 0,
                  maxCount: u,
                  warningCount: u - 10,
                }),
            ),
          )
        },
        ar = c.a.forwardRef(er),
        nr = K.a.create(function (e) {
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
        tr = ['style'],
        rr = p.a.cbc8ce27,
        lr = function (e, a) {
          var n = e.style,
            t = h()(e, tr),
            r = Object(Bt.b)().windowWidth > K.a.theme.breakpoints.medium
          return c.a.createElement(
            C.a,
            { style: [or.root, r && or.rootWide, n] },
            c.a.createElement(
              A.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              rr,
            ),
            c.a.createElement(ar, f()({}, t, { ref: a, style: or.description })),
          )
        },
        ir = c.a.forwardRef(lr),
        or = K.a.create(function (e) {
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
        sr = ['style'],
        cr = function (e, a) {
          e.style
          var n = h()(e, sr)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(ir, f()({}, n, { ref: a })),
            c.a.createElement(Xt.a, { style: dr.exclusiveDemoBonusContent }),
          )
        },
        ur = c.a.forwardRef(cr),
        dr = K.a.create(function (e) {
          return {
            exclusiveDemoBonusContent: {
              alignSelf: 'center',
              marginBottom: e.spaces.space32,
              marginTop: e.spaces.space16,
            },
          }
        }),
        pr = n('MAc7'),
        mr = 'super_follows_onboarding_draft',
        gr = function (e, a) {
          return Ma(e, a).getLinkedRecord(mr)
        }
      function fr(e, a) {
        var n = Ga()()
        Object(Ra.a)(function () {
          Ba()(e, 'viewerRef must be defined'),
            ja()(n, function (n) {
              !(function (e, a) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  t = n.creator_intro,
                  r = void 0 === t ? null : t,
                  l = n.description,
                  i = void 0 === l ? null : l,
                  o = n.selected_price,
                  s = void 0 === o ? null : o,
                  c = Aa(a),
                  u = Ma(e, a)
                if (!gr(e, a)) {
                  var d = e.create(''.concat(c, ':').concat(mr), 'SuperFollowsOnboardingDraft')
                  d.setValue(r, 'creator_intro'),
                    d.setValue(i, 'description'),
                    d.setValue(s, 'selected_price'),
                    u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                }
              })(n, e, a)
            })
        })
      }
      function br(e, a) {
        var n = Ga()()
        return c.a.useCallback(
          function (t) {
            Ba()(e, 'viewerId must be defined'),
              ja()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = gr(e, a)
                  Ba()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var hr,
        yr,
        wr,
        vr,
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
        Dr,
        Tr,
        Or,
        Ir,
        Br,
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
        Gr,
        qr,
        Qr,
        Xr,
        Yr,
        Zr,
        Jr,
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
        ml = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = Y()(void 0 !== on ? on : (on = n('krsm')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.creator_intro) && void 0 !== a
            ? a
            : ''
        },
        gl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = Y()(void 0 !== sn ? sn : (sn = n('ZaCQ')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.description) && void 0 !== a
            ? a
            : ''
        },
        fl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = Y()(void 0 !== cn ? cn : (cn = n('K7/K')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        bl = void 0 !== hr ? hr : (hr = n('STrk')),
        hl = void 0 !== yr ? yr : (yr = n('bWed')),
        yl = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = Y()(bl, t),
            i = Y()(hl, r),
            o = (null == l ? void 0 : l.legacy) || {},
            s = o.name,
            u = o.profile_image_url_https,
            d = o.screen_name,
            p = null !== (a = ml(i)) && void 0 !== a ? a : '',
            m = null !== (n = gl(i)) && void 0 !== n ? n : ''
          return (
            Ba()('string' == typeof u, 'imageUrl must be defined'),
            Ba()('string' == typeof s, 'name must be defined'),
            Ba()('string' == typeof d, 'screenName must be defined'),
            c.a.createElement(
              qt,
              null,
              c.a.createElement(
                C.a,
                { style: wl.browserContent },
                c.a.createElement(pr.a, { imageUrl: u, name: s, value: p }),
                c.a.createElement(ur, { imageUrl: u, screenName: d, value: m }),
                c.a.createElement(Nt, { user: l }),
              ),
            )
          )
        },
        wl = K.a.create(function (e) {
          return {
            browserContent: { paddingBottom: e.spaces.space48 },
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            blob: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
          }
        }),
        vl = ['label', 'path'],
        Sl = function (e) {
          var a = e.label,
            n = e.path,
            t = h()(e, vl),
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
        _l = p.a.hf6f2913,
        kl = p.a.i859a9d3,
        Fl = K.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        El = function (e) {
          var a = e.path,
            n = e.style
          return c.a.createElement(
            C.a,
            { style: [Fl.root, n] },
            c.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, _l),
            c.a.createElement(Sl, { label: kl, path: a }),
          )
        },
        Cl = n('0yYu'),
        xl = p.a.iba08a94,
        Kl = p.a.ef354e83,
        Pl = void 0 !== wr ? wr : (wr = n('UFp0')),
        Ll = void 0 !== vr ? vr : (vr = n('NmgE')),
        Dl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Y()(Pl, a),
            r = Y()(Ll, n)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Rt, { style: Tl.interstitial }, c.a.createElement(We, { headline: xl, subtext: Kl })),
            c.a.createElement(Cl.a, null),
            c.a.createElement(
              Rt,
              { style: Tl.previewCallout },
              c.a.createElement(El, { path: '/settings/superfollows/perks_preview' }),
            ),
            c.a.createElement(C.a, { style: Tl.summaryFramed }, c.a.createElement(yl, { user: t, viewer: r })),
          )
        },
        Tl = K.a.create(function (e) {
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
        Ol = p.a.hf6f2913,
        Il = void 0 !== Sr ? Sr : (Sr = n('MvEh')),
        Bl = void 0 !== _r ? _r : (_r = n('U5ka')),
        Rl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Y()(Il, a),
            r = Y()(Bl, n)
          return c.a.createElement(D, { title: Ol, withInfoButton: !0 }, c.a.createElement(Dl, { user: t, viewer: r }))
        },
        Vl = ['style'],
        zl = function (e, a) {
          var n = e.style,
            t = h()(e, Vl)
          return c.a.createElement(
            qt,
            { style: n },
            c.a.createElement(c.a.Fragment, null, c.a.createElement(ur, f()({}, t, { ref: a }))),
          )
        },
        Al = c.a.forwardRef(zl),
        Ml = p.a.gf32cca1,
        Ul = p.a.j8ba99b3,
        Hl = p.a.j679dcda,
        Nl = void 0 !== kr ? kr : (kr = n('yjSu')),
        jl = void 0 !== Fr ? Fr : (Fr = n('RTdz')),
        Wl = function (e, a) {
          var n = e.autoFocus,
            t = e.descriptionMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(Ra.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = Y()(Nl, r),
            s = Y()(jl, l),
            u = o.legacy,
            d = u.profile_image_url_https,
            p = u.screen_name,
            m = gl(s),
            g = br(s, 'description')
          return (
            Ba()('string' == typeof d, 'imageUrl must be defined'),
            Ba()('string' == typeof p, 'screenName must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Rt, { style: ql.interstitial }, c.a.createElement(We, { headline: Ml, subtext: Ul })),
              c.a.createElement(
                Rt,
                { style: ql.examplesLink },
                c.a.createElement(Sl, { label: Hl, path: '/settings/superfollows/perks_description_examples' }),
              ),
              c.a.createElement(Cl.a, null),
              c.a.createElement(
                Rt,
                { style: ql.previewCallout },
                c.a.createElement(El, { path: '/settings/superfollows/perks_preview' }),
              ),
              c.a.createElement(Al, {
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
              c.a.createElement(C.a, { ref: i }),
            )
          )
        },
        Gl = c.a.forwardRef(Wl),
        ql = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Ql =
          (n('hBpG'),
          n('5BYb'),
          function (e) {
            var a, t
            return null !==
              (a =
                null === (t = Y()(void 0 !== Cr ? Cr : (Cr = n('WDhg')), e).super_follow_creator_benefits) ||
                void 0 === t
                  ? void 0
                  : t.creator_intro) && void 0 !== a
              ? a
              : ''
          }),
        Xl = function (e) {
          var a,
            t,
            r,
            l = (
              null !==
                (a =
                  null === (t = Y()(void 0 !== xr ? xr : (xr = n('G/nI')), e).super_follow_creator_benefits) ||
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
        Yl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = Y()(void 0 !== Kr ? Kr : (Kr = n('dGIC')), e).super_follow_creator_price_metadata) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        Zl = (n('jwue'), n('+oxZ'), void 0 !== Pr ? Pr : (Pr = n('rwq4'))),
        Jl = void 0 !== Lr ? Lr : (Lr = n('E9LA')),
        $l = function (e, a) {
          var t = a.creatorIntro,
            r = a.description,
            l = Y()(Zl, e),
            i = (function (e) {
              var a
              return null === (a = Y()(void 0 !== Er ? Er : (Er = n('lWeI')), e).super_follow_creator_benefits) ||
                void 0 === a
                ? void 0
                : a.__id
            })(l),
            o = Ql(l),
            s = Xl(l),
            u = t || o,
            d = r || s,
            p = tt()(Jl),
            m = G()(p, 2),
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
                      Ba()(i, 'benefitsId must be specified')
                      var a = e.get(i)
                      if (
                        (Ba()(a, 'benefitsRecord must be specified'),
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
        ei = p.a.cd5cae15,
        ai = p.a.e36287c6,
        ni = p.a.b772cd65,
        ti = void 0 !== Dr ? Dr : (Dr = n('kz1e')),
        ri = void 0 !== Tr ? Tr : (Tr = n('M3aw')),
        li = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Y()(ti, a),
            r = Y()(ri, n),
            l = Xl(t),
            i = gl(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = $l(t, { description: i }),
            u = G()(s, 2),
            d = u[0],
            p = u[1],
            m = {
              disabled: !o || p,
              label: ni,
              onPress: d,
              path: '/settings/superfollows/management',
              type: 'primaryFilled',
            },
            g = c.a.createElement(Q, f()({}, m, { size: 'small' }))
          return c.a.createElement(
            D,
            { rightControl: g, subtitle: ai, title: ei },
            c.a.createElement(Gl, { autoFocus: !0, descriptionMaxLength: 140, user: t, viewer: r }),
          )
        },
        ii = ['style'],
        oi = function (e, a) {
          var n = e.style,
            t = h()(e, ii)
          return c.a.createElement(qt, { style: n }, c.a.createElement(pr.a, f()({}, t, { ref: a })))
        },
        si = c.a.forwardRef(oi),
        ci = p.a.j3253319,
        ui = p.a.h1e80993,
        di = p.a.j679dcda,
        pi = void 0 !== Or ? Or : (Or = n('hGtx')),
        mi = void 0 !== Ir ? Ir : (Ir = n('DWSt')),
        gi = function (e, a) {
          var n = e.autoFocus,
            t = e.introMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(Ra.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = Y()(pi, r),
            s = Y()(mi, l),
            u = o.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m = ml(s),
            g = br(s, 'creator_intro')
          return (
            Ba()('string' == typeof p, 'imageUrl must be defined'),
            Ba()('string' == typeof d, 'name must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Rt, { style: bi.interstitial }, c.a.createElement(We, { headline: ci, subtext: ui })),
              c.a.createElement(
                Rt,
                { style: bi.examplesLink },
                c.a.createElement(Sl, { label: di, path: '/settings/superfollows/perks_intro_examples' }),
              ),
              c.a.createElement(Cl.a, null),
              c.a.createElement(
                Rt,
                { style: bi.previewCallout },
                c.a.createElement(El, { path: '/settings/superfollows/perks_preview' }),
              ),
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
              c.a.createElement(C.a, { ref: i }),
            )
          )
        },
        fi = c.a.forwardRef(gi),
        bi = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        hi = p.a.cd5cae15,
        yi = p.a.c0348963,
        wi = p.a.b772cd65,
        vi = void 0 !== Br ? Br : (Br = n('oyMe')),
        Si = void 0 !== Rr ? Rr : (Rr = n('RL7R')),
        _i = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Y()(vi, a),
            r = Y()(Si, n),
            l = Ql(t),
            i = ml(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = $l(t, { creatorIntro: i }),
            u = G()(s, 2),
            d = u[0],
            p = u[1],
            m = {
              disabled: !o || p,
              label: wi,
              onPress: d,
              path: '/settings/superfollows/management',
              type: 'primaryFilled',
            },
            g = c.a.createElement(Q, f()({}, m, { size: 'small' }))
          return c.a.createElement(
            D,
            { rightControl: g, subtitle: yi, title: hi },
            c.a.createElement(fi, { autoFocus: !0, introMaxLength: 140, user: t, viewer: r }),
          )
        },
        ki = n('Nh1N'),
        Fi = n('yoO3'),
        Ei = n('7FtF'),
        Ci = p.a.be103b84,
        xi = function () {
          return c.a.createElement(
            C.a,
            { style: Ki.root },
            c.a.createElement(M.a, { style: Ki.icon }),
            c.a.createElement(A.b, { size: 'subtext2', weight: 'bold' }, Ci),
          )
        },
        Ki = K.a.create(function (e) {
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
            C.a,
            { style: Li.root },
            c.a.createElement(
              C.a,
              { style: Li.header },
              c.a.createElement(
                A.b,
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
        Li = K.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        Di = n('4zmP'),
        Ti = n.p + 'Chat.62494e65.png',
        Oi = n.p + 'Chat@2x.f6eeca05.png',
        Ii = n.p + 'Chat@3x.dd8438c5.png',
        Bi = n.p + 'Cog.788d3515.png',
        Ri = n.p + 'Cog@2x.3528d165.png',
        Vi = n.p + 'Cog@3x.e4185e95.png',
        zi = n.p + 'Coin.684ea185.png',
        Ai = n.p + 'Coin@2x.9e020695.png',
        Mi = n.p + 'Coin@3x.d5ecbc95.png',
        Ui = n.p + 'CoinPurse.5e7e5f25.png',
        Hi = n.p + 'CoinPurse@2x.62abfad5.png',
        Ni = n.p + 'CoinPurse@3x.6b9f5d05.png',
        ji = n.p + 'Cone.e7e68c95.png',
        Wi = n.p + 'Cone@2x.94d66a15.png',
        Gi = n.p + 'Cone@3x.f4718655.png',
        qi = n.p + 'Cross.eed0ff55.png',
        Qi = n.p + 'Cross@2x.68249435.png',
        Xi = n.p + 'Cross@3x.59595055.png',
        Yi = n.p + 'FirstAid.962ae7e5.png',
        Zi = n.p + 'FirstAid@2x.09640055.png',
        Ji = n.p + 'FirstAid@3x.b6884b15.png',
        $i = n.p + 'Heart.a7bdca85.png',
        eo = n.p + 'Heart@2x.a3108ce5.png',
        ao = n.p + 'Heart@3x.2866f2f5.png',
        no = n.p + 'LifeSaver.19af1fb5.png',
        to = n.p + 'LifeSaver@2x.5f9465a5.png',
        ro = n.p + 'LifeSaver@3x.3cde1ca5.png',
        lo = n.p + 'Lightbulb.632a0de5.png',
        io = n.p + 'Lightbulb@2x.ea0a7dc5.png',
        oo = n.p + 'Lightbulb@3x.d47fac75.png',
        so = n.p + 'NoEntry.89a117a5.png',
        co = n.p + 'NoEntry@2x.6460d275.png',
        uo = n.p + 'NoEntry@3x.cf8e9465.png',
        po = n.p + 'Pencil.6ac7a9a5.png',
        mo = n.p + 'Pencil@2x.e6d394c5.png',
        go = n.p + 'Pencil@3x.7e45c2e5.png',
        fo = n.p + 'PiggyBank.571af825.png',
        bo = n.p + 'PiggyBank@2x.f6b3cb15.png',
        ho = n.p + 'PiggyBank@3x.f166bc15.png',
        yo = n.p + 'Plant.2e93bbb5.png',
        wo = n.p + 'Plant@2x.5660c145.png',
        vo = n.p + 'Plant@3x.60b66855.png',
        So = n.p + 'Puzzle.59175915.png',
        _o = n.p + 'Puzzle@2x.d2394395.png',
        ko = n.p + 'Puzzle@3x.ed9bd735.png',
        Fo = n.p + 'Ribbon.a0d66a65.png',
        Eo = n.p + 'Ribbon@2x.d981e095.png',
        Co = n.p + 'Ribbon@3x.d6c8e505.png',
        xo = n.p + 'Spheres.c33c7b95.png',
        Ko = n.p + 'Spheres@2x.6b6732f5.png',
        Po = n.p + 'Spheres@3x.5e58c985.png',
        Lo = n.p + 'Star.2714eb95.png',
        Do = n.p + 'Star@2x.25a57fd5.png',
        To = n.p + 'Star@3x.206f9d85.png',
        Oo = n.p + 'TrashCan.7ed17045.png',
        Io = n.p + 'TrashCan@2x.79c8ba35.png',
        Bo = n.p + 'TrashCan@3x.91184ba5.png',
        Ro = n.p + 'Wallet.0ca99435.png',
        Vo = n.p + 'Wallet@2x.d3b05545.png',
        zo = n.p + 'Wallet@3x.90c942f5.png',
        Ao = [1, 2, 3],
        Mo = Object.freeze({
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
        Uo = Object(Re.a)(Mo),
        Ho = Uo.reduce(function (e, a) {
          var n = Math.max.apply(Math, Ao)
          return (
            (e[a] = {
              aspectRatio: 1,
              image: { url: r[a], width: 36 * n, height: 36 * n },
              customVariants: Ao.map(function (e) {
                return { uri: r[a + (1 !== e ? ''.concat(e, 'x') : '')], width: 36 * e, height: 36 * e }
              }),
            }),
            e
          )
        }, {}),
        No = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? 36 : n,
            r = Ho[a],
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
        jo = function (e) {
          var a = e.children,
            n = e.childrenStyle,
            t = e.headline,
            r = e.illustration,
            l = e.rightControl
          return c.a.createElement(
            C.a,
            { style: Wo.root },
            r && c.a.createElement(No, { type: r, width: 36 }),
            c.a.createElement(
              C.a,
              { style: Wo.header },
              c.a.createElement(
                A.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: Wo.headline,
                  weight: 'heavy',
                },
                t,
              ),
              l,
            ),
            c.a.createElement(C.a, { style: n }, a),
          )
        },
        Wo = K.a.create(function (e) {
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
        Go = ['$refType'],
        qo = p.a.a6777c1b,
        Qo = p.a.a384fda0,
        Xo = p.a.i4313618,
        Yo = p.a.c0348963,
        Zo = p.a.ic624ab2,
        Jo = p.a.ifc9b709,
        $o = p.a.b08bbeb4,
        es = p.a.ia9c37c4,
        as = p.a.fb1e4eb6,
        ns = p.a.be54a312,
        ts = p.a.cca48545,
        rs = p.a.de67bc6e,
        ls = p.a.a46cead5,
        is = p.a.idd8ae44,
        os = p.a.b28a1b48,
        ss = p.a.f2df375b,
        cs = p.a.f3ce76c0,
        us = p.a.i8982e7e,
        ds = p.a.ca5ca5ed,
        ps = p.a.abd845fd,
        ms = p.a.i859a9d3,
        gs = p.a.d14c7bbc,
        fs = p.a.g867481d,
        bs = p.a.f66d24be,
        hs = p.a.g5925628,
        ys = void 0 !== Vr ? Vr : (Vr = n('EM6u')),
        ws = void 0 !== zr ? zr : (zr = n('oNwH')),
        vs = function (e) {
          var a,
            n,
            t,
            r = e.priceOfferings,
            l = e.user,
            i = Object(E.g)(),
            o = Y()(ys, r),
            s = (o.$refType, h()(o, Go)),
            u = Y()(ws, l),
            d = Ql(u),
            p = Xl(u),
            m = null !== (a = Yl(u)) && void 0 !== a ? a : 'offer2',
            g = null !== (n = u.legacy.profile_image_url_https) && void 0 !== n ? n : void 0,
            f = null !== (t = u.legacy.screen_name) && void 0 !== t ? t : void 0,
            b = c.a.createElement(Sl, {
              label: ds,
              path: '/settings/superfollows/management/perks_confirm',
              size: 'subtext1',
            }),
            y = c.a.createElement(Q, {
              label: ps,
              path: '/settings/superfollows/management/perks_intro',
              size: 'small',
              type: 'primaryOutlined',
            }),
            w = c.a.createElement(Q, {
              label: ps,
              path: '/settings/superfollows/management/perks_description',
              size: 'small',
              type: 'primaryOutlined',
            })
          return c.a.createElement(
            Fi.a,
            null,
            c.a.createElement(
              Ei.a,
              { location: i, screenType: 'secondaryDetail', title: qo },
              c.a.createElement(
                C.a,
                { style: Ss.title },
                c.a.createElement(
                  A.b,
                  { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                  qo,
                ),
                c.a.createElement(xi, null),
              ),
              c.a.createElement(Cl.a, null),
              c.a.createElement(
                jo,
                { childrenStyle: Ss.benefits, headline: Qo, illustration: Mo.Ribbon, rightControl: b },
                c.a.createElement(A.b, { color: 'gray700' }, Xo),
                c.a.createElement(
                  Pi,
                  { headline: Yo, rightControl: y },
                  c.a.createElement(ar, { imageUrl: g, screenName: f, value: d }),
                ),
                c.a.createElement(
                  Pi,
                  { headline: Zo, rightControl: w },
                  c.a.createElement(ar, { imageUrl: g, screenName: f, value: p }),
                ),
                c.a.createElement(Pi, { headline: Jo }, c.a.createElement(A.b, { color: 'gray700' }, $o)),
              ),
              c.a.createElement(Cl.a, null),
              c.a.createElement(
                jo,
                { childrenStyle: Ss.other, headline: es, illustration: Mo.PiggyBank },
                c.a.createElement(A.b, { color: 'gray700' }, as),
                c.a.createElement(A.b, { size: 'headline2', weight: 'heavy' }, ns({ price: s[m] })),
                c.a.createElement(Di.a, { Icon: ki.a, action: { label: ms, link: S }, headline: ts, text: rs }),
              ),
              c.a.createElement(Cl.a, null),
              c.a.createElement(
                jo,
                { childrenStyle: Ss.other, headline: ls, illustration: Mo.Chat },
                c.a.createElement(A.b, { color: 'gray700' }, is),
                c.a.createElement(
                  C.a,
                  { style: Ss.buttons },
                  c.a.createElement(
                    _.a,
                    {
                      dominantColor: '#5865F2',
                      link: 'https://t.co/jPqvg6tFrDJG',
                      style: Ss.button,
                      type: 'onMediaDominantColorFilled',
                    },
                    gs,
                  ),
                ),
              ),
              c.a.createElement(Cl.a, null),
              c.a.createElement(
                jo,
                { childrenStyle: Ss.other, headline: os, illustration: Mo.Lightbulb },
                c.a.createElement(A.b, { color: 'gray700' }, ss),
                c.a.createElement(
                  C.a,
                  { style: Ss.buttons },
                  c.a.createElement(
                    _.a,
                    { link: 'https://t.co/RL2NN3bEVkes', style: Ss.button, type: 'primaryOutlined' },
                    fs,
                  ),
                ),
              ),
              c.a.createElement(Cl.a, null),
              c.a.createElement(
                jo,
                { childrenStyle: Ss.other, headline: cs, illustration: Mo.LifeSaver },
                c.a.createElement(A.b, { color: 'gray700' }, us),
                c.a.createElement(
                  C.a,
                  { style: Ss.buttons },
                  c.a.createElement(_.a, { link: v, style: Ss.button, type: 'primaryOutlined' }, bs),
                  c.a.createElement(
                    _.a,
                    {
                      link: 'https://help.twitter.com/forms/paid-features/superfollows',
                      style: Ss.button,
                      type: 'primaryOutlined',
                    },
                    hs,
                  ),
                ),
              ),
            ),
          )
        },
        Ss = K.a.create(function (e) {
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
        _s = void 0 !== Ar ? Ar : (Ar = n('N6s9')),
        ks = void 0 !== Mr ? Mr : (Mr = n('h3lO')),
        Fs = function (e) {
          var a = e.rootPath,
            n = e.user,
            t = e.viewer,
            r = Y()(_s, n),
            l = Y()(ks, t),
            i = Ql(r),
            o = Xl(r),
            s = Yl(r),
            u = ml(l),
            d = gl(l),
            p = fl(l),
            m = br(l, 'creator_intro'),
            g = br(l, 'description'),
            f = br(l, 'selected_price')
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
        Es = void 0 !== Ur ? Ur : (Ur = n('MXCg')),
        Cs = void 0 !== Hr ? Hr : (Hr = n('mEFY')),
        xs = void 0 !== Nr ? Nr : (Nr = n('d8Sa')),
        Ks = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(I.a).featureSwitches,
            l = Y()(Es, a),
            i = Y()(Cs, n),
            o = Y()(xs, t),
            s = Ql(i),
            u = Xl(i),
            d = Yl(i),
            p = Fs({ rootPath: '/settings/superfollows/management', user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (fr(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_edit_perks_enabled'))
          )
            throw new Error('Super Follows management is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(O.a, { to: '/settings/superfollows' })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(It, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  E.d,
                  null,
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/management/perks_intro' },
                    c.a.createElement(_i, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/management/perks_description' },
                    c.a.createElement(li, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/management/perks_confirm' },
                    c.a.createElement(Rl, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    E.b,
                    { path: '/settings/superfollows/management' },
                    c.a.createElement(vs, { priceOfferings: l, user: i }),
                  ),
                ),
              )
        },
        Ps = p.a.b422cb62,
        Ls = p.a.f08705e0,
        Ds = p.a.e2cd700f,
        Ts = p.a.fbfd7397,
        Os = p.a.c1df579e,
        Is = p.a.d8637c96,
        Bs = p.a.b92892dc,
        Rs = p.a.b123a502,
        Vs = void 0 !== jr ? jr : (jr = n('wQp3')),
        zs = void 0 !== Wr ? Wr : (Wr = n('tfBr')),
        As = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = Y()(Vs, n),
            l = Y()(zs, t),
            i = r.stripe_account_status,
            o = ml(l),
            s = gl(l),
            u = fl(l),
            d = [
              { label: Is, checked: !!o && !!s },
              { label: Bs, checked: !!u },
              { label: Rs, checked: 'Completed' === i },
            ],
            p = d.some(function (e) {
              return e.checked
            }),
            m = c.a.createElement(Q, {
              label: Os,
              path: '/settings/superfollows/onboarding/perks_intro',
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            D,
            {
              leftControlShouldClose: !0,
              percentageComplete: a,
              rightControl: m,
              withCenteredLogo: !0,
              withInfoButton: !0,
            },
            c.a.createElement(
              Rt,
              { style: Ms.interstitial },
              c.a.createElement(We, {
                headline: p ? Ds : Ps,
                illustration: p ? Ue.Puzzle : Ue.Cat,
                subtext: p ? Ts : Ls,
              }),
            ),
            c.a.createElement(Rt, { style: Ms.checks }, c.a.createElement(H, { items: d })),
          )
        },
        Ms = K.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        Us = ['style'],
        Hs = function (e) {
          var a = e.style,
            n = h()(e, Us)
          return c.a.createElement(
            qt,
            { style: a },
            c.a.createElement(Nt, f()({ style: Ns.exclusiveDemoVIPContentHeader }, n)),
          )
        },
        Ns = K.a.create(function (e) {
          return { exclusiveDemoVIPContentHeader: { alignSelf: 'center', marginBottom: e.spaces.space16 } }
        }),
        js = p.a.cda6bb6d,
        Ws = p.a.a15b98ec,
        Gs = void 0 !== Gr ? Gr : (Gr = n('mDly')),
        qs = function (e) {
          var a = e.user,
            n = Y()(Gs, a)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Rt, { style: Qs.interstitial }, c.a.createElement(We, { headline: js, subtext: Ws })),
            c.a.createElement(Cl.a, null),
            c.a.createElement(
              Rt,
              { style: Qs.previewCallout },
              c.a.createElement(El, { path: '/settings/superfollows/perks_preview' }),
            ),
            c.a.createElement(Hs, { style: Qs.preview, user: n }),
          )
        },
        Qs = K.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Xs = p.a.cd5cae15,
        Ys = p.a.ad4a92a2,
        Zs = p.a.c1df579e,
        Js = void 0 !== qr ? qr : (qr = n('QmjQ')),
        $s = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = { label: Zs, path: '/settings/superfollows/onboarding/perks_confirm', type: 'primaryFilled' },
            r = c.a.createElement(Q, t),
            l = c.a.createElement(Q, f()({}, t, { size: 'small' })),
            i = Y()(Js, n)
          return c.a.createElement(
            D,
            { percentageComplete: a, rightControl: l, subtitle: Ys, title: Xs },
            c.a.createElement(qs, { user: i }),
            c.a.createElement(Rt, { style: ec.buttons }, r),
          )
        },
        ec = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        ac = p.a.cd5cae15,
        nc = p.a.e18b7a71,
        tc = p.a.c1df579e,
        rc = void 0 !== Qr ? Qr : (Qr = n('Rthh')),
        lc = void 0 !== Xr ? Xr : (Xr = n('aREQ')),
        ic = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = Y()(rc, n),
            l = Y()(lc, t),
            i = { label: tc, path: '/settings/superfollows/onboarding/pricing', type: 'primaryFilled' },
            o = c.a.createElement(Q, i),
            s = c.a.createElement(Q, f()({}, i, { size: 'small' }))
          return c.a.createElement(
            D,
            { percentageComplete: a, rightControl: s, subtitle: nc, title: ac },
            c.a.createElement(Dl, { user: r, viewer: l }),
            c.a.createElement(Rt, { style: oc.buttons }, o),
          )
        },
        oc = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        sc = p.a.cd5cae15,
        cc = p.a.e36287c6,
        uc = p.a.be76dc33,
        dc = p.a.c1df579e,
        pc = void 0 !== Yr ? Yr : (Yr = n('6rkJ')),
        mc = void 0 !== Zr ? Zr : (Zr = n('tJ4s')),
        gc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = Y()(mc, t),
            i = Y()(pc, n),
            o = gl(l),
            s = o.length > 0 && o.length <= 140,
            u = {
              disabled: !s,
              label: dc,
              path: '/settings/superfollows/onboarding/perks_badges',
              type: 'primaryFilled',
            },
            d = c.a.createElement(Q, u),
            p = c.a.createElement(Q, f()({}, u, { size: 'small' })),
            m = {
              children: uc,
              onClick: function () {
                var e
                null == r || null === (e = r.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            g = c.a.createElement(_.a, m),
            b = c.a.createElement(_.a, f()({}, m, { size: 'small' }))
          return c.a.createElement(
            D,
            { percentageComplete: a, rightControl: s ? p : b, subtitle: cc, title: sc },
            c.a.createElement(Gl, { descriptionMaxLength: 140, ref: r, user: i, viewer: l }),
            c.a.createElement(Rt, { style: fc.buttons }, s ? d : g),
          )
        },
        fc = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        bc = p.a.cd5cae15,
        hc = p.a.c0348963,
        yc = p.a.ef5406e3,
        wc = p.a.c1df579e,
        vc = void 0 !== Jr ? Jr : (Jr = n('02qo')),
        Sc = void 0 !== $r ? $r : ($r = n('TXsE')),
        _c = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = Y()(vc, n),
            i = Y()(Sc, t),
            o = ml(i),
            s = o.length > 0 && o.length <= 140,
            u = {
              disabled: !s,
              label: wc,
              path: '/settings/superfollows/onboarding/perks_description',
              type: 'primaryFilled',
            },
            d = c.a.createElement(Q, u),
            p = c.a.createElement(Q, f()({}, u, { size: 'small' })),
            m = {
              children: yc,
              onClick: function () {
                var e
                null == r || null === (e = r.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            g = c.a.createElement(_.a, m),
            b = c.a.createElement(_.a, f()({}, m, { size: 'small' }))
          return c.a.createElement(
            D,
            { percentageComplete: a, rightControl: s ? p : b, subtitle: hc, title: bc },
            c.a.createElement(fi, { introMaxLength: 140, ref: r, user: l, viewer: i }),
            c.a.createElement(Rt, { style: kc.buttons }, s ? d : g),
          )
        },
        kc = K.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Fc = ['$refType'],
        Ec = p.a.ea8a3d2d,
        Cc = p.a.f77bb178,
        xc = p.a.cd75a5d4,
        Kc = p.a.g9677c6d,
        Pc = p.a.abd845fd,
        Lc = void 0 !== el ? el : (el = n('IeZm')),
        Dc = void 0 !== al ? al : (al = n('7ESn')),
        Tc = void 0 !== nl ? nl : (nl = n('By/j')),
        Oc = function (e) {
          var a,
            n = e.percentageComplete,
            t = e.priceOfferings,
            r = e.viewer,
            l = Y()(Lc, t),
            i = (l.$refType, h()(l, Fc)),
            o = Y()(Dc, r),
            s = ml(o),
            u = gl(o),
            d = null !== (a = fl(o)) && void 0 !== a ? a : i[0],
            p = tt()(Tc),
            m = G()(p, 2),
            g = m[0],
            f = m[1]
          return c.a.createElement(
            D,
            { percentageComplete: n, title: Ec, withInfoButton: !0 },
            c.a.createElement(
              Rt,
              { style: Ic.interstitial },
              c.a.createElement(We, { headline: Cc({ price: i[d] }), illustration: Ue.Pricing, subtext: xc }),
            ),
            c.a.createElement(
              Rt,
              { style: Ic.buttons },
              c.a.createElement(Q, {
                disabled: f,
                label: Kc,
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
                path: '/settings/superfollows/onboarding/stripe_setup',
                type: 'primaryFilled',
              }),
              c.a.createElement(Q, {
                disabled: f,
                label: Pc,
                path: '/settings/superfollows/onboarding/pricing',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        Ic = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        Bc = (n('+KXO'), n('7xRU'), n('hznd')),
        Rc = ['$refType'],
        Vc = p.a.ea8a3d2d,
        zc = p.a.ic9124bf,
        Ac = p.a.g5923869,
        Mc = {
          offer1: [p.a.f025ab39, p.a.c5602dfd],
          offer2: [p.a.ib075804, p.a.j8a72f06],
          offer3: [p.a.c246656e, p.a.a92ab16c],
        },
        Uc = p.a.c1df579e,
        Hc = void 0 !== tl ? tl : (tl = n('5jO1')),
        Nc = void 0 !== rl ? rl : (rl = n('mKqc')),
        jc = function (e) {
          var a = e.percentageComplete,
            n = e.priceOfferings,
            t = e.viewer,
            r = Y()(Hc, n),
            l = (r.$refType, h()(r, Rc)),
            i = Y()(Nc, t),
            o = fl(i),
            s = br(i, 'selected_price'),
            u = c.a.createElement(
              p.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              c.a.createElement(A.b, { link: v }, p.a.c336b06a),
            ),
            d = Object.keys(l).map(function (e) {
              return { label: Ac({ price: l[e] }), value: e, helpText: Mc[e].join(' ') }
            }),
            m = c.a.createElement(Q, {
              disabled: !o,
              label: Uc,
              path: '/settings/superfollows/onboarding/pricing_confirm',
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            D,
            { percentageComplete: a, rightControl: m, title: Vc, withInfoButton: !0 },
            c.a.createElement(Rt, { style: Wc.interstitial }, c.a.createElement(We, { headline: zc, subtext: u })),
            c.a.createElement(
              Rt,
              { style: Wc.prices },
              c.a.createElement(Bc.a, {
                accessibilityLabel: zc,
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
        Wc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        Gc = p.a.f1cb36b8,
        qc = p.a.e20f6661,
        Qc = p.a.a9ee1ecc,
        Xc = p.a.b772cd65,
        Yc = function (e) {
          var a = e.percentageComplete
          return c.a.createElement(
            D,
            { leftControlShouldClose: !0, percentageComplete: a, title: Gc, withInfoButton: !0 },
            c.a.createElement(
              Rt,
              { style: Zc.interstitial },
              c.a.createElement(We, { headline: qc, illustration: Ue.Thumbsup, subtext: Qc }),
            ),
            c.a.createElement(
              Rt,
              { style: Zc.buttons },
              c.a.createElement(Q, { label: Xc, path: '/settings/monetization', type: 'primaryFilled' }),
            ),
          )
        },
        Zc = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Jc = p.a.e2cd700f,
        $c = p.a.d6bfb60c,
        eu = p.a.b9cbb370,
        au = function () {
          return c.a.createElement(
            D,
            { withInfoButton: !0 },
            c.a.createElement(We, { headline: Jc, illustration: Ue.Puzzle, subtext: $c }),
            c.a.createElement(Q, { label: eu, path: '/settings/superfollows/onboarding/stripe_setup' }),
          )
        },
        nu = n('8jkQ'),
        tu = p.a.f1cb36b8,
        ru = p.a.ja884230,
        lu = p.a.af1b808d,
        iu = p.a.fe339750,
        ou = p.a.j912510a,
        su = void 0 !== ll ? ll : (ll = n('xHLM')),
        cu = function (e) {
          var a = e.percentageComplete,
            n = tt()(su),
            t = G()(n, 2),
            r = t[0],
            l = t[1],
            i = function () {
              r({
                variables: {},
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && nu.b.navigateTo(n)
                },
              })
            }
          return c.a.createElement(
            D,
            { percentageComplete: a, title: tu, withInfoButton: !0 },
            c.a.createElement(
              Rt,
              { style: uu.interstitial },
              c.a.createElement(We, { headline: ru, illustration: Ue.CoinStairs, subtext: lu }),
            ),
            c.a.createElement(
              Rt,
              { style: uu.buttons },
              c.a.createElement(_.a, { disabled: l, onPress: i, type: 'primaryFilled' }, iu),
              c.a.createElement(_.a, { disabled: l, onPress: i, type: 'primaryOutlined' }, ou),
            ),
          )
        },
        uu = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        du = void 0 !== il ? il : (il = n('UNVS')),
        pu = void 0 !== ol ? ol : (ol = n('6byF')),
        mu = void 0 !== sl ? sl : (sl = n('dNhZ')),
        gu = function (e) {
          return e / 8
        },
        fu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(I.a).featureSwitches,
            l = Y()(du, a),
            i = Y()(pu, n),
            o = Y()(mu, t),
            s = Ql(i),
            u = Xl(i),
            d = Yl(i),
            p = Fs({ rootPath: '/settings/monetization', user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (fr(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_onboarding_enabled'))
          )
            throw new Error('Super Follows onboarding is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(O.a, { to: '/settings/superfollows' })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(It, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  E.d,
                  null,
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/perks_intro' },
                    c.a.createElement(_c, { percentageComplete: gu(1), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/perks_description' },
                    c.a.createElement(gc, { percentageComplete: gu(2), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/perks_badges' },
                    c.a.createElement($s, { percentageComplete: gu(3), user: i }),
                  ),
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/perks_confirm' },
                    c.a.createElement(ic, { percentageComplete: gu(4), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/pricing' },
                    c.a.createElement(jc, { percentageComplete: gu(5), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/pricing_confirm' },
                    c.a.createElement(Oc, { percentageComplete: gu(6), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/stripe_setup' },
                    c.a.createElement(cu, { percentageComplete: gu(7) }),
                  ),
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/stripe_incomplete' },
                    c.a.createElement(au, null),
                  ),
                  c.a.createElement(
                    E.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/stripe_completed' },
                    c.a.createElement(Yc, { percentageComplete: gu(8) }),
                  ),
                  c.a.createElement(
                    E.b,
                    { path: '/settings/superfollows/onboarding' },
                    c.a.createElement(As, { percentageComplete: gu(0), user: i, viewer: o }),
                  ),
                ),
              )
        },
        bu = p.a.ebfb897c,
        hu = p.a.dc4feb19,
        yu = p.a.c183d271,
        wu = p.a.ic130fd5,
        vu = p.a.dd913e24,
        Su = p.a.h580543e,
        _u = function () {
          return c.a.createElement(
            D,
            { title: bu },
            c.a.createElement(Rt, { style: ku.interstitial }, c.a.createElement(We, { headline: hu, subtext: yu })),
            c.a.createElement(
              Rt,
              { style: ku.exampleDescriptions },
              c.a.createElement(Cl.a, null),
              c.a.createElement(ar, { value: wu }),
              c.a.createElement(Cl.a, null),
              c.a.createElement(ar, { value: vu }),
              c.a.createElement(Cl.a, null),
              c.a.createElement(ar, { value: Su }),
            ),
          )
        },
        ku = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        Fu = n('JWc1'),
        Eu = p.a.ebfb897c,
        Cu = p.a.dc4feb19,
        xu = p.a.a0bb2076,
        Ku = p.a.ace46d40,
        Pu = p.a.h2c4511f,
        Lu = p.a.hbe4f99e,
        Du = K.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        Tu = function () {
          return c.a.createElement(
            D,
            { title: Eu },
            c.a.createElement(Rt, { style: Du.interstitial }, c.a.createElement(We, { headline: Cu, subtext: xu })),
            c.a.createElement(
              Rt,
              { style: Du.exampleIntros },
              c.a.createElement(Fu.a, { value: Ku }),
              c.a.createElement(Fu.a, { value: Pu }),
              c.a.createElement(Fu.a, { value: Lu }),
            ),
          )
        },
        Ou = n('VTDR'),
        Iu = n('a2Fh'),
        Bu = p.a.hf6f2913,
        Ru = p.a.fb278c81,
        Vu = p.a.e6b60e94,
        zu = K.a.create(function (e) {
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
        Au = function () {
          return c.a.createElement(
            D,
            { title: Bu },
            c.a.createElement(Rt, { style: zu.interstitial }, c.a.createElement(We, { headline: Ru, subtext: Vu })),
            c.a.createElement(
              qt,
              { style: zu.preview },
              c.a.createElement(
                Ou.a,
                null,
                c.a.createElement(Iu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Iu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Iu.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: zu.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        Mu = p.a.aa7e35ed,
        Uu = p.a.f67e69bf,
        Hu = function () {
          if (!c.a.useContext(I.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            D,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Rt,
              { style: Nu.interstitial },
              c.a.createElement(We, { headline: Mu, illustration: Ue.Uturn, subtext: Uu }),
            ),
          )
        },
        Nu = K.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        ju = p.a.d3d6c52c,
        Wu = p.a.c53e9129,
        Gu = function () {
          if (!c.a.useContext(I.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            D,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            c.a.createElement(
              Rt,
              { style: qu.interstitial },
              c.a.createElement(We, { headline: ju, illustration: Ue.PaperAirplane, subtext: Wu }),
            ),
          )
        },
        qu = K.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Qu = p.a.j274e6aa,
        Xu = p.a.d7f65127,
        Yu = function () {
          if (!c.a.useContext(I.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            D,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Rt,
              { style: Zu.interstitial },
              c.a.createElement(We, { headline: Qu, illustration: Ue.Bench, subtext: Xu }),
            ),
          )
        },
        Zu = K.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Ju = void 0 !== cl ? cl : (cl = n('nEN5')),
        $u = void 0 !== ul ? ul : (ul = n('toKZ')),
        ed = void 0 !== dl ? dl : (dl = n('ucRr')),
        ad = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = Y()(Ju, a),
            l = Y()($u, n),
            i = Y()(ed, t),
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
              c.a.createElement(Kt, { user: l, viewer: i }),
            ),
            c.a.createElement(
              E.b,
              { path: '/settings/superfollows/onboarding' },
              c.a.createElement(fu, { priceOfferings: r, user: l, viewer: i }),
            ),
            c.a.createElement(
              E.b,
              { path: '/settings/superfollows/management' },
              c.a.createElement(Ks, { priceOfferings: r, user: l, viewer: i }),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/submitted' },
              c.a.createElement(Gu, null),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/waitlisted' },
              c.a.createElement(Yu, null),
            ),
            c.a.createElement(E.b, { exact: !0, path: '/settings/superfollows/rejected' }, c.a.createElement(Hu, null)),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/perks_intro_examples' },
              c.a.createElement(Tu, null),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/perks_description_examples' },
              c.a.createElement(_u, null),
            ),
            c.a.createElement(
              E.b,
              { exact: !0, path: '/settings/superfollows/perks_preview' },
              c.a.createElement(Au, null),
            ),
            c.a.createElement(E.b, { exact: !0, path: '/settings/superfollows' }, c.a.createElement(O.a, { to: o })),
          )
        },
        nd = n('n0Rl'),
        td = n('q9Zt'),
        rd = p.a.hae1c933,
        ld = void 0 !== pl ? pl : (pl = n('G8I5')),
        id = Object(nd.b)(ld, { errorConfig: { context: 'SUPER_FOLLOWS_SETTINGS' } }),
        od = K.a.create(function (e) {
          return { error: { marginHorizontal: e.spaces.space32 } }
        })
      a.default = function () {
        return c.a.createElement(id, {
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
                  : c.a.createElement(ad, { priceOfferings: i, user: o, viewer: s })
              },
              renderFailure: function () {
                return c.a.createElement(D, null, c.a.createElement(td.a, { onRetry: l, style: od.error, title: rd }))
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
        w = (n('2G9S'), n('ERkP')),
        v = n.n(w),
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
        D = n('aITJ'),
        T = n('MWbm'),
        O = n('n5fo'),
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
                D.b.isKaiOS() && 'Backspace' === e.key && n ? (t._blurOnBackspaceKeyUpForKaiOS = n) : a && a(e)
              }),
              y()(p()(t), '_handleKeyUp', function (e) {
                var a = t.props.onKeyUp
                D.b.isKaiOS() &&
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
                    return v.a.createElement(
                      T.a,
                      { style: [W.root, l] },
                      v.a.createElement(
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
                        v.a.createElement(
                          T.a,
                          { style: W.textInputFormWrapper },
                          v.a.createElement(
                            T.a,
                            { style: W.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      v.a.createElement(
                        T.a,
                        { style: [W.sidePadding, W.underTextInputForm] },
                        v.a.createElement(
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
                    return v.a.createElement(
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
                    return v.a.createElement(
                      T.a,
                      { style: j.container },
                      a && !this._isLabelLarge() ? this._renderIcon() : null,
                      v.a.createElement(
                        _.b,
                        { size: 'headline1', style: j.wrapper },
                        v.a.createElement(
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
                      ? v.a.createElement(
                          T.a,
                          { style: W.passwordVisibilityIconContainer },
                          v.a.createElement(k.a, {
                            accessibilityLabel: t ? H : U,
                            focusable: !0,
                            hoverLabel: { label: t ? H : U },
                            icon: t ? v.a.createElement(O.a, null) : v.a.createElement(I.a, null),
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
                    return v.a.createElement(
                      T.a,
                      { accessibilityLiveRegion: 'polite' },
                      v.a.createElement(
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
                    return v.a.createElement(
                      T.a,
                      { accessibilityLiveRegion: 'assertive' },
                      v.a.createElement(
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
                    return v.a.createElement(
                      T.a,
                      { accessibilityLiveRegion: 'polite', style: [W.textInputHeaderItem, W.displayCount] },
                      v.a.createElement(
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
                    return e && v.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? v.a.createElement(B.a, { style: [W.validationIcon, F.a.invalidColor] })
                      : v.a.createElement(R.a, { style: [W.validationIcon, F.a.validColor] })
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
        })(v.a.Component)
      y()(N, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (N.propTypes = {})
      var j = L.a.create(function (e) {
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
