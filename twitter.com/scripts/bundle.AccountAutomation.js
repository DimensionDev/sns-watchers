;(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    '3Ohe': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        o = n.n(a),
        r = n('Y9Ll'),
        c = n.n(r),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        h = n.n(d),
        b = n('KEM+'),
        m = n.n(b),
        p = (n('2G9S'), n('uFXj'), n('ERkP')),
        f = n.n(p),
        g = n('t62R'),
        E = n('rHpw'),
        C = n('MWbm'),
        _ = (function (e) {
          u()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++) r[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              m()(l()(e), '_renderSubtextAndLink', function () {
                var t = e.props.subtext
                return f.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
              }),
              m()(l()(e), '_renderLearnMore', function () {
                var t = e.props,
                  n = t.learnMoreLabel,
                  a = t.learnMoreLink
                return a && n ? f.a.createElement(g.b, { link: a, size: 'subtext2' }, n) : null
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.label,
                    n = e.learnMoreLabel,
                    a = e.learnMoreLink,
                    o = e.subtext,
                    r = e.withBottomBorder
                  return f.a.createElement(
                    C.a,
                    { style: [y.root, r && y.bottomBorder] },
                    f.a.createElement(g.b, null, t),
                    o
                      ? n && a
                        ? this._renderSubtextAndLink()
                        : f.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, o)
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      m()(_, 'defaultProps', { withBottomBorder: !0 })
      var y = E.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          bottomBorder: {
            borderBottomWidth: e.borderWidths.small,
            borderBottomStyle: 'solid',
            borderBottomColor: e.colors.borderColor,
          },
        }
      })
      t.a = _
    },
    '7FtF': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        o = n.n(a),
        r = n('Y9Ll'),
        c = n.n(r),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        h = n.n(d),
        b = n('KEM+'),
        m = n.n(b),
        p = (n('2G9S'), n('ERkP')),
        f = n.n(p),
        g = n('P1r1'),
        E = n('G6rE'),
        C = n('rxPX'),
        _ = n('0KEI'),
        y = Object(C.a)()
          .propsFromState(function () {
            return { fetchStatus: g.n, loggedInUser: E.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: g.f,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        S = n('v//M'),
        v = n('3XMw'),
        w = n.n(v),
        L = n('M2mT'),
        A = 'settingsDetailSave',
        B = n('mw9i'),
        O = n('0yYu'),
        T = n('/yvb'),
        D = n('rHpw'),
        k = w.a.i2209530,
        F = (function (e) {
          u()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++) r[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              m()(l()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return f.a.createElement(S.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              m()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.onSubmit,
                  o = t.submitDisabled,
                  r = t.submitLabel,
                  c = t.submitType,
                  i = t.withMarginBottom
                return f.a.createElement(
                  B.a,
                  { style: [U.contentRoot, i && U.withMarginBottom] },
                  n,
                  a
                    ? f.a.createElement(
                        f.a.Fragment,
                        null,
                        f.a.createElement(O.a, null),
                        f.a.createElement(
                          B.a,
                          { style: U.buttonContainer },
                          f.a.createElement(T.a, { disabled: o, onPress: a, style: U.button, testID: A, type: c }, r),
                        ),
                      )
                    : null,
                )
              }),
              m()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSettingsIfNeeded)().catch(n())
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    t = e.location,
                    n = e.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return t && t.pathname === n ? '/' : n
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUser,
                    n = e.onBackClick,
                    a = e.rightControl,
                    o = e.screenType,
                    r = e.secondaryBar,
                    c = e.title,
                    i = e.withBottomBorder,
                    l = this.getBackLocation(),
                    s = t ? '@'.concat(t.screen_name) : void 0
                  return f.a.createElement(
                    L.a,
                    {
                      backLocation: l,
                      onBackClick: n,
                      rightControl: a,
                      screenType: o,
                      secondaryBar: r,
                      showSubtitleOnWideDetail: !1,
                      subtitle: s,
                      title: c,
                      withBottomBorder: i,
                    },
                    t ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      m()(F, 'defaultProps', { submitLabel: k, submitType: 'brandFilled', withMarginBottom: !0 })
      var U = D.a.create(function (e) {
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
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(D.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = y(F)
    },
    Fcaw: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return f
      }),
        n.d(t, 'e', function () {
          return g
        }),
        n.d(t, 'c', function () {
          return E
        }),
        n.d(t, 'b', function () {
          return C
        }),
        n.d(t, 'a', function () {
          return _
        })
      var a = n('KEM+'),
        o = n.n(a),
        r = n('yiKp'),
        c = n.n(r),
        i = (n('yH/f'), n('oEOe')),
        l = n('iD2S'),
        s = n.n(l),
        u = n('kGix'),
        d = n('Ssj5'),
        h = 'accountTaxonomy',
        b =
          ('rweb/'.concat(h),
          s()({ account_label: { disableStatus: u.a.NONE, fetchStatus: u.a.NONE, managed_label: void 0 } })),
        m = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE',
        }),
        p = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE',
        })
      d.a.register(
        o()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return c()(
                c()({}, e),
                {},
                { account_label: c()(c()({}, e.account_label), {}, { fetchStatus: u.a.LOADING }) },
              )
            case m.SUCCESS:
              var n, a, o
              return c()(
                c()({}, e),
                {},
                {
                  account_label: c()(
                    c()(
                      {},
                      null == t ||
                        null === (n = t.payload) ||
                        void 0 === n ||
                        null === (a = n.user) ||
                        void 0 === a ||
                        null === (o = a.result) ||
                        void 0 === o
                        ? void 0
                        : o.account_label,
                    ),
                    {},
                    { fetchStatus: u.a.LOADED },
                  ),
                },
              )
            case m.FAILURE:
              return c()(
                c()({}, e),
                {},
                { account_label: c()(c()({}, e.account_label), {}, { fetchStatus: u.a.FAILED }) },
              )
            case p.REQUEST:
              return c()(
                c()({}, e),
                {},
                { account_label: c()(c()({}, e.account_label), {}, { disableStatus: u.a.LOADING }) },
              )
            case p.SUCCESS:
              return c()(
                c()({}, e),
                {},
                { account_label: { managed_label: void 0, fetchStatus: u.a.LOADED, disableStatus: u.a.LOADED } },
              )
            case p.FAILURE:
              return c()(
                c()({}, e),
                {},
                { account_label: c()(c()({}, e.account_label), {}, { disableStatus: u.a.FAILED }) },
              )
            default:
              return e
          }
        }),
      )
      var f = function (e) {
          var t, n, a
          return null === (t = e.accountTaxonomy) ||
            void 0 === t ||
            null === (n = t.account_label) ||
            void 0 === n ||
            null === (a = n.managed_label) ||
            void 0 === a
            ? void 0
            : a.owner_screen_name
        },
        g = function (e) {
          var t, n
          return (
            (null === (t = e.accountTaxonomy) || void 0 === t || null === (n = t.account_label) || void 0 === n
              ? void 0
              : n.fetchStatus) || u.a.NONE
          )
        },
        E = function (e) {
          var t, n
          return (
            (null === (t = e.accountTaxonomy) || void 0 === t || null === (n = t.account_label) || void 0 === n
              ? void 0
              : n.disableStatus) || u.a.NONE
          )
        },
        C = function (e) {
          return function (t, n, a) {
            var o = a.api
            return Object(i.b)(t, { request: o.AccountTaxonomy.fetchUserAccountLabel, params: { userId: e } })({
              actionTypes: m,
              context: 'FETCH_USER_ACCOUNT_LABEL',
            })
          }
        },
        _ = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(i.b)(e, { request: a.AccountTaxonomy.disableUserAccountLabel, params: {} })({
              actionTypes: p,
              context: 'DISABLE_USER_ACCOUNT_LABEL',
            })
          }
        }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        o = n.n(a),
        r = n('VrFO'),
        c = n.n(r),
        i = n('Y9Ll'),
        l = n.n(i),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        h = n.n(d),
        b = n('2VqO'),
        m = n.n(b),
        p = n('KEM+'),
        f = n.n(p),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        E = n('ERkP'),
        C = n.n(E),
        _ = n('HPNB'),
        y = n('VAZu'),
        S = n('wiP2'),
        v = n('Es6L'),
        w = n('yiKp'),
        L = n.n(w),
        A = n('rHpw'),
        B = A.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: L()(L()({}, A.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        O = n('MWbm'),
        T = n('yw4N'),
        D = n('TnY3'),
        k = n('cHvH'),
        F = n('3xLC'),
        U = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        x = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? C.a.createElement(
                      O.a,
                      { style: B.fill },
                      C.a.createElement(
                        T.a,
                        { style: B.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return C.a.createElement(k.a, null, function (t) {
                    var n = t.windowWidth
                    return _.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      o()(e, U))
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    Object(v.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : C.a.createElement(S.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var t = e.isTwoColumnLayout,
                    n = this.props,
                    a = n.SideNavButton,
                    o = n.TabBar,
                    r = n.TeamsSwitcher,
                    c = n.backLocation,
                    i = n.documentTitle,
                    l = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    h = n.onBackClick,
                    b = n.rightControl,
                    m = n.screenType,
                    p = n.searchBoxOptions,
                    f = n.secondaryBar,
                    E = n.showSubtitleOnRoot,
                    _ = n.showSubtitleOnWideDetail,
                    v = n.subtitle,
                    w = n.title,
                    L = n.titleIconCell,
                    A = n.titleIconCellSize,
                    T = n.withDetailOpen,
                    D = n.withSearchBox,
                    k = n.withTweetButton,
                    F = 'root' === m,
                    U = 'secondaryRoot' === m,
                    x = 'primaryDetail' === m,
                    I = (x && _) || (F && E),
                    R = F || (x && t),
                    M = F ? g.c : x ? g.a : void 0,
                    N = C.a.createElement(
                      O.a,
                      { style: B.appBarContainer },
                      C.a.createElement(y.a, {
                        backLocation: c,
                        fixed: !1,
                        hideBackButton: R,
                        history: s,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: h,
                        rightControl: b,
                        secondaryBar: f,
                        subtitle: I ? v : void 0,
                        title: w,
                        titleDomId: M,
                        titleIconCell: L,
                        titleIconCellSize: A,
                      }),
                    ),
                    P =
                      F || (U && T)
                        ? null
                        : C.a.createElement(S.a.Configure, {
                            SideNavButton: a,
                            TabBar: o,
                            TeamsSwitcher: r,
                            backLocation: c,
                            documentTitle: i,
                            headerless: l,
                            middleControl: d,
                            onBackClick: h,
                            rightControl: b,
                            searchBoxOptions: p,
                            subtitle: v,
                            title: w,
                            withSearchBox: D,
                            withTweetButton: k,
                          })
                  return C.a.createElement(C.a.Fragment, null, P, N)
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      f()(x, 'contextType', F.a),
        f()(x, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(D.a)(x)
    },
    iD2S: function (e, t) {
      e.exports = function e(t) {
        return (
          Object.freeze(t),
          Object.getOwnPropertyNames(t).forEach(function (n) {
            !t.hasOwnProperty(n) ||
              null === t[n] ||
              ('object' != typeof t[n] && 'function' != typeof t[n]) ||
              Object.isFrozen(t[n]) ||
              e(t[n])
          }),
          t
        )
      }
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        o = n.n(a),
        r = n('m3Bd'),
        c = n.n(r),
        i = n('ERkP'),
        l = n.n(i),
        s = n('t62R'),
        u = n('I4+6'),
        d = n('cm6r'),
        h = n('rHpw'),
        b = n('MWbm'),
        m = ['align', 'color', 'label'],
        p = h.a.create(function (e) {
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
          n = void 0 === t ? 'center' : t,
          a = e.color,
          r = e.label,
          i = c()(e, m),
          f = u.a.generate({
            backgroundColor: h.a.theme.colors.transparent,
            color: h.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          b.a,
          { style: p.container },
          l.a.createElement(
            d.a,
            o()({}, i, { interactiveStyles: f, style: p.root }),
            l.a.createElement(s.b, { align: n, color: a }, r),
          ),
        )
      }
    },
    rYEW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'changeManagingAccountLabel', function () {
          return K
        }),
        n.d(t, 'setManagingAccountLabel', function () {
          return q
        }),
        n.d(t, 'AccountAutomationScreen', function () {
          return le
        })
      var a = n('yiKp'),
        o = n.n(a),
        r = n('VrFO'),
        c = n.n(r),
        i = n('Y9Ll'),
        l = n.n(i),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        h = n.n(d),
        b = n('2VqO'),
        m = n.n(b),
        p = n('KEM+'),
        f = n.n(p),
        g = n('ERkP'),
        E = n.n(g),
        C = n('Fcaw'),
        _ = n('G6rE'),
        y = n('rxPX'),
        S = Object(y.a)()
          .propsFromState(function () {
            return {
              managingAccount: C.d,
              managingAccountFetchStatus: C.e,
              disableAccountLabelStatus: C.c,
              user: _.e.selectLoggedInUser,
            }
          })
          .propsFromActions(function () {
            return { disableUserAccountLabel: C.a, fetchUserAccountLabel: C.b }
          })
          .withAnalytics({ page: 'settings', section: 'account_automation' }),
        v = n('kGix'),
        w = n('v//M'),
        L = n('yoO3'),
        A = n('7JQg'),
        B = n('7FtF'),
        O = n('MWbm'),
        T = n('Irs7'),
        D = n('t62R'),
        k = n('4zmP'),
        F = n('csss'),
        U = n('3Ohe'),
        x = n('0yYu'),
        I = n('jtO7'),
        R = n('feu+'),
        M = n('RKmr'),
        N = n('rHpw'),
        P = n('v6aA'),
        H = n('3XMw'),
        j = n.n(H),
        V = n('Oib4'),
        z = n('WtWS'),
        W = j.a.d12d42db,
        Y = j.a.ad31b476,
        G = j.a.a2981062,
        K = j.a.aff4540e,
        q = j.a.b8b9d10f,
        Q = E.a.createElement(
          D.b,
          { color: 'gray700', size: 'subtext2' },
          E.a.createElement(
            j.a.I18NFormatMessage,
            { $i18n: 'd79b6b7b' },
            E.a.createElement(
              D.b,
              { link: 'https://help.twitter.com/using-twitter/automated-account-labels', size: 'subtext2' },
              j.a.f79acef1,
            ),
          ),
        ),
        X = j.a.e0bc51f5,
        J = j.a.i9028824,
        Z = j.a.b92190c1,
        $ = j.a.fb03b399,
        ee = j.a.bd51ddfa,
        te = { page: 'settings', section: 'account_information', component: 'automation' },
        ne = { page: 'system', section: 'message' },
        ae = j.a.e91c15f5,
        oe = j.a.df035b80,
        re = j.a.bd12cf34,
        ce = j.a.cfd2f35d,
        ie = '/i/flow/enable_automated_account',
        le = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n(e, a) {
            var o
            return (
              c()(this, n),
              (o = t.call(this, e, a)),
              f()(u()(o), '_handleHideCallout', function () {
                o.setState({ showCallout: !1 })
              }),
              f()(u()(o), '_handleShowCallout', function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                o.setState({ showCallout: !0, calloutIsError: t, calloutLabel: e })
              }),
              f()(u()(o), '_renderCallout', function () {
                var e = o.state,
                  t = e.calloutIsError,
                  n = e.calloutLabel,
                  a = t ? V.a : z.a,
                  r = t ? 'danger' : 'success'
                return E.a.createElement(
                  O.a,
                  { style: se.inlineCallout },
                  E.a.createElement(k.a, { Icon: a, headline: n || '', onClose: o._handleHideCallout, type: r }),
                )
              }),
              f()(u()(o), '_handleFetchUserAccountLabel', function () {
                var e = o.props,
                  t = e.fetchUserAccountLabel,
                  n = e.user,
                  a = null == n ? void 0 : n.id_str
                a && t(a)
              }),
              f()(u()(o), '_handleDisableUserAccountLabel', function () {
                ;(0, o.props.disableUserAccountLabel)(), o._handleToggleDisableConfirmation()
              }),
              f()(u()(o), '_handleToggleDisableConfirmation', function () {
                o.setState({ showDisableConfirmation: !o.state.showDisableConfirmation })
              }),
              f()(u()(o), '_renderUnassignedManagingAccountView', function () {
                return E.a.createElement(
                  O.a,
                  null,
                  E.a.createElement(F.a, { description: Q, label: q, link: ie }),
                  o.state.showCallout && o._renderCallout(),
                )
              }),
              f()(u()(o), '_renderAssignedManagingAccountView', function () {
                return E.a.createElement(
                  O.a,
                  null,
                  E.a.createElement(U.a, { label: G, subtext: o.props.managingAccount || '', withBottomBorder: !1 }),
                  E.a.createElement(F.a, { label: K, link: ie }),
                  o.state.showCallout && o._renderCallout(),
                  E.a.createElement(x.a, null),
                  E.a.createElement(I.a, { color: 'red500', label: X, onPress: o._handleToggleDisableConfirmation }),
                )
              }),
              f()(u()(o), '_renderDisconnectConfirmation', function () {
                return E.a.createElement(R.a, {
                  actionLabel: re,
                  graphicDisplayMode: 'none',
                  headline: ae,
                  onAction: o._handleDisableUserAccountLabel,
                  onClose: o._handleToggleDisableConfirmation,
                  onSecondaryAction: o._handleToggleDisableConfirmation,
                  secondaryActionLabel: ce,
                  subtext: oe,
                  useBrandedActionButtons: !0,
                  withCloseButton: !0,
                })
              }),
              f()(u()(o), '_render', function () {
                var e = o.props.managingAccount
                    ? o._renderAssignedManagingAccountView()
                    : o._renderUnassignedManagingAccountView(),
                  t = o.state.showDisableConfirmation
                return E.a.createElement(
                  B.a,
                  { title: W },
                  t && o._renderDisconnectConfirmation(),
                  E.a.createElement(M.a, { description: Y }),
                  e,
                )
              }),
              f()(u()(o), '_scribe', function (e) {
                o.props.analytics.scribe(e)
              }),
              (o._initialPath = o._previousPath = window.location.pathname),
              (o.state = {
                hasExitedOCF: !1,
                showCallout: !1,
                showDisableConfirmation: !1,
                calloutIsError: !1,
                calloutLabel: void 0,
              }),
              o
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchUserAccountLabel()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  this._previousPath !== location.pathname &&
                    this._initialPath === location.pathname &&
                    (this._handleFetchUserAccountLabel(), this.setState({ hasExitedOCF: !0 })),
                    (this._previousPath = location.pathname)
                  var n = this.props,
                    a = n.disableAccountLabelStatus,
                    r = n.managingAccount,
                    c = n.managingAccountFetchStatus,
                    i = e.disableAccountLabelStatus,
                    l = e.managingAccount,
                    s = e.managingAccountFetchStatus,
                    u = this.state.hasExitedOCF,
                    d = l && r !== l,
                    h = s === v.a.LOADED || c === v.a.LOADED
                  if (
                    (d &&
                      h &&
                      u &&
                      (this._handleShowCallout(Z), this._scribe(o()(o()({}, te), {}, { action: 'enabled' }))),
                    a !== i)
                  )
                    switch (i) {
                      case v.a.LOADED:
                        this._handleShowCallout($), this._scribe(o()(o()({}, te), {}, { action: 'disabled' }))
                        break
                      case v.a.FAILED:
                        this._handleShowCallout(ee, !0),
                          this._scribe(o()(o()({}, ne), {}, { element: 'automation_opt_out_error', action: 'view' }))
                    }
                  return e !== this.props || t !== this.state
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.managingAccountFetchStatus
                  return E.a.createElement(
                    A.c,
                    { namespace: te },
                    E.a.createElement(
                      L.a,
                      null,
                      E.a.createElement(w.a, {
                        accessibilityLabel: J,
                        fetchStatus: e,
                        onRequestRetry: this._handleFetchUserAccountLabel,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      f()(le, 'contextType', P.a)
      var se = N.a.create(function (e) {
        return { inlineCallout: { paddingLeft: e.spaces.space16, paddingRight: e.spaces.space16 } }
      })
      t.default = Object(T.a)(S(le))
    },
  },
])
//# sourceMappingURL=WIPED
