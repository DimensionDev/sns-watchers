;(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    '6XNv': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var a = n('RhWx'),
        r = n.n(a),
        o = n('VrFO'),
        l = n.n(o),
        i = n('Y9Ll'),
        s = n.n(i),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        h = n.n(d),
        p = n('N+ot'),
        m = n.n(p),
        f = n('AuHH'),
        y = n.n(f),
        g = n('KEM+'),
        b = n.n(g),
        v = (n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n.n(v),
        w = n('t62R'),
        E = n('piX5'),
        C = n('4r2z'),
        T = n('FG+G'),
        O = n('rHpw'),
        B = (n('aWzz'), n('k/Ka')),
        P = n('shC7'),
        S = n('MWbm')
      function z(e) {
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
            a = y()(e)
          if (t) {
            var r = y()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return m()(this, n)
        }
      }
      function k(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var x = _.a.forwardRef(function (e, t) {
          return Object(B.a)('select', D(D({}, e), {}, { ref: t }))
        }),
        I = function (e) {
          return Object(B.a)('option', e)
        },
        R = 1,
        H = (function (e) {
          h()(n, e)
          var t = z(n)
          function n(e) {
            var a
            return (
              l()(this, n),
              (a = t.call(this, e)),
              b()(u()(a), '_selectRef', _.a.createRef()),
              b()(u()(a), 'state', { isFocused: !1 }),
              b()(u()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  o = e.target,
                  l = o.selectedIndex,
                  i = o.value
                n && n(i, l - (r ? 1 : 0))
              }),
              b()(u()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              b()(u()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t()
              }),
              (a._id = 'SELECTOR_'.concat(R)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (R += 1),
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
                    o = e.hasError,
                    l = e.helperText,
                    i = e.options,
                    s = e.style,
                    c = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    h = this.state.isFocused,
                    p = w.b.getLanguage(),
                    m =
                      'ja' === p
                        ? O.a.theme.fontFamilies.japan
                        : P.a.getConstants().isRTL || C.a.isLocaleRTL(p)
                        ? O.a.theme.fontFamilies.rtl
                        : O.a.theme.fontFamilies.normal,
                    f = void 0 === o ? !!a : o,
                    y = new Set()
                  a && y.add(this._errorID), t && y.add(t), l && y.add(this._helperID)
                  var g = y.size ? r()(y).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      S.a,
                      {
                        style: [
                          E.a.border,
                          M.container,
                          n && E.a.disabled,
                          h && E.a.focusedBorderValid,
                          f && E.a.invalidBorderColor,
                          h && f && E.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        x,
                        {
                          accessibilityDescribedBy: g,
                          accessibilityInvalid: f,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [M.select, { fontFamily: m }, n && E.a.disabled],
                          testID: c || '',
                          value: u,
                        },
                        d ? _.a.createElement(I, { disabled: !0, style: M.option, value: '' }) : null,
                        i.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return _.a.createElement(
                            I,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: M.option, value: a },
                            n,
                          )
                        }),
                      ),
                      _.a.createElement(T.a, {
                        style: [M.dropdownCaret, h && E.a.validColor, (o || a) && E.a.invalidColor],
                      }),
                    ),
                    l ? this._renderHelperText() : null,
                    f && a ? this._renderErrorText() : null,
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
                    r = this.state.isFocused
                  return _.a.createElement(
                    w.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: M.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return _.a.createElement(
                    S.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'gray700', nativeID: this._helperID, style: M.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return _.a.createElement(
                    S.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'red500', nativeID: this._errorID, style: M.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      b()(H, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (H.propTypes = {})
      var M = O.a.create(function (e) {
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
      t.a = H
    },
    Ssqp: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BizProfileScreen', function () {
          return Te
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        l = n.n(o),
        i = n('1Pcy'),
        s = n.n(i),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('N+ot'),
        h = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        f = n('KEM+'),
        y = n.n(f),
        g =
          (n('yH/f'),
          n('2G9S'),
          n('ho0z'),
          n('hBpG'),
          n('WNMA'),
          n('KqXw'),
          n('1Iuc'),
          n('z84I'),
          n('LW0h'),
          n('i4UL'),
          n('vfdX'),
          n('ERkP')),
        b = n.n(g),
        v = n('jHSc'),
        _ = n('lUZE'),
        w = 'Biz_Profile_Save_Button',
        E = 'Opt_out_test_id_app_text',
        C = 'Opt_Out_Link_Button',
        T = 'Logged_User_Screen_name',
        O = n('MWbm'),
        B = n('/yvb'),
        P = n('j7Bv'),
        S = n('t62R'),
        z = n('eb3s'),
        k = n('rHpw')
      function D(e) {
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var x = (function (e) {
          u()(n, e)
          var t = D(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', { showOptOutModal: !1 }),
              y()(s()(e), '_handleShowOptOutModal', function () {
                e.setState({ showOptOutModal: !0 })
              }),
              y()(s()(e), '_handleModalCancel', function () {
                e.setState({ showOptOutModal: !1 })
              }),
              y()(s()(e), '_handleModalConfirmed', function () {
                e.setState({ showOptOutModal: !1 }, function () {
                  e.props.onOptOut()
                })
              }),
              y()(s()(e), '_handleCancel', function () {
                var t = e.props,
                  n = t.history,
                  a = t.loggedInUser,
                  r = a ? '/'.concat(a.screen_name) : '/login'
                n.goBack({ backLocation: r })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.business.hidden,
                    n = e.email,
                    a = e.history,
                    r = b.a.createElement(
                      B.a,
                      { onPress: this._handleCancel, size: 'small', type: 'brandFilled' },
                      t ? 'OK' : 'Done',
                    )
                  return b.a.createElement(
                    v.b,
                    {
                      history: a,
                      onBackClick: this._handleCancel,
                      rightControl: r,
                      title: t ? 'Business Profile' : 'Business Profile - Application',
                    },
                    b.a.createElement(
                      O.a,
                      { style: I.container },
                      b.a.createElement(
                        O.a,
                        { style: I.margin },
                        b.a.createElement(P.a, { Icon: _.a, size: 'large', style: I.centered }),
                        b.a.createElement(
                          S.b,
                          { align: 'center', size: 'headline1', style: I.bold },
                          b.a.createElement('br', null),
                          t
                            ? 'You’ve opted out of the Twitter Business Profile pilot'
                            : 'Your application was submitted!',
                        ),
                        b.a.createElement(
                          S.b,
                          { align: 'center', style: I.margin },
                          t ? null : this._renderBeInTouchMessage(n),
                        ),
                        b.a.createElement(
                          S.b,
                          { align: 'center', style: I.bigMarginTop, testID: E },
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
                    ? b.a.createElement(z.a, {
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
                    S.b,
                    null,
                    'You can',
                    ' ',
                    b.a.createElement(
                      S.b,
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
                    S.b,
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
        I = k.a.create(function (e) {
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
        R = n('zh9S'),
        H = n('YeSc'),
        M = n('vEo5'),
        A = n('1YZw'),
        F = n('G6rE'),
        L = n('rxPX'),
        W = n('0KEI')
      function j(e, t) {
        var n = F.e.selectLoggedInUser(e)
        return n ? H.g(n.id_str, e) : null
      }
      var N = Object(L.a)()
          .propsFromState(function () {
            return { loggedInUser: F.e.selectLoggedInUser, bizProfile: j, email: M.selectFirstEmail }
          })
          .propsFromActions(function () {
            return {
              addToast: A.b,
              createLocalApiErrorHandler: Object(W.createLocalApiErrorHandlerWithContextFactory)(
                'SETTINGS_BIZ_PROFILE_SCREEN',
              ),
              googleAnalyticsPageView: R.a,
              scribePageImpression: R.d,
              createBusinessProfile: H.a,
              fetchUserBizProfile: H.b,
              fetchDevices: M.fetchDevices,
              hideBusinessProfile: H.d,
            }
          })
          .withAnalytics(),
        V = n('Dtul'),
        U =
          (n('iKE+'),
          n('DZ+c'),
          n('3voH'),
          n('dlmX'),
          new RegExp('^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$')),
        Y = new RegExp('^[0-9]{10}$'),
        Z = new RegExp('^[0-9]{5}$'),
        G = [
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
        K = G.filter(function (e) {
          return 'country' !== e && 'countryCode' !== e && 'timezone' !== e && 'state' !== e
        }),
        X = Object.freeze({
          phoneNumber: function (e) {
            return e.startsWith('+') || e.startsWith('(1)') || e.startsWith('00')
              ? 'Please enter phone number without country code'
              : Y.test(e)
              ? void 0
              : 'Please enter a valid phone number'
          },
          email: function (e) {
            if (!U.test(e)) return 'Please enter a valid email'
          },
          zipCode: function (e) {
            if (!Z.test(e)) return 'Zip code must be 5 digits length'
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
      var J = n('G1WX'),
        Q = n('4zmP'),
        $ = n('p+r5'),
        ee = n('cCdp'),
        te = n('6XNv'),
        ne = n('Y3cQ'),
        ae = n('v6aA'),
        re =
          (n('m9LP'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('Blm6'),
          n('M+/F'),
          n('tQbP'),
          n('kFen'),
          n('qd3W'),
          ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
        oe = [
          { label: 'Don’t show hours', value: '' },
          { label: 'Always open', value: 'AlwaysOpen' },
          { label: 'Scheduled hours', value: 'RegularHours' },
        ],
        le = [
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
        se = ['00', '15', '30', '45'],
        ce = Array(24)
          .fill(0)
          .map(function (e, t) {
            return t
          })
          .flatMap(function (e) {
            return se.map(function (t) {
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
        ue = {
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
          regularOpenHours: re.map(function (e) {
            return { enabled: !1, day: e, slots: [] }
          }),
          country: 'us',
          allowUpdates: !1,
          state: le[0].value,
          businessName: '',
          category: '',
          timezone: ie[0].value,
          errors: new Map(),
          city: '',
          zipCode: '',
          showWarningModalClose: !1,
        }
      function de(e) {
        var t, n
        return (
          3 === e.length
            ? ((t = parseInt(e.slice(0, 1), 10)), (n = parseInt(e.slice(1, 3), 10)))
            : ((t = parseInt(e.slice(0, 2), 10)), (n = parseInt(e.slice(2, 4), 10))),
          { hour: t, minute: n }
        )
      }
      function he(e) {
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
      function me(e) {
        var t = e.allowCall,
          n = e.allowEmail,
          a = e.allowText
        return { show_directions: e.getDirections, enable_call: t, enable_sms: a, enable_email: n }
      }
      function fe(e) {
        var t = e.address,
          n = e.city,
          a = e.country,
          r = e.countryCode,
          o = e.email,
          l = e.openHoursType,
          i = e.phoneNumber,
          s = e.regularOpenHours,
          c = e.state,
          u = e.timezone,
          d = e.website
        return {
          website: { expanded_url: d, display_url: d },
          address: { address_line1: t, city: n, country: a, administrative_area: c, postal_code: e.zipCode },
          contact: { phone: { number: i, country_code: r }, email: { email_address: o } },
          open_times: {
            open_times_type: l,
            regular:
              'RegularHours' === l && s
                ? (function (e) {
                    return e.map(function (e) {
                      var t
                      return { weekday: e.day, slots: e.enabled && null !== (t = e.slots) && void 0 !== t ? t : [] }
                    })
                  })(s)
                : [],
          },
          timezone: 'RegularHours' === l ? { name: u } : void 0,
        }
      }
      var ye = n('iY63'),
        ge = n('hOZg')
      function be(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? be(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : be(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            a = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      var we = Object.freeze({
          Monday: 'Monday',
          Tuesday: 'Tuesday',
          Wednesday: 'Wednesday',
          Thursday: 'Thursday',
          Friday: 'Friday',
          Saturday: 'Saturday',
          Sunday: 'Sunday',
        }),
        Ee = 'Use numbers only',
        Ce = { page: 'settings', section: 'bizProfile' },
        Te = (function (e) {
          u()(n, e)
          var t = _e(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', ue),
              y()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.fetchDevices,
                  a = t.fetchUserBizProfile,
                  r = t.loggedInUser
                r &&
                  a(r.id_str).then(function () {
                    return n()
                  })
              }),
              y()(s()(e), '_setRef', function (t) {
                e._refError = t
              }),
              y()(s()(e), '_handleModalCancel', function () {
                e.setState({ showWarningModalClose: !1 })
              }),
              y()(s()(e), '_handleModalConfirmed', function () {
                var t = e.props.history
                e.setState({ showWarningModalClose: !1 }), t.goBack()
              }),
              y()(s()(e), '_handleCancel', function () {
                e.setState({ showWarningModalClose: !0 })
              }),
              y()(s()(e), '_handleSubmit', function () {
                e._saveChanges()
              }),
              y()(s()(e), '_handleDayCheckboxChange', function (t, n) {
                var a = {
                  day: t,
                  enabled: n,
                  slots: n ? [{ open: { hour: 10, minute: 0 }, close: { hour: 19, minute: 0 } }] : [],
                }
                e._replaceDailyInfo(a)
              }),
              y()(s()(e), '_handleOpenTimesTypeChange', function (t, n) {
                'RegularHours' === n || 'AlwaysOpen' === n
                  ? e.setState({ openHoursType: n })
                  : e.setState({ openHoursType: void 0 })
              }),
              y()(s()(e), '_handleChangeAllowSetting', function (t, n) {
                e.setState(y()({}, t, n))
              }),
              y()(s()(e), '_handleOnBlurEventForBizProfiles', function (t) {
                var n = t.currentTarget,
                  a = q(n.name, n.value, e.state.errors)
                e.setState({ errors: a })
              }),
              y()(s()(e), '_handleHtmlEventForBizProfiles', function (t) {
                var n = t.currentTarget,
                  a = n.name,
                  r = n.value
                e.setState(y()({}, a, r))
              }),
              y()(s()(e), '_handleStateSelection', function (t, n) {
                e.setState({ state: t })
              }),
              y()(s()(e), '_handleTimezoneSelection', function (t, n) {
                e.setState({ timezone: t })
              }),
              y()(s()(e), '_blockHistory', function (t, n) {
                var a = e.state.showWarningModalClose
                return (
                  !(
                    K.find(function (t) {
                      return '' !== e.state[t]
                    }) && !a
                  ) || (e.setState({ showWarningModalClose: !0 }), !1)
                )
              }),
              y()(s()(e), '_handleOptOut', function () {
                var t = e.props,
                  n = t.bizProfile,
                  a = t.createLocalApiErrorHandler,
                  r = t.hideBusinessProfile,
                  o = t.loggedInUser,
                  l = (null != n ? n : {}).business
                o && l && r(o.id_str, l.rest_id).catch(a({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    n = e.history,
                    a = e.loggedInUser,
                    r = e.scribePageImpression
                  a ? (this._handleFetch(), r(Ce), t(Ce)) : n.push('/login'),
                    (this._unlockReload = V.a.acquire()),
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
                    r = t.history,
                    o = t.location,
                    l = t.loggedInUser,
                    i = t.match,
                    s = null != n ? n : {},
                    c = s.business,
                    u = s.fetchStatus
                  return l
                    ? c
                      ? b.a.createElement(x, {
                          business: c,
                          email: a,
                          history: r,
                          location: o,
                          loggedInUser: l,
                          match: i,
                          onOptOut: this._handleOptOut,
                        })
                      : b.a.createElement(J.a, {
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
                    r = a.acceptTYC,
                    o = a.address,
                    l = a.allowCall,
                    i = a.allowEmail,
                    s = a.allowText,
                    c = a.allowUpdates,
                    u = a.businessName,
                    d = a.category,
                    h = a.city,
                    p = a.email,
                    m = a.errors,
                    f = a.getDirections,
                    y = a.openHoursType,
                    g = a.phoneNumber,
                    E = a.showWarningModalClose,
                    C = a.state,
                    z = a.website,
                    k = a.zipCode,
                    D = m.size > 0 || !r,
                    x = b.a.createElement(
                      B.a,
                      { disabled: D, onPress: this._handleSubmit, size: 'small', testID: w, type: 'primaryFilled' },
                      'Submit',
                    )
                  return b.a.createElement(
                    v.b,
                    {
                      history: t,
                      onBackClick: this._handleCancel,
                      rightControl: x,
                      title: 'Business Profile - Application',
                    },
                    b.a.createElement(
                      O.a,
                      { style: Oe.container },
                      b.a.createElement(
                        O.a,
                        { style: Oe.margin },
                        b.a.createElement(P.a, { Icon: _.a, size: 'large', style: Oe.centered }),
                        b.a.createElement(
                          S.b,
                          { align: 'center', size: 'headline1', weight: 'bold' },
                          b.a.createElement('br', null),
                          'Apply for the Twitter Business Profile pilot',
                        ),
                        b.a.createElement(
                          S.b,
                          { align: 'center', style: Oe.margin },
                          'Use this form to apply for the Twitter Business Profile pilot. Keep an eye out for an email letting you know if you’re approved and when to expect changes to go live.',
                        ),
                        b.a.createElement(
                          O.a,
                          { style: [Oe.bigMargin, Oe.bold] },
                          b.a.createElement(Q.a, {
                            text: 'The information you provide below will appear on your new, public profile.',
                          }),
                        ),
                        b.a.createElement(
                          S.b,
                          { align: 'center', size: 'body', style: [Oe.deepGray, Oe.marginTop], weight: 'bold' },
                          'All fields are required.',
                        ),
                      ),
                      b.a.createElement(
                        S.b,
                        { size: 'headline1', style: Oe.sectionMargin, weight: 'bold' },
                        'Your business',
                      ),
                      b.a.createElement(
                        O.a,
                        { style: Oe.bigMargin },
                        b.a.createElement(S.b, { size: 'subtext3' }, 'Twitter username'),
                        b.a.createElement(S.b, { testID: T }, '@', null == n ? void 0 : n.screen_name),
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
                        S.b,
                        { size: 'headline1', style: Oe.sectionMargin, weight: 'bold' },
                        'Business contact info',
                      ),
                      b.a.createElement($.a, {
                        defaultValue: p,
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
                        O.a,
                        null,
                        b.a.createElement(ee.a, {
                          checked: i,
                          helpText: 'People can email this address directly from your profile.',
                          label: 'Allow emails from profile link',
                          name: 'allowEmail',
                          onChange: this._handleChangeAllowSetting,
                          type: 'switch',
                        }),
                      ),
                      b.a.createElement(
                        O.a,
                        { style: Oe.row },
                        b.a.createElement($.a, {
                          defaultValue: '+1',
                          editable: !1,
                          label: 'Code',
                          name: 'countryCode',
                          onChange: this._handleHtmlEventForBizProfiles,
                          style: Oe.smallInput,
                          type: 'tel',
                        }),
                        b.a.createElement($.a, {
                          defaultValue: g,
                          errorText: m.get('phoneNumber'),
                          helperText: Ee,
                          inputMode: 'tel',
                          invalid: m.has('phoneNumber'),
                          label: 'Phone number',
                          maxLength: 10,
                          name: 'phoneNumber',
                          onBlur: this._handleOnBlurEventForBizProfiles,
                          onChange: this._handleHtmlEventForBizProfiles,
                          showValidationIcon: !0,
                          style: Oe.expand,
                          type: 'number',
                        }),
                      ),
                      b.a.createElement(
                        O.a,
                        null,
                        b.a.createElement(ee.a, {
                          checked: l,
                          helpText: 'Standard Rates Apply',
                          label: 'Allow customer voice calls from profile link',
                          name: 'allowCall',
                          onChange: this._handleChangeAllowSetting,
                          type: 'switch',
                        }),
                        b.a.createElement(ee.a, {
                          checked: s,
                          helpText: 'Standard Rates Apply',
                          label: 'Allow customer text messages from profile link',
                          name: 'allowText',
                          onChange: this._handleChangeAllowSetting,
                          type: 'switch',
                        }),
                      ),
                      b.a.createElement($.a, {
                        defaultValue: z,
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
                        S.b,
                        { size: 'headline1', style: Oe.sectionMargin, weight: 'bold' },
                        'Business location',
                      ),
                      b.a.createElement($.a, {
                        defaultValue: o,
                        errorText: m.get('address'),
                        invalid: m.has('address'),
                        label: 'Street address',
                        name: 'address',
                        onBlur: this._handleOnBlurEventForBizProfiles,
                        onChange: this._handleHtmlEventForBizProfiles,
                        showValidationIcon: !0,
                      }),
                      b.a.createElement($.a, {
                        defaultValue: h,
                        errorText: m.get('city'),
                        invalid: m.has('city'),
                        label: 'City',
                        name: 'city',
                        onBlur: this._handleOnBlurEventForBizProfiles,
                        onChange: this._handleHtmlEventForBizProfiles,
                        showValidationIcon: !0,
                      }),
                      b.a.createElement(
                        O.a,
                        { style: Oe.row },
                        b.a.createElement(
                          O.a,
                          { style: [Oe.margin, Oe.expand] },
                          b.a.createElement(te.a, {
                            label: 'State',
                            onChange: this._handleStateSelection,
                            options: le,
                            value: C,
                          }),
                        ),
                        b.a.createElement($.a, {
                          defaultValue: k,
                          errorText: m.get('zipCode'),
                          helperText: Ee,
                          invalid: m.has('zipCode'),
                          label: 'ZIP/Postal code',
                          name: 'zipCode',
                          onBlur: this._handleOnBlurEventForBizProfiles,
                          onChange: this._handleHtmlEventForBizProfiles,
                          showValidationIcon: !0,
                          style: Oe.expand,
                          type: 'number',
                        }),
                      ),
                      b.a.createElement(
                        O.a,
                        null,
                        b.a.createElement(ee.a, {
                          checked: f,
                          label: 'Allow driving directions',
                          name: 'getDirections',
                          onChange: this._handleChangeAllowSetting,
                          type: 'switch',
                        }),
                      ),
                      b.a.createElement(
                        S.b,
                        { size: 'headline1', style: Oe.sectionMargin, weight: 'bold' },
                        'Business hours',
                      ),
                      b.a.createElement(ne.a, {
                        name: 'openHoursType',
                        onChange: this._handleOpenTimesTypeChange,
                        options: oe,
                        value: null != y ? y : '',
                      }),
                      this._renderRegularOpenHours(),
                      b.a.createElement(
                        S.b,
                        { size: 'headline1', style: Oe.sectionMargin, weight: 'bold' },
                        'Want more info from Twitter for Business?',
                      ),
                      b.a.createElement(
                        O.a,
                        null,
                        b.a.createElement(ee.a, {
                          checked: c,
                          helpText:
                            'By choosing to get updates, you agree to receive marketing communications via email from Twitter. You may unsubscribe at any time.',
                          label: 'Get the latest news, updates, and resources from Twitter for Business.',
                          name: 'allowUpdates',
                          onChange: this._handleChangeAllowSetting,
                        }),
                        b.a.createElement(
                          O.a,
                          { style: Oe.margin },
                          b.a.createElement(S.b, null, this._renderTermsAndConditions()),
                        ),
                        b.a.createElement(ee.a, {
                          checked: r,
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
                    S.b,
                    null,
                    'By accepting these terms and submitting the information above, you represent and warrant that you are the owner of the entity listed on your Business Profile and/or have the authority to bind such entity to these terms. Participation in the Twitter Business Profile pilot is not guaranteed and is subject to the Twitter User Agreement including our',
                    ' ',
                    b.a.createElement(
                      S.b,
                      { accessibilityRole: 'button', link: 'https://twitter.com/tos' },
                      'Terms of Service',
                    ),
                    ' ',
                    'and the',
                    ' ',
                    b.a.createElement(
                      S.b,
                      { accessibilityRole: 'button', link: 'https://legal.twitter.com/ads-terms/us.html' },
                      'Twitter Master Services Agreement',
                    ),
                    ', as well as the Twitter Rules and Policies, including the',
                    ' ',
                    b.a.createElement(
                      S.b,
                      { accessibilityRole: 'button', link: 'http://www.twitter.com/adspolicy' },
                      'Twitter Ads Policy Guidelines',
                    ),
                    '. You are responsible for your Business Profile and any information provided as part of your Business Profile and must ensure these comply with all applicable laws, rules, and regulations. You should only provide information that you are comfortable sharing with others, including by publicly displaying your business information on your Business Profile, as applicable. Do not provide information, including for example a business phone number, business location or website, other than that of the actual business and that is under the direct control of your business. Our',
                    ' ',
                    b.a.createElement(
                      S.b,
                      { accessibilityRole: 'button', link: 'https://twitter.com/privacy' },
                      'privacy policy',
                    ),
                    ' ',
                    'describes how we handle information provided to us. To submit a request related to access, modification or deletion of any information provided to us as part of this pilot, please contact:',
                    b.a.createElement(
                      S.b,
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
                        O.a,
                        { ref: this._setRef },
                        null != a && a.reason ? b.a.createElement(Q.a, { text: a.reason, type: 'danger' }) : null,
                        re.map(function (t, n) {
                          return e._renderDailyInformationAndSlots(t)
                        }),
                        b.a.createElement(te.a, {
                          label: 'Time zone',
                          onChange: this._handleTimezoneSelection,
                          options: ie,
                          style: Oe.margin,
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
                    O.a,
                    { key: e, style: [Oe.row, Oe.marginTop, Oe.dailyInfo] },
                    b.a.createElement(
                      O.a,
                      { style: Oe.dayToggle },
                      b.a.createElement(ee.a, {
                        checked: null == n ? void 0 : n.enabled,
                        key: 'flag'.concat(e),
                        label: we[e],
                        name: e,
                        onChange: function (n, a) {
                          return t._handleDayCheckboxChange(e, a)
                        },
                        type: 'switch',
                      }),
                    ),
                    b.a.createElement(
                      O.a,
                      { style: [Oe.expand, Oe.centered, (null == n ? void 0 : n.enabled) && Oe.dayInfo] },
                      null != n && n.enabled ? this._renderDaySlots(n, e) : b.a.createElement(S.b, null, 'Closed'),
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
                    O.a,
                    null,
                    a.map(function (a, r) {
                      return b.a.createElement(
                        O.a,
                        { key: 'slot'.concat(t).concat(r), style: r > 0 ? [Oe.row, Oe.marginTop] : [Oe.row] },
                        b.a.createElement(
                          O.a,
                          { style: [Oe.row, Oe.expand] },
                          b.a.createElement(te.a, {
                            key: 'open'.concat(t),
                            label: 'Open at',
                            onChange: function (e, a) {
                              return n._handleOpenTimeChange(e, t, r)
                            },
                            options: ce,
                            style: Oe.timeRange,
                            value: he(a.open),
                          }),
                          b.a.createElement(S.b, { size: 'headline1', style: [Oe.centered, Oe.dashMargin] }, '-'),
                          b.a.createElement(te.a, {
                            key: 'close'.concat(t),
                            label: 'Close at',
                            onChange: function (e) {
                              return n._handleCloseTimeChange(e, t, r)
                            },
                            options: ce,
                            style: Oe.timeRange,
                            value: he(a.close),
                          }),
                        ),
                        b.a.createElement(O.a, { style: [Oe.centered, Oe.buttonMargin] }, n._renderDayButton(e, t, r)),
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
                    ? b.a.createElement(B.a, {
                        disabled: !(null != e && e.enabled),
                        icon: b.a.createElement(ye.a, { key: 'icon'.concat(t), style: Oe.blue }),
                        key: 'plus'.concat(t),
                        onPress: function (e) {
                          return a._handleAddSlot(t)
                        },
                        size: 'xSmall',
                        style: [Oe.plusMinusButtons, Oe.blue],
                        type: 'brandOutlined',
                      })
                    : b.a.createElement(B.a, {
                        disabled: !(null != e && e.enabled),
                        icon: b.a.createElement(ge.a, { key: 'iconMinus'.concat(t).concat(n), style: Oe.gray }),
                        key: 'minus'.concat(t).concat(n),
                        onPress: function (e) {
                          return a._handleRemoveSlot(t, n)
                        },
                        size: 'xSmall',
                        style: Oe.plusMinusButtons,
                        type: 'brandText',
                      })
                },
              },
              {
                key: '_renderCloseModalWarning',
                value: function () {
                  return b.a.createElement(z.a, {
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
                    r = n.createLocalApiErrorHandler,
                    o = n.loggedInUser,
                    l =
                      ((e = this.state),
                      G.reduceRight(function (t, n, a, r) {
                        return q(n, e[n], t)
                      }, e.errors))
                  if (l.size > 0) this.setState({ errors: l })
                  else if (o) {
                    var i = pe(this.state),
                      s = fe(this.state),
                      c = { businessInput: i, config: me(this.state), venueData: s }
                    a(o.id_str, c)
                      .then(function (e) {
                        var n = e.error
                        t.setState({ errors: l, validationError: n })
                      })
                      .catch(r({ showToast: !0 }))
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
                    r = ve(ve({}, t), {}, { slots: a })
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
                    r = ve(ve({}, n), {}, { slots: a })
                  this._replaceDailyInfo(r)
                },
              },
              {
                key: '_handleOpenTimeChange',
                value: function (e, t, n) {
                  var a = this._getCurrentDaySlot(t),
                    r = de(e),
                    o = { close: a.slots[n].close, open: r },
                    l = a.slots.fill(o, n, n + 1),
                    i = ve(ve({}, a), {}, { slots: l })
                  this._replaceDailyInfo(i)
                },
              },
              {
                key: '_handleCloseTimeChange',
                value: function (e, t, n) {
                  var a = this._getCurrentDaySlot(t),
                    r = de(e),
                    o = { open: a.slots[n].open, close: r },
                    l = 0 === a.slots.length ? [o] : a.slots.fill(o, n, n + 1),
                    i = ve(ve({}, a), {}, { slots: l })
                  this._replaceDailyInfo(i)
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
      y()(Te, 'contextType', ae.a)
      var Oe = k.a.create(function (e) {
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
        Be = N(Te)
      t.default = Be
    },
    Y3cQ: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        o = n('fyvP'),
        l = n('rHpw'),
        i = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(i.a, { style: s.root }, r.a.createElement(o.a, e))
      }
      var s = l.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
  },
])
//# sourceMappingURL=WIPED
