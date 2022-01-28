;(window.webpackJsonp = window.webpackJsonp || []).push([
  [216],
  {
    J23q: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        o = n('97Jx'),
        a = n.n(o),
        i = n('m3Bd'),
        c = n.n(i),
        l = (n('vrRf'), n('jwue'), n('+oxZ'), n('ERkP')),
        s = n.n(l),
        u = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn'), n('KEM+')),
        d = n.n(u),
        p = n('TEXq'),
        m =
          (n('yH/f'),
          Object.freeze({
            CompactPrompt: 'compactPrompt',
            HeaderImagePrompt: 'headerImagePrompt',
            InlinePrompt: 'inlinePrompt',
            LargePrompt: 'largePrompt',
          })),
        y = n('EIk2'),
        f = n('rxPX'),
        b = n('0KEI')
      function g(e, t) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                d()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var v = function (e, t) {
          var n = t.entry
          return n.content.content.pagedCarouselFeedbackItem
            ? void 0
            : n.content.content.message
            ? n.content.content.message
            : t.entry.content
        },
        P = function (e, t) {
          var n,
            r = null === (n = v(0, t)) || void 0 === n ? void 0 : n.content
          return (r && Object(p.a)(r)) || void 0
        },
        k = function (e, t) {
          var n,
            r = null === (n = v(0, t)) || void 0 === n ? void 0 : n.content
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
        E = function (e, t) {
          var n
          return null === (n = v(0, t)) || void 0 === n ? void 0 : n.impressionCallbacks
        },
        x = function (e, t) {
          return !!t.entry.content.content.message
        },
        C = function (e, t) {
          return t.entry.entryId
        },
        O = function (e, t) {
          return t.feedbackItems
        },
        I = Object(f.a)()
          .propsFromState(function () {
            return {
              displayType: P,
              entryId: C,
              feedbackItems: O,
              messagePrompt: k,
              impressionCallbacks: E,
              shouldRenderBorder: x,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.displayType,
              n = e.entryId,
              r = e.feedbackItems,
              o = e.impressionCallbacks,
              a = e.messagePrompt,
              i = e.shouldRenderBorder,
              c =
                (null == a ? void 0 : a.headerImage) &&
                h(h({}, a.headerImage.imageVariants[0]), {}, { backgroundColor: a.headerImage.backgroundColor })
            return {
              bodyText: (null == a ? void 0 : a.bodyText) || void 0,
              bodyRichText: (null == a ? void 0 : a.bodyRichText) || void 0,
              entryId: n,
              feedbackItems: r,
              image: c,
              impressionCallbacks: o,
              isCompact: t === m.CompactPrompt,
              primaryButtonAction: (null == a ? void 0 : a.primaryButtonAction) || void 0,
              secondaryButtonAction: (null == a ? void 0 : a.secondaryButtonAction) || void 0,
              shouldRenderBorder: i,
              titleText: null == a ? void 0 : a.headerText,
              titleRichText: (null == a ? void 0 : a.headerRichText) || void 0,
            }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)(
                'URT_TIMELINE_MESSAGE',
              ),
              impressEntry: t.impressEntry,
              processCallback: y.a,
              removeEntry: t.removeEntry,
            }
          })
          .withAnalytics(),
        w = n('RoyM'),
        A = n('caTy'),
        T = n('Lz2T'),
        j = n('ywYn'),
        R = I(function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = (e.entry, e.entryId),
            o = e.feedbackItems,
            i = e.impressEntry,
            l = e.impressionCallbacks,
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
                        Object(A.b)({
                          url: o,
                          urlType: o.indexOf('twitter://') >= 0 ? j.a.DeepLink : j.a.ExternalUrl,
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
            P =
              null != o && o.length ? s.a.createElement(w.a, { feedbackItems: o, isDisplayedOnMedia: !!e.image }) : null
          return (
            s.a.useEffect(function () {
              t.scribeAction('impression'), l && i({ entryId: r, callbacks: l })
            }, []),
            s.a.createElement(T.a, a()({}, y, { primaryAction: h, rightControl: P, secondaryAction: v }))
          )
        }),
        B = n('Rp9C')
      t.default = function (e) {
        var t = e.withGaps
        return r
          .b({
            component: R,
            divider: { bottom: t, top: t },
            getScribeDataItem: function (e) {
              return B.a.forMessage(e.itemMetadata.clientEventInfo)
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
        a = n('KEM+'),
        i = n.n(a),
        c = n('m3Bd'),
        l = n.n(c),
        s = n('ERkP'),
        u = n.n(s),
        d = n('PnKw'),
        p = n('vYiB'),
        m = n('X3+4'),
        y = n('rcen'),
        f = n('k89r')
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
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function h(e) {
        var t = e.bodyRichText,
          n = e.bodyText,
          r = e.onImpression,
          a = e.primaryAction,
          i = e.titleRichText,
          c = e.titleText,
          s = l()(e, ['bodyRichText', 'bodyText', 'onImpression', 'primaryAction', 'titleRichText', 'titleText']),
          b = Object(f.a)(),
          h = function () {
            b.scribe({ action: 'click' })
          },
          v = i
            ? u.a.createElement(y.a, { entities: i.entities, onEntityClick: h, text: i.text })
            : c && c.length
            ? c
            : null,
          P = t
            ? u.a.createElement(y.a, { entities: t.entities, onEntityClick: h, text: t.text })
            : n && n.length
            ? n
            : null,
          k = function (e) {
            return g(
              g({}, a),
              {},
              {
                onClick: function (t) {
                  ;(null == a ? void 0 : a.onClick) && a.onClick(t), e(t)
                },
              },
            )
          },
          E = u.a.createElement(m.a.Consumer, null, function (e) {
            var t = e.handleNextSlide
            return u.a.createElement(d.a, o()({}, s, { headline: v, primaryAction: a ? k(t) : void 0, subtext: P }))
          })
        return 'function' == typeof r ? u.a.createElement(p.a, { onImpression: r }, E) : E
      }
      ;(h.defaultProps = { shouldRenderBorder: !1 }), (t.a = h)
    },
    PnKw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return j
      })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
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
        h = n.n(g),
        v = n('TIdA'),
        P = n('t62R'),
        k = n('A91F'),
        E = n('/yvb'),
        x = n('rHpw'),
        C = 'inlinePrompt',
        O = 'inlinePrompt-primaryAction',
        I = 'inlinePrompt-secondaryAction',
        w = 'inlinePrompt-centeredImageContainer',
        A = n('MWbm')
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
            r = y()(e)
          if (t) {
            var o = y()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var j = (function (e) {
        u()(n, e)
        var t = T(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            b()(l()(e), '_renderImage', function (e) {
              var t = h.a.createElement(v.a, {
                accessibilityLabel: '',
                aspectMode: k.a.exact(e.width / e.height),
                backgroundColor: e.backgroundColor,
                image: e,
              })
              return e.isCentered
                ? h.a.createElement(
                    A.a,
                    { style: R.centeredImage, testID: w },
                    h.a.createElement(
                      A.a,
                      { style: { width: ''.concat(e.width, 'px'), height: ''.concat(e.height, 'px') } },
                      t,
                    ),
                  )
                : t
            }),
            b()(l()(e), '_renderTitle', function () {
              var t = e.props.headline
              return t
                ? h.a.createElement(
                    P.b,
                    {
                      accessibilityRole: 'heading',
                      align: 'left',
                      size: 'title4',
                      style: R.flexGrow,
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
                ? h.a.createElement(
                    P.b,
                    { align: 'left', color: 'gray700', style: e.styles.body, withHashflags: !0 },
                    t,
                  )
                : null
            }),
            b()(l()(e), '_renderAction', function (t) {
              var n = t.action,
                r = t.buttonSize,
                o = t.buttonType,
                a = t.style,
                i = t.testID,
                c = e.props.secondaryAction,
                l = n.link,
                s = n.onClick,
                u = n.text
              return h.a.createElement(
                A.a,
                { style: [e.styles.actionContainer, a, { justifyContent: 'flex-start' }], testID: i },
                h.a.createElement(
                  E.a,
                  { link: l, onPress: s, size: r, style: { width: c ? '100%' : 'auto' }, type: o },
                  u,
                ),
              )
            }),
            e
          )
        }
        return (
          i()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.image,
                  n = e.primaryAction,
                  r = e.rightControl,
                  o = e.secondaryAction,
                  a = e.shouldRenderBorder
                return h.a.createElement(
                  A.a,
                  { style: a ? [B.root, B.rootMargin] : R.root },
                  h.a.createElement(
                    h.a.Fragment,
                    null,
                    t ? this._renderImage(t) : null,
                    h.a.createElement(
                      A.a,
                      { style: this.styles.rootPadding, testID: C },
                      this._renderTitle(),
                      this._renderBodyText(),
                      n
                        ? this._renderAction({
                            action: n,
                            buttonType: 'primaryFilled',
                            style: this.styles.primaryAction,
                            buttonSize: 'large',
                            testID: O,
                          })
                        : null,
                      o
                        ? this._renderAction({
                            action: o,
                            buttonType: 'primaryOutlined',
                            style: this.styles.secondaryAction,
                            buttonSize: 'large',
                            testID: I,
                          })
                        : null,
                    ),
                  ),
                  r ? h.a.createElement(A.a, { style: R.rightControl }, r) : null,
                )
              },
            },
            {
              key: 'styles',
              get: function () {
                return this.props.isCompact ? M : D
              },
            },
          ]),
          n
        )
      })(h.a.Component)
      b()(j, 'defaultProps', { shouldRenderBorder: !1 })
      var R = x.a.create(function (e) {
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
        B = x.a.create(function (e) {
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
        D = x.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space32 },
            body: { marginTop: e.spaces.space8 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space28 },
            secondaryAction: { marginTop: e.spaces.space16 },
          }
        }),
        M = x.a.create(function (e) {
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
        o = n.n(r),
        a = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        i = Object(a.a)({
          loader: function () {
            return n.e(169).then(n.bind(null, 'ACNv'))
          },
        }),
        c = n('4bW+'),
        l = n('IG7M'),
        s = n('rHpw'),
        u = n('Irs7'),
        d = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          r = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return o.a.createElement(l.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return o.a.createElement(i, { actionItems: n, onClose: e })
            },
            style: d.curationControl,
            testID: c.a.caret,
            withDarkBackground: r,
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
        o = n.n(r),
        a = n('fs1G'),
        i = o.a.createContext({ handleNextSlide: a.a })
    },
  },
])
//# sourceMappingURL=WIPED
