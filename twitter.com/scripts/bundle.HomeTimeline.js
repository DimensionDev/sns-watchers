;(window.webpackJsonp = window.webpackJsonp || []).push([
  [59],
  {
    '/n9r': function (e, t, n) {
      'use strict'
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
      e.exports = a
    },
    cOLG: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'HomeTimeline', function () {
          return cn
        })
      var a = n('yiKp'),
        i = n.n(a),
        l = n('RhWx'),
        r = n.n(l),
        s = n('VrFO'),
        c = n.n(s),
        o = n('Y9Ll'),
        u = n.n(o),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        _ = n('2VqO'),
        f = n.n(_),
        b = n('KEM+'),
        g = n.n(b),
        v = (n('z84I'), n('ho0z'), n('2G9S'), n('ERkP')),
        y = n.n(v),
        T = n('es0u'),
        k = n('wM4e'),
        E = n('kHBp'),
        w = n('rxPX'),
        L = n('0KEI'),
        S = n('wqZ5'),
        F = function (e) {
          return E.a.selectMany(e, Object(S.f)(e))
        },
        C = Object(w.a)()
          .propsFromState(function () {
            return { pinnedLists: F, selectedTimelineId: k.b, settingsFetchStatus: k.c, useLatest: k.d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerFetchPins: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'HOME_TIMELINE_FETCH_PINS',
              ),
              fetchPinsIfNeeded: S.c,
              updateSettings: k.e,
            }
          })
          .withAnalytics({ page: 'home' }),
        x = n('s14A'),
        I = n('dwig'),
        P = n('v//M'),
        O = n('0+qk'),
        M = (n('7x/C'), n('JtPf'), n('lTEL'), n('87if'), n('kYxP'), n('2dXj')),
        A = n('G6rE'),
        K = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: A.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          }),
        H = n('3XMw'),
        B = n.n(H),
        j = n('N5qz'),
        z = n('MWbm'),
        R = n('cHvH'),
        U = n('5mJL'),
        D = n('DNho'),
        V = n('XP29'),
        N = n('t62R'),
        Q = n('/yvb'),
        W = n('rHpw'),
        J = n('cjZk'),
        q = n('3rWK'),
        G = n('ll3R'),
        Y = n('pNJr'),
        Z = n('J0mu'),
        X = n('KrGU'),
        $ = B.a.g34f2c63({ verb: '' }),
        ee = B.a.e349147b,
        te = y.a.createElement(J.a, null),
        ne = y.a.createElement(q.a, null),
        ae = y.a.createElement(G.a, null),
        ie = y.a.createElement(Y.a, null),
        le = y.a.createElement(Z.a, null),
        re = y.a.createElement(X.a, null),
        se = W.a.create(function (e) {
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
        ce = K(function (e) {
          var t = e.userAvatarURI
          return y.a.createElement(R.a, null, function (e) {
            var n = e.windowWidth,
              a = !j.a.isOneColumnSquishedLayout(n)
            return y.a.createElement(
              U.a,
              {
                avatarCell: y.a.createElement(D.a.Consumer, null, function (e) {
                  var n = e.avatarSize
                  return y.a.createElement(V.a, { size: n, style: se.avatar, uri: t })
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
                z.a,
                { style: se.toolbar },
                y.a.createElement(
                  z.a,
                  { style: [se.toolbarSection, se.iconContainer] },
                  y.a.createElement(Q.a, {
                    disabled: !0,
                    icon: te,
                    size: 'medium',
                    style: [se.toolBarButton, se.firstToolBarButton],
                    type: 'brandText',
                  }),
                  y.a.createElement(Q.a, {
                    disabled: !0,
                    icon: ne,
                    size: 'medium',
                    style: se.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? y.a.createElement(Q.a, {
                        disabled: !0,
                        icon: ae,
                        size: 'medium',
                        style: se.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  y.a.createElement(Q.a, {
                    disabled: !0,
                    icon: ie,
                    size: 'medium',
                    style: se.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? y.a.createElement(Q.a, {
                        disabled: !0,
                        icon: le,
                        size: 'medium',
                        style: se.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  y.a.createElement(Q.a, {
                    disabled: !0,
                    icon: re,
                    size: 'medium',
                    style: se.toolBarButton,
                    type: 'brandText',
                  }),
                ),
                y.a.createElement(
                  z.a,
                  { style: se.toolbarSection },
                  y.a.createElement(Q.a, { disabled: !0, style: se.tweetButton, type: 'brandFilled' }, $),
                ),
              ),
            )
          })
        }),
        oe = n('zb92'),
        ue = Object(oe.a)({
          loader: function () {
            return (M.a.preload() || Promise.resolve()).then(function () {
              return Promise.all([n.e(0), n.e(3), n.e(4), n.e(5), n.e(83)]).then(n.bind(null, 'RrO2'))
            })
          },
          renderPlaceholder: function () {
            return y.a.createElement(ce, null)
          },
        }),
        de = n('v6aA'),
        me = n('1YZw'),
        pe = Object(w.a)()
          .propsFromState(function () {
            return { selectedTimelineId: k.b, useLatest: k.d }
          })
          .propsFromActions(function () {
            return { addToast: me.b, updateSettings: k.e }
          })
          .withAnalytics(),
        he = n('EY8L'),
        _e = (n('1t7P'), n('jQ/y'), n('1Iuc'), n('yZDr')),
        fe = function (e) {
          var t = e.accessibilityLabel,
            n = e.hoverLabel,
            a = e.onPress,
            i = e.renderMenu,
            l = y.a.createElement(_e.a, null)
          return y.a.createElement(Q.a, {
            accessibilityLabel: t,
            hoverLabel: { label: n },
            icon: l,
            onPress: a,
            pullRight: !0,
            renderMenu: i,
            type: 'primaryText',
          })
        },
        be = n('mjJ+'),
        ge = n('Lsrn'),
        ve = n('k/Ka'),
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
        ke = function () {
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
      ke.metadata = { width: 36, height: 36 }
      var Ee = ke,
        we = n('3JQt'),
        Le = n('M2x3'),
        Se = B.a.j681ac0d,
        Fe = B.a.g8220472,
        Ce = B.a.ccdd3766,
        xe = B.a.g2657de3,
        Ie = B.a.d126cb7c,
        Pe = B.a.c41ecf3c,
        Oe = B.a.d18aa6d4,
        Me = B.a.c90dcfa2,
        Ae = B.a.bc52b0cd,
        Ke = B.a.j6382fe9,
        He = B.a.f89f6785,
        Be = B.a.e4acfd11,
        je = B.a.f0c7628a,
        ze = B.a.j7d0cac5,
        Re = B.a.eeab4419,
        Ue = B.a.cae804f9
      var De = W.a.create(function (e) {
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
            n = e.onPress,
            a = e.onToggle,
            i = e.useLatest,
            l = y.a.useContext(de.a).featureSwitches,
            r = i ? Fe : Ce,
            s = i ? Ie : xe,
            c = y.a.useCallback(
              function (e) {
                e(), t()
              },
              [t],
            ),
            o = y.a.useCallback(
              function (e) {
                e(), a()
              },
              [a],
            ),
            u = y.a.useCallback(
              function (e) {
                var t, n, a
                l.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                  ? ((t = i ? Me : Pe), (n = i ? Ue : ze), (a = i ? Re : je))
                  : ((t = i ? Oe : Pe), (n = i ? Be : He), (a = i ? Ae : Ke))
                var r = i ? Te : Ee,
                  s = [
                    { text: a, onClick: o, Icon: we.a, subText: n },
                    { link: '/settings/content_preferences', text: Se, onClick: c, Icon: Le.a },
                  ]
                return y.a.createElement(be.a, {
                  DescriptionIcon: r,
                  description: t,
                  descriptionStyle: De.description,
                  isFixed: !0,
                  items: s,
                  onCloseRequested: e,
                })
              },
              [l, c, o, i],
            )
          return y.a.createElement(fe, { accessibilityLabel: r, hoverLabel: s, onPress: n, renderMenu: u })
        },
        Ne = B.a.e4c6d14c,
        Qe = B.a.bffa2da7
      var We,
        Je,
        qe = pe(function (e) {
          var t = e.addToast,
            n = e.analytics,
            a = e.selectedTimelineId,
            l = e.updateSettings,
            r = e.useLatest,
            s = y.a.useContext(de.a).featureSwitches,
            c = y.a.useCallback(
              function () {
                n.scribe({ component: 'customize', element: 'see_preferences', action: 'click' })
              },
              [n],
            ),
            o = y.a.useCallback(
              function () {
                n.scribe({ section: 'navigation_bar', element: 'customize_button', action: 'click' })
              },
              [n],
            ),
            u = y.a.useCallback(
              function () {
                var e,
                  c = s.isTrue('responsive_web_home_pinned_timelines_latest_enabled'),
                  o = r ? Ne : Qe
                c && r && a === he.a.HOME_LATEST && (e = he.a.HOME),
                  c || (e = a === he.a.HOME ? he.a.HOME_LATEST : he.a.HOME),
                  n.scribe({ component: 'customize', element: r ? 'see_top' : 'see_latest', action: 'click' }),
                  l(i()(i()({}, e && { selectedTimelineId: e }), {}, { useLatest: !r })).then(function () {
                    c || t({ text: o })
                  })
              },
              [t, n, s, a, l, r],
            )
          return y.a.createElement(Ve, { onContentPreferencesSelect: c, onPress: o, onToggle: u, useLatest: r })
        }),
        Ge = n('lUZE'),
        Ye = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        Ze = n('yoO3'),
        Xe = n('ZB2A'),
        $e = (n('5BYb'), n('aeN7')),
        et = n('hqKg'),
        tt = n('9TPy'),
        nt = n('wrlS'),
        at = n('WA1W'),
        it = Object(w.a)()
          .propsFromState(function () {
            return {
              module: Object(et.createSelector)(
                function (e, t) {
                  return t.isLatestActive
                },
                function (e, t) {
                  return t.isList
                },
                k.b,
                nt.d,
                function (e, t, n, a) {
                  return t
                    ? Object(tt.a)({ listId: n })
                    : e
                    ? Object(at.e)(a.isTrue('responsive_web_graphql_home_latest_enabled'))
                    : Object(at.f)(a.isTrue('responsive_web_graphql_home_enabled'))
                },
              ),
            }
          })
          .propsFromActions(function () {
            return { updateSettings: k.e }
          })
          .withAnalytics(),
        lt = n('QIgh'),
        rt = n('8UdT'),
        st = n('iu0J'),
        ct = n('AP4B'),
        ot = function (e) {
          var t = e.withUserPresence,
            n = void 0 !== t && t
          return i()(
            i()(
              i()(
                {},
                Object(lt.a)({
                  allowDownvote: !0,
                  tweetDismissable: !0,
                  shouldSelfThreadIncludeAvatar: !0,
                  withUserPresence: n,
                }),
              ),
              ct.a,
            ),
            {},
            g()({}, rt.b.EventSummary, Object(st.a)({})),
          )
        },
        ut = n('MDbM'),
        dt = n('97Jx'),
        mt = n.n(dt),
        pt = n('FIs5'),
        ht = [
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
        _t = { headerMessage: B.a.d4d5785f, bodyMessage: B.a.f3f4c67b, buttonText: B.a.a399ed2f },
        ft = B.a.d2c66f1f,
        bt = B.a.c3fbf1da,
        gt = B.a.bf17ded9,
        vt = function (e) {
          var t,
            n = e.onButtonPress,
            a = e.onImpression,
            i = y.a.useContext(de.a).featureSwitches.getStringValue('responsive_web_htl_empty_state_redesign_variant'),
            l = 'a_no_graphic_new_copy' === (t = i) || 'b_new_graphic_new_copy' === t ? _t : void 0,
            r = (function (e) {
              return 'b_new_graphic_new_copy' === e || 'c_new_graphic_old_copy' === e ? ht : void 0
            })(i)
          return y.a.createElement(
            pt.a,
            mt()(
              { buttonLink: '/i/connect_people', buttonText: l ? l.buttonText : gt, header: l ? l.headerMessage : ft },
              r && { imageVariants: r },
              { message: l ? l.bodyMessage : bt, onButtonPress: n, onImpression: a },
            ),
          )
        },
        yt = n('EUHl'),
        Tt = n('7BdX'),
        kt = n('fTQJ'),
        Et = { count: void 0 },
        wt = B.a.f089620b,
        Lt = it(function (e) {
          var t = e.analytics,
            n = (e.isLatestActive, e.isLatestPinned, e.module),
            a = e.recordTTFT,
            i = void 0 === a ? $e.e : a,
            l = e.shouldFetchLoadedContentOnMount,
            r = void 0 === l || l,
            s = e.timelineRef,
            c = (e.updateSettings, e.withUserPresence),
            o = void 0 !== c && c,
            u = y.a.useRef(!0),
            d = y.a.useCallback(
              function () {
                t.scribe({ component: 'empty_message', action: 'impression' })
              },
              [t],
            ),
            m = y.a.useCallback(
              function () {
                t.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
              },
              [t],
            ),
            p = y.a.useCallback(
              function (e) {
                var t = e.entries
                if ((e.fetchStatus === ut.a.FAILED && (u.current = !1), u.current && t.length)) {
                  var n = t.some(function (e) {
                    return e.type === rt.b.Tweet
                  })
                  ;(u.current = !1), n && i()
                }
              },
              [i, u],
            ),
            h = y.a.useCallback(
              function () {
                return y.a.createElement(vt, { onButtonPress: m, onImpression: d })
              },
              [m, d],
            )
          return y.a.createElement(kt.a, {
            entryConfiguration: ot({ withUserPresence: o }),
            fetchTopOptions: Et,
            module: n,
            newTweetsPillMode: yt.a.URT,
            onEntriesRendered: p,
            prerollDisplayLocation: Tt.c.TIMELINE_HOME,
            renderEmptyState: h,
            shouldFetchLoadedContentOnMount: r,
            timelineRef: s,
            title: wt,
            withUserPresence: o,
          })
        }),
        St = n('7JQg'),
        Ft = n('VS6U'),
        Ct = n('Es6L'),
        xt = n('LsPn'),
        It = n('gZV8'),
        Pt = (n('YWiL'), n('Fr3L')),
        Ot = n('lnL+'),
        Mt = n('Rp9C'),
        At = n('FGLp'),
        Kt = n('CVPS'),
        Ht = n.n(Kt),
        Bt = function (e) {
          var t = Ht()(void 0 !== We ? We : (We = n('/n9r')), e.topic),
            a = t.name,
            i = t.topic_id
          Object(At.a)(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [Mt.a.forTopic(i)] } })
          })
          var l = y.a.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [Mt.a.forTopic(i)] } })
            },
            [e.analytics, i],
          )
          return y.a.createElement(Ot.a, { link: '/i/topics/'.concat(i), onClick: l, text: a })
        },
        jt = n('Irs7'),
        zt = n('yUQf'),
        Rt = n('DQzJ'),
        Ut = n('6iuV'),
        Dt = B.a.j0310b9b,
        Vt = B.a.ffd9cfe6,
        Nt = B.a.i0560231,
        Qt = void 0 !== Je ? Je : (Je = n('yKhE')),
        Wt = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        Jt = function () {
          var e,
            t,
            n,
            a,
            i,
            l,
            s,
            c = y.a.useRef(0),
            o = Object(jt.b)(),
            u = Object(zt.a)(A.e.selectLoggedInUser),
            d = Object(Rt.a)(Qt, {}).data,
            m = (
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
                null === (a = d.viewer) ||
                void 0 === a ||
                null === (i = a.user_results) ||
                void 0 === i ||
                null === (l = i.result) ||
                void 0 === l ||
                null === (s = l.home_topics_navigator_slices) ||
                void 0 === s
                  ? void 0
                  : s.items)) ||
              []
            ).map(function (e, t) {
              return null != e && e.topic ? y.a.createElement(Bt, { analytics: o, key: t, topic: e.topic }) : null
            }),
            p = y.a.useCallback(
              function () {
                o.scribeAction('impression'), o.scribe({ element: 'see_more', action: 'impression' })
              },
              [o],
            ),
            h = y.a.useCallback(
              function (e) {
                var t = e.next,
                  n = e.previous
                n > t ? o.scribeAction('scroll_left') : n < t && o.scribeAction('scroll_right')
              },
              [o],
            ),
            _ = y.a.useCallback(
              function (e) {
                var t = e.index,
                  n = e.intersectionRatio
                t === c.current - 1 && n >= It.c && o.scribeAction('reached_end')
              },
              [o],
            )
          Object(At.a)(function () {
            m.length > 0 && p()
          }),
            y.a.useEffect(
              function () {
                c.current = m.length + 1
              },
              [m],
            )
          var f = y.a.useCallback(
              function () {
                o.scribe({ element: 'see_more', action: 'click' })
              },
              [o],
            ),
            b = u ? '/'.concat(u.screen_name, '/topics') : '/i/topics/picker',
            g = y.a.createElement(
              Q.a,
              {
                accessibilityLabel: Nt,
                borderColor: 'primary',
                color: 'primary',
                key: 'seeMorePivot',
                link: b,
                onClick: f,
              },
              Vt,
            )
          return m.length > 0
            ? y.a.createElement(
                Ut.a,
                {
                  accessibilityLabel: Dt,
                  childrenStyle: qt.childrenStyle,
                  onScroll: h,
                  onVisibleRangeChange: _,
                  style: qt.carousel,
                },
                [].concat(r()(m), [g]),
              )
            : null
        },
        qt = W.a.create(function (e) {
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
        Gt = function () {
          return y.a.createElement(Pt.a, { errorConfig: Wt }, y.a.createElement(Jt, null))
        },
        Yt = n('aITJ'),
        Zt = n('0yYu'),
        Xt = n('mw9i'),
        $t = n('k/OQ'),
        en = B.a.i5f7b6b8,
        tn = B.a.d126cb7c,
        nn = B.a.ha8209bb,
        an = Xe.a.HOME,
        ln = { page: 'home' },
        rn = { page: 'home_latest' },
        sn = { section: 'topics_navigator', component: 'suggest_topics_module' },
        cn = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a(e, n) {
            var l
            c()(this, a),
              (l = t.call(this, e, n)),
              g()(m()(l), '_lastTimelineSwitchTimestamp', 0),
              g()(m()(l), '_unmounted', !1),
              g()(m()(l), '_getLink', function (e, t) {
                var n = l.props,
                  a = n.analytics,
                  i = n.selectedTimelineId,
                  r = n.updateSettings
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
                      var n = Date.now() - l._lastTimelineSwitchTimestamp
                      r({ selectedTimelineId: e }),
                        a.scribe({ section: i, element: e, action: 'click', data: { duration_ms: n } })
                    }
                  },
                  retainScrollPosition: !1,
                  to: '/home',
                }
              }),
              g()(m()(l), '_getLinks', function () {
                var e = l.props,
                  t = e.pinnedLists,
                  n = e.useLatest,
                  a = l._getLink(he.a.HOME, nn),
                  i = n ? l._getLink(he.a.HOME_LATEST, tn) : void 0,
                  s = l._pinnedListsEnabled
                    ? t.map(function (e) {
                        var t = e.id_str,
                          n = e.name
                        return l._getLink(Object(he.c)(t), n)
                      })
                    : [],
                  c = [a, i],
                  o = n && l._latestTimelineSwitchEnabled ? [i] : [a]
                return [].concat(r()(l._isLatestPinned() ? c : o), r()(s))
              }),
              g()(m()(l), '_getTimelineMetadata', function () {
                var e = l._isLatestActive(),
                  t = e ? rn : ln
                return (
                  l.context.featureSwitches.isTrue('responsive_web_home_namespace_update_enabled') &&
                    (t = i()(i()({}, ln), {}, { section: e ? 'latest' : 'home' })),
                  { scribeNamespace: t, title: l._pinnedListsEnabled ? nn : e ? tn : nn }
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
                  n = l._isLatestPinned(),
                  a = l._pinnedListsEnabled && e !== he.a.HOME && e !== he.a.HOME_LATEST,
                  i = l.context.featureSwitches.isTrue('responsive_web_audio_space_ring_home_timeline')
                return y.a.createElement(
                  x.a,
                  null,
                  l.context.featureSwitches.isTrue('home_timeline_topics_navigator_enabled')
                    ? y.a.createElement(St.c, { namespace: sn }, y.a.createElement(Gt, null))
                    : null,
                  y.a.createElement(Lt, {
                    isLatestActive: t,
                    isLatestPinned: n,
                    isList: a,
                    shouldFetchLoadedContentOnMount: t,
                    timelineRef: l._setTimelineRef,
                    withUserPresence: i,
                  }),
                )
              }),
              g()(m()(l), '_renderPrimaryContent', function () {
                var e = l.props,
                  t = e.history,
                  n = e.location,
                  a = e.settingsFetchStatus,
                  i = l.context.isRestrictedSession,
                  r = y.a.createElement(O.a, { history: t })
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  Object(Ct.a)() && !i
                    ? y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(ue, { history: t, location: n }),
                        y.a.createElement(Zt.a, null),
                      )
                    : null,
                  y.a.createElement(
                    I.a,
                    { component: Xt.a, fab: r },
                    Yt.b.isKaiOS()
                      ? y.a.createElement(xt.a, { leftText: en, onLeftClick: l._handleSoftLeftClick })
                      : null,
                    y.a.createElement(P.a, { fetchStatus: a, render: l._renderTimeline }),
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
            u()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.createLocalApiErrorHandlerFetchPins,
                    i = t.fetchPinsIfNeeded
                  if (
                    ((this._lastTimelineSwitchTimestamp = Date.now()),
                    window.addEventListener('focus', this._handleWindowFocus),
                    this._pinnedListsEnabled && i().catch(a()),
                    this.context.featureSwitches.isTrue('responsive_web_framerate_tracking_home_enabled'))
                  ) {
                    var l = Yt.b.isDesktopOS() ? '' : '_mobile',
                      r = 'home'.concat(l)
                    ;(Ye()
                      ? n
                          .e(349)
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
                  var e = this.props,
                    t = e.history,
                    n = e.selectedTimelineId,
                    a = this._getTimelineMetadata(),
                    i = a.scribeNamespace,
                    l = a.title,
                    r = !Object(Ct.a)(),
                    s = this._getLinks(),
                    c = s.length > 1,
                    o = r && c ? y.a.createElement(Ge.a, { style: on.iconTwitter }) : void 0,
                    u = (
                      c
                        ? this._latestTimelineSwitchEnabled && (n === he.a.HOME || n === he.a.HOME_LATEST)
                        : this._latestTimelineSwitchEnabled
                    )
                      ? y.a.createElement(qe, null)
                      : void 0,
                    d = c ? y.a.createElement($t.a, { links: s }) : void 0,
                    m = !r || !c ? l : null
                  return y.a.createElement(
                    St.c,
                    { namespace: i },
                    y.a.createElement(
                      Ze.a,
                      { behavioralEventViewType: an, locationKey: i.page },
                      y.a.createElement(Ft.a, {
                        centeredLogo: o,
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
            a
          )
        })(y.a.Component)
      g()(cn, 'contextType', de.a)
      var on = W.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = C(cn)
    },
    yKhE: function (e, t, n) {
      'use strict'
      var a,
        i,
        l,
        r,
        s,
        c,
        o = {
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
            argumentDefinitions: a,
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
                                                  (c = {
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
                              c,
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
      ;(o.hash = '00b62fb55ad091187417013cbaa9e6a0'), (e.exports = o)
    },
  },
])
//# sourceMappingURL=WIPED
