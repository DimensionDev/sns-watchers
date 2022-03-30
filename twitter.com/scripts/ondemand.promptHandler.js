;(window.webpackJsonp = window.webpackJsonp || []).push([
  [356],
  {
    '3ukl': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ezF+'),
        i = n('EIk2'),
        c = (n('uFXj'), n('ERkP')),
        l = n.n(c),
        s = n('IMYl'),
        p = n('hOZg'),
        u = function (e) {
          return 'IconCheckmark' === e
            ? l.a.createElement(s.a, null)
            : 'IconClose' === e
            ? l.a.createElement(p.a, null)
            : void 0
        },
        d =
          (n('yH/f'),
          Object.freeze({ Compact: 'Compact', Normal: 'Normal', Large: 'Large', ThumbsUpAndDown: 'ThumbsUpAndDown' })),
        m = n('Irs7'),
        y = n('MWbm'),
        g = n('PbQQ'),
        f = n('/yvb'),
        b = n('t62R'),
        h = n('rHpw').a.create(function (e) {
          return {
            button: { margin: '1ex' },
            buttonContainer: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' },
            secondHalf: { width: '50%', display: 'grid', justifyContent: 'end' },
            firstHalf: { width: '50%', flexDirection: 'column', justifyContent: 'center' },
            root: { flexDirection: 'row', justifyContent: 'space-between' },
            promptContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            survey: {
              display: 'flex',
              borderRadius: e.spaces.space8,
              padding: e.spaces.space12,
              backgroundColor: e.colors.orange0,
              alignItems: 'center',
              minHeight: e.spaces.space64,
            },
            icon: { marginLeft: e.spaces.space12 },
          }
        }),
        C = function (e) {
          var t = e.confirmation,
            n = e.displayType,
            a = e.isRelevantIcon,
            r = e.isRelevantOnClick,
            o = e.isRelevantText,
            i = e.notRelevantIcon,
            c = e.notRelevantOnClick,
            s = e.notRelevantText,
            p = e.onIsRelevant,
            C = e.showConfirmation,
            v = e.title,
            E = Object(m.b)(),
            I = n === d.ThumbsUpAndDown,
            x = I,
            k = g.b.useOpaqueIdentifier(),
            R = function () {
              E.scribe({ element: 'is_relevant', action: 'click' }), p && p(), r()
            },
            w = function () {
              E.scribe({ element: 'not_relevant', action: 'click' }), c()
            },
            T = function (e, t, n) {
              return l.a.createElement(
                f.a,
                {
                  accessibilityLabel: t,
                  icon: n ? u(n) : void 0,
                  onPress: e,
                  size: n ? 'medium' : 'xSmall',
                  style: n ? h.icon : h.button,
                  type: I ? 'primaryOutlined' : 'brandFilled',
                },
                n ? null : t,
              )
            }
          return l.a.createElement(
            y.a,
            { accessibilityLabelledBy: k, accessibilityRole: 'group', style: h.promptContainer },
            C
              ? l.a.createElement(
                  y.a,
                  { accessibilityRole: 'alert' },
                  l.a.createElement(b.b, { style: I && h.survey }, t),
                )
              : l.a.createElement(
                  y.a,
                  { style: [h.root, I && h.survey] },
                  l.a.createElement(y.a, { style: h.firstHalf }, l.a.createElement(b.b, { nativeID: k }, v)),
                  l.a.createElement(
                    y.a,
                    { style: h.secondHalf },
                    l.a.createElement(
                      y.a,
                      { style: h.buttonContainer },
                      x
                        ? l.a.createElement(l.a.Fragment, null, T(R, o, a), T(w, s, i))
                        : l.a.createElement(l.a.Fragment, null, T(w, s, i), T(R, o, a)),
                    ),
                  ),
                ),
          )
        },
        v = n('zh9S'),
        E = n('Rp9C'),
        I = n('pbku'),
        x = n('0KEI'),
        k = function (e, t) {
          if (e && e === d.ThumbsUpAndDown) return t ? 'IconCheckmark' : 'IconClose'
        },
        R = o.g({
          component: C,
          bindActions: function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('RELEVANCE_PROMPT'),
              scribe: v.c,
              processCallback: i.a,
              applyReactionInstructions: t.applyReactionInstructions,
              updateEntry: t.updateEntry,
            }
          },
          createProps: function (e) {
            var t = e.actions,
              n = t.applyReactionInstructions,
              a = t.createLocalApiErrorHandler,
              o = t.processCallback,
              i = (t.scribe, t.updateEntry),
              c = e.entry,
              l = c.content,
              s = null != l && l.relevancePrompt ? l.relevancePrompt : null
            if (!s) return null
            return {
              onIsRelevant: function () {
                n({ entry: c, triggerName: I.a.ON_IS_RELEVANT })
              },
              title: s.title,
              confirmation: s.confirmation,
              isRelevantText: s.isRelevantText,
              notRelevantText: s.notRelevantText,
              isRelevantIcon: k(s.displayType, !0),
              notRelevantIcon: k(s.displayType, !1),
              isRelevantOnClick: function () {
                i(c.entryId, { relevancePrompt: r()(r()({}, s), {}, { showConfirmation: !0 }) }),
                  o(s.isRelevantCallback).catch(a())
              },
              notRelevantOnClick: function () {
                i(c.entryId, { relevancePrompt: r()(r()({}, s), {}, { showConfirmation: !0 }) }),
                  o(s.notRelevantCallback).catch(a())
              },
              displayType: s.displayType,
              showConfirmation: s.showConfirmation,
            }
          },
          getScribeDataItem: function (e) {
            return E.a.forRelevancePrompt(e.itemMetadata.clientEventInfo)
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.scribeData,
              a = e.scribeNamespace
            t(r()(r()({}, a), {}, { element: 'relevance_prompt', action: 'impression' }), n)
          },
        })
      t.default = R
    },
    EycW: function (e, t, n) {
      'use strict'
      n('z84I'), n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('t62R'),
        i = n('uCrx'),
        c = n('PnKw'),
        l = n('rHpw'),
        s = 'onboardingLikesGuide-emptyHeart',
        p = 'onboardingLikesGuide-filledHeart',
        u = n('MWbm'),
        d = r.a.memo(function () {
          return r.a.createElement(i.a, { style: y.emptyHeart, testID: s })
        }),
        m = r.a.memo(function () {
          return r.a.createElement(i.a, { style: y.filledHeart, testID: p })
        }),
        y = l.a.create(function (e) {
          return {
            actionContext: { marginLeft: e.spaces.space8, display: 'inline' },
            actionGuide: {
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: e.spaces.space16,
              paddingRight: e.spaces.space16,
            },
            actionGuideLeft: { flexGrow: '1', display: 'flex', flexDirection: 'row', alignItems: 'center' },
            actionGuideRight: { flexGrow: '1', display: 'block', textAlign: 'right' },
            actionIcon: { display: 'inline', marginLeft: e.spaces.space8 },
            container: { position: 'relative', marginTop: e.spaces.space4 },
            headerText: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 },
            actionContextIconContainer: { display: 'inline' },
            actionContextIcon: {
              color: e.colors.magenta500,
              width: 'calc('.concat(e.spaces.space16, ' - ').concat(e.spaces.space2, ')'),
              height: 'calc('.concat(e.spaces.space16, ' - ').concat(e.spaces.space2, ')'),
            },
            actionContextIconHighlight: {
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: e.colors.magenta50,
              borderRadius: '50%',
              width: 'calc('.concat(e.spaces.space32, ' - ').concat(e.spaces.space4, ')'),
              height: 'calc('.concat(e.spaces.space32, ' - ').concat(e.spaces.space4, ')'),
              justifyContent: 'center',
              alignItems: 'center',
            },
            iconImage: { width: e.spaces.space64, height: e.spaces.space72 },
            bodyText: { color: e.colors.gray700, marginBottom: e.spaces.space16 },
            iconContainer: { display: 'block' },
            rightControl: { position: 'absolute', top: '0px', right: '0px' },
            emptyHeart: { color: e.colors.gray100, width: e.spaces.space20, height: e.spaces.space20 },
            filledHeart: { color: e.colors.magenta500, width: e.spaces.space20, height: e.spaces.space20 },
          }
        })
      t.a = function (e) {
        for (
          var t = e.bodyText,
            n = e.currentLikeCount,
            a = e.headerIconUrl,
            l = e.headerText,
            s = e.likeContext,
            p = e.rightControl,
            g = e.totalLikeCount,
            f = [],
            b = 0;
          b < g;
          b++
        )
          f.push(b < n ? r.a.createElement(m, null) : r.a.createElement(d, null))
        return r.a.createElement(
          u.a,
          { style: y.container },
          r.a.createElement(c.a, {
            headline: l,
            image: a ? { url: a, width: 68, height: 68, isCentered: !0 } : void 0,
            isCompact: !0,
            rightControl: p,
            subtext: t,
          }),
          r.a.createElement(
            u.a,
            { style: y.actionGuide },
            r.a.createElement(
              u.a,
              { accessibilityLabel: s, style: y.actionGuideLeft },
              r.a.createElement(
                u.a,
                { style: y.actionContextIconContainer },
                r.a.createElement(
                  u.a,
                  { style: y.actionContextIconHighlight },
                  r.a.createElement(i.a, { style: y.actionContextIcon }),
                ),
              ),
              r.a.createElement(
                u.a,
                { style: y.actionContext },
                r.a.createElement(o.b, { size: 'subtext2', weight: 'bold' }, s),
              ),
            ),
            r.a.createElement(
              u.a,
              { accessibilityLabel: s, accessibilityLiveRegion: 'polite', style: y.actionGuideRight },
              f.map(function (e, t) {
                return r.a.createElement(u.a, { key: 'action-icon-'.concat(t), style: y.actionIcon }, e)
              }),
            ),
          ),
        )
      }
    },
    PnKw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
      })
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        p = n.n(s),
        u = n('2VqO'),
        d = n.n(u),
        m = n('KEM+'),
        y = n.n(m),
        g = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        f = n.n(g),
        b = n('TIdA'),
        h = n('t62R'),
        C = n('A91F'),
        v = n('/yvb'),
        E = n('rHpw'),
        I = 'inlinePrompt',
        x = 'inlinePrompt-primaryAction',
        k = 'inlinePrompt-secondaryAction',
        R = 'inlinePrompt-centeredImageContainer',
        w = n('MWbm'),
        T = (function (e) {
          p()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(l()(e), '_renderImage', function (e, t) {
                var n = f.a.createElement(b.a, {
                  accessibilityLabel: '',
                  aspectMode: C.a.exact(e.width / e.height),
                  backgroundColor: e.backgroundColor,
                  customVariants: t,
                  image: e,
                })
                return e.isCentered
                  ? f.a.createElement(
                      w.a,
                      { style: L.centeredImage, testID: R },
                      f.a.createElement(
                        w.a,
                        { style: { width: ''.concat(e.width, 'px'), height: ''.concat(e.height, 'px') } },
                        n,
                      ),
                    )
                  : n
              }),
              y()(l()(e), '_renderTitle', function () {
                var t = e.props.headline
                return t
                  ? f.a.createElement(
                      h.b,
                      {
                        accessibilityRole: 'heading',
                        align: 'left',
                        size: 'title4',
                        style: L.flexGrow,
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
                  ? f.a.createElement(
                      h.b,
                      { align: 'left', color: 'gray700', style: e.styles.body, withHashflags: !0 },
                      t,
                    )
                  : null
              }),
              y()(l()(e), '_renderAction', function (t) {
                var n = t.action,
                  a = t.buttonSize,
                  r = t.buttonType,
                  o = t.style,
                  i = t.testID,
                  c = e.props.secondaryAction,
                  l = n.link,
                  s = n.onClick,
                  p = n.text
                return f.a.createElement(
                  w.a,
                  { style: [e.styles.actionContainer, o, { justifyContent: 'flex-start' }], testID: i },
                  f.a.createElement(
                    v.a,
                    { link: l, onPress: s, size: a, style: { width: c ? '100%' : 'auto' }, type: r },
                    p,
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
                    n = e.imageVariants,
                    a = e.primaryAction,
                    r = e.rightControl,
                    o = e.secondaryAction,
                    i = e.shouldRenderBorder
                  return f.a.createElement(
                    w.a,
                    { style: i ? [A.root, A.rootMargin] : L.root },
                    f.a.createElement(
                      f.a.Fragment,
                      null,
                      t ? this._renderImage(t, n) : null,
                      f.a.createElement(
                        w.a,
                        { style: this.styles.rootPadding, testID: I },
                        this._renderTitle(),
                        this._renderBodyText(),
                        a
                          ? this._renderAction({
                              action: a,
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
                              testID: k,
                            })
                          : null,
                      ),
                    ),
                    r ? f.a.createElement(w.a, { style: L.rightControl }, r) : null,
                  )
                },
              },
              {
                key: 'styles',
                get: function () {
                  return this.props.isCompact ? D : P
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      y()(T, 'defaultProps', { shouldRenderBorder: !1 })
      var L = E.a.create(function (e) {
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
        A = E.a.create(function (e) {
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
        P = E.a.create(function (e) {
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
      var a = n('ERkP'),
        r = n.n(a),
        o = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        i = Object(o.a)({
          loader: function () {
            return n.e(174).then(n.bind(null, 'ACNv'))
          },
        }),
        c = n('4bW+'),
        l = n('IG7M'),
        s = n('rHpw'),
        p = n('Irs7'),
        u = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(p.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          a = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return r.a.createElement(l.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return r.a.createElement(i, { actionItems: n, onClose: e })
            },
            style: u.curationControl,
            testID: c.a.caret,
            withDarkBackground: a,
          })
        }
        return null
      })
    },
    YIsX: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('yiKp'),
        r = n.n(a),
        o = n('ezF+'),
        i = n('ERkP'),
        c = n.n(i),
        l = n('RoyM'),
        s = n('3XMw'),
        p = n.n(s),
        u = n('EycW'),
        d = n('zh9S'),
        m = n('G6rE'),
        y = p.a.a682906d,
        g = o.g({
          component: u.a,
          bindActions: function (e) {
            e.module
            return { scribe: d.c }
          },
          selectData: function () {
            return {
              loggedInUser: function (e) {
                return m.e.selectLoggedInUser(e)
              },
            }
          },
          createProps: function (e) {
            var t,
              n,
              a = e.data.loggedInUser,
              r = e.entry,
              o = e.feedbackItems,
              i = r.content,
              s = null != i && i.onboardingLikesStartPrompt ? (null == i ? void 0 : i.onboardingLikesStartPrompt) : null
            if (!s) return null
            var p = (null == a ? void 0 : a.favourites_count) || 0,
              u = s.likesNeededToCompleteOnboarding,
              d = Math.max(0, u - p)
            return {
              bodyText: null === (t = s.bodyRichText) || void 0 === t ? void 0 : t.text,
              currentLikeCount: p,
              headerIconUrl: s.headerIconUrl,
              headerText: null === (n = s.headerRichText) || void 0 === n ? void 0 : n.text,
              likeContext: y({ count: d }),
              rightControl: o.length ? c.a.createElement(l.a, { feedbackItems: o }) : void 0,
              totalLikeCount: u,
            }
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.scribeNamespace
            t(r()(r()({}, n), {}, { action: 'impression' }))
          },
        })
      t.default = g
    },
    pbku: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f')
      var a = Object.freeze({
        ON_LINGER: 'onLinger',
        ON_IS_RELEVANT: 'onIsRelevant',
        ON_SHOW_MORE: 'onShowMore',
        ON_LIKE: 'onLike',
      })
    },
  },
])
//# sourceMappingURL=WIPED
