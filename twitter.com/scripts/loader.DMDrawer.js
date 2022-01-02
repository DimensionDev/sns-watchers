;(window.webpackJsonp = window.webpackJsonp || []).push([
  [164],
  {
    '+Bsv': function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = r('3XMw'),
        o = r.n(a),
        c = r('M2x3'),
        i = 'settingsAppBar',
        l = r('/yvb'),
        s = r('rHpw'),
        u = o.a.bb081ea1,
        d = { viewType: 'settings_button' },
        p = n.memo(function (e) {
          var t = e.onPress,
            r = e.pullRight,
            a = e.to
          return n.createElement(l.a, {
            accessibilityLabel: u,
            behavioralEventContext: d,
            hoverLabel: { label: u },
            icon: n.createElement(c.a, null),
            link: a,
            onPress: t,
            pullRight: r,
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
    '3GUV': function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('5Yy7'),
        l = r.n(i),
        s = r('N+ot'),
        u = r.n(s),
        d = r('AuHH'),
        p = r.n(d),
        f = r('ERkP'),
        h = r('rHpw'),
        b = r('MWbm')
      function m(e) {
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
          var r,
            n = p()(e)
          if (t) {
            var a = p()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var y = (function (e) {
          l()(r, e)
          var t = m(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.createElement(b.a, { style: v.root })
                },
              },
            ]),
            r
          )
        })(f.Component),
        v = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '5UID': function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('5Yy7'),
        l = r.n(i),
        s = r('N+ot'),
        u = r.n(s),
        d = r('AuHH'),
        p = r.n(d),
        f = r('ERkP'),
        h = r('3XMw'),
        b = r.n(h),
        m = r('rHpw'),
        y = r('+/1j'),
        v = r('MWbm')
      function g(e) {
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
          var r,
            n = p()(e)
          if (t) {
            var a = p()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var E = b.a.e5b0063d,
        _ = 0,
        O = (function (e) {
          l()(r, e)
          var t = g(r)
          function r() {
            var e
            return a()(this, r), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(_)), (_ += 1), e
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    r = e.title,
                    n = E({ title: r })
                  return f.createElement(
                    v.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    f.createElement(
                      y.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: m.a.visuallyHidden,
                      },
                      r,
                    ),
                    f.createElement(v.a, { accessibilityLabel: n }, t),
                  )
                },
              },
            ]),
            r
          )
        })(f.Component)
      t.a = O
    },
    Avzu: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('ERkP'),
        c = r('Lsrn'),
        i = r('k/Ka')
      function l(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
    BUB3: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('m3Bd'),
        c = r.n(o),
        i = r('ERkP'),
        l = r('sNn6'),
        s = r('rHpw'),
        u = r('MWbm')
      function d(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          r = c()(e, ['children'])
        return i.createElement(l.a, r, function (e) {
          return i.createElement(
            u.a,
            { style: e && f.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? i.createElement(u.a, { pointerEvents: 'none', style: f.overlay }) : null,
          )
        })
      }
    },
    FS1z: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('1Pcy'),
        l = r.n(i),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('N+ot'),
        p = r.n(d),
        f = r('AuHH'),
        h = r.n(f),
        b = r('KEM+'),
        m = r.n(b),
        y = (r('2G9S'), r('ERkP')),
        v = r('rxPX'),
        g = r('0KEI'),
        E = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        _ = function (e, t) {
          return t.module.selectItems(e)
        },
        O = Object(v.a)()
          .propsFromState(function (e) {
            return { fetchStatus: E, items: _ }
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
        S = r('v//M'),
        I = r('sIe2'),
        w = r('3XMw'),
        C = r.n(w),
        x = r('TEoO')
      function R(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var P = C.a.i9028824,
        j = 'sliceTimeline',
        D = function (e) {
          return e
        },
        T = { viewType: 'timeline' },
        k = (function (e) {
          u()(r, e)
          var t = R(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), '_render', function () {
                var t = e.props,
                  r = t.footer,
                  n = t.items,
                  a = t.noItemsRenderer,
                  o = t.numColumns,
                  c = t.onScrollEnd,
                  i = t.renderer,
                  l = t.withoutHeadroom
                return !n || o < 1
                  ? null
                  : 1 === o
                  ? y.createElement(x.a, {
                      cacheKey: j,
                      footer: r,
                      identityFunction: D,
                      items: n,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: c,
                      renderer: i,
                      withoutHeadroom: l,
                    })
                  : y.createElement(I.a, {
                      ListEmptyComponent: a,
                      data: n,
                      keyExtractor: D,
                      numColumns: o,
                      renderItem: i,
                    })
              }),
              m()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(r())
              }),
              m()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  r = t.alwaysFetch,
                  n = t.createLocalApiErrorHandler,
                  a = t.fetch,
                  o = t.fetchIfNeeded
                ;(r ? a : o)().catch(n())
              }),
              e
            )
          }
          return (
            c()(r, [
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
                    r = e.module,
                    n = e.retryMessage
                  return r
                    ? y.createElement(S.a, {
                        accessibilityLabel: P,
                        behavioralEventContext: T,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: n,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            r
          )
        })(y.Component)
      m()(k, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var M = O(k)
      t.a = M
    },
    TEoO: function (e, t, r) {
      'use strict'
      var n = r('m3Bd'),
        a = r.n(n),
        o = r('ERkP'),
        c = r('5UID'),
        i = r('3GUV'),
        l = r('iBK2'),
        s = o.createElement(i.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            r = a()(e, ['accessibilityTitle']),
            n = o.createElement(l.b, r)
          return t ? o.createElement(c.a, { title: t }, n) : n
        }
      ;(u.defaultProps = { footer: s }), (t.a = u)
    },
    fuhe: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'DMDrawer', function () {
          return wt
        })
      r('OZaJ')
      var n = r('97Jx'),
        a = r.n(n),
        o = r('VrFO'),
        c = r.n(o),
        i = r('Y9Ll'),
        l = r.n(i),
        s = r('1Pcy'),
        u = r.n(s),
        d = r('5Yy7'),
        p = r.n(d),
        f = r('N+ot'),
        h = r.n(f),
        b = r('AuHH'),
        m = r.n(b),
        y = r('KEM+'),
        v = r.n(y),
        g = (r('2G9S'), r('3voH'), r('ERkP')),
        E = r('ZUOq'),
        _ = r('MMRb'),
        O = r('RqPI'),
        S = r('rxPX'),
        I = r('0KEI'),
        w = Object(S.a)()
          .propsFromState(function () {
            return {
              conversations: _.selectConversations,
              drawerExperimentEnabled: _.selectDrawerExperimentEnabled,
              perspective: O.p,
              poppedOutConversationId: _.selectPoppedOutConversationId,
              visibility: _.selectDrawerVisibility,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchInboxIfNeeded: _.fetchInboxIfNeeded,
              loadDrawerVisibilityFromPersistence: _.loadDrawerVisibilityFromPersistence,
              setDrawerVisibility: _.setDrawerVisibility,
            }
          }),
        C = r('V/6K'),
        x =
          (r('z84I'),
          r('+KXO'),
          r('1t7P'),
          r('LW0h'),
          r('daRM'),
          r('jwue'),
          r('+oxZ'),
          r('FtHn'),
          r('7x/C'),
          r('lTEL'),
          r('kYxP'),
          r('CDB5')),
        R = r('1YZw'),
        P = r('hqKg'),
        j = r('X/yg'),
        D = r('AQOc'),
        T = r('UhuB'),
        k = r('l0YN'),
        M = r('G6rE'),
        H = r('P1r1')
      function L(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : L(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var B = function (e, t) {
          return t.conversationId
        },
        F = Object(P.createSelector)(
          function (e, t) {
            return _.selectEntriesForConversation(e, B(0, t))
          },
          O.p,
          function (e, t) {
            return t ? Object(j.d)(e, t) : void 0
          },
        ),
        N = function (e) {
          return function (t) {
            return x.c(e, t)
          }
        },
        U = function (e) {
          return function (t, r) {
            return x.a(e, t, r)
          }
        },
        V = {
          conversation: function (e, t) {
            return _.selectConversation(e, B(0, t))
          },
          entries: _.selectEntries,
          perspective: O.p,
          users: M.e.selectAll,
          dataSaverMode: H.k,
          dtabBarInfo: H.n,
          quickReplyOptions: F,
          visibility: _.selectDrawerVisibility,
          inboxUnreadCount: k.a,
          isUnread: function (e, t) {
            return !_.selectConversationIsRead(e, B(0, t))
          },
          isDmReceiptSettingEnabled: T.n,
        },
        G = {
          draftText: function (e, t) {
            return x.l(e, B(0, t))
          },
          gifMetadata: function (e, t) {
            return x.h(e, B(0, t))
          },
          isUploading: function (e, t) {
            return x.j(e, B(0, t))
          },
          media: function (e, t) {
            return x.i(e, B(0, t))
          },
          mediaUploadProgress: function (e, t) {
            return x.k(e, B(0, t))
          },
        },
        q = Object(S.a)()
          .propsFromState(function () {
            return A(A({}, V), G)
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              r = e.dataSaverMode,
              n = e.draftText,
              a = e.dtabBarInfo,
              o = e.entries,
              c = e.gifMetadata,
              i = e.inboxUnreadCount,
              l = e.isDmReceiptSettingEnabled,
              s = e.isUnread,
              u = e.isUploading,
              d = e.media,
              p = e.mediaUploadProgress,
              f = e.perspective,
              h = e.quickReplyOptions,
              b = e.users,
              m = e.visibility,
              y = null == t ? void 0 : t.data
            return {
              conversation: y && Object(D.a)(y, o, b),
              perspective: f,
              dataSaverMode: r,
              draftText: n,
              dtabBarInfo: a,
              gifMetadata: c,
              inboxUnreadCount: i,
              isDmReceiptSettingEnabled: l,
              isUploading: u,
              isUnread: s,
              media: d,
              mediaUploadProgress: p,
              quickReplyOptions: h,
              visibility: m,
            }
          })
          .propsFromActions(function (e) {
            var t = e.conversationId
            return {
              addMedia: U(t),
              addToast: R.b,
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchConversationHistory: _.fetchConversationHistory,
              removeMedia: N(t),
              saveText: x.f,
              sendMessage: x.m,
              updateConversationReadState: _.updateConversationReadState,
              updateTyping: _.updateTyping,
              fetchUpdatesIfNeeded: _.fetchUpdatesIfNeeded,
            }
          })
          .withAnalytics({ page: 'messages', section: 'thread_drawer' }),
        Q = r('aWyx'),
        W = r('qz2E'),
        z = r('Oi4X'),
        Y = r('OhSZ'),
        K =
          (r('uFXj'),
          Object(S.a)()
            .propsFromState(function () {
              return { visibility: _.selectDrawerVisibility }
            })
            .propsFromActions(function () {
              return { popOutConversation: _.popOutConversation, setDrawerVisibility: _.setDrawerVisibility }
            })
            .withAnalytics()),
        X = r('AQ79'),
        $ = r('3XMw'),
        Z = r.n($),
        J = r('OrGc'),
        ee = r('hACr'),
        te = r('fs1G'),
        re = r('MWbm'),
        ne = r('/yvb'),
        ae = r('Znyr'),
        oe = r('t62R'),
        ce = r('xKuM'),
        ie = r('rHpw'),
        le = r('v6aA'),
        se = r('95Se'),
        ue = r('Avzu'),
        de = r('Lsrn'),
        pe = r('k/Ka')
      function fe(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fe(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : fe(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var be = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(pe.a)(
          'svg',
          he(
            he({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [de.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M12 19.344l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 19.344z',
            }),
            g.createElement('path', {
              d: 'M12 11.535l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 11.535z',
            }),
          ),
        )
      }
      be.metadata = { width: 24, height: 24 }
      var me = be
      function ye(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ye(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ye(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ge = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(pe.a)(
          'svg',
          ve(
            ve({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [de.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z',
            }),
            g.createElement('path', {
              d: 'M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z',
            }),
          ),
        )
      }
      ge.metadata = { width: 24, height: 24 }
      var Ee = ge,
        _e = r('x0mb')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var Se = Z.a.a2f8105f,
        Ie = Z.a.d227d19e,
        we = Z.a.c64c1883,
        Ce = Z.a.j7d0e835,
        xe = Z.a.b08821f3,
        Re = Z.a.e736990a,
        Pe = Z.a.cdcebd22,
        je = (function (e) {
          p()(r, e)
          var t = Oe(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), '_headerBar', g.createRef()),
              v()(
                u()(e),
                '_appBarScrollEnabled',
                e.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
              ),
              v()(u()(e), '_isExpanded', function () {
                return e.props.visibility === X.a.EXPANDED
              }),
              v()(u()(e), '_renderLeftControl', function () {
                var t = e.props.inboxUnreadCount
                return g.createElement(
                  re.a,
                  null,
                  g.createElement(ne.a, {
                    accessibilityLabel: xe,
                    icon: g.createElement(se.a, null),
                    onPress: e._handleUnpopConvo,
                    type: e._getButtonType(),
                  }),
                  t && t > 0
                    ? g.createElement(ae.a, {
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
              v()(u()(e), '_getButtonType', function () {
                var t = e.props,
                  r = t.hasNewMessages
                return t.isHighlighted && r ? 'onMediaText' : 'primaryText'
              }),
              v()(u()(e), '_renderRightControl', function () {
                var t = e.props.conversationTitle,
                  r = e._isExpanded(),
                  n = e._getButtonType()
                return g.createElement(
                  re.a,
                  { style: De.rightControls },
                  t
                    ? null
                    : g.createElement(ne.a, {
                        accessibilityLabel: we,
                        hoverLabel: { label: Pe },
                        icon: g.createElement(ue.a, null),
                        onPress: e._handleNewMessage,
                        type: n,
                      }),
                  r
                    ? g.createElement(ne.a, {
                        accessibilityLabel: Ie,
                        hoverLabel: { label: Ie },
                        icon: g.createElement(me, null),
                        onPress: e._handleToggleVisibility,
                        type: n,
                      })
                    : g.createElement(ne.a, {
                        accessibilityLabel: Ce,
                        hoverLabel: { label: Ce },
                        icon: g.createElement(Ee, null),
                        onPress: e._handleToggleVisibility,
                        type: n,
                      }),
                )
              }),
              v()(u()(e), '_handleUnpopConvo', function () {
                ;(0, e.props.popOutConversation)(null)
              }),
              v()(u()(e), '_handleToggleVisibility', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.onDrawerOpen,
                  a = t.setDrawerVisibility,
                  o = e._isExpanded() ? X.a.COLLAPSED : X.a.EXPANDED
                o === X.a.COLLAPSED
                  ? r.scribe({ action: 'collapse' })
                  : o === X.a.EXPANDED && (r.scribe({ action: 'expand' }), n && n()),
                  a(o)
              }),
              v()(u()(e), '_handleToggleVisibilityKeyboard', function () {
                e._handleToggleVisibility(), e._headerBar && e._headerBar.current && e._headerBar.current.focus()
              }),
              v()(u()(e), '_handleNewMessage', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.history
                r.scribe({ section: 'compose_drawer', component: 'dm', action: 'show' }),
                  n.push({ pathname: '/messages/compose', state: { source: 'drawer' } })
              }),
              v()(u()(e), '_renderTitle', function () {
                var t = e.props,
                  r = t.conversationTitle,
                  n = t.hasNewMessages,
                  a = t.isHighlighted,
                  o = r || g.createElement(oe.b, null, Se)
                return g.createElement(
                  re.a,
                  { style: De.titleContainer },
                  g.createElement(re.a, { style: [De.titleTextRoot, a && n ? De.titleTextHighlighted : null] }, o),
                  n
                    ? g.createElement(
                        re.a,
                        { style: De.newMessageDotContainer },
                        g.createElement(_e.a, {
                          accessibilityLabel: Re,
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
            l()(r, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    r = t.hasNewMessages,
                    n = t.isHighlighted,
                    a = t.triggerHighlight
                  e.isHighlighted || n || e.hasNewMessages || !r || (a && a())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    r = t.conversationSubtitle,
                    n = t.conversationTitle,
                    a = t.hasNewMessages,
                    o = t.isHighlighted,
                    c = a ? (o ? [De.headerHighlighted] : [De.headerActive]) : [],
                    i = this._isExpanded(),
                    l = this._appBarScrollEnabled && !o
                  return g.createElement(
                    ee.a,
                    {
                      enabled: !0,
                      handlers:
                        ((e = {}),
                        v()(e, J.e.goLists, te.a),
                        v()(e, J.e.toggleDMDrawer, this._handleToggleVisibilityKeyboard),
                        e),
                    },
                    g.createElement(
                      re.a,
                      {
                        ref: this._headerBar,
                        style: [De.headerRoot, !i && De.headerBorderClosed].concat(c, [De.cursor]),
                      },
                      g.createElement(ce.a, {
                        leftControl: n && this._isExpanded() ? this._renderLeftControl() : null,
                        onMiddleControlClick: this._handleToggleVisibility,
                        rightControl: this._renderRightControl(),
                        style: this._appBarScrollEnabled ? De.roundedAppBarCorners : null,
                        subtitle: r,
                        title: this._renderTitle(),
                        withBackground: l,
                        withBottomBorder: !0,
                      }),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(g.Component)
      v()(je, 'contextType', le.a)
      var De = ie.a.create(function (e) {
          return {
            root: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.navigationBackground,
              borderColor: e.colors.borderColor,
              borderWidth: e.borderWidths.small,
              marginRight: e.spaces.space20,
              width: E.a.columnWidths.secondary.normal,
            },
            cursor: { cursor: 'pointer' },
            expanded: { height: E.a.columnWidths.secondary.normal },
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
        Te = K(je),
        ke = (r('JtPf'), r('87if'), r('zb92')),
        Me = Object(ke.a)({
          loader: function () {
            return r.e(218).then(r.bind(null, 'Rk1B'))
          },
        }),
        He = r('aWzz'),
        Le = r('XnpN'),
        Ae = r('GSsg'),
        Be = r('aITJ'),
        Fe = r('yrzJ')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var Ue = (function (e) {
        p()(r, e)
        var t = Ne(r)
        function r(e, n) {
          var a
          return (
            c()(this, r),
            (a = t.call(this, e, n)),
            v()(
              u()(a),
              '_appBarScrollEnabled',
              a.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
            ),
            v()(u()(a), '_composer', g.createRef()),
            v()(u()(a), '_renderConversation', function (e, t) {
              var r = a.props,
                n = r.conversationId,
                o = r.history,
                c = r.location
              return g.createElement(z.a, {
                conversationId: n,
                drawerHeader: a._appBarScrollEnabled ? a._renderHeader() : void 0,
                history: o,
                isWide: !1,
                location: c,
                richTextInputContext: e,
                typeaheadWrapper: t,
              })
            }),
            v()(u()(a), '_isExpanded', function () {
              return a.props.visibility === X.a.EXPANDED
            }),
            v()(u()(a), '_fetchUpdatesIfNeeded', function () {
              var e = a.props,
                t = e.conversationId,
                r = e.createLocalApiErrorHandler
              ;(0, e.fetchUpdatesIfNeeded)(
                e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
              ).catch(r())
            }),
            Object(W.a)(),
            a
          )
        }
        return (
          l()(r, [
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
                return g.createElement(
                  g.Fragment,
                  null,
                  t && this._appBarScrollEnabled ? null : this._renderHeader(),
                  t
                    ? Be.b.isDesktopOS()
                      ? g.createElement(Me, null, function (t) {
                          var r = t.richTextInputContext,
                            n = t.typeaheadWrapper
                          return e._renderConversation(r, n)
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
                  r = e.history,
                  n = e.inboxUnreadCount,
                  a = e.isHeaderHighlighted,
                  o = e.isUnread,
                  c = e.onDrawerOpen,
                  i = e.perspective,
                  l = e.triggerHeaderHighlight,
                  s = a ? 'white' : 'normal',
                  u = a ? 'white' : 'gray700',
                  d =
                    t &&
                    t.type === Q.a.ONE_TO_ONE &&
                    i &&
                    Object(Le.a)(t, i).map(function (e) {
                      return e.user.screen_name
                    }),
                  p = d ? g.createElement(Fe.a, { color: u, screenName: d[0] }) : void 0
                return g.createElement(
                  re.a,
                  { style: this._appBarScrollEnabled ? [Ve.headerRoot, Ve.appBarZIndex] : Ve.appBarZIndex },
                  g.createElement(Te, {
                    conversationSubtitle: p,
                    conversationTitle: g.createElement(Y.b, {
                      conversation: t,
                      perspective: i,
                      textColor: s,
                      withScreenName: !1,
                    }),
                    hasNewMessages: o,
                    history: r,
                    inboxUnreadCount: n,
                    isHighlighted: a,
                    onDrawerOpen: c,
                    triggerHighlight: l,
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
          r
        )
      })(g.Component)
      v()(Ue, 'contextType', le.a), v()(Ue, 'childContextTypes', { getCustomLocation: He.func })
      var Ve = ie.a.create(function (e) {
          return {
            appBarZIndex: { zIndex: e.componentZIndices.appBarZIndex },
            headerRoot: { position: 'sticky', top: 0 },
          }
        }),
        Ge = q(Ue),
        qe = (r('i4UL'), r('tQbP'), r('M+/F'), r('ho0z'), r('hCOa'), r('jQ/y'), r('aLgo'), r('4q8G')),
        Qe = r('tn7R')
      function We(e, t) {
        var r
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return ze(e, t)
              var r = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === r && e.constructor && (r = e.constructor.name)
              if ('Map' === r || 'Set' === r) return Array.from(e)
              if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ze(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            r && (e = r)
            var n = 0,
              a = function () {}
            return {
              s: a,
              n: function () {
                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }
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
          c = !0,
          i = !1
        return {
          s: function () {
            r = e[Symbol.iterator]()
          },
          n: function () {
            var e = r.next()
            return (c = e.done), e
          },
          e: function (e) {
            ;(i = !0), (o = e)
          },
          f: function () {
            try {
              c || null == r.return || r.return()
            } finally {
              if (i) throw o
            }
          },
        }
      }
      function ze(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      var Ye = Object(S.a)()
          .propsFromState(function () {
            return {
              conversations: _.selectConversations,
              settings: H.g,
              unreadCount: k.a,
              untrustedConversationCount: _.selectUntrustedConversationCount,
              untrustedUnreadCount: _.selectUntrustedUnreadCount,
              visibility: _.selectDrawerVisibility,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              r = e.conversations,
              n = e.settings,
              a = e.unreadCount,
              o = e.untrustedConversationCount,
              c = e.untrustedUnreadCount,
              i = e.visibility,
              l = [],
              s = We(Object(Qe.a)(r))
            try {
              for (s.s(); !(t = s.n()).done; ) {
                var u,
                  d = t.value
                !d.isDeleted && null !== (u = d.data) && void 0 !== u && u.trusted && l.push(d.data)
              }
            } catch (f) {
              s.e(f)
            } finally {
              s.f()
            }
            l.sort(qe.a)
            var p = a > 0
            return {
              allowUntrustedInbox: 'all' === n.allow_dms_from || o > 0,
              conversationIds: l.map(function (e) {
                return e.conversation_id
              }),
              isUnread: p,
              untrustedUnreadCount: c,
              visibility: i,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: _.fetchInbox,
              fetchInboxHistory: _.fetchTrustedInboxHistory,
              fetchInboxIfNeeded: _.fetchInboxIfNeeded,
              fetchUpdates: _.fetchUpdatesIfNeeded,
              updateLastSeenEventId: _.updateTrustedLastSeenEventId,
              popOutConversation: _.popOutConversation,
            }
          })
          .withAnalytics({ page: 'messages', section: 'inbox_drawer' }),
        Ke = r('cFyg'),
        Xe = r('pXKu'),
        $e = r('nySH'),
        Ze = r('yw4N'),
        Je = r('FIs5'),
        et = r('csss')
      function tt(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function rt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? tt(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : tt(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function nt(e) {
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var at = 'dmDrawerInbox',
        ot = Z.a.a2f8105f,
        ct = Z.a.b8aa3744,
        it = Z.a.j06309e1,
        lt = Z.a.gee5150a,
        st = Z.a.cf2d1047,
        ut = Z.a.da2f9224,
        dt = Z.a.h6beb5fa,
        pt = (function (e) {
          p()(r, e)
          var t = nt(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(
                u()(e),
                '_appBarScrollEnabled',
                e.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
              ),
              v()(u()(e), '_renderHeader', function () {
                var t = e.props,
                  r = t.history,
                  n = t.isHeaderHighlighted,
                  a = t.isUnread,
                  o = t.onDrawerOpen,
                  c = t.triggerHeaderHighlight
                return g.createElement(
                  re.a,
                  { style: e._appBarScrollEnabled ? [ft.headerRoot, ft.appBarZIndex] : ft.appBarZIndex },
                  g.createElement(Te, {
                    hasNewMessages: a,
                    history: r,
                    isHighlighted: n,
                    onDrawerOpen: o,
                    triggerHighlight: c,
                  }),
                )
              }),
              v()(u()(e), '_renderExpandedInbox', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.conversationIds,
                  a = t.fetchInboxHistory,
                  o = t.updateLastSeenEventId
                return g.createElement(
                  re.a,
                  { style: ft.fill },
                  g.createElement(
                    re.a,
                    { style: [ft.viewportView, e._appBarScrollEnabled && Ke.b.drawerHeaderRadius] },
                    g.createElement(
                      Ze.a,
                      { style: [ft.viewportView, e._appBarScrollEnabled && Ke.b.drawerHeaderRadius] },
                      e._appBarScrollEnabled && e._renderHeader(),
                      g.createElement(Xe.a, {
                        accessibilityTitle: ot,
                        analytics: r,
                        conversationIds: n,
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
              v()(u()(e), '_renderEmptyDMInbox', function () {
                return g.createElement(
                  g.Fragment,
                  null,
                  e._renderPivot(),
                  g.createElement(Je.a, {
                    buttonLink: '/messages/compose',
                    buttonText: lt,
                    header: ct,
                    message: it,
                    onImpression: e._handleEmptyDMInboxImpression,
                  }),
                )
              }),
              v()(u()(e), '_isExpanded', function () {
                return e.props.visibility === X.a.EXPANDED
              }),
              v()(u()(e), '_dmDrawerOnClick', function (t, r) {
                ;(0, e.props.popOutConversation)(r), t.preventDefault()
              }),
              v()(u()(e), '_handleEmptyDMInboxImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              v()(u()(e), '_handleRequestsPivotClick', function () {
                e.props.analytics.scribe({ element: 'requests_pivot', action: 'click' })
              }),
              v()(u()(e), '_renderPivot', function () {
                return e.props.allowUntrustedInbox
                  ? g.createElement(
                      re.a,
                      { style: ft.requestPivotContainer },
                      g.createElement(et.a, {
                        label: st,
                        link: Object($e.a)(X.c.SECONDARY),
                        onPress: e._handleRequestsPivotClick,
                        renderRightContent: e._renderPivotBadge,
                      }),
                    )
                  : null
              }),
              v()(u()(e), '_renderPivotBadge', function () {
                var t = e.props.untrustedUnreadCount
                return t > 0
                  ? g.createElement(ae.a, {
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
            l()(r, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._isExpanded() && Object(W.a)()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this._isExpanded()
                  return g.createElement(
                    g.Fragment,
                    null,
                    e && this._appBarScrollEnabled ? null : this._renderHeader(),
                    e && this._renderExpandedInbox(),
                  )
                },
              },
            ]),
            r
          )
        })(g.Component)
      v()(pt, 'contextType', le.a)
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
            viewportView: rt(rt({}, ie.a.absoluteFillObject), {}, { overflowY: 'auto' }),
          }
        }),
        ht = Ye(pt),
        bt = r('YeIG'),
        mt = r('A69o'),
        yt = 'DMDrawer',
        vt = r('TnY3'),
        gt = r('0FVZ'),
        Et = r('Oe3h'),
        _t = r('nBUg')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return h()(this, r)
        }
      }
      var St = { isGlobal: !0, isSticky: !0 },
        It = { isGlobal: !0, isSticky: !1 },
        wt = (function (e) {
          p()(r, e)
          var t = Ot(r)
          function r() {
            var e
            c()(this, r)
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), 'state', { isHeaderHighlighted: !1, hasStartedInitialFetch: !1, unexpandedHeight: void 0 }),
              v()(u()(e), '_handleLayout', function (t) {
                var r = t.nativeEvent.layout.height,
                  n = e.state.unexpandedHeight
                e._isExpanded() || void 0 !== n || e.setState({ unexpandedHeight: r })
              }),
              v()(u()(e), '_showDMDrawer', function () {
                var t = e.props,
                  r = t.conversations,
                  n = t.visibility === X.a.CLOSED
                return !e._isHideDMDrawerPath() && !Object(bt.a)(r) && !n
              }),
              v()(u()(e), '_isExpanded', function () {
                return e.props.visibility === X.a.EXPANDED
              }),
              v()(u()(e), '_triggerHeaderHighlight', function () {
                var t = e.state.isHeaderHighlighted
                e._isExpanded() ||
                  t ||
                  e._headerHighlightTimeoutId ||
                  (e.setState({ isHeaderHighlighted: !0 }),
                  (e._headerHighlightTimeoutId = setTimeout(function () {
                    e.setState({ isHeaderHighlighted: !1 }), (e._headerHighlightTimeoutId = void 0)
                  }, 3e3)))
              }),
              v()(u()(e), '_handleDrawerOpen', function () {
                e.state.isHeaderHighlighted &&
                  (e.setState({ isHeaderHighlighted: !1 }),
                  clearTimeout(e._headerHighlightTimeoutId),
                  (e._headerHighlightTimeoutId = void 0))
              }),
              v()(u()(e), '_isOnOcfFlow', function () {
                return e.props.location.pathname.startsWith('/i/flow')
              }),
              v()(u()(e), '_isOnBirdwatchPage', function () {
                return e.props.location.pathname.startsWith('/i/birdwatch')
              }),
              v()(u()(e), '_isHideDMDrawerPath', function () {
                return e._isOnOcfFlow() || e._isOnBirdwatchPage()
              }),
              e
            )
          }
          return (
            l()(r, [
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
                    r = t.history,
                    n = t.location,
                    o = t.perspective,
                    c = t.poppedOutConversationId,
                    i = t.width,
                    l = this.state,
                    s = l.isHeaderHighlighted,
                    u = l.unexpandedHeight,
                    d = this._isExpanded()
                  return this._showDMDrawer()
                    ? g.createElement(
                        gt.a.Drawer,
                        null,
                        g.createElement(Et.a, { id: 'DMDrawer' }, function (t, l) {
                          return g.createElement(
                            C.a.Provider,
                            { value: { isDrawer: !0 } },
                            g.createElement(
                              _t.b.Provider,
                              {
                                value: {
                                  isDMDrawer: function () {
                                    return !0
                                  },
                                },
                              },
                              g.createElement(
                                re.a,
                                a()({ ref: t() }, l({ style: [Ke.b.root, { width: i }], testID: yt })),
                                g.createElement(
                                  re.a,
                                  {
                                    onLayout: u ? void 0 : e._handleLayout,
                                    style: [Ke.b.expandable, { height: u, maxHeight: u }, d && Ke.b.expanded],
                                  },
                                  c
                                    ? g.createElement(
                                        mt.a.Provider,
                                        { value: It },
                                        g.createElement(Ge, {
                                          conversationId: c,
                                          history: r,
                                          isHeaderHighlighted: s,
                                          location: n,
                                          onDrawerOpen: e._handleDrawerOpen,
                                          perspective: o,
                                          triggerHeaderHighlight: e._triggerHeaderHighlight,
                                        }),
                                      )
                                    : g.createElement(
                                        mt.a.Provider,
                                        { value: St },
                                        g.createElement(ht, {
                                          history: r,
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
                    r = e.fetchInboxIfNeeded,
                    n = e.loadDrawerVisibilityFromPersistence,
                    a = this.state.hasStartedInitialFetch
                  this._isHideDMDrawerPath() ||
                    a ||
                    (n(), r().catch(t()), this.setState({ hasStartedInitialFetch: !0 }))
                },
              },
            ]),
            r
          )
        })(g.PureComponent)
      v()(wt, 'defaultProps', { width: E.a.dmDrawerWidth.max })
      var Ct = w(wt)
      t.default = Object(vt.a)(Ct)
    },
    nySH: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return f
      }),
        r.d(t, 'b', function () {
          return h
        }),
        r.d(t, 'c', function () {
          return b
        })
      r('uFXj')
      var n = r('ERkP'),
        a = r('HPNB'),
        o = r('v6aA'),
        c = r('jYSG'),
        i = r('AQ79'),
        l = r('+Bsv'),
        s = r('MWbm'),
        u = r('cHvH'),
        d = r('t62R'),
        p = r('rHpw'),
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
          return n.createElement(o.a.Consumer, null, function (r) {
            var a = r.featureSwitches.isTrue('responsive_web_settings_revamp_enabled') ? e : '/settings/safety'
            return n.createElement(l.a, { pullRight: t, to: a })
          })
        },
        b = function (e) {
          return n.createElement(u.a, null, function (t) {
            var r = t.windowWidth,
              o = a.a.isTwoColumnLayout(r),
              i = 0 === e.length
            return o || i
              ? null
              : n.createElement(
                  s.a,
                  { style: m.stickyCopyContainer },
                  n.createElement(d.b, { style: m.stickyCopy }, c.a),
                )
          })
        },
        m = p.a.create(function (e) {
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
    pXKu: function (e, t, r) {
      'use strict'
      r('OZaJ')
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        c = r.n(o),
        i = r('1Pcy'),
        l = r.n(i),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('N+ot'),
        p = r.n(d),
        f = r('AuHH'),
        h = r.n(f),
        b = r('KEM+'),
        m = r.n(b),
        y = (r('tVqn'), r('vrRf'), r('+KXO'), r('ho0z'), r('5BYb'), r('ERkP')),
        v = r('BUB3'),
        g = r('v6aA'),
        E = r('xZGM'),
        _ = r('rxPX'),
        O = Object(_.a)()
          .propsFromState(function () {
            return {
              shouldShowPrompt: function (e, t) {
                return Object(E.y)(e, E.j)
              },
            }
          })
          .propsFromActions(function () {
            return { addFlag: E.v }
          })
          .withAnalytics({ component: 'dm_education_flags_prompt' }),
        S = r('fs1G'),
        I = r('t62R'),
        w = r('feu+'),
        C = r('3XMw'),
        x = r.n(C),
        R = x.a.fd6150fc,
        P = y.createElement(
          x.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          y.createElement(I.b, { link: '/privacy' }, x.a.d42d239f),
        ),
        j = x.a.j24c37b2,
        D = O(function (e) {
          var t = e.addFlag,
            r = e.analytics,
            n = e.shouldShowPrompt,
            a = y.useContext(g.a).featureSwitches
          if (!(n && a.isTrue('dm_education_flags_prompt'))) return !1
          return (
            r.scribeAction('impression'),
            y.createElement(w.a, {
              actionLabel: j,
              headline: R,
              onAction: function () {
                r.scribeAction('click'), t(E.j)
              },
              onClose: S.a,
              subtext: P,
              withCloseButton: !1,
            })
          )
        }),
        T = r('MMRb'),
        k = r('kGix'),
        M = r('0KEI'),
        H = Object(_.a)()
          .propsFromState(function () {
            return {
              hasConversations: T.selectHasConversations,
              fetchStatus: T.selectFetchStatus,
              isLoadingTop: T.selectIsLoadingTop,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              r = e.hasConversations,
              n = e.isLoadingTop
            return { fetchStatus: r ? k.a.LOADED : t, isRefreshing: r && n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: T.fetchInbox,
              fetchInboxIfNeeded: T.fetchInboxIfNeeded,
              fetchUpdates: T.fetchUpdatesIfNeeded,
            }
          }),
        L = (r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('ddV6')),
        A = r.n(L),
        B =
          (r('2G9S'),
          r('z84I'),
          r('tQbP'),
          r('LW0h'),
          r('jQ3i'),
          r('x4t0'),
          r('6U7i'),
          r('MvUL'),
          r('KqXw'),
          r('hBvt'),
          r('7x/C'),
          r('lTEL'),
          r('kYxP'),
          r('EbOo')),
        F = r('tZH3'),
        N = r('1YZw'),
        U = r('hqKg'),
        V = r('AQOc'),
        G = r('G6rE'),
        q = r('oEGd'),
        Q = function (e, t) {
          return t.conversationId
        },
        W = Object(U.createSelector)(
          Q,
          function (e, t) {
            return T.selectConversation(e, Q(0, t))
          },
          T.selectEntries,
          G.e.selectAll,
          function (e, t) {
            return !T.selectConversationIsRead(e, Q(0, t))
          },
          function (e, t) {
            var r = Q(0, t)
            return Object(T.selectInboxTypeByConversation)(e, r)
          },
          function (e, t, r, n, a, o) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(V.a)(t.data, r, n),
              conversationId: e,
              unread: a,
              inboxType: o,
            }
          },
        ),
        z = {
          addRecentSearch: T.addRecentSearches,
          addToast: N.b,
          block: G.e.block,
          createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          leaveConversation: T.leaveConversation,
          muteDMUser: T.muteDMUser,
          unmuteDMUser: T.unmuteDMUser,
          unblock: G.e.unblock,
        },
        Y = Object(q.g)(W, z),
        K = r('aA19'),
        X = r('OhSZ'),
        $ = r('g54k')
      function Z(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      var J = function (e, t) {
          return t.entry
        },
        ee = Object(_.a)()
          .propsFromState(function () {
            return { users: Object(U.createSelector)(G.e.selectAll, J, $.b) }
          })
          .adjustStateProps(function (e) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Z(Object(r), !0).forEach(function (t) {
                      m()(e, t, r[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                  : Z(Object(r)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
              }
              return e
            })({}, e.users)
          }),
        te = r('zQEV'),
        re = ee(function (e) {
          var t = e.entry,
            r = e.entryType,
            n = e.perspective,
            a = e.users,
            o = Object(te.a)(t, r, n, a)
          return y.createElement(I.b, { color: 'gray700' }, o)
        }),
        ne = Object(U.createSelector)(
          function (e, t) {
            return G.e.select(e, t.senderId)
          },
          function (e, t) {
            return t.recipientId ? G.e.select(e, t.recipientId) : void 0
          },
          function (e, t) {
            return { user: e, recipient: t }
          },
        ),
        ae = Object(q.c)(ne),
        oe = r('X/yg'),
        ce = r('cTG8'),
        ie = function (e) {
          return y.createElement(x.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, y.createElement(I.b, null, e))
        },
        le = x.a.dedfd265
      var se = x.a.a876e58b,
        ue = x.a.bf584cd1,
        de = x.a.a9cc8cfd,
        pe = x.a.e20b65b0,
        fe = x.a.e5bfe07d,
        he = x.a.b1a614fe,
        be = ae(function (e) {
          var t = e.entry,
            r = e.perspective,
            n = e.isGroupDM,
            a = e.user,
            o = void 0 === a ? {} : a,
            c = e.recipient,
            i = void 0 === c ? {} : c,
            l = y.useContext(g.a).featureSwitches,
            s = t && t.message_data
          if (!s) return null
          var u = s.attachment,
            d = u && !!(u.video || u.photo || u.animated_gif || u.tweet || u.fleet || u.sticker || u.card),
            p = r === o.id_str,
            f = !(!d || !p) || !(!n || p),
            h = o.name,
            b = i.name,
            m = [
              f && y.createElement(I.b, { key: 'senderName' }, ie(h), ' '),
              s &&
                s.text &&
                y.createElement(ce.a, {
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
                ? (m = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, x.a.d5b762c8)
                          : y.createElement(x.a.I18NFormatMessage, { $i18n: 'dfd2b3b9' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : he)
                : u.fleet
                ? (m = (function (e, t, r) {
                    return e
                      ? y.createElement(
                          x.a.I18NFormatMessage,
                          { $i18n: 'i005f1fd' },
                          y.createElement(I.b, null, t),
                          y.createElement(I.b, null, r || ''),
                        )
                      : y.createElement(
                          x.a.I18NFormatMessage,
                          { $i18n: 'b35cee40' },
                          y.createElement(I.b, null, r || ''),
                        )
                  })(p, b, s.text))
                : u.video
                ? (m = Object(oe.k)(u, l)
                    ? f
                      ? (function (e, t) {
                          return e
                            ? y.createElement(I.b, null, x.a.h7033cac)
                            : y.createElement(
                                x.a.I18NFormatMessage,
                                { $i18n: 'be5a9616' },
                                y.createElement(I.b, null, t),
                              )
                        })(p, h)
                      : le
                    : f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, x.a.j7d81019)
                          : y.createElement(x.a.I18NFormatMessage, { $i18n: 'eee2f120' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : se)
                : u.photo
                ? (m = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, x.a.f80629ba)
                          : y.createElement(x.a.I18NFormatMessage, { $i18n: 'c1e1f848' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : ue)
                : u.animated_gif
                ? (m = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, x.a.eb3d722e)
                          : y.createElement(x.a.I18NFormatMessage, { $i18n: 'dc4b75a1' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : de)
                : u.sticker
                ? (m = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, x.a.d30c2d4f)
                          : y.createElement(x.a.I18NFormatMessage, { $i18n: 'c7e2464e' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : pe)
                : u.card &&
                  (m = f
                    ? (function (e, t) {
                        return e
                          ? y.createElement(I.b, null, x.a.db53c017)
                          : y.createElement(x.a.I18NFormatMessage, { $i18n: 'hcbbbb34' }, y.createElement(I.b, null, t))
                      })(p, h)
                    : fe)),
            y.createElement(I.b, { color: 'gray700', numberOfLines: 1 }, m)
          )
        }),
        me = r('uKEd'),
        ye = function (e, t) {
          return t.senderId ? G.e.select(e, t.senderId) : void 0
        },
        ve = function (e, t) {
          return Object(me.n)(e, t.reactionEntry.message_id)
        },
        ge = function (e, t) {
          var r = ve(e, t)
          return r && r.message_data && G.e.select(e, r.message_data.sender_id)
        },
        Ee = Object(q.e)(function () {
          return Object(U.createSelector)(ye, ve, ge, function (e, t, r) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: r }
          })
        }, {}),
        _e = r('33Kz'),
        Oe = Ee(function (e) {
          var t,
            r = e.isGroupDM,
            n = e.messageUser,
            a = e.perspective,
            o = e.reactedMessageEntry,
            c = e.reactingUser,
            i = e.reactionEntry,
            l = y.useContext(g.a).featureSwitches,
            s = o && o.message_data,
            u = s && s.attachment,
            d = s && s.text,
            p = n && n.screen_name,
            f = a === (c && c.id_str),
            h = c && c.name,
            b = Object(_e.b)(i.reaction_key || '', l)
          return (
            (t =
              u && u.tweet
                ? r
                  ? (function (e, t, r, n) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'c4202784' },
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'b493a890' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, p, b)
                  : (function (e, t, r) {
                      return e
                        ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'ca684bf5' }, y.createElement(I.b, null, r))
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'h5797be5' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, b)
                : u && u.video
                ? r
                  ? (function (e, t, r, n) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'd1f8bdd9' },
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'd764af97' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, p, b)
                  : (function (e, t, r) {
                      return e
                        ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'ab1cdfe2' }, y.createElement(I.b, null, r))
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'f0cf1699' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, b)
                : u && u.photo
                ? r
                  ? (function (e, t, r, n) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'hec0fd4d' },
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'j55320de' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, p, b)
                  : (function (e, t, r) {
                      return e
                        ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'jf27606a' }, y.createElement(I.b, null, r))
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'cd110359' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, b)
                : u && u.animated_gif
                ? r
                  ? (function (e, t, r, n) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'e70dcc35' },
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'g1bf440b' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, p, b)
                  : (function (e, t, r) {
                      return e
                        ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'b2da1bf8' }, y.createElement(I.b, null, r))
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'g84c0421' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, b)
                : u && u.card
                ? r
                  ? (function (e, t, r, n) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'cd2e7c18' },
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'aee9e7fa' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, p, b)
                  : (function (e, t, r) {
                      return e
                        ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'f9fb1cf6' }, y.createElement(I.b, null, r))
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'f2bf910e' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, b)
                : d
                ? r
                  ? (function (e, t, r, n, a) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, a),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'd6998baa' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, a),
                          )
                    })(f, h, b, p, d)
                  : (function (e, t, r, n) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'cec676f3' },
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'a2706f9a' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, b, d)
                : (function (e, t, r) {
                    return e
                      ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, y.createElement(I.b, null, r))
                      : y.createElement(
                          x.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          y.createElement(I.b, null, t),
                          y.createElement(I.b, null, r),
                        )
                  })(f, h, b)),
            y.createElement(I.b, { color: 'gray700', numberOfLines: 1 }, t)
          )
        }),
        Se = r('H4nC'),
        Ie = r('b9JY'),
        we = x.a.fb3ccb55,
        Ce = function (e) {
          var t = e.conversationType,
            r = e.entry,
            n = e.perspective
          if (r.marked_as_spam) return y.createElement(I.b, { color: 'gray700', numberOfLines: 1 }, we)
          if (Object(Ie.b)(r)) {
            var a = r.message_data,
              o = (a = void 0 === a ? {} : a).recipient_id,
              c = a.sender_id
            return y.createElement(be, {
              entry: r,
              isGroupDM: t === T.CONVERSATION_TYPE.GROUP,
              perspective: n,
              recipientId: o,
              senderId: c,
            })
          }
          return Object(Ie.c)(r)
            ? y.createElement(Oe, {
                isGroupDM: t === T.CONVERSATION_TYPE.GROUP,
                perspective: n,
                reactionEntry: r,
                senderId: r.sender_id,
              })
            : Object(Ie.a)(r)
            ? y.createElement(re, { entry: r, entryType: r.type, perspective: n })
            : Object(Ie.d)(r)
            ? y.createElement(Se.a, { entry: r, isCompact: !0 })
            : null
        },
        xe = r('Myq3'),
        Re = r('3wZR'),
        Pe = r('XnpN'),
        je = r('AQ79'),
        De = 'conversation',
        Te = r('u0B7'),
        ke = r('MWbm'),
        Me = r('Irs7'),
        He = r('Znyr'),
        Le = r('0PHd'),
        Ae = r('yrzJ'),
        Be = r('Xrkv'),
        Fe = r('lHOd'),
        Ne = r('efqG'),
        Ue = r('/yvb'),
        Ve = r('GBcw'),
        Ge = r('htQn'),
        qe = r('5mJL'),
        Qe = r('rHpw'),
        We = r('vMjK'),
        ze = r('pHkl'),
        Ye = r('aWyx'),
        Ke = r('5oT/'),
        Xe = r('Lsrn'),
        $e = r('k/Ka')
      function Ze(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ze(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ze(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var et = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object($e.a)(
          'svg',
          Je(
            Je({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Xe.a.root, e.style], viewBox: '0 0 24 24' },
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
      et.metadata = { width: 24, height: 24 }
      var tt = et
      function rt(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? rt(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : rt(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function at(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var ot = x.a.d88d0790,
        ct = { component: 'low_quality_timeline' },
        it = function (e) {
          var t = e.children
          return y.createElement(ke.a, { style: st.socialProofContainer }, t)
        },
        lt = (function (e) {
          u()(r, e)
          var t = at(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), 'state', { showConfirmation: !1 }),
              m()(l()(e), '_renderConversationEndCell', function () {
                var t = e.props,
                  r = t.inboxType,
                  n = t.searchQuery,
                  a = t.unread,
                  o =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  c = e.context.featureSwitches.isTrue('responsive_web_dm_server_side_search') && n,
                  i = a
                    ? y.createElement(He.a, {
                        pip: !0,
                        style: st.unreadMessagePip,
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: function () {
                          return ''
                        },
                      })
                    : null
                switch (r) {
                  case je.c.PRIMARY:
                    return o ? i : c ? null : e._renderTimestamp()
                  case je.c.SECONDARY:
                  case je.c.TERTIARY:
                    return e._renderX()
                  default:
                    return null
                }
              }),
              m()(l()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var r = Object(Re.b)(t.icon)
                return y.createElement(
                  I.b,
                  { color: 'gray700', size: 'subtext2' },
                  r ? y.createElement(r, { style: st.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              m()(l()(e), '_renderSocialProof', function (e, t) {
                var r = e.social_proof
                if (!r || 0 === r.length) return null
                var n = r[0]
                switch (n.proof_type) {
                  case Ye.d.MUTUAL_FRIENDS:
                    if (0 === n.total) return null
                    var a = n.users.map(function (e) {
                        return e.profile_image_url_https
                      }),
                      o = n.users.map(function (e) {
                        return e.name
                      }),
                      c = t ? { marginLeft: 0 } : null
                    return y.createElement(
                      it,
                      null,
                      y.createElement(Le.a, {
                        displayFacepileInline: !0,
                        knownFollowersAvatarUrls: a,
                        knownFollowersCount: n.total,
                        knownFollowersNames: o,
                        textStyle: c,
                        withFacepile: !t,
                      }),
                    )
                  default:
                    return null
                }
              }),
              m()(l()(e), '_renderSearchConversationPreview', function () {
                var t = e.props,
                  r = t.conversation,
                  n = t.perspective,
                  a = t.searchQuery,
                  o = r ? Object(Pe.a)(r, n) : [],
                  c = [],
                  i = function (e, t) {
                    return e.localeCompare(t)
                  },
                  l = o
                    .map(function (e) {
                      return e.user
                    })
                    .filter(function (e) {
                      var t,
                        r = null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase().includes(a)
                      return e.id_str !== n && (r && c.push(e.name), !r)
                    })
                    .map(function (e) {
                      return e.name
                    })
                    .sort(i),
                  s = c.sort(i).concat(l)
                if (r) {
                  if (r.type === T.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var u = o.map(function (e) {
                        return e.user
                      }),
                      d = A()(u, 1)[0]
                    return y.createElement(Ae.a, { color: 'gray700', screenName: d.screen_name })
                  }
                  var p = Object(Be.a)(s, !0)
                  return y.createElement(I.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              m()(l()(e), '_renderX', function () {
                var t = e.props,
                  r = t.conversation,
                  n = t.conversationId,
                  a = e.context.loggedInUserId,
                  o = Object(oe.i)(r, a),
                  c = (null == r ? void 0 : r.type) === T.CONVERSATION_TYPE.GROUP
                return y.createElement(Fe.a.Consumer, null, function (t) {
                  return y.createElement(
                    Ne.a,
                    {
                      renderContent: function (r, a) {
                        return y.createElement(F.a, {
                          dismiss: r,
                          flatBorders: 'sheet' === a,
                          isGroup: c,
                          onBlockClick: e._blockUser(o.idStr),
                          onDeleteClick: e._deleteConversation(n),
                          onReportClick: e._handleReportMenuItemClick(t),
                          requestorScreenName: o.screenName,
                          showBlock: !c,
                          showCancel: 'sheet' === a,
                          showDelete: !0,
                        })
                      },
                    },
                    y.createElement(Ue.a, {
                      accessibilityLabel: ot,
                      icon: y.createElement(Ke.a, null),
                      onPress: e._handleXPress,
                      style: st.xButton,
                      type: 'destructiveText',
                    }),
                  )
                })
              }),
              m()(l()(e), '_handleXPress', function (e) {
                e.preventDefault()
              }),
              m()(l()(e), '_handleReportMenuItemClick', function (t) {
                return function () {
                  var r = e.props,
                    n = r.analytics,
                    a = r.conversationId,
                    o = r.inboxType
                  if (a) {
                    n.scribeAction('report')
                    var c = Object(oe.f)(a, window.location.pathname, n.contextualScribeNamespace, o)
                    t.push(c)
                  }
                }
              }),
              m()(l()(e), '_renderTimestamp', function () {
                var t = e.props.conversation,
                  r =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  n = [r ? st.inlineNotificationsDisabledIcon : st.notificationsDisabledIcon]
                return y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(
                    ke.a,
                    { style: r && st.inlineTimestamp },
                    t ? y.createElement(Ve.a, { timestamp: Number(t.sort_timestamp) }) : null,
                    null != t && t.notifications_disabled ? y.createElement(tt, { style: n }) : null,
                  ),
                )
              }),
              m()(l()(e), '_deleteConversation', function (t) {
                return function () {
                  var r = e.props,
                    n = r.analytics,
                    a = r.conversation,
                    o = r.createLocalApiErrorHandler,
                    c = r.inboxType,
                    i = r.leaveConversation,
                    l = r.position,
                    s = e.context.history,
                    u = null != a && a.participants ? Object.keys(a.participants).length : 0,
                    d = a && a.type === T.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    p = {
                      conversation_type: (null == a ? void 0 : a.type) === T.CONVERSATION_TYPE.GROUP ? 1 : 0,
                      conversation_id: t,
                      conversation_participant_count: u,
                      position: l,
                      inbox_type: Object(oe.h)(c),
                      entry_point: ze.b.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    n.scribe({ element: 'thread', action: d, data: p }),
                    i({ conversationId: t }).catch(o({ showToast: !0 })),
                    s.replace(Object(oe.e)(c))
                }
              }),
              m()(l()(e), '_blockUser', function (t) {
                return function () {
                  var r = e.props,
                    n = r.addToast,
                    a = r.analytics,
                    o = r.block,
                    c = r.createLocalApiErrorHandler
                  o(t).then(function () {
                    n({ action: { label: We.c, onAction: e._createUnblockUserHandler(t) }, text: We.a })
                  }, c(B.a)),
                    a.scribeAction('block')
                }
              }),
              m()(l()(e), '_createUnblockUserHandler', function (t) {
                return function () {
                  var r = e.props,
                    n = r.analytics,
                    a = r.createLocalApiErrorHandler
                  ;(0, r.unblock)(t).catch(a(Te.a)), n.scribeAction('unblock')
                }
              }),
              m()(l()(e), '_handleHideConfirmation', function () {
                e.setState({ showConfirmation: !1 })
              }),
              m()(l()(e), '_handleOnClick', function (t) {
                var r = e.props,
                  n = r.addRecentSearch,
                  a = r.analytics,
                  o = r.conversation,
                  c = r.conversationId,
                  i = r.onClick,
                  l = r.position,
                  s = r.searchQuery,
                  u = e.context.featureSwitches.isTrue('responsive_web_dm_server_side_search'),
                  d = null != o && o.participants ? Object.keys(o.participants).length : 0,
                  p = (null == o ? void 0 : o.type) === T.CONVERSATION_TYPE.GROUP
                s &&
                  u &&
                  (a.scribe({
                    component: 'search',
                    element: 'conversation',
                    action: 'click',
                    data: {
                      conversation_id: c,
                      conversation_participant_count: d,
                      conversation_type: p ? ze.g.GROUP : ze.g.ONE_TO_ONE,
                      entry_point: ze.b.ALL,
                      inbox_type: ze.c.PRIMARY,
                      dm_search_result_type: ze.a.CONVERSATION,
                      message_type: ze.d.NOT_APPLICABLE,
                      position: l,
                    },
                  }),
                  a.scribe({ component: 'recent_search', action: 'add' }),
                  n(s)),
                  i(t, c, o, l)
              }),
              m()(l()(e), '_handleShowConfirmation', function (t) {
                var r = e.props.analytics
                t.stopPropagation(),
                  r.scribe(nt(nt({}, ct), {}, { element: 'accessory_trashcan', action: 'click' })),
                  e.setState({ showConfirmation: !0 })
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  var r = this.props.conversation,
                    n = null == r ? void 0 : r.conversation_id,
                    a = null == r ? void 0 : r.last_read_event_id,
                    o = null == r ? void 0 : r.sort_event_id,
                    c = null == r ? void 0 : r.max_entry_id,
                    i = null == r ? void 0 : r.convo_label,
                    l = e.conversation,
                    s = null == l ? void 0 : l.conversation_id,
                    u = null == l ? void 0 : l.last_read_event_id,
                    d = null == l ? void 0 : l.sort_event_id,
                    p = null == l ? void 0 : l.max_entry_id,
                    f = null == l ? void 0 : l.convo_label,
                    h = this.props,
                    b = h.filter,
                    m = h.isActive,
                    y = e.filter,
                    v = e.isActive,
                    g = this.state.showConfirmation,
                    E = t.showConfirmation
                  return n !== s || a !== u || o !== d || c !== p || m !== v || g !== E || b !== y || i !== f
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    r = e.filter,
                    n = e.isActive,
                    a = e.link,
                    o = e.perspective,
                    c = e.position,
                    i = e.searchQuery,
                    l = e.unread,
                    s = (null == t ? void 0 : t.entries) || [],
                    u = Object(xe.a)(s, function (e) {
                      return ![
                        Ye.b.MESSAGE_DELETE,
                        Ye.b.REACTION_DELETE,
                        Ye.b.MESSAGE_MARK_AS_SPAM,
                        Ye.b.MESSAGE_MARK_AS_NOT_SPAM,
                        Ye.b.CONVO_METADATA_UPDATE,
                      ].includes(e.type)
                    }),
                    d =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                    p = [st.root, l && !d && st.unread],
                    f = this.context.featureSwitches.isTrue('responsive_web_dm_server_side_search'),
                    h = t && r && r(t),
                    b = (null == t ? void 0 : t.type) === T.CONVERSATION_TYPE.GROUP,
                    m = d && b
                  if (!t || (!h && !f)) return null
                  var v = !!t.convo_label,
                    g = !t.trusted && !v,
                    E = d ? 'xxxLarge' : 'xxLarge',
                    _ = this._renderConversationEndCell()
                  return !t || (!h && !f) || (!i && t.isSearchResultOnly)
                    ? null
                    : y.createElement(
                        Ge.a,
                        {
                          accessibilityRole: 'tab',
                          accessibilityState: { selected: n },
                          link: {
                            pathname: null == a ? void 0 : a.pathname,
                            anchorless: !0,
                            state: nt(nt({}, null == a ? void 0 : a.state), {}, { position: c }),
                          },
                          onPress: this._handleOnClick,
                          style: p,
                          testID: De,
                        },
                        y.createElement(
                          qe.a,
                          {
                            avatarCell: y.createElement(K.a, {
                              conversation: t,
                              perspective: o,
                              withBadge: m,
                              withVDLRefresh: d,
                            }),
                            avatarSize: E,
                          },
                          y.createElement(
                            ke.a,
                            { style: st.bodyColumn },
                            y.createElement(
                              ke.a,
                              { style: st.titleContainer },
                              y.createElement(X.b, {
                                conversation: t,
                                isSearchTitle: !!i && f,
                                perspective: o,
                                renderTimestamp: this._renderTimestamp,
                                withScreenName: !i,
                                withVDLRefresh: d,
                              }),
                              y.createElement(
                                ke.a,
                                { style: st.snippet },
                                !u || (f && i)
                                  ? f && i
                                    ? this._renderSearchConversationPreview()
                                    : null
                                  : y.createElement(Ce, { conversationType: t.type, entry: u, perspective: o }),
                              ),
                              v ? this._renderConversationLabel(t) : null,
                              g ? this._renderSocialProof(t, d) : null,
                            ),
                            _ ? y.createElement(ke.a, { style: st.endCell }, _) : null,
                          ),
                        ),
                      )
                },
              },
            ]),
            r
          )
        })(y.Component)
      m()(lt, 'contextType', g.a),
        m()(lt, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var st = Qe.a.create(function (e) {
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
            notificationsDisabledIcon: { alignSelf: 'flex-end', color: e.colors.gray700, paddingTop: e.spaces.space4 },
            unreadMessagePip: { backgroundColor: e.colors.blue500, marginTop: '7px' },
            xButton: { alignSelf: 'center', marginRight: 'calc(-1 * '.concat(e.spaces.space4, ')') },
            xIcon: { color: e.colors.magenta500 },
            trashcanIcon: { color: e.colors.gray700 },
            snippet: { maxHeight: e.spaces.space40, overflow: 'hidden' },
            unread: { backgroundColor: e.colors.unreadCellBackground },
            socialProofContainer: { marginTop: e.spaces.space4 },
            convoLabelIcon: { marginRight: e.spaces.space4 },
            endCell: { marginLeft: e.spaces.space16 },
          }
        }),
        ut = Object(Me.a)(Y(lt), { page: 'messages', section: 'inbox' }),
        dt =
          (r('LJOr'),
          r('Qavd'),
          r('JtPf'),
          r('uFXj'),
          r('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        pt = function (e, t) {
          return t.module.selectItems(e).map(function (t) {
            return T.selectConversation(e, t)
          })
        },
        ft = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        ht = Object(_.a)()
          .propsFromState(function () {
            return { conversations: pt, fetchStatus: ft, sliceItems: dt }
          })
          .adjustStateProps(function (e) {
            var t = e.conversations,
              r = e.fetchStatus,
              n = e.sliceItems
            return {
              fetchStatus: r,
              groupConversationIds: t
                .filter(function (e) {
                  return (null == e ? void 0 : e.data) && e.data.type === Ye.a.GROUP
                })
                .map(function (e) {
                  var t
                  return null == e || null === (t = e.data) || void 0 === t ? void 0 : t.conversation_id
                }),
              oneToOneConversationIds: (function (e) {
                return e
                  .filter(function (e) {
                    return (null == e ? void 0 : e.data) && e.data.type === Ye.a.ONE_TO_ONE
                  })
                  .map(function (e) {
                    var t
                    return null == e || null === (t = e.data) || void 0 === t ? void 0 : t.conversation_id
                  })
              })(t),
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
        bt = x.a.b08821f3,
        mt = x.a.e047b8fa,
        yt = Qe.a.create(function (e) {
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
        vt = function (e) {
          var t = Object(Me.b)(),
            r = e.clearRecentSearches,
            n = e.headerText,
            a = e.icon,
            o = e.isInboxLabelHeader,
            c = e.withClearButton
          y.useEffect(
            function () {
              t.scribe({ component: 'recent_search', action: 'impression' })
            },
            [t],
          )
          var i,
            l = [yt.root, o && yt.labelHeader]
          return y.createElement(
            ke.a,
            { style: l },
            y.createElement(
              ke.a,
              { style: yt.iconContainer },
              (i = a) ? y.createElement(i, { style: yt.icon }) : null,
              y.createElement(I.b, { size: 'headline1', weight: 'heavy' }, n),
            ),
            c
              ? y.createElement(
                  Ue.a,
                  { accessibilityLabel: bt, onPress: r, style: yt.backButton, type: 'onMediaWhiteFilled' },
                  mt,
                )
              : null,
          )
        },
        gt = r('MDbM'),
        Et = r('v//M'),
        _t = r('0yYu'),
        Ot = r('lBmi'),
        St = r('6ZHn')
      function It(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var wt = x.a.g2fd3205,
        Ct = x.a.c94ac69d,
        xt = x.a.ffd9cfe6,
        Rt = (function (e) {
          u()(r, e)
          var t = It(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(
                l()(e),
                '_groupBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_groups_bucket_size'),
              ),
              m()(
                l()(e),
                '_peopleBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_people_bucket_size'),
              ),
              m()(l()(e), '_renderSearchResults', function () {
                var t = e.props,
                  r = t.groupConversationIds,
                  n = t.oneToOneConversationIds,
                  a = t.renderEmptyState,
                  o = t.sliceItems,
                  c = n.length && r.length,
                  i = e._groupBucketSize < r.length,
                  l = e._peopleBucketSize < n.length
                return o.length
                  ? y.createElement(
                      y.Fragment,
                      null,
                      n.length ? e._renderPeopleSection() : null,
                      c && !l ? y.createElement(_t.a, null) : null,
                      l ? e._renderDMSearchFooter('People') : null,
                      r.length ? e._renderGroupsSection() : null,
                      i ? e._renderDMSearchFooter('Groups') : null,
                    )
                  : a()
              }),
              m()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler
                ;(0, t.fetchSearchIfNeeded)().catch(r())
              }),
              m()(l()(e), '_renderDMSearchFooter', function (t) {
                var r = e.props.location
                return y.createElement(
                  ke.a,
                  { style: Pt.header },
                  y.createElement(I.b, { link: { pathname: r.pathname, state: { tab: t } } }, xt),
                )
              }),
              m()(l()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  r = e.icon
                return y.createElement(vt, { headerText: t, icon: r })
              }),
              m()(l()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  r = t.groupConversationIds,
                  n = t.query,
                  a = t.renderInboxItem,
                  o = t.sliceItems
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: Ot.a, headerText: Ct }),
                  r
                    .map(function (e) {
                      return e ? a(n, o)(e) : null
                    })
                    .slice(0, e._groupBucketSize),
                )
              }),
              m()(l()(e), '_renderPeopleSection', function () {
                var t = e.props,
                  r = t.oneToOneConversationIds,
                  n = t.query,
                  a = t.renderInboxItem,
                  o = t.sliceItems
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: St.a, headerText: wt }),
                  r
                    .map(function (e) {
                      return e ? a(n, o)(e) : null
                    })
                    .slice(0, e._peopleBucketSize),
                )
              }),
              e
            )
          }
          return (
            c()(r, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    r = t.fetchStatus,
                    n = t.module
                  e.module !== n && r !== gt.a.FAILED && this._handleFetch()
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
                    r = e.loadingLabel
                  return y.createElement(Et.a, {
                    accessibilityLabel: r,
                    fetchStatus: t,
                    onRequestRetry: this._handleFetch,
                    render: this._renderSearchResults,
                  })
                },
              },
            ]),
            r
          )
        })(y.Component)
      m()(Rt, 'contextType', g.a)
      var Pt = Qe.a.create(function (e) {
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
        jt = ht(Rt),
        Dt = r('wAC9'),
        Tt = (r('1IsZ'), r('IAdD'), r('xPna')),
        kt = function (e) {
          var t = {}
          return (
            e &&
              e.conversations &&
              Object.values(e.conversations).forEach(function (e) {
                e && e.users && Object.assign(t, e.users)
              }),
            Object(Tt.a)({ conversations: null == e ? void 0 : e.conversations, users: t })
          )
        }
      function Mt(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ht(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Mt(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Mt(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var Lt = function (e) {
          return Object(Dt.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(ze.e, '-').concat(e),
            getEndpointParams: function (t) {
              return Ht(Ht({}, t), {}, { query: e })
            },
            mapEntitiesToActions: kt,
          })
        },
        At = function (e, t) {
          return t.query
        },
        Bt = Object(_.a)().propsFromState(function () {
          return {
            sliceModule: Object(U.createSelector)(At, function (e) {
              return e ? Lt(e) : void 0
            }),
          }
        })(function (e) {
          var t = e.loadingLabel,
            r = e.location,
            n = e.query,
            a = e.renderEmptyState,
            o = e.renderInboxItem,
            c = e.sliceModule
          return c
            ? y.createElement(jt, {
                loadingLabel: t,
                location: r,
                module: c,
                query: n,
                renderEmptyState: a,
                renderInboxItem: o,
              })
            : a()
        }),
        Ft = T.selectRecentSearches,
        Nt = function (e, t) {
          return t.query ? T.selectSearchConversations(e, t.query) : []
        },
        Ut = function (e, t) {
          return t.query ? T.selectSearchFetchStatus(e, t.query) : k.a.LOADED
        },
        Vt = function (e, t) {
          return t.conversationIds || []
        },
        Gt = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        qt = Object(_.a)()
          .propsFromState(function () {
            return { conversationIds: Vt, recentSearches: Ft, searchFetchStatus: Ut, searchConversationIds: Nt }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              r = e.recentSearches,
              n = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: r,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: Gt(n, t),
            }
          })
          .propsFromActions(function () {
            return {
              addRecentSearch: T.addRecentSearches,
              createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SEARCH',
              ),
              search: T.searchConversations,
              clearRecentSearch: T.clearRecentSearch,
              clearRecentSearches: T.clearRecentSearches,
            }
          }),
        Qt = r('VY6S'),
        Wt = r('s14A'),
        zt = r('j7Bv'),
        Yt = r('VwDm'),
        Kt = r('hOZg')
      function Xt(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var $t = x.a.dbd5d40f,
        Zt = (function (e) {
          u()(r, e)
          var t = Xt(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.clearRecentSearch,
                    r = e.handleRecentSearchClick,
                    n = e.recentSearch,
                    a = y.createElement(zt.a, { Icon: Yt.a, color: 'neutral', size: 'xLarge', style: Jt.searchIcon }),
                    o = [Jt.listItemView, Jt.bottomBorder]
                  return y.createElement(
                    Ge.a,
                    { onPress: r, style: o },
                    y.createElement(
                      ke.a,
                      null,
                      y.createElement(
                        qe.a,
                        { avatarCell: a, avatarSize: 'xLarge', cellStyle: Jt.avatarColumn },
                        y.createElement(
                          ke.a,
                          { style: Jt.container },
                          y.createElement(I.b, { numberOfLines: 1 }, n),
                          y.createElement(Ue.a, {
                            accessibilityLabel: $t,
                            borderColor: 'transparent',
                            icon: y.createElement(Kt.a, null),
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
            r
          )
        })(y.PureComponent),
        Jt = Qe.a.create(function (e) {
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
        er = Zt
      function tr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function rr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? tr(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : tr(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var nr = function (e) {
        return Object(Dt.a)({
          contextSuffix: 'DM_GROUP_SEARCH_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.DirectMessagesGraphQL.fetchDMGroupSearch
          },
          sliceKey: ''.concat(ze.e, '-groups-').concat(e),
          getEndpointParams: function (t) {
            return rr(rr({}, t), {}, { query: e })
          },
          mapEntitiesToActions: kt,
        })
      }
      function ar(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function or(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ar(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ar(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var cr = function (e) {
          return Object(Dt.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(ze.e, '-people-').concat(e),
            getEndpointParams: function (t) {
              return or(or({}, t), {}, { query: e })
            },
            mapEntitiesToActions: kt,
          })
        },
        ir = function (e, t) {
          return t.query
        },
        lr = function (e, t) {
          return t.tabType
        },
        sr = Object(_.a)().propsFromState(function () {
          return {
            sliceModule: Object(U.createSelector)(lr, ir, function (e, t) {
              var r = t && e === ze.f.PEOPLE
              return t && e === ze.f.GROUPS ? nr(t) : r ? cr(t) : void 0
            }),
          }
        }),
        ur = r('FS1z'),
        dr = sr(function (e) {
          var t = e.footer,
            r = e.onScrollEnd,
            n = e.query,
            a = e.renderEmptyState,
            o = e.renderInboxItem,
            c = e.sliceModule
          return c
            ? y.createElement(ur.a, {
                footer: t,
                module: c,
                noItemsRenderer: a,
                onScrollEnd: r,
                renderer: o(n, []),
                withoutHeadroom: !0,
              })
            : a()
        }),
        pr = r('VPAj')
      function fr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function hr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fr(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : fr(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var br = hr(
          hr({}, r('7n04').a),
          {},
          { initialScrollHeadroom: Object(pr.a)(0), scrollHeadroom: Object(pr.a)(0), pinToNewestWhenAtNewest: !0 },
        ),
        mr = r('TEoO'),
        yr = r('IG4P'),
        vr = r('RJrc'),
        gr = r('TnY3'),
        Er = r('FIs5'),
        _r = r('cm6r'),
        Or = r('6OUF'),
        Sr = r('k/OQ'),
        Ir = r('95Se')
      function wr(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Cr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? wr(Object(r), !0).forEach(function (t) {
                m()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : wr(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function xr(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var Rr = 'dmSearchInbox',
        Pr = function (e) {
          return e
        },
        jr = x.a.b08821f3,
        Dr = x.a.a66ac766,
        Tr = x.a.fe61929d,
        kr = x.a.b9dae4f4,
        Mr = x.a.e7fb2027,
        Hr = x.a.b92a21d8,
        Lr = x.a.jdc67c42,
        Ar = x.a.f08940ab,
        Br = x.a.gaae1fd5,
        Fr = x.a.f8321d82,
        Nr = x.a.g2fd3205,
        Ur = x.a.c94ac69d,
        Vr = x.a.fb3c8e74,
        Gr = (function (e) {
          u()(r, e)
          var t = xr(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), 'state', { debouncedQuery: '', isLoadingMore: !1, isRefreshing: !1 }),
              m()(
                l()(e),
                '_modularSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              m()(l()(e), '_setInputRef', function (t) {
                e._textInputRef = t
              }),
              m()(l()(e), '_renderEmptyDMSearchInbox', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.query,
                  a = e.state.debouncedQuery
                return a && n
                  ? (r.scribe({ component: 'search', element: 'results', action: 'empty' }),
                    y.createElement(Er.a, {
                      buttonLink: '/messages/compose',
                      buttonText: Ar,
                      header: Hr({ query: a }),
                      message: Lr,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : y.createElement(
                      ke.a,
                      { style: qr.emptyState },
                      y.createElement(I.b, { align: 'center', color: 'gray700' }, Br),
                    )
              }),
              m()(l()(e), '_renderRecentSearches', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.query,
                  a = t.recentSearches
                return a.length && !n
                  ? y.createElement(
                      y.Fragment,
                      null,
                      y.createElement(vt, {
                        analytics: r,
                        clearRecentSearches: e._clearRecentSearches,
                        headerText: Vr,
                        withClearButton: !0,
                      }),
                      a.map(function (t) {
                        return y.createElement(er, {
                          clearRecentSearch: function (r) {
                            return e._handleClearRecentSearch(r, t)
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
              m()(l()(e), '_renderAllDMSearchResultsTab', function () {
                var t = e.props,
                  r = t.location,
                  n = t.renderInboxItem,
                  a = e.state.debouncedQuery
                return a
                  ? y.createElement(Bt, {
                      loadingLabel: Dr,
                      location: r,
                      query: a,
                      renderEmptyState: e._renderEmptyDMSearchInbox,
                      renderInboxItem: n,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              m()(l()(e), '_renderGroupsTab', function () {
                var t = e.props.renderInboxItem,
                  r = e.state.debouncedQuery
                return y.createElement(dr, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  query: r,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: t,
                  tabType: ze.f.GROUPS,
                })
              }),
              m()(l()(e), '_renderPeopleTab', function () {
                var t = e.props.renderInboxItem,
                  r = e.state.debouncedQuery
                return y.createElement(dr, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  query: r,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: t,
                  tabType: ze.f.PEOPLE,
                })
              }),
              m()(l()(e), '_renderTabContent', function () {
                var t = e.props.location,
                  r = ((null == t ? void 0 : t.state) || {}).tab
                return r === Nr
                  ? e._renderPeopleTab()
                  : r === Ur
                  ? e._renderGroupsTab()
                  : e._renderAllDMSearchResultsTab()
              }),
              m()(l()(e), '_renderSearchResults', function () {
                var t = e.props,
                  r = t.accessibilityTitle,
                  n = t.renderInboxItem,
                  a = t.searchConversationIds,
                  o = e.state,
                  c = o.debouncedQuery,
                  i = o.isRefreshing
                return y.createElement(
                  Wt.a,
                  null,
                  y.createElement(
                    yr.a,
                    { isRefreshing: i, onRefresh: e._handlePullToRefresh },
                    y.createElement(mr.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: r,
                      anchoring: br,
                      assumedItemHeight: 100,
                      cacheKey: Rr,
                      footer: e._renderFooter(),
                      identityFunction: Pr,
                      items: a,
                      noItemsRenderer: e._renderRecentSearches,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: e._handleScrollEnd,
                      renderer: n(c, a),
                      withoutHeadroom: !0,
                    }),
                  ),
                )
              }),
              m()(l()(e), '_renderFooter', function () {
                return e.state.isLoadingMore
                  ? y.createElement(vr.a, null)
                  : y.createElement(
                      ke.a,
                      { style: qr.footerContainer },
                      y.createElement(I.b, { align: 'center', size: 'body', weight: 'bold' }, Mr),
                      y.createElement(
                        _r.a,
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
                          kr,
                        ),
                      ),
                    )
              }),
              m()(l()(e), '_clearRecentSearches', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.clearRecentSearches
                r.scribe({ component: 'recent_search', action: 'clear' }), n()
              }),
              m()(l()(e), '_handleComposeButtonPress', function () {
                e.props.analytics.scribe({ component: 'search', element: 'empty_results', action: 'compose' })
              }),
              m()(l()(e), '_handleFooterClick', function () {
                var t, r, n
                e._textInputRef && e._textInputRef.focus(),
                  null === (t = e._textInputRef) ||
                    void 0 === t ||
                    null === (r = t.textInput) ||
                    void 0 === r ||
                    null === (n = r.textInputNode) ||
                    void 0 === n ||
                    n.select()
              }),
              m()(l()(e), '_handleRefetchSearch', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.createLocalApiErrorHandler,
                  a = t.search,
                  o = e.state.debouncedQuery
                a &&
                  o &&
                  (r.scribe({ component: 'search', element: 'retry', action: 'click' }),
                  a({ query: o.toLowerCase(), preserveResults: !1, fetchNextPage: !1 }).catch(n()))
              }),
              m()(l()(e), '_handlePullToRefresh', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler,
                  n = t.search,
                  a = e.state.debouncedQuery
                e.setState({ isRefreshing: !0 }),
                  n &&
                    a &&
                    n({ query: a.toLowerCase(), preserveResults: !0, fetchNextPage: !1 })
                      .then(function () {
                        return e.setState({ isRefreshing: !1 })
                      })
                      .catch(function (t) {
                        return e.setState({ isRefreshing: !1 }), r()(t)
                      })
              }),
              m()(l()(e), '_handleSearchChangeInner', function (t) {
                var r = e.props,
                  n = r.createLocalApiErrorHandler,
                  a = r.onQueryChange,
                  o = r.search
                a(t),
                  e.setState({ debouncedQuery: t }),
                  o &&
                    t &&
                    !e._modularSearchEnabled &&
                    o({ query: t, preserveResults: !1, fetchNextPage: !1 }).catch(n())
              }),
              m()(l()(e), '_handleSearchChangeDebounced', Object(Qt.a)(e._handleSearchChangeInner, 200)),
              m()(l()(e), '_handleSearchChange', function (t) {
                var r = t.currentTarget.value,
                  n = e.props.onQueryChange
                ;((r && r.trim()) || !r) && (n(r), e._handleSearchChangeDebounced(r))
              }),
              m()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  r = t.analytics,
                  n = t.search,
                  a = e.state.debouncedQuery
                e.setState({ isLoadingMore: !0 }),
                  a &&
                    (r.scribe({ component: 'search', element: 'results', action: 'get_older' }),
                    n({ query: a, preserveResults: !1, fetchNextPage: !0 }).finally(function () {
                      return e.setState({ isLoadingMore: !1 })
                    }))
              }),
              m()(l()(e), '_handleScrollEnd', function () {
                var t = e.props,
                  r = t.addRecentSearch,
                  n = t.analytics,
                  a = t.query
                e.state.debouncedQuery && a && (r(a), n.scribe({ component: 'recent_search', action: 'add' }))
              }),
              m()(l()(e), '_handleSearchClear', function () {
                return e._handleSearchChangeInner('')
              }),
              m()(l()(e), '_handleHideRecentSearches', function () {
                ;(0, e.props.hideRecentSearches)()
              }),
              m()(l()(e), '_handleAddRecentSearch', function (t) {
                var r = t.currentTarget.value,
                  n = e.props,
                  a = n.addRecentSearch,
                  o = n.analytics
                r &&
                  (a(r),
                  o.scribe({ component: 'recent_search', action: 'add' }),
                  e._textInputRef && e._textInputRef.blur())
              }),
              m()(l()(e), '_handleRecentSearchClick', function (t) {
                var r = e.props,
                  n = r.analytics
                ;(0, r.onQueryChange)(t),
                  n.scribe({ component: 'recent_search', action: 'click' }),
                  e._handleSearchChangeInner(t)
              }),
              m()(l()(e), '_handleClearRecentSearch', function (t, r) {
                var n = e.props,
                  a = n.analytics,
                  o = n.clearRecentSearch
                t.stopPropagation(), t.preventDefault(), a.scribe({ component: 'recent_search', action: 'clear' }), o(r)
              }),
              e
            )
          }
          return (
            c()(r, [
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
                    r = t.analytics,
                    n = t.query,
                    a = t.recentSearches
                  e.query || !n || a.includes(n) || r.scribe({ component: 'search', action: 'began_typing' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    r = e.query,
                    n = e.searchFetchStatus,
                    a = !(
                      (this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                        this.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled')) ||
                      (this._modularSearchEnabled && r)
                    ),
                    o = [qr.searchInput, a ? qr.searchInputBorder : void 0],
                    c = ((null == t ? void 0 : t.state) || {}).tab,
                    i = [Fr, Nr, Ur].map(function (e) {
                      return {
                        key: e,
                        label: e,
                        isActive: function () {
                          return c === e || (!c && e === Fr)
                        },
                        to: Cr(Cr({}, t), {}, { state: Cr(Cr({}, t.state), {}, { tab: e }) }),
                      }
                    })
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(
                      ke.a,
                      { style: o },
                      y.createElement(Ue.a, {
                        accessibilityLabel: jr,
                        icon: y.createElement(Ir.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      y.createElement(Or.a, {
                        Icon: Yt.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: Tr,
                        ref: this._setInputRef,
                        value: r,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (r || c === Nr || c === Ur)
                      ? y.createElement(y.Fragment, null, y.createElement(Sr.a, { links: i }), this._renderTabContent())
                      : y.createElement(Et.a, {
                          accessibilityLabel: Dr,
                          fetchStatus: n,
                          onRequestRetry: this._handleRefetchSearch,
                          render: this._renderSearchResults,
                        }),
                  )
                },
              },
            ]),
            r
          )
        })(y.Component)
      m()(Gr, 'contextType', g.a), m()(Gr, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var qr = Qe.a.create(function (e) {
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
        Qr = Object(gr.a)(qt(Gr)),
        Wr = r('dwig'),
        zr = r('QB0K'),
        Yr = r('Avzu'),
        Kr = r('FRNI')
      function Xr(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var $r = x.a.h845f281,
        Zr = x.a.f325afc3,
        Jr = (function (e) {
          u()(r, e)
          var t = Xr(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  return y.createElement(zr.a, {
                    accessibilityLabel: $r,
                    href: '/messages/compose',
                    icon: y.createElement(Yr.a, null),
                    label: $r,
                    scribeComponent: 'floating_dm_button',
                    shortLabel: Zr,
                    testID: Kr.a.message,
                  })
                },
              },
            ]),
            r
          )
        })(y.PureComponent),
        en = r('tI3i'),
        tn = r.n(en),
        rn = r('883S'),
        nn = r('yoO3'),
        an = r('GSsg'),
        on = r('2g+p'),
        cn = r('mw9i'),
        ln = r('BcsE'),
        sn = r('+d3d')
      function un(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var a = h()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var dn = function (e) {
          return e
        },
        pn = x.a.a66ac766,
        fn = x.a.fe61929d,
        hn = (function (e) {
          u()(r, e)
          var t = un(r)
          function r(e, n) {
            var o
            return (
              a()(this, r),
              (o = t.call(this, e, n)),
              m()(l()(o), 'state', { filterQuery: '', showRecentSearches: !1, searchQuery: '' }),
              m()(l()(o), '_render', function () {
                var e = o.state.showRecentSearches
                return o._isServerSearchEnabled && e ? o._renderFocusedSearch() : o._renderInbox()
              }),
              m()(l()(o), '_renderFocusedSearch', function () {
                var e = o.props,
                  t = e.accessibilityTitle,
                  r = e.analytics,
                  n = e.conversationIds,
                  a = e.renderStickyContent,
                  c = o.state.searchQuery
                return y.createElement(
                  y.Fragment,
                  null,
                  a ? a() : null,
                  y.createElement(Qr, {
                    accessibilityTitle: t,
                    analytics: r,
                    conversationIds: n,
                    hideRecentSearches: o._hideRecentSearches,
                    onQueryChange: o._handleQueryChange,
                    query: c,
                    renderInboxItem: o._renderInboxItem,
                  }),
                )
              }),
              m()(l()(o), '_renderInbox', function () {
                var e = o.props,
                  t = e.accessibilityTitle,
                  r = e.conversationIds,
                  n = e.footer,
                  a = e.isDrawer,
                  c = e.isRefreshing,
                  i = e.renderEmptyDMInbox,
                  l = e.renderStickyContent,
                  s = e.virtualScrollerCacheKey,
                  u =
                    o.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    o.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  d = [bn.searchInput, u ? void 0 : bn.searchInputBorder],
                  p = y.createElement(
                    y.Fragment,
                    null,
                    l ? l() : null,
                    o._enableSearchInbox
                      ? y.createElement(
                          ke.a,
                          { onClick: o._isServerSearchEnabled ? o._handleSearchClick : void 0, style: d },
                          y.createElement(Or.a, {
                            Icon: Yt.a,
                            autoComplete: 'off',
                            onChange: o._handleSearchChange,
                            onClear: o._handleSearchClear,
                            onFocus: o._handleSearchFocus,
                            placeholder: fn,
                            withClearButton: !0,
                          }),
                        )
                      : null,
                  )
                return y.createElement(
                  yr.a,
                  { isRefreshing: c, onRefresh: o._handlePullToRefresh },
                  s && r
                    ? y.createElement(mr.a, {
                        accessibilityRole: 'tablist',
                        accessibilityTitle: t,
                        anchoring: br,
                        assumedItemHeight: 100,
                        cacheKey: s,
                        footer: n,
                        header: p,
                        identityFunction: dn,
                        items: r,
                        noItemsRenderer: i,
                        onNearEnd: o._handleNearEnd,
                        renderer: o._renderInboxItem(o.state.filterQuery, r),
                        withKeyboardShortcuts: !a,
                        withoutHeadroom: !0,
                      })
                    : null,
                )
              }),
              m()(l()(o), '_handleNearEnd', function () {
                o.state.filterQuery || o._handleHistoryRequest()
              }),
              m()(l()(o), '_handleQueryChange', function (e) {
                o.setState({ searchQuery: e })
              }),
              m()(l()(o), '_handleSearchChangeInner', function (e) {
                var t = o.props.analytics
                o.setState({ filterQuery: e.toLowerCase() }),
                  t.scribe({ element: 'thread', action: 'search', data: { event_value: o.state.filterQuery.length } })
              }),
              m()(l()(o), '_handleSearchChangeDebounced', Object(Qt.a)(o._handleSearchChangeInner, 200)),
              m()(l()(o), '_handleSearchChange', function (e) {
                var t = e.currentTarget.value
                o.state.showRecentSearches || o.setState({ showRecentSearches: !0 }),
                  ((t && t.trim()) || !t) && (o._handleQueryChange(t), o._handleSearchChangeDebounced(t))
              }),
              m()(l()(o), '_handleSearchClear', function () {
                return o._handleSearchChangeInner('')
              }),
              m()(l()(o), '_handleSearchFocus', function () {
                o.props.conversationIds && o.props.conversationIds.length < 30 && o._handleHistoryRequest()
              }),
              m()(l()(o), '_handleSearchClick', function () {
                o.props.analytics.scribe({ component: 'search', action: 'click' }),
                  o.setState({ showRecentSearches: !0 })
              }),
              m()(l()(o), '_hideRecentSearches', function () {
                o.setState({ showRecentSearches: !1, searchQuery: '' })
              }),
              m()(l()(o), '_renderInboxItem', function (e, t) {
                return function (e, r) {
                  var n = o.context.loggedInUserId,
                    a = o.props.location,
                    c = o.state,
                    i = c.filterQuery,
                    l = c.searchQuery,
                    s = o._filterConversation(i),
                    u = { pathname: '/messages/'.concat(e), state: null == a ? void 0 : a.state },
                    d = e && null != t && t.length ? t.indexOf(e) : null,
                    p = Object(ln.a)(d) ? d + 1 : 0
                  return (
                    tn()(!!n, 'loggedInUserId must be defined'),
                    r && r(!0),
                    y.createElement(v.a, { exact: !1, path: u.pathname }, function (t) {
                      return y.createElement(ut, {
                        conversationId: e,
                        currentQuery: i,
                        filter: s,
                        inboxType: o.props.inboxType,
                        isActive: t,
                        key: e,
                        link: u,
                        onClick: o._handleConversationClick,
                        perspective: n,
                        position: p,
                        searchQuery: l,
                      })
                    })
                  )
                }
              }),
              m()(l()(o), '_filterConversation', function (e) {
                return function (e) {
                  var t = o.state.filterQuery
                  if (!t) return !0
                  var r = o.context.loggedInUserId,
                    n = Object.keys(e.participants),
                    a = 'GROUP_DM' === e.type && e.name && e.name.toLowerCase().indexOf(t) > -1,
                    c = n.some(function (a) {
                      var c = e.participants[a],
                        i = r === a,
                        l = 1 === n.length && i,
                        s = c && c.user && !i
                      return !(!l && !s) && o._userMatchesQuery(c.user.screen_name, c.user.name, t)
                    })
                  return !(!a && !c)
                }
              }),
              m()(l()(o), '_handleFetchInitialWrapper', function () {
                o._handleFetchInitial()
              }),
              m()(l()(o), '_handleFetchInitial', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  r = e.fetchInboxIfNeeded,
                  n = e.fetchUpdates
                return r()
                  .then(o._updateLastSeenEventId, t())
                  .then(function () {
                    o._updatePolling.start()
                  })
                  .then(function () {
                    return n().catch(t())
                  })
              }),
              m()(l()(o), '_handleConversationClick', function (e, t, r, n) {
                var a = o.props,
                  c = a.analytics,
                  i = a.customCellClick,
                  l = null != r && r.participants ? Object.keys(r.participants).length : 0,
                  s = (null == r ? void 0 : r.type) === T.CONVERSATION_TYPE.GROUP
                c.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: o.state.filterQuery.length,
                    conversation_id: t,
                    conversation_participant_count: l,
                    conversation_type: s ? ze.g.GROUP : ze.g.ONE_TO_ONE,
                    position: n,
                  },
                }),
                  i && i(e, t)
              }),
              m()(l()(o), '_handleEmptyDMInboxImpression', function () {
                o.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              m()(l()(o), '_handlePullToRefresh', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchInbox)().then(o._updateLastSeenEventId, t())
              }),
              m()(l()(o), '_updateLastSeenEventIdIfActive', function () {
                if ('background' !== on.a.currentState) return o._updateLastSeenEventId()
              }),
              m()(l()(o), '_updateLastSeenEventId', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.updateLastSeenEventId)().catch(t())
              }),
              (o._fab = y.createElement(Jr, null)),
              (o._enableSearchInbox =
                !!e.withDmSearch && o.context.featureSwitches.isTrue('responsive_web_search_dms_enabled')),
              (o._isServerSearchEnabled =
                o._enableSearchInbox && o.context.featureSwitches.isTrue('responsive_web_dm_server_side_search')),
              o
            )
          }
          return (
            c()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.createLocalApiErrorHandler,
                    n = t.fetchInboxHistory,
                    a = t.fetchUpdates
                  return (
                    (this._updatePolling = new an.a(
                      function () {
                        a().then(e._updateLastSeenEventIdIfActive, r(rn.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(sn.a)(function () {
                      n.apply(void 0, arguments).catch(r())
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
                    nn.a,
                    null,
                    y.createElement(D, null),
                    y.createElement(
                      Wr.a,
                      { component: cn.a, fab: this._fab, style: bn.root },
                      y.createElement(Et.a, {
                        accessibilityLabel: pn,
                        fetchStatus: this.props.fetchStatus,
                        onRequestRetry: this._handleFetchInitialWrapper,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_userMatchesQuery',
                value: function (e, t, r) {
                  return (e && e.toLowerCase().indexOf(r) > -1) || (t && t.toLowerCase().indexOf(r) > -1)
                },
              },
            ]),
            r
          )
        })(y.Component)
      m()(hn, 'contextType', g.a),
        m()(hn, 'defaultProps', { conversationIds: [], inboxType: je.c.PRIMARY, isDrawer: !1, withDmSearch: !1 })
      var bn = Qe.a.create(function (e) {
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
      t.a = Object(gr.a)(H(hn))
    },
  },
])
//# sourceMappingURL=WIPED
