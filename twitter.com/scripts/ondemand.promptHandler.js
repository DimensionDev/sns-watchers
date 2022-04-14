;(window.webpackJsonp = window.webpackJsonp || []).push([
  [355],
  {
    '3ukl': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ezF+'),
        r = n('yiKp'),
        o = n.n(r),
        i = (n('uFXj'), n('ERkP')),
        c = n.n(i),
        l = n('EIk2'),
        s = n('rxPX'),
        p = n('0KEI'),
        u = Object(s.a)().propsFromActions(function (e) {
          var t = e.module
          return {
            applyReactionInstructions: t.applyReactionInstructions,
            createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('RELEVANCE_PROMPT'),
            processCallback: l.a,
            updateEntry: t.updateEntry,
          }
        }),
        d = n('IMYl'),
        m = n('hOZg'),
        y = function (e) {
          return 'IconCheckmark' === e
            ? c.a.createElement(d.a, null)
            : 'IconClose' === e
            ? c.a.createElement(m.a, null)
            : void 0
        },
        g =
          (n('yH/f'),
          Object.freeze({ Compact: 'Compact', Normal: 'Normal', Large: 'Large', ThumbsUpAndDown: 'ThumbsUpAndDown' })),
        f = n('pbku'),
        b = n('Irs7'),
        h = n('MWbm'),
        C = n('PbQQ'),
        E = n('/yvb'),
        I = n('t62R'),
        x = n('rHpw'),
        v = function (e, t) {
          if (e && e === g.ThumbsUpAndDown) return t ? 'IconCheckmark' : 'IconClose'
        },
        k = function (e) {
          var t = e.applyReactionInstructions,
            n = e.createLocalApiErrorHandler,
            a = e.entry,
            r = e.processCallback,
            i = e.updateEntry,
            l = a.content.relevancePrompt && a.content.relevancePrompt,
            s = l || {},
            p = s.confirmation,
            u = s.displayType,
            d = s.isRelevantCallback,
            m = s.isRelevantText,
            x = s.notRelevantCallback,
            k = s.notRelevantText,
            R = s.showConfirmation,
            T = s.title,
            L = Object(b.b)(),
            A = v(u, !0),
            H = v(u, !1),
            P = u === g.ThumbsUpAndDown,
            D = P,
            O = C.b.useOpaqueIdentifier()
          c.a.useEffect(function () {
            L.scribe({ element: 'relevance_prompt', action: 'impression' })
          }, [])
          var _ = c.a.useCallback(
              function (e) {
                l && i(a.entryId, { relevancePrompt: o()(o()({}, l), {}, { showConfirmation: !0 }) }), r(e).catch(n())
              },
              [n, a.entryId, r, l, i],
            ),
            M = c.a.useCallback(
              function () {
                L.scribe({ element: 'is_relevant', action: 'click' }),
                  _(d),
                  t({ entry: a, triggerName: f.a.ON_IS_RELEVANT })
              },
              [L, t, a, d, _],
            ),
            G = c.a.useCallback(
              function () {
                L.scribe({ element: 'not_relevant', action: 'click' }), _(x)
              },
              [L, x, _],
            ),
            j = function (e, t, n) {
              return c.a.createElement(
                E.a,
                {
                  accessibilityLabel: t,
                  icon: n ? y(n) : void 0,
                  onPress: e,
                  size: n ? 'medium' : 'xSmall',
                  style: n ? w.icon : w.button,
                  type: P ? 'primaryOutlined' : 'brandFilled',
                },
                n ? null : t,
              )
            }
          return c.a.createElement(
            h.a,
            { accessibilityLabelledBy: O, accessibilityRole: 'group', style: w.promptContainer },
            R
              ? c.a.createElement(
                  h.a,
                  { accessibilityRole: 'alert' },
                  c.a.createElement(I.b, { style: P && w.survey }, p),
                )
              : c.a.createElement(
                  h.a,
                  { style: [w.root, P && w.survey] },
                  c.a.createElement(h.a, { style: w.firstHalf }, c.a.createElement(I.b, { nativeID: O }, T)),
                  c.a.createElement(
                    h.a,
                    { style: w.secondHalf },
                    c.a.createElement(
                      h.a,
                      { style: w.buttonContainer },
                      D
                        ? c.a.createElement(c.a.Fragment, null, j(M, m, A), j(G, k, H))
                        : c.a.createElement(c.a.Fragment, null, j(G, k, H), j(M, m, A)),
                    ),
                  ),
                ),
          )
        },
        w = x.a.create(function (e) {
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
        R = u(c.a.memo(k)),
        T = n('Rp9C'),
        L = a
          .b({
            component: R,
            getScribeDataItem: function (e) {
              return T.a.forRelevancePrompt(e.itemMetadata.clientEventInfo)
            },
          })
          .getHandler()
      t.default = L
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
        E = n('/yvb'),
        I = n('rHpw'),
        x = 'inlinePrompt',
        v = 'inlinePrompt-primaryAction',
        k = 'inlinePrompt-secondaryAction',
        w = 'inlinePrompt-centeredImageContainer',
        R = n('MWbm'),
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
                      R.a,
                      { style: L.centeredImage, testID: w },
                      f.a.createElement(
                        R.a,
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
                        size: 'title3',
                        style: L.flexGrow,
                        weight: 'heavy',
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
                  R.a,
                  { style: [e.styles.actionContainer, o, { justifyContent: 'flex-start' }], testID: i },
                  f.a.createElement(
                    E.a,
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
                    R.a,
                    { style: i ? [A.root, A.rootMargin] : L.root },
                    f.a.createElement(
                      f.a.Fragment,
                      null,
                      t ? this._renderImage(t, n) : null,
                      f.a.createElement(
                        R.a,
                        { style: this.styles.rootPadding, testID: x },
                        this._renderTitle(),
                        this._renderBodyText(),
                        a
                          ? this._renderAction({
                              action: a,
                              buttonType: 'primaryFilled',
                              style: this.styles.primaryAction,
                              buttonSize: 'large',
                              testID: v,
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
                    r ? f.a.createElement(R.a, { style: L.rightControl }, r) : null,
                  )
                },
              },
              {
                key: 'styles',
                get: function () {
                  return this.props.isCompact ? P : H
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      y()(T, 'defaultProps', { shouldRenderBorder: !1 })
      var L = I.a.create(function (e) {
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
        A = I.a.create(function (e) {
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
        H = I.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space32 },
            body: { marginTop: e.spaces.space8 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space28 },
            secondaryAction: { marginTop: e.spaces.space16 },
          }
        }),
        P = I.a.create(function (e) {
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
      var a = n('ezF+'),
        r = n('ERkP'),
        o = n.n(r),
        i = n('G6rE'),
        c = n('rxPX'),
        l = function (e, t) {
          return i.e.selectLoggedInUser(e)
        },
        s = Object(c.a)().propsFromState(function () {
          return { loggedInUser: l }
        }),
        p = n('RoyM'),
        u = n('3XMw'),
        d = n.n(u),
        m = n('EycW'),
        y = n('Irs7'),
        g = d.a.a682906d,
        f = function (e) {
          var t,
            n,
            a = e.entry,
            r = e.feedbackItems,
            i = e.loggedInUser,
            c = Object(y.b)(),
            l = a.content.onboardingLikesStartPrompt || void 0,
            s = (null == i ? void 0 : i.favourites_count) || 0,
            u = (null == l ? void 0 : l.likesNeededToCompleteOnboarding) || 0,
            d = Math.max(0, u - s),
            f = o.a.useMemo(
              function () {
                return null != r && r.length ? o.a.createElement(p.a, { feedbackItems: r }) : void 0
              },
              [r],
            )
          return (
            o.a.useEffect(function () {
              c.scribeAction('impression')
            }, []),
            o.a.createElement(m.a, {
              bodyText: null == l || null === (t = l.bodyRichText) || void 0 === t ? void 0 : t.text,
              currentLikeCount: s,
              headerIconUrl: null == l ? void 0 : l.headerIconUrl,
              headerText: null == l || null === (n = l.headerRichText) || void 0 === n ? void 0 : n.text,
              likeContext: g({ count: d }),
              rightControl: f,
              totalLikeCount: u,
            })
          )
        },
        b = (s(f), a.b({ component: f }).getHandler())
      t.default = b
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
