;(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    2927: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'NotMyAccountScreen', function () {
          return U
        })
      var n = a('VrFO'),
        r = a.n(n),
        c = a('Y9Ll'),
        s = a.n(c),
        o = a('1Pcy'),
        i = a.n(o),
        l = a('5Yy7'),
        u = a.n(l),
        m = a('2VqO'),
        d = a.n(m),
        h = a('KEM+'),
        f = a.n(h),
        p = (a('KqXw'), a('WNMA'), a('TJCb'), a('7x/C'), a('DZ+c'), a('ERkP')),
        E = a.n(p),
        A = a('k49u'),
        b = a('rxPX'),
        N = a('0KEI'),
        _ = a('oEOe'),
        g = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(_.d)(t, { params: e, request: r.Account.disassociateAccount })('DISASSOCIATE_ACCOUNT')
          }
        },
        v = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(_.d)(t, { params: e, request: r.Account.getMaskedData })('GET_MASKED_DATA')
          }
        },
        M = Object(b.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(N.createLocalApiErrorHandlerWithContextFactory)(
              'NOT_MY_ACCOUNT_CONTEXT',
            ),
            disassociateAccount: g,
            getMaskedData: v,
          }
        }),
        y = a('jHSc'),
        w = a('0zXz'),
        T = a('MWbm'),
        C = a('t62R'),
        S = a('rHpw'),
        k = a('cmUU'),
        H = a('3XMw'),
        O = a.n(H),
        F = E.a.createElement(C.b, { color: 'gray700', weight: 'bold' }),
        I = O.a.f7865ab5,
        j = O.a.a35248e3,
        D = O.a.f794a67b,
        L = O.a.j79c0ff7,
        q = O.a.j24c37b2,
        x = E.a.createElement(O.a.I18NFormatMessage, { $i18n: 'a1c4702f' }, E.a.cloneElement(F, null, O.a.c97a594b)),
        X = E.a.createElement(
          O.a.I18NFormatMessage,
          { $i18n: 'g9aa2a63' },
          E.a.createElement(
            C.b,
            {
              link: 'https://help.twitter.com/managing-your-account/received-a-confirmation-email-thats-not-for-my-account',
            },
            O.a.ee54f475,
          ),
        ),
        $ = E.a.createElement(
          E.a.Fragment,
          null,
          E.a.createElement(T.a, { style: { paddingBottom: S.a.theme.spaces.space4 } }, x),
          X,
        ),
        K = O.a.fb46383b,
        P = O.a.a6b9e23b,
        U = (function (e) {
          u()(a, e)
          var t = d()(a)
          function a(e) {
            var n
            return (
              r()(this, a),
              (n = t.call(this, e)),
              f()(i()(n), '_renderHeader', w.a),
              f()(i()(n), '_handleErrors', function (e) {
                var t,
                  a = n.props.createLocalApiErrorHandler,
                  r = n.state.screenName
                a(
                  ((t = {}),
                  f()(t, A.a.ClientNotPermitted, { toast: { text: K } }),
                  f()(t, A.a.InvalidEmailAddress, { toast: { text: P({ screenName: r }) } }),
                  f()(t, 'showToast', !0),
                  t),
                )(e),
                  n._redirectToHome()
              }),
              f()(i()(n), '_handleSubmit', function () {
                var e = n.props.disassociateAccount,
                  t = n.state.screenName
                t &&
                  n._secret &&
                  e({ screenName: t, secret: n._secret })
                    .then(function () {
                      n.setState({ success: !0 })
                    })
                    .catch(n._handleErrors)
              }),
              f()(i()(n), '_redirectToHome', function () {
                n.props.history.push('/')
              }),
              (n._secret = e.match.params.emailLinkSecret),
              (n.state = { emailAddress: '', screenName: '', success: !1 }),
              n
            )
          }
          return (
            s()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.getMaskedData,
                    n = t.location,
                    r = t.match.params.screenName,
                    c = n.query.ut && n.query.ut.toString()
                  this._secret &&
                    r &&
                    a({ secret: this._secret, user: r, ut: c })
                      .then(function (t) {
                        e.setState({
                          emailAddress: null == t ? void 0 : t.emailAddress,
                          screenName: null == t ? void 0 : t.screenName,
                          success: !(null == t || !t.detached),
                        })
                      })
                      .catch(this._handleErrors)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.emailAddress,
                    a = e.screenName,
                    n = e.success
                  if (!t || !a) return null
                  var r = n ? L({ emailAddress: t }) : I,
                    c = n
                      ? (function (e, t) {
                          return E.a.createElement(
                            O.a.I18NFormatMessage,
                            { $i18n: 'hf714442' },
                            E.a.cloneElement(F, null, O.a.da9fdc87({ emailAddress: t })),
                            E.a.cloneElement(F, null, O.a.e851165f({ screenName: e })),
                          )
                        })(a, t)
                      : (function (e, t) {
                          return E.a.createElement(
                            O.a.I18NFormatMessage,
                            { $i18n: 'j1958650' },
                            E.a.cloneElement(F, null, O.a.a2b8656b({ screenName: e })),
                            E.a.cloneElement(F, null, O.a.gef8c0a9({ emailAddress: t })),
                          )
                        })(a, t),
                    s = n ? q : j,
                    o = n ? void 0 : D,
                    i = n ? this._redirectToHome : this._handleSubmit,
                    l = n ? void 0 : this._redirectToHome,
                    u = n
                      ? $
                      : (function (e) {
                          return E.a.createElement(
                            O.a.I18NFormatMessage,
                            { $i18n: 'c1567ae1' },
                            E.a.cloneElement(F, null, O.a.f3604c48({ screenName: e })),
                            E.a.createElement(
                              C.b,
                              { link: 'https://twitter.com/settings/email_notifications' },
                              O.a.d7572079,
                            ),
                          )
                        })(a)
                  return E.a.createElement(
                    y.b,
                    { renderHeader: this._renderHeader },
                    E.a.createElement(k.a, {
                      actionLabel: s,
                      footer: u,
                      headline: r,
                      onAction: i,
                      onClose: i,
                      onSecondaryAction: l,
                      secondaryActionLabel: o,
                      subtext: c,
                      withCloseButton: !1,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(E.a.Component),
        J = M(U)
      t.default = J
    },
  },
])
//# sourceMappingURL=WIPED
