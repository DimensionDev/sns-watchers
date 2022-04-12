;(window.webpackJsonp = window.webpackJsonp || []).push([
  [73],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        i = n.n(a),
        r = n('3XMw'),
        o = n.n(r),
        s = n('M2x3'),
        c = 'settingsAppBar',
        l = n('/yvb'),
        u = n('rHpw'),
        d = o.a.bb081ea1,
        p = { viewType: 'settings_button' },
        m = i.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return i.a.createElement(l.a, {
            accessibilityLabel: d,
            behavioralEventContext: p,
            hoverLabel: { label: d },
            icon: i.a.createElement(s.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: f.button,
            testID: c,
            type: 'primaryText',
          })
        }),
        f = u.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = m
    },
    IpT4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        r = n('ERkP'),
        o = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
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
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.238 2.257c-.293-.293-.768-.293-1.06 0L2.52 20.917c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.073.53-.22l18.658-18.66c.293-.293.293-.767 0-1.06zM2.986 17.82c.155 0 .312-.048.446-.148.112-.083 2.752-2.104 2.708-7.248-.02-2.16.643-3.98 1.913-5.266 1.093-1.107 2.577-1.72 4.18-1.727 1.325.006 2.562.42 3.578 1.195.137.104.297.153.455.153.227 0 .45-.102.598-.295.25-.33.188-.8-.142-1.052-1.278-.975-2.828-1.493-4.483-1.5h-.003c-2.008.008-3.87.78-5.248 2.173-1.536 1.551-2.368 3.8-2.348 6.332.037 4.33-2.02 5.967-2.103 6.03-.332.247-.4.718-.154 1.05.147.2.374.303.603.303zm16.844-7.382c.002-.246-.003-.487-.017-.723-.024-.414-.387-.74-.792-.706-.413.023-.728.378-.705.79.012.205.017.413.015.624-.024 2.868.785 4.765 1.526 5.896h-8.314c-.414 0-.75.336-.75.75s.336.75.75.75h3.522c-.1 1.48-1.323 2.66-2.828 2.66-1.003 0-1.913-.514-2.436-1.372-.214-.354-.675-.467-1.03-.25-.354.214-.467.675-.25 1.03.795 1.31 2.185 2.09 3.716 2.09 2.332 0 4.227-1.85 4.328-4.158h4.922c.32 0 .604-.206.707-.51.104-.305 0-.643-.255-.84-.087-.066-2.145-1.7-2.108-6.032z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    PnKw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return k
      })
      var a = n('VrFO'),
        i = n.n(a),
        r = n('Y9Ll'),
        o = n.n(r),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        y = n.n(h),
        b = n('TIdA'),
        g = n('t62R'),
        v = n('A91F'),
        E = n('/yvb'),
        w = n('rHpw'),
        _ = 'inlinePrompt',
        T = 'inlinePrompt-primaryAction',
        C = 'inlinePrompt-secondaryAction',
        A = 'inlinePrompt-centeredImageContainer',
        M = n('MWbm'),
        k = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(c()(e), '_renderImage', function (e, t) {
                var n = y.a.createElement(b.a, {
                  accessibilityLabel: '',
                  aspectMode: v.a.exact(e.width / e.height),
                  backgroundColor: e.backgroundColor,
                  customVariants: t,
                  image: e,
                })
                return e.isCentered
                  ? y.a.createElement(
                      M.a,
                      { style: x.centeredImage, testID: A },
                      y.a.createElement(
                        M.a,
                        { style: { width: ''.concat(e.width, 'px'), height: ''.concat(e.height, 'px') } },
                        n,
                      ),
                    )
                  : n
              }),
              f()(c()(e), '_renderTitle', function () {
                var t = e.props.headline
                return t
                  ? y.a.createElement(
                      g.b,
                      {
                        accessibilityRole: 'heading',
                        align: 'left',
                        size: 'title3',
                        style: x.flexGrow,
                        weight: 'heavy',
                        withHashflags: !0,
                      },
                      t,
                    )
                  : null
              }),
              f()(c()(e), '_renderBodyText', function () {
                var t = e.props.subtext
                return t
                  ? y.a.createElement(
                      g.b,
                      { align: 'left', color: 'gray700', style: e.styles.body, withHashflags: !0 },
                      t,
                    )
                  : null
              }),
              f()(c()(e), '_renderAction', function (t) {
                var n = t.action,
                  a = t.buttonSize,
                  i = t.buttonType,
                  r = t.style,
                  o = t.testID,
                  s = e.props.secondaryAction,
                  c = n.link,
                  l = n.onClick,
                  u = n.text
                return y.a.createElement(
                  M.a,
                  { style: [e.styles.actionContainer, r, { justifyContent: 'flex-start' }], testID: o },
                  y.a.createElement(
                    E.a,
                    { link: c, onPress: l, size: a, style: { width: s ? '100%' : 'auto' }, type: i },
                    u,
                  ),
                )
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.image,
                    n = e.imageVariants,
                    a = e.primaryAction,
                    i = e.rightControl,
                    r = e.secondaryAction,
                    o = e.shouldRenderBorder
                  return y.a.createElement(
                    M.a,
                    { style: o ? [P.root, P.rootMargin] : x.root },
                    y.a.createElement(
                      y.a.Fragment,
                      null,
                      t ? this._renderImage(t, n) : null,
                      y.a.createElement(
                        M.a,
                        { style: this.styles.rootPadding, testID: _ },
                        this._renderTitle(),
                        this._renderBodyText(),
                        a
                          ? this._renderAction({
                              action: a,
                              buttonType: 'primaryFilled',
                              style: this.styles.primaryAction,
                              buttonSize: 'large',
                              testID: T,
                            })
                          : null,
                        r
                          ? this._renderAction({
                              action: r,
                              buttonType: 'primaryOutlined',
                              style: this.styles.secondaryAction,
                              buttonSize: 'large',
                              testID: C,
                            })
                          : null,
                      ),
                    ),
                    i ? y.a.createElement(M.a, { style: x.rightControl }, i) : null,
                  )
                },
              },
              {
                key: 'styles',
                get: function () {
                  return this.props.isCompact ? I : S
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      f()(k, 'defaultProps', { shouldRenderBorder: !1 })
      var x = w.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            flexGrow: { flexGrow: 1 },
            centeredImage: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
            rightControl: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              position: 'absolute',
              right: 0,
              top: 0,
            },
          }
        }),
        P = w.a.create(function (e) {
          return {
            root: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
            },
            rootMargin: { marginLeft: e.spaces.space16, marginRight: e.spaces.space16 },
          }
        }),
        S = w.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space32 },
            body: { marginTop: e.spaces.space8 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space28 },
            secondaryAction: { marginTop: e.spaces.space16 },
          }
        }),
        I = w.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space16 },
            body: { marginTop: e.spaces.space2 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space4 },
            secondaryAction: { marginTop: e.spaces.space2 },
          }
        })
    },
    QuZr: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Be
      })
      var a,
        i,
        r,
        o,
        s = n('97Jx'),
        c = n.n(s),
        l = n('VrFO'),
        u = n.n(l),
        d = n('Y9Ll'),
        p = n.n(d),
        m = n('1Pcy'),
        f = n.n(m),
        h = n('5Yy7'),
        y = n.n(h),
        b = n('2VqO'),
        g = n.n(b),
        v = n('KEM+'),
        E = n.n(v),
        w = (n('2G9S'), n('ERkP')),
        _ = n.n(w),
        T = (n('5BYb'), n('7x/C'), n('8UdT')),
        C = n('oQhu'),
        A = n('z2Pn'),
        M = n('xZGM'),
        k = n('rxPX'),
        x = Object(C.a)(function (e, t) {
          return t && t.notificationsModule(e)
        }),
        P = n('FIs5'),
        S = n('yiKp'),
        I = n.n(S),
        L = n('ezF+'),
        O = n('QIgh'),
        R = n('AP4B'),
        V =
          (n('lTEL'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return Promise.all([n.e(0), n.e(3), n.e(8), n.e(10), n.e(225)]).then(n.bind(null, 'RfPh'))
            },
            loaderKey: 'defaultNotificationLoader',
            strategy: n('XBtf').a.Critical,
          }),
        j = L.e(V),
        D = n('VrCx'),
        B = n('xWpm'),
        F =
          ((i = {}),
          E()(i, T.b.Notification, j),
          E()(
            i,
            T.b.Tweet,
            L.c({
              selectDisplayType: function (e) {
                return e.content.displayType
              },
              handlers:
                ((a = {}),
                E()(a, D.a.Tweet, Object(B.e)({ allowDownvote: !0, withMuteConversation: !0, withUnreadStyles: !0 })),
                E()(a, D.a.QuotedTweet, Object(B.b)({ isCondensed: !0 })),
                a),
            }),
          ),
          i),
        z = I()(I()(I()({}, Object(O.a)({ tweetDismissable: !0, withMuteConversation: !0 })), F), R.a),
        U = n('3XMw'),
        H = n.n(U),
        N = n('f42t'),
        G = n('ddV6'),
        K = n.n(G),
        Q = (n('uFXj'), n('RoyM')),
        W = n('qFUP'),
        J = n('7JQg'),
        Y = n.p + 'illustration_unmention_1200w.a6d67a65.png',
        X = n.p + 'illustration_unmention_1800w.62507075.png',
        q = 600,
        Z = 175,
        $ = {
          image: { url: X, width: 1800, height: 525 },
          customVariants: [
            { uri: n.p + 'illustration_unmention_600w.b146e2e5.png', width: q, height: Z },
            { uri: Y, width: 1200, height: 350 },
            { uri: X, width: 1800, height: 525 },
          ],
        },
        ee = n('Irs7'),
        te = n('MWbm'),
        ne = n('PnKw'),
        ae = n('t62R'),
        ie = n('rHpw'),
        re = 'leave_this_conversation_inline_education',
        oe = H.a.j24c37b2,
        se = H.a.e839db39,
        ce = H.a.eba8b1c8,
        le = H.a.i859a9d3,
        ue = H.a.ac1daf50,
        de = function (e) {
          var t = e.onClose
          return _.a.createElement(
            J.c,
            { namespace: { element: 'leave_this_conversation_education_sheet' } },
            _.a.createElement(W.a, { actionLabel: oe, onAction: t, onClose: t }),
          )
        },
        pe = ie.a.create(function (e) {
          return {
            footerLearnMoreLink: { whiteSpace: 'nowrap' },
            wrapper: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small },
          }
        }),
        me = function (e) {
          var t = e.onDismiss,
            n = _.a.useState(!1),
            a = K()(n, 2),
            i = a[0],
            r = a[1],
            o = Object(ee.b)()
          _.a.useEffect(
            function () {
              o.scribe({ element: re, action: 'impression' })
            },
            [o],
          )
          var s = [
            {
              text: se,
              onClick: function () {
                o.scribe({ element: re, action: 'dismiss' }), t()
              },
            },
          ]
          return _.a.createElement(
            _.a.Fragment,
            null,
            i &&
              _.a.createElement(de, {
                onClose: function () {
                  r(!1)
                },
              }),
            _.a.createElement(
              te.a,
              { style: pe.wrapper },
              _.a.createElement(ne.a, {
                headline: ce,
                image: $.image,
                imageVariants: $.customVariants,
                rightControl: _.a.createElement(Q.a, { feedbackItems: s, isDisplayedOnMedia: !0 }),
                subtext: _.a.createElement(
                  _.a.Fragment,
                  null,
                  ue,
                  ' ',
                  _.a.createElement(
                    ae.b,
                    {
                      color: 'text',
                      onClick: function () {
                        r(!0)
                      },
                      size: 'subtext1',
                      style: pe.footerLearnMoreLink,
                      weight: 'bold',
                      withInteractiveStyling: !0,
                      withUnderline: !0,
                    },
                    le,
                  ),
                ),
              }),
            ),
          )
        },
        fe = n('EUHl'),
        he = n('5waQ'),
        ye = n('VE3M'),
        be = n('yoO3'),
        ge = n('fTQJ'),
        ve = n('v6aA'),
        Ee =
          (n('jQ3i'),
          {
            notifications_alt_a: [
              {
                height: 200,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/rooster-head-400x200.v1.png',
                width: 400,
              },
              {
                height: 400,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/rooster-head-800x400.v1.png',
                width: 800,
              },
              {
                height: 600,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/rooster-head-1200x600.v1.png',
                width: 1200,
              },
            ],
            notifications_alt_b: [
              {
                height: 200,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/bell-400x200.v1.png',
                width: 400,
              },
              {
                height: 400,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/bell-800x400.v1.png',
                width: 800,
              },
              {
                height: 600,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/bell-1200x600.v1.png',
                width: 1200,
              },
            ],
          }),
        we = {
          notifications_alt_a:
            ((r = {}),
            E()(r, he.a.All, { headerMessage: H.a.b6a43e77, bodyMessage: H.a.f269c47d, buttonText: H.a.g6871092 }),
            E()(r, he.a.Mentions, { headerMessage: H.a.e577e1a1, bodyMessage: H.a.b91e5a3a }),
            r),
          notifications_alt_b:
            ((o = {}),
            E()(o, he.a.All, { headerMessage: H.a.g264f125, bodyMessage: H.a.a3420a9b, buttonText: H.a.g6871092 }),
            E()(o, he.a.Mentions, { headerMessage: H.a.ef0b8028, bodyMessage: H.a.b91e5a3a }),
            o),
        },
        _e = function (e) {
          return ['control', 'notifications_alt_a', 'notifications_alt_b'].includes(e)
        },
        Te = function (e) {
          return Ee[e]
        },
        Ce = function (e, t, n) {
          var a, i
          return null === (a = we[t]) || void 0 === a || null === (i = a[n]) || void 0 === i ? void 0 : i[e]
        },
        Ae = function (e, t) {
          return Ce('headerMessage', e, t)
        },
        Me = function (e, t) {
          return Ce('bodyMessage', e, t)
        },
        ke = function (e, t) {
          return Ce('buttonText', e, t)
        },
        xe = H.a.eb75875d,
        Pe = H.a.e9f1fbcb,
        Se = H.a.f287bb3a,
        Ie = H.a.h994ec4f,
        Le = H.a.c06d4305,
        Oe = H.a.bfdb3c12,
        Re = H.a.h1d919eb,
        Ve = H.a.ib4510fd,
        je = (function (e) {
          y()(n, e)
          var t = g()(n)
          function n() {
            var e
            u()(this, n)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              E()(f()(e), '_getNewItemsPillLabel', function () {
                switch (e.props.notificationsType) {
                  case he.a.All:
                    return Ve
                  default:
                    return
                }
              }),
              E()(f()(e), '_getEmptyMessageBody', function () {
                var t = e.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                switch (e.props.notificationsType) {
                  case he.a.Mentions:
                    return _e(e._emptyStateVariant) && 'control' !== e._emptyStateVariant
                      ? Me(e._emptyStateVariant, e.props.notificationsType)
                      : Le
                  case he.a.Verified:
                    return t ? Re : Oe
                  default:
                    return _e(e._emptyStateVariant) && 'control' !== e._emptyStateVariant
                      ? Me(e._emptyStateVariant, e.props.notificationsType)
                      : t
                      ? Ie
                      : Se
                }
              }),
              E()(f()(e), '_getEmptyMessageHeader', function () {
                return _e(e._emptyStateVariant) && 'control' !== e._emptyStateVariant
                  ? Ae(e._emptyStateVariant, e.props.notificationsType)
                  : Pe
              }),
              E()(f()(e), '_renderEmptyTimeline', function () {
                if (
                  ((e._emptyStateVariant = e.context.featureSwitches.getStringValue(
                    'responsive_web_notifications_empty_state_redesign_variant',
                  )),
                  _e(e._emptyStateVariant) && 'control' !== e._emptyStateVariant)
                ) {
                  var t = ke(e._emptyStateVariant, e.props.notificationsType)
                  return _.a.createElement(
                    P.a,
                    c()({}, t && { buttonLink: '/i/connect_people', buttonText: t }, {
                      header: e._getEmptyMessageHeader(),
                      imageVariants: Te(e._emptyStateVariant),
                      message: e._getEmptyMessageBody(),
                      onButtonPress: e._handleEmptyTimelineButtonPress,
                      onImpression: e._handleEmptyTimelineImpression,
                    }),
                  )
                }
                return _.a.createElement(P.a, {
                  header: e._getEmptyMessageHeader(),
                  message: e._getEmptyMessageBody(),
                  onImpression: e._handleEmptyTimelineImpression,
                })
              }),
              E()(f()(e), '_handleEmptyTimelineImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              E()(f()(e), '_handleEmptyTimelineButtonPress', function () {
                e.props.analytics.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
              }),
              E()(f()(e), '_handleAtTop', function () {
                e._updateLastReadIfNeeded()
              }),
              E()(f()(e), '_renderTimelineHeader', function () {
                var t = e.props,
                  n = t.addLeaveThisConversationEducationFlag,
                  a = t.notificationsType,
                  i = t.shouldShowUnmentionEducation,
                  r = t.timelineHasTweets
                return i &&
                  a === he.a.Mentions &&
                  r &&
                  e.context.featureSwitches.isTrue('dont_mention_me_mentions_tab_education_enabled')
                  ? _.a.createElement(me, { onDismiss: n })
                  : void 0
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.notificationsType
                  ;(0, e.setNotificationsType)(t)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.markAllAsRead,
                    n = e.notificationsType
                  this._updateLastReadIfNeeded(), n === he.a.All && t()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.notificationsModule
                  return e
                    ? _.a.createElement(
                        be.a,
                        null,
                        _.a.createElement(ge.a, {
                          entryConfiguration: z,
                          header: this._renderTimelineHeader(),
                          key: 'notification-timeline',
                          module: e,
                          newTweetsPillLabel: this._getNewItemsPillLabel(),
                          newTweetsPillMode: fe.a.CLIENT,
                          onAtTop: this._handleAtTop,
                          renderEmptyState: this._renderEmptyTimeline,
                          title: xe,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_updateLastReadIfNeeded',
                value: function () {
                  var e = this.props,
                    t = e.notificationsType,
                    n = e.unreadCount,
                    a = e.updateLastRead
                  n && a(t)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      E()(je, 'contextType', ve.a)
      var De = function (e) {
          return Object(N.a)(
            (function (e) {
              return Object(k.a)()
                .propsFromState(function () {
                  return {
                    shouldShowUnmentionEducation: function (e) {
                      return Object(M.D)(e, M.o)
                    },
                    unreadCount: function (t, n) {
                      var a,
                        i = n.ntabData
                      return null === (a = x(e, i)) || void 0 === a ? void 0 : a.selectUnreadEntriesCount(t)
                    },
                    timelineHasTweets: function (t, n) {
                      var a = n.ntabData,
                        i = x(e, a),
                        r = null == i ? void 0 : i.selectEntries(t)
                      return !!(null == r
                        ? void 0
                        : r.some(function (e) {
                            return e.type === T.b.Tweet
                          }))
                    },
                  }
                })
                .adjustStateProps(function (t, n) {
                  var a = t.shouldShowUnmentionEducation,
                    i = t.timelineHasTweets,
                    r = t.unreadCount,
                    o = n.ntabData
                  return {
                    ntabData: null,
                    notificationsModule: x(e, o),
                    notificationsType: e,
                    shouldShowUnmentionEducation: a,
                    timelineHasTweets: i,
                    unreadCount: r,
                  }
                })
                .propsFromActions(function (t) {
                  var n,
                    a = t.ntabData
                  return {
                    addLeaveThisConversationEducationFlag: function () {
                      return Object(M.z)(M.o)
                    },
                    markAllAsRead: null === (n = x(e, a)) || void 0 === n ? void 0 : n.markAllAsRead,
                    updateLastRead: a && a.updateLastSeenCursor,
                    setNotificationsType: A.j,
                  }
                })
                .withAnalytics({ page: 'ntab', section: e })
            })(e)(je),
            { ntabData: ye.a },
          )
        },
        Be = function (e) {
          var t = e.notificationsType
          return De(t)
        }
    },
    RoyM: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        i = n.n(a),
        r = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        o = Object(r.a)({
          loader: function () {
            return n.e(173).then(n.bind(null, 'ACNv'))
          },
        }),
        s = n('4bW+'),
        c = n('IG7M'),
        l = n('rHpw'),
        u = n('Irs7'),
        d = l.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          a = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return i.a.createElement(c.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return i.a.createElement(o, { actionItems: n, onClose: e })
            },
            style: d.curationControl,
            testID: s.a.caret,
            withDarkBackground: a,
          })
        }
        return null
      })
    },
    WR6I: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'NotificationsScreen', function () {
          return B
        })
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('2G9S')
      var a = n('ERkP'),
        i = n.n(a),
        r = n('v6aA'),
        o = n('es0u'),
        s = n('G6rE'),
        c = n('rxPX'),
        l = Object(c.a)()
          .propsFromState(function () {
            return { loggedInUser: s.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { isLoggedInUserVerified: !!t && t.verified }
          })
          .withAnalytics({ page: 'ntab' }),
        u = n('pnqf'),
        d = n('dwig'),
        p = n('0+qk'),
        m = n('3XMw'),
        f = n.n(m),
        h = n('yoO3'),
        y = n('5FtR'),
        b = n('wytG'),
        g = n('+Bsv'),
        v = n('VS6U'),
        E = n('mw9i'),
        w = n('k/OQ'),
        _ = n('zCf4'),
        T = f.a.eb75875d,
        C = f.a.f8321d82,
        A = f.a.cdb53d79,
        M = f.a.h3290871,
        k = f.a.a98ba778,
        x = '/notifications',
        P = '/notifications/mentions',
        S = '/notifications/verified',
        I = i.a.createElement(g.a, { pullRight: !0, to: '/settings/notifications' }),
        L = f.a.eb75875d,
        O = Object(u.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'hCg+'))
          }),
        ),
        R = Object(u.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'lGAB'))
          }),
        ),
        V = Object(u.a)(
          Object(b.a)(function () {
            return Promise.resolve().then(n.bind(null, 'srGC'))
          }),
        ),
        j = [
          { to: x, key: C, label: C, retainScrollPosition: !1 },
          { to: P, key: A, label: A, retainScrollPosition: !1 },
        ],
        D = [].concat(j, [{ to: S, key: M, label: M, retainScrollPosition: !1 }]),
        B = function (e) {
          var t,
            n,
            a = i.a
              .useContext(r.a)
              .featureSwitches.isTrue('responsive_web_ntab_verified_mentions_vit_internal_dogfood'),
            s = e.history,
            c = e.isLoggedInUserVerified,
            l = e.location,
            u = c || a,
            m = i.a.createElement(
              _.d,
              null,
              i.a.createElement(_.b, { component: O, exact: !0, path: x }),
              i.a.createElement(_.b, { component: R, exact: !0, path: P }),
              i.a.createElement(_.b, { component: V, exact: !0, path: S }),
            )
          return l.pathname !== S || u
            ? i.a.createElement(
                h.a,
                null,
                i.a.createElement(v.a, {
                  documentTitle: T,
                  history: s,
                  primaryContent:
                    ((n = i.a.createElement(p.a, { history: s })),
                    i.a.createElement(d.a, { component: E.a, fab: n }, m)),
                  rightControl: I,
                  secondaryBar: ((t = u ? D : j), i.a.createElement(w.a, { accessibilityLabel: k, links: t })),
                  sidebarContent: i.a.createElement(o.a, null),
                  title: L,
                }),
              )
            : i.a.createElement(y.a, { to: x })
        }
      t.default = l(B)
    },
    f42t: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      var a = n('97Jx'),
        i = n.n(a),
        r = n('VrFO'),
        o = n.n(r),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        b =
          (n('2G9S'),
          n('+KXO'),
          n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          n('z84I'),
          n('KOtZ'),
          n('ERkP')),
        g = n.n(b),
        v = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
            return (e = t.call.apply(t, [this].concat(i))), y()(u()(e), 'state', { isLoaded: !1 }), e
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  return (this._isMounted = !0), this.load()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  return this.props.modules === e.modules ? null : this.load()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._isMounted = !1
                },
              },
              {
                key: 'load',
                value: function () {
                  var e = this
                  this.setState({ isLoaded: !1 })
                  var t = this.props.modules,
                    n = Object.keys(t)
                  return Promise.all(
                    n.map(function (e) {
                      return t[e]()
                    }),
                  )
                    .then(function (e) {
                      return n.reduce(function (t, n, a) {
                        return (t[n] = e[a]), t
                      }, {})
                    })
                    .then(function (t) {
                      if (!e._isMounted) return null
                      e.setState({ modules: t, isLoaded: !0 })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isLoaded ? this.state.modules : {}
                  return g.a.Children.only(this.props.children(e || {}))
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        E = function (e, t) {
          return function (n) {
            return g.a.createElement(v, { modules: t }, function (t) {
              return g.a.createElement(e, i()({}, t, n))
            })
          }
        }
    },
    'hCg+': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('5waQ'),
        i = n('QuZr')
      t.default = Object(i.a)({ notificationsType: a.a.All })
    },
    lGAB: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('5waQ'),
        i = n('QuZr')
      t.default = Object(i.a)({ notificationsType: a.a.Mentions })
    },
    qFUP: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        i = n.n(a),
        r = n('3XMw'),
        o = n.n(r),
        s = n('Irs7'),
        c = n('MWbm'),
        l = n('t62R'),
        u = n('feu+'),
        d = n('rHpw'),
        p = n('yiKp'),
        m = n.n(p),
        f = n('Lsrn'),
        h = n('k/Ka'),
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(h.a)(
            'svg',
            m()(
              m()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [f.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M18.13 20.495c-.04.2-.15.37-.31.48-1.78 1.22-3.58 1.77-5.82 1.77-2.11 0-4.08-.61-5.73-1.67l1.08-1.08c1.36.8 2.95 1.26 4.65 1.26 1.92 0 3.46-.47 4.97-1.51.33-.22.82-.13 1.04.2.11.16.16.36.12.55zm-4.52-13.46l-1.33 1.33c-.05-.01-.11-.01-.16-.01h-.1c-1.6.06-2.92 1.55-3.12 3.39l-1.88 1.88c-.11-.39-.16-.81-.16-1.24 0-3.3 2.07-5.7 4.93-5.7.74 0 1.34.15 1.82.35z',
              }),
              i.a.createElement('path', {
                d: 'M17.73 2.925l-1.09 1.08c-1.36-.79-2.95-1.25-4.64-1.25-5.1 0-9.25 4.15-9.25 9.25 0 1.69.46 3.27 1.26 4.63l-1.09 1.09c-1.05-1.66-1.66-3.62-1.66-5.73 0-5.92 4.82-10.74 10.74-10.74 2.11 0 4.07.61 5.73 1.67zm5.01 9.07c0 4.88-4.35 5.18-4.84 5.18-2.9 0-3.5-1.75-3.5-1.75s-1.32 1.49-3.63 1.49c-.11 0-.21-.01-.32-.02l1.91-1.91c.55-.2 1.04-.6 1.44-1.17h.01c.14-.2.25-.41.36-.63l2.47-2.48c-.25 1.48-.53 3.09-.53 3.09-.33 1.89 1.37 2.11 1.9 2.11 1.42 0 3.24-.99 3.24-3.9 0-1.69-.46-3.28-1.26-4.64l1.09-1.09c1.06 1.66 1.66 3.62 1.66 5.72zm-.99-8.51L3.48 21.745c-.17.17-.39.26-.61.26-.23 0-.45-.09-.62-.26-.34-.34-.34-.89 0-1.23l18.26-18.26c.17-.17.4-.26.62-.26s.45.09.62.26c.34.34.34.89 0 1.23z',
              }),
            ),
          )
        }
      y.metadata = { width: 24, height: 24 }
      var b = y,
        g = n('pu5c'),
        v = n('IpT4'),
        E = o.a.aed79c53,
        w = o.a.h12044a3,
        _ = o.a.f100e566,
        T = o.a.f094f6d6,
        C = o.a.b00255b5,
        A = o.a.geea29ee,
        M = o.a.c54678e7,
        k = o.a.ga4fa180,
        x = o.a.h8dde771,
        P = o.a.i859a9d3,
        S = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(l.b, null, w),
            i.a.createElement(
              c.a,
              { style: O.details },
              i.a.createElement(b, { style: O.icon }),
              i.a.createElement(
                c.a,
                null,
                i.a.createElement(l.b, { style: O.title }, _),
                i.a.createElement(l.b, null, T),
              ),
              i.a.createElement(g.a, { style: O.icon }),
              i.a.createElement(
                c.a,
                null,
                i.a.createElement(l.b, { style: O.title }, C),
                i.a.createElement(l.b, null, A),
              ),
              i.a.createElement(v.a, { style: O.icon }),
              i.a.createElement(
                c.a,
                null,
                i.a.createElement(l.b, { style: O.title }, M),
                i.a.createElement(l.b, null, k),
              ),
            ),
          )
        },
        I = function () {
          return i.a.createElement(
            c.a,
            { style: O.footerContainer },
            i.a.createElement(
              l.b,
              { align: 'center' },
              x,
              ' ',
              i.a.createElement(
                l.b,
                {
                  color: 'text',
                  link: 'https://help.twitter.com/using-twitter/mentions-and-replies#mention-control',
                  style: O.footerLearnMoreLink,
                  withUnderline: !0,
                },
                P,
              ),
            ),
          )
        },
        L = function () {
          return i.a.createElement(l.b, { style: O.headline }, E)
        },
        O = d.a.create(function (e) {
          return {
            details: {
              display: 'grid',
              gridTemplateColumns: 'auto auto',
              gridColumnGap: e.spaces.space24,
              gridRowGap: e.spaces.space24,
              paddingTop: e.spaces.space32,
            },
            footerContainer: { display: 'flex', alignItems: 'center' },
            footerLearnMoreLink: { whiteSpace: 'nowrap' },
            headline: { fontSize: e.fontSizes.title2 },
            icon: { color: e.colors.text, width: e.spaces.space24, height: e.spacesPx.space24 },
            image: { width: '100%' },
            title: {
              color: e.colors.text,
              fontSize: e.fontSizes.headline2,
              fontWeight: e.fontWeights.medium,
              paddingBottom: e.spaces.space4,
            },
          }
        })
      t.a = function (e) {
        var t = e.actionLabel,
          n = e.onAction,
          a = e.onClose,
          r = e.onSecondaryAction,
          o = e.secondaryActionLabel,
          c = Object(s.b)()
        i.a.useEffect(
          function () {
            c.scribeAction('impression')
          },
          [c],
        )
        var l = r
            ? function (e) {
                c.scribeAction('secondary_cta'), null == r || r(e)
              }
            : void 0,
          d = a
            ? function () {
                c.scribeAction('close'), a()
              }
            : void 0
        return i.a.createElement(u.a, {
          actionLabel: t,
          footer: i.a.createElement(I, null),
          graphicDisplayMode: 'none',
          headline: i.a.createElement(L, null),
          isFullHeightOnMobile: !0,
          onAction: function (e) {
            c.scribeAction('primary_cta'), n(e)
          },
          onClose: d,
          onSecondaryAction: l,
          secondaryActionLabel: o,
          subtext: i.a.createElement(S, null),
          withBottomPadding: !0,
        })
      }
    },
    qJ6t: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'notificationsModule', function () {
          return g
        }),
        n.d(t, 'updateLastSeenCursor', function () {
          return v
        })
      var a = n('KEM+'),
        i = n.n(a),
        r = n('yiKp'),
        o = n.n(r),
        s = n('m3Bd'),
        c = n.n(s),
        l = n('vWJI'),
        u = n('k49u'),
        d = n('0KEI'),
        p = n('UtAB'),
        m = n('fs1G'),
        f = n('5waQ'),
        h = n('ZNT5'),
        y = ['polling'],
        b = 'APP_UPDATE_NOTIFICATION_LAST_READ',
        g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.a.All
          return Object(h.a)({
            timelineId: 'notifications-'.concat(e),
            getEndpoint: function (e) {
              return e.URT.fetchNotifications
            },
            getEndpointParams: function (t) {
              t.polling
              var n = c()(t, y)
              return o()({ type: e }, n)
            },
            context: 'FETCH_NOTIFICATIONS_TIMELINE',
            perfKey: 'notifications',
            postFetchAction: p.a,
            staleIntervalMs: 5e3,
          })
        },
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.a.All
          return function (t, n, a) {
            var r = a.api,
              o = g(e),
              s = o && l.e(o.selectEntries(n()))
            if (s) {
              var c = { cursor: l.g(s), type: e },
                p = t(
                  Object(d.createLocalApiErrorHandlerWithContextFactory)(b)(
                    i()({}, u.a.AppInReadOnlyMode, { customAction: m.a }),
                  ),
                )
              r.URT.updateNotificationsLastSeenCursor(c).catch(p)
            }
          }
        }
      t.default = g(f.a.All)
    },
    srGC: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('5waQ'),
        i = n('QuZr')
      t.default = Object(i.a)({ notificationsType: a.a.Verified })
    },
  },
])
//# sourceMappingURL=WIPED
