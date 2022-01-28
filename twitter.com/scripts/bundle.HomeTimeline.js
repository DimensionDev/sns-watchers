;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    '/n9r': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
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
      t.default = a
    },
    cOLG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'HomeTimeline', function () {
          return vn
        })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('1Pcy'),
        c = n.n(o),
        s = n('5Yy7'),
        u = n.n(s),
        p = n('N+ot'),
        d = n.n(p),
        m = n('AuHH'),
        f = n.n(m),
        h = n('KEM+'),
        b = n.n(h),
        g = (n('2G9S'), n('ERkP')),
        y = n.n(g),
        v = n('es0u'),
        _ = n('wM4e'),
        w = n('kHBp'),
        T = n('wqZ5'),
        k = n('rxPX'),
        O = function (e) {
          var t = Object(T.f)(e)
          return w.a.selectMany(e, t) || []
        },
        E = Object(k.a)()
          .propsFromState(function () {
            return { configurationFetchStatus: _.a, pinnedLists: O, selectedTimelineId: _.c, useLatest: _.d }
          })
          .propsFromActions(function () {
            return { clearLocalPinnedListStorage: T.a, fetchPins: T.c, updateBehavior: _.e }
          })
          .withAnalytics({ page: 'home' }),
        L = n('s14A'),
        S = n('dwig'),
        P = n('v//M'),
        j = n('0+qk'),
        x = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2dXj')),
        F = (n('ho0z'), n('G6rE')),
        C = Object(k.a)()
          .propsFromState(function () {
            return { loggedInUser: F.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          }),
        I = n('3XMw'),
        M = n.n(I),
        R = n('N5qz'),
        B = n('MWbm'),
        A = n('cHvH'),
        D = n('5mJL'),
        K = n('DNho'),
        z = n('XP29'),
        H = n('t62R'),
        U = n('/yvb'),
        V = n('rHpw'),
        N = n('cjZk'),
        Q = n('3rWK'),
        J = n('ll3R'),
        W = n('pNJr'),
        q = n('J0mu'),
        G = n('KrGU'),
        X = M.a.g34f2c63({ verb: '' }),
        Z = M.a.e349147b,
        Y = y.a.createElement(N.a, null),
        $ = y.a.createElement(Q.a, null),
        ee = y.a.createElement(J.a, null),
        te = y.a.createElement(W.a, null),
        ne = y.a.createElement(q.a, null),
        ae = y.a.createElement(G.a, null),
        re = V.a.create(function (e) {
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
        ie = C(function (e) {
          var t = e.userAvatarURI
          return y.a.createElement(A.a, null, function (e) {
            var n = e.windowWidth,
              a = !R.a.isOneColumnSquishedLayout(n)
            return y.a.createElement(
              D.a,
              {
                avatarCell: y.a.createElement(K.a.Consumer, null, function (e) {
                  var n = e.avatarSize
                  return y.a.createElement(z.a, { size: n, style: re.avatar, uri: t })
                }),
                avatarCellStyle: re.avatarColumn,
                cellStyle: re.body,
                style: re.root,
              },
              y.a.createElement(H.b, { color: 'gray700', numberOfLines: 1, size: 'headline1', style: re.fakeInput }, Z),
              y.a.createElement(
                B.a,
                { style: re.toolbar },
                y.a.createElement(
                  B.a,
                  { style: [re.toolbarSection, re.iconContainer] },
                  y.a.createElement(U.a, {
                    disabled: !0,
                    icon: Y,
                    size: 'medium',
                    style: [re.toolBarButton, re.firstToolBarButton],
                    type: 'brandText',
                  }),
                  y.a.createElement(U.a, {
                    disabled: !0,
                    icon: $,
                    size: 'medium',
                    style: re.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? y.a.createElement(U.a, {
                        disabled: !0,
                        icon: ee,
                        size: 'medium',
                        style: re.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  y.a.createElement(U.a, {
                    disabled: !0,
                    icon: te,
                    size: 'medium',
                    style: re.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? y.a.createElement(U.a, {
                        disabled: !0,
                        icon: ne,
                        size: 'medium',
                        style: re.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  y.a.createElement(U.a, {
                    disabled: !0,
                    icon: ae,
                    size: 'medium',
                    style: re.toolBarButton,
                    type: 'brandText',
                  }),
                ),
                y.a.createElement(
                  B.a,
                  { style: re.toolbarSection },
                  y.a.createElement(U.a, { disabled: !0, style: re.tweetButton, type: 'brandFilled' }, X),
                ),
              ),
            )
          })
        }),
        le = n('zb92'),
        oe = Object(le.a)({
          loader: function () {
            return (x.a.preload() || Promise.resolve()).then(function () {
              return Promise.all([n.e(0), n.e(3), n.e(4), n.e(5), n.e(82)]).then(n.bind(null, 'RrO2'))
            })
          },
          renderPlaceholder: function () {
            return y.a.createElement(ie, null)
          },
        }),
        ce = n('EY8L'),
        se = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('1YZw')),
        ue = Object(k.a)()
          .propsFromState(function () {
            return { selectedTimelineId: _.c, useLatest: _.d }
          })
          .propsFromActions(function () {
            return { addToast: se.b, updateBehavior: _.e }
          })
          .withAnalytics(),
        pe = (n('jQ/y'), n('1Iuc'), n('yZDr')),
        de = function (e) {
          var t = e.accessibilityLabel,
            n = e.hoverLabel,
            a = e.onPress,
            r = e.renderMenu,
            i = y.a.createElement(pe.a, null)
          return y.a.createElement(U.a, {
            accessibilityLabel: t,
            hoverLabel: { label: n },
            icon: i,
            onPress: a,
            pullRight: !0,
            renderMenu: r,
            type: 'primaryText',
          })
        },
        me = n('mjJ+'),
        fe = n('v6aA'),
        he = n('Lsrn'),
        be = n('k/Ka')
      function ge(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ge(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ge(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ve = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(be.a)(
          'svg',
          ye(
            ye({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [he.a.root, e.style], viewBox: '0 0 36 36' },
          ),
          y.a.createElement(
            'g',
            null,
            y.a.createElement('path', {
              d: 'M27.325 20.595c0 7.333-5.913 13.278-13.206 13.278S.912 27.928.912 20.595 6.825 7.317 14.12 7.317s13.205 5.944 13.205 13.278',
              fill: '#71C9F8',
            }),
            y.a.createElement('path', {
              d: 'M24.576 20.682c0 5.802-4.678 10.506-10.45 10.506-5.77 0-10.448-4.704-10.448-10.506s4.678-10.506 10.45-10.506c5.77 0 10.448 4.704 10.448 10.506',
              fill: '#97E3FF',
            }),
            y.a.createElement('path', {
              d: 'M18.98 20.94l-3.86-.583v-6.215c0-.552-.45-1-1-1s-1 .448-1 1v7.076c0 .06.023.112.033.17.007.042.012.082.025.123.026.084.063.158.11.23.022.038.044.075.072.11.05.06.11.11.173.158.042.03.08.06.128.086.065.034.133.055.204.074.04.01.072.035.114.04l4.704.71c.05.01.1.012.15.012.487 0 .914-.355.988-.85.08-.548-.295-1.058-.84-1.14z',
              fill: '#005FD1',
            }),
            y.a.createElement('path', {
              d: 'M24.553 20.682c0 5.79-4.68 10.5-10.434 10.5S3.683 26.47 3.683 20.68c0-2.953 1.227-5.707 3.31-7.665l.674 1.127c.38.635 1.227.668 1.524.06l1.153-2.36 1.312-2.687c.24-.49-.104-1.067-.65-1.088l-2.988-.116-2.625-.1c-.678-.027-1.05.735-.67 1.37l.804 1.344C2.613 13.065.883 16.736.883 20.683c0 7.333 5.937 13.298 13.234 13.298s13.234-5.964 13.234-13.297h-2.8z',
              fill: '#1DA1F2',
            }),
            y.a.createElement('path', {
              d: 'M35 13.36h-1.467v-1.34c0-.552-.448-1-1-1s-1 .448-1 1v1.34h-1.467c-.552 0-1 .45-1 1s.448 1 1 1h1.467v1.342c0 .552.448 1 1 1s1-.448 1-1v-1.34H35c.552 0 1-.45 1-1s-.448-1-1-1z',
              fill: '#FFAD1F',
            }),
            y.a.createElement('path', {
              d: 'M28.646 4.138h-2.01v-2.01c0-.552-.448-1-1-1s-1 .448-1 1v2.01h-2.01c-.552 0-1 .448-1 1s.448 1 1 1h2.01v2.01c0 .552.448 1 1 1s1-.448 1-1v-2.01h2.01c.552 0 1-.448 1-1s-.447-1-1-1z',
              fill: '#F6809A',
            }),
          ),
        )
      }
      ve.metadata = { width: 36, height: 36 }
      var _e = ve
      function we(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? we(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : we(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ke = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(be.a)(
          'svg',
          Te(
            Te({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [he.a.root, e.style], viewBox: '0 0 36 36' },
          ),
          y.a.createElement(
            'g',
            null,
            y.a.createElement('path', {
              d: 'M35.508 15.41l-9.295-3.387L22.438 1.47c-.108-.302-.357-.48-.722-.495-.322.007-.604.22-.698.53l-3.293 10.71-9.132 3.805c-.285.118-.467.4-.46.708.007.308.203.58.492.686L17.92 20.8l3.775 10.552c.107.298.39.496.704.496h.016c.322-.007.604-.22.698-.53l3.293-10.712 9.132-3.803c.284-.118.466-.4.46-.708-.007-.308-.203-.58-.492-.686z',
              fill: '#61BCF6',
            }),
            y.a.createElement('path', {
              d: 'M9.57 4.715l-2.906.065-.06-2.715C6.585 1.34 5.983.763 5.256.78 4.53.796 3.955 1.4 3.97 2.125l.063 2.715-2.747.062C.56 4.92-.016 5.522 0 6.248c.017.726.62 1.302 1.346 1.285l2.747-.062.062 2.716c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.062-2.715 2.905-.066c.725-.017 1.3-.62 1.285-1.346-.017-.726-.62-1.302-1.346-1.285z',
              fill: '#F16888',
            }),
            y.a.createElement('path', {
              d: 'M14.205 29.69l-1.65.036-.034-1.518c-.016-.726-.618-1.302-1.344-1.286s-1.302.62-1.286 1.345l.034 1.518-1.54.035c-.726.016-1.302.62-1.286 1.345.017.726.62 1.302 1.345 1.286l1.54-.034.034 1.518c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.034-1.518 1.65-.037c.726-.016 1.302-.62 1.286-1.345-.016-.727-.62-1.303-1.345-1.286z',
              fill: '#FD9E1A',
            }),
          ),
        )
      }
      ke.metadata = { width: 36, height: 36 }
      var Oe = ke,
        Ee = n('3JQt'),
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
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Pe = M.a.j681ac0d,
        je = M.a.g8220472,
        xe = M.a.ccdd3766,
        Fe = M.a.g2657de3,
        Ce = M.a.d126cb7c,
        Ie = M.a.c41ecf3c,
        Me = M.a.d18aa6d4,
        Re = M.a.c90dcfa2,
        Be = M.a.bc52b0cd,
        Ae = M.a.j6382fe9,
        De = M.a.f89f6785,
        Ke = M.a.e4acfd11,
        ze = M.a.f0c7628a,
        He = M.a.j7d0cac5,
        Ue = M.a.eeab4419,
        Ve = M.a.cae804f9,
        Ne = (function (e) {
          u()(n, e)
          var t = Se(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(c()(e), '_renderActionMenu', function (t) {
                var n = e.props.useLatest,
                  a = e._getContent().description,
                  r = n ? _e : Oe
                return y.a.createElement(me.a, {
                  DescriptionIcon: r,
                  description: a,
                  descriptionStyle: Qe.description,
                  isFixed: !0,
                  items: e._getActionMenuItems(),
                  onCloseRequested: t,
                })
              }),
              b()(c()(e), '_getActionMenuItems', function () {
                var t = e._getContent(),
                  n = t.subText
                return [
                  { text: t.text, onClick: e._handleTimelineSwitch, Icon: Ee.a, subText: n },
                  { link: '/settings/content_preferences', text: Pe, onClick: e._handleContentPreferences, Icon: Le.a },
                ]
              }),
              b()(c()(e), '_getContent', function () {
                var t = e.props.useLatest
                return e.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                  ? { description: t ? Re : Ie, subText: t ? Ve : He, text: t ? Ue : ze }
                  : { description: t ? Me : Ie, subText: t ? Ke : De, text: t ? Be : Ae }
              }),
              b()(c()(e), '_handleTimelineSwitch', function (t) {
                var n = e.props.onToggle
                t(), n()
              }),
              b()(c()(e), '_handleContentPreferences', function (t) {
                var n = e.props.onContentPreferencesSelect
                t(), n()
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
                    t = e.onPress,
                    n = e.useLatest,
                    a = n ? je : xe,
                    r = n ? Ce : Fe
                  return y.a.createElement(de, {
                    accessibilityLabel: a,
                    hoverLabel: r,
                    onPress: t,
                    renderMenu: this._renderActionMenu,
                  })
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      b()(Ne, 'contextType', fe.a)
      var Qe = V.a.create(function (e) {
          return {
            description: {
              fontSize: e.fontSizes.headline1,
              color: e.colors.text,
              textAlign: 'center',
              fontWeight: e.fontWeights.bold,
            },
          }
        }),
        Je = Ne
      function We(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? We(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : We(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ge(e) {
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
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Xe = M.a.e4c6d14c,
        Ze = M.a.bffa2da7,
        Ye = (function (e) {
          u()(n, e)
          var t = Ge(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(c()(e), '_handleToggle', function () {
                var t = e.context,
                  n = t.featureSwitches,
                  a = t.viewport,
                  r = e.props,
                  i = r.addToast,
                  l = r.analytics,
                  o = r.selectedTimelineId,
                  c = r.updateBehavior,
                  s = r.useLatest
                a.scrollToTop(),
                  l.scribe({ component: 'customize', element: s ? 'see_top' : 'see_latest', action: 'click' })
                var u = s ? Xe : Ze
                c(
                  qe(
                    qe(
                      {},
                      o !== ce.a.HOME &&
                        s &&
                        n.isTrue('responsive_web_home_pinned_timelines_latest_enabled') && {
                          selectedTimelineId: ce.a.HOME,
                        },
                    ),
                    {},
                    { useLatest: !s },
                  ),
                ).then(function () {
                  n.isTrue('responsive_web_home_pinned_timelines_latest_enabled') || i({ text: u })
                })
              }),
              b()(c()(e), '_handleSwitchPress', function () {
                e.props.analytics.scribe({ section: 'navigation_bar', element: 'customize_button', action: 'click' })
              }),
              b()(c()(e), '_handleContentPreferencesSelect', function () {
                e.props.analytics.scribe({ component: 'customize', element: 'see_preferences', action: 'click' })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.useLatest
                  return y.a.createElement(Je, {
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
        })(y.a.Component)
      b()(Ye, 'contextType', fe.a)
      var $e = ue(Ye),
        et = n('lUZE'),
        tt = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        nt = n('yoO3'),
        at = (n('5BYb'), n('aeN7')),
        rt = n('hqKg'),
        it = n('wrlS'),
        lt = n('WA1W'),
        ot = Object(k.a)()
          .propsFromState(function () {
            return {
              module: Object(rt.createSelector)(
                it.d,
                function (e, t) {
                  return t.isLatestActive
                },
                function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  return t
                    ? Object(lt.e)(e.isTrue('responsive_web_graphql_home_latest_enabled'))
                    : Object(lt.f)(e.isTrue('responsive_web_graphql_home_enabled'))
                },
              ),
            }
          })
          .propsFromActions(function () {
            return { addToast: se.b, updateBehavior: _.e }
          })
          .withAnalytics(),
        ct = n('QIgh'),
        st = n('8UdT'),
        ut = n('iu0J'),
        pt = n('AP4B')
      function dt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function mt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? dt(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : dt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ft,
        ht,
        bt = mt(
          mt(
            mt({}, Object(ct.a)({ allowDownvote: !0, tweetDismissable: !0, shouldSelfThreadIncludeAvatar: !0 })),
            pt.a,
          ),
          {},
          b()({}, st.b.EventSummary, Object(ut.a)({ errorContext: 'HOME_TIMELINE_SCREEN' })),
        ),
        gt = n('MDbM'),
        yt = n('97Jx'),
        vt = n.n(yt),
        _t = n('FIs5'),
        wt =
          (n('jQ3i'),
          {
            home_alt_a: [
              {
                height: 200,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/hatched-baby-chick-400x200.v1.png',
                width: 400,
              },
              {
                height: 400,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/hatched-baby-chick-800x400.v1.png',
                width: 800,
              },
              {
                height: 600,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/hatched-baby-chick-1200x600.v1.png',
                width: 1200,
              },
            ],
            home_alt_b: [
              {
                height: 200,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/megaphone-400x200.v1.png',
                width: 400,
              },
              {
                height: 400,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/megaphone-800x400.v1.png',
                width: 800,
              },
              {
                height: 600,
                uri: 'https://abs.twimg.com/sticky/illustrations/empty-states/megaphone-1200x600.v1.png',
                width: 1200,
              },
            ],
          }),
        Tt = {
          home_alt_a: { headerMessage: M.a.d4d5785f, bodyMessage: M.a.f3f4c67b, buttonText: M.a.a399ed2f },
          home_alt_b: { headerMessage: M.a.d2c66f1f, bodyMessage: M.a.jb52037c, buttonText: M.a.b34cb956 },
        },
        kt = function (e) {
          return wt[e]
        },
        Ot = function (e, t) {
          var n
          return null === (n = Tt[t]) || void 0 === n ? void 0 : n[e]
        },
        Et = function (e) {
          return Ot('headerMessage', e)
        },
        Lt = function (e) {
          return Ot('bodyMessage', e)
        },
        St = function (e) {
          return Ot('buttonText', e)
        },
        Pt = M.a.d2c66f1f,
        jt = M.a.c3fbf1da,
        xt = M.a.bf17ded9,
        Ft = function (e) {
          var t = e.onButtonPress,
            n = e.onImpression,
            a = y.a.useContext(fe.a).featureSwitches.getStringValue('responsive_web_htl_empty_state_redesign_variant'),
            r = ['control', 'home_alt_a', 'home_alt_b'].includes(a) && 'control' !== a
          return y.a.createElement(
            _t.a,
            vt()(
              { buttonLink: '/i/connect_people', buttonText: r ? St(a) : xt, header: r ? Et(a) : Pt },
              r && { imageVariants: kt(a) },
              { message: r ? Lt(a) : jt, onButtonPress: t, onImpression: n },
            ),
          )
        },
        Ct = n('EUHl'),
        It = n('7BdX'),
        Mt = n('fTQJ'),
        Rt = { count: void 0 },
        Bt = M.a.f089620b,
        At = ot(function (e) {
          var t = e.analytics,
            n = e.module,
            a = e.recordTTFT,
            r = void 0 === a ? at.e : a,
            i = e.shouldFetchLoadedContentOnMount,
            l = void 0 === i || i,
            o = e.timelineRef,
            c = y.a.useRef(!0),
            s = function () {
              t.scribe({ component: 'empty_message', action: 'impression' })
            },
            u = function () {
              t.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
            },
            p = y.a.useCallback(
              function (e) {
                var t = e.entries
                if ((e.fetchStatus === gt.a.FAILED && (c.current = !1), c.current && t.length)) {
                  var n = t.some(function (e) {
                    return e.type === st.b.Tweet
                  })
                  ;(c.current = !1), n && r()
                }
              },
              [r, c],
            )
          return y.a.createElement(Mt.a, {
            entryConfiguration: bt,
            fetchTopOptions: Rt,
            module: n,
            newTweetsPillMode: Ct.a.URT,
            onEntriesRendered: p,
            prerollDisplayLocation: It.c.TIMELINE_HOME,
            renderEmptyState: function () {
              return y.a.createElement(Ft, { onButtonPress: u, onImpression: s })
            },
            shouldFetchLoadedContentOnMount: l,
            timelineRef: o,
            title: Bt,
          })
        }),
        Dt = n('7JQg'),
        Kt = n('VS6U'),
        zt = n('Es6L'),
        Ht = n('LsPn'),
        Ut = n('RhWx'),
        Vt = n.n(Ut),
        Nt = (n('z84I'), n('gZV8')),
        Qt = (n('enFi'), n('Fr3L')),
        Jt = n('lnL+'),
        Wt = n('Rp9C'),
        qt = n('jAXQ'),
        Gt = n.n(qt),
        Xt = function (e) {
          var t = Gt()(void 0 !== ft ? ft : (ft = n('/n9r')), e.topic),
            a = t.name,
            r = t.topic_id
          y.a.useEffect(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [Wt.a.forTopic(r)] } })
          }, [])
          var i = y.a.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [Wt.a.forTopic(r)] } })
            },
            [e.analytics, r],
          )
          return y.a.createElement(Jt.a, { link: '/i/topics/'.concat(r), onClick: i, text: a })
        },
        Zt = n('Irs7'),
        Yt = n('yUQf'),
        $t = n('DQzJ'),
        en = n('6iuV'),
        tn = M.a.ffd9cfe6,
        nn = void 0 !== ht ? ht : (ht = n('yKhE')),
        an = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        rn = function () {
          var e,
            t,
            n,
            a,
            r,
            i,
            l,
            o = y.a.useRef(0),
            c = Object(Zt.b)(),
            s = Object(Yt.a)(F.e.selectLoggedInUser),
            u = Object($t.a)(nn, {}).data,
            p = (
              ('User' ===
                (null == u ||
                null === (e = u.viewer) ||
                void 0 === e ||
                null === (t = e.user_results) ||
                void 0 === t ||
                null === (n = t.result) ||
                void 0 === n
                  ? void 0
                  : n.__typename) &&
                (null == u ||
                null === (a = u.viewer) ||
                void 0 === a ||
                null === (r = a.user_results) ||
                void 0 === r ||
                null === (i = r.result) ||
                void 0 === i ||
                null === (l = i.home_topics_navigator_slices) ||
                void 0 === l
                  ? void 0
                  : l.items)) ||
              []
            ).map(function (e, t) {
              return null != e && e.topic ? y.a.createElement(Xt, { analytics: c, key: t, topic: e.topic }) : null
            }),
            d = y.a.useCallback(
              function () {
                c.scribeAction('impression'), c.scribe({ element: 'see_more', action: 'impression' })
              },
              [c],
            ),
            m = y.a.useCallback(
              function (e) {
                var t = e.next,
                  n = e.previous
                n > t ? c.scribeAction('scroll_left') : n < t && c.scribeAction('scroll_right')
              },
              [c],
            ),
            f = y.a.useCallback(
              function (e) {
                var t = e.index,
                  n = e.intersectionRatio
                t === o.current - 1 && n >= Nt.c && c.scribeAction('reached_end')
              },
              [c],
            )
          y.a.useEffect(function () {
            p.length > 0 && d()
          }, []),
            y.a.useEffect(
              function () {
                o.current = p.length + 1
              },
              [p],
            )
          var h = y.a.useCallback(
              function () {
                c.scribe({ element: 'see_more', action: 'click' })
              },
              [c],
            ),
            b = s ? '/'.concat(s.screen_name, '/topics') : '/i/topics/picker',
            g = y.a.createElement(U.a, { key: 'seeMorePivot', link: b, onClick: h, type: 'brandOutlined' }, tn)
          return p.length > 0
            ? y.a.createElement(
                en.a,
                { childrenStyle: ln.childrenStyle, onScroll: m, onVisibleRangeChange: f, style: ln.carousel },
                [].concat(Vt()(p), [g]),
              )
            : null
        },
        ln = V.a.create(function (e) {
          return {
            carousel: {
              marginHorizontal: 'calc('.concat(e.spaces.space12, ' - ').concat(e.spaces.space2, ')'),
              marginBottom: e.spaces.space1,
              backgroundColor: e.colors.navigationBackground,
              zIndex: 1,
            },
            childrenStyle: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space12 },
          }
        }),
        on = function () {
          return y.a.createElement(Qt.a, { errorConfig: an }, y.a.createElement(rn, null))
        },
        cn = n('aITJ'),
        sn = n('0yYu'),
        un = n('mw9i'),
        pn = n('k/OQ')
      function dn(e) {
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
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return d()(this, n)
        }
      }
      var mn = M.a.i5f7b6b8,
        fn = M.a.d126cb7c,
        hn = M.a.ha8209bb,
        bn = { page: 'home' },
        gn = { page: 'home_latest' },
        yn = { section: 'topics_navigator', component: 'suggest_topics_module' },
        vn = (function (e) {
          u()(a, e)
          var t = dn(a)
          function a(e, n) {
            var i
            r()(this, a),
              (i = t.call(this, e, n)),
              b()(c()(i), '_lastTimelineSwitchTimestamp', 0),
              b()(c()(i), '_unmounted', !1),
              b()(c()(i), '_getTimelineMetadata', function () {
                var e = i._isLatestActive()
                return { scribeNamespace: e ? gn : bn, title: e ? fn : hn }
              }),
              b()(c()(i), '_getLink', function (e, t) {
                var n = i.props,
                  a = n.analytics,
                  r = n.selectedTimelineId,
                  l = n.updateBehavior
                return {
                  isActive: function () {
                    return r === e
                  },
                  label: t,
                  key: e,
                  onClick: function () {
                    if (r === e) i._timeline && i._timeline.refreshOrGoTop()
                    else {
                      var t = Date.now() - i._lastTimelineSwitchTimestamp
                      l({ selectedTimelineId: e }),
                        a.scribe({ section: r, element: e, action: 'click', data: { duration_ms: t } })
                    }
                  },
                  retainScrollPosition: !1,
                  to: { pathname: '/home' },
                }
              }),
              b()(c()(i), '_getLinks', function () {
                var e = i.props.useLatest,
                  t = i._getLink(ce.a.HOME, hn),
                  n = e ? i._getLink(ce.a.HOME_LATEST, fn) : void 0
                return [t].concat([n])
              }),
              b()(c()(i), '_isLatestActive', function () {
                return i._isLatestPinned()
                  ? i.props.selectedTimelineId === ce.a.HOME_LATEST
                  : i._latestTimelineSwitchEnabled && i.props.useLatest
              }),
              b()(c()(i), '_isLatestPinned', function () {
                return (
                  i._latestTimelineSwitchEnabled &&
                  i.props.useLatest &&
                  i.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                )
              }),
              b()(c()(i), '_renderTimeline', function () {
                var e = i._isLatestActive()
                return y.a.createElement(
                  L.a,
                  null,
                  i.context.featureSwitches.isTrue('home_timeline_topics_navigator_enabled')
                    ? y.a.createElement(Dt.b, { namespace: yn }, y.a.createElement(on, null))
                    : null,
                  y.a.createElement(At, {
                    isLatestActive: e,
                    shouldFetchLoadedContentOnMount: e,
                    timelineRef: i._setTimelineRef,
                  }),
                )
              }),
              b()(c()(i), '_renderPrimaryContent', function () {
                var e = i.props,
                  t = e.configurationFetchStatus,
                  n = e.history,
                  a = e.location,
                  r = i.context.isRestrictedSession,
                  l = y.a.createElement(j.a, { history: n })
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  Object(zt.a)() && !r
                    ? y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(oe, { history: n, location: a }),
                        y.a.createElement(sn.a, null),
                      )
                    : null,
                  y.a.createElement(
                    S.a,
                    { component: un.a, fab: l },
                    cn.b.isKaiOS()
                      ? y.a.createElement(Ht.a, { leftText: mn, onLeftClick: i._handleSoftLeftClick })
                      : null,
                    y.a.createElement(P.a, { fetchStatus: t, render: i._renderTimeline }),
                  ),
                )
              }),
              b()(c()(i), '_handleSoftLeftClick', function () {
                i.props.history.push('/account')
              }),
              b()(c()(i), '_handleTabRefresh', function () {
                i._timeline && i._timeline.refreshOrGoTop()
              }),
              b()(c()(i), '_handleWindowFocus', function () {
                i._timeline && i._timeline.fetchTop({ onlyIfStale: !0 })
              }),
              b()(c()(i), '_setTimelineRef', function (e) {
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
            l()(a, [
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
                    var t = cn.b.isDesktopOS() ? '' : '_mobile',
                      a = 'home'.concat(t)
                    ;(tt()
                      ? n
                          .e(340)
                          .then(n.bind(null, 'Iid0'))
                          .then(function (e) {
                            return e.default
                          })
                      : Promise.resolve(void 0)
                    ).then(function (t) {
                      !e._unmounted && t && (e._fpsTracking = t({ reportNamespace: a }))
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
                    t = this._isLatestPinned(),
                    n = Object(zt.a)(),
                    a = !n && t ? y.a.createElement(et.a, { style: _n.iconTwitter }) : void 0,
                    r = this._latestTimelineSwitchEnabled ? y.a.createElement($e, null) : void 0,
                    i = this._getTimelineMetadata(),
                    l = i.scribeNamespace,
                    o = i.title,
                    c = n || !t ? o : null,
                    s = t ? this._getLinks() : [],
                    u = s.length > 1 ? y.a.createElement(pn.a, { links: s }) : void 0
                  return y.a.createElement(
                    Dt.b,
                    { namespace: l },
                    y.a.createElement(
                      nt.a,
                      { locationKey: l.page },
                      y.a.createElement(Kt.a, {
                        centeredLogo: a,
                        documentTitle: o,
                        history: e,
                        onTabRefresh: this._handleTabRefresh,
                        primaryContent: this._renderPrimaryContent,
                        rightControl: r,
                        secondaryBar: u,
                        sidebarContent: y.a.createElement(v.a, null),
                        title: c,
                      }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(y.a.Component)
      b()(vn, 'contextType', fe.a)
      var _n = V.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = E(vn)
    },
    yKhE: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        l,
        o,
        c = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor_string' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'max_count' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'TopicPivotsCarouselQuery',
            selections: [
              {
                alias: 'viewer',
                args: (r = [{ kind: 'Literal', name: 's', value: 21 }]),
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
                                args: (l = [
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
                                      (o = {
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
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'TopicPivotsCarouselQuery',
            selections: [
              {
                alias: 'viewer',
                args: r,
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
                                args: l,
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
                                      o,
                                    ],
                                    type: 'HomeTopicsNavigatorSlices',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: l,
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
