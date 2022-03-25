;(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
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
        r = n('RhWx'),
        l = n.n(r),
        o = n('VrFO'),
        s = n.n(o),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        b = n('2VqO'),
        f = n.n(b),
        _ = n('KEM+'),
        v = n.n(_),
        g = (n('z84I'), n('ho0z'), n('2G9S'), n('ERkP')),
        y = n.n(g),
        T = n('es0u'),
        w = n('wM4e'),
        k = n('kHBp'),
        E = n('rxPX'),
        L = n('0KEI'),
        S = n('wqZ5'),
        C = function (e) {
          return k.a.selectMany(e, Object(S.f)(e))
        },
        F = Object(E.a)()
          .propsFromState(function () {
            return { configurationFetchStatus: w.a, pinnedLists: C, selectedTimelineId: w.d, useLatest: w.e }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandlerFetchPins: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'HOME_TIMELINE_FETCH_PINS',
              ),
              fetchPinsIfNeeded: S.c,
              updateBehavior: w.f,
            }
          })
          .withAnalytics({ page: 'home' }),
        P = n('s14A'),
        I = n('dwig'),
        O = n('v//M'),
        x = n('0+qk'),
        M = (n('7x/C'), n('JtPf'), n('lTEL'), n('87if'), n('kYxP'), n('2dXj')),
        A = n('G6rE'),
        B = Object(E.a)()
          .propsFromState(function () {
            return { loggedInUser: A.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          }),
        j = n('3XMw'),
        K = n.n(j),
        H = n('N5qz'),
        R = n('MWbm'),
        z = n('cHvH'),
        D = n('5mJL'),
        U = n('DNho'),
        V = n('XP29'),
        N = n('t62R'),
        G = n('/yvb'),
        J = n('rHpw'),
        W = n('cjZk'),
        Q = n('3rWK'),
        Y = n('ll3R'),
        q = n('pNJr'),
        X = n('J0mu'),
        Z = n('KrGU'),
        $ = K.a.g34f2c63({ verb: '' }),
        ee = K.a.e349147b,
        te = y.a.createElement(W.a, null),
        ne = y.a.createElement(Q.a, null),
        ae = y.a.createElement(Y.a, null),
        ie = y.a.createElement(q.a, null),
        re = y.a.createElement(X.a, null),
        le = y.a.createElement(Z.a, null),
        oe = J.a.create(function (e) {
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
        se = B(function (e) {
          var t = e.userAvatarURI
          return y.a.createElement(z.a, null, function (e) {
            var n = e.windowWidth,
              a = !H.a.isOneColumnSquishedLayout(n)
            return y.a.createElement(
              D.a,
              {
                avatarCell: y.a.createElement(U.a.Consumer, null, function (e) {
                  var n = e.avatarSize
                  return y.a.createElement(V.a, { size: n, style: oe.avatar, uri: t })
                }),
                avatarCellStyle: oe.avatarColumn,
                cellStyle: oe.body,
                style: oe.root,
              },
              y.a.createElement(
                N.b,
                { color: 'gray700', numberOfLines: 1, size: 'headline1', style: oe.fakeInput },
                ee,
              ),
              y.a.createElement(
                R.a,
                { style: oe.toolbar },
                y.a.createElement(
                  R.a,
                  { style: [oe.toolbarSection, oe.iconContainer] },
                  y.a.createElement(G.a, {
                    disabled: !0,
                    icon: te,
                    size: 'medium',
                    style: [oe.toolBarButton, oe.firstToolBarButton],
                    type: 'brandText',
                  }),
                  y.a.createElement(G.a, {
                    disabled: !0,
                    icon: ne,
                    size: 'medium',
                    style: oe.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? y.a.createElement(G.a, {
                        disabled: !0,
                        icon: ae,
                        size: 'medium',
                        style: oe.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  y.a.createElement(G.a, {
                    disabled: !0,
                    icon: ie,
                    size: 'medium',
                    style: oe.toolBarButton,
                    type: 'brandText',
                  }),
                  a
                    ? y.a.createElement(G.a, {
                        disabled: !0,
                        icon: re,
                        size: 'medium',
                        style: oe.toolBarButton,
                        type: 'brandText',
                      })
                    : null,
                  y.a.createElement(G.a, {
                    disabled: !0,
                    icon: le,
                    size: 'medium',
                    style: oe.toolBarButton,
                    type: 'brandText',
                  }),
                ),
                y.a.createElement(
                  R.a,
                  { style: oe.toolbarSection },
                  y.a.createElement(G.a, { disabled: !0, style: oe.tweetButton, type: 'brandFilled' }, $),
                ),
              ),
            )
          })
        }),
        ce = n('zb92'),
        ue = Object(ce.a)({
          loader: function () {
            return (M.a.preload() || Promise.resolve()).then(function () {
              return Promise.all([n.e(0), n.e(3), n.e(4), n.e(5), n.e(85)]).then(n.bind(null, 'RrO2'))
            })
          },
          renderPlaceholder: function () {
            return y.a.createElement(se, null)
          },
        }),
        de = n('1YZw'),
        me = Object(E.a)()
          .propsFromState(function () {
            return { selectedTimelineId: w.d, useLatest: w.e }
          })
          .propsFromActions(function () {
            return { addToast: de.b, updateBehavior: w.f }
          })
          .withAnalytics(),
        pe = n('EY8L'),
        he = (n('1t7P'), n('jQ/y'), n('1Iuc'), n('yZDr')),
        be = function (e) {
          var t = e.accessibilityLabel,
            n = e.hoverLabel,
            a = e.onPress,
            i = e.renderMenu,
            r = y.a.createElement(he.a, null)
          return y.a.createElement(G.a, {
            accessibilityLabel: t,
            hoverLabel: { label: n },
            icon: r,
            onPress: a,
            pullRight: !0,
            renderMenu: i,
            type: 'primaryText',
          })
        },
        fe = n('mjJ+'),
        _e = n('v6aA'),
        ve = n('Lsrn'),
        ge = n('k/Ka'),
        ye = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ge.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ve.a.root, e.style],
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
          return Object(ge.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ve.a.root, e.style],
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
        Ee = n('3JQt'),
        Le = n('M2x3'),
        Se = K.a.j681ac0d,
        Ce = K.a.g8220472,
        Fe = K.a.ccdd3766,
        Pe = K.a.g2657de3,
        Ie = K.a.d126cb7c,
        Oe = K.a.c41ecf3c,
        xe = K.a.d18aa6d4,
        Me = K.a.c90dcfa2,
        Ae = K.a.bc52b0cd,
        Be = K.a.j6382fe9,
        je = K.a.f89f6785,
        Ke = K.a.e4acfd11,
        He = K.a.f0c7628a,
        Re = K.a.j7d0cac5,
        ze = K.a.eeab4419,
        De = K.a.cae804f9,
        Ue = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(m()(e), '_renderActionMenu', function (t) {
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
              v()(m()(e), '_getActionMenuItems', function () {
                var t = e._getContent(),
                  n = t.subText
                return [
                  { text: t.text, onClick: e._handleTimelineSwitch, Icon: Ee.a, subText: n },
                  { link: '/settings/content_preferences', text: Se, onClick: e._handleContentPreferences, Icon: Le.a },
                ]
              }),
              v()(m()(e), '_getContent', function () {
                var t = e.props.useLatest
                return e.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                  ? { description: t ? Me : Oe, subText: t ? De : Re, text: t ? ze : He }
                  : { description: t ? xe : Oe, subText: t ? Ke : je, text: t ? Ae : Be }
              }),
              v()(m()(e), '_handleTimelineSwitch', function (t) {
                var n = e.props.onToggle
                t(), n()
              }),
              v()(m()(e), '_handleContentPreferences', function (t) {
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
                    a = n ? Ce : Fe,
                    i = n ? Ie : Pe
                  return y.a.createElement(be, {
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
      v()(Ue, 'contextType', _e.a)
      var Ve = J.a.create(function (e) {
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
        Ge = K.a.e4c6d14c,
        Je = K.a.bffa2da7,
        We = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(m()(e), '_handleToggle', function () {
                var t,
                  n = e.context,
                  a = n.featureSwitches,
                  r = n.viewport,
                  l = e.props,
                  o = l.addToast,
                  s = l.analytics,
                  c = l.selectedTimelineId,
                  u = l.updateBehavior,
                  d = l.useLatest,
                  m = a.isTrue('responsive_web_home_pinned_timelines_latest_enabled'),
                  p = d ? Ge : Je
                m && d && c === pe.a.HOME_LATEST && (t = pe.a.HOME),
                  m || (t = c === pe.a.HOME ? pe.a.HOME_LATEST : pe.a.HOME),
                  r.scrollToTop(),
                  s.scribe({ component: 'customize', element: d ? 'see_top' : 'see_latest', action: 'click' }),
                  u(i()(i()({}, t && { selectedTimelineId: t }), {}, { useLatest: !d })).then(function () {
                    m || o({ text: p })
                  })
              }),
              v()(m()(e), '_handleSwitchPress', function () {
                e.props.analytics.scribe({ section: 'navigation_bar', element: 'customize_button', action: 'click' })
              }),
              v()(m()(e), '_handleContentPreferencesSelect', function () {
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
      v()(We, 'contextType', _e.a)
      var Qe,
        Ye,
        qe = me(We),
        Xe = n('lUZE'),
        Ze = function () {
          return window.performance && 'function' == typeof window.performance.now
        },
        $e = n('yoO3'),
        et = n('ZB2A'),
        tt = (n('5BYb'), n('aeN7')),
        nt = n('hqKg'),
        at = n('MDbM'),
        it = n('9TPy'),
        rt = n('wrlS'),
        lt = n('WA1W'),
        ot = function () {
          return Object(nt.createSelector)(
            function (e, t) {
              return t.isLatestActive
            },
            function (e, t) {
              return t.isList
            },
            w.d,
            rt.d,
            function (e, t, n, a) {
              return t
                ? Object(it.a)({ listId: n })
                : e
                ? Object(lt.e)(a.isTrue('responsive_web_graphql_home_latest_enabled'))
                : Object(lt.f)(a.isTrue('responsive_web_graphql_home_enabled'))
            },
          )
        },
        st = function (e, t) {
          var n
          return null !== (n = ot()(e, t).selectInitialFetchStatus(e)) && void 0 !== n ? n : at.a.LOADING
        },
        ct = Object(E.a)()
          .propsFromState(function () {
            return { initialFetchStatus: st, isColdStart: w.c, module: ot() }
          })
          .propsFromActions(function () {
            return { updateBehavior: w.f }
          })
          .withAnalytics(),
        ut = n('8UdT'),
        dt = n('iu0J'),
        mt = n('AP4B'),
        pt = function (e) {
          var t = e.withUserPresence,
            a = void 0 !== t && t,
            r = e.errorContext,
            l = void 0 === r ? 'HOME' : r,
            o = e.featureSwitches,
            s = { allowDownvote: !0, tweetDismissable: !0, shouldSelfThreadIncludeAvatar: !0, withUserPresence: a },
            c = o.getValue('responsive_web_universal_config')
          return c && 'control' !== c
            ? n('l9Y6').createConfiguration(i()(i()({}, s), {}, { featureSwitches: o, errorContext: l }))
            : i()(
                i()(i()({}, n('QIgh').createConfiguration(s)), mt.a),
                {},
                v()({}, ut.b.EventSummary, Object(dt.a)({})),
              )
        },
        ht = n('97Jx'),
        bt = n.n(ht),
        ft = n('FIs5'),
        _t = [
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
        vt = { headerMessage: K.a.d4d5785f, bodyMessage: K.a.f3f4c67b, buttonText: K.a.a399ed2f },
        gt = K.a.d2c66f1f,
        yt = K.a.c3fbf1da,
        Tt = K.a.bf17ded9,
        wt = function (e) {
          var t,
            n = e.onButtonPress,
            a = e.onImpression,
            i = y.a.useContext(_e.a).featureSwitches.getStringValue('responsive_web_htl_empty_state_redesign_variant'),
            r = 'a_no_graphic_new_copy' === (t = i) || 'b_new_graphic_new_copy' === t ? vt : void 0,
            l = (function (e) {
              return 'b_new_graphic_new_copy' === e || 'c_new_graphic_old_copy' === e ? _t : void 0
            })(i)
          return y.a.createElement(
            ft.a,
            bt()(
              { buttonLink: '/i/connect_people', buttonText: r ? r.buttonText : Tt, header: r ? r.headerMessage : gt },
              l && { imageVariants: l },
              { message: r ? r.bodyMessage : yt, onButtonPress: n, onImpression: a },
            ),
          )
        },
        kt = n('EUHl'),
        Et = n('7BdX'),
        Lt = n('fTQJ'),
        St = n('FGLp'),
        Ct = { count: void 0 },
        Ft = K.a.f089620b,
        Pt = ct(function (e) {
          var t = e.analytics,
            n = e.isColdStart,
            a = e.isLatestActive,
            i = void 0 !== a && a,
            r = e.isLatestPinned,
            l = void 0 !== r && r,
            o = e.initialFetchStatus,
            s = e.module,
            c = e.recordTTFT,
            u = void 0 === c ? tt.e : c,
            d = e.shouldFetchLoadedContentOnMount,
            m = void 0 === d || d,
            p = e.timelineRef,
            h = e.updateBehavior,
            b = e.withUserPresence,
            f = void 0 !== b && b,
            _ = y.a.useContext(_e.a).featureSwitches,
            v = y.a.useRef(!0),
            g = y.a.useCallback(
              function () {
                return _.getStringValue('responsive_web_universal_config')
              },
              [_],
            ),
            T = y.a.useCallback(
              function () {
                t.scribe({ component: 'empty_message', action: 'impression' })
              },
              [t],
            ),
            w = y.a.useCallback(
              function () {
                t.scribe({ component: 'empty_message', element: 'primary_cta', action: 'click' })
              },
              [t],
            ),
            k = y.a.useCallback(
              function (e) {
                var t = e.entries
                if ((e.fetchStatus === at.a.FAILED && (v.current = !1), v.current && t.length)) {
                  var n = t.some(function (e) {
                    return e.type === ut.b.Tweet
                  })
                  ;(v.current = !1), n && u()
                }
              },
              [u, v],
            ),
            E = y.a.useCallback(
              function () {
                return y.a.createElement(wt, { onButtonPress: w, onImpression: T })
              },
              [w, T],
            )
          return (
            Object(St.a)(function () {
              ;(function (e) {
                var t = e.initialFetchStatus,
                  n = e.isColdStart,
                  a = e.isLatestActive,
                  i = e.isLatestPinned
                return t !== at.a.LOADED && n && i && a
              })({ initialFetchStatus: o, isColdStart: n, isLatestActive: i, isLatestPinned: l }) &&
                h({ selectedTimelineId: pe.a.HOME })
            }),
            y.a.createElement(Lt.a, {
              entryConfiguration: pt({ featureSwitches: _, withUserPresence: f }),
              fetchTopOptions: Ct,
              module: s,
              newTweetsPillMode: kt.a.URT,
              onEntriesRendered: k,
              prerollDisplayLocation: Et.c.TIMELINE_HOME,
              processStrategyOverride: g(),
              renderEmptyState: E,
              shouldFetchLoadedContentOnMount: m,
              timelineRef: p,
              title: Ft,
              withUserPresence: f,
            })
          )
        }),
        It = n('7JQg'),
        Ot = n('VS6U'),
        xt = n('Es6L'),
        Mt = n('LsPn'),
        At = n('gZV8'),
        Bt = (n('enFi'), n('Fr3L')),
        jt = n('lnL+'),
        Kt = n('Rp9C'),
        Ht = n('jAXQ'),
        Rt = n.n(Ht),
        zt = function (e) {
          var t = Rt()(void 0 !== Qe ? Qe : (Qe = n('/n9r')), e.topic),
            a = t.name,
            i = t.topic_id
          Object(St.a)(function () {
            e.analytics.scribe({ element: 'topic', action: 'impression', data: { items: [Kt.a.forTopic(i)] } })
          })
          var r = y.a.useCallback(
            function () {
              e.analytics.scribe({ element: 'topic', action: 'click', data: { items: [Kt.a.forTopic(i)] } })
            },
            [e.analytics, i],
          )
          return y.a.createElement(jt.a, { link: '/i/topics/'.concat(i), onClick: r, text: a })
        },
        Dt = n('Irs7'),
        Ut = n('yUQf'),
        Vt = n('DQzJ'),
        Nt = n('6iuV'),
        Gt = K.a.j0310b9b,
        Jt = K.a.ffd9cfe6,
        Wt = K.a.i0560231,
        Qt = void 0 !== Ye ? Ye : (Ye = n('yKhE')),
        Yt = { context: 'TOPIC_PIVOTS_CAROUSEL' },
        qt = function () {
          var e,
            t,
            n,
            a,
            i,
            r,
            o,
            s = y.a.useRef(0),
            c = Object(Dt.b)(),
            u = Object(Ut.a)(A.e.selectLoggedInUser),
            d = Object(Vt.a)(Qt, {}).data,
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
                null === (r = i.result) ||
                void 0 === r ||
                null === (o = r.home_topics_navigator_slices) ||
                void 0 === o
                  ? void 0
                  : o.items)) ||
              []
            ).map(function (e, t) {
              return null != e && e.topic ? y.a.createElement(zt, { analytics: c, key: t, topic: e.topic }) : null
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
            b = y.a.useCallback(
              function (e) {
                var t = e.index,
                  n = e.intersectionRatio
                t === s.current - 1 && n >= At.c && c.scribeAction('reached_end')
              },
              [c],
            )
          Object(St.a)(function () {
            m.length > 0 && p()
          }),
            y.a.useEffect(
              function () {
                s.current = m.length + 1
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
            v = y.a.createElement(
              G.a,
              {
                accessibilityLabel: Wt,
                borderColor: 'primary',
                color: 'primary',
                key: 'seeMorePivot',
                link: _,
                onClick: f,
              },
              Jt,
            )
          return m.length > 0
            ? y.a.createElement(
                Nt.a,
                {
                  accessibilityLabel: Gt,
                  childrenStyle: Xt.childrenStyle,
                  onScroll: h,
                  onVisibleRangeChange: b,
                  style: Xt.carousel,
                },
                [].concat(l()(m), [v]),
              )
            : null
        },
        Xt = J.a.create(function (e) {
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
        Zt = function () {
          return y.a.createElement(Bt.a, { errorConfig: Yt }, y.a.createElement(qt, null))
        },
        $t = n('aITJ'),
        en = n('0yYu'),
        tn = n('mw9i'),
        nn = n('k/OQ'),
        an = K.a.i5f7b6b8,
        rn = K.a.d126cb7c,
        ln = K.a.ha8209bb,
        on = et.a.HOME,
        sn = { page: 'home' },
        cn = { page: 'home_latest' },
        un = { section: 'topics_navigator', component: 'suggest_topics_module' },
        dn = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a(e, n) {
            var r
            s()(this, a),
              (r = t.call(this, e, n)),
              v()(m()(r), '_lastTimelineSwitchTimestamp', 0),
              v()(m()(r), '_unmounted', !1),
              v()(m()(r), '_getLink', function (e, t) {
                var n = r.props,
                  a = n.analytics,
                  i = n.selectedTimelineId,
                  l = n.updateBehavior
                return {
                  isActive: function () {
                    return i === e
                  },
                  label: t,
                  key: e,
                  onClick: function () {
                    if (i === e) r._timeline && r._timeline.refreshOrGoTop()
                    else {
                      var t = Date.now() - r._lastTimelineSwitchTimestamp
                      l({ selectedTimelineId: e }),
                        a.scribe({ section: i, element: e, action: 'click', data: { duration_ms: t } })
                    }
                  },
                  retainScrollPosition: !1,
                  to: { pathname: '/home' },
                }
              }),
              v()(m()(r), '_getLinks', function () {
                var e = r.props,
                  t = e.pinnedLists,
                  n = e.useLatest,
                  a = r._getLink(pe.a.HOME, ln),
                  i = n ? r._getLink(pe.a.HOME_LATEST, rn) : void 0,
                  o = r._pinnedListsEnabled
                    ? t.map(function (e) {
                        var t = e.id_str,
                          n = e.name
                        return r._getLink(Object(pe.c)(t), n)
                      })
                    : [],
                  s = [a, i],
                  c = r._latestTimelineSwitchEnabled && n ? [i] : [a]
                return [].concat(l()(r._isLatestPinned() ? s : c), l()(o))
              }),
              v()(m()(r), '_getTimelineMetadata', function () {
                var e = r._isLatestActive(),
                  t = e ? cn : sn
                return (
                  r.context.featureSwitches.isTrue('responsive_web_home_namespace_update_enabled') &&
                    (t = i()(i()({}, sn), {}, { section: e ? 'latest' : 'home' })),
                  { scribeNamespace: t, title: r._pinnedListsEnabled ? ln : e ? rn : ln }
                )
              }),
              v()(m()(r), '_handleSoftLeftClick', function () {
                return r.props.history.push('/account')
              }),
              v()(m()(r), '_handleTabRefresh', function () {
                var e
                return null === (e = r._timeline) || void 0 === e ? void 0 : e.refreshOrGoTop()
              }),
              v()(m()(r), '_handleWindowFocus', function () {
                var e
                return null === (e = r._timeline) || void 0 === e ? void 0 : e.fetchTop({ onlyIfStale: !0 })
              }),
              v()(m()(r), '_isLatestActive', function () {
                return r._isLatestPinned()
                  ? r.props.selectedTimelineId === pe.a.HOME_LATEST
                  : r._latestTimelineSwitchEnabled && r.props.useLatest
              }),
              v()(m()(r), '_isLatestPinned', function () {
                return (
                  r._latestTimelineSwitchEnabled &&
                  r.props.useLatest &&
                  r.context.featureSwitches.isTrue('responsive_web_home_pinned_timelines_latest_enabled')
                )
              }),
              v()(m()(r), '_renderTimeline', function () {
                var e = r.props.selectedTimelineId,
                  t = r._isLatestActive(),
                  n = r._isLatestPinned(),
                  a = r._pinnedListsEnabled && e !== pe.a.HOME && e !== pe.a.HOME_LATEST,
                  i = r.context.featureSwitches.isTrue('responsive_web_audio_space_ring_home_timeline')
                return y.a.createElement(
                  P.a,
                  null,
                  r.context.featureSwitches.isTrue('home_timeline_topics_navigator_enabled')
                    ? y.a.createElement(It.c, { namespace: un }, y.a.createElement(Zt, null))
                    : null,
                  y.a.createElement(Pt, {
                    isLatestActive: t,
                    isLatestPinned: n,
                    isList: a,
                    shouldFetchLoadedContentOnMount: t,
                    timelineRef: r._setTimelineRef,
                    withUserPresence: i,
                  }),
                )
              }),
              v()(m()(r), '_renderPrimaryContent', function () {
                var e = r.props,
                  t = e.configurationFetchStatus,
                  n = e.history,
                  a = e.location,
                  i = r.context.isRestrictedSession,
                  l = y.a.createElement(x.a, { history: n })
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  Object(xt.a)() && !i
                    ? y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(ue, { history: n, location: a }),
                        y.a.createElement(en.a, null),
                      )
                    : null,
                  y.a.createElement(
                    I.a,
                    { component: tn.a, fab: l },
                    $t.b.isKaiOS()
                      ? y.a.createElement(Mt.a, { leftText: an, onLeftClick: r._handleSoftLeftClick })
                      : null,
                    y.a.createElement(O.a, { fetchStatus: t, render: r._renderTimeline }),
                  ),
                )
              }),
              v()(m()(r), '_setTimelineRef', function (e) {
                r._timeline = e
              })
            var o = r.context.featureSwitches
            return (
              (r._latestTimelineSwitchEnabled = o.isTrue('home_timeline_latest_timeline_switch_enabled')),
              (r._pinnedListsEnabled = o.isTrue('responsive_web_home_pinned_timelines_lists_enabled')),
              r
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
                    var r = $t.b.isDesktopOS() ? '' : '_mobile',
                      l = 'home'.concat(r)
                    ;(Ze()
                      ? n
                          .e(351)
                          .then(n.bind(null, 'Iid0'))
                          .then(function (e) {
                            return e.default
                          })
                      : Promise.resolve(void 0)
                    ).then(function (t) {
                      !e._unmounted && t && (e._fpsTracking = t({ reportNamespace: l }))
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
                    r = a.title,
                    l = !Object(xt.a)(),
                    o = this._getLinks(),
                    s = o.length > 1,
                    c = l && s ? y.a.createElement(Xe.a, { style: mn.iconTwitter }) : void 0,
                    u =
                      this._latestTimelineSwitchEnabled && (n === pe.a.HOME || n === pe.a.HOME_LATEST)
                        ? y.a.createElement(qe, null)
                        : void 0,
                    d = s ? y.a.createElement(nn.a, { links: o }) : void 0,
                    m = !l || !s ? r : null
                  return y.a.createElement(
                    It.c,
                    { namespace: i },
                    y.a.createElement(
                      $e.a,
                      { behavioralEventViewType: on, locationKey: i.page },
                      y.a.createElement(Ot.a, {
                        centeredLogo: c,
                        documentTitle: r,
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
      v()(dn, 'contextType', _e.a)
      var mn = J.a.create(function (e) {
        return { iconTwitter: { flexGrow: 1, height: '1.75rem', color: e.colors.primary } }
      })
      t.default = F(dn)
    },
    l9Y6: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'createConfiguration', function () {
          return q
        })
      var a = n('KEM+'),
        i = n.n(a),
        r = n('ezF+'),
        l = n('L+Yr'),
        o = n('GjKI'),
        s = n('rrdj'),
        c = n('KOwe'),
        u = n('0hnP'),
        d = n('PnFR'),
        m = n('yXvm'),
        p = n('iu0J'),
        h = n('A1s0'),
        b = n('0O8K'),
        f = n('96/T'),
        _ = n('AP4B'),
        v = n('ckGq'),
        g = n('rpbw'),
        y = n('S/Qv'),
        T = n('zgaL'),
        w = n('Wjib'),
        k = n('TiJl'),
        E = n('PH3B'),
        L = n('p3rj'),
        S = n('iPUv'),
        C = n('/zpt'),
        F = n('dVvn'),
        P = n('+o05'),
        I = n('SBkc'),
        O = n('14Yn'),
        x = n('vGH+'),
        M = n('pgpd'),
        A = n('5Y9N'),
        B = n('91Nr'),
        j = n('9+AQ'),
        K = n('67iF'),
        H = n('Hl0c'),
        R =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return Promise.all([n.e(0), n.e(10), n.e(360)]).then(n.bind(null, 'WFPe'))
            },
            loaderKey: 'topicLandingHeaderLoader',
            strategy: n('XBtf').a.Critical,
          }),
        z = r.e(R),
        D = n('XtkE'),
        U = n('Jz8S'),
        V = n('Yy//'),
        N = n('ogJ+'),
        G = n('Ka9G'),
        J = n('8C2w'),
        W = n('VKSc'),
        Q = n('Zr9n'),
        Y = n('8UdT'),
        q = function (e) {
          var t,
            n = e.allowDownvote,
            a = void 0 !== n && n,
            R = e.displayBlocked,
            q = void 0 !== R && R,
            X = e.featureSwitches,
            Z = e.shouldSelfThreadIncludeAvatar,
            $ = void 0 !== Z && Z,
            ee = e.shouldStoreTypeaheadItem,
            te = e.showWithheldBannerOnMyTweets,
            ne = void 0 === te || te,
            ae = e.tweetDismissable,
            ie = void 0 !== ae && ae,
            re = e.withMessageGaps,
            le = void 0 === re || re,
            oe = e.withMuteConversation,
            se = void 0 !== oe && oe,
            ce = e.withRemoveFromBookmarks,
            ue = void 0 !== ce && ce,
            de = (e.withSelfThreadCTA, e.withTweetActionsDisabled),
            me = void 0 !== de && de,
            pe = e.withUserPresence,
            he = void 0 !== pe && pe,
            be = e.bookmarkFolderId,
            fe = void 0 === be ? void 0 : be,
            _e = e.errorContext,
            ve = void 0 === _e ? '' : _e,
            ge = e.isInSidebar,
            ye = void 0 !== ge && ge,
            Te = e.withAuthorControls,
            we = void 0 !== Te && Te,
            ke = e.withThirdPartyCards,
            Ee = void 0 === ke || ke
          return (
            (t = {}),
            i()(t, Y.b.Article, l.a),
            i()(t, Y.b.Community, c.a),
            i()(t, Y.b.EventSummary, Object(p.a)({})),
            i()(t, Y.b.FollowSearch, r.e(r.a())),
            i()(t, Y.b.FollowSearchAction, r.e(r.a())),
            i()(t, Y.b.Label, v.a),
            i()(t, Y.b.Message, Object(y.a)({ withGaps: le })),
            i()(t, Y.b.Moment, Object(w.a)({ withAuthorControls: we, errorContext: ve })),
            i()(t, Y.b.MomentAnnotation, T.a),
            i()(t, Y.b.News, E.a),
            i()(t, Y.b.Notification, L.a),
            i()(t, Y.b.PagedCarouselItem, S.a),
            i()(t, Y.b.Place, r.e(r.a())),
            i()(t, Y.b.Prompt, C.a),
            i()(t, Y.b.RelatedSearch, F.a),
            i()(t, Y.b.ScoreEventSummary, P.a),
            i()(t, Y.b.Spelling, O.a),
            i()(t, Y.b.ThreadHeader, x.a),
            i()(t, Y.b.Tile, M.a),
            i()(t, Y.b.TimelineCursor, Object(d.a)({})),
            i()(t, Y.b.TimelineModule, Object(A.b)({})),
            i()(t, Y.b.Tombstone, B.a),
            i()(t, Y.b.Topic, Object(K.a)({ shouldStoreTypeaheadItem: ee })),
            i()(t, Y.b.TopicFollowPrompt, H.a),
            i()(t, Y.b.TopicLandingHeader, z),
            i()(t, Y.b.Trend, Object(D.a)({ withThirdPartyCards: Ee, errorContext: ve })),
            i()(
              t,
              Y.b.Tweet,
              Object(V.a)({
                allowDownvote: a,
                displayBlocked: q,
                dismissable: ie,
                shouldSelfThreadIncludeAvatar: $,
                showWithheldBannerOnMyTweets: ne,
                shouldStoreTypeaheadItem: ee,
                withActionsDisabled: me,
                withMuteConversation: se,
                withRemoveFromBookmarks: ue,
                withUserPresence: he,
                bookmarkFolderId: fe,
              }),
            ),
            i()(t, Y.b.TweetComposer, U.a),
            i()(t, Y.b.TwitterList, Object(g.a)({})),
            i()(t, Y.b.User, Object(G.a)({ shouldStoreTypeaheadItem: ee })),
            i()(t, Y.b.VerticalGridItem, J.a),
            i()(t, Y.a.CollectionHeader, s.a),
            i()(t, Y.a.ConversationModuleGap, u.a),
            i()(t, Y.a.Divider, m.a),
            i()(t, Y.a.ModuleCarouselTimeline, o.a),
            i()(t, Y.a.ModuleFooter, Object(h.a)({ isInSidebar: ye })),
            i()(t, Y.a.ModuleHeader, b.a),
            i()(t, Y.a.ModuleImpressionPlaceholder, f.a),
            i()(t, Y.a.ModuleShowMore, Object(I.a)({ isInSidebar: ye })),
            i()(t, Y.a.ModuleVerticalGridList, W.a),
            i()(t, Y.a.ModuleVerticalGridTimelineRow, Q.a),
            i()(t, Y.a.NewEntries, k.a),
            i()(t, Y.a.PushPrompt, _.b),
            i()(t, Y.a.Tombstone, j.a),
            i()(t, Y.a.Unsupported, Object(N.a)(X.isTrue('responsive_web_unsupported_entry_tombstone'))),
            t
          )
        }
    },
    yKhE: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        i,
        r,
        l,
        o,
        s,
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
                          (r = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                          r,
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
                                  r,
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
                                          r,
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
                                                  (s = {
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
                              s,
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
