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
        L = n('/yvb'),
        P = n('rHpw'),
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
                          b.a.createElement(L.a, { disabled: r, onPress: t, style: O.button, testID: C, type: i }, l),
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
      var O = P.a.create(function (e) {
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
        L = n('yw4N'),
        P = n('TnY3'),
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
                    L = n.withDetailOpen,
                    P = n.withSearchBox,
                    D = n.withTweetButton,
                    T = 'root' === g,
                    O = 'secondaryRoot' === g,
                    B = 'primaryDetail' === g,
                    I = (B && v) || (T && y),
                    R = T || (B && a),
                    V = T ? h.c : B ? h.a : void 0,
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
                        subtitle: I ? k : void 0,
                        title: F,
                        titleDomId: V,
                        titleIconCell: E,
                        titleIconCellSize: C,
                      }),
                    ),
                    A =
                      T || (O && L)
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
                            withSearchBox: P,
                            withTweetButton: D,
                          })
                  return w.a.createElement(w.a.Fragment, null, A, z)
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(B, 'contextType', T.a),
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
          return ed
        })
      var t = {}
      n.r(t),
        n.d(t, 'Arrow', function () {
          return J
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
          return we
        }),
        n.d(t, 'PaperAirplane2x', function () {
          return ve
        }),
        n.d(t, 'PaperAirplane3x', function () {
          return Se
        }),
        n.d(t, 'Pricing', function () {
          return _e
        }),
        n.d(t, 'Pricing2x', function () {
          return ke
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
          return Ke
        }),
        n.d(t, 'Thumbsup2x', function () {
          return Le
        }),
        n.d(t, 'Thumbsup3x', function () {
          return Pe
        }),
        n.d(t, 'TrafficLight', function () {
          return De
        }),
        n.d(t, 'TrafficLight2x', function () {
          return Te
        }),
        n.d(t, 'TrafficLight3x', function () {
          return Oe
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
          return Oi
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
          return ji
        }),
        n.d(r, 'CoinPurse3x', function () {
          return Ni
        }),
        n.d(r, 'Cone', function () {
          return Wi
        }),
        n.d(r, 'Cone2x', function () {
          return Gi
        }),
        n.d(r, 'Cone3x', function () {
          return qi
        }),
        n.d(r, 'Cross', function () {
          return Qi
        }),
        n.d(r, 'Cross2x', function () {
          return Xi
        }),
        n.d(r, 'Cross3x', function () {
          return Zi
        }),
        n.d(r, 'FirstAid', function () {
          return Yi
        }),
        n.d(r, 'FirstAid2x', function () {
          return Ji
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
          return wo
        }),
        n.d(r, 'Plant2x', function () {
          return vo
        }),
        n.d(r, 'Plant3x', function () {
          return So
        }),
        n.d(r, 'Puzzle', function () {
          return _o
        }),
        n.d(r, 'Puzzle2x', function () {
          return ko
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
          return Ko
        }),
        n.d(r, 'Spheres2x', function () {
          return Lo
        }),
        n.d(r, 'Spheres3x', function () {
          return Po
        }),
        n.d(r, 'Star', function () {
          return Do
        }),
        n.d(r, 'Star2x', function () {
          return To
        }),
        n.d(r, 'Star3x', function () {
          return Oo
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
        u = (n('enFi'), n('L/9f')),
        d = n('3G7m'),
        p = n('LLQb'),
        m = n('97Jx'),
        g = n.n(m),
        f = n('m3Bd'),
        b = n.n(f),
        h = n('jHSc'),
        y = n('3XMw'),
        w = n.n(y),
        v = n('lUZE'),
        S = 'https://help.twitter.com/using-twitter/super-follows-creator',
        _ = ''.concat(S, '#pricechange'),
        k = n('/yvb'),
        F = n('6s7X'),
        E = function () {
          return c.a.createElement(k.a, { icon: c.a.createElement(F.a, null), link: S, type: 'primaryText' })
        },
        C = n('zCf4'),
        x = n('MWbm'),
        K = n('JYMr'),
        L = n('rHpw'),
        P = ['leftControlShouldClose', 'percentageComplete', 'rightControl', 'withCenteredLogo', 'withInfoButton'],
        D = w.a.a6777c1b,
        T = function (e) {
          var a = e.leftControlShouldClose,
            n = e.percentageComplete,
            t = e.rightControl,
            r = e.withCenteredLogo,
            l = e.withInfoButton,
            i = b()(e, P),
            o = Object(C.f)(),
            s = a ? 'close' : 'back',
            u = '/settings/monetization',
            d = r ? c.a.createElement(v.a, { style: O.iconTwitter }) : void 0,
            p = l ? c.a.createElement(x.a, { style: O.rightControl }, c.a.createElement(E, null), t) : t,
            m = n ? c.a.createElement(K.a, { progress: n }) : void 0
          return c.a.createElement(
            h.b,
            g()({}, i, {
              backButtonType: s,
              backLocation: u,
              centeredLogo: d,
              documentTitle: D,
              onBackClick: function () {
                a ? o.goBackThroughModals({ fallbackPath: u }) : o.goBack({ backLocation: u })
              },
              rightControl: p,
              secondaryBar: m,
            }),
          )
        },
        O = L.a.create(function (e) {
          return {
            iconTwitter: { color: e.colors.primary, flexGrow: 1, height: '1.75rem' },
            rightControl: { alignItems: 'center', flexDirection: 'row', gap: e.spaces.space4 },
          }
        }),
        B = n('5FtR'),
        I = (n('849X'), n('TJCb'), n('v6aA')),
        R = w.a.g92a2343,
        V = w.a.a91bb144,
        z = function () {
          var e = Object(C.f)(),
            a = c.a.createElement(
              k.a,
              {
                onPress: function () {
                  e.push('/settings/superfollows/application/submit')
                },
                type: 'primaryFilled',
              },
              V,
            )
          return c.a.createElement(T, { rightControl: a, title: R })
        },
        A = (n('jQ3i'), n('x4t0'), n('855f')),
        M = (n('z84I'), n('t62R')),
        U = n('WtWS'),
        H = n('0ULw'),
        j = function (e) {
          var a = e.items
          return c.a.createElement(
            x.a,
            { style: N.root },
            a.map(function (e) {
              return c.a.createElement(
                x.a,
                { key: e.label, style: N.item },
                c.a.createElement(M.b, { style: N.label, weight: 'bold' }, e.label),
                e.checked
                  ? c.a.createElement(U.a, { style: N.iconChecked })
                  : c.a.createElement(H.a, { style: N.iconUnchecked }),
              )
            }),
          )
        },
        N = L.a.create(function (e) {
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
            M.b,
            { align: 'center', color: 'gray700' },
            c.a.createElement(
              w.a.I18NFormatMessage,
              { $i18n: 'c593f48a' },
              c.a.createElement(
                M.b,
                { link: 'https://legal.twitter.com/super-follows-creator-terms.html' },
                w.a.ebc0cbbc,
              ),
            ),
          )
        },
        G = n('ddV6'),
        q = n.n(G),
        Q = (n('7x/C'), n('JtPf'), n('Qavd'), ['disabled', 'label', 'onPress', 'path']),
        X = function (e) {
          var a = e.disabled,
            n = e.label,
            t = e.onPress,
            r = e.path,
            l = b()(e, Q),
            i = Object(C.f)(),
            o = c.a.useState(!1),
            s = q()(o, 2),
            u = s[0],
            d = s[1],
            p = function () {
              i.push(r)
            }
          return c.a.createElement(
            k.a,
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
        Z = n('jAXQ'),
        Y = n.n(Z),
        J = (n('yH/f'), n('KOtZ'), n.p + 'Arrow.e8910965.png'),
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
        we = n.p + 'PaperAirplane.1ef48a05.png',
        ve = n.p + 'PaperAirplane@2x.2923eb15.png',
        Se = n.p + 'PaperAirplane@3x.47e4b145.png',
        _e = n.p + 'Pricing.ec5962d5.png',
        ke = n.p + 'Pricing@2x.f8284265.png',
        Fe = n.p + 'Pricing@3x.b6cf0185.png',
        Ee = n.p + 'Puzzle.aa045515.png',
        Ce = n.p + 'Puzzle@2x.5be7ab15.png',
        xe = n.p + 'Puzzle@3x.1796b225.png',
        Ke = n.p + 'Thumbsup.f5be79d5.png',
        Le = n.p + 'Thumbsup@2x.6d106945.png',
        Pe = n.p + 'Thumbsup@3x.6a81e6d5.png',
        De = n.p + 'TrafficLight.11644b65.png',
        Te = n.p + 'TrafficLight@2x.5657de25.png',
        Oe = n.p + 'TrafficLight@3x.a5a35335.png',
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
        je = Object(Ve.a)(He).reduce(function (e, a) {
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
        Ne = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? Me : n,
            r = je[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            x.a,
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
        We = L.a.create(function (e) {
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
            t && c.a.createElement(Ne, { type: t, width: 311 }),
            c.a.createElement(
              M.b,
              {
                accessibilityLevel: 2,
                accessibilityRole: 'heading',
                align: a,
                size: 'title2',
                style: t && qe.headline,
                weight: 'heavy',
              },
              n,
            ),
            c.a.createElement(M.b, { align: a, color: 'gray700', style: qe.subtext }, r),
          )
        },
        qe = L.a.create(function (e) {
          return { headline: { marginTop: e.spaces.space32 }, subtext: { marginTop: e.spaces.space16 } }
        }),
        Qe = w.a.feb54b4f,
        Xe = w.a.bac156a6,
        Ze = w.a.a3a20a10,
        Ye = w.a.b26ae507,
        Je = w.a.a753a87f,
        $e = w.a.abfaa527,
        ea = A.a.getTruncatedCount(1e4),
        aa = w.a.fdd95737({ minFollowersCount: ea }),
        na = A.a.getTruncatedCount(25),
        ta = w.a.a0dcad86({ minTweetsCount: na }),
        ra = w.a.c27f57ac,
        la = void 0 !== l ? l : (l = n('RLjm')),
        ia = function (e) {
          var a = e.user,
            n = Y()(la, a),
            t = (null == n ? void 0 : n.super_following_eligibility) || [],
            r = 0 === t.length,
            l = r ? He.Arrow : He.TrafficLight,
            i = r ? Qe : Ze,
            o = r ? Xe : Ye,
            s = [
              { label: aa, checked: !t.includes('followers') },
              { label: ta, checked: !t.includes('tweets') },
              { label: ra, checked: !t.includes('age') },
            ]
          return c.a.createElement(
            T,
            { withInfoButton: !0 },
            c.a.createElement(Ge, { headline: i, illustration: l, subtext: o }),
            c.a.createElement(j, { items: s }),
            r && c.a.createElement(W, null),
            c.a.createElement(X, {
              disabled: !r,
              label: Je,
              path: '/settings/superfollows/application/one_more_thing',
            }),
            c.a.createElement(X, { label: $e, path: '/settings/superfollows/application/one_more_thing' }),
          )
        },
        oa = n('9RkS'),
        sa = w.a.bbb89925,
        ca = function (e) {
          var a = e.followersCount,
            n = e.max,
            t = e.min,
            r = e.price,
            l = e.step,
            i = e.value,
            o = c.a.useState(i),
            s = q()(o, 2),
            u = s[0],
            d = s[1],
            p = Math.round(a * r * (u / 100))
          return c.a.createElement(
            x.a,
            { style: ua.container },
            c.a.createElement(
              M.b,
              { accessibilityLevel: 3, accessibilityRole: 'heading', size: 'headline2' },
              c.a.createElement(
                w.a.I18NFormatMessage,
                { $i18n: 'fe89085e' },
                c.a.createElement(M.b, { weight: 'bold' }, w.a.a7dd00ea),
                c.a.createElement(
                  M.b,
                  { style: ua.earnings, weight: 'heavy' },
                  w.a.c62c1d30({ earnings: '$'.concat(A.a.getTruncatedCount(p)) }),
                ),
                c.a.createElement(M.b, { color: 'green500', style: ua.asteriskLeft }, w.a.e0fb982b),
              ),
            ),
            c.a.createElement(
              x.a,
              { style: ua.slider },
              c.a.createElement(oa.a, {
                accessibilityLabel: '',
                max: n,
                min: t,
                onChange: d,
                step: l,
                thumbLabel: sa({ percent: u }),
                value: u,
              }),
            ),
            c.a.createElement(
              M.b,
              { color: 'green500', size: 'subtext3', style: ua.footnote },
              c.a.createElement(
                w.a.I18NFormatMessage,
                { $i18n: 'caf67b9b', price: '$'.concat(r) },
                c.a.createElement(M.b, { style: ua.asteriskRight }, w.a.e263c38e),
              ),
            ),
          )
        },
        ua = L.a.create(function (e) {
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
        da = n('6iuV'),
        pa = (n('1t7P'), n('jQ/y'), n('j7Bv')),
        ma = function (e) {
          var a = e.Icon,
            n = e.description,
            t = e.title
          return c.a.createElement(
            x.a,
            { style: ga.container },
            c.a.createElement(pa.a, { Icon: a, color: 'neutral' }),
            c.a.createElement(M.b, { size: 'headline2', style: ga.title, weight: 'bold' }, t),
            c.a.createElement(M.b, { color: 'gray700', style: ga.description }, n),
          )
        },
        ga = L.a.create(function (e) {
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
        fa = n('sUoZ'),
        ba = n('witV'),
        ha = n('ACHU'),
        ya = [
          { Icon: fa.a, title: w.a.d31c5997, description: w.a.hda1e780 },
          { Icon: ba.a, title: w.a.d08d0bb2, description: w.a.cbd8b105 },
          { Icon: ha.a, title: w.a.becb4930, description: w.a.g743ef96 },
        ],
        wa = function () {
          return c.a.createElement(
            da.a,
            null,
            ya.map(function (e) {
              return c.a.createElement(ma, g()({}, e, { key: e.title }))
            }),
          )
        },
        va = w.a.a6777c1b,
        Sa = w.a.j5dc36d7,
        _a = w.a.c45b2f06,
        ka = w.a.hb6b432e,
        Fa = w.a.cd5cae15,
        Ea = w.a.f7239f4c,
        Ca = w.a.g8cdf707,
        xa = w.a.bff8472e,
        Ka = w.a.e533715d,
        La = void 0 !== i ? i : (i = n('xd+q')),
        Pa = function (e) {
          var a = e.user,
            n = Y()(La, a).legacy.followers_count
          return c.a.createElement(
            T,
            { leftControlShouldClose: !0, withCenteredLogo: !0 },
            c.a.createElement(
              M.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              va,
            ),
            c.a.createElement(M.b, null, Sa),
            c.a.createElement(
              M.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              _a,
            ),
            c.a.createElement(M.b, { color: 'gray700' }, ka),
            c.a.createElement(Ne, { type: He.HandCoins }),
            c.a.createElement(
              M.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Fa,
            ),
            c.a.createElement(wa, null),
            c.a.createElement(
              M.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ea,
            ),
            c.a.createElement(ca, { followersCount: n, max: 10, min: 1, price: 4.99, value: 2 }),
            c.a.createElement(
              M.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              Ca,
            ),
            c.a.createElement(M.b, { color: 'gray700' }, xa),
            c.a.createElement(X, {
              color: 'plum500',
              label: Ka,
              path: '/settings/superfollows/application/eligibility',
            }),
          )
        },
        Da = w.a.d0fc4890,
        Ta = w.a.c64384b6,
        Oa = w.a.c3d89aca,
        Ba = function () {
          return c.a.createElement(
            T,
            { withInfoButton: !0 },
            c.a.createElement(Ge, { align: 'center', headline: Da, illustration: He.OneFinger, subtext: Ta }),
            c.a.createElement(X, { label: Oa, path: '/settings/superfollows/application/complete_profile' }),
          )
        },
        Ia = n('tI3i'),
        Ra = n.n(Ia),
        Va = n('FGLp'),
        za = (n('2G9S'), n('Hsf0')),
        Aa = n.n(za),
        Ma = function (e) {
          return Aa()(void 0 !== o ? o : (o = n('l/EB')), e).__id
        },
        Ua = function (e, a) {
          var n = Ma(a),
            t = e.get(n)
          return Ra()(t, 'viewer must be defined'), t
        },
        Ha = 'super_follows_application_draft',
        ja = function (e, a) {
          return Ua(e, a).getLinkedRecord(Ha)
        },
        Na = n('HG4m'),
        Wa = n.n(Na),
        Ga = n('Ud88'),
        qa = n.n(Ga)
      function Qa(e, a) {
        var n = qa()()
        Object(Va.a)(function () {
          Ra()(e, 'viewerRef must be defined'),
            Wa()(n, function (n) {
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
                if (!ja(e, a)) {
                  var w = e.create(''.concat(h, ':').concat(Ha), 'SuperFollowsApplicationDraft')
                  w.setValue(r, 'content_category'),
                    w.setValue(i, 'content_category_other'),
                    w.setValue(s, 'content_creation_platform'),
                    w.setValue(u, 'content_creation_platform_other'),
                    w.setValue(b, 'purpose'),
                    w.setValue(p, 'ethnicity'),
                    w.setValue(g, 'gender'),
                    y.setLinkedRecord(w, Ha)
                }
              })(n, e, a)
            })
        })
      }
      function Xa(e, a) {
        var n = qa()()
        return c.a.useCallback(
          function (t) {
            Ra()(e, 'viewerRef must be defined'),
              Wa()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = ja(e, a)
                  Ra()(r, 'applicationDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var Za,
        Ya,
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
        un,
        dn = n('p+r5'),
        pn = w.a.f7997b16,
        mn = w.a.fc00ab5b,
        gn = w.a.c249167f,
        fn = w.a.b772cd65,
        bn = void 0 !== Za ? Za : (Za = n('xhT1')),
        hn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(bn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_category_other) && void 0 !== a
                ? a
                : '',
            i = Xa(r, 'content_category_other')
          return c.a.createElement(
            T,
            { title: pn },
            c.a.createElement(dn.a, {
              helperText: gn,
              label: mn,
              name: 'otherCategory',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(k.a, null, fn),
          )
        },
        yn = n('fyvP'),
        wn = n('csss'),
        vn = function (e) {
          var a = e.description,
            n = e.disabled,
            t = e.history,
            r = e.label,
            l = e.path,
            i = Object(C.f)()
          return c.a.createElement(wn.a, {
            description: a,
            disabled: n,
            label: r,
            onPress: function () {
              ;(null != t ? t : i).push(l)
            },
          })
        },
        Sn = w.a.f7997b16,
        _n = w.a.c144fa52,
        kn = [
          w.a.b1f2e8ce,
          w.a.jfec3aa0,
          w.a.e08a6e6f,
          w.a.b743702c,
          w.a.h2401e36,
          w.a.ed7e6675,
          w.a.fecc3791,
          w.a.d80b0f11,
          w.a.b29a93b1,
          w.a.c5d190c0,
          w.a.i6dfc494,
          w.a.ff2b68ca,
          w.a.e404203c,
          w.a.ab389321,
          w.a.a46fdec4,
          w.a.add55c97,
          w.a.f28d8b06,
          w.a.c8ee31da,
          w.a.e0234d02,
          w.a.h9d38a08,
          w.a.fe6841bd,
          w.a.e031e06a,
          w.a.i5cade16,
          w.a.e084f2af,
          w.a.a9db15b2,
          w.a.d27beb9e,
          w.a.a92db4a9,
          w.a.fc64990d,
          w.a.hb5f1d64,
        ],
        Fn = w.a.c365dcc5,
        En = w.a.bd44a8a8,
        Cn = void 0 !== Ya ? Ya : (Ya = n('JB6R')),
        xn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Cn, t),
            l =
              null !==
                (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.content_category) &&
              void 0 !== a
                ? a
                : [],
            i = Xa(r, 'content_category'),
            o = kn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            T,
            { title: Sn },
            c.a.createElement(yn.a, {
              description: _n,
              label: _n,
              name: 'categories',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(vn, {
              helpText: En,
              label: Fn,
              path: '/settings/superfollows/application/submit_categories_other',
            }),
          )
        },
        Kn = w.a.d94a9a17,
        Ln = w.a.a35394b3,
        Pn = [
          w.a.e375c2df,
          w.a.gf30371a,
          w.a.b3773d47,
          w.a.a45caf17,
          w.a.e5f515b8,
          w.a.e3b35497,
          w.a.i83206dc,
          w.a.a4ee9393,
          w.a.ab09972f,
          w.a.jafe3705,
        ],
        Dn = void 0 !== Ja ? Ja : (Ja = n('H1we')),
        Tn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Dn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.ethnicity) &&
              void 0 !== a
                ? a
                : [],
            i = Xa(r, 'ethnicity'),
            o = Pn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            T,
            { title: Kn },
            c.a.createElement(yn.a, {
              description: Ln,
              label: Ln,
              name: 'ethnicities',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        On = w.a.a8d0108d,
        Bn = w.a.a35394b3,
        In = [
          w.a.de32365f,
          w.a.b6ab31bd,
          w.a.ffc23188,
          w.a.h1cc7091,
          w.a.hca27829,
          w.a.b3af7344,
          w.a.he3f1435,
          w.a.c3c16abb,
        ],
        Rn = void 0 !== $a ? $a : ($a = n('VG5i')),
        Vn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Rn, t),
            l =
              null !== (a = null === (n = r.super_follows_application_draft) || void 0 === n ? void 0 : n.gender) &&
              void 0 !== a
                ? a
                : [],
            i = Xa(r, 'gender'),
            o = In.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            T,
            { title: On },
            c.a.createElement(yn.a, {
              description: Bn,
              label: Bn,
              name: 'genders',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
          )
        },
        zn = w.a.da8ea7da,
        An = w.a.d7081f91,
        Mn = w.a.j349548f,
        Un = w.a.b772cd65,
        Hn = void 0 !== en ? en : (en = n('+OUG')),
        jn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Hn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform_other) && void 0 !== a
                ? a
                : '',
            i = Xa(r, 'content_creation_platform_other')
          return c.a.createElement(
            T,
            { title: zn },
            c.a.createElement(dn.a, {
              helperText: Mn,
              label: An,
              name: 'otherPlatform',
              onChange: function (e) {
                i(e.currentTarget.value)
              },
              value: l,
            }),
            c.a.createElement(k.a, null, Un),
          )
        },
        Nn = w.a.da8ea7da,
        Wn = w.a.d4062c9a,
        Gn = [w.a.a3021317, w.a.eb4a600d, w.a.d4d74bb3, w.a.fc738909, w.a.d8552c1a, w.a.ca07aa46],
        qn = w.a.c365dcc5,
        Qn = w.a.bd44a8a8,
        Xn = void 0 !== an ? an : (an = n('xnrs')),
        Zn = function (e) {
          var a,
            n,
            t = e.viewer,
            r = Y()(Xn, t),
            l =
              null !==
                (a =
                  null === (n = r.super_follows_application_draft) || void 0 === n
                    ? void 0
                    : n.content_creation_platform) && void 0 !== a
                ? a
                : [],
            i = Xa(r, 'content_creation_platform'),
            o = Gn.map(function (e) {
              return { label: e, value: e }
            })
          return c.a.createElement(
            T,
            { title: Nn },
            c.a.createElement(yn.a, {
              description: Wn,
              label: Wn,
              name: 'platforms',
              onChange: function (e, a) {
                i([a])
              },
              options: o,
              value: l[0],
            }),
            c.a.createElement(vn, {
              helpText: Qn,
              label: qn,
              path: '/settings/superfollows/application/submit_platforms_other',
            }),
          )
        },
        Yn = (n('tVqn'), n('uFXj'), w.a.f4f4dd6f),
        Jn = w.a.f448cbcb,
        $n = function (e) {
          var a = e.title,
            n = e.type,
            t = 'required' === n ? 'red500' : 'optional' === n ? 'gray700' : void 0,
            r = 'required' === n ? Yn : 'optional' === n ? Jn : void 0
          return c.a.createElement(
            x.a,
            { style: et.container },
            c.a.createElement(M.b, { size: 'headline1', weight: 'heavy' }, a),
            r && c.a.createElement(M.b, { color: t, size: 'subtext2', style: et.subtext }, r),
          )
        },
        et = L.a.create(function (e) {
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
        at = n('jV+4'),
        nt = n('Xrkv'),
        tt = n('9SqB'),
        rt = n.n(tt),
        lt = w.a.e873f0ae,
        it = w.a.f095a24a,
        ot = w.a.i5f7b6b8,
        st = w.a.d1f6d336,
        ct = w.a.f7997b16,
        ut = w.a.c144fa52,
        dt = w.a.f1bf337d,
        pt = w.a.da8ea7da,
        mt = w.a.d4062c9a,
        gt = w.a.e963d587,
        ft = w.a.ede0ac3e,
        bt = w.a.ffb6cb88,
        ht = w.a.b2159e8e,
        yt = w.a.feacb49d,
        wt = w.a.je17c987,
        vt = w.a.d94a9a17,
        St = w.a.a8d0108d,
        _t = w.a.gfc80842,
        kt = void 0 !== nn ? nn : (nn = n('pLb/')),
        Ft = void 0 !== tn ? tn : (tn = n('3qCL')),
        Et = void 0 !== rn ? rn : (rn = n('AyUU')),
        Ct = function (e) {
          var a,
            n,
            t,
            r,
            l,
            i,
            o,
            s = e.user,
            u = e.viewer,
            d = Y()(kt, s),
            p = null == d ? void 0 : d.legacy.screen_name,
            m = Y()(Ft, u),
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
            S = Xa(m, 'purpose'),
            _ = rt()(Et),
            k = q()(_, 2),
            F = k[0],
            E = k[1]
          return c.a.createElement(
            T,
            { withInfoButton: !0 },
            c.a.createElement(Ge, { headline: lt, illustration: He.Clipboard, subtext: it }),
            c.a.createElement($n, { title: ot }),
            c.a.createElement(M.b, null, st),
            p && c.a.createElement(at.a, { screenName: p }),
            c.a.createElement($n, { title: ct, type: 'required' }),
            c.a.createElement(M.b, { color: 'gray700' }, ut),
            c.a.createElement(vn, {
              description: Object(nt.a)(f, !0),
              label: dt,
              path: '/settings/superfollows/application/submit_categories',
            }),
            c.a.createElement($n, { title: pt, type: 'required' }),
            c.a.createElement(M.b, { color: 'gray700' }, mt),
            c.a.createElement(vn, {
              description: Object(nt.a)(b, !0),
              label: gt,
              path: '/settings/superfollows/application/submit_platforms',
            }),
            c.a.createElement($n, { title: ft, type: 'required' }),
            c.a.createElement(dn.a, {
              helperText: ht,
              label: bt,
              name: 'plannedUsage',
              onChange: function (e) {
                S(e.currentTarget.value)
              },
              value: h,
            }),
            c.a.createElement($n, { title: yt, type: 'optional' }),
            c.a.createElement(M.b, { color: 'gray700' }, wt),
            c.a.createElement(vn, {
              description: Object(nt.a)(y, !0),
              label: vt,
              path: '/settings/superfollows/application/submit_ethnicities',
            }),
            c.a.createElement(vn, {
              description: Object(nt.a)(w, !0),
              label: St,
              path: '/settings/superfollows/application/submit_genders',
            }),
            c.a.createElement(W, null),
            c.a.createElement(X, {
              disabled: !v || E,
              label: _t,
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
        xt = void 0 !== ln ? ln : (ln = n('o/nB')),
        Kt = void 0 !== on ? on : (on = n('lZLw')),
        Lt = function (e) {
          var a = e.user,
            n = e.viewer,
            t = c.a.useContext(I.a).featureSwitches,
            r = Y()(xt, a),
            l = Y()(Kt, n)
          if ((Qa(l), !t.isTrue('super_follow_web_application_enabled')))
            throw new Error('Super Follows application is not enabled')
          return null == l.super_follows_application_draft
            ? c.a.createElement(B.a, { to: '/settings/superfollows' })
            : c.a.createElement(
                C.d,
                null,
                c.a.createElement(
                  C.b,
                  { exact: !0, path: '/settings/superfollows/application/eligibility' },
                  c.a.createElement(ia, { user: r }),
                ),
                c.a.createElement(
                  C.b,
                  { exact: !0, path: '/settings/superfollows/application/one_more_thing' },
                  c.a.createElement(Ba, null),
                ),
                c.a.createElement(
                  C.b,
                  { exact: !0, path: '/settings/superfollows/application/complete_profile' },
                  c.a.createElement(z, null),
                ),
                c.a.createElement(
                  C.b,
                  { exact: !0, path: '/settings/superfollows/application/submit' },
                  c.a.createElement(Ct, { user: r, viewer: l }),
                ),
                c.a.createElement(
                  C.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_categories' },
                  c.a.createElement(xn, { viewer: l }),
                ),
                c.a.createElement(
                  C.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_categories_other' },
                  c.a.createElement(hn, { viewer: l }),
                ),
                c.a.createElement(
                  C.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_platforms' },
                  c.a.createElement(Zn, { viewer: l }),
                ),
                c.a.createElement(
                  C.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_platforms_other' },
                  c.a.createElement(jn, { viewer: l }),
                ),
                c.a.createElement(
                  C.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_ethnicities' },
                  c.a.createElement(Tn, { viewer: l }),
                ),
                c.a.createElement(
                  C.b,
                  { exact: !0, path: '/settings/superfollows/application/submit_genders' },
                  c.a.createElement(Vn, { viewer: l }),
                ),
                c.a.createElement(
                  C.b,
                  { path: '/settings/superfollows/application' },
                  c.a.createElement(Pa, { user: r }),
                ),
              )
        },
        Pt = (n('KqXw'), n('MvUL'), n('eb3s')),
        Dt = w.a.af4d0a80,
        Tt = w.a.c701e5cc,
        Ot = w.a.a649778b,
        Bt = w.a.d4ab68e2,
        It = function (e) {
          var a = e.onNavigation,
            n = e.shouldBlockNavigation,
            t = Object(C.f)(),
            r = c.a.useState(void 0),
            l = q()(r, 2),
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
                cancelButtonLabel: Ot,
                confirmButtonLabel: Bt,
                confirmButtonType: 'destructiveFilled',
                headline: Dt,
                onCancel: u,
                onConfirm: d,
                text: Tt,
              })
            : null
        },
        Rt = n('cHvH'),
        Vt = function (e) {
          var a = e.children,
            n = e.style,
            t = Object(Rt.b)().windowWidth > L.a.theme.breakpoints.medium ? zt.marginWide : zt.marginNarrow
          return c.a.createElement(x.a, { style: [n, t] }, a)
        },
        zt = L.a.create(function (e) {
          return {
            marginWide: { marginHorizontal: e.spaces.space80 },
            marginNarrow: { marginHorizontal: e.spaces.space16 },
          }
        }),
        At = (n('ho0z'), n('+7VC')),
        Mt = n('1k08'),
        Ut = ['style'],
        Ht = w.a.b600eb88,
        jt = w.a.b08bbeb4,
        Nt = function (e) {
          var a = e.style,
            n = b()(e, Ut),
            t = Object(Rt.b)().windowWidth > L.a.theme.breakpoints.medium
          return c.a.createElement(
            x.a,
            { style: [Wt.root, t && Wt.rootWide, a] },
            c.a.createElement(Mt.a, { description: jt, title: Ht }),
            c.a.createElement(At.a, g()({}, n, { style: Wt.exclusiveDemoVIPContent })),
          )
        },
        Wt = L.a.create(function (e) {
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
        Gt = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(
            x.a,
            { style: [Xt.frame, n] },
            c.a.createElement(
              x.a,
              { style: Xt.browserBar },
              c.a.createElement(
                x.a,
                { style: Xt.browserBarButtons },
                c.a.createElement(x.a, { style: Xt.browserBarButton }),
                c.a.createElement(x.a, { style: Xt.browserBarButton }),
                c.a.createElement(x.a, { style: Xt.browserBarButton }),
              ),
              c.a.createElement(
                x.a,
                { style: Xt.browserBarUrlInputWrapper },
                c.a.createElement(x.a, { style: Xt.browserBarUrlInput }),
              ),
            ),
            a,
          )
        },
        qt = function (e) {
          var a = e.children,
            n = e.style
          return c.a.createElement(x.a, { style: n }, c.a.createElement(x.a, { style: Xt.content }, a))
        },
        Qt = function (e) {
          var a = e.children,
            n = e.style
          return Object(Rt.b)().windowWidth > L.a.theme.breakpoints.medium
            ? c.a.createElement(Gt, { style: n }, c.a.createElement(qt, { style: Xt.contentWide }, a))
            : c.a.createElement(qt, { style: n }, a)
        },
        Xt = L.a.create(function (e) {
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
        Zt = n('lD8l'),
        Yt = (n('kH1Z'), n('6U7i'), n('9VLy')),
        Jt = n('6OUF'),
        $t = n('yTN1'),
        er = w.a.a329ce87,
        ar = function (e, a) {
          var n,
            t = e.autoFocus,
            r = e.imageUrl,
            l = e.onChange,
            i = e.screenName,
            o = e.style,
            s = e.value,
            u = e.valueMaxLength
          return c.a.createElement(
            x.a,
            { style: [tr.root, o] },
            l
              ? c.a.createElement(Jt.a, {
                  autoFocus: t,
                  inputStyle: tr.descriptionInput,
                  isCompact: !0,
                  leftAligned: !0,
                  maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                  multiline: !0,
                  name: 'description',
                  numberOfLines: 1,
                  onChange: l,
                  placeholder: er,
                  ref: a,
                  style: tr.description,
                  value: s,
                })
              : c.a.createElement(M.b, { color: 'gray700', style: tr.description }, s),
            c.a.createElement(
              x.a,
              { style: tr.signatureWrapper },
              c.a.createElement(Yt.a, { imageUrl: r, screenName: i, style: [tr.signature, !s && tr.visibilityHidden] }),
              l &&
                u &&
                c.a.createElement($t.a, {
                  count: null !== (n = null == s ? void 0 : s.length) && void 0 !== n ? n : 0,
                  maxCount: u,
                  warningCount: u - 10,
                }),
            ),
          )
        },
        nr = c.a.forwardRef(ar),
        tr = L.a.create(function (e) {
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
        rr = ['style'],
        lr = w.a.cbc8ce27,
        ir = function (e, a) {
          var n = e.style,
            t = b()(e, rr),
            r = Object(Rt.b)().windowWidth > L.a.theme.breakpoints.medium
          return c.a.createElement(
            x.a,
            { style: [sr.root, r && sr.rootWide, n] },
            c.a.createElement(
              M.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              lr,
            ),
            c.a.createElement(nr, g()({}, t, { ref: a, style: sr.description })),
          )
        },
        or = c.a.forwardRef(ir),
        sr = L.a.create(function (e) {
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
        cr = ['style'],
        ur = function (e, a) {
          e.style
          var n = b()(e, cr)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(or, g()({}, n, { ref: a })),
            c.a.createElement(Zt.a, { style: pr.exclusiveDemoBonusContent }),
          )
        },
        dr = c.a.forwardRef(ur),
        pr = L.a.create(function (e) {
          return {
            exclusiveDemoBonusContent: {
              alignSelf: 'center',
              marginBottom: e.spaces.space32,
              marginTop: e.spaces.space16,
            },
          }
        }),
        mr = n('MAc7'),
        gr = 'super_follows_onboarding_draft',
        fr = function (e, a) {
          return Ua(e, a).getLinkedRecord(gr)
        }
      function br(e, a) {
        var n = qa()()
        Object(Va.a)(function () {
          Ra()(e, 'viewerRef must be defined'),
            Wa()(n, function (n) {
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
                if (!fr(e, a)) {
                  var d = e.create(''.concat(c, ':').concat(gr), 'SuperFollowsOnboardingDraft')
                  d.setValue(r, 'creator_intro'),
                    d.setValue(i, 'description'),
                    d.setValue(s, 'selected_price'),
                    u.setLinkedRecord(d, 'super_follows_onboarding_draft')
                }
              })(n, e, a)
            })
        })
      }
      function hr(e, a) {
        var n = qa()()
        return c.a.useCallback(
          function (t) {
            Ra()(e, 'viewerId must be defined'),
              Wa()(n, function (n) {
                !(function (e, a, n, t) {
                  var r = fr(e, a)
                  Ra()(r, 'onboardingDraft must be defined'), r.setValue(t, n)
                })(n, e, a, t)
              })
          },
          [n, a, e],
        )
      }
      var yr,
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
        Lr,
        Pr,
        Dr,
        Tr,
        Or,
        Br,
        Ir,
        Rr,
        Vr,
        zr,
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
        gl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = Y()(void 0 !== sn ? sn : (sn = n('krsm')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.creator_intro) && void 0 !== a
            ? a
            : ''
        },
        fl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = Y()(void 0 !== cn ? cn : (cn = n('ZaCQ')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.description) && void 0 !== a
            ? a
            : ''
        },
        bl = function (e) {
          var a, t
          return null !==
            (a =
              null === (t = Y()(void 0 !== un ? un : (un = n('K7/K')), e).super_follows_onboarding_draft) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        hl = void 0 !== yr ? yr : (yr = n('STrk')),
        yl = void 0 !== wr ? wr : (wr = n('bWed')),
        wl = function (e) {
          var a,
            n,
            t = e.user,
            r = e.viewer,
            l = Y()(hl, t),
            i = Y()(yl, r),
            o = (null == l ? void 0 : l.legacy) || {},
            s = o.name,
            u = o.profile_image_url_https,
            d = o.screen_name,
            p = null !== (a = gl(i)) && void 0 !== a ? a : '',
            m = null !== (n = fl(i)) && void 0 !== n ? n : ''
          return (
            Ra()('string' == typeof u, 'imageUrl must be defined'),
            Ra()('string' == typeof s, 'name must be defined'),
            Ra()('string' == typeof d, 'screenName must be defined'),
            c.a.createElement(
              Qt,
              null,
              c.a.createElement(
                x.a,
                { style: vl.browserContent },
                c.a.createElement(mr.a, { imageUrl: u, name: s, value: p }),
                c.a.createElement(dr, { imageUrl: u, screenName: d, value: m }),
                c.a.createElement(Nt, { user: l }),
              ),
            )
          )
        },
        vl = L.a.create(function (e) {
          return {
            browserContent: { paddingBottom: e.spaces.space48 },
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            blob: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
          }
        }),
        Sl = ['label', 'path'],
        _l = function (e) {
          var a = e.label,
            n = e.path,
            t = b()(e, Sl),
            r = Object(C.f)()
          return c.a.createElement(
            M.b,
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
        kl = w.a.hf6f2913,
        Fl = w.a.i859a9d3,
        El = L.a.create(function (e) {
          return { root: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } }
        }),
        Cl = function (e) {
          var a = e.path,
            n = e.style
          return c.a.createElement(
            x.a,
            { style: [El.root, n] },
            c.a.createElement(M.b, { size: 'headline2', weight: 'heavy' }, kl),
            c.a.createElement(_l, { label: Fl, path: a }),
          )
        },
        xl = n('0yYu'),
        Kl = w.a.iba08a94,
        Ll = w.a.ef354e83,
        Pl = void 0 !== vr ? vr : (vr = n('UFp0')),
        Dl = void 0 !== Sr ? Sr : (Sr = n('NmgE')),
        Tl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Y()(Pl, a),
            r = Y()(Dl, n)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Vt, { style: Ol.interstitial }, c.a.createElement(Ge, { headline: Kl, subtext: Ll })),
            c.a.createElement(xl.a, null),
            c.a.createElement(
              Vt,
              { style: Ol.previewCallout },
              c.a.createElement(Cl, { path: '/settings/superfollows/perks_preview' }),
            ),
            c.a.createElement(x.a, { style: Ol.summaryFramed }, c.a.createElement(wl, { user: t, viewer: r })),
          )
        },
        Ol = L.a.create(function (e) {
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
        Bl = w.a.hf6f2913,
        Il = void 0 !== _r ? _r : (_r = n('MvEh')),
        Rl = void 0 !== kr ? kr : (kr = n('U5ka')),
        Vl = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Y()(Il, a),
            r = Y()(Rl, n)
          return c.a.createElement(T, { title: Bl, withInfoButton: !0 }, c.a.createElement(Tl, { user: t, viewer: r }))
        },
        zl = ['style'],
        Al = function (e, a) {
          var n = e.style,
            t = b()(e, zl)
          return c.a.createElement(
            Qt,
            { style: n },
            c.a.createElement(c.a.Fragment, null, c.a.createElement(dr, g()({}, t, { ref: a }))),
          )
        },
        Ml = c.a.forwardRef(Al),
        Ul = w.a.gf32cca1,
        Hl = w.a.j8ba99b3,
        jl = w.a.j679dcda,
        Nl = void 0 !== Fr ? Fr : (Fr = n('yjSu')),
        Wl = void 0 !== Er ? Er : (Er = n('RTdz')),
        Gl = function (e, a) {
          var n = e.autoFocus,
            t = e.descriptionMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(Va.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = Y()(Nl, r),
            s = Y()(Wl, l),
            u = o.legacy,
            d = u.profile_image_url_https,
            p = u.screen_name,
            m = fl(s),
            g = hr(s, 'description')
          return (
            Ra()('string' == typeof d, 'imageUrl must be defined'),
            Ra()('string' == typeof p, 'screenName must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Vt, { style: Ql.interstitial }, c.a.createElement(Ge, { headline: Ul, subtext: Hl })),
              c.a.createElement(
                Vt,
                { style: Ql.examplesLink },
                c.a.createElement(_l, { label: jl, path: '/settings/superfollows/perks_description_examples' }),
              ),
              c.a.createElement(xl.a, null),
              c.a.createElement(
                Vt,
                { style: Ql.previewCallout },
                c.a.createElement(Cl, { path: '/settings/superfollows/perks_preview' }),
              ),
              c.a.createElement(Ml, {
                autoFocus: n,
                imageUrl: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                screenName: p,
                style: Ql.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(x.a, { ref: i }),
            )
          )
        },
        ql = c.a.forwardRef(Gl),
        Ql = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Xl =
          (n('hBpG'),
          n('5BYb'),
          function (e) {
            var a, t
            return null !==
              (a =
                null === (t = Y()(void 0 !== xr ? xr : (xr = n('WDhg')), e).super_follow_creator_benefits) ||
                void 0 === t
                  ? void 0
                  : t.creator_intro) && void 0 !== a
              ? a
              : ''
          }),
        Zl = function (e) {
          var a,
            t,
            r,
            l = (
              null !==
                (a =
                  null === (t = Y()(void 0 !== Kr ? Kr : (Kr = n('G/nI')), e).super_follow_creator_benefits) ||
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
              null === (t = Y()(void 0 !== Lr ? Lr : (Lr = n('dGIC')), e).super_follow_creator_price_metadata) ||
              void 0 === t
                ? void 0
                : t.selected_price) && void 0 !== a
            ? a
            : null
        },
        Jl = (n('jwue'), n('+oxZ'), void 0 !== Pr ? Pr : (Pr = n('rwq4'))),
        $l = void 0 !== Dr ? Dr : (Dr = n('E9LA')),
        ei = function (e, a) {
          var t = a.creatorIntro,
            r = a.description,
            l = Y()(Jl, e),
            i = (function (e) {
              var a
              return null === (a = Y()(void 0 !== Cr ? Cr : (Cr = n('lWeI')), e).super_follow_creator_benefits) ||
                void 0 === a
                ? void 0
                : a.__id
            })(l),
            o = Xl(l),
            s = Zl(l),
            u = t || o,
            d = r || s,
            p = rt()($l),
            m = q()(p, 2),
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
                      Ra()(i, 'benefitsId must be specified')
                      var a = e.get(i)
                      if (
                        (Ra()(a, 'benefitsRecord must be specified'),
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
        ai = w.a.cd5cae15,
        ni = w.a.e36287c6,
        ti = w.a.b772cd65,
        ri = void 0 !== Tr ? Tr : (Tr = n('kz1e')),
        li = void 0 !== Or ? Or : (Or = n('M3aw')),
        ii = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Y()(ri, a),
            r = Y()(li, n),
            l = Zl(t),
            i = fl(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = ei(t, { description: i }),
            u = q()(s, 2),
            d = u[0],
            p = u[1],
            m = {
              disabled: !o || p,
              label: ti,
              onPress: d,
              path: '/settings/superfollows/management',
              type: 'primaryFilled',
            },
            f = c.a.createElement(X, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            T,
            { rightControl: f, subtitle: ni, title: ai },
            c.a.createElement(ql, { autoFocus: !0, descriptionMaxLength: 140, user: t, viewer: r }),
          )
        },
        oi = ['style'],
        si = function (e, a) {
          var n = e.style,
            t = b()(e, oi)
          return c.a.createElement(Qt, { style: n }, c.a.createElement(mr.a, g()({}, t, { ref: a })))
        },
        ci = c.a.forwardRef(si),
        ui = w.a.j3253319,
        di = w.a.h1e80993,
        pi = w.a.j679dcda,
        mi = void 0 !== Br ? Br : (Br = n('hGtx')),
        gi = void 0 !== Ir ? Ir : (Ir = n('DWSt')),
        fi = function (e, a) {
          var n = e.autoFocus,
            t = e.introMaxLength,
            r = e.user,
            l = e.viewer,
            i = c.a.useRef()
          Object(Va.a)(function () {
            var e
            n && null !== (e = i.current) && void 0 !== e && e.scrollIntoView && i.current.scrollIntoView()
          })
          var o = Y()(mi, r),
            s = Y()(gi, l),
            u = o.legacy,
            d = u.name,
            p = u.profile_image_url_https,
            m = gl(s),
            g = hr(s, 'creator_intro')
          return (
            Ra()('string' == typeof p, 'imageUrl must be defined'),
            Ra()('string' == typeof d, 'name must be defined'),
            c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(Vt, { style: hi.interstitial }, c.a.createElement(Ge, { headline: ui, subtext: di })),
              c.a.createElement(
                Vt,
                { style: hi.examplesLink },
                c.a.createElement(_l, { label: pi, path: '/settings/superfollows/perks_intro_examples' }),
              ),
              c.a.createElement(xl.a, null),
              c.a.createElement(
                Vt,
                { style: hi.previewCallout },
                c.a.createElement(Cl, { path: '/settings/superfollows/perks_preview' }),
              ),
              c.a.createElement(ci, {
                autoFocus: n,
                imageUrl: p,
                name: d,
                onChange: function (e) {
                  g(e.currentTarget.value)
                },
                ref: a,
                style: hi.preview,
                value: m,
                valueMaxLength: t,
              }),
              c.a.createElement(x.a, { ref: i }),
            )
          )
        },
        bi = c.a.forwardRef(fi),
        hi = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            examplesLink: { marginBottom: e.spaces.space28, marginTop: e.spaces.space24 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        yi = w.a.cd5cae15,
        wi = w.a.c0348963,
        vi = w.a.b772cd65,
        Si = void 0 !== Rr ? Rr : (Rr = n('oyMe')),
        _i = void 0 !== Vr ? Vr : (Vr = n('RL7R')),
        ki = function (e) {
          var a = e.user,
            n = e.viewer,
            t = Y()(Si, a),
            r = Y()(_i, n),
            l = Xl(t),
            i = gl(r),
            o = i.length > 0 && i.length <= 140 && i !== l,
            s = ei(t, { creatorIntro: i }),
            u = q()(s, 2),
            d = u[0],
            p = u[1],
            m = {
              disabled: !o || p,
              label: vi,
              onPress: d,
              path: '/settings/superfollows/management',
              type: 'primaryFilled',
            },
            f = c.a.createElement(X, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            T,
            { rightControl: f, subtitle: wi, title: yi },
            c.a.createElement(bi, { autoFocus: !0, introMaxLength: 140, user: t, viewer: r }),
          )
        },
        Fi = n('Nh1N'),
        Ei = n('yoO3'),
        Ci = n('7FtF'),
        xi = w.a.be103b84,
        Ki = function () {
          return c.a.createElement(
            x.a,
            { style: Li.root },
            c.a.createElement(U.a, { style: Li.icon }),
            c.a.createElement(M.b, { size: 'subtext2', weight: 'bold' }, xi),
          )
        },
        Li = L.a.create(function (e) {
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
            x.a,
            { style: Di.root },
            c.a.createElement(
              x.a,
              { style: Di.header },
              c.a.createElement(
                M.b,
                {
                  accessibilityLevel: 4,
                  accessibilityRole: 'heading',
                  size: 'headline2',
                  style: Di.headline,
                  weight: 'heavy',
                },
                n,
              ),
              a,
            ),
            t,
          )
        },
        Di = L.a.create(function (e) {
          return {
            root: { alignItems: 'start', flexDirection: 'row', gap: e.spaces.space8 },
            header: { flex: 1 },
            headline: { marginBottom: e.spaces.space8 },
          }
        }),
        Ti = n('4zmP'),
        Oi = n.p + 'Chat.62494e65.png',
        Bi = n.p + 'Chat@2x.f6eeca05.png',
        Ii = n.p + 'Chat@3x.dd8438c5.png',
        Ri = n.p + 'Cog.788d3515.png',
        Vi = n.p + 'Cog@2x.3528d165.png',
        zi = n.p + 'Cog@3x.e4185e95.png',
        Ai = n.p + 'Coin.684ea185.png',
        Mi = n.p + 'Coin@2x.9e020695.png',
        Ui = n.p + 'Coin@3x.d5ecbc95.png',
        Hi = n.p + 'CoinPurse.5e7e5f25.png',
        ji = n.p + 'CoinPurse@2x.62abfad5.png',
        Ni = n.p + 'CoinPurse@3x.6b9f5d05.png',
        Wi = n.p + 'Cone.e7e68c95.png',
        Gi = n.p + 'Cone@2x.94d66a15.png',
        qi = n.p + 'Cone@3x.f4718655.png',
        Qi = n.p + 'Cross.eed0ff55.png',
        Xi = n.p + 'Cross@2x.68249435.png',
        Zi = n.p + 'Cross@3x.59595055.png',
        Yi = n.p + 'FirstAid.962ae7e5.png',
        Ji = n.p + 'FirstAid@2x.09640055.png',
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
        wo = n.p + 'Plant.2e93bbb5.png',
        vo = n.p + 'Plant@2x.5660c145.png',
        So = n.p + 'Plant@3x.60b66855.png',
        _o = n.p + 'Puzzle.59175915.png',
        ko = n.p + 'Puzzle@2x.d2394395.png',
        Fo = n.p + 'Puzzle@3x.ed9bd735.png',
        Eo = n.p + 'Ribbon.a0d66a65.png',
        Co = n.p + 'Ribbon@2x.d981e095.png',
        xo = n.p + 'Ribbon@3x.d6c8e505.png',
        Ko = n.p + 'Spheres.c33c7b95.png',
        Lo = n.p + 'Spheres@2x.6b6732f5.png',
        Po = n.p + 'Spheres@3x.5e58c985.png',
        Do = n.p + 'Star.2714eb95.png',
        To = n.p + 'Star@2x.25a57fd5.png',
        Oo = n.p + 'Star@3x.206f9d85.png',
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
        jo = Ho.reduce(function (e, a) {
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
        No = function (e) {
          var a = e.type,
            n = e.width,
            t = void 0 === n ? 36 : n,
            r = jo[a],
            l = r.aspectRatio,
            i = r.customVariants,
            o = r.image,
            s = { width: t, height: Math.round(t / l) }
          return c.a.createElement(
            x.a,
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
            x.a,
            { style: Go.root },
            r && c.a.createElement(No, { type: r, width: 36 }),
            c.a.createElement(
              x.a,
              { style: Go.header },
              c.a.createElement(
                M.b,
                {
                  accessibilityLevel: 3,
                  accessibilityRole: 'heading',
                  size: 'headline1',
                  style: Go.headline,
                  weight: 'heavy',
                },
                t,
              ),
              l,
            ),
            c.a.createElement(x.a, { style: n }, a),
          )
        },
        Go = L.a.create(function (e) {
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
        qo = ['$refType'],
        Qo = w.a.a6777c1b,
        Xo = w.a.a384fda0,
        Zo = w.a.i4313618,
        Yo = w.a.c0348963,
        Jo = w.a.ic624ab2,
        $o = w.a.ifc9b709,
        es = w.a.b08bbeb4,
        as = w.a.ia9c37c4,
        ns = w.a.fb1e4eb6,
        ts = w.a.be54a312,
        rs = w.a.cca48545,
        ls = w.a.de67bc6e,
        is = w.a.a46cead5,
        os = w.a.idd8ae44,
        ss = w.a.b28a1b48,
        cs = w.a.f2df375b,
        us = w.a.f3ce76c0,
        ds = w.a.i8982e7e,
        ps = w.a.ca5ca5ed,
        ms = w.a.abd845fd,
        gs = w.a.i859a9d3,
        fs = w.a.d14c7bbc,
        bs = w.a.g867481d,
        hs = w.a.f66d24be,
        ys = w.a.g5925628,
        ws = void 0 !== zr ? zr : (zr = n('EM6u')),
        vs = void 0 !== Ar ? Ar : (Ar = n('oNwH')),
        Ss = function (e) {
          var a,
            n,
            t,
            r = e.priceOfferings,
            l = e.user,
            i = Object(C.g)(),
            o = Y()(ws, r),
            s = (o.$refType, b()(o, qo)),
            u = Y()(vs, l),
            d = Xl(u),
            p = Zl(u),
            m = null !== (a = Yl(u)) && void 0 !== a ? a : 'offer2',
            g = null !== (n = u.legacy.profile_image_url_https) && void 0 !== n ? n : void 0,
            f = null !== (t = u.legacy.screen_name) && void 0 !== t ? t : void 0,
            h = c.a.createElement(_l, {
              label: ps,
              path: '/settings/superfollows/management/perks_confirm',
              size: 'subtext1',
            }),
            y = c.a.createElement(X, {
              label: ms,
              path: '/settings/superfollows/management/perks_intro',
              size: 'small',
              type: 'primaryOutlined',
            }),
            w = c.a.createElement(X, {
              label: ms,
              path: '/settings/superfollows/management/perks_description',
              size: 'small',
              type: 'primaryOutlined',
            })
          return c.a.createElement(
            Ei.a,
            null,
            c.a.createElement(
              Ci.a,
              { location: i, screenType: 'secondaryDetail', title: Qo },
              c.a.createElement(
                x.a,
                { style: _s.title },
                c.a.createElement(
                  M.b,
                  { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
                  Qo,
                ),
                c.a.createElement(Ki, null),
              ),
              c.a.createElement(xl.a, null),
              c.a.createElement(
                Wo,
                { childrenStyle: _s.benefits, headline: Xo, illustration: Uo.Ribbon, rightControl: h },
                c.a.createElement(M.b, { color: 'gray700' }, Zo),
                c.a.createElement(
                  Pi,
                  { headline: Yo, rightControl: y },
                  c.a.createElement(nr, { imageUrl: g, screenName: f, value: d }),
                ),
                c.a.createElement(
                  Pi,
                  { headline: Jo, rightControl: w },
                  c.a.createElement(nr, { imageUrl: g, screenName: f, value: p }),
                ),
                c.a.createElement(Pi, { headline: $o }, c.a.createElement(M.b, { color: 'gray700' }, es)),
              ),
              c.a.createElement(xl.a, null),
              c.a.createElement(
                Wo,
                { childrenStyle: _s.other, headline: as, illustration: Uo.PiggyBank },
                c.a.createElement(M.b, { color: 'gray700' }, ns),
                c.a.createElement(M.b, { size: 'headline2', weight: 'heavy' }, ts({ price: s[m] })),
                c.a.createElement(Ti.a, { Icon: Fi.a, action: { label: gs, link: _ }, headline: rs, text: ls }),
              ),
              c.a.createElement(xl.a, null),
              c.a.createElement(
                Wo,
                { childrenStyle: _s.other, headline: is, illustration: Uo.Chat },
                c.a.createElement(M.b, { color: 'gray700' }, os),
                c.a.createElement(
                  x.a,
                  { style: _s.buttons },
                  c.a.createElement(
                    k.a,
                    {
                      dominantColor: '#5865F2',
                      link: 'https://t.co/jPqvg6tFrDJG',
                      style: _s.button,
                      type: 'onMediaDominantColorFilled',
                    },
                    fs,
                  ),
                ),
              ),
              c.a.createElement(xl.a, null),
              c.a.createElement(
                Wo,
                { childrenStyle: _s.other, headline: ss, illustration: Uo.Lightbulb },
                c.a.createElement(M.b, { color: 'gray700' }, cs),
                c.a.createElement(
                  x.a,
                  { style: _s.buttons },
                  c.a.createElement(
                    k.a,
                    { link: 'https://t.co/RL2NN3bEVkes', style: _s.button, type: 'primaryOutlined' },
                    bs,
                  ),
                ),
              ),
              c.a.createElement(xl.a, null),
              c.a.createElement(
                Wo,
                { childrenStyle: _s.other, headline: us, illustration: Uo.LifeSaver },
                c.a.createElement(M.b, { color: 'gray700' }, ds),
                c.a.createElement(
                  x.a,
                  { style: _s.buttons },
                  c.a.createElement(k.a, { link: S, style: _s.button, type: 'primaryOutlined' }, hs),
                  c.a.createElement(
                    k.a,
                    {
                      link: 'https://help.twitter.com/forms/paid-features/superfollows',
                      style: _s.button,
                      type: 'primaryOutlined',
                    },
                    ys,
                  ),
                ),
              ),
            ),
          )
        },
        _s = L.a.create(function (e) {
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
        ks = void 0 !== Mr ? Mr : (Mr = n('N6s9')),
        Fs = void 0 !== Ur ? Ur : (Ur = n('h3lO')),
        Es = function (e) {
          var a = e.rootPath,
            n = e.user,
            t = e.viewer,
            r = Y()(ks, n),
            l = Y()(Fs, t),
            i = Xl(r),
            o = Zl(r),
            s = Yl(r),
            u = gl(l),
            d = fl(l),
            p = bl(l),
            m = hr(l, 'creator_intro'),
            g = hr(l, 'description'),
            f = hr(l, 'selected_price')
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
        Cs = void 0 !== Hr ? Hr : (Hr = n('MXCg')),
        xs = void 0 !== jr ? jr : (jr = n('mEFY')),
        Ks = void 0 !== Nr ? Nr : (Nr = n('d8Sa')),
        Ls = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(I.a).featureSwitches,
            l = Y()(Cs, a),
            i = Y()(xs, n),
            o = Y()(Ks, t),
            s = Xl(i),
            u = Zl(i),
            d = Yl(i),
            p = Es({ rootPath: '/settings/superfollows/management', user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (br(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_edit_perks_enabled'))
          )
            throw new Error('Super Follows management is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(B.a, { to: '/settings/superfollows' })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(It, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  C.d,
                  null,
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/management/perks_intro' },
                    c.a.createElement(ki, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/management/perks_description' },
                    c.a.createElement(ii, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/management/perks_confirm' },
                    c.a.createElement(Vl, { user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    C.b,
                    { path: '/settings/superfollows/management' },
                    c.a.createElement(Ss, { priceOfferings: l, user: i }),
                  ),
                ),
              )
        },
        Ps = w.a.b422cb62,
        Ds = w.a.f08705e0,
        Ts = w.a.e2cd700f,
        Os = w.a.fbfd7397,
        Bs = w.a.c1df579e,
        Is = w.a.d8637c96,
        Rs = w.a.b92892dc,
        Vs = w.a.b123a502,
        zs = void 0 !== Wr ? Wr : (Wr = n('wQp3')),
        As = void 0 !== Gr ? Gr : (Gr = n('tfBr')),
        Ms = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = Y()(zs, n),
            l = Y()(As, t),
            i = r.stripe_account_status,
            o = gl(l),
            s = fl(l),
            u = bl(l),
            d = [
              { label: Is, checked: !!o && !!s },
              { label: Rs, checked: !!u },
              { label: Vs, checked: 'Completed' === i },
            ],
            p = d.some(function (e) {
              return e.checked
            }),
            m = c.a.createElement(X, {
              label: Bs,
              path: '/settings/superfollows/onboarding/perks_intro',
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            T,
            {
              leftControlShouldClose: !0,
              percentageComplete: a,
              rightControl: m,
              withCenteredLogo: !0,
              withInfoButton: !0,
            },
            c.a.createElement(
              Vt,
              { style: Us.interstitial },
              c.a.createElement(Ge, {
                headline: p ? Ts : Ps,
                illustration: p ? He.Puzzle : He.Cat,
                subtext: p ? Os : Ds,
              }),
            ),
            c.a.createElement(Vt, { style: Us.checks }, c.a.createElement(j, { items: d })),
          )
        },
        Us = L.a.create(function (e) {
          return { interstitial: { marginTop: e.spaces.space32 }, checks: { marginVertical: e.spaces.space32 } }
        }),
        Hs = ['style'],
        js = function (e) {
          var a = e.style,
            n = b()(e, Hs)
          return c.a.createElement(
            Qt,
            { style: a },
            c.a.createElement(Nt, g()({ style: Ns.exclusiveDemoVIPContentHeader }, n)),
          )
        },
        Ns = L.a.create(function (e) {
          return { exclusiveDemoVIPContentHeader: { alignSelf: 'center', marginBottom: e.spaces.space16 } }
        }),
        Ws = w.a.cda6bb6d,
        Gs = w.a.a15b98ec,
        qs = void 0 !== qr ? qr : (qr = n('mDly')),
        Qs = function (e) {
          var a = e.user,
            n = Y()(qs, a)
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(Vt, { style: Xs.interstitial }, c.a.createElement(Ge, { headline: Ws, subtext: Gs })),
            c.a.createElement(xl.a, null),
            c.a.createElement(
              Vt,
              { style: Xs.previewCallout },
              c.a.createElement(Cl, { path: '/settings/superfollows/perks_preview' }),
            ),
            c.a.createElement(js, { style: Xs.preview, user: n }),
          )
        },
        Xs = L.a.create(function (e) {
          return {
            interstitial: { marginBottom: e.spaces.space28, marginTop: e.spaces.space32 },
            previewCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 },
            preview: { margin: e.spaces.space16 },
          }
        }),
        Zs = w.a.cd5cae15,
        Ys = w.a.ad4a92a2,
        Js = w.a.c1df579e,
        $s = void 0 !== Qr ? Qr : (Qr = n('QmjQ')),
        ec = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = { label: Js, path: '/settings/superfollows/onboarding/perks_confirm', type: 'primaryFilled' },
            r = c.a.createElement(X, t),
            l = c.a.createElement(X, g()({}, t, { size: 'small' })),
            i = Y()($s, n)
          return c.a.createElement(
            T,
            { percentageComplete: a, rightControl: l, subtitle: Ys, title: Zs },
            c.a.createElement(Qs, { user: i }),
            c.a.createElement(Vt, { style: ac.buttons }, r),
          )
        },
        ac = L.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        nc = w.a.cd5cae15,
        tc = w.a.e18b7a71,
        rc = w.a.c1df579e,
        lc = void 0 !== Xr ? Xr : (Xr = n('Rthh')),
        ic = void 0 !== Zr ? Zr : (Zr = n('aREQ')),
        oc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = Y()(lc, n),
            l = Y()(ic, t),
            i = { label: rc, path: '/settings/superfollows/onboarding/pricing', type: 'primaryFilled' },
            o = c.a.createElement(X, i),
            s = c.a.createElement(X, g()({}, i, { size: 'small' }))
          return c.a.createElement(
            T,
            { percentageComplete: a, rightControl: s, subtitle: tc, title: nc },
            c.a.createElement(Tl, { user: r, viewer: l }),
            c.a.createElement(Vt, { style: sc.buttons }, o),
          )
        },
        sc = L.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        cc = w.a.cd5cae15,
        uc = w.a.e36287c6,
        dc = w.a.be76dc33,
        pc = w.a.c1df579e,
        mc = void 0 !== Yr ? Yr : (Yr = n('6rkJ')),
        gc = void 0 !== Jr ? Jr : (Jr = n('tJ4s')),
        fc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = Y()(gc, t),
            i = Y()(mc, n),
            o = fl(l),
            s = o.length > 0 && o.length <= 140,
            u = {
              disabled: !s,
              label: pc,
              path: '/settings/superfollows/onboarding/perks_badges',
              type: 'primaryFilled',
            },
            d = c.a.createElement(X, u),
            p = c.a.createElement(X, g()({}, u, { size: 'small' })),
            m = {
              children: dc,
              onClick: function () {
                var e
                null == r || null === (e = r.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            f = c.a.createElement(k.a, m),
            b = c.a.createElement(k.a, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            T,
            { percentageComplete: a, rightControl: s ? p : b, subtitle: uc, title: cc },
            c.a.createElement(ql, { descriptionMaxLength: 140, ref: r, user: i, viewer: l }),
            c.a.createElement(Vt, { style: bc.buttons }, s ? d : f),
          )
        },
        bc = L.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        hc = w.a.cd5cae15,
        yc = w.a.c0348963,
        wc = w.a.ef5406e3,
        vc = w.a.c1df579e,
        Sc = void 0 !== $r ? $r : ($r = n('02qo')),
        _c = void 0 !== el ? el : (el = n('TXsE')),
        kc = function (e) {
          var a = e.percentageComplete,
            n = e.user,
            t = e.viewer,
            r = c.a.useRef(),
            l = Y()(Sc, n),
            i = Y()(_c, t),
            o = gl(i),
            s = o.length > 0 && o.length <= 140,
            u = {
              disabled: !s,
              label: vc,
              path: '/settings/superfollows/onboarding/perks_description',
              type: 'primaryFilled',
            },
            d = c.a.createElement(X, u),
            p = c.a.createElement(X, g()({}, u, { size: 'small' })),
            m = {
              children: wc,
              onClick: function () {
                var e
                null == r || null === (e = r.current) || void 0 === e || e.focus()
              },
              type: 'primaryFilled',
            },
            f = c.a.createElement(k.a, m),
            b = c.a.createElement(k.a, g()({}, m, { size: 'small' }))
          return c.a.createElement(
            T,
            { percentageComplete: a, rightControl: s ? p : b, subtitle: yc, title: hc },
            c.a.createElement(bi, { introMaxLength: 140, ref: r, user: l, viewer: i }),
            c.a.createElement(Vt, { style: Fc.buttons }, s ? d : f),
          )
        },
        Fc = L.a.create(function (e) {
          return { buttons: { gap: e.spaces.space16, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 } }
        }),
        Ec = ['$refType'],
        Cc = w.a.ea8a3d2d,
        xc = w.a.f77bb178,
        Kc = w.a.cd75a5d4,
        Lc = w.a.g9677c6d,
        Pc = w.a.abd845fd,
        Dc = void 0 !== al ? al : (al = n('IeZm')),
        Tc = void 0 !== nl ? nl : (nl = n('7ESn')),
        Oc = void 0 !== tl ? tl : (tl = n('By/j')),
        Bc = function (e) {
          var a,
            n = e.percentageComplete,
            t = e.priceOfferings,
            r = e.viewer,
            l = Y()(Dc, t),
            i = (l.$refType, b()(l, Ec)),
            o = Y()(Tc, r),
            s = gl(o),
            u = fl(o),
            d = null !== (a = bl(o)) && void 0 !== a ? a : i[0],
            p = rt()(Oc),
            m = q()(p, 2),
            g = m[0],
            f = m[1]
          return c.a.createElement(
            T,
            { percentageComplete: n, title: Cc, withInfoButton: !0 },
            c.a.createElement(
              Vt,
              { style: Ic.interstitial },
              c.a.createElement(Ge, { headline: xc({ price: i[d] }), illustration: He.Pricing, subtext: Kc }),
            ),
            c.a.createElement(
              Vt,
              { style: Ic.buttons },
              c.a.createElement(X, {
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
                path: '/settings/superfollows/onboarding/stripe_setup',
                type: 'primaryFilled',
              }),
              c.a.createElement(X, {
                disabled: f,
                label: Pc,
                path: '/settings/superfollows/onboarding/pricing',
                type: 'primaryOutlined',
              }),
            ),
          )
        },
        Ic = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { marginTop: e.spaces.space32, gap: e.spaces.space16 },
          }
        }),
        Rc = (n('+KXO'), n('7xRU'), n('hznd')),
        Vc = ['$refType'],
        zc = w.a.ea8a3d2d,
        Ac = w.a.ic9124bf,
        Mc = w.a.g5923869,
        Uc = {
          offer1: [w.a.f025ab39, w.a.c5602dfd],
          offer2: [w.a.ib075804, w.a.j8a72f06],
          offer3: [w.a.c246656e, w.a.a92ab16c],
        },
        Hc = w.a.c1df579e,
        jc = void 0 !== rl ? rl : (rl = n('5jO1')),
        Nc = void 0 !== ll ? ll : (ll = n('mKqc')),
        Wc = function (e) {
          var a = e.percentageComplete,
            n = e.priceOfferings,
            t = e.viewer,
            r = Y()(jc, n),
            l = (r.$refType, b()(r, Vc)),
            i = Y()(Nc, t),
            o = bl(i),
            s = hr(i, 'selected_price'),
            u = c.a.createElement(
              w.a.I18NFormatMessage,
              { $i18n: 'geee69de' },
              c.a.createElement(M.b, { link: S }, w.a.c336b06a),
            ),
            d = Object.keys(l).map(function (e) {
              return { label: Mc({ price: l[e] }), value: e, helpText: Uc[e].join(' ') }
            }),
            p = c.a.createElement(X, {
              disabled: !o,
              label: Hc,
              path: '/settings/superfollows/onboarding/pricing_confirm',
              size: 'small',
              type: 'primaryFilled',
            })
          return c.a.createElement(
            T,
            { percentageComplete: a, rightControl: p, title: zc, withInfoButton: !0 },
            c.a.createElement(Vt, { style: Gc.interstitial }, c.a.createElement(Ge, { headline: Ac, subtext: u })),
            c.a.createElement(
              Vt,
              { style: Gc.prices },
              c.a.createElement(Rc.a, {
                accessibilityLabel: Ac,
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
        Gc = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 },
          }
        }),
        qc = w.a.f1cb36b8,
        Qc = w.a.e20f6661,
        Xc = w.a.a9ee1ecc,
        Zc = w.a.b772cd65,
        Yc = function (e) {
          var a = e.percentageComplete
          return c.a.createElement(
            T,
            { leftControlShouldClose: !0, percentageComplete: a, title: qc, withInfoButton: !0 },
            c.a.createElement(
              Vt,
              { style: Jc.interstitial },
              c.a.createElement(Ge, { headline: Qc, illustration: He.Thumbsup, subtext: Xc }),
            ),
            c.a.createElement(
              Vt,
              { style: Jc.buttons },
              c.a.createElement(X, { label: Zc, path: '/settings/monetization', type: 'primaryFilled' }),
            ),
          )
        },
        Jc = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        $c = n('8jkQ'),
        eu = w.a.f1cb36b8,
        au = w.a.ja884230,
        nu = w.a.af1b808d,
        tu = w.a.fe339750,
        ru = w.a.j912510a,
        lu = void 0 !== il ? il : (il = n('xHLM')),
        iu = function (e) {
          var a = e.percentageComplete,
            n = rt()(lu),
            t = q()(n, 2),
            r = t[0],
            l = t[1],
            i = function () {
              r({
                variables: {},
                onCompleted: function (e, a) {
                  var n = e.stripe_account_create_onboarding_url
                  n && $c.b.navigateTo(n)
                },
              })
            }
          return c.a.createElement(
            T,
            { percentageComplete: a, title: eu, withInfoButton: !0 },
            c.a.createElement(
              Vt,
              { style: ou.interstitial },
              c.a.createElement(Ge, { headline: au, illustration: He.CoinStairs, subtext: nu }),
            ),
            c.a.createElement(
              Vt,
              { style: ou.buttons },
              c.a.createElement(k.a, { disabled: l, onPress: i, type: 'primaryFilled' }, tu),
              c.a.createElement(k.a, { disabled: l, onPress: i, type: 'primaryOutlined' }, ru),
            ),
          )
        },
        ou = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            buttons: { gap: e.spaces.space16, marginVertical: e.spaces.space32 },
          }
        }),
        su = void 0 !== ol ? ol : (ol = n('UNVS')),
        cu = void 0 !== sl ? sl : (sl = n('6byF')),
        uu = void 0 !== cl ? cl : (cl = n('dNhZ')),
        du = function (e) {
          return e / 8
        },
        pu = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = c.a.useContext(I.a).featureSwitches,
            l = Y()(su, a),
            i = Y()(cu, n),
            o = Y()(uu, t),
            s = Xl(i),
            u = Zl(i),
            d = Yl(i),
            p = Es({ rootPath: '/settings/monetization', user: i, viewer: o }),
            m = p.discardChanges,
            g = p.shouldBlockNavigation
          if (
            (br(o, { creator_intro: s, description: u, selected_price: d }),
            !r.isTrue('super_follow_web_onboarding_enabled'))
          )
            throw new Error('Super Follows onboarding is not enabled')
          return null == o.super_follows_onboarding_draft
            ? c.a.createElement(B.a, { to: '/settings/superfollows' })
            : c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(It, { onNavigation: m, shouldBlockNavigation: g }),
                c.a.createElement(
                  C.d,
                  null,
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/perks_intro' },
                    c.a.createElement(kc, { percentageComplete: du(1), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/perks_description' },
                    c.a.createElement(fc, { percentageComplete: du(2), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/perks_badges' },
                    c.a.createElement(ec, { percentageComplete: du(3), user: i }),
                  ),
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/perks_confirm' },
                    c.a.createElement(oc, { percentageComplete: du(4), user: i, viewer: o }),
                  ),
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/pricing' },
                    c.a.createElement(Wc, { percentageComplete: du(5), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/pricing_confirm' },
                    c.a.createElement(Bc, { percentageComplete: du(6), priceOfferings: l, viewer: o }),
                  ),
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/stripe_setup' },
                    c.a.createElement(iu, { percentageComplete: du(7) }),
                  ),
                  c.a.createElement(
                    C.b,
                    { exact: !0, path: '/settings/superfollows/onboarding/stripe_completed' },
                    c.a.createElement(Yc, { percentageComplete: du(8) }),
                  ),
                  c.a.createElement(
                    C.b,
                    { path: '/settings/superfollows/onboarding' },
                    c.a.createElement(Ms, { percentageComplete: du(0), user: i, viewer: o }),
                  ),
                ),
              )
        },
        mu = w.a.ebfb897c,
        gu = w.a.dc4feb19,
        fu = w.a.c183d271,
        bu = w.a.ic130fd5,
        hu = w.a.dd913e24,
        yu = w.a.h580543e,
        wu = function () {
          return c.a.createElement(
            T,
            { title: mu },
            c.a.createElement(Vt, { style: vu.interstitial }, c.a.createElement(Ge, { headline: gu, subtext: fu })),
            c.a.createElement(
              Vt,
              { style: vu.exampleDescriptions },
              c.a.createElement(xl.a, null),
              c.a.createElement(nr, { value: bu }),
              c.a.createElement(xl.a, null),
              c.a.createElement(nr, { value: hu }),
              c.a.createElement(xl.a, null),
              c.a.createElement(nr, { value: yu }),
            ),
          )
        },
        vu = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleDescriptions: { gap: e.spaces.space32, marginVertical: e.spaces.space36 },
          }
        }),
        Su = n('JWc1'),
        _u = w.a.ebfb897c,
        ku = w.a.dc4feb19,
        Fu = w.a.a0bb2076,
        Eu = w.a.ace46d40,
        Cu = w.a.h2c4511f,
        xu = w.a.hbe4f99e,
        Ku = L.a.create(function (e) {
          return {
            interstitial: { marginTop: e.spaces.space32 },
            exampleIntros: { gap: e.spaces.space24, marginVertical: e.spaces.space36 },
          }
        }),
        Lu = function () {
          return c.a.createElement(
            T,
            { title: _u },
            c.a.createElement(Vt, { style: Ku.interstitial }, c.a.createElement(Ge, { headline: ku, subtext: Fu })),
            c.a.createElement(
              Vt,
              { style: Ku.exampleIntros },
              c.a.createElement(Su.a, { value: Eu }),
              c.a.createElement(Su.a, { value: Cu }),
              c.a.createElement(Su.a, { value: xu }),
            ),
          )
        },
        Pu = n('VTDR'),
        Du = n('a2Fh'),
        Tu = w.a.hf6f2913,
        Ou = w.a.fb278c81,
        Bu = w.a.e6b60e94,
        Iu = L.a.create(function (e) {
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
        Ru = function () {
          return c.a.createElement(
            T,
            { title: Tu },
            c.a.createElement(Vt, { style: Iu.interstitial }, c.a.createElement(Ge, { headline: Ou, subtext: Bu })),
            c.a.createElement(
              Qt,
              { style: Iu.preview },
              c.a.createElement(
                Pu.a,
                null,
                c.a.createElement(Du.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [18, 17],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Du.a, {
                  color: 'text',
                  lineHeightPx: 30,
                  wordHeightPx: 7,
                  wordPercentWidths: [17, 20],
                  wordSpacingPx: 15,
                }),
                c.a.createElement(Du.a, {
                  color: 'text',
                  lineHeightPx: 20,
                  style: Iu.subheader,
                  withBorderRadius: !0,
                  withLineWrap: !0,
                  wordHeightPx: 5,
                  wordPercentWidths: [16, 10, 17, 15, 5, 10, 5, 12, 15, 7, 9, 12],
                }),
              ),
            ),
          )
        },
        Vu = w.a.aa7e35ed,
        zu = w.a.f67e69bf,
        Au = function () {
          if (!c.a.useContext(I.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            T,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Vt,
              { style: Mu.interstitial },
              c.a.createElement(Ge, { headline: Vu, illustration: He.Uturn, subtext: zu }),
            ),
          )
        },
        Mu = L.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Uu = w.a.d3d6c52c,
        Hu = w.a.c53e9129,
        ju = function () {
          if (!c.a.useContext(I.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            T,
            { leftControlShouldClose: !0, withInfoButton: !0 },
            c.a.createElement(
              Vt,
              { style: Nu.interstitial },
              c.a.createElement(Ge, { headline: Uu, illustration: He.PaperAirplane, subtext: Hu }),
            ),
          )
        },
        Nu = L.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Wu = w.a.j274e6aa,
        Gu = w.a.d7f65127,
        qu = function () {
          if (!c.a.useContext(I.a).featureSwitches.isTrue('super_follow_web_application_enabled'))
            throw new Error('Super Follows application is not enabled')
          return c.a.createElement(
            T,
            { leftControlShouldClose: !0, withCenteredLogo: !0, withInfoButton: !0 },
            c.a.createElement(
              Vt,
              { style: Qu.interstitial },
              c.a.createElement(Ge, { headline: Wu, illustration: He.Bench, subtext: Gu }),
            ),
          )
        },
        Qu = L.a.create(function (e) {
          return { interstitial: { marginVertical: e.spaces.space32 } }
        }),
        Xu = void 0 !== ul ? ul : (ul = n('nEN5')),
        Zu = void 0 !== dl ? dl : (dl = n('toKZ')),
        Yu = void 0 !== pl ? pl : (pl = n('ucRr')),
        Ju = function (e) {
          var a = e.priceOfferings,
            n = e.user,
            t = e.viewer,
            r = Y()(Xu, a),
            l = Y()(Zu, n),
            i = Y()(Yu, t),
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
            C.d,
            null,
            c.a.createElement(
              C.b,
              { path: '/settings/superfollows/application' },
              c.a.createElement(Lt, { user: l, viewer: i }),
            ),
            c.a.createElement(
              C.b,
              { path: '/settings/superfollows/onboarding' },
              c.a.createElement(pu, { priceOfferings: r, user: l, viewer: i }),
            ),
            c.a.createElement(
              C.b,
              { path: '/settings/superfollows/management' },
              c.a.createElement(Ls, { priceOfferings: r, user: l, viewer: i }),
            ),
            c.a.createElement(
              C.b,
              { exact: !0, path: '/settings/superfollows/submitted' },
              c.a.createElement(ju, null),
            ),
            c.a.createElement(
              C.b,
              { exact: !0, path: '/settings/superfollows/waitlisted' },
              c.a.createElement(qu, null),
            ),
            c.a.createElement(C.b, { exact: !0, path: '/settings/superfollows/rejected' }, c.a.createElement(Au, null)),
            c.a.createElement(
              C.b,
              { exact: !0, path: '/settings/superfollows/perks_intro_examples' },
              c.a.createElement(Lu, null),
            ),
            c.a.createElement(
              C.b,
              { exact: !0, path: '/settings/superfollows/perks_description_examples' },
              c.a.createElement(wu, null),
            ),
            c.a.createElement(
              C.b,
              { exact: !0, path: '/settings/superfollows/perks_preview' },
              c.a.createElement(Ru, null),
            ),
            c.a.createElement(C.b, { exact: !0, path: '/settings/superfollows' }, c.a.createElement(B.a, { to: o })),
          )
        },
        $u = n('IAZG'),
        ed = void 0 !== ml ? ml : (ml = n('G8I5')),
        ad = function () {
          var e,
            a,
            n = Object($u.a)(ed, {}),
            t = null == n ? void 0 : n.super_follows_price_offerings,
            r =
              null == n || null === (e = n.viewer) || void 0 === e || null === (a = e.user_results) || void 0 === a
                ? void 0
                : a.result,
            l = null == n ? void 0 : n.viewer
          return null == t || 'User' !== (null == r ? void 0 : r.__typename) || null == l
            ? null
            : c.a.createElement(Ju, { priceOfferings: t, user: r, viewer: l })
        },
        nd = { context: 'SuperFollowsSettings' },
        td = function () {
          var e = c.a.useMemo(function () {
            return {
              type: 'CustomRetry',
              content: function (e) {
                return c.a.createElement(T, null, c.a.createElement(p.a, { onRequestRetry: e }))
              },
            }
          }, [])
          return c.a.createElement(
            u.a,
            { errorConfig: nd, fallback: e },
            c.a.createElement(d.a, null, c.a.createElement(ad, null)),
          )
        }
      a.default = c.a.memo(td)
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
        L = n('oQhu'),
        P = n('rHpw'),
        D = n('aITJ'),
        T = n('MWbm'),
        O = n('n5fo'),
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
                      { style: N.container },
                      a && !this._isLabelLarge() ? this._renderIcon() : null,
                      v.a.createElement(
                        _.b,
                        { size: 'headline1', style: N.wrapper },
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
                            icon: t ? v.a.createElement(O.a, null) : v.a.createElement(B.a, null),
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
                      ? v.a.createElement(I.a, { style: [W.validationIcon, F.a.invalidColor] })
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
