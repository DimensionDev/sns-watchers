;(window.webpackJsonp = window.webpackJsonp || []).push([
  [220, 171],
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
        r = n.n(i),
        a = n('MWbm'),
        o = n('GcQN'),
        c = n('PU7B'),
        l = n('/WPq'),
        s = n('78ol'),
        d = n('jV+4'),
        u = n('rHpw'),
        m = function (e) {
          var t = e.author,
            n = e.color,
            i = void 0 === n ? 'normal' : n,
            a = e.size,
            o = void 0 === a ? 'subtext2' : a,
            c = e.style,
            l = e.withHoverCard,
            s = void 0 === l || l,
            u = e.withLink,
            m = void 0 !== u && u,
            h = e.withScreenName,
            p = void 0 !== h && h
          return r.a.createElement(d.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: i,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [f.authorUserName, c],
            withHoverCard: s,
            withLink: m,
            withScreenName: p,
          })
        },
        h = function (e) {
          var t = e.style
          return r.a.createElement(
            a.a,
            { style: [f.lightningBadge, t] },
            r.a.createElement(o.a, { style: f.lightningIcon }),
          )
        },
        p = function (e) {
          var t = e.icon
          return r.a.createElement(
            a.a,
            { style: f.placeholderIconContainer },
            'news' === t
              ? r.a.createElement(c.a, { style: f.placeholderIcon })
              : 'lists' === t
              ? r.a.createElement(l.a, { style: f.placeholderIcon })
              : r.a.createElement(s.a, { style: f.placeholderIcon }),
          )
        },
        f = u.a.create(function (e) {
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
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        m = n.n(u),
        h = n('KEM+'),
        p = n.n(h),
        f = (n('2G9S'), n('KOtZ'), n('7x/C'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        b = n.n(f),
        v = n('3XMw'),
        g = n.n(v),
        y = n('oQhu'),
        C = n('mjJ+'),
        _ = n('eb3s'),
        w = g.a.cfd2f35d,
        E = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              p()(l()(e), 'state', { activeConfirmation: null }),
              p()(l()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              p()(l()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              p()(l()(e), '_handleCancelConfirm', function () {
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
                    : b.a.createElement(C.a, {
                        cancelButtonLabel: w,
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
                    r = t.label,
                    a = t.text,
                    o = t.withCancelButton
                  return b.a.createElement(_.a, {
                    confirmButtonLabel: r,
                    confirmButtonType: n,
                    headline: i,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: a,
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
                  return I(t, n, i, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        I = Object(y.a)(function (e, t, n, i) {
          return e.reduce(function (e, r, a) {
            var o = r.Icon,
              c = r.behavioralEventContext,
              l = r.confirmation,
              s = r.disabled,
              d = r.excludeFromActionMenu,
              u = r.isEmphasized,
              m = r.link,
              h = r.onClick,
              p = r.subText,
              f = r.testID,
              b = r.text
            r.withCancelButton
            if (!d) {
              var v = h
                ? function () {
                    l
                      ? l.render
                        ? i({ callback: h, render: l.render })
                        : i({
                            callback: h,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (h(), n())
                  }
                : n
              e.push({
                behavioralEventContext: c,
                disabled: s,
                Icon: o,
                isEmphasized: u,
                testID: f,
                subText: p,
                text: b,
                onClick: v,
                link: m,
                withBottomBorder: t && t.includes(a),
              })
            }
            return e
          }, [])
        })
      t.default = E
    },
    BUB3: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        r = n.n(i),
        a = n('m3Bd'),
        o = n.n(a),
        c = n('ERkP'),
        l = n.n(c),
        s = n('sNn6'),
        d = n('rHpw'),
        u = n('MWbm'),
        m = ['children'],
        h = d.a.create(function (e) {
          return {
            activeRoot: { backgroundColor: e.colors.gray0 },
            overlay: r()(
              r()({}, d.a.absoluteFillObject),
              {},
              {
                borderRightStyle: 'solid',
                borderRightWidth: e.borderWidths.medium,
                borderRightColor: e.colors.primary,
                zIndex: 1,
              },
            ),
          }
        })
      t.a = function (e) {
        var t = e.children,
          n = o()(e, m)
        return l.a.createElement(s.a, n, function (e) {
          return l.a.createElement(
            u.a,
            { style: e && h.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? l.a.createElement(u.a, { pointerEvents: 'none', style: h.overlay }) : null,
          )
        })
      }
    },
    MREw: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        r = n.n(i),
        a = n('VrFO'),
        o = n.n(a),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        d = n.n(s),
        u = n('5Yy7'),
        m = n.n(u),
        h = n('2VqO'),
        p = n.n(h),
        f = n('KEM+'),
        b = n.n(f),
        v = (n('2G9S'), n('ERkP')),
        g = n.n(v),
        y = (n('hBvt'), n('/yvb')),
        C = n('3XMw'),
        _ = n.n(C).a.abd845fd,
        w = g.a.forwardRef(function (e, t) {
          var n = e.icon,
            i = e.link,
            r = e.onPress,
            a = e.size,
            o = e.style,
            c = e.type
          return g.a.createElement(y.a, {
            accessibilityLabel: _,
            hoverLabel: { label: _ },
            icon: n,
            link: i,
            onPress: r,
            pullRight: !0,
            ref: t,
            size: a,
            style: o,
            type: c || 'primaryText',
          })
        }),
        E = n('TW8A'),
        I = n('hACr'),
        k = n('Vgm9'),
        M = n('ObVQ'),
        x = n('Rp9C'),
        O = n('MWbm'),
        P = n('Irs7'),
        S = n('rHpw'),
        A = (function (e) {
          m()(n, e)
          var t = p()(n)
          function n() {
            var e
            o()(this, n)
            for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(d()(e), '_editButton', g.a.createRef()),
              b()(d()(e), '_handleClickEdit', function () {
                e._scribeAction('edit_button', 'click')
              }),
              b()(d()(e), '_scribeAction', function (t, n) {
                var i = e.props,
                  a = i.analytics,
                  o = i.scribeNamespace
                a.scribe(r()(r()({ action: n, data: { items: [e._getScribeMomentItem()] } }, o), {}, { element: t }))
              }),
              b()(d()(e), '_focusOnEditButton', function () {
                var t, n
                e.props.isFromMomentPreviewBar &&
                  (null === (t = e._editButton) || void 0 === t ? void 0 : t.current) &&
                  (null === (n = e._editButton) || void 0 === n || n.current.focus())
              }),
              b()(d()(e), '_getEditIcon', function () {
                var t = e.props.withGrayIcons && T.colorDeepGray
                return g.a.createElement(E.a, { style: t })
              }),
              b()(d()(e), '_getScribeMomentItem', function () {
                var t = e.props,
                  n = t.isTOO,
                  i = t.lastPublishedTime,
                  r = t.momentId,
                  a = t.visibilityMode
                return x.a.getMomentItem(r, a, i, n)
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.author,
                    n = e.momentId,
                    i = e.redirectOnDelete,
                    r = e.scribeNamespace,
                    a = e.size,
                    o = e.title,
                    c = e.withGrayIcons,
                    l = e.withLinkAction,
                    s = this._getEditIcon()
                  return g.a.createElement(
                    O.a,
                    { style: T.buttonContainer },
                    g.a.createElement(
                      I.a,
                      { handlers: b()({}, M.b.rightEditingPreviewPanel, this._focusOnEditButton) },
                      g.a.createElement(w, {
                        icon: s,
                        link: '/i/moment_maker/edit/'.concat(n),
                        onPress: this._handleClickEdit,
                        ref: this._editButton,
                        size: a,
                        style: T.button,
                        type: c ? 'brandText' : void 0,
                      }),
                    ),
                    g.a.createElement(k.a, {
                      author: t,
                      eventId: n,
                      iconStyle: c ? T.colorDeepGray : void 0,
                      redirectOnDelete: i,
                      scribeMomentItem: this._getScribeMomentItem(),
                      scribeNamespace: r,
                      size: a,
                      style: T.buttonExtraSpace,
                      title: o,
                      type: c ? 'brandText' : void 0,
                      withEditAction: !1,
                      withLinkAction: l,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        T = S.a.create(function (e) {
          return {
            buttonContainer: { flexDirection: 'row' },
            button: { marginRight: e.spaces.space4 },
            buttonExtraSpace: { marginStart: e.spaces.space12 },
            colorDeepGray: { color: e.colors.gray700 },
          }
        })
      t.a = Object(P.a)(A)
    },
    ObVQ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return l
        })
      n('yH/f')
      var i = n('3XMw'),
        r = n.n(i),
        a = n('oQhu'),
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
        l = Object(a.a)(function (e) {
          return [
            { description: r.a.d5696fcb, keys: o.e.openKeyboardShortcuts, universal: !0 },
            { description: r.a.e814ed10, keys: c.editingPanelNextItem, universal: !0 },
            { description: r.a.c1250b41, keys: c.editingPanelPreviousItem, universal: !0 },
            { description: r.a.ddd4bf24, keys: o.e.nextItem, universal: !0 },
            { description: r.a.ia2742f9, keys: o.e.previousItem, universal: !0 },
            { description: r.a.a8b6f61a, keys: 'space', universal: !1 },
            { description: r.a.dfe59ab8, keys: 'esc', universal: !1 },
            { description: r.a.c602967d, keys: c.rightEditingPreviewPanel, universal: !1 },
            { description: r.a.g42208cb, keys: c.leftNavigationMenuPanel, universal: !1 },
            { description: r.a.gf73b335, keys: c.tweetDiscoveryPanel, universal: !1 },
            { description: r.a.g45af04e, keys: c.addTweet, universal: !1 },
            { description: r.a.ee9c4013, keys: c.removeTweet, universal: !1 },
          ]
        })
    },
    Pb8P: function (e, t, n) {
      'use strict'
      n.r(t)
      var i,
        r,
        a,
        o = n('yiKp'),
        c = n.n(o),
        l = (n('Blm6'), n('1t7P'), n('jQ/y'), n('ezF+')),
        s = n('VPAj'),
        d = n('Fg8X'),
        u = n('VrFO'),
        m = n.n(u),
        h = n('Y9Ll'),
        p = n.n(h),
        f = n('1Pcy'),
        b = n.n(f),
        v = n('5Yy7'),
        g = n.n(v),
        y = n('2VqO'),
        C = n.n(y),
        _ = n('KEM+'),
        w = n.n(_),
        E = (n('2G9S'), n('0mK8')),
        I = n('ERkP'),
        k = n.n(I),
        M = n('BUB3'),
        x = n('3XMw'),
        O = n.n(x),
        P = n('MREw'),
        S = n('MWbm'),
        A = n('htQn'),
        T = n('pjBI'),
        L = n('t62R'),
        B = n('GBcw'),
        R = n('3dad'),
        z = n('TIdA'),
        D = n('A91F'),
        j = n('9Xij'),
        N = n('Wms4'),
        V = n('rHpw'),
        H = n('29/U'),
        W = n('TnY3'),
        F = { page: 'moment_maker', section: 'landing', component: 'moment_summary' },
        G = O.a.a1d5303c,
        K = O.a.cc8f8a8f,
        U = O.a.c33a97d6,
        Y = O.a.i7e9ecf2,
        q = O.a.jceadc3e,
        X =
          ((i = {}),
          w()(i, H.d.private, 'magenta500'),
          w()(i, H.d.public, 'green500'),
          w()(i, H.d.unlisted, 'gray700'),
          i),
        Q = ((r = {}), w()(r, H.d.private, G), w()(r, H.d.public, U), w()(r, H.d.unlisted, K), r),
        J =
          ((a = {}),
          w()(a, H.b.CurationStudio, 'Curation Studio'),
          w()(a, H.b.MomentMakerPro, 'Moment Maker Pro'),
          w()(a, H.b.MomentMakerLite, void 0),
          w()(a, H.b.MomentMakerMobile, void 0),
          a),
        Z = (function (e) {
          g()(n, e)
          var t = C()(n)
          function n() {
            var e
            m()(this, n)
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              w()(b()(e), '_renderAuthorMomentSummary', function () {
                var t = e.props.onClick,
                  n = e._getLinkToPreview(),
                  i = { pathname: n, anchorless: !0 }
                return k.a.createElement(M.a, { exact: !1, path: n }, function (n) {
                  return k.a.createElement(
                    A.a,
                    {
                      accessibilityRole: 'tab',
                      accessibilityState: { selected: n },
                      link: i,
                      onClick: t,
                      style: ne.root,
                    },
                    k.a.createElement(
                      S.a,
                      { style: ne.leftContainer },
                      e._renderTitle(),
                      e._renderDescription(),
                      k.a.createElement(
                        S.a,
                        { style: ne.topMargin },
                        k.a.createElement(T.a, null, e._renderVisibilityLabel(), e._renderCreationSource()),
                      ),
                      e._renderLastModifiedTime(),
                    ),
                    k.a.createElement(S.a, { style: ne.rightContainer }, e._renderCoverImage(), e._renderButtons()),
                  )
                })
              }),
              w()(b()(e), '_renderViewerMomentSummary', function () {
                var t = e.props.onClick
                return k.a.createElement(
                  A.a,
                  { link: e._getLinkToMoment(), onClick: t, style: ne.root },
                  k.a.createElement(
                    S.a,
                    { style: ne.leftContainer },
                    e._renderAuthorCategory(),
                    e._renderTitle(),
                    k.a.createElement(S.a, { style: ne.topMarginSmall }, e._renderVisibilityLabel()),
                  ),
                  e._renderCoverImage(),
                )
              }),
              w()(b()(e), '_renderAuthorCategory', function () {
                var t = e.props,
                  n = t.author,
                  i = t.category,
                  r = t.isTOO,
                  a = t.lastPublishedTime,
                  o = r
                    ? i
                      ? k.a.createElement(L.b, { color: 'gray700', size: 'subtext2' }, i)
                      : null
                    : n
                    ? k.a.createElement(E.a, { author: n, size: 'subtext2' })
                    : null
                return k.a.createElement(
                  S.a,
                  { style: ne.authorCategoryContainer },
                  k.a.createElement(
                    T.a,
                    { style: ne.horizontalContainer },
                    o,
                    a ? k.a.createElement(L.b, { size: 'subtext2' }, k.a.createElement(B.a, { timestamp: a })) : null,
                  ),
                )
              }),
              w()(b()(e), '_renderTitle', function () {
                var t = e.props,
                  n = t.title,
                  i = t.withAuthorControls,
                  r = n || q
                return i
                  ? k.a.createElement(
                      L.b,
                      { numberOfLines: 2, size: 'headline1', weight: 'heavy', withHashflags: !0 },
                      r,
                    )
                  : k.a.createElement(L.b, { weight: 'bold', withHashflags: !0 }, r)
              }),
              w()(b()(e), '_renderDescription', function () {
                var t = e.props.description
                return t
                  ? k.a.createElement(
                      S.a,
                      { style: ne.topMargin },
                      k.a.createElement(
                        L.b,
                        { color: 'gray700', numberOfLines: 3, size: 'body', withHashflags: !0 },
                        t,
                      ),
                    )
                  : null
              }),
              w()(b()(e), '_renderCoverImage', function () {
                var t = e.props.coverMedia,
                  n = t && R.a.getOriginalImage(t)
                return k.a.createElement(
                  S.a,
                  { style: ne.coverContainer },
                  n && t
                    ? k.a.createElement(z.a, {
                        accessibilityLabel: '',
                        aspectMode: D.a.SQUARE,
                        backgroundColor: R.a.getBackgroundColor(t),
                        cropCandidates: R.a.getCropCandidates(t),
                        image: n,
                      })
                    : k.a.createElement(j.a, { ratio: 1 }, k.a.createElement(E.c, { icon: 'lightning' })),
                  t ? k.a.createElement(E.b, { style: ne.lightningBadge }) : null,
                )
              }),
              w()(b()(e), '_renderButtons', function () {
                var t = e.props,
                  n = t.author,
                  i = t.isCurationStudioMoment,
                  r = t.isTOO,
                  a = t.lastPublishedTime,
                  o = t.location.pathname,
                  c = t.momentId,
                  l = t.title,
                  s = t.visibilityMode,
                  d = o === e._getLinkToPreview()
                return k.a.createElement(
                  S.a,
                  { style: ne.buttonContainer },
                  k.a.createElement(P.a, {
                    author: n,
                    isTOO: r,
                    lastPublishedTime: a,
                    momentId: c,
                    redirectOnDelete: d ? '/i/moment_maker' : void 0,
                    scribeNamespace: F,
                    size: 'xSmall',
                    title: l,
                    visibilityMode: s,
                    withGrayIcons: !0,
                    withLinkAction: !i,
                  }),
                )
              }),
              w()(b()(e), '_renderVisibilityLabel', function () {
                var t = e.props,
                  n = t.visibilityMode
                if (t.withAuthorControls || n !== H.d.public) {
                  var i = X[n],
                    r = Q[n]
                  return i && r ? k.a.createElement(L.b, { color: i, weight: 'bold' }, r) : null
                }
              }),
              w()(b()(e), '_renderCreationSource', function () {
                var t = e.props.creationSource,
                  n = t && J[t]
                return n ? k.a.createElement(L.b, { color: 'gray700' }, n) : null
              }),
              w()(b()(e), '_renderLastModifiedTime', function () {
                var t = e.props,
                  n = t.hasUnpublishedChanges,
                  i = t.lastModifiedTime,
                  r = t.visibilityMode
                return i
                  ? k.a.createElement(
                      S.a,
                      { style: ne.horizontalContainer },
                      n && r !== H.d.private
                        ? k.a.createElement(N.a, { background: 'orange500', style: ne.pendingChangesLabel }, Y)
                        : null,
                      k.a.createElement(
                        L.b,
                        { color: 'gray700', size: 'subtext2' },
                        k.a.createElement(B.a, { humanReadable: !0, timestamp: i }),
                      ),
                    )
                  : null
              }),
              w()(b()(e), '_getLinkToMoment', function () {
                var t = e.props.momentId
                return '/i/events/'.concat(t)
              }),
              w()(b()(e), '_getLinkToPreview', function () {
                var t = e.props.momentId
                return '/i/moment_maker/preview/'.concat(t)
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.withAuthorControls
                    ? this._renderAuthorMomentSummary()
                    : this._renderViewerMomentSummary()
                },
              },
            ]),
            n
          )
        })(k.a.Component),
        $ = '15%',
        ee = '100px',
        te = '70px',
        ne = V.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              justifyContent: 'space-between',
            },
            leftContainer: {
              justifyContent: 'flex-start',
              maxWidth: 'calc(100% - '.concat(te, ')'),
              minWidth: 'calc(100% - '.concat(ee, ')'),
              paddingRight: e.spaces.space16,
              width: 'calc(100% - '.concat($, ')'),
            },
            rightContainer: { alignItems: 'center', justifyContent: 'space-between' },
            horizontalContainer: { alignItems: 'center', flexDirection: 'row' },
            authorCategoryContainer: { marginBottom: e.spaces.space2 },
            topMargin: { marginTop: e.spaces.space8 },
            topMarginSmall: { marginTop: e.spaces.space2 },
            pendingChangesLabel: { marginRight: e.spaces.space8 },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.xLarge,
              height: $,
              maxHeight: ee,
              maxWidth: ee,
              minHeight: te,
              minWidth: te,
              overflow: 'hidden',
              width: $,
            },
            lightningBadge: { bottom: e.spaces.space12, left: e.spaces.space12 },
            buttonContainer: { marginTop: e.spaces.space16, width: '100%' },
          }
        }),
        ie = Object(W.a)(Z),
        re = n('zh9S'),
        ae = n('Rp9C'),
        oe = n('RqPI'),
        ce = function (e) {
          e.errorContext
          return Object(s.a)({ scribe: re.c })
        },
        le = function (e) {
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
            isLoggedIn: oe.m,
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
        se = function (e) {
          var t = e.withAuthorControls
          return function (e) {
            var n = e.actions.scribe,
              i = e.data,
              r = i.author,
              a = i.coverMedia,
              o = i.isCurationStudioMoment,
              l = (i.isLoggedIn, i.isTOO),
              s = i.moment,
              d = i.visibilityMode,
              u = e.entry,
              m = e.scribeNamespace
            if (!s) return null
            var h = (function (e) {
              var t = e.entry,
                n = e.moment,
                i = c()(
                  c()({}, ae.a.getMomentItem(n.id, n.visibility_mode, n.last_publish_time, !n.author)),
                  ae.a.getAllSurfaceDetails(t.itemMetadata.clientEventInfo),
                ),
                r =
                  t.itemMetadata &&
                  t.itemMetadata.clientEventInfo &&
                  t.itemMetadata.clientEventInfo.details &&
                  t.itemMetadata.clientEventInfo.details.momentsDetails
              if (r) {
                var a = r.contextScribeInfo && r.contextScribeInfo.position
                return c()(
                  c()({}, i),
                  {},
                  {
                    moments_details: c()(
                      c()({}, i.moments_details),
                      {},
                      { guide_category_id: r.guideCategoryId, impression_id: r.impressionId },
                    ),
                    position: a ? parseInt(a, 10) : void 0,
                  },
                )
              }
              return i
            })({ entry: u, moment: s })
            return {
              author: r,
              category: s.subcategory_string,
              coverMedia: a,
              creationSource: s.creation_source,
              description: s.description || '',
              isCurationStudioMoment: o,
              isTOO: l,
              hasUnpublishedChanges: s.has_unpublished_changes,
              lastModifiedTime: s.last_modified_time,
              lastPublishedTime: s.last_publish_time,
              momentId: s.id,
              onClick: function () {
                n(c()(c()({}, m), {}, { component: 'moment_summary', action: 'click' }), { items: [h] })
              },
              title: s.title || '',
              visibilityMode: d,
              withAuthorControls: t,
            }
          }
        }
      t.default = function (e) {
        var t = e.errorContext,
          n = e.withAuthorControls
        return l.g({
          isFocusable: Object(s.a)(!0),
          component: ie,
          bindActions: ce({ errorContext: t }),
          selectData: le,
          createProps: se({ withAuthorControls: n }),
        })
      }
    },
    Vgm9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return $
      })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        m = n.n(u),
        h = n('KEM+'),
        p = n.n(h),
        f = (n('2G9S'), n('ERkP')),
        b = n.n(f),
        v = n('RhWx'),
        g = n.n(v),
        y = n('yiKp'),
        C = n.n(y),
        _ = n('1YZw'),
        w = n('Fg8X'),
        E = n('n4jD'),
        I = n('RqPI'),
        k = n('iUle'),
        M = function (e) {
          return function (t, n, i) {
            var r = i.api,
              a = n(),
              o = Object(I.q)(a) || '',
              c = Object(E.c)(a),
              l = Object(k.a)(o),
              s = { moment_id: e, teamUserId: c }
            return r.Moments.delete(s).then(function () {
              t([w.a.deleteOne(e), l.removeEntry('moment-'.concat(e))])
            })
          }
        },
        x = n('rxPX'),
        O = Object(x.a)()
          .propsFromState(function () {
            return { activeTeamId: E.c }
          })
          .propsFromActions(function () {
            return { addToast: _.b, deleteMoment: M }
          })
          .withAnalytics({ component: 'action_sheet' }),
        P = n('ACNv'),
        S = n('3XMw'),
        A = n.n(S),
        T = n('Rp9C'),
        L = n('TnY3'),
        B = n('v6aA'),
        R = n('hiGS'),
        z = n('I/9y'),
        D = n('TW8A'),
        j = n('xrkw'),
        N = n('zIWA'),
        V = A.a.e8dff578,
        H = A.a.fcc64f01,
        W = A.a.ea193d66,
        F = A.a.e5227fe0,
        G = A.a.d0df844c,
        K = A.a.fd61ab81,
        U = A.a.aaae5e7f,
        Y = A.a.d96cf7cd,
        q = A.a.e7718461,
        X = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              p()(l()(e), '_getActionItems', function () {
                var t = e.props,
                  n = t.author,
                  i = t.id,
                  r = t.withEditAction,
                  a = t.withLinkAction,
                  o = []
                return (
                  e._isOwner()
                    ? (o.push({
                        confirmation: { label: Y, headline: K, text: U, confirmButtonType: 'destructiveFilled' },
                        isEmphasized: !0,
                        onClick: e._handleDeleteConfirm,
                        text: W,
                        Icon: R.a,
                      }),
                      a && o.push({ link: '/i/events/'.concat(i), onClick: e._handleClickLink, text: F, Icon: z.a }),
                      r && o.push({ link: '/i/moment_maker/edit/'.concat(i), text: V, Icon: D.a }),
                      o.push({
                        link: '/i/moments/'.concat(i, '/analytics'),
                        onClick: e._handleNavigateAnalytics,
                        text: G,
                        Icon: j.a,
                      }))
                    : n && o.push({ onClick: e._handleReport, text: H, Icon: N.a }),
                  o
                )
              }),
              p()(l()(e), '_handleReport', function () {
                var t = e.props,
                  n = t.analytics.contextualScribeNamespace,
                  i = t.history,
                  r = t.id,
                  a = t.scribeNamespace,
                  o = C()(C()({}, n), a)
                i.push({
                  pathname: '/i/report/moment/'.concat(r),
                  state: { clientReferer: window.location.pathname, isMedia: !0, scribeNamespace: o },
                })
              }),
              p()(l()(e), '_handleClickLink', function () {
                e._scribeAction('click', 'link_button')
              }),
              p()(l()(e), '_handleNavigateAnalytics', function () {
                e._scribeAction('moment_analytics')
              }),
              p()(l()(e), '_handleDeleteConfirm', function () {
                var t = e.props,
                  n = t.addToast,
                  i = t.deleteMoment,
                  r = t.history,
                  a = t.id,
                  o = t.redirectOnDelete
                i(a).then(function () {
                  e._scribeAction('delete'),
                    n({ text: q }),
                    o && r.goBack({ backLocation: o, shouldReplaceOnFallback: !0 })
                })
              }),
              p()(l()(e), '_scribeAction', function (t, n) {
                var i = e.props,
                  r = i.analytics,
                  a = i.id,
                  o = i.scribeMomentItem,
                  c = i.scribeNamespace,
                  l = C()(
                    C()({}, r.contextualScribeData),
                    {},
                    {
                      items: [].concat(
                        g()(r.contextualScribeData && r.contextualScribeData.items ? r.contextualScribeData.items : []),
                        [o || T.a.getMomentItem(a)],
                      ),
                    },
                  )
                r.scribe(C()({ action: t, data: l, element: n }, c))
              }),
              p()(l()(e), '_isOwner', function () {
                var t = e.props,
                  n = t.activeTeamId,
                  i = t.author,
                  r = e.context.loggedInUserId,
                  a = r && (null == i ? void 0 : i.id_str) === r,
                  o = n && (null == i ? void 0 : i.id_str) === n
                return !!a || !!o
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
                    ? b.a.createElement(P.default, { actionItems: this._getActionItems(), onClose: this.props.onClose })
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      p()(X, 'contextType', B.a)
      var Q = O(X),
        J = Object(L.a)(Q),
        Z = n('2G3J'),
        $ = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              p()(l()(e), '_renderMenu', function (t) {
                var n = e.props,
                  i = n.author,
                  r = n.eventId,
                  a = n.redirectOnDelete,
                  o = n.scribeMomentItem,
                  c = n.scribeNamespace,
                  l = n.title,
                  s = n.withEditAction,
                  d = n.withLinkAction
                return b.a.createElement(J, {
                  author: i,
                  id: r,
                  onClose: t,
                  redirectOnDelete: a,
                  scribeMomentItem: o,
                  scribeNamespace: c,
                  title: l,
                  withEditAction: s,
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
                    r = e.style,
                    a = e.type
                  return b.a.createElement(Z.a, {
                    iconStyle: t,
                    onPress: n,
                    renderMenu: this._renderMenu,
                    size: i,
                    style: r,
                    type: a,
                  })
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      p()($, 'defaultProps', { withEditAction: !0 })
    },
    hiGS: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        r = n.n(i),
        a = n('ERkP'),
        o = n.n(a),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
