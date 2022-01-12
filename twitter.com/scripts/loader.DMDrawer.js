;(window.webpackJsonp = window.webpackJsonp || []).push([
  [163],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        c = n('M2x3'),
        i = 'settingsAppBar',
        l = n('/yvb'),
        s = n('rHpw'),
        u = o.a.bb081ea1,
        d = { viewType: 'settings_button' },
        p = r.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return r.createElement(l.a, {
            accessibilityLabel: u,
            behavioralEventContext: d,
            hoverLabel: { label: u },
            icon: r.createElement(c.a, null),
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
        c = n.n(o),
        i = n('5Yy7'),
        l = n.n(i),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        h = n('rHpw'),
        b = n('MWbm')
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
          l()(n, e)
          var t = m(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
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
            n
          )
        })(f.Component),
        v = h.a.create(function (e) {
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
        c = n.n(o),
        i = n('5Yy7'),
        l = n.n(i),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        p = n.n(d),
        f = n('ERkP'),
        h = n('3XMw'),
        b = n.n(h),
        m = n('rHpw'),
        y = n('+/1j'),
        v = n('MWbm')
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
          var n,
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var E = b.a.e5b0063d,
        _ = 0,
        O = (function (e) {
          l()(n, e)
          var t = g(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(_)), (_ += 1), e
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = E({ title: n })
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
                      n,
                    ),
                    f.createElement(v.a, { accessibilityLabel: r }, t),
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
        c = n('Lsrn'),
        i = n('k/Ka')
      function l(e, t) {
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
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
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
    BUB3: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('m3Bd'),
        c = n.n(o),
        i = n('ERkP'),
        l = n('sNn6'),
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
          n = c()(e, ['children'])
        return i.createElement(l.a, n, function (e) {
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
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        b = n('KEM+'),
        m = n.n(b),
        y = (n('2G9S'), n('ERkP')),
        v = n('rxPX'),
        g = n('0KEI'),
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
        S = n('v//M'),
        I = n('sIe2'),
        w = n('3XMw'),
        C = n.n(w),
        x = n('TEoO')
      function P(e) {
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
      var R = C.a.i9028824,
        j = 'sliceTimeline',
        D = function (e) {
          return e
        },
        M = { viewType: 'timeline' },
        T = (function (e) {
          u()(n, e)
          var t = P(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  r = t.items,
                  a = t.noItemsRenderer,
                  o = t.numColumns,
                  c = t.onScrollEnd,
                  i = t.renderer,
                  l = t.withoutHeadroom
                return !r || o < 1
                  ? null
                  : 1 === o
                  ? y.createElement(x.a, {
                      cacheKey: j,
                      footer: n,
                      identityFunction: D,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: c,
                      renderer: i,
                      withoutHeadroom: l,
                    })
                  : y.createElement(I.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: D,
                      numColumns: o,
                      renderItem: i,
                    })
              }),
              m()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              m()(l()(e), '_handleFetch', function () {
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
            c()(n, [
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
                        behavioralEventContext: M,
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
      m()(T, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var k = O(T)
      t.a = k
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('ERkP'),
        c = n('5UID'),
        i = n('3GUV'),
        l = n('iBK2'),
        s = o.createElement(i.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = o.createElement(l.b, n)
          return t ? o.createElement(c.a, { title: t }, r) : r
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
        c = n.n(o),
        i = n('Y9Ll'),
        l = n.n(i),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        b = n('AuHH'),
        m = n.n(b),
        y = n('KEM+'),
        v = n.n(y),
        g = (n('2G9S'), n('3voH'), n('ERkP')),
        E = n('ZUOq'),
        _ = n('MMRb'),
        O = n('RqPI'),
        S = n('rxPX'),
        I = n('0KEI'),
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
        C = n('V/6K'),
        x =
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
        P = n('1YZw'),
        R = n('hqKg'),
        j = n('X/yg'),
        D = n('AQOc'),
        M = n('UhuB'),
        T = n('l0YN'),
        k = n('G6rE'),
        L = n('P1r1')
      function H(e, t) {
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
            ? H(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var B = function (e, t) {
          return t.conversationId
        },
        F = Object(R.createSelector)(
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
          return function (t, n) {
            return x.a(e, t, n)
          }
        },
        V = {
          conversation: function (e, t) {
            return _.selectConversation(e, B(0, t))
          },
          entries: _.selectEntries,
          perspective: O.p,
          users: k.e.selectAll,
          dataSaverMode: L.k,
          dtabBarInfo: L.n,
          quickReplyOptions: F,
          visibility: _.selectDrawerVisibility,
          inboxUnreadCount: T.a,
          isUnread: function (e, t) {
            return !_.selectConversationIsRead(e, B(0, t))
          },
          isDmReceiptSettingEnabled: M.n,
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
        z = Object(S.a)()
          .propsFromState(function () {
            return A(A({}, V), G)
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = e.dataSaverMode,
              r = e.draftText,
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
              dataSaverMode: n,
              draftText: r,
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
              addToast: P.b,
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
        W = n('aWyx'),
        q = n('qz2E'),
        Q = n('Oi4X'),
        Y = n('OhSZ'),
        X =
          (n('uFXj'),
          Object(S.a)()
            .propsFromState(function () {
              return { visibility: _.selectDrawerVisibility }
            })
            .propsFromActions(function () {
              return { popOutConversation: _.popOutConversation, setDrawerVisibility: _.setDrawerVisibility }
            })
            .withAnalytics()),
        K = n('AQ79'),
        $ = n('3XMw'),
        Z = n.n($),
        J = n('OrGc'),
        ee = n('hACr'),
        te = n('fs1G'),
        ne = n('MWbm'),
        re = n('/yvb'),
        ae = n('Znyr'),
        oe = n('t62R'),
        ce = n('xKuM'),
        ie = n('rHpw'),
        le = n('v6aA'),
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
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
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
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ye(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ye(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
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
        _e = n('x0mb')
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Se = Z.a.a2f8105f,
        Ie = Z.a.d227d19e,
        we = Z.a.c64c1883,
        Ce = Z.a.j7d0e835,
        xe = Z.a.b08821f3,
        Pe = Z.a.e736990a,
        Re = Z.a.cdcebd22,
        je = (function (e) {
          p()(n, e)
          var t = Oe(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), '_headerBar', g.createRef()),
              v()(
                u()(e),
                '_appBarScrollEnabled',
                e.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
              ),
              v()(u()(e), '_isExpanded', function () {
                return e.props.visibility === K.a.EXPANDED
              }),
              v()(u()(e), '_renderLeftControl', function () {
                var t = e.props.inboxUnreadCount
                return g.createElement(
                  ne.a,
                  null,
                  g.createElement(re.a, {
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
                  n = t.hasNewMessages
                return t.isHighlighted && n ? 'onMediaText' : 'primaryText'
              }),
              v()(u()(e), '_renderRightControl', function () {
                var t = e.props.conversationTitle,
                  n = e._isExpanded(),
                  r = e._getButtonType()
                return g.createElement(
                  ne.a,
                  { style: De.rightControls },
                  t
                    ? null
                    : g.createElement(re.a, {
                        accessibilityLabel: we,
                        hoverLabel: { label: Re },
                        icon: g.createElement(ue.a, null),
                        onPress: e._handleNewMessage,
                        type: r,
                      }),
                  n
                    ? g.createElement(re.a, {
                        accessibilityLabel: Ie,
                        hoverLabel: { label: Ie },
                        icon: g.createElement(me, null),
                        onPress: e._handleToggleVisibility,
                        type: r,
                      })
                    : g.createElement(re.a, {
                        accessibilityLabel: Ce,
                        hoverLabel: { label: Ce },
                        icon: g.createElement(Ee, null),
                        onPress: e._handleToggleVisibility,
                        type: r,
                      }),
                )
              }),
              v()(u()(e), '_handleUnpopConvo', function () {
                ;(0, e.props.popOutConversation)(null)
              }),
              v()(u()(e), '_handleToggleVisibility', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.onDrawerOpen,
                  a = t.setDrawerVisibility,
                  o = e._isExpanded() ? K.a.COLLAPSED : K.a.EXPANDED
                o === K.a.COLLAPSED
                  ? n.scribe({ action: 'collapse' })
                  : o === K.a.EXPANDED && (n.scribe({ action: 'expand' }), r && r()),
                  a(o)
              }),
              v()(u()(e), '_handleToggleVisibilityKeyboard', function () {
                e._handleToggleVisibility(), e._headerBar && e._headerBar.current && e._headerBar.current.focus()
              }),
              v()(u()(e), '_handleNewMessage', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.history
                n.scribe({ section: 'compose_drawer', component: 'dm', action: 'show' }),
                  r.push({ pathname: '/messages/compose', state: { source: 'drawer' } })
              }),
              v()(u()(e), '_renderTitle', function () {
                var t = e.props,
                  n = t.conversationTitle,
                  r = t.hasNewMessages,
                  a = t.isHighlighted,
                  o = n || g.createElement(oe.b, null, Se)
                return g.createElement(
                  ne.a,
                  { style: De.titleContainer },
                  g.createElement(ne.a, { style: [De.titleTextRoot, a && r ? De.titleTextHighlighted : null] }, o),
                  r
                    ? g.createElement(
                        ne.a,
                        { style: De.newMessageDotContainer },
                        g.createElement(_e.a, {
                          accessibilityLabel: Pe,
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
            l()(n, [
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
                      ne.a,
                      {
                        ref: this._headerBar,
                        style: [De.headerRoot, !i && De.headerBorderClosed].concat(c, [De.cursor]),
                      },
                      g.createElement(ce.a, {
                        leftControl: r && this._isExpanded() ? this._renderLeftControl() : null,
                        onMiddleControlClick: this._handleToggleVisibility,
                        rightControl: this._renderRightControl(),
                        style: this._appBarScrollEnabled ? De.roundedAppBarCorners : null,
                        subtitle: n,
                        title: this._renderTitle(),
                        withBackground: l,
                        withBottomBorder: !0,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
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
        Me = X(je),
        Te = (n('JtPf'), n('87if'), n('zb92')),
        ke = Object(Te.a)({
          loader: function () {
            return n.e(219).then(n.bind(null, 'Rk1B'))
          },
        }),
        Le = n('aWzz'),
        He = n('XnpN'),
        Ae = n('GSsg'),
        Be = n('aITJ'),
        Fe = n('yrzJ')
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Ue = (function (e) {
        p()(n, e)
        var t = Ne(n)
        function n(e, r) {
          var a
          return (
            c()(this, n),
            (a = t.call(this, e, r)),
            v()(
              u()(a),
              '_appBarScrollEnabled',
              a.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
            ),
            v()(u()(a), '_composer', g.createRef()),
            v()(u()(a), '_renderConversation', function (e, t) {
              var n = a.props,
                r = n.conversationId,
                o = n.history,
                c = n.location
              return g.createElement(Q.a, {
                conversationId: r,
                drawerHeader: a._appBarScrollEnabled ? a._renderHeader() : void 0,
                history: o,
                isWide: !1,
                location: c,
                richTextInputContext: e,
                typeaheadWrapper: t,
              })
            }),
            v()(u()(a), '_isExpanded', function () {
              return a.props.visibility === K.a.EXPANDED
            }),
            v()(u()(a), '_fetchUpdatesIfNeeded', function () {
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
          l()(n, [
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
                      ? g.createElement(ke, null, function (t) {
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
                  c = e.onDrawerOpen,
                  i = e.perspective,
                  l = e.triggerHeaderHighlight,
                  s = a ? 'white' : 'normal',
                  u = a ? 'white' : 'gray700',
                  d =
                    t &&
                    t.type === W.a.ONE_TO_ONE &&
                    i &&
                    Object(He.a)(t, i).map(function (e) {
                      return e.user.screen_name
                    }),
                  p = d ? g.createElement(Fe.a, { color: u, screenName: d[0] }) : void 0
                return g.createElement(
                  ne.a,
                  { style: this._appBarScrollEnabled ? [Ve.headerRoot, Ve.appBarZIndex] : Ve.appBarZIndex },
                  g.createElement(Me, {
                    conversationSubtitle: p,
                    conversationTitle: g.createElement(Y.b, {
                      conversation: t,
                      perspective: i,
                      textColor: s,
                      withScreenName: !1,
                    }),
                    hasNewMessages: o,
                    history: n,
                    inboxUnreadCount: r,
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
                  this.props.visibility === K.a.COLLAPSED &&
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
      })(g.Component)
      v()(Ue, 'contextType', le.a), v()(Ue, 'childContextTypes', { getCustomLocation: Le.func })
      var Ve = ie.a.create(function (e) {
          return {
            appBarZIndex: { zIndex: e.componentZIndices.appBarZIndex },
            headerRoot: { position: 'sticky', top: 0 },
          }
        }),
        Ge = z(Ue),
        ze = (n('i4UL'), n('tQbP'), n('M+/F'), n('ho0z'), n('hCOa'), n('jQ/y'), n('aLgo'), n('4q8G')),
        We = n('tn7R')
      function qe(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return Qe(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qe(e, t)
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
          c = !0,
          i = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (c = e.done), e
          },
          e: function (e) {
            ;(i = !0), (o = e)
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (i) throw o
            }
          },
        }
      }
      function Qe(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      var Ye = Object(S.a)()
          .propsFromState(function () {
            return {
              conversations: _.selectConversations,
              settings: L.g,
              unreadCount: T.a,
              untrustedConversationCount: _.selectUntrustedConversationCount,
              untrustedUnreadCount: _.selectUntrustedUnreadCount,
              visibility: _.selectDrawerVisibility,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              n = e.conversations,
              r = e.settings,
              a = e.unreadCount,
              o = e.untrustedConversationCount,
              c = e.untrustedUnreadCount,
              i = e.visibility,
              l = [],
              s = qe(Object(We.a)(n))
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
            l.sort(ze.a)
            var p = a > 0
            return {
              allowUntrustedInbox: 'all' === r.allow_dms_from || o > 0,
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
        Xe = n('cFyg'),
        Ke = n('pXKu'),
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
                v()(e, t, n[t])
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
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
          p()(n, e)
          var t = rt(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(
                u()(e),
                '_appBarScrollEnabled',
                e.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
              ),
              v()(u()(e), '_renderHeader', function () {
                var t = e.props,
                  n = t.history,
                  r = t.isHeaderHighlighted,
                  a = t.isUnread,
                  o = t.onDrawerOpen,
                  c = t.triggerHeaderHighlight
                return g.createElement(
                  ne.a,
                  { style: e._appBarScrollEnabled ? [ft.headerRoot, ft.appBarZIndex] : ft.appBarZIndex },
                  g.createElement(Me, {
                    hasNewMessages: a,
                    history: n,
                    isHighlighted: r,
                    onDrawerOpen: o,
                    triggerHighlight: c,
                  }),
                )
              }),
              v()(u()(e), '_renderExpandedInbox', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.conversationIds,
                  a = t.fetchInboxHistory,
                  o = t.updateLastSeenEventId
                return g.createElement(
                  ne.a,
                  { style: ft.fill },
                  g.createElement(
                    ne.a,
                    { style: [ft.viewportView, e._appBarScrollEnabled && Xe.b.drawerHeaderRadius] },
                    g.createElement(
                      Ze.a,
                      { style: [ft.viewportView, e._appBarScrollEnabled && Xe.b.drawerHeaderRadius] },
                      e._appBarScrollEnabled && e._renderHeader(),
                      g.createElement(Ke.a, {
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
                return e.props.visibility === K.a.EXPANDED
              }),
              v()(u()(e), '_dmDrawerOnClick', function (t, n) {
                ;(0, e.props.popOutConversation)(n), t.preventDefault()
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
                      ne.a,
                      { style: ft.requestPivotContainer },
                      g.createElement(et.a, {
                        label: st,
                        link: Object($e.a)(K.c.SECONDARY),
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
            l()(n, [
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
                  return g.createElement(
                    g.Fragment,
                    null,
                    e && this._appBarScrollEnabled ? null : this._renderHeader(),
                    e && this._renderExpandedInbox(),
                  )
                },
              },
            ]),
            n
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
            viewportView: nt(nt({}, ie.a.absoluteFillObject), {}, { overflowY: 'auto' }),
          }
        }),
        ht = Ye(pt),
        bt = n('YeIG'),
        mt = n('A69o'),
        yt = 'DMDrawer',
        vt = n('TnY3'),
        gt = n('0FVZ'),
        Et = n('Oe3h'),
        _t = n('nBUg')
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
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
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), 'state', { isHeaderHighlighted: !1, hasStartedInitialFetch: !1, unexpandedHeight: void 0 }),
              v()(u()(e), '_handleLayout', function (t) {
                var n = t.nativeEvent.layout.height,
                  r = e.state.unexpandedHeight
                e._isExpanded() || void 0 !== r || e.setState({ unexpandedHeight: n })
              }),
              v()(u()(e), '_showDMDrawer', function () {
                var t = e.props,
                  n = t.conversations,
                  r = t.visibility === K.a.CLOSED
                return !e._isHideDMDrawerPath() && !Object(bt.a)(n) && !r
              }),
              v()(u()(e), '_isExpanded', function () {
                return e.props.visibility === K.a.EXPANDED
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
            l()(n, [
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
                                ne.a,
                                a()({ ref: t() }, l({ style: [Xe.b.root, { width: i }], testID: yt })),
                                g.createElement(
                                  ne.a,
                                  {
                                    onLayout: u ? void 0 : e._handleLayout,
                                    style: [Xe.b.expandable, { height: u, maxHeight: u }, d && Xe.b.expanded],
                                  },
                                  c
                                    ? g.createElement(
                                        mt.a.Provider,
                                        { value: It },
                                        g.createElement(Ge, {
                                          conversationId: c,
                                          history: n,
                                          isHeaderHighlighted: s,
                                          location: r,
                                          onDrawerOpen: e._handleDrawerOpen,
                                          perspective: o,
                                          triggerHeaderHighlight: e._triggerHeaderHighlight,
                                        }),
                                      )
                                    : g.createElement(
                                        mt.a.Provider,
                                        { value: St },
                                        g.createElement(ht, {
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
        })(g.PureComponent)
      v()(wt, 'defaultProps', { width: E.a.dmDrawerWidth.max })
      var Ct = w(wt)
      t.default = Object(vt.a)(Ct)
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
          return b
        })
      n('uFXj')
      var r = n('ERkP'),
        a = n('HPNB'),
        o = n('v6aA'),
        c = n('jYSG'),
        i = n('AQ79'),
        l = n('+Bsv'),
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
            return r.createElement(l.a, { pullRight: t, to: a })
          })
        },
        b = function (e) {
          return r.createElement(u.a, null, function (t) {
            var n = t.windowWidth,
              o = a.a.isTwoColumnLayout(n),
              i = 0 === e.length
            return o || i
              ? null
              : r.createElement(
                  s.a,
                  { style: m.stickyCopyContainer },
                  r.createElement(d.b, { style: m.stickyCopy }, c.a),
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
    pXKu: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        c = n.n(o),
        i = n('1Pcy'),
        l = n.n(i),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        b = n('KEM+'),
        m = n.n(b),
        y = (n('vrRf'), n('+KXO'), n('ERkP')),
        v = n('BUB3'),
        g = n('v6aA'),
        E = n('xZGM'),
        _ = n('rxPX'),
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
        S = n('fs1G'),
        I = n('t62R'),
        w = n('feu+'),
        C = n('3XMw'),
        x = n.n(C),
        P = x.a.fd6150fc,
        R = y.createElement(
          x.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          y.createElement(I.b, { link: '/privacy' }, x.a.d42d239f),
        ),
        j = x.a.j24c37b2,
        D = O(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            r = e.shouldShowPrompt,
            a = y.useContext(g.a).featureSwitches
          if (!(r && a.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            y.createElement(w.a, {
              actionLabel: j,
              headline: P,
              onAction: function () {
                n.scribeAction('click'), t(E.j)
              },
              onClose: S.a,
              subtext: R,
              withCloseButton: !1,
            })
          )
        }),
        M = n('MMRb'),
        T = n('kGix'),
        k = n('0KEI'),
        L = Object(_.a)()
          .propsFromState(function () {
            return {
              hasConversations: M.selectHasConversations,
              fetchStatus: M.selectFetchStatus,
              isLoadingTop: M.selectIsLoadingTop,
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
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: M.fetchInbox,
              fetchInboxIfNeeded: M.fetchInboxIfNeeded,
              fetchUpdates: M.fetchUpdatesIfNeeded,
            }
          }),
        H = (n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ddV6')),
        A = n.n(H),
        B =
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
          n('EbOo')),
        F = n('tZH3'),
        N = n('1YZw'),
        U = n('hqKg'),
        V = n('AQOc'),
        G = n('G6rE'),
        z = n('oEGd'),
        W = function (e, t) {
          return t.conversationId
        },
        q = Object(U.createSelector)(
          W,
          function (e, t) {
            return M.selectConversation(e, W(0, t))
          },
          M.selectEntries,
          G.e.selectAll,
          function (e, t) {
            return !M.selectConversationIsRead(e, W(0, t))
          },
          function (e, t) {
            var n = W(0, t)
            return Object(M.selectInboxTypeByConversation)(e, n)
          },
          function (e, t, n, r, a, o) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(V.a)(t.data, n, r),
              conversationId: e,
              unread: a,
              inboxType: o,
            }
          },
        ),
        Q = {
          addRecentSearch: M.addRecentSearches,
          addToast: N.b,
          block: G.e.block,
          createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: M.disableNotifications,
          enableNotifications: M.enableNotifications,
          leaveConversation: M.leaveConversation,
          muteDMUser: M.muteDMUser,
          unmuteDMUser: M.unmuteDMUser,
          unblock: G.e.unblock,
        },
        Y = Object(z.g)(q, Q),
        X = n('aA19'),
        K = n('OhSZ'),
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
        ee = Object(_.a)()
          .propsFromState(function () {
            return { users: Object(U.createSelector)(G.e.selectAll, J, $.b) }
          })
          .adjustStateProps(function (e) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? Z(Object(n), !0).forEach(function (t) {
                      m()(e, t, n[t])
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
        re = Object(U.createSelector)(
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
        ae = Object(z.c)(re),
        oe = n('X/yg'),
        ce = n('cTG8'),
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
            n = e.perspective,
            r = e.isGroupDM,
            a = e.user,
            o = void 0 === a ? {} : a,
            c = e.recipient,
            i = void 0 === c ? {} : c,
            l = y.useContext(g.a).featureSwitches,
            s = t && t.message_data
          if (!s) return null
          var u = s.attachment,
            d = u && !!(u.video || u.photo || u.animated_gif || u.tweet || u.fleet || u.sticker || u.card),
            p = n === o.id_str,
            f = !(!d || !p) || !(!r || p),
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
                ? (m = (function (e, t, n) {
                    return e
                      ? y.createElement(
                          x.a.I18NFormatMessage,
                          { $i18n: 'i005f1fd' },
                          y.createElement(I.b, null, t),
                          y.createElement(I.b, null, n || ''),
                        )
                      : y.createElement(
                          x.a.I18NFormatMessage,
                          { $i18n: 'b35cee40' },
                          y.createElement(I.b, null, n || ''),
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
        me = n('uKEd'),
        ye = function (e, t) {
          return t.senderId ? G.e.select(e, t.senderId) : void 0
        },
        ve = function (e, t) {
          return Object(me.n)(e, t.reactionEntry.message_id)
        },
        ge = function (e, t) {
          var n = ve(e, t)
          return n && n.message_data && G.e.select(e, n.message_data.sender_id)
        },
        Ee = Object(z.e)(function () {
          return Object(U.createSelector)(ye, ve, ge, function (e, t, n) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: n }
          })
        }, {}),
        _e = n('33Kz'),
        Oe = Ee(function (e) {
          var t,
            n = e.isGroupDM,
            r = e.messageUser,
            a = e.perspective,
            o = e.reactedMessageEntry,
            c = e.reactingUser,
            i = e.reactionEntry,
            l = y.useContext(g.a).featureSwitches,
            s = o && o.message_data,
            u = s && s.attachment,
            d = s && s.text,
            p = r && r.screen_name,
            f = a === (c && c.id_str),
            h = c && c.name,
            b = Object(_e.b)(i.reaction_key || '', l)
          return (
            (t =
              u && u.tweet
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'c4202784' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'b493a890' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, p, b)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'ca684bf5' }, y.createElement(I.b, null, n))
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'h5797be5' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, b)
                : u && u.video
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'd1f8bdd9' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'd764af97' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, p, b)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'ab1cdfe2' }, y.createElement(I.b, null, n))
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'f0cf1699' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, b)
                : u && u.photo
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'hec0fd4d' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'j55320de' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, p, b)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'jf27606a' }, y.createElement(I.b, null, n))
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'cd110359' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, b)
                : u && u.animated_gif
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'e70dcc35' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'g1bf440b' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, p, b)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'b2da1bf8' }, y.createElement(I.b, null, n))
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'g84c0421' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, b)
                : u && u.card
                ? n
                  ? (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'cd2e7c18' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'aee9e7fa' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, p, b)
                  : (function (e, t, n) {
                      return e
                        ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'f9fb1cf6' }, y.createElement(I.b, null, n))
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'f2bf910e' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                          )
                    })(f, h, b)
                : d
                ? n
                  ? (function (e, t, n, r, a) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, a),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'd6998baa' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, r),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, a),
                          )
                    })(f, h, b, p, d)
                  : (function (e, t, n, r) {
                      return e
                        ? y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'cec676f3' },
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                        : y.createElement(
                            x.a.I18NFormatMessage,
                            { $i18n: 'a2706f9a' },
                            y.createElement(I.b, null, t),
                            y.createElement(I.b, null, n),
                            y.createElement(I.b, null, r),
                          )
                    })(f, h, b, d)
                : (function (e, t, n) {
                    return e
                      ? y.createElement(x.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, y.createElement(I.b, null, n))
                      : y.createElement(
                          x.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          y.createElement(I.b, null, t),
                          y.createElement(I.b, null, n),
                        )
                  })(f, h, b)),
            y.createElement(I.b, { color: 'gray700', numberOfLines: 1 }, t)
          )
        }),
        Se = n('H4nC'),
        Ie = n('b9JY'),
        we = x.a.fb3ccb55,
        Ce = function (e) {
          var t = e.conversationType,
            n = e.entry,
            r = e.perspective
          if (n.marked_as_spam) return y.createElement(I.b, { color: 'gray700', numberOfLines: 1 }, we)
          if (Object(Ie.b)(n)) {
            var a = n.message_data,
              o = (a = void 0 === a ? {} : a).recipient_id,
              c = a.sender_id
            return y.createElement(be, {
              entry: n,
              isGroupDM: t === M.CONVERSATION_TYPE.GROUP,
              perspective: r,
              recipientId: o,
              senderId: c,
            })
          }
          return Object(Ie.c)(n)
            ? y.createElement(Oe, {
                isGroupDM: t === M.CONVERSATION_TYPE.GROUP,
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
        xe = n('Myq3'),
        Pe = n('3wZR'),
        Re = n('XnpN'),
        je = n('AQ79'),
        De = 'conversation',
        Me = n('u0B7'),
        Te = n('MWbm'),
        ke = n('Irs7'),
        Le = n('eb3s'),
        He = n('ZToW'),
        Ae = n('lHOd'),
        Be = n('IG7M'),
        Fe = n('mjJ+'),
        Ne = n('Znyr'),
        Ue = n('0PHd'),
        Ve = n('yrzJ'),
        Ge = n('Xrkv'),
        ze = n('efqG'),
        We = n('/yvb'),
        qe = n('GBcw'),
        Qe = n('cm6r'),
        Ye = n('htQn'),
        Xe = n('5mJL'),
        Ke = n('rHpw'),
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
                m()(e, t, n[t])
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
        ct = n('zIWA'),
        it = n('5pef')
      function lt(e, t) {
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
            ? lt(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : lt(Object(n)).forEach(function (t) {
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
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ft(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function bt(e) {
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
      var mt = x.a.d88d0790,
        yt = x.a.ad63377d,
        vt = {
          confirmButtonLabel: x.a.bb1d57b6,
          actionTextLeave: x.a.g9074da4,
          header: x.a.gdf4b79f,
          text: x.a.h09b49f7,
        },
        gt = x.a.i6b19b07,
        Et = x.a.e3cfff7c,
        _t = x.a.a8ed0eca,
        Ot = { component: 'low_quality_timeline' },
        St = function (e) {
          var t = e.children
          return y.createElement(Te.a, { style: wt.socialProofContainer }, t)
        },
        It = (function (e) {
          u()(n, e)
          var t = bt(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(
                l()(e),
                '_isPinnedInboxEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  e.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              m()(
                l()(e),
                '_isVDLEnabled',
                e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
              ),
              m()(l()(e), 'state', { showActionMenu: !1, showConfirmation: !1 }),
              m()(l()(e), '_renderConfirmationSheet', function () {
                var t = e.props.conversationId
                return y.createElement(Le.a, {
                  confirmButtonLabel: vt.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: vt.header,
                  onCancel: e._handleHideConfirmation,
                  onConfirm: e._deleteConversation(t),
                  text: vt.text,
                })
              }),
              m()(l()(e), '_renderMenu', function (t) {
                var n = t.isFocused,
                  r = t.isFocusedWithin,
                  a = t.isHovered,
                  o = e.state.showActionMenu,
                  c = function () {
                    e.setState({ showActionMenu: !0 })
                  },
                  i = !He.a.isEnabled || n || r || a || o
                return y.createElement(Ae.a.Consumer, null, function (t) {
                  return y.createElement(Be.a, {
                    onClick: c,
                    renderActionMenu: e._renderActionMenu,
                    style: i ? wt.menu : wt.hiddenMenu,
                  })
                })
              }),
              m()(l()(e), '_renderActionMenu', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.conversationId,
                  o = e.context.history,
                  c = null == r ? void 0 : r.notifications_disabled,
                  i = {
                    Icon: ot,
                    isEmphasized: !0,
                    onClick: e._handleDeleteMenuItemClick,
                    text: yt,
                    withBottomBorder: !0,
                  },
                  l = [
                    {
                      Icon: ct.a,
                      onClick: function () {
                        return e._handleReportMenuItemClick(o)()
                      },
                      text: gt,
                      withBottomBorder: !0,
                    },
                    {
                      Icon: c ? it.a : dt,
                      onClick: function () {
                        return e._handleSnoozeMenuItemClick(a)
                      },
                      text: c ? _t : Et,
                      withBottomBorder: !0,
                    },
                    i,
                  ]
                return y.createElement(Fe.a, {
                  items: l,
                  onCloseRequested: e._handleHideMenu(t),
                  shouldCloseOnClick: !0,
                })
              }),
              m()(l()(e), '_renderConversationActions', function (t) {
                var n = t.isFocused,
                  r = t.isFocusedWithin,
                  a = t.isHovered
                switch (e.props.inboxType) {
                  case je.c.PRIMARY:
                    return e._isPinnedInboxEnabled
                      ? e._renderMenu({ isFocused: n, isFocusedWithin: r, isHovered: a })
                      : null
                  case je.c.SECONDARY:
                  case je.c.TERTIARY:
                    return e._renderX()
                  default:
                    return null
                }
              }),
              m()(l()(e), '_renderConversationEndCell', function () {
                var t = e.props,
                  n = t.inboxType,
                  r = t.searchQuery,
                  a = t.unread
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
                switch (n) {
                  case je.c.PRIMARY:
                    return e._isVDLEnabled ? a : r ? null : e._renderTimestamp()
                  case je.c.SECONDARY:
                    return e._isVDLEnabled ? a : null
                  default:
                    return null
                }
              }),
              m()(l()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var n = Object(Pe.b)(t.icon)
                return y.createElement(
                  I.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? y.createElement(n, { style: wt.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              m()(l()(e), '_renderSocialProof', function (t) {
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
                      c = e._isVDLEnabled ? { marginLeft: 0 } : null
                    return y.createElement(
                      St,
                      null,
                      y.createElement(Ue.a, {
                        displayFacepileInline: !0,
                        knownFollowersAvatarUrls: a,
                        knownFollowersCount: r.total,
                        knownFollowersNames: o,
                        textStyle: c,
                        withFacepile: !e._isVDLEnabled,
                      }),
                    )
                  default:
                    return null
                }
              }),
              m()(l()(e), '_renderSearchConversationPreview', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.perspective,
                  a = t.searchQuery,
                  o = n ? Object(Re.a)(n, r) : [],
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
                        n = null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase().includes(a)
                      return e.id_str !== r && (n && c.push(e.name), !n)
                    })
                    .map(function (e) {
                      return e.name
                    })
                    .sort(i),
                  s = c.sort(i).concat(l)
                if (n) {
                  if (n.type === M.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var u = o.map(function (e) {
                        return e.user
                      }),
                      d = A()(u, 1)[0]
                    return y.createElement(Ve.a, { color: 'gray700', screenName: d.screen_name })
                  }
                  var p = Object(Ge.a)(s, !0)
                  return y.createElement(I.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              m()(l()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.conversationId,
                  a = e.context.loggedInUserId,
                  o = Object(oe.i)(n, a),
                  c = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP
                return y.createElement(Ae.a.Consumer, null, function (t) {
                  return y.createElement(
                    ze.a,
                    {
                      renderContent: function (n, a) {
                        return y.createElement(F.a, {
                          dismiss: n,
                          flatBorders: 'sheet' === a,
                          isGroup: c,
                          onBlockClick: e._blockUser(o.idStr),
                          onDeleteClick: e._deleteConversation(r),
                          onReportClick: e._handleReportMenuItemClick(t),
                          requestorScreenName: o.screenName,
                          showBlock: !c,
                          showCancel: 'sheet' === a,
                          showDelete: !0,
                        })
                      },
                    },
                    y.createElement(We.a, {
                      accessibilityLabel: mt,
                      icon: y.createElement(pt.a, { style: e._isVDLEnabled ? wt.xIcon : void 0 }),
                      onPress: e._handleXPress,
                      style: e._isVDLEnabled ? wt.vdlXButton : wt.xButton,
                      type: e._isVDLEnabled ? void 0 : 'destructiveText',
                    }),
                  )
                })
              }),
              m()(l()(e), '_handleDeleteMenuItemClick', function () {
                e.setState({ showConfirmation: !0 })
              }),
              m()(l()(e), '_handleHideMenu', function (t) {
                return function () {
                  t && t(), e.setState({ showActionMenu: !1 })
                }
              }),
              m()(l()(e), '_handleReportMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.conversationId,
                    o = n.inboxType
                  if (a) {
                    r.scribeAction('report')
                    var c = Object(oe.f)(a, window.location.pathname, r.contextualScribeNamespace, o)
                    t.push(c)
                  }
                }
              }),
              m()(l()(e), '_handleSnoozeMenuItemClick', function (t) {
                var n = e.props,
                  r = n.conversation,
                  a = n.disableNotifications,
                  o = n.enableNotifications
                ;(null == r ? void 0 : r.notifications_disabled) ? o({ conversationId: t }) : a({ conversationId: t })
              }),
              m()(l()(e), '_handleXPress', function (e) {
                e.preventDefault()
              }),
              m()(l()(e), '_renderTimestamp', function () {
                var t = e.props.conversation,
                  n =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  r = [n ? wt.inlineNotificationsDisabledIcon : wt.notificationsDisabledIcon]
                return y.createElement(
                  y.Fragment,
                  null,
                  y.createElement(
                    Te.a,
                    { style: n && wt.inlineTimestamp },
                    t ? y.createElement(qe.a, { timestamp: Number(t.sort_timestamp) }) : null,
                    null != t && t.notifications_disabled ? y.createElement(dt, { style: r }) : null,
                  ),
                )
              }),
              m()(l()(e), '_deleteConversation', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.conversation,
                    o = n.createLocalApiErrorHandler,
                    c = n.inboxType,
                    i = n.leaveConversation,
                    l = n.position,
                    s = e.context.history,
                    u = null != a && a.participants ? Object.keys(a.participants).length : 0,
                    d = a && a.type === M.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    p = {
                      conversation_type: (null == a ? void 0 : a.type) === M.CONVERSATION_TYPE.GROUP ? 1 : 0,
                      conversation_id: t,
                      conversation_participant_count: u,
                      position: l,
                      inbox_type: Object(oe.h)(c),
                      entry_point: Ze.b.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    r.scribe({ element: 'thread', action: d, data: p }),
                    i({ conversationId: t }).catch(o({ showToast: !0 })),
                    s.replace(Object(oe.e)(c))
                }
              }),
              m()(l()(e), '_blockUser', function (t) {
                return function () {
                  var n = e.props,
                    r = n.addToast,
                    a = n.analytics,
                    o = n.block,
                    c = n.createLocalApiErrorHandler
                  o(t).then(function () {
                    r({ action: { label: $e.c, onAction: e._createUnblockUserHandler(t) }, text: $e.a })
                  }, c(B.a)),
                    a.scribeAction('block')
                }
              }),
              m()(l()(e), '_createUnblockUserHandler', function (t) {
                return function () {
                  var n = e.props,
                    r = n.analytics,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.unblock)(t).catch(a(Me.a)), r.scribeAction('unblock')
                }
              }),
              m()(l()(e), '_handleHideConfirmation', function () {
                e.setState({ showConfirmation: !1 })
              }),
              m()(l()(e), '_handleOnClick', function (t) {
                var n = e.props,
                  r = n.addRecentSearch,
                  a = n.analytics,
                  o = n.conversation,
                  c = n.conversationId,
                  i = n.onClick,
                  l = n.position,
                  s = n.searchQuery,
                  u = null != o && o.participants ? Object.keys(o.participants).length : 0,
                  d = (null == o ? void 0 : o.type) === M.CONVERSATION_TYPE.GROUP
                s &&
                  (a.scribe({
                    component: 'search',
                    element: 'conversation',
                    action: 'click',
                    data: {
                      conversation_id: c,
                      conversation_participant_count: u,
                      conversation_type: d ? Ze.g.GROUP : Ze.g.ONE_TO_ONE,
                      entry_point: Ze.b.ALL,
                      inbox_type: Ze.c.PRIMARY,
                      dm_search_result_type: Ze.a.CONVERSATION,
                      message_type: Ze.d.NOT_APPLICABLE,
                      position: l,
                    },
                  }),
                  a.scribe({ component: 'recent_search', action: 'add' }),
                  r(s)),
                  i(t, c, o, l)
              }),
              m()(l()(e), '_handleShowConfirmation', function (t) {
                var n = e.props.analytics
                t.stopPropagation(),
                  n.scribe(ht(ht({}, Ot), {}, { element: 'accessory_trashcan', action: 'click' })),
                  e.setState({ showConfirmation: !0 })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  var n = this.props.conversation,
                    r = null == n ? void 0 : n.conversation_id,
                    a = null == n ? void 0 : n.notifications_disabled,
                    o = null == n ? void 0 : n.last_read_event_id,
                    c = null == n ? void 0 : n.sort_event_id,
                    i = null == n ? void 0 : n.max_entry_id,
                    l = null == n ? void 0 : n.convo_label,
                    s = e.conversation,
                    u = null == s ? void 0 : s.conversation_id,
                    d = null == s ? void 0 : s.notifications_disabled,
                    p = null == s ? void 0 : s.last_read_event_id,
                    f = null == s ? void 0 : s.sort_event_id,
                    h = null == s ? void 0 : s.max_entry_id,
                    b = null == s ? void 0 : s.convo_label,
                    m = this.props,
                    y = m.filter,
                    v = m.isActive,
                    g = e.filter,
                    E = e.isActive,
                    _ = this.state.showConfirmation,
                    O = t.showConfirmation
                  return r !== u || a !== d || o !== p || c !== f || i !== h || v !== E || _ !== O || y !== g || l !== b
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversation,
                    r = t.filter,
                    a = t.isActive,
                    o = t.link,
                    c = t.perspective,
                    i = t.position,
                    l = t.searchQuery,
                    s = t.unread,
                    u = this.state.showConfirmation,
                    d = (null == n ? void 0 : n.entries) || [],
                    p = Object(xe.a)(d, function (e) {
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
                    f = [wt.root, s && !this._isVDLEnabled && wt.unread],
                    h = n && r && r(n),
                    b = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP,
                    m = this._isVDLEnabled && b
                  if (!n || !h) return null
                  var v = !!n.convo_label,
                    g = !n.trusted && !v,
                    E = this._isVDLEnabled ? 'xxxLarge' : 'xxLarge',
                    _ = this._renderConversationEndCell()
                  return !n || (!l && n.isSearchResultOnly)
                    ? null
                    : y.createElement(
                        y.Fragment,
                        null,
                        u ? this._renderConfirmationSheet() : null,
                        y.createElement(Qe.a, null, function (t) {
                          var r = t.isFocused,
                            s = t.isFocusedWithin,
                            u = t.isHovered
                          return y.createElement(
                            Ye.a,
                            {
                              accessibilityRole: 'tab',
                              accessibilityState: { selected: a },
                              link: {
                                pathname: null == o ? void 0 : o.pathname,
                                anchorless: !0,
                                state: ht(ht({}, null == o ? void 0 : o.state), {}, { position: i }),
                              },
                              onPress: e._handleOnClick,
                              style: f,
                              testID: De,
                            },
                            y.createElement(
                              Xe.a,
                              {
                                avatarCell: y.createElement(X.a, {
                                  conversation: n,
                                  perspective: c,
                                  withBadge: m,
                                  withVDLRefresh: e._isVDLEnabled,
                                }),
                                avatarSize: E,
                              },
                              y.createElement(
                                Te.a,
                                { style: wt.bodyColumn },
                                y.createElement(
                                  Te.a,
                                  { style: wt.titleContainer },
                                  y.createElement(K.b, {
                                    conversation: n,
                                    isSearchTitle: !!l,
                                    perspective: c,
                                    renderTimestamp: e._renderTimestamp,
                                    withScreenName: !l,
                                    withVDLRefresh: e._isVDLEnabled,
                                  }),
                                  y.createElement(
                                    Te.a,
                                    { style: wt.snippet },
                                    p && !l
                                      ? y.createElement(Ce, { conversationType: n.type, entry: p, perspective: c })
                                      : l
                                      ? e._renderSearchConversationPreview()
                                      : null,
                                  ),
                                  v ? e._renderConversationLabel(n) : null,
                                  g ? e._renderSocialProof(n) : null,
                                ),
                                _ ? y.createElement(Te.a, { style: wt.endCell }, _) : null,
                                e._renderConversationActions({ isFocused: r, isFocusedWithin: s, isHovered: u }),
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
      m()(It, 'contextType', g.a),
        m()(It, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var wt = Ke.a.create(function (e) {
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
        Ct = Object(ke.a)(Y(It), { page: 'messages', section: 'inbox' }),
        xt =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('JtPf'),
          n('uFXj'),
          n('M+/F'),
          n('hBpG'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        Pt = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        Rt = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: Pt, sliceItems: xt }
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
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'DM_SEARCH_ALL_CONTEXT',
              ),
              fetchSearchIfNeeded: t.fetchIfNeeded,
            }
          }),
        jt = x.a.b08821f3,
        Dt = x.a.e047b8fa,
        Mt = Ke.a.create(function (e) {
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
          var t = Object(ke.b)(),
            n = e.clearRecentSearches,
            r = e.headerText,
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
            l = [Mt.root, o && Mt.labelHeader]
          return y.createElement(
            Te.a,
            { style: l },
            y.createElement(
              Te.a,
              { style: Mt.iconContainer },
              (i = a) ? y.createElement(i, { style: Mt.icon }) : null,
              y.createElement(I.b, { size: 'headline1', weight: 'heavy' }, r),
            ),
            c
              ? y.createElement(
                  We.a,
                  { accessibilityLabel: jt, onPress: n, style: Mt.backButton, type: 'onMediaWhiteFilled' },
                  Dt,
                )
              : null,
          )
        },
        kt = n('MDbM'),
        Lt = n('v//M'),
        Ht = n('0yYu'),
        At = n('lBmi'),
        Bt = n('6ZHn')
      function Ft(e) {
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
      var Nt = x.a.g2fd3205,
        Ut = x.a.c94ac69d,
        Vt = x.a.ffd9cfe6,
        Gt = (function (e) {
          u()(n, e)
          var t = Ft(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
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
                  n = t.groupConversationIds,
                  r = t.peopleSearchConversationIds,
                  a = t.renderEmptyState,
                  o = r.length && n.length,
                  c = e._groupBucketSize < n.length,
                  i = e._peopleBucketSize < r.length
                return (null == n ? void 0 : n.length) || r.length
                  ? y.createElement(
                      y.Fragment,
                      null,
                      r.length ? e._renderPeopleSection() : null,
                      o && !i ? y.createElement(Ht.a, null) : null,
                      i ? e._renderDMSearchFooter('People') : null,
                      n.length ? e._renderGroupsSection() : null,
                      c ? e._renderDMSearchFooter('Groups') : null,
                    )
                  : a()
              }),
              m()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSearchIfNeeded)().catch(n())
              }),
              m()(l()(e), '_renderDMSearchFooter', function (t) {
                var n = e.props.location
                return y.createElement(
                  Te.a,
                  { style: zt.header },
                  y.createElement(I.b, { link: { pathname: n.pathname, state: { tab: t } } }, Vt),
                )
              }),
              m()(l()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return y.createElement(Tt, { headerText: t, icon: n })
              }),
              m()(l()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  r = t.renderInboxItem
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: At.a, headerText: Ut }),
                  n
                    .map(function (e) {
                      return e ? r(n)(e) : null
                    })
                    .slice(0, e._groupBucketSize),
                )
              }),
              m()(l()(e), '_renderPeopleSection', function () {
                var t = e.props,
                  n = t.peopleSearchConversationIds,
                  r = t.renderInboxItem
                return y.createElement(
                  y.Fragment,
                  null,
                  e._renderDMHeader({ icon: Bt.a, headerText: Nt }),
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
            c()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.fetchStatus,
                    r = t.module
                  e.module !== r && n !== kt.a.FAILED && this._handleFetch()
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
                  return y.createElement(Lt.a, {
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
      m()(Gt, 'contextType', g.a)
      var zt = Ke.a.create(function (e) {
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
        qt = n('wAC9'),
        Qt = (n('1IsZ'), n('IAdD'), n('xPna'))
      function Yt(e, t) {
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
      function Xt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Yt(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Yt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Kt = function (e) {
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
          null != e && e.entries && (r = Xt(Xt({}, r), {}, { entries: null == e ? void 0 : e.entries })),
          Object(Qt.a)(r)
        )
      }
      function $t(e, t) {
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
      function Zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $t(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $t(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Jt = function (e) {
          return Object(qt.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(Ze.e, '-').concat(e),
            getEndpointParams: function (t) {
              return Zt(Zt({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Kt,
          })
        },
        en = function (e, t) {
          return t.query
        },
        tn = Object(_.a)().propsFromState(function () {
          return {
            sliceModule: Object(U.createSelector)(en, function (e) {
              return e ? Jt(e) : void 0
            }),
          }
        })(function (e) {
          var t = e.loadingLabel,
            n = e.location,
            r = e.query,
            a = e.renderEmptyState,
            o = e.renderInboxItem,
            c = e.sliceModule
          return c
            ? y.createElement(Wt, {
                loadingLabel: t,
                location: n,
                module: c,
                query: r,
                renderEmptyState: a,
                renderInboxItem: o,
              })
            : a()
        }),
        nn = M.selectRecentSearches,
        rn = function (e, t) {
          return t.query ? M.selectSearchConversations(e, t.query) : []
        },
        an = function (e, t) {
          return t.query ? M.selectSearchFetchStatus(e, t.query) : T.a.LOADED
        },
        on = function (e, t) {
          return t.conversationIds || []
        },
        cn = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        ln = Object(_.a)()
          .propsFromState(function () {
            return { conversationIds: on, recentSearches: nn, searchFetchStatus: an, searchConversationIds: rn }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              r = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: cn(r, t),
            }
          })
          .propsFromActions(function () {
            return {
              addRecentSearch: M.addRecentSearches,
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SEARCH',
              ),
              search: M.searchConversations,
              clearRecentSearch: M.clearRecentSearch,
              clearRecentSearches: M.clearRecentSearches,
            }
          }),
        sn = n('VY6S'),
        un = n('s14A'),
        dn = n('j7Bv'),
        pn = n('VwDm'),
        fn = n('hOZg')
      function hn(e) {
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
      var bn = x.a.dbd5d40f,
        mn = (function (e) {
          u()(n, e)
          var t = hn(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.clearRecentSearch,
                    n = e.handleRecentSearchClick,
                    r = e.recentSearch,
                    a = y.createElement(dn.a, { Icon: pn.a, color: 'neutral', size: 'xLarge', style: yn.searchIcon }),
                    o = [yn.listItemView, yn.bottomBorder]
                  return y.createElement(
                    Ye.a,
                    { onPress: n, style: o },
                    y.createElement(
                      Te.a,
                      null,
                      y.createElement(
                        Xe.a,
                        { avatarCell: a, avatarSize: 'xLarge', cellStyle: yn.avatarColumn },
                        y.createElement(
                          Te.a,
                          { style: yn.container },
                          y.createElement(I.b, { numberOfLines: 1 }, r),
                          y.createElement(We.a, {
                            accessibilityLabel: bn,
                            borderColor: 'transparent',
                            icon: y.createElement(fn.a, null),
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
        yn = Ke.a.create(function (e) {
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
        vn = mn
      function gn(e, t) {
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
      function En(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? gn(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : gn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _n = function (e) {
        return Object(qt.a)({
          contextSuffix: 'DM_GROUP_SEARCH_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.DirectMessagesGraphQL.fetchDMGroupSearch
          },
          sliceKey: ''.concat(Ze.e, '-groups-').concat(e),
          getEndpointParams: function (t) {
            return En(En({}, t), {}, { query: e })
          },
          mapEntitiesToActions: Kt,
        })
      }
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
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : On(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var In = function (e) {
          return Object(qt.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(Ze.e, '-people-').concat(e),
            getEndpointParams: function (t) {
              return Sn(Sn({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Kt,
          })
        },
        wn = function (e, t) {
          return t.query
        },
        Cn = function (e, t) {
          return t.tabType
        },
        xn = Object(_.a)().propsFromState(function () {
          return {
            sliceModule: Object(U.createSelector)(Cn, wn, function (e, t) {
              var n = t && e === Ze.f.PEOPLE
              return t && e === Ze.f.GROUPS ? _n(t) : n ? In(t) : void 0
            }),
          }
        }),
        Pn = n('FS1z'),
        Rn = xn(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            r = e.renderEmptyState,
            a = e.renderInboxItem,
            o = e.sliceModule
          return o
            ? y.createElement(Pn.a, {
                footer: t,
                module: o,
                noItemsRenderer: r,
                onScrollEnd: n,
                renderer: a([]),
                withoutHeadroom: !0,
              })
            : r()
        }),
        jn = n('VPAj')
      function Dn(e, t) {
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
      function Mn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Dn(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Dn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Tn = Mn(
          Mn({}, n('7n04').a),
          {},
          { initialScrollHeadroom: Object(jn.a)(0), scrollHeadroom: Object(jn.a)(0), pinToNewestWhenAtNewest: !0 },
        ),
        kn = n('TEoO'),
        Ln = n('IG4P'),
        Hn = n('RJrc'),
        An = n('TnY3'),
        Bn = n('FIs5'),
        Fn = n('6OUF'),
        Nn = n('k/OQ'),
        Un = n('95Se')
      function Vn(e, t) {
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
      function Gn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Vn(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Vn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function zn(e) {
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
      var Wn = 'dmSearchInbox',
        qn = function (e) {
          return e
        },
        Qn = x.a.b08821f3,
        Yn = x.a.a66ac766,
        Xn = x.a.fe61929d,
        Kn = x.a.b9dae4f4,
        $n = x.a.e7fb2027,
        Zn = x.a.b92a21d8,
        Jn = x.a.jdc67c42,
        er = x.a.f08940ab,
        tr = x.a.gaae1fd5,
        nr = x.a.f8321d82,
        rr = x.a.g2fd3205,
        ar = x.a.c94ac69d,
        or = x.a.fb3c8e74,
        cr = (function (e) {
          u()(n, e)
          var t = zn(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
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
                  n = t.analytics,
                  r = t.query,
                  a = e.state.debouncedQuery
                return a && r
                  ? (n.scribe({ component: 'search', element: 'results', action: 'empty' }),
                    y.createElement(Bn.a, {
                      buttonLink: '/messages/compose',
                      buttonText: er,
                      header: Zn({ query: a }),
                      message: Jn,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : y.createElement(
                      Te.a,
                      { style: ir.emptyState },
                      y.createElement(I.b, { align: 'center', color: 'gray700' }, tr),
                    )
              }),
              m()(l()(e), '_renderRecentSearches', function () {
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
                        headerText: or,
                        withClearButton: !0,
                      }),
                      a.map(function (t) {
                        return y.createElement(vn, {
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
              m()(l()(e), '_renderAllDMSearchResultsTab', function () {
                var t = e.props,
                  n = t.location,
                  r = t.renderInboxItem,
                  a = e.state.debouncedQuery
                return a
                  ? y.createElement(tn, {
                      loadingLabel: Yn,
                      location: n,
                      query: a,
                      renderEmptyState: e._renderEmptyDMSearchInbox,
                      renderInboxItem: r,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              m()(l()(e), '_renderConversationsTab', function (t) {
                var n = e.props.renderInboxItem,
                  r = e.state.debouncedQuery
                return y.createElement(Rn, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  query: r,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: n,
                  tabType: t ? Ze.f.GROUPS : Ze.f.PEOPLE,
                })
              }),
              m()(l()(e), '_renderTabContent', function () {
                var t = e.props.location,
                  n = ((null == t ? void 0 : t.state) || {}).tab
                return n === rr
                  ? e._renderConversationsTab(!1)
                  : n === ar
                  ? e._renderConversationsTab(!0)
                  : e._renderAllDMSearchResultsTab()
              }),
              m()(l()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.accessibilityTitle,
                  r = t.renderInboxItem,
                  a = t.searchConversationIds,
                  o = e.state.isRefreshing
                return y.createElement(
                  un.a,
                  null,
                  y.createElement(
                    Ln.a,
                    { isRefreshing: o, onRefresh: e._handlePullToRefresh },
                    y.createElement(kn.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: Tn,
                      assumedItemHeight: 100,
                      cacheKey: Wn,
                      footer: e._renderFooter(),
                      identityFunction: qn,
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
              m()(l()(e), '_renderFooter', function () {
                return e.state.isLoadingMore
                  ? y.createElement(Hn.a, null)
                  : y.createElement(
                      Te.a,
                      { style: ir.footerContainer },
                      y.createElement(I.b, { align: 'center', size: 'body', weight: 'bold' }, $n),
                      y.createElement(
                        Qe.a,
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
                          Kn,
                        ),
                      ),
                    )
              }),
              m()(l()(e), '_clearRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.clearRecentSearches
                n.scribe({ component: 'recent_search', action: 'clear' }), r()
              }),
              m()(l()(e), '_handleComposeButtonPress', function () {
                e.props.analytics.scribe({ component: 'search', element: 'empty_results', action: 'compose' })
              }),
              m()(l()(e), '_handleFooterClick', function () {
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
              m()(l()(e), '_handleRefetchSearch', function () {
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
              m()(l()(e), '_handlePullToRefresh', function () {
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
              m()(l()(e), '_handleSearchChangeInner', function (t) {
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
              m()(l()(e), '_handleSearchChangeDebounced', Object(sn.a)(e._handleSearchChangeInner, 200)),
              m()(l()(e), '_handleSearchChange', function (t) {
                var n = t.currentTarget.value,
                  r = e.props.onQueryChange
                ;((n && n.trim()) || !n) && (r(n), e._handleSearchChangeDebounced(n))
              }),
              m()(l()(e), '_handleNearEnd', function () {
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
              m()(l()(e), '_handleScrollEnd', function () {
                var t = e.props,
                  n = t.addRecentSearch,
                  r = t.analytics,
                  a = t.query
                e.state.debouncedQuery && a && (n(a), r.scribe({ component: 'recent_search', action: 'add' }))
              }),
              m()(l()(e), '_handleSearchClear', function () {
                return e._handleSearchChangeInner('')
              }),
              m()(l()(e), '_handleHideRecentSearches', function () {
                ;(0, e.props.hideRecentSearches)()
              }),
              m()(l()(e), '_handleAddRecentSearch', function (t) {
                var n = t.currentTarget.value,
                  r = e.props,
                  a = r.addRecentSearch,
                  o = r.analytics
                n &&
                  (a(n),
                  o.scribe({ component: 'recent_search', action: 'add' }),
                  e._textInputRef && e._textInputRef.blur())
              }),
              m()(l()(e), '_handleRecentSearchClick', function (t) {
                var n = e.props,
                  r = n.analytics
                ;(0, n.onQueryChange)(t),
                  r.scribe({ component: 'recent_search', action: 'click' }),
                  e._handleSearchChangeInner(t)
              }),
              m()(l()(e), '_handleClearRecentSearch', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  o = r.clearRecentSearch
                t.stopPropagation(), t.preventDefault(), a.scribe({ component: 'recent_search', action: 'clear' }), o(n)
              }),
              e
            )
          }
          return (
            c()(n, [
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
                    o = [ir.searchInput, a ? ir.searchInputBorder : void 0],
                    c = ((null == t ? void 0 : t.state) || {}).tab,
                    i = [nr, rr, ar].map(function (e) {
                      return {
                        key: e,
                        label: e,
                        isActive: function () {
                          return c === e || (!c && e === nr)
                        },
                        to: Gn(Gn({}, t), {}, { state: Gn(Gn({}, t.state), {}, { tab: e }) }),
                      }
                    })
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(
                      Te.a,
                      { style: o },
                      y.createElement(We.a, {
                        accessibilityLabel: Qn,
                        icon: y.createElement(Un.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      y.createElement(Fn.a, {
                        Icon: pn.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: Xn,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || c === rr || c === ar)
                      ? y.createElement(y.Fragment, null, y.createElement(Nn.a, { links: i }), this._renderTabContent())
                      : y.createElement(Lt.a, {
                          accessibilityLabel: Yn,
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
      m()(cr, 'contextType', g.a), m()(cr, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var ir = Ke.a.create(function (e) {
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
        lr = Object(An.a)(ln(cr)),
        sr = n('dwig'),
        ur = n('QB0K'),
        dr = n('Avzu'),
        pr = n('FRNI')
      function fr(e) {
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
      var hr = x.a.h845f281,
        br = x.a.f325afc3,
        mr = (function (e) {
          u()(n, e)
          var t = fr(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  return y.createElement(ur.a, {
                    accessibilityLabel: hr,
                    href: '/messages/compose',
                    icon: y.createElement(dr.a, null),
                    label: hr,
                    scribeComponent: 'floating_dm_button',
                    shortLabel: br,
                    testID: pr.a.message,
                  })
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        yr = n('tI3i'),
        vr = n.n(yr),
        gr = n('883S'),
        Er = n('yoO3'),
        _r = n('GSsg'),
        Or = n('2g+p'),
        Sr = n('mw9i'),
        Ir = n('BcsE'),
        wr = n('+d3d')
      function Cr(e) {
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
      var xr = function (e) {
          return e
        },
        Pr = x.a.a66ac766,
        Rr = x.a.fe61929d,
        jr = (function (e) {
          u()(n, e)
          var t = Cr(n)
          function n(e, r) {
            var o
            return (
              a()(this, n),
              (o = t.call(this, e, r)),
              m()(l()(o), 'state', { showSearchView: !1, searchQuery: '' }),
              m()(
                l()(o),
                '_modularSearchEnabled',
                o.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              m()(l()(o), '_render', function () {
                return o.state.showSearchView ? o._renderFocusedSearch() : o._renderInbox()
              }),
              m()(l()(o), '_renderFocusedSearch', function () {
                var e = o.props,
                  t = e.accessibilityTitle,
                  n = e.analytics,
                  r = e.conversationIds,
                  a = o.state.searchQuery
                return y.createElement(lr, {
                  accessibilityTitle: t,
                  analytics: n,
                  conversationIds: r,
                  hideRecentSearches: o._hideRecentSearches,
                  onQueryChange: o._handleQueryChange,
                  query: a,
                  renderInboxItem: o._renderInboxItem,
                })
              }),
              m()(l()(o), '_renderInbox', function () {
                var e = o.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  r = e.footer,
                  a = e.isDrawer,
                  c = e.isRefreshing,
                  i = e.renderEmptyDMInbox,
                  l = e.renderStickyContent,
                  s = e.virtualScrollerCacheKey,
                  u = e.withDmSearch,
                  d =
                    o.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    o.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  p = [Dr.searchInput, d ? void 0 : Dr.searchInputBorder],
                  f = y.createElement(
                    y.Fragment,
                    null,
                    u
                      ? y.createElement(
                          Te.a,
                          { onClick: o._handleSearchClick, style: p },
                          y.createElement(Fn.a, {
                            Icon: pn.a,
                            autoComplete: 'off',
                            isCompact: !0,
                            onChange: o._handleSearchChange,
                            placeholder: Rr,
                            withClearButton: !0,
                          }),
                        )
                      : null,
                    l ? l() : null,
                  )
                return y.createElement(
                  Ln.a,
                  { isRefreshing: c, onRefresh: o._handlePullToRefresh },
                  s && n
                    ? y.createElement(kn.a, {
                        accessibilityRole: 'tablist',
                        accessibilityTitle: t,
                        anchoring: Tn,
                        assumedItemHeight: 100,
                        cacheKey: s,
                        footer: r,
                        header: f,
                        identityFunction: xr,
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
              m()(l()(o), '_handleNearEnd', function () {
                o._handleHistoryRequest()
              }),
              m()(l()(o), '_handleQueryChange', function (e) {
                o.setState({ searchQuery: e })
              }),
              m()(l()(o), '_handleSearchChange', function (e) {
                e.currentTarget.value
                o.state.showSearchView || o.setState({ showSearchView: !0 })
              }),
              m()(l()(o), '_handleSearchClick', function () {
                o.props.analytics.scribe({ component: 'search', action: 'click' }), o.setState({ showSearchView: !0 })
              }),
              m()(l()(o), '_hideRecentSearches', function () {
                o.setState({ showSearchView: !1, searchQuery: '' })
              }),
              m()(l()(o), '_renderInboxItem', function (e) {
                return function (t, n) {
                  var r = o.context.loggedInUserId,
                    a = o.props.location,
                    c = o.state.searchQuery,
                    i = { pathname: '/messages/'.concat(t), state: null == a ? void 0 : a.state },
                    l = t && null != e && e.length ? e.indexOf(t) : null,
                    s = Object(Ir.a)(l) ? l + 1 : 0
                  return (
                    vr()(!!r, 'loggedInUserId must be defined'),
                    n && n(!0),
                    y.createElement(v.a, { exact: !1, path: i.pathname }, function (e) {
                      return y.createElement(Ct, {
                        conversationId: t,
                        inboxType: o.props.inboxType,
                        isActive: e,
                        key: t,
                        link: i,
                        onClick: o._handleConversationClick,
                        perspective: r,
                        position: s,
                        searchQuery: c,
                      })
                    })
                  )
                }
              }),
              m()(l()(o), '_handleFetchInitialWrapper', function () {
                o._handleFetchInitial()
              }),
              m()(l()(o), '_handleFetchInitial', function () {
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
              m()(l()(o), '_handleConversationClick', function (e, t, n, r) {
                var a = o.props,
                  c = a.analytics,
                  i = a.customCellClick,
                  l = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  s = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP
                c.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: o.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: l,
                    conversation_type: s ? Ze.g.GROUP : Ze.g.ONE_TO_ONE,
                    position: r,
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
                if ('background' !== Or.a.currentState) return o._updateLastSeenEventId()
              }),
              m()(l()(o), '_updateLastSeenEventId', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.updateLastSeenEventId)().catch(t())
              }),
              (o._fab = y.createElement(mr, null)),
              o
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.createLocalApiErrorHandler,
                    r = t.fetchInboxHistory,
                    a = t.fetchUpdates
                  return (
                    (this._updatePolling = new _r.a(
                      function () {
                        a().then(e._updateLastSeenEventIdIfActive, n(gr.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(wr.a)(function () {
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
                    Er.a,
                    null,
                    y.createElement(D, null),
                    y.createElement(
                      sr.a,
                      { component: Sr.a, fab: this._fab, style: Dr.root },
                      y.createElement(Lt.a, {
                        accessibilityLabel: Pr,
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
      m()(jr, 'contextType', g.a),
        m()(jr, 'defaultProps', { conversationIds: [], inboxType: je.c.PRIMARY, isDrawer: !1, withDmSearch: !1 })
      var Dr = Ke.a.create(function (e) {
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
      t.a = Object(An.a)(L(jr))
    },
  },
])
//# sourceMappingURL=WIPED
