;(window.webpackJsonp = window.webpackJsonp || []).push([
  [210],
  {
    J23q: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r('ezF+'),
        o = r('97Jx'),
        i = r.n(o),
        a = r('m3Bd'),
        c = r.n(a),
        l = (r('vrRf'), r('jwue'), r('+oxZ'), r('ERkP')),
        s = (r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('FtHn'), r('KEM+')),
        u = r.n(s),
        d = r('TEXq'),
        p =
          (r('yH/f'),
          Object.freeze({
            CompactPrompt: 'compactPrompt',
            HeaderImagePrompt: 'headerImagePrompt',
            InlinePrompt: 'inlinePrompt',
            LargePrompt: 'largePrompt',
          })),
        m = r('EIk2'),
        y = r('rxPX'),
        f = r('0KEI')
      function b(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                u()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var h = function (e, t) {
          var r = t.entry
          return r.content.content.pagedCarouselFeedbackItem
            ? void 0
            : r.content.content.message
            ? r.content.content.message
            : t.entry.content
        },
        v = function (e, t) {
          var r,
            n = null === (r = h(0, t)) || void 0 === r ? void 0 : r.content
          return (n && Object(d.a)(n)) || void 0
        },
        P = function (e, t) {
          var r,
            n = null === (r = h(0, t)) || void 0 === r ? void 0 : r.content
          if (n)
            return n.headerImagePrompt
              ? n.headerImagePrompt
              : n.inlinePrompt
              ? n.inlinePrompt
              : n.compactPrompt
              ? n.compactPrompt
              : n.largePrompt
              ? n.largePrompt
              : void 0
        },
        k = function (e, t) {
          var r
          return null === (r = h(0, t)) || void 0 === r ? void 0 : r.impressionCallbacks
        },
        E = function (e, t) {
          return !!t.entry.content.content.message
        },
        O = function (e, t) {
          return t.entry.entryId
        },
        x = function (e, t) {
          return t.feedbackItems
        },
        C = Object(y.a)()
          .propsFromState(function () {
            return {
              displayType: v,
              entryId: O,
              feedbackItems: x,
              messagePrompt: P,
              impressionCallbacks: k,
              shouldRenderBorder: E,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.displayType,
              r = e.entryId,
              n = e.feedbackItems,
              o = e.impressionCallbacks,
              i = e.messagePrompt,
              a = e.shouldRenderBorder,
              c =
                (null == i ? void 0 : i.headerImage) &&
                g(g({}, i.headerImage.imageVariants[0]), {}, { backgroundColor: i.headerImage.backgroundColor })
            return {
              bodyText: (null == i ? void 0 : i.bodyText) || void 0,
              bodyRichText: (null == i ? void 0 : i.bodyRichText) || void 0,
              entryId: r,
              feedbackItems: n,
              image: c,
              impressionCallbacks: o,
              isCompact: t === p.CompactPrompt,
              primaryButtonAction: (null == i ? void 0 : i.primaryButtonAction) || void 0,
              secondaryButtonAction: (null == i ? void 0 : i.secondaryButtonAction) || void 0,
              shouldRenderBorder: a,
              titleText: null == i ? void 0 : i.headerText,
              titleRichText: (null == i ? void 0 : i.headerRichText) || void 0,
            }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'URT_TIMELINE_MESSAGE',
              ),
              impressEntry: t.impressEntry,
              processCallback: m.a,
              removeEntry: t.removeEntry,
            }
          })
          .withAnalytics(),
        w = r('RoyM'),
        A = r('caTy'),
        T = r('Lz2T'),
        I = r('ywYn'),
        R = C(function (e) {
          var t = e.analytics,
            r = e.createLocalApiErrorHandler,
            n = (e.entry, e.entryId),
            o = e.feedbackItems,
            a = e.impressEntry,
            s = e.impressionCallbacks,
            u = (e.module, e.primaryButtonAction),
            d = e.processCallback,
            p = e.removeEntry,
            m = e.secondaryButtonAction,
            y = c()(e, [
              'analytics',
              'createLocalApiErrorHandler',
              'entry',
              'entryId',
              'feedbackItems',
              'impressEntry',
              'impressionCallbacks',
              'module',
              'primaryButtonAction',
              'processCallback',
              'removeEntry',
              'secondaryButtonAction',
            ]),
            f = t.contextualScribeNamespace.element,
            b = r(),
            g = function (e, r) {
              var o
              return e
                ? {
                    link:
                      ((o = e.action.url),
                      o &&
                        Object(A.b)({
                          url: o,
                          urlType: o.indexOf('twitter://') >= 0 ? I.a.DeepLink : I.a.ExternalUrl,
                        })),
                    onClick: function () {
                      var o = (null == e ? void 0 : e.action.onClickCallbacks) || []
                      t.scribe({ element: f || r, action: 'click' }),
                        o &&
                          o.forEach(function (e) {
                            d(e).catch(b)
                          }),
                        null != e && e.action.dismissOnClick && p(n)
                    },
                    text: e.text,
                  }
                : void 0
            },
            h = g(u, 'primary_action'),
            v = g(m, 'secondary_action'),
            P = null != o && o.length ? l.createElement(w.a, { feedbackItems: o, isDisplayedOnMedia: !!e.image }) : null
          return (
            l.useEffect(function () {
              t.scribeAction('impression'), s && a({ entryId: n, callbacks: s })
            }, []),
            l.createElement(T.a, i()({}, y, { primaryAction: h, rightControl: P, secondaryAction: v }))
          )
        }),
        j = r('Rp9C')
      t.default = function (e) {
        var t = e.withGaps
        return n
          .b({
            component: R,
            divider: { bottom: t, top: t },
            getScribeDataItem: function (e) {
              return j.a.forMessage(e.itemMetadata.clientEventInfo)
            },
          })
          .getHandler()
      }
    },
    Lz2T: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('97Jx'),
        o = r.n(n),
        i = r('KEM+'),
        a = r.n(i),
        c = r('m3Bd'),
        l = r.n(c),
        s = r('ERkP'),
        u = r('PnKw'),
        d = r('vYiB'),
        p = r('X3+4'),
        m = r('rcen'),
        y = r('k89r')
      function f(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function g(e) {
        var t = e.bodyRichText,
          r = e.bodyText,
          n = e.onImpression,
          i = e.primaryAction,
          a = e.titleRichText,
          c = e.titleText,
          f = l()(e, ['bodyRichText', 'bodyText', 'onImpression', 'primaryAction', 'titleRichText', 'titleText']),
          g = Object(y.a)(),
          h = function () {
            g.scribe({ action: 'click' })
          },
          v = a
            ? s.createElement(m.a, { entities: a.entities, onEntityClick: h, text: a.text })
            : c && c.length
            ? c
            : null,
          P = t
            ? s.createElement(m.a, { entities: t.entities, onEntityClick: h, text: t.text })
            : r && r.length
            ? r
            : null,
          k = function (e) {
            return b(
              b({}, i),
              {},
              {
                onClick: function (t) {
                  ;(null == i ? void 0 : i.onClick) && i.onClick(t), e(t)
                },
              },
            )
          },
          E = s.createElement(p.a.Consumer, null, function (e) {
            var t = e.handleNextSlide
            return s.createElement(u.a, o()({}, f, { headline: v, primaryAction: i ? k(t) : void 0, subtext: P }))
          })
        return 'function' == typeof n ? s.createElement(d.a, { onImpression: n }, E) : E
      }
      ;(g.defaultProps = { shouldRenderBorder: !1 }), (t.a = g)
    },
    PnKw: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return T
      })
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        i = r('Y9Ll'),
        a = r.n(i),
        c = r('1Pcy'),
        l = r.n(c),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('N+ot'),
        p = r.n(d),
        m = r('AuHH'),
        y = r.n(m),
        f = r('KEM+'),
        b = r.n(f),
        g = (r('2G9S'), r('hBvt'), r('uFXj'), r('ERkP')),
        h = r('TIdA'),
        v = r('t62R'),
        P = r('A91F'),
        k = r('/yvb'),
        E = r('rHpw'),
        O = 'inlinePrompt',
        x = 'inlinePrompt-primaryAction',
        C = 'inlinePrompt-secondaryAction',
        w = r('MWbm')
      function A(e) {
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
          var r,
            n = y()(e)
          if (t) {
            var o = y()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var T = (function (e) {
        u()(r, e)
        var t = A(r)
        function r() {
          var e
          o()(this, r)
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            b()(l()(e), '_renderTitle', function () {
              var t = e.props.headline
              return t
                ? g.createElement(
                    v.b,
                    {
                      accessibilityRole: 'heading',
                      align: 'left',
                      size: 'title4',
                      style: I.flexGrow,
                      weight: 'bold',
                      withHashflags: !0,
                    },
                    t,
                  )
                : null
            }),
            b()(l()(e), '_renderBodyText', function () {
              var t = e.props.subtext
              return t
                ? g.createElement(v.b, { align: 'left', color: 'gray700', style: e.styles.body, withHashflags: !0 }, t)
                : null
            }),
            b()(l()(e), '_renderAction', function (t) {
              var r = t.action,
                n = t.buttonSize,
                o = t.buttonType,
                i = t.style,
                a = t.testID,
                c = e.props.secondaryAction,
                l = r.link,
                s = r.onClick,
                u = r.text
              return g.createElement(
                w.a,
                { style: [e.styles.actionContainer, i, { justifyContent: 'flex-start' }], testID: a },
                g.createElement(
                  k.a,
                  { link: l, onPress: s, size: n, style: { width: c ? '100%' : 'auto' }, type: o },
                  u,
                ),
              )
            }),
            e
          )
        }
        return (
          a()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.image,
                  r = e.primaryAction,
                  n = e.rightControl,
                  o = e.secondaryAction,
                  i = e.shouldRenderBorder
                return g.createElement(
                  w.a,
                  { style: i ? [R.root, R.rootMargin] : I.root },
                  g.createElement(
                    g.Fragment,
                    null,
                    t
                      ? g.createElement(h.a, {
                          accessibilityLabel: '',
                          aspectMode: P.a.exact(t.width / t.height),
                          backgroundColor: t.backgroundColor,
                          image: t,
                        })
                      : null,
                    g.createElement(
                      w.a,
                      { style: this.styles.rootPadding, testID: O },
                      this._renderTitle(),
                      this._renderBodyText(),
                      r
                        ? this._renderAction({
                            action: r,
                            buttonType: 'primaryFilled',
                            style: this.styles.primaryAction,
                            buttonSize: 'large',
                            testID: x,
                          })
                        : null,
                      o
                        ? this._renderAction({
                            action: o,
                            buttonType: 'primaryOutlined',
                            style: this.styles.secondaryAction,
                            buttonSize: 'large',
                            testID: C,
                          })
                        : null,
                    ),
                  ),
                  n ? g.createElement(w.a, { style: I.rightControl }, n) : null,
                )
              },
            },
            {
              key: 'styles',
              get: function () {
                return this.props.isCompact ? B : j
              },
            },
          ]),
          r
        )
      })(g.Component)
      b()(T, 'defaultProps', { shouldRenderBorder: !1 })
      var I = E.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            flexGrow: { flexGrow: 1 },
            rightControl: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              position: 'absolute',
              right: 0,
              top: 0,
            },
          }
        }),
        R = E.a.create(function (e) {
          return {
            root: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
            },
            rootMargin: { marginLeft: e.spaces.space16, marginRight: e.spaces.space16 },
          }
        }),
        j = E.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space32 },
            body: { marginTop: e.spaces.space8 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space28 },
            secondaryAction: { marginTop: e.spaces.space16 },
          }
        }),
        B = E.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space16 },
            body: { marginTop: e.spaces.space2 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space4 },
            secondaryAction: { marginTop: e.spaces.space2 },
          }
        })
    },
    'X3+4': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return i
      })
      var n = r('ERkP'),
        o = r('fs1G'),
        i = n.createContext({ handleNextSlide: o.a })
    },
  },
])
//# sourceMappingURL=WIPED
