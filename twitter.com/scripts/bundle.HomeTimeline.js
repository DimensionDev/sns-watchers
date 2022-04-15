;(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    '/n9r': function (e, t, a) {
      'use strict'
      var n = {
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
      e.exports = n
    },
    cOLG: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'HomeTimeline', function () {
          return ra
        })
      var n = a('yiKp'),
        i = a.n(n),
        l = a('RhWx'),
        r = a.n(l),
        s = a('VrFO'),
        o = a.n(s),
        c = a('Y9Ll'),
        u = a.n(c),
        d = a('1Pcy'),
        m = a.n(d),
        p = a('5Yy7'),
        h = a.n(p),
        b = a('2VqO'),
        f = a.n(b),
        _ = a('KEM+'),
        g = a.n(_),
        v = (a('z84I'), a('ho0z'), a('2G9S'), a('ERkP')),
        y = a.n(v),
        T = a('es0u'),
        w = a('wM4e'),
        k = a('kHBp'),
        E = a('rxPX'),
        L = a('0KEI'),
        S = a('wqZ5'),
        C = function (e) {
          return k.a.selectMany(e, Object(S.f)(e))
        },
        F = Object(E.a)()
          .propsFromState(function () {
            return { pinnedLists: C, selectedTimelineId: w.b, settingsFetchStatus: w.c, useLatest: w.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerFetchPins: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'HOME_TIMELINE_FETCH_PINS',
              ),
              fetchPinsIfNeeded: S.c,
              updateSettings: w.e,
            }
          })
          .withAnalytics({ page: 'home' }),
        P = a('s14A'),
        I = a('dwig'),
        O = a('v//M'),
        x = a('0+qk'),
        M = (a('7x/C'), a('JtPf'), a('lTEL'), a('87if'), a('kYxP'), a('2dXj')),
        A = a('G6rE'),
        j = Object(E.a)()
          .propsFromState(function () {
            return { loggedInUser: A.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          }),
        K = a('3XMw'),
        H = a.n(K),
        B = a('N5qz'),
        R = a('MWbm'),
        z = a('cHvH'),
        U = a('5mJL'),
        D = a('DNho'),
        V = a('XP29'),
        N = a('t62R'),
        G = a('/yvb'),
        J = a('rHpw'),
        W = a('cjZk'),
        Q = a('3rWK'),
        Y = a('ll3R'),
        q = a('pNJr'),
        X = a('J0mu'),
        Z = a('KrGU'),
        $ = H.a.g34f2c63({ verb: '' }),
        ee = H.a.e349147b,
        te = y.a.createElement(W.a, null),
        ae = y.a.createElement(Q.a, null),
        ne = y.a.createElement(Y.a, null),
        ie = y.a.createElement(q.a, null),
        le = y.a.createElement(X.a, null),
        re = y.a.createElement(Z.a, null),
        se = J.a.create(function (e) {
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
        oe = j(function (e) {
          var t = e.userAvatarURI
          return y.a.createElement(z.a, null, function (e) {
            var a = e.windowWidth,
              n = !B.a.isOneColumnSquishedLayout(a)
            return y.a.createElement(
              U.a,
              {
                avatarCell: y.a.createElement(D.a.Consumer, null, function (e) {
                  var a = e.avatarSize
                  return y.a.createElement(V.a, { size: a, style: se.avatar, uri: t })
                }),
                avatarCellStyle: se.avatarColumn,
                cellStyle: se.body,
                style: se.root,
              },
              y.a.createElement(
                N.b,
                { color: 'gray700', numberOfLines: 1, size: 'headline1', style: se.fakeInput },
                ee,
              ),
              y.a.createElement(
                R.a,
                { style: se.toolbar },
                y.a.createElement(
                  R.a,
                  { style: [se.toolbarSection, se.iconContainer] },
                  y.a.createElement(G.a, {
                    disabled: !0,
                    icon: te,
                    size: 'medium',
                    style: [se.toolBarButton, se.firstToolBarButton],
                    type: 'brandText',
                  }),
                  y.a.createElement(G.a, {
                    disabled: !0,
                    icon: ae,
                    size: 'medium',
                    style: se.toolBarButton,
                    type: 'brandText',
                  }),
                  n
                    ? y.a.createElement(G.a, {
                        disabled: !0,
                        icon: ne,
                        size: 'medium',
                        style: se.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  y.a.createElement(G.a, {
                    disabled: !0,
                    icon: ie,
                    size: 'medium',
                    style: se.toolBarButton,
                    type: 'brandText',
                  }),
                  n
                    ? y.a.createElement(G.a, {
                        disabled: !0,
                        icon: le,
                        size: 'medium',
                        style: se.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  y.a.createElement(G.a, {
                    disabled: !0,
                    icon: re,
                    size: 'medium',
                    style: se.toolBarButton,
                    type: 'brandText',
                  }),
                ),
                y.a.createElement(
                  R.a,
                  { style: se.toolbarSection },
                  y.a.createElement(G.a, { disabled: !0, style: se.tweetButton, type: 'brandFilled' }, $),
                ),
              ),
            )
          })
        }),
        ce = a('zb92'),
        ue = Object(ce.a)({
          loader: function () {
            return (M.a.preload() || Promise.resolve()).then(function () {
              return Promise.all([a.e(0), a.e(3), a.e(4), a.e(6), a.e(84)]).then(a.bind(null, 'RrO2'))
            })
          },
          renderPlaceholder: function () {
            return y.a.createElement(oe, null)
          },
        }),
        de = a('v6aA'),
        me = a('1YZw'),
        pe = Object(E.a)()
          .propsFromState(function () {
            return { selectedTimelineId: w.b, useLatest: w.d }
          })
          .propsFromActions(function () {
            return { addToast: me.b, updateSettings: w.e }
          })
          .withAnalytics(),
        he = a('EY8L'),
        be = (a('1t7P'), a('jQ/y'), a('1Iuc'), a('yZDr')),
        fe = function (e) {
          var t = e.accessibilityLabel,
            a = e.hoverLabel,
            n = e.onPress,
            i = e.renderMenu,
            l = y.a.createElement(be.a, null)
          return y.a.createElement(G.a, {
            accessibilityLabel: t,
            hoverLabel: { label: a },
            icon: l,
            onPress: n,
            pullRight: !0,
            renderMenu: i,
            type: 'primaryText',
          })
        },
        _e = a('mjJ+'),
        ge = a('Lsrn'),
        ve = a('k/Ka'),
        ye = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ve.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ge.a.root, e.style],
                viewBox: '0 0 36 36',
              },
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
      ye.metadata = { width: 36, height: 36 }
      var Te = ye,
        we = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ve.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ge.a.root, e.style],
                viewBox: '0 0 36 36',
              },
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
      we.metadata = { width: 36, height: 36 }
      var ke = we,
        Ee = a('3JQt'),
        Le = a('M2x3'),
        Se = H.a.j681ac0d,
        Ce = H.a.g8220472,
        Fe = H.a.ccdd3766,
        Pe = H.a.g2657de3,
        Ie = H.a.d126cb7c,
        Oe = H.a.c41ecf3c,
        xe = H.a.d18aa6d4,
        Me = H.a.c90dcfa2,
        Ae = H.a.bc52b0cd,
        je = H.a.j6382fe9,
        Ke = H.a.f89f6785,
        He = H.a.e4acfd11,
        Be = H.a.f0c7628a,
        Re = H.a.j7d0cac5,
        ze = H.a.eeab4419,
        Ue = H.a.cae804f9
      var De = J.a.create(function (e) {
          return {
            description: {
              fontSize: e.fontSizes.headline1,
              color: e.colors.text,
              textAlign: 'center',
              fontWeight: e.fontWeights.bold,
            },
          }
        }),
        Ve = function (e) {
          var t = e.onContentPreferencesSelect,
            a = e.onPress,
            n = e.onToggle,
            i = e.useLatest,
            l = y.a.useContext(de.a).featureSwitches,
            r = i ? Ce : Fe,
            s = i ? Ie : Pe,
            o = y.a.useCallback(
              function (e) {
                e(), t()
              },
              [t],
            ),
            c = y.a.useCallback(
              function (e) {
                e(), n()
              },
              [n],
            ),
            u = y.a.useCallback(
              function (e) {
                var t, a, n
                l.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                  ? ((t = i ? Me : Oe), (a = i ? Ue : Re), (n = i ? ze : Be))
                  : ((t = i ? xe : Oe), (a = i ? He : Ke), (n = i ? Ae : je))
                var r = i ? Te : ke,
                  s = [
                    { text: n, onClick: c, Icon: Ee.a, subText: a },
                    { link: '/settings/content_preferences', text: Se, onClick: o, Icon: Le.a },
                  ]
                return y.a.createElement(_e.a, {
                  DescriptionIcon: r,
                  description: t,
                  descriptionStyle: De.description,
                  isFixed: !0,
                  items: s,
                  onCloseRequested: e,
                })
              },
              [l, o, c, i],
            )
          return y.a.createElement(fe, { accessibilityLabel: r, hoverLabel: s, onPress: a, renderMenu: u })
        },
        Ne = H.a.e4c6d14c,
        Ge = H.a.bffa2da7
      var Je,
        We,
        Qe = pe(function (e) {
          var t = e.addToast,
            a = e.analytics,
            n = e.selectedTimelineId,
            l = e.updateSettings,
            r = e.useLatest,
            s = y.a.useContext(de.a).featureSwitches,
            o = y.a.useCallback(
              function () {
                a.scribe({ component: 'customize', element: 'see_preferences', action: 'click' })
              },
              [a],
            ),
            c = y.a.useCallback(
              function () {
                a.scribe({ section: 'navigation_bar', element: 'customize_button', action: 'click' })
              },
              [a],
            ),
            u = y.a.useCallback(
              function () {
                var e,
                  o = s.isTrue('responsive_web_home_pinned_timelines_latest_enabled'),
                  c = r ? Ne : Ge
                o && r && n === he.a.HOME_LATEST && (e = he.a.HOME),
                  o || (e = n === he.a.HOME ? he.a.HOME_LATEST : he.a.HOME),
                  a.scribe({ component: 'customize', element: r ? 'see_top' : 'see_latest', action: 'click' }),
                  l(i()(i()({}, e && { selectedTimelineId: e }), {}, { useLatest: !r })).then(function () {
                    o || t({ text: c })
                  })
              },
              [t, a, s, n, l, r],
            )
          return y.a.createElement(Ve, { onContentPreferencesSelect: o, onPress: c, onToggle: u, useLatest: r })
        }),
        Ye = a('lUZE'),
        qe = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        Xe = a('yoO3'),
        Ze = a('ZB2A'),
        $e = (a('5BYb'), a('aeN7')),
        et = a('hqKg'),
        tt = a('9TPy'),
        at = a('wrlS'),
        nt = a('WA1W'),
        it = Object(E.a)()
          .propsFromState(function () {
            return {
              module: Object(et.createSelector)(
                function (e, t) {
                  return t.isLatestActive
                },
                function (e, t) {
                  return t.isList
                },
                w.b,
                at.d,
                function (e, t, a, n) {
                  return t
                    ? Object(tt.a)({ listId: a })
                    : e
                    ? Object(nt.e)(n.isTrue('responsive_web_graphql_home_latest_enabled'))
                    : Object(nt.f)(n.isTrue('responsive_web_graphql_home_enabled'))
                },
              ),
            }
          })
          .propsFromActions(function () {
            return { updateSettings: w.e }
          })
          .withAnalytics(),
        lt = a('8UdT'),
        rt = a('iu0J'),
        st = a('AP4B'),
        ot = function (e) {
          var t = e.withUserPresence,
            n = void 0 !== t && t,
            l = e.errorContext,
            r = void 0 === l ? 'HOME' : l,
            s = e.featureSwitches,
            o = { allowDownvote: !0, tweetDismissable: !0, shouldSelfThreadIncludeAvatar: !0, withUserPresence: n },
            c = s.getValue('responsive_web_universal_config')
          return c && 'control' !== c
            ? a('l9Y6').createConfiguration(i()(i()({}, o), {}, { featureSwitches: s, errorContext: r }))
            : i()(
                i()(i()({}, a('QIgh').createConfiguration(o)), st.a),
                {},
                g()({}, lt.b.EventSummary, Object(rt.a)({})),
              )
        },
        ct = a('MDbM'),
        ut = a('97Jx'),
        dt = a.n(ut),
        mt = a('FIs5'),
        pt = [
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
        ht = { headerMessage: H.a.d4d5785f, bodyMessage: H.a.f3f4c67b, buttonText: H.a.a399ed2f },
        bt = H.a.d2c66f1f,
        ft = H.a.c3fbf1da,
        _t = H.a.bf17ded9,
        gt = function (e) {
          var t,
            a = e.onButtonPress,
            n = e.onImpression,
            i = y.a.useContext(de.a).featureSwitches.getStringValue('responsive_web_htl_empty_state_redesign_variant'),
            l = 'a_no_graphic_new_copy' === (t = i) || 'b_new_graphic_new_copy' === t ? ht : void 0,
            r = (function (e) {
              return 'b_new_graphic_new_copy' === e || 'c_new_graphic_old_copy' === e ? pt : void 0
            })(i)
          return y.a.createElement(
            mt.a,
            dt()(
              { buttonLink: '/i/connect_people', buttonText: l ? l.buttonText : _t, header: l ? l.headerMessage : bt },
              r && { imageVariants: r },
              { message: l ? l.bodyMessage : ft, onButtonPress: a, onImpression: n },
            ),
          )
        },
        vt = a('EUHl'),
        yt = a('7BdX'),
        Tt = a('fTQJ'),
        wt = { count: void 0 },
        kt = H.a.f089620b,
        Et = it(function (e) {
          var t = e.analytics,
            a = (e.isLatestActive, e.isLatestPinned, e.module),
            n = e.recordTTFT,
            i = void 0 === n ? $e.e : n,
            l = e.shouldFetchLoadedContentOnMount,
            r = void 0 === l || l,
            s = e.timelineRef,
            o = (e.updateSettings, e.withUserPresence),
            c = void 0 !== o && o,
            u = y.a.useContext(de.a).featureSwitches,
            d = y.a.useRef(!0),
            m = y.a.useCallback(
              function () {
                return u.getStringValue('responsive_web_universal_config')
              },
              [u],
            ),
            p = y.a.useCallback(
              function () {
                t.scribe({ component: 'empty_message', action: 'impression' })
              },
              [t],
            ),
            h = y.a.useCallback(
              function () {
                t.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
              },
              [t],
            ),
            b = y.a.useCallback(
              function (e) {
                var t = e.entries
                if ((e.fetchStatus === ct.a.FAILED && (d.current = !1), d.current && t.length)) {
                  var a = t.some(function (e) {
                    return e.type === lt.b.Tweet
                  })
                  ;(d.current = !1), a && i()
                }
              },
              [i, d],
            ),
            f = y.a.useCallback(
              function () {
                return y.a.createElement(gt, { onButtonPress: h, onImpression: p })
              },
              [h, p],
            )
          return y.a.createElement(Tt.a, {
            entryConfiguration: ot({ featureSwitches: u, withUserPresence: c }),
            fetchTopOptions: wt,
            module: a,
            newTweetsPillMode: vt.a.URT,
            onEntriesRendered: b,
            prerollDisplayLocation: yt.c.TIMELINE_HOME,
            processStrategyOverride: m(),
            renderEmptyState: f,
            shouldFetchLoadedContentOnMount: r,
            timelineRef: s,
            title: kt,
            withUserPresence: c,
          })
        }),
        Lt = a('7JQg'),
        St = a('VS6U'),
        Ct = a('Es6L'),
        Ft = a('LsPn'),
        Pt = a('gZV8'),
        It = (a('YWiL'), a('Fr3L')),
        Ot = a('lnL+'),
        xt = a('Rp9C'),
        Mt = a('FGLp'),
        At = a('CVPS'),
        jt = a.n(At),
        Kt = function (e) {
          var t = jt()(void 0 !== Je ? Je : (Je = a('/n9r')), e.topic),
            n = t.name,
            i = t.topic_id
          Object(Mt.a)(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [xt.a.forTopic(i)] } })
          })
          var l = y.a.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [xt.a.forTopic(i)] } })
            },
            [e.analytics, i],
          )
          return y.a.createElement(Ot.a, { link: '/i/topics/'.concat(i), onClick: l, text: n })
        },
        Ht = a('Irs7'),
        Bt = a('yUQf'),
        Rt = a('DQzJ'),
        zt = a('6iuV'),
        Ut = H.a.j0310b9b,
        Dt = H.a.ffd9cfe6,
        Vt = H.a.i0560231,
        Nt = void 0 !== We ? We : (We = a('yKhE')),
        Gt = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        Jt = function () {
          var e,
            t,
            a,
            n,
            i,
            l,
            s,
            o = y.a.useRef(0),
            c = Object(Ht.b)(),
            u = Object(Bt.a)(A.e.selectLoggedInUser),
            d = Object(Rt.a)(Nt, {}).data,
            m = (
              ('User' ===
                (null == d ||
                null === (e = d.viewer) ||
                void 0 === e ||
                null === (t = e.user_results) ||
                void 0 === t ||
                null === (a = t.result) ||
                void 0 === a
                  ? void 0
                  : a.__typename) &&
                (null == d ||
                null === (n = d.viewer) ||
                void 0 === n ||
                null === (i = n.user_results) ||
                void 0 === i ||
                null === (l = i.result) ||
                void 0 === l ||
                null === (s = l.home_topics_navigator_slices) ||
                void 0 === s
                  ? void 0
                  : s.items)) ||
              []
            ).map(function (e, t) {
              return null != e && e.topic ? y.a.createElement(Kt, { analytics: c, key: t, topic: e.topic }) : null
            }),
            p = y.a.useCallback(
              function () {
                c.scribeAction('impression'), c.scribe({ element: 'see_more', action: 'impression' })
              },
              [c],
            ),
            h = y.a.useCallback(
              function (e) {
                var t = e.next,
                  a = e.previous
                a > t ? c.scribeAction('scroll_left') : a < t && c.scribeAction('scroll_right')
              },
              [c],
            ),
            b = y.a.useCallback(
              function (e) {
                var t = e.index,
                  a = e.intersectionRatio
                t === o.current - 1 && a >= Pt.c && c.scribeAction('reached_end')
              },
              [c],
            )
          Object(Mt.a)(function () {
            m.length > 0 && p()
          }),
            y.a.useEffect(
              function () {
                o.current = m.length + 1
              },
              [m],
            )
          var f = y.a.useCallback(
              function () {
                c.scribe({ element: 'see_more', action: 'click' })
              },
              [c],
            ),
            _ = u ? '/'.concat(u.screen_name, '/topics') : '/i/topics/picker',
            g = y.a.createElement(
              G.a,
              {
                accessibilityLabel: Vt,
                borderColor: 'primary',
                color: 'primary',
                key: 'seeMorePivot',
                link: _,
                onClick: f,
              },
              Dt,
            )
          return m.length > 0
            ? y.a.createElement(
                zt.a,
                {
                  accessibilityLabel: Ut,
                  childrenStyle: Wt.childrenStyle,
                  onScroll: h,
                  onVisibleRangeChange: b,
                  style: Wt.carousel,
                },
                [].concat(r()(m), [g]),
              )
            : null
        },
        Wt = J.a.create(function (e) {
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
        Qt = function () {
          return y.a.createElement(It.a, { errorConfig: Gt }, y.a.createElement(Jt, null))
        },
        Yt = a('aITJ'),
        qt = a('0yYu'),
        Xt = a('mw9i'),
        Zt = a('k/OQ'),
        $t = H.a.i5f7b6b8,
        ea = H.a.d126cb7c,
        ta = H.a.ha8209bb,
        aa = Ze.a.HOME,
        na = { page: 'home' },
        ia = { page: 'home_latest' },
        la = { section: 'topics_navigator', component: 'suggest_topics_module' },
        ra = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n(e, a) {
            var l
            o()(this, n),
              (l = t.call(this, e, a)),
              g()(m()(l), '_lastTimelineSwitchTimestamp', 0),
              g()(m()(l), '_unmounted', !1),
              g()(m()(l), '_getLink', function (e, t) {
                var a = l.props,
                  n = a.analytics,
                  i = a.selectedTimelineId,
                  r = a.updateSettings
                return {
                  isActive: function () {
                    return i === e
                  },
                  label: t,
                  key: e,
                  onClick: function () {
                    if (i === e) {
                      var t
                      null === (t = l._timeline) || void 0 === t || t.refreshOrGoTop()
                    } else {
                      var a = Date.now() - l._lastTimelineSwitchTimestamp
                      r({ selectedTimelineId: e }),
                        n.scribe({ section: i, element: e, action: 'click', data: { duration_ms: a } })
                    }
                  },
                  retainScrollPosition: !1,
                  to: '/home',
                }
              }),
              g()(m()(l), '_getLinks', function () {
                var e = l.props,
                  t = e.pinnedLists,
                  a = e.useLatest,
                  n = l._getLink(he.a.HOME, ta),
                  i = a ? l._getLink(he.a.HOME_LATEST, ea) : void 0,
                  s = l._pinnedListsEnabled
                    ? t.map(function (e) {
                        var t = e.id_str,
                          a = e.name
                        return l._getLink(Object(he.c)(t), a)
                      })
                    : [],
                  o = [n, i],
                  c = a && l._latestTimelineSwitchEnabled ? [i] : [n]
                return [].concat(r()(l._isLatestPinned() ? o : c), r()(s))
              }),
              g()(m()(l), '_getTimelineMetadata', function () {
                var e = l._isLatestActive(),
                  t = e ? ia : na
                return (
                  l.context.featureSwitches.isTrue('responsive_web_home_namespace_update_enabled') &&
                    (t = i()(i()({}, na), {}, { section: e ? 'latest' : 'home' })),
                  { scribeNamespace: t, title: l._pinnedListsEnabled ? ta : e ? ea : ta }
                )
              }),
              g()(m()(l), '_handleSoftLeftClick', function () {
                return l.props.history.push('/account')
              }),
              g()(m()(l), '_handleTabRefresh', function () {
                var e
                return null === (e = l._timeline) || void 0 === e ? void 0 : e.refreshOrGoTop()
              }),
              g()(m()(l), '_handleWindowFocus', function () {
                var e
                return null === (e = l._timeline) || void 0 === e ? void 0 : e.fetchTop({ onlyIfStale: !0 })
              }),
              g()(m()(l), '_isLatestActive', function () {
                return l._isLatestPinned()
                  ? l.props.selectedTimelineId === he.a.HOME_LATEST
                  : l.props.useLatest && l._latestTimelineSwitchEnabled
              }),
              g()(m()(l), '_isLatestPinned', function () {
                return (
                  l.props.useLatest &&
                  l.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                )
              }),
              g()(m()(l), '_renderTimeline', function () {
                var e = l.props.selectedTimelineId,
                  t = l._isLatestActive(),
                  a = l._isLatestPinned(),
                  n = l._pinnedListsEnabled && e !== he.a.HOME && e !== he.a.HOME_LATEST,
                  i = l.context.featureSwitches.isTrue('responsive_web_audio_space_ring_home_timeline')
                return y.a.createElement(
                  P.a,
                  null,
                  l.context.featureSwitches.isTrue('home_timeline_topics_navigator_enabled')
                    ? y.a.createElement(Lt.c, { namespace: la }, y.a.createElement(Qt, null))
                    : null,
                  y.a.createElement(Et, {
                    isLatestActive: t,
                    isLatestPinned: a,
                    isList: n,
                    shouldFetchLoadedContentOnMount: t,
                    timelineRef: l._setTimelineRef,
                    withUserPresence: i,
                  }),
                )
              }),
              g()(m()(l), '_renderPrimaryContent', function () {
                var e = l.props,
                  t = e.history,
                  a = e.location,
                  n = e.settingsFetchStatus,
                  i = l.context.isRestrictedSession,
                  r = y.a.createElement(x.a, { history: t })
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  Object(Ct.a)() && !i
                    ? y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(ue, { history: t, location: a }),
                        y.a.createElement(qt.a, null),
                      )
                    : null,
                  y.a.createElement(
                    I.a,
                    { component: Xt.a, fab: r },
                    Yt.b.isKaiOS()
                      ? y.a.createElement(Ft.a, { leftText: $t, onLeftClick: l._handleSoftLeftClick })
                      : null,
                    y.a.createElement(O.a, { fetchStatus: n, render: l._renderTimeline }),
                  ),
                )
              }),
              g()(m()(l), '_setTimelineRef', function (e) {
                l._timeline = e
              })
            var s = l.context.featureSwitches
            return (
              (l._latestTimelineSwitchEnabled = s.isTrue('home_timeline_latest_timeline_switch_enabled')),
              (l._pinnedListsEnabled = s.isTrue('responsive_web_home_pinned_timelines_lists_enabled')),
              l
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.createLocalApiErrorHandlerFetchPins,
                    i = t.fetchPinsIfNeeded
                  if (
                    ((this._lastTimelineSwitchTimestamp = Date.now()),
                    window.addEventListener('focus', this._handleWindowFocus),
                    this._pinnedListsEnabled && i().catch(n()),
                    this.context.featureSwitches.isTrue('responsive_web_framerate_tracking_home_enabled'))
                  ) {
                    var l = Yt.b.isDesktopOS() ? '' : '_mobile',
                      r = 'home'.concat(l)
                    ;(qe()
                      ? a
                          .e(351)
                          .then(a.bind(null, 'Iid0'))
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
                  var e = this.props,
                    t = e.history,
                    a = e.selectedTimelineId,
                    n = this._getTimelineMetadata(),
                    i = n.scribeNamespace,
                    l = n.title,
                    r = !Object(Ct.a)(),
                    s = this._getLinks(),
                    o = s.length > 1,
                    c = r && o ? y.a.createElement(Ye.a, { style: sa.iconTwitter }) : void 0,
                    u = (
                      o
                        ? this._latestTimelineSwitchEnabled && (a === he.a.HOME || a === he.a.HOME_LATEST)
                        : this._latestTimelineSwitchEnabled
                    )
                      ? y.a.createElement(Qe, null)
                      : void 0,
                    d = o ? y.a.createElement(Zt.a, { links: s }) : void 0,
                    m = !r || !o ? l : null
                  return y.a.createElement(
                    Lt.c,
                    { namespace: i },
                    y.a.createElement(
                      Xe.a,
                      { behavioralEventViewType: aa, locationKey: i.page },
                      y.a.createElement(St.a, {
                        centeredLogo: c,
                        documentTitle: l,
                        history: t,
                        onTabRefresh: this._handleTabRefresh,
                        primaryContent: this._renderPrimaryContent,
                        rightControl: u,
                        secondaryBar: d,
                        sidebarContent: y.a.createElement(T.a, null),
                        title: m,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(ra, 'contextType', de.a)
      var sa = J.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = F(ra)
    },
    l9Y6: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'createConfiguration', function () {
          return q
        })
      var n = a('KEM+'),
        i = a.n(n),
        l = a('ezF+'),
        r = a('L+Yr'),
        s = a('GjKI'),
        o = a('rrdj'),
        c = a('KOwe'),
        u = a('0hnP'),
        d = a('PnFR'),
        m = a('yXvm'),
        p = a('iu0J'),
        h = a('A1s0'),
        b = a('0O8K'),
        f = a('96/T'),
        _ = a('AP4B'),
        g = a('ckGq'),
        v = a('rpbw'),
        y = a('S/Qv'),
        T = a('zgaL'),
        w = a('Wjib'),
        k = a('TiJl'),
        E = a('PH3B'),
        L = a('p3rj'),
        S = a('iPUv'),
        C = a('/zpt'),
        F = a('dVvn'),
        P = a('+o05'),
        I = a('SBkc'),
        O = a('14Yn'),
        x = a('vGH+'),
        M = a('pgpd'),
        A = a('5Y9N'),
        j = a('91Nr'),
        K = a('9+AQ'),
        H = a('67iF'),
        B = a('Hl0c'),
        R =
          (a('lTEL'),
          a('7x/C'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          {
            loader: function () {
              return Promise.all([a.e(0), a.e(7), a.e(360)]).then(a.bind(null, 'WFPe'))
            },
            loaderKey: 'topicLandingHeaderLoader',
            strategy: a('XBtf').a.Critical,
          }),
        z = l.e(R),
        U = a('XtkE'),
        D = a('Jz8S'),
        V = a('Yy//'),
        N = a('ogJ+'),
        G = a('Ka9G'),
        J = a('8C2w'),
        W = a('VKSc'),
        Q = a('Zr9n'),
        Y = a('8UdT'),
        q = function (e) {
          var t,
            a = e.allowDownvote,
            n = void 0 !== a && a,
            R = e.displayBlocked,
            q = void 0 !== R && R,
            X = e.featureSwitches,
            Z = e.shouldSelfThreadIncludeAvatar,
            $ = void 0 !== Z && Z,
            ee = e.shouldStoreTypeaheadItem,
            te = e.showWithheldBannerOnMyTweets,
            ae = void 0 === te || te,
            ne = e.tweetDismissable,
            ie = void 0 !== ne && ne,
            le = e.withMessageGaps,
            re = void 0 === le || le,
            se = e.withMuteConversation,
            oe = void 0 !== se && se,
            ce = e.withRemoveFromBookmarks,
            ue = void 0 !== ce && ce,
            de = (e.withSelfThreadCTA, e.withTweetActionsDisabled),
            me = void 0 !== de && de,
            pe = e.withUserPresence,
            he = void 0 !== pe && pe,
            be = e.bookmarkFolderId,
            fe = void 0 === be ? void 0 : be,
            _e = e.errorContext,
            ge = void 0 === _e ? '' : _e,
            ve = e.isInSidebar,
            ye = void 0 !== ve && ve,
            Te = e.withAuthorControls,
            we = void 0 !== Te && Te,
            ke = e.withThirdPartyCards,
            Ee = void 0 === ke || ke
          return (
            (t = {}),
            i()(t, Y.b.Article, r.a),
            i()(t, Y.b.Community, c.a),
            i()(t, Y.b.EventSummary, Object(p.a)({})),
            i()(t, Y.b.FollowSearch, l.e(l.a())),
            i()(t, Y.b.FollowSearchAction, l.e(l.a())),
            i()(t, Y.b.Label, g.a),
            i()(t, Y.b.Message, Object(y.a)({ withGaps: re })),
            i()(t, Y.b.Moment, Object(w.a)({ withAuthorControls: we, errorContext: ge })),
            i()(t, Y.b.MomentAnnotation, T.a),
            i()(t, Y.b.News, E.a),
            i()(t, Y.b.Notification, L.a),
            i()(t, Y.b.PagedCarouselItem, S.a),
            i()(t, Y.b.Place, l.e(l.a())),
            i()(t, Y.b.Prompt, C.a),
            i()(t, Y.b.RelatedSearch, F.a),
            i()(t, Y.b.ScoreEventSummary, P.a),
            i()(t, Y.b.Spelling, O.a),
            i()(t, Y.b.ThreadHeader, x.a),
            i()(t, Y.b.Tile, M.a),
            i()(t, Y.b.TimelineCursor, Object(d.a)({})),
            i()(t, Y.b.TimelineModule, Object(A.b)({})),
            i()(t, Y.b.Tombstone, j.a),
            i()(t, Y.b.Topic, Object(H.a)({ shouldStoreTypeaheadItem: ee })),
            i()(t, Y.b.TopicFollowPrompt, B.a),
            i()(t, Y.b.TopicLandingHeader, z),
            i()(t, Y.b.Trend, Object(U.a)({ withThirdPartyCards: Ee, errorContext: ge })),
            i()(
              t,
              Y.b.Tweet,
              Object(V.a)({
                allowDownvote: n,
                displayBlocked: q,
                dismissable: ie,
                shouldSelfThreadIncludeAvatar: $,
                showWithheldBannerOnMyTweets: ae,
                shouldStoreTypeaheadItem: ee,
                withActionsDisabled: me,
                withMuteConversation: oe,
                withRemoveFromBookmarks: ue,
                withUserPresence: he,
                bookmarkFolderId: fe,
              }),
            ),
            i()(t, Y.b.TweetComposer, D.a),
            i()(t, Y.b.TwitterList, Object(v.a)({})),
            i()(t, Y.b.User, Object(G.a)({ shouldStoreTypeaheadItem: ee })),
            i()(t, Y.b.VerticalGridItem, J.a),
            i()(t, Y.a.CollectionHeader, o.a),
            i()(t, Y.a.ConversationModuleGap, u.a),
            i()(t, Y.a.Divider, m.a),
            i()(t, Y.a.ModuleCarouselTimeline, s.a),
            i()(t, Y.a.ModuleFooter, Object(h.a)({ isInSidebar: ye })),
            i()(t, Y.a.ModuleHeader, b.a),
            i()(t, Y.a.ModuleImpressionPlaceholder, f.a),
            i()(t, Y.a.ModuleShowMore, Object(I.a)({ isInSidebar: ye })),
            i()(t, Y.a.ModuleVerticalGridList, W.a),
            i()(t, Y.a.ModuleVerticalGridTimelineRow, Q.a),
            i()(t, Y.a.NewEntries, k.a),
            i()(t, Y.a.PushPrompt, _.b),
            i()(t, Y.a.Tombstone, K.a),
            i()(t, Y.a.Unsupported, Object(N.a)(X.isTrue('responsive_web_unsupported_entry_tombstone'))),
            t
          )
        }
    },
    yKhE: function (e, t, a) {
      'use strict'
      var n,
        i,
        l,
        r,
        s,
        o,
        c = {
          fragment: {
            argumentDefinitions: (n = [
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor_string' },
              { defaultValue: 20, kind: 'LocalArgument', name: 'max_count' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'TopicPivotsCarouselQuery',
            selections: [
              {
                alias: 'viewer',
                args: (i = [{ kind: 'Literal', name: 's', value: 23 }]),
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
                          (l = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: 'home_topics_navigator_slices',
                                args: (r = [
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
                                      (s = {
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
                storageKey: 'viewer_v2(s:23)',
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: n,
            kind: 'Operation',
            name: 'TopicPivotsCarouselQuery',
            selections: [
              {
                alias: 'viewer',
                args: i,
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
                          l,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: r,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'home_topics_navigator_slices',
                                plural: !1,
                                selections: [
                                  l,
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
                                          l,
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
                                                  (o = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'id',
                                                    storageKey: null,
                                                  }),
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
                                      s,
                                    ],
                                    type: 'HomeTopicsNavigatorSlices',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              {
                                alias: null,
                                args: r,
                                filters: ['cursor_string', 'max_count'],
                                handle: 'slice',
                                key: 'TopicPivotsCarouselQuery_home_topics_navigator_slices',
                                kind: 'LinkedHandle',
                                name: 'home_topics_navigator_slices',
                              },
                              o,
                            ],
                            type: 'User',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        filters: null,
                        handle: 'user',
                        key: '',
                        kind: 'LinkedHandle',
                        name: 'result',
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:23)',
              },
            ],
          },
          params: {
            id: 'eXKaPJUQURao4VLTv4DAdQ',
            metadata: {
              sliceInfoPath: ['viewer', 'user_results', 'result', 'home_topics_navigator_slices', 'slice_info'],
            },
            name: 'TopicPivotsCarouselQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(c.hash = '00b62fb55ad091187417013cbaa9e6a0'), (e.exports = c)
    },
  },
])
//# sourceMappingURL=WIPED
