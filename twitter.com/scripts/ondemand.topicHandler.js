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
      var a = n('yiKp'),
        o = n.n(a),
        i = n('ezF+'),
        c = n('wtjx'),
        r = n('VPAj'),
        s = n('zh9S'),
        l = n('Rp9C'),
        d = n('XcJG'),
        p = n('Zejx'),
        u = n('fRsM'),
        m = function (e) {
          return {
            saveAsRecentSearch: e.actions.saveAsRecentSearch,
            shouldStoreTypeaheadItem: e.shouldStoreTypeaheadItem,
            withIcon: e.entry.content.topicDisplayType === d.a.Basic,
          }
        }
      t.default = function (e) {
        var t = e.shouldStoreTypeaheadItem
        return (function (e) {
          var t = e.component,
            n = e.getDisplayTypeSpecificProps,
            a = e.shouldDisplayBorder,
            u = void 0 !== a && a,
            m = e.shouldStoreTypeaheadItem
          return i.g({
            component: t,
            bindActions: function () {
              return { saveAsRecentSearch: c.a, scribe: s.c }
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
                c = e.feedbackItems,
                r = a.topic
              if (!r) return null
              var s = i.content.topicFunctionalityType === d.b.Recommendation,
                l = 1 === c.length ? c[0].onClick : void 0,
                p = !r.not_interested && !r.following && s && !!l
              return o()(
                { notInterestedOnClick: p ? l : void 0, topic: r },
                n({ entry: i, actions: t, shouldStoreTypeaheadItem: m }),
              )
            },
            isFocusable: Object(r.a)(!0),
            getScribeDataItem: function (e) {
              return l.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo)
            },
            onImpression: function (e) {
              var t = e.actions.scribe,
                n = e.scribeData,
                a = e.scribeNamespace
              t(o()(o()({}, a), {}, { action: 'impression' }), n)
            },
            shouldDisplayBorder: Object(r.a)(u),
          })
        })({ component: u.a, getDisplayTypeSpecificProps: m, shouldStoreTypeaheadItem: t })
      }
    },
    'aV/s': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        o = n.n(a),
        i = n('Y9Ll'),
        c = n.n(i),
        r = n('1Pcy'),
        s = n.n(r),
        l = n('5Yy7'),
        d = n.n(l),
        p = n('2VqO'),
        u = n.n(p),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        y = n.n(h),
        b = n('t62R'),
        v = n('3XMw'),
        I = n.n(v),
        g = n('I4+6'),
        w = n('cm6r'),
        k = n('UnyZ'),
        C = n('rHpw'),
        E = n('MWbm'),
        S = n('hOZg'),
        x = n('iY63'),
        D = n('IMYl'),
        _ = { active: I.a.e557ad8d, expand: I.a.e3a58c27, remove: I.a.h517e8d8 },
        L = (function (e) {
          d()(n, e)
          var t = u()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), '_handleSecondaryClick', function () {
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
                    a = e.compact,
                    o = e.disabled,
                    i = e.link,
                    c = e.mode,
                    r = e.onClick,
                    s = e.secondaryAction,
                    l = e.selected,
                    d = e.style,
                    p = e.text,
                    u = this._renderIcon(!0, c),
                    m = s && this._renderIcon(!1, s.mode),
                    f = [A.root, a && A.compact, o && A.disabled, l && A.selected, d],
                    h = [A.content, u && A.withIcon, n && ((a && A.withAvatarImageCompact) || A.withAvatarImage)],
                    v = g.a.generate({
                      backgroundColor: l ? C.a.theme.colors.primary : 'transparent',
                      color: l ? C.a.theme.colors.white : C.a.theme.colors.primary,
                    })
                  return y.a.createElement(
                    E.a,
                    { style: f },
                    y.a.createElement(
                      w.a,
                      {
                        accessibilityLabel: t || (c ? _[c] : ''),
                        disabled: o,
                        interactiveStyles: v,
                        link: i,
                        onPress: r,
                        style: h,
                      },
                      this._renderAvatar(),
                      y.a.createElement(
                        b.b,
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
                            accessibilityLabel: s.accessibilityLabel || (s.mode ? _[s.mode] : ''),
                            disabled: o || s.disabled,
                            hoverLabel: { label: s.hoverLabel || (s.mode ? _[s.mode] : '') },
                            interactiveStyles: v,
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
                      return y.a.createElement(S.a, { style: [A.dismissIcon, e && a] })
                    case k.a.Expand:
                      return y.a.createElement(x.a, { style: e ? a : o })
                    case k.a.Active:
                      return y.a.createElement(D.a, { style: a })
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
      f()(L, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
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
      t.a = L
    },
    fRsM: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        o = n.n(a),
        i = n('VrFO'),
        c = n.n(i),
        r = n('Y9Ll'),
        s = n.n(r),
        l = n('1Pcy'),
        d = n.n(l),
        p = n('5Yy7'),
        u = n.n(p),
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        b = (n('1t7P'), n('jQ/y'), n('ho0z'), n('7xRU'), n('ERkP')),
        v = n.n(b),
        I = n('LWCC'),
        g = n('3XMw'),
        w = n.n(g),
        k = n('EHV7'),
        C = n('YICZ'),
        E = n('3IPs'),
        S = n('X04g'),
        x = n('MWbm'),
        D = n('Irs7'),
        _ = n('hxu0'),
        L = n('htQn'),
        A = n('t62R'),
        O = n('j7Bv'),
        R = n('rHpw'),
        P = n('v6aA'),
        T = w.a.a2a3824a,
        j = 0,
        B = (function (e) {
          u()(n, e)
          var t = f()(n)
          function n(e, a) {
            var i
            return (
              c()(this, n),
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
                  c = a.id,
                  r = a.name
                t &&
                  n &&
                  n(S.a.ItemType.TOPIC) &&
                  t({ topic: { id: c, name: r, description: o || '', type: E.a.Topic } }),
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
                    c = i.description,
                    r = i.name,
                    s = this.context.loggedInUserId
                  return v.a.createElement(
                    L.a,
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
                      style: [F.root, F.flexStart],
                      withDarkerInteractiveBackground: n,
                    },
                    v.a.createElement(
                      x.a,
                      { style: F.topic },
                      v.a.createElement(x.a, { accessibilityLabel: T, nativeID: this._topicDomId }),
                      this._renderIcon(),
                      v.a.createElement(
                        x.a,
                        { style: F.text },
                        v.a.createElement(
                          A.b,
                          { nativeID: this._nameDomId, weight: a, withInteractiveStyling: !!this._topicLink },
                          r,
                        ),
                        c
                          ? v.a.createElement(
                              A.b,
                              { color: 'gray700', nativeID: this._descriptionDomId, numberOfLines: 2 },
                              c,
                            )
                          : null,
                      ),
                    ),
                    v.a.createElement(
                      x.a,
                      { style: F.buttons },
                      v.a.createElement(I.a, { educateOnFollow: t, nativeID: this._followButtonDomId, topic: i }),
                      s && o
                        ? v.a.createElement(C.a, {
                            nativeID: this._notInterestedButtonDomId,
                            onPress: o,
                            style: F.marginLeft,
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
                    ? v.a.createElement(O.a, { Icon: k.a, size: 'large', style: F.icon })
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
      y()(B, 'contextType', P.a), y()(B, 'defaultProps', { nameWeight: 'bold', withIcon: !0 })
      var F = R.a.create(function (e) {
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
      t.a = Object(_.a)(Object(D.a)(B))
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
        c = n.n(i),
        r = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return c.a.createElement(r.a.Consumer, null, function (n) {
            return c.a.createElement(e, o()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    zWr2: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('ezF+'),
        o = n('VPAj'),
        i = n('Rp9C'),
        c = n('XcJG'),
        r = function (e) {
          return i.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo)
        },
        s = (n('ho0z'), n('ERkP')),
        l = n.n(s),
        d = n('Zejx'),
        p = n('rxPX'),
        u = function (e, t) {
          return d.a.select(e, t.entry.content.topicId)
        },
        m = Object(p.a)().propsFromState(function () {
          return { topic: u }
        }),
        f = n('ddV6'),
        h = n.n(f),
        y = n('v6aA'),
        b = n('0KEI'),
        v = Object(p.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('TOPIC_PILL_CONTEXT'),
              follow: d.a.follow,
              unfollow: d.a.unfollow,
            }
          })
          .withAnalytics(),
        I = n('3XMw'),
        g = n.n(I),
        w = n('Tp1h'),
        k = n('Jkc4'),
        C = n('gwY8'),
        E = n('MWbm'),
        S = n('UnyZ'),
        x = n('aV/s'),
        D = n('rHpw'),
        _ = g.a.ge8f3043,
        L = g.a.aa576cbf,
        A = g.a.i77347d0,
        O = g.a.e839db39,
        R = function (e) {
          var t = l.a.useContext(y.a).loggedInUserId,
            n = e.analytics,
            a = e.createLocalApiErrorHandler,
            o = e.follow,
            i = e.notInterestedOnClick,
            c = e.topic,
            r = e.unfollow,
            s = e.withActionIcon,
            d = c.following,
            p = c.id,
            u = c.name,
            m = c.not_interested,
            f = l.a.useRef(!1),
            b = l.a.useState(0),
            v = h()(b, 2),
            I = v[0],
            g = v[1],
            D = l.a.useCallback(
              function (e) {
                if (0 === I) {
                  var t = e.nativeEvent.layout.width
                  g(t)
                }
              },
              [I],
            ),
            R = function (e) {
              if (!m && s) return d ? S.a.Active : S.a.Expand
            },
            T = function (e, t, n) {
              return e(d ? B(n) : j(t))
            },
            j = function (e) {
              return function (t) {
                o(p)
                  .catch(a())
                  .then(e && e(p)),
                  n.scribeAction('follow')
              }
            },
            B = function (e) {
              return function (t) {
                r(p)
                  .catch(a())
                  .then(e && e(p)),
                  n.scribeAction('unfollow')
              }
            },
            F = function (e, n, a) {
              if (t && i)
                return {
                  mode: S.a.Remove,
                  onSecondaryClick: i,
                  accessibilityLabel: A({ topicName: u }),
                  hoverLabel: O,
                  disabled: d || m,
                }
            }
          return l.a.createElement(k.a, { customText: u, displayMode: w.a.topic }, function (e) {
            return l.a.createElement(C.a.Consumer, null, function (t) {
              var n = t.onFollow,
                a = t.onInitialize,
                o = t.onUnfollow
              return (
                a && !f.current && (a(p, d), (f.current = !0)),
                l.a.createElement(
                  E.a,
                  { onLayout: D, style: [P.root, { minWidth: I }] },
                  l.a.createElement(x.a, {
                    accessibilityLabel: d ? L({ topicName: u }) : _({ topicName: u }),
                    disabled: m,
                    key: p,
                    mode: R(),
                    onClick: T(e, n, o),
                    secondaryAction: F(),
                    selected: d,
                    style: P.pill,
                    text: u,
                  }),
                )
              )
            })
          })
        }
      R.defaultProps = { withActionIcon: !0 }
      var P = D.a.create(function (e) {
          return {
            root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 },
            pill: { textOverflow: 'ellipsis' },
            roundIcon: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' },
          }
        }),
        T = v(R),
        j = n('Irs7'),
        B = n('lnL+'),
        F = function (e) {
          var t = Object(j.b)(),
            n = e.entry.content,
            a = e.feedbackItems,
            o = e.topic,
            i = n.topicDisplayType,
            r = n.topicFunctionalityType
          l.a.useEffect(function () {
            o && t.scribeAction('impression')
          }, [])
          var s = l.a.useCallback(
            function () {
              t.scribeAction('click')
            },
            [t],
          )
          if (!o) return null
          var d = (function (e) {
              var t = e.feedbackItems,
                n = e.topic,
                a = e.topicItemContent.topicFunctionalityType === c.b.Recommendation,
                o = 1 === (null == t ? void 0 : t.length) ? t[0].onClick : void 0
              return (null != n && n.not_interested) || (null != n && n.following) || !a ? void 0 : o
            })({ feedbackItems: a, topic: o, topicItemContent: n }),
            p = r !== c.b.Pivot && i !== c.a.PillWithoutActionIcon
          return r === c.b.Pivot
            ? l.a.createElement(
                E.a,
                { style: H.root },
                l.a.createElement(B.a, { link: '/i/topics/'.concat(o.id), onClick: s, text: o.name }),
              )
            : l.a.createElement(T, { notInterestedOnClick: d, topic: o, withActionIcon: p })
        },
        H = D.a.create(function (e) {
          return { root: { margin: e.spaces.space4 } }
        }),
        z = m(l.a.memo(F))
      t.default = function (e) {
        var t = e.shouldDisplayBorder,
          n = void 0 !== t && t
        return a
          .b({ component: z, isFocusable: Object(o.a)(!0), getScribeDataItem: r, shouldDisplayBorder: Object(o.a)(n) })
          .getHandler()
      }
    },
  },
])
//# sourceMappingURL=WIPED
