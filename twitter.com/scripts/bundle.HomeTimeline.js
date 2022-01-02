;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    '/n9r': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'TopicPivot_topic',
        selections: [
          { alias: null, args: null, kind: 'ScalarField', name: 'topic_id', storageKey: null },
          { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
        ],
        type: 'Topic',
        abstractKey: null,
        hash: '0572573667f235d11350335060916856',
      }
      t.default = r
    },
    '4gIZ': function (e, t, n) {
      'use strict'
      var r = n('3KVO'),
        a = n('yLYC'),
        i = n('Ud88'),
        o = n('aQQo').useTrackLoadQueryInRender,
        l = n('K1lQ').__internal.fetchQuery
      e.exports = function (e, t, n) {
        o()
        var c = i(),
          s = a(e, t, n && n.networkCacheConfig ? n.networkCacheConfig : { force: !0 })
        return r({
          componentDisplayName: 'useLazyLoadQuery()',
          fetchKey: null == n ? void 0 : n.fetchKey,
          fetchObservable: l(c, s),
          fetchPolicy: null == n ? void 0 : n.fetchPolicy,
          query: s,
          renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
        })
      }
    },
    cOLG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'HomeTimeline', function () {
          return Wn
        })
      n('OZaJ')
      var r = n('RhWx'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        h = n('AuHH'),
        y = n.n(h),
        b = n('KEM+'),
        v = n.n(b),
        g = (n('2G9S'), n('ERkP')),
        _ = n('es0u'),
        O = n('wM4e'),
        T = n('kHBp'),
        E = n('wqZ5'),
        w = n('rxPX'),
        k = function (e) {
          var t = Object(E.f)(e)
          return T.a.selectMany(e, t) || []
        },
        P = Object(w.a)()
          .propsFromState(function () {
            return { configurationFetchStatus: O.a, pinnedLists: k, selectedTimelineId: O.c, useLatest: O.d }
          })
          .propsFromActions(function () {
            return { clearLocalPinnedListStorage: E.a, fetchPins: E.c, updateBehavior: O.e }
          })
          .withAnalytics({ page: 'home' }),
        L = n('s14A'),
        S = n('dwig'),
        j = n('v//M'),
        C = n('0+qk'),
        F = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2dXj')),
        x = n('v6aA'),
        I = (n('ho0z'), n('G6rE')),
        R = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: I.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          }),
        D = n('3XMw'),
        A = n.n(D),
        M = n('N5qz'),
        B = n('MWbm'),
        K = n('cHvH'),
        H = n('5mJL'),
        z = n('DNho'),
        U = n('XP29'),
        N = n('t62R'),
        q = n('/yvb'),
        Q = n('rHpw'),
        V = n('cjZk'),
        W = n('3rWK'),
        J = n('ll3R'),
        G = n('pNJr'),
        X = n('J0mu'),
        Z = n('KrGU'),
        Y = A.a.g34f2c63({ verb: '' }),
        $ = A.a.e349147b,
        ee = g.createElement(V.a, null),
        te = g.createElement(W.a, null),
        ne = g.createElement(J.a, null),
        re = g.createElement(G.a, null),
        ae = g.createElement(X.a, null),
        ie = g.createElement(Z.a, null),
        oe = Q.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space8,
            },
            avatarColumn: { flexGrow: 1, minWidth: e.spaces.space32, maxWidth: e.spaces.space48 },
            avatar: { width: '100%' },
            body: { flexDirection: 'column', flexGrow: 1 },
            fakeInput: {
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space2,
            },
            toolbar: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: e.spaces.space2,
              marginTop: e.spaces.space20,
            },
            toolbarSection: { alignItems: 'center', flexDirection: 'row' },
            toolBarButton: { marginHorizontal: 0 },
            firstToolBarButton: { marginLeft: '-'.concat(e.spaces.space8) },
            iconContainer: { marginLeft: e.spacesPx.space2 },
            icon: {
              color: e.colors.primary,
              height: '1.5em',
              marginRight: e.spaces.space12,
              marginLeft: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space1, ')'),
              width: '1.5em',
            },
            firstIcon: { marginLeft: 0 },
            lastIcon: { marginRight: 0 },
            tweetButton: { marginLeft: e.spaces.space12 },
          }
        }),
        le = R(function (e) {
          var t = e.userAvatarURI,
            n = g.useContext(x.a).featureSwitches
          return g.createElement(K.a, null, function (e) {
            var r = e.windowWidth,
              a = !M.a.isOneColumnSquishedLayout(r)
            return g.createElement(
              H.a,
              {
                avatarCell: g.createElement(z.a.Consumer, null, function (e) {
                  var n = e.avatarSize
                  return g.createElement(U.a, { size: n, style: oe.avatar, uri: t })
                }),
                avatarCellStyle: oe.avatarColumn,
                cellStyle: oe.body,
                style: oe.root,
              },
              g.createElement(N.b, { color: 'gray700', numberOfLines: 1, size: 'headline1', style: oe.fakeInput }, $),
              g.createElement(
                B.a,
                { style: oe.toolbar },
                g.createElement(
                  B.a,
                  { style: [oe.toolbarSection, oe.iconContainer] },
                  g.createElement(q.a, {
                    disabled: !0,
                    icon: ee,
                    size: 'medium',
                    style: [oe.toolBarButton, oe.firstToolBarButton],
                    type: 'brandText',
                  }),
                  g.createElement(q.a, {
                    disabled: !0,
                    icon: te,
                    size: 'medium',
                    style: oe.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? g.createElement(q.a, {
                        disabled: !0,
                        icon: ne,
                        size: 'medium',
                        style: oe.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  g.createElement(q.a, {
                    disabled: !0,
                    icon: re,
                    size: 'medium',
                    style: oe.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? g.createElement(q.a, {
                        disabled: !0,
                        icon: ae,
                        size: 'medium',
                        style: oe.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  n.isTrue('responsive_web_precise_location_setting_enabled')
                    ? g.createElement(q.a, {
                        disabled: !0,
                        icon: ie,
                        size: 'medium',
                        style: oe.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                ),
                g.createElement(
                  B.a,
                  { style: oe.toolbarSection },
                  g.createElement(q.a, { disabled: !0, style: oe.tweetButton, type: 'brandFilled' }, Y),
                ),
              ),
            )
          })
        }),
        ce = n('zb92'),
        se = Object(ce.a)({
          loader: function () {
            return (F.a.preload() || Promise.resolve()).then(function () {
              return Promise.all([n.e(0), n.e(3), n.e(4), n.e(5), n.e(81)]).then(n.bind(null, 'RrO2'))
            })
          },
          renderPlaceholder: function () {
            return g.createElement(le, null)
          },
        }),
        ue = n('EY8L'),
        de = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('1YZw')),
        pe = Object(w.a)()
          .propsFromState(function () {
            return { selectedTimelineId: O.c, useLatest: O.d }
          })
          .propsFromActions(function () {
            return { addToast: de.b, updateBehavior: O.e }
          })
          .withAnalytics(),
        fe = (n('jQ/y'), n('1Iuc'), n('yZDr')),
        me = function (e) {
          var t = e.accessibilityLabel,
            n = e.hoverLabel,
            r = e.onPress,
            a = e.renderMenu,
            i = g.createElement(fe.a, null)
          return g.createElement(q.a, {
            accessibilityLabel: t,
            hoverLabel: { label: n },
            icon: i,
            onPress: r,
            pullRight: !0,
            renderMenu: a,
            type: 'primaryText',
          })
        },
        he = n('mjJ+'),
        ye = n('Lsrn'),
        be = n('k/Ka')
      function ve(e, t) {
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
            ? ve(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ve(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _e = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(be.a)(
          'svg',
          ge(
            ge({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [ye.a.root, e.style], viewBox: '0 0 36 36' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M27.325 20.595c0 7.333-5.913 13.278-13.206 13.278S.912 27.928.912 20.595 6.825 7.317 14.12 7.317s13.205 5.944 13.205 13.278',
              fill: '#71C9F8',
            }),
            g.createElement('path', {
              d: 'M24.576 20.682c0 5.802-4.678 10.506-10.45 10.506-5.77 0-10.448-4.704-10.448-10.506s4.678-10.506 10.45-10.506c5.77 0 10.448 4.704 10.448 10.506',
              fill: '#97E3FF',
            }),
            g.createElement('path', {
              d: 'M18.98 20.94l-3.86-.583v-6.215c0-.552-.45-1-1-1s-1 .448-1 1v7.076c0 .06.023.112.033.17.007.042.012.082.025.123.026.084.063.158.11.23.022.038.044.075.072.11.05.06.11.11.173.158.042.03.08.06.128.086.065.034.133.055.204.074.04.01.072.035.114.04l4.704.71c.05.01.1.012.15.012.487 0 .914-.355.988-.85.08-.548-.295-1.058-.84-1.14z',
              fill: '#005FD1',
            }),
            g.createElement('path', {
              d: 'M24.553 20.682c0 5.79-4.68 10.5-10.434 10.5S3.683 26.47 3.683 20.68c0-2.953 1.227-5.707 3.31-7.665l.674 1.127c.38.635 1.227.668 1.524.06l1.153-2.36 1.312-2.687c.24-.49-.104-1.067-.65-1.088l-2.988-.116-2.625-.1c-.678-.027-1.05.735-.67 1.37l.804 1.344C2.613 13.065.883 16.736.883 20.683c0 7.333 5.937 13.298 13.234 13.298s13.234-5.964 13.234-13.297h-2.8z',
              fill: '#1DA1F2',
            }),
            g.createElement('path', {
              d: 'M35 13.36h-1.467v-1.34c0-.552-.448-1-1-1s-1 .448-1 1v1.34h-1.467c-.552 0-1 .45-1 1s.448 1 1 1h1.467v1.342c0 .552.448 1 1 1s1-.448 1-1v-1.34H35c.552 0 1-.45 1-1s-.448-1-1-1z',
              fill: '#FFAD1F',
            }),
            g.createElement('path', {
              d: 'M28.646 4.138h-2.01v-2.01c0-.552-.448-1-1-1s-1 .448-1 1v2.01h-2.01c-.552 0-1 .448-1 1s.448 1 1 1h2.01v2.01c0 .552.448 1 1 1s1-.448 1-1v-2.01h2.01c.552 0 1-.448 1-1s-.447-1-1-1z',
              fill: '#F6809A',
            }),
          ),
        )
      }
      _e.metadata = { width: 36, height: 36 }
      var Oe = _e
      function Te(e, t) {
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
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Te(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Te(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var we = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(be.a)(
          'svg',
          Ee(
            Ee({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [ye.a.root, e.style], viewBox: '0 0 36 36' },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M35.508 15.41l-9.295-3.387L22.438 1.47c-.108-.302-.357-.48-.722-.495-.322.007-.604.22-.698.53l-3.293 10.71-9.132 3.805c-.285.118-.467.4-.46.708.007.308.203.58.492.686L17.92 20.8l3.775 10.552c.107.298.39.496.704.496h.016c.322-.007.604-.22.698-.53l3.293-10.712 9.132-3.803c.284-.118.466-.4.46-.708-.007-.308-.203-.58-.492-.686z',
              fill: '#61BCF6',
            }),
            g.createElement('path', {
              d: 'M9.57 4.715l-2.906.065-.06-2.715C6.585 1.34 5.983.763 5.256.78 4.53.796 3.955 1.4 3.97 2.125l.063 2.715-2.747.062C.56 4.92-.016 5.522 0 6.248c.017.726.62 1.302 1.346 1.285l2.747-.062.062 2.716c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.062-2.715 2.905-.066c.725-.017 1.3-.62 1.285-1.346-.017-.726-.62-1.302-1.346-1.285z',
              fill: '#F16888',
            }),
            g.createElement('path', {
              d: 'M14.205 29.69l-1.65.036-.034-1.518c-.016-.726-.618-1.302-1.344-1.286s-1.302.62-1.286 1.345l.034 1.518-1.54.035c-.726.016-1.302.62-1.286 1.345.017.726.62 1.302 1.345 1.286l1.54-.034.034 1.518c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.034-1.518 1.65-.037c.726-.016 1.302-.62 1.286-1.345-.016-.727-.62-1.303-1.345-1.286z',
              fill: '#FD9E1A',
            }),
          ),
        )
      }
      we.metadata = { width: 36, height: 36 }
      var ke = we,
        Pe = n('3JQt'),
        Le = n('M2x3')
      function Se(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var je = A.a.j681ac0d,
        Ce = A.a.g8220472,
        Fe = A.a.ccdd3766,
        xe = A.a.g2657de3,
        Ie = A.a.d126cb7c,
        Re = A.a.c41ecf3c,
        De = A.a.d18aa6d4,
        Ae = A.a.c90dcfa2,
        Me = A.a.bc52b0cd,
        Be = A.a.j6382fe9,
        Ke = A.a.f89f6785,
        He = A.a.e4acfd11,
        ze = A.a.f0c7628a,
        Ue = A.a.j7d0cac5,
        Ne = A.a.eeab4419,
        qe = A.a.cae804f9,
        Qe = A.a.gf85d8c5,
        Ve = (function (e) {
          p()(n, e)
          var t = Se(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), '_renderActionMenu', function (t) {
                var n = e.props.useLatest,
                  r = e._getContent().description,
                  a = n ? Oe : ke
                return g.createElement(he.a, {
                  DescriptionIcon: a,
                  description: r,
                  descriptionStyle: We.description,
                  isFixed: !0,
                  items: e._getActionMenuItems(),
                  onCloseRequested: t,
                })
              }),
              v()(u()(e), '_getActionMenuItems', function () {
                var t = e._getContent(),
                  n = t.subText
                return [
                  { text: t.text, onClick: e._handleTimelineSwitch, Icon: Pe.a, subText: n },
                  { link: '/settings/content_preferences', text: je, onClick: e._handleContentPreferences, Icon: Le.a },
                ]
              }),
              v()(u()(e), '_getContent', function () {
                var t = e.props,
                  n = t.latestTimelinePinEnabled,
                  r = t.useLatest
                return n
                  ? {
                      accessibilityLabel: Qe,
                      description: r ? Ae : Re,
                      hoverLabel: Qe,
                      subText: r ? qe : Ue,
                      text: r ? Ne : ze,
                    }
                  : {
                      accessibilityLabel: r ? Ce : Fe,
                      description: r ? De : Re,
                      hoverLabel: r ? Ie : xe,
                      subText: r ? He : Ke,
                      text: r ? Me : Be,
                    }
              }),
              v()(u()(e), '_handleTimelineSwitch', function (t) {
                var n = e.props.onToggle
                t(), n()
              }),
              v()(u()(e), '_handleContentPreferences', function (t) {
                var n = e.props.onContentPreferencesSelect
                t(), n()
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onPress,
                    t = this._getContent(),
                    n = t.accessibilityLabel,
                    r = t.hoverLabel
                  return g.createElement(me, {
                    accessibilityLabel: n,
                    hoverLabel: r,
                    onPress: e,
                    renderMenu: this._renderActionMenu,
                  })
                },
              },
            ]),
            n
          )
        })(g.PureComponent),
        We = Q.a.create(function (e) {
          return {
            description: {
              fontSize: e.fontSizes.headline1,
              color: e.colors.text,
              textAlign: 'center',
              fontWeight: e.fontWeights.bold,
            },
          }
        }),
        Je = Ve
      function Ge(e, t) {
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
      function Xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ge(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ge(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ze(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var Ye = A.a.e4c6d14c,
        $e = A.a.bffa2da7,
        et = (function (e) {
          p()(n, e)
          var t = Ze(n)
          function n(e, r) {
            var a
            o()(this, n),
              (a = t.call(this, e, r)),
              v()(u()(a), '_handleToggle', function () {
                var e = a.props,
                  t = e.addToast,
                  n = e.analytics,
                  r = e.selectedTimelineId,
                  i = e.updateBehavior,
                  o = e.useLatest
                a.context.viewport.scrollToTop(),
                  n.scribe({ component: 'customize', element: o ? 'see_top' : 'see_latest', action: 'click' })
                var l = o ? Ye : $e
                i(
                  Xe(
                    Xe({}, a._latestTimelinePinEnabled && o && r !== ue.a.HOME && { selectedTimelineId: ue.a.HOME }),
                    {},
                    { useLatest: !o },
                  ),
                ).then(function () {
                  a._latestTimelinePinEnabled || t({ text: l })
                })
              }),
              v()(u()(a), '_handleSwitchPress', function () {
                a.props.analytics.scribe({ section: 'navigation_bar', element: 'customize_button', action: 'click' })
              }),
              v()(u()(a), '_handleContentPreferencesSelect', function () {
                a.props.analytics.scribe({ component: 'customize', element: 'see_preferences', action: 'click' })
              })
            var i = a.context.featureSwitches
            return (
              (a._latestTimelinePinEnabled = !!i.getValueWithoutScribeImpression(
                'responsive_web_home_pinned_timelines_latest_enabled',
                !1,
              )),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.useLatest
                  return g.createElement(Je, {
                    latestTimelinePinEnabled: this._latestTimelinePinEnabled,
                    onContentPreferencesSelect: this._handleContentPreferencesSelect,
                    onPress: this._handleSwitchPress,
                    onToggle: this._handleToggle,
                    useLatest: e,
                  })
                },
              },
            ]),
            n
          )
        })(g.Component)
      v()(et, 'contextType', x.a)
      var tt = pe(et),
        nt = n('lUZE'),
        rt = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        at = n('yoO3'),
        it = (n('5BYb'), n('aeN7')),
        ot = n('hqKg'),
        lt = n('wrlS'),
        ct = n('WA1W'),
        st = Object(w.a)()
          .propsFromState(function () {
            return {
              module: Object(ot.createSelector)(lt.d, O.c, O.d, function (e, t, n) {
                var r = e.isTrue('home_timeline_latest_timeline_switch_enabled')
                return (
                  r && n && e.getValueWithoutScribeImpression('responsive_web_home_pinned_timelines_latest_enabled')
                    ? t === ue.a.HOME_LATEST
                    : r && n
                )
                  ? Object(ct.e)(e.isTrue('responsive_web_graphql_home_latest_enabled'))
                  : Object(ct.f)(e.isTrue('responsive_web_graphql_home_enabled'))
              }),
              useLatest: O.d,
            }
          })
          .propsFromActions(function () {
            return { addToast: de.b, updateBehavior: O.e }
          })
          .withAnalytics(),
        ut = n('QIgh'),
        dt = n('8UdT'),
        pt = n('iu0J'),
        ft = n('AP4B')
      function mt(e, t) {
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
            ? mt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : mt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var yt = ht(
          ht(
            ht({}, Object(ut.a)({ allowDownvote: !0, tweetDismissable: !0, shouldSelfThreadIncludeAvatar: !0 })),
            ft.a,
          ),
          {},
          v()({}, dt.b.EventSummary, Object(pt.a)({ errorContext: 'HOME_TIMELINE_SCREEN' })),
        ),
        bt = n('MDbM'),
        vt = n('FIs5'),
        gt = A.a.d2c66f1f,
        _t = A.a.c3fbf1da,
        Ot = A.a.bf17ded9,
        Tt = function (e) {
          var t = e.onImpression
          return g.createElement(vt.a, {
            buttonLink: '/i/connect_people',
            buttonText: Ot,
            header: gt,
            message: _t,
            onImpression: t,
          })
        },
        Et = n('EUHl'),
        wt = n('7BdX'),
        kt = n('fTQJ')
      function Pt(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var Lt = { count: void 0 },
        St = A.a.f089620b,
        jt = (function (e) {
          p()(n, e)
          var t = Pt(n)
          function n(e, r) {
            var a
            return (
              o()(this, n),
              (a = t.call(this, e, r)),
              v()(u()(a), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  n = e.fetchStatus,
                  r = a.props.recordTTFT
                if ((n === bt.a.FAILED && (a._shouldRecordTTFT = !1), a._shouldRecordTTFT && t.length)) {
                  var i = t.some(function (e) {
                    return e.type === dt.b.Tweet
                  })
                  ;(a._shouldRecordTTFT = !1), i && r()
                }
              }),
              v()(u()(a), '_renderEmptyTimeline', function () {
                return g.createElement(Tt, { onImpression: a._handleEmptyHtlImpression })
              }),
              v()(u()(a), '_handleEmptyHtlImpression', function () {
                a.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              (a._shouldRecordTTFT = !0),
              a
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.module,
                    n = e.shouldFetchLoadedContentOnMount,
                    r = e.timelineRef
                  return g.createElement(kt.a, {
                    entryConfiguration: yt,
                    fetchTopOptions: Lt,
                    module: t,
                    newTweetsPillMode: Et.a.URT,
                    onEntriesRendered: this._handleEntriesRendered,
                    prerollDisplayLocation: wt.c.TIMELINE_HOME,
                    renderEmptyState: this._renderEmptyTimeline,
                    shouldFetchLoadedContentOnMount: n,
                    timelineRef: r,
                    title: St,
                  })
                },
              },
            ]),
            n
          )
        })(g.Component)
      v()(jt, 'defaultProps', { recordTTFT: it.e, shouldFetchLoadedContentOnMount: !0 }), v()(jt, 'contextType', x.a)
      var Ct = st(jt),
        Ft = n('7JQg'),
        xt = n('VS6U'),
        It = n('Es6L'),
        Rt = n('LsPn'),
        Dt = (n('z84I'), n('gZV8')),
        At = n('enFi'),
        Mt = n('kGix'),
        Bt = n('G1WX')
      function Kt(e) {
        var t = e.accessibilityLabel,
          n = e.children,
          r = e.loadingMessage
        return g.createElement(
          g.Suspense,
          {
            fallback: g.createElement(Bt.a, {
              accessibilityLabel: t,
              fetchStatus: Mt.a.LOADING,
              loadingMessage: r,
              render: function () {
                return null
              },
            }),
          },
          n,
        )
      }
      var Ht = n('97Jx'),
        zt = n.n(Ht),
        Ut = n('m3Bd'),
        Nt = n.n(Ut),
        qt = n('pXBW'),
        Qt = g.createContext(void 0),
        Vt = n('3Law'),
        Wt = n('0KEI')
      function Jt(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var Gt = (function (e) {
        p()(n, e)
        var t = Jt(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(u()(e), 'state', { error: null }),
            v()(u()(e), '_handleOnRequestRetry', function () {
              var t = e.props,
                n = t.queryKey
              t.store.incrementFetchKey(n), e.setState({ error: null })
            }),
            e
          )
        }
        return (
          c()(
            n,
            [
              {
                key: 'componentDidCatch',
                value: function (e) {
                  if (!e instanceof qt.a) throw e
                  this.props.errorHandler && e instanceof qt.a && this.props.errorHandler(e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.failureMessage,
                    r = e.isRetryable,
                    a = e.queryKey,
                    i = e.retryMessage,
                    o = e.store
                  if (this.state.error)
                    return g.createElement(Bt.a, {
                      failureMessage: n,
                      fetchStatus: Mt.a.FAILED,
                      onRequestRetry: this._handleOnRequestRetry,
                      render: function () {
                        return null
                      },
                      retryMessage: i,
                      retryable: r,
                    })
                  var l = o.getFetchKey(a)
                  return g.createElement(Qt.Provider, { value: l }, t)
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
      })(g.Component)
      function Xt(e) {
        var t = e.children,
          n = e.errorConfig,
          r = e.isRetryable,
          a = void 0 === r || r,
          i = Nt()(e, ['children', 'errorConfig', 'isRetryable']),
          o = Object(Wt.useCreateLocalApiErrorHandler)(n.context),
          l = Object(Vt.b)()
        return g.createElement(Gt, zt()({ errorHandler: o(n.options || {}), isRetryable: a, store: l }, i), t)
      }
      function Zt(e) {
        var t = e.children,
          n = e.errorConfig,
          r = e.queryKey
        return g.createElement(Xt, { errorConfig: n, queryKey: r }, g.createElement(Kt, null, t))
      }
      var Yt,
        $t = n('lnL+'),
        en = n('Rp9C'),
        tn = n('jAXQ'),
        nn = n.n(tn),
        rn = function (e) {
          var t = nn()(void 0 !== Yt ? Yt : (Yt = n('/n9r')), e.topic),
            r = t.name,
            a = t.topic_id
          g.useEffect(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [en.a.forTopic(a)] } })
          }, [])
          var i = g.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [en.a.forTopic(a)] } })
            },
            [e.analytics, a],
          )
          return g.createElement($t.a, { link: '/i/topics/'.concat(a), onClick: i, text: r })
        },
        an = n('Irs7'),
        on = n('yUQf'),
        ln = (n('M+/F'), n('hCOa'), n('aLgo'), n('ddV6')),
        cn = n.n(ln),
        sn = n('tI3i'),
        un = n.n(sn),
        dn = n('SrIh'),
        pn = n('4gIZ'),
        fn = n.n(pn)
      function mn(e, t) {
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
      function hn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? mn(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : mn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function yn(e, t, n) {
        var r = g.useContext(Qt),
          a = hn(hn({}, n), {}, { fetchKey: null != r ? r : null == n ? void 0 : n.fetchKey })
        return fn()(e, t, a)
      }
      var bn = n('lU4h'),
        vn = n.n(bn),
        gn = n('Ud88'),
        _n = n.n(gn),
        On = n('UIzd'),
        Tn = n.n(On)
      function En(e, t) {
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
      function wn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? En(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : En(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function kn(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return Pn(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pn(e, t)
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
        var i,
          o = !0,
          l = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(l = !0), (i = e)
          },
          f: function () {
            try {
              o || null == n.return || n.return()
            } finally {
              if (l) throw i
            }
          },
        }
      }
      function Pn(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function Ln(e, t) {
        try {
          un()('slice_info' === t[t.length - 1], 'Invalid sliceInfoPath!')
          var n,
            r = e,
            a = kn(t)
          try {
            for (a.s(); !(n = a.n()).done; ) {
              var i,
                o = n.value
              un()(!!r, 'The provided path is invalid.'),
                un()('string' == typeof o, 'Unexpected value for path!'),
                (r = null === (i = r) || void 0 === i ? void 0 : i[o])
            }
          } catch (l) {
            a.e(l)
          } finally {
            a.f()
          }
          return r
        } catch (c) {
          return void Object(dn.a)(c.message)
        }
      }
      var Sn,
        jn = n('6iuV'),
        Cn = A.a.ffd9cfe6,
        Fn = void 0 !== Sn ? Sn : (Sn = n('yKhE')),
        xn = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        In = function () {
          var e,
            t,
            n,
            r,
            i,
            o,
            l,
            c = g.useRef(0),
            s = Object(an.b)(),
            u = Object(on.a)(I.e.selectLoggedInUser),
            d = (function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { context: '' },
                r = g.useState(!1),
                a = cn()(r, 2),
                i = a[0],
                o = a[1],
                l = g.useState(null),
                c = cn()(l, 2),
                s = c[0],
                u = c[1],
                d = _n()(),
                p = vn()(t),
                f = cn()(p, 1)[0],
                m = Object(Wt.useCreateLocalApiErrorHandler)(n.context)(n.options || {}),
                h = yn(e, f)
              return g.useMemo(
                function () {
                  var t,
                    n,
                    r =
                      null === (t = Object(At.getRequest)(e).params) ||
                      void 0 === t ||
                      null === (n = t.metadata) ||
                      void 0 === n
                        ? void 0
                        : n.sliceInfoPath
                  un()(
                    !!r,
                    'The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.',
                  )
                  var a = Ln(h, r) || {},
                    l = a.next_cursor,
                    c = a.previous_cursor,
                    p = function (t) {
                      i ||
                        (o(!0),
                        Tn()(d, e, wn(wn({}, f), {}, { cursor: t })).subscribe({
                          complete: function () {
                            o(!1)
                          },
                          error: function (e) {
                            o(!1), u(e), m(e)
                          },
                        }))
                    },
                    y = function () {
                      l && p(l)
                    },
                    b = function () {
                      c && p(c)
                    }
                  return s
                    ? {
                        subsequentFetchStatus: Mt.a.FAILED,
                        error: s,
                        fetchNext: y,
                        fetchPrevious: b,
                        data: h,
                        hasNext: Boolean(l),
                        hasPrevious: Boolean(c),
                      }
                    : {
                        subsequentFetchStatus: i ? Mt.a.LOADING : Mt.a.NONE,
                        error: void 0,
                        fetchNext: y,
                        fetchPrevious: b,
                        data: h,
                        hasNext: Boolean(l),
                        hasPrevious: Boolean(c),
                      }
                },
                [e, h, i, s, d, f, m],
              )
            })(Fn, {}, xn).data,
            p = (
              ('User' ===
                (null == d ||
                null === (e = d.viewer) ||
                void 0 === e ||
                null === (t = e.user_results) ||
                void 0 === t ||
                null === (n = t.result) ||
                void 0 === n
                  ? void 0
                  : n.__typename) &&
                (null == d ||
                null === (r = d.viewer) ||
                void 0 === r ||
                null === (i = r.user_results) ||
                void 0 === i ||
                null === (o = i.result) ||
                void 0 === o ||
                null === (l = o.home_topics_navigator_slices) ||
                void 0 === l
                  ? void 0
                  : l.items)) ||
              []
            ).map(function (e, t) {
              return null != e && e.topic ? g.createElement(rn, { analytics: s, key: t, topic: e.topic }) : null
            }),
            f = g.useCallback(
              function () {
                s.scribeAction('impression'), s.scribe({ element: 'see_more', action: 'impression' })
              },
              [s],
            ),
            m = g.useCallback(
              function (e) {
                var t = e.next,
                  n = e.previous
                n > t ? s.scribeAction('scroll_left') : n < t && s.scribeAction('scroll_right')
              },
              [s],
            ),
            h = g.useCallback(
              function (e) {
                var t = e.index,
                  n = e.intersectionRatio
                t === c.current - 1 && n >= Dt.c && s.scribeAction('reached_end')
              },
              [s],
            )
          g.useEffect(function () {
            p.length > 0 && f()
          }, []),
            g.useEffect(
              function () {
                c.current = p.length + 1
              },
              [p],
            )
          var y = g.useCallback(
              function () {
                s.scribe({ element: 'see_more', action: 'click' })
              },
              [s],
            ),
            b = u ? '/'.concat(u.screen_name, '/topics') : '/i/topics/picker',
            v = g.createElement(q.a, { key: 'seeMorePivot', link: b, onClick: y, type: 'brandOutlined' }, Cn)
          return p.length > 0
            ? g.createElement(
                jn.a,
                { childrenStyle: Rn.childrenStyle, onScroll: m, onVisibleRangeChange: h, style: Rn.carousel },
                [].concat(a()(p), [v]),
              )
            : null
        },
        Rn = Q.a.create(function (e) {
          return {
            carousel: { marginHorizontal: 'calc('.concat(e.spaces.space12, ' - ').concat(e.spaces.space2, ')') },
            childrenStyle: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space12 },
          }
        }),
        Dn = function () {
          return g.createElement(
            Zt,
            { errorConfig: xn, queryKey: 'TopicPivotsCarouselQuery' },
            g.createElement(In, null),
          )
        },
        An = n('aITJ'),
        Mn = n('0yYu'),
        Bn = n('mw9i'),
        Kn = n('k/OQ')
      function Hn(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var zn = A.a.i5f7b6b8,
        Un = A.a.d126cb7c,
        Nn = A.a.ha8209bb,
        qn = { page: 'home' },
        Qn = { page: 'home_latest' },
        Vn = { section: 'topics_navigator', component: 'suggest_topics_module' },
        Wn = (function (e) {
          p()(r, e)
          var t = Hn(r)
          function r(e, n) {
            var i
            o()(this, r),
              (i = t.call(this, e, n)),
              v()(u()(i), '_lastTimelineSwitchTimestamp', 0),
              v()(u()(i), '_unmounted', !1),
              v()(u()(i), '_getTimelineMetadata', function () {
                var e = i._isLatestActive()
                return { scribeNamespace: e ? Qn : qn, title: e ? Un : Nn }
              }),
              v()(u()(i), '_getLink', function (e, t) {
                var n = i.props,
                  r = n.analytics,
                  a = n.selectedTimelineId,
                  o = n.updateBehavior
                return {
                  isActive: function () {
                    return a === e
                  },
                  label: t,
                  key: e,
                  onClick: function () {
                    if (a === e) i._timeline && i._timeline.refreshOrGoTop()
                    else {
                      var t = Date.now() - i._lastTimelineSwitchTimestamp
                      o({ selectedTimelineId: e }),
                        r.scribe({ section: a, element: e, action: 'click', data: { duration_ms: t } })
                    }
                  },
                  retainScrollPosition: !1,
                  to: { pathname: '/home' },
                }
              }),
              v()(u()(i), '_getLinks', function () {
                var e = i.props.useLatest,
                  t = i._getLink(ue.a.HOME, Nn),
                  n = i._getLink(ue.a.HOME_LATEST, Un)
                return [t].concat(a()(e ? [n] : []))
              }),
              v()(u()(i), '_isLatestActive', function () {
                var e = i.props,
                  t = e.selectedTimelineId,
                  n = e.useLatest
                return i._isLatestPinned() ? t === ue.a.HOME_LATEST : i._latestTimelineSwitchEnabled && n
              }),
              v()(u()(i), '_isLatestPinned', function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  t = i.context.featureSwitches,
                  n = i.props.useLatest
                return (
                  i._latestTimelineSwitchEnabled &&
                  n &&
                  (e
                    ? t.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                    : t.getValueWithoutScribeImpression('responsive_web_home_pinned_timelines_latest_enabled'))
                )
              }),
              v()(u()(i), '_renderTimeline', function () {
                var e = i.context.featureSwitches,
                  t = i._isLatestActive()
                return g.createElement(
                  L.a,
                  null,
                  e.isTrue('home_timeline_topics_navigator_enabled')
                    ? g.createElement(Ft.b, { namespace: Vn }, g.createElement(Dn, null))
                    : null,
                  g.createElement(Ct, { shouldFetchLoadedContentOnMount: t, timelineRef: i._setTimelineRef }),
                )
              }),
              v()(u()(i), '_renderCenteredLogo', function () {
                if (!Object(It.a)() && i._isLatestPinned()) return g.createElement(nt.a, { style: Jn.iconTwitter })
              }),
              v()(u()(i), '_renderPrimaryContent', function () {
                var e = i.props,
                  t = e.configurationFetchStatus,
                  n = e.history,
                  r = e.location,
                  a = i.context.isRestrictedSession,
                  o = g.createElement(C.a, { history: n })
                return g.createElement(
                  g.Fragment,
                  null,
                  Object(It.a)() && !a
                    ? g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(se, { history: n, location: r }),
                        g.createElement(Mn.a, null),
                      )
                    : null,
                  g.createElement(
                    S.a,
                    { component: Bn.a, fab: o },
                    An.b.isKaiOS()
                      ? g.createElement(Rt.a, { leftText: zn, onLeftClick: i._handleSoftLeftClick })
                      : null,
                    g.createElement(j.a, { fetchStatus: t, render: i._renderTimeline }),
                  ),
                )
              }),
              v()(u()(i), '_renderSecondaryBar', function () {
                if (i._isLatestPinned(!0)) {
                  var e = i._getLinks()
                  return e.length > 1 ? g.createElement(Kn.a, { links: e }) : void 0
                }
              }),
              v()(u()(i), '_handleSoftLeftClick', function () {
                i.props.history.push('/account')
              }),
              v()(u()(i), '_handleTabRefresh', function () {
                i._timeline && i._timeline.refreshOrGoTop()
              }),
              v()(u()(i), '_handleWindowFocus', function () {
                i._timeline && i._timeline.fetchTop({ onlyIfStale: !0 })
              }),
              v()(u()(i), '_setTimelineRef', function (e) {
                i._timeline = e
              })
            var l = i.context.featureSwitches
            return (
              (i._latestTimelineSwitchEnabled = l.isTrue('home_timeline_latest_timeline_switch_enabled')),
              (i._pinnedListsEnabled = l.isTrue('responsive_web_home_pinned_timelines_lists_enabled')),
              i
            )
          }
          return (
            c()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  if (
                    ((this._lastTimelineSwitchTimestamp = Date.now()),
                    window.addEventListener('focus', this._handleWindowFocus),
                    this.props.clearLocalPinnedListStorage(),
                    this._pinnedListsEnabled && this.props.fetchPins(),
                    this.context.featureSwitches.isTrue('responsive_web_framerate_tracking_home_enabled'))
                  ) {
                    var t = An.b.isDesktopOS() ? '' : '_mobile',
                      r = 'home'.concat(t)
                    ;(rt()
                      ? n
                          .e(328)
                          .then(n.bind(null, 'Iid0'))
                          .then(function (e) {
                            return e.default
                          })
                      : Promise.resolve(void 0)
                    ).then(function (t) {
                      !e._unmounted && t && (e._fpsTracking = t({ reportNamespace: r }))
                    })
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._unmounted = !0),
                    window.removeEventListener('focus', this._handleWindowFocus),
                    this._fpsTracking && this._fpsTracking.stop()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.selectedTimelineId !== this.props.selectedTimelineId &&
                    (this._lastTimelineSwitchTimestamp = Date.now())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.history,
                    t = this._latestTimelineSwitchEnabled ? g.createElement(tt, null) : void 0,
                    n = this._getTimelineMetadata(),
                    r = n.scribeNamespace,
                    a = n.title,
                    i = Object(It.a)() || !this._isLatestPinned() ? a : null
                  return g.createElement(
                    Ft.b,
                    { namespace: r },
                    g.createElement(
                      at.a,
                      null,
                      g.createElement(xt.a, {
                        centeredLogo: this._renderCenteredLogo(),
                        documentTitle: a,
                        history: e,
                        onTabRefresh: this._handleTabRefresh,
                        primaryContent: this._renderPrimaryContent,
                        rightControl: t,
                        secondaryBar: this._renderSecondaryBar(),
                        sidebarContent: g.createElement(_.a, null),
                        title: i,
                      }),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(g.Component)
      v()(Wn, 'contextType', x.a)
      var Jn = Q.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = P(Wn)
    },
    yKhE: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        i,
        o,
        l,
        c = {
          fragment: {
            argumentDefinitions: (r = [
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor_string' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'max_count' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'TopicPivotsCarouselQuery',
            selections: [
              {
                alias: 'viewer',
                args: (a = [{ kind: 'Literal', name: 's', value: 21 }]),
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
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
                          (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: 'home_topics_navigator_slices',
                                args: (o = [
                                  { kind: 'Variable', name: 'cursor_string', variableName: 'cursor_string' },
                                  { kind: 'Variable', name: 'max_count', variableName: 'max_count' },
                                ]),
                                concreteType: null,
                                kind: 'LinkedField',
                                name: '__TopicPivotsCarouselQuery_home_topics_navigator_slices_slice',
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
                                                concreteType: 'Topic',
                                                kind: 'LinkedField',
                                                name: 'topic',
                                                plural: !1,
                                                selections: [
                                                  { args: null, kind: 'FragmentSpread', name: 'TopicPivot_topic' },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            type: 'TopicItem',
                                            abstractKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      (l = {
                                        alias: null,
                                        args: null,
                                        concreteType: 'SliceInfo',
                                        kind: 'LinkedField',
                                        name: 'slice_info',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'next_cursor',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'previous_cursor',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      }),
                                    ],
                                    type: 'HomeTopicsNavigatorSlices',
                                    abstractKey: null,
                                  },
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
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:21)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'TopicPivotsCarouselQuery',
            selections: [
              {
                alias: 'viewer',
                args: a,
                concreteType: 'Viewer',
                kind: 'LinkedField',
                name: 'viewer_v2',
                plural: !1,
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
                          i,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: o,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'home_topics_navigator_slices',
                                plural: !1,
                                selections: [
                                  i,
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
                                          i,
                                          {
                                            kind: 'InlineFragment',
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'Topic',
                                                kind: 'LinkedField',
                                                name: 'topic',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'topic_id',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'name',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'id',
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            type: 'TopicItem',
                                            abstractKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      l,
                                    ],
                                    type: 'HomeTopicsNavigatorSlices',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: o,
                                filters: ['cursor_string', 'max_count'],
                                handle: 'slice',
                                key: 'TopicPivotsCarouselQuery_home_topics_navigator_slices',
                                kind: 'LinkedHandle',
                                name: 'home_topics_navigator_slices',
                              },
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
                ],
                storageKey: 'viewer_v2(s:21)',
              },
            ],
          },
          params: {
            id: 'ai0pX5Vn1pKiL73yjIAADg',
            metadata: {
              sliceInfoPath: ['viewer', 'user_results', 'result', 'home_topics_navigator_slices', 'slice_info'],
            },
            name: 'TopicPivotsCarouselQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(c.hash = '00b62fb55ad091187417013cbaa9e6a0'), (t.default = c)
    },
  },
])
//# sourceMappingURL=WIPED
