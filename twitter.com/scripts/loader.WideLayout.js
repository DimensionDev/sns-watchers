;(window.webpackJsonp = window.webpackJsonp || []).push([
  [182, 197],
  {
    '0af8': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'roundToNearestDevicePixel', function () {
          return R
        }),
        n.d(t, 'default', function () {
          return P
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        v = n.n(m),
        y = n('ERkP'),
        O = n('aITJ'),
        b = (n('aWzz'), n('v6aA')),
        _ = n('jHwr'),
        g = n('rHpw'),
        w = n('i4Oy'),
        E = n('MWbm')
      function I(e) {
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
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var R = function (e) {
          var t = e.cssPixels,
            n = e.dpr
          return Math.round(t * n) / n
        },
        P = (function (e) {
          l()(n, e)
          var t = I(n)
          function n(e, r) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              v()(s()(i), '_setContentRef', function (e) {
                i._contentNode = e
              }),
              v()(s()(i), '_setContainerRef', function (e) {
                i._containerNode = e
              }),
              v()(s()(i), '_handleProgrammaticScroll', function (e) {
                ;(i._prevScrollY = (i._prevScrollY || 0) + e),
                  i.setState({ contentOffset: Math.max(0, i.state.contentOffset + e) })
              }),
              v()(s()(i), '_handleLayout', function (e) {
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
              (i._scheduleUpdatePositioning = Object(_.a)(
                i._updatePositioning.bind(s()(i)),
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
                    i = S[n],
                    a = window.devicePixelRatio || 1,
                    c = R({ cssPixels: r, dpr: a }),
                    s = R({ cssPixels: t, dpr: a }),
                    u = { top: o ? ''.concat(c, 'px') : null, bottom: o ? null : ''.concat(c, 'px') }
                  return y.createElement(
                    E.a,
                    { ref: this._setContainerRef, style: [S.container, { minHeight: this.state.contentHeight }] },
                    y.createElement(E.a, { style: { marginTop: ''.concat(s, 'px') } }),
                    y.createElement(
                      E.a,
                      { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, u, i] },
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
                          c = a.height,
                          s = t + i.top,
                          u = Math.max(o.top - i.top, 0)
                        if (c - o.height > s)
                          this._updateState({
                            stickyTop: !0,
                            stickyThreshold: s,
                            contentOffset: 0,
                            stickyOffset: s,
                            contentHeight: o.height,
                            position: 'fixed',
                          })
                        else {
                          var l = n > 0,
                            d = l !== this.state.stickyTop,
                            f = window.devicePixelRatio || 1,
                            p = o.bottom - c + r <= 1 / f,
                            h = s - o.top <= 1 / f,
                            m = (l && p) || (!l && h)
                          if (m && O.b.isFirefox()) {
                            var v = r,
                              y = s
                            this._updateState({
                              position: 'fixed',
                              stickyOffset: s,
                              stickyTop: h,
                              stickyThreshold: h ? y : v,
                              contentOffset: u,
                              contentHeight: o.height,
                            })
                          } else {
                            var b = c - o.height - r,
                              _ = c - o.height - s
                            this._updateState({
                              position: 'sticky',
                              stickyTop: l,
                              stickyOffset: s,
                              stickyThreshold: l ? b : _,
                              contentOffset: d ? u : this.state.contentOffset,
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
        })(y.PureComponent)
      v()(P, 'contextType', b.a), v()(P, 'defaultProps', { distanceFromBottom: 10 })
      var S = g.a.create(function (e) {
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
          return V
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        l = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        h = n.n(p),
        m = n('KEM+'),
        v = n.n(m),
        y = (n('2G9S'), n('z84I'), n('M+/F'), n('ERkP')),
        O = n('Xs4Y'),
        b = n('kGix'),
        _ = n('v//M'),
        g = n('3XMw'),
        w = n.n(g),
        E = n('Rp9C'),
        I = n('rHpw'),
        R = n('MWbm'),
        P = n('lP98'),
        S = n('RqPI'),
        L = n('rxPX'),
        k = n('0KEI'),
        x = 'profile_accounts_sidebar',
        U = function (e, t) {
          return S.p(e)
        },
        H = function (e, t) {
          return t.userId
        },
        N = function (e, t) {
          var n = H(0, t),
            r = U(e)
          return P.c(e, { displayLocation: x, similarToUserId: n === r ? void 0 : n })
        },
        T = function (e, t) {
          var n = H(0, t),
            r = U(e)
          return P.b(e, { displayLocation: x, similarToUserId: n === r ? void 0 : n })
        },
        j = Object(L.a)()
          .propsFromState(function () {
            return { fetchStatus: T, loggedInUserId: U, recommendations: N }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'WHO_TO_FOLLOW_CONTAINER',
              ),
              fetchRecommendationsIfNeeded: P.a,
            }
          })
          .withAnalytics({ component: 'suggest_who_to_follow' }),
        D = n('Re5t'),
        C = n('hqDb'),
        A = n('hxu0'),
        F = n('6vad'),
        M = n('rC8y'),
        B = w.a.a526aa66,
        W = w.a.ef62501f,
        K = w.a.d228a9a0,
        Y = Object(A.a)(function (e) {
          var t = e.isInSidebar,
            n = e.userId,
            r = e.userIds,
            o = e.withProfileHeaderText,
            i = r.length > 3,
            a = '/i/connect_people?user_id='.concat(n)
          return y.createElement(
            R.a,
            { accessibilityLabel: B, accessibilityRole: 'complementary' },
            y.createElement(F.b, { text: o ? W : B }),
            y.createElement(C.a, { displayMode: D.a.UserCompact, userIds: r.slice(0, 3), withItemBorder: !0 }),
            i && y.createElement(M.a, { link: a, text: K, withBottomRadius: !0, withDarkerInteractiveBackground: t }),
          )
        })
      function z(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function J(e) {
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
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Z = w.a.fd6473fa,
        G = { element: 'user', action: 'results' },
        q = { viewType: 'who_to_follow' },
        V = (function (e) {
          l()(n, e)
          var t = J(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.recommendations,
                  r = t.userId,
                  o = t.withProfileHeaderText,
                  i =
                    n &&
                    n.map(function (e) {
                      return e.user
                    })
                return y.createElement(Y, { userId: r, userIds: i, withProfileHeaderText: o })
              }),
              v()(s()(e), '_handleImpression', function (t) {
                var n = e.props.analytics,
                  r =
                    t &&
                    t.slice(0, 3).map(function (e) {
                      return X(X({}, E.a.forUser(e.user)), {}, { suggestion_details: { source_data: e.token } })
                    })
                n.scribe(X(X({}, G), {}, { data: { items: r } }))
              }),
              e
            )
          }
          return (
            a()(n, [
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
                    : y.createElement(
                        R.a,
                        { style: [Q.root, n] },
                        y.createElement(_.a, {
                          accessibilityLabel: Z,
                          behavioralEventContext: q,
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
                  n({ limit: 4, displayLocation: x, similarToUserId: o !== r ? o : void 0 }).catch(t(O.a))
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
        })(y.PureComponent),
        Q = I.a.create(function (e) {
          return { root: { minHeight: '15rem' } }
        }),
        $ = j(V)
      t.default = $
    },
    Xs4Y: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('KEM+'),
        o = n.n(r),
        i = n('k49u'),
        a = n('fs1G'),
        c = o()({}, i.a.ResourceNotFound, { customAction: a.a })
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
    fyKl: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return A
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var r = n('97Jx'),
        o = n.n(r),
        i = n('VrFO'),
        a = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        f = n.n(d),
        p = n('N+ot'),
        h = n.n(p),
        m = n('AuHH'),
        v = n.n(m),
        y = n('KEM+'),
        O = n.n(y),
        b = (n('uFXj'), n('yH/f'), n('XygZ'), n('ERkP')),
        _ = n('zfvc'),
        g = n('jHwr'),
        w = n('VY6S'),
        E = n('w9LO'),
        I = n('//dC'),
        R = n('lHOd'),
        P = n('Oe3h'),
        S = n('0FVZ'),
        L = n('7N4s'),
        k = n('cHvH'),
        x = n('rHpw'),
        U = n('i4Oy'),
        H = n('shC7'),
        N = n('MWbm')
      function T(e) {
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
            r = v()(e)
          if (t) {
            var o = v()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      function j(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                O()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var C = x.a.create(function (e) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 6)') },
            anchor: x.a.absoluteFillObject,
            mask: D(D({}, x.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: D(D({}, x.a.absoluteFillObject), {}, { bottom: void 0 }),
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
        A = (function (e) {
          f()(n, e)
          var t = T(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              O()(l()(o), '_handleAnimateComplete', function () {
                var e = o.props.onAnimateComplete
                e && e()
              }),
              O()(l()(o), '_handleEsc', function (e) {
                var t = o.props.onDismiss,
                  n = e.altKey,
                  r = e.ctrlKey,
                  i = e.key,
                  a = e.metaKey
                !(n || r || a) && 'Escape' === i && t()
              }),
              O()(l()(o), '_receiveBodyRectHelperRef', function (e) {
                e && o._bodyRectHelperNode !== e && ((o._bodyRectHelperNode = e), o._scheduleUpdate())
              }),
              O()(l()(o), '_receiveAnchorRef', function (e) {
                e && o._anchorNode !== e && ((o._anchorNode = e), o._scheduleUpdate())
              }),
              O()(l()(o), '_receiveContentRef', function (e) {
                e && o._contentNode !== e && ((o._contentNode = e), o._scheduleUpdate())
              }),
              O()(l()(o), '_updatePosition', function () {
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
                    c = U.a.get('window'),
                    s = c.height,
                    u = c.width,
                    l = { left: 0, top: 0, height: 0, width: 0 }
                  o.props.position
                    ? (l = D(D({}, l), o.props.position))
                    : o._anchorNode &&
                      o._anchorNode instanceof window.HTMLElement &&
                      (l = o._anchorNode.getBoundingClientRect())
                  var d = l,
                    f = d.height,
                    p = d.left,
                    h = d.top,
                    m = d.width,
                    v = u - a,
                    y = p - r,
                    O = h - i,
                    b = p + m >= t,
                    _ = h + f >= e,
                    g = u - p >= t,
                    w = s - h >= e,
                    E = o.props.preferredVerticalOrientation,
                    I = (function (e) {
                      return H.a.getConstants().isRTL ? ('left' === e ? 'right' : 'left') : e
                    })(o.props.preferredHorizontalOrientation),
                    R =
                      o.state.verticalOrientation ||
                      (function (e) {
                        var t = e.canOrientDown,
                          n = e.canOrientUp,
                          r = e.verticalPreference
                        return (n && t) || (!n && !t) ? r : n ? 'up' : 'down'
                      })({ verticalPreference: E, canOrientUp: _, canOrientDown: w }),
                    P =
                      o.state.horizontalOrientation ||
                      (function (e) {
                        var t = e.canOrientLeft,
                          n = e.canOrientRight,
                          r = e.horizontalPreference
                        return !t || ('left' !== r && n) ? 'right' : 'left'
                      })({ horizontalPreference: I, canOrientLeft: b, canOrientRight: g }),
                    S = o.props.isFixed ? p : y,
                    L = o.props.isFixed ? h : O,
                    k = 'up' === R ? L + f - e : L,
                    x = 'left' === P ? u - S - m - v : u - S - t - v
                  o.setState({ top: Math.max(k, 0), right: x, verticalOrientation: R, horizontalOrientation: P })
                }
              }),
              (o.state = Object.freeze({})),
              (o._scheduleUpdate = Object(g.a)(o._updatePosition, window.requestAnimationFrame)),
              (o._scheduleDebouncedUpdate = Object(w.a)(o._scheduleUpdate, 250)),
              o
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._mounted = !0), U.a.addEventListener('change', this._scheduleDebouncedUpdate)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._mounted = !1), U.a.removeEventListener('change', this._scheduleDebouncedUpdate)
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
                    c = t.onDismiss,
                    s = t.withKeyboardNavigation,
                    u = this.state,
                    l = u.right,
                    d = u.top,
                    f = u.verticalOrientation,
                    p = void 0 === d,
                    h = 'calc(100vh - '.concat(d || 0, 'px)'),
                    m = [
                      C.content,
                      p && C.contentInitialRender,
                      a && [C.contentFixed, { maxHeight: h }],
                      {
                        top: d,
                        right: H.a.getConstants().isRTL ? void 0 : l,
                        left: H.a.getConstants().isRTL ? l : void 0,
                      },
                    ]
                  return b.createElement(
                    N.a,
                    { ref: this._receiveAnchorRef, style: C.anchor },
                    b.createElement(
                      S.a.Dropdown,
                      null,
                      b.createElement(R.a.Consumer, null, function (t) {
                        return b.createElement(L.b.Consumer, null, function (a) {
                          var u = a.isModal
                          return b.createElement(
                            I.a,
                            { history: t, isModal: u, onDismiss: c },
                            b.createElement(
                              E.a,
                              { withKeyboardNavigation: s },
                              b.createElement(N.a, { onClick: c, style: C.mask }),
                              b.createElement(N.a, { ref: e._receiveBodyRectHelperRef, style: C.bodyRectHelper }),
                              b.createElement(k.a, null, function (t) {
                                var a = t.windowWidth
                                return b.createElement(
                                  N.a,
                                  {
                                    accessibilityRole: 'menu',
                                    onKeyUp: e._handleEsc,
                                    ref: e._receiveContentRef,
                                    style: [a < x.a.theme.breakpoints.medium ? C.rootNarrow : C.rootWide, m],
                                  },
                                  p && 'slide' === r
                                    ? i
                                    : b.createElement(
                                        _.b,
                                        {
                                          animateMount: 'up' !== f,
                                          duration: n,
                                          onAnimateComplete: e._handleAnimateComplete,
                                          show: !0,
                                          type: r,
                                        },
                                        function (e) {
                                          var t = e.isAnimating
                                          return b.createElement(
                                            P.a,
                                            { id: 'Dropdown', minimizeReporting: t },
                                            function (e, t) {
                                              return b.createElement(N.a, o()({ ref: e() }, t({})), i)
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
        })(b.Component)
      O()(A, 'defaultProps', {
        preferredHorizontalOrientation: 'left',
        preferredVerticalOrientation: 'down',
        animateType: 'slide',
        animateInDuration: 'normal',
        withKeyboardNavigation: !0,
      })
    },
    hqDb: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        o = n.n(r),
        i = n('m3Bd'),
        a = n.n(i),
        c = n('VrFO'),
        s = n.n(c),
        u = n('Y9Ll'),
        l = n.n(u),
        d = n('1Pcy'),
        f = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        m = n('N+ot'),
        v = n.n(m),
        y = n('AuHH'),
        O = n.n(y),
        b = n('KEM+'),
        _ = n.n(b),
        g = (n('2G9S'), n('ERkP')),
        w = n('k49u'),
        E = (n('LW0h'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        I = n('kGix'),
        R = n('G6rE'),
        P = n('rxPX'),
        S = n('0KEI'),
        L = function (e, t) {
          return t.userIds
        },
        k = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!R.e.select(e, t)
          })
        },
        x = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var r = R.e.selectFetchStatus(e, n)
            return (t[n] = r === I.a.NONE ? I.a.LOADING : r), t
          }, {})
        },
        U = Object(P.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(E.a)(k, function (e) {
                return e
              }),
              fetchStatus: Object(E.a)(k, x, L, function (e, t, n) {
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
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: R.e.fetchManyIfNeeded,
            }
          }),
        H = n('v//M'),
        N = n('3XMw'),
        T = n.n(N),
        j = n('pQ3Z'),
        D = n.n(j),
        C = (n('z84I'), n('cFuS')),
        A = n('Re5t'),
        F = n('MWbm'),
        M = n('88ay'),
        B = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            r = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return g.createElement(
            F.a,
            null,
            r.map(function (e, r) {
              return n
                ? n(e)
                : g.createElement(M.b, {
                    decoration: M.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: C.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      B.defaultProps = { displayMode: A.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var W = B
      function K(e) {
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
            r = O()(e)
          if (t) {
            var o = O()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return v()(this, n)
        }
      }
      var Y = T.a.f5b426c2,
        z = { viewType: 'user_list' },
        X = U(
          (function (e) {
            h()(n, e)
            var t = K(n)
            function n() {
              var e
              s()(this, n)
              for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                _()(f()(e), 'state', { allUsersUnavailable: !1 }),
                _()(f()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    r =
                      (t.createLocalApiErrorHandler,
                      t.fetchStatus,
                      t.fetchUsersIfNeeded,
                      t.userIds,
                      a()(t, [
                        'availableUserIds',
                        'createLocalApiErrorHandler',
                        'fetchStatus',
                        'fetchUsersIfNeeded',
                        'userIds',
                      ]))
                  return g.createElement(W, o()({}, r, { userIds: n }))
                }),
                _()(f()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              l()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    D()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return g.createElement(H.a, {
                      accessibilityLabel: Y,
                      behavioralEventContext: z,
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
                        _()(e, w.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        _()(e, w.a.OtherUserSuspended, {
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
          })(g.Component),
        )
      t.a = X
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
        return g
      }),
        n.d(t, 'b', function () {
          return w
        }),
        n.d(t, 'a', function () {
          return E
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        i = (n('z84I'), n('JtPf'), n('7x/C'), n('/kEJ')),
        a = n('oEOe'),
        c = n('RgK2'),
        s = n.n(c),
        u = n('kGix'),
        l = n('Ssj5')
      function d(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var p = 'recommendations',
        h = 'rweb/recommendations/FETCH_REQUEST',
        m = 'rweb/recommendations/FETCH_SUCCESS',
        v = 'rweb/recommendations/FETCH_FAILURE',
        y = {},
        O = function (e) {
          var t = e.displayLocation,
            n = e.similarToUserId
          return t + (n ? '_'.concat(n) : '')
        }
      l.a.register(
        o()({}, p, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            t = arguments.length > 1 ? arguments[1] : void 0
          if (!t.meta) return e
          switch (t.type) {
            case h:
              var n = O(t.meta)
              return f(f({}, e), {}, o()({}, n, f(f({}, e[n]), {}, { fetchStatus: u.a.LOADING })))
            case v:
              var r = O(t.meta)
              return f(f({}, e), {}, o()({}, r, f(f({}, e[r]), {}, { fetchStatus: u.a.FAILED })))
            case m:
              var i = O(t.meta),
                a = t.payload && t.payload.entities ? t.payload.entities : { recommendations: s.a },
                c = t.payload && t.payload.result ? t.payload.result : _,
                l = c.map(function (e) {
                  return a.recommendations[e]
                })
              return f(f({}, e), {}, o()({}, i, f(f({}, e[i]), {}, { fetchStatus: u.a.LOADED, recommendations: l })))
            default:
              return e
          }
        }),
      )
      var b = [],
        _ = [],
        g = function (e, t) {
          var n = t.displayLocation,
            r = t.similarToUserId,
            o = e.recommendations[O({ displayLocation: n, similarToUserId: r })]
          return o && o.recommendations ? o.recommendations : b
        },
        w = function (e, t) {
          var n = t.displayLocation,
            r = t.similarToUserId,
            o = e.recommendations[O({ displayLocation: n, similarToUserId: r })]
          return o ? o.fetchStatus : u.a.NONE
        },
        E = function (e) {
          return function (t, n, r) {
            var o = n(),
              c = e.displayLocation,
              l = e.similarToUserId,
              d = g(o, { displayLocation: c, similarToUserId: l }),
              f = w(o, { displayLocation: c, similarToUserId: l }) === u.a.LOADED
            return d && f
              ? Promise.resolve(s.a)
              : t(
                  (function (e) {
                    return function (t, n, r) {
                      var o = r.api,
                        c = e.displayLocation,
                        s = e.itsInterests,
                        u = e.limit,
                        l = void 0 === u ? 30 : u,
                        d = e.similarToUserId
                      return Object(a.b)(t, {
                        request: o.Recommendations.fetch,
                        params: { display_location: c, itsInterests: s, limit: l, user_id: d },
                      })(
                        {
                          actionTypes: { REQUEST: h, SUCCESS: m, FAILURE: v },
                          context: 'FETCH_RECOMMENDATIONS',
                          meta: { displayLocation: c, similarToUserId: d },
                        },
                        function (e) {
                          if (e && e.entities) return [Object(i.c)(e.entities)]
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
    uo3S: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ERkP'),
        o = n('RhWx'),
        i = n.n(o),
        a = (n('z84I'), n('2G9S'), n('VAyw')),
        c = n('XOJV'),
        s = n('s1N3'),
        u = n('rxPX'),
        l = function (e) {
          var t, n
          return (
            (null === (t = e.entities) || void 0 === t || null === (n = t.user_mentions) || void 0 === n
              ? void 0
              : n.map(function (e) {
                  return e.id_str
                })) || []
          )
        },
        d = function (e, t) {
          return t.focalTweetId
        },
        f = Object(u.a)()
          .propsFromState(function () {
            return { tweetMap: c.a.selectAll, focalTweetId: d }
          })
          .adjustStateProps(function (e) {
            var t = e.focalTweetId,
              n = e.tweetMap,
              r = t && n[t]
            if (!r) return { participantIds: [] }
            var o,
              c = [r.user].concat(
                i()(l(r)),
                i()(
                  ((o = r),
                  a.a.mergeTaggedUsers((o.extended_entities && o.extended_entities.media) || []).map(function (e) {
                    return e.user_id
                  })),
                ),
              ),
              u = r.quoted_status && n[r.quoted_status]
            return u && (c.push(u.user), c.push.apply(c, i()(l(u)))), { participantIds: Object(s.a)(c) }
          })
          .withAnalytics({ component: 'in_this_conversation' }),
        p = (n('M+/F'), n('3XMw')),
        h = n.n(p),
        m = n('6vad'),
        v = n('hqDb'),
        y = n('MWbm'),
        O = h.a.j88f27d8,
        b = function (e) {
          var t = e.maxCount,
            n = e.participantIds
          return r.createElement(
            y.a,
            { accessibilityLabel: O, accessibilityRole: 'complementary' },
            r.createElement(m.b, { text: O }),
            r.createElement(v.a, { userIds: n.slice(0, t), withFinalItemBorder: !1, withItemBorder: !0 }),
          )
        }
      b.defaultProps = { maxCount: 3 }
      var _ = b,
        g = f(function (e) {
          return r.createElement(_, { participantIds: e.participantIds })
        })
      t.default = g
    },
  },
])
//# sourceMappingURL=WIPED
