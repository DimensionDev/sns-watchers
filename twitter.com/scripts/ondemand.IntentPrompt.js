;(window.webpackJsonp = window.webpackJsonp || []).push([
  [216],
  {
    '57t6': function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'IntentPrompt', function () {
          return Ee
        })
      var o,
        i = t('yiKp'),
        r = t.n(i),
        a = t('VrFO'),
        c = t.n(a),
        s = t('Y9Ll'),
        l = t.n(s),
        d = t('1Pcy'),
        u = t.n(d),
        p = t('5Yy7'),
        f = t.n(p),
        m = t('2VqO'),
        h = t.n(m),
        g = t('KEM+'),
        b = t.n(g),
        y = (t('2G9S'), t('1t7P'), t('jQ/y'), t('ERkP')),
        _ = t.n(y),
        w = t('eb3s'),
        v = (t('KqXw'), t('LJOr'), t('1YZw')),
        k = t('HwrL'),
        T = t('XOJV'),
        A = t('G6rE'),
        S = t('rxPX'),
        I = t('0KEI'),
        L = t('3XMw'),
        C = t.n(L),
        E = t('XEYr'),
        P = t('iGRG'),
        M = t('vbWy'),
        x = t('rHpw'),
        O = t('PSpH'),
        N = t('pwey'),
        F = t('uCrx'),
        R = t('Hp3u'),
        H = t('yVEN'),
        B = t('jwTb'),
        U = 'follow',
        j = 'like',
        G = 'reply',
        z = 'retweet',
        V = 'tweet',
        X = ((o = {}), b()(o, j, k.a.like), b()(o, z, k.a.retweet), o),
        D = C.a.c150ba67,
        J = C.a.cfd2f35d,
        K = C.a.f8e2163e,
        W = C.a.e919c3bc,
        Y = C.a.f9f9210c,
        q = C.a.af5cd00d,
        Q = C.a.fe731015,
        Z = C.a.bac8f4c1,
        $ = {
          follow: {
            loggedIn: { heading: D, description: C.a.a36d354e, confirm: C.a.eb5f060b, cancel: J },
            loggedOut: { heading: K, description: C.a.feccfd6d, confirm: W, secondaryAction: Y },
          },
          like: {
            loggedIn: { heading: D, description: C.a.bb823968, confirm: Q, cancel: J },
            loggedInMisinfo: { heading: C.a.a3c87901, description: C.a.j8eff20a, confirm: C.a.af5cd00d, cancel: Q },
            loggedOut: { heading: K, description: C.a.i171a982, confirm: W, secondaryAction: Y },
          },
          reply: { loggedOut: { heading: K, description: C.a.bdbebf63, confirm: W, secondaryAction: C.a.a565833d } },
          retweet: {
            loggedIn: { heading: D, description: C.a.fa067de6, confirm: Z, cancel: J },
            loggedInMisinfo: { heading: C.a.fdfe7016, description: C.a.ce6df39e, confirm: q, cancel: Z },
            loggedOut: { heading: K, description: C.a.h126d003, confirm: W, secondaryAction: Y },
          },
          tweet: { loggedOut: { heading: K, description: C.a.had58d0f, confirm: W, secondaryAction: C.a.a565833d } },
        },
        ee = { follow: N.a, like: F.a, reply: R.a, retweet: H.a, tweet: B.a },
        ne = x.a.create(function (e) {
          return {
            follow: { color: e.colors.primary },
            like: { color: e.colors.magenta500 },
            reply: { color: e.colors.primary },
            retweet: { color: e.colors.green500 },
            tweet: { color: e.colors.primary },
          }
        }),
        te = function (e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = $[e]
          return {
            icon: t ? void 0 : ee[e],
            iconStyle: t ? void 0 : ne[e],
            text: n ? (t ? o.loggedInMisinfo : o.loggedIn) : o.loggedOut,
          }
        },
        oe = { follow: O.a, like: E.a, retweet: M.a, react: P.a },
        ie = function (e, n) {
          return oe['like' === e && n ? 'react' : e]
        },
        re = t('rx9x'),
        ae = function (e, n) {
          var t = n.location
          switch (t.pathname) {
            case '/intent/follow':
            case '/intent/user':
              return U
            case '/intent/like':
            case '/intent/favorite':
              return j
            case '/intent/retweet':
              return z
            case '/intent/tweet':
              return ce(t)
            default:
              return
          }
        },
        ce = function (e) {
          var n = e.query
          return n && n.in_reply_to ? G : V
        },
        se = function (e, n) {
          var t = n.location
          return ''.concat(t.pathname).concat(t.search)
        },
        le = function (e, n) {
          var t = ae(0, n),
            o = n.forwardPivotInfo
          return !!t && Object(k.b)(X[t], o)
        },
        de = function (e, n) {
          var t = n.tweetId
          return !!t && Object(re.a)(e, t)
        },
        ue = Object(S.a)()
          .propsFromState(function () {
            return { hasMisinfoNudge: le, intentType: ae, loginReturnPath: se, misinfoNudgeActionTaken: de }
          })
          .propsFromActions(function () {
            return {
              addToast: v.b,
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'INTENT_PROMPT_CONTAINER',
              ),
              onFollow: A.e.follow,
              onLike: T.a.like,
              onReact: T.a.react,
              onRetweet: T.a.retweet,
              setTweetMisinfoActionTaken: re.b,
            }
          })
          .withAnalytics(),
        pe = t('6oVL'),
        fe = 'IntentLoginSheet_Login_Sheet',
        me = t('MWbm'),
        he = t('t62R'),
        ge = t('pjBI'),
        be = t('/yvb'),
        ye = t('sgih'),
        _e = t('XJCT'),
        we = C.a.d1091f50,
        ve = C.a.eab9ceb1,
        ke = C.a.hd50e063,
        Te = C.a.e919c3bc,
        Ae = (function (e) {
          f()(t, e)
          var n = h()(t)
          function t(e) {
            var o
            return (
              c()(this, t),
              (o = n.call(this, e)),
              b()(u()(o), '_renderHeader', function () {
                var e = o.props,
                  n = e.Icon,
                  t = e.description,
                  i = e.heading,
                  r = e.iconStyle
                return _.a.createElement(
                  me.a,
                  null,
                  _.a.createElement(
                    me.a,
                    { style: Se.contentHeader },
                    n ? _.a.createElement(n, { style: [Se.icon, r] }) : null,
                    i ? _.a.createElement(he.b, { size: 'headline1', weight: 'bold' }, i) : null,
                  ),
                  t ? _.a.createElement(he.b, { color: 'gray700', style: Se.secondaryText }, t) : null,
                )
              }),
              b()(u()(o), '_renderLoginForm', function () {
                var e = o.state.autoSubmit,
                  n = o.props.loginReturnPath
                return _.a.createElement(
                  pe.a,
                  { autoSubmit: e, hideSubmitButton: !0, loginReturnPath: n },
                  _.a.createElement(_e.b, { onSubmitEditing: o._handleSubmit, style: Se.textFieldContainer }),
                  _.a.createElement(_e.a, { onSubmitEditing: o._handleSubmit, style: Se.textFieldContainer }),
                  o._renderLinks(),
                )
              }),
              b()(u()(o), '_renderLinks', function () {
                return o.props.showSignUpLink
                  ? _.a.createElement(ge.a, null, o._renderForgotPasswordLink(), o._renderSignUpLink())
                  : o._renderForgotPasswordLink()
              }),
              b()(u()(o), '_renderForgotPasswordLink', function () {
                return _.a.createElement(
                  he.b,
                  { link: { pathname: 'https://twitter.com/account/begin_password_reset', external: !0 } },
                  we,
                )
              }),
              b()(u()(o), '_renderSignUpLink', function () {
                return _.a.createElement(he.b, { link: '/i/flow/signup' }, ve)
              }),
              b()(u()(o), '_renderFooter', function () {
                var e = o.props,
                  n = e.onSecondaryAction,
                  t = e.secondaryActionButtonLabel,
                  i = e.submitButtonLabel
                return _.a.createElement(
                  me.a,
                  { style: Se.footer },
                  _.a.createElement(
                    be.a,
                    { onPress: n, size: 'medium', type: 'brandOutlined' },
                    _.a.createElement(he.b, { numberOfLines: 1 }, t),
                  ),
                  _.a.createElement(
                    be.a,
                    { onPress: o._handleSubmit, size: 'medium', type: 'brandFilled' },
                    _.a.createElement(he.b, { numberOfLines: 1 }, i),
                  ),
                )
              }),
              b()(u()(o), '_handleSubmit', function () {
                o.props.onLoginSubmission && o.props.onLoginSubmission(), o.setState({ autoSubmit: !0 })
              }),
              (o.state = { autoSubmit: !1 }),
              o
            )
          }
          return (
            l()(t, [
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
                    ye.a,
                    { onMaskClick: e, type: 'bottom', withMask: !0 },
                    _.a.createElement(
                      me.a,
                      { style: Se.sheetContent, testID: fe },
                      _.a.createElement(me.a, { style: Se.content }, this._renderHeader(), this._renderLoginForm()),
                      this._renderFooter(),
                    ),
                  )
                },
              },
            ]),
            t
          )
        })(_.a.Component)
      b()(Ae, 'defaultProps', { secondaryActionButtonLabel: ke, submitButtonLabel: Te })
      var Se = x.a.create(function (e) {
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
        Ie = Ae,
        Le = t('v6aA'),
        Ce = C.a.e29c651e,
        Ee = (function (e) {
          f()(t, e)
          var n = h()(t)
          function t() {
            var e
            c()(this, t)
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a]
            return (
              (e = n.call.apply(n, [this].concat(i))),
              b()(u()(e), 'state', { showPrompt: !1 }),
              b()(u()(e), '_isComposeIntentType', function () {
                var n = e.props.intentType
                return n === G || n === V
              }),
              b()(u()(e), '_handleSecondaryAction', function () {
                e.props.intentType && e._isComposeIntentType() ? e._handleSignUp() : e._handleCancel()
              }),
              b()(u()(e), '_handleSignUp', function () {
                var n = e.props.history
                e.setState({ showPrompt: !1 }), e._scribeAction('signup'), n.push('/i/flow/signup')
              }),
              b()(u()(e), '_handleCancel', function () {
                var n = e.props,
                  t = n.hasMisinfoNudge,
                  o = n.misinfoNudgeActionTaken
                e.setState({ showPrompt: !1 }),
                  e._scribeAction('dismiss'),
                  t && e._scribeNudgeAction({ element: o ? 'after_read' : void 0, action: 'cancel' })
              }),
              b()(u()(e), '_handleLoginSubmission', function () {
                e._scribeAction('login')
              }),
              b()(u()(e), '_maybeGetTweetId', function () {
                var n = e.props,
                  t = n.intentType,
                  o = n.tweetId
                return t && (t === j || t === z) && o ? o : void 0
              }),
              b()(u()(e), '_maybeGetUserId', function () {
                var n = e.props,
                  t = n.intentType,
                  o = n.userId
                return t && t === U && o ? o : void 0
              }),
              b()(u()(e), '_handleIntentAction', function () {
                var n = e.props,
                  t = n.createLocalApiErrorHandler,
                  o = n.hasMisinfoNudge,
                  i = n.intentType,
                  r = n.misinfoNudgeActionTaken,
                  a = e.context.featureSwitches,
                  c = e._maybeGetTweetId() || e._maybeGetUserId(),
                  s = e._getIntentAction(),
                  l = a.isTrue('responsive_web_reactions_enabled')
                if (
                  i &&
                  c &&
                  s &&
                  (s(c, { promotedContent: void 0 }).catch(function (e) {
                    t(ie(i, l))(e)
                  }),
                  e._scribeAction(i),
                  o)
                ) {
                  var d = ''.concat(X[i]).concat(r ? '_after_read' : '')
                  e._scribeNudgeAction({ element: d, action: 'click' })
                }
                e.setState({ showPrompt: !1 })
              }),
              b()(u()(e), '_handleMisinfoAction', function () {
                var n = e.props,
                  t = n.addToast,
                  o = n.misinfoNudgeActionTaken,
                  i = n.setTweetMisinfoActionTaken,
                  r = n.tweetId
                e._scribeNudgeAction({ element: 'read_article', action: 'click' }), r && !o && (i(r), t({ text: Ce }))
              }),
              b()(u()(e), '_scribeNudgeAction', function (n) {
                var t = n.action,
                  o = n.element
                e.props.analytics.scribe({ component: 'soft_intervention_nudge', element: o, action: t })
              }),
              b()(u()(e), '_handleMaskClick', function () {
                e.props.intentType && !e._isComposeIntentType() && e._handleCancel()
              }),
              b()(u()(e), '_getIntentAction', function () {
                var n = e.props,
                  t = n.intentType,
                  o = n.onFollow,
                  i = n.onLike,
                  a = n.onReact,
                  c = n.onRetweet,
                  s = e.context.featureSwitches,
                  l = s.isTrue('responsive_web_reactions_enabled') || s.isTrue('responsive_web_reactions_api_test')
                switch (t) {
                  case U:
                    return o
                  case j:
                    return l
                      ? function (e, n) {
                          return a(e, r()(r()({}, n), {}, { reactionType: 'Like' }))
                        }
                      : i
                  case z:
                    return c
                  default:
                    return
                }
              }),
              e
            )
          }
          return (
            l()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    n = e.hasMisinfoNudge,
                    t = e.intentType,
                    o = e.misinfoNudgeActionTaken
                  t &&
                    (this.setState({ showPrompt: !0 }),
                    this._scribeAction('open'),
                    n && this._scribeNudgeAction({ element: o ? 'after_read' : void 0, action: 'impression' }))
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
                    n = e.intentType,
                    t = e.loginReturnPath
                  if (n) {
                    var o = te(n, !1),
                      i = o.icon,
                      r = o.iconStyle,
                      a = o.text
                    return _.a.createElement(Ie, {
                      Icon: i,
                      description: a.description,
                      heading: a.heading,
                      iconStyle: r,
                      loginReturnPath: t,
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
                    n = e.forwardPivotInfo,
                    t = e.hasMisinfoNudge,
                    o = e.intentType
                  if (o && !this._isComposeIntentType()) {
                    var i = te(o, !0, t),
                      r = i.icon,
                      a = i.iconStyle,
                      c = i.text
                    return _.a.createElement(w.a, {
                      Icon: r,
                      cancelButtonLabel: c.cancel,
                      confirmButtonLabel: c.confirm,
                      confirmButtonLink: t ? (null == n ? void 0 : n.landingUrl.url) : void 0,
                      headline: c.heading,
                      iconStyle: a,
                      onCancel: t ? this._handleIntentAction : this._handleCancel,
                      onConfirm: t ? this._handleMisinfoAction : this._handleIntentAction,
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
                  var n = this.props,
                    t = n.analytics,
                    o = n.intentType,
                    i = this.context.loggedInUserId,
                    r = o
                      ? {
                          component: ''.concat(o, '_intent'),
                          element: i ? 'confirmation_prompt' : 'login_prompt',
                          action: e,
                        }
                      : { action: e }
                  t.scribe(r)
                },
              },
            ]),
            t
          )
        })(_.a.Component)
      b()(Ee, 'contextType', Le.a)
      var Pe = ue(Ee)
      n.default = Pe
    },
  },
])
//# sourceMappingURL=WIPED
