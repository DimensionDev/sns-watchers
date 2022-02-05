;(window.webpackJsonp = window.webpackJsonp || []).push([
  [348],
  {
    UnyZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      n('yH/f')
      var o = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    YMZp: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('uqhH'),
        r = n('fRsM'),
        a = n('XcJG'),
        c = function (e) {
          return {
            saveAsRecentSearch: e.actions.saveAsRecentSearch,
            shouldStoreTypeaheadItem: e.shouldStoreTypeaheadItem,
            withIcon: e.entry.content.topicDisplayType === a.a.Basic,
          }
        }
      t.default = function (e) {
        var t = e.shouldStoreTypeaheadItem
        return Object(o.a)({ component: r.a, getDisplayTypeSpecificProps: c, shouldStoreTypeaheadItem: t })
      }
    },
    'aV/s': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var o = n('VrFO'),
        r = n.n(o),
        a = n('Y9Ll'),
        c = n.n(a),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        p = n.n(l),
        u = n('N+ot'),
        d = n.n(u),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        v = n.n(b),
        g = n('t62R'),
        I = n('3XMw'),
        w = n.n(I),
        O = n('I4+6'),
        k = n('cm6r'),
        C = n('UnyZ'),
        E = n('rHpw'),
        P = n('MWbm'),
        x = n('hOZg'),
        D = n('iY63'),
        S = n('IMYl')
      function j(e) {
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
            o = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return d()(this, n)
        }
      }
      var L = { active: w.a.e557ad8d, expand: w.a.e3a58c27, remove: w.a.h517e8d8 },
        R = (function (e) {
          p()(n, e)
          var t = j(n)
          function n() {
            var e
            r()(this, n)
            for (var o = arguments.length, a = new Array(o), c = 0; c < o; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(s()(e), '_handleSecondaryClick', function () {
                var t = e.props.secondaryAction
                t && t.onSecondaryClick()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.avatar,
                    o = e.compact,
                    r = e.disabled,
                    a = e.link,
                    c = e.mode,
                    i = e.onClick,
                    s = e.secondaryAction,
                    l = e.selected,
                    p = e.style,
                    u = e.text,
                    d = this._renderIcon(!0, c),
                    f = s && this._renderIcon(!1, s.mode),
                    h = [A.root, o && A.compact, r && A.disabled, l && A.selected, p],
                    m = [A.content, d && A.withIcon, n && ((o && A.withAvatarImageCompact) || A.withAvatarImage)],
                    y = O.a.generate({
                      backgroundColor: l ? E.a.theme.colors.primary : 'transparent',
                      color: l ? E.a.theme.colors.white : E.a.theme.colors.primary,
                    })
                  return v.a.createElement(
                    P.a,
                    { style: h },
                    v.a.createElement(
                      k.a,
                      {
                        accessibilityLabel: t || (c ? L[c] : ''),
                        disabled: r,
                        interactiveStyles: y,
                        link: a,
                        onPress: i,
                        style: m,
                      },
                      this._renderAvatar(),
                      v.a.createElement(
                        g.b,
                        {
                          color: l ? 'whiteOnColor' : 'normal',
                          numberOfLines: 1,
                          selectable: !1,
                          style: A.text,
                          weight: 'bold',
                        },
                        u,
                      ),
                      d,
                    ),
                    s
                      ? v.a.createElement(
                          k.a,
                          {
                            accessibilityLabel: s.accessibilityLabel || (s.mode ? L[s.mode] : ''),
                            disabled: r || s.disabled,
                            hoverLabel: { label: s.hoverLabel || (s.mode ? L[s.mode] : '') },
                            interactiveStyles: y,
                            onPress: this._handleSecondaryClick,
                            style: A.secondaryControl,
                          },
                          v.a.createElement(P.a, { style: A.secondaryBorder }, f),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderIcon',
                value: function () {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = this.props.selected,
                    o = [A.icon, n && A.iconSelected],
                    r = [A.icon]
                  switch (t) {
                    case C.a.Remove:
                      return v.a.createElement(x.a, { style: [A.dismissIcon, e && o] })
                    case C.a.Expand:
                      return v.a.createElement(D.a, { style: e ? o : r })
                    case C.a.Active:
                      return v.a.createElement(S.a, { style: o })
                    default:
                      return null
                  }
                },
              },
              {
                key: '_renderAvatar',
                value: function () {
                  var e = this.props,
                    t = e.avatar,
                    n = e.compact
                  return t
                    ? v.a.createElement(P.a, { style: [A.avatarContainer, n ? A.avatarCompact : A.avatar] }, t)
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      y()(R, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var A = E.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            borderColor: e.colors.gray200,
            borderRadius: e.borderRadii.infinite,
            borderStyle: 'solid',
            borderWidth: '1px',
            flexDirection: 'row',
            minHeight: e.spaces.space40,
            overflow: 'hidden',
          },
          content: {
            alignItems: 'center',
            flexDirection: 'row',
            flexGrow: 1,
            flexShrink: 1,
            paddingHorizontal: e.spaces.space16,
          },
          text: { width: '100%' },
          compact: { minHeight: e.spaces.space32 },
          disabled: { borderColor: e.colors.gray50 },
          selected: { backgroundColor: e.colors.primary, borderColor: e.colors.primary },
          avatar: { height: e.spaces.space32, width: e.spaces.space32 },
          avatarCompact: { height: e.spaces.space24, width: e.spaces.space24 },
          avatarContainer: { justifyContent: 'center', marginRight: e.spaces.space8 },
          withAvatarImage: { paddingLeft: 'calc('.concat(e.spaces.space2, ' * 2)') },
          withAvatarImageCompact: { paddingLeft: 'calc('.concat(e.spaces.space1, ' * 3)') },
          icon: { color: e.colors.primary, flexShrink: 0, marginLeft: e.spaces.space12 },
          iconSelected: { color: e.colors.whiteOnColor },
          withIcon: { paddingRight: e.spaces.space12 },
          dismissIcon: { color: e.colors.gray300 },
          secondaryControl: { flexShrink: 0, justifyContent: 'center' },
          secondaryBorder: {
            borderLeftColor: e.colors.borderColor,
            borderLeftWidth: e.borderWidths.small,
            paddingHorizontal: e.spaces.space12,
          },
        }
      })
      t.a = R
    },
    fRsM: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o = n('VrFO'),
        r = n.n(o),
        a = n('Y9Ll'),
        c = n.n(a),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        p = n.n(l),
        u = n('N+ot'),
        d = n.n(u),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        y = n.n(m),
        b = (n('1t7P'), n('jQ/y'), n('ho0z'), n('7xRU'), n('ERkP')),
        v = n.n(b),
        g = n('LWCC'),
        I = n('3XMw'),
        w = n.n(I),
        O = n('EHV7'),
        k = n('YICZ'),
        C = n('3IPs'),
        E = n('X04g'),
        P = n('MWbm'),
        x = n('Irs7'),
        D = n('hxu0'),
        S = n('htQn'),
        j = n('t62R'),
        L = n('j7Bv'),
        R = n('rHpw'),
        A = n('v6aA')
      function _(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
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
            o = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return d()(this, n)
        }
      }
      var B = w.a.a2a3824a,
        M = 0,
        F = (function (e) {
          p()(n, e)
          var t = T(n)
          function n(e, o) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e, o)),
              y()(s()(a), '_topicLink', {
                pathname: '/i/topics/'.concat(a.props.topic.id),
                state: {
                  referringScribeNamespace: H(
                    H({}, a.props.analytics.contextualScribeNamespace),
                    {},
                    { action: 'click' },
                  ),
                },
              }),
              y()(s()(a), '_handleOnClick', function () {
                var e = a.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  o = e.topic,
                  r = o.description,
                  c = o.id,
                  i = o.name
                t &&
                  n &&
                  n(E.a.ItemType.TOPIC) &&
                  t({ topic: { id: c, name: i, description: r || '', type: C.a.Topic } }),
                  a._handleScribe('click')
              }),
              (a._topicDomId = 'topic'.concat(M)),
              (a._nameDomId = 'topic-name'.concat(M)),
              (a._descriptionDomId = 'topic-description'.concat(M)),
              (a._followButtonDomId = 'topic-follow-button'.concat(M)),
              (a._notInterestedButtonDomId = 'topic-not-interested-button'.concat(M)),
              (M += 1),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.educateOnFollow,
                    n = e.isInSidebar,
                    o = e.nameWeight,
                    r = e.notInterestedOnClick,
                    a = e.topic,
                    c = a.description,
                    i = a.name,
                    s = this.context.loggedInUserId
                  return v.a.createElement(
                    S.a,
                    {
                      accessibilityLabelledBy: [
                        this._topicDomId,
                        this._nameDomId,
                        this._descriptionDomId,
                        this._followButtonDomId,
                        this._notInterestedButtonDomId,
                      ].join(' '),
                      interactiveStyles: this._topicLink ? void 0 : null,
                      link: this._topicLink,
                      onClick: this._topicLink ? this._handleOnClick : void 0,
                      style: [z.root, z.flexStart],
                      withDarkerInteractiveBackground: n,
                    },
                    v.a.createElement(
                      P.a,
                      { style: z.topic },
                      v.a.createElement(P.a, { accessibilityLabel: B, nativeID: this._topicDomId }),
                      this._renderIcon(),
                      v.a.createElement(
                        P.a,
                        { style: z.text },
                        v.a.createElement(
                          j.b,
                          { nativeID: this._nameDomId, weight: o, withInteractiveStyling: !!this._topicLink },
                          i,
                        ),
                        c
                          ? v.a.createElement(
                              j.b,
                              { color: 'gray700', nativeID: this._descriptionDomId, numberOfLines: 2 },
                              c,
                            )
                          : null,
                      ),
                    ),
                    v.a.createElement(
                      P.a,
                      { style: z.buttons },
                      v.a.createElement(g.a, { educateOnFollow: t, nativeID: this._followButtonDomId, topic: a }),
                      s && r
                        ? v.a.createElement(k.a, {
                            nativeID: this._notInterestedButtonDomId,
                            onPress: r,
                            style: z.marginLeft,
                            topicId: a.id,
                          })
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderIcon',
                value: function () {
                  return this.props.withIcon
                    ? v.a.createElement(L.a, { Icon: O.a, size: 'large', style: z.icon })
                    : null
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribeAction(e)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      y()(F, 'contextType', A.a), y()(F, 'defaultProps', { nameWeight: 'bold', withIcon: !0 })
      var z = R.a.create(function (e) {
        return {
          root: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          flexStart: { alignItems: 'flex-start' },
          icon: { alignSelf: 'flex-start', marginRight: e.spaces.space12 },
          customIcon: { borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32 },
          text: { flexShrink: 1 },
          buttons: { alignItems: 'center', alignSelf: 'center', flexDirection: 'row', paddingLeft: e.spaces.space8 },
          marginLeft: { marginLeft: e.spaces.space4 },
          topic: { alignItems: 'center', flexDirection: 'row', flexShrink: 1, paddingRight: e.spaces.space4 },
        }
      })
      t.a = Object(D.a)(Object(x.a)(F))
    },
    gwY8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var o = n('ERkP'),
        r = n.n(o).a.createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
    hxu0: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        r = n.n(o),
        a = n('ERkP'),
        c = n.n(a),
        i = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return c.a.createElement(i.a.Consumer, null, function (n) {
            return c.a.createElement(e, r()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    uqhH: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o = n('KEM+'),
        r = n.n(o),
        a = n('ezF+'),
        c = n('wtjx'),
        i = n('VPAj'),
        s = n('zh9S'),
        l = n('Rp9C'),
        p = n('XcJG'),
        u = n('Zejx')
      function d(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.a = function (e) {
        var t = e.component,
          n = e.getDisplayTypeSpecificProps,
          o = e.shouldDisplayBorder,
          r = void 0 !== o && o,
          d = e.shouldStoreTypeaheadItem
        return a.g({
          component: t,
          bindActions: function () {
            return { saveAsRecentSearch: c.a, scribe: s.c }
          },
          selectData: function (e) {
            var t = e.entry
            return {
              topic: function (e) {
                return u.a.select(e, t.content.topicId)
              },
            }
          },
          createProps: function (e) {
            var t = e.actions,
              o = e.data,
              r = e.entry,
              a = e.feedbackItems,
              c = o.topic
            if (!c) return null
            var i = r.content.topicFunctionalityType === p.b.Recommendation,
              s = 1 === a.length ? a[0].onClick : void 0
            return f(
              { notInterestedOnClick: !c.not_interested && !c.following && i && !!s ? s : void 0, topic: c },
              n({ entry: r, actions: t, shouldStoreTypeaheadItem: d }),
            )
          },
          isFocusable: Object(i.a)(!0),
          getScribeDataItem: function (e) {
            return l.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo)
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.scribeData
            t(f(f({}, e.scribeNamespace), {}, { action: 'impression' }), n)
          },
          shouldDisplayBorder: Object(i.a)(r),
        })
      }
    },
    zWr2: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('uqhH'),
        r = (n('ho0z'), n('ERkP')),
        a = n.n(r),
        c = n('ddV6'),
        i = n.n(c),
        s = n('v6aA'),
        l = n('Zejx'),
        p = n('rxPX'),
        u = n('0KEI'),
        d = Object(p.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('TOPIC_PILL_CONTEXT'),
              follow: l.a.follow,
              unfollow: l.a.unfollow,
            }
          })
          .withAnalytics(),
        f = n('3XMw'),
        h = n.n(f),
        m = n('Tp1h'),
        y = n('Jkc4'),
        b = n('gwY8'),
        v = n('MWbm'),
        g = n('UnyZ'),
        I = n('aV/s'),
        w = n('rHpw'),
        O = h.a.ge8f3043,
        k = h.a.aa576cbf,
        C = h.a.i77347d0,
        E = h.a.e839db39,
        P = function (e) {
          var t = a.a.useContext(s.a).loggedInUserId,
            n = e.analytics,
            o = e.createLocalApiErrorHandler,
            r = e.follow,
            c = e.notInterestedOnClick,
            l = e.topic,
            p = e.unfollow,
            u = e.withActionIcon,
            d = l.following,
            f = l.id,
            h = l.name,
            w = l.not_interested,
            P = a.a.useRef(!1),
            D = a.a.useState(0),
            S = i()(D, 2),
            j = S[0],
            L = S[1],
            R = a.a.useCallback(
              function (e) {
                if (0 === j) {
                  var t = e.nativeEvent.layout.width
                  L(t)
                }
              },
              [j],
            ),
            A = function (e) {
              if (!w && u) return d ? g.a.Active : g.a.Expand
            },
            _ = function (e, t, n) {
              return e(d ? T(n) : H(t))
            },
            H = function (e) {
              return function (t) {
                r(f)
                  .catch(o())
                  .then(e && e(f)),
                  n.scribeAction('follow')
              }
            },
            T = function (e) {
              return function (t) {
                p(f)
                  .catch(o())
                  .then(e && e(f)),
                  n.scribeAction('unfollow')
              }
            },
            B = function (e, n, o) {
              if (t && c)
                return {
                  mode: g.a.Remove,
                  onSecondaryClick: c,
                  accessibilityLabel: C({ topicName: h }),
                  hoverLabel: E,
                  disabled: d || w,
                }
            }
          return a.a.createElement(y.a, { customText: h, displayMode: m.a.topic }, function (e) {
            return a.a.createElement(b.a.Consumer, null, function (t) {
              var n = t.onFollow,
                o = t.onInitialize,
                r = t.onUnfollow
              return (
                o && !P.current && (o(f, d), (P.current = !0)),
                a.a.createElement(
                  v.a,
                  { onLayout: R, style: [x.root, { minWidth: j }] },
                  a.a.createElement(I.a, {
                    accessibilityLabel: d ? k({ topicName: h }) : O({ topicName: h }),
                    disabled: w,
                    key: f,
                    mode: A(),
                    onClick: _(e, n, r),
                    secondaryAction: B(),
                    selected: d,
                    style: x.pill,
                    text: h,
                  }),
                )
              )
            })
          })
        }
      P.defaultProps = { withActionIcon: !0 }
      var x = w.a.create(function (e) {
          return {
            root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 },
            pill: { textOverflow: 'ellipsis' },
            roundIcon: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' },
          }
        }),
        D = d(P),
        S = n('Irs7'),
        j = n('lnL+'),
        L = function (e) {
          var t = Object(S.b)(),
            n = e.notInterestedOnClick,
            o = e.topic,
            r = e.withActionIcon
          return e.withLandingPageLink
            ? a.a.createElement(
                v.a,
                { style: R.root },
                a.a.createElement(j.a, {
                  link: '/i/topics/'.concat(o.id),
                  onClick: function () {
                    t.scribeAction('click')
                  },
                  text: o.name,
                }),
              )
            : a.a.createElement(D, { notInterestedOnClick: n, topic: o, withActionIcon: r })
        },
        R = w.a.create(function (e) {
          return { root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 } }
        })
      L.defaultProps = { withLandingPageLink: !1 }
      var A = L,
        _ = n('XcJG'),
        H = function (e) {
          return {
            withLandingPageLink: e.entry.content.topicFunctionalityType === _.b.Pivot,
            withActionIcon:
              e.entry.content.topicFunctionalityType !== _.b.Pivot &&
              e.entry.content.topicDisplayType !== _.a.PillWithoutActionIcon,
          }
        }
      t.default = function (e) {
        var t = e.shouldDisplayBorder
        return Object(o.a)({ component: A, getDisplayTypeSpecificProps: H, shouldDisplayBorder: t })
      }
    },
  },
])
//# sourceMappingURL=WIPED
