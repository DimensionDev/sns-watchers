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
          return yn
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
        y = n('es0u'),
        v = n('wM4e'),
        _ = n('kHBp'),
        w = n('wqZ5'),
        T = n('rxPX'),
        k = function (e) {
          var t = Object(w.f)(e)
          return _.a.selectMany(e, t) || []
        },
        O = Object(T.a)()
          .propsFromState(function () {
            return { configurationFetchStatus: v.a, pinnedLists: k, selectedTimelineId: v.c, useLatest: v.d }
          })
          .propsFromActions(function () {
            return { clearLocalPinnedListStorage: w.a, fetchPins: w.c, updateBehavior: v.e }
          })
          .withAnalytics({ page: 'home' }),
        E = n('s14A'),
        L = n('dwig'),
        S = n('v//M'),
        P = n('0+qk'),
        j = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2dXj')),
        x = (n('ho0z'), n('G6rE')),
        F = Object(T.a)()
          .propsFromState(function () {
            return { loggedInUser: x.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          }),
        C = n('3XMw'),
        I = n.n(C),
        M = n('N5qz'),
        R = n('MWbm'),
        B = n('cHvH'),
        A = n('5mJL'),
        D = n('DNho'),
        K = n('XP29'),
        z = n('t62R'),
        H = n('/yvb'),
        U = n('rHpw'),
        V = n('cjZk'),
        N = n('3rWK'),
        Q = n('ll3R'),
        J = n('pNJr'),
        W = n('J0mu'),
        q = n('KrGU'),
        G = I.a.g34f2c63({ verb: '' }),
        X = I.a.e349147b,
        Z = g.createElement(V.a, null),
        Y = g.createElement(N.a, null),
        $ = g.createElement(Q.a, null),
        ee = g.createElement(J.a, null),
        te = g.createElement(W.a, null),
        ne = g.createElement(q.a, null),
        ae = U.a.create(function (e) {
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
        re = F(function (e) {
          var t = e.userAvatarURI
          return g.createElement(B.a, null, function (e) {
            var n = e.windowWidth,
              a = !M.a.isOneColumnSquishedLayout(n)
            return g.createElement(
              A.a,
              {
                avatarCell: g.createElement(D.a.Consumer, null, function (e) {
                  var n = e.avatarSize
                  return g.createElement(K.a, { size: n, style: ae.avatar, uri: t })
                }),
                avatarCellStyle: ae.avatarColumn,
                cellStyle: ae.body,
                style: ae.root,
              },
              g.createElement(z.b, { color: 'gray700', numberOfLines: 1, size: 'headline1', style: ae.fakeInput }, X),
              g.createElement(
                R.a,
                { style: ae.toolbar },
                g.createElement(
                  R.a,
                  { style: [ae.toolbarSection, ae.iconContainer] },
                  g.createElement(H.a, {
                    disabled: !0,
                    icon: Z,
                    size: 'medium',
                    style: [ae.toolBarButton, ae.firstToolBarButton],
                    type: 'brandText',
                  }),
                  g.createElement(H.a, {
                    disabled: !0,
                    icon: Y,
                    size: 'medium',
                    style: ae.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? g.createElement(H.a, {
                        disabled: !0,
                        icon: $,
                        size: 'medium',
                        style: ae.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  g.createElement(H.a, {
                    disabled: !0,
                    icon: ee,
                    size: 'medium',
                    style: ae.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? g.createElement(H.a, {
                        disabled: !0,
                        icon: te,
                        size: 'medium',
                        style: ae.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  g.createElement(H.a, {
                    disabled: !0,
                    icon: ne,
                    size: 'medium',
                    style: ae.toolBarButton,
                    type: 'brandText',
                  }),
                ),
                g.createElement(
                  R.a,
                  { style: ae.toolbarSection },
                  g.createElement(H.a, { disabled: !0, style: ae.tweetButton, type: 'brandFilled' }, G),
                ),
              ),
            )
          })
        }),
        ie = n('zb92'),
        le = Object(ie.a)({
          loader: function () {
            return (j.a.preload() || Promise.resolve()).then(function () {
              return Promise.all([n.e(0), n.e(3), n.e(4), n.e(5), n.e(81)]).then(n.bind(null, 'RrO2'))
            })
          },
          renderPlaceholder: function () {
            return g.createElement(re, null)
          },
        }),
        oe = n('EY8L'),
        ce = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('1YZw')),
        se = Object(T.a)()
          .propsFromState(function () {
            return { selectedTimelineId: v.c, useLatest: v.d }
          })
          .propsFromActions(function () {
            return { addToast: ce.b, updateBehavior: v.e }
          })
          .withAnalytics(),
        ue = (n('jQ/y'), n('1Iuc'), n('yZDr')),
        pe = function (e) {
          var t = e.accessibilityLabel,
            n = e.hoverLabel,
            a = e.onPress,
            r = e.renderMenu,
            i = g.createElement(ue.a, null)
          return g.createElement(H.a, {
            accessibilityLabel: t,
            hoverLabel: { label: n },
            icon: i,
            onPress: a,
            pullRight: !0,
            renderMenu: r,
            type: 'primaryText',
          })
        },
        de = n('mjJ+'),
        me = n('v6aA'),
        fe = n('Lsrn'),
        he = n('k/Ka')
      function be(e, t) {
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
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? be(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : be(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ye = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(he.a)(
          'svg',
          ge(
            ge({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [fe.a.root, e.style], viewBox: '0 0 36 36' },
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
      ye.metadata = { width: 36, height: 36 }
      var ve = ye
      function _e(e, t) {
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
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _e(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _e(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Te = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(he.a)(
          'svg',
          we(
            we({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [fe.a.root, e.style], viewBox: '0 0 36 36' },
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
      Te.metadata = { width: 36, height: 36 }
      var ke = Te,
        Oe = n('3JQt'),
        Ee = n('M2x3')
      function Le(e) {
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
      var Se = I.a.j681ac0d,
        Pe = I.a.g8220472,
        je = I.a.ccdd3766,
        xe = I.a.g2657de3,
        Fe = I.a.d126cb7c,
        Ce = I.a.c41ecf3c,
        Ie = I.a.d18aa6d4,
        Me = I.a.c90dcfa2,
        Re = I.a.bc52b0cd,
        Be = I.a.j6382fe9,
        Ae = I.a.f89f6785,
        De = I.a.e4acfd11,
        Ke = I.a.f0c7628a,
        ze = I.a.j7d0cac5,
        He = I.a.eeab4419,
        Ue = I.a.cae804f9,
        Ve = (function (e) {
          u()(n, e)
          var t = Le(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(c()(e), '_renderActionMenu', function (t) {
                var n = e.props.useLatest,
                  a = e._getContent().description,
                  r = n ? ve : ke
                return g.createElement(de.a, {
                  DescriptionIcon: r,
                  description: a,
                  descriptionStyle: Ne.description,
                  isFixed: !0,
                  items: e._getActionMenuItems(),
                  onCloseRequested: t,
                })
              }),
              b()(c()(e), '_getActionMenuItems', function () {
                var t = e._getContent(),
                  n = t.subText
                return [
                  { text: t.text, onClick: e._handleTimelineSwitch, Icon: Oe.a, subText: n },
                  { link: '/settings/content_preferences', text: Se, onClick: e._handleContentPreferences, Icon: Ee.a },
                ]
              }),
              b()(c()(e), '_getContent', function () {
                var t = e.props.useLatest
                return e.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                  ? { description: t ? Me : Ce, subText: t ? Ue : ze, text: t ? He : Ke }
                  : { description: t ? Ie : Ce, subText: t ? De : Ae, text: t ? Re : Be }
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
                    a = n ? Pe : je,
                    r = n ? Fe : xe
                  return g.createElement(pe, {
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
        })(g.PureComponent)
      b()(Ve, 'contextType', me.a)
      var Ne = U.a.create(function (e) {
          return {
            description: {
              fontSize: e.fontSizes.headline1,
              color: e.colors.text,
              textAlign: 'center',
              fontWeight: e.fontWeights.bold,
            },
          }
        }),
        Qe = Ve
      function Je(e, t) {
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
      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Je(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Je(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function qe(e) {
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
      var Ge = I.a.e4c6d14c,
        Xe = I.a.bffa2da7,
        Ze = (function (e) {
          u()(n, e)
          var t = qe(n)
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
                var u = s ? Ge : Xe
                c(
                  We(
                    We(
                      {},
                      o !== oe.a.HOME &&
                        s &&
                        n.isTrue('responsive_web_home_pinned_timelines_latest_enabled') && {
                          selectedTimelineId: oe.a.HOME,
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
                  return g.createElement(Qe, {
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
      b()(Ze, 'contextType', me.a)
      var Ye = se(Ze),
        $e = n('lUZE'),
        et = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        tt = n('yoO3'),
        nt = (n('5BYb'), n('aeN7')),
        at = n('hqKg'),
        rt = n('wrlS'),
        it = n('WA1W'),
        lt = Object(T.a)()
          .propsFromState(function () {
            return {
              module: Object(at.createSelector)(
                rt.d,
                function (e, t) {
                  return t.isLatestActive
                },
                function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  return t
                    ? Object(it.e)(e.isTrue('responsive_web_graphql_home_latest_enabled'))
                    : Object(it.f)(e.isTrue('responsive_web_graphql_home_enabled'))
                },
              ),
            }
          })
          .propsFromActions(function () {
            return { addToast: ce.b, updateBehavior: v.e }
          })
          .withAnalytics(),
        ot = n('QIgh'),
        ct = n('8UdT'),
        st = n('iu0J'),
        ut = n('AP4B')
      function pt(e, t) {
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
      function dt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pt(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var mt,
        ft,
        ht = dt(
          dt(
            dt({}, Object(ot.a)({ allowDownvote: !0, tweetDismissable: !0, shouldSelfThreadIncludeAvatar: !0 })),
            ut.a,
          ),
          {},
          b()({}, ct.b.EventSummary, Object(st.a)({ errorContext: 'HOME_TIMELINE_SCREEN' })),
        ),
        bt = n('MDbM'),
        gt = n('97Jx'),
        yt = n.n(gt),
        vt = n('FIs5'),
        _t =
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
        wt = {
          home_alt_a: { headerMessage: I.a.d4d5785f, bodyMessage: I.a.f3f4c67b, buttonText: I.a.a399ed2f },
          home_alt_b: { headerMessage: I.a.d2c66f1f, bodyMessage: I.a.jb52037c, buttonText: I.a.b34cb956 },
        },
        Tt = function (e) {
          return _t[e]
        },
        kt = function (e, t) {
          var n
          return null === (n = wt[t]) || void 0 === n ? void 0 : n[e]
        },
        Ot = function (e) {
          return kt('headerMessage', e)
        },
        Et = function (e) {
          return kt('bodyMessage', e)
        },
        Lt = function (e) {
          return kt('buttonText', e)
        },
        St = I.a.d2c66f1f,
        Pt = I.a.c3fbf1da,
        jt = I.a.bf17ded9,
        xt = function (e) {
          var t = e.onButtonPress,
            n = e.onImpression,
            a = g.useContext(me.a).featureSwitches.getStringValue('responsive_web_htl_empty_state_redesign_variant'),
            r = ['control', 'home_alt_a', 'home_alt_b'].includes(a) && 'control' !== a
          return g.createElement(
            vt.a,
            yt()(
              { buttonLink: '/i/connect_people', buttonText: r ? Lt(a) : jt, header: r ? Ot(a) : St },
              r && { imageVariants: Tt(a) },
              { message: r ? Et(a) : Pt, onButtonPress: t, onImpression: n },
            ),
          )
        },
        Ft = n('EUHl'),
        Ct = n('7BdX'),
        It = n('fTQJ'),
        Mt = { count: void 0 },
        Rt = I.a.f089620b,
        Bt = lt(function (e) {
          var t = e.analytics,
            n = e.module,
            a = e.recordTTFT,
            r = void 0 === a ? nt.e : a,
            i = e.shouldFetchLoadedContentOnMount,
            l = void 0 === i || i,
            o = e.timelineRef,
            c = g.useRef(!0),
            s = function () {
              t.scribe({ component: 'empty_message', action: 'impression' })
            },
            u = function () {
              t.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
            },
            p = g.useCallback(
              function (e) {
                var t = e.entries
                if ((e.fetchStatus === bt.a.FAILED && (c.current = !1), c.current && t.length)) {
                  var n = t.some(function (e) {
                    return e.type === ct.b.Tweet
                  })
                  ;(c.current = !1), n && r()
                }
              },
              [r, c],
            )
          return g.createElement(It.a, {
            entryConfiguration: ht,
            fetchTopOptions: Mt,
            module: n,
            newTweetsPillMode: Ft.a.URT,
            onEntriesRendered: p,
            prerollDisplayLocation: Ct.c.TIMELINE_HOME,
            renderEmptyState: function () {
              return g.createElement(xt, { onButtonPress: u, onImpression: s })
            },
            shouldFetchLoadedContentOnMount: l,
            timelineRef: o,
            title: Rt,
          })
        }),
        At = n('7JQg'),
        Dt = n('VS6U'),
        Kt = n('Es6L'),
        zt = n('LsPn'),
        Ht = n('RhWx'),
        Ut = n.n(Ht),
        Vt = (n('z84I'), n('gZV8')),
        Nt = (n('enFi'), n('Fr3L')),
        Qt = n('lnL+'),
        Jt = n('Rp9C'),
        Wt = n('jAXQ'),
        qt = n.n(Wt),
        Gt = function (e) {
          var t = qt()(void 0 !== mt ? mt : (mt = n('/n9r')), e.topic),
            a = t.name,
            r = t.topic_id
          g.useEffect(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [Jt.a.forTopic(r)] } })
          }, [])
          var i = g.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [Jt.a.forTopic(r)] } })
            },
            [e.analytics, r],
          )
          return g.createElement(Qt.a, { link: '/i/topics/'.concat(r), onClick: i, text: a })
        },
        Xt = n('Irs7'),
        Zt = n('yUQf'),
        Yt = n('DQzJ'),
        $t = n('6iuV'),
        en = I.a.ffd9cfe6,
        tn = void 0 !== ft ? ft : (ft = n('yKhE')),
        nn = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        an = function () {
          var e,
            t,
            n,
            a,
            r,
            i,
            l,
            o = g.useRef(0),
            c = Object(Xt.b)(),
            s = Object(Zt.a)(x.e.selectLoggedInUser),
            u = Object(Yt.a)(tn, {}).data,
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
              return null != e && e.topic ? g.createElement(Gt, { analytics: c, key: t, topic: e.topic }) : null
            }),
            d = g.useCallback(
              function () {
                c.scribeAction('impression'), c.scribe({ element: 'see_more', action: 'impression' })
              },
              [c],
            ),
            m = g.useCallback(
              function (e) {
                var t = e.next,
                  n = e.previous
                n > t ? c.scribeAction('scroll_left') : n < t && c.scribeAction('scroll_right')
              },
              [c],
            ),
            f = g.useCallback(
              function (e) {
                var t = e.index,
                  n = e.intersectionRatio
                t === o.current - 1 && n >= Vt.c && c.scribeAction('reached_end')
              },
              [c],
            )
          g.useEffect(function () {
            p.length > 0 && d()
          }, []),
            g.useEffect(
              function () {
                o.current = p.length + 1
              },
              [p],
            )
          var h = g.useCallback(
              function () {
                c.scribe({ element: 'see_more', action: 'click' })
              },
              [c],
            ),
            b = s ? '/'.concat(s.screen_name, '/topics') : '/i/topics/picker',
            y = g.createElement(H.a, { key: 'seeMorePivot', link: b, onClick: h, type: 'brandOutlined' }, en)
          return p.length > 0
            ? g.createElement(
                $t.a,
                { childrenStyle: rn.childrenStyle, onScroll: m, onVisibleRangeChange: f, style: rn.carousel },
                [].concat(Ut()(p), [y]),
              )
            : null
        },
        rn = U.a.create(function (e) {
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
        ln = function () {
          return g.createElement(Nt.a, { errorConfig: nn }, g.createElement(an, null))
        },
        on = n('aITJ'),
        cn = n('0yYu'),
        sn = n('mw9i'),
        un = n('k/OQ')
      function pn(e) {
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
      var dn = I.a.i5f7b6b8,
        mn = I.a.d126cb7c,
        fn = I.a.ha8209bb,
        hn = { page: 'home' },
        bn = { page: 'home_latest' },
        gn = { section: 'topics_navigator', component: 'suggest_topics_module' },
        yn = (function (e) {
          u()(a, e)
          var t = pn(a)
          function a(e, n) {
            var i
            r()(this, a),
              (i = t.call(this, e, n)),
              b()(c()(i), '_lastTimelineSwitchTimestamp', 0),
              b()(c()(i), '_unmounted', !1),
              b()(c()(i), '_getTimelineMetadata', function () {
                var e = i._isLatestActive()
                return { scribeNamespace: e ? bn : hn, title: e ? mn : fn }
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
                  t = i._getLink(oe.a.HOME, fn),
                  n = e ? i._getLink(oe.a.HOME_LATEST, mn) : void 0
                return [t].concat([n])
              }),
              b()(c()(i), '_isLatestActive', function () {
                return i._isLatestPinned()
                  ? i.props.selectedTimelineId === oe.a.HOME_LATEST
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
                return g.createElement(
                  E.a,
                  null,
                  i.context.featureSwitches.isTrue('home_timeline_topics_navigator_enabled')
                    ? g.createElement(At.b, { namespace: gn }, g.createElement(ln, null))
                    : null,
                  g.createElement(Bt, {
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
                  l = g.createElement(P.a, { history: n })
                return g.createElement(
                  g.Fragment,
                  null,
                  Object(Kt.a)() && !r
                    ? g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(le, { history: n, location: a }),
                        g.createElement(cn.a, null),
                      )
                    : null,
                  g.createElement(
                    L.a,
                    { component: sn.a, fab: l },
                    on.b.isKaiOS()
                      ? g.createElement(zt.a, { leftText: dn, onLeftClick: i._handleSoftLeftClick })
                      : null,
                    g.createElement(S.a, { fetchStatus: t, render: i._renderTimeline }),
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
                    var t = on.b.isDesktopOS() ? '' : '_mobile',
                      a = 'home'.concat(t)
                    ;(et()
                      ? n
                          .e(336)
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
                    n = Object(Kt.a)(),
                    a = !n && t ? g.createElement($e.a, { style: vn.iconTwitter }) : void 0,
                    r = this._latestTimelineSwitchEnabled ? g.createElement(Ye, null) : void 0,
                    i = this._getTimelineMetadata(),
                    l = i.scribeNamespace,
                    o = i.title,
                    c = n || !t ? o : null,
                    s = t ? this._getLinks() : [],
                    u = s.length > 1 ? g.createElement(un.a, { links: s }) : void 0
                  return g.createElement(
                    At.b,
                    { namespace: l },
                    g.createElement(
                      tt.a,
                      { locationKey: l.page },
                      g.createElement(Dt.a, {
                        centeredLogo: a,
                        documentTitle: o,
                        history: e,
                        onTabRefresh: this._handleTabRefresh,
                        primaryContent: this._renderPrimaryContent,
                        rightControl: r,
                        secondaryBar: u,
                        sidebarContent: g.createElement(y.a, null),
                        title: c,
                      }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(g.Component)
      b()(yn, 'contextType', me.a)
      var vn = U.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = O(yn)
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
