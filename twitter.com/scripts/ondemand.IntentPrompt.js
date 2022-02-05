;(window.webpackJsonp = window.webpackJsonp || []).push([
  [212],
  {
    '57t6': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'IntentPrompt', function () {
          return Re
        })
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o,
        r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        s = n('1Pcy'),
        l = n.n(s),
        u = n('5Yy7'),
        d = n.n(u),
        p = n('N+ot'),
        f = n.n(p),
        m = n('AuHH'),
        h = n.n(m),
        b = n('KEM+'),
        y = n.n(b),
        g = (n('2G9S'), n('1t7P'), n('jQ/y'), n('ERkP')),
        _ = n.n(g),
        w = n('eb3s'),
        v = (n('LJOr'), n('KqXw'), n('1YZw')),
        k = n('HwrL'),
        S = n('XOJV'),
        L = n('G6rE'),
        T = n('rxPX'),
        P = n('0KEI'),
        E = n('3XMw'),
        A = n.n(E),
        C = n('XEYr'),
        I = n('iGRG'),
        O = n('vbWy'),
        x = n('rHpw'),
        R = n('PSpH'),
        F = n('pwey'),
        B = n('uCrx'),
        M = n('Hp3u'),
        j = n('yVEN'),
        D = n('jwTb'),
        H = 'follow',
        N = 'like',
        U = 'reply',
        z = 'retweet',
        X = 'tweet',
        V = ((o = {}), y()(o, N, k.a.like), y()(o, z, k.a.retweet), o),
        G = A.a.c150ba67,
        J = A.a.cfd2f35d,
        Y = A.a.f8e2163e,
        K = A.a.e919c3bc,
        W = A.a.f9f9210c,
        q = A.a.af5cd00d,
        Z = A.a.fe731015,
        Q = A.a.bac8f4c1,
        $ = {
          follow: {
            loggedIn: { heading: G, description: A.a.a36d354e, confirm: A.a.eb5f060b, cancel: J },
            loggedOut: { heading: Y, description: A.a.feccfd6d, confirm: K, secondaryAction: W },
          },
          like: {
            loggedIn: { heading: G, description: A.a.bb823968, confirm: Z, cancel: J },
            loggedInMisinfo: { heading: A.a.a3c87901, description: A.a.j8eff20a, confirm: A.a.af5cd00d, cancel: Z },
            loggedOut: { heading: Y, description: A.a.i171a982, confirm: K, secondaryAction: W },
          },
          reply: { loggedOut: { heading: Y, description: A.a.bdbebf63, confirm: K, secondaryAction: A.a.a565833d } },
          retweet: {
            loggedIn: { heading: G, description: A.a.fa067de6, confirm: Q, cancel: J },
            loggedInMisinfo: { heading: A.a.fdfe7016, description: A.a.ce6df39e, confirm: q, cancel: Q },
            loggedOut: { heading: Y, description: A.a.h126d003, confirm: K, secondaryAction: W },
          },
          tweet: { loggedOut: { heading: Y, description: A.a.had58d0f, confirm: K, secondaryAction: A.a.a565833d } },
        },
        ee = { follow: F.a, like: B.a, reply: M.a, retweet: j.a, tweet: D.a },
        te = x.a.create(function (e) {
          return {
            follow: { color: e.colors.primary },
            like: { color: e.colors.magenta500 },
            reply: { color: e.colors.primary },
            retweet: { color: e.colors.green500 },
            tweet: { color: e.colors.primary },
          }
        }),
        ne = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = $[e]
          return {
            icon: n ? void 0 : ee[e],
            iconStyle: n ? void 0 : te[e],
            text: t ? (n ? o.loggedInMisinfo : o.loggedIn) : o.loggedOut,
          }
        },
        oe = { follow: R.a, like: C.a, retweet: O.a, react: I.a },
        re = function (e, t) {
          return oe['like' === e && t ? 'react' : e]
        },
        ie = n('rx9x'),
        ae = function (e, t) {
          var n = t.location
          switch (n.pathname) {
            case '/intent/follow':
            case '/intent/user':
              return H
            case '/intent/like':
            case '/intent/favorite':
              return N
            case '/intent/retweet':
              return z
            case '/intent/tweet':
              return ce(n)
            default:
              return
          }
        },
        ce = function (e) {
          var t = e.query
          return t && t.in_reply_to ? U : X
        },
        se = function (e, t) {
          var n = t.location
          return ''.concat(n.pathname).concat(n.search)
        },
        le = function (e, t) {
          var n = ae(0, t),
            o = t.forwardPivotInfo
          return !!n && Object(k.b)(V[n], o)
        },
        ue = function (e, t) {
          var n = t.tweetId
          return !!n && Object(ie.a)(e, n)
        },
        de = Object(T.a)()
          .propsFromState(function () {
            return { hasMisinfoNudge: le, intentType: ae, loginReturnPath: se, misinfoNudgeActionTaken: ue }
          })
          .propsFromActions(function () {
            return {
              addToast: v.b,
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'INTENT_PROMPT_CONTAINER',
              ),
              onFollow: L.e.follow,
              onLike: S.a.like,
              onReact: S.a.react,
              onRetweet: S.a.retweet,
              setTweetMisinfoActionTaken: ie.b,
            }
          })
          .withAnalytics(),
        pe = n('6oVL'),
        fe = 'IntentLoginSheet_Login_Sheet',
        me = n('MWbm'),
        he = n('t62R'),
        be = n('pjBI'),
        ye = n('/yvb'),
        ge = n('sgih'),
        _e = n('XJCT')
      function we(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            o = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ve = A.a.d1091f50,
        ke = A.a.eab9ceb1,
        Se = A.a.hd50e063,
        Le = A.a.e919c3bc,
        Te = (function (e) {
          d()(n, e)
          var t = we(n)
          function n(e) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e)),
              y()(l()(o), '_renderHeader', function () {
                var e = o.props,
                  t = e.Icon,
                  n = e.description,
                  r = e.heading,
                  i = e.iconStyle
                return _.a.createElement(
                  me.a,
                  null,
                  _.a.createElement(
                    me.a,
                    { style: Pe.contentHeader },
                    t ? _.a.createElement(t, { style: [Pe.icon, i] }) : null,
                    r ? _.a.createElement(he.b, { size: 'headline1', weight: 'bold' }, r) : null,
                  ),
                  n ? _.a.createElement(he.b, { color: 'gray700', style: Pe.secondaryText }, n) : null,
                )
              }),
              y()(l()(o), '_renderLoginForm', function () {
                var e = o.state.autoSubmit,
                  t = o.props.loginReturnPath
                return _.a.createElement(
                  pe.a,
                  { autoSubmit: e, hideSubmitButton: !0, loginReturnPath: t },
                  _.a.createElement(_e.b, { onSubmitEditing: o._handleSubmit, style: Pe.textFieldContainer }),
                  _.a.createElement(_e.a, { onSubmitEditing: o._handleSubmit, style: Pe.textFieldContainer }),
                  o._renderLinks(),
                )
              }),
              y()(l()(o), '_renderLinks', function () {
                return o.props.showSignUpLink
                  ? _.a.createElement(be.a, null, o._renderForgotPasswordLink(), o._renderSignUpLink())
                  : o._renderForgotPasswordLink()
              }),
              y()(l()(o), '_renderForgotPasswordLink', function () {
                return _.a.createElement(
                  he.b,
                  { link: { pathname: 'https://twitter.com/account/begin_password_reset', external: !0 } },
                  ve,
                )
              }),
              y()(l()(o), '_renderSignUpLink', function () {
                return _.a.createElement(he.b, { link: '/i/flow/signup' }, ke)
              }),
              y()(l()(o), '_renderFooter', function () {
                var e = o.props,
                  t = e.onSecondaryAction,
                  n = e.secondaryActionButtonLabel,
                  r = e.submitButtonLabel
                return _.a.createElement(
                  me.a,
                  { style: Pe.footer },
                  _.a.createElement(
                    ye.a,
                    { onPress: t, size: 'medium', type: 'brandOutlined' },
                    _.a.createElement(he.b, { numberOfLines: 1 }, n),
                  ),
                  _.a.createElement(
                    ye.a,
                    { onPress: o._handleSubmit, size: 'medium', type: 'brandFilled' },
                    _.a.createElement(he.b, { numberOfLines: 1 }, r),
                  ),
                )
              }),
              y()(l()(o), '_handleSubmit', function () {
                o.props.onLoginSubmission && o.props.onLoginSubmission(), o.setState({ autoSubmit: !0 })
              }),
              (o.state = { autoSubmit: !1 }),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.onImpression && this.props.onImpression()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.onMaskClick
                  return _.a.createElement(
                    ge.a,
                    { onMaskClick: e, type: 'bottom', withMask: !0 },
                    _.a.createElement(
                      me.a,
                      { style: Pe.sheetContent, testID: fe },
                      _.a.createElement(me.a, { style: Pe.content }, this._renderHeader(), this._renderLoginForm()),
                      this._renderFooter(),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      y()(Te, 'defaultProps', { secondaryActionButtonLabel: Se, submitButtonLabel: Le })
      var Pe = x.a.create(function (e) {
          return {
            content: { padding: e.spaces.space20 },
            contentHeader: { flexDirection: 'row' },
            icon: { paddingRight: e.spaces.space12, fontSize: e.spaces.space20 },
            footer: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: e.spaces.space16,
              paddingHorizontal: e.spaces.space20,
            },
            secondaryText: { paddingTop: e.spaces.space12 },
            sheetContent: { justifyContent: 'space-between' },
            textFieldContainer: { paddingHorizontal: 0, width: '100%' },
            links: { marginTop: e.spaces.space12 },
          }
        }),
        Ee = Te,
        Ae = n('v6aA')
      function Ce(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ce(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ce(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Oe(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            o = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return f()(this, n)
        }
      }
      var xe = A.a.e29c651e,
        Re = (function (e) {
          d()(n, e)
          var t = Oe(n)
          function n() {
            var e
            i()(this, n)
            for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(l()(e), 'state', { showPrompt: !1 }),
              y()(l()(e), '_isComposeIntentType', function () {
                var t = e.props.intentType
                return t === U || t === X
              }),
              y()(l()(e), '_handleSecondaryAction', function () {
                e.props.intentType && e._isComposeIntentType() ? e._handleSignUp() : e._handleCancel()
              }),
              y()(l()(e), '_handleSignUp', function () {
                var t = e.props.history
                e.setState({ showPrompt: !1 }), e._scribeAction('signup'), t.push('/i/flow/signup')
              }),
              y()(l()(e), '_handleCancel', function () {
                var t = e.props,
                  n = t.hasMisinfoNudge,
                  o = t.misinfoNudgeActionTaken
                e.setState({ showPrompt: !1 }),
                  e._scribeAction('dismiss'),
                  n && e._scribeNudgeAction({ element: o ? 'after_read' : void 0, action: 'cancel' })
              }),
              y()(l()(e), '_handleLoginSubmission', function () {
                e._scribeAction('login')
              }),
              y()(l()(e), '_maybeGetTweetId', function () {
                var t = e.props,
                  n = t.intentType,
                  o = t.tweetId
                return n && (n === N || n === z) && o ? o : void 0
              }),
              y()(l()(e), '_maybeGetUserId', function () {
                var t = e.props,
                  n = t.intentType,
                  o = t.userId
                return n && n === H && o ? o : void 0
              }),
              y()(l()(e), '_handleIntentAction', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  o = t.hasMisinfoNudge,
                  r = t.intentType,
                  i = t.misinfoNudgeActionTaken,
                  a = e.context.featureSwitches,
                  c = e._maybeGetTweetId() || e._maybeGetUserId(),
                  s = e._getIntentAction(),
                  l = a.isTrue('responsive_web_reactions_enabled')
                if (
                  r &&
                  c &&
                  s &&
                  (s(c, { promotedContent: void 0 }).catch(function (e) {
                    n(re(r, l))(e)
                  }),
                  e._scribeAction(r),
                  o)
                ) {
                  var u = ''.concat(V[r]).concat(i ? '_after_read' : '')
                  e._scribeNudgeAction({ element: u, action: 'click' })
                }
                e.setState({ showPrompt: !1 })
              }),
              y()(l()(e), '_handleMisinfoAction', function () {
                var t = e.props,
                  n = t.addToast,
                  o = t.misinfoNudgeActionTaken,
                  r = t.setTweetMisinfoActionTaken,
                  i = t.tweetId
                e._scribeNudgeAction({ element: 'read_article', action: 'click' }), i && !o && (r(i), n({ text: xe }))
              }),
              y()(l()(e), '_scribeNudgeAction', function (t) {
                var n = t.action,
                  o = t.element
                e.props.analytics.scribe({ component: 'soft_intervention_nudge', element: o, action: n })
              }),
              y()(l()(e), '_handleMaskClick', function () {
                e.props.intentType && !e._isComposeIntentType() && e._handleCancel()
              }),
              y()(l()(e), '_getIntentAction', function () {
                var t = e.props,
                  n = t.intentType,
                  o = t.onFollow,
                  r = t.onLike,
                  i = t.onReact,
                  a = t.onRetweet,
                  c = e.context.featureSwitches,
                  s = c.isTrue('responsive_web_reactions_enabled') || c.isTrue('responsive_web_reactions_api_test')
                switch (n) {
                  case H:
                    return o
                  case N:
                    return s
                      ? function (e, t) {
                          return i(e, Ie(Ie({}, t), {}, { reactionType: 'Like' }))
                        }
                      : r
                  case z:
                    return a
                  default:
                    return
                }
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.hasMisinfoNudge,
                    n = e.intentType,
                    o = e.misinfoNudgeActionTaken
                  n &&
                    (this.setState({ showPrompt: !0 }),
                    this._scribeAction('open'),
                    t && this._scribeNudgeAction({ element: o ? 'after_read' : void 0, action: 'impression' }))
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.state.showPrompt ? this._renderPrompt() : null
                },
              },
              {
                key: '_renderPrompt',
                value: function () {
                  return this.context.loggedInUserId ? this._renderLoggedInPrompt() : this._renderLoggedOutPrompt()
                },
              },
              {
                key: '_renderLoggedOutPrompt',
                value: function () {
                  var e = this.props,
                    t = e.intentType,
                    n = e.loginReturnPath
                  if (t) {
                    var o = ne(t, !1),
                      r = o.icon,
                      i = o.iconStyle,
                      a = o.text
                    return _.a.createElement(Ee, {
                      Icon: r,
                      description: a.description,
                      heading: a.heading,
                      iconStyle: i,
                      loginReturnPath: n,
                      onLoginSubmission: this._handleLoginSubmission,
                      onMaskClick: this._handleMaskClick,
                      onSecondaryAction: this._handleSecondaryAction,
                      secondaryActionButtonLabel: a.secondaryAction,
                      showSignUpLink: !this._isComposeIntentType(),
                      submitButtonLabel: a.confirm,
                    })
                  }
                  return null
                },
              },
              {
                key: '_renderLoggedInPrompt',
                value: function () {
                  var e = this.props,
                    t = e.forwardPivotInfo,
                    n = e.hasMisinfoNudge,
                    o = e.intentType
                  if (o && !this._isComposeIntentType()) {
                    var r = ne(o, !0, n),
                      i = r.icon,
                      a = r.iconStyle,
                      c = r.text
                    return _.a.createElement(w.a, {
                      Icon: i,
                      cancelButtonLabel: c.cancel,
                      confirmButtonLabel: c.confirm,
                      confirmButtonLink: n ? (null == t ? void 0 : t.landingUrl.url) : void 0,
                      headline: c.heading,
                      iconStyle: a,
                      onCancel: n ? this._handleIntentAction : this._handleCancel,
                      onConfirm: n ? this._handleMisinfoAction : this._handleIntentAction,
                      onMaskClick: this._handleCancel,
                      text: c.description,
                      withCancelButton: !0,
                    })
                  }
                  return null
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  var t = this.props,
                    n = t.analytics,
                    o = t.intentType,
                    r = this.context.loggedInUserId,
                    i = o
                      ? {
                          component: ''.concat(o, '_intent'),
                          element: r ? 'confirmation_prompt' : 'login_prompt',
                          action: e,
                        }
                      : { action: e }
                  n.scribe(i)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      y()(Re, 'contextType', Ae.a)
      var Fe = de(Re)
      t.default = Fe
    },
    '6oVL': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var o = n('ddV6'),
        r = n.n(o),
        i = n('VrFO'),
        a = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        h = n('AuHH'),
        b = n.n(h),
        y = n('KEM+'),
        g = n.n(y),
        _ = (n('2G9S'), n('MvUL'), n('KqXw'), n('Ysgh'), n('ERkP')),
        w = n.n(_),
        v = n('3XMw'),
        k = n.n(v),
        S = n('cnVF'),
        L = n('Ukpf'),
        T = n('BTou'),
        P = n('mrHL'),
        E = 'LoginForm_Login_Button',
        A = n('fEA7'),
        C = n.n(A),
        I = n('MWbm'),
        O = n('Irs7'),
        x = n('v6aA'),
        R = n('/yvb'),
        F = n('rHpw')
      function B(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            o = b()(e)
          if (t) {
            var r = b()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return m()(this, n)
        }
      }
      var M = k.a.e919c3bc,
        j = (function (e) {
          p()(n, e)
          var t = B(n)
          function n() {
            var e
            a()(this, n)
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(u()(e), '_mobileLoginToken', C.a.v1().replace(/-/g, '')),
              g()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  o = t.onSubmit
                if ((n.scribe({ action: 'submit' }), T.a.flushHTMLCache(), e._setLoginCookie(), o))
                  return o(e._form.elements), !1
              }),
              g()(u()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              g()(u()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              g()(u()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(P.e)(S.q, e._mobileLoginToken, {
                    featureSwitches: e.context.featureSwitches,
                    cookieOptions: { domain: void 0, expires: t },
                  })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.autoSubmit && !e.autoSubmit && this._handleSubmitButtonClick()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  L.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.formActionUrl,
                    o = e.hideSubmitButton,
                    i = e.horizontalLayout,
                    a = e.loginReturnPath,
                    c = e.submitButtonDisabled,
                    s = e.submitButtonLabel,
                    l = e.submitButtonSize,
                    u = e.submitButtonStyle,
                    d = e.submitButtonType,
                    p = 'string' == typeof a ? a.split('?') : [],
                    f = r()(p, 2),
                    m = f[0],
                    h = f[1],
                    b = encodeURI(m || '/'),
                    y = h ? '?'.concat(h) : '',
                    g = ''.concat('').concat(b).concat(y),
                    _ = w.a.createElement(
                      I.a,
                      { style: i && D.horizontalFields },
                      w.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: g }),
                      w.a.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      w.a.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      w.a.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      w.a.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      o
                        ? null
                        : w.a.createElement(
                            I.a,
                            { style: i && D.loginButtonContainer },
                            w.a.createElement(
                              R.a,
                              {
                                disabled: c,
                                onPress: this._handleSubmitButtonClick,
                                size: l,
                                style: u,
                                testID: E,
                                type: d,
                              },
                              s,
                            ),
                          ),
                    )
                  return w.a.createElement(
                    I.a,
                    { style: D.loginForm },
                    w.a.createElement('form', {
                      action: n,
                      children: _,
                      method: 'post',
                      noValidate: !0,
                      onSubmit: this._handleSubmit,
                      ref: this._setFormRef,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      g()(j, 'contextType', x.a),
        g()(j, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: M,
          submitButtonType: 'brandFilled',
        })
      var D = F.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(O.a)(j, { element: 'inline_login_form' })
    },
    XJCT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      }),
        n.d(t, 'b', function () {
          return E
        })
      var o = n('97Jx'),
        r = n.n(o),
        i = n('m3Bd'),
        a = n.n(i),
        c = n('ERkP'),
        s = n.n(c),
        l = n('t62R'),
        u = n('3XMw'),
        d = n.n(u),
        p = (n('yH/f'), n('ho0z'), n('p+r5')),
        f = Object.freeze({ password: 'password', username: 'username_or_email' }),
        m = function (e) {
          var t = e.name,
            n = a()(e, ['name'])
          return s.a.createElement(
            p.a,
            r()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        h = d.a.d1091f50,
        b = s.a.createElement(
          l.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          h,
        ),
        y = d.a.dec3c9b8,
        g = function (e) {
          var t = e.helperText,
            n = e.label,
            o = e.withForgotPasswordLink,
            i = a()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return s.a.createElement(
            m,
            r()({}, i, { helperText: o ? b : t, label: n || y, name: f.password, type: 'password' }),
          )
        }
      g.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var _ = g,
        w = n('v6aA'),
        v = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        k = d.a.e1ec8c17,
        S = d.a.d0a750f2,
        L = d.a.e2dd29b5,
        T = d.a.jb4eb245,
        P = function (e) {
          var t = e.autoFocus,
            n = e.label,
            o = e.withEmailDisabled,
            i = e.withPhoneDisabled,
            c = e.withUsernameDisabled,
            l = a()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            u = s.a.useContext(w.a).featureSwitches,
            d = k
          return (
            c ? (d = S) : i ? (d = T) : o && (d = L),
            s.a.createElement(m, r()({}, l, { autoFocus: t, label: n || d, name: f.username, type: v(u) }))
          )
        }
      P.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var E = P
    },
  },
])
//# sourceMappingURL=WIPED
