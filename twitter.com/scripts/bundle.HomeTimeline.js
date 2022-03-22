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
          return dn
        })
      var a = n('yiKp'),
        i = n.n(a),
        l = n('RhWx'),
        r = n.n(l),
        s = n('VrFO'),
        o = n.n(s),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        f = n('2VqO'),
        _ = n.n(f),
        g = n('KEM+'),
        b = n.n(g),
        v = (n('z84I'), n('ho0z'), n('2G9S'), n('ERkP')),
        y = n.n(v),
        T = n('es0u'),
        k = n('wM4e'),
        w = n('kHBp'),
        E = n('rxPX'),
        L = n('wqZ5'),
        S = function (e) {
          return w.a.selectMany(e, Object(L.e)(e))
        },
        F = Object(E.a)()
          .propsFromState(function () {
            return { configurationFetchStatus: k.a, pinnedLists: S, selectedTimelineId: k.d, useLatest: k.e }
          })
          .propsFromActions(function () {
            return { fetchPins: L.b, updateBehavior: k.f }
          })
          .withAnalytics({ page: 'home' }),
        C = n('s14A'),
        x = n('dwig'),
        P = n('v//M'),
        I = n('0+qk'),
        O = (n('7x/C'), n('JtPf'), n('lTEL'), n('87if'), n('kYxP'), n('2dXj')),
        M = n('G6rE'),
        A = Object(E.a)()
          .propsFromState(function () {
            return { loggedInUser: M.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          }),
        B = n('3XMw'),
        K = n.n(B),
        j = n('N5qz'),
        z = n('MWbm'),
        H = n('cHvH'),
        R = n('5mJL'),
        D = n('DNho'),
        U = n('XP29'),
        V = n('t62R'),
        Q = n('/yvb'),
        J = n('rHpw'),
        N = n('cjZk'),
        W = n('3rWK'),
        G = n('ll3R'),
        q = n('pNJr'),
        Y = n('J0mu'),
        Z = n('KrGU'),
        X = K.a.g34f2c63({ verb: '' }),
        $ = K.a.e349147b,
        ee = y.a.createElement(N.a, null),
        te = y.a.createElement(W.a, null),
        ne = y.a.createElement(G.a, null),
        ae = y.a.createElement(q.a, null),
        ie = y.a.createElement(Y.a, null),
        le = y.a.createElement(Z.a, null),
        re = J.a.create(function (e) {
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
        se = A(function (e) {
          var t = e.userAvatarURI
          return y.a.createElement(H.a, null, function (e) {
            var n = e.windowWidth,
              a = !j.a.isOneColumnSquishedLayout(n)
            return y.a.createElement(
              R.a,
              {
                avatarCell: y.a.createElement(D.a.Consumer, null, function (e) {
                  var n = e.avatarSize
                  return y.a.createElement(U.a, { size: n, style: re.avatar, uri: t })
                }),
                avatarCellStyle: re.avatarColumn,
                cellStyle: re.body,
                style: re.root,
              },
              y.a.createElement(V.b, { color: 'gray700', numberOfLines: 1, size: 'headline1', style: re.fakeInput }, $),
              y.a.createElement(
                z.a,
                { style: re.toolbar },
                y.a.createElement(
                  z.a,
                  { style: [re.toolbarSection, re.iconContainer] },
                  y.a.createElement(Q.a, {
                    disabled: !0,
                    icon: ee,
                    size: 'medium',
                    style: [re.toolBarButton, re.firstToolBarButton],
                    type: 'brandText',
                  }),
                  y.a.createElement(Q.a, {
                    disabled: !0,
                    icon: te,
                    size: 'medium',
                    style: re.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? y.a.createElement(Q.a, {
                        disabled: !0,
                        icon: ne,
                        size: 'medium',
                        style: re.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  y.a.createElement(Q.a, {
                    disabled: !0,
                    icon: ae,
                    size: 'medium',
                    style: re.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? y.a.createElement(Q.a, {
                        disabled: !0,
                        icon: ie,
                        size: 'medium',
                        style: re.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  y.a.createElement(Q.a, {
                    disabled: !0,
                    icon: le,
                    size: 'medium',
                    style: re.toolBarButton,
                    type: 'brandText',
                  }),
                ),
                y.a.createElement(
                  z.a,
                  { style: re.toolbarSection },
                  y.a.createElement(Q.a, { disabled: !0, style: re.tweetButton, type: 'brandFilled' }, X),
                ),
              ),
            )
          })
        }),
        oe = n('zb92'),
        ce = Object(oe.a)({
          loader: function () {
            return (O.a.preload() || Promise.resolve()).then(function () {
              return Promise.all([n.e(0), n.e(3), n.e(4), n.e(5), n.e(84)]).then(n.bind(null, 'RrO2'))
            })
          },
          renderPlaceholder: function () {
            return y.a.createElement(se, null)
          },
        }),
        ue = n('1YZw'),
        de = Object(E.a)()
          .propsFromState(function () {
            return { selectedTimelineId: k.d, useLatest: k.e }
          })
          .propsFromActions(function () {
            return { addToast: ue.b, updateBehavior: k.f }
          })
          .withAnalytics(),
        me = n('EY8L'),
        pe = (n('1t7P'), n('jQ/y'), n('1Iuc'), n('yZDr')),
        he = function (e) {
          var t = e.accessibilityLabel,
            n = e.hoverLabel,
            a = e.onPress,
            i = e.renderMenu,
            l = y.a.createElement(pe.a, null)
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
        _e = n('v6aA'),
        ge = n('Lsrn'),
        be = n('k/Ka'),
        ve = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(be.a)(
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
      ve.metadata = { width: 36, height: 36 }
      var ye = ve,
        Te = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(be.a)(
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
      Te.metadata = { width: 36, height: 36 }
      var ke = Te,
        we = n('3JQt'),
        Ee = n('M2x3'),
        Le = K.a.j681ac0d,
        Se = K.a.g8220472,
        Fe = K.a.ccdd3766,
        Ce = K.a.g2657de3,
        xe = K.a.d126cb7c,
        Pe = K.a.c41ecf3c,
        Ie = K.a.d18aa6d4,
        Oe = K.a.c90dcfa2,
        Me = K.a.bc52b0cd,
        Ae = K.a.j6382fe9,
        Be = K.a.f89f6785,
        Ke = K.a.e4acfd11,
        je = K.a.f0c7628a,
        ze = K.a.j7d0cac5,
        He = K.a.eeab4419,
        Re = K.a.cae804f9,
        De = (function (e) {
          h()(n, e)
          var t = _()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(m()(e), '_renderActionMenu', function (t) {
                var n = e.props.useLatest,
                  a = e._getContent().description,
                  i = n ? ye : ke
                return y.a.createElement(fe.a, {
                  DescriptionIcon: i,
                  description: a,
                  descriptionStyle: Ue.description,
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
                  { link: '/settings/content_preferences', text: Le, onClick: e._handleContentPreferences, Icon: Ee.a },
                ]
              }),
              b()(m()(e), '_getContent', function () {
                var t = e.props.useLatest
                return e.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                  ? { description: t ? Oe : Pe, subText: t ? Re : ze, text: t ? He : je }
                  : { description: t ? Ie : Pe, subText: t ? Ke : Be, text: t ? Me : Ae }
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
                    a = n ? Se : Fe,
                    i = n ? xe : Ce
                  return y.a.createElement(he, {
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
      b()(De, 'contextType', _e.a)
      var Ue = J.a.create(function (e) {
          return {
            description: {
              fontSize: e.fontSizes.headline1,
              color: e.colors.text,
              textAlign: 'center',
              fontWeight: e.fontWeights.bold,
            },
          }
        }),
        Ve = De,
        Qe = K.a.e4c6d14c,
        Je = K.a.bffa2da7,
        Ne = (function (e) {
          h()(n, e)
          var t = _()(n)
          function n() {
            var e
            o()(this, n)
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
                  o = r.analytics,
                  c = r.selectedTimelineId,
                  u = r.updateBehavior,
                  d = r.useLatest,
                  m = a.isTrue('responsive_web_home_pinned_timelines_latest_enabled'),
                  p = d ? Qe : Je
                m && d && c === me.a.HOME_LATEST && (t = me.a.HOME),
                  m || (t = c === me.a.HOME ? me.a.HOME_LATEST : me.a.HOME),
                  l.scrollToTop(),
                  o.scribe({ component: 'customize', element: d ? 'see_top' : 'see_latest', action: 'click' }),
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
                  return y.a.createElement(Ve, {
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
      b()(Ne, 'contextType', _e.a)
      var We,
        Ge,
        qe = de(Ne),
        Ye = n('lUZE'),
        Ze = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        Xe = n('yoO3'),
        $e = n('ZB2A'),
        et = (n('5BYb'), n('aeN7')),
        tt = n('hqKg'),
        nt = n('MDbM'),
        at = n('9TPy'),
        it = n('wrlS'),
        lt = n('WA1W'),
        rt = function () {
          return Object(tt.createSelector)(
            function (e, t) {
              return t.isLatestActive
            },
            function (e, t) {
              return t.isList
            },
            k.d,
            it.d,
            function (e, t, n, a) {
              return t
                ? Object(at.a)({ listId: n })
                : e
                ? Object(lt.e)(a.isTrue('responsive_web_graphql_home_latest_enabled'))
                : Object(lt.f)(a.isTrue('responsive_web_graphql_home_enabled'))
            },
          )
        },
        st = function (e, t) {
          var n
          return null !== (n = rt()(e, t).selectInitialFetchStatus(e)) && void 0 !== n ? n : nt.a.LOADING
        },
        ot = Object(E.a)()
          .propsFromState(function () {
            return { initialFetchStatus: st, isColdStart: k.c, module: rt() }
          })
          .propsFromActions(function () {
            return { updateBehavior: k.f }
          })
          .withAnalytics(),
        ct = n('QIgh'),
        ut = n('8UdT'),
        dt = n('iu0J'),
        mt = n('AP4B'),
        pt = function (e) {
          var t = e.withUserPresence,
            n = void 0 !== t && t
          return i()(
            i()(
              i()(
                {},
                Object(ct.a)({
                  allowDownvote: !0,
                  tweetDismissable: !0,
                  shouldSelfThreadIncludeAvatar: !0,
                  withUserPresence: n,
                }),
              ),
              mt.a,
            ),
            {},
            b()({}, ut.b.EventSummary, Object(dt.a)({})),
          )
        },
        ht = n('97Jx'),
        ft = n.n(ht),
        _t = n('FIs5'),
        gt = [
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
        bt = { headerMessage: K.a.d4d5785f, bodyMessage: K.a.f3f4c67b, buttonText: K.a.a399ed2f },
        vt = K.a.d2c66f1f,
        yt = K.a.c3fbf1da,
        Tt = K.a.bf17ded9,
        kt = function (e) {
          var t,
            n = e.onButtonPress,
            a = e.onImpression,
            i = y.a.useContext(_e.a).featureSwitches.getStringValue('responsive_web_htl_empty_state_redesign_variant'),
            l = 'a_no_graphic_new_copy' === (t = i) || 'b_new_graphic_new_copy' === t ? bt : void 0,
            r = (function (e) {
              return 'b_new_graphic_new_copy' === e || 'c_new_graphic_old_copy' === e ? gt : void 0
            })(i)
          return y.a.createElement(
            _t.a,
            ft()(
              { buttonLink: '/i/connect_people', buttonText: l ? l.buttonText : Tt, header: l ? l.headerMessage : vt },
              r && { imageVariants: r },
              { message: l ? l.bodyMessage : yt, onButtonPress: n, onImpression: a },
            ),
          )
        },
        wt = n('EUHl'),
        Et = n('7BdX'),
        Lt = n('fTQJ'),
        St = n('FGLp'),
        Ft = { count: void 0 },
        Ct = K.a.f089620b,
        xt = ot(function (e) {
          var t = e.analytics,
            n = e.isColdStart,
            a = e.isLatestActive,
            i = void 0 !== a && a,
            l = e.isLatestPinned,
            r = void 0 !== l && l,
            s = e.initialFetchStatus,
            o = e.module,
            c = e.recordTTFT,
            u = void 0 === c ? et.e : c,
            d = e.shouldFetchLoadedContentOnMount,
            m = void 0 === d || d,
            p = e.timelineRef,
            h = e.updateBehavior,
            f = e.withUserPresence,
            _ = void 0 !== f && f,
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
                if ((e.fetchStatus === nt.a.FAILED && (g.current = !1), g.current && t.length)) {
                  var n = t.some(function (e) {
                    return e.type === ut.b.Tweet
                  })
                  ;(g.current = !1), n && u()
                }
              },
              [u, g],
            ),
            k = y.a.useCallback(
              function () {
                return y.a.createElement(kt, { onButtonPress: v, onImpression: b })
              },
              [v, b],
            )
          return (
            Object(St.a)(function () {
              ;(function (e) {
                var t = e.initialFetchStatus,
                  n = e.isColdStart,
                  a = e.isLatestActive,
                  i = e.isLatestPinned
                return t !== nt.a.LOADED && n && i && a
              })({ initialFetchStatus: s, isColdStart: n, isLatestActive: i, isLatestPinned: r }) &&
                h({ selectedTimelineId: me.a.HOME })
            }),
            y.a.createElement(Lt.a, {
              entryConfiguration: pt({ withUserPresence: _ }),
              fetchTopOptions: Ft,
              module: o,
              newTweetsPillMode: wt.a.URT,
              onEntriesRendered: T,
              prerollDisplayLocation: Et.c.TIMELINE_HOME,
              renderEmptyState: k,
              shouldFetchLoadedContentOnMount: m,
              timelineRef: p,
              title: Ct,
              withUserPresence: _,
            })
          )
        }),
        Pt = n('7JQg'),
        It = n('VS6U'),
        Ot = n('Es6L'),
        Mt = n('LsPn'),
        At = n('gZV8'),
        Bt = (n('enFi'), n('Fr3L')),
        Kt = n('lnL+'),
        jt = n('Rp9C'),
        zt = n('jAXQ'),
        Ht = n.n(zt),
        Rt = function (e) {
          var t = Ht()(void 0 !== We ? We : (We = n('/n9r')), e.topic),
            a = t.name,
            i = t.topic_id
          Object(St.a)(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [jt.a.forTopic(i)] } })
          })
          var l = y.a.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [jt.a.forTopic(i)] } })
            },
            [e.analytics, i],
          )
          return y.a.createElement(Kt.a, { link: '/i/topics/'.concat(i), onClick: l, text: a })
        },
        Dt = n('Irs7'),
        Ut = n('yUQf'),
        Vt = n('DQzJ'),
        Qt = n('6iuV'),
        Jt = K.a.j0310b9b,
        Nt = K.a.ffd9cfe6,
        Wt = K.a.i0560231,
        Gt = void 0 !== Ge ? Ge : (Ge = n('yKhE')),
        qt = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        Yt = function () {
          var e,
            t,
            n,
            a,
            i,
            l,
            s,
            o = y.a.useRef(0),
            c = Object(Dt.b)(),
            u = Object(Ut.a)(M.e.selectLoggedInUser),
            d = Object(Vt.a)(Gt, {}).data,
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
              return null != e && e.topic ? y.a.createElement(Rt, { analytics: c, key: t, topic: e.topic }) : null
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
                  n = e.previous
                n > t ? c.scribeAction('scroll_left') : n < t && c.scribeAction('scroll_right')
              },
              [c],
            ),
            f = y.a.useCallback(
              function (e) {
                var t = e.index,
                  n = e.intersectionRatio
                t === o.current - 1 && n >= At.c && c.scribeAction('reached_end')
              },
              [c],
            )
          Object(St.a)(function () {
            m.length > 0 && p()
          }),
            y.a.useEffect(
              function () {
                o.current = m.length + 1
              },
              [m],
            )
          var _ = y.a.useCallback(
              function () {
                c.scribe({ element: 'see_more', action: 'click' })
              },
              [c],
            ),
            g = u ? '/'.concat(u.screen_name, '/topics') : '/i/topics/picker',
            b = y.a.createElement(
              Q.a,
              {
                accessibilityLabel: Wt,
                borderColor: 'primary',
                color: 'primary',
                key: 'seeMorePivot',
                link: g,
                onClick: _,
              },
              Nt,
            )
          return m.length > 0
            ? y.a.createElement(
                Qt.a,
                {
                  accessibilityLabel: Jt,
                  childrenStyle: Zt.childrenStyle,
                  onScroll: h,
                  onVisibleRangeChange: f,
                  style: Zt.carousel,
                },
                [].concat(r()(m), [b]),
              )
            : null
        },
        Zt = J.a.create(function (e) {
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
        Xt = function () {
          return y.a.createElement(Bt.a, { errorConfig: qt }, y.a.createElement(Yt, null))
        },
        $t = n('aITJ'),
        en = n('0yYu'),
        tn = n('mw9i'),
        nn = n('k/OQ'),
        an = K.a.i5f7b6b8,
        ln = K.a.d126cb7c,
        rn = K.a.ha8209bb,
        sn = $e.a.HOME,
        on = { page: 'home' },
        cn = { page: 'home_latest' },
        un = { section: 'topics_navigator', component: 'suggest_topics_module' },
        dn = (function (e) {
          h()(a, e)
          var t = _()(a)
          function a(e, n) {
            var l
            o()(this, a),
              (l = t.call(this, e, n)),
              b()(m()(l), '_lastTimelineSwitchTimestamp', 0),
              b()(m()(l), '_unmounted', !1),
              b()(m()(l), '_getLink', function (e, t) {
                var n = l.props,
                  a = n.analytics,
                  i = n.selectedTimelineId,
                  r = n.updateBehavior
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
                  a = l._getLink(me.a.HOME, rn),
                  i = n ? l._getLink(me.a.HOME_LATEST, ln) : void 0,
                  s = l._pinnedListsEnabled
                    ? t.map(function (e) {
                        var t = e.id_str,
                          n = e.name
                        return l._getLink(Object(me.c)(t), n)
                      })
                    : [],
                  o = [a, i],
                  c = l._latestTimelineSwitchEnabled && n ? [i] : [a]
                return [].concat(r()(l._isLatestPinned() ? o : c), r()(s))
              }),
              b()(m()(l), '_getTimelineMetadata', function () {
                var e = l._isLatestActive(),
                  t = e ? cn : on
                return (
                  l.context.featureSwitches.isTrue('responsive_web_home_namespace_update_enabled') &&
                    (t = i()(i()({}, on), {}, { section: e ? 'latest' : 'home' })),
                  { scribeNamespace: t, title: l._pinnedListsEnabled ? rn : e ? ln : rn }
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
                  ? l.props.selectedTimelineId === me.a.HOME_LATEST
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
                  a = l._pinnedListsEnabled && e !== me.a.HOME && e !== me.a.HOME_LATEST,
                  i = l.context.featureSwitches.isTrue('responsive_web_audio_space_ring_home_timeline')
                return y.a.createElement(
                  C.a,
                  null,
                  l.context.featureSwitches.isTrue('home_timeline_topics_navigator_enabled')
                    ? y.a.createElement(Pt.c, { namespace: un }, y.a.createElement(Xt, null))
                    : null,
                  y.a.createElement(xt, {
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
                  t = e.configurationFetchStatus,
                  n = e.history,
                  a = e.location,
                  i = l.context.isRestrictedSession,
                  r = y.a.createElement(I.a, { history: n })
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  Object(Ot.a)() && !i
                    ? y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(ce, { history: n, location: a }),
                        y.a.createElement(en.a, null),
                      )
                    : null,
                  y.a.createElement(
                    x.a,
                    { component: tn.a, fab: r },
                    $t.b.isKaiOS()
                      ? y.a.createElement(Mt.a, { leftText: an, onLeftClick: l._handleSoftLeftClick })
                      : null,
                    y.a.createElement(P.a, { fetchStatus: t, render: l._renderTimeline }),
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
                  var e = this
                  if (
                    ((this._lastTimelineSwitchTimestamp = Date.now()),
                    window.addEventListener('focus', this._handleWindowFocus),
                    this._pinnedListsEnabled && this.props.fetchPins(),
                    this.context.featureSwitches.isTrue('responsive_web_framerate_tracking_home_enabled'))
                  ) {
                    var t = $t.b.isDesktopOS() ? '' : '_mobile',
                      a = 'home'.concat(t)
                    ;(Ze()
                      ? n
                          .e(350)
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
                  var e = this.props,
                    t = e.history,
                    n = e.selectedTimelineId,
                    a = this._getTimelineMetadata(),
                    i = a.scribeNamespace,
                    l = a.title,
                    r = !Object(Ot.a)(),
                    s = this._getLinks(),
                    o = s.length > 1,
                    c = r && o ? y.a.createElement(Ye.a, { style: mn.iconTwitter }) : void 0,
                    u =
                      this._latestTimelineSwitchEnabled && (n === me.a.HOME || n === me.a.HOME_LATEST)
                        ? y.a.createElement(qe, null)
                        : void 0,
                    d = o ? y.a.createElement(nn.a, { links: s }) : void 0,
                    m = !r || !o ? l : null
                  return y.a.createElement(
                    Pt.c,
                    { namespace: i },
                    y.a.createElement(
                      Xe.a,
                      { behavioralEventViewType: sn, locationKey: i.page },
                      y.a.createElement(It.a, {
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
            a
          )
        })(y.a.Component)
      b()(dn, 'contextType', _e.a)
      var mn = J.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = F(dn)
    },
    yKhE: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        i,
        l,
        r,
        s,
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
      ;(c.hash = '00b62fb55ad091187417013cbaa9e6a0'), (t.default = c)
    },
  },
])
//# sourceMappingURL=WIPED
