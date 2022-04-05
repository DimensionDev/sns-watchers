;(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    '3EFP': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      }),
        a.d(t, 'b', function () {
          return r
        }),
        a.d(t, 'c', function () {
          return o
        }),
        a.d(t, 'd', function () {
          return i
        }),
        a.d(t, 'e', function () {
          return l
        }),
        a.d(t, 'f', function () {
          return s
        })
      var n = 'ArrowDown',
        r = 'ArrowUp',
        o = 'Enter',
        i = 'Escape',
        l = 'ESC',
        s = 'Tab'
    },
    '5emT': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        o = a('ERkP'),
        i = a.n(o),
        l = a('Lsrn'),
        s = a('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
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
    '6XNv': function (e, t, a) {
      'use strict'
      var n = a('RhWx'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        l = a('Y9Ll'),
        s = a.n(l),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        f = a.n(h),
        g = a('KEM+'),
        m = a.n(g),
        y = a('yiKp'),
        b = a.n(y),
        v = (a('lTEL'), a('7x/C'), a('LqLs'), a('87if'), a('kYxP'), a('7xRU'), a('z84I'), a('2G9S'), a('ERkP')),
        _ = a.n(v),
        x = a('t62R'),
        C = a('piX5'),
        E = a('4r2z'),
        I = a('FG+G'),
        D = a('rHpw'),
        T = a('k/Ka'),
        L = a('shC7'),
        S = a('MWbm'),
        w = _.a.forwardRef(function (e, t) {
          return Object(T.a)('select', b()(b()({}, e), {}, { ref: t }))
        }),
        k = function (e) {
          return Object(T.a)('option', e)
        },
        F = 1,
        R = (function (e) {
          p()(a, e)
          var t = f()(a)
          function a(e) {
            var n
            return (
              i()(this, a),
              (n = t.call(this, e)),
              m()(u()(n), '_selectRef', _.a.createRef()),
              m()(u()(n), 'state', { isFocused: !1 }),
              m()(u()(n), '_handleChange', function (e) {
                var t = n.props,
                  a = t.onChange,
                  r = t.withEmptyOption,
                  o = e.target,
                  i = o.selectedIndex,
                  l = o.value
                a && a(l, i - (r ? 1 : 0))
              }),
              m()(u()(n), '_handleBlur', function (e) {
                var t = n.props.onBlur
                n.setState({ isFocused: !1 }), t && t()
              }),
              m()(u()(n), '_handleFocus', function (e) {
                var t = n.props.onFocus
                n.setState({ isFocused: !0 }), t && t()
              }),
              (n._id = 'SELECTOR_'.concat(F)),
              (n._errorID = ''.concat(n._id, '_ERROR')),
              (n._helperID = ''.concat(n._id, '_HELP')),
              (n._labelID = ''.concat(n._id, '_LABEL')),
              (F += 1),
              n
            )
          }
          return (
            s()(a, [
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
                    a = e.disabled,
                    n = e.errorText,
                    o = e.hasError,
                    i = e.helperText,
                    l = e.options,
                    s = e.style,
                    c = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    h = x.b.getLanguage(),
                    f =
                      'ja' === h
                        ? D.a.theme.fontFamilies.japan
                        : L.a.getConstants().isRTL || E.a.isLocaleRTL(h)
                        ? D.a.theme.fontFamilies.rtl
                        : D.a.theme.fontFamilies.normal,
                    g = void 0 === o ? !!n : o,
                    m = new Set()
                  n && m.add(this._errorID), t && m.add(t), i && m.add(this._helperID)
                  var y = m.size ? r()(m).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      S.a,
                      {
                        style: [
                          C.a.border,
                          O.container,
                          a && C.a.disabled,
                          p && C.a.focusedBorderValid,
                          g && C.a.invalidBorderColor,
                          p && g && C.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        w,
                        {
                          accessibilityDescribedBy: y,
                          accessibilityInvalid: g,
                          accessibilityLabelledBy: this._labelID,
                          disabled: a,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [O.select, { fontFamily: f }, a && C.a.disabled],
                          testID: c || '',
                          value: u,
                        },
                        d ? _.a.createElement(k, { disabled: !0, style: O.option, value: '' }) : null,
                        l.map(function (e) {
                          var t = e.disabled,
                            a = e.label,
                            n = e.value
                          return _.a.createElement(
                            k,
                            { disabled: t, key: ''.concat(a, '-').concat(n), style: O.option, value: n },
                            a,
                          )
                        }),
                      ),
                      _.a.createElement(I.a, {
                        style: [O.dropdownCaret, p && C.a.validColor, (o || n) && C.a.invalidColor],
                      }),
                    ),
                    i ? this._renderHelperText() : null,
                    g && n ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    a = e.hasError,
                    n = e.label,
                    r = this.state.isFocused
                  return _.a.createElement(
                    x.b,
                    {
                      accessibilityRole: 'label',
                      color: a || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: O.label,
                    },
                    n,
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
                      x.b,
                      { color: 'gray700', nativeID: this._helperID, style: O.helperText },
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
                      x.b,
                      { color: 'red500', nativeID: this._errorID, style: O.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(_.a.PureComponent)
      m()(R, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (R.propTypes = {})
      var O = D.a.create(function (e) {
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
      t.a = R
    },
    '6vad': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return h
      })
      a('yH/f')
      var n = a('ERkP'),
        r = a.n(n),
        o = a('t62R'),
        i = a('EHV7'),
        l = a('rHpw'),
        s = l.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        c = a('7Mjr'),
        u = a('I4+6'),
        d = a('cm6r'),
        p = a('MWbm'),
        h = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var f = l.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          a = e.landingUrl,
          n = e.nativeID,
          g = e.rightControl,
          m = e.style,
          y = e.subtext,
          b = e.testID,
          v = e.text,
          _ = (function (e) {
            switch (e) {
              case h.TopicFilled:
                return r.a.createElement(i.a, { style: s.icon })
              default:
                return null
            }
          })(t),
          x = y ? null : f.withSubtext,
          C = u.a.generate({
            backgroundColor: l.a.theme.colors.gray0,
            color: l.a.theme.colors.cellBackground,
            customFocusBackgroundColor: l.a.theme.colors.gray0,
            customHoverBackgroundColor: l.a.theme.colors.gray0,
            customPressedBackgroundColor: l.a.theme.colors.gray0,
          })
        return r.a.createElement(
          d.a,
          {
            interactiveStyles: a ? C : null,
            link: null == a ? void 0 : a.url,
            nativeID: n,
            style: [f.root, m],
            testID: b,
          },
          r.a.createElement(
            p.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: f.mainContent },
            r.a.createElement(p.a, { style: f.icon }, _),
            r.a.createElement(
              o.b,
              { numberOfLines: 3, size: 'headline1', style: x, weight: 'heavy', withHashflags: !0 },
              v,
            ),
            r.a.createElement(
              p.a,
              { style: f.rightControlGroup },
              a ? r.a.createElement(p.a, { style: x }, r.a.createElement(c.a, { style: f.iconArrow })) : null,
              g ? r.a.createElement(p.a, null, g) : null,
            ),
          ),
          y
            ? r.a.createElement(
                o.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: f.subtext, withHashflags: !0 },
                y,
              )
            : null,
        )
      }
    },
    D9cE: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'AdvancedSearchScreen', function () {
          return ge
        })
      var n = a('yiKp'),
        r = a.n(n),
        o = a('RhWx'),
        i = a.n(o),
        l = a('VrFO'),
        s = a.n(l),
        c = a('Y9Ll'),
        u = a.n(c),
        d = a('1Pcy'),
        p = a.n(d),
        h = a('5Yy7'),
        f = a.n(h),
        g = a('2VqO'),
        m = a.n(g),
        y = a('KEM+'),
        b = a.n(y),
        v =
          (a('ho0z'),
          a('1t7P'),
          a('jQ/y'),
          a('z84I'),
          a('2G9S'),
          a('KqXw'),
          a('MvUL'),
          a('KOtZ'),
          a('7x/C'),
          a('+KXO'),
          a('ERkP')),
        _ = a.n(v),
        x = (a('LW0h'), a('vrRf'), a('hqKg')),
        C = a('rxPX'),
        E = a('0KEI'),
        I = a('FDFL'),
        D = ['en-gb', 'fil', 'gl', 'ga', 'msa'],
        T = Object(C.a)()
          .propsFromState(function () {
            return {
              languageList: Object(x.createSelector)(I.c, function (e) {
                return e.filter(function (e) {
                  return -1 === D.indexOf(e.code)
                })
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('ADVANCED_SEARCH'),
              fetchAvailableLanguagesIfNeeded: I.a,
            }
          })
          .withAnalytics({ page: 'search_advanced' }),
        L = a('3EFP'),
        S = a('jHSc'),
        w = a('3XMw'),
        k = a.n(w),
        F = a('oQhu'),
        R = a('u3ZE'),
        O =
          (a('yH/f'),
          Object.freeze({
            AllOfTheseWords: 'allOfTheseWords',
            ThisExactPhrase: 'thisExactPhrase',
            AnyOfTheseWords: 'anyOfTheseWords',
            NoneOfTheseWords: 'noneOfTheseWords',
            Language: 'language',
            TheseHashtags: 'theseHashtags',
            FromTheseAccounts: 'fromTheseAccounts',
            ToTheseAccounts: 'toTheseAccounts',
            MentioningTheseAccounts: 'mentioningTheseAccounts',
            FromThisDate: 'fromThisDate',
            ToThisDate: 'toThisDate',
            MinReplies: 'minReplies',
            MinLikes: 'minLikes',
            MinRetweets: 'minRetweets',
            ReplyFilter: 'replyFilter',
            LinkFilter: 'linkFilter',
          })),
        V = 'any',
        P = {
          wordsFields: [
            { label: k.a.b621568f, name: O.AllOfTheseWords, description: k.a.cceffa5d },
            { label: k.a.f1c5faee, name: O.ThisExactPhrase, description: k.a.ad10780e },
            { label: k.a.a555a3f3, name: O.AnyOfTheseWords, description: k.a.ee8a2b6f },
            { label: k.a.f51fe348, name: O.NoneOfTheseWords, description: k.a.hb657ad3 },
            { label: k.a.d10da5da, name: O.TheseHashtags, description: k.a.f0b52b50 },
          ],
          peopleFields: [
            { label: k.a.e292598a, name: O.FromTheseAccounts, description: k.a.d84ed90c },
            { label: k.a.g2c27394, name: O.ToTheseAccounts, description: k.a.b62d36b2 },
            { label: k.a.a10e323f, name: O.MentioningTheseAccounts, description: k.a.daaf2c71 },
          ],
          engagementFields: [
            { label: k.a.b18366ba, name: O.MinReplies, description: k.a.a76c9844 },
            { label: k.a.ib3ddbd4, name: O.MinLikes, description: k.a.dec3293c },
            { label: k.a.i6e5440d, name: O.MinRetweets, description: k.a.b6dc8434 },
          ],
        },
        A =
          (a('jwue'),
          a('+oxZ'),
          a('Ysgh'),
          a('7xRU'),
          a('tVqn'),
          function (e) {
            return e.filter(function (e) {
              return '' !== e
            })
          }),
        z = function (e) {
          return e.replace(/#+/g, '')
        },
        B = function (e) {
          return e.replace(/@+/g, '')
        },
        H = function (e) {
          return '('.concat(e, ')')
        },
        K = a('MWbm'),
        M = a('6vad'),
        j = a('p+r5'),
        W = a('6XNv'),
        G = a('nS1w'),
        U = a('/yvb'),
        Y = a('xoZN'),
        N = a('0yYu'),
        q = a('oFxb'),
        X = a('t62R'),
        Q = a('S8sr'),
        J = a('rHpw'),
        Z = k.a.d8496336,
        $ = k.a.j622effd,
        ee = k.a.d3938be7,
        te = k.a.i647fb03,
        ae = k.a.e0dded5d,
        ne = k.a.b8e1d524,
        re = k.a.a097f7ba,
        oe = k.a.a9ae1e78,
        ie = k.a.a03dacaa,
        le = k.a.c03f15ca,
        se = k.a.c647aac8,
        ce = k.a.ac6ce1cf,
        ue = k.a.cb334136,
        de = k.a.jdceda6f,
        pe = { day: void 0, month: void 0, year: void 0 },
        he = [
          { label: k.a.e8f38622, value: '' },
          { label: k.a.ie23eef9, value: 'filter:links' },
        ],
        fe = [
          { label: k.a.ge10bfa1, value: '' },
          { label: k.a.ab870903, value: 'filter:replies' },
        ],
        ge = (function (e) {
          f()(a, e)
          var t = m()(a)
          function a(e, n) {
            var o
            return (
              s()(this, a),
              (o = t.call(this, e, n)),
              b()(p()(o), '_renderSectionTitle', function (e) {
                return _.a.createElement(M.b, { text: e })
              }),
              b()(p()(o), '_renderField', function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'text'
                return _.a.createElement(
                  K.a,
                  { key: e.name },
                  _.a.createElement(j.a, {
                    helperText: e.description,
                    label: e.label,
                    name: e.name,
                    numberOfLines: 1,
                    ref: o._setFormTextInputRef,
                    style: ye.field,
                    type: t,
                  }),
                )
              }),
              b()(p()(o), '_handleToDateChange', function (e) {
                o.setState({ toDate: e })
              }),
              b()(p()(o), '_handleFromDateChange', function (e) {
                o.setState({ fromDate: e })
              }),
              b()(p()(o), '_handleFilterChanged', function (e, t) {
                o.setState(b()({}, e, t))
              }),
              b()(p()(o), '_renderLanguages', function () {
                var e = o._getFormattedLanguageList(o.props.languageList)
                return e.length
                  ? _.a.createElement(W.a, {
                      label: ie,
                      onChange: o._handleLanguageChange,
                      options: e,
                      style: ye.languageSelector,
                    })
                  : null
              }),
              b()(
                p()(o),
                '_getFormattedLanguageList',
                Object(F.a)(function (e) {
                  var t = { label: le, value: V },
                    a = e.map(function (e) {
                      return { label: e.name, value: e.code }
                    })
                  return [t].concat(i()(a))
                }),
              ),
              b()(p()(o), '_handleOnKeyDown', function (e) {
                e.key === L.c && (e.preventDefault(), o._executeSearch())
              }),
              b()(p()(o), '_handleOnSearchPress', function () {
                o._executeSearch()
              }),
              b()(p()(o), '_handleLanguageChange', function (e, t) {
                o.setState({ language: e })
              }),
              b()(p()(o), '_executeSearch', function () {
                var e,
                  t,
                  a,
                  n,
                  i = o.props,
                  l = i.history,
                  s = i.location,
                  c =
                    ((e = o._getInputValues()),
                    (n = []),
                    Object.keys(e).forEach(function (r) {
                      var o = e[r]
                      if (o)
                        switch (r) {
                          case O.ThisExactPhrase:
                            n.push('"'.concat(o, '"'))
                            break
                          case O.AnyOfTheseWords:
                            ;(t = o.split(' ')), (a = A(t)), n.push(H(a.join(' OR ')))
                            break
                          case O.NoneOfTheseWords:
                            ;(t = '-'.concat(o).split(' ')), (a = A(t)), n.push(a.join(' -'))
                            break
                          case O.TheseHashtags:
                            ;(t = '#'.concat(z(o)).split(' ')), (a = A(t)), n.push(H(a.join(' OR #')))
                            break
                          case O.FromTheseAccounts:
                            ;(t = 'from:'.concat(B(o)).split(' ')), (a = A(t)), n.push(H(a.join(' OR from:')))
                            break
                          case O.ToTheseAccounts:
                            ;(t = 'to:'.concat(B(o)).split(' ')), (a = A(t)), n.push(H(a.join(' OR to:')))
                            break
                          case O.MentioningTheseAccounts:
                            ;(t = '@'.concat(B(o)).split(' ')), (a = A(t)), n.push(H(a.join(' OR @')))
                            break
                          case O.FromThisDate:
                            n.push('since:'.concat(o))
                            break
                          case O.ToThisDate:
                            n.push('until:'.concat(o))
                            break
                          case O.Language:
                            o !== V && n.push('lang:'.concat(o))
                            break
                          case O.MinReplies:
                            n.push('min_replies:'.concat(o))
                            break
                          case O.MinLikes:
                            n.push('min_faves:'.concat(o))
                            break
                          case O.MinRetweets:
                            n.push('min_retweets:'.concat(o))
                            break
                          case O.AllOfTheseWords:
                          case O.LinkFilter:
                          case O.ReplyFilter:
                            n.push(o)
                        }
                    }),
                    n.join(' ').trim())
                c && l.replace({ pathname: '/search', query: r()(r()({}, s.query), {}, { q: c, src: R.a.Typed }) })
              }),
              b()(p()(o), '_setFormTextInputRef', function (e) {
                e && e.props && (o._formTextInputRefs[e.props.name] = e)
              }),
              b()(p()(o), '_getInputValues', function () {
                var e,
                  t = o.state,
                  a = t.fromDate,
                  n = t.language,
                  i = t.linkFilter,
                  l = t.replyFilter,
                  s = t.toDate,
                  c = Object.keys(o._formTextInputRefs).reduce(function (e, t) {
                    var a = o._formTextInputRefs[t]
                    return a && a.getValue() && (e[t] = a.getValue()), e
                  }, {}),
                  u = G.a.getFormattedDateValue(s.day, s.month, s.year),
                  d = G.a.getFormattedDateValue(a.day, a.month, a.year)
                return r()(
                  r()({}, c),
                  {},
                  ((e = { language: n }),
                  b()(e, O.ToThisDate, u),
                  b()(e, O.FromThisDate, d),
                  b()(e, O.LinkFilter, i),
                  b()(e, O.ReplyFilter, l),
                  e),
                )
              }),
              (o._formTextInputRefs = {}),
              (o.state = { language: V, linkFilter: '', replyFilter: '', toDate: pe, fromDate: pe }),
              o
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchAvailableLanguagesIfNeeded)().catch(t({}))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.history,
                    a = this.state,
                    n = a.linkFilter,
                    r = a.replyFilter,
                    o = _.a.createElement(
                      U.a,
                      { onPress: this._handleOnSearchPress, size: 'small', type: 'primaryFilled' },
                      oe,
                    )
                  return _.a.createElement(
                    S.a,
                    { backLocation: '/explore', documentTitle: Z, history: t, rightControl: o, title: $ },
                    _.a.createElement(
                      K.a,
                      { style: ye.root },
                      _.a.createElement(
                        Y.a,
                        { onKeyDown: this._handleOnKeyDown },
                        this._renderSectionTitle(ee),
                        _.a.createElement(
                          K.a,
                          { style: ye.section },
                          P.wordsFields.map(function (t) {
                            return e._renderField(t)
                          }),
                          this._renderLanguages(),
                        ),
                        _.a.createElement(N.a, null),
                        this._renderSectionTitle(ne),
                        _.a.createElement(
                          K.a,
                          { style: ye.section },
                          P.peopleFields.map(function (t) {
                            return e._renderField(t)
                          }),
                        ),
                        _.a.createElement(N.a, null),
                        this._renderSectionTitle(te),
                        _.a.createElement(q.a, {
                          label: de,
                          name: 'replyFilter',
                          offValue: '-filter:replies',
                          onChange: this._handleFilterChanged,
                          options: fe,
                          value: r,
                        }),
                        _.a.createElement(K.a, { style: ye.divider }),
                        _.a.createElement(q.a, {
                          label: ue,
                          name: 'linkFilter',
                          offValue: '-filter:links',
                          onChange: this._handleFilterChanged,
                          options: he,
                          value: n,
                        }),
                        _.a.createElement(N.a, null),
                        this._renderSectionTitle(ae),
                        _.a.createElement(
                          K.a,
                          { style: ye.section },
                          P.engagementFields.map(function (t) {
                            return e._renderField(t, 'number')
                          }),
                        ),
                        _.a.createElement(N.a, null),
                        this._renderSectionTitle(re),
                        _.a.createElement(K.a, { style: ye.section }, this._renderDateInputs()),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderDateInputs',
                value: function () {
                  var e = this.state,
                    t = e.fromDate,
                    a = e.toDate
                  return _.a.createElement(
                    K.a,
                    { style: ye.dateInputs },
                    _.a.createElement(X.b, null, ce),
                    _.a.createElement(Q.a, {
                      day: t.day,
                      label: ce,
                      minSelectableYear: 2006,
                      month: t.month,
                      onChange: this._handleFromDateChange,
                      style: ye.fromDateInput,
                      year: t.year,
                    }),
                    _.a.createElement(X.b, null, se),
                    _.a.createElement(Q.a, {
                      day: a.day,
                      label: se,
                      minSelectableYear: 2006,
                      month: a.month,
                      onChange: this._handleToDateChange,
                      style: ye.toDateInput,
                      year: a.year,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(_.a.Component),
        me = T(ge),
        ye =
          ((t.default = me),
          J.a.create(function (e) {
            return {
              root: { paddingBottom: e.spaces.space16 },
              section: { paddingHorizontal: e.spaces.space16 },
              title: { marginBottom: e.spaces.space12 },
              divider: { borderBottomColor: e.colors.gray200, borderBottomWidth: 1 },
              languageSelector: { marginVertical: e.spaces.space12 },
              dateInputs: { marginVertical: e.spaces.space12 },
              fromDateInput: { marginTop: e.spaces.space4, marginBottom: e.spaces.space16 },
              toDateInput: { marginTop: e.spaces.space4, marginBottom: 0 },
              field: { paddingHorizontal: 0, paddingVertical: e.spaces.space12 },
            }
          }))
    },
    FDFL: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return y
      }),
        a.d(t, 'b', function () {
          return b
        }),
        a.d(t, 'a', function () {
          return v
        })
      var n = a('KEM+'),
        r = a.n(n),
        o = a('yiKp'),
        i = a.n(o),
        l = (a('ho0z'), a('tQbP'), a('hBpG'), a('7x/C'), a('JtPf'), a('oEOe')),
        s = a('kGix'),
        c = a('ikiw'),
        u = a('Ssj5'),
        d = a('RqPI'),
        p = 'availableLanguages',
        h = 'rweb/'.concat(p),
        f = l.a(h, 'FETCH_AVAILABLE_LANGUAGES'),
        g = { fetchStatus: s.a.NONE, languages: [] }
      function m() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = t.meta && t.meta.lang ? t.meta.lang : 'en',
          n = 'undefined' != typeof Intl && Intl.Collator && new Intl.Collator(a),
          r = n
            ? function (e, t) {
                return n.compare(e.name, t.name)
              }
            : void 0
        switch (t.type) {
          case f.REQUEST:
            return i()(i()({}, e), {}, { fetchStatus: s.a.LOADING })
          case f.FAILURE:
            return i()(i()({}, e), {}, { error: t.payload, fetchStatus: s.a.FAILED })
          case f.SUCCESS:
            return i()(i()({}, e), {}, { languages: t.payload.sort(r), fetchStatus: s.a.LOADED })
          default:
            return e
        }
      }
      u.a.register(r()({}, p, m))
      var y = function (e) {
          return e[p].languages
        },
        b = function (e, t) {
          var a = Object(c.c)(t).toLowerCase(),
            n = e[p].languages.find(function (e) {
              return e.code === a
            })
          return n ? n.name : null
        },
        v = function () {
          return function (e, t) {
            return t()[p].fetchStatus === s.a.LOADED ? Promise.resolve() : e(_())
          }
        },
        _ = function (e) {
          return function (t, a, n) {
            var r = n.api
            return l.b(t, { params: e, meta: { lang: Object(d.p)(a()) }, request: r.FeatureSwitch.fetchLanguages })({
              actionTypes: f,
              context: 'FETCH_AVAILABLE_LANGUAGES',
            })
          }
        }
    },
    S8sr: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return R
      })
      var n = a('yiKp'),
        r = a.n(n),
        o = a('VrFO'),
        i = a.n(o),
        l = a('Y9Ll'),
        s = a.n(l),
        c = a('1Pcy'),
        u = a.n(c),
        d = a('5Yy7'),
        p = a.n(d),
        h = a('2VqO'),
        f = a.n(h),
        g = a('KEM+'),
        m = a.n(g),
        y = (a('Blm6'), a('KqXw'), a('Ysgh'), a('z84I'), a('jQ3i'), a('x4t0'), a('ERkP')),
        b = a.n(y),
        v = a('nS1w'),
        _ = a('t62R'),
        x = a('p+r5'),
        C = a('3XMw'),
        E = a.n(C),
        I = a('6XNv'),
        D = a('rHpw'),
        T = a('aITJ'),
        L = a('MWbm'),
        S = E.a.jf83d091,
        w = E.a.af4abf2f,
        k = E.a.b871f28f,
        F = 1,
        R = (function (e) {
          p()(a, e)
          var t = f()(a)
          function a(e) {
            var n
            i()(this, a),
              (n = t.call(this, e)),
              m()(u()(n), '_handleSelectorChange', function (e, t) {
                var a = n.props,
                  o = a.day,
                  i = a.month,
                  l = a.year,
                  s = r()(r()({}, { day: o, month: i, year: l }), {}, m()({}, e, parseInt(t, 10)))
                n.props.onChange(s)
              }),
              m()(u()(n), '_handleDayChange', function (e) {
                n._handleSelectorChange('day', e)
              }),
              m()(u()(n), '_handleMonthChange', function (e) {
                n._handleSelectorChange('month', e)
              }),
              m()(u()(n), '_handleYearChange', function (e) {
                n._handleSelectorChange('year', e)
              }),
              m()(u()(n), '_handleDateChange', function (e) {
                var t = e.target.value.split('-'),
                  a = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) }
                n.props.onChange(a)
              })
            var o = e.day,
              l = e.maxSelectableYear,
              s = e.minSelectableYear,
              c = e.month,
              d = e.year
            return (
              (n._errorID = 'DATE_INPUT_'.concat(F, '_ERROR')),
              (n._monthOptions = v.c()),
              (n._nativeDefaultValue = v.e(o, c, d)),
              (n._nativeMaxDate = v.e(31, 12, l)),
              (n._nativeMinDate = v.e(1, 1, s)),
              (F += 1),
              n
            )
          }
          return (
            s()(a, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    a = t.day,
                    n = t.month,
                    r = t.onChange,
                    o = t.year,
                    i = n && n !== e.month,
                    l = o && o !== e.year
                  ;(i || l) &&
                    (v
                      .b(n, o)
                      .map(function (e) {
                        return parseInt(e.value, 10)
                      })
                      .includes(a) ||
                      r({ month: n, year: o, day: void 0 }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.errorMessage
                  return b.a.createElement(
                    L.a,
                    null,
                    T.b.isMobileOS() ? this._renderNativeDateInput() : this._renderSelectors(),
                    e ? b.a.createElement(_.b, { color: 'red500', nativeID: this._errorID }, e) : null,
                  )
                },
              },
              {
                key: '_renderSelectors',
                value: function () {
                  var e = this.props,
                    t = e.day,
                    a = e.month,
                    n = e.year,
                    r = e.errors,
                    o = void 0 === r ? {} : r,
                    i = e.label,
                    l = e.autofocus,
                    s = e.monthSelectorTestID,
                    c = e.daySelectorTestID,
                    u = e.yearSelectorTestID,
                    d = e.style,
                    p = e.minSelectableYear,
                    h = e.maxSelectableYear,
                    f = v.b(a, n),
                    g = v.d(p, h, t, a)
                  return b.a.createElement(
                    L.a,
                    { accessibilityLabel: i, accessibilityRole: 'group', style: [O.selectorsContainer, d] },
                    b.a.createElement(I.a, {
                      accessibilityDescribedBy: o.month ? this._errorID : void 0,
                      autofocus: l,
                      hasError: o.month,
                      label: w,
                      onChange: this._handleMonthChange,
                      options: this._monthOptions,
                      style: O.monthSelector,
                      testID: s,
                      value: a ? ''.concat(a) : '',
                      withEmptyOption: !0,
                    }),
                    b.a.createElement(I.a, {
                      accessibilityDescribedBy: o.day ? this._errorID : void 0,
                      hasError: o.day,
                      label: S,
                      onChange: this._handleDayChange,
                      options: f,
                      style: O.daySelector,
                      testID: c,
                      value: t ? ''.concat(t) : '',
                      withEmptyOption: !0,
                    }),
                    b.a.createElement(I.a, {
                      accessibilityDescribedBy: o.year ? this._errorID : void 0,
                      hasError: o.year,
                      label: k,
                      onChange: this._handleYearChange,
                      options: g,
                      style: O.yearSelector,
                      testID: u,
                      value: n ? ''.concat(n) : '',
                      withEmptyOption: !0,
                    }),
                  )
                },
              },
              {
                key: '_renderNativeDateInput',
                value: function () {
                  var e = this.props.label
                  return b.a.createElement(x.a, {
                    defaultValue: this._nativeDefaultValue,
                    label: e,
                    max: this._nativeMaxDate,
                    min: this._nativeMinDate,
                    name: e,
                    numberOfLines: 1,
                    onChange: this._handleDateChange,
                    style: O.dateInputRoot,
                    type: 'date',
                  })
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        O = D.a.create(function (e) {
          return {
            selectorsContainer: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            monthSelector: { flexGrow: 2, marginRight: e.spaces.space12 },
            daySelector: { flexGrow: 1, marginRight: e.spaces.space12 },
            yearSelector: { flexGrow: 1 },
            dateInputRoot: { paddingHorizontal: 0 },
          }
        })
    },
    nS1w: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return g
      }),
        a.d(t, 'd', function () {
          return m
        }),
        a.d(t, 'b', function () {
          return b
        }),
        a.d(t, 'e', function () {
          return v
        })
      var n,
        r = a('KEM+'),
        o = a.n(r),
        i = (a('z84I'), a('+KXO'), a('LW0h'), a('7x/C'), a('wFPu'), a('2G9S'), a('3XMw')),
        l = a.n(i),
        s = a('mtvn'),
        c =
          ((n = {}),
          o()(n, 1, { label: l.a.hac89abf, numDays: 31 }),
          o()(n, 2, { label: l.a.ef30b309, numDays: 28, numDaysLeapYear: 29 }),
          o()(n, 3, { label: l.a.b56920fa, numDays: 31 }),
          o()(n, 4, { label: l.a.b1a0f1ec, numDays: 30 }),
          o()(n, 5, { label: l.a.daf779c8, numDays: 31 }),
          o()(n, 6, { label: l.a.c6ad074d, numDays: 30 }),
          o()(n, 7, { label: l.a.f1db106b, numDays: 31 }),
          o()(n, 8, { label: l.a.i4e80b7a, numDays: 31 }),
          o()(n, 9, { label: l.a.efa6cc1d, numDays: 30 }),
          o()(n, 10, { label: l.a.f40a0cbe, numDays: 31 }),
          o()(n, 11, { label: l.a.ac74a31c, numDays: 30 }),
          o()(n, 12, { label: l.a.i6c1e4b2, numDays: 31 }),
          n),
        u = function (e) {
          return { label: ''.concat(e), value: ''.concat(e) }
        },
        d = Object(s.a)(1, 29).map(u),
        p = Object(s.a)(1, 30).map(u),
        h = Object(s.a)(1, 31).map(u),
        f = Object(s.a)(1, 32).map(u),
        g = function () {
          return Object.keys(c).map(function (e) {
            return { label: c[e].label, value: e }
          })
        },
        m = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = arguments.length > 2 ? arguments[2] : void 0,
            n = arguments.length > 3 ? arguments[3] : void 0,
            r = t || new Date(Date.now()).getFullYear()
          return Object(s.a)(e, r + 1)
            .reverse()
            .filter(function (e) {
              return 2 === n && 29 === a ? y(e) : e
            })
            .map(u)
        },
        y = function (e) {
          return 1 === new Date(e, 1, 29).getMonth()
        },
        b = function (e, t) {
          if (!e) return f
          switch (2 === e && (!t || (t && y(t))) ? c[e].numDaysLeapYear : c[e].numDays) {
            case 28:
              return d
            case 29:
              return p
            case 30:
              return h
            case 31:
            default:
              return f
          }
        },
        v = function (e, t, a) {
          if ('number' == typeof e && 'number' == typeof t && 'number' == typeof a) {
            var n = t < 10 ? '0'.concat(t) : ''.concat(t),
              r = e < 10 ? '0'.concat(e) : ''.concat(e)
            return ''.concat(a, '-').concat(n, '-').concat(r)
          }
          return ''
        }
      t.a = { getFormattedDateValue: v }
    },
    oFxb: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return I
      })
      var n = a('VrFO'),
        r = a.n(n),
        o = a('Y9Ll'),
        i = a.n(o),
        l = a('1Pcy'),
        s = a.n(l),
        c = a('5Yy7'),
        u = a.n(c),
        d = a('2VqO'),
        p = a.n(d),
        h = a('KEM+'),
        f = a.n(h),
        g = (a('ho0z'), a('1t7P'), a('jQ/y'), a('uFXj'), a('ERkP')),
        m = a.n(g),
        y = a('zfvc'),
        b = a('t62R'),
        v = a('fyvP'),
        _ = a('rHpw'),
        x = a('CK8+'),
        C = a('MWbm'),
        E = 1,
        I = (function (e) {
          u()(a, e)
          var t = p()(a)
          function a() {
            var e
            return (
              r()(this, a),
              (e = t.call(this)),
              f()(s()(e), '_handleGateToggle', function () {
                var t = e.props,
                  a = t.defaultOption,
                  n = t.name,
                  r = t.offValue,
                  o = t.onChange,
                  i = t.options
                o(n, t.value === r ? (null == a ? void 0 : a.value) || i[0].value : r)
              }),
              f()(s()(e), '_handleAnimationComplete', function () {
                e._radioGroupRef && e._radioGroupRef.focus()
              }),
              f()(s()(e), '_setRadioGroupRef', function (t) {
                e._radioGroupRef = t
              }),
              (e._labelId = 'RADIO_GROUP_'.concat(E, '_LABEL')),
              (E += 1),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.description,
                    n = e.disabled,
                    r = e.label,
                    o = e.name,
                    i = e.offValue,
                    l = e.onChange,
                    s = e.options,
                    c = e.value
                  return m.a.createElement(
                    C.a,
                    {
                      accessibilityLabel: t,
                      accessibilityLabelledBy: r && !t ? this._labelId : void 0,
                      accessibilityRole: 'group',
                      style: [D.root, n && D.disabled],
                    },
                    m.a.createElement(
                      m.a.Fragment,
                      null,
                      r
                        ? m.a.createElement(
                            C.a,
                            { accessibilityRole: 'label', nativeID: this._labelId, style: D.header },
                            m.a.createElement(
                              C.a,
                              { style: D.label },
                              m.a.createElement(b.b, { weight: 'bold' }, r),
                              m.a.createElement(x.a, {
                                disabled: n,
                                onValueChange: this._handleGateToggle,
                                value: c !== i,
                              }),
                            ),
                            a ? m.a.createElement(b.b, { color: 'gray700', size: 'subtext2' }, a) : null,
                          )
                        : null,
                      s &&
                        m.a.createElement(
                          y.b,
                          { onAnimateComplete: this._handleAnimationComplete, show: c !== i },
                          m.a.createElement(
                            C.a,
                            null,
                            m.a.createElement(
                              C.a,
                              { style: D.radioGroup, tabIndex: 0 },
                              m.a.createElement(v.a, {
                                accessibilityLabel: t || r,
                                disabled: n,
                                name: o,
                                onChange: l,
                                options: s,
                                ref: this._setRadioGroupRef,
                                value: c,
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
        })(m.a.Component)
      f()(I, 'defaultProps', { disabled: !1 })
      var D = _.a.create(function (e) {
        return {
          root: { backgroundColor: e.colors.cellBackground },
          header: {
            alignItems: 'flex-start',
            marginHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space16,
          },
          label: {
            paddingBottom: e.spaces.space4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          },
          radioGroup: {
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            marginHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          disabled: { opacity: 0.5 },
        }
      })
    },
    'p+r5': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return W
      })
      a('yiKp')
      var n = a('97Jx'),
        r = a.n(n),
        o = a('m3Bd'),
        i = a.n(o),
        l = a('VrFO'),
        s = a.n(l),
        c = a('Y9Ll'),
        u = a.n(c),
        d = a('1Pcy'),
        p = a.n(d),
        h = a('5Yy7'),
        f = a.n(h),
        g = a('2VqO'),
        m = a.n(g),
        y = a('KEM+'),
        b = a.n(y),
        v = (a('2G9S'), a('ERkP')),
        _ = a.n(v),
        x = a('38/B'),
        C = a('t62R'),
        E = a('/yvb'),
        I = a('piX5'),
        D = a('3XMw'),
        T = a.n(D),
        L = a('tI3i'),
        S = a.n(L),
        w = a('oQhu'),
        k = a('rHpw'),
        F = a('aITJ'),
        R = a('MWbm'),
        O = a('n5fo'),
        V = a('5emT'),
        P = a('Oib4'),
        A = a('WtWS'),
        z = a('ioan'),
        B = [
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
        H = function (e) {
          return e.length
        },
        K = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H
          return t(e)
        },
        M = T.a.de540c32,
        j = T.a.b4abfdb3,
        W = (function (e) {
          f()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            s()(this, a),
              (n = t.call(this, e)),
              b()(p()(n), '_blurOnBackspaceKeyUpForKaiOS', !1),
              b()(p()(n), '_isLabelLarge', function () {
                var e = n.state,
                  t = e.actualCount,
                  a = e.isFocused
                return !t && !a
              }),
              b()(
                p()(n),
                '_getTextInputStyle',
                Object(w.a)(function (e) {
                  return [G.root, !e && G.disabled]
                }),
              ),
              b()(p()(n), '_getTextInputType', function () {
                var e = n.props,
                  t = e.showPasswordVisibilityIcon,
                  a = e.type,
                  r = n.state.isPasswordRevealed
                return 'password' === a && t ? (r ? 'text' : 'password') : a
              }),
              b()(p()(n), '_calculateLength', function (e) {
                return K(e, n.props.calculateLength)
              }),
              b()(p()(n), '_shouldRenderDisplayCount', function () {
                var e = n.state.isFocused,
                  t = n._isFormInvalid()
                return Boolean((e || t) && n._getMaxDisplayCount())
              }),
              b()(p()(n), '_isInvalidNumber', function () {
                var e,
                  t,
                  a,
                  r,
                  o,
                  i = n.props.type,
                  l =
                    null === (e = n._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  s =
                    null === (a = n._textInput) ||
                    void 0 === a ||
                    null === (r = a.textInputNode) ||
                    void 0 === r ||
                    null === (o = r.validity) ||
                    void 0 === o
                      ? void 0
                      : o.badInput
                return 'number' === i && '' === l && !0 === s
              }),
              b()(p()(n), '_getActualCount', function (e) {
                var t = e.length
                return n._isInvalidNumber() && (t = 1), t
              }),
              b()(p()(n), '_handleBlur', function () {
                var e,
                  t = n.props.onBlur,
                  a = (null === (e = n._textInput) || void 0 === e ? void 0 : e.getValue()) || '',
                  r = n._calculateLength(a),
                  o = n._getActualCount(a)
                n.setState({ isFocused: !1, displayCount: r, actualCount: o }), t && t()
              }),
              b()(p()(n), '_handleChange', function (e) {
                var t = n.props.onChange,
                  a = n.state.previousValue,
                  r = e.currentTarget.value,
                  o = n._calculateLength(r),
                  i = n._getActualCount(r),
                  l = n._getAdjustedMaxLength()
                void 0 !== l && r.length > l && a.length < r.length
                  ? (e.currentTarget.value = a)
                  : (n.setState({
                      isFocused: !0,
                      displayCount: o,
                      actualCount: i,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              b()(p()(n), '_handleFocus', function () {
                var e = n.props.onFocus
                n.setState({ isFocused: !0 }), e && e()
              }),
              b()(p()(n), '_handleKeyPress', function (e) {
                var t = n.props,
                  a = t.multiline,
                  r = t.onKeyPress,
                  o = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || a || !o || (e.preventDefault(), o(e))
              }),
              b()(p()(n), '_handleKeyDown', function (e) {
                var t = n.props.onKeyDown,
                  a = 0 === n.state.displayCount
                F.b.isKaiOS() && 'Backspace' === e.key && a ? (n._blurOnBackspaceKeyUpForKaiOS = a) : t && t(e)
              }),
              b()(p()(n), '_handleKeyUp', function (e) {
                var t = n.props.onKeyUp
                F.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  n._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), n.blur()),
                  t && t(e)
              }),
              b()(p()(n), '_handlePasswordVisibilityClick', function (e) {
                n.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              b()(p()(n), '_setTextInputRef', function (e) {
                n._textInput = e
              }),
              b()(p()(n), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  a = e.maxLength,
                  n = e.onChange,
                  r = e.validLength,
                  o = !!n,
                  i = 'string' == typeof e.value,
                  l = 'string' == typeof t
                S()(
                  !(!l && i && !o),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  S()(!(a && r && r > a), 'Max length should be equal or greater than valid length.'),
                  S()(
                    !((void 0 !== a && a <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              b()(p()(n), '_exceedsValidLength', function (e) {
                var t = n._getMaxDisplayCount()
                return !!t && e > t
              }),
              b()(p()(n), '_getMaxDisplayCount', function () {
                return n.props.validLength || n.props.maxLength
              }),
              b()(p()(n), '_getAdjustedMaxLength', function () {
                var e = n.props.maxLength,
                  t = n.getValue(),
                  a = n._calculateLength(t)
                return e ? e + t.length - a : void 0
              }),
              n._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              o = e.value || r || ''
            return (
              (n.state = {
                displayCount: n._calculateLength(o),
                actualCount: H(o),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: o,
              }),
              n
            )
          }
          return (
            u()(
              a,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      a = t.maxLength,
                      n = t.onChange,
                      r = t.validLength,
                      o = t.value,
                      i = e.maxLength,
                      l = e.onChange,
                      s = e.validLength,
                      c = e.value
                    ;(s === r && a === i && !!n === !!l && ('string' == typeof o) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      a = e.editable,
                      n = e.errorText,
                      r = e.helperText,
                      o = e.style,
                      i = this.state.isFocused,
                      l = this._isFormInvalid()
                    return _.a.createElement(
                      R.a,
                      { style: [U.root, o] },
                      _.a.createElement(
                        R.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            I.a.border,
                            U.textInputFormStyle,
                            l && I.a.invalidBorderColor,
                            i && l && I.a.focusedBorderInvalid,
                            i && !l && I.a.focusedBorderValid,
                            !a && I.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          R.a,
                          { style: U.textInputFormWrapper },
                          _.a.createElement(
                            R.a,
                            { style: U.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        R.a,
                        { style: [U.sidePadding, U.underTextInputForm] },
                        _.a.createElement(
                          R.a,
                          { style: U.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          l && n ? this._renderErrorText() : null,
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
                      a = this._isFormInvalid() ? 'red500' : t,
                      n = this._isLabelLarge()
                    return _.a.createElement(
                      C.b,
                      {
                        color: n ? 'gray700' : a,
                        numberOfLines: 1,
                        size: n ? 'headline1' : 'subtext2',
                        style: [
                          U.textInputHeaderItem,
                          n && U.placeholderText,
                          !x.a.reducedMotionEnabled && U.transition,
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
                      a = (e.accessibilityLabel, e.calculateLength, e.editable),
                      n =
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
                      o = (e.style, e.type, e.validLength, i()(e, B))
                    return _.a.createElement(
                      R.a,
                      { style: G.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        C.b,
                        { size: 'headline1', style: G.wrapper },
                        _.a.createElement(
                          z.a,
                          r()({}, o, {
                            editable: a,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(a),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      n && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      a = e.type,
                      n = this.state.isPasswordRevealed
                    return 'password' === a && t
                      ? _.a.createElement(
                          R.a,
                          { style: U.passwordVisibilityIconContainer },
                          _.a.createElement(E.a, {
                            accessibilityLabel: n ? j : M,
                            focusable: !0,
                            hoverLabel: { label: n ? j : M },
                            icon: n ? _.a.createElement(O.a, null) : _.a.createElement(V.a, null),
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
                      R.a,
                      { accessibilityLiveRegion: 'polite' },
                      _.a.createElement(
                        C.b,
                        { color: 'gray700', size: 'subtext2', style: U.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return _.a.createElement(
                      R.a,
                      { accessibilityLiveRegion: 'assertive' },
                      _.a.createElement(
                        C.b,
                        { color: 'red500', size: 'subtext2', style: U.subtext },
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
                      a = this._exceedsValidLength(e),
                      n = t && T.a.ia24dc8c(t),
                      r = T.a.ia24dc8c(e)
                    return _.a.createElement(
                      R.a,
                      { accessibilityLiveRegion: 'polite', style: [U.textInputHeaderItem, U.displayCount] },
                      _.a.createElement(
                        C.b,
                        { color: a ? 'red500' : 'gray700', size: 'subtext2' },
                        n ? ''.concat(r, ' / ').concat(n) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      a = [U.icon, t && U.focusedIcon]
                    return e && _.a.createElement(e, { style: a })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? _.a.createElement(P.a, { style: [U.validationIcon, I.a.invalidColor] })
                      : _.a.createElement(A.a, { style: [U.validationIcon, I.a.validColor] })
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
                    var a = e.calculateLength,
                      n = e.value,
                      r = 'string' == typeof n ? K(n, a) : 0
                    return 'string' == typeof n && r !== t.displayCount
                      ? { displayCount: r, actualCount: n.length }
                      : null
                  },
                },
              ],
            ),
            a
          )
        })(_.a.Component)
      b()(W, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (W.propTypes = {})
      var G = k.a.create(function (e) {
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
        U = k.a.create(function (e) {
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
    piX5: function (e, t, a) {
      'use strict'
      a('uFXj'), a('2G9S')
      var n = a('rHpw').a.create(function (e) {
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
      t.a = n
    },
    u3ZE: function (e, t, a) {
      'use strict'
      t.a = {
        AdvancedSearchPage: 'advanced_search_page',
        CashtagClick: 'cashtag_click',
        HashtagClick: 'hashtag_click',
        PromotedTrendClick: 'promoted_trend_click',
        RecentSearchClick: 'recent_search_click',
        SavedSearchClick: 'saved_search_click',
        RelatedQueryClick: 'related_query_click',
        SpellingCorrectionClick: 'spelling_correction_click',
        SpellingCorrectionRevertClick: 'spelling_suggestion_revert_click',
        SpellingExpansionClick: 'spelling_expansion_click',
        SpellingExpansionRevertClick: 'spelling_expansion_revert_click',
        SpellingSuggestionClick: 'spelling_suggestion_click',
        TrendClick: 'trend_click',
        TrendView: 'trend_view',
        TypeaheadClick: 'typeahead_click',
        Typed: 'typed_query',
        TweetDetailQuoteTweet: 'tdqt',
      }
    },
  },
])
//# sourceMappingURL=WIPED
