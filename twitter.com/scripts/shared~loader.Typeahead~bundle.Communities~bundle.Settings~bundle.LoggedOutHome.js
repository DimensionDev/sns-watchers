;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '3EFP': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return a
        }),
        n.d(t, 'd', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return c
        }),
        n.d(t, 'f', function () {
          return l
        })
      var r = 'ArrowDown',
        o = 'ArrowUp',
        a = 'Enter',
        i = 'Escape',
        c = 'ESC',
        l = 'Tab'
    },
    '5T6p': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        o = n('MWbm'),
        a = n('TIdA'),
        i = n('A91F'),
        c = n('t62R')
      var l = n('rHpw').a.create(function (e) {
        return {
          root: { flexDirection: 'row', flexShrink: 1, flexGrow: 1 },
          bodyColumn: {
            justifyContent: 'center',
            flexDirection: 'column',
            marginRight: e.spaces.space4,
            marginLeft: e.spaces.space12,
            flexShrink: 1,
          },
          coverContainer: { borderRadius: e.borderRadii.large, overflow: 'hidden' },
          cellThumbnail: { height: e.spaces.space48, width: e.spaces.space48 },
          largeCellThumbnail: { height: e.spaces.space56, width: e.spaces.space56 },
        }
      })
      t.a = function (e) {
        var t = e.image,
          n = e.style,
          s = e.supportText,
          u = e.title,
          d = e.withNewTypeaheadUI
        return r.createElement(
          o.a,
          { style: [l.root, n] },
          r.createElement(
            o.a,
            { style: [l.coverContainer, d ? l.largeCellThumbnail : l.cellThumbnail] },
            t ? r.createElement(a.a, { accessibilityLabel: '', aspectMode: i.a.SQUARE, image: t }) : null,
          ),
          r.createElement(
            o.a,
            { style: l.bodyColumn },
            s ? r.createElement(c.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, s) : null,
            r.createElement(c.b, { numberOfLines: 2, weight: 'bold' }, u),
          ),
        )
      }
    },
    '8t44': function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        o = n.n(r),
        a = (n('uFXj'), n('3EFP')),
        i = n('ERkP'),
        c = n('woHV'),
        l = n('3XMw'),
        s = n.n(l),
        u = n('VwDm'),
        d = n('tAeL'),
        f = n('MWbm'),
        p = n('pf9B'),
        m = n('xoZN'),
        v = n('6OUF'),
        h = n('rHpw'),
        y = n('oEoC'),
        b = s.a.f065ba8c,
        g = h.a.create(function (e) {
          return {
            root: { flex: 1, flexDirection: 'column', position: 'relative' },
            typeaheadContainer: { flex: 1, position: 'relative' },
            keydownInputListener: { flexShrink: 1 },
            dropdown: {
              backgroundColor: e.colors.cellBackground,
              left: 0,
              right: 0,
              overflowY: 'auto',
              overscrollBehavior: 'contain',
              position: 'absolute',
              top: 0,
              WebkitOverflowScrolling: 'touch',
            },
            modalDropdown: {
              backgroundColor: e.colors.cellBackground,
              flex: 1,
              minHeight: 300,
              position: 'relative',
              overflowY: 'auto',
              overscrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch',
            },
            wideModeDropdown: {
              borderRadius: e.borderRadii.medium,
              boxShadow: e.boxShadows.medium,
              minHeight: 100,
              maxHeight: 'calc(80vh - '.concat(e.componentDimensions.appBarHeight, ')'),
            },
            wrapper: { alignItems: 'stretch', flex: 1 },
            topBorder: {
              borderTopColor: e.colors.gray200,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
            },
          }
        })
      t.a = function (e) {
        var t = e.alwaysOpen,
          n = e.disableClearButton,
          r = void 0 !== n && n,
          l = e.dropdownStyle,
          s = e.inputStyle,
          h = e.isCompact,
          w = e.isModal,
          _ = e.items,
          x = e.onDismiss,
          I = e.onFocus,
          E = e.onItemClick,
          O = e.onQueryChange,
          C = e.onSubmit,
          R = e.placeholder,
          k = e.renderEmptyState,
          S = e.renderInSearchField,
          D = e.rounded,
          j = e.shouldAutoFocus,
          P = e.shouldClearOnSelect,
          T = e.shouldFocusOnClear,
          F = e.shouldRenderEmptyState,
          L = e.source,
          M = e.style,
          A = e.testID,
          N = e.withFixedPositioning,
          B = i.useRef(null),
          U = i.useRef(null),
          H = i.useRef(null),
          z = i.useRef(null),
          V = i.useState(!1),
          W = o()(V, 2),
          X = W[0],
          G = W[1],
          K = i.useState(null),
          Z = o()(K, 2),
          Q = Z[0],
          Y = Z[1],
          J = i.useState(Object(y.b)()),
          q = o()(J, 2),
          $ = q[0],
          ee = q[1],
          te = i.useState(function () {
            return Object(y.f)()
          }),
          ne = o()(te, 1)[0],
          re = i.useState(''),
          oe = o()(re, 2),
          ae = oe[0],
          ie = oe[1],
          ce = function (e) {
            var t,
              n = p.a.getCount() > 0
            ;(null != B && null !== (t = B.current) && void 0 !== t && t.contains(e.target)) || n || (X && ue())
          }
        i.useEffect(function () {
          return (
            window.document.addEventListener('click', ce, !0),
            function () {
              window.document.removeEventListener('click', ce, !0)
            }
          )
        })
        var le = function () {
            if (null != U && U.current) {
              var e = U.current.getBoundingClientRect().bottom
              e !== Q && Y(e)
            }
          },
          se = function (e) {
            ie(e), null == O || O(e)
          },
          ue = function () {
            G(!1), null == x || x()
          },
          de = function () {
            var e
            ue(), null == H || null === (e = H.current) || void 0 === e || e.blur()
          },
          fe = function (e, t) {
            var n,
              r,
              o = P ? '' : ae
            ;(G(!1), H.current) &&
              (P && T
                ? H.current.focus()
                : (P && (null === (n = H.current.textInput) || void 0 === n || n.clear()),
                  null === (r = H.current) || void 0 === r || r.blur()))
            se(o), null == x || x(), null == E || E(e, t)
          },
          pe = function () {
            ee(Object(y.b)())
          },
          me = X || t
        return i.createElement(
          f.a,
          { onLayout: le, ref: B, style: [g.root, M] },
          i.createElement(
            m.a,
            {
              onKeyDown: function (e) {
                var t,
                  n = e.key
                if (Object(y.g)(e)) {
                  var r, o
                  if (n === a.a)
                    return null === (r = z.current) || void 0 === r || r.focusNext(), void e.preventDefault()
                  if (n === a.b)
                    return null === (o = z.current) || void 0 === o || o.focusPrevious(), void e.preventDefault()
                  if (n === a.d) return ue(), void e.preventDefault()
                  if (n !== a.f) {
                    var i
                    if (n === a.c && null !== (t = z.current) && void 0 !== t && t.hasFocusedItem())
                      return null === (i = z.current) || void 0 === i || i.selectFocusedItem(), void e.preventDefault()
                    X || G(!0)
                  } else ue()
                }
              },
              style: g.keydownInputListener,
            },
            i.createElement(
              c.a,
              {
                accessibilityLabel: R,
                accessibilityRole: 'search',
                onSubmit: function (e) {
                  var t
                  e.preventDefault(),
                    e.stopPropagation(),
                    null == H || null === (t = H.current) || void 0 === t || t.blur(),
                    G(!1),
                    null == x || x(),
                    null == C || C()
                },
                style: g.wrapper,
              },
              i.createElement(
                f.a,
                { ref: U, style: s },
                i.createElement(v.a, {
                  Icon: u.a,
                  ariaActiveDescendant: $,
                  ariaAutocomplete: 'list',
                  ariaExpanded: me,
                  ariaLabel: b,
                  ariaOwns: ne,
                  ariaRole: 'combobox',
                  autoComplete: 'off',
                  autoCorrect: !1,
                  autoFocus: j,
                  contentBelow: null == S ? void 0 : S(),
                  focusOnClear: T,
                  isCompact: h,
                  onChange: function (e) {
                    se(e.target.value), le()
                  },
                  onClear: function () {
                    se('')
                  },
                  onFocus: function () {
                    G(!0), le(), null == I || I()
                  },
                  onLayout: le,
                  placeholder: R,
                  ref: H,
                  returnKeyType: 'search',
                  spellCheck: 'false',
                  styleType: D ? 'pill' : 'selection',
                  testID: A,
                  value: ae,
                  withClearButton: !r && X,
                }),
              ),
              i.createElement(
                f.a,
                { style: [g.typeaheadContainer, !D && g.topBorder] },
                me
                  ? (function () {
                      var e = w ? [g.modalDropdown, l] : [g.dropdown, N && Q ? Object(y.d)(Q) : g.wideModeDropdown, l]
                      return k && F
                        ? k({ ariaDescendantId: $, domId: ne, onDismiss: de, onItemFocusChanged: pe, ref: z, style: e })
                        : i.createElement(d.a, {
                            ariaDescendantId: $,
                            domId: ne,
                            items: _,
                            onItemClick: fe,
                            onItemFocusChanged: pe,
                            ref: z,
                            source: L,
                            style: e,
                          })
                    })()
                  : null,
              ),
            ),
          ),
        )
      }
    },
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return v
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        a = n('m3Bd'),
        i = n.n(a),
        c = (n('z84I'), n('KOtZ'), n('7x/C'), n('lTEL'), n('kYxP'), n('LW0h'), n('lnti')),
        l = n('aWyx')
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
      function u(e) {
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
      var d = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        f = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return e.reduce(function (e, n) {
            var r = n.user_id,
              o = t[r] || { id_str: r }
            return (e[r] = u(u({}, n), {}, { user: o })), e
          }, {})
        }
      function p(e, t) {
        var n = t.entries
        return (t.entryIdsByConversationId[e] || [])
          .map(function (e) {
            return n[e] && n[e].data
          })
          .filter(Boolean)
      }
      var m = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = e.conversation_id,
            o = e.participants,
            a = i()(e, ['conversation_id', 'participants'])
          return u(
            u({ conversation_id: r }, a),
            {},
            { entries: t.entryIdsByConversationId[r] || [], participants: f(o, n) },
          )
        },
        v = function (e, t, n) {
          var r = e.conversation_id,
            o = e.participants,
            a = e.social_proof,
            s = u(
              u({ conversation_id: r }, i()(e, ['conversation_id', 'participants', 'social_proof'])),
              {},
              { entries: p(r, t), participants: f(o, n), social_proof: void 0 },
            )
          return (
            a &&
              (s.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === l.d.MUTUAL_FRIENDS) {
                    var n = t.users
                    return u(
                      u({}, i()(t, ['users'])),
                      {},
                      {
                        users: Object(c.a)(
                          n.map(function (t) {
                            return e[t]
                          }),
                        ),
                      },
                    )
                  }
                  return t
                })
              })(a, n)),
            s
          )
        }
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      var r = n('ddV6'),
        o = n.n(r),
        a = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        i = n('aWyx'),
        c = n('XnpN'),
        l = n('3XMw'),
        s = n.n(l),
        u = n('jV+4'),
        d = n('pjBI'),
        f = n('t62R'),
        p = n('rHpw'),
        m = n('p9G8'),
        v = s.a.cfd94063,
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        y = p.a.create(function (e) {
          return { title: { maxWidth: '50%' } }
        }),
        b = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            r = e.perspective
          if (t) {
            if (t.type === i.a.ONE_TO_ONE) {
              var a = Object(c.a)(t, r).map(function (e) {
                return e.user
              })
              return o()(a, 1)[0].name
            }
            return Object(m.a)(t, r)
          }
          var l = h(n)
          return Object(m.b)(l, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isSearchTitle,
          r = void 0 !== n && n,
          l = e.newConversationParticipants,
          s = e.perspective,
          p = e.renderTimestamp,
          b = e.textColor,
          g = void 0 === b ? 'normal' : b,
          w = e.titleWeight,
          _ = void 0 === w ? 'bold' : w,
          x = e.withScreenName,
          I = void 0 === x || x,
          E = e.withVDLRefresh,
          O = void 0 !== E && E
        if (t) {
          var C = p ? p() : null
          if (t.type === i.a.ONE_TO_ONE) {
            var R = Object(c.a)(t, s).map(function (e) {
                return e.user
              }),
              k = o()(R, 1)[0],
              S = a.createElement(u.a, {
                color: g,
                isProtected: k.protected,
                isVerified: k.verified,
                name: k.name,
                screenName: k.screen_name,
                weight: _,
                withLink: !1,
                withScreenName: I,
              })
            return O && !r ? a.createElement(d.a, null, S, C) : S
          }
          var D = t.participants,
            j = Object.keys(D).length
          if (r)
            return a.createElement(
              d.a,
              { color: g },
              a.createElement(f.b, { color: g, numberOfLines: 1, style: y.title, weight: _ }, Object(m.a)(t, s, r)),
              O
                ? null
                : a.createElement(f.b, { color: 'gray700', numberOfLines: 1, weight: 'normal' }, v({ peopleCount: j })),
              O && !r ? C : null,
            )
          var P = a.createElement(f.b, { color: g, numberOfLines: 1, weight: _ }, Object(m.a)(t, s, r))
          return O && !r ? a.createElement(d.a, null, P, C) : P
        }
        var T = h(l)
        return a.createElement(f.b, { color: g, numberOfLines: 1, weight: _ }, Object(m.b)(T, s))
      }
    },
    V5Qi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var r = n('AQ79'),
        o = function (e, t) {
          return e[r.b] ? e[r.b].conversations[t] : null
        }
    },
    XnpN: function (e, t, n) {
      'use strict'
      var r = n('RhWx'),
        o = n.n(r),
        a = n('ddV6'),
        i = n.n(a),
        c = (n('2G9S'), n('tQbP'), n('aWyx')),
        l = (n('6U7i'), n('LW0h'), n('z84I'), n('t0aI')),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return new Date(Number(e))
        },
        u = function (e, t) {
          return s(e.join_time) - s(t.join_time)
        },
        d = function (e, t) {
          var n = e.user,
            r = t.user
          return Object(l.a)(n.id_str, r.id_str)
        },
        f = function (e) {
          return (function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            return function (e, n) {
              return (
                t
                  .map(function (t) {
                    return t(e, n)
                  })
                  .filter(function (e) {
                    return !!e
                  })[0] || 0
              )
            }
          })(
            (function (e) {
              return function (t, n) {
                var r = t.user,
                  o = n.user
                switch (e) {
                  case r.id_str:
                    return -1
                  case o.id_str:
                    return 1
                  default:
                    return 0
                }
              }
            })(e),
            u,
            d,
          )
        },
        p = n('tn7R'),
        m = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          a = e.type,
          l = Object(p.a)(r),
          s = Object(m.a)(l, function (e) {
            return e.user.id_str === t
          }),
          u = i()(s, 2),
          d = u[0],
          v = u[1]
        return v.length ? (a === c.a.GROUP && 1 === v.length ? [].concat(o()(d), o()(v)) : n ? v.sort(f(n)) : v) : d
      }
    },
    ZcYN: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return be
      })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        v = n('KEM+'),
        h = n.n(v),
        y = (n('ho0z'), n('ERkP')),
        b = n('+Kfv'),
        g = n('IMYl'),
        w = 'typeaheadResult',
        _ = n('AQOc'),
        x = n('V5Qi'),
        I = n('G6rE'),
        E = n('rxPX'),
        O = function (e, t) {
          return t.conversationId
        },
        C = function (e, t) {
          return Object(x.a)(e, O(0, t))
        },
        R = Object(E.a)()
          .propsFromState(function () {
            return { conversationId: O, conversation: C, users: I.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              r = { conversation: void 0 }
            return null != t && t.data && (r.conversation = Object(_.b)(t.data, void 0, n)), r
          }),
        k = n('aA19'),
        S = n('OhSZ'),
        D = n('5mJL'),
        j = n('rHpw'),
        P = j.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              width: '100%',
            },
            avatarColumn: { flexGrow: 1, maxWidth: e.spaces.space40, minWidth: '32px' },
            bodyColumn: { flexGrow: 7, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            disabled: { opacity: 0.6, backgroundColor: e.colors.gray0 },
          }
        }),
        T = R(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            r = e.isSelected,
            o = e.perspective
          return t
            ? y.createElement(
                D.a,
                {
                  avatarCell: y.createElement(k.a, { conversation: t, perspective: o, size: 'xLarge' }),
                  avatarCellStyle: P.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: P.bodyColumn,
                  style: [P.root, !r && n && P.disabled],
                },
                y.createElement(S.b, { conversation: t, perspective: o }),
                be({ isSelected: r }),
              )
            : null
        }),
        F = (n('uFXj'), n('MWbm')),
        L = n('LbZ7'),
        M = n('t62R'),
        A = n('9Xij'),
        N = n('TIdA'),
        B = n('A91F')
      function U(e) {
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
            r = m()(e)
          if (t) {
            var o = m()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var H = (function (e) {
          u()(n, e)
          var t = U(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.event,
                    n = e.image,
                    r = e.supportText
                  return y.createElement(
                    F.a,
                    { style: V.root },
                    y.createElement(
                      L.a,
                      { withGutter: !0 },
                      y.createElement(
                        F.a,
                        { style: V.bodyColumn },
                        r ? y.createElement(M.b, { color: 'gray700', size: 'subtext2' }, r) : null,
                        y.createElement(M.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? y.createElement(
                            F.a,
                            { style: V.coverContainer },
                            y.createElement(
                              A.a,
                              { ratio: 1 },
                              y.createElement(N.a, { accessibilityLabel: '', aspectMode: B.a.SQUARE, image: n }),
                            ),
                          )
                        : null,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        z = '100px',
        V = j.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            bodyColumn: { flexGrow: 7, justifyContent: 'center' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.small,
              flexGrow: 1,
              justifyContent: 'flex-end',
              maxHeight: z,
              maxWidth: z,
              overflow: 'hidden',
              width: '25%',
            },
          }
        }),
        W = H,
        X = n('5T6p'),
        G = n('EHV7')
      function K(e) {
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
            r = m()(e)
          if (t) {
            var o = m()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Z = (function (e) {
          u()(n, e)
          var t = K(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isDisabled,
                    n = e.resultContext,
                    r = e.topic
                  return y.createElement(
                    F.a,
                    { style: [Q.root, t && Q.disabled] },
                    y.createElement(M.b, { weight: 'bold', withHashflags: !0 }, r),
                    n
                      ? y.createElement(
                          F.a,
                          { style: Q.context },
                          this._renderIcon(),
                          y.createElement(M.b, { color: 'gray700' }, n.display_string),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderIcon',
                value: function () {
                  var e = this.props.resultContext
                  return e && e.types[0] && 'followable_topic' === e.types[0].type
                    ? y.createElement(G.a, { style: Q.icon })
                    : null
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        Q = j.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            context: { alignItems: 'center', flexDirection: 'row' },
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.subtext2,
              paddingRight: e.spaces.space4,
              width: e.fontSizes.subtext2,
            },
            disabled: { backgroundColor: e.colors.gray0 },
          }
        }),
        Y = Z,
        J = (n('yH/f'), n('2G9S'), n('M0jS')),
        q = function (e, t) {
          return Object(J.d)(e, t.userId)
        },
        $ = Object(E.a)().propsFromState(function () {
          return { userSpace: q }
        }),
        ee = n('3XMw'),
        te = n.n(ee),
        ne = n('tocL'),
        re = 'TypeaheadUser',
        oe = n('GZwR'),
        ae = n('IMA+'),
        ie = n('v6aA')
      function ce(e) {
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
            r = m()(e)
          if (t) {
            var o = m()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var le = te.a.ae2205d1,
        se = te.a.d960b55b,
        ue = te.a.fd06b02f,
        de = Object.freeze({
          num_of_followers: ne.a.Follow,
          bio: ne.a.TextOnly,
          location: ne.a.Location,
          num_tweets: ne.a.NewTweets,
          follow_relationship: ne.a.Follow,
          followers_follow: ne.a.Follow,
          social_proof: ne.a.SocialProof,
          follow_relationship_mutual_follow: ne.a.FollowMutual,
          follow_relationship_followed: ne.a.FollowFollowed,
          follow_relationship_following: ne.a.FollowFollowing,
        }),
        fe = (function (e) {
          u()(n, e)
          var t = ce(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              h()(l()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              h()(l()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.isDisabled,
                  r = t.item,
                  o = t.onItemClick
                o && o(r, !!n)
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarUri,
                    n = e.decoration,
                    r = e.disabledMessage,
                    o = e.isDisabled,
                    a = e.isProtected,
                    i = e.isVerified,
                    c = e.name,
                    l = e.screenName,
                    s = e.source,
                    u = e.userId,
                    d = e.userSpace,
                    f = e.withNewTypeaheadUI,
                    p = this.context.featureSwitches,
                    m = this._getSocialContext(),
                    v = this._getResultContext() || m,
                    h = s === oe.d.SearchBox,
                    b = d && p.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? d : void 0
                  return (
                    b && (b.accessibilityLabel = ue({ screenName: l })),
                    y.createElement(ae.a, {
                      avatarSize: 'xLarge',
                      avatarUri: t,
                      decoration: n,
                      disabledMessage: o ? r : void 0,
                      displayMode: f ? 'ExperimentalUserTypeahead' : 'UserCompact',
                      isProtected: a,
                      isVerified: i,
                      name: c,
                      onAvatarClick: this._handleAvatarClick,
                      onCellClick: this._handleClick,
                      onScreenNameClick: this._handleClick,
                      presenceIndicator: h ? b : void 0,
                      screenName: l,
                      socialContext: v,
                      testID: re,
                      userId: u,
                      withLink: !1,
                    })
                  )
                },
              },
              {
                key: '_getSocialContext',
                value: function () {
                  var e = this.props.socialContext
                  if (e && e.following) {
                    var t = e.followed_by ? le : se
                    return { contextType: ne.a.Follow, text: t }
                  }
                },
              },
              {
                key: '_getResultContext',
                value: function () {
                  var e = this.props,
                    t = e.resultContext,
                    n = e.source
                  if (t && t.display_string && t.types && n === oe.d.SearchBox)
                    return {
                      contextType: (t.types.length ? de[t.types[0].type] : void 0) || ne.a.TextOnly,
                      text: t.display_string,
                    }
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      h()(fe, 'contextType', ie.a), h()(fe, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = $.forwardRef(fe),
        me = n('htQn')
      function ve(e) {
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
            r = m()(e)
          if (t) {
            var o = m()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var he = (function (e) {
        u()(n, e)
        var t = ve(n)
        function n(e, r) {
          var a
          return (
            o()(this, n),
            (a = t.call(this, e, r)),
            h()(l()(a), '_onViewRef', function (e) {
              a._viewRef = e
              var t = a.props.onRef
              t && t(e)
            }),
            h()(l()(a), '_handleClick', function () {
              var e = a.props.item
              e.type !== oe.b.User && a.props.onClick && a.props.onClick(e, a.isDisabled)
            }),
            (a._withNewTypeaheadUI =
              a.context.featureSwitches.isTrue('responsive_web_account_search_readability_enabled') &&
              e.source === oe.d.SearchBox),
            a
          )
        }
        return (
          i()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this
                ;(this._loaded = !0),
                  this._viewRef &&
                    (this._rafId = window.requestAnimationFrame(function () {
                      e._viewRef && e._viewRef.setNativeProps({ style: { opacity: 1 } })
                    }))
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this.props.onRef
                t && t !== e.onRef && this._viewRef && t(this._viewRef)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this._rafId && window.cancelAnimationFrame(this._rafId)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.domId,
                  n = e.isDisabled,
                  r = e.isFocused,
                  o = e.isInMultiSelect,
                  a = e.isSelected,
                  i = e.style
                return y.createElement(
                  b.a,
                  { viewType: 'typeahead_result' },
                  y.createElement(
                    F.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: {
                        checked: !(!o || !a) || void 0,
                        selected: n ? void 0 : (o && a) || (!o && !!r),
                      },
                      nativeID: t,
                      testID: w,
                    },
                    y.createElement(
                      me.a,
                      {
                        accessibilityRole: o ? 'checkbox' : 'button',
                        disabled: n,
                        focusable: !0,
                        onPress: this._handleClick,
                        style: [r && ye.focused, ye.transitionStyles, this._loaded && ye.loaded, i],
                        viewRef: this._onViewRef,
                      },
                      this._renderResult(),
                    ),
                  ),
                )
              },
            },
            {
              key: '_renderResult',
              value: function () {
                var e = this.props,
                  t = e.disabledMessage,
                  n = e.isDisabled,
                  r = e.isSelected,
                  o = e.item,
                  a = e.onClick,
                  i = e.renderUserDecoration,
                  c = e.source
                switch (o.type) {
                  case oe.b.User:
                    var l = o.data,
                      s = i ? i({ userId: l.id_str, isSelected: r }) : void 0
                    return y.createElement(pe, {
                      avatarUri: l.profile_image_url_https,
                      canDm: !!l.can_dm,
                      canMediaTag: !!l.can_media_tag,
                      decoration: s || void 0,
                      disabledMessage: t,
                      isDisabled: n,
                      isProtected: !!l.protected,
                      isVerified: !!l.verified,
                      item: o,
                      name: l.name,
                      onItemClick: a,
                      resultContext: l.result_context,
                      screenName: l.screen_name,
                      socialContext: l.social_context,
                      source: c,
                      userId: l.id_str,
                      withNewTypeaheadUI: this._withNewTypeaheadUI,
                    })
                  case oe.b.Event:
                    var u = o.data
                    return this._withNewTypeaheadUI
                      ? y.createElement(X.a, {
                          image: u.primary_image && u.primary_image.original_info,
                          style: ye.itemPadding,
                          supportText: u.supporting_text,
                          title: u.topic,
                          withNewTypeaheadUI: !0,
                        })
                      : y.createElement(W, {
                          event: u.topic,
                          image: u.primary_image && u.primary_image.original_info,
                          supportText: u.supporting_text,
                        })
                  case oe.b.Hashtag:
                  case oe.b.Topic:
                    var d = o.data
                    return y.createElement(Y, { isDisabled: n, resultContext: d.result_context, topic: d.topic })
                  case oe.b.DMConversation:
                    return (
                      !!this.context.loggedInUserId &&
                      y.createElement(T, {
                        conversationId: o.id,
                        isDisabled: n,
                        isSelected: r,
                        perspective: this.context.loggedInUserId,
                      })
                    )
                  case oe.b.NavigationLink:
                    var f = o.data.text
                    return y.createElement(M.b, { style: ye.navigationLink }, f)
                  case oe.b.NoResult:
                    var p = o.data.text
                    return y.createElement(M.b, { style: ye.noResult }, p)
                  default:
                    return null
                }
              },
            },
            {
              key: 'isDisabled',
              get: function () {
                return !!this.props.isDisabled
              },
            },
          ]),
          n
        )
      })(y.Component)
      h()(he, 'contextType', ie.a)
      var ye = j.a.create(function (e) {
          return {
            checkIcon: { color: e.colors.primary },
            navigationLink: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
            noResult: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            loaded: { opacity: 1 },
            focused: { backgroundColor: e.colors.gray0 },
            transitionStyles: { transitionProperty: 'opacity', transitionDuration: '250ms', opacity: 0 },
          }
        }),
        be = function (e) {
          return e.isSelected ? y.createElement(g.a, { accessibilityHidden: !0, style: ye.checkIcon }) : null
        }
      t.b = he
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F'), n('+KXO')
      var r = n('ERkP'),
        o = n('aWyx'),
        a = n('XnpN'),
        i = n('3XMw'),
        c = n.n(i),
        l = n('rHpw'),
        s = n('TIdA'),
        u = n('A91F'),
        d = n('jhWN'),
        f = n('9Xij'),
        p = n('Znyr'),
        m = n('cm6r'),
        v = n('U+bB'),
        h = n('MWbm'),
        y = c.a.fd48249b,
        b = l.a.create(function (e) {
          return {
            circle: { borderRadius: e.borderRadii.infinite, overflow: 'hidden' },
            container: { height: 'auto', width: '100%' },
            itemAccessory: { top: -e.spacesPx.space24, right: -e.spacesPx.space24 },
            userDecoration: {
              fontSize: e.fontSizes.subtext3,
              position: 'absolute',
              backgroundColor: e.colors.gray100,
              marginLeft: e.spaces.space8,
              boxSizing: 'border-box',
              width: e.spaces.space24,
              height: e.spaces.space24,
            },
          }
        }),
        g = l.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            left: { flex: 1 },
            right: {
              flex: 1,
              marginLeft: e.borderWidths.small,
              marginRight: 'calc(-1 * '.concat(e.borderWidths.small, ')'),
            },
          }
        }),
        w = l.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        _ = function (e) {
          var t = e.left,
            n = e.right
          return r.createElement(
            h.a,
            { style: g.container },
            r.createElement(h.a, { style: g.left }, t),
            r.createElement(h.a, { style: g.right }, n),
          )
        },
        x = function (e) {
          var t = e.bottom,
            n = e.top
          return r.createElement(
            h.a,
            { style: w.container },
            r.createElement(h.a, { style: w.top }, n),
            r.createElement(h.a, { style: w.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size,
              o = e.withVDLRefresh ? 'xxxLarge' : 'xxLarge'
            return r.createElement(
              h.a,
              { key: t.id_str, style: b.container },
              r.createElement(d.a, { size: n || o, uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var o = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.createElement(
                  h.a,
                  { key: e.id_str, style: b.container },
                  r.createElement(d.a, {
                    aspectRatio: o,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.createElement(f.a, { ratio: 1 }, r.createElement(_, { left: n[1], right: n[0] }))
            var o = r.createElement(x, { bottom: n[2], top: n[1] }),
              a = n[0]
            return r.createElement(_, { left: o, right: a })
          },
          i = e.conversation,
          c = e.link,
          g = e.perspective,
          w = e.withBadge,
          I = i && i.avatar_image_https,
          E = i
            ? Object(a.a)(i, g).map(function (e) {
                return e.user
              })
            : [],
          O = E.slice(0, 3),
          C =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? r.createElement(s.a, {
                    accessibilityLabel: '',
                    aspectMode: u.a.SQUARE,
                    backgroundColor: l.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(i) ||
            (function (e) {
              return e ? r.createElement(v.a, { source: e }) : null
            })(I) ||
            (function (e) {
              var o = e.length
              return 0 === o ? null : 1 === o ? t(e[0]) : r.createElement(h.a, { style: b.circle }, n(e))
            })(O),
          R =
            c ||
            (function (e, t) {
              if (e)
                return e.type === o.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === o.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(i, E),
          k = w && null != i && i.participants ? Object.keys(i.participants).length - 1 : 0
        return C
          ? r.createElement(
              r.Fragment,
              null,
              r.createElement(f.a, { ratio: 1 }, R ? r.createElement(m.a, { interactiveStyles: null, link: R }, C) : C),
              k
                ? (function (e) {
                    var t = e.badgeCount
                    return r.createElement(
                      h.a,
                      { style: b.itemAccessory },
                      r.createElement(p.a, {
                        count: t,
                        standalone: !0,
                        style: b.userDecoration,
                        textColor: 'normal',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: y,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: k })
                : null,
            )
          : null
      }
    },
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      })
      var r = n('ddV6'),
        o = n.n(r),
        a = (n('ho0z'), n('+KXO'), n('z84I'), n('LW0h'), n('Xrkv')),
        i = n('aWyx'),
        c = n('XnpN'),
        l = n('3XMw'),
        s = n.n(l),
        u = s.a.b5b7fb93,
        d = s.a.g755fcde,
        f = s.a.f6b1ff81
      t.a = function (e, t, n) {
        var r = e.type,
          o = e.name,
          a = e.participants,
          l = void 0 === a ? {} : a
        if (r === i.a.GROUP && o) return o
        if (Object.keys(l).length) {
          if (r === i.a.GROUP && n) return u
          var s = Object(c.a)(e, t).map(function (e) {
            return e.user
          })
          return p(s, t, r)
        }
      }
      var p = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.a.GROUP,
          r = e
            .filter(function (e) {
              return e.id_str !== t
            })
            .map(function (e) {
              return e.name
            })
        switch (r.length) {
          case 0:
            return d
          case 1:
            var c = o()(r, 1),
              l = c[0]
            return n === i.a.GROUP ? f({ name: l }) : l
          default:
            var s = !0
            return Object(a.a)(r, s)
        }
      }
    },
    tAeL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return N
      })
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        i = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        v = n('KEM+'),
        h = n.n(v),
        y = (n('vrRf'), n('z84I'), n('2G9S'), n('ERkP')),
        b = n('+Kfv'),
        g = n('0yYu'),
        w = n('7nmT'),
        _ = n.n(w),
        x = n('ddV6'),
        I = n.n(x),
        E = n('3XMw'),
        O = n.n(E),
        C = n('kIAd'),
        R = n('JYMr'),
        k = n('rHpw'),
        S = O.a.f2b3fe06,
        D = k.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        j = function (e) {
          var t = e.isLoading,
            n = y.useState(!1),
            r = I()(n, 2),
            o = r[0],
            a = r[1]
          return (
            y.useEffect(
              function () {
                var e
                return (
                  t
                    ? (e = setTimeout(function () {
                        return a(!0)
                      }, C.a))
                    : a(!1),
                  function () {
                    return clearTimeout(e)
                  }
                )
              },
              [t],
            ),
            y.createElement(R.a, { ariaValueText: o ? S : '', indeterminate: o, style: !o && D.hidden })
          )
        },
        P = n('ZcYN'),
        T = n('MWbm'),
        F = n('oQhu'),
        L = n('w6IS'),
        M = n('MXDK')
      function A(e) {
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
            r = m()(e)
          if (t) {
            var o = m()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var N = (function (e) {
        u()(n, e)
        var t = A(n)
        function n(e, r) {
          var a
          return (
            o()(this, n),
            (a = t.call(this, e)),
            h()(l()(a), '_setFocusedItemRef', function (e) {
              a._shouldScrollToFocusedItem &&
                e &&
                (Object(M.c)(a._getScrollParent(), e), (a._shouldScrollToFocusedItem = !1))
            }),
            h()(l()(a), '_resetScroll', function () {
              var e = a._getScrollParent()
              e && (e.scrollTop = 0)
            }),
            h()(
              l()(a),
              '_getFlattenedItems',
              Object(F.a)(function (e) {
                return Object(L.a)(e)
              }),
            ),
            h()(l()(a), '_handleItemClick', function (e, t) {
              var n = a.props,
                r = n.items,
                o = n.onItemClick,
                i = a._getFlattenedItems(r).indexOf(e)
              e && !t && !a._shouldBlockInteractivity && o(e, i), a._resetFocus()
            }),
            h()(l()(a), '_getResultCount', function () {
              var e = a.props.items
              return a._getFlattenedItems(e).length
            }),
            h()(l()(a), '_setFocusIndex', function (e, t) {
              var n = a.props,
                r = n.items,
                o = n.onItemFocusChanged
              ;(a._shouldScrollToFocusedItem = t), a.setState({ focusIndex: e }), o && o(a._getFlattenedItems(r)[e])
            }),
            h()(l()(a), '_resetFocus', function () {
              a._setFocusIndex(a.props.withItemAlwaysSelected ? 0 : -1)
            }),
            h()(l()(a), 'focusNext', function () {
              var e = a.state.focusIndex,
                t = a._getResultCount()
              if (0 !== t) {
                var n = e + 1 >= t ? 0 : e + 1
                a._setFocusIndex(n, !0)
              }
            }),
            h()(l()(a), 'focusPrevious', function () {
              var e = a.state.focusIndex,
                t = a._getResultCount()
              if (0 !== t) {
                var n = e - 1 < 0 ? t - 1 : e - 1
                a._setFocusIndex(n, !0)
              }
            }),
            h()(l()(a), 'hasFocusedItem', function () {
              var e = a.state.focusIndex,
                t = a._getResultCount()
              return e >= 0 && t > e
            }),
            h()(l()(a), 'selectFocusedItem', function () {
              var e = a.state.focusIndex,
                t = a.props,
                n = t.getItemIsDisabled,
                r = t.items
              if (a.hasFocusedItem()) {
                var o = a._getFlattenedItems(r)[e],
                  i = !!n && n(o, o.data)
                a._handleItemClick(o, i)
              }
            }),
            (a.state = { focusIndex: e.withItemAlwaysSelected ? 0 : -1 }),
            a
          )
        }
        return (
          i()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this._resetFocus()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                clearTimeout(this._interactivityTimeout)
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this
                e.items !== this.props.items &&
                  (this._resetFocus(),
                  this._resetScroll(),
                  this._interactivityTimeout && clearTimeout(this._interactivityTimeout),
                  (this._shouldBlockInteractivity = !0),
                  (this._interactivityTimeout = setTimeout(function () {
                    t._shouldBlockInteractivity = !1
                  }, 500)))
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.domId,
                  r = t.isLoading,
                  o = t.items,
                  a = t.renderHeader,
                  i = t.renderNoResultsState,
                  c = t.selectedItems,
                  l = t.style,
                  s = r || o.length,
                  u = 0,
                  d = !!c
                return s
                  ? y.createElement(
                      b.a,
                      { viewType: 'typeahead_dropdown' },
                      y.createElement(
                        T.a,
                        { accessibilityMultiSelectable: d, accessibilityRole: 'listbox', nativeID: n, style: l },
                        y.createElement(j, { isLoading: !!r }),
                        a ? a() : null,
                        o.length
                          ? o.map(function (t, n) {
                              var r = !Array.isArray(o[n - 1]) && n > 0,
                                a = n < o.length - 1,
                                i = Array.isArray(t)
                                  ? e._renderTypeaheadGroup(t, u, r, a)
                                  : e._renderTypeaheadItem(t, u)
                              return (u += Array.isArray(t) ? t.length : 1), i
                            })
                          : null,
                      ),
                    )
                  : i
                  ? i()
                  : null
              },
            },
            {
              key: '_renderTypeaheadGroup',
              value: function (e, t, n, r) {
                var o = this,
                  a = this.props.withSectionDivider
                return y.createElement(
                  y.Fragment,
                  { key: 'typeaheadGroup-'.concat(t) },
                  a && n ? y.createElement(g.a, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                  e.map(function (e, n) {
                    return o._renderTypeaheadItem(e, t + n)
                  }),
                  a && r ? y.createElement(g.a, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
                )
              },
            },
            {
              key: '_renderTypeaheadItem',
              value: function (e, t) {
                var n = this.props,
                  r = n.ariaDescendantId,
                  o = n.getItemDisabledMessage,
                  a = n.getItemIsDisabled,
                  i = n.renderUserDecoration,
                  c = n.selectedItems,
                  l = n.source,
                  s = this.state.focusIndex,
                  u = !(!c || !e.id) && c.indexOf(e.id) >= 0,
                  d = !!c,
                  f = s === t,
                  p = a && a(e, e.data),
                  m = o && o(e, e.data)
                return y.createElement(P.b, {
                  disabledMessage: m,
                  domId: f ? r : void 0,
                  isDisabled: p,
                  isFocused: f,
                  isInMultiSelect: d,
                  isSelected: u,
                  item: e,
                  key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                  onClick: this._handleItemClick,
                  onRef: f ? this._setFocusedItemRef : void 0,
                  renderUserDecoration: i,
                  source: l,
                })
              },
            },
            {
              key: '_getScrollParent',
              value: function () {
                if (!this._scrollParent) {
                  var e = Object(M.a)(_.a.findDOMNode(this))
                  this._scrollParent = e === window ? null : e
                }
                return this._scrollParent
              },
            },
          ]),
          n
        )
      })(y.Component)
    },
    woHV: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        a = n('m3Bd'),
        i = n.n(a),
        c = (n('ERkP'), n('k/Ka')),
        l = n('rHpw').a.create({
          initial: {
            alignItems: 'stretch',
            borderWidth: 0,
            borderStyle: 'solid',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            margin: 0,
            padding: 0,
            position: 'relative',
            zIndex: 0,
            minHeight: 0,
            minWidth: 0,
          },
        })
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
      function u(e) {
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
      t.a = function (e) {
        var t = e.style,
          n = i()(e, ['style'])
        return Object(c.a)('form', u(u({}, n), {}, { action: '#', style: [l.initial, t] }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
