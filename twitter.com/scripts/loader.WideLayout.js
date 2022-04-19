;(window.webpackJsonp = window.webpackJsonp || []).push([
  [190, 207],
  {
    '0af8': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'roundToNearestDevicePixel', function () {
          return I
        }),
        n.d(t, 'default', function () {
          return O
        })
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        h = n.n(d),
        f = n('KEM+'),
        p = n.n(f),
        m = n('ERkP'),
        v = n.n(m),
        y = n('aITJ'),
        g = n('v6aA'),
        b = n('jHwr'),
        _ = n('rHpw'),
        w = n('i4Oy'),
        E = n('MWbm'),
        I = function (e) {
          var t = e.cssPixels,
            n = e.dpr
          return Math.round(t * n) / n
        },
        O = (function (e) {
          u()(n, e)
          var t = h()(n)
          function n(e, r) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              p()(c()(i), '_setContentRef', function (e) {
                i._contentNode = e
              }),
              p()(c()(i), '_setContainerRef', function (e) {
                i._containerNode = e
              }),
              p()(c()(i), '_handleProgrammaticScroll', function (e) {
                ;(i._prevScrollY = (i._prevScrollY || 0) + e),
                  i.setState({ contentOffset: Math.max(0, i.state.contentOffset + e) })
              }),
              p()(c()(i), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout.height > i.state.contentHeight
                i._updatePositioning(t)
              }),
              (i.state = {
                stickyTop: !0,
                stickyThreshold: 0,
                contentOffset: 0,
                contentHeight: 0,
                stickyOffset: 0,
                position: 'sticky',
              }),
              (i._scheduleUpdatePositioning = Object(b.a)(
                i._updatePositioning.bind(c()(i)),
                window.requestAnimationFrame,
              )),
              i
            )
          }
          return (
            a()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.context.viewport
                  this._removeProgrammaticScrollListener = e.addProgrammaticScrollListener(
                    this._handleProgrammaticScroll,
                  )
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.context.viewport
                  if (
                    (this._updatePositioning(),
                    (this._removeScrollListener = e.addScrollListener(this._scheduleUpdatePositioning)),
                    this._containerNode)
                  ) {
                    var t = this._containerNode.getBoundingClientRect(),
                      n = e.scrollY()
                    ;(this._prevScrollY = n), this.setState({ stickyOffset: n + t.top })
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._removeScrollListener && this._removeScrollListener(),
                    this._removeProgrammaticScrollListener && this._removeProgrammaticScrollListener()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.contentOffset,
                    n = e.position,
                    r = e.stickyThreshold,
                    o = e.stickyTop,
                    i = k[n],
                    a = window.devicePixelRatio || 1,
                    s = I({ cssPixels: r, dpr: a }),
                    c = I({ cssPixels: t, dpr: a }),
                    l = { top: o ? ''.concat(s, 'px') : null, bottom: o ? null : ''.concat(s, 'px') }
                  return v.a.createElement(
                    E.a,
                    { ref: this._setContainerRef, style: [k.container, { minHeight: this.state.contentHeight }] },
                    v.a.createElement(E.a, { style: { marginTop: ''.concat(c, 'px') } }),
                    v.a.createElement(
                      E.a,
                      { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, l, i] },
                      this.props.children,
                    ),
                  )
                },
              },
              {
                key: '_updatePositioning',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  if (this._contentNode && this._containerNode) {
                    var t = this.context.viewport.scrollY(),
                      n = t - this._prevScrollY
                    if (!(Math.abs(n) < 0.5) || e) {
                      var r = this.props.distanceFromBottom
                      this._prevScrollY = t
                      var o = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        i = !!this._containerNode && this._containerNode.getBoundingClientRect()
                      if (o && i) {
                        var a = w.a.get('window'),
                          s = a.height,
                          c = t + i.top,
                          l = Math.max(o.top - i.top, 0)
                        if (s - o.height > c)
                          this._updateState({
                            stickyTop: !0,
                            stickyThreshold: c,
                            contentOffset: 0,
                            stickyOffset: c,
                            contentHeight: o.height,
                            position: 'fixed',
                          })
                        else {
                          var u = n > 0,
                            d = u !== this.state.stickyTop,
                            h = window.devicePixelRatio || 1,
                            f = o.bottom - s + r <= 1 / h,
                            p = c - o.top <= 1 / h,
                            m = (u && f) || (!u && p)
                          if (m && y.b.isFirefox()) {
                            var v = r,
                              g = c
                            this._updateState({
                              position: 'fixed',
                              stickyOffset: c,
                              stickyTop: p,
                              stickyThreshold: p ? g : v,
                              contentOffset: l,
                              contentHeight: o.height,
                            })
                          } else {
                            var b = s - o.height - r,
                              _ = s - o.height - c
                            this._updateState({
                              position: 'sticky',
                              stickyTop: u,
                              stickyOffset: c,
                              stickyThreshold: u ? b : _,
                              contentOffset: d ? l : this.state.contentOffset,
                              contentHeight: o.height,
                            })
                          }
                        }
                      }
                    }
                  }
                },
              },
              {
                key: '_updateState',
                value: function (e) {
                  var t = this.state.stickyTop !== e.stickyTop,
                    n = this.state.stickyThreshold !== e.stickyThreshold,
                    r = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                    o = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                    i = this.state.position !== e.position,
                    a = this.state.contentHeight !== e.contentHeight
                  ;(t || n || r || o || i || a) && this.setState(e)
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      p()(O, 'contextType', g.a), p()(O, 'defaultProps', { distanceFromBottom: 10 })
      var k = _.a.create(function (e) {
        return {
          container: { height: '100%' },
          sticky: { position: 'sticky' },
          fixed: { position: 'fixed' },
          static: { position: 'static' },
        }
      })
    },
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      n('yH/f')
      var r = n('ERkP'),
        o = n.n(r),
        i = n('t62R'),
        a = n('EHV7'),
        s = n('rHpw'),
        c = s.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        l = n('7Mjr'),
        u = n('I4+6'),
        d = n('cm6r'),
        h = n('MWbm'),
        f = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var p = s.a.create(function (e) {
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
          n = e.landingUrl,
          r = e.nativeID,
          m = e.rightControl,
          v = e.style,
          y = e.subtext,
          g = e.testID,
          b = e.text,
          _ = (function (e) {
            switch (e) {
              case f.TopicFilled:
                return o.a.createElement(a.a, { style: c.icon })
              default:
                return null
            }
          })(t),
          w = y ? null : p.withSubtext,
          E = u.a.generate({
            backgroundColor: s.a.theme.colors.gray0,
            color: s.a.theme.colors.cellBackground,
            customFocusBackgroundColor: s.a.theme.colors.gray0,
            customHoverBackgroundColor: s.a.theme.colors.gray0,
            customPressedBackgroundColor: s.a.theme.colors.gray0,
          })
        return o.a.createElement(
          d.a,
          {
            interactiveStyles: n ? E : null,
            link: null == n ? void 0 : n.url,
            nativeID: r,
            style: [p.root, v],
            testID: g,
          },
          o.a.createElement(
            h.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: p.mainContent },
            o.a.createElement(h.a, { style: p.icon }, _),
            o.a.createElement(
              i.b,
              { numberOfLines: 3, size: 'headline1', style: w, weight: 'heavy', withHashflags: !0 },
              b,
            ),
            o.a.createElement(
              h.a,
              { style: p.rightControlGroup },
              n ? o.a.createElement(h.a, { style: w }, o.a.createElement(l.a, { style: p.iconArrow })) : null,
              m ? o.a.createElement(h.a, null, m) : null,
            ),
          ),
          y
            ? o.a.createElement(
                i.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: p.subtext, withHashflags: !0 },
                y,
              )
            : null,
        )
      }
    },
    LHcr: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'WhoToFollowContainer', function () {
          return X
        })
      var r = n('yiKp'),
        o = n.n(r),
        i = n('VrFO'),
        a = n.n(i),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        h = n.n(d),
        f = n('2VqO'),
        p = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        y = (n('2G9S'), n('z84I'), n('M+/F'), n('ERkP')),
        g = n.n(y),
        b = n('Xs4Y'),
        _ = n('kGix'),
        w = n('v//M'),
        E = n('3XMw'),
        I = n.n(E),
        O = n('Rp9C'),
        k = n('rHpw'),
        L = n('MWbm'),
        x = n('lP98'),
        R = n('RqPI'),
        S = n('rxPX'),
        C = n('0KEI'),
        U = 'profile_accounts_sidebar',
        H = function (e, t) {
          return R.r(e)
        },
        T = function (e, t) {
          return t.userId
        },
        P = function (e, t) {
          var n = T(0, t),
            r = H(e)
          return x.c(e, { displayLocation: U, similarToUserId: n === r ? void 0 : n })
        },
        N = function (e, t) {
          var n = T(0, t),
            r = H(e)
          return x.b(e, { displayLocation: U, similarToUserId: n === r ? void 0 : n })
        },
        D = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: N, loggedInUserId: H, recommendations: P }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'WHO_TO_FOLLOW_CONTAINER',
              ),
              fetchRecommendationsIfNeeded: x.a,
            }
          })
          .withAnalytics({ component: 'suggest_who_to_follow' }),
        F = n('Re5t'),
        A = n('hqDb'),
        M = n('hxu0'),
        B = n('6vad'),
        j = n('rC8y'),
        z = I.a.a526aa66,
        K = I.a.ef62501f,
        V = I.a.d228a9a0,
        W = Object(M.a)(function (e) {
          var t = e.isInSidebar,
            n = e.userId,
            r = e.userIds,
            o = e.withProfileHeaderText,
            i = r.length > 3,
            a = '/i/connect_people?user_id='.concat(n)
          return g.a.createElement(
            L.a,
            { accessibilityLabel: z, accessibilityRole: 'complementary' },
            g.a.createElement(B.b, { text: o ? K : z }),
            g.a.createElement(A.a, { displayMode: F.a.UserCompact, userIds: r.slice(0, 3), withItemBorder: !0 }),
            i && g.a.createElement(j.a, { link: a, text: V, withBottomRadius: !0, withDarkerInteractiveBackground: t }),
          )
        }),
        Y = I.a.fd6473fa,
        q = { element: 'user', action: 'results' },
        G = { viewType: 'who_to_follow' },
        X = (function (e) {
          h()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(u()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.recommendations,
                  r = t.userId,
                  o = t.withProfileHeaderText,
                  i =
                    n &&
                    n.map(function (e) {
                      return e.user
                    })
                return g.a.createElement(W, { userId: r, userIds: i, withProfileHeaderText: o })
              }),
              v()(u()(e), '_handleImpression', function (t) {
                var n = e.props.analytics,
                  r =
                    t &&
                    t.slice(0, 3).map(function (e) {
                      return o()(o()({}, O.a.forUser(e.user)), {}, { suggestion_details: { source_data: e.token } })
                    })
                n.scribe(o()(o()({}, q), {}, { data: { items: r } }))
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.recommendations
                  this._fetchRecommendations(this.props), e && e.length > 0 && this._handleImpression(e)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.recommendations
                  this.props.userId !== e.userId && this._fetchRecommendations(this.props),
                    t !== e.recommendations && t && t.length > 0 && this._handleImpression(t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.style
                  return t === _.a.FAILED || this._hasEmptySuggestionList()
                    ? null
                    : g.a.createElement(
                        L.a,
                        { style: [J.root, n] },
                        g.a.createElement(w.a, {
                          accessibilityLabel: Y,
                          behavioralEventContext: G,
                          fetchStatus: t,
                          render: this._renderContent,
                        }),
                      )
                },
              },
              {
                key: '_fetchRecommendations',
                value: function (e) {
                  var t = e.createLocalApiErrorHandler,
                    n = e.fetchRecommendationsIfNeeded,
                    r = e.loggedInUserId,
                    o = e.userId
                  n({ limit: 4, displayLocation: U, similarToUserId: o !== r ? o : void 0 }).catch(t(b.a))
                },
              },
              {
                key: '_hasEmptySuggestionList',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.recommendations
                  return t === _.a.LOADED && 0 === n.length
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        J = k.a.create(function (e) {
          return { root: { minHeight: '15rem' } }
        }),
        Q = D(X)
      t.default = Q
    },
    Xs4Y: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var r = n('KEM+'),
        o = n.n(r),
        i = n('k49u'),
        a = n('fs1G'),
        s = o()({}, i.a.ResourceNotFound, { customAction: a.a })
    },
    XygZ: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        o = n('gIHd')
      r(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return o(this, 'a', 'name', e)
          },
        },
      )
    },
    e5HP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
      })
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('2VqO'),
        u = n.n(l),
        d = n('KEM+'),
        h = n.n(d),
        f = n('ERkP'),
        p = n.n(f),
        m = n('t62R'),
        v = n('3XMw'),
        y = n.n(v),
        g = n('rHpw'),
        b = n('MWbm'),
        _ = n('yiKp'),
        w = n.n(_),
        E = n('Lsrn'),
        I = n('k/Ka'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(I.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            p.a.createElement(
              'g',
              null,
              p.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var k = O,
        L = n('uFYP'),
        x = y.a.f1a1b790,
        R = y.a.if2bf8b3,
        S = y.a.f3624b5c,
        C = y.a.b4b3b113,
        U = y.a.be22205f,
        H = y.a.hcbbe447,
        T = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    n = e.nativeID,
                    r = e.style,
                    o = e.withCircleIcon ? k : L.a
                  return p.a.createElement(
                    b.a,
                    { style: [P.root, r] },
                    p.a.createElement(o, { style: [P.icon, t && P[t]] }),
                    p.a.createElement(m.b, { color: t, nativeID: n, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    n = e.label,
                    r = e.promotedContent,
                    o = r.adMetadataContainer,
                    i = r.advertiser,
                    a = r.advertiser_name,
                    s = r.disclosure_type,
                    c = t && i && t === i.id_str,
                    l = 'string' == typeof s && 'political' === s.toLowerCase(),
                    u = 'string' == typeof s && 'issue' === s.toLowerCase(),
                    d = !(!o || 'POLITICAL' !== o.disclaimerType) || l,
                    h = !(!o || 'ISSUE' !== o.disclaimerType) || u,
                    f = (o || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!a || c || f
                      ? d
                        ? S
                        : h
                        ? U
                        : R
                      : d
                      ? C({ fullName: a })
                      : h
                      ? H({ fullName: a })
                      : x({ fullName: a }))
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      h()(T, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var P = g.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    fyKl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return D
        })
      var r = n('97Jx'),
        o = n.n(r),
        i = n('VrFO'),
        a = n.n(i),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        h = n.n(d),
        f = n('2VqO'),
        p = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        y = n('yiKp'),
        g = n.n(y),
        b = (n('uFXj'), n('yH/f'), n('XygZ'), n('ERkP')),
        _ = n.n(b),
        w = n('zfvc'),
        E = n('jHwr'),
        I = n('VY6S'),
        O = n('w9LO'),
        k = n('//dC'),
        L = n('lHOd'),
        x = n('Oe3h'),
        R = n('0FVZ'),
        S = n('7N4s'),
        C = n('cHvH'),
        U = n('rHpw'),
        H = n('i4Oy'),
        T = n('shC7'),
        P = n('MWbm'),
        N = U.a.create(function (e) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 6)') },
            anchor: U.a.absoluteFillObject,
            mask: g()(g()({}, U.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: g()(g()({}, U.a.absoluteFillObject), {}, { bottom: void 0 }),
            content: {
              borderRadius: e.borderRadii.small,
              position: 'absolute',
              overflow: 'hidden',
              backgroundColor: e.colors.navigationBackground,
              boxShadow: e.boxShadows.medium,
            },
            contentInitialRender: { position: 'fixed', opacity: 0 },
            contentFixed: { position: 'fixed', overflowY: 'auto', overscrollBehavior: 'contain' },
          }
        }),
        D = (function (e) {
          h()(n, e)
          var t = p()(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              v()(u()(o), '_handleAnimateComplete', function () {
                var e = o.props.onAnimateComplete
                e && e()
              }),
              v()(u()(o), '_handleEsc', function (e) {
                var t = o.props.onDismiss,
                  n = e.altKey,
                  r = e.ctrlKey,
                  i = e.key,
                  a = e.metaKey
                !(n || r || a) && 'Escape' === i && t()
              }),
              v()(u()(o), '_receiveBodyRectHelperRef', function (e) {
                e && o._bodyRectHelperNode !== e && ((o._bodyRectHelperNode = e), o._scheduleUpdate())
              }),
              v()(u()(o), '_receiveAnchorRef', function (e) {
                e && o._anchorNode !== e && ((o._anchorNode = e), o._scheduleUpdate())
              }),
              v()(u()(o), '_receiveContentRef', function (e) {
                e && o._contentNode !== e && ((o._contentNode = e), o._scheduleUpdate())
              }),
              v()(u()(o), '_updatePosition', function () {
                if (
                  o._mounted &&
                  (o._anchorNode || o.props.position) &&
                  o._contentNode &&
                  o._contentNode instanceof window.HTMLElement &&
                  o._bodyRectHelperNode &&
                  o._bodyRectHelperNode instanceof window.HTMLElement
                ) {
                  var e = o._contentNode.scrollHeight,
                    t = o._contentNode.scrollWidth,
                    n = o._bodyRectHelperNode.getBoundingClientRect(),
                    r = n.left,
                    i = n.top,
                    a = n.width,
                    s = H.a.get('window'),
                    c = s.height,
                    l = s.width,
                    u = { left: 0, top: 0, height: 0, width: 0 }
                  o.props.position
                    ? (u = g()(g()({}, u), o.props.position))
                    : o._anchorNode &&
                      o._anchorNode instanceof window.HTMLElement &&
                      (u = o._anchorNode.getBoundingClientRect())
                  var d = u,
                    h = d.height,
                    f = d.left,
                    p = d.top,
                    m = d.width,
                    v = l - a,
                    y = f - r,
                    b = p - i,
                    _ = f + m >= t,
                    w = p + h >= e,
                    E = l - f >= t,
                    I = c - p >= e,
                    O = o.props.preferredVerticalOrientation,
                    k = (function (e) {
                      return T.a.getConstants().isRTL ? ('left' === e ? 'right' : 'left') : e
                    })(o.props.preferredHorizontalOrientation),
                    L =
                      o.state.verticalOrientation ||
                      (function (e) {
                        var t = e.canOrientDown,
                          n = e.canOrientUp,
                          r = e.verticalPreference
                        return (n && t) || (!n && !t) ? r : n ? 'up' : 'down'
                      })({ verticalPreference: O, canOrientUp: w, canOrientDown: I }),
                    x =
                      o.state.horizontalOrientation ||
                      (function (e) {
                        var t = e.canOrientLeft,
                          n = e.canOrientRight,
                          r = e.horizontalPreference
                        return !t || ('left' !== r && n) ? 'right' : 'left'
                      })({ horizontalPreference: k, canOrientLeft: _, canOrientRight: E }),
                    R = o.props.isFixed ? f : y,
                    S = o.props.isFixed ? p : b,
                    C = 'up' === L ? S + h - e : S,
                    U = 'left' === x ? l - R - m - v : l - R - t - v
                  o.setState({ top: Math.max(C, 0), right: U, verticalOrientation: L, horizontalOrientation: x })
                }
              }),
              (o.state = Object.freeze({})),
              (o._scheduleUpdate = Object(E.a)(o._updatePosition, window.requestAnimationFrame)),
              (o._scheduleDebouncedUpdate = Object(I.a)(o._scheduleUpdate, 250)),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), H.a.addEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._mounted = !1), H.a.removeEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.animateInDuration,
                    r = t.animateType,
                    i = t.children,
                    a = t.isFixed,
                    s = t.onDismiss,
                    c = t.preventFocusShift,
                    l = t.withKeyboardNavigation,
                    u = this.state,
                    d = u.right,
                    h = u.top,
                    f = u.verticalOrientation,
                    p = void 0 === h,
                    m = 'calc(100vh - '.concat(h || 0, 'px)'),
                    v = [
                      N.content,
                      p && N.contentInitialRender,
                      a && [N.contentFixed, { maxHeight: m }],
                      {
                        top: h,
                        right: T.a.getConstants().isRTL ? void 0 : d,
                        left: T.a.getConstants().isRTL ? d : void 0,
                      },
                    ],
                    y = _.a.createElement(
                      _.a.Fragment,
                      null,
                      _.a.createElement(P.a, { onClick: s, style: N.mask }),
                      _.a.createElement(P.a, { ref: this._receiveBodyRectHelperRef, style: N.bodyRectHelper }),
                      _.a.createElement(C.a, null, function (t) {
                        var a = t.windowWidth
                        return _.a.createElement(
                          P.a,
                          {
                            accessibilityRole: 'menu',
                            onKeyUp: e._handleEsc,
                            ref: e._receiveContentRef,
                            style: [a < U.a.theme.breakpoints.medium ? N.rootNarrow : N.rootWide, v],
                          },
                          p && 'slide' === r
                            ? i
                            : _.a.createElement(
                                w.b,
                                {
                                  animateMount: 'up' !== f,
                                  duration: n,
                                  onAnimateComplete: e._handleAnimateComplete,
                                  show: !0,
                                  type: r,
                                },
                                function (e) {
                                  var t = e.isAnimating
                                  return _.a.createElement(
                                    x.a,
                                    { id: 'Dropdown', minimizeReporting: t },
                                    function (e, t) {
                                      return _.a.createElement(P.a, o()({ ref: e() }, t({})), i)
                                    },
                                  )
                                },
                              ),
                        )
                      }),
                    )
                  return _.a.createElement(
                    P.a,
                    { ref: this._receiveAnchorRef, style: N.anchor },
                    _.a.createElement(
                      R.a.Dropdown,
                      null,
                      _.a.createElement(L.a.Consumer, null, function (e) {
                        return _.a.createElement(S.b.Consumer, null, function (t) {
                          var n = t.isModal
                          return _.a.createElement(
                            k.a,
                            { history: e, isModal: n, onDismiss: s },
                            c ? y : _.a.createElement(O.a, { withKeyboardNavigation: l }, y),
                          )
                        })
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      v()(D, 'defaultProps', {
        preferredHorizontalOrientation: 'left',
        preferredVerticalOrientation: 'down',
        animateType: 'slide',
        animateInDuration: 'normal',
        withKeyboardNavigation: !0,
      })
    },
    hqDb: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        i = n('m3Bd'),
        a = n.n(i),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        h = n.n(d),
        f = n('5Yy7'),
        p = n.n(f),
        m = n('2VqO'),
        v = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        b = (n('2G9S'), n('ERkP')),
        _ = n.n(b),
        w = n('k49u'),
        E = (n('LW0h'), n('7x/C'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        I = n('kGix'),
        O = n('G6rE'),
        k = n('rxPX'),
        L = n('0KEI'),
        x = function (e, t) {
          return t.userIds
        },
        R = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!O.e.select(e, t)
          })
        },
        S = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var r = O.e.selectFetchStatus(e, n)
            return (t[n] = r === I.a.NONE ? I.a.LOADING : r), t
          }, {})
        },
        C = Object(k.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(E.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(E.a)(R, S, x, function (e, t, n) {
                for (var r = I.a.LOADED, o = 0; o < n.length; o++) {
                  var i = n[o]
                  if (-1 === e.indexOf(i)) {
                    var a = t[i] || I.a.LOADING
                    r = r === I.a.LOADED ? a : r
                  }
                  if (r === I.a.LOADED) break
                }
                return r
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: O.e.fetchManyIfNeeded,
            }
          }),
        U = n('v//M'),
        H = n('3XMw'),
        T = n.n(H),
        P = n('pQ3Z'),
        N = n.n(P),
        D = (n('z84I'), n('cFuS')),
        F = n('Re5t'),
        A = n('MWbm'),
        M = n('88ay'),
        B = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            r = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return _.a.createElement(
            A.a,
            null,
            r.map(function (e, r) {
              return n
                ? n(e)
                : _.a.createElement(M.b, {
                    decoration: M.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: D.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      B.defaultProps = { displayMode: F.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var j = B,
        z = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        K = T.a.f5b426c2,
        V = { viewType: 'user_list' },
        W = C(
          (function (e) {
            p()(n, e)
            var t = v()(n)
            function n() {
              var e
              c()(this, n)
              for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                g()(h()(e), 'state', { allUsersUnavailable: !1 }),
                g()(h()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    r = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, a()(t, z))
                  return _.a.createElement(j, o()({}, r, { userIds: n }))
                }),
                g()(h()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              u()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    N()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return _.a.createElement(U.a, {
                      accessibilityLabel: K,
                      behavioralEventContext: V,
                      fetchStatus: this.state.allUsersUnavailable ? I.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      n = this.props,
                      r = n.availableUserIds,
                      o = n.createLocalApiErrorHandler
                    ;(0, n.fetchUsersIfNeeded)(n.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      o(
                        ((e = {}),
                        g()(e, w.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        g()(e, w.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              n
            )
          })(_.a.Component),
        )
      t.a = W
    },
    jHwr: function (e, t, n) {
      'use strict'
      t.a = function (e, t) {
        var n = null,
          r = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(r)), n
        }
      }
    },
    lP98: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return w
      }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return I
        })
      var r = n('KEM+'),
        o = n.n(r),
        i = n('yiKp'),
        a = n.n(i),
        s = (n('z84I'), n('7x/C'), n('JtPf'), n('/kEJ')),
        c = n('oEOe'),
        l = n('RgK2'),
        u = n.n(l),
        d = n('kGix'),
        h = n('Ssj5'),
        f = 'recommendations',
        p = 'rweb/recommendations/FETCH_REQUEST',
        m = 'rweb/recommendations/FETCH_SUCCESS',
        v = 'rweb/recommendations/FETCH_FAILURE',
        y = {},
        g = function (e) {
          var t = e.displayLocation,
            n = e.similarToUserId
          return t + (n ? '_'.concat(n) : '')
        }
      h.a.register(
        o()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            t = arguments.length > 1 ? arguments[1] : void 0
          if (!t.meta) return e
          switch (t.type) {
            case p:
              var n = g(t.meta)
              return a()(a()({}, e), {}, o()({}, n, a()(a()({}, e[n]), {}, { fetchStatus: d.a.LOADING })))
            case v:
              var r = g(t.meta)
              return a()(a()({}, e), {}, o()({}, r, a()(a()({}, e[r]), {}, { fetchStatus: d.a.FAILED })))
            case m:
              var i = g(t.meta),
                s = t.payload && t.payload.entities ? t.payload.entities : { recommendations: u.a },
                c = t.payload && t.payload.result ? t.payload.result : _,
                l = c.map(function (e) {
                  return s.recommendations[e]
                })
              return a()(
                a()({}, e),
                {},
                o()({}, i, a()(a()({}, e[i]), {}, { fetchStatus: d.a.LOADED, recommendations: l })),
              )
            default:
              return e
          }
        }),
      )
      var b = [],
        _ = [],
        w = function (e, t) {
          var n = t.displayLocation,
            r = t.similarToUserId,
            o = e.recommendations[g({ displayLocation: n, similarToUserId: r })]
          return o && o.recommendations ? o.recommendations : b
        },
        E = function (e, t) {
          var n = t.displayLocation,
            r = t.similarToUserId,
            o = e.recommendations[g({ displayLocation: n, similarToUserId: r })]
          return o ? o.fetchStatus : d.a.NONE
        },
        I = function (e) {
          return function (t, n, r) {
            var o = n(),
              i = e.displayLocation,
              a = e.similarToUserId,
              l = w(o, { displayLocation: i, similarToUserId: a }),
              h = E(o, { displayLocation: i, similarToUserId: a }) === d.a.LOADED
            return l && h
              ? Promise.resolve(u.a)
              : t(
                  (function (e) {
                    return function (t, n, r) {
                      var o = r.api,
                        i = e.displayLocation,
                        a = e.itsInterests,
                        l = e.limit,
                        u = void 0 === l ? 30 : l,
                        d = e.similarToUserId
                      return Object(c.b)(t, {
                        request: o.Recommendations.fetch,
                        params: { display_location: i, itsInterests: a, limit: u, user_id: d },
                      })(
                        {
                          actionTypes: { REQUEST: p, SUCCESS: m, FAILURE: v },
                          context: 'FETCH_RECOMMENDATIONS',
                          meta: { displayLocation: i, similarToUserId: d },
                        },
                        function (e) {
                          if (e && e.entities) return [Object(s.c)(e.entities)]
                        },
                      )
                    }
                  })(e),
                )
          }
        }
    },
    rC8y: function (e, t, n) {
      'use strict'
      n('hBvt')
      var r = n('SV7d'),
        o = n('ERkP'),
        i = n.n(o),
        a = n('t62R'),
        s = n('htQn'),
        c = n('rHpw'),
        l = { viewType: 'module_footer' }
      var u = c.a.create(function (e) {
        return {
          root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
          withBottomRadius: {
            borderBottomLeftRadius: e.borderRadii.xLarge,
            borderBottomRightRadius: e.borderRadii.xLarge,
          },
        }
      })
      t.a = function (e) {
        var t = e.align,
          n = e.link,
          o = e.onPress,
          c = e.text,
          d = e.weight,
          h = e.withBottomRadius,
          f = e.withDarkerInteractiveBackground
        return i.a.createElement(
          r.a,
          { behavioralEventContext: l },
          i.a.createElement(
            s.a,
            { link: n, onPress: o, style: [u.root, h && u.withBottomRadius], withDarkerInteractiveBackground: f },
            i.a.createElement(a.b, { align: t, color: 'primary', weight: d }, c),
          ),
        )
      }
    },
    sAnO: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('fyKl')
      t.default = r.default
    },
    uFYP: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        o = n.n(r),
        i = n('ERkP'),
        a = n.n(i),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    uo3S: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'InThisConversation', function () {
          return _
        })
      n('M+/F')
      var r = n('ERkP'),
        o = n.n(r),
        i = n('RhWx'),
        a = n.n(i),
        s = (n('z84I'), n('jQ3i'), n('x4t0'), n('LW0h'), n('7x/C'), n('2G9S'), n('RqPI')),
        c = n('VAyw'),
        l = n('XOJV'),
        u = n('s1N3'),
        d = n('rxPX'),
        h = function (e, t) {
          return t.focalTweetId
        },
        f = Object(d.a)()
          .propsFromState(function () {
            return { focalTweetId: h, loggedInUserId: s.r, tweetMap: l.a.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.focalTweetId,
              n = e.loggedInUserId,
              r = e.tweetMap,
              o = t && r[t]
            if (!o) return { participantIds: [] }
            var i,
              s = function (e, t) {
                var r,
                  o = n === t,
                  i = null === (r = e.unmentioned_user_ids) || void 0 === r ? void 0 : r.includes(t)
                return o || !i
              },
              l = function (e) {
                var t
                return (
                  ((null === (t = e.entities) || void 0 === t ? void 0 : t.user_mentions) || [])
                    .filter(function (t) {
                      return s(e, t.id_str)
                    })
                    .map(function (e) {
                      return e.id_str
                    }) || []
                )
              },
              d = [o.user].concat(
                a()(l(o)),
                a()(
                  ((i = o),
                  c.a.mergeTaggedUsers((i.extended_entities && i.extended_entities.media) || []).map(function (e) {
                    return e.user_id
                  })),
                ),
              ),
              h = o.quoted_status && r[o.quoted_status]
            return (
              h &&
                (d.push.apply(
                  d,
                  a()(
                    (function (e) {
                      return s(e, e.user) ? [e.user] : []
                    })(h),
                  ),
                ),
                d.push.apply(d, a()(l(h)))),
              { participantIds: Object(u.a)(d) }
            )
          })
          .withAnalytics({ component: 'in_this_conversation' }),
        p = n('3XMw'),
        m = n.n(p),
        v = n('6vad'),
        y = n('hqDb'),
        g = n('MWbm'),
        b = m.a.j88f27d8,
        _ = o.a.memo(function (e) {
          var t = e.participantIds
          return o.a.createElement(
            g.a,
            { accessibilityLabel: b, accessibilityRole: 'complementary' },
            o.a.createElement(v.b, { text: b }),
            o.a.createElement(y.a, { userIds: t.slice(0, 3), withFinalItemBorder: !1, withItemBorder: !0 }),
          )
        }),
        w = f(_)
      t.default = w
    },
  },
])
//# sourceMappingURL=WIPED
