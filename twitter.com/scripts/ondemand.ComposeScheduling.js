;(window.webpackJsonp = window.webpackJsonp || []).push([
  [202],
  {
    '+/sI': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return b
      }),
        a.d(t, 'b', function () {
          return y
        })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        l = a('5Yy7'),
        s = a.n(l),
        c = a('2VqO'),
        d = a.n(c),
        u = (a('Wd/2'), a('M+/F'), a('2G9S'), a('ERkP')),
        h = a.n(u),
        f = a('TGcR'),
        m = a('t62R'),
        p = a('a6qo'),
        g = a('rHpw'),
        b = 'animated_gif',
        y = 'video',
        _ = (function (e) {
          s()(a, e)
          var t = d()(a)
          function a() {
            return r()(this, a), t.apply(this, arguments)
          }
          return (
            o()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.durationInMilliseconds,
                    n = t.type
                  if (n === b || 'vine' === n)
                    e =
                      n === b
                        ? h.a.createElement(m.b, { weight: 'bold' }, 'GIF')
                        : h.a.createElement(f.a, { style: v.icon })
                  else if (n === y && a) {
                    var r = Math.trunc(a / 6e4),
                      i = '0'.concat(Math.trunc((a % 6e4) / 1e3)).slice(-2)
                    e = h.a.createElement(m.b, { color: 'white' }, ''.concat(r, ':').concat(i))
                  }
                  return e ? h.a.createElement(p.a, { align: 'left' }, e) : null
                },
              },
            ]),
            a
          )
        })(h.a.PureComponent),
        v = g.a.create(function (e) {
          return { icon: { color: e.colors.white } }
        })
      t.c = _
    },
    '77Ml': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return A
      })
      var n,
        r = a('ddV6'),
        i = a.n(r),
        o = a('VrFO'),
        l = a.n(o),
        s = a('Y9Ll'),
        c = a.n(s),
        d = a('1Pcy'),
        u = a.n(d),
        h = a('5Yy7'),
        f = a.n(h),
        m = a('2VqO'),
        p = a.n(m),
        g = a('KEM+'),
        b = a.n(g),
        y = a('RhWx'),
        _ = a.n(y),
        v =
          (a('lTEL'),
          a('7x/C'),
          a('kYxP'),
          a('M+/F'),
          a('2G9S'),
          a('Blm6'),
          a('z84I'),
          a('TJCb'),
          a('DZ+c'),
          a('KqXw'),
          a('WNMA'),
          a('Ysgh'),
          a('ERkP')),
        w = a.n(v),
        T = a('t62R'),
        E = a('p+r5'),
        D = a('6XNv'),
        C = a('rHpw'),
        S = a('aITJ'),
        x = a('MWbm'),
        I = a('T0aG'),
        F = a.n(I),
        k =
          (a('FwaZ'),
          (n = {}),
          function (e) {
            var t = void 0 === e ? 'undefined' : e.toString()
            if (!n.hasOwnProperty(t)) {
              var a = { use24HourTime: !!e, hourFormat: e ? '2-digit' : 'numeric', minuteFormat: '2-digit' }
              if ('object' === F()(window.Intl)) {
                var r = new window.Intl.DateTimeFormat('default', {
                  hour12: void 0 === e ? void 0 : !e,
                  hour: 'numeric',
                  minute: 'numeric',
                }).resolvedOptions()
                ;(a.use24HourTime = !r.hour12),
                  (a.hourFormat = r.hour || a.hourFormat),
                  (a.minuteFormat = r.minute || a.minuteFormat)
              }
              n[t] = a
            }
            return n[t]
          }),
        O = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '0',
            n = a.repeat(t),
            r = 'number' == typeof e ? ''.concat(e) : ''
          return r.length >= t ? r : ''.concat(n).concat(r).slice(-t)
        },
        L = _()(Array(24).keys()),
        M = _()(Array(13).keys()).slice(1),
        R = _()(Array(60).keys()),
        A = (function (e) {
          f()(a, e)
          var t = p()(a)
          function a() {
            var e
            l()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(u()(e), '_handleChange', function (t) {
                var a = e.props,
                  n = a.hour,
                  r = a.minute,
                  i = a.onChange
                ;(t.hour === n && t.minute === r) || i(t)
              }),
              b()(u()(e), '_handleNativeChange', function (t) {
                var a = t.target.value
                e._handleChange(B.parse(a))
              }),
              b()(u()(e), '_handleHourChange', function (t) {
                var a,
                  n = e._getLocale().use24HourTime,
                  r = e.props,
                  i = r.hour,
                  o = r.minute
                t && ((a = parseInt(t, 10)), n || 'number' != typeof i || (i > 12 ? (a = (a + 12) % 24) : (a %= 12))),
                  e._handleChange(new B(a, o))
              }),
              b()(u()(e), '_handleMinuteChange', function (t) {
                var a = e.props.hour,
                  n = t ? parseInt(t, 10) : void 0
                e._handleChange(new B(a, n))
              }),
              b()(u()(e), '_handleAmPmChange', function (t) {
                var a = e.props.hour,
                  n = e.props.minute
                switch (t) {
                  case 'am':
                    'number' == typeof a && a >= 12 && (a -= 12)
                    break
                  case 'pm':
                    'number' == typeof a && a < 12 && (a += 12)
                }
                e._handleChange(new B(a, n))
              }),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.disabled,
                    n = e.errorText,
                    r = e.helperText,
                    i = e.invalid,
                    o = e.label,
                    l = e.style,
                    s = !!i,
                    c = S.b.isMobileOS()
                  return w.a.createElement(
                    x.a,
                    { style: [a && j.disabled, l] },
                    w.a.createElement(
                      x.a,
                      { accessibilityLabel: t || o, accessibilityRole: 'group' },
                      w.a.createElement(T.b, { color: 'gray700' }, o),
                      c
                        ? w.a.createElement(x.a, { style: j.containerNative }, this._renderNativeInput())
                        : w.a.createElement(x.a, { style: j.containerSelectors }, this._renderSelectors()),
                    ),
                    w.a.createElement(
                      x.a,
                      { style: j.subtextWrapper },
                      r ? this._renderHelperText() : null,
                      s && n ? this._renderErrorText() : null,
                    ),
                  )
                },
              },
              {
                key: '_getLocale',
                value: function () {
                  var e = this.props.use24HourTime
                  return k(e)
                },
              },
              {
                key: '_getFields',
                value: function () {
                  var e = this.props,
                    t = e.amPmLabel,
                    a = e.hour,
                    n = e.hourLabel,
                    r = e.minute,
                    i = e.minuteLabel,
                    o = new B(a, r),
                    l = o.hour,
                    s = o.minute,
                    c = this._getLocale(),
                    d = c.hourFormat,
                    u = c.minuteFormat,
                    h = c.use24HourTime,
                    f = 'number' == typeof l ? (l < 12 ? 'am' : 'pm') : void 0,
                    m = h ? L : M,
                    p = R,
                    g = '2-digit' === d ? 2 : 1,
                    b = '2-digit' === u ? 2 : 1,
                    y = []
                  return (
                    y.push({
                      label: n,
                      options: m.map(function (e) {
                        return { label: O(e, g), value: ''.concat(e) }
                      }),
                      onChange: this._handleHourChange,
                      value: 'number' == typeof l ? ''.concat(h ? l : l % 12 || 12) : '',
                      withEmptyOption: !0,
                    }),
                    y.push({
                      label: i,
                      options: p.map(function (e) {
                        return { label: O(e, b), value: ''.concat(e) }
                      }),
                      onChange: this._handleMinuteChange,
                      value: 'number' == typeof s ? ''.concat(s) : '',
                      withEmptyOption: !0,
                    }),
                    h ||
                      y.push({
                        label: t,
                        options: [
                          { label: 'AM', value: 'am' },
                          { label: 'PM', value: 'pm' },
                        ],
                        onChange: this._handleAmPmChange,
                        value: void 0 !== f ? f : '',
                        withEmptyOption: void 0 === l || void 0 === s,
                      }),
                    y
                  )
                },
              },
              {
                key: '_renderNativeInput',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    a = e.disabled,
                    n = e.hour,
                    r = e.label,
                    i = e.minute,
                    o = new B(n, i)
                  return w.a.createElement(E.a, {
                    autoCapitalize: 'none',
                    autoComplete: 'off',
                    autoCorrect: !1,
                    autoFocus: t,
                    editable: !a,
                    label: r,
                    name: 'timeInput',
                    numberOfLines: 1,
                    onChange: this._handleNativeChange,
                    spellCheck: 'false',
                    style: j.native,
                    type: 'time',
                    value: o.toString(),
                  })
                },
              },
              {
                key: '_renderSelectors',
                value: function () {
                  var e = this.props,
                    t = e.autoFocus,
                    a = e.disabled,
                    n = !!e.invalid,
                    r = this._getFields()
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    r.map(function (e, r) {
                      return w.a.createElement(D.a, {
                        autofocus: 0 === r ? t : void 0,
                        disabled: a,
                        hasError: n,
                        key: e.label,
                        label: e.label,
                        onChange: e.onChange,
                        options: e.options,
                        value: e.value,
                        withEmptyOption: e.withEmptyOption,
                      })
                    }),
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  var e = this.props.helperText
                  return w.a.createElement(
                    x.a,
                    { accessibilityLiveRegion: 'polite' },
                    w.a.createElement(T.b, { color: 'gray700', style: j.subtext }, e),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  var e = this.props.errorText
                  return w.a.createElement(
                    x.a,
                    { accessibilityLiveRegion: 'assertive' },
                    w.a.createElement(T.b, { color: 'magenta500', style: j.subtext }, e),
                  )
                },
              },
            ]),
            a
          )
        })(w.a.Component)
      b()(A, 'defaultProps', { amPmLabel: 'AM/PM', hourLabel: 'Hour', minuteLabel: 'Minute' }), (A.propTypes = {})
      var B = (function () {
          function e(t, a) {
            l()(this, e)
            var n = 'number' == typeof t ? Math.max(Math.min(t, 23), 0) : void 0,
              r = 'number' == typeof a ? Math.max(Math.min(a, 59), 0) : void 0
            Object.defineProperty(this, 'hour', { value: n, enumerable: !0 }),
              Object.defineProperty(this, 'minute', { value: r, enumerable: !0 })
          }
          return (
            c()(
              e,
              [
                {
                  key: 'toString',
                  value: function () {
                    var e = 'number' == typeof this.hour,
                      t = 'number' == typeof this.minute
                    return e && t ? ''.concat(O(this.hour), ':').concat(O(this.minute)) : ''
                  },
                },
              ],
              [
                {
                  key: 'parse',
                  value: function (t) {
                    var a, n
                    if (t && t.match(/^(0?[0-9]|1[0-9]|2[0-3]):([0-5]?[0-9])$/)) {
                      var r = t.split(':'),
                        o = i()(r, 2),
                        l = o[0],
                        s = o[1]
                      ;(a = parseInt(l, 10)), (n = parseInt(s, 10))
                    }
                    return new e(a, n)
                  },
                },
              ],
            ),
            e
          )
        })(),
        j = C.a.create(function (e) {
          return {
            containerNative: { paddingTop: e.spaces.space2 },
            containerSelectors: {
              display: 'grid',
              gridColumnGap: e.spaces.space12,
              gridTemplateColumns: '1fr 1fr 1fr',
              paddingTop: e.spaces.space2,
            },
            disabled: { cursor: 'default', opacity: 0.5 },
            native: { paddingVertical: 0, paddingHorizontal: 0 },
            subtextWrapper: { flexDirection: 'column', flex: 1 },
            subtext: { paddingTop: e.spaces.space4 },
          }
        })
    },
    DFWg: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'Unsent', function () {
          return Ge
        })
      var n,
        r = a('yiKp'),
        i = a.n(r),
        o = a('1Pcy'),
        l = a.n(o),
        s = a('KEM+'),
        c = a.n(s),
        d = a('Y9Ll'),
        u = a.n(d),
        h = a('VrFO'),
        f = a.n(h),
        m = a('5Yy7'),
        p = a.n(m),
        g = a('2VqO'),
        b = a.n(g),
        y = a('mAxt'),
        _ = a.n(y),
        v =
          (a('849X'),
          a('TJCb'),
          a('2G9S'),
          a('jQ3i'),
          a('x4t0'),
          a('z84I'),
          a('LW0h'),
          a('7x/C'),
          a('lTEL'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          a('KqXw'),
          a('WNMA'),
          a('Ysgh'),
          a('KOtZ'),
          a('uFXj'),
          a('ERkP')),
        w = a.n(v),
        T = a('xVN5'),
        E = a('1YZw'),
        D = a('AspN'),
        C = a('rxPX'),
        S = a('0KEI'),
        x = a('rU/Q'),
        I = a('XpKj'),
        F = Object(C.a)()
          .propsFromState(function () {
            return { draftTweets: x.e, draftsFetchStatus: x.f, scheduledTweets: I.f, scheduledFetchStatus: I.e }
          })
          .propsFromActions(function () {
            return {
              addMedia: D.b,
              setMediaMetadata: D.n,
              addToast: E.b,
              createDraftTweetApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(x.d),
              createScheduledTweetApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(I.d),
              deleteDraftTweet: x.a,
              deleteScheduledTweet: I.a,
              fetchDraftTweets: x.c,
              fetchScheduledTweets: I.c,
              updateSingleComposer: T.w,
            }
          })
          .withAnalytics({ page: 'unsent_tweets' }),
        k = a('JYYi'),
        O = a('c0ZR'),
        L = a('v//M'),
        M = a('jHSc'),
        R = a('3XMw'),
        A = a.n(R),
        B = a('Y6L+'),
        j = (a('ho0z'), a('+KXO'), a('vrRf'), a('QbaN')),
        P = a('Oib4'),
        H = a('YeIG'),
        U = a('S1qy'),
        Y = a.n(U),
        z = a('zmS9'),
        V = a('q2Cp'),
        W = Object(C.a)().propsFromActions(function (e) {
          var t = e.isDraft
          return {
            createLocalApiErrorHandler: t
              ? Object(S.createLocalApiErrorHandlerWithContextFactory)(x.b)
              : Object(S.createLocalApiErrorHandlerWithContextFactory)(I.b),
            deleteUnsentTweet: function (e) {
              return t ? Object(x.a)(e) : Object(I.a)(e)
            },
          }
        }),
        q = a('k49u'),
        N = a('LVU8'),
        K = A.a.g3472106,
        G = ((n = {}), c()(n, q.a.InternalError, { toast: Object(N.a)(K) }), c()(n, 'showToast', !0), n),
        X = a('eb3s'),
        Q = a('/yvb'),
        J = a('rHpw'),
        Z = A.a.d96cf7cd,
        $ = A.a.cfd2f35d,
        ee = A.a.d4ab68e2,
        te = A.a.f842d5d4,
        ae = A.a.b3a7362d,
        ne = (function (e) {
          p()(a, e)
          var t = b()(a)
          function a() {
            var e
            f()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              c()(l()(e), 'state', { showDiscardConfirmation: !1 }),
              c()(l()(e), '_maybeRenderConfirmationDialog', function () {
                if (e.state.showDiscardConfirmation)
                  return w.a.createElement(X.a, {
                    cancelButtonLabel: $,
                    confirmButtonLabel: ee,
                    confirmButtonType: 'destructiveFilled',
                    headline: te,
                    onCancel: e._handleDiscardCancel,
                    onConfirm: e._handleDiscard,
                    onMaskClick: e._handleDiscardCancel,
                    text: ae,
                  })
              }),
              c()(l()(e), '_handleDiscardCancel', function () {
                e.setState({ showDiscardConfirmation: !1 })
              }),
              c()(l()(e), '_handleDiscard', function () {
                var t = e.props,
                  a = t.createLocalApiErrorHandler,
                  n = t.deleteUnsentTweet,
                  r = t.unsentTweetId
                e.setState({ showDiscardConfirmation: !1 }), n(r).catch(a(G))
              }),
              c()(l()(e), '_handleDelete', function () {
                e.setState({ showDiscardConfirmation: !0 })
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(
                      Q.a,
                      {
                        onPress: this._handleDelete,
                        size: 'xSmall',
                        style: re.deleteButton,
                        type: 'destructiveFilled',
                      },
                      Z,
                    ),
                    this._maybeRenderConfirmationDialog(),
                  )
                },
              },
            ]),
            a
          )
        })(w.a.Component),
        re = J.a.create(function (e) {
          return { deleteButton: { marginTop: e.spaces.space12 } }
        }),
        ie = W(ne),
        oe = a('MWbm'),
        le = a('t62R'),
        se = a('kY28'),
        ce = a('Nqmc'),
        de = a('cTG8'),
        ue = a('+/sI'),
        he = A.a.f9f69d31,
        fe = A.a.g0ff8c0b,
        me = A.a.c5ceafc8,
        pe = (function (e) {
          p()(a, e)
          var t = b()(a)
          function a() {
            var e
            f()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              c()(l()(e), '_renderReplyContext', function () {
                var t,
                  a,
                  n = e.props.unsentTweet,
                  r = n.replied_tweet_results,
                  i = n.tweet_create_request,
                  o = null == r ? void 0 : r.result,
                  l = 'Tweet' === (null == o ? void 0 : o.__typename) ? o : void 0
                if (!l || Object(H.a)(l)) return w.a.createElement(le.b, { color: 'gray700', size: 'subtext2' }, me)
                var s,
                  c = (i && i.exclude_reply_user_ids) || []
                l.core &&
                  null !== (t = l.core.user_results) &&
                  void 0 !== t &&
                  t.result &&
                  'User' === l.core.user_results.result.__typename &&
                  (s = l.core.user_results.result)
                var d = null === (a = s) || void 0 === a ? void 0 : a.legacy,
                  u = d && d.id_str,
                  h = d && d.screen_name,
                  f = l.legacy && l.legacy.entities,
                  m = (f && f.user_mentions) || [],
                  p = e._getFilteredMentions(m, c),
                  g = w.a.createElement(se.a, {
                    displayTextRange: [280, 280],
                    inReplyToScreenName: h,
                    inReplyToUserIdStr: u,
                    linkType: 'none',
                    size: 'subtext2',
                    tweetPermalink: '',
                    userMentionsEntities: p,
                  })
                return w.a.createElement(ce.a, {
                  contextType: 'Reply',
                  iconSize: 'large',
                  style: ge.socialContext,
                  text: g,
                  weight: 'bold',
                  withLeftPadding: !1,
                })
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.unsentTweet,
                    t = e.media_entities,
                    a = e.replied_tweet_results,
                    n = e.tweet_create_request,
                    r = e.scheduling_info ? e.scheduling_info.execute_at : void 0,
                    i = e.scheduling_info ? e.scheduling_info.state : void 0,
                    o = null == a ? void 0 : a.result,
                    l = 'Tweet' === (null == o ? void 0 : o.__typename) ? o : void 0
                  if (!n || 'PostTweetRequest' !== n.type) return null
                  var s = n.attachment_url,
                    c = r ? Object(j.e)(r) : void 0,
                    d = n.status || '',
                    u = 'Failed' === i,
                    h = n.in_reply_to_status_id,
                    f = Boolean(h && Object(H.a)(l)),
                    m = Y()(d),
                    p = m.displayRangeEnd,
                    g = m.displayRangeStart,
                    b = this._getImages(t),
                    y = this._getLabelInfo(t)
                  return w.a.createElement(
                    oe.a,
                    { style: [ge.listItem, u && ge.scheduleFail] },
                    w.a.createElement(oe.a, { style: ge.content }, this._renderLegend(i, c, f)),
                    w.a.createElement(
                      oe.a,
                      { style: ge.tweetContent },
                      h && this._renderReplyContext(),
                      s &&
                        w.a.createElement(ce.a, {
                          contextType: 'Retweet',
                          iconSize: 'large',
                          style: ge.socialContext,
                          text: s,
                          weight: 'bold',
                          withLeftPadding: !1,
                        }),
                      w.a.createElement(
                        oe.a,
                        { style: ge.content },
                        w.a.createElement(
                          oe.a,
                          { style: ge.leftColumn },
                          w.a.createElement(de.a, { displayTextRange: [g, p], style: ge.tweetText, text: d }),
                          (u || f) && w.a.createElement(ie, { isDraft: !c, unsentTweetId: e.rest_id }),
                        ),
                        b.length > 0 &&
                          w.a.createElement(
                            oe.a,
                            { style: [ge.imageContainer, ge.rightColumn] },
                            w.a.createElement(V.a, {
                              cacheLocationKey: 'unsentTweets',
                              hideAcceptOverlay: !0,
                              images: b,
                              onClick: this._handleImageClick,
                              singleImageMaxAspectRatio: 1,
                              singleImageMinAspectRatio: 1,
                            }),
                            y &&
                              w.a.createElement(
                                le.b,
                                { size: 'subtext3' },
                                w.a.createElement(ue.c, { durationInMilliseconds: y.duration, type: y.type }),
                              ),
                          ),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_getFilteredMentions',
                value: function (e, t) {
                  return e
                    .map(function (e) {
                      var t = e.id_str,
                        a = e.indices,
                        n = e.name,
                        r = e.screen_name
                      return t && a && r && n ? { id_str: t, indices: a, screen_name: r, name: n } : {}
                    })
                    .filter(function (e) {
                      return !!Object.keys(e).length && (!t || t.indexOf(e.id_str) < 0)
                    })
                },
              },
              {
                key: '_renderLegend',
                value: function (e, t, a) {
                  var n = 'Failed' === e
                  return n || a
                    ? w.a.createElement(
                        oe.a,
                        { style: ge.failedView },
                        w.a.createElement(P.a, { style: [ge.failed, ge.failedIcon] }),
                        w.a.createElement(le.b, { color: 'magenta500' }, n ? he : fe),
                      )
                    : t
                    ? w.a.createElement(z.a, { scheduledFor: t })
                    : void 0
                },
              },
              {
                key: '_getLabelInfo',
                value: function (e) {
                  if (e && !(e.length > 1)) {
                    var t = e[0].media_info
                    if (t) {
                      var a = t.__typename,
                        n = 'ApiVideo' === a && t.duration_millis ? t.duration_millis : null
                      if (n) return { type: ue.b, duration: n }
                      if ('ApiGif' === a) return { type: ue.a }
                    }
                  }
                },
              },
              {
                key: '_getImages',
                value: function (e) {
                  return e
                    ? e
                        .map(function (e) {
                          var t = e.media_info
                          if (!t) return null
                          var a = t.preview_image ? t.preview_image : t,
                            n = t.alt_text || ''
                          return a.original_img_url && a.original_img_width && a.original_img_height
                            ? {
                                url: a.original_img_url,
                                expandedUrl: a.original_img_url,
                                width: a.original_img_width,
                                height: a.original_img_height,
                                accessibilityLabel: n,
                                backgroundColor: { red: 0, green: 0, blue: 0 },
                                shouldShowAltLabel: !1,
                                cropCandidates: [],
                              }
                            : void 0
                        })
                        .filter(Boolean)
                    : []
                },
              },
              {
                key: '_handleImageClick',
                value: function (e) {
                  e && e.preventDefault()
                },
              },
            ]),
            a
          )
        })(w.a.Component),
        ge = J.a.create(function (e) {
          return {
            content: { flexDirection: 'row', flexGrow: 1 },
            tweetContent: { flexDirection: 'column', flexGrow: 1 },
            listItem: { flexGrow: 1, flexDirection: 'column', flexShrink: 1 },
            imageContainer: {
              alignSelf: 'center',
              borderRadius: e.borderRadii.small,
              maxHeight: '75px',
              overflow: 'hidden',
              width: '75px',
            },
            leftColumn: { alignItems: 'flex-start', flex: 1, flexShrink: 1 },
            rightColumn: { marginLeft: e.spaces.space12 },
            socialContext: { marginBottom: e.spaces.space2 },
            tweetText: { marginTop: e.spaces.space4, width: '100%' },
            failedView: { flexDirection: 'row' },
            failed: { color: e.colors.magenta500 },
            failedIcon: { marginRight: e.spaces.space4 },
            scheduleFail: { opacity: 0.6 },
          }
        }),
        be = a('aITJ'),
        ye = a('v6aA'),
        _e = a('k/OQ'),
        ve = a('JYMr'),
        we = a('FIs5'),
        Te = a('XiMS'),
        Ee = a('htQn'),
        De = a('eyty'),
        Ce = a('ONCy'),
        Se = A.a.c5b77cf0,
        xe = A.a.i26eed05,
        Ie = A.a.db99d355,
        Fe = A.a.cd0ae176,
        ke = A.a.g29f1100,
        Oe = A.a.f26ece11,
        Le = A.a.g700c084,
        Me = A.a.a133d13e,
        Re = A.a.d4ebc798,
        Ae = A.a.f8464691,
        Be = A.a.d96cf7cd,
        je = A.a.b772cd65,
        Pe = A.a.abd845fd,
        He = A.a.e8bd47f1,
        Ue = A.a.j2b145d3,
        Ye = A.a.cfd2f35d,
        ze = A.a.d96cf7cd,
        Ve = A.a.df9f719a,
        We = A.a.hb0c8242,
        qe = '/compose/tweet/unsent/drafts',
        Ne = '/compose/tweet/unsent/scheduled',
        Ke = (function (e) {
          p()(a, e)
          var t = b()(a)
          function a(e) {
            var n
            return f()(this, a), ((n = t.call(this)).failedIds = e), n
          }
          return u()(a)
        })(_()(Error)),
        Ge = (function (e) {
          p()(a, e)
          var t = b()(a)
          function a() {
            var e
            f()(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              c()(l()(e), 'state', {
                isEditingDrafts: !1,
                isEditingScheduled: !1,
                selectedDrafts: [],
                selectedScheduledTweets: [],
                showDiscardConfirmation: !1,
                isDeleting: !1,
                deleteProgress: 0,
              }),
              c()(l()(e), '_fetchScheduledTweets', function () {
                var t = e.props,
                  a = t.createScheduledTweetApiErrorHandler
                ;(0, t.fetchScheduledTweets)().catch(a())
              }),
              c()(l()(e), '_fetchDraftTweets', function () {
                var t = e.props,
                  a = t.createDraftTweetApiErrorHandler
                ;(0, t.fetchDraftTweets)().catch(a())
              }),
              c()(l()(e), '_handleFetchUnsentTweets', function () {
                e.isDraftsTab && e._fetchDraftTweets(), e.isDraftsTab || e._fetchScheduledTweets()
              }),
              c()(l()(e), '_scribeAction', function (t) {
                var a = e.props.analytics,
                  n = e.isDraftsTab ? 'draft_tweet' : 'scheduled_tweet'
                a.scribe({ component: n, action: t })
              }),
              c()(l()(e), '_renderContent', function () {
                var t = e.props,
                  a = t.draftTweets,
                  n = t.scheduledTweets
                return e.isDraftsTab && a.length
                  ? e._renderUnsentTweets(a)
                  : !e.isDraftsTab && n.length
                  ? e._renderUnsentTweets(n)
                  : e.isDraftsTab || 0 !== n.length
                  ? e._renderPlaceholder(Fe)
                  : e._renderPlaceholder(ke)
              }),
              c()(l()(e), '_renderSegmentedControl', function () {
                var e = [
                  { to: qe, key: Re, label: Re },
                  { to: Ne, key: Ae, label: Ae },
                ]
                return w.a.createElement(_e.a, { accessibilityLabel: Me, links: e })
              }),
              c()(l()(e), '_renderBottomBar', function () {
                var t = e.state,
                  a = t.deleteProgress,
                  n = t.isDeleting,
                  r = e.props,
                  i = r.draftTweets
                if (r.scheduledTweets.length || i.length)
                  return w.a.createElement(
                    oe.a,
                    null,
                    n && w.a.createElement(ve.a, { ariaValueText: Le, progress: n ? Math.max(a, 0.02) : 0 }),
                    w.a.createElement(
                      oe.a,
                      { style: Xe.bottomBar },
                      w.a.createElement(
                        Q.a,
                        { onPress: e._handleSelectionToggle, style: Xe.deselectButton, type: 'brandText' },
                        e.selectedTweets.length > 0 ? Ue : He,
                      ),
                      w.a.createElement(
                        Q.a,
                        { disabled: !e.selectedTweets.length, onPress: e._handleDelete, type: 'destructiveText' },
                        Be,
                      ),
                    ),
                  )
              }),
              c()(l()(e), '_renderConfirmationDialog', function () {
                if (e.state.showDiscardConfirmation)
                  return w.a.createElement(X.a, {
                    cancelButtonLabel: Ye,
                    confirmButtonLabel: ze,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ve,
                    onCancel: e._handleDiscardCancel,
                    onConfirm: e._handleDiscard,
                    onMaskClick: e._handleDiscardCancel,
                    text: We,
                  })
              }),
              c()(l()(e), '_renderPlaceholder', function (e) {
                return w.a.createElement(we.a, { header: e, message: Oe })
              }),
              c()(l()(e), '_renderCheckbox', function (t) {
                var a = e.selectedTweets.includes(t)
                return w.a.createElement(Te.a, {
                  checked: a,
                  key: t,
                  onChange: e._handleCheckboxChange(t),
                  style: Xe.checkbox,
                })
              }),
              c()(l()(e), '_renderUnsentTweets', function (t) {
                return w.a.createElement(
                  w.a.Fragment,
                  null,
                  t.map(function (t) {
                    var a = t.replied_tweet_results,
                      n = t.rest_id,
                      r = t.tweet_create_request,
                      i = null == a ? void 0 : a.result,
                      o = 'Tweet' === (null == i ? void 0 : i.__typename) ? i : void 0,
                      l = r && 'PostTweetRequest' === r.type ? r.in_reply_to_status_id : void 0,
                      s = Boolean(l && Object(H.a)(o)),
                      c = t.scheduling_info ? t.scheduling_info.state : void 0,
                      d = !e.isEditing && c !== j.a.FAILED && !s,
                      u = d ? e._handleClick(t) : void 0,
                      h = d ? void 0 : 'label'
                    return w.a.createElement(
                      Ee.a,
                      { accessibilityRole: h, key: n, onClick: u, style: Xe.checkboxContainer },
                      e.isEditing ? e._renderCheckbox(n) : null,
                      w.a.createElement(pe, { unsentTweet: t }),
                    )
                  }),
                  e._renderConfirmationDialog(),
                )
              }),
              c()(l()(e), '_handleCheckboxChange', function (t) {
                return function () {
                  var a
                  ;(a =
                    e.selectedTweets && e.selectedTweets.includes(t)
                      ? e.selectedTweets.filter(function (e) {
                          return e !== t
                        })
                      : e.selectedTweets.concat([t])),
                    e._handleUpdateSelectedTweets(a)
                }
              }),
              c()(l()(e), '_handleSelectionToggle', function () {
                return e.selectedTweets.length ? e._deselectAllTweets() : e._selectAllTweets()
              }),
              c()(l()(e), '_handleDelete', function () {
                e.setState({ showDiscardConfirmation: !0 }), e._scribeAction('delete_prompt')
              }),
              c()(l()(e), '_handleDiscardCancel', function () {
                e.setState({ showDiscardConfirmation: !1 }), e._scribeAction('cancel')
              }),
              c()(l()(e), '_handleDeletionProgress', function (t) {
                var a = e.props,
                  n = a.deleteDraftTweet,
                  r = a.deleteScheduledTweet,
                  i = e.isDraftsTab ? n : r,
                  o = 0
                return Promise.all(
                  t.map(function (a) {
                    return i(a)
                      .then(function () {
                        ;(o += 1), e.setState({ deleteProgress: o / t.length }), e._scribeAction('delete')
                      })
                      .catch(function () {
                        return a
                      })
                  }),
                ).then(function (e) {
                  var t = e.filter(Boolean)
                  if (t.length) throw new Ke(t)
                })
              }),
              c()(l()(e), '_handleDiscard', function () {
                var t = e.props.addToast
                if (e.selectedTweets.length) {
                  e.setState({ deleteProgress: 0, isDeleting: !0, showDiscardConfirmation: !1 })
                  var a = e.isDraftsTab
                  e._handleDeletionProgress(e.selectedTweets)
                    .then(
                      function () {
                        return { selectedTweets: [], text: xe }
                      },
                      function (t) {
                        return { selectedTweets: t.failedIds || e.selectedTweets, text: Se }
                      },
                    )
                    .then(function (n) {
                      var r = n.selectedTweets,
                        i = n.text
                      e.setState({ deleteProgress: 0, isDeleting: !1 }),
                        e._handleUpdateSelectedTweets(r, a),
                        t({ text: i })
                    })
                }
              }),
              c()(l()(e), '_handleEditing', function () {
                var t
                e.isDraftsTab
                  ? ((t = e.state.isEditingDrafts ? 'disable_deletion' : 'enable_deletion'),
                    e.setState(function (e) {
                      return { isEditingDrafts: !e.isEditingDrafts, selectedDrafts: [] }
                    }))
                  : ((t = e.state.isEditingScheduled ? 'disable_deletion' : 'enable_deletion'),
                    e.setState(function (e) {
                      return { isEditingScheduled: !e.isEditingScheduled, selectedScheduledTweets: [] }
                    })),
                  e._scribeAction(t)
              }),
              c()(l()(e), '_handleClick', function (t) {
                return function () {
                  var a = t.scheduling_info && t.scheduling_info.execute_at
                  if (e.isDraftsTab || a) {
                    var n = e.props,
                      r = n.addMedia,
                      o = n.history,
                      l = n.setMediaMetadata,
                      s = n.updateSingleComposer,
                      c = t.rest_id,
                      d = t.tweet_create_request,
                      u = d && 'PostTweetRequest' === d.type ? d.status : '',
                      h = d && 'PostTweetRequest' === d.type ? d.in_reply_to_status_id : void 0,
                      f = d && 'PostTweetRequest' === d.type ? d.attachment_url : void 0,
                      m = f && f.split('/status/')[1].match(B.A.id),
                      p = m ? m[0] : void 0,
                      g = t.media_entities ? Object(j.d)(t.media_entities) : {},
                      b = (t.media_entities || []).reduce(function (e, t) {
                        return e || (t.media_origin ? { found_media_origin: t.media_origin } : void 0)
                      }, void 0),
                      y = Promise.resolve([])
                    if (g.externalMedia) {
                      var _ = g.externalMedia
                      y = Promise.all(
                        _.map(function (e) {
                          var t = e.url
                          return Object(O.a)(t)
                        }),
                      )
                        .then(function (t) {
                          var a
                          return r(t, {
                            location: De.d.Tweet,
                            isAmplify: _[0].isAmplify,
                            canUploadLongVideo: Object(De.e)(
                              null === (a = e.context) || void 0 === a ? void 0 : a.userClaims,
                            ),
                          })
                        })
                        .then(function (e) {
                          return e.map(function (e, t) {
                            var a = _[t],
                              n = a.altText,
                              r = a.sensitiveMediaWarning
                            return (
                              (n || r) &&
                                l(
                                  e.id,
                                  i()(
                                    i()({}, Object(Ce.a)(n ? { altText: n } : null)),
                                    Object(Ce.a)(r ? { sensitiveMediaWarning: r } : null),
                                  ),
                                ),
                              e.id
                            )
                          })
                        })
                    }
                    y.then(function (t) {
                      var n = k.a.modal
                      if (e.isDraftsTab)
                        s({ updates: { draftTweetId: c, gifMetadata: b, mediaIds: t, text: u }, parentKey: n })
                      else {
                        var r = a ? Object(j.e)(a) : void 0
                        s({
                          updates: { scheduledFor: r, gifMetadata: b, scheduledTweetId: c, mediaIds: t, text: u },
                          parentKey: n,
                        })
                      }
                      e._scribeAction('edit_intent'),
                        o.push({ pathname: '/compose/tweet', state: { inReplyToStatusId: h, quotedStatusId: p } })
                    })
                  }
                }
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchUnsentTweets()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.draftsFetchStatus,
                    a = e.history,
                    n = e.scheduledFetchStatus,
                    r = be.b.isMobileOS()
                  return w.a.createElement(
                    M.b,
                    {
                      backButtonType: 'back',
                      bottomBar: this.isEditing ? this._renderBottomBar() : null,
                      documentTitle: Me,
                      history: a,
                      rightControl: this.isEditing ? this._renderDoneButton() : this._renderEditButton(),
                      secondaryBar: this._renderSegmentedControl(),
                      title: Me,
                    },
                    w.a.createElement(
                      oe.a,
                      { style: Xe.root },
                      w.a.createElement(L.a, {
                        accessibilityLabel: Ie,
                        fetchStatus: this.isDraftsTab ? t : n,
                        onRequestRetry: this._handleFetchUnsentTweets,
                        render: this._renderContent,
                      }),
                      this.isEditing && r ? w.a.createElement(oe.a, { style: Xe.bottomBarSpacer }) : null,
                    ),
                  )
                },
              },
              {
                key: '_renderDoneButton',
                value: function () {
                  return w.a.createElement(
                    Q.a,
                    { onPress: this._handleEditing, size: 'small', type: 'primaryFilled' },
                    je,
                  )
                },
              },
              {
                key: '_renderEditButton',
                value: function () {
                  var e = this.props,
                    t = e.draftTweets,
                    a = e.scheduledTweets,
                    n = (!this.isDraftsTab && a.length) || (this.isDraftsTab && t.length)
                  if (!this.isEditing && n)
                    return w.a.createElement(
                      oe.a,
                      null,
                      w.a.createElement(
                        Q.a,
                        { onPress: this._handleEditing, size: 'small', type: 'primaryFilled' },
                        Pe,
                      ),
                    )
                },
              },
              {
                key: '_deselectAllTweets',
                value: function () {
                  this._handleUpdateSelectedTweets([])
                },
              },
              {
                key: '_selectAllTweets',
                value: function () {
                  var e = this.props,
                    t = e.draftTweets,
                    a = e.scheduledTweets,
                    n = (this.isDraftsTab ? t : a).map(function (e) {
                      return e.rest_id
                    })
                  this._handleUpdateSelectedTweets(n)
                },
              },
              {
                key: '_handleUpdateSelectedTweets',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.isDraftsTab
                  t ? this.setState({ selectedDrafts: e }) : this.setState({ selectedScheduledTweets: e })
                },
              },
              {
                key: 'isDraftsTab',
                get: function () {
                  return this.props.location.pathname === qe
                },
              },
              {
                key: 'isEditing',
                get: function () {
                  var e = this.state,
                    t = e.isEditingDrafts,
                    a = e.isEditingScheduled
                  return this.isDraftsTab ? t : a
                },
              },
              {
                key: 'selectedTweets',
                get: function () {
                  var e = this.state,
                    t = e.selectedDrafts,
                    a = e.selectedScheduledTweets
                  return this.isDraftsTab ? t : a
                },
              },
            ]),
            a
          )
        })(w.a.Component)
      c()(Ge, 'contextType', ye.a)
      var Xe = J.a.create(function (e) {
          return {
            deselectButton: { marginRight: 'auto' },
            checkboxContainer: {
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              boxSizing: 'border-box',
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.borderWidths.small,
            },
            checkbox: { justifyContent: 'center', paddingRight: e.spaces.space12 },
            root: { height: '600px' },
            bottomBar: { display: 'flex', justifyContent: 'center', flexDirection: 'row', padding: e.spaces.space4 },
            bottomBarSpacer: { height: e.spaces.space48 },
          }
        }),
        Qe = F(Ge)
      t.default = Qe
    },
    FwaZ: function (e, t, a) {
      a('ax0f')({ target: 'String', proto: !0 }, { repeat: a('ovzZ') })
    },
    S8sr: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return L
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        s = a.n(l),
        c = a('1Pcy'),
        d = a.n(c),
        u = a('5Yy7'),
        h = a.n(u),
        f = a('2VqO'),
        m = a.n(f),
        p = a('KEM+'),
        g = a.n(p),
        b = (a('Blm6'), a('KqXw'), a('Ysgh'), a('z84I'), a('jQ3i'), a('x4t0'), a('ERkP')),
        y = a.n(b),
        _ = a('nS1w'),
        v = a('t62R'),
        w = a('p+r5'),
        T = a('3XMw'),
        E = a.n(T),
        D = a('6XNv'),
        C = a('rHpw'),
        S = a('aITJ'),
        x = a('MWbm'),
        I = E.a.jf83d091,
        F = E.a.af4abf2f,
        k = E.a.b871f28f,
        O = 1,
        L = (function (e) {
          h()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            o()(this, a),
              (n = t.call(this, e)),
              g()(d()(n), '_handleSelectorChange', function (e, t) {
                var a = n.props,
                  i = a.day,
                  o = a.month,
                  l = a.year,
                  s = r()(r()({}, { day: i, month: o, year: l }), {}, g()({}, e, parseInt(t, 10)))
                n.props.onChange(s)
              }),
              g()(d()(n), '_handleDayChange', function (e) {
                n._handleSelectorChange('day', e)
              }),
              g()(d()(n), '_handleMonthChange', function (e) {
                n._handleSelectorChange('month', e)
              }),
              g()(d()(n), '_handleYearChange', function (e) {
                n._handleSelectorChange('year', e)
              }),
              g()(d()(n), '_handleDateChange', function (e) {
                var t = e.target.value.split('-'),
                  a = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) }
                n.props.onChange(a)
              })
            var i = e.day,
              l = e.maxSelectableYear,
              s = e.minSelectableYear,
              c = e.month,
              u = e.year
            return (
              (n._errorID = 'DATE_INPUT_'.concat(O, '_ERROR')),
              (n._monthOptions = _.c()),
              (n._nativeDefaultValue = _.e(i, c, u)),
              (n._nativeMaxDate = _.e(31, 12, l)),
              (n._nativeMinDate = _.e(1, 1, s)),
              (O += 1),
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
                    i = t.year,
                    o = n && n !== e.month,
                    l = i && i !== e.year
                  ;(o || l) &&
                    (_.b(n, i)
                      .map(function (e) {
                        return parseInt(e.value, 10)
                      })
                      .includes(a) ||
                      r({ month: n, year: i, day: void 0 }))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.errorMessage
                  return y.a.createElement(
                    x.a,
                    null,
                    S.b.isMobileOS() ? this._renderNativeDateInput() : this._renderSelectors(),
                    e ? y.a.createElement(v.b, { color: 'red500', nativeID: this._errorID }, e) : null,
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
                    i = void 0 === r ? {} : r,
                    o = e.label,
                    l = e.autofocus,
                    s = e.monthSelectorTestID,
                    c = e.daySelectorTestID,
                    d = e.yearSelectorTestID,
                    u = e.style,
                    h = e.minSelectableYear,
                    f = e.maxSelectableYear,
                    m = _.b(a, n),
                    p = _.d(h, f, t, a)
                  return y.a.createElement(
                    x.a,
                    { accessibilityLabel: o, accessibilityRole: 'group', style: [M.selectorsContainer, u] },
                    y.a.createElement(D.a, {
                      accessibilityDescribedBy: i.month ? this._errorID : void 0,
                      autofocus: l,
                      hasError: i.month,
                      label: F,
                      onChange: this._handleMonthChange,
                      options: this._monthOptions,
                      style: M.monthSelector,
                      testID: s,
                      value: a ? ''.concat(a) : '',
                      withEmptyOption: !0,
                    }),
                    y.a.createElement(D.a, {
                      accessibilityDescribedBy: i.day ? this._errorID : void 0,
                      hasError: i.day,
                      label: I,
                      onChange: this._handleDayChange,
                      options: m,
                      style: M.daySelector,
                      testID: c,
                      value: t ? ''.concat(t) : '',
                      withEmptyOption: !0,
                    }),
                    y.a.createElement(D.a, {
                      accessibilityDescribedBy: i.year ? this._errorID : void 0,
                      hasError: i.year,
                      label: k,
                      onChange: this._handleYearChange,
                      options: p,
                      style: M.yearSelector,
                      testID: d,
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
                  return y.a.createElement(w.a, {
                    defaultValue: this._nativeDefaultValue,
                    label: e,
                    max: this._nativeMaxDate,
                    min: this._nativeMinDate,
                    name: e,
                    numberOfLines: 1,
                    onChange: this._handleDateChange,
                    style: M.dateInputRoot,
                    type: 'date',
                  })
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        M = C.a.create(function (e) {
          return {
            selectorsContainer: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            monthSelector: { flexGrow: 2, marginRight: e.spaces.space12 },
            daySelector: { flexGrow: 1, marginRight: e.spaces.space12 },
            yearSelector: { flexGrow: 1 },
            dateInputRoot: { paddingHorizontal: 0 },
          }
        })
    },
    XpKj: function (e, t, a) {
      'use strict'
      a.d(t, 'd', function () {
        return h
      }),
        a.d(t, 'b', function () {
          return m
        }),
        a.d(t, 'f', function () {
          return y
        }),
        a.d(t, 'e', function () {
          return _
        }),
        a.d(t, 'c', function () {
          return v
        }),
        a.d(t, 'a', function () {
          return w
        })
      var n = a('KEM+'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        l = (a('yH/f'), a('LW0h'), a('7x/C'), a('oEOe')),
        s = a('kGix'),
        c = a('Ssj5'),
        d = 'scheduledTweets',
        u = { fetchStatus: s.a.NONE, scheduledTweets: [] },
        h = 'FETCH_SCHEDULED_TWEETS',
        f = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE',
        }),
        m = 'DELETE_SCHEDULED_TWEET',
        p = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE',
        }),
        g = function (e, t) {
          return t.filter(function (t) {
            return t.rest_id !== e
          })
        }
      function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case f.SUCCESS:
            if (t.payload) return o()(o()({}, e), {}, { fetchStatus: s.a.LOADED, scheduledTweets: t.payload })
            break
          case f.FAILURE:
            return o()(o()({}, e), {}, { fetchStatus: s.a.FAILED })
          case f.REQUEST:
            return o()(o()({}, e), {}, { fetchStatus: s.a.LOADING })
          case p.SUCCESS:
            var a = t.meta
            return a && a.deleteScheduledTweetId
              ? o()(o()({}, e), {}, { scheduledTweets: g(a.deleteScheduledTweetId, e.scheduledTweets) })
              : e
          default:
            return e
        }
        return e
      }
      c.a.register(r()({}, d, b))
      var y = function (e) {
          return e.scheduledTweets.scheduledTweets
        },
        _ = function (e) {
          return e.scheduledTweets.fetchStatus
        },
        v = function () {
          return function (e, t, a) {
            var n = a.api
            return Object(l.b)(e, { request: n.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: f,
              context: h,
            }).then(function () {})
          }
        },
        w = function (e) {
          return function (t, a, n) {
            var r = n.api
            return Object(l.b)(t, { request: r.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
              actionTypes: p,
              context: m,
              meta: { deleteScheduledTweetId: e },
            })
          }
        }
    },
    kW3F: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'FIVE_DAYS_IN_MS', function () {
          return ie
        }),
        a.d(t, 'Schedule', function () {
          return oe
        })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        s = a.n(l),
        c = a('1Pcy'),
        d = a.n(c),
        u = a('5Yy7'),
        h = a.n(u),
        f = a('2VqO'),
        m = a.n(f),
        p = a('KEM+'),
        g = a.n(p),
        b = (a('vrRf'), a('KqXw'), a('MvUL'), a('ERkP')),
        y = a.n(b),
        _ = a('xVN5'),
        v = a('1YZw'),
        w = a('hqKg'),
        T = a('XpKj'),
        E = a('zh9S'),
        D = a('RqPI'),
        C = a('oEGd'),
        S = Object(w.createSelector)(
          _.n,
          function (e) {
            var t = _.i(e)
            return _.k(e)[t].scheduledTweetId
          },
          D.o,
          function (e, t, a) {
            return { scheduledFor: e, scheduledTweetId: t, language: a }
          },
        ),
        x = { addToast: v.b, deleteScheduledTweet: T.a, updateSingleComposer: _.w, scribeAction: E.c },
        I = Object(C.g)(S, x),
        F = a('jHSc'),
        k = a('Gpeq'),
        O = a('3XMw'),
        L = a.n(O),
        M = a('/NU0'),
        R = a('zmS9'),
        A = 'scheduledConfirmationPrimaryAction',
        B = a('MWbm'),
        j = a('/yvb'),
        P = a('t62R'),
        H = a('S8sr'),
        U = a('77Ml'),
        Y = a('rHpw'),
        z = a('7JQg'),
        V = a('QbaN'),
        W = L.a.b1ab9c26,
        q = L.a.e4e4e50a,
        N = L.a.h735a98d,
        K = L.a.dbd5d40f,
        G = L.a.g9677c6d,
        X = L.a.h3701ffd,
        Q = L.a.c5dd0190,
        J = L.a.edeff231,
        Z = L.a.c2b358ce,
        $ = L.a.b43679d2,
        ee = L.a.f1fce85d,
        te = L.a.fddf24b4,
        ae = L.a.a0368088,
        ne = L.a.h9833726,
        re = { page: 'schedule' },
        ie = 432e6,
        oe = (function (e) {
          h()(a, e)
          var t = m()(a)
          function a(e) {
            var n
            o()(this, a),
              (n = t.call(this, e)),
              g()(d()(n), '_setAppBarRef', function (e) {
                n._appBarRef = e
              }),
              g()(d()(n), '_goBack', function () {
                n._appBarRef && n._appBarRef.goBack()
              }),
              g()(d()(n), '_handleClear', function () {
                var e = n.props,
                  t = e.addToast,
                  a = e.deleteScheduledTweet,
                  i = e.scheduledTweetId,
                  o = e.scribeAction,
                  l = e.updateSingleComposer
                i
                  ? a(i)
                      .then(function () {
                        l({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } }), n._goBack()
                      })
                      .catch(function () {
                        t({ text: W })
                      })
                  : (l({ updates: { scheduledFor: void 0 } }), n._goBack()),
                  o(r()(r()({}, re), {}, { action: 'clear' }))
              }),
              g()(d()(n), '_handleAdd', function () {
                var e = n.props,
                  t = e.scheduledFor,
                  a = e.scribeAction,
                  i = e.updateSingleComposer,
                  o = n.state,
                  l = { date: o.scheduleDate, time: o.scheduleTime },
                  s = !!t,
                  c = Object(V.c)(l)
                c &&
                  c > Date.now() &&
                  !Object(V.g)(c) &&
                  (i({ updates: { scheduledFor: l } }),
                  n._appBarRef && n._appBarRef.goBack(),
                  a(r()(r()({}, re), {}, { action: s ? 'update' : 'add' })))
              }),
              g()(d()(n), '_handleTimeChange', function (e) {
                n.setState({ scheduleTime: e }, n._validateDateTime)
              }),
              g()(d()(n), '_handleDateChange', function (e) {
                n.setState({ scheduleDate: e }, n._validateDateTime)
              }),
              g()(d()(n), '_validateDateTime', function () {
                var e = n.state,
                  t = e.scheduleDate,
                  a = e.scheduleTime,
                  r = Object(V.c)({ date: t, time: a }),
                  i = new Date(Date.now()),
                  o = !1,
                  l = !1,
                  s = !1,
                  c = !1
                r && r <= i
                  ? i.getFullYear() === t.year && i.getMonth() + 1 === t.month && i.getDate() === t.day
                    ? (l = !0)
                    : (o = !0)
                  : r && Object(V.g)(r) && ((o = !0), (s = !0)),
                  (Object(M.a)(t.year) &&
                    Object(M.a)(t.month) &&
                    Object(M.a)(t.day) &&
                    Object(M.a)(a.hour) &&
                    Object(M.a)(a.minute)) ||
                    (c = !0),
                  n.setState({ timeError: l, tooFarInFuture: s, dateError: o, invalidDateTime: c })
              }),
              g()(d()(n), '_getTimeZone', function (e) {
                var t = n.state,
                  a = t.scheduleDate,
                  r = t.scheduleTime
                try {
                  var i = Object(V.c)({ date: a, time: r }) || new Date(),
                    o = Object(k.a)(e || 'en'),
                    l = i.toLocaleDateString(o),
                    s = i.toLocaleDateString(o, { timeZoneName: 'long' }),
                    c = s.indexOf(l)
                  return c >= 0
                    ? (s.substring(0, c) + s.substring(c + l.length)).replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, '')
                    : s
                } catch (d) {
                  return null
                }
              }),
              g()(d()(n), '_handleButtonPress', function () {
                n.props.history.push('/compose/tweet/unsent/scheduled')
              }),
              g()(d()(n), '_renderBottomBar', function () {
                return y.a.createElement(
                  B.a,
                  { style: le.bottomBar },
                  y.a.createElement(j.a, { onPress: n._handleButtonPress, size: 'xSmall', type: 'brandText' }, q),
                )
              }),
              (n._scheduledForDate = Object(V.c)(e.scheduledFor))
            var i = n._scheduledForDate ? n._scheduledForDate : new Date(Date.now() + ie)
            return (
              (n.state = {
                scheduleDate: { year: i.getFullYear(), month: i.getMonth() + 1, day: i.getDate() },
                scheduleTime: { hour: i.getHours(), minute: i.getMinutes() },
                dateError: !1,
                timeError: !1,
                tooFarInFuture: !1,
                invalidDateTime: !1,
              }),
              n
            )
          }
          return (
            s()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    a = e.language,
                    n = e.scheduledFor,
                    r = this.state,
                    i = r.dateError,
                    o = r.invalidDateTime,
                    l = r.scheduleDate,
                    s = r.scheduleTime,
                    c = r.timeError,
                    d = r.tooFarInFuture,
                    u = s.hour,
                    h = s.minute,
                    f = l.day,
                    m = l.month,
                    p = l.year,
                    g = new Date(Date.now()).getFullYear(),
                    b = g + 2,
                    _ = !!n,
                    v = this._getTimeZone(a),
                    w = { date: l, time: s },
                    T = d ? ne : ae
                  return y.a.createElement(
                    F.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backButtonType: 'close',
                      bottomBar: this._renderBottomBar(),
                      documentTitle: N,
                      history: t,
                      rightControl: y.a.createElement(
                        B.a,
                        { style: le.actionButtonContainer },
                        this._scheduledForDate
                          ? y.a.createElement(
                              j.a,
                              {
                                onPress: this._handleClear,
                                size: 'small',
                                style: le.actionButton,
                                type: 'primaryText',
                              },
                              K,
                            )
                          : null,
                        y.a.createElement(
                          j.a,
                          {
                            disabled: i || c || o,
                            onPress: this._handleAdd,
                            size: 'small',
                            style: le.actionButton,
                            testID: A,
                            type: 'primaryFilled',
                          },
                          _ ? X : G,
                        ),
                      ),
                      title: N,
                    },
                    y.a.createElement(
                      B.a,
                      { style: le.form },
                      y.a.createElement(B.a, { style: le.formItem }, y.a.createElement(R.a, { scheduledFor: w })),
                      y.a.createElement(
                        B.a,
                        { style: le.formItem },
                        y.a.createElement(P.b, { color: 'gray700' }, J),
                        y.a.createElement(H.a, {
                          day: f,
                          errorMessage: i ? T : '',
                          errors: i ? { year: !0, month: !0, day: !0 } : {},
                          label: J,
                          maxSelectableYear: b,
                          minSelectableYear: g,
                          month: m,
                          onChange: this._handleDateChange,
                          style: le.date,
                          year: p,
                        }),
                      ),
                      y.a.createElement(
                        B.a,
                        { style: le.formItem },
                        y.a.createElement(U.a, {
                          amPmLabel: Z,
                          errorText: c ? ae : '',
                          hour: u,
                          hourLabel: $,
                          invalid: c,
                          label: Q,
                          minute: h,
                          minuteLabel: ee,
                          onChange: this._handleTimeChange,
                        }),
                      ),
                      v &&
                        y.a.createElement(
                          B.a,
                          { style: le.formItem },
                          y.a.createElement(P.b, { color: 'gray700' }, te),
                          y.a.createElement(P.b, { size: 'headline1' }, v),
                        ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component),
        le = Y.a.create(function (e) {
          return {
            actionButtonContainer: { flexDirection: 'row' },
            actionButton: { marginLeft: e.spaces.space12 },
            bottomBar: {
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            form: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            formItem: { marginBottom: e.spaces.space20 },
            date: { marginVertical: 0, marginTop: e.spaces.space2 },
          }
        })
      t.default = Object(z.a)(re)(I(oe))
    },
    nS1w: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return p
      }),
        a.d(t, 'd', function () {
          return g
        }),
        a.d(t, 'b', function () {
          return y
        }),
        a.d(t, 'e', function () {
          return _
        })
      var n,
        r = a('KEM+'),
        i = a.n(r),
        o = (a('z84I'), a('+KXO'), a('LW0h'), a('7x/C'), a('wFPu'), a('2G9S'), a('3XMw')),
        l = a.n(o),
        s = a('mtvn'),
        c =
          ((n = {}),
          i()(n, 1, { label: l.a.hac89abf, numDays: 31 }),
          i()(n, 2, { label: l.a.ef30b309, numDays: 28, numDaysLeapYear: 29 }),
          i()(n, 3, { label: l.a.b56920fa, numDays: 31 }),
          i()(n, 4, { label: l.a.b1a0f1ec, numDays: 30 }),
          i()(n, 5, { label: l.a.daf779c8, numDays: 31 }),
          i()(n, 6, { label: l.a.c6ad074d, numDays: 30 }),
          i()(n, 7, { label: l.a.f1db106b, numDays: 31 }),
          i()(n, 8, { label: l.a.i4e80b7a, numDays: 31 }),
          i()(n, 9, { label: l.a.efa6cc1d, numDays: 30 }),
          i()(n, 10, { label: l.a.f40a0cbe, numDays: 31 }),
          i()(n, 11, { label: l.a.ac74a31c, numDays: 30 }),
          i()(n, 12, { label: l.a.i6c1e4b2, numDays: 31 }),
          n),
        d = function (e) {
          return { label: ''.concat(e), value: ''.concat(e) }
        },
        u = Object(s.a)(1, 29).map(d),
        h = Object(s.a)(1, 30).map(d),
        f = Object(s.a)(1, 31).map(d),
        m = Object(s.a)(1, 32).map(d),
        p = function () {
          return Object.keys(c).map(function (e) {
            return { label: c[e].label, value: e }
          })
        },
        g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = arguments.length > 2 ? arguments[2] : void 0,
            n = arguments.length > 3 ? arguments[3] : void 0,
            r = t || new Date(Date.now()).getFullYear()
          return Object(s.a)(e, r + 1)
            .reverse()
            .filter(function (e) {
              return 2 === n && 29 === a ? b(e) : e
            })
            .map(d)
        },
        b = function (e) {
          return 1 === new Date(e, 1, 29).getMonth()
        },
        y = function (e, t) {
          if (!e) return m
          switch (2 === e && (!t || (t && b(t))) ? c[e].numDaysLeapYear : c[e].numDays) {
            case 28:
              return u
            case 29:
              return h
            case 30:
              return f
            case 31:
            default:
              return m
          }
        },
        _ = function (e, t, a) {
          if ('number' == typeof e && 'number' == typeof t && 'number' == typeof a) {
            var n = t < 10 ? '0'.concat(t) : ''.concat(t),
              r = e < 10 ? '0'.concat(e) : ''.concat(e)
            return ''.concat(a, '-').concat(n, '-').concat(r)
          }
          return ''
        }
      t.a = { getFormattedDateValue: _ }
    },
  },
])
//# sourceMappingURL=WIPED
