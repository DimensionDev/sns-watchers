;(window.webpackJsonp = window.webpackJsonp || []).push([
  [97],
  {
    '3JAx': function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n),
        c = a('fyvP'),
        o = a('rHpw'),
        i = a('MWbm')
      t.a = function (e) {
        return r.a.createElement(i.a, { style: l.root }, r.a.createElement(c.a, e))
      }
      var l = o.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '4UZQ': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardTwitterInterestsScreen', function () {
          return te
        })
      var n = a('yiKp'),
        r = a.n(n),
        c = a('VrFO'),
        o = a.n(c),
        i = a('Y9Ll'),
        l = a.n(i),
        s = a('1Pcy'),
        d = a.n(s),
        u = a('5Yy7'),
        f = a.n(u),
        m = a('2VqO'),
        p = a.n(m),
        h = a('KEM+'),
        g = a.n(h),
        E = (a('2G9S'), a('z84I'), a('TJCb'), a('7x/C'), a('DZ+c'), a('ERkP')),
        b = a.n(E),
        _ = a('zrOZ'),
        y = a('zh9S'),
        v = a('NeAX'),
        S = a('hqKg'),
        I = a('kGix'),
        A = a('0KEI'),
        w = a('oEGd'),
        D = Object(S.createSelector)(
          function (e, t) {
            return Object(I.d)(v.selectFetchTwitterInterestsStatus(e), v.selectPreferencesFetchStatus(e))
          },
          v.selectTwitterInterests,
          v.selectPreferences,
          function (e, t, a) {
            return { fetchStatus: e, interests: t, preferences: a }
          },
        ),
        k = {
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_TWITTER_INTERESTS_SCREEN',
          ),
          fetchInterests: v.fetchTwitterInterestsIfNeeded,
          fetchPreferences: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: y.a,
          scribeAction: y.c,
          scribePageImpression: y.d,
          updateInterest: v.updateInterest,
        },
        P = Object(w.f)(D, k),
        C = a('xCYy'),
        x = a('v//M'),
        F = a('3XMw'),
        T = a.n(F),
        L = a('yoO3'),
        R = a('7JQg'),
        O = a('eM8g'),
        N = a('7FtF'),
        M = a('iCwC'),
        B = a('XYIJ'),
        H = a('MWbm'),
        Y = a('k/OQ'),
        G = a('e0ey'),
        j = a('t62R'),
        z = a('mw9i'),
        V = a('v6aA'),
        X = T.a.h1f01a24,
        K = T.a.c07b4316,
        U = T.a.e97196fe,
        W = T.a.e652513d,
        q = T.a.gd1ce493,
        J = T.a.e9f1fbcb,
        $ = T.a.cf0daa24,
        Q = '/settings/your_twitter_data/twitter_interests',
        Z = '/settings/your_twitter_data/twitter_interests/interest',
        ee = { page: 'settings', section: 'your_twitter_data', component: 'twitter_interests' },
        te = (function (e) {
          f()(a, e)
          var t = p()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(d()(e), '_renderTabs', function () {
                if (!e._hasKnownInterests()) return null
                var t = [
                  { to: Q, key: U, label: U },
                  { to: Z, key: K, label: K },
                ]
                return b.a.createElement(Y.a, { accessibilityLabel: X, links: t })
              }),
              g()(d()(e), '_render', function () {
                return e.props.location.pathname !== Z && e._hasKnownInterests()
                  ? e._renderKnownInterests()
                  : e._renderInterests()
              }),
              g()(d()(e), '_renderInterests', function () {
                var t = e.props,
                  a = t.interests,
                  n = t.preferences.interest_preferences,
                  r = void 0 === n ? {} : n,
                  c = a.interested_in || [],
                  o = Object(_.a)(r.disabled_interests || []),
                  i = !c.length
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(O.a, null, W),
                  c.map(function (t, a) {
                    return b.a.createElement(G.a, {
                      checked: !o.has(t.id),
                      key: t.id,
                      label: t.display_name,
                      name: t.id.toString(),
                      onChange: e._handleUpdateInterest,
                    })
                  }),
                  i ? e._renderMessage(J, $) : null,
                )
              }),
              g()(d()(e), '_renderMessage', function (e, t) {
                return b.a.createElement(
                  H.a,
                  { style: [M.a.calloutTextBlock, M.a.bottomBorder] },
                  b.a.createElement(j.b, { align: 'center', size: 'headline1' }, e),
                  t ? b.a.createElement(j.b, { align: 'center', color: 'gray700', style: B.a.helpText }, t) : null,
                )
              }),
              g()(d()(e), '_renderKnownInterests', function () {
                var t = e.props,
                  a = t.interests,
                  n = t.preferences.interest_preferences,
                  r = void 0 === n ? {} : n,
                  c = a.known_for || [],
                  o = Object(_.a)(r.disabled_interests || [])
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(O.a, null, q),
                  c.map(function (t, a) {
                    return b.a.createElement(G.a, {
                      checked: !o.has(t.id),
                      key: t.id,
                      label: t.display_name,
                      name: t.id.toString(),
                      onChange: e._handleUpdateInterest,
                    })
                  }),
                )
              }),
              g()(d()(e), '_hasKnownInterests', function () {
                var t = e.props.interests
                return t && t.known_for && t.known_for.length > 0
              }),
              g()(d()(e), '_handleFetchData', function () {
                var t = e.props.createLocalApiErrorHandler
                e.props.fetchPreferences().catch(t()), e.props.fetchInterests().catch(t())
              }),
              g()(d()(e), '_handleUpdateInterest', function (t, a) {
                var n = e.props,
                  r = n.createLocalApiErrorHandler,
                  c = n.updateInterest
                e._scribeAction(), c(t, a, 'ads').catch(r({ showToast: !0 }))
              }),
              g()(d()(e), '_scribeAction', function () {
                ;(0, e.props.scribeAction)(r()(r()({}, ee), {}, { action: 'edit' }))
              }),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchData()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.location
                  return b.a.createElement(
                    R.c,
                    { namespace: ee },
                    b.a.createElement(
                      L.a,
                      null,
                      b.a.createElement(
                        N.a,
                        { location: a, secondaryBar: this._renderTabs(), title: X },
                        b.a.createElement(
                          C.a,
                          null,
                          b.a.createElement(
                            z.a,
                            null,
                            b.a.createElement(x.a, {
                              fetchStatus: t,
                              onRequestRetry: this._handleFetchData,
                              render: this._render,
                            }),
                          ),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      g()(te, 'contextType', V.a)
      t.default = P(te)
    },
    '67GR': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardLanguageScreen', function () {
          return X
        })
      var n = a('yiKp'),
        r = a.n(n),
        c = a('VrFO'),
        o = a.n(c),
        i = a('Y9Ll'),
        l = a.n(i),
        s = a('1Pcy'),
        d = a.n(s),
        u = a('5Yy7'),
        f = a.n(u),
        m = a('2VqO'),
        p = a.n(m),
        h = a('KEM+'),
        g = a.n(h),
        E =
          (a('2G9S'),
          a('lTEL'),
          a('7x/C'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          a('M+/F'),
          a('z84I'),
          a('vrRf'),
          a('ERkP')),
        b = a.n(E),
        _ = a('zh9S'),
        y = a('NeAX'),
        v = a('hqKg'),
        S = a('kGix'),
        I = a('0KEI'),
        A = a('oEGd'),
        w = Object(v.createSelector)(
          y.selectData,
          function (e, t) {
            return Object(S.d)(y.selectFetchDataStatus(e), y.selectPreferencesFetchStatus(e))
          },
          y.selectPreferences,
          function (e, t, a) {
            return { data: e, fetchStatus: t, preferences: a }
          },
        ),
        D = {
          createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_LANGUAGE_SCREEN',
          ),
          fetchData: y.fetchDataIfNeeded,
          fetchPreferences: y.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: _.a,
          scribeAction: _.c,
          scribePageImpression: _.d,
          updateLanguage: y.updateLanguage,
        },
        k = Object(A.f)(w, D),
        P = a('xCYy'),
        C = a('3XMw'),
        x = a.n(C),
        F = a('PK8P'),
        T = a('7JQg'),
        L = a('7FtF'),
        R = a('iCwC'),
        O = a('XYIJ'),
        N = a('MWbm'),
        M = a('t62R'),
        B = a('e0ey'),
        H = x.a.a03dacaa,
        Y = x.a.b056d9dc,
        G = x.a.h68bc23c,
        j = x.a.e9f1fbcb,
        z = x.a.cf0daa24,
        V = { page: 'settings', section: 'your_twitter_data', component: 'language' },
        X = (function (e) {
          f()(a, e)
          var t = p()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(d()(e), '_combinedFetches', function () {
                var t = e.props,
                  a = t.fetchData,
                  n = t.fetchPreferences
                return Promise.all([a(), n()])
              }),
              g()(d()(e), '_render', function () {
                var t = e.props,
                  a = t.data.languages,
                  n = void 0 === a ? [] : a,
                  r = t.preferences,
                  c = n[0],
                  o = n.length > 1 ? n.slice(1) : [],
                  i = r.language_preferences && r.language_preferences.disabled_languages
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(
                    N.a,
                    { style: [O.a.infoItem, O.a.bottomBorder] },
                    b.a.createElement(M.b, { color: 'gray700' }, Y),
                  ),
                  c
                    ? b.a.createElement(
                        N.a,
                        { style: [O.a.infoItem, o.length > 0 && O.a.bottomBorder] },
                        b.a.createElement(M.b, null, c.display),
                      )
                    : b.a.createElement(N.a, { style: o.length > 0 && O.a.bottomBorder }, e._renderMessage(j, z)),
                  o.length > 0
                    ? b.a.createElement(
                        N.a,
                        { style: [O.a.infoItem, O.a.bottomBorder] },
                        b.a.createElement(M.b, { color: 'gray700' }, G),
                      )
                    : null,
                  o.map(function (t, a) {
                    return b.a.createElement(B.a, {
                      checked: !i || -1 === i.indexOf(t.key),
                      key: t.key,
                      label: t.display,
                      name: t.key,
                      onChange: e._handleUpdateLanguage,
                    })
                  }),
                )
              }),
              g()(d()(e), '_renderMessage', function (e, t) {
                return b.a.createElement(
                  N.a,
                  { style: R.a.calloutTextBlock },
                  b.a.createElement(M.b, { align: 'center', size: 'headline1' }, e),
                  t ? b.a.createElement(M.b, { align: 'center', color: 'gray700', style: O.a.helpText }, t) : null,
                )
              }),
              g()(d()(e), '_handleUpdateLanguage', function (t, a) {
                var n = e.props,
                  r = n.createLocalApiErrorHandler
                ;(0, n.updateLanguage)(t, a).catch(r({ showToast: !0 })), e._scribeAction()
              }),
              g()(d()(e), '_scribeAction', function () {
                ;(0, e.props.scribeAction)(r()(r()({}, V), {}, { action: 'edit' }))
              }),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this.props.fetchPreferences()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(V), t(V)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.location
                  return b.a.createElement(
                    T.c,
                    { namespace: V },
                    b.a.createElement(
                      L.a,
                      { location: a, title: H },
                      b.a.createElement(
                        P.a,
                        null,
                        b.a.createElement(F.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      t.default = k(X)
    },
    C40e: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'AccountActivityScreen', function () {
          return p
        })
      var n = a('ERkP'),
        r = a.n(n),
        c = a('3XMw'),
        o = a.n(c),
        i = a('yoO3'),
        l = a('csss'),
        s = a('7FtF'),
        d = a('7JQg'),
        u = o.a.j9d10268,
        f = o.a.a5f32aa2,
        m = o.a.daef29b7,
        p = function (e) {
          var t = e.location
          return r.a.createElement(
            i.a,
            null,
            r.a.createElement(
              s.a,
              { location: t, title: u },
              r.a.createElement(l.a, { label: f, link: '/settings/blocked/all' }),
              r.a.createElement(l.a, { label: m, link: '/settings/muted/all' }),
            ),
          )
        }
      t.default = Object(d.a)({ page: 'settings', section: 'your_twitter_data', component: 'account_activity' })(p)
    },
    E7qF: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardRequestDataScreen', function () {
          return H
        })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        f = a.n(u),
        m = a('KEM+'),
        p = a.n(m),
        h = (a('2G9S'), a('ERkP')),
        g = a.n(h),
        E = a('t62R'),
        b = a('vEo5'),
        _ = a('NeAX'),
        y = a('1YZw'),
        v = a('rxPX'),
        S = Object(v.a)()
          .propsFromState(function () {
            return { deviceFetchStatus: b.selectFetchStatus, primaryEmail: b.selectFirstEmail }
          })
          .propsFromActions(function () {
            return { addToast: y.b, createDataDownload: _.createDataDownload, fetchDevices: b.fetchDevices }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'request_data' }),
        I = a('xCYy'),
        A = a('v//M'),
        w = a('3XMw'),
        D = a.n(w),
        k = a('yoO3'),
        P = a('7FtF'),
        C = a('iCwC'),
        x = a('XYIJ'),
        F = a('MWbm'),
        T = a('v6aA'),
        L = D.a.d3310e48,
        R = D.a.ib03e8c8,
        O = D.a.abedd45c,
        N = D.a.abedd45c,
        M = D.a.g49741e8,
        B = D.a.dc370a0c,
        H = (function (e) {
          d()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(l()(e), '_render', function () {
                var t = e.props.primaryEmail
                return g.a.createElement(
                  'div',
                  null,
                  g.a.createElement(
                    F.a,
                    { style: [x.a.infoItem, x.a.bottomBorder] },
                    g.a.createElement(E.b, null, t ? L({ primaryEmail: t }) : R),
                  ),
                  g.a.createElement(
                    F.a,
                    { accessibilityRole: 'button', onClick: e._handleRequestDataClick, style: C.a.viewItem },
                    g.a.createElement(E.b, { align: 'center', color: 'link' }, t ? N : M),
                  ),
                )
              }),
              p()(l()(e), '_handleRequestDataClick', function () {
                var t = e.props,
                  a = t.addToast,
                  n = t.createDataDownload
                t.primaryEmail
                  ? (e._scribeAction('email'),
                    n().then(function () {
                      return a({ text: B })
                    }))
                  : (e._scribeAction('download'),
                    window.open('https://twitter.com/account/personalization/download_your_data.pdf', '_blank'))
              }),
              p()(l()(e), '_handleFetchDevices', function () {
                var t = e.props.fetchDevices
                t && t()
              }),
              p()(l()(e), '_scribeAction', function (t) {
                e.props.analytics.scribe({ action: t })
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  ;(this.isLoggedIn = !!this.context.loggedInUserId), this.isLoggedIn && this.props.fetchDevices()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.deviceFetchStatus,
                    a = e.location
                  return g.a.createElement(
                    k.a,
                    null,
                    g.a.createElement(
                      P.a,
                      { location: a, title: O },
                      g.a.createElement(
                        I.a,
                        null,
                        this.isLoggedIn
                          ? g.a.createElement(A.a, {
                              fetchStatus: t,
                              onRequestRetry: this._handleFetchDevices,
                              render: this._render,
                            })
                          : this._render(),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      p()(H, 'contextType', T.a)
      t.default = S(H)
    },
    EPsT: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return _
      })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        f = a.n(u),
        m = a('KEM+'),
        p = a.n(m),
        h = a('ERkP'),
        g = a.n(h),
        E = a('jtO7'),
        b = a('eb3s'),
        _ = (function (e) {
          d()(a, e)
          var t = f()(a)
          function a(e) {
            var n
            return (
              r()(this, a),
              (n = t.call(this, e)),
              p()(l()(n), '_handleClick', function (e) {
                n.setState({ showConfirmation: !0 })
              }),
              p()(l()(n), '_handleCancel', function () {
                n.setState({ showConfirmation: !1 })
              }),
              p()(l()(n), '_handleConfirm', function () {
                n.setState({ showConfirmation: !1 }), n.props.onConfirmationSheetConfirm()
              }),
              (n.state = { showConfirmation: !1 }),
              n
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    a = e.color,
                    n = e.confirmationSheetConfirmButtonLabel,
                    r = e.confirmationSheetConfirmButtonType,
                    c = e.confirmationSheetHeadline,
                    o = e.confirmationSheetText,
                    i = e.label
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(E.a, { align: t, color: a, label: i, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? g.a.createElement(b.a, {
                          confirmButtonLabel: n,
                          confirmButtonType: r,
                          headline: c,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: o,
                        })
                      : null,
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      p()(_, 'defaultProps', { color: 'red500', align: 'center' })
    },
    MG1F: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardDevicesScreen', function () {
          return ue
        })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        f = a.n(u),
        m = a('KEM+'),
        p = a.n(m),
        h = (a('2G9S'), a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('z84I'), a('ho0z'), a('ERkP')),
        g = a.n(h),
        E = a('zh9S'),
        b = a('NeAX'),
        _ = a('hqKg'),
        y = a('kGix'),
        v = a('0KEI'),
        S = a('oEGd'),
        I = Object(_.createSelector)(
          b.selectData,
          function (e, t) {
            return Object(y.d)(b.selectFetchDataStatus(e), b.selectPreferencesFetchStatus(e))
          },
          b.selectUserPreferences,
          function (e, t, a) {
            return { data: e, fetchStatus: t, settings: a }
          },
        ),
        A = {
          createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_DEVICES_SCREEN',
          ),
          fetchData: b.fetchDataIfNeeded,
          fetchPreferences: b.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: E.a,
          scribePageImpression: E.d,
        },
        w = Object(S.f)(I, A),
        D = a('xCYy'),
        k = a('PK8P'),
        P = a('7JQg'),
        C = a('7FtF'),
        x = a('iCwC'),
        F = a('XYIJ'),
        T = 'linkedBrowsersView',
        L = 'linkedMobileDevicesView',
        R = 'linkedEmailAddressesView',
        O = 'helpText',
        N = a('MWbm'),
        M = a('t62R'),
        B = a('0yYu'),
        H = a('6vad'),
        Y = a('v6aA'),
        G = a('3XMw'),
        j = a.n(G),
        z = j.a.g1aced04,
        V = j.a.hc36dbba,
        X = j.a.j4fa776e,
        K = j.a.i7acdb35,
        U = j.a.c112dfc8,
        W = j.a.jd8607b9,
        q = j.a.ea4f6c9e,
        J = j.a.d750b93e,
        $ = j.a.a9783601,
        Q = j.a.j043aa31,
        Z = j.a.f2aa6e95,
        ee = j.a.i4d7deee,
        te = j.a.ae415fd2,
        ae = '/settings/off_twitter_activity',
        ne = '/settings/personalization',
        re = j.a.a90be7b3,
        ce = j.a.e7989d0b,
        oe = j.a.ba2e82a1,
        ie = 'https://support.twitter.com/articles/20175257',
        le = '/personalization',
        se = { page: 'settings', section: 'your_twitter_data', component: 'devices' },
        de = [],
        ue = (function (e) {
          d()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(
                l()(e),
                '_fsSettingsRevamp',
                e.context.featureSwitches.isTrue('responsive_web_settings_revamp_enabled'),
              ),
              p()(l()(e), '_combinedFetches', function () {
                var t = e.props,
                  a = t.fetchData,
                  n = t.fetchPreferences
                return Promise.all([a(), n()])
              }),
              p()(l()(e), '_render', function () {
                var t = e.props,
                  a = t.data.known_devices,
                  n = void 0 === a ? {} : a,
                  r = t.settings,
                  c = n.phone || de,
                  o = n.tablet || de,
                  i = n.desktop || de,
                  l = { supportLink: g.a.createElement(M.b, { link: ie }) }
                return g.a.createElement(
                  N.a,
                  null,
                  !e.isLoggedIn &&
                    g.a.createElement(
                      M.b,
                      { color: 'gray700', size: 'subtext2', style: [x.a.infoText, x.a.bottomBorder] },
                      g.a.createElement(
                        j.a.I18NFormatMessage,
                        { $i18n: 'f870a95b' },
                        g.a.cloneElement(l.supportLink, null, j.a.b1d602d6),
                      ),
                    ),
                  e.isLoggedIn &&
                    c.length > 0 &&
                    o.length > 0 &&
                    i.length > 0 &&
                    g.a.createElement(
                      M.b,
                      { color: 'gray700', size: 'subtext2', style: [x.a.infoText, x.a.bottomBorder] },
                      g.a.createElement(
                        j.a.I18NFormatMessage,
                        { $i18n: 'e21b623d' },
                        g.a.cloneElement(l.supportLink, null, j.a.d1597cc9),
                      ),
                    ),
                  e._renderDeviceGroup(c, X, !!e._fsSettingsRevamp && 0 === o.length && 0 === i.length),
                  e._renderDeviceGroup(o, K, !!e._fsSettingsRevamp && 0 === i.length),
                  e._renderDeviceGroup(i, U, e._fsSettingsRevamp),
                  e._fsSettingsRevamp && g.a.createElement(B.a, null),
                  e.isLoggedIn &&
                    g.a.createElement(
                      M.b,
                      {
                        color: 'gray700',
                        size: 'subtext2',
                        style: [x.a.infoText, r.allowDeviceAccess || !e._fsSettingsRevamp ? x.a.bottomBorder : null],
                      },
                      e._fsSettingsRevamp
                        ? g.a.createElement(
                            j.a.I18NFormatMessage,
                            { $i18n: 'b6baf554' },
                            g.a.cloneElement(l.supportLink, null, j.a.dc546af8),
                          )
                        : r.allowDeviceAccess
                        ? g.a.createElement(
                            j.a.I18NFormatMessage,
                            { $i18n: 'h185b86a' },
                            g.a.cloneElement(l.supportLink, null, j.a.b6fe9d79),
                          )
                        : ce,
                    ),
                  r.allowDeviceAccess ? e._renderLinkedDevices() : e._renderFeatureDisabledMessage(),
                )
              }),
              p()(l()(e), '_renderFeatureDisabledMessage', function () {
                return g.a.createElement(
                  N.a,
                  { style: e._fsSettingsRevamp ? F.a.featureDisabledCallout : x.a.calloutTextBlock },
                  g.a.createElement(
                    M.b,
                    { align: 'center', size: 'headline1', style: e._fsSettingsRevamp && F.a.featureDisabledTitle },
                    e._fsSettingsRevamp ? te : Z,
                  ),
                  g.a.createElement(
                    M.b,
                    { align: 'center', color: 'gray700', style: F.a.helpText },
                    e._fsSettingsRevamp
                      ? g.a.createElement(
                          j.a.I18NFormatMessage,
                          { $i18n: 'e1d684b1' },
                          g.a.createElement(M.b, { link: e._fsSettingsRevamp ? ae : ne }, j.a.e440acda),
                        )
                      : ee,
                  ),
                )
              }),
              p()(l()(e), '_renderLinkedDevices', function () {
                var t = e.props.data,
                  a = { personalizationLink: g.a.createElement(M.b, { link: le }) },
                  n = { offTwitterActivitySettingLink: g.a.createElement(M.b, { link: ae }) },
                  r = e._fsSettingsRevamp
                    ? g.a.createElement(
                        M.b,
                        { color: 'gray700', style: [F.a.helpText, F.a.helpTextExtraPadded] },
                        g.a.createElement(
                          j.a.I18NFormatMessage,
                          { $i18n: 'h7173352', testID: O },
                          g.a.cloneElement(n.offTwitterActivitySettingLink, null, j.a.f6325f47),
                        ),
                      )
                    : g.a.createElement(
                        M.b,
                        { color: 'gray700', style: F.a.helpText },
                        g.a.createElement(
                          j.a.I18NFormatMessage,
                          { $i18n: 'j7454249', testID: O },
                          g.a.cloneElement(a.personalizationLink, null, j.a.j291883b),
                        ),
                      )
                return g.a.createElement(
                  N.a,
                  null,
                  t.associated_devices
                    ? g.a.createElement(
                        N.a,
                        { style: [F.a.infoItem, F.a.bottomBorder], testID: T },
                        g.a.createElement(M.b, { weight: 'bold' }, q),
                        g.a.createElement(
                          M.b,
                          { color: 'gray700', style: F.a.helpText },
                          J({ count: t.associated_devices.num_browsers }),
                        ),
                        r,
                      )
                    : null,
                  t.associated_devices
                    ? g.a.createElement(
                        N.a,
                        { style: [F.a.infoItem, F.a.bottomBorder], testID: L },
                        g.a.createElement(M.b, { weight: 'bold' }, $),
                        g.a.createElement(
                          M.b,
                          { color: 'gray700', style: F.a.helpText },
                          Q({ count: t.associated_devices.num_devices }),
                        ),
                        r,
                      )
                    : null,
                  g.a.createElement(
                    N.a,
                    { style: F.a.infoItem, testID: R },
                    g.a.createElement(M.b, { weight: 'bold' }, re),
                    e._fsSettingsRevamp
                      ? g.a.createElement(
                          M.b,
                          { color: 'gray700', style: [F.a.helpText, F.a.helpTextExtraPadded] },
                          g.a.createElement(
                            j.a.I18NFormatMessage,
                            { $i18n: 'ad5f7016', testID: O },
                            g.a.cloneElement(n.offTwitterActivitySettingLink, null, j.a.id414293),
                          ),
                        )
                      : g.a.createElement(
                          M.b,
                          { color: 'gray700', style: F.a.helpText },
                          g.a.createElement(
                            j.a.I18NFormatMessage,
                            { $i18n: 'e49dd294', testID: O },
                            g.a.cloneElement(a.personalizationLink, null, j.a.b352177d),
                          ),
                        ),
                  ),
                )
              }),
              p()(l()(e), '_renderDeviceGroup', function (e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                return e.length
                  ? g.a.createElement(
                      N.a,
                      null,
                      g.a.createElement(N.a, null, g.a.createElement(H.b, { text: t })),
                      e.map(function (t, n) {
                        var r = e && e.length - 1 === n
                        return g.a.createElement(
                          N.a,
                          { key: "device-'".concat(n), style: [F.a.infoItem, r && !a && F.a.bottomBorder] },
                          g.a.createElement(M.b, null, t.name),
                          g.a.createElement(
                            M.b,
                            { color: 'gray700', style: F.a.helpText },
                            W,
                            ' ',
                            oe(new Date(t.created_at)),
                          ),
                        )
                      }),
                    )
                  : null
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  ;(this.isLoggedIn = !!this.context.loggedInUserId), this.props.fetchPreferences()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(se), t(se)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.location
                  return g.a.createElement(
                    P.c,
                    { namespace: se },
                    g.a.createElement(
                      C.a,
                      { location: a, title: this._fsSettingsRevamp ? V : z },
                      g.a.createElement(
                        D.a,
                        null,
                        g.a.createElement(k.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      p()(ue, 'contextType', Y.a)
      t.default = w(ue)
    },
    O6Qx: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardProfileScreen', function () {
          return ie
        })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        f = a.n(u),
        m = a('KEM+'),
        p = a.n(m),
        h = (a('2G9S'), a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('z84I'), a('ERkP')),
        g = a.n(h),
        E = a('vEo5'),
        b = a('NeAX'),
        _ = a('YeIG'),
        y = a('G6rE'),
        v = a('rxPX'),
        S = a('0KEI'),
        I = a('kGix'),
        A = function (e, t) {
          var a = y.e.selectLoggedInUser(e),
            n = Object(_.a)(a) ? I.a.LOADED : E.selectFetchStatus(e)
          return Object(I.d)(b.selectFetchDataStatus(e), b.selectPreferencesFetchStatus(e), n)
        },
        w = Object(v.a)()
          .propsFromState(function () {
            return {
              email: E.selectFirstEmail,
              fetchStatus: A,
              loggedInUser: y.e.selectLoggedInUser,
              phone: E.selectFirstPhoneNumber,
              ages: b.selectAge,
              birthdate: b.selectBirthdate,
              gender: b.selectGender,
              hasExactAge: b.selectHasExactAge,
              languages: b.selectLanguage,
              signupDetails: b.selectSignupDetails,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_PROFILE_SCREEN',
              ),
              fetchDevices: E.fetchDevices,
              fetchData: b.fetchDataIfNeeded,
              fetchPreferences: b.fetchPreferencesIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'your_profile' }),
        D = a('xCYy'),
        k = a('yoO3'),
        P = a('PK8P'),
        C = a('7FtF'),
        x = a('XYIJ'),
        F = a('MWbm'),
        T = a('Xrkv'),
        L = a('csss'),
        R = a('pjBI'),
        O = a('t62R'),
        N = a('3Ohe'),
        M = a('3XMw'),
        B = a.n(M),
        H = B.a.i5f7b6b8,
        Y = B.a.d0a77c9a,
        G = B.a.jade381b,
        j = B.a.d1f6d336,
        z = B.a.a3841918,
        V = B.a.f70cd5ed,
        X = B.a.ib6f1694,
        K = B.a.fa98627a,
        U = B.a.a8d0108d,
        W = B.a.ac77c66c,
        q = B.a.h3290871,
        J = B.a.b7ec04f3,
        $ = B.a.i62a03aa,
        Q = B.a.c119dee8,
        Z = B.a.bf96fda4,
        ee = B.a.a03dacaa,
        te = B.a.f445dc78,
        ae = B.a.je99e595,
        ne = B.a.d6d80990,
        re = B.a.i859a9d3,
        ce = '/settings/account/personalization',
        oe = 'https://help.twitter.com/managing-your-account/about-twitter-verified-accounts',
        ie = (function (e) {
          d()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(l()(e), '_combinedFetches', function () {
                var t = e.props,
                  a = t.fetchData,
                  n = t.fetchDevices,
                  r = t.fetchPreferences,
                  c = t.loggedInUser,
                  o = [a(), r()]
                return c && o.push(n()), Promise.all(o)
              }),
              p()(l()(e), '_render', function () {
                var t = e.props,
                  a = t.ages,
                  n = t.birthdate,
                  r = t.email,
                  c = t.gender,
                  o = t.languages,
                  i = t.loggedInUser,
                  l = t.phone,
                  s = t.signupDetails,
                  d = Object(T.a)(
                    a.map(function (e) {
                      return 'string' == typeof e ? e : e.display
                    }),
                    true,
                  ),
                  u = n && G(new Date(''.concat(n, 'T00:00:00'))),
                  f = Object(T.a)(
                    o.map(function (e) {
                      return e.display
                    }),
                    true,
                  )
                return g.a.createElement(
                  F.a,
                  null,
                  i
                    ? g.a.createElement(L.a, {
                        description: g.a.createElement(
                          R.a,
                          null,
                          i.screen_name &&
                            g.a.createElement(O.b, { color: 'gray700', size: 'subtext2' }, '@'.concat(i.screen_name)),
                          g.a.createElement(O.b, { color: 'gray700', size: 'subtext2' }, ae({ userid: i.id_str })),
                        ),
                        label: j,
                        link: '/settings/screen_name',
                      })
                    : null,
                  i
                    ? g.a.createElement(
                        F.a,
                        { style: [x.a.infoItem, x.a.bottomBorder] },
                        g.a.createElement(O.b, null, X),
                        g.a.createElement(O.b, { color: 'gray700', style: x.a.helpText }, Y(new Date(i.created_at))),
                        s.creation_ip && s.country
                          ? g.a.createElement(
                              O.b,
                              { color: 'gray700', style: x.a.helpText },
                              ''.concat(s.creation_ip, ' (').concat(s.country, ')'),
                            )
                          : null,
                      )
                    : null,
                  null != i && i.screen_name
                    ? g.a.createElement(L.a, { label: K, link: '/'.concat(i.screen_name) })
                    : null,
                  i && l ? g.a.createElement(L.a, { description: l, label: V, link: '/settings/phone' }) : null,
                  i && r ? g.a.createElement(L.a, { description: r, label: z, link: '/settings/email' }) : null,
                  i ? g.a.createElement(L.a, { label: W, link: '/settings/contacts_dashboard' }) : null,
                  i
                    ? g.a.createElement(N.a, {
                        label: q,
                        learnMoreLabel: re,
                        learnMoreLink: oe,
                        subtext: i.verified ? J : $,
                      })
                    : null,
                  g.a.createElement(L.a, {
                    description: c.value,
                    label: U,
                    link: '/settings/your_twitter_data/gender',
                  }),
                  i
                    ? g.a.createElement(
                        F.a,
                        { style: [x.a.infoItem, x.a.bottomBorder] },
                        g.a.createElement(O.b, null, Q),
                        n ? g.a.createElement(O.b, { color: 'gray700', size: 'subtext2' }, u) : null,
                        g.a.createElement(
                          O.b,
                          { color: 'gray700', style: x.a.helpText },
                          g.a.createElement(
                            B.a.I18NFormatMessage,
                            { $i18n: 'f00220d5' },
                            g.a.createElement(O.b, { link: '/'.concat(i.screen_name) }, B.a.a781b0c6),
                          ),
                        ),
                      )
                    : null,
                  g.a.createElement(L.a, { description: d, label: Z, link: '/settings/your_twitter_data/age' }),
                  g.a.createElement(L.a, { description: f, label: ee, link: '/settings/your_twitter_data/language' }),
                  i
                    ? g.a.createElement(L.a, { description: i.protected ? J : $, label: te, link: '/settings/safety' })
                    : null,
                  i
                    ? null
                    : g.a.createElement(
                        F.a,
                        { style: x.a.infoItem },
                        g.a.createElement(O.b, { color: 'gray700', style: x.a.helpText }, ne),
                        g.a.createElement('br', null),
                        g.a.createElement(
                          O.b,
                          { color: 'gray700', style: x.a.helpText },
                          g.a.createElement(
                            B.a.I18NFormatMessage,
                            { $i18n: 'c757b230' },
                            g.a.createElement(O.b, { link: ce }, B.a.j7f91baf),
                          ),
                        ),
                      ),
                )
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.location
                  return g.a.createElement(
                    k.a,
                    null,
                    g.a.createElement(
                      C.a,
                      { location: a, title: H },
                      g.a.createElement(
                        D.a,
                        null,
                        g.a.createElement(P.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      t.default = w(ie)
    },
    RgJG: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardLocationsScreen', function () {
          return j
        })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        f = a.n(u),
        m = a('KEM+'),
        p = a.n(m),
        h = (a('2G9S'), a('z84I'), a('ERkP')),
        g = a.n(h),
        E = a('EPsT'),
        b = a('NeAX'),
        _ = a('1YZw'),
        y = a('rxPX'),
        v = a('0KEI'),
        S = Object(y.a)()
          .propsFromState(function () {
            return {
              fetchStatus: b.selectFetchDataStatus,
              personalizationData: b.selectData,
              settings: b.selectUserPreferences,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: _.b,
              clearLocations: b.clearLocations,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_LOCATION_SCREEN',
              ),
              fetchData: b.fetchDataIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'locations' }),
        I = a('EfHu'),
        A = a('yoO3'),
        w = a('PK8P'),
        D = a('7FtF'),
        k = a('iCwC'),
        P = a('XYIJ'),
        C = a('MWbm'),
        x = a('t62R'),
        F = a('j7Bv'),
        T = a('3XMw'),
        L = a.n(T),
        R = L.a.d9138165,
        O = L.a.d1a276bc,
        N = L.a.e68b09b4,
        M = { headline: L.a.ddefdd1c, text: L.a.hea740ac, confirmButtonLabel: L.a.e68b09b4 },
        B = L.a.a26e0d52,
        H = L.a.ae415fd2,
        Y = g.a.createElement(
          L.a.I18NFormatMessage,
          { $i18n: 'a1fdeb44' },
          g.a.createElement(x.b, { link: '/settings/location_information' }, L.a.eb0d4501),
        ),
        G = L.a.he447966,
        j = (function (e) {
          d()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(l()(e), '_handleDeleteLocation', function () {
                var t = e.props,
                  a = t.addToast,
                  n = t.clearLocations,
                  r = t.createLocalApiErrorHandler
                e._scribeAction('clear'),
                  n().then(function () {
                    return a({ text: B })
                  }, r({ showToast: !0 }))
              }),
              p()(l()(e), '_render', function () {
                var t = e.props.settings.allowLocationHistoryUse
                return g.a.createElement(
                  A.a,
                  null,
                  g.a.createElement(
                    'div',
                    null,
                    g.a.createElement(
                      C.a,
                      { style: [P.a.infoItem, P.a.bottomBorder] },
                      g.a.createElement(x.b, { color: 'gray700' }, O),
                    ),
                    t ? e._renderLocations() : e._renderMessage(H, Y),
                  ),
                )
              }),
              p()(l()(e), '_renderLocations', function () {
                var t = e.props.personalizationData.location_history
                return g.a.createElement(
                  C.a,
                  null,
                  t &&
                    t.map(function (e, t) {
                      return g.a.createElement(
                        C.a,
                        { key: "loc-'".concat(t), style: [P.a.infoItem, P.a.locationInfo, P.a.bottomBorder] },
                        g.a.createElement(F.a, {
                          Icon: I.a,
                          color: 'neutral',
                          size: 'xLarge',
                          style: P.a.locationIcon,
                        }),
                        g.a.createElement(x.b, null, e),
                      )
                    }),
                  t && t.length
                    ? g.a.createElement(E.a, {
                        confirmationSheetConfirmButtonLabel: M.confirmButtonLabel,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: M.headline,
                        confirmationSheetText: M.text,
                        label: N,
                        onConfirmationSheetConfirm: e._handleDeleteLocation,
                        withBottomBorder: !1,
                      })
                    : e._renderMessage(G),
                )
              }),
              p()(l()(e), '_renderMessage', function (e, t) {
                return g.a.createElement(
                  C.a,
                  { style: k.a.calloutTextBlock },
                  g.a.createElement(x.b, { align: 'center', size: 'headline1' }, e),
                  t ? g.a.createElement(x.b, { align: 'center', color: 'gray700', style: P.a.helpText }, t) : null,
                )
              }),
              p()(l()(e), '_scribeAction', function (t) {
                e.props.analytics.scribe({ action: t })
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchData,
                    a = e.fetchStatus,
                    n = e.location
                  return g.a.createElement(
                    D.a,
                    { location: n, title: R },
                    g.a.createElement(w.a, { fetch: t, fetchStatus: a, render: this._render, titleHeader: R }),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      t.default = S(j)
    },
    XYIJ: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        c = a('rHpw'),
        o = function (e) {
          return { borderBottomColor: e.colors.borderColor, borderBottomStyle: 'solid', borderBottomWidth: '1px' }
        },
        i = c.a.create(function (e) {
          return {
            labelContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
            helpText: { display: 'block', fontSize: e.fontSizes.subtext2, lineHeight: '1.55' },
            titleCase: { textTransform: 'capitalize' },
            floatingLink: { paddingLeft: e.spaces.space20 },
            infoItem: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            locationInfo: { alignItems: 'center', flexDirection: 'row', width: '100%' },
            locationIcon: { marginRight: e.spaces.space12 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space20 },
            noLeftPadding: { paddingLeft: 0 },
            narrowButtonRow: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            bottomBorder: r()({}, o(e)),
            narrowButton: { alignSelf: 'center', marginLeft: e.spaces.space12, paddingLeft: e.spaces.space20 },
            helpTextExtraPadded: { paddingTop: e.spaces.space12 },
            featureDisabledCallout: { paddingHorizontal: 70, paddingTop: e.spaces.space48 },
            featureDisabledTitle: { paddingBottom: e.spaces.space4 },
          }
        })
      t.a = i
    },
    c1bX: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'AdsScreen', function () {
          return L
        })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        f = a.n(u),
        m = a('KEM+'),
        p = a.n(m),
        h = (a('2G9S'), a('ERkP')),
        g = a.n(h),
        E = a('NeAX'),
        b = a('rxPX'),
        _ = a('0KEI'),
        y = Object(b.a)()
          .propsFromState(function () {
            return { fetchDataStatus: E.selectFetchDataStatus, personalizationData: E.selectData }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN',
              ),
              fetchData: E.fetchDataIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'ads_data' }),
        v = a('3XMw'),
        S = a.n(v),
        I = a('yoO3'),
        A = a('csss'),
        w = a('7FtF'),
        D = a('v6aA'),
        k = S.a.gbde3534,
        P = S.a.a54826c5,
        C = S.a.fdb55209,
        x = S.a.e1c6b2d5,
        F = S.a.ed19d10d,
        T = S.a.f00d0d02,
        L = (function (e) {
          d()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(l()(e), 'render', function () {
                var t = e.props,
                  a = t.location,
                  n = t.personalizationData,
                  r = n.tailored_audience_summary ? n.tailored_audience_summary.num_advertisers : 0,
                  c = n.tailored_audience_summary ? n.tailored_audience_summary.num_audiences : 0
                return g.a.createElement(
                  I.a,
                  null,
                  g.a.createElement(
                    w.a,
                    { location: a, title: k },
                    g.a.createElement(A.a, {
                      description: n.tailored_audience_summary ? T({ count: n.num_twitter_interests }) : null,
                      label: C,
                      link: '/settings/your_twitter_data/twitter_interests',
                    }),
                    g.a.createElement(A.a, {
                      description: n.tailored_audience_summary ? T({ count: n.num_partner_interests }) : null,
                      label: P,
                      link: '/settings/your_twitter_data/partner_interests',
                    }),
                    g.a.createElement(A.a, {
                      description: n.tailored_audience_summary ? F({ audienceCount: c, advertiserCount: r }) : null,
                      label: x,
                      link: '/settings/your_twitter_data/audiences',
                    }),
                  ),
                )
              }),
              p()(l()(e), '_handleFetchData', function () {
                var t = e.props.createLocalApiErrorHandler
                e.props.fetchData().catch(t())
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  ;(this.isLoggedIn = !!this.context.loggedInUserId), this._handleFetchData()
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      p()(L, 'contextType', D.a)
      t.default = y(L)
    },
    eM8g: function (e, t, a) {
      'use strict'
      a('2G9S')
      var n = a('ERkP'),
        r = a.n(n),
        c = a('MWbm'),
        o = a('t62R'),
        i = a('rHpw')
      t.a = function (e) {
        var t = e.children
        return r.a.createElement(
          c.a,
          { style: l.labelContainer },
          r.a.createElement(
            c.a,
            { style: l.contentContainer },
            r.a.createElement(
              c.a,
              { style: l.appText },
              r.a.createElement(o.b, { color: 'gray700', size: 'subtext2' }, t),
            ),
          ),
        )
      }
      var l = i.a.create(function (e) {
        return {
          contentContainer: { alignItems: 'center', flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
          labelContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
            minHeight: 'calc('
              .concat(i.a.theme.lineHeights.headline1, ' + 2 * ')
              .concat(e.componentDimensions.gutterVertical, ')'),
          },
          appText: { flexShrink: 1, width: '100%' },
        }
      })
    },
    eevv: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'AccountHistoryScreen', function () {
          return L
        })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        f = a.n(u),
        m = a('KEM+'),
        p = a.n(m),
        h = (a('2G9S'), a('ERkP')),
        g = a.n(h),
        E = a('zh9S'),
        b = a('NeAX'),
        _ = a('rxPX'),
        y = a('0KEI'),
        v = Object(_.a)()
          .propsFromState(function () {
            return { fetchDataStatus: b.selectFetchDataStatus, personalizationData: b.selectData }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_DATA_SCREEN',
              ),
              fetchData: b.fetchDataIfNeeded,
              fetchPreferences: b.fetchPreferencesIfNeeded,
              googleAnalyticsPageView: E.a,
              scribePageImpression: E.d,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'account_history' }),
        S = a('3XMw'),
        I = a.n(S),
        A = a('yoO3'),
        w = a('csss'),
        D = a('7FtF'),
        k = a('v6aA'),
        P = I.a.i6b3f59a,
        C = I.a.b523ecc5,
        x = I.a.d9cbe351,
        F = I.a.de90b049,
        T = I.a.cbd2ef58,
        L = (function (e) {
          d()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(l()(e), '_handleFetchData', function () {
                var t = e.props.createLocalApiErrorHandler
                e.props.fetchData().catch(t())
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this.isLoggedIn = !!this.context.loggedInUserId), this._handleFetchData()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    a = e.personalizationData,
                    n = a.location_history ? a.location_history.length : 0,
                    r = a.login_history ? a.login_history.length : 0
                  return g.a.createElement(
                    A.a,
                    null,
                    g.a.createElement(
                      D.a,
                      { location: t, title: P },
                      g.a.createElement(w.a, {
                        description: r > 0 ? x({ count: r }) : null,
                        label: C,
                        link: '/settings/your_twitter_data/login_history',
                      }),
                      g.a.createElement(w.a, {
                        description: n > 0 ? T({ count: n }) : null,
                        label: F,
                        link: '/settings/your_twitter_data/locations',
                      }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      p()(L, 'contextType', k.a)
      t.default = v(L)
    },
    fpiQ: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardPartnerInterestsScreen', function () {
          return X
        })
      var n = a('yiKp'),
        r = a.n(n),
        c = a('VrFO'),
        o = a.n(c),
        i = a('Y9Ll'),
        l = a.n(i),
        s = a('1Pcy'),
        d = a.n(s),
        u = a('5Yy7'),
        f = a.n(u),
        m = a('2VqO'),
        p = a.n(m),
        h = a('KEM+'),
        g = a.n(h),
        E = (a('2G9S'), a('z84I'), a('vrRf'), a('TJCb'), a('7x/C'), a('DZ+c'), a('ERkP')),
        b = a.n(E),
        _ = a('zh9S'),
        y = a('NeAX'),
        v = a('hqKg'),
        S = a('kGix'),
        I = a('0KEI'),
        A = a('oEGd'),
        w = Object(v.createSelector)(
          function (e, t) {
            return Object(S.d)(y.selectFetchPartnerInterestsStatus(e), y.selectPreferencesFetchStatus(e))
          },
          y.selectPartnerInterests,
          y.selectPreferences,
          function (e, t, a) {
            return { fetchStatus: e, interests: t, preferences: a }
          },
        ),
        D = {
          createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_PARTNER_INTERESTS_SCREEN',
          ),
          fetchInterests: y.fetchPartnerInterestsIfNeeded,
          fetchPreferences: y.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: _.a,
          scribeAction: _.c,
          scribePageImpression: _.d,
          updateInterest: y.updateInterest,
        },
        k = Object(A.f)(w, D),
        P = a('xCYy'),
        C = a('v//M'),
        x = a('7JQg'),
        F = a('7FtF'),
        T = a('iCwC'),
        L = a('XYIJ'),
        R = a('MWbm'),
        O = a('t62R'),
        N = a('e0ey'),
        M = a('3XMw'),
        B = a.n(M),
        H = B.a.a54826c5,
        Y = B.a.gc8f2e13,
        G = B.a.e9f1fbcb,
        j = B.a.cf0daa24,
        z = 'https://support.twitter.com/articles/20175258',
        V = { page: 'settings', section: 'your_twitter_data', component: 'partner_interests' },
        X = (function (e) {
          f()(a, e)
          var t = p()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, c = new Array(n), i = 0; i < n; i++) c[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              g()(d()(e), '_render', function () {
                var t = e.props,
                  a = t.interests.partner_interests,
                  n = void 0 === a ? [] : a,
                  r = t.preferences.interest_preferences,
                  c = (void 0 === r ? {} : r).disabled_partner_interests || []
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(
                    R.a,
                    { style: [L.a.infoItem, L.a.bottomBorder] },
                    b.a.createElement(
                      O.b,
                      { color: 'gray700' },
                      b.a.createElement(
                        B.a.I18NFormatMessage,
                        { $i18n: 'c2a54dca' },
                        b.a.createElement(O.b, { link: z }, B.a.f04e17dd),
                      ),
                    ),
                  ),
                  n.map(function (t) {
                    return b.a.createElement(N.a, {
                      checked: -1 === c.indexOf(t.id),
                      key: t.id,
                      label: t.display_name,
                      name: t.id.toString(),
                      onChange: e._handleUpdateInterest,
                    })
                  }),
                  0 === n.length
                    ? e._renderMessage(G, j)
                    : b.a.createElement(
                        R.a,
                        { style: T.a.calloutTextBlock },
                        b.a.createElement(O.b, { color: 'gray700', style: L.a.helpText }, Y),
                      ),
                )
              }),
              g()(d()(e), '_renderMessage', function (e, t) {
                return b.a.createElement(
                  R.a,
                  { style: T.a.calloutTextBlock },
                  b.a.createElement(O.b, { align: 'center', size: 'headline1' }, e),
                  t ? b.a.createElement(O.b, { align: 'center', color: 'gray700', style: L.a.helpText }, t) : null,
                )
              }),
              g()(d()(e), '_handleFetchData', function () {
                var t = e.props.createLocalApiErrorHandler
                e.props.fetchPreferences().catch(t()), e.props.fetchInterests().catch(t())
              }),
              g()(d()(e), '_handleUpdateInterest', function (t, a) {
                var n = e.props,
                  r = n.createLocalApiErrorHandler,
                  c = n.updateInterest
                e._scribeAction(), c(t, a, 'partner').catch(r({ showToast: !0 }))
              }),
              g()(d()(e), '_scribeAction', function () {
                ;(0, e.props.scribeAction)(r()(r()({}, V), {}, { action: 'edit' }))
              }),
              e
            )
          }
          return (
            l()(a, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  this._handleFetchData()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView
                  ;(0, e.scribePageImpression)(V), t(V)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.location
                  return b.a.createElement(
                    x.c,
                    { namespace: V },
                    b.a.createElement(
                      F.a,
                      { location: a, title: H },
                      b.a.createElement(
                        P.a,
                        null,
                        b.a.createElement(C.a, {
                          fetchStatus: t,
                          onRequestRetry: this._handleFetchData,
                          render: this._render,
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      t.default = k(X)
    },
    'h/+I': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardTailoredAudiencesScreen', function () {
          return Q
        })
      var n = a('yiKp'),
        r = a.n(n),
        c = a('VrFO'),
        o = a.n(c),
        i = a('Y9Ll'),
        l = a.n(i),
        s = a('1Pcy'),
        d = a.n(s),
        u = a('5Yy7'),
        f = a.n(u),
        m = a('2VqO'),
        p = a.n(m),
        h = a('KEM+'),
        g = a.n(h),
        E = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('ERkP')),
        b = a.n(E),
        _ = a('zh9S'),
        y = a('vEo5'),
        v = a('NeAX'),
        S = a('1YZw'),
        I = a('hqKg'),
        A = a('YeIG'),
        w = a('G6rE'),
        D = a('0KEI'),
        k = a('oEGd'),
        P = a('kGix'),
        C = Object(I.createSelector)(
          v.selectData,
          function (e, t) {
            var a = w.e.selectLoggedInUser(e),
              n = Object(A.a)(a) ? P.a.LOADED : y.selectFetchStatus(e)
            return Object(P.d)(v.selectFetchDataStatus(e), v.selectPreferencesFetchStatus(e), n)
          },
          v.selectPreferences,
          y.selectFirstEmail,
          function (e, t, a, n) {
            return { data: e, fetchStatus: t, preferences: a, primaryEmail: n }
          },
        ),
        x = {
          addToast: S.b,
          createAudienceDownload: v.createAudienceDownload,
          createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
            'SETTINGS_TRANSPARENCY_DASHBOARD_TAILORED_AUDIENCES_SCREEN',
          ),
          fetchData: v.fetchDataIfNeeded,
          fetchDevices: y.fetchDevices,
          fetchPreferences: v.fetchPreferencesIfNeeded,
          googleAnalyticsPageView: _.a,
          scribeAction: _.c,
          scribePageImpression: _.d,
        },
        F = Object(k.f)(C, x),
        T = a('xCYy'),
        L = a('yoO3'),
        R = a('PK8P'),
        O = a('7JQg'),
        N = a('7FtF'),
        M = a('XYIJ'),
        B = a('MWbm'),
        H = a('t62R'),
        Y = a('jtO7'),
        G = a('eb3s'),
        j = a('v6aA'),
        z = a('3XMw'),
        V = a.n(z),
        X = { headline: V.a.hf9c2caa, text: V.a.c29b7970, confirmButtonLabel: V.a.b9e1cf02 },
        K = V.a.e1c6b2d5,
        U = V.a.da202f9a,
        W = V.a.a8276fab,
        q = V.a.g7912a84,
        J = V.a.fdfed926,
        $ = { page: 'settings', section: 'your_twitter_data', component: 'tailored_audiences' },
        Q = (function (e) {
          f()(a, e)
          var t = p()(a)
          function a(e, n) {
            var c
            return (
              o()(this, a),
              (c = t.call(this, e, n)),
              g()(
                d()(c),
                '_fsSettingsRevamp',
                c.context.featureSwitches.isTrue('responsive_web_settings_revamp_enabled'),
              ),
              g()(d()(c), '_combinedFetches', function () {
                var e = c.props,
                  t = e.fetchData,
                  a = e.fetchDevices,
                  n = e.fetchPreferences,
                  r = [t(), n()]
                return c._isLoggedIn() && r.push(a()), Promise.all(r)
              }),
              g()(d()(c), '_render', function () {
                var e = c.props,
                  t = e.data.tailored_audience_summary,
                  a = void 0 === t ? {} : t,
                  n = e.primaryEmail,
                  r = 0 !== a.num_advertisers && 0 !== a.num_audiences
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(
                    B.a,
                    { style: [M.a.infoItem, M.a.bottomBorder] },
                    b.a.createElement(
                      H.b,
                      { color: 'gray700' },
                      b.a.createElement(
                        V.a.I18NFormatMessage,
                        { $i18n: 'a97ef88f' },
                        b.a.createElement(H.b, { link: 'https://support.twitter.com/articles/20170405' }, V.a.ed8c03f4),
                      ),
                    ),
                  ),
                  b.a.createElement(
                    B.a,
                    { style: [M.a.infoItem, M.a.bottomBorder] },
                    b.a.createElement(
                      H.b,
                      null,
                      b.a.createElement(
                        V.a.I18NFormatMessage,
                        { $i18n: 'f451c520' },
                        b.a.createElement('strong', null, V.a.j10ebd90({ num_audiences: a.num_audiences })),
                        b.a.createElement('strong', null, V.a.efd23f39({ num_advertisers: a.num_advertisers })),
                      ),
                    ),
                  ),
                  b.a.createElement(
                    B.a,
                    { style: [M.a.infoItem, r && M.a.bottomBorder] },
                    b.a.createElement(H.b, { color: 'gray700' }, J),
                  ),
                  r ? b.a.createElement(Y.a, { color: 'primary', label: W, onPress: c._handleRequestDataClick }) : null,
                  c.state.showEmailConfirmation &&
                    b.a.createElement(G.a, {
                      confirmButtonLabel: X.confirmButtonLabel,
                      headline: X.headline,
                      onCancel: c._handleCancelEmail,
                      onConfirm: c._handleConfirmEmail,
                      text: X.text({ primaryEmail: n }),
                    }),
                )
              }),
              g()(d()(c), '_requestUserData', function () {
                var e = c.props,
                  t = e.addToast,
                  a = e.createAudienceDownload
                e.primaryEmail
                  ? (c._scribeAction('email'),
                    a().then(function () {
                      return t({ text: q })
                    }))
                  : (c._scribeAction('download'),
                    window.open('https://twitter.com/account/personalization/download_advertiser_list.pdf', '_blank'))
              }),
              g()(d()(c), '_handleRequestDataClick', function () {
                c.props.primaryEmail ? c.setState({ showEmailConfirmation: !0 }) : c._requestUserData()
              }),
              g()(d()(c), '_handleCancelEmail', function () {
                c.setState({ showEmailConfirmation: !1 })
              }),
              g()(d()(c), '_handleConfirmEmail', function () {
                c._requestUserData(), c.setState({ showEmailConfirmation: !1 })
              }),
              g()(d()(c), '_scribeAction', function (e) {
                ;(0, c.props.scribeAction)(r()(r()({}, $), {}, { action: e }))
              }),
              g()(d()(c), '_isLoggedIn', function () {
                return Boolean(c.context.loggedInUserId)
              }),
              (c.state = { showEmailConfirmation: !1 }),
              c
            )
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.location
                  return b.a.createElement(
                    O.c,
                    { namespace: $ },
                    b.a.createElement(
                      L.a,
                      null,
                      b.a.createElement(
                        N.a,
                        { location: a, title: this._fsSettingsRevamp ? U : K },
                        b.a.createElement(
                          T.a,
                          null,
                          b.a.createElement(R.a, {
                            fetch: this._combinedFetches,
                            fetchStatus: t,
                            render: this._render,
                          }),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      g()(Q, 'contextType', j.a)
      t.default = F(Q)
    },
    iKWa: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardLoginHistoryScreen', function () {
          return M
        })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        f = a.n(u),
        m = a('KEM+'),
        p = a.n(m),
        h = (a('2G9S'), a('z84I'), a('ERkP')),
        g = a.n(h),
        E = a('NeAX'),
        b = a('rxPX'),
        _ = a('0KEI'),
        y = Object(b.a)()
          .propsFromState(function () {
            return { fetchDataStatus: E.selectFetchDataStatus, personalizationData: E.selectData }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_LOGIN_HISTORY_SCREEN',
              ),
              fetchData: E.fetchDataIfNeeded,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'login_history' }),
        v = a('yoO3'),
        S = a('PK8P'),
        I = a('7FtF'),
        A = a('XYIJ'),
        w = a('MWbm'),
        D = a('t62R'),
        k = a('RKmr'),
        P = a('v6aA'),
        C = a('3XMw'),
        x = a.n(C),
        F = x.a.b523ecc5,
        T = x.a.e27e4fcd,
        L = x.a.d0a77c9a,
        R = 'https://support.twitter.com/articles/20172679',
        O = g.a.createElement(
          x.a.I18NFormatMessage,
          { $i18n: 'hcb3ad67' },
          g.a.createElement(D.b, { link: '/settings/connected_apps' }, x.a.ib55eb69),
          g.a.createElement(D.b, { link: R }, x.a.e5a4a538),
        ),
        N = g.a.createElement(
          x.a.I18NFormatMessage,
          { $i18n: 'da2603ab' },
          g.a.createElement(D.b, { link: '/settings/applications' }, x.a.icbb92d0),
          g.a.createElement(D.b, { link: R }, x.a.a9bec4ef),
        ),
        M = (function (e) {
          d()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(
                l()(e),
                '_fsSettingsRevamp',
                e.context.featureSwitches.isTrue('responsive_web_settings_revamp_enabled'),
              ),
              p()(l()(e), '_render', function () {
                var t = e.props.personalizationData.login_history
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  t &&
                    t.map(function (e, t) {
                      return g.a.createElement(
                        w.a,
                        { key: "hist-'".concat(t), style: [A.a.infoItem, A.a.bottomBorder] },
                        g.a.createElement(D.b, null, e.app_name),
                        g.a.createElement(D.b, { color: 'gray700', style: A.a.helpText }, L(new Date(e.time))),
                        g.a.createElement(
                          D.b,
                          { color: 'gray700', style: A.a.helpText },
                          e.ip,
                          ' (',
                          e.country ? e.country : T,
                          ')',
                        ),
                      )
                    }),
                )
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchData,
                    a = e.fetchDataStatus,
                    n = e.location
                  return g.a.createElement(
                    v.a,
                    null,
                    g.a.createElement(
                      I.a,
                      { location: n, title: F },
                      g.a.createElement(k.a, { description: this._fsSettingsRevamp ? O : N }),
                      g.a.createElement(S.a, { fetch: t, fetchStatus: a, render: this._render }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      p()(M, 'contextType', P.a)
      t.default = y(M)
    },
    jtO7: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        c = a('m3Bd'),
        o = a.n(c),
        i = a('ERkP'),
        l = a.n(i),
        s = a('t62R'),
        d = a('I4+6'),
        u = a('cm6r'),
        f = a('rHpw'),
        m = a('MWbm'),
        p = ['align', 'color', 'label'],
        h = f.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          a = void 0 === t ? 'center' : t,
          n = e.color,
          c = e.label,
          i = o()(e, p),
          g = d.a.generate({
            backgroundColor: f.a.theme.colors.transparent,
            color: f.a.theme.colors[n],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          m.a,
          { style: h.container },
          l.a.createElement(
            u.a,
            r()({}, i, { interactiveStyles: g, style: h.root }),
            l.a.createElement(s.b, { align: a, color: n }, c),
          ),
        )
      }
    },
    lFNj: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardGenderScreen', function () {
          return ee
        })
      var n = a('97Jx'),
        r = a.n(n),
        c = a('VrFO'),
        o = a.n(c),
        i = a('Y9Ll'),
        l = a.n(i),
        s = a('1Pcy'),
        d = a.n(s),
        u = a('5Yy7'),
        f = a.n(u),
        m = a('2VqO'),
        p = a.n(m),
        h = a('KEM+'),
        g = a.n(h),
        E = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('ERkP')),
        b = a.n(E),
        _ = a('NeAX'),
        y = a('1YZw'),
        v = a('kGix'),
        S = a('rxPX'),
        I = a('0KEI'),
        A = function (e, t) {
          return Object(v.d)(_.selectFetchDataStatus(e), _.selectPreferencesFetchStatus(e))
        },
        w = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: A, gender: _.selectGender, personalizationPreferences: _.selectPreferences }
          })
          .propsFromActions(function () {
            return {
              addToast: y.b,
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_GENDER_SCREEN',
              ),
              fetchData: _.fetchDataIfNeeded,
              fetchPreferences: _.fetchPreferencesIfNeeded,
              updateGender: _.updateGender,
              updateSettings: _.updateSettings,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'gender' }),
        D = a('xCYy'),
        k = a('3XMw'),
        P = a.n(k),
        C = a('yoO3'),
        x = a('PK8P'),
        F = a('7FtF'),
        T = a('iCwC'),
        L = a('XYIJ'),
        R = a('MWbm'),
        O = a('t62R'),
        N = a('3JAx'),
        M = a('p+r5'),
        B = a('e0ey'),
        H = a('v6aA'),
        Y = P.a.a8d0108d,
        G = 'custom',
        j = P.a.a8d0108d,
        z = P.a.fbf0e61d,
        V = P.a.de32365f,
        X = P.a.b6ab31bd,
        K = P.a.b4568a3a,
        U = P.a.c0be743d,
        W = P.a.i2209530,
        q = [
          { label: V, value: 'female' },
          { label: X, value: 'male' },
          { label: K, value: G },
        ],
        J = P.a.b7cb74e0,
        $ = P.a.cdb0d3e6,
        Q = P.a.e9f1fbcb,
        Z = P.a.cf0daa24,
        ee = (function (e) {
          f()(a, e)
          var t = p()(a)
          function a(e, n) {
            var r
            return (
              o()(this, a),
              (r = t.call(this, e, n)),
              g()(d()(r), 'combinedFetches', function () {
                var e = r.props,
                  t = e.fetchData,
                  a = e.fetchPreferences
                return Promise.all([t(), a()])
              }),
              g()(d()(r), '_render', function () {
                return b.a.createElement(
                  'div',
                  null,
                  b.a.createElement(
                    R.a,
                    { style: [L.a.infoItem, L.a.bottomBorder] },
                    b.a.createElement(O.b, { color: 'gray700' }, r.isLoggedIn ? z : J),
                  ),
                  r.isLoggedIn ? r._renderGenderSelector() : r._renderLoggedOut(),
                )
              }),
              g()(d()(r), '_renderMessage', function (e, t) {
                return b.a.createElement(
                  R.a,
                  { style: T.a.calloutTextBlock },
                  b.a.createElement(O.b, { align: 'center', size: 'headline1' }, e),
                  t ? b.a.createElement(O.b, { align: 'center', color: 'gray700', style: L.a.helpText }, t) : null,
                )
              }),
              g()(d()(r), '_handleItemChanged', function (e, t) {
                var a = t === G
                r.setState({ self_identify: a, gender: a ? null : t })
              }),
              g()(d()(r), '_handleCustomGenderUpdate', function (e) {
                var t = e.target.value
                r.setState({ self_identify: !0, gender: t })
              }),
              g()(d()(r), '_handleSaveGender', function () {
                var e = r.props,
                  t = e.addToast,
                  a = e.createLocalApiErrorHandler,
                  n = e.updateGender,
                  c = r.state.self_identify ? G : r.state.gender || G
                r._scribeAction(),
                  n({ type: c, value: r.state.gender || '' })
                    .then(function () {
                      return t({ text: U })
                    }, a({ showToast: !0 }))
                    .then(r._handleCancel)
              }),
              g()(d()(r), '_handleCancel', function () {
                r.props.history.goBack({ backLocation: '/settings/your_twitter_data/account' })
              }),
              g()(d()(r), '_handleBooleanChanged', function (e, t) {
                var a = r.props,
                  n = a.createLocalApiErrorHandler
                ;(0, a.updateSettings)(g()({}, e, !t)).catch(n())
              }),
              g()(d()(r), '_scribeAction', function () {
                r.props.analytics.scribe({ action: 'edit' })
              }),
              (r.state = { self_identify: r.props.gender.type === G, gender: r.props.gender.value }),
              r
            )
          }
          return (
            l()(a, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  ;(this.isLoggedIn = !!this.context.loggedInUserId), this.props.fetchPreferences()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.location,
                    n =
                      t === v.a.LOADED && this.isLoggedIn
                        ? { onSubmit: this._handleSaveGender, submitDisabled: !this.isGenderValid, submitLabel: W }
                        : void 0
                  return b.a.createElement(
                    C.a,
                    null,
                    b.a.createElement(
                      F.a,
                      r()({ location: a, title: j }, n),
                      b.a.createElement(
                        D.a,
                        null,
                        b.a.createElement(x.a, { fetch: this.combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderGenderSelector',
                value: function () {
                  var e = this.props.gender
                  return b.a.createElement(
                    R.a,
                    null,
                    b.a.createElement(N.a, {
                      name: 'gender',
                      onChange: this._handleItemChanged,
                      options: q,
                      value: this.selectedGender,
                    }),
                    this.selectedGender === G
                      ? b.a.createElement(M.a, {
                          defaultValue: e.value && e.type === G ? e.value : '',
                          label: Y,
                          maxLength: 30,
                          name: 'genderOther',
                          onChange: this._handleCustomGenderUpdate,
                          type: 'text',
                        })
                      : null,
                  )
                },
              },
              {
                key: '_renderLoggedOut',
                value: function () {
                  var e = this.props.personalizationPreferences,
                    t = e.gender_preferences && e.gender_preferences.use_gender_for_personalization
                  return b.a.createElement(
                    R.a,
                    null,
                    this.selectedGender
                      ? b.a.createElement(
                          R.a,
                          { style: [L.a.infoItem, L.a.bottomBorder] },
                          b.a.createElement(O.b, null, this.props.gender.value),
                        )
                      : this._renderMessage(Q, Z),
                    b.a.createElement(B.a, {
                      checked: !t,
                      key: 'use_gender_for_personalization',
                      label: $,
                      name: 'use_gender_for_personalization',
                      onChange: this._handleBooleanChanged,
                    }),
                  )
                },
              },
              {
                key: 'selectedGender',
                get: function () {
                  var e = this.props.gender
                  return this.state.self_identify ? G : this.state.gender ? this.state.gender : e && e.type
                },
              },
              {
                key: 'isGenderValid',
                get: function () {
                  var e = this.props.gender
                  return this.state.gender && this.state.gender !== e.value
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      g()(ee, 'contextType', H.a)
      t.default = w(ee)
    },
    'v/BL': function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TransparencyDashboardAgeScreen', function () {
          return z
        })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        o = a.n(c),
        i = a('1Pcy'),
        l = a.n(i),
        s = a('5Yy7'),
        d = a.n(s),
        u = a('2VqO'),
        f = a.n(u),
        m = a('KEM+'),
        p = a.n(m),
        h = (a('2G9S'), a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('z84I'), a('ERkP')),
        g = a.n(h),
        E = a('NeAX'),
        b = a('kGix'),
        _ = a('rxPX'),
        y = a('0KEI'),
        v = function (e, t) {
          return Object(b.d)(E.selectFetchDataStatus(e), E.selectPreferencesFetchStatus(e))
        },
        S = Object(_.a)()
          .propsFromState(function () {
            return { ages: E.selectAge, fetchStatus: v, personalizationPreferences: E.selectPreferences }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_TRANSPARENCY_DASHBOARD_AGE_SCREEN',
              ),
              fetchData: E.fetchDataIfNeeded,
              fetchPreferences: E.fetchPreferencesIfNeeded,
              updateSettings: E.updateSettings,
            }
          })
          .withAnalytics({ page: 'settings', section: 'your_twitter_data', component: 'age' }),
        I = a('xCYy'),
        A = a('yoO3'),
        w = a('PK8P'),
        D = a('7FtF'),
        k = a('iCwC'),
        P = a('XYIJ'),
        C = a('MWbm'),
        x = a('t62R'),
        F = a('Xrkv'),
        T = a('e0ey'),
        L = a('v6aA'),
        R = a('3XMw'),
        O = a.n(R),
        N = O.a.bf96fda4,
        M = g.a.createElement(
          O.a.I18NFormatMessage,
          { $i18n: 'bf82b0a6' },
          g.a.createElement(
            x.b,
            { link: 'https://help.twitter.com/safety-and-security/birthday-visibility-settings' },
            O.a.jc0b4d1c,
          ),
        ),
        B = O.a.ie40dc4a,
        H = O.a.fe1fc83e,
        Y = O.a.bf9c74d0,
        G = O.a.e9f1fbcb,
        j = O.a.cf0daa24,
        z = (function (e) {
          d()(a, e)
          var t = f()(a)
          function a() {
            var e
            r()(this, a)
            for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              p()(l()(e), '_combinedFetches', function () {
                var t = e.props,
                  a = t.fetchData,
                  n = t.fetchPreferences
                return Promise.all([a(), n()])
              }),
              p()(l()(e), '_render', function () {
                return g.a.createElement(
                  'div',
                  null,
                  e._renderAges(),
                  e.isLoggedIn
                    ? g.a.createElement(C.a, { style: P.a.infoItem }, g.a.createElement(x.b, { color: 'gray700' }, B))
                    : e._renderUseAge(),
                )
              }),
              p()(l()(e), '_renderAges', function () {
                var t = e.props.ages,
                  a = Object(F.a)(
                    t.map(function (e) {
                      return 'string' == typeof e ? e : e.display
                    }),
                    !0,
                  )
                return a
                  ? g.a.createElement(C.a, { style: [P.a.infoItem, P.a.bottomBorder] }, g.a.createElement(x.b, null, a))
                  : e._renderMessage(G, j)
              }),
              p()(l()(e), '_renderMessage', function (e, t) {
                return g.a.createElement(
                  C.a,
                  { style: [k.a.calloutTextBlock, k.a.bottomBorder] },
                  g.a.createElement(x.b, { align: 'center', size: 'headline1' }, e),
                  t ? g.a.createElement(x.b, { align: 'center', color: 'gray700', style: P.a.helpText }, t) : null,
                )
              }),
              p()(l()(e), '_renderUseAge', function () {
                var t = e.props.personalizationPreferences,
                  a = t && t.age_preferences && t.age_preferences.use_age_for_personalization
                return g.a.createElement(T.a, {
                  checked: !a,
                  key: 'use_age_for_personalization',
                  label: Y,
                  name: 'use_age_for_personalization',
                  onChange: e._handleBooleanChanged,
                })
              }),
              p()(l()(e), '_handleBooleanChanged', function (t, a) {
                var n = e.props,
                  r = n.createLocalApiErrorHandler
                ;(0, n.updateSettings)(p()({}, t, !a)).catch(r())
              }),
              e
            )
          }
          return (
            o()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.isLoggedIn = !!this.context.loggedInUserId
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    a = e.location
                  return g.a.createElement(
                    A.a,
                    null,
                    g.a.createElement(
                      D.a,
                      { location: a, title: N },
                      g.a.createElement(
                        I.a,
                        null,
                        g.a.createElement(
                          C.a,
                          { style: [P.a.infoItem, P.a.bottomBorder] },
                          g.a.createElement(x.b, { color: 'gray700' }, this.isLoggedIn ? M : H),
                        ),
                        g.a.createElement(w.a, { fetch: this._combinedFetches, fetchStatus: t, render: this._render }),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component)
      p()(z, 'contextType', L.a)
      t.default = S(z)
    },
    vkTF: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('ERkP'),
        r = a.n(n),
        c = a('v6aA'),
        o = a('xCYy'),
        i = a('3XMw'),
        l = a.n(i),
        s = a('yoO3'),
        d = a('7JQg'),
        u = a('7FtF'),
        f = a('MWbm'),
        m = a('mw9i'),
        p = a('csss'),
        h = a('rHpw'),
        g = l.a.b7fde2b8,
        E = l.a.i5f7b6b8,
        b = l.a.i6b3f59a,
        _ = l.a.g1aced04,
        y = l.a.j9d10268,
        v = l.a.gbde3534,
        S = l.a.gee8110d,
        I = { page: 'settings', section: 'transparency' },
        A = h.a.create(function (e) {
          return {
            backgroundRoot: { flexGrow: 1, backgroundColor: e.colors.gray50 },
            contentRoot: { backgroundColor: e.colors.cellBackground, flexGrow: 1, justifyContent: 'flex-start' },
          }
        })
      t.default = function (e) {
        var t = e.location,
          a = !!r.a.useContext(c.a).loggedInUserId
        return r.a.createElement(
          d.c,
          { namespace: I },
          r.a.createElement(
            s.a,
            null,
            r.a.createElement(
              u.a,
              { location: t, title: g },
              r.a.createElement(
                o.a,
                null,
                r.a.createElement(
                  f.a,
                  { style: A.backgroundRoot },
                  r.a.createElement(
                    m.a,
                    { style: A.contentRoot },
                    r.a.createElement(p.a, { label: E, link: '/settings/your_twitter_data/account' }),
                    a
                      ? r.a.createElement(p.a, { label: b, link: '/settings/your_twitter_data/account_history' })
                      : null,
                    r.a.createElement(p.a, { label: _, link: '/settings/your_twitter_data/devices' }),
                    a
                      ? r.a.createElement(p.a, { label: y, link: '/settings/your_twitter_data/account_activity' })
                      : null,
                    r.a.createElement(p.a, { label: v, link: '/settings/your_twitter_data/ads' }),
                    r.a.createElement(p.a, {
                      label: S,
                      link: a ? '/settings/download_your_data' : '/settings/your_twitter_data/request_data',
                    }),
                  ),
                ),
              ),
            ),
          ),
        )
      }
    },
    xCYy: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return b
      })
      var n = a('ERkP'),
        r = a.n(n),
        c = a('v6aA'),
        o = a('mrHL'),
        i = a('3XMw'),
        l = a.n(i),
        s = a('cnVF'),
        d = a('RqPI'),
        u = a('k89r'),
        f = a('yUQf'),
        m = a('q9Zt'),
        p = a('t62R'),
        h = l.a.ffeb836a,
        g = l.a.f2fb9746
      function E() {
        var e = Object(u.a)()
        return (
          r.a.useEffect(
            function () {
              e.scribe({ element: 'error_page', action: 'show' })
            },
            [e],
          ),
          r.a.createElement(m.a, { title: h }, r.a.createElement(p.b, null, g))
        )
      }
      function b(e) {
        var t = r.a.useContext(c.a).featureSwitches,
          a = Object(f.a)(d.m),
          n = Object(o.b)(s.u, t)
        return a || n ? e.children : r.a.createElement(E, null)
      }
    },
  },
])
//# sourceMappingURL=WIPED
