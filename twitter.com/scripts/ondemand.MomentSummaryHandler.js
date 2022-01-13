;(window.webpackJsonp = window.webpackJsonp || []).push([
  [215, 167],
  {
    '0mK8': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      }),
        n.d(t, 'b', function () {
          return m
        }),
        n.d(t, 'c', function () {
          return f
        })
      n('ho0z'), n('uFXj')
      var r = n('ERkP'),
        i = n('MWbm'),
        o = n('GcQN'),
        a = n('PU7B'),
        c = n('/WPq'),
        s = n('78ol'),
        l = n('jV+4'),
        u = n('rHpw'),
        d = function (e) {
          var t = e.author,
            n = e.color,
            i = void 0 === n ? 'normal' : n,
            o = e.size,
            a = void 0 === o ? 'subtext2' : o,
            c = e.style,
            s = e.withHoverCard,
            u = void 0 === s || s,
            d = e.withLink,
            m = void 0 !== d && d,
            f = e.withScreenName,
            h = void 0 !== f && f
          return r.createElement(l.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[a],
            color: i,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: a,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: a,
            style: [p.authorUserName, c],
            withHoverCard: u,
            withLink: m,
            withScreenName: h,
          })
        },
        m = function (e) {
          var t = e.style
          return r.createElement(
            i.a,
            { style: [p.lightningBadge, t] },
            r.createElement(o.a, { style: p.lightningIcon }),
          )
        },
        f = function (e) {
          var t = e.icon
          return r.createElement(
            i.a,
            { style: p.placeholderIconContainer },
            'news' === t
              ? r.createElement(a.a, { style: p.placeholderIcon })
              : 'lists' === t
              ? r.createElement(c.a, { style: p.placeholderIcon })
              : r.createElement(s.a, { style: p.placeholderIcon }),
          )
        },
        p = u.a.create(function (e) {
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
        v = n('3XMw'),
        g = n.n(v),
        O = n('oQhu'),
        w = n('mjJ+'),
        C = n('eb3s')
      function E(e) {
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
      var _ = g.a.cfd2f35d,
        P = (function (e) {
          u()(n, e)
          var t = E(n)
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
                    : y.createElement(w.a, {
                        cancelButtonLabel: _,
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
                  return y.createElement(C.a, {
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
                  return k(t, n, r, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(y.Component),
        k = Object(O.a)(function (e, t, n, r) {
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
      t.default = P
    },
    BUB3: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r),
        o = n('m3Bd'),
        a = n.n(o),
        c = n('ERkP'),
        s = n('sNn6'),
        l = n('rHpw'),
        u = n('MWbm')
      function d(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = l.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: m(
            m({}, l.a.absoluteFillObject),
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
        return c.createElement(s.a, n, function (e) {
          return c.createElement(
            u.a,
            { style: e && f.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? c.createElement(u.a, { pointerEvents: 'none', style: f.overlay }) : null,
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
        v = (n('hBvt'), n('/yvb')),
        g = n('3XMw'),
        O = n.n(g).a.abd845fd,
        w = y.forwardRef(function (e, t) {
          var n = e.icon,
            r = e.link,
            i = e.onPress,
            o = e.size,
            a = e.style,
            c = e.type
          return y.createElement(v.a, {
            accessibilityLabel: O,
            hoverLabel: { label: O },
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
        C = n('TW8A'),
        E = n('hACr'),
        _ = n('Vgm9'),
        P = n('ObVQ'),
        k = n('Rp9C'),
        I = n('MWbm'),
        M = n('Irs7'),
        j = n('rHpw')
      function x(e, t) {
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
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function S(e) {
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
      var A = (function (e) {
          u()(n, e)
          var t = S(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(s()(e), '_editButton', y.createRef()),
              b()(s()(e), '_handleClickEdit', function () {
                e._scribeAction('edit_button', 'click')
              }),
              b()(s()(e), '_scribeAction', function (t, n) {
                var r = e.props,
                  i = r.analytics,
                  o = r.scribeNamespace
                i.scribe(R(R({ action: n, data: { items: [e._getScribeMomentItem()] } }, o), {}, { element: t }))
              }),
              b()(s()(e), '_focusOnEditButton', function () {
                var t, n
                e.props.isFromMomentPreviewBar &&
                  (null === (t = e._editButton) || void 0 === t ? void 0 : t.current) &&
                  (null === (n = e._editButton) || void 0 === n || n.current.focus())
              }),
              b()(s()(e), '_getEditIcon', function () {
                var t = e.props.withGrayIcons && B.colorDeepGray
                return y.createElement(C.a, { style: t })
              }),
              b()(s()(e), '_getScribeMomentItem', function () {
                var t = e.props,
                  n = t.isTOO,
                  r = t.lastPublishedTime,
                  i = t.momentId,
                  o = t.visibilityMode
                return k.a.getMomentItem(i, o, r, n)
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
                  return y.createElement(
                    I.a,
                    { style: B.buttonContainer },
                    y.createElement(
                      E.a,
                      { handlers: b()({}, P.b.rightEditingPreviewPanel, this._focusOnEditButton) },
                      y.createElement(w, {
                        icon: l,
                        link: '/i/moment_maker/edit/'.concat(n),
                        onPress: this._handleClickEdit,
                        ref: this._editButton,
                        size: o,
                        style: B.button,
                        type: c ? 'brandText' : void 0,
                      }),
                    ),
                    y.createElement(_.a, {
                      author: t,
                      eventId: n,
                      iconStyle: c ? B.colorDeepGray : void 0,
                      redirectOnDelete: r,
                      scribeMomentItem: this._getScribeMomentItem(),
                      scribeNamespace: i,
                      size: o,
                      style: B.buttonExtraSpace,
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
        })(y.Component),
        B = j.a.create(function (e) {
          return {
            buttonContainer: { flexDirection: 'row' },
            button: { marginRight: e.spaces.space4 },
            buttonExtraSpace: { marginStart: e.spaces.space12 },
            colorDeepGray: { color: e.colors.gray700 },
          }
        })
      t.a = Object(M.a)(A)
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
        P = n('BUB3'),
        k = n('3XMw'),
        I = n.n(k),
        M = n('MREw'),
        j = n('MWbm'),
        x = n('htQn'),
        R = n('pjBI'),
        S = n('t62R'),
        A = n('GBcw'),
        B = n('3dad'),
        T = n('TIdA'),
        D = n('A91F'),
        L = n('9Xij'),
        z = n('Wms4'),
        H = n('rHpw'),
        N = n('29/U'),
        W = n('TnY3')
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
            r = C()(e)
          if (t) {
            var i = C()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return O()(this, n)
        }
      }
      var V = { page: 'moment_maker', section: 'landing', component: 'moment_summary' },
        G = I.a.a1d5303c,
        K = I.a.cc8f8a8f,
        X = I.a.c33a97d6,
        U = I.a.i7e9ecf2,
        Y = I.a.jceadc3e,
        Z =
          ((r = {}),
          c()(r, N.d.private, 'magenta500'),
          c()(r, N.d.public, 'green500'),
          c()(r, N.d.unlisted, 'gray700'),
          r),
        Q = ((i = {}), c()(i, N.d.private, G), c()(i, N.d.public, X), c()(i, N.d.unlisted, K), i),
        J =
          ((o = {}),
          c()(o, N.b.CurationStudio, 'Curation Studio'),
          c()(o, N.b.MomentMakerPro, 'Moment Maker Pro'),
          c()(o, N.b.MomentMakerLite, void 0),
          c()(o, N.b.MomentMakerMobile, void 0),
          o),
        q = (function (e) {
          v()(n, e)
          var t = F(n)
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
                return _.createElement(P.a, { exact: !1, path: n }, function (n) {
                  return _.createElement(
                    x.a,
                    {
                      accessibilityRole: 'tab',
                      accessibilityState: { selected: n },
                      link: r,
                      onClick: t,
                      style: ne.root,
                    },
                    _.createElement(
                      j.a,
                      { style: ne.leftContainer },
                      e._renderTitle(),
                      e._renderDescription(),
                      _.createElement(
                        j.a,
                        { style: ne.topMargin },
                        _.createElement(R.a, null, e._renderVisibilityLabel(), e._renderCreationSource()),
                      ),
                      e._renderLastModifiedTime(),
                    ),
                    _.createElement(j.a, { style: ne.rightContainer }, e._renderCoverImage(), e._renderButtons()),
                  )
                })
              }),
              c()(b()(e), '_renderViewerMomentSummary', function () {
                var t = e.props.onClick
                return _.createElement(
                  x.a,
                  { link: e._getLinkToMoment(), onClick: t, style: ne.root },
                  _.createElement(
                    j.a,
                    { style: ne.leftContainer },
                    e._renderAuthorCategory(),
                    e._renderTitle(),
                    _.createElement(j.a, { style: ne.topMarginSmall }, e._renderVisibilityLabel()),
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
                      ? _.createElement(S.b, { color: 'gray700', size: 'subtext2' }, r)
                      : null
                    : n
                    ? _.createElement(E.a, { author: n, size: 'subtext2' })
                    : null
                return _.createElement(
                  j.a,
                  { style: ne.authorCategoryContainer },
                  _.createElement(
                    R.a,
                    { style: ne.horizontalContainer },
                    a,
                    o ? _.createElement(S.b, { size: 'subtext2' }, _.createElement(A.a, { timestamp: o })) : null,
                  ),
                )
              }),
              c()(b()(e), '_renderTitle', function () {
                var t = e.props,
                  n = t.title,
                  r = t.withAuthorControls,
                  i = n || Y
                return r
                  ? _.createElement(S.b, { numberOfLines: 2, size: 'headline1', weight: 'heavy', withHashflags: !0 }, i)
                  : _.createElement(S.b, { weight: 'bold', withHashflags: !0 }, i)
              }),
              c()(b()(e), '_renderDescription', function () {
                var t = e.props.description
                return t
                  ? _.createElement(
                      j.a,
                      { style: ne.topMargin },
                      _.createElement(S.b, { color: 'gray700', numberOfLines: 3, size: 'body', withHashflags: !0 }, t),
                    )
                  : null
              }),
              c()(b()(e), '_renderCoverImage', function () {
                var t = e.props.coverMedia,
                  n = t && B.a.getOriginalImage(t)
                return _.createElement(
                  j.a,
                  { style: ne.coverContainer },
                  n && t
                    ? _.createElement(T.a, {
                        accessibilityLabel: '',
                        aspectMode: D.a.SQUARE,
                        backgroundColor: B.a.getBackgroundColor(t),
                        cropCandidates: B.a.getCropCandidates(t),
                        image: n,
                      })
                    : _.createElement(L.a, { ratio: 1 }, _.createElement(E.c, { icon: 'lightning' })),
                  t ? _.createElement(E.b, { style: ne.lightningBadge }) : null,
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
                return _.createElement(
                  j.a,
                  { style: ne.buttonContainer },
                  _.createElement(M.a, {
                    author: n,
                    isTOO: i,
                    lastPublishedTime: o,
                    momentId: c,
                    redirectOnDelete: u ? '/i/moment_maker' : void 0,
                    scribeNamespace: V,
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
                if (t.withAuthorControls || n !== N.d.public) {
                  var r = Z[n],
                    i = Q[n]
                  return r && i ? _.createElement(S.b, { color: r, weight: 'bold' }, i) : null
                }
              }),
              c()(b()(e), '_renderCreationSource', function () {
                var t = e.props.creationSource,
                  n = t && J[t]
                return n ? _.createElement(S.b, { color: 'gray700' }, n) : null
              }),
              c()(b()(e), '_renderLastModifiedTime', function () {
                var t = e.props,
                  n = t.hasUnpublishedChanges,
                  r = t.lastModifiedTime,
                  i = t.visibilityMode
                return r
                  ? _.createElement(
                      j.a,
                      { style: ne.horizontalContainer },
                      n && i !== N.d.private
                        ? _.createElement(z.a, { background: 'orange500', style: ne.pendingChangesLabel }, U)
                        : null,
                      _.createElement(
                        S.b,
                        { color: 'gray700', size: 'subtext2' },
                        _.createElement(A.a, { humanReadable: !0, timestamp: r }),
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
        })(_.Component),
        $ = '15%',
        ee = '100px',
        te = '70px',
        ne = H.a.create(function (e) {
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
        re = Object(W.a)(q),
        ie = n('zh9S'),
        oe = n('Rp9C'),
        ae = n('RqPI')
      function ce(e, t) {
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
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ce(Object(n), !0).forEach(function (t) {
                c()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var le = function (e) {
          var t = e.entry,
            n = e.moment,
            r = se(
              se({}, oe.a.getMomentItem(n.id, n.visibility_mode, n.last_publish_time, !n.author)),
              oe.a.getAllSurfaceDetails(t.itemMetadata.clientEventInfo),
            ),
            i =
              t.itemMetadata &&
              t.itemMetadata.clientEventInfo &&
              t.itemMetadata.clientEventInfo.details &&
              t.itemMetadata.clientEventInfo.details.momentsDetails
          if (i) {
            var o = i.contextScribeInfo && i.contextScribeInfo.position
            return se(
              se({}, r),
              {},
              {
                moments_details: se(
                  se({}, r.moments_details),
                  {},
                  { guide_category_id: i.guideCategoryId, impression_id: i.impressionId },
                ),
                position: o ? parseInt(o, 10) : void 0,
              },
            )
          }
          return r
        },
        ue = function (e) {
          e.errorContext
          return Object(l.a)({ scribe: ie.c })
        },
        de = function (e) {
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
            isLoggedIn: ae.l,
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
        me = function (e) {
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
            var m = le({ entry: u, moment: s })
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
                n(se(se({}, d), {}, { component: 'moment_summary', action: 'click' }), { items: [m] })
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
          component: re,
          bindActions: ue({ errorContext: t }),
          selectData: de,
          createProps: me({ withAuthorControls: n }),
        })
      }
    },
    Vgm9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ne
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
        v = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        g = n.n(v),
        O = n('1YZw'),
        w = n('Fg8X'),
        C = n('n4jD'),
        E = n('RqPI'),
        _ = n('iUle'),
        P = function (e) {
          return function (t, n, r) {
            var i = r.api,
              o = n(),
              a = Object(E.p)(o) || '',
              c = Object(C.c)(o),
              s = Object(_.a)(a),
              l = { moment_id: e, teamUserId: c }
            return i.Moments.delete(l).then(function () {
              t([w.a.deleteOne(e), s.removeEntry('moment-'.concat(e))])
            })
          }
        },
        k = n('rxPX'),
        I = Object(k.a)()
          .propsFromState(function () {
            return { activeTeamId: C.c }
          })
          .propsFromActions(function () {
            return { addToast: O.b, deleteMoment: P }
          })
          .withAnalytics({ component: 'action_sheet' }),
        M = n('ACNv'),
        j = n('3XMw'),
        x = n.n(j),
        R = n('Rp9C'),
        S = n('TnY3'),
        A = n('v6aA'),
        B = n('hiGS'),
        T = n('I/9y'),
        D = n('TW8A'),
        L = n('xrkw'),
        z = n('zIWA')
      function H(e, t) {
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
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function W(e) {
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
      var F = x.a.e8dff578,
        V = x.a.fcc64f01,
        G = x.a.ea193d66,
        K = x.a.e5227fe0,
        X = x.a.d0df844c,
        U = x.a.fd61ab81,
        Y = x.a.aaae5e7f,
        Z = x.a.d96cf7cd,
        Q = x.a.e7718461,
        J = (function (e) {
          u()(n, e)
          var t = W(n)
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
                        confirmation: { label: Z, headline: U, text: Y, confirmButtonType: 'destructiveFilled' },
                        isEmphasized: !0,
                        onClick: e._handleDeleteConfirm,
                        text: G,
                        Icon: B.a,
                      }),
                      o && a.push({ link: '/i/events/'.concat(r), onClick: e._handleClickLink, text: K, Icon: T.a }),
                      i && a.push({ link: '/i/moment_maker/edit/'.concat(r), text: F, Icon: D.a }),
                      a.push({
                        link: '/i/moments/'.concat(r, '/analytics'),
                        onClick: e._handleNavigateAnalytics,
                        text: X,
                        Icon: L.a,
                      }))
                    : n && a.push({ onClick: e._handleReport, text: V, Icon: z.a }),
                  a
                )
              }),
              b()(s()(e), '_handleReport', function () {
                var t = e.props,
                  n = t.analytics.contextualScribeNamespace,
                  r = t.history,
                  i = t.id,
                  o = t.scribeNamespace,
                  a = N(N({}, n), o)
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
                    n({ text: Q }),
                    a && i.goBack({ backLocation: a, shouldReplaceOnFallback: !0 })
                })
              }),
              b()(s()(e), '_scribeAction', function (t, n) {
                var r = e.props,
                  i = r.analytics,
                  o = r.id,
                  a = r.scribeMomentItem,
                  c = r.scribeNamespace,
                  s = N(
                    N({}, i.contextualScribeData),
                    {},
                    {
                      items: [].concat(
                        g()(i.contextualScribeData && i.contextualScribeData.items ? i.contextualScribeData.items : []),
                        [a || R.a.getMomentItem(o)],
                      ),
                    },
                  )
                i.scribe(N({ action: t, data: s, element: n }, c))
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
                    ? y.createElement(M.default, { actionItems: this._getActionItems(), onClose: this.props.onClose })
                    : null
                },
              },
            ]),
            n
          )
        })(y.Component)
      b()(J, 'contextType', A.a)
      var q = I(J),
        $ = Object(S.a)(q),
        ee = n('2G3J')
      function te(e) {
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
      var ne = (function (e) {
        u()(n, e)
        var t = te(n)
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
              return y.createElement($, {
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
                return y.createElement(ee.a, {
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
      })(y.Component)
      b()(ne, 'defaultProps', { withEditAction: !0 })
    },
    hiGS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r),
        o = n('ERkP'),
        a = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [a.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            o.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
  },
])
//# sourceMappingURL=WIPED
