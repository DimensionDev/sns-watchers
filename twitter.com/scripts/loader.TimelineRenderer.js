;(window.webpackJsonp = window.webpackJsonp || []).push([
  [178],
  {
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        h = n('rHpw'),
        v = n('MWbm')
      function m(e) {
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
            r = p()(e)
          if (t) {
            var i = p()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var y = (function (e) {
          c()(n, e)
          var t = m(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.createElement(v.a, { style: b.root })
                },
              },
            ]),
            n
          )
        })(f.Component),
        b = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        h = n('3XMw'),
        v = n.n(h),
        m = n('rHpw'),
        y = n('+/1j'),
        b = n('MWbm')
      function _(e) {
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
            r = p()(e)
          if (t) {
            var i = p()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var g = v.a.e5b0063d,
        w = 0,
        E = (function (e) {
          c()(n, e)
          var t = _(n)
          function n() {
            var e
            return i()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(w)), (w += 1), e
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = g({ title: n })
                  return f.createElement(
                    b.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    f.createElement(
                      y.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: m.a.visuallyHidden,
                      },
                      n,
                    ),
                    f.createElement(b.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(f.Component)
      t.a = E
    },
    VeNJ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TimelineRenderer', function () {
          return He
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn')
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        v = n('KEM+'),
        m = n.n(v),
        y =
          (n('m9LP'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('hBpG'),
          n('jwue'),
          n('+oxZ'),
          n('vrRf'),
          n('LqLs'),
          n('KOtZ'),
          n('ejT/')),
        b = n('ERkP'),
        _ = n('5UID'),
        g = n('6/RC'),
        w = (n('2G9S'), n('1YZw')),
        E = n('rxPX'),
        O = Object(E.a)()
          .propsFromActions(function () {
            return { addToast: w.b }
          })
          .withAnalytics(),
        C = n('KNCp'),
        k = n('lUZE'),
        I = (n('yH/f'), Object.freeze({ Icon: 'Icon', IconSmall: 'IconSmall', FullWidth: 'FullWidth' })),
        T = n('caTy'),
        R = n('rcen'),
        P = n('TnY3'),
        j = n('TIdA'),
        L = n('A91F'),
        S = n('feu+'),
        D = n('tI3i'),
        A = n.n(D),
        x = g.canUseDOM ? window.location.href : '',
        M = (function () {
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
              return Promise.resolve(x)
            }),
            (t.openURL = function (e) {
              try {
                return N(e), this._dispatchEvent('onOpen', e), Promise.resolve()
              } catch (t) {
                return Promise.reject(t)
              }
            }),
            (t._validateURL = function (e) {
              A()('string' == typeof e, 'Invalid URL: should be a string. Was: ' + e),
                A()(e, 'Invalid URL: cannot be empty')
            }),
            e
          )
        })(),
        N = function (e) {
          if (g.canUseDOM) {
            var t = new URL(e, window.location).toString()
            window.open(t, '_blank', 'noopener')
          }
        },
        B = new M(),
        F = n('MWbm'),
        H = n('oQhu'),
        U = n('fs1G')
      function V(e, t) {
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
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? V(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function G(e) {
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
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var K = (function (e) {
        u()(n, e)
        var t = G(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            m()(
              c()(e),
              '_getGraphicProps',
              Object(H.a)(function (e, t) {
                var n = e
                    ? function (t) {
                        var n = t.style
                        return b.createElement(
                          F.a,
                          { style: n },
                          b.createElement(j.a, {
                            accessibilityLabel: '',
                            aspectMode: L.a.exact(e.width / e.height),
                            image: e,
                          }),
                        )
                      }
                    : k.a,
                  r = 'illustration'
                return (
                  e && t !== I.IconSmall ? t === I.FullWidth && (r = 'illustrationFullWidth') : (r = 'icon'),
                  { graphic: n, graphicDisplayMode: r }
                )
              }),
            ),
            m()(c()(e), '_scribeAction', function (t, n) {
              var r = e.props.analytics,
                i = n || {},
                o = i.action,
                a = i.component,
                s = i.element
              r.scribe({ action: o || t, component: a || 'cover', element: s })
            }),
            m()(c()(e), '_handleDismiss', function () {
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
            m()(c()(e), '_handlePrimaryCtaClick', function () {
              e._handleCtaClick(e.props.primaryCta, 'primary_cta')
            }),
            m()(c()(e), '_handleSecondaryCtaClick', function () {
              e.props.secondaryCta && e._handleCtaClick(e.props.secondaryCta, 'secondary_cta')
            }),
            m()(c()(e), '_handleCtaClick', function (t, n) {
              var r = t.callbacks,
                i = t.clientEventInfo,
                o = t.ctaBehavior,
                a = e.props,
                s = a.addToast,
                c = a.history,
                l = a.processCallback
              if ((e.props.onClose(), e._scribeAction('click', W({ element: n }, i)), o.dismiss)) {
                var u = o.dismiss
                u && u.feedbackMessage && s({ text: u.feedbackMessage.text })
              }
              if (o.navigate) {
                var d = o.navigate,
                  p = d && Object(T.b)(d.url)
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
          a()(n, [
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
                  o = e.imageDisplayType,
                  a = e.primaryCta,
                  s = e.primaryText,
                  c = e.secondaryCta,
                  l = e.secondaryText,
                  u = e.type,
                  d = b.createElement(R.a, { entities: s.entities, text: s.text }),
                  p = l ? b.createElement(R.a, { entities: l.entities, text: l.text }) : null
                if (u === C.a.Full) {
                  var f = t ? b.createElement(R.a, { entities: t.entities, text: t.text }) : null,
                    h = this._getGraphicProps(i, o),
                    v = h.graphic,
                    m = h.graphicDisplayMode
                  return b.createElement(S.a, {
                    actionLabel: a.text,
                    footer: f,
                    graphic: v,
                    graphicDisplayMode: m,
                    headline: d,
                    isFullHeightOnMobile: !n && 'CenterCover' !== r,
                    onAction: this._handlePrimaryCtaClick,
                    onClose: this._handleDismiss,
                    onTertiaryAction: this._handleSecondaryCtaClick,
                    subtext: p,
                    tertiaryActionLabel: c && c.text,
                    withCloseButton: !!n,
                  })
                }
                return b.createElement(S.a, {
                  actionLabel: a.text,
                  graphicDisplayMode: 'none',
                  headline: d,
                  onAction: this._handlePrimaryCtaClick,
                  onClose: U.a,
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
      })(b.PureComponent)
      m()(K, 'defaultProps', { imageDisplayType: I.Icon })
      var z = Object(P.a)(O(K))
      function Y(e, t) {
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
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Y(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var J = { component: 'cover', action: 'impression' },
        q = function (e) {
          var t,
            n = e.activeCover,
            r = e.clearActiveCover,
            i = e.processCallback,
            o = e.scribeAction,
            a = (function (e, t) {
              var n = Z(Z({}, e), J)
              return (
                t &&
                  (n = Z(
                    Z({}, n),
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
            s = function () {
              var e = n.cover.impressionCallbacks
              e &&
                e.forEach(function (e) {
                  return i(e)
                }),
                o(a)
            }
          return 'full' === n.type
            ? ((t = n.cover),
              b.createElement(z, {
                details: t.details || void 0,
                dismissInfo: t.dismissInfo,
                displayType: t.displayType,
                image: t.image,
                imageDisplayType: t.imageDisplayType || void 0,
                onClose: r,
                onImpression: s,
                primaryCta: t.primaryCoverCta,
                primaryText: t.primaryText,
                processCallback: i,
                secondaryCta: t.secondaryCoverCta,
                secondaryText: t.secondaryText,
                type: 'full',
              }))
            : 'half' === n.type
            ? (function (e) {
                var t = 'CenterCover' === e.displayType ? 'full' : 'half'
                return b.createElement(z, {
                  displayType: e.displayType,
                  image: e.coverImage ? e.coverImage.image : void 0,
                  imageDisplayType: e.coverImage ? e.coverImage.imageDisplayType : void 0,
                  onClose: r,
                  onImpression: s,
                  primaryCta: e.primaryCoverCta,
                  primaryText: e.primaryText,
                  processCallback: i,
                  secondaryCta: e.secondaryCoverCta,
                  secondaryText: e.secondaryText,
                  type: t,
                })
              })(n.cover)
            : null
        },
        X = n('MDbM'),
        Q = n('Qyxo')
      function $(e, t) {
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
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var te = (function () {
          function e() {
            i()(this, e), (this._lingerScribed = {}), (this._appearance = {})
          }
          return (
            a()(e, [
              {
                key: 'processPositioningUpdate',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                    r = ne(e, t),
                    i = this._lingerTransition(r, n),
                    o = re(e, t)
                  return { lingers: i, impressions: o }
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
                    var o = e[i],
                      a = o.lingered,
                      s = o.start
                    return (
                      !a &&
                        t - s >= 500 &&
                        (r.push(i),
                        n._appearance[i] && (n._appearance[i] = ee(ee({}, n._appearance[i]), {}, { lingered: !0 }))),
                      r
                    )
                  }, [])
                },
              },
              {
                key: '_detectScribeLingerEvents',
                value: function (e, t, n) {
                  var r = this
                  return Object.keys(e).reduce(function (i, o) {
                    var a = e[o].start
                    return (
                      !t[o] &&
                        !r._lingerScribed[o] &&
                        n - a >= 500 &&
                        ((r._lingerScribed[o] = !0), i.push({ id: o, start: a, end: n })),
                      i
                    )
                  }, [])
                },
              },
            ]),
            e
          )
        })(),
        ne = function (e, t) {
          return Object(Q.a)(e, function (e) {
            var n = e.id,
              r = e.rectangle
            return ie(r, t) >= 0.5 * r.getHeight() ? n : void 0
          })
        },
        re = function (e, t) {
          return Object(Q.a)(e, function (e) {
            var n = e.id,
              r = e.rectangle
            return ie(r, t) >= 0.99 ? { id: n, relativeElementHeight: oe(r.getHeight(), t.getHeight()) } : void 0
          })
        },
        ie = function (e, t) {
          return Math.max(0, Math.min(e.getBottom(), t.getBottom()) - Math.max(e.getTop(), t.getTop()))
        },
        oe = function (e, t) {
          return Math.floor((e / t) * 1e5)
        },
        ae = n('ddV6'),
        se = n.n(ae)
      n('hCOa'), n('z84I'), n('ZVkB')
      function ce(e, t) {
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
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ce(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ue = { threshold: [0.01, 0.5] },
        de = (function () {
          function e(t) {
            var n = this
            i()(this, e),
              m()(this, '_itemsUnderObservation', {}),
              m()(this, '_lingerCandidates', new Map()),
              m()(this, '_reactivityCandidates', new Map()),
              m()(this, '_lingerEvents', new Map()),
              m()(this, '_impressionEvents', new Map()),
              m()(this, 'getLingerEvents', function () {
                ;(arguments.length > 0 && void 0 !== arguments[0]) || Date.now()
                var e = Array.from(n._lingerEvents.keys())
                return e
                  .map(function (e) {
                    return n._getLingerEventForId(e)
                  })
                  .filter(Boolean)
              }),
              m()(this, '_getLingerEventForId', function (e) {
                var t = n._lingerEvents.get(e)
                if (t && !t.scribed)
                  return (
                    n._lingerEvents.set(e, le(le({}, t), {}, { scribed: !0 })), { id: e, start: t.start, end: t.end }
                  )
              }),
              m()(this, '_getOngoingLingerEvents', function (e) {
                var t = []
                return (
                  n._lingerCandidates.forEach(function (n, r) {
                    e - n >= 500 && t.push({ id: r, start: n, end: e })
                  }),
                  t
                )
              }),
              m()(this, '_processIntersectionEntries', function (e) {
                var t = Date.now()
                e.forEach(function (e) {
                  var r = Object.entries(n._itemsUnderObservation).find(function (t) {
                    var n = se()(t, 2)
                    n[0]
                    return n[1] === e.target
                  })
                  if (r) {
                    var i = r[0],
                      o = e.boundingClientRect,
                      a = e.intersectionRatio,
                      s = e.rootBounds
                    if (a >= 0.01) {
                      var c = null != o && null != s
                      n._createImpressionCandidate(i, c ? oe(o.height, s.height) : void 0)
                    }
                    a >= 0.5
                      ? (n._createLingerCandidate(i, t), n._createReactivityCandidate(i, t))
                      : (n._transitionCandidateToLingerEvent(i, t), n._removeReactivityCandidate(i))
                  }
                })
              }),
              m()(this, '_createImpressionCandidate', function (e, t) {
                n._impressionEvents.set(e, { relativeElementHeight: t })
              }),
              m()(this, '_createLingerCandidate', function (e, t) {
                n._lingerCandidates.has(e) || n._lingerCandidates.set(e, t)
              }),
              m()(this, '_transitionCandidateToLingerEvent', function (e, t) {
                var r = n._lingerCandidates.get(e)
                void 0 === r ||
                  n._lingerEvents.has(e) ||
                  (t - r >= 500 && n._lingerEvents.set(e, { start: r, end: t, scribed: !1 })),
                  n._lingerCandidates.delete(e)
              }),
              m()(this, '_createReactivityCandidate', function (e, t) {
                if (!n._reactivityCandidates.has(e)) {
                  var r = window.setTimeout(function () {
                    n._reactivityCallback(e), n._reactivityCandidates.delete(e)
                  }, 500)
                  n._reactivityCandidates.set(e, r)
                }
              }),
              m()(this, '_removeReactivityCandidate', function (e) {
                window.clearTimeout(n._reactivityCandidates.get(e)), n._reactivityCandidates.delete(e)
              }),
              null != t && t.root && t.root === window.document && (t.root = null)
            var r = le(le({}, ue), t)
            ;(this._observer = new IntersectionObserver(this._processIntersectionEntries, r)),
              (this._reactivityCallback = (t && t.reactivityCallback) || U.a)
          }
          return (
            a()(e, [
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
                    var t = se()(e, 2)
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
        pe = n('LFzM'),
        fe = function (e) {
          var t = e.children,
            n = e.impressionTracker
          return n ? b.createElement(pe.a.Provider, { value: { impressionTracker: n } }, t) : t
        },
        he = n('VPAj'),
        ve = n('3GUV'),
        me = n('v//M'),
        ye = n('rHpw'),
        be = Object(he.a)(b.createElement(ve.a, null)),
        _e = function (e) {
          var t = e.bottomFetchStatus,
            n = e.onBottomRetry,
            r = e.withEndOfContent
          return b.createElement(
            F.a,
            { style: r && ge.footer },
            b.createElement(me.a, {
              fetchStatus: t,
              onRequestRetry: n,
              render: r
                ? be
                : function () {
                    return null
                  },
            }),
          )
        },
        ge = ye.a.create(function (e) {
          return { footer: { height: 5 * e.lineHeightsPx.body } }
        }),
        we = b.memo(_e),
        Ee = n('xjVt'),
        Oe = n('EUHl'),
        Ce = n('IG4P'),
        ke = n('iBK2'),
        Ie = n('pbku'),
        Te = n('aITJ'),
        Re = n('aWzz'),
        Pe = n('iChn'),
        je = n('8UdT'),
        Le = n('cFgU'),
        Se = n('WA1W')
      function De(e, t) {
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
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : De(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function xe(e) {
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
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Me = function (e) {
          return e.entryId
        },
        Ne = function (e) {
          return e.sortIndex
        }
      var Be = new Map(),
        Fe = function (e) {
          switch (e) {
            case je.b.Tweet:
              return Te.b.isDesktopOS() ? 250 : 400
            case je.a.ModuleImpressionPlaceholder:
              return 0
            default:
              return 100
          }
        },
        He = (function (e) {
          u()(n, e)
          var t = xe(n)
          function n(e, r) {
            var o, a
            return (
              i()(this, n),
              (o = t.call(this, e, r)),
              m()(c()(o), '_promotedTweetDistanceMap', new Map()),
              m()(c()(o), '_renderFooter', function () {
                var e = o.props,
                  t = e.bottomFetchStatus,
                  n = e.footer,
                  r = void 0 === n ? null : n,
                  i = e.onBottomRetry
                return e.showLoadingFooter
                  ? b.createElement(
                      b.Fragment,
                      null,
                      b.createElement(we, { bottomFetchStatus: t, onBottomRetry: i, withEndOfContent: !r }),
                      r,
                    )
                  : r
              }),
              m()(c()(o), '_refreshControlWrapper', function (e) {
                var t = o.props,
                  n = t.canRefresh,
                  r = t.onRefresh,
                  i = t.refreshControl,
                  a = t.topFetchStatus
                return i ? b.createElement(i, { canRefresh: n, isRefreshing: a === X.a.LOADING, onRefresh: r }, e) : e
              }),
              m()(
                c()(o),
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
                      o = e.getDisplayType(t) || void 0
                    return i && i.render ? i.render(t, r, n, o) : null
                  })
                }),
              ),
              m()(
                c()(o),
                '_getInitialFocusedEntry',
                Object(H.a)(function (e, t) {
                  return t && e.find(t)
                }),
              ),
              m()(
                c()(o),
                '_createEntryIndex',
                Object(H.a)(function (e) {
                  return Object(Pe.a)(e, function (e) {
                    return e.entryId
                  })
                }),
              ),
              m()(c()(o), '_handleBeforeWindowUnload', function () {
                o._flushLingerScribes()
              }),
              m()(c()(o), '_handleKeyboardRefresh', function () {
                o.refreshOrGoTop(!0)
              }),
              m()(c()(o), 'scrollToTop', function (e) {
                if (o._scroller) {
                  var t = o.props.applyNewTweetsBarInstructions
                  t && t(), o._scroller.scrollToNewest(e)
                }
              }),
              m()(
                c()(o),
                '_handleAtBottom',
                o._proximityHandler(function () {
                  o.props.onAtBottom && o.props.onAtBottom()
                }),
              ),
              m()(
                c()(o),
                '_handleNearBottom',
                o._proximityHandler(function () {
                  o.props.onNearBottom()
                }),
              ),
              m()(
                c()(o),
                '_handleNearTop',
                o._proximityHandler(function () {
                  ;(0, o.props.onNearTop)()
                }),
              ),
              m()(
                c()(o),
                '_handleAtTop',
                o._proximityHandler(function () {
                  var e = o.props,
                    t = e.onAtTop,
                    n = e.removeAlert,
                    r = e.richScribeAction,
                    i = e.scribeNamespace
                  n && n(), t && t(), r(Ae(Ae({}, i), {}, { component: 'stream', element: 'top', action: 'show' }))
                }),
              ),
              m()(
                c()(o),
                '_handleItemsRendered',
                o._proximityHandler(function (e) {
                  var t = e.positions,
                    n = e.viewport
                  if ((o.props.onEntriesRendered && o.props.onEntriesRendered(), o._V2ImpressionsEnabled()))
                    o._handleProcessLingerAndImpressionEvents()
                  else {
                    var r = o._impressionTracker.processPositioningUpdate(t, n),
                      i = r.impressions,
                      a = r.lingers
                    o._scribeLingerEvents(a.scribeLingerEvents),
                      o._handleOnLingerEvents(a.allLingerIds),
                      o._scribeImpressionEvents(i)
                  }
                }),
              ),
              m()(c()(o), '_scribeImpressionEvents', function (e) {
                var t,
                  n = o._getEntryIndex(),
                  r =
                    null === (t = o.context.featureSwitches) || void 0 === t
                      ? void 0
                      : t.isTrue('responsive_web_element_size_impression_scribe_enabled'),
                  i = Object(Q.a)(e, function (e) {
                    var t = n[e.id]
                    return null != t ? { entry: t, relativeElementHeight: r ? e.relativeElementHeight : void 0 } : null
                  })
                o._scribeNewEntries(i)
              }),
              m()(c()(o), '_handleProcessLingerAndImpressionEvents', function () {
                if (o._impressionTrackerV2) {
                  var e,
                    t = o._impressionTrackerV2.getLingerEvents()
                  o._scribeLingerEvents(t)
                  var n =
                    (null === (e = o._impressionTrackerV2) || void 0 === e ? void 0 : e.getImpressionEvents()) || []
                  o._scribeImpressionEvents(n)
                }
              }),
              m()(c()(o), '_handleOnLingerEvents', function (e) {
                e.forEach(function (e) {
                  return o._handleOnLingerEvent(e)
                })
              }),
              m()(c()(o), '_handleOnLingerEvent', function (e) {
                var t = o.props.applyReactionInstructions,
                  n = o._getEntryIndex()[e]
                n && t({ entry: n, triggerName: Ie.a.ON_LINGER })
              }),
              m()(c()(o), '_handlePositionRestored', function () {
                o._positionedRestored = !0
              }),
              m()(
                c()(o),
                '_scheduleNewEntriesScribing',
                ((a = function (e) {
                  var t = o.props,
                    n = t.richScribeAction,
                    r = t.scribeNamespace,
                    i = o._buildStreamScribeData(e)
                  i.length > 0 && n(Ae(Ae({}, r), {}, { component: 'stream', action: 'results' }), { items: i })
                }),
                g.canUseDOM && window.requestIdleCallback
                  ? function (e) {
                      var t = window.requestIdleCallback(function () {
                        return a(e)
                      })
                      return function () {
                        return window.cancelIdleCallback(t)
                      }
                    }
                  : g.canUseDOM && window.requestAnimationFrame
                  ? function (e) {
                      var t = window.requestAnimationFrame(function () {
                        return a(e)
                      })
                      return function () {
                        return window.cancelAnimationFrame(t)
                      }
                    }
                  : function () {
                      return U.a
                    }),
              ),
              m()(c()(o), '_setScroller', function (e) {
                o._scroller = e
              }),
              m()(c()(o), '_V2ImpressionsEnabled', function () {
                var e
                return (
                  g.canUseDOM &&
                  (null === (e = o.context.featureSwitches) || void 0 === e
                    ? void 0
                    : e.isTrue('responsive_web_linger_refactor_enabled'))
                )
              }),
              m()(c()(o), '_newImpressionTrackerV2', function () {
                return o._V2ImpressionsEnabled() && window.IntersectionObserver
                  ? new de({
                      root: o.context.viewport.getViewport(),
                      rootMargin: o.context.viewport.getRootMargin(),
                      reactivityCallback: o._handleOnLingerEvent,
                    })
                  : void 0
              }),
              (o._impressionTracker = new te()),
              (o._streamScribeCancelCallbacks = []),
              (o._impressionTrackerV2 = o._newImpressionTrackerV2()),
              o
            )
          }
          return (
            a()(n, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  this.props.timelineId !== e.timelineId &&
                    (this._flushLingerScribes(),
                    (this._impressionTracker = new te()),
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
                    o = t.header,
                    a = t.isInitialFocusEntry,
                    s = t.module,
                    c = t.nearStartProximityRatio,
                    l = t.renderEmptyState,
                    u = t.timelineId,
                    d = t.title,
                    p = t.withKeyboardShortcuts,
                    f = t.withoutHeadroom,
                    h = this.props.scroller,
                    v = this._getInitialFocusedEntry(r, a)
                  return this._refreshControlWrapper(
                    this._shouldRenderEmptyState(r)
                      ? l()
                      : b.createElement(
                          fe,
                          { impressionTracker: this._impressionTrackerV2 },
                          b.createElement(
                            _.a,
                            { title: d },
                            this._renderActiveCover(),
                            this._renderPill(),
                            b.createElement(h, {
                              anchoring: n,
                              assumedItemHeight: Fe,
                              cacheKey: u,
                              footer: this._renderFooter(),
                              hasNewContentAtBottom:
                                null === (e = this.context.featureSwitches) || void 0 === e
                                  ? void 0
                                  : e.isTrue('responsive_web_do_not_launch_me_reverse_home_timeline_enabled'),
                              header: o,
                              identityFunction: Me,
                              initialAnchor: v && y.b(Me(v)),
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
                              sortIndexFunction: Ne,
                              withKeyboardShortcuts: p,
                              withoutHeadroom: f,
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
                    o = t.newTweetsPillMode,
                    a = t.removeAlert,
                    s = t.scribeNamespace,
                    c = t.timelineId,
                    l = t.topUnseenCount
                  return o
                    ? o === Oe.a.URT
                      ? b.createElement(Ee.a.Configure, {
                          alert: n,
                          applyNewTweetsBarInstructions: r,
                          isAtNewest: null === (e = this._scroller) || void 0 === e ? void 0 : e.isAtNewest,
                          label: i,
                          removeAlert: a,
                          scribeNamespace: s,
                          timelineId: c,
                        })
                      : o === Oe.a.CLIENT && l && l > 0
                      ? b.createElement(Ee.a.Configure, {
                          applyNewTweetsBarInstructions: r,
                          removeAlert: a,
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
                    o = e.scribeNamespace,
                    a = t && t.cover
                  return t && a
                    ? b.createElement(q, {
                        activeCover: t,
                        clearActiveCover: n,
                        processCallback: r,
                        scribeAction: i,
                        scribeNamespace: o,
                      })
                    : null
                },
              },
              {
                key: '_shouldRenderEmptyState',
                value: function (e) {
                  var t = this.props,
                    n = t.activeCover,
                    r = t.initialFetchStatus === X.a.LOADED,
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
                    o = n.timelineId
                  if (!i.has(o)) {
                    var a = new Set()
                    i.set(o, a)
                  }
                  var s = i.get(o)
                  return s
                    ? e.reduce(function (e, n, i) {
                        var o = n.entry,
                          a = n.relativeElementHeight,
                          c = o.entryId
                        if (!s.has(c) && !r.getNeedsLoad(o)) {
                          s.add(c)
                          var l = t._getScribeDataItem(r, o)
                          if (l) {
                            var u,
                              d = !(null === (u = o.content) || void 0 === u || !u.promotedMetadata),
                              p = t._promotedTweetDistanceMap.get(c)
                            d && p && (l.tweet_count = p), null != a && (l.percent_screen_height_100k = a), e.push(l)
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
                  ;(i !== Se.d && i !== Se.b) || !n
                    ? (i !== Se.c && i !== Se.a) || !r || r.addNewTweets(e)
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
                      o = []
                    if (
                      (e.forEach(function (e) {
                        var a = e.end,
                          s = e.id,
                          c = e.start,
                          l = r[s]
                        if (l) {
                          var u = t._getScribeDataItem(n, l)
                          if (u) {
                            var d = { visibility_start: c, visibility_end: a }
                            i.push(Ae(Ae({}, u), {}, { impression_details: d }))
                          }
                          if (l.type === je.b.Tweet) {
                            var p = l
                            o.push(p.content.id)
                          }
                          if (l.type === je.b.PagedCarouselItem) {
                            var f = l,
                              h =
                                f.content.content &&
                                f.content.content.pagedCarouselFeedbackItem &&
                                f.content.content.pagedCarouselFeedbackItem.content.tweet.id
                            h && o.push(h)
                          }
                        }
                      }),
                      i.length > 0)
                    ) {
                      var a = this.props
                      ;(0, a.richScribeAction)(
                        Ae(
                          Ae({}, a.scribeNamespace),
                          {},
                          { component: 'stream', element: 'linger', action: 'results' },
                        ),
                        { items: i },
                      )
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
        })(b.PureComponent)
      m()(He, 'contextTypes', { viewport: Re.object, featureSwitches: Re.any }),
        m()(He, 'defaultProps', {
          onBottomRetry: U.a,
          onNearBottom: U.a,
          onNearTop: U.a,
          onRefresh: U.a,
          refreshControl: Ce.a,
          scribeCache: Be,
          scroller: ke.b,
          seenIds: Object(Le.b)(),
          seenIdsLatest: Object(Le.a)(),
          withoutHeadroom: !1,
          showLoadingFooter: !0,
          withKeyboardShortcuts: !0,
        })
      t.default = He
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
