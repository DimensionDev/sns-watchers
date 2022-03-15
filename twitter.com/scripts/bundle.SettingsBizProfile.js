;(window.webpackJsonp = window.webpackJsonp || []).push([
  [90],
  {
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        o = n.n(a),
        r = n('fyvP'),
        i = n('rHpw'),
        l = n('MWbm')
      t.a = function (e) {
        return o.a.createElement(l.a, { style: s.root }, o.a.createElement(r.a, e))
      }
      var s = i.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '5emT': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        o = n.n(a),
        r = n('ERkP'),
        i = n.n(r),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '6XNv': function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        o = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        g = n('KEM+'),
        y = n.n(g),
        f = n('yiKp'),
        b = n.n(f),
        v = (n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n.n(v),
        w = n('t62R'),
        E = n('piX5'),
        C = n('4r2z'),
        x = n('FG+G'),
        T = n('rHpw'),
        I = n('k/Ka'),
        S = n('shC7'),
        k = n('MWbm'),
        B = _.a.forwardRef(function (e, t) {
          return Object(I.a)('select', b()(b()({}, e), {}, { ref: t }))
        }),
        z = function (e) {
          return Object(I.a)('option', e)
        },
        P = 1,
        D = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              y()(u()(a), '_selectRef', _.a.createRef()),
              y()(u()(a), 'state', { isFocused: !1 }),
              y()(u()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  o = t.withEmptyOption,
                  r = e.target,
                  i = r.selectedIndex,
                  l = r.value
                n && n(l, i - (o ? 1 : 0))
              }),
              y()(u()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              y()(u()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t()
              }),
              (a._id = 'SELECTOR_'.concat(P)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (P += 1),
              a
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityDescribedBy,
                    n = e.disabled,
                    a = e.errorText,
                    r = e.hasError,
                    i = e.helperText,
                    l = e.options,
                    s = e.style,
                    c = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    h = w.b.getLanguage(),
                    m =
                      'ja' === h
                        ? T.a.theme.fontFamilies.japan
                        : S.a.getConstants().isRTL || C.a.isLocaleRTL(h)
                        ? T.a.theme.fontFamilies.rtl
                        : T.a.theme.fontFamilies.normal,
                    g = void 0 === r ? !!a : r,
                    y = new Set()
                  a && y.add(this._errorID), t && y.add(t), i && y.add(this._helperID)
                  var f = y.size ? o()(y).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      k.a,
                      {
                        style: [
                          E.a.border,
                          L.container,
                          n && E.a.disabled,
                          p && E.a.focusedBorderValid,
                          g && E.a.invalidBorderColor,
                          p && g && E.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        B,
                        {
                          accessibilityDescribedBy: f,
                          accessibilityInvalid: g,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [L.select, { fontFamily: m }, n && E.a.disabled],
                          testID: c || '',
                          value: u,
                        },
                        d ? _.a.createElement(z, { disabled: !0, style: L.option, value: '' }) : null,
                        l.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return _.a.createElement(
                            z,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: L.option, value: a },
                            n,
                          )
                        }),
                      ),
                      _.a.createElement(x.a, {
                        style: [L.dropdownCaret, p && E.a.validColor, (r || a) && E.a.invalidColor],
                      }),
                    ),
                    i ? this._renderHelperText() : null,
                    g && a ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    n = e.hasError,
                    a = e.label,
                    o = this.state.isFocused
                  return _.a.createElement(
                    w.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : o ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: L.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return _.a.createElement(
                    k.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'gray700', nativeID: this._helperID, style: L.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return _.a.createElement(
                    k.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'red500', nativeID: this._errorID, style: L.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      y()(D, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (D.propTypes = {})
      var L = T.a.create(function (e) {
        return {
          container: { backgroundColor: e.colors.cellBackground },
          dropdownCaret: {
            color: e.colors.gray700,
            height: ''.concat(1.5, 'em'),
            pointerEvents: 'none',
            position: 'absolute',
            marginTop: '-'.concat(0.75, 'em'),
            top: '50%',
            right: e.spaces.space12,
          },
          label: {
            position: 'absolute',
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space8,
            pointerEvents: 'none',
            lineHeight: e.lineHeights.subtext2,
          },
          option: { backgroundColor: e.colors.navigationBackground },
          select: {
            appearance: 'none',
            backgroundColor: 'transparent',
            borderRadius: e.borderRadii.none,
            borderWidth: e.borderWidths.none,
            color: e.colors.text,
            cursor: 'pointer',
            fontSize: e.fontSizes.headline2,
            lineHeight: e.lineHeights.headline2,
            margin: 0,
            marginTop: e.spaces.space16,
            outlineStyle: 'none',
            padding: 0,
            paddingTop: e.spaces.space12,
            paddingBottom: e.spaces.space8,
            paddingHorizontal: e.spaces.space8,
          },
          helperText: {
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space2,
          },
        }
      })
      t.a = D
    },
    Ssqp: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BizProfileScreen', function () {
          return _e
        })
      var a = n('yiKp'),
        o = n.n(a),
        r = n('VrFO'),
        i = n.n(r),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        h = n('2VqO'),
        m = n.n(h),
        g = n('KEM+'),
        y = n.n(g),
        f =
          (n('yH/f'),
          n('2G9S'),
          n('ho0z'),
          n('hBpG'),
          n('7x/C'),
          n('KqXw'),
          n('WNMA'),
          n('1Iuc'),
          n('z84I'),
          n('LW0h'),
          n('i4UL'),
          n('vfdX'),
          n('ERkP')),
        b = n.n(f),
        v = n('jHSc'),
        _ = n('lUZE'),
        w = 'Biz_Profile_Save_Button',
        E = 'Opt_out_test_id_app_text',
        C = 'Opt_Out_Link_Button',
        x = 'Logged_User_Screen_name',
        T = n('MWbm'),
        I = n('/yvb'),
        S = n('j7Bv'),
        k = n('t62R'),
        B = n('eb3s'),
        z = n('rHpw'),
        P = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(u()(e), 'state', { showOptOutModal: !1 }),
              y()(u()(e), '_handleShowOptOutModal', function () {
                e.setState({ showOptOutModal: !0 })
              }),
              y()(u()(e), '_handleModalCancel', function () {
                e.setState({ showOptOutModal: !1 })
              }),
              y()(u()(e), '_handleModalConfirmed', function () {
                e.setState({ showOptOutModal: !1 }, function () {
                  e.props.onOptOut()
                })
              }),
              y()(u()(e), '_handleCancel', function () {
                var t = e.props,
                  n = t.history,
                  a = t.loggedInUser,
                  o = a ? '/'.concat(a.screen_name) : '/login'
                n.goBack({ backLocation: o })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.business.hidden,
                    n = e.email,
                    a = e.history,
                    o = b.a.createElement(
                      I.a,
                      { onPress: this._handleCancel, size: 'small', type: 'brandFilled' },
                      t ? 'OK' : 'Done',
                    )
                  return b.a.createElement(
                    v.b,
                    {
                      history: a,
                      onBackClick: this._handleCancel,
                      rightControl: o,
                      title: t ? 'Business Profile' : 'Business Profile - Application',
                    },
                    b.a.createElement(
                      T.a,
                      { style: D.container },
                      b.a.createElement(
                        T.a,
                        { style: D.margin },
                        b.a.createElement(S.a, { Icon: _.a, size: 'large', style: D.centered }),
                        b.a.createElement(
                          k.b,
                          { align: 'center', size: 'headline1', style: D.bold },
                          b.a.createElement('br', null),
                          t
                            ? 'You’ve opted out of the Twitter Business Profile pilot'
                            : 'Your application was submitted!',
                        ),
                        b.a.createElement(
                          k.b,
                          { align: 'center', style: D.margin },
                          t ? null : this._renderBeInTouchMessage(n),
                        ),
                        b.a.createElement(
                          k.b,
                          { align: 'center', style: D.bigMarginTop, testID: E },
                          t ? null : this._renderOptOutMessage(),
                        ),
                      ),
                      this._renderOptOutModal(),
                    ),
                  )
                },
              },
              {
                key: '_renderOptOutModal',
                value: function () {
                  var e = this.props.loggedInUser
                  return this.state.showOptOutModal
                    ? b.a.createElement(B.a, {
                        confirmButtonLabel: 'Opt out',
                        headline: 'Do you want to opt out of the Twitter Business Profile pilot?',
                        onCancel: this._handleModalCancel,
                        onConfirm: this._handleModalConfirmed,
                        text: ''.concat('Business Profile features will be removed from @').concat(e.screen_name),
                        withForwardFocusOnConfirm: !0,
                      })
                    : null
                },
              },
              {
                key: '_renderOptOutMessage',
                value: function () {
                  return b.a.createElement(
                    k.b,
                    null,
                    'You can',
                    ' ',
                    b.a.createElement(
                      k.b,
                      { accessibilityRole: 'button', color: 'link', onPress: this._handleShowOptOutModal, testID: C },
                      'opt out of Twitter Business Profile',
                    ),
                    ' ',
                    'at any time.',
                  )
                },
              },
              {
                key: '_renderBeInTouchMessage',
                value: function (e) {
                  return b.a.createElement(
                    k.b,
                    null,
                    'We’ll be in touch. All communication about the Twitter Business Profile pilot will be sent to the email you provided: '.concat(
                      null != e ? e : '',
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        D = z.a.create(function (e) {
          return {
            margin: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginTop: e.componentDimensions.gutterVertical,
            },
            bigMarginTop: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginTop: e.spaces.space64 },
            centered: { alignSelf: 'center' },
            bold: { fontWeight: 'bold' },
            container: { paddingBottom: e.spaces.space64 },
          }
        }),
        L = n('zh9S'),
        O = n('YeSc'),
        M = n('vEo5'),
        F = n('1YZw'),
        H = n('G6rE'),
        A = n('rxPX'),
        R = n('0KEI')
      function V(e, t) {
        var n = H.e.selectLoggedInUser(e)
        return n ? O.g(n.id_str, e) : null
      }
      var W = Object(A.a)()
          .propsFromState(function () {
            return { loggedInUser: H.e.selectLoggedInUser, bizProfile: V, email: M.selectFirstEmail }
          })
          .propsFromActions(function () {
            return {
              addToast: F.b,
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_BIZ_PROFILE_SCREEN',
              ),
              googleAnalyticsPageView: L.a,
              scribePageImpression: L.d,
              createBusinessProfile: O.a,
              fetchUserBizProfile: O.b,
              fetchDevices: M.fetchDevices,
              hideBusinessProfile: O.d,
            }
          })
          .withAnalytics(),
        K = n('Dtul'),
        U =
          (n('iKE+'),
          n('1LXv'),
          n('e/gN'),
          n('DZ+c'),
          n('3voH'),
          n('3uku'),
          n('dlmX'),
          new RegExp('^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$')),
        N = new RegExp('^[0-9]{10}$'),
        Y = new RegExp('^[0-9]{5}$'),
        j = [
          'category',
          'businessName',
          'website',
          'country',
          'state',
          'email',
          'countryCode',
          'phoneNumber',
          'address',
          'timezone',
          'city',
          'zipCode',
        ],
        G = j.filter(function (e) {
          return 'country' !== e && 'countryCode' !== e && 'timezone' !== e && 'state' !== e
        }),
        X = Object.freeze({
          phoneNumber: function (e) {
            return e.startsWith('+') || e.startsWith('(1)') || e.startsWith('00')
              ? 'Please enter phone number without country code'
              : N.test(e)
              ? void 0
              : 'Please enter a valid phone number'
          },
          email: function (e) {
            if (!U.test(e)) return 'Please enter a valid email'
          },
          zipCode: function (e) {
            if (!Y.test(e)) return 'Zip code must be 5 digits length'
          },
        })
      function q(e, t, n) {
        var a
        if ('' === t) a = 'Field is invalid'
        else if (X[e]) {
          a = (0, X[e])(t)
        }
        return a ? n.set(e, a) : n.delete(e), n
      }
      var Z = n('G1WX'),
        J = n('4zmP'),
        $ = n('p+r5'),
        Q = n('e0ey'),
        ee = n('6XNv'),
        te = n('3JAx'),
        ne = n('v6aA'),
        ae =
          (n('lTEL'),
          n('m9LP'),
          n('87if'),
          n('kYxP'),
          n('Blm6'),
          n('M+/F'),
          n('TJCb'),
          n('tQbP'),
          n('kFen'),
          n('qd3W'),
          ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
        oe = [
          { label: 'Don’t show hours', value: '' },
          { label: 'Always open', value: 'AlwaysOpen' },
          { label: 'Scheduled hours', value: 'RegularHours' },
        ],
        re = [
          'AK',
          'AL',
          'AR',
          'AS',
          'AZ',
          'CA',
          'CO',
          'CT',
          'DC',
          'DE',
          'FL',
          'GA',
          'GU',
          'HI',
          'IA',
          'ID',
          'IL',
          'IN',
          'KS',
          'KY',
          'LA',
          'MA',
          'MD',
          'ME',
          'MI',
          'MN',
          'MO',
          'MP',
          'MS',
          'MT',
          'NC',
          'ND',
          'NE',
          'NH',
          'NJ',
          'NM',
          'NV',
          'NY',
          'OH',
          'OK',
          'OR',
          'PA',
          'PR',
          'RI',
          'SC',
          'SD',
          'TN',
          'TX',
          'UT',
          'VA',
          'VI',
          'VT',
          'WA',
          'WI',
          'WV',
          'WY',
        ].map(function (e) {
          return { value: e, label: e }
        }),
        ie = [
          { value: 'America/Chicago', label: 'Central Daylight Time (America/Chicago)' },
          { value: 'Pacific/Honolulu', label: 'Hawaii Standard Time (Pacific/Honolulu)' },
          { value: 'America/Juneau', label: 'Alaska Daylight Time (America/Juneau)' },
          { value: 'America/Los_Angeles', label: 'Pacific Daylight Time (America/Los Angeles)' },
          { value: 'America/New_York', label: 'Eastern Daylight Time (America/New York)' },
          { value: 'America/Denver', label: 'Mountain Daylight Time (America/Denver)' },
          { value: 'America/Phoenix', label: 'Mountain Standard Time (America/Phoenix)' },
        ].sort(function (e, t) {
          return e.label >= t.label ? 1 : -1
        }),
        le = ['00', '15', '30', '45'],
        se = Array(24)
          .fill(0)
          .map(function (e, t) {
            return t
          })
          .flatMap(function (e) {
            return le.map(function (t) {
              var n = e >= 12 ? 'PM' : 'AM'
              return {
                label: ''
                  .concat((0 === e ? 12 : e > 12 ? e - 12 : e).toString(), ':')
                  .concat(t, ' ')
                  .concat(n),
                value: ''.concat(e).concat(t),
              }
            })
          }),
        ce = {
          website: '',
          email: '',
          countryCode: '+1',
          phoneNumber: '',
          address: '',
          openHoursType: 'RegularHours',
          allowCall: !0,
          allowText: !0,
          allowEmail: !0,
          getDirections: !0,
          acceptTYC: !1,
          regularOpenHours: ae.map(function (e) {
            return { enabled: !1, day: e, slots: [] }
          }),
          country: 'us',
          allowUpdates: !1,
          state: re[0].value,
          businessName: '',
          category: '',
          timezone: ie[0].value,
          errors: new Map(),
          city: '',
          zipCode: '',
          showWarningModalClose: !1,
        }
      function ue(e) {
        var t, n
        return (
          3 === e.length
            ? ((t = parseInt(e.slice(0, 1), 10)), (n = parseInt(e.slice(1, 3), 10)))
            : ((t = parseInt(e.slice(0, 2), 10)), (n = parseInt(e.slice(2, 4), 10))),
          { hour: t, minute: n }
        )
      }
      function de(e) {
        if (!e) return ''
        var t = e.hour,
          n = e.minute,
          a = n && 0 !== n ? (null == n ? void 0 : n.toString()) : '00'
        return ''.concat(null != t ? t : '').concat(a)
      }
      function pe(e) {
        var t = e.allowUpdates,
          n = e.businessName
        return { categories: [{ name: e.category }], name: n, consent_marketing_updates: t }
      }
      function he(e) {
        var t = e.allowCall,
          n = e.allowEmail,
          a = e.allowText
        return { show_directions: e.getDirections, enable_call: t, enable_sms: a, enable_email: n }
      }
      function me(e) {
        var t = e.address,
          n = e.city,
          a = e.country,
          o = e.countryCode,
          r = e.email,
          i = e.openHoursType,
          l = e.phoneNumber,
          s = e.regularOpenHours,
          c = e.state,
          u = e.timezone,
          d = e.website
        return {
          website: { expanded_url: d, display_url: d },
          address: { address_line1: t, city: n, country: a, administrative_area: c, postal_code: e.zipCode },
          contact: { phone: { number: l, country_code: o }, email: { email_address: r } },
          open_times: {
            open_times_type: i,
            regular:
              'RegularHours' === i && s
                ? (function (e) {
                    return e.map(function (e) {
                      var t
                      return { weekday: e.day, slots: e.enabled && null !== (t = e.slots) && void 0 !== t ? t : [] }
                    })
                  })(s)
                : [],
          },
          timezone: 'RegularHours' === i ? { name: u } : void 0,
        }
      }
      var ge = n('iY63'),
        ye = n('hOZg'),
        fe = Object.freeze({
          Monday: 'Monday',
          Tuesday: 'Tuesday',
          Wednesday: 'Wednesday',
          Thursday: 'Thursday',
          Friday: 'Friday',
          Saturday: 'Saturday',
          Sunday: 'Sunday',
        }),
        be = 'Use numbers only',
        ve = { page: 'settings', section: 'bizProfile' },
        _e = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(u()(e), 'state', ce),
              y()(u()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.fetchDevices,
                  a = t.fetchUserBizProfile,
                  o = t.loggedInUser
                o &&
                  a(o.id_str).then(function () {
                    return n()
                  })
              }),
              y()(u()(e), '_setRef', function (t) {
                e._refError = t
              }),
              y()(u()(e), '_handleModalCancel', function () {
                e.setState({ showWarningModalClose: !1 })
              }),
              y()(u()(e), '_handleModalConfirmed', function () {
                var t = e.props.history
                e.setState({ showWarningModalClose: !1 }), t.goBack()
              }),
              y()(u()(e), '_handleCancel', function () {
                e.setState({ showWarningModalClose: !0 })
              }),
              y()(u()(e), '_handleSubmit', function () {
                e._saveChanges()
              }),
              y()(u()(e), '_handleDayCheckboxChange', function (t, n) {
                var a = {
                  day: t,
                  enabled: n,
                  slots: n ? [{ open: { hour: 10, minute: 0 }, close: { hour: 19, minute: 0 } }] : [],
                }
                e._replaceDailyInfo(a)
              }),
              y()(u()(e), '_handleOpenTimesTypeChange', function (t, n) {
                'RegularHours' === n || 'AlwaysOpen' === n
                  ? e.setState({ openHoursType: n })
                  : e.setState({ openHoursType: void 0 })
              }),
              y()(u()(e), '_handleChangeAllowSetting', function (t, n) {
                e.setState(y()({}, t, n))
              }),
              y()(u()(e), '_handleOnBlurEventForBizProfiles', function (t) {
                var n = t.currentTarget,
                  a = q(n.name, n.value, e.state.errors)
                e.setState({ errors: a })
              }),
              y()(u()(e), '_handleHtmlEventForBizProfiles', function (t) {
                var n = t.currentTarget,
                  a = n.name,
                  o = n.value
                e.setState(y()({}, a, o))
              }),
              y()(u()(e), '_handleStateSelection', function (t, n) {
                e.setState({ state: t })
              }),
              y()(u()(e), '_handleTimezoneSelection', function (t, n) {
                e.setState({ timezone: t })
              }),
              y()(u()(e), '_blockHistory', function (t, n) {
                var a = e.state.showWarningModalClose
                return (
                  !(
                    G.find(function (t) {
                      return '' !== e.state[t]
                    }) && !a
                  ) || (e.setState({ showWarningModalClose: !0 }), !1)
                )
              }),
              y()(u()(e), '_handleOptOut', function () {
                var t = e.props,
                  n = t.bizProfile,
                  a = t.createLocalApiErrorHandler,
                  o = t.hideBusinessProfile,
                  r = t.loggedInUser,
                  i = (null != n ? n : {}).business
                r && i && o(r.id_str, i.rest_id).catch(a({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    n = e.history,
                    a = e.loggedInUser,
                    o = e.scribePageImpression
                  a ? (this._handleFetch(), o(ve), t(ve)) : n.push('/login'),
                    (this._unlockReload = K.a.acquire()),
                    (this._unblockHistory = this.props.history.block(this._blockHistory))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unlockReload()
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._refError && this._refError.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.bizProfile,
                    a = t.email,
                    o = t.history,
                    r = t.location,
                    i = t.loggedInUser,
                    l = t.match,
                    s = null != n ? n : {},
                    c = s.business,
                    u = s.fetchStatus
                  return i
                    ? c
                      ? b.a.createElement(P, {
                          business: c,
                          email: a,
                          history: o,
                          location: r,
                          loggedInUser: i,
                          match: l,
                          onOptOut: this._handleOptOut,
                        })
                      : b.a.createElement(Z.a, {
                          fetchStatus: u,
                          onRequestRetry: this._handleFetch,
                          render: function () {
                            return e._render()
                          },
                        })
                    : null
                },
              },
              {
                key: '_render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.loggedInUser,
                    a = this.state,
                    o = a.acceptTYC,
                    r = a.address,
                    i = a.allowCall,
                    l = a.allowEmail,
                    s = a.allowText,
                    c = a.allowUpdates,
                    u = a.businessName,
                    d = a.category,
                    p = a.city,
                    h = a.email,
                    m = a.errors,
                    g = a.getDirections,
                    y = a.openHoursType,
                    f = a.phoneNumber,
                    E = a.showWarningModalClose,
                    C = a.state,
                    B = a.website,
                    z = a.zipCode,
                    P = m.size > 0 || !o,
                    D = b.a.createElement(
                      I.a,
                      { disabled: P, onPress: this._handleSubmit, size: 'small', testID: w, type: 'primaryFilled' },
                      'Submit',
                    )
                  return b.a.createElement(
                    v.b,
                    {
                      history: t,
                      onBackClick: this._handleCancel,
                      rightControl: D,
                      title: 'Business Profile - Application',
                    },
                    b.a.createElement(
                      T.a,
                      { style: we.container },
                      b.a.createElement(
                        T.a,
                        { style: we.margin },
                        b.a.createElement(S.a, { Icon: _.a, size: 'large', style: we.centered }),
                        b.a.createElement(
                          k.b,
                          { align: 'center', size: 'headline1', weight: 'bold' },
                          b.a.createElement('br', null),
                          'Apply for the Twitter Business Profile pilot',
                        ),
                        b.a.createElement(
                          k.b,
                          { align: 'center', style: we.margin },
                          'Use this form to apply for the Twitter Business Profile pilot. Keep an eye out for an email letting you know if you’re approved and when to expect changes to go live.',
                        ),
                        b.a.createElement(
                          T.a,
                          { style: [we.bigMargin, we.bold] },
                          b.a.createElement(J.a, {
                            text: 'The information you provide below will appear on your new, public profile.',
                          }),
                        ),
                        b.a.createElement(
                          k.b,
                          { align: 'center', size: 'body', style: [we.deepGray, we.marginTop], weight: 'bold' },
                          'All fields are required.',
                        ),
                      ),
                      b.a.createElement(
                        k.b,
                        { size: 'headline1', style: we.sectionMargin, weight: 'bold' },
                        'Your business',
                      ),
                      b.a.createElement(
                        T.a,
                        { style: we.bigMargin },
                        b.a.createElement(k.b, { size: 'subtext3' }, 'Twitter username'),
                        b.a.createElement(k.b, { testID: x }, '@', null == n ? void 0 : n.screen_name),
                      ),
                      b.a.createElement($.a, {
                        defaultValue: u,
                        errorText: m.get('businessName'),
                        invalid: m.has('businessName'),
                        label: 'Business name',
                        name: 'businessName',
                        onBlur: this._handleOnBlurEventForBizProfiles,
                        onChange: this._handleHtmlEventForBizProfiles,
                        showValidationIcon: !0,
                      }),
                      b.a.createElement($.a, {
                        defaultValue: d,
                        errorText: m.get('category'),
                        invalid: m.has('category'),
                        label: 'Type of business (e.g., restaurant, retail store, agency)',
                        name: 'category',
                        onBlur: this._handleOnBlurEventForBizProfiles,
                        onChange: this._handleHtmlEventForBizProfiles,
                        showValidationIcon: !0,
                      }),
                      b.a.createElement(
                        k.b,
                        { size: 'headline1', style: we.sectionMargin, weight: 'bold' },
                        'Business contact info',
                      ),
                      b.a.createElement($.a, {
                        defaultValue: h,
                        errorText: m.get('email'),
                        invalid: m.has('email'),
                        label: 'Business email',
                        name: 'email',
                        onBlur: this._handleOnBlurEventForBizProfiles,
                        onChange: this._handleHtmlEventForBizProfiles,
                        showValidationIcon: !0,
                        type: 'email',
                      }),
                      b.a.createElement(
                        T.a,
                        null,
                        b.a.createElement(Q.a, {
                          checked: l,
                          helpText: 'People can email this address directly from your profile.',
                          label: 'Allow emails from profile link',
                          name: 'allowEmail',
                          onChange: this._handleChangeAllowSetting,
                          type: 'switch',
                        }),
                      ),
                      b.a.createElement(
                        T.a,
                        { style: we.row },
                        b.a.createElement($.a, {
                          defaultValue: '+1',
                          editable: !1,
                          label: 'Code',
                          name: 'countryCode',
                          onChange: this._handleHtmlEventForBizProfiles,
                          style: we.smallInput,
                          type: 'tel',
                        }),
                        b.a.createElement($.a, {
                          defaultValue: f,
                          errorText: m.get('phoneNumber'),
                          helperText: be,
                          inputMode: 'tel',
                          invalid: m.has('phoneNumber'),
                          label: 'Phone number',
                          maxLength: 10,
                          name: 'phoneNumber',
                          onBlur: this._handleOnBlurEventForBizProfiles,
                          onChange: this._handleHtmlEventForBizProfiles,
                          showValidationIcon: !0,
                          style: we.expand,
                          type: 'number',
                        }),
                      ),
                      b.a.createElement(
                        T.a,
                        null,
                        b.a.createElement(Q.a, {
                          checked: i,
                          helpText: 'Standard Rates Apply',
                          label: 'Allow customer voice calls from profile link',
                          name: 'allowCall',
                          onChange: this._handleChangeAllowSetting,
                          type: 'switch',
                        }),
                        b.a.createElement(Q.a, {
                          checked: s,
                          helpText: 'Standard Rates Apply',
                          label: 'Allow customer text messages from profile link',
                          name: 'allowText',
                          onChange: this._handleChangeAllowSetting,
                          type: 'switch',
                        }),
                      ),
                      b.a.createElement($.a, {
                        defaultValue: B,
                        errorText: m.get('website'),
                        invalid: m.has('website'),
                        label: 'Business website',
                        name: 'website',
                        onBlur: this._handleOnBlurEventForBizProfiles,
                        onChange: this._handleHtmlEventForBizProfiles,
                        showValidationIcon: !0,
                        type: 'url',
                      }),
                      b.a.createElement(
                        k.b,
                        { size: 'headline1', style: we.sectionMargin, weight: 'bold' },
                        'Business location',
                      ),
                      b.a.createElement($.a, {
                        defaultValue: r,
                        errorText: m.get('address'),
                        invalid: m.has('address'),
                        label: 'Street address',
                        name: 'address',
                        onBlur: this._handleOnBlurEventForBizProfiles,
                        onChange: this._handleHtmlEventForBizProfiles,
                        showValidationIcon: !0,
                      }),
                      b.a.createElement($.a, {
                        defaultValue: p,
                        errorText: m.get('city'),
                        invalid: m.has('city'),
                        label: 'City',
                        name: 'city',
                        onBlur: this._handleOnBlurEventForBizProfiles,
                        onChange: this._handleHtmlEventForBizProfiles,
                        showValidationIcon: !0,
                      }),
                      b.a.createElement(
                        T.a,
                        { style: we.row },
                        b.a.createElement(
                          T.a,
                          { style: [we.margin, we.expand] },
                          b.a.createElement(ee.a, {
                            label: 'State',
                            onChange: this._handleStateSelection,
                            options: re,
                            value: C,
                          }),
                        ),
                        b.a.createElement($.a, {
                          defaultValue: z,
                          errorText: m.get('zipCode'),
                          helperText: be,
                          invalid: m.has('zipCode'),
                          label: 'ZIP/Postal code',
                          name: 'zipCode',
                          onBlur: this._handleOnBlurEventForBizProfiles,
                          onChange: this._handleHtmlEventForBizProfiles,
                          showValidationIcon: !0,
                          style: we.expand,
                          type: 'number',
                        }),
                      ),
                      b.a.createElement(
                        T.a,
                        null,
                        b.a.createElement(Q.a, {
                          checked: g,
                          label: 'Allow driving directions',
                          name: 'getDirections',
                          onChange: this._handleChangeAllowSetting,
                          type: 'switch',
                        }),
                      ),
                      b.a.createElement(
                        k.b,
                        { size: 'headline1', style: we.sectionMargin, weight: 'bold' },
                        'Business hours',
                      ),
                      b.a.createElement(te.a, {
                        name: 'openHoursType',
                        onChange: this._handleOpenTimesTypeChange,
                        options: oe,
                        value: null != y ? y : '',
                      }),
                      this._renderRegularOpenHours(),
                      b.a.createElement(
                        k.b,
                        { size: 'headline1', style: we.sectionMargin, weight: 'bold' },
                        'Want more info from Twitter for Business?',
                      ),
                      b.a.createElement(
                        T.a,
                        null,
                        b.a.createElement(Q.a, {
                          checked: c,
                          helpText:
                            'By choosing to get updates, you agree to receive marketing communications via email from Twitter. You may unsubscribe at any time.',
                          label: 'Get the latest news, updates, and resources from Twitter for Business.',
                          name: 'allowUpdates',
                          onChange: this._handleChangeAllowSetting,
                        }),
                        b.a.createElement(
                          T.a,
                          { style: we.margin },
                          b.a.createElement(k.b, null, this._renderTermsAndConditions()),
                        ),
                        b.a.createElement(Q.a, {
                          checked: o,
                          label: 'I have read and accept these Terms and Conditions.',
                          name: 'acceptTYC',
                          onChange: this._handleChangeAllowSetting,
                        }),
                      ),
                      E ? this._renderCloseModalWarning() : null,
                    ),
                  )
                },
              },
              {
                key: '_renderTermsAndConditions',
                value: function () {
                  return b.a.createElement(
                    k.b,
                    null,
                    'By accepting these terms and submitting the information above, you represent and warrant that you are the owner of the entity listed on your Business Profile and/or have the authority to bind such entity to these terms. Participation in the Twitter Business Profile pilot is not guaranteed and is subject to the Twitter User Agreement including our',
                    ' ',
                    b.a.createElement(
                      k.b,
                      { accessibilityRole: 'button', link: 'https://twitter.com/tos' },
                      'Terms of Service',
                    ),
                    ' ',
                    'and the',
                    ' ',
                    b.a.createElement(
                      k.b,
                      { accessibilityRole: 'button', link: 'https://legal.twitter.com/ads-terms/us.html' },
                      'Twitter Master Services Agreement',
                    ),
                    ', as well as the Twitter Rules and Policies, including the',
                    ' ',
                    b.a.createElement(
                      k.b,
                      { accessibilityRole: 'button', link: 'http://www.twitter.com/adspolicy' },
                      'Twitter Ads Policy Guidelines',
                    ),
                    '. You are responsible for your Business Profile and any information provided as part of your Business Profile and must ensure these comply with all applicable laws, rules, and regulations. You should only provide information that you are comfortable sharing with others, including by publicly displaying your business information on your Business Profile, as applicable. Do not provide information, including for example a business phone number, business location or website, other than that of the actual business and that is under the direct control of your business. Our',
                    ' ',
                    b.a.createElement(
                      k.b,
                      { accessibilityRole: 'button', link: 'https://twitter.com/privacy' },
                      'privacy policy',
                    ),
                    ' ',
                    'describes how we handle information provided to us. To submit a request related to access, modification or deletion of any information provided to us as part of this pilot, please contact:',
                    b.a.createElement(
                      k.b,
                      { accessibilityRole: 'button', link: 'mailto:pilot_business_profile@twitter.com' },
                      'pilot_business_profile@twitter.com',
                    ),
                  )
                },
              },
              {
                key: '_renderRegularOpenHours',
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.openHoursType,
                    a = t.validationError
                  return 'RegularHours' !== n
                    ? null
                    : b.a.createElement(
                        T.a,
                        { ref: this._setRef },
                        null != a && a.reason ? b.a.createElement(J.a, { text: a.reason, type: 'danger' }) : null,
                        ae.map(function (t, n) {
                          return e._renderDailyInformationAndSlots(t)
                        }),
                        b.a.createElement(ee.a, {
                          label: 'Time zone',
                          onChange: this._handleTimezoneSelection,
                          options: ie,
                          style: we.margin,
                          withEmptyOption: !0,
                        }),
                      )
                },
              },
              {
                key: '_renderDailyInformationAndSlots',
                value: function (e) {
                  var t = this,
                    n = this.state.regularOpenHours.find(function (t) {
                      return t.day === e
                    })
                  return b.a.createElement(
                    T.a,
                    { key: e, style: [we.row, we.marginTop, we.dailyInfo] },
                    b.a.createElement(
                      T.a,
                      { style: we.dayToggle },
                      b.a.createElement(Q.a, {
                        checked: null == n ? void 0 : n.enabled,
                        key: 'flag'.concat(e),
                        label: fe[e],
                        name: e,
                        onChange: function (n, a) {
                          return t._handleDayCheckboxChange(e, a)
                        },
                        type: 'switch',
                      }),
                    ),
                    b.a.createElement(
                      T.a,
                      { style: [we.expand, we.centered, (null == n ? void 0 : n.enabled) && we.dayInfo] },
                      null != n && n.enabled ? this._renderDaySlots(n, e) : b.a.createElement(k.b, null, 'Closed'),
                    ),
                  )
                },
              },
              {
                key: '_renderDaySlots',
                value: function (e, t) {
                  var n = this,
                    a = e.slots && e.slots.length > 0 ? e.slots : [{}]
                  return b.a.createElement(
                    T.a,
                    null,
                    a.map(function (a, o) {
                      return b.a.createElement(
                        T.a,
                        { key: 'slot'.concat(t).concat(o), style: o > 0 ? [we.row, we.marginTop] : [we.row] },
                        b.a.createElement(
                          T.a,
                          { style: [we.row, we.expand] },
                          b.a.createElement(ee.a, {
                            key: 'open'.concat(t),
                            label: 'Open at',
                            onChange: function (e, a) {
                              return n._handleOpenTimeChange(e, t, o)
                            },
                            options: se,
                            style: we.timeRange,
                            value: de(a.open),
                          }),
                          b.a.createElement(k.b, { size: 'headline1', style: [we.centered, we.dashMargin] }, '-'),
                          b.a.createElement(ee.a, {
                            key: 'close'.concat(t),
                            label: 'Close at',
                            onChange: function (e) {
                              return n._handleCloseTimeChange(e, t, o)
                            },
                            options: se,
                            style: we.timeRange,
                            value: de(a.close),
                          }),
                        ),
                        b.a.createElement(T.a, { style: [we.centered, we.buttonMargin] }, n._renderDayButton(e, t, o)),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderDayButton',
                value: function (e, t, n) {
                  var a = this
                  return 0 === n
                    ? b.a.createElement(I.a, {
                        disabled: !(null != e && e.enabled),
                        icon: b.a.createElement(ge.a, { key: 'icon'.concat(t), style: we.blue }),
                        key: 'plus'.concat(t),
                        onPress: function (e) {
                          return a._handleAddSlot(t)
                        },
                        size: 'xSmall',
                        style: [we.plusMinusButtons, we.blue],
                        type: 'brandOutlined',
                      })
                    : b.a.createElement(I.a, {
                        disabled: !(null != e && e.enabled),
                        icon: b.a.createElement(ye.a, { key: 'iconMinus'.concat(t).concat(n), style: we.gray }),
                        key: 'minus'.concat(t).concat(n),
                        onPress: function (e) {
                          return a._handleRemoveSlot(t, n)
                        },
                        size: 'xSmall',
                        style: we.plusMinusButtons,
                        type: 'brandText',
                      })
                },
              },
              {
                key: '_renderCloseModalWarning',
                value: function () {
                  return b.a.createElement(B.a, {
                    cancelButtonLabel: 'Cancel',
                    confirmButtonLabel: 'Yes, leave',
                    headline: 'Are you sure you want to leave this form?',
                    onCancel: this._handleModalCancel,
                    onConfirm: this._handleModalConfirmed,
                    text: 'Your responses won’t be saved',
                    withForwardFocusOnConfirm: !0,
                  })
                },
              },
              {
                key: '_saveChanges',
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    a = n.createBusinessProfile,
                    o = n.createLocalApiErrorHandler,
                    r = n.loggedInUser,
                    i =
                      ((e = this.state),
                      j.reduceRight(function (t, n, a, o) {
                        return q(n, e[n], t)
                      }, e.errors))
                  if (i.size > 0) this.setState({ errors: i })
                  else if (r) {
                    var l = pe(this.state),
                      s = me(this.state),
                      c = { businessInput: l, config: he(this.state), venueData: s }
                    a(r.id_str, c)
                      .then(function (e) {
                        var n = e.error
                        t.setState({ errors: i, validationError: n })
                      })
                      .catch(o({ showToast: !0 }))
                  }
                },
              },
              {
                key: '_handleAddSlot',
                value: function (e) {
                  var t = this._getCurrentDaySlot(e),
                    n = t.slots[t.slots.length - 1],
                    a = t.slots.concat({
                      open: { hour: n.close.hour + 1, minute: n.close.minute },
                      close: { hour: n.close.hour + 2, minute: n.close.minute },
                    }),
                    r = o()(o()({}, t), {}, { slots: a })
                  this._replaceDailyInfo(r)
                },
              },
              {
                key: '_handleRemoveSlot',
                value: function (e, t) {
                  var n = this._getCurrentDaySlot(e),
                    a = n.slots.filter(function (e, n) {
                      return n !== t
                    }),
                    r = o()(o()({}, n), {}, { slots: a })
                  this._replaceDailyInfo(r)
                },
              },
              {
                key: '_handleOpenTimeChange',
                value: function (e, t, n) {
                  var a = this._getCurrentDaySlot(t),
                    r = ue(e),
                    i = { close: a.slots[n].close, open: r },
                    l = a.slots.fill(i, n, n + 1),
                    s = o()(o()({}, a), {}, { slots: l })
                  this._replaceDailyInfo(s)
                },
              },
              {
                key: '_handleCloseTimeChange',
                value: function (e, t, n) {
                  var a = this._getCurrentDaySlot(t),
                    r = ue(e),
                    i = { open: a.slots[n].open, close: r },
                    l = 0 === a.slots.length ? [i] : a.slots.fill(i, n, n + 1),
                    s = o()(o()({}, a), {}, { slots: l })
                  this._replaceDailyInfo(s)
                },
              },
              {
                key: '_getCurrentDaySlot',
                value: function (e) {
                  var t = this.state.regularOpenHours,
                    n =
                      t &&
                      t.findIndex(function (t) {
                        return t.day === e
                      })
                  return t[n]
                },
              },
              {
                key: '_replaceDailyInfo',
                value: function (e) {
                  var t,
                    n = this.state.regularOpenHours,
                    a =
                      null !==
                        (t =
                          null == n
                            ? void 0
                            : n.filter(function (t) {
                                return t.day !== e.day
                              })) && void 0 !== t
                        ? t
                        : []
                  this.setState({ regularOpenHours: a.concat(e) })
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      y()(_e, 'contextType', ne.a)
      var we = z.a.create(function (e) {
          return {
            margin: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginTop: e.componentDimensions.gutterVertical,
            },
            bigMargin: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginTop: e.spaces.space16 },
            marginTop: { marginTop: e.componentDimensions.gutterVertical },
            centered: { alignSelf: 'center' },
            closedText: { textVerticalAlign: 'middle' },
            smallInput: { width: '100px' },
            dayToggle: { width: '160px' },
            blue: { color: e.colors.blue500 },
            gray: { color: e.colors.gray700 },
            dailyInfo: { flexWrap: 'wrap', paddingLeft: e.componentDimensions.gutterHorizontal },
            dashMargin: { marginHorizontal: e.spaces.space48 },
            buttonMargin: { marginHorizontal: e.componentDimensions.gutterHorizontal },
            sectionMargin: { marginTop: e.spaces.space32, marginHorizontal: e.componentDimensions.gutterHorizontal },
            timeRange: { minWidth: '120px', flex: 1 },
            row: { flexDirection: 'row' },
            plusMinusButtons: { alignSelf: 'center' },
            bold: { fontWeight: 'bold' },
            dayInfo: { minWidth: '350px' },
            marginRight: { marginRight: e.spaces.space16 },
            smallScreenRanges: { alignSelf: 'flex-end' },
            expand: { flex: 1 },
            container: { paddingBottom: e.spaces.space64 },
            deepGray: { color: e.colors.gray700 },
          }
        }),
        Ee = W(_e)
      t.default = Ee
    },
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return U
      })
      n('yiKp')
      var a = n('97Jx'),
        o = n.n(a),
        r = n('m3Bd'),
        i = n.n(r),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        h = n('5Yy7'),
        m = n.n(h),
        g = n('2VqO'),
        y = n.n(g),
        f = n('KEM+'),
        b = n.n(f),
        v = (n('2G9S'), n('ERkP')),
        _ = n.n(v),
        w = n('38/B'),
        E = n('t62R'),
        C = n('/yvb'),
        x = n('piX5'),
        T = n('3XMw'),
        I = n.n(T),
        S = n('tI3i'),
        k = n.n(S),
        B = n('oQhu'),
        z = n('rHpw'),
        P = n('aITJ'),
        D = n('MWbm'),
        L = n('n5fo'),
        O = n('5emT'),
        M = n('Oib4'),
        F = n('WtWS'),
        H = n('ioan'),
        A = [
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
        R = function (e) {
          return e.length
        },
        V = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R
          return t(e)
        },
        W = I.a.de540c32,
        K = I.a.b4abfdb3,
        U = (function (e) {
          m()(n, e)
          var t = y()(n)
          function n(e) {
            var a
            s()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              b()(p()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              b()(
                p()(a),
                '_getTextInputStyle',
                Object(B.a)(function (e) {
                  return [N.root, !e && N.disabled]
                }),
              ),
              b()(p()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  o = a.state.isPasswordRevealed
                return 'password' === n && t ? (o ? 'text' : 'password') : n
              }),
              b()(p()(a), '_calculateLength', function (e) {
                return V(e, a.props.calculateLength)
              }),
              b()(p()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              b()(p()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  o,
                  r,
                  i = a.props.type,
                  l =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  s =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (o = n.textInputNode) ||
                    void 0 === o ||
                    null === (r = o.validity) ||
                    void 0 === r
                      ? void 0
                      : r.badInput
                return 'number' === i && '' === l && !0 === s
              }),
              b()(p()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              b()(p()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  o = a._calculateLength(n),
                  r = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: o, actualCount: r }), t && t(e)
              }),
              b()(p()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  o = e.currentTarget.value,
                  r = a._calculateLength(o),
                  i = a._getActualCount(o),
                  l = a._getAdjustedMaxLength()
                void 0 !== l && o.length > l && n.length < o.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: r,
                      actualCount: i,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              b()(p()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t(e)
              }),
              b()(p()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  o = t.onKeyPress,
                  r = t.onSubmitEditing
                o && o(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !r || (e.preventDefault(), r(e))
              }),
              b()(p()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                P.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              b()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                P.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              b()(p()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              b()(p()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              b()(p()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  o = e.validLength,
                  r = !!a,
                  i = 'string' == typeof e.value,
                  l = 'string' == typeof t
                k()(
                  !(!l && i && !r),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  k()(!(n && o && o > n), 'Max length should be equal or greater than valid length.'),
                  k()(
                    !((void 0 !== n && n <= 0) || (void 0 !== o && o <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              b()(p()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              b()(p()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              b()(p()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  t = a.getValue(),
                  n = a._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              a._checkComponentPropsUsageCorrectness(e)
            var o = e.defaultValue,
              r = e.value || o || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(r),
                actualCount: R(r),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: r,
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
                      o = t.validLength,
                      r = t.value,
                      i = e.maxLength,
                      l = e.onChange,
                      s = e.validLength,
                      c = e.value
                    ;(s === o && n === i && !!a === !!l && ('string' == typeof r) === ('string' == typeof c)) ||
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
                      o = e.helperText,
                      r = e.style,
                      i = this.state.isFocused,
                      l = this._isFormInvalid()
                    return _.a.createElement(
                      D.a,
                      { style: [Y.root, r] },
                      _.a.createElement(
                        D.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            x.a.border,
                            Y.textInputFormStyle,
                            l && x.a.invalidBorderColor,
                            i && l && x.a.focusedBorderInvalid,
                            i && !l && x.a.focusedBorderValid,
                            !n && x.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          D.a,
                          { style: Y.textInputFormWrapper },
                          _.a.createElement(
                            D.a,
                            { style: Y.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        D.a,
                        { style: [Y.sidePadding, Y.underTextInputForm] },
                        _.a.createElement(
                          D.a,
                          { style: Y.subtextWrapper },
                          o ? this._renderHelperText() : null,
                          l && a ? this._renderErrorText() : null,
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
                      E.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          Y.textInputHeaderItem,
                          a && Y.placeholderText,
                          !w.a.reducedMotionEnabled && Y.transition,
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
                      r = (e.style, e.type, e.validLength, i()(e, A))
                    return _.a.createElement(
                      D.a,
                      { style: N.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        E.b,
                        { size: 'headline1', style: N.wrapper },
                        _.a.createElement(
                          H.a,
                          o()({}, r, {
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
                          { style: Y.passwordVisibilityIconContainer },
                          _.a.createElement(C.a, {
                            accessibilityLabel: a ? K : W,
                            focusable: !0,
                            hoverLabel: { label: a ? K : W },
                            icon: a ? _.a.createElement(L.a, null) : _.a.createElement(O.a, null),
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
                        E.b,
                        { color: 'gray700', size: 'subtext2', style: Y.subtext },
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
                        E.b,
                        { color: 'red500', size: 'subtext2', style: Y.subtext },
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
                      a = t && I.a.ia24dc8c(t),
                      o = I.a.ia24dc8c(e)
                    return _.a.createElement(
                      D.a,
                      { accessibilityLiveRegion: 'polite', style: [Y.textInputHeaderItem, Y.displayCount] },
                      _.a.createElement(
                        E.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(o, ' / ').concat(a) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [Y.icon, t && Y.focusedIcon]
                    return e && _.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? _.a.createElement(M.a, { style: [Y.validationIcon, x.a.invalidColor] })
                      : _.a.createElement(F.a, { style: [Y.validationIcon, x.a.validColor] })
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
                      o = 'string' == typeof a ? V(a, n) : 0
                    return 'string' == typeof a && o !== t.displayCount
                      ? { displayCount: o, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(_.a.Component)
      b()(U, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (U.propTypes = {})
      var N = z.a.create(function (e) {
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
        Y = z.a.create(function (e) {
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
