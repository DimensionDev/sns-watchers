;(window.webpackJsonp = window.webpackJsonp || []).push([
  [184],
  {
    '3GUV': function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('2VqO'),
        d = n.n(l),
        u = n('ERkP'),
        p = n.n(u),
        h = n('rHpw'),
        v = n('MWbm'),
        m = (function (e) {
          c()(n, e)
          var t = d()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return p.a.createElement(v.a, { style: f.root })
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        f = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = m
    },
    '5UID': function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('2VqO'),
        d = n.n(l),
        u = n('ERkP'),
        p = n.n(u),
        h = n('3XMw'),
        v = n.n(h),
        m = n('rHpw'),
        f = n('+/1j'),
        _ = n('MWbm'),
        y = v.a.e5b0063d,
        g = 0,
        b = (function (e) {
          c()(n, e)
          var t = d()(n)
          function n() {
            var e
            return i()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(g)), (g += 1), e
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = y({ title: n })
                  return p.a.createElement(
                    _.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    p.a.createElement(
                      f.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: m.a.visuallyHidden,
                      },
                      n,
                    ),
                    p.a.createElement(_.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      t.a = b
    },
    VeNJ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TimelineRenderer', function () {
          return Ae
        })
      var r = n('yiKp'),
        i = n.n(r),
        a = n('VrFO'),
        o = n.n(a),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        d = n.n(l),
        u = n('5Yy7'),
        p = n.n(u),
        h = n('2VqO'),
        v = n.n(h),
        m = n('KEM+'),
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
        w = (n('2G9S'), n('1YZw')),
        E = n('rxPX'),
        k = Object(E.a)()
          .propsFromActions(function () {
            return { addToast: w.b }
          })
          .withAnalytics(),
        I = n('KNCp'),
        T = n('lUZE'),
        L = (n('yH/f'), Object.freeze({ Icon: 'Icon', IconSmall: 'IconSmall', FullWidth: 'FullWidth' })),
        S = n('caTy'),
        R = n('rcen'),
        A = n('TnY3'),
        x = n('TIdA'),
        O = n('A91F'),
        D = n('feu+'),
        M = n('tI3i'),
        N = n.n(M),
        P = C.canUseDOM ? window.location.href : '',
        U = (function () {
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
                return F(e), this._dispatchEvent('onOpen', e), Promise.resolve()
              } catch (t) {
                return Promise.reject(t)
              }
            }),
            (t._validateURL = function (e) {
              N()('string' == typeof e, 'Invalid URL: should be a string. Was: ' + e),
                N()(e, 'Invalid URL: cannot be empty')
            }),
            e
          )
        })(),
        F = function (e) {
          if (C.canUseDOM) {
            var t = new URL(e, window.location).toString()
            window.open(t, '_blank', 'noopener')
          }
        },
        B = new U(),
        V = n('MWbm'),
        H = n('oQhu'),
        j = n('fs1G'),
        W = (function (e) {
          p()(n, e)
          var t = v()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(
                d()(e),
                '_getGraphicProps',
                Object(H.a)(function (e, t) {
                  var n = e
                      ? function (t) {
                          var n = t.style
                          return g.a.createElement(
                            V.a,
                            { style: n },
                            g.a.createElement(x.a, {
                              accessibilityLabel: '',
                              aspectMode: O.a.exact(e.width / e.height),
                              image: e,
                            }),
                          )
                        }
                      : T.a,
                    r = 'illustration'
                  return (
                    e && t !== L.IconSmall ? t === L.FullWidth && (r = 'illustrationFullWidth') : (r = 'icon'),
                    { graphic: n, graphicDisplayMode: r }
                  )
                }),
              ),
              f()(d()(e), '_scribeAction', function (t, n) {
                var r = e.props.analytics,
                  i = n || {},
                  a = i.action,
                  o = i.component,
                  s = i.element
                r.scribe({ action: a || t, component: o || 'cover', element: s })
              }),
              f()(d()(e), '_handleDismiss', function () {
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
              f()(d()(e), '_handlePrimaryCtaClick', function () {
                e._handleCtaClick(e.props.primaryCta, 'primary_cta')
              }),
              f()(d()(e), '_handleSecondaryCtaClick', function () {
                e.props.secondaryCta && e._handleCtaClick(e.props.secondaryCta, 'secondary_cta')
              }),
              f()(d()(e), '_handleCtaClick', function (t, n) {
                var r = t.callbacks,
                  a = t.clientEventInfo,
                  o = t.ctaBehavior,
                  s = e.props,
                  c = s.addToast,
                  l = s.history,
                  d = s.processCallback
                if ((e.props.onClose(), e._scribeAction('click', i()({ element: n }, a)), o.dismiss)) {
                  var u = o.dismiss
                  u && u.feedbackMessage && c({ text: u.feedbackMessage.text })
                }
                if (o.navigate) {
                  var p = o.navigate,
                    h = p && Object(S.b)(p.url)
                  h && (h.external ? B.openURL(h.pathname) : l.push(h.pathname))
                }
                r &&
                  r.forEach(function (e) {
                    return d(e)
                  })
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    return g.a.createElement(D.a, {
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
                  return g.a.createElement(D.a, {
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
      f()(W, 'defaultProps', { imageDisplayType: L.Icon })
      var K = Object(A.a)(k(W)),
        z = { component: 'cover', action: 'impression' },
        G = function (e) {
          var t,
            n = e.activeCover,
            r = e.clearActiveCover,
            a = e.processCallback,
            o = e.scribeAction,
            s = (function (e, t) {
              var n = i()(i()({}, e), z)
              return (
                t &&
                  (n = i()(
                    i()({}, n),
                    {},
                    {
                      component: t.component || n.component,
                      element: t.element || n.element,
                      action: t.action || n.action,
                    },
                  )),
                n
              )
            })(e.scribeNamespace, n.clientEventInfo),
            c = function () {
              var e = n.cover.impressionCallbacks
              e &&
                e.forEach(function (e) {
                  return a(e)
                }),
                o(s)
            }
          return 'full' === n.type
            ? ((t = n.cover),
              g.a.createElement(K, {
                details: t.details || void 0,
                dismissInfo: t.dismissInfo,
                displayType: t.displayType,
                image: t.image,
                imageDisplayType: t.imageDisplayType || void 0,
                onClose: r,
                onImpression: c,
                primaryCta: t.primaryCoverCta,
                primaryText: t.primaryText,
                processCallback: a,
                secondaryCta: t.secondaryCoverCta,
                secondaryText: t.secondaryText,
                type: 'full',
              }))
            : 'half' === n.type
            ? (function (e) {
                var t = 'CenterCover' === e.displayType ? 'full' : 'half'
                return g.a.createElement(K, {
                  displayType: e.displayType,
                  image: e.coverImage ? e.coverImage.image : void 0,
                  imageDisplayType: e.coverImage ? e.coverImage.imageDisplayType : void 0,
                  onClose: r,
                  onImpression: c,
                  primaryCta: e.primaryCoverCta,
                  primaryText: e.primaryText,
                  processCallback: a,
                  secondaryCta: e.secondaryCoverCta,
                  secondaryText: e.secondaryText,
                  type: t,
                })
              })(n.cover)
            : null
        },
        q = n('MDbM'),
        Y = (n('+KXO'), n('Qyxo')),
        Z = (function () {
          function e() {
            o()(this, e), (this._lingerScribed = {}), (this._appearance = {})
          }
          return (
            c()(e, [
              {
                key: 'processPositioningUpdate',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                    r = J(e, t),
                    i = this._lingerTransition(r, n),
                    a = X(e, t)
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
                  return Object.keys(e).reduce(function (r, a) {
                    var o = e[a],
                      s = o.lingered,
                      c = o.start
                    return (
                      !s &&
                        t - c >= 500 &&
                        (r.push(a),
                        n._appearance[a] && (n._appearance[a] = i()(i()({}, n._appearance[a]), {}, { lingered: !0 }))),
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
        J = function (e, t) {
          return Object(Y.a)(e, function (e) {
            var n = e.id,
              r = e.rectangle
            return Q(r, t) >= 0.5 * r.getHeight() ? n : void 0
          })
        },
        X = function (e, t) {
          return Object(Y.a)(e, function (e) {
            var n = e.id,
              r = e.rectangle
            return Q(r, t) >= 0.99 ? { id: n, relativeElementHeight: $(r.getHeight(), t.getHeight()) } : void 0
          })
        },
        Q = function (e, t) {
          return Math.max(0, Math.min(e.getBottom(), t.getBottom()) - Math.max(e.getTop(), t.getTop()))
        },
        $ = function (e, t) {
          return Math.floor((e / t) * 1e5)
        },
        ee = n('ddV6'),
        te = n.n(ee),
        ne = (n('hCOa'), n('LW0h'), n('z84I'), n('ZVkB'), { threshold: [0.01, 0.5] }),
        re = (function () {
          function e(t) {
            var n = this
            o()(this, e),
              f()(this, '_itemsUnderObservation', {}),
              f()(this, '_lingerCandidates', new Map()),
              f()(this, '_reactivityCandidates', new Map()),
              f()(this, '_lingerEvents', new Map()),
              f()(this, '_impressionEvents', new Map()),
              f()(this, 'getLingerEvents', function () {
                ;(arguments.length > 0 && void 0 !== arguments[0]) || Date.now()
                var e = Array.from(n._lingerEvents.keys())
                return e
                  .map(function (e) {
                    return n._getLingerEventForId(e)
                  })
                  .filter(Boolean)
              }),
              f()(this, '_getLingerEventForId', function (e) {
                var t = n._lingerEvents.get(e)
                if (t && !t.scribed)
                  return (
                    n._lingerEvents.set(e, i()(i()({}, t), {}, { scribed: !0 })), { id: e, start: t.start, end: t.end }
                  )
              }),
              f()(this, '_getOngoingLingerEvents', function (e) {
                var t = []
                return (
                  n._lingerCandidates.forEach(function (n, r) {
                    e - n >= 500 && t.push({ id: r, start: n, end: e })
                  }),
                  t
                )
              }),
              f()(this, '_processIntersectionEntries', function (e) {
                var t = Date.now()
                e.forEach(function (e) {
                  var r = Object.entries(n._itemsUnderObservation).find(function (t) {
                    var n = te()(t, 2)
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
                      n._createImpressionCandidate(i, c ? $(a.height, s.height) : void 0)
                    }
                    o >= 0.5
                      ? (n._createLingerCandidate(i, t), n._createReactivityCandidate(i, t))
                      : (n._transitionCandidateToLingerEvent(i, t), n._removeReactivityCandidate(i))
                  }
                })
              }),
              f()(this, '_createImpressionCandidate', function (e, t) {
                n._impressionEvents.set(e, { relativeElementHeight: t })
              }),
              f()(this, '_createLingerCandidate', function (e, t) {
                n._lingerCandidates.has(e) || n._lingerCandidates.set(e, t)
              }),
              f()(this, '_transitionCandidateToLingerEvent', function (e, t) {
                var r = n._lingerCandidates.get(e)
                void 0 === r ||
                  n._lingerEvents.has(e) ||
                  (t - r >= 500 && n._lingerEvents.set(e, { start: r, end: t, scribed: !1 })),
                  n._lingerCandidates.delete(e)
              }),
              f()(this, '_createReactivityCandidate', function (e, t) {
                if (!n._reactivityCandidates.has(e)) {
                  var r = window.setTimeout(function () {
                    n._reactivityCallback(e), n._reactivityCandidates.delete(e)
                  }, 500)
                  n._reactivityCandidates.set(e, r)
                }
              }),
              f()(this, '_removeReactivityCandidate', function (e) {
                window.clearTimeout(n._reactivityCandidates.get(e)), n._reactivityCandidates.delete(e)
              }),
              null != t && t.root && t.root === window.document && (t.root = null)
            var r = i()(i()({}, ne), t)
            ;(this._observer = new IntersectionObserver(this._processIntersectionEntries, r)),
              (this._reactivityCallback = (t && t.reactivityCallback) || j.a)
          }
          return (
            c()(e, [
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
                    var t = te()(e, 2)
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
        ie = n('LFzM'),
        ae = function (e) {
          var t = e.children,
            n = e.impressionTracker
          return n ? g.a.createElement(ie.a.Provider, { value: { impressionTracker: n } }, t) : t
        },
        oe = n('3GUV'),
        se = n('v//M'),
        ce = n('rHpw'),
        le = n('VPAj'),
        de = n('0zXz'),
        ue = Object(le.a)(g.a.createElement(oe.a, null)),
        pe = function (e) {
          var t = e.bottomFetchStatus,
            n = e.onBottomRetry,
            r = e.withEndOfContent
          return g.a.createElement(
            V.a,
            { style: r && he.footer },
            g.a.createElement(se.a, { fetchStatus: t, onRequestRetry: n, render: r ? ue : de.a }),
          )
        },
        he = ce.a.create(function (e) {
          return { footer: { height: 5 * e.lineHeightsPx.body } }
        }),
        ve = g.a.memo(pe),
        me = n('xjVt'),
        fe = n('EUHl'),
        _e = n('IG4P'),
        ye = n('iBK2'),
        ge = n('pbku'),
        be = n('aITJ'),
        Ce = n('aWzz'),
        we = n('iChn'),
        Ee = n('8UdT'),
        ke = n('cFgU'),
        Ie = n('WA1W'),
        Te = function (e) {
          return e.entryId
        },
        Le = function (e) {
          return e.sortIndex
        }
      var Se = new Map(),
        Re = function (e) {
          switch (e) {
            case Ee.b.Tweet:
              return be.b.isDesktopOS() ? 250 : 400
            case Ee.a.ModuleImpressionPlaceholder:
              return 0
            default:
              return 100
          }
        },
        Ae = (function (e) {
          p()(n, e)
          var t = v()(n)
          function n(e, r) {
            var a, s
            return (
              o()(this, n),
              (a = t.call(this, e, r)),
              f()(d()(a), '_promotedTweetDistanceMap', new Map()),
              f()(d()(a), '_renderFooter', function () {
                var e = a.props,
                  t = e.bottomFetchStatus,
                  n = e.footer,
                  r = void 0 === n ? null : n,
                  i = e.onBottomRetry
                return e.showLoadingFooter
                  ? g.a.createElement(
                      g.a.Fragment,
                      null,
                      g.a.createElement(ve, { bottomFetchStatus: t, onBottomRetry: i, withEndOfContent: !r }),
                      r,
                    )
                  : r
              }),
              f()(d()(a), '_refreshControlWrapper', function (e) {
                var t = a.props,
                  n = t.canRefresh,
                  r = t.onRefresh,
                  i = t.refreshControl,
                  o = t.topFetchStatus
                return i ? g.a.createElement(i, { canRefresh: n, isRefreshing: o === q.a.LOADING, onRefresh: r }, e) : e
              }),
              f()(
                d()(a),
                '_getCellRenderer',
                Object(H.a)(function (e, t) {
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
              f()(
                d()(a),
                '_getInitialFocusedEntry',
                Object(H.a)(function (e, t) {
                  return t && e.find(t)
                }),
              ),
              f()(
                d()(a),
                '_createEntryIndex',
                Object(H.a)(function (e) {
                  return Object(we.a)(e, function (e) {
                    return e.entryId
                  })
                }),
              ),
              f()(d()(a), '_handleBeforeWindowUnload', function () {
                a._flushLingerScribes()
              }),
              f()(d()(a), '_handleKeyboardRefresh', function () {
                a.refreshOrGoTop(!0)
              }),
              f()(d()(a), 'scrollToTop', function (e) {
                if (a._scroller) {
                  var t = a.props.applyNewTweetsBarInstructions
                  t && t(), a._scroller.scrollToNewest(e)
                }
              }),
              f()(
                d()(a),
                '_handleAtBottom',
                a._proximityHandler(function () {
                  a.props.onAtBottom && a.props.onAtBottom()
                }),
              ),
              f()(
                d()(a),
                '_handleNearBottom',
                a._proximityHandler(function () {
                  a.props.onNearBottom()
                }),
              ),
              f()(
                d()(a),
                '_handleNearTop',
                a._proximityHandler(function () {
                  ;(0, a.props.onNearTop)()
                }),
              ),
              f()(
                d()(a),
                '_handleAtTop',
                a._proximityHandler(function () {
                  var e = a.props,
                    t = e.onAtTop,
                    n = e.removeAlert,
                    r = e.richScribeAction,
                    o = e.scribeNamespace
                  n && n(), t && t(), r(i()(i()({}, o), {}, { component: 'stream', element: 'top', action: 'show' }))
                }),
              ),
              f()(
                d()(a),
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
              f()(d()(a), '_scribeImpressionEvents', function (e) {
                var t,
                  n = a._getEntryIndex(),
                  r =
                    null === (t = a.context.featureSwitches) || void 0 === t
                      ? void 0
                      : t.isTrue('responsive_web_element_size_impression_scribe_enabled'),
                  i = Object(Y.a)(e, function (e) {
                    var t = n[e.id]
                    return null != t ? { entry: t, relativeElementHeight: r ? e.relativeElementHeight : void 0 } : null
                  })
                a._scribeNewEntries(i)
              }),
              f()(d()(a), '_handleProcessLingerAndImpressionEvents', function () {
                if (a._impressionTrackerV2) {
                  var e,
                    t = a._impressionTrackerV2.getLingerEvents()
                  a._scribeLingerEvents(t)
                  var n =
                    (null === (e = a._impressionTrackerV2) || void 0 === e ? void 0 : e.getImpressionEvents()) || []
                  a._scribeImpressionEvents(n)
                }
              }),
              f()(d()(a), '_handleOnLingerEvents', function (e) {
                e.forEach(function (e) {
                  return a._handleOnLingerEvent(e)
                })
              }),
              f()(d()(a), '_handleOnLingerEvent', function (e) {
                var t = a.props.applyReactionInstructions,
                  n = a._getEntryIndex()[e]
                n && t({ entry: n, triggerName: ge.a.ON_LINGER })
              }),
              f()(d()(a), '_handlePositionRestored', function () {
                a._positionedRestored = !0
              }),
              f()(
                d()(a),
                '_scheduleNewEntriesScribing',
                ((s = function (e) {
                  var t = a.props,
                    n = t.richScribeAction,
                    r = t.scribeNamespace,
                    o = a._buildStreamScribeData(e)
                  o.length > 0 && n(i()(i()({}, r), {}, { component: 'stream', action: 'results' }), { items: o })
                }),
                C.canUseDOM && window.requestIdleCallback
                  ? function (e) {
                      var t = window.requestIdleCallback(function () {
                        return s(e)
                      })
                      return function () {
                        return window.cancelIdleCallback(t)
                      }
                    }
                  : C.canUseDOM && window.requestAnimationFrame
                  ? function (e) {
                      var t = window.requestAnimationFrame(function () {
                        return s(e)
                      })
                      return function () {
                        return window.cancelAnimationFrame(t)
                      }
                    }
                  : function () {
                      return j.a
                    }),
              ),
              f()(d()(a), '_setScroller', function (e) {
                a._scroller = e
              }),
              f()(d()(a), '_V2ImpressionsEnabled', function () {
                var e
                return (
                  C.canUseDOM &&
                  (null === (e = a.context.featureSwitches) || void 0 === e
                    ? void 0
                    : e.isTrue('responsive_web_linger_refactor_enabled'))
                )
              }),
              f()(d()(a), '_newImpressionTrackerV2', function () {
                return a._V2ImpressionsEnabled() && window.IntersectionObserver
                  ? new re({
                      root: a.context.viewport.getViewport(),
                      rootMargin: a.context.viewport.getRootMargin(),
                      reactivityCallback: a._handleOnLingerEvent,
                    })
                  : void 0
              }),
              (a._impressionTracker = new Z()),
              (a._streamScribeCancelCallbacks = []),
              (a._impressionTrackerV2 = a._newImpressionTrackerV2()),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  this.props.timelineId !== e.timelineId &&
                    (this._flushLingerScribes(),
                    (this._impressionTracker = new Z()),
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
                      ? l()
                      : g.a.createElement(
                          ae,
                          { impressionTracker: this._impressionTrackerV2 },
                          g.a.createElement(
                            b.a,
                            { title: u },
                            this._renderActiveCover(),
                            this._renderPill(),
                            g.a.createElement(v, {
                              anchoring: n,
                              assumedItemHeight: Re,
                              cacheKey: d,
                              footer: this._renderFooter(),
                              hasNewContentAtBottom:
                                null === (e = this.context.featureSwitches) || void 0 === e
                                  ? void 0
                                  : e.isTrue('responsive_web_do_not_launch_me_reverse_home_timeline_enabled'),
                              header: a,
                              identityFunction: Te,
                              initialAnchor: m && _.b(Te(m)),
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
                    s = t.scribeNamespace,
                    c = t.timelineId,
                    l = t.topUnseenCount
                  return a
                    ? a === fe.a.URT
                      ? g.a.createElement(me.a.Configure, {
                          alert: n,
                          applyNewTweetsBarInstructions: r,
                          isAtNewest: null === (e = this._scroller) || void 0 === e ? void 0 : e.isAtNewest,
                          label: i,
                          removeAlert: o,
                          scribeNamespace: s,
                          timelineId: c,
                        })
                      : a === fe.a.CLIENT && l && l > 0
                      ? g.a.createElement(me.a.Configure, {
                          applyNewTweetsBarInstructions: r,
                          removeAlert: o,
                          scribeNamespace: s,
                          timelineId: c,
                          unreadCount: l,
                        })
                      : void 0
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
                    i = e.scribeAction,
                    a = e.scribeNamespace,
                    o = t && t.cover
                  return t && o
                    ? g.a.createElement(G, {
                        activeCover: t,
                        clearActiveCover: n,
                        processCallback: r,
                        scribeAction: i,
                        scribeNamespace: a,
                      })
                    : null
                },
              },
              {
                key: '_shouldRenderEmptyState',
                value: function (e) {
                  var t = this.props,
                    n = t.activeCover,
                    r = t.initialFetchStatus === q.a.LOADED,
                    i = 0 === e.length
                  return r && i && !n
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
                  ;(i !== Ie.d && i !== Ie.b) || !n
                    ? (i !== Ie.c && i !== Ie.a) || !r || r.addNewTweets(e)
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
                      a = [],
                      o = []
                    if (
                      (e.forEach(function (e) {
                        var s = e.end,
                          c = e.id,
                          l = e.start,
                          d = r[c]
                        if (d) {
                          var u = t._getScribeDataItem(n, d)
                          if (u) {
                            var p = { visibility_start: l, visibility_end: s }
                            a.push(i()(i()({}, u), {}, { impression_details: p }))
                          }
                          if (d.type === Ee.b.Tweet) {
                            var h = d
                            o.push(h.content.id)
                          }
                          if (d.type === Ee.b.PagedCarouselItem) {
                            var v = d,
                              m =
                                v.content.content &&
                                v.content.content.pagedCarouselFeedbackItem &&
                                v.content.content.pagedCarouselFeedbackItem.content.tweet.id
                            m && o.push(m)
                          }
                        }
                      }),
                      a.length > 0)
                    ) {
                      var s = this.props,
                        c = s.richScribeAction,
                        l = s.scribeNamespace
                      c(i()(i()({}, l), {}, { component: 'stream', element: 'linger', action: 'results' }), {
                        items: a,
                      })
                    }
                    o.length > 0 && this._storeSeenIds(o)
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
      f()(Ae, 'contextTypes', { viewport: Ce.object, featureSwitches: Ce.any }),
        f()(Ae, 'defaultProps', {
          onBottomRetry: j.a,
          onNearBottom: j.a,
          onNearTop: j.a,
          onRefresh: j.a,
          refreshControl: _e.a,
          scribeCache: Se,
          scroller: ye.b,
          seenIds: Object(ke.b)(),
          seenIdsLatest: Object(ke.a)(),
          withoutHeadroom: !1,
          showLoadingFooter: !0,
          withKeyboardShortcuts: !0,
        })
      t.default = Ae
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
  },
])
//# sourceMappingURL=WIPED
