;(window.webpackJsonp = window.webpackJsonp || []).push([
  [226, 175],
  {
    '0mK8': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'c', function () {
          return p
        })
      n('ho0z'), n('uFXj')
      var i = n('ERkP'),
        a = n.n(i),
        r = n('MWbm'),
        o = n('GcQN'),
        c = n('PU7B'),
        s = n('/WPq'),
        l = n('78ol'),
        d = n('jV+4'),
        u = n('rHpw'),
        m = function (e) {
          var t = e.author,
            n = e.color,
            i = void 0 === n ? 'text' : n,
            r = e.size,
            o = void 0 === r ? 'subtext2' : r,
            c = e.style,
            s = e.withHoverCard,
            l = void 0 === s || s,
            u = e.withLink,
            m = void 0 !== u && u,
            h = e.withScreenName,
            p = void 0 !== h && h
          return a.a.createElement(d.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: i,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [b.authorUserName, c],
            withHoverCard: l,
            withLink: m,
            withScreenName: p,
          })
        },
        h = function (e) {
          var t = e.style
          return a.a.createElement(
            r.a,
            { style: [b.lightningBadge, t] },
            a.a.createElement(o.a, { style: b.lightningIcon }),
          )
        },
        p = function (e) {
          var t = e.icon
          return a.a.createElement(
            r.a,
            { style: b.placeholderIconContainer },
            'news' === t
              ? a.a.createElement(c.a, { style: b.placeholderIcon })
              : 'lists' === t
              ? a.a.createElement(s.a, { style: b.placeholderIcon })
              : a.a.createElement(l.a, { style: b.placeholderIcon }),
          )
        },
        b = u.a.create(function (e) {
          return {
            authorUserName: { alignItems: 'center' },
            lightningBadge: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderRadius: e.borderRadii.small,
              position: 'absolute',
            },
            lightningIcon: {
              boxSizing: 'border-box',
              color: e.colors.white,
              height: e.spaces.space20,
              paddingVertical: '0.25rem',
              paddingHorizontal: '0.2rem',
            },
            middot: { paddingHorizontal: e.spaces.space4 },
            placeholderIcon: { color: e.colors.gray700, height: '2em' },
            placeholderIconContainer: {
              alignItems: 'center',
              borderWidth: e.borderWidths.small,
              borderStyle: 'solid',
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.xLarge,
              backgroundColor: e.colors.gray0,
              height: '100%',
              justifyContent: 'center',
            },
          }
        })
    },
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('VrFO'),
        a = n.n(i),
        r = n('Y9Ll'),
        o = n.n(r),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        d = n.n(l),
        u = n('2VqO'),
        m = n.n(u),
        h = n('KEM+'),
        p = n.n(h),
        b = (n('2G9S'), n('KOtZ'), n('7x/C'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        f = n.n(b),
        v = n('3XMw'),
        g = n.n(v),
        y = n('oQhu'),
        C = n('mjJ+'),
        E = n('eb3s'),
        M = g.a.cfd2f35d,
        w = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            a()(this, n)
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              p()(s()(e), 'state', { activeConfirmation: null }),
              p()(s()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              p()(s()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              p()(s()(e), '_handleCancelConfirm', function () {
                e.setState({ activeConfirmation: null })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClose,
                    t = this.state.activeConfirmation
                  return t
                    ? this._renderConfirmation(t)
                    : f.a.createElement(C.a, {
                        cancelButtonLabel: M,
                        items: this._getProcessedActionItems(),
                        onCloseRequested: e,
                      })
                },
              },
              {
                key: '_renderConfirmation',
                value: function (e) {
                  if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm)
                  var t = e || {},
                    n = t.confirmButtonType,
                    i = t.headline,
                    a = t.label,
                    r = t.text,
                    o = t.withCancelButton
                  return f.a.createElement(E.a, {
                    confirmButtonLabel: a,
                    confirmButtonType: n,
                    headline: i,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: r,
                    withCancelButton: o,
                  })
                },
              },
              {
                key: '_getProcessedActionItems',
                value: function () {
                  var e = this.props,
                    t = e.actionItems,
                    n = e.dividerIndices,
                    i = e.onClose
                  return k(t, n, i, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        k = Object(y.a)(function (e, t, n, i) {
          return e.reduce(function (e, a, r) {
            var o = a.Icon,
              c = a.behavioralEventContext,
              s = a.confirmation,
              l = a.disabled,
              d = a.excludeFromActionMenu,
              u = a.isEmphasized,
              m = a.link,
              h = a.onClick,
              p = a.subText,
              b = a.testID,
              f = a.text
            a.withCancelButton
            if (!d) {
              var v = h
                ? function () {
                    s
                      ? s.render
                        ? i({ callback: h, render: s.render })
                        : i({
                            callback: h,
                            text: s.text,
                            headline: s.headline,
                            label: s.label,
                            confirmButtonType: s.confirmButtonType,
                            withCancelButton: s.withCancelButton,
                          })
                      : (h(), n())
                  }
                : n
              e.push({
                behavioralEventContext: c,
                disabled: l,
                Icon: o,
                isEmphasized: u,
                testID: b,
                subText: p,
                text: f,
                onClick: v,
                link: m,
                withBottomBorder: t && t.includes(r),
              })
            }
            return e
          }, [])
        })
      t.default = w
    },
    MREw: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        r = n('VrFO'),
        o = n.n(r),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        d = n.n(l),
        u = n('5Yy7'),
        m = n.n(u),
        h = n('2VqO'),
        p = n.n(h),
        b = n('KEM+'),
        f = n.n(b),
        v = (n('2G9S'), n('ERkP')),
        g = n.n(v),
        y = (n('hBvt'), n('/yvb')),
        C = n('3XMw'),
        E = n.n(C).a.abd845fd,
        M = g.a.forwardRef(function (e, t) {
          var n = e.icon,
            i = e.link,
            a = e.onPress,
            r = e.size,
            o = e.style,
            c = e.type
          return g.a.createElement(y.a, {
            accessibilityLabel: E,
            hoverLabel: { label: E },
            icon: n,
            link: i,
            onPress: a,
            pullRight: !0,
            ref: t,
            size: r,
            style: o,
            type: c || 'primaryText',
          })
        }),
        w = n('TW8A'),
        k = n('hACr'),
        I = n('Vgm9'),
        _ = n('ObVQ'),
        x = n('Rp9C'),
        O = n('MWbm'),
        P = n('Irs7'),
        A = n('rHpw'),
        S = (function (e) {
          m()(n, e)
          var t = p()(n)
          function n() {
            var e
            o()(this, n)
            for (var i = arguments.length, r = new Array(i), c = 0; c < i; c++) r[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(d()(e), '_editButton', g.a.createRef()),
              f()(d()(e), '_handleClickEdit', function () {
                e._scribeAction('edit_button', 'click')
              }),
              f()(d()(e), '_scribeAction', function (t, n) {
                var i = e.props,
                  r = i.analytics,
                  o = i.scribeNamespace
                r.scribe(a()(a()({ action: n, data: { items: [e._getScribeMomentItem()] } }, o), {}, { element: t }))
              }),
              f()(d()(e), '_focusOnEditButton', function () {
                var t, n
                e.props.isFromMomentPreviewBar &&
                  (null === (t = e._editButton) || void 0 === t ? void 0 : t.current) &&
                  (null === (n = e._editButton) || void 0 === n || n.current.focus())
              }),
              f()(d()(e), '_getEditIcon', function () {
                var t = e.props.withGrayIcons && T.colorDeepGray
                return g.a.createElement(w.a, { style: t })
              }),
              f()(d()(e), '_getScribeMomentItem', function () {
                var t = e.props,
                  n = t.isTOO,
                  i = t.lastPublishedTime,
                  a = t.momentId,
                  r = t.visibilityMode
                return x.a.getMomentItem(a, r, i, n)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.author,
                    n = e.momentId,
                    i = e.redirectOnDelete,
                    a = e.scribeNamespace,
                    r = e.size,
                    o = e.title,
                    c = e.withGrayIcons,
                    s = e.withLinkAction,
                    l = this._getEditIcon()
                  return g.a.createElement(
                    O.a,
                    { style: T.buttonContainer },
                    g.a.createElement(
                      k.a,
                      { handlers: f()({}, _.b.rightEditingPreviewPanel, this._focusOnEditButton) },
                      g.a.createElement(M, {
                        icon: l,
                        link: '/i/moment_maker/edit/'.concat(n),
                        onPress: this._handleClickEdit,
                        ref: this._editButton,
                        size: r,
                        style: T.button,
                        type: c ? 'brandText' : void 0,
                      }),
                    ),
                    g.a.createElement(I.a, {
                      author: t,
                      eventId: n,
                      iconStyle: c ? T.colorDeepGray : void 0,
                      redirectOnDelete: i,
                      scribeMomentItem: this._getScribeMomentItem(),
                      scribeNamespace: a,
                      size: r,
                      style: T.buttonExtraSpace,
                      title: o,
                      type: c ? 'brandText' : void 0,
                      withEditAction: !1,
                      withLinkAction: s,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        T = A.a.create(function (e) {
          return {
            buttonContainer: { flexDirection: 'row' },
            button: { marginRight: e.spaces.space4 },
            buttonExtraSpace: { marginStart: e.spaces.space12 },
            colorDeepGray: { color: e.colors.gray700 },
          }
        })
      t.a = Object(P.a)(S)
    },
    ObVQ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return s
        })
      n('yH/f')
      var i = n('3XMw'),
        a = n.n(i),
        r = n('oQhu'),
        o = n('OrGc'),
        c = Object.freeze({
          editingPanelNextItem: 'w',
          editingPanelPreviousItem: 'q',
          rightEditingPreviewPanel: 'g t',
          leftNavigationMenuPanel: 'g o',
          tweetDiscoveryPanel: 'g x',
          addTweet: 'i t',
          removeTweet: 'd t',
        }),
        s = Object(r.a)(function (e) {
          return [
            { description: a.a.d5696fcb, keys: o.e.openKeyboardShortcuts, universal: !0 },
            { description: a.a.e814ed10, keys: c.editingPanelNextItem, universal: !0 },
            { description: a.a.c1250b41, keys: c.editingPanelPreviousItem, universal: !0 },
            { description: a.a.ddd4bf24, keys: o.e.nextItem, universal: !0 },
            { description: a.a.ia2742f9, keys: o.e.previousItem, universal: !0 },
            { description: a.a.a8b6f61a, keys: 'space', universal: !1 },
            { description: a.a.dfe59ab8, keys: 'esc', universal: !1 },
            { description: a.a.c602967d, keys: c.rightEditingPreviewPanel, universal: !1 },
            { description: a.a.g42208cb, keys: c.leftNavigationMenuPanel, universal: !1 },
            { description: a.a.gf73b335, keys: c.tweetDiscoveryPanel, universal: !1 },
            { description: a.a.g45af04e, keys: c.addTweet, universal: !1 },
            { description: a.a.ee9c4013, keys: c.removeTweet, universal: !1 },
          ]
        })
    },
    Pb8P: function (e, t, n) {
      'use strict'
      n.r(t)
      var i,
        a,
        r,
        o = n('yiKp'),
        c = n.n(o),
        s = (n('Blm6'), n('1t7P'), n('jQ/y'), n('ezF+')),
        l = n('VPAj'),
        d = n('Fg8X'),
        u = n('97Jx'),
        m = n.n(u),
        h = n('m3Bd'),
        p = n.n(h),
        b = n('ERkP'),
        f = n.n(b),
        v = n('KEM+'),
        g = n.n(v),
        y = n('BUB3'),
        C = n('3XMw'),
        E = n.n(C),
        M = n('29/U'),
        w = n('rHpw'),
        k = n('0mK8'),
        I = n('MWbm'),
        _ = n('3dad'),
        x = n('TIdA'),
        O = n('A91F'),
        P = n('9Xij'),
        A = function (e) {
          var t = e.coverMedia,
            n = t && _.a.getOriginalImage(t)
          return f.a.createElement(
            I.a,
            { style: B.coverContainer },
            n && t
              ? f.a.createElement(x.a, {
                  accessibilityLabel: '',
                  aspectMode: O.a.SQUARE,
                  backgroundColor: _.a.getBackgroundColor(t),
                  cropCandidates: _.a.getCropCandidates(t),
                  image: n,
                })
              : f.a.createElement(
                  P.a,
                  { ratio: w.a.theme.aspectRatios.square },
                  f.a.createElement(k.c, { icon: 'lightning' }),
                ),
            t ? f.a.createElement(k.b, { style: B.lightningBadge }) : null,
          )
        },
        S = '15%',
        T = '100px',
        z = '70px',
        B = w.a.create(function (e) {
          return {
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.xLarge,
              height: S,
              maxHeight: T,
              maxWidth: T,
              minHeight: z,
              minWidth: z,
              overflow: 'hidden',
              width: S,
            },
            lightningBadge: { bottom: e.spaces.space12, left: e.spaces.space12 },
          }
        }),
        L = f.a.memo(A),
        R = w.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              justifyContent: 'space-between',
            },
            horizontalContainer: { alignItems: 'center', flexDirection: 'row' },
            leftContainer: {
              justifyContent: 'flex-start',
              maxWidth: 'calc(100% - '.concat(z, ')'),
              minWidth: 'calc(100% - '.concat(T, ')'),
              paddingRight: e.spaces.space16,
              width: 'calc(100% - '.concat(S, ')'),
            },
            topMargin: { marginTop: e.spaces.space8 },
          }
        }),
        j = n('Wms4'),
        D = n('t62R'),
        N = n('GBcw'),
        V = E.a.i7e9ecf2,
        H = function (e) {
          var t = e.hasUnpublishedChanges,
            n = e.lastModifiedTime,
            i = e.visibilityMode
          return n
            ? f.a.createElement(
                I.a,
                { style: R.horizontalContainer },
                t && i !== M.d.private
                  ? f.a.createElement(j.a, { background: 'orange500', style: U.pendingChangesLabel }, V)
                  : null,
                f.a.createElement(
                  D.b,
                  { color: 'gray700', size: 'subtext2' },
                  f.a.createElement(N.a, { humanReadable: !0, timestamp: n }),
                ),
              )
            : null
        },
        U = w.a.create(function (e) {
          return { pendingChangesLabel: { marginRight: e.spaces.space8 } }
        }),
        K = f.a.memo(H),
        W = function (e) {
          var t = e.description
          return t
            ? f.a.createElement(
                D.b,
                { color: 'gray700', numberOfLines: 3, size: 'body', style: R.topMargin, withHashflags: !0 },
                t,
              )
            : null
        },
        F = f.a.memo(W),
        G = n('MREw'),
        X = E.a.a1d5303c,
        q = E.a.cc8f8a8f,
        Q = E.a.c33a97d6,
        Y =
          ((i = {}),
          g()(i, M.d.private, 'magenta500'),
          g()(i, M.d.public, 'green500'),
          g()(i, M.d.unlisted, 'gray700'),
          i),
        J = ((a = {}), g()(a, M.d.private, X), g()(a, M.d.public, Q), g()(a, M.d.unlisted, q), a),
        Z = function (e) {
          var t = e.visibilityMode
          if (e.withAuthorControls || t !== M.d.public) {
            var n = Y[t],
              i = J[t]
            return n && i ? f.a.createElement(D.b, { color: n, weight: 'bold' }, i) : null
          }
          return null
        },
        $ = f.a.memo(Z),
        ee = n('htQn'),
        te = n('pjBI'),
        ne =
          ((r = {}),
          g()(r, M.b.CurationStudio, 'Curation Studio'),
          g()(r, M.b.MomentMakerPro, 'Moment Maker Pro'),
          g()(r, M.b.MomentMakerLite, void 0),
          g()(r, M.b.MomentMakerMobile, void 0),
          r),
        ie = { page: 'moment_maker', section: 'landing', component: 'moment_summary' },
        ae = function (e) {
          var t = e.author,
            n = e.coverMedia,
            i = e.creationSource,
            a = e.description,
            r = e.hasUnpublishedChanges,
            o = e.isCurationStudioMoment,
            c = e.isTOO,
            s = e.lastModifiedTime,
            l = e.lastPublishedTime,
            d = e.location,
            u = e.momentId,
            m = e.onClick,
            h = e.title,
            p = e.visibilityMode,
            b = '/i/moment_maker/preview/'.concat(u),
            v = f.a.useMemo(
              function () {
                return { pathname: b, anchorless: !0 }
              },
              [b],
            ),
            g = i && ne[i],
            C = f.a.useMemo(
              function () {
                var e = d.pathname === b
                return f.a.createElement(
                  I.a,
                  { style: re.buttonContainer },
                  f.a.createElement(G.a, {
                    author: t,
                    isTOO: c,
                    lastPublishedTime: l,
                    momentId: u,
                    redirectOnDelete: e ? '/i/moment_maker' : void 0,
                    scribeNamespace: ie,
                    size: 'xSmall',
                    title: h,
                    visibilityMode: p,
                    withGrayIcons: !0,
                    withLinkAction: !o,
                  }),
                )
              },
              [t, o, c, l, d.pathname, u, b, h, p],
            )
          return f.a.createElement(y.a, { exact: !1, path: b }, function (e) {
            return f.a.createElement(
              ee.a,
              { accessibilityRole: 'tab', accessibilityState: { selected: e }, link: v, onClick: m, style: R.root },
              f.a.createElement(
                I.a,
                { style: R.leftContainer },
                f.a.createElement(D.b, { numberOfLines: 2, size: 'headline1', weight: 'heavy', withHashflags: !0 }, h),
                f.a.createElement(F, { description: a }),
                f.a.createElement(
                  I.a,
                  { style: R.topMargin },
                  f.a.createElement(
                    te.a,
                    null,
                    f.a.createElement($, { visibilityMode: p, withAuthorControls: !0 }),
                    g ? f.a.createElement(D.b, { color: 'gray700' }, g) : null,
                  ),
                ),
                f.a.createElement(K, { hasUnpublishedChanges: r, lastModifiedTime: s, visibilityMode: p }),
              ),
              f.a.createElement(I.a, { style: re.rightContainer }, f.a.createElement(L, { coverMedia: n }), C),
            )
          })
        },
        re = w.a.create(function (e) {
          return {
            rightContainer: { alignItems: 'center', justifyContent: 'space-between' },
            buttonContainer: { marginTop: e.spaces.space16, width: '100%' },
          }
        }),
        oe = f.a.memo(ae),
        ce = function (e) {
          var t = e.author,
            n = e.category,
            i = e.isTOO,
            a = e.lastPublishedTime,
            r = f.a.useMemo(
              function () {
                return i
                  ? n
                    ? f.a.createElement(D.b, { color: 'gray700', size: 'subtext2' }, n)
                    : null
                  : t
                  ? f.a.createElement(k.a, { author: t, size: 'subtext2' })
                  : null
              },
              [t, n, i],
            )
          return f.a.createElement(
            I.a,
            { style: se.authorCategoryContainer },
            f.a.createElement(
              te.a,
              { style: R.horizontalContainer },
              r,
              a ? f.a.createElement(D.b, { size: 'subtext2' }, f.a.createElement(N.a, { timestamp: a })) : null,
            ),
          )
        },
        se = w.a.create(function (e) {
          return { authorCategoryContainer: { marginBottom: e.spaces.space2 } }
        }),
        le = f.a.memo(ce),
        de = function (e) {
          var t = e.author,
            n = e.category,
            i = e.coverMedia,
            a = e.isTOO,
            r = e.lastPublishedTime,
            o = e.momentId,
            c = e.onClick,
            s = e.title,
            l = e.visibilityMode,
            d = '/i/events/'.concat(o)
          return f.a.createElement(
            ee.a,
            { link: d, onClick: c, style: R.root },
            f.a.createElement(
              I.a,
              { style: R.leftContainer },
              f.a.createElement(le, { author: t, category: n, isTOO: a, lastPublishedTime: r }),
              f.a.createElement(D.b, { weight: 'bold', withHashflags: !0 }, s),
              f.a.createElement(
                I.a,
                { style: ue.topMarginSmall },
                f.a.createElement($, { visibilityMode: l, withAuthorControls: !1 }),
              ),
            ),
            f.a.createElement(L, { coverMedia: i }),
          )
        },
        ue = w.a.create(function (e) {
          return { topMarginSmall: { marginTop: e.spaces.space2 } }
        }),
        me = f.a.memo(de),
        he = n('TnY3'),
        pe = [
          'category',
          'creationSource',
          'description',
          'hasUnpublishedChanges',
          'history',
          'isCurationStudioMoment',
          'lastModifiedTime',
          'location',
          'title',
          'withAuthorControls',
        ],
        be = E.a.jceadc3e,
        fe = function (e) {
          var t = e.category,
            n = e.creationSource,
            i = e.description,
            a = e.hasUnpublishedChanges,
            r = e.history,
            o = e.isCurationStudioMoment,
            c = e.lastModifiedTime,
            s = e.location,
            l = e.title,
            d = e.withAuthorControls,
            u = p()(e, pe),
            h = l || be
          return d
            ? f.a.createElement(
                oe,
                m()({}, u, {
                  creationSource: n,
                  description: i,
                  hasUnpublishedChanges: a,
                  history: r,
                  isCurationStudioMoment: o,
                  lastModifiedTime: c,
                  location: s,
                  title: h,
                }),
              )
            : f.a.createElement(me, m()({}, u, { category: t, title: h }))
        },
        ve = Object(he.a)(f.a.memo(fe)),
        ge = n('zh9S'),
        ye = n('Rp9C'),
        Ce = n('RqPI'),
        Ee = function (e) {
          e.errorContext
          return Object(l.a)({ scribe: ge.scribeAction })
        },
        Me = function (e) {
          var t = e.entry
          return {
            author: function (e) {
              return d.a.selectAuthor(e, t.content.momentId)
            },
            coverMedia: function (e) {
              return d.a.selectCoverMedia(e, t.content.momentId)
            },
            isCurationStudioMoment: function (e) {
              return d.a.selectIsCurationStudioMoment(e, t.content.momentId)
            },
            isLoggedIn: Ce.n,
            isTOO: function (e) {
              return d.a.selectIsTOO(e, t.content.momentId)
            },
            moment: function (e) {
              return d.a.select(e, t.content.momentId)
            },
            visibilityMode: function (e) {
              return d.a.selectVisibilityMode(e, t.content.momentId)
            },
          }
        },
        we = function (e) {
          var t = e.withAuthorControls
          return function (e) {
            var n = e.actions.scribe,
              i = e.data,
              a = i.author,
              r = i.coverMedia,
              o = i.isCurationStudioMoment,
              s = (i.isLoggedIn, i.isTOO),
              l = i.moment,
              d = i.visibilityMode,
              u = e.entry,
              m = e.scribeNamespace
            if (!l) return null
            var h = (function (e) {
              var t = e.entry,
                n = e.moment,
                i = c()(
                  c()({}, ye.a.getMomentItem(n.id, n.visibility_mode, n.last_publish_time, !n.author)),
                  ye.a.getAllSurfaceDetails(t.itemMetadata.clientEventInfo),
                ),
                a =
                  t.itemMetadata &&
                  t.itemMetadata.clientEventInfo &&
                  t.itemMetadata.clientEventInfo.details &&
                  t.itemMetadata.clientEventInfo.details.momentsDetails
              if (a) {
                var r = a.contextScribeInfo && a.contextScribeInfo.position
                return c()(
                  c()({}, i),
                  {},
                  {
                    moments_details: c()(
                      c()({}, i.moments_details),
                      {},
                      { guide_category_id: a.guideCategoryId, impression_id: a.impressionId },
                    ),
                    position: r ? parseInt(r, 10) : void 0,
                  },
                )
              }
              return i
            })({ entry: u, moment: l })
            return {
              author: a,
              category: l.subcategory_string,
              coverMedia: r,
              creationSource: l.creation_source,
              description: l.description || '',
              isCurationStudioMoment: o,
              isTOO: s,
              hasUnpublishedChanges: l.has_unpublished_changes,
              lastModifiedTime: l.last_modified_time,
              lastPublishedTime: l.last_publish_time,
              momentId: l.id,
              onClick: function () {
                n(c()(c()({}, m), {}, { component: 'moment_summary', action: 'click' }), { items: [h] })
              },
              title: l.title || '',
              visibilityMode: d,
              withAuthorControls: t,
            }
          }
        }
      t.default = function (e) {
        var t = e.errorContext,
          n = e.withAuthorControls
        return s.g({
          isFocusable: Object(l.a)(!0),
          component: ve,
          bindActions: Ee({ errorContext: t }),
          selectData: Me,
          createProps: we({ withAuthorControls: n }),
        })
      }
    },
    TW8A: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        r = n('ERkP'),
        o = n.n(r),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    Vgm9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return $
      })
      var i = n('VrFO'),
        a = n.n(i),
        r = n('Y9Ll'),
        o = n.n(r),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        d = n.n(l),
        u = n('2VqO'),
        m = n.n(u),
        h = n('KEM+'),
        p = n.n(h),
        b = (n('2G9S'), n('ERkP')),
        f = n.n(b),
        v = n('RhWx'),
        g = n.n(v),
        y = n('yiKp'),
        C = n.n(y),
        E = n('1YZw'),
        M = n('Fg8X'),
        w = n('n4jD'),
        k = n('RqPI'),
        I = n('iUle'),
        _ = function (e) {
          return function (t, n, i) {
            var a = i.api,
              r = n(),
              o = Object(k.r)(r) || '',
              c = Object(w.c)(r),
              s = Object(I.a)(o),
              l = { moment_id: e, teamUserId: c }
            return a.Moments.delete(l).then(function () {
              t([M.a.deleteOne(e), s.removeEntry('moment-'.concat(e))])
            })
          }
        },
        x = n('rxPX'),
        O = Object(x.a)()
          .propsFromState(function () {
            return { activeTeamId: w.c }
          })
          .propsFromActions(function () {
            return { addToast: E.b, deleteMoment: _ }
          })
          .withAnalytics({ component: 'action_sheet' }),
        P = n('ACNv'),
        A = n('3XMw'),
        S = n.n(A),
        T = n('Rp9C'),
        z = n('TnY3'),
        B = n('v6aA'),
        L = n('hiGS'),
        R = n('I/9y'),
        j = n('TW8A'),
        D = n('xrkw'),
        N = n('zIWA'),
        V = S.a.e8dff578,
        H = S.a.fcc64f01,
        U = S.a.ea193d66,
        K = S.a.e5227fe0,
        W = S.a.d0df844c,
        F = S.a.fd61ab81,
        G = S.a.aaae5e7f,
        X = S.a.d96cf7cd,
        q = S.a.e7718461,
        Q = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            a()(this, n)
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              p()(s()(e), '_getActionItems', function () {
                var t = e.props,
                  n = t.author,
                  i = t.id,
                  a = t.withEditAction,
                  r = t.withLinkAction,
                  o = []
                return (
                  e._isOwner()
                    ? (o.push({
                        confirmation: { label: X, headline: F, text: G, confirmButtonType: 'destructiveFilled' },
                        isEmphasized: !0,
                        onClick: e._handleDeleteConfirm,
                        text: U,
                        Icon: L.a,
                      }),
                      r && o.push({ link: '/i/events/'.concat(i), onClick: e._handleClickLink, text: K, Icon: R.a }),
                      a && o.push({ link: '/i/moment_maker/edit/'.concat(i), text: V, Icon: j.a }),
                      o.push({
                        link: '/i/moments/'.concat(i, '/analytics'),
                        onClick: e._handleNavigateAnalytics,
                        text: W,
                        Icon: D.a,
                      }))
                    : n && o.push({ onClick: e._handleReport, text: H, Icon: N.a }),
                  o
                )
              }),
              p()(s()(e), '_handleReport', function () {
                var t = e.props,
                  n = t.analytics.contextualScribeNamespace,
                  i = t.history,
                  a = t.id,
                  r = t.scribeNamespace,
                  o = C()(C()({}, n), r)
                i.push({
                  pathname: '/i/report/moment/'.concat(a),
                  state: { clientReferer: window.location.pathname, isMedia: !0, scribeNamespace: o },
                })
              }),
              p()(s()(e), '_handleClickLink', function () {
                e._scribeAction('click', 'link_button')
              }),
              p()(s()(e), '_handleNavigateAnalytics', function () {
                e._scribeAction('moment_analytics')
              }),
              p()(s()(e), '_handleDeleteConfirm', function () {
                var t = e.props,
                  n = t.addToast,
                  i = t.deleteMoment,
                  a = t.history,
                  r = t.id,
                  o = t.redirectOnDelete
                i(r).then(function () {
                  e._scribeAction('delete'),
                    n({ text: q }),
                    o && a.goBack({ backLocation: o, shouldReplaceOnFallback: !0 })
                })
              }),
              p()(s()(e), '_scribeAction', function (t, n) {
                var i = e.props,
                  a = i.analytics,
                  r = i.id,
                  o = i.scribeMomentItem,
                  c = i.scribeNamespace,
                  s = C()(
                    C()({}, a.contextualScribeData),
                    {},
                    {
                      items: [].concat(
                        g()(a.contextualScribeData && a.contextualScribeData.items ? a.contextualScribeData.items : []),
                        [o || T.a.getMomentItem(r)],
                      ),
                    },
                  )
                a.scribe(C()({ action: t, data: s, element: n }, c))
              }),
              p()(s()(e), '_isOwner', function () {
                var t = e.props,
                  n = t.activeTeamId,
                  i = t.author,
                  a = e.context.loggedInUserId,
                  r = a && (null == i ? void 0 : i.id_str) === a,
                  o = n && (null == i ? void 0 : i.id_str) === n
                return !!r || !!o
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  return this.context.loggedInUserId
                    ? f.a.createElement(P.default, { actionItems: this._getActionItems(), onClose: this.props.onClose })
                    : null
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()(Q, 'contextType', B.a)
      var Y = O(Q),
        J = Object(z.a)(Y),
        Z = n('2G3J'),
        $ = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            a()(this, n)
            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              p()(s()(e), '_renderMenu', function (t) {
                var n = e.props,
                  i = n.author,
                  a = n.eventId,
                  r = n.redirectOnDelete,
                  o = n.scribeMomentItem,
                  c = n.scribeNamespace,
                  s = n.title,
                  l = n.withEditAction,
                  d = n.withLinkAction
                return f.a.createElement(J, {
                  author: i,
                  id: a,
                  onClose: t,
                  redirectOnDelete: r,
                  scribeMomentItem: o,
                  scribeNamespace: c,
                  title: s,
                  withEditAction: l,
                  withLinkAction: d,
                })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.iconStyle,
                    n = e.onPress,
                    i = e.size,
                    a = e.style,
                    r = e.type
                  return f.a.createElement(Z.a, {
                    iconStyle: t,
                    onPress: n,
                    renderMenu: this._renderMenu,
                    size: i,
                    style: a,
                    type: r,
                  })
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()($, 'defaultProps', { withEditAction: !0 })
    },
    hiGS: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        r = n('ERkP'),
        o = n.n(r),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              o.a.createElement('path', {
                d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    xrkw: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        r = n('ERkP'),
        o = n.n(r),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
  },
])
//# sourceMappingURL=WIPED
