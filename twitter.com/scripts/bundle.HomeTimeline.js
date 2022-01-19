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
    cOLG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'HomeTimeline', function () {
          return pn
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
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
        y = n.n(h),
        b = (n('2G9S'), n('ERkP')),
        v = n('es0u'),
        _ = n('wM4e'),
        g = n('kHBp'),
        T = n('wqZ5'),
        E = n('rxPX'),
        w = function (e) {
          var t = Object(T.f)(e)
          return g.a.selectMany(e, t) || []
        },
        O = Object(E.a)()
          .propsFromState(function () {
            return { configurationFetchStatus: _.a, pinnedLists: w, selectedTimelineId: _.c, useLatest: _.d }
          })
          .propsFromActions(function () {
            return { clearLocalPinnedListStorage: T.a, fetchPins: T.c, updateBehavior: _.e }
          })
          .withAnalytics({ page: 'home' }),
        k = n('s14A'),
        L = n('dwig'),
        P = n('v//M'),
        S = n('0+qk'),
        j = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2dXj')),
        F = (n('ho0z'), n('G6rE')),
        C = Object(E.a)()
          .propsFromState(function () {
            return { loggedInUser: F.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          }),
        x = n('3XMw'),
        R = n.n(x),
        I = n('N5qz'),
        B = n('MWbm'),
        A = n('cHvH'),
        M = n('5mJL'),
        D = n('DNho'),
        K = n('XP29'),
        z = n('t62R'),
        H = n('/yvb'),
        U = n('rHpw'),
        N = n('cjZk'),
        Q = n('3rWK'),
        V = n('ll3R'),
        W = n('pNJr'),
        J = n('J0mu'),
        q = n('KrGU'),
        G = R.a.g34f2c63({ verb: '' }),
        X = R.a.e349147b,
        Z = b.createElement(N.a, null),
        Y = b.createElement(Q.a, null),
        $ = b.createElement(V.a, null),
        ee = b.createElement(W.a, null),
        te = b.createElement(J.a, null),
        ne = b.createElement(q.a, null),
        re = U.a.create(function (e) {
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
        ae = C(function (e) {
          var t = e.userAvatarURI
          return b.createElement(A.a, null, function (e) {
            var n = e.windowWidth,
              r = !I.a.isOneColumnSquishedLayout(n)
            return b.createElement(
              M.a,
              {
                avatarCell: b.createElement(D.a.Consumer, null, function (e) {
                  var n = e.avatarSize
                  return b.createElement(K.a, { size: n, style: re.avatar, uri: t })
                }),
                avatarCellStyle: re.avatarColumn,
                cellStyle: re.body,
                style: re.root,
              },
              b.createElement(z.b, { color: 'gray700', numberOfLines: 1, size: 'headline1', style: re.fakeInput }, X),
              b.createElement(
                B.a,
                { style: re.toolbar },
                b.createElement(
                  B.a,
                  { style: [re.toolbarSection, re.iconContainer] },
                  b.createElement(H.a, {
                    disabled: !0,
                    icon: Z,
                    size: 'medium',
                    style: [re.toolBarButton, re.firstToolBarButton],
                    type: 'brandText',
                  }),
                  b.createElement(H.a, {
                    disabled: !0,
                    icon: Y,
                    size: 'medium',
                    style: re.toolBarButton,
                    type: 'brandText',
                  }),
                  r
                    ? b.createElement(H.a, {
                        disabled: !0,
                        icon: $,
                        size: 'medium',
                        style: re.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  b.createElement(H.a, {
                    disabled: !0,
                    icon: ee,
                    size: 'medium',
                    style: re.toolBarButton,
                    type: 'brandText',
                  }),
                  r
                    ? b.createElement(H.a, {
                        disabled: !0,
                        icon: te,
                        size: 'medium',
                        style: re.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  b.createElement(H.a, {
                    disabled: !0,
                    icon: ne,
                    size: 'medium',
                    style: re.toolBarButton,
                    type: 'brandText',
                  }),
                ),
                b.createElement(
                  B.a,
                  { style: re.toolbarSection },
                  b.createElement(H.a, { disabled: !0, style: re.tweetButton, type: 'brandFilled' }, G),
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
            return b.createElement(ae, null)
          },
        }),
        oe = n('EY8L'),
        ce = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('1YZw')),
        se = Object(E.a)()
          .propsFromState(function () {
            return { selectedTimelineId: _.c, useLatest: _.d }
          })
          .propsFromActions(function () {
            return { addToast: ce.b, updateBehavior: _.e }
          })
          .withAnalytics(),
        ue = (n('jQ/y'), n('1Iuc'), n('yZDr')),
        pe = function (e) {
          var t = e.accessibilityLabel,
            n = e.hoverLabel,
            r = e.onPress,
            a = e.renderMenu,
            i = b.createElement(ue.a, null)
          return b.createElement(H.a, {
            accessibilityLabel: t,
            hoverLabel: { label: n },
            icon: i,
            onPress: r,
            pullRight: !0,
            renderMenu: a,
            type: 'primaryText',
          })
        },
        de = n('mjJ+'),
        me = n('v6aA'),
        fe = n('Lsrn'),
        he = n('k/Ka')
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
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ye(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
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
        return Object(he.a)(
          'svg',
          be(
            be({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [fe.a.root, e.style], viewBox: '0 0 36 36' },
          ),
          b.createElement(
            'g',
            null,
            b.createElement('path', {
              d: 'M27.325 20.595c0 7.333-5.913 13.278-13.206 13.278S.912 27.928.912 20.595 6.825 7.317 14.12 7.317s13.205 5.944 13.205 13.278',
              fill: '#71C9F8',
            }),
            b.createElement('path', {
              d: 'M24.576 20.682c0 5.802-4.678 10.506-10.45 10.506-5.77 0-10.448-4.704-10.448-10.506s4.678-10.506 10.45-10.506c5.77 0 10.448 4.704 10.448 10.506',
              fill: '#97E3FF',
            }),
            b.createElement('path', {
              d: 'M18.98 20.94l-3.86-.583v-6.215c0-.552-.45-1-1-1s-1 .448-1 1v7.076c0 .06.023.112.033.17.007.042.012.082.025.123.026.084.063.158.11.23.022.038.044.075.072.11.05.06.11.11.173.158.042.03.08.06.128.086.065.034.133.055.204.074.04.01.072.035.114.04l4.704.71c.05.01.1.012.15.012.487 0 .914-.355.988-.85.08-.548-.295-1.058-.84-1.14z',
              fill: '#005FD1',
            }),
            b.createElement('path', {
              d: 'M24.553 20.682c0 5.79-4.68 10.5-10.434 10.5S3.683 26.47 3.683 20.68c0-2.953 1.227-5.707 3.31-7.665l.674 1.127c.38.635 1.227.668 1.524.06l1.153-2.36 1.312-2.687c.24-.49-.104-1.067-.65-1.088l-2.988-.116-2.625-.1c-.678-.027-1.05.735-.67 1.37l.804 1.344C2.613 13.065.883 16.736.883 20.683c0 7.333 5.937 13.298 13.234 13.298s13.234-5.964 13.234-13.297h-2.8z',
              fill: '#1DA1F2',
            }),
            b.createElement('path', {
              d: 'M35 13.36h-1.467v-1.34c0-.552-.448-1-1-1s-1 .448-1 1v1.34h-1.467c-.552 0-1 .45-1 1s.448 1 1 1h1.467v1.342c0 .552.448 1 1 1s1-.448 1-1v-1.34H35c.552 0 1-.45 1-1s-.448-1-1-1z',
              fill: '#FFAD1F',
            }),
            b.createElement('path', {
              d: 'M28.646 4.138h-2.01v-2.01c0-.552-.448-1-1-1s-1 .448-1 1v2.01h-2.01c-.552 0-1 .448-1 1s.448 1 1 1h2.01v2.01c0 .552.448 1 1 1s1-.448 1-1v-2.01h2.01c.552 0 1-.448 1-1s-.447-1-1-1z',
              fill: '#F6809A',
            }),
          ),
        )
      }
      ve.metadata = { width: 36, height: 36 }
      var _e = ve
      function ge(e, t) {
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
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ge(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ge(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ee = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(he.a)(
          'svg',
          Te(
            Te({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [fe.a.root, e.style], viewBox: '0 0 36 36' },
          ),
          b.createElement(
            'g',
            null,
            b.createElement('path', {
              d: 'M35.508 15.41l-9.295-3.387L22.438 1.47c-.108-.302-.357-.48-.722-.495-.322.007-.604.22-.698.53l-3.293 10.71-9.132 3.805c-.285.118-.467.4-.46.708.007.308.203.58.492.686L17.92 20.8l3.775 10.552c.107.298.39.496.704.496h.016c.322-.007.604-.22.698-.53l3.293-10.712 9.132-3.803c.284-.118.466-.4.46-.708-.007-.308-.203-.58-.492-.686z',
              fill: '#61BCF6',
            }),
            b.createElement('path', {
              d: 'M9.57 4.715l-2.906.065-.06-2.715C6.585 1.34 5.983.763 5.256.78 4.53.796 3.955 1.4 3.97 2.125l.063 2.715-2.747.062C.56 4.92-.016 5.522 0 6.248c.017.726.62 1.302 1.346 1.285l2.747-.062.062 2.716c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.062-2.715 2.905-.066c.725-.017 1.3-.62 1.285-1.346-.017-.726-.62-1.302-1.346-1.285z',
              fill: '#F16888',
            }),
            b.createElement('path', {
              d: 'M14.205 29.69l-1.65.036-.034-1.518c-.016-.726-.618-1.302-1.344-1.286s-1.302.62-1.286 1.345l.034 1.518-1.54.035c-.726.016-1.302.62-1.286 1.345.017.726.62 1.302 1.345 1.286l1.54-.034.034 1.518c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.034-1.518 1.65-.037c.726-.016 1.302-.62 1.286-1.345-.016-.727-.62-1.303-1.345-1.286z',
              fill: '#FD9E1A',
            }),
          ),
        )
      }
      Ee.metadata = { width: 36, height: 36 }
      var we = Ee,
        Oe = n('3JQt'),
        ke = n('M2x3')
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Pe = R.a.j681ac0d,
        Se = R.a.g8220472,
        je = R.a.ccdd3766,
        Fe = R.a.g2657de3,
        Ce = R.a.d126cb7c,
        xe = R.a.c41ecf3c,
        Re = R.a.d18aa6d4,
        Ie = R.a.c90dcfa2,
        Be = R.a.bc52b0cd,
        Ae = R.a.j6382fe9,
        Me = R.a.f89f6785,
        De = R.a.e4acfd11,
        Ke = R.a.f0c7628a,
        ze = R.a.j7d0cac5,
        He = R.a.eeab4419,
        Ue = R.a.cae804f9,
        Ne = (function (e) {
          u()(n, e)
          var t = Le(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(c()(e), '_renderActionMenu', function (t) {
                var n = e.props.useLatest,
                  r = e._getContent().description,
                  a = n ? _e : we
                return b.createElement(de.a, {
                  DescriptionIcon: a,
                  description: r,
                  descriptionStyle: Qe.description,
                  isFixed: !0,
                  items: e._getActionMenuItems(),
                  onCloseRequested: t,
                })
              }),
              y()(c()(e), '_getActionMenuItems', function () {
                var t = e._getContent(),
                  n = t.subText
                return [
                  { text: t.text, onClick: e._handleTimelineSwitch, Icon: Oe.a, subText: n },
                  { link: '/settings/content_preferences', text: Pe, onClick: e._handleContentPreferences, Icon: ke.a },
                ]
              }),
              y()(c()(e), '_getContent', function () {
                var t = e.props.useLatest
                return e.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                  ? { description: t ? Ie : xe, subText: t ? Ue : ze, text: t ? He : Ke }
                  : { description: t ? Re : xe, subText: t ? De : Me, text: t ? Be : Ae }
              }),
              y()(c()(e), '_handleTimelineSwitch', function (t) {
                var n = e.props.onToggle
                t(), n()
              }),
              y()(c()(e), '_handleContentPreferences', function (t) {
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
                    r = n ? Se : je,
                    a = n ? Ce : Fe
                  return b.createElement(pe, {
                    accessibilityLabel: r,
                    hoverLabel: a,
                    onPress: t,
                    renderMenu: this._renderActionMenu,
                  })
                },
              },
            ]),
            n
          )
        })(b.PureComponent)
      y()(Ne, 'contextType', me.a)
      var Qe = U.a.create(function (e) {
          return {
            description: {
              fontSize: e.fontSizes.headline1,
              color: e.colors.text,
              textAlign: 'center',
              fontWeight: e.fontWeights.bold,
            },
          }
        }),
        Ve = Ne
      function We(e, t) {
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
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? We(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : We(Object(n)).forEach(function (t) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Ge = R.a.e4c6d14c,
        Xe = R.a.bffa2da7,
        Ze = (function (e) {
          u()(n, e)
          var t = qe(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(c()(e), '_handleToggle', function () {
                var t = e.context,
                  n = t.featureSwitches,
                  r = t.viewport,
                  a = e.props,
                  i = a.addToast,
                  l = a.analytics,
                  o = a.selectedTimelineId,
                  c = a.updateBehavior,
                  s = a.useLatest
                r.scrollToTop(),
                  l.scribe({ component: 'customize', element: s ? 'see_top' : 'see_latest', action: 'click' })
                var u = s ? Ge : Xe
                c(
                  Je(
                    Je(
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
              y()(c()(e), '_handleSwitchPress', function () {
                e.props.analytics.scribe({ section: 'navigation_bar', element: 'customize_button', action: 'click' })
              }),
              y()(c()(e), '_handleContentPreferencesSelect', function () {
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
                  return b.createElement(Ve, {
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
        })(b.Component)
      y()(Ze, 'contextType', me.a)
      var Ye = se(Ze),
        $e = n('lUZE'),
        et = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        tt = n('yoO3'),
        nt = (n('5BYb'), n('aeN7')),
        rt = n('hqKg'),
        at = n('wrlS'),
        it = n('WA1W'),
        lt = Object(E.a)()
          .propsFromState(function () {
            return {
              module: Object(rt.createSelector)(
                at.d,
                function (e, t) {
                  return t.isLatestActive
                },
                function (e, t) {
                  return t
                    ? Object(it.e)(e.isTrue('responsive_web_graphql_home_latest_enabled'))
                    : Object(it.f)(e.isTrue('responsive_web_graphql_home_enabled'))
                },
              ),
            }
          })
          .propsFromActions(function () {
            return { addToast: ce.b, updateBehavior: _.e }
          })
          .withAnalytics(),
        ot = n('QIgh'),
        ct = n('8UdT'),
        st = n('iu0J'),
        ut = n('AP4B')
      function pt(e, t) {
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
      function dt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pt(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var mt = dt(
          dt(
            dt({}, Object(ot.a)({ allowDownvote: !0, tweetDismissable: !0, shouldSelfThreadIncludeAvatar: !0 })),
            ut.a,
          ),
          {},
          y()({}, ct.b.EventSummary, Object(st.a)({ errorContext: 'HOME_TIMELINE_SCREEN' })),
        ),
        ft = n('MDbM'),
        ht = n('FIs5'),
        yt = R.a.d2c66f1f,
        bt = R.a.c3fbf1da,
        vt = R.a.bf17ded9,
        _t = function (e) {
          var t = e.onButtonPress,
            n = e.onImpression
          return b.createElement(ht.a, {
            buttonLink: '/i/connect_people',
            buttonText: vt,
            header: yt,
            message: bt,
            onButtonPress: t,
            onImpression: n,
          })
        },
        gt = n('EUHl'),
        Tt = n('7BdX'),
        Et = n('fTQJ')
      function wt(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var Ot = { count: void 0 },
        kt = R.a.f089620b,
        Lt = (function (e) {
          u()(n, e)
          var t = wt(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              y()(c()(i), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  n = e.fetchStatus,
                  r = i.props.recordTTFT
                if ((n === ft.a.FAILED && (i._shouldRecordTTFT = !1), i._shouldRecordTTFT && t.length)) {
                  var a = t.some(function (e) {
                    return e.type === ct.b.Tweet
                  })
                  ;(i._shouldRecordTTFT = !1), a && r()
                }
              }),
              y()(c()(i), '_renderEmptyTimeline', function () {
                return b.createElement(_t, {
                  onButtonPress: i._handleEmptyHtlButtonPress,
                  onImpression: i._handleEmptyHtlImpression,
                })
              }),
              y()(c()(i), '_handleEmptyHtlImpression', function () {
                i.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              y()(c()(i), '_handleEmptyHtlButtonPress', function () {
                i.props.analytics.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
              }),
              (i._shouldRecordTTFT = !0),
              i
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.module,
                    n = e.shouldFetchLoadedContentOnMount,
                    r = e.timelineRef
                  return b.createElement(Et.a, {
                    entryConfiguration: mt,
                    fetchTopOptions: Ot,
                    module: t,
                    newTweetsPillMode: gt.a.URT,
                    onEntriesRendered: this._handleEntriesRendered,
                    prerollDisplayLocation: Tt.c.TIMELINE_HOME,
                    renderEmptyState: this._renderEmptyTimeline,
                    shouldFetchLoadedContentOnMount: n,
                    timelineRef: r,
                    title: kt,
                  })
                },
              },
            ]),
            n
          )
        })(b.Component)
      y()(Lt, 'defaultProps', { isLatestActive: !1, recordTTFT: nt.e, shouldFetchLoadedContentOnMount: !0 }),
        y()(Lt, 'contextType', me.a)
      var Pt,
        St,
        jt = lt(Lt),
        Ft = n('7JQg'),
        Ct = n('VS6U'),
        xt = n('Es6L'),
        Rt = n('LsPn'),
        It = n('RhWx'),
        Bt = n.n(It),
        At = (n('z84I'), n('gZV8')),
        Mt = (n('enFi'), n('Fr3L')),
        Dt = n('lnL+'),
        Kt = n('Rp9C'),
        zt = n('jAXQ'),
        Ht = n.n(zt),
        Ut = function (e) {
          var t = Ht()(void 0 !== Pt ? Pt : (Pt = n('/n9r')), e.topic),
            r = t.name,
            a = t.topic_id
          b.useEffect(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [Kt.a.forTopic(a)] } })
          }, [])
          var i = b.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [Kt.a.forTopic(a)] } })
            },
            [e.analytics, a],
          )
          return b.createElement(Dt.a, { link: '/i/topics/'.concat(a), onClick: i, text: r })
        },
        Nt = n('Irs7'),
        Qt = n('yUQf'),
        Vt = n('DQzJ'),
        Wt = n('6iuV'),
        Jt = R.a.ffd9cfe6,
        qt = void 0 !== St ? St : (St = n('yKhE')),
        Gt = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        Xt = function () {
          var e,
            t,
            n,
            r,
            a,
            i,
            l,
            o = b.useRef(0),
            c = Object(Nt.b)(),
            s = Object(Qt.a)(F.e.selectLoggedInUser),
            u = Object(Vt.a)(qt, {}, Gt).data,
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
                null === (r = u.viewer) ||
                void 0 === r ||
                null === (a = r.user_results) ||
                void 0 === a ||
                null === (i = a.result) ||
                void 0 === i ||
                null === (l = i.home_topics_navigator_slices) ||
                void 0 === l
                  ? void 0
                  : l.items)) ||
              []
            ).map(function (e, t) {
              return null != e && e.topic ? b.createElement(Ut, { analytics: c, key: t, topic: e.topic }) : null
            }),
            d = b.useCallback(
              function () {
                c.scribeAction('impression'), c.scribe({ element: 'see_more', action: 'impression' })
              },
              [c],
            ),
            m = b.useCallback(
              function (e) {
                var t = e.next,
                  n = e.previous
                n > t ? c.scribeAction('scroll_left') : n < t && c.scribeAction('scroll_right')
              },
              [c],
            ),
            f = b.useCallback(
              function (e) {
                var t = e.index,
                  n = e.intersectionRatio
                t === o.current - 1 && n >= At.c && c.scribeAction('reached_end')
              },
              [c],
            )
          b.useEffect(function () {
            p.length > 0 && d()
          }, []),
            b.useEffect(
              function () {
                o.current = p.length + 1
              },
              [p],
            )
          var h = b.useCallback(
              function () {
                c.scribe({ element: 'see_more', action: 'click' })
              },
              [c],
            ),
            y = s ? '/'.concat(s.screen_name, '/topics') : '/i/topics/picker',
            v = b.createElement(H.a, { key: 'seeMorePivot', link: y, onClick: h, type: 'brandOutlined' }, Jt)
          return p.length > 0
            ? b.createElement(
                Wt.a,
                { childrenStyle: Zt.childrenStyle, onScroll: m, onVisibleRangeChange: f, style: Zt.carousel },
                [].concat(Bt()(p), [v]),
              )
            : null
        },
        Zt = U.a.create(function (e) {
          return {
            carousel: { marginHorizontal: 'calc('.concat(e.spaces.space12, ' - ').concat(e.spaces.space2, ')') },
            childrenStyle: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space12 },
          }
        }),
        Yt = function () {
          return b.createElement(Mt.a, { errorConfig: Gt }, b.createElement(Xt, null))
        },
        $t = n('aITJ'),
        en = n('0yYu'),
        tn = n('mw9i'),
        nn = n('k/OQ')
      function rn(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return d()(this, n)
        }
      }
      var an = R.a.i5f7b6b8,
        ln = R.a.d126cb7c,
        on = R.a.ha8209bb,
        cn = { page: 'home' },
        sn = { page: 'home_latest' },
        un = { section: 'topics_navigator', component: 'suggest_topics_module' },
        pn = (function (e) {
          u()(r, e)
          var t = rn(r)
          function r(e, n) {
            var i
            a()(this, r),
              (i = t.call(this, e, n)),
              y()(c()(i), '_lastTimelineSwitchTimestamp', 0),
              y()(c()(i), '_unmounted', !1),
              y()(c()(i), '_getTimelineMetadata', function () {
                var e = i._isLatestActive()
                return { scribeNamespace: e ? sn : cn, title: e ? ln : on }
              }),
              y()(c()(i), '_getLink', function (e, t) {
                var n = i.props,
                  r = n.analytics,
                  a = n.selectedTimelineId,
                  l = n.updateBehavior
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
                      l({ selectedTimelineId: e }),
                        r.scribe({ section: a, element: e, action: 'click', data: { duration_ms: t } })
                    }
                  },
                  retainScrollPosition: !1,
                  to: { pathname: '/home' },
                }
              }),
              y()(c()(i), '_getLinks', function () {
                var e = i.props.useLatest,
                  t = i._getLink(oe.a.HOME, on),
                  n = e ? i._getLink(oe.a.HOME_LATEST, ln) : void 0
                return [t].concat([n])
              }),
              y()(c()(i), '_isLatestActive', function () {
                return i._isLatestPinned()
                  ? i.props.selectedTimelineId === oe.a.HOME_LATEST
                  : i._latestTimelineSwitchEnabled && i.props.useLatest
              }),
              y()(c()(i), '_isLatestPinned', function () {
                return (
                  i._latestTimelineSwitchEnabled &&
                  i.props.useLatest &&
                  i.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                )
              }),
              y()(c()(i), '_renderTimeline', function () {
                var e = i._isLatestActive()
                return b.createElement(
                  k.a,
                  null,
                  i.context.featureSwitches.isTrue('home_timeline_topics_navigator_enabled')
                    ? b.createElement(Ft.b, { namespace: un }, b.createElement(Yt, null))
                    : null,
                  b.createElement(jt, {
                    isLatestActive: e,
                    shouldFetchLoadedContentOnMount: e,
                    timelineRef: i._setTimelineRef,
                  }),
                )
              }),
              y()(c()(i), '_renderPrimaryContent', function () {
                var e = i.props,
                  t = e.configurationFetchStatus,
                  n = e.history,
                  r = e.location,
                  a = i.context.isRestrictedSession,
                  l = b.createElement(S.a, { history: n })
                return b.createElement(
                  b.Fragment,
                  null,
                  Object(xt.a)() && !a
                    ? b.createElement(
                        b.Fragment,
                        null,
                        b.createElement(le, { history: n, location: r }),
                        b.createElement(en.a, null),
                      )
                    : null,
                  b.createElement(
                    L.a,
                    { component: tn.a, fab: l },
                    $t.b.isKaiOS()
                      ? b.createElement(Rt.a, { leftText: an, onLeftClick: i._handleSoftLeftClick })
                      : null,
                    b.createElement(P.a, { fetchStatus: t, render: i._renderTimeline }),
                  ),
                )
              }),
              y()(c()(i), '_handleSoftLeftClick', function () {
                i.props.history.push('/account')
              }),
              y()(c()(i), '_handleTabRefresh', function () {
                i._timeline && i._timeline.refreshOrGoTop()
              }),
              y()(c()(i), '_handleWindowFocus', function () {
                i._timeline && i._timeline.fetchTop({ onlyIfStale: !0 })
              }),
              y()(c()(i), '_setTimelineRef', function (e) {
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
            l()(r, [
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
                    var t = $t.b.isDesktopOS() ? '' : '_mobile',
                      r = 'home'.concat(t)
                    ;(et()
                      ? n
                          .e(334)
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
                    t = this._isLatestPinned(),
                    n = Object(xt.a)(),
                    r = !n && t ? b.createElement($e.a, { style: dn.iconTwitter }) : void 0,
                    a = this._latestTimelineSwitchEnabled ? b.createElement(Ye, null) : void 0,
                    i = this._getTimelineMetadata(),
                    l = i.scribeNamespace,
                    o = i.title,
                    c = n || !t ? o : null,
                    s = t ? this._getLinks() : [],
                    u = s.length > 1 ? b.createElement(nn.a, { links: s }) : void 0
                  return b.createElement(
                    Ft.b,
                    { namespace: l },
                    b.createElement(
                      tt.a,
                      { locationKey: l.page },
                      b.createElement(Ct.a, {
                        centeredLogo: r,
                        documentTitle: o,
                        history: e,
                        onTabRefresh: this._handleTabRefresh,
                        primaryContent: this._renderPrimaryContent,
                        rightControl: a,
                        secondaryBar: u,
                        sidebarContent: b.createElement(v.a, null),
                        title: c,
                      }),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(b.Component)
      y()(pn, 'contextType', me.a)
      var dn = U.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = O(pn)
    },
    yKhE: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        i,
        l,
        o,
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
