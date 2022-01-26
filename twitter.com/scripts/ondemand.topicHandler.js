;(window.webpackJsonp = window.webpackJsonp || []).push([
  [343],
  {
    UnyZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('yH/f')
      var r = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    YMZp: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('uqhH'),
        o = n('fRsM'),
        c = n('XcJG'),
        a = function (e) {
          return {
            saveAsRecentSearch: e.actions.saveAsRecentSearch,
            shouldStoreTypeaheadItem: e.shouldStoreTypeaheadItem,
            withIcon: e.entry.content.topicDisplayType === c.a.Basic,
          }
        }
      t.default = function (e) {
        var t = e.shouldStoreTypeaheadItem
        return Object(r.a)({ component: o.a, getDisplayTypeSpecificProps: a, shouldStoreTypeaheadItem: t })
      }
    },
    'aV/s': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        c = n('Y9Ll'),
        a = n.n(c),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        p = n('N+ot'),
        d = n.n(p),
        f = n('AuHH'),
        h = n.n(f),
        y = n('KEM+'),
        m = n.n(y),
        b = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        v = n('t62R'),
        g = n('3XMw'),
        w = n.n(g),
        I = n('I4+6'),
        O = n('cm6r'),
        k = n('UnyZ'),
        P = n('rHpw'),
        E = n('MWbm'),
        j = n('hOZg'),
        C = n('iY63'),
        D = n('IMYl')
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
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var x = { active: w.a.e557ad8d, expand: w.a.e3a58c27, remove: w.a.h517e8d8 },
        L = (function (e) {
          u()(n, e)
          var t = S(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, c = new Array(r), a = 0; a < r; a++) c[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              m()(s()(e), '_handleSecondaryClick', function () {
                var t = e.props.secondaryAction
                t && t.onSecondaryClick()
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
                    t = e.accessibilityLabel,
                    n = e.avatar,
                    r = e.compact,
                    o = e.disabled,
                    c = e.link,
                    a = e.mode,
                    i = e.onClick,
                    s = e.secondaryAction,
                    l = e.selected,
                    u = e.style,
                    p = e.text,
                    d = this._renderIcon(!0, a),
                    f = s && this._renderIcon(!1, s.mode),
                    h = [R.root, r && R.compact, o && R.disabled, l && R.selected, u],
                    y = [R.content, d && R.withIcon, n && ((r && R.withAvatarImageCompact) || R.withAvatarImage)],
                    m = I.a.generate({
                      backgroundColor: l ? P.a.theme.colors.primary : 'transparent',
                      color: l ? P.a.theme.colors.white : P.a.theme.colors.primary,
                    })
                  return b.createElement(
                    E.a,
                    { style: h },
                    b.createElement(
                      O.a,
                      {
                        accessibilityLabel: t || (a ? x[a] : ''),
                        disabled: o,
                        interactiveStyles: m,
                        link: c,
                        onPress: i,
                        style: y,
                      },
                      this._renderAvatar(),
                      b.createElement(
                        v.b,
                        {
                          color: l ? 'whiteOnColor' : 'normal',
                          numberOfLines: 1,
                          selectable: !1,
                          style: R.text,
                          weight: 'bold',
                        },
                        p,
                      ),
                      d,
                    ),
                    s
                      ? b.createElement(
                          O.a,
                          {
                            accessibilityLabel: s.accessibilityLabel || (s.mode ? x[s.mode] : ''),
                            disabled: o || s.disabled,
                            hoverLabel: { label: s.hoverLabel || (s.mode ? x[s.mode] : '') },
                            interactiveStyles: m,
                            onPress: this._handleSecondaryClick,
                            style: R.secondaryControl,
                          },
                          b.createElement(E.a, { style: R.secondaryBorder }, f),
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
                    r = [R.icon, n && R.iconSelected],
                    o = [R.icon]
                  switch (t) {
                    case k.a.Remove:
                      return b.createElement(j.a, { style: [R.dismissIcon, e && r] })
                    case k.a.Expand:
                      return b.createElement(C.a, { style: e ? r : o })
                    case k.a.Active:
                      return b.createElement(D.a, { style: r })
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
                    ? b.createElement(E.a, { style: [R.avatarContainer, n ? R.avatarCompact : R.avatar] }, t)
                    : null
                },
              },
            ]),
            n
          )
        })(b.PureComponent)
      m()(L, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var R = P.a.create(function (e) {
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
      t.a = L
    },
    fRsM: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        o = n.n(r),
        c = n('Y9Ll'),
        a = n.n(c),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        p = n('N+ot'),
        d = n.n(p),
        f = n('AuHH'),
        h = n.n(f),
        y = n('KEM+'),
        m = n.n(y),
        b = (n('1t7P'), n('jQ/y'), n('ho0z'), n('7xRU'), n('ERkP')),
        v = n('LWCC'),
        g = n('3XMw'),
        w = n.n(g),
        I = n('EHV7'),
        O = n('YICZ'),
        k = n('3IPs'),
        P = n('X04g'),
        E = n('Irs7'),
        j = n('hxu0'),
        C = n('htQn'),
        D = n('t62R'),
        S = n('j7Bv'),
        x = n('rHpw'),
        L = n('v6aA'),
        R = n('U+bB'),
        _ = n('MWbm')
      function A(e, t) {
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
            ? A(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
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
            r = h()(e)
          if (t) {
            var o = h()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var B = w.a.a2a3824a,
        M = 0,
        F = (function (e) {
          u()(n, e)
          var t = T(n)
          function n(e, r) {
            var c
            return (
              o()(this, n),
              (c = t.call(this, e, r)),
              m()(s()(c), '_topicLink', {
                pathname: '/i/topics/'.concat(c.props.topic.id),
                state: {
                  referringScribeNamespace: H(
                    H({}, c.props.analytics.contextualScribeNamespace),
                    {},
                    { action: 'click' },
                  ),
                },
              }),
              m()(s()(c), '_handleOnClick', function () {
                var e = c.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  r = e.topic,
                  o = r.description,
                  a = r.id,
                  i = r.name
                t &&
                  n &&
                  n(P.a.ItemType.TOPIC) &&
                  t({ topic: { id: a, name: i, description: o || '', type: k.a.Topic } }),
                  c._handleScribe('click')
              }),
              (c._topicDomId = 'topic'.concat(M)),
              (c._nameDomId = 'topic-name'.concat(M)),
              (c._descriptionDomId = 'topic-description'.concat(M)),
              (c._followButtonDomId = 'topic-follow-button'.concat(M)),
              (c._notInterestedButtonDomId = 'topic-not-interested-button'.concat(M)),
              (M += 1),
              c
            )
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.educateOnFollow,
                    n = e.isInSidebar,
                    r = e.nameWeight,
                    o = e.notInterestedOnClick,
                    c = e.topic,
                    a = c.description,
                    i = c.name,
                    s = this.context.loggedInUserId
                  return b.createElement(
                    C.a,
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
                    b.createElement(
                      _.a,
                      { style: z.topic },
                      b.createElement(_.a, { accessibilityLabel: B, nativeID: this._topicDomId }),
                      this._renderIcon(),
                      b.createElement(
                        _.a,
                        { style: z.text },
                        b.createElement(
                          D.b,
                          { nativeID: this._nameDomId, weight: r, withInteractiveStyling: !!this._topicLink },
                          i,
                        ),
                        a
                          ? b.createElement(
                              D.b,
                              { color: 'gray700', nativeID: this._descriptionDomId, numberOfLines: 2 },
                              a,
                            )
                          : null,
                      ),
                    ),
                    b.createElement(
                      _.a,
                      { style: z.buttons },
                      b.createElement(v.a, { educateOnFollow: t, nativeID: this._followButtonDomId, topic: c }),
                      s && o
                        ? b.createElement(O.a, {
                            nativeID: this._notInterestedButtonDomId,
                            onPress: o,
                            style: z.marginLeft,
                            topicId: c.id,
                          })
                        : null,
                    ),
                  )
                },
              },
              {
                key: '_renderIcon',
                value: function () {
                  var e = this.props,
                    t = e.topic.icon_url
                  return e.withIcon
                    ? t && this.context.featureSwitches.isTrue('topic_icons_enabled')
                      ? b.createElement(R.a, { source: t, style: [z.icon, z.customIcon] })
                      : b.createElement(S.a, { Icon: I.a, size: 'large', style: z.icon })
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
        })(b.Component)
      m()(F, 'contextType', L.a), m()(F, 'defaultProps', { nameWeight: 'bold', withIcon: !0 })
      var z = x.a.create(function (e) {
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
      t.a = Object(j.a)(Object(E.a)(F))
    },
    gwY8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var r = n('ERkP'),
        o = r.createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        c = n('ERkP'),
        a = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return c.createElement(a.a.Consumer, null, function (n) {
            return c.createElement(e, o()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    iY63: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        c = n('ERkP'),
        a = n('Lsrn'),
        i = n('k/Ka')
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
        return Object(i.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [a.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          c.createElement(
            'g',
            null,
            c.createElement('path', {
              d: 'M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    uqhH: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        c = n('ezF+'),
        a = n('wtjx'),
        i = n('VPAj'),
        s = n('zh9S'),
        l = n('Rp9C'),
        u = n('XcJG'),
        p = n('Zejx')
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
      function f(e) {
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
      t.a = function (e) {
        var t = e.component,
          n = e.getDisplayTypeSpecificProps,
          r = e.shouldDisplayBorder,
          o = void 0 !== r && r,
          d = e.shouldStoreTypeaheadItem
        return c.g({
          component: t,
          bindActions: function () {
            return { saveAsRecentSearch: a.a, scribe: s.c }
          },
          selectData: function (e) {
            var t = e.entry
            return {
              topic: function (e) {
                return p.a.select(e, t.content.topicId)
              },
            }
          },
          createProps: function (e) {
            var t = e.actions,
              r = e.data,
              o = e.entry,
              c = e.feedbackItems,
              a = r.topic
            if (!a) return null
            var i = o.content.topicFunctionalityType === u.b.Recommendation,
              s = 1 === c.length ? c[0].onClick : void 0
            return f(
              { notInterestedOnClick: !a.not_interested && !a.following && i && !!s ? s : void 0, topic: a },
              n({ entry: o, actions: t, shouldStoreTypeaheadItem: d }),
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
          shouldDisplayBorder: Object(i.a)(o),
        })
      }
    },
    zWr2: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('uqhH'),
        o = (n('ho0z'), n('ERkP')),
        c = n('ddV6'),
        a = n.n(c),
        i = n('v6aA'),
        s = n('Zejx'),
        l = n('rxPX'),
        u = n('0KEI'),
        p = Object(l.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('TOPIC_PILL_CONTEXT'),
              follow: s.a.follow,
              unfollow: s.a.unfollow,
            }
          })
          .withAnalytics(),
        d = n('3XMw'),
        f = n.n(d),
        h = n('Tp1h'),
        y = n('Jkc4'),
        m = n('gwY8'),
        b = n('U+bB'),
        v = n('MWbm'),
        g = n('UnyZ'),
        w = n('aV/s'),
        I = n('rHpw'),
        O = f.a.ge8f3043,
        k = f.a.aa576cbf,
        P = f.a.i77347d0,
        E = f.a.e839db39,
        j = function (e) {
          var t = o.useContext(i.a),
            n = t.featureSwitches,
            r = t.loggedInUserId,
            c = e.analytics,
            s = e.createLocalApiErrorHandler,
            l = e.follow,
            u = e.notInterestedOnClick,
            p = e.topic,
            d = e.unfollow,
            f = e.withActionIcon,
            I = p.following,
            j = p.icon_url,
            D = p.id,
            S = p.name,
            x = p.not_interested,
            L = o.useRef(!1),
            R = o.useState(0),
            _ = a()(R, 2),
            A = _[0],
            H = _[1],
            T = o.useCallback(
              function (e) {
                if (0 === A) {
                  var t = e.nativeEvent.layout.width
                  H(t)
                }
              },
              [A],
            ),
            B = function (e) {
              if (!x && f) return I ? g.a.Active : g.a.Expand
            },
            M = function (e, t, n) {
              return e(I ? z(n) : F(t))
            },
            F = function (e) {
              return function (t) {
                l(D)
                  .catch(s())
                  .then(e && e(D)),
                  c.scribeAction('follow')
              }
            },
            z = function (e) {
              return function (t) {
                d(D)
                  .catch(s())
                  .then(e && e(D)),
                  c.scribeAction('unfollow')
              }
            },
            W = function (e, t, n) {
              if (r && u)
                return {
                  mode: g.a.Remove,
                  onSecondaryClick: u,
                  accessibilityLabel: P({ topicName: S }),
                  hoverLabel: E,
                  disabled: I || x,
                }
            },
            V = j && n.isTrue('topic_icons_enabled') ? o.createElement(b.a, { source: j, style: C.roundIcon }) : void 0
          return o.createElement(y.a, { customText: S, displayMode: h.a.topic }, function (e) {
            return o.createElement(m.a.Consumer, null, function (t) {
              var n = t.onFollow,
                r = t.onInitialize,
                c = t.onUnfollow
              return (
                r && !L.current && (r(D, I), (L.current = !0)),
                o.createElement(
                  v.a,
                  { onLayout: T, style: [C.root, { minWidth: A }] },
                  o.createElement(w.a, {
                    accessibilityLabel: I ? k({ topicName: S }) : O({ topicName: S }),
                    avatar: V,
                    disabled: x,
                    key: D,
                    mode: B(),
                    onClick: M(e, n, c),
                    secondaryAction: W(),
                    selected: I,
                    style: C.pill,
                    text: S,
                  }),
                )
              )
            })
          })
        }
      j.defaultProps = { withActionIcon: !0 }
      var C = I.a.create(function (e) {
          return {
            root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 },
            pill: { textOverflow: 'ellipsis' },
            roundIcon: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' },
          }
        }),
        D = p(j),
        S = n('Irs7'),
        x = n('lnL+'),
        L = function (e) {
          var t = Object(S.b)(),
            n = e.notInterestedOnClick,
            r = e.topic,
            c = e.withActionIcon
          return e.withLandingPageLink
            ? o.createElement(
                v.a,
                { style: R.root },
                o.createElement(x.a, {
                  link: '/i/topics/'.concat(r.id),
                  onClick: function () {
                    t.scribeAction('click')
                  },
                  text: r.name,
                }),
              )
            : o.createElement(D, { notInterestedOnClick: n, topic: r, withActionIcon: c })
        },
        R = I.a.create(function (e) {
          return { root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 } }
        })
      L.defaultProps = { withLandingPageLink: !1 }
      var _ = L,
        A = n('XcJG'),
        H = function (e) {
          return {
            withLandingPageLink: e.entry.content.topicFunctionalityType === A.b.Pivot,
            withActionIcon:
              e.entry.content.topicFunctionalityType !== A.b.Pivot &&
              e.entry.content.topicDisplayType !== A.a.PillWithoutActionIcon,
          }
        }
      t.default = function (e) {
        var t = e.shouldDisplayBorder
        return Object(r.a)({ component: _, getDisplayTypeSpecificProps: H, shouldDisplayBorder: t })
      }
    },
  },
])
//# sourceMappingURL=WIPED
