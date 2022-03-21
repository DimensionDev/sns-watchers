;(window.webpackJsonp = window.webpackJsonp || []).push([
  [210],
  {
    Nqmc: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        v = (n('hBvt'), n('uFXj'), n('2G9S'), n('SV7d')),
        g = n('ERkP'),
        f = n.n(g),
        y = n('t62R'),
        b = n('5mJL'),
        C = n('nBUg'),
        x = n('qjak'),
        E = n('dC06'),
        w = n('rHpw'),
        S = n('XIXT'),
        k = n('yDX5'),
        T = n('MWbm'),
        I = [
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
        P = { viewType: 'social_context' },
        M = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.avatarSize,
                    r = t.bottomControl,
                    o = t.iconStyle,
                    i = t.nativeID,
                    c = t.onLayout,
                    l = t.rightControl,
                    s = t.style,
                    u = t.testID,
                    d = t.textColor,
                    m = t.textSize,
                    p = t.topControl,
                    h = t.weight,
                    g = (t.withBottomBorder, t.withLeftPadding),
                    E = (t.withTextCentered, a()(t, I)),
                    w = Object(x.a)(E),
                    S = w.Icon,
                    k = w.accessibilityLabel,
                    M = w.link,
                    F = w.text,
                    R = f.a.createElement(
                      y.b,
                      { accessibilityLabel: k, color: d, nativeID: i, numberOfLines: 2, size: m, testID: u, weight: h },
                      F,
                    ),
                    O = this._getStyles(),
                    B = O.cellStyle,
                    H = O.viewStyle
                  return F
                    ? f.a.createElement(C.b.UseProps, null, function (t) {
                        return f.a.createElement(
                          v.a,
                          { behavioralEventContext: P },
                          f.a.createElement(
                            f.a.Fragment,
                            null,
                            p || null,
                            f.a.createElement(
                              T.a,
                              {
                                onLayout: c,
                                style: [s, H, t.socialContextRefreshEnabled() && !g && L.socialContextRefresh],
                              },
                              f.a.createElement(
                                b.a,
                                {
                                  avatarCell: S || (g ? null : void 0),
                                  avatarCellStyle: [
                                    o,
                                    L.socialContextIconColumn,
                                    !g && L.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !g && L.socialContextRefreshIcon,
                                  ],
                                  avatarSize: n,
                                  cellStyle: B,
                                },
                                f.a.createElement(
                                  T.a,
                                  { style: L.cellWrapper },
                                  f.a.createElement(
                                    T.a,
                                    {
                                      style: [
                                        L.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !g && L.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    M ? e._renderLink(M, R) : R,
                                  ),
                                  l || null,
                                ),
                              ),
                              r || null,
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
                  var n = this.props,
                    r = n.contextType,
                    a = n.nativeID,
                    o = n.onClick,
                    i = n.retweetData,
                    c = n.textColor,
                    l = n.topicData,
                    s = (i || {}).screenName,
                    u = f.a.createElement(y.b, { color: c, link: e, nativeID: a, onClick: o }, t)
                  return r === E.a.Topic && l
                    ? f.a.createElement(S.a, { topicId: l.topicId }, u)
                    : r === E.a.Retweet && s
                    ? f.a.createElement(k.a, { screenName: s }, u)
                    : u
                },
              },
              {
                key: '_getStyles',
                value: function () {
                  var e = this.props,
                    t = e.bottomControl,
                    n = e.contextType,
                    r = e.withBottomBorder,
                    a = e.withTextCentered,
                    o = n === E.a.TextOnly,
                    i = r ? [L.bottomBorderMargin, t && L.bottomBorder] : [],
                    c = r && !t ? [L.bottomBorder] : []
                  return (
                    o && c.push(L.topicContext),
                    a && c.push(L.socialContextTextCentered),
                    { viewStyle: i, cellStyle: c }
                  )
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent)
      h()(M, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var L = w.a.create(function (e) {
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
      t.a = M
    },
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        i = Object(o.a)({
          loader: function () {
            return n.e(174).then(n.bind(null, 'ACNv'))
          },
        }),
        c = n('4bW+'),
        l = n('IG7M'),
        s = n('rHpw'),
        u = n('Irs7'),
        d = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          n = e.feedbackItems,
          r = e.isDisplayedOnMedia
        if (n && n.length > 0) {
          return a.a.createElement(l.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return a.a.createElement(i, { actionItems: n, onClose: e })
            },
            style: d.curationControl,
            testID: c.a.caret,
            withDarkBackground: r,
          })
        }
        return null
      })
    },
    aPcQ: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M20 16H5.81l2.72-2.72c.294-.293.294-.768 0-1.06s-.767-.294-1.06 0l-4 4c-.293.292-.293.767 0 1.06l4 4c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06L5.81 17.5H20c.414 0 .75-.337.75-.75S20.414 16 20 16zm.53-9.28l-4-4c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l2.72 2.72H4c-.414 0-.75.337-.75.75S3.586 8 4 8h14.19l-2.72 2.72c-.294.293-.294.768 0 1.06.146.147.338.22.53.22s.384-.073.53-.22l4-4c.293-.293.293-.767 0-1.06z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    dC06: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('yH/f'), n('ERkP')
      var r = Object.freeze({
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
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('VrFO'),
        l = n.n(c),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        v = n('2VqO'),
        g = n.n(v),
        f = n('KEM+'),
        y = n.n(f),
        b = (n('2G9S'), n('ERkP')),
        C = n.n(b),
        x = n('nT9l'),
        E = n('3XMw'),
        w = n.n(E),
        S = 'image',
        k = n('TIdA'),
        T = n('a6qo'),
        I = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        P = w.a.f93bb3ee,
        M = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(m()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  o = e.props,
                  c = o.accessibilityLabel,
                  l = (o.hideAcceptOverlay, o.shouldShowAltLabel),
                  s = i()(o, I)
                return C.a.createElement(
                  C.a.Fragment,
                  null,
                  C.a.createElement(
                    k.a,
                    a()({}, s, { accessibilityLabel: c, onVariantSelection: n, previewMode: r, testID: S }),
                  ),
                  l ? C.a.createElement(T.a, { align: 'left', altLabel: c }) : null,
                )
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
                    t = e.hideAcceptOverlay,
                    n = e.image
                  return C.a.createElement(x.a, {
                    acceptLabel: P,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof n ? n : n.url,
                  })
                },
              },
            ]),
            n
          )
        })(C.a.Component)
    },
    qjak: function (e, t, n) {
      'use strict'
      n('hBvt'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        i = n('MAI/'),
        c = n('shC7'),
        l = n('dC06'),
        s = n('rHpw'),
        u = n('3XMw'),
        d = n.n(u),
        m = n('FITr'),
        p = n('yVEN'),
        h = n('uCrx'),
        v = n('6ZHn'),
        g = n('GcQN'),
        f = n('x0mb'),
        y = n('Hp3u'),
        b = n('yiKp'),
        C = n.n(b),
        x = n('Lsrn'),
        E = n('k/Ka'),
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [x.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z',
              }),
            ),
          )
        }
      w.metadata = { width: 24, height: 24 }
      var S = w,
        k = n('EHV7'),
        T = n('wpLu'),
        I = n('EfHu'),
        P = n('cOhU'),
        M = n('cap5'),
        L = n('r9x5'),
        F = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [x.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.75 12.257c-.038 0-.074-.003-.11-.008l-3.667-.54s-.28-.048-.292-.053c-.343-.07-.602-.372-.602-.735V6.417c0-.414.336-.75.75-.75s.75.336.75.75v5.115l3.28.483c.41.06.692.44.632.852-.055.372-.375.64-.74.64z',
              }),
            ),
          )
        }
      F.metadata = { width: 24, height: 24 }
      var R = F,
        O = n('0qK0'),
        B = n('aPcQ'),
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [x.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      H.metadata = { width: 24, height: 24 }
      var z = H,
        j = n('lUZE'),
        _ = d.a.jb767df7,
        D = d.a.bb3323fa,
        A = d.a.db0798ed,
        V = d.a.dc716ec8,
        W = function (e) {
          return a.a.createElement(o.b, { dir: c.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        N = function (e, t) {
          return t
            ? _
            : (function (e) {
                var t = W(e)
                return a.a.createElement(d.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        K = s.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        X = s.a.create(function (e) {
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
          n = e.iconSize,
          r = e.link,
          o = e.retweetData,
          c = e.text,
          s = e.topicData,
          u = e.userAvatarUrls,
          d = o || {},
          b = d.isSelfRetweet,
          C = d.name,
          x = d.screenName,
          E = (function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              r = K[t],
              o = [X.colorDeepGray, r],
              c = a.a.createElement(m.a, { style: o }),
              s = a.a.createElement(p.a, { style: o }),
              u = a.a.createElement(h.a, { style: o }),
              d = a.a.createElement(v.a, { style: o }),
              b = a.a.createElement(g.a, { style: o }),
              C = a.a.createElement(f.a, { style: X.circle }),
              x = a.a.createElement(y.a, { style: o }),
              E = a.a.createElement(S, { style: o }),
              w = a.a.createElement(k.a, { style: o }),
              F = a.a.createElement(T.a, { style: o }),
              H = a.a.createElement(I.a, { style: o }),
              _ = a.a.createElement(P.a, { style: o }),
              D = a.a.createElement(M.a, { style: o }),
              A = a.a.createElement(L.a, { style: o }),
              V = a.a.createElement(R, { style: o }),
              W = a.a.createElement(O.a, { style: o }),
              N = a.a.createElement(B.a, { style: o }),
              G = a.a.createElement(z, { style: o }),
              U = a.a.createElement(i.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: n }),
              q = a.a.createElement(j.a, { style: o })
            switch (e) {
              case l.a.Pin:
                return c
              case l.a.Retweet:
                return s
              case l.a.Like:
                return u
              case l.a.Follow:
                return d
              case l.a.Moment:
                return b
              case l.a.NewTweets:
                return C
              case l.a.Reply:
              case l.a.Conversation:
                return x
              case l.a.Feedback:
                return E
              case l.a.Topic:
                return w
              case l.a.List:
                return F
              case l.a.Location:
                return H
              case l.a.Community:
                return _
              case l.a.Spaces:
                return D
              case l.a.Sparkle:
                return A
              case l.a.SmartBlockExpiration:
                return V
              case l.a.SocialProof:
              case l.a.FollowFollowed:
                return G
              case l.a.FollowMutual:
                return N
              case l.a.FollowFollowing:
                return W
              case l.a.Facepile:
                return U
              case l.a.Bird:
                return q
              case l.a.TextOnly:
              default:
                return null
            }
          })(t, n, u)
        switch (t) {
          case l.a.Retweet:
            return { Icon: E, text: c || N(C, b), link: x ? 'https://twitter.com/'.concat(x) : void 0 }
          case l.a.Pin:
            return { Icon: E, text: c || D }
          case l.a.Topic:
            return {
              Icon: E,
              accessibilityLabel:
                'Recommendation' === (null == s ? void 0 : s.functionalityType) ||
                'RecWithEducation' === (null == s ? void 0 : s.functionalityType)
                  ? V({ topicName: c })
                  : A({ topicName: c }),
              text: c ? W(c) : null,
              link: r,
            }
          default:
            return { Icon: E, text: c ? W(c) : null, link: r }
        }
      }
    },
    r9x5: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
                d: 'M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zM7.413 4.562c0-.414-.336-.75-.75-.75h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75zm1.785 14.872h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    'tg+X': function (e, t, n) {
      'use strict'
      n('hBvt'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        i = n('3XMw'),
        c = n.n(i),
        l = n('rHpw'),
        s = function (e) {
          var t = e.groupedTrends,
            n = e.linkColor,
            r = e.textColor,
            i = u(t, n)
          return i ? a.a.createElement(o.b, { color: r, numberOfLines: 2, size: 'subtext2', style: h.root }, i) : null
        }
      s.defaultProps = { textColor: 'gray700' }
      var u = function (e, t) {
          return e.length >= 2 ? m(e, t) : 1 === e.length ? d(e[0], t) : null
        },
        d = function (e, t) {
          return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'fe7c309b' }, p(e, t, !0))
        },
        m = function (e, t) {
          return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'ea753bf4' }, p(e[0], t, !0), p(e[1], t))
        },
        p = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return a.a.createElement(
            o.b,
            { color: t, link: e.link, size: 'subtext2', style: n && h.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        h = l.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = s
    },
    uuEz: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ezF+'),
        i = n('VPAj'),
        c = n('97Jx'),
        l = n.n(c),
        s = n('m3Bd'),
        u = n.n(s),
        d = n('ERkP'),
        m = n.n(d),
        p = (n('z84I'), n('ho0z'), n('k+3s')),
        h = n('x5Pi'),
        v = n('tI3i'),
        g = n.n(v),
        f = n('6rlp'),
        y = n('caTy'),
        b = n('Zejx'),
        C = n('G6rE'),
        x = n('rxPX'),
        E = n('0KEI'),
        w = function (e, t) {
          return t.entry.content
        },
        S = function (e, t) {
          var n = w(0, t),
            r = n.socialContext && n.socialContext.topicContext && n.socialContext.topicContext.topicId
          return r ? b.a.select(e, r) : void 0
        },
        k = function (e, t) {
          var n = w(0, t).publisherId
          return n ? C.e.select(e, n) : void 0
        },
        T = Object(x.a)()
          .propsFromState(function () {
            return { eventSummary: w, publisher: k, topic: S }
          })
          .adjustStateProps(function (e) {
            var t = e.eventSummary,
              n = e.publisher,
              r = e.topic,
              a = t.displayType,
              o = t.groupedTrends,
              i = t.promotedMetadata,
              c = t.richContext,
              l = Object(y.b)(t.url)
            g()(l, 'link cannot be undefined in EventSummaryHero')
            var s = Object(h.d)({
                isCellWithProminentSocialContext: a === p.a.CellWithProminentSocialContext,
                socialContext: t.socialContext,
                topic: r,
              }),
              u = (o || []).map(function (e) {
                return { name: e.name, link: Object(y.b)(e.url) }
              })
            return {
              badge: t.badge,
              displayType: t.displayType,
              groupedTrends: u,
              image: t.image,
              link: l,
              promotedMetadata: i,
              publisher: n,
              richContext: c,
              socialContext: s,
              supportingText: t.supportingText,
              timeString: t.timeString,
              title: t.title,
            }
          })
          .propsFromActions(function () {
            return {
              logTrend: f.c,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('URT_EVENT_SUMMARY'),
            }
          })
          .withAnalytics(),
        I = (n('hBvt'), n('xZmF')),
        P = n('wtjx'),
        M = n('P1r1'),
        L = function (e, t) {
          return t.entry.content
        },
        F = function (e, t) {
          var n = L(0, t),
            r = n.socialContext && n.socialContext.topicContext && n.socialContext.topicContext.topicId
          return r ? b.a.select(e, r) : void 0
        },
        R = function (e, t) {
          return t.entry.content.displayType === p.a.CellWithProminentSocialContext
        },
        O = Object(x.a)()
          .propsFromState(function () {
            return { dataSaverMode: M.j, eventSummary: L, hasProminentSocialContext: R, topic: F }
          })
          .adjustStateProps(function (e) {
            var t,
              n = e.dataSaverMode,
              r = e.eventSummary,
              a = e.hasProminentSocialContext,
              o = e.topic
            if (a && r.scoreEvent) {
              var i = r.scoreEvent,
                c = i.category,
                l = i.eventState,
                s = i.gameClock,
                u = i.gameClockPeriod,
                d = i.participants
              t = {
                category: c,
                eventState: l,
                gameClock: s,
                gameClockPeriod: u,
                startTimeMillis: i.startTimeMillis,
                participants: d,
                winnerId: i.winnerId,
              }
            }
            return { dataSaverMode: n, hasProminentSocialContext: a, id: r.id, scoreEvent: t, topic: o }
          })
          .propsFromActions(function () {
            return { saveAsRecentSearch: P.a }
          }),
        B = n('RoyM'),
        H = (n('KqXw'), n('WNMA'), n('MvUL'), n('0mK8')),
        z = n('rcen'),
        j = n('MWbm'),
        _ = n('pjBI'),
        D = n('t62R'),
        A = n('tg+X'),
        V = n('e5HP'),
        W = n('jV+4'),
        N = n('Nxr7'),
        K = n('Wms4'),
        X = n('rHpw'),
        G = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        U = function (e) {
          var t = e.badge,
            n = e.groupedTrends,
            r = e.hasProminentSocialContext,
            a = e.linkColor,
            o = e.promotedContent,
            i = e.promotedTrendDescription,
            c = e.publisher,
            l = e.publisherTitleColor,
            s = void 0 === l ? 'text' : l,
            u = e.richContext,
            d = e.scoreEvent,
            p = e.shouldTruncateTitle,
            h = e.style,
            v = e.supportingText,
            g = e.textColor,
            f = void 0 === g ? 'gray700' : g,
            y = e.timeString,
            b = e.title,
            C = e.titleFontSize,
            x = void 0 === C ? 'body' : C,
            E = e.titleWeight,
            w = void 0 === E ? 'bold' : E,
            S = b.replace('#', '').charAt(0).match(G) ? 'rtl' : 'ltr',
            k = r ? void 0 : Q.title
          return m.a.createElement(
            j.a,
            { style: h },
            r
              ? null
              : m.a.createElement(
                  _.a,
                  { color: f, style: Q.aboveTitle },
                  v ? m.a.createElement(D.b, { color: f, numberOfLines: 1, size: 'subtext2' }, v) : null,
                  c ? m.a.createElement(H.a, { author: c, color: s, size: 'subtext2' }) : null,
                  t || y ? J(y, t, f) : null,
                ),
            m.a.createElement(
              D.b,
              { color: s, dir: S, numberOfLines: p ? 3 : void 0, size: x, style: k, weight: w, withHashflags: !0 },
              b,
            ),
            m.a.createElement(A.a, { groupedTrends: n, linkColor: a, textColor: f }),
            r
              ? m.a.createElement(
                  j.a,
                  { style: Q.belowTitle },
                  d
                    ? Y(d)
                    : (t || y) && c
                    ? q({ badge: t, publisher: c, textColor: f, timeString: y }) || J(y, t, f)
                    : null,
                )
              : null,
            o && o.advertiser
              ? m.a.createElement(
                  m.a.Fragment,
                  null,
                  m.a.createElement(D.b, { color: f }, i),
                  m.a.createElement(V.a, { color: 'white', promotedContent: o, style: Q.promotedIndicator }),
                )
              : null,
            u
              ? m.a.createElement(z.a, { color: f, entities: u.entities, rtl: u.rtl, size: 'subtext2', text: u.text })
              : null,
          )
        },
        q = function (e) {
          var t = e.badge,
            n = e.publisher,
            r = e.textColor,
            a = e.timeString,
            o = m.a.createElement(W.a, {
              isProtected: n.protected,
              isVerified: n.verified,
              name: n.name,
              nameSize: 'subtext2',
              profileImageUrl: n.profile_image_url_https,
            })
          return m.a.createElement(_.a, { style: Q.publisherRow }, o, J(a, t, r))
        },
        Y = function (e) {
          var t = e.category,
            n = e.eventState,
            r = e.gameClock,
            a = e.gameClockPeriod,
            o = e.participants,
            i = e.startTimeMillis,
            c = e.winnerId
          return m.a.createElement(N.a, {
            category: t,
            gameClock: r,
            gameClockPeriod: a,
            gameState: n,
            startTimeMillis: i,
            teams: o,
            winnerId: c,
            withCategory: !1,
          })
        },
        J = function (e, t, n) {
          return t && t.text
            ? m.a.createElement(K.a, { type: 'live' }, t.text)
            : e
            ? m.a.createElement(
                j.a,
                { style: Q.timestamp },
                m.a.createElement(D.b, { color: n, numberOfLines: 1, size: 'subtext2' }, e),
              )
            : null
        },
        Q = X.a.create(function (e) {
          return {
            aboveTitle: { alignItems: 'center', flexDirection: 'row' },
            belowTitle: { marginTop: e.spaces.space4 },
            promotedIndicator: { marginTop: e.spaces.space12 },
            publisherRow: { alignItems: 'center' },
            timestamp: { maxWidth: '50%' },
            title: { marginVertical: e.spaces.space2 },
          }
        }),
        Z = m.a.memo(U),
        $ = n('PbbS'),
        ee = n('LWCC'),
        te = n('9B+1'),
        ne = n('8bWS'),
        re = n('3IPs'),
        ae = n('qbku'),
        oe = n('X04g'),
        ie = n('PbQQ'),
        ce = n('htQn'),
        le = n('5mJL'),
        se = n('21zW'),
        ue = n('hxu0'),
        de = function (e) {
          var t = e.badge,
            n = e.dataSaverMode,
            r = e.feedbackItems,
            a = e.groupedTrends,
            o = e.hasProminentSocialContext,
            i = e.id,
            c = e.image,
            l = e.isInSidebar,
            s = e.link,
            u = e.onClick,
            d = e.onImpression,
            p = e.publisher,
            h = e.richContext,
            v = e.saveAsRecentSearch,
            g = e.scoreEvent,
            f = e.shouldStoreTypeaheadItem,
            y = e.socialContext,
            b = e.supportingText,
            C = e.timeString,
            x = e.title,
            E = e.topic
          m.a.useEffect(function () {
            d && d()
          }, [])
          var w = m.a.useCallback(
              function () {
                u(),
                  v &&
                    f &&
                    f(oe.a.ItemType.EVENT) &&
                    v({
                      event: {
                        id: i,
                        image: c || { url: '', height: 0, width: 0 },
                        supportText: b,
                        title: x,
                        type: re.a.Event,
                      },
                    })
              },
              [i, c, u, v, f, b, x],
            ),
            S = m.a.useMemo(
              function () {
                return null != r && r.length ? m.a.createElement(B.a, { feedbackItems: r }) : null
              },
              [r],
            )
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              ce.a,
              { link: e.withAnchorless(s), onClick: w, style: he.rootLink, withDarkerInteractiveBackground: l },
              o && y
                ? m.a.createElement(
                    le.a,
                    { rightControl: S, style: he.socialContextRow },
                    m.a.createElement(pe, { socialContext: y, topic: E }),
                  )
                : null,
              m.a.createElement(
                j.a,
                { style: he.row },
                m.a.createElement(Z, {
                  badge: t,
                  groupedTrends: a,
                  hasProminentSocialContext: o,
                  publisher: p,
                  richContext: h,
                  scoreEvent: g,
                  style: he.details,
                  supportingText: b,
                  timeString: C,
                  title: x,
                }),
                m.a.createElement(I.a, {
                  dataSaverMode: n,
                  icon: 'news',
                  image: c,
                  isCellWithProminentSocialContext: o,
                  scoreEvent: g,
                  type: o ? 'fixed' : void 0,
                }),
              ),
            )
          })
        },
        me = function (e) {
          var t = e.socialContext,
            n = e.topic,
            r = t.contextType,
            a = t.landingUrl,
            o = t.text,
            i = t.topicContext,
            c = i && Object(ne.c)(i),
            l = m.a.useMemo(
              function () {
                return n
                  ? m.a.createElement(
                      m.a.Fragment,
                      null,
                      m.a.createElement(se.a, { style: he.topicMiddot }),
                      m.a.createElement(ee.a, {
                        isTransparent: !0,
                        size: 'smallCompact',
                        textMode: $.a.FollowTopic,
                        topic: n,
                      }),
                    )
                  : null
              },
              [n],
            )
          return m.a.createElement(ae.a, {
            contextType: r,
            link: a ? Object(y.b)(a) : void 0,
            rightControl: c ? l : void 0,
            text: o,
            topicData: n && i ? Object(te.a)(i) : void 0,
            weight: 'bold',
            withLeftPadding: !1,
          })
        },
        pe = m.a.memo(me),
        he = X.a.create(function (e) {
          return {
            details: { flex: 1, marginRight: e.spaces.space12 },
            topicMiddot: { alignSelf: 'center', paddingRight: 0 },
            rootLink: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            row: { flexDirection: 'row' },
            socialContextRow: { justifyContent: 'space-between', marginBottom: e.spaces.space4 },
          }
        }),
        ve = Object(ue.a)(O(m.a.memo(de))),
        ge = (n('hBpG'), n('7x/C'), n('29/U')),
        fe = n('Fg8X'),
        ye = n('XOJV'),
        be = function (e, t) {
          return t.entry.content
        },
        Ce = function (e, t) {
          var n,
            r,
            a,
            o =
              null === (n = t.entry.content.media) ||
              void 0 === n ||
              null === (r = n.mediaEntity) ||
              void 0 === r ||
              null === (a = r.tweetMedia) ||
              void 0 === a
                ? void 0
                : a.momentId
          return fe.a.select(e, o)
        },
        xe = function (e, t) {
          var n,
            r,
            a,
            o =
              null === (n = t.entry.content.media) ||
              void 0 === n ||
              null === (r = n.mediaEntity) ||
              void 0 === r ||
              null === (a = r.tweetMedia) ||
              void 0 === a
                ? void 0
                : a.tweetId
          return o ? ye.a.select(e, o) : void 0
        },
        Ee = function (e, t) {
          var n,
            r = null === (n = t.entry.content.promotedMetadata) || void 0 === n ? void 0 : n.advertiserId
          return r ? C.e.select(e, r) : void 0
        },
        we = function (e) {
          var t = e.eventSummary,
            n = e.tweet
          if (n) {
            var r,
              a,
              o,
              i,
              c = null === (r = t.media) || void 0 === r || null === (a = r.mediaKey) || void 0 === a ? void 0 : a.id
            return null === (o = n.extended_entities) || void 0 === o || null === (i = o.media) || void 0 === i
              ? void 0
              : i.find(function (e) {
                  return e.id_str === c
                })
          }
        },
        Se = Object(x.a)()
          .propsFromState(function () {
            return { advertiser: Ee, eventSummary: be, moment: Ce, tweet: xe }
          })
          .adjustStateProps(function (e) {
            var t = e.advertiser,
              n = e.eventSummary,
              r = e.moment,
              a = e.tweet,
              o = n.promotedMetadata
            return {
              coverMediaFromTweet: we({ tweet: a, eventSummary: n }),
              manualCrops: Object(ge.f)(r),
              promotedContent: o
                ? {
                    advertiser: { id_str: o.advertiserId },
                    advertiser_name: t ? t.name : void 0,
                    impression_id: o.impressionId,
                    disclosure_type: 'NoDisclosure',
                  }
                : void 0,
              promotedTrendDescription: o ? o.promotedTrendDescription : void 0,
              tweetId: null == a ? void 0 : a.id_str,
            }
          }),
        ke = n('VrFO'),
        Te = n.n(ke),
        Ie = n('Y9Ll'),
        Pe = n.n(Ie),
        Me = n('5Yy7'),
        Le = n.n(Me),
        Fe = n('2VqO'),
        Re = n.n(Fe),
        Oe = (n('2G9S'), n('prG5')),
        Be = n('Modb'),
        He = n('lklz'),
        ze = n('9Xij'),
        je = n('XrEN'),
        _e = n('3dad'),
        De = n('A91F'),
        Ae = { red: 0, green: 0, blue: 0 },
        Ve = (function (e) {
          Le()(n, e)
          var t = Re()(n)
          function n() {
            return Te()(this, n), t.apply(this, arguments)
          }
          return (
            Pe()(n, [
              {
                key: 'render',
                value: function () {
                  var e = X.a.theme.aspectRatios.landscape
                  return m.a.createElement(
                    ze.a,
                    { ratio: e },
                    m.a.createElement(
                      j.a,
                      { style: [We.maxHeightWidth, this._getBackgroundColorStyle()] },
                      this._renderCover(),
                    ),
                    m.a.createElement(j.a, { style: [X.a.absoluteFill, this._getGradientColorStyle()] }),
                  )
                },
              },
              {
                key: '_renderCover',
                value: function () {
                  var e = this.props,
                    t = e.coverMediaFromTweet,
                    n = e.image,
                    r = e.promotedContent,
                    a = e.tweetId
                  if (a && t && 'photo' !== t.type) {
                    var o = je.a.extractVideoProps(He.b.forTweet(a), t)
                    return m.a.createElement(
                      Be.a,
                      l()({}, o, {
                        aspectRatio: X.a.theme.aspectRatios.landscape,
                        displayOptions: { objectFitVideo: 'cover', hideLeftBadges: !0, hidePosterImage: !0 },
                        forceLoop: !0,
                        hideDataSaverAcceptOverlay: !0,
                        hidePreviewPlayButton: !0,
                        promotedContent: r,
                        showControls: !1,
                      }),
                    )
                  }
                  if (t) {
                    var i = t.ext_alt_text || '',
                      c = _e.a.getOriginalImage(t)
                    return this._renderCoverImage(c, i)
                  }
                  return this._renderCoverImage(n)
                },
              },
              {
                key: '_renderCoverImage',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
                  return e
                    ? m.a.createElement(Oe.a, {
                        accessibilityLabel: t,
                        aspectMode: De.a.exact(X.a.theme.aspectRatios.landscape),
                        cropCandidates: this._getCropCandidates(),
                        hideAcceptOverlay: !0,
                        image: e,
                      })
                    : null
                },
              },
              {
                key: '_getBackgroundColorStyle',
                value: function () {
                  var e = this._getDominantColor()
                  return {
                    backgroundColor: e
                      ? 'rgb('.concat(e.red, ',').concat(e.green, ',').concat(e.blue, ')')
                      : X.a.theme.colors.primary,
                  }
                },
              },
              {
                key: '_getGradientColorStyle',
                value: function () {
                  var e = Ae,
                    t = 'rgba('.concat(e.red, ',').concat(e.green, ',').concat(e.blue, ', 0.70)'),
                    n = 'rgba('.concat(e.red, ',').concat(e.green, ',').concat(e.blue, ', 0.80)')
                  return {
                    backgroundImage: 'linear-gradient(transparent 0%, transparent 25%, '
                      .concat(t, ' 75%, ')
                      .concat(n, ' 100%)'),
                  }
                },
              },
              {
                key: '_getCropCandidates',
                value: function () {
                  var e = this.props,
                    t = e.coverMediaFromTweet
                  return e.manualCrops || (t && _e.a.getCropCandidates(t))
                },
              },
              {
                key: '_getDominantColor',
                value: function () {
                  var e = this.props.coverMediaFromTweet
                  return e && _e.a.getBackgroundColor(e)
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        We = X.a.create(function (e) {
          return { maxHeightWidth: { height: '100%', width: '100%' } }
        }),
        Ne = 'eventHero',
        Ke = n('cm6r'),
        Xe = 'white',
        Ge = function (e) {
          var t = e.badge,
            n = e.coverMediaFromTweet,
            r = e.feedbackItems,
            a = e.groupedTrends,
            o = e.image,
            i = e.link,
            c = e.manualCrops,
            l = e.onClick,
            s = e.onImpression,
            u = e.promotedContent,
            d = e.promotedTrendDescription,
            p = e.publisher,
            h = e.richContext,
            v = e.supportingText,
            g = e.timeString,
            f = e.title,
            y = e.tweetId
          m.a.useEffect(function () {
            s && s()
          }, [])
          var b = f.length > 80 ? 'headline1' : 'title4'
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(
                Ke.a,
                { link: e.withAnchorless(i), onClick: l, testID: Ne },
                m.a.createElement(Ve, {
                  coverMediaFromTweet: n,
                  image: o,
                  manualCrops: c,
                  promotedContent: u,
                  tweetId: y,
                }),
                m.a.createElement(
                  j.a,
                  { style: [X.a.absoluteFill, Ue.details] },
                  m.a.createElement(Z, {
                    badge: t,
                    groupedTrends: a,
                    linkColor: Xe,
                    promotedContent: u,
                    promotedTrendDescription: d,
                    publisher: p,
                    publisherTitleColor: Xe,
                    richContext: h,
                    shouldTruncateTitle: !0,
                    supportingText: v,
                    textColor: Xe,
                    timeString: g,
                    title: f,
                    titleFontSize: b,
                    titleWeight: 'heavy',
                  }),
                ),
              ),
              null != r && r.length
                ? m.a.createElement(
                    j.a,
                    { style: Ue.menuContainer },
                    m.a.createElement(B.a, { feedbackItems: r, isDisplayedOnMedia: !0 }),
                  )
                : null,
            )
          })
        },
        Ue = X.a.create(function (e) {
          return {
            coverContainer: { width: '100%' },
            menuContainer: { position: 'absolute', top: e.spaces.space12, right: e.spaces.space16 },
            details: {
              justifyContent: 'flex-end',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        qe = Se(m.a.memo(Ge)),
        Ye = n('cFuS'),
        Je = ['analytics', 'createLocalApiErrorHandler', 'logTrend', 'promotedMetadata'],
        Qe = function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = e.logTrend,
            a = e.promotedMetadata,
            o = u()(e, Je),
            i = m.a.useCallback(
              function (e) {
                a &&
                  a.promotedTrendId &&
                  r({ promoted_trend_id: a.promotedTrendId, impression_id: a.impressionId, event: e }).catch(n())
              },
              [a, r, n],
            ),
            c = m.a.useCallback(
              function () {
                t.scribeAction('click'), i(Ye.d.SPOTLIGHT_CLICK)
              },
              [t, i],
            ),
            s = m.a.useCallback(
              function () {
                t.scribeAction('impression'), i(Ye.d.SPOTLIGHT_IMPRESSION)
              },
              [t, i],
            )
          switch (e.displayType) {
            case p.a.CellWithProminentSocialContext:
            case p.a.Cell:
              return m.a.createElement(ve, l()({}, o, { onClick: c, onImpression: s }))
            case p.a.Hero:
              return m.a.createElement(qe, l()({}, o, { onClick: c, onImpression: s }))
            default:
              return null
          }
        },
        Ze = T(m.a.memo(Qe)),
        $e = n('Rp9C')
      t.default = function (e) {
        return o
          .b({
            component: Ze,
            getScribeDataItem: function (e) {
              return (function (e) {
                var t = e.content.promotedMetadata,
                  n = e.content.id,
                  r = a()(
                    { item_type: oe.a.ItemType.EVENT, event_details: { event_id: n } },
                    $e.a.getAllSurfaceDetails(e.itemMetadata.clientEventInfo),
                  )
                return t && ((r.disclosure_type = t.disclosureType), (r.promoted_id = t.impressionId)), r
              })(e)
            },
            isFocusable: Object(i.a)(!0),
          })
          .getHandler(function () {
            return e
          })
      }
    },
    wtjx: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return h
      }),
        n.d(t, 'f', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return g
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return S
        }),
        n.d(t, 'c', function () {
          return k
        })
      var r = n('KEM+'),
        a = n.n(r),
        o = n('yiKp'),
        i = n.n(o),
        c = (n('7x/C'), n('JtPf'), n('LW0h'), n('Ee2X'), n('Ssj5')),
        l = n('RqPI'),
        s = 'recentSearches',
        u = 'rweb.recentSearches',
        d = function (e) {
          return function (t, n, r) {
            return r.userPersistence.set(u, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        m = function (e, t) {
          var n = []
          if (e && e.user) {
            var r = e.user
            n = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== r.id)
            })
          } else if (e && e.topic) {
            var a = e.topic
            n = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== a.id)
            })
          } else if (e && e.event) {
            var o = e.event
            n = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== o.id)
            })
          } else if (e && e.keyword) {
            var i = e.keyword
            n = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== i.query) || e.user || e.topic || e.event
            })
          }
          return n
        },
        p = { fetched: !1, recentSearches: [] }
      var h = function (e) {
          return e.recentSearches.recentSearches
        },
        v = function (e) {
          return h(e)[0] || null
        },
        g = function (e) {
          return e.recentSearches.fetched
        },
        f = 'rweb/recentSearches/INIT_FROM_CACHE',
        y = function (e) {
          return { type: f, payload: e }
        },
        b = 'rweb/recentSearches/REMOVE_QUERY',
        C = function (e) {
          return function (t, n, r) {
            r.userPersistence
            t({ payload: e, type: b })
            var a = n().recentSearches
            return Object(l.m)(n()) ? t(d(a.recentSearches)) : Promise.resolve()
          }
        },
        x = 'rweb/recentSearches/CLEAR_ALL',
        E = function () {
          return function (e, t, n) {
            n.userPersistence
            e({ type: x })
            var r = t().recentSearches
            return Object(l.m)(t()) ? e(d(r.recentSearches)) : Promise.resolve()
          }
        },
        w = 'rweb/recentSearches/ADD_QUERY',
        S = function (e) {
          return function (t, n, r) {
            r.userPersistence
            t({ payload: e, type: w })
            var a = n().recentSearches
            return Object(l.m)(n()) ? t(d(a.recentSearches)) : Promise.resolve()
          }
        },
        k = function () {
          return function (e, t, n) {
            n.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var r = n.userPersistence,
                    a = t()
                  return Object(l.m)(a)
                    ? r
                        .get(u)
                        .then(function (t) {
                          e(y(t))
                        })
                        .catch(function () {
                          e(y())
                        })
                    : (e(y()), Promise.resolve())
                })
          }
        }
      c.a.register(
        a()({}, s, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case w:
              var n = t.payload,
                r = n ? m(n, e.recentSearches) : []
              return r.length > 49 && r.splice(49, 1), n && r.unshift(n), i()(i()({}, e), {}, { recentSearches: r })
            case b:
              var a = t.payload,
                o = a ? m(a, e.recentSearches) : []
              return i()(i()({}, e), {}, { recentSearches: o })
            case x:
              return { fetched: !0, recentSearches: [] }
            case f:
              return i()(i()(i()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
    x0mb: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        l = n('k/Ka'),
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
            i.a.createElement(
              'g',
              null,
              i.a.createElement('path', {
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
