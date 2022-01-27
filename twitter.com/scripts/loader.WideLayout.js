;(window.webpackJsonp = window.webpackJsonp || []).push([
  [182, 198],
  {
    '0af8': function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'roundToNearestDevicePixel', function () {
          return P
        }),
        n.d(e, 'default', function () {
          return I
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
        O = n('aITJ'),
        g = (n('aWzz'), n('v6aA')),
        _ = n('jHwr'),
        b = n('rHpw'),
        w = n('i4Oy'),
        E = n('MWbm')
      function R(t) {
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
      var P = function (t) {
          var e = t.cssPixels,
            n = t.dpr
          return Math.round(e * n) / n
        },
        I = (function (t) {
          l()(n, t)
          var e = R(n)
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
                    i = k[n],
                    a = window.devicePixelRatio || 1,
                    c = P({ cssPixels: r, dpr: a }),
                    s = P({ cssPixels: e, dpr: a }),
                    u = { top: o ? ''.concat(c, 'px') : null, bottom: o ? null : ''.concat(c, 'px') }
                  return v.createElement(
                    E.a,
                    { ref: this._setContainerRef, style: [k.container, { minHeight: this.state.contentHeight }] },
                    v.createElement(E.a, { style: { marginTop: ''.concat(s, 'px') } }),
                    v.createElement(
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
                        var a = w.a.get('window'),
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
                          if (m && O.b.isFirefox()) {
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
                            var g = c - o.height - r,
                              _ = c - o.height - s
                            this._updateState({
                              position: 'sticky',
                              stickyTop: l,
                              stickyOffset: s,
                              stickyThreshold: l ? g : _,
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
        })(v.PureComponent)
      y()(I, 'contextType', g.a), y()(I, 'defaultProps', { distanceFromBottom: 10 })
      var k = b.a.create(function (t) {
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
          return G
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
        O = n('Xs4Y'),
        g = n('kGix'),
        _ = n('v//M'),
        b = n('3XMw'),
        w = n.n(b),
        E = n('Rp9C'),
        R = n('rHpw'),
        P = n('MWbm'),
        I = n('lP98'),
        k = n('RqPI'),
        x = n('rxPX'),
        S = n('0KEI'),
        L = 'profile_accounts_sidebar',
        H = function (t, e) {
          return k.q(t)
        },
        T = function (t, e) {
          return e.userId
        },
        j = function (t, e) {
          var n = T(0, e),
            r = H(t)
          return I.c(t, { displayLocation: L, similarToUserId: n === r ? void 0 : n })
        },
        N = function (t, e) {
          var n = T(0, e),
            r = H(t)
          return I.b(t, { displayLocation: L, similarToUserId: n === r ? void 0 : n })
        },
        C = Object(x.a)()
          .propsFromState(function () {
            return { fetchStatus: N, loggedInUserId: H, recommendations: j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'WHO_TO_FOLLOW_CONTAINER',
              ),
              fetchRecommendationsIfNeeded: I.a,
            }
          })
          .withAnalytics({ component: 'suggest_who_to_follow' }),
        D = n('Re5t'),
        U = n('hqDb'),
        F = n('hxu0'),
        M = n('6vad'),
        A = n('rC8y'),
        B = w.a.a526aa66,
        W = w.a.ef62501f,
        K = w.a.d228a9a0,
        Y = Object(F.a)(function (t) {
          var e = t.isInSidebar,
            n = t.userId,
            r = t.userIds,
            o = t.withProfileHeaderText,
            i = r.length > 3,
            a = '/i/connect_people?user_id='.concat(n)
          return v.createElement(
            P.a,
            { accessibilityLabel: B, accessibilityRole: 'complementary' },
            v.createElement(M.b, { text: o ? W : B }),
            v.createElement(U.a, { displayMode: D.a.UserCompact, userIds: r.slice(0, 3), withItemBorder: !0 }),
            i && v.createElement(A.a, { link: a, text: K, withBottomRadius: !0, withDarkerInteractiveBackground: e }),
          )
        })
      function z(t, e) {
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
      function X(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? z(Object(n), !0).forEach(function (e) {
                y()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function J(t) {
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
      var q = w.a.fd6473fa,
        V = { element: 'user', action: 'results' },
        Z = { viewType: 'who_to_follow' },
        G = (function (t) {
          l()(n, t)
          var e = J(n)
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
                return v.createElement(Y, { userId: r, userIds: i, withProfileHeaderText: o })
              }),
              y()(s()(t), '_handleImpression', function (e) {
                var n = t.props.analytics,
                  r =
                    e &&
                    e.slice(0, 3).map(function (t) {
                      return X(X({}, E.a.forUser(t.user)), {}, { suggestion_details: { source_data: t.token } })
                    })
                n.scribe(X(X({}, V), {}, { data: { items: r } }))
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
                  return e === g.a.FAILED || this._hasEmptySuggestionList()
                    ? null
                    : v.createElement(
                        P.a,
                        { style: [Q.root, n] },
                        v.createElement(_.a, {
                          accessibilityLabel: q,
                          behavioralEventContext: Z,
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
                  n({ limit: 4, displayLocation: L, similarToUserId: o !== r ? o : void 0 }).catch(e(O.a))
                },
              },
              {
                key: '_hasEmptySuggestionList',
                value: function () {
                  var t = this.props,
                    e = t.fetchStatus,
                    n = t.recommendations
                  return e === g.a.LOADED && 0 === n.length
                },
              },
            ]),
            n
          )
        })(v.PureComponent),
        Q = R.a.create(function (t) {
          return { root: { minHeight: '15rem' } }
        }),
        $ = C(G)
      e.default = $
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
          return F
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
        _ = n('zfvc'),
        b = n('jHwr'),
        w = n('VY6S'),
        E = n('w9LO'),
        R = n('//dC'),
        P = n('lHOd'),
        I = n('Oe3h'),
        k = n('0FVZ'),
        x = n('7N4s'),
        S = n('cHvH'),
        L = n('rHpw'),
        H = n('i4Oy'),
        T = n('shC7'),
        j = n('MWbm')
      function N(t) {
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
      function C(t, e) {
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
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? C(Object(n), !0).forEach(function (e) {
                O()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      var U = L.a.create(function (t) {
          return {
            rootNarrow: { maxWidth: '75%' },
            rootWide: { maxWidth: 'calc('.concat(t.spaces.space64, ' * 6)') },
            anchor: L.a.absoluteFillObject,
            mask: D(D({}, L.a.absoluteFillObject), {}, { position: 'fixed' }),
            bodyRectHelper: D(D({}, L.a.absoluteFillObject), {}, { bottom: void 0 }),
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
        F = (function (t) {
          f()(n, t)
          var e = N(n)
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
                    c = H.a.get('window'),
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
                    y = u - a,
                    v = p - r,
                    O = h - i,
                    g = p + m >= e,
                    _ = h + f >= t,
                    b = u - p >= e,
                    w = s - h >= t,
                    E = o.props.preferredVerticalOrientation,
                    R = (function (t) {
                      return T.a.getConstants().isRTL ? ('left' === t ? 'right' : 'left') : t
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
              (o._scheduleUpdate = Object(b.a)(o._updatePosition, window.requestAnimationFrame)),
              (o._scheduleDebouncedUpdate = Object(w.a)(o._scheduleUpdate, 250)),
              o
            )
          }
          return (
            s()(n, [
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
                      U.content,
                      p && U.contentInitialRender,
                      a && [U.contentFixed, { maxHeight: h }],
                      {
                        top: d,
                        right: T.a.getConstants().isRTL ? void 0 : l,
                        left: T.a.getConstants().isRTL ? l : void 0,
                      },
                    ]
                  return g.createElement(
                    j.a,
                    { ref: this._receiveAnchorRef, style: U.anchor },
                    g.createElement(
                      k.a.Dropdown,
                      null,
                      g.createElement(P.a.Consumer, null, function (e) {
                        return g.createElement(x.b.Consumer, null, function (a) {
                          var u = a.isModal
                          return g.createElement(
                            R.a,
                            { history: e, isModal: u, onDismiss: c },
                            g.createElement(
                              E.a,
                              { withKeyboardNavigation: s },
                              g.createElement(j.a, { onClick: c, style: U.mask }),
                              g.createElement(j.a, { ref: t._receiveBodyRectHelperRef, style: U.bodyRectHelper }),
                              g.createElement(S.a, null, function (e) {
                                var a = e.windowWidth
                                return g.createElement(
                                  j.a,
                                  {
                                    accessibilityRole: 'menu',
                                    onKeyUp: t._handleEsc,
                                    ref: t._receiveContentRef,
                                    style: [a < L.a.theme.breakpoints.medium ? U.rootNarrow : U.rootWide, m],
                                  },
                                  p && 'slide' === r
                                    ? i
                                    : g.createElement(
                                        _.b,
                                        {
                                          animateMount: 'up' !== f,
                                          duration: n,
                                          onAnimateComplete: t._handleAnimateComplete,
                                          show: !0,
                                          type: r,
                                        },
                                        function (t) {
                                          var e = t.isAnimating
                                          return g.createElement(
                                            I.a,
                                            { id: 'Dropdown', minimizeReporting: e },
                                            function (t, e) {
                                              return g.createElement(j.a, o()({ ref: t() }, e({})), i)
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
        })(g.Component)
      O()(F, 'defaultProps', {
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
        o = n('RhWx'),
        i = n.n(o),
        a = (n('z84I'), n('2G9S'), n('VAyw')),
        c = n('XOJV'),
        s = n('s1N3'),
        u = n('rxPX'),
        l = function (t) {
          var e, n
          return (
            (null === (e = t.entities) || void 0 === e || null === (n = e.user_mentions) || void 0 === n
              ? void 0
              : n.map(function (t) {
                  return t.id_str
                })) || []
          )
        },
        d = function (t, e) {
          return e.focalTweetId
        },
        f = Object(u.a)()
          .propsFromState(function () {
            return { tweetMap: c.a.selectAll, focalTweetId: d }
          })
          .adjustStateProps(function (t) {
            var e = t.focalTweetId,
              n = t.tweetMap,
              r = e && n[e]
            if (!r) return { participantIds: [] }
            var o,
              c = [r.user].concat(
                i()(l(r)),
                i()(
                  ((o = r),
                  a.a.mergeTaggedUsers((o.extended_entities && o.extended_entities.media) || []).map(function (t) {
                    return t.user_id
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
        y = n('hqDb'),
        v = n('MWbm'),
        O = h.a.j88f27d8,
        g = function (t) {
          var e = t.maxCount,
            n = t.participantIds
          return r.createElement(
            v.a,
            { accessibilityLabel: O, accessibilityRole: 'complementary' },
            r.createElement(m.b, { text: O }),
            r.createElement(y.a, { userIds: n.slice(0, e), withFinalItemBorder: !1, withItemBorder: !0 }),
          )
        }
      g.defaultProps = { maxCount: 3 }
      var _ = g,
        b = f(function (t) {
          return r.createElement(_, { participantIds: t.participantIds })
        })
      e.default = b
    },
  },
])
//# sourceMappingURL=WIPED
