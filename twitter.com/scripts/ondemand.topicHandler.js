;(window.webpackJsonp = window.webpackJsonp || []).push([
  [358],
  {
    E3Hq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return o
        })
      var r = n('Rp9C'),
        a = n('XcJG'),
        c = function (e) {
          var t = e.feedbackItems,
            n = e.topic,
            r = e.topicItemContent.topicFunctionalityType === a.b.Recommendation,
            c = 1 === (null == t ? void 0 : t.length) ? t[0].onClick : void 0
          return !(null != n && n.not_interested) && !(null != n && n.following) && r ? c : void 0
        },
        o = function (e) {
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
      var r = n('ezF+'),
        a = n('VPAj'),
        c = n('E3Hq'),
        o = n('ERkP'),
        i = n.n(o),
        s = n('wtjx'),
        l = n('Zejx'),
        u = n('rxPX'),
        d = function (e, t) {
          return l.a.select(e, t.entry.content.topicId)
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { topic: d }
          })
          .propsFromActions(function () {
            return { saveAsRecentSearch: s.a }
          }),
        f = n('fRsM'),
        m = n('XcJG'),
        h = n('Irs7'),
        v = function (e) {
          var t = Object(h.b)(),
            n = e.entry.content,
            r = e.feedbackItems,
            a = e.saveAsRecentSearch,
            o = e.shouldStoreTypeaheadItem,
            s = e.topic
          if (
            (i.a.useEffect(function () {
              s && t.scribeAction('impression')
            }, []),
            !s)
          )
            return null
          var l = Object(c.a)({ feedbackItems: r, topic: s, topicItemContent: n }),
            u = n.topicDisplayType === m.a.Basic
          return i.a.createElement(f.a, {
            notInterestedOnClick: l,
            saveAsRecentSearch: a,
            shouldStoreTypeaheadItem: o,
            topic: s,
            withIcon: u,
          })
        },
        b = p(i.a.memo(v))
      t.default = function (e) {
        return r
          .b({
            component: b,
            isFocusable: Object(a.a)(!0),
            getScribeDataItem: c.b,
            shouldDisplayBorder: Object(a.a)(!1),
          })
          .getHandler(function () {
            return e
          })
      }
    },
    'aV/s': function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        c = n('Y9Ll'),
        o = n.n(c),
        i = n('1Pcy'),
        s = n.n(i),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        h = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        v = n.n(h),
        b = n('t62R'),
        y = n('3XMw'),
        I = n.n(y),
        w = n('I4+6'),
        g = n('cm6r'),
        k = n('UnyZ'),
        S = n('rHpw'),
        E = n('MWbm'),
        C = n('hOZg'),
        x = n('iY63'),
        O = n('IMYl'),
        _ = { active: I.a.e557ad8d, expand: I.a.e3a58c27, remove: I.a.h517e8d8 },
        A = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
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
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.avatar,
                    r = e.compact,
                    a = e.disabled,
                    c = e.link,
                    o = e.mode,
                    i = e.onClick,
                    s = e.secondaryAction,
                    l = e.selected,
                    u = e.style,
                    d = e.text,
                    p = this._renderIcon(!0, o),
                    f = s && this._renderIcon(!1, s.mode),
                    m = [L.root, r && L.compact, a && L.disabled, l && L.selected, u],
                    h = [L.content, p && L.withIcon, n && ((r && L.withAvatarImageCompact) || L.withAvatarImage)],
                    y = w.a.generate({
                      backgroundColor: l ? S.a.theme.colors.primary : 'transparent',
                      color: l ? S.a.theme.colors.white : S.a.theme.colors.primary,
                    })
                  return v.a.createElement(
                    E.a,
                    { style: m },
                    v.a.createElement(
                      g.a,
                      {
                        accessibilityLabel: t || (o ? _[o] : ''),
                        disabled: a,
                        interactiveStyles: y,
                        link: c,
                        onPress: i,
                        style: h,
                      },
                      this._renderAvatar(),
                      v.a.createElement(
                        b.b,
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
                            disabled: a || s.disabled,
                            hoverLabel: { label: s.hoverLabel || (s.mode ? _[s.mode] : '') },
                            interactiveStyles: y,
                            onPress: this._handleSecondaryClick,
                            style: L.secondaryControl,
                          },
                          v.a.createElement(E.a, { style: L.secondaryBorder }, f),
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
                    a = [L.icon]
                  switch (t) {
                    case k.a.Remove:
                      return v.a.createElement(C.a, { style: [L.dismissIcon, e && r] })
                    case k.a.Expand:
                      return v.a.createElement(x.a, { style: e ? r : a })
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
                    ? v.a.createElement(E.a, { style: [L.avatarContainer, n ? L.avatarCompact : L.avatar] }, t)
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      m()(A, 'defaultProps', { compact: !1, disabled: !1, selected: !1 })
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
        a = n.n(r),
        c = n('VrFO'),
        o = n.n(c),
        i = n('Y9Ll'),
        s = n.n(i),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        m = n.n(f),
        h = n('KEM+'),
        v = n.n(h),
        b = (n('1t7P'), n('jQ/y'), n('ho0z'), n('7xRU'), n('ERkP')),
        y = n.n(b),
        I = n('LWCC'),
        w = n('3XMw'),
        g = n.n(w),
        k = n('EHV7'),
        S = n('YICZ'),
        E = n('3IPs'),
        C = n('X04g'),
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
          var t = m()(n)
          function n(e, r) {
            var c
            return (
              o()(this, n),
              (c = t.call(this, e, r)),
              v()(u()(c), '_topicLink', {
                pathname: '/i/topics/'.concat(c.props.topic.id),
                state: {
                  referringScribeNamespace: a()(
                    a()({}, c.props.analytics.contextualScribeNamespace),
                    {},
                    { action: 'click' },
                  ),
                },
              }),
              v()(u()(c), '_handleOnClick', function () {
                var e = c.props,
                  t = e.saveAsRecentSearch,
                  n = e.shouldStoreTypeaheadItem,
                  r = e.topic,
                  a = r.description,
                  o = r.id,
                  i = r.name
                t &&
                  n &&
                  n(C.a.ItemType.TOPIC) &&
                  t({ topic: { id: o, name: i, description: a || '', type: E.a.Topic } }),
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
                    r = e.nameWeight,
                    a = e.notInterestedOnClick,
                    c = e.topic,
                    o = c.description,
                    i = c.name,
                    s = this.context.loggedInUserId
                  return y.a.createElement(
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
                    y.a.createElement(
                      x.a,
                      { style: T.topic },
                      y.a.createElement(x.a, { accessibilityLabel: j, nativeID: this._topicDomId }),
                      this._renderIcon(),
                      y.a.createElement(
                        x.a,
                        { style: T.text },
                        y.a.createElement(
                          L.b,
                          { nativeID: this._nameDomId, weight: r, withInteractiveStyling: !!this._topicLink },
                          i,
                        ),
                        o
                          ? y.a.createElement(
                              L.b,
                              { color: 'gray700', nativeID: this._descriptionDomId, numberOfLines: 2 },
                              o,
                            )
                          : null,
                      ),
                    ),
                    y.a.createElement(
                      x.a,
                      { style: T.buttons },
                      y.a.createElement(I.a, { educateOnFollow: t, nativeID: this._followButtonDomId, topic: c }),
                      s && a
                        ? y.a.createElement(S.a, {
                            nativeID: this._notInterestedButtonDomId,
                            onPress: a,
                            style: T.marginLeft,
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
                    ? y.a.createElement(P.a, { Icon: k.a, size: 'large', style: T.icon })
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
        })(y.a.Component)
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
        return a
      })
      var r = n('ERkP'),
        a = n.n(r).a.createContext({ onFollow: void 0, onInitialize: void 0, onUnfollow: void 0 })
    },
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        c = n('ERkP'),
        o = n.n(c),
        i = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(i.a.Consumer, null, function (n) {
            return o.a.createElement(e, a()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    wtjx: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return m
      }),
        n.d(t, 'f', function () {
          return h
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
          return E
        }),
        n.d(t, 'c', function () {
          return C
        })
      var r = n('KEM+'),
        a = n.n(r),
        c = n('yiKp'),
        o = n.n(c),
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
            var a = e.topic
            n = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== a.id)
            })
          } else if (e && e.event) {
            var c = e.event
            n = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== c.id)
            })
          } else if (e && e.keyword) {
            var o = e.keyword
            n = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== o.query) || e.user || e.topic || e.event
            })
          }
          return n
        },
        f = { fetched: !1, recentSearches: [] }
      var m = function (e) {
          return e.recentSearches.recentSearches
        },
        h = function (e) {
          return m(e)[0] || null
        },
        v = function (e) {
          return e.recentSearches.fetched
        },
        b = 'rweb/recentSearches/INIT_FROM_CACHE',
        y = function (e) {
          return { type: b, payload: e }
        },
        I = 'rweb/recentSearches/REMOVE_QUERY',
        w = function (e) {
          return function (t, n, r) {
            r.userPersistence
            t({ payload: e, type: I })
            var a = n().recentSearches
            return Object(s.m)(n()) ? t(d(a.recentSearches)) : Promise.resolve()
          }
        },
        g = 'rweb/recentSearches/CLEAR_ALL',
        k = function () {
          return function (e, t, n) {
            n.userPersistence
            e({ type: g })
            var r = t().recentSearches
            return Object(s.m)(t()) ? e(d(r.recentSearches)) : Promise.resolve()
          }
        },
        S = 'rweb/recentSearches/ADD_QUERY',
        E = function (e) {
          return function (t, n, r) {
            r.userPersistence
            t({ payload: e, type: S })
            var a = n().recentSearches
            return Object(s.m)(n()) ? t(d(a.recentSearches)) : Promise.resolve()
          }
        },
        C = function () {
          return function (e, t, n) {
            n.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var r = n.userPersistence,
                    a = t()
                  return Object(s.m)(a)
                    ? r
                        .get(u)
                        .then(function (t) {
                          e(y(t))
                        })
                        .catch(function () {
                          e(y())
                        })
                    : (e(y()), Promise.resolve())
                })
          }
        }
      i.a.register(
        a()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case S:
              var n = t.payload,
                r = n ? p(n, e.recentSearches) : []
              return r.length > 49 && r.splice(49, 1), n && r.unshift(n), o()(o()({}, e), {}, { recentSearches: r })
            case I:
              var a = t.payload,
                c = a ? p(a, e.recentSearches) : []
              return o()(o()({}, e), {}, { recentSearches: c })
            case g:
              return { fetched: !0, recentSearches: [] }
            case b:
              return o()(o()(o()({}, e), t.payload), {}, { fetched: !0 })
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
        a = n('VPAj'),
        c = n('E3Hq'),
        o = (n('ho0z'), n('ERkP')),
        i = n.n(o),
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
        m = n('v6aA'),
        h = n('0KEI'),
        v = Object(l.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)('TOPIC_PILL_CONTEXT'),
              follow: s.a.follow,
              unfollow: s.a.unfollow,
            }
          })
          .withAnalytics(),
        b = n('3XMw'),
        y = n.n(b),
        I = n('Tp1h'),
        w = n('Jkc4'),
        g = n('gwY8'),
        k = n('MWbm'),
        S = n('UnyZ'),
        E = n('aV/s'),
        C = n('rHpw'),
        x = y.a.ge8f3043,
        O = y.a.aa576cbf,
        _ = y.a.i77347d0,
        A = y.a.e839db39,
        L = function (e) {
          var t = i.a.useContext(m.a).loggedInUserId,
            n = e.analytics,
            r = e.createLocalApiErrorHandler,
            a = e.follow,
            c = e.notInterestedOnClick,
            o = e.topic,
            s = e.unfollow,
            l = e.withActionIcon,
            u = o.following,
            d = o.id,
            p = o.name,
            h = o.not_interested,
            v = i.a.useRef(!1),
            b = i.a.useState(0),
            y = f()(b, 2),
            C = y[0],
            L = y[1],
            D = i.a.useCallback(
              function (e) {
                if (0 === C) {
                  var t = e.nativeEvent.layout.width
                  L(t)
                }
              },
              [C],
            ),
            R = function (e) {
              if (!h && l) return u ? S.a.Active : S.a.Expand
            },
            j = function (e, t, n) {
              return e(u ? F(n) : H(t))
            },
            H = function (e) {
              return function (t) {
                a(d)
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
              if (t && c)
                return {
                  mode: S.a.Remove,
                  onSecondaryClick: c,
                  accessibilityLabel: _({ topicName: p }),
                  hoverLabel: A,
                  disabled: u || h,
                }
            }
          return i.a.createElement(w.a, { customText: p, displayMode: I.a.topic }, function (e) {
            return i.a.createElement(g.a.Consumer, null, function (t) {
              var n = t.onFollow,
                r = t.onInitialize,
                a = t.onUnfollow
              return (
                r && !v.current && (r(d, u), (v.current = !0)),
                i.a.createElement(
                  k.a,
                  { onLayout: D, style: [P.root, { minWidth: C }] },
                  i.a.createElement(E.a, {
                    accessibilityLabel: u ? O({ topicName: p }) : x({ topicName: p }),
                    disabled: h,
                    key: d,
                    mode: R(),
                    onClick: j(e, n, a),
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
      var P = C.a.create(function (e) {
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
            a = e.topic,
            o = n.topicDisplayType,
            s = n.topicFunctionalityType
          i.a.useEffect(function () {
            a && t.scribeAction('impression')
          }, [])
          var l = i.a.useCallback(
            function () {
              t.scribeAction('click')
            },
            [t],
          )
          if (!a) return null
          var u = Object(c.a)({ feedbackItems: r, topic: a, topicItemContent: n }),
            d = s !== H.b.Pivot && o !== H.a.PillWithoutActionIcon
          return s === H.b.Pivot
            ? i.a.createElement(
                k.a,
                { style: T.root },
                i.a.createElement(j.a, { link: '/i/topics/'.concat(a.id), onClick: l, text: a.name }),
              )
            : i.a.createElement(D, { notInterestedOnClick: u, topic: a, withActionIcon: d })
        },
        T = C.a.create(function (e) {
          return { root: { margin: e.spaces.space4 } }
        }),
        B = d(i.a.memo(F))
      t.default = function (e) {
        var t = e.shouldDisplayBorder,
          n = void 0 !== t && t
        return r
          .b({
            component: B,
            isFocusable: Object(a.a)(!0),
            getScribeDataItem: c.b,
            shouldDisplayBorder: Object(a.a)(n),
          })
          .getHandler()
      }
    },
  },
])
//# sourceMappingURL=WIPED
