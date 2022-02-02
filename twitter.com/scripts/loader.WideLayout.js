;(window.webpackJsonp = window.webpackJsonp || []).push([
  [185, 201],
  {
    '0af8': function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'roundToNearestDevicePixel', function () {
          return I
        }),
        n.d(e, 'default', function () {
          return k
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
        y = n.n(m),
        v = n('ERkP'),
        O = n.n(v),
        g = n('aITJ'),
        _ = (n('aWzz'), n('v6aA')),
        b = n('jHwr'),
        w = n('rHpw'),
        E = n('i4Oy'),
        R = n('MWbm')
      function P(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(t)
          if (e) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var I = function (t) {
          var e = t.cssPixels,
            n = t.dpr
          return Math.round(e * n) / n
        },
        k = (function (t) {
          l()(n, t)
          var e = P(n)
          function n(t, r) {
            var i
            return (
              o()(this, n),
              (i = e.call(this, t, r)),
              y()(s()(i), '_setContentRef', function (t) {
                i._contentNode = t
              }),
              y()(s()(i), '_setContainerRef', function (t) {
                i._containerNode = t
              }),
              y()(s()(i), '_handleProgrammaticScroll', function (t) {
                ;(i._prevScrollY = (i._prevScrollY || 0) + t),
                  i.setState({ contentOffset: Math.max(0, i.state.contentOffset + t) })
              }),
              y()(s()(i), '_handleLayout', function (t) {
                var e = t.nativeEvent.layout.height > i.state.contentHeight
                i._updatePositioning(e)
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
                  var t = this.context.viewport
                  this._removeProgrammaticScrollListener = t.addProgrammaticScrollListener(
                    this._handleProgrammaticScroll,
                  )
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var t = this.context.viewport
                  if (
                    (this._updatePositioning(),
                    (this._removeScrollListener = t.addScrollListener(this._scheduleUpdatePositioning)),
                    this._containerNode)
                  ) {
                    var e = this._containerNode.getBoundingClientRect(),
                      n = t.scrollY()
                    ;(this._prevScrollY = n), this.setState({ stickyOffset: n + e.top })
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
                  var t = this.state,
                    e = t.contentOffset,
                    n = t.position,
                    r = t.stickyThreshold,
                    o = t.stickyTop,
                    i = x[n],
                    a = window.devicePixelRatio || 1,
                    c = I({ cssPixels: r, dpr: a }),
                    s = I({ cssPixels: e, dpr: a }),
                    u = { top: o ? ''.concat(c, 'px') : null, bottom: o ? null : ''.concat(c, 'px') }
                  return O.a.createElement(
                    R.a,
                    { ref: this._setContainerRef, style: [x.container, { minHeight: this.state.contentHeight }] },
                    O.a.createElement(R.a, { style: { marginTop: ''.concat(s, 'px') } }),
                    O.a.createElement(
                      R.a,
                      { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, u, i] },
                      this.props.children,
                    ),
                  )
                },
              },
              {
                key: '_updatePositioning',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  if (this._contentNode && this._containerNode) {
                    var e = this.context.viewport.scrollY(),
                      n = e - this._prevScrollY
                    if (!(Math.abs(n) < 0.5) || t) {
                      var r = this.props.distanceFromBottom
                      this._prevScrollY = e
                      var o = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        i = !!this._containerNode && this._containerNode.getBoundingClientRect()
                      if (o && i) {
                        var a = E.a.get('window'),
                          c = a.height,
                          s = e + i.top,
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
                          if (m && g.b.isFirefox()) {
                            var y = r,
                              v = s
                            this._updateState({
                              position: 'fixed',
                              stickyOffset: s,
                              stickyTop: h,
                              stickyThreshold: h ? v : y,
                              contentOffset: u,
                              contentHeight: o.height,
                            })
                          } else {
                            var O = c - o.height - r,
                              _ = c - o.height - s
                            this._updateState({
                              position: 'sticky',
                              stickyTop: l,
                              stickyOffset: s,
                              stickyThreshold: l ? O : _,
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
                value: function (t) {
                  var e = this.state.stickyTop !== t.stickyTop,
                    n = this.state.stickyThreshold !== t.stickyThreshold,
                    r = Math.abs(this.state.contentOffset - t.contentOffset) > 0.5,
                    o = Math.abs(this.state.stickyOffset - t.stickyOffset) > 0.5,
                    i = this.state.position !== t.position,
                    a = this.state.contentHeight !== t.contentHeight
                  ;(e || n || r || o || i || a) && this.setState(t)
                },
              },
            ]),
            n
          )
        })(O.a.PureComponent)
      y()(k, 'contextType', _.a), y()(k, 'defaultProps', { distanceFromBottom: 10 })
      var x = w.a.create(function (t) {
        return {
          container: { height: '100%' },
          sticky: { position: 'sticky' },
          fixed: { position: 'fixed' },
          static: { position: 'static' },
        }
      })
    },
    LHcr: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'WhoToFollowContainer', function () {
          return Q
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
        y = n.n(m),
        v = (n('2G9S'), n('z84I'), n('M+/F'), n('ERkP')),
        O = n.n(v),
        g = n('Xs4Y'),
        _ = n('kGix'),
        b = n('v//M'),
        w = n('3XMw'),
        E = n.n(w),
        R = n('Rp9C'),
        P = n('rHpw'),
        I = n('MWbm'),
        k = n('lP98'),
        x = n('RqPI'),
        S = n('rxPX'),
        L = n('0KEI'),
        H = 'profile_accounts_sidebar',
        T = function (t, e) {
          return x.q(t)
        },
        j = function (t, e) {
          return e.userId
        },
        N = function (t, e) {
          var n = j(0, e),
            r = T(t)
          return k.c(t, { displayLocation: H, similarToUserId: n === r ? void 0 : n })
        },
        C = function (t, e) {
          var n = j(0, e),
            r = T(t)
          return k.b(t, { displayLocation: H, similarToUserId: n === r ? void 0 : n })
        },
        D = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: C, loggedInUserId: T, recommendations: N }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'WHO_TO_FOLLOW_CONTAINER',
              ),
              fetchRecommendationsIfNeeded: k.a,
            }
          })
          .withAnalytics({ component: 'suggest_who_to_follow' }),
        U = n('Re5t'),
        F = n('hqDb'),
        M = n('hxu0'),
        A = n('6vad'),
        B = n('rC8y'),
        W = E.a.a526aa66,
        K = E.a.ef62501f,
        Y = E.a.d228a9a0,
        z = Object(M.a)(function (t) {
          var e = t.isInSidebar,
            n = t.userId,
            r = t.userIds,
            o = t.withProfileHeaderText,
            i = r.length > 3,
            a = '/i/connect_people?user_id='.concat(n)
          return O.a.createElement(
            I.a,
            { accessibilityLabel: W, accessibilityRole: 'complementary' },
            O.a.createElement(A.b, { text: o ? K : W }),
            O.a.createElement(F.a, { displayMode: U.a.UserCompact, userIds: r.slice(0, 3), withItemBorder: !0 }),
            i && O.a.createElement(B.a, { link: a, text: Y, withBottomRadius: !0, withDarkerInteractiveBackground: e }),
          )
        })
      function X(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function J(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? X(Object(n), !0).forEach(function (e) {
                y()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function q(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(t)
          if (e) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var V = E.a.fd6473fa,
        Z = { element: 'user', action: 'results' },
        G = { viewType: 'who_to_follow' },
        Q = (function (t) {
          l()(n, t)
          var e = q(n)
          function n() {
            var t
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (t = e.call.apply(e, [this].concat(i))),
              y()(s()(t), '_renderContent', function () {
                var e = t.props,
                  n = e.recommendations,
                  r = e.userId,
                  o = e.withProfileHeaderText,
                  i =
                    n &&
                    n.map(function (t) {
                      return t.user
                    })
                return O.a.createElement(z, { userId: r, userIds: i, withProfileHeaderText: o })
              }),
              y()(s()(t), '_handleImpression', function (e) {
                var n = t.props.analytics,
                  r =
                    e &&
                    e.slice(0, 3).map(function (t) {
                      return J(J({}, R.a.forUser(t.user)), {}, { suggestion_details: { source_data: t.token } })
                    })
                n.scribe(J(J({}, Z), {}, { data: { items: r } }))
              }),
              t
            )
          }
          return (
            a()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var t = this.props.recommendations
                  this._fetchRecommendations(this.props), t && t.length > 0 && this._handleImpression(t)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (t) {
                  var e = this.props.recommendations
                  this.props.userId !== t.userId && this._fetchRecommendations(this.props),
                    e !== t.recommendations && e && e.length > 0 && this._handleImpression(e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var t = this.props,
                    e = t.fetchStatus,
                    n = t.style
                  return e === _.a.FAILED || this._hasEmptySuggestionList()
                    ? null
                    : O.a.createElement(
                        I.a,
                        { style: [$.root, n] },
                        O.a.createElement(b.a, {
                          accessibilityLabel: V,
                          behavioralEventContext: G,
                          fetchStatus: e,
                          render: this._renderContent,
                        }),
                      )
                },
              },
              {
                key: '_fetchRecommendations',
                value: function (t) {
                  var e = t.createLocalApiErrorHandler,
                    n = t.fetchRecommendationsIfNeeded,
                    r = t.loggedInUserId,
                    o = t.userId
                  n({ limit: 4, displayLocation: H, similarToUserId: o !== r ? o : void 0 }).catch(e(g.a))
                },
              },
              {
                key: '_hasEmptySuggestionList',
                value: function () {
                  var t = this.props,
                    e = t.fetchStatus,
                    n = t.recommendations
                  return e === _.a.LOADED && 0 === n.length
                },
              },
            ]),
            n
          )
        })(O.a.PureComponent),
        $ = P.a.create(function (t) {
          return { root: { minHeight: '15rem' } }
        }),
        tt = D(Q)
      e.default = tt
    },
    Xs4Y: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return c
      })
      var r = n('KEM+'),
        o = n.n(r),
        i = n('k49u'),
        a = n('fs1G'),
        c = o()({}, i.a.ResourceNotFound, { customAction: a.a })
    },
    XygZ: function (t, e, n) {
      'use strict'
      var r = n('ax0f'),
        o = n('gIHd')
      r(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (t) {
            return o(this, 'a', 'name', t)
          },
        },
      )
    },
    fyKl: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'default', function () {
          return M
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
        y = n.n(m),
        v = n('KEM+'),
        O = n.n(v),
        g = (n('uFXj'), n('yH/f'), n('XygZ'), n('ERkP')),
        _ = n.n(g),
        b = n('zfvc'),
        w = n('jHwr'),
        E = n('VY6S'),
        R = n('w9LO'),
        P = n('//dC'),
        I = n('lHOd'),
        k = n('Oe3h'),
        x = n('0FVZ'),
        S = n('7N4s'),
        L = n('cHvH'),
        H = n('rHpw'),
        T = n('i4Oy'),
        j = n('shC7'),
        N = n('MWbm')
      function C(t) {
        var e = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            r = y()(t)
          if (e) {
            var o = y()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      function D(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function U(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? D(Object(n), !0).forEach(function (e) {
                O()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      var F = H.a.create(function (t) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(t.spaces.space64, ' * 6)') },
            anchor: H.a.absoluteFillObject,
            mask: U(U({}, H.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: U(U({}, H.a.absoluteFillObject), {}, { bottom: void 0 }),
            content: {
              borderRadius: t.borderRadii.small,
              position: 'absolute',
              overflow: 'hidden',
              backgroundColor: t.colors.navigationBackground,
              boxShadow: t.boxShadows.medium,
            },
            contentInitialRender: { position: 'fixed', opacity: 0 },
            contentFixed: { position: 'fixed', overflowY: 'auto', overscrollBehavior: 'contain' },
          }
        }),
        M = (function (t) {
          f()(n, t)
          var e = C(n)
          function n(t, r) {
            var o
            return (
              a()(this, n),
              (o = e.call(this, t, r)),
              O()(l()(o), '_handleAnimateComplete', function () {
                var t = o.props.onAnimateComplete
                t && t()
              }),
              O()(l()(o), '_handleEsc', function (t) {
                var e = o.props.onDismiss,
                  n = t.altKey,
                  r = t.ctrlKey,
                  i = t.key,
                  a = t.metaKey
                !(n || r || a) && 'Escape' === i && e()
              }),
              O()(l()(o), '_receiveBodyRectHelperRef', function (t) {
                t && o._bodyRectHelperNode !== t && ((o._bodyRectHelperNode = t), o._scheduleUpdate())
              }),
              O()(l()(o), '_receiveAnchorRef', function (t) {
                t && o._anchorNode !== t && ((o._anchorNode = t), o._scheduleUpdate())
              }),
              O()(l()(o), '_receiveContentRef', function (t) {
                t && o._contentNode !== t && ((o._contentNode = t), o._scheduleUpdate())
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
                  var t = o._contentNode.scrollHeight,
                    e = o._contentNode.scrollWidth,
                    n = o._bodyRectHelperNode.getBoundingClientRect(),
                    r = n.left,
                    i = n.top,
                    a = n.width,
                    c = T.a.get('window'),
                    s = c.height,
                    u = c.width,
                    l = { left: 0, top: 0, height: 0, width: 0 }
                  o.props.position
                    ? (l = U(U({}, l), o.props.position))
                    : o._anchorNode &&
                      o._anchorNode instanceof window.HTMLElement &&
                      (l = o._anchorNode.getBoundingClientRect())
                  var d = l,
                    f = d.height,
                    p = d.left,
                    h = d.top,
                    m = d.width,
                    y = u - a,
                    v = p - r,
                    O = h - i,
                    g = p + m >= e,
                    _ = h + f >= t,
                    b = u - p >= e,
                    w = s - h >= t,
                    E = o.props.preferredVerticalOrientation,
                    R = (function (t) {
                      return j.a.getConstants().isRTL ? ('left' === t ? 'right' : 'left') : t
                    })(o.props.preferredHorizontalOrientation),
                    P =
                      o.state.verticalOrientation ||
                      (function (t) {
                        var e = t.canOrientDown,
                          n = t.canOrientUp,
                          r = t.verticalPreference
                        return (n && e) || (!n && !e) ? r : n ? 'up' : 'down'
                      })({ verticalPreference: E, canOrientUp: _, canOrientDown: w }),
                    I =
                      o.state.horizontalOrientation ||
                      (function (t) {
                        var e = t.canOrientLeft,
                          n = t.canOrientRight,
                          r = t.horizontalPreference
                        return !e || ('left' !== r && n) ? 'right' : 'left'
                      })({ horizontalPreference: R, canOrientLeft: g, canOrientRight: b }),
                    k = o.props.isFixed ? p : v,
                    x = o.props.isFixed ? h : O,
                    S = 'up' === P ? x + f - t : x,
                    L = 'left' === I ? u - k - m - y : u - k - e - y
                  o.setState({ top: Math.max(S, 0), right: L, verticalOrientation: P, horizontalOrientation: I })
                }
              }),
              (o.state = Object.freeze({})),
              (o._scheduleUpdate = Object(w.a)(o._updatePosition, window.requestAnimationFrame)),
              (o._scheduleDebouncedUpdate = Object(E.a)(o._scheduleUpdate, 250)),
              o
            )
          }
          return (
            s()(n, [
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
                  var t = this,
                    e = this.props,
                    n = e.animateInDuration,
                    r = e.animateType,
                    i = e.children,
                    a = e.isFixed,
                    c = e.onDismiss,
                    s = e.withKeyboardNavigation,
                    u = this.state,
                    l = u.right,
                    d = u.top,
                    f = u.verticalOrientation,
                    p = void 0 === d,
                    h = 'calc(100vh - '.concat(d || 0, 'px)'),
                    m = [
                      F.content,
                      p && F.contentInitialRender,
                      a && [F.contentFixed, { maxHeight: h }],
                      {
                        top: d,
                        right: j.a.getConstants().isRTL ? void 0 : l,
                        left: j.a.getConstants().isRTL ? l : void 0,
                      },
                    ]
                  return _.a.createElement(
                    N.a,
                    { ref: this._receiveAnchorRef, style: F.anchor },
                    _.a.createElement(
                      x.a.Dropdown,
                      null,
                      _.a.createElement(I.a.Consumer, null, function (e) {
                        return _.a.createElement(S.b.Consumer, null, function (a) {
                          var u = a.isModal
                          return _.a.createElement(
                            P.a,
                            { history: e, isModal: u, onDismiss: c },
                            _.a.createElement(
                              R.a,
                              { withKeyboardNavigation: s },
                              _.a.createElement(N.a, { onClick: c, style: F.mask }),
                              _.a.createElement(N.a, { ref: t._receiveBodyRectHelperRef, style: F.bodyRectHelper }),
                              _.a.createElement(L.a, null, function (e) {
                                var a = e.windowWidth
                                return _.a.createElement(
                                  N.a,
                                  {
                                    accessibilityRole: 'menu',
                                    onKeyUp: t._handleEsc,
                                    ref: t._receiveContentRef,
                                    style: [a < H.a.theme.breakpoints.medium ? F.rootNarrow : F.rootWide, m],
                                  },
                                  p && 'slide' === r
                                    ? i
                                    : _.a.createElement(
                                        b.b,
                                        {
                                          animateMount: 'up' !== f,
                                          duration: n,
                                          onAnimateComplete: t._handleAnimateComplete,
                                          show: !0,
                                          type: r,
                                        },
                                        function (t) {
                                          var e = t.isAnimating
                                          return _.a.createElement(
                                            k.a,
                                            { id: 'Dropdown', minimizeReporting: e },
                                            function (t, e) {
                                              return _.a.createElement(N.a, o()({ ref: t() }, e({})), i)
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
        })(_.a.Component)
      O()(M, 'defaultProps', {
        preferredHorizontalOrientation: 'left',
        preferredVerticalOrientation: 'down',
        animateType: 'slide',
        animateInDuration: 'normal',
        withKeyboardNavigation: !0,
      })
    },
    jHwr: function (t, e, n) {
      'use strict'
      e.a = function (t, e) {
        var n = null,
          r = function () {
            ;(n = null), t()
          }
        return function () {
          return n || (n = e(r)), n
        }
      }
    },
    lP98: function (t, e, n) {
      'use strict'
      n.d(e, 'c', function () {
        return b
      }),
        n.d(e, 'b', function () {
          return w
        }),
        n.d(e, 'a', function () {
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
      function d(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t)
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? d(Object(n), !0).forEach(function (e) {
                o()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      var p = 'recommendations',
        h = 'rweb/recommendations/FETCH_REQUEST',
        m = 'rweb/recommendations/FETCH_SUCCESS',
        y = 'rweb/recommendations/FETCH_FAILURE',
        v = {},
        O = function (t) {
          var e = t.displayLocation,
            n = t.similarToUserId
          return e + (n ? '_'.concat(n) : '')
        }
      l.a.register(
        o()({}, p, function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            e = arguments.length > 1 ? arguments[1] : void 0
          if (!e.meta) return t
          switch (e.type) {
            case h:
              var n = O(e.meta)
              return f(f({}, t), {}, o()({}, n, f(f({}, t[n]), {}, { fetchStatus: u.a.LOADING })))
            case y:
              var r = O(e.meta)
              return f(f({}, t), {}, o()({}, r, f(f({}, t[r]), {}, { fetchStatus: u.a.FAILED })))
            case m:
              var i = O(e.meta),
                a = e.payload && e.payload.entities ? e.payload.entities : { recommendations: s.a },
                c = e.payload && e.payload.result ? e.payload.result : _,
                l = c.map(function (t) {
                  return a.recommendations[t]
                })
              return f(f({}, t), {}, o()({}, i, f(f({}, t[i]), {}, { fetchStatus: u.a.LOADED, recommendations: l })))
            default:
              return t
          }
        }),
      )
      var g = [],
        _ = [],
        b = function (t, e) {
          var n = e.displayLocation,
            r = e.similarToUserId,
            o = t.recommendations[O({ displayLocation: n, similarToUserId: r })]
          return o && o.recommendations ? o.recommendations : g
        },
        w = function (t, e) {
          var n = e.displayLocation,
            r = e.similarToUserId,
            o = t.recommendations[O({ displayLocation: n, similarToUserId: r })]
          return o ? o.fetchStatus : u.a.NONE
        },
        E = function (t) {
          return function (e, n, r) {
            var o = n(),
              c = t.displayLocation,
              l = t.similarToUserId,
              d = b(o, { displayLocation: c, similarToUserId: l }),
              f = w(o, { displayLocation: c, similarToUserId: l }) === u.a.LOADED
            return d && f
              ? Promise.resolve(s.a)
              : e(
                  (function (t) {
                    return function (e, n, r) {
                      var o = r.api,
                        c = t.displayLocation,
                        s = t.itsInterests,
                        u = t.limit,
                        l = void 0 === u ? 30 : u,
                        d = t.similarToUserId
                      return Object(a.b)(e, {
                        request: o.Recommendations.fetch,
                        params: { display_location: c, itsInterests: s, limit: l, user_id: d },
                      })(
                        {
                          actionTypes: { REQUEST: h, SUCCESS: m, FAILURE: y },
                          context: 'FETCH_RECOMMENDATIONS',
                          meta: { displayLocation: c, similarToUserId: d },
                        },
                        function (t) {
                          if (t && t.entities) return [Object(i.c)(t.entities)]
                        },
                      )
                    }
                  })(t),
                )
          }
        }
    },
    sAnO: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('fyKl')
      e.default = r.default
    },
    uo3S: function (t, e, n) {
      'use strict'
      n.r(e)
      var r = n('ERkP'),
        o = n.n(r),
        i = n('RhWx'),
        a = n.n(i),
        c = (n('z84I'), n('2G9S'), n('VAyw')),
        s = n('XOJV'),
        u = n('s1N3'),
        l = n('rxPX'),
        d = function (t) {
          var e, n
          return (
            (null === (e = t.entities) || void 0 === e || null === (n = e.user_mentions) || void 0 === n
              ? void 0
              : n.map(function (t) {
                  return t.id_str
                })) || []
          )
        },
        f = function (t, e) {
          return e.focalTweetId
        },
        p = Object(l.a)()
          .propsFromState(function () {
            return { tweetMap: s.a.selectAll, focalTweetId: f }
          })
          .adjustStateProps(function (t) {
            var e = t.focalTweetId,
              n = t.tweetMap,
              r = e && n[e]
            if (!r) return { participantIds: [] }
            var o,
              i = [r.user].concat(
                a()(d(r)),
                a()(
                  ((o = r),
                  c.a.mergeTaggedUsers((o.extended_entities && o.extended_entities.media) || []).map(function (t) {
                    return t.user_id
                  })),
                ),
              ),
              s = r.quoted_status && n[r.quoted_status]
            return s && (i.push(s.user), i.push.apply(i, a()(d(s)))), { participantIds: Object(u.a)(i) }
          })
          .withAnalytics({ component: 'in_this_conversation' }),
        h = (n('M+/F'), n('3XMw')),
        m = n.n(h),
        y = n('6vad'),
        v = n('hqDb'),
        O = n('MWbm'),
        g = m.a.j88f27d8,
        _ = function (t) {
          var e = t.maxCount,
            n = t.participantIds
          return o.a.createElement(
            O.a,
            { accessibilityLabel: g, accessibilityRole: 'complementary' },
            o.a.createElement(y.b, { text: g }),
            o.a.createElement(v.a, { userIds: n.slice(0, e), withFinalItemBorder: !1, withItemBorder: !0 }),
          )
        }
      _.defaultProps = { maxCount: 3 }
      var b = _,
        w = p(function (t) {
          return o.a.createElement(b, { participantIds: t.participantIds })
        })
      e.default = w
    },
  },
])
//# sourceMappingURL=WIPED
