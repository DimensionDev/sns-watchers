;(window.webpackJsonp = window.webpackJsonp || []).push([
  [359],
  {
    E3Hq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return c
        })
      var r = n('Rp9C'),
        o = n('XcJG'),
        a = function (e) {
          var t = e.feedbackItems,
            n = e.topic,
            r = e.topicItemContent.topicFunctionalityType === o.b.Recommendation,
            a = 1 === (null == t ? void 0 : t.length) ? t[0].onClick : void 0
          return !(null != n && n.not_interested) && !(null != n && n.following) && r ? a : void 0
        },
        c = function (e) {
          return r.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo)
        }
    },
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
      var r = n('yiKp'),
        o = n.n(r),
        a = n('ezF+'),
        c = n('VPAj'),
        i = n('E3Hq'),
        s = n('ERkP'),
        l = n.n(s),
        u = n('wtjx'),
        d = n('Zejx'),
        p = n('rxPX'),
        f = function (e, t) {
          return d.a.select(e, t.entry.content.topicId)
        },
        h = Object(p.a)()
          .propsFromState(function () {
            return { topic: f }
          })
          .propsFromActions(function () {
            return { saveAsRecentSearch: u.a }
          }),
        m = n('fRsM'),
        v = n('XcJG'),
        y = n('Irs7'),
        b = function (e) {
          var t = Object(y.b)(),
            n = e.entry.content,
            r = e.feedbackItems,
            o = e.saveAsRecentSearch,
            a = e.shouldStoreTypeaheadItem,
            c = e.topic
          if (
            (l.a.useEffect(function () {
              c && t.scribeAction('impression')
            }, []),
            !c)
          )
            return null
          var s = Object(i.a)({ feedbackItems: r, topic: c, topicItemContent: n }),
            u = n.topicDisplayType === v.a.Basic
          return l.a.createElement(m.a, {
            notInterestedOnClick: s,
            saveAsRecentSearch: o,
            shouldStoreTypeaheadItem: a,
            topic: c,
            withIcon: u,
          })
        },
        I = h(l.a.memo(b))
      t.default = function (e) {
        return a
          .b({
            component: I,
            isFocusable: Object(c.a)(!0),
            getScribeDataItem: i.b,
            shouldDisplayBorder: Object(c.a)(!1),
          })
          .getHandler(function () {
            return o()({}, e)
          })
      }
    },
    'aV/s': function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        h = n.n(f),
        m = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        v = n.n(m),
        y = n('t62R'),
        b = n('3XMw'),
        I = n.n(b),
        w = n('I4+6'),
        g = n('cm6r'),
        k = n('UnyZ'),
        S = n('rHpw'),
        C = n('MWbm'),
        E = n('hOZg'),
        x = n('iY63'),
        O = n('IMYl'),
        _ = { active: I.a.e557ad8d, expand: I.a.e3a58c27, remove: I.a.h517e8d8 },
        A = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              h()(s()(e), '_handleSecondaryClick', function () {
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
                    r = e.compact,
                    o = e.disabled,
                    a = e.link,
                    c = e.mode,
                    i = e.onClick,
                    s = e.secondaryAction,
                    l = e.selected,
                    u = e.style,
                    d = e.text,
                    p = this._renderIcon(!0, c),
                    f = s && this._renderIcon(!1, s.mode),
                    h = [L.root, r && L.compact, o && L.disabled, l && L.selected, u],
                    m = [L.content, p && L.withIcon, n && ((r && L.withAvatarImageCompact) || L.withAvatarImage)],
                    b = w.a.generate({
                      backgroundColor: l ? S.a.theme.colors.primary : 'transparent',
                      color: l ? S.a.theme.colors.white : S.a.theme.colors.primary,
                    })
                  return v.a.createElement(
                    C.a,
                    { style: h },
                    v.a.createElement(
                      g.a,
                      {
                        accessibilityLabel: t || (c ? _[c] : ''),
                        disabled: o,
                        interactiveStyles: b,
                        link: a,
                        onPress: i,
                        style: m,
                      },
                      this._renderAvatar(),
                      v.a.createElement(
                        y.b,
                        {
                          color: l ? 'whiteOnColor' : 'text',
                          numberOfLines: 1,
                          selectable: !1,
                          style: L.text,
                          weight: 'bold',
                        },
                        d,
                      ),
                      p,
                    ),
                    s
                      ? v.a.createElement(
                          g.a,
                          {
                            accessibilityLabel: s.accessibilityLabel || (s.mode ? _[s.mode] : ''),
                            disabled: o || s.disabled,
                            hoverLabel: { label: s.hoverLabel || (s.mode ? _[s.mode] : '') },
                            interactiveStyles: b,
                            onPress: this._handleSecondaryClick,
                            style: L.secondaryControl,
                          },
                          v.a.createElement(C.a, { style: L.secondaryBorder }, f),
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
                    r = [L.icon, n && L.iconSelected],
                    o = [L.icon]
                  switch (t) {
                    case k.a.Remove:
                      return v.a.createElement(E.a, { style: [L.dismissIcon, e && r] })
                    case k.a.Expand:
                      return v.a.createElement(x.a, { style: e ? r : o })
                    case k.a.Active:
                      return v.a.createElement(O.a, { style: r })
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
                    ? v.a.createElement(C.a, { style: [L.avatarContainer, n ? L.avatarCompact : L.avatar] }, t)
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      h()(A, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
      var L = S.a.create(function (e) {
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
      t.a = A
    },
    fRsM: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        o = n.n(r),
        a = n('VrFO'),
        c = n.n(a),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        y = (n('1t7P'), n('jQ/y'), n('ho0z'), n('7xRU'), n('ERkP')),
        b = n.n(y),
        I = n('LWCC'),
        w = n('3XMw'),
        g = n.n(w),
        k = n('EHV7'),
        S = n('YICZ'),
        C = n('3IPs'),
        E = n('X04g'),
        x = n('MWbm'),
        O = n('Irs7'),
        _ = n('hxu0'),
        A = n('htQn'),
        L = n('t62R'),
        P = n('j7Bv'),
        D = n('rHpw'),
        R = n('v6aA'),
        j = g.a.a2a3824a,
        H = 0,
        F = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, r) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e, r)),
              v()(u()(a), '_topicLink', {
                pathname: '/i/topics/'.concat(a.props.topic.id),
                state: {
                  referringScribeNamespace: o()(
                    o()({}, a.props.analytics.contextualScribeNamespace),
                    {},
                    { action: 'click' },
                  ),
                },
              }),
              v()(u()(a), '_handleOnClick', function () {
                var e = a.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  r = e.topic,
                  o = r.description,
                  c = r.id,
                  i = r.name
                t &&
                  n &&
                  n(E.a.ItemType.TOPIC) &&
                  t({ topic: { id: c, name: i, description: o || '', type: C.a.Topic } }),
                  a._handleScribe('click')
              }),
              (a._topicDomId = 'topic'.concat(H)),
              (a._nameDomId = 'topic-name'.concat(H)),
              (a._descriptionDomId = 'topic-description'.concat(H)),
              (a._followButtonDomId = 'topic-follow-button'.concat(H)),
              (a._notInterestedButtonDomId = 'topic-not-interested-button'.concat(H)),
              (H += 1),
              a
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
                    r = e.nameWeight,
                    o = e.notInterestedOnClick,
                    a = e.topic,
                    c = a.description,
                    i = a.name,
                    s = this.context.loggedInUserId
                  return b.a.createElement(
                    A.a,
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
                      style: [T.root, T.flexStart],
                      withDarkerInteractiveBackground: n,
                    },
                    b.a.createElement(
                      x.a,
                      { style: T.topic },
                      b.a.createElement(x.a, { accessibilityLabel: j, nativeID: this._topicDomId }),
                      this._renderIcon(),
                      b.a.createElement(
                        x.a,
                        { style: T.text },
                        b.a.createElement(
                          L.b,
                          { nativeID: this._nameDomId, weight: r, withInteractiveStyling: !!this._topicLink },
                          i,
                        ),
                        c
                          ? b.a.createElement(
                              L.b,
                              { color: 'gray700', nativeID: this._descriptionDomId, numberOfLines: 2 },
                              c,
                            )
                          : null,
                      ),
                    ),
                    b.a.createElement(
                      x.a,
                      { style: T.buttons },
                      b.a.createElement(I.a, { educateOnFollow: t, nativeID: this._followButtonDomId, topic: a }),
                      s && o
                        ? b.a.createElement(S.a, {
                            nativeID: this._notInterestedButtonDomId,
                            onPress: o,
                            style: T.marginLeft,
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
                    ? b.a.createElement(P.a, { Icon: k.a, size: 'large', style: T.icon })
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
      v()(F, 'contextType', R.a), v()(F, 'defaultProps', { nameWeight: 'bold', withIcon: !0 })
      var T = D.a.create(function (e) {
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
      t.a = Object(_.a)(Object(O.a)(F))
    },
    gwY8: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var r = n('ERkP'),
        o = n.n(r).a.createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
    wtjx: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return h
      }),
        n.d(t, 'f', function () {
          return m
        }),
        n.d(t, 'e', function () {
          return v
        }),
        n.d(t, 'd', function () {
          return w
        }),
        n.d(t, 'b', function () {
          return k
        }),
        n.d(t, 'a', function () {
          return C
        }),
        n.d(t, 'c', function () {
          return E
        })
      var r = n('KEM+'),
        o = n.n(r),
        a = n('yiKp'),
        c = n.n(a),
        i = (n('7x/C'), n('JtPf'), n('LW0h'), n('Ee2X'), n('Ssj5')),
        s = n('RqPI'),
        l = 'recentSearches',
        u = 'rweb.recentSearches',
        d = function (e) {
          return function (t, n, r) {
            return r.userPersistence.set(u, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        p = function (e, t) {
          var n = []
          if (e && e.user) {
            var r = e.user
            n = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== r.id)
            })
          } else if (e && e.topic) {
            var o = e.topic
            n = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== o.id)
            })
          } else if (e && e.event) {
            var a = e.event
            n = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== a.id)
            })
          } else if (e && e.keyword) {
            var c = e.keyword
            n = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== c.query) || e.user || e.topic || e.event
            })
          }
          return n
        },
        f = { fetched: !1, recentSearches: [] }
      var h = function (e) {
          return e.recentSearches.recentSearches
        },
        m = function (e) {
          return h(e)[0] || null
        },
        v = function (e) {
          return e.recentSearches.fetched
        },
        y = 'rweb/recentSearches/INIT_FROM_CACHE',
        b = function (e) {
          return { type: y, payload: e }
        },
        I = 'rweb/recentSearches/REMOVE_QUERY',
        w = function (e) {
          return function (t, n, r) {
            r.userPersistence
            t({ payload: e, type: I })
            var o = n().recentSearches
            return Object(s.n)(n()) ? t(d(o.recentSearches)) : Promise.resolve()
          }
        },
        g = 'rweb/recentSearches/CLEAR_ALL',
        k = function () {
          return function (e, t, n) {
            n.userPersistence
            e({ type: g })
            var r = t().recentSearches
            return Object(s.n)(t()) ? e(d(r.recentSearches)) : Promise.resolve()
          }
        },
        S = 'rweb/recentSearches/ADD_QUERY',
        C = function (e) {
          return function (t, n, r) {
            r.userPersistence
            t({ payload: e, type: S })
            var o = n().recentSearches
            return Object(s.n)(n()) ? t(d(o.recentSearches)) : Promise.resolve()
          }
        },
        E = function () {
          return function (e, t, n) {
            n.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var r = n.userPersistence,
                    o = t()
                  return Object(s.n)(o)
                    ? r
                        .get(u)
                        .then(function (t) {
                          e(b(t))
                        })
                        .catch(function () {
                          e(b())
                        })
                    : (e(b()), Promise.resolve())
                })
          }
        }
      i.a.register(
        o()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case S:
              var n = t.payload,
                r = n ? p(n, e.recentSearches) : []
              return r.length > 49 && r.splice(49, 1), n && r.unshift(n), c()(c()({}, e), {}, { recentSearches: r })
            case I:
              var o = t.payload,
                a = o ? p(o, e.recentSearches) : []
              return c()(c()({}, e), {}, { recentSearches: a })
            case g:
              return { fetched: !0, recentSearches: [] }
            case y:
              return c()(c()(c()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
    zWr2: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('ezF+'),
        o = n('VPAj'),
        a = n('E3Hq'),
        c = (n('ho0z'), n('ERkP')),
        i = n.n(c),
        s = n('Zejx'),
        l = n('rxPX'),
        u = function (e, t) {
          return s.a.select(e, t.entry.content.topicId)
        },
        d = Object(l.a)().propsFromState(function () {
          return { topic: u }
        }),
        p = n('ddV6'),
        f = n.n(p),
        h = n('v6aA'),
        m = n('0KEI'),
        v = Object(l.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)('TOPIC_PILL_CONTEXT'),
              follow: s.a.follow,
              unfollow: s.a.unfollow,
            }
          })
          .withAnalytics(),
        y = n('3XMw'),
        b = n.n(y),
        I = n('Tp1h'),
        w = n('Jkc4'),
        g = n('gwY8'),
        k = n('MWbm'),
        S = n('UnyZ'),
        C = n('aV/s'),
        E = n('rHpw'),
        x = b.a.ge8f3043,
        O = b.a.aa576cbf,
        _ = b.a.i77347d0,
        A = b.a.e839db39,
        L = function (e) {
          var t = i.a.useContext(h.a).loggedInUserId,
            n = e.analytics,
            r = e.createLocalApiErrorHandler,
            o = e.follow,
            a = e.notInterestedOnClick,
            c = e.topic,
            s = e.unfollow,
            l = e.withActionIcon,
            u = c.following,
            d = c.id,
            p = c.name,
            m = c.not_interested,
            v = i.a.useRef(!1),
            y = i.a.useState(0),
            b = f()(y, 2),
            E = b[0],
            L = b[1],
            D = i.a.useCallback(
              function (e) {
                if (0 === E) {
                  var t = e.nativeEvent.layout.width
                  L(t)
                }
              },
              [E],
            ),
            R = function (e) {
              if (!m && l) return u ? S.a.Active : S.a.Expand
            },
            j = function (e, t, n) {
              return e(u ? F(n) : H(t))
            },
            H = function (e) {
              return function (t) {
                o(d)
                  .catch(r())
                  .then(e && e(d)),
                  n.scribeAction('follow')
              }
            },
            F = function (e) {
              return function (t) {
                s(d)
                  .catch(r())
                  .then(e && e(d)),
                  n.scribeAction('unfollow')
              }
            },
            T = function (e, n, r) {
              if (t && a)
                return {
                  mode: S.a.Remove,
                  onSecondaryClick: a,
                  accessibilityLabel: _({ topicName: p }),
                  hoverLabel: A,
                  disabled: u || m,
                }
            }
          return i.a.createElement(w.a, { customText: p, displayMode: I.a.topic }, function (e) {
            return i.a.createElement(g.a.Consumer, null, function (t) {
              var n = t.onFollow,
                r = t.onInitialize,
                o = t.onUnfollow
              return (
                r && !v.current && (r(d, u), (v.current = !0)),
                i.a.createElement(
                  k.a,
                  { onLayout: D, style: [P.root, { minWidth: E }] },
                  i.a.createElement(C.a, {
                    accessibilityLabel: u ? O({ topicName: p }) : x({ topicName: p }),
                    disabled: m,
                    key: d,
                    mode: R(),
                    onClick: j(e, n, o),
                    secondaryAction: T(),
                    selected: u,
                    style: P.pill,
                    text: p,
                  }),
                )
              )
            })
          })
        }
      L.defaultProps = { withActionIcon: !0 }
      var P = E.a.create(function (e) {
          return {
            root: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space4 },
            pill: { textOverflow: 'ellipsis' },
            roundIcon: { borderRadius: e.borderRadii.infinite, height: '100%', width: '100%' },
          }
        }),
        D = v(L),
        R = n('Irs7'),
        j = n('lnL+'),
        H = n('XcJG'),
        F = function (e) {
          var t = Object(R.b)(),
            n = e.entry.content,
            r = e.feedbackItems,
            o = e.topic,
            c = n.topicDisplayType,
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
          var u = Object(a.a)({ feedbackItems: r, topic: o, topicItemContent: n }),
            d = s !== H.b.Pivot && c !== H.a.PillWithoutActionIcon
          return s === H.b.Pivot
            ? i.a.createElement(
                k.a,
                { style: T.root },
                i.a.createElement(j.a, { link: '/i/topics/'.concat(o.id), onClick: l, text: o.name }),
              )
            : i.a.createElement(D, { notInterestedOnClick: u, topic: o, withActionIcon: d })
        },
        T = E.a.create(function (e) {
          return { root: { margin: e.spaces.space4 } }
        }),
        B = d(i.a.memo(F))
      t.default = function (e) {
        var t = e.shouldDisplayBorder,
          n = void 0 !== t && t
        return r
          .b({
            component: B,
            isFocusable: Object(o.a)(!0),
            getScribeDataItem: a.b,
            shouldDisplayBorder: Object(o.a)(n),
          })
          .getHandler()
      }
    },
  },
])
//# sourceMappingURL=WIPED
