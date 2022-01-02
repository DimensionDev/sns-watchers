;(window.webpackJsonp = window.webpackJsonp || []).push([
  [104, 167],
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
        o = n('MWbm'),
        i = n('GcQN'),
        a = n('PU7B'),
        c = n('/WPq'),
        s = n('78ol'),
        l = n('jV+4'),
        u = n('rHpw'),
        d = function (e) {
          var t = e.author,
            n = e.color,
            o = void 0 === n ? 'normal' : n,
            i = e.size,
            a = void 0 === i ? 'subtext2' : i,
            c = e.style,
            s = e.withHoverCard,
            u = void 0 === s || s,
            d = e.withLink,
            m = void 0 !== d && d,
            f = e.withScreenName,
            h = void 0 !== f && f
          return r.createElement(l.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[a],
            color: o,
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
            o.a,
            { style: [p.lightningBadge, t] },
            r.createElement(i.a, { style: p.lightningIcon }),
          )
        },
        f = function (e) {
          var t = e.icon
          return r.createElement(
            o.a,
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
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
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
            var o = p()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var _ = g.a.cfd2f35d,
        I = (function (e) {
          u()(n, e)
          var t = E(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
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
                    o = t.label,
                    i = t.text,
                    a = t.withCancelButton
                  return y.createElement(C.a, {
                    confirmButtonLabel: o,
                    confirmButtonType: n,
                    headline: r,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: i,
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
                  return M(t, n, r, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(y.Component),
        M = Object(O.a)(function (e, t, n, r) {
          return e.reduce(function (e, o, i) {
            var a = o.Icon,
              c = o.behavioralEventContext,
              s = o.confirmation,
              l = o.disabled,
              u = o.excludeFromActionMenu,
              d = o.isEmphasized,
              m = o.link,
              f = o.onClick,
              p = o.subText,
              h = o.testID,
              b = o.text
            o.withCancelButton
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
                withBottomBorder: t && t.includes(i),
              })
            }
            return e
          }, [])
        })
      t.default = I
    },
    BUB3: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        i = n('m3Bd'),
        a = n.n(i),
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
                o()(e, t, n[t])
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
    DghG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'UserMomentsScreen', function () {
          return z
        })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
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
        v = n('es0u'),
        g = (n('WNMA'), n('KqXw'), n('RqPI')),
        O = n('Fg8X'),
        w = n('G6rE'),
        C = n('rxPX'),
        E = n('0KEI'),
        _ = function (e, t) {
          return t.match.params.screenName
        },
        I = function (e, t) {
          var n = _(0, t)
          return w.e.selectByScreenName(e, n)
        },
        M = Object(C.a)()
          .propsFromState(function () {
            return { screenName: _, user: I, loggedInUserId: g.p }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUserId,
              n = e.screenName,
              r = e.user
            return { screenName: n, user: r, userId: null == r ? void 0 : r.id_str, loggedInUserId: t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('USER_MOMENTS'),
              createMoment: O.a.create,
              fetchOneUserByScreenNameIfNeeded: w.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'profile', section: 'moments' }),
        P = n('c+OQ'),
        k = n('7wqI'),
        j = n('3XMw'),
        x = n.n(j),
        R = n('yoO3'),
        S = n('5FtR'),
        A = n('VS6U'),
        T = n('gbni'),
        B = n('yrzJ'),
        L = n('G8HL')
      function N(e) {
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
            var o = p()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var D = x.a.b4af8c6a,
        z = (function (e) {
          u()(n, e)
          var t = N(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(s()(e), '_renderTimeline', function () {
                var t = e.props,
                  n = t.screenName,
                  r = t.userId,
                  o = e._isOwnMoments()
                return y.createElement(T.a, { isOwnMoments: o, screenName: n, userId: r, withAuthorControls: !1 })
              }),
              b()(s()(e), '_handleFetchUser', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchOneUserByScreenNameIfNeeded)(t.screenName).catch(n())
              }),
              b()(s()(e), '_handleCreateMoment', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.createMoment,
                  o = t.history
                r().then(function (e) {
                  e && e.id && o.push({ pathname: '/i/moment_maker/edit/'.concat(e.id) })
                }, n({ showToast: !0 }))
              }),
              e
            )
          }
          return (
            a()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchUser()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.screenName,
                    r = e.user,
                    o = !r || (r && Object(k.b)({ isOwnProfile: this._isOwnMoments(), user: r })),
                    i = this._isOwnMoments() ? y.createElement(P.a, { onPress: this._handleCreateMoment }) : void 0
                  return o
                    ? y.createElement(
                        R.a,
                        null,
                        y.createElement(A.a, {
                          backLocation: '/'.concat(n),
                          history: t,
                          primaryContent: this._renderTimeline(),
                          rightControl: i,
                          sidebarContent: y.createElement(v.a, null),
                          subtitle: y.createElement(B.a, { screenName: n }),
                          title: D,
                        }),
                      )
                    : y.createElement(S.a, { to: '/'.concat(n) })
                },
              },
              {
                key: '_isOwnMoments',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUserId,
                    n = e.userId
                  return !!t && n === t
                },
              },
            ]),
            n
          )
        })(y.Component)
      t.default = M(Object(L.a)(z))
    },
    MREw: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
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
            o = e.onPress,
            i = e.size,
            a = e.style,
            c = e.type
          return y.createElement(v.a, {
            accessibilityLabel: O,
            hoverLabel: { label: O },
            icon: n,
            link: r,
            onPress: o,
            pullRight: !0,
            ref: t,
            size: i,
            style: a,
            type: c || 'primaryText',
          })
        }),
        C = n('TW8A'),
        E = n('hACr'),
        _ = n('Vgm9'),
        I = n('ObVQ'),
        M = n('Rp9C'),
        P = n('MWbm'),
        k = n('Irs7'),
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
            var o = p()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var A = (function (e) {
          u()(n, e)
          var t = S(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(s()(e), '_editButton', y.createRef()),
              b()(s()(e), '_handleClickEdit', function () {
                e._scribeAction('edit_button', 'click')
              }),
              b()(s()(e), '_scribeAction', function (t, n) {
                var r = e.props,
                  o = r.analytics,
                  i = r.scribeNamespace
                o.scribe(R(R({ action: n, data: { items: [e._getScribeMomentItem()] } }, i), {}, { element: t }))
              }),
              b()(s()(e), '_focusOnEditButton', function () {
                var t, n
                e.props.isFromMomentPreviewBar &&
                  (null === (t = e._editButton) || void 0 === t ? void 0 : t.current) &&
                  (null === (n = e._editButton) || void 0 === n || n.current.focus())
              }),
              b()(s()(e), '_getEditIcon', function () {
                var t = e.props.withGrayIcons && T.colorDeepGray
                return y.createElement(C.a, { style: t })
              }),
              b()(s()(e), '_getScribeMomentItem', function () {
                var t = e.props,
                  n = t.isTOO,
                  r = t.lastPublishedTime,
                  o = t.momentId,
                  i = t.visibilityMode
                return M.a.getMomentItem(o, i, r, n)
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
                    o = e.scribeNamespace,
                    i = e.size,
                    a = e.title,
                    c = e.withGrayIcons,
                    s = e.withLinkAction,
                    l = this._getEditIcon()
                  return y.createElement(
                    P.a,
                    { style: T.buttonContainer },
                    y.createElement(
                      E.a,
                      { handlers: b()({}, I.b.rightEditingPreviewPanel, this._focusOnEditButton) },
                      y.createElement(w, {
                        icon: l,
                        link: '/i/moment_maker/edit/'.concat(n),
                        onPress: this._handleClickEdit,
                        ref: this._editButton,
                        size: i,
                        style: T.button,
                        type: c ? 'brandText' : void 0,
                      }),
                    ),
                    y.createElement(_.a, {
                      author: t,
                      eventId: n,
                      iconStyle: c ? T.colorDeepGray : void 0,
                      redirectOnDelete: r,
                      scribeMomentItem: this._getScribeMomentItem(),
                      scribeNamespace: o,
                      size: i,
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
        })(y.Component),
        T = j.a.create(function (e) {
          return {
            buttonContainer: { flexDirection: 'row' },
            button: { marginRight: e.spaces.space4 },
            buttonExtraSpace: { marginStart: e.spaces.space12 },
            colorDeepGray: { color: e.colors.gray700 },
          }
        })
      t.a = Object(k.a)(A)
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
        o = n.n(r),
        i = n('oQhu'),
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
        s = Object(i.a)(function (e) {
          return [
            { description: o.a.d5696fcb, keys: a.e.openKeyboardShortcuts, universal: !0 },
            { description: o.a.e814ed10, keys: c.editingPanelNextItem, universal: !0 },
            { description: o.a.c1250b41, keys: c.editingPanelPreviousItem, universal: !0 },
            { description: o.a.ddd4bf24, keys: a.e.nextItem, universal: !0 },
            { description: o.a.ia2742f9, keys: a.e.previousItem, universal: !0 },
            { description: o.a.a8b6f61a, keys: 'space', universal: !1 },
            { description: o.a.dfe59ab8, keys: 'esc', universal: !1 },
            { description: o.a.c602967d, keys: c.rightEditingPreviewPanel, universal: !1 },
            { description: o.a.g42208cb, keys: c.leftNavigationMenuPanel, universal: !1 },
            { description: o.a.gf73b335, keys: c.tweetDiscoveryPanel, universal: !1 },
            { description: o.a.g45af04e, keys: c.addTweet, universal: !1 },
            { description: o.a.ee9c4013, keys: c.removeTweet, universal: !1 },
          ]
        })
    },
    Vgm9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ne
      })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        i = n('Y9Ll'),
        a = n.n(i),
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
        I = function (e) {
          return function (t, n, r) {
            var o = r.api,
              i = n(),
              a = Object(E.p)(i) || '',
              c = Object(C.c)(i),
              s = Object(_.a)(a),
              l = { moment_id: e, teamUserId: c }
            return o.Moments.delete(l).then(function () {
              t([w.a.deleteOne(e), s.removeEntry('moment-'.concat(e))])
            })
          }
        },
        M = n('rxPX'),
        P = Object(M.a)()
          .propsFromState(function () {
            return { activeTeamId: C.c }
          })
          .propsFromActions(function () {
            return { addToast: O.b, deleteMoment: I }
          })
          .withAnalytics({ component: 'action_sheet' }),
        k = n('ACNv'),
        j = n('3XMw'),
        x = n.n(j),
        R = n('Rp9C'),
        S = n('TnY3'),
        A = n('v6aA'),
        T = n('hiGS'),
        B = n('I/9y'),
        L = n('TW8A'),
        N = n('xrkw'),
        D = n('zIWA')
      function z(e, t) {
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
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
            var o = p()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var U = x.a.e8dff578,
        V = x.a.fcc64f01,
        W = x.a.ea193d66,
        G = x.a.e5227fe0,
        K = x.a.d0df844c,
        X = x.a.fd61ab81,
        Y = x.a.aaae5e7f,
        Z = x.a.d96cf7cd,
        J = x.a.e7718461,
        Q = (function (e) {
          u()(n, e)
          var t = F(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(s()(e), '_getActionItems', function () {
                var t = e.props,
                  n = t.author,
                  r = t.id,
                  o = t.withEditAction,
                  i = t.withLinkAction,
                  a = []
                return (
                  e._isOwner()
                    ? (a.push({
                        confirmation: { label: Z, headline: X, text: Y, confirmButtonType: 'destructiveFilled' },
                        isEmphasized: !0,
                        onClick: e._handleDeleteConfirm,
                        text: W,
                        Icon: T.a,
                      }),
                      i && a.push({ link: '/i/events/'.concat(r), onClick: e._handleClickLink, text: G, Icon: B.a }),
                      o && a.push({ link: '/i/moment_maker/edit/'.concat(r), text: U, Icon: L.a }),
                      a.push({
                        link: '/i/moments/'.concat(r, '/analytics'),
                        onClick: e._handleNavigateAnalytics,
                        text: K,
                        Icon: N.a,
                      }))
                    : n && a.push({ onClick: e._handleReport, text: V, Icon: D.a }),
                  a
                )
              }),
              b()(s()(e), '_handleReport', function () {
                var t = e.props,
                  n = t.analytics.contextualScribeNamespace,
                  r = t.history,
                  o = t.id,
                  i = t.scribeNamespace,
                  a = H(H({}, n), i)
                r.push({
                  pathname: '/i/report/moment/'.concat(o),
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
                  o = t.history,
                  i = t.id,
                  a = t.redirectOnDelete
                r(i).then(function () {
                  e._scribeAction('delete'),
                    n({ text: J }),
                    a && o.goBack({ backLocation: a, shouldReplaceOnFallback: !0 })
                })
              }),
              b()(s()(e), '_scribeAction', function (t, n) {
                var r = e.props,
                  o = r.analytics,
                  i = r.id,
                  a = r.scribeMomentItem,
                  c = r.scribeNamespace,
                  s = H(
                    H({}, o.contextualScribeData),
                    {},
                    {
                      items: [].concat(
                        g()(o.contextualScribeData && o.contextualScribeData.items ? o.contextualScribeData.items : []),
                        [a || R.a.getMomentItem(i)],
                      ),
                    },
                  )
                o.scribe(H({ action: t, data: s, element: n }, c))
              }),
              b()(s()(e), '_isOwner', function () {
                var t = e.props,
                  n = t.activeTeamId,
                  r = t.author,
                  o = e.context.loggedInUserId,
                  i = o && (null == r ? void 0 : r.id_str) === o,
                  a = n && (null == r ? void 0 : r.id_str) === n
                return !!i || !!a
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
                    ? y.createElement(k.default, { actionItems: this._getActionItems(), onClose: this.props.onClose })
                    : null
                },
              },
            ]),
            n
          )
        })(y.Component)
      b()(Q, 'contextType', A.a)
      var q = P(Q),
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
            var o = p()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var ne = (function (e) {
        u()(n, e)
        var t = te(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            b()(s()(e), '_renderMenu', function (t) {
              var n = e.props,
                r = n.author,
                o = n.eventId,
                i = n.redirectOnDelete,
                a = n.scribeMomentItem,
                c = n.scribeNamespace,
                s = n.title,
                l = n.withEditAction,
                u = n.withLinkAction
              return y.createElement($, {
                author: r,
                id: o,
                onClose: t,
                redirectOnDelete: i,
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
                  o = e.style,
                  i = e.type
                return y.createElement(ee.a, {
                  iconStyle: t,
                  onPress: n,
                  renderMenu: this._renderMenu,
                  size: r,
                  style: o,
                  type: i,
                })
              },
            },
          ]),
          n
        )
      })(y.Component)
      b()(ne, 'defaultProps', { withEditAction: !0 })
    },
    gbni: function (e, t, n) {
      'use strict'
      var r,
        o,
        i,
        a = n('ERkP'),
        c = n('KEM+'),
        s = n.n(c),
        l = n('k49u'),
        u = n('LVU8'),
        d = n('FIs5'),
        m = n('ezF+'),
        f = n('PnFR'),
        p = n('8UdT'),
        h =
          (n('+KXO'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('Blm6'),
          n('1t7P'),
          n('jQ/y'),
          n('VPAj')),
        b = n('Fg8X'),
        y = (n('OZaJ'), n('VrFO')),
        v = n.n(y),
        g = n('Y9Ll'),
        O = n.n(g),
        w = n('1Pcy'),
        C = n.n(w),
        E = n('5Yy7'),
        _ = n.n(E),
        I = n('N+ot'),
        M = n.n(I),
        P = n('AuHH'),
        k = n.n(P),
        j = (n('2G9S'), n('0mK8')),
        x = n('BUB3'),
        R = n('3XMw'),
        S = n.n(R),
        A = n('MREw'),
        T = n('MWbm'),
        B = n('htQn'),
        L = n('pjBI'),
        N = n('t62R'),
        D = n('GBcw'),
        z = n('3dad'),
        H = n('TIdA'),
        F = n('A91F'),
        U = n('9Xij'),
        V = n('Wms4'),
        W = n('rHpw'),
        G = n('29/U'),
        K = n('TnY3')
      function X(e) {
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
            r = k()(e)
          if (t) {
            var o = k()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return M()(this, n)
        }
      }
      var Y = { page: 'moment_maker', section: 'landing', component: 'moment_summary' },
        Z = S.a.a1d5303c,
        J = S.a.cc8f8a8f,
        Q = S.a.c33a97d6,
        q = S.a.i7e9ecf2,
        $ = S.a.jceadc3e,
        ee =
          ((r = {}),
          s()(r, G.d.private, 'magenta500'),
          s()(r, G.d.public, 'green500'),
          s()(r, G.d.unlisted, 'gray700'),
          r),
        te = ((o = {}), s()(o, G.d.private, Z), s()(o, G.d.public, Q), s()(o, G.d.unlisted, J), o),
        ne =
          ((i = {}),
          s()(i, G.b.CurationStudio, 'Curation Studio'),
          s()(i, G.b.MomentMakerPro, 'Moment Maker Pro'),
          s()(i, G.b.MomentMakerLite, void 0),
          s()(i, G.b.MomentMakerMobile, void 0),
          i),
        re = (function (e) {
          _()(n, e)
          var t = X(n)
          function n() {
            var e
            v()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              s()(C()(e), '_renderAuthorMomentSummary', function () {
                var t = e.props.onClick,
                  n = e._getLinkToPreview(),
                  r = { pathname: n, anchorless: !0 }
                return a.createElement(x.a, { exact: !1, path: n }, function (n) {
                  return a.createElement(
                    B.a,
                    {
                      accessibilityRole: 'tab',
                      accessibilityState: { selected: n },
                      link: r,
                      onClick: t,
                      style: ce.root,
                    },
                    a.createElement(
                      T.a,
                      { style: ce.leftContainer },
                      e._renderTitle(),
                      e._renderDescription(),
                      a.createElement(
                        T.a,
                        { style: ce.topMargin },
                        a.createElement(L.a, null, e._renderVisibilityLabel(), e._renderCreationSource()),
                      ),
                      e._renderLastModifiedTime(),
                    ),
                    a.createElement(T.a, { style: ce.rightContainer }, e._renderCoverImage(), e._renderButtons()),
                  )
                })
              }),
              s()(C()(e), '_renderViewerMomentSummary', function () {
                var t = e.props.onClick
                return a.createElement(
                  B.a,
                  { link: e._getLinkToMoment(), onClick: t, style: ce.root },
                  a.createElement(
                    T.a,
                    { style: ce.leftContainer },
                    e._renderAuthorCategory(),
                    e._renderTitle(),
                    a.createElement(T.a, { style: ce.topMarginSmall }, e._renderVisibilityLabel()),
                  ),
                  e._renderCoverImage(),
                )
              }),
              s()(C()(e), '_renderAuthorCategory', function () {
                var t = e.props,
                  n = t.author,
                  r = t.category,
                  o = t.isTOO,
                  i = t.lastPublishedTime,
                  c = o
                    ? r
                      ? a.createElement(N.b, { color: 'gray700', size: 'subtext2' }, r)
                      : null
                    : n
                    ? a.createElement(j.a, { author: n, size: 'subtext2' })
                    : null
                return a.createElement(
                  T.a,
                  { style: ce.authorCategoryContainer },
                  a.createElement(
                    L.a,
                    { style: ce.horizontalContainer },
                    c,
                    i ? a.createElement(N.b, { size: 'subtext2' }, a.createElement(D.a, { timestamp: i })) : null,
                  ),
                )
              }),
              s()(C()(e), '_renderTitle', function () {
                var t = e.props,
                  n = t.title,
                  r = t.withAuthorControls,
                  o = n || $
                return r
                  ? a.createElement(N.b, { numberOfLines: 2, size: 'headline1', weight: 'heavy', withHashflags: !0 }, o)
                  : a.createElement(N.b, { weight: 'bold', withHashflags: !0 }, o)
              }),
              s()(C()(e), '_renderDescription', function () {
                var t = e.props.description
                return t
                  ? a.createElement(
                      T.a,
                      { style: ce.topMargin },
                      a.createElement(N.b, { color: 'gray700', numberOfLines: 3, size: 'body', withHashflags: !0 }, t),
                    )
                  : null
              }),
              s()(C()(e), '_renderCoverImage', function () {
                var t = e.props.coverMedia,
                  n = t && z.a.getOriginalImage(t)
                return a.createElement(
                  T.a,
                  { style: ce.coverContainer },
                  n && t
                    ? a.createElement(H.a, {
                        accessibilityLabel: '',
                        aspectMode: F.a.SQUARE,
                        backgroundColor: z.a.getBackgroundColor(t),
                        cropCandidates: z.a.getCropCandidates(t),
                        image: n,
                      })
                    : a.createElement(U.a, { ratio: 1 }, a.createElement(j.c, { icon: 'lightning' })),
                  t ? a.createElement(j.b, { style: ce.lightningBadge }) : null,
                )
              }),
              s()(C()(e), '_renderButtons', function () {
                var t = e.props,
                  n = t.author,
                  r = t.isCurationStudioMoment,
                  o = t.isTOO,
                  i = t.lastPublishedTime,
                  c = t.location.pathname,
                  s = t.momentId,
                  l = t.title,
                  u = t.visibilityMode,
                  d = c === e._getLinkToPreview()
                return a.createElement(
                  T.a,
                  { style: ce.buttonContainer },
                  a.createElement(A.a, {
                    author: n,
                    isTOO: o,
                    lastPublishedTime: i,
                    momentId: s,
                    redirectOnDelete: d ? '/i/moment_maker' : void 0,
                    scribeNamespace: Y,
                    size: 'xSmall',
                    title: l,
                    visibilityMode: u,
                    withGrayIcons: !0,
                    withLinkAction: !r,
                  }),
                )
              }),
              s()(C()(e), '_renderVisibilityLabel', function () {
                var t = e.props,
                  n = t.visibilityMode
                if (t.withAuthorControls || n !== G.d.public) {
                  var r = ee[n],
                    o = te[n]
                  return r && o ? a.createElement(N.b, { color: r, weight: 'bold' }, o) : null
                }
              }),
              s()(C()(e), '_renderCreationSource', function () {
                var t = e.props.creationSource,
                  n = t && ne[t]
                return n ? a.createElement(N.b, { color: 'gray700' }, n) : null
              }),
              s()(C()(e), '_renderLastModifiedTime', function () {
                var t = e.props,
                  n = t.hasUnpublishedChanges,
                  r = t.lastModifiedTime,
                  o = t.visibilityMode
                return r
                  ? a.createElement(
                      T.a,
                      { style: ce.horizontalContainer },
                      n && o !== G.d.private
                        ? a.createElement(V.a, { background: 'orange500', style: ce.pendingChangesLabel }, q)
                        : null,
                      a.createElement(
                        N.b,
                        { color: 'gray700', size: 'subtext2' },
                        a.createElement(D.a, { humanReadable: !0, timestamp: r }),
                      ),
                    )
                  : null
              }),
              s()(C()(e), '_getLinkToMoment', function () {
                var t = e.props.momentId
                return '/i/events/'.concat(t)
              }),
              s()(C()(e), '_getLinkToPreview', function () {
                var t = e.props.momentId
                return '/i/moment_maker/preview/'.concat(t)
              }),
              e
            )
          }
          return (
            O()(n, [
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
        })(a.Component),
        oe = '15%',
        ie = '100px',
        ae = '70px',
        ce = W.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              justifyContent: 'space-between',
            },
            leftContainer: {
              justifyContent: 'flex-start',
              maxWidth: 'calc(100% - '.concat(ae, ')'),
              minWidth: 'calc(100% - '.concat(ie, ')'),
              paddingRight: e.spaces.space16,
              width: 'calc(100% - '.concat(oe, ')'),
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
              height: oe,
              maxHeight: ie,
              maxWidth: ie,
              minHeight: ae,
              minWidth: ae,
              overflow: 'hidden',
              width: oe,
            },
            lightningBadge: { bottom: e.spaces.space12, left: e.spaces.space12 },
            buttonContainer: { marginTop: e.spaces.space16, width: '100%' },
          }
        }),
        se = Object(K.a)(re),
        le = n('zh9S'),
        ue = n('Rp9C'),
        de = n('RqPI')
      function me(e, t) {
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
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? me(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : me(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var pe = function (e) {
          var t = e.entry,
            n = e.moment,
            r = fe(
              fe({}, ue.a.getMomentItem(n.id, n.visibility_mode, n.last_publish_time, !n.author)),
              ue.a.getAllSurfaceDetails(t.itemMetadata.clientEventInfo),
            ),
            o =
              t.itemMetadata &&
              t.itemMetadata.clientEventInfo &&
              t.itemMetadata.clientEventInfo.details &&
              t.itemMetadata.clientEventInfo.details.momentsDetails
          if (o) {
            var i = o.contextScribeInfo && o.contextScribeInfo.position
            return fe(
              fe({}, r),
              {},
              {
                moments_details: fe(
                  fe({}, r.moments_details),
                  {},
                  { guide_category_id: o.guideCategoryId, impression_id: o.impressionId },
                ),
                position: i ? parseInt(i, 10) : void 0,
              },
            )
          }
          return r
        },
        he = function (e) {
          e.errorContext
          return Object(h.a)({ scribe: le.c })
        },
        be = function (e) {
          var t = e.entry
          return {
            author: function (e) {
              return b.a.selectAuthor(e, t.content.momentId)
            },
            coverMedia: function (e) {
              return b.a.selectCoverMedia(e, t.content.momentId)
            },
            isCurationStudioMoment: function (e) {
              return b.a.selectIsCurationStudioMoment(e, t.content.momentId)
            },
            isLoggedIn: de.l,
            isTOO: function (e) {
              return b.a.selectIsTOO(e, t.content.momentId)
            },
            moment: function (e) {
              return b.a.select(e, t.content.momentId)
            },
            visibilityMode: function (e) {
              return b.a.selectVisibilityMode(e, t.content.momentId)
            },
          }
        },
        ye = function (e) {
          var t = e.withAuthorControls
          return function (e) {
            var n = e.actions.scribe,
              r = e.data,
              o = r.author,
              i = r.coverMedia,
              a = r.isCurationStudioMoment,
              c = (r.isLoggedIn, r.isTOO),
              s = r.moment,
              l = r.visibilityMode,
              u = e.entry,
              d = e.scribeNamespace
            if (!s) return null
            var m = pe({ entry: u, moment: s })
            return {
              author: o,
              category: s.subcategory_string,
              coverMedia: i,
              creationSource: s.creation_source,
              description: s.description || '',
              isCurationStudioMoment: a,
              isTOO: c,
              hasUnpublishedChanges: s.has_unpublished_changes,
              lastModifiedTime: s.last_modified_time,
              lastPublishedTime: s.last_publish_time,
              momentId: s.id,
              onClick: function () {
                n(fe(fe({}, d), {}, { component: 'moment_summary', action: 'click' }), { items: [m] })
              },
              title: s.title || '',
              visibilityMode: l,
              withAuthorControls: t,
            }
          }
        },
        ve = function (e) {
          var t
          return (
            (t = {}),
            s()(t, p.b.TimelineCursor, Object(f.a)({})),
            s()(
              t,
              p.b.Moment,
              (function (e) {
                var t = e.errorContext,
                  n = e.withAuthorControls
                return m.e(
                  m.g({
                    isFocusable: Object(h.a)(!0),
                    component: se,
                    bindActions: he({ errorContext: t }),
                    selectData: be,
                    createProps: ye({ withAuthorControls: n }),
                  }),
                )
              })({ withAuthorControls: e, errorContext: 'USER_MOMENTS_TIMELINE' }),
            ),
            s()(t, p.b.MomentAnnotation, m.e(m.a())),
            t
          )
        },
        ge = n('fTQJ'),
        Oe = n('iUle'),
        we = S.a.fea74b66,
        Ce = S.a.e14206c3,
        Ee = S.a.d1e5e327,
        _e = S.a.ee75768c,
        Ie = S.a.f5978663,
        Me = S.a.a357d876,
        Pe = function () {
          return a.createElement(d.a, { message: Me })
        },
        ke = function (e, t) {
          return function () {
            return a.createElement(d.a, { header: t ? Ce : _e({ screenName: e }), message: t ? Ee : Ie })
          }
        }
      t.a = function (e) {
        var t = e.activeTeamId,
          n = e.isOwnMoments,
          r = e.screenName,
          o = e.userId,
          i = e.withAuthorControls,
          c = a.useMemo(
            function () {
              return Object(Oe.a)(o || '', t, i)
            },
            [o, t, i],
          )
        return a.createElement(ge.a, {
          apiErrorHandlerMap: s()({}, l.a.TOOMomentsList, {
            customAction: function () {
              Object(u.d)('/explore', { statusCode: 401 })
            },
          }),
          entryConfiguration: ve(i),
          module: c,
          renderEmptyState: ke(r, n),
          renderUnavailable: Pe,
          title: we({ screenName: r }),
        })
      }
    },
    hiGS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        i = n('ERkP'),
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
                o()(e, t, n[t])
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
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            i.createElement('path', {
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
