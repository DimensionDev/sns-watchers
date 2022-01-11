;(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
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
        c = n('K1lQ').__internal.fetchQuery
      e.exports = function (e, t, n) {
        o()
        var l = i(),
          s = a(e, t, n && n.networkCacheConfig ? n.networkCacheConfig : { force: !0 })
        return r({
          componentDisplayName: 'useLazyLoadQuery()',
          fetchKey: null == n ? void 0 : n.fetchKey,
          fetchObservable: c(l, s),
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
          return Zn
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('KEM+'),
        y = n.n(h),
        v = (n('2G9S'), n('ERkP')),
        b = n('es0u'),
        g = n('wM4e'),
        _ = n('kHBp'),
        O = n('wqZ5'),
        T = n('rxPX'),
        E = function (e) {
          var t = Object(O.f)(e)
          return _.a.selectMany(e, t) || []
        },
        w = Object(T.a)()
          .propsFromState(function () {
            return { configurationFetchStatus: g.a, pinnedLists: E, selectedTimelineId: g.c, useLatest: g.d }
          })
          .propsFromActions(function () {
            return { clearLocalPinnedListStorage: O.a, fetchPins: O.c, updateBehavior: g.e }
          })
          .withAnalytics({ page: 'home' }),
        k = n('s14A'),
        P = n('dwig'),
        L = n('v//M'),
        S = n('0+qk'),
        j = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2dXj')),
        F = n('v6aA'),
        C = (n('ho0z'), n('G6rE')),
        x = Object(T.a)()
          .propsFromState(function () {
            return { loggedInUser: C.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          }),
        R = n('3XMw'),
        I = n.n(R),
        M = n('N5qz'),
        D = n('MWbm'),
        K = n('cHvH'),
        A = n('5mJL'),
        B = n('DNho'),
        H = n('XP29'),
        z = n('t62R'),
        U = n('/yvb'),
        N = n('rHpw'),
        q = n('cjZk'),
        Q = n('3rWK'),
        W = n('ll3R'),
        V = n('pNJr'),
        G = n('J0mu'),
        J = n('KrGU'),
        Z = I.a.g34f2c63({ verb: '' }),
        X = I.a.e349147b,
        Y = v.createElement(q.a, null),
        $ = v.createElement(Q.a, null),
        ee = v.createElement(W.a, null),
        te = v.createElement(V.a, null),
        ne = v.createElement(G.a, null),
        re = v.createElement(J.a, null),
        ae = N.a.create(function (e) {
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
        ie = x(function (e) {
          var t = e.userAvatarURI,
            n = v.useContext(F.a).featureSwitches
          return v.createElement(K.a, null, function (e) {
            var r = e.windowWidth,
              a = !M.a.isOneColumnSquishedLayout(r)
            return v.createElement(
              A.a,
              {
                avatarCell: v.createElement(B.a.Consumer, null, function (e) {
                  var n = e.avatarSize
                  return v.createElement(H.a, { size: n, style: ae.avatar, uri: t })
                }),
                avatarCellStyle: ae.avatarColumn,
                cellStyle: ae.body,
                style: ae.root,
              },
              v.createElement(z.b, { color: 'gray700', numberOfLines: 1, size: 'headline1', style: ae.fakeInput }, X),
              v.createElement(
                D.a,
                { style: ae.toolbar },
                v.createElement(
                  D.a,
                  { style: [ae.toolbarSection, ae.iconContainer] },
                  v.createElement(U.a, {
                    disabled: !0,
                    icon: Y,
                    size: 'medium',
                    style: [ae.toolBarButton, ae.firstToolBarButton],
                    type: 'brandText',
                  }),
                  v.createElement(U.a, {
                    disabled: !0,
                    icon: $,
                    size: 'medium',
                    style: ae.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? v.createElement(U.a, {
                        disabled: !0,
                        icon: ee,
                        size: 'medium',
                        style: ae.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  v.createElement(U.a, {
                    disabled: !0,
                    icon: te,
                    size: 'medium',
                    style: ae.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? v.createElement(U.a, {
                        disabled: !0,
                        icon: ne,
                        size: 'medium',
                        style: ae.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  n.isTrue('responsive_web_precise_location_setting_enabled')
                    ? v.createElement(U.a, {
                        disabled: !0,
                        icon: re,
                        size: 'medium',
                        style: ae.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                ),
                v.createElement(
                  D.a,
                  { style: ae.toolbarSection },
                  v.createElement(U.a, { disabled: !0, style: ae.tweetButton, type: 'brandFilled' }, Z),
                ),
              ),
            )
          })
        }),
        oe = n('zb92'),
        ce = Object(oe.a)({
          loader: function () {
            return (j.a.preload() || Promise.resolve()).then(function () {
              return Promise.all([n.e(0), n.e(3), n.e(4), n.e(5), n.e(80)]).then(n.bind(null, 'RrO2'))
            })
          },
          renderPlaceholder: function () {
            return v.createElement(ie, null)
          },
        }),
        le = n('EY8L'),
        se = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('1YZw')),
        ue = Object(T.a)()
          .propsFromState(function () {
            return { selectedTimelineId: g.c, useLatest: g.d }
          })
          .propsFromActions(function () {
            return { addToast: se.b, updateBehavior: g.e }
          })
          .withAnalytics(),
        de = (n('jQ/y'), n('1Iuc'), n('yZDr')),
        pe = function (e) {
          var t = e.accessibilityLabel,
            n = e.hoverLabel,
            r = e.onPress,
            a = e.renderMenu,
            i = v.createElement(de.a, null)
          return v.createElement(U.a, {
            accessibilityLabel: t,
            hoverLabel: { label: n },
            icon: i,
            onPress: r,
            pullRight: !0,
            renderMenu: a,
            type: 'primaryText',
          })
        },
        fe = n('mjJ+'),
        me = n('Lsrn'),
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
      function ve(e) {
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
      var be = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(he.a)(
          'svg',
          ve(
            ve({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [me.a.root, e.style], viewBox: '0 0 36 36' },
          ),
          v.createElement(
            'g',
            null,
            v.createElement('path', {
              d: 'M27.325 20.595c0 7.333-5.913 13.278-13.206 13.278S.912 27.928.912 20.595 6.825 7.317 14.12 7.317s13.205 5.944 13.205 13.278',
              fill: '#71C9F8',
            }),
            v.createElement('path', {
              d: 'M24.576 20.682c0 5.802-4.678 10.506-10.45 10.506-5.77 0-10.448-4.704-10.448-10.506s4.678-10.506 10.45-10.506c5.77 0 10.448 4.704 10.448 10.506',
              fill: '#97E3FF',
            }),
            v.createElement('path', {
              d: 'M18.98 20.94l-3.86-.583v-6.215c0-.552-.45-1-1-1s-1 .448-1 1v7.076c0 .06.023.112.033.17.007.042.012.082.025.123.026.084.063.158.11.23.022.038.044.075.072.11.05.06.11.11.173.158.042.03.08.06.128.086.065.034.133.055.204.074.04.01.072.035.114.04l4.704.71c.05.01.1.012.15.012.487 0 .914-.355.988-.85.08-.548-.295-1.058-.84-1.14z',
              fill: '#005FD1',
            }),
            v.createElement('path', {
              d: 'M24.553 20.682c0 5.79-4.68 10.5-10.434 10.5S3.683 26.47 3.683 20.68c0-2.953 1.227-5.707 3.31-7.665l.674 1.127c.38.635 1.227.668 1.524.06l1.153-2.36 1.312-2.687c.24-.49-.104-1.067-.65-1.088l-2.988-.116-2.625-.1c-.678-.027-1.05.735-.67 1.37l.804 1.344C2.613 13.065.883 16.736.883 20.683c0 7.333 5.937 13.298 13.234 13.298s13.234-5.964 13.234-13.297h-2.8z',
              fill: '#1DA1F2',
            }),
            v.createElement('path', {
              d: 'M35 13.36h-1.467v-1.34c0-.552-.448-1-1-1s-1 .448-1 1v1.34h-1.467c-.552 0-1 .45-1 1s.448 1 1 1h1.467v1.342c0 .552.448 1 1 1s1-.448 1-1v-1.34H35c.552 0 1-.45 1-1s-.448-1-1-1z',
              fill: '#FFAD1F',
            }),
            v.createElement('path', {
              d: 'M28.646 4.138h-2.01v-2.01c0-.552-.448-1-1-1s-1 .448-1 1v2.01h-2.01c-.552 0-1 .448-1 1s.448 1 1 1h2.01v2.01c0 .552.448 1 1 1s1-.448 1-1v-2.01h2.01c.552 0 1-.448 1-1s-.447-1-1-1z',
              fill: '#F6809A',
            }),
          ),
        )
      }
      be.metadata = { width: 36, height: 36 }
      var ge = be
      function _e(e, t) {
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
      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _e(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
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
          Oe(
            Oe({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [me.a.root, e.style], viewBox: '0 0 36 36' },
          ),
          v.createElement(
            'g',
            null,
            v.createElement('path', {
              d: 'M35.508 15.41l-9.295-3.387L22.438 1.47c-.108-.302-.357-.48-.722-.495-.322.007-.604.22-.698.53l-3.293 10.71-9.132 3.805c-.285.118-.467.4-.46.708.007.308.203.58.492.686L17.92 20.8l3.775 10.552c.107.298.39.496.704.496h.016c.322-.007.604-.22.698-.53l3.293-10.712 9.132-3.803c.284-.118.466-.4.46-.708-.007-.308-.203-.58-.492-.686z',
              fill: '#61BCF6',
            }),
            v.createElement('path', {
              d: 'M9.57 4.715l-2.906.065-.06-2.715C6.585 1.34 5.983.763 5.256.78 4.53.796 3.955 1.4 3.97 2.125l.063 2.715-2.747.062C.56 4.92-.016 5.522 0 6.248c.017.726.62 1.302 1.346 1.285l2.747-.062.062 2.716c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.062-2.715 2.905-.066c.725-.017 1.3-.62 1.285-1.346-.017-.726-.62-1.302-1.346-1.285z',
              fill: '#F16888',
            }),
            v.createElement('path', {
              d: 'M14.205 29.69l-1.65.036-.034-1.518c-.016-.726-.618-1.302-1.344-1.286s-1.302.62-1.286 1.345l.034 1.518-1.54.035c-.726.016-1.302.62-1.286 1.345.017.726.62 1.302 1.345 1.286l1.54-.034.034 1.518c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.034-1.518 1.65-.037c.726-.016 1.302-.62 1.286-1.345-.016-.727-.62-1.303-1.345-1.286z',
              fill: '#FD9E1A',
            }),
          ),
        )
      }
      Te.metadata = { width: 36, height: 36 }
      var Ee = Te,
        we = n('3JQt'),
        ke = n('M2x3')
      function Pe(e) {
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
          return p()(this, n)
        }
      }
      var Le = I.a.j681ac0d,
        Se = I.a.g8220472,
        je = I.a.ccdd3766,
        Fe = I.a.g2657de3,
        Ce = I.a.d126cb7c,
        xe = I.a.c41ecf3c,
        Re = I.a.d18aa6d4,
        Ie = I.a.c90dcfa2,
        Me = I.a.bc52b0cd,
        De = I.a.j6382fe9,
        Ke = I.a.f89f6785,
        Ae = I.a.e4acfd11,
        Be = I.a.f0c7628a,
        He = I.a.j7d0cac5,
        ze = I.a.eeab4419,
        Ue = I.a.cae804f9,
        Ne = I.a.gf85d8c5,
        qe = (function (e) {
          u()(n, e)
          var t = Pe(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(l()(e), '_renderActionMenu', function (t) {
                var n = e.props.useLatest,
                  r = e._getContent().description,
                  a = n ? ge : Ee
                return v.createElement(fe.a, {
                  DescriptionIcon: a,
                  description: r,
                  descriptionStyle: Qe.description,
                  isFixed: !0,
                  items: e._getActionMenuItems(),
                  onCloseRequested: t,
                })
              }),
              y()(l()(e), '_getActionMenuItems', function () {
                var t = e._getContent(),
                  n = t.subText
                return [
                  { text: t.text, onClick: e._handleTimelineSwitch, Icon: we.a, subText: n },
                  { link: '/settings/content_preferences', text: Le, onClick: e._handleContentPreferences, Icon: ke.a },
                ]
              }),
              y()(l()(e), '_getContent', function () {
                var t = e.props,
                  n = t.latestTimelinePinEnabled,
                  r = t.useLatest
                return n
                  ? {
                      accessibilityLabel: Ne,
                      description: r ? Ie : xe,
                      hoverLabel: Ne,
                      subText: r ? Ue : He,
                      text: r ? ze : Be,
                    }
                  : {
                      accessibilityLabel: r ? Se : je,
                      description: r ? Re : xe,
                      hoverLabel: r ? Ce : Fe,
                      subText: r ? Ae : Ke,
                      text: r ? Me : De,
                    }
              }),
              y()(l()(e), '_handleTimelineSwitch', function (t) {
                var n = e.props.onToggle
                t(), n()
              }),
              y()(l()(e), '_handleContentPreferences', function (t) {
                var n = e.props.onContentPreferencesSelect
                t(), n()
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onPress,
                    t = this._getContent(),
                    n = t.accessibilityLabel,
                    r = t.hoverLabel
                  return v.createElement(pe, {
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
        })(v.PureComponent),
        Qe = N.a.create(function (e) {
          return {
            description: {
              fontSize: e.fontSizes.headline1,
              color: e.colors.text,
              textAlign: 'center',
              fontWeight: e.fontWeights.bold,
            },
          }
        }),
        We = qe
      function Ve(e, t) {
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
      function Ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ve(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ve(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Je(e) {
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
          return p()(this, n)
        }
      }
      var Ze = I.a.e4c6d14c,
        Xe = I.a.bffa2da7,
        Ye = (function (e) {
          u()(n, e)
          var t = Je(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              y()(l()(i), '_handleToggle', function () {
                var e = i.props,
                  t = e.addToast,
                  n = e.analytics,
                  r = e.selectedTimelineId,
                  a = e.updateBehavior,
                  o = e.useLatest
                i.context.viewport.scrollToTop(),
                  n.scribe({ component: 'customize', element: o ? 'see_top' : 'see_latest', action: 'click' })
                var c = o ? Ze : Xe
                a(
                  Ge(
                    Ge({}, i._latestTimelinePinEnabled && o && r !== le.a.HOME && { selectedTimelineId: le.a.HOME }),
                    {},
                    { useLatest: !o },
                  ),
                ).then(function () {
                  i._latestTimelinePinEnabled || t({ text: c })
                })
              }),
              y()(l()(i), '_handleSwitchPress', function () {
                i.props.analytics.scribe({ section: 'navigation_bar', element: 'customize_button', action: 'click' })
              }),
              y()(l()(i), '_handleContentPreferencesSelect', function () {
                i.props.analytics.scribe({ component: 'customize', element: 'see_preferences', action: 'click' })
              }),
              (i._latestTimelinePinEnabled = i.context.featureSwitches.isTrue(
                'responsive_web_home_pinned_timelines_latest_enabled',
              )),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.useLatest
                  return v.createElement(We, {
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
        })(v.Component)
      y()(Ye, 'contextType', F.a)
      var $e = ue(Ye),
        et = n('lUZE'),
        tt = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        nt = n('yoO3'),
        rt = (n('5BYb'), n('aeN7')),
        at = n('hqKg'),
        it = n('wrlS'),
        ot = n('WA1W'),
        ct = Object(T.a)()
          .propsFromState(function () {
            return {
              module: Object(at.createSelector)(
                it.d,
                function (e, t) {
                  return t.isLatestActive
                },
                function (e, t) {
                  return t
                    ? Object(ot.e)(e.isTrue('responsive_web_graphql_home_latest_enabled'))
                    : Object(ot.f)(e.isTrue('responsive_web_graphql_home_enabled'))
                },
              ),
            }
          })
          .propsFromActions(function () {
            return { addToast: se.b, updateBehavior: g.e }
          })
          .withAnalytics(),
        lt = n('QIgh'),
        st = n('8UdT'),
        ut = n('iu0J'),
        dt = n('AP4B')
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
      function ft(e) {
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
      var mt = ft(
          ft(
            ft({}, Object(lt.a)({ allowDownvote: !0, tweetDismissable: !0, shouldSelfThreadIncludeAvatar: !0 })),
            dt.a,
          ),
          {},
          y()({}, st.b.EventSummary, Object(ut.a)({ errorContext: 'HOME_TIMELINE_SCREEN' })),
        ),
        ht = n('MDbM'),
        yt = n('FIs5'),
        vt = I.a.d2c66f1f,
        bt = I.a.c3fbf1da,
        gt = I.a.bf17ded9,
        _t = function (e) {
          var t = e.onButtonPress,
            n = e.onImpression
          return v.createElement(yt.a, {
            buttonLink: '/i/connect_people',
            buttonText: gt,
            header: vt,
            message: bt,
            onButtonPress: t,
            onImpression: n,
          })
        },
        Ot = n('EUHl'),
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var kt = { count: void 0 },
        Pt = I.a.f089620b,
        Lt = (function (e) {
          u()(n, e)
          var t = wt(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              y()(l()(i), '_handleEntriesRendered', function (e) {
                var t = e.entries,
                  n = e.fetchStatus,
                  r = i.props.recordTTFT
                if ((n === ht.a.FAILED && (i._shouldRecordTTFT = !1), i._shouldRecordTTFT && t.length)) {
                  var a = t.some(function (e) {
                    return e.type === st.b.Tweet
                  })
                  ;(i._shouldRecordTTFT = !1), a && r()
                }
              }),
              y()(l()(i), '_renderEmptyTimeline', function () {
                return v.createElement(_t, {
                  onButtonPress: i._handleEmptyHtlButtonPress,
                  onImpression: i._handleEmptyHtlImpression,
                })
              }),
              y()(l()(i), '_handleEmptyHtlImpression', function () {
                i.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              y()(l()(i), '_handleEmptyHtlButtonPress', function () {
                i.props.analytics.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
              }),
              (i._shouldRecordTTFT = !0),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.module,
                    n = e.shouldFetchLoadedContentOnMount,
                    r = e.timelineRef
                  return v.createElement(Et.a, {
                    entryConfiguration: mt,
                    fetchTopOptions: kt,
                    module: t,
                    newTweetsPillMode: Ot.a.URT,
                    onEntriesRendered: this._handleEntriesRendered,
                    prerollDisplayLocation: Tt.c.TIMELINE_HOME,
                    renderEmptyState: this._renderEmptyTimeline,
                    shouldFetchLoadedContentOnMount: n,
                    timelineRef: r,
                    title: Pt,
                  })
                },
              },
            ]),
            n
          )
        })(v.Component)
      y()(Lt, 'defaultProps', { isLatestActive: !1, recordTTFT: rt.e, shouldFetchLoadedContentOnMount: !0 }),
        y()(Lt, 'contextType', F.a)
      var St = ct(Lt),
        jt = n('7JQg'),
        Ft = n('VS6U'),
        Ct = n('Es6L'),
        xt = n('LsPn'),
        Rt = n('RhWx'),
        It = n.n(Rt),
        Mt = (n('z84I'), n('gZV8')),
        Dt = n('enFi'),
        Kt = n('kGix'),
        At = n('G1WX')
      function Bt(e) {
        var t = e.accessibilityLabel,
          n = e.children,
          r = e.loadingMessage
        return v.createElement(
          v.Suspense,
          {
            fallback: v.createElement(At.a, {
              accessibilityLabel: t,
              fetchStatus: Kt.a.LOADING,
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
        Qt = n('0KEI'),
        Wt =
          (n('ZUdG'),
          n('m9LP'),
          (function () {
            function e() {
              a()(this, e), y()(this, '_cache', new Map()), y()(this, '_pendingCache', new Map())
            }
            return (
              o()(e, [
                {
                  key: 'getFetchKey',
                  value: function (e) {
                    var t
                    return (
                      this._pendingCache.delete(e),
                      null === (t = this._cache.get(e)) || void 0 === t ? void 0 : t.fetchKey
                    )
                  },
                },
                {
                  key: '_setFetchKey',
                  value: function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._cache
                    n.set(e, { fetchKey: t, date: Date.now() }), this._releaseExpiredFields(n)
                  },
                },
                {
                  key: 'incrementFetchKey',
                  value: function (e) {
                    this._setFetchKey(e, (this.getFetchKey(e) || 0) + 1, this._pendingCache)
                  },
                },
                {
                  key: 'flush',
                  value: function () {
                    var e = this
                    this._pendingCache.forEach(function (t, n) {
                      e._setFetchKey(n, t.fetchKey)
                    }),
                      this._pendingCache.clear()
                  },
                },
                {
                  key: '_releaseExpiredFields',
                  value: function (e) {
                    var t = Date.now() - 3e5
                    e.forEach(function (n, r) {
                      n.date < t && e.delete(r)
                    })
                  },
                },
              ]),
              e
            )
          })()),
        Vt = n('Ud88'),
        Gt = n.n(Vt),
        Jt = 'function' == typeof WeakMap ? new WeakMap() : new Map()
      var Zt = function () {
        return (function (e) {
          var t = Jt.get(e)
          if (t) return t
          var n = new Wt()
          return Jt.set(e, n), n
        })(Gt()())
      }
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
          var n,
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Yt = (function (e) {
        u()(n, e)
        var t = Xt(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            y()(l()(e), 'state', { error: null }),
            y()(l()(e), '_handleOnRequestRetry', function () {
              e.props.store.flush(), e.setState({ error: null })
            }),
            e
          )
        }
        return (
          o()(
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
                    a = e.retryMessage
                  return this.state.error
                    ? v.createElement(At.a, {
                        failureMessage: n,
                        fetchStatus: Kt.a.FAILED,
                        onRequestRetry: this._handleOnRequestRetry,
                        render: function () {
                          return null
                        },
                        retryMessage: a,
                        retryable: r,
                      })
                    : t
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
      })(v.Component)
      function $t(e) {
        var t = e.children,
          n = e.errorConfig,
          r = e.isRetryable,
          a = void 0 === r || r,
          i = Nt()(e, ['children', 'errorConfig', 'isRetryable']),
          o = Object(Qt.useCreateLocalApiErrorHandler)(n.context),
          c = Zt()
        return v.createElement(Yt, zt()({ errorHandler: o(n.options || {}), isRetryable: a, store: c }, i), t)
      }
      function en(e) {
        var t = e.children,
          n = e.errorConfig
        return v.createElement($t, { errorConfig: n }, v.createElement(Bt, null, t))
      }
      var tn,
        nn = n('lnL+'),
        rn = n('Rp9C'),
        an = n('jAXQ'),
        on = n.n(an),
        cn = function (e) {
          var t = on()(void 0 !== tn ? tn : (tn = n('/n9r')), e.topic),
            r = t.name,
            a = t.topic_id
          v.useEffect(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [rn.a.forTopic(a)] } })
          }, [])
          var i = v.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [rn.a.forTopic(a)] } })
            },
            [e.analytics, a],
          )
          return v.createElement(nn.a, { link: '/i/topics/'.concat(a), onClick: i, text: r })
        },
        ln = n('Irs7'),
        sn = n('yUQf'),
        un = (n('M+/F'), n('hCOa'), n('aLgo'), n('ddV6')),
        dn = n.n(un),
        pn = n('tI3i'),
        fn = n.n(pn),
        mn = n('SrIh'),
        hn = n('4gIZ'),
        yn = n.n(hn),
        vn = n('lU4h'),
        bn = n.n(vn),
        gn = n('Z3eX'),
        _n = n.n(gn)
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
      function Tn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? On(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : On(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function En(e, t, n) {
        var r = bn()(t),
          a = dn()(r, 1)[0],
          i = v.useMemo(
            function () {
              return _n()(Object(Dt.getRequest)(e).params, a)
            },
            [e, a],
          ),
          o = Zt(),
          c = o.getFetchKey(i),
          l = Tn(Tn({}, n), {}, { fetchKey: null != c ? c : null == n ? void 0 : n.fetchKey })
        try {
          return yn()(e, t, l)
        } catch (s) {
          throw (s instanceof qt.a && o.incrementFetchKey(i), s)
        }
      }
      var wn = n('UIzd'),
        kn = n.n(wn)
      function Pn(e, t) {
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
      function Ln(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Pn(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Pn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Sn(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return jn(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jn(e, t)
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
          c = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(c = !0), (i = e)
          },
          f: function () {
            try {
              o || null == n.return || n.return()
            } finally {
              if (c) throw i
            }
          },
        }
      }
      function jn(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function Fn(e, t) {
        try {
          fn()('slice_info' === t[t.length - 1], 'Invalid sliceInfoPath!')
          var n,
            r = e,
            a = Sn(t)
          try {
            for (a.s(); !(n = a.n()).done; ) {
              var i,
                o = n.value
              fn()(!!r, 'The provided path is invalid.'),
                fn()('string' == typeof o, 'Unexpected value for path!'),
                (r = null === (i = r) || void 0 === i ? void 0 : i[o])
            }
          } catch (c) {
            a.e(c)
          } finally {
            a.f()
          }
          return r
        } catch (l) {
          return void Object(mn.a)(l.message)
        }
      }
      var Cn,
        xn = n('6iuV'),
        Rn = I.a.ffd9cfe6,
        In = void 0 !== Cn ? Cn : (Cn = n('yKhE')),
        Mn = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        Dn = function () {
          var e,
            t,
            n,
            r,
            a,
            i,
            o,
            c = v.useRef(0),
            l = Object(ln.b)(),
            s = Object(sn.a)(C.e.selectLoggedInUser),
            u = (function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { context: '' },
                r = v.useState(!1),
                a = dn()(r, 2),
                i = a[0],
                o = a[1],
                c = v.useState(null),
                l = dn()(c, 2),
                s = l[0],
                u = l[1],
                d = Gt()(),
                p = bn()(t),
                f = dn()(p, 1)[0],
                m = Object(Qt.useCreateLocalApiErrorHandler)(n.context)(n.options || {}),
                h = En(e, f)
              return v.useMemo(
                function () {
                  var t,
                    n,
                    r =
                      null === (t = Object(Dt.getRequest)(e).params) ||
                      void 0 === t ||
                      null === (n = t.metadata) ||
                      void 0 === n
                        ? void 0
                        : n.sliceInfoPath
                  fn()(
                    !!r,
                    'The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.',
                  )
                  var a = Fn(h, r) || {},
                    c = a.next_cursor,
                    l = a.previous_cursor,
                    p = function (t) {
                      i ||
                        (o(!0),
                        kn()(d, e, Ln(Ln({}, f), {}, { cursor: t })).subscribe({
                          complete: function () {
                            o(!1)
                          },
                          error: function (e) {
                            o(!1), u(e), m(e)
                          },
                        }))
                    },
                    y = function () {
                      c && p(c)
                    },
                    v = function () {
                      l && p(l)
                    }
                  return s
                    ? {
                        subsequentFetchStatus: Kt.a.FAILED,
                        error: s,
                        fetchNext: y,
                        fetchPrevious: v,
                        data: h,
                        hasNext: Boolean(c),
                        hasPrevious: Boolean(l),
                      }
                    : {
                        subsequentFetchStatus: i ? Kt.a.LOADING : Kt.a.NONE,
                        error: void 0,
                        fetchNext: y,
                        fetchPrevious: v,
                        data: h,
                        hasNext: Boolean(c),
                        hasPrevious: Boolean(l),
                      }
                },
                [e, h, i, s, d, f, m],
              )
            })(In, {}, Mn).data,
            d = (
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
                null === (o = i.home_topics_navigator_slices) ||
                void 0 === o
                  ? void 0
                  : o.items)) ||
              []
            ).map(function (e, t) {
              return null != e && e.topic ? v.createElement(cn, { analytics: l, key: t, topic: e.topic }) : null
            }),
            p = v.useCallback(
              function () {
                l.scribeAction('impression'), l.scribe({ element: 'see_more', action: 'impression' })
              },
              [l],
            ),
            f = v.useCallback(
              function (e) {
                var t = e.next,
                  n = e.previous
                n > t ? l.scribeAction('scroll_left') : n < t && l.scribeAction('scroll_right')
              },
              [l],
            ),
            m = v.useCallback(
              function (e) {
                var t = e.index,
                  n = e.intersectionRatio
                t === c.current - 1 && n >= Mt.c && l.scribeAction('reached_end')
              },
              [l],
            )
          v.useEffect(function () {
            d.length > 0 && p()
          }, []),
            v.useEffect(
              function () {
                c.current = d.length + 1
              },
              [d],
            )
          var h = v.useCallback(
              function () {
                l.scribe({ element: 'see_more', action: 'click' })
              },
              [l],
            ),
            y = s ? '/'.concat(s.screen_name, '/topics') : '/i/topics/picker',
            b = v.createElement(U.a, { key: 'seeMorePivot', link: y, onClick: h, type: 'brandOutlined' }, Rn)
          return d.length > 0
            ? v.createElement(
                xn.a,
                { childrenStyle: Kn.childrenStyle, onScroll: f, onVisibleRangeChange: m, style: Kn.carousel },
                [].concat(It()(d), [b]),
              )
            : null
        },
        Kn = N.a.create(function (e) {
          return {
            carousel: { marginHorizontal: 'calc('.concat(e.spaces.space12, ' - ').concat(e.spaces.space2, ')') },
            childrenStyle: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space12 },
          }
        }),
        An = function () {
          return v.createElement(en, { errorConfig: Mn }, v.createElement(Dn, null))
        },
        Bn = n('aITJ'),
        Hn = n('0yYu'),
        zn = n('mw9i'),
        Un = n('k/OQ')
      function Nn(e) {
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
          return p()(this, n)
        }
      }
      var qn = I.a.i5f7b6b8,
        Qn = I.a.d126cb7c,
        Wn = I.a.ha8209bb,
        Vn = { page: 'home' },
        Gn = { page: 'home_latest' },
        Jn = { section: 'topics_navigator', component: 'suggest_topics_module' },
        Zn = (function (e) {
          u()(r, e)
          var t = Nn(r)
          function r(e, n) {
            var i
            a()(this, r),
              (i = t.call(this, e, n)),
              y()(l()(i), '_lastTimelineSwitchTimestamp', 0),
              y()(l()(i), '_unmounted', !1),
              y()(l()(i), '_getTimelineMetadata', function () {
                var e = i._isLatestActive()
                return { scribeNamespace: e ? Gn : Vn, title: e ? Qn : Wn }
              }),
              y()(l()(i), '_getLink', function (e, t) {
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
              y()(l()(i), '_getLinks', function () {
                var e = i.props.useLatest,
                  t = i._getLink(le.a.HOME, Wn),
                  n = e ? i._getLink(le.a.HOME_LATEST, Qn) : void 0
                return [t].concat([n])
              }),
              y()(l()(i), '_isLatestActive', function () {
                return i._isLatestPinned()
                  ? i.props.selectedTimelineId === le.a.HOME_LATEST
                  : i._latestTimelineSwitchEnabled && i.props.useLatest
              }),
              y()(l()(i), '_isLatestPinned', function () {
                return (
                  i._latestTimelineSwitchEnabled &&
                  i.props.useLatest &&
                  i.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                )
              }),
              y()(l()(i), '_renderTimeline', function () {
                var e = i._isLatestActive()
                return v.createElement(
                  k.a,
                  null,
                  i.context.featureSwitches.isTrue('home_timeline_topics_navigator_enabled')
                    ? v.createElement(jt.b, { namespace: Jn }, v.createElement(An, null))
                    : null,
                  v.createElement(St, {
                    isLatestActive: e,
                    shouldFetchLoadedContentOnMount: e,
                    timelineRef: i._setTimelineRef,
                  }),
                )
              }),
              y()(l()(i), '_renderPrimaryContent', function () {
                var e = i.props,
                  t = e.configurationFetchStatus,
                  n = e.history,
                  r = e.location,
                  a = i.context.isRestrictedSession,
                  o = v.createElement(S.a, { history: n })
                return v.createElement(
                  v.Fragment,
                  null,
                  Object(Ct.a)() && !a
                    ? v.createElement(
                        v.Fragment,
                        null,
                        v.createElement(ce, { history: n, location: r }),
                        v.createElement(Hn.a, null),
                      )
                    : null,
                  v.createElement(
                    P.a,
                    { component: zn.a, fab: o },
                    Bn.b.isKaiOS()
                      ? v.createElement(xt.a, { leftText: qn, onLeftClick: i._handleSoftLeftClick })
                      : null,
                    v.createElement(L.a, { fetchStatus: t, render: i._renderTimeline }),
                  ),
                )
              }),
              y()(l()(i), '_handleSoftLeftClick', function () {
                i.props.history.push('/account')
              }),
              y()(l()(i), '_handleTabRefresh', function () {
                i._timeline && i._timeline.refreshOrGoTop()
              }),
              y()(l()(i), '_handleWindowFocus', function () {
                i._timeline && i._timeline.fetchTop({ onlyIfStale: !0 })
              }),
              y()(l()(i), '_setTimelineRef', function (e) {
                i._timeline = e
              })
            var o = i.context.featureSwitches
            return (
              (i._latestTimelineSwitchEnabled = o.isTrue('home_timeline_latest_timeline_switch_enabled')),
              (i._pinnedListsEnabled = o.isTrue('responsive_web_home_pinned_timelines_lists_enabled')),
              i
            )
          }
          return (
            o()(r, [
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
                    var t = Bn.b.isDesktopOS() ? '' : '_mobile',
                      r = 'home'.concat(t)
                    ;(tt()
                      ? n
                          .e(330)
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
                    n = Object(Ct.a)(),
                    r = !n && t ? v.createElement(et.a, { style: Xn.iconTwitter }) : void 0,
                    a = this._latestTimelineSwitchEnabled ? v.createElement($e, null) : void 0,
                    i = this._getTimelineMetadata(),
                    o = i.scribeNamespace,
                    c = i.title,
                    l = n || !t ? c : null,
                    s = t ? this._getLinks() : [],
                    u = s.length > 1 ? v.createElement(Un.a, { links: s }) : void 0
                  return v.createElement(
                    jt.b,
                    { namespace: o },
                    v.createElement(
                      nt.a,
                      { locationKey: o.page },
                      v.createElement(Ft.a, {
                        centeredLogo: r,
                        documentTitle: c,
                        history: e,
                        onTabRefresh: this._handleTabRefresh,
                        primaryContent: this._renderPrimaryContent,
                        rightControl: a,
                        secondaryBar: u,
                        sidebarContent: v.createElement(b.a, null),
                        title: l,
                      }),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(v.Component)
      y()(Zn, 'contextType', F.a)
      var Xn = N.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = w(Zn)
    },
    yKhE: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        i,
        o,
        c,
        l = {
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
                                      (c = {
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
                                      c,
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
      ;(l.hash = '00b62fb55ad091187417013cbaa9e6a0'), (t.default = l)
    },
  },
])
//# sourceMappingURL=WIPED
