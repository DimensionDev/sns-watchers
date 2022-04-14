;(window.webpackJsonp = window.webpackJsonp || []).push([
  [185],
  {
    VeNJ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EmptyState', function () {
          return Ae
        }),
        n.d(t, 'TimelineRenderer', function () {
          return Oe
        })
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        d = n.n(l),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        v = n.n(h),
        m = n('yiKp'),
        f = n.n(m),
        _ =
          (n('lTEL'),
          n('m9LP'),
          n('7x/C'),
          n('87if'),
          n('kYxP'),
          n('hBpG'),
          n('jwue'),
          n('+oxZ'),
          n('vrRf'),
          n('LqLs'),
          n('KOtZ'),
          n('ejT/')),
        y = n('ERkP'),
        g = n.n(y),
        b = n('5UID'),
        C = n('6/RC'),
        E = (n('2G9S'), n('1YZw')),
        w = n('rxPX'),
        k = Object(w.a)()
          .propsFromActions(function () {
            return { addToast: E.b }
          })
          .withAnalytics(),
        I = n('KNCp'),
        T = n('lUZE'),
        S = (n('yH/f'), Object.freeze({ Icon: 'Icon', IconSmall: 'IconSmall', FullWidth: 'FullWidth' })),
        L = n('caTy'),
        R = n('rcen'),
        x = n('TnY3'),
        A = n('TIdA'),
        O = n('A91F'),
        M = n('feu+'),
        N = n('tI3i'),
        D = n.n(N),
        P = C.canUseDOM ? window.location.href : '',
        F = (function () {
          function e() {
            var e = this
            ;(this._eventCallbacks = {}),
              (this.addEventListener = function (t, n) {
                e._eventCallbacks[t] ? e._eventCallbacks[t].push(n) : (e._eventCallbacks[t] = [n])
              }),
              (this.removeEventListener = function (t, n) {
                var r = e._eventCallbacks[t].filter(function (e) {
                  return e.toString() !== n.toString()
                })
                e._eventCallbacks[t] = r
              })
          }
          var t = e.prototype
          return (
            (t._dispatchEvent = function (e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r]
              var i = this._eventCallbacks[e]
              null != i &&
                Array.isArray(i) &&
                i.map(function (e) {
                  e.apply(void 0, n)
                })
            }),
            (t.canOpenURL = function () {
              return Promise.resolve(!0)
            }),
            (t.getInitialURL = function () {
              return Promise.resolve(P)
            }),
            (t.openURL = function (e) {
              try {
                return U(e), this._dispatchEvent('onOpen', e), Promise.resolve()
              } catch (t) {
                return Promise.reject(t)
              }
            }),
            (t._validateURL = function (e) {
              D()('string' == typeof e, 'Invalid URL: should be a string. Was: ' + e),
                D()(e, 'Invalid URL: cannot be empty')
            }),
            e
          )
        })(),
        U = function (e) {
          if (C.canUseDOM) {
            var t = new URL(e, window.location).toString()
            window.open(t, '_blank', 'noopener')
          }
        },
        B = new F(),
        H = n('MWbm'),
        V = n('oQhu'),
        j = n('fs1G'),
        W = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(
                c()(e),
                '_getGraphicProps',
                Object(V.a)(function (e, t) {
                  var n = e
                      ? function (t) {
                          var n = t.style
                          return g.a.createElement(
                            H.a,
                            { style: n },
                            g.a.createElement(A.a, {
                              accessibilityLabel: '',
                              aspectMode: O.a.exact(e.width / e.height),
                              image: e,
                            }),
                          )
                        }
                      : T.a,
                    r = 'illustration'
                  return (
                    e && t !== S.IconSmall ? t === S.FullWidth && (r = 'illustrationFullWidth') : (r = 'icon'),
                    { graphic: n, graphicDisplayMode: r }
                  )
                }),
              ),
              v()(c()(e), '_scribeAction', function (t, n) {
                var r = e.props.analytics,
                  i = n || {},
                  a = i.action,
                  o = i.component,
                  s = i.element
                r.scribe({ action: a || t, component: o || 'cover', element: s })
              }),
              v()(c()(e), '_handleDismiss', function () {
                var t = e.props,
                  n = t.dismissInfo,
                  r = t.processCallback,
                  i = (n || {}).callbacks
                i &&
                  i.forEach(function (e) {
                    r(e)
                  }),
                  n && (e._scribeAction('dismiss'), e.props.onClose())
              }),
              v()(c()(e), '_handlePrimaryCtaClick', function () {
                e._handleCtaClick(e.props.primaryCta, 'primary_cta')
              }),
              v()(c()(e), '_handleSecondaryCtaClick', function () {
                e.props.secondaryCta && e._handleCtaClick(e.props.secondaryCta, 'secondary_cta')
              }),
              v()(c()(e), '_handleCtaClick', function (t, n) {
                var r = t.callbacks,
                  i = t.clientEventInfo,
                  a = t.ctaBehavior,
                  o = e.props,
                  s = o.addToast,
                  c = o.history,
                  l = o.processCallback
                if ((e.props.onClose(), e._scribeAction('click', f()({ element: n }, i)), a.dismiss)) {
                  var d = a.dismiss
                  d && d.feedbackMessage && s({ text: d.feedbackMessage.text })
                }
                if (a.navigate) {
                  var u = a.navigate,
                    p = u && Object(L.b)(u.url)
                  p && (p.external ? B.openURL(p.pathname) : c.push(p.pathname))
                }
                r &&
                  r.forEach(function (e) {
                    return l(e)
                  })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.onImpression && this.props.onImpression()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.details,
                    n = e.dismissInfo,
                    r = e.displayType,
                    i = e.image,
                    a = e.imageDisplayType,
                    o = e.primaryCta,
                    s = e.primaryText,
                    c = e.secondaryCta,
                    l = e.secondaryText,
                    d = e.type,
                    u = g.a.createElement(R.a, { entities: s.entities, text: s.text }),
                    p = l ? g.a.createElement(R.a, { entities: l.entities, text: l.text }) : null
                  if (d === I.a.Full) {
                    var h = t ? g.a.createElement(R.a, { entities: t.entities, text: t.text }) : null,
                      v = this._getGraphicProps(i, a),
                      m = v.graphic,
                      f = v.graphicDisplayMode
                    return g.a.createElement(M.a, {
                      actionLabel: o.text,
                      footer: h,
                      graphic: m,
                      graphicDisplayMode: f,
                      headline: u,
                      isFullHeightOnMobile: !n && 'CenterCover' !== r,
                      onAction: this._handlePrimaryCtaClick,
                      onClose: this._handleDismiss,
                      onTertiaryAction: this._handleSecondaryCtaClick,
                      subtext: p,
                      tertiaryActionLabel: c && c.text,
                      withCloseButton: !!n,
                    })
                  }
                  return g.a.createElement(M.a, {
                    actionLabel: o.text,
                    graphicDisplayMode: 'none',
                    headline: u,
                    onAction: this._handlePrimaryCtaClick,
                    onClose: j.a,
                    onSecondaryAction: this._handleSecondaryCtaClick,
                    secondaryActionLabel: c && c.text,
                    subtext: p,
                    withCloseButton: !1,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      v()(W, 'defaultProps', { imageDisplayType: S.Icon })
      var K = Object(x.a)(k(W)),
        z = n('Irs7'),
        G = { component: 'cover', action: 'impression' },
        q = function (e) {
          var t,
            n,
            r,
            i = e.activeCover,
            a = e.clearActiveCover,
            o = e.processCallback,
            s =
              ((t = i.clientEventInfo),
              (n = f()({}, G)),
              t &&
                (t.component && (n = f()(f()({}, n), {}, { component: t.component })),
                t.element && (n = f()(f()({}, n), {}, { element: t.element })),
                t.action && (n = f()(f()({}, n), {}, { action: t.action }))),
              n),
            c = Object(z.b)(),
            l = function () {
              var e = i.cover.impressionCallbacks
              e &&
                e.forEach(function (e) {
                  return o(e)
                }),
                c.scribe(f()({}, s))
            }
          return 'full' === i.type
            ? ((r = i.cover),
              g.a.createElement(K, {
                details: r.details || void 0,
                dismissInfo: r.dismissInfo,
                displayType: r.displayType,
                image: r.image,
                imageDisplayType: r.imageDisplayType || void 0,
                onClose: a,
                onImpression: l,
                primaryCta: r.primaryCoverCta,
                primaryText: r.primaryText,
                processCallback: o,
                secondaryCta: r.secondaryCoverCta,
                secondaryText: r.secondaryText,
                type: 'full',
              }))
            : 'half' === i.type
            ? (function (e) {
                var t = 'CenterCover' === e.displayType ? 'full' : 'half'
                return g.a.createElement(K, {
                  displayType: e.displayType,
                  image: e.coverImage ? e.coverImage.image : void 0,
                  imageDisplayType: e.coverImage ? e.coverImage.imageDisplayType : void 0,
                  onClose: a,
                  onImpression: l,
                  primaryCta: e.primaryCoverCta,
                  primaryText: e.primaryText,
                  processCallback: o,
                  secondaryCta: e.secondaryCoverCta,
                  secondaryText: e.secondaryText,
                  type: t,
                })
              })(i.cover)
            : null
        },
        Y = n('MDbM'),
        Z = (n('+KXO'), n('Qyxo')),
        J = (function () {
          function e() {
            i()(this, e), (this._lingerScribed = {}), (this._appearance = {})
          }
          return (
            o()(e, [
              {
                key: 'processPositioningUpdate',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                    r = X(e, t),
                    i = this._lingerTransition(r, n),
                    a = Q(e, t)
                  return { lingers: i, impressions: a }
                },
              },
              {
                key: 'flushLingerEvents',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now()
                  return this._detectScribeLingerEvents(this._appearance, {}, e)
                },
              },
              {
                key: '_lingerTransition',
                value: function (e, t) {
                  var n = this._appearance
                  return (
                    (this._appearance = e.reduce(function (e, r) {
                      return (e[r] = n[r] || { start: t, lingered: !1 }), e
                    }, {})),
                    {
                      allLingerIds: this._detectAllLingerEvents(n, t),
                      scribeLingerEvents: this._detectScribeLingerEvents(n, this._appearance, t),
                    }
                  )
                },
              },
              {
                key: '_detectAllLingerEvents',
                value: function (e, t) {
                  var n = this
                  return Object.keys(e).reduce(function (r, i) {
                    var a = e[i],
                      o = a.lingered,
                      s = a.start
                    return (
                      !o &&
                        t - s >= 500 &&
                        (r.push(i),
                        n._appearance[i] && (n._appearance[i] = f()(f()({}, n._appearance[i]), {}, { lingered: !0 }))),
                      r
                    )
                  }, [])
                },
              },
              {
                key: '_detectScribeLingerEvents',
                value: function (e, t, n) {
                  var r = this
                  return Object.keys(e).reduce(function (i, a) {
                    var o = e[a].start
                    return (
                      !t[a] &&
                        !r._lingerScribed[a] &&
                        n - o >= 500 &&
                        ((r._lingerScribed[a] = !0), i.push({ id: a, start: o, end: n })),
                      i
                    )
                  }, [])
                },
              },
            ]),
            e
          )
        })(),
        X = function (e, t) {
          return Object(Z.a)(e, function (e) {
            var n = e.id,
              r = e.rectangle
            return $(r, t) >= 0.5 * r.getHeight() ? n : void 0
          })
        },
        Q = function (e, t) {
          return Object(Z.a)(e, function (e) {
            var n = e.id,
              r = e.rectangle
            return $(r, t) >= 0.99 ? { id: n, relativeElementHeight: ee(r.getHeight(), t.getHeight()) } : void 0
          })
        },
        $ = function (e, t) {
          return Math.max(0, Math.min(e.getBottom(), t.getBottom()) - Math.max(e.getTop(), t.getTop()))
        },
        ee = function (e, t) {
          return Math.floor((e / t) * 1e5)
        },
        te = n('ddV6'),
        ne = n.n(te),
        re = (n('hCOa'), n('LW0h'), n('z84I'), n('ZVkB'), { threshold: [0.01, 0.5] }),
        ie = (function () {
          function e(t) {
            var n = this
            i()(this, e),
              v()(this, '_itemsUnderObservation', {}),
              v()(this, '_lingerCandidates', new Map()),
              v()(this, '_reactivityCandidates', new Map()),
              v()(this, '_lingerEvents', new Map()),
              v()(this, '_impressionEvents', new Map()),
              v()(this, 'getLingerEvents', function () {
                ;(arguments.length > 0 && void 0 !== arguments[0]) || Date.now()
                var e = Array.from(n._lingerEvents.keys())
                return e
                  .map(function (e) {
                    return n._getLingerEventForId(e)
                  })
                  .filter(Boolean)
              }),
              v()(this, '_getLingerEventForId', function (e) {
                var t = n._lingerEvents.get(e)
                if (t && !t.scribed)
                  return (
                    n._lingerEvents.set(e, f()(f()({}, t), {}, { scribed: !0 })), { id: e, start: t.start, end: t.end }
                  )
              }),
              v()(this, '_getOngoingLingerEvents', function (e) {
                var t = []
                return (
                  n._lingerCandidates.forEach(function (n, r) {
                    e - n >= 500 && t.push({ id: r, start: n, end: e })
                  }),
                  t
                )
              }),
              v()(this, '_processIntersectionEntries', function (e) {
                var t = Date.now()
                e.forEach(function (e) {
                  var r = Object.entries(n._itemsUnderObservation).find(function (t) {
                    var n = ne()(t, 2)
                    n[0]
                    return n[1] === e.target
                  })
                  if (r) {
                    var i = r[0],
                      a = e.boundingClientRect,
                      o = e.intersectionRatio,
                      s = e.rootBounds
                    if (o >= 0.01) {
                      var c = null != a && null != s
                      n._createImpressionCandidate(i, c ? ee(a.height, s.height) : void 0)
                    }
                    o >= 0.5
                      ? (n._createLingerCandidate(i, t), n._createReactivityCandidate(i, t))
                      : (n._transitionCandidateToLingerEvent(i, t), n._removeReactivityCandidate(i))
                  }
                })
              }),
              v()(this, '_createImpressionCandidate', function (e, t) {
                n._impressionEvents.set(e, { relativeElementHeight: t })
              }),
              v()(this, '_createLingerCandidate', function (e, t) {
                n._lingerCandidates.has(e) || n._lingerCandidates.set(e, t)
              }),
              v()(this, '_transitionCandidateToLingerEvent', function (e, t) {
                var r = n._lingerCandidates.get(e)
                void 0 === r ||
                  n._lingerEvents.has(e) ||
                  (t - r >= 500 && n._lingerEvents.set(e, { start: r, end: t, scribed: !1 })),
                  n._lingerCandidates.delete(e)
              }),
              v()(this, '_createReactivityCandidate', function (e, t) {
                if (!n._reactivityCandidates.has(e)) {
                  var r = window.setTimeout(function () {
                    n._reactivityCallback(e), n._reactivityCandidates.delete(e)
                  }, 500)
                  n._reactivityCandidates.set(e, r)
                }
              }),
              v()(this, '_removeReactivityCandidate', function (e) {
                window.clearTimeout(n._reactivityCandidates.get(e)), n._reactivityCandidates.delete(e)
              }),
              null != t && t.root && t.root === window.document && (t.root = null)
            var r = f()(f()({}, re), t)
            ;(this._observer = new IntersectionObserver(this._processIntersectionEntries, r)),
              (this._reactivityCallback = (t && t.reactivityCallback) || j.a)
          }
          return (
            o()(e, [
              {
                key: 'observe',
                value: function (e, t) {
                  e && ((this._itemsUnderObservation[t] = e), this._observer.observe(e))
                },
              },
              {
                key: 'unobserve',
                value: function (e, t) {
                  e &&
                    (this._observer.unobserve(e),
                    delete this._itemsUnderObservation[t],
                    this._removeReactivityCandidate(t))
                },
              },
              {
                key: 'disconnect',
                value: function () {
                  this._observer.disconnect()
                },
              },
              {
                key: 'getImpressionEvents',
                value: function () {
                  var e = Array.from(this._impressionEvents, function (e) {
                    var t = ne()(e, 2)
                    return { id: t[0], relativeElementHeight: t[1].relativeElementHeight }
                  })
                  return this._impressionEvents.clear(), e
                },
              },
              {
                key: 'flushLingerEvents',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
                    t = this.getLingerEvents(e),
                    n = this._getOngoingLingerEvents(e)
                  return this._lingerCandidates.clear(), t.concat(n)
                },
              },
            ]),
            e
          )
        })(),
        ae = n('LFzM'),
        oe = function (e) {
          var t = e.children,
            n = e.impressionTracker
          return n ? g.a.createElement(ae.a.Provider, { value: { impressionTracker: n } }, t) : t
        },
        se = n('3GUV'),
        ce = n('v//M'),
        le = n('rHpw'),
        de = n('VPAj'),
        ue = n('0zXz'),
        pe = Object(de.a)(g.a.createElement(se.a, null)),
        he = function (e) {
          var t = e.bottomFetchStatus,
            n = e.onBottomRetry,
            r = e.withEndOfContent
          return g.a.createElement(
            H.a,
            { style: r && ve.footer },
            g.a.createElement(ce.a, { fetchStatus: t, onRequestRetry: n, render: r ? pe : ue.a }),
          )
        },
        ve = le.a.create(function (e) {
          return { footer: { height: 5 * e.lineHeightsPx.body } }
        }),
        me = g.a.memo(he),
        fe = n('xjVt'),
        _e = n('EUHl'),
        ye = n('IG4P'),
        ge = n('iBK2'),
        be = n('pbku'),
        Ce = n('aITJ'),
        Ee = n('aWzz'),
        we = n('iChn'),
        ke = n('8UdT'),
        Ie = n('cFgU'),
        Te = n('WA1W'),
        Se = function (e) {
          return e.entryId
        },
        Le = function (e) {
          return e.sortIndex
        }
      var Re = new Map(),
        xe = function (e) {
          switch (e) {
            case ke.b.Tweet:
              return Ce.b.isDesktopOS() ? 250 : 400
            case ke.a.ModuleImpressionPlaceholder:
              return 0
            default:
              return 100
          }
        }
      function Ae(e) {
        var t = e.analytics,
          n = e.renderEmptyState,
          r = e.richScribeAction
        return (
          g.a.useEffect(
            function () {
              r(f()(f()({}, t.contextualScribeNamespace), {}, { action: 'empty' }), t.contextualScribeData)
            },
            [r, t],
          ),
          n()
        )
      }
      var Oe = (function (e) {
        d()(n, e)
        var t = p()(n)
        function n(e, r) {
          var a, o
          return (
            i()(this, n),
            (a = t.call(this, e, r)),
            v()(c()(a), '_promotedTweetDistanceMap', new Map()),
            v()(c()(a), '_renderFooter', function () {
              var e = a.props,
                t = e.bottomFetchStatus,
                n = e.footer,
                r = void 0 === n ? null : n,
                i = e.onBottomRetry
              return e.showLoadingFooter
                ? g.a.createElement(
                    g.a.Fragment,
                    null,
                    g.a.createElement(me, { bottomFetchStatus: t, onBottomRetry: i, withEndOfContent: !r }),
                    r,
                  )
                : r
            }),
            v()(c()(a), '_refreshControlWrapper', function (e) {
              var t = a.props,
                n = t.canRefresh,
                r = t.onRefresh,
                i = t.refreshControl,
                o = t.topFetchStatus
              return i ? g.a.createElement(i, { canRefresh: n, isRefreshing: o === Y.a.LOADING, onRefresh: r }, e) : e
            }),
            v()(
              c()(a),
              '_getCellRenderer',
              Object(V.a)(function (e, t) {
                var n,
                  r = {
                    module: t,
                    renderEntry: function (e) {
                      return n(e)
                    },
                  }
                return (n = function (t, n) {
                  var i = e.getHandler(t),
                    a = e.getDisplayType(t) || void 0
                  return i && i.render ? i.render(t, r, n, a) : null
                })
              }),
            ),
            v()(
              c()(a),
              '_getInitialFocusedEntry',
              Object(V.a)(function (e, t) {
                return t && e.find(t)
              }),
            ),
            v()(
              c()(a),
              '_createEntryIndex',
              Object(V.a)(function (e) {
                return Object(we.a)(e, function (e) {
                  return e.entryId
                })
              }),
            ),
            v()(c()(a), '_handleBeforeWindowUnload', function () {
              a._flushLingerScribes()
            }),
            v()(c()(a), '_handleKeyboardRefresh', function () {
              a.refreshOrGoTop(!0)
            }),
            v()(c()(a), 'scrollToTop', function (e) {
              if (a._scroller) {
                var t = a.props.applyNewTweetsBarInstructions
                t && t(), a._scroller.scrollToNewest(e)
              }
            }),
            v()(
              c()(a),
              '_handleAtBottom',
              a._proximityHandler(function () {
                a.props.onAtBottom && a.props.onAtBottom()
              }),
            ),
            v()(
              c()(a),
              '_handleNearBottom',
              a._proximityHandler(function () {
                a.props.onNearBottom()
              }),
            ),
            v()(
              c()(a),
              '_handleNearTop',
              a._proximityHandler(function () {
                ;(0, a.props.onNearTop)()
              }),
            ),
            v()(
              c()(a),
              '_handleAtTop',
              a._proximityHandler(function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.onAtTop,
                  r = e.removeAlert,
                  i = e.richScribeAction
                r && r(),
                  n && n(),
                  i(
                    f()(
                      f()({}, t.contextualScribeNamespace),
                      {},
                      { component: 'stream', element: 'top', action: 'show' },
                    ),
                  )
              }),
            ),
            v()(
              c()(a),
              '_handleItemsRendered',
              a._proximityHandler(function (e) {
                var t = e.positions,
                  n = e.viewport
                if ((a.props.onEntriesRendered && a.props.onEntriesRendered(), a._V2ImpressionsEnabled()))
                  a._handleProcessLingerAndImpressionEvents()
                else {
                  var r = a._impressionTracker.processPositioningUpdate(t, n),
                    i = r.impressions,
                    o = r.lingers
                  a._scribeLingerEvents(o.scribeLingerEvents),
                    a._handleOnLingerEvents(o.allLingerIds),
                    a._scribeImpressionEvents(i)
                }
              }),
            ),
            v()(c()(a), '_scribeImpressionEvents', function (e) {
              var t,
                n = a._getEntryIndex(),
                r =
                  null === (t = a.context.featureSwitches) || void 0 === t
                    ? void 0
                    : t.isTrue('responsive_web_element_size_impression_scribe_enabled'),
                i = Object(Z.a)(e, function (e) {
                  var t = n[e.id]
                  return null != t ? { entry: t, relativeElementHeight: r ? e.relativeElementHeight : void 0 } : null
                })
              a._scribeNewEntries(i)
            }),
            v()(c()(a), '_handleProcessLingerAndImpressionEvents', function () {
              if (a._impressionTrackerV2) {
                var e,
                  t = a._impressionTrackerV2.getLingerEvents()
                a._scribeLingerEvents(t)
                var n = (null === (e = a._impressionTrackerV2) || void 0 === e ? void 0 : e.getImpressionEvents()) || []
                a._scribeImpressionEvents(n)
              }
            }),
            v()(c()(a), '_handleOnLingerEvents', function (e) {
              e.forEach(function (e) {
                return a._handleOnLingerEvent(e)
              })
            }),
            v()(c()(a), '_handleOnLingerEvent', function (e) {
              var t = a.props.applyReactionInstructions,
                n = a._getEntryIndex()[e]
              n && t({ entry: n, triggerName: be.a.ON_LINGER })
            }),
            v()(c()(a), '_handlePositionRestored', function () {
              a._positionedRestored = !0
            }),
            v()(
              c()(a),
              '_scheduleNewEntriesScribing',
              ((o = function (e) {
                var t = a.props,
                  n = t.analytics,
                  r = t.richScribeAction,
                  i = a._buildStreamScribeData(e)
                i.length > 0 &&
                  r(f()(f()({}, n.contextualScribeNamespace), {}, { component: 'stream', action: 'results' }), {
                    items: i,
                  })
              }),
              C.canUseDOM && window.requestIdleCallback
                ? function (e) {
                    var t = window.requestIdleCallback(function () {
                      return o(e)
                    })
                    return function () {
                      return window.cancelIdleCallback(t)
                    }
                  }
                : C.canUseDOM && window.requestAnimationFrame
                ? function (e) {
                    var t = window.requestAnimationFrame(function () {
                      return o(e)
                    })
                    return function () {
                      return window.cancelAnimationFrame(t)
                    }
                  }
                : function () {
                    return j.a
                  }),
            ),
            v()(c()(a), '_setScroller', function (e) {
              a._scroller = e
            }),
            v()(c()(a), '_V2ImpressionsEnabled', function () {
              var e
              return (
                C.canUseDOM &&
                (null === (e = a.context.featureSwitches) || void 0 === e
                  ? void 0
                  : e.isTrue('responsive_web_linger_refactor_enabled'))
              )
            }),
            v()(c()(a), '_newImpressionTrackerV2', function () {
              return a._V2ImpressionsEnabled() && window.IntersectionObserver
                ? new ie({
                    root: a.context.viewport.getViewport(),
                    rootMargin: a.context.viewport.getRootMargin(),
                    reactivityCallback: a._handleOnLingerEvent,
                  })
                : void 0
            }),
            (a._impressionTracker = new J()),
            (a._streamScribeCancelCallbacks = []),
            (a._impressionTrackerV2 = a._newImpressionTrackerV2()),
            a
          )
        }
        return (
          o()(n, [
            {
              key: 'UNSAFE_componentWillReceiveProps',
              value: function (e) {
                this.props.timelineId !== e.timelineId &&
                  (this._flushLingerScribes(),
                  (this._impressionTracker = new J()),
                  this._impressionTrackerV2 && this._impressionTrackerV2.disconnect(),
                  (this._impressionTrackerV2 = this._newImpressionTrackerV2()))
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                var e = this.props.onRef
                this._initialize(),
                  window.addEventListener('beforelogout', this._handleBeforeWindowUnload),
                  window.addEventListener('beforeunload', this._handleBeforeWindowUnload),
                  e && e(this)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                var e,
                  t = this.props.onRef
                this._flushLingerScribes(),
                  this._cancelStreamScribeCallbacks(),
                  window.removeEventListener('beforelogout', this._handleBeforeWindowUnload),
                  window.removeEventListener('beforeunload', this._handleBeforeWindowUnload),
                  t && t(void 0),
                  null === (e = this._impressionTrackerV2) || void 0 === e || e.disconnect()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this.props,
                  n = t.entries,
                  r = t.handlerRegistry,
                  i = t.onRef
                t.timelineId !== e.timelineId
                  ? this._initialize()
                  : (n === e.entries && r === e.handlerRegistry) || this._initialize(),
                  i && i !== e.onRef && i(this)
              },
            },
            {
              key: 'render',
              value: function () {
                var e,
                  t = this.props,
                  n = t.anchoring,
                  r = t.entries,
                  i = t.handlerRegistry,
                  a = t.header,
                  o = t.isInitialFocusEntry,
                  s = t.module,
                  c = t.nearStartProximityRatio,
                  l = t.renderEmptyState,
                  d = t.timelineId,
                  u = t.title,
                  p = t.withKeyboardShortcuts,
                  h = t.withoutHeadroom,
                  v = this.props.scroller,
                  m = this._getInitialFocusedEntry(r, o)
                return this._refreshControlWrapper(
                  this._shouldRenderEmptyState(r)
                    ? g.a.createElement(Ae, {
                        analytics: this.props.analytics,
                        key: 'empty-'.concat(d),
                        renderEmptyState: l,
                        richScribeAction: this.props.richScribeAction,
                      })
                    : g.a.createElement(
                        oe,
                        { impressionTracker: this._impressionTrackerV2 },
                        g.a.createElement(
                          b.a,
                          { title: u },
                          this._renderActiveCover(),
                          this._renderPill(),
                          g.a.createElement(v, {
                            anchoring: n,
                            assumedItemHeight: xe,
                            cacheKey: d,
                            footer: this._renderFooter(),
                            hasNewContentAtBottom:
                              null === (e = this.context.featureSwitches) || void 0 === e
                                ? void 0
                                : e.isTrue('responsive_web_do_not_launch_me_reverse_home_timeline_enabled'),
                            header: a,
                            identityFunction: Se,
                            initialAnchor: m && _.b(Se(m)),
                            items: r,
                            nearStartProximityRatio: c,
                            onAtEnd: this._handleAtBottom,
                            onAtStart: this._handleAtTop,
                            onItemsRendered: this._handleItemsRendered,
                            onKeyboardRefresh: this._handleKeyboardRefresh,
                            onNearEnd: this._handleNearBottom,
                            onNearStart: this._handleNearTop,
                            onPositionRestored: this._handlePositionRestored,
                            ref: this._setScroller,
                            renderer: this._getCellRenderer(i, s),
                            sortIndexFunction: Le,
                            withKeyboardShortcuts: p,
                            withoutHeadroom: h,
                          }),
                        ),
                      ),
                )
              },
            },
            {
              key: '_renderPill',
              value: function () {
                var e,
                  t = this.props,
                  n = t.alert,
                  r = t.applyNewTweetsBarInstructions,
                  i = t.newTweetsPillLabel,
                  a = t.newTweetsPillMode,
                  o = t.removeAlert,
                  s = t.timelineId,
                  c = t.topUnseenCount
                return a === _e.a.URT
                  ? g.a.createElement(fe.a.Configure, {
                      alert: n,
                      applyNewTweetsBarInstructions: r,
                      isAtNewest: null === (e = this._scroller) || void 0 === e ? void 0 : e.isAtNewest,
                      label: i,
                      removeAlert: o,
                      timelineId: s,
                    })
                  : a === _e.a.CLIENT && c && c > 0
                  ? g.a.createElement(fe.a.Configure, {
                      applyNewTweetsBarInstructions: r,
                      removeAlert: o,
                      timelineId: s,
                      unreadCount: c,
                    })
                  : null
              },
            },
            {
              key: '_renderActiveCover',
              value: function () {
                var e = this.props,
                  t = e.activeCover,
                  n = e.clearActiveCover,
                  r = e.processCallback,
                  i = t && t.cover
                return t && i ? g.a.createElement(q, { activeCover: t, clearActiveCover: n, processCallback: r }) : null
              },
            },
            {
              key: '_shouldRenderEmptyState',
              value: function (e) {
                var t = this.props,
                  n = t.activeCover,
                  r = t.hasPendingHandlers,
                  i = t.initialFetchStatus === Y.a.LOADED,
                  a = 0 === e.length
                return i && a && !n && !r
              },
            },
            {
              key: '_getEntryIndex',
              value: function () {
                return this._createEntryIndex(this.props.entries)
              },
            },
            {
              key: '_initialize',
              value: function () {
                this._createPromotedTweetDistanceMap()
              },
            },
            {
              key: '_createPromotedTweetDistanceMap',
              value: function () {
                var e = this,
                  t = this.props.entries
                this._promotedTweetDistanceMap = new Map()
                var n = null
                t.forEach(function (t) {
                  var r,
                    i = !1
                  null !== (r = t.content) && void 0 !== r && r.promotedMetadata && (i = t.content.promotedMetadata),
                    i && null !== n && e._promotedTweetDistanceMap.set(t.entryId, n),
                    i ? (n = 0) : null !== n && -1 === t.type.indexOf('ui_') && (n += 1)
                })
              },
            },
            {
              key: '_flushLingerScribes',
              value: function () {
                var e = this._impressionTrackerV2
                  ? this._impressionTrackerV2.flushLingerEvents()
                  : this._impressionTracker.flushLingerEvents()
                this._scribeLingerEvents(e)
              },
            },
            {
              key: 'refreshOrGoTop',
              value: function (e) {
                this._scroller && !this._scroller.isAtNewest() ? this.scrollToTop(e) : this.props.onRefresh()
              },
            },
            {
              key: 'scrollAndFocusNewest',
              value: function () {
                this._scroller && this._scroller.scrollToNewest(!0)
              },
            },
            {
              key: '_proximityHandler',
              value: function (e) {
                var t = this
                return function (n) {
                  t._positionedRestored && e(n)
                }
              },
            },
            {
              key: '_scribeNewEntries',
              value: function (e) {
                var t = this._scheduleNewEntriesScribing(e)
                for (this._streamScribeCancelCallbacks.push(t); this._streamScribeCancelCallbacks.length >= 20; )
                  this._streamScribeCancelCallbacks.shift()
              },
            },
            {
              key: '_buildStreamScribeData',
              value: function (e) {
                var t = this,
                  n = this.props,
                  r = n.handlerRegistry,
                  i = n.scribeCache,
                  a = n.timelineId
                if (!i.has(a)) {
                  var o = new Set()
                  i.set(a, o)
                }
                var s = i.get(a)
                return s
                  ? e.reduce(function (e, n, i) {
                      var a = n.entry,
                        o = n.relativeElementHeight,
                        c = a.entryId
                      if (!s.has(c) && !r.getNeedsLoad(a)) {
                        s.add(c)
                        var l = t._getScribeDataItem(r, a)
                        if (l) {
                          var d,
                            u = !(null === (d = a.content) || void 0 === d || !d.promotedMetadata),
                            p = t._promotedTweetDistanceMap.get(c)
                          u && p && (l.tweet_count = p), null != o && (l.percent_screen_height_100k = o), e.push(l)
                        }
                      }
                      return e
                    }, [])
                  : []
              },
            },
            {
              key: '_storeSeenIds',
              value: function (e) {
                var t = this.props,
                  n = t.seenIds,
                  r = t.seenIdsLatest,
                  i = t.timelineId
                ;(i !== Te.d && i !== Te.b) || !n
                  ? (i !== Te.c && i !== Te.a) || !r || r.addNewTweets(e)
                  : n.addNewTweets(e)
              },
            },
            {
              key: '_scribeLingerEvents',
              value: function (e) {
                var t = this
                if (0 !== e.length) {
                  var n = this.props.handlerRegistry,
                    r = this._getEntryIndex(),
                    i = [],
                    a = []
                  if (
                    (e.forEach(function (e) {
                      var o = e.end,
                        s = e.id,
                        c = e.start,
                        l = r[s]
                      if (l) {
                        var d = t._getScribeDataItem(n, l)
                        if (d) {
                          var u = { visibility_start: c, visibility_end: o }
                          i.push(f()(f()({}, d), {}, { impression_details: u }))
                        }
                        if (l.type === ke.b.Tweet) {
                          var p = l
                          a.push(p.content.id)
                        }
                        if (l.type === ke.b.PagedCarouselItem) {
                          var h = l,
                            v =
                              h.content.content &&
                              h.content.content.pagedCarouselFeedbackItem &&
                              h.content.content.pagedCarouselFeedbackItem.content.tweet.id
                          v && a.push(v)
                        }
                      }
                    }),
                    i.length > 0)
                  ) {
                    var o = this.props,
                      s = o.analytics
                    ;(0, o.richScribeAction)(
                      f()(
                        f()({}, s.contextualScribeNamespace),
                        {},
                        { component: 'stream', element: 'linger', action: 'results' },
                      ),
                      { items: i },
                    )
                  }
                  a.length > 0 && this._storeSeenIds(a)
                }
              },
            },
            {
              key: '_getScribeDataItem',
              value: function (e, t) {
                var n = e.getHandler(t)
                if (n) return n.getScribeDataItem(t)
              },
            },
            {
              key: '_cancelStreamScribeCallbacks',
              value: function () {
                this._streamScribeCancelCallbacks.forEach(function (e) {
                  return e()
                })
              },
            },
          ]),
          n
        )
      })(g.a.PureComponent)
      v()(Oe, 'contextTypes', { viewport: Ee.object, featureSwitches: Ee.any }),
        v()(Oe, 'defaultProps', {
          onBottomRetry: j.a,
          onNearBottom: j.a,
          onNearTop: j.a,
          onRefresh: j.a,
          refreshControl: ye.a,
          scribeCache: Re,
          scroller: ge.b,
          seenIds: Object(Ie.b)(),
          seenIdsLatest: Object(Ie.a)(),
          withoutHeadroom: !1,
          showLoadingFooter: !0,
          withKeyboardShortcuts: !0,
        })
      t.default = Object(z.a)(Oe)
    },
    'ejT/': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return i
        })
      var r = function (e) {
          return { id: e, distanceToViewportTop: 0 }
        },
        i = function (e) {
          return { id: e, distanceToViewportBottom: 0 }
        }
    },
    pbku: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('yH/f')
      var r = Object.freeze({
        ON_LINGER: 'onLinger',
        ON_IS_RELEVANT: 'onIsRelevant',
        ON_SHOW_MORE: 'onShowMore',
        ON_LIKE: 'onLike',
      })
    },
  },
])
//# sourceMappingURL=WIPED
