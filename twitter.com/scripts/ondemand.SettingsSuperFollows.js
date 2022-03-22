;(window.webpackJsonp = window.webpackJsonp || []).push([
  [239],
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
        L = n('/yvb'),
        P = n('rHpw'),
        D = F.a.i2209530,
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
                          b.a.createElement(L.a, { disabled: r, onPress: t, style: T.button, testID: C, type: i }, l),
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
      g()(O, 'defaultProps', { submitLabel: D, submitType: 'brandFilled', withMarginBottom: !0 })
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
      a.a = S(O)
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
            id: 'KeMX4jEAtDMFausLpOA6NQ',
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
        L = n('yw4N'),
        P = n('TnY3'),
        D = n('cHvH'),
        O = n('3xLC'),
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
                  return v.a.createElement(D.a, null, function (a) {
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
                    L = n.withDetailOpen,
                    P = n.withSearchBox,
                    D = n.withTweetButton,
                    O = 'root' === g,
                    T = 'secondaryRoot' === g,
                    B = 'primaryDetail' === g,
                    I = (B && w) || (O && y),
                    R = O || (B && a),
                    z = O ? h.c : B ? h.a : void 0,
                    V = v.a.createElement(
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
                        titleDomId: z,
                        titleIconCell: E,
                        titleIconCellSize: C,
                      }),
                    ),
                    A =
                      O || (T && L)
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
                            withSearchBox: P,
                            withTweetButton: D,
                          })
                  return v.a.createElement(v.a.Fragment, null, A, V)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()(B, 'contextType', O.a),
        b()(B, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      a.a = Object(P.a)(B)
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
          { args: null, kind: 'FragmentSpread', name: 'SuperFollowsDemoBadge_user' },
        ],
        type: 'User',
        abstractKey: null,
        hash: '5eb94a8490e241b35465cafd6beb4007',
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
        selections: [{ args: null, kind: 'FragmentSpread', name: 'SuperFollowsDemoBadge_user' }],
        type: 'User',
        abstractKey: null,
        hash: '9dcbeaa0d9b61f23947c62afe7355e86',
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
          return hd
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return ce
        }),
        n.d(t, 'Arrow2x', function () {
          return ue
        }),
        n.d(t, 'Arrow3x', function () {
          return de
        }),
        n.d(t, 'Bench', function () {
          return pe
        }),
        n.d(t, 'Bench2x', function () {
          return me
        }),
        n.d(t, 'Bench3x', function () {
          return ge
        }),
        n.d(t, 'Cat', function () {
          return fe
        }),
        n.d(t, 'Cat2x', function () {
          return be
        }),
        n.d(t, 'Cat3x', function () {
          return he
        }),
        n.d(t, 'Clipboard', function () {
          return ye
        }),
        n.d(t, 'Clipboard2x', function () {
          return ve
        }),
        n.d(t, 'Clipboard3x', function () {
          return we
        }),
        n.d(t, 'CoinStairs', function () {
          return Se
        }),
        n.d(t, 'CoinStairs2x', function () {
          return _e
        }),
        n.d(t, 'CoinStairs3x', function () {
          return ke
        }),
        n.d(t, 'HandCoins', function () {
          return Fe
        }),
        n.d(t, 'HandCoins2x', function () {
          return Ee
        }),
        n.d(t, 'HandCoins3x', function () {
          return Ce
        }),
        n.d(t, 'OneFinger', function () {
          return xe
        }),
        n.d(t, 'OneFinger2x', function () {
          return Ke
        }),
        n.d(t, 'OneFinger3x', function () {
          return Le
        }),
        n.d(t, 'PaperAirplane', function () {
          return Pe
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return De
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return Oe
        }),
        n.d(t, 'Pricing', function () {
          return Te
        }),
        n.d(t, 'Pricing2x', function () {
          return Be
        }),
        n.d(t, 'Pricing3x', function () {
          return Ie
        }),
        n.d(t, 'Puzzle', function () {
          return Re
        }),
        n.d(t, 'Puzzle2x', function () {
          return ze
        }),
        n.d(t, 'Puzzle3x', function () {
          return Ve
        }),
        n.d(t, 'Thumbsup', function () {
          return Ae
        }),
        n.d(t, 'Thumbsup2x', function () {
          return Me
        }),
        n.d(t, 'Thumbsup3x', function () {
          return Ue
        }),
        n.d(t, 'TrafficLight', function () {
          return He
        }),
        n.d(t, 'TrafficLight2x', function () {
          return je
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Ne
        }),
        n.d(t, 'Uturn', function () {
          return We
        }),
        n.d(t, 'Uturn2x', function () {
          return Ge
        }),
        n.d(t, 'Uturn3x', function () {
          return qe
        })
      var r = {}
      n.r(r),
        n.d(r, 'Chat', function () {
          return Ni
        }),
        n.d(r, 'Chat2x', function () {
          return Wi
        }),
        n.d(r, 'Chat3x', function () {
          return Gi
        }),
        n.d(r, 'Cog', function () {
          return qi
        }),
        n.d(r, 'Cog2x', function () {
          return Qi
        }),
        n.d(r, 'Cog3x', function () {
          return Xi
        }),
        n.d(r, 'Coin', function () {
          return Zi
        }),
        n.d(r, 'Coin2x', function () {
          return Yi
        }),
        n.d(r, 'Coin3x', function () {
          return Ji
        }),
        n.d(r, 'CoinPurse', function () {
          return $i
        }),
        n.d(r, 'CoinPurse2x', function () {
          return eo
        }),
        n.d(r, 'CoinPurse3x', function () {
          return ao
        }),
        n.d(r, 'Cone', function () {
          return no
        }),
        n.d(r, 'Cone2x', function () {
          return to
        }),
        n.d(r, 'Cone3x', function () {
          return ro
        }),
        n.d(r, 'Cross', function () {
          return lo
        }),
        n.d(r, 'Cross2x', function () {
          return io
        }),
        n.d(r, 'Cross3x', function () {
          return oo
        }),
        n.d(r, 'FirstAid', function () {
          return so
        }),
        n.d(r, 'FirstAid2x', function () {
          return co
        }),
        n.d(r, 'FirstAid3x', function () {
          return uo
        }),
        n.d(r, 'Heart', function () {
          return po
        }),
        n.d(r, 'Heart2x', function () {
          return mo
        }),
        n.d(r, 'Heart3x', function () {
          return go
        }),
        n.d(r, 'LifeSaver', function () {
          return fo
        }),
        n.d(r, 'LifeSaver2x', function () {
          return bo
        }),
        n.d(r, 'LifeSaver3x', function () {
          return ho
        }),
        n.d(r, 'Lightbulb', function () {
          return yo
        }),
        n.d(r, 'Lightbulb2x', function () {
          return vo
        }),
        n.d(r, 'Lightbulb3x', function () {
          return wo
        }),
        n.d(r, 'NoEntry', function () {
          return So
        }),
        n.d(r, 'NoEntry2x', function () {
          return _o
        }),
        n.d(r, 'NoEntry3x', function () {
          return ko
        }),
        n.d(r, 'Pencil', function () {
          return Fo
        }),
        n.d(r, 'Pencil2x', function () {
          return Eo
        }),
        n.d(r, 'Pencil3x', function () {
          return Co
        }),
        n.d(r, 'PiggyBank', function () {
          return xo
        }),
        n.d(r, 'PiggyBank2x', function () {
          return Ko
        }),
        n.d(r, 'PiggyBank3x', function () {
          return Lo
        }),
        n.d(r, 'Plant', function () {
          return Po
        }),
        n.d(r, 'Plant2x', function () {
          return Do
        }),
        n.d(r, 'Plant3x', function () {
          return Oo
        }),
        n.d(r, 'Puzzle', function () {
          return To
        }),
        n.d(r, 'Puzzle2x', function () {
          return Bo
        }),
        n.d(r, 'Puzzle3x', function () {
          return Io
        }),
        n.d(r, 'Ribbon', function () {
          return Ro
        }),
        n.d(r, 'Ribbon2x', function () {
          return zo
        }),
        n.d(r, 'Ribbon3x', function () {
          return Vo
        }),
        n.d(r, 'Spheres', function () {
          return Ao
        }),
        n.d(r, 'Spheres2x', function () {
          return Mo
        }),
        n.d(r, 'Spheres3x', function () {
          return Uo
        }),
        n.d(r, 'Star', function () {
          return Ho
        }),
        n.d(r, 'Star2x', function () {
          return jo
        }),
        n.d(r, 'Star3x', function () {
          return No
        }),
        n.d(r, 'TrashCan', function () {
          return Wo
        }),
        n.d(r, 'TrashCan2x', function () {
          return Go
        }),
        n.d(r, 'TrashCan3x', function () {
          return qo
        }),
        n.d(r, 'Wallet', function () {
          return Qo
        }),
        n.d(r, 'Wallet2x', function () {
          return Xo
        }),
        n.d(r, 'Wallet3x', function () {
          return Zo
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
        L = n('3XMw'),
        P = n.n(L),
        D = n('lUZE'),
        O = 'https://help.twitter.com/using-twitter/super-follows-creator',
        T = ''.concat(O, '#pricechange'),
        B = n('/yvb'),
        I = n('6s7X'),
        R = function () {
          return c.a.createElement(B.a, { icon: c.a.createElement(I.a, null), link: O, type: 'primaryText' })
        },
        z = n('zCf4'),
        V = n('MWbm'),
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
        H = P.a.a6777c1b,
        j = function (e) {
          var a = e.leftControlShouldClose,
            n = e.percentageComplete,
            t = e.rightControl,
            r = e.screenRef,
            l = e.withCenteredLogo,
            i = e.withInfoButton,
            o = b()(e, U),
            s = Object(z.f)(),
            u = a ? 'close' : 'back',
            d = h,
            p = l ? c.a.createElement(D.a, { style: N.iconTwitter }) : void 0,
            m = i ? c.a.createElement(V.a, { style: N.rightControl }, c.a.createElement(R, null), t) : t,
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
                documentTitle: H,
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
        q = P.a.g92a2343,
        Q = P.a.a91bb144,
        X = function () {
          var e = Object(z.f)(),
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
          return c.a.createElement(j, { rightControl: a, title: q })
        },
        Z = (n('jQ3i'), n('x4t0'), n('855f')),
        Y = (n('z84I'), n('t62R')),
        J = n('WtWS'),
        $ = n('0ULw'),
        ee = function (e) {
          var a = e.items
          return c.a.createElement(
            V.a,
            { style: ae.root },
            a.map(function (e) {
              return c.a.createElement(
                V.a,
                { key: e.label, style: ae.item },
                c.a.createElement(Y.b, { style: ae.label, weight: 'bold' }, e.label),
                e.checked
                  ? c.a.createElement(J.a, { style: ae.iconChecked })
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
            Y.b,
            { align: 'center', color: 'gray700' },
            c.a.createElement(
              P.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              c.a.createElement(
                Y.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                P.a.ebc0cbbc,
              ),
            ),
          )
        },
        te = n('ddV6'),
        re = n.n(te),
        le = (n('7x/C'), n('JtPf'), n('Qavd'), ['disabled', 'label', 'onPress', 'path']),
        ie = function (e) {
          var a = e.disabled,
            n = e.label,
            t = e.onPress,
            r = e.path,
            l = b()(e, le),
            i = Object(z.f)(),
            o = c.a.useState(!1),
            s = re()(o, 2),
            u = s[0],
            d = s[1],
            p = function () {
              i.push(r)
            }
          return c.a.createElement(
            B.a,
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
        oe = n('jAXQ'),
        se = n.n(oe),
        ce = (n('KOtZ'), n.p + 'Arrow.e8910965.png'),
        ue = n.p + 'Arrow@2x.8af675c5.png',
        de = n.p + 'Arrow@3x.949d4365.png',
        pe = n.p + 'Bench.ed26a435.png',
        me = n.p + 'Bench@2x.ef9fb7d5.png',
        ge = n.p + 'Bench@3x.a306fd55.png',
        fe = n.p + 'Cat.089435a5.png',
        be = n.p + 'Cat@2x.bca70155.png',
        he = n.p + 'Cat@3x.2b225ef5.png',
        ye = n.p + 'Clipboard.540710d5.png',
        ve = n.p + 'Clipboard@2x.72ca72e5.png',
        we = n.p + 'Clipboard@3x.1b952e95.png',
        Se = n.p + 'CoinStairs.8488b245.png',
        _e = n.p + 'CoinStairs@2x.34fd5855.png',
        ke = n.p + 'CoinStairs@3x.1b706305.png',
        Fe = n.p + 'HandCoins.fbd23965.png',
        Ee = n.p + 'HandCoins@2x.c1b62b75.png',
        Ce = n.p + 'HandCoins@3x.7dd5f3d5.png',
        xe = n.p + 'OneFinger.6eb5d9c5.png',
        Ke = n.p + 'OneFinger@2x.a13e1ba5.png',
        Le = n.p + 'OneFinger@3x.7f22c175.png',
        Pe = n.p + 'PaperAirplane.1ef48a05.png',
        De = n.p + 'PaperAirplane@2x.2923eb15.png',
        Oe = n.p + 'PaperAirplane@3x.47e4b145.png',
        Te = n.p + 'Pricing.ec5962d5.png',
        Be = n.p + 'Pricing@2x.f8284265.png',
        Ie = n.p + 'Pricing@3x.b6cf0185.png',
        Re = n.p + 'Puzzle.aa045515.png',
        ze = n.p + 'Puzzle@2x.5be7ab15.png',
        Ve = n.p + 'Puzzle@3x.1796b225.png',
        Ae = n.p + 'Thumbsup.f5be79d5.png',
        Me = n.p + 'Thumbsup@2x.6d106945.png',
        Ue = n.p + 'Thumbsup@3x.6a81e6d5.png',
        He = n.p + 'TrafficLight.11644b65.png',
        je = n.p + 'TrafficLight@2x.5657de25.png',
        Ne = n.p + 'TrafficLight@3x.a5a35335.png',
        We = n.p + 'Uturn.c8267f55.png',
        Ge = n.p + 'Uturn@2x.db3f94d5.png',
        qe = n.p + 'Uturn@3x.22f27905.png',
        Qe = n('tn7R'),
        Xe = n('TIdA'),
        Ze = n('A91F'),
        Ye = 400,
        Je = [1, 2, 3],
        $e = Object.freeze({
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
        ea = Object(Qe.a)($e).reduce(function (e, a) {
          var n = Math.max.apply(Math, Je)
          return (
            (e[a] = {
              aspectRatio: 1.6,
              image: { url: t[a], width: Ye * n, height: 250 * n },
              customVariants: Je.map(function (e) {
                return { uri: t[a + (1 !== e ? ''.concat(e, 'x') : '')], width: Ye * e, height: 250 * e }
              }),
            }),
            e
          )
        }, {}),
        aa = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? Ye : n,
            r = ea[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            V.a,
            { style: [na.illustration, s] },
            c.a.createElement(Xe.a, {
              accessibilityLabel: '',
              aspectMode: Ze.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        na = M.a.create(function (e) {
          return { illustration: { alignSelf: 'center' } }
        }),
        ta = function (e) {
          var a = e.align,
            n = e.headline,
            t = e.illustration,
            r = e.subtext
          return c.a.createElement(
            c.a.Fragment,
            null,
            t && c.a.createElement(aa, { type: t, width: 311 }),
            c.a.createElement(
              Y.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title2',
                style: t && ra.headline,
                weight: 'heavy',
              },
              n,
            ),
            c.a.createElement(Y.b, { align: a, color: 'gray700', style: ra.subtext }, r),
          )
        },
        ra = M.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space8 } }
        }),
        la = P.a.feb54b4f,
        ia = P.a.bac156a6,
        oa = P.a.a3a20a10,
        sa = P.a.b26ae507,
        ca = P.a.a753a87f,
        ua = P.a.abfaa527,
        da = Z.a.getTruncatedCount(1e4),
        pa = P.a.fdd95737({ minFollowersCount: da }),
        ma = Z.a.getTruncatedCount(25),
        ga = P.a.a0dcad86({ minTweetsCount: ma }),
        fa = P.a.c27f57ac,
        ba = void 0 !== l ? l : (l = n('RLjm')),
        ha = function (e) {
          var a = e.user,
            n = se()(ba, a),
            t = (null == n ? void 0 : n.super_following_eligibility) || [],
            r = 0 === t.length,
            l = r ? $e.Arrow : $e.TrafficLight,
            i = r ? la : oa,
            o = r ? ia : sa,
            s = [
              { label: pa, checked: !t.includes('followers') },
              { label: ga, checked: !t.includes('tweets') },
              { label: fa, checked: !t.includes('age') },
            ]
          return c.a.createElement(
            j,
            { withInfoButton: !0 },
            c.a.createElement(ta, { headline: i, illustration: l, subtext: o }),
            c.a.createElement(ee, { items: s }),
            r && c.a.createElement(ne, null),
            c.a.createElement(ie, { disabled: !r, label: ca, path: v.oneMoreThing }),
            c.a.createElement(ie, { label: ua, path: v.oneMoreThing }),
          )
        },
        ya = n('9RkS'),
        va = P.a.bbb89925,
        wa = function (e) {
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
            V.a,
            { style: Sa.container },
            c.a.createElement(
              Y.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              c.a.createElement(
                P.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                c.a.createElement(Y.b, { weight: 'bold' }, P.a.a7dd00ea),
                c.a.createElement(
                  Y.b,
                  { style: Sa.earnings, weight: 'heavy' },
                  P.a.c62c1d30({ earnings: '$'.concat(Z.a.getTruncatedCount(p)) }),
                ),
                c.a.createElement(Y.b, { color: 'green500', style: Sa.asteriskLeft }, P.a.e0fb982b),
              ),
            ),
            c.a.createElement(
              V.a,
              { style: Sa.slider },
              c.a.createElement(ya.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: va({ percent: u }),
                value: u,
              }),
            ),
            c.a.createElement(
              Y.b,
              { color: 'green500', size: 'subtext3', style: Sa.footnote },
              c.a.createElement(
                P.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                c.a.createElement(Y.b, { style: Sa.asteriskRight }, P.a.e263c38e),
              ),
            ),
          )
        },
        Sa = M.a.create(function (e) {
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
        _a = n('6iuV'),
        ka = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        Fa = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return c.a.createElement(
            V.a,
            { style: Ea.container },
            c.a.createElement(ka.a, { Icon: a, color: 'neutral' }),
            c.a.createElement(Y.b, { size: 'headline2', style: Ea.title, weight: 'bold' }, t),
            c.a.createElement(Y.b, { color: 'gray700', style: Ea.description }, n),
          )
        },
        Ea = M.a.create(function (e) {
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
        Ca = n('sUoZ'),
        xa = n('witV'),
        Ka = n('ACHU'),
        La = [
          { Icon: Ca.a, title: P.a.d31c5997, description: P.a.hda1e780 },
          { Icon: xa.a, title: P.a.d08d0bb2, description: P.a.cbd8b105 },
          { Icon: Ka.a, title: P.a.becb4930, description: P.a.g743ef96 },
        ],
        Pa = function () {
          return c.a.createElement(
            _a.a,
            null,
            La.map(function (e) {
              return c.a.createElement(Fa, g()({}, e, { key: e.title }))
            }),
          )
        },
        Da = P.a.a6777c1b,
        Oa = P.a.j5dc36d7,
        Ta = P.a.c45b2f06,
        Ba = P.a.hb6b432e,
        Ia = P.a.cd5cae15,
        Ra = P.a.f7239f4c,
        za = P.a.g8cdf707,
        Va = P.a.bff8472e,
        Aa = P.a.e533715d,
        Ma = void 0 !== i ? i : (i = n('xd+q')),
        Ua = function (e) {
          var a = e.user,
            n = se()(Ma, a).legacy.followers_count
          return c.a.createElement(
            j,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            c.a.createElement(
              Y.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Da,
            ),
            c.a.createElement(Y.b, null, Oa),
            c.a.createElement(
              Y.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ta,
            ),
            c.a.createElement(Y.b, { color: 'gray700' }, Ba),
            c.a.createElement(aa, { type: $e.HandCoins }),
            c.a.createElement(
              Y.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ia,
            ),
            c.a.createElement(Pa, null),
            c.a.createElement(
              Y.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ra,
            ),
            c.a.createElement(wa, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            c.a.createElement(
              Y.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              za,
            ),
            c.a.createElement(Y.b, { color: 'gray700' }, Va),
            c.a.createElement(ie, { color: 'plum500', label: Aa, path: v.eligibility }),
          )
        },
        Ha = P.a.d0fc4890,
        ja = P.a.c64384b6,
        Na = P.a.c3d89aca,
        Wa = function () {
          return c.a.createElement(
            j,
            { withInfoButton: !0 },
            c.a.createElement(ta, { align: 'center', headline: Ha, illustration: $e.OneFinger, subtext: ja }),
            c.a.createElement(ie, { label: Na, path: v.completeProfile }),
          )
        },
        Ga = n('tI3i'),
        qa = n.n(Ga),
        Qa = n('FGLp'),
        Xa = (n('2G9S'), n('Hsf0')),
        Za = n.n(Xa),
        Ya = function (e) {
          return Za()(void 0 !== o ? o : (o = n('l/EB')), e).__id
        },
        Ja = function (e, a) {
          var n = Ya(a),
            t = e.get(n)
          return qa()(t, 'viewer must be defined'), t
        },
        $a = 'super_follows_application_draft',
        en = function (e, a) {
          return Ja(e, a).getLinkedRecord($a)
        },
        an = n('HG4m'),
        nn = n.n(an),
        tn = n('Ud88'),
        rn = n.n(tn)
      function ln(e, a) {
        var n = rn()()
        Object(Qa.a)(function () {
          qa()(e, 'viewerRef must be defined'),
            nn()(n, function (n) {
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
                  h = Ya(a),
                  y = Ja(e, a)
                if (!en(e, a)) {
                  var v = e.create(''.concat(h, ':').concat($a), 'SuperFollowsApplicationDraft')
                  v.setValue(r, 'content_category'),
                    v.setValue(i, 'content_category_other'),
                    v.setValue(s, 'content_creation_platform'),
                    v.setValue(u, 'content_creation_platform_other'),
                    v.setValue(b, 'purpose'),
                    v.setValue(p, 'ethnicity'),
                    v.setValue(g, 'gender'),
                    y.setLinkedRecord(v, $a)
                }
              })(n, e, a)
            })
        })
      }
      function on(e, a) {
        var n = rn()()
        return c.a.useCallback(
          function (t) {
            qa()(e, 'viewerRef must be defined'),
              nn()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = en(e, a)
                  qa()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var sn,
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
        vn,
        wn,
        Sn,
        _n = n('p+r5'),
        kn = P.a.f7997b16,
        Fn = P.a.fc00ab5b,
        En = P.a.c249167f,
        Cn = P.a.b772cd65,
        xn = void 0 !== sn ? sn : (sn = n('xhT1')),
        Kn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = se()(xn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = on(r, 'content_category_other')
          return c.a.createElement(
            j,
            { title: kn },
            c.a.createElement(_n.a, {
              helperText: En,
              label: Fn,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(B.a, null, Cn),
          )
        },
        Ln = n('fyvP'),
        Pn = n('csss'),
        Dn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(z.f)()
          return c.a.createElement(Pn.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        On = P.a.f7997b16,
        Tn = P.a.c144fa52,
        Bn = [
          P.a.b1f2e8ce,
          P.a.jfec3aa0,
          P.a.e08a6e6f,
          P.a.b743702c,
          P.a.h2401e36,
          P.a.ed7e6675,
          P.a.fecc3791,
          P.a.d80b0f11,
          P.a.b29a93b1,
          P.a.c5d190c0,
          P.a.i6dfc494,
          P.a.ff2b68ca,
          P.a.e404203c,
          P.a.ab389321,
          P.a.a46fdec4,
          P.a.add55c97,
          P.a.f28d8b06,
          P.a.c8ee31da,
          P.a.e0234d02,
          P.a.h9d38a08,
          P.a.fe6841bd,
          P.a.e031e06a,
          P.a.i5cade16,
          P.a.e084f2af,
          P.a.a9db15b2,
          P.a.d27beb9e,
          P.a.a92db4a9,
          P.a.fc64990d,
          P.a.hb5f1d64,
        ],
        In = P.a.c365dcc5,
        Rn = P.a.bd44a8a8,
        zn = void 0 !== cn ? cn : (cn = n('JB6R')),
        Vn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = se()(zn, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = on(r, 'content_category'),
            o = Bn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            j,
            { title: On },
            c.a.createElement(Ln.a, {
              description: Tn,
              label: Tn,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(Dn, { helpText: Rn, label: In, path: v.submitCategoriesOther }),
          )
        },
        An = P.a.d94a9a17,
        Mn = P.a.a35394b3,
        Un = [
          P.a.e375c2df,
          P.a.gf30371a,
          P.a.b3773d47,
          P.a.a45caf17,
          P.a.e5f515b8,
          P.a.e3b35497,
          P.a.i83206dc,
          P.a.a4ee9393,
          P.a.ab09972f,
          P.a.jafe3705,
        ],
        Hn = void 0 !== un ? un : (un = n('H1we')),
        jn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = se()(Hn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = on(r, 'ethnicity'),
            o = Un.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            j,
            { title: An },
            c.a.createElement(Ln.a, {
              description: Mn,
              label: Mn,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        Nn = P.a.a8d0108d,
        Wn = P.a.a35394b3,
        Gn = [
          P.a.de32365f,
          P.a.b6ab31bd,
          P.a.ffc23188,
          P.a.h1cc7091,
          P.a.hca27829,
          P.a.b3af7344,
          P.a.he3f1435,
          P.a.c3c16abb,
        ],
        qn = void 0 !== dn ? dn : (dn = n('VG5i')),
        Qn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = se()(qn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = on(r, 'gender'),
            o = Gn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            j,
            { title: Nn },
            c.a.createElement(Ln.a, {
              description: Wn,
              label: Wn,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        Xn = P.a.da8ea7da,
        Zn = P.a.d7081f91,
        Yn = P.a.j349548f,
        Jn = P.a.b772cd65,
        $n = void 0 !== pn ? pn : (pn = n('+OUG')),
        et = function (e) {
          var a,
            n,
            t = e.viewer,
            r = se()($n, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = on(r, 'content_creation_platform_other')
          return c.a.createElement(
            j,
            { title: Xn },
            c.a.createElement(_n.a, {
              helperText: Yn,
              label: Zn,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(B.a, null, Jn),
          )
        },
        at = P.a.da8ea7da,
        nt = P.a.d4062c9a,
        tt = [P.a.a3021317, P.a.eb4a600d, P.a.d4d74bb3, P.a.fc738909, P.a.d8552c1a, P.a.ca07aa46],
        rt = P.a.c365dcc5,
        lt = P.a.bd44a8a8,
        it = void 0 !== mn ? mn : (mn = n('xnrs')),
        ot = function (e) {
          var a,
            n,
            t = e.viewer,
            r = se()(it, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = on(r, 'content_creation_platform'),
            o = tt.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            j,
            { title: at },
            c.a.createElement(Ln.a, {
              description: nt,
              label: nt,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(Dn, { helpText: lt, label: rt, path: v.submitPlatformsOther }),
          )
        },
        st = (n('tVqn'), n('uFXj'), P.a.f4f4dd6f),
        ct = P.a.f448cbcb,
        ut = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? st : 'optional' === n ? ct : void 0
          return c.a.createElement(
            V.a,
            { style: dt.container },
            c.a.createElement(Y.b, { size: 'headline1', weight: 'heavy' }, a),
            r && c.a.createElement(Y.b, { color: t, size: 'subtext2', style: dt.subtext }, r),
          )
        },
        dt = M.a.create(function (e) {
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
        pt = n('jV+4'),
        mt = n('Xrkv'),
        gt = n('9SqB'),
        ft = n.n(gt),
        bt = P.a.e873f0ae,
        ht = P.a.f095a24a,
        yt = P.a.i5f7b6b8,
        vt = P.a.d1f6d336,
        wt = P.a.f7997b16,
        St = P.a.c144fa52,
        _t = P.a.f1bf337d,
        kt = P.a.da8ea7da,
        Ft = P.a.d4062c9a,
        Et = P.a.e963d587,
        Ct = P.a.ede0ac3e,
        xt = P.a.ffb6cb88,
        Kt = P.a.b2159e8e,
        Lt = P.a.feacb49d,
        Pt = P.a.je17c987,
        Dt = P.a.d94a9a17,
        Ot = P.a.a8d0108d,
        Tt = P.a.gfc80842,
        Bt = void 0 !== gn ? gn : (gn = n('pLb/')),
        It = void 0 !== fn ? fn : (fn = n('3qCL')),
        Rt = void 0 !== bn ? bn : (bn = n('AyUU')),
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
            d = se()(Bt, s),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = se()(It, u),
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
            k = on(m, 'purpose'),
            F = ft()(Rt),
            E = re()(F, 2),
            C = E[0],
            x = E[1]
          return c.a.createElement(
            j,
            { withInfoButton: !0 },
            c.a.createElement(ta, { headline: bt, illustration: $e.Clipboard, subtext: ht }),
            c.a.createElement(ut, { title: yt }),
            c.a.createElement(Y.b, null, vt),
            p && c.a.createElement(pt.a, { screenName: p }),
            c.a.createElement(ut, { title: wt, type: 'required' }),
            c.a.createElement(Y.b, { color: 'gray700' }, St),
            c.a.createElement(Dn, { description: Object(mt.a)(f, !0), label: _t, path: v.submitCategories }),
            c.a.createElement(ut, { title: kt, type: 'required' }),
            c.a.createElement(Y.b, { color: 'gray700' }, Ft),
            c.a.createElement(Dn, { description: Object(mt.a)(b, !0), label: Et, path: v.submitPlatforms }),
            c.a.createElement(ut, { title: Ct, type: 'required' }),
            c.a.createElement(_n.a, {
              helperText: Kt,
              label: xt,
              name: 'plannedUsage',
              onChange: function (e) {
                k(e.currentTarget.value)
              },
              value: h,
            }),
            c.a.createElement(ut, { title: Lt, type: 'optional' }),
            c.a.createElement(Y.b, { color: 'gray700' }, Pt),
            c.a.createElement(Dn, { description: Object(mt.a)(y, !0), label: Dt, path: v.submitEthnicities }),
            c.a.createElement(Dn, { description: Object(mt.a)(w, !0), label: Ot, path: v.submitGenders }),
            c.a.createElement(ne, null),
            c.a.createElement(ie, {
              disabled: !S || x,
              label: Tt,
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
        Vt = void 0 !== hn ? hn : (hn = n('o/nB')),
        At = void 0 !== yn ? yn : (yn = n('lZLw')),
        Mt = function (e) {
          var a = e.user,
            n = e.viewer,
            t = c.a.useContext(G.a).featureSwitches,
            r = se()(Vt, a),
            l = se()(At, n)
          if ((ln(l), !t.isTrue('super_follow_web_application_enabled')))
            throw new Error('Super Follows application is not enabled')
          return null == l.super_follows_application_draft
            ? c.a.createElement(W.a, { to: y })
            : c.a.createElement(
                z.d,
                null,
                c.a.createElement(z.b, { exact: !0, path: v.eligibility }, c.a.createElement(ha, { user: r })),
                c.a.createElement(z.b, { exact: !0, path: v.oneMoreThing }, c.a.createElement(Wa, null)),
                c.a.createElement(z.b, { exact: !0, path: v.completeProfile }, c.a.createElement(X, null)),
                c.a.createElement(z.b, { exact: !0, path: v.submit }, c.a.createElement(zt, { user: r, viewer: l })),
                c.a.createElement(z.b, { exact: !0, path: v.submitCategories }, c.a.createElement(Vn, { viewer: l })),
                c.a.createElement(
                  z.b,
                  { exact: !0, path: v.submitCategoriesOther },
                  c.a.createElement(Kn, { viewer: l }),
                ),
                c.a.createElement(z.b, { exact: !0, path: v.submitPlatforms }, c.a.createElement(ot, { viewer: l })),
                c.a.createElement(
                  z.b,
                  { exact: !0, path: v.submitPlatformsOther },
                  c.a.createElement(et, { viewer: l }),
                ),
                c.a.createElement(z.b, { exact: !0, path: v.submitEthnicities }, c.a.createElement(jn, { viewer: l })),
                c.a.createElement(z.b, { exact: !0, path: v.submitGenders }, c.a.createElement(Qn, { viewer: l })),
                c.a.createElement(z.b, { path: v.root }, c.a.createElement(Ua, { user: r })),
              )
        },
        Ut = (n('KqXw'), n('MvUL'), n('eb3s')),
        Ht = P.a.af4d0a80,
        jt = P.a.c701e5cc,
        Nt = P.a.a649778b,
        Wt = P.a.d4ab68e2,
        Gt = function (e) {
          var a = e.onNavigation,
            n = e.shouldBlockNavigation,
            t = Object(z.f)(),
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
            ? c.a.createElement(Ut.a, {
                cancelButtonLabel: Nt,
                confirmButtonLabel: Wt,
                confirmButtonType: 'destructiveFilled',
                headline: Ht,
                onCancel: u,
                onConfirm: d,
                text: jt,
              })
            : null
        },
        qt = n('cHvH'),
        Qt = function (e) {
          var a = e.children,
            n = e.style,
            t = Object(qt.b)().windowWidth > M.a.theme.breakpoints.medium ? Xt.marginWide : Xt.marginNarrow
          return c.a.createElement(V.a, { style: [n, t] }, a)
        },
        Xt = M.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space72 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        Zt =
          (n('ho0z'),
          function (e) {
            var a = e.children,
              n = e.style
            return c.a.createElement(
              V.a,
              { style: [$t.frame, n] },
              c.a.createElement(
                V.a,
                { style: $t.browserBar },
                c.a.createElement(
                  V.a,
                  { style: $t.browserBarButtons },
                  c.a.createElement(V.a, { style: $t.browserBarButton }),
                  c.a.createElement(V.a, { style: $t.browserBarButton }),
                  c.a.createElement(V.a, { style: $t.browserBarButton }),
                ),
                c.a.createElement(
                  V.a,
                  { style: $t.browserBarUrlInputWrapper },
                  c.a.createElement(V.a, { style: $t.browserBarUrlInput }),
                ),
              ),
              a,
            )
          }),
        Yt = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(V.a, { style: n }, c.a.createElement(V.a, { style: $t.content }, a))
        },
        Jt = function (e) {
          var a = e.children,
            n = e.style
          return Object(qt.b)().windowWidth > M.a.theme.breakpoints.medium
            ? c.a.createElement(Zt, { style: n }, c.a.createElement(Yt, { style: $t.contentWide }, a))
            : c.a.createElement(Yt, { style: n }, a)
        },
        $t = M.a.create(function (e) {
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
        er = n('01Kk'),
        ar = n('1k08'),
        nr = ['style'],
        tr = P.a.b600eb88,
        rr = P.a.b08bbeb4,
        lr = function (e) {
          var a = e.style,
            n = b()(e, nr),
            t = Object(qt.b)().windowWidth > M.a.theme.breakpoints.medium
          return c.a.createElement(
            V.a,
            { style: [ir.root, t && ir.rootWide, a] },
            c.a.createElement(ar.a, { description: rr, title: tr }),
            c.a.createElement(er.a, g()({}, n, { style: ir.superFollowsDemoBadge })),
          )
        },
        ir = M.a.create(function (e) {
          return {
            description: { marginTop: e.spaces.space8 },
            root: {
              paddingBottom: e.spaces.space16,
              paddingHorizontal: e.spaces.space32,
              paddingTop: e.spaces.space48,
            },
            rootWide: { paddingHorizontal: e.spaces.space48 },
            superFollowsDemoBadge: { alignSelf: 'center', marginTop: e.spaces.space32 },
          }
        }),
        or = n('Q8kk'),
        sr = (n('kH1Z'), n('6U7i'), n('9VLy')),
        cr = n('6OUF'),
        ur = n('yTN1'),
        dr = P.a.a329ce87,
        pr = function (e, a) {
          var n,
            t = e.autoFocus,
            r = e.imageUrl,
            l = e.onChange,
            i = e.screenName,
            o = e.style,
            s = e.value,
            u = e.valueMaxLength
          return c.a.createElement(
            V.a,
            { style: [gr.root, o] },
            l
              ? c.a.createElement(cr.a, {
                  autoFocus: t,
                  inputStyle: gr.descriptionInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'description',
                  numberOfLines: 1,
                  onChange: l,
                  placeholder: dr,
                  ref: a,
                  style: gr.description,
                  value: s,
                })
              : c.a.createElement(Y.b, { color: 'gray700', style: gr.description }, s),
            c.a.createElement(
              V.a,
              { style: gr.signatureWrapper },
              c.a.createElement(sr.a, { imageUrl: r, screenName: i, style: [gr.signature, !s && gr.visibilityHidden] }),
              l &&
                u &&
                c.a.createElement(ur.a, {
                  count: null !== (n = null == s ? void 0 : s.length) && void 0 !== n ? n : 0,
                  maxCount: u,
                  warningCount: u - 10,
                }),
            ),
          )
        },
        mr = c.a.forwardRef(pr),
        gr = M.a.create(function (e) {
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
        fr = ['style'],
        br = P.a.cbc8ce27,
        hr = function (e, a) {
          var n = e.style,
            t = b()(e, fr),
            r = Object(qt.b)().windowWidth > M.a.theme.breakpoints.medium
          return c.a.createElement(
            V.a,
            { style: [vr.root, r && vr.rootWide, n] },
            c.a.createElement(
              Y.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              br,
            ),
            c.a.createElement(mr, g()({}, t, { ref: a, style: vr.description })),
          )
        },
        yr = c.a.forwardRef(hr),
        vr = M.a.create(function (e) {
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
        wr = ['style'],
        Sr = function (e, a) {
          e.style
          var n = b()(e, wr)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(yr, g()({}, n, { ref: a })),
            c.a.createElement(or.a, { style: kr.superFollowsDemoVisibilityCallout }),
          )
        },
        _r = c.a.forwardRef(Sr),
        kr = M.a.create(function (e) {
          return {
            superFollowsDemoVisibilityCallout: {
              alignSelf: 'center',
              marginBottom: e.spaces.space32,
              marginTop: e.spaces.space16,
            },
          }
        }),
        Fr = n('MAc7'),
        Er = 'super_follows_onboarding_draft',
        Cr = function (e, a) {
          return Ja(e, a).getLinkedRecord(Er)
        }
      function xr(e, a) {
        var n = rn()()
        Object(Qa.a)(function () {
          qa()(e, 'viewerRef must be defined'),
            nn()(n, function (n) {
              !(function (e, a) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  t = n.creator_intro,
                  r = void 0 === t ? null : t,
                  l = n.description,
                  i = void 0 === l ? null : l,
                  o = n.selected_price,
                  s = void 0 === o ? null : o,
                  c = Ya(a),
                  u = Ja(e, a)
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
      function Kr(e, a) {
        var n = rn()()
        return c.a.useCallback(
          function (t) {
            qa()(e, 'viewerId must be defined'),
              nn()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = Cr(e, a)
                  qa()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Lr,
        Pr,
        Dr,
        Or,
        Tr,
        Br,
        Ir,
        Rr,
        zr,
        Vr,
        Ar,
        Mr,
        Ur,
        Hr,
        jr,
        Nr,
        Wr,
        Gr,
        qr,
        Qr,
        Xr,
        Zr,
        Yr,
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
        ml,
        gl,
        fl,
        bl,
        hl,
        yl,
        vl,
        wl,
        Sl,
        _l,
        kl,
        Fl,
        El = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = se()(void 0 !== vn ? vn : (vn = n('krsm')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.creator_intro) && void 0 !== a
            ? a
            : ''
        },
        Cl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = se()(void 0 !== wn ? wn : (wn = n('ZaCQ')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.description) && void 0 !== a
            ? a
            : ''
        },
        xl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = se()(void 0 !== Sn ? Sn : (Sn = n('K7/K')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        Kl = void 0 !== Lr ? Lr : (Lr = n('STrk')),
        Ll = void 0 !== Pr ? Pr : (Pr = n('bWed')),
        Pl = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = se()(Kl, t),
            i = se()(Ll, r),
            o = (null == l ? void 0 : l.legacy) || {},
            s = o.name,
            u = o.profile_image_url_https,
            d = o.screen_name,
            p = null !== (a = El(i)) && void 0 !== a ? a : '',
            m = null !== (n = Cl(i)) && void 0 !== n ? n : ''
          return (
            qa()('string' == typeof u, 'imageUrl must be defined'),
            qa()('string' == typeof s, 'name must be defined'),
            qa()('string' == typeof d, 'screenName must be defined'),
            c.a.createElement(
              Jt,
              null,
              c.a.createElement(
                V.a,
                { style: Dl.browserContent },
                c.a.createElement(Fr.a, { imageUrl: u, name: s, value: p }),
                c.a.createElement(_r, { imageUrl: u, screenName: d, value: m }),
                c.a.createElement(lr, { user: l }),
              ),
            )
          )
        },
        Dl = M.a.create(function (e) {
          return {
            browserContent: { paddingBottom: e.spaces.space48 },
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            blob: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
          }
        }),
        Ol = ['label', 'path'],
        Tl = function (e) {
          var a = e.label,
            n = e.path,
            t = b()(e, Ol),
            r = Object(z.f)()
          return c.a.createElement(
            Y.b,
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
        Bl = P.a.hf6f2913,
        Il = P.a.i859a9d3,
        Rl = M.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        zl = function (e) {
          var a = e.path,
            n = e.style
          return c.a.createElement(
            V.a,
            { style: [Rl.root, n] },
            c.a.createElement(Y.b, { size: 'headline2', weight: 'heavy' }, Bl),
            c.a.createElement(Tl, { label: Il, path: a }),
          )
        },
        Vl = n('0yYu'),
        Al = P.a.iba08a94,
        Ml = P.a.ef354e83,
        Ul = void 0 !== Dr ? Dr : (Dr = n('UFp0')),
        Hl = void 0 !== Or ? Or : (Or = n('NmgE')),
        jl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = se()(Ul, a),
            r = se()(Hl, n)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Qt, { style: Nl.interstitial }, c.a.createElement(ta, { headline: Al, subtext: Ml })),
            c.a.createElement(Vl.a, null),
            c.a.createElement(Qt, { style: Nl.previewCallout }, c.a.createElement(zl, { path: x })),
            c.a.createElement(V.a, { style: Nl.summaryFramed }, c.a.createElement(Pl, { user: t, viewer: r })),
          )
        },
        Nl = M.a.create(function (e) {
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
        Wl = P.a.hf6f2913,
        Gl = void 0 !== Tr ? Tr : (Tr = n('MvEh')),
        ql = void 0 !== Br ? Br : (Br = n('U5ka')),
        Ql = function (e) {
          var a = e.user,
            n = e.viewer,
            t = se()(Gl, a),
            r = se()(ql, n)
          return c.a.createElement(j, { title: Wl, withInfoButton: !0 }, c.a.createElement(jl, { user: t, viewer: r }))
        },
        Xl = ['style'],
        Zl = function (e, a) {
          var n = e.style,
            t = b()(e, Xl)
          return c.a.createElement(
            Jt,
            { style: n },
            c.a.createElement(c.a.Fragment, null, c.a.createElement(_r, g()({}, t, { ref: a }))),
          )
        },
        Yl = c.a.forwardRef(Zl),
        Jl = P.a.gf32cca1,
        $l = P.a.j8ba99b3,
        ei = P.a.j679dcda,
        ai = void 0 !== Ir ? Ir : (Ir = n('yjSu')),
        ni = void 0 !== Rr ? Rr : (Rr = n('RTdz')),
        ti = function (e, a) {
          var n = e.autoFocus,
            t = e.descriptionMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(Qa.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = se()(ai, r),
            s = se()(ni, l),
            u = o.legacy,
            d = u.profile_image_url_https,
            p = u.screen_name,
            m = Cl(s),
            g = Kr(s, 'description')
          return (
            qa()('string' == typeof d, 'imageUrl must be defined'),
            qa()('string' == typeof p, 'screenName must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Qt, { style: li.interstitial }, c.a.createElement(ta, { headline: Jl, subtext: $l })),
              c.a.createElement(Qt, { style: li.examplesLink }, c.a.createElement(Tl, { label: ei, path: C })),
              c.a.createElement(Vl.a, null),
              c.a.createElement(Qt, { style: li.previewCallout }, c.a.createElement(zl, { path: x })),
              c.a.createElement(Yl, {
                autoFocus: n,
                imageUrl: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                screenName: p,
                style: li.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(V.a, { ref: i }),
            )
          )
        },
        ri = c.a.forwardRef(ti),
        li = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        ii =
          (n('hBpG'),
          n('5BYb'),
          function (e) {
            var a, t
            return null !==
              (a =
                null === (t = se()(void 0 !== Vr ? Vr : (Vr = n('WDhg')), e).super_follow_creator_benefits) ||
                void 0 === t
                  ? void 0
                  : t.creator_intro) && void 0 !== a
              ? a
              : ''
          }),
        oi = function (e) {
          var a,
            t,
            r,
            l = (
              null !==
                (a =
                  null === (t = se()(void 0 !== Ar ? Ar : (Ar = n('G/nI')), e).super_follow_creator_benefits) ||
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
        si = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = se()(void 0 !== Mr ? Mr : (Mr = n('dGIC')), e).super_follow_creator_price_metadata) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        ci = (n('jwue'), n('+oxZ'), void 0 !== Ur ? Ur : (Ur = n('rwq4'))),
        ui = void 0 !== Hr ? Hr : (Hr = n('E9LA')),
        di = function (e, a) {
          var t = a.creatorIntro,
            r = a.description,
            l = se()(ci, e),
            i = (function (e) {
              var a
              return null === (a = se()(void 0 !== zr ? zr : (zr = n('lWeI')), e).super_follow_creator_benefits) ||
                void 0 === a
                ? void 0
                : a.__id
            })(l),
            o = ii(l),
            s = oi(l),
            u = t || o,
            d = r || s,
            p = ft()(ui),
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
                      qa()(i, 'benefitsId must be specified')
                      var a = e.get(i)
                      if (
                        (qa()(a, 'benefitsRecord must be specified'),
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
        pi = P.a.cd5cae15,
        mi = P.a.e36287c6,
        gi = P.a.b772cd65,
        fi = void 0 !== jr ? jr : (jr = n('kz1e')),
        bi = void 0 !== Nr ? Nr : (Nr = n('M3aw')),
        hi = function (e) {
          var a = e.user,
            n = e.viewer,
            t = se()(fi, a),
            r = se()(bi, n),
            l = oi(t),
            i = Cl(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = di(t, { description: i }),
            u = re()(s, 2),
            d = u[0],
            p = u[1],
            m = { disabled: !o || p, label: gi, onPress: d, path: S.root, type: 'primaryFilled' },
            f = c.a.createElement(ie, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            j,
            { rightControl: f, subtitle: mi, title: pi },
            c.a.createElement(ri, { autoFocus: !0, descriptionMaxLength: 140, user: t, viewer: r }),
          )
        },
        yi = ['style'],
        vi = function (e, a) {
          var n = e.style,
            t = b()(e, yi)
          return c.a.createElement(Jt, { style: n }, c.a.createElement(Fr.a, g()({}, t, { ref: a })))
        },
        wi = c.a.forwardRef(vi),
        Si = P.a.j3253319,
        _i = P.a.h1e80993,
        ki = P.a.j679dcda,
        Fi = void 0 !== Wr ? Wr : (Wr = n('hGtx')),
        Ei = void 0 !== Gr ? Gr : (Gr = n('DWSt')),
        Ci = function (e, a) {
          var n = e.autoFocus,
            t = e.introMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(Qa.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = se()(Fi, r),
            s = se()(Ei, l),
            u = o.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m = El(s),
            g = Kr(s, 'creator_intro')
          return (
            qa()('string' == typeof p, 'imageUrl must be defined'),
            qa()('string' == typeof d, 'name must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Qt, { style: Ki.interstitial }, c.a.createElement(ta, { headline: Si, subtext: _i })),
              c.a.createElement(Qt, { style: Ki.examplesLink }, c.a.createElement(Tl, { label: ki, path: E })),
              c.a.createElement(Vl.a, null),
              c.a.createElement(Qt, { style: Ki.previewCallout }, c.a.createElement(zl, { path: x })),
              c.a.createElement(wi, {
                autoFocus: n,
                imageUrl: p,
                name: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                style: Ki.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(V.a, { ref: i }),
            )
          )
        },
        xi = c.a.forwardRef(Ci),
        Ki = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Li = P.a.cd5cae15,
        Pi = P.a.c0348963,
        Di = P.a.b772cd65,
        Oi = void 0 !== qr ? qr : (qr = n('oyMe')),
        Ti = void 0 !== Qr ? Qr : (Qr = n('RL7R')),
        Bi = function (e) {
          var a = e.user,
            n = e.viewer,
            t = se()(Oi, a),
            r = se()(Ti, n),
            l = ii(t),
            i = El(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = di(t, { creatorIntro: i }),
            u = re()(s, 2),
            d = u[0],
            p = u[1],
            m = { disabled: !o || p, label: Di, onPress: d, path: S.root, type: 'primaryFilled' },
            f = c.a.createElement(ie, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            j,
            { rightControl: f, subtitle: Pi, title: Li },
            c.a.createElement(xi, { autoFocus: !0, introMaxLength: 140, user: t, viewer: r }),
          )
        },
        Ii = n('Nh1N'),
        Ri = n('yoO3'),
        zi = n('7FtF'),
        Vi = P.a.be103b84,
        Ai = function () {
          return c.a.createElement(
            V.a,
            { style: Mi.root },
            c.a.createElement(J.a, { style: Mi.icon }),
            c.a.createElement(Y.b, { size: 'subtext2', weight: 'bold' }, Vi),
          )
        },
        Mi = M.a.create(function (e) {
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
        Ui = function (e) {
          var a = e.children,
            n = e.headline,
            t = e.rightControl
          return c.a.createElement(
            V.a,
            { style: Hi.root },
            c.a.createElement(
              V.a,
              { style: Hi.header },
              c.a.createElement(
                Y.b,
                {
                  accessibilityLevel: 4,
                  accessibilityRole: 'heading',
                  size: 'headline2',
                  style: Hi.headline,
                  weight: 'heavy',
                },
                n,
              ),
              a,
            ),
            t,
          )
        },
        Hi = M.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        ji = n('4zmP'),
        Ni = n.p + 'Chat.62494e65.png',
        Wi = n.p + 'Chat@2x.f6eeca05.png',
        Gi = n.p + 'Chat@3x.dd8438c5.png',
        qi = n.p + 'Cog.788d3515.png',
        Qi = n.p + 'Cog@2x.3528d165.png',
        Xi = n.p + 'Cog@3x.e4185e95.png',
        Zi = n.p + 'Coin.684ea185.png',
        Yi = n.p + 'Coin@2x.9e020695.png',
        Ji = n.p + 'Coin@3x.d5ecbc95.png',
        $i = n.p + 'CoinPurse.5e7e5f25.png',
        eo = n.p + 'CoinPurse@2x.62abfad5.png',
        ao = n.p + 'CoinPurse@3x.6b9f5d05.png',
        no = n.p + 'Cone.e7e68c95.png',
        to = n.p + 'Cone@2x.94d66a15.png',
        ro = n.p + 'Cone@3x.f4718655.png',
        lo = n.p + 'Cross.eed0ff55.png',
        io = n.p + 'Cross@2x.68249435.png',
        oo = n.p + 'Cross@3x.59595055.png',
        so = n.p + 'FirstAid.962ae7e5.png',
        co = n.p + 'FirstAid@2x.09640055.png',
        uo = n.p + 'FirstAid@3x.b6884b15.png',
        po = n.p + 'Heart.a7bdca85.png',
        mo = n.p + 'Heart@2x.a3108ce5.png',
        go = n.p + 'Heart@3x.2866f2f5.png',
        fo = n.p + 'LifeSaver.19af1fb5.png',
        bo = n.p + 'LifeSaver@2x.5f9465a5.png',
        ho = n.p + 'LifeSaver@3x.3cde1ca5.png',
        yo = n.p + 'Lightbulb.632a0de5.png',
        vo = n.p + 'Lightbulb@2x.ea0a7dc5.png',
        wo = n.p + 'Lightbulb@3x.d47fac75.png',
        So = n.p + 'NoEntry.89a117a5.png',
        _o = n.p + 'NoEntry@2x.6460d275.png',
        ko = n.p + 'NoEntry@3x.cf8e9465.png',
        Fo = n.p + 'Pencil.6ac7a9a5.png',
        Eo = n.p + 'Pencil@2x.e6d394c5.png',
        Co = n.p + 'Pencil@3x.7e45c2e5.png',
        xo = n.p + 'PiggyBank.571af825.png',
        Ko = n.p + 'PiggyBank@2x.f6b3cb15.png',
        Lo = n.p + 'PiggyBank@3x.f166bc15.png',
        Po = n.p + 'Plant.2e93bbb5.png',
        Do = n.p + 'Plant@2x.5660c145.png',
        Oo = n.p + 'Plant@3x.60b66855.png',
        To = n.p + 'Puzzle.59175915.png',
        Bo = n.p + 'Puzzle@2x.d2394395.png',
        Io = n.p + 'Puzzle@3x.ed9bd735.png',
        Ro = n.p + 'Ribbon.a0d66a65.png',
        zo = n.p + 'Ribbon@2x.d981e095.png',
        Vo = n.p + 'Ribbon@3x.d6c8e505.png',
        Ao = n.p + 'Spheres.c33c7b95.png',
        Mo = n.p + 'Spheres@2x.6b6732f5.png',
        Uo = n.p + 'Spheres@3x.5e58c985.png',
        Ho = n.p + 'Star.2714eb95.png',
        jo = n.p + 'Star@2x.25a57fd5.png',
        No = n.p + 'Star@3x.206f9d85.png',
        Wo = n.p + 'TrashCan.7ed17045.png',
        Go = n.p + 'TrashCan@2x.79c8ba35.png',
        qo = n.p + 'TrashCan@3x.91184ba5.png',
        Qo = n.p + 'Wallet.0ca99435.png',
        Xo = n.p + 'Wallet@2x.d3b05545.png',
        Zo = n.p + 'Wallet@3x.90c942f5.png',
        Yo = [1, 2, 3],
        Jo = Object.freeze({
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
        $o = Object(Qe.a)(Jo),
        es = $o.reduce(function (e, a) {
          var n = Math.max.apply(Math, Yo)
          return (
            (e[a] = {
              aspectRatio: 1,
              image: { url: r[a], width: 36 * n, height: 36 * n },
              customVariants: Yo.map(function (e) {
                return { uri: r[a + (1 !== e ? ''.concat(e, 'x') : '')], width: 36 * e, height: 36 * e }
              }),
            }),
            e
          )
        }, {}),
        as = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? 36 : n,
            r = es[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            V.a,
            { style: s },
            c.a.createElement(Xe.a, {
              accessibilityLabel: '',
              aspectMode: Ze.a.exact(l),
              customVariants: i,
              draggable: !1,
              image: o,
            }),
          )
        },
        ns = function (e) {
          var a = e.children,
            n = e.childrenStyle,
            t = e.headline,
            r = e.illustration,
            l = e.rightControl
          return c.a.createElement(
            V.a,
            { style: ts.root },
            r && c.a.createElement(as, { type: r, width: 36 }),
            c.a.createElement(
              V.a,
              { style: ts.header },
              c.a.createElement(
                Y.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: ts.headline,
                  weight: 'heavy',
                },
                t,
              ),
              l,
            ),
            c.a.createElement(V.a, { style: n }, a),
          )
        },
        ts = M.a.create(function (e) {
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
        rs = ['$refType'],
        ls = P.a.a6777c1b,
        is = P.a.a384fda0,
        os = P.a.i4313618,
        ss = P.a.c0348963,
        cs = P.a.ic624ab2,
        us = P.a.ifc9b709,
        ds = P.a.b08bbeb4,
        ps = P.a.ia9c37c4,
        ms = P.a.fb1e4eb6,
        gs = P.a.be54a312,
        fs = P.a.cca48545,
        bs = P.a.de67bc6e,
        hs = P.a.a46cead5,
        ys = P.a.idd8ae44,
        vs = P.a.b28a1b48,
        ws = P.a.f2df375b,
        Ss = P.a.f3ce76c0,
        _s = P.a.i8982e7e,
        ks = P.a.ca5ca5ed,
        Fs = P.a.abd845fd,
        Es = P.a.i859a9d3,
        Cs = P.a.d14c7bbc,
        xs = P.a.g867481d,
        Ks = P.a.f66d24be,
        Ls = P.a.g5925628,
        Ps = void 0 !== Xr ? Xr : (Xr = n('EM6u')),
        Ds = void 0 !== Zr ? Zr : (Zr = n('oNwH')),
        Os = function (e) {
          var a,
            n,
            t,
            r = e.priceOfferings,
            l = e.user,
            i = Object(z.g)(),
            o = se()(Ps, r),
            s = (o.$refType, b()(o, rs)),
            u = se()(Ds, l),
            d = ii(u),
            p = oi(u),
            m = null !== (a = si(u)) && void 0 !== a ? a : 'offer2',
            g = null !== (n = u.legacy.profile_image_url_https) && void 0 !== n ? n : void 0,
            f = null !== (t = u.legacy.screen_name) && void 0 !== t ? t : void 0,
            h = c.a.createElement(Tl, { label: ks, path: S.perksConfirm, size: 'subtext1' }),
            y = c.a.createElement(ie, { label: Fs, path: S.perksIntro, size: 'small', type: 'primaryOutlined' }),
            v = c.a.createElement(ie, { label: Fs, path: S.perksDescription, size: 'small', type: 'primaryOutlined' })
          return c.a.createElement(
            Ri.a,
            null,
            c.a.createElement(
              zi.a,
              { location: i, screenType: 'secondaryDetail', title: ls },
              c.a.createElement(
                V.a,
                { style: Ts.title },
                c.a.createElement(
                  Y.b,
                  { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                  ls,
                ),
                c.a.createElement(Ai, null),
              ),
              c.a.createElement(Vl.a, null),
              c.a.createElement(
                ns,
                { childrenStyle: Ts.benefits, headline: is, illustration: Jo.Ribbon, rightControl: h },
                c.a.createElement(Y.b, { color: 'gray700' }, os),
                c.a.createElement(
                  Ui,
                  { headline: ss, rightControl: y },
                  c.a.createElement(mr, { imageUrl: g, screenName: f, value: d }),
                ),
                c.a.createElement(
                  Ui,
                  { headline: cs, rightControl: v },
                  c.a.createElement(mr, { imageUrl: g, screenName: f, value: p }),
                ),
                c.a.createElement(Ui, { headline: us }, c.a.createElement(Y.b, { color: 'gray700' }, ds)),
              ),
              c.a.createElement(Vl.a, null),
              c.a.createElement(
                ns,
                { childrenStyle: Ts.other, headline: ps, illustration: Jo.PiggyBank },
                c.a.createElement(Y.b, { color: 'gray700' }, ms),
                c.a.createElement(Y.b, { size: 'headline2', weight: 'heavy' }, gs({ price: s[m] })),
                c.a.createElement(ji.a, { Icon: Ii.a, action: { label: Es, link: T }, headline: fs, text: bs }),
              ),
              c.a.createElement(Vl.a, null),
              c.a.createElement(
                ns,
                { childrenStyle: Ts.other, headline: hs, illustration: Jo.Chat },
                c.a.createElement(Y.b, { color: 'gray700' }, ys),
                c.a.createElement(
                  V.a,
                  { style: Ts.buttons },
                  c.a.createElement(
                    B.a,
                    {
                      dominantColor: '#5865F2',
                      link: 'https://t.co/jPqvg6tFrDJG',
                      style: Ts.button,
                      type: 'onMediaDominantColorFilled',
                    },
                    Cs,
                  ),
                ),
              ),
              c.a.createElement(Vl.a, null),
              c.a.createElement(
                ns,
                { childrenStyle: Ts.other, headline: vs, illustration: Jo.Lightbulb },
                c.a.createElement(Y.b, { color: 'gray700' }, ws),
                c.a.createElement(
                  V.a,
                  { style: Ts.buttons },
                  c.a.createElement(
                    B.a,
                    { link: 'https://t.co/RL2NN3bEVkes', style: Ts.button, type: 'primaryOutlined' },
                    xs,
                  ),
                ),
              ),
              c.a.createElement(Vl.a, null),
              c.a.createElement(
                ns,
                { childrenStyle: Ts.other, headline: Ss, illustration: Jo.LifeSaver },
                c.a.createElement(Y.b, { color: 'gray700' }, _s),
                c.a.createElement(
                  V.a,
                  { style: Ts.buttons },
                  c.a.createElement(B.a, { link: O, style: Ts.button, type: 'primaryOutlined' }, Ks),
                  c.a.createElement(
                    B.a,
                    {
                      link: 'https://help.twitter.com/forms/paid-features/superfollows',
                      style: Ts.button,
                      type: 'primaryOutlined',
                    },
                    Ls,
                  ),
                ),
              ),
            ),
          )
        },
        Ts = M.a.create(function (e) {
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
        Bs = void 0 !== Yr ? Yr : (Yr = n('N6s9')),
        Is = void 0 !== Jr ? Jr : (Jr = n('h3lO')),
        Rs = function (e) {
          var a = e.rootPath,
            n = e.user,
            t = e.viewer,
            r = se()(Bs, n),
            l = se()(Is, t),
            i = ii(r),
            o = oi(r),
            s = si(r),
            u = El(l),
            d = Cl(l),
            p = xl(l),
            m = Kr(l, 'creator_intro'),
            g = Kr(l, 'description'),
            f = Kr(l, 'selected_price')
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
        zs = void 0 !== $r ? $r : ($r = n('MXCg')),
        Vs = void 0 !== el ? el : (el = n('mEFY')),
        As = void 0 !== al ? al : (al = n('d8Sa')),
        Ms = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(G.a).featureSwitches,
            l = se()(zs, a),
            i = se()(Vs, n),
            o = se()(As, t),
            s = ii(i),
            u = oi(i),
            d = si(i),
            p = Rs({ rootPath: S.root, user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (xr(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_edit_perks_enabled'))
          )
            throw new Error('Super Follows management is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(W.a, { to: y })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(Gt, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  z.d,
                  null,
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: S.perksIntro },
                    c.a.createElement(Bi, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: S.perksDescription },
                    c.a.createElement(hi, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: S.perksConfirm },
                    c.a.createElement(Ql, { user: i, viewer: o }),
                  ),
                  c.a.createElement(z.b, { path: S.root }, c.a.createElement(Os, { priceOfferings: l, user: i })),
                ),
              )
        },
        Us = P.a.b422cb62,
        Hs = P.a.f08705e0,
        js = P.a.e2cd700f,
        Ns = P.a.fbfd7397,
        Ws = P.a.c1df579e,
        Gs = P.a.d8637c96,
        qs = P.a.b92892dc,
        Qs = P.a.b123a502,
        Xs = void 0 !== nl ? nl : (nl = n('wQp3')),
        Zs = void 0 !== tl ? tl : (tl = n('tfBr')),
        Ys = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = se()(Xs, n),
            l = se()(Zs, t),
            i = r.stripe_account_status,
            o = El(l),
            s = Cl(l),
            u = xl(l),
            d = [
              { label: Gs, checked: !!o && !!s },
              { label: qs, checked: !!u },
              { label: Qs, checked: 'Completed' === i },
            ],
            p = d.some(function (e) {
              return e.checked
            }),
            m = c.a.createElement(ie, { label: Ws, path: w.perksIntro, size: 'small', type: 'primaryFilled' })
          return c.a.createElement(
            j,
            {
              leftControlShouldClose: !0,
              percentageComplete: a,
              rightControl: m,
              withCenteredLogo: !0,
              withInfoButton: !0,
            },
            c.a.createElement(
              Qt,
              { style: Js.interstitial },
              c.a.createElement(ta, {
                headline: p ? js : Us,
                illustration: p ? $e.Puzzle : $e.Cat,
                subtext: p ? Ns : Hs,
              }),
            ),
            c.a.createElement(Qt, { style: Js.checks }, c.a.createElement(ee, { items: d })),
          )
        },
        Js = M.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        $s = ['style'],
        ec = function (e) {
          var a = e.style,
            n = b()(e, $s)
          return c.a.createElement(
            Jt,
            { style: a },
            c.a.createElement(lr, g()({ style: ac.superFollowsDemoBadgeHeader }, n)),
          )
        },
        ac = M.a.create(function (e) {
          return { superFollowsDemoBadgeHeader: { alignSelf: 'center', marginBottom: e.spaces.space16 } }
        }),
        nc = P.a.cda6bb6d,
        tc = P.a.a15b98ec,
        rc = void 0 !== rl ? rl : (rl = n('mDly')),
        lc = function (e) {
          var a = e.user,
            n = se()(rc, a)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Qt, { style: ic.interstitial }, c.a.createElement(ta, { headline: nc, subtext: tc })),
            c.a.createElement(Vl.a, null),
            c.a.createElement(Qt, { style: ic.previewCallout }, c.a.createElement(zl, { path: x })),
            c.a.createElement(ec, { style: ic.preview, user: n }),
          )
        },
        ic = M.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        oc = P.a.cd5cae15,
        sc = P.a.ad4a92a2,
        cc = P.a.c1df579e,
        uc = void 0 !== ll ? ll : (ll = n('QmjQ')),
        dc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = { label: cc, path: w.perksConfirm, type: 'primaryFilled' },
            r = c.a.createElement(ie, g()({}, t, { size: 'xLarge' })),
            l = c.a.createElement(ie, g()({}, t, { size: 'small' })),
            i = se()(uc, n)
          return c.a.createElement(
            j,
            { percentageComplete: a, rightControl: l, subtitle: sc, title: oc },
            c.a.createElement(lc, { user: i }),
            c.a.createElement(Qt, { style: pc.buttons }, r),
          )
        },
        pc = M.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        mc = P.a.cd5cae15,
        gc = P.a.e18b7a71,
        fc = P.a.c1df579e,
        bc = void 0 !== il ? il : (il = n('Rthh')),
        hc = void 0 !== ol ? ol : (ol = n('aREQ')),
        yc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = se()(bc, n),
            l = se()(hc, t),
            i = { label: fc, path: w.pricing, type: 'primaryFilled' },
            o = c.a.createElement(ie, g()({}, i, { size: 'xLarge' })),
            s = c.a.createElement(ie, g()({}, i, { size: 'small' }))
          return c.a.createElement(
            j,
            { percentageComplete: a, rightControl: s, subtitle: gc, title: mc },
            c.a.createElement(jl, { user: r, viewer: l }),
            c.a.createElement(Qt, { style: vc.buttons }, o),
          )
        },
        vc = M.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        wc = P.a.cd5cae15,
        Sc = P.a.e36287c6,
        _c = P.a.be76dc33,
        kc = P.a.c1df579e,
        Fc = void 0 !== sl ? sl : (sl = n('6rkJ')),
        Ec = void 0 !== cl ? cl : (cl = n('tJ4s')),
        Cc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = se()(Ec, t),
            i = se()(Fc, n),
            o = Cl(l),
            s = o.length > 0 && o.length <= 140,
            u = { disabled: !s, label: kc, path: w.perksBadges, type: 'primaryFilled' },
            d = c.a.createElement(ie, g()({}, u, { size: 'xLarge' })),
            p = c.a.createElement(ie, g()({}, u, { size: 'small' })),
            m = {
              children: _c,
              onClick: function () {
                var e
                null == r || null === (e = r.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            f = c.a.createElement(B.a, m),
            b = c.a.createElement(B.a, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            j,
            { percentageComplete: a, rightControl: s ? p : b, subtitle: Sc, title: wc },
            c.a.createElement(ri, { descriptionMaxLength: 140, ref: r, user: i, viewer: l }),
            c.a.createElement(Qt, { style: xc.buttons }, s ? d : f),
          )
        },
        xc = M.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Kc = P.a.cd5cae15,
        Lc = P.a.c0348963,
        Pc = P.a.ef5406e3,
        Dc = P.a.c1df579e,
        Oc = void 0 !== ul ? ul : (ul = n('02qo')),
        Tc = void 0 !== dl ? dl : (dl = n('TXsE')),
        Bc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = se()(Oc, n),
            i = se()(Tc, t),
            o = El(i),
            s = o.length > 0 && o.length <= 140,
            u = { disabled: !s, label: Dc, path: w.perksDescription, type: 'primaryFilled' },
            d = c.a.createElement(ie, g()({}, u, { size: 'xLarge' })),
            p = c.a.createElement(ie, g()({}, u, { size: 'small' })),
            m = {
              children: Pc,
              onClick: function () {
                var e
                null == r || null === (e = r.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            f = c.a.createElement(B.a, m),
            b = c.a.createElement(B.a, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            j,
            { percentageComplete: a, rightControl: s ? p : b, subtitle: Lc, title: Kc },
            c.a.createElement(xi, { introMaxLength: 140, ref: r, user: l, viewer: i }),
            c.a.createElement(Qt, { style: Ic.buttons }, s ? d : f),
          )
        },
        Ic = M.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Rc = ['$refType'],
        zc = P.a.ea8a3d2d,
        Vc = P.a.f77bb178,
        Ac = P.a.cd75a5d4,
        Mc = P.a.g9677c6d,
        Uc = P.a.abd845fd,
        Hc = void 0 !== pl ? pl : (pl = n('IeZm')),
        jc = void 0 !== ml ? ml : (ml = n('7ESn')),
        Nc = void 0 !== gl ? gl : (gl = n('By/j')),
        Wc = function (e) {
          var a,
            n = e.percentageComplete,
            t = e.priceOfferings,
            r = e.viewer,
            l = se()(Hc, t),
            i = (l.$refType, b()(l, Rc)),
            o = se()(jc, r),
            s = El(o),
            u = Cl(o),
            d = null !== (a = xl(o)) && void 0 !== a ? a : i[0],
            p = ft()(Nc),
            m = re()(p, 2),
            g = m[0],
            f = m[1]
          return c.a.createElement(
            j,
            { percentageComplete: n, title: zc, withInfoButton: !0 },
            c.a.createElement(
              Qt,
              { style: Gc.interstitial },
              c.a.createElement(ta, { headline: Vc({ price: i[d] }), illustration: $e.Pricing, subtext: Ac }),
            ),
            c.a.createElement(
              Qt,
              { style: Gc.buttons },
              c.a.createElement(ie, {
                disabled: f,
                label: Mc,
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
              c.a.createElement(ie, {
                disabled: f,
                label: Uc,
                path: w.pricing,
                size: 'large',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        Gc = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        qc = (n('+KXO'), n('7xRU'), n('hznd')),
        Qc = ['$refType'],
        Xc = P.a.ea8a3d2d,
        Zc = P.a.ic9124bf,
        Yc = P.a.g5923869,
        Jc = {
          offer1: [P.a.f025ab39, P.a.c5602dfd],
          offer2: [P.a.ib075804, P.a.j8a72f06],
          offer3: [P.a.c246656e, P.a.a92ab16c],
        },
        $c = P.a.c1df579e,
        eu = void 0 !== fl ? fl : (fl = n('5jO1')),
        au = void 0 !== bl ? bl : (bl = n('mKqc')),
        nu = function (e) {
          var a = e.percentageComplete,
            n = e.priceOfferings,
            t = e.viewer,
            r = se()(eu, n),
            l = (r.$refType, b()(r, Qc)),
            i = se()(au, t),
            o = xl(i),
            s = Kr(i, 'selected_price'),
            u = c.a.createElement(
              P.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              c.a.createElement(Y.b, { link: O }, P.a.c336b06a),
            ),
            d = Object.keys(l).map(function (e) {
              return { label: Yc({ price: l[e] }), value: e, helpText: Jc[e].join(' ') }
            }),
            p = c.a.createElement(ie, {
              disabled: !o,
              label: $c,
              path: w.pricingConfirm,
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            j,
            { percentageComplete: a, rightControl: p, title: Xc, withInfoButton: !0 },
            c.a.createElement(Qt, { style: tu.interstitial }, c.a.createElement(ta, { headline: Zc, subtext: u })),
            c.a.createElement(
              Qt,
              { style: tu.prices },
              c.a.createElement(qc.a, {
                accessibilityLabel: Zc,
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
        tu = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        ru = P.a.f1cb36b8,
        lu = P.a.e20f6661,
        iu = P.a.a9ee1ecc,
        ou = P.a.b772cd65,
        su = function (e) {
          var a = e.percentageComplete,
            n = c.a.useRef(),
            t = c.a.useCallback(function () {
              var e
              null === (e = n.current) || void 0 === e || e.goBack()
            }, [])
          return c.a.createElement(
            j,
            { leftControlShouldClose: !0, percentageComplete: a, screenRef: n, title: ru, withInfoButton: !0 },
            c.a.createElement(
              Qt,
              { style: cu.interstitial },
              c.a.createElement(ta, { headline: lu, illustration: $e.Thumbsup, subtext: iu }),
            ),
            c.a.createElement(
              Qt,
              { style: cu.buttons },
              c.a.createElement(B.a, { onPress: t, size: 'large', type: 'primaryFilled' }, ou),
            ),
          )
        },
        cu = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        uu = P.a.f1cb36b8,
        du = P.a.e20f6661,
        pu = P.a.d0c4f937,
        mu = P.a.j24c37b2,
        gu = function (e) {
          var a = e.percentageComplete,
            n = c.a.useRef(),
            t = c.a.useCallback(function () {
              var e
              null === (e = n.current) || void 0 === e || e.goBack()
            }, [])
          return c.a.createElement(
            j,
            { leftControlShouldClose: !0, percentageComplete: a, screenRef: n, title: uu, withInfoButton: !0 },
            c.a.createElement(
              Qt,
              { style: fu.interstitial },
              c.a.createElement(ta, { headline: du, illustration: $e.Bench, subtext: pu }),
            ),
            c.a.createElement(
              Qt,
              { style: fu.buttons },
              c.a.createElement(B.a, { onPress: t, size: 'large', type: 'primaryFilled' }, mu),
            ),
          )
        },
        fu = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        bu = n('8jkQ'),
        hu = P.a.f1cb36b8,
        yu = P.a.ja884230,
        vu = P.a.af1b808d,
        wu = P.a.fe339750,
        Su = P.a.j912510a,
        _u = void 0 !== hl ? hl : (hl = n('xHLM')),
        ku = function (e) {
          var a = e.percentageComplete,
            n = ft()(_u),
            t = re()(n, 2),
            r = t[0],
            l = t[1],
            i = function () {
              var e = bu.b.get().href
              r({
                variables: { refresh_url: e, return_url: e },
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && bu.b.navigateTo(n)
                },
              })
            }
          return c.a.createElement(
            j,
            { percentageComplete: a, title: hu, withInfoButton: !0 },
            c.a.createElement(
              Qt,
              { style: Fu.interstitial },
              c.a.createElement(ta, { headline: yu, illustration: $e.CoinStairs, subtext: vu }),
            ),
            c.a.createElement(
              Qt,
              { style: Fu.buttons },
              c.a.createElement(B.a, { disabled: l, onPress: i, size: 'large', type: 'primaryFilled' }, wu),
              c.a.createElement(B.a, { disabled: l, onPress: i, size: 'large', type: 'primaryOutlined' }, Su),
            ),
          )
        },
        Fu = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        Eu = void 0 !== yl ? yl : (yl = n('UNVS')),
        Cu = void 0 !== vl ? vl : (vl = n('6byF')),
        xu = void 0 !== wl ? wl : (wl = n('dNhZ')),
        Ku = function (e) {
          return e / 8
        },
        Lu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(G.a).featureSwitches,
            l = se()(Eu, a),
            i = se()(Cu, n),
            o = se()(xu, t),
            s = ii(i),
            u = oi(i),
            d = si(i),
            p = Rs({ rootPath: h, user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (xr(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_onboarding_enabled'))
          )
            throw new Error('Super Follows onboarding is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(W.a, { to: y })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(Gt, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  z.d,
                  null,
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: w.perksIntro },
                    c.a.createElement(Bc, { percentageComplete: Ku(1), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: w.perksDescription },
                    c.a.createElement(Cc, { percentageComplete: Ku(2), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: w.perksBadges },
                    c.a.createElement(dc, { percentageComplete: Ku(3), user: i }),
                  ),
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: w.perksConfirm },
                    c.a.createElement(yc, { percentageComplete: Ku(4), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: w.pricing },
                    c.a.createElement(nu, { percentageComplete: Ku(5), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: w.pricingConfirm },
                    c.a.createElement(Wc, { percentageComplete: Ku(6), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: w.stripeSetup },
                    c.a.createElement(ku, { percentageComplete: Ku(7) }),
                  ),
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: w.stripeIncomplete },
                    c.a.createElement(gu, { percentageComplete: Ku(8) }),
                  ),
                  c.a.createElement(
                    z.b,
                    { exact: !0, path: w.stripeCompleted },
                    c.a.createElement(su, { percentageComplete: Ku(8) }),
                  ),
                  c.a.createElement(
                    z.b,
                    { path: w.root },
                    c.a.createElement(Ys, { percentageComplete: Ku(0), user: i, viewer: o }),
                  ),
                ),
              )
        },
        Pu = P.a.ebfb897c,
        Du = P.a.dc4feb19,
        Ou = P.a.c183d271,
        Tu = P.a.ic130fd5,
        Bu = P.a.dd913e24,
        Iu = P.a.h580543e,
        Ru = function () {
          return c.a.createElement(
            j,
            { title: Pu },
            c.a.createElement(Qt, { style: zu.interstitial }, c.a.createElement(ta, { headline: Du, subtext: Ou })),
            c.a.createElement(
              Qt,
              { style: zu.exampleDescriptions },
              c.a.createElement(Vl.a, null),
              c.a.createElement(mr, { value: Tu }),
              c.a.createElement(Vl.a, null),
              c.a.createElement(mr, { value: Bu }),
              c.a.createElement(Vl.a, null),
              c.a.createElement(mr, { value: Iu }),
            ),
          )
        },
        zu = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        Vu = n('JWc1'),
        Au = P.a.ebfb897c,
        Mu = P.a.dc4feb19,
        Uu = P.a.a0bb2076,
        Hu = P.a.ace46d40,
        ju = P.a.h2c4511f,
        Nu = P.a.hbe4f99e,
        Wu = M.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        Gu = function () {
          return c.a.createElement(
            j,
            { title: Au },
            c.a.createElement(Qt, { style: Wu.interstitial }, c.a.createElement(ta, { headline: Mu, subtext: Uu })),
            c.a.createElement(
              Qt,
              { style: Wu.exampleIntros },
              c.a.createElement(Vu.a, { value: Hu }),
              c.a.createElement(Vu.a, { value: ju }),
              c.a.createElement(Vu.a, { value: Nu }),
            ),
          )
        },
        qu = n('VTDR'),
        Qu = n('a2Fh'),
        Xu = P.a.hf6f2913,
        Zu = P.a.fb278c81,
        Yu = P.a.e6b60e94,
        Ju = M.a.create(function (e) {
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
        $u = function () {
          return c.a.createElement(
            j,
            { title: Xu },
            c.a.createElement(Qt, { style: Ju.interstitial }, c.a.createElement(ta, { headline: Zu, subtext: Yu })),
            c.a.createElement(
              Jt,
              { style: Ju.preview },
              c.a.createElement(
                qu.a,
                null,
                c.a.createElement(Qu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Qu.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Qu.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: Ju.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        ed = P.a.aa7e35ed,
        ad = P.a.f67e69bf,
        nd = function () {
          if (!c.a.useContext(G.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            j,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Qt,
              { style: td.interstitial },
              c.a.createElement(ta, { headline: ed, illustration: $e.Uturn, subtext: ad }),
            ),
          )
        },
        td = M.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        rd = P.a.d3d6c52c,
        ld = P.a.c53e9129,
        id = function () {
          if (!c.a.useContext(G.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            j,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            c.a.createElement(
              Qt,
              { style: od.interstitial },
              c.a.createElement(ta, { headline: rd, illustration: $e.PaperAirplane, subtext: ld }),
            ),
          )
        },
        od = M.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        sd = P.a.j274e6aa,
        cd = P.a.d7f65127,
        ud = function () {
          if (!c.a.useContext(G.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            j,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Qt,
              { style: dd.interstitial },
              c.a.createElement(ta, { headline: sd, illustration: $e.Bench, subtext: cd }),
            ),
          )
        },
        dd = M.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        pd = void 0 !== Sl ? Sl : (Sl = n('nEN5')),
        md = void 0 !== _l ? _l : (_l = n('toKZ')),
        gd = void 0 !== kl ? kl : (kl = n('ucRr')),
        fd = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = se()(pd, a),
            l = se()(md, n),
            i = se()(gd, t),
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
            z.d,
            null,
            c.a.createElement(z.b, { path: v.root }, c.a.createElement(Mt, { user: l, viewer: i })),
            c.a.createElement(z.b, { path: w.root }, c.a.createElement(Lu, { priceOfferings: r, user: l, viewer: i })),
            c.a.createElement(z.b, { path: S.root }, c.a.createElement(Ms, { priceOfferings: r, user: l, viewer: i })),
            c.a.createElement(z.b, { exact: !0, path: _ }, c.a.createElement(id, null)),
            c.a.createElement(z.b, { exact: !0, path: k }, c.a.createElement(ud, null)),
            c.a.createElement(z.b, { exact: !0, path: F }, c.a.createElement(nd, null)),
            c.a.createElement(z.b, { exact: !0, path: E }, c.a.createElement(Gu, null)),
            c.a.createElement(z.b, { exact: !0, path: C }, c.a.createElement(Ru, null)),
            c.a.createElement(z.b, { exact: !0, path: x }, c.a.createElement($u, null)),
            c.a.createElement(z.b, { exact: !0, path: y }, c.a.createElement(W.a, { to: o })),
          )
        },
        bd = n('IAZG'),
        hd = void 0 !== Fl ? Fl : (Fl = n('G8I5')),
        yd = function () {
          var e,
            a,
            n = Object(bd.a)(hd, {}),
            t = null == n ? void 0 : n.super_follows_price_offerings,
            r =
              null == n || null === (e = n.viewer) || void 0 === e || null === (a = e.user_results) || void 0 === a
                ? void 0
                : a.result,
            l = null == n ? void 0 : n.viewer
          return null == t || 'User' !== (null == r ? void 0 : r.__typename) || null == l
            ? null
            : c.a.createElement(fd, { priceOfferings: t, user: r, viewer: l })
        },
        vd = { context: 'SuperFollowsSettings' },
        wd = function () {
          var e = c.a.useMemo(function () {
            return {
              type: 'CustomRetry',
              content: function (e) {
                return c.a.createElement(j, null, c.a.createElement(p.a, { onRequestRetry: e }))
              },
            }
          }, [])
          return c.a.createElement(
            u.a,
            { errorConfig: vd, fallback: e },
            c.a.createElement(d.a, null, c.a.createElement(yd, null)),
          )
        }
      a.default = c.a.memo(wd)
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
        L = n('oQhu'),
        P = n('rHpw'),
        D = n('aITJ'),
        O = n('MWbm'),
        T = n('n5fo'),
        B = n('5emT'),
        I = n('Oib4'),
        R = n('WtWS'),
        z = n('ioan'),
        V = [
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
                    return w.a.createElement(
                      O.a,
                      { style: [W.root, l] },
                      w.a.createElement(
                        O.a,
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
                          O.a,
                          { style: W.textInputFormWrapper },
                          w.a.createElement(
                            O.a,
                            { style: W.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      w.a.createElement(
                        O.a,
                        { style: [W.sidePadding, W.underTextInputForm] },
                        w.a.createElement(
                          O.a,
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
                      l = (e.style, e.type, e.validLength, i()(e, V))
                    return w.a.createElement(
                      O.a,
                      { style: N.container },
                      a && !this._isLabelLarge() ? this._renderIcon() : null,
                      w.a.createElement(
                        _.b,
                        { size: 'headline1', style: N.wrapper },
                        w.a.createElement(
                          z.a,
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
                          { style: W.passwordVisibilityIconContainer },
                          w.a.createElement(k.a, {
                            accessibilityLabel: t ? H : U,
                            focusable: !0,
                            hoverLabel: { label: t ? H : U },
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
                      O.a,
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
                      O.a,
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
                      O.a,
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
      y()(j, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (j.propTypes = {})
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
