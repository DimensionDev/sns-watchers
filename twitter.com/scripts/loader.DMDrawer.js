;(window.webpackJsonp = window.webpackJsonp || []).push([
  [164],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        l = n('M2x3'),
        i = 'settingsAppBar',
        c = n('/yvb'),
        s = n('rHpw'),
        u = o.a.bb081ea1,
        d = { viewType: 'settings_button' },
        p = r.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return r.createElement(c.a, {
            accessibilityLabel: u,
            behavioralEventContext: d,
            hoverLabel: { label: u },
            icon: r.createElement(l.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: f.button,
            testID: i,
            type: 'primaryText',
          })
        }),
        f = s.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = p
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        l = n.n(o),
        i = n('5Yy7'),
        c = n.n(i),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        h = n('rHpw'),
        m = n('MWbm')
      function b(e) {
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
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var y = (function (e) {
          c()(n, e)
          var t = b(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.createElement(m.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(f.Component),
        g = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        l = n.n(o),
        i = n('5Yy7'),
        c = n.n(i),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        h = n('3XMw'),
        m = n.n(h),
        b = n('rHpw'),
        y = n('+/1j'),
        g = n('MWbm')
      function v(e) {
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
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var _ = m.a.e5b0063d,
        E = 0,
        O = (function (e) {
          c()(n, e)
          var t = v(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(E)), (E += 1), e
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = _({ title: n })
                  return f.createElement(
                    g.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    f.createElement(
                      y.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: b.a.visuallyHidden,
                      },
                      n,
                    ),
                    f.createElement(g.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(f.Component)
      t.a = O
    },
    Avzu: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        l = n('Lsrn'),
        i = n('k/Ka')
      function c(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(i.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [l.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    BUB3: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('m3Bd'),
        l = n.n(o),
        i = n('ERkP'),
        c = n('sNn6'),
        s = n('rHpw'),
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var f = s.a.create(function (e) {
        return {
          activeRoot: { backgroundColor: e.colors.gray0 },
          overlay: p(
            p({}, s.a.absoluteFillObject),
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
          n = l()(e, ['children'])
        return i.createElement(c.a, n, function (e) {
          return i.createElement(
            u.a,
            { style: e && f.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? i.createElement(u.a, { pointerEvents: 'none', style: f.overlay }) : null,
          )
        })
      }
    },
    FS1z: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        l = n.n(o),
        i = n('1Pcy'),
        c = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('2G9S'), n('ERkP')),
        g = n('rxPX'),
        v = n('0KEI'),
        _ = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        E = function (e, t) {
          return t.module.selectItems(e)
        },
        O = Object(g.a)()
          .propsFromState(function (e) {
            return { fetchStatus: _, items: E }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(v.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        S = n('v//M'),
        I = n('sIe2'),
        w = n('3XMw'),
        k = n.n(w),
        C = n('TEoO')
      function x(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var R = k.a.i9028824,
        P = 'sliceTimeline',
        D = function (e) {
          return e
        },
        j = { viewType: 'timeline' },
        T = (function (e) {
          u()(n, e)
          var t = x(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(c()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  r = t.items,
                  a = t.noItemsRenderer,
                  o = t.numColumns,
                  l = t.onScrollEnd,
                  i = t.renderer,
                  c = t.withoutHeadroom
                return !r || o < 1
                  ? null
                  : 1 === o
                  ? y.createElement(C.a, {
                      cacheKey: P,
                      footer: n,
                      identityFunction: D,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: l,
                      renderer: i,
                      withoutHeadroom: c,
                    })
                  : y.createElement(I.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: D,
                      numColumns: o,
                      renderItem: i,
                    })
              }),
              b()(c()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              b()(c()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetch,
                  o = t.fetchIfNeeded
                ;(n ? a : o)().catch(r())
              }),
              e
            )
          }
          return (
            l()(n, [
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
                    r = e.retryMessage
                  return n
                    ? y.createElement(S.a, {
                        accessibilityLabel: R,
                        behavioralEventContext: j,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: r,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(y.Component)
      b()(T, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var M = O(T)
      t.a = M
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('ERkP'),
        l = n('5UID'),
        i = n('3GUV'),
        c = n('iBK2'),
        s = o.createElement(i.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = o.createElement(c.b, n)
          return t ? o.createElement(l.a, { title: t }, r) : r
        }
      ;(u.defaultProps = { footer: s }), (t.a = u)
    },
    fuhe: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMDrawer', function () {
          return wt
        })
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        l = n.n(o),
        i = n('Y9Ll'),
        c = n.n(i),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        b = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('2G9S'), n('3voH'), n('ERkP')),
        _ = n('ZUOq'),
        E = n('MMRb'),
        O = n('RqPI'),
        S = n('rxPX'),
        I = n('0KEI'),
        w = Object(S.a)()
          .propsFromState(function () {
            return {
              conversations: E.selectConversations,
              drawerExperimentEnabled: E.selectDrawerExperimentEnabled,
              perspective: O.p,
              poppedOutConversationId: E.selectPoppedOutConversationId,
              visibility: E.selectDrawerVisibility,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchInboxIfNeeded: E.fetchInboxIfNeeded,
              loadDrawerVisibilityFromPersistence: E.loadDrawerVisibilityFromPersistence,
              setDrawerVisibility: E.setDrawerVisibility,
            }
          }),
        k = n('V/6K'),
        C =
          (n('z84I'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('7x/C'),
          n('lTEL'),
          n('kYxP'),
          n('CDB5')),
        x = n('1YZw'),
        R = n('hqKg'),
        P = n('X/yg'),
        D = n('AQOc'),
        j = n('UhuB'),
        T = n('l0YN'),
        M = n('G6rE'),
        F = n('P1r1')
      function L(e, t) {
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
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var H = function (e, t) {
          return t.conversationId
        },
        B = Object(R.createSelector)(
          function (e, t) {
            return E.selectEntriesForConversation(e, H(0, t))
          },
          O.p,
          function (e, t) {
            return t ? Object(P.d)(e, t) : void 0
          },
        ),
        N = function (e) {
          return function (t) {
            return C.c(e, t)
          }
        },
        K = function (e) {
          return function (t, n) {
            return C.a(e, t, n)
          }
        },
        U = {
          conversation: function (e, t) {
            return E.selectConversation(e, H(0, t))
          },
          entries: E.selectEntries,
          perspective: O.p,
          users: M.e.selectAll,
          dataSaverMode: F.k,
          dtabBarInfo: F.n,
          quickReplyOptions: B,
          visibility: E.selectDrawerVisibility,
          inboxUnreadCount: T.a,
          isUnread: function (e, t) {
            return !E.selectConversationIsRead(e, H(0, t))
          },
          isDmReceiptSettingEnabled: j.n,
        },
        V = {
          draftText: function (e, t) {
            return C.l(e, H(0, t))
          },
          gifMetadata: function (e, t) {
            return C.h(e, H(0, t))
          },
          isUploading: function (e, t) {
            return C.j(e, H(0, t))
          },
          media: function (e, t) {
            return C.i(e, H(0, t))
          },
          mediaUploadProgress: function (e, t) {
            return C.k(e, H(0, t))
          },
        },
        z = Object(S.a)()
          .propsFromState(function () {
            return A(A({}, U), V)
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = e.dataSaverMode,
              r = e.draftText,
              a = e.dtabBarInfo,
              o = e.entries,
              l = e.gifMetadata,
              i = e.inboxUnreadCount,
              c = e.isDmReceiptSettingEnabled,
              s = e.isUnread,
              u = e.isUploading,
              d = e.media,
              p = e.mediaUploadProgress,
              f = e.perspective,
              h = e.quickReplyOptions,
              m = e.users,
              b = e.visibility,
              y = null == t ? void 0 : t.data
            return {
              conversation: y && Object(D.a)(y, o, m),
              perspective: f,
              dataSaverMode: n,
              draftText: r,
              dtabBarInfo: a,
              gifMetadata: l,
              inboxUnreadCount: i,
              isDmReceiptSettingEnabled: c,
              isUploading: u,
              isUnread: s,
              media: d,
              mediaUploadProgress: p,
              quickReplyOptions: h,
              visibility: b,
            }
          })
          .propsFromActions(function (e) {
            var t = e.conversationId
            return {
              addMedia: K(t),
              addToast: x.b,
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchConversationHistory: E.fetchConversationHistory,
              removeMedia: N(t),
              saveText: C.f,
              sendMessage: C.m,
              updateConversationReadState: E.updateConversationReadState,
              updateTyping: E.updateTyping,
              fetchUpdatesIfNeeded: E.fetchUpdatesIfNeeded,
            }
          })
          .withAnalytics({ page: 'messages', section: 'thread_drawer' }),
        G = n('aWyx'),
        q = n('qz2E'),
        W = n('Oi4X'),
        Q = n('OhSZ'),
        Y =
          (n('uFXj'),
          Object(S.a)()
            .propsFromState(function () {
              return { visibility: E.selectDrawerVisibility }
            })
            .propsFromActions(function () {
              return { popOutConversation: E.popOutConversation, setDrawerVisibility: E.setDrawerVisibility }
            })
            .withAnalytics()),
        X = n('AQ79'),
        $ = n('3XMw'),
        Z = n.n($),
        J = n('OrGc'),
        ee = n('hACr'),
        te = n('fs1G'),
        ne = n('MWbm'),
        re = n('/yvb'),
        ae = n('Znyr'),
        oe = n('t62R'),
        le = n('xKuM'),
        ie = n('rHpw'),
        ce = n('v6aA'),
        se = n('95Se'),
        ue = n('Avzu'),
        de = n('Lsrn'),
        pe = n('k/Ka')
      function fe(e, t) {
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
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fe(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var me = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(pe.a)(
          'svg',
          he(
            he({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [de.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          v.createElement(
            'g',
            null,
            v.createElement('path', {
              d: 'M12 19.344l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 19.344z',
            }),
            v.createElement('path', {
              d: 'M12 11.535l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 11.535z',
            }),
          ),
        )
      }
      me.metadata = { width: 24, height: 24 }
      var be = me
      function ye(e, t) {
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
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ye(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ye(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ve = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(pe.a)(
          'svg',
          ge(
            ge({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [de.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          v.createElement(
            'g',
            null,
            v.createElement('path', {
              d: 'M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z',
            }),
            v.createElement('path', {
              d: 'M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z',
            }),
          ),
        )
      }
      ve.metadata = { width: 24, height: 24 }
      var _e = ve,
        Ee = n('x0mb')
      function Oe(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Se = Z.a.a2f8105f,
        Ie = Z.a.d227d19e,
        we = Z.a.c64c1883,
        ke = Z.a.j7d0e835,
        Ce = Z.a.b08821f3,
        xe = Z.a.e736990a,
        Re = Z.a.cdcebd22,
        Pe = (function (e) {
          p()(n, e)
          var t = Oe(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(u()(e), '_headerBar', v.createRef()),
              g()(
                u()(e),
                '_appBarScrollEnabled',
                e.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
              ),
              g()(u()(e), '_isExpanded', function () {
                return e.props.visibility === X.a.EXPANDED
              }),
              g()(u()(e), '_renderLeftControl', function () {
                var t = e.props.inboxUnreadCount
                return v.createElement(
                  ne.a,
                  null,
                  v.createElement(re.a, {
                    accessibilityLabel: Ce,
                    icon: v.createElement(se.a, null),
                    onPress: e._handleUnpopConvo,
                    type: e._getButtonType(),
                  }),
                  t && t > 0
                    ? v.createElement(ae.a, {
                        pip: !0,
                        style: De.newMessagePip,
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: function () {
                          return ''
                        },
                      })
                    : null,
                )
              }),
              g()(u()(e), '_getButtonType', function () {
                var t = e.props,
                  n = t.hasNewMessages
                return t.isHighlighted && n ? 'onMediaText' : 'primaryText'
              }),
              g()(u()(e), '_renderRightControl', function () {
                var t = e.props.conversationTitle,
                  n = e._isExpanded(),
                  r = e._getButtonType()
                return v.createElement(
                  ne.a,
                  { style: De.rightControls },
                  t
                    ? null
                    : v.createElement(re.a, {
                        accessibilityLabel: we,
                        hoverLabel: { label: Re },
                        icon: v.createElement(ue.a, null),
                        onPress: e._handleNewMessage,
                        type: r,
                      }),
                  n
                    ? v.createElement(re.a, {
                        accessibilityLabel: Ie,
                        hoverLabel: { label: Ie },
                        icon: v.createElement(be, null),
                        onPress: e._handleToggleVisibility,
                        type: r,
                      })
                    : v.createElement(re.a, {
                        accessibilityLabel: ke,
                        hoverLabel: { label: ke },
                        icon: v.createElement(_e, null),
                        onPress: e._handleToggleVisibility,
                        type: r,
                      }),
                )
              }),
              g()(u()(e), '_handleUnpopConvo', function () {
                ;(0, e.props.popOutConversation)(null)
              }),
              g()(u()(e), '_handleToggleVisibility', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onDrawerOpen,
                  a = t.setDrawerVisibility,
                  o = e._isExpanded() ? X.a.COLLAPSED : X.a.EXPANDED
                o === X.a.COLLAPSED
                  ? n.scribe({ action: 'collapse' })
                  : o === X.a.EXPANDED && (n.scribe({ action: 'expand' }), r && r()),
                  a(o)
              }),
              g()(u()(e), '_handleToggleVisibilityKeyboard', function () {
                e._handleToggleVisibility(), e._headerBar && e._headerBar.current && e._headerBar.current.focus()
              }),
              g()(u()(e), '_handleNewMessage', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.history
                n.scribe({ section: 'compose_drawer', component: 'dm', action: 'show' }),
                  r.push({ pathname: '/messages/compose', state: { source: 'drawer' } })
              }),
              g()(u()(e), '_renderTitle', function () {
                var t = e.props,
                  n = t.conversationTitle,
                  r = t.hasNewMessages,
                  a = t.isHighlighted,
                  o = n || v.createElement(oe.b, null, Se)
                return v.createElement(
                  ne.a,
                  { style: De.titleContainer },
                  v.createElement(ne.a, { style: [De.titleTextRoot, a && r ? De.titleTextHighlighted : null] }, o),
                  r
                    ? v.createElement(
                        ne.a,
                        { style: De.newMessageDotContainer },
                        v.createElement(Ee.a, {
                          accessibilityLabel: xe,
                          style: [De.newMessageDotRoot, a ? De.newMessageDotHighlighted : De.newMessageDotRegular],
                        }),
                      )
                    : null,
                )
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.hasNewMessages,
                    r = t.isHighlighted,
                    a = t.triggerHighlight
                  e.isHighlighted || r || e.hasNewMessages || !n || (a && a())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.conversationSubtitle,
                    r = t.conversationTitle,
                    a = t.hasNewMessages,
                    o = t.isHighlighted,
                    l = a ? (o ? [De.headerHighlighted] : [De.headerActive]) : [],
                    i = this._isExpanded(),
                    c = this._appBarScrollEnabled && !o
                  return v.createElement(
                    ee.a,
                    {
                      enabled: !0,
                      handlers:
                        ((e = {}),
                        g()(e, J.e.goLists, te.a),
                        g()(e, J.e.toggleDMDrawer, this._handleToggleVisibilityKeyboard),
                        e),
                    },
                    v.createElement(
                      ne.a,
                      {
                        ref: this._headerBar,
                        style: [De.headerRoot, !i && De.headerBorderClosed].concat(l, [De.cursor]),
                      },
                      v.createElement(le.a, {
                        leftControl: r && this._isExpanded() ? this._renderLeftControl() : null,
                        onMiddleControlClick: this._handleToggleVisibility,
                        rightControl: this._renderRightControl(),
                        style: this._appBarScrollEnabled ? De.roundedAppBarCorners : null,
                        subtitle: n,
                        title: this._renderTitle(),
                        withBackground: c,
                        withBottomBorder: !0,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(v.Component)
      g()(Pe, 'contextType', ce.a)
      var De = ie.a.create(function (e) {
          return {
            root: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.navigationBackground,
              borderColor: e.colors.borderColor,
              borderWidth: e.borderWidths.small,
              marginRight: e.spaces.space20,
              width: _.a.columnWidths.secondary.normal,
            },
            cursor: { cursor: 'pointer' },
            expanded: { height: _.a.columnWidths.secondary.normal },
            headerRoot: {
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
              transition: 'all 0.3s ease',
            },
            headerBorderClosed: { borderColor: e.colors.navigationBackground },
            headerActive: { backgroundColor: e.colors.unreadCellBackground },
            headerHighlighted: { borderColor: e.colors.primary, backgroundColor: e.colors.primary },
            titleContainer: { alignItems: 'center', display: 'flex', flexDirection: 'row', flexGrow: 1 },
            titleTextRoot: { flexGrow: 1, flexShrink: 1 },
            titleTextHighlighted: { color: e.colors.white },
            roundedAppBarCorners: {
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
            },
            newMessageDotContainer: { flexGrow: 1 },
            newMessageDotRoot: { width: e.spaces.space12, height: e.spaces.space12, marginLeft: e.spaces.space4 },
            newMessageDotRegular: { color: e.colors.primary },
            newMessageDotHighlighted: { color: e.colors.white },
            newMessagePip: { right: e.spaces.space4, top: e.spaces.space4 },
            rightControls: { flexDirection: 'row' },
          }
        }),
        je = Y(Pe),
        Te = (n('JtPf'), n('87if'), n('zb92')),
        Me = Object(Te.a)({
          loader: function () {
            return n.e(222).then(n.bind(null, 'Rk1B'))
          },
        }),
        Fe = n('aWzz'),
        Le = n('XnpN'),
        Ae = n('GSsg'),
        He = n('aITJ'),
        Be = n('yrzJ')
      function Ne(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ke = (function (e) {
        p()(n, e)
        var t = Ne(n)
        function n(e, r) {
          var a
          return (
            l()(this, n),
            (a = t.call(this, e, r)),
            g()(
              u()(a),
              '_appBarScrollEnabled',
              a.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
            ),
            g()(u()(a), '_composer', v.createRef()),
            g()(u()(a), '_renderConversation', function (e, t) {
              var n = a.props,
                r = n.conversationId,
                o = n.history,
                l = n.location
              return v.createElement(W.a, {
                conversationId: r,
                drawerHeader: a._appBarScrollEnabled ? a._renderHeader() : void 0,
                history: o,
                isWide: !1,
                location: l,
                richTextInputContext: e,
                typeaheadWrapper: t,
              })
            }),
            g()(u()(a), '_isExpanded', function () {
              return a.props.visibility === X.a.EXPANDED
            }),
            g()(u()(a), '_fetchUpdatesIfNeeded', function () {
              var e = a.props,
                t = e.conversationId,
                n = e.createLocalApiErrorHandler
              ;(0, e.fetchUpdatesIfNeeded)(
                e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
              ).catch(n())
            }),
            Object(q.a)(),
            a
          )
        }
        return (
          c()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this._updatePolling()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                e.visibility !== this.props.visibility && this._updatePolling()
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this._isExpanded()
                return v.createElement(
                  v.Fragment,
                  null,
                  t && this._appBarScrollEnabled ? null : this._renderHeader(),
                  t
                    ? He.b.isDesktopOS()
                      ? v.createElement(Me, null, function (t) {
                          var n = t.richTextInputContext,
                            r = t.typeaheadWrapper
                          return e._renderConversation(n, r)
                        })
                      : this._renderConversation()
                    : null,
                )
              },
            },
            {
              key: '_renderHeader',
              value: function () {
                var e = this.props,
                  t = e.conversation,
                  n = e.history,
                  r = e.inboxUnreadCount,
                  a = e.isHeaderHighlighted,
                  o = e.isUnread,
                  l = e.onDrawerOpen,
                  i = e.perspective,
                  c = e.triggerHeaderHighlight,
                  s = a ? 'white' : 'normal',
                  u = a ? 'white' : 'gray700',
                  d =
                    t &&
                    t.type === G.a.ONE_TO_ONE &&
                    i &&
                    Object(Le.a)(t, i).map(function (e) {
                      return e.user.screen_name
                    }),
                  p = d ? v.createElement(Be.a, { color: u, screenName: d[0] }) : void 0
                return v.createElement(
                  ne.a,
                  { style: this._appBarScrollEnabled ? [Ue.headerRoot, Ue.appBarZIndex] : Ue.appBarZIndex },
                  v.createElement(je, {
                    conversationSubtitle: p,
                    conversationTitle: v.createElement(Q.b, {
                      conversation: t,
                      perspective: i,
                      textColor: s,
                      withScreenName: !1,
                    }),
                    hasNewMessages: o,
                    history: n,
                    inboxUnreadCount: r,
                    isHighlighted: a,
                    onDrawerOpen: l,
                    triggerHighlight: c,
                  }),
                )
              },
            },
            {
              key: '_updatePolling',
              value: function () {
                this._pollingTimer && this._pollingTimer.stop(),
                  this.props.visibility === X.a.COLLAPSED &&
                    ((this._pollingTimer = new Ae.a(this._fetchUpdatesIfNeeded, { interval: 3e3 })),
                    this._pollingTimer.start())
              },
            },
            {
              key: 'getChildContext',
              value: function () {
                return { getCustomLocation: null }
              },
            },
          ]),
          n
        )
      })(v.Component)
      g()(Ke, 'contextType', ce.a), g()(Ke, 'childContextTypes', { getCustomLocation: Fe.func })
      var Ue = ie.a.create(function (e) {
          return {
            appBarZIndex: { zIndex: e.componentZIndices.appBarZIndex },
            headerRoot: { position: 'sticky', top: 0 },
          }
        }),
        Ve = z(Ke),
        ze = (n('i4UL'), n('tQbP'), n('M+/F'), n('ho0z'), n('hCOa'), n('jQ/y'), n('aLgo'), n('4q8G')),
        Ge = n('tn7R')
      function qe(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return We(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return We(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var r = 0,
              a = function () {}
            return {
              s: a,
              n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
              },
              e: function (e) {
                throw e
              },
              f: a,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var o,
          l = !0,
          i = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (l = e.done), e
          },
          e: function (e) {
            ;(i = !0), (o = e)
          },
          f: function () {
            try {
              l || null == n.return || n.return()
            } finally {
              if (i) throw o
            }
          },
        }
      }
      function We(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      var Qe = Object(S.a)()
          .propsFromState(function () {
            return {
              conversations: E.selectConversations,
              settings: F.g,
              unreadCount: T.a,
              untrustedConversationCount: E.selectUntrustedConversationCount,
              untrustedUnreadCount: E.selectUntrustedUnreadCount,
              visibility: E.selectDrawerVisibility,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              n = e.conversations,
              r = e.settings,
              a = e.unreadCount,
              o = e.untrustedConversationCount,
              l = e.untrustedUnreadCount,
              i = e.visibility,
              c = [],
              s = qe(Object(Ge.a)(n))
            try {
              for (s.s(); !(t = s.n()).done; ) {
                var u,
                  d = t.value
                !d.isDeleted && null !== (u = d.data) && void 0 !== u && u.trusted && c.push(d.data)
              }
            } catch (f) {
              s.e(f)
            } finally {
              s.f()
            }
            c.sort(ze.a)
            var p = a > 0
            return {
              allowUntrustedInbox: 'all' === r.allow_dms_from || o > 0,
              conversationIds: c.map(function (e) {
                return e.conversation_id
              }),
              isUnread: p,
              untrustedUnreadCount: l,
              visibility: i,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: E.fetchInbox,
              fetchInboxHistory: E.fetchTrustedInboxHistory,
              fetchInboxIfNeeded: E.fetchInboxIfNeeded,
              fetchUpdates: E.fetchUpdatesIfNeeded,
              updateLastSeenEventId: E.updateTrustedLastSeenEventId,
              popOutConversation: E.popOutConversation,
            }
          })
          .withAnalytics({ page: 'messages', section: 'inbox_drawer' }),
        Ye = n('cFyg'),
        Xe = n('pXKu'),
        $e = n('nySH'),
        Ze = n('yw4N'),
        Je = n('FIs5'),
        et = n('csss')
      function tt(e, t) {
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
      function nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? tt(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : tt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function rt(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var at = 'dmDrawerInbox',
        ot = Z.a.a2f8105f,
        lt = Z.a.b8aa3744,
        it = Z.a.j06309e1,
        ct = Z.a.gee5150a,
        st = Z.a.cf2d1047,
        ut = Z.a.da2f9224,
        dt = Z.a.h6beb5fa,
        pt = (function (e) {
          p()(n, e)
          var t = rt(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(
                u()(e),
                '_appBarScrollEnabled',
                e.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
              ),
              g()(u()(e), '_renderHeader', function () {
                var t = e.props,
                  n = t.history,
                  r = t.isHeaderHighlighted,
                  a = t.isUnread,
                  o = t.onDrawerOpen,
                  l = t.triggerHeaderHighlight
                return v.createElement(
                  ne.a,
                  { style: e._appBarScrollEnabled ? [ft.headerRoot, ft.appBarZIndex] : ft.appBarZIndex },
                  v.createElement(je, {
                    hasNewMessages: a,
                    history: n,
                    isHighlighted: r,
                    onDrawerOpen: o,
                    triggerHighlight: l,
                  }),
                )
              }),
              g()(u()(e), '_renderExpandedInbox', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.conversationIds,
                  a = t.fetchInboxHistory,
                  o = t.updateLastSeenEventId
                return v.createElement(
                  ne.a,
                  { style: ft.fill },
                  v.createElement(
                    ne.a,
                    { style: [ft.viewportView, e._appBarScrollEnabled && Ye.b.drawerHeaderRadius] },
                    v.createElement(
                      Ze.a,
                      { style: [ft.viewportView, e._appBarScrollEnabled && Ye.b.drawerHeaderRadius] },
                      e._appBarScrollEnabled && e._renderHeader(),
                      v.createElement(Xe.a, {
                        accessibilityTitle: ot,
                        analytics: n,
                        conversationIds: r,
                        customCellClick: e._dmDrawerOnClick,
                        fetchInboxHistory: a,
                        isDrawer: !0,
                        renderEmptyDMInbox: e._renderEmptyDMInbox,
                        renderStickyContent: e._renderPivot,
                        updateLastSeenEventId: o,
                        virtualScrollerCacheKey: at,
                      }),
                    ),
                  ),
                )
              }),
              g()(u()(e), '_renderEmptyDMInbox', function () {
                return v.createElement(
                  v.Fragment,
                  null,
                  e._renderPivot(),
                  v.createElement(Je.a, {
                    buttonLink: '/messages/compose',
                    buttonText: ct,
                    header: lt,
                    message: it,
                    onImpression: e._handleEmptyDMInboxImpression,
                  }),
                )
              }),
              g()(u()(e), '_isExpanded', function () {
                return e.props.visibility === X.a.EXPANDED
              }),
              g()(u()(e), '_dmDrawerOnClick', function (t, n) {
                ;(0, e.props.popOutConversation)(n), t.preventDefault()
              }),
              g()(u()(e), '_handleEmptyDMInboxImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              g()(u()(e), '_handleRequestsPivotClick', function () {
                e.props.analytics.scribe({ element: 'requests_pivot', action: 'click' })
              }),
              g()(u()(e), '_renderPivot', function () {
                return e.props.allowUntrustedInbox
                  ? v.createElement(
                      ne.a,
                      { style: ft.requestPivotContainer },
                      v.createElement(et.a, {
                        label: st,
                        link: Object($e.a)(X.c.SECONDARY),
                        onPress: e._handleRequestsPivotClick,
                        renderRightContent: e._renderPivotBadge,
                      }),
                    )
                  : null
              }),
              g()(u()(e), '_renderPivotBadge', function () {
                var t = e.props.untrustedUnreadCount
                return t > 0
                  ? v.createElement(ae.a, {
                      count: t,
                      standalone: !0,
                      truncatedCountFormatter: dt,
                      unreadCountLabel: ut,
                    })
                  : null
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._isExpanded() && Object(q.a)()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this._isExpanded()
                  return v.createElement(
                    v.Fragment,
                    null,
                    e && this._appBarScrollEnabled ? null : this._renderHeader(),
                    e && this._renderExpandedInbox(),
                  )
                },
              },
            ]),
            n
          )
        })(v.Component)
      g()(pt, 'contextType', ce.a)
      var ft = ie.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            headerRoot: { position: 'sticky', top: 0 },
            appBarZIndex: { zIndex: e.componentZIndices.appBarZIndex },
            requestPivotContainer: {
              backgroundColor: e.colors.cellBackground,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              zIndex: 2,
            },
            viewportView: nt(nt({}, ie.a.absoluteFillObject), {}, { overflowY: 'auto' }),
          }
        }),
        ht = Qe(pt),
        mt = n('YeIG'),
        bt = n('A69o'),
        yt = 'DMDrawer',
        gt = n('TnY3'),
        vt = n('0FVZ'),
        _t = n('Oe3h'),
        Et = n('nBUg')
      function Ot(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var St = { isGlobal: !0, isSticky: !0 },
        It = { isGlobal: !0, isSticky: !1 },
        wt = (function (e) {
          p()(n, e)
          var t = Ot(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              g()(u()(e), 'state', { isHeaderHighlighted: !1, hasStartedInitialFetch: !1, unexpandedHeight: void 0 }),
              g()(u()(e), '_handleLayout', function (t) {
                var n = t.nativeEvent.layout.height,
                  r = e.state.unexpandedHeight
                e._isExpanded() || void 0 !== r || e.setState({ unexpandedHeight: n })
              }),
              g()(u()(e), '_showDMDrawer', function () {
                var t = e.props,
                  n = t.conversations,
                  r = t.visibility === X.a.CLOSED
                return !e._isHideDMDrawerPath() && !Object(mt.a)(n) && !r
              }),
              g()(u()(e), '_isExpanded', function () {
                return e.props.visibility === X.a.EXPANDED
              }),
              g()(u()(e), '_triggerHeaderHighlight', function () {
                var t = e.state.isHeaderHighlighted
                e._isExpanded() ||
                  t ||
                  e._headerHighlightTimeoutId ||
                  (e.setState({ isHeaderHighlighted: !0 }),
                  (e._headerHighlightTimeoutId = setTimeout(function () {
                    e.setState({ isHeaderHighlighted: !1 }), (e._headerHighlightTimeoutId = void 0)
                  }, 3e3)))
              }),
              g()(u()(e), '_handleDrawerOpen', function () {
                e.state.isHeaderHighlighted &&
                  (e.setState({ isHeaderHighlighted: !1 }),
                  clearTimeout(e._headerHighlightTimeoutId),
                  (e._headerHighlightTimeoutId = void 0))
              }),
              g()(u()(e), '_isOnOcfFlow', function () {
                return e.props.location.pathname.startsWith('/i/flow')
              }),
              g()(u()(e), '_isOnBirdwatchPage', function () {
                return e.props.location.pathname.startsWith('/i/birdwatch')
              }),
              g()(u()(e), '_isHideDMDrawerPath', function () {
                return e._isOnOcfFlow() || e._isOnBirdwatchPage()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  clearTimeout(this._headerHighlightTimeoutId)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._loadInboxDataIfNeeded()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._loadInboxDataIfNeeded()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.history,
                    r = t.location,
                    o = t.perspective,
                    l = t.poppedOutConversationId,
                    i = t.width,
                    c = this.state,
                    s = c.isHeaderHighlighted,
                    u = c.unexpandedHeight,
                    d = this._isExpanded()
                  return this._showDMDrawer()
                    ? v.createElement(
                        vt.a.Drawer,
                        null,
                        v.createElement(_t.a, { id: 'DMDrawer' }, function (t, c) {
                          return v.createElement(
                            k.a.Provider,
                            { value: { isDrawer: !0 } },
                            v.createElement(
                              Et.b.Provider,
                              {
                                value: {
                                  isDMDrawer: function () {
                                    return !0
                                  },
                                },
                              },
                              v.createElement(
                                ne.a,
                                a()({ ref: t() }, c({ style: [Ye.b.root, { width: i }], testID: yt })),
                                v.createElement(
                                  ne.a,
                                  {
                                    onLayout: u ? void 0 : e._handleLayout,
                                    style: [Ye.b.expandable, { height: u, maxHeight: u }, d && Ye.b.expanded],
                                  },
                                  l
                                    ? v.createElement(
                                        bt.a.Provider,
                                        { value: It },
                                        v.createElement(Ve, {
                                          conversationId: l,
                                          history: n,
                                          isHeaderHighlighted: s,
                                          location: r,
                                          onDrawerOpen: e._handleDrawerOpen,
                                          perspective: o,
                                          triggerHeaderHighlight: e._triggerHeaderHighlight,
                                        }),
                                      )
                                    : v.createElement(
                                        bt.a.Provider,
                                        { value: St },
                                        v.createElement(ht, {
                                          history: n,
                                          isHeaderHighlighted: s,
                                          onDrawerOpen: e._handleDrawerOpen,
                                          triggerHeaderHighlight: e._triggerHeaderHighlight,
                                        }),
                                      ),
                                ),
                              ),
                            ),
                          )
                        }),
                      )
                    : null
                },
              },
              {
                key: '_loadInboxDataIfNeeded',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchInboxIfNeeded,
                    r = e.loadDrawerVisibilityFromPersistence,
                    a = this.state.hasStartedInitialFetch
                  this._isHideDMDrawerPath() ||
                    a ||
                    (r(), n().catch(t()), this.setState({ hasStartedInitialFetch: !0 }))
                },
              },
            ]),
            n
          )
        })(v.PureComponent)
      g()(wt, 'defaultProps', { width: _.a.dmDrawerWidth.max })
      var kt = w(wt)
      t.default = Object(gt.a)(kt)
    },
    nySH: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'c', function () {
          return m
        })
      n('uFXj')
      var r = n('ERkP'),
        a = n('HPNB'),
        o = n('v6aA'),
        l = n('jYSG'),
        i = n('AQ79'),
        c = n('+Bsv'),
        s = n('MWbm'),
        u = n('cHvH'),
        d = n('t62R'),
        p = n('rHpw'),
        f = function (e) {
          switch (e) {
            case i.c.SECONDARY:
              return '/messages/requests'
            case i.c.TERTIARY:
              return '/messages/requests/additional'
            case i.c.PRIMARY:
            default:
              return '/messages'
          }
        },
        h = function (e, t) {
          return r.createElement(o.a.Consumer, null, function (n) {
            var a = n.featureSwitches.isTrue('responsive_web_settings_revamp_enabled') ? e : '/settings/safety'
            return r.createElement(c.a, { pullRight: t, to: a })
          })
        },
        m = function (e) {
          return r.createElement(u.a, null, function (t) {
            var n = t.windowWidth,
              o = a.a.isTwoColumnLayout(n),
              i = 0 === e.length
            return o || i
              ? null
              : r.createElement(
                  s.a,
                  { style: b.stickyCopyContainer },
                  r.createElement(d.b, { style: b.stickyCopy }, l.a),
                )
          })
        },
        b = p.a.create(function (e) {
          return {
            stickyCopyContainer: {
              backgroundColor: e.colors.cellBackground,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              zIndex: 1,
            },
            stickyCopy: { color: e.colors.gray700, padding: e.spaces.space20 },
          }
        })
    },
    pXKu: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        l = n.n(o),
        i = n('1Pcy'),
        c = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        y = (n('vrRf'), n('+KXO'), n('ERkP')),
        g = n('BUB3'),
        v = n('v6aA'),
        _ = n('xZGM'),
        E = n('rxPX'),
        O = Object(E.a)()
          .propsFromState(function () {
            return {
              shouldShowPrompt: function (e, t) {
                return Object(_.y)(e, _.j)
              },
            }
          })
          .propsFromActions(function () {
            return { addFlag: _.v }
          })
          .withAnalytics({ component: 'dm_education_flags_prompt' }),
        S = n('fs1G'),
        I = n('t62R'),
        w = n('feu+'),
        k = n('3XMw'),
        C = n.n(k),
        x = C.a.fd6150fc,
        R = y.createElement(
          C.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          y.createElement(I.b, { link: '/privacy' }, C.a.d42d239f),
        ),
        P = C.a.j24c37b2,
        D = O(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            r = e.shouldShowPrompt,
            a = y.useContext(v.a).featureSwitches
          if (!(r && a.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            y.createElement(w.a, {
              actionLabel: P,
              headline: x,
              onAction: function () {
                n.scribeAction('click'), t(_.j)
              },
              onClose: S.a,
              subtext: R,
              withCloseButton: !1,
            })
          )
        }),
        j = n('MMRb'),
        T = n('kGix'),
        M = n('0KEI'),
        F = Object(E.a)()
          .propsFromState(function () {
            return {
              hasConversations: j.selectHasConversations,
              fetchStatus: j.selectFetchStatus,
              isLoadingTop: j.selectIsLoadingTop,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.hasConversations,
              r = e.isLoadingTop
            return { fetchStatus: n ? T.a.LOADED : t, isRefreshing: n && r }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: j.fetchInbox,
              fetchInboxIfNeeded: j.fetchInboxIfNeeded,
              fetchUpdates: j.fetchUpdatesIfNeeded,
            }
          }),
        L = (n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ddV6')),
        A = n.n(L),
        H =
          (n('2G9S'),
          n('z84I'),
          n('ho0z'),
          n('tQbP'),
          n('LW0h'),
          n('jQ3i'),
          n('x4t0'),
          n('6U7i'),
          n('MvUL'),
          n('KqXw'),
          n('hBvt'),
          n('7x/C'),
          n('lTEL'),
          n('kYxP'),
          n('hBpG'),
          n('EbOo')),
        B = n('tZH3'),
        N = n('1YZw'),
        K = n('hqKg'),
        U = n('AQOc'),
        V = n('G6rE'),
        z = n('oEGd'),
        G = function (e, t) {
          return t.conversationId
        },
        q = Object(K.createSelector)(
          G,
          function (e, t) {
            return j.selectConversation(e, G(0, t))
          },
          j.selectEntries,
          V.e.selectAll,
          function (e, t) {
            return !j.selectConversationIsRead(e, G(0, t))
          },
          function (e, t) {
            var n = G(0, t)
            return Object(j.selectInboxTypeByConversation)(e, n)
          },
          function (e, t, n, r, a, o) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(U.a)(t.data, n, r),
              conversationId: e,
              unread: a,
              inboxType: o,
            }
          },
        ),
        W = {
          addRecentSearch: j.addRecentSearches,
          addToast: N.b,
          block: V.e.block,
          createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: j.disableNotifications,
          enableNotifications: j.enableNotifications,
          leaveConversation: j.leaveConversation,
          muteDMUser: j.muteDMUser,
          unmuteDMUser: j.unmuteDMUser,
          unblock: V.e.unblock,
        },
        Q = Object(z.g)(q, W),
        Y = n('aA19'),
        X = n('OhSZ'),
        $ = n('g54k')
      function Z(e, t) {
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
      var J = function (e, t) {
          return t.entry
        },
        ee = Object(E.a)()
          .propsFromState(function () {
            return { users: Object(K.createSelector)(V.e.selectAll, J, $.b) }
          })
          .adjustStateProps(function (e) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Z(Object(n), !0).forEach(function (t) {
                      b()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : Z(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({}, e.users)
          }),
        te = n('zQEV'),
        ne = ee(function (e) {
          var t = e.entry,
            n = e.entryType,
            r = e.perspective,
            a = e.users,
            o = Object(te.a)(t, n, r, a)
          return y.createElement(I.b, { color: 'gray700' }, o)
        }),
        re = Object(K.createSelector)(
          function (e, t) {
            return V.e.select(e, t.senderId)
          },
          function (e, t) {
            return t.recipientId ? V.e.select(e, t.recipientId) : void 0
          },
          function (e, t) {
            return { user: e, recipient: t }
          },
        ),
        ae = Object(z.c)(re),
        oe = n('X/yg'),
        le = n('cTG8'),
        ie = function (e) {
          return y.createElement(C.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, y.createElement(I.b, null, e))
        },
        ce = C.a.dedfd265
      var se = C.a.a876e58b,
        ue = C.a.bf584cd1,
        de = C.a.a9cc8cfd,
        pe = C.a.e20b65b0,
        fe = C.a.e5bfe07d,
        he = C.a.b1a614fe,
        me = ae(function (e) {
          var t = e.entry,
            n = e.perspective,
            r = e.isGroupDM,
            a = e.user,
            o = void 0 === a ? {} : a,
            l = e.recipient,
            i = void 0 === l ? {} : l,
            c = y.useContext(v.a).featureSwitches,
            s = t && t.message_data
          if (!s) return null
          var u = s.attachment,
            d = u && !!(u.video || u.photo || u.animated_gif || u.tweet || u.fleet || u.sticker || u.card),
            p = n === o.id_str,
            f = !(!d || !p) || !(!r || p),
            h = o.name,
            m = i.name,
            b = [
              f && y.createElement(I.b, { key: 'senderName' }, ie(h), ' '),
              s &&
                s.text &&
                y.createElement(le.a, {
                  displayTextRange: [0, s.text.length],
                  entities: s.entities,
                  key: 'message',
                  text: s.text,
                  withMediaLinks: !0,
                }),
            ]
          return (
            u &&
              (u.tweet
                ? (b = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, C.a.d5b762c8)
                          : y.createElement(C.a.I18NFormatMessage, { $i18n: 'dfd2b3b9' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : he)
                : u.fleet
                ? (b = (function (e, t, n) {
                    return e
                      ? y.createElement(
                          C.a.I18NFormatMessage,
                          { $i18n: 'i005f1fd' },
                          y.createElement(I.b, null, t),
                          y.createElement(I.b, null, n || ''),
                        )
                      : y.createElement(
                          C.a.I18NFormatMessage,
                          { $i18n: 'b35cee40' },
                          y.createElement(I.b, null, n || ''),
                        )
                  })(p, m, s.text))
                : u.video
                ? (b = Object(oe.k)(u, c)
                    ? f
                      ? (function (e, t) {
                          return e
                            ? y.createElement(I.b, null, C.a.h7033cac)
                            : y.createElement(
                                C.a.I18NFormatMessage,
                                { $i18n: 'be5a9616' },
                                y.createElement(I.b, null, t),
                              )
                        })(p, h)
                      : ce
                    : f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, C.a.j7d81019)
                          : y.createElement(C.a.I18NFormatMessage, { $i18n: 'eee2f120' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : se)
                : u.photo
                ? (b = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, C.a.f80629ba)
                          : y.createElement(C.a.I18NFormatMessage, { $i18n: 'c1e1f848' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : ue)
                : u.animated_gif
                ? (b = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, C.a.eb3d722e)
                          : y.createElement(C.a.I18NFormatMessage, { $i18n: 'dc4b75a1' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : de)
                : u.sticker
                ? (b = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, C.a.d30c2d4f)
                          : y.createElement(C.a.I18NFormatMessage, { $i18n: 'c7e2464e' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : pe)
                : u.card &&
                  (b = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, C.a.db53c017)
                          : y.createElement(C.a.I18NFormatMessage, { $i18n: 'hcbbbb34' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : fe)),
            y.createElement(I.b, { color: 'gray700', numberOfLines: 1 }, b)
          )
        }),
        be = n('uKEd'),
        ye = function (e, t) {
          return t.senderId ? V.e.select(e, t.senderId) : void 0
        },
        ge = function (e, t) {
          return Object(be.n)(e, t.reactionEntry.message_id)
        },
        ve = function (e, t) {
          var n = ge(e, t)
          return n && n.message_data && V.e.select(e, n.message_data.sender_id)
        },
        _e = Object(z.e)(function () {
          return Object(K.createSelector)(ye, ge, ve, function (e, t, n) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: n }
          })
        }, {}),
        Ee = n('33Kz'),
        Oe = _e(function (e) {
          var t,
            n = e.isGroupDM,
            r = e.messageUser,
            a = e.perspective,
            o = e.reactedMessageEntry,
            l = e.reactingUser,
            i = e.reactionEntry,
            c = y.useContext(v.a).featureSwitches,
            s = o && o.message_data,
            u = s && s.attachment,
            d = s && s.text,
            p = r && r.screen_name,
            f = a === (l && l.id_str),
            h = l && l.name,
            m = Object(Ee.b)(i.reaction_key || '', c)
          return (
            (t =
              u && u.tweet
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'c4202784' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'b493a890' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(C.a.I18NFormatMessage, { $i18n: 'ca684bf5' }, y.createElement(I.b, null, n))
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'h5797be5' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, m)
                : u && u.video
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'd1f8bdd9' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'd764af97' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(C.a.I18NFormatMessage, { $i18n: 'ab1cdfe2' }, y.createElement(I.b, null, n))
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'f0cf1699' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, m)
                : u && u.photo
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'hec0fd4d' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'j55320de' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(C.a.I18NFormatMessage, { $i18n: 'jf27606a' }, y.createElement(I.b, null, n))
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'cd110359' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, m)
                : u && u.animated_gif
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'e70dcc35' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'g1bf440b' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(C.a.I18NFormatMessage, { $i18n: 'b2da1bf8' }, y.createElement(I.b, null, n))
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'g84c0421' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, m)
                : u && u.card
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'cd2e7c18' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'aee9e7fa' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, p, m)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(C.a.I18NFormatMessage, { $i18n: 'f9fb1cf6' }, y.createElement(I.b, null, n))
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'f2bf910e' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, m)
                : d
                ? n
                  ? (function (e, t, n, r, a) {
                      return e
                        ? y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, a),
                          )
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'd6998baa' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, a),
                          )
                    })(f, h, m, p, d)
                  : (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'cec676f3' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'a2706f9a' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, m, d)
                : (function (e, t, n) {
                    return e
                      ? y.createElement(C.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, y.createElement(I.b, null, n))
                      : y.createElement(
                          C.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          y.createElement(I.b, null, t),
                          y.createElement(I.b, null, n),
                        )
                  })(f, h, m)),
            y.createElement(I.b, { color: 'gray700', numberOfLines: 1 }, t)
          )
        }),
        Se = n('H4nC'),
        Ie = n('b9JY'),
        we = C.a.fb3ccb55,
        ke = function (e) {
          var t = e.conversationType,
            n = e.entry,
            r = e.perspective
          if (n.marked_as_spam) return y.createElement(I.b, { color: 'gray700', numberOfLines: 1 }, we)
          if (Object(Ie.b)(n)) {
            var a = n.message_data,
              o = (a = void 0 === a ? {} : a).recipient_id,
              l = a.sender_id
            return y.createElement(me, {
              entry: n,
              isGroupDM: t === j.CONVERSATION_TYPE.GROUP,
              perspective: r,
              recipientId: o,
              senderId: l,
            })
          }
          return Object(Ie.c)(n)
            ? y.createElement(Oe, {
                isGroupDM: t === j.CONVERSATION_TYPE.GROUP,
                perspective: r,
                reactionEntry: n,
                senderId: n.sender_id,
              })
            : Object(Ie.a)(n)
            ? y.createElement(ne, { entry: n, entryType: n.type, perspective: r })
            : Object(Ie.d)(n)
            ? y.createElement(Se.a, { entry: n, isCompact: !0 })
            : null
        },
        Ce = n('Myq3'),
        xe = n('3wZR'),
        Re = n('XnpN'),
        Pe = n('AQ79'),
        De = 'conversation',
        je = n('u0B7'),
        Te = n('MWbm'),
        Me = n('Irs7'),
        Fe = n('eb3s'),
        Le = n('ZToW'),
        Ae = n('lHOd'),
        He = n('IG7M'),
        Be = n('mjJ+'),
        Ne = n('Znyr'),
        Ke = n('0PHd'),
        Ue = n('yrzJ'),
        Ve = n('Xrkv'),
        ze = n('efqG'),
        Ge = n('/yvb'),
        qe = n('GBcw'),
        We = n('cm6r'),
        Qe = n('htQn'),
        Ye = n('5mJL'),
        Xe = n('rHpw'),
        $e = n('vMjK'),
        Ze = n('pHkl'),
        Je = n('aWyx'),
        et = n('Lsrn'),
        tt = n('k/Ka')
      function nt(e, t) {
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
      function rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? nt(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : nt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var at = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(tt.a)(
          'svg',
          rt(
            rt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [et.a.root, e.style], viewBox: '0 0 32 32' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M28.05 6.52h-5.42V4.887c0-1.548-1.26-2.808-2.81-2.808h-7.54c-1.548 0-2.807 1.26-2.807 2.808v1.63H4.05c-.414 0-.75.337-.75.75s.336.75.75.75h.753L7 26.435c.27 1.504 1.657 2.554 3.37 2.554h11.36c1.713 0 3.1-1.05 3.376-2.598l2.19-18.37h.753c.413 0 .75-.337.75-.75s-.336-.75-.75-.75zM10.972 4.887c0-.72.586-1.308 1.307-1.308h7.542c.72 0 1.308.587 1.308 1.308v1.63H10.972V4.89zm12.65 21.28c-.163.91-1.068 1.32-1.893 1.32H10.37c-.824 0-1.73-.41-1.887-1.276L6.313 8.02h19.472l-2.162 18.148z',
            }),
            y.createElement('path', {
              d: 'M13.312 23.123c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75zm5.486 0c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      at.metadata = { width: 32, height: 32 }
      var ot = at,
        lt = n('zIWA'),
        it = n('5pef')
      function ct(e, t) {
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
      function st(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ct(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ct(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ut = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(tt.a)(
          'svg',
          st(
            st({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [et.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M22.238 2.257c-.293-.293-.768-.293-1.06 0L2.52 20.917c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.073.53-.22l18.658-18.66c.293-.293.293-.767 0-1.06zM2.986 17.82c.155 0 .312-.048.446-.148.112-.083 2.752-2.104 2.708-7.248-.02-2.16.643-3.98 1.913-5.266 1.093-1.107 2.577-1.72 4.18-1.727 1.325.006 2.562.42 3.578 1.195.137.104.297.153.455.153.227 0 .45-.102.598-.295.25-.33.188-.8-.142-1.052-1.278-.975-2.828-1.493-4.483-1.5h-.003c-2.008.008-3.87.78-5.248 2.173-1.536 1.551-2.368 3.8-2.348 6.332.037 4.33-2.02 5.967-2.103 6.03-.332.247-.4.718-.154 1.05.147.2.374.303.603.303zm16.844-7.382c.002-.246-.003-.487-.017-.723-.024-.414-.387-.74-.792-.706-.413.023-.728.378-.705.79.012.205.017.413.015.624-.024 2.868.785 4.765 1.526 5.896h-8.314c-.414 0-.75.336-.75.75s.336.75.75.75h3.522c-.1 1.48-1.323 2.66-2.828 2.66-1.003 0-1.913-.514-2.436-1.372-.214-.354-.675-.467-1.03-.25-.354.214-.467.675-.25 1.03.795 1.31 2.185 2.09 3.716 2.09 2.332 0 4.227-1.85 4.328-4.158h4.922c.32 0 .604-.206.707-.51.104-.305 0-.643-.255-.84-.087-.066-2.145-1.7-2.108-6.032z',
            }),
          ),
        )
      }
      ut.metadata = { width: 24, height: 24 }
      var dt = ut,
        pt = n('5oT/')
      function ft(e, t) {
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
      function ht(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ft(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ft(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function mt(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var bt = C.a.d88d0790,
        yt = C.a.ad63377d,
        gt = {
          confirmButtonLabel: C.a.bb1d57b6,
          actionTextLeave: C.a.g9074da4,
          header: C.a.gdf4b79f,
          text: C.a.h09b49f7,
        },
        vt = C.a.i6b19b07,
        _t = C.a.e3cfff7c,
        Et = C.a.a8ed0eca,
        Ot = { component: 'low_quality_timeline' },
        St = function (e) {
          var t = e.children
          return y.createElement(Te.a, { style: wt.socialProofContainer }, t)
        },
        It = (function (e) {
          u()(n, e)
          var t = mt(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(
                c()(e),
                '_isPinnedInboxEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  e.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              b()(
                c()(e),
                '_isVDLEnabled',
                e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
              ),
              b()(c()(e), 'state', { showActionMenu: !1, showConfirmation: !1 }),
              b()(c()(e), '_renderConfirmationSheet', function () {
                var t = e.props.conversationId
                return y.createElement(Fe.a, {
                  confirmButtonLabel: gt.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: gt.header,
                  onCancel: e._handleHideConfirmation,
                  onConfirm: e._deleteConversation(t),
                  text: gt.text,
                })
              }),
              b()(c()(e), '_renderMenu', function (t) {
                var n = t.isFocused,
                  r = t.isFocusedWithin,
                  a = t.isHovered,
                  o = e.state.showActionMenu,
                  l = function () {
                    e.setState({ showActionMenu: !0 })
                  },
                  i = !Le.a.isEnabled || n || r || a || o
                return y.createElement(Ae.a.Consumer, null, function (t) {
                  return y.createElement(He.a, {
                    onClick: l,
                    renderActionMenu: e._renderActionMenu,
                    style: i ? wt.menu : wt.hiddenMenu,
                  })
                })
              }),
              b()(c()(e), '_renderActionMenu', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.conversationId,
                  o = e.context.history,
                  l = null == r ? void 0 : r.notifications_disabled,
                  i = {
                    Icon: ot,
                    isEmphasized: !0,
                    onClick: e._handleDeleteMenuItemClick,
                    text: yt,
                    withBottomBorder: !0,
                  },
                  c = [
                    {
                      Icon: lt.a,
                      onClick: function () {
                        return e._handleReportMenuItemClick(o)()
                      },
                      text: vt,
                      withBottomBorder: !0,
                    },
                    {
                      Icon: l ? it.a : dt,
                      onClick: function () {
                        return e._handleSnoozeMenuItemClick(a)
                      },
                      text: l ? Et : _t,
                      withBottomBorder: !0,
                    },
                    i,
                  ]
                return y.createElement(Be.a, {
                  items: c,
                  onCloseRequested: e._handleHideMenu(t),
                  shouldCloseOnClick: !0,
                })
              }),
              b()(c()(e), '_renderConversationActions', function (t) {
                var n = t.isFocused,
                  r = t.isFocusedWithin,
                  a = t.isHovered
                switch (e.props.inboxType) {
                  case Pe.c.PRIMARY:
                    return e._isPinnedInboxEnabled
                      ? e._renderMenu({ isFocused: n, isFocusedWithin: r, isHovered: a })
                      : null
                  case Pe.c.SECONDARY:
                  case Pe.c.TERTIARY:
                    return e._renderX()
                  default:
                    return null
                }
              }),
              b()(c()(e), '_renderConversationEndCell', function (t) {
                var n = e.props,
                  r = n.inboxType,
                  a = n.searchQuery,
                  o = n.unread
                    ? y.createElement(Ne.a, {
                        pip: !0,
                        style: wt.unreadMessagePip,
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: function () {
                          return ''
                        },
                      })
                    : null
                switch (r) {
                  case Pe.c.PRIMARY:
                    return e._isVDLEnabled ? o : a ? null : e._renderTimestamp(t)
                  case Pe.c.SECONDARY:
                    return e._isVDLEnabled ? o : null
                  default:
                    return null
                }
              }),
              b()(c()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var n = Object(xe.b)(t.icon)
                return y.createElement(
                  I.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? y.createElement(n, { style: wt.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              b()(c()(e), '_renderSocialProof', function (t) {
                var n = t.social_proof
                if (!n || 0 === n.length) return null
                var r = n[0]
                switch (r.proof_type) {
                  case Je.d.MUTUAL_FRIENDS:
                    if (0 === r.total) return null
                    var a = r.users.map(function (e) {
                        return e.profile_image_url_https
                      }),
                      o = r.users.map(function (e) {
                        return e.name
                      }),
                      l = e._isVDLEnabled ? { marginLeft: 0 } : null
                    return y.createElement(
                      St,
                      null,
                      y.createElement(Ke.a, {
                        displayFacepileInline: !0,
                        knownFollowersAvatarUrls: a,
                        knownFollowersCount: r.total,
                        knownFollowersNames: o,
                        textStyle: l,
                        withFacepile: !e._isVDLEnabled,
                      }),
                    )
                  default:
                    return null
                }
              }),
              b()(c()(e), '_renderSearchConversationPreview', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.perspective,
                  a = t.searchQuery,
                  o = n ? Object(Re.a)(n, r) : [],
                  l = [],
                  i = function (e, t) {
                    return e.localeCompare(t)
                  },
                  c = o
                    .map(function (e) {
                      return e.user
                    })
                    .filter(function (e) {
                      var t,
                        n = null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase().includes(a)
                      return e.id_str !== r && (n && l.push(e.name), !n)
                    })
                    .map(function (e) {
                      return e.name
                    })
                    .sort(i),
                  s = l.sort(i).concat(c)
                if (n) {
                  if (n.type === j.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var u = o.map(function (e) {
                        return e.user
                      }),
                      d = A()(u, 1)[0]
                    return y.createElement(Ue.a, { color: 'gray700', screenName: d.screen_name })
                  }
                  var p = Object(Ve.a)(s, !0)
                  return y.createElement(I.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              b()(c()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.conversationId,
                  a = e.context.loggedInUserId,
                  o = Object(oe.i)(n, a),
                  l = (null == n ? void 0 : n.type) === j.CONVERSATION_TYPE.GROUP
                return y.createElement(Ae.a.Consumer, null, function (t) {
                  return y.createElement(
                    ze.a,
                    {
                      renderContent: function (n, a) {
                        return y.createElement(B.a, {
                          dismiss: n,
                          flatBorders: 'sheet' === a,
                          isGroup: l,
                          onBlockClick: e._blockUser(o.idStr),
                          onDeleteClick: e._deleteConversation(r),
                          onReportClick: e._handleReportMenuItemClick(t),
                          requestorScreenName: o.screenName,
                          showBlock: !l,
                          showCancel: 'sheet' === a,
                          showDelete: !0,
                        })
                      },
                    },
                    y.createElement(Ge.a, {
                      accessibilityLabel: bt,
                      icon: y.createElement(pt.a, { style: e._isVDLEnabled ? wt.xIcon : void 0 }),
                      onPress: e._handleXPress,
                      style: e._isVDLEnabled ? wt.vdlXButton : wt.xButton,
                      type: e._isVDLEnabled ? void 0 : 'destructiveText',
                    }),
                  )
                })
              }),
              b()(c()(e), '_handleDeleteMenuItemClick', function () {
                e.setState({ showConfirmation: !0 })
              }),
              b()(c()(e), '_handleHideMenu', function (t) {
                return function () {
                  t && t(), e.setState({ showActionMenu: !1 })
                }
              }),
              b()(c()(e), '_handleReportMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.conversationId,
                    o = n.inboxType
                  if (a) {
                    r.scribeAction('report')
                    var l = Object(oe.f)(a, window.location.pathname, r.contextualScribeNamespace, o)
                    t.push(l)
                  }
                }
              }),
              b()(c()(e), '_handleSnoozeMenuItemClick', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.disableNotifications,
                  o = n.enableNotifications
                ;(null == r ? void 0 : r.notifications_disabled) ? o({ conversationId: t }) : a({ conversationId: t })
              }),
              b()(c()(e), '_handleXPress', function (e) {
                e.preventDefault()
              }),
              b()(c()(e), '_renderTimestamp', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.isMessageItem,
                  o =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  l = [o || a ? wt.inlineNotificationsDisabledIcon : wt.notificationsDisabledIcon],
                  i = Number(t && a ? (null == t ? void 0 : t.time) : null == r ? void 0 : r.sort_timestamp)
                return y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(
                    Te.a,
                    { style: (o || a) && wt.inlineTimestamp },
                    r && i ? y.createElement(qe.a, { timestamp: i }) : null,
                    null != r && r.notifications_disabled ? y.createElement(dt, { style: l }) : null,
                  ),
                )
              }),
              b()(c()(e), '_deleteConversation', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.conversation,
                    o = n.createLocalApiErrorHandler,
                    l = n.inboxType,
                    i = n.leaveConversation,
                    c = n.position,
                    s = e.context.history,
                    u = null != a && a.participants ? Object.keys(a.participants).length : 0,
                    d = a && a.type === j.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    p = {
                      conversation_type: (null == a ? void 0 : a.type) === j.CONVERSATION_TYPE.GROUP ? 1 : 0,
                      conversation_id: t,
                      conversation_participant_count: u,
                      position: c,
                      inbox_type: Object(oe.h)(l),
                      entry_point: Ze.b.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    r.scribe({ element: 'thread', action: d, data: p }),
                    i({ conversationId: t }).catch(o({ showToast: !0 })),
                    s.replace(Object(oe.e)(l))
                }
              }),
              b()(c()(e), '_blockUser', function (t) {
                return function () {
                  var n = e.props,
                    r = n.addToast,
                    a = n.analytics,
                    o = n.block,
                    l = n.createLocalApiErrorHandler
                  o(t).then(function () {
                    r({ action: { label: $e.c, onAction: e._createUnblockUserHandler(t) }, text: $e.a })
                  }, l(H.a)),
                    a.scribeAction('block')
                }
              }),
              b()(c()(e), '_createUnblockUserHandler', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.unblock)(t).catch(a(je.a)), r.scribeAction('unblock')
                }
              }),
              b()(c()(e), '_handleHideConfirmation', function () {
                e.setState({ showConfirmation: !1 })
              }),
              b()(c()(e), '_handleOnClick', function (t) {
                var n = e.props,
                  r = n.addRecentSearch,
                  a = n.analytics,
                  o = n.conversation,
                  l = n.conversationId,
                  i = n.onClick,
                  c = n.position,
                  s = n.searchQuery,
                  u = null != o && o.participants ? Object.keys(o.participants).length : 0,
                  d = (null == o ? void 0 : o.type) === j.CONVERSATION_TYPE.GROUP
                s &&
                  (a.scribe({
                    component: 'search',
                    element: 'conversation',
                    action: 'click',
                    data: {
                      conversation_id: l,
                      conversation_participant_count: u,
                      conversation_type: d ? Ze.g.GROUP : Ze.g.ONE_TO_ONE,
                      entry_point: Ze.b.ALL,
                      inbox_type: Ze.c.PRIMARY,
                      dm_search_result_type: Ze.a.CONVERSATION,
                      message_type: Ze.d.NOT_APPLICABLE,
                      position: c,
                    },
                  }),
                  a.scribe({ component: 'recent_search', action: 'add' }),
                  r(s)),
                  i(t, l, o, c)
              }),
              b()(c()(e), '_handleShowConfirmation', function (t) {
                var n = e.props.analytics
                t.stopPropagation(),
                  n.scribe(ht(ht({}, Ot), {}, { element: 'accessory_trashcan', action: 'click' })),
                  e.setState({ showConfirmation: !0 })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  var n = this.props.conversation,
                    r = null == n ? void 0 : n.conversation_id,
                    a = null == n ? void 0 : n.notifications_disabled,
                    o = null == n ? void 0 : n.last_read_event_id,
                    l = null == n ? void 0 : n.sort_event_id,
                    i = null == n ? void 0 : n.max_entry_id,
                    c = null == n ? void 0 : n.convo_label,
                    s = this.props.messageId,
                    u = e.conversation,
                    d = null == u ? void 0 : u.conversation_id,
                    p = null == u ? void 0 : u.notifications_disabled,
                    f = null == u ? void 0 : u.last_read_event_id,
                    h = null == u ? void 0 : u.sort_event_id,
                    m = null == u ? void 0 : u.max_entry_id,
                    b = null == u ? void 0 : u.convo_label,
                    y = e.messageId,
                    g = this.props,
                    v = g.filter,
                    _ = g.isActive,
                    E = e.filter,
                    O = e.isActive,
                    S = this.state.showConfirmation,
                    I = t.showConfirmation
                  return (
                    r !== d ||
                    a !== p ||
                    o !== f ||
                    l !== h ||
                    i !== m ||
                    s !== y ||
                    _ !== O ||
                    S !== I ||
                    v !== E ||
                    c !== b
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversation,
                    r = t.isActive,
                    a = t.isMessageItem,
                    o = t.link,
                    l = t.messageId,
                    i = t.perspective,
                    c = t.position,
                    s = t.searchQuery,
                    u = t.unread,
                    d = this.state.showConfirmation,
                    p = (null == n ? void 0 : n.entries) || [],
                    f = a
                      ? p.find(function (e) {
                          return e.id === l
                        })
                      : Object(Ce.a)(p, function (e) {
                          return ![
                            Je.b.MESSAGE_DELETE,
                            Je.b.REACTION_DELETE,
                            Je.b.MESSAGE_MARK_AS_SPAM,
                            Je.b.MESSAGE_MARK_AS_NOT_SPAM,
                            Je.b.CONVO_METADATA_UPDATE,
                            Je.b.DISABLE_NOTIFICATIONS,
                            Je.b.ENABLE_NOTIFICATIONS,
                          ].includes(e.type)
                        }),
                    h = [wt.root, u && !this._isVDLEnabled && wt.unread],
                    m = (null == n ? void 0 : n.type) === j.CONVERSATION_TYPE.GROUP,
                    b = this._isVDLEnabled && m
                  if (!n) return null
                  var g = !!n.convo_label,
                    v = !n.trusted && !g,
                    _ = this._isVDLEnabled ? 'xxxLarge' : 'xxLarge',
                    E = this._renderConversationEndCell(f),
                    O = s && !a
                  return !n || (!s && n.isSearchResultOnly)
                    ? null
                    : y.createElement(
                        y.Fragment,
                        null,
                        d ? this._renderConfirmationSheet() : null,
                        y.createElement(We.a, null, function (t) {
                          var l = t.isFocused,
                            u = t.isFocusedWithin,
                            d = t.isHovered
                          return y.createElement(
                            Qe.a,
                            {
                              accessibilityRole: 'tab',
                              accessibilityState: { selected: r },
                              link: {
                                pathname: null == o ? void 0 : o.pathname,
                                anchorless: !0,
                                state: ht(ht({}, null == o ? void 0 : o.state), {}, { position: c }),
                              },
                              onPress: e._handleOnClick,
                              style: h,
                              testID: De,
                            },
                            y.createElement(
                              Ye.a,
                              {
                                avatarCell: y.createElement(Y.a, {
                                  conversation: n,
                                  perspective: i,
                                  withBadge: b,
                                  withVDLRefresh: e._isVDLEnabled,
                                }),
                                avatarSize: _,
                              },
                              y.createElement(
                                Te.a,
                                { style: wt.bodyColumn },
                                y.createElement(
                                  Te.a,
                                  { style: wt.titleContainer },
                                  y.createElement(X.b, {
                                    conversation: n,
                                    isConversationSearchTitle: !!O,
                                    isMessageSearchTitle: !!a,
                                    perspective: i,
                                    renderTimestamp: function () {
                                      return e._renderTimestamp(f)
                                    },
                                    withScreenName: !s && !a,
                                    withVDLRefresh: e._isVDLEnabled,
                                  }),
                                  y.createElement(
                                    Te.a,
                                    { style: wt.snippet },
                                    f && !O
                                      ? y.createElement(ke, {
                                          conversationType: n.type,
                                          entry: f,
                                          isMessageItem: a,
                                          perspective: i,
                                        })
                                      : O
                                      ? e._renderSearchConversationPreview()
                                      : null,
                                  ),
                                  g ? e._renderConversationLabel(n) : null,
                                  v ? e._renderSocialProof(n) : null,
                                ),
                                E ? y.createElement(Te.a, { style: wt.endCell }, E) : null,
                                e._renderConversationActions({ isFocused: l, isFocusedWithin: u, isHovered: d }),
                              ),
                            ),
                          )
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(y.Component)
      b()(It, 'contextType', v.a),
        b()(It, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var wt = Xe.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
              width: '100%',
            },
            bodyColumn: { flexDirection: 'row' },
            inlineTimestamp: { flexDirection: 'row' },
            titleContainer: { flex: 1 },
            inlineNotificationsDisabledIcon: {
              paddingLeft: 'calc('.concat(e.spaces.space2, ' * 3)'),
              color: e.colors.gray700,
            },
            hiddenMenu: { opacity: 0, width: 0 },
            menu: {
              alignSelf: 'flex-start',
              marginLeft: 'calc('.concat(e.spaces.space8, ' + ').concat(e.spaces.space2, ')'),
            },
            notificationsDisabledIcon: { alignSelf: 'flex-end', color: e.colors.gray700, paddingTop: e.spaces.space4 },
            unreadMessagePip: {
              backgroundColor: e.colors.blue500,
              marginTop: 'calc('.concat(e.spaces.space8, ' - ').concat(e.spaces.space1, ')'),
            },
            vdlXButton: {
              border: 'none',
              marginLeft: 'calc('.concat(e.spaces.space8, ' + ').concat(e.spaces.space2, ')'),
              marginRight: 'calc(-1 * '.concat(e.spaces.space4, ')'),
              marginTop: 'calc(-1 * ('.concat(e.spaces.space8, ' - ').concat(e.spaces.space1, '))'),
            },
            xButton: { alignSelf: 'center', marginRight: 'calc(-1 * '.concat(e.spaces.space4, ')') },
            xIcon: {
              height: 'calc('.concat(e.spaces.space28, ' - ').concat(e.spaces.space1, ')'),
              width: 'calc('.concat(e.spaces.space28, ' - ').concat(e.spaces.space1, ')'),
            },
            trashcanIcon: { color: e.colors.gray700 },
            snippet: { maxHeight: e.spaces.space40, overflow: 'hidden' },
            unread: { backgroundColor: e.colors.unreadCellBackground },
            socialProofContainer: { marginTop: e.spaces.space4 },
            convoLabelIcon: { marginRight: e.spaces.space4 },
            endCell: { marginLeft: e.spaces.space16 },
          }
        }),
        kt = Object(Me.a)(Q(It), { page: 'messages', section: 'inbox' }),
        Ct =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('JtPf'),
          n('uFXj'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        xt = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        Rt = Object(E.a)()
          .propsFromState(function () {
            return { fetchStatus: xt, sliceItems: Ct }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.sliceItems,
              r = (function (e) {
                var t
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.groupData
                    })) || void 0 === t
                    ? void 0
                    : t.groupData) || []
                )
              })(n),
              a = (function (e) {
                var t
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.peopleData
                    })) || void 0 === t
                    ? void 0
                    : t.peopleData) || []
                )
              })(n),
              o = (function (e) {
                var t, n
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.messageData
                    })) ||
                  void 0 === t ||
                  null === (n = t.messageData) ||
                  void 0 === n
                    ? void 0
                    : n.conversationIds) || []
                )
              })(n)
            return {
              entryIds: (function (e) {
                var t, n
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.messageData
                    })) ||
                  void 0 === t ||
                  null === (n = t.messageData) ||
                  void 0 === n
                    ? void 0
                    : n.entryIds) || []
                )
              })(n),
              fetchStatus: t,
              groupConversationIds: r,
              messageConversationIds: o,
              peopleSearchConversationIds: a,
              sliceItems: n,
            }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
                'DM_SEARCH_ALL_CONTEXT',
              ),
              fetchSearchIfNeeded: t.fetchIfNeeded,
            }
          }),
        Pt = C.a.b08821f3,
        Dt = C.a.e047b8fa,
        jt = Xe.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingLeft: e.spaces.space16,
              paddingVertical: e.spaces.space4,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
            },
            backButton: { marginRight: e.spaces.space4 },
            iconContainer: { alignItems: 'center', flexDirection: 'row' },
            icon: {
              color: e.colors.text,
              marginRight: e.spaces.space12,
              fontSize: e.fontSizes.body,
              marginVertical: e.spaces.space8,
            },
            labelHeader: { borderBottomStyle: 'none', paddingVertical: e.spaces.space12 },
          }
        }),
        Tt = function (e) {
          var t = Object(Me.b)(),
            n = e.clearRecentSearches,
            r = e.headerText,
            a = e.icon,
            o = e.isInboxLabelHeader,
            l = e.withClearButton
          y.useEffect(
            function () {
              t.scribe({ component: 'recent_search', action: 'impression' })
            },
            [t],
          )
          var i,
            c = [jt.root, o && jt.labelHeader]
          return y.createElement(
            Te.a,
            { style: c },
            y.createElement(
              Te.a,
              { style: jt.iconContainer },
              (i = a) ? y.createElement(i, { style: jt.icon }) : null,
              y.createElement(I.b, { size: 'headline1', weight: 'heavy' }, r),
            ),
            l
              ? y.createElement(
                  Ge.a,
                  { accessibilityLabel: Pt, onPress: n, style: jt.backButton, type: 'onMediaWhiteFilled' },
                  Dt,
                )
              : null,
          )
        },
        Mt = n('MDbM'),
        Ft = n('v//M'),
        Lt = n('0yYu'),
        At = n('lBmi'),
        Ht = n('91AQ'),
        Bt = n('6ZHn')
      function Nt(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Kt = C.a.c94ac69d,
        Ut = C.a.a2f8105f,
        Vt = C.a.g2fd3205,
        zt = C.a.ffd9cfe6,
        Gt = (function (e) {
          u()(n, e)
          var t = Nt(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(
                c()(e),
                '_groupBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_groups_bucket_size'),
              ),
              b()(
                c()(e),
                '_messagesBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_messages_bucket_size'),
              ),
              b()(
                c()(e),
                '_peopleBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_people_bucket_size'),
              ),
              b()(c()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  r = t.messageConversationIds,
                  a = t.peopleSearchConversationIds,
                  o = t.renderEmptyState,
                  l = a.length && n.length,
                  i = e._groupBucketSize < n.length,
                  c = e._messagesBucketSize < r.length,
                  s = e._peopleBucketSize < a.length
                return (null == n ? void 0 : n.length) || a.length || r.length
                  ? y.createElement(
                      y.Fragment,
                      null,
                      a.length ? e._renderPeopleSection() : null,
                      l && !s ? y.createElement(Lt.a, null) : null,
                      s ? e._renderDMSearchFooter(Vt) : null,
                      n.length ? e._renderGroupsSection() : null,
                      i ? e._renderDMSearchFooter(Kt) : null,
                      r.length ? e._renderMessagesSection() : null,
                      c ? e._renderDMSearchFooter(Ut) : null,
                    )
                  : o()
              }),
              b()(c()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSearchIfNeeded)().catch(n())
              }),
              b()(c()(e), '_renderDMSearchFooter', function (t) {
                var n = e.props.location
                return y.createElement(
                  Te.a,
                  { style: qt.header },
                  y.createElement(I.b, { link: { pathname: n.pathname, state: { tab: t } } }, zt),
                )
              }),
              b()(c()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return y.createElement(Tt, { headerText: t, icon: n })
              }),
              b()(c()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  r = t.renderInboxItem
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: At.a, headerText: Kt }),
                  n
                    .map(function (e) {
                      return e ? r(n)(e) : null
                    })
                    .slice(0, e._groupBucketSize),
                )
              }),
              b()(c()(e), '_renderMessagesSection', function () {
                var t = e.props,
                  n = t.entryIds,
                  r = t.messageConversationIds,
                  a = t.renderInboxItem
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: Ht.a, headerText: Ut }),
                  n
                    .map(function (e) {
                      return e ? a(r, !0, n)(e) : null
                    })
                    .slice(0, e._messagesBucketSize),
                )
              }),
              b()(c()(e), '_renderPeopleSection', function () {
                var t = e.props,
                  n = t.peopleSearchConversationIds,
                  r = t.renderInboxItem
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: Bt.a, headerText: Vt }),
                  n
                    .map(function (e) {
                      return e ? r(n)(e) : null
                    })
                    .slice(0, e._peopleBucketSize),
                )
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.fetchStatus,
                    r = t.module
                  e.module !== r && n !== Mt.a.FAILED && this._handleFetch()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.loadingLabel
                  return y.createElement(Ft.a, {
                    accessibilityLabel: n,
                    fetchStatus: t,
                    onRequestRetry: this._handleFetch,
                    render: this._renderSearchResults,
                  })
                },
              },
            ]),
            n
          )
        })(y.Component)
      b()(Gt, 'contextType', v.a)
      var qt = Xe.a.create(function (e) {
          return {
            header: {
              backgroundColor: e.colors.cellBackground,
              paddingLeft: e.spaces.space16,
              paddingVertical: e.spaces.space12,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              borderTopColor: e.colors.borderColor,
            },
          }
        }),
        Wt = Rt(Gt),
        Qt = n('wAC9'),
        Yt = (n('1IsZ'), n('IAdD'), n('xPna'))
      function Xt(e, t) {
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
      function $t(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xt(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Zt = function (e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = {},
          r = {}
        return (
          null != e &&
            e.conversations &&
            (Object.values(e.conversations).forEach(function (e) {
              e && e.users && Object.assign(n, e.users), t && (e.isSearchResult = !0)
            }),
            (r = { conversations: null == e ? void 0 : e.conversations, users: n })),
          null != e && e.entries && (r = $t($t({}, r), {}, { entries: null == e ? void 0 : e.entries })),
          Object(Yt.a)(r)
        )
      }
      function Jt(e, t) {
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
      function en(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Jt(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Jt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var tn,
        nn = function (e) {
          return Object(Qt.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(Ze.e, '-').concat(e),
            getEndpointParams: function (t) {
              return en(en({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Zt,
          })
        },
        rn = function (e, t) {
          return t.query
        },
        an = Object(E.a)().propsFromState(function () {
          return {
            sliceModule: Object(K.createSelector)(rn, function (e) {
              return e ? nn(e) : void 0
            }),
          }
        })(function (e) {
          var t = e.loadingLabel,
            n = e.location,
            r = e.query,
            a = e.renderEmptyState,
            o = e.renderInboxItem,
            l = e.sliceModule
          return l
            ? y.createElement(Wt, {
                loadingLabel: t,
                location: n,
                module: l,
                query: r,
                renderEmptyState: a,
                renderInboxItem: o,
              })
            : a()
        }),
        on = j.selectRecentSearches,
        ln = function (e, t) {
          return t.query ? j.selectSearchConversations(e, t.query) : []
        },
        cn = function (e, t) {
          return t.query ? j.selectSearchFetchStatus(e, t.query) : T.a.LOADED
        },
        sn = function (e, t) {
          return t.conversationIds || []
        },
        un = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        dn = Object(E.a)()
          .propsFromState(function () {
            return { conversationIds: sn, recentSearches: on, searchFetchStatus: cn, searchConversationIds: ln }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              r = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: un(r, t),
            }
          })
          .propsFromActions(function () {
            return {
              addRecentSearch: j.addRecentSearches,
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SEARCH',
              ),
              search: j.searchConversations,
              clearRecentSearch: j.clearRecentSearch,
              clearRecentSearches: j.clearRecentSearches,
            }
          }),
        pn = n('VY6S'),
        fn = n('s14A'),
        hn = n('VPW4'),
        mn = (n('enFi'), n('mN6z')),
        bn = n('TEoO'),
        yn = n('NjAB'),
        gn = n('Fr3L'),
        vn = n('uDfI'),
        _n = n('DQzJ'),
        En = n('h3MB')
      function On(e, t) {
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
      function Sn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? On(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : On(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var In = void 0 !== tn ? tn : (tn = n('y59G')),
        wn = 'DM_MESSAGE_SEARCH',
        kn = { context: wn },
        Cn = function (e) {
          return e
        },
        xn = function (e) {
          var t,
            n,
            r,
            a,
            o,
            l = e.footer,
            i = e.noItemsRenderer,
            c = e.onScrollEnd,
            s = e.renderInboxItem,
            u = e.searchTerm,
            d = Object(vn.c)(),
            p = Object(_n.a)(In, { query: u }, kn),
            f = p.data,
            h = p.fetchNext,
            m = p.hasNext,
            b = null == f || null === (t = f.dm_message_slice_result) || void 0 === t ? void 0 : t.items,
            g =
              null == f ||
              null === (n = f.dm_message_slice_result) ||
              void 0 === n ||
              null === (r = n.items) ||
              void 0 === r
                ? void 0
                : r.map(function (e) {
                    var t, n
                    return null == e ||
                      null === (t = e.dm_event) ||
                      void 0 === t ||
                      null === (n = t.legacy) ||
                      void 0 === n
                      ? void 0
                      : n.conversation
                  }),
            v = Object(yn.b)(g, [En.a]),
            _ = Object(yn.b)(b, [En.b]),
            E = Sn(Sn({}, null == v ? void 0 : v.entities), null == _ ? void 0 : _.entities),
            O =
              ((a = f),
              (o = y.useRef()),
              y.useEffect(function () {
                o.current = a
              }),
              o.current)
          return (
            y.useEffect(
              function () {
                Object(mn.a)(f, O) || d(Zt(E, !0))
              },
              [E, f, O, d],
            ),
            y.createElement(bn.a, {
              cacheKey: wn,
              footer: m ? null : l,
              identityFunction: Cn,
              items: null == _ ? void 0 : _.result,
              noItemsRenderer: i,
              onNearEnd: h,
              onScrollEnd: c,
              renderer: s(null == v ? void 0 : v.result, !0, null == _ ? void 0 : _.result),
              withoutHeadroom: !0,
            })
          )
        },
        Rn = Xe.a.create(function (e) {
          return { activityIndicatior: { paddingVertical: 250 } }
        })
      function Pn(e) {
        return y.createElement(
          gn.a,
          { errorConfig: kn },
          y.createElement(
            y.Suspense,
            { fallback: y.createElement(hn.a, { style: Rn.activityIndicatior }) },
            y.createElement(xn, e),
          ),
        )
      }
      var Dn = n('j7Bv'),
        jn = n('VwDm'),
        Tn = n('hOZg')
      function Mn(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Fn = C.a.dbd5d40f,
        Ln = (function (e) {
          u()(n, e)
          var t = Mn(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.clearRecentSearch,
                    n = e.handleRecentSearchClick,
                    r = e.recentSearch,
                    a = y.createElement(Dn.a, { Icon: jn.a, color: 'neutral', size: 'xLarge', style: An.searchIcon }),
                    o = [An.listItemView, An.bottomBorder]
                  return y.createElement(
                    Qe.a,
                    { onPress: n, style: o },
                    y.createElement(
                      Te.a,
                      null,
                      y.createElement(
                        Ye.a,
                        { avatarCell: a, avatarSize: 'xLarge', cellStyle: An.avatarColumn },
                        y.createElement(
                          Te.a,
                          { style: An.container },
                          y.createElement(I.b, { numberOfLines: 1 }, r),
                          y.createElement(Ge.a, {
                            accessibilityLabel: Fn,
                            borderColor: 'transparent',
                            icon: y.createElement(Tn.a, null),
                            onPress: t,
                            type: 'brandText',
                          }),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        An = Xe.a.create(function (e) {
          return {
            container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
            searchIcon: { marginRight: e.spaces.space12, padding: e.spaces.space4 },
            avatarColumn: { flexGrow: 1, minWidth: '32px' },
            bottomBorder: {
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
            },
            listItemView: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space12,
              width: '100%',
            },
          }
        }),
        Hn = Ln
      function Bn(e, t) {
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
      function Nn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Bn(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Bn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Kn = function (e) {
        return Object(Qt.a)({
          contextSuffix: 'DM_GROUP_SEARCH_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.DirectMessagesGraphQL.fetchDMGroupSearch
          },
          sliceKey: ''.concat(Ze.e, '-groups-').concat(e),
          getEndpointParams: function (t) {
            return Nn(Nn({}, t), {}, { query: e })
          },
          mapEntitiesToActions: Zt,
        })
      }
      function Un(e, t) {
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
      function Vn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Un(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Un(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var zn = function (e) {
          return Object(Qt.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(Ze.e, '-people-').concat(e),
            getEndpointParams: function (t) {
              return Vn(Vn({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Zt,
          })
        },
        Gn = function (e, t) {
          return t.query
        },
        qn = function (e, t) {
          return t.tabType
        },
        Wn = Object(E.a)().propsFromState(function () {
          return {
            sliceModule: Object(K.createSelector)(qn, Gn, function (e, t) {
              var n = t && e === Ze.f.PEOPLE
              return t && e === Ze.f.GROUPS ? Kn(t) : n ? zn(t) : void 0
            }),
          }
        }),
        Qn = n('FS1z'),
        Yn = Wn(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            r = e.renderEmptyState,
            a = e.renderInboxItem,
            o = e.sliceModule
          return o
            ? y.createElement(Qn.a, {
                footer: t,
                module: o,
                noItemsRenderer: r,
                onScrollEnd: n,
                renderer: a([]),
                withoutHeadroom: !0,
              })
            : r()
        }),
        Xn = n('VPAj')
      function $n(e, t) {
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
      function Zn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $n(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $n(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Jn = Zn(
          Zn({}, n('7n04').a),
          {},
          { initialScrollHeadroom: Object(Xn.a)(0), scrollHeadroom: Object(Xn.a)(0), pinToNewestWhenAtNewest: !0 },
        ),
        er = n('IG4P'),
        tr = n('RJrc'),
        nr = n('TnY3'),
        rr = n('FIs5'),
        ar = n('6OUF'),
        or = n('k/OQ'),
        lr = n('95Se')
      function ir(e, t) {
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
      function cr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ir(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ir(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function sr(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ur = 'dmSearchInbox',
        dr = function (e) {
          return e
        },
        pr = C.a.b08821f3,
        fr = C.a.a66ac766,
        hr = C.a.fe61929d,
        mr = C.a.a846382a,
        br = C.a.b9dae4f4,
        yr = C.a.e7fb2027,
        gr = C.a.b92a21d8,
        vr = C.a.jdc67c42,
        _r = C.a.e8581ccd,
        Er = C.a.f08940ab,
        Or = C.a.gaae1fd5,
        Sr = C.a.f8321d82,
        Ir = C.a.c94ac69d,
        wr = C.a.a2f8105f,
        kr = C.a.g2fd3205,
        Cr = C.a.fb3c8e74,
        xr = (function (e) {
          u()(n, e)
          var t = sr(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              b()(c()(e), 'state', { debouncedQuery: '', isLoadingMore: !1, isRefreshing: !1 }),
              b()(
                c()(e),
                '_messageSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled'),
              ),
              b()(
                c()(e),
                '_modularSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              b()(c()(e), '_setInputRef', function (t) {
                e._textInputRef = t
              }),
              b()(c()(e), '_renderEmptyDMSearchInbox', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.query,
                  a = e.state.debouncedQuery
                return a && r
                  ? (n.scribe({ component: 'search', element: 'results', action: 'empty' }),
                    y.createElement(rr.a, {
                      buttonLink: '/messages/compose',
                      buttonText: Er,
                      header: gr({ query: a }),
                      message: e._messageSearchEnabled ? _r : vr,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : y.createElement(
                      Te.a,
                      { style: Rr.emptyState },
                      y.createElement(I.b, { align: 'center', color: 'gray700' }, Or),
                    )
              }),
              b()(c()(e), '_renderRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.query,
                  a = t.recentSearches
                return a.length && !r
                  ? y.createElement(
                      y.Fragment,
                      null,
                      y.createElement(Tt, {
                        analytics: n,
                        clearRecentSearches: e._clearRecentSearches,
                        headerText: Cr,
                        withClearButton: !0,
                      }),
                      a.map(function (t) {
                        return y.createElement(Hn, {
                          clearRecentSearch: function (n) {
                            return e._handleClearRecentSearch(n, t)
                          },
                          handleRecentSearchClick: function () {
                            return e._handleRecentSearchClick(t)
                          },
                          key: t,
                          recentSearch: t,
                        })
                      }),
                    )
                  : e._renderEmptyDMSearchInbox()
              }),
              b()(c()(e), '_renderAllDMSearchResultsTab', function () {
                var t = e.props,
                  n = t.location,
                  r = t.renderInboxItem,
                  a = e.state.debouncedQuery
                return a
                  ? y.createElement(an, {
                      loadingLabel: fr,
                      location: n,
                      query: a,
                      renderEmptyState: e._renderEmptyDMSearchInbox,
                      renderInboxItem: r,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              b()(c()(e), '_renderConversationsTab', function (t) {
                var n = e.props.renderInboxItem,
                  r = e.state.debouncedQuery
                return y.createElement(Yn, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  query: r,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: n,
                  tabType: t ? Ze.f.GROUPS : Ze.f.PEOPLE,
                })
              }),
              b()(c()(e), '_renderMessagesTab', function () {
                var t = e.props.renderInboxItem,
                  n = e.state.debouncedQuery
                return n
                  ? y.createElement(Pn, {
                      footer: e._renderFooter(),
                      noItemsRenderer: e._renderEmptyDMSearchInbox,
                      onScrollEnd: e._handleScrollEnd,
                      renderInboxItem: t,
                      searchTerm: n,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              b()(c()(e), '_renderTabContent', function () {
                var t = e.props.location
                switch (((null == t ? void 0 : t.state) || {}).tab) {
                  case kr:
                    return e._renderConversationsTab(!1)
                  case Ir:
                    return e._renderConversationsTab(!0)
                  case wr:
                    return e._renderMessagesTab()
                  default:
                    return e._renderAllDMSearchResultsTab()
                }
              }),
              b()(c()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.accessibilityTitle,
                  r = t.renderInboxItem,
                  a = t.searchConversationIds,
                  o = e.state.isRefreshing
                return y.createElement(
                  fn.a,
                  null,
                  y.createElement(
                    er.a,
                    { isRefreshing: o, onRefresh: e._handlePullToRefresh },
                    y.createElement(bn.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: Jn,
                      assumedItemHeight: 100,
                      cacheKey: ur,
                      footer: e._renderFooter(),
                      identityFunction: dr,
                      items: a,
                      noItemsRenderer: e._renderRecentSearches,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: e._handleScrollEnd,
                      renderer: r(a),
                      withoutHeadroom: !0,
                    }),
                  ),
                )
              }),
              b()(c()(e), '_renderFooter', function () {
                return e.state.isLoadingMore
                  ? y.createElement(tr.a, null)
                  : y.createElement(
                      Te.a,
                      { style: Rr.footerContainer },
                      y.createElement(I.b, { align: 'center', size: 'body', weight: 'bold' }, yr),
                      y.createElement(
                        We.a,
                        { interactiveStyles: null },
                        y.createElement(
                          I.b,
                          {
                            align: 'center',
                            color: 'primary',
                            onPress: e._handleFooterClick,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          br,
                        ),
                      ),
                    )
              }),
              b()(c()(e), '_clearRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.clearRecentSearches
                n.scribe({ component: 'recent_search', action: 'clear' }), r()
              }),
              b()(c()(e), '_handleComposeButtonPress', function () {
                e.props.analytics.scribe({ component: 'search', element: 'empty_results', action: 'compose' })
              }),
              b()(c()(e), '_handleFooterClick', function () {
                var t, n, r
                e._textInputRef && e._textInputRef.focus(),
                  null === (t = e._textInputRef) ||
                    void 0 === t ||
                    null === (n = t.textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    r.select()
              }),
              b()(c()(e), '_handleRefetchSearch', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.createLocalApiErrorHandler,
                  a = t.search,
                  o = e.state.debouncedQuery
                a &&
                  o &&
                  (n.scribe({ component: 'search', element: 'retry', action: 'click' }),
                  a({ query: o.toLowerCase(), preserveResults: !1, fetchNextPage: !1 }).catch(r()))
              }),
              b()(c()(e), '_handlePullToRefresh', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  r = t.search,
                  a = e.state.debouncedQuery
                e.setState({ isRefreshing: !0 }),
                  r &&
                    a &&
                    r({ query: a.toLowerCase(), preserveResults: !0, fetchNextPage: !1 })
                      .then(function () {
                        return e.setState({ isRefreshing: !1 })
                      })
                      .catch(function (t) {
                        return e.setState({ isRefreshing: !1 }), n()(t)
                      })
              }),
              b()(c()(e), '_handleSearchChangeInner', function (t) {
                var n = e.props,
                  r = n.createLocalApiErrorHandler,
                  a = n.onQueryChange,
                  o = n.search
                a(t),
                  e.setState({ debouncedQuery: t }),
                  o &&
                    t &&
                    !e._modularSearchEnabled &&
                    o({ query: t, preserveResults: !1, fetchNextPage: !1 }).catch(r())
              }),
              b()(c()(e), '_handleSearchChangeDebounced', Object(pn.a)(e._handleSearchChangeInner, 200)),
              b()(c()(e), '_handleSearchChange', function (t) {
                var n = t.currentTarget.value,
                  r = e.props.onQueryChange
                ;((n && n.trim()) || !n) && (r(n), e._handleSearchChangeDebounced(n))
              }),
              b()(c()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.search,
                  a = e.state.debouncedQuery
                e.setState({ isLoadingMore: !0 }),
                  a &&
                    (n.scribe({ component: 'search', element: 'results', action: 'get_older' }),
                    r({ query: a, preserveResults: !1, fetchNextPage: !0 }).finally(function () {
                      return e.setState({ isLoadingMore: !1 })
                    }))
              }),
              b()(c()(e), '_handleScrollEnd', function () {
                var t = e.props,
                  n = t.addRecentSearch,
                  r = t.analytics,
                  a = t.query
                e.state.debouncedQuery && a && (n(a), r.scribe({ component: 'recent_search', action: 'add' }))
              }),
              b()(c()(e), '_handleSearchClear', function () {
                return e._handleSearchChangeInner('')
              }),
              b()(c()(e), '_handleHideRecentSearches', function () {
                ;(0, e.props.hideRecentSearches)()
              }),
              b()(c()(e), '_handleAddRecentSearch', function (t) {
                var n = t.currentTarget.value,
                  r = e.props,
                  a = r.addRecentSearch,
                  o = r.analytics
                n &&
                  (a(n),
                  o.scribe({ component: 'recent_search', action: 'add' }),
                  e._textInputRef && e._textInputRef.blur())
              }),
              b()(c()(e), '_handleRecentSearchClick', function (t) {
                var n = e.props,
                  r = n.analytics
                ;(0, n.onQueryChange)(t),
                  r.scribe({ component: 'recent_search', action: 'click' }),
                  e._handleSearchChangeInner(t)
              }),
              b()(c()(e), '_handleClearRecentSearch', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  o = r.clearRecentSearch
                t.stopPropagation(), t.preventDefault(), a.scribe({ component: 'recent_search', action: 'clear' }), o(n)
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._textInputRef && this._textInputRef.focus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.analytics,
                    r = t.query,
                    a = t.recentSearches
                  e.query || !r || a.includes(r) || n.scribe({ component: 'search', action: 'began_typing' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.query,
                    r = e.searchFetchStatus,
                    a = !(
                      (this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                        this.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled')) ||
                      (this._modularSearchEnabled && n)
                    ),
                    o = [Rr.searchInput, a ? Rr.searchInputBorder : void 0],
                    l = ((null == t ? void 0 : t.state) || {}).tab,
                    i = [Sr, kr, Ir]
                  this._messageSearchEnabled && i.push(wr)
                  var c = i.map(function (e) {
                    return {
                      key: e,
                      label: e,
                      isActive: function () {
                        return l === e || (!l && e === Sr)
                      },
                      to: cr(cr({}, t), {}, { state: cr(cr({}, t.state), {}, { tab: e }) }),
                    }
                  })
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(
                      Te.a,
                      { style: o },
                      y.createElement(Ge.a, {
                        accessibilityLabel: pr,
                        icon: y.createElement(lr.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      y.createElement(ar.a, {
                        Icon: jn.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? mr : hr,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || l === kr || l === Ir)
                      ? y.createElement(y.Fragment, null, y.createElement(or.a, { links: c }), this._renderTabContent())
                      : y.createElement(Ft.a, {
                          accessibilityLabel: fr,
                          fetchStatus: r,
                          onRequestRetry: this._handleRefetchSearch,
                          render: this._renderSearchResults,
                        }),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      b()(xr, 'contextType', v.a), b()(xr, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var Rr = Xe.a.create(function (e) {
          return {
            emptyState: { marginTop: e.spaces.space32 },
            searchInput: {
              backgroundColor: e.colors.cellBackground,
              padding: e.spaces.space12,
              flexDirection: 'row',
              alignItems: 'center',
              zIndex: 1,
            },
            searchInputBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            footerContainer: { marginVertical: e.spaces.space32 },
          }
        }),
        Pr = Object(nr.a)(dn(xr)),
        Dr = n('dwig'),
        jr = n('QB0K'),
        Tr = n('Avzu'),
        Mr = n('FRNI')
      function Fr(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Lr = C.a.h845f281,
        Ar = C.a.f325afc3,
        Hr = (function (e) {
          u()(n, e)
          var t = Fr(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  return y.createElement(jr.a, {
                    accessibilityLabel: Lr,
                    href: '/messages/compose',
                    icon: y.createElement(Tr.a, null),
                    label: Lr,
                    scribeComponent: 'floating_dm_button',
                    shortLabel: Ar,
                    testID: Mr.a.message,
                  })
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        Br = n('tI3i'),
        Nr = n.n(Br),
        Kr = n('883S'),
        Ur = n('yoO3'),
        Vr = n('GSsg'),
        zr = n('2g+p'),
        Gr = n('mw9i'),
        qr = n('BcsE'),
        Wr = n('+d3d')
      function Qr(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Yr = function (e) {
          return e
        },
        Xr = C.a.a66ac766,
        $r = C.a.fe61929d,
        Zr = C.a.a846382a,
        Jr = (function (e) {
          u()(n, e)
          var t = Qr(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              b()(c()(o), 'state', { showSearchView: !1, searchQuery: '' }),
              b()(
                c()(o),
                '_messageSearchEnabled',
                o.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled'),
              ),
              b()(
                c()(o),
                '_modularSearchEnabled',
                o.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              b()(c()(o), '_render', function () {
                return o.state.showSearchView ? o._renderFocusedSearch() : o._renderInbox()
              }),
              b()(c()(o), '_renderFocusedSearch', function () {
                var e = o.props,
                  t = e.accessibilityTitle,
                  n = e.analytics,
                  r = e.conversationIds,
                  a = o.state.searchQuery
                return y.createElement(Pr, {
                  accessibilityTitle: t,
                  analytics: n,
                  conversationIds: r,
                  hideRecentSearches: o._hideRecentSearches,
                  onQueryChange: o._handleQueryChange,
                  query: a,
                  renderInboxItem: o._renderInboxItem,
                })
              }),
              b()(c()(o), '_renderInbox', function () {
                var e = o.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  r = e.footer,
                  a = e.isDrawer,
                  l = e.isRefreshing,
                  i = e.renderEmptyDMInbox,
                  c = e.renderStickyContent,
                  s = e.virtualScrollerCacheKey,
                  u = e.withDmSearch,
                  d =
                    o.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    o.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  p = [ea.searchInput, d ? void 0 : ea.searchInputBorder],
                  f = y.createElement(
                    y.Fragment,
                    null,
                    u
                      ? y.createElement(
                          Te.a,
                          { onClick: o._handleSearchClick, style: p },
                          y.createElement(ar.a, {
                            Icon: jn.a,
                            autoComplete: 'off',
                            isCompact: !0,
                            onChange: o._handleSearchChange,
                            placeholder: o._messageSearchEnabled ? Zr : $r,
                            withClearButton: !0,
                          }),
                        )
                      : null,
                    c ? c() : null,
                  )
                return y.createElement(
                  er.a,
                  { isRefreshing: l, onRefresh: o._handlePullToRefresh },
                  s && n
                    ? y.createElement(bn.a, {
                        accessibilityRole: 'tablist',
                        accessibilityTitle: t,
                        anchoring: Jn,
                        assumedItemHeight: 100,
                        cacheKey: s,
                        footer: r,
                        header: f,
                        identityFunction: Yr,
                        items: n,
                        noItemsRenderer: i,
                        onNearEnd: o._handleNearEnd,
                        renderer: o._renderInboxItem(n),
                        withKeyboardShortcuts: !a,
                        withoutHeadroom: !0,
                      })
                    : null,
                )
              }),
              b()(c()(o), '_handleNearEnd', function () {
                o._handleHistoryRequest()
              }),
              b()(c()(o), '_handleQueryChange', function (e) {
                o.setState({ searchQuery: e })
              }),
              b()(c()(o), '_handleSearchChange', function (e) {
                e.currentTarget.value
                o.state.showSearchView || o.setState({ showSearchView: !0 })
              }),
              b()(c()(o), '_handleSearchClick', function () {
                o.props.analytics.scribe({ component: 'search', action: 'click' }), o.setState({ showSearchView: !0 })
              }),
              b()(c()(o), '_hideRecentSearches', function () {
                o.setState({ showSearchView: !1, searchQuery: '' })
              }),
              b()(c()(o), '_renderInboxItem', function (e, t, n) {
                return function (r, a) {
                  var l = o.context.loggedInUserId,
                    i = o.props.location,
                    c = o.state.searchQuery,
                    s = t ? (n || []).indexOf(r) : -1,
                    u = -1 !== s && null != e && e.length ? e[s] : null,
                    d = u ? r : '',
                    p = u || r,
                    f = { pathname: '/messages/'.concat(p), state: null == i ? void 0 : i.state },
                    h = p && null != e && e.length ? e.indexOf(p) : null,
                    m = Object(qr.a)(h) ? h + 1 : 0
                  return (
                    Nr()(!!l, 'loggedInUserId must be defined'),
                    a && a(!0),
                    y.createElement(g.a, { exact: !1, path: f.pathname }, function (e) {
                      return y.createElement(kt, {
                        conversationId: p,
                        inboxType: o.props.inboxType,
                        isActive: e,
                        isMessageItem: t,
                        key: p,
                        link: f,
                        messageId: d,
                        onClick: o._handleConversationClick,
                        perspective: l,
                        position: m,
                        searchQuery: c,
                      })
                    })
                  )
                }
              }),
              b()(c()(o), '_handleFetchInitialWrapper', function () {
                o._handleFetchInitial()
              }),
              b()(c()(o), '_handleFetchInitial', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchInboxIfNeeded,
                  r = e.fetchUpdates
                return n()
                  .then(o._updateLastSeenEventId, t())
                  .then(function () {
                    o._updatePolling.start()
                  })
                  .then(function () {
                    return r().catch(t())
                  })
              }),
              b()(c()(o), '_handleConversationClick', function (e, t, n, r) {
                var a = o.props,
                  l = a.analytics,
                  i = a.customCellClick,
                  c = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  s = (null == n ? void 0 : n.type) === j.CONVERSATION_TYPE.GROUP
                l.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: o.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: c,
                    conversation_type: s ? Ze.g.GROUP : Ze.g.ONE_TO_ONE,
                    position: r,
                  },
                }),
                  i && i(e, t)
              }),
              b()(c()(o), '_handleEmptyDMInboxImpression', function () {
                o.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              b()(c()(o), '_handlePullToRefresh', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchInbox)().then(o._updateLastSeenEventId, t())
              }),
              b()(c()(o), '_updateLastSeenEventIdIfActive', function () {
                if ('background' !== zr.a.currentState) return o._updateLastSeenEventId()
              }),
              b()(c()(o), '_updateLastSeenEventId', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.updateLastSeenEventId)().catch(t())
              }),
              (o._fab = y.createElement(Hr, null)),
              o
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.createLocalApiErrorHandler,
                    r = t.fetchInboxHistory,
                    a = t.fetchUpdates
                  return (
                    (this._updatePolling = new Vr.a(
                      function () {
                        a().then(e._updateLastSeenEventIdIfActive, n(Kr.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(Wr.a)(function () {
                      r.apply(void 0, arguments).catch(n())
                    }, 1e3)),
                    this._handleFetchInitial()
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._updatePolling.stop()
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.createElement(
                    Ur.a,
                    null,
                    y.createElement(D, null),
                    y.createElement(
                      Dr.a,
                      { component: Gr.a, fab: this._fab, style: ea.root },
                      y.createElement(Ft.a, {
                        accessibilityLabel: Xr,
                        fetchStatus: this.props.fetchStatus,
                        onRequestRetry: this._handleFetchInitialWrapper,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.Component)
      b()(Jr, 'contextType', v.a),
        b()(Jr, 'defaultProps', { conversationIds: [], inboxType: Pe.c.PRIMARY, isDrawer: !1, withDmSearch: !1 })
      var ea = Xe.a.create(function (e) {
        return {
          root: { backgroundColor: e.colors.cellBackground, flexGrow: 1 },
          searchInput: { backgroundColor: e.colors.cellBackground, padding: e.spaces.space12, zIndex: 1 },
          searchInputBorder: {
            borderBottomColor: e.colors.borderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px',
          },
        }
      })
      t.a = Object(nr.a)(F(Jr))
    },
    y59G: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        o,
        l,
        i,
        c,
        s,
        u,
        d,
        p,
        f,
        h,
        m,
        b,
        y,
        g,
        v,
        _,
        E,
        O,
        S,
        I,
        w,
        k,
        C,
        x,
        R,
        P,
        D,
        j,
        T,
        M,
        F,
        L,
        A,
        H,
        B = {
          fragment: {
            argumentDefinitions: (r = [
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
              { defaultValue: null, kind: 'LocalArgument', name: 'query' },
              { defaultValue: !1, kind: 'LocalArgument', name: 'withLabels' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: 'dm_message_slice_result',
                args: [(a = { kind: 'Variable', name: 'query', variableName: 'query' })],
                concreteType: null,
                kind: 'LinkedField',
                name: '__DMMessageSearchTabQuery_dm_message_slice_result_slice',
                plural: !1,
                selections: [
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'items',
                        plural: !0,
                        selections: [
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'DMEvent',
                                kind: 'LinkedField',
                                name: 'dm_event',
                                plural: !1,
                                selections: [
                                  (o = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'rest_id',
                                    storageKey: null,
                                  }),
                                  (l = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      (i = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'affects_sort',
                                        storageKey: null,
                                      }),
                                      (c = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'created_at_millis',
                                        storageKey: null,
                                      }),
                                      (s = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'request_id',
                                        storageKey: null,
                                      }),
                                      (u = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_id',
                                        storageKey: null,
                                      }),
                                      (d = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_type',
                                        storageKey: null,
                                      }),
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
                                        selections: [
                                          l,
                                          o,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              (p = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'conversation_id',
                                                storageKey: null,
                                              }),
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  p,
                                                  (f = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'conversation_type',
                                                    storageKey: null,
                                                  }),
                                                  (h = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'name',
                                                    storageKey: null,
                                                  }),
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (y = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              l,
                                                              o,
                                                              (b = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  h,
                                                                  (m = {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'screen_name',
                                                                    storageKey: null,
                                                                  }),
                                                                ],
                                                                storageKey: null,
                                                              }),
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                  c,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: y,
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiMedia',
                                                    kind: 'LinkedField',
                                                    name: 'avatar',
                                                    plural: !1,
                                                    selections: [
                                                      l,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [
                                                          (g = {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_url',
                                                                storageKey: null,
                                                              },
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_width',
                                                                storageKey: null,
                                                              },
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_height',
                                                                storageKey: null,
                                                              },
                                                            ],
                                                            type: 'ApiImage',
                                                            abstractKey: null,
                                                          }),
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ParticipantConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'participants_metadata',
                                                plural: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'user_results',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              l,
                                                              o,
                                                              (v = {
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
                                                                  h,
                                                                  m,
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'profile_image_url_https',
                                                                    storageKey: null,
                                                                  },
                                                                ],
                                                                storageKey: null,
                                                              }),
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  (_ = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'last_read_event_id',
                                                    storageKey: null,
                                                  }),
                                                  (E = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_time_millis',
                                                    storageKey: null,
                                                  }),
                                                  (O = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_conversation_event_id',
                                                    storageKey: null,
                                                  }),
                                                ],
                                                storageKey: null,
                                              },
                                              (S = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'PerspectivalConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'perspectival_conversation_metadata',
                                                plural: !1,
                                                selections: [
                                                  _,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'low_quality',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'muted',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'muted_due_to_muted_user',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'read_only',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'trusted',
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              }),
                                            ],
                                            storageKey: null,
                                          },
                                          (I = {
                                            condition: 'withLabels',
                                            kind: 'Condition',
                                            passingValue: !0,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'DMConversationLabelInfo',
                                                kind: 'LinkedField',
                                                name: 'labels',
                                                plural: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'label_type',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'timestamp',
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                          }),
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMEventDetail',
                                        kind: 'LinkedField',
                                        name: 'event_detail',
                                        plural: !1,
                                        selections: [
                                          (w = {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DMInitialLowQualityState',
                                            kind: 'LinkedField',
                                            name: 'initial_low_quality_state',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'is_low_quality',
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          }),
                                          (k = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (C = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (x = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (R = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          h,
                                          (P = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (D = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'sender_registration_token',
                                            storageKey: null,
                                          }),
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: y,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: y,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: y,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DirectMessageInfo',
                                            kind: 'LinkedField',
                                            name: 'dm',
                                            plural: !1,
                                            selections: [
                                              (j = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'created_at_sec',
                                                storageKey: null,
                                              }),
                                              l,
                                              (T = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'text',
                                                storageKey: null,
                                              }),
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: y,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: y,
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            type: 'DMMessageSearchItem',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      (M = {
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
                    type: 'DMMessageSlice',
                    abstractKey: null,
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
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: null,
                args: (F = [
                  { kind: 'Variable', name: 'cursor', variableName: 'cursor' },
                  a,
                  { kind: 'Literal', name: 's', value: 17 },
                ]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'dm_message_slice_result',
                plural: !1,
                selections: [
                  (L = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'items',
                        plural: !0,
                        selections: [
                          L,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'DMEvent',
                                kind: 'LinkedField',
                                name: 'dm_event',
                                plural: !1,
                                selections: [
                                  o,
                                  l,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      i,
                                      c,
                                      s,
                                      u,
                                      d,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
                                        selections: [
                                          l,
                                          o,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              p,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  p,
                                                  f,
                                                  h,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (H = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          L,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              l,
                                                              o,
                                                              b,
                                                              (A = {
                                                                alias: null,
                                                                args: null,
                                                                filters: null,
                                                                handle: 'defaultScalars',
                                                                key: '',
                                                                kind: 'LinkedHandle',
                                                                name: 'legacy',
                                                              }),
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                  c,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: H,
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiMedia',
                                                    kind: 'LinkedField',
                                                    name: 'avatar',
                                                    plural: !1,
                                                    selections: [
                                                      l,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [L, g],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ParticipantConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'participants_metadata',
                                                plural: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'user_results',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          L,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [l, o, v, A],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  _,
                                                  E,
                                                  O,
                                                ],
                                                storageKey: null,
                                              },
                                              S,
                                            ],
                                            storageKey: null,
                                          },
                                          I,
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMEventDetail',
                                        kind: 'LinkedField',
                                        name: 'event_detail',
                                        plural: !1,
                                        selections: [
                                          w,
                                          k,
                                          C,
                                          x,
                                          R,
                                          h,
                                          P,
                                          D,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: H,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: H,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: H,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DirectMessageInfo',
                                            kind: 'LinkedField',
                                            name: 'dm',
                                            plural: !1,
                                            selections: [
                                              j,
                                              l,
                                              T,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: H,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: H,
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            type: 'DMMessageSearchItem',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      M,
                    ],
                    type: 'DMMessageSlice',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: F,
                filters: ['query', 'safety_level'],
                handle: 'slice',
                key: 'DMMessageSearchTabQuery_dm_message_slice_result',
                kind: 'LinkedHandle',
                name: 'dm_message_slice_result',
              },
            ],
          },
          params: {
            id: 'sQISYch0uTb7uyIQBc2_iA',
            metadata: { sliceInfoPath: ['dm_message_slice_result', 'slice_info'] },
            name: 'DMMessageSearchTabQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(B.hash = '2941cf22a71996356c51765bade2759b'), (t.default = B)
    },
  },
])
//# sourceMappingURL=WIPED
