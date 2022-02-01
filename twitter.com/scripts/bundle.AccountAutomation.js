;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    '7FtF': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('2G9S'), n('ERkP')),
        g = n.n(y),
        v = n('P1r1'),
        E = n('G6rE'),
        w = n('rxPX'),
        O = n('0KEI'),
        C = Object(w.a)()
          .propsFromState(function () {
            return { fetchStatus: v.o, loggedInUser: E.e.selectLoggedInUser }
          })
          .propsFromActions(function () {
            return {
              fetchSettingsIfNeeded: v.f,
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)('SETTINGS_LOADER'),
            }
          }),
        _ = n('v//M'),
        S = n('3XMw'),
        L = n.n(S),
        A = n('M2mT'),
        B = 'settingsDetailSave',
        D = n('mw9i'),
        T = n('0yYu'),
        R = n('/yvb'),
        x = n('rHpw')
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
            r = b()(e)
          if (t) {
            var o = b()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var k = L.a.i2209530,
        F = (function (e) {
          s()(n, e)
          var t = P(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              m()(l()(e), '_renderWithFetchSettings', function () {
                var t = e.props.fetchStatus
                return g.a.createElement(_.a, { fetchStatus: t, onRequestRetry: e._handleFetch, render: e._render })
              }),
              m()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.onSubmit,
                  o = t.submitDisabled,
                  a = t.submitLabel,
                  c = t.submitType,
                  i = t.withMarginBottom
                return g.a.createElement(
                  D.a,
                  { style: [j.contentRoot, i && j.withMarginBottom] },
                  n,
                  r
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(T.a, null),
                        g.a.createElement(
                          D.a,
                          { style: j.buttonContainer },
                          g.a.createElement(R.a, { disabled: o, onPress: r, style: j.button, testID: B, type: c }, a),
                        ),
                      )
                    : null,
                )
              }),
              m()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSettingsIfNeeded)().catch(n())
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
                key: 'getBackLocation',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.loggedInUser ? '/settings' : '/settings/account/personalization'
                  return t && t.pathname === n ? '/' : n
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUser,
                    n = e.onBackClick,
                    r = e.rightControl,
                    o = e.screenType,
                    a = e.secondaryBar,
                    c = e.title,
                    i = e.withBottomBorder,
                    l = this.getBackLocation(),
                    u = t ? '@'.concat(t.screen_name) : void 0
                  return g.a.createElement(
                    A.a,
                    {
                      backLocation: l,
                      onBackClick: n,
                      rightControl: r,
                      screenType: o,
                      secondaryBar: a,
                      showSubtitleOnWideDetail: !1,
                      subtitle: u,
                      title: c,
                      withBottomBorder: i,
                    },
                    t ? this._renderWithFetchSettings() : this._render(),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(F, 'defaultProps', { submitLabel: k, submitType: 'brandFilled', withMarginBottom: !0 })
      var j = x.a.create(function (e) {
        return {
          contentRoot: {
            backgroundColor: e.colors.cellBackground,
            backgroundClip: 'content-box',
            justifyContent: 'flex-start',
          },
          buttonContainer: {
            backgroundColor: e.colors.cellBackground,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginVertical: 0,
            marginHorizontal: 'auto',
            paddingVertical: e.spaces.space12,
            paddingHorizontal: 0,
          },
          button: { marginVertical: 0, marginHorizontal: e.spaces.space12 },
          withMarginBottom: {
            marginBottom: 'calc('.concat(e.spaces.space64, ' + ').concat(x.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.a = C(F)
    },
    Fcaw: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return m
      }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'c', function () {
          return g
        }),
        n.d(t, 'b', function () {
          return v
        }),
        n.d(t, 'a', function () {
          return E
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        o = n.n(r),
        a = (n('yH/f'), n('oEOe')),
        c = n('iD2S'),
        i = n.n(c),
        l = n('kGix'),
        u = n('Ssj5')
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
      function d(e) {
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
      var f = 'accountTaxonomy',
        p =
          ('rweb/'.concat(f),
          i()({ account_label: { disableStatus: l.a.NONE, fetchStatus: l.a.NONE, managed_label: void 0 } })),
        b = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE',
        }),
        h = Object.freeze({
          REQUEST: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST',
          SUCCESS: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS',
          FAILURE: 'rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE',
        })
      u.a.register(
        o()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case b.REQUEST:
              return d(d({}, e), {}, { account_label: d(d({}, e.account_label), {}, { fetchStatus: l.a.LOADING }) })
            case b.SUCCESS:
              var n, r, o
              return d(
                d({}, e),
                {},
                {
                  account_label: d(
                    d(
                      {},
                      null == t ||
                        null === (n = t.payload) ||
                        void 0 === n ||
                        null === (r = n.user) ||
                        void 0 === r ||
                        null === (o = r.result) ||
                        void 0 === o
                        ? void 0
                        : o.account_label,
                    ),
                    {},
                    { fetchStatus: l.a.LOADED },
                  ),
                },
              )
            case b.FAILURE:
              return d(d({}, e), {}, { account_label: d(d({}, e.account_label), {}, { fetchStatus: l.a.FAILED }) })
            case h.REQUEST:
              return d(d({}, e), {}, { account_label: d(d({}, e.account_label), {}, { disableStatus: l.a.LOADING }) })
            case h.SUCCESS:
              return d(
                d({}, e),
                {},
                { account_label: { managed_label: void 0, fetchStatus: l.a.LOADED, disableStatus: l.a.LOADED } },
              )
            case h.FAILURE:
              return d(d({}, e), {}, { account_label: d(d({}, e.account_label), {}, { disableStatus: l.a.FAILED }) })
            default:
              return e
          }
        }),
      )
      var m = function (e) {
          var t, n, r
          return null === (t = e.accountTaxonomy) ||
            void 0 === t ||
            null === (n = t.account_label) ||
            void 0 === n ||
            null === (r = n.managed_label) ||
            void 0 === r
            ? void 0
            : r.owner_screen_name
        },
        y = function (e) {
          var t, n
          return (
            (null === (t = e.accountTaxonomy) || void 0 === t || null === (n = t.account_label) || void 0 === n
              ? void 0
              : n.fetchStatus) || l.a.NONE
          )
        },
        g = function (e) {
          var t, n
          return (
            (null === (t = e.accountTaxonomy) || void 0 === t || null === (n = t.account_label) || void 0 === n
              ? void 0
              : n.disableStatus) || l.a.NONE
          )
        },
        v = function (e) {
          return function (t, n, r) {
            var o = r.api
            return Object(a.b)(t, { request: o.AccountTaxonomy.fetchUserAccountLabel, params: { userId: e } })({
              actionTypes: b,
              context: 'FETCH_USER_ACCOUNT_LABEL',
            })
          }
        },
        E = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(a.b)(e, { request: r.AccountTaxonomy.disableUserAccountLabel, params: {} })({
              actionTypes: h,
              context: 'DISABLE_USER_ACCOUNT_LABEL',
            })
          }
        }
    },
    M2mT: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('m3Bd'),
        o = n.n(r),
        a = n('VrFO'),
        c = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        u = n('1Pcy'),
        s = n.n(u),
        d = n('5Yy7'),
        f = n.n(d),
        p = n('N+ot'),
        b = n.n(p),
        h = n('AuHH'),
        m = n.n(h),
        y = n('KEM+'),
        g = n.n(y),
        v = (n('2G9S'), n('i4UL'), n('+/5o')),
        E = n('ERkP'),
        w = n.n(E),
        O = n('HPNB'),
        C = n('v6aA'),
        _ = n('VAZu'),
        S = n('wiP2'),
        L = n('Es6L'),
        A = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('rHpw'))
      function B(e, t) {
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var T = A.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: D(D({}, A.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: { position: 'sticky', top: 0 },
            appBarZindex: { backfaceVisibility: 'hidden', zIndex: e.componentZIndices.appBarZIndex },
          }
        }),
        R = n('MWbm'),
        x = n('yw4N'),
        P = n('TnY3'),
        k = n('cHvH'),
        F = n('3xLC')
      function j(e) {
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
          return b()(this, n)
        }
      }
      var U = (function (e) {
        f()(n, e)
        var t = j(n)
        function n() {
          var e
          c()(this, n)
          for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            g()(s()(e), '_renderChildren', function (t) {
              var n = e.props.children
              return e.context.rootDetailPerColumnScroll
                ? w.a.createElement(
                    R.a,
                    { style: T.fill },
                    w.a.createElement(
                      x.a,
                      { style: T.viewportView },
                      t ? e._renderInlineNav({ isTwoColumnLayout: !0, appBarScrollEnabled: !0 }) : null,
                      n,
                    ),
                  )
                : n
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
                return w.a.createElement(k.a, null, function (t) {
                  var n = t.windowWidth
                  return O.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
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
                    o()(e, [
                      'children',
                      'leftControl',
                      'screenType',
                      'showSubtitleOnRoot',
                      'showSubtitleOnWideDetail',
                      'withBottomBorder',
                      'withDetailOpen',
                    ]))
                return w.a.createElement(
                  w.a.Fragment,
                  null,
                  Object(L.a)()
                    ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                    : w.a.createElement(S.a.Configure, n),
                  t,
                )
              },
            },
            {
              key: '_renderForTwoColumnLayout',
              value: function () {
                var e = this,
                  t = this.context.rootDetailPerColumnScroll
                return w.a.createElement(C.a.Consumer, null, function (n) {
                  var r = n.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
                    o = t
                      ? !r && e._renderInlineNav({ isTwoColumnLayout: !0 })
                      : e._renderInlineNav({ isTwoColumnLayout: !0 })
                  return w.a.createElement(w.a.Fragment, null, o, e._renderChildren(r))
                })
              },
            },
            {
              key: '_renderInlineNav',
              value: function (e) {
                var t = e.appBarScrollEnabled,
                  n = void 0 !== t && t,
                  r = e.isTwoColumnLayout,
                  o = this.props,
                  a = o.SideNavButton,
                  c = o.TabBar,
                  i = o.TeamsSwitcher,
                  l = o.backLocation,
                  u = o.documentTitle,
                  s = o.headerless,
                  d = o.history,
                  f = o.leftControl,
                  p = o.middleControl,
                  b = o.onBackClick,
                  h = o.rightControl,
                  m = o.screenType,
                  y = o.searchBoxOptions,
                  g = o.secondaryBar,
                  E = o.showSubtitleOnRoot,
                  O = o.showSubtitleOnWideDetail,
                  C = o.subtitle,
                  L = o.title,
                  A = o.titleIconCell,
                  B = o.titleIconCellSize,
                  D = o.withBottomBorder,
                  x = o.withDetailOpen,
                  P = o.withSearchBox,
                  k = o.withTweetButton,
                  F = 'root' === m,
                  j = 'secondaryRoot' === m,
                  U = 'primaryDetail' === m,
                  I = (U && O) || (F && E),
                  H = F || (U && r),
                  M = F ? v.c : U ? v.a : void 0,
                  N = w.a.createElement(
                    R.a,
                    { style: n ? [T.appBarContainer, T.appBarZindex] : T.appBarZindex },
                    w.a.createElement(_.a, {
                      backLocation: l,
                      fixed: !1,
                      hideBackButton: H,
                      history: d,
                      leftControl: f,
                      middleControl: p,
                      onBackClick: b,
                      rightControl: h,
                      secondaryBar: n ? g : null,
                      subtitle: I ? C : void 0,
                      title: L,
                      titleDomId: M,
                      titleIconCell: A,
                      titleIconCellSize: B,
                      withBottomBorder: D,
                    }),
                  ),
                  W =
                    F || (j && x)
                      ? null
                      : w.a.createElement(S.a.Configure, {
                          SideNavButton: a,
                          TabBar: c,
                          TeamsSwitcher: i,
                          backLocation: l,
                          documentTitle: u,
                          headerless: s,
                          middleControl: p,
                          onBackClick: b,
                          rightControl: h,
                          searchBoxOptions: y,
                          subtitle: C,
                          title: L,
                          withSearchBox: P,
                          withTweetButton: k,
                        })
                return w.a.createElement(w.a.Fragment, null, W, N, n ? null : g)
              },
            },
          ]),
          n
        )
      })(w.a.Component)
      g()(U, 'contextType', F.a),
        g()(U, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(P.a)(U)
    },
    iD2S: function (e, t) {
      e.exports = function e(t) {
        return (
          Object.freeze(t),
          Object.getOwnPropertyNames(t).forEach(function (n) {
            !t.hasOwnProperty(n) ||
              null === t[n] ||
              ('object' != typeof t[n] && 'function' != typeof t[n]) ||
              Object.isFrozen(t[n]) ||
              e(t[n])
          }),
          t
        )
      }
    },
    jtO7: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        o = n.n(r),
        a = n('m3Bd'),
        c = n.n(a),
        i = n('ERkP'),
        l = n.n(i),
        u = n('t62R'),
        s = n('I4+6'),
        d = n('cm6r'),
        f = n('rHpw'),
        p = n('MWbm'),
        b = f.a.create(function (e) {
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
          r = e.color,
          a = e.label,
          i = c()(e, ['align', 'color', 'label']),
          h = s.a.generate({
            backgroundColor: f.a.theme.colors.transparent,
            color: f.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          p.a,
          { style: b.container },
          l.a.createElement(
            d.a,
            o()({}, i, { interactiveStyles: h, style: b.root }),
            l.a.createElement(u.b, { align: n, color: r }, a),
          ),
        )
      }
    },
    o1YB: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('2G9S'), n('uFXj'), n('ERkP')),
        g = n.n(y),
        v = n('t62R'),
        E = n('rHpw'),
        w = n('MWbm')
      function O(e) {
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
            var o = b()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var C = (function (e) {
        s()(n, e)
        var t = O(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            m()(l()(e), '_renderSubtextAndLink', function () {
              var t = e.props.subtext
              return g.a.createElement(v.b, { color: 'gray700', size: 'subtext2' }, t, ' ', e._renderLearnMore())
            }),
            m()(l()(e), '_renderLearnMore', function () {
              var t = e.props,
                n = t.learnMoreLabel,
                r = t.learnMoreLink
              return r && n ? g.a.createElement(v.b, { link: r, size: 'subtext2' }, n) : null
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
                  t = e.label,
                  n = e.learnMoreLabel,
                  r = e.learnMoreLink,
                  o = e.subtext,
                  a = e.withBottomBorder
                return g.a.createElement(
                  w.a,
                  { style: [_.root, a && _.bottomBorder] },
                  g.a.createElement(v.b, null, t),
                  o
                    ? n && r
                      ? this._renderSubtextAndLink()
                      : g.a.createElement(v.b, { color: 'gray700', size: 'subtext2' }, o)
                    : null,
                )
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      m()(C, 'defaultProps', { withBottomBorder: !0 })
      var _ = E.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          bottomBorder: {
            borderBottomWidth: e.borderWidths.small,
            borderBottomStyle: 'solid',
            borderBottomColor: e.colors.borderColor,
          },
        }
      })
      t.a = C
    },
    rYEW: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'changeManagingAccountLabel', function () {
          return J
        }),
        n.d(t, 'setManagingAccountLabel', function () {
          return X
        }),
        n.d(t, 'AccountAutomationScreen', function () {
          return se
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        o = n.n(r),
        a = n('Y9Ll'),
        c = n.n(a),
        i = n('1Pcy'),
        l = n.n(i),
        u = n('5Yy7'),
        s = n.n(u),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        b = n.n(p),
        h = n('KEM+'),
        m = n.n(h),
        y = n('ERkP'),
        g = n.n(y),
        v = n('Fcaw'),
        E = n('G6rE'),
        w = n('rxPX'),
        O = Object(w.a)()
          .propsFromState(function () {
            return {
              managingAccount: v.d,
              managingAccountFetchStatus: v.e,
              disableAccountLabelStatus: v.c,
              user: E.e.selectLoggedInUser,
            }
          })
          .propsFromActions(function () {
            return { disableUserAccountLabel: v.a, fetchUserAccountLabel: v.b }
          })
          .withAnalytics({ page: 'settings', section: 'account_automation' }),
        C = n('kGix'),
        _ = n('v//M'),
        S = n('3XMw'),
        L = n.n(S),
        A = n('yoO3'),
        B = n('7JQg'),
        D = n('7FtF'),
        T = n('MWbm'),
        R = n('Irs7'),
        x = n('4zmP'),
        P = n('csss'),
        k = n('o1YB'),
        F = n('0yYu'),
        j = n('jtO7'),
        U = n('feu+'),
        I = n('xHsv'),
        H = n('rHpw'),
        M = n('v6aA'),
        N = n('Oib4'),
        W = n('WtWS')
      function z(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                m()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Y(e) {
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
            var o = b()(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Z = L.a.d12d42db,
        G = L.a.ja854816,
        K = L.a.a2981062,
        J = L.a.aff4540e,
        X = L.a.b8b9d10f,
        Q = L.a.f21474bc,
        q = L.a.e0bc51f5,
        $ = L.a.i9028824,
        ee = L.a.b92190c1,
        te = L.a.fb03b399,
        ne = L.a.bd51ddfa,
        re = { page: 'settings', section: 'account_information', component: 'automation' },
        oe = { page: 'system', section: 'message' },
        ae = L.a.e91c15f5,
        ce = L.a.df035b80,
        ie = L.a.bd12cf34,
        le = L.a.cfd2f35d,
        ue = '/i/flow/enable_automated_account',
        se = (function (e) {
          s()(n, e)
          var t = Y(n)
          function n(e, r) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e, r)),
              m()(l()(a), '_handleHideCallout', function () {
                a.setState({ showCallout: !1 })
              }),
              m()(l()(a), '_handleShowCallout', function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                a.setState({ showCallout: !0, calloutIsError: t, calloutLabel: e })
              }),
              m()(l()(a), '_renderCallout', function () {
                var e = a.state,
                  t = e.calloutIsError,
                  n = e.calloutLabel,
                  r = t ? N.a : W.a,
                  o = t ? 'danger' : 'success'
                return g.a.createElement(
                  T.a,
                  { style: de.inlineCallout },
                  g.a.createElement(x.a, { Icon: r, headline: n || '', onClose: a._handleHideCallout, type: o }),
                )
              }),
              m()(l()(a), '_handleFetchUserAccountLabel', function () {
                var e = a.props,
                  t = e.fetchUserAccountLabel,
                  n = e.user,
                  r = null == n ? void 0 : n.id_str
                r && t(r)
              }),
              m()(l()(a), '_handleDisableUserAccountLabel', function () {
                ;(0, a.props.disableUserAccountLabel)(), a._handleToggleDisableConfirmation()
              }),
              m()(l()(a), '_handleToggleDisableConfirmation', function () {
                a.setState({ showDisableConfirmation: !a.state.showDisableConfirmation })
              }),
              m()(l()(a), '_renderUnassignedManagingAccountView', function () {
                return g.a.createElement(
                  T.a,
                  null,
                  g.a.createElement(P.a, { description: Q, label: X, link: ue }),
                  a.state.showCallout && a._renderCallout(),
                )
              }),
              m()(l()(a), '_renderAssignedManagingAccountView', function () {
                return g.a.createElement(
                  T.a,
                  null,
                  g.a.createElement(k.a, { label: K, subtext: a.props.managingAccount || '', withBottomBorder: !1 }),
                  g.a.createElement(P.a, { label: J, link: ue }),
                  a.state.showCallout && a._renderCallout(),
                  g.a.createElement(F.a, null),
                  g.a.createElement(j.a, { color: 'red500', label: q, onPress: a._handleToggleDisableConfirmation }),
                )
              }),
              m()(l()(a), '_renderDisconnectConfirmation', function () {
                return g.a.createElement(U.a, {
                  actionLabel: ie,
                  graphicDisplayMode: 'none',
                  headline: ae,
                  onAction: a._handleDisableUserAccountLabel,
                  onClose: a._handleToggleDisableConfirmation,
                  onSecondaryAction: a._handleToggleDisableConfirmation,
                  secondaryActionLabel: le,
                  subtext: ce,
                  useBrandedActionButtons: !0,
                  withCloseButton: !0,
                })
              }),
              m()(l()(a), '_render', function () {
                var e = a.props.managingAccount
                    ? a._renderAssignedManagingAccountView()
                    : a._renderUnassignedManagingAccountView(),
                  t = a.state.showDisableConfirmation
                return g.a.createElement(
                  D.a,
                  { title: Z },
                  t && a._renderDisconnectConfirmation(),
                  g.a.createElement(I.a, { description: G }),
                  e,
                )
              }),
              m()(l()(a), '_scribe', function (e) {
                a.props.analytics.scribe(e)
              }),
              (a._initialPath = a._previousPath = window.location.pathname),
              (a.state = {
                hasExitedOCF: !1,
                showCallout: !1,
                showDisableConfirmation: !1,
                calloutIsError: !1,
                calloutLabel: void 0,
              }),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchUserAccountLabel()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  this._previousPath !== location.pathname &&
                    this._initialPath === location.pathname &&
                    (this._handleFetchUserAccountLabel(), this.setState({ hasExitedOCF: !0 })),
                    (this._previousPath = location.pathname)
                  var n = this.props,
                    r = n.disableAccountLabelStatus,
                    o = n.managingAccount,
                    a = n.managingAccountFetchStatus,
                    c = e.disableAccountLabelStatus,
                    i = e.managingAccount,
                    l = e.managingAccountFetchStatus,
                    u = this.state.hasExitedOCF,
                    s = i && o !== i,
                    d = l === C.a.LOADED || a === C.a.LOADED
                  if (
                    (s &&
                      d &&
                      u &&
                      (this._handleShowCallout(ee), this._scribe(V(V({}, re), {}, { action: 'enabled' }))),
                    r !== c)
                  )
                    switch (c) {
                      case C.a.LOADED:
                        this._handleShowCallout(te), this._scribe(V(V({}, re), {}, { action: 'disabled' }))
                        break
                      case C.a.FAILED:
                        this._handleShowCallout(ne, !0),
                          this._scribe(V(V({}, oe), {}, { element: 'automation_opt_out_error', action: 'view' }))
                    }
                  return e !== this.props || t !== this.state
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.managingAccountFetchStatus
                  return g.a.createElement(
                    B.b,
                    { namespace: re },
                    g.a.createElement(
                      A.a,
                      null,
                      g.a.createElement(_.a, {
                        accessibilityLabel: $,
                        fetchStatus: e,
                        onRequestRetry: this._handleFetchUserAccountLabel,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(se, 'contextType', M.a)
      var de = H.a.create(function (e) {
        return { inlineCallout: { paddingLeft: e.spaces.space16, paddingRight: e.spaces.space16 } }
      })
      t.default = Object(R.a)(O(se))
    },
  },
])
//# sourceMappingURL=WIPED
