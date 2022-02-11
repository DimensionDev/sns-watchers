;(window.webpackJsonp = window.webpackJsonp || []).push([
  [220],
  {
    J23q: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        o = n('97Jx'),
        a = n.n(o),
        i = n('m3Bd'),
        c = n.n(i),
        l = (n('vrRf'), n('jwue'), n('7x/C'), n('+oxZ'), n('ERkP')),
        s = n.n(l),
        d = n('yiKp'),
        u = n.n(d),
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
        g = n('0KEI'),
        b = function (e, t) {
          var n = t.entry
          return n.content.content.pagedCarouselFeedbackItem
            ? void 0
            : n.content.content.message
            ? n.content.content.message
            : t.entry.content
        },
        h = function (e, t) {
          var n,
            r = null === (n = b(0, t)) || void 0 === n ? void 0 : n.content
          return (r && Object(p.a)(r)) || void 0
        },
        v = function (e, t) {
          var n,
            r = null === (n = b(0, t)) || void 0 === n ? void 0 : n.content
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
          return null === (n = b(0, t)) || void 0 === n ? void 0 : n.impressionCallbacks
        },
        C = function (e, t) {
          return !!t.entry.content.content.message
        },
        x = function (e, t) {
          return t.entry.entryId
        },
        E = function (e, t) {
          return t.feedbackItems
        },
        I = Object(f.a)()
          .propsFromState(function () {
            return {
              displayType: h,
              entryId: x,
              feedbackItems: E,
              messagePrompt: v,
              impressionCallbacks: k,
              shouldRenderBorder: C,
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
                u()(u()({}, a.headerImage.imageVariants[0]), {}, { backgroundColor: a.headerImage.backgroundColor })
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
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)(
                'URT_TIMELINE_MESSAGE',
              ),
              impressEntry: t.impressEntry,
              processCallback: y.a,
              removeEntry: t.removeEntry,
            }
          })
          .withAnalytics(),
        P = n('RoyM'),
        A = n('caTy'),
        T = n('Lz2T'),
        w = n('ywYn'),
        R = n('FGLp'),
        B = [
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
        ],
        D = I(function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = (e.entry, e.entryId),
            o = e.feedbackItems,
            i = e.impressEntry,
            l = e.impressionCallbacks,
            d = (e.module, e.primaryButtonAction),
            u = e.processCallback,
            p = e.removeEntry,
            m = e.secondaryButtonAction,
            y = c()(e, B),
            f = t.contextualScribeNamespace.element,
            g = n(),
            b = function (e, n) {
              var o
              return e
                ? {
                    link:
                      ((o = e.action.url),
                      o &&
                        Object(A.b)({
                          url: o,
                          urlType: o.indexOf('twitter://') >= 0 ? w.a.DeepLink : w.a.ExternalUrl,
                        })),
                    onClick: function () {
                      var o = (null == e ? void 0 : e.action.onClickCallbacks) || []
                      t.scribe({ element: f || n, action: 'click' }),
                        o &&
                          o.forEach(function (e) {
                            u(e).catch(g)
                          }),
                        null != e && e.action.dismissOnClick && p(r)
                    },
                    text: e.text,
                  }
                : void 0
            },
            h = b(d, 'primary_action'),
            v = b(m, 'secondary_action'),
            k =
              null != o && o.length ? s.a.createElement(P.a, { feedbackItems: o, isDisplayedOnMedia: !!e.image }) : null
          return (
            Object(R.a)(function () {
              t.scribeAction('impression'), l && i({ entryId: r, callbacks: l })
            }),
            s.a.createElement(T.a, a()({}, y, { primaryAction: h, rightControl: k, secondaryAction: v }))
          )
        }),
        O = n('Rp9C')
      t.default = function (e) {
        var t = e.withGaps
        return r
          .b({
            component: D,
            divider: { bottom: t, top: t },
            getScribeDataItem: function (e) {
              return O.a.forMessage(e.itemMetadata.clientEventInfo)
            },
          })
          .getHandler()
      }
    },
    Lz2T: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        a = n('yiKp'),
        i = n.n(a),
        c = n('m3Bd'),
        l = n.n(c),
        s = n('ERkP'),
        d = n.n(s),
        u = n('PnKw'),
        p = n('vYiB'),
        m = n('X3+4'),
        y = n('rcen'),
        f = n('k89r'),
        g = ['bodyRichText', 'bodyText', 'onImpression', 'primaryAction', 'titleRichText', 'titleText']
      function b(e) {
        var t = e.bodyRichText,
          n = e.bodyText,
          r = e.onImpression,
          a = e.primaryAction,
          c = e.titleRichText,
          s = e.titleText,
          b = l()(e, g),
          h = Object(f.a)(),
          v = function () {
            h.scribe({ action: 'click' })
          },
          k = c
            ? d.a.createElement(y.a, { entities: c.entities, onEntityClick: v, text: c.text })
            : s && s.length
            ? s
            : null,
          C = t
            ? d.a.createElement(y.a, { entities: t.entities, onEntityClick: v, text: t.text })
            : n && n.length
            ? n
            : null,
          x = function (e) {
            return i()(
              i()({}, a),
              {},
              {
                onClick: function (t) {
                  ;(null == a ? void 0 : a.onClick) && a.onClick(t), e(t)
                },
              },
            )
          },
          E = d.a.createElement(m.a.Consumer, null, function (e) {
            var t = e.handleNextSlide
            return d.a.createElement(u.a, o()({}, b, { headline: k, primaryAction: a ? x(t) : void 0, subtext: C }))
          })
        return 'function' == typeof r ? d.a.createElement(p.a, { onImpression: r }, E) : E
      }
      ;(b.defaultProps = { shouldRenderBorder: !1 }), (t.a = b)
    },
    PnKw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
      })
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        y = n.n(m),
        f = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        g = n.n(f),
        b = n('TIdA'),
        h = n('t62R'),
        v = n('A91F'),
        k = n('/yvb'),
        C = n('rHpw'),
        x = 'inlinePrompt',
        E = 'inlinePrompt-primaryAction',
        I = 'inlinePrompt-secondaryAction',
        P = 'inlinePrompt-centeredImageContainer',
        A = n('MWbm'),
        T = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(l()(e), '_renderImage', function (e) {
                var t = g.a.createElement(b.a, {
                  accessibilityLabel: '',
                  aspectMode: v.a.exact(e.width / e.height),
                  backgroundColor: e.backgroundColor,
                  image: e,
                })
                return e.isCentered
                  ? g.a.createElement(
                      A.a,
                      { style: w.centeredImage, testID: P },
                      g.a.createElement(
                        A.a,
                        { style: { width: ''.concat(e.width, 'px'), height: ''.concat(e.height, 'px') } },
                        t,
                      ),
                    )
                  : t
              }),
              y()(l()(e), '_renderTitle', function () {
                var t = e.props.headline
                return t
                  ? g.a.createElement(
                      h.b,
                      {
                        accessibilityRole: 'heading',
                        align: 'left',
                        size: 'title4',
                        style: w.flexGrow,
                        weight: 'bold',
                        withHashflags: !0,
                      },
                      t,
                    )
                  : null
              }),
              y()(l()(e), '_renderBodyText', function () {
                var t = e.props.subtext
                return t
                  ? g.a.createElement(
                      h.b,
                      { align: 'left', color: 'gray700', style: e.styles.body, withHashflags: !0 },
                      t,
                    )
                  : null
              }),
              y()(l()(e), '_renderAction', function (t) {
                var n = t.action,
                  r = t.buttonSize,
                  o = t.buttonType,
                  a = t.style,
                  i = t.testID,
                  c = e.props.secondaryAction,
                  l = n.link,
                  s = n.onClick,
                  d = n.text
                return g.a.createElement(
                  A.a,
                  { style: [e.styles.actionContainer, a, { justifyContent: 'flex-start' }], testID: i },
                  g.a.createElement(
                    k.a,
                    { link: l, onPress: s, size: r, style: { width: c ? '100%' : 'auto' }, type: o },
                    d,
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
                  return g.a.createElement(
                    A.a,
                    { style: a ? [R.root, R.rootMargin] : w.root },
                    g.a.createElement(
                      g.a.Fragment,
                      null,
                      t ? this._renderImage(t) : null,
                      g.a.createElement(
                        A.a,
                        { style: this.styles.rootPadding, testID: x },
                        this._renderTitle(),
                        this._renderBodyText(),
                        n
                          ? this._renderAction({
                              action: n,
                              buttonType: 'primaryFilled',
                              style: this.styles.primaryAction,
                              buttonSize: 'large',
                              testID: E,
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
                    r ? g.a.createElement(A.a, { style: w.rightControl }, r) : null,
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
        })(g.a.Component)
      y()(T, 'defaultProps', { shouldRenderBorder: !1 })
      var w = C.a.create(function (e) {
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
        R = C.a.create(function (e) {
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
        B = C.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space32 },
            body: { marginTop: e.spaces.space8 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space28 },
            secondaryAction: { marginTop: e.spaces.space16 },
          }
        }),
        D = C.a.create(function (e) {
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
        a = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        i = Object(a.a)({
          loader: function () {
            return n.e(173).then(n.bind(null, 'ACNv'))
          },
        }),
        c = n('4bW+'),
        l = n('IG7M'),
        s = n('rHpw'),
        d = n('Irs7'),
        u = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(d.a)(function (e) {
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
            style: u.curationControl,
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
