;(window.webpackJsonp = window.webpackJsonp || []).push([
  [209],
  {
    '57t6': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'IntentPrompt', function () {
          return xe
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
        _ = n('eb3s'),
        w = (n('LJOr'), n('KqXw'), n('1YZw')),
        v = n('HwrL'),
        k = n('XOJV'),
        S = n('G6rE'),
        L = n('rxPX'),
        T = n('0KEI'),
        E = n('3XMw'),
        P = n.n(E),
        I = n('XEYr'),
        A = n('iGRG'),
        C = n('vbWy'),
        O = n('rHpw'),
        x = n('PSpH'),
        B = n('pwey'),
        R = n('uCrx'),
        F = n('Hp3u'),
        j = n('yVEN'),
        M = n('jwTb'),
        D = 'follow',
        N = 'like',
        H = 'reply',
        U = 'retweet',
        z = 'tweet',
        X = ((o = {}), y()(o, N, v.a.like), y()(o, U, v.a.retweet), o),
        V = P.a.c150ba67,
        G = P.a.cfd2f35d,
        J = P.a.f8e2163e,
        Y = P.a.e919c3bc,
        K = P.a.f9f9210c,
        W = P.a.af5cd00d,
        q = P.a.fe731015,
        Z = P.a.bac8f4c1,
        Q = {
          follow: {
            loggedIn: { heading: V, description: P.a.a36d354e, confirm: P.a.eb5f060b, cancel: G },
            loggedOut: { heading: J, description: P.a.feccfd6d, confirm: Y, secondaryAction: K },
          },
          like: {
            loggedIn: { heading: V, description: P.a.bb823968, confirm: q, cancel: G },
            loggedInMisinfo: { heading: P.a.a3c87901, description: P.a.j8eff20a, confirm: P.a.af5cd00d, cancel: q },
            loggedOut: { heading: J, description: P.a.i171a982, confirm: Y, secondaryAction: K },
          },
          reply: { loggedOut: { heading: J, description: P.a.bdbebf63, confirm: Y, secondaryAction: P.a.a565833d } },
          retweet: {
            loggedIn: { heading: V, description: P.a.fa067de6, confirm: Z, cancel: G },
            loggedInMisinfo: { heading: P.a.fdfe7016, description: P.a.ce6df39e, confirm: W, cancel: Z },
            loggedOut: { heading: J, description: P.a.h126d003, confirm: Y, secondaryAction: K },
          },
          tweet: { loggedOut: { heading: J, description: P.a.had58d0f, confirm: Y, secondaryAction: P.a.a565833d } },
        },
        $ = { follow: B.a, like: R.a, reply: F.a, retweet: j.a, tweet: M.a },
        ee = O.a.create(function (e) {
          return {
            follow: { color: e.colors.primary },
            like: { color: e.colors.magenta500 },
            reply: { color: e.colors.primary },
            retweet: { color: e.colors.green500 },
            tweet: { color: e.colors.primary },
          }
        }),
        te = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = Q[e]
          return {
            icon: n ? void 0 : $[e],
            iconStyle: n ? void 0 : ee[e],
            text: t ? (n ? o.loggedInMisinfo : o.loggedIn) : o.loggedOut,
          }
        },
        ne = { follow: x.a, like: I.a, retweet: C.a, react: A.a },
        oe = function (e, t) {
          return ne['like' === e && t ? 'react' : e]
        },
        re = n('rx9x'),
        ie = function (e, t) {
          var n = t.location
          switch (n.pathname) {
            case '/intent/follow':
            case '/intent/user':
              return D
            case '/intent/like':
            case '/intent/favorite':
              return N
            case '/intent/retweet':
              return U
            case '/intent/tweet':
              return ae(n)
            default:
              return
          }
        },
        ae = function (e) {
          var t = e.query
          return t && t.in_reply_to ? H : z
        },
        ce = function (e, t) {
          var n = t.location
          return ''.concat(n.pathname).concat(n.search)
        },
        se = function (e, t) {
          var n = ie(0, t),
            o = t.forwardPivotInfo
          return !!n && Object(v.b)(X[n], o)
        },
        le = function (e, t) {
          var n = t.tweetId
          return !!n && Object(re.a)(e, n)
        },
        ue = Object(L.a)()
          .propsFromState(function () {
            return { hasMisinfoNudge: se, intentType: ie, loginReturnPath: ce, misinfoNudgeActionTaken: le }
          })
          .propsFromActions(function () {
            return {
              addToast: w.b,
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)(
                'INTENT_PROMPT_CONTAINER',
              ),
              onFollow: S.e.follow,
              onLike: k.a.like,
              onReact: k.a.react,
              onRetweet: k.a.retweet,
              setTweetMisinfoActionTaken: re.b,
            }
          })
          .withAnalytics(),
        de = n('6oVL'),
        pe = 'IntentLoginSheet_Login_Sheet',
        fe = n('MWbm'),
        me = n('t62R'),
        he = n('pjBI'),
        be = n('/yvb'),
        ye = n('sgih'),
        ge = n('XJCT')
      function _e(e) {
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
      var we = P.a.d1091f50,
        ve = P.a.eab9ceb1,
        ke = P.a.hd50e063,
        Se = P.a.e919c3bc,
        Le = (function (e) {
          d()(n, e)
          var t = _e(n)
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
                return g.createElement(
                  fe.a,
                  null,
                  g.createElement(
                    fe.a,
                    { style: Te.contentHeader },
                    t ? g.createElement(t, { style: [Te.icon, i] }) : null,
                    r ? g.createElement(me.b, { size: 'headline1', weight: 'bold' }, r) : null,
                  ),
                  n ? g.createElement(me.b, { color: 'gray700', style: Te.secondaryText }, n) : null,
                )
              }),
              y()(l()(o), '_renderLoginForm', function () {
                var e = o.state.autoSubmit,
                  t = o.props.loginReturnPath
                return g.createElement(
                  de.a,
                  { autoSubmit: e, hideSubmitButton: !0, loginReturnPath: t },
                  g.createElement(ge.b, { onSubmitEditing: o._handleSubmit, style: Te.textFieldContainer }),
                  g.createElement(ge.a, { onSubmitEditing: o._handleSubmit, style: Te.textFieldContainer }),
                  o._renderLinks(),
                )
              }),
              y()(l()(o), '_renderLinks', function () {
                return o.props.showSignUpLink
                  ? g.createElement(he.a, null, o._renderForgotPasswordLink(), o._renderSignUpLink())
                  : o._renderForgotPasswordLink()
              }),
              y()(l()(o), '_renderForgotPasswordLink', function () {
                return g.createElement(
                  me.b,
                  { link: { pathname: 'https://twitter.com/account/begin_password_reset', external: !0 } },
                  we,
                )
              }),
              y()(l()(o), '_renderSignUpLink', function () {
                return g.createElement(me.b, { link: '/i/flow/signup' }, ve)
              }),
              y()(l()(o), '_renderFooter', function () {
                var e = o.props,
                  t = e.onSecondaryAction,
                  n = e.secondaryActionButtonLabel,
                  r = e.submitButtonLabel
                return g.createElement(
                  fe.a,
                  { style: Te.footer },
                  g.createElement(
                    be.a,
                    { onPress: t, size: 'medium', type: 'brandOutlined' },
                    g.createElement(me.b, { numberOfLines: 1 }, n),
                  ),
                  g.createElement(
                    be.a,
                    { onPress: o._handleSubmit, size: 'medium', type: 'brandFilled' },
                    g.createElement(me.b, { numberOfLines: 1 }, r),
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
                  return g.createElement(
                    ye.a,
                    { onMaskClick: e, type: 'bottom', withMask: !0 },
                    g.createElement(
                      fe.a,
                      { style: Te.sheetContent, testID: pe },
                      g.createElement(fe.a, { style: Te.content }, this._renderHeader(), this._renderLoginForm()),
                      this._renderFooter(),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component)
      y()(Le, 'defaultProps', { secondaryActionButtonLabel: ke, submitButtonLabel: Se })
      var Te = O.a.create(function (e) {
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
        Ee = Le,
        Pe = n('v6aA')
      function Ie(e, t) {
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
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ie(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ie(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ce(e) {
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
      var Oe = P.a.e29c651e,
        xe = (function (e) {
          d()(n, e)
          var t = Ce(n)
          function n() {
            var e
            i()(this, n)
            for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(l()(e), 'state', { showPrompt: !1 }),
              y()(l()(e), '_isComposeIntentType', function () {
                var t = e.props.intentType
                return t === H || t === z
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
                return n && (n === N || n === U) && o ? o : void 0
              }),
              y()(l()(e), '_maybeGetUserId', function () {
                var t = e.props,
                  n = t.intentType,
                  o = t.userId
                return n && n === D && o ? o : void 0
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
                    n(oe(r, l))(e)
                  }),
                  e._scribeAction(r),
                  o)
                ) {
                  var u = ''.concat(X[r]).concat(i ? '_after_read' : '')
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
                e._scribeNudgeAction({ element: 'read_article', action: 'click' }), i && !o && (r(i), n({ text: Oe }))
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
                  case D:
                    return o
                  case N:
                    return s
                      ? function (e, t) {
                          return i(e, Ae(Ae({}, t), {}, { reactionType: 'Like' }))
                        }
                      : r
                  case U:
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
                    var o = te(t, !1),
                      r = o.icon,
                      i = o.iconStyle,
                      a = o.text
                    return g.createElement(Ee, {
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
                    var r = te(o, !0, n),
                      i = r.icon,
                      a = r.iconStyle,
                      c = r.text
                    return g.createElement(_.a, {
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
        })(g.Component)
      y()(xe, 'contextType', Pe.a)
      var Be = ue(xe)
      t.default = Be
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
        w = n('3XMw'),
        v = n.n(w),
        k = n('cnVF'),
        S = n('Ukpf'),
        L = n('BTou'),
        T = n('mrHL'),
        E = 'LoginForm_Login_Button',
        P = n('fEA7'),
        I = n.n(P),
        A = n('MWbm'),
        C = n('Irs7'),
        O = n('v6aA'),
        x = n('/yvb'),
        B = n('rHpw')
      function R(e) {
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
      var F = v.a.e919c3bc,
        j = (function (e) {
          p()(n, e)
          var t = R(n)
          function n() {
            var e
            a()(this, n)
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(u()(e), '_mobileLoginToken', I.a.v1().replace(/-/g, '')),
              g()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  o = t.onSubmit
                if ((n.scribe({ action: 'submit' }), L.a.flushHTMLCache(), e._setLoginCookie(), o))
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
                  Object(T.e)(k.q, e._mobileLoginToken, {
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
                  S.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
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
                    w = _.createElement(
                      A.a,
                      { style: i && M.horizontalFields },
                      _.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: g }),
                      _.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      _.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      _.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      _.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      o
                        ? null
                        : _.createElement(
                            A.a,
                            { style: i && M.loginButtonContainer },
                            _.createElement(
                              x.a,
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
                  return _.createElement(
                    A.a,
                    { style: M.loginForm },
                    _.createElement('form', {
                      action: n,
                      children: w,
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
        })(_.Component)
      g()(j, 'contextType', O.a),
        g()(j, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: F,
          submitButtonType: 'brandFilled',
        })
      var M = B.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(C.a)(j, { element: 'inline_login_form' })
    },
    Ukpf: function (e, t, n) {
      'use strict'
      var o = {
        inject: function (e) {
          var t = e.callback,
            n = e.scriptId,
            o = e.src
          if (document.getElementById(n)) t && t()
          else {
            var r = document.createElement('script')
            ;(r.src = o),
              (r.id = n),
              (r.async = !0),
              (r.defer = !0),
              document.body.appendChild(r),
              (r.onload = function () {
                t && t()
              })
          }
        },
        replace: function (e) {
          var t,
            n = e.callback,
            r = e.scriptId,
            i = e.src,
            a = document.getElementById(r)
          a && (null === (t = a.parentNode) || void 0 === t || t.removeChild(a))
          o.inject({ callback: n, scriptId: r, src: i })
        },
      }
      t.a = o
    },
    XJCT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      }),
        n.d(t, 'b', function () {
          return E
        })
      var o = n('97Jx'),
        r = n.n(o),
        i = n('m3Bd'),
        a = n.n(i),
        c = n('ERkP'),
        s = n('t62R'),
        l = n('3XMw'),
        u = n.n(l),
        d = (n('yH/f'), n('ho0z'), n('p+r5')),
        p = Object.freeze({ password: 'password', username: 'username_or_email' }),
        f = function (e) {
          var t = e.name,
            n = a()(e, ['name'])
          return c.createElement(
            d.a,
            r()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        m = u.a.d1091f50,
        h = c.createElement(
          s.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          m,
        ),
        b = u.a.dec3c9b8,
        y = function (e) {
          var t = e.helperText,
            n = e.label,
            o = e.withForgotPasswordLink,
            i = a()(e, ['helperText', 'label', 'withForgotPasswordLink'])
          return c.createElement(
            f,
            r()({}, i, { helperText: o ? h : t, label: n || b, name: p.password, type: 'password' }),
          )
        }
      y.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var g = y,
        _ = n('v6aA'),
        w = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        v = u.a.e1ec8c17,
        k = u.a.d0a750f2,
        S = u.a.e2dd29b5,
        L = u.a.jb4eb245,
        T = function (e) {
          var t = e.autoFocus,
            n = e.label,
            o = e.withEmailDisabled,
            i = e.withPhoneDisabled,
            s = e.withUsernameDisabled,
            l = a()(e, ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled']),
            u = c.useContext(_.a).featureSwitches,
            d = v
          return (
            s ? (d = k) : i ? (d = L) : o && (d = S),
            c.createElement(f, r()({}, l, { autoFocus: t, label: n || d, name: p.username, type: w(u) }))
          )
        }
      T.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var E = T
    },
  },
])
//# sourceMappingURL=WIPED
