;(window.webpackJsonp = window.webpackJsonp || []).push([
  [228, 176],
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
        _ = n('eb3s'),
        w = g.a.cfd2f35d,
        k = (function (e) {
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
                    a = t.label,
                    r = t.text,
                    o = t.withCancelButton
                  return f.a.createElement(_.a, {
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
                  return E(t, n, i, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        E = Object(y.a)(function (e, t, n, i) {
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
      t.default = k
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
        _ = n.n(C).a.abd845fd,
        w = g.a.forwardRef(function (e, t) {
          var n = e.icon,
            i = e.link,
            a = e.onPress,
            r = e.size,
            o = e.style,
            c = e.type
          return g.a.createElement(y.a, {
            accessibilityLabel: _,
            hoverLabel: { label: _ },
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
        k = n('TW8A'),
        E = n('hACr'),
        I = n('Vgm9'),
        M = n('ObVQ'),
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
                return g.a.createElement(k.a, { style: t })
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
                      E.a,
                      { handlers: f()({}, M.b.rightEditingPreviewPanel, this._focusOnEditButton) },
                      g.a.createElement(w, {
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
        u = n('VrFO'),
        m = n.n(u),
        h = n('Y9Ll'),
        p = n.n(h),
        b = n('1Pcy'),
        f = n.n(b),
        v = n('5Yy7'),
        g = n.n(v),
        y = n('2VqO'),
        C = n.n(y),
        _ = n('KEM+'),
        w = n.n(_),
        k = (n('2G9S'), n('0mK8')),
        E = n('ERkP'),
        I = n.n(E),
        M = n('BUB3'),
        x = n('3XMw'),
        O = n.n(x),
        P = n('MREw'),
        A = n('MWbm'),
        S = n('htQn'),
        T = n('pjBI'),
        L = n('t62R'),
        z = n('GBcw'),
        B = n('3dad'),
        R = n('TIdA'),
        D = n('A91F'),
        V = n('9Xij'),
        j = n('Wms4'),
        N = n('rHpw'),
        H = n('29/U'),
        K = n('TnY3'),
        F = { page: 'moment_maker', section: 'landing', component: 'moment_summary' },
        G = O.a.a1d5303c,
        W = O.a.cc8f8a8f,
        U = O.a.c33a97d6,
        Y = O.a.i7e9ecf2,
        q = O.a.jceadc3e,
        X =
          ((i = {}),
          w()(i, H.d.private, 'magenta500'),
          w()(i, H.d.public, 'green500'),
          w()(i, H.d.unlisted, 'gray700'),
          i),
        Q = ((a = {}), w()(a, H.d.private, G), w()(a, H.d.public, U), w()(a, H.d.unlisted, W), a),
        J =
          ((r = {}),
          w()(r, H.b.CurationStudio, 'Curation Studio'),
          w()(r, H.b.MomentMakerPro, 'Moment Maker Pro'),
          w()(r, H.b.MomentMakerLite, void 0),
          w()(r, H.b.MomentMakerMobile, void 0),
          r),
        Z = (function (e) {
          g()(n, e)
          var t = C()(n)
          function n() {
            var e
            m()(this, n)
            for (var i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              w()(f()(e), '_renderAuthorMomentSummary', function () {
                var t = e.props.onClick,
                  n = e._getLinkToPreview(),
                  i = { pathname: n, anchorless: !0 }
                return I.a.createElement(M.a, { exact: !1, path: n }, function (n) {
                  return I.a.createElement(
                    S.a,
                    {
                      accessibilityRole: 'tab',
                      accessibilityState: { selected: n },
                      link: i,
                      onClick: t,
                      style: ne.root,
                    },
                    I.a.createElement(
                      A.a,
                      { style: ne.leftContainer },
                      e._renderTitle(),
                      e._renderDescription(),
                      I.a.createElement(
                        A.a,
                        { style: ne.topMargin },
                        I.a.createElement(T.a, null, e._renderVisibilityLabel(), e._renderCreationSource()),
                      ),
                      e._renderLastModifiedTime(),
                    ),
                    I.a.createElement(A.a, { style: ne.rightContainer }, e._renderCoverImage(), e._renderButtons()),
                  )
                })
              }),
              w()(f()(e), '_renderViewerMomentSummary', function () {
                var t = e.props.onClick
                return I.a.createElement(
                  S.a,
                  { link: e._getLinkToMoment(), onClick: t, style: ne.root },
                  I.a.createElement(
                    A.a,
                    { style: ne.leftContainer },
                    e._renderAuthorCategory(),
                    e._renderTitle(),
                    I.a.createElement(A.a, { style: ne.topMarginSmall }, e._renderVisibilityLabel()),
                  ),
                  e._renderCoverImage(),
                )
              }),
              w()(f()(e), '_renderAuthorCategory', function () {
                var t = e.props,
                  n = t.author,
                  i = t.category,
                  a = t.isTOO,
                  r = t.lastPublishedTime,
                  o = a
                    ? i
                      ? I.a.createElement(L.b, { color: 'gray700', size: 'subtext2' }, i)
                      : null
                    : n
                    ? I.a.createElement(k.a, { author: n, size: 'subtext2' })
                    : null
                return I.a.createElement(
                  A.a,
                  { style: ne.authorCategoryContainer },
                  I.a.createElement(
                    T.a,
                    { style: ne.horizontalContainer },
                    o,
                    r ? I.a.createElement(L.b, { size: 'subtext2' }, I.a.createElement(z.a, { timestamp: r })) : null,
                  ),
                )
              }),
              w()(f()(e), '_renderTitle', function () {
                var t = e.props,
                  n = t.title,
                  i = t.withAuthorControls,
                  a = n || q
                return i
                  ? I.a.createElement(
                      L.b,
                      { numberOfLines: 2, size: 'headline1', weight: 'heavy', withHashflags: !0 },
                      a,
                    )
                  : I.a.createElement(L.b, { weight: 'bold', withHashflags: !0 }, a)
              }),
              w()(f()(e), '_renderDescription', function () {
                var t = e.props.description
                return t
                  ? I.a.createElement(
                      A.a,
                      { style: ne.topMargin },
                      I.a.createElement(
                        L.b,
                        { color: 'gray700', numberOfLines: 3, size: 'body', withHashflags: !0 },
                        t,
                      ),
                    )
                  : null
              }),
              w()(f()(e), '_renderCoverImage', function () {
                var t = e.props.coverMedia,
                  n = t && B.a.getOriginalImage(t)
                return I.a.createElement(
                  A.a,
                  { style: ne.coverContainer },
                  n && t
                    ? I.a.createElement(R.a, {
                        accessibilityLabel: '',
                        aspectMode: D.a.SQUARE,
                        backgroundColor: B.a.getBackgroundColor(t),
                        cropCandidates: B.a.getCropCandidates(t),
                        image: n,
                      })
                    : I.a.createElement(V.a, { ratio: 1 }, I.a.createElement(k.c, { icon: 'lightning' })),
                  t ? I.a.createElement(k.b, { style: ne.lightningBadge }) : null,
                )
              }),
              w()(f()(e), '_renderButtons', function () {
                var t = e.props,
                  n = t.author,
                  i = t.isCurationStudioMoment,
                  a = t.isTOO,
                  r = t.lastPublishedTime,
                  o = t.location.pathname,
                  c = t.momentId,
                  s = t.title,
                  l = t.visibilityMode,
                  d = o === e._getLinkToPreview()
                return I.a.createElement(
                  A.a,
                  { style: ne.buttonContainer },
                  I.a.createElement(P.a, {
                    author: n,
                    isTOO: a,
                    lastPublishedTime: r,
                    momentId: c,
                    redirectOnDelete: d ? '/i/moment_maker' : void 0,
                    scribeNamespace: F,
                    size: 'xSmall',
                    title: s,
                    visibilityMode: l,
                    withGrayIcons: !0,
                    withLinkAction: !i,
                  }),
                )
              }),
              w()(f()(e), '_renderVisibilityLabel', function () {
                var t = e.props,
                  n = t.visibilityMode
                if (t.withAuthorControls || n !== H.d.public) {
                  var i = X[n],
                    a = Q[n]
                  return i && a ? I.a.createElement(L.b, { color: i, weight: 'bold' }, a) : null
                }
              }),
              w()(f()(e), '_renderCreationSource', function () {
                var t = e.props.creationSource,
                  n = t && J[t]
                return n ? I.a.createElement(L.b, { color: 'gray700' }, n) : null
              }),
              w()(f()(e), '_renderLastModifiedTime', function () {
                var t = e.props,
                  n = t.hasUnpublishedChanges,
                  i = t.lastModifiedTime,
                  a = t.visibilityMode
                return i
                  ? I.a.createElement(
                      A.a,
                      { style: ne.horizontalContainer },
                      n && a !== H.d.private
                        ? I.a.createElement(j.a, { background: 'orange500', style: ne.pendingChangesLabel }, Y)
                        : null,
                      I.a.createElement(
                        L.b,
                        { color: 'gray700', size: 'subtext2' },
                        I.a.createElement(z.a, { humanReadable: !0, timestamp: i }),
                      ),
                    )
                  : null
              }),
              w()(f()(e), '_getLinkToMoment', function () {
                var t = e.props.momentId
                return '/i/events/'.concat(t)
              }),
              w()(f()(e), '_getLinkToPreview', function () {
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
        })(I.a.Component),
        $ = '15%',
        ee = '100px',
        te = '70px',
        ne = N.a.create(function (e) {
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
        ie = Object(K.a)(Z),
        ae = n('zh9S'),
        re = n('Rp9C'),
        oe = n('RqPI'),
        ce = function (e) {
          e.errorContext
          return Object(l.a)({ scribe: ae.c })
        },
        se = function (e) {
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
        le = function (e) {
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
                  c()({}, re.a.getMomentItem(n.id, n.visibility_mode, n.last_publish_time, !n.author)),
                  re.a.getAllSurfaceDetails(t.itemMetadata.clientEventInfo),
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
          component: ie,
          bindActions: ce({ errorContext: t }),
          selectData: se,
          createProps: le({ withAuthorControls: n }),
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
        _ = n('1YZw'),
        w = n('Fg8X'),
        k = n('n4jD'),
        E = n('RqPI'),
        I = n('iUle'),
        M = function (e) {
          return function (t, n, i) {
            var a = i.api,
              r = n(),
              o = Object(E.q)(r) || '',
              c = Object(k.c)(r),
              s = Object(I.a)(o),
              l = { moment_id: e, teamUserId: c }
            return a.Moments.delete(l).then(function () {
              t([w.a.deleteOne(e), s.removeEntry('moment-'.concat(e))])
            })
          }
        },
        x = n('rxPX'),
        O = Object(x.a)()
          .propsFromState(function () {
            return { activeTeamId: k.c }
          })
          .propsFromActions(function () {
            return { addToast: _.b, deleteMoment: M }
          })
          .withAnalytics({ component: 'action_sheet' }),
        P = n('ACNv'),
        A = n('3XMw'),
        S = n.n(A),
        T = n('Rp9C'),
        L = n('TnY3'),
        z = n('v6aA'),
        B = n('hiGS'),
        R = n('I/9y'),
        D = n('TW8A'),
        V = n('xrkw'),
        j = n('zIWA'),
        N = S.a.e8dff578,
        H = S.a.fcc64f01,
        K = S.a.ea193d66,
        F = S.a.e5227fe0,
        G = S.a.d0df844c,
        W = S.a.fd61ab81,
        U = S.a.aaae5e7f,
        Y = S.a.d96cf7cd,
        q = S.a.e7718461,
        X = (function (e) {
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
                        confirmation: { label: Y, headline: W, text: U, confirmButtonType: 'destructiveFilled' },
                        isEmphasized: !0,
                        onClick: e._handleDeleteConfirm,
                        text: K,
                        Icon: B.a,
                      }),
                      r && o.push({ link: '/i/events/'.concat(i), onClick: e._handleClickLink, text: F, Icon: R.a }),
                      a && o.push({ link: '/i/moment_maker/edit/'.concat(i), text: N, Icon: D.a }),
                      o.push({
                        link: '/i/moments/'.concat(i, '/analytics'),
                        onClick: e._handleNavigateAnalytics,
                        text: G,
                        Icon: V.a,
                      }))
                    : n && o.push({ onClick: e._handleReport, text: H, Icon: j.a }),
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
      p()(X, 'contextType', z.a)
      var Q = O(X),
        J = Object(L.a)(Q),
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
