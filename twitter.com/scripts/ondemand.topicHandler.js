;(window.webpackJsonp = window.webpackJsonp || []).push([
  [354],
  {
    UnyZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f')
      var a = Object.freeze({ Active: 'active', Expand: 'expand', Remove: 'remove' })
    },
    YMZp: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('uqhH'),
        o = n('fRsM'),
        i = n('XcJG'),
        r = function (e) {
          return {
            saveAsRecentSearch: e.actions.saveAsRecentSearch,
            shouldStoreTypeaheadItem: e.shouldStoreTypeaheadItem,
            withIcon: e.entry.content.topicDisplayType === i.a.Basic,
          }
        }
      t.default = function (e) {
        var t = e.shouldStoreTypeaheadItem
        return Object(a.a)({ component: o.a, getDisplayTypeSpecificProps: r, shouldStoreTypeaheadItem: t })
      }
    },
    'aV/s': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        o = n.n(a),
        i = n('Y9Ll'),
        r = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        d = n.n(l),
        p = n('2VqO'),
        u = n.n(p),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        y = n.n(f),
        v = n('t62R'),
        b = n('3XMw'),
        I = n.n(b),
        g = n('I4+6'),
        w = n('cm6r'),
        k = n('UnyZ'),
        C = n('rHpw'),
        E = n('MWbm'),
        x = n('hOZg'),
        S = n('iY63'),
        L = n('IMYl'),
        D = { active: I.a.e557ad8d, expand: I.a.e3a58c27, remove: I.a.h517e8d8 },
        _ = (function (e) {
          d()(n, e)
          var t = u()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_handleSecondaryClick', function () {
                var t = e.props.secondaryAction
                t && t.onSecondaryClick()
              }),
              e
            )
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.avatar,
                    a = e.compact,
                    o = e.disabled,
                    i = e.link,
                    r = e.mode,
                    c = e.onClick,
                    s = e.secondaryAction,
                    l = e.selected,
                    d = e.style,
                    p = e.text,
                    u = this._renderIcon(!0, r),
                    m = s && this._renderIcon(!1, s.mode),
                    h = [A.root, a && A.compact, o && A.disabled, l && A.selected, d],
                    f = [A.content, u && A.withIcon, n && ((a && A.withAvatarImageCompact) || A.withAvatarImage)],
                    b = g.a.generate({
                      backgroundColor: l ? C.a.theme.colors.primary : 'transparent',
                      color: l ? C.a.theme.colors.white : C.a.theme.colors.primary,
                    })
                  return y.a.createElement(
                    E.a,
                    { style: h },
                    y.a.createElement(
                      w.a,
                      {
                        accessibilityLabel: t || (r ? D[r] : ''),
                        disabled: o,
                        interactiveStyles: b,
                        link: i,
                        onPress: c,
                        style: f,
                      },
                      this._renderAvatar(),
                      y.a.createElement(
                        v.b,
                        {
                          color: l ? 'whiteOnColor' : 'normal',
                          numberOfLines: 1,
                          selectable: !1,
                          style: A.text,
                          weight: 'bold',
                        },
                        p,
                      ),
                      u,
                    ),
                    s
                      ? y.a.createElement(
                          w.a,
                          {
                            accessibilityLabel: s.accessibilityLabel || (s.mode ? D[s.mode] : ''),
                            disabled: o || s.disabled,
                            hoverLabel: { label: s.hoverLabel || (s.mode ? D[s.mode] : '') },
                            interactiveStyles: b,
                            onPress: this._handleSecondaryClick,
                            style: A.secondaryControl,
                          },
                          y.a.createElement(E.a, { style: A.secondaryBorder }, m),
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
                    a = [A.icon, n && A.iconSelected],
                    o = [A.icon]
                  switch (t) {
                    case k.a.Remove:
                      return y.a.createElement(x.a, { style: [A.dismissIcon, e && a] })
                    case k.a.Expand:
                      return y.a.createElement(S.a, { style: e ? a : o })
                    case k.a.Active:
                      return y.a.createElement(L.a, { style: a })
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
                    ? y.a.createElement(E.a, { style: [A.avatarContainer, n ? A.avatarCompact : A.avatar] }, t)
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      h()(_, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var A = C.a.create(function (e) {
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
      t.a = _
    },
    fRsM: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        o = n.n(a),
        i = n('VrFO'),
        r = n.n(i),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        d = n.n(l),
        p = n('5Yy7'),
        u = n.n(p),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        y = n.n(f),
        v = (n('1t7P'), n('jQ/y'), n('ho0z'), n('7xRU'), n('ERkP')),
        b = n.n(v),
        I = n('LWCC'),
        g = n('3XMw'),
        w = n.n(g),
        k = n('EHV7'),
        C = n('YICZ'),
        E = n('3IPs'),
        x = n('X04g'),
        S = n('MWbm'),
        L = n('Irs7'),
        D = n('hxu0'),
        _ = n('htQn'),
        A = n('t62R'),
        O = n('j7Bv'),
        P = n('rHpw'),
        R = n('v6aA'),
        T = w.a.a2a3824a,
        j = 0,
        H = (function (e) {
          u()(n, e)
          var t = h()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              y()(d()(i), '_topicLink', {
                pathname: '/i/topics/'.concat(i.props.topic.id),
                state: {
                  referringScribeNamespace: o()(
                    o()({}, i.props.analytics.contextualScribeNamespace),
                    {},
                    { action: 'click' },
                  ),
                },
              }),
              y()(d()(i), '_handleOnClick', function () {
                var e = i.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  a = e.topic,
                  o = a.description,
                  r = a.id,
                  c = a.name
                t &&
                  n &&
                  n(x.a.ItemType.TOPIC) &&
                  t({ topic: { id: r, name: c, description: o || '', type: E.a.Topic } }),
                  i._handleScribe('click')
              }),
              (i._topicDomId = 'topic'.concat(j)),
              (i._nameDomId = 'topic-name'.concat(j)),
              (i._descriptionDomId = 'topic-description'.concat(j)),
              (i._followButtonDomId = 'topic-follow-button'.concat(j)),
              (i._notInterestedButtonDomId = 'topic-not-interested-button'.concat(j)),
              (j += 1),
              i
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.educateOnFollow,
                    n = e.isInSidebar,
                    a = e.nameWeight,
                    o = e.notInterestedOnClick,
                    i = e.topic,
                    r = i.description,
                    c = i.name,
                    s = this.context.loggedInUserId
                  return b.a.createElement(
                    _.a,
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
                      style: [B.root, B.flexStart],
                      withDarkerInteractiveBackground: n,
                    },
                    b.a.createElement(
                      S.a,
                      { style: B.topic },
                      b.a.createElement(S.a, { accessibilityLabel: T, nativeID: this._topicDomId }),
                      this._renderIcon(),
                      b.a.createElement(
                        S.a,
                        { style: B.text },
                        b.a.createElement(
                          A.b,
                          { nativeID: this._nameDomId, weight: a, withInteractiveStyling: !!this._topicLink },
                          c,
                        ),
                        r
                          ? b.a.createElement(
                              A.b,
                              { color: 'gray700', nativeID: this._descriptionDomId, numberOfLines: 2 },
                              r,
                            )
                          : null,
                      ),
                    ),
                    b.a.createElement(
                      S.a,
                      { style: B.buttons },
                      b.a.createElement(I.a, { educateOnFollow: t, nativeID: this._followButtonDomId, topic: i }),
                      s && o
                        ? b.a.createElement(C.a, {
                            nativeID: this._notInterestedButtonDomId,
                            onPress: o,
                            style: B.marginLeft,
                            topicId: i.id,
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
                    ? b.a.createElement(O.a, { Icon: k.a, size: 'large', style: B.icon })
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
        })(b.a.Component)
      y()(H, 'contextType', R.a), y()(H, 'defaultProps', { nameWeight: 'bold', withIcon: !0 })
      var B = P.a.create(function (e) {
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
      t.a = Object(D.a)(Object(L.a)(H))
    },
    gwY8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var a = n('ERkP'),
        o = n.n(a).a.createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
    hxu0: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        o = n.n(a),
        i = n('ERkP'),
        r = n.n(i),
        c = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return r.a.createElement(c.a.Consumer, null, function (n) {
            return r.a.createElement(e, o()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    uqhH: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        o = n.n(a),
        i = n('ezF+'),
        r = n('wtjx'),
        c = n('VPAj'),
        s = n('zh9S'),
        l = n('Rp9C'),
        d = n('XcJG'),
        p = n('Zejx')
      t.a = function (e) {
        var t = e.component,
          n = e.getDisplayTypeSpecificProps,
          a = e.shouldDisplayBorder,
          u = void 0 !== a && a,
          m = e.shouldStoreTypeaheadItem
        return i.g({
          component: t,
          bindActions: function () {
            return { saveAsRecentSearch: r.a, scribe: s.c }
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
              a = e.data,
              i = e.entry,
              r = e.feedbackItems,
              c = a.topic
            if (!c) return null
            var s = i.content.topicFunctionalityType === d.b.Recommendation,
              l = 1 === r.length ? r[0].onClick : void 0,
              p = !c.not_interested && !c.following && s && !!l
            return o()(
              { notInterestedOnClick: p ? l : void 0, topic: c },
              n({ entry: i, actions: t, shouldStoreTypeaheadItem: m }),
            )
          },
          isFocusable: Object(c.a)(!0),
          getScribeDataItem: function (e) {
            return l.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo)
          },
          onImpression: function (e) {
            var t = e.actions.scribe,
              n = e.scribeData,
              a = e.scribeNamespace
            t(o()(o()({}, a), {}, { action: 'impression' }), n)
          },
          shouldDisplayBorder: Object(c.a)(u),
        })
      }
    },
    zWr2: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('uqhH'),
        o = (n('ho0z'), n('ERkP')),
        i = n.n(o),
        r = n('ddV6'),
        c = n.n(r),
        s = n('v6aA'),
        l = n('Zejx'),
        d = n('rxPX'),
        p = n('0KEI'),
        u = Object(d.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)('TOPIC_PILL_CONTEXT'),
              follow: l.a.follow,
              unfollow: l.a.unfollow,
            }
          })
          .withAnalytics(),
        m = n('3XMw'),
        h = n.n(m),
        f = n('Tp1h'),
        y = n('Jkc4'),
        v = n('gwY8'),
        b = n('MWbm'),
        I = n('UnyZ'),
        g = n('aV/s'),
        w = n('rHpw'),
        k = h.a.ge8f3043,
        C = h.a.aa576cbf,
        E = h.a.i77347d0,
        x = h.a.e839db39,
        S = function (e) {
          var t = i.a.useContext(s.a).loggedInUserId,
            n = e.analytics,
            a = e.createLocalApiErrorHandler,
            o = e.follow,
            r = e.notInterestedOnClick,
            l = e.topic,
            d = e.unfollow,
            p = e.withActionIcon,
            u = l.following,
            m = l.id,
            h = l.name,
            w = l.not_interested,
            S = i.a.useRef(!1),
            D = i.a.useState(0),
            _ = c()(D, 2),
            A = _[0],
            O = _[1],
            P = i.a.useCallback(
              function (e) {
                if (0 === A) {
                  var t = e.nativeEvent.layout.width
                  O(t)
                }
              },
              [A],
            ),
            R = function (e) {
              if (!w && p) return u ? I.a.Active : I.a.Expand
            },
            T = function (e, t, n) {
              return e(u ? H(n) : j(t))
            },
            j = function (e) {
              return function (t) {
                o(m)
                  .catch(a())
                  .then(e && e(m)),
                  n.scribeAction('follow')
              }
            },
            H = function (e) {
              return function (t) {
                d(m)
                  .catch(a())
                  .then(e && e(m)),
                  n.scribeAction('unfollow')
              }
            },
            B = function (e, n, a) {
              if (t && r)
                return {
                  mode: I.a.Remove,
                  onSecondaryClick: r,
                  accessibilityLabel: E({ topicName: h }),
                  hoverLabel: x,
                  disabled: u || w,
                }
            }
          return i.a.createElement(y.a, { customText: h, displayMode: f.a.topic }, function (e) {
            return i.a.createElement(v.a.Consumer, null, function (t) {
              var n = t.onFollow,
                a = t.onInitialize,
                o = t.onUnfollow
              return (
                a && !S.current && (a(m, u), (S.current = !0)),
                i.a.createElement(
                  b.a,
                  { onLayout: P, style: [L.root, { minWidth: A }] },
                  i.a.createElement(g.a, {
                    accessibilityLabel: u ? C({ topicName: h }) : k({ topicName: h }),
                    disabled: w,
                    key: m,
                    mode: R(),
                    onClick: T(e, n, o),
                    secondaryAction: B(),
                    selected: u,
                    style: L.pill,
                    text: h,
                  }),
                )
              )
            })
          })
        }
      S.defaultProps = { withActionIcon: !0 }
      var L = w.a.create(function (e) {
          return {
            root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 },
            pill: { textOverflow: 'ellipsis' },
            roundIcon: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' },
          }
        }),
        D = u(S),
        _ = n('Irs7'),
        A = n('lnL+'),
        O = function (e) {
          var t = Object(_.b)(),
            n = e.notInterestedOnClick,
            a = e.topic,
            o = e.withActionIcon
          return e.withLandingPageLink
            ? i.a.createElement(
                b.a,
                { style: P.root },
                i.a.createElement(A.a, {
                  link: '/i/topics/'.concat(a.id),
                  onClick: function () {
                    t.scribeAction('click')
                  },
                  text: a.name,
                }),
              )
            : i.a.createElement(D, { notInterestedOnClick: n, topic: a, withActionIcon: o })
        },
        P = w.a.create(function (e) {
          return { root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 } }
        })
      O.defaultProps = { withLandingPageLink: !1 }
      var R = O,
        T = n('XcJG'),
        j = function (e) {
          return {
            withLandingPageLink: e.entry.content.topicFunctionalityType === T.b.Pivot,
            withActionIcon:
              e.entry.content.topicFunctionalityType !== T.b.Pivot &&
              e.entry.content.topicDisplayType !== T.a.PillWithoutActionIcon,
          }
        }
      t.default = function (e) {
        var t = e.shouldDisplayBorder
        return Object(a.a)({ component: R, getDisplayTypeSpecificProps: j, shouldDisplayBorder: t })
      }
    },
  },
])
//# sourceMappingURL=WIPED
