;(window.webpackJsonp = window.webpackJsonp || []).push([
  [219, 169],
  {
    '0mK8': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return f
        }),
        n.d(t, 'c', function () {
          return p
        })
      n('ho0z'), n('uFXj')
      var r = n('ERkP'),
        i = n.n(r),
        o = n('MWbm'),
        a = n('GcQN'),
        c = n('PU7B'),
        s = n('/WPq'),
        l = n('78ol'),
        u = n('jV+4'),
        d = n('rHpw'),
        m = function (e) {
          var t = e.author,
            n = e.color,
            r = void 0 === n ? 'normal' : n,
            o = e.size,
            a = void 0 === o ? 'subtext2' : o,
            c = e.style,
            s = e.withHoverCard,
            l = void 0 === s || s,
            d = e.withLink,
            m = void 0 !== d && d,
            f = e.withScreenName,
            p = void 0 !== f && f
          return i.a.createElement(u.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[a],
            color: r,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: a,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: a,
            style: [h.authorUserName, c],
            withHoverCard: l,
            withLink: m,
            withScreenName: p,
          })
        },
        f = function (e) {
          var t = e.style
          return i.a.createElement(
            o.a,
            { style: [h.lightningBadge, t] },
            i.a.createElement(a.a, { style: h.lightningIcon }),
          )
        },
        p = function (e) {
          var t = e.icon
          return i.a.createElement(
            o.a,
            { style: h.placeholderIconContainer },
            'news' === t
              ? i.a.createElement(c.a, { style: h.placeholderIcon })
              : 'lists' === t
              ? i.a.createElement(s.a, { style: h.placeholderIcon })
              : i.a.createElement(l.a, { style: h.placeholderIcon }),
          )
        },
        h = d.a.create(function (e) {
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
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        m = n.n(d),
        f = n('AuHH'),
        p = n.n(f),
        h = n('KEM+'),
        b = n.n(h),
        y = (n('2G9S'), n('KOtZ'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        v = n.n(y),
        g = n('3XMw'),
        O = n.n(g),
        w = n('oQhu'),
        C = n('mjJ+'),
        E = n('eb3s')
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
          return m()(this, n)
        }
      }
      var P = O.a.cfd2f35d,
        k = (function (e) {
          u()(n, e)
          var t = _(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(s()(e), 'state', { activeConfirmation: null }),
              b()(s()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              b()(s()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              b()(s()(e), '_handleCancelConfirm', function () {
                e.setState({ activeConfirmation: null })
              }),
              e
            )
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClose,
                    t = this.state.activeConfirmation
                  return t
                    ? this._renderConfirmation(t)
                    : v.a.createElement(C.a, {
                        cancelButtonLabel: P,
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
                    r = t.headline,
                    i = t.label,
                    o = t.text,
                    a = t.withCancelButton
                  return v.a.createElement(E.a, {
                    confirmButtonLabel: i,
                    confirmButtonType: n,
                    headline: r,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: o,
                    withCancelButton: a,
                  })
                },
              },
              {
                key: '_getProcessedActionItems',
                value: function () {
                  var e = this.props,
                    t = e.actionItems,
                    n = e.dividerIndices,
                    r = e.onClose
                  return I(t, n, r, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        I = Object(w.a)(function (e, t, n, r) {
          return e.reduce(function (e, i, o) {
            var a = i.Icon,
              c = i.behavioralEventContext,
              s = i.confirmation,
              l = i.disabled,
              u = i.excludeFromActionMenu,
              d = i.isEmphasized,
              m = i.link,
              f = i.onClick,
              p = i.subText,
              h = i.testID,
              b = i.text
            i.withCancelButton
            if (!u) {
              var y = f
                ? function () {
                    s
                      ? s.render
                        ? r({ callback: f, render: s.render })
                        : r({
                            callback: f,
                            text: s.text,
                            headline: s.headline,
                            label: s.label,
                            confirmButtonType: s.confirmButtonType,
                            withCancelButton: s.withCancelButton,
                          })
                      : (f(), n())
                  }
                : n
              e.push({
                behavioralEventContext: c,
                disabled: l,
                Icon: a,
                isEmphasized: d,
                testID: h,
                subText: p,
                text: b,
                onClick: y,
                link: m,
                withBottomBorder: t && t.includes(o),
              })
            }
            return e
          }, [])
        })
      t.default = k
    },
    BUB3: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r),
        o = n('m3Bd'),
        a = n.n(o),
        c = n('ERkP'),
        s = n.n(c),
        l = n('sNn6'),
        u = n('rHpw'),
        d = n('MWbm')
      function m(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var p = u.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: f(
            f({}, u.a.absoluteFillObject),
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
          n = a()(e, ['children'])
        return s.a.createElement(l.a, n, function (e) {
          return s.a.createElement(
            d.a,
            { style: e && p.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? s.a.createElement(d.a, { pointerEvents: 'none', style: p.overlay }) : null,
          )
        })
      }
    },
    MREw: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        m = n.n(d),
        f = n('AuHH'),
        p = n.n(f),
        h = n('KEM+'),
        b = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        v = n.n(y),
        g = (n('hBvt'), n('/yvb')),
        O = n('3XMw'),
        w = n.n(O).a.abd845fd,
        C = v.a.forwardRef(function (e, t) {
          var n = e.icon,
            r = e.link,
            i = e.onPress,
            o = e.size,
            a = e.style,
            c = e.type
          return v.a.createElement(g.a, {
            accessibilityLabel: w,
            hoverLabel: { label: w },
            icon: n,
            link: r,
            onPress: i,
            pullRight: !0,
            ref: t,
            size: o,
            style: a,
            type: c || 'primaryText',
          })
        }),
        E = n('TW8A'),
        _ = n('hACr'),
        P = n('Vgm9'),
        k = n('ObVQ'),
        I = n('Rp9C'),
        M = n('MWbm'),
        j = n('Irs7'),
        x = n('rHpw')
      function R(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : R(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            r = p()(e)
          if (t) {
            var i = p()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var B = (function (e) {
          u()(n, e)
          var t = A(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(s()(e), '_editButton', v.a.createRef()),
              b()(s()(e), '_handleClickEdit', function () {
                e._scribeAction('edit_button', 'click')
              }),
              b()(s()(e), '_scribeAction', function (t, n) {
                var r = e.props,
                  i = r.analytics,
                  o = r.scribeNamespace
                i.scribe(S(S({ action: n, data: { items: [e._getScribeMomentItem()] } }, o), {}, { element: t }))
              }),
              b()(s()(e), '_focusOnEditButton', function () {
                var t, n
                e.props.isFromMomentPreviewBar &&
                  (null === (t = e._editButton) || void 0 === t ? void 0 : t.current) &&
                  (null === (n = e._editButton) || void 0 === n || n.current.focus())
              }),
              b()(s()(e), '_getEditIcon', function () {
                var t = e.props.withGrayIcons && T.colorDeepGray
                return v.a.createElement(E.a, { style: t })
              }),
              b()(s()(e), '_getScribeMomentItem', function () {
                var t = e.props,
                  n = t.isTOO,
                  r = t.lastPublishedTime,
                  i = t.momentId,
                  o = t.visibilityMode
                return I.a.getMomentItem(i, o, r, n)
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
                    t = e.author,
                    n = e.momentId,
                    r = e.redirectOnDelete,
                    i = e.scribeNamespace,
                    o = e.size,
                    a = e.title,
                    c = e.withGrayIcons,
                    s = e.withLinkAction,
                    l = this._getEditIcon()
                  return v.a.createElement(
                    M.a,
                    { style: T.buttonContainer },
                    v.a.createElement(
                      _.a,
                      { handlers: b()({}, k.b.rightEditingPreviewPanel, this._focusOnEditButton) },
                      v.a.createElement(C, {
                        icon: l,
                        link: '/i/moment_maker/edit/'.concat(n),
                        onPress: this._handleClickEdit,
                        ref: this._editButton,
                        size: o,
                        style: T.button,
                        type: c ? 'brandText' : void 0,
                      }),
                    ),
                    v.a.createElement(P.a, {
                      author: t,
                      eventId: n,
                      iconStyle: c ? T.colorDeepGray : void 0,
                      redirectOnDelete: r,
                      scribeMomentItem: this._getScribeMomentItem(),
                      scribeNamespace: i,
                      size: o,
                      style: T.buttonExtraSpace,
                      title: a,
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
        })(v.a.Component),
        T = x.a.create(function (e) {
          return {
            buttonContainer: { flexDirection: 'row' },
            button: { marginRight: e.spaces.space4 },
            buttonExtraSpace: { marginStart: e.spaces.space12 },
            colorDeepGray: { color: e.colors.gray700 },
          }
        })
      t.a = Object(j.a)(B)
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
      var r = n('3XMw'),
        i = n.n(r),
        o = n('oQhu'),
        a = n('OrGc'),
        c = Object.freeze({
          editingPanelNextItem: 'w',
          editingPanelPreviousItem: 'q',
          rightEditingPreviewPanel: 'g t',
          leftNavigationMenuPanel: 'g o',
          tweetDiscoveryPanel: 'g x',
          addTweet: 'i t',
          removeTweet: 'd t',
        }),
        s = Object(o.a)(function (e) {
          return [
            { description: i.a.d5696fcb, keys: a.e.openKeyboardShortcuts, universal: !0 },
            { description: i.a.e814ed10, keys: c.editingPanelNextItem, universal: !0 },
            { description: i.a.c1250b41, keys: c.editingPanelPreviousItem, universal: !0 },
            { description: i.a.ddd4bf24, keys: a.e.nextItem, universal: !0 },
            { description: i.a.ia2742f9, keys: a.e.previousItem, universal: !0 },
            { description: i.a.a8b6f61a, keys: 'space', universal: !1 },
            { description: i.a.dfe59ab8, keys: 'esc', universal: !1 },
            { description: i.a.c602967d, keys: c.rightEditingPreviewPanel, universal: !1 },
            { description: i.a.g42208cb, keys: c.leftNavigationMenuPanel, universal: !1 },
            { description: i.a.gf73b335, keys: c.tweetDiscoveryPanel, universal: !1 },
            { description: i.a.g45af04e, keys: c.addTweet, universal: !1 },
            { description: i.a.ee9c4013, keys: c.removeTweet, universal: !1 },
          ]
        })
    },
    Pb8P: function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r,
        i,
        o,
        a = n('KEM+'),
        c = n.n(a),
        s = (n('Blm6'), n('1t7P'), n('jQ/y'), n('ezF+')),
        l = n('VPAj'),
        u = n('Fg8X'),
        d = (n('OZaJ'), n('VrFO')),
        m = n.n(d),
        f = n('Y9Ll'),
        p = n.n(f),
        h = n('1Pcy'),
        b = n.n(h),
        y = n('5Yy7'),
        v = n.n(y),
        g = n('N+ot'),
        O = n.n(g),
        w = n('AuHH'),
        C = n.n(w),
        E = (n('2G9S'), n('0mK8')),
        _ = n('ERkP'),
        P = n.n(_),
        k = n('BUB3'),
        I = n('3XMw'),
        M = n.n(I),
        j = n('MREw'),
        x = n('MWbm'),
        R = n('htQn'),
        S = n('pjBI'),
        A = n('t62R'),
        B = n('GBcw'),
        T = n('3dad'),
        D = n('TIdA'),
        L = n('A91F'),
        z = n('9Xij'),
        H = n('Wms4'),
        N = n('rHpw'),
        W = n('29/U'),
        F = n('TnY3')
      function V(e) {
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
            r = C()(e)
          if (t) {
            var i = C()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return O()(this, n)
        }
      }
      var G = { page: 'moment_maker', section: 'landing', component: 'moment_summary' },
        K = M.a.a1d5303c,
        X = M.a.cc8f8a8f,
        U = M.a.c33a97d6,
        Y = M.a.i7e9ecf2,
        Z = M.a.jceadc3e,
        Q =
          ((r = {}),
          c()(r, W.d.private, 'magenta500'),
          c()(r, W.d.public, 'green500'),
          c()(r, W.d.unlisted, 'gray700'),
          r),
        J = ((i = {}), c()(i, W.d.private, K), c()(i, W.d.public, U), c()(i, W.d.unlisted, X), i),
        q =
          ((o = {}),
          c()(o, W.b.CurationStudio, 'Curation Studio'),
          c()(o, W.b.MomentMakerPro, 'Moment Maker Pro'),
          c()(o, W.b.MomentMakerLite, void 0),
          c()(o, W.b.MomentMakerMobile, void 0),
          o),
        $ = (function (e) {
          v()(n, e)
          var t = V(n)
          function n() {
            var e
            m()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              c()(b()(e), '_renderAuthorMomentSummary', function () {
                var t = e.props.onClick,
                  n = e._getLinkToPreview(),
                  r = { pathname: n, anchorless: !0 }
                return P.a.createElement(k.a, { exact: !1, path: n }, function (n) {
                  return P.a.createElement(
                    R.a,
                    {
                      accessibilityRole: 'tab',
                      accessibilityState: { selected: n },
                      link: r,
                      onClick: t,
                      style: re.root,
                    },
                    P.a.createElement(
                      x.a,
                      { style: re.leftContainer },
                      e._renderTitle(),
                      e._renderDescription(),
                      P.a.createElement(
                        x.a,
                        { style: re.topMargin },
                        P.a.createElement(S.a, null, e._renderVisibilityLabel(), e._renderCreationSource()),
                      ),
                      e._renderLastModifiedTime(),
                    ),
                    P.a.createElement(x.a, { style: re.rightContainer }, e._renderCoverImage(), e._renderButtons()),
                  )
                })
              }),
              c()(b()(e), '_renderViewerMomentSummary', function () {
                var t = e.props.onClick
                return P.a.createElement(
                  R.a,
                  { link: e._getLinkToMoment(), onClick: t, style: re.root },
                  P.a.createElement(
                    x.a,
                    { style: re.leftContainer },
                    e._renderAuthorCategory(),
                    e._renderTitle(),
                    P.a.createElement(x.a, { style: re.topMarginSmall }, e._renderVisibilityLabel()),
                  ),
                  e._renderCoverImage(),
                )
              }),
              c()(b()(e), '_renderAuthorCategory', function () {
                var t = e.props,
                  n = t.author,
                  r = t.category,
                  i = t.isTOO,
                  o = t.lastPublishedTime,
                  a = i
                    ? r
                      ? P.a.createElement(A.b, { color: 'gray700', size: 'subtext2' }, r)
                      : null
                    : n
                    ? P.a.createElement(E.a, { author: n, size: 'subtext2' })
                    : null
                return P.a.createElement(
                  x.a,
                  { style: re.authorCategoryContainer },
                  P.a.createElement(
                    S.a,
                    { style: re.horizontalContainer },
                    a,
                    o ? P.a.createElement(A.b, { size: 'subtext2' }, P.a.createElement(B.a, { timestamp: o })) : null,
                  ),
                )
              }),
              c()(b()(e), '_renderTitle', function () {
                var t = e.props,
                  n = t.title,
                  r = t.withAuthorControls,
                  i = n || Z
                return r
                  ? P.a.createElement(
                      A.b,
                      { numberOfLines: 2, size: 'headline1', weight: 'heavy', withHashflags: !0 },
                      i,
                    )
                  : P.a.createElement(A.b, { weight: 'bold', withHashflags: !0 }, i)
              }),
              c()(b()(e), '_renderDescription', function () {
                var t = e.props.description
                return t
                  ? P.a.createElement(
                      x.a,
                      { style: re.topMargin },
                      P.a.createElement(
                        A.b,
                        { color: 'gray700', numberOfLines: 3, size: 'body', withHashflags: !0 },
                        t,
                      ),
                    )
                  : null
              }),
              c()(b()(e), '_renderCoverImage', function () {
                var t = e.props.coverMedia,
                  n = t && T.a.getOriginalImage(t)
                return P.a.createElement(
                  x.a,
                  { style: re.coverContainer },
                  n && t
                    ? P.a.createElement(D.a, {
                        accessibilityLabel: '',
                        aspectMode: L.a.SQUARE,
                        backgroundColor: T.a.getBackgroundColor(t),
                        cropCandidates: T.a.getCropCandidates(t),
                        image: n,
                      })
                    : P.a.createElement(z.a, { ratio: 1 }, P.a.createElement(E.c, { icon: 'lightning' })),
                  t ? P.a.createElement(E.b, { style: re.lightningBadge }) : null,
                )
              }),
              c()(b()(e), '_renderButtons', function () {
                var t = e.props,
                  n = t.author,
                  r = t.isCurationStudioMoment,
                  i = t.isTOO,
                  o = t.lastPublishedTime,
                  a = t.location.pathname,
                  c = t.momentId,
                  s = t.title,
                  l = t.visibilityMode,
                  u = a === e._getLinkToPreview()
                return P.a.createElement(
                  x.a,
                  { style: re.buttonContainer },
                  P.a.createElement(j.a, {
                    author: n,
                    isTOO: i,
                    lastPublishedTime: o,
                    momentId: c,
                    redirectOnDelete: u ? '/i/moment_maker' : void 0,
                    scribeNamespace: G,
                    size: 'xSmall',
                    title: s,
                    visibilityMode: l,
                    withGrayIcons: !0,
                    withLinkAction: !r,
                  }),
                )
              }),
              c()(b()(e), '_renderVisibilityLabel', function () {
                var t = e.props,
                  n = t.visibilityMode
                if (t.withAuthorControls || n !== W.d.public) {
                  var r = Q[n],
                    i = J[n]
                  return r && i ? P.a.createElement(A.b, { color: r, weight: 'bold' }, i) : null
                }
              }),
              c()(b()(e), '_renderCreationSource', function () {
                var t = e.props.creationSource,
                  n = t && q[t]
                return n ? P.a.createElement(A.b, { color: 'gray700' }, n) : null
              }),
              c()(b()(e), '_renderLastModifiedTime', function () {
                var t = e.props,
                  n = t.hasUnpublishedChanges,
                  r = t.lastModifiedTime,
                  i = t.visibilityMode
                return r
                  ? P.a.createElement(
                      x.a,
                      { style: re.horizontalContainer },
                      n && i !== W.d.private
                        ? P.a.createElement(H.a, { background: 'orange500', style: re.pendingChangesLabel }, Y)
                        : null,
                      P.a.createElement(
                        A.b,
                        { color: 'gray700', size: 'subtext2' },
                        P.a.createElement(B.a, { humanReadable: !0, timestamp: r }),
                      ),
                    )
                  : null
              }),
              c()(b()(e), '_getLinkToMoment', function () {
                var t = e.props.momentId
                return '/i/events/'.concat(t)
              }),
              c()(b()(e), '_getLinkToPreview', function () {
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
        })(P.a.Component),
        ee = '15%',
        te = '100px',
        ne = '70px',
        re = N.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              justifyContent: 'space-between',
            },
            leftContainer: {
              justifyContent: 'flex-start',
              maxWidth: 'calc(100% - '.concat(ne, ')'),
              minWidth: 'calc(100% - '.concat(te, ')'),
              paddingRight: e.spaces.space16,
              width: 'calc(100% - '.concat(ee, ')'),
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
              height: ee,
              maxHeight: te,
              maxWidth: te,
              minHeight: ne,
              minWidth: ne,
              overflow: 'hidden',
              width: ee,
            },
            lightningBadge: { bottom: e.spaces.space12, left: e.spaces.space12 },
            buttonContainer: { marginTop: e.spaces.space16, width: '100%' },
          }
        }),
        ie = Object(F.a)($),
        oe = n('zh9S'),
        ae = n('Rp9C'),
        ce = n('RqPI')
      function se(e, t) {
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
            ? se(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : se(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ue = function (e) {
          var t = e.entry,
            n = e.moment,
            r = le(
              le({}, ae.a.getMomentItem(n.id, n.visibility_mode, n.last_publish_time, !n.author)),
              ae.a.getAllSurfaceDetails(t.itemMetadata.clientEventInfo),
            ),
            i =
              t.itemMetadata &&
              t.itemMetadata.clientEventInfo &&
              t.itemMetadata.clientEventInfo.details &&
              t.itemMetadata.clientEventInfo.details.momentsDetails
          if (i) {
            var o = i.contextScribeInfo && i.contextScribeInfo.position
            return le(
              le({}, r),
              {},
              {
                moments_details: le(
                  le({}, r.moments_details),
                  {},
                  { guide_category_id: i.guideCategoryId, impression_id: i.impressionId },
                ),
                position: o ? parseInt(o, 10) : void 0,
              },
            )
          }
          return r
        },
        de = function (e) {
          e.errorContext
          return Object(l.a)({ scribe: oe.c })
        },
        me = function (e) {
          var t = e.entry
          return {
            author: function (e) {
              return u.a.selectAuthor(e, t.content.momentId)
            },
            coverMedia: function (e) {
              return u.a.selectCoverMedia(e, t.content.momentId)
            },
            isCurationStudioMoment: function (e) {
              return u.a.selectIsCurationStudioMoment(e, t.content.momentId)
            },
            isLoggedIn: ce.m,
            isTOO: function (e) {
              return u.a.selectIsTOO(e, t.content.momentId)
            },
            moment: function (e) {
              return u.a.select(e, t.content.momentId)
            },
            visibilityMode: function (e) {
              return u.a.selectVisibilityMode(e, t.content.momentId)
            },
          }
        },
        fe = function (e) {
          var t = e.withAuthorControls
          return function (e) {
            var n = e.actions.scribe,
              r = e.data,
              i = r.author,
              o = r.coverMedia,
              a = r.isCurationStudioMoment,
              c = (r.isLoggedIn, r.isTOO),
              s = r.moment,
              l = r.visibilityMode,
              u = e.entry,
              d = e.scribeNamespace
            if (!s) return null
            var m = ue({ entry: u, moment: s })
            return {
              author: i,
              category: s.subcategory_string,
              coverMedia: o,
              creationSource: s.creation_source,
              description: s.description || '',
              isCurationStudioMoment: a,
              isTOO: c,
              hasUnpublishedChanges: s.has_unpublished_changes,
              lastModifiedTime: s.last_modified_time,
              lastPublishedTime: s.last_publish_time,
              momentId: s.id,
              onClick: function () {
                n(le(le({}, d), {}, { component: 'moment_summary', action: 'click' }), { items: [m] })
              },
              title: s.title || '',
              visibilityMode: l,
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
          bindActions: de({ errorContext: t }),
          selectData: me,
          createProps: fe({ withAuthorControls: n }),
        })
      }
    },
    Vgm9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return re
      })
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        o = n('Y9Ll'),
        a = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        m = n.n(d),
        f = n('AuHH'),
        p = n.n(f),
        h = n('KEM+'),
        b = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        v = n.n(y),
        g = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        O = n.n(g),
        w = n('1YZw'),
        C = n('Fg8X'),
        E = n('n4jD'),
        _ = n('RqPI'),
        P = n('iUle'),
        k = function (e) {
          return function (t, n, r) {
            var i = r.api,
              o = n(),
              a = Object(_.q)(o) || '',
              c = Object(E.c)(o),
              s = Object(P.a)(a),
              l = { moment_id: e, teamUserId: c }
            return i.Moments.delete(l).then(function () {
              t([C.a.deleteOne(e), s.removeEntry('moment-'.concat(e))])
            })
          }
        },
        I = n('rxPX'),
        M = Object(I.a)()
          .propsFromState(function () {
            return { activeTeamId: E.c }
          })
          .propsFromActions(function () {
            return { addToast: w.b, deleteMoment: k }
          })
          .withAnalytics({ component: 'action_sheet' }),
        j = n('ACNv'),
        x = n('3XMw'),
        R = n.n(x),
        S = n('Rp9C'),
        A = n('TnY3'),
        B = n('v6aA'),
        T = n('hiGS'),
        D = n('I/9y'),
        L = n('TW8A'),
        z = n('xrkw'),
        H = n('zIWA')
      function N(e, t) {
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
            ? N(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function F(e) {
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
          return m()(this, n)
        }
      }
      var V = R.a.e8dff578,
        G = R.a.fcc64f01,
        K = R.a.ea193d66,
        X = R.a.e5227fe0,
        U = R.a.d0df844c,
        Y = R.a.fd61ab81,
        Z = R.a.aaae5e7f,
        Q = R.a.d96cf7cd,
        J = R.a.e7718461,
        q = (function (e) {
          u()(n, e)
          var t = F(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(s()(e), '_getActionItems', function () {
                var t = e.props,
                  n = t.author,
                  r = t.id,
                  i = t.withEditAction,
                  o = t.withLinkAction,
                  a = []
                return (
                  e._isOwner()
                    ? (a.push({
                        confirmation: { label: Q, headline: Y, text: Z, confirmButtonType: 'destructiveFilled' },
                        isEmphasized: !0,
                        onClick: e._handleDeleteConfirm,
                        text: K,
                        Icon: T.a,
                      }),
                      o && a.push({ link: '/i/events/'.concat(r), onClick: e._handleClickLink, text: X, Icon: D.a }),
                      i && a.push({ link: '/i/moment_maker/edit/'.concat(r), text: V, Icon: L.a }),
                      a.push({
                        link: '/i/moments/'.concat(r, '/analytics'),
                        onClick: e._handleNavigateAnalytics,
                        text: U,
                        Icon: z.a,
                      }))
                    : n && a.push({ onClick: e._handleReport, text: G, Icon: H.a }),
                  a
                )
              }),
              b()(s()(e), '_handleReport', function () {
                var t = e.props,
                  n = t.analytics.contextualScribeNamespace,
                  r = t.history,
                  i = t.id,
                  o = t.scribeNamespace,
                  a = W(W({}, n), o)
                r.push({
                  pathname: '/i/report/moment/'.concat(i),
                  state: { clientReferer: window.location.pathname, isMedia: !0, scribeNamespace: a },
                })
              }),
              b()(s()(e), '_handleClickLink', function () {
                e._scribeAction('click', 'link_button')
              }),
              b()(s()(e), '_handleNavigateAnalytics', function () {
                e._scribeAction('moment_analytics')
              }),
              b()(s()(e), '_handleDeleteConfirm', function () {
                var t = e.props,
                  n = t.addToast,
                  r = t.deleteMoment,
                  i = t.history,
                  o = t.id,
                  a = t.redirectOnDelete
                r(o).then(function () {
                  e._scribeAction('delete'),
                    n({ text: J }),
                    a && i.goBack({ backLocation: a, shouldReplaceOnFallback: !0 })
                })
              }),
              b()(s()(e), '_scribeAction', function (t, n) {
                var r = e.props,
                  i = r.analytics,
                  o = r.id,
                  a = r.scribeMomentItem,
                  c = r.scribeNamespace,
                  s = W(
                    W({}, i.contextualScribeData),
                    {},
                    {
                      items: [].concat(
                        O()(i.contextualScribeData && i.contextualScribeData.items ? i.contextualScribeData.items : []),
                        [a || S.a.getMomentItem(o)],
                      ),
                    },
                  )
                i.scribe(W({ action: t, data: s, element: n }, c))
              }),
              b()(s()(e), '_isOwner', function () {
                var t = e.props,
                  n = t.activeTeamId,
                  r = t.author,
                  i = e.context.loggedInUserId,
                  o = i && (null == r ? void 0 : r.id_str) === i,
                  a = n && (null == r ? void 0 : r.id_str) === n
                return !!o || !!a
              }),
              e
            )
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  return this.context.loggedInUserId
                    ? v.a.createElement(j.default, { actionItems: this._getActionItems(), onClose: this.props.onClose })
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      b()(q, 'contextType', B.a)
      var $ = M(q),
        ee = Object(A.a)($),
        te = n('2G3J')
      function ne(e) {
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
          return m()(this, n)
        }
      }
      var re = (function (e) {
        u()(n, e)
        var t = ne(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            b()(s()(e), '_renderMenu', function (t) {
              var n = e.props,
                r = n.author,
                i = n.eventId,
                o = n.redirectOnDelete,
                a = n.scribeMomentItem,
                c = n.scribeNamespace,
                s = n.title,
                l = n.withEditAction,
                u = n.withLinkAction
              return v.a.createElement(ee, {
                author: r,
                id: i,
                onClose: t,
                redirectOnDelete: o,
                scribeMomentItem: a,
                scribeNamespace: c,
                title: s,
                withEditAction: l,
                withLinkAction: u,
              })
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
                  t = e.iconStyle,
                  n = e.onPress,
                  r = e.size,
                  i = e.style,
                  o = e.type
                return v.a.createElement(te.a, {
                  iconStyle: t,
                  onPress: n,
                  renderMenu: this._renderMenu,
                  size: r,
                  style: i,
                  type: o,
                })
              },
            },
          ]),
          n
        )
      })(v.a.Component)
      b()(re, 'defaultProps', { withEditAction: !0 })
    },
    hiGS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r),
        o = n('ERkP'),
        a = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            a.a.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
  },
])
//# sourceMappingURL=WIPED
