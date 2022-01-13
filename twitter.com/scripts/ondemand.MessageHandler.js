;(window.webpackJsonp = window.webpackJsonp || []).push([
  [212],
  {
    J23q: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        o = n('97Jx'),
        i = n.n(o),
        a = n('m3Bd'),
        c = n.n(a),
        l = (n('vrRf'), n('jwue'), n('+oxZ'), n('ERkP')),
        s = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn'), n('KEM+')),
        u = n.n(s),
        d = n('TEXq'),
        p =
          (n('yH/f'),
          Object.freeze({
            CompactPrompt: 'compactPrompt',
            HeaderImagePrompt: 'headerImagePrompt',
            InlinePrompt: 'inlinePrompt',
            LargePrompt: 'largePrompt',
          })),
        m = n('EIk2'),
        y = n('rxPX'),
        f = n('0KEI')
      function b(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var h = function (e, t) {
          var n = t.entry
          return n.content.content.pagedCarouselFeedbackItem
            ? void 0
            : n.content.content.message
            ? n.content.content.message
            : t.entry.content
        },
        v = function (e, t) {
          var n,
            r = null === (n = h(0, t)) || void 0 === n ? void 0 : n.content
          return (r && Object(d.a)(r)) || void 0
        },
        P = function (e, t) {
          var n,
            r = null === (n = h(0, t)) || void 0 === n ? void 0 : n.content
          if (r)
            return r.headerImagePrompt
              ? r.headerImagePrompt
              : r.inlinePrompt
              ? r.inlinePrompt
              : r.compactPrompt
              ? r.compactPrompt
              : r.largePrompt
              ? r.largePrompt
              : void 0
        },
        k = function (e, t) {
          var n
          return null === (n = h(0, t)) || void 0 === n ? void 0 : n.impressionCallbacks
        },
        E = function (e, t) {
          return !!t.entry.content.content.message
        },
        x = function (e, t) {
          return t.entry.entryId
        },
        C = function (e, t) {
          return t.feedbackItems
        },
        O = Object(y.a)()
          .propsFromState(function () {
            return {
              displayType: v,
              entryId: x,
              feedbackItems: C,
              messagePrompt: P,
              impressionCallbacks: k,
              shouldRenderBorder: E,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.displayType,
              n = e.entryId,
              r = e.feedbackItems,
              o = e.impressionCallbacks,
              i = e.messagePrompt,
              a = e.shouldRenderBorder,
              c =
                (null == i ? void 0 : i.headerImage) &&
                g(g({}, i.headerImage.imageVariants[0]), {}, { backgroundColor: i.headerImage.backgroundColor })
            return {
              bodyText: (null == i ? void 0 : i.bodyText) || void 0,
              bodyRichText: (null == i ? void 0 : i.bodyRichText) || void 0,
              entryId: n,
              feedbackItems: r,
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
        I = n('RoyM'),
        w = n('caTy'),
        A = n('Lz2T'),
        T = n('ywYn'),
        j = O(function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = (e.entry, e.entryId),
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
            b = n(),
            g = function (e, n) {
              var o
              return e
                ? {
                    link:
                      ((o = e.action.url),
                      o &&
                        Object(w.b)({
                          url: o,
                          urlType: o.indexOf('twitter://') >= 0 ? T.a.DeepLink : T.a.ExternalUrl,
                        })),
                    onClick: function () {
                      var o = (null == e ? void 0 : e.action.onClickCallbacks) || []
                      t.scribe({ element: f || n, action: 'click' }),
                        o &&
                          o.forEach(function (e) {
                            d(e).catch(b)
                          }),
                        null != e && e.action.dismissOnClick && p(r)
                    },
                    text: e.text,
                  }
                : void 0
            },
            h = g(u, 'primary_action'),
            v = g(m, 'secondary_action'),
            P = null != o && o.length ? l.createElement(I.a, { feedbackItems: o, isDisplayedOnMedia: !!e.image }) : null
          return (
            l.useEffect(function () {
              t.scribeAction('impression'), s && a({ entryId: r, callbacks: s })
            }, []),
            l.createElement(A.a, i()({}, y, { primaryAction: h, rightControl: P, secondaryAction: v }))
          )
        }),
        R = n('Rp9C')
      t.default = function (e) {
        var t = e.withGaps
        return r
          .b({
            component: j,
            divider: { bottom: t, top: t },
            getScribeDataItem: function (e) {
              return R.a.forMessage(e.itemMetadata.clientEventInfo)
            },
          })
          .getHandler()
      }
    },
    Lz2T: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('97Jx'),
        o = n.n(r),
        i = n('KEM+'),
        a = n.n(i),
        c = n('m3Bd'),
        l = n.n(c),
        s = n('ERkP'),
        u = n('PnKw'),
        d = n('vYiB'),
        p = n('X3+4'),
        m = n('rcen'),
        y = n('k89r')
      function f(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : f(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function g(e) {
        var t = e.bodyRichText,
          n = e.bodyText,
          r = e.onImpression,
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
            : n && n.length
            ? n
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
        return 'function' == typeof r ? s.createElement(d.a, { onImpression: r }, E) : E
      }
      ;(g.defaultProps = { shouldRenderBorder: !1 }), (t.a = g)
    },
    PnKw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
      })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        m = n('AuHH'),
        y = n.n(m),
        f = n('KEM+'),
        b = n.n(f),
        g = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        h = n('TIdA'),
        v = n('t62R'),
        P = n('A91F'),
        k = n('/yvb'),
        E = n('rHpw'),
        x = 'inlinePrompt',
        C = 'inlinePrompt-primaryAction',
        O = 'inlinePrompt-secondaryAction',
        I = 'inlinePrompt-centeredImageContainer',
        w = n('MWbm')
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
          var n,
            r = y()(e)
          if (t) {
            var o = y()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var T = (function (e) {
        u()(n, e)
        var t = A(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            b()(l()(e), '_renderImage', function (e) {
              var t = g.createElement(h.a, {
                accessibilityLabel: '',
                aspectMode: P.a.exact(e.width / e.height),
                backgroundColor: e.backgroundColor,
                image: e,
              })
              return e.isCentered
                ? g.createElement(
                    w.a,
                    { style: j.centeredImage, testID: I },
                    g.createElement(
                      w.a,
                      { style: { width: ''.concat(e.width, 'px'), height: ''.concat(e.height, 'px') } },
                      t,
                    ),
                  )
                : t
            }),
            b()(l()(e), '_renderTitle', function () {
              var t = e.props.headline
              return t
                ? g.createElement(
                    v.b,
                    {
                      accessibilityRole: 'heading',
                      align: 'left',
                      size: 'title4',
                      style: j.flexGrow,
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
              var n = t.action,
                r = t.buttonSize,
                o = t.buttonType,
                i = t.style,
                a = t.testID,
                c = e.props.secondaryAction,
                l = n.link,
                s = n.onClick,
                u = n.text
              return g.createElement(
                w.a,
                { style: [e.styles.actionContainer, i, { justifyContent: 'flex-start' }], testID: a },
                g.createElement(
                  k.a,
                  { link: l, onPress: s, size: r, style: { width: c ? '100%' : 'auto' }, type: o },
                  u,
                ),
              )
            }),
            e
          )
        }
        return (
          a()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.image,
                  n = e.primaryAction,
                  r = e.rightControl,
                  o = e.secondaryAction,
                  i = e.shouldRenderBorder
                return g.createElement(
                  w.a,
                  { style: i ? [R.root, R.rootMargin] : j.root },
                  g.createElement(
                    g.Fragment,
                    null,
                    t ? this._renderImage(t) : null,
                    g.createElement(
                      w.a,
                      { style: this.styles.rootPadding, testID: x },
                      this._renderTitle(),
                      this._renderBodyText(),
                      n
                        ? this._renderAction({
                            action: n,
                            buttonType: 'primaryFilled',
                            style: this.styles.primaryAction,
                            buttonSize: 'large',
                            testID: C,
                          })
                        : null,
                      o
                        ? this._renderAction({
                            action: o,
                            buttonType: 'primaryOutlined',
                            style: this.styles.secondaryAction,
                            buttonSize: 'large',
                            testID: O,
                          })
                        : null,
                    ),
                  ),
                  r ? g.createElement(w.a, { style: j.rightControl }, r) : null,
                )
              },
            },
            {
              key: 'styles',
              get: function () {
                return this.props.isCompact ? D : B
              },
            },
          ]),
          n
        )
      })(g.Component)
      b()(T, 'defaultProps', { shouldRenderBorder: !1 })
      var j = E.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            flexGrow: { flexGrow: 1 },
            centeredImage: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
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
        B = E.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space32 },
            body: { marginTop: e.spaces.space8 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space28 },
            secondaryAction: { marginTop: e.spaces.space16 },
          }
        }),
        D = E.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space16 },
            body: { marginTop: e.spaces.space2 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space4 },
            secondaryAction: { marginTop: e.spaces.space2 },
          }
        })
    },
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        i = Object(o.a)({
          loader: function () {
            return n.e(167).then(n.bind(null, 'ACNv'))
          },
        }),
        a = n('4bW+'),
        c = n('IG7M'),
        l = n('rHpw'),
        s = n('Irs7'),
        u = l.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(s.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          o = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return r.createElement(c.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return r.createElement(i, { actionItems: n, onClose: e })
            },
            style: u.curationControl,
            testID: a.a.caret,
            withDarkBackground: o,
          })
        }
        return null
      })
    },
    'X3+4': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var r = n('ERkP'),
        o = n('fs1G'),
        i = r.createContext({ handleNextSlide: o.a })
    },
  },
])
//# sourceMappingURL=WIPED
