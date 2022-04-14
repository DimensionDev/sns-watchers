;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    FITr: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
    Nqmc: function (e, t, a) {
      'use strict'
      var n = a('m3Bd'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        l = a('Y9Ll'),
        c = a.n(l),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        m = a.n(d),
        h = a('KEM+'),
        p = a.n(h),
        b = (a('hBvt'), a('uFXj'), a('2G9S'), a('SV7d')),
        y = a('ERkP'),
        v = a.n(y),
        g = a('t62R'),
        x = a('5mJL'),
        f = a('nBUg'),
        w = a('qjak'),
        C = a('dC06'),
        E = a('rHpw'),
        k = a('XIXT'),
        L = a('yDX5'),
        S = a('MWbm'),
        B = [
          'avatarSize',
          'bottomControl',
          'iconStyle',
          'nativeID',
          'onLayout',
          'rightControl',
          'style',
          'testID',
          'textColor',
          'textSize',
          'topControl',
          'weight',
          'withBottomBorder',
          'withLeftPadding',
          'withTextCentered',
        ],
        I = { viewType: 'social_context' },
        F = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            return o()(this, a), t.apply(this, arguments)
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarSize,
                    n = t.bottomControl,
                    i = t.iconStyle,
                    o = t.nativeID,
                    l = t.onLayout,
                    c = t.rightControl,
                    s = t.style,
                    u = t.testID,
                    d = t.textColor,
                    m = t.textSize,
                    h = t.topControl,
                    p = t.weight,
                    y = (t.withBottomBorder, t.withLeftPadding),
                    C = (t.withTextCentered, r()(t, B)),
                    E = Object(w.a)(C),
                    k = E.Icon,
                    L = E.accessibilityLabel,
                    F = E.link,
                    R = E.text,
                    z = v.a.createElement(
                      g.b,
                      { accessibilityLabel: L, color: d, nativeID: o, numberOfLines: 2, size: m, testID: u, weight: p },
                      R,
                    ),
                    H = this._getStyles(),
                    D = H.cellStyle,
                    O = H.viewStyle
                  return R
                    ? v.a.createElement(f.b.UseProps, null, function (t) {
                        return v.a.createElement(
                          b.a,
                          { behavioralEventContext: I },
                          v.a.createElement(
                            v.a.Fragment,
                            null,
                            h || null,
                            v.a.createElement(
                              S.a,
                              {
                                onLayout: l,
                                style: [s, O, t.socialContextRefreshEnabled() && !y && T.socialContextRefresh],
                              },
                              v.a.createElement(
                                x.a,
                                {
                                  avatarCell: k || (y ? null : void 0),
                                  avatarCellStyle: [
                                    i,
                                    T.socialContextIconColumn,
                                    !y && T.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !y && T.socialContextRefreshIcon,
                                  ],
                                  avatarSize: a,
                                  cellStyle: D,
                                },
                                v.a.createElement(
                                  S.a,
                                  { style: T.cellWrapper },
                                  v.a.createElement(
                                    S.a,
                                    {
                                      style: [
                                        T.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !y && T.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    F ? e._renderLink(F, z) : z,
                                  ),
                                  c || null,
                                ),
                              ),
                              n || null,
                            ),
                          ),
                        )
                      })
                    : null
                },
              },
              {
                key: '_renderLink',
                value: function (e, t) {
                  var a = this.props,
                    n = a.contextType,
                    r = a.nativeID,
                    i = a.onClick,
                    o = a.retweetData,
                    l = a.textColor,
                    c = a.topicData,
                    s = (o || {}).screenName,
                    u = v.a.createElement(g.b, { color: l, link: e, nativeID: r, onClick: i }, t)
                  return n === C.a.Topic && c
                    ? v.a.createElement(k.a, { topicId: c.topicId }, u)
                    : n === C.a.Retweet && s
                    ? v.a.createElement(L.a, { screenName: s }, u)
                    : u
                },
              },
              {
                key: '_getStyles',
                value: function () {
                  var e = this.props,
                    t = e.bottomControl,
                    a = e.contextType,
                    n = e.withBottomBorder,
                    r = e.withTextCentered,
                    i = a === C.a.TextOnly,
                    o = n ? [T.bottomBorderMargin, t && T.bottomBorder] : [],
                    l = n && !t ? [T.bottomBorder] : []
                  return (
                    i && l.push(T.topicContext),
                    r && l.push(T.socialContextTextCentered),
                    { viewStyle: o, cellStyle: l }
                  )
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent)
      p()(F, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var T = E.a.create(function (e) {
        return {
          socialContextIconColumn: { alignItems: 'flex-end', justifyContent: 'center' },
          bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical },
          cellWrapper: { flexDirection: 'row' },
          bottomBorder: {
            paddingBottom: e.spaces.space4,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            borderBottomColor: e.colors.borderColor,
          },
          topicContext: { paddingBottom: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')') },
          socialContextTextColumn: { alignItems: 'flex-start', flexShrink: 1, justifyContent: 'center' },
          unsetIconWidth: { flexBasis: 'unset' },
          socialContextRefreshIcon: { marginRight: e.spaces.space8 },
          socialContextRefresh: { marginBottom: e.spaces.space8 },
          socialContextRefreshTextColumn: { minHeight: e.spaces.space32 },
          socialContextTextCentered: { justifyContent: 'center' },
        }
      })
      t.a = F
    },
    aPcQ: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20 16H5.81l2.72-2.72c.294-.293.294-.768 0-1.06s-.767-.294-1.06 0l-4 4c-.293.292-.293.767 0 1.06l4 4c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06L5.81 17.5H20c.414 0 .75-.337.75-.75S20.414 16 20 16zm.53-9.28l-4-4c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l2.72 2.72H4c-.414 0-.75.337-.75.75S3.586 8 4 8h14.19l-2.72 2.72c-.294.293-.294.768 0 1.06.146.147.338.22.53.22s.384-.073.53-.22l4-4c.293-.293.293-.767 0-1.06z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    dC06: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      a('yH/f'), a('ERkP')
      var n = Object.freeze({
        Community: 'Community',
        Pin: 'Pin',
        Retweet: 'Retweet',
        Like: 'Like',
        Follow: 'Follow',
        Moment: 'Moment',
        NewTweets: 'NewTweets',
        Reply: 'Reply',
        Conversation: 'Conversation',
        TextOnly: 'TextOnly',
        Facepile: 'Facepile',
        Feedback: 'Feedback',
        Topic: 'Topic',
        List: 'List',
        Location: 'Location',
        Megaphone: 'Megaphone',
        Bird: 'Bird',
        NewUser: 'NewUser',
        SmartBlockExpiration: 'SmartBlockExpiration',
        FollowMutual: 'FollowMutual',
        FollowFollowing: 'FollowFollowing',
        FollowFollowed: 'FollowFollowed',
        SocialProof: 'SocialProof',
        Spaces: 'Spaces',
        Sparkle: 'Sparkle',
        Trending: 'Trending',
      })
    },
    qjak: function (e, t, a) {
      'use strict'
      a('hBvt'), a('ho0z')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('t62R'),
        o = a('MAI/'),
        l = a('shC7'),
        c = a('dC06'),
        s = a('rHpw'),
        u = a('3XMw'),
        d = a.n(u),
        m = a('FITr'),
        h = a('yVEN'),
        p = a('uCrx'),
        b = a('6ZHn'),
        y = a('GcQN'),
        v = a('x0mb'),
        g = a('Hp3u'),
        x = a('yiKp'),
        f = a.n(x),
        w = a('Lsrn'),
        C = a('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            f()(
              f()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z',
              }),
            ),
          )
        }
      E.metadata = { width: 24, height: 24 }
      var k = E,
        L = a('EHV7'),
        S = a('wpLu'),
        B = a('EfHu'),
        I = a('cOhU'),
        F = a('cap5'),
        T = a('r9x5'),
        R = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            f()(
              f()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.75 12.257c-.038 0-.074-.003-.11-.008l-3.667-.54s-.28-.048-.292-.053c-.343-.07-.602-.372-.602-.735V6.417c0-.414.336-.75.75-.75s.75.336.75.75v5.115l3.28.483c.41.06.692.44.632.852-.055.372-.375.64-.74.64z',
              }),
            ),
          )
        }
      R.metadata = { width: 24, height: 24 }
      var z = R,
        H = a('0qK0'),
        D = a('aPcQ'),
        O = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            f()(
              f()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      O.metadata = { width: 24, height: 24 }
      var M = O,
        j = a('lUZE'),
        P = d.a.jb767df7,
        _ = d.a.bb3323fa,
        A = d.a.db0798ed,
        U = d.a.dc716ec8,
        N = function (e) {
          return r.a.createElement(i.b, { dir: l.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        q = function (e, t) {
          return t
            ? P
            : (function (e) {
                var t = N(e)
                return r.a.createElement(d.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        K = s.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        V = s.a.create(function (e) {
          return {
            circle: { color: e.colors.primary, width: '0.5em' },
            colorDeepGray: { color: e.colors.gray700 },
            colorBlue: { color: e.colors.blue500 },
            colorGreen: { color: e.colors.green500 },
            colorOrange: { color: e.colors.orange500 },
            colorPrimary: { color: e.colors.primary },
            colorRed: { color: e.colors.magenta500 },
            grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: 'grayscale(100%)' },
            brandColor: { color: e.colors.brandColor },
          }
        })
      t.a = function (e) {
        var t = e.contextType,
          a = e.iconSize,
          n = e.link,
          i = e.retweetData,
          l = e.text,
          s = e.topicData,
          u = e.userAvatarUrls,
          d = i || {},
          x = d.isSelfRetweet,
          f = d.name,
          w = d.screenName,
          C = (function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              n = K[t],
              i = [V.colorDeepGray, n],
              l = r.a.createElement(m.a, { style: i }),
              s = r.a.createElement(h.a, { style: i }),
              u = r.a.createElement(p.a, { style: i }),
              d = r.a.createElement(b.a, { style: i }),
              x = r.a.createElement(y.a, { style: i }),
              f = r.a.createElement(v.a, { style: V.circle }),
              w = r.a.createElement(g.a, { style: i }),
              C = r.a.createElement(k, { style: i }),
              E = r.a.createElement(L.a, { style: i }),
              R = r.a.createElement(S.a, { style: i }),
              O = r.a.createElement(B.a, { style: i }),
              P = r.a.createElement(I.a, { style: i }),
              _ = r.a.createElement(F.a, { style: i }),
              A = r.a.createElement(T.a, { style: i }),
              U = r.a.createElement(z, { style: i }),
              N = r.a.createElement(H.a, { style: i }),
              q = r.a.createElement(D.a, { style: i }),
              W = r.a.createElement(M, { style: i }),
              G = r.a.createElement(o.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              X = r.a.createElement(j.a, { style: i })
            switch (e) {
              case c.a.Pin:
                return l
              case c.a.Retweet:
                return s
              case c.a.Like:
                return u
              case c.a.Follow:
                return d
              case c.a.Moment:
                return x
              case c.a.NewTweets:
                return f
              case c.a.Reply:
              case c.a.Conversation:
                return w
              case c.a.Feedback:
                return C
              case c.a.Topic:
                return E
              case c.a.List:
                return R
              case c.a.Location:
                return O
              case c.a.Community:
                return P
              case c.a.Spaces:
                return _
              case c.a.Sparkle:
                return A
              case c.a.SmartBlockExpiration:
                return U
              case c.a.SocialProof:
              case c.a.FollowFollowed:
                return W
              case c.a.FollowMutual:
                return q
              case c.a.FollowFollowing:
                return N
              case c.a.Facepile:
                return G
              case c.a.Bird:
                return X
              case c.a.TextOnly:
              default:
                return null
            }
          })(t, a, u)
        switch (t) {
          case c.a.Retweet:
            return { Icon: C, text: l || q(f, x), link: w ? 'https://twitter.com/'.concat(w) : void 0 }
          case c.a.Pin:
            return { Icon: C, text: l || _ }
          case c.a.Topic:
            return {
              Icon: C,
              accessibilityLabel:
                'Recommendation' === (null == s ? void 0 : s.functionalityType) ||
                'RecWithEducation' === (null == s ? void 0 : s.functionalityType)
                  ? U({ topicName: l })
                  : A({ topicName: l }),
              text: l ? N(l) : null,
              link: n,
            }
          default:
            return { Icon: C, text: l ? N(l) : null, link: n }
        }
      }
    },
    r9x5: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zM7.413 4.562c0-.414-.336-.75-.75-.75h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75zm1.785 14.872h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    wChl: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        l = (a('6U7i'), a('1t7P'), a('jQ/y'), a('2G9S'), a('uFXj'), a('ERkP')),
        c = a.n(l),
        s = a('BUB3'),
        u = a('v6aA'),
        d = (a('TJCb'), a('7x/C'), a('DZ+c'), a('3zvM')),
        m = a('lMB6'),
        h = Object(d.e)({ namespace: 'articles' }),
        p = m.a.register(h),
        b = a('rxPX'),
        y = a('0KEI'),
        v = a('EGrD'),
        g = function (e, t) {
          return p.select(e, t.id.toString())
        },
        x = Object(b.a)()
          .propsFromState(function () {
            return { adFreeDomains: v.c, article: g }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('ARTICLE_SUMMARY'),
              fetchAdFreeToken: v.a,
            }
          }),
        f = a('3XMw'),
        w = a.n(f),
        C = a('k89r'),
        E = a('MWbm'),
        k = a('TnY3'),
        L = a('PbQQ'),
        S = a('pjBI'),
        B = a('t62R'),
        I = a('GBcw'),
        F = a('lphh'),
        T = a('/yvb'),
        R = a('9Xij'),
        z = a('rHpw'),
        H = a('TIdA'),
        D = a('A91F'),
        O = a('Nqmc'),
        M = a('htQn'),
        j = a('cm6r'),
        P = a('LSr9'),
        _ = a('6vUc'),
        A = a('IcAo'),
        U = w.a.afb7e8f7,
        N = z.a.create(function (e) {
          return {
            horizontalContainer: { flex: 1, flexDirection: 'row' },
            textContainer: { flex: 1 },
            text: { marginBottom: e.spaces.space4 },
            buttonContainer: { alignItems: 'flex-start', marginTop: e.spaces.space12, marginBottom: e.spaces.space16 },
            imageContainer: {
              borderRadius: e.borderRadii.large,
              height: 100,
              marginLeft: e.componentDimensions.gutterHorizontal,
              overflow: 'hidden',
              width: 100,
            },
            container: {
              flexDirection: 'column',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small },
            middotGroup: { marginBottom: e.spaces.space8 },
            adFreeLabel: { marginTop: e.spaces.space8, width: 'fit-content' },
          }
        })
      t.a = Object(k.a)(
        x(function (e) {
          var t = e.adFreeDomains,
            a = e.article,
            n = e.createLocalApiErrorHandler,
            i = e.fetchAdFreeToken,
            l = (e.id, e.location),
            d = e.socialContext,
            m = e.withInternalLink,
            h = c.a.useContext(u.a).userClaims,
            p = Object(C.a)(),
            b = c.a.useContext(L.a.default),
            y = a || {},
            v = y.article_url,
            g = y.description,
            x = y.domain,
            f = y.domain_url,
            w = y.image_url,
            k = y.publish_date,
            q = y.title,
            K = {
              domain: L.b.useOpaqueIdentifier(),
              timestamp: L.b.useOpaqueIdentifier(),
              title: L.b.useOpaqueIdentifier(),
              description: L.b.useOpaqueIdentifier(),
              adFree: L.b.useOpaqueIdentifier(),
              socialContext: L.b.useOpaqueIdentifier(),
            },
            V = h.isTrueAndEnabled('subscriptions_feature_1006'),
            W = !!V && Object(P.c)(t, f),
            G = [K.domain, K.timestamp, K.title, K.description, W ? K.adFree : '', K.socialContext],
            X = c.a.useMemo(
              function () {
                var e = Object(_.a)(p.contextualScribeData.items || []) || {}
                return {
                  url: v,
                  items: [
                    Object(A.a)({}, e, { article_details: { publisher_name: x, is_showing_label: W, is_ad_free: W } }),
                  ],
                }
              },
              [p.contextualScribeData.items, v, x, W],
            ),
            Q = c.a.useCallback(
              function () {
                p.scribe({ action: 'impression', data: X })
              },
              [p, X],
            )
          if (
            (c.a.useEffect(
              function () {
                Q()
              },
              [Q],
            ),
            !a)
          )
            return null
          var J,
            Y,
            Z = d || {},
            $ = Z.contextImageUrls,
            ee = Z.landingUrl,
            te = Z.text,
            ae = w ? { url: w, height: 750, width: 1250 } : void 0,
            ne = { pathname: v, external: !0 },
            re = function (e) {
              if ((p.scribe({ element: m ? 'read_article' : 'article_header', action: 'open_link', data: X }), V)) {
                var a = new P.a(i, n()).getAdFreeArticlesClickHandler({
                    destinationUrl: v,
                    linkDomain: f,
                    adFreeArticleDomains: t,
                  }),
                  r = o()(a, 2),
                  l = r[0],
                  c = r[1]
                l && c(e)
              }
            },
            ie = function () {
              p.scribe({ element: 'conversation_view', action: 'click', data: X })
            },
            oe = ee ? b.getLinkFromUrtUrl(ee) : void 0,
            le = oe ? b.withAnchorless(oe) : void 0,
            ce = le
              ? r()(
                  r()({}, le),
                  {},
                  {
                    pathname: ''
                      .concat(le.pathname, '?time_window=')
                      .concat(
                        ((Y = null == l || null === (J = l.query) || void 0 === J ? void 0 : J.time_window),
                        Number(Y) || 24),
                      ),
                  },
                )
              : void 0,
            se = c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                E.a,
                { style: N.horizontalContainer },
                c.a.createElement(
                  E.a,
                  { style: N.textContainer },
                  c.a.createElement(
                    S.a,
                    { style: N.middotGroup },
                    x &&
                      c.a.createElement(
                        B.b,
                        { color: 'gray700', nativeID: K.domain, size: 'subtext2', weight: 'bold' },
                        x,
                      ),
                    k &&
                      c.a.createElement(
                        B.b,
                        { color: 'gray700', nativeID: K.timestamp, size: 'subtext2' },
                        c.a.createElement(I.a, { timestamp: k }),
                      ),
                  ),
                  c.a.createElement(
                    B.b,
                    {
                      color: 'text',
                      link: ce,
                      nativeID: K.title,
                      numberOfLines: 3,
                      size: 'headline2',
                      style: N.text,
                      weight: 'bold',
                      withInteractiveStyling: !1,
                    },
                    q,
                  ),
                  g ? c.a.createElement(B.b, { nativeID: K.description, numberOfLines: 2 }, g) : null,
                  W &&
                    c.a.createElement(E.a, { nativeID: K.adFree, style: N.adFreeLabel }, c.a.createElement(F.a, null)),
                  m
                    ? c.a.createElement(
                        E.a,
                        { style: N.buttonContainer },
                        c.a.createElement(T.a, { link: ne, onClick: re, size: 'xSmall', type: 'primaryOutlined' }, U),
                      )
                    : null,
                ),
                ae
                  ? c.a.createElement(
                      E.a,
                      { style: N.imageContainer },
                      c.a.createElement(
                        R.a,
                        { ratio: z.a.theme.aspectRatios.square },
                        c.a.createElement(H.a, { accessibilityLabel: '', aspectMode: D.a.SQUARE, image: ae }),
                      ),
                    )
                  : null,
              ),
              c.a.createElement(O.a, {
                contextType: 'Facepile',
                iconSize: 'large',
                nativeID: K.socialContext,
                text: te,
                textSize: 'subtext2',
                userAvatarUrls: $,
                withLeftPadding: !1,
                withTextCentered: !0,
              }),
            )
          return m
            ? c.a.createElement(s.a, { exact: !1, path: (null == ce ? void 0 : ce.pathname) || '' }, function (e) {
                return c.a.createElement(
                  M.a,
                  {
                    accessibilityLabelledBy: G,
                    accessibilityRole: 'article',
                    accessibilityState: { selected: e },
                    link: ce,
                    onClick: ie,
                    style: N.container,
                  },
                  se,
                )
              })
            : c.a.createElement(j.a, { link: ne, onClick: re, style: [N.container, N.bottomBorder] }, se)
        }),
      )
    },
    x0mb: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        l = a('Lsrn'),
        c = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
  },
])
//# sourceMappingURL=WIPED
