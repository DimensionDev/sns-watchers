;(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
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
          return mn
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
        g = n('KEM+'),
        b = n.n(g),
        v = (n('z84I'), n('ho0z'), n('2G9S'), n('ERkP')),
        y = n.n(v),
        T = n('es0u'),
        E = n('wM4e'),
        k = n('kHBp'),
        w = n('rxPX'),
        L = n('0KEI'),
        S = n('wqZ5'),
        F = function (e) {
          return k.a.selectMany(e, Object(S.f)(e))
        },
        C = Object(w.a)()
          .propsFromState(function () {
            return { pinnedLists: F, selectedTimelineId: E.c, settingsFetchStatus: E.d, useLatest: E.e }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerFetchPins: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'HOME_TIMELINE_FETCH_PINS',
              ),
              fetchPinsIfNeeded: S.c,
              updateSettings: E.f,
            }
          })
          .withAnalytics({ page: 'home' }),
        x = n('s14A'),
        P = n('dwig'),
        I = n('v//M'),
        O = n('0+qk'),
        A = (n('7x/C'), n('JtPf'), n('lTEL'), n('87if'), n('kYxP'), n('2dXj')),
        M = n('G6rE'),
        K = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: M.e.selectLoggedInUser }
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
        D = n('5mJL'),
        U = n('DNho'),
        V = n('XP29'),
        N = n('t62R'),
        Q = n('/yvb'),
        W = n('rHpw'),
        J = n('cjZk'),
        G = n('3rWK'),
        q = n('ll3R'),
        Y = n('pNJr'),
        Z = n('J0mu'),
        X = n('KrGU'),
        $ = B.a.g34f2c63({ verb: '' }),
        ee = B.a.e349147b,
        te = y.a.createElement(J.a, null),
        ne = y.a.createElement(G.a, null),
        ae = y.a.createElement(q.a, null),
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
              D.a,
              {
                avatarCell: y.a.createElement(U.a.Consumer, null, function (e) {
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
            return (A.a.preload() || Promise.resolve()).then(function () {
              return Promise.all([n.e(0), n.e(3), n.e(4), n.e(5), n.e(84)]).then(n.bind(null, 'RrO2'))
            })
          },
          renderPlaceholder: function () {
            return y.a.createElement(ce, null)
          },
        }),
        de = n('1YZw'),
        me = Object(w.a)()
          .propsFromState(function () {
            return { selectedTimelineId: E.c, useLatest: E.e }
          })
          .propsFromActions(function () {
            return { addToast: de.b, updateSettings: E.f }
          })
          .withAnalytics(),
        pe = n('EY8L'),
        he = (n('1t7P'), n('jQ/y'), n('1Iuc'), n('yZDr')),
        _e = function (e) {
          var t = e.accessibilityLabel,
            n = e.hoverLabel,
            a = e.onPress,
            i = e.renderMenu,
            l = y.a.createElement(he.a, null)
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
        fe = n('mjJ+'),
        ge = n('v6aA'),
        be = n('Lsrn'),
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
                style: [be.a.root, e.style],
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
        Ee = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ve.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [be.a.root, e.style],
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
      Ee.metadata = { width: 36, height: 36 }
      var ke = Ee,
        we = n('3JQt'),
        Le = n('M2x3'),
        Se = B.a.j681ac0d,
        Fe = B.a.g8220472,
        Ce = B.a.ccdd3766,
        xe = B.a.g2657de3,
        Pe = B.a.d126cb7c,
        Ie = B.a.c41ecf3c,
        Oe = B.a.d18aa6d4,
        Ae = B.a.c90dcfa2,
        Me = B.a.bc52b0cd,
        Ke = B.a.j6382fe9,
        He = B.a.f89f6785,
        Be = B.a.e4acfd11,
        je = B.a.f0c7628a,
        ze = B.a.j7d0cac5,
        Re = B.a.eeab4419,
        De = B.a.cae804f9,
        Ue = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(m()(e), '_renderActionMenu', function (t) {
                var n = e.props.useLatest,
                  a = e._getContent().description,
                  i = n ? Te : ke
                return y.a.createElement(fe.a, {
                  DescriptionIcon: i,
                  description: a,
                  descriptionStyle: Ve.description,
                  isFixed: !0,
                  items: e._getActionMenuItems(),
                  onCloseRequested: t,
                })
              }),
              b()(m()(e), '_getActionMenuItems', function () {
                var t = e._getContent(),
                  n = t.subText
                return [
                  { text: t.text, onClick: e._handleTimelineSwitch, Icon: we.a, subText: n },
                  { link: '/settings/content_preferences', text: Se, onClick: e._handleContentPreferences, Icon: Le.a },
                ]
              }),
              b()(m()(e), '_getContent', function () {
                var t = e.props.useLatest
                return e.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                  ? { description: t ? Ae : Ie, subText: t ? De : ze, text: t ? Re : je }
                  : { description: t ? Oe : Ie, subText: t ? Be : He, text: t ? Me : Ke }
              }),
              b()(m()(e), '_handleTimelineSwitch', function (t) {
                var n = e.props.onToggle
                t(), n()
              }),
              b()(m()(e), '_handleContentPreferences', function (t) {
                var n = e.props.onContentPreferencesSelect
                t(), n()
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.onPress,
                    n = e.useLatest,
                    a = n ? Fe : Ce,
                    i = n ? Pe : xe
                  return y.a.createElement(_e, {
                    accessibilityLabel: a,
                    hoverLabel: i,
                    onPress: t,
                    renderMenu: this._renderActionMenu,
                  })
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      b()(Ue, 'contextType', ge.a)
      var Ve = W.a.create(function (e) {
          return {
            description: {
              fontSize: e.fontSizes.headline1,
              color: e.colors.text,
              textAlign: 'center',
              fontWeight: e.fontWeights.bold,
            },
          }
        }),
        Ne = Ue,
        Qe = B.a.e4c6d14c,
        We = B.a.bffa2da7,
        Je = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, l = new Array(a), r = 0; r < a; r++) l[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              b()(m()(e), '_handleToggle', function () {
                var t,
                  n = e.context,
                  a = n.featureSwitches,
                  l = n.viewport,
                  r = e.props,
                  s = r.addToast,
                  c = r.analytics,
                  o = r.selectedTimelineId,
                  u = r.updateSettings,
                  d = r.useLatest,
                  m = a.isTrue('responsive_web_home_pinned_timelines_latest_enabled'),
                  p = d ? Qe : We
                m && d && o === pe.a.HOME_LATEST && (t = pe.a.HOME),
                  m || (t = o === pe.a.HOME ? pe.a.HOME_LATEST : pe.a.HOME),
                  l.scrollToTop(),
                  c.scribe({ component: 'customize', element: d ? 'see_top' : 'see_latest', action: 'click' }),
                  u(i()(i()({}, t && { selectedTimelineId: t }), {}, { useLatest: !d })).then(function () {
                    m || s({ text: p })
                  })
              }),
              b()(m()(e), '_handleSwitchPress', function () {
                e.props.analytics.scribe({ section: 'navigation_bar', element: 'customize_button', action: 'click' })
              }),
              b()(m()(e), '_handleContentPreferencesSelect', function () {
                e.props.analytics.scribe({ component: 'customize', element: 'see_preferences', action: 'click' })
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.useLatest
                  return y.a.createElement(Ne, {
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
      b()(Je, 'contextType', ge.a)
      var Ge,
        qe,
        Ye = me(Je),
        Ze = n('lUZE'),
        Xe = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        $e = n('yoO3'),
        et = n('ZB2A'),
        tt = (n('5BYb'), n('aeN7')),
        nt = n('hqKg'),
        at = n('MDbM'),
        it = n('9TPy'),
        lt = n('wrlS'),
        rt = n('WA1W'),
        st = function () {
          return Object(nt.createSelector)(
            function (e, t) {
              return t.isLatestActive
            },
            function (e, t) {
              return t.isList
            },
            E.c,
            lt.d,
            function (e, t, n, a) {
              return t
                ? Object(it.a)({ listId: n })
                : e
                ? Object(rt.e)(a.isTrue('responsive_web_graphql_home_latest_enabled'))
                : Object(rt.f)(a.isTrue('responsive_web_graphql_home_enabled'))
            },
          )
        },
        ct = function (e, t) {
          var n
          return null !== (n = st()(e, t).selectInitialFetchStatus(e)) && void 0 !== n ? n : at.a.LOADING
        },
        ot = Object(w.a)()
          .propsFromState(function () {
            return { initialFetchStatus: ct, isColdStart: E.b, module: st() }
          })
          .propsFromActions(function () {
            return { updateSettings: E.f }
          })
          .withAnalytics(),
        ut = n('QIgh'),
        dt = n('8UdT'),
        mt = n('iu0J'),
        pt = n('AP4B'),
        ht = function (e) {
          var t = e.withUserPresence,
            n = void 0 !== t && t
          return i()(
            i()(
              i()(
                {},
                Object(ut.a)({
                  allowDownvote: !0,
                  tweetDismissable: !0,
                  shouldSelfThreadIncludeAvatar: !0,
                  withUserPresence: n,
                }),
              ),
              pt.a,
            ),
            {},
            b()({}, dt.b.EventSummary, Object(mt.a)({})),
          )
        },
        _t = n('97Jx'),
        ft = n.n(_t),
        gt = n('FIs5'),
        bt = [
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
        vt = { headerMessage: B.a.d4d5785f, bodyMessage: B.a.f3f4c67b, buttonText: B.a.a399ed2f },
        yt = B.a.d2c66f1f,
        Tt = B.a.c3fbf1da,
        Et = B.a.bf17ded9,
        kt = function (e) {
          var t,
            n = e.onButtonPress,
            a = e.onImpression,
            i = y.a.useContext(ge.a).featureSwitches.getStringValue('responsive_web_htl_empty_state_redesign_variant'),
            l = 'a_no_graphic_new_copy' === (t = i) || 'b_new_graphic_new_copy' === t ? vt : void 0,
            r = (function (e) {
              return 'b_new_graphic_new_copy' === e || 'c_new_graphic_old_copy' === e ? bt : void 0
            })(i)
          return y.a.createElement(
            gt.a,
            ft()(
              { buttonLink: '/i/connect_people', buttonText: l ? l.buttonText : Et, header: l ? l.headerMessage : yt },
              r && { imageVariants: r },
              { message: l ? l.bodyMessage : Tt, onButtonPress: n, onImpression: a },
            ),
          )
        },
        wt = n('EUHl'),
        Lt = n('7BdX'),
        St = n('fTQJ'),
        Ft = n('FGLp'),
        Ct = { count: void 0 },
        xt = B.a.f089620b,
        Pt = ot(function (e) {
          var t = e.analytics,
            n = e.isColdStart,
            a = e.isLatestActive,
            i = void 0 !== a && a,
            l = e.isLatestPinned,
            r = void 0 !== l && l,
            s = e.initialFetchStatus,
            c = e.module,
            o = e.recordTTFT,
            u = void 0 === o ? tt.e : o,
            d = e.shouldFetchLoadedContentOnMount,
            m = void 0 === d || d,
            p = e.timelineRef,
            h = e.updateSettings,
            _ = e.withUserPresence,
            f = void 0 !== _ && _,
            g = y.a.useRef(!0),
            b = y.a.useCallback(
              function () {
                t.scribe({ component: 'empty_message', action: 'impression' })
              },
              [t],
            ),
            v = y.a.useCallback(
              function () {
                t.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
              },
              [t],
            ),
            T = y.a.useCallback(
              function (e) {
                var t = e.entries
                if ((e.fetchStatus === at.a.FAILED && (g.current = !1), g.current && t.length)) {
                  var n = t.some(function (e) {
                    return e.type === dt.b.Tweet
                  })
                  ;(g.current = !1), n && u()
                }
              },
              [u, g],
            ),
            E = y.a.useCallback(
              function () {
                return y.a.createElement(kt, { onButtonPress: v, onImpression: b })
              },
              [v, b],
            )
          return (
            Object(Ft.a)(function () {
              ;(function (e) {
                var t = e.initialFetchStatus,
                  n = e.isColdStart,
                  a = e.isLatestActive,
                  i = e.isLatestPinned
                return t !== at.a.LOADED && n && i && a
              })({ initialFetchStatus: s, isColdStart: n, isLatestActive: i, isLatestPinned: r }) &&
                h({ selectedTimelineId: pe.a.HOME })
            }),
            y.a.createElement(St.a, {
              entryConfiguration: ht({ withUserPresence: f }),
              fetchTopOptions: Ct,
              module: c,
              newTweetsPillMode: wt.a.URT,
              onEntriesRendered: T,
              prerollDisplayLocation: Lt.c.TIMELINE_HOME,
              renderEmptyState: E,
              shouldFetchLoadedContentOnMount: m,
              timelineRef: p,
              title: xt,
              withUserPresence: f,
            })
          )
        }),
        It = n('7JQg'),
        Ot = n('VS6U'),
        At = n('Es6L'),
        Mt = n('LsPn'),
        Kt = n('gZV8'),
        Ht = (n('enFi'), n('Fr3L')),
        Bt = n('lnL+'),
        jt = n('Rp9C'),
        zt = n('jAXQ'),
        Rt = n.n(zt),
        Dt = function (e) {
          var t = Rt()(void 0 !== Ge ? Ge : (Ge = n('/n9r')), e.topic),
            a = t.name,
            i = t.topic_id
          Object(Ft.a)(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [jt.a.forTopic(i)] } })
          })
          var l = y.a.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [jt.a.forTopic(i)] } })
            },
            [e.analytics, i],
          )
          return y.a.createElement(Bt.a, { link: '/i/topics/'.concat(i), onClick: l, text: a })
        },
        Ut = n('Irs7'),
        Vt = n('yUQf'),
        Nt = n('DQzJ'),
        Qt = n('6iuV'),
        Wt = B.a.j0310b9b,
        Jt = B.a.ffd9cfe6,
        Gt = B.a.i0560231,
        qt = void 0 !== qe ? qe : (qe = n('yKhE')),
        Yt = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        Zt = function () {
          var e,
            t,
            n,
            a,
            i,
            l,
            s,
            c = y.a.useRef(0),
            o = Object(Ut.b)(),
            u = Object(Vt.a)(M.e.selectLoggedInUser),
            d = Object(Nt.a)(qt, {}).data,
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
              return null != e && e.topic ? y.a.createElement(Dt, { analytics: o, key: t, topic: e.topic }) : null
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
                t === c.current - 1 && n >= Kt.c && o.scribeAction('reached_end')
              },
              [o],
            )
          Object(Ft.a)(function () {
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
            g = u ? '/'.concat(u.screen_name, '/topics') : '/i/topics/picker',
            b = y.a.createElement(
              Q.a,
              {
                accessibilityLabel: Gt,
                borderColor: 'primary',
                color: 'primary',
                key: 'seeMorePivot',
                link: g,
                onClick: f,
              },
              Jt,
            )
          return m.length > 0
            ? y.a.createElement(
                Qt.a,
                {
                  accessibilityLabel: Wt,
                  childrenStyle: Xt.childrenStyle,
                  onScroll: h,
                  onVisibleRangeChange: _,
                  style: Xt.carousel,
                },
                [].concat(r()(m), [b]),
              )
            : null
        },
        Xt = W.a.create(function (e) {
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
        $t = function () {
          return y.a.createElement(Ht.a, { errorConfig: Yt }, y.a.createElement(Zt, null))
        },
        en = n('aITJ'),
        tn = n('0yYu'),
        nn = n('mw9i'),
        an = n('k/OQ'),
        ln = B.a.i5f7b6b8,
        rn = B.a.d126cb7c,
        sn = B.a.ha8209bb,
        cn = et.a.HOME,
        on = { page: 'home' },
        un = { page: 'home_latest' },
        dn = { section: 'topics_navigator', component: 'suggest_topics_module' },
        mn = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a(e, n) {
            var l
            c()(this, a),
              (l = t.call(this, e, n)),
              b()(m()(l), '_lastTimelineSwitchTimestamp', 0),
              b()(m()(l), '_unmounted', !1),
              b()(m()(l), '_getLink', function (e, t) {
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
                    if (i === e) l._timeline && l._timeline.refreshOrGoTop()
                    else {
                      var t = Date.now() - l._lastTimelineSwitchTimestamp
                      r({ selectedTimelineId: e }),
                        a.scribe({ section: i, element: e, action: 'click', data: { duration_ms: t } })
                    }
                  },
                  retainScrollPosition: !1,
                  to: { pathname: '/home' },
                }
              }),
              b()(m()(l), '_getLinks', function () {
                var e = l.props,
                  t = e.pinnedLists,
                  n = e.useLatest,
                  a = l._getLink(pe.a.HOME, sn),
                  i = n ? l._getLink(pe.a.HOME_LATEST, rn) : void 0,
                  s = l._pinnedListsEnabled
                    ? t.map(function (e) {
                        var t = e.id_str,
                          n = e.name
                        return l._getLink(Object(pe.c)(t), n)
                      })
                    : [],
                  c = [a, i],
                  o = l._latestTimelineSwitchEnabled && n ? [i] : [a]
                return [].concat(r()(l._isLatestPinned() ? c : o), r()(s))
              }),
              b()(m()(l), '_getTimelineMetadata', function () {
                var e = l._isLatestActive(),
                  t = e ? un : on
                return (
                  l.context.featureSwitches.isTrue('responsive_web_home_namespace_update_enabled') &&
                    (t = i()(i()({}, on), {}, { section: e ? 'latest' : 'home' })),
                  { scribeNamespace: t, title: l._pinnedListsEnabled ? sn : e ? rn : sn }
                )
              }),
              b()(m()(l), '_handleSoftLeftClick', function () {
                return l.props.history.push('/account')
              }),
              b()(m()(l), '_handleTabRefresh', function () {
                var e
                return null === (e = l._timeline) || void 0 === e ? void 0 : e.refreshOrGoTop()
              }),
              b()(m()(l), '_handleWindowFocus', function () {
                var e
                return null === (e = l._timeline) || void 0 === e ? void 0 : e.fetchTop({ onlyIfStale: !0 })
              }),
              b()(m()(l), '_isLatestActive', function () {
                return l._isLatestPinned()
                  ? l.props.selectedTimelineId === pe.a.HOME_LATEST
                  : l._latestTimelineSwitchEnabled && l.props.useLatest
              }),
              b()(m()(l), '_isLatestPinned', function () {
                return (
                  l._latestTimelineSwitchEnabled &&
                  l.props.useLatest &&
                  l.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                )
              }),
              b()(m()(l), '_renderTimeline', function () {
                var e = l.props.selectedTimelineId,
                  t = l._isLatestActive(),
                  n = l._isLatestPinned(),
                  a = l._pinnedListsEnabled && e !== pe.a.HOME && e !== pe.a.HOME_LATEST,
                  i = l.context.featureSwitches.isTrue('responsive_web_audio_space_ring_home_timeline')
                return y.a.createElement(
                  x.a,
                  null,
                  l.context.featureSwitches.isTrue('home_timeline_topics_navigator_enabled')
                    ? y.a.createElement(It.c, { namespace: dn }, y.a.createElement($t, null))
                    : null,
                  y.a.createElement(Pt, {
                    isLatestActive: t,
                    isLatestPinned: n,
                    isList: a,
                    shouldFetchLoadedContentOnMount: t,
                    timelineRef: l._setTimelineRef,
                    withUserPresence: i,
                  }),
                )
              }),
              b()(m()(l), '_renderPrimaryContent', function () {
                var e = l.props,
                  t = e.history,
                  n = e.location,
                  a = e.settingsFetchStatus,
                  i = l.context.isRestrictedSession,
                  r = y.a.createElement(O.a, { history: t })
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  Object(At.a)() && !i
                    ? y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(ue, { history: t, location: n }),
                        y.a.createElement(tn.a, null),
                      )
                    : null,
                  y.a.createElement(
                    P.a,
                    { component: nn.a, fab: r },
                    en.b.isKaiOS()
                      ? y.a.createElement(Mt.a, { leftText: ln, onLeftClick: l._handleSoftLeftClick })
                      : null,
                    y.a.createElement(I.a, { fetchStatus: a, render: l._renderTimeline }),
                  ),
                )
              }),
              b()(m()(l), '_setTimelineRef', function (e) {
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
                    var l = en.b.isDesktopOS() ? '' : '_mobile',
                      r = 'home'.concat(l)
                    ;(Xe()
                      ? n
                          .e(351)
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
                    r = !Object(At.a)(),
                    s = this._getLinks(),
                    c = s.length > 1,
                    o = r && c ? y.a.createElement(Ze.a, { style: pn.iconTwitter }) : void 0,
                    u =
                      this._latestTimelineSwitchEnabled && (n === pe.a.HOME || n === pe.a.HOME_LATEST)
                        ? y.a.createElement(Ye, null)
                        : void 0,
                    d = c ? y.a.createElement(an.a, { links: s }) : void 0,
                    m = !r || !c ? l : null
                  return y.a.createElement(
                    It.c,
                    { namespace: i },
                    y.a.createElement(
                      $e.a,
                      { behavioralEventViewType: cn, locationKey: i.page },
                      y.a.createElement(Ot.a, {
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
      b()(mn, 'contextType', ge.a)
      var pn = W.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = C(mn)
    },
    yKhE: function (e, t, n) {
      'use strict'
      n.r(t)
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
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: 'viewer_v2(s:23)',
              },
            ],
          },
          params: {
            id: '3hVap2vZoYE-XviTGbAiRQ',
            metadata: {
              sliceInfoPath: ['viewer', 'user_results', 'result', 'home_topics_navigator_slices', 'slice_info'],
            },
            name: 'TopicPivotsCarouselQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(o.hash = '00b62fb55ad091187417013cbaa9e6a0'), (t.default = o)
    },
  },
])
//# sourceMappingURL=WIPED
