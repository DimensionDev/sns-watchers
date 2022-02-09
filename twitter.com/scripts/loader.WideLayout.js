;(window.webpackJsonp = window.webpackJsonp || []).push([
  [188, 205],
  {
    '0af8': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'roundToNearestDevicePixel', function () {
          return k
        }),
        n.d(t, 'default', function () {
          return x
        })
      var i = n('VrFO'),
        o = n.n(i),
        r = n('Y9Ll'),
        a = n.n(r),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        d = n.n(l),
        u = n('2VqO'),
        h = n.n(u),
        p = n('KEM+'),
        f = n.n(p),
        m = n('ERkP'),
        v = n.n(m),
        y = n('aITJ'),
        _ = n('v6aA'),
        g = n('jHwr'),
        w = n('rHpw'),
        b = n('i4Oy'),
        O = n('MWbm'),
        k = function (e) {
          var t = e.cssPixels,
            n = e.dpr
          return Math.round(t * n) / n
        },
        x = (function (e) {
          d()(n, e)
          var t = h()(n)
          function n(e, i) {
            var r
            return (
              o()(this, n),
              (r = t.call(this, e, i)),
              f()(c()(r), '_setContentRef', function (e) {
                r._contentNode = e
              }),
              f()(c()(r), '_setContainerRef', function (e) {
                r._containerNode = e
              }),
              f()(c()(r), '_handleProgrammaticScroll', function (e) {
                ;(r._prevScrollY = (r._prevScrollY || 0) + e),
                  r.setState({ contentOffset: Math.max(0, r.state.contentOffset + e) })
              }),
              f()(c()(r), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout.height > r.state.contentHeight
                r._updatePositioning(t)
              }),
              (r.state = {
                stickyTop: !0,
                stickyThreshold: 0,
                contentOffset: 0,
                contentHeight: 0,
                stickyOffset: 0,
                position: 'sticky',
              }),
              (r._scheduleUpdatePositioning = Object(g.a)(
                r._updatePositioning.bind(c()(r)),
                window.requestAnimationFrame,
              )),
              r
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
                    i = e.stickyThreshold,
                    o = e.stickyTop,
                    r = E[n],
                    a = window.devicePixelRatio || 1,
                    s = k({ cssPixels: i, dpr: a }),
                    c = k({ cssPixels: t, dpr: a }),
                    l = { top: o ? ''.concat(s, 'px') : null, bottom: o ? null : ''.concat(s, 'px') }
                  return v.a.createElement(
                    O.a,
                    { ref: this._setContainerRef, style: [E.container, { minHeight: this.state.contentHeight }] },
                    v.a.createElement(O.a, { style: { marginTop: ''.concat(c, 'px') } }),
                    v.a.createElement(
                      O.a,
                      { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, l, r] },
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
                      var i = this.props.distanceFromBottom
                      this._prevScrollY = t
                      var o = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        r = !!this._containerNode && this._containerNode.getBoundingClientRect()
                      if (o && r) {
                        var a = b.a.get('window'),
                          s = a.height,
                          c = t + r.top,
                          l = Math.max(o.top - r.top, 0)
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
                          var d = n > 0,
                            u = d !== this.state.stickyTop,
                            h = window.devicePixelRatio || 1,
                            p = o.bottom - s + i <= 1 / h,
                            f = c - o.top <= 1 / h,
                            m = (d && p) || (!d && f)
                          if (m && y.b.isFirefox()) {
                            var v = i,
                              _ = c
                            this._updateState({
                              position: 'fixed',
                              stickyOffset: c,
                              stickyTop: f,
                              stickyThreshold: f ? _ : v,
                              contentOffset: l,
                              contentHeight: o.height,
                            })
                          } else {
                            var g = s - o.height - i,
                              w = s - o.height - c
                            this._updateState({
                              position: 'sticky',
                              stickyTop: d,
                              stickyOffset: c,
                              stickyThreshold: d ? g : w,
                              contentOffset: u ? l : this.state.contentOffset,
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
                    i = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                    o = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                    r = this.state.position !== e.position,
                    a = this.state.contentHeight !== e.contentHeight
                  ;(t || n || i || o || r || a) && this.setState(e)
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      f()(x, 'contextType', _.a), f()(x, 'defaultProps', { distanceFromBottom: 10 })
      var E = w.a.create(function (e) {
        return {
          container: { height: '100%' },
          sticky: { position: 'sticky' },
          fixed: { position: 'fixed' },
          static: { position: 'static' },
        }
      })
    },
    LHcr: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'WhoToFollowContainer', function () {
          return J
        })
      var i = n('yiKp'),
        o = n.n(i),
        r = n('VrFO'),
        a = n.n(r),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        d = n.n(l),
        u = n('5Yy7'),
        h = n.n(u),
        p = n('2VqO'),
        f = n.n(p),
        m = n('KEM+'),
        v = n.n(m),
        y = (n('2G9S'), n('z84I'), n('M+/F'), n('ERkP')),
        _ = n.n(y),
        g = n('Xs4Y'),
        w = n('kGix'),
        b = n('v//M'),
        O = n('3XMw'),
        k = n.n(O),
        x = n('Rp9C'),
        E = n('rHpw'),
        R = n('MWbm'),
        I = n('lP98'),
        H = n('RqPI'),
        P = n('rxPX'),
        L = n('0KEI'),
        S = 'profile_accounts_sidebar',
        T = function (e, t) {
          return H.q(e)
        },
        N = function (e, t) {
          return t.userId
        },
        C = function (e, t) {
          var n = N(0, t),
            i = T(e)
          return I.c(e, { displayLocation: S, similarToUserId: n === i ? void 0 : n })
        },
        M = function (e, t) {
          var n = N(0, t),
            i = T(e)
          return I.b(e, { displayLocation: S, similarToUserId: n === i ? void 0 : n })
        },
        F = Object(P.a)()
          .propsFromState(function () {
            return { fetchStatus: M, loggedInUserId: T, recommendations: C }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'WHO_TO_FOLLOW_CONTAINER',
              ),
              fetchRecommendationsIfNeeded: I.a,
            }
          })
          .withAnalytics({ component: 'suggest_who_to_follow' }),
        U = n('Re5t'),
        A = n('hqDb'),
        D = n('hxu0'),
        j = n('6vad'),
        W = n('rC8y'),
        B = k.a.a526aa66,
        Y = k.a.ef62501f,
        K = k.a.d228a9a0,
        V = Object(D.a)(function (e) {
          var t = e.isInSidebar,
            n = e.userId,
            i = e.userIds,
            o = e.withProfileHeaderText,
            r = i.length > 3,
            a = '/i/connect_people?user_id='.concat(n)
          return _.a.createElement(
            R.a,
            { accessibilityLabel: B, accessibilityRole: 'complementary' },
            _.a.createElement(j.b, { text: o ? Y : B }),
            _.a.createElement(A.a, { displayMode: U.a.UserCompact, userIds: i.slice(0, 3), withItemBorder: !0 }),
            r && _.a.createElement(W.a, { link: a, text: K, withBottomRadius: !0, withDarkerInteractiveBackground: t }),
          )
        }),
        q = k.a.fd6473fa,
        z = { element: 'user', action: 'results' },
        X = { viewType: 'who_to_follow' },
        J = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            a()(this, n)
            for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(d()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.recommendations,
                  i = t.userId,
                  o = t.withProfileHeaderText,
                  r =
                    n &&
                    n.map(function (e) {
                      return e.user
                    })
                return _.a.createElement(V, { userId: i, userIds: r, withProfileHeaderText: o })
              }),
              v()(d()(e), '_handleImpression', function (t) {
                var n = e.props.analytics,
                  i =
                    t &&
                    t.slice(0, 3).map(function (e) {
                      return o()(o()({}, x.a.forUser(e.user)), {}, { suggestion_details: { source_data: e.token } })
                    })
                n.scribe(o()(o()({}, z), {}, { data: { items: i } }))
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
                  return t === w.a.FAILED || this._hasEmptySuggestionList()
                    ? null
                    : _.a.createElement(
                        R.a,
                        { style: [G.root, n] },
                        _.a.createElement(b.a, {
                          accessibilityLabel: q,
                          behavioralEventContext: X,
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
                    i = e.loggedInUserId,
                    o = e.userId
                  n({ limit: 4, displayLocation: S, similarToUserId: o !== i ? o : void 0 }).catch(t(g.a))
                },
              },
              {
                key: '_hasEmptySuggestionList',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.recommendations
                  return t === w.a.LOADED && 0 === n.length
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent),
        G = E.a.create(function (e) {
          return { root: { minHeight: '15rem' } }
        }),
        Z = F(J)
      t.default = Z
    },
    XygZ: function (e, t, n) {
      'use strict'
      var i = n('ax0f'),
        o = n('gIHd')
      i(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return o(this, 'a', 'name', e)
          },
        },
      )
    },
    fyKl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return F
        })
      var i = n('97Jx'),
        o = n.n(i),
        r = n('VrFO'),
        a = n.n(r),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        d = n.n(l),
        u = n('5Yy7'),
        h = n.n(u),
        p = n('2VqO'),
        f = n.n(p),
        m = n('KEM+'),
        v = n.n(m),
        y = n('yiKp'),
        _ = n.n(y),
        g = (n('uFXj'), n('yH/f'), n('XygZ'), n('ERkP')),
        w = n.n(g),
        b = n('zfvc'),
        O = n('jHwr'),
        k = n('VY6S'),
        x = n('w9LO'),
        E = n('//dC'),
        R = n('lHOd'),
        I = n('Oe3h'),
        H = n('0FVZ'),
        P = n('7N4s'),
        L = n('cHvH'),
        S = n('rHpw'),
        T = n('i4Oy'),
        N = n('shC7'),
        C = n('MWbm'),
        M = S.a.create(function (e) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 6)') },
            anchor: S.a.absoluteFillObject,
            mask: _()(_()({}, S.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: _()(_()({}, S.a.absoluteFillObject), {}, { bottom: void 0 }),
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
        F = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n(e, i) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, i)),
              v()(d()(o), '_handleAnimateComplete', function () {
                var e = o.props.onAnimateComplete
                e && e()
              }),
              v()(d()(o), '_handleEsc', function (e) {
                var t = o.props.onDismiss,
                  n = e.altKey,
                  i = e.ctrlKey,
                  r = e.key,
                  a = e.metaKey
                !(n || i || a) && 'Escape' === r && t()
              }),
              v()(d()(o), '_receiveBodyRectHelperRef', function (e) {
                e && o._bodyRectHelperNode !== e && ((o._bodyRectHelperNode = e), o._scheduleUpdate())
              }),
              v()(d()(o), '_receiveAnchorRef', function (e) {
                e && o._anchorNode !== e && ((o._anchorNode = e), o._scheduleUpdate())
              }),
              v()(d()(o), '_receiveContentRef', function (e) {
                e && o._contentNode !== e && ((o._contentNode = e), o._scheduleUpdate())
              }),
              v()(d()(o), '_updatePosition', function () {
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
                    i = n.left,
                    r = n.top,
                    a = n.width,
                    s = T.a.get('window'),
                    c = s.height,
                    l = s.width,
                    d = { left: 0, top: 0, height: 0, width: 0 }
                  o.props.position
                    ? (d = _()(_()({}, d), o.props.position))
                    : o._anchorNode &&
                      o._anchorNode instanceof window.HTMLElement &&
                      (d = o._anchorNode.getBoundingClientRect())
                  var u = d,
                    h = u.height,
                    p = u.left,
                    f = u.top,
                    m = u.width,
                    v = l - a,
                    y = p - i,
                    g = f - r,
                    w = p + m >= t,
                    b = f + h >= e,
                    O = l - p >= t,
                    k = c - f >= e,
                    x = o.props.preferredVerticalOrientation,
                    E = (function (e) {
                      return N.a.getConstants().isRTL ? ('left' === e ? 'right' : 'left') : e
                    })(o.props.preferredHorizontalOrientation),
                    R =
                      o.state.verticalOrientation ||
                      (function (e) {
                        var t = e.canOrientDown,
                          n = e.canOrientUp,
                          i = e.verticalPreference
                        return (n && t) || (!n && !t) ? i : n ? 'up' : 'down'
                      })({ verticalPreference: x, canOrientUp: b, canOrientDown: k }),
                    I =
                      o.state.horizontalOrientation ||
                      (function (e) {
                        var t = e.canOrientLeft,
                          n = e.canOrientRight,
                          i = e.horizontalPreference
                        return !t || ('left' !== i && n) ? 'right' : 'left'
                      })({ horizontalPreference: E, canOrientLeft: w, canOrientRight: O }),
                    H = o.props.isFixed ? p : y,
                    P = o.props.isFixed ? f : g,
                    L = 'up' === R ? P + h - e : P,
                    S = 'left' === I ? l - H - m - v : l - H - t - v
                  o.setState({ top: Math.max(L, 0), right: S, verticalOrientation: R, horizontalOrientation: I })
                }
              }),
              (o.state = Object.freeze({})),
              (o._scheduleUpdate = Object(O.a)(o._updatePosition, window.requestAnimationFrame)),
              (o._scheduleDebouncedUpdate = Object(k.a)(o._scheduleUpdate, 250)),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), T.a.addEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._mounted = !1), T.a.removeEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.animateInDuration,
                    i = t.animateType,
                    r = t.children,
                    a = t.isFixed,
                    s = t.onDismiss,
                    c = t.withKeyboardNavigation,
                    l = this.state,
                    d = l.right,
                    u = l.top,
                    h = l.verticalOrientation,
                    p = void 0 === u,
                    f = 'calc(100vh - '.concat(u || 0, 'px)'),
                    m = [
                      M.content,
                      p && M.contentInitialRender,
                      a && [M.contentFixed, { maxHeight: f }],
                      {
                        top: u,
                        right: N.a.getConstants().isRTL ? void 0 : d,
                        left: N.a.getConstants().isRTL ? d : void 0,
                      },
                    ]
                  return w.a.createElement(
                    C.a,
                    { ref: this._receiveAnchorRef, style: M.anchor },
                    w.a.createElement(
                      H.a.Dropdown,
                      null,
                      w.a.createElement(R.a.Consumer, null, function (t) {
                        return w.a.createElement(P.b.Consumer, null, function (a) {
                          var l = a.isModal
                          return w.a.createElement(
                            E.a,
                            { history: t, isModal: l, onDismiss: s },
                            w.a.createElement(
                              x.a,
                              { withKeyboardNavigation: c },
                              w.a.createElement(C.a, { onClick: s, style: M.mask }),
                              w.a.createElement(C.a, { ref: e._receiveBodyRectHelperRef, style: M.bodyRectHelper }),
                              w.a.createElement(L.a, null, function (t) {
                                var a = t.windowWidth
                                return w.a.createElement(
                                  C.a,
                                  {
                                    accessibilityRole: 'menu',
                                    onKeyUp: e._handleEsc,
                                    ref: e._receiveContentRef,
                                    style: [a < S.a.theme.breakpoints.medium ? M.rootNarrow : M.rootWide, m],
                                  },
                                  p && 'slide' === i
                                    ? r
                                    : w.a.createElement(
                                        b.b,
                                        {
                                          animateMount: 'up' !== h,
                                          duration: n,
                                          onAnimateComplete: e._handleAnimateComplete,
                                          show: !0,
                                          type: i,
                                        },
                                        function (e) {
                                          var t = e.isAnimating
                                          return w.a.createElement(
                                            I.a,
                                            { id: 'Dropdown', minimizeReporting: t },
                                            function (e, t) {
                                              return w.a.createElement(C.a, o()({ ref: e() }, t({})), r)
                                            },
                                          )
                                        },
                                      ),
                                )
                              }),
                            ),
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
        })(w.a.Component)
      v()(F, 'defaultProps', {
        preferredHorizontalOrientation: 'left',
        preferredVerticalOrientation: 'down',
        animateType: 'slide',
        animateInDuration: 'normal',
        withKeyboardNavigation: !0,
      })
    },
    jHwr: function (e, t, n) {
      'use strict'
      t.a = function (e, t) {
        var n = null,
          i = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(i)), n
        }
      }
    },
    sAnO: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('fyKl')
      t.default = i.default
    },
    uo3S: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('ERkP'),
        o = n.n(i),
        r = n('RhWx'),
        a = n.n(r),
        s = (n('z84I'), n('2G9S'), n('VAyw')),
        c = n('XOJV'),
        l = n('s1N3'),
        d = n('rxPX'),
        u = function (e) {
          var t, n
          return (
            (null === (t = e.entities) || void 0 === t || null === (n = t.user_mentions) || void 0 === n
              ? void 0
              : n.map(function (e) {
                  return e.id_str
                })) || []
          )
        },
        h = function (e, t) {
          return t.focalTweetId
        },
        p = Object(d.a)()
          .propsFromState(function () {
            return { tweetMap: c.a.selectAll, focalTweetId: h }
          })
          .adjustStateProps(function (e) {
            var t = e.focalTweetId,
              n = e.tweetMap,
              i = t && n[t]
            if (!i) return { participantIds: [] }
            var o,
              r = [i.user].concat(
                a()(u(i)),
                a()(
                  ((o = i),
                  s.a.mergeTaggedUsers((o.extended_entities && o.extended_entities.media) || []).map(function (e) {
                    return e.user_id
                  })),
                ),
              ),
              c = i.quoted_status && n[i.quoted_status]
            return c && (r.push(c.user), r.push.apply(r, a()(u(c)))), { participantIds: Object(l.a)(r) }
          })
          .withAnalytics({ component: 'in_this_conversation' }),
        f = (n('M+/F'), n('3XMw')),
        m = n.n(f),
        v = n('6vad'),
        y = n('hqDb'),
        _ = n('MWbm'),
        g = m.a.j88f27d8,
        w = function (e) {
          var t = e.maxCount,
            n = e.participantIds
          return o.a.createElement(
            _.a,
            { accessibilityLabel: g, accessibilityRole: 'complementary' },
            o.a.createElement(v.b, { text: g }),
            o.a.createElement(y.a, { userIds: n.slice(0, t), withFinalItemBorder: !1, withItemBorder: !0 }),
          )
        }
      w.defaultProps = { maxCount: 3 }
      var b = w,
        O = p(function (e) {
          return o.a.createElement(b, { participantIds: e.participantIds })
        })
      t.default = O
    },
  },
])
//# sourceMappingURL=WIPED
