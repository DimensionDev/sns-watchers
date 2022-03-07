;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '5emT': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              r.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '6oVL': function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        i = n.n(a),
        o = n('VrFO'),
        r = n.n(o),
        s = n('Y9Ll'),
        l = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        b = n('KEM+'),
        y = n.n(b),
        g = (n('2G9S'), n('KqXw'), n('MvUL'), n('Ysgh'), n('ERkP')),
        f = n.n(g),
        v = n('3XMw'),
        _ = n.n(v),
        x = n('cnVF'),
        w = n('Ukpf'),
        C = n('BTou'),
        I = n('mrHL'),
        L = 'LoginForm_Login_Button',
        k = n('fEA7'),
        S = n.n(k),
        E = n('MWbm'),
        T = n('Irs7'),
        F = n('v6aA'),
        P = n('/yvb'),
        D = n('rHpw'),
        V = _.a.e919c3bc,
        B = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), '_mobileLoginToken', S.a.v1().replace(/-/g, '')),
              y()(u()(e), '_handleSubmit', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.onSubmit
                if ((n.scribe({ action: 'submit' }), C.a.flushHTMLCache(), e._setLoginCookie(), a))
                  return a(e._form.elements), !1
              }),
              y()(u()(e), '_handleSubmitButtonClick', function () {
                !1 !== e._handleSubmit() && e._form.submit()
              }),
              y()(u()(e), '_setFormRef', function (t) {
                t && (e._form = t)
              }),
              y()(u()(e), '_setLoginCookie', function () {
                var t = new Date(Date.now())
                t.setTime(t.getTime() + 3e5),
                  Object(I.e)(x.q, e._mobileLoginToken, {
                    featureSwitches: e.context.featureSwitches,
                    cookieOptions: { domain: void 0, expires: t },
                  })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.autoSubmit && !e.autoSubmit && this._handleSubmitButtonClick()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  w.a.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.formActionUrl,
                    a = e.hideSubmitButton,
                    o = e.horizontalLayout,
                    r = e.loginReturnPath,
                    s = e.submitButtonDisabled,
                    l = e.submitButtonLabel,
                    c = e.submitButtonSize,
                    u = e.submitButtonStyle,
                    d = e.submitButtonType,
                    p = 'string' == typeof r ? r.split('?') : [],
                    h = i()(p, 2),
                    m = h[0],
                    b = h[1],
                    y = encodeURI(m || '/'),
                    g = b ? '?'.concat(b) : '',
                    v = ''.concat('').concat(y).concat(g),
                    _ = f.a.createElement(
                      E.a,
                      { style: o && z.horizontalFields },
                      f.a.createElement('input', { name: 'redirect_after_login', type: 'hidden', value: v }),
                      f.a.createElement('input', { name: 'remember_me', type: 'hidden', value: '1' }),
                      f.a.createElement('input', {
                        name: 'authenticity_token',
                        type: 'hidden',
                        value: this._mobileLoginToken,
                      }),
                      f.a.createElement('input', { name: 'wfa', type: 'hidden', value: '1' }),
                      f.a.createElement('input', { autoComplete: 'off', name: 'ui_metrics', type: 'hidden' }),
                      t,
                      a
                        ? null
                        : f.a.createElement(
                            E.a,
                            { style: o && z.loginButtonContainer },
                            f.a.createElement(
                              P.a,
                              {
                                disabled: s,
                                onPress: this._handleSubmitButtonClick,
                                size: c,
                                style: u,
                                testID: L,
                                type: d,
                              },
                              l,
                            ),
                          ),
                    )
                  return f.a.createElement(
                    E.a,
                    { style: z.loginForm },
                    f.a.createElement('form', {
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
        })(f.a.Component)
      y()(B, 'contextType', F.a),
        y()(B, 'defaultProps', {
          autoSubmit: !1,
          formActionUrl: '/sessions',
          hideSubmitButton: !1,
          submitButtonDisabled: !1,
          submitButtonLabel: V,
          submitButtonType: 'brandFilled',
        })
      var z = D.a.create(function (e) {
        return {
          horizontalFields: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' },
          loginForm: { width: '100%' },
          loginButtonContainer: { flexDirection: 'column', justifyContent: 'center' },
        }
      })
      t.a = Object(T.a)(B, { element: 'inline_login_form' })
    },
    XJCT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      }),
        n.d(t, 'b', function () {
          return F
        })
      var a = n('97Jx'),
        i = n.n(a),
        o = n('m3Bd'),
        r = n.n(o),
        s = n('ERkP'),
        l = n.n(s),
        c = n('t62R'),
        u = n('3XMw'),
        d = n.n(u),
        p = (n('yH/f'), n('ho0z'), n('p+r5')),
        h = ['name'],
        m = Object.freeze({ password: 'password', username: 'username_or_email' }),
        b = function (e) {
          var t = e.name,
            n = r()(e, h)
          return l.a.createElement(
            p.a,
            i()({ autoCapitalize: 'none', autoCorrect: !1, name: 'session['.concat(t, ']'), spellCheck: 'false' }, n),
          )
        },
        y = ['helperText', 'label', 'withForgotPasswordLink'],
        g = d.a.d1091f50,
        f = l.a.createElement(
          c.b,
          { link: { external: !0, pathname: 'https://twitter.com/account/begin_password_reset', openInSameFrame: !0 } },
          g,
        ),
        v = d.a.dec3c9b8,
        _ = function (e) {
          var t = e.helperText,
            n = e.label,
            a = e.withForgotPasswordLink,
            o = r()(e, y)
          return l.a.createElement(
            b,
            i()({}, o, { helperText: a ? f : t, label: n || v, name: m.password, type: 'password' }),
          )
        }
      _.defaultProps = { autoFocus: !1, withForgotPasswordLink: !1 }
      var x = _,
        w = n('v6aA'),
        C = function (e) {
          return e.isTrue('responsive_web_login_input_type_email_enabled') ? 'email' : void 0
        },
        I = ['autoFocus', 'label', 'withEmailDisabled', 'withPhoneDisabled', 'withUsernameDisabled'],
        L = d.a.e1ec8c17,
        k = d.a.d0a750f2,
        S = d.a.e2dd29b5,
        E = d.a.jb4eb245,
        T = function (e) {
          var t = e.autoFocus,
            n = e.label,
            a = e.withEmailDisabled,
            o = e.withPhoneDisabled,
            s = e.withUsernameDisabled,
            c = r()(e, I),
            u = l.a.useContext(w.a).featureSwitches,
            d = L
          return (
            s ? (d = k) : o ? (d = E) : a && (d = S),
            l.a.createElement(b, i()({}, c, { autoFocus: t, label: n || d, name: m.username, type: C(u) }))
          )
        }
      T.defaultProps = { autoFocus: !0, withUsernameDisabled: !1, withPhoneDisabled: !1, withEmailDisabled: !1 }
      var F = T
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      })
      n('yiKp')
      var a = n('97Jx'),
        i = n.n(a),
        o = n('m3Bd'),
        r = n.n(o),
        s = n('VrFO'),
        l = n.n(s),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        b = n('2VqO'),
        y = n.n(b),
        g = n('KEM+'),
        f = n.n(g),
        v = (n('2G9S'), n('ERkP')),
        _ = n.n(v),
        x = n('38/B'),
        w = n('t62R'),
        C = n('/yvb'),
        I = n('piX5'),
        L = n('3XMw'),
        k = n.n(L),
        S = n('tI3i'),
        E = n.n(S),
        T = n('oQhu'),
        F = n('rHpw'),
        P = n('aITJ'),
        D = n('MWbm'),
        V = n('n5fo'),
        B = n('5emT'),
        z = n('Oib4'),
        K = n('WtWS'),
        R = n('ioan'),
        U = [
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
        M = function (e) {
          return e.length
        },
        O = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M
          return t(e)
        },
        H = k.a.de540c32,
        j = k.a.b4abfdb3,
        A = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              f()(p()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              f()(p()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              f()(
                p()(a),
                '_getTextInputStyle',
                Object(T.a)(function (e) {
                  return [W.root, !e && W.disabled]
                }),
              ),
              f()(p()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  i = a.state.isPasswordRevealed
                return 'password' === n && t ? (i ? 'text' : 'password') : n
              }),
              f()(p()(a), '_calculateLength', function (e) {
                return O(e, a.props.calculateLength)
              }),
              f()(p()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              f()(p()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  i,
                  o,
                  r = a.props.type,
                  s =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  l =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (i = n.textInputNode) ||
                    void 0 === i ||
                    null === (o = i.validity) ||
                    void 0 === o
                      ? void 0
                      : o.badInput
                return 'number' === r && '' === s && !0 === l
              }),
              f()(p()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              f()(p()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  i = a._calculateLength(n),
                  o = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: i, actualCount: o }), t && t(e)
              }),
              f()(p()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  i = e.currentTarget.value,
                  o = a._calculateLength(i),
                  r = a._getActualCount(i),
                  s = a._getAdjustedMaxLength()
                void 0 !== s && i.length > s && n.length < i.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: o,
                      actualCount: r,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              f()(p()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t(e)
              }),
              f()(p()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  i = t.onKeyPress,
                  o = t.onSubmitEditing
                i && i(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !o || (e.preventDefault(), o(e))
              }),
              f()(p()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                P.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              f()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                P.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              f()(p()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              f()(p()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              f()(p()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  i = e.validLength,
                  o = !!a,
                  r = 'string' == typeof e.value,
                  s = 'string' == typeof t
                E()(
                  !(!s && r && !o),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  E()(!(n && i && i > n), 'Max length should be equal or greater than valid length.'),
                  E()(
                    !((void 0 !== n && n <= 0) || (void 0 !== i && i <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              f()(p()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              f()(p()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              f()(p()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  t = a.getValue(),
                  n = a._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              a._checkComponentPropsUsageCorrectness(e)
            var i = e.defaultValue,
              o = e.value || i || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(o),
                actualCount: M(o),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: o,
              }),
              a
            )
          }
          return (
            u()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.maxLength,
                      a = t.onChange,
                      i = t.validLength,
                      o = t.value,
                      r = e.maxLength,
                      s = e.onChange,
                      l = e.validLength,
                      c = e.value
                    ;(l === i && n === r && !!a === !!s && ('string' == typeof o) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      a = e.errorText,
                      i = e.helperText,
                      o = e.style,
                      r = this.state.isFocused,
                      s = this._isFormInvalid()
                    return _.a.createElement(
                      D.a,
                      { style: [X.root, o] },
                      _.a.createElement(
                        D.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            I.a.border,
                            X.textInputFormStyle,
                            s && I.a.invalidBorderColor,
                            r && s && I.a.focusedBorderInvalid,
                            r && !s && I.a.focusedBorderValid,
                            !n && I.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          D.a,
                          { style: X.textInputFormWrapper },
                          _.a.createElement(
                            D.a,
                            { style: X.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        D.a,
                        { style: [X.sidePadding, X.underTextInputForm] },
                        _.a.createElement(
                          D.a,
                          { style: X.subtextWrapper },
                          i ? this._renderHelperText() : null,
                          s && a ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      n = this._isFormInvalid() ? 'red500' : t,
                      a = this._isLabelLarge()
                    return _.a.createElement(
                      w.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          X.textInputHeaderItem,
                          a && X.placeholderText,
                          !x.a.reducedMotionEnabled && X.transition,
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
                      t = e.Icon,
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      a =
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
                      o = (e.style, e.type, e.validLength, r()(e, U))
                    return _.a.createElement(
                      D.a,
                      { style: W.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        w.b,
                        { size: 'headline1', style: W.wrapper },
                        _.a.createElement(
                          R.a,
                          i()({}, o, {
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
                      a && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      n = e.type,
                      a = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? _.a.createElement(
                          D.a,
                          { style: X.passwordVisibilityIconContainer },
                          _.a.createElement(C.a, {
                            accessibilityLabel: a ? j : H,
                            focusable: !0,
                            hoverLabel: { label: a ? j : H },
                            icon: a ? _.a.createElement(V.a, null) : _.a.createElement(B.a, null),
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
                      D.a,
                      { accessibilityLiveRegion: 'polite' },
                      _.a.createElement(
                        w.b,
                        { color: 'gray700', size: 'subtext2', style: X.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return _.a.createElement(
                      D.a,
                      { accessibilityLiveRegion: 'assertive' },
                      _.a.createElement(
                        w.b,
                        { color: 'red500', size: 'subtext2', style: X.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      n = this._exceedsValidLength(e),
                      a = t && k.a.ia24dc8c(t),
                      i = k.a.ia24dc8c(e)
                    return _.a.createElement(
                      D.a,
                      { accessibilityLiveRegion: 'polite', style: [X.textInputHeaderItem, X.displayCount] },
                      _.a.createElement(
                        w.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(i, ' / ').concat(a) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [X.icon, t && X.focusedIcon]
                    return e && _.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? _.a.createElement(z.a, { style: [X.validationIcon, I.a.invalidColor] })
                      : _.a.createElement(K.a, { style: [X.validationIcon, I.a.validColor] })
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
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.calculateLength,
                      a = e.value,
                      i = 'string' == typeof a ? O(a, n) : 0
                    return 'string' == typeof a && i !== t.displayCount
                      ? { displayCount: i, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(_.a.Component)
      f()(A, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (A.propTypes = {})
      var W = F.a.create(function (e) {
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
        X = F.a.create(function (e) {
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
    piX5: function (e, t, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var a = n('rHpw').a.create(function (e) {
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
      t.a = a
    },
  },
])
//# sourceMappingURL=WIPED
