;(window.webpackJsonp = window.webpackJsonp || []).push([
  [59],
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
          return on
        })
      var a = n('yiKp'),
        i = n.n(a),
        l = n('VrFO'),
        r = n.n(l),
        s = n('Y9Ll'),
        o = n.n(s),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('2VqO'),
        h = n.n(p),
        f = n('KEM+'),
        _ = n.n(f),
        g = (n('2G9S'), n('ERkP')),
        b = n.n(g),
        v = n('es0u'),
        y = n('wM4e'),
        T = n('kHBp'),
        k = n('wqZ5'),
        w = n('rxPX'),
        E = function (e) {
          var t = Object(k.f)(e)
          return T.a.selectMany(e, t) || []
        },
        L = Object(w.a)()
          .propsFromState(function () {
            return { configurationFetchStatus: y.a, pinnedLists: E, selectedTimelineId: y.c, useLatest: y.d }
          })
          .propsFromActions(function () {
            return { clearLocalPinnedListStorage: k.a, fetchPins: k.c, updateBehavior: y.e }
          })
          .withAnalytics({ page: 'home' }),
        S = n('s14A'),
        x = n('dwig'),
        F = n('v//M'),
        C = n('0+qk'),
        I = (n('7x/C'), n('JtPf'), n('lTEL'), n('87if'), n('kYxP'), n('2dXj')),
        P = (n('ho0z'), n('G6rE')),
        M = Object(w.a)()
          .propsFromState(function () {
            return { loggedInUser: P.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          }),
        O = n('3XMw'),
        A = n.n(O),
        K = n('N5qz'),
        B = n('MWbm'),
        z = n('cHvH'),
        R = n('5mJL'),
        j = n('DNho'),
        D = n('XP29'),
        H = n('t62R'),
        U = n('/yvb'),
        V = n('rHpw'),
        Q = n('cjZk'),
        J = n('3rWK'),
        W = n('ll3R'),
        N = n('pNJr'),
        q = n('J0mu'),
        G = n('KrGU'),
        X = A.a.g34f2c63({ verb: '' }),
        Y = A.a.e349147b,
        Z = b.a.createElement(Q.a, null),
        $ = b.a.createElement(J.a, null),
        ee = b.a.createElement(W.a, null),
        te = b.a.createElement(N.a, null),
        ne = b.a.createElement(q.a, null),
        ae = b.a.createElement(G.a, null),
        ie = V.a.create(function (e) {
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
        le = M(function (e) {
          var t = e.userAvatarURI
          return b.a.createElement(z.a, null, function (e) {
            var n = e.windowWidth,
              a = !K.a.isOneColumnSquishedLayout(n)
            return b.a.createElement(
              R.a,
              {
                avatarCell: b.a.createElement(j.a.Consumer, null, function (e) {
                  var n = e.avatarSize
                  return b.a.createElement(D.a, { size: n, style: ie.avatar, uri: t })
                }),
                avatarCellStyle: ie.avatarColumn,
                cellStyle: ie.body,
                style: ie.root,
              },
              b.a.createElement(H.b, { color: 'gray700', numberOfLines: 1, size: 'headline1', style: ie.fakeInput }, Y),
              b.a.createElement(
                B.a,
                { style: ie.toolbar },
                b.a.createElement(
                  B.a,
                  { style: [ie.toolbarSection, ie.iconContainer] },
                  b.a.createElement(U.a, {
                    disabled: !0,
                    icon: Z,
                    size: 'medium',
                    style: [ie.toolBarButton, ie.firstToolBarButton],
                    type: 'brandText',
                  }),
                  b.a.createElement(U.a, {
                    disabled: !0,
                    icon: $,
                    size: 'medium',
                    style: ie.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? b.a.createElement(U.a, {
                        disabled: !0,
                        icon: ee,
                        size: 'medium',
                        style: ie.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  b.a.createElement(U.a, {
                    disabled: !0,
                    icon: te,
                    size: 'medium',
                    style: ie.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? b.a.createElement(U.a, {
                        disabled: !0,
                        icon: ne,
                        size: 'medium',
                        style: ie.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  b.a.createElement(U.a, {
                    disabled: !0,
                    icon: ae,
                    size: 'medium',
                    style: ie.toolBarButton,
                    type: 'brandText',
                  }),
                ),
                b.a.createElement(
                  B.a,
                  { style: ie.toolbarSection },
                  b.a.createElement(U.a, { disabled: !0, style: ie.tweetButton, type: 'brandFilled' }, X),
                ),
              ),
            )
          })
        }),
        re = n('zb92'),
        se = Object(re.a)({
          loader: function () {
            return (I.a.preload() || Promise.resolve()).then(function () {
              return Promise.all([n.e(0), n.e(3), n.e(4), n.e(9), n.e(83)]).then(n.bind(null, 'RrO2'))
            })
          },
          renderPlaceholder: function () {
            return b.a.createElement(le, null)
          },
        }),
        oe = n('EY8L'),
        ce = n('1YZw'),
        ue = Object(w.a)()
          .propsFromState(function () {
            return { selectedTimelineId: y.c, useLatest: y.d }
          })
          .propsFromActions(function () {
            return { addToast: ce.b, updateBehavior: y.e }
          })
          .withAnalytics(),
        de = (n('1t7P'), n('jQ/y'), n('1Iuc'), n('yZDr')),
        me = function (e) {
          var t = e.accessibilityLabel,
            n = e.hoverLabel,
            a = e.onPress,
            i = e.renderMenu,
            l = b.a.createElement(de.a, null)
          return b.a.createElement(U.a, {
            accessibilityLabel: t,
            hoverLabel: { label: n },
            icon: l,
            onPress: a,
            pullRight: !0,
            renderMenu: i,
            type: 'primaryText',
          })
        },
        pe = n('mjJ+'),
        he = n('v6aA'),
        fe = n('Lsrn'),
        _e = n('k/Ka'),
        ge = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(_e.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [fe.a.root, e.style],
                viewBox: '0 0 36 36',
              },
            ),
            b.a.createElement(
              'g',
              null,
              b.a.createElement('path', {
                d: 'M27.325 20.595c0 7.333-5.913 13.278-13.206 13.278S.912 27.928.912 20.595 6.825 7.317 14.12 7.317s13.205 5.944 13.205 13.278',
                fill: '#71C9F8',
              }),
              b.a.createElement('path', {
                d: 'M24.576 20.682c0 5.802-4.678 10.506-10.45 10.506-5.77 0-10.448-4.704-10.448-10.506s4.678-10.506 10.45-10.506c5.77 0 10.448 4.704 10.448 10.506',
                fill: '#97E3FF',
              }),
              b.a.createElement('path', {
                d: 'M18.98 20.94l-3.86-.583v-6.215c0-.552-.45-1-1-1s-1 .448-1 1v7.076c0 .06.023.112.033.17.007.042.012.082.025.123.026.084.063.158.11.23.022.038.044.075.072.11.05.06.11.11.173.158.042.03.08.06.128.086.065.034.133.055.204.074.04.01.072.035.114.04l4.704.71c.05.01.1.012.15.012.487 0 .914-.355.988-.85.08-.548-.295-1.058-.84-1.14z',
                fill: '#005FD1',
              }),
              b.a.createElement('path', {
                d: 'M24.553 20.682c0 5.79-4.68 10.5-10.434 10.5S3.683 26.47 3.683 20.68c0-2.953 1.227-5.707 3.31-7.665l.674 1.127c.38.635 1.227.668 1.524.06l1.153-2.36 1.312-2.687c.24-.49-.104-1.067-.65-1.088l-2.988-.116-2.625-.1c-.678-.027-1.05.735-.67 1.37l.804 1.344C2.613 13.065.883 16.736.883 20.683c0 7.333 5.937 13.298 13.234 13.298s13.234-5.964 13.234-13.297h-2.8z',
                fill: '#1DA1F2',
              }),
              b.a.createElement('path', {
                d: 'M35 13.36h-1.467v-1.34c0-.552-.448-1-1-1s-1 .448-1 1v1.34h-1.467c-.552 0-1 .45-1 1s.448 1 1 1h1.467v1.342c0 .552.448 1 1 1s1-.448 1-1v-1.34H35c.552 0 1-.45 1-1s-.448-1-1-1z',
                fill: '#FFAD1F',
              }),
              b.a.createElement('path', {
                d: 'M28.646 4.138h-2.01v-2.01c0-.552-.448-1-1-1s-1 .448-1 1v2.01h-2.01c-.552 0-1 .448-1 1s.448 1 1 1h2.01v2.01c0 .552.448 1 1 1s1-.448 1-1v-2.01h2.01c.552 0 1-.448 1-1s-.447-1-1-1z',
                fill: '#F6809A',
              }),
            ),
          )
        }
      ge.metadata = { width: 36, height: 36 }
      var be = ge,
        ve = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(_e.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [fe.a.root, e.style],
                viewBox: '0 0 36 36',
              },
            ),
            b.a.createElement(
              'g',
              null,
              b.a.createElement('path', {
                d: 'M35.508 15.41l-9.295-3.387L22.438 1.47c-.108-.302-.357-.48-.722-.495-.322.007-.604.22-.698.53l-3.293 10.71-9.132 3.805c-.285.118-.467.4-.46.708.007.308.203.58.492.686L17.92 20.8l3.775 10.552c.107.298.39.496.704.496h.016c.322-.007.604-.22.698-.53l3.293-10.712 9.132-3.803c.284-.118.466-.4.46-.708-.007-.308-.203-.58-.492-.686z',
                fill: '#61BCF6',
              }),
              b.a.createElement('path', {
                d: 'M9.57 4.715l-2.906.065-.06-2.715C6.585 1.34 5.983.763 5.256.78 4.53.796 3.955 1.4 3.97 2.125l.063 2.715-2.747.062C.56 4.92-.016 5.522 0 6.248c.017.726.62 1.302 1.346 1.285l2.747-.062.062 2.716c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.062-2.715 2.905-.066c.725-.017 1.3-.62 1.285-1.346-.017-.726-.62-1.302-1.346-1.285z',
                fill: '#F16888',
              }),
              b.a.createElement('path', {
                d: 'M14.205 29.69l-1.65.036-.034-1.518c-.016-.726-.618-1.302-1.344-1.286s-1.302.62-1.286 1.345l.034 1.518-1.54.035c-.726.016-1.302.62-1.286 1.345.017.726.62 1.302 1.345 1.286l1.54-.034.034 1.518c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.034-1.518 1.65-.037c.726-.016 1.302-.62 1.286-1.345-.016-.727-.62-1.303-1.345-1.286z',
                fill: '#FD9E1A',
              }),
            ),
          )
        }
      ve.metadata = { width: 36, height: 36 }
      var ye = ve,
        Te = n('3JQt'),
        ke = n('M2x3'),
        we = A.a.j681ac0d,
        Ee = A.a.g8220472,
        Le = A.a.ccdd3766,
        Se = A.a.g2657de3,
        xe = A.a.d126cb7c,
        Fe = A.a.c41ecf3c,
        Ce = A.a.d18aa6d4,
        Ie = A.a.c90dcfa2,
        Pe = A.a.bc52b0cd,
        Me = A.a.j6382fe9,
        Oe = A.a.f89f6785,
        Ae = A.a.e4acfd11,
        Ke = A.a.f0c7628a,
        Be = A.a.j7d0cac5,
        ze = A.a.eeab4419,
        Re = A.a.cae804f9,
        je = (function (e) {
          m()(n, e)
          var t = h()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              _()(u()(e), '_renderActionMenu', function (t) {
                var n = e.props.useLatest,
                  a = e._getContent().description,
                  i = n ? be : ye
                return b.a.createElement(pe.a, {
                  DescriptionIcon: i,
                  description: a,
                  descriptionStyle: De.description,
                  isFixed: !0,
                  items: e._getActionMenuItems(),
                  onCloseRequested: t,
                })
              }),
              _()(u()(e), '_getActionMenuItems', function () {
                var t = e._getContent(),
                  n = t.subText
                return [
                  { text: t.text, onClick: e._handleTimelineSwitch, Icon: Te.a, subText: n },
                  { link: '/settings/content_preferences', text: we, onClick: e._handleContentPreferences, Icon: ke.a },
                ]
              }),
              _()(u()(e), '_getContent', function () {
                var t = e.props.useLatest
                return e.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                  ? { description: t ? Ie : Fe, subText: t ? Re : Be, text: t ? ze : Ke }
                  : { description: t ? Ce : Fe, subText: t ? Ae : Oe, text: t ? Pe : Me }
              }),
              _()(u()(e), '_handleTimelineSwitch', function (t) {
                var n = e.props.onToggle
                t(), n()
              }),
              _()(u()(e), '_handleContentPreferences', function (t) {
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
                  var e = this.props,
                    t = e.onPress,
                    n = e.useLatest,
                    a = n ? Ee : Le,
                    i = n ? xe : Se
                  return b.a.createElement(me, {
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
        })(b.a.PureComponent)
      _()(je, 'contextType', he.a)
      var De = V.a.create(function (e) {
          return {
            description: {
              fontSize: e.fontSizes.headline1,
              color: e.colors.text,
              textAlign: 'center',
              fontWeight: e.fontWeights.bold,
            },
          }
        }),
        He = je,
        Ue = A.a.e4c6d14c,
        Ve = A.a.bffa2da7,
        Qe = (function (e) {
          m()(n, e)
          var t = h()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, l = new Array(a), s = 0; s < a; s++) l[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(l))),
              _()(u()(e), '_handleToggle', function () {
                var t = e.context,
                  n = t.featureSwitches,
                  a = t.viewport,
                  l = e.props,
                  r = l.addToast,
                  s = l.analytics,
                  o = l.selectedTimelineId,
                  c = l.updateBehavior,
                  u = l.useLatest
                a.scrollToTop(),
                  s.scribe({ component: 'customize', element: u ? 'see_top' : 'see_latest', action: 'click' })
                var d = u ? Ue : Ve
                c(
                  i()(
                    i()(
                      {},
                      o !== oe.a.HOME &&
                        u &&
                        n.isTrue('responsive_web_home_pinned_timelines_latest_enabled') && {
                          selectedTimelineId: oe.a.HOME,
                        },
                    ),
                    {},
                    { useLatest: !u },
                  ),
                ).then(function () {
                  n.isTrue('responsive_web_home_pinned_timelines_latest_enabled') || r({ text: d })
                })
              }),
              _()(u()(e), '_handleSwitchPress', function () {
                e.props.analytics.scribe({ section: 'navigation_bar', element: 'customize_button', action: 'click' })
              }),
              _()(u()(e), '_handleContentPreferencesSelect', function () {
                e.props.analytics.scribe({ component: 'customize', element: 'see_preferences', action: 'click' })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.useLatest
                  return b.a.createElement(He, {
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
        })(b.a.Component)
      _()(Qe, 'contextType', he.a)
      var Je,
        We,
        Ne = ue(Qe),
        qe = n('lUZE'),
        Ge = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        Xe = n('yoO3'),
        Ye = (n('5BYb'), n('aeN7')),
        Ze = n('hqKg'),
        $e = n('wrlS'),
        et = n('WA1W'),
        tt = Object(w.a)()
          .propsFromState(function () {
            return {
              module: Object(Ze.createSelector)(
                $e.d,
                function (e, t) {
                  return t.isLatestActive
                },
                function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  return t
                    ? Object(et.e)(e.isTrue('responsive_web_graphql_home_latest_enabled'))
                    : Object(et.f)(e.isTrue('responsive_web_graphql_home_enabled'))
                },
              ),
            }
          })
          .propsFromActions(function () {
            return { addToast: ce.b, updateBehavior: y.e }
          })
          .withAnalytics(),
        nt = n('QIgh'),
        at = n('8UdT'),
        it = n('iu0J'),
        lt = n('AP4B'),
        rt = i()(
          i()(
            i()({}, Object(nt.a)({ allowDownvote: !0, tweetDismissable: !0, shouldSelfThreadIncludeAvatar: !0 })),
            lt.a,
          ),
          {},
          _()({}, at.b.EventSummary, Object(it.a)({})),
        ),
        st = n('MDbM'),
        ot = n('97Jx'),
        ct = n.n(ot),
        ut = n('FIs5'),
        dt =
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
        mt = {
          home_alt_a: { headerMessage: A.a.d4d5785f, bodyMessage: A.a.f3f4c67b, buttonText: A.a.a399ed2f },
          home_alt_b: { headerMessage: A.a.d2c66f1f, bodyMessage: A.a.jb52037c, buttonText: A.a.b34cb956 },
        },
        pt = function (e) {
          return dt[e]
        },
        ht = function (e, t) {
          var n
          return null === (n = mt[t]) || void 0 === n ? void 0 : n[e]
        },
        ft = function (e) {
          return ht('headerMessage', e)
        },
        _t = function (e) {
          return ht('bodyMessage', e)
        },
        gt = function (e) {
          return ht('buttonText', e)
        },
        bt = A.a.d2c66f1f,
        vt = A.a.c3fbf1da,
        yt = A.a.bf17ded9,
        Tt = function (e) {
          var t = e.onButtonPress,
            n = e.onImpression,
            a = b.a.useContext(he.a).featureSwitches.getStringValue('responsive_web_htl_empty_state_redesign_variant'),
            i = ['control', 'home_alt_a', 'home_alt_b'].includes(a) && 'control' !== a
          return b.a.createElement(
            ut.a,
            ct()(
              { buttonLink: '/i/connect_people', buttonText: i ? gt(a) : yt, header: i ? ft(a) : bt },
              i && { imageVariants: pt(a) },
              { message: i ? _t(a) : vt, onButtonPress: t, onImpression: n },
            ),
          )
        },
        kt = n('EUHl'),
        wt = n('7BdX'),
        Et = n('fTQJ'),
        Lt = { count: void 0 },
        St = A.a.f089620b,
        xt = tt(function (e) {
          var t = e.analytics,
            n = e.module,
            a = e.recordTTFT,
            i = void 0 === a ? Ye.e : a,
            l = e.shouldFetchLoadedContentOnMount,
            r = void 0 === l || l,
            s = e.timelineRef,
            o = b.a.useRef(!0),
            c = function () {
              t.scribe({ component: 'empty_message', action: 'impression' })
            },
            u = function () {
              t.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
            },
            d = b.a.useCallback(
              function (e) {
                var t = e.entries
                if ((e.fetchStatus === st.a.FAILED && (o.current = !1), o.current && t.length)) {
                  var n = t.some(function (e) {
                    return e.type === at.b.Tweet
                  })
                  ;(o.current = !1), n && i()
                }
              },
              [i, o],
            )
          return b.a.createElement(Et.a, {
            entryConfiguration: rt,
            fetchTopOptions: Lt,
            module: n,
            newTweetsPillMode: kt.a.URT,
            onEntriesRendered: d,
            prerollDisplayLocation: wt.c.TIMELINE_HOME,
            renderEmptyState: function () {
              return b.a.createElement(Tt, { onButtonPress: u, onImpression: c })
            },
            shouldFetchLoadedContentOnMount: r,
            timelineRef: s,
            title: St,
          })
        }),
        Ft = n('7JQg'),
        Ct = n('VS6U'),
        It = n('Es6L'),
        Pt = n('LsPn'),
        Mt = n('RhWx'),
        Ot = n.n(Mt),
        At = (n('z84I'), n('gZV8')),
        Kt = (n('enFi'), n('Fr3L')),
        Bt = n('lnL+'),
        zt = n('Rp9C'),
        Rt = n('jAXQ'),
        jt = n.n(Rt),
        Dt = function (e) {
          var t = jt()(void 0 !== Je ? Je : (Je = n('/n9r')), e.topic),
            a = t.name,
            i = t.topic_id
          b.a.useEffect(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [zt.a.forTopic(i)] } })
          }, [])
          var l = b.a.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [zt.a.forTopic(i)] } })
            },
            [e.analytics, i],
          )
          return b.a.createElement(Bt.a, { link: '/i/topics/'.concat(i), onClick: l, text: a })
        },
        Ht = n('Irs7'),
        Ut = n('yUQf'),
        Vt = n('DQzJ'),
        Qt = n('6iuV'),
        Jt = A.a.ffd9cfe6,
        Wt = void 0 !== We ? We : (We = n('yKhE')),
        Nt = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        qt = function () {
          var e,
            t,
            n,
            a,
            i,
            l,
            r,
            s = b.a.useRef(0),
            o = Object(Ht.b)(),
            c = Object(Ut.a)(P.e.selectLoggedInUser),
            u = Object(Vt.a)(Wt, {}).data,
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
                null === (a = u.viewer) ||
                void 0 === a ||
                null === (i = a.user_results) ||
                void 0 === i ||
                null === (l = i.result) ||
                void 0 === l ||
                null === (r = l.home_topics_navigator_slices) ||
                void 0 === r
                  ? void 0
                  : r.items)) ||
              []
            ).map(function (e, t) {
              return null != e && e.topic ? b.a.createElement(Dt, { analytics: o, key: t, topic: e.topic }) : null
            }),
            m = b.a.useCallback(
              function () {
                o.scribeAction('impression'), o.scribe({ element: 'see_more', action: 'impression' })
              },
              [o],
            ),
            p = b.a.useCallback(
              function (e) {
                var t = e.next,
                  n = e.previous
                n > t ? o.scribeAction('scroll_left') : n < t && o.scribeAction('scroll_right')
              },
              [o],
            ),
            h = b.a.useCallback(
              function (e) {
                var t = e.index,
                  n = e.intersectionRatio
                t === s.current - 1 && n >= At.c && o.scribeAction('reached_end')
              },
              [o],
            )
          b.a.useEffect(function () {
            d.length > 0 && m()
          }, []),
            b.a.useEffect(
              function () {
                s.current = d.length + 1
              },
              [d],
            )
          var f = b.a.useCallback(
              function () {
                o.scribe({ element: 'see_more', action: 'click' })
              },
              [o],
            ),
            _ = c ? '/'.concat(c.screen_name, '/topics') : '/i/topics/picker',
            g = b.a.createElement(
              U.a,
              { borderColor: 'primary', color: 'primary', key: 'seeMorePivot', link: _, onClick: f },
              Jt,
            )
          return d.length > 0
            ? b.a.createElement(
                Qt.a,
                { childrenStyle: Gt.childrenStyle, onScroll: p, onVisibleRangeChange: h, style: Gt.carousel },
                [].concat(Ot()(d), [g]),
              )
            : null
        },
        Gt = V.a.create(function (e) {
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
          return b.a.createElement(Kt.a, { errorConfig: Nt }, b.a.createElement(qt, null))
        },
        Yt = n('aITJ'),
        Zt = n('0yYu'),
        $t = n('mw9i'),
        en = n('k/OQ'),
        tn = A.a.i5f7b6b8,
        nn = A.a.d126cb7c,
        an = A.a.ha8209bb,
        ln = { page: 'home' },
        rn = { page: 'home_latest' },
        sn = { section: 'topics_navigator', component: 'suggest_topics_module' },
        on = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a(e, n) {
            var l
            r()(this, a),
              (l = t.call(this, e, n)),
              _()(u()(l), '_lastTimelineSwitchTimestamp', 0),
              _()(u()(l), '_unmounted', !1),
              _()(u()(l), '_getTimelineMetadata', function () {
                var e = l._isLatestActive(),
                  t = e ? rn : ln
                return (
                  l.context.featureSwitches.isTrue('responsive_web_home_namespace_update_enabled') &&
                    (t = i()(i()({}, ln), {}, { section: e ? 'latest' : 'home' })),
                  { scribeNamespace: t, title: e ? nn : an }
                )
              }),
              _()(u()(l), '_getLink', function (e, t) {
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
              _()(u()(l), '_getLinks', function () {
                var e = l.props.useLatest,
                  t = l._getLink(oe.a.HOME, an),
                  n = e ? l._getLink(oe.a.HOME_LATEST, nn) : void 0
                return [t].concat([n])
              }),
              _()(u()(l), '_isLatestActive', function () {
                return l._isLatestPinned()
                  ? l.props.selectedTimelineId === oe.a.HOME_LATEST
                  : l._latestTimelineSwitchEnabled && l.props.useLatest
              }),
              _()(u()(l), '_isLatestPinned', function () {
                return (
                  l._latestTimelineSwitchEnabled &&
                  l.props.useLatest &&
                  l.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                )
              }),
              _()(u()(l), '_renderTimeline', function () {
                var e = l._isLatestActive()
                return b.a.createElement(
                  S.a,
                  null,
                  l.context.featureSwitches.isTrue('home_timeline_topics_navigator_enabled')
                    ? b.a.createElement(Ft.b, { namespace: sn }, b.a.createElement(Xt, null))
                    : null,
                  b.a.createElement(xt, {
                    isLatestActive: e,
                    shouldFetchLoadedContentOnMount: e,
                    timelineRef: l._setTimelineRef,
                  }),
                )
              }),
              _()(u()(l), '_renderPrimaryContent', function () {
                var e = l.props,
                  t = e.configurationFetchStatus,
                  n = e.history,
                  a = e.location,
                  i = l.context.isRestrictedSession,
                  r = b.a.createElement(C.a, { history: n })
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  Object(It.a)() && !i
                    ? b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(se, { history: n, location: a }),
                        b.a.createElement(Zt.a, null),
                      )
                    : null,
                  b.a.createElement(
                    x.a,
                    { component: $t.a, fab: r },
                    Yt.b.isKaiOS()
                      ? b.a.createElement(Pt.a, { leftText: tn, onLeftClick: l._handleSoftLeftClick })
                      : null,
                    b.a.createElement(F.a, { fetchStatus: t, render: l._renderTimeline }),
                  ),
                )
              }),
              _()(u()(l), '_handleSoftLeftClick', function () {
                l.props.history.push('/account')
              }),
              _()(u()(l), '_handleTabRefresh', function () {
                l._timeline && l._timeline.refreshOrGoTop()
              }),
              _()(u()(l), '_handleWindowFocus', function () {
                l._timeline && l._timeline.fetchTop({ onlyIfStale: !0 })
              }),
              _()(u()(l), '_setTimelineRef', function (e) {
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
            o()(a, [
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
                    var t = Yt.b.isDesktopOS() ? '' : '_mobile',
                      a = 'home'.concat(t)
                    ;(Ge()
                      ? n
                          .e(341)
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
                    n = Object(It.a)(),
                    a = !n && t ? b.a.createElement(qe.a, { style: cn.iconTwitter }) : void 0,
                    i = this._latestTimelineSwitchEnabled ? b.a.createElement(Ne, null) : void 0,
                    l = this._getTimelineMetadata(),
                    r = l.scribeNamespace,
                    s = l.title,
                    o = n || !t ? s : null,
                    c = t ? this._getLinks() : [],
                    u = c.length > 1 ? b.a.createElement(en.a, { links: c }) : void 0
                  return b.a.createElement(
                    Ft.b,
                    { namespace: r },
                    b.a.createElement(
                      Xe.a,
                      { locationKey: r.page },
                      b.a.createElement(Ct.a, {
                        centeredLogo: a,
                        documentTitle: s,
                        history: e,
                        onTabRefresh: this._handleTabRefresh,
                        primaryContent: this._renderPrimaryContent,
                        rightControl: i,
                        secondaryBar: u,
                        sidebarContent: b.a.createElement(v.a, null),
                        title: o,
                      }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      _()(on, 'contextType', he.a)
      var cn = V.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = L(on)
    },
    yKhE: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        i,
        l,
        r,
        s,
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
                args: (i = [{ kind: 'Literal', name: 's', value: 22 }]),
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
                storageKey: 'viewer_v2(s:22)',
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
                storageKey: 'viewer_v2(s:22)',
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
      ;(o.hash = '00b62fb55ad091187417013cbaa9e6a0'), (t.default = o)
    },
  },
])
//# sourceMappingURL=WIPED
