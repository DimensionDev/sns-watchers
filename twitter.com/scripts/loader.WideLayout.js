;(window.webpackJsonp = window.webpackJsonp || []).push([
  [190, 207],
  {
    '0af8': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'roundToNearestDevicePixel', function () {
          return w
        }),
        n.d(t, 'default', function () {
          return O
        })
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        d = n.n(l),
        u = n('2VqO'),
        h = n.n(u),
        f = n('KEM+'),
        p = n.n(f),
        m = n('ERkP'),
        v = n.n(m),
        y = n('aITJ'),
        _ = n('v6aA'),
        g = n('jHwr'),
        b = n('rHpw'),
        I = n('i4Oy'),
        E = n('MWbm'),
        w = function (e) {
          var t = e.cssPixels,
            n = e.dpr
          return Math.round(t * n) / n
        },
        O = (function (e) {
          d()(n, e)
          var t = h()(n)
          function n(e, r) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, r)),
              p()(c()(o), '_setContentRef', function (e) {
                o._contentNode = e
              }),
              p()(c()(o), '_setContainerRef', function (e) {
                o._containerNode = e
              }),
              p()(c()(o), '_handleProgrammaticScroll', function (e) {
                ;(o._prevScrollY = (o._prevScrollY || 0) + e),
                  o.setState({ contentOffset: Math.max(0, o.state.contentOffset + e) })
              }),
              p()(c()(o), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout.height > o.state.contentHeight
                o._updatePositioning(t)
              }),
              (o.state = {
                stickyTop: !0,
                stickyThreshold: 0,
                contentOffset: 0,
                contentHeight: 0,
                stickyOffset: 0,
                position: 'sticky',
              }),
              (o._scheduleUpdatePositioning = Object(g.a)(
                o._updatePositioning.bind(c()(o)),
                window.requestAnimationFrame,
              )),
              o
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
                    i = e.stickyTop,
                    o = L[n],
                    a = window.devicePixelRatio || 1,
                    s = w({ cssPixels: r, dpr: a }),
                    c = w({ cssPixels: t, dpr: a }),
                    l = { top: i ? ''.concat(s, 'px') : null, bottom: i ? null : ''.concat(s, 'px') }
                  return v.a.createElement(
                    E.a,
                    { ref: this._setContainerRef, style: [L.container, { minHeight: this.state.contentHeight }] },
                    v.a.createElement(E.a, { style: { marginTop: ''.concat(c, 'px') } }),
                    v.a.createElement(
                      E.a,
                      { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, l, o] },
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
                      var i = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        o = !!this._containerNode && this._containerNode.getBoundingClientRect()
                      if (i && o) {
                        var a = I.a.get('window'),
                          s = a.height,
                          c = t + o.top,
                          l = Math.max(i.top - o.top, 0)
                        if (s - i.height > c)
                          this._updateState({
                            stickyTop: !0,
                            stickyThreshold: c,
                            contentOffset: 0,
                            stickyOffset: c,
                            contentHeight: i.height,
                            position: 'fixed',
                          })
                        else {
                          var d = n > 0,
                            u = d !== this.state.stickyTop,
                            h = window.devicePixelRatio || 1,
                            f = i.bottom - s + r <= 1 / h,
                            p = c - i.top <= 1 / h,
                            m = (d && f) || (!d && p)
                          if (m && y.b.isFirefox()) {
                            var v = r,
                              _ = c
                            this._updateState({
                              position: 'fixed',
                              stickyOffset: c,
                              stickyTop: p,
                              stickyThreshold: p ? _ : v,
                              contentOffset: l,
                              contentHeight: i.height,
                            })
                          } else {
                            var g = s - i.height - r,
                              b = s - i.height - c
                            this._updateState({
                              position: 'sticky',
                              stickyTop: d,
                              stickyOffset: c,
                              stickyThreshold: d ? g : b,
                              contentOffset: u ? l : this.state.contentOffset,
                              contentHeight: i.height,
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
                    i = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                    o = this.state.position !== e.position,
                    a = this.state.contentHeight !== e.contentHeight
                  ;(t || n || r || i || o || a) && this.setState(e)
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      p()(O, 'contextType', _.a), p()(O, 'defaultProps', { distanceFromBottom: 10 })
      var L = b.a.create(function (e) {
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
          return G
        })
      var r = n('yiKp'),
        i = n.n(r),
        o = n('VrFO'),
        a = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        d = n.n(l),
        u = n('5Yy7'),
        h = n.n(u),
        f = n('2VqO'),
        p = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        y = (n('2G9S'), n('z84I'), n('M+/F'), n('ERkP')),
        _ = n.n(y),
        g = n('Xs4Y'),
        b = n('kGix'),
        I = n('v//M'),
        E = n('3XMw'),
        w = n.n(E),
        O = n('Rp9C'),
        L = n('rHpw'),
        k = n('MWbm'),
        S = n('lP98'),
        R = n('RqPI'),
        U = n('rxPX'),
        x = n('0KEI'),
        C = 'profile_accounts_sidebar',
        T = function (e, t) {
          return R.q(e)
        },
        N = function (e, t) {
          return t.userId
        },
        P = function (e, t) {
          var n = N(0, t),
            r = T(e)
          return S.c(e, { displayLocation: C, similarToUserId: n === r ? void 0 : n })
        },
        H = function (e, t) {
          var n = N(0, t),
            r = T(e)
          return S.b(e, { displayLocation: C, similarToUserId: n === r ? void 0 : n })
        },
        F = Object(U.a)()
          .propsFromState(function () {
            return { fetchStatus: H, loggedInUserId: T, recommendations: P }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)(
                'WHO_TO_FOLLOW_CONTAINER',
              ),
              fetchRecommendationsIfNeeded: S.a,
            }
          })
          .withAnalytics({ component: 'suggest_who_to_follow' }),
        A = n('Re5t'),
        M = n('hqDb'),
        D = n('hxu0'),
        j = n('6vad'),
        K = n('rC8y'),
        B = w.a.a526aa66,
        Y = w.a.ef62501f,
        W = w.a.d228a9a0,
        V = Object(D.a)(function (e) {
          var t = e.isInSidebar,
            n = e.userId,
            r = e.userIds,
            i = e.withProfileHeaderText,
            o = r.length > 3,
            a = '/i/connect_people?user_id='.concat(n)
          return _.a.createElement(
            k.a,
            { accessibilityLabel: B, accessibilityRole: 'complementary' },
            _.a.createElement(j.b, { text: i ? Y : B }),
            _.a.createElement(M.a, { displayMode: A.a.UserCompact, userIds: r.slice(0, 3), withItemBorder: !0 }),
            o && _.a.createElement(K.a, { link: a, text: W, withBottomRadius: !0, withDarkerInteractiveBackground: t }),
          )
        }),
        q = w.a.fd6473fa,
        z = { element: 'user', action: 'results' },
        X = { viewType: 'who_to_follow' },
        G = (function (e) {
          h()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(d()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.recommendations,
                  r = t.userId,
                  i = t.withProfileHeaderText,
                  o =
                    n &&
                    n.map(function (e) {
                      return e.user
                    })
                return _.a.createElement(V, { userId: r, userIds: o, withProfileHeaderText: i })
              }),
              v()(d()(e), '_handleImpression', function (t) {
                var n = e.props.analytics,
                  r =
                    t &&
                    t.slice(0, 3).map(function (e) {
                      return i()(i()({}, O.a.forUser(e.user)), {}, { suggestion_details: { source_data: e.token } })
                    })
                n.scribe(i()(i()({}, z), {}, { data: { items: r } }))
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
                  return t === b.a.FAILED || this._hasEmptySuggestionList()
                    ? null
                    : _.a.createElement(
                        k.a,
                        { style: [J.root, n] },
                        _.a.createElement(I.a, {
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
                    r = e.loggedInUserId,
                    i = e.userId
                  n({ limit: 4, displayLocation: C, similarToUserId: i !== r ? i : void 0 }).catch(t(g.a))
                },
              },
              {
                key: '_hasEmptySuggestionList',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.recommendations
                  return t === b.a.LOADED && 0 === n.length
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent),
        J = L.a.create(function (e) {
          return { root: { minHeight: '15rem' } }
        }),
        Q = F(G)
      t.default = Q
    },
    Xs4Y: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var r = n('KEM+'),
        i = n.n(r),
        o = n('k49u'),
        a = n('fs1G'),
        s = i()({}, o.a.ResourceNotFound, { customAction: a.a })
    },
    XygZ: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        i = n('gIHd')
      r(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return i(this, 'a', 'name', e)
          },
        },
      )
    },
    e5HP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return N
      })
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('2VqO'),
        d = n.n(l),
        u = n('KEM+'),
        h = n.n(u),
        f = n('ERkP'),
        p = n.n(f),
        m = n('t62R'),
        v = n('3XMw'),
        y = n.n(v),
        _ = n('rHpw'),
        g = n('MWbm'),
        b = n('yiKp'),
        I = n.n(b),
        E = n('Lsrn'),
        w = n('k/Ka'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(w.a)(
            'svg',
            I()(
              I()({}, e),
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
      var L = O,
        k = n('uFYP'),
        S = y.a.f1a1b790,
        R = y.a.if2bf8b3,
        U = y.a.f3624b5c,
        x = y.a.b4b3b113,
        C = y.a.be22205f,
        T = y.a.hcbbe447,
        N = (function (e) {
          c()(n, e)
          var t = d()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
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
                    i = e.withCircleIcon ? L : k.a
                  return p.a.createElement(
                    g.a,
                    { style: [P.root, r] },
                    p.a.createElement(i, { style: [P.icon, t && P[t]] }),
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
                    i = r.adMetadataContainer,
                    o = r.advertiser,
                    a = r.advertiser_name,
                    s = r.disclosure_type,
                    c = t && o && t === o.id_str,
                    l = 'string' == typeof s && 'political' === s.toLowerCase(),
                    d = 'string' == typeof s && 'issue' === s.toLowerCase(),
                    u = !(!i || 'POLITICAL' !== i.disclaimerType) || l,
                    h = !(!i || 'ISSUE' !== i.disclaimerType) || d,
                    f = (i || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!a || c || f
                      ? u
                        ? U
                        : h
                        ? C
                        : R
                      : u
                      ? x({ fullName: a })
                      : h
                      ? T({ fullName: a })
                      : S({ fullName: a }))
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      h()(N, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var P = _.a.create(function (e) {
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
          return F
        })
      var r = n('97Jx'),
        i = n.n(r),
        o = n('VrFO'),
        a = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        d = n.n(l),
        u = n('5Yy7'),
        h = n.n(u),
        f = n('2VqO'),
        p = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        y = n('yiKp'),
        _ = n.n(y),
        g = (n('uFXj'), n('yH/f'), n('XygZ'), n('ERkP')),
        b = n.n(g),
        I = n('zfvc'),
        E = n('jHwr'),
        w = n('VY6S'),
        O = n('w9LO'),
        L = n('//dC'),
        k = n('lHOd'),
        S = n('Oe3h'),
        R = n('0FVZ'),
        U = n('7N4s'),
        x = n('cHvH'),
        C = n('rHpw'),
        T = n('i4Oy'),
        N = n('shC7'),
        P = n('MWbm'),
        H = C.a.create(function (e) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 6)') },
            anchor: C.a.absoluteFillObject,
            mask: _()(_()({}, C.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: _()(_()({}, C.a.absoluteFillObject), {}, { bottom: void 0 }),
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
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              v()(d()(i), '_handleAnimateComplete', function () {
                var e = i.props.onAnimateComplete
                e && e()
              }),
              v()(d()(i), '_handleEsc', function (e) {
                var t = i.props.onDismiss,
                  n = e.altKey,
                  r = e.ctrlKey,
                  o = e.key,
                  a = e.metaKey
                !(n || r || a) && 'Escape' === o && t()
              }),
              v()(d()(i), '_receiveBodyRectHelperRef', function (e) {
                e && i._bodyRectHelperNode !== e && ((i._bodyRectHelperNode = e), i._scheduleUpdate())
              }),
              v()(d()(i), '_receiveAnchorRef', function (e) {
                e && i._anchorNode !== e && ((i._anchorNode = e), i._scheduleUpdate())
              }),
              v()(d()(i), '_receiveContentRef', function (e) {
                e && i._contentNode !== e && ((i._contentNode = e), i._scheduleUpdate())
              }),
              v()(d()(i), '_updatePosition', function () {
                if (
                  i._mounted &&
                  (i._anchorNode || i.props.position) &&
                  i._contentNode &&
                  i._contentNode instanceof window.HTMLElement &&
                  i._bodyRectHelperNode &&
                  i._bodyRectHelperNode instanceof window.HTMLElement
                ) {
                  var e = i._contentNode.scrollHeight,
                    t = i._contentNode.scrollWidth,
                    n = i._bodyRectHelperNode.getBoundingClientRect(),
                    r = n.left,
                    o = n.top,
                    a = n.width,
                    s = T.a.get('window'),
                    c = s.height,
                    l = s.width,
                    d = { left: 0, top: 0, height: 0, width: 0 }
                  i.props.position
                    ? (d = _()(_()({}, d), i.props.position))
                    : i._anchorNode &&
                      i._anchorNode instanceof window.HTMLElement &&
                      (d = i._anchorNode.getBoundingClientRect())
                  var u = d,
                    h = u.height,
                    f = u.left,
                    p = u.top,
                    m = u.width,
                    v = l - a,
                    y = f - r,
                    g = p - o,
                    b = f + m >= t,
                    I = p + h >= e,
                    E = l - f >= t,
                    w = c - p >= e,
                    O = i.props.preferredVerticalOrientation,
                    L = (function (e) {
                      return N.a.getConstants().isRTL ? ('left' === e ? 'right' : 'left') : e
                    })(i.props.preferredHorizontalOrientation),
                    k =
                      i.state.verticalOrientation ||
                      (function (e) {
                        var t = e.canOrientDown,
                          n = e.canOrientUp,
                          r = e.verticalPreference
                        return (n && t) || (!n && !t) ? r : n ? 'up' : 'down'
                      })({ verticalPreference: O, canOrientUp: I, canOrientDown: w }),
                    S =
                      i.state.horizontalOrientation ||
                      (function (e) {
                        var t = e.canOrientLeft,
                          n = e.canOrientRight,
                          r = e.horizontalPreference
                        return !t || ('left' !== r && n) ? 'right' : 'left'
                      })({ horizontalPreference: L, canOrientLeft: b, canOrientRight: E }),
                    R = i.props.isFixed ? f : y,
                    U = i.props.isFixed ? p : g,
                    x = 'up' === k ? U + h - e : U,
                    C = 'left' === S ? l - R - m - v : l - R - t - v
                  i.setState({ top: Math.max(x, 0), right: C, verticalOrientation: k, horizontalOrientation: S })
                }
              }),
              (i.state = Object.freeze({})),
              (i._scheduleUpdate = Object(E.a)(i._updatePosition, window.requestAnimationFrame)),
              (i._scheduleDebouncedUpdate = Object(w.a)(i._scheduleUpdate, 250)),
              i
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
                    r = t.animateType,
                    o = t.children,
                    a = t.isFixed,
                    s = t.onDismiss,
                    c = t.preventFocusShift,
                    l = t.withKeyboardNavigation,
                    d = this.state,
                    u = d.right,
                    h = d.top,
                    f = d.verticalOrientation,
                    p = void 0 === h,
                    m = 'calc(100vh - '.concat(h || 0, 'px)'),
                    v = [
                      H.content,
                      p && H.contentInitialRender,
                      a && [H.contentFixed, { maxHeight: m }],
                      {
                        top: h,
                        right: N.a.getConstants().isRTL ? void 0 : u,
                        left: N.a.getConstants().isRTL ? u : void 0,
                      },
                    ],
                    y = b.a.createElement(
                      b.a.Fragment,
                      null,
                      b.a.createElement(P.a, { onClick: s, style: H.mask }),
                      b.a.createElement(P.a, { ref: this._receiveBodyRectHelperRef, style: H.bodyRectHelper }),
                      b.a.createElement(x.a, null, function (t) {
                        var a = t.windowWidth
                        return b.a.createElement(
                          P.a,
                          {
                            accessibilityRole: 'menu',
                            onKeyUp: e._handleEsc,
                            ref: e._receiveContentRef,
                            style: [a < C.a.theme.breakpoints.medium ? H.rootNarrow : H.rootWide, v],
                          },
                          p && 'slide' === r
                            ? o
                            : b.a.createElement(
                                I.b,
                                {
                                  animateMount: 'up' !== f,
                                  duration: n,
                                  onAnimateComplete: e._handleAnimateComplete,
                                  show: !0,
                                  type: r,
                                },
                                function (e) {
                                  var t = e.isAnimating
                                  return b.a.createElement(
                                    S.a,
                                    { id: 'Dropdown', minimizeReporting: t },
                                    function (e, t) {
                                      return b.a.createElement(P.a, i()({ ref: e() }, t({})), o)
                                    },
                                  )
                                },
                              ),
                        )
                      }),
                    )
                  return b.a.createElement(
                    P.a,
                    { ref: this._receiveAnchorRef, style: H.anchor },
                    b.a.createElement(
                      R.a.Dropdown,
                      null,
                      b.a.createElement(k.a.Consumer, null, function (e) {
                        return b.a.createElement(U.b.Consumer, null, function (t) {
                          var n = t.isModal
                          return b.a.createElement(
                            L.a,
                            { history: e, isModal: n, onDismiss: s },
                            c ? y : b.a.createElement(O.a, { withKeyboardNavigation: l }, y),
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
        })(b.a.Component)
      v()(F, 'defaultProps', {
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
        i = n.n(r),
        o = n('m3Bd'),
        a = n.n(o),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        d = n.n(l),
        u = n('1Pcy'),
        h = n.n(u),
        f = n('5Yy7'),
        p = n.n(f),
        m = n('2VqO'),
        v = n.n(m),
        y = n('KEM+'),
        _ = n.n(y),
        g = (n('2G9S'), n('ERkP')),
        b = n.n(g),
        I = n('k49u'),
        E = (n('LW0h'), n('7x/C'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        w = n('kGix'),
        O = n('G6rE'),
        L = n('rxPX'),
        k = n('0KEI'),
        S = function (e, t) {
          return t.userIds
        },
        R = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!O.e.select(e, t)
          })
        },
        U = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var r = O.e.selectFetchStatus(e, n)
            return (t[n] = r === w.a.NONE ? w.a.LOADING : r), t
          }, {})
        },
        x = Object(L.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(E.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(E.a)(R, U, S, function (e, t, n) {
                for (var r = w.a.LOADED, i = 0; i < n.length; i++) {
                  var o = n[i]
                  if (-1 === e.indexOf(o)) {
                    var a = t[o] || w.a.LOADING
                    r = r === w.a.LOADED ? a : r
                  }
                  if (r === w.a.LOADED) break
                }
                return r
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: O.e.fetchManyIfNeeded,
            }
          }),
        C = n('v//M'),
        T = n('3XMw'),
        N = n.n(T),
        P = n('pQ3Z'),
        H = n.n(P),
        F = (n('z84I'), n('cFuS')),
        A = n('Re5t'),
        M = n('MWbm'),
        D = n('88ay'),
        j = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            r = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return b.a.createElement(
            M.a,
            null,
            r.map(function (e, r) {
              return n
                ? n(e)
                : b.a.createElement(D.b, {
                    decoration: D.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: F.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      j.defaultProps = { displayMode: A.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var K = j,
        B = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        Y = N.a.f5b426c2,
        W = { viewType: 'user_list' },
        V = x(
          (function (e) {
            p()(n, e)
            var t = v()(n)
            function n() {
              var e
              c()(this, n)
              for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                _()(h()(e), 'state', { allUsersUnavailable: !1 }),
                _()(h()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    r = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, a()(t, B))
                  return b.a.createElement(K, i()({}, r, { userIds: n }))
                }),
                _()(h()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              d()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    H()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return b.a.createElement(C.a, {
                      accessibilityLabel: Y,
                      behavioralEventContext: W,
                      fetchStatus: this.state.allUsersUnavailable ? w.a.LOADED : this.props.fetchStatus,
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
                      i = n.createLocalApiErrorHandler
                    ;(0, n.fetchUsersIfNeeded)(n.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      i(
                        ((e = {}),
                        _()(e, I.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        _()(e, I.a.OtherUserSuspended, {
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
          })(b.a.Component),
        )
      t.a = V
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
        return I
      }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return w
        })
      var r = n('KEM+'),
        i = n.n(r),
        o = n('yiKp'),
        a = n.n(o),
        s = (n('z84I'), n('7x/C'), n('JtPf'), n('/kEJ')),
        c = n('oEOe'),
        l = n('RgK2'),
        d = n.n(l),
        u = n('kGix'),
        h = n('Ssj5'),
        f = 'recommendations',
        p = 'rweb/recommendations/FETCH_REQUEST',
        m = 'rweb/recommendations/FETCH_SUCCESS',
        v = 'rweb/recommendations/FETCH_FAILURE',
        y = {},
        _ = function (e) {
          var t = e.displayLocation,
            n = e.similarToUserId
          return t + (n ? '_'.concat(n) : '')
        }
      h.a.register(
        i()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            t = arguments.length > 1 ? arguments[1] : void 0
          if (!t.meta) return e
          switch (t.type) {
            case p:
              var n = _(t.meta)
              return a()(a()({}, e), {}, i()({}, n, a()(a()({}, e[n]), {}, { fetchStatus: u.a.LOADING })))
            case v:
              var r = _(t.meta)
              return a()(a()({}, e), {}, i()({}, r, a()(a()({}, e[r]), {}, { fetchStatus: u.a.FAILED })))
            case m:
              var o = _(t.meta),
                s = t.payload && t.payload.entities ? t.payload.entities : { recommendations: d.a },
                c = t.payload && t.payload.result ? t.payload.result : b,
                l = c.map(function (e) {
                  return s.recommendations[e]
                })
              return a()(
                a()({}, e),
                {},
                i()({}, o, a()(a()({}, e[o]), {}, { fetchStatus: u.a.LOADED, recommendations: l })),
              )
            default:
              return e
          }
        }),
      )
      var g = [],
        b = [],
        I = function (e, t) {
          var n = t.displayLocation,
            r = t.similarToUserId,
            i = e.recommendations[_({ displayLocation: n, similarToUserId: r })]
          return i && i.recommendations ? i.recommendations : g
        },
        E = function (e, t) {
          var n = t.displayLocation,
            r = t.similarToUserId,
            i = e.recommendations[_({ displayLocation: n, similarToUserId: r })]
          return i ? i.fetchStatus : u.a.NONE
        },
        w = function (e) {
          return function (t, n, r) {
            var i = n(),
              o = e.displayLocation,
              a = e.similarToUserId,
              l = I(i, { displayLocation: o, similarToUserId: a }),
              h = E(i, { displayLocation: o, similarToUserId: a }) === u.a.LOADED
            return l && h
              ? Promise.resolve(d.a)
              : t(
                  (function (e) {
                    return function (t, n, r) {
                      var i = r.api,
                        o = e.displayLocation,
                        a = e.itsInterests,
                        l = e.limit,
                        d = void 0 === l ? 30 : l,
                        u = e.similarToUserId
                      return Object(c.b)(t, {
                        request: i.Recommendations.fetch,
                        params: { display_location: o, itsInterests: a, limit: d, user_id: u },
                      })(
                        {
                          actionTypes: { REQUEST: p, SUCCESS: m, FAILURE: v },
                          context: 'FETCH_RECOMMENDATIONS',
                          meta: { displayLocation: o, similarToUserId: u },
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
    sAnO: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('fyKl')
      t.default = r.default
    },
    uFYP: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        i = n.n(r),
        o = n('ERkP'),
        a = n.n(o),
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
          return b
        })
      n('M+/F')
      var r = n('ERkP'),
        i = n.n(r),
        o = n('RhWx'),
        a = n.n(o),
        s = (n('z84I'), n('jQ3i'), n('x4t0'), n('LW0h'), n('7x/C'), n('2G9S'), n('RqPI')),
        c = n('VAyw'),
        l = n('XOJV'),
        d = n('s1N3'),
        u = n('rxPX'),
        h = function (e, t) {
          return t.focalTweetId
        },
        f = Object(u.a)()
          .propsFromState(function () {
            return { focalTweetId: h, loggedInUserId: s.q, tweetMap: l.a.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.focalTweetId,
              n = e.loggedInUserId,
              r = e.tweetMap,
              i = t && r[t]
            if (!i) return { participantIds: [] }
            var o,
              s = function (e, t) {
                var r,
                  i = n === t,
                  o = null === (r = e.unmentioned_user_ids) || void 0 === r ? void 0 : r.includes(t)
                return i || !o
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
              u = [i.user].concat(
                a()(l(i)),
                a()(
                  ((o = i),
                  c.a.mergeTaggedUsers((o.extended_entities && o.extended_entities.media) || []).map(function (e) {
                    return e.user_id
                  })),
                ),
              ),
              h = i.quoted_status && r[i.quoted_status]
            return (
              h &&
                (u.push.apply(
                  u,
                  a()(
                    (function (e) {
                      return s(e, e.user) ? [e.user] : []
                    })(h),
                  ),
                ),
                u.push.apply(u, a()(l(h)))),
              { participantIds: Object(d.a)(u) }
            )
          })
          .withAnalytics({ component: 'in_this_conversation' }),
        p = n('3XMw'),
        m = n.n(p),
        v = n('6vad'),
        y = n('hqDb'),
        _ = n('MWbm'),
        g = m.a.j88f27d8,
        b = i.a.memo(function (e) {
          var t = e.participantIds
          return i.a.createElement(
            _.a,
            { accessibilityLabel: g, accessibilityRole: 'complementary' },
            i.a.createElement(v.b, { text: g }),
            i.a.createElement(y.a, { userIds: t.slice(0, 3), withFinalItemBorder: !1, withItemBorder: !0 }),
          )
        }),
        I = f(b)
      t.default = I
    },
  },
])
//# sourceMappingURL=WIPED
