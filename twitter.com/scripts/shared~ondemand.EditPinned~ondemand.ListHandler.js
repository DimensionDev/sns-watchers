;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    '0mK8': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return m
      }),
        r.d(t, 'b', function () {
          return p
        }),
        r.d(t, 'c', function () {
          return h
        })
      r('ho0z'), r('uFXj')
      var n = r('ERkP'),
        a = r.n(n),
        i = r('MWbm'),
        o = r('GcQN'),
        c = r('PU7B'),
        l = r('/WPq'),
        s = r('78ol'),
        u = r('jV+4'),
        d = r('rHpw'),
        m = function (e) {
          var t = e.author,
            r = e.color,
            n = void 0 === r ? 'text' : r,
            i = e.size,
            o = void 0 === i ? 'subtext2' : i,
            c = e.style,
            l = e.withHoverCard,
            s = void 0 === l || l,
            d = e.withLink,
            m = void 0 !== d && d,
            p = e.withScreenName,
            h = void 0 !== p && p
          return a.a.createElement(u.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: n,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [f.authorUserName, c],
            withHoverCard: s,
            withLink: m,
            withScreenName: h,
          })
        },
        p = function (e) {
          var t = e.style
          return a.a.createElement(
            i.a,
            { style: [f.lightningBadge, t] },
            a.a.createElement(o.a, { style: f.lightningIcon }),
          )
        },
        h = function (e) {
          var t = e.icon
          return a.a.createElement(
            i.a,
            { style: f.placeholderIconContainer },
            'news' === t
              ? a.a.createElement(c.a, { style: f.placeholderIcon })
              : 'lists' === t
              ? a.a.createElement(l.a, { style: f.placeholderIcon })
              : a.a.createElement(s.a, { style: f.placeholderIcon }),
          )
        },
        f = d.a.create(function (e) {
          return {
            authorUserName: { alignItems: 'center' },
            lightningBadge: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderRadius: e.borderRadii.small,
              position: 'absolute',
            },
            lightningIcon: {
              boxSizing: 'border-box',
              color: e.colors.white,
              height: e.spaces.space20,
              paddingVertical: '0.25rem',
              paddingHorizontal: '0.2rem',
            },
            middot: { paddingHorizontal: e.spaces.space4 },
            placeholderIcon: { color: e.colors.gray700, height: '2em' },
            placeholderIconContainer: {
              alignItems: 'center',
              borderWidth: e.borderWidths.small,
              borderStyle: 'solid',
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.xLarge,
              backgroundColor: e.colors.gray0,
              height: '100%',
              justifyContent: 'center',
            },
          }
        })
    },
    '1AUC': function (e, t, r) {
      'use strict'
      var n = r('VrFO'),
        a = r.n(n),
        i = r('Y9Ll'),
        o = r.n(i),
        c = r('1Pcy'),
        l = r.n(c),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('2VqO'),
        m = r.n(d),
        p = r('KEM+'),
        h = r.n(p),
        f = (r('2G9S'), r('1t7P'), r('jQ/y'), r('ho0z'), r('ERkP')),
        b = r.n(f),
        g = r('iPch'),
        v = r('1YZw'),
        y = r('wqZ5'),
        C = r('kHBp'),
        w = r('P1r1'),
        E = r('G6rE'),
        S = r('rxPX'),
        k = r('0KEI'),
        P = function (e, t) {
          var r = t.listId
          return r ? C.a.select(e, r) : void 0
        },
        I = function (e, t) {
          var r = P(e, t),
            n = null == r ? void 0 : r.user
          return n ? E.e.select(e, n) : void 0
        },
        _ = function (e, t) {
          var r = t.listId
          return g.h(e, r)
        },
        x = Object(S.a)()
          .propsFromState(function () {
            return { list: P, user: I, dataSaverMode: w.j, couldPinList: y.b, media: _ }
          })
          .adjustStateProps(function (e) {
            var t = e.couldPinList,
              r = e.dataSaverMode,
              n = e.list,
              a = e.media
            return { list: n, author: e.user, media: a, dataSaverMode: r, couldPinList: t }
          })
          .propsFromActions(function () {
            return {
              pinOrUnpinList: C.a.togglePinList,
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)('LIST_CELL'),
              addToast: v.b,
              subscribe: C.a.subscribe,
              unsubscribe: C.a.unsubscribe,
            }
          })
          .withAnalytics(),
        L = r('f5/l'),
        R = r('3XMw'),
        O = r.n(R),
        T = r('mN6z'),
        H = (r('uFXj'), r('0mK8')),
        j = r('xZmF'),
        z = r('2My+'),
        B = r('Tp1h'),
        M = r('Jkc4'),
        N = 'listCell',
        A = r('MWbm'),
        U = r('t62R'),
        F = r('/yvb'),
        G = r('CGyZ'),
        W = r('htQn'),
        D = r('rHpw'),
        K = r('v6aA'),
        V = r('IMYl'),
        Y = r('a5gf'),
        q = (O.a.d58baa7e, O.a.j681933d),
        X = (function (e) {
          u()(r, e)
          var t = m()(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_renderHoverCard', function (t) {
                var r = e.props.listId,
                  n = '/i/lists/'.concat(r)
                return t ? b.a.createElement(z.a, { basePath: n, listId: r }, t) : null
              }),
              h()(l()(e), '_renderName', function () {
                var t = e.props.name
                return b.a.createElement(
                  A.a,
                  { style: J.name },
                  b.a.createElement(U.b, { weight: 'bold' }, t),
                  e._renderPrivateIcon(),
                )
              }),
              h()(l()(e), '_renderDescription', function () {
                var t = e.props,
                  r = t.description
                return t.withDescription && r
                  ? b.a.createElement(
                      U.b,
                      { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: J.description },
                      r,
                    )
                  : null
              }),
              h()(l()(e), '_renderThumbnail', function () {
                var t = e.props,
                  r = t.dataSaverMode,
                  n = t.media
                return b.a.createElement(
                  A.a,
                  { style: J.thumbnailImage },
                  b.a.createElement(j.a, {
                    cropCandidates: n.crop,
                    dataSaverMode: r,
                    icon: 'lists',
                    image: n.image,
                    type: 'fixed',
                  }),
                )
              }),
              h()(l()(e), '_renderRightControl', function () {
                var t = e.props,
                  r = t.hoverLabel,
                  n = t.icon,
                  a = t.isFollowing,
                  i = t.isSelected,
                  o = t.name,
                  c = t.onFollow,
                  l = t.onIconClick,
                  s = t.onUnfollow,
                  u = t.user,
                  d = t.withSubscribe
                return i
                  ? b.a.createElement(V.a, { style: J.iconCheckmark })
                  : n
                  ? b.a.createElement(F.a, {
                      hoverLabel: r ? { label: r } : void 0,
                      icon: n,
                      onPress: l,
                      type: 'brandText',
                    })
                  : d
                  ? b.a.createElement(
                      M.a,
                      { customText: o, displayMode: B.a.subscribe, userFullName: u ? u.name : void 0 },
                      function (e) {
                        return b.a.createElement(G.a, {
                          isFollowing: a,
                          onFollow: e(c),
                          onUnfollow: e(s),
                          showRelationshipChangeConfirmation: !1,
                          size: 'small',
                          style: J.followButton,
                          type: 'list',
                        })
                      },
                    )
                  : void 0
              }),
              h()(l()(e), '_renderPrivateIcon', function () {
                return 'private' === e.props.mode
                  ? b.a.createElement(
                      U.b,
                      { size: 'body', style: J.icon },
                      b.a.createElement(Y.a, { accessibilityLabel: q, style: J.iconLock }),
                    )
                  : null
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.listId,
                    r = e.onClick,
                    n = e.user,
                    a = e.withBottomBorder,
                    i = e.withHoverCard,
                    o = '/i/lists/'.concat(t)
                  return b.a.createElement(
                    W.a,
                    { link: o, onPress: r, style: [J.root, a && J.bottomBorder] },
                    b.a.createElement(
                      A.a,
                      { style: J.listContainer, testID: N },
                      b.a.createElement(
                        A.a,
                        { style: J.leftColumn },
                        this._renderHoverCard(this._renderThumbnail()),
                        b.a.createElement(
                          A.a,
                          { style: J.listAttribution },
                          this._renderHoverCard(this._renderName()),
                          this._renderDescription(),
                          n
                            ? b.a.createElement(H.a, { author: n, withHoverCard: i, withLink: !0, withScreenName: !0 })
                            : null,
                        ),
                      ),
                      b.a.createElement(A.a, { style: J.rightColumn }, this._renderRightControl()),
                    ),
                  )
                },
              },
            ]),
            r
          )
        })(b.a.Component)
      h()(X, 'contextType', K.a), h()(X, 'defaultProps', { withSubscribe: !1 })
      var J = D.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small },
            followButton: { marginLeft: e.spaces.space12 },
            listContainer: { flexDirection: 'row' },
            leftColumn: { alignItems: 'center', flexDirection: 'row', flex: 1, flexShrink: 1 },
            rightColumn: { flexShrink: 0, justifyContent: 'center' },
            iconCheckmark: { color: e.colors.primary, paddingHorizontal: e.spaces.space12 },
            iconLock: { color: e.colors.text },
            listAttribution: { flex: 1, alignItems: 'flex-start' },
            name: { marginBottom: e.spaces.space2, flexDirection: 'row' },
            description: { marginBottom: e.spaces.space2 },
            icon: { paddingLeft: e.spaces.space4 },
            thumbnailImage: { alignItems: 'flex-start', height: '100%', marginRight: e.spaces.space16 },
          }
        }),
        Q = r('sYiQ'),
        Z = r('LtQU'),
        $ = r('FITr'),
        ee = r('ShJ/'),
        te = O.a.c5d23126,
        re = O.a.j44ec61f,
        ne = O.a.b01c0d14,
        ae = O.a.fa816a0a,
        ie = O.a.ac832ae4,
        oe = O.a.cdb33880,
        ce = (function (e) {
          u()(r, e)
          var t = m()(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_renderHoverLabel', function () {
                var t = e.props,
                  r = t.list
                if (t.mode === Q.a.Pinning) return null != r && r.pinning ? re : te
              }),
              h()(l()(e), '_renderIcon', function () {
                var t = e.props,
                  r = t.couldPinList,
                  n = t.list,
                  a = t.mode
                return a === Q.a.Reordering
                  ? b.a.createElement(Z.a, { accessibilityLabel: ae })
                  : a === Q.a.Pinning
                  ? null != n && n.pinning
                    ? b.a.createElement($.a, { accessibilityLabel: oe })
                    : b.a.createElement(ee.a, { accessibilityLabel: ie, style: r ? null : le.disabledPin })
                  : void 0
              }),
              h()(l()(e), '_handleClick', function (t) {
                var r = e.props,
                  n = r.list,
                  a = r.onClick
                n && (e._scribeAction('click'), a && a(t, n))
              }),
              h()(l()(e), '_handleFollowClick', function () {
                var t = e.props,
                  r = t.createLocalApiErrorHandler,
                  n = t.list,
                  a = t.subscribe,
                  i = t.unsubscribe
                if (n) {
                  var o = n.following,
                    c = n.id_str
                  Object(L.a)(r, o, c, a, i), e._scribeAction(o ? 'unfollow' : 'follow')
                }
              }),
              h()(l()(e), '_scribeAction', function (t) {
                var r = e.props.analytics
                r.contextualScribeNamespace.element ? r.scribeAction(t) : r.scribe({ component: 'list', action: t })
              }),
              h()(l()(e), '_handlePinClick', function (t) {
                var r = e.props,
                  n = r.addToast,
                  a = r.analytics,
                  i = r.couldPinList,
                  o = r.list,
                  c = r.pinOrUnpinList
                if ((t.preventDefault(), o))
                  if (i || o.pinning) {
                    var l = o.pinning ? 'unpin_button' : 'pin_button'
                    a.scribe({ element: l, action: 'click' }), c(o.id_str, { isPinned: !!o.pinning })
                  } else n({ text: ne }), a.scribe({ element: 'unpinnable_button', action: 'click' })
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(T.a)(e, this.props) || !Object(T.a)(t, this.state)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.author,
                    r = e.dataSaverMode,
                    n = e.isMember,
                    a = e.list,
                    i = e.media,
                    o = e.mode,
                    c = e.withBottomBorder,
                    l = e.withDescription,
                    s = e.withSubscribe,
                    u = e.withUserInfo,
                    d = o === Q.a.Pinning ? this._handlePinClick : void 0,
                    m = a || {},
                    p = m.description,
                    h = m.following,
                    f = m.id_str,
                    g = m.mode,
                    v = m.name
                  return a
                    ? b.a.createElement(X, {
                        dataSaverMode: r,
                        description: p,
                        hoverLabel: this._renderHoverLabel(),
                        icon: this._renderIcon(),
                        isFollowing: h || !1,
                        isSelected: n,
                        listId: f,
                        media: i,
                        mode: g,
                        name: v,
                        onClick: this._handleClick,
                        onFollow: this._handleFollowClick,
                        onIconClick: d,
                        onUnfollow: this._handleFollowClick,
                        user: u ? t : void 0,
                        withBottomBorder: c,
                        withDescription: l,
                        withSubscribe: s,
                      })
                    : null
                },
              },
            ]),
            r
          )
        })(b.a.Component)
      h()(ce, 'defaultProps', { withUserInfo: !0 })
      var le = D.a.create(function (e) {
          return { disabledPin: { color: e.colors.gray300 } }
        }),
        se = x(ce)
      t.a = se
    },
    '2My+': function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = r.n(n),
        i = r('ZUOq'),
        o = (r('lTEL'), r('7x/C'), r('JtPf'), r('87if'), r('kYxP'), r('zb92')),
        c = Object(o.a)({
          loader: function () {
            return Promise.all([r.e(0), r.e(10), r.e(214)]).then(r.bind(null, 'ehWl'))
          },
        }),
        l = r('MWbm'),
        s = r('E4xM')
      function u(e) {
        var t = e.basePath,
          r = e.children,
          n = e.listId,
          i = e.wrapperStyle
        return a.a.createElement(
          s.a,
          {
            renderContent: function () {
              return a.a.createElement(
                l.a,
                { style: d.root },
                a.a.createElement(c, { basePath: t, listId: n, withEditButton: !1, withRoundedCorners: !0 }),
              )
            },
            wrapperStyle: i,
          },
          r,
        )
      }
      var d = r('rHpw').a.create(function (e) {
        return { root: { minHeight: 130, width: i.a.cardWidth.normal } }
      })
      t.a = a.a.memo(u)
    },
    FITr: function (e, t, r) {
      'use strict'
      var n = r('yiKp'),
        a = r.n(n),
        i = r('ERkP'),
        o = r.n(i),
        c = r('Lsrn'),
        l = r('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    GliE: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return d
      })
      r('2G9S'), r('hBpG'), r('7x/C')
      var n = r('ajvb'),
        a = r('3XMw'),
        i = r.n(a),
        o = r('qB1G'),
        c = i.a.a3484d21,
        l = i.a.aab2efa8,
        s = i.a.ba21c289,
        u = function (e) {
          return ''.concat(e.fullName || '', ' ').concat(e.score || '')
        },
        d = function (e, t, r, a, i) {
          var d =
              r && i
                ? (function (e, t) {
                    return e && t
                      ? e.find(function (e) {
                          return e.id === t
                        })
                      : void 0
                  })(r, i)
                : void 0,
            m = Object(n.a)(t),
            p = e || '',
            h = r && r[0] ? u(r[0]) : '',
            f = r && r[1] ? u(r[1]) : '',
            b = a || '',
            g = d ? l({ winner: d.fullName }) : '',
            v = t === o.a.Completed ? (d ? g : c) : b
          return s({ gameCategory: p, gameState: m, accessibleGameClockPeriod: v, teamOneLabel: h, teamTwoLabel: f })
        }
    },
    IJsT: function (e, t, r) {
      'use strict'
      r('hBvt')
      var n = r('ERkP'),
        a = r.n(n),
        i = r('I4+6'),
        o = r('cm6r'),
        c = r('rHpw'),
        l = r('MWbm'),
        s = function (e) {
          var t = e.accessibilityLabel,
            r = e.containerStyle,
            n = e.isCompact,
            s = e.link,
            d = e.lower,
            m = e.onClick,
            p = e.stackLayoutLowerStyle,
            h = e.stackLayoutUpperStyle,
            f = e.upper,
            b = e.withInsetFocusRing,
            g = e.withInteractiveStyling,
            v = i.a.generate({
              backgroundColor: c.a.theme.colors.transparent,
              color: c.a.theme.colors.primary,
              insetFocusRing: b,
            }),
            y = a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(l.a, { style: [u.defaultUpperContainerStyle, h, n && { height: 'auto' }] }, f),
              d ? a.a.createElement(l.a, { style: [u.defaultLowerContainerStyle, p] }, d) : null,
            )
          return a.a.createElement(
            o.a,
            {
              accessibilityLabel: t,
              interactive: g,
              interactiveStyles: g ? v : void 0,
              link: s,
              onClick: m,
              style: [u.root, r],
            },
            y,
          )
        }
      s.defaultProps = { withInsetFocusRing: !0, withInteractiveStyling: !1 }
      var u = c.a.create(function (e) {
        return {
          root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large },
          defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: 'flex-end' },
          defaultUpperContainerStyle: {
            height: 'calc('.concat(e.spaces.space48, '*2)'),
            overflow: 'hidden',
            borderRadius: e.borderRadii.large,
          },
        }
      })
      t.a = s
    },
    LtQU: function (e, t, r) {
      'use strict'
      var n = r('yiKp'),
        a = r.n(n),
        i = r('ERkP'),
        o = r.n(i),
        c = r('Lsrn'),
        l = r('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M19 10H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    Nxr7: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return j
      })
      var n = r('VrFO'),
        a = r.n(n),
        i = r('Y9Ll'),
        o = r.n(i),
        c = r('1Pcy'),
        l = r.n(c),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('2VqO'),
        m = r.n(d),
        p = r('KEM+'),
        h = r.n(p),
        f = (r('2G9S'), r('Blm6'), r('hBpG'), r('7x/C'), r('ERkP')),
        b = r.n(f),
        g = r('t62R'),
        v = 864e5,
        y = function (e) {
          var t = new Date().setHours(0, 0, 0, 0),
            r = t + v
          return e >= t && e < r ? 0 : e >= r && e < t + 1728e5 ? 1 : -1
        },
        C = r('3XMw'),
        w = r.n(C),
        E = r('pjBI'),
        S = r('gmfB'),
        k = w.a.ccaa970e,
        P = w.a.d725a288,
        I = w.a.db355331,
        _ = w.a.a8428d5e,
        x = w.a.a7aad8b9,
        L = w.a.e431f1aa,
        R = w.a.a7391707,
        O = w.a.d2dbfa91,
        T = w.a.cd734f65,
        H = w.a.c8891d06,
        j = (function (e) {
          u()(r, e)
          var t = m()(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_renderCategory', function () {
                var t = e.props.category
                return t
                  ? b.a.createElement(g.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, t)
                  : null
              }),
              h()(l()(e), '_renderGameScheduledDateTime', function () {
                var t = e.props.startTimeMillis
                if (t) {
                  var r = new Date(parseInt(t, 10)),
                    n = y(r)
                  return -1 === n ? e._renderDateTime(r) : e._renderTodayTomorrow(n, r)
                }
                return null
              }),
              h()(l()(e), '_renderTodayTomorrow', function (e, t) {
                var r = P(t)
                return b.a.createElement(
                  E.a,
                  null,
                  b.a.createElement(g.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? T : H),
                  b.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, r),
                )
              }),
              h()(l()(e), '_renderDateTime', function (e) {
                var t = P(e),
                  r = k(e)
                return b.a.createElement(
                  E.a,
                  null,
                  b.a.createElement(g.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, r),
                  b.a.createElement(g.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              h()(l()(e), '_renderGameStateValue', function (t, r) {
                var n = e.props.gameClockPeriod,
                  a = e._getWinnerName(),
                  i = t && a ? I({ team: a }) : r && n ? n : void 0
                return i ? b.a.createElement(g.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, i) : null
              }),
              h()(l()(e), '_getWinnerName', function () {
                var t = e.props,
                  r = t.teams,
                  n = t.winnerId,
                  a =
                    r &&
                    r.find(function (e) {
                      return e.id === n
                    })
                return a && a.shortName
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gameState,
                    r = e.withCategory,
                    n = t === S.a.Scheduled,
                    a = t === S.a.InProgress,
                    i = t === S.a.Completed
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    n
                      ? this._renderGameScheduledDateTime()
                      : b.a.createElement(
                          E.a,
                          null,
                          b.a.createElement(
                            g.b,
                            { color: a ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case S.a.Scheduled:
                                  return _
                                case S.a.InProgress:
                                  return x
                                case S.a.Completed:
                                  return L
                                case S.a.Postponed:
                                  return R
                                case S.a.Cancelled:
                                  return O
                                default:
                                  return null
                              }
                            })(t),
                          ),
                          this._renderGameStateValue(i, a),
                        ),
                    r ? this._renderCategory() : null,
                  )
                },
              },
            ]),
            r
          )
        })(b.a.Component)
      h()(j, 'defaultProps', { withCategory: !0 })
    },
    Ox2E: function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return d
      }),
        r.d(t, 'c', function () {
          return m
        }),
        r.d(t, 'a', function () {
          return p
        })
      r('LW0h'), r('7x/C')
      var n = r('1YZw'),
        a = r('k49u'),
        i = r('3XMw'),
        o = r.n(i),
        c = o.a.add55942,
        l = o.a.ib8f5f3b,
        s = o.a.e20fc755,
        u = o.a.hae1c933,
        d = {
          customErrorHandler: function () {
            return Object(n.b)({ text: c })
          },
          showToast: !0,
        },
        m = {
          customErrorHandler: function () {
            return Object(n.b)({ text: l })
          },
          showToast: !0,
        },
        p = {
          customErrorHandler: function (e) {
            var t = e.errors
            if (
              t &&
              t.filter(function (e) {
                return (null == e ? void 0 : e.code) === a.a.ListAdminRightsError
              }).length
            )
              return Object(n.b)({ text: s })
            return Object(n.b)({ text: u })
          },
          showToast: !0,
        }
    },
    'ShJ/': function (e, t, r) {
      'use strict'
      var n = r('yiKp'),
        a = r.n(n),
        i = r('ERkP'),
        o = r.n(i),
        c = r('Lsrn'),
        l = r('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    ajvb: function (e, t, r) {
      'use strict'
      var n = r('3XMw'),
        a = r.n(n),
        i = r('qB1G'),
        o = a.a.f178e38c,
        c = a.a.b6da6b01,
        l = a.a.i9f615c8,
        s = a.a.f897267a,
        u = a.a.f93c4b69
      t.a = function (e) {
        switch (e) {
          case i.a.Scheduled:
            return o
          case i.a.InProgress:
            return c
          case i.a.Completed:
            return l
          case i.a.Postponed:
            return s
          case i.a.Cancelled:
            return u
          default:
            return ''
        }
      }
    },
    'f5/l': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return a
      }),
        r.d(t, 'b', function () {
          return i
        })
      var n = r('Ox2E'),
        a = function (e, t, r, a, i, o) {
          t
            ? (i(r).catch(e(n.c)), o && o({ element: 'unsubscribed', action: 'click' }))
            : (a(r).catch(e(n.b)), o && o({ element: 'subscribed', action: 'click' }))
        },
        i = function (e, t) {
          return (e && e.id_str === t) || !1
        }
    },
    gNWl: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return p
      }),
        r.d(t, 'b', function () {
          return b
        })
      var n = r('KEM+'),
        a = r.n(n),
        i = r('yiKp'),
        o = r.n(i),
        c = (r('yH/f'), r('7x/C'), r('JtPf'), r('kHBp')),
        l = r('Ssj5'),
        s = r('RqPI'),
        u = 'rweb.channelsTimelineBehavior',
        d = 'channelsTimelineBehavior',
        m = Object.freeze({})
      var p = function (e) {
          return e[d]
        },
        h = 'rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS',
        f = function (e) {
          return { payload: e, type: h }
        },
        b = function (e) {
          var t = e.listId,
            r = e.useRanked
          return function (e, n, i) {
            var l = i.userPersistence,
              s = n(),
              d = p(s),
              m = o()(o()({}, d), {}, a()({}, t, { useRanked: r }))
            e(f(m))
            var h = c.a.select(s, t)
            return h && h.following
              ? l.get(u).then(function (e) {
                  return l.set(u, o()(o()({}, e), {}, a()({}, t, { useRanked: r })))
                })
              : Promise.resolve()
          }
        }
      l.a.register(
        a()({}, d, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case h:
              return o()({}, t.payload)
            default:
              return e
          }
        }),
        function () {
          return function (e, t, r) {
            var n = r.userPersistence
            return Object(s.m)(t())
              ? n.get(u).then(function (t) {
                  t && e(f(t))
                })
              : Promise.resolve()
          }
        },
      )
    },
    gmfB: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      r('yH/f')
      var n = Object.freeze({
        Scheduled: 'Scheduled',
        InProgress: 'InProgress',
        Completed: 'Completed',
        Postponed: 'Postponed',
        Cancelled: 'Cancelled',
        Unused6: '_Unused6',
        Unused7: '_Unused7',
      })
    },
    iPch: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return d
      }),
        r.d(t, 'k', function () {
          return p
        }),
        r.d(t, 'f', function () {
          return h
        }),
        r.d(t, 'g', function () {
          return f
        }),
        r.d(t, 'c', function () {
          return b
        }),
        r.d(t, 'b', function () {
          return g
        }),
        r.d(t, 'j', function () {
          return v
        }),
        r.d(t, 'l', function () {
          return y
        }),
        r.d(t, 'm', function () {
          return C
        }),
        r.d(t, 'e', function () {
          return E
        }),
        r.d(t, 'd', function () {
          return S
        }),
        r.d(t, 'n', function () {
          return k
        }),
        r.d(t, 'h', function () {
          return P
        }),
        r.d(t, 'i', function () {
          return I
        })
      r('2G9S'), r('KqXw'), r('WNMA'), r('ho0z')
      var n = r('qKWj'),
        a = r('kGix'),
        i = r('tI3i'),
        o = r.n(i),
        c = r('kHBp'),
        l = r('gNWl'),
        s = r('G6rE'),
        u = { url: 'https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png', width: 1125, height: 375 },
        d = function (e, t) {
          var r = f(e, t),
            n = y(e, t),
            a = C(e, t)
          return r ? '/i/lists/'.concat(r) : n && a ? '/'.concat(n, '/lists/').concat(a) : ''
        },
        m = function (e, t) {
          return t.match.params.listId || void 0
        },
        p = function (e, t) {
          var r = t.match.params.listId
          return o()(r, 'listId should always be specified'), r
        },
        h = function (e, t) {
          var r = b(e, t)
          return r && r.id_str
        },
        f = function (e, t) {
          return m(0, t) || h(e, t)
        },
        b = function (e, t) {
          var r = m(0, t)
          return r ? c.a.select(e, r) : c.a.selectByKey(e, w(e, t))
        },
        g = function (e, t) {
          var r = b(e, t)
          return r && r.following
        },
        v = function (e, t) {
          var r = b(e, t)
          return r && r.name
        },
        y = function (e, t) {
          var r = m(0, t)
          return t.match.params.screenName || void 0 || (r && c.a.selectListAuthorScreenName(e, r))
        },
        C = function (e, t) {
          var r = b(e, t)
          return t.match.params.slug || (r && r.slug)
        },
        w = function (e, t) {
          var r = t.match.params.slug,
            a = t.match.params.screenName
          return r && a ? Object(n.a)(a, r) : ''
        },
        E = function (e, t) {
          var r =
            f(e, t) ||
            (function (e, t) {
              var r = C(e, t),
                a = y(e, t)
              return r && a ? Object(n.a)(a, r) : ''
            })(e, t)
          return c.a.selectFetchStatus(e, r) || a.a.NONE
        },
        S = function (e, t) {
          var r = y(e, t)
          return r ? s.e.selectByScreenName(e, r) : void 0
        },
        k = function (e, t) {
          var r = f(e, t),
            n = Object(l.a)(e)
          return (r && n[r] && n[r].useRanked) || !1
        },
        P = function (e, t) {
          var r = c.a.select(e, t)
          if (r) {
            var n = r.customBanner
            return n || r.defaultBanner
          }
          return { crop: [], image: u }
        },
        I = function (e, t) {
          var r = b(e, t)
          return null == r ? void 0 : r.mode
        }
    },
    jUPy: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return L
      })
      var n = r('VrFO'),
        a = r.n(n),
        i = r('Y9Ll'),
        o = r.n(i),
        c = r('1Pcy'),
        l = r.n(c),
        s = r('5Yy7'),
        u = r.n(s),
        d = r('2VqO'),
        m = r.n(d),
        p = r('KEM+'),
        h = r.n(p),
        f = (r('2G9S'), r('hBvt'), r('z84I'), r('ERkP')),
        b = r.n(f),
        g = r('IJsT'),
        v = r('Nxr7'),
        y = (r('yH/f'), r('TIdA')),
        C = r('t62R'),
        w = r('A91F'),
        E = r('gmfB'),
        S = r('rHpw'),
        k = r('MWbm'),
        P = Object.freeze({ SCORE: 'score', SECONDARY_SCORE: 'secondaryScore' }),
        I = (function (e) {
          u()(r, e)
          var t = m()(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', { imageError: !1 }),
              h()(l()(e), '_renderTeamName', function () {
                var t = e.props.team.shortName
                return b.a.createElement(
                  k.a,
                  { style: _.teamNameContainer },
                  b.a.createElement(C.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, t),
                )
              }),
              h()(l()(e), '_renderImage', function () {
                var t = e.props,
                  r = t.isCompact,
                  n = t.team,
                  a = n.imageUrl,
                  i = n.logo,
                  o = e.state.imageError,
                  c = (!i && !a) || o ? _.translucent : {},
                  l = i ? w.a.exact(i.width / i.height) : w.a.SQUARE
                return b.a.createElement(
                  k.a,
                  { style: [_.imageContainer, c, r && _.compactImageContainer] },
                  b.a.createElement(y.a, {
                    accessibilityLabel: '',
                    aspectMode: l,
                    image: i || a || '',
                    onError: e._handleImageError,
                    rounded: !i,
                  }),
                )
              }),
              h()(l()(e), '_handleImageError', function () {
                e.setState({ imageError: !0 })
              }),
              h()(l()(e), '_renderScore', function () {
                var t = e.props,
                  r = t.gameState,
                  n = t.team,
                  a = t.winnerId,
                  i = n.id,
                  o = n.score,
                  c = n.secondaryScore,
                  l = i === a,
                  s = !a,
                  u = r === E.a.Completed && !l && !s,
                  d = e._shouldRenderScore(),
                  m = e._getTeamScoreSize(P.SCORE),
                  p = c ? e._getTeamScoreSize(P.SECONDARY_SCORE) : void 0
                return d
                  ? b.a.createElement(
                      k.a,
                      { style: [_.teamScore, u && _.losingTeamScore] },
                      b.a.createElement(C.b, { color: 'white', numberOfLines: 1, size: m, weight: 'heavy' }, o),
                      c
                        ? b.a.createElement(C.b, { color: 'white', numberOfLines: 1, size: p, weight: 'bold' }, c)
                        : null,
                    )
                  : null
              }),
              h()(l()(e), '_getTeamScoreSize', function (t) {
                var r = e.props,
                  n = r.isCompact
                if (!!!r.team.secondaryScore) return n ? 'headline1' : 'title4'
                switch (t) {
                  case P.SCORE:
                    return n ? 'subtext2' : 'headline1'
                  case P.SECONDARY_SCORE:
                    return n ? 'subtext3' : 'body'
                  default:
                    return
                }
              }),
              h()(l()(e), '_shouldRenderScore', function () {
                var t = e.props.gameState
                return t === E.a.Completed || t === E.a.InProgress
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fallbackColor,
                    r = e.isCompact,
                    n = e.team.color,
                    a = {
                      backgroundColor:
                        (n && 'rgb('.concat(n.red, ', ').concat(n.green, ', ').concat(n.blue, ')')) ||
                        S.a.theme.colors[t],
                    },
                    i = this._shouldRenderScore(),
                    o = !r || !i
                  return b.a.createElement(
                    k.a,
                    { style: [_.root, a, r && _.compactRoot] },
                    this._renderImage(),
                    o ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            r
          )
        })(b.a.Component)
      h()(I, 'defaultProps', { isCompact: !1 })
      var _ = S.a.create(function (e) {
          return {
            root: { flexDirection: 'row', height: e.spaces.space48, paddingHorizontal: e.spaces.space12 },
            imageContainer: { alignSelf: 'center', width: e.spaces.space32, marginRight: e.spaces.space12 },
            compactImageContainer: { width: e.spaces.space20 },
            compactRoot: {
              height: 'calc('
                .concat(e.spaces.space48, ' - (')
                .concat(S.a.theme.spaces.space1, ' + ')
                .concat(S.a.theme.spaces.space2, '))'),
            },
            losingTeamScore: { opacity: 0.5 },
            teamNameContainer: { alignSelf: 'center' },
            teamScore: { flexGrow: 2, alignItems: 'flex-end', alignSelf: 'center' },
            translucent: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.white, opacity: 0.4 },
          }
        }),
        x = I,
        L = (function (e) {
          u()(r, e)
          var t = m()(r)
          function r() {
            var e
            a()(this, r)
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_renderGameStatus', function () {
                var t = e.props,
                  r = t.category,
                  n = t.gameClock,
                  a = t.gameClockPeriod,
                  i = t.gameState,
                  o = t.isCompact,
                  c = t.startTimeMillis,
                  l = t.teams,
                  s = t.winnerId
                return b.a.createElement(v.a, {
                  category: r,
                  gameClock: n,
                  gameClockPeriod: a,
                  gameState: i,
                  startTimeMillis: c,
                  teams: l,
                  winnerId: s,
                  withCategory: !o,
                })
              }),
              h()(l()(e), '_renderTeamRow', function (t, r) {
                var n = e.props,
                  a = n.gameState,
                  i = n.isCompact,
                  o = n.winnerId,
                  c = t.id
                return b.a.createElement(x, {
                  fallbackColor: r % 2 == 0 ? 'gray300' : 'gray700',
                  gameState: a,
                  isCompact: i,
                  key: c,
                  team: t,
                  winnerId: o,
                })
              }),
              e
            )
          }
          return (
            o()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    r = e.containerStyle,
                    n = e.isCompact,
                    a = e.link,
                    i = e.onClick,
                    o = e.teams
                  if (o) {
                    var c = o && o.map(this._renderTeamRow)
                    return b.a.createElement(g.a, {
                      accessibilityLabel: t,
                      containerStyle: r,
                      isCompact: n,
                      link: a,
                      lower: n ? void 0 : this._renderGameStatus(),
                      onClick: i,
                      upper: c,
                      withInteractiveStyling: !0,
                    })
                  }
                  return null
                },
              },
            ]),
            r
          )
        })(b.a.Component)
      h()(L, 'defaultProps', { isCompact: !1 })
    },
    qB1G: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      r('yH/f')
      var n = Object.freeze({
        Scheduled: 'Scheduled',
        InProgress: 'InProgress',
        Completed: 'Completed',
        Postponed: 'Postponed',
        Cancelled: 'Cancelled',
        Unused6: '_Unused6',
        Unused7: '_Unused7',
      })
    },
    sYiQ: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return n
      })
      r('yH/f')
      var n = Object.freeze({ Pinning: 'Pinning', Reordering: 'Reordering' })
    },
    xZmF: function (e, t, r) {
      'use strict'
      r('yH/f'), r('2G9S')
      var n = r('0mK8'),
        a = r('ERkP'),
        i = r.n(a),
        o = r('GliE'),
        c = r('YeIG'),
        l = r('MWbm'),
        s = r('TIdA'),
        u = r('A91F'),
        d = r('9Xij'),
        m = r('jUPy'),
        p = r('rHpw'),
        h = Object.freeze({ Fixed: 'fixed', Variable: 'variable' }),
        f = function (e) {
          var t = e.cropCandidates,
            r = e.dataSaverMode,
            a = e.icon,
            o = e.image,
            m = e.isCellWithProminentSocialContext,
            p = e.scoreEvent,
            h = e.type,
            f = g({ isCellWithProminentSocialContext: m, type: h })
          return i.a.createElement(
            l.a,
            { style: [v.coverContainer, f] },
            p
              ? b(p)
              : !o || Object(c.a)(o) || r
              ? r || Object(c.a)(o)
                ? i.a.createElement(d.a, { ratio: 1 }, i.a.createElement(n.c, { icon: a }))
                : null
              : i.a.createElement(s.a, { accessibilityLabel: '', aspectMode: u.a.SQUARE, cropCandidates: t, image: o }),
          )
        },
        b = function (e) {
          var t = e.category,
            r = e.eventState,
            n = e.gameClock,
            a = e.gameClockPeriod,
            c = e.participants,
            l = e.startTimeMillis,
            s = e.winnerId,
            u = Object(o.a)(t, r, c, a, s)
          return i.a.createElement(m.a, {
            accessibilityLabel: u,
            category: t,
            containerStyle: v.scoreCardTile,
            gameClock: n,
            gameClockPeriod: a,
            gameState: r,
            isCompact: !0,
            startTimeMillis: l,
            teams: c,
            winnerId: s,
          })
        },
        g = function (e) {
          var t = e.isCellWithProminentSocialContext
          switch (e.type) {
            case h.Fixed:
              return (t && v.fixedCellThumbnailWithProminentSocialContext) || v.fixedCellThumbnail
            case h.Variable:
              return v.variableCellThumbnail
            default:
              return
          }
        }
      f.defaultProps = { type: 'variable' }
      var v = p.a.create(function (e) {
        return {
          coverContainer: { borderRadius: e.borderRadii.large, overflow: 'hidden' },
          fixedCellThumbnail: { height: p.a.theme.spaces.space48, width: p.a.theme.spaces.space48 },
          fixedCellThumbnailWithProminentSocialContext: {
            height: 'calc('
              .concat(p.a.theme.spaces.space48, ' + ')
              .concat(p.a.theme.spaces.space40, ' + ')
              .concat(p.a.theme.spaces.space1, ' + ')
              .concat(p.a.theme.spaces.space2, ')'),
            width: 'calc('
              .concat(p.a.theme.spaces.space48, ' + ')
              .concat(p.a.theme.spaces.space40, ' + ')
              .concat(p.a.theme.spaces.space1, ' + ')
              .concat(p.a.theme.spaces.space2, ')'),
          },
          scoreCardTile: { padding: 0 },
          variableCellThumbnail: {
            maxHeight: 'calc('.concat(p.a.theme.spaces.space48, ' * 2)'),
            maxWidth: 'calc('.concat(p.a.theme.spaces.space48, ' * 2)'),
            minHeight: 'calc('.concat(p.a.theme.spaces.space48, ' + ').concat(p.a.theme.spaces.space20, ')'),
            minWidth: 'calc('.concat(p.a.theme.spaces.space48, ' + ').concat(p.a.theme.spaces.space20, ')'),
            height: '15%',
            width: '15%',
          },
        }
      })
      t.a = f
    },
  },
])
//# sourceMappingURL=WIPED
