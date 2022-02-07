;(window.webpackJsonp = window.webpackJsonp || []).push([
  [42],
  {
    '0ULw': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    '1tGk': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'screen_EditMembershipType_community',
          selections: [
            { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: 'LinkedField',
              name: 'membership_settings',
              plural: !1,
              selections: [
                {
                  kind: 'InlineDataFragmentSpread',
                  name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
                  selections: [
                    {
                      kind: 'InlineFragment',
                      selections: [
                        (a = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      ],
                      type: 'CommunityOpenMembershipSettings',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        a,
                        { alias: null, args: null, kind: 'ScalarField', name: 'invites_policy', storageKey: null },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'join_approval_policy',
                          storageKey: null,
                        },
                      ],
                      type: 'CommunityRestrictedMembershipSettings',
                      abstractKey: null,
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = 'f262a0b856bd8c72e36d85f867484e9b'), (t.default = r)
    },
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
        i = n('yLYC'),
        o = n('Ud88'),
        c = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        l = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        s = l.fetchQueryDeduped,
        u = l.fetchQuery
      e.exports = function (e, t, n) {
        c()
        var l,
          m = o(),
          d = t.fetchKey,
          p = t.fetchPolicy,
          y = t.source,
          f = t.variables,
          h = t.networkCacheConfig,
          b = i(e, f, h)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && a(!1),
            (l = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: d,
              fetchObservable: s(m, b.request.identifier, function () {
                return m === t.environment && null != y
                  ? m.executeWithSource({ operation: b, source: y })
                  : m.execute({ operation: b })
              }),
              fetchPolicy: p,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var g = u(m, b)
          l = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != y && m === t.environment ? y.ifEmpty(g) : (t.environment, g),
            fetchKey: d,
            fetchPolicy: p,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(l)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = a.useEffect,
        i = a.useRef
      e.exports = function () {
        var e = i(!0)
        return (
          r(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    '3GUV': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('2VqO'),
        u = n.n(s),
        m = n('ERkP'),
        d = n.n(m),
        p = n('rHpw'),
        y = n('MWbm'),
        f = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return d.a.createElement(y.a, { style: h.root })
                },
              },
            ]),
            n
          )
        })(d.a.Component),
        h = p.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = f
    },
    '3JAx': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('fyvP'),
        o = n('rHpw'),
        c = n('MWbm')
      t.a = function (e) {
        return r.a.createElement(c.a, { style: l.root }, r.a.createElement(i.a, e))
      }
      var l = o.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    '5UID': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('2VqO'),
        u = n.n(s),
        m = n('ERkP'),
        d = n.n(m),
        p = n('3XMw'),
        y = n.n(p),
        f = n('rHpw'),
        h = n('+/1j'),
        b = n('MWbm'),
        g = y.a.e5b0063d,
        v = 0,
        E = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(v)), (v += 1), e
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = g({ title: n })
                  return d.a.createElement(
                    b.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    d.a.createElement(
                      h.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: f.a.visuallyHidden,
                      },
                      n,
                    ),
                    d.a.createElement(b.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(d.a.Component)
      t.a = E
    },
    '8sFp': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return d
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        c = n('mw9i'),
        l = n('FIs5'),
        s = n('rHpw'),
        u = o.a.c2117be6,
        m = o.a.c2c4dad3
      function d() {
        return r.a.createElement(c.a, { style: p.root }, r.a.createElement(l.a, { header: u, message: m }))
      }
      var p = s.a.create(function (e) {
        return {
          root: { alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: e.colors.cellBackground },
        }
      })
    },
    '9SqB': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('yiKp')),
        r = n('ERkP'),
        i = n('Ud88'),
        o = n('K1lQ').commitMutation,
        c = r.useState,
        l = r.useEffect,
        s = r.useRef,
        u = r.useCallback,
        m = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          n = i(),
          r = m(),
          d = s(n),
          p = s(e),
          y = s(new Set()),
          f = c(!1),
          h = f[0],
          b = f[1],
          g = u(
            function (t) {
              d.current === n && p.current === e && (y.current.delete(t), r.current && b(y.current.size > 0))
            },
            [n, r, e],
          )
        l(
          function () {
            ;(d.current === n && p.current === e) ||
              ((y.current = new Set()), r.current && b(!1), (d.current = n), (p.current = e))
          },
          [n, r, e],
        )
        var v = u(
          function (i) {
            var o = t(
              n,
              (0, a.default)(
                (0, a.default)({}, i),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    g(o), i.onCompleted && i.onCompleted(e, t)
                  },
                  onError: function (e) {
                    g(o), i.onError && i.onError(e)
                  },
                  onUnsubscribe: function () {
                    g(o), i.onUnsubscribe && i.onUnsubscribe()
                  },
                },
              ),
            )
            return y.current.add(o), r.current && b(!0), o
          },
          [g, t, n, r, e],
        )
        return [v, h]
      }
    },
    AfjF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('eb3s'),
        o = n('3XMw'),
        c = n.n(o),
        l = c.a.d45ae5e0,
        s = c.a.c1631260,
        u = c.a.d3190bdd,
        m = c.a.ifd6e91b,
        d = function (e) {
          var t = e.onCancel,
            n = e.onConfirm
          return r.a.createElement(i.a, {
            cancelButtonLabel: m,
            confirmButtonLabel: u,
            headline: l,
            onCancel: t,
            onConfirm: n,
            text: s,
          })
        }
    },
    BUB3: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        l = n.n(c),
        s = n('sNn6'),
        u = n('rHpw'),
        m = n('MWbm'),
        d = ['children'],
        p = u.a.create(function (e) {
          return {
            activeRoot: { backgroundColor: e.colors.gray0 },
            overlay: r()(
              r()({}, u.a.absoluteFillObject),
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
          n = o()(e, d)
        return l.a.createElement(s.a, n, function (e) {
          return l.a.createElement(
            m.a,
            { style: e && p.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? l.a.createElement(m.a, { pointerEvents: 'none', style: p.overlay }) : null,
          )
        })
      }
    },
    'DV/y': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityInviteScreen', function () {
          return ne
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        c = n('ddV6'),
        l = n.n(c),
        s = (n('KqXw'), n('WNMA'), n('LW0h'), n('7x/C'), n('z84I'), n('1Iuc'), n('ERkP')),
        u = n.n(s),
        m = n('+Kfv'),
        d = n('eSoz'),
        p = n('rxPX'),
        y = n('0KEI'),
        f = function (e, t) {
          var n = t.match.params.communityId
          return n ? d.c.select(e, n) : void 0
        },
        h = Object(p.a)()
          .propsFromState(function () {
            return { community: f }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_INVITE_SCREEN',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'invite' }),
        b = n('jHSc'),
        g = n('3XMw'),
        v = n.n(g),
        E = n('/yvb'),
        C = (n('2G9S'), n('KhuB')),
        _ = n('li/m'),
        k = function (e, t) {
          return t.communityId && t.userId ? C.b.select(e, ''.concat(t.communityId, '_').concat(t.userId)) : void 0
        },
        S = Object(p.a)()
          .propsFromState(function () {
            return { inviteActionResult: k }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'INVITE_TO_COMMUNITY_BUTTON',
              ),
              inviteToCommunity: _.a,
            }
          }),
        w = v.a.cd133485,
        I = v.a.hb1e378e,
        T = v.a.bcd6bb0d,
        M = 'primaryFilled',
        x = { viewType: 'invite' }
      var O = S(function (e) {
          var t = e.communityId,
            n = e.createLocalApiErrorHandler,
            a = e.inviteActionResult,
            r = e.inviteToCommunity,
            i = e.onInvite,
            o = e.onInviteActionResultChange,
            c = e.userId,
            l = e.viewerInvited,
            s = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return w
              switch (e.reason) {
                case 'UserIsMember':
                  return T
                case 'UserIsInvited':
                  return I
                default:
                  return w
              }
            })(a),
            m = (function (e) {
              if (!e || 'UserCommunityInviteAction' === e.__typename) return M
              switch (e.reason) {
                case 'UserIsMember':
                  return M
                default:
                  return 'primaryOutlined'
              }
            })(a)
          u.a.useEffect(
            function () {
              a && o(c, a)
            },
            [a, c, o],
          )
          var d = 'UserCommunityInviteAction' === (null == a ? void 0 : a.__typename)
          return !d && !l
            ? null
            : u.a.createElement(
                E.a,
                {
                  accessibilityLabel: s,
                  behavioralEventContext: x,
                  disabled: !d,
                  onPress: function () {
                    d &&
                      r(t, c)
                        .then(function () {
                          return i && i(c)
                        })
                        .catch(n())
                  },
                  size: 'small',
                  type: m,
                },
                s,
              )
        }),
        F = n('5FtR'),
        R = n('4e/K'),
        L = n('MWbm'),
        A = n('4zmP'),
        N = n('t62R'),
        K = n('FIs5'),
        H = n('rHpw'),
        j = n('GZwR'),
        P = v.a.b139b549,
        B = v.a.dfddd842,
        D = v.a.cf4898a0,
        z = v.a.a3b3939a,
        U = v.a.db4f0cc9,
        V = v.a.h252ede6,
        W = v.a.a5cd93f9,
        X = v.a.ba5a88e3,
        Q = v.a.i6568549,
        q = v.a.b772cd65,
        G = v.a.b4f16d00,
        Y = v.a.ja1387a7,
        J = v.a.b92a21d8,
        Z = v.a.ae85768c,
        $ = { viewType: 'done' },
        ee = [],
        te = [j.a.CommunityUsers]
      function ne(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          i = (t || {}).invites_result,
          c = e.match.params.communityId || '',
          s = u.a.useState(''),
          d = l()(s, 2),
          p = d[0],
          y = d[1],
          f = u.a.useState({}),
          h = l()(f, 2),
          g = h[0],
          v = h[1],
          C = u.a.useState({}),
          _ = l()(C, 2),
          k = _[0],
          S = _[1]
        u.a.useEffect(
          function () {
            c && a(c).catch(n())
          },
          [c, n, a],
        )
        var w,
          I,
          T = u.a.useMemo(
            function () {
              return p.length > 0 || !t
                ? ee
                : 'CommunityInvites' === i.__typename
                ? i.users_to_invite_slice.items.map(j.g).filter(Boolean)
                : ee
            },
            [t, i, p.length],
          ),
          M = u.a.useCallback(
            function (e, t) {
              v(function (n) {
                return o()(o()({}, n), {}, r()({}, e, t))
              })
            },
            [v],
          ),
          x = u.a.useCallback(
            function (e) {
              S(function (t) {
                return o()(o()({}, t), {}, r()({}, e, !0))
              })
            },
            [S],
          ),
          H = c
            ? u.a.createElement(F.a, { to: '/i/communities/'.concat(c, '/members') })
            : u.a.createElement(F.a, { to: '/' }),
          ne = u.a.createElement(
            E.a,
            {
              behavioralEventContext: $,
              onPress: function () {
                return e.history.goBack()
              },
              size: 'small',
              type: 'brandFilled',
            },
            q,
          )
        return 'CommunityInvitesUnavailable' === (null == i ? void 0 : i.__typename)
          ? H
          : u.a.createElement(
              m.a,
              { viewType: 'community' },
              u.a.createElement(
                b.b,
                { behavioralEventViewType: 'invite', history: e.history, rightControl: ne, subtitle: B, title: P },
                ((w = (null == i ? void 0 : i.remaining_invite_count) || 0),
                (I = w > 999),
                'CommunityInvites' === (null == i ? void 0 : i.__typename) &&
                  !I &&
                  u.a.createElement(
                    L.a,
                    { style: ae.callout },
                    u.a.createElement(A.a, { text: Q({ remaining_invite_count: w }) }),
                  )),
                u.a.createElement(R.default, {
                  alwaysOpen: !0,
                  communityId: e.match.params.communityId || void 0,
                  filter: te,
                  getItemDisabledMessage: function (e) {
                    var t
                    if ('user' === e.type) {
                      var n = e.data,
                        a = n.id_str,
                        r = n.screen_name,
                        i = g[a]
                      if ('UserCommunityInviteActionUnavailable' === (null == i ? void 0 : i.__typename))
                        switch (i.reason) {
                          case 'UserIsInvited':
                            return z({ screen_name: r })
                          case 'UserIsMember':
                            return U({ screen_name: r })
                          case 'ViewerOutOfInvites':
                            return V
                          default:
                            return null !== (t = i.message) && void 0 !== t ? t : W({ screen_name: r })
                        }
                    }
                  },
                  getItemIsDisabled: function (e) {
                    if ('user' === e.type) {
                      var t = e.data.id_str,
                        n = g[t]
                      return !k[t] && 'UserCommunityInviteAction' !== (null == n ? void 0 : n.__typename)
                    }
                    return !0
                  },
                  injectedItems: T,
                  inputStyle: ae.textInput,
                  isModal: !0,
                  onQueryChange: function (e) {
                    y(e)
                  },
                  placeholder: D,
                  renderEmptyState: function () {
                    return u.a.createElement(K.a, { header: G, message: Y })
                  },
                  renderHeader: function () {
                    return (
                      0 === p.length &&
                      u.a.createElement(
                        L.a,
                        { style: ae.input },
                        u.a.createElement(N.b, { size: 'headline2', weight: 'heavy' }, X),
                      )
                    )
                  },
                  renderNoResultsState: function () {
                    return u.a.createElement(K.a, { header: J({ query: p }), message: Z })
                  },
                  renderUserDecoration: function (e) {
                    var t = e.userId
                    return u.a.createElement(O, {
                      communityId: c,
                      onInvite: x,
                      onInviteActionResultChange: M,
                      userId: t,
                      viewerInvited: k[t],
                    })
                  },
                  rounded: !0,
                  shouldAutoFocus: !0,
                  shouldFocusOnClear: !0,
                  source: j.d.CommunityInvites,
                  style: ae.input,
                }),
              ),
            )
      }
      var ae = H.a.create(function (e) {
          return {
            callout: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space8, fontWeight: e.fontWeights.bold },
            input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 },
            textInput: { marginBottom: e.spaces.space8 },
            dropdownText: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space40 },
          }
        }),
        re = h(ne)
      t.default = re
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        p = n('KEM+'),
        y = n.n(p),
        f = n('ERkP'),
        h = n.n(f),
        b = n('jtO7'),
        g = n('eb3s'),
        v = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              y()(l()(a), '_handleClick', function (e) {
                a.setState({ showConfirmation: !0 })
              }),
              y()(l()(a), '_handleCancel', function () {
                a.setState({ showConfirmation: !1 })
              }),
              y()(l()(a), '_handleConfirm', function () {
                a.setState({ showConfirmation: !1 }), a.props.onConfirmationSheetConfirm()
              }),
              (a.state = { showConfirmation: !1 }),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    r = e.confirmationSheetConfirmButtonType,
                    i = e.confirmationSheetHeadline,
                    o = e.confirmationSheetText,
                    c = e.label
                  return h.a.createElement(
                    h.a.Fragment,
                    null,
                    h.a.createElement(b.a, { align: t, color: n, label: c, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? h.a.createElement(g.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: r,
                          headline: i,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: o,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      y()(v, 'defaultProps', { color: 'red500', align: 'center' })
    },
    FS1z: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        p = n('KEM+'),
        y = n.n(p),
        f = (n('2G9S'), n('ERkP')),
        h = n.n(f),
        b = n('rxPX'),
        g = n('0KEI'),
        v = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        E = function (e, t) {
          return t.module.selectItems(e)
        },
        C = Object(b.a)()
          .propsFromState(function (e) {
            return { fetchStatus: v, items: E }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        _ = n('v//M'),
        k = n('sIe2'),
        S = n('3XMw'),
        w = n.n(S),
        I = n('TEoO'),
        T = w.a.i9028824,
        M = 'sliceTimeline',
        x = function (e) {
          return e
        },
        O = { viewType: 'timeline' },
        F = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  a = t.items,
                  r = t.noItemsRenderer,
                  i = t.numColumns,
                  o = t.onScrollEnd,
                  c = t.renderer,
                  l = t.withoutHeadroom
                return !a || i < 1
                  ? null
                  : 1 === i
                  ? h.a.createElement(I.a, {
                      cacheKey: M,
                      footer: n,
                      identityFunction: x,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: o,
                      renderer: c,
                      withoutHeadroom: l,
                    })
                  : h.a.createElement(k.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: x,
                      numColumns: i,
                      renderItem: c,
                    })
              }),
              y()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              y()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetch,
                  i = t.fetchIfNeeded
                ;(n ? r : i)().catch(a())
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.module
                  e.module !== t && this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.module,
                    a = e.retryMessage
                  return n
                    ? h.a.createElement(_.a, {
                        accessibilityLabel: T,
                        behavioralEventContext: O,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: a,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      y()(F, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var R = C(F)
      t.a = R
    },
    FSMj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ToolsPeopleScreen', function () {
          return E
        })
      n('vrRf')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('XtoV'),
        o = n('rxPX'),
        c = Object(o.a)().withAnalytics({ page: 'communities', section: 'people' }),
        l = n('3XMw'),
        s = n.n(l),
        u = n('gDCe'),
        m = n('yoO3'),
        d = n('k/OQ'),
        p = n('mWs5'),
        y = n('MWbm'),
        f = n('krnS'),
        h = n('zCf4'),
        b = s.a.dc6ce7b4,
        g = s.a.f8321d82,
        v = s.a.ga2aa43c,
        E = function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.location,
            o = (null == a ? void 0 : a.pathname) && a.pathname.indexOf('members') > 0,
            c = o ? g : v,
            l = r.a.useMemo(
              function () {
                var e = n
                  ? [
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/members'), state: a.state },
                        label: g,
                        key: g,
                      },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/tools/moderators'), state: a.state },
                        label: v,
                        key: v,
                      },
                    ]
                  : []
                return r.a.createElement(d.a, { accessibilityLabel: c, links: e })
              },
              [n, c, a],
            )
          return r.a.createElement(
            m.a,
            null,
            r.a.createElement(
              p.a,
              { communityId: t.id_str, rightControl: o ? r.a.createElement(i.a, { community: t }) : void 0, title: b },
              r.a.createElement(
                y.a,
                null,
                l,
                r.a.createElement(
                  h.d,
                  null,
                  r.a.createElement(
                    h.b,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/members') },
                    r.a.createElement(f.b, {
                      communityId: t.id_str,
                      mode: f.a.Members,
                      userRole: null == t ? void 0 : t.role,
                    }),
                  ),
                  r.a.createElement(
                    h.b,
                    { exact: !0, path: '/i/communities/'.concat(t.id_str, '/tools/moderators') },
                    r.a.createElement(u.a, { community: t }),
                    r.a.createElement(f.b, {
                      communityId: t.id_str,
                      mode: f.a.Moderators,
                      userRole: null == t ? void 0 : t.role,
                    }),
                  ),
                ),
              ),
            ),
          )
        }
      t.default = c(E)
    },
    'Fq/Z': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'FeedbackType', function () {
          return Q
        }),
        n.d(t, 'CommunityFeedbackScreen', function () {
          return q
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('yH/f'), n('KqXw'), n('WNMA'), n('ERkP')),
        l = n.n(c),
        s = n('v6aA'),
        u = n('+Kfv'),
        m = n('es0u'),
        d = (n('ZVkB'), n('ulNE'), n('urw/'), n('jQ3i'), n('x4t0'), n('eSoz')),
        p = n('XOJV'),
        y = n('G6rE'),
        f = n('rxPX'),
        h = function (e, t) {
          var n = t.match.params.tweetId
          return n ? p.a.selectHydrated(e, n) : void 0
        },
        b = function (e, t) {
          var n = t.match.params
          return Object.entries(n).flat().includes('tweetId') ? Q.HiddenTweet : Q.RemovedMember
        },
        g = function (e, t) {
          if (b(0, t) === Q.HiddenTweet) {
            var n,
              a = t.match.params.tweetId,
              r = a ? p.a.selectHydrated(e, a) : void 0,
              i = null == r || null === (n = r.community_relationship) || void 0 === n ? void 0 : n.community
            return i ? d.c.select(e, i) : void 0
          }
          var o = t.match.params.communityId
          return o ? d.c.select(e, o) : void 0
        },
        v = function (e, t) {
          if (b(0, t) === Q.HiddenTweet) {
            var n = t.match.params.tweetId
            return n ? p.a.selectFetchStatus(e, n) : void 0
          }
          var a = t.match.params.communityId
          return a ? d.c.selectFetchStatus(e, a) : void 0
        },
        E = Object(f.a)()
          .propsFromState(function () {
            return { community: g, fetchStatus: v, loggedInUser: y.e.selectLoggedInUser, tweet: h, type: b }
          })
          .propsFromActions(function () {
            return { fetchCommunity: d.c.fetchOne, fetchTweet: p.a.fetchOne }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'feedback' }),
        C = (n('ho0z'), n('PKbs')),
        _ = n('egQk'),
        k = n('3XMw'),
        S = n.n(k),
        w = n('/de5'),
        I = n('b5s6'),
        T = n('MWbm'),
        M = n('X00g'),
        x = n('t62R'),
        O = n('4zmP'),
        F = n('0yYu'),
        R = n('6vad'),
        L = n('rHpw'),
        A = S.a.j643a234,
        N = S.a.c730a21c,
        K = S.a.a5baa7d1,
        H = S.a.icc32e3d,
        j = M.a.getCommunityTheme('Default'),
        P = L.a.create(function (e) {
          return {
            badges: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 },
            helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 },
            hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 },
            removedMemberReason: {
              backgroundColor: L.a.theme.colors.gray50,
              borderRadius: L.a.theme.spacesPx.space4,
              border: '1px solid gray',
              padding: L.a.theme.spacesPx.space16,
              marginBottom: L.a.theme.spaces.space24,
            },
            rulesTitle: { marginHorizontal: e.spacesPx.space16 },
            titleText: { marginTop: L.a.theme.spaces.space24, marginBottom: e.spacesPx.space24 },
            tweetContainer: { marginBottom: e.spacesPx.space12 },
            tweetInfo: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
            tweetInfoItems: { marginHorizontal: e.spacesPx.space16 },
            rules: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        B = function (e) {
          var t,
            n = e.community,
            a = e.history,
            r = e.location,
            i = e.match,
            o = e.tweet,
            c = e.type,
            s = { history: a, location: r, match: i },
            u = null == o ? void 0 : o.community_relationship,
            m = null == u ? void 0 : u.moderation_state,
            d =
              (null ===
                (t = (function (e) {
                  switch (e) {
                    case Q.HiddenTweet:
                      return null == m ? void 0 : m.rule
                    case Q.RemovedMember:
                      return null == n ? void 0 : n.viewerViolatedRule
                    default:
                      return
                  }
                })(c)) || void 0 === t
                ? void 0
                : t.name) || '',
            p = null == n ? void 0 : n.name,
            y = null == n ? void 0 : n.rules,
            f = (null == n ? void 0 : n.theme) || j,
            h = M.a.getCommunityUIColorName(f),
            b = Object(_.a)({ communityName: p })
          return f && null != y && y.length
            ? l.a.createElement(
                T.a,
                { style: P.tweetInfo },
                l.a.createElement(
                  T.a,
                  { style: P.tweetInfoItems },
                  (function (e) {
                    switch (e) {
                      case Q.HiddenTweet:
                        return l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            x.b,
                            { color: h, size: 'subtext1', style: P.communityTitle, weight: 'bold' },
                            p,
                          ),
                          l.a.createElement(
                            x.b,
                            { size: 'headline1', style: [P.titleText, P.hiddenTweetWarningText], weight: 'heavy' },
                            A,
                          ),
                          l.a.createElement(I.a, {
                            style: P.tweetContainer,
                            tweetId: null == o ? void 0 : o.id_str,
                            withMediaAsTextLinks: !1,
                          }),
                          l.a.createElement(O.a, { headline: N, text: d }),
                          l.a.createElement(x.b, { style: P.helpText }, K),
                        )
                      case Q.RemovedMember:
                        return l.a.createElement(
                          l.a.Fragment,
                          null,
                          l.a.createElement(
                            x.b,
                            { size: 'headline1', style: P.titleText, weight: 'heavy' },
                            H({ communityName: p }),
                          ),
                          l.a.createElement(
                            T.a,
                            { style: P.removedMemberReason },
                            l.a.createElement(x.b, { weight: 'bold' }, d),
                          ),
                        )
                    }
                  })(c),
                ),
                l.a.createElement(F.a, null),
                l.a.createElement(R.b, { text: b }),
                l.a.createElement(C.b, {
                  badgeStyle: P.badges,
                  ruleContainerStyle: P.rules,
                  rules: y,
                  theme: f,
                  withBottomMargin: !0,
                  withHeader: !1,
                }),
              )
            : l.a.createElement(w.b, s)
        },
        D = n('G1WX'),
        z = n('yoO3'),
        U = n('VS6U'),
        V = n('0KEI'),
        W = ['analytics', 'community', 'fetchCommunity', 'fetchStatus', 'fetchTweet', 'loggedInUser', 'tweet', 'type'],
        X = S.a.jf99d610,
        Q = Object.freeze({ HiddenTweet: 'hidden_tweet', RemovedMember: 'removed_member' })
      function q(e) {
        var t = l.a.useContext(s.a).featureSwitches.isTrue('c9s_enabled'),
          n = (e.analytics, e.community),
          a = e.fetchCommunity,
          i = e.fetchStatus,
          c = e.fetchTweet,
          d = e.loggedInUser,
          p = e.tweet,
          y = e.type,
          f = o()(e, W),
          h = function (e) {
            var t, a
            switch (e) {
              case Q.HiddenTweet:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'hidden_tweet_feedback',
                  isAuthorizedViewer: Boolean(d && d.id_str === (null == p ? void 0 : p.user.id_str)),
                  _handleRetry: _,
                  shouldRenderFeedback: Boolean(
                    null == p || null === (t = p.community_relationship) || void 0 === t
                      ? void 0
                      : t.moderation_state.rule,
                  ),
                }
              case Q.RemovedMember:
                return {
                  BEHAVIORAL_EVENT_VIEW_TYPE: 'removed_member_feedback',
                  isAuthorizedViewer: Boolean(d && (null == n ? void 0 : n.viewerViolatedRule)),
                  _handleRetry: k,
                  shouldRenderFeedback: Boolean(
                    'CommunityUserRemovedModerationState' ===
                      (null == n || null === (a = n.viewer_relationship) || void 0 === a
                        ? void 0
                        : a.moderation_state.__typename),
                  ),
                }
              default:
                return {}
            }
          },
          b = e.match.params,
          g = b.communityId,
          v = b.tweetId,
          E = Object(V.useCreateLocalApiErrorHandler)('HIDDEN_TWEET_FEEDBACK_SCREEN'),
          C = Object(V.useCreateLocalApiErrorHandler)('REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT'),
          _ = l.a.useEffect(
            function () {
              v && c(v).catch(E)
            },
            [E, c, v],
          ),
          k = l.a.useEffect(
            function () {
              g && a(g).catch(C)
            },
            [g, C, a],
          ),
          S = l.a.createElement(w.b, f)
        return l.a.createElement(D.a, {
          fetchStatus: i,
          onRequestRetry: h(y)._handleRetry,
          render: function () {
            var n = h(y),
              a = n.BEHAVIORAL_EVENT_VIEW_TYPE,
              i = n.isAuthorizedViewer,
              o = n.shouldRenderFeedback
            return i && t
              ? l.a.createElement(
                  u.a,
                  { viewType: 'community' },
                  o
                    ? l.a.createElement(
                        z.a,
                        { behavioralEventViewType: a },
                        l.a.createElement(U.a, {
                          backLocation: '/notifications',
                          history: f.history,
                          primaryContent: l.a.createElement(B, r()({}, e, { type: y })),
                          sidebarContent: l.a.createElement(m.a, null),
                          title: X,
                        }),
                      )
                    : S,
                )
              : S
          },
        })
      }
      var G = E(q)
      t.default = G
    },
    GR8q: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        o,
        c = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'RulesQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'screenRules_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'RulesQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'CommunityRule',
                    kind: 'LinkedField',
                    name: 'rules',
                    plural: !0,
                    selections: [
                      i,
                      { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                    ],
                    storageKey: null,
                  },
                  o,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'EACaQ7O6I3NYJbrDRlU38w',
            metadata: {},
            name: 'RulesQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(c.hash = 'fb7e1508e8b30ad6d32d4a14bced22ba'), (t.default = c)
    },
    KK06: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'screenRules_community',
          selections: [
            (a = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
            {
              alias: null,
              args: null,
              concreteType: 'CommunityRule',
              kind: 'LinkedField',
              name: 'rules',
              plural: !0,
              selections: [
                a,
                { alias: null, args: null, kind: 'ScalarField', name: 'description', storageKey: null },
                { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              ],
              storageKey: null,
            },
          ],
          type: 'Community',
          abstractKey: null,
        }
      ;(r.hash = 'c0df28cb25c103d0a917071132ca7c84'), (t.default = r)
    },
    KQzH: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('hBvt'), n('ERkP')),
        o = n.n(i),
        c = n('BUB3'),
        l = n('shC7'),
        s = n('csss'),
        u = n('t62R')
      t.a = function (e) {
        return o.a.createElement(c.a, { exact: !0, path: e.link }, function (t) {
          var n = l.a.getConstants().isRTL ? 'rtl' : 'ltr'
          return o.a.createElement(s.a, r()({ isActive: t }, e, { label: o.a.createElement(u.b, { dir: n }, e.label) }))
        })
      }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('2VqO'),
        y = n.n(p),
        f = n('KEM+'),
        h = n.n(f),
        b = (n('2G9S'), n('i4UL'), n('+/5o')),
        g = n('ERkP'),
        v = n.n(g),
        E = n('HPNB'),
        C = n('VAZu'),
        _ = n('wiP2'),
        k = n('Es6L'),
        S = n('yiKp'),
        w = n.n(S),
        I = n('rHpw'),
        T = I.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: w()(w()({}, I.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        M = n('MWbm'),
        x = n('yw4N'),
        O = n('TnY3'),
        F = n('cHvH'),
        R = n('3xLC'),
        L = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        A = (function (e) {
          d()(n, e)
          var t = y()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? v.a.createElement(
                      M.a,
                      { style: T.fill },
                      v.a.createElement(
                        x.a,
                        { style: T.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return v.a.createElement(F.a, null, function (t) {
                    var n = t.windowWidth
                    return E.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, L))
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    Object(k.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : v.a.createElement(_.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var t = e.isTwoColumnLayout,
                    n = this.props,
                    a = n.SideNavButton,
                    r = n.TabBar,
                    i = n.TeamsSwitcher,
                    o = n.backLocation,
                    c = n.documentTitle,
                    l = n.headerless,
                    s = n.history,
                    u = n.leftControl,
                    m = n.middleControl,
                    d = n.onBackClick,
                    p = n.rightControl,
                    y = n.screenType,
                    f = n.searchBoxOptions,
                    h = n.secondaryBar,
                    g = n.showSubtitleOnRoot,
                    E = n.showSubtitleOnWideDetail,
                    k = n.subtitle,
                    S = n.title,
                    w = n.titleIconCell,
                    I = n.titleIconCellSize,
                    x = n.withDetailOpen,
                    O = n.withSearchBox,
                    F = n.withTweetButton,
                    R = 'root' === y,
                    L = 'secondaryRoot' === y,
                    A = 'primaryDetail' === y,
                    N = (A && E) || (R && g),
                    K = R || (A && t),
                    H = R ? b.c : A ? b.a : void 0,
                    j = v.a.createElement(
                      M.a,
                      { style: T.appBarContainer },
                      v.a.createElement(C.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: K,
                        history: s,
                        leftControl: u,
                        middleControl: m,
                        onBackClick: d,
                        rightControl: p,
                        secondaryBar: h,
                        subtitle: N ? k : void 0,
                        title: S,
                        titleDomId: H,
                        titleIconCell: w,
                        titleIconCellSize: I,
                      }),
                    ),
                    P =
                      R || (L && x)
                        ? null
                        : v.a.createElement(_.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: c,
                            headerless: l,
                            middleControl: m,
                            onBackClick: d,
                            rightControl: p,
                            searchBoxOptions: f,
                            subtitle: k,
                            title: S,
                            withSearchBox: O,
                            withTweetButton: F,
                          })
                  return v.a.createElement(v.a.Fragment, null, P, j)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(A, 'contextType', R.a),
        h()(A, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(O.a)(A)
    },
    MCGW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesScreen', function () {
          return k
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('97Jx'),
        o = n.n(i),
        c = (n('KqXw'), n('WNMA'), n('ho0z'), n('uFXj'), n('ERkP')),
        l = n.n(c),
        s = n('v6aA'),
        u = n('es0u'),
        m = n('PKbs'),
        d = n('egQk'),
        p = n('1Idg'),
        y = n('eSoz'),
        f = n('rxPX'),
        h = n('0KEI'),
        b = Object(f.a)()
          .propsFromState(function () {
            return { community: p.a, fetchStatus: p.b, isCommunityMember: p.h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              fetchCommunityIfNeeded: y.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules' }),
        g = n('MDbM'),
        v = n('/de5'),
        E = n('5FtR'),
        C = n('VS6U'),
        _ = n('rHpw'),
        k = function (e) {
          var t = l.a.useContext(s.a).featureSwitches,
            n = e.community,
            a = e.createLocalApiErrorHandler,
            i = e.fetchCommunityIfNeeded,
            c = e.fetchStatus,
            p = e.history,
            y = e.isCommunityMember,
            f = e.location,
            h = e.match,
            b = h.params.communityId,
            _ = t.isTrue('c9s_participation_enabled')
          l.a.useEffect(function () {
            b && !n && c !== g.a.LOADED && i(b).catch(a())
          })
          var k = l.a.useMemo(
            function () {
              return { selectedCommunityId: b || '', defaultText: '' }
            },
            [b],
          )
          if (n && b) {
            var S = n.name,
              I = n.rules,
              T = n.theme,
              M = {
                composeOptions: k,
                history: p,
                sidebarContent: l.a.createElement(u.a, null),
                title: (null == n ? void 0 : n.name) || null,
                withTweetButton: _ && y,
              }
            if (I.length > 0) {
              var x = l.a.createElement(m.b, {
                badgeStyle: w.badgeStyle,
                headerContainerStyle: w.containerStyle,
                headerExplanationStyle: w.explanationStyle,
                ruleContainerStyle: w.ruleContainerStyle,
                rules: I,
                theme: T,
                withBottomMargin: !0,
              })
              return l.a.createElement(
                C.a,
                o()({}, M, {
                  backLocation: '/i/communities/'.concat(b),
                  documentTitle: Object(d.a)({ communityName: S }),
                  primaryContent: x,
                }),
              )
            }
            var O = r()(r()({}, M), {}, { title: null }),
              F = l.a.createElement(v.b, { history: p, location: f, match: h })
            return l.a.createElement(C.a, o()({}, O, { primaryContent: F }))
          }
          return c === g.a.LOADED ? l.a.createElement(E.a, { to: '/' }) : null
        },
        S = b(k),
        w =
          ((t.default = S),
          _.a.create(function (e) {
            return {
              badgeStyle: { marginRight: e.spaces.space16 },
              containerStyle: {
                paddingVertical: e.componentDimensions.gutterVertical,
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                borderBottomColor: e.colors.gray50,
                borderBottomStyle: 'solid',
                borderBottomWidth: e.borderWidths.small,
              },
              ruleContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
              explanationStyle: { color: e.colors.text },
            }
          }))
    },
    OUEC: function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        c = n('ezF+'),
        l =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(197).then(n.bind(null, 'V5fj'))
            },
            loaderKey: 'communityDefaultLoader',
            strategy: n('XBtf').a.Critical,
          }),
        s = c.e(l),
        u = n('QIgh'),
        m = n('8UdT')
      t.a = o()(o()({}, u.b), {}, r()({}, m.b.Community, s))
    },
    OwKm: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return k
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        o = n.n(i),
        c = n('v6aA'),
        l = n('3XMw'),
        s = n.n(l),
        u = n('Nh1N'),
        m = n('MWbm'),
        d = n('Ig1G'),
        p = n('4zmP'),
        y = n('p+r5'),
        f = n('rHpw'),
        h = s.a.c66769a3,
        b = s.a.ef02695a,
        g = s.a.ef02695a,
        v = s.a.c824202f,
        E = s.a.d32cf5e6,
        C = s.a.f8fa00c7,
        _ = s.a.fc2a5c92,
        k = function (e) {
          var t = o.a.useContext(c.a).featureSwitches,
            n = t.getNumberValue('c9s_max_rule_name_length', 50),
            a = t.getNumberValue('c9s_max_rule_description_length', 160),
            i = e.description,
            l = e.errorText,
            s = e.name,
            f = e.onChange,
            k = o.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 3, n)
              },
              [n],
            ),
            w = o.a.useCallback(
              function (e) {
                return !Object(d.g)(e, 0, a)
              },
              [a],
            ),
            I = o.a.useState(s),
            T = r()(I, 2),
            M = T[0],
            x = T[1],
            O = o.a.useState(k(s)),
            F = r()(O, 2),
            R = F[0],
            L = F[1],
            A = o.a.useState(void 0),
            N = r()(A, 2),
            K = N[0],
            H = N[1],
            j = o.a.useState(i),
            P = r()(j, 2),
            B = P[0],
            D = P[1],
            z = o.a.useState(w(i)),
            U = r()(z, 2),
            V = U[0],
            W = U[1],
            X = o.a.useState(void 0),
            Q = r()(X, 2),
            q = Q[0],
            G = Q[1],
            Y = o.a.useState('' !== s),
            J = r()(Y, 2),
            Z = J[0],
            $ = J[1],
            ee = o.a.useCallback(
              function (e) {
                var t = !1,
                  a = e.target.value
                k(a) && ((t = !0), H(g({ minCharacterCount: 3, maxCharacterCount: n }))),
                  $(!0),
                  L(t),
                  x(a),
                  f({ description: B, name: a, valid: !t && !V })
              },
              [n, B, f, V, k],
            ),
            te = o.a.useCallback(
              function (e) {
                var t = !1,
                  n = e.target.value
                w(n) && ((t = !0), G(C({ maxCharacterCount: a }))),
                  W(t),
                  D(n),
                  f({ name: M, description: n, valid: !t && !R })
              },
              [a, M, f, R, w],
            ),
            ne = R && K ? void 0 : b({ minCharacterCount: 3, maxCharacterCount: n }),
            ae = V ? void 0 : E({ maxCharacterCount: a }),
            re = l
              ? o.a.createElement(
                  m.a,
                  { style: S.error },
                  o.a.createElement(p.a, { Icon: u.a, headline: _, text: l, type: 'danger' }),
                )
              : void 0
          return o.a.createElement(
            o.a.Fragment,
            null,
            re,
            o.a.createElement(y.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              autoFocus: !0,
              calculateLength: d.b,
              errorText: K,
              helperText: ne,
              invalid: R && Z,
              label: h,
              name: 'typedRuleName',
              onChange: ee,
              spellCheck: 'false',
              validLength: n,
              value: M,
            }),
            o.a.createElement(y.a, {
              autoComplete: 'off',
              autoCorrect: !1,
              calculateLength: d.b,
              errorText: q,
              helperText: ae,
              invalid: V,
              label: v,
              name: 'typedRuleDescription',
              onChange: te,
              spellCheck: 'false',
              validLength: a,
              value: B,
            }),
          )
        },
        S = f.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        })
    },
    PbB6: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [{ args: null, kind: 'FragmentSpread', name: 'screen_EditMembershipType_community' }],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'EditMembershipTypeQuery',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'membership_settings',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                      { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'invites_policy', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'join_approval_policy',
                            storageKey: null,
                          },
                        ],
                        type: 'CommunityRestrictedMembershipSettings',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'Ait9u_LZpvdybQ5u8YzViw',
            metadata: {},
            name: 'EditMembershipTypeQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(i.hash = '4f2f16fc8afcc27b4165058f28e61afa'), (t.default = i)
    },
    Phky: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, r.default)(e), a = 0; a < n.length; a++) {
            var i = n[a].screenName
            t.push(i)
          }
          return t
        })
      var r = a(n('GiKA'))
      e.exports = t.default
    },
    QRqA: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('+Kfv'),
        c = n('xZGM'),
        l = n('rxPX'),
        s = function (e, t) {
          return Object(c.z)(e, c.i)
        },
        u = Object(l.a)()
          .propsFromState(function () {
            return { shouldShowEducation: s }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(c.w)(c.i)
              },
            }
          }),
        m = n('3XMw'),
        d = n.n(m),
        p = n('MWbm'),
        y = n('X00g'),
        f = n('feu+'),
        h = n('h0NW'),
        b = n('rHpw'),
        g = n('r9x5'),
        v = n('cOhU'),
        E = n('uCrx'),
        C = d.a.b60e4f77,
        _ = d.a.f0fc827d,
        k = d.a.c8e93b51,
        S = d.a.fc5c6913,
        w = d.a.ad211086,
        I = d.a.gf803ba1,
        T = d.a.e92fe01b,
        M = d.a.h3bb8068,
        x = d.a.a709f8f8
      var O = b.a.create(function (e) {
          return {
            infoItemsContainer: { marginBottom: e.spaces.space32 },
            itemContainer: { paddingLeft: 0, paddingRight: 0 },
            decorationContainer: {
              color: e.colors.text,
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space20,
            },
          }
        }),
        F = u(function (e) {
          var t = e.addEducationFlag,
            n = e.forSingleCommunity,
            a = e.shouldShowEducation,
            c = r.a.useContext(i.a).featureSwitches
          if (!a || !1 === (null == n ? void 0 : n.canJoinCommunity)) return null
          var l = c.isTrue('c9s_ui_colors_enabled_rweb') && (null == n ? void 0 : n.theme),
            s = [O.decorationContainer, l && { color: y.a.getCommunityUIColor(l) }],
            u = r.a.createElement(g.a, { style: s }),
            m = r.a.createElement(v.a, { style: s }),
            d = r.a.createElement(E.a, { style: s }),
            b = function () {
              t()
            }
          return r.a.createElement(
            o.a,
            { viewType: 'welcome_education' },
            r.a.createElement(
              f.a,
              {
                actionLabel: C,
                graphicDisplayMode: 'none',
                headline: _,
                onAction: b,
                onClose: b,
                subtext: k,
                withCloseButton: !n,
              },
              r.a.createElement(
                p.a,
                { style: O.infoItemsContainer },
                r.a.createElement(h.a, {
                  containerStyle: O.itemContainer,
                  items: [
                    { label: S, description: w, decoration: u },
                    { label: I, description: T, decoration: m },
                    { label: M, description: x, decoration: d },
                  ],
                }),
              ),
            ),
          )
        })
      t.a = F
    },
    R5kW: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return h
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        c = (n('yH/f'), n('oEOe')),
        l = n('kGix'),
        s = n('Ssj5'),
        u = 'communityModeration',
        m = Object.freeze({
          REQUEST: 'rweb/communityModerationData/FETCH_MODERATION_DATA_REQUEST',
          SUCCESS: 'rweb/communityModerationData/FETCH_MODERATION_DATA_SUCESS',
          FAILURE: 'rweb/communityModerationData/FETCH_MODERATION_DATA_FAILURE',
        }),
        d = function (e, t) {
          return e[u][t]
        },
        p = function (e, t) {
          var n
          return null !== (n = e[u].fetchStatus[t]) && void 0 !== n ? n : l.a.NONE
        },
        y = Object.freeze({ fetchStatus: {} })
      function f(e) {
        return e.meta.communityId
      }
      var h = function (e) {
        return function (t, n, a) {
          var r = a.api
          return c.b(t, { params: { communityId: e }, request: r.Communities.fetchCommunityModeration })({
            meta: { communityId: e },
            actionTypes: m,
            context: 'FETCH_MODERATION_DATA',
          })
        }
      }
      s.a.register(
        r()({}, u, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m.REQUEST:
              return o()(o()({}, e), {}, { fetchStatus: o()(o()({}, e.fetchStatus), {}, r()({}, f(t), l.a.LOADING)) })
            case m.FAILURE:
              return o()(
                o()({}, e),
                {},
                { fetchStatus: o()(o()({}, e.fetchStatus), {}, r()({}, f(t), l.a.FAILED)), error: t.payload },
              )
            case m.SUCCESS:
              var n
              if (t.payload)
                return o()(
                  o()({}, e),
                  {},
                  ((n = {}),
                  r()(n, f(t), t.payload),
                  r()(n, 'fetchStatus', o()(o()({}, e.fetchStatus), {}, r()({}, f(t), l.a.LOADED))),
                  r()(n, 'error', null),
                  n),
                )
              break
            default:
              return e
          }
          return e
        }),
      )
    },
    ROT1: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('v6aA'),
        l = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = n('nmVb'),
        p = n.n(d),
        y = n('Phky'),
        f = n.n(y),
        h = u.a.h3e55b40,
        b = u.a.dd71d9c9,
        g = u.a.cf65e56a,
        v = u.a.d936eeca,
        E = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityName,
            i = e.onChange,
            s = o.a.useContext(c.a).featureSwitches,
            u = o.a.useState(!1),
            d = r()(u, 2),
            y = d[0],
            E = d[1],
            C = o.a.useState(void 0),
            _ = r()(C, 2),
            k = _[0],
            S = _[1],
            w = s.getNumberValue('c9s_max_community_name_length', 30),
            I = o.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !1
                Object(m.g)(t, 3, w)
                  ? (p()(t).length > 0 || f()(t).length > 0) && ((n = !0), S(v))
                  : ((n = !0), S(g({ minCharacterCount: 3, maxCharacterCount: w }))),
                  E(n),
                  i(t, n)
              },
              [w, i, S],
            ),
            T = b({ minCharacterCount: 3, maxCharacterCount: w })
          return o.a.createElement(l.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: k,
            helperText: T,
            invalid: y,
            label: h,
            name: 'typedCommunityName',
            onChange: I,
            spellCheck: 'false',
            validLength: w,
            value: a,
          })
        }
    },
    'S+H3': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    SNyS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
              }),
              o.a.createElement('path', {
                d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    SyZD: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesRouter', function () {
          return D
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('KqXw'), n('WNMA'), n('2G9S'), n('ERkP')),
        o = n.n(i),
        c = n('v6aA'),
        l = n('Ig1G'),
        s = n('rxPX'),
        u = Object(s.a)().withAnalytics({ page: 'communities', section: 'edit_rules' }),
        m = n('3XMw'),
        d = n.n(m),
        p = n('yoO3'),
        y = n('5FtR'),
        f = n('ddV6'),
        h = n.n(f),
        b = (n('z84I'), n('/yvb')),
        g = n('eSoz'),
        v = n('0KEI'),
        E = Object(s.a)()
          .propsFromActions(function () {
            return {
              reorderRules: g.c.reorderRules,
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_REORDER_RULES_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'reorder_rules' }),
        C = n('rHpw'),
        _ = C.a.create(function (e) {
          return {
            ruleContainerStyle: { paddingHorizontal: e.spaces.space32 },
            badgeStyle: { marginRight: e.spaces.space20 },
            headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 },
          }
        }),
        k = n('mWs5'),
        S = n('PKbs'),
        w = d.a.b772cd65,
        I = d.a.gfca5254
      var T = E(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.explanation,
            r = e.history,
            i = e.reorderRules,
            c = t.id_str,
            l = t.rules,
            s = t.theme,
            u = o.a.useState(l),
            m = h()(u, 2),
            d = m[0],
            y = m[1],
            f = o.a.useCallback(
              function (e) {
                y(e)
              },
              [y],
            ),
            g = o.a.useCallback(
              function () {
                var e = n({}),
                  t = d.map(function (e) {
                    return e.rest_id
                  })
                i(c, { ruleIds: t })
                  .then(function () {
                    r.goBack({ backLocation: '/i/communities/'.concat(c, '/tools/rules') })
                  })
                  .catch(e)
              },
              [c, d, i, r, n],
            ),
            v = o.a.createElement(b.a, { onPress: g, size: 'small', type: 'brandFilled' }, w)
          return o.a.createElement(
            p.a,
            null,
            o.a.createElement(
              k.a,
              { communityId: c, rightControl: v, screenType: 'primaryDetail', title: I },
              o.a.createElement(S.b, {
                badgeStyle: _.badgeStyle,
                displayType: S.a.Reorder,
                explanation: a,
                headerContainerStyle: _.headerContainerStyle,
                onReorder: f,
                ruleContainerStyle: _.ruleContainerStyle,
                rules: d,
                theme: s,
              }),
            ),
          )
        }),
        M = n('MWbm'),
        x = n('mjJ+'),
        O = n('iY63'),
        F = n('ACHU'),
        R = n('zCf4'),
        L = d.a.gfca5254,
        A = d.a.d94edeb4,
        N = d.a.j560c8ea,
        K = d.a.ab8089ea,
        H = d.a.h63a5c3b,
        j = o.a.createElement(O.a, null),
        P = o.a.createElement(F.a, null),
        B = { viewType: 'add' },
        D = function (e) {
          var t = o.a.useContext(c.a).featureSwitches,
            n = t.isTrue('c9s_rule_creation_enabled'),
            a = t.isTrue('c9s_rule_editing_enabled'),
            i = t.isTrue('c9s_rule_reordering_enabled'),
            s = e.community,
            u = e.history,
            m = e.match,
            d = s.id_str,
            f = s.role,
            h = s.rules,
            g = s.theme,
            v = m.url,
            E = f === l.a.Admin,
            C =
              n && E
                ? o.a.createElement(b.a, {
                    accessibilityLabel: N,
                    behavioralEventContext: B,
                    icon: j,
                    link: '/i/communities/'.concat(d, '/tools/rules/add'),
                    pullRight: !0,
                    type: 'primaryText',
                  })
                : void 0,
            w = h.length > 1,
            I =
              i && E && w
                ? o.a.createElement(b.a, {
                    accessibilityLabel: H,
                    icon: P,
                    pullRight: !0,
                    renderMenu: function (e) {
                      var t = [{ text: K, link: '/i/communities/'.concat(d, '/tools/rules/reorder') }]
                      return o.a.createElement(x.a, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 })
                    },
                    style: z.actionsButton,
                    type: 'primaryText',
                  })
                : void 0,
            O = o.a.createElement(M.a, { style: z.rightControlStyle }, C, I),
            F = { displayType: S.a.Default, getPivotLink: void 0 }
          return (
            E &&
              a &&
              ((F.displayType = S.a.Pivot),
              (F.getPivotLink = function (e) {
                return '/i/communities/'.concat(d, '/tools/rules/').concat(e.rest_id, '/edit')
              })),
            o.a.createElement(
              R.d,
              null,
              o.a.createElement(
                R.b,
                { exact: !0, path: ''.concat(v, '/') },
                o.a.createElement(
                  p.a,
                  null,
                  o.a.createElement(
                    k.a,
                    { communityId: d, rightControl: O, screenType: 'primaryDetail', title: L },
                    o.a.createElement(
                      S.b,
                      r()(
                        {
                          badgeStyle: _.badgeStyle,
                          explanation: A,
                          headerContainerStyle: _.headerContainerStyle,
                          ruleContainerStyle: _.ruleContainerStyle,
                          rules: h,
                          theme: g,
                        },
                        F,
                      ),
                    ),
                  ),
                ),
              ),
              o.a.createElement(
                R.b,
                { exact: !0, path: ''.concat(v, '/reorder') },
                o.a.createElement(T, { community: s, explanation: A, history: u }),
              ),
              o.a.createElement(R.b, null, o.a.createElement(y.a, { to: ''.concat(v, '/') })),
            )
          )
        },
        z = C.a.create(function (e) {
          return { actionsButton: { marginLeft: e.spaces.space12 }, rightControlStyle: { flexDirection: 'row' } }
        })
      t.default = u(D)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('5UID'),
        l = n('3GUV'),
        s = n('iBK2'),
        u = ['accessibilityTitle'],
        m = o.a.createElement(l.a, null),
        d = function (e) {
          var t = e.accessibilityTitle,
            n = r()(e, u),
            a = o.a.createElement(s.b, n)
          return t ? o.a.createElement(c.a, { title: t }, a) : a
        }
      ;(d.defaultProps = { footer: m }), (t.a = d)
    },
    TcEn: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityTimelineType', function () {
          return Ta
        }),
        n.d(t, 'CommunityScreen', function () {
          return xa
        })
      var a,
        r,
        i = n('yiKp'),
        o = n.n(i),
        c = n('VrFO'),
        l = n.n(c),
        s = n('Y9Ll'),
        u = n.n(s),
        m = n('1Pcy'),
        d = n.n(m),
        p = n('5Yy7'),
        y = n.n(p),
        f = n('2VqO'),
        h = n.n(f),
        b = n('KEM+'),
        g = n.n(b),
        v = (n('yH/f'), n('2G9S'), n('KqXw'), n('WNMA'), n('ho0z'), n('ERkP')),
        E = n.n(v),
        C = (n('1t7P'), n('jQ/y'), n('1Idg')),
        _ = n('WpDa'),
        k = n('ZNT5'),
        S = n('hqKg'),
        w = n('rxPX'),
        I = function (e, t) {
          return t.communityId
        },
        T = function () {
          return Object(S.createSelector)(I, function (e) {
            return (function (e) {
              return Object(k.a)({
                timelineId: 'communityAbout-'.concat(e),
                getEndpoint: function (e) {
                  return e.Communities.fetchAboutTimeline
                },
                getEndpointParams: function (t) {
                  return { communityId: e }
                },
                context: 'FETCH_COMMUNITY_ABOUT_TIMELINE',
                perfKey: 'communityAbout',
                formatResponse: _.a,
              })
            })(e)
          })
        },
        M = Object(w.a)()
          .propsFromState(function () {
            return { community: C.a, creator: C.g, aboutModule: T() }
          })
          .withAnalytics({ page: 'community', section: 'about' }),
        x = n('Ig1G'),
        O = n('yoO3'),
        F = n('fTQJ'),
        R = n('n0Rl'),
        L = n('v//M'),
        A = (n('enFi'), n('z84I'), n('PKbs')),
        N = n('3XMw'),
        K = n.n(N),
        H = n('6vad'),
        j = n('rC8y'),
        P = n('0yYu'),
        B = n('rHpw'),
        D = n('jAXQ'),
        z = n.n(D),
        U = void 0 !== a ? a : (a = n('KK06')),
        V = K.a.gfca5254,
        W = K.a.ffd9cfe6,
        X = B.a.create(function (e) {
          return {
            explanationStyle: { color: e.colors.text },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            headingContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal, height: 'initial' },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space24 },
            badgeStyle: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
          }
        }),
        Q = function (e) {
          var t = e.community,
            n = e.theme,
            a = z()(U, t),
            r = a.rules,
            i = E.a.useMemo(
              function () {
                return r.map(function (e) {
                  return { rest_id: e.rest_id, name: e.name, description: e.description || '' }
                })
              },
              [r],
            )
          return 0 === r.length
            ? null
            : E.a.createElement(
                E.a.Fragment,
                null,
                E.a.createElement(H.b, { text: V }),
                E.a.createElement(A.b, {
                  badgeStyle: X.badgeStyle,
                  headerContainerStyle: [X.containerStyle, X.headingContainerStyle],
                  headerExplanationStyle: X.explanationStyle,
                  limit: 5,
                  ruleContainerStyle: X.ruleContainerStyle,
                  rules: i,
                  theme: n,
                }),
                r.length > 5
                  ? E.a.createElement(
                      E.a.Fragment,
                      null,
                      E.a.createElement(j.a, { link: '/i/communities/'.concat(a.rest_id, '/rules'), text: W }),
                      ' ',
                      E.a.createElement(P.a, null),
                    )
                  : null,
              )
        },
        q = void 0 !== r ? r : (r = n('GR8q')),
        G = Object(R.b)(q, { errorConfig: { context: 'RULES' } }),
        Y = function (e) {
          return E.a.createElement(G, {
            render: function (t) {
              var n = t.data,
                a = (t.error, t.fetchStatus),
                r = t.retry
              return null != n && n.community
                ? E.a.createElement(L.a, {
                    fetchStatus: a,
                    onRequestRetry: r,
                    render: function () {
                      return E.a.createElement(Q, { community: n.community, theme: e.theme })
                    },
                  })
                : null
            },
            variables: { communityId: e.communityId },
          })
        },
        J = n('t62R'),
        Z = n('csss'),
        $ = n('h0NW'),
        ee = n('jV+4'),
        te = n('v6aA'),
        ne = n('cOhU'),
        ae = n('DlMI'),
        re = n('Lxak'),
        ie = K.a.i9028824,
        oe = K.a.cc683fb9,
        ce = K.a.af7c11a9,
        le = K.a.db1b9462,
        se = K.a.ea49402d
      function ue(e) {
        var t = e.date,
          n = e.userName
        return E.a.createElement(K.a.I18NFormatMessage, { $i18n: 'a346641a', date: t }, n)
      }
      var me = (function (e) {
        y()(n, e)
        var t = h()(n)
        function n() {
          var e
          l()(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(r))),
            g()(d()(e), '_getItems', function () {
              var t = function (e) {
                  return E.a.createElement(J.b, null, e)
                },
                n = e._getCreationAttribution(),
                a = [
                  { decoration: pe, label: t(le) },
                  { decoration: ye, label: t(se) },
                ]
              return n && a.push({ decoration: fe, label: n }), a
            }),
            g()(d()(e), '_renderInfoSection', function () {
              var t = e.props.community
              if (t) {
                var n = t.description,
                  a = t.role
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(H.b, { text: ce }),
                  Object(x.f)(a) && n ? E.a.createElement(Z.a, { label: n }) : null,
                  E.a.createElement($.a, { containerStyle: de.containerStyle, items: e._getItems() }),
                  E.a.createElement(P.a, null),
                )
              }
              return null
            }),
            g()(d()(e), '_renderRules', function () {
              var t = e.props,
                n = t.community,
                a = t.communityId
              if (n) {
                var r = n.theme
                return E.a.createElement(Y, { communityId: a, theme: r })
              }
            }),
            g()(d()(e), '_getCreationAttribution', function () {
              var t = e.props,
                n = t.community,
                a = t.creator
              if (!a) return null
              var r = null == n ? void 0 : n.created_at,
                i = null == a ? void 0 : a.screen_name,
                o = a.verified
              if (r && i) {
                var c = new Date(r).toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' }),
                  l = E.a.createElement(ee.a, { isVerified: o, screenName: i, withLink: !0 })
                return E.a.createElement(J.b, { color: 'gray700' }, E.a.createElement(ue, { date: c, userName: l }))
              }
            }),
            e
          )
        }
        return (
          u()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props.aboutModule
                return E.a.createElement(
                  O.a,
                  { behavioralEventViewType: 'about' },
                  this._renderInfoSection(),
                  this._renderRules(),
                  E.a.createElement(F.a, { loadingAccessibilityLabel: ie, module: e, title: oe }),
                )
              },
            },
          ]),
          n
        )
      })(E.a.Component)
      g()(me, 'contextType', te.a)
      var de = B.a.create(function (e) {
          return {
            text: { marginVertical: e.spaces.space12 },
            explanationStyle: { color: e.colors.text },
            containerStyle: {
              paddingVertical: e.componentDimensions.gutterVertical,
              paddingHorizontal: e.spaces.space24,
              minHeight: e.spaces.space56,
            },
            headingContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal, height: 'initial' },
            ruleContainerStyle: { paddingHorizontal: e.spaces.space24 },
            badgeStyle: { marginRight: e.spaces.space16, marginLeft: e.spaces.space2 },
            icon: {
              marginLeft: '6px',
              marginRight: e.spaces.space20,
              color: e.colors.gray700,
              height: e.spaces.space24,
              width: e.spaces.space24,
            },
          }
        }),
        pe = E.a.createElement(ne.a, { style: de.icon }),
        ye = E.a.createElement(ae.a, { style: de.icon }),
        fe = E.a.createElement(re.a, { style: de.icon }),
        he = M(me),
        be = n('+Kfv'),
        ge = n('es0u'),
        ve = n('0KEI'),
        Ee = n('R5kW'),
        Ce = function (e, t) {
          var n,
            a = Object(Ee.b)(e, t.communityId)
          return null !== (n = null == a ? void 0 : a.tweet_case_count) && void 0 !== n ? n : 0
        },
        _e = function (e, t) {
          return Object(Ee.c)(e, t.communityId)
        },
        ke = Object(w.a)()
          .propsFromState(function () {
            return { count: Ce, fetchStatus: _e }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ve.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityModerationData: Ee.a,
            }
          }),
        Se = n('kGix'),
        we = n('TnY3'),
        Ie = n('MWbm'),
        Te = n('mjJ+'),
        Me = n('/yvb'),
        xe = n('Znyr'),
        Oe = n('zIWA'),
        Fe = n('SNyS'),
        Re = n('Lsrn'),
        Le = n('k/Ka'),
        Ae = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Le.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Re.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            E.a.createElement(
              'g',
              null,
              E.a.createElement('path', {
                d: 'M20.5 6.49h-3.53v-.46c0-1.26-1.02-2.28-2.26-2.28H9.3c-1.25 0-2.26 1.02-2.26 2.28v.46H3.5c-1.24 0-2.25 1.01-2.25 2.25v4.48c0 .42.34.75.75.75h.22v4c0 1.25 1.01 2.28 2.26 2.28h15.05c1.24 0 2.26-1.03 2.26-2.28v-4H22c.42 0 .75-.33.75-.75V8.74c0-1.24-1.01-2.25-2.25-2.25zM8.54 6.03c0-.43.34-.78.76-.78h5.41c.42 0 .76.35.76.78v.46H8.54v-.46zm11.75 11.94c0 .43-.34.78-.76.78H4.48c-.42 0-.76-.35-.76-.78v-4h5.67v1.89c0 .41.34.75.75.75h3.72c.42 0 .75-.34.75-.75v-1.89h5.68v4zm-9.4-2.86v-2.59h2.22v2.59h-2.22zm10.36-2.64h-6.64v-.7c0-.42-.33-.75-.75-.75h-3.72c-.41 0-.75.33-.75.75v.7H2.75V8.74c0-.41.34-.75.75-.75h17c.42 0 .75.34.75.75v3.73z',
              }),
            ),
          )
        }
      Ae.metadata = { width: 24, height: 24 }
      var Ne = Ae,
        Ke = n('ACHU'),
        He = K.a.h6beb5fa,
        je = K.a.e3f04700,
        Pe = K.a.e2429f56,
        Be = K.a.df15d5b7,
        De = K.a.e48fbb01,
        ze = K.a.c8c6c4e9,
        Ue = K.a.h63a5c3b,
        Ve = K.a.dce5e1b3,
        We = K.a.c5d8c93d,
        Xe = { viewType: 'app_bar_button' }
      var Qe = B.a.create(function (e) {
          return {
            root: { right: -e.spacesPx.space4 },
            menuControlBadge: {
              backgroundColor: e.colors.magenta500,
              top: e.spacesPx.space4,
              right: e.spacesPx.space4,
            },
          }
        }),
        qe = Object(we.a)(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            r = void 0 === a ? 0 : a,
            i = (e.history, e.userRole),
            o = E.a.useContext(te.a).featureSwitches,
            c = o.isTrue('c9s_settings_enabled'),
            l = o.isTrue('c9s_report_community_enabled'),
            s = o.isTrue('c9s_moderation_enabled') && t,
            u = c && t,
            m = l && !t,
            d = E.a.useCallback(
              function (e) {
                var t = []
                return (
                  s &&
                    t.push({
                      text: Pe,
                      subText: Be({ count: r }),
                      Icon: Oe.a,
                      link: '/i/communities/'.concat(n, '/moderation/reported_tweets'),
                    }),
                  m &&
                    t.push({
                      text: De,
                      Icon: Oe.a,
                      link: 'https://help.twitter.com/forms/safety-and-sensitive-content/communities',
                    }),
                  t.push({ text: ze, Icon: Fe.a, link: 'https://help.twitter.com/using-twitter/communities' }),
                  E.a.createElement(Te.a, { items: t, onCloseRequested: e })
                )
              },
              [n, r, s, m],
            ),
            p = t ? Ne : Ke.a,
            y = t ? (i === x.a.Admin ? Ve : We) : Ue
          return E.a.createElement(
            Ie.a,
            { style: Qe.root },
            E.a.createElement(Me.a, {
              accessibilityLabel: y,
              behavioralEventContext: Xe,
              icon: E.a.createElement(p, null),
              link: u ? '/i/communities/'.concat(n, '/tools') : void 0,
              renderMenu: u ? void 0 : d,
              size: 'xLarge',
              type: 'primaryText',
            }),
            s && r > 0
              ? E.a.createElement(xe.a, {
                  count: r,
                  style: Qe.menuControlBadge,
                  truncatedCountFormatter: He,
                  unreadCountLabel: je,
                  withBorder: !1,
                })
              : null,
          )
        })
      var Ge = ke(function (e) {
          var t = e.canModerate,
            n = e.communityId,
            a = e.count,
            r = e.createLocalApiErrorHandler,
            i = e.fetchCommunityModerationData,
            o = e.fetchStatus,
            c = e.userRole
          return (
            E.a.useEffect(
              function () {
                o === Se.a.NONE && t && i(n).catch(r())
              },
              [r, i, o, n, t],
            ),
            E.a.createElement(qe, { canModerate: t, communityId: n, count: a, userRole: c })
          )
        }),
        Ye = (n('7xRU'), n('tVqn'), n('LW0h'), n('7x/C'), n('uFXj'), n('ddV6')),
        Je = n.n(Ye),
        Ze = n('CGyZ'),
        $e = n('feu+'),
        et = K.a.fad95333,
        tt = function (e) {
          var t = e.offendingRule
          return E.a.createElement(
            Ie.a,
            null,
            t
              ? E.a.createElement(
                  Ie.a,
                  { style: nt.offendingRule },
                  (function (e) {
                    return E.a.createElement(
                      K.a.I18NFormatMessage,
                      { $i18n: 'jb124a07' },
                      E.a.createElement(J.b, { weight: 'bold' }, K.a.a0e0a52b({ offendingRule: e })),
                    )
                  })(t),
                )
              : null,
            E.a.createElement(J.b, null, et),
          )
        },
        nt = B.a.create(function (e) {
          return { offendingRule: { display: 'flex', marginBottom: e.spaces.space12 } }
        }),
        at = K.a.hafa07f2,
        rt = K.a.fa94c9da,
        it = K.a.c15bee31,
        ot = K.a.i859676b,
        ct = E.a.createElement(
          K.a.I18NFormatMessage,
          { $i18n: 'd8d8fcba' },
          E.a.createElement(J.b, { link: '/settings/audience_and_tagging' }, K.a.e77dfaf0),
        ),
        lt = K.a.fc2a5c92,
        st = K.a.bf7bdb60,
        ut = K.a.h27d695f,
        mt = K.a.b02360f5,
        dt = Object.freeze({
          joinAvailable: 'CommunityJoinAction',
          joinUnavailable: 'CommunityJoinActionUnavailable',
          leaveAvailable: 'CommunityLeaveAction',
          leaveUnavailable: 'CommunityLeaveActionUnavailable',
        }),
        pt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerNotMember: 'ViewerNotMember',
          ViewerIsSoleAdmin: 'ViewerIsSoleAdmin',
        }),
        yt = Object.freeze({
          Unavailable: 'Unavailable',
          ViewerIsMember: 'ViewerIsMember',
          ViewerIsRemoved: 'ViewerIsRemoved',
          ViewerNotInvited: 'ViewerNotInvited',
          ViewerIsProtected: 'ViewerIsProtected',
        })
      var ft = { follow: K.a.b171d7c4, following: K.a.aa7ae3f6, unfollow: K.a.bb1d57b6 },
        ht = K.a.j24c37b2,
        bt = function (e) {
          var t = E.a.useState(void 0),
            n = Je()(t, 2),
            a = n[0],
            r = n[1],
            i = e.community,
            o = e.createLocalApiErrorHandler,
            c = e.history,
            l = e.isProtectedUser,
            s = e.join,
            u = e.leave,
            m = i.actions,
            d = m.join_action_result,
            p = m.leave_action_result,
            y = i.id_str,
            f = i.name,
            h = i.role,
            b = Object(x.f)(h),
            g = { viewType: 'join', viewState: { type: 'toggleable', toggledTo: !b } },
            v = function () {
              r(void 0)
            }
          return E.a.createElement(
            Ie.a,
            { style: gt.button },
            E.a.createElement(Ze.a, {
              behavioralEventContext: g,
              buttonText: ft,
              isFollowing: b,
              name: f,
              onFollow: function () {
                var e = i.rules,
                  t = i.viewerViolatedRule,
                  n = (function (e, t, n) {
                    var a = e.__typename,
                      r = e.reason,
                      i = function (e) {
                        return { canAction: !0, message: e }
                      },
                      o = function (e) {
                        return { canAction: !1, message: e }
                      },
                      c = o({ headline: lt, text: st })
                    switch (a) {
                      case dt.joinAvailable:
                        return i()
                      case dt.joinUnavailable:
                        switch (r) {
                          case yt.ViewerIsRemoved:
                            return o({
                              headline: it,
                              text: E.a.createElement(tt, { offendingRule: null == n ? void 0 : n.name }),
                            })
                          case yt.ViewerNotInvited:
                            return o({ headline: at, text: rt })
                          case yt.ViewerIsProtected:
                            return t ? o({ headline: ot, text: ct }) : i()
                          default:
                            return c
                        }
                      default:
                        return c
                    }
                  })(d, l, t),
                  a = n.canAction,
                  u = n.message
                !a && u && r(u),
                  a &&
                    (e && e.length > 0
                      ? c.push({ pathname: '/i/communities/'.concat(y, '/join'), state: { community: i } })
                      : s(y).catch(o({})))
              },
              onUnfollow: function () {
                var e = (function (e) {
                    var t,
                      n = e.__typename,
                      a = e.reason,
                      r = function (e) {
                        return { canAction: !1, message: e }
                      },
                      i = r({ headline: lt, text: st })
                    switch (n) {
                      case dt.leaveAvailable:
                        return { canAction: !0, message: t }
                      case dt.leaveUnavailable:
                        switch (a) {
                          case pt.ViewerIsSoleAdmin:
                            return r({ headline: ut, text: mt })
                          default:
                            return i
                        }
                      default:
                        return i
                    }
                  })(p),
                  t = e.canAction,
                  n = e.message
                !t && n && r(n), t && u(y).catch(o({}))
              },
              type: 'community',
            }),
            a
              ? E.a.createElement($e.a, {
                  actionLabel: ht,
                  graphicDisplayMode: 'none',
                  headline: a.headline,
                  onAction: v,
                  onClose: v,
                  subtext: a.text,
                  withCloseButton: !1,
                })
              : null,
          )
        },
        gt = B.a.create(function (e) {
          return { button: { justifyContent: 'right' } }
        }),
        vt = n('YeIG'),
        Et = n('TIdA'),
        Ct = n('A91F'),
        _t = n('9Xij'),
        kt = function (e) {
          var t = e.bannerMedia,
            n = null == t ? void 0 : t.image,
            a = B.a.theme.aspectRatios.communityBanner
          return n && !Object(vt.a)(n)
            ? E.a.createElement(
                Ie.a,
                null,
                E.a.createElement(Et.a, {
                  accessibilityLabel: '',
                  aspectMode: Ct.a.exact(a),
                  backgroundColor: B.a.theme.colors.gray300,
                  image: n,
                }),
              )
            : E.a.createElement(_t.a, { ratio: a }, E.a.createElement(Ie.a, { style: St.placeholderImageContainer }))
        },
        St = B.a.create(function (e) {
          return { placeholderImageContainer: { backgroundColor: e.colors.gray300, height: '100%' } }
        }),
        wt = n('X00g'),
        It = n('n4Eu'),
        Tt = { red: 0, green: 0, blue: 0 },
        Mt = '10px',
        xt = function (e) {
          var t,
            n = e.children,
            a = e.community,
            r = e.isThemeEnabled,
            i = a.media,
            o = a.theme,
            c = null == i || null === (t = i.image) || void 0 === t ? void 0 : t.palette
          return E.a.createElement(
            Ie.a,
            null,
            E.a.createElement(Ie.a, { style: Ot.descriptionContainer }, n),
            E.a.createElement(Ie.a, { style: [B.a.absoluteFill, Ot.backgroundColorWhite] }),
            E.a.createElement(Ie.a, {
              style: [
                B.a.absoluteFill,
                Ot.backgroundColor,
                (function (e, t) {
                  if (r) return wt.a.getCommunityGradientStyle(t, Mt)
                  var n = e && It.a.get(e),
                    a = n ? (null == n ? void 0 : n.rgb) : Tt,
                    i = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 0.9)'),
                    o = 'rgba('.concat(a.red, ',').concat(a.green, ',').concat(a.blue, ', 1)')
                  return {
                    backgroundImage: 'linear-gradient(to bottom, '
                      .concat(i, ' ')
                      .concat(Mt, ', ')
                      .concat(o, ' ')
                      .concat(Mt, ' 100%)'),
                  }
                })(c, o),
              ],
            }),
          )
        },
        Ot = B.a.create(function (e) {
          return {
            descriptionContainer: {
              paddingHorizontal: e.spaces.space16,
              paddingTop: e.spaces.space24,
              paddingBottom: e.spaces.space12,
              justifyContent: 'flex-end',
              zIndex: 2,
            },
            backgroundColor: { height: '100%', width: '100%', zIndex: 1 },
            backgroundColorWhite: { height: '100%', width: '100%', backgroundColor: e.colors.white, zIndex: 0 },
          }
        }),
        Ft = n('XtoV'),
        Rt = n('97Jx'),
        Lt = n.n(Rt),
        At = n('m3Bd'),
        Nt = n.n(At),
        Kt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Le.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Re.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            E.a.createElement(
              'g',
              null,
              E.a.createElement('path', {
                d: 'M19.5 22h-15C3.122 22 2 20.878 2 19.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .271.229.5.5.5h15c.271 0 .5-.229.5-.5V14c0-.552.448-1 1-1s1 .448 1 1v5.5c0 1.378-1.122 2.5-2.5 2.5z',
              }),
              E.a.createElement('path', {
                d: 'M17.71 8.703c-.2.2-.45.3-.71.3s-.51-.1-.71-.3L13 5.413v9.59c0 .55-.45 1-1 1s-1-.45-1-1v-9.59l-3.29 3.29c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l5-5c.39-.39 1.03-.39 1.42 0l5 5c.391.39.391 1.02 0 1.41z',
              }),
            ),
          )
        }
      Kt.metadata = { width: 24, height: 24 }
      var Ht = Kt,
        jt = ['renderMenu'],
        Pt = ['accessibilityLabel', 'behavioralEventContext'],
        Bt = E.a.createElement(Ht, null),
        Dt = function (e) {
          var t = e.renderMenu,
            n = Nt()(e, jt),
            a = n.accessibilityLabel,
            r = n.behavioralEventContext,
            i = Nt()(n, Pt)
          return E.a.createElement(
            Me.a,
            Lt()({ accessibilityLabel: a, behavioralEventContext: r, icon: Bt, renderMenu: t, type: 'primaryText' }, i),
          )
        },
        zt = n('1YZw'),
        Ut = n('G6rE'),
        Vt = n('li/m'),
        Wt = ['loggedInUser'],
        Xt = Object(w.a)()
          .propsFromState(function () {
            return { community: C.a, loggedInUser: Ut.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Nt()(e, Wt)
            return o()({ isProtectedUser: null == t ? void 0 : t.protected }, n)
          })
          .propsFromActions(function () {
            return {
              addToast: zt.b,
              createLocalApiErrorHandler: Object(ve.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_DETAIL'),
              join: Vt.b,
              leave: Vt.c,
            }
          })
          .withAnalytics({ page: 'community', section: 'detail' }),
        Qt = n('oQhu'),
        qt = n('cm6r'),
        Gt = n('MAI/'),
        Yt = n('k/OQ'),
        Jt = n('MtXG'),
        Zt = n('I4+6'),
        $t = n('CaKu'),
        en = n('I/9y'),
        tn = n('pwey'),
        nn = K.a.a0e3ece4,
        an = K.a.bec3b8f9,
        rn = K.a.e05c00b4,
        on = K.a.f88553c8,
        cn = K.a.b139b549,
        ln = K.a.ha8209bb,
        sn = K.a.d601fc2f,
        un = K.a.b721eb37,
        mn = K.a.hb9400db,
        dn = 'description',
        pn = 'facepiles_with_count',
        yn = { viewType: 'share_community' },
        fn = { viewType: 'copy_link' },
        hn = { viewType: 'invite_members' },
        bn = K.a.d58baa7e,
        gn = (function (e) {
          y()(n, e)
          var t = h()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(d()(e), '_isParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              g()(d()(e), '_isThemeEnabled', e.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb')),
              g()(
                d()(e),
                '_isTimelinesRankingEnabled',
                e.context.featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
              ),
              g()(
                d()(e),
                '_isCommunitiesSharingEnabled',
                e.context.featureSwitches.isTrue('c9s_share_community_enabled'),
              ),
              g()(d()(e), 'state', { shouldShowFullDescription: !1, hasOverflow: void 0 }),
              g()(d()(e), '_renderCommunityDescription', function () {
                var t = e.props,
                  n = t.community,
                  a = t.communityId,
                  r = t.createLocalApiErrorHandler,
                  i = t.history,
                  o = t.isProtectedUser,
                  c = t.join,
                  l = t.leave,
                  s = e.state,
                  u = s.hasOverflow,
                  m = s.shouldShowFullDescription
                if (n) {
                  var d = n.description,
                    p = n.member_count,
                    y = n.membersFacepileUrls,
                    f = n.name,
                    h = n.role,
                    b = n.theme,
                    g = p || 0,
                    v = e._isThemeEnabled ? wt.a.getCommunityBackgroundColorName(b) : void 0
                  return E.a.createElement(
                    be.a,
                    { viewType: dn },
                    E.a.createElement(
                      xt,
                      { community: n, isThemeEnabled: e._isThemeEnabled },
                      E.a.createElement(
                        J.b,
                        { color: 'white', size: 'title2', style: vn.name, weight: 'bold' },
                        f.trim(),
                      ),
                      d && !Object(x.f)(h)
                        ? E.a.createElement(
                            Ie.a,
                            { style: vn.description },
                            E.a.createElement(
                              J.b,
                              {
                                color: 'white',
                                getTextOverflow: e._getDescriptionOverflow,
                                numberOfLines: m ? void 0 : 2,
                              },
                              d,
                            ),
                            u && !m
                              ? E.a.createElement(
                                  J.b,
                                  { color: 'white', onPress: e._handleDescriptionClick, weight: 'bold' },
                                  mn,
                                )
                              : null,
                          )
                        : null,
                      E.a.createElement(
                        be.a,
                        { viewType: pn },
                        E.a.createElement(
                          Ie.a,
                          { style: vn.bottomContainer },
                          E.a.createElement(
                            qt.a,
                            {
                              interactiveStyles: e._getMemberContainerInteractiveStyle(),
                              link: '/i/communities/'.concat(a, '/members'),
                              style: vn.membersContainer,
                            },
                            y
                              ? E.a.createElement(Gt.a, {
                                  borderColor: v,
                                  style: vn.rightSpace,
                                  userAvatarSize: 'large',
                                  userAvatarUrls: y,
                                })
                              : null,
                            e._renderCount(g),
                          ),
                          E.a.createElement(
                            Ie.a,
                            { style: vn.buttons },
                            e._isCommunitiesSharingEnabled
                              ? E.a.createElement(Dt, {
                                  accessibilityLabel: an,
                                  behavioralEventContext: yn,
                                  renderMenu: e._renderActionMenu,
                                  style: vn.inviteButton,
                                  type: 'onMediaOutlined',
                                })
                              : E.a.createElement(Ft.a, {
                                  community: n,
                                  style: vn.inviteButton,
                                  type: 'onMediaOutlined',
                                }),
                            e._isParticipationEnabled
                              ? E.a.createElement(bt, {
                                  community: n,
                                  createLocalApiErrorHandler: r,
                                  history: i,
                                  isProtectedUser: o,
                                  join: c,
                                  leave: l,
                                })
                              : null,
                          ),
                        ),
                      ),
                    ),
                  )
                }
              }),
              g()(d()(e), '_renderTabs', function () {
                var t = e.props.communityId,
                  n = [
                    { to: '/i/communities/'.concat(t), label: ln, key: ln },
                    { to: '/i/communities/'.concat(t, '/latest'), label: sn, key: sn },
                    { to: '/i/communities/'.concat(t, '/about'), label: un, key: un },
                  ]
                return E.a.createElement(Yt.a, {
                  accessibilityLabel: nn,
                  links: e._isTimelinesRankingEnabled
                    ? n
                    : (function (e) {
                        return e.filter(function (e) {
                          return e.label !== sn
                        })
                      })(n),
                })
              }),
              g()(d()(e), '_renderCount', function (e) {
                var t = bn(e)
                return E.a.createElement(
                  Jt.a.Group,
                  null,
                  E.a.createElement(
                    Jt.a,
                    { onMedia: !0 },
                    E.a.createElement(
                      J.b,
                      { color: 'white' },
                      E.a.createElement(
                        K.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        E.a.createElement(Jt.a.Value, null, K.a.ibd0106d({ formattedCount: t })),
                        E.a.createElement(Jt.a.Label, null, K.a.cface2d0({ count: e })),
                      ),
                    ),
                  ),
                )
              }),
              g()(
                d()(e),
                '_getCommunityShareItems',
                Object(Qt.a)(function (t, n) {
                  var a = []
                  return (
                    a.push({ behavioralEventContext: fn, text: rn, Icon: en.a, onClick: e._handleCopyLink }),
                    t &&
                      a.push({
                        behavioralEventContext: hn,
                        text: cn,
                        Icon: tn.a,
                        link: '/i/communities/'.concat(n, '/invite'),
                      }),
                    a
                  )
                }),
              ),
              g()(d()(e), '_renderActionMenu', function (t) {
                var n = e.props,
                  a = n.community,
                  r = n.communityId,
                  i = null == a ? void 0 : a.role,
                  o = Object(x.f)(i),
                  c = e._getCommunityShareItems(o, r)
                return E.a.createElement(Te.a, { items: c, onCloseRequested: t })
              }),
              g()(d()(e), '_handleCopyLink', function (t) {
                var n = e.props,
                  a = n.addToast,
                  r = n.communityId
                $t.a.setString('https://twitter.com/i/communities/'.concat(r)), t(), a({ text: on })
              }),
              g()(d()(e), '_getMemberContainerInteractiveStyle', function () {
                return Zt.a.generate({
                  backgroundColor: B.a.theme.colors.transparent,
                  color: B.a.theme.colors.white,
                  customHoverBackgroundColor: 'rgba(255,255,255,0.1)',
                })
              }),
              g()(d()(e), '_handleDescriptionClick', function () {
                var t = e.state.shouldShowFullDescription
                e.setState({ shouldShowFullDescription: !t })
              }),
              g()(d()(e), '_getDescriptionOverflow', function (t) {
                void 0 === e.state.hasOverflow && e.setState({ hasOverflow: t })
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.community
                  return e
                    ? E.a.createElement(
                        O.a,
                        { behavioralEventViewType: 'timeline' },
                        E.a.createElement(
                          Ie.a,
                          { style: vn.container },
                          E.a.createElement(
                            Ie.a,
                            null,
                            E.a.createElement(kt, { bannerMedia: e.media }),
                            this._renderCommunityDescription(),
                          ),
                          this._renderTabs(),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      g()(gn, 'contextType', te.a)
      var vn = B.a.create(function (e) {
          return {
            access: { alignSelf: 'stretch', flexDirection: 'row' },
            name: { flexDirection: 'column', justifyContent: 'left', marginBottom: e.spaces.space8 },
            container: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderStyle: 'solid',
            },
            button: { justifyContent: 'right' },
            bottomContainer: { flexDirection: 'row', justifyContent: 'space-between' },
            membersContainer: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              left: -e.spacesPx.space4,
              top: -e.spacesPx.space2,
              padding: e.spaces.space4,
              borderRadius: e.borderRadii.small,
            },
            inviteButton: { marginRight: e.spaces.space8 },
            buttons: { flexDirection: 'row', height: 'fit-content' },
            description: { width: '100%', marginTop: e.spaces.space4, marginBottom: e.spaces.space16 },
            rightSpace: { marginRight: e.spaces.space12 },
          }
        }),
        En = Xt(gn),
        Cn = n('eSoz'),
        _n = n('8Lfv'),
        kn = n('LI/a'),
        Sn = function (e, t) {
          return t.communityId
        },
        wn = function (e, t) {
          var n = Cn.c.select(e, t.communityId)
          return Object(x.f)(null == n ? void 0 : n.role)
        },
        In = Object(w.a)()
          .propsFromState(function () {
            return {
              isCommunityMember: wn,
              rankedTweetsModule: Object(S.createSelector)(Sn, function (e) {
                return Object(kn.b)(e)
              }),
              tweetsModule: Object(S.createSelector)(Sn, function (e) {
                return Object(kn.a)(e)
              }),
            }
          })
          .propsFromActions(function () {
            return {
              clearTimelineCache: _n.a,
              createLocalApiErrorHandler: Object(ve.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_TWEETS'),
            }
          }),
        Tn = n('FIs5'),
        Mn = n('EUHl'),
        xn = n('7BdX'),
        On = n('7JQg'),
        Fn = K.a.c18e3a3e,
        Rn = K.a.d68146c0,
        Ln = K.a.h5245afa,
        An = K.a.f05dbeff,
        Nn = { page: 'community', section: 'home' },
        Kn = { page: 'community', section: 'latest' },
        Hn = { page: 'community', section: 'tweets' },
        jn = In(function (e) {
          var t = E.a.useContext(te.a).featureSwitches.isTrue('c9s_timelines_ranking_enabled'),
            n = e.clearTimelineCache,
            a = e.createLocalApiErrorHandler,
            r = e.isCommunityMember,
            i = e.rankedTweetsModule,
            o = e.tweetsModule,
            c = e.type === Ta.Home ? { module: i, scribeNamespace: Nn } : { module: o, scribeNamespace: Kn },
            l = t ? c : { module: o, scribeNamespace: Hn },
            s = l.module,
            u = l.scribeNamespace
          E.a.useEffect(
            function () {
              n(s).catch(a())
            },
            [n, a, r, s],
          )
          var m = E.a.useCallback(function () {
            return E.a.createElement(Tn.a, { buttonType: 'brandOutlined', header: Fn, message: Rn })
          }, [])
          return E.a.createElement(
            On.b,
            { namespace: u },
            E.a.createElement(
              O.a,
              { behavioralEventViewType: 'tweets' },
              E.a.createElement(F.a, {
                loadingAccessibilityLabel: An,
                module: s,
                newTweetsPillMode: Mn.a.CLIENT,
                prerollDisplayLocation: xn.c.OTHER,
                refreshControl: null,
                renderEmptyState: m,
                title: Ln,
              }),
            ),
          )
        }),
        Pn = n('o3oN'),
        Bn = ['loggedInUser'],
        Dn = Object(w.a)()
          .propsFromState(function () {
            return {
              communityId: C.c,
              community: C.a,
              communityTheme: C.f,
              fetchStatus: C.b,
              membershipsFetchStatus: Pn.d,
              isCommunityMember: C.h,
              joinActionResultType: C.i,
              loggedInUser: Ut.e.selectLoggedInUser,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser,
              n = Nt()(e, Bn)
            return o()({ screenName: t ? t.screen_name : void 0 }, n)
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ve.createLocalApiErrorHandlerWithContextFactory)('COMMUNITIES_SCREEN'),
              fetchCommunityIfNeeded: Cn.c.fetchOneIfNeeded,
              fetchCommunityMemberships: Pn.a,
            }
          })
          .withAnalytics({ page: 'community' }),
        zn = (n('MvUL'), n('zCf4')),
        Un = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Le.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Re.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            E.a.createElement(
              'g',
              null,
              E.a.createElement('path', {
                d: 'M9.24 21.09l1.33 1.33H4.2c-.69 0-1.29-.28-1.71-.81-.43-.56-.6-1.31-.42-2.04.87-3.66 4.24-5.8 8.2-5.8.53 0 1.04.04 1.54.11l-2.57 2.57c-1.29 1.27-1.29 3.35 0 4.64zm1.03-9.06c-1.34 0-2.84-.15-3.79-1.24-.8-.92-1.06-2.34-.8-4.34C6.05 3.67 7.77 2 10.27 2s4.21 1.67 4.59 4.46c.27 2 .01 3.42-.8 4.34-.96 1.09-2.45 1.23-3.79 1.23z',
              }),
              E.a.createElement('path', {
                d: 'M22 18.76c0 .63-.51 1.14-1.14 1.14h-6.54l1.14 1.14c.45.45.45 1.17 0 1.62-.22.22-.52.33-.8.33-.29 0-.59-.11-.81-.33l-3.1-3.1c-.45-.45-.45-1.16 0-1.61l3.1-3.1c.45-.45 1.16-.45 1.61 0 .45.45.45 1.16 0 1.61l-1.15 1.15h6.55c.63.02 1.14.52 1.14 1.15z',
              }),
            ),
          )
        }
      Un.metadata = { width: 24, height: 24 }
      var Vn = Un,
        Wn = n('wpLu'),
        Xn = K.a.bf359e0d,
        Qn = K.a.e8fcdd3a,
        qn = K.a.h54d99da,
        Gn = K.a.f30c8202,
        Yn = K.a.ca7eeabf,
        Jn = K.a.acae4034,
        Zn = K.a.e2186ee2,
        $n = K.a.j24c37b2,
        ea = E.a.memo(function (e) {
          var t = e.community,
            n = t.id_str,
            a = Object(zn.f)(),
            r = E.a.useCallback(
              function () {
                a.replace('/i/communities/'.concat(n, '/'))
              },
              [a, n],
            ),
            i = E.a.createElement(
              Ie.a,
              { accessibilityRole: 'list', style: ta.rulesContainer },
              t.rules.map(function (e) {
                return E.a.createElement(
                  J.b,
                  { accessibilityRole: 'listitem', color: 'gray700', key: e.rest_id, style: ta.rule },
                  e.name,
                )
              }),
            )
          return E.a.createElement(
            $e.a,
            {
              actionLabel: $n,
              graphicDisplayMode: 'none',
              headline: Xn,
              onAction: r,
              onClose: r,
              subtext: Qn,
              withCloseButton: !0,
            },
            E.a.createElement(
              Ie.a,
              { style: ta.infoItemsContainer },
              E.a.createElement($.a, {
                containerStyle: ta.itemContainer,
                items: [
                  { label: qn, description: Gn, decoration: E.a.createElement(Vn, { style: ta.decorationContainer }) },
                  { label: Yn, decoration: E.a.createElement(Wn.a, { style: ta.decorationContainer }), description: i },
                  { label: Jn, description: Zn, decoration: E.a.createElement(Ne, { style: ta.decorationContainer }) },
                ],
              }),
            ),
          )
        }),
        ta = B.a.create(function (e) {
          return {
            infoItemsContainer: { marginBottom: e.spaces.space32 },
            itemContainer: { paddingHorizontal: 0 },
            decorationContainer: {
              color: e.colors.text,
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space20,
            },
            rulesContainer: { marginTop: e.spaces.space4, marginLeft: e.spaces.space8 },
            rule: { display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside' },
          }
        }),
        na = ea,
        aa = n('dwig'),
        ra = n('MDbM'),
        ia = n('0+qk'),
        oa = n('/de5'),
        ca = (n('FtFR'), n('hBvt'), n('/ekK')),
        la = Object(w.a)()
          .propsFromState(function () {
            return { flags: ca.b }
          })
          .propsFromActions(function () {
            return { setFlag: ca.c, retrieveFlagsIfNeeded: ca.a }
          }),
        sa = n('hOZg'),
        ua = n('WtWS'),
        ma = n('0ULw'),
        da = K.a.a841c4ea,
        pa = K.a.fd36e4f7,
        ya = K.a.b192b58b,
        fa = K.a.gd30278f,
        ha = K.a.cbdddb09,
        ba = K.a.h5890b1a,
        ga = [
          {
            flag: 'setup_clicked_rules',
            title: K.a.b4a6fac9,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/rules') }
            },
          },
          {
            flag: 'setup_clicked_personalization',
            title: K.a.a01e1a7c,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/tools/settings') }
            },
          },
          {
            flag: 'setup_clicked_invite',
            title: K.a.b139b549,
            link: function (e) {
              return { pathname: '/i/communities/'.concat(e, '/invite') }
            },
          },
          {
            flag: 'setup_clicked_tweet',
            title: K.a.j538604d,
            link: function (e) {
              return {
                pathname: '/compose/tweet',
                state: {
                  text: ''.concat(fa, ' https://twitter.com/i/communities/').concat(e),
                  positionCursorAtBeginning: !0,
                },
              }
            },
          },
        ],
        va = E.a.memo(function (e) {
          var t = e.community.id_str,
            n = e.flags,
            a = e.retrieveFlagsIfNeeded,
            r = e.setFlag,
            i = E.a.useContext(te.a).featureSwitches.isTrue('c9s_community_creation_setup_checklist_enabled'),
            o = Object(zn.f)()
          E.a.useEffect(
            function () {
              i && a(t)
            },
            [t, i, a],
          )
          var c = E.a.useCallback(
            function () {
              r(t, 'setup_show_checklist', !1)
            },
            [t, r],
          )
          if (!n.setup_show_checklist || !i) return null
          var l = function (e) {
              r(t, e.flag, !0).then(function () {
                o.push(e.link(t))
              })
            },
            s = function (e, t) {
              13 === t.keyCode && l(e)
            }
          return E.a.createElement(
            Ie.a,
            { style: Ea.wrapper },
            E.a.createElement(Me.a, {
              accessibilityLabel: ya,
              icon: E.a.createElement(sa.a, { style: Ea.close }),
              onClick: c,
              pullRight: !0,
              size: 'medium',
              style: Ea.dismiss,
              type: 'brandText',
            }),
            E.a.createElement(J.b, { size: 'title3', style: Ea.headline, weight: 'bold' }, da),
            E.a.createElement(J.b, { style: Ea.subtext }, pa),
            E.a.createElement(
              Ie.a,
              { accessibilityRole: 'list', style: Ea.list },
              ga.map(function (e) {
                var t = Boolean(n[e.flag])
                return E.a.createElement(
                  Ie.a,
                  {
                    accessibilityRole: 'listitem',
                    focusable: !t,
                    key: e.flag,
                    onClick: t ? void 0 : l.bind(null, e),
                    onKeyPress: t ? void 0 : s.bind(null, e),
                    style: [Ea.entry, t ? Ea.completedEntry : Ea.uncompletedEntry],
                  },
                  E.a.createElement(J.b, { weight: 'bold' }, e.title),
                  t
                    ? E.a.createElement(ua.a, { accessibilityLabel: ha, style: Ea.iconCompleted })
                    : E.a.createElement(ma.a, { accessibilityLabel: ba, style: Ea.iconUncompleted }),
                )
              }),
            ),
          )
        }),
        Ea = B.a.create(function (e) {
          return {
            wrapper: {
              padding: e.spaces.space32,
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.gray200,
              color: e.colors.text,
            },
            dismiss: { marginLeft: 'auto' },
            headline: { paddingBottom: e.spaces.space4 },
            subtext: { color: e.colors.gray700, paddingBottom: e.spaces.space16 },
            close: { color: e.colors.text },
            list: { gap: e.spaces.space16 },
            entry: { display: 'flex', flexDirection: 'row', gap: e.spaces.space8, listStylePosition: 'inside' },
            completedEntry: {},
            uncompletedEntry: { cursor: 'pointer' },
            iconCompleted: { marginLeft: 'auto', color: e.colors.green500 },
            iconUncompleted: { marginLeft: 'auto', color: e.colors.gray300 },
          }
        }),
        Ca = la(va),
        _a = n('VS6U'),
        ka = n('QRqA'),
        Sa = n('Qwev'),
        wa = n('mw9i'),
        Ia = { type: 'serversideContextKey', serversideContextType: 'community' },
        Ta = Object.freeze({ Home: 'home', Latest: 'latest' }),
        Ma = K.a.a7c2e06c,
        xa = (function (e) {
          y()(n, e)
          var t = h()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(d()(e), '_getTweetButtonLocationState', function () {
                return { selectedCommunityId: e.props.communityId, defaultText: '' }
              }),
              g()(
                d()(e),
                '_getClientEntity',
                Object(Qt.a)(function (e) {
                  return o()(o()({}, Ia), {}, { serversideContextId: e })
                }),
              ),
              g()(
                d()(e),
                '_getWelcomeEducationParams',
                Object(Qt.a)(function (e, t) {
                  return { forSingleCommunity: { canJoinCommunity: 'CommunityJoinAction' === t, theme: e.theme } }
                }),
              ),
              g()(d()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.community,
                  a = t.communityId,
                  r = t.fetchStatus,
                  i = t.history,
                  o = t.joinActionResultType,
                  c = t.location,
                  l = t.match,
                  s = (null == n ? void 0 : n.role) === x.a.Admin && void 0 !== c.query.show_creation_summary,
                  u = e._isAllowedToTweet
                    ? E.a.createElement(ia.a, { getLocationState: e._getTweetButtonLocationState, history: i })
                    : null
                return a && r === ra.a.LOADING
                  ? E.a.createElement(Sa.a, { style: Oa.topMargin })
                  : a && null != n && n.name && r === ra.a.LOADED
                  ? E.a.createElement(
                      aa.a,
                      { component: wa.a, fab: u },
                      E.a.createElement(ka.a, e._getWelcomeEducationParams(n, o)),
                      s && E.a.createElement(na, { community: n }),
                      e._renderCommunityDetail(),
                      E.a.createElement(Ca, { community: n }),
                      E.a.createElement(
                        zn.b,
                        { exact: !0, path: '/i/communities/'.concat(a, '/about') },
                        E.a.createElement(he, { communityId: a, match: l }),
                      ),
                      E.a.createElement(
                        zn.d,
                        null,
                        E.a.createElement(
                          zn.b,
                          { exact: !0, path: '/i/communities/'.concat(a, '/') },
                          E.a.createElement(jn, { communityId: a, location: c, match: l, type: Ta.Home }),
                        ),
                        E.a.createElement(
                          zn.b,
                          { path: '/i/communities/'.concat(a, '/latest') },
                          E.a.createElement(jn, { communityId: a, location: c, match: l, type: Ta.Latest }),
                        ),
                      ),
                    )
                  : E.a.createElement(oa.b, { history: i, location: c, match: l })
              }),
              g()(d()(e), '_renderCommunityDetail', function () {
                var t = e.props,
                  n = t.communityId,
                  a = t.history,
                  r = t.match
                return n ? E.a.createElement(En, { communityId: n, history: a, match: r }) : null
              }),
              g()(d()(e), '_handleFetchIfNeeded', function () {
                var t = e.props,
                  n = t.communityId,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetchCommunityIfNeeded,
                  i = t.fetchCommunityMemberships,
                  o = t.membershipsFetchStatus
                n && r(n).catch(a({})), o === Se.a.NONE && i().catch(a())
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchIfNeeded()
                },
              },
              {
                key: '_isAllowedToTweet',
                get: function () {
                  var e = this.props.isCommunityMember
                  return this.context.featureSwitches.isTrue('c9s_participation_enabled') && e
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.community,
                    n = e.communityId,
                    a = e.history,
                    r = e.screenName,
                    i = (null == t ? void 0 : t.rules) && (null == t ? void 0 : t.rules.length) > 0,
                    o = null == t ? void 0 : t.name,
                    c = n
                      ? E.a.createElement(Ge, {
                          canModerate: Object(x.c)(null == t ? void 0 : t.role),
                          communityId: n,
                          userRole: null == t ? void 0 : t.role,
                        })
                      : null
                  return E.a.createElement(
                    be.a,
                    { clientEntity: this._getClientEntity(n || ''), viewType: 'community' },
                    E.a.createElement(_a.a, {
                      backLocation: r && '/'.concat(r, '/communities'),
                      composeOptions: this._getTweetButtonLocationState(),
                      documentTitle: o ? Ma({ communityName: o }) : '',
                      history: a,
                      primaryContent: this._renderPrimaryContent(),
                      rightControl: c,
                      sidebarContent: E.a.createElement(ge.a, { communityId: n, withCommunityRules: i }),
                      title: o || null,
                      withTweetButton: this._isAllowedToTweet,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(E.a.Component)
      g()(xa, 'contextType', te.a)
      var Oa = B.a.create(function (e) {
          return { topMargin: { marginTop: e.spaces.space64 } }
        }),
        Fa = Dn(xa)
      t.default = Fa
    },
    U0Qk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('v6aA'),
        l = n('p+r5'),
        s = n('3XMw'),
        u = n.n(s),
        m = n('Ig1G'),
        d = u.a.e2df7cf1,
        p = u.a.be9bb312,
        y = u.a.e988475f,
        f = function (e) {
          var t = e.autoFocus,
            n = void 0 !== t && t,
            a = e.communityPurpose,
            i = e.onChange,
            s = o.a.useState(void 0),
            u = r()(s, 2),
            f = u[0],
            h = u[1],
            b = o.a.useState(!1),
            g = r()(b, 2),
            v = g[0],
            E = g[1],
            C = o.a.useContext(c.a).featureSwitches.getNumberValue('c9s_max_community_description_length', 160),
            _ = o.a.useCallback(
              function (e) {
                var t = e.target.value,
                  n = !Object(m.g)(t, 3, C)
                n && h(y({ minCharacterCount: 3, maxCharacterCount: C })), E(n), i(t, n)
              },
              [C, h, i],
            )
          return o.a.createElement(l.a, {
            autoComplete: 'off',
            autoCorrect: !1,
            autoFocus: n,
            calculateLength: m.b,
            errorText: f,
            helperText: p,
            invalid: v,
            label: d,
            multiline: !0,
            name: 'typedCommunityPurpose',
            numberOfLines: 3,
            onChange: _,
            spellCheck: 'false',
            validLength: C,
            value: a,
          })
        }
    },
    U3Z9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateCommunityModal', function () {
          return x
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('KqXw'), n('MvUL'), n('ERkP')),
        o = n.n(i),
        c = n('+Kfv'),
        l = n('ROT1'),
        s = n('U0Qk'),
        u = n('eSoz'),
        m = n('RqPI'),
        d = n('rxPX'),
        p = Object(d.a)()
          .propsFromState(function () {
            return { communitiesActions: m.f }
          })
          .propsFromActions(function () {
            return { createCommunity: u.b }
          }),
        y = n('jHSc'),
        f = n('3XMw'),
        h = n.n(f),
        b = n('0weh'),
        g = n('5FtR'),
        v = n('MWbm'),
        E = n('/yvb'),
        C = n('4zmP'),
        _ = n('t62R'),
        k = n('rHpw'),
        S = h.a.i6e7e298,
        w = h.a.a226497c,
        I = h.a.c9d56b71,
        T = h.a.fc2a5c92,
        M = h.a.c1ad5a11,
        x = o.a.memo(function (e) {
          var t = e.communitiesActions,
            n = e.createCommunity,
            a = e.history,
            i = o.a.useState(!0),
            u = r()(i, 2),
            m = u[0],
            d = u[1],
            p = o.a.useState(!1),
            f = r()(p, 2),
            h = f[0],
            k = f[1],
            x = m || h,
            F = o.a.useState(''),
            R = r()(F, 2),
            L = R[0],
            A = R[1],
            N = o.a.useState(''),
            K = r()(N, 2),
            H = K[0],
            j = K[1],
            P = o.a.useState(null),
            B = r()(P, 2),
            D = B[0],
            z = B[1],
            U = o.a.useCallback(function (e, t) {
              A(e), d(t)
            }, []),
            V = o.a.useCallback(function (e, t) {
              j(e), 0 === e.length ? k(!1) : k(t)
            }, []),
            W = o.a.useCallback(
              function () {
                z(null),
                  n(L, { description: H })
                    .then(function (e) {
                      if ('Community' === (null == e ? void 0 : e.type)) {
                        var t = null == e ? void 0 : e.normalized.result
                        'string' == typeof t && a.replace('/i/communities/'.concat(t, '?show_creation_summary'))
                      } else 'CreateError' === (null == e ? void 0 : e.type) && z(e)
                    })
                    .catch(function (e) {
                      z({ error: 'GraphQL error', reason: e })
                    })
              },
              [L, H, n, a],
            )
          if (null == t || !t.create) return o.a.createElement(g.a, { to: '/home' })
          var X = o.a.createElement(E.a, { disabled: x, onClick: W, size: 'small', type: 'brandFilled' }, S),
            Q = D
              ? o.a.createElement(
                  v.a,
                  { style: O.error },
                  o.a.createElement(C.a, { Icon: b.a, headline: T, text: M, type: 'danger' }),
                )
              : void 0
          return o.a.createElement(
            c.a,
            { viewType: 'community' },
            o.a.createElement(
              y.b,
              {
                behavioralEventViewType: 'create_community',
                containerStyle: O.root,
                history: a,
                rightControl: X,
                title: w,
              },
              o.a.createElement(
                o.a.Fragment,
                null,
                Q,
                o.a.createElement(_.b, { color: 'gray700', style: O.text }, I),
                o.a.createElement(l.a, { autoFocus: !0, communityName: L, onChange: U }),
                o.a.createElement(s.a, { communityPurpose: H, onChange: V }),
              ),
            ),
          )
        }),
        O = k.a.create(function (e) {
          return {
            error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 },
            root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 },
            text: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        F = p(x)
      t.default = F
    },
    XtoV: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        l = n.n(c),
        s = n('/yvb'),
        u = n('3XMw'),
        m = n.n(u),
        d = n('pwey'),
        p = ['community'],
        y = m.a.b139b549,
        f = l.a.createElement(d.a, null),
        h = l.a.memo(function (e) {
          var t = e.community,
            n = o()(e, p)
          if (!t || 'CommunityInvitesUnavailable' === t.invites_result.__typename) return null
          var a = '/i/communities/'.concat(t.id_str, '/invite')
          return l.a.createElement(s.a, r()({ accessibilityLabel: y, icon: f, link: a, type: 'primaryText' }, n))
        })
      t.a = h
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        l = n.n(c),
        s = n('v6aA'),
        u = n('XOJV'),
        m = n('eSoz'),
        d = n('rxPX'),
        p = n('0KEI'),
        y = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            a = n && u.a.select(e, n)
          return a ? Object(m.g)(e, a) : void 0
        },
        h = Object(d.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: u.a.createHydratedTweetSelector(y) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: m.c.fetchOneIfNeeded,
            }
          }),
        b = n('YeIG'),
        g = n('uCxL'),
        v = n('x5Pi'),
        E = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        C = h(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            c = (e.tweetId, o()(e, E)),
            u = l.a.useContext(s.a),
            m = u.featureSwitches,
            d = u.loggedInUserId,
            p = null == i ? void 0 : i.community_id_str
          l.a.useEffect(
            function () {
              p && Object(b.a)(t) && a(p).catch(n())
            },
            [t, p, n, a],
          )
          var y = m.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(v.f)(i, d, t),
            h = f && Object(v.e)(f),
            C = m.isTrue('responsive_web_reactions_enabled')
          return l.a.createElement(
            g.a,
            r()({}, c, {
              loggedInUserId: d,
              shouldShowAltLabelAlways: y,
              socialContextProps: h,
              tweet: i,
              withReactions: C,
            }),
          )
        })
      t.a = C
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        i = n('Ud88'),
        o = n('aQQo'),
        c = o.loadQuery,
        l = o.useTrackLoadQueryInRender,
        s = n('ERkP'),
        u = s.useCallback,
        m = s.useEffect,
        d = s.useRef,
        p = s.useState,
        y = n('K1lQ').getRequest,
        f = { kind: 'NullQueryReference' }
      function h(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== y(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : f,
          o = i()
        l()
        var s = r(),
          y = d(new Set([n])),
          b = p(function () {
            return n
          }),
          g = b[0],
          v = b[1],
          E = p(function () {
            return n
          }),
          C = E[0],
          _ = E[1]
        n !== C && (y.current.add(n), _(n), v(n))
        var k = u(
            function () {
              s.current && (y.current.add(f), v(f))
            },
            [s],
          ),
          S = u(
            function (t, n) {
              var a =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (s.current) {
                var r,
                  i = c(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : o, e, t, a)
                y.current.add(i), v(i)
              }
            },
            [o, e, v, s],
          ),
          w = d(!1)
        return (
          m(function () {
            return function () {
              w.current = !0
            }
          }, []),
          m(
            function () {
              if (!0 === w.current)
                return (
                  (w.current = !1),
                  void (
                    'NullQueryReference' !== g.kind &&
                    S(g.variables, { fetchPolicy: g.fetchPolicy, networkCacheConfig: g.networkCacheConfig })
                  )
                )
              var t = y.current
              if (s.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var i = n.value
                    if (i === g) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (h(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
              }
            },
            [g, s, S, e],
          ),
          m(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(y.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (h(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
                  }
                } catch (i) {
                  n.e(i)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === g.kind ? null : g, S, k]
        )
      }
    },
    cI4y: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        o,
        c,
        l,
        s,
        u = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'count' },
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'membersSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: 'members_slice',
                    args: [(i = { kind: 'Variable', name: 'count', variableName: 'count' })],
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: '__CommunityMembers_Query_members_slice_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            args: [{ kind: 'Variable', name: 'communityId', variableName: 'communityId' }],
                            kind: 'FragmentSpread',
                            name: 'communityPeopleSliceItem_userResult',
                          },
                          (o = {
                            kind: 'ClientExtension',
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null },
                            ],
                          }),
                        ],
                        storageKey: null,
                      },
                      (c = {
                        alias: null,
                        args: null,
                        concreteType: 'SliceInfo',
                        kind: 'LinkedField',
                        name: 'slice_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'membersSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (l = [i, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: 'members_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'result',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                                    kind: 'ScalarField',
                                    name: 'community_role',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ApiUser',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'id_str',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'followed_by',
                                        storageKey: null,
                                      },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'profile_image_url_https',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'protected',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'screen_name',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'verified',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    filters: null,
                                    handle: 'defaultScalars',
                                    key: '',
                                    kind: 'LinkedHandle',
                                    name: 'legacy',
                                  },
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          o,
                        ],
                        storageKey: null,
                      },
                      c,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: l,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityMembers_Query_members_slice',
                    kind: 'LinkedHandle',
                    name: 'members_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  s,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'OwzlW0I_RTCIsN-W8XScdQ',
            metadata: { sliceInfoPath: ['community', 'members_slice', 'slice_info'] },
            name: 'membersSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = 'd5eb23d40bcb19e36e32afc95695f334'), (t.default = u)
    },
    'cz/h': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesDiscoveryScreen', function () {
          return x
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        p = n('KEM+'),
        y = n.n(p),
        f = (n('2G9S'), n('ERkP')),
        h = n.n(f),
        b = n('es0u'),
        g = n('WpDa'),
        v = n('ZNT5'),
        E = Object(v.a)({
          timelineId: 'communitiesDiscoveryTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunityDiscoveryTimeline
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_COMMUNITIES_DISCOVERY_TIMELINE',
          perfKey: 'communitiesDiscoveryTimeline',
          formatResponse: g.a,
        }),
        C = n('OUEC'),
        _ = n('3XMw'),
        k = n.n(_),
        S = n('oQhu'),
        w = n('yoO3'),
        I = n('fTQJ'),
        T = n('VS6U'),
        M = k.a.cb6adb1f,
        x = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(l()(e), '_renderPrimaryContent', function () {
                var t = e._getModule()
                return h.a.createElement(I.a, { entryConfiguration: C.a, module: t, refreshControl: null, title: M })
              }),
              y()(
                l()(e),
                '_getModule',
                Object(S.a)(function () {
                  return E
                }),
              ),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.history
                  return h.a.createElement(
                    w.a,
                    { behavioralEventViewType: 'discover' },
                    h.a.createElement(T.a, {
                      backLocation: '/',
                      history: e,
                      primaryContent: this._renderPrimaryContent(),
                      sidebarContent: h.a.createElement(b.a, null),
                      title: M,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      t.default = x
    },
    fS8x: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('2VqO'),
        y = n.n(p),
        f = n('KEM+'),
        h = n.n(f),
        b = n('/NU0'),
        g = n('rxPX'),
        v = n('AspN'),
        E = function (e, t) {
          return t.media ? t.media : Object(b.a)(t.mediaId) ? Object(v.k)(e, t.mediaId)[0] : void 0
        },
        C = function (e, t) {
          return void 0 !== t.mediaId ? t.mediaId : t.media ? t.media.id : null
        },
        _ = Object(g.a)()
          .propsFromState(function () {
            return { media: E, mediaId: C }
          })
          .propsFromActions(function () {
            return { processMedia: v.f, updateMediaUpload: v.o }
          })
          .withAnalytics({ page: 'media', section: 'edit' }),
        k = n('jHSc'),
        S = n('3XMw'),
        w = n.n(S),
        I = n('EeFI'),
        T = 'applyButton',
        M = n('/yvb'),
        x = n('rHpw'),
        O = w.a.gd80afba,
        F = w.a.a753a87f,
        R = (function (e) {
          d()(n, e)
          var t = y()(n)
          function n(e) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e)),
              h()(u()(a), '_getMedia', function () {
                var e = a.props.media
                return e && e.mediaFile && e.mediaFile.isImage ? e : null
              }),
              h()(u()(a), '_renderAppBarRightControl', function () {
                var e = a.state.isProcessing
                return r.a.createElement(
                  M.a,
                  { disabled: e, onPress: a._handleApplyButtonClick, size: 'small', testID: T, type: 'primaryFilled' },
                  F,
                )
              }),
              h()(u()(a), '_handleBackClick', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.onCancel
                t.scribe({ action: 'cancel' }), n && n()
              }),
              h()(u()(a), '_handleApplyButtonClick', function () {
                var e = a.props.onCropDone,
                  t = a._cropper.current
                if (t) {
                  var n = a.props,
                    r = n.analytics,
                    i = n.media,
                    o = n.mediaId,
                    c = n.onDone,
                    l = n.processMedia,
                    s = n.updateMediaUpload
                  a.setState({ isProcessing: !0 })
                  var u = t.getCropData(),
                    m = (i || {}).originalMediaFile,
                    d = !m || (0 === u.top && 0 === u.left && u.width === m.width && u.height === m.height)
                  Object(b.a)(o) &&
                    (e
                      ? (e(u), c())
                      : (s({ id: o, cropData: d ? void 0 : u }),
                        l(o).then(function () {
                          a.setState({ isProcessing: !1 }), r.scribe({ action: 'done' }), c()
                        })))
                }
              }),
              (a.state = { isProcessing: !1 }),
              (a._cropper = r.a.createRef()),
              e.media || e.onCancel(),
              a
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.defaultAspectRatio,
                    n = e.history,
                    a = e.title,
                    i = e.withAspectRatioOptions,
                    o = e.withZoomControl,
                    c = this._getMedia()
                  return r.a.createElement(
                    k.b,
                    {
                      backButtonType: 'back',
                      containerStyle: L.root,
                      documentTitle: a || O,
                      history: n,
                      onBackClick: this._handleBackClick,
                      rightControl: this._renderAppBarRightControl(),
                      title: a || O,
                    },
                    r.a.createElement(I.a, {
                      defaultAspectRatio: t,
                      media: c,
                      ref: this._cropper,
                      withAspectRatioOptions: i,
                      withZoomControl: o,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component),
        L = x.a.create(function (e) {
          return { root: { flexShrink: 1, height: 650 } }
        }),
        A = _(R),
        N = n('X8FW'),
        K = x.a.create(function (e) {
          return { modal: { width: 600, maxWidth: '90vw' } }
        })
      t.a = function (e) {
        return r.a.createElement(
          N.b,
          { clickMaskToClose: !1, modalSize: 'fitChildren', style: K.modal },
          r.a.createElement(A, e),
        )
      }
    },
    gDCe: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('Ig1G'),
        o = n('3XMw'),
        c = n.n(o),
        l = n('Nh1N'),
        s = n('MWbm'),
        u = n('4zmP'),
        m = n('rHpw'),
        d = c.a.b6e22e15,
        p = c.a.d17c10d9,
        y = c.a.a1ecaf33,
        f = r.a.memo(function (e) {
          var t,
            n = e.community
          return n && n.role === i.a.Admin
            ? r.a.createElement(
                s.a,
                { style: h.info },
                r.a.createElement(u.a, {
                  Icon: l.a,
                  action: {
                    label: y,
                    link: {
                      pathname: '/messages/compose',
                      query: {
                        recipient_id: '1433894099178774532',
                        text:
                          ((t = n.id_str),
                          'Hi, my community is (https://twitter.com/i/communities/'.concat(
                            t,
                            ') and I would like to add the following accounts as moderators: ',
                          )),
                      },
                    },
                  },
                  headline: d,
                  text: p,
                  type: 'primary',
                }),
              )
            : null
        }),
        h = m.a.create(function (e) {
          return { info: { padding: e.spaces.space12 } }
        })
      t.a = f
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        l = n.n(c),
        s = n('t62R'),
        u = n('I4+6'),
        m = n('cm6r'),
        d = n('rHpw'),
        p = n('MWbm'),
        y = ['align', 'color', 'label'],
        f = d.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          a = e.color,
          i = e.label,
          c = o()(e, y),
          h = u.a.generate({
            backgroundColor: d.a.theme.colors.transparent,
            color: d.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          p.a,
          { style: f.container },
          l.a.createElement(
            m.a,
            r()({}, c, { interactiveStyles: h, style: f.root }),
            l.a.createElement(s.b, { align: n, color: a }, i),
          ),
        )
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      var a = n('0vv5'),
        r = 500,
        i = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(a).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    krnS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return D
      })
      var a,
        r,
        i,
        o = n('ERkP'),
        c = n.n(o),
        l = n('v6aA'),
        s = n('WpDa'),
        u = n('ZNT5'),
        m = n('Ig1G'),
        d = n('FIs5'),
        p = n('3XMw'),
        y = n.n(p),
        f = (n('enFi'), n('TEoO')),
        h = n('Fr3L'),
        b = (n('ho0z'), n('IMA+')),
        g = n('jAXQ'),
        v = n.n(g),
        E = function (e) {
          var t = v()(void 0 !== a ? a : (a = n('tgdH')), e.userResult).result
          if (!t || 'User' !== t.__typename) return null
          var r = t.community_role,
            i = t.legacy,
            o = r === m.a.Admin || r === m.a.Moderator
          return c.a.createElement(b.a, {
            avatarUri: (null == i ? void 0 : i.profile_image_url_https) || '',
            displayMode: 'UserDetailed',
            displayNameLabel: o ? r : void 0,
            isFollowedBy: null == i ? void 0 : i.followed_by,
            isProtected: null == i ? void 0 : i.protected,
            isVerified: null == i ? void 0 : i.verified,
            name: (null == i ? void 0 : i.name) || '',
            screenName: (null == i ? void 0 : i.screen_name) || '',
            userId: (null == i ? void 0 : i.id_str) || '',
            withFollowsYou: !0,
          })
        },
        C = n('DQzJ'),
        _ = { context: 'members' },
        k = void 0 !== r ? r : (r = n('cI4y')),
        S = function (e) {
          return e.__id
        },
        w = function (e) {
          return c.a.createElement(E, { userResult: e })
        },
        I = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(C.a)(k, { communityId: t }),
            r = a.data,
            i = a.fetchNext,
            o = r.community.members_slice.items_results
          return c.a.createElement(f.a, {
            cacheKey: 'SlicesRelay_CommunityMembersList_'.concat(t),
            identityFunction: S,
            items: o,
            noItemsRenderer: n,
            onNearEnd: i,
            renderer: w,
          })
        },
        T = function (e) {
          return c.a.createElement(h.a, { errorConfig: _ }, c.a.createElement(I, e))
        },
        M = n('oQhu'),
        x = { context: 'members' },
        O = void 0 !== i ? i : (i = n('w9f9')),
        F = function (e) {
          return e.__id
        },
        R = function (e) {
          return c.a.createElement(E, { userResult: e })
        },
        L = function (e) {
          var t = e.communityId,
            n = e.renderEmptyState,
            a = Object(C.a)(O, { communityId: t }),
            r = a.data,
            i = a.fetchNext,
            o = r.community.moderators_slice.items_results
          return c.a.createElement(f.a, {
            cacheKey: 'SlicesRelay_CommunityModeratorsList_'.concat(t),
            identityFunction: F,
            items: o,
            noItemsRenderer: n,
            onNearEnd: i,
            renderer: R,
          })
        },
        A = function (e) {
          return c.a.createElement(h.a, { errorConfig: x }, c.a.createElement(L, e))
        },
        N = n('fTQJ'),
        K = y.a.cdd87523,
        H = y.a.cca5191f,
        j = y.a.e442bbb4,
        P = y.a.e9488b0d,
        B = y.a.j43fea20,
        D = { Moderators: 'Moderators', Members: 'Members' },
        z = Object(M.a)(function (e) {
          return (function (e) {
            return Object(u.a)({
              timelineId: 'communityMembers-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityMembers
              },
              getEndpointParams: function (t) {
                var n = t.count,
                  a = t.cursor
                return { count: n, cursor: 'string' == typeof a ? a : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MEMBERS_TIMELINE',
              perfKey: 'communityMembers',
              formatResponse: s.a,
            })
          })(e)
        }),
        U = Object(M.a)(function (e) {
          return (function (e) {
            return Object(u.a)({
              timelineId: 'communityModerators-'.concat(e),
              getEndpoint: function (e) {
                return e.Communities.fetchCommunityModerators
              },
              getEndpointParams: function (t) {
                var n = t.count,
                  a = t.cursor
                return { count: n, cursor: 'string' == typeof a ? a : void 0, communityId: e }
              },
              context: 'FETCH_COMMUNITY_MODERATORS_TIMELINE',
              perfKey: 'communityModerators',
              formatResponse: s.a,
            })
          })(e)
        }),
        V = function () {
          return c.a.createElement(d.a, { header: K, message: H })
        }
      t.b = function (e) {
        var t = c.a.useContext(l.a).featureSwitches.isTrue('c9s_members_list_v2_enabled'),
          n = e.communityId,
          a = e.mode,
          r = e.userRole,
          i = a === D.Moderators
        if (t && r === m.a.Admin)
          return i
            ? c.a.createElement(A, { communityId: n, renderEmptyState: V })
            : c.a.createElement(T, { communityId: n, renderEmptyState: V })
        var o = i ? U(n) : z(n),
          s = i ? P : B
        return c.a.createElement(N.a, { loadingAccessibilityLabel: s, module: o, renderEmptyState: V, title: j })
      }
    },
    l3Hs: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityToolsScreen', function () {
          return pe
        })
      n('KqXw'), n('WNMA')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('Ig1G'),
        c = n('EPsT'),
        l = n('eSoz'),
        s = n('rxPX'),
        u = n('0KEI'),
        m = n('R5kW'),
        d = function (e, t) {
          var n,
            a = Object(m.b)(e, t.communityId)
          return null !== (n = null == a ? void 0 : a.tweet_case_count) && void 0 !== n ? n : 0
        },
        p = function (e, t) {
          var n = Object(l.h)(e, t.communityId)
          return 'CommunityJoinRequests' === (null == n ? void 0 : n.__typename) ? n.pending_join_request_count : 0
        },
        y = function (e, t) {
          return Object(m.c)(e, t.communityId)
        },
        f = Object(s.a)()
          .propsFromState(function () {
            return { count: d, joinRequestCount: p, moderationFetchStatus: y }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_TOOLS'),
              fetchCommunityModerationData: m.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'tools' }),
        h = n('kGix'),
        b = n('3XMw'),
        g = n.n(b),
        v = n('KQzH'),
        E = n('yoO3'),
        C = n('mWs5'),
        _ = n('MWbm'),
        k = n('rHpw'),
        S = n('Znyr'),
        w = n('6vad'),
        I = n('csss'),
        T = n('OOKO'),
        M = n('zIWA'),
        x = n('yiKp'),
        O = n.n(x),
        F = n('Lsrn'),
        R = n('k/Ka'),
        L = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(R.a)(
            'svg',
            O()(
              O()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [F.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.192 9.3c-.205 0-.403-.085-.546-.236l-2.66-2.824c-.283-.302-.27-.776.032-1.06.303-.286.776-.27 1.06.03L19 7.25 22.157.877c.184-.37.63-.52 1.005-.34.372.185.523.635.34 1.006L19.864 8.88c-.108.22-.318.374-.562.41-.036.006-.073.01-.11.01zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z',
              }),
            ),
          )
        }
      L.metadata = { width: 24, height: 24 }
      var A = L,
        N = n('M2x3'),
        K = n('SNyS'),
        H = n('S+H3'),
        j = n('PU7B'),
        P = g.a.dce5e1b3,
        B = g.a.c5d8c93d,
        D = g.a.c8c7f9fc,
        z = g.a.c045c7b6,
        U = g.a.a87df2ee,
        V = g.a.dc6ce7b4,
        W = g.a.gfca5254,
        X = g.a.bb081ea1,
        Q = g.a.h6beb5fa,
        q = g.a.e3f04700,
        G = g.a.efc26607,
        Y = g.a.gfccba44,
        J = g.a.adfcc3cd,
        Z = g.a.d0330d9c,
        $ = g.a.fd67f7c8,
        ee = g.a.gc00d212,
        te = g.a.a997eca0,
        ne = 'Leave moderation team',
        ae = 'No longer wish to be a moderator?',
        re =
          'By leaving the moderation team, you will no longer have access to Moderator Tools. You will also have to be re-invited as a moderator.',
        ie = 'Leave moderation role',
        oe = k.a.create(function (e) {
          return { thumbnail: { color: e.colors.gray700 } }
        }),
        ce = r.a.createElement(M.a, { style: oe.thumbnail }),
        le = r.a.createElement(A, { style: oe.thumbnail }),
        se = r.a.createElement(N.a, { style: oe.thumbnail }),
        ue = r.a.createElement(K.a, { style: oe.thumbnail }),
        me = r.a.createElement(H.a, { style: oe.thumbnail }),
        de = r.a.createElement(j.a, { style: oe.thumbnail }),
        pe = function (e) {
          var t = r.a.useContext(i.a).featureSwitches,
            n = e.community,
            a = e.communityId,
            l = e.count,
            s = e.createLocalApiErrorHandler,
            u = e.fetchCommunityModerationData,
            m = e.joinRequestCount,
            d = e.match,
            p = e.moderationFetchStatus,
            y = s(),
            f = t.isTrue('c9s_moderation_enabled'),
            b = t.isTrue('c9s_rule_management_enabled'),
            g = t.isTrue('c9s_request_to_join_enabled'),
            k = t.isTrue('c9s_edit_moderators_enabled')
          r.a.useEffect(
            function () {
              p === h.a.NONE && f && u(a).catch(y)
            },
            [y, a, u, p, f],
          )
          var M = r.a.useCallback(
              function () {
                return f && l > 0
                  ? r.a.createElement(S.a, {
                      count: l,
                      standalone: !0,
                      truncatedCountFormatter: Q,
                      unreadCountLabel: q,
                      withBorder: !1,
                    })
                  : null
              },
              [l, f],
            ),
            x = r.a.useCallback(
              function () {
                return g && m > 0
                  ? r.a.createElement(S.a, {
                      count: m,
                      standalone: !0,
                      truncatedCountFormatter: Q,
                      unreadCountLabel: q,
                      withBorder: !1,
                    })
                  : null
              },
              [m, g],
            ),
            O = n.role,
            F = O === o.a.Admin ? P : B,
            R = O === o.a.Admin ? J : Z,
            L = !d.isExact
          return r.a.createElement(
            E.a,
            { locationKey: 'communitySettingsRoot' },
            r.a.createElement(
              C.a,
              { communityId: a, screenType: 'secondaryRoot', title: F, withDetailOpen: L },
              r.a.createElement(
                _.a,
                null,
                f
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(w.b, { text: D }),
                      r.a.createElement(v.a, {
                        label: z,
                        link: '/i/communities/'.concat(a, '/moderation/reported_tweets'),
                        renderRightContent: M,
                        thumbnail: ce,
                      }),
                    )
                  : null,
                g
                  ? r.a.createElement(v.a, {
                      label: Y,
                      link: '/i/communities/'.concat(a, '/moderation/member_requests'),
                      renderRightContent: x,
                      thumbnail: le,
                    })
                  : null,
                r.a.createElement(w.b, { text: U }),
                r.a.createElement(v.a, {
                  description: G({ memberCount: n.member_count }),
                  label: V,
                  link: '/i/communities/'.concat(a, '/tools/members'),
                  thumbnail: me,
                }),
                b
                  ? r.a.createElement(v.a, {
                      description: R,
                      label: W,
                      link: '/i/communities/'.concat(a, '/tools/rules'),
                      thumbnail: de,
                    })
                  : null,
                O === o.a.Admin
                  ? r.a.createElement(v.a, {
                      description: $,
                      label: X,
                      link: '/i/communities/'.concat(a, '/tools/settings'),
                      thumbnail: se,
                    })
                  : null,
                r.a.createElement(I.a, {
                  description: te,
                  label: ee,
                  link: { external: !0, pathname: 'https://help.twitter.com/using-twitter/communities' },
                  thumbnail: ue,
                }),
                O === o.a.Moderator && k
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(T.a, { spacing: 'space1' }),
                      r.a.createElement(c.a, {
                        confirmationSheetConfirmButtonLabel: ie,
                        confirmationSheetConfirmButtonType: 'destructiveFilled',
                        confirmationSheetHeadline: ae,
                        confirmationSheetText: re,
                        label: ne,
                        onConfirmationSheetConfirm: function () {},
                        withBottomBorder: !1,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        ye = f(pe)
      t.default = ye
    },
    m0MN: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitiesModerationContainer', function () {
          return qe
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('KqXw'), n('WNMA'), n('ERkP')),
        l = n.n(c),
        s = n('+Kfv'),
        u = n('Ig1G'),
        m = n('1Idg'),
        d = n('eSoz'),
        p = n('rxPX'),
        y = n('0KEI'),
        f = Object(p.a)()
          .propsFromState(function () {
            return { community: m.a, fetchStatus: m.b }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_MODERATION',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities', section: 'moderation' }),
        h = n('G1WX'),
        b = n('/de5'),
        g = (n('ho0z'), n('v6aA')),
        v = n('es0u'),
        E = n('yiKp'),
        C = n.n(E),
        _ = (n('2G9S'), n('uFXj'), n('ddV6')),
        k = n.n(_),
        S = (n('z84I'), n('3zvM')),
        w = n('lMB6'),
        I = Object(S.f)({ namespace: 'communityReports' }),
        T = w.a.register(I),
        M = n('G6rE'),
        x = function (e, t) {
          var n,
            a = null === (n = t.tweetCase) || void 0 === n ? void 0 : n.reports
          return (a ? T.selectMany(e, a) : []).map(function (t) {
            var n = t.user
            return C()(C()({}, t), {}, { reporter: M.e.select(e, n) })
          })
        },
        O = Object(p.a)().propsFromState(function () {
          return { reports: x }
        }),
        F = n('3XMw'),
        R = n.n(F),
        L = n('MWbm'),
        A = n('t62R'),
        N = n('855f'),
        K = n('GBcw'),
        H = n('cHvH'),
        j = n('IMA+'),
        P = n('rHpw'),
        B = n('5mJL'),
        D = n('efqG'),
        z = n('21zW'),
        U = function (e) {
          return (function (e) {
            var t = e.count,
              n = e.formattedCount
            return l.a.createElement(
              R.a.I18NFormatMessage,
              { $i18n: 'je0779b7' },
              l.a.createElement(A.b, { color: 'primary' }, R.a.ff0f7429({ count: t, formattedCount: n })),
            )
          })({ count: e, formattedCount: N.a.getFormattedCount(e) })
        },
        V = function (e) {
          var t = e.report,
            n = e.withBottomBorder,
            a = t.created_at,
            r = t.reporter,
            i = l.a.createElement(K.a, { timestamp: a })
          return r
            ? l.a.createElement(H.a, null, function (e) {
                var a = e.windowWidth
                return l.a.createElement(
                  L.a,
                  { style: n ? X.bottomBorder : null },
                  l.a.createElement(j.a, {
                    avatarUri: r.profile_image_url_https,
                    decoration: i,
                    displayMode: 'UserCompact',
                    isProtected: r.protected,
                    isVerified: r.verified,
                    name: r.name,
                    screenName: r.screen_name,
                    style: a > P.a.theme.breakpoints.small ? X.userCell : void 0,
                    userId: r.id_str,
                  }),
                  l.a.createElement(
                    B.a,
                    { avatarCell: null },
                    l.a.createElement(A.b, { color: 'gray700', size: 'subtext2', style: X.rule }, t.rule.name),
                  ),
                )
              })
            : null
        },
        W = O(function (e) {
          var t = l.a.useState(!1),
            n = k()(t, 2),
            a = n[0],
            r = n[1],
            i = e.reports,
            o = e.tweetCase,
            c = o.report_count,
            s = o.report_created_at_max
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              D.a,
              {
                contentStyle: X.popover,
                onDismiss: function () {
                  r(!1)
                },
                renderContent: function () {
                  return l.a.createElement(
                    L.a,
                    { style: X.contentContainer },
                    i.map(function (e, t) {
                      return l.a.createElement(V, { key: e.id_str, report: e, withBottomBorder: t < i.length - 1 })
                    }),
                  )
                },
                visibilityBehavior: a ? 'forceVisible' : 'forceHidden',
              },
              l.a.createElement(
                A.b,
                {
                  onPress: function () {
                    r(!0)
                  },
                },
                U(c),
              ),
            ),
            l.a.createElement(z.a, null),
            l.a.createElement(K.a, { timestamp: s }),
          )
        }),
        X = P.a.create(function (e) {
          return {
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.borderWidths.small,
              paddingBottom: e.spaces.space12,
            },
            contentContainer: { paddingBottom: e.componentDimensions.gutterVertical },
            popover: { maxWidth: '100%' },
            userCell: { width: e.breakpoints.small },
            rule: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        Q = n('9EWH'),
        q = Object(S.f)({ namespace: 'communityCases' }),
        G = {
          keepTweet: Object(S.c)(q, 'keepTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Q.a)(e, function (e) {
                e.entities[n].isKept = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
          dismissTweet: Object(S.c)(q, 'dismissTweet', {
            getParams: function (e) {
              return { tweetId: e }
            },
            getApiMethod: function (e) {
              return e.Communities.keepCommunityTweet
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              return Object(Q.a)(e, function (e) {
                e.entities[n].isDismissed = !0
              })
            },
            context: 'KEEP_COMMUNITY_TWEET',
          }),
        },
        Y = C()(C()({}, q), G),
        J = w.a.register(Y),
        Z = n('XOJV'),
        $ = function (e, t) {
          var n = t.tweetId
          return n ? Z.a.selectHydrated(e, n) : void 0
        },
        ee = function (e, t) {
          var n = t.tweetId
          return J.select(e, n)
        },
        te = Object(p.a)()
          .propsFromState(function () {
            return { tweet: $, tweetCase: ee }
          })
          .propsFromActions(function () {
            return { keep: J.keepTweet, dismiss: J.dismissTweet }
          }),
        ne = n('b5s6'),
        ae = n('mjJ+'),
        re = n('0yYu'),
        ie = n('/yvb'),
        oe = n('IG7M'),
        ce = n('boUI'),
        le = n('zIWA'),
        se = n('5oT/'),
        ue = n('fz3c'),
        me = (n('yH/f'), n('h0NW')),
        de = n('n5fo'),
        pe = n('6Rrp'),
        ye = Object.freeze({ Hidden: 'hidden', Kept: 'kept' }),
        fe = R.a.ad10c66d,
        he = R.a.c6caed9c,
        be = function (e) {
          return l.a.createElement(A.b, null, e)
        },
        ge = function (e) {
          var t = e.screenName
          switch (e.type) {
            case ye.Hidden:
              var n = (function (e) {
                  return l.a.createElement(R.a.I18NFormatMessage, { $i18n: 'dfd5760a' }, e)
                })(t),
                a = [{ label: be(n), decoration: Ee }]
              return l.a.createElement(me.a, { accessibilityLabel: fe, containerStyle: ve.container, items: a })
            case ye.Kept:
              var r = (function (e) {
                  return l.a.createElement(R.a.I18NFormatMessage, { $i18n: 'a6d33440' }, e)
                })(t),
                i = [{ label: be(r), decoration: Ce }]
              return l.a.createElement(me.a, { accessibilityLabel: he, containerStyle: ve.container, items: i })
            default:
              return null
          }
        },
        ve = P.a.create(function (e) {
          return {
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            container: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
          }
        }),
        Ee = l.a.createElement(de.a, { style: ve.icon }),
        Ce = l.a.createElement(pe.a, { style: ve.icon }),
        _e = { page: 'reported_tweets', component: 'tweet' },
        ke = R.a.f1d9930c,
        Se = R.a.a219e217,
        we = R.a.fa524057,
        Ie = R.a.g30bc699,
        Te = R.a.f0306107,
        Me = R.a.b99364a5,
        xe = te(function (e) {
          var t,
            n = l.a.useContext(g.a).featureSwitches.isTrue('c9s_remove_member_enabled'),
            a = e.dismiss,
            r = e.keep,
            i = e.tweet,
            o = e.tweetCase,
            c = e.tweetId,
            u = null == i || null === (t = i.user) || void 0 === t ? void 0 : t.screen_name,
            m = l.a.useCallback(
              function (e) {
                if (i && u) {
                  var t = [
                    {
                      behavioralEventContext: { viewType: 'view_profile' },
                      text: Ie({ screenName: u }),
                      Icon: ce.a,
                      link: '/'.concat(u),
                    },
                    {
                      text: Te,
                      Icon: le.a,
                      behavioralEventContext: { viewType: 'report_tweet' },
                      link: {
                        pathname: '/i/report/'.concat(ue.a.Tweet, '/').concat(i.id_str),
                        state: { clientReferer: window.location.pathname, scribeNamespace: _e },
                      },
                      onClick: function () {
                        e()
                      },
                    },
                  ]
                  return (
                    n &&
                      t.push({
                        text: Me({ screenName: u }),
                        Icon: se.a,
                        behavioralEventContext: { viewType: 'remove_user' },
                        link: {
                          pathname: '/i/report/'.concat(ue.a.RemoveCommunityMember, '/').concat(i.id_str),
                          state: { clientReferer: window.location.pathname, scribeNamespace: _e },
                        },
                        onClick: function () {
                          e()
                        },
                      }),
                    l.a.createElement(ae.a, { items: t, onCloseRequested: e })
                  )
                }
                return null
              },
              [i, u, n],
            ),
            d = function () {
              r(c)
            },
            p = function () {
              a(c)
            }
          if (u && (null == i ? void 0 : i.reportingVisibility) === ue.b.HiddenCommunityTweet)
            return l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(ge, { screenName: u, type: ye.Hidden }),
              l.a.createElement(re.a, null),
            )
          if (
            (null != o && o.isDismissed) ||
            'community_tweet_member_removed' === (null == i ? void 0 : i.limited_actions)
          )
            return null
          if (u && null != o && o.isKept)
            return l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(ge, { screenName: u, type: ye.Kept }),
              l.a.createElement(re.a, null),
            )
          if (!o) return null
          return l.a.createElement(
            s.a,
            { viewType: 'tweet_moderation_case' },
            l.a.createElement(
              L.a,
              { style: Oe.container },
              l.a.createElement(
                L.a,
                { style: Oe.reportsBar },
                l.a.createElement(W, { tweetCase: o }),
                l.a.createElement(oe.a, {
                  activeColor: 'primary',
                  iconSize: 'large',
                  renderActionMenu: m,
                  style: Oe.menu,
                }),
              ),
              l.a.createElement(ne.a, { tweetId: c }),
              i
                ? l.a.createElement(H.a, null, function (e) {
                    e.windowHeight
                    var t = e.windowWidth <= P.a.theme.breakpoints.small
                    return l.a.createElement(
                      L.a,
                      { style: [Oe.buttons, t && Oe.buttonsMobile] },
                      l.a.createElement(
                        ie.a,
                        {
                          behavioralEventContext: { viewType: 'hide_tweet' },
                          link: {
                            pathname: '/i/report/'.concat(ue.a.HideCommunityTweet, '/').concat(c),
                            state: { scribeNamespace: C()(C()({}, _e), {}, { action: 'hide_tweet' }) },
                          },
                          size: 'large',
                          style: [Oe.button, t && Oe.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        ke,
                      ),
                      l.a.createElement(
                        ie.a,
                        {
                          behavioralEventContext: { viewType: 'keep_tweet' },
                          onPress: d,
                          size: 'large',
                          style: [Oe.button, t && Oe.buttonMobile],
                          type: 'primaryOutlined',
                        },
                        we,
                      ),
                    )
                  })
                : l.a.createElement(
                    L.a,
                    { style: Oe.buttons },
                    l.a.createElement(
                      ie.a,
                      {
                        behavioralEventContext: { viewType: 'dismiss_tweet' },
                        onPress: p,
                        style: Oe.button,
                        type: 'primaryOutlined',
                      },
                      Se,
                    ),
                  ),
            ),
            l.a.createElement(re.a, null),
          )
        }),
        Oe = P.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', marginVertical: e.spaces.space16 },
            buttonsMobile: { justifyContent: 'space-between' },
            button: { marginRight: e.spaces.space12 },
            buttonMobile: { flex: 1 },
            container: { marginHorizontal: e.spaces.space20 },
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              marginRight: e.spaces.space16,
              color: e.colors.gray700,
            },
            hiddenTweetContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal },
            menu: { marginLeft: 'auto' },
            reportsBar: { marginVertical: e.spaces.space16, flexDirection: 'row' },
          }
        }),
        Fe = n('hqKg'),
        Re = n('wAC9'),
        Le = function (e, t) {
          var n = t.community
          return n ? n.id_str : void 0
        },
        Ae = function () {
          return Object(Fe.createSelector)(Le, function (e) {
            return e
              ? (function (e) {
                  return Object(Re.a)({
                    contextSuffix: 'COMMUNITIES_MODERATION_CASES_SLICE',
                    getFetchApiEndpoint: function (e) {
                      return e.Communities.fetchModerationCasesSlice
                    },
                    getEndpointParams: function (t) {
                      return C()(C()({}, t), {}, { communityId: e })
                    },
                    sliceKey: 'moderationCasesSlice-'.concat(e),
                  })
                })(e)
              : void 0
          })
        },
        Ne = Object(p.a)()
          .propsFromState(function () {
            return { sliceModule: Ae() }
          })
          .withAnalytics({ page: 'community', section: 'moderation', component: 'reported_tweets' }),
        Ke = n('FIs5'),
        He = n('yoO3'),
        je = n('VS6U'),
        Pe = n('FS1z'),
        Be = R.a.c045c7b6,
        De = R.a.dffb0774,
        ze = R.a.cbb2a93c,
        Ue = Ne(function (e) {
          var t = l.a.useContext(g.a).featureSwitches,
            n = e.community,
            a = e.history,
            r = e.sliceModule,
            i = n.id_str,
            o = n.name,
            c = (n || []).rules,
            s = (null == n ? void 0 : n.rules) && (null == n ? void 0 : n.rules.length) > 0,
            u = t.isTrue('responsive_web_communities_slices_enabled'),
            m = r
              ? l.a.createElement(Pe.a, {
                  module: r,
                  noItemsRenderer: function () {
                    return l.a.createElement(Ke.a, { header: De, message: ze })
                  },
                  renderer: function (e) {
                    return l.a.createElement(xe, { tweetId: e })
                  },
                })
              : null
          return l.a.createElement(
            He.a,
            { behavioralEventViewType: 'reported_tweets' },
            l.a.createElement(je.a, {
              backLocation: '/i/communities/'.concat(i),
              history: a,
              primaryContent: u ? m : null,
              sidebarContent: l.a.createElement(v.a, {
                communityId: i,
                rulesLimit: null == c ? void 0 : c.length,
                withCommunityRules: s,
                withTopicsToFollow: !1,
                withTrends: !1,
                withWhoToFollow: !1,
              }),
              subtitle: o,
              title: Be,
            }),
          )
        }),
        Ve = n('zCf4'),
        We = ['analytics', 'community'],
        Xe = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'fetchStatus']
      function Qe(e) {
        e.analytics
        var t = e.community,
          n = o()(e, We),
          a = n.match.path
        return Object(u.c)(t.role)
          ? l.a.createElement(
              s.a,
              { viewType: 'community' },
              l.a.createElement(
                Ve.d,
                null,
                l.a.createElement(
                  Ve.b,
                  { exact: !0, path: ''.concat(a, '/reported_tweets') },
                  l.a.createElement(Ue, r()({}, n, { community: t })),
                ),
                l.a.createElement(Ve.b, null, l.a.createElement(b.b, n)),
              ),
            )
          : l.a.createElement(b.b, n)
      }
      function qe(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.fetchCommunityIfNeeded,
          i = e.fetchStatus,
          c = o()(e, Xe),
          s = c.match.params.communityId,
          u = n(),
          m = l.a.useCallback(
            function () {
              s && a(s).catch(u)
            },
            [s, u, a],
          )
        return (
          l.a.useEffect(
            function () {
              return m()
            },
            [m],
          ),
          l.a.createElement(h.a, {
            fetchStatus: i,
            onRequestRetry: m,
            render: function () {
              return t ? l.a.createElement(Qe, r()({}, c, { community: t })) : null
            },
          })
        )
      }
      t.default = f(qe)
    },
    mWs5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      n('KqXw'), n('MvUL'), n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        c = n('M2mT'),
        l = n('zCf4'),
        s = n('MWbm'),
        u = n('mw9i'),
        m = n('0yYu'),
        d = n('/yvb'),
        p = n('rHpw'),
        y = o.a.i2209530
      function f(e) {
        var t = e.children,
          n = e.communityId,
          a = e.onSubmit,
          i = e.rightControl,
          o = e.screenType,
          p = e.secondaryBar,
          f = e.submitDisabled,
          b = e.subtitle,
          g = e.title,
          v = e.withBottomBorder,
          E = e.withDetailOpen,
          C = Object(l.f)(),
          _ = 'secondaryRoot' === o,
          k = '/i/communities/'.concat(n),
          S = ''.concat(k, '/tools'),
          w = _ ? k : S,
          I = r.a.useCallback(
            function () {
              _ ? C.replace(w) : C.goBack({ backLocation: w })
            },
            [w, C, _],
          )
        return r.a.createElement(
          c.a,
          {
            backLocation: w,
            onBackClick: I,
            rightControl: i,
            screenType: o,
            secondaryBar: p,
            showSubtitleOnWideDetail: !1,
            subtitle: b,
            title: g,
            withBottomBorder: v,
            withDetailOpen: E,
          },
          r.a.createElement(
            u.a,
            { style: h.contentRoot },
            r.a.createElement(s.a, { style: h.chilrenRoot }, t),
            a
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(m.a, null),
                  r.a.createElement(
                    u.a,
                    { style: h.buttonContainer },
                    r.a.createElement(d.a, { disabled: f, onPress: a, style: h.button, type: 'brandFilled' }, y),
                  ),
                )
              : null,
          ),
        )
      }
      var h = p.a.create(function (e) {
        return {
          contentRoot: {
            backgroundColor: e.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(p.a.iPhoneOffsetBottom, ')'),
          },
          chilrenRoot: { paddingBottom: e.spaces.space12 },
          buttonContainer: {
            backgroundColor: e.colors.cellBackground,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: e.spaces.space12,
          },
          button: { marginHorizontal: e.spaces.space12 },
        }
      })
    },
    mys5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditRuleScreen', function () {
          return H
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        o = n.n(i),
        c = n('v6aA'),
        l = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = n('1Idg'),
        p = function (e, t) {
          return Object(s.z)(e, s.h)
        },
        y = Object(u.a)()
          .propsFromState(function () {
            return { ruleId: d.e, rule: d.d, shouldShowRuleInformEducation: p }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(s.w)(s.h)
              },
              editRule: l.c.editRule,
              removeRule: l.c.removeRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_rule' }),
        f = n('k49u'),
        h = n('jHSc'),
        b = n('3XMw'),
        g = n.n(b),
        v = n('5FtR'),
        E = n('OwKm'),
        C = n('AfjF'),
        _ = n('MWbm'),
        k = n('/yvb'),
        S = n('jtO7'),
        w = n('4zmP'),
        I = n('eb3s'),
        T = n('rHpw'),
        M = g.a.h99020ef,
        x = g.a.i2209530,
        O = g.a.a1c93d73,
        F = g.a.f74a5adb,
        R = g.a.fbb0ed91,
        L = g.a.gea6cc19,
        A = g.a.hed35471,
        N = g.a.c8677445,
        K = g.a.c3a0d44e
      function H(e) {
        var t = o.a.useContext(c.a).featureSwitches.isTrue('c9s_rule_removal_enabled'),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          i = e.createLocalApiErrorHandler,
          l = e.editRule,
          s = e.history,
          u = e.removeRule,
          m = e.rule,
          d = e.ruleId,
          p = e.shouldShowRuleInformEducation,
          y = a.id_str,
          b = a.rules,
          g = o.a.useState(''),
          T = r()(g, 2),
          H = T[0],
          P = T[1],
          B = o.a.useState(''),
          D = r()(B, 2),
          z = D[0],
          U = D[1],
          V = o.a.useState(!1),
          W = r()(V, 2),
          X = W[0],
          Q = W[1],
          q = o.a.useState(''),
          G = r()(q, 2),
          Y = G[0],
          J = G[1],
          Z = o.a.useState(!1),
          $ = r()(Z, 2),
          ee = $[0],
          te = $[1],
          ne = o.a.useState(!1),
          ae = r()(ne, 2),
          re = ae[0],
          ie = ae[1],
          oe = o.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              P(n), U(t), Q(a)
            },
            [P, U, Q],
          ),
          ce = o.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === f.a.GenericBadRequest && t.message ? t.message : O
                  return J(n), Q(!1), []
                },
              })
              'string' == typeof d &&
                l(y, { ruleId: d, name: H, description: z })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(y, '/tools/rules') })
                  })
                  .catch(e)
            },
            [y, H, z, d, l, s, i],
          ),
          le = o.a.useCallback(
            function () {
              var e = i({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === f.a.GenericBadRequest && t.message ? t.message : O
                  return J(n), te(!1), []
                },
              })
              'string' == typeof d &&
                u(y, { ruleId: d })
                  .then(function () {
                    s.goBack({ backLocation: '/i/communities/'.concat(y, '/tools/rules') })
                  })
                  .catch(e)
            },
            [y, d, u, s, i],
          )
        if (!d || !m) return o.a.createElement(v.a, { to: '/i/communities/'.concat(y, '/tools/rules') })
        var se = m.description,
          ue = m.name,
          me = o.a.createElement(
            k.a,
            {
              disabled: !X,
              onPress: function () {
                p ? ie(!0) : ce()
              },
              size: 'small',
              type: 'brandFilled',
            },
            x,
          ),
          de = 1 === b.length,
          pe = t
            ? o.a.createElement(
                _.a,
                { style: j.delete },
                o.a.createElement(S.a, {
                  color: 'red500',
                  disabled: de,
                  label: R,
                  onPress: function () {
                    te(!0)
                  },
                }),
              )
            : void 0,
          ye = de ? o.a.createElement(_.a, { style: j.callout }, o.a.createElement(w.a, { text: F })) : void 0,
          fe = ee
            ? o.a.createElement(I.a, {
                cancelButtonLabel: K,
                confirmButtonLabel: N,
                confirmButtonType: 'destructiveFilled',
                headline: L,
                onCancel: function () {
                  te(!1)
                },
                onConfirm: le,
                text: A,
              })
            : void 0,
          he = re
            ? o.a.createElement(C.a, {
                onCancel: function () {
                  ie(!1)
                },
                onConfirm: function () {
                  n(), ce(), ie(!1)
                },
              })
            : void 0
        return o.a.createElement(
          h.b,
          { behavioralEventViewType: 'rules', history: s, rightControl: me, title: M },
          ye,
          o.a.createElement(E.a, { description: se || '', errorText: Y, name: ue, onChange: oe }),
          pe,
          fe,
          he,
        )
      }
      t.default = y(H)
      var j = T.a.create(function (e) {
        return {
          delete: { marginTop: e.spaces.space12 },
          callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 },
        }
      })
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return H
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('2VqO'),
        y = n.n(p),
        f = n('KEM+'),
        h = n.n(f),
        b = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        g = n.n(b),
        v = n('pXBW'),
        E = n('6/RC'),
        C = n('UIzd'),
        _ = n.n(C),
        k = n('kGix')
      n.d(t, 'a', function () {
        return k.a
      })
      var S = n('fs1G'),
        w = n('0KEI'),
        I = n('lU4h'),
        T = n.n(I),
        M = n('21nk'),
        x = n.n(M),
        O = n('bCEw'),
        F = n.n(O),
        R = n('Ud88'),
        L = n.n(R),
        A = function (e) {
          return (0, e.render)({ fetchStatus: k.a.LOADING, data: null, error: null, retry: S.a })
        },
        N = (function (e) {
          d()(n, e)
          var t = y()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), h()(u()(e), 'state', { error: null }), e
          }
          return (
            l()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof v.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            n
          )
        })(g.a.Component),
        K = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = x()(t, n)
          return a({ fetchStatus: k.a.LOADED, data: r, error: null, retry: S.a })
        },
        H = function (e, t) {
          if (E.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                i = void 0 === a ? 'store-or-network' : a,
                o = n.render,
                c = n.variables,
                l = F()(e),
                s = r()(l, 2),
                u = s[0],
                m = s[1],
                d = Object(w.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = T()(c),
                y = r()(p, 1)[0],
                f = g.a.useCallback(
                  function () {
                    m(y, { fetchPolicy: 'network-only' })
                  },
                  [m, y],
                )
              return (
                g.a.useLayoutEffect(
                  function () {
                    m(y, { fetchPolicy: i })
                  },
                  [i, m, y],
                ),
                u
                  ? g.a.createElement(
                      g.a.Suspense,
                      { fallback: g.a.createElement(A, { render: o }) },
                      g.a.createElement(
                        N,
                        { errorHandler: d(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, n) {
                          return t
                            ? o({ fetchStatus: k.a.FAILED, error: t, data: null, retry: n })
                            : g.a.createElement(K, { query: e, queryRef: u, render: o })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var i = a.render,
              o = a.variables,
              c = L()(),
              l = Object(w.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = T()(o),
              u = r()(s, 1)[0],
              m = n.get(c)
            if (m) return m
            var d = g.a.lazy(function () {
              return _()(c, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: k.a.LOADED, data: e, error: null, retry: S.a })
                  },
                  function (e) {
                    return e instanceof v.a
                      ? (l(t.errorConfig.options || {})(e),
                        i({ fetchStatus: k.a.FAILED, data: null, error: e, retry: S.a }))
                      : g.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(c, e).get.bind(n, c) }
                })
            })
            return g.a.createElement(g.a.Suspense, null, g.a.createElement(d, null))
          }
        }
    },
    nHHZ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'AddRuleScreen', function () {
          return M
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('ho0z'), n('ERkP')),
        o = n.n(i),
        c = n('v6aA'),
        l = n('eSoz'),
        s = n('xZGM'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = function (e, t) {
          return Object(s.z)(e, s.h)
        },
        p = Object(u.a)()
          .propsFromState(function () {
            return { shouldShowRuleInformEducation: d }
          })
          .propsFromActions(function () {
            return {
              addRuleInformEducationFlag: function () {
                return Object(s.w)(s.h)
              },
              createRule: l.c.createRule,
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_ADD_RULE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'add_rule' }),
        y = n('k49u'),
        f = n('jHSc'),
        h = n('3XMw'),
        b = n.n(h),
        g = n('OwKm'),
        v = n('AfjF'),
        E = n('/yvb'),
        C = n('eb3s'),
        _ = b.a.j560c8ea,
        k = b.a.i2209530,
        S = b.a.gaa3239a,
        w = b.a.a67445d5,
        I = b.a.fcbe0992,
        T = b.a.j24c37b2
      function M(e) {
        var t = o.a.useContext(c.a).featureSwitches.getNumberValue('c9s_max_rule_count', 10),
          n = e.addRuleInformEducationFlag,
          a = e.community,
          i = e.createLocalApiErrorHandler,
          l = e.createRule,
          s = e.history,
          u = e.shouldShowRuleInformEducation,
          m = a.id_str,
          d = a.rules,
          p = o.a.useState(''),
          h = r()(p, 2),
          b = h[0],
          M = h[1],
          x = o.a.useState(''),
          O = r()(x, 2),
          F = O[0],
          R = O[1],
          L = o.a.useState(!1),
          A = r()(L, 2),
          N = A[0],
          K = A[1],
          H = o.a.useState(!1),
          j = r()(H, 2),
          P = j[0],
          B = j[1],
          D = o.a.useState(''),
          z = r()(D, 2),
          U = z[0],
          V = z[1],
          W = o.a.useState(!1),
          X = r()(W, 2),
          Q = X[0],
          q = X[1],
          G = o.a.useCallback(
            function (e) {
              var t = e.description,
                n = e.name,
                a = e.valid
              V(''), M(n), R(t), K(a)
            },
            [M, R, K],
          ),
          Y = o.a.useCallback(
            function () {
              B(!0)
              var e = i({
                customErrorHandler: function (e) {
                  var t = r()(e.errors, 1)[0],
                    n = t.code === y.a.GenericBadRequest && t.message ? t.message : S
                  return V(n), K(!1), []
                },
              })
              l(m, { name: b, description: F })
                .then(function () {
                  s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
                })
                .catch(e)
            },
            [m, b, F, l, s, i],
          ),
          J = o.a.useCallback(
            function () {
              u ? q(!0) : Y()
            },
            [Y, u],
          ),
          Z = o.a.createElement(E.a, { disabled: !N, onPress: J, size: 'small', type: 'brandFilled' }, k),
          $ = d.length >= t,
          ee = o.a.createElement(C.a, {
            confirmButtonLabel: T,
            headline: w,
            onConfirm: function () {
              s.goBack({ backLocation: '/i/communities/'.concat(m, '/tools/rules') })
            },
            text: I({ maxRuleCount: t }),
            withCancelButton: !1,
          }),
          te = Q
            ? o.a.createElement(v.a, {
                onCancel: function () {
                  q(!1)
                },
                onConfirm: function () {
                  n(), Y(), q(!1)
                },
              })
            : void 0
        return $ && !P
          ? ee
          : o.a.createElement(
              f.b,
              { behavioralEventViewType: 'add_rule', history: s, rightControl: Z, title: _ },
              o.a.createElement(g.a, { description: '', errorText: U, name: '', onChange: G }),
              te,
            )
      }
      t.default = p(M)
    },
    nTxI: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityRulesModal', function () {
          return w
        })
      n('7xRU'), n('KqXw'), n('WNMA'), n('ho0z')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('+Kfv'),
        o = n('PKbs'),
        c = n('egQk'),
        l = n('1Idg'),
        s = n('eSoz'),
        u = n('li/m'),
        m = n('rxPX'),
        d = n('0KEI'),
        p = function (e, t) {
          var n
          return (null === (n = t.location.state) || void 0 === n ? void 0 : n.community) || l.a(e, t)
        },
        y = Object(m.a)()
          .propsFromState(function () {
            return { community: p, fetchStatus: l.b, isCommunityMember: l.h }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_RULES_SCREEN',
              ),
              join: u.b,
              fetchCommunityIfNeeded: s.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'rules', component: 'modal' }),
        f = n('MDbM'),
        h = n('jHSc'),
        b = n('3XMw'),
        g = n.n(b),
        v = n('5FtR'),
        E = n('t62R'),
        C = n('/yvb'),
        _ = n('rHpw'),
        k = g.a.h4fbfa57,
        S = g.a.dc1b14a1,
        w = function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            l = e.fetchStatus,
            s = e.history,
            u = e.isCommunityMember,
            m = e.join,
            d = e.match.params.communityId
          r.a.useEffect(function () {
            d && !t && l !== f.a.LOADED && a(d).catch(n())
          })
          var p,
            y = function () {
              if (t) {
                var e = t.id_str
                m(e)
                  .then(function () {
                    s.push('/i/communities/'.concat(e))
                  })
                  .catch(n())
              }
            }
          if (t) {
            var b = t.name,
              g = t.rules,
              _ = t.theme
            return g && g.length && !u
              ? r.a.createElement(
                  i.a,
                  { viewType: 'community' },
                  r.a.createElement(
                    h.b,
                    {
                      behavioralEventViewType: 'rules',
                      history: s,
                      rightControl: r.a.createElement(C.a, { onPress: y, size: 'small', type: 'brandFilled' }, k),
                      title: Object(c.a)({ communityName: b }),
                    },
                    r.a.createElement(o.b, {
                      badgeStyle: T.badgeStyle,
                      headerContainerStyle: T.containerStyle,
                      headerExplanationStyle: T.headerExplanationStyle,
                      heading:
                        ((p = b), r.a.createElement(E.b, { size: 'title4', weight: 'bold' }, S({ communityName: p }))),
                      rules: g,
                      theme: _,
                    }),
                  ),
                )
              : r.a.createElement(v.a, { to: '/i/communities/'.concat(t.id_str) })
          }
          return l === f.a.LOADED ? r.a.createElement(v.a, { to: '/' }) : null
        },
        I = y(w),
        T =
          ((t.default = I),
          _.a.create(function (e) {
            return {
              badgeStyle: { marginRight: e.spaces.space16 },
              headerExplanationStyle: { marginTop: e.spaces.space8 },
              containerStyle: {
                paddingVertical: e.componentDimensions.gutterVertical,
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
              },
            }
          }))
    },
    nmVb: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, r.default)(e), a = 0; a < n.length; a++) t.push(n[a].hashtag)
          return t
        })
      var r = a(n('yyPN'))
      e.exports = t.default
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return u
      }),
        n.d(t, 'c', function () {
          return m
        }),
        n.d(t, 'b', function () {
          return d
        }),
        n.d(t, 'g', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'd', function () {
          return f
        }),
        n.d(t, 'f', function () {
          return b
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        c =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        l = n('kIAd'),
        s = n('rHpw')
      function u(e, t) {
        var n,
          a = l.b.scoper.find(function (a) {
            if (-1 !== a.srcInputs.indexOf(t)) return (n = e.match(a.regexp))
          }),
          r = ''
        return n && (r = n && (1 === n.length ? n[0] : n[1])), a ? o()(o()({}, a.scope), {}, { src: t, q: r }) : null
      }
      function m(e, t) {
        var n = t.slice(0, e),
          a = t.slice(e, t.length),
          r = n.search(l.b.WordEnd),
          i = r >= 0 ? n.slice(r) : '',
          o = a.search(l.b.WordBoundary),
          c = i + a.slice(0, o)
        return c.trim() ? { start: r, end: e + o, word: c } : { start: -1, end: -1, word: '' }
      }
      function d() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function p(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          a = e.metaKey
        return !(t || n || a)
      }
      function y(e, t) {
        var n = []
        e.forEach(function (e) {
          var a = t.find(function (t) {
            return t.id === e.id
          })
          a && a.data && a.data.result_context ? n.push(a) : n.push(e)
        })
        var a = n.map(function (e) {
            return e.id
          }),
          i = t.filter(function (e) {
            return a.indexOf(e.id) < 0
          })
        return [].concat(n, r()(i))
      }
      var f = Object(c.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(s.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        h = 0,
        b = function () {
          return 'typeaheadDropdown-'.concat((h += 1))
        }
    },
    'pd/v': function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        o,
        c,
        l,
        s,
        u,
        m,
        d,
        p = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'restrictedMembershipSettings' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_CommunityRestricted_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  {
                    kind: 'Variable',
                    name: 'restricted_membership_settings',
                    variableName: 'restrictedMembershipSettings',
                  },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (c = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (l = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          (s = {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'invites_policy',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'join_approval_policy',
                                storageKey: null,
                              },
                            ],
                            type: 'CommunityRestrictedMembershipSettings',
                            abstractKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  (m = {
                    kind: 'InlineFragment',
                    selections: [
                      (u = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateError',
                    abstractKey: null,
                  }),
                  (d = {
                    kind: 'InlineFragment',
                    selections: [
                      u,
                      { alias: 'updateReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateUnavailable',
                    abstractKey: null,
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'edit_CommunityRestricted_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_restricted_update',
                plural: !1,
                selections: [
                  i,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      o,
                      c,
                      l,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          s,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  m,
                  d,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'FqEbFNXw1mnkDrNk7OQl-Q',
            metadata: {},
            name: 'edit_CommunityRestricted_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(p.hash = '6add4fe7e5b5f45898213cba8e4ae0bf'), (t.default = p)
    },
    tFuX: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        o,
        c,
        l,
        s,
        u,
        m,
        d,
        p = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: null, kind: 'LocalArgument', name: 'openMembershipSettings' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'edit_CommunityOpen_Mutation',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'community_id', variableName: 'communityId' },
                  { kind: 'Variable', name: 'open_membership_settings', variableName: 'openMembershipSettings' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (c = { alias: 'id_str', args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      (l = { alias: null, args: null, kind: 'ScalarField', name: 'access', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          (s = {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'invites_policy',
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'join_approval_policy',
                                storageKey: null,
                              },
                            ],
                            type: 'CommunityRestrictedMembershipSettings',
                            abstractKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  (m = {
                    kind: 'InlineFragment',
                    selections: [
                      (u = { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null }),
                      { alias: 'errorReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateError',
                    abstractKey: null,
                  }),
                  (d = {
                    kind: 'InlineFragment',
                    selections: [
                      u,
                      { alias: 'updateReason', args: null, kind: 'ScalarField', name: 'reason', storageKey: null },
                    ],
                    type: 'CommunityMembershipSettingsUpdateUnavailable',
                    abstractKey: null,
                  }),
                ],
                storageKey: null,
              },
            ],
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'edit_CommunityOpen_Mutation',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: null,
                kind: 'LinkedField',
                name: 'community_membership_settings_open_update',
                plural: !1,
                selections: [
                  i,
                  { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettingsUpdateResult' },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      o,
                      c,
                      l,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'membership_settings',
                        plural: !1,
                        selections: [
                          i,
                          { kind: 'TypeDiscriminator', abstractKey: '__isCommunityMembershipSettings' },
                          s,
                        ],
                        storageKey: null,
                      },
                    ],
                    type: 'Community',
                    abstractKey: null,
                  },
                  m,
                  d,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'T8cVbovU4L1jOLVfHdJ-Tg',
            metadata: {},
            name: 'edit_CommunityOpen_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(p.hash = 'ea1908fb41cb57016d070125122b615d'), (t.default = p)
    },
    tgdH: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        argumentDefinitions: [{ defaultValue: null, kind: 'LocalArgument', name: 'communityId' }],
        kind: 'Fragment',
        metadata: null,
        name: 'communityPeopleSliceItem_userResult',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: 'LinkedField',
            name: 'result',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
              {
                kind: 'InlineFragment',
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null },
                  {
                    alias: null,
                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                    kind: 'ScalarField',
                    name: 'community_role',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ApiUser',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'id_str', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'followed_by', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'profile_image_url_https',
                        storageKey: null,
                      },
                      { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
                    ],
                    storageKey: null,
                  },
                ],
                type: 'User',
                abstractKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: 'UserResults',
        abstractKey: null,
        hash: '8207e707560a4795bb4bc55f48b8501c',
      }
      t.default = a
    },
    tnnC: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        kind: 'InlineDataFragment',
        name: 'utils_EditMembershipType_getFormState_communityMembershipSettings',
        hash: '36882105bfa7486ffd164aeddb44bc8d',
      }
      t.default = a
    },
    tot2: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunityPeopleScreen', function () {
          return w
        })
      n('vrRf')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('+Kfv'),
        o = n('es0u'),
        c = n('XtoV'),
        l = n('1Idg'),
        s = n('eSoz'),
        u = n('rxPX'),
        m = n('0KEI'),
        d = Object(u.a)()
          .propsFromState(function () {
            return { community: l.a, communityId: l.c, screenName: l.j }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_MEMBERS_SCREEN_CONTEXT',
              ),
              fetchCommunityIfNeeded: s.c.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'community', section: 'people' }),
        p = n('3XMw'),
        y = n.n(p),
        f = n('gDCe'),
        h = n('yoO3'),
        b = n('VS6U'),
        g = n('k/OQ'),
        v = n('krnS'),
        E = n('zCf4'),
        C = y.a.h5245afa,
        _ = y.a.dc6ce7b4,
        k = y.a.f8321d82,
        S = y.a.ga2aa43c,
        w = r.a.memo(function (e) {
          var t = e.community,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            l = e.fetchCommunityIfNeeded,
            s = e.history,
            u = e.location
          r.a.useEffect(
            function () {
              n && l(n).catch(a())
            },
            [n, a, l],
          )
          var m = (null == u ? void 0 : u.pathname) && u.pathname.indexOf('members') > 0,
            d = m ? _ : S,
            p = r.a.useMemo(
              function () {
                return n
                  ? [
                      { to: { pathname: '/i/communities/'.concat(n, '/members'), state: u.state }, label: k, key: k },
                      {
                        to: { pathname: '/i/communities/'.concat(n, '/moderators'), state: u.state },
                        label: S,
                        key: S,
                      },
                    ]
                  : []
              },
              [n, u.state],
            ),
            y = n
              ? r.a.createElement(
                  E.d,
                  null,
                  r.a.createElement(
                    E.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/members') },
                    r.a.createElement(
                      i.a,
                      { viewType: 'all' },
                      r.a.createElement(v.b, {
                        communityId: n,
                        mode: v.a.Members,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                  r.a.createElement(
                    E.b,
                    { exact: !0, path: '/i/communities/'.concat(n, '/moderators') },
                    r.a.createElement(
                      i.a,
                      { viewType: 'moderators' },
                      r.a.createElement(f.a, { community: t }),
                      r.a.createElement(v.b, {
                        communityId: n,
                        mode: v.a.Moderators,
                        userRole: null == t ? void 0 : t.role,
                      }),
                    ),
                  ),
                )
              : null
          return r.a.createElement(
            i.a,
            { viewType: 'community' },
            r.a.createElement(
              h.a,
              { behavioralEventViewType: 'members' },
              r.a.createElement(b.a, {
                backLocation: n ? '/i/communities/'.concat(n, '/') : '/',
                documentTitle: C,
                history: s,
                primaryContent: y,
                rightControl: m ? r.a.createElement(c.a, { community: t }) : null,
                secondaryBar: r.a.createElement(g.a, { accessibilityLabel: d, links: p }),
                sidebarContent: r.a.createElement(o.a, null),
                title: _,
              }),
            ),
          )
        }),
        I = d(w)
      t.default = I
    },
    u0MR: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CreateButton', function () {
          return Ve
        }),
        n.d(t, 'CommunitiesScreen', function () {
          return We
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        m = n('2VqO'),
        d = n.n(m),
        p = n('KEM+'),
        y = n.n(p),
        f = (n('2G9S'), n('vrRf'), n('ERkP')),
        h = n.n(f),
        b = n('+Kfv'),
        g = n('es0u'),
        v = n('1Idg'),
        E = n('RqPI'),
        C = n('li/m'),
        _ = n('G6rE'),
        k = n('rxPX'),
        S = n('0KEI'),
        w = function (e, t) {
          var n = v.j(e, t)
          if (n) return _.e.selectByScreenName(e, n)
        },
        I = Object(k.a)()
          .propsFromState(function () {
            return { communitiesActions: E.f, hasCommunityMemberships: C.d, screenName: v.j, user: w }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('USER_COMMUNITIES'),
              fetchOneUserByScreenNameIfNeeded: _.e.fetchOneByScreenNameIfNeeded,
            }
          })
          .withAnalytics({ page: 'communities' }),
        T = n('GOQE'),
        M = n('3XMw'),
        x = n.n(M),
        O = n('5oT/'),
        F = (n('z84I'), n('M+/F'), n('yiKp')),
        R = n.n(F),
        L = (n('ho0z'), n('tVqn'), n('uFXj'), n('v6aA')),
        A = 'community-thumbnail-image',
        N = 'community-thumbnail-name-container',
        K = n('MWbm'),
        H = n('rHpw'),
        j = n('X00g'),
        P = n('htQn'),
        B = n('9Xij'),
        D = n('TIdA'),
        z = n('A91F'),
        U = n('t62R'),
        V = n('YeIG'),
        W = n('oQhu'),
        X = { type: 'serversideContextKey', serversideContextType: 'community' },
        Q = Object(W.a)(function (e) {
          return R()(R()({}, X), {}, { serversideContextId: e })
        }),
        q = H.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.spaces.space4,
              paddingVertical: e.spaces.space4,
              marginHorizontal: e.spaces.space4,
              marginTop: e.spaces.space2,
              marginBottom: e.spaces.space8,
              borderRadius: e.borderRadii.large,
            },
            container: {
              width: 'calc(('.concat(H.a.theme.spaces.space36, ' * 3) + ').concat(H.a.theme.spaces.space24, ')'),
              borderRadius: e.borderRadii.large,
              overflow: 'hidden',
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
            },
            name: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space8, width: '100%' },
          }
        }),
        G = function (e) {
          var t = h.a.useContext(L.a).featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
            n = e.community,
            a = n.id_str,
            r = n.media,
            i = n.name,
            o = n.theme
          if (Object(V.a)(null == r ? void 0 : r.image) || !i) return null
          var c = null == r ? void 0 : r.image,
            l = null == r ? void 0 : r.crop,
            s = H.a.theme.aspectRatios.communityBanner,
            u = t ? j.a.getCommunityBackgroundColor(o) : H.a.theme.colors.translucentBlack77
          return c
            ? h.a.createElement(
                b.a,
                { clientEntity: Q(a || ''), viewType: 'thumbnail' },
                h.a.createElement(
                  P.a,
                  { link: '/i/communities/'.concat(a), style: q.root },
                  h.a.createElement(
                    K.a,
                    { style: q.container },
                    h.a.createElement(
                      B.a,
                      { ratio: s },
                      h.a.createElement(D.a, {
                        accessibilityLabel: '',
                        aspectMode: z.a.exact(s),
                        backgroundColor: H.a.theme.colors.gray300,
                        cropCandidates: l,
                        image: c,
                        testID: A,
                      }),
                    ),
                    h.a.createElement(
                      K.a,
                      { style: [q.name, { backgroundColor: u }], testID: N },
                      h.a.createElement(
                        U.b,
                        { align: 'left', color: 'white', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                        i.trim(),
                      ),
                    ),
                  ),
                ),
              )
            : null
        },
        Y = n('eSoz'),
        J = n('o3oN'),
        Z = function (e) {
          var t = Object(J.c)(e)
          return Y.c.selectMany(e, t)
        },
        $ = Object(k.a)()
          .propsFromState(function () {
            return { communities: Z, fetchStatus: J.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CAROUSEL',
              ),
              fetchCommunityMemberships: J.a,
            }
          })
          .withAnalytics({ page: 'communities', section: 'carousel' }),
        ee = n('kGix'),
        te = n('6iuV'),
        ne = n('rC8y'),
        ae = x.a.d228a9a0,
        re = h.a.memo(function (e) {
          var t = e.communities,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityMemberships,
            r = e.fetchStatus,
            i = e.location.pathname
          h.a.useEffect(
            function () {
              r === ee.a.NONE && a().catch(n())
            },
            [n, a, r],
          )
          var o = h.a.useMemo(
            function () {
              return t.slice(0, 10).map(function (e) {
                return h.a.createElement(G, { community: e, key: e.id_str })
              })
            },
            [t],
          )
          return Object(V.a)(t)
            ? null
            : h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(te.a, { style: [ie.paddingHorizontal, ie.bottomBorder] }, o),
                t.length > 10 &&
                  h.a.createElement(
                    K.a,
                    { style: ie.bottomBorder },
                    h.a.createElement(ne.a, { link: '/'.concat(i, '/memberships'), text: ae }),
                  ),
              )
        }),
        ie = H.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            paddingHorizontal: { paddingHorizontal: e.spaces.space4 },
            bottomBorder: {
              borderBottomWidth: e.spaces.space1,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
          }
        }),
        oe = $(re),
        ce = n('WpDa'),
        le = n('ZNT5'),
        se = Object(le.a)({
          timelineId: 'communitiesMainTimeline',
          getEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMainTimeline
          },
          getEndpointParams: function (e) {
            var t = e.count,
              n = e.cursor
            return { count: t, cursor: 'string' == typeof n ? n : void 0 }
          },
          context: 'FETCH_COMMUNITIES_MAIN_TIMELINE',
          perfKey: 'communitiesMainTimeline',
          formatResponse: ce.a,
        }),
        ue = n('OUEC'),
        me = n('dwig'),
        de = n('0+qk'),
        pe = n('7BdX'),
        ye = n('fTQJ'),
        fe = n('QRqA'),
        he = n('FIs5'),
        be = n('mw9i'),
        ge = x.a.c63602d3,
        ve = x.a.d7346631,
        Ee = x.a.fbd12fea,
        Ce = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(l()(e), '_c9sParticipationEnabled', e.context.featureSwitches.isTrue('c9s_participation_enabled')),
              y()(
                l()(e),
                '_getModule',
                Object(W.a)(function () {
                  return se
                }),
              ),
              y()(l()(e), '_renderEmptyTimeline', function () {
                return h.a.createElement(he.a, { header: ve, message: Ee })
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
                    t = e.hasCommunityMemberships,
                    n = e.history,
                    a = e.isLoggedInUser,
                    r = e.location,
                    i = this._getModule(),
                    o = this._c9sParticipationEnabled && t ? h.a.createElement(de.a, { history: n }) : null
                  return a && i
                    ? h.a.createElement(
                        h.a.Fragment,
                        null,
                        h.a.createElement(fe.a, null),
                        h.a.createElement(
                          me.a,
                          { container: be.a, fab: o },
                          h.a.createElement(oe, { location: r }),
                          h.a.createElement(ye.a, {
                            entryConfiguration: ue.a,
                            module: i,
                            prerollDisplayLocation: pe.c.OTHER,
                            refreshControl: null,
                            renderEmptyState: this._renderEmptyTimeline,
                            title: ge,
                          }),
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      y()(Ce, 'contextType', L.a)
      var _e = Ce,
        ke = n('wl7o'),
        Se = n('wa7Z'),
        we = n('hqKg'),
        Ie = function (e, t) {
          var n = t.user
          return n ? n.id_str : void 0
        },
        Te = function () {
          return Object(we.createSelector)(Ie, function (e) {
            return e
              ? (function (e) {
                  return Object(le.a)({
                    timelineId: 'communityMemberships-'.concat(e),
                    getEndpoint: function (e) {
                      return e.Communities.fetchCommunityMemberships
                    },
                    getEndpointParams: function (t) {
                      var n = t.cursor
                      return { cursor: 'string' == typeof n ? n : void 0, userId: e }
                    },
                    context: 'FETCH_COMMUNITY_MEMBERSHIPS_TIMELINE',
                    perfKey: 'communityMemberships',
                    formatResponse: ce.a,
                  })
                })(e)
              : void 0
          })
        },
        Me = Object(k.a)()
          .propsFromState(function () {
            return {
              urtModule: Te(),
              sliceModule: Object(we.createSelector)(Ie, function (e) {
                return e ? Object(Se.a)(e) : void 0
              }),
            }
          })
          .withAnalytics({ page: 'communities', section: 'memberships' }),
        xe = n('yoO3'),
        Oe = n('FS1z'),
        Fe = x.a.c63602d3,
        Re = x.a.d7346631,
        Le = x.a.hb01fe46,
        Ae = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(
                l()(e),
                '_slicesEnabled',
                e.context.featureSwitches.isTrue('responsive_web_communities_slices_enabled'),
              ),
              y()(l()(e), '_renderCommunityCell', function (e) {
                return h.a.createElement(ke.a, { communityId: e, key: e })
              }),
              y()(l()(e), '_renderEmptyState', function () {
                return e.props.isLoggedInUser ? h.a.createElement(he.a, { header: Re, message: Le }) : null
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
                    t = e.sliceModule,
                    n = e.urtModule
                  return this._slicesEnabled
                    ? t
                      ? h.a.createElement(Oe.a, {
                          module: t,
                          noItemsRenderer: this._renderEmptyState,
                          renderer: this._renderCommunityCell,
                        })
                      : null
                    : n
                    ? h.a.createElement(
                        xe.a,
                        { behavioralEventViewType: 'all' },
                        h.a.createElement(ye.a, {
                          entryConfiguration: ue.a,
                          module: n,
                          refreshControl: null,
                          renderEmptyState: this._renderEmptyState,
                          title: Fe,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      y()(Ae, 'contextType', L.a)
      var Ne = Me(Ae),
        Ke = n('5FtR'),
        He = n('Y6L+'),
        je = n('VS6U'),
        Pe = n('/yvb'),
        Be = n('zCf4'),
        De = x.a.h02a6fe5,
        ze = x.a.c63602d3,
        Ue = x.a.a226497c,
        Ve = h.a.memo(function (e) {
          var t = e.communitiesActions
          if (null == t || !t.create) return null
          return h.a.createElement(Pe.a, {
            icon: h.a.createElement(O.a, { accessibilityLabel: Ue, style: Xe.createButton }),
            link: '/i/communities/create',
            size: 'medium',
            type: 'brandText',
          })
        }),
        We = (function (e) {
          u()(n, e)
          var t = d()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(l()(e), '_renderPrimaryContent', function () {
                var t = e.props,
                  n = t.hasCommunityMemberships,
                  a = t.history,
                  r = t.location,
                  i = t.user,
                  o = e._isLoggedInUser()
                return h.a.createElement(
                  Be.d,
                  null,
                  h.a.createElement(
                    Be.b,
                    { exact: !0, path: '/'.concat(He.J, '/communities') },
                    h.a.createElement(_e, { hasCommunityMemberships: n, history: a, isLoggedInUser: o, location: r }),
                  ),
                  h.a.createElement(
                    Be.b,
                    { exact: !0, path: '/'.concat(He.J, '/communities/memberships') },
                    h.a.createElement(Ne, { isLoggedInUser: o, user: i }),
                  ),
                )
              }),
              y()(l()(e), '_handleFetchUser', function (t) {
                var n = t || e.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.fetchOneUserByScreenNameIfNeeded,
                  i = n.screenName
                i && r(i).catch(a(T.a))
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchUser()
                },
              },
              {
                key: '_isLoggedInUser',
                value: function () {
                  var e = this.props.user,
                    t = this.context.loggedInUserId
                  return (null == e ? void 0 : e.id_str) === t
                },
              },
              {
                key: '_isMembershipsView',
                value: function () {
                  return this.props.location.pathname.indexOf('memberships') >= 0
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.communitiesActions,
                    n = e.history
                  if (this._isLoggedInUser()) {
                    var a = this._isMembershipsView() ? ze : De
                    return h.a.createElement(
                      b.a,
                      { viewType: 'communities' },
                      h.a.createElement(je.a, {
                        backLocation: '/',
                        history: n,
                        primaryContent: this._renderPrimaryContent(),
                        rightControl: h.a.createElement(Ve, { communitiesActions: t }),
                        sidebarContent: h.a.createElement(g.a, null),
                        title: a,
                      }),
                    )
                  }
                  return h.a.createElement(Ke.a, { to: '/' })
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      y()(We, 'contextType', L.a)
      var Xe = H.a.create(function (e) {
          return { createButton: { color: e.colors.text, transform: 'rotate(45deg)' } }
        }),
        Qe = I(We)
      t.default = Qe
    },
    uI9t: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('2VqO'),
        u = n.n(s),
        m = n('KEM+'),
        d = n.n(m),
        p = (n('z84I'), n('ERkP')),
        y = n.n(p),
        f = n('yiKp'),
        h = n.n(f),
        b = n('1Pcy'),
        g = n.n(b),
        v = (n('2G9S'), n('ho0z'), n('I4+6')),
        E = n('cm6r'),
        C = n('rHpw'),
        _ = n('k/Ka'),
        k = n('MWbm'),
        S = n('x0mb'),
        w = n('IMYl'),
        I = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              d()(g()(e), '_radioRef', y.a.createRef()),
              d()(g()(e), '_handleChange', function () {
                var t = e.props,
                  n = t.colorName
                ;(0, t.onChange)(n)
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autoFocus && this._radioRef && this._radioRef.current && this._radioRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.colorName,
                    a = e.isSelected,
                    r = e.name,
                    i = e.style,
                    o = C.a.theme.colors[n],
                    c = v.a.generate({
                      backgroundColor: C.a.theme.colors.transparent,
                      color: o,
                      withFocusWithinFocusRing: !0,
                    })
                  return y.a.createElement(
                    k.a,
                    { style: [T.container, i] },
                    y.a.createElement(
                      E.a,
                      { accessibilityRole: 'label', interactiveStyles: c, style: [T.choice, T.choiceContainer] },
                      y.a.createElement(S.a, { style: [T.choice, { color: o }] }),
                      Object(_.a)('input', {
                        accessibilityLabel: t,
                        name: r,
                        checked: a,
                        onChange: this._handleChange,
                        ref: this._radioRef,
                        style: T.nativeControl,
                        type: 'radio',
                      }),
                    ),
                    a &&
                      y.a.createElement(
                        k.a,
                        { style: [T.choice, T.checkMarkContainer] },
                        y.a.createElement(w.a, { style: [T.choiceSelected, { backgroundColor: o }] }),
                      ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        T = C.a.create(function (e) {
          return {
            container: { alignItems: 'center', paddingVertical: e.spaces.space4, userSelect: 'none' },
            choice: { cursor: 'pointer', height: 45, width: 45 },
            checkMarkContainer: { alignItems: 'center', justifyContent: 'center', position: 'absolute' },
            choiceSelected: { color: e.colors.whiteOnColor, height: 25, width: 25 },
            choiceContainer: { borderRadius: e.borderRadii.infinite },
            transitionStyle: { transitionProperty: 'transform', transitionDuration: '0.1s' },
            focusedStyle: { outlineStyle: 'none' },
            hoverStyle: { transform: [{ scale: 1.1 }] },
            pressedStyle: { transform: [{ scale: 0.95 }] },
            nativeControl: h()(
              h()({}, C.a.absoluteFillObject),
              {},
              { cursor: 'inherit', height: '100%', margin: 0, opacity: 0, padding: 0, width: '100%' },
            ),
          }
        }),
        M = I,
        x = 1,
        O = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._colorPickerId = 'COLOR_PICKER_'.concat(x, '_LABEL')), (x += 1), e
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    a = t.autoFocus,
                    r = t.layout,
                    i = t.onChange,
                    o = t.options,
                    c = t.value,
                    l = 'two-rows' === r,
                    s = [F.root, l && F.flexWrap],
                    u = l ? { width: ''.concat((2 / o.length) * 100, '%') } : void 0
                  return y.a.createElement(
                    k.a,
                    { accessibilityLabel: n, accessibilityRole: 'radiogroup', style: s },
                    o.map(function (t) {
                      var n = t.accessibilityLabel,
                        r = t.colorName
                      return y.a.createElement(M, {
                        accessibilityLabel: n,
                        autoFocus: a && c === r,
                        colorName: r,
                        isSelected: c === r,
                        key: r,
                        name: e._colorPickerId,
                        onChange: i,
                        style: u,
                      })
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      d()(O, 'defaultProps', { layout: 'one-row' })
      var F = C.a.create(function (e) {
        return { root: { flexDirection: 'row', justifyContent: 'space-around' }, flexWrap: { flexWrap: 'wrap' } }
      })
      t.a = O
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('42ly'),
        i = n('N9G2'),
        o = n('BIH/'),
        c = n('lhaq'),
        l = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = i(this),
              n = o(t),
              a = l(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : c(e))), a
          },
        },
      )
    },
    'urw/': function (e, t, n) {
      n('7St7')('flat')
    },
    w9f9: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        o,
        c,
        l,
        s,
        u = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'communityId' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'count' },
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'moderatorsSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'communityId' },
                  { kind: 'Literal', name: 's', value: 4 },
                ]),
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: 'moderators_slice',
                    args: [(i = { kind: 'Variable', name: 'count', variableName: 'count' })],
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: '__CommunityModerators_Query_moderators_slice_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            args: [{ kind: 'Variable', name: 'communityId', variableName: 'communityId' }],
                            kind: 'FragmentSpread',
                            name: 'communityPeopleSliceItem_userResult',
                          },
                          (o = {
                            kind: 'ClientExtension',
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null },
                            ],
                          }),
                        ],
                        storageKey: null,
                      },
                      (c = {
                        alias: null,
                        args: null,
                        concreteType: 'SliceInfo',
                        kind: 'LinkedField',
                        name: 'slice_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'moderatorsSliceTimeline_Query',
            selections: [
              {
                alias: 'community',
                args: r,
                concreteType: 'Community',
                kind: 'LinkedField',
                name: 'community_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: (l = [i, { kind: 'Variable', name: 'cursor', variableName: 'cursor' }]),
                    concreteType: 'UserSlice',
                    kind: 'LinkedField',
                    name: 'moderators_slice',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: 'UserResults',
                        kind: 'LinkedField',
                        name: 'items_results',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: 'LinkedField',
                            name: 'result',
                            plural: !1,
                            selections: [
                              { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                              {
                                kind: 'InlineFragment',
                                selections: [
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: [{ kind: 'Variable', name: 'community_id', variableName: 'communityId' }],
                                    kind: 'ScalarField',
                                    name: 'community_role',
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'ApiUser',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'id_str',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'followed_by',
                                        storageKey: null,
                                      },
                                      { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'profile_image_url_https',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'protected',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'screen_name',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'verified',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    filters: null,
                                    handle: 'defaultScalars',
                                    key: '',
                                    kind: 'LinkedHandle',
                                    name: 'legacy',
                                  },
                                ],
                                type: 'User',
                                abstractKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          o,
                        ],
                        storageKey: null,
                      },
                      c,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: l,
                    filters: ['count'],
                    handle: 'slice',
                    key: 'CommunityModerators_Query_moderators_slice',
                    kind: 'LinkedHandle',
                    name: 'moderators_slice',
                    handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
                  },
                  s,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'lxb2peKfpD2yYwE4T2_Muw',
            metadata: { sliceInfoPath: ['community', 'moderators_slice', 'slice_info'] },
            name: 'moderatorsSliceTimeline_Query',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = '826c736bcf5ab4ef9f03b7a814b87dec'), (t.default = u)
    },
    wa7Z: function (e, t, n) {
      'use strict'
      var a = n('wAC9')
      t.a = function (e) {
        return Object(a.a)({
          contextSuffix: 'COMMUNITIES_MEMBERSHIPS_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.Communities.fetchCommunitiesMembershipsSlice
          },
          getEndpointParams: function (e) {
            return e
          },
          sliceKey: 'communitiesMembershipsSlice-'.concat(e),
        })
      }
    },
    wl7o: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        m = n('5Yy7'),
        d = n.n(m),
        p = n('2VqO'),
        y = n.n(p),
        f = n('KEM+'),
        h = n.n(f),
        b = (n('2G9S'), n('ho0z'), n('ERkP')),
        g = n.n(b),
        v = n('+Kfv'),
        E = n('eSoz'),
        C = n('rxPX'),
        _ = function (e, t) {
          var n = t.communityId
          return n ? E.c.select(e, n) : void 0
        },
        k = Object(C.a)().propsFromState(function () {
          return { community: _ }
        }),
        S = n('MWbm'),
        w = n('TIdA'),
        I = n('A91F'),
        T = n('rHpw'),
        M = n('MtXG'),
        x = n('t62R'),
        O = n('htQn'),
        F = n('MAI/'),
        R = n('3XMw'),
        L = n.n(R),
        A = n('oQhu'),
        N = n('YeIG'),
        K = L.a.d58baa7e,
        H = { type: 'serversideContextKey', serversideContextType: 'community' },
        j = k(
          (function (e) {
            d()(n, e)
            var t = y()(n)
            function n() {
              var e
              o()(this, n)
              for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                h()(
                  u()(e),
                  '_getClientEntity',
                  Object(A.a)(function (e) {
                    return r()(r()({}, H), {}, { serversideContextId: e })
                  }),
                ),
                h()(u()(e), '_renderThumbnail', function (e) {
                  var t = e.crop,
                    n = e.image
                  return g.a.createElement(
                    S.a,
                    { style: P.thumbnailContainer },
                    g.a.createElement(w.a, {
                      accessibilityLabel: '',
                      aspectMode: I.a.SQUARE,
                      backgroundColor: T.a.theme.colors.gray300,
                      cropCandidates: t,
                      image: n,
                    }),
                  )
                }),
                h()(u()(e), '_renderMembersCount', function (t) {
                  var n = e.props.communityId,
                    a = t.member_count
                  if (a) {
                    var r = K(a),
                      i = '/i/communities/'.concat(n, '/members')
                    return g.a.createElement(
                      M.a.Group,
                      null,
                      g.a.createElement(
                        M.a,
                        { link: i },
                        g.a.createElement(
                          x.b,
                          { color: 'gray700' },
                          g.a.createElement(
                            L.a.I18NFormatMessage,
                            { $i18n: 'b38e130b' },
                            g.a.createElement(M.a.Value, null, L.a.ibd0106d({ formattedCount: r })),
                            g.a.createElement(M.a.Label, null, L.a.cface2d0({ count: a })),
                          ),
                        ),
                      ),
                    )
                  }
                  return null
                }),
                e
              )
            }
            return (
              l()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.community,
                      n = e.communityId,
                      a = '/i/communities/'.concat(n)
                    if (t) {
                      var r = t.media,
                        i = t.membersFacepileUrls,
                        o = t.name
                      return g.a.createElement(
                        v.a,
                        { clientEntity: this._getClientEntity(n || ''), viewType: 'community_cell' },
                        g.a.createElement(
                          O.a,
                          { link: a, style: P.root },
                          g.a.createElement(
                            S.a,
                            { style: P.container },
                            g.a.createElement(
                              S.a,
                              { style: P.leftColumn },
                              r && !Object(N.a)(r) ? this._renderThumbnail(r) : null,
                              g.a.createElement(
                                S.a,
                                { style: P.attribution },
                                g.a.createElement(
                                  S.a,
                                  { style: P.name },
                                  g.a.createElement(x.b, { numberOfLines: 1, weight: 'bold' }, o),
                                ),
                                this._renderMembersCount(t),
                                i
                                  ? g.a.createElement(F.a, {
                                      style: P.facepile,
                                      userAvatarSize: 'large',
                                      userAvatarUrls: i,
                                    })
                                  : null,
                              ),
                            ),
                          ),
                        ),
                      )
                    }
                    return null
                  },
                },
              ]),
              n
            )
          })(g.a.Component),
        ),
        P =
          ((t.a = j),
          T.a.create(function (e) {
            return {
              root: {
                backgroundColor: e.colors.cellBackground,
                paddingHorizontal: e.componentDimensions.gutterHorizontal,
                paddingVertical: e.componentDimensions.gutterVertical,
              },
              container: { flexDirection: 'row' },
              leftColumn: { alignItems: 'center', flexDirection: 'row', flex: 1, flexShrink: 1 },
              attribution: { height: '100%', justifyContent: 'space-between', flexShrink: 1 },
              facepile: { justifyContent: 'flex-start' },
              name: { marginBottom: e.spaces.space2, flexDirection: 'row' },
              thumbnailContainer: {
                width: '96px',
                marginRight: e.spaces.space12,
                borderRadius: e.borderRadii.large,
                overflow: 'hidden',
              },
            }
          }))
    },
    xPe1: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CommunitySettingsRouter', function () {
          return pt
        })
      n('KqXw'), n('WNMA'), n('1t7P'), n('jQ/y'), n('ho0z')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('rxPX'),
        c = Object(o.a)().withAnalytics({ page: 'communities', section: 'settings' }),
        l = n('yiKp'),
        s = n.n(l),
        u = n('ddV6'),
        m = n.n(u),
        d = (n('kH1Z'), n('6U7i'), n('jTgF')),
        p = n('AspN'),
        y = n('eSoz'),
        f = n('0KEI'),
        h = function (e, t) {
          var n = t.localMediaId,
            a = n && isFinite(n) ? p.k(e, n) : []
          return m()(a, 1)[0]
        },
        b = Object(o.a)()
          .propsFromState(function () {
            return { localMedia: h }
          })
          .propsFromActions(function () {
            return {
              addLocalMediaId: y.a,
              removeLocalMediaId: y.e,
              editCommunityBanner: y.d,
              removeBanner: y.c.removeBannerMedia,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_BANNER',
              ),
            }
          }),
        g = n('3XMw'),
        v = n.n(g),
        E = n('Nh1N'),
        C = n('fS8x'),
        _ = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        k = Object(_.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(174)]).then(n.bind(null, 'P68U'))
          },
        }),
        S = n('eyty'),
        w = n('MWbm'),
        I = n('rHpw'),
        T = n('TIdA'),
        M = n('A91F'),
        x = n('4zmP'),
        O = n('eb3s'),
        F = v.a.a49f884d,
        R = v.a.ea965b81,
        L = v.a.c1ca95bd,
        A = v.a.e71cdf4d,
        N = v.a.gea6cc19,
        K = v.a.cfd2f35d,
        H = v.a.j35d3ad6,
        j = v.a.f1e8fb21,
        P = v.a.fc2a5c92,
        B = v.a.e405ec21
      var D,
        z,
        U,
        V = I.a.create(function (e) {
          return { error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        W = b(function (e) {
          var t = e.addLocalMediaId,
            n = e.communityId,
            a = e.createLocalApiErrorHandler,
            i = e.editCommunityBanner,
            o = e.hasCustomMedia,
            c = e.localMedia,
            l = e.localMediaId,
            u = e.media,
            p = e.removeBanner,
            y = e.removeLocalMediaId,
            f = r.a.useState(!1),
            h = m()(f, 2),
            b = h[0],
            g = h[1],
            v = r.a.useState(!1),
            _ = m()(v, 2),
            D = _[0],
            z = _[1],
            U = r.a.useState(!1),
            W = m()(U, 2),
            X = W[0],
            Q = W[1],
            q = r.a.useState(!1),
            G = m()(q, 2),
            Y = G[0],
            J = G[1],
            Z = r.a.useState(!1),
            $ = m()(Z, 2),
            ee = $[0],
            te = $[1],
            ne = null == u ? void 0 : u.image,
            ae = I.a.theme.aspectRatios.communityBanner,
            re = a({
              customErrorHandler: function (e) {
                return J(B), []
              },
            }),
            ie = function (e) {
              return te(!1), e ? t(n, e) : y(n)
            },
            oe = c
              ? s()(s()({}, c), {}, { id: Number.MAX_SAFE_INTEGER, originalMediaFile: c.mediaFile, cropData: void 0 })
              : void 0,
            ce = ne ? r.a.createElement(T.a, { accessibilityLabel: F, aspectMode: M.a.exact(ae), image: ne }) : null
          return r.a.createElement(
            r.a.Fragment,
            null,
            Y
              ? r.a.createElement(
                  w.a,
                  { style: V.error },
                  r.a.createElement(x.a, { Icon: E.a, headline: P, text: Y, type: 'danger' }),
                )
              : null,
            r.a.createElement(k, {
              accessibilityLabel: R,
              aspectRatio: ae,
              currentContent: ce,
              location: S.d.CommunityBanner,
              mediaItem: ee ? c : void 0,
              onChange: function (e) {
                var t = m()(e, 1)[0]
                J(!1), ie(t), g(!0)
              },
              onFailure: function () {
                J(B), y(n)
              },
              onRemove:
                o || ee
                  ? function () {
                      ie(), Q(!0)
                    }
                  : void 0,
            }),
            b && c
              ? r.a.createElement(C.a, {
                  defaultAspectRatio: ae,
                  media: c,
                  onCancel: function () {
                    g(!1), y(n)
                  },
                  onDone: function () {
                    g(!1), z(!0)
                  },
                  title: L,
                })
              : null,
            D && oe && l
              ? r.a.createElement(C.a, {
                  defaultAspectRatio: 1,
                  media: oe,
                  onCancel: function () {
                    z(!1), g(!0)
                  },
                  onCropDone: function (e) {
                    !(function (e, t) {
                      te(!0),
                        i(n, { mediaId: e, cropData: t }).catch(function (e) {
                          ie(), Object(d.a)(e) ? J(B) : re(e)
                        })
                    })(l, e)
                  },
                  onDone: function () {
                    z(!1)
                  },
                  title: A,
                })
              : null,
            X
              ? r.a.createElement(O.a, {
                  cancelButtonLabel: K,
                  confirmButtonLabel: H,
                  confirmButtonType: 'destructiveFilled',
                  headline: N,
                  onCancel: function () {
                    Q(!1)
                  },
                  onConfirm: function () {
                    p(n).catch(re), Q(!1)
                  },
                  text: j,
                })
              : null,
          )
        }),
        X = Object(o.a)()
          .propsFromActions(function () {
            return {
              editAccess: y.c.editAccess,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_ACCESS_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_access' }),
        Q = n('yoO3'),
        q = n('mWs5'),
        G = n('3JAx'),
        Y = v.a.f713fbd1,
        J = [
          { label: v.a.fd00a769, value: 'Public', helpText: v.a.d0784408 },
          { label: v.a.ce0523a8, value: 'Closed', helpText: v.a.ccfafe8c },
        ],
        Z = X(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editAccess,
            i = e.history,
            o = t.id_str,
            c = r.a.useState(t.access),
            l = m()(c, 2),
            s = l[0],
            u = l[1],
            d = r.a.useCallback(
              function () {
                a(o, { access: s })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(n({ showToast: !0 }))
              },
              [o, s, a, i, n],
            ),
            p = s !== t.access
          return r.a.createElement(
            Q.a,
            null,
            r.a.createElement(
              q.a,
              { communityId: o, onSubmit: d, submitDisabled: !p, title: Y },
              r.a.createElement(
                w.a,
                { style: $.root },
                r.a.createElement(G.a, {
                  name: 'membershipSetting',
                  onChange: function (e, t) {
                    u(t)
                  },
                  options: J,
                  value: s,
                }),
              ),
            ),
          )
        }),
        $ = I.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space12 } }
        }),
        ee = n('n0Rl'),
        te = (n('849X'), n('TJCb'), n('uDfI')),
        ne =
          (n('yH/f'),
          Object.freeze({
            Open: 'CommunityOpenMembershipSettings',
            Restricted: 'CommunityRestrictedMembershipSettings',
          })),
        ae = Object.freeze({
          None: 'NoInvitesAllowed',
          Member: 'MemberInvitesAllowed',
          Moderator: 'ModeratorInvitesAllowed',
        }),
        re = Object.freeze({ Disabled: 'NoRequestsAllowed', Moderator: 'ModeratorApproval' }),
        ie = (n('enFi'), n('9SqB')),
        oe = n.n(ie),
        ce = void 0 !== D ? D : (D = n('tFuX')),
        le = void 0 !== z ? z : (z = n('pd/v')),
        se = function (e) {
          if ('Community' === (null == e ? void 0 : e.__typename)) {
            var t
            switch (e.membership_settings.__typename) {
              case ne.Open:
                t = { __typename: ne.Open }
                break
              case ne.Restricted:
                t = {
                  __typename: ne.Restricted,
                  invites_policy: e.membership_settings.invites_policy,
                  join_approval_policy: e.membership_settings.join_approval_policy,
                }
            }
            return { id_str: e.id_str, access: e.access, membership_settings: t }
          }
        },
        ue = n('zCf4'),
        me = n('t62R'),
        de = n('e0ey'),
        pe = n('Hsf0'),
        ye = n.n(pe),
        fe = void 0 !== U ? U : (U = n('tnnC'))
      var he,
        be,
        ge = n('jAXQ'),
        ve = n.n(ge),
        Ee = v.a.f713fbd1,
        Ce = [
          { label: v.a.fd00a769, value: ne.Open, helpText: v.a.a0a16d37 },
          { label: v.a.ce0523a8, value: ne.Restricted, helpText: v.a.f1b189f9 },
        ],
        _e = r.a.createElement(
          v.a.I18NFormatMessage,
          { $i18n: 'd35773be' },
          r.a.createElement(me.b, { weight: 'bold' }, v.a.b1066579),
        ),
        ke = v.a.c85960a0,
        Se = v.a.ca373cd2,
        we = v.a.d42d9318,
        Ie = v.a.c5d1634d,
        Te = v.a.b983f9e0,
        Me = void 0 !== he ? he : (he = n('1tGk')),
        xe = function (e) {
          var t = e.children
          return r.a.createElement(me.b, { color: 'gray700', size: 'subtext2', style: Fe.settingsItem }, t)
        },
        Oe = function (e) {
          var t,
            n,
            a,
            i,
            o,
            c,
            l,
            s,
            u,
            d,
            p,
            f,
            h,
            b = e.community,
            g = ve()(Me, b),
            E = g.membership_settings,
            C = g.rest_id,
            _ = (function (e) {
              var t = ye()(fe, e)
              switch (t.__typename) {
                case ne.Restricted:
                  return { access: ne.Restricted, invitesPolicy: t.invites_policy }
                case ne.Open:
                  return { access: ne.Open, invitesPolicy: ae.Member }
                default:
                  throw new Error('Unhandled membership type '.concat(t.__typename))
              }
            })(E),
            k = r.a.useState(_.access),
            S = m()(k, 2),
            w = S[0],
            I = S[1],
            T = r.a.useState(_.invitesPolicy),
            M = m()(T, 2),
            x = M[0],
            F = M[1],
            R = r.a.useState(),
            L = m()(R, 2),
            A = L[0],
            N = L[1],
            K =
              ((t = oe()(ce)),
              (n = m()(t, 2)),
              (a = n[0]),
              (i = n[1]),
              (o = oe()(le)),
              (c = m()(o, 2)),
              (l = c[0]),
              (s = c[1]),
              (u = Object(te.c)()),
              function (e, t) {
                return i || s
                  ? Promise.reject(new Error('Already updating membership settings'))
                  : new Promise(function (n, r) {
                      var i = t.access,
                        o = t.invitesPolicy
                      i === ne.Open
                        ? a({
                            variables: { communityId: e, openMembershipSettings: {} },
                            onCompleted: function (e) {
                              var t = se(e.community_membership_settings_open_update)
                              t && u(y.c.updateOne(t.id_str, t)), n()
                            },
                            onError: function (e) {
                              r(e)
                            },
                          })
                        : i === ne.Restricted &&
                          l({
                            variables: {
                              communityId: e,
                              restrictedMembershipSettings: { invites_policy: o, join_approval_policy: re.Moderator },
                            },
                            onCompleted: function (e) {
                              var t = se(e.community_membership_settings_restricted_update)
                              t && u(y.c.updateOne(t.id_str, t)), n()
                            },
                            onError: function (e) {
                              r(e)
                            },
                          })
                    })
              }),
            H = Object(ue.f)(),
            j = r.a.useMemo(
              function () {
                return { access: w, invitesPolicy: x }
              },
              [w, x],
            ),
            P = r.a.useCallback(function (e, t) {
              I(t)
            }, []),
            B = r.a.useCallback(function (e, t) {
              F(t ? ae.Member : ae.Moderator)
            }, []),
            D = r.a.useCallback(
              function () {
                K(C, j).then(function () {
                  H.goBack({ backLocation: '/i/communities/'.concat(C, '/tools/settings') })
                })
              },
              [C, H, j, K],
            ),
            z = r.a.useCallback(
              function () {
                var e = (function (e, t) {
                  if (e.access === ne.Restricted && t.access === ne.Open) return v.a.daedd9fa
                })(_, j)
                e ? N(e) : D()
              },
              [_, j, D],
            ),
            U = r.a.useCallback(function () {
              return N(void 0)
            }, []),
            V =
              ((p = j),
              (f = (d = _).access !== p.access),
              (h = d.access === ne.Restricted && d.invitesPolicy !== p.invitesPolicy),
              !(f || h))
          return r.a.createElement(
            q.a,
            { communityId: C, onSubmit: z, submitDisabled: V, title: Ee },
            r.a.createElement(xe, null, _e),
            r.a.createElement(G.a, { name: 'membershipSetting', onChange: P, options: Ce, value: w }),
            r.a.createElement(xe, null, we),
            w === ne.Restricted &&
              r.a.createElement(de.a, {
                checked: x === ae.Member,
                helpText: Se,
                label: ke,
                name: 'allowInvites',
                onChange: B,
              }),
            A &&
              r.a.createElement(O.a, {
                confirmButtonLabel: Ie,
                confirmButtonType: 'primary',
                headline: Te,
                onCancel: U,
                onConfirm: D,
                text: A,
              }),
          )
        },
        Fe = I.a.create(function (e) {
          return { settingsItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }
        }),
        Re = n('v//M'),
        Le = void 0 !== be ? be : (be = n('PbB6')),
        Ae = Object(ee.b)(Le, { errorConfig: { context: 'COMMUNITY_EDIT_MEMBERSHIP_SCREEN' } }),
        Ne = function (e) {
          var t = { communityId: e.communityId }
          return r.a.createElement(Ae, {
            render: function (e) {
              var t = e.data,
                n = (e.error, e.fetchStatus),
                a = e.retry,
                i = null == t ? void 0 : t.community
              return r.a.createElement(Re.a, {
                fetchStatus: n,
                onRequestRetry: a,
                render: function () {
                  return i ? r.a.createElement(Oe, { community: i }) : null
                },
                retryable: !0,
              })
            },
            variables: t,
          })
        },
        Ke = n('ROT1'),
        He = Object(o.a)()
          .propsFromActions(function () {
            return {
              editName: y.c.editName,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_NAME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_name' }),
        je = n('k49u'),
        Pe = v.a.h3c0f1a2,
        Be = v.a.fc2a5c92,
        De = v.a.cb5e6510
      var ze = I.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ue = He(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editName,
            i = e.history,
            o = t.id_str,
            c = t.name,
            l = r.a.useState(c),
            s = m()(l, 2),
            u = s[0],
            d = s[1],
            p = r.a.useState(!1),
            y = m()(p, 2),
            f = y[0],
            h = y[1],
            b = r.a.useState(void 0),
            g = m()(b, 2),
            v = g[0],
            C = g[1],
            _ = r.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = m()(e.errors, 1)[0],
                      n = t.code === je.a.GenericBadRequest && t.message ? t.message : De
                    return C(n), h(!0), []
                  },
                })
                a(o, { name: u })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(o, '/tools/settings') })
                  })
                  .catch(e)
              },
              [o, u, a, i, n],
            )
          return r.a.createElement(
            Q.a,
            null,
            r.a.createElement(
              q.a,
              { communityId: o, onSubmit: _, submitDisabled: f, title: Pe },
              v
                ? r.a.createElement(
                    w.a,
                    { style: ze.error },
                    r.a.createElement(x.a, { Icon: E.a, headline: Be, text: v, type: 'danger' }),
                  )
                : void 0,
              r.a.createElement(Ke.a, {
                autoFocus: !0,
                communityName: u,
                onChange: function (e, t) {
                  d(e), h(t)
                },
              }),
            ),
          )
        }),
        Ve = n('U0Qk'),
        We = Object(o.a)()
          .propsFromActions(function () {
            return {
              editPurpose: y.c.editPurpose,
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_purpose' }),
        Xe = v.a.a895549f,
        Qe = v.a.fc2a5c92,
        qe = v.a.ced22929
      var Ge = I.a.create(function (e) {
          return { error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }
        }),
        Ye = We(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.editPurpose,
            i = e.history,
            o = t.description,
            c = t.id_str,
            l = r.a.useState(o || ''),
            s = m()(l, 2),
            u = s[0],
            d = s[1],
            p = r.a.useState(!1),
            y = m()(p, 2),
            f = y[0],
            h = y[1],
            b = r.a.useState(void 0),
            g = m()(b, 2),
            v = g[0],
            C = g[1],
            _ = r.a.useCallback(
              function () {
                var e = n({
                  customErrorHandler: function (e) {
                    var t = m()(e.errors, 1)[0],
                      n = t.code === je.a.GenericBadRequest && t.message ? t.message : qe
                    return C(n), h(!0), []
                  },
                })
                a(c, { purpose: u })
                  .then(function () {
                    i.goBack({ backLocation: '/i/communities/'.concat(c, '/tools/settings') })
                  })
                  .catch(e)
              },
              [c, u, a, i, n],
            )
          return r.a.createElement(
            Q.a,
            null,
            r.a.createElement(
              q.a,
              { communityId: c, onSubmit: _, submitDisabled: f, title: Xe },
              v
                ? r.a.createElement(
                    w.a,
                    { style: Ge.error },
                    r.a.createElement(x.a, { Icon: E.a, headline: Qe, text: v, type: 'danger' }),
                  )
                : void 0,
              r.a.createElement(Ve.a, {
                autoFocus: !0,
                communityPurpose: u,
                onChange: function (e, t) {
                  d(e), h(t)
                },
              }),
            ),
          )
        }),
        Je = n('Ig1G'),
        Ze = n('x0mb'),
        $e = n('5FtR'),
        et = n('X00g'),
        tt = n('6vad'),
        nt = n('csss'),
        at = n('0yYu'),
        rt = v.a.bb081ea1,
        it = v.a.h3e55b40,
        ot = v.a.j8af8ea9,
        ct = v.a.d5f01115,
        lt = v.a.c3c04b70,
        st = { Closed: v.a.ce0523a8, Public: v.a.fd00a769 },
        ut = v.a.f4a98e9e,
        mt = v.a.f713fbd1,
        dt = function (e) {
          var t = e.children
          return r.a.createElement(me.b, { color: 'gray700', size: 'subtext2' }, t)
        },
        pt = function (e) {
          var t = e.community,
            n = e.history,
            a = e.match,
            o = t.access,
            c = t.description,
            l = t.hasCustomMedia,
            s = t.id_str,
            u = t.localMediaId,
            m = t.media,
            d = t.membership_settings,
            p = t.name,
            y = t.theme,
            f = r.a.useContext(i.a).featureSwitches,
            h = f.isTrue('c9s_edit_community_name_enabled'),
            b = f.isTrue('c9s_edit_community_description_enabled'),
            g = f.isTrue('c9s_edit_community_membership_settings_enabled'),
            v = f.isTrue('c9s_membership_settings_enabled'),
            E = f.isTrue('c9s_edit_community_banner_enabled'),
            C = f.isTrue('c9s_edit_community_theme_enabled'),
            _ = a.url,
            k = r.a.useMemo(
              function () {
                return v ? (d.__typename === ne.Open ? st.Public : st.Closed) : st[o]
              },
              [o, v, d.__typename],
            ),
            S = Object(Je.d)(t),
            w = et.a.getCommunityThemeDisplayName(S),
            I = et.a.getCommunityBackgroundColor(y)
          return r.a.createElement(
            ue.d,
            null,
            h
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(_, '/name') },
                  r.a.createElement(Ue, { community: t, history: n }),
                )
              : null,
            b
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(_, '/purpose') },
                  r.a.createElement(Ye, { community: t, history: n }),
                )
              : null,
            v
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(_, '/membership') },
                  r.a.createElement(Ne, { communityId: s }),
                )
              : g
              ? r.a.createElement(
                  ue.b,
                  { exact: !0, path: ''.concat(_, '/membership') },
                  r.a.createElement(Z, { community: t, history: n }),
                )
              : null,
            r.a.createElement(
              ue.b,
              { exact: !0, path: ''.concat(_, '/') },
              r.a.createElement(
                Q.a,
                null,
                r.a.createElement(
                  q.a,
                  { communityId: s, screenType: 'primaryDetail', title: rt },
                  E ? r.a.createElement(W, { communityId: s, hasCustomMedia: l, localMediaId: u, media: m }) : null,
                  r.a.createElement(tt.b, { text: ut }),
                  r.a.createElement(nt.a, {
                    description: r.a.createElement(dt, null, p),
                    label: it,
                    link: h ? ''.concat(_, '/name') : void 0,
                  }),
                  r.a.createElement(nt.a, {
                    description: c ? r.a.createElement(dt, null, c) : void 0,
                    label: ct,
                    link: b ? ''.concat(_, '/purpose') : void 0,
                  }),
                  C
                    ? r.a.createElement(nt.a, {
                        description: r.a.createElement(dt, null, w),
                        label: lt,
                        link: C ? ''.concat(_, '/theme') : void 0,
                        renderRightContent: function () {
                          return r.a.createElement(Ze.a, { style: [{ color: I }, yt.themeIcon] })
                        },
                      })
                    : null,
                  v || g
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(at.a, null),
                        r.a.createElement(tt.b, { text: mt }),
                        r.a.createElement(nt.a, {
                          description: r.a.createElement(dt, null, k),
                          label: ot,
                          link: ''.concat(_, '/membership'),
                        }),
                      )
                    : null,
                ),
              ),
            ),
            r.a.createElement(ue.b, null, r.a.createElement($e.a, { to: ''.concat(_, '/') })),
          )
        },
        yt =
          ((t.default = c(pt)),
          I.a.create(function (e) {
            return { themeIcon: { width: e.spaces.space24, height: e.spaces.space24 } }
          }))
    },
    yUT0: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'EditThemeScreen', function () {
          return I
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ'), n('ERkP')),
        o = n.n(i),
        c = n('eSoz'),
        l = n('rxPX'),
        s = n('0KEI'),
        u = Object(l.a)()
          .propsFromActions(function () {
            return {
              editTheme: c.c.editTheme,
              createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITY_TOOLS_EDIT_THEME_SCREEN',
              ),
            }
          })
          .withAnalytics({ page: 'communities', section: 'edit_theme' }),
        m = n('jHSc'),
        d = n('Ig1G'),
        p = n('3XMw'),
        y = n.n(p),
        f = n('MWbm'),
        h = n('X00g'),
        b = n('/yvb'),
        g = n('uI9t'),
        v = n('rHpw'),
        E = y.a.dbda7beb,
        C = y.a.i2209530,
        _ = y.a.hcf35d0c,
        k = y.a.da48b72c,
        S = Object.freeze(['Blue', 'Purple', 'Plum', 'Magenta', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Default']),
        w = {}
      function I(e) {
        var t = e.community,
          n = e.createLocalApiErrorHandler,
          a = e.editTheme,
          i = e.history,
          c = t.id_str,
          l = t.theme,
          s = h.a.getCommunityBackgroundColorName(l),
          u = o.a.useState(!1),
          p = r()(u, 2),
          y = p[0],
          v = p[1],
          I = o.a.useState(Object(d.d)(t)),
          M = r()(I, 2),
          x = M[0],
          O = M[1],
          F = o.a.useState(h.a.getCommunityThemeDisplayName(x)),
          R = r()(F, 2),
          L = R[0],
          A = R[1],
          N = o.a.useState(s),
          K = r()(N, 2),
          H = K[0],
          j = K[1],
          P = o.a.useState([]),
          B = r()(P, 2),
          D = B[0],
          z = B[1]
        o.a.useEffect(
          function () {
            var e
            return (
              z(
                ((e = []),
                S.forEach(function (t) {
                  var n = h.a.getCommunityTheme(t),
                    a = h.a.getCommunityBackgroundColorName(n)
                  ;(w[a] = t), e.push({ accessibilityLabel: h.a.getCommunityThemeDisplayName(t), colorName: a })
                }),
                e),
              ),
              function () {
                z([])
              }
            )
          },
          [z],
        )
        var U = o.a.useCallback(
            function () {
              a(c, { theme: x })
                .then(function () {
                  i.goBack({ backLocation: '/i/communities/'.concat(c, '/tools/settings') })
                })
                .catch(n({ showToast: !0 }))
            },
            [c, x, a, i, n],
          ),
          V = o.a.createElement(
            b.a,
            { accessibilityLabel: _({ themeName: L }), disabled: !y, onPress: U, size: 'small', type: 'brandFilled' },
            C,
          )
        return o.a.createElement(
          m.b,
          { behavioralEventViewType: 'edit_theme', history: i, rightControl: V, title: E },
          o.a.createElement(
            f.a,
            { style: T.themePickerContainer },
            o.a.createElement(g.a, {
              accessibilityLabel: k,
              layout: 'two-rows',
              onChange: function (e) {
                var n = w[e],
                  a = n !== Object(d.d)(t)
                O(n), A(h.a.getCommunityThemeDisplayName(n)), j(e), v(a)
              },
              options: D,
              value: H,
            }),
          ),
        )
      }
      var T = v.a.create(function (e) {
        return { themePickerContainer: { paddingVertical: e.spaces.space40, paddingHorizontal: e.spaces.space64 } }
      })
      t.default = u(I)
    },
  },
])
//# sourceMappingURL=WIPED
