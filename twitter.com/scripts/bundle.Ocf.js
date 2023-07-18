function _typeof(obj) {
  '@babel/helpers - typeof'
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj
          }
        : function (obj) {
            return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj
          }),
    _typeof(obj)
  )
}
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  ['bundle.Ocf', 'icons/IconArrowDown-js', 'icons/IconMinus-js'],
  {
    849364: function _(e, t, n) {
      'use strict'
      n.d(t, {
        Z: function Z() {
          return s
        },
      })
      n(438695), n(358188), n(201939)
      var a = n(202784),
        r = n(325686),
        o = n(765526),
        i = { threshold: 0.01 }
      var s = function s(e) {
        var t = e.children,
          n = e.onImpression,
          s = e.style,
          l = a.useRef(null),
          c = function c(e) {
            e.forEach(function (e) {
              e.isIntersecting && n()
            })
          }
        return (
          (0, o.q)(function () {
            if ('IntersectionObserver' in window) {
              var e = new IntersectionObserver(c, i),
                t = l.current
              null != t && e.observe(t)
              return function () {
                var t = l.current
                null != t && e.unobserve(t), e.disconnect()
              }
            }
          }),
          a.createElement(r.Z, { ref: l, style: s }, t)
        )
      }
    },
    867026: function _(e, t, n) {
      'use strict'
      n.d(t, {
        Z: function Z() {
          return l
        },
      })
      var a = n(202784),
        r = n(44542),
        o = n(473228),
        i = n.n(o)().b2311b70
      function s() {
        return a.createElement(r.Z, { onRetry: null, title: i })
      }
      var l = a.memo(s)
    },
    995779: function _(e, t, n) {
      'use strict'
      n.d(t, {
        W: function W() {
          return r
        },
        g: function g() {
          return a
        },
      })
      n(22144), n(571372), n(372147)
      var a = Object.freeze({
        AppealTweetWarning: 'appealtweet',
        LimitedDiscoveryAppealTweet: 'limiteddiscoveryappealtweet',
        ProfileOnlyDiscoveryAppealTweet: 'profileonlydiscoveryappealtweet',
        DMConversation: 'reportdmconversation',
        DMMessage: 'reportdmconversation',
        HideCommunityTweet: 'hidetweet',
        Moment: 'reportmoment',
        RemoveCommunityMember: 'removecommunitymember',
        Tweet: 'reporttweet',
        List: 'reportlist',
        User: 'reportprofile',
        Space: 'reportspace',
        AppealSuspension: 'appealsuspension',
      })
      function r(e) {
        switch (e) {
          case 'appealtweet':
          case 'limiteddiscoveryappealtweet':
          case 'profileonlydiscoveryappealtweet':
          case 'reportdmconversation':
          case 'hidetweet':
          case 'reportmoment':
          case 'removecommunitymember':
          case 'reporttweet':
          case 'reportlist':
          case 'reportprofile':
          case 'reportspace':
          case 'appealsuspension':
            return e
          default:
            throw new Error('unexpected source '.concat(e))
        }
      }
    },
    7730: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = n(709249),
        r = n(887371),
        o = n(545754),
        i = n(486906),
        s =
          (n(818178),
          n(136728),
          (function (e) {
            ;(0, o.Z)(n, e)
            var t = (0, i.Z)(n)
            function n() {
              return (0, a.Z)(this, n), t.apply(this, arguments)
            }
            return (
              (0, r.Z)(n, [
                {
                  key: 'componentDidMount',
                  value: function value() {
                    var e = this.props.location.query,
                      t = e.code,
                      n = e.error,
                      a = e.scope,
                      r = e.state,
                      o = {
                        callback_url: 'https://'.concat(window.location.hostname).concat(window.location.pathname),
                        code: t,
                        error: n,
                        scope: a,
                        state: r,
                      },
                      i = window.opener
                    i
                      ? (i.postMessage(o, 'https://'.concat(window.location.hostname)), window.close(), i.focus())
                      : this.props.history.push('/')
                  },
                },
                {
                  key: 'render',
                  value: function value() {
                    return null
                  },
                },
              ]),
              n
            )
          })(n(202784).Component))
    },
    852235: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = n(807896),
        r = n(202784),
        o = n(172250)
      var i = (0, n(917943).YW)({
          task: function task(e) {
            return e.BounceOcfFlow.task
          },
        }),
        s = r.memo(function (e) {
          return r.createElement(o.Z, (0, a.Z)({}, e, { ocfModule: i }))
        })
    },
    547065: function _(e, t, n) {
      'use strict'
      n.d(t, {
        m: function m() {
          return a
        },
      })
      var a = n(202784).createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
    819480: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function _default() {
            return h
          },
        })
      var a = n(807896),
        r = n(202784),
        o = n(473228),
        i = n.n(o),
        s = n(172250),
        l = n(21100),
        c = n(896958),
        u = n(917943),
        d = i().g2b8acd4,
        p = i().jd7ca8ee
      var h = function h(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(c.Z, { title: d }),
          r.createElement(l.Z, { description: p }),
          r.createElement(s.Z, (0, a.Z)({}, e, { flowName: 'login', ocfModule: u.qE })),
        )
      }
    },
    386410: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = n(807896),
        r = n(202784),
        o = n(172250),
        i = n(917943)
      var s = function s(e) {
        return r.createElement(o.Z, (0, a.Z)({}, e, { ocfModule: i.qE }))
      }
    },
    615408: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = n(807896),
        r = n(202784),
        o = n(172250),
        i = n(917943)
      var s = function s(e) {
        return r.createElement(o.Z, (0, a.Z)({}, e, { flowName: 'convert_to_professional', ocfModule: i.qE }))
      }
    },
    631982: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function _default() {
            return s
          },
        })
      var a = n(807896),
        r = n(202784),
        o = n(172250),
        i = n(917943)
      var s = function s(e) {
        return r.createElement(o.Z, (0, a.Z)({}, e, { flowName: 'make_more_connections', ocfModule: i.qE }))
      }
    },
    927228: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function _default() {
            return m
          },
        })
      var a = n(807896),
        r = (n(477950), n(385940), n(606710), n(202784)),
        o = n(172250),
        i = n(472599),
        s = n(397871),
        l = n(995779)
      var c = (0, n(917943).YW)({
        task: function task(e) {
          return e.ReportFlow.task
        },
      })
      var u = n(759824),
        d = function d(e, t) {
          return (0, s.B)(e[t])
        },
        p = function p(e, t) {
          switch (d(e, t)) {
            case '1':
            case 'true':
              return !0
            default:
              return !1
          }
        },
        h = function h(e) {
          var t = (0, l.W)(d(e, 'source') || '')
          return {
            client_app_id: d(e, 'client_app_id'),
            client_location: d(e, 'client_location'),
            client_referer: d(e, 'client_referer'),
            community_id: d(e, 'community_id'),
            conversation_section: d(e, 'conversation_section'),
            impression_id: d(e, 'impression_id'),
            is_media: p(e, 'is_media'),
            is_promoted: p(e, 'is_promoted'),
            report_flow_id: d(e, 'report_flow_id'),
            report_referrer: d(e, 'report_referrer'),
            reported_broadcast_id: d(e, 'reported_broadcast_id'),
            reported_direct_message_conversation_id: d(e, 'reported_direct_message_conversation_id'),
            reported_direct_message_id: d(e, 'reported_direct_message_id'),
            reported_list_id: d(e, 'reported_list_id'),
            reported_moment_id: d(e, 'reported_moment_id'),
            reported_tweet_id: d(e, 'reported_tweet_id'),
            reported_user_id: d(e, 'reported_user_id'),
            source: t,
          }
        }
      function m(e) {
        var t,
          n = e.history,
          s = e.location,
          l = s.query,
          d = s.state
        if (
          !(
            !(null == l || !l.input_flow_data) ||
            (null != d && null !== (t = d.input) && void 0 !== t && t.requested_variant)
          )
        )
          try {
            return n.replace(location.pathname, { input: { requested_variant: JSON.stringify(h(l)) } }), null
          } catch (p) {
            return (0, i.ZP)(p), r.createElement(u.Z, { to: '/home' })
          }
        return r.createElement(o.Z, (0, a.Z)({}, e, { flowName: 'report-flow', ocfModule: c }))
      }
    },
    130593: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function _default() {
            return h
          },
        })
      var a = n(807896),
        r = n(202784),
        o = n(473228),
        i = n.n(o),
        s = n(172250),
        l = n(21100),
        c = n(896958),
        u = n(917943),
        d = i().eab9ceb2,
        p = i().i7387d1a
      var h = function h(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(c.Z, { title: d }),
          r.createElement(l.Z, { description: p }),
          r.createElement(s.Z, (0, a.Z)({}, e, { flowName: 'signup', ocfModule: u.qE })),
        )
      }
    },
    753105: function _(e, t, n) {
      'use strict'
      n.d(t, {
        Z: function Z() {
          return E
        },
      })
      var a = n(709249),
        r = n(887371),
        o = n(580753),
        i = n(545754),
        s = n(486906),
        l = n(256666),
        c = (n(818178), n(202784)),
        u = n(325686),
        d = n(241441),
        p = n(550829),
        h = n(870451),
        m = n(805252),
        f = n(973186),
        _ = n(473228),
        v = n.n(_),
        g = n(721783),
        b = n(773036),
        k = n(526176),
        y = n(958862),
        Z = n(722318),
        w = v().d2fb334c,
        x = v().hdf040dd,
        C = (function (e) {
          ;(0, i.Z)(n, e)
          var t = (0, s.Z)(n)
          function n() {
            var e
            ;(0, a.Z)(this, n)
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) {
              i[s] = arguments[s]
            }
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, l.Z)((0, o.Z)(e), 'state', { contentScrollable: !1, scrollReachedBottom: !1 }),
              (0, l.Z)((0, o.Z)(e), '_handleScroll', function (t) {
                var n = t.currentTarget
                if (n instanceof HTMLElement) {
                  var a = Math.abs(n.scrollHeight - n.scrollTop - n.clientHeight) < 2
                  a !== e.state.scrollReachedBottom && e.setState({ scrollReachedBottom: a })
                }
              }),
              (0, l.Z)((0, o.Z)(e), '_handleViewportSet', function (t) {
                var n,
                  a,
                  r = e.props.onViewportSet
                ;(e._viewport = t),
                  r && r(t),
                  null === (n = (a = e).viewportRectChangeListener) || void 0 === n || n.call(a),
                  (e.viewportRectChangeListener =
                    null == t
                      ? void 0
                      : t.addRectChangeListener(function () {
                          return e._handleResize()
                        }))
              }),
              (0, l.Z)((0, o.Z)(e), '_handleResize', function () {
                var t,
                  n = null === (t = e._viewport) || void 0 === t ? void 0 : t.getViewport()
                if (n) {
                  var a = n.scrollHeight > n.clientHeight
                  a !== e.state.contentScrollable && e.setState({ contentScrollable: a })
                }
              }),
              e
            )
          }
          return (
            (0, r.Z)(n, [
              {
                key: 'componentWillUnmount',
                value: function value() {
                  var e
                  null === (e = this.viewportRectChangeListener) || void 0 === e || e.call(this)
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.children,
                    n = e.footer,
                    a = e.header,
                    r = e.hideAppBar,
                    o = e.providePadding,
                    i = void 0 !== o && o,
                    s = e.rightControl,
                    l = e.scrollPrompt,
                    h = this.context.isModal,
                    m = this.state,
                    f = m.contentScrollable,
                    _ = m.scrollReachedBottom,
                    v = n || s,
                    g = c.createElement(c.Fragment, null, a, t),
                    k = h ? I.contentArea : I.compactContentArea
                  return c.createElement(
                    p.Z,
                    { style: [I.root, h && I.rootModal] },
                    r ? null : this._renderAppBar(),
                    c.createElement(
                      d.Z,
                      { style: [I.container, h && I.containerModal] },
                      h
                        ? c.createElement(
                            c.Fragment,
                            null,
                            c.createElement(
                              y.Z,
                              {
                                onScroll: this._handleScroll,
                                onViewportSet: this._handleViewportSet,
                                style: [I.viewport, b.ZP.isIE() && I.viewportIE],
                              },
                              c.createElement(
                                u.Z,
                                { onLayout: this._handleResize, onPageScroll: this._handleScroll, style: i && k },
                                g,
                              ),
                            ),
                            v && c.createElement(u.Z, { style: [k, f && !_ && I.footerShadow] }, v),
                          )
                        : v
                        ? c.createElement(
                            Z.l,
                            {
                              control: c.createElement(u.Z, { style: [i && k, f && !_ && I.footerShadow] }, v),
                              onViewportSet: this._handleViewportSet,
                            },
                            c.createElement(u.Z, { style: i && k }, g),
                          )
                        : i
                        ? c.createElement(u.Z, { style: k }, g)
                        : g,
                      h ? null : l,
                    ),
                    h ? l : null,
                  )
                },
              },
              {
                key: '_renderAppBar',
                value: function value() {
                  var e,
                    t = this.props,
                    n = t.appBarPosition,
                    a = t.appBarWithBackground,
                    r = t.backButtonType,
                    o = t.backLocation,
                    i = t.hideBackButton,
                    s = t.hideLogo,
                    l = t.history,
                    d = t.leftControl,
                    p = t.onBackClick,
                    h = t.progressIndication,
                    f =
                      h || s
                        ? void 0
                        : c.createElement(
                            u.Z,
                            { style: I.iconContainer },
                            c.createElement(g['default'], { accessibilityLabel: w, style: I.icon }),
                          ),
                    _ = null == h || null === (e = h.text) || void 0 === e ? void 0 : e.text,
                    v = null == h ? void 0 : h.percentage_complete,
                    b = v ? v / 100 : void 0,
                    y = x({ percentage: v }),
                    Z = b ? c.createElement(m.Z, { accessibilityLabel: y, ariaValueText: y, progress: b }) : void 0
                  return c.createElement(k.ZP, {
                    backButtonType: r,
                    backLocation: o,
                    centeredLogo: f,
                    hideBackButton: i || !p,
                    history: l,
                    leftControl: d,
                    onBackClick: p,
                    position: n,
                    secondaryBar: Z,
                    title: _,
                    withBackground: a,
                  })
                },
              },
            ]),
            n
          )
        })(c.Component)
      ;(0, l.Z)(C, 'contextType', h.Z)
      var I = f.Z.create(function (e) {
        return {
          root: { display: 'flex', flexGrow: 1 },
          rootModal: { backgroundColor: e.colors.cellBackground, flexShrink: 1 },
          container: { flexGrow: 1 },
          containerModal: { flexShrink: 1 },
          iconContainer: {
            alignItems: 'center',
            alignSelf: 'stretch',
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            minWidth: e.spaces.space32,
          },
          icon: { color: e.colors.brandColor, flexGrow: 1, height: '1.75rem' },
          viewport: { flexGrow: 1, flexShrink: 1, overflow: 'auto' },
          viewportIE: { flexBasis: '0%' },
          footerShadow: { boxShadow: e.boxShadows.xSmall },
          contentArea: { paddingHorizontal: e.spaces.space80 },
          compactContentArea: { paddingHorizontal: e.spaces.space32 },
        }
      })
      var E = C
    },
    722318: function _(e, t, n) {
      'use strict'
      n.d(t, {
        l: function l() {
          return d
        },
      })
      var a = n(968079),
        r = n(196234),
        o = (n(818178), n(909538), n(202784)),
        i = n(325686),
        s = n(973186),
        l = n(773036),
        c = n(958862)
      var u = 'controlView'
      var d = function d(e) {
          var t = e.children,
            n = e.control,
            d = e.onScroll,
            m = e.onViewportSet,
            f = o.useRef(null),
            _ = o.useRef(0),
            v = o.useState(null),
            g = (0, r.Z)(v, 2),
            b = g[0],
            k = g[1]
          p(function () {
            var e,
              t = window.visualViewport
            if (
              ((null === (e = document.documentElement) || void 0 === e ? void 0 : e.clientHeight) ||
                window.innerHeight) -
                t.height >
              100
            ) {
              var n = f.current || 75,
                a = n + (_.current || 75) + s.Z.theme.componentDimensions.appBarHeightPx
              window.visualViewport.height < a ? k(a) : k(t.height + t.offsetTop - n)
            } else k(null)
          })
          var y = [h.fixed].concat((0, a.Z)(l.ZP.isIOS() && b ? [h.visualViewport, { top: b }] : []))
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              c.Z,
              { onScroll: d, onViewportSet: m, style: h.flexViewport },
              o.createElement(
                i.Z,
                {
                  ref: function ref(e) {
                    e && !_.current && (_.current = e.getBoundingClientRect().height)
                  },
                  style: h.fullHeight,
                },
                t,
              ),
            ),
            o.createElement(
              i.Z,
              {
                ref: function ref(e) {
                  e && !f.current && (f.current = e.getBoundingClientRect().height)
                },
                style: y,
                testID: u,
              },
              n,
            ),
            o.createElement(i.Z, { style: h.invisible }, n),
          )
        },
        p = function p(e) {
          var t = window.visualViewport
          o.useEffect(function () {
            if (t)
              return (
                t.addEventListener('resize', e),
                t.addEventListener('scroll', e),
                function () {
                  t.removeEventListener('resize', e), t.removeEventListener('scroll', e)
                }
              )
          })
        },
        h = s.Z.create(function (e) {
          return {
            fixed: { backgroundColor: e.colors.navigationBackground, position: 'fixed', bottom: 0, start: 0, end: 0 },
            invisible: { visibility: 'hidden' },
            flexViewport: { flexGrow: 1, flexShrink: 1, flexBasis: '100%', overflow: 'auto' },
            fullHeight: { height: '100%' },
            visualViewport: {
              position: 'absolute',
              start: 0,
              end: 0,
              marginTop: '-'.concat(e.componentDimensions.appBarHeight),
            },
          }
        })
    },
    172250: function _(e, t, n) {
      'use strict'
      n.d(t, {
        Z: function Z() {
          return Dc
        },
      })
      var a = n(807896),
        r = n(133028),
        o = n(709249),
        i = n(887371),
        s = n(580753),
        l = n(545754),
        c = n(486906),
        u = n(256666),
        d =
          (n(334769),
          n(477950),
          n(385940),
          n(344112),
          n(372147),
          n(207901),
          n(581497),
          n(875640),
          n(801871),
          n(606710),
          n(449228),
          n(358188),
          n(543450),
          n(73439),
          n(438695),
          n(201939),
          n(202784)),
        p = n(325686),
        h = n(900883),
        m = n(436934),
        f = n(484292),
        _ = n(870451),
        v = n(973186),
        g = n(473228),
        b = n.n(g),
        k = n(801206),
        y = n(872983),
        Z = n(331261),
        w = n(196234),
        x = n(923335),
        C = n(867560),
        I = n(663140),
        E = b().e4ff75aa,
        S = b().e4f6bd9e,
        T = (0, u.Z)({}, C.Z.Offline, E),
        A = function A(e, t, n) {
          var a,
            o = (0, u.Z)({}, I.ZP.AccessDeniedByBouncer, {
              customAction: function customAction(t) {
                ;(0, x.bouncerError)(t, { flow: e })
              },
            })
          if (n)
            a = (0, r.Z)(
              (0, r.Z)({}, o),
              {},
              {
                customErrorHandler: function customErrorHandler(a) {
                  var r = (0, w.Z)(a.errors, 1)[0]
                  return (
                    r.code === I.ZP.AccessDeniedByBouncer
                      ? (0, x.bouncerError)(r, { flow: e })
                      : n(t || (r.code && T[r.code]) || S),
                    []
                  )
                },
              },
            )
          else if (t) {
            var i,
              s = { toast: { text: t } }
            a = (0, r.Z)(
              ((i = {}),
              (0, u.Z)(i, I.ZP.ValidationFailure, s),
              (0, u.Z)(i, I.ZP.OnboardingFlowRetriableFailure, s),
              (0, u.Z)(i, I.ZP.OnboardingFlowFailure, s),
              (0, u.Z)(i, 'defaultToast', { text: t }),
              (0, u.Z)(i, 'showToast', !0),
              i),
              o,
            )
          } else {
            var l
            a = (0, r.Z)(
              (0, r.Z)({}, o),
              {},
              ((l = {}),
              (0, u.Z)(l, C.Z.Offline, { toast: { text: T[C.Z.Offline] } }),
              (0, u.Z)(l, 'defaultToast', { text: S }),
              (0, u.Z)(l, 'showToast', !0),
              l),
            )
          }
          return a
        },
        P = n(404265),
        F = n(48580),
        N = n(472599),
        D = n(750519),
        B = n(134615),
        L = n(288335),
        O = n(641268),
        V = n(588027),
        R = n(917943),
        M = n(823803),
        U = (n(472508), n(949758)),
        z = n(510364),
        j = n(459740),
        H = (n(995342), n(549992), n(229496)),
        G = n(968079),
        W = (n(818178), n(443430), n(136728), n(332501), n(753682)),
        q = function q(e) {
          var t,
            n = e.entity,
            a = n.navigation_link,
            o = n.subtask_data_reference,
            i = e.onClick,
            s = e.onNavigate,
            l = e.subtaskInputs,
            c = e.children,
            u = {}
          if (a) {
            var p = a.link_type === L.Iq.ChromelessWeb
            u = (0, r.Z)(
              { withInteractiveStyling: !0 },
              p && a.url
                ? { link: { external: !0, pathname: a.url } }
                : {
                    accessibilityRole: 'button',
                    color: 'link',
                    onClick:
                      ((t = a),
                      function (e) {
                        e.preventDefault(), s ? s(t) : i && i()
                      }),
                  },
            )
          } else o && (c = (0, W.OG)(l, o))
          return d.createElement(m.ZP, u, c)
        },
        $ = function $(e) {
          var t = e.children,
            n = e.stylingRange,
            a = n.styling_type
          switch (n.type || a) {
            case L.Hm.UnorderedList:
            case L.Hm.DEPRECATED_UnorderedList:
              return d.createElement('ul', null, t)
            case L.Hm.ListItem:
            case L.Hm.DEPRECATED_ListItem:
              return d.createElement('li', null, t)
            default:
              return d.createElement(d.Fragment, null, t)
          }
        },
        K = (function () {
          function e(t, n, a) {
            var r = this
            ;(0, o.Z)(this, e),
              (0, u.Z)(this, '_renderChildren', function (e) {
                var t = e.text
                if (!t) return []
                var n = r.fromIndex,
                  a = []
                return (
                  r.children.forEach(function (r) {
                    n < r.fromIndex &&
                      a.push(
                        d.createElement(m.ZP, { key: ''.concat(n, ',').concat(r.fromIndex) }, t.slice(n, r.fromIndex)),
                      ),
                      r.rangeObject && a.push(r.render(e)),
                      (n = r.toIndex)
                  }),
                  n < r.toIndex &&
                    a.push(d.createElement(m.ZP, { key: ''.concat(n, ',').concat(r.toIndex) }, t.slice(n, r.toIndex))),
                  a
                )
              }),
              (this.fromIndex = t),
              (this.toIndex = n),
              (this.rangeObject = a),
              (this.children = [])
          }
          return (
            (0, i.Z)(e, [
              {
                key: 'insert',
                value: function value(e) {
                  var t = this.children.find(function (t) {
                    return t.fromIndex <= e.fromIndex && t.toIndex >= e.toIndex
                  })
                  t
                    ? t.insert(e)
                    : (this.children.push(e),
                      this.children.sort(function (e, t) {
                        return e.fromIndex - t.fromIndex
                      }))
                },
              },
              {
                key: 'render',
                value: function value(e) {
                  var t,
                    n,
                    r = e.accessibilityLevel,
                    o = e.accessibilityRole,
                    i = e.align,
                    s = e.color,
                    l = e.nativeID,
                    c = e.size,
                    u = e.style,
                    p = e.testID,
                    h = e.weight,
                    f = this._renderChildren(e),
                    _ = (0, W.eU)(u),
                    v = ''.concat(this.fromIndex, ',').concat(this.toIndex)
                  return (null !== (t = this.rangeObject) && void 0 !== t && t.type) ||
                    (null !== (n = this.rangeObject) && void 0 !== n && n.styling_type)
                    ? d.createElement(
                        $,
                        (0, a.Z)({}, e, {
                          fromIndex: this.fromIndex,
                          key: v,
                          stylingRange: this.rangeObject,
                          toIndex: this.toIndex,
                        }),
                        f,
                      )
                    : this.rangeObject
                    ? d.createElement(
                        q,
                        (0, a.Z)({}, e, {
                          entity: this.rangeObject,
                          fromIndex: this.fromIndex,
                          key: v,
                          toIndex: this.toIndex,
                        }),
                        f,
                      )
                    : d.createElement(
                        m.ZP,
                        {
                          accessibilityLevel: r,
                          accessibilityRole: o,
                          align: i,
                          color: s,
                          key: v,
                          nativeID: l,
                          size: c,
                          style: u,
                          testID: p,
                          weight: _ || h,
                        },
                        f,
                      )
                },
              },
            ]),
            e
          )
        })()
      var Y = (function (e) {
        ;(0, l.Z)(n, e)
        var t = (0, c.Z)(n)
        function n() {
          var e
          ;(0, o.Z)(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
            r[i] = arguments[i]
          }
          return (
            (e = t.call.apply(t, [this].concat(r))),
            (0, u.Z)((0, s.Z)(e), '_generateRichTextTree', function () {
              var t = e.props,
                n = t.entities,
                a = t.styling_ranges,
                r = t.text,
                o = [].concat((0, G.Z)(null != a ? a : []), (0, G.Z)(null != n ? n : [])).sort(function (e, t) {
                  return t.to_index - t.from_index - (e.to_index - e.from_index)
                }),
                i = new K(0, (null == r ? void 0 : r.length) || 0)
              return (
                o.forEach(function (e) {
                  i.insert(new K(e.from_index, e.to_index, e))
                }),
                i
              )
            }),
            e
          )
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'render',
              value: function value() {
                return this._generateRichTextTree().render(this.props)
              },
            },
          ]),
          n
        )
      })(d.PureComponent)
      var Q = ['label', 'wrapper'],
        X = function X(e) {
          var t = e.children,
            n = e.condition,
            a = e.wrapper
          return n && a ? a(t) : t
        }
      function J(e) {
        var t = e.actionLabel,
          n = e.secondaryActionLabel
        return Boolean(t || n)
      }
      var ee = v.Z.create(function (e) {
        return {
          spaceBetween: { marginBottom: e.spaces.space16 },
          detailText: { marginTop: e.spaces.space16 },
          actionContainer: { marginVertical: e.spaces.space24 },
          columnView: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
        }
      })
      var te = function te(e) {
        var t = e.actionDisabled,
          n = e.actionLabel,
          r = e.actionTestID,
          o = e.actionType,
          i = e.actionWrapper,
          s = e.buttonSize,
          l = e.decorator,
          c = e.detailText,
          u = e.onAction,
          h = e.onNavigate,
          m = e.onSecondaryAction,
          f = e.secondaryActionDisabled,
          _ = e.secondaryActionLabel,
          v = e.secondaryActionTestID,
          g = e.secondaryActionType,
          b = e.secondaryActionWrapper,
          k = e.subtaskInputs
        if (!J(e)) return null
        var y = 'primaryText' === g,
          Z = [
            {
              disabled: t,
              onPress: u,
              size: null != s ? s : 'xLarge',
              testID: r,
              type: null != o ? o : 'primaryFilled',
              label: n,
              wrapper: i,
            },
            {
              disabled: f,
              onPress: m,
              size: null != s ? s : 'xLarge',
              testID: v,
              type: null != g ? g : 'primaryOutlined',
              label: _,
              wrapper: b,
            },
          ].filter(function (e) {
            var t = e.label
            return null != t
          })
        return (
          y && Z.reverse(),
          d.createElement(
            p.Z,
            { style: !!l && ee.columnView },
            l || null,
            d.createElement(
              p.Z,
              null,
              (null == c ? void 0 : c.text) &&
                k &&
                d.createElement(
                  Y,
                  (0, a.Z)({}, c, {
                    color: 'gray700',
                    onNavigate: h,
                    size: 'subtext2',
                    style: ee.detailText,
                    subtaskInputs: k,
                  }),
                ),
              d.createElement(
                p.Z,
                { style: ee.actionContainer },
                Z.map(function (e, t) {
                  var n = e.label,
                    r = e.wrapper,
                    o = (0, j.Z)(e, Q)
                  return d.createElement(
                    X,
                    { condition: !!r, key: n, wrapper: r },
                    d.createElement(
                      H.ZP,
                      (0, a.Z)({ key: n, style: Z.length > 1 && t < Z.length - 1 ? ee.spaceBetween : void 0 }, o),
                      n,
                    ),
                  )
                }),
              ),
            ),
          )
        )
      }
      n(326936)
      var ne = n(35953),
        ae = n(744329),
        re = n(819153),
        oe = n(553363),
        ie = n(384361),
        se = n(158721),
        le = n(185114),
        ce = n(855258)
      var ue = v.Z.create(function (e) {
        return {
          header: { marginBottom: e.spaces.space12 },
          centerText: { textAlign: 'center' },
          contentArea: { marginHorizontal: e.spaces.space80 },
          contentAreaCompact: {
            paddingHorizontal: e.spaces.space32,
            margin: 'auto',
            minWidth: le.fI + 64,
            maxWidth: le.fI + 64,
          },
          checkboxText: { flexShrink: 1, paddingEnd: e.spaces.space12, width: '100%' },
          option: { marginTop: e.spaces.space12, flexDirection: 'row', justifyContent: 'space-between' },
          primaryButton: { marginTop: e.spaces.space16 },
          formTextInput: { paddingHorizontal: 0 },
          button: { width: '100%', margin: 'auto', marginVertical: e.spaces.space12 },
          ssoButton: { width: le.fI, height: e.spaces.space40 },
        }
      })
      function de(e) {
        var t = e.number
        return d.createElement(
          p.Z,
          { style: pe.badge },
          d.createElement(m.ZP, { color: 'buttonWhite', weight: 'bold' }, t),
        )
      }
      var pe = v.Z.create(function (e) {
        return {
          badge: {
            backgroundColor: e.colors.buttonBlack,
            borderRadius: e.borderRadii.infinite,
            height: e.spaces.space28,
            width: e.spaces.space28,
            marginEnd: e.spaces.space20,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          },
        }
      })
      var he = function he(e) {
        var t = e.icon,
          n = e.style
        !(t in L.q0) &&
          t.startsWith('number_') &&
          (L.q0[t] = (function (e) {
            if (!e.startsWith('number_'))
              return function () {
                return null
              }
            var t = e.split('number_'),
              n = (0, w.Z)(t, 2)[1]
            return function () {
              return d.createElement(de, { number: n })
            }
          })(t))
        var a = L.q0[t]
        return a ? d.createElement(a, { style: n, testID: 'ocf-icon' }) : null
      }
      var me = n(959890),
        fe = v.Z.create(function (e) {
          return {
            separatorContainer: { width: '100%' },
            separatorColumn: { flex: 1, justifyContent: 'center' },
            separator: {
              width: '100%',
              height: '1px',
              backgroundColor: e.colors.gray200,
              marginTop: e.spaces.space8,
              marginBottom: e.spaces.space8,
            },
            separatorText: { 'flex-basis': 'auto' },
          }
        })
      var _e = function _e(e) {
        var t = e.label,
          n = e.onNavigate,
          r = e.subtaskInputs
        return t
          ? d.createElement(
              me.Z,
              { style: fe.separatorContainer, withGutter: !0 },
              d.createElement(p.Z, { style: fe.separatorColumn }, d.createElement(p.Z, { style: fe.separator })),
              d.createElement(
                Y,
                (0, a.Z)({ style: fe.separatorText }, t, { onNavigate: n, size: 'headline2', subtaskInputs: r }),
              ),
              d.createElement(p.Z, { style: fe.separatorColumn }, d.createElement(p.Z, { style: fe.separator })),
            )
          : d.createElement(p.Z, { style: fe.separator })
      }
      var ve = ['button', 'displayType', 'onNavigate', 'style', 'subtaskId', 'subtaskInputs']
      var ge = function ge(e) {
        var t = e.button,
          n = e.displayType,
          r = void 0 === n ? L.GN.Default : n,
          o = e.onNavigate,
          i = e.style,
          s = e.subtaskId,
          l = e.subtaskInputs,
          c = (0, j.Z)(e, ve),
          u = t.icon,
          p = t.navigation_link,
          h = t.preferred_size,
          m = t.separator,
          f = s === L.D7 ? ce.yX.SignUp : ce.yX.LogIn,
          _ = d.useCallback(
            function (e) {
              o(p)
            },
            [p, o],
          )
        return d.createElement(
          d.Fragment,
          null,
          (function () {
            switch (r) {
              case L.GN.GoogleSSO:
                return d.createElement(se.Z, {
                  buttonSize: h ? (0, W.Yr)(h) : 'medium',
                  buttonState: f,
                  displayType: le.qv.Button,
                  style: [ue.button, ue.ssoButton],
                })
              case L.GN.AppleSSO:
                return d.createElement(ie.Z, {
                  buttonSize: h ? (0, W.Yr)(h) : 'medium',
                  buttonState: f,
                  style: [ue.button, ue.ssoButton],
                })
              default:
                return d.createElement(
                  H.ZP,
                  (0, a.Z)({}, c, {
                    icon: u && d.createElement(he, { icon: u.icon }),
                    onPress: _,
                    size: h ? (0, W.Yr)(h) : 'medium',
                    style: [ue.button, i],
                    type: t.style ? (0, W.$1)(t.style) : 'brandFilled',
                  }),
                  p.label,
                )
            }
          })(),
          m ? d.createElement(_e, { label: m.label, onNavigate: o, subtaskInputs: l }) : null,
        )
      }
      var be = v.Z.create(function (e) {
        return {
          buttonRightAligned: { marginHorizontal: '-'.concat(e.spaces.space8), marginVertical: 0 },
          containerRightAlignedButton: { marginStart: e.spaces.space20 },
          secondaryTextRightAlignedButton: { flexBasis: 0, flexGrow: 1 },
          subHeaderRightAlignedButton: { flexDirection: 'row', flexWrap: 'wrap' },
          headingContainer: { marginVertical: e.spaces.space20 },
          subHeader: { marginTop: e.spaces.space8 },
        }
      })
      var ke = function ke(e) {
        var t,
          n,
          r,
          o,
          i,
          s,
          l,
          c,
          u,
          h,
          m,
          f = e.header,
          g = e.onNavigate,
          b = e.primaryTextProp,
          k = e.primaryTextTestID,
          y = e.secondaryTextProp,
          Z = e.subtaskInputs,
          w = e.userInfo,
          x = e.withHeaderImage,
          C =
            (null == f ? void 0 : f.header_button) &&
            !(
              !(r = f.header_button).icon ||
              r.style !== L.ZJ.Text ||
              (null !== (o = r.navigation_link) && void 0 !== o && o.label)
            ),
          I = d.useContext(_.Z).isModal
        return (
          f
            ? ((l = f.user),
              (c = f.header_image),
              (i = f.primary_text),
              (s = f.secondary_text),
              (u = 10 * v.Z.theme.lineHeightsPx.body),
              (h = c ? (u * c.image.image_info.width) / c.image.image_info.height : 'initial'),
              (m = x && c && 'icon' === c.image_type))
            : ((i = 'string' == typeof b ? { text: b } : b), (s = 'string' == typeof y ? { text: y } : y)),
          c || (null !== (t = i) && void 0 !== t && t.text) || (null !== (n = s) && void 0 !== n && n.text) || l
            ? d.createElement(
                p.Z,
                null,
                x && c
                  ? d.createElement(
                      p.Z,
                      {
                        style: {
                          marginHorizontal:
                            'full_width' === c.image_type || 'full_bleed_top' === c.image_type
                              ? '-'.concat(I ? v.Z.theme.spaces.space80 : v.Z.theme.spaces.space32)
                              : 'auto',
                          height: m ? u : 'initial',
                          width: m ? h : 'initial',
                        },
                      },
                      d.createElement(ne.Z, {
                        accessibilityLabel: c.image.image_info.alt_text || '',
                        aspectMode: ae.Z.exact(c.image.image_info.width / c.image.image_info.height),
                        image: c.image.image_info,
                      }),
                    )
                  : null,
                d.createElement(
                  p.Z,
                  { style: be.headingContainer },
                  i
                    ? d.createElement(
                        Y,
                        (0, a.Z)({}, i, {
                          accessibilityLevel: 1,
                          accessibilityRole: 'heading',
                          nativeID: oe.Q_,
                          onNavigate: g,
                          size: I ? 'title2' : 'title3',
                          subtaskInputs: Z,
                          testID: k,
                          weight: 'bold',
                        }),
                      )
                    : null,
                  s || (null != f && f.header_button)
                    ? d.createElement(
                        p.Z,
                        { style: [be.subHeader, C && be.subHeaderRightAlignedButton] },
                        d.createElement(
                          p.Z,
                          { style: C && be.secondaryTextRightAlignedButton },
                          s
                            ? d.createElement(Y, (0, a.Z)({}, s, { color: 'gray700', onNavigate: g, subtaskInputs: Z }))
                            : null,
                        ),
                        null != f && f.header_button
                          ? d.createElement(
                              p.Z,
                              { style: C && be.containerRightAlignedButton },
                              d.createElement(ge, {
                                button: f.header_button,
                                onNavigate: g,
                                style: C && be.buttonRightAligned,
                                subtaskInputs: Z,
                              }),
                            )
                          : null,
                      )
                    : null,
                  l
                    ? null != w
                      ? w
                      : d.createElement(re.ZP, {
                          avatarUri: l.profile_image_url_https,
                          displayMode: 'UserCompact',
                          name: l.name,
                          screenName: l.screen_name,
                          userId: l.id_str,
                        })
                    : null,
                ),
              )
            : null
        )
      }
      var ye = n(753105)
      var Ze = 'ActionListNextButton',
        we = 'ActionListSkipButton'
      function xe(e) {
        var t,
          n,
          r = e.actionItem,
          o = e.link,
          i = e.onNavigate,
          s = e.subtaskId,
          l = e.subtaskInputs,
          c = e.updateFlow,
          u = r.action_data.link_data,
          p = d.useCallback(
            function (e) {
              e.preventDefault(), c(s, { link: o.link_id }), i(o)
            },
            [o, i, s, c],
          )
        return d.createElement(
          z.Z,
          (0, a.Z)(
            {
              accessibilityRole: 'link',
              description: d.createElement(
                Y,
                (0, a.Z)({}, u.detail_text, { color: 'gray700', size: 'subtext2', subtaskInputs: l }),
              ),
              label: d.createElement(
                Y,
                (0, a.Z)({}, u.text, {
                  size: 'headline2',
                  subtaskInputs: l,
                  text:
                    null !== (t = null === (n = u.text) || void 0 === n ? void 0 : n.text) && void 0 !== t
                      ? t
                      : u.link.label,
                }),
              ),
              link: '#',
              onPress: p,
            },
            Ee(r.action_data.link_data.icon),
          ),
        )
      }
      function Ce(e) {
        var t = e.actionItem,
          n = e.onNavigate,
          r = e.subtaskInputs
        return d.createElement(
          z.Z,
          (0, a.Z)(
            {
              accessibilityRole: null,
              description: d.createElement(
                Y,
                (0, a.Z)({}, t.action_data.text_data.detail_text, {
                  color: 'gray700',
                  size: 'subtext2',
                  subtaskInputs: r,
                }),
              ),
              label: d.createElement(
                Y,
                (0, a.Z)({}, t.action_data.text_data.text, { onNavigate: n, size: 'headline2', subtaskInputs: r }),
              ),
            },
            Ee(t.action_data.text_data.icon),
          ),
        )
      }
      function Ie(e) {
        var t = e.actionItems,
          n = e.onNavigate,
          r = e.subtaskInputs,
          o = t.map(function (e) {
            var t,
              o,
              i = 'text' === e.action_type ? e.action_data.text_data : e.action_data.link_data
            return {
              label: d.createElement(
                Y,
                (0, a.Z)({}, i.text, {
                  onNavigate: n,
                  subtaskInputs: r,
                  text:
                    'text' === e.action_type
                      ? e.action_data.text_data.text.text
                      : null !== (t = null === (o = e.action_data.link_data.text) || void 0 === o ? void 0 : o.text) &&
                        void 0 !== t
                      ? t
                      : e.action_data.link_data.link.label,
                  weight: 'bold',
                }),
              ),
              description: i.detail_text
                ? d.createElement(
                    Y,
                    (0, a.Z)({}, i.detail_text, {
                      color: 'gray700',
                      style: Se.bulletListDescription,
                      subtaskInputs: r,
                    }),
                  )
                : null,
              decoration: i.icon ? d.createElement(he, { icon: i.icon.icon, style: Se.bulletIcon }) : null,
            }
          })
        return d.createElement(U.Z, { items: o })
      }
      function Ee(e) {
        return {
          thumbnail: e
            ? d.createElement(m.ZP, { size: 'headline2', style: Se.icon }, d.createElement(he, { icon: e.icon }))
            : null,
          thumbnailSize: 'medium',
        }
      }
      var Se = v.Z.create(function (e) {
        return {
          icon: { display: 'block', minWidth: e.spaces.space36, marginEnd: e.spaces.space20, textAlign: 'center' },
          bulletIcon: {
            height: e.spaces.space24,
            width: e.spaces.space24,
            color: e.colors.text,
            marginEnd: e.spaces.space24,
            justifyContent: 'center',
            overflow: 'hidden',
          },
          bulletListDescription: { marginTop: e.spaces.space4 },
        }
      })
      var Te = function Te(e) {
        var t,
          n,
          r,
          o = e.onNavigate,
          i = e.passthroughOcfScreenProps,
          s = e.subtask,
          l = s.action_items,
          c = s.header,
          u = s.next_link,
          h = s.skip_link,
          m = s.style,
          f = e.subtaskId,
          _ = e.subtaskInputs,
          v = e.updateFlow
        return d.createElement(
          ye.Z,
          (0, a.Z)({}, i, {
            appBarPosition:
              'full_bleed_top' === (null == c || null === (t = c.header_image) || void 0 === t ? void 0 : t.image_type)
                ? 'absolute'
                : void 0,
            appBarWithBackground:
              'full_bleed_top' !== (null == c || null === (n = c.header_image) || void 0 === n ? void 0 : n.image_type),
            footer: d.createElement(te, {
              actionLabel: null == u ? void 0 : u.label,
              actionTestID: Ze,
              onAction: function onAction() {
                u && (v(f, { link: u.link_id }), o(u))
              },
              onSecondaryAction: function onSecondaryAction() {
                h && (v(f, { link: h.link_id }), o(h))
              },
              secondaryActionLabel: null == h ? void 0 : h.label,
              secondaryActionTestID: we,
            }),
            header: d.createElement(ke, { header: c, onNavigate: o, subtaskInputs: _, withHeaderImage: !0 }),
            hideLogo:
              'full_bleed_top' === (null == c || null === (r = c.header_image) || void 0 === r ? void 0 : r.image_type),
            providePadding: !0,
          }),
          m === L.R8.BulletList
            ? d.createElement(Ie, (0, a.Z)({}, e, { actionItems: l }))
            : d.createElement(
                p.Z,
                { accessibilityRole: 'list' },
                l.map(function (t, n) {
                  return d.createElement(
                    p.Z,
                    { accessibilityRole: 'listitem', key: n },
                    'text' === t.action_type
                      ? d.createElement(Ce, (0, a.Z)({}, e, { actionItem: t }))
                      : d.createElement(xe, (0, a.Z)({}, e, { actionItem: t, link: t.action_data.link_data.link })),
                  )
                }),
              ),
        )
      }
      var Ae = (function (e) {
        ;(0, l.Z)(n, e)
        var t = (0, c.Z)(n)
        function n() {
          var e
          ;(0, o.Z)(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
            r[i] = arguments[i]
          }
          return (
            (e = t.call.apply(t, [this].concat(r))),
            (0, u.Z)((0, s.Z)(e), '_handleConfirm', function () {
              var t = e.props.subtask
              e._handleButtonClick(t.next_link)
            }),
            (0, u.Z)((0, s.Z)(e), '_handleCancel', function () {
              var t = e.props.subtask.cancel_link
              t && e._handleButtonClick(t)
            }),
            (0, u.Z)((0, s.Z)(e), '_handleButtonClick', function (t) {
              var n = e.props,
                a = n.onNavigate,
                r = n.subtaskId
              ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
            }),
            e
          )
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskInputs,
                  o = n.primary_text
                    ? d.createElement(
                        Y,
                        (0, a.Z)({}, n.primary_text, { nativeID: oe.Q_, onNavigate: t, subtaskInputs: r }),
                      )
                    : void 0,
                  i = n.secondary_text
                    ? d.createElement(Y, (0, a.Z)({}, n.secondary_text, { onNavigate: t, subtaskInputs: r }))
                    : void 0,
                  s = n.cancel_link,
                  l = n.next_link,
                  c = s && s.label
                return d.createElement(f.Z, {
                  cancelButtonLabel: c,
                  confirmButtonLabel: l && l.label,
                  headline: o,
                  onCancel: this._handleCancel,
                  onConfirm: this._handleConfirm,
                  onMaskClick: this._handleCancel,
                  text: i,
                  withCancelButton: !!c,
                })
              },
            },
          ]),
          n
        )
      })(d.Component)
      var Pe = Ae
      var Fe = n(434411),
        Ne = n(16587),
        De = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e, r) {
            var i
            return (
              (0, o.Z)(this, n),
              (i = t.call(this, e, r)),
              (0, u.Z)((0, s.Z)(i), '_handleCtaClick', function (e) {
                var t = i.props,
                  n = t.onNavigate,
                  a = t.subtaskId
                ;(0, t.updateFlow)(a, { link: e.link_id }), n(e)
              }),
              (0, u.Z)((0, s.Z)(i), '_handlePrimaryActionClick', function () {
                var e = i.props.subtask
                i.setState({ downloadLinkClicked: !0 }), i._handleCtaClick(e.primary_action_link)
              }),
              (0, u.Z)((0, s.Z)(i), '_handleSecondaryActionClick', function () {
                var e = i.props.subtask.secondary_action_link
                e && i._handleCtaClick(e)
              }),
              (0, u.Z)(
                (0, s.Z)(i),
                '_getSubText',
                (0, Ne.Z)(function (e, t, n) {
                  var r = e.primary_image_url
                      ? d.createElement(ne.Z, {
                          accessibilityLabel: '',
                          aspectMode: ae.Z.exact(1),
                          image: e.primary_image_url || '',
                        })
                      : null,
                    o = e.secondary_text
                      ? d.createElement(Y, (0, a.Z)({}, e.secondary_text, { onNavigate: t, subtaskInputs: n }))
                      : null
                  return d.createElement(p.Z, null, r, o)
                }),
              ),
              (i.state = { downloadLinkClicked: !1 }),
              i
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    r = e.subtask,
                    o = e.subtaskInputs,
                    i = this.state.downloadLinkClicked,
                    s = r.primary_text
                      ? d.createElement(
                          Y,
                          (0, a.Z)({}, r.primary_text, { nativeID: oe.Q_, onNavigate: t, subtaskInputs: o }),
                        )
                      : null,
                    l = !i || !r.primary_action_text_after_click,
                    c = (i && r.primary_action_text_after_click) || r.primary_action_link.label,
                    u = r.detail_text
                      ? d.createElement(Y, (0, a.Z)({}, r.detail_text, { onNavigate: t, subtaskInputs: o }))
                      : null
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({ hideLogo: !0 }, n),
                    d.createElement(Fe.Z, {
                      actionLabel: c || '',
                      actionType: (0, W.$1)(r.primary_action_style),
                      footer: u,
                      headline: s,
                      onAction: l ? this._handlePrimaryActionClick : k.Z,
                      onClose: k.Z,
                      onSecondaryAction: this._handleSecondaryActionClick,
                      secondaryActionLabel: (r.secondary_action_link || {}).label,
                      secondaryActionType: r.secondary_action_style && (0, W.$1)(r.secondary_action_style),
                      subtext: this._getSubText(r, t, o),
                      withCloseButton: !1,
                    }),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component)
      ;(0, u.Z)(De, 'contextType', Z.rC)
      var Be = n(854044),
        Le = n(73206),
        Oe = n(773036),
        Ve = n(137541),
        Re = n(887191),
        Me = n(695995),
        Ue = v.Z.create(function (e) {
          return {
            userContainerStacked: { alignItems: 'center', marginTop: e.spaces.space8, marginBottom: e.spaces.space16 },
            userAvatarStacked: { marginBottom: e.spaces.space8 },
            userNameStacked: { alignItems: 'center' },
            avatarColumnCentered: { justifyContent: 'center' },
          }
        })
      var ze = function ze(e) {
          var t = e.displayType,
            n = void 0 === t ? L.CE.stacked : t,
            r = e.user,
            o = e.userCaption
          if (!r) return null
          var i = function i(e) {
              return d.createElement(Re['default'], {
                accessibilityHidden: !0,
                focusable: !1,
                size: Re['default'].defaultSize,
                style: e,
                uri: r.profile_image_url_https,
              })
            },
            s = function s(t) {
              var n = e.onNavigate,
                i = e.subtaskInputs
              return d.createElement(
                d.Fragment,
                null,
                d.createElement(Me.Z, {
                  isBlueVerified: r.is_blue_verified,
                  isProtected: r['protected'],
                  isVerified: r.verified,
                  name: r.name,
                  screenName: o ? void 0 : r.screen_name,
                  withStackedLayout: !0,
                }),
                o ? d.createElement(Y, (0, a.Z)({}, o, { color: 'gray700', onNavigate: n, subtaskInputs: i })) : null,
              )
            }
          switch (n) {
            case L.CE.stacked:
              return d.createElement(
                p.Z,
                { style: Ue.userContainerStacked },
                i(Ue.userAvatarStacked),
                s(Ue.userNameStacked),
              )
            case L.CE.compact:
              return d.createElement(
                Ve.Z,
                {
                  avatarCell: i(),
                  avatarCellStyle: Ue.avatarColumnCentered,
                  cellStyle: Ue.avatarColumnCentered,
                  testID: 'ocf-userinfo-avatar-row',
                },
                s(),
              )
            default:
              return null
          }
        },
        je = 'OCF_CallToAction_Button'
      var He = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++) {
              l[c] = arguments[c]
            }
            return (
              (e = t.call.apply(t, [this].concat(l))),
              (0, u.Z)((0, s.Z)(e), '_getCtaButtonProps', function () {
                var t = e.props.subtask,
                  n = t.buttons || [],
                  a = (0, w.Z)(n, 3),
                  o = a[0],
                  i = (o = void 0 === o ? {} : o).navigation_link,
                  s = o.style,
                  l = a[1],
                  c = (l = void 0 === l ? {} : l).navigation_link,
                  u = l.style,
                  d = a[2],
                  p = (d = void 0 === d ? {} : d).navigation_link,
                  h = d.style,
                  m = i || t.primary_action_link,
                  f = s || t.primary_action_style,
                  _ = {
                    actionLabel: m.label || '',
                    actionType: f && (0, W.$1)(f),
                    onAction: m && e._handleCtaClick(m),
                  },
                  v = c || t.secondary_action_link,
                  g = u || t.secondary_action_style,
                  b = {
                    secondaryActionLabel: v ? v.label : void 0,
                    secondaryActionType: g && (0, W.$1)(g),
                    onSecondaryAction: v && e._handleCtaClick(v),
                  },
                  k = {
                    tertiaryActionLabel: (p || {}).label,
                    tertiaryActionType: h && (0, W.$1)(h),
                    onTertiaryAction: p && e._handleCtaClick(p),
                  }
                return (0, r.Z)((0, r.Z)((0, r.Z)({}, _), b), k)
              }),
              (0, u.Z)((0, s.Z)(e), '_getCtaText', function () {
                var t = e.props,
                  n = t.onNavigate,
                  r = t.subtask,
                  o = r.detail_text,
                  i = r.header,
                  s = r.primary_text,
                  l = r.secondary_text,
                  c = t.subtaskInputs
                return {
                  primaryText: d.createElement(
                    Y,
                    (0, a.Z)({}, (i && i.primary_text) || s, { nativeID: oe.Q_, onNavigate: n, subtaskInputs: c }),
                  ),
                  secondaryText:
                    i || l
                      ? d.createElement(
                          Y,
                          (0, a.Z)({}, (i && i.secondary_text) || l, { onNavigate: n, subtaskInputs: c }),
                        )
                      : null,
                  detailText: o ? d.createElement(Y, (0, a.Z)({}, o, { onNavigate: n, subtaskInputs: c })) : null,
                }
              }),
              (0, u.Z)((0, s.Z)(e), '_handleCtaClick', function (t) {
                return function () {
                  var n = e.props,
                    a = n.onNavigate,
                    r = n.subtaskId
                  ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
                }
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e,
                    t,
                    n,
                    o = this.props,
                    i = o.onNavigate,
                    s = o.passthroughOcfScreenProps,
                    l = o.subtask,
                    c = o.subtaskInputs,
                    u = s.onBackClick,
                    h = this._getCtaText(),
                    m = h.detailText,
                    f = h.primaryText,
                    _ = h.secondaryText,
                    g = Oe.ZP.isDesktopOS(),
                    b = l.style === L.aD.HalfCover,
                    y = (l.header && l.header.header_image) || l.header_image
                  if (y) {
                    var Z = y.image.image_info,
                      w = y.image_type === L.__.FullBleedTop,
                      x = g && w ? ae.Z.exact(Z.width / Z.height) : void 0,
                      C = { url: Z.url, height: Z.height, width: Z.width }
                    ;(t = function t(e) {
                      var t = e.style
                      return d.createElement(
                        p.Z,
                        { style: t },
                        d.createElement(ne.Z, { accessibilityLabel: Z.alt_text || '', aspectMode: x, image: C }),
                      )
                    }),
                      (n = w ? 'illustrationFullWidth' : 'illustration')
                  } else b && (n = 'none')
                  var I = !('illustrationFullWidth' === n && g),
                    E = (0, r.Z)(
                      {
                        children: d.createElement(ze, {
                          onNavigate: i,
                          subtaskInputs: c,
                          user: null === (e = l.header) || void 0 === e ? void 0 : e.user,
                        }),
                        footer: m,
                        graphic: t,
                        graphicDisplayMode: n,
                        headline: f,
                        onClose: k.Z,
                        primaryButtonTestID: je,
                        subtext: _,
                        withBottomPadding: I,
                        withCloseButton: !1,
                      },
                      this._getCtaButtonProps(),
                    )
                  return b
                    ? d.createElement(Be.Z, null, function (e) {
                        var t = e.windowWidth > v.Z.theme.breakpoints.medium
                        return d.createElement(
                          Le.Z,
                          { type: t ? 'center' : 'bottom', withMask: !0 },
                          d.createElement(Fe.Z, E),
                        )
                      })
                    : d.createElement(
                        ye.Z,
                        (0, a.Z)({ hideAppBar: !u, hideLogo: !0 }, s),
                        d.createElement(Fe.Z, E),
                        this.props.errorDialog,
                      )
                },
              },
            ]),
            n
          )
        })(d.Component),
        Ge = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
              r[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, u.Z)((0, s.Z)(e), '_executeSubtaskAction', function () {
                var t = e.props,
                  n = t.navigationLink,
                  a = t.onError,
                  r = t.onNavigate,
                  o = t.subtaskAction
                try {
                  o()
                    .then(function () {
                      return r(n, !0)
                    })
                    ['catch'](a)
                } catch (i) {
                  a(i)
                }
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  this._executeSubtaskAction()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value(e) {
                  this.props.subtaskId !== e.subtaskId && this._executeSubtaskAction()
                },
              },
              {
                key: 'render',
                value: function value() {
                  return null
                },
              },
            ]),
            n
          )
        })(d.Component)
      ;(0, u.Z)(Ge, 'defaultProps', { onError: k.Z })
      var We = n(392160),
        qe = n(726401)
      var $e = (0, We.Z)()
        .propsFromState(function () {
          return { fetchStatus: qe.UD, multiAccountUsers: qe.pc }
        })
        .propsFromActions(function () {
          return {
            createLocalApiErrorHandlerMultiListFetch: (0, x.createLocalApiErrorHandlerWithContextFactory)(
              'ACCOUNT_SWITCHER_MULTI_LIST_FETCH',
            ),
            fetchMultiAccountListIfNeeded: qe.s2,
          }
        })
        .adjustStateProps(function (e) {
          var t = e.fetchStatus,
            n = e.multiAccountUsers
          return { fetchStatus: t === M.ZP.NONE ? M.ZP.LOADING : t, multiAccountUsers: n }
        })
      var Ke = (function (e) {
        ;(0, l.Z)(n, e)
        var t = (0, c.Z)(n)
        function n() {
          var e
          ;(0, o.Z)(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
            r[i] = arguments[i]
          }
          return (
            (e = t.call.apply(t, [this].concat(r))),
            (0, u.Z)((0, s.Z)(e), '_render', function () {
              var t = e.props,
                n = t.multiAccountUsers,
                a = t.onNavigate,
                r = t.subtask,
                o = t.subtaskId,
                i = t.updateFlow,
                s = r.false_link,
                l = r.true_link,
                c = r.user_id,
                u =
                  n.filter(function (e) {
                    return e.user_id === c
                  }).length > 0
              return d.createElement(Ge, {
                navigationLink: u ? l : s,
                onNavigate: a,
                subtaskAction: function subtaskAction() {
                  return i(o, { link: u ? l.link_id : s.link_id }), Promise.resolve()
                },
                subtaskId: o,
              })
            }),
            (0, u.Z)((0, s.Z)(e), '_handleFetch', function () {
              var t = e.props,
                n = t.createLocalApiErrorHandlerMultiListFetch
              ;(0, t.fetchMultiAccountListIfNeeded)()['catch'](n())
            }),
            e
          )
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'componentDidMount',
              value: function value() {
                this.context.loggedInUserId && this._handleFetch()
              },
            },
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.errorDialog,
                  n = e.fetchStatus,
                  a = this.context.loggedInUserId
                return (
                  t ||
                  (a
                    ? d.createElement(y.Z, { fetchStatus: n, onRequestRetry: this._handleFetch, render: this._render })
                    : this._render())
                )
              },
            },
          ]),
          n
        )
      })(d.PureComponent)
      ;(0, u.Z)(Ke, 'contextType', Z.rC)
      var Ye = $e(Ke)
      n(94908), n(739529), n(231235), n(374083), n(684870), n(753985)
      var Qe = n(229006),
        Xe = n(872948),
        Je = n(796818),
        et = n(322150),
        tt = n(319874),
        nt = n(954170),
        at = n(958955),
        rt = (n(909538), n(411722)),
        ot =
          (n(22144),
          Object.freeze({ icon: 'icon', bullet_icon: 'bullet_icon', image: 'image' }),
          Object.freeze({
            headerTitle: 'header_title',
            headerSubtitle: 'header_subtitle',
            sectionTitle: 'section_title',
            detailText: 'detail',
          })),
        it = Object.freeze({ TOP: 'top', CENTER: 'center', BOTTOM: 'bottom' }),
        st = n(722318),
        lt = d.createContext({
          settings: {},
          subtask: { subtask_id: '' },
          subtaskId: '',
          subtaskInputs: {},
          callbacks: {},
          registerCallback: k.Z,
          removeCallback: k.Z,
          setSettings: k.Z,
          updateFlow: k.Z,
          onNavigate: k.Z,
        })
      function ct() {
        return d.useContext(lt)
      }
      var ut = n(145850),
        dt = n(51276)
      var pt = {
        render: function render(e) {
          var t = ct(),
            n = t.onNavigate,
            r = t.subtaskId,
            o = t.subtaskInputs,
            i = t.updateFlow,
            s = e.value_data,
            l = e.value_identifier,
            c = s.action_data,
            u = c.link,
            p = c.primary_text,
            h = c.secondary_text,
            m = St(l, function () {
              i(r, { link: u }), n && null != u && u.link_id && n(u)
            }),
            f = d.useMemo(
              function () {
                return d.createElement(Y, (0, a.Z)({}, p, { onNavigate: n, size: 'headline2', subtaskInputs: o }))
              },
              [p, n, o],
            ),
            _ = d.useMemo(
              function () {
                return d.createElement(
                  Y,
                  (0, a.Z)({}, h, { color: 'gray700', onNavigate: n, size: 'subtext2', subtaskInputs: o }),
                )
              },
              [h, n, o],
            ),
            v = d.useMemo(
              function () {
                var e
                return void 0 !== u ? (null !== (e = u.url) && void 0 !== e ? e : '#') : void 0
              },
              [u],
            )
          return c
            ? d.createElement(z.Z, {
                accessibilityRole: void 0 === u ? null : 'link',
                description: _,
                label: f,
                link: v,
                onPress: m,
                paddingHorizontal: 'space0',
              })
            : null
        },
      }
      var ht = {
        render: function render(e) {
          var t,
            n,
            o,
            i,
            s,
            l,
            c,
            p,
            h,
            m = e.value_data,
            f = e.value_identifier,
            _ = e.value_type,
            v = m.boolean_data,
            g = v.primary_text,
            b = v.secondary_text,
            k = ct(),
            y = k.onNavigate,
            Z = k.subtaskInputs,
            x =
              ((n = f),
              (o = _),
              (i = null !== (t = null == v ? void 0 : v.initial_value) && void 0 !== t && t),
              (l = d.useContext(lt)),
              (c = l.setSettings),
              (p = l.settings),
              (h = d.useCallback(
                function (e) {
                  return c(function (t) {
                    return (0, r.Z)((0, r.Z)({}, t), {}, (0, u.Z)({}, n, { type: o, value: e }))
                  })
                },
                [c, n, o],
              )),
              d.useEffect(
                function () {
                  h(i)
                },
                [i, h],
              ),
              [null === (s = p[n]) || void 0 === s ? void 0 : s.value, h]),
            C = (0, w.Z)(x, 2),
            I = C[0],
            E = C[1],
            S = g ? d.createElement(Y, (0, a.Z)({}, g, { onNavigate: y, subtaskInputs: Z })) : null,
            T = b ? d.createElement(Y, (0, a.Z)({}, b, { onNavigate: y, subtaskInputs: Z })) : null
          return d.createElement(Je.Z, { checked: Boolean(I), helpText: T, label: S, onChange: E })
        },
      }
      var mt = {
        render: function render(e) {
          var t = ct(),
            n = t.onNavigate,
            a = t.subtaskId,
            r = t.updateFlow,
            o = e.value_data,
            i = e.value_identifier,
            s = o.button_data,
            l = s.button_appearance,
            c = s.button_label,
            u = s.link,
            p = St(i, function () {
              r(a, { link: u }), n && null != u && u.link_id && n(u)
            })
          return s
            ? d.createElement(
                H.ZP,
                {
                  onPress: p,
                  size: l.preferred_size ? (0, W.Yr)(l.preferred_size) : 'medium',
                  style: ue.button,
                  type: l.style ? (0, W.$1)(l.style) : 'brandFilled',
                },
                c.text,
              )
            : null
        },
      }
      var ft = (function () {
        function e(t) {
          ;(0, o.Z)(this, e), (this.registry = t)
        }
        return (
          (0, i.Z)(e, [
            {
              key: 'hasConfig',
              value: function value(e) {
                return e in this.registry
              },
            },
            {
              key: 'getConfig',
              value: function value(e) {
                return this.hasConfig(e) ? this.registry[e] : null
              },
            },
          ]),
          e
        )
      })()
      var _t = ft
      var vt = v.Z.create(function (e) {
        return {
          fullBleedTop: {
            marginHorizontal: '-'.concat(e.spaces.space32),
            height: 'initial',
            width: 'initial',
            marginBottom: e.spaces.space20,
          },
          fullWidth: { marginHorizontal: 0, height: 'initial', width: 'initial', marginBottom: e.spaces.space20 },
          modalFullBleedTop: {
            marginHorizontal: '-'.concat(e.spaces.space80),
            height: 'initial',
            width: 'initial',
            marginBottom: e.spaces.space20,
          },
        }
      })
      var gt = {
        render: function render(e) {
          var t = e.value_data.image_data,
            n = d.useContext(_.Z).isModal,
            a = t.image,
            r = t.image_type,
            o = a.image_info,
            i = o.alt_text,
            s = o.height,
            l = o.width,
            c = ae.Z.exact(l / s),
            u = d.useMemo(
              function () {
                var e
                switch (r) {
                  case L.__.Icon:
                    return {
                      marginHorizontal: 'auto',
                      height: (e = 10 * v.Z.theme.lineHeightsPx.body),
                      width: (e * l) / s,
                    }
                  case L.__.FullBleedTop:
                    return n ? vt.modalFullBleedTop : vt.fullBleedTop
                  default:
                    return vt.fullWidth
                }
              },
              [n, r, s, l],
            )
          return d.createElement(
            p.Z,
            { style: u },
            d.createElement(ne.Z, { accessibilityLabel: i || '', aspectMode: c, image: o }),
          )
        },
      }
      var bt = n(273487),
        kt = v.Z.create(function (e) {
          return {
            infoItemContainerStyle: { paddingHorizontal: 0 },
            image: { display: 'flex', flexDirection: 'row' },
            text: { display: 'flex', flexDirection: 'column' },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.text },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space20 },
            imageDecorationContainer: { marginEnd: e.spaces.space20 },
          }
        })
      var yt = {
        render: function render(e) {
          var t,
            n,
            a = e.value_data.info_item_data,
            r = a.primary_text,
            o = a.secondary_text,
            i = a.icon,
            s = a.image,
            l = d.useMemo(function () {
              return [kt.icon, kt.decorationContainer]
            }, [])
          if (s) {
            var c = (0, W.cR)(s)
            t = d.createElement(bt.Z, {
              accessibilityLabel: 'ocf-info-item-image',
              source: c,
              style: kt.imageDecorationContainer,
            })
          }
          i && (n = d.createElement(he, { icon: i.icon, style: l }))
          var u = i ? n : s ? t : null,
            h = i ? 'ocf-info-item-with-icon' : s ? 'ocf-info-item-with-image' : 'ocf-info-item',
            m = d.useMemo(
              function () {
                return [{ label: r.text, description: null == o ? void 0 : o.text, decoration: u }]
              },
              [u, r, o],
            )
          return d.createElement(
            p.Z,
            { style: s ? kt.image : null },
            d.createElement(U.Z, { accessibilityLabel: h, containerStyle: kt.infoItemContainerStyle, items: m }),
          )
        },
      }
      var Zt = v.Z.create(function (e) {
        return { marginBottom: { marginBottom: e.spaces.space8 } }
      })
      var wt = {
        render: function render(e) {
          var t,
            n,
            r = ct(),
            o = r.onNavigate,
            i = r.subtaskInputs
          if (
            void 0 ===
            (null === (t = e.value_data) || void 0 === t || null === (n = t.static_text_data) || void 0 === n
              ? void 0
              : n.primary_text)
          )
            return null
          var s = e.value_data.static_text_data,
            l = s.primary_text,
            c = s.style
          return d.createElement(
            Y,
            (0, a.Z)(
              {},
              l,
              { onNavigate: o, subtaskInputs: i },
              (function (e) {
                switch (e) {
                  case ot.headerTitle:
                    return { size: 'title2', weight: 'bold', style: Zt.marginBottom }
                  case ot.headerSubtitle:
                    return { color: 'gray700', style: Zt.marginBottom }
                  case ot.sectionTitle:
                    return { size: 'headline1', weight: 'bold', style: Zt.marginBottom }
                  case ot.detailText:
                    return { size: 'subtext2', color: 'gray700', style: Zt.marginBottom }
                  default:
                    return { size: 'body', style: Zt.marginBottom }
                }
              })(c),
            ),
          )
        },
      }
      var xt = n(165502)
      var Ct = new _t({
        action: pt,
        static_text: wt,
        boolean: ht,
        button: mt,
        tweet: {
          render: function render(e) {
            var t = e.value_data.tweet_data
            return d.createElement(xt.Z, { tweet: t.tweet })
          },
        },
        info_item: yt,
        image: gt,
      })
      var It = function It(e) {
        return (0, dt.Z)(e).map(function (e) {
          var t = (0, w.Z)(e, 2),
            n = t[0],
            a = t[1],
            r = a.type,
            o = a.value
          return { key: n, response_data: (0, u.Z)({}, r, { result: o }) }
        })
      }
      function Et(e) {
        var t = e.children,
          n = e.onNavigate,
          a = e.subtaskId,
          o = e.subtaskInputs,
          i = e.updateFlow,
          s = d.useState({}),
          l = (0, w.Z)(s, 2),
          c = l[0],
          p = l[1],
          h = d.useState({}),
          m = (0, w.Z)(h, 2),
          f = m[0],
          _ = m[1]
        d.useLayoutEffect(
          function () {
            p({}), _({})
          },
          [a],
        )
        var v = d.useCallback(
            function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              i(e, (0, r.Z)((0, r.Z)({}, t), {}, { component_responses: It(c) }), n)
            },
            [i, c],
          ),
          g = d.useCallback(function (e, t) {
            _(function (n) {
              return (0, r.Z)((0, r.Z)({}, n), {}, (0, u.Z)({}, e, t))
            })
          }, []),
          b = d.useCallback(function (e) {
            _(function (t) {
              t[e]
              var n = (0, j.Z)(t, [e].map(ut.Z))
              return (0, r.Z)({}, n)
            })
          }, []),
          k = d.useMemo(
            function () {
              return {
                componentRegistry: Ct,
                settings: c,
                subtaskId: a,
                callbacks: f,
                registerCallback: g,
                removeCallback: b,
                setSettings: p,
                subtaskInputs: o,
                updateFlow: v,
                onNavigate: n,
              }
            },
            [c, a, o, f, g, b, v, n],
          )
        return d.createElement(lt.Provider, { value: k }, t)
      }
      function St(e, t) {
        var n = d.useContext(lt).callbacks[e]
        return d.useCallback(
          function () {
            for (var e, a = arguments.length, r = new Array(a), o = 0; o < a; o++) {
              r[o] = arguments[o]
            }
            Promise.resolve(null !== (e = null == n ? void 0 : n()) && void 0 !== e && e)
              .then(function (e) {
                e || t.apply(void 0, r)
              })
              ['catch'](function () {
                return t.apply(void 0, r)
              })
          },
          [n, t],
        )
      }
      var Tt = function Tt(e) {
        var t = ct().componentRegistry,
          n = e.components,
          a = e.style
        return void 0 === n || n.length < 1
          ? null
          : d.createElement(
              p.Z,
              { style: a },
              n.map(function (e, n) {
                var a = null == t ? void 0 : t.getConfig(e.value_type)
                return a ? d.createElement(d.Fragment, { key: n }, a.render(e)) : null
              }),
            )
      }
      var At = n(431165),
        Pt = n(378705),
        Ft = n(721783),
        Nt = b().d2fb334c
      var Dt = v.Z.create(function (e) {
        return {
          iconContainer: {
            alignItems: 'center',
            alignSelf: 'stretch',
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            minWidth: e.spaces.space32,
          },
          icon: { color: e.colors.brandColor, flexGrow: 1, height: '1.75rem' },
        }
      })
      var Bt = function Bt(e) {
        var t = e.backButtonType,
          n = e.componentCollection,
          a = e.hideBackButton,
          r = e.hideLogo,
          o = e.onBackPress,
          i = n.center_navbar_components,
          s = n.header_components,
          l = n.left_navbar_components,
          c = n.right_navbar_components,
          u = d.useMemo(
            function () {
              var e = null == s ? void 0 : s[0]
              return (
                'image' === (null == e ? void 0 : e.value_type) &&
                (null == e ? void 0 : e.value_data.image_data.image_type) === L.__.FullBleedTop
              )
            },
            [s],
          ),
          h = d.useMemo(
            function () {
              return a || !o || (void 0 !== l && l.length > 0)
            },
            [a, l, o],
          ),
          m = d.useMemo(
            function () {
              return l && l.length > 0
                ? d.createElement(Tt, { components: l })
                : h || !o
                ? void 0
                : d.createElement(At.Z, { backButtonType: t, onClick: o, onMedia: u })
            },
            [l, h, o, t, u],
          ),
          f = d.useMemo(
            function () {
              return i && i.length > 0 ? d.createElement(Tt, { components: i }) : null
            },
            [i],
          ),
          _ = d.useMemo(
            function () {
              return d.createElement(Tt, { components: c })
            },
            [c],
          ),
          v = d.useMemo(
            function () {
              if (!r && !u && null === f)
                return d.createElement(
                  p.Z,
                  { style: Dt.iconContainer },
                  d.createElement(Ft['default'], { accessibilityLabel: Nt, style: Dt.icon }),
                )
            },
            [r, u, f],
          )
        return d.createElement(Pt.Z, {
          centeredLogo: v,
          leftControl: m,
          middleControl: f,
          position: u ? 'absolute' : void 0,
          rightControl: _,
          withBackground: !1,
        })
      }
      var Lt
      var Ot = v.Z.create(function (e) {
          return {
            padding: { paddingHorizontal: e.spaces.space80, paddingBottom: e.spaces.space20 },
            paddingCompact: { paddingHorizontal: e.spaces.space32, paddingBottom: e.spaces.space20 },
            marginTop: { marginTop: e.spaces.space20 },
            container: { display: 'flex', flexGrow: 2, flexShrink: 1, flexBasis: '100%', maxWidth: '600px' },
            contentContainer: { flexGrow: 1, display: 'flex' },
            contentContainerMargin: { marginVertical: e.spaces.space16 },
            alignTop: { justifyContent: 'flex-start' },
            alignCenter: { justifyContent: 'center' },
            alignBottom: { justifyContent: 'flex-end' },
            shadowTop: { boxShadow: e.boxShadows.xSmall },
            root: { flexGrow: 1 },
          }
        }),
        Vt =
          ((Lt = {}),
          (0, u.Z)(Lt, it.TOP, Ot.alignTop),
          (0, u.Z)(Lt, it.CENTER, Ot.alignCenter),
          (0, u.Z)(Lt, it.BOTTOM, Ot.alignBottom),
          Lt)
      var Rt = function Rt(e) {
        var t = d.useContext(_.Z).isModal,
          n = d.useContext(lt),
          a = n.registerCallback,
          r = n.removeCallback,
          o = e.children,
          i = e.componentCollection,
          s = e.onPrimaryAction,
          l = e.onSecondaryAction,
          c = e.backButtonType,
          u = e.hideAppBar,
          h = e.hideBackButton,
          m = e.hideLogo,
          f = e.onBackPress,
          v = (function () {
            var e = d.useState(),
              t = (0, w.Z)(e, 2),
              n = t[0],
              a = t[1],
              r = d.useState(!1),
              o = (0, w.Z)(r, 2),
              i = o[0],
              s = o[1],
              l = d.useCallback(
                function (e) {
                  if (e instanceof HTMLElement) {
                    var t = Math.abs(e.scrollHeight - e.scrollTop - e.clientHeight) < 2
                    s(!t)
                  }
                },
                [s],
              ),
              c = d.useCallback(
                function (e) {
                  return l(e.currentTarget)
                },
                [l],
              )
            return (
              d.useEffect(
                function () {
                  return (
                    l(null == n ? void 0 : n.getViewport()),
                    null == n
                      ? void 0
                      : n.addRectChangeListener(function () {
                          var e = null == n ? void 0 : n.getViewport()
                          l(e)
                        })
                  )
                },
                [n, l],
              ),
              { hasHiddenContent: i, onViewportSet: a, onScroll: c }
            )
          })(),
          g = v.hasHiddenContent,
          b = v.onScroll,
          k = v.onViewportSet,
          y = i.content_vertical_alignment,
          Z = void 0 === y ? it.TOP : y,
          x = t ? Ot.padding : Ot.paddingCompact,
          C = d.useMemo(
            function () {
              var e,
                t = null === (e = i.header_components) || void 0 === e ? void 0 : e[0],
                n =
                  'image' === (null == t ? void 0 : t.value_type) &&
                  (null == t ? void 0 : t.value_data.image_data.image_type) === L.__.FullBleedTop
              return [Ot.container, x, !n && Ot.marginTop]
            },
            [i, x],
          ),
          I = o || i.content_header_components || i.content_footer_components,
          E = d.useMemo(
            function () {
              return [Ot.contentContainer, Vt[Z], !!I && Ot.contentContainerMargin]
            },
            [I, Z],
          ),
          S = d.useMemo(
            function () {
              return [x, g && Ot.shadowTop]
            },
            [x, g],
          ),
          T = d.useMemo(
            function () {
              return d.createElement(Tt, { components: i.pinned_footer_components, style: S })
            },
            [S, i.pinned_footer_components],
          )
        return (
          d.useEffect(
            function () {
              return (
                i.primary_next_identifier && s && a(i.primary_next_identifier, s),
                i.primary_skip_identifier && l && a(i.primary_skip_identifier, l),
                function () {
                  i.primary_next_identifier && r(i.primary_next_identifier),
                    i.primary_skip_identifier && r(i.primary_skip_identifier)
                }
              )
            },
            [a, r, s, l, i],
          ),
          d.createElement(
            p.Z,
            { style: Ot.root },
            u
              ? void 0
              : d.createElement(Bt, {
                  backButtonType: c,
                  componentCollection: i,
                  hideBackButton: h,
                  hideLogo: m,
                  onBackPress: f,
                }),
            d.createElement(
              st.l,
              { control: T, onScroll: b, onViewportSet: k },
              d.createElement(
                p.Z,
                { style: C },
                d.createElement(Tt, { components: i.header_components }),
                d.createElement(
                  p.Z,
                  { style: E },
                  d.createElement(Tt, { components: i.content_header_components }),
                  o,
                  d.createElement(Tt, { components: i.content_footer_components }),
                ),
                d.createElement(Tt, { components: i.footer_components }),
              ),
            ),
          )
        )
      }
      var Mt = v.Z.create(function (e) {
        return { root: { minHeight: 'calc('.concat(e.spaces.space64, ' * 4)'), paddingBottom: v.Z.iPhoneOffsetBottom } }
      })
      var Ut = function Ut(e) {
        var t = d.useContext(_.Z).isModal,
          n = e.children,
          a = e.componentCollection,
          r = e.coverType,
          o = e.hideAppBar,
          i = e.onBackPress,
          s = e.onPrimaryAction,
          l = e.onSecondaryAction,
          c = d.useMemo(
            function () {
              return t ? rt.CA[rt.Cg.fixed] : Mt.root
            },
            [t],
          ),
          u = d.useMemo(
            function () {
              return 'half' === r ? 'bottom' : 'full'
            },
            [r],
          ),
          p = !t && 'bottom' === u
        return d.createElement(
          Le.Z,
          { enableMaskForDismiss: p, onMaskClick: i, style: c, type: u, withMask: !0 },
          d.createElement(
            Rt,
            {
              backButtonType: 'back',
              componentCollection: a,
              hideAppBar: o || p,
              onBackPress: i,
              onPrimaryAction: s,
              onSecondaryAction: l,
            },
            n,
          ),
        )
      }
      var zt = function zt(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ot.headerTitle
        return {
          value_identifier: e,
          value_type: 'static_text',
          value_data: { static_text_data: { primary_text: { text: t }, style: n } },
        }
      }
      function jt(e) {
        var t = e.header_image,
          n = e.primary_text,
          a = e.secondary_text,
          r = []
        return (
          t &&
            r.push(
              (function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L.__.FullWidth
                return {
                  value_identifier: e,
                  value_type: 'image',
                  value_data: { image_data: { image: t, image_type: n } },
                }
              })('header-image', t.image, t.image_type),
            ),
          r.push(zt('heading', n.text, ot.headerTitle)),
          a && r.push(zt('subheading', a.text, ot.headerSubtitle)),
          r
        )
      }
      var Ht = b().c3d89aca
      var Gt = v.Z.create(function (e) {
        return { radioContainer: { paddingHorizontal: 0 } }
      })
      var Wt = function Wt(e) {
          var t,
            n = e.choices,
            a = e.header,
            r = e.nextLink,
            o = e.onDismiss,
            i = e.onSelect,
            s = d.useState(null === (t = n[0]) || void 0 === t ? void 0 : t.id),
            l = (0, w.Z)(s, 2),
            c = l[0],
            u = l[1],
            p = d.useMemo(
              function () {
                var e, t, n
                return {
                  header_components: jt(a),
                  footer_components: [
                    ((t = 'primary_select_next'),
                    (n = {
                      button_label: { text: null !== (e = null == r ? void 0 : r.label) && void 0 !== e ? e : Ht },
                      link: r,
                      button_appearance: { style: L.ZJ.Primary, preferred_size: L.qE.Large },
                    }),
                    { value_identifier: t, value_type: 'button', value_data: { button_data: n } }),
                  ],
                  primary_next_identifier: 'primary_select_next',
                }
              },
              [r, a],
            ),
            h = d.useCallback(
              function () {
                return i(c), !0
              },
              [i, c],
            )
          return d.createElement(
            Ut,
            { componentCollection: p, coverType: 'half', onBackPress: o, onPrimaryAction: h },
            d.createElement(tt.Z, {
              name: 'primary-selection',
              onChange: function onChange(e, t) {
                return u(t)
              },
              options: n.map(function (e) {
                var t = e.id,
                  n = e.subtext
                return {
                  label: e.text.text,
                  value: t,
                  description: null == n ? void 0 : n.text,
                  containerStyle: Gt.radioContainer,
                }
              }),
              value: c,
            }),
          )
        },
        qt = 'ChoiceSelectionInput',
        $t = 'ChoiceSelectionNextButton',
        Kt = 'ChoiceSelectionSkipButton'
      var Yt = (function (e) {
        ;(0, l.Z)(n, e)
        var t = (0, c.Z)(n)
        function n() {
          var e, a, r, i
          ;(0, o.Z)(this, n)
          for (var l = arguments.length, c = new Array(l), p = 0; p < l; p++) {
            c[p] = arguments[p]
          }
          return (
            (i = t.call.apply(t, [this].concat(c))),
            (0, u.Z)((0, s.Z)(i), 'state', {
              selectedChoices:
                null !==
                  (e =
                    null !==
                      (a = (0, W.OG)(i.props.subtaskInputs, {
                        key: 'selected_choices',
                        subtask_id: i.props.subtaskId,
                      })) && void 0 !== a
                      ? a
                      : i.props.subtask.selected_choices) && void 0 !== e
                  ? e
                  : [],
              prevSubtaskId: i.props.subtaskId,
              searchText: '',
              numToShow: null === (r = i.props.subtask.show_more) || void 0 === r ? void 0 : r.initial_to_show,
              displayPrimarySelection: !1,
              primaryChoice: void 0,
            }),
            (0, u.Z)((0, s.Z)(i), '_handlePrimarySelection', function (e) {
              i.setState({ primaryChoice: e, displayPrimarySelection: !1 }, i._handleNextButtonClick)
            }),
            (0, u.Z)((0, s.Z)(i), '_handleCancelButtonClick', function () {
              var e = i.props,
                t = e.onNavigate,
                n = e.subtask.skip_link,
                a = e.subtaskId,
                r = e.updateFlow
              n && (r(a, { link: n.link_id }), t(n))
            }),
            (0, u.Z)((0, s.Z)(i), '_handleNextButtonClick', function () {
              var e = i.props,
                t = e.onNavigate,
                n = e.subtask,
                a = n.next_link,
                r = n.primary_selection,
                o = e.subtaskId,
                s = e.updateFlow,
                l = i.state,
                c = l.primaryChoice,
                u = l.selectedChoices
              void 0 !== r && void 0 === c && u.length > 1
                ? i.setState({ displayPrimarySelection: !0 })
                : a &&
                  (s(o, {
                    link: a.link_id,
                    selected_choices: u,
                    primary_choice: void 0 !== r ? (null != c ? c : u[0]) : void 0,
                  }),
                  t(a))
            }),
            (0, u.Z)((0, s.Z)(i), '_renderShowMore', function (e) {
              var t = i.props.subtask.show_more,
                n = i.state.numToShow
              return void 0 === t || void 0 === n || n >= e.length
                ? null
                : d.createElement(Qe.Z, { color: 'primary', label: t.text, onPress: i._handleShowMore })
            }),
            (0, u.Z)((0, s.Z)(i), '_handleShowMore', function () {
              var e = i.state.numToShow,
                t = i.props.subtask.show_more
              void 0 !== t && void 0 !== e && i.setState({ numToShow: e + t.extra_to_show })
            }),
            (0, u.Z)((0, s.Z)(i), '_handleRadioChange', function (e, t) {
              i.setState({ selectedChoices: [t] })
            }),
            (0, u.Z)((0, s.Z)(i), '_handleSearchTextChange', function (e) {
              i.setState({ searchText: e.target.value })
            }),
            (0, u.Z)((0, s.Z)(i), '_handleSearchTextClear', function () {
              i.setState({ searchText: '' })
            }),
            (0, u.Z)((0, s.Z)(i), '_onCheckboxChange', function (e) {
              return function (t) {
                i._handleMultiSelection(e, t)
              }
            }),
            i
          )
        }
        return (
          (0, i.Z)(
            n,
            [
              {
                key: 'render',
                value: function value() {
                  var e = this,
                    t = this.props,
                    n = t.onNavigate,
                    r = t.passthroughOcfScreenProps,
                    o = t.subtask,
                    i = o.choices,
                    s = o.detail_text,
                    l = o.header,
                    c = o.next_link,
                    u = o.primary_selection,
                    h = o.primary_text,
                    m = o.search,
                    f = o.secondary_text,
                    _ = o.skip_link,
                    v = t.subtaskInputs,
                    g = this.state,
                    b = g.displayPrimarySelection,
                    k = g.searchText,
                    y = g.selectedChoices
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, r, {
                      footer: d.createElement(te, {
                        actionDisabled: !this._verifyBothTypesValidity(),
                        actionLabel: null == c ? void 0 : c.label,
                        actionTestID: $t,
                        onAction: this._handleNextButtonClick,
                        onSecondaryAction: this._handleCancelButtonClick,
                        secondaryActionLabel: null == _ ? void 0 : _.label,
                        secondaryActionTestID: Kt,
                      }),
                      header: d.createElement(ke, {
                        header: l,
                        onNavigate: n,
                        primaryTextProp: h,
                        secondaryTextProp: f,
                        subtaskInputs: v,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    m &&
                      d.createElement(et.Z, {
                        Icon: nt['default'],
                        autoFocus: m.is_focused,
                        isCompact: !0,
                        onChange: this._handleSearchTextChange,
                        onClear: this._handleSearchTextClear,
                        placeholder: m.hint_text,
                        style: en.searchBox,
                        testID: qt,
                        value: k,
                        withClearButton: !0,
                      }),
                    d.createElement(p.Z, { style: en.choicesContainer }, this._renderChoices()),
                    s && d.createElement(Y, (0, a.Z)({}, s, { onNavigate: n, subtaskInputs: v })),
                    b && u
                      ? d.createElement(Wt, {
                          choices:
                            null == i
                              ? void 0
                              : i.filter(function (e) {
                                  var t = e.id
                                  return y.includes(t)
                                }),
                          header: u.header,
                          nextLink: c,
                          onDismiss: function onDismiss() {
                            return e.setState({ displayPrimarySelection: !1 })
                          },
                          onNavigate: n,
                          onSelect: this._handlePrimarySelection,
                          subtaskInputs: v,
                        })
                      : null,
                  )
                },
              },
              {
                key: '_renderCheckboxQuestion',
                value: function value(e) {
                  var t = this.props,
                    n = t.onNavigate,
                    r = t.subtaskInputs,
                    o = this.state.selectedChoices.indexOf(e.id) > -1,
                    i = e.text
                      ? d.createElement(Y, (0, a.Z)({}, e.text, { onNavigate: n, subtaskInputs: r, weight: 'bold' }))
                      : null,
                    s = e.subtext ? d.createElement(Y, (0, a.Z)({}, e.subtext, { subtaskInputs: r })) : null
                  return e.text
                    ? d.createElement(
                        p.Z,
                        { key: e.id, style: en.checkboxRow },
                        d.createElement(Je.Z, {
                          checked: o,
                          helpText: s,
                          label: i,
                          onChange: this._onCheckboxChange(e.id),
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderChoices',
                value: function value() {
                  var e = this,
                    t = this.props,
                    n = t.onNavigate,
                    r = t.subtask,
                    o = t.subtaskInputs,
                    i = r.search,
                    s = r.selection_type,
                    l = r.style,
                    c = this.state,
                    u = c.numToShow,
                    h = (function (e, t) {
                      var n = e.choices,
                        a = e.search,
                        r = e.sections
                      if (a && r && r.length && !t) {
                        var o = r
                          .flatMap(function (e) {
                            return e.item_ids
                          })
                          .filter(function (e) {
                            return 'string' == typeof e
                          })
                        if (o.length) {
                          var i = (0, at.Z)(o)
                          return {
                            choices: n.filter(function (e) {
                              return i.has(e.id)
                            }),
                            hasMore: !0,
                          }
                        }
                      }
                      if (a && t)
                        return (function (e, t) {
                          var n = Qt(t),
                            a = e.filter(function (e) {
                              return Qt(e.text.text).includes(n)
                            })
                          if (a.length > 50) return { choices: a.slice(0, 50), hasMore: !0 }
                          return { choices: a, hasMore: !1 }
                        })(n, t)
                      return { choices: n, hasMore: !1 }
                    })(r, c.searchText),
                    m = h.choices,
                    f = void 0 === u ? m : m.slice(0, u),
                    _ = this._renderShowMore(m)
                  if (0 === f.length && i)
                    return d.createElement(Y, (0, a.Z)({}, i.no_results_text, { onNavigate: n, subtaskInputs: o }))
                  if ('boxed' === l)
                    return 'single_select' === s
                      ? d.createElement(
                          p.Z,
                          { style: en.tileContainer },
                          d.createElement(Xe.Z, {
                            name: 'single-choice',
                            onChange: this._handleRadioChange,
                            options: f.map(function (e) {
                              var t = e.id,
                                n = e.subtext
                              return {
                                value: t,
                                label: e.text.text,
                                helpText: d.createElement(Y, (0, a.Z)({}, n, { subtaskInputs: o })),
                              }
                            }),
                            value: this.state.selectedChoices[0],
                          }),
                          _,
                        )
                      : null
                  switch (s) {
                    case 'multi_select':
                      return d.createElement(
                        d.Fragment,
                        null,
                        f.map(function (t) {
                          return e._renderCheckboxQuestion(t)
                        }),
                        _,
                      )
                    case 'single_select':
                      return d.createElement(
                        d.Fragment,
                        null,
                        d.createElement(tt.Z, {
                          name: 'single-choice',
                          onChange: this._handleRadioChange,
                          options: f.map(function (e) {
                            var t = e.id,
                              n = e.subtext
                            return {
                              label: e.text.text,
                              value: t,
                              description: null == n ? void 0 : n.text,
                              containerStyle: en.radioRow,
                            }
                          }),
                          value: this.state.selectedChoices[0],
                        }),
                        _,
                      )
                    default:
                      return null
                  }
                },
              },
              {
                key: '_verifyBothTypesValidity',
                value: function value() {
                  var e = this.props.subtask,
                    t = e.selection_type,
                    n = this.state.selectedChoices
                  if (e && t) {
                    if ('multi_select' === t) return this._verifyMultiChoiceValidity(n)
                    if ('single_select' === t) return 1 === n.length
                  }
                },
              },
              {
                key: '_verifyMultiChoiceValidity',
                value: function value(e) {
                  var t = this.props.subtask.next_link_options
                  if (t) {
                    var n = t.max_enable_count,
                      a = t.min_enable_count,
                      r = e.length
                    return !(a && r < a) && !(n && r > n)
                  }
                  return !1
                },
              },
              {
                key: '_handleMultiSelection',
                value: function value(e, t) {
                  var n,
                    a = this.state.selectedChoices
                  ;(n =
                    a && a.includes(e)
                      ? a.filter(function (t) {
                          return t !== e
                        })
                      : a.concat([e])),
                    this.setState({ selectedChoices: n })
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function value(e, t) {
                  return e.subtaskId !== t.prevSubtaskId ? { selectedChoices: [], prevSubtaskId: e.subtaskId } : null
                },
              },
            ],
          ),
          n
        )
      })(d.Component)
      function Qt(e) {
        return e.toLowerCase().normalize('NFD')
      }
      var Xt,
        Jt,
        en = v.Z.create(function (e) {
          return {
            searchBox: { marginBottom: e.spaces.space16 },
            checkboxRow: { paddingVertical: e.spaces.space12 },
            choicesContainer: { marginBottom: e.spaces.space16 },
            cursor: { cursor: 'pointer' },
            tileContainer: { marginTop: e.spaces.space12 },
            radioRow: { paddingStart: 0, paddingBottom: e.spaces.space16, paddingEnd: e.spaces.space16 },
          }
        }),
        tn = (n(74069), n(24949)),
        nn = n(739581),
        an = n(467935),
        rn = n(799629),
        on = n(157659),
        sn = function sn(e) {
          return function (t, n) {
            if ('single_sign_on' !== ln(t, n)) {
              var a = n.location.query[e]
              return Array.isArray(a) ? a[0] : a
            }
          }
        },
        ln = function ln(e, t) {
          return t.flowName || t.location.pathname.slice(t.match.path.length)
        },
        cn = sn('country_code'),
        un = (0, tn.P1)(
          ((Xt = 'input'),
          (Jt = {}),
          function (e, t) {
            return (t.location.state && t.location.state[Xt]) || Jt
          }),
          sn('input_flow_data'),
          W.Rs,
        ),
        dn = sn('return_path'),
        pn = sn('is_native'),
        hn = sn('test_country_code'),
        mn = sn('target_user_id'),
        fn = (0, tn.P1)(
          function (e, t) {
            return sn('overrides')(e, t)
          },
          function (e) {
            return (0, W.jb)(e)
          },
        )
      var _n = (0, We.Z)()
        .propsFromState(function () {
          return {
            currentSubtask: R.jv,
            previouslySubmittedSubtaskId: R.zj,
            countryCode: cn,
            debugOverrides: fn,
            isNative: pn,
            testCountryCode: hn,
            flowName: ln,
            inputFlowData: un,
            returnPath: dn,
            subtasks: R.B7,
            flowToken: R.cu,
            fetchStatus: R.UD,
            previousNavigableSubtaskId: R.Du,
            subtaskInputs: R.$B,
            failureMessage: R.or,
            shouldAbort: R.W2,
            shouldEndFlow: R.uz,
            startLocation: R.Lg,
            submitFailed: R.li,
            targetUserId: mn,
            loginReturnPath: an.V_,
            language: an.VT,
          }
        })
        .propsFromActions(function (e) {
          var t = e.ocfModule
          return {
            addToast: rn.fz,
            callInteractiveSpinnerPath: R.WP,
            callOnboardingPath: R.R2,
            clearFlow: t.clearFlow,
            createLocalApiErrorHandler: (0, x.createLocalApiErrorHandlerWithContextFactory)('OCF_FLOW'),
            removeContacts: R.tY,
            fetchTemporaryPassword: R.n8,
            fetchUsers: on.ZP.fetchMany,
            navigateSubtask: R.z_,
            startFlow: t.startFlow,
            submitFlow: t.submitFlow,
            updateFlow: t.updateFlow,
            googleAnalyticsPageView: nn.googleAnalyticsPageView,
            googleAnalyticsSendEvent: nn.googleAnalyticsSendEvent,
            verifyCredentials: an.TK,
          }
        })
        .withAnalytics({ page: 'onboarding' })
      var vn = n(460673),
        gn = function gn(e) {
          return function (t, n, a) {
            return a.api.Contacts.uploadAddressBook(e)
          }
        }
      var bn = (0, We.Z)().propsFromActions(function () {
        return {
          createLocalApiErrorHandler: (0, x.createLocalApiErrorHandlerWithContextFactory)('CONTACTS_SYNC'),
          uploadAddressBook: gn,
        }
      })
      var kn = (function (e) {
        ;(0, l.Z)(n, e)
        var t = (0, c.Z)(n)
        function n() {
          var e
          ;(0, o.Z)(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
            r[i] = arguments[i]
          }
          return (
            (e = t.call.apply(t, [this].concat(r))),
            (0, u.Z)((0, s.Z)(e), '_handleCtaClick', function (t) {
              var n = e.props,
                a = n.onNavigate,
                r = n.subtaskId
              ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
            }),
            (0, u.Z)((0, s.Z)(e), '_handlePrimaryActionClick', function () {
              try {
                window.navigator.contacts
                  .select(['name', 'email', 'tel'], { multiple: !0 })
                  .then(e._handleContactResults)
              } catch (t) {
                ;(0, N.ZP)(t), e._handleSecondaryActionClick()
              }
            }),
            (0, u.Z)((0, s.Z)(e), '_handleContactResults', function (t) {
              var n = e.props,
                a = n.analytics,
                r = n.createLocalApiErrorHandler,
                o = n.uploadAddressBook,
                i = t.map(function (e) {
                  var t = e.email,
                    n = e.name,
                    a = e.tel
                  return { name: n[0] || '', email_addresses: t, phone_numbers: a }
                })
              if (0 === i.length) return a.scribeAction('cancel')
              a.scribe({ action: 'success', data: { event_value: i.length } }),
                o({ contacts: i })['catch'](r()),
                e._handleCtaClick(e.props.subtask.next_link)
            }),
            (0, u.Z)((0, s.Z)(e), '_handleSecondaryActionClick', function () {
              var t = e.props.subtask.skip_link
              t && e._handleCtaClick(t)
            }),
            e
          )
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'componentDidMount',
              value: function value() {
                ;('contacts' in navigator && 'ContactsManager' in window) || this._handleSecondaryActionClick()
              },
            },
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.onNavigate,
                  n = e.passthroughOcfScreenProps,
                  r = e.subtask,
                  o = e.subtaskInputs,
                  i = r.detail_text
                    ? d.createElement(Y, (0, a.Z)({}, r.detail_text, { onNavigate: t, subtaskInputs: o }))
                    : null
                return d.createElement(
                  ye.Z,
                  (0, a.Z)({ hideLogo: !0 }, n),
                  d.createElement(Fe.Z, {
                    actionLabel: r.next_link.label || '',
                    footer: i,
                    headline: r.primary_text || '',
                    onAction: this._handlePrimaryActionClick,
                    onClose: k.Z,
                    onTertiaryAction: this._handleSecondaryActionClick,
                    subtext: '',
                    tertiaryActionLabel: (r.skip_link || {}).label,
                    withCloseButton: !1,
                  }),
                )
              },
            },
          ]),
          n
        )
      })(d.Component)
      var yn = (0, vn.Z)(bn(kn), { element: 'contacts_sync' })
      var Zn = n(107333),
        wn = function wn(e, t) {
          return Array.isArray(t.location.query.error) ? t.location.query.error[0] : t.location.query.error
        },
        xn = function xn(e, t) {
          return !!t.location.query.state
        }
      var Cn = (0, We.Z)()
        .propsFromState(function () {
          return { importError: wn, startImport: xn }
        })
        .propsFromActions(function () {
          return {
            createLocalApiErrorHandler: (0, x.createLocalApiErrorHandlerWithContextFactory)('EMAIL_CONTACTS_SYNC'),
            importStatus: R.YU,
            scribeAction: nn.DEPRECATED_scribeAction,
            syncContacts: R.Wl,
          }
        })
      var In = b().cea71014,
        En = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            return (
              (0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_startContactImports', function (e) {
                a._scribeOAuthAction('accepted')
                var t = a.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.syncContacts)(e)
                  .then(function (e) {
                    return a._pollImportStatus()
                  })
                  ['catch'](function (e) {
                    n()(e), a.setState({ importFinished: !0 })
                  })
              }),
              (0, u.Z)((0, s.Z)(a), '_handlePrimaryActionClick', function () {
                var e = a.props.subtask,
                  t = e.authorization_url
                if (e.open_in_new_tab) {
                  var n = window.innerWidth,
                    r = 'width=500,height=500,top=0,left='.concat(n - 500, ',toolbar=no,location=yes')
                  window.open(t, 'twitter_oauth', r).focus()
                } else B.ZP.navigateTo(t)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleTertiaryActionClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow,
                  i = n.skip_link
                o(r, { link: i.link_id }), t(i)
              }),
              (0, u.Z)((0, s.Z)(a), '_scribeOAuthAction', function (e) {
                ;(0,
                a.props
                  .scribeAction)({ page: 'onboarding', section: 'email_contacts_sync', component: 'oauth_prompt', element: 'permission', action: e })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleEvent', function (e) {
                if (e.origin === 'https://'.concat(window.location.hostname)) {
                  var t = (0, r.Z)(
                    { callback_url: 'https://'.concat(window.location.hostname).concat(window.location.pathname) },
                    e.data,
                  )
                  !t.error && t.state && a._startContactImports(t)
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_pollImportStatus', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                if (e > 10) a.setState({ importFinished: !0 })
                else {
                  var t = a.props,
                    n = t.createLocalApiErrorHandler,
                    r = t.importStatus
                  a._timer = setTimeout(function () {
                    r()
                      .then(function (t) {
                        switch (t.status) {
                          case L.$T.Success:
                            a.setState({ importFinished: !0 })
                            break
                          case L.$T.NotFound:
                            a._pollImportStatus(e + 1)
                            break
                          default:
                            a.setState({ importFinished: !0 })
                        }
                      })
                      ['catch'](function (e) {
                        n()(e), a.setState({ importFinished: !0 })
                      })
                  }, 1e3)
                }
              }),
              (a.state = { importFinished: void 0 }),
              (a._navigating = !1),
              window.addEventListener('message', a._handleEvent, !1),
              a
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props,
                    t = e.importError,
                    n = e.location,
                    a = e.onNavigate,
                    r = e.passthroughOcfScreenProps.history,
                    o = e.startImport,
                    i = e.subtask,
                    s = e.subtaskId,
                    l = e.updateFlow
                  this._showLoadingSpinner = o
                  var c = i.decline_link
                  if ('access_denied' === t) this._scribeOAuthAction('declined'), c && (l(s, { link: c.link_id }), a(c))
                  else if (o) {
                    var u = n.query,
                      d = u.error,
                      p = u.state,
                      h = { callback_url: 'https://'.concat(window.location.hostname).concat(n.pathname) }
                    d && 'string' == typeof d && (h.error = d),
                      p && 'string' == typeof p && (h.state = p),
                      r && r.replace(n.pathname),
                      this._startContactImports(h)
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this._timer && clearTimeout(this._timer), window.removeEventListener('message', this._handleEvent, !1)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.subtask,
                    a = e.subtaskId,
                    r = e.updateFlow,
                    o = this.state.importFinished,
                    i = n.next_link
                  !this._navigating && o && ((this._navigating = !0), r(a, { link: i.link_id }), t(i))
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    r = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.accept_text,
                    l = o.detail_text,
                    c = o.primary_text,
                    u = o.secondary_text,
                    p = o.skip_link,
                    h = d.createElement(Y, (0, a.Z)({}, c, { nativeID: oe.Q_, onNavigate: n, subtaskInputs: i })),
                    m = u ? d.createElement(Y, (0, a.Z)({}, u, { onNavigate: n, subtaskInputs: i })) : null,
                    f = l ? d.createElement(Y, (0, a.Z)({}, l, { onNavigate: n, subtaskInputs: i })) : null
                  return this._showLoadingSpinner
                    ? d.createElement(y.Z, {
                        fetchStatus: M.ZP.LOADING,
                        loadingMessage: In,
                        onRequestRetry: k.Z,
                        render: Zn.Z,
                        retryable: !1,
                      })
                    : d.createElement(
                        ye.Z,
                        (0, a.Z)({ hideLogo: !0 }, r),
                        d.createElement(Fe.Z, {
                          actionLabel: s,
                          footer: f,
                          graphic: Ft['default'],
                          graphicStyle: Sn.twitterIcon,
                          headline: h,
                          onAction: this._handlePrimaryActionClick,
                          onClose: k.Z,
                          onTertiaryAction: this._handleTertiaryActionClick,
                          subtext: m,
                          tertiaryActionLabel: p.label,
                          withCloseButton: !1,
                        }),
                        t,
                      )
                },
              },
            ]),
            n
          )
        })(d.Component),
        Sn = v.Z.create(function (e) {
          return { twitterIcon: { color: e.colors.brandColor } }
        })
      var Tn = Cn(En)
      var An = n(594836)
      var Pn = (0, We.Z)()
        .propsFromState(function () {
          return { navigationContext: R.b, verificationSendFailureMessage: R.aR }
        })
        .propsFromActions(function () {
          return {
            createLocalApiErrorHandler: (0, x.createLocalApiErrorHandlerWithContextFactory)(
              'OCF_FLOW_EMAIL_VERIFICATION',
            ),
            getVerificationStatus: R.Ai,
            verifyIdentifier: R['if'],
          }
        })
      var Fn = 'email',
        Nn = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_sendEmailVerificationRequest', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onNavigate,
                  r = e.subtask,
                  o = e.subtaskInputs,
                  i = e.verifyIdentifier,
                  s = (r.email && (0, W.Ds)(o, r.email)) || void 0,
                  l = (r.name && (0, W.Ds)(o, r.name)) || void 0
                return i({ email: s, display_name: l })
                  .then(function (e) {
                    a.setState({ email: s })
                  })
                  ['catch'](function (e) {
                    var o = a.props,
                      i = o.flowName,
                      s = o.verificationSendFailureMessage
                    t(A(i, s || S))(e), n(r.fail_link)
                  })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleCodeUpdated', function (e) {
                a.setState({ pinCode: e.target.value })
              }),
              (0, u.Z)((0, s.Z)(a), '_startStatusPolling', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.getVerificationStatus,
                  r = e.subtask,
                  o = e.subtaskInputs,
                  i = r.email.subtask_data_reference,
                  s = i ? o[i.subtask_id][i.key] : void 0
                a._timer = setTimeout(function () {
                  n({ email: s })
                    .then(function (e) {
                      e.verified
                        ? (a.setState({ pinCode: e.pin_code }), a._clearTimer(), a._handleDoneButtonClick())
                        : (a._clearTimer(), a._startStatusPolling())
                    })
                    ['catch'](function (e) {
                      t()(e), a._clearTimer(), a._startStatusPolling()
                    })
                }, 1e3)
              }),
              (0, u.Z)((0, s.Z)(a), '_clearTimer', function () {
                a._timer && clearTimeout(a._timer)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow,
                  i = a.state,
                  s = i.email
                o(r, { code: i.pinCode, email: s, link: n.next_link.link_id }), t(n.next_link)
              })
            var r = e.subtaskId,
              i = e.subtaskInputs,
              l = (0, W.OG)(i, { key: Fn, subtask_id: r }, '') || ''
            return (a.state = { email: l, pinCode: '' }), a
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  return (
                    this.props.subtask.verification_status_polling_enabled && this._startStatusPolling(),
                    this._sendEmailVerificationRequest()
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this._clearTimer()
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    r = e.subtask,
                    o = e.subtaskInputs,
                    i = r.next_link,
                    s = r.primary_text,
                    l = r.secondary_text,
                    c = d.createElement(
                      Y,
                      (0, a.Z)({}, r.detail_text, {
                        color: 'link',
                        onNavigate: t,
                        style: Dn.detailLink,
                        subtaskInputs: o,
                      }),
                    )
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, n, {
                      footer: d.createElement(te, {
                        actionDisabled: !this.state.pinCode,
                        actionLabel: null == i ? void 0 : i.label,
                        onAction: this._handleDoneButtonClick,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: t,
                        primaryTextProp: s,
                        secondaryTextProp: l,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(An.Z, {
                      autoFocus: !0,
                      helperText: r.detail_text && c,
                      label: r.hint_text,
                      name: 'verfication_code',
                      onChange: this._handleCodeUpdated,
                      style: ue.formTextInput,
                      value: this.state.pinCode,
                    }),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        Dn = v.Z.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        })
      var Bn = Pn(Nn)
      var Ln = n(934509),
        On = n(32307)
      var Vn = 'ocfEnterDateNextLink',
        Rn = 'ocfEnterDateSkipLink'
      var Mn = { day: void 0, month: void 0, year: void 0 },
        Un = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_handleDateChange', function (e) {
                a.setState({ date: e })
              }),
              (0, u.Z)((0, s.Z)(a), '_isCompleteDate', function (e) {
                return !!(e && e.year && e.month && e.day)
              }),
              (0, u.Z)((0, s.Z)(a), '_isDateEmpty', function () {
                var e = a.state.date
                return (0, On.Z)(e, Mn)
              }),
              (0, u.Z)((0, s.Z)(a), '_meetsMinYearRequirement', function (e) {
                var t,
                  n,
                  r = a.props.subtask.valid_interval
                return !(
                  null != r &&
                  null !== (t = r.min) &&
                  void 0 !== t &&
                  t.year &&
                  !(e.year && e.year >= (null == r || null === (n = r.min) || void 0 === n ? void 0 : n.year))
                )
              }),
              (0, u.Z)((0, s.Z)(a), '_meetsMaxYearRequirement', function (e) {
                var t,
                  n,
                  r = a.props.subtask.valid_interval
                return !(
                  null != r &&
                  null !== (t = r.max) &&
                  void 0 !== t &&
                  t.year &&
                  !(e.year && e.year <= (null == r || null === (n = r.max) || void 0 === n ? void 0 : n.year))
                )
              }),
              (0, u.Z)((0, s.Z)(a), '_isDateValid', function () {
                var e = a.state.date
                return a._isCompleteDate(e) && a._meetsMinYearRequirement(e) && a._meetsMaxYearRequirement(e)
              }),
              (0, u.Z)((0, s.Z)(a), '_dateErrorMessage', function () {
                var e = a.state.date
                if (a._isCompleteDate(e)) {
                  var t = a.props.subtask,
                    n = t.max_date_error,
                    r = t.min_date_error,
                    o = a._meetsMinYearRequirement(e)
                  return a._meetsMaxYearRequirement(e)
                    ? o || null == r
                      ? void 0
                      : r.text
                    : null == n
                    ? void 0
                    : n.text
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.next_link,
                  r = e.subtaskId,
                  o = e.updateFlow,
                  i = a.state.date
                i && a._isDateValid() && (o(r, { date: i, link: n.link_id }), t(n))
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              })
            var r = a.props,
              i = r.subtaskId,
              l = r.subtaskInputs,
              c = (0, W.OG)(l, { key: 'date', subtask_id: i }, void 0) || Mn
            return (a.state = { date: c }), a
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e,
                    t,
                    n = this.props,
                    r = n.errorDialog,
                    o = n.onNavigate,
                    i = n.passthroughOcfScreenProps,
                    s = n.subtask,
                    l = n.subtaskInputs,
                    c = s.detail_text,
                    u = s.hint_text,
                    p = s.next_link,
                    h = s.selectable_interval,
                    m = s.skip_link,
                    f = this.state.date,
                    _ = void 0 === f ? {} : f
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, i, {
                      footer: d.createElement(te, {
                        actionDisabled: !this._isDateValid(),
                        actionLabel: (m && this._isDateEmpty()) || null == p ? void 0 : p.label,
                        actionTestID: Vn,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: m && this._isDateEmpty() ? (null == m ? void 0 : m.label) : void 0,
                        secondaryActionTestID: Rn,
                      }),
                      header: d.createElement(ke, {
                        header: s.header,
                        onNavigate: o,
                        subtaskInputs: l,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(Ln.Z, {
                      autofocus: !0,
                      day: _.day,
                      errorMessage: this._dateErrorMessage(),
                      label: u,
                      maxSelectableYear: null == h || null === (e = h.max) || void 0 === e ? void 0 : e.year,
                      minSelectableYear: null == h || null === (t = h.min) || void 0 === t ? void 0 : t.year,
                      month: _.month,
                      onChange: this._handleDateChange,
                      year: _.year,
                    }),
                    c
                      ? d.createElement(Y, (0, a.Z)({}, c, { color: 'gray700', onNavigate: o, subtaskInputs: l }))
                      : null,
                    r,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        zn = (n(345794), n(235193)),
        jn = function jn(e, t) {
          return t.module.selectEntitiesWithFetchStatus(e)
        }
      var Hn = (0, We.Z)()
        .propsFromState(function () {
          return { validity: jn }
        })
        .propsFromActions(function (e) {
          var t = e.module
          return {
            clearValidity: t.clear,
            createLocalApiErrorHandler: (0, x.createLocalApiErrorHandlerWithContextFactory)('VALIDITY_FIELD_CONTEXT'),
            validate: t.validate,
          }
        })
      var Gn = ['value'],
        Wn = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e, a) {
            var i
            ;(0, o.Z)(this, n),
              (i = t.call(this, e, a)),
              (0, u.Z)((0, s.Z)(i), '_setInputRef', function (e) {
                i._input = e
              }),
              (0, u.Z)((0, s.Z)(i), '_handleValueChange', function (e) {
                var t = i.props,
                  n = t.onChange,
                  a = t.validationParams,
                  o = e.target.value.trim()
                i._validateDebounced((0, r.Z)({ value: o }, a)), i.setState({ value: o }), n && n(e)
              }),
              (0, u.Z)((0, s.Z)(i), '_getIsValid', function (e, t) {
                return !!(t && e[t] && e[t].valid)
              })
            var l = e.defaultValue || ''
            return (
              (i.state = { value: l, isValid: i._getIsValid(e.validity, l) }),
              (i._validateDebounced = (0, zn.Z)(function (e) {
                var t = e.value,
                  n = (0, j.Z)(e, Gn)
                return i.props.validate(t, n)['catch'](i.props.createLocalApiErrorHandler())
              }, 500)),
              i
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this.props.clearValidity(), this._validateDebounced.clear(), this.props.onRef(null)
                },
              },
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this,
                    t = this.props,
                    n = t.defaultValue,
                    a = t.validationParams
                  n && this._validateDebounced((0, r.Z)({ value: n }, a)),
                    this.props.onValidityChange(this.state.isValid),
                    this.props.onRef({
                      clear: function clear() {
                        return e.clear()
                      },
                      focus: function focus() {
                        return e.focus()
                      },
                      isValid: function isValid() {
                        return e.isValid()
                      },
                      getValue: function getValue() {
                        return e.getValue()
                      },
                    })
                },
              },
              {
                key: 'UNSAFE_componentWillUpdate',
                value: function value(e, t) {
                  var n = this.props.validity,
                    a = this.state.value
                  if (n !== e.validity || a !== t.value) {
                    var r = this._getIsValid(e.validity, t.value)
                    this.state.isValid !== r && this.setState({ isValid: r })
                  }
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value(e, t) {
                  var n = this.state.value,
                    a = t.isValid !== this.state.isValid,
                    o = !(0, On.Z)(e.validationParams, this.props.validationParams)
                  a
                    ? this.props.onValidityChange(this.state.isValid)
                    : n &&
                      o &&
                      (this.props.clearValidity(),
                      this._validateDebounced((0, r.Z)({ value: n }, this.props.validationParams)))
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.autoComplete,
                    n = e.autoFocus,
                    a = e.editable,
                    r = e.label,
                    o = e.name,
                    i = e.style,
                    s = e.type,
                    l = e.validity,
                    c = this.state.value,
                    u = c && l[c] ? l[c].errorMessage : ''
                  return d.createElement(An.Z, {
                    autoComplete: t,
                    autoFocus: n,
                    editable: a,
                    errorText: u,
                    invalid: !!u,
                    label: r,
                    name: o,
                    onChange: this._handleValueChange,
                    ref: this._setInputRef,
                    style: i,
                    type: s,
                    value: this.state.value,
                  })
                },
              },
              {
                key: 'clear',
                value: function value() {
                  this.setState({ value: '', isValid: !1 })
                },
              },
              {
                key: 'isValid',
                value: function value() {
                  return this.state.isValid
                },
              },
              {
                key: 'getValue',
                value: function value() {
                  return this.state.value
                },
              },
              {
                key: 'focus',
                value: function value() {
                  this._input && this._input.focus()
                },
              },
            ]),
            n
          )
        })(d.Component)
      ;(0, u.Z)(Wn, 'defaultProps', { label: '' })
      var qn = Hn(Wn)
      n(317368), n(524471), n(351172), n(888233), n(621850)
      var $n = n(360917),
        Kn = n.n($n),
        Yn = n(649461),
        Qn = n(829122),
        Xn = n(791191),
        Jn = ['localValidator'],
        ea = function ea(e) {
          return { valid: !0 }
        }
      function ta() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.localValidator,
          n = void 0 === t ? ea : t,
          a = (0, j.Z)(e, Jn),
          o = (0, Qn.ZP)(
            (0, r.Z)(
              {
                customActions: {
                  clear: {
                    reducer: function reducer(e, t) {
                      return {}
                    },
                  },
                },
              },
              a,
            ),
          )
        ;(o.clear = function () {
          return function (e) {
            return e({ type: o.customActionTypes.clear.SUCCESS })
          }
        }),
          (o.validate = function (e, t) {
            return function (a) {
              var r = n(e, t)
              return r.valid ? a(o.fetchOneIfNeeded(e, t)) : (a(o.add((0, u.Z)({}, e, r))), Promise.resolve())
            }
          })
        var i = function i(e) {
            return o.selectState(e).fetchStatus || Kn()
          },
          s = function s(e, t) {
            return (0, Yn.Z)(t, function (t, n) {
              var a = e[n] || {}
              return (0,
              r.Z)((0, r.Z)({}, a), {}, { valid: !!a.valid || t === M.ZP.FAILED, isLoading: t === M.ZP.LOADING })
            })
          }
        return (o.selectEntitiesWithFetchStatus = (0, tn.P1)(o.selectAll, i, s)), Xn.Z.register(o)
      }
      var na = new RegExp('^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$'),
        aa = b().hc72e1fc
      var ra = ta({
        namespace: 'emailValidity',
        fetchOneContext: 'FETCH_EMAIL_VALIDITY',
        fetchOneEndpoint: function fetchOneEndpoint(e) {
          return e.Validity.isEmailAvailable
        },
        fetchOneParams: function fetchOneParams(e, t) {
          var n = (0, w.Z)(e, 1)[0]
          return (0, r.Z)({ email: n }, t)
        },
        localValidator: function localValidator(e) {
          var t = na.test(e)
          return { errorMessage: aa, valid: t }
        },
      })
      var oa = n(213980),
        ia = {
          accessibilityLabel: oa.string,
          accessibilityLiveRegion: (0, oa.oneOf)(['assertive', 'none', 'polite']),
          style: oa.any,
        },
        sa = {
          autoComplete: oa.string,
          autoFocus: oa.bool,
          defaultValue: oa.string,
          editable: oa.bool,
          label: oa.string,
          name: oa.string.isRequired,
          onChange: oa.func,
          onRef: oa.func.isRequired,
          onValidityChange: oa.func.isRequired,
          style: ia.style,
          type: oa.string,
        },
        la =
          ((0, r.Z)(
            (0, r.Z)({}, sa),
            {},
            {
              clearValidity: oa.func.isRequired,
              createLocalApiErrorHandler: oa.func.isRequired,
              module: oa.object.isRequired,
              validate: oa.func.isRequired,
              validity: oa.object.isRequired,
            },
          ),
          ['onRef'])
      var ca = function ca(e) {
        var t = e.onRef,
          n = (0, j.Z)(e, la)
        return d.createElement(qn, (0, a.Z)({ module: ra, onRef: t, type: 'email' }, n))
      }
      n(743108), n(108532)
      var ua = n(2520),
        da = n(744573),
        pa = b().c52be452,
        ha = b().cfd2f35e,
        ma = b().gea6cc1a,
        fa = b().i769e50a,
        _a = b().ec129eb6,
        va = b().f1b5048a,
        ga = b().deaf5b16,
        ba = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
              r[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, u.Z)((0, s.Z)(e), 'state', { showRemoveContactsDialog: !1, disableRemoveContactsButton: !1 }),
              (0, u.Z)((0, s.Z)(e), '_handleRemoveContactsClick', function () {
                e.setState({ showRemoveContactsDialog: !0 })
              }),
              (0, u.Z)((0, s.Z)(e), '_handleRemoveContactsConfirm', function () {
                e.setState({ showRemoveContactsDialog: !1 }), e._handleRemoveContacts()
              }),
              (0, u.Z)((0, s.Z)(e), '_handleRemoveContacts', function () {
                var t = e.props,
                  n = t.addToast,
                  a = t.removeContacts
                a &&
                  a()
                    .then(function () {
                      e.setState({ disableRemoveContactsButton: !0 }), n({ text: _a, withClearButton: !0 })
                    })
                    ['catch'](function () {
                      n({ action: { label: ga, onAction: e._handleRemoveContacts }, text: va, withAutoDismiss: !0 })
                    })
              }),
              (0, u.Z)((0, s.Z)(e), '_handleRemoveContactsCancel', function () {
                e.setState({ showRemoveContactsDialog: !1 })
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    r = t.removeContactsSetting,
                    o = t.subtaskInputs,
                    i = this.state.disableRemoveContactsButton
                  return d.createElement(
                    p.Z,
                    null,
                    d.createElement(
                      Y,
                      (0, a.Z)({}, r.primary_text, { onNavigate: n, style: ka.header, subtaskInputs: o }),
                    ),
                    d.createElement(
                      Y,
                      (0, a.Z)({}, r.secondary_text, {
                        color: 'gray700',
                        onNavigate: n,
                        size: 'subtext2',
                        style: ka.subtext,
                        subtaskInputs: o,
                      }),
                    ),
                    d.createElement(
                      p.Z,
                      null,
                      null !== (e = r.value_data) && void 0 !== e && e.action_data
                        ? d.createElement(
                            H.ZP,
                            { disabled: i, onPress: this._handleRemoveContactsClick, type: 'destructiveText' },
                            r.value_data.action_data.link.label,
                          )
                        : null,
                      this._maybeRenderRemoveContactsDialog(),
                    ),
                  )
                },
              },
              {
                key: '_maybeRenderRemoveContactsDialog',
                value: function value() {
                  return this.state.showRemoveContactsDialog
                    ? d.createElement(f.Z, {
                        cancelButtonLabel: ha,
                        confirmButtonLabel: pa,
                        headline: ma,
                        onCancel: this._handleRemoveContactsCancel,
                        onConfirm: this._handleRemoveContactsConfirm,
                        onMaskClick: this._handleRemoveContactsCancel,
                        text: fa,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(d.Component),
        ka = v.Z.create(function (e) {
          return {
            header: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            subtext: { marginBottom: e.spaces.space20 },
          }
        })
      var ya = ba
      var Za = n(870971),
        wa = b().d5568440
      var xa = ta({
        namespace: 'passwordValidity',
        fetchOneContext: 'FETCH_PASSWORD_VALIDITY',
        fetchOneEndpoint: function fetchOneEndpoint(e) {
          return e.Validity.fetchPasswordStrength
        },
        fetchOneParams: function fetchOneParams(e, t) {
          var n = (0, w.Z)(e, 1)[0]
          return (0, r.Z)({ password: n }, t)
        },
        localValidator: function localValidator(e, t) {
          var n = !(!t || !t.username) && e === t.username,
            a = e.length >= Za.l,
            r = e.length <= Za.E,
            o = wa
          return (
            a ? r || (o = x.NEW_PASSWORD_LONG) : (o = x.NEW_PASSWORD_SHORT),
            { errorMessage: !n && a && r ? void 0 : o, valid: a && r && !n }
          )
        },
      })
      var Ca = (0, We.Z)()
        .propsFromState(function () {
          return { validityMap: xa.selectEntitiesWithFetchStatus }
        })
        .propsFromActions(function () {
          return {
            clearPasswordValidity: xa.clear,
            createLocalApiErrorHandler: (0, x.createLocalApiErrorHandlerWithContextFactory)('PASSWORD_FIELD_CONTEXT'),
            validator: xa.validate,
          }
        })
        .withAnalytics({ page: 'onboarding', component: 'password_entry' })
      var Ia = b().dec3c9b8,
        Ea = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_validate', function (e, t) {
                a.props.validator(e, t)['catch'](a.props.createLocalApiErrorHandler()).then(a._onValidationUpdated(e))
              }),
              (0, u.Z)((0, s.Z)(a), '_validateDebounced', (0, zn.Z)(a._validate, 500)),
              (0, u.Z)((0, s.Z)(a), '_onValidationUpdated', function (e) {
                return function () {
                  var t = a.props,
                    n = t.analytics,
                    r = t.customValidator,
                    o = t.onPasswordValidated,
                    i = t.validityMap,
                    s = (e && i[e] ? i[e] : {}).valid,
                    l = void 0 !== s && s
                  r && 'string' == typeof e && 0 === e.length && (l = r().valid),
                    a.setState({ valid: l }),
                    n.scribe({ element: 'entered_password', action: l ? 'valid' : 'invalid' }),
                    o(l)
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_renderFormTextInput', function () {
                var e = a.props,
                  t = e.autoComplete,
                  n = e.autoFocus,
                  r = e.customValidator,
                  o = e.helperText,
                  i = e.label,
                  s = e.onSubmitEditing,
                  l = e.validityMap,
                  c = a.state,
                  u = c.password,
                  p = c.revealed,
                  h = a.state.valid,
                  m = (l[u] || {}).errorMessage,
                  f = void 0 === m ? '' : m
                return (
                  r && 0 === f.length && ((f = r().errorMessage), (h = r().valid)),
                  d.createElement(An.Z, {
                    autoComplete: t,
                    autoFocus: n,
                    errorText: f,
                    helperText: o,
                    invalid: !h,
                    label: i || Ia,
                    name: 'password',
                    onChange: a._handlePasswordUpdated,
                    onSubmitEditing: h ? s : void 0,
                    showPasswordVisibilityIcon: !0,
                    style: ue.formTextInput,
                    type: p ? 'text' : 'password',
                    value: u,
                  })
                )
              }),
              (0, u.Z)((0, s.Z)(a), '_handleVisibilityToggle', function () {
                a.setState({ revealed: !a.state.revealed })
              }),
              (0, u.Z)((0, s.Z)(a), '_handlePasswordUpdated', function (e) {
                var t = a.props,
                  n = t.onPasswordChange,
                  r = t.skipPasswordValidation,
                  o = t.userIdentifier,
                  i = e.target.value
                r || a._validateDebounced(i, { username: o }), a.setState({ password: i }), n(i)
              })
            var r = e.defaultValue
            return (a.state = { revealed: !1, password: r || '', valid: !0 }), a
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this.props.clearPasswordValidity(), this._validateDebounced.clear()
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.style,
                    n = e.userIdentifier
                  return d.createElement(
                    p.Z,
                    { style: [ue.formTextInput, t] },
                    n ? d.createElement('input', { name: 'username', type: 'hidden', value: n }) : null,
                    this._renderFormTextInput(),
                  )
                },
              },
            ]),
            n
          )
        })(d.Component)
      ;(0, u.Z)(Ea, 'defaultProps', {
        autoComplete: 'on',
        onPasswordChange: k.Z,
        onPasswordValidated: k.Z,
        skipPasswordValidation: !1,
      })
      var Sa = Ca(Ea)
      var Ta = v.Z.create(function (e) {
        return { textField: { width: '100%' }, textFieldDetails: { marginBottom: e.spaces.space4 } }
      })
      var Aa = function Aa(e) {
        var t = e.autoComplete,
          n = e.autoFocus,
          r = void 0 !== n && n,
          o = e.onChange,
          i = e.onNavigate,
          s = e.onSubmitEditing,
          l = e.passwordProps,
          c = e.style,
          u = e.subtaskInputs,
          p = e.textField,
          h = d.useCallback(
            function (e) {
              return o(e.target.value)
            },
            [o],
          )
        if (!p) return null
        var m,
          f = p.content_type,
          _ = p.detail_text,
          v = p.hint_text,
          g = _
            ? d.createElement(
                Y,
                (0, a.Z)({}, _, { color: 'gray700', onNavigate: i, style: Ta.textFieldDetails, subtaskInputs: u }),
              )
            : null
        return f === L.Ae.Password || f === L.Ae.NewPassword
          ? d.createElement(
              Sa,
              (0, a.Z)({}, l, {
                autoComplete: t || (f === L.Ae.Password ? 'current-password' : 'new-password'),
                autoFocus: r,
                helperText: g,
                label: v || '',
                onPasswordChange: o,
                onPasswordValidated:
                  null !== (m = null == l ? void 0 : l.onPasswordValidated) && void 0 !== m ? m : k.Z,
                onSubmitEditing: s,
                style: [ue.formTextInput, Ta.textField, c],
              }),
            )
          : d.createElement(An.Z, {
              autoComplete: null != t ? t : 'on',
              autoFocus: r,
              helperText: g,
              label: v || '',
              name: 'text',
              onChange: h,
              onSubmitEditing: s,
              style: [ue.formTextInput, Ta.textField, c],
            })
      }
      var Pa = b().dd4a83a6,
        Fa = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_handleActionClick', function () {
                var e,
                  t,
                  n = a.props,
                  r = n.onNavigate,
                  o =
                    null === (e = n.settingValue.value_data) ||
                    void 0 === e ||
                    null === (t = e.action_data) ||
                    void 0 === t
                      ? void 0
                      : t.link
                o && r(o)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleButtonNavigation', function (e, t) {
                var n = a.props,
                  r = n.onNavigate,
                  o = n.updateFlow
                t === L.ZF.NextButton && (null == o || o(e)), r && e && r(e)
              }),
              (0, u.Z)((0, s.Z)(a), '_getSettingValueFromSubtaskInputs', function (e) {
                var t,
                  n,
                  r = a.props,
                  o = r.subtaskId,
                  i = r.subtaskInputs,
                  s = e.value_identifier,
                  l = e.value_type,
                  c = ((0, W.OG)(i, { key: L.Xb, subtask_id: o }, []) || []).find(function (e) {
                    return e.key === s
                  })
                c &&
                  (0, W._w)(l) &&
                  (t = null === (n = c.response_data.boolean_data) || void 0 === n ? void 0 : n.result)
                return t
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSettingGroupClick', function () {
                var e = a.props,
                  t = e.onSettingGroupClick,
                  n = e.settingValue
                t && t(n)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSettingToggle', function () {
                var e = a.props,
                  t = e.onSettingToggle,
                  n = e.settingValue,
                  o = n.value_identifier
                o && (a.setState((0, r.Z)((0, r.Z)({}, a.state), {}, (0, u.Z)({}, o, !a.state[o]))), t && t(n))
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSettingTextChange', function (e) {
                var t = a.props,
                  n = t.onSettingTextChanged,
                  r = t.settingValue
                null == n || n(r, e)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleTextFieldOnEditingSubmit', function () {
                var e = a.props,
                  t = e.nextLink,
                  n = e.onNavigate,
                  r = e.updateFlow
                t && (null == r || r(t), n(t))
              }),
              (0, u.Z)((0, s.Z)(a), '_addToast', function (e) {
                a.props.addToast && a.props.addToast(e)
              }),
              (0, u.Z)((0, s.Z)(a), '_getButtonDisplayType', function (e) {
                switch (e) {
                  case L.ZF.GoogleSSOButton:
                    return L.GN.GoogleSSO
                  case L.ZF.AppleSSOButton:
                    return L.GN.AppleSSO
                  default:
                    return L.GN.Default
                }
              })
            var i = e.settingValue,
              l = i.value_data,
              c = i.value_identifier,
              d = i.value_type
            if (c && (0, W._w)(d)) {
              var p,
                h = a._getSettingValueFromSubtaskInputs(i)
              if (void 0 === h)
                h = null == l || null === (p = l.boolean_data) || void 0 === p ? void 0 : p.initial_value
              a.state = (0, u.Z)({}, c, h)
            }
            return a
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this,
                    t = this.props.settingValue,
                    n = t.primary_text,
                    a = t.secondary_text,
                    r = t.toggle_wrapper,
                    o = t.value_type,
                    i = function i() {
                      switch (o) {
                        case L.h0.Action:
                          return e._renderAction()
                        case L.h0.Boolean:
                        case L.h0.PreciseLocation:
                          return e._renderSettingOption()
                        case L.h0.SettingsGroup:
                          return e._renderSettingsGroup()
                        case L.h0.StaticText:
                          return e._renderStaticText()
                        case L.h0.TextField:
                          return e._renderTextField()
                        case L.h0.DestructiveAction:
                          return e._renderDestructiveAction()
                        case L.h0.Separator:
                          return e._renderSeparator()
                        case L.h0.Button:
                          return e._renderButton()
                        case L.h0.Tweet:
                          return e._renderTweet()
                        default:
                          return null
                      }
                    }
                  return d.createElement(
                    d.Fragment,
                    null,
                    (n || a) &&
                      (function () {
                        switch (o) {
                          case L.h0.Action:
                          case L.h0.TextField:
                          case L.h0.DestructiveAction:
                          case L.h0.Separator:
                          case L.h0.Button:
                          case L.h0.Tweet:
                            return e._renderStaticText()
                          default:
                            return d.createElement(d.Fragment, null)
                        }
                      })(),
                    r
                      ? d.createElement(p.Z, { style: Na.tweetDisclosure }, d.createElement(ua.Z, { label: Pa }, i()))
                      : i(),
                  )
                },
              },
              {
                key: '_renderStaticText',
                value: function value() {
                  var e,
                    t,
                    n = this.props,
                    r = n.onNavigate,
                    o = n.settingValue,
                    i = n.subtaskInputs,
                    s = o.primary_text,
                    l = o.secondary_text,
                    c =
                      (null === (e = o.value_data) || void 0 === e || null === (t = e.static_text_data) || void 0 === t
                        ? void 0
                        : t.primary_text) || null
                  return d.createElement(
                    p.Z,
                    { style: s && !c && Na.header },
                    s && !c
                      ? d.createElement(
                          Y,
                          (0, a.Z)({}, s, { onNavigate: r, size: 'headline1', subtaskInputs: i, weight: 'bold' }),
                        )
                      : null,
                    l || c
                      ? d.createElement(
                          Y,
                          (0, a.Z)({}, l || c, {
                            color: 'gray700',
                            onNavigate: r,
                            size: 'body',
                            style: Na.secondaryText,
                            subtaskInputs: i,
                          }),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderTextField',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.settingValue,
                    a = e.subtaskInputs,
                    r = n.value_data,
                    o = n.value_identifier
                  if (null == r || !r.text_field) return null
                  var i = o === L.ZF.UserIdentifier
                  return d.createElement(Aa, {
                    autoComplete: i ? 'username' : void 0,
                    onChange: this._handleSettingTextChange,
                    onNavigate: t,
                    onSubmitEditing: this._handleTextFieldOnEditingSubmit,
                    subtaskInputs: a,
                    textField: r.text_field,
                  })
                },
              },
              {
                key: '_renderDestructiveAction',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.removeContacts,
                    a = e.settingValue,
                    r = e.subtaskInputs
                  return d.createElement(
                    p.Z,
                    { style: { marginBottom: v.Z.theme.spaces.space16 } },
                    d.createElement(ya, {
                      addToast: this._addToast,
                      onNavigate: t,
                      removeContacts: n,
                      removeContactsSetting: a,
                      subtaskInputs: r,
                    }),
                  )
                },
              },
              {
                key: '_renderSeparator',
                value: function value() {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    a = t.settingValue,
                    r = t.subtaskInputs,
                    o = a.value_data
                  return d.createElement(_e, {
                    label: null == o || null === (e = o.separator) || void 0 === e ? void 0 : e.label,
                    onNavigate: n,
                    subtaskInputs: r,
                  })
                },
              },
              {
                key: '_renderAction',
                value: function value() {
                  var e,
                    t,
                    n = this.props,
                    r = n.onNavigate,
                    o = n.settingValue,
                    i = n.subtaskInputs,
                    s =
                      null === (e = o.value_data) || void 0 === e || null === (t = e.action_data) || void 0 === t
                        ? void 0
                        : t.link.label
                  return d.createElement(
                    p.Z,
                    null,
                    d.createElement(
                      Y,
                      (0, a.Z)({}, o.primary_text, { onNavigate: r, style: Na.header, subtaskInputs: i }),
                    ),
                    d.createElement(
                      Y,
                      (0, a.Z)({}, o.secondary_text, {
                        color: 'gray700',
                        onNavigate: r,
                        size: 'subtext2',
                        subtaskInputs: i,
                      }),
                    ),
                    s
                      ? d.createElement(
                          p.Z,
                          null,
                          d.createElement(H.ZP, { onPress: this._handleActionClick, type: 'primaryText' }, s),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderButton',
                value: function value() {
                  var e = this,
                    t = this.props,
                    n = t.settingValue,
                    a = t.subtaskId,
                    r = t.subtaskInputs,
                    o = n.value_data,
                    i = n.value_identifier
                  if (null == o || !o.button) return null
                  var s = o.button.navigation_link,
                    l = (null == s ? void 0 : s.link_type) === L.Iq.ChromelessWeb
                  return d.createElement(ge, {
                    button: o.button,
                    displayType: this._getButtonDisplayType(i),
                    link: l && null != s && s.url ? { external: !0, pathname: s.url } : void 0,
                    onNavigate: function onNavigate() {
                      return e._handleButtonNavigation(s, i)
                    },
                    subtaskId: a,
                    subtaskInputs: r,
                  })
                },
              },
              {
                key: '_renderTweet',
                value: function value() {
                  var e,
                    t,
                    n = this.props.settingValue.value_data
                  return null != n && null !== (e = n.tweet_data) && void 0 !== e && e.tweet
                    ? d.createElement(da.Z, { tweet: null === (t = n.tweet_data) || void 0 === t ? void 0 : t.tweet })
                    : null
                },
              },
              {
                key: '_renderSettingOption',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.settingValue,
                    r = e.showDividers,
                    o = e.subtaskInputs,
                    i = n.primary_text,
                    s = n.secondary_text,
                    l = n.value_identifier
                  return d.createElement(
                    p.Z,
                    { accessibilityRole: 'label', focusable: !0, style: [ue.option, r && Na.optionDivider] },
                    d.createElement(
                      p.Z,
                      { style: ue.checkboxText },
                      d.createElement(Y, (0, a.Z)({}, i, { onNavigate: t, subtaskInputs: o })),
                      s
                        ? d.createElement(
                            Y,
                            (0, a.Z)({}, s, {
                              color: 'gray700',
                              onNavigate: t,
                              size: 'subtext2',
                              style: Na.secondaryText,
                              subtaskInputs: o,
                            }),
                          )
                        : null,
                    ),
                    l
                      ? d.createElement(
                          p.Z,
                          null,
                          d.createElement(Je.Z, { checked: this.state[l], onChange: this._handleSettingToggle }),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderSettingsGroup',
                value: function value() {
                  var e,
                    t,
                    n = this.props,
                    r = n.onNavigate,
                    o = n.settingValue,
                    i = n.subtaskInputs,
                    s = o.primary_text,
                    l = o.secondary_text,
                    c = o.value_data,
                    u = null == c || null === (e = c.settings_group_data) || void 0 === e ? void 0 : e.settings,
                    h =
                      null == c || null === (t = c.settings_group_data) || void 0 === t
                        ? void 0
                        : t.status_text_quantity_pairs
                  return d.createElement(
                    p.Z,
                    { accessibilityRole: 'button', onClick: this._handleSettingGroupClick, style: Na.settingGroup },
                    d.createElement(Y, (0, a.Z)({}, s, { onNavigate: r, subtaskInputs: i })),
                    u && h ? this._renderQuantityStatus(u, h) : null,
                    l
                      ? d.createElement(
                          Y,
                          (0, a.Z)({}, l, { color: 'gray700', onNavigate: r, size: 'subtext2', subtaskInputs: i }),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderQuantityStatus',
                value: function value(e, t) {
                  var n,
                    r = this,
                    o = this.props,
                    i = o.onNavigate,
                    s = o.subtaskInputs,
                    l = e.reduce(function (e, t) {
                      return e + (r._getSettingValueFromSubtaskInputs(t) ? 1 : 0)
                    }, 0)
                  return (
                    t.forEach(function (e) {
                      l >= e.threshold &&
                        (n = d.createElement(
                          Y,
                          (0, a.Z)({}, e.text, {
                            color: 'gray700',
                            onNavigate: i,
                            size: 'subtext2',
                            style: Na.quantityStatusText,
                            subtaskInputs: s,
                          }),
                        ))
                    }),
                    n
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        Na = v.Z.create(function (e) {
          return {
            header: { marginTop: e.spaces.space20 },
            secondaryText: { marginTop: e.spaces.space12 },
            quantityStatusText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space12 },
            optionDivider: {
              paddingBottom: e.spaces.space12,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            settingGroup: { marginTop: e.spaces.space12 },
            textField: { width: '100%' },
            textFieldDetails: { marginBottom: e.spaces.space4 },
            tweetDisclosure: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
          }
        })
      var Da = 'ocfEnterEmailNextLink',
        Ba = 'ocfEnterEmailSkipLink'
      var La = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_renderEmailTextField', function () {
                return d.createElement(ca, {
                  autoComplete: 'email',
                  autoFocus: !0,
                  defaultValue: a.state.email,
                  label: a.props.subtask.hint_text,
                  name: 'email',
                  onRef: a._handleSetInputRef,
                  onValidityChange: a._handleUpdateValidity,
                  style: Oa.emailTextField,
                })
              }),
              (0, u.Z)((0, s.Z)(a), '_getInitialSettingValues', function (e, t, n) {
                var a
                return null === (a = e.settings) || void 0 === a
                  ? void 0
                  : a.map(function (e) {
                      var a,
                        r,
                        o,
                        i,
                        s = e.value_identifier
                      if (void 0 === s) return {}
                      var l =
                        null !==
                          (a =
                            null === (r = e.value_data) || void 0 === r || null === (o = r.boolean_data) || void 0 === o
                              ? void 0
                              : o.initial_value) &&
                        void 0 !== a &&
                        a
                      return {
                        valueIdentifier: s,
                        value: null !== (i = (0, W.OG)(n, { key: s, subtask_id: t }, void 0)) && void 0 !== i ? i : l,
                      }
                    })
              }),
              (0, u.Z)((0, s.Z)(a), '_toggleSettingValue', function (e) {
                var t = a.state.settingValues,
                  n =
                    null == t
                      ? void 0
                      : t.map(function (t) {
                          return t.valueIdentifier === e ? { valueIdentifier: e, value: !t.value } : t
                        })
                a.setState({ settingValues: n })
              }),
              (0, u.Z)((0, s.Z)(a), '_renderSettings', function () {
                var e,
                  t,
                  n = a.props,
                  r = n.onNavigate,
                  o = n.subtask,
                  i = n.subtaskId,
                  s = n.subtaskInputs
                return null !==
                  (e =
                    null === (t = o.settings) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t = e.value_identifier
                          return void 0 === t
                            ? null
                            : d.createElement(Fa, {
                                key: t,
                                onNavigate: r,
                                onSettingToggle: function onSettingToggle() {
                                  return a._toggleSettingValue(t)
                                },
                                settingValue: e,
                                subtaskId: i,
                                subtaskInputs: s,
                              })
                        })) && void 0 !== e
                  ? e
                  : null
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDoneButtonClick', function () {
                var e = a.props.subtask,
                  t = a.state.settingValues,
                  n = {
                    setting_responses:
                      null == t
                        ? void 0
                        : t.map(function (e) {
                            var t = e.value
                            return { key: e.valueIdentifier, response_data: { boolean_data: { result: t } } }
                          }),
                    email: a._getIdentifierValue(),
                    link: e.next_link.link_id,
                  }
                a._handleButtonClick(e.next_link, n)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSkipButtonClick', function () {
                var e = a.props.subtask
                e.skip_link && a._handleButtonClick(e.skip_link, { link: e.skip_link.link_id })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleButtonClick', function (e, t) {
                var n = a.props,
                  r = n.onNavigate,
                  o = n.subtaskId
                ;(0, n.updateFlow)(o, t), r(e)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSetInputRef', function (e) {
                a._input = e
              }),
              (0, u.Z)((0, s.Z)(a), '_handleUpdateValidity', function () {
                var e = a._input && a._input.isValid()
                a.setState({ isValid: !!e })
              }),
              (0, u.Z)((0, s.Z)(a), '_getIdentifierValue', function () {
                return (a._input && a._input.getValue()) || void 0
              })
            var r = e.subtask,
              i = e.subtaskId,
              l = e.subtaskInputs,
              c = (0, W.OG)(l, { key: 'email', subtask_id: i }, '') || void 0,
              p = a._getInitialSettingValues(r, i, l)
            return (a.state = { email: c, isValid: !!c, settingValues: p }), a
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    r = e.subtask,
                    o = e.subtaskInputs,
                    i = r.next_link,
                    s = r.primary_text,
                    l = r.secondary_text,
                    c = r.skip_link
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, n, {
                      footer: d.createElement(te, {
                        actionDisabled: !this.state.isValid,
                        actionLabel: this.state.isValid || !c ? (null == i ? void 0 : i.label) : void 0,
                        actionTestID: Da,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.isValid || null == c ? void 0 : c.label,
                        secondaryActionTestID: Ba,
                        secondaryActionType: 'primaryOutlined',
                      }),
                      header: d.createElement(ke, {
                        onNavigate: t,
                        primaryTextProp: s,
                        secondaryTextProp: l,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(p.Z, { style: Oa.textFieldArea }, this._renderEmailTextField()),
                    this._renderSettings(),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        Oa = v.Z.create(function (e) {
          return {
            textFieldArea: { marginTop: e.spaces.space20 },
            emailTextField: { paddingHorizontal: 0, paddingVertical: e.spaces.space16 },
          }
        }),
        Va = (n(821515), n(123162)),
        Ra = n(712171)
      var Ma = (0, We.Z)()
          .propsFromActions(function () {
            return { sendAllPreviews: Ra.MH }
          })
          .withAnalytics(),
        Ua = 'LoginForm_Login_Button',
        za = 'LoginForm_Skip_Button',
        ja = 'LoginForm_Footer_Container'
      var Ha = b().d1f6d336,
        Ga = b().a3841918,
        Wa = b().f70cd5ee,
        qa = b().ca86b62c,
        $a = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) {
              i[l] = arguments[l]
            }
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, u.Z)(
                (0, s.Z)(e),
                '_passwordlessSsoEnabled',
                e.context.featureSwitches.isTrue('responsive_web_passwordless_sso_enabled'),
              ),
              (0, u.Z)((0, s.Z)(e), 'state', {}),
              (0, u.Z)((0, s.Z)(e), '_renderIdentifier', function () {
                var t,
                  n,
                  a = e.props.subtask,
                  r = a.email,
                  o = a.phone_number,
                  i = a.user_identifier_display_type,
                  s = a.username
                return (
                  'phone_number' === i
                    ? ((t = o), (n = Wa))
                    : 'username' === i
                    ? ((t = s), (n = Ha))
                    : 'email' === i && ((t = r), (n = Ga)),
                  t && n && i
                    ? d.createElement(An.Z, {
                        editable: !1,
                        label: n,
                        name: i,
                        onChange: k.Z,
                        style: ue.formTextInput,
                        value: t,
                      })
                    : null
                )
              }),
              (0, u.Z)((0, s.Z)(e), '_renderPasswordFields', function () {
                var t = e.props,
                  n = t.onNavigate,
                  r = t.subtask,
                  o = t.subtaskInputs,
                  i = r.show_password_confirmation
                if (r.password_field || r.new_password_field || r.confirm_password_field) {
                  var s,
                    l = { onNavigate: n, onSubmitEditing: e._handleTextSubmit, subtaskInputs: o },
                    c = null !== (s = r.password_field) && void 0 !== s ? s : r.new_password_field
                  return d.createElement(
                    d.Fragment,
                    null,
                    c
                      ? d.createElement(
                          Aa,
                          (0, a.Z)({}, l, {
                            autoFocus: !0,
                            onChange: e._handlePasswordChange,
                            passwordProps: {
                              onPasswordValidated: e._handleValidationChange,
                              skipPasswordValidation: r.skip_password_validation,
                            },
                            textField: c,
                          }),
                        )
                      : null,
                    r.confirm_password_field
                      ? d.createElement(
                          Aa,
                          (0, a.Z)({}, l, {
                            onChange: e._handlePasswordConfirmationChange,
                            passwordProps: {
                              onPasswordValidated: e._handleValidationChange,
                              customValidator: e._validatePasswordConfirmation,
                            },
                            textField: r.confirm_password_field,
                          }),
                        )
                      : null,
                  )
                }
                return d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(Sa, {
                    autoComplete: e._getPasswordAutoCompleteValue(),
                    autoFocus: !0,
                    label: r.hint,
                    onPasswordChange: e._handlePasswordChange,
                    onPasswordValidated: e._handleValidationChange,
                    onSubmitEditing: e._handleTextSubmit,
                    skipPasswordValidation: r.skip_password_validation,
                    userIdentifier: r.username,
                  }),
                  i
                    ? d.createElement(Sa, {
                        autoComplete: e._getPasswordAutoCompleteValue(),
                        customValidator: e._validatePasswordConfirmation,
                        label: r.password_confirmation_hint,
                        onPasswordChange: e._handlePasswordConfirmationChange,
                        onPasswordValidated: e._handleValidationChange,
                        onSubmitEditing: e._handleTextSubmit,
                        userIdentifier: r.username,
                      })
                    : null,
                )
              }),
              (0, u.Z)((0, s.Z)(e), '_renderFooter', function () {
                var t,
                  n,
                  r = e.props,
                  o = r.onNavigate,
                  i = r.subtask,
                  s = r.subtaskInputs,
                  l = i.footer,
                  c = i.next_link,
                  u = i.skip_link,
                  h = e._isPasswordValid(),
                  f = e._passwordlessSsoEnabled
                    ? null === (t = i.action_buttons) || void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          return d.createElement(ge, {
                            button: e,
                            displayType: (0, W.sI)(e.navigation_link.link_id),
                            key: t,
                            onNavigate: o,
                            subtaskInputs: s,
                          })
                        })
                    : [],
                  _ =
                    null !== (n = i.footer) && void 0 !== n && n.footnote_text
                      ? d.createElement(
                          Y,
                          (0, a.Z)({}, i.footer.footnote_text, {
                            color: 'gray700',
                            onNavigate: o,
                            style: Ka.footnoteText,
                            subtaskInputs: s,
                          }),
                        )
                      : null,
                  v = d.createElement(te, {
                    actionDisabled: !h,
                    actionLabel: h || !u ? (null == c ? void 0 : c.label) : void 0,
                    actionTestID: Ua,
                    buttonSize: (null == l ? void 0 : l.style) === L.$b.Floating ? 'medium' : void 0,
                    detailText: null == l ? void 0 : l.detail_text,
                    onAction: e._handleDoneButtonClick,
                    onNavigate: o,
                    onSecondaryAction: e._handleSkipButtonClick,
                    secondaryActionLabel: h || null == u ? void 0 : u.label,
                    secondaryActionTestID: za,
                    subtaskInputs: s,
                  })
                return d.createElement(
                  p.Z,
                  { testID: ja },
                  v,
                  null != f && f.length ? d.createElement(Va.Z, { label: d.createElement(m.ZP, null, qa) }) : null,
                  f,
                  _,
                )
              }),
              (0, u.Z)((0, s.Z)(e), '_validatePasswordConfirmation', function () {
                var t,
                  n,
                  a,
                  r = e.props.subtask,
                  o = r.password_confirmation_mismatch_message,
                  i =
                    null === (t = r.confirm_password_field) ||
                    void 0 === t ||
                    null === (n = t.validation_messages) ||
                    void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.message_type === L.IN.Mismatch
                        })
                if ((i ? (a = i.text.text) : null != o && o.text && (a = null == o ? void 0 : o.text), a)) {
                  var s = e.state
                  if (s.password !== s.passwordConfirmation) return { valid: !1, errorMessage: a }
                }
                return { valid: !0, errorMessage: void 0 }
              }),
              (0, u.Z)((0, s.Z)(e), '_handleDoneButtonClick', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.sendAllPreviews,
                  r = t.subtask,
                  o = t.subtaskId,
                  i = t.updateFlow
                a()['finally'](function () {
                  e._saveCredentialsIfNeeded()
                    .then(function () {
                      i(o, { password: e.state.password, link: r.next_link.link_id }), n(r.next_link)
                    })
                    ['catch'](function () {
                      i(o, { password: e.state.password, link: r.next_link.link_id }), n(r.next_link)
                    })
                })
              }),
              (0, u.Z)((0, s.Z)(e), '_handleSkipButtonClick', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskId,
                  o = t.updateFlow,
                  i = a.skip_link
                i && (o(r, { link: i.link_id }), n(i))
              }),
              (0, u.Z)((0, s.Z)(e), '_handlePasswordChange', function (t) {
                e.setState({ password: t })
              }),
              (0, u.Z)((0, s.Z)(e), '_handlePasswordConfirmationChange', function (t) {
                e.setState({ passwordConfirmation: t })
              }),
              (0, u.Z)((0, s.Z)(e), '_handleValidationChange', function (t) {
                var n = e.props.subtask,
                  a = n.show_password_confirmation
                if (n.confirm_password_field || a) {
                  var r = e._validatePasswordConfirmation().valid
                  e.setState({ isPasswordValid: t && r })
                } else e.setState({ isPasswordValid: t })
              }),
              (0, u.Z)((0, s.Z)(e), '_isPasswordValid', function () {
                var t = e.props.subtask,
                  n = e.state,
                  a = n.isPasswordValid,
                  r = n.password,
                  o = !(r && r.length)
                return a || (t.skip_password_validation && !o)
              }),
              (0, u.Z)((0, s.Z)(e), '_handleTextSubmit', function () {
                e._isPasswordValid() && e._handleDoneButtonClick()
              }),
              (0, u.Z)((0, s.Z)(e), '_saveCredentialsIfNeeded', function () {
                var t = e.props.subtask,
                  n = t.email,
                  a = t.phone,
                  r = t.skip_password_validation,
                  o = t.username,
                  i = e.state.password,
                  s = !!window.PasswordCredential,
                  l = o || n || a
                if (l && s && !r && navigator.credentials) {
                  var c = new window.PasswordCredential({ id: l, password: i })
                  return navigator.credentials.store(c)
                }
                return Promise.resolve()
              }),
              (0, u.Z)((0, s.Z)(e), '_getPasswordAutoCompleteValue', function () {
                switch (e.props.subtask.os_content_type) {
                  case L.Dk.Password:
                    return 'current-password'
                  case L.Dk.NewPassword:
                    return 'new-password'
                  default:
                    return 'on'
                }
              }),
              (0, u.Z)((0, s.Z)(e), '_hasSSOButtons', function () {
                var t
                return !(
                  null === (t = e.props.subtask.action_buttons) ||
                  void 0 === t ||
                  !t.find(function (e) {
                    var t = (0, W.sI)(e.navigation_link.link_id)
                    return t === L.GN.GoogleSSO || t === L.GN.AppleSSO
                  })
                )
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e,
                    t,
                    n,
                    r,
                    o,
                    i = this.props,
                    s = i.errorDialog,
                    l = i.onNavigate,
                    c = i.passthroughOcfScreenProps,
                    u = i.subtask,
                    h = i.subtaskInputs,
                    m =
                      null !== (e = null === (t = u.footer) || void 0 === t ? void 0 : t.style) && void 0 !== e
                        ? e
                        : L.$b.Fixed,
                    f =
                      this._passwordlessSsoEnabled &&
                      (null === (n = u.action_buttons) || void 0 === n ? void 0 : n.length)
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, c, { footer: m === L.$b.Fixed ? this._renderFooter() : null, providePadding: !0 }),
                    d.createElement(
                      p.Z,
                      { style: !!f && Ka.compact },
                      d.createElement(ke, {
                        header: u.header,
                        onNavigate: l,
                        primaryTextProp: u.primary_text,
                        secondaryTextProp: u.secondary_text,
                        subtaskInputs: h,
                        userInfo: this._passwordlessSsoEnabled
                          ? d.createElement(ze, {
                              displayType: L.CE.compact,
                              onNavigate: l,
                              subtaskInputs: h,
                              user: null === (r = u.header) || void 0 === r ? void 0 : r.user,
                              userCaption: null === (o = u.header) || void 0 === o ? void 0 : o.user_caption,
                            })
                          : void 0,
                      }),
                      this._renderIdentifier(),
                      this._renderPasswordFields(),
                      m === L.$b.Floating || m === L.$b.FloatingLarge ? this._renderFooter() : null,
                    ),
                    s,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component)
      ;(0, u.Z)($a, 'contextType', Z.rC)
      var Ka = v.Z.create(function (e) {
        return {
          footnoteText: { marginBottom: e.spaces.space24 },
          detailText: { marginBottom: e.spaces.space40 },
          compact: { margin: 'auto', minWidth: le.fI + 64, maxWidth: le.fI + 64 },
        }
      })
      var Ya = Ma($a)
      var Qa = n(585204),
        Xa = new RegExp('^\\+?[0-9\\-\\.\\(\\)\\s]{7,1000}$'),
        Ja = b().cd24fe60
      var er = ta({
        namespace: 'phoneNumberValidity',
        fetchOneContext: 'FETCH_PHONE_VALIDITY',
        fetchOneEndpoint: function fetchOneEndpoint(e) {
          return e.Validity.isPhoneNumberAvailable
        },
        fetchOneParams: function fetchOneParams(e, t) {
          var n = (0, w.Z)(e, 1)[0]
          return (0, r.Z)({ raw_phone_number: n }, t)
        },
        localValidator: function localValidator(e) {
          var t = Xa.test(e)
          return { errorMessage: Ja, valid: t }
        },
      })
      var tr = ['countryCode', 'onRef']
      var nr = function nr(e) {
          var t = e.countryCode,
            n = e.onRef,
            r = (0, j.Z)(e, tr),
            o = { country_code: t }
          return d.createElement(qn, (0, a.Z)({ module: er, onRef: n, type: 'tel', validationParams: o }, r))
        },
        ar = 'ocfEnterPhoneNextLink',
        rr = 'ocfEnterPhoneSkipLink'
      var or = b().gf8388fe,
        ir = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_renderCountryCodes', function () {
                var e = a.props.subtask.country_codes
                if (e && e.length) {
                  var t = e.map(function (e) {
                    return { label: e.text.text, value: e.id }
                  })
                  return d.createElement(Qa.ZP, {
                    helperText: void 0,
                    label: or,
                    onChange: a._handleCountryChange,
                    options: t,
                    value: a.state.countryCode || '',
                  })
                }
                return null
              }),
              (0, u.Z)((0, s.Z)(a), '_handleCountryChange', function (e) {
                a.setState({ countryCode: e })
              }),
              (0, u.Z)((0, s.Z)(a), '_renderPhoneTextField', function () {
                return d.createElement(nr, {
                  autoComplete: 'tel',
                  countryCode: a.state.countryCode,
                  defaultValue: a.state.phoneNumber,
                  label: a.props.subtask.hint_text,
                  name: 'phone_number',
                  onRef: a._handleSetInputRef,
                  onValidityChange: a._handleUpdateValidity,
                  style: sr.phoneTextField,
                })
              }),
              (0, u.Z)((0, s.Z)(a), '_getInitialSettingValues', function (e, t, n) {
                var a
                return null === (a = e.settings) || void 0 === a
                  ? void 0
                  : a.map(function (e) {
                      var a,
                        r,
                        o,
                        i,
                        s = e.value_identifier
                      if (void 0 === s) return {}
                      var l =
                        null !==
                          (a =
                            null === (r = e.value_data) || void 0 === r || null === (o = r.boolean_data) || void 0 === o
                              ? void 0
                              : o.initial_value) &&
                        void 0 !== a &&
                        a
                      return {
                        valueIdentifier: s,
                        value: null !== (i = (0, W.OG)(n, { key: s, subtask_id: t }, void 0)) && void 0 !== i ? i : l,
                      }
                    })
              }),
              (0, u.Z)((0, s.Z)(a), '_toggleSettingValue', function (e) {
                var t = a.state.settingValues,
                  n =
                    null == t
                      ? void 0
                      : t.map(function (t) {
                          return t.valueIdentifier === e ? { valueIdentifier: e, value: !t.value } : t
                        })
                a.setState({ settingValues: n })
              }),
              (0, u.Z)((0, s.Z)(a), '_renderSettings', function () {
                var e,
                  t,
                  n = a.props,
                  r = n.onNavigate,
                  o = n.subtask,
                  i = n.subtaskId,
                  s = n.subtaskInputs
                return null !==
                  (e =
                    null === (t = o.settings) || void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t = e.value_identifier
                          return void 0 === t
                            ? null
                            : d.createElement(Fa, {
                                key: t,
                                onNavigate: r,
                                onSettingToggle: function onSettingToggle() {
                                  return a._toggleSettingValue(t)
                                },
                                settingValue: e,
                                subtaskId: i,
                                subtaskInputs: s,
                              })
                        })) && void 0 !== e
                  ? e
                  : null
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDoneButtonClick', function () {
                var e = a.props.subtask,
                  t = a.state,
                  n = t.countryCode,
                  r = t.settingValues,
                  o =
                    null == r
                      ? void 0
                      : r.map(function (e) {
                          var t = e.value
                          return { key: e.valueIdentifier, response_data: { boolean_data: { result: t } } }
                        }),
                  i = {
                    country_code: n,
                    phone_number: a._getIdentifierValue(),
                    setting_responses: o,
                    link: e.next_link.link_id,
                  }
                a._handleButtonClick(e.next_link, i)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSkipButtonClick', function () {
                var e = a.props.subtask
                e.skip_link && a._handleButtonClick(e.skip_link, { link: e.skip_link.link_id })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleButtonClick', function (e, t) {
                var n = a.props,
                  r = n.onNavigate,
                  o = n.subtaskId
                ;(0, n.updateFlow)(o, t), r(e)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSetInputRef', function (e) {
                a._input = e
              }),
              (0, u.Z)((0, s.Z)(a), '_handleUpdateValidity', function () {
                var e = a._input && a._input.isValid()
                a.setState({ isValid: !!e })
              }),
              (0, u.Z)((0, s.Z)(a), '_getIdentifierValue', function () {
                return (a._input && a._input.getValue()) || void 0
              })
            var r = e.subtask,
              i = e.subtaskId,
              l = e.subtaskInputs,
              c = (0, W.OG)(l, { key: 'country_code', subtask_id: i }, r.default_country_code) || void 0,
              p = (0, W.OG)(l, { key: 'phone_number', subtask_id: i }, '') || void 0,
              h = a._getInitialSettingValues(r, i, l)
            return (a.state = { countryCode: c, phoneNumber: p, isValid: !!p, settingValues: h }), a
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    r = e.subtask,
                    o = e.subtaskInputs,
                    i = r.next_link,
                    s = r.primary_text,
                    l = r.secondary_text,
                    c = r.skip_link
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, n, {
                      footer: d.createElement(te, {
                        actionDisabled: !this.state.isValid,
                        actionLabel: this.state.isValid || !c ? (null == i ? void 0 : i.label) : void 0,
                        actionTestID: ar,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.isValid || null == c ? void 0 : c.label,
                        secondaryActionTestID: rr,
                        secondaryActionType: 'primaryOutlined',
                      }),
                      header: d.createElement(ke, {
                        onNavigate: t,
                        primaryTextProp: s,
                        secondaryTextProp: l,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(
                      p.Z,
                      { style: sr.textFieldArea },
                      this._renderCountryCodes(),
                      this._renderPhoneTextField(),
                    ),
                    this._renderSettings(),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        sr = v.Z.create(function (e) {
          return {
            textFieldArea: { marginTop: e.spaces.space20 },
            phoneTextField: { paddingHorizontal: 0, paddingVertical: e.spaces.space16 },
          }
        }),
        lr = n(247884)
      var cr = 'ocfEnterRecaptchaSkipButton'
      var ur = (function (e) {
        ;(0, l.Z)(n, e)
        var t = (0, c.Z)(n)
        function n() {
          var e
          ;(0, o.Z)(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
            r[i] = arguments[i]
          }
          return (
            (e = t.call.apply(t, [this].concat(r))),
            (0, u.Z)((0, s.Z)(e), '_handleRecaptchaStateChange', function (t) {
              var n = e.props,
                a = n.onNavigate,
                r = n.subtask,
                o = n.subtaskId,
                i = n.updateFlow,
                s = r.next_link
              t && (i(o, { link: s.link_id, recaptcha_response: t }), a(s))
            }),
            (0, u.Z)((0, s.Z)(e), '_handleSkipButtonClick', function () {
              var t = e.props,
                n = t.onNavigate,
                a = t.subtask.skip_link,
                r = t.subtaskId,
                o = t.updateFlow
              a && (o(r, { link: a.link_id }), n(a))
            }),
            e
          )
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.errorDialog,
                  n = e.onNavigate,
                  r = e.passthroughOcfScreenProps,
                  o = e.subtask,
                  i = e.subtaskInputs,
                  s = o.primary_text,
                  l = o.secondary_text,
                  c = o.skip_link
                return d.createElement(
                  ye.Z,
                  (0, a.Z)({}, r, {
                    footer: d.createElement(te, {
                      onSecondaryAction: this._handleSkipButtonClick,
                      secondaryActionLabel: null == c ? void 0 : c.label,
                      secondaryActionTestID: cr,
                    }),
                    header: d.createElement(ke, {
                      onNavigate: n,
                      primaryTextProp: s,
                      secondaryTextProp: l,
                      subtaskInputs: i,
                      withHeaderImage: !0,
                    }),
                    providePadding: !0,
                  }),
                  d.createElement(lr.Z, {
                    nextButtonDisabled: !1,
                    onChange: this._handleRecaptchaStateChange,
                    withConsentForm: !1,
                  }),
                  t,
                )
              },
            },
          ]),
          n
        )
      })(d.Component)
      var dr = 'ocfEnterTextNextButton',
        pr = 'ocfEnterTextSkipForNowButton',
        hr = 'ocfEnterTextTextInput'
      var mr = 'text',
        fr = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_handleSubmit', function () {
                a.state.text && a._handleDoneButtonClick()
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.next_link,
                  o = e.subtaskId
                ;(0, e.updateFlow)(o, (0, r.Z)((0, r.Z)({}, a.state), {}, { link: n.link_id })), t(n)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleEntryUpdated', function (e) {
                var t = e.target.value
                a.setState({ text: t })
              }),
              (0, u.Z)((0, s.Z)(a), '_getAutoCompleteFromKeyboardType', function (e) {
                switch (e) {
                  case L.RA.Email:
                    return 'email'
                  case L.RA.Telephone:
                    return 'tel'
                  default:
                    return
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_getInputTypeFromKeyboardType', function (e) {
                switch (e) {
                  case L.RA.Email:
                    return 'email'
                  case L.RA.Password:
                    return 'password'
                  case L.RA.Telephone:
                    return 'tel'
                  default:
                    return 'text'
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_getInputModeFromKeyboardType', function (e) {
                switch (e) {
                  case L.RA.Email:
                    return 'email'
                  case L.RA.Number:
                    return 'numeric'
                  case L.RA.Telephone:
                    return 'tel'
                  default:
                    return 'text'
                }
              })
            var i = e.subtask,
              l = e.subtaskId,
              c = e.subtaskInputs,
              d = void 0 === c ? {} : c,
              p = i.default_text,
              h = (0, W.OG)(d, { key: mr, subtask_id: l }, p) || ''
            return (a.state = { text: h }), a
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    r = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.auto_capitalization_type,
                    l = o.auto_correction_enabled,
                    c = o.detail_text,
                    u = o.header,
                    p = o.hint_text,
                    h = o.keyboard_type,
                    m = o.max_length,
                    f = o.multiline,
                    _ = o.next_link,
                    v = o.os_content_type,
                    g = o.primary_text,
                    b = o.secondary_text,
                    k = o.skip_link
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, r, {
                      footer: d.createElement(te, {
                        actionDisabled: !k && !this.state.text,
                        actionLabel: this.state.text || !k ? (null == _ ? void 0 : _.label) : void 0,
                        actionTestID: dr,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.text || null == k ? void 0 : k.label,
                        secondaryActionTestID: pr,
                      }),
                      header: d.createElement(ke, {
                        header: u,
                        onNavigate: n,
                        primaryTextProp: g,
                        secondaryTextProp: b,
                        subtaskInputs: i,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(An.Z, {
                      autoCapitalize: s || 'sentences',
                      autoComplete: v === L.Dk.Username ? v : this._getAutoCompleteFromKeyboardType(h),
                      autoCorrect: l,
                      autoFocus: !0,
                      inputMode: this._getInputModeFromKeyboardType(h),
                      label: p || '',
                      maxLength: m,
                      multiline: f,
                      name: v || L.Dk.Text,
                      onChange: this._handleEntryUpdated,
                      onSubmitEditing: this._handleSubmit,
                      positionCursorAtEnd: !0,
                      spellCheck: l ? 'true' : 'false',
                      style: ue.formTextInput,
                      testID: hr,
                      type: this._getInputTypeFromKeyboardType(h),
                      value: this.state.text,
                    }),
                    c
                      ? d.createElement(Y, (0, a.Z)({}, c, { color: 'gray700', onNavigate: n, subtaskInputs: i }))
                      : null,
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        _r = n(801815),
        vr = n(490769),
        gr = ['userNameAvailabilityData']
      var br = (0, We.Z)()
          .propsFromState(function () {
            return { loggedInUser: on.ZP.selectLoggedInUser, navigationContext: R.b, userNameAvailabilityData: vr.El }
          })
          .adjustStateProps(function (e) {
            var t = e.userNameAvailabilityData,
              n = (0, j.Z)(e, gr)
            return (0, r.Z)({ isUsernameValid: t.valid, validationError: t.desc }, n)
          })
          .propsFromActions(function () {
            return { fetchUsernameAvailability: vr.HR }
          })
          .withAnalytics({ section: 'enter_username' }),
        kr = 'ocfEnterUsernameNextButton',
        yr = 'ocfEnterUsernameSkipButton'
      var Zr = b().d1f6d336,
        wr = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var r
            ;(0, o.Z)(this, n),
              (r = t.call(this, e)),
              (0, u.Z)((0, s.Z)(r), '_maybeRenderDetailTexts', function () {
                var e = r.props,
                  t = e.subtask,
                  n = e.subtaskInputs,
                  o = r.state.currentDetailTextIndex
                return t.detail_texts && t.detail_texts.length
                  ? d.createElement(
                      Y,
                      (0, a.Z)({}, t.detail_texts[o], {
                        color: 'link',
                        onNavigate: r._handleDetailTextClick,
                        style: xr.detailLink,
                        subtaskInputs: n,
                      }),
                    )
                  : void 0
              }),
              (0, u.Z)((0, s.Z)(r), '_handleDetailTextClick', function (e) {
                var t = r.props,
                  n = t.analytics,
                  a = t.onNavigate
                'show_more_usernames' === e.link_id
                  ? (r._updateCurrentDetailTextIndex(), n.scribe({ element: 'show_more', action: 'click' }))
                  : (r._selectUsername(e.link_id, r._fetchUsernameStatus),
                    n.scribe({ element: 'suggestion', action: 'click' })),
                  a(e)
              }),
              (0, u.Z)((0, s.Z)(r), '_handleUsernameUpdated', function (e) {
                var t = e.target.value
                r._selectUsername(t, r._fetchUsernameStatusDebounced)
              }),
              (0, u.Z)((0, s.Z)(r), '_selectUsername', function (e, t) {
                r.setState({ username: e }), t(e)
              }),
              (0, u.Z)((0, s.Z)(r), '_handleNextButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId,
                  o = e.updateFlow,
                  i = r.state.username
                n.next_link && (o(a, { username: i, link: n.next_link.link_id }), t(n.next_link))
              }),
              (0, u.Z)((0, s.Z)(r), '_handleSkipButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId,
                  o = e.updateFlow,
                  i = n.skip_link
                i && (o(a, { link: i.link_id }), t(i))
              }),
              (0, u.Z)((0, s.Z)(r), '_fetchUsernameStatus', function (e) {
                var t = r.props,
                  n = t.analytics,
                  a = t.fetchUsernameAvailability,
                  o = t.loggedInUser
                o &&
                  a({
                    email: o.email && o.email[0] && o.email[0].address,
                    full_name: o.name,
                    suggest: !1,
                    username: e,
                  }).then(function (e) {
                    e && !e.valid && 'taken' === e.reason && n.scribe({ element: 'username', action: 'taken' })
                  })
              }),
              (0, u.Z)((0, s.Z)(r), '_updateCurrentDetailTextIndex', function () {
                r.setState({ currentDetailTextIndex: r.state.currentDetailTextIndex + 1 })
              })
            var i = e.loggedInUser,
              l = e.subtaskId,
              c = e.subtaskInputs,
              p = (0, W.OG)(c, { key: 'username', subtask_id: l }, '') || (i ? i.screen_name : '')
            return (
              (r.state = { currentDetailTextIndex: 0, username: p }),
              (r._fetchUsernameStatusDebounced = (0, zn.Z)(function () {
                var e
                return (e = r)._fetchUsernameStatus.apply(e, arguments)
              }, 250)),
              r
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props.navigationContext || {},
                    t = e.action,
                    n = e.text
                  'set_text' === t && n && this._selectUsername(n, this._fetchUsernameStatus)
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.isUsernameValid,
                    n = e.loggedInUser,
                    r = e.onNavigate,
                    o = e.passthroughOcfScreenProps,
                    i = e.subtask,
                    s = e.subtaskInputs,
                    l = e.validationError,
                    c = i.next_link,
                    u = i.primary_text,
                    p = i.secondary_text,
                    h = i.skip_link,
                    m = this.state.username,
                    f = (n && n.screen_name && n.screen_name.toLowerCase()) === (m && m.toLowerCase())
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, o, {
                      footer: d.createElement(te, {
                        actionDisabled: !t,
                        actionLabel: m && !f ? (null == c ? void 0 : c.label) : void 0,
                        actionTestID: kr,
                        onAction: this._handleNextButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: !m || f ? (null == h ? void 0 : h.label) : void 0,
                        secondaryActionTestID: yr,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: r,
                        primaryTextProp: u,
                        secondaryTextProp: p,
                        subtaskInputs: s,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(An.Z, {
                      Icon: _r['default'],
                      autoComplete: 'off',
                      autoCorrect: !1,
                      autoFocus: !0,
                      errorText: l,
                      invalid: !!m && !f && !t,
                      label: i.hint || Zr,
                      name: 'username',
                      onChange: this._handleUsernameUpdated,
                      showValidationIcon: !!m,
                      spellCheck: 'false',
                      style: ue.formTextInput,
                      value: m,
                    }),
                    this._maybeRenderDetailTexts(),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        xr = v.Z.create(function (e) {
          return { detailLink: { marginTop: e.spaces.space16 } }
        })
      var Cr = br(wr)
      n(315735), n(693244), n(428673), n(906886), n(827233)
      var Ir = n(10013),
        Er = n(867026),
        Sr = n(5621),
        Tr = n(440082),
        Ar = Object.freeze({ TopicFollowCount: 'topic_follow_count' }),
        Pr = n(845855),
        Fr = n(878149),
        Nr = n(973835),
        Dr = n(877590),
        Br = n(98701),
        Lr = n(615372),
        Or = n(897758),
        Vr = function Vr(e) {
          return function (t) {
            return null == t ? void 0 : t.selectInitialFetchStatus(e)
          }
        }
      var Rr = (0, We.Z)()
        .propsFromState(function () {
          return { getModuleFetchStatus: Vr }
        })
        .propsFromActions(function () {
          return {
            clearTimelineCache: Or.Z,
            createLocalApiErrorHandler: (0, x.createLocalApiErrorHandlerWithContextFactory)('OCF_GENERIC_URT'),
          }
        })
        .withAnalytics()
      var Mr = n(756746),
        Ur = n(44895)
      var zr = n(547065),
        jr = function jr(e) {
          switch (e) {
            case Nr.Z.NOT_FOUND:
              return d.createElement(Sr.Z, null)
            case Nr.Z.NOT_ALLOWED:
              return d.createElement(Er.Z, null)
            default:
              return (0, N.ZP)('Unhandled timeline unavailable reason in Ocf GenericURT screen: '.concat(e)), null
          }
        },
        Hr = (0, Ne.Z)(function (e) {
          return (function (e) {
            return (0, r.Z)((0, r.Z)({}, (0, Ur.G)({})), (0, Mr.Z)({ isWide: e }))
          })(e)
        }),
        Gr = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var r
            return (
              (0, o.Z)(this, n),
              (r = t.call(this, e)),
              (0, u.Z)((0, s.Z)(r), '_isNextButtonEnabled', function () {
                var e,
                  t,
                  n = r.state.topicsFollowed,
                  a = r.props.subtask,
                  o = a.navigation_link_options,
                  i = (o = void 0 === o ? {} : o).max_enable_count,
                  s = o.min_enable_count,
                  l =
                    (null === (e = a.navigation_link_options) ||
                    void 0 === e ||
                    null === (t = e.count_subtask_data_reference) ||
                    void 0 === t
                      ? void 0
                      : t.key) === Ar.TopicFollowCount
                return (
                  r._getModuleFetchStatus() === Fr.Z.FAILED ||
                  (s && i
                    ? l && n.size >= s && n.size <= i
                    : s && !i
                    ? l && n.size >= s
                    : !s && i
                    ? l && n.size <= i
                    : (!s && !i) || void 0)
                )
              }),
              (0, u.Z)((0, s.Z)(r), '_renderThresholdDetailText', function (e, t) {
                for (
                  var n, o = r.props, i = o.onNavigate, s = o.subtaskInputs, l = -1, c = 0;
                  c < (null == e ? void 0 : e.length);
                  c++
                ) {
                  var u = e[c],
                    h = u.text,
                    f = u.threshold
                  f > l && f <= t && ((l = f), (n = h))
                }
                var _ = r._isNextButtonEnabled() ? 'gray1100' : 'gray700',
                  v = r._isNextButtonEnabled() ? 'bold' : 'normal'
                return r.state.initialized && n
                  ? d.createElement(
                      p.Z,
                      { style: Wr.detailText },
                      d.createElement(
                        m.ZP,
                        { color: _, size: 'subtext2', weight: v },
                        r._isNextButtonEnabled() ? null : Ir.ZP.getFormattedCount(t),
                        d.createElement(Y, (0, a.Z)({}, n, { color: _, onNavigate: i, subtaskInputs: s, weight: v })),
                      ),
                    )
                  : d.createElement(p.Z, null)
              }),
              (0, u.Z)(
                (0, s.Z)(r),
                '_getModule',
                (0, Ne.Z)(function (e) {
                  var t = r.props.subtask,
                    n = t.graphql_timeline_query,
                    a = t.timeline_source
                  return n
                    ? (0, Br.R)(n.timeline_key)
                    : (0, Lr.Z)({ urtUrl: { url: a || '', urlType: Dr.Z.UrtEndpoint } })
                }),
              ),
              (0, u.Z)((0, s.Z)(r), '_getModuleFetchStatus', function () {
                var e = r.props,
                  t = e.getModuleFetchStatus,
                  n = e.subtaskId
                return t(r._getModule(n))
              }),
              (0, u.Z)((0, s.Z)(r), '_resetState', function () {
                r.setState({ topicsFollowed: new Set(), initialized: !1 })
              }),
              (0, u.Z)((0, s.Z)(r), '_handleOnTopicInitialize', function (e, t) {
                r.setState(function (n) {
                  var a = (0, at.Z)(Array.from(n.topicsFollowed))
                  return t ? a.add(e) : a['delete'](e), { initialized: !0, topicsFollowed: a }
                })
              }),
              (0, u.Z)((0, s.Z)(r), '_handleOnTopicFollow', function (e) {
                var t = (0, at.Z)(Array.from(r.state.topicsFollowed))
                t.add(e), r.setState({ topicsFollowed: t })
              }),
              (0, u.Z)((0, s.Z)(r), '_handleOnTopicUnfollow', function (e) {
                var t = (0, at.Z)(Array.from(r.state.topicsFollowed))
                t['delete'](e), r.setState({ topicsFollowed: t })
              }),
              (0, u.Z)((0, s.Z)(r), '_handleNextButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId
                ;(0, e.updateFlow)(a, { link: n.next_link.link_id }), t(n.next_link)
              }),
              (0, u.Z)((0, s.Z)(r), '_clearTimelineCache', function () {
                var e = r.props,
                  t = e.clearTimelineCache,
                  n = e.createLocalApiErrorHandler,
                  a = e.subtask.graphql_timeline_query
                a && t((0, Br.R)(a.timeline_key))['catch'](n())
              }),
              (r.state = { topicsFollowed: new Set(), initialized: !1 }),
              r
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props,
                    t = e.analytics,
                    n = e.subtask
                  t.scribe((0, r.Z)((0, r.Z)({}, n.scribe_config), {}, { action: 'impression' }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value(e) {
                  var t = this.props,
                    n = t.analytics,
                    a = t.subtask,
                    o = t.subtaskId
                  e.subtaskId !== o &&
                    (this._resetState(),
                    this._clearTimelineCache(),
                    n.scribe((0, r.Z)((0, r.Z)({}, a.scribe_config), {}, { action: 'impression' })))
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e,
                    t,
                    n,
                    r,
                    o,
                    i = this,
                    s = this.props,
                    l = s.errorDialog,
                    c = s.onNavigate,
                    u = s.passthroughOcfScreenProps,
                    h = s.subtask,
                    m = s.subtaskId,
                    f = s.subtaskInputs,
                    _ = this.state.topicsFollowed,
                    g = h.header,
                    b = h.detail_rich_text_options,
                    y = (b = void 0 === b ? {} : b).label_conditional_text,
                    Z =
                      (null === (e = h.navigation_link_options) ||
                      void 0 === e ||
                      null === (t = e.count_subtask_data_reference) ||
                      void 0 === t
                        ? void 0
                        : t.key) === Ar.TopicFollowCount,
                    w = d.createElement(
                      H.ZP,
                      {
                        disabled: !this._isNextButtonEnabled(),
                        onPress: this._handleNextButtonClick,
                        size: 'xLarge',
                        type: 'primaryFilled',
                      },
                      (null === (n = h.navigation_link_options) || void 0 === n ? void 0 : n.label_conditional_text) ||
                        h.next_link.label,
                    ),
                    x =
                      (null === (r = h.detail_rich_text_options) ||
                      void 0 === r ||
                      null === (o = r.count_subtask_data_reference) ||
                      void 0 === o
                        ? void 0
                        : o.key) === Ar.TopicFollowCount &&
                      this._getModuleFetchStatus() !== Fr.Z.FAILED &&
                      y
                        ? d.createElement(
                            p.Z,
                            { style: Wr.spaceBetween },
                            this._renderThresholdDetailText(y, _.size),
                            w,
                          )
                        : w,
                    C = d.createElement(
                      ye.Z,
                      (0, a.Z)({}, u, {
                        footer: d.createElement(p.Z, { style: Wr.footer }, x),
                        header: d.createElement(ke, {
                          header: g,
                          onNavigate: c,
                          subtaskInputs: f,
                          withHeaderImage: !0,
                        }),
                        providePadding: !0,
                      }),
                      d.createElement(
                        p.Z,
                        null,
                        h.graphql_timeline_query || h.timeline_source
                          ? d.createElement(Be.Z, null, function (e) {
                              var t = e.containerWidth >= v.Z.theme.breakpoints.small
                              return d.createElement(
                                zr.m.Provider,
                                {
                                  value: {
                                    onInitialize: Z ? i._handleOnTopicInitialize : k.Z,
                                    onFollow: Z ? i._handleOnTopicFollow : k.Z,
                                    onUnfollow: Z ? i._handleOnTopicUnfollow : k.Z,
                                  },
                                },
                                d.createElement(Tr.Z, {
                                  entryConfiguration: Hr(t),
                                  module: i._getModule(m),
                                  renderUnavailable: jr,
                                  title: '',
                                  withoutHeadroom: !0,
                                }),
                              )
                            })
                          : null,
                      ),
                      l,
                    )
                  return h.scribe_config ? d.createElement(Pr.nO, { namespace: h.scribe_config }, C) : C
                },
              },
            ]),
            n
          )
        })(d.Component),
        Wr = v.Z.create(function (e) {
          return {
            detailText: { justifyContent: 'center' },
            spaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
            footer: { marginVertical: e.spaces.space24 },
          }
        })
      var qr = Rr(Gr)
      var $r = function $r(e) {
        var t = e || {},
          n = t.addToast,
          a = t.onNavigate,
          r = t.subtask,
          o = t.subtaskId
        return d.createElement(Ge, {
          navigationLink: r.next_link,
          onNavigate: a,
          subtaskAction: function subtaskAction() {
            return new Promise(function (e, t) {
              e(
                (function () {
                  if (null != r && r.message) {
                    var e = r.message.text
                    n({ text: e })
                  }
                })(),
              )
            })
          },
          subtaskId: o,
        })
      }
      var Kr = n(434740),
        Yr = n(93983),
        Qr = 'selected_custom_interests',
        Xr = 'selected_interest_ids',
        Jr = function Jr(e, t) {
          return t.subtaskId
        },
        eo = function eo() {
          return (0, tn.P1)(R.$B, Jr, function (e, t) {
            return ((0, W.OG)(e, { key: Qr, subtask_id: t }, []) || []).map(function (e) {
              return { topic: e.custom_interest, ttt_token: e.ttt_token }
            })
          })
        },
        to = function to(e, t) {
          var n = (0, R.$B)(e)
          return (0, W.OG)(n, { key: Xr, subtask_id: t.subtaskId }, []) || void 0
        }
      var no = (0, We.Z)().propsFromState(function () {
          return {
            initialCustomInterests: eo(),
            initialCustomInterestIds: (0, tn.P1)(eo(), function (e) {
              return e.map(function (e) {
                return e.topic
              })
            }),
            initialSelectedInterestIds: to,
          }
        }),
        ao = 'ocfInterestPickerNextLink',
        ro = 'ocfInterestPickerSkipLink'
      var oo = [V.my.Topics],
        io = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_maybeRenderCustomInterests', function () {
                var e = a.props.subtask.custom_interests_header,
                  t = a.state,
                  n = t.customInterests
                if (t.shouldRenderCustomInterests)
                  return d.createElement(
                    p.Z,
                    null,
                    d.createElement(
                      p.Z,
                      { style: so.group, testID: 'custom' },
                      d.createElement(m.ZP, { size: 'headline1', style: so.groupHeader, weight: 'bold' }, e),
                      d.createElement(
                        p.Z,
                        { style: so.pillsContainer },
                        n.map(function (e) {
                          return a._renderCustomInterest(e.topic)
                        }),
                      ),
                    ),
                  )
              }),
              (0, u.Z)((0, s.Z)(a), '_renderGroup', function (e) {
                var t
                if (e.show_more) {
                  var n = e.show_more.initial_to_show + (e.expanded ? e.show_more.extra_to_show : 0)
                  t = e.items.slice(0, n)
                } else t = e.items
                return d.createElement(
                  p.Z,
                  { key: 'group_'.concat(e.header), style: so.group, testID: 'group' },
                  d.createElement(m.ZP, { size: 'headline1', style: so.groupHeader, weight: 'bold' }, e.header),
                  d.createElement(
                    p.Z,
                    { style: so.pillsContainer },
                    t.map(a._renderSelectionPill),
                    a._maybeRenderShowMoreButton(e),
                  ),
                )
              }),
              (0, u.Z)((0, s.Z)(a), '_maybeRenderShowMoreButton', function (e) {
                var t = e.show_more
                return t && e.items.length > t.initial_to_show && !e.expanded
                  ? d.createElement(Kr.Z, {
                      compact: !0,
                      key: 'showMore_'.concat(e.header),
                      mode: 'expand',
                      onClick: a._handleShowMore(e),
                      style: so.selectionPillStyles,
                      text: t.text,
                    })
                  : null
              }),
              (0, u.Z)((0, s.Z)(a), '_renderCustomInterest', function (e) {
                var t = a.state.selectedCustomInterestIds
                return d.createElement(Kr.Z, {
                  compact: !0,
                  key: 'selectionPill_'.concat(e),
                  onClick: a._handleToggleCustomInterest(e),
                  selected: t.has(e),
                  style: so.selectionPillStyles,
                  text: e,
                })
              }),
              (0, u.Z)((0, s.Z)(a), '_renderSelectionPill', function (e) {
                var t = a.state.selectedInterestIds.has(e.id),
                  n = a._handleToggleInterest(e.id, t)
                return d.createElement(Kr.Z, {
                  compact: !0,
                  key: 'selectionPill_'.concat(e.id),
                  onClick: n,
                  selected: t,
                  style: so.selectionPillStyles,
                  text: e.name,
                })
              }),
              (0, u.Z)((0, s.Z)(a), '_shouldShowSkipInstead', function () {
                var e = a.state,
                  t = e.selectedCustomInterestIds,
                  n = e.selectedInterestIds
                return a.props.subtask.skip_link && 0 === n.size && 0 === t.size
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSuggestionSelected', function (e) {
                var t = a.state,
                  n = t.customInterestIds,
                  r = t.selectedCustomInterestIds
                if (e.type === V.El.Topic || e.type === V.El.Hashtag) {
                  var o = e.data.topic,
                    i = { topic: o, ttt_token: void 0 }
                  n.has(o) ||
                    a.setState({
                      customInterests: a.state.customInterests.concat([i]),
                      customInterestIds: (0, at.Z)((0, G.Z)(n)).add(o),
                      selectedCustomInterestIds: (0, at.Z)((0, G.Z)(r)).add(o),
                      shouldRenderCustomInterests: !0,
                    })
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleShowMore', function (e) {
                return function () {
                  var t = a.state.groups,
                    n = t.find(function (t) {
                      return t.header === e.header
                    })
                  n && (n.expanded = !0), a.setState({ groups: t })
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleToggleCustomInterest', function (e) {
                return function () {
                  var t = (0, at.Z)((0, G.Z)(a.state.selectedCustomInterestIds))
                  t.has(e)
                    ? (t['delete'](e), a.setState({ selectedCustomInterestIds: t }))
                    : a.setState({ selectedCustomInterestIds: t.add(e) })
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleToggleInterest', function (e, t) {
                return function () {
                  var n = (0, at.Z)((0, G.Z)(a.state.selectedInterestIds))
                  t
                    ? (n['delete'](e), a.setState({ selectedInterestIds: n }))
                    : a.setState({ selectedInterestIds: n.add(e) })
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleNextButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow,
                  i = a.state,
                  s = i.customInterests,
                  l = i.selectedCustomInterestIds,
                  c = s.reduce(function (e, t) {
                    return l.has(t.topic) && e.push({ custom_interest: t.topic, ttt_token: t.ttt_token }), e
                  }, [])
                o(r, {
                  link: n.next_link.link_id,
                  selected_interest_ids: Array.from(a.state.selectedInterestIds),
                  selected_custom_interests: c,
                }),
                  t(n.next_link)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.updateFlow
                n.skip_link && o(r, { link: n.skip_link.link_id }), n.skip_link && t(n.skip_link)
              })
            var r = e.initialCustomInterestIds,
              i = e.initialCustomInterests,
              l = e.initialSelectedInterestIds,
              c = e.subtask.selected_items
            return (
              (a.state = {
                groups: e.subtask.groups || [],
                customInterests: (0, G.Z)(i),
                customInterestIds: (0, at.Z)(r),
                selectedCustomInterestIds: (0, at.Z)(r),
                selectedInterestIds: l && l.length > 0 ? (0, at.Z)(l) : (0, at.Z)(c || []),
                shouldRenderCustomInterests: i.length > 0,
              }),
              a
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    r = e.subtask,
                    o = e.subtaskInputs,
                    i = r.next_link,
                    s = r.primary_text,
                    l = r.secondary_text,
                    c = r.skip_link,
                    u = this.state.groups
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, n, {
                      footer: d.createElement(te, {
                        actionLabel: this._shouldShowSkipInstead() || null == i ? void 0 : i.label,
                        actionTestID: ao,
                        onAction: this._handleNextButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this._shouldShowSkipInstead() ? (null == c ? void 0 : c.label) : void 0,
                        secondaryActionTestID: ro,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: t,
                        primaryTextProp: s,
                        secondaryTextProp: l,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    r.hide_search
                      ? null
                      : d.createElement(
                          p.Z,
                          { style: so.searchContainer },
                          d.createElement(Yr.R7, {
                            filter: oo,
                            maxTopics: 8,
                            onItemClick: this._handleSuggestionSelected,
                            placeholder: r.hint,
                            rounded: !0,
                            shouldAutoFocus: !0,
                            shouldClearOnSelect: !0,
                            source: V._4.WelcomeFlow,
                            withFocusStyling: !0,
                          }),
                        ),
                    this._maybeRenderCustomInterests(),
                    d.createElement(p.Z, null, u.map(this._renderGroup)),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        so = v.Z.create(function (e) {
          return {
            searchContainer: { marginBottom: e.spaces.space16, zIndex: 1 },
            selectionPillStyles: { margin: e.spaces.space4 },
            pillsContainer: { flexDirection: 'row', flexWrap: 'wrap' },
            groupHeader: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 },
            group: { marginBottom: e.spaces.space12 },
          }
        })
      var lo = no(io)
      var co = n(808443),
        uo = n(987053),
        po = 0
      var ho = function ho(e) {
        var t = d.useState(!1),
          n = (0, w.Z)(t, 2),
          a = n[0],
          o = n[1],
          i = d.useRef(null),
          s = e || {},
          l = s.onNavigate,
          c = s.subtask,
          u = c.next_link,
          p = c.timeout_ms,
          h = void 0 === p ? 2e3 : p,
          m = c.url,
          f = s.subtaskId,
          _ = s.updateFlow,
          v = d.useCallback(
            function () {
              var e = Math.min(100, h),
                t = 0,
                n = setInterval(function () {
                  var a = i.current && i.current.value ? { response: i.current.value } : void 0
                  ;(t += e),
                    ((a && po++ % 20 == 0) || t >= h) &&
                      (clearInterval(n), _(f, (0, r.Z)((0, r.Z)({}, a), {}, { link: u.link_id })), l(u))
                }, e)
              return n
            },
            [u, l, _, f, h],
          )
        return (
          d.useEffect(
            function () {
              var e
              return (
                o(!1),
                uo.Z.replace({
                  callback: function callback() {
                    o(!0), (e = v())
                  },
                  scriptId: 'jsInstLibrary',
                  src: m,
                }),
                function () {
                  return clearInterval(e)
                }
              )
            },
            [v, m],
          ),
          d.createElement(
            d.Fragment,
            null,
            d.createElement('input', {
              autoComplete: 'off',
              'data-testid': 'tim_input',
              id: 'tim_input',
              name: 'ui_metrics',
              ref: i,
              type: 'hidden',
            }),
            a ? null : d.createElement(co.Z, { style: mo.activityIndicator }),
          )
        )
      }
      var mo = v.Z.create(function (e) {
          return { activityIndicator: { height: '100%' } }
        }),
        fo = n(444487),
        _o = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
              r[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, u.Z)((0, s.Z)(e), '_makeNavFunction', function (t) {
                return function () {
                  var n = e.props,
                    a = n.onNavigate,
                    r = n.subtaskId
                  ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
                }
              }),
              (0, u.Z)((0, s.Z)(e), '_itemFromNavLink', function (t) {
                return { text: t.label || '', onClick: e._makeNavFunction(t) }
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.subtask,
                    r = e.subtaskInputs
                  return d.createElement(fo.Z, {
                    cancelButtonLabel: n.cancel_link && n.cancel_link.text,
                    description: n.primary_text
                      ? d.createElement(
                          Y,
                          (0, a.Z)({}, n.primary_text, {
                            nativeID: oe.Q_,
                            onNavigate: t,
                            style: { padding: v.Z.theme.spacesPx.space16 },
                            subtaskInputs: r,
                          }),
                        )
                      : null,
                    items: n.primary_action_links.map(this._itemFromNavLink),
                    onCloseRequested: n.cancel_link ? this._makeNavFunction(n.cancel_link) : k.Z,
                  })
                },
              },
            ]),
            n
          )
        })(d.Component),
        vo = n(847790),
        go = function go(e) {
          return vo.selectBrowserPushStatus(e)
        }
      var bo = (0, We.Z)()
        .propsFromState(function () {
          return { promptAllowed: vo.selectShouldPromptBrowserPush, pushSettingsStatus: go }
        })
        .adjustStateProps(function (e) {
          var t = e.promptAllowed,
            n = e.pushSettingsStatus
          return { promptAllowed: t, pushSettingsFetchStatus: n.fetchStatus, subscribed: n.subscribed }
        })
        .propsFromActions(function () {
          return {
            createLocalApiErrorHandler: (0, x.createLocalApiErrorHandlerWithContextFactory)(
              'NOTIFICATIONS_PERMISSIONS_PROMPT',
            ),
            dismissPushNotificationsPrompt: vo.dismissPushNotificationsPrompt,
            fetchPushSettingsIfNeeded: vo.fetchPushSettingsIfNeeded,
            loadPushPromptSettingsIfNeeded: vo.loadPushPromptSettingsIfNeeded,
            pushSubscribe: vo.pushSubscribe,
          }
        })
        .withAnalytics()
      var ko = function ko(e) {
        var t = e.componentCollection,
          n = e.onPrimaryAction,
          a = e.onSecondaryAction
        return d.createElement(Rt, { componentCollection: t, onPrimaryAction: n, onSecondaryAction: a })
      }
      var yo = n(882998)
      var Zo = function Zo(e) {
        var t = e.handleConfirm,
          n = e.handleSkip,
          r = e.onNavigate,
          o = e.passthroughOcfScreenProps,
          i = e.subtask,
          s = e.subtaskInputs,
          l = i.primary_text
            ? d.createElement(Y, (0, a.Z)({}, i.primary_text, { nativeID: oe.Q_, onNavigate: r, subtaskInputs: s }))
            : null,
          c = i.secondary_text
            ? d.createElement(Y, (0, a.Z)({}, i.secondary_text, { onNavigate: r, subtaskInputs: s }))
            : null
        return i.granted_link.label
          ? d.createElement(
              ye.Z,
              (0, a.Z)({ hideLogo: !0 }, o),
              d.createElement(Fe.Z, {
                actionLabel: i.granted_link.label,
                graphic: yo['default'],
                graphicDisplayMode: i.auto_prompt ? 'none' : void 0,
                headline: l,
                onAction: i.auto_prompt ? n : t,
                onClose: n,
                onSecondaryAction: n,
                secondaryActionLabel: i.auto_prompt ? void 0 : i.denied_link.label,
                subtext: c,
                withCloseButton: !1,
              }),
            )
          : null
      }
      function wo(e, t) {
        e.granted_link.label ||
          (0, N.ZP)('Invalid notification permission prompt subtask: granted_link does not have a label', {
            extra: { subtaskId: t, grantedLinkId: e.granted_link.link_id },
          })
      }
      var xo = (function (e) {
        ;(0, l.Z)(n, e)
        var t = (0, c.Z)(n)
        function n() {
          var e
          ;(0, o.Z)(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
            r[i] = arguments[i]
          }
          return (
            (e = t.call.apply(t, [this].concat(r))),
            (0, u.Z)((0, s.Z)(e), '_actionClicked', function (t) {
              var n = e.props,
                a = n.onNavigate,
                r = n.subtaskId
              ;(0, n.updateFlow)(r, { link: t.link_id }), a(t)
            }),
            (0, u.Z)((0, s.Z)(e), '_handleSkip', function () {
              ;(0, e.props.dismissPushNotificationsPrompt)()
            }),
            (0, u.Z)((0, s.Z)(e), '_legacyHandleSkip', function () {
              var t = e.props,
                n = t.dismissPushNotificationsPrompt,
                a = t.subtask
              n(), e._actionClicked(a.denied_link)
            }),
            (0, u.Z)((0, s.Z)(e), '_handleConfirm', function () {
              return (0, e.props.pushSubscribe)().then(function () {
                return !1
              })
            }),
            (0, u.Z)((0, s.Z)(e), '_legacyHandleConfirm', function () {
              var t = e.props,
                n = t.pushSubscribe,
                a = t.subtask
              n().then(function () {
                e._actionClicked(a.granted_link)
              })
            }),
            (0, u.Z)((0, s.Z)(e), '_skipIfPushPromptNotAllowed', function () {
              var t = e.props,
                n = t.promptAllowed,
                a = t.subscribed,
                r = t.subtask
              n || e._actionClicked(a ? r.granted_link : r.denied_link)
            }),
            e
          )
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'componentDidMount',
              value: function value() {
                var e = this,
                  t = this.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.fetchPushSettingsIfNeeded,
                  r = t.pushSettingsFetchStatus,
                  o = t.pushSubscribe,
                  i = t.subtask,
                  s = t.subtaskId
                wo(i, s),
                  a()['catch'](n((0, u.Z)({}, I.ZP.AppInReadOnlyMode, { customAction: k.Z }))),
                  r === M.ZP.LOADED && this._skipIfPushPromptNotAllowed(),
                  i.auto_prompt &&
                    o().then(function (t) {
                      e._actionClicked(t ? i.granted_link : i.denied_link)
                    })
              },
            },
            {
              key: 'componentDidUpdate',
              value: function value(e) {
                var t = this.props,
                  n = t.pushSettingsFetchStatus,
                  a = t.subtask
                n === M.ZP.LOADED && e.pushSettingsFetchStatus === M.ZP.NONE && this._skipIfPushPromptNotAllowed(),
                  a !== e.subtask && wo(a, this.props.subtaskId)
              },
            },
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.onNavigate,
                  n = e.passthroughOcfScreenProps,
                  a = e.subtask,
                  r = e.subtaskInputs
                return a.component_collection
                  ? d.createElement(ko, {
                      componentCollection: a.component_collection,
                      onPrimaryAction: this._handleConfirm,
                      onSecondaryAction: this._handleSkip,
                    })
                  : d.createElement(Zo, {
                      handleConfirm: this._legacyHandleConfirm,
                      handleSkip: this._legacyHandleSkip,
                      onNavigate: t,
                      passthroughOcfScreenProps: n,
                      subtask: a,
                      subtaskInputs: r,
                    })
              },
            },
          ]),
          n
        )
      })(d.Component)
      var Co = bo(xo),
        Io = (0, We.Z)().propsFromActions(function () {
          return {
            callOnboardingPath: R.R2,
            createLocalApiErrorHandler: (0, x.createLocalApiErrorHandlerWithContextFactory)('OCF_OPEN_LINK'),
          }
        })
      var Eo = (function (e) {
        ;(0, l.Z)(n, e)
        var t = (0, c.Z)(n)
        function n() {
          var e
          ;(0, o.Z)(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
            r[i] = arguments[i]
          }
          return (
            (e = t.call.apply(t, [this].concat(r))),
            (0, u.Z)((0, s.Z)(e), '_hitCallbackPath', function () {
              var t = e.props,
                n = t.callOnboardingPath,
                a = t.createLocalApiErrorHandler,
                r = t.flowName,
                o = t.subtask.onboarding_callback_path
              return o ? n(o)['catch'](a(A(r, void 0, k.Z))) : Promise.resolve()
            }),
            e
          )
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId
                return d.createElement(Ge, {
                  navigationLink: n.link,
                  onNavigate: t,
                  subtaskAction: this._hitCallbackPath,
                  subtaskId: a,
                })
              },
            },
          ]),
          n
        )
      })(d.Component)
      var So = Io(Eo)
      n(687412), n(271245)
      var To = (0, We.Z)()
          .propsFromState(function () {
            return { navigationContext: R.b, verificationSendFailureMessage: R.aR }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: (0, x.createLocalApiErrorHandlerWithContextFactory)(
                'OCF_FLOW_PHONE_VERIFICATION',
              ),
              verifyIdentifier: R['if'],
            }
          })
          .withAnalytics({ component: 'phone_verification' }),
        Ao = 'ocfPhoneVerificationNextLink'
      var Po = 'normalized_phone',
        Fo = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e, a) {
            var r
            ;(0, o.Z)(this, n),
              (r = t.call(this, e, a)),
              (0, u.Z)((0, s.Z)(r), '_sendSmsVerificationRequest', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.navigationContext,
                  a = e.onNavigate,
                  o = e.subtask,
                  i = e.subtaskInputs,
                  s = e.verifyIdentifier,
                  l = o.phone_number && (0, W.Ds)(i, o.phone_number),
                  c = o.phone_country_code && (0, W.Ds)(i, o.phone_country_code),
                  u = n && n.action ? n.action === L.vY.ResendVoice : !!o.send_via_voice
                return (
                  r._isSmsAutoVerifyEnabled && r._autoVerifySmsCode(),
                  s({
                    phone: l,
                    use_voice: u,
                    sim_country_code: c,
                    send_auto_verify_hash:
                      r._isSmsAutoVerifyEnabled ||
                      (r._isSmsAutoVerifySupported &&
                        r.context.featureSwitches.isTrue('responsive_web_ocf_sms_autoverify_darkwrite')),
                  })
                    .then(function (e) {
                      var t = e.normalized_phone_number
                      t && r.setState({ normalized_phone: t })
                    })
                    ['catch'](function (e) {
                      var n = r.props,
                        i = n.flowName,
                        s = n.verificationSendFailureMessage
                      t(A(i, s || S))(e), a(o.fail_link)
                    })
                )
              }),
              (0, u.Z)(
                (0, s.Z)(r),
                '_getCodePattern',
                (0, Ne.Z)(function (e) {
                  return 'number' == typeof e && Number.isSafeInteger(e) && e > 0
                    ? new RegExp('^\\d{'.concat(e, '}$'))
                    : new RegExp('^\\d{6}$')
                }),
              ),
              (0, u.Z)((0, s.Z)(r), '_handleCodeUpdated', function (e) {
                r.setState({ code: e.target.value })
              }),
              (0, u.Z)((0, s.Z)(r), '_autoVerifySmsCode', function () {
                var e,
                  t = r.props.analytics
                t.scribe({ element: 'auto', action: 'attempt' }),
                  window.navigator.credentials
                    .get({
                      otp: { transport: ['sms'] },
                      signal: null === (e = r._smsAutoVerifyAbortController) || void 0 === e ? void 0 : e.signal,
                    })
                    .then(function (e) {
                      var n = e.code
                      n
                        ? ((r._smsAutoVerifyAbortController = void 0),
                          r.setState({ code: n }, function () {
                            t.scribe({ element: 'auto', action: 'success' }), r._handleDoneButtonClick()
                          }))
                        : t.scribe({ element: 'auto', action: 'missing' })
                    })
                    ['catch'](function () {
                      t.scribe({ element: 'auto', action: 'failure' })
                    })
              }),
              (0, u.Z)((0, s.Z)(r), '_handleDoneButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId,
                  o = e.updateFlow,
                  i = r.state,
                  s = i.code,
                  l = i.normalized_phone
                o(a, { code: s, link: n.next_link.link_id, normalized_phone: l, by_voice: !!n.send_via_voice }),
                  t(n.next_link)
              })
            var i = e.subtaskId,
              l = e.subtaskInputs,
              c = (0, W.OG)(l, { key: Po, subtask_id: i }, '') || ''
            return (
              (r.state = { code: '', normalized_phone: c, showSmsResendDialog: !1 }),
              (r._isSmsAutoVerifySupported = 'OTPCredential' in window),
              (r._isSmsAutoVerifyEnabled =
                r._isSmsAutoVerifySupported &&
                r.context.featureSwitches.isTrue('responsive_web_ocf_sms_autoverify_enabled')),
              r._isSmsAutoVerifyEnabled && (r._smsAutoVerifyAbortController = new AbortController()),
              r
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  return this._sendSmsVerificationRequest()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this._smsAutoVerifyAbortController &&
                    (this._smsAutoVerifyAbortController.abort(),
                    this.props.analytics.scribe({ element: 'auto', action: 'abort' }))
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    r = e.subtask,
                    o = e.subtaskInputs,
                    i = r.code_length,
                    s = r.next_link,
                    l = r.primary_text,
                    c = r.secondary_text,
                    u = this.state.code,
                    p = d.createElement(
                      Y,
                      (0, a.Z)({}, r.detail_text, {
                        color: 'link',
                        onNavigate: t,
                        style: No.detailLink,
                        subtaskInputs: o,
                      }),
                    )
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, n, {
                      footer: d.createElement(te, {
                        actionDisabled: 0 === u.length,
                        actionLabel: null == s ? void 0 : s.label,
                        actionTestID: Ao,
                        onAction: this._handleDoneButtonClick,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: t,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(An.Z, {
                      autoComplete: 'one-time-code',
                      autoFocus: !0,
                      helperText: p,
                      inputMode: 'numeric',
                      label: r.hint_text,
                      name: 'verfication_code',
                      onChange: this._handleCodeUpdated,
                      pattern: this._getCodePattern(i).source,
                      style: ue.formTextInput,
                      value: u,
                    }),
                    this.props.errorDialog,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component)
      ;(0, u.Z)(Fo, 'contextType', Z.rC)
      var No = v.Z.create(function (e) {
        return { detailLink: { marginTop: e.spaces.space16 } }
      })
      var Do = To(Fo)
      var Bo = 'discoverable_by_email',
        Lo = 'discoverable_by_phone',
        Oo = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_formatSubtaskInputsForRedux', function (e) {
                return {
                  link: a.props.subtask.next_link,
                  discoverable_by_email: e.discoverable_by_email ? 1 : 0,
                  discoverable_by_phone: e.discoverable_by_phone ? 1 : 0,
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_getInitialSubtaskInputs', function () {
                var e = a.props,
                  t = e.subtaskId,
                  n = e.subtaskInputs
                return {
                  discoverable_by_email: 0 !== (0, W.OG)(n, { key: Bo, subtask_id: t }),
                  discoverable_by_phone: 0 !== (0, W.OG)(n, { key: Lo, subtask_id: t }),
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, a._formatSubtaskInputsForRedux(a.state)), t(n.next_link)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDiscoverableByEmailToggle', function (e) {
                a.setState({ discoverable_by_email: e })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDiscoverableByPhoneToggle', function (e) {
                a.setState({ discoverable_by_phone: e })
              })
            var i = a._getInitialSubtaskInputs()
            return (a.state = (0, r.Z)({}, i)), a
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.state,
                    t = e.discoverable_by_email,
                    n = e.discoverable_by_phone,
                    r = this.props,
                    o = r.onNavigate,
                    i = r.passthroughOcfScreenProps,
                    s = r.subtask,
                    l = r.subtaskInputs,
                    c = s.next_link,
                    u = s.primary_text,
                    h = s.secondary_text
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, i, {
                      footer: d.createElement(te, {
                        actionLabel: null == c ? void 0 : c.label,
                        onAction: this._handleDoneButtonClick,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: o,
                        primaryTextProp: h || u,
                        subtaskInputs: l,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(
                      p.Z,
                      { accessibilityRole: 'label', style: ue.option },
                      d.createElement(
                        p.Z,
                        { style: ue.checkboxText },
                        d.createElement(m.ZP, null, s.discoverable_by_email_label),
                        d.createElement(
                          Y,
                          (0, a.Z)({}, s.discoverable_by_email_detail_text, {
                            color: 'gray700',
                            onNavigate: o,
                            size: 'subtext2',
                            subtaskInputs: l,
                          }),
                        ),
                      ),
                      d.createElement(Je.Z, { checked: t, onChange: this._handleDiscoverableByEmailToggle }),
                    ),
                    d.createElement(
                      p.Z,
                      { accessibilityRole: 'label', style: ue.option },
                      d.createElement(
                        p.Z,
                        { style: ue.checkboxText },
                        d.createElement(m.ZP, null, s.discoverable_by_phone_label),
                        d.createElement(
                          Y,
                          (0, a.Z)({}, s.discoverable_by_phone_detail_text, {
                            color: 'gray700',
                            onNavigate: o,
                            size: 'subtext2',
                            subtaskInputs: l,
                          }),
                        ),
                      ),
                      d.createElement(Je.Z, { checked: n, onChange: this._handleDiscoverableByPhoneToggle }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        Vo =
          (n(34707),
          n(372994),
          n(13675),
          n(694898),
          n(305825),
          n(367170),
          n(38857),
          n(58329),
          n(576279),
          n(600427),
          n(540171),
          n(157093),
          n(111159),
          n(342516),
          n(364349),
          n(915273),
          n(616729),
          n(141801),
          n(750574),
          n(205787),
          n(139271),
          n(73160),
          n(265688),
          n(893157),
          n(733333),
          n(270315),
          n(528314),
          n(250556),
          n(729224),
          n(824797)),
        Ro = function Ro(e) {
          var t,
            n = (t = e).replace(/-/g, '+').replace(/_/g, '/') + '===='.substring(0, (4 - (t.length % 4)) % 4),
            a = window.atob(n)
          return new Uint8Array(a.length).map(function (e, t) {
            return a.charCodeAt(t)
          }).buffer
        },
        Mo = function Mo(e) {
          var t = new Uint8Array(e),
            n = ''
          return (
            t.forEach(function (e) {
              return (n += String.fromCharCode(e))
            }),
            btoa(n).replace(/\+/g, '-').replace(/(\/)/g, '_').replace(/=/g, '')
          )
        },
        Uo = function Uo(e) {
          return e.map(function (e) {
            return { type: 'public-key', id: Ro(e.id) }
          })
        },
        zo = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) {
              i[l] = arguments[l]
            }
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, u.Z)(
                (0, s.Z)(e),
                '_supportsWebAuthn',
                !!window.PublicKeyCredential &&
                  'function' == typeof window.PublicKeyCredential &&
                  'function' == typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable,
              ),
              (0, u.Z)((0, s.Z)(e), '_navigateAndUpdate', function (t, n) {
                var a = e.props,
                  r = a.onNavigate,
                  o = a.subtaskId,
                  i = a.updateFlow
                n && i(o, { challenge_response: n, link: t.link_id }), r(t)
              }),
              (0, u.Z)((0, s.Z)(e), '_triggerWebAuthn', function (t) {
                var n = e.props.subtask,
                  a = n.challenge,
                  r = n.fail_link,
                  o = n.next_link
                e._getCredentialsRequest(a, t)()
                  .then(function (n) {
                    if (n) {
                      var a = e._getFinalResult(n, t)
                      e._navigateAndUpdate(o, a)
                    } else;
                  })
                  ['catch'](function () {
                    e._navigateAndUpdate(r)
                  })
              }),
              (0, u.Z)((0, s.Z)(e), '_getCredentialsRequest', function (e, t) {
                var n = JSON.parse(e)
                if (t === L.WP.enrollment) {
                  var a = {
                    publicKey: {
                      challenge: Ro(n.challenge),
                      rp: n.rp,
                      user: (0, r.Z)((0, r.Z)({}, n.user), {}, { id: Ro(n.user.id) }),
                      pubKeyCredParams: n.pubKeyCredParams,
                      attestation: n.attestation,
                      excludeCredentials: n.excludeCredentials.map(function (e) {
                        return (0, r.Z)((0, r.Z)({}, e), {}, { id: Ro(e.id) })
                      }),
                      extensions: n.extensions,
                      timeout: 6e4,
                      authenticatorSelection: {
                        authenticatorAttachment: 'cross-platform',
                        userVerification: 'discouraged',
                      },
                    },
                  }
                  return function () {
                    var e
                    return (
                      (null === (e = navigator.credentials) || void 0 === e ? void 0 : e.create(a)) || Promise.resolve()
                    )
                  }
                }
                var o = n.publicKeyCredentialRequestOptions,
                  i = {
                    publicKey: {
                      rpId: 'twitter.com',
                      extensions: { appid: o.extensions.appid },
                      challenge: Ro(o.challenge),
                      userVerification: 'discouraged',
                      timeout: 6e4,
                      allowCredentials: Uo(o.allowCredentials),
                    },
                  }
                return function () {
                  var e
                  return (null === (e = navigator.credentials) || void 0 === e ? void 0 : e.get(i)) || Promise.resolve()
                }
              }),
              (0, u.Z)((0, s.Z)(e), '_getFinalResult', function (e, t) {
                var n,
                  a = e.id,
                  r = e.response,
                  o = e.type
                return (
                  'enrollment' === t && r.attestationObject
                    ? (n = {
                        id: a,
                        type: o,
                        response: { clientDataJSON: Mo(r.clientDataJSON), attestationObject: Mo(r.attestationObject) },
                        clientExtensionResults: {},
                      })
                    : 'verification' === t &&
                      r.authenticatorData &&
                      (n = {
                        id: a,
                        type: o,
                        response: {
                          clientDataJSON: Mo(r.clientDataJSON),
                          authenticatorData: Mo(r.authenticatorData),
                          signature: Mo(r.signature),
                          userHandle: '',
                        },
                        clientExtensionResults: { appid: !0 },
                      }),
                  JSON.stringify(n || '')
                )
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props.subtask,
                    t = e.action_type,
                    n = e.unsupported_link
                  this._supportsWebAuthn
                    ? (0, Vo.Z)(this.props.errorDialog) && this._triggerWebAuthn(t)
                    : n && this._navigateAndUpdate(n)
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    r = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, r, { providePadding: !0 }),
                    t ||
                      d.createElement(
                        p.Z,
                        null,
                        this._supportsWebAuthn
                          ? null
                          : d.createElement(
                              Y,
                              (0, a.Z)({}, o.unsupported_error_message, { onNavigate: n, subtaskInputs: i }),
                            ),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        jo = n(982939),
        Ho = n(748974),
        Go = n(380779),
        Wo = n(5255),
        qo = n(918255),
        $o = n(633626),
        Ko = function Ko(e, t) {
          var n = $o.C6(e),
            a = n ? qo.m3(e, n) : []
          return (0, w.Z)(a, 1)[0]
        }
      var Yo = (0, We.Z)()
          .propsFromState(function () {
            return { loggedInUser: on.ZP.selectLoggedInUser, avatarMedia: Ko }
          })
          .propsFromActions(function () {
            return { addAvatarMedia: $o._D, removeAvatarMedia: $o.Xw }
          }),
        Qo = 'ocfSelectAvatarSkipForNowButton',
        Xo = 'ocfSelectAvatarNextButton'
      var Jo = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            return (
              (0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_handleCropDone', function () {
                return a.setState({ done: !0, showCropper: !1 })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleCropCancel', function () {
                return a._handleCropDone()
              }),
              (0, u.Z)((0, s.Z)(a), '_handleImageMediaChange', function (e) {
                ;(0, a.props.addAvatarMedia)(e[0]), a.setState({ mediaId: e[0], showCropper: !0, done: !0 })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleImageMediaFailure', function () {
                a._handleSkipButtonClick()
              }),
              (0, u.Z)((0, s.Z)(a), '_handleImageMediaRemove', function () {
                ;(0, a.props.removeAvatarMedia)(), a.setState({ done: !1, showCropper: !1 })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: n.next_link.link_id }), t(n.next_link)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              }),
              (a.state = { done: !1, showCropper: !1, mediaId: void 0 }),
              a
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    r = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.next_link,
                    l = o.primary_text,
                    c = o.secondary_text,
                    u = o.skip_link
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, r, {
                      footer: d.createElement(te, {
                        actionDisabled: !u && !this.state.mediaId,
                        actionLabel: this.state.done || !u ? (null == s ? void 0 : s.label) : void 0,
                        actionTestID: Xo,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.done || null == u ? void 0 : u.label,
                        secondaryActionTestID: Qo,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: n,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: i,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(p.Z, null, this._renderMediaPickerWithPreview()),
                    this.state.showCropper && void 0 !== this.state.mediaId
                      ? d.createElement(Ho.Z, {
                          circle: !0,
                          defaultAspectRatio: 1,
                          mediaId: this.state.mediaId,
                          onCancel: this._handleCropCancel,
                          onDone: this._handleCropDone,
                        })
                      : null,
                    t,
                  )
                },
              },
              {
                key: '_renderMediaPickerWithPreview',
                value: function value() {
                  var e = this.props,
                    t = e.avatarMedia,
                    n = e.loggedInUser,
                    a = this.state.done
                  return d.createElement(
                    p.Z,
                    { style: ei.centerContent },
                    d.createElement(Go['default'], {
                      borderRadius: jo.A.INFINITE,
                      currentContent: n
                        ? d.createElement(Re['default'], { size: 'custom', uri: n.profile_image_url_https })
                        : null,
                      location: Wo.vC.Avatar,
                      mediaItem: t,
                      onChange: this._handleImageMediaChange,
                      onFailure: this._handleImageMediaFailure,
                      onRemove: a ? this._handleImageMediaRemove : void 0,
                      rootStyle: ei.avatarContainer,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        ei = v.Z.create(function (e) {
          return {
            avatarContainer: {
              borderWidth: e.borderWidths.medium,
              borderColor: e.colors.white,
              borderStyle: 'solid',
              marginTop: e.spaces.space64,
              marginBottom: e.spaces.space64,
              width: 'calc('.concat(e.spaces.space64, ' * 3)'),
            },
            bannerContainer: { marginTop: e.spaces.space64, marginBottom: e.spaces.space64, maxHeight: '9em' },
            banner: { height: '100%' },
            centerContent: { alignItems: 'center', display: 'flex', width: '100%' },
          }
        })
      var ti = Yo(Jo)
      var ni = n(694407),
        ai = n(12934),
        ri = n(700400),
        oi = n(484973),
        ii = function ii(e, t) {
          var n = $o.C6(e),
            a = n ? qo.m3(e, n) : []
          return (0, w.Z)(a, 1)[0]
        },
        si = function si(e, t) {
          var n = $o.vW(e),
            a = n ? qo.m3(e, n) : []
          return (0, w.Z)(a, 1)[0]
        }
      var li = (0, We.Z)()
          .propsFromState(function () {
            return { loggedInUser: on.ZP.selectLoggedInUser, avatarMedia: ii, bannerMedia: si }
          })
          .propsFromActions(function () {
            return { addBannerMedia: $o.NJ, removeBannerMedia: $o.HR }
          }),
        ci = 'ocfSelectBannerSkipForNowButton',
        ui = 'ocfSelectBannerNextButton'
      var di = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            return (
              (0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_handleImageMediaRemove', function () {
                ;(0, a.props.removeBannerMedia)(), a.setState({ done: !1, showCropper: !1 })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleCropDone', function () {
                return a.setState({ done: !0, showCropper: !1 })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleCropCancel', function () {
                return a._handleCropDone()
              }),
              (0, u.Z)((0, s.Z)(a), '_handleImageMediaChange', function (e) {
                ;(0, a.props.addBannerMedia)(e[0]), a.setState({ media_id: e[0], showCropper: !0, done: !0 })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleImageMediaFailure', function () {
                a._handleSkipButtonClick()
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDoneButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, { link: n.next_link.link_id }), t(n.next_link)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              }),
              (a.state = { done: void 0, media_id: void 0, showCropper: !1 }),
              a
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    r = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.next_link,
                    l = o.primary_text,
                    c = o.secondary_text,
                    u = o.skip_link
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, r, {
                      footer: d.createElement(te, {
                        actionDisabled: !u && !this.state.media_id,
                        actionLabel: this.state.done || !u ? (null == s ? void 0 : s.label) : void 0,
                        actionTestID: ui,
                        onAction: this._handleDoneButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.done || null == u ? void 0 : u.label,
                        secondaryActionTestID: ci,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: n,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: i,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(
                      p.Z,
                      { style: pi.container },
                      this._renderMediaPickerWithPreview(),
                      d.createElement(p.Z, { style: oi.Z.avatarAndButton }, this._renderAvatar()),
                      this._renderNames(),
                    ),
                    this.state.showCropper && void 0 !== this.state.media_id
                      ? d.createElement(Ho.Z, {
                          defaultAspectRatio: 3,
                          mediaId: this.state.media_id,
                          onCancel: this._handleCropCancel,
                          onDone: this._handleCropDone,
                        })
                      : null,
                    t,
                  )
                },
              },
              {
                key: '_renderMediaPickerWithPreview',
                value: function value() {
                  var e = this.props,
                    t = e.bannerMedia,
                    n = e.loggedInUser,
                    a = t || (!!n && !!n.profile_banner_url),
                    r = this.state.done
                  return d.createElement(Go['default'], {
                    aspectRatio: 3,
                    currentContent: d.createElement(
                      ai.Z,
                      { ratio: v.Z.theme.aspectRatios.profileBanner },
                      a && n
                        ? d.createElement(ni.Z, { source: { uri: n.profile_banner_url }, style: pi.banner })
                        : null,
                    ),
                    location: Wo.vC.ProfileBanner,
                    mediaItem: t,
                    onChange: this._handleImageMediaChange,
                    onFailure: this._handleImageMediaFailure,
                    onRemove: r ? this._handleImageMediaRemove : void 0,
                    rootStyle: pi.bannerContainer,
                  })
                },
              },
              {
                key: '_renderAvatar',
                value: function value() {
                  var e = this.props,
                    t = e.avatarMedia,
                    n = e.loggedInUser,
                    a = (t && t.mediaFile && t.mediaFile.url) || (n && n.profile_image_url_https)
                  return d.createElement(Re['default'], {
                    accessibilityHidden: !0,
                    borderColor: 'white',
                    borderWidth: 'medium',
                    focusable: !1,
                    size: 'custom',
                    style: oi.Z.avatar,
                    uri: a,
                  })
                },
              },
              {
                key: '_renderNames',
                value: function value() {
                  var e = this.props.loggedInUser
                  if (!e) return null
                  var t = e.name,
                    n = '@'.concat(e.screen_name),
                    a = {
                      isBlueVerified: e.is_blue_verified,
                      isProtected: e['protected'],
                      isVerified: e.verified,
                      verifiedType: e.verified_type,
                    }
                  return d.createElement(
                    p.Z,
                    { style: pi.nameContainer },
                    d.createElement(
                      m.ZP,
                      { align: 'left', style: pi.names },
                      d.createElement(
                        m.ZP,
                        { accessibilityRole: 'heading', size: 'title4', style: pi.displayName, weight: 'bold' },
                        t,
                        d.createElement(m.ZP, { size: 'title4', style: pi.userBadges }, d.createElement(ri.Z, a)),
                      ),
                      d.createElement(m.ZP, { color: 'gray700', style: pi.screenName }, n),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        pi = v.Z.create(function (e) {
          return {
            container: { paddingBottom: e.spaces.space64 },
            avatarContainer: {
              marginStart: e.spaces.space16,
              marginTop: '-25%',
              maxWidth: 'calc(${theme.spaces.space16} * 8)',
              width: '25%',
            },
            bannerContainer: { marginTop: e.spaces.space64, marginBottom: e.spaces.space64, maxHeight: '9em' },
            banner: { height: '100%' },
            nameContainer: { marginStart: e.spaces.space16 },
            names: { display: 'block', marginBottom: e.spaces.space12 },
            displayName: { writingDirection: 'ltr', display: 'block', marginTop: e.spaces.space4 },
            screenName: { writingDirection: 'ltr' },
            userBadges: { display: 'inline-flex', flexDirection: 'row', flexShrink: 0 },
          }
        })
      var hi = li(di)
      var mi = n(841361),
        fi = n(928316),
        _i = n(539466),
        vi = n(308329),
        gi = n(551908)
      var bi = 'Ocf_Scroll_Prompt_Container'
      var ki = v.Z.create(function (e) {
        return {
          icon: { height: '1.5em', width: '1.5em' },
          pillContainer: {
            bottom: e.spaces.space16,
            alignItems: 'center',
            start: '0',
            end: '0',
            margin: 'auto',
            zIndex: 1,
          },
          pillContainerNarrow: { position: 'fixed' },
          pillContainerModal: { position: 'absolute' },
        }
      })
      var yi = function yi(e) {
          var t = e.isModal,
            n = e.label,
            a = e.onPress,
            r = [ki.pillContainer, t ? ki.pillContainerModal : ki.pillContainerNarrow]
          return d.createElement(
            p.Z,
            { style: r, testID: bi },
            d.createElement(
              H.ZP,
              { icon: d.createElement(gi['default'], { style: ki.icon }), onPress: a, type: 'primaryFilled' },
              d.createElement(m.ZP, { size: 'body', weight: 'normal' }, n),
            ),
          )
        },
        Zi = 'ocfSettingsListNextButton',
        wi = 'ocfSettingsListSkipButton',
        xi = 'ocfSettingsListPrimaryText'
      var Ci = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_formatSubtaskInputsForStore', function (e) {
                return (0, dt.Z)(e).map(function (e) {
                  var t = (0, w.Z)(e, 2),
                    n = t[0],
                    a = t[1],
                    r = a.result,
                    o = a.type
                  return { key: n, response_data: (0, u.Z)({}, o, { result: r }) }
                })
              }),
              (0, u.Z)((0, s.Z)(a), '_loadSubtaskInputsFromStore', function () {
                var e = a.props,
                  t = e.subtaskId,
                  n = e.subtaskInputs
                return ((0, W.OG)(n, { key: L.Xb, subtask_id: t }, []) || []).reduce(function (e, t) {
                  var n = t.key,
                    a = Object.keys(t.response_data),
                    r = (0, w.Z)(a, 1)[0],
                    o = t.response_data[r].result
                  return (e[n] = { result: o, type: r }), e
                }, {})
              }),
              (0, u.Z)((0, s.Z)(a), '_updateFlow', function (e) {
                var t,
                  n = a.props,
                  r = n.subtask,
                  o = n.subtaskId,
                  i = n.updateFlow,
                  s = r.next_link,
                  l = a.state.settingsValues
                if (e)
                  i(
                    o,
                    ((t = {}), (0, u.Z)(t, L.Xb, a._formatSubtaskInputsForStore(l)), (0, u.Z)(t, 'link', e.link_id), t),
                  )
                else if (s) {
                  var c
                  i(
                    o,
                    ((c = {}), (0, u.Z)(c, L.Xb, a._formatSubtaskInputsForStore(l)), (0, u.Z)(c, 'link', s.link_id), c),
                  )
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleShowMore', function () {
                a.setState({ showMore: !0 })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleNextButtonPress', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.next_link
                a._updateFlow(), n && t(n)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSubListBackClick', function () {
                a.setState({ isSubList: !1, showDividers: !1, showMoreConfig: null, subList: [], subListHeader: null }),
                  a._updateFlow()
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSettingGroupClick', function (e) {
                var t,
                  n = e.primary_text,
                  r = e.value_data,
                  o = e.value_type,
                  i = null == r || null === (t = r.settings_group_data) || void 0 === t ? void 0 : t.settings
                i &&
                  o === L.h0.SettingsGroup &&
                  a.setState({ isSubList: !0, showDividers: !1, showMoreConfig: null, subList: i, subListHeader: n })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleScrollPromptClick', function () {
                a._viewport && a._viewport.scrollBy(a._viewport.getRect().getHeight())
              }),
              (0, u.Z)((0, s.Z)(a), '_handleViewportSet', function (e) {
                a.props.subtask.scroll_hint &&
                  (a._removeScrollListener && a._removeScrollListener(),
                  (a._viewport = e),
                  a._viewport && (a._removeScrollListener = a._viewport.addScrollListener(a._handleViewportScroll)))
              }),
              (0, u.Z)(
                (0, s.Z)(a),
                '_handleViewportScroll',
                (0, _i.Z)(function () {
                  a.state.lastSettingSeen || a.setState({ lastSettingSeen: a._isLastSettingInViewport() })
                }, 250),
              ),
              (0, u.Z)((0, s.Z)(a), '_isLastSettingInViewport', function () {
                if (a._lastSetting && a._viewport) {
                  var e,
                    t = a._lastSetting.getBoundingClientRect(),
                    n = null === (e = a._viewport) || void 0 === e ? void 0 : e.getRect()
                  if (n) return t.top >= n.getTop() && t.bottom <= n.getBottom()
                }
                return !1
              }),
              (0, u.Z)((0, s.Z)(a), '_isPrompt', function () {
                return 'prompt' === a.props.subtask.style
              }),
              (0, u.Z)((0, s.Z)(a), '_setSettingsRef', function (e) {
                return function (t) {
                  var n = a.state.isSubList
                  if (a.props.subtask.scroll_hint && !n && e && void 0 === a._lastSetting) {
                    a._lastSetting = fi.findDOMNode(t)
                    var r = a._isLastSettingInViewport()
                    r && !a.state.lastSettingSeen && a.setState({ lastSettingSeen: r })
                  } else a._lastSetting = void 0
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSettingToggle', function (e) {
                var t = e.value_identifier,
                  n = e.value_type
                if (t && (0, W._w)(n)) {
                  var o = a.state.settingsValues
                  a.setState({
                    settingsValues: (0, r.Z)(
                      (0, r.Z)({}, o),
                      {},
                      (0, u.Z)({}, t, (0, r.Z)((0, r.Z)({}, o[t]), {}, { result: !o[t].result })),
                    ),
                  })
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSettingTextChange', function (e, t) {
                var n = e.value_identifier
                if (n) {
                  var o = a.state.settingsValues
                  a.setState({
                    settingsValues: (0, r.Z)(
                      (0, r.Z)({}, o),
                      {},
                      (0, u.Z)({}, n, (0, r.Z)((0, r.Z)({}, o[n]), {}, { result: t })),
                    ),
                  })
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleCancelButtonPress', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.cancel_link
                n && (a._updateFlow(n), t(n))
              }),
              (0, u.Z)((0, s.Z)(a), '_getSettingsValueNextLink', function () {
                var e = a.props.subtask
                if (e.next_link) return e.next_link
                var t,
                  n = (0, mi.Z)(e.settings)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r,
                      o = t.value,
                      i = o.value_data,
                      s = o.value_identifier,
                      l = null == i || null === (r = i.button) || void 0 === r ? void 0 : r.navigation_link
                    if (s === L.ZF.NextButton && l) return l
                  }
                } catch (c) {
                  n.e(c)
                } finally {
                  n.f()
                }
              })
            var i = e.subtask,
              l = a._initializeSettingsState(i.settings)
            return (
              (a.state = {
                isSubList: !1,
                showDividers: !!i.show_divider,
                showMoreConfig: i.show_more,
                showMore: !1,
                subList: [],
                subListHeader: null,
                settingsValues: l,
                lastSettingSeen: !1,
              }),
              a
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props,
                    t = e.isModal,
                    n = e.subtask,
                    a = e.viewport
                  n.scroll_hint &&
                    !t &&
                    this._isPrompt() &&
                    ((this._viewport = a),
                    (this._removeScrollListener = this._viewport.addScrollListener(this._handleViewportScroll))),
                    this._updateFlow()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this._removeScrollListener && this._removeScrollListener()
                },
              },
              {
                key: 'render',
                value: function value() {
                  return this.state.isSubList ? this._renderSubList() : this._renderMainList()
                },
              },
              {
                key: '_renderMainList',
                value: function value() {
                  var e,
                    t = this.props,
                    n = t.errorDialog,
                    r = t.isModal,
                    o = t.onNavigate,
                    i = t.passthroughOcfScreenProps,
                    s = t.subtask,
                    l = t.subtaskId,
                    c = t.subtaskInputs,
                    u = s.header,
                    h = s.primary_text,
                    f = s.secondary_text,
                    _ = this.state.lastSettingSeen,
                    v = !!!s.scroll_hint || _,
                    g = this._isPrompt(),
                    b = this._renderNavigationButtons(v),
                    k = s.scroll_hint,
                    y =
                      !v && k
                        ? d.createElement(yi, { isModal: !!r, label: k, onPress: this._handleScrollPromptClick })
                        : null,
                    Z = (null !== (e = s.horizontal_style) && void 0 !== e ? e : L.YI.Normal) === L.YI.Compact,
                    w = l === L.D7
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, i, {
                      footer: g ? void 0 : b,
                      onViewportSet: this._handleViewportSet,
                      providePadding: !g && !Z,
                      scrollPrompt: y,
                    }),
                    d.createElement(
                      p.Z,
                      { style: [Z && ue.contentAreaCompact, Ii.bottomPadding, g && Ii.centeredRoot] },
                      d.createElement(ke, {
                        header: u,
                        onNavigate: o,
                        primaryTextProp: h,
                        primaryTextTestID: xi,
                        secondaryTextProp: f,
                        subtaskInputs: c,
                      }),
                      this._renderSettingsList(s.settings),
                      w ? d.createElement(m.ZP, { color: 'gray700', size: 'subtext2' }, ce.K2) : null,
                      s.detail_text
                        ? d.createElement(
                            Y,
                            (0, a.Z)({}, s.detail_text, {
                              color: 'gray700',
                              onNavigate: o,
                              style: Ii.detailText,
                              subtaskInputs: c,
                            }),
                          )
                        : null,
                      g && b ? d.createElement(p.Z, { style: Ii.doneButtonContainer }, b) : null,
                    ),
                    n,
                  )
                },
              },
              {
                key: '_renderSubList',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.subtaskInputs,
                    r = this.state,
                    o = r.subList,
                    i = r.subListHeader
                  return d.createElement(
                    ye.Z,
                    { onBackClick: this._handleSubListBackClick },
                    d.createElement(
                      p.Z,
                      { style: ue.contentArea },
                      d.createElement(
                        Y,
                        (0, a.Z)({}, i, {
                          onNavigate: t,
                          size: 'title4',
                          style: Ii.headline,
                          subtaskInputs: n,
                          weight: 'bold',
                        }),
                      ),
                      this._renderSettingsList(o),
                    ),
                  )
                },
              },
              {
                key: '_renderSettingsList',
                value: function value(e) {
                  var t = this,
                    n = this.props,
                    a = n.addToast,
                    r = n.onNavigate,
                    o = n.removeContacts,
                    i = n.subtaskId,
                    s = n.subtaskInputs,
                    l = this.state,
                    c = l.showDividers,
                    u = l.showMore,
                    p = l.showMoreConfig,
                    h = this._getSettingsValueNextLink()
                  return d.Children.toArray(
                    e.map(function (n, l) {
                      var m = l === e.length - 1
                      if (p && !u) {
                        if (l === p.initial_to_show)
                          return d.createElement(Qe.Z, { color: 'primary', label: p.text, onPress: t._handleShowMore })
                        if (l > p.initial_to_show) return null
                      }
                      return d.createElement(Fa, {
                        addToast: a,
                        nextLink: h,
                        onNavigate: r,
                        onSettingGroupClick: t._handleSettingGroupClick,
                        onSettingTextChanged: t._handleSettingTextChange,
                        onSettingToggle: t._handleSettingToggle,
                        ref: t._setSettingsRef(m),
                        removeContacts: o,
                        settingValue: n,
                        showDividers: !m && c,
                        subtaskId: i,
                        subtaskInputs: s,
                        updateFlow: t._updateFlow,
                      })
                    }),
                  )
                },
              },
              {
                key: '_renderNavigationButtons',
                value: function value(e) {
                  var t = this.props.subtask,
                    n = t.cancel_link,
                    a = t.next_link,
                    r = {
                      actionDisabled: !e,
                      actionLabel: null == a ? void 0 : a.label,
                      actionTestID: Zi,
                      onAction: this._handleNextButtonPress,
                      onSecondaryAction: this._handleCancelButtonPress,
                      secondaryActionLabel: null == n ? void 0 : n.label,
                      secondaryActionTestID: wi,
                    }
                  return J(r) ? d.createElement(te, r) : null
                },
              },
              {
                key: '_initializeSettingsState',
                value: function value(e) {
                  var t = this._loadSubtaskInputsFromStore()
                  return t && Object.keys(t).length > 0
                    ? t
                    : e.reduce(function (e, t) {
                        var n,
                          a = t.value_data,
                          r = t.value_identifier,
                          o = t.value_type
                        if (r && a && (0, W._w)(o))
                          e[r] = {
                            result: null === (n = a.boolean_data) || void 0 === n ? void 0 : n.initial_value,
                            type: Object.keys(a)[0],
                          }
                        else if (r && o === L.h0.TextField) e[r] = { result: '', type: 'text_data' }
                        else if (o === L.h0.SettingsGroup) {
                          var i
                          ;(
                            (null == a || null === (i = a.settings_group_data) || void 0 === i ? void 0 : i.settings) ||
                            []
                          ).forEach(function (t) {
                            var n,
                              a = t.value_data,
                              r = t.value_identifier,
                              o = t.value_type
                            r &&
                              a &&
                              (0, W._w)(o) &&
                              (e[r] = {
                                result: null === (n = a.boolean_data) || void 0 === n ? void 0 : n.initial_value,
                                type: Object.keys(a)[0],
                              })
                          })
                        }
                        return e
                      }, {})
                },
              },
            ]),
            n
          )
        })(d.Component),
        Ii = v.Z.create(function (e) {
          return {
            centeredRoot: { alignItems: 'center' },
            headline: { marginBottom: e.spaces.space12 },
            detailText: { marginTop: e.spaces.space40 },
            bottomPadding: { paddingBottom: e.spaces.space48 },
            doneButtonContainer: { marginTop: e.spaces.space40 },
          }
        })
      var Ei = (0, vi.Z)(Ci)
      var Si = function Si() {
          return n.e('ondemand.qrcode').then(n.t.bind(n, 374061, 19))
        },
        Ti = 'ocfShowCodeNextLink',
        Ai = 'ocfShowCodeSkipLink'
      function Pi(e) {
        var t = e.errorDialog,
          n = e.onNavigate,
          r = e.passthroughOcfScreenProps,
          o = e.subtask,
          i = o.code,
          s = o.detail_text,
          l = o.header,
          c = o.next_link,
          u = o.skip_link,
          h = o.style,
          f = e.subtaskId,
          _ = e.subtaskInputs,
          v = e.updateFlow,
          g = s ? d.createElement(Y, (0, a.Z)({}, s, { onNavigate: n, subtaskInputs: _ })) : null
        return d.createElement(
          ye.Z,
          (0, a.Z)({}, r, {
            footer: d.createElement(te, {
              actionLabel: null == c ? void 0 : c.label,
              actionTestID: Ti,
              onAction: function onAction() {
                v(f, { link: c.link_id }), n(c)
              },
              onSecondaryAction: function onSecondaryAction() {
                u && (v(f, { link: u.link_id }), n(u))
              },
              secondaryActionLabel: null == u ? void 0 : u.label,
              secondaryActionTestID: Ai,
              secondaryActionType: 'primaryOutlined',
            }),
            header: d.createElement(ke, { header: l, onNavigate: n, subtaskInputs: _, withHeaderImage: !0 }),
            providePadding: !0,
          }),
          h === L.C_.Qr
            ? d.createElement(
                p.Z,
                { style: Fi.qrCode },
                d.createElement('canvas', {
                  ref: function ref(t) {
                    var n = e.subtask.code
                    Si().then(function (e) {
                      t && e.toCanvas(t, n, { margin: 5, scale: 5 })
                    })
                  },
                }),
                d.createElement(p.Z, { style: Fi.detailText }, g),
              )
            : d.createElement(
                d.Fragment,
                null,
                d.createElement(m.ZP, { size: 'title4', style: Fi.code, weight: 'bold' }, i),
                d.createElement(p.Z, { style: Fi.detailText }, g),
              ),
          t,
        )
      }
      var Fi = v.Z.create(function (e) {
          return {
            qrCode: { alignItems: 'center', paddingVertical: e.spaces.space16 },
            code: { backgroundColor: e.colors.gray0, margin: 'auto', padding: 15, width: '100%', textAlign: 'center' },
            detailText: { paddingTop: e.spaces.space16 },
            secondaryButton: { marginTop: e.spaces.space12 },
          }
        }),
        Ni = n(896958),
        Di = n(817492),
        Bi = n(730535),
        Li = function Li(e) {
          return !Bi.LP(e).is_eu_country
        },
        Oi = (0, x.createLocalApiErrorHandlerWithContextFactory)('OCF_FLOW')
      var Vi = (0, We.Z)()
        .propsFromState(function () {
          return { navigationContext: R.b, personalizationSettings: Bi.kQ, shouldPropagateP13nSettings: Li }
        })
        .propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Oi,
            fetchPreferencesIfNeeded: Bi.CP,
            scribeAction: nn.DEPRECATED_scribeAction,
            syncPersonalizationSettings: Bi.Z$,
          }
        })
      var Ri = ['callback', 'defaultValue', 'label'],
        Mi = b().d44efc66,
        Ui = b().b4867a18,
        zi = b().d4e220b4,
        ji = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
              r[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, u.Z)((0, s.Z)(e), 'state', { errorMessage: '', isValid: !0, value: '' }),
              (0, u.Z)((0, s.Z)(e), '_updateValue', function (t) {
                var n = e.props.callback,
                  a = (0, Vo.Z)(t.trim()),
                  r = !a && -1 !== t.toLowerCase().indexOf('twitter'),
                  o = !a && !r,
                  i = ''
                a ? (i = Mi) : r && (i = Ui), e.setState({ errorMessage: i, isValid: o, value: t }), n(t, o)
              }),
              (0, u.Z)((0, s.Z)(e), '_handleValueChange', function (t) {
                var n = t.target.value
                e._updateValue(n)
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props.defaultValue
                  e && this._updateValue(e)
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = (e.callback, e.defaultValue, e.label),
                    n = (0, j.Z)(e, Ri),
                    r = this.state,
                    o = r.errorMessage,
                    i = r.isValid,
                    s = this.context.featureSwitches.getValue('user_display_name_max_limit', 50)
                  return d.createElement(
                    An.Z,
                    (0, a.Z)({}, n, {
                      errorText: o,
                      invalid: !i,
                      label: t || zi,
                      maxLength: 'number' == typeof s ? s : 50,
                      name: 'name',
                      onChange: this._handleValueChange,
                      positionCursorAtEnd: !0,
                      style: ue.formTextInput,
                      value: this.state.value,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(d.Component)
      ;(0, u.Z)(ji, 'contextType', Z.rC)
      var Hi = 'ocfSignupNextLink'
      var Gi = b().eab9ceb2,
        Wi = Object.freeze({ Birthday: 'birthday', Email: 'email', Name: 'name', Phone: 'phone_number' }),
        qi = 'select_birthday',
        $i = 'select_email',
        Ki = 'select_name',
        Yi = 'select_phone',
        Qi = { page: 'onboarding', component: 'signup' },
        Xi = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_getDefaultIdentifierField', function () {
                var e = a.props.subtask.allowed_identifiers
                return e === L.AA.EmailOnly || e === L.AA.EmailThenPhone ? Wi.Email : Wi.Phone
              }),
              (0, u.Z)((0, s.Z)(a), '_renderActiveFieldToggle', function () {
                var e = a.props.subtask.allowed_identifiers
                return e !== L.AA.EmailOnly && e !== L.AA.PhoneOnly
                  ? d.createElement(
                      m.ZP,
                      { align: 'right', color: 'link', onPress: a._handleActiveTextToggle, withInteractiveStyling: !0 },
                      a._getToggleActiveTextTitle(),
                    )
                  : null
              }),
              (0, u.Z)((0, s.Z)(a), '_renderNameField', function () {
                var e = a.props,
                  t = e.navigationContext,
                  n = e.subtask,
                  r = e.subtaskId,
                  o = e.subtaskInputs,
                  i = (0, W.OG)(o, { key: Wi.Name, subtask_id: r }, ''),
                  s = t.action,
                  l = {
                    autoComplete: 'name',
                    autoFocus: !s || s === Ki,
                    callback: a._updateNameInfo,
                    defaultValue: i,
                    onFocus: a._handleNameFocus,
                    label: n.name_hint,
                  }
                return d.createElement(ji, l)
              }),
              (0, u.Z)((0, s.Z)(a), '_renderActiveTextField', function () {
                var e = a.props.subtask,
                  t = a.state,
                  n = t.activeTextField,
                  r = t.defaultActiveText,
                  o = a._shouldFocusActiveTextField(),
                  i = {
                    autoComplete: n === Wi.Phone ? 'tel' : 'email',
                    autoFocus: o,
                    defaultValue: r,
                    name: n === Wi.Phone ? 'phone_number' : 'email',
                    label: n === Wi.Phone ? e.phone_hint : e.email_hint,
                    onRef: a._setInputRef,
                    onValidityChange: a._updateValidity,
                    style: Ji.phoneEmailTextField,
                  }
                return n === Wi.Phone ? d.createElement(nr, i) : d.createElement(ca, i)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleDateChange', function (e) {
                a.setState({ birthdayValue: e, isBirthdayValid: a._isCompleteDate(e) }, a._updateValidity)
              }),
              (0, u.Z)((0, s.Z)(a), '_isCompleteDate', function (e) {
                return !!(e && e.year && e.month && e.day)
              }),
              (0, u.Z)((0, s.Z)(a), '_getIdentifierValue', function () {
                return a._input && a._input.getValue()
              }),
              (0, u.Z)((0, s.Z)(a), '_isValid', function () {
                var e = a.state,
                  t = e.isBirthdayValid,
                  n = e.isNameValid,
                  r = a.props.subtask.ignore_birthday || t
                return n && r && a._input && a._input.isValid()
              }),
              (0, u.Z)((0, s.Z)(a), '_setTimRef', function (e) {
                a._timInput = e
              }),
              (0, u.Z)((0, s.Z)(a), '_updateValidity', function () {
                a.setState({ isValid: a._isValid() })
              }),
              (0, u.Z)((0, s.Z)(a), '_updateNameInfo', function (e, t) {
                a.setState({ isNameValid: t, nameValue: e }, a._updateValidity)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleFetchPreferences', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchPreferencesIfNeeded)()['catch'](t())
              }),
              (0, u.Z)((0, s.Z)(a), '_shouldFocusActiveTextField', function () {
                var e = a.props.navigationContext,
                  t = a.state.activeTextField === Wi.Phone ? Yi : $i
                return !a.state.hasNameFieldBeenAutoFocused && e.action === t
              }),
              (0, u.Z)((0, s.Z)(a), '_handleActiveTextToggle', function () {
                var e = a.state.activeTextField === Wi.Phone ? Wi.Email : Wi.Phone
                a._scribeEvent(e, 'choose'),
                  a._input && a._input.clear(),
                  a.setState({ activeTextField: e, defaultActiveText: '' })
              }),
              (0, u.Z)((0, s.Z)(a), '_getToggleActiveTextTitle', function () {
                var e = a.props.subtask
                return a.state.activeTextField === Wi.Phone ? e.use_email_text : e.use_phone_text
              }),
              (0, u.Z)((0, s.Z)(a), '_handleNameFocus', function () {
                a.setState({ hasNameFieldBeenAutoFocused: !0 })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleNextButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.shouldPropagateP13nSettings,
                  r = e.subtask,
                  o = e.subtaskId,
                  i = e.updateFlow,
                  s = a.state,
                  l = s.activeTextField,
                  c = s.birthdayValue,
                  u = s.nameValue,
                  d = a.props.personalizationSettings || {},
                  p = d.allowCookieUse,
                  h = d.allowDeviceAccess,
                  m = d.allowPartnerships,
                  f = d.allowPersonalization,
                  _ = l === Wi.Email && r.email_next_link ? r.email_next_link : r.next_link,
                  v = a._timInput && a._timInput.value ? { response: a._timInput.value } : void 0,
                  g = a._getIdentifierValue() || void 0,
                  b = { js_instrumentation: v, link: _.link_id, name: u }
                ;(b[l] = g),
                  !r.ignore_birthday && c && (b.birthday = c),
                  n &&
                    (b.personalization_settings = {
                      allow_cookie_use: !!p,
                      allow_device_personalization: !!h,
                      allow_partnerships: !!m,
                      allow_ads_personalization: !!f,
                    }),
                  i(o, b),
                  t(_)
              }),
              (0, u.Z)((0, s.Z)(a), '_scribeEvent', function (e, t) {
                ;(0, a.props.scribeAction)((0, r.Z)((0, r.Z)({}, Qi), {}, { element: e, action: t }))
              }),
              (0, u.Z)((0, s.Z)(a), '_setInputRef', function (e) {
                a._input = e
              })
            var i = e.navigationContext,
              l = e.subtask,
              c = e.subtaskId,
              p = e.subtaskInputs,
              h = (0, W.OG)(p, { key: Wi.Name, subtask_id: c }, ''),
              f = (0, W.OG)(p, { key: Wi.Phone, subtask_id: c }, '') || l.phone,
              _ = (0, W.OG)(p, { key: Wi.Email, subtask_id: c }, '') || l.email,
              v = { day: void 0, month: void 0, year: void 0 },
              g = (0, W.OG)(p, { key: Wi.Birthday, subtask_id: c }, void 0) || v,
              b = (function (e) {
                switch (e) {
                  case Yi:
                    return { type: Wi.Phone, value: f }
                  case $i:
                    return { type: Wi.Email, value: _ }
                  default:
                    return { type: _ ? Wi.Email : a._getDefaultIdentifierField(), value: _ || f }
                }
              })(i.action)
            return (
              (a.state = {
                activeTextField: b.type,
                birthdayValue: g,
                defaultActiveText: b.value,
                nameValue: h,
                hasNameFieldBeenAutoFocused: !1,
                isNameValid: void 0,
                isBirthdayValid: a._isCompleteDate(g),
                isValid: void 0,
              }),
              a
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.syncPersonalizationSettings
                  uo.Z.inject({ scriptId: 'jsInstLibrary', src: 'https://twitter.com/i/js_inst?c_name=ui_metrics' }),
                    this._handleFetchPreferences(),
                    n()['catch'](t())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value() {
                  this._shouldFocusActiveTextField() && this._input && this._input.focus()
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    r = e.subtask,
                    o = e.subtaskInputs,
                    i = r.next_link,
                    s = r.primary_text,
                    l = r.secondary_text
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, n, {
                      footer: d.createElement(te, {
                        actionDisabled: !this.state.isValid,
                        actionLabel: null == i ? void 0 : i.label,
                        actionTestID: Hi,
                        onAction: this._handleNextButtonClick,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: t,
                        primaryTextProp: s,
                        secondaryTextProp: l,
                        subtaskInputs: o,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(Ni.Z, { title: Gi }),
                    d.createElement(
                      p.Z,
                      null,
                      this._renderNameField(),
                      this._renderActiveTextField(),
                      this._renderActiveFieldToggle(),
                      this._renderBirthdayField(),
                      d.createElement('input', {
                        autoComplete: 'off',
                        name: 'ui_metrics',
                        ref: this._setTimRef,
                        type: 'hidden',
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderBirthdayField',
                value: function value() {
                  var e = this.props,
                    t = e.navigationContext,
                    n = e.subtask,
                    a = n.birthday_explanation,
                    r = n.birthday_hint,
                    o = n.ignore_birthday,
                    i = this.state.birthdayValue || {},
                    s = t.action === qi
                  return o
                    ? null
                    : d.createElement(
                        p.Z,
                        { accessibilityLabel: r, accessibilityRole: 'group', style: Ji.section },
                        d.createElement(m.ZP, { size: 'body', style: Ji.sectionHeading, weight: 'bold' }, r),
                        d.createElement(m.ZP, { color: 'gray700', size: 'subtext1', style: Ji.sectionSubHeading }, a),
                        d.createElement(Ln.Z, {
                          autofocus: s,
                          day: i.day,
                          label: n.birthday_hint || '',
                          minSelectableYear: (0, Di.Q)(),
                          month: i.month,
                          onChange: this._handleDateChange,
                          year: i.year,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(d.Component),
        Ji = v.Z.create(function (e) {
          return {
            section: { marginTop: e.spaces.space20 },
            sectionHeading: { marginBottom: e.spaces.space8 },
            sectionSubHeading: { marginBottom: e.spaces.space4 },
            phoneEmailTextField: { paddingHorizontal: 0 },
          }
        })
      var es = Vi(Xi),
        ts = 'ocfSignupReviewNextLink'
      var ns = b().a565833e,
        as = b().h3629783,
        rs = b().j1c3f4b9,
        os = b().c119dee8,
        is = b().f70cd5ee,
        ss = b().a3841918,
        ls = b().d4e220b4,
        cs = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
              r[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, u.Z)((0, s.Z)(e), '_handleSignupButtonClick', function () {
                var t,
                  n = e.props,
                  a = n.onNavigate,
                  r = n.subtask,
                  o = n.subtaskId,
                  i = n.subtaskInputs,
                  s = n.updateFlow,
                  l = r.email,
                  c = r.phone_number,
                  u = c && c.subtask_data_reference && (0, W.OG)(i, c.subtask_data_reference),
                  d = l && l.subtask_data_reference && (0, W.OG)(i, l.subtask_data_reference)
                e._isOldEnoughOrIgnored()
                  ? u
                    ? (t = r.phone_next_link)
                    : d && (t = r.email_next_link)
                  : (t = r.invalid_birthday_link),
                  t && s(o, { link: t.link_id }),
                  t && a(t)
              }),
              (0, u.Z)((0, s.Z)(e), '_handleNavigationClick', function (t) {
                ;(0, e.props.onNavigate)(t)
              }),
              (0, u.Z)((0, s.Z)(e), '_handleNameEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.name_edit_link)
              }),
              (0, u.Z)((0, s.Z)(e), '_handleBirthdayEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.birthday_edit_link)
              }),
              (0, u.Z)((0, s.Z)(e), '_handlePhoneEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.phone_edit_link)
              }),
              (0, u.Z)((0, s.Z)(e), '_handleEmailEdit', function () {
                var t = e.props.subtask
                e._handleNavigationClick(t.email_edit_link)
              }),
              (0, u.Z)((0, s.Z)(e), '_handlePrivacyOptionsClick', function (t) {
                return function (n) {
                  n.preventDefault(), e._handleNavigationClick(t)
                }
              }),
              (0, u.Z)((0, s.Z)(e), '_isOldEnoughOrIgnored', function () {
                var t = e.props.subtask,
                  n = t.birthday,
                  a = t.birthday_requirement
                if (t.ignore_birthday) return !0
                var r = n && n.subtask_data_reference && (0, W.OG)(e.props.subtaskInputs, n.subtask_data_reference),
                  o = r && new Date(r.year, r.month - 1, r.day),
                  i = a || {},
                  s = i.day,
                  l = i.month,
                  c = i.year,
                  u = c && l && s && new Date(c, l - 1, s)
                return !o || !u || o <= u
              }),
              (0, u.Z)((0, s.Z)(e), '_getSignupButtonLabel', function () {
                var t = e.props,
                  n = t.subtask,
                  a = t.subtaskInputs,
                  r = n.email,
                  o = n.phone_number,
                  i = o && (0, W.Ds)(a, o),
                  s = r && (0, W.Ds)(a, r)
                return i ? n.phone_next_link.label : s ? n.email_next_link.label : ns
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    r = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.detail_text,
                    l = o.primary_text,
                    c = o.secondary_text
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, r, {
                      footer: d.createElement(te, {
                        actionLabel: this._getSignupButtonLabel(),
                        actionTestID: ts,
                        actionType: 'brandFilled',
                        detailText: s,
                        onAction: this._handleSignupButtonClick,
                        onNavigate: n,
                        subtaskInputs: i,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: n,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: i,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    this._renderNameField(),
                    this._renderPhoneOrEmailField(),
                    this._maybeRenderBirthdayField(),
                    t,
                  )
                },
              },
              {
                key: '_renderNameField',
                value: function value() {
                  var e,
                    t = this.props,
                    n = t.subtask,
                    a = t.subtaskInputs,
                    r = n.name && (0, W.Ds)(a, n.name),
                    o = null !== (e = n.name_hint) && void 0 !== e ? e : ls
                  return d.createElement(
                    p.Z,
                    { onClick: this._handleNameEdit, testID: 'editName' },
                    d.createElement(An.Z, {
                      defaultValue: r || '',
                      label: o,
                      name: 'name',
                      showValidationIcon: !0,
                      style: ue.formTextInput,
                    }),
                  )
                },
              },
              {
                key: '_maybeRenderBirthdayField',
                value: function value() {
                  var e,
                    t = this.props,
                    n = t.subtask,
                    a = t.subtaskInputs,
                    r =
                      n.birthday &&
                      n.birthday.subtask_data_reference &&
                      (0, W.OG)(a, n.birthday.subtask_data_reference),
                    o = r || {},
                    i = o.day,
                    s = o.month,
                    l = o.year,
                    c = i && s && l && as(new Date(l, s - 1, i)),
                    u = null !== (e = n.birthday_hint) && void 0 !== e ? e : os
                  return !n.ignore_birthday && r && c
                    ? d.createElement(
                        p.Z,
                        {
                          accessibilityLabel: rs({ birthdate: c }),
                          accessibilityRole: 'button',
                          onClick: this._handleBirthdayEdit,
                          testID: 'editBirthday',
                        },
                        d.createElement(An.Z, {
                          defaultValue: c,
                          label: u,
                          name: 'birthday',
                          showValidationIcon: !0,
                          style: ue.formTextInput,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderPhoneOrEmailField',
                value: function value() {
                  var e = this.props,
                    t = e.subtask,
                    n = t.email,
                    a = t.email_hint,
                    r = t.phone_hint,
                    o = t.phone_number,
                    i = e.subtaskInputs,
                    s = o && o.subtask_data_reference && (0, W.OG)(i, o.subtask_data_reference),
                    l = n && n.subtask_data_reference && (0, W.OG)(i, n.subtask_data_reference),
                    c = null != r ? r : is,
                    u = null != a ? a : ss
                  return s
                    ? d.createElement(
                        p.Z,
                        { onClick: this._handlePhoneEdit, testID: 'editPhone' },
                        d.createElement(An.Z, {
                          defaultValue: s || '',
                          label: c,
                          name: 'phone',
                          showValidationIcon: !0,
                          style: ue.formTextInput,
                        }),
                      )
                    : l
                    ? d.createElement(
                        p.Z,
                        { onClick: this._handleEmailEdit, testID: 'editEmail' },
                        d.createElement(An.Z, {
                          defaultValue: l || '',
                          label: u,
                          name: 'email',
                          showValidationIcon: !0,
                          style: ue.formTextInput,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(d.Component)
      var us = cs
      var ds = n(366136)
      var ps = (0, We.Z)().propsFromActions(function () {
        return { setLanguage: an.m0 }
      })(function (e) {
        var t = e.onNavigate,
          n = e.setLanguage,
          a = e.subtask,
          o = e.subtaskId,
          i = a.locale,
          s = a.next_link,
          l = i.country_code,
          c = i.language_code,
          p = d.useCallback(
            function () {
              var e,
                t = ds.k1.reduce(function (e, t) {
                  return (0, r.Z)((0, r.Z)({}, e), {}, (0, u.Z)({}, t.toLowerCase(), t))
                }, {}),
                a = l ? ''.concat(c, '-').concat(l) : c,
                o = null !== (e = (0, ds.Qb)(a, ds.k1, t)) && void 0 !== e ? e : ds.al
              return Promise.resolve(n(o))
            },
            [l, c, n],
          )
        return d.createElement(Ge, { navigationLink: s, onNavigate: t, subtaskAction: p, subtaskId: o })
      })
      var hs = n(903188),
        ms = n(888990),
        fs = n(216866),
        _s = n(676275),
        vs = (n(334115), n(200634), n(611731)),
        gs = n(698954),
        bs = n(411839),
        ks = n(238749),
        ys = n(133652),
        Zs = n(745784),
        ws = n(880166),
        xs = Object.freeze({ TopicCategory: 'topic_category', Topic: 'topic' }),
        Cs = b().e854ad27,
        Is = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
              r[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, u.Z)((0, s.Z)(e), '_handleFollow', function () {
                var t = e.props,
                  n = t.id
                ;(0, t.onFollowTopic)(n)
              }),
              (0, u.Z)((0, s.Z)(e), '_handleUnfollow', function () {
                var t = e.props,
                  n = t.id
                ;(0, t.onUnfollowTopic)(n)
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.id,
                    n = e.onNavigate,
                    r = e.selectedTopicIds,
                    o = e.subtaskInputs,
                    i = e.topicsById[t],
                    s = r.includes(this.props.id)
                  return d.createElement(
                    p.Z,
                    { style: Ss.cell },
                    d.createElement(ks.Z, { Icon: ws['default'], size: 'large', style: Ss.topicIcon }),
                    d.createElement(
                      p.Z,
                      { style: Ss.topicInfo },
                      d.createElement(Y, (0, a.Z)({ weight: 'bold' }, i.title, { onNavigate: n, subtaskInputs: o })),
                      i.description
                        ? d.createElement(
                            Y,
                            (0, a.Z)({ color: 'gray700' }, i.description, { onNavigate: n, subtaskInputs: o }),
                          )
                        : null,
                    ),
                    d.createElement(gs.Z, {
                      isFollowing: s,
                      onFollow: this._handleFollow,
                      onUnfollow: this._handleUnfollow,
                      showRelationshipChangeConfirmation: !1,
                      size: 'small',
                      type: 'topic',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(d.PureComponent),
        Es = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
              r[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, u.Z)((0, s.Z)(e), 'state', { expanded: !1 }),
              (0, u.Z)((0, s.Z)(e), '_handleClick', function () {
                e.setState({ expanded: !e.state.expanded })
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.categoriesById,
                    n = e.id,
                    r = e.isTopLevel,
                    o = e.onNavigate,
                    i = e.subtaskInputs,
                    s = this.state.expanded,
                    l = t[n],
                    c = s ? As : Ts
                  return d.createElement(
                    d.Fragment,
                    null,
                    d.createElement(
                      bs.Z,
                      {
                        accessibilityExpanded: s,
                        accessibilityLabel: Cs({ title: l.title.text }),
                        onClick: this._handleClick,
                        style: Ss.cell,
                      },
                      d.createElement(
                        Y,
                        (0, a.Z)(
                          { color: 'primary', size: r ? 'headline1' : 'body', weight: r ? 'heavy' : 'bold' },
                          l.title,
                          { onNavigate: o, subtaskInputs: i },
                        ),
                      ),
                      c,
                    ),
                    d.createElement(
                      p.Z,
                      { style: Ss.children },
                      d.createElement(vs.Z, { show: s }, this._renderChildren()),
                    ),
                  )
                },
              },
              {
                key: '_renderChildren',
                value: function value() {
                  var e = this.props,
                    t = e.categoriesById,
                    r = e.id,
                    o = e.onFollowTopic,
                    i = e.onNavigate,
                    s = e.onUnfollowTopic,
                    l = e.selectedTopicIds,
                    c = e.subtaskInputs,
                    u = e.topicsById,
                    p = t[r],
                    h = { selectedTopicIds: l, onFollowTopic: o, onUnfollowTopic: s, topicsById: u, subtaskInputs: c }
                  return p.children_items.map(function (e) {
                    var r = e.id
                    return e.type === xs.Topic
                      ? d.createElement(Is, (0, a.Z)({}, h, { id: r, key: r, onNavigate: i }))
                      : d.createElement(n, (0, a.Z)({}, h, { categoriesById: t, id: r, key: r, onNavigate: i }))
                  })
                },
              },
            ]),
            n
          )
        })(d.PureComponent),
        Ss = v.Z.create(function (e) {
          return {
            cell: {
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space4,
              justifyContent: 'space-between',
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            topicInfo: { flexGrow: 1, flexShrink: 1, marginEnd: e.spaces.space12 },
            topicIcon: { flexShrink: 0, marginEnd: e.spaces.space12 },
            plusIcon: { color: e.colors.gray700 },
            minusIcon: { color: e.colors.primary },
            children: { marginStart: e.spaces.space12 },
          }
        }),
        Ts = d.createElement(Zs['default'], { style: Ss.plusIcon }),
        As = d.createElement(ys['default'], { style: Ss.minusIcon }),
        Ps = 'selected_search_topic_ids',
        Fs = 'selected_topic_ids',
        Ns = [],
        Ds = function Ds(e, t) {
          var n = (0, R.$B)(e)
          return (0, W.OG)(n, { key: Ps, subtask_id: t.subtaskId })
        },
        Bs = function Bs(e, t) {
          var n = (0, R.$B)(e)
          return (0, W.OG)(n, { key: Fs, subtask_id: t.subtaskId })
        },
        Ls = function Ls(e, t) {
          return t.subtask.selected_topics_cart ? t.subtask.selected_topics_cart.selected_topic_ids : Ns
        }
      var Os = (0, We.Z)()
          .propsFromState(function () {
            return { initialSearchTopicIds: Ds, initialSelectedTopicIds: Bs, cartTopicIds: Ls }
          })
          .adjustStateProps(function (e) {
            var t = e.cartTopicIds,
              n = e.initialSearchTopicIds,
              a = e.initialSelectedTopicIds
            return { initialSearchTopicIds: n || Ns, initialSelectedTopicIds: a || t }
          })
          .withAnalytics({ section: 'topics_selector' }),
        Vs = 'ocfTopicsSelectorNextLink',
        Rs = 'ocfTopicsSelectorSkipLink'
      var Ms = b().f134915f,
        Us = b().h6beb5fb,
        zs = b().b8fb87e0,
        js = d.createElement(fs['default'], null),
        Hs = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) {
              i[l] = arguments[l]
            }
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, u.Z)((0, s.Z)(e), 'state', {
                hideBanner: !1,
                selectedTopicIds: e.props.initialSelectedTopicIds,
                showCart: !1,
              }),
              (0, u.Z)((0, s.Z)(e), '_renderCartButton', function () {
                var t = e.props.subtask.selected_topics_cart,
                  n = e.state.selectedTopicIds
                return t && t.title && n.length > 0
                  ? d.createElement(
                      p.Z,
                      null,
                      d.createElement(H.ZP, {
                        accessibilityLabel: zs,
                        icon: js,
                        onPress: e._handleOpenCart,
                        size: 'small',
                        type: 'brandOutlined',
                      }),
                      d.createElement(hs.Z, {
                        count: n.length,
                        truncatedCountFormatter: Us,
                        unreadCountLabel: Ms,
                        withBorder: !0,
                      }),
                    )
                  : null
              }),
              (0, u.Z)((0, s.Z)(e), '_renderCart', function () {
                var t = e.props,
                  n = t.onNavigate,
                  r = t.subtask,
                  o = t.subtaskInputs,
                  i = r.selected_topics_cart,
                  s =
                    i && i.done_label
                      ? d.createElement(
                          H.ZP,
                          {
                            key: 'button_cancel',
                            onPress: e._handleCloseCart,
                            style: Gs.cartButton,
                            type: 'primaryOutlined',
                          },
                          i.done_label.text,
                        )
                      : null
                return d.createElement(
                  Le.Z,
                  { onMaskClick: e._handleCloseCart, style: Gs.cart, type: 'bottom', withMask: !0 },
                  i && i.title
                    ? d.createElement(
                        Y,
                        (0, a.Z)(
                          {
                            align: 'center',
                            onNavigate: n,
                            size: 'headline1',
                            style: Gs.cartHeader,
                            subtaskInputs: o,
                            weight: 'heavy',
                          },
                          i.title,
                        ),
                      )
                    : null,
                  e._renderCartItems(),
                  s,
                )
              }),
              (0, u.Z)((0, s.Z)(e), '_handleOpenCart', function () {
                e.setState({ showCart: !0 }), e.props.analytics.scribe({ element: 'cart', action: 'impression' })
              }),
              (0, u.Z)((0, s.Z)(e), '_handleCloseCart', function () {
                e.setState({ showCart: !1 }), e.props.analytics.scribe({ element: 'cart', action: 'dismiss' })
              }),
              (0, u.Z)((0, s.Z)(e), '_renderBanner', function () {
                var t = e.props.subtask.banner,
                  n = e.state.hideBanner
                return t && !n
                  ? d.createElement(ms.Z, {
                      actionLabel: t.dismiss_label.text,
                      headline: t.title.text,
                      onAction: e._handleBannerDismiss,
                      onClose: e._handleBannerDismiss,
                      subtext: t.subtitle.text,
                    })
                  : null
              }),
              (0, u.Z)((0, s.Z)(e), '_renderCartItems', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskInputs,
                  o = e.state.selectedTopicIds
                return o.map(function (t) {
                  return d.createElement(Is, {
                    id: t,
                    key: t,
                    onFollowTopic: e._handleFollowTopic,
                    onNavigate: n,
                    onUnfollowTopic: e._handleUnfollowTopic,
                    selectedTopicIds: o,
                    subtaskInputs: r,
                    topicsById: a.topic_by_id_list,
                  })
                })
              }),
              (0, u.Z)((0, s.Z)(e), '_renderItems', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskInputs,
                  o = e.state.selectedTopicIds
                return a.top_category_ids.map(function (t) {
                  return d.createElement(Es, {
                    categoriesById: a.category_by_id_list,
                    id: t,
                    isTopLevel: !0,
                    key: t,
                    onFollowTopic: e._handleFollowTopic,
                    onNavigate: n,
                    onUnfollowTopic: e._handleUnfollowTopic,
                    selectedTopicIds: o,
                    subtaskInputs: r,
                    topicsById: a.topic_by_id_list,
                  })
                })
              }),
              (0, u.Z)((0, s.Z)(e), '_handleFollowTopic', function (t) {
                e.props.analytics.scribe({ element: 'topic', action: 'follow', data: { items: [_s.Z.forTopic(t)] } }),
                  e.setState({ selectedTopicIds: [].concat((0, G.Z)(e.state.selectedTopicIds), [t]) })
              }),
              (0, u.Z)((0, s.Z)(e), '_handleUnfollowTopic', function (t) {
                e.props.analytics.scribe({ element: 'topic', action: 'unfollow', data: { items: [_s.Z.forTopic(t)] } }),
                  e.setState({
                    selectedTopicIds: e.state.selectedTopicIds.filter(function (e) {
                      return e !== t
                    }),
                  })
              }),
              (0, u.Z)((0, s.Z)(e), '_handleBannerDismiss', function () {
                e.props.analytics.scribe({ element: 'prompt', action: 'dismiss' }), e.setState({ hideBanner: !0 })
              }),
              (0, u.Z)((0, s.Z)(e), '_handleNextButtonClick', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskId,
                  o = t.updateFlow,
                  i = e.state.selectedTopicIds
                o(r, { link: a.next_link.link_id, selected_topic_ids: i }), n(a.next_link)
              }),
              (0, u.Z)((0, s.Z)(e), '_handleSkipButtonClick', function () {
                var t = e.props,
                  n = t.onNavigate,
                  a = t.subtask,
                  r = t.subtaskId
                ;(0, t.updateFlow)(r, { link: a.skip_link.link_id }), n(a.skip_link)
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props,
                    t = e.analytics
                  e.subtask.banner && t.scribe({ element: 'prompt', action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    r = e.passthroughOcfScreenProps,
                    o = e.subtask,
                    i = e.subtaskInputs,
                    s = o.next_link,
                    l = o.primary_text,
                    c = o.secondary_text,
                    u = o.skip_link,
                    h = this.state.showCart,
                    m = this._renderCartButton()
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, r, {
                      footer: d.createElement(te, {
                        actionLabel: null == s ? void 0 : s.label,
                        actionTestID: Vs,
                        onAction: this._handleNextButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: null == u ? void 0 : u.label,
                        secondaryActionTestID: Rs,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: n,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: i,
                        withHeaderImage: !0,
                      }),
                      leftControl: m,
                      providePadding: !0,
                    }),
                    d.createElement(p.Z, null, this._renderBanner(), this._renderItems()),
                    h ? this._renderCart() : null,
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        Gs = v.Z.create(function (e) {
          return {
            cart: {
              flexGrow: 1,
              maxHeight: '80vh',
              overflow: 'auto',
              padding: e.spaces.space20,
              paddingBottom: e.spaces.space20,
            },
            cartButton: { marginTop: e.spaces.space12 },
            cartHeader: { marginBottom: e.spaces.space12 },
          }
        })
      var Ws = Os(Hs)
      var qs = (0, x.createLocalApiErrorHandlerWithContextFactory)('OCF_TWEET_SELECTION_URT')
      var $s = (0, We.Z)()
        .propsFromActions(function () {
          return { clearTimelineCache: Or.Z, createLocalApiErrorHandler: qs }
        })
        .withAnalytics()
      var Ks = n(125663),
        Ys = n(376831),
        Qs = n(452612),
        Xs = n(637985)
      var Js = 'ocfTweetSelectionURTNextButton'
      var el = function el(e) {
        switch (e) {
          case Nr.Z.NOT_FOUND:
            return d.createElement(Sr.Z, null)
          case Nr.Z.NOT_ALLOWED:
            return d.createElement(Er.Z, null)
          default:
            return (0, N.ZP)('Unhandled timeline unavailable reason in Ocf TweetSelectionURT screen: '.concat(e)), null
        }
      }
      var tl = $s(function (e) {
        var t,
          n = e.errorDialog,
          o = e.onNavigate,
          i = e.passthroughOcfScreenProps,
          s = e.subtask,
          l = e.subtaskId,
          c = e.subtaskInputs,
          p = e.updateFlow,
          h = s.graphql_timeline_query,
          m = s.header,
          f = s.next_link,
          _ = s.next_link_options,
          v = s.timeline_source,
          g = (0, W.OG)(c, { key: 'selected_tweet_ids', subtask_id: l }, []) || [],
          b = d.useState(g),
          k = (0, w.Z)(b, 2),
          y = k[0],
          Z = k[1],
          x = d.useMemo(
            function () {
              return (function (e, t) {
                return e
                  ? (0, Br.R)(e.timeline_key)
                  : (0, Lr.Z)({ urtUrl: { url: t || '', urlType: Dr.Z.UrtEndpoint } })
              })(h, v)
            },
            [h, v],
          ),
          C = d.useMemo(
            function () {
              return (function (e, t) {
                if (t) {
                  var n = t.max_enable_count
                  if (n) return e < n
                }
                return !0
              })(y.length, _)
            },
            [y, _],
          ),
          I = d.useMemo(
            function () {
              return (function (e, t) {
                if (t) {
                  var n = t.max_enable_count,
                    a = t.min_enable_count
                  return !((a && e < a) || (n && e > n))
                }
                return !0
              })(y.length, _)
            },
            [y, _],
          ),
          E = d.useCallback(
            function () {
              p(l, { link: f.link_id, selected_tweet_ids: y }), o(f)
            },
            [y, o, f, l, p],
          ),
          S = d.useCallback(
            function (e) {
              ;(y.includes(e) || C) &&
                Z(function (t) {
                  return t.includes(e)
                    ? t.filter(function (t) {
                        return e !== t
                      })
                    : t.concat(e)
                })
            },
            [C, y],
          ),
          T = d.useMemo(
            function () {
              var e
              return (function (e) {
                var t,
                  n,
                  a = e.handleTweetClick,
                  o = e.maxSelection,
                  i = e.selectedTweetIds
                return (0, r.Z)(
                  (0, r.Z)({}, (0, Ur.G)({})),
                  {},
                  ((n = {}),
                  (0, u.Z)(n, Qs.ZP.Tombstone, Ks.OZ(Ks.KM())),
                  (0, u.Z)(
                    n,
                    Qs.ZP.Tweet,
                    (0, r.Z)(
                      (0, r.Z)({}, (0, Ur.G)({})[Qs.ZP.Tweet]),
                      {},
                      {
                        handlers:
                          ((t = {}),
                          (0, u.Z)(t, Xs.Z.Tweet, (0, Ys.d2)({ onClick: a, maxSelection: o, selectedTweetIds: i })),
                          (0, u.Z)(
                            t,
                            Xs.Z.QuotedTweet,
                            (0, Ys.d2)({ onClick: a, maxSelection: o, selectedTweetIds: i }),
                          ),
                          t),
                      },
                    ),
                  ),
                  n),
                )
              })({
                handleTweetClick: S,
                selectedTweetIds: y,
                maxSelection: null === (e = s.next_link_options) || void 0 === e ? void 0 : e.max_enable_count,
              })
            },
            [S, y, null === (t = s.next_link_options) || void 0 === t ? void 0 : t.max_enable_count],
          )
        return d.createElement(
          ye.Z,
          (0, a.Z)({}, i, {
            footer: d.createElement(te, {
              actionDisabled: !I,
              actionLabel: null == f ? void 0 : f.label,
              actionTestID: Js,
              onAction: E,
            }),
            header: d.createElement(ke, { header: m, onNavigate: o, subtaskInputs: c, withHeaderImage: !0 }),
            providePadding: !0,
          }),
          d.createElement(Tr.Z, { entryConfiguration: T, module: x, renderUnavailable: el, title: '' }),
          n,
        )
      })
      var nl = n(974383),
        al = n(319051)
      var rl = 'ocfTypeaheadSearchNextButton',
        ol = 'ocfTypeaheadSearchSkipForNowButton',
        il = 'ocfTypeaheadInput'
      var sl = b().a9ae1e78,
        ll = b().gdb7bc25,
        cl = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e, a) {
            var r
            return (
              (0, o.Z)(this, n),
              (r = t.call(this, e, a)),
              (0, u.Z)((0, s.Z)(r), '_renderSelectedItem', function () {
                return d.createElement(p.Z, { style: ul.selectedItem }, r._renderSelectedItemPill())
              }),
              (0, u.Z)((0, s.Z)(r), '_renderSelectedItemPill', function () {
                var e = r.props.withCompactPills,
                  t = r.state.selected_item
                if (t) {
                  var n,
                    a =
                      t.type === V.El.User
                        ? d.createElement(Re['default'], {
                            accessibilityHidden: !0,
                            focusable: !1,
                            size: 'custom',
                            uri: t.data.profile_image_url_https,
                          })
                        : void 0
                  switch (t.type) {
                    case V.El.User:
                      n = t.data.screen_name
                      break
                    case V.El.Event:
                    case V.El.Topic:
                    case V.El.Hashtag:
                      n = t.data.topic
                      break
                    case V.El.Setting:
                    case V.El.SettingGroup:
                    case V.El.NoResult:
                      n = t.data.text
                      break
                    case V.El.DMConversation:
                      n = t.data.name
                      break
                    default:
                      n = ''
                  }
                  return d.createElement(Kr.Z, {
                    accessibilityLabel: ll({ name: n }),
                    avatar: a,
                    compact: e,
                    key: t.id,
                    mode: 'remove',
                    onClick: r._handleOnRemove,
                    style: ul.selectionPill,
                    text: n,
                  })
                }
              }),
              (0, u.Z)((0, s.Z)(r), '_handleQueryChange', function (e) {
                var t = r.props.onQueryChange
                r.setState({ query: e }), null == t || t(e)
              }),
              (0, u.Z)((0, s.Z)(r), '_handleOnSelect', function (e) {
                r.setState({ selected_item: e })
              }),
              (0, u.Z)((0, s.Z)(r), '_handleOnRemove', function () {
                r.setState({ selected_item: void 0 })
              }),
              (0, u.Z)((0, s.Z)(r), '_handleSubmit', function () {
                r.state.selected_item && r._handleDoneButtonClick()
              }),
              (0, u.Z)((0, s.Z)(r), '_handleDoneButtonClick', function () {
                var e,
                  t = r.props,
                  n = t.onNavigate,
                  a = t.subtask.next_link,
                  o = t.subtaskId
                ;(0, t.updateFlow)(o, {
                  link: a.link_id,
                  selected_item_id: (null === (e = r.state.selected_item) || void 0 === e ? void 0 : e.id) || '',
                }),
                  n(a)
              }),
              (0, u.Z)((0, s.Z)(r), '_handleSkipButtonClick', function () {
                var e = r.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  a = e.subtaskId,
                  o = e.updateFlow
                n && o(a, { link: n.link_id, selected_item_id: '' }), n && t(n)
              }),
              (r.state = { query: '', selected_item: void 0 }),
              r
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.errorDialog,
                    n = e.onNavigate,
                    r = e.passthroughOcfScreenProps,
                    o = e.renderCallout,
                    i = e.renderHeader,
                    s = e.shouldAutoFocus,
                    l = e.source,
                    c = e.subtask,
                    u = e.subtaskInputs,
                    h = c.detail_text,
                    m = c.header,
                    f = c.next_link,
                    _ = c.search_filter_type,
                    v = c.skip_link
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, r, {
                      footer: d.createElement(te, {
                        actionDisabled: !v && !this.state.selected_item,
                        actionLabel: this.state.selected_item || !v ? (null == f ? void 0 : f.label) : void 0,
                        actionTestID: rl,
                        onAction: this._handleSubmit,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this.state.selected_item || null == v ? void 0 : v.label,
                        secondaryActionTestID: ol,
                      }),
                      header: d.createElement(ke, {
                        header: m,
                        onNavigate: n,
                        primaryTextProp: null == m ? void 0 : m.primary_text,
                        secondaryTextProp: null == m ? void 0 : m.secondary_text,
                        subtaskInputs: u,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    void 0 === this.state.selected_item
                      ? d.createElement(nl['default'], {
                          alwaysOpen: !0,
                          disableClearButton: !0,
                          filter: [_],
                          isModal: !0,
                          onItemClick: this._handleOnSelect,
                          onQueryChange: this._handleQueryChange,
                          placeholder: sl,
                          renderCallout: o,
                          renderHeader: i,
                          renderUserDecoration: al.ib,
                          selectedItems: this.state.selected_item,
                          shouldAutoFocus: s,
                          shouldClearOnSelect: !0,
                          shouldFocusOnClear: !0,
                          source: l,
                          testID: il,
                          withSectionDivider: !1,
                        })
                      : d.createElement(p.Z, null, this._renderSelectedItem()),
                    h
                      ? d.createElement(Y, (0, a.Z)({}, h, { color: 'gray700', onNavigate: n, subtaskInputs: u }))
                      : null,
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(d.Component)
      ;(0, u.Z)(cl, 'defaultProps', { shouldAutoFocus: !0, withCompactPills: !1 })
      var ul = v.Z.create(function (e) {
          return {
            root: { flex: 1 },
            selectionPill: { margin: e.spaces.space4, maxWidth: 'calc(100% - '.concat(e.spaces.space16, ')') },
            selectedItem: { flexDirection: 'row', flexWrap: 'wrap', padding: e.spaces.space4 },
          }
        }),
        dl = function dl(e, t) {
          var n = $o.C6(e),
            a = n ? qo.m3(e, n) : []
          return (0, w.Z)(a, 1)[0]
        },
        pl = function pl(e, t) {
          var n = $o.vW(e),
            a = n ? qo.m3(e, n) : []
          return (0, w.Z)(a, 1)[0]
        }
      var hl = (0, We.Z)()
        .propsFromState(function () {
          return { avatarMedia: dl, bannerMedia: pl }
        })
        .propsFromActions(function () {
          return { scribeAction: nn.DEPRECATED_scribeAction, updateProfileAvatar: $o.b4, updateProfileBanner: $o.T_ }
        })
        .withAnalytics()
      var ml = (function (e) {
        ;(0, l.Z)(n, e)
        var t = (0, c.Z)(n)
        function n() {
          var e
          ;(0, o.Z)(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
            r[i] = arguments[i]
          }
          return (
            (e = t.call.apply(t, [this].concat(r))),
            (0, u.Z)((0, s.Z)(e), '_scribeUploadStart', function (t) {
              var n = e.props,
                a = n.analytics,
                r = {
                  section: t,
                  element: 'upload',
                  action: 'start',
                  data: { items: [{ token: n.flowToken, name: n.subtaskId }] },
                }
              a.scribe(r)
            }),
            (0, u.Z)((0, s.Z)(e), '_updateMedia', function () {
              var t = e.props,
                n = t.avatarMedia,
                a = t.bannerMedia,
                r = t.subtask.sources,
                o = t.updateProfileAvatar,
                i = t.updateProfileBanner
              return new Promise(function (t, s) {
                try {
                  r.forEach(function (t) {
                    var r = t.style
                    r === L.XD.Avatar && n
                      ? (e._scribeUploadStart('select_avatar'), o(n.id))
                      : r === L.XD.Banner && a && (e._scribeUploadStart('select_banner'), i(a.id))
                  }),
                    t()
                } catch (l) {
                  s(l)
                }
              })
            }),
            e
          )
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'render',
              value: function value() {
                var e = this.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  a = e.subtaskId
                return d.createElement(Ge, {
                  navigationLink: n.next_link,
                  onNavigate: t,
                  subtaskAction: this._updateMedia,
                  subtaskId: a,
                })
              },
            },
          ]),
          n
        )
      })(d.Component)
      var fl = hl(ml)
      n(416781)
      var _l = n(962104)
      var vl = function vl(e) {
        return function (t) {
          return null == t ? void 0 : t.selectInitialFetchStatus(e)
        }
      }
      var gl = (0, We.Z)()
        .propsFromState(function () {
          return { getModuleFetchStatus: vl }
        })
        .withAnalytics({ page: 'onboarding', section: 'user_recommendations' })
      var bl = n(436386)
      var kl = d.createContext(new Set())
      var yl = function yl(e, t) {
          return function (n) {
            n.promotedContent
            var a = n.userId
            n.viewerUserId
            return d.createElement(kl.Consumer, null, function (n) {
              return d.createElement(gs.Z, {
                isFollowing: n.has(a),
                onFollow: e(a),
                onUnfollow: t(a),
                showRelationshipChangeConfirmation: !1,
                size: 'small',
                style: Zl.followButton,
                type: 'user',
              })
            })
          }
        },
        Zl = v.Z.create(function (e) {
          return { followButton: { alignSelf: 'flex-start', marginStart: e.spaces.space12 } }
        }),
        wl = function wl(e, t, n) {
          return function (a) {
            var r = a.user.id_str
            n.has(r) ? t(r)() : e(r)()
          }
        }
      var xl = 'ocfURTUserRecommendationsNextButton',
        Cl = 'ocfURTUserRecommendationsSkipButton'
      var Il = function Il(e) {
        switch (e) {
          case Nr.Z.NOT_FOUND:
            return d.createElement(Sr.Z, null)
          case Nr.Z.NOT_ALLOWED:
            return d.createElement(Er.Z, null)
          default:
            return (0, N.ZP)('Unhandled timeline unavailable reason: '.concat(e)), null
        }
      }
      var El = gl(
        (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            return (
              (0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_isBelowMinFollows', function () {
                var e = a.props.subtask.min_follow_count
                return !!e && a.state.selectedUsers.size < e
              }),
              (0, u.Z)(
                (0, s.Z)(a),
                '_getMemoizedModule',
                (0, Ne.Z)(function (e, t) {
                  return (
                    (a = (n = { subtask_id: e, flow_token: t || '' }).flow_token),
                    (o = n.subtask_id),
                    (0, _l.Z)({
                      timelineId: 'nux-user-recos-'.concat(o),
                      network: {
                        getEndpoint: function getEndpoint(e) {
                          return e.URT.fetchNUXUserRecommendations
                        },
                        getEndpointParams: function getEndpointParams(e) {
                          return (0, r.Z)((0, r.Z)({}, e), {}, { subtask_id: o, flow_token: a })
                        },
                      },
                      context: 'FETCH_NUX_USER_RECOS',
                      perfKey: 'nux-user-recos',
                    })
                  )
                  var n, a, o
                }),
              ),
              (0, u.Z)((0, s.Z)(a), '_getModule', function () {
                var e = a.props,
                  t = e.flowToken,
                  n = e.subtaskId
                return a._getMemoizedModule(n, t)
              }),
              (0, u.Z)((0, s.Z)(a), '_getModuleFetchStatus', function () {
                return (0, a.props.getModuleFetchStatus)(a._getModule())
              }),
              (0, u.Z)((0, s.Z)(a), '_onFollow', function (e) {
                return function () {
                  var t = (0, at.Z)((0, G.Z)(a.state.selectedUsers))
                  t.add(e), a.setState({ selectedUsers: t }), a._handleScribe('follow')
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_onUnfollow', function (e) {
                return function () {
                  var t = (0, at.Z)((0, G.Z)(a.state.selectedUsers))
                  t.has(e) && t['delete'](e), a.setState({ selectedUsers: t }), a._handleScribe('unfollow')
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_getFollowText', function (e, t, n) {
                return !e || n < 1 ? t : e.concat(Ir.ZP.getFormattedCount(n))
              }),
              (0, u.Z)((0, s.Z)(a), '_handleFollowButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, {
                  link: n.next_link.link_id,
                  selected_user_recommendations: (0, G.Z)(a.state.selectedUsers),
                }),
                  t(n.next_link)
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSkipButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask.skip_link,
                  r = e.subtaskId,
                  o = e.updateFlow
                n && o(r, { link: n.link_id }), n && t(n)
              }),
              (a.state = { selectedUsers: new Set() }),
              a
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function value() {
                  var e,
                    t = this.props,
                    n = t.onNavigate,
                    o = t.passthroughOcfScreenProps,
                    i = t.subtask,
                    s = t.subtaskInputs,
                    l = i.primary_text,
                    c = i.secondary_text,
                    p = i.skip_link,
                    h = this.state.selectedUsers,
                    m = ''
                  if (i.next_link_threshold_text && i.next_link_threshold_text.length > 0) {
                    var f = i.next_link_threshold_text[0]
                    m = f && f.text && f.text.text
                  }
                  var _,
                    v,
                    g,
                    b,
                    k = i.next_link.label,
                    y = h.size,
                    Z = null !== (e = this._getFollowText(m, k, y)) && void 0 !== e ? e : void 0,
                    w = Array.from(h).join(',')
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, o, {
                      footer: d.createElement(te, {
                        actionDisabled: this._isBelowMinFollows() && this._getModuleFetchStatus() !== Fr.Z.FAILED,
                        actionLabel: this._isBelowMinFollows() && p ? void 0 : Z,
                        actionTestID: xl,
                        onAction: this._handleFollowButtonClick,
                        onSecondaryAction: this._handleSkipButtonClick,
                        secondaryActionLabel: this._isBelowMinFollows() ? (null == p ? void 0 : p.label) : void 0,
                        secondaryActionTestID: Cl,
                      }),
                      header: d.createElement(ke, {
                        onNavigate: n,
                        primaryTextProp: l,
                        secondaryTextProp: c,
                        subtaskInputs: s,
                        withHeaderImage: !0,
                      }),
                      providePadding: !0,
                    }),
                    d.createElement(
                      kl.Provider,
                      { value: h },
                      d.createElement(Tr.Z, {
                        entryConfiguration:
                          ((_ = { onFollow: this._onFollow, onUnfollow: this._onUnfollow, currentFollows: h }),
                          (v = _.currentFollows),
                          (g = _.onFollow),
                          (b = _.onUnfollow),
                          (0, r.Z)(
                            (0, r.Z)({}, (0, Ur.G)({})),
                            {},
                            (0, u.Z)(
                              {},
                              Qs.ZP.User,
                              (0, bl.Z)({
                                decoration: yl(g, b),
                                withLink: !1,
                                shouldScribeProfileClick: !1,
                                onClick: wl(g, b, v),
                              }),
                            ),
                          )),
                        fetchOptions: { follows: w },
                        module: this._getModule(),
                        renderUnavailable: Il,
                        title: '',
                      }),
                    ),
                    this.props.errorDialog,
                  )
                },
              },
              {
                key: '_handleScribe',
                value: function value(e) {
                  this.props.analytics.scribe({ element: 'user', action: e })
                },
              },
            ]),
            n
          )
        })(d.Component),
      )
      n(209949)
      var Sl = n(984636),
        Tl = n.n(Sl),
        Al = n(304642),
        Pl = n(189772),
        Fl = n(615579),
        Nl = (n(628986), n(614983)),
        Dl = n.n(Nl),
        Bl = n(715686),
        Ll = n(849364),
        Ol = n(336873)
      var Vl = 'iconPlus',
        Rl = 'iconCheckmark',
        Ml = 'nextButton',
        Ul = 'userTile',
        zl = 'userSelectList',
        jl = 'userSelectGroup'
      var Hl = v.Z.create(function (e) {
        return { followButton: { alignSelf: 'flex-start', marginStart: e.spaces.space12 } }
      })
      var Gl = function Gl(e) {
        var t = e.isCheckboxFollowButton,
          n = e.isFollowed,
          a = e.screenName,
          r = e.updateFollowedItems,
          o = e.userId,
          i = function i(e) {
            return function () {
              return r(o, e)
            }
          }
        return t
          ? d.createElement(Je.Z, {
              checked: n,
              onChange: function onChange() {
                return r(o, !n)
              },
            })
          : d.createElement(gs.Z, {
              isFollowing: n,
              name: a,
              onFollow: i(!0),
              onUnfollow: i(!1),
              showRelationshipChangeConfirmation: !1,
              size: 'small',
              style: Hl.followButton,
              type: 'user',
            })
      }
      var Wl = n(248734)
      var ql = v.Z.create(function (e) {
        return {
          groupHeader: { flexDirection: 'row', justifyContent: 'space-between' },
          tileGroup: {
            borderRadius: e.spaces.space12,
            boxShadow: e.boxShadows.small,
            marginBottom: e.spaces.space20,
            overflow: 'hidden',
          },
          tileFollowGroup: { boxShadow: 'none', backgroundColor: e.colors.gray0 },
          tileGroupHeader: { margin: e.spaces.space12 },
          tileFollowGroupHeader: { zIndex: 1, backgroundColor: 'transparent' },
          listGroupHeader: {
            alignItems: 'center',
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            borderBottomColor: e.colors.borderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            paddingHorizontal: e.spaces.space20,
            paddingVertical: e.spaces.space12,
          },
          tooltip: { marginBottom: e.spaces.space20 },
        }
      })
      var $l = function $l(e) {
        var t = e.children,
          n = e.header,
          a = e.message,
          r = e.styleType,
          o = d.useState(!0),
          i = (0, w.Z)(o, 2),
          s = i[0],
          l = i[1],
          c = r === L.lS.List,
          u = r === L.lS.TileFollowButton
        return d.createElement(
          p.Z,
          { testID: jl },
          d.createElement(
            p.Z,
            { style: [!c && ql.tileGroup, u && ql.tileFollowGroup] },
            d.createElement(
              p.Z,
              {
                style: [
                  ql.groupHeader,
                  c && ql.listGroupHeader,
                  !c && ql.tileGroupHeader,
                  u && ql.tileFollowGroupHeader,
                ],
              },
              n,
            ),
            t,
          ),
          (null == a ? void 0 : a.text) &&
            s &&
            d.createElement(
              p.Z,
              { style: ql.tooltip },
              d.createElement(Wl.Z, {
                backgroundColor: 'primary',
                icon: null == a ? void 0 : a.icon,
                onClose: function onClose() {
                  return l(!1)
                },
                text: null == a ? void 0 : a.text,
              }),
            ),
        )
      }
      var Kl = n(235210),
        Yl = n(234590),
        Ql = n(507066),
        Xl = v.Z.create(function (e) {
          return {
            container: { cursor: 'pointer' },
            content: {
              padding: e.spaces.space1,
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundImage: 'linear-gradient('
                .concat(e.colors.transparent, ', ')
                .concat(e.colors.translucentBlack77, ')'),
            },
            userNameContainer: { position: 'absolute', bottom: 0, start: 0, padding: e.spaces.space4 },
            userName: { marginBottom: e.spaces.space4 },
            icon: {
              height: 'auto',
              width: e.spaces.space24,
              position: 'absolute',
              end: e.spaces.space12,
              top: e.spaces.space12,
              color: e.colors.white,
              zIndex: 1,
            },
            image: { height: 120 },
            checkIcon: { zIndex: 1 },
          }
        })
      var Jl = function Jl(e) {
        var t = e.groupId,
          n = e.id,
          a = e.isBlueVerified,
          r = e.isSelected,
          o = e.isVerified,
          i = e.name,
          s = e.onFollow,
          l = e.onUnfollow,
          c = e.profileImageUrl,
          u = e.userName
        return d.createElement(
          p.Z,
          {
            accessibilityRole: 'button',
            onClick: function onClick() {
              r ? l([n], t) : s([n], t)
            },
            style: Xl.container,
            testID: Ul,
          },
          r
            ? d.createElement(Ql['default'], { style: [Xl.icon, Xl.checkIcon], testID: Rl })
            : d.createElement(Zs['default'], { style: Xl.icon, testID: Vl }),
          d.createElement(bt.Z, { source: c, style: Xl.image }),
          d.createElement(
            p.Z,
            { style: Xl.content },
            d.createElement(
              p.Z,
              { style: Xl.userNameContainer },
              d.createElement(Me.Z, {
                color: 'white',
                isBlueVerified: a,
                isVerified: o,
                name: i,
                nameSize: 'subtext2',
                screenName: u,
                screenNameSize: 'subtext2',
                style: Xl.userName,
                withNameWrap: !0,
                withStackedLayout: !0,
              }),
            ),
          ),
        )
      }
      var ec = function ec(e) {
          var t = e.groupId,
            n = e.id,
            a = e.isBlueVerified,
            r = e.isSelected,
            o = e.isVerified,
            i = e.name,
            s = e.onFollow,
            l = e.onUnfollow,
            c = e.profileImageUrl,
            u = e.style,
            h = e.userName,
            m = d.useCallback(
              function () {
                s([n], t)
              },
              [t, n, s],
            ),
            f = d.useCallback(
              function () {
                l([n], t)
              },
              [t, n, l],
            ),
            _ = c.split('_normal').join('')
          return d.createElement(
            p.Z,
            { style: tc.container },
            d.createElement(p.Z, { style: [tc.background, u] }),
            d.createElement(Re['default'], {
              hasAdaptiveImage: !1,
              size: { width: 100, height: 100 },
              style: tc.userAvatar,
              uri: _,
            }),
            d.createElement(Me.Z, {
              isBlueVerified: a,
              isVerified: o,
              name: i,
              nameSize: 'body',
              screenName: h,
              screenNameSize: 'subtext2',
              style: tc.userName,
              withStackedLayout: !0,
            }),
            d.createElement(gs.Z, {
              isFollowing: r,
              onFollow: m,
              onUnfollow: f,
              showRelationshipChangeConfirmation: !1,
              type: 'user',
            }),
          )
        },
        tc = v.Z.create(function (e) {
          return {
            container: {
              display: 'flex',
              alignItems: 'center',
              marginBottom: e.spaces.space16,
              overflow: 'visible',
              paddingStart: e.spaces.space20,
              paddingEnd: e.spaces.space20,
            },
            background: {
              opacity: 0.1,
              transform: '[{ translate3d: ‘0,0,0’ }]',
              filter: 'blur(50px)',
              height: 'calc(100% + 10px)',
              width: 'calc(100% + 10px)',
              position: 'absolute',
              top: -10,
              start: 0,
            },
            userAvatar: { marginBottom: e.spaces.space4 },
            userName: { marginBottom: e.spaces.space4, display: 'flex', alignItems: 'center' },
          }
        })
      var nc = d.memo(ec)
      var ac = v.Z.create(function (e) {
        return {
          userCellListItem: { paddingHorizontal: e.spaces.space20 },
          userCellListItemWrapper: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
        }
      })
      var rc = function rc(e) {
        var t = e.decorator,
          n = e.description,
          a = e.groupId,
          r = e.id,
          o = e.isFollowing,
          i = e.isVerified,
          s = e.isBlueVerified,
          l = e.name,
          c = e.onCellClick,
          u = e.onFollow,
          h = void 0 === u ? function () {} : u,
          m = e.onUnfollow,
          f = void 0 === m ? function () {} : m,
          _ = e.profileImageUrl,
          v = e.screenName,
          g = e.socialText,
          b = e.styleType,
          k = e.style,
          y = d.useMemo(
            function () {
              if (g) return { contextType: Kl.Z.Follow, text: g }
            },
            [g],
          )
        return d.createElement(
          p.Z,
          { accessibilityRole: 'label', style: ac.userCellListItemWrapper },
          (function (e) {
            switch (e) {
              case L.lS.TileFollowButton:
                return d.createElement(nc, {
                  groupId: a || '',
                  id: r,
                  isBlueVerified: s,
                  isSelected: !!o,
                  isVerified: i,
                  name: l,
                  onFollow: h,
                  onUnfollow: f,
                  profileImageUrl: _,
                  style: k,
                  updateIndividualSelectedProfile: c,
                  userName: v,
                })
              case L.lS.Tile:
                return d.createElement(Jl, {
                  groupId: a || '',
                  id: r,
                  isBlueVerified: s,
                  isSelected: !!o,
                  isVerified: i,
                  name: l,
                  onFollow: h,
                  onUnfollow: f,
                  profileImageUrl: _,
                  socialContext: y,
                  updateIndividualSelectedProfile: c,
                  userName: v,
                })
              default:
                return d.createElement(re.ZP, {
                  avatarUri: _,
                  decoration: t,
                  description: n,
                  displayMode: Yl.Z.UserDetailed,
                  isBlueVerified: s,
                  isVerified: i,
                  name: l,
                  onCellClick: c,
                  promotedItemType: 'users',
                  screenName: v,
                  socialContext: y,
                  style: ac.userCellListItem,
                  userId: r,
                  withLink: !1,
                })
            }
          })(b),
        )
      }
      var oc = b().j231d352,
        ic = b().d960b55c,
        sc = function sc(e) {
          return e.items
            .map(function (e) {
              return e.user_id_str
            })
            .join('-')
        },
        lc = Zn.Z,
        cc = v.Z.create(function (e) {
          return {
            noBottomMargin: { marginBottom: 0 },
            noRightMargin: { marginEnd: 0 },
            container: {
              overflow: 'hidden',
              width: 'calc(100%/3 - 1px)',
              marginEnd: e.spaces.space1,
              marginBottom: e.spaces.space1,
              cursor: 'pointer',
            },
            tileFollowContainer: { overflow: 'visible', marginEnd: 0, marginBottom: 0 },
            listItemsContainer: { flexWrap: 'wrap', justifyContent: 'spaceBetween', flexDirection: 'row' },
            subheader: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
            headerContainer: { flex: 1 },
          }
        })
      var uc = function uc(e) {
        var t = e.userGroups,
          n = e.onNearEnd,
          a = void 0 === n ? k.Z : n,
          r = e.followedUserIds,
          o = e.onFollow,
          i = e.onUnfollow,
          s = e.message,
          l = e.firstSelectedGroupIdx,
          c = void 0 === l ? -1 : l,
          u = e.scribeDescription,
          h = void 0 === u ? '' : u,
          f = e.followButtonType,
          _ = e.styleType,
          v = void 0 === _ ? L.lS.List : _,
          g = d.useContext(Z.rC).loggedInUserId
        Dl()(!!g, 'loggedInUserId must be defined')
        var b = (0, vn.z)(),
          y = v === L.lS.List,
          w = v === L.lS.TileFollowButton,
          x = f === L.TT.Checkbox,
          C = d.useCallback(
            function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                a = arguments.length > 3 ? arguments[3] : void 0
              t ? o(e, n, a) : i(e, n, a)
            },
            [o, i],
          ),
          I = d.useCallback(
            function (e, t, n) {
              C([e], t, n)
            },
            [C],
          ),
          E = d.useCallback(
            function (e, t) {
              return function () {
                var n = e.items.map(function (e) {
                  return e.user_id_str
                })
                C(n, !t, e.group_id || '', !0)
                var a = t ? 'deselect' : 'select',
                  r = { items: [{ name: e.group_id, description: h }] }
                b.scribe({ element: 'category', action: a, data: r })
              }
            },
            [C, b, h],
          ),
          S = d.useCallback(
            function (e) {
              b.scribe({ element: 'category', action: 'impression', data: { items: [{ name: e, description: h }] } })
            },
            [b, h],
          ),
          T = d.useCallback(
            function (e, t) {
              return d.createElement(
                d.Fragment,
                null,
                ((null == e ? void 0 : e.header) || (null == e ? void 0 : e.subheader)) &&
                  d.createElement(
                    p.Z,
                    { style: cc.headerContainer },
                    (null == e ? void 0 : e.header) && d.createElement(m.ZP, { color: 'gray700' }, e.header),
                    (null == e ? void 0 : e.subheader) &&
                      d.createElement(Bl.Z, null, function (t) {
                        var n = t.direction
                        return d.createElement(
                          m.ZP,
                          { dir: n, size: 'headline2', style: cc.subheader, weight: 'bold' },
                          e.subheader,
                        )
                      }),
                  ),
                t
                  ? d.createElement(H.ZP, { onPress: E(e, t), type: 'primaryOutlined' }, ic)
                  : d.createElement(H.ZP, { onPress: E(e, t), type: 'primaryFilled' }, oc),
              )
            },
            [E],
          ),
          A = d.useCallback(
            function (e, t) {
              return d.createElement(
                d.Fragment,
                null,
                d.createElement(m.ZP, { size: 'headline1', weight: 'bold' }, e.header),
                x && d.createElement(Je.Z, { checked: t, onChange: E(e, t) }),
              )
            },
            [E, x],
          ),
          P = d.useCallback(
            function (e, t) {
              return v === L.lS.List
                ? d.createElement(Gl, {
                    isCheckboxFollowButton: x,
                    isFollowed: t,
                    screenName: e.screen_name,
                    updateFollowedItems: I,
                    userId: e.id_str,
                  })
                : void 0
            },
            [I, x, v],
          ),
          F = d.useCallback(
            function (e) {
              var n,
                a = e.items.every(function (e) {
                  return r.has(e.user_id_str)
                }),
                l = c >= 0 && e.group_id === (null === (n = t[c]) || void 0 === n ? void 0 : n.group_id),
                u = function u(t) {
                  return function () {
                    return I(t, !a, e.group_id)
                  }
                }
              return d.createElement(
                Ll.Z,
                {
                  onImpression: function onImpression() {
                    return S(e.group_id)
                  },
                },
                d.createElement(
                  $l,
                  { header: y ? A(e, a) : T(e, a), message: l ? s : void 0, scribeDescription: h, styleType: v },
                  d.createElement(
                    p.Z,
                    { style: !y && cc.listItemsContainer },
                    e.items.map(function (t, n) {
                      var a,
                        s,
                        l = t.social_text,
                        c = t.user,
                        h = r.has(c.id_str),
                        m =
                          null == c || null === (a = c.profile_image_extensions_media_color) || void 0 === a
                            ? void 0
                            : a.palette[0],
                        f = {
                          backgroundColor: m
                            ? ((s = m),
                              'rgb('.concat(s.rgb.red, ', ').concat(s.rgb.green, ', ').concat(s.rgb.blue, ')'))
                            : 'none',
                        }
                      return d.createElement(
                        p.Z,
                        {
                          key: c.id_str,
                          style: [
                            !y && cc.container,
                            !y && n + 1 > 3 && cc.noBottomMargin,
                            !y && n + 1 === 0 && cc.noRightMargin,
                            w && cc.tileFollowContainer,
                          ],
                        },
                        d.createElement(rc, {
                          decorator: P(c, h),
                          description: c.description,
                          groupId: e.group_id,
                          id: c.id_str,
                          isBlueVerified: c.is_blue_verified,
                          isFollowing: h,
                          isVerified: c.verified,
                          key: c.id_str,
                          name: c.name,
                          onCellClick: u(c.id_str),
                          onFollow: o,
                          onUnfollow: i,
                          profileImageUrl: c.profile_image_url_https,
                          screenName: c.screen_name,
                          socialText: l,
                          style: f,
                          styleType: v,
                        }),
                      )
                    }),
                  ),
                ),
              )
            },
            [c, t, y, T, A, s, h, v, r, S, I, w, P, o, i],
          )
        return d.createElement(
          p.Z,
          { testID: zl },
          d.createElement(Ol.Z, {
            cacheKey: 'userSelectList/'.concat(g),
            identityFunction: sc,
            items: t,
            nearEndProximityRatio: 1.15,
            noItemsRenderer: lc,
            onNearEnd: a,
            renderer: F,
          }),
        )
      }
      var dc = function dc(e) {
        return R.cu(e) || ''
      }
      var pc = (0, We.Z)()
        .propsFromState(function () {
          return { flowToken: dc, browsableNuxRecommendations: R.iD }
        })
        .propsFromActions(function () {
          return { fetchBrowsableNuxUserRecommendations: R.Ig }
        })
        .withAnalytics({ section: 'who_to_follow' })
      var hc = n(805252),
        mc = v.Z.create(function (e) {
          return {
            timelineStrengthContainer: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
            progressBar: { height: e.spaces.space8, borderRadius: e.spaces.space12 },
            progressBarContainer: {
              backgroundColor: e.colors.gray50,
              height: e.spaces.space8,
              width: '100%',
              marginTop: e.spaces.space4,
              borderRadius: e.spaces.space12,
            },
            progressBarInner: {
              backgroundImage: 'linear-gradient(270deg, '
                .concat(e.colors.blue500, ', ')
                .concat(e.colors.blue700, ' 100%)'),
            },
          }
        })
      var fc = function fc(e) {
        var t = e.progress,
          n = e.text
        return d.createElement(
          p.Z,
          { style: mc.timelineStrengthContainer },
          d.createElement(m.ZP, { color: 'gray1100', weight: 'bold' }, n),
          d.createElement(
            p.Z,
            { style: mc.progressBarContainer },
            d.createElement(hc.Z, { progress: t, progressStyle: mc.progressBarInner, style: mc.progressBar }),
          ),
        )
      }
      var _c = 'selected_user_recommendations',
        vc = b().c1df579e,
        gc = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e) {
            var a
            ;(0, o.Z)(this, n),
              (a = t.call(this, e)),
              (0, u.Z)((0, s.Z)(a), '_handleNearEnd', function () {
                a.props.analytics.scribe({
                  action: 'scroll',
                  data: { items: [{ description: a._scribeDescription }] },
                }),
                  a._getMoreRecommendations()
              }),
              (0, u.Z)((0, s.Z)(a), '_renderPopoverContent', function () {
                var e,
                  t = a.props.subtask
                return d.createElement(
                  p.Z,
                  { style: bc.popoverContent },
                  d.createElement(
                    m.ZP,
                    { weight: 'bold' },
                    null == t || null === (e = t.gated_next_link_popup_text) || void 0 === e ? void 0 : e.text,
                  ),
                )
              }),
              (0, u.Z)((0, s.Z)(a), '_getPreCheckedUsers', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                return (0, at.Z)(
                  e.reduce(function (e, t) {
                    var n = t.items.reduce(function (e, t) {
                      return t.checked_by_default && e.push(t.user_id_str), e
                    }, [])
                    return [].concat((0, G.Z)(e), (0, G.Z)(n))
                  }, []),
                )
              }),
              (0, u.Z)((0, s.Z)(a), '_getMoreRecommendations', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.fetchBrowsableNuxUserRecommendations,
                  r = e.flowToken,
                  o = e.subtask,
                  i = e.subtaskId,
                  s = a.state,
                  l = s.followedGroupIds,
                  c = s.notFollowedGroupIds,
                  u = s.selectedUsers,
                  d = { items: [{ description: a._scribeDescription }] }
                t.scribe({ element: 'request', action: 'start', data: d }),
                  n({
                    flow_token: r,
                    follows: Array.from(u),
                    location: (null == o ? void 0 : o.fetch_user_recommendations_location) || 'append',
                    followed_group_ids: Array.from(l),
                    not_followed_group_ids: Array.from(c),
                    subtask_id: i,
                  })
                    .then(function (e) {
                      t.scribe({ element: 'request', action: 'success', data: d })
                    })
                    ['catch'](function () {
                      t.scribe({ element: 'request', action: 'failure', data: d })
                    })
              }),
              (0, u.Z)((0, s.Z)(a), '_getFollowText', function (e, t, n) {
                return !e || n < 1 ? t : e.concat(Ir.ZP.getFormattedCount(n))
              }),
              (0, u.Z)((0, s.Z)(a), '_handleSelectionChanged', function (e) {
                a.setState({ selectedUsers: (0, at.Z)(e) })
              }),
              (0, u.Z)((0, s.Z)(a), '_getUserNameFromId', function (e, t) {
                var n,
                  r,
                  o = a.state.groups
                if (t)
                  return null ===
                    (n = o.find(function (e) {
                      return e.group_id === t
                    })) ||
                    void 0 === n ||
                    null ===
                      (r = n.items.find(function (t) {
                        return t.user_id_str === e
                      })) ||
                    void 0 === r
                    ? void 0
                    : r.user.screen_name
                var i,
                  s = (0, mi.Z)(o)
                try {
                  for (s.s(); !(i = s.n()).done; ) {
                    var l,
                      c = i.value,
                      u = (0, mi.Z)(c.items)
                    try {
                      for (u.s(); !(l = u.n()).done; ) {
                        var d = l.value
                        if ((null == d ? void 0 : d.user_id_str) === e) return d.user.screen_name
                      }
                    } catch (p) {
                      u.e(p)
                    } finally {
                      u.f()
                    }
                  }
                } catch (p) {
                  s.e(p)
                } finally {
                  s.f()
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_getScribeData', function (e, t) {
                return {
                  items: [
                    {
                      id: e,
                      item_type: Fl.Z.ItemType.USER,
                      name: a._getUserNameFromId(e, t),
                      description: a._scribeDescription,
                    },
                  ],
                }
              }),
              (0, u.Z)((0, s.Z)(a), '_handleOnUnfollowSelected', function (e, t, n) {
                var r,
                  o = a.props.analytics,
                  i = a.state,
                  s = i.followedGroupIds,
                  l = i.notFollowedGroupIds,
                  c = i.selectedUsers,
                  u = (0, mi.Z)(e)
                try {
                  for (u.s(); !(r = u.n()).done; ) {
                    var d = r.value
                    c.has(d) &&
                      (n || o.scribe({ element: 'recommendation', action: 'deselect', data: a._getScribeData(d, t) }),
                      c['delete'](d))
                  }
                } catch (p) {
                  u.e(p)
                } finally {
                  u.f()
                }
                t && (s['delete'](t), l.add(t)),
                  a.setState({ selectedUsers: c, followedGroupIds: s, notFollowedGroupIds: l })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleOnFollowSelected', function (e, t, n) {
                var r,
                  o = a.props.analytics,
                  i = a.state,
                  s = i.firstSelectedGroupIdx,
                  l = i.followedGroupIds,
                  c = i.groups,
                  u = i.notFollowedGroupIds,
                  d = i.selectedUsers,
                  p = (0, mi.Z)(e)
                try {
                  for (p.s(); !(r = p.n()).done; ) {
                    var h = r.value
                    d.has(h) ||
                      n ||
                      o.scribe({ element: 'recommendation', action: 'select', data: a._getScribeData(h, t) }),
                      d.add(h)
                  }
                } catch (f) {
                  p.e(f)
                } finally {
                  p.f()
                }
                t && (l.add(t), u['delete'](t))
                var m =
                  s < 0
                    ? c.findIndex(function (e) {
                        return e.group_id === t
                      })
                    : s
                a.setState({ selectedUsers: d, followedGroupIds: l, notFollowedGroupIds: u, firstSelectedGroupIdx: m })
              }),
              (0, u.Z)((0, s.Z)(a), '_handleActionButtonClick', function () {
                var e = a.props,
                  t = e.onNavigate,
                  n = e.subtask,
                  r = e.subtaskId
                ;(0, e.updateFlow)(r, {
                  link: n.next_link.link_id,
                  selected_user_recommendations: (0, G.Z)(a.state.selectedUsers),
                }),
                  t(n.next_link)
              })
            var r = e.browsableNuxRecommendations,
              i = e.flowToken,
              l = e.subtask,
              c = e.subtaskId,
              h = e.subtaskInputs,
              f = (0, at.Z)([]),
              _ = (0, W.OG)(h, { key: _c, subtask_id: c }, f)
            ;(a._scribeDescription = 'subtask_id='.concat(c, ',flow_token=').concat(i)),
              (a._recommendedUsers = (0, at.Z)(
                l.groups
                  .map(function (e) {
                    return e.items.map(function (e) {
                      return e.user_id ? e.user_id.toString() : ''
                    })
                  })
                  .reduce(function (e, t) {
                    return e.concat(t)
                  }),
              ))
            var v = (0, G.Z)(l.groups)
            r && v.concat(r)
            var g = v
              .map(function (e) {
                return e.group_id || ''
              })
              .filter(function (e) {
                return !!e.length
              })
            return (
              (a.state = {
                selectedUsers: _ && _.size ? _ : a._getPreCheckedUsers(l.groups),
                followedGroupIds: (0, at.Z)([]),
                notFollowedGroupIds: (0, at.Z)(g),
                groups: Tl()(v, 'group_id'),
                firstSelectedGroupIdx: -1,
              }),
              a
            )
          }
          return (
            (0, i.Z)(
              n,
              [
                {
                  key: 'render',
                  value: function value() {
                    var e,
                      t,
                      n,
                      r = this,
                      o = this.props,
                      i = o.onNavigate,
                      s = o.passthroughOcfScreenProps,
                      l = o.subtask,
                      c = o.subtaskInputs,
                      u = this.state,
                      p = u.firstSelectedGroupIdx,
                      h = u.groups,
                      m = u.selectedUsers,
                      f = (((l.next_link_threshold_text || {})[0] || {}).text || {}).text,
                      _ = l.next_link.label,
                      v = m.size,
                      g = this._getFollowText(f, _, v),
                      b = null === l.min_follow_count || void 0 === l.min_follow_count ? 1 : l.min_follow_count,
                      k = m.size < 10 ? m.size / 10 : 1,
                      y =
                        null != l && null !== (e = l.user_tooltip_text) && void 0 !== e && e.text
                          ? {
                              text: null == l || null === (t = l.user_tooltip_text) || void 0 === t ? void 0 : t.text,
                              icon: Pl['default'],
                            }
                          : void 0,
                      Z = m.size < b,
                      w =
                        null != l && l.gated_next_link_popup_text && Z
                          ? function (e) {
                              return d.createElement(
                                Al.Z,
                                {
                                  preferredVerticalOrientation: 'up',
                                  renderContent: r._renderPopoverContent,
                                  withArrow: !0,
                                },
                                e,
                              )
                            }
                          : void 0,
                      x = null == l || null === (n = l.progress_indicator_text) || void 0 === n ? void 0 : n.text,
                      C = x ? d.createElement(fc, { progress: k, text: x }) : void 0
                    return d.createElement(
                      ye.Z,
                      (0, a.Z)({}, s, {
                        footer: d.createElement(te, {
                          actionDisabled: Z,
                          actionLabel: g || vc,
                          actionTestID: Ml,
                          actionWrapper: w,
                          decorator: C,
                          onAction: this._handleActionButtonClick,
                        }),
                        header: d.createElement(ke, {
                          onNavigate: i,
                          primaryTextProp: l.primary_text,
                          secondaryTextProp: l.secondary_text,
                          subtaskInputs: c,
                        }),
                        providePadding: !0,
                      }),
                      d.createElement(uc, {
                        firstSelectedGroupIdx: p,
                        followButtonType: l.follow_button_type,
                        followedUserIds: m,
                        message: y,
                        onFollow: this._handleOnFollowSelected,
                        onNearEnd: this._handleNearEnd,
                        onUnfollow: this._handleOnUnfollowSelected,
                        scribeDescription: this._scribeDescription,
                        styleType: l.style,
                        userGroups: h,
                      }),
                      this.props.errorDialog,
                    )
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function value(e, t) {
                    var n = t.followedGroupIds,
                      a = t.groups,
                      r = t.notFollowedGroupIds,
                      o = e.browsableNuxRecommendations
                    if ((0, On.Z)(e.browsableNuxRecommendations, t.groups)) return t
                    var i = [].concat((0, G.Z)(a), (0, G.Z)(o)),
                      s = (0, at.Z)(
                        e.browsableNuxRecommendations
                          .map(function (e) {
                            return e.group_id
                          })
                          .filter(function (e) {
                            return !n.has(e)
                          }),
                      )
                    return {
                      groups: Tl()(i, 'group_id'),
                      notFollowedGroupIds: (0, at.Z)([].concat((0, G.Z)(s), (0, G.Z)(r))),
                    }
                  },
                },
              ],
            ),
            n
          )
        })(d.Component),
        bc = v.Z.create(function (e) {
          return { popoverContent: { padding: e.spaces.space16 } }
        })
      var kc = pc(gc),
        yc = 'headerPrimaryText',
        Zc = 'detailText'
      var wc = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n() {
            var e
            ;(0, o.Z)(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) {
              r[i] = arguments[i]
            }
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (0, u.Z)((0, s.Z)(e), '_isInteractive', 'interactive' === e.props.subtask.style),
              (0, u.Z)((0, s.Z)(e), '_navigateAndUpdate', function (t) {
                var n = e.props,
                  a = n.onNavigate,
                  r = n.subtask,
                  o = n.subtaskId
                ;(0, n.updateFlow)(o, { link: t.link_id, wait_time_ms: r.wait_time_ms }), a(t, !0)
              }),
              e
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this._interactiveInterval && clearInterval(this._interactiveInterval),
                    this._interactiveTimeout && clearTimeout(this._interactiveTimeout),
                    this._spinnerTimer && clearTimeout(this._spinnerTimer)
                },
              },
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this,
                    t = this.props,
                    n = t.pollInteractivePath,
                    a = t.subtask
                  if (this._isInteractive) {
                    var r = a.extension_endpoint
                    a.extension_polling_interval_ms &&
                      r &&
                      (this._interactiveInterval = setInterval(function () {
                        n(r).then(function (t) {
                          t && e._navigateAndUpdate(a.next_link)
                        })
                      }, a.extension_polling_interval_ms))
                    var o = a.extension_timeout_link
                    o &&
                      (this._interactiveTimeout = setTimeout(function () {
                        e._navigateAndUpdate(o)
                      }, a.max_extension_time_ms || a.wait_time_ms))
                  } else
                    this._spinnerTimer = setTimeout(function () {
                      e._navigateAndUpdate(a.next_link)
                    }, a.wait_time_ms)
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.onNavigate,
                    n = e.passthroughOcfScreenProps,
                    r = e.subtask,
                    o = e.subtaskInputs,
                    i = r.detail_text,
                    s = r.header
                  return d.createElement(
                    ye.Z,
                    (0, a.Z)({}, n, {
                      header:
                        this._isInteractive &&
                        this.props.subtask.header &&
                        d.createElement(ke, {
                          header: s,
                          onNavigate: t,
                          primaryTextTestID: yc,
                          subtaskInputs: o,
                          withHeaderImage: !0,
                        }),
                      providePadding: this._isInteractive,
                    }),
                    d.createElement(
                      p.Z,
                      { style: xc.indicator, testID: Zc },
                      this._isInteractive && this.props.subtask.header
                        ? d.createElement(
                            p.Z,
                            null,
                            i && d.createElement(Y, (0, a.Z)({}, i, { onNavigate: t, subtaskInputs: o })),
                          )
                        : d.createElement(co.Z, null),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(d.Component),
        xc = v.Z.create(function (e) {
          return { indicator: { display: 'flex', flex: 1, justifyContent: 'center' } }
        }),
        Cc = (n(460523), n(90437)),
        Ic = n(470025),
        Ec = n(658380)
      function Sc(e) {
        var t = e.onNavigate,
          n = e.passthroughOcfScreenProps,
          a = e.subtask,
          r = e.subtaskId,
          o = e.updateFlow,
          i = new URLSearchParams(a.url.split('?')[1]),
          s = i.get('publicKey'),
          l = i.get('webKey') || s,
          c = i.get('mobileKey') || s,
          u = 'true' === i.get('verifyOnChallengeCompleted'),
          p = i.get('flowToken') || ''
        return l && c && !(u && '' === p)
          ? d.createElement(
              ye.Z,
              n,
              d.createElement(Ec['default'], {
                flowToken: p,
                mobileKey: c,
                onChallengeCompleted: function onChallengeCompleted(e) {
                  Oe.ZP.isTwitterApp()
                    ? Ic.Z.openApp(e)
                    : (o(r, { completion_deeplink: e, link: a.next_link.link_id }), t(a.next_link))
                },
                onChallengeFailed: function onChallengeFailed(e) {
                  o(r, { completion_deeplink: e, link: a.fail_link.link_id }), t(a.fail_link)
                },
                shouldVerifyAfterChallengeCompleted: u,
                webKey: l,
              }),
            )
          : ((0, Cc.vv)(), null)
      }
      function Tc(e) {
        var t = e.onNavigate,
          n = e.passthroughOcfScreenProps,
          a = e.renderDefault,
          r = e.subtask,
          o = e.subtaskId,
          i = e.updateFlow
        return r && -1 !== r.url.indexOf('ocf_arkose_challenge')
          ? d.createElement(Sc, {
              onNavigate: t,
              passthroughOcfScreenProps: n,
              subtask: r,
              subtaskId: o,
              updateFlow: i,
            })
          : a()
      }
      var Ac = b().c20aaf3e,
        Pc = b().a219e218,
        Fc = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, c.Z)(n)
          function n(e, i) {
            var l
            return (
              (0, o.Z)(this, n),
              (l = t.call(this, e, i)),
              (0, u.Z)((0, s.Z)(l), '_handleBackAttempt', function (e, t) {
                var n = l.props.currentSubtask,
                  a = !n || !n.subtask_back_navigation || n.subtask_back_navigation !== L.bc.Disallow,
                  r = !((null == n ? void 0 : n.subtask_back_navigation) !== L.bc.CancelFlow),
                  o = !l.currentPreviousNavigableSubtaskId && (l._onFirstTaskSinceStart || r) && a
                return (
                  !('POP' === t && !o) ||
                  (l.currentPreviousNavigableSubtaskId && a && l._navigateToPreviousSubtask(), !1)
                )
              }),
              (0, u.Z)((0, s.Z)(l), '_sendGaOnboardingEvent', function (e) {
                ;(0, l.props.googleAnalyticsSendEvent)('signup', e, 'new-user')
              }),
              (0, u.Z)((0, s.Z)(l), '_startFlow', function (e) {
                var t = e.countryCode,
                  n = e.createLocalApiErrorHandler,
                  a = e.debugOverrides,
                  o = e.flowName,
                  i = e.inputFlowData,
                  s = e.location,
                  c = e.startFlow,
                  u = e.startLocation,
                  d = e.targetUserId,
                  p = e.testCountryCode,
                  h = s.state || {},
                  m = h.fromApp,
                  f = h.gatedAction,
                  _ = Object.keys(u || {}).length
                    ? { start_location: u }
                    : { start_location: { location: m ? 'unknown' : 'manual_link' } },
                  v = { flow_context: (0, r.Z)({ debug_overrides: a, gated_action: f }, _) },
                  g = (0, r.Z)(
                    (0, r.Z)({}, i),
                    {},
                    { country_code: t || i.country_code, target_user_id: d || i.target_user_id },
                    v,
                  )
                'signup' === o && l._sendGaOnboardingEvent('signup-clicked'),
                  (l._onFirstTaskSinceStart = !0),
                  c({ flow_name: o, input_flow_data: g, subtask_versions: W.OA, test_country_code: p })['catch'](
                    n(A(o, null, l._displayFailureMessage)),
                  )
              }),
              (0, u.Z)((0, s.Z)(l), '_handleFlowRestart', function () {
                l._startFlow(l.props)
              }),
              (0, u.Z)((0, s.Z)(l), '_handleAbortFlow', function (e) {
                var t = l.props,
                  n = t.clearFlow,
                  a = t.currentSubtask,
                  r = t.flowName,
                  o = t.history,
                  i = t.location,
                  s = t.loginReturnPath,
                  c = t.onAbort,
                  u = t.returnPath
                n({ clearPersistence: !0 })
                var d = a && (0, W.uL)(a),
                  p = (a || {}).subtask_back_navigation_link
                if (c) c()
                else {
                  if (u) o.replace({ pathname: u, query: { flow_status: e } })
                  else if (d === L.Ti.OpenHomeTimeline)
                    'login' === r && s ? B.ZP.navigateTo(s) : B.ZP.navigateTo('/home')
                  else if (p) l._handleNavigate(p)
                  else {
                    var h = !!l.context.loggedInUserId
                    l._unblockHistory && l._unblockHistory(),
                      (0, F.q)({}, { location: i })
                        ? o.goBack()
                        : h
                        ? s
                          ? o.replace(s)
                          : o.replace('/home')
                        : o.replace('/')
                  }
                  l.props.language !== b().language &&
                    (o.location.pathname.startsWith('/i/flow/')
                      ? o.listen(function () {
                          return window.location.reload()
                        })
                      : window.location.reload())
                }
              }),
              (0, u.Z)((0, s.Z)(l), '_handleDeepLink', function (e) {
                var t = l.props,
                  n = t.flowName,
                  a = t.history,
                  r = t.loginReturnPath
                if (e) {
                  var o,
                    i = B.ZP.parseInternalUrl(e),
                    s = i && !(null === (o = h.Qc(i)) || void 0 === o || !o.query)
                  if (B.ZP.isOCFUrl(e) && void 0 !== i && !s) {
                    if (!r || ('login' !== n && 'signup' !== n)) a.replace(i)
                    else {
                      var c = { requested_variant: btoa(JSON.stringify({ redirect_url: ''.concat(r) })) },
                        u = JSON.stringify(c)
                      a.replace({ pathname: i, query: { input_flow_data: u } })
                    }
                  } else
                    ['twitter://', 'https://'].find(function (t) {
                      return e.startsWith(t)
                    })
                      ? B.ZP.navigateTo(e)
                      : a.replace(e)
                }
              }),
              (0, u.Z)((0, s.Z)(l), '_displayFailureMessage', function (e) {
                l.setState({ alertFailureMessage: e })
              }),
              (0, u.Z)((0, s.Z)(l), '_submitFlow', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.isTaskNavigation,
                  n = l.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.flowName,
                  o = n.submitFlow
                return o({ isTaskNavigation: t }).then(
                  function (e) {
                    return (l._onFirstTaskSinceStart = !1), e
                  },
                  function (e) {
                    var t = l.props,
                      n = t.failureMessage,
                      o = t.shouldAbort
                    return a(A(r, n, o ? l._displayFailureMessage : void 0))(e)
                  },
                )
              }),
              (0, u.Z)((0, s.Z)(l), '_handleNavigate', function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = l.props,
                  a = n.navigateSubtask,
                  r = n.submitFlow,
                  o = e.is_destructive,
                  i = e.subtask_id,
                  s = e.subtask_navigation_context
                switch (
                  (e.suppress_client_events || l._scribeSubtaskNavigate(e),
                  e.callbacks && l._handleCallbacks(e.callbacks, L.ho.Click),
                  e.link_type)
                ) {
                  case L.Iq.Abort:
                    r()['catch'](k.Z), l._handleAbortFlow()
                    break
                  case L.Iq.Subtask:
                    a({ subtaskId: i, navigationContext: s, destructive: o, fromHiddenSubtask: t })
                    break
                  case L.Iq.Finish:
                  case L.Iq.Task:
                    l._submitFlow({ isTaskNavigation: !0 })
                    break
                  case L.Iq.Deeplink:
                    l._submitFlow(), l._handleDeepLink(e.url)
                    break
                  case L.Iq.DeeplinkAndAbort:
                    r()['catch'](k.Z), l._handleDeepLink(e.url)
                    break
                  case L.Iq.WeblinkAndAbort:
                    r()['catch'](k.Z), window.open(e.url, '_blank'), l._handleAbortFlow()
                    break
                  case L.Iq.Web:
                    B.ZP.navigateTo(e.url)
                    break
                  case L.Iq.ChromelessWeb:
                    window.open(e.url, '_blank')
                    break
                  case L.Iq.DeeplinkInPlace:
                    break
                  default:
                    ;(0, N.ZP)('Unknown Navigation Link Type '.concat(e.link_type)), l._handleAbortFlow()
                }
              }),
              (0, u.Z)((0, s.Z)(l), '_scribeSubtaskNavigate', function (e) {
                var t = l.props,
                  n = t.analytics,
                  a = t.currentSubtask,
                  r = t.flowToken
                if (a && a.subtask_id) {
                  var o = e.link_id
                  n.scribe({
                    element: 'link',
                    action: 'click',
                    data: { items: [{ token: r, name: a.subtask_id, description: o }] },
                  })
                }
              }),
              (0, u.Z)((0, s.Z)(l), '_navigateToSubtask', function (e) {
                return function () {
                  l._handleNavigate({ link_id: '', link_type: L.Iq.Subtask, subtask_id: e })
                }
              }),
              (0, u.Z)((0, s.Z)(l), '_endFlowSubtaskAction', function (e, t) {
                var n = l.props.submitFlow
                switch (t) {
                  case L.Iq.Abort:
                    n()
                      ['catch'](k.Z)
                      .then(function () {
                        return l._handleAbortFlow(e)
                      })
                    break
                  case L.Iq.Finish:
                    l._submitFlow().then(function () {
                      return l._handleAbortFlow(e)
                    })
                    break
                  default:
                    ;(0, N.ZP)('Unknown End Flow Type '.concat(t)), l._handleAbortFlow()
                }
              }),
              (0, u.Z)((0, s.Z)(l), '_render', function () {
                var e,
                  t,
                  n = l.props,
                  a = n.currentSubtask,
                  r = n.previousNavigableSubtaskId,
                  o = n.subtaskInputs,
                  i = n.subtasks,
                  s = n.updateFlow
                if (!a) return null
                ;(0, R.Lw)(a)
                  ? ((t = i.find(function (e) {
                      return e.subtask_id === r
                    })),
                    (e = a))
                  : (t = a)
                return d.createElement(
                  d.Fragment,
                  null,
                  e &&
                    d.createElement(
                      Et,
                      {
                        onNavigate: l._handleNavigate,
                        subtask: e,
                        subtaskId: a.subtask_id,
                        subtaskInputs: o,
                        updateFlow: s,
                      },
                      l._renderSubtask(e),
                    ),
                  t &&
                    d.createElement(
                      Et,
                      {
                        onNavigate: l._handleNavigate,
                        subtask: t,
                        subtaskId: a.subtask_id,
                        subtaskInputs: o,
                        updateFlow: s,
                      },
                      l._renderSubtask(t),
                    ),
                )
              }),
              (0, u.Z)((0, s.Z)(l), '_renderDefault', function () {
                var e = l.props,
                  t = e.currentSubtask,
                  n = e.flowToken,
                  a = e.history,
                  r = e.subtasks.map(function (e) {
                    return d.createElement(
                      m.ZP,
                      { key: e.subtask_id, onClick: l._navigateToSubtask(e.subtask_id) },
                      e.subtask_id,
                    )
                  })
                return d.createElement(
                  ye.Z,
                  { history: a },
                  d.createElement(
                    p.Z,
                    { style: { margin: 5 } },
                    d.createElement(m.ZP, null, n),
                    d.createElement(m.ZP, null, 'Current Subtask: '.concat(t ? t.subtask_id : '')),
                    r,
                  ),
                )
              }),
              (0, u.Z)((0, s.Z)(l), '_handleAbortFlowOnConfirm', function () {
                l._handleAbortFlow()
              }),
              (0, u.Z)((0, s.Z)(l), '_onNoopInvisibleSubtask', function () {
                return Promise.resolve()
              }),
              (0, u.Z)((0, s.Z)(l), '_navigateToPreviousSubtask', function () {
                var e = l.props
                ;(0, e.navigateSubtask)({ subtaskId: e.previousNavigableSubtaskId, destructive: !0 })
              }),
              (0, u.Z)((0, s.Z)(l), '_renderErrorDialog', function () {
                var e = l.props,
                  t = e.failureMessage,
                  n = e.history
                return d.createElement(
                  ye.Z,
                  { hideBackButton: !0, history: n },
                  d.createElement(f.Z, {
                    confirmButtonLabel: Pc,
                    headline: Ac,
                    onConfirm: l._handleAbortFlowOnConfirm,
                    text: t || S,
                    withCancelButton: !1,
                  }),
                )
              }),
              (0, u.Z)((0, s.Z)(l), '_renderSubtask', function (e) {
                var t = l.props,
                  n = t.addToast,
                  r = t.callInteractiveSpinnerPath,
                  o = t.fetchTemporaryPassword,
                  i = t.flowName,
                  c = t.flowToken,
                  u = t.history,
                  p = t.location,
                  h = t.previouslySubmittedSubtaskId,
                  m = t.removeContacts,
                  v = t.shouldAbort,
                  g = t.startLocation,
                  b = t.submitFailed,
                  k = t.subtaskInputs,
                  y = t.updateFlow,
                  Z = e.progress_indication,
                  w = e.subtask_back_navigation,
                  x = e.subtask_id,
                  C = v
                    ? d.createElement(f.Z, {
                        confirmButtonLabel: Pc,
                        headline: Ac,
                        onConfirm: l._handleAbortFlowOnConfirm,
                        text: l.state.alertFailureMessage,
                        withCancelButton: !1,
                      })
                    : null,
                  I = {
                    onNavigate: l._handleNavigate,
                    passthroughOcfScreenProps: {
                      backButtonType: w === L.bc.CancelFlow ? 'close' : 'back',
                      history: u,
                      onBackClick: l._getBackNavigation(e),
                      progressIndication: Z,
                    },
                    subtaskId: x,
                    updateFlow: y,
                  }
                if (e.end_flow)
                  return l._endFlowSubtaskAction(e.end_flow.status, e.end_flow.end_flow_type), l._renderDefault()
                if (e.action_list) return d.createElement(Te, (0, a.Z)({ subtask: e.action_list, subtaskInputs: k }, I))
                if (e.fetch_temporary_password)
                  return d.createElement(Ge, {
                    navigationLink: e.fetch_temporary_password.next_link,
                    onNavigate: l._handleNavigate,
                    subtaskAction: l._handleInvisibleSubtask(x, e.fetch_temporary_password, o),
                    subtaskId: x,
                  })
                if (e.cta) return d.createElement(He, (0, a.Z)({ errorDialog: C, subtask: e.cta, subtaskInputs: k }, I))
                if (e.app_download_cta)
                  return d.createElement(
                    De,
                    (0, a.Z)({ errorDialog: C, startLocation: g, subtask: e.app_download_cta, subtaskInputs: k }, I),
                  )
                if (e.app_locale_update) return d.createElement(ps, (0, a.Z)({ subtask: e.app_locale_update }, I))
                if (e.alert_dialog)
                  return d.createElement(Pe, (0, a.Z)({ subtask: e.alert_dialog, subtaskInputs: k }, I))
                if (e.alert_dialog_suppress_client_events)
                  return d.createElement(
                    Pe,
                    (0, a.Z)({ subtask: e.alert_dialog_suppress_client_events, subtaskInputs: k }, I),
                  )
                if (e.menu_dialog) return d.createElement(_o, (0, a.Z)({ subtask: e.menu_dialog, subtaskInputs: k }, I))
                if (e.open_account)
                  return d.createElement(Ge, {
                    navigationLink: e.open_account.next_link,
                    onNavigate: l._handleNavigate,
                    subtaskAction: l._openAccountAction(e.open_account),
                    subtaskId: x,
                  })
                if (e.in_app_notification)
                  return d.createElement(
                    $r,
                    (0, a.Z)(
                      { addToast: n, onNavigate: l._handleNavigate, subtask: e.in_app_notification, subtaskId: x },
                      I,
                    ),
                  )
                if (e.show_code)
                  return d.createElement(Pi, (0, a.Z)({ errorDialog: C, subtask: e.show_code, subtaskInputs: k }, I))
                if (e.sign_up) return d.createElement(es, (0, a.Z)({ subtask: e.sign_up, subtaskInputs: k }, I))
                if (e.sign_up_review)
                  return d.createElement(
                    us,
                    (0, a.Z)({ errorDialog: C, subtask: e.sign_up_review, subtaskInputs: k }, I),
                  )
                if (e.js_instrumentation) return d.createElement(ho, (0, a.Z)({ subtask: e.js_instrumentation }, I))
                if (e.phone_verification)
                  return d.createElement(
                    Do,
                    (0, a.Z)(
                      { errorDialog: C, flowName: i, submitFailed: b, subtask: e.phone_verification, subtaskInputs: k },
                      I,
                    ),
                  )
                if (e.recaptcha)
                  return d.createElement(ur, (0, a.Z)({ errorDialog: C, subtask: e.recaptcha, subtaskInputs: k }, I))
                if (e.privacy_options)
                  return d.createElement(Oo, (0, a.Z)({ subtask: e.privacy_options, subtaskInputs: k }, I))
                if (e.generic_urt)
                  return d.createElement(qr, (0, a.Z)({ errorDialog: C, subtask: e.generic_urt, subtaskInputs: k }, I))
                if (e.interest_picker)
                  return d.createElement(
                    lo,
                    (0, a.Z)({ errorDialog: C, subtask: e.interest_picker, subtaskInputs: k }, I),
                  )
                if (e.topics_selector)
                  return d.createElement(
                    Ws,
                    (0, a.Z)({ errorDialog: C, subtask: e.topics_selector, subtaskInputs: k }, I),
                  )
                if (e.notifications_permission_prompt)
                  return d.createElement(
                    Co,
                    (0, a.Z)({ subtask: e.notifications_permission_prompt, subtaskInputs: k }, I),
                  )
                if (e.open_home_timeline)
                  return (
                    'signup' === i && l._sendGaOnboardingEvent('complete-NUX'),
                    d.createElement(Ge, {
                      navigationLink: e.open_home_timeline.next_link,
                      onNavigate: l._handleNavigate,
                      subtaskAction: l._onNoopInvisibleSubtask,
                      subtaskId: x,
                    })
                  )
                if (e.open_link)
                  return h === x
                    ? null
                    : d.createElement(So, {
                        flowName: i,
                        onNavigate: l._handleNavigate,
                        subtask: e.open_link,
                        subtaskId: x,
                      })
                if (e.upload_media)
                  return d.createElement(fl, {
                    flowToken: c,
                    onNavigate: l._handleNavigate,
                    subtask: e.upload_media,
                    subtaskId: x,
                  })
                if (e.user_recommendations_list)
                  return d.createElement(
                    kc,
                    (0, a.Z)({ errorDialog: C, subtask: e.user_recommendations_list, subtaskInputs: k }, I),
                  )
                if (e.user_recommendations_urt)
                  return d.createElement(
                    El,
                    (0, a.Z)(
                      { errorDialog: C, flowToken: c, subtask: e.user_recommendations_urt, subtaskInputs: k },
                      I,
                    ),
                  )
                if (e.update_users)
                  return d.createElement(Ge, {
                    navigationLink: e.update_users.next_link,
                    onNavigate: l._handleNavigate,
                    subtaskAction: l._handleInvisibleSubtask(x, e.update_users, l._updateUsersAction),
                    subtaskId: x,
                  })
                if (e.enter_password)
                  return d.createElement(
                    Ya,
                    (0, a.Z)({ errorDialog: C, subtask: e.enter_password, subtaskInputs: k }, I),
                  )
                if (e.settings_list) {
                  var E = e.settings_list
                  return d.createElement(_.Z.Consumer, null, function (e) {
                    var t = e.isModal
                    return d.createElement(
                      Ei,
                      (0, a.Z)(
                        { addToast: n, errorDialog: C, isModal: t, removeContacts: m, subtask: E, subtaskInputs: k },
                        I,
                      ),
                    )
                  })
                }
                return e.email_contacts_sync
                  ? d.createElement(
                      Tn,
                      (0, a.Z)({ errorDialog: C, location: p, subtask: e.email_contacts_sync, subtaskInputs: k }, I),
                    )
                  : e.select_avatar
                  ? d.createElement(ti, (0, a.Z)({ errorDialog: C, subtask: e.select_avatar, subtaskInputs: k }, I))
                  : e.select_banner
                  ? d.createElement(hi, (0, a.Z)({ errorDialog: C, subtask: e.select_banner, subtaskInputs: k }, I))
                  : e.security_key
                  ? d.createElement(zo, (0, a.Z)({ errorDialog: C, subtask: e.security_key, subtaskInputs: k }, I))
                  : e.enter_date
                  ? d.createElement(Un, (0, a.Z)({ errorDialog: C, subtask: e.enter_date, subtaskInputs: k }, I))
                  : e.enter_text
                  ? d.createElement(
                      fr,
                      (0, a.Z)({ errorDialog: C, key: x, subtask: e.enter_text, subtaskInputs: k }, I),
                    )
                  : e.email_verification
                  ? d.createElement(
                      Bn,
                      (0, a.Z)(
                        {
                          errorDialog: C,
                          flowName: i,
                          submitFailed: b,
                          subtask: e.email_verification,
                          subtaskInputs: k,
                        },
                        I,
                      ),
                    )
                  : e.enter_username
                  ? d.createElement(Cr, (0, a.Z)({ errorDialog: C, subtask: e.enter_username, subtaskInputs: k }, I))
                  : e.enter_email
                  ? d.createElement(La, (0, a.Z)({ errorDialog: C, subtask: e.enter_email, subtaskInputs: k }, I))
                  : e.enter_phone
                  ? d.createElement(ir, (0, a.Z)({ errorDialog: C, subtask: e.enter_phone, subtaskInputs: k }, I))
                  : e.choice_selection
                  ? d.createElement(Yt, (0, a.Z)({ key: x, subtask: e.choice_selection, subtaskInputs: k }, I))
                  : e.contacts_live_sync_permission_prompt
                  ? d.createElement(
                      yn,
                      (0, a.Z)({ subtask: e.contacts_live_sync_permission_prompt, subtaskInputs: k }, I),
                    )
                  : e.wait_spinner
                  ? d.createElement(
                      wc,
                      (0, a.Z)({ pollInteractivePath: r, subtask: e.wait_spinner, subtaskInputs: k }, I),
                    )
                  : e.check_logged_in_account
                  ? d.createElement(
                      Ye,
                      (0, a.Z)(
                        {
                          errorDialog: C,
                          onNavigate: l._handleNavigate,
                          subtask: e.check_logged_in_account,
                          subtaskId: x,
                        },
                        I,
                      ),
                    )
                  : e.tweet_selection_urt
                  ? d.createElement(
                      tl,
                      (0, a.Z)({ errorDialog: C, subtask: e.tweet_selection_urt, subtaskInputs: k }, I),
                    )
                  : e.typeahead_search
                  ? d.createElement(
                      cl,
                      (0, a.Z)(
                        {
                          errorDialog: C,
                          key: x,
                          source: V._4.OcfTypeaheadSearch,
                          subtask: e.typeahead_search,
                          subtaskInputs: k,
                        },
                        I,
                      ),
                    )
                  : e.web_modal
                  ? d.createElement(
                      Tc,
                      (0, a.Z)({ renderDefault: l._renderDefault.bind((0, s.Z)(l)), subtask: e.web_modal }, I),
                    )
                  : l._renderDefault()
              }),
              (0, u.Z)((0, s.Z)(l), '_getBackNavigation', function (e) {
                var t = e.subtask_back_navigation,
                  n = void 0 === t ? L.bc.Allow : t
                return n === L.bc.CancelFlow
                  ? function () {
                      return l._handleAbortFlow()
                    }
                  : l.currentPreviousNavigableSubtaskId && n === L.bc.Allow
                  ? l._navigateToPreviousSubtask
                  : void 0
              }),
              (0, u.Z)((0, s.Z)(l), '_scribeSubtaskView', function () {
                var e = l.props,
                  t = e.analytics,
                  n = e.currentSubtask,
                  a = e.flowToken
                n &&
                  n.subtask_id &&
                  !(0, W.Di)(n) &&
                  t.scribe({
                    element: 'view',
                    action: 'impression',
                    data: { items: [{ token: a, name: n.subtask_id }] },
                  })
              }),
              (0, u.Z)((0, s.Z)(l), '_handleCallbacks', function (e, t) {
                var n = l.props,
                  a = n.analytics,
                  o = n.callOnboardingPath
                e.forEach(function (e) {
                  if (e.trigger === t) {
                    var n = e.scribe_config
                    null != n && n.action && a.scribe((0, r.Z)((0, r.Z)({}, n), {}, { action: n.action })),
                      e.endpoint && o(e.endpoint, { timestampMs: Date.now() })
                  }
                })
              }),
              (0, u.Z)((0, s.Z)(l), '_openAccountAction', function (e) {
                return function () {
                  var t = l.context.loggedInUserId,
                    n = l.props,
                    a = n.analytics,
                    r = n.returnPath,
                    o = n.verifyCredentials,
                    i = e.attribution_event,
                    s = e.user.id_str,
                    c = (0, D.Qo)(l.context.featureSwitches) || {},
                    u = c.encryptedReferer,
                    d = c.encryptedReferralDetails
                  return (
                    O.Z.flushHTMLCache(),
                    t && s !== t
                      ? (B.ZP.navigateTo(r || '/home'), new Promise(function () {}))
                      : o().then(function () {
                          l._maybeScribeAppInstallBanner(),
                            'signup' === i &&
                              (l._sendGaOnboardingEvent('account-create'),
                              a.scribe({
                                page: 'signup',
                                action: 'success',
                                data: { referer: u, external_referer: d },
                              }))
                        })
                  )
                }
              }),
              (0, u.Z)((0, s.Z)(l), '_updateUsersAction', function (e, t) {
                var n = l.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.fetchUsers,
                  o = null == t ? void 0 : t.users
                o &&
                  o.length &&
                  r(
                    o.map(function (e) {
                      return e.id_str
                    }),
                  )['catch'](a({ showToast: !0 }))
              }),
              (0, u.Z)((0, s.Z)(l), '_maybeScribeAppInstallBanner', function () {
                var e = l.props.analytics
                P.Z.hasPromptWaiting() && e.scribe({ page: 'signup', component: 'install_banner', action: 'waiting' })
              }),
              (l.state = { alertFailureMessage: '' }),
              l
            )
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function value(e) {
                  this.props.flowName !== e.flowName && this._startFlow(e)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function value(e) {
                  var t = e.currentSubtask,
                    n = this.props.currentSubtask,
                    a = t && t.subtask_id
                  n &&
                    n.subtask_id !== a &&
                    (this._scribeSubtaskView(), n.callbacks && this._handleCallbacks(n.callbacks, L.ho.Impression))
                },
              },
              {
                key: 'UNSAFE_componentWillMount',
                value: function value() {
                  this._startFlow(this.props)
                },
              },
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this.props,
                    t = e.analytics,
                    n = e.googleAnalyticsPageView,
                    a = e.history
                  t.scribePageImpression(),
                    n(t.contextualScribeNamespace),
                    (this._unblockHistory = a.block(this._handleBackAttempt))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function value() {
                  this._unblockHistory && this._unblockHistory(), this.props.clearFlow()
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.currentSubtask
                  e.shouldEndFlow && this._handleAbortFlow()
                  var n = this.props.fetchStatus
                  return (
                    n === M.ZP.FAILED || t || (n = M.ZP.LOADING),
                    d.createElement(
                      p.Z,
                      { style: Nc.root },
                      d.createElement(y.Z, {
                        fetchStatus: n,
                        onRequestRetry: this._handleFlowRestart,
                        render: this._render,
                        renderFailure: this._renderErrorDialog,
                        retryable: !this.props.shouldAbort,
                      }),
                    )
                  )
                },
              },
              {
                key: '_handleInvisibleSubtask',
                value: function value(e, t, n) {
                  return function () {
                    return new Promise(function (a, r) {
                      a(n(e, t))
                    })
                  }
                },
              },
              {
                key: 'currentPreviousNavigableSubtaskId',
                get: function get() {
                  return this.props.previousNavigableSubtaskId
                },
              },
            ]),
            n
          )
        })(d.Component)
      ;(0, u.Z)(Fc, 'contextType', Z.rC), (0, u.Z)(Fc, 'defaultProps', { inputFlowData: {} })
      var Nc = v.Z.create(function (e) {
        return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
      })
      var Dc = _n(Fc)
    },
    484973: function _(e, t, n) {
      'use strict'
      n.d(t, {
        Z: function Z() {
          return r
        },
      })
      var a = n(133028)
      var r = n(973186).Z.create(function (e) {
        var t = { width: '25%', minWidth: e.spaces.space48 }
        return {
          avatar: (0, a.Z)((0, a.Z)({}, t), {}, { height: 'auto', marginTop: '-15%', marginBottom: e.spaces.space12 }),
          avatarSize: t,
          avatarAndButton: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          },
          buttonAffordance: { height: e.spacesPx.space36 },
          content: {
            paddingTop: e.componentDimensions.gutterVertical,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
          },
          withheld: { paddingBottom: e.spaces.space12 },
          banner: { backgroundColor: e.colors.gray200 },
          menuSheetButton: { marginEnd: e.spaces.space8, marginBottom: e.spaces.space12 },
          names: { marginTop: e.spaces.space4, marginBottom: e.spaces.space12 },
        }
      })
    },
    210242: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          VerificationLanding: function VerificationLanding() {
            return A
          },
          default: function _default() {
            return F
          },
        })
      var a = n(709249),
        r = n(887371),
        o = n(580753),
        i = n(545754),
        s = n(486906),
        l = n(256666),
        c = (n(477950), n(385940), n(202784)),
        u = n(325686),
        d = n(434411),
        p = n(973186),
        h = n(473228),
        m = n.n(h),
        f = n(801206),
        _ = n(872983),
        v = n(823803),
        g = n(753105),
        b = n(397871),
        k = n(392160),
        y = n(917943),
        Z = (0, b.c)('user_identifier'),
        w = (0, b.c)('phone'),
        x = (0, b.c)('email'),
        C = (0, b.c)('pin_code')
      var I = (0, k.Z)()
        .propsFromState(function () {
          return { email: x, identifier: Z, phone: w, pinCode: C }
        })
        .propsFromActions(function () {
          return { verificationLink: y.d7 }
        })
      var E = m().b5474bd2,
        S = m().a9b8fb38,
        T = m().j24c37b2,
        A = (function (e) {
          ;(0, i.Z)(n, e)
          var t = (0, s.Z)(n)
          function n(e) {
            var r
            return (
              (0, a.Z)(this, n),
              (r = t.call(this, e)),
              (0, l.Z)((0, o.Z)(r), '_render', function () {
                return c.createElement(d.Z, {
                  actionLabel: T,
                  headline: r.state.title || '',
                  onAction: r._handleCloseWindow,
                  onClose: r._handleCloseWindow,
                  subtext: r.state.message || '',
                  withCloseButton: !1,
                })
              }),
              (0, l.Z)((0, o.Z)(r), '_handleCloseWindow', function () {
                window && window.close(), r.props.history.replace('/')
              }),
              (r.state = { title: void 0, message: void 0, fetchStatus: v.ZP.LOADING }),
              r
            )
          }
          return (
            (0, r.Z)(n, [
              {
                key: 'componentDidMount',
                value: function value() {
                  var e = this,
                    t = this.props,
                    n = t.email,
                    a = t.history,
                    r = t.identifier,
                    o = t.location,
                    i = t.phone,
                    s = t.pinCode,
                    l = t.verificationLink
                  return (
                    a.replace(o.pathname),
                    l({ user_identifier: r, email: n, phone: i, pin_code: s })
                      .then(function (t) {
                        return e.setState({
                          fetchStatus: t.success ? v.ZP.LOADED : v.ZP.FAILED,
                          title: t.title,
                          message: t.message,
                        })
                      })
                      ['catch'](function () {
                        return e.setState({ title: E, message: S, fetchStatus: v.ZP.FAILED })
                      })
                  )
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props.history
                  return c.createElement(
                    g.Z,
                    { hideLogo: !0, history: e },
                    c.createElement(
                      u.Z,
                      { style: P.root },
                      c.createElement(_.Z, {
                        fetchStatus: this.state.fetchStatus,
                        onRequestRetry: f.Z,
                        render: this._render,
                        renderFailure: this._render,
                        retryable: !1,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(c.Component),
        P = p.Z.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
        })
      var F = I(A)
    },
    796818: function _(e, t, n) {
      'use strict'
      n.d(t, {
        Z: function Z() {
          return I
        },
      })
      var a = n(133028),
        r = n(807896),
        o = n(459740),
        i = n(709249),
        s = n(887371),
        l = n(580753),
        c = n(545754),
        u = n(486906),
        d = n(256666),
        p = (n(108532), n(202784)),
        h = n(890601),
        m = n(359030),
        f = n(325686),
        _ = n(507066),
        v = n(436934),
        g = n(935094),
        b = n(379866),
        k = n(411839),
        y = n(973186),
        Z = ['checked', 'disabled', 'helpText', 'label', 'onChange', 'style'],
        w = 1,
        x = (function (e) {
          ;(0, c.Z)(n, e)
          var t = (0, u.Z)(n)
          function n() {
            var e
            return (
              (0, i.Z)(this, n),
              (e = t.call(this)),
              (0, d.Z)((0, l.Z)(e), '_handleChange', function (t) {
                var n = e.props.onChange
                n && n(t.nativeEvent.target.checked)
              }),
              (0, d.Z)((0, l.Z)(e), '_setCheckboxRef', function (t) {
                e._checkboxElement = t
              }),
              (e._labelId = 'CHECKBOX_'.concat(w, '_LABEL')),
              (w += 1),
              e
            )
          }
          return (
            (0, s.Z)(n, [
              {
                key: 'blur',
                value: function value() {
                  this._checkboxElement && m.Z.blur(this._checkboxElement)
                },
              },
              {
                key: 'focus',
                value: function value() {
                  this._checkboxElement && m.Z.focus(this._checkboxElement)
                },
              },
              {
                key: 'render',
                value: function value() {
                  var e = this.props,
                    t = e.checked,
                    n = e.disabled,
                    a = e.helpText,
                    i = e.label,
                    s = (e.onChange, e.style),
                    l = (0, o.Z)(e, Z),
                    c = b.Z.generate({
                      backgroundColor: y.Z.theme.colors.transparent,
                      color: y.Z.theme.colors.primary,
                      withFocusWithinFocusRing: !0,
                    }),
                    u = b.Z.generate({
                      backgroundColor: y.Z.theme.colors.transparent,
                      color: y.Z.theme.colors.gray700,
                      withFocusWithinFocusRing: !0,
                    }),
                    d = t ? c : u,
                    m = (0, h.Z)('input', {
                      accessibilityDescribedBy: this._labelId,
                      checked: t,
                      disabled: n,
                      onChange: this._handleChange,
                      ref: this._setCheckboxRef,
                      style: [C.nativeControl, C.cursorInherit],
                      type: 'checkbox',
                    }),
                    w = p.createElement(g.Z, { disabled: n }, function (e) {
                      return p.createElement(
                        f.Z,
                        (0, r.Z)({ accessibilityRole: 'label' }, l, { style: [s, !n && C.interactive] }),
                        p.createElement(
                          f.Z,
                          { style: C.topContainer },
                          i ? p.createElement(v.ZP, null, i) : null,
                          p.createElement(
                            f.Z,
                            { style: C.checkboxContainer },
                            (function (e) {
                              return p.createElement(
                                k.Z,
                                { interactiveStyles: d, interactivityState: e, style: C.fakeControlInteractiveStyles },
                                p.createElement(
                                  f.Z,
                                  {
                                    style: [
                                      C.fakeControl,
                                      t && C.fakeControlChecked,
                                      n && C.fakeControlDisabled,
                                      t && n && C.fakeControlCheckedAndDisabled,
                                    ],
                                  },
                                  t ? p.createElement(_['default'], { style: C.icon }) : null,
                                ),
                              )
                            })(e),
                            m,
                          ),
                        ),
                      )
                    })
                  return a
                    ? p.createElement(
                        f.Z,
                        null,
                        w,
                        p.createElement(
                          v.ZP,
                          { color: 'gray700', nativeID: this._labelId, size: 'subtext2', style: C.helpText },
                          a,
                        ),
                      )
                    : w
                },
              },
            ]),
            n
          )
        })(p.Component)
      ;(0, d.Z)(x, 'defaultProps', { checked: !1, disabled: !1 })
      var C = y.Z.create(function (e) {
        return {
          interactive: { cursor: 'pointer' },
          topContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexGrow: 1,
            gap: e.spaces.space8,
          },
          cursorInherit: { cursor: 'inherit' },
          checkboxContainer: { userSelect: 'none' },
          helpText: { paddingTop: e.spaces.space4 },
          fakeControlInteractiveStyles: {
            padding: e.spaces.space8,
            margin: '-'.concat(e.spaces.space8),
            borderRadius: e.borderRadii.infinite,
          },
          fakeControl: {
            alignItems: 'center',
            backgroundColor: e.colors.cellBackground,
            borderColor: e.colors.gray700,
            borderRadius: e.borderRadii.small,
            borderStyle: 'solid',
            borderWidth: e.borderWidths.medium,
            height: e.spaces.space20,
            justifyContent: 'center',
            width: e.spaces.space20,
          },
          fakeControlChecked: { backgroundColor: e.colors.primary, borderColor: e.colors.primary },
          fakeControlDisabled: { borderColor: e.colors.gray200 },
          fakeControlCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 },
          nativeControl: (0, a.Z)(
            (0, a.Z)({}, y.Z.absoluteFillObject),
            {},
            { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
          ),
          icon: (0, a.Z)(
            (0, a.Z)({}, y.Z.absoluteFillObject),
            {},
            { color: e.colors.whiteOnColor, height: e.spaces.space20, margin: 'auto' },
          ),
        }
      })
      var I = x
    },
    319874: function _(e, t, n) {
      'use strict'
      n.d(t, {
        Z: function Z() {
          return c
        },
      })
      var a = n(807896),
        r = n(459740),
        o = n(202784),
        i = n(24921),
        s = n(177096),
        l = ['value']
      var c = function c(e) {
        return o.createElement(
          i.Z,
          (0, a.Z)({}, e, {
            renderSelector: function renderSelector(e) {
              var t = e.value,
                n = (0, r.Z)(e, l)
              return o.createElement(s.Z, (0, a.Z)({}, n, { key: t }))
            },
          }),
        )
      }
    },
    248734: function _(e, t, n) {
      'use strict'
      n.d(t, {
        Z: function Z() {
          return k
        },
      })
      var a = n(196234),
        r = (n(172023), n(271245), n(202784)),
        o = n(325686),
        i = n(473228),
        s = n.n(i),
        l = n(418958),
        c = n(911711),
        u = n(35953),
        d = n(436934),
        p = n(744329),
        h = n(229496),
        m = n(430318),
        f = n(354484),
        _ = n(973186),
        v = _.Z.create(function (e) {
          return {
            root: {
              borderRadius: e.borderRadii.medium,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: e.spaces.space16,
              paddingVertical: e.spaces.space12,
            },
            contentContainer: { display: 'flex', flexDirection: 'row', flex: 1 },
            contentTextContainer: { flex: 1, alignItems: 'flex-start', justifyContent: 'center' },
            dismissButton: { paddingStart: e.spaces.space12 },
            icon: { color: e.colors.text, marginEnd: e.spaces.space8 },
            illustration: { marginEnd: e.spaces.space8, height: e.spaces.space28, width: e.spaces.space28 },
            arrow: { borderStyle: 'none' },
            arrowContainer: { display: 'flex', width: '100%', alignItems: 'center' },
            arrowDirectionUp: { top: e.spacesPx.space4 + e.spacesPx.space2 },
            arrowDirectionDown: { top: 0 - e.spacesPx.space4 - e.spacesPx.space2 },
            arrowDown: { transform: 'rotate(180deg)' },
            hidden: { opacity: 0 },
          }
        }),
        g = _.Z.create(function (e) {
          return {
            primary: { backgroundColor: e.colors.primary0 },
            purple: { backgroundColor: e.colors.purple0 },
            plum: { backgroundColor: e.colors.plum0 },
          }
        }),
        b = _.Z.create(function (e) {
          return {
            primary: { color: e.colors.primary0 },
            purple: { color: e.colors.purple0 },
            plum: { color: e.colors.plum0 },
          }
        })
      var k = function k(e) {
        var t,
          n,
          i,
          _,
          k,
          y,
          Z,
          w,
          x,
          C = e.backgroundColor,
          I = void 0 === C ? 'primary' : C,
          E = e.containerRef,
          S = e.icon,
          T = e.illustration,
          A = e.onClose,
          P = e.text,
          F = s().af8fa2ae,
          N = (0, f.b)(),
          D = (0, m.Z)().direction,
          B = r.useState(Number.MIN_SAFE_INTEGER),
          L = (0, a.Z)(B, 2),
          O = L[0],
          V = L[1],
          R = r.useState(Number.MIN_SAFE_INTEGER),
          M = (0, a.Z)(R, 2),
          U = M[0],
          z = M[1],
          j = 'rtl' === D,
          H = function H(e) {
            var t = e.getBoundingClientRect().top
            return U > t
          }
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            o.Z,
            {
              onLayout: function onLayout(e) {
                var t = e.nativeEvent.layout,
                  n = t.left,
                  a = t.top,
                  r = t.width
                z(a), V(n + r / 2)
              },
            },
            ((_ = !(!E || (U >= 0 && O >= 0))),
            (k =
              null != E && E.current
                ? ((t = E.current), H(t) ? { flexDirection: 'column' } : { flexDirection: 'column-reverse' })
                : void 0),
            (y = null == E || !E.current || H(E.current)),
            (Z =
              null != E && E.current
                ? (function (e) {
                    var t = e.getBoundingClientRect(),
                      n = t.left + t.width / 2 - O
                    return { start: j ? void 0 : n, end: j ? n : void 0 }
                  })(E.current)
                : void 0),
            (w = E
              ? (function (e, t) {
                  return r.createElement(
                    o.Z,
                    {
                      style: [v.arrowContainer, t, e ? v.arrowDirectionUp : v.arrowDirectionDown],
                      testID: 'tooltip-arrow',
                    },
                    r.createElement(c['default'], { style: [v.arrow, b[I], !e && v.arrowDown] }),
                  )
                })(y, Z)
              : void 0),
            (x = [k, _ && v.hidden]),
            r.createElement(
              o.Z,
              { style: x, testID: 'tooltip-content' },
              w,
              r.createElement(
                o.Z,
                { style: [v.root, g[I]] },
                r.createElement(
                  o.Z,
                  { style: v.contentContainer },
                  S && !T
                    ? ((i = S),
                      r.createElement(i, { style: [v.icon, { alignItem: 'flex-start' }], testID: 'tooltip-icon' }))
                    : null,
                  T && !S
                    ? ((n = T),
                      r.createElement(
                        o.Z,
                        { style: v.illustration, testID: 'tooltip-illustration' },
                        r.createElement(u.Z, { accessibilityLabel: '', aspectMode: p.Z.SQUARE, image: n }),
                      ))
                    : null,
                  r.createElement(o.Z, { style: v.contentTextContainer }, r.createElement(d.ZP, { nativeID: N }, P)),
                ),
                r.createElement(
                  o.Z,
                  { style: v.dismissButton },
                  r.createElement(h.ZP, {
                    accessibilityDescribedBy: N,
                    accessibilityLabel: F,
                    icon: r.createElement(l['default'], { testID: 'tooltip-close-icon' }),
                    onPress: A,
                    size: 'xSmall',
                    type: 'primaryText',
                  }),
                ),
              ),
            )),
          ),
        )
      }
    },
    2520: function _(e, t, n) {
      'use strict'
      n.d(t, {
        Z: function Z() {
          return p
        },
      })
      var a = n(196234),
        r = n(202784),
        o = n(473228),
        i = n.n(o),
        s = n(583786),
        l = i().b05a39b2,
        c = i().c566d3a6,
        u = function u(e) {
          return r.createElement(s.Z, e)
        },
        d = function d(e) {
          var t = e.children,
            n = e.hideLabel,
            o = void 0 === n ? c : n,
            i = e.label,
            s = e.lang,
            d = e.render,
            p = void 0 === d ? u : d,
            h = e.revealLabel,
            m = void 0 === h ? l : h,
            f = r.useState(!1),
            _ = (0, a.Z)(f, 2),
            v = _[0],
            g = _[1]
          return p({
            actionText: v ? o : m,
            children: v ? t : i,
            lang: s,
            onActionClick: function onActionClick() {
              return g(!v)
            },
          })
        }
      d.displayName = 'TweetDisclosure'
      var p = d
    },
    551908: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function _default() {
            return l
          },
        })
      var a = n(133028),
        r = n(202784),
        o = n(890601),
        i = n(473569),
        s = function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, o.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: r.createElement(
                  'g',
                  null,
                  r.createElement('path', {
                    d: 'M13 3v13.59l5.043-5.05 1.414 1.42L12 20.41l-7.457-7.45 1.414-1.42L11 16.59V3h2z',
                  }),
                ),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
    },
    133652: function _(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function _default() {
            return l
          },
        })
      var a = n(133028),
        r = n(202784),
        o = n(890601),
        i = n(473569),
        s = function s() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (0, o.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel ? e.accessibilityRole || 'img' : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [i.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: r.createElement('g', null, r.createElement('path', { d: 'M20 13H4v-2h16v2z' })),
              },
            ),
          )
        }
      s.metadata = { width: 24, height: 24 }
      var l = s
    },
    687412: function _(e, t, n) {
      var a = n(23103),
        r = n(682292),
        o = Math.abs
      a(
        { target: 'Number', stat: !0 },
        {
          isSafeInteger: function isSafeInteger(e) {
            return r(e) && o(e) <= 9007199254740991
          },
        },
      )
    },
    172023: function _(e, t, n) {
      n(23103)(
        { target: 'Number', stat: !0, nonConfigurable: !0, nonWritable: !0 },
        { MIN_SAFE_INTEGER: -9007199254740991 },
      )
    },
    839515: function _(e, t, n) {
      var a = n(638761)(n(137772), 'DataView')
      e.exports = a
    },
    989612: function _(e, t, n) {
      var a = n(752118),
        r = n(196909),
        o = n(198138),
        i = n(704174),
        s = n(507942)
      function l(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++t < n; ) {
          var a = e[t]
          this.set(a[0], a[1])
        }
      }
      ;(l.prototype.clear = a),
        (l.prototype['delete'] = r),
        (l.prototype.get = o),
        (l.prototype.has = i),
        (l.prototype.set = s),
        (e.exports = l)
    },
    180235: function _(e, t, n) {
      var a = n(103945),
        r = n(221846),
        o = n(988028),
        i = n(572344),
        s = n(594769)
      function l(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++t < n; ) {
          var a = e[t]
          this.set(a[0], a[1])
        }
      }
      ;(l.prototype.clear = a),
        (l.prototype['delete'] = r),
        (l.prototype.get = o),
        (l.prototype.has = i),
        (l.prototype.set = s),
        (e.exports = l)
    },
    510326: function _(e, t, n) {
      var a = n(638761)(n(137772), 'Map')
      e.exports = a
    },
    896738: function _(e, t, n) {
      var a = n(792411),
        r = n(436417),
        o = n(586928),
        i = n(479493),
        s = n(724150)
      function l(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++t < n; ) {
          var a = e[t]
          this.set(a[0], a[1])
        }
      }
      ;(l.prototype.clear = a),
        (l.prototype['delete'] = r),
        (l.prototype.get = o),
        (l.prototype.has = i),
        (l.prototype.set = s),
        (e.exports = l)
    },
    452760: function _(e, t, n) {
      var a = n(638761)(n(137772), 'Promise')
      e.exports = a
    },
    302143: function _(e, t, n) {
      var a = n(638761)(n(137772), 'Set')
      e.exports = a
    },
    645386: function _(e, t, n) {
      var a = n(896738),
        r = n(352842),
        o = n(52482)
      function i(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.__data__ = new a(); ++t < n; ) {
          this.add(e[t])
        }
      }
      ;(i.prototype.add = i.prototype.push = r), (i.prototype.has = o), (e.exports = i)
    },
    786571: function _(e, t, n) {
      var a = n(180235),
        r = n(415243),
        o = n(772858),
        i = n(4417),
        s = n(608605),
        l = n(971418)
      function c(e) {
        var t = (this.__data__ = new a(e))
        this.size = t.size
      }
      ;(c.prototype.clear = r),
        (c.prototype['delete'] = o),
        (c.prototype.get = i),
        (c.prototype.has = s),
        (c.prototype.set = l),
        (e.exports = c)
    },
    750857: function _(e, t, n) {
      var a = n(137772).Symbol
      e.exports = a
    },
    879162: function _(e, t, n) {
      var a = n(137772).Uint8Array
      e.exports = a
    },
    493215: function _(e, t, n) {
      var a = n(638761)(n(137772), 'WeakMap')
      e.exports = a
    },
    867552: function _(e) {
      e.exports = function (e, t) {
        for (var n = -1, a = null == e ? 0 : e.length, r = 0, o = []; ++n < a; ) {
          var i = e[n]
          t(i, n, e) && (o[r++] = i)
        }
        return o
      }
    },
    238333: function _(e, t, n) {
      var a = n(977832)
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && a(e, t, 0) > -1
      }
    },
    834893: function _(e) {
      e.exports = function (e, t, n) {
        for (var a = -1, r = null == e ? 0 : e.length; ++a < r; ) {
          if (n(t, e[a])) return !0
        }
        return !1
      }
    },
    501634: function _(e, t, n) {
      var a = n(936473),
        r = n(379631),
        o = n(986152),
        i = n(273226),
        s = n(239045),
        l = n(777598),
        c = Object.prototype.hasOwnProperty
      e.exports = function (e, t) {
        var n = o(e),
          u = !n && r(e),
          d = !n && !u && i(e),
          p = !n && !u && !d && l(e),
          h = n || u || d || p,
          m = h ? a(e.length, String) : [],
          f = m.length
        for (var _ in e) {
          ;(!t && !c.call(e, _)) ||
            (h &&
              ('length' == _ ||
                (d && ('offset' == _ || 'parent' == _)) ||
                (p && ('buffer' == _ || 'byteLength' == _ || 'byteOffset' == _)) ||
                s(_, f))) ||
            m.push(_)
        }
        return m
      }
    },
    150343: function _(e) {
      e.exports = function (e, t) {
        for (var n = -1, a = null == e ? 0 : e.length, r = Array(a); ++n < a; ) {
          r[n] = t(e[n], n, e)
        }
        return r
      }
    },
    265067: function _(e) {
      e.exports = function (e, t) {
        for (var n = -1, a = t.length, r = e.length; ++n < a; ) {
          e[r + n] = t[n]
        }
        return e
      }
    },
    387064: function _(e) {
      e.exports = function (e, t) {
        for (var n = -1, a = null == e ? 0 : e.length; ++n < a; ) {
          if (t(e[n], n, e)) return !0
        }
        return !1
      }
    },
    722218: function _(e, t, n) {
      var a = n(641225)
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) {
          if (a(e[n][0], t)) return n
        }
        return -1
      }
    },
    521359: function _(e) {
      e.exports = function (e, t, n, a) {
        for (var r = e.length, o = n + (a ? 1 : -1); a ? o-- : ++o < r; ) {
          if (t(e[o], o, e)) return o
        }
        return -1
      }
    },
    513324: function _(e, t, n) {
      var a = n(217297),
        r = n(33812)
      e.exports = function (e, t) {
        for (var n = 0, o = (t = a(t, e)).length; null != e && n < o; ) {
          e = e[r(t[n++])]
        }
        return n && n == o ? e : void 0
      }
    },
    401897: function _(e, t, n) {
      var a = n(265067),
        r = n(986152)
      e.exports = function (e, t, n) {
        var o = t(e)
        return r(e) ? o : a(o, n(e))
      }
    },
    853366: function _(e, t, n) {
      var a = n(750857),
        r = n(662107),
        o = n(237157),
        i = a ? a.toStringTag : void 0
      e.exports = function (e) {
        return null == e ? (void 0 === e ? '[object Undefined]' : '[object Null]') : i && i in Object(e) ? r(e) : o(e)
      }
    },
    920187: function _(e) {
      e.exports = function (e, t) {
        return null != e && t in Object(e)
      }
    },
    977832: function _(e, t, n) {
      var a = n(521359),
        r = n(322195),
        o = n(766024)
      e.exports = function (e, t, n) {
        return t == t ? o(e, t, n) : a(e, r, n)
      }
    },
    115183: function _(e, t, n) {
      var a = n(853366),
        r = n(315125)
      e.exports = function (e) {
        return r(e) && '[object Arguments]' == a(e)
      }
    },
    188746: function _(e, t, n) {
      var a = n(151952),
        r = n(315125)
      e.exports = function e(t, n, o, i, s) {
        return t === n || (null == t || null == n || (!r(t) && !r(n)) ? t != t && n != n : a(t, n, o, i, e, s))
      }
    },
    151952: function _(e, t, n) {
      var a = n(786571),
        r = n(374871),
        o = n(811491),
        i = n(617416),
        s = n(970940),
        l = n(986152),
        c = n(273226),
        u = n(777598),
        d = '[object Arguments]',
        p = '[object Array]',
        h = '[object Object]',
        m = Object.prototype.hasOwnProperty
      e.exports = function (e, t, n, f, _, v) {
        var g = l(e),
          b = l(t),
          k = g ? p : s(e),
          y = b ? p : s(t),
          Z = (k = k == d ? h : k) == h,
          w = (y = y == d ? h : y) == h,
          x = k == y
        if (x && c(e)) {
          if (!c(t)) return !1
          ;(g = !0), (Z = !1)
        }
        if (x && !Z) return v || (v = new a()), g || u(e) ? r(e, t, n, f, _, v) : o(e, t, k, n, f, _, v)
        if (!(1 & n)) {
          var C = Z && m.call(e, '__wrapped__'),
            I = w && m.call(t, '__wrapped__')
          if (C || I) {
            var E = C ? e.value() : e,
              S = I ? t.value() : t
            return v || (v = new a()), _(E, S, n, f, v)
          }
        }
        return !!x && (v || (v = new a()), i(e, t, n, f, _, v))
      }
    },
    337036: function _(e, t, n) {
      var a = n(786571),
        r = n(188746)
      e.exports = function (e, t, n, o) {
        var i = n.length,
          s = i,
          l = !o
        if (null == e) return !s
        for (e = Object(e); i--; ) {
          var c = n[i]
          if (l && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
        }
        for (; ++i < s; ) {
          var u = (c = n[i])[0],
            d = e[u],
            p = c[1]
          if (l && c[2]) {
            if (void 0 === d && !(u in e)) return !1
          } else {
            var h = new a()
            if (o) var m = o(d, p, u, e, t, h)
            if (!(void 0 === m ? r(p, d, 3, o, h) : m)) return !1
          }
        }
        return !0
      }
    },
    322195: function _(e) {
      e.exports = function (e) {
        return e != e
      }
    },
    906840: function _(e, t, n) {
      var a = n(161049),
        r = n(247394),
        o = n(429259),
        i = n(187035),
        s = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        c = Object.prototype,
        u = l.toString,
        d = c.hasOwnProperty,
        p = RegExp(
          '^' +
            u
              .call(d)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        )
      e.exports = function (e) {
        return !(!o(e) || r(e)) && (a(e) ? p : s).test(i(e))
      }
    },
    435522: function _(e, t, n) {
      var a = n(853366),
        r = n(761158),
        o = n(315125),
        i = {}
      ;(i['[object Float32Array]'] =
        i['[object Float64Array]'] =
        i['[object Int8Array]'] =
        i['[object Int16Array]'] =
        i['[object Int32Array]'] =
        i['[object Uint8Array]'] =
        i['[object Uint8ClampedArray]'] =
        i['[object Uint16Array]'] =
        i['[object Uint32Array]'] =
          !0),
        (i['[object Arguments]'] =
          i['[object Array]'] =
          i['[object ArrayBuffer]'] =
          i['[object Boolean]'] =
          i['[object DataView]'] =
          i['[object Date]'] =
          i['[object Error]'] =
          i['[object Function]'] =
          i['[object Map]'] =
          i['[object Number]'] =
          i['[object Object]'] =
          i['[object RegExp]'] =
          i['[object Set]'] =
          i['[object String]'] =
          i['[object WeakMap]'] =
            !1),
        (e.exports = function (e) {
          return o(e) && r(e.length) && !!i[a(e)]
        })
    },
    668286: function _(e, t, n) {
      var a = n(626423),
        r = n(674716),
        o = n(223059),
        i = n(986152),
        s = n(365798)
      e.exports = function (e) {
        return 'function' == typeof e
          ? e
          : null == e
          ? o
          : 'object' == _typeof(e)
          ? i(e)
            ? r(e[0], e[1])
            : a(e)
          : s(e)
      }
    },
    286411: function _(e, t, n) {
      var a = n(616001),
        r = n(254248),
        o = Object.prototype.hasOwnProperty
      e.exports = function (e) {
        if (!a(e)) return r(e)
        var t = []
        for (var n in Object(e)) {
          o.call(e, n) && 'constructor' != n && t.push(n)
        }
        return t
      }
    },
    626423: function _(e, t, n) {
      var a = n(337036),
        r = n(349882),
        o = n(973477)
      e.exports = function (e) {
        var t = r(e)
        return 1 == t.length && t[0][2]
          ? o(t[0][0], t[0][1])
          : function (n) {
              return n === e || a(n, e, t)
            }
      }
    },
    674716: function _(e, t, n) {
      var a = n(188746),
        r = n(72579),
        o = n(595041),
        i = n(921401),
        s = n(328792),
        l = n(973477),
        c = n(33812)
      e.exports = function (e, t) {
        return i(e) && s(t)
          ? l(c(e), t)
          : function (n) {
              var i = r(n, e)
              return void 0 === i && i === t ? o(n, e) : a(t, i, 3)
            }
      }
    },
    220256: function _(e) {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e]
        }
      }
    },
    882952: function _(e, t, n) {
      var a = n(513324)
      e.exports = function (e) {
        return function (t) {
          return a(t, e)
        }
      }
    },
    936473: function _(e) {
      e.exports = function (e, t) {
        for (var n = -1, a = Array(e); ++n < e; ) {
          a[n] = t(n)
        }
        return a
      }
    },
    601054: function _(e, t, n) {
      var a = n(750857),
        r = n(150343),
        o = n(986152),
        i = n(4795),
        s = a ? a.prototype : void 0,
        l = s ? s.toString : void 0
      e.exports = function e(t) {
        if ('string' == typeof t) return t
        if (o(t)) return r(t, e) + ''
        if (i(t)) return l ? l.call(t) : ''
        var n = t + ''
        return '0' == n && 1 / t == -Infinity ? '-0' : n
      }
    },
    947826: function _(e) {
      e.exports = function (e) {
        return function (t) {
          return e(t)
        }
      }
    },
    167326: function _(e, t, n) {
      var a = n(645386),
        r = n(238333),
        o = n(834893),
        i = n(759950),
        s = n(178803),
        l = n(16909)
      e.exports = function (e, t, n) {
        var c = -1,
          u = r,
          d = e.length,
          p = !0,
          h = [],
          m = h
        if (n) (p = !1), (u = o)
        else if (d >= 200) {
          var f = t ? null : s(e)
          if (f) return l(f)
          ;(p = !1), (u = i), (m = new a())
        } else m = t ? [] : h
        e: for (; ++c < d; ) {
          var _ = e[c],
            v = t ? t(_) : _
          if (((_ = n || 0 !== _ ? _ : 0), p && v == v)) {
            for (var g = m.length; g--; ) {
              if (m[g] === v) continue e
            }
            t && m.push(v), h.push(_)
          } else u(m, v, n) || (m !== h && m.push(v), h.push(_))
        }
        return h
      }
    },
    759950: function _(e) {
      e.exports = function (e, t) {
        return e.has(t)
      }
    },
    217297: function _(e, t, n) {
      var a = n(986152),
        r = n(921401),
        o = n(654452),
        i = n(466188)
      e.exports = function (e, t) {
        return a(e) ? e : r(e, t) ? [e] : o(i(e))
      }
    },
    724019: function _(e, t, n) {
      var a = n(137772)['__core-js_shared__']
      e.exports = a
    },
    178803: function _(e, t, n) {
      var a = n(302143),
        r = n(334291),
        o = n(16909),
        i =
          a && 1 / o(new a([, -0]))[1] == 1 / 0
            ? function (e) {
                return new a(e)
              }
            : r
      e.exports = i
    },
    374871: function _(e, t, n) {
      var a = n(645386),
        r = n(387064),
        o = n(759950)
      e.exports = function (e, t, n, i, s, l) {
        var c = 1 & n,
          u = e.length,
          d = t.length
        if (u != d && !(c && d > u)) return !1
        var p = l.get(e),
          h = l.get(t)
        if (p && h) return p == t && h == e
        var m = -1,
          f = !0,
          _ = 2 & n ? new a() : void 0
        for (l.set(e, t), l.set(t, e); ++m < u; ) {
          var v = e[m],
            g = t[m]
          if (i) var b = c ? i(g, v, m, t, e, l) : i(v, g, m, e, t, l)
          if (void 0 !== b) {
            if (b) continue
            f = !1
            break
          }
          if (_) {
            if (
              !r(t, function (e, t) {
                if (!o(_, t) && (v === e || s(v, e, n, i, l))) return _.push(t)
              })
            ) {
              f = !1
              break
            }
          } else if (v !== g && !s(v, g, n, i, l)) {
            f = !1
            break
          }
        }
        return l['delete'](e), l['delete'](t), f
      }
    },
    811491: function _(e, t, n) {
      var a = n(750857),
        r = n(879162),
        o = n(641225),
        i = n(374871),
        s = n(875179),
        l = n(16909),
        c = a ? a.prototype : void 0,
        u = c ? c.valueOf : void 0
      e.exports = function (e, t, n, a, c, d, p) {
        switch (n) {
          case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1
            ;(e = e.buffer), (t = t.buffer)
          case '[object ArrayBuffer]':
            return !(e.byteLength != t.byteLength || !d(new r(e), new r(t)))
          case '[object Boolean]':
          case '[object Date]':
          case '[object Number]':
            return o(+e, +t)
          case '[object Error]':
            return e.name == t.name && e.message == t.message
          case '[object RegExp]':
          case '[object String]':
            return e == t + ''
          case '[object Map]':
            var h = s
          case '[object Set]':
            var m = 1 & a
            if ((h || (h = l), e.size != t.size && !m)) return !1
            var f = p.get(e)
            if (f) return f == t
            ;(a |= 2), p.set(e, t)
            var _ = i(h(e), h(t), a, c, d, p)
            return p['delete'](e), _
          case '[object Symbol]':
            if (u) return u.call(e) == u.call(t)
        }
        return !1
      }
    },
    617416: function _(e, t, n) {
      var a = n(913483),
        r = Object.prototype.hasOwnProperty
      e.exports = function (e, t, n, o, i, s) {
        var l = 1 & n,
          c = a(e),
          u = c.length
        if (u != a(t).length && !l) return !1
        for (var d = u; d--; ) {
          var p = c[d]
          if (!(l ? p in t : r.call(t, p))) return !1
        }
        var h = s.get(e),
          m = s.get(t)
        if (h && m) return h == t && m == e
        var f = !0
        s.set(e, t), s.set(t, e)
        for (var _ = l; ++d < u; ) {
          var v = e[(p = c[d])],
            g = t[p]
          if (o) var b = l ? o(g, v, p, t, e, s) : o(v, g, p, e, t, s)
          if (!(void 0 === b ? v === g || i(v, g, n, o, s) : b)) {
            f = !1
            break
          }
          _ || (_ = 'constructor' == p)
        }
        if (f && !_) {
          var k = e.constructor,
            y = t.constructor
          k == y ||
            !('constructor' in e) ||
            !('constructor' in t) ||
            ('function' == typeof k && k instanceof k && 'function' == typeof y && y instanceof y) ||
            (f = !1)
        }
        return s['delete'](e), s['delete'](t), f
      }
    },
    51242: function _(e, t, n) {
      var a = 'object' == _typeof(n.g) && n.g && n.g.Object === Object && n.g
      e.exports = a
    },
    913483: function _(e, t, n) {
      var a = n(401897),
        r = n(480633),
        o = n(690249)
      e.exports = function (e) {
        return a(e, o, r)
      }
    },
    527937: function _(e, t, n) {
      var a = n(198304)
      e.exports = function (e, t) {
        var n = e.__data__
        return a(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map
      }
    },
    349882: function _(e, t, n) {
      var a = n(328792),
        r = n(690249)
      e.exports = function (e) {
        for (var t = r(e), n = t.length; n--; ) {
          var o = t[n],
            i = e[o]
          t[n] = [o, i, a(i)]
        }
        return t
      }
    },
    638761: function _(e, t, n) {
      var a = n(906840),
        r = n(98109)
      e.exports = function (e, t) {
        var n = r(e, t)
        return a(n) ? n : void 0
      }
    },
    662107: function _(e, t, n) {
      var a = n(750857),
        r = Object.prototype,
        o = r.hasOwnProperty,
        i = r.toString,
        s = a ? a.toStringTag : void 0
      e.exports = function (e) {
        var t = o.call(e, s),
          n = e[s]
        try {
          e[s] = void 0
          var a = !0
        } catch (l) {}
        var r = i.call(e)
        return a && (t ? (e[s] = n) : delete e[s]), r
      }
    },
    480633: function _(e, t, n) {
      var a = n(867552),
        r = n(30981),
        o = Object.prototype.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        s = i
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  a(i(e), function (t) {
                    return o.call(e, t)
                  }))
            }
          : r
      e.exports = s
    },
    970940: function _(e, t, n) {
      var a = n(839515),
        r = n(510326),
        o = n(452760),
        i = n(302143),
        s = n(493215),
        l = n(853366),
        c = n(187035),
        u = '[object Map]',
        d = '[object Promise]',
        p = '[object Set]',
        h = '[object WeakMap]',
        m = '[object DataView]',
        f = c(a),
        _ = c(r),
        v = c(o),
        g = c(i),
        b = c(s),
        k = l
      ;((a && k(new a(new ArrayBuffer(1))) != m) ||
        (r && k(new r()) != u) ||
        (o && k(o.resolve()) != d) ||
        (i && k(new i()) != p) ||
        (s && k(new s()) != h)) &&
        (k = function k(e) {
          var t = l(e),
            n = '[object Object]' == t ? e.constructor : void 0,
            a = n ? c(n) : ''
          if (a)
            switch (a) {
              case f:
                return m
              case _:
                return u
              case v:
                return d
              case g:
                return p
              case b:
                return h
            }
          return t
        }),
        (e.exports = k)
    },
    98109: function _(e) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t]
      }
    },
    601369: function _(e, t, n) {
      var a = n(217297),
        r = n(379631),
        o = n(986152),
        i = n(239045),
        s = n(761158),
        l = n(33812)
      e.exports = function (e, t, n) {
        for (var c = -1, u = (t = a(t, e)).length, d = !1; ++c < u; ) {
          var p = l(t[c])
          if (!(d = null != e && n(e, p))) break
          e = e[p]
        }
        return d || ++c != u ? d : !!(u = null == e ? 0 : e.length) && s(u) && i(p, u) && (o(e) || r(e))
      }
    },
    752118: function _(e, t, n) {
      var a = n(399191)
      e.exports = function () {
        ;(this.__data__ = a ? a(null) : {}), (this.size = 0)
      }
    },
    196909: function _(e) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e]
        return (this.size -= t ? 1 : 0), t
      }
    },
    198138: function _(e, t, n) {
      var a = n(399191),
        r = Object.prototype.hasOwnProperty
      e.exports = function (e) {
        var t = this.__data__
        if (a) {
          var n = t[e]
          return '__lodash_hash_undefined__' === n ? void 0 : n
        }
        return r.call(t, e) ? t[e] : void 0
      }
    },
    704174: function _(e, t, n) {
      var a = n(399191),
        r = Object.prototype.hasOwnProperty
      e.exports = function (e) {
        var t = this.__data__
        return a ? void 0 !== t[e] : r.call(t, e)
      }
    },
    507942: function _(e, t, n) {
      var a = n(399191)
      e.exports = function (e, t) {
        var n = this.__data__
        return (this.size += this.has(e) ? 0 : 1), (n[e] = a && void 0 === t ? '__lodash_hash_undefined__' : t), this
      }
    },
    239045: function _(e) {
      var t = /^(?:0|[1-9]\d*)$/
      e.exports = function (e, n) {
        var a = _typeof(e)
        return (
          !!(n = null == n ? 9007199254740991 : n) &&
          ('number' == a || ('symbol' != a && t.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < n
        )
      }
    },
    921401: function _(e, t, n) {
      var a = n(986152),
        r = n(4795),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/
      e.exports = function (e, t) {
        if (a(e)) return !1
        var n = _typeof(e)
        return (
          !('number' != n && 'symbol' != n && 'boolean' != n && null != e && !r(e)) ||
          i.test(e) ||
          !o.test(e) ||
          (null != t && e in Object(t))
        )
      }
    },
    198304: function _(e) {
      e.exports = function (e) {
        var t = _typeof(e)
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t ? '__proto__' !== e : null === e
      }
    },
    247394: function _(e, t, n) {
      var a,
        r = n(724019),
        o = (a = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + a : ''
      e.exports = function (e) {
        return !!o && o in e
      }
    },
    616001: function _(e) {
      var t = Object.prototype
      e.exports = function (e) {
        var n = e && e.constructor
        return e === (('function' == typeof n && n.prototype) || t)
      }
    },
    328792: function _(e, t, n) {
      var a = n(429259)
      e.exports = function (e) {
        return e == e && !a(e)
      }
    },
    103945: function _(e) {
      e.exports = function () {
        ;(this.__data__ = []), (this.size = 0)
      }
    },
    221846: function _(e, t, n) {
      var a = n(722218),
        r = Array.prototype.splice
      e.exports = function (e) {
        var t = this.__data__,
          n = a(t, e)
        return !(n < 0) && (n == t.length - 1 ? t.pop() : r.call(t, n, 1), --this.size, !0)
      }
    },
    988028: function _(e, t, n) {
      var a = n(722218)
      e.exports = function (e) {
        var t = this.__data__,
          n = a(t, e)
        return n < 0 ? void 0 : t[n][1]
      }
    },
    572344: function _(e, t, n) {
      var a = n(722218)
      e.exports = function (e) {
        return a(this.__data__, e) > -1
      }
    },
    594769: function _(e, t, n) {
      var a = n(722218)
      e.exports = function (e, t) {
        var n = this.__data__,
          r = a(n, e)
        return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
      }
    },
    792411: function _(e, t, n) {
      var a = n(989612),
        r = n(180235),
        o = n(510326)
      e.exports = function () {
        ;(this.size = 0), (this.__data__ = { hash: new a(), map: new (o || r)(), string: new a() })
      }
    },
    436417: function _(e, t, n) {
      var a = n(527937)
      e.exports = function (e) {
        var t = a(this, e)['delete'](e)
        return (this.size -= t ? 1 : 0), t
      }
    },
    586928: function _(e, t, n) {
      var a = n(527937)
      e.exports = function (e) {
        return a(this, e).get(e)
      }
    },
    479493: function _(e, t, n) {
      var a = n(527937)
      e.exports = function (e) {
        return a(this, e).has(e)
      }
    },
    724150: function _(e, t, n) {
      var a = n(527937)
      e.exports = function (e, t) {
        var n = a(this, e),
          r = n.size
        return n.set(e, t), (this.size += n.size == r ? 0 : 1), this
      }
    },
    875179: function _(e) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size)
        return (
          e.forEach(function (e, a) {
            n[++t] = [a, e]
          }),
          n
        )
      }
    },
    973477: function _(e) {
      e.exports = function (e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n))
        }
      }
    },
    777777: function _(e, t, n) {
      var a = n(830733)
      e.exports = function (e) {
        var t = a(e, function (e) {
            return 500 === n.size && n.clear(), e
          }),
          n = t.cache
        return t
      }
    },
    399191: function _(e, t, n) {
      var a = n(638761)(Object, 'create')
      e.exports = a
    },
    254248: function _(e, t, n) {
      var a = n(860241)(Object.keys, Object)
      e.exports = a
    },
    704146: function _(e, t, n) {
      e = n.nmd(e)
      var a = n(51242),
        r = t && !t.nodeType && t,
        o = r && e && !e.nodeType && e,
        i = o && o.exports === r && a.process,
        s = (function () {
          try {
            var e = o && o.require && o.require('util').types
            return e || (i && i.binding && i.binding('util'))
          } catch (t) {}
        })()
      e.exports = s
    },
    237157: function _(e) {
      var t = Object.prototype.toString
      e.exports = function (e) {
        return t.call(e)
      }
    },
    860241: function _(e) {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n))
        }
      }
    },
    137772: function _(e, t, n) {
      var a = n(51242),
        r =
          'object' == (typeof self === 'undefined' ? 'undefined' : _typeof(self)) &&
          self &&
          self.Object === Object &&
          self,
        o = a || r || Function('return this')()
      e.exports = o
    },
    352842: function _(e) {
      e.exports = function (e) {
        return this.__data__.set(e, '__lodash_hash_undefined__'), this
      }
    },
    52482: function _(e) {
      e.exports = function (e) {
        return this.__data__.has(e)
      }
    },
    16909: function _(e) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size)
        return (
          e.forEach(function (e) {
            n[++t] = e
          }),
          n
        )
      }
    },
    415243: function _(e, t, n) {
      var a = n(180235)
      e.exports = function () {
        ;(this.__data__ = new a()), (this.size = 0)
      }
    },
    772858: function _(e) {
      e.exports = function (e) {
        var t = this.__data__,
          n = t['delete'](e)
        return (this.size = t.size), n
      }
    },
    4417: function _(e) {
      e.exports = function (e) {
        return this.__data__.get(e)
      }
    },
    608605: function _(e) {
      e.exports = function (e) {
        return this.__data__.has(e)
      }
    },
    971418: function _(e, t, n) {
      var a = n(180235),
        r = n(510326),
        o = n(896738)
      e.exports = function (e, t) {
        var n = this.__data__
        if (n instanceof a) {
          var i = n.__data__
          if (!r || i.length < 199) return i.push([e, t]), (this.size = ++n.size), this
          n = this.__data__ = new o(i)
        }
        return n.set(e, t), (this.size = n.size), this
      }
    },
    766024: function _(e) {
      e.exports = function (e, t, n) {
        for (var a = n - 1, r = e.length; ++a < r; ) {
          if (e[a] === t) return a
        }
        return -1
      }
    },
    654452: function _(e, t, n) {
      var a = n(777777),
        r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        i = a(function (e) {
          var t = []
          return (
            46 === e.charCodeAt(0) && t.push(''),
            e.replace(r, function (e, n, a, r) {
              t.push(a ? r.replace(o, '$1') : n || e)
            }),
            t
          )
        })
      e.exports = i
    },
    33812: function _(e, t, n) {
      var a = n(4795)
      e.exports = function (e) {
        if ('string' == typeof e || a(e)) return e
        var t = e + ''
        return '0' == t && 1 / e == -Infinity ? '-0' : t
      }
    },
    187035: function _(e) {
      var t = Function.prototype.toString
      e.exports = function (e) {
        if (null != e) {
          try {
            return t.call(e)
          } catch (n) {}
          try {
            return e + ''
          } catch (n) {}
        }
        return ''
      }
    },
    641225: function _(e) {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t)
      }
    },
    72579: function _(e, t, n) {
      var a = n(513324)
      e.exports = function (e, t, n) {
        var r = null == e ? void 0 : a(e, t)
        return void 0 === r ? n : r
      }
    },
    595041: function _(e, t, n) {
      var a = n(920187),
        r = n(601369)
      e.exports = function (e, t) {
        return null != e && r(e, t, a)
      }
    },
    223059: function _(e) {
      e.exports = function (e) {
        return e
      }
    },
    379631: function _(e, t, n) {
      var a = n(115183),
        r = n(315125),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.propertyIsEnumerable,
        l = a(
          (function () {
            return arguments
          })(),
        )
          ? a
          : function (e) {
              return r(e) && i.call(e, 'callee') && !s.call(e, 'callee')
            }
      e.exports = l
    },
    986152: function _(e) {
      var t = Array.isArray
      e.exports = t
    },
    867878: function _(e, t, n) {
      var a = n(161049),
        r = n(761158)
      e.exports = function (e) {
        return null != e && r(e.length) && !a(e)
      }
    },
    273226: function _(e, t, n) {
      e = n.nmd(e)
      var a = n(137772),
        r = n(836330),
        o = t && !t.nodeType && t,
        i = o && e && !e.nodeType && e,
        s = i && i.exports === o ? a.Buffer : void 0,
        l = (s ? s.isBuffer : void 0) || r
      e.exports = l
    },
    161049: function _(e, t, n) {
      var a = n(853366),
        r = n(429259)
      e.exports = function (e) {
        if (!r(e)) return !1
        var t = a(e)
        return (
          '[object Function]' == t ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        )
      }
    },
    761158: function _(e) {
      e.exports = function (e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      }
    },
    429259: function _(e) {
      e.exports = function (e) {
        var t = _typeof(e)
        return null != e && ('object' == t || 'function' == t)
      }
    },
    315125: function _(e) {
      e.exports = function (e) {
        return null != e && 'object' == _typeof(e)
      }
    },
    4795: function _(e, t, n) {
      var a = n(853366),
        r = n(315125)
      e.exports = function (e) {
        return 'symbol' == _typeof(e) || (r(e) && '[object Symbol]' == a(e))
      }
    },
    777598: function _(e, t, n) {
      var a = n(435522),
        r = n(947826),
        o = n(704146),
        i = o && o.isTypedArray,
        s = i ? r(i) : a
      e.exports = s
    },
    690249: function _(e, t, n) {
      var a = n(501634),
        r = n(286411),
        o = n(867878)
      e.exports = function (e) {
        return o(e) ? a(e) : r(e)
      }
    },
    830733: function _(e, t, n) {
      var a = n(896738)
      function r(e, t) {
        if ('function' != typeof e || (null != t && 'function' != typeof t)) throw new TypeError('Expected a function')
        var n = function n() {
          var a = arguments,
            r = t ? t.apply(this, a) : a[0],
            o = n.cache
          if (o.has(r)) return o.get(r)
          var i = e.apply(this, a)
          return (n.cache = o.set(r, i) || o), i
        }
        return (n.cache = new (r.Cache || a)()), n
      }
      ;(r.Cache = a), (e.exports = r)
    },
    334291: function _(e) {
      e.exports = function () {}
    },
    365798: function _(e, t, n) {
      var a = n(220256),
        r = n(882952),
        o = n(921401),
        i = n(33812)
      e.exports = function (e) {
        return o(e) ? a(i(e)) : r(e)
      }
    },
    30981: function _(e) {
      e.exports = function () {
        return []
      }
    },
    836330: function _(e) {
      e.exports = function () {
        return !1
      }
    },
    466188: function _(e, t, n) {
      var a = n(601054)
      e.exports = function (e) {
        return null == e ? '' : a(e)
      }
    },
    984636: function _(e, t, n) {
      var a = n(668286),
        r = n(167326)
      e.exports = function (e, t) {
        return e && e.length ? r(e, a(t, 2)) : []
      }
    },
    359639: function _(e, t, n) {
      var a
      /*! https://mths.be/punycode v1.3.2 by @mathias */ ;(e = n.nmd(e)),
        (function (r) {
          t && t.nodeType, e && e.nodeType
          var o = 'object' == _typeof(n.g) && n.g
          o.global !== o && o.window !== o && o.self
          var i,
            s = 2147483647,
            l = 36,
            c = /^xn--/,
            u = /[^\x20-\x7E]/,
            d = /[\x2E\u3002\uFF0E\uFF61]/g,
            p = {
              overflow: 'Overflow: input needs wider integers to process',
              'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
              'invalid-input': 'Invalid input',
            },
            h = Math.floor,
            m = String.fromCharCode
          function f(e) {
            throw RangeError(p[e])
          }
          function _(e, t) {
            for (var n = e.length, a = []; n--; ) {
              a[n] = t(e[n])
            }
            return a
          }
          function v(e, t) {
            var n = e.split('@'),
              a = ''
            return (
              n.length > 1 && ((a = n[0] + '@'), (e = n[1])), a + _((e = e.replace(d, '.')).split('.'), t).join('.')
            )
          }
          function g(e) {
            for (var t, n, a = [], r = 0, o = e.length; r < o; ) {
              ;(t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < o
                ? 56320 == (64512 & (n = e.charCodeAt(r++)))
                  ? a.push(((1023 & t) << 10) + (1023 & n) + 65536)
                  : (a.push(t), r--)
                : a.push(t)
            }
            return a
          }
          function b(e) {
            return _(e, function (e) {
              var t = ''
              return (
                e > 65535 && ((t += m((((e -= 65536) >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += m(e))
              )
            }).join('')
          }
          function k(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
          }
          function y(e, t, n) {
            var a = 0
            for (e = n ? h(e / 700) : e >> 1, e += h(e / t); e > 455; a += l) {
              e = h(e / 35)
            }
            return h(a + (36 * e) / (e + 38))
          }
          function Z(e) {
            var t,
              n,
              a,
              r,
              o,
              i,
              c,
              u,
              d,
              p,
              m,
              _ = [],
              v = e.length,
              g = 0,
              k = 128,
              Z = 72
            for ((n = e.lastIndexOf('-')) < 0 && (n = 0), a = 0; a < n; ++a) {
              e.charCodeAt(a) >= 128 && f('not-basic'), _.push(e.charCodeAt(a))
            }
            for (r = n > 0 ? n + 1 : 0; r < v; ) {
              for (
                o = g, i = 1, c = l;
                r >= v && f('invalid-input'),
                  ((u = (m = e.charCodeAt(r++)) - 48 < 10 ? m - 22 : m - 65 < 26 ? m - 65 : m - 97 < 26 ? m - 97 : l) >=
                    l ||
                    u > h((s - g) / i)) &&
                    f('overflow'),
                  (g += u * i),
                  !(u < (d = c <= Z ? 1 : c >= Z + 26 ? 26 : c - Z));
                c += l
              ) {
                i > h(s / (p = l - d)) && f('overflow'), (i *= p)
              }
              ;(Z = y(g - o, (t = _.length + 1), 0 == o)),
                h(g / t) > s - k && f('overflow'),
                (k += h(g / t)),
                (g %= t),
                _.splice(g++, 0, k)
            }
            return b(_)
          }
          function w(e) {
            var t,
              n,
              a,
              r,
              o,
              i,
              c,
              u,
              d,
              p,
              _,
              v,
              b,
              Z,
              w,
              x = []
            for (v = (e = g(e)).length, t = 128, n = 0, o = 72, i = 0; i < v; ++i) {
              ;(_ = e[i]) < 128 && x.push(m(_))
            }
            for (a = r = x.length, r && x.push('-'); a < v; ) {
              for (c = s, i = 0; i < v; ++i) {
                ;(_ = e[i]) >= t && _ < c && (c = _)
              }
              for (c - t > h((s - n) / (b = a + 1)) && f('overflow'), n += (c - t) * b, t = c, i = 0; i < v; ++i) {
                if (((_ = e[i]) < t && ++n > s && f('overflow'), _ == t)) {
                  for (u = n, d = l; !(u < (p = d <= o ? 1 : d >= o + 26 ? 26 : d - o)); d += l) {
                    ;(w = u - p), (Z = l - p), x.push(m(k(p + (w % Z), 0))), (u = h(w / Z))
                  }
                  x.push(m(k(u, 0))), (o = y(n, b, a == r)), (n = 0), ++a
                }
              }
              ++n, ++t
            }
            return x.join('')
          }
          ;(i = {
            version: '1.3.2',
            ucs2: { decode: g, encode: b },
            decode: Z,
            encode: w,
            toASCII: function toASCII(e) {
              return v(e, function (e) {
                return u.test(e) ? 'xn--' + w(e) : e
              })
            },
            toUnicode: function toUnicode(e) {
              return v(e, function (e) {
                return c.test(e) ? Z(e.slice(4).toLowerCase()) : e
              })
            },
          }),
            void 0 ===
              (a = function () {
                return i
              }.call(t, n, t, e)) || (e.exports = a)
        })()
    },
    900883: function _(e, t, n) {
      'use strict'
      var a = n(359639),
        r = n(225225)
      function o() {
        ;(this.protocol = null),
          (this.slashes = null),
          (this.auth = null),
          (this.host = null),
          (this.port = null),
          (this.hostname = null),
          (this.hash = null),
          (this.search = null),
          (this.query = null),
          (this.pathname = null),
          (this.path = null),
          (this.href = null)
      }
      t.Qc = b
      var i = /^([a-z0-9.+-]+:)/i,
        s = /:[0-9]*$/,
        l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        c = ['{', '}', '|', '\\', '^', '`'].concat(['<', '>', '"', '`', ' ', '\r', '\n', '\t']),
        u = ["'"].concat(c),
        d = ['%', '/', '?', ';', '#'].concat(u),
        p = ['/', '?', '#'],
        h = /^[+a-z0-9A-Z_-]{0,63}$/,
        m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        f = { javascript: !0, 'javascript:': !0 },
        _ = { javascript: !0, 'javascript:': !0 },
        v = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          'http:': !0,
          'https:': !0,
          'ftp:': !0,
          'gopher:': !0,
          'file:': !0,
        },
        g = n(856642)
      function b(e, t, n) {
        if (e && r.isObject(e) && e instanceof o) return e
        var a = new o()
        return a.parse(e, t, n), a
      }
      ;(o.prototype.parse = function (e, t, n) {
        if (!r.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + _typeof(e))
        var o = e.indexOf('?'),
          s = -1 !== o && o < e.indexOf('#') ? '?' : '#',
          c = e.split(s)
        c[0] = c[0].replace(/\\/g, '/')
        var b = (e = c.join(s))
        if (((b = b.trim()), !n && 1 === e.split('#').length)) {
          var k = l.exec(b)
          if (k)
            return (
              (this.path = b),
              (this.href = b),
              (this.pathname = k[1]),
              k[2]
                ? ((this.search = k[2]), (this.query = t ? g.parse(this.search.substr(1)) : this.search.substr(1)))
                : t && ((this.search = ''), (this.query = {})),
              this
            )
        }
        var y = i.exec(b)
        if (y) {
          var Z = (y = y[0]).toLowerCase()
          ;(this.protocol = Z), (b = b.substr(y.length))
        }
        if (n || y || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var w = '//' === b.substr(0, 2)
          !w || (y && _[y]) || ((b = b.substr(2)), (this.slashes = !0))
        }
        if (!_[y] && (w || (y && !v[y]))) {
          for (var x, C, I = -1, E = 0; E < p.length; E++) {
            ;-1 !== (S = b.indexOf(p[E])) && (-1 === I || S < I) && (I = S)
          }
          ;-1 !== (C = -1 === I ? b.lastIndexOf('@') : b.lastIndexOf('@', I)) &&
            ((x = b.slice(0, C)), (b = b.slice(C + 1)), (this.auth = decodeURIComponent(x))),
            (I = -1)
          for (E = 0; E < d.length; E++) {
            var S
            ;-1 !== (S = b.indexOf(d[E])) && (-1 === I || S < I) && (I = S)
          }
          ;-1 === I && (I = b.length),
            (this.host = b.slice(0, I)),
            (b = b.slice(I)),
            this.parseHost(),
            (this.hostname = this.hostname || '')
          var T = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1]
          if (!T)
            for (var A = this.hostname.split(/\./), P = ((E = 0), A.length); E < P; E++) {
              var F = A[E]
              if (F && !F.match(h)) {
                for (var N = '', D = 0, B = F.length; D < B; D++) {
                  F.charCodeAt(D) > 127 ? (N += 'x') : (N += F[D])
                }
                if (!N.match(h)) {
                  var L = A.slice(0, E),
                    O = A.slice(E + 1),
                    V = F.match(m)
                  V && (L.push(V[1]), O.unshift(V[2])),
                    O.length && (b = '/' + O.join('.') + b),
                    (this.hostname = L.join('.'))
                  break
                }
              }
            }
          this.hostname.length > 255 ? (this.hostname = '') : (this.hostname = this.hostname.toLowerCase()),
            T || (this.hostname = a.toASCII(this.hostname))
          var R = this.port ? ':' + this.port : '',
            M = this.hostname || ''
          ;(this.host = M + R),
            (this.href += this.host),
            T && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), '/' !== b[0] && (b = '/' + b))
        }
        if (!f[Z])
          for (E = 0, P = u.length; E < P; E++) {
            var U = u[E]
            if (-1 !== b.indexOf(U)) {
              var z = encodeURIComponent(U)
              z === U && (z = escape(U)), (b = b.split(U).join(z))
            }
          }
        var j = b.indexOf('#')
        ;-1 !== j && ((this.hash = b.substr(j)), (b = b.slice(0, j)))
        var H = b.indexOf('?')
        if (
          (-1 !== H
            ? ((this.search = b.substr(H)),
              (this.query = b.substr(H + 1)),
              t && (this.query = g.parse(this.query)),
              (b = b.slice(0, H)))
            : t && ((this.search = ''), (this.query = {})),
          b && (this.pathname = b),
          v[Z] && this.hostname && !this.pathname && (this.pathname = '/'),
          this.pathname || this.search)
        ) {
          R = this.pathname || ''
          var G = this.search || ''
          this.path = R + G
        }
        return (this.href = this.format()), this
      }),
        (o.prototype.format = function () {
          var e = this.auth || ''
          e && ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ':')), (e += '@'))
          var t = this.protocol || '',
            n = this.pathname || '',
            a = this.hash || '',
            o = !1,
            i = ''
          this.host
            ? (o = e + this.host)
            : this.hostname &&
              ((o = e + (-1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']')),
              this.port && (o += ':' + this.port)),
            this.query && r.isObject(this.query) && Object.keys(this.query).length && (i = g.stringify(this.query))
          var s = this.search || (i && '?' + i) || ''
          return (
            t && ':' !== t.substr(-1) && (t += ':'),
            this.slashes || ((!t || v[t]) && !1 !== o)
              ? ((o = '//' + (o || '')), n && '/' !== n.charAt(0) && (n = '/' + n))
              : o || (o = ''),
            a && '#' !== a.charAt(0) && (a = '#' + a),
            s && '?' !== s.charAt(0) && (s = '?' + s),
            t +
              o +
              (n = n.replace(/[?#]/g, function (e) {
                return encodeURIComponent(e)
              })) +
              (s = s.replace('#', '%23')) +
              a
          )
        }),
        (o.prototype.resolve = function (e) {
          return this.resolveObject(b(e, !1, !0)).format()
        }),
        (o.prototype.resolveObject = function (e) {
          if (r.isString(e)) {
            var t = new o()
            t.parse(e, !1, !0), (e = t)
          }
          for (var n = new o(), a = Object.keys(this), i = 0; i < a.length; i++) {
            var s = a[i]
            n[s] = this[s]
          }
          if (((n.hash = e.hash), '' === e.href)) return (n.href = n.format()), n
          if (e.slashes && !e.protocol) {
            for (var l = Object.keys(e), c = 0; c < l.length; c++) {
              var u = l[c]
              'protocol' !== u && (n[u] = e[u])
            }
            return v[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = '/'), (n.href = n.format()), n
          }
          if (e.protocol && e.protocol !== n.protocol) {
            if (!v[e.protocol]) {
              for (var d = Object.keys(e), p = 0; p < d.length; p++) {
                var h = d[p]
                n[h] = e[h]
              }
              return (n.href = n.format()), n
            }
            if (((n.protocol = e.protocol), e.host || _[e.protocol])) n.pathname = e.pathname
            else {
              for (var m = (e.pathname || '').split('/'); m.length && !(e.host = m.shift()); ) {}
              e.host || (e.host = ''),
                e.hostname || (e.hostname = ''),
                '' !== m[0] && m.unshift(''),
                m.length < 2 && m.unshift(''),
                (n.pathname = m.join('/'))
            }
            if (
              ((n.search = e.search),
              (n.query = e.query),
              (n.host = e.host || ''),
              (n.auth = e.auth),
              (n.hostname = e.hostname || e.host),
              (n.port = e.port),
              n.pathname || n.search)
            ) {
              var f = n.pathname || '',
                g = n.search || ''
              n.path = f + g
            }
            return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n
          }
          var b = n.pathname && '/' === n.pathname.charAt(0),
            k = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
            y = k || b || (n.host && e.pathname),
            Z = y,
            w = (n.pathname && n.pathname.split('/')) || [],
            x = ((m = (e.pathname && e.pathname.split('/')) || []), n.protocol && !v[n.protocol])
          if (
            (x &&
              ((n.hostname = ''),
              (n.port = null),
              n.host && ('' === w[0] ? (w[0] = n.host) : w.unshift(n.host)),
              (n.host = ''),
              e.protocol &&
                ((e.hostname = null),
                (e.port = null),
                e.host && ('' === m[0] ? (m[0] = e.host) : m.unshift(e.host)),
                (e.host = null)),
              (y = y && ('' === m[0] || '' === w[0]))),
            k)
          )
            (n.host = e.host || '' === e.host ? e.host : n.host),
              (n.hostname = e.hostname || '' === e.hostname ? e.hostname : n.hostname),
              (n.search = e.search),
              (n.query = e.query),
              (w = m)
          else if (m.length) w || (w = []), w.pop(), (w = w.concat(m)), (n.search = e.search), (n.query = e.query)
          else if (!r.isNullOrUndefined(e.search)) {
            if (x)
              (n.hostname = n.host = w.shift()),
                (T = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@')) &&
                  ((n.auth = T.shift()), (n.host = n.hostname = T.shift()))
            return (
              (n.search = e.search),
              (n.query = e.query),
              (r.isNull(n.pathname) && r.isNull(n.search)) ||
                (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
              (n.href = n.format()),
              n
            )
          }
          if (!w.length)
            return (n.pathname = null), n.search ? (n.path = '/' + n.search) : (n.path = null), (n.href = n.format()), n
          for (
            var C = w.slice(-1)[0],
              I = ((n.host || e.host || w.length > 1) && ('.' === C || '..' === C)) || '' === C,
              E = 0,
              S = w.length;
            S >= 0;
            S--
          ) {
            '.' === (C = w[S]) ? w.splice(S, 1) : '..' === C ? (w.splice(S, 1), E++) : E && (w.splice(S, 1), E--)
          }
          if (!y && !Z)
            for (; E--; E) {
              w.unshift('..')
            }
          !y || '' === w[0] || (w[0] && '/' === w[0].charAt(0)) || w.unshift(''),
            I && '/' !== w.join('/').substr(-1) && w.push('')
          var T,
            A = '' === w[0] || (w[0] && '/' === w[0].charAt(0))
          x &&
            ((n.hostname = n.host = A ? '' : w.length ? w.shift() : ''),
            (T = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@')) &&
              ((n.auth = T.shift()), (n.host = n.hostname = T.shift())))
          return (
            (y = y || (n.host && w.length)) && !A && w.unshift(''),
            w.length ? (n.pathname = w.join('/')) : ((n.pathname = null), (n.path = null)),
            (r.isNull(n.pathname) && r.isNull(n.search)) ||
              (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
            (n.auth = e.auth || n.auth),
            (n.slashes = n.slashes || e.slashes),
            (n.href = n.format()),
            n
          )
        }),
        (o.prototype.parseHost = function () {
          var e = this.host,
            t = s.exec(e)
          t && (':' !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
            e && (this.hostname = e)
        })
    },
    225225: function _(e) {
      'use strict'
      e.exports = {
        isString: function isString(e) {
          return 'string' == typeof e
        },
        isObject: function isObject(e) {
          return 'object' == _typeof(e) && null !== e
        },
        isNull: function isNull(e) {
          return null === e
        },
        isNullOrUndefined: function isNullOrUndefined(e) {
          return null == e
        },
      }
    },
  },
])

//# sourceMappingURL=WIPED
