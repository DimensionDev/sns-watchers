;(window.webpackJsonp = window.webpackJsonp || []).push([
  [354],
  {
    E3Hq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return r
        })
      var a = n('Rp9C'),
        o = n('XcJG'),
        c = function (e) {
          var t = e.feedbackItems,
            n = e.topic,
            a = e.topicItemContent.topicFunctionalityType === o.b.Recommendation,
            c = 1 === (null == t ? void 0 : t.length) ? t[0].onClick : void 0
          return !(null != n && n.not_interested) && !(null != n && n.following) && a ? c : void 0
        },
        r = function (e) {
          return a.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo)
        }
    },
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
      var a = n('ezF+'),
        o = n('VPAj'),
        c = n('E3Hq'),
        r = n('ERkP'),
        i = n.n(r),
        s = n('wtjx'),
        l = n('Zejx'),
        d = n('rxPX'),
        p = function (e, t) {
          return l.a.select(e, t.entry.content.topicId)
        },
        u = Object(d.a)()
          .propsFromState(function () {
            return { topic: p }
          })
          .propsFromActions(function () {
            return { saveAsRecentSearch: s.a }
          }),
        m = n('fRsM'),
        f = n('XcJG'),
        h = n('Irs7'),
        b = function (e) {
          var t = Object(h.b)(),
            n = e.entry.content,
            a = e.feedbackItems,
            o = e.saveAsRecentSearch,
            r = e.shouldStoreTypeaheadItem,
            s = e.topic
          if (
            (i.a.useEffect(function () {
              s && t.scribeAction('impression')
            }, []),
            !s)
          )
            return null
          var l = Object(c.a)({ feedbackItems: a, topic: s, topicItemContent: n }),
            d = n.topicDisplayType === f.a.Basic
          return i.a.createElement(m.a, {
            notInterestedOnClick: l,
            saveAsRecentSearch: o,
            shouldStoreTypeaheadItem: r,
            topic: s,
            withIcon: d,
          })
        },
        y = u(i.a.memo(b))
      t.default = function (e) {
        return a
          .b({
            component: y,
            isFocusable: Object(o.a)(!0),
            getScribeDataItem: c.b,
            shouldDisplayBorder: Object(o.a)(!1),
          })
          .getHandler(function () {
            return e
          })
      }
    },
    'aV/s': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        o = n.n(a),
        c = n('Y9Ll'),
        r = n.n(c),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        d = n.n(l),
        p = n('2VqO'),
        u = n.n(p),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        b = n.n(h),
        y = n('t62R'),
        v = n('3XMw'),
        I = n.n(v),
        g = n('I4+6'),
        w = n('cm6r'),
        k = n('UnyZ'),
        C = n('rHpw'),
        E = n('MWbm'),
        x = n('hOZg'),
        S = n('iY63'),
        A = n('IMYl'),
        L = { active: I.a.e557ad8d, expand: I.a.e3a58c27, remove: I.a.h517e8d8 },
        _ = (function (e) {
          d()(n, e)
          var t = u()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, c = new Array(a), r = 0; r < a; r++) c[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(c))),
              f()(s()(e), '_handleSecondaryClick', function () {
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
                    c = e.link,
                    r = e.mode,
                    i = e.onClick,
                    s = e.secondaryAction,
                    l = e.selected,
                    d = e.style,
                    p = e.text,
                    u = this._renderIcon(!0, r),
                    m = s && this._renderIcon(!1, s.mode),
                    f = [O.root, a && O.compact, o && O.disabled, l && O.selected, d],
                    h = [O.content, u && O.withIcon, n && ((a && O.withAvatarImageCompact) || O.withAvatarImage)],
                    v = g.a.generate({
                      backgroundColor: l ? C.a.theme.colors.primary : 'transparent',
                      color: l ? C.a.theme.colors.white : C.a.theme.colors.primary,
                    })
                  return b.a.createElement(
                    E.a,
                    { style: f },
                    b.a.createElement(
                      w.a,
                      {
                        accessibilityLabel: t || (r ? L[r] : ''),
                        disabled: o,
                        interactiveStyles: v,
                        link: c,
                        onPress: i,
                        style: h,
                      },
                      this._renderAvatar(),
                      b.a.createElement(
                        y.b,
                        {
                          color: l ? 'whiteOnColor' : 'normal',
                          numberOfLines: 1,
                          selectable: !1,
                          style: O.text,
                          weight: 'bold',
                        },
                        p,
                      ),
                      u,
                    ),
                    s
                      ? b.a.createElement(
                          w.a,
                          {
                            accessibilityLabel: s.accessibilityLabel || (s.mode ? L[s.mode] : ''),
                            disabled: o || s.disabled,
                            hoverLabel: { label: s.hoverLabel || (s.mode ? L[s.mode] : '') },
                            interactiveStyles: v,
                            onPress: this._handleSecondaryClick,
                            style: O.secondaryControl,
                          },
                          b.a.createElement(E.a, { style: O.secondaryBorder }, m),
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
                    a = [O.icon, n && O.iconSelected],
                    o = [O.icon]
                  switch (t) {
                    case k.a.Remove:
                      return b.a.createElement(x.a, { style: [O.dismissIcon, e && a] })
                    case k.a.Expand:
                      return b.a.createElement(S.a, { style: e ? a : o })
                    case k.a.Active:
                      return b.a.createElement(A.a, { style: a })
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
                    ? b.a.createElement(E.a, { style: [O.avatarContainer, n ? O.avatarCompact : O.avatar] }, t)
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      f()(_, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var O = C.a.create(function (e) {
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
        c = n('VrFO'),
        r = n.n(c),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        d = n.n(l),
        p = n('5Yy7'),
        u = n.n(p),
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        b = n.n(h),
        y = (n('1t7P'), n('jQ/y'), n('ho0z'), n('7xRU'), n('ERkP')),
        v = n.n(y),
        I = n('LWCC'),
        g = n('3XMw'),
        w = n.n(g),
        k = n('EHV7'),
        C = n('YICZ'),
        E = n('3IPs'),
        x = n('X04g'),
        S = n('MWbm'),
        A = n('Irs7'),
        L = n('hxu0'),
        _ = n('htQn'),
        O = n('t62R'),
        D = n('j7Bv'),
        R = n('rHpw'),
        j = n('v6aA'),
        P = w.a.a2a3824a,
        H = 0,
        F = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e, a) {
            var c
            return (
              r()(this, n),
              (c = t.call(this, e, a)),
              b()(d()(c), '_topicLink', {
                pathname: '/i/topics/'.concat(c.props.topic.id),
                state: {
                  referringScribeNamespace: o()(
                    o()({}, c.props.analytics.contextualScribeNamespace),
                    {},
                    { action: 'click' },
                  ),
                },
              }),
              b()(d()(c), '_handleOnClick', function () {
                var e = c.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  a = e.topic,
                  o = a.description,
                  r = a.id,
                  i = a.name
                t &&
                  n &&
                  n(x.a.ItemType.TOPIC) &&
                  t({ topic: { id: r, name: i, description: o || '', type: E.a.Topic } }),
                  c._handleScribe('click')
              }),
              (c._topicDomId = 'topic'.concat(H)),
              (c._nameDomId = 'topic-name'.concat(H)),
              (c._descriptionDomId = 'topic-description'.concat(H)),
              (c._followButtonDomId = 'topic-follow-button'.concat(H)),
              (c._notInterestedButtonDomId = 'topic-not-interested-button'.concat(H)),
              (H += 1),
              c
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
                    c = e.topic,
                    r = c.description,
                    i = c.name,
                    s = this.context.loggedInUserId
                  return v.a.createElement(
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
                    v.a.createElement(
                      S.a,
                      { style: B.topic },
                      v.a.createElement(S.a, { accessibilityLabel: P, nativeID: this._topicDomId }),
                      this._renderIcon(),
                      v.a.createElement(
                        S.a,
                        { style: B.text },
                        v.a.createElement(
                          O.b,
                          { nativeID: this._nameDomId, weight: a, withInteractiveStyling: !!this._topicLink },
                          i,
                        ),
                        r
                          ? v.a.createElement(
                              O.b,
                              { color: 'gray700', nativeID: this._descriptionDomId, numberOfLines: 2 },
                              r,
                            )
                          : null,
                      ),
                    ),
                    v.a.createElement(
                      S.a,
                      { style: B.buttons },
                      v.a.createElement(I.a, { educateOnFollow: t, nativeID: this._followButtonDomId, topic: c }),
                      s && o
                        ? v.a.createElement(C.a, {
                            nativeID: this._notInterestedButtonDomId,
                            onPress: o,
                            style: B.marginLeft,
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
                  return this.props.withIcon
                    ? v.a.createElement(D.a, { Icon: k.a, size: 'large', style: B.icon })
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
      b()(F, 'contextType', j.a), b()(F, 'defaultProps', { nameWeight: 'bold', withIcon: !0 })
      var B = R.a.create(function (e) {
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
      t.a = Object(L.a)(Object(A.a)(F))
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
        c = n('ERkP'),
        r = n.n(c),
        i = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return r.a.createElement(i.a.Consumer, null, function (n) {
            return r.a.createElement(e, o()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    zWr2: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ezF+'),
        o = n('VPAj'),
        c = n('E3Hq'),
        r = (n('ho0z'), n('ERkP')),
        i = n.n(r),
        s = n('Zejx'),
        l = n('rxPX'),
        d = function (e, t) {
          return s.a.select(e, t.entry.content.topicId)
        },
        p = Object(l.a)().propsFromState(function () {
          return { topic: d }
        }),
        u = n('ddV6'),
        m = n.n(u),
        f = n('v6aA'),
        h = n('0KEI'),
        b = Object(l.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('TOPIC_PILL_CONTEXT'),
              follow: s.a.follow,
              unfollow: s.a.unfollow,
            }
          })
          .withAnalytics(),
        y = n('3XMw'),
        v = n.n(y),
        I = n('Tp1h'),
        g = n('Jkc4'),
        w = n('gwY8'),
        k = n('MWbm'),
        C = n('UnyZ'),
        E = n('aV/s'),
        x = n('rHpw'),
        S = v.a.ge8f3043,
        A = v.a.aa576cbf,
        L = v.a.i77347d0,
        _ = v.a.e839db39,
        O = function (e) {
          var t = i.a.useContext(f.a).loggedInUserId,
            n = e.analytics,
            a = e.createLocalApiErrorHandler,
            o = e.follow,
            c = e.notInterestedOnClick,
            r = e.topic,
            s = e.unfollow,
            l = e.withActionIcon,
            d = r.following,
            p = r.id,
            u = r.name,
            h = r.not_interested,
            b = i.a.useRef(!1),
            y = i.a.useState(0),
            v = m()(y, 2),
            x = v[0],
            O = v[1],
            R = i.a.useCallback(
              function (e) {
                if (0 === x) {
                  var t = e.nativeEvent.layout.width
                  O(t)
                }
              },
              [x],
            ),
            j = function (e) {
              if (!h && l) return d ? C.a.Active : C.a.Expand
            },
            P = function (e, t, n) {
              return e(d ? F(n) : H(t))
            },
            H = function (e) {
              return function (t) {
                o(p)
                  .catch(a())
                  .then(e && e(p)),
                  n.scribeAction('follow')
              }
            },
            F = function (e) {
              return function (t) {
                s(p)
                  .catch(a())
                  .then(e && e(p)),
                  n.scribeAction('unfollow')
              }
            },
            B = function (e, n, a) {
              if (t && c)
                return {
                  mode: C.a.Remove,
                  onSecondaryClick: c,
                  accessibilityLabel: L({ topicName: u }),
                  hoverLabel: _,
                  disabled: d || h,
                }
            }
          return i.a.createElement(g.a, { customText: u, displayMode: I.a.topic }, function (e) {
            return i.a.createElement(w.a.Consumer, null, function (t) {
              var n = t.onFollow,
                a = t.onInitialize,
                o = t.onUnfollow
              return (
                a && !b.current && (a(p, d), (b.current = !0)),
                i.a.createElement(
                  k.a,
                  { onLayout: R, style: [D.root, { minWidth: x }] },
                  i.a.createElement(E.a, {
                    accessibilityLabel: d ? A({ topicName: u }) : S({ topicName: u }),
                    disabled: h,
                    key: p,
                    mode: j(),
                    onClick: P(e, n, o),
                    secondaryAction: B(),
                    selected: d,
                    style: D.pill,
                    text: u,
                  }),
                )
              )
            })
          })
        }
      O.defaultProps = { withActionIcon: !0 }
      var D = x.a.create(function (e) {
          return {
            root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 },
            pill: { textOverflow: 'ellipsis' },
            roundIcon: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' },
          }
        }),
        R = b(O),
        j = n('Irs7'),
        P = n('lnL+'),
        H = n('XcJG'),
        F = function (e) {
          var t = Object(j.b)(),
            n = e.entry.content,
            a = e.feedbackItems,
            o = e.topic,
            r = n.topicDisplayType,
            s = n.topicFunctionalityType
          i.a.useEffect(function () {
            o && t.scribeAction('impression')
          }, [])
          var l = i.a.useCallback(
            function () {
              t.scribeAction('click')
            },
            [t],
          )
          if (!o) return null
          var d = Object(c.a)({ feedbackItems: a, topic: o, topicItemContent: n }),
            p = s !== H.b.Pivot && r !== H.a.PillWithoutActionIcon
          return s === H.b.Pivot
            ? i.a.createElement(
                k.a,
                { style: B.root },
                i.a.createElement(P.a, { link: '/i/topics/'.concat(o.id), onClick: l, text: o.name }),
              )
            : i.a.createElement(R, { notInterestedOnClick: d, topic: o, withActionIcon: p })
        },
        B = x.a.create(function (e) {
          return { root: { margin: e.spaces.space4 } }
        }),
        T = p(i.a.memo(F))
      t.default = function (e) {
        var t = e.shouldDisplayBorder,
          n = void 0 !== t && t
        return a
          .b({
            component: T,
            isFocusable: Object(o.a)(!0),
            getScribeDataItem: c.b,
            shouldDisplayBorder: Object(o.a)(n),
          })
          .getHandler()
      }
    },
  },
])
//# sourceMappingURL=WIPED
