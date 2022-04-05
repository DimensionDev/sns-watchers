;(window.webpackJsonp = window.webpackJsonp || []).push([
  [209],
  {
    '0mK8': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return m
      }),
        a.d(t, 'b', function () {
          return p
        }),
        a.d(t, 'c', function () {
          return h
        })
      a('ho0z'), a('uFXj')
      var r = a('ERkP'),
        n = a.n(r),
        o = a('MWbm'),
        i = a('GcQN'),
        c = a('PU7B'),
        l = a('/WPq'),
        s = a('78ol'),
        u = a('jV+4'),
        d = a('rHpw'),
        m = function (e) {
          var t = e.author,
            a = e.color,
            r = void 0 === a ? 'text' : a,
            o = e.size,
            i = void 0 === o ? 'subtext2' : o,
            c = e.style,
            l = e.withHoverCard,
            s = void 0 === l || l,
            d = e.withLink,
            m = void 0 !== d && d,
            p = e.withScreenName,
            h = void 0 !== p && p
          return n.a.createElement(u.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[i],
            color: r,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: i,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: i,
            style: [g.authorUserName, c],
            withHoverCard: s,
            withLink: m,
            withScreenName: h,
          })
        },
        p = function (e) {
          var t = e.style
          return n.a.createElement(
            o.a,
            { style: [g.lightningBadge, t] },
            n.a.createElement(i.a, { style: g.lightningIcon }),
          )
        },
        h = function (e) {
          var t = e.icon
          return n.a.createElement(
            o.a,
            { style: g.placeholderIconContainer },
            'news' === t
              ? n.a.createElement(c.a, { style: g.placeholderIcon })
              : 'lists' === t
              ? n.a.createElement(l.a, { style: g.placeholderIcon })
              : n.a.createElement(s.a, { style: g.placeholderIcon }),
          )
        },
        g = d.a.create(function (e) {
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
    FITr: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            n()(
              n()({}, e),
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
                d: 'M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    GliE: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return d
      })
      a('2G9S'), a('hBpG'), a('7x/C')
      var r = a('ajvb'),
        n = a('3XMw'),
        o = a.n(n),
        i = a('qB1G'),
        c = o.a.a3484d21,
        l = o.a.aab2efa8,
        s = o.a.ba21c289,
        u = function (e) {
          return ''.concat(e.fullName || '', ' ').concat(e.score || '')
        },
        d = function (e, t, a, n, o) {
          var d =
              a && o
                ? (function (e, t) {
                    return e && t
                      ? e.find(function (e) {
                          return e.id === t
                        })
                      : void 0
                  })(a, o)
                : void 0,
            m = Object(r.a)(t),
            p = e || '',
            h = a && a[0] ? u(a[0]) : '',
            g = a && a[1] ? u(a[1]) : '',
            f = n || '',
            v = d ? l({ winner: d.fullName }) : '',
            y = t === i.a.Completed ? (d ? v : c) : f
          return s({ gameCategory: p, gameState: m, accessibleGameClockPeriod: y, teamOneLabel: h, teamTwoLabel: g })
        }
    },
    IJsT: function (e, t, a) {
      'use strict'
      a('hBvt')
      var r = a('ERkP'),
        n = a.n(r),
        o = a('I4+6'),
        i = a('cm6r'),
        c = a('rHpw'),
        l = a('MWbm'),
        s = function (e) {
          var t = e.accessibilityLabel,
            a = e.containerStyle,
            r = e.isCompact,
            s = e.link,
            d = e.lower,
            m = e.onClick,
            p = e.stackLayoutLowerStyle,
            h = e.stackLayoutUpperStyle,
            g = e.upper,
            f = e.withInsetFocusRing,
            v = e.withInteractiveStyling,
            y = o.a.generate({
              backgroundColor: c.a.theme.colors.transparent,
              color: c.a.theme.colors.primary,
              insetFocusRing: f,
            }),
            b = n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement(l.a, { style: [u.defaultUpperContainerStyle, h, r && { height: 'auto' }] }, g),
              d ? n.a.createElement(l.a, { style: [u.defaultLowerContainerStyle, p] }, d) : null,
            )
          return n.a.createElement(
            i.a,
            {
              accessibilityLabel: t,
              interactive: v,
              interactiveStyles: v ? y : void 0,
              link: s,
              onClick: m,
              style: [u.root, a],
            },
            b,
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
    Nqmc: function (e, t, a) {
      'use strict'
      var r = a('m3Bd'),
        n = a.n(r),
        o = a('VrFO'),
        i = a.n(o),
        c = a('Y9Ll'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        m = a.n(d),
        p = a('KEM+'),
        h = a.n(p),
        g = (a('hBvt'), a('uFXj'), a('2G9S'), a('SV7d')),
        f = a('ERkP'),
        v = a.n(f),
        y = a('t62R'),
        b = a('5mJL'),
        C = a('nBUg'),
        w = a('qjak'),
        E = a('dC06'),
        S = a('rHpw'),
        x = a('XIXT'),
        k = a('yDX5'),
        I = a('MWbm'),
        T = [
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
        R = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            return i()(this, a), t.apply(this, arguments)
          }
          return (
            l()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.avatarSize,
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
                    f = (t.withBottomBorder, t.withLeftPadding),
                    E = (t.withTextCentered, n()(t, T)),
                    S = Object(w.a)(E),
                    x = S.Icon,
                    k = S.accessibilityLabel,
                    R = S.link,
                    M = S.text,
                    _ = v.a.createElement(
                      y.b,
                      { accessibilityLabel: k, color: d, nativeID: i, numberOfLines: 2, size: m, testID: u, weight: h },
                      M,
                    ),
                    O = this._getStyles(),
                    F = O.cellStyle,
                    z = O.viewStyle
                  return M
                    ? v.a.createElement(C.b.UseProps, null, function (t) {
                        return v.a.createElement(
                          g.a,
                          { behavioralEventContext: P },
                          v.a.createElement(
                            v.a.Fragment,
                            null,
                            p || null,
                            v.a.createElement(
                              I.a,
                              {
                                onLayout: c,
                                style: [s, z, t.socialContextRefreshEnabled() && !f && L.socialContextRefresh],
                              },
                              v.a.createElement(
                                b.a,
                                {
                                  avatarCell: x || (f ? null : void 0),
                                  avatarCellStyle: [
                                    o,
                                    L.socialContextIconColumn,
                                    !f && L.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !f && L.socialContextRefreshIcon,
                                  ],
                                  avatarSize: a,
                                  cellStyle: F,
                                },
                                v.a.createElement(
                                  I.a,
                                  { style: L.cellWrapper },
                                  v.a.createElement(
                                    I.a,
                                    {
                                      style: [
                                        L.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !f && L.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    R ? e._renderLink(R, _) : _,
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
                  var a = this.props,
                    r = a.contextType,
                    n = a.nativeID,
                    o = a.onClick,
                    i = a.retweetData,
                    c = a.textColor,
                    l = a.topicData,
                    s = (i || {}).screenName,
                    u = v.a.createElement(y.b, { color: c, link: e, nativeID: n, onClick: o }, t)
                  return r === E.a.Topic && l
                    ? v.a.createElement(x.a, { topicId: l.topicId }, u)
                    : r === E.a.Retweet && s
                    ? v.a.createElement(k.a, { screenName: s }, u)
                    : u
                },
              },
              {
                key: '_getStyles',
                value: function () {
                  var e = this.props,
                    t = e.bottomControl,
                    a = e.contextType,
                    r = e.withBottomBorder,
                    n = e.withTextCentered,
                    o = a === E.a.TextOnly,
                    i = r ? [L.bottomBorderMargin, t && L.bottomBorder] : [],
                    c = r && !t ? [L.bottomBorder] : []
                  return (
                    o && c.push(L.topicContext),
                    n && c.push(L.socialContextTextCentered),
                    { viewStyle: i, cellStyle: c }
                  )
                },
              },
            ]),
            a
          )
        })(v.a.PureComponent)
      h()(R, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var L = S.a.create(function (e) {
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
      t.a = R
    },
    Nxr7: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return F
      })
      var r = a('VrFO'),
        n = a.n(r),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        m = a.n(d),
        p = a('KEM+'),
        h = a.n(p),
        g = (a('2G9S'), a('Blm6'), a('hBpG'), a('7x/C'), a('ERkP')),
        f = a.n(g),
        v = a('t62R'),
        y = 864e5,
        b = function (e) {
          var t = new Date().setHours(0, 0, 0, 0),
            a = t + y
          return e >= t && e < a ? 0 : e >= a && e < t + 1728e5 ? 1 : -1
        },
        C = a('3XMw'),
        w = a.n(C),
        E = a('pjBI'),
        S = a('gmfB'),
        x = w.a.ccaa970e,
        k = w.a.d725a288,
        I = w.a.db355331,
        T = w.a.a8428d5e,
        P = w.a.a7aad8b9,
        R = w.a.e431f1aa,
        L = w.a.a7391707,
        M = w.a.d2dbfa91,
        _ = w.a.cd734f65,
        O = w.a.c8891d06,
        F = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_renderCategory', function () {
                var t = e.props.category
                return t
                  ? f.a.createElement(v.b, { align: 'left', numberOfLines: 1, size: 'subtext2', weight: 'bold' }, t)
                  : null
              }),
              h()(l()(e), '_renderGameScheduledDateTime', function () {
                var t = e.props.startTimeMillis
                if (t) {
                  var a = new Date(parseInt(t, 10)),
                    r = b(a)
                  return -1 === r ? e._renderDateTime(a) : e._renderTodayTomorrow(r, a)
                }
                return null
              }),
              h()(l()(e), '_renderTodayTomorrow', function (e, t) {
                var a = k(t)
                return f.a.createElement(
                  E.a,
                  null,
                  f.a.createElement(v.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, 0 === e ? _ : O),
                  f.a.createElement(v.b, { color: 'gray700', size: 'subtext2' }, a),
                )
              }),
              h()(l()(e), '_renderDateTime', function (e) {
                var t = k(e),
                  a = x(e)
                return f.a.createElement(
                  E.a,
                  null,
                  f.a.createElement(v.b, { color: 'gray700', size: 'subtext2', weight: 'bold' }, a),
                  f.a.createElement(v.b, { color: 'gray700', size: 'subtext2' }, t),
                )
              }),
              h()(l()(e), '_renderGameStateValue', function (t, a) {
                var r = e.props.gameClockPeriod,
                  n = e._getWinnerName(),
                  o = t && n ? I({ team: n }) : a && r ? r : void 0
                return o ? f.a.createElement(v.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, o) : null
              }),
              h()(l()(e), '_getWinnerName', function () {
                var t = e.props,
                  a = t.teams,
                  r = t.winnerId,
                  n =
                    a &&
                    a.find(function (e) {
                      return e.id === r
                    })
                return n && n.shortName
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.gameState,
                    a = e.withCategory,
                    r = t === S.a.Scheduled,
                    n = t === S.a.InProgress,
                    o = t === S.a.Completed
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    r
                      ? this._renderGameScheduledDateTime()
                      : f.a.createElement(
                          E.a,
                          null,
                          f.a.createElement(
                            v.b,
                            { color: n ? 'magenta500' : 'gray700', numberOfLines: 1, size: 'subtext2', weight: 'bold' },
                            (function (e) {
                              switch (e) {
                                case S.a.Scheduled:
                                  return T
                                case S.a.InProgress:
                                  return P
                                case S.a.Completed:
                                  return R
                                case S.a.Postponed:
                                  return L
                                case S.a.Cancelled:
                                  return M
                                default:
                                  return null
                              }
                            })(t),
                          ),
                          this._renderGameStateValue(o, n),
                        ),
                    a ? this._renderCategory() : null,
                  )
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      h()(F, 'defaultProps', { withCategory: !0 })
    },
    RoyM: function (e, t, a) {
      'use strict'
      var r = a('ERkP'),
        n = a.n(r),
        o = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('zb92')),
        i = Object(o.a)({
          loader: function () {
            return a.e(173).then(a.bind(null, 'ACNv'))
          },
        }),
        c = a('4bW+'),
        l = a('IG7M'),
        s = a('rHpw'),
        u = a('Irs7'),
        d = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          a = e.feedbackItems,
          r = e.isDisplayedOnMedia
        if (a && a.length > 0) {
          return n.a.createElement(l.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return n.a.createElement(i, { actionItems: a, onClose: e })
            },
            style: d.curationControl,
            testID: c.a.caret,
            withDarkBackground: r,
          })
        }
        return null
      })
    },
    aPcQ: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            n()(
              n()({}, e),
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
    ajvb: function (e, t, a) {
      'use strict'
      var r = a('3XMw'),
        n = a.n(r),
        o = a('qB1G'),
        i = n.a.f178e38c,
        c = n.a.b6da6b01,
        l = n.a.i9f615c8,
        s = n.a.f897267a,
        u = n.a.f93c4b69
      t.a = function (e) {
        switch (e) {
          case o.a.Scheduled:
            return i
          case o.a.InProgress:
            return c
          case o.a.Completed:
            return l
          case o.a.Postponed:
            return s
          case o.a.Cancelled:
            return u
          default:
            return ''
        }
      }
    },
    dC06: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      a('yH/f'), a('ERkP')
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
    gmfB: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      a('yH/f')
      var r = Object.freeze({
        Scheduled: 'Scheduled',
        InProgress: 'InProgress',
        Completed: 'Completed',
        Postponed: 'Postponed',
        Cancelled: 'Cancelled',
        Unused6: '_Unused6',
        Unused7: '_Unused7',
      })
    },
    jUPy: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return R
      })
      var r = a('VrFO'),
        n = a.n(r),
        o = a('Y9Ll'),
        i = a.n(o),
        c = a('1Pcy'),
        l = a.n(c),
        s = a('5Yy7'),
        u = a.n(s),
        d = a('2VqO'),
        m = a.n(d),
        p = a('KEM+'),
        h = a.n(p),
        g = (a('2G9S'), a('hBvt'), a('z84I'), a('ERkP')),
        f = a.n(g),
        v = a('IJsT'),
        y = a('Nxr7'),
        b = (a('yH/f'), a('TIdA')),
        C = a('t62R'),
        w = a('A91F'),
        E = a('gmfB'),
        S = a('rHpw'),
        x = a('MWbm'),
        k = Object.freeze({ SCORE: 'score', SECONDARY_SCORE: 'secondaryScore' }),
        I = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), 'state', { imageError: !1 }),
              h()(l()(e), '_renderTeamName', function () {
                var t = e.props.team.shortName
                return f.a.createElement(
                  x.a,
                  { style: T.teamNameContainer },
                  f.a.createElement(C.b, { color: 'white', numberOfLines: 1, weight: 'heavy' }, t),
                )
              }),
              h()(l()(e), '_renderImage', function () {
                var t = e.props,
                  a = t.isCompact,
                  r = t.team,
                  n = r.imageUrl,
                  o = r.logo,
                  i = e.state.imageError,
                  c = (!o && !n) || i ? T.translucent : {},
                  l = o ? w.a.exact(o.width / o.height) : w.a.SQUARE
                return f.a.createElement(
                  x.a,
                  { style: [T.imageContainer, c, a && T.compactImageContainer] },
                  f.a.createElement(b.a, {
                    accessibilityLabel: '',
                    aspectMode: l,
                    image: o || n || '',
                    onError: e._handleImageError,
                    rounded: !o,
                  }),
                )
              }),
              h()(l()(e), '_handleImageError', function () {
                e.setState({ imageError: !0 })
              }),
              h()(l()(e), '_renderScore', function () {
                var t = e.props,
                  a = t.gameState,
                  r = t.team,
                  n = t.winnerId,
                  o = r.id,
                  i = r.score,
                  c = r.secondaryScore,
                  l = o === n,
                  s = !n,
                  u = a === E.a.Completed && !l && !s,
                  d = e._shouldRenderScore(),
                  m = e._getTeamScoreSize(k.SCORE),
                  p = c ? e._getTeamScoreSize(k.SECONDARY_SCORE) : void 0
                return d
                  ? f.a.createElement(
                      x.a,
                      { style: [T.teamScore, u && T.losingTeamScore] },
                      f.a.createElement(C.b, { color: 'white', numberOfLines: 1, size: m, weight: 'heavy' }, i),
                      c
                        ? f.a.createElement(C.b, { color: 'white', numberOfLines: 1, size: p, weight: 'bold' }, c)
                        : null,
                    )
                  : null
              }),
              h()(l()(e), '_getTeamScoreSize', function (t) {
                var a = e.props,
                  r = a.isCompact
                if (!!!a.team.secondaryScore) return r ? 'headline1' : 'title4'
                switch (t) {
                  case k.SCORE:
                    return r ? 'subtext2' : 'headline1'
                  case k.SECONDARY_SCORE:
                    return r ? 'subtext3' : 'body'
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
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fallbackColor,
                    a = e.isCompact,
                    r = e.team.color,
                    n = {
                      backgroundColor:
                        (r && 'rgb('.concat(r.red, ', ').concat(r.green, ', ').concat(r.blue, ')')) ||
                        S.a.theme.colors[t],
                    },
                    o = this._shouldRenderScore(),
                    i = !a || !o
                  return f.a.createElement(
                    x.a,
                    { style: [T.root, n, a && T.compactRoot] },
                    this._renderImage(),
                    i ? this._renderTeamName() : null,
                    this._renderScore(),
                  )
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      h()(I, 'defaultProps', { isCompact: !1 })
      var T = S.a.create(function (e) {
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
        P = I,
        R = (function (e) {
          u()(a, e)
          var t = m()(a)
          function a() {
            var e
            n()(this, a)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(l()(e), '_renderGameStatus', function () {
                var t = e.props,
                  a = t.category,
                  r = t.gameClock,
                  n = t.gameClockPeriod,
                  o = t.gameState,
                  i = t.isCompact,
                  c = t.startTimeMillis,
                  l = t.teams,
                  s = t.winnerId
                return f.a.createElement(y.a, {
                  category: a,
                  gameClock: r,
                  gameClockPeriod: n,
                  gameState: o,
                  startTimeMillis: c,
                  teams: l,
                  winnerId: s,
                  withCategory: !i,
                })
              }),
              h()(l()(e), '_renderTeamRow', function (t, a) {
                var r = e.props,
                  n = r.gameState,
                  o = r.isCompact,
                  i = r.winnerId,
                  c = t.id
                return f.a.createElement(P, {
                  fallbackColor: a % 2 == 0 ? 'gray300' : 'gray700',
                  gameState: n,
                  isCompact: o,
                  key: c,
                  team: t,
                  winnerId: i,
                })
              }),
              e
            )
          }
          return (
            i()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    a = e.containerStyle,
                    r = e.isCompact,
                    n = e.link,
                    o = e.onClick,
                    i = e.teams
                  if (i) {
                    var c = i && i.map(this._renderTeamRow)
                    return f.a.createElement(v.a, {
                      accessibilityLabel: t,
                      containerStyle: a,
                      isCompact: r,
                      link: n,
                      lower: r ? void 0 : this._renderGameStatus(),
                      onClick: o,
                      upper: c,
                      withInteractiveStyling: !0,
                    })
                  }
                  return null
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      h()(R, 'defaultProps', { isCompact: !1 })
    },
    prG5: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return R
      })
      var r = a('97Jx'),
        n = a.n(r),
        o = a('m3Bd'),
        i = a.n(o),
        c = a('VrFO'),
        l = a.n(c),
        s = a('Y9Ll'),
        u = a.n(s),
        d = a('1Pcy'),
        m = a.n(d),
        p = a('5Yy7'),
        h = a.n(p),
        g = a('2VqO'),
        f = a.n(g),
        v = a('KEM+'),
        y = a.n(v),
        b = (a('2G9S'), a('ERkP')),
        C = a.n(b),
        w = a('nT9l'),
        E = a('3XMw'),
        S = a.n(E),
        x = 'image',
        k = a('TIdA'),
        I = a('a6qo'),
        T = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        P = S.a.f93bb3ee,
        R = (function (e) {
          h()(a, e)
          var t = f()(a)
          function a() {
            var e
            l()(this, a)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(m()(e), '_renderContent', function (t) {
                var a = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  o = e.props,
                  c = o.accessibilityLabel,
                  l = (o.hideAcceptOverlay, o.shouldShowAltLabel),
                  s = i()(o, T)
                return C.a.createElement(
                  C.a.Fragment,
                  null,
                  C.a.createElement(
                    k.a,
                    n()({}, s, { accessibilityLabel: c, onVariantSelection: a, previewMode: r, testID: x }),
                  ),
                  l ? C.a.createElement(I.a, { align: 'left', altLabel: c }) : null,
                )
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hideAcceptOverlay,
                    a = e.image
                  return C.a.createElement(w.a, {
                    acceptLabel: P,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof a ? a : a.url,
                  })
                },
              },
            ]),
            a
          )
        })(C.a.Component)
    },
    qB1G: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      a('yH/f')
      var r = Object.freeze({
        Scheduled: 'Scheduled',
        InProgress: 'InProgress',
        Completed: 'Completed',
        Postponed: 'Postponed',
        Cancelled: 'Cancelled',
        Unused6: '_Unused6',
        Unused7: '_Unused7',
      })
    },
    qjak: function (e, t, a) {
      'use strict'
      a('hBvt'), a('ho0z')
      var r = a('ERkP'),
        n = a.n(r),
        o = a('t62R'),
        i = a('MAI/'),
        c = a('shC7'),
        l = a('dC06'),
        s = a('rHpw'),
        u = a('3XMw'),
        d = a.n(u),
        m = a('FITr'),
        p = a('yVEN'),
        h = a('uCrx'),
        g = a('6ZHn'),
        f = a('GcQN'),
        v = a('x0mb'),
        y = a('Hp3u'),
        b = a('yiKp'),
        C = a.n(b),
        w = a('Lsrn'),
        E = a('k/Ka'),
        S = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            n.a.createElement(
              'g',
              null,
              n.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z',
              }),
            ),
          )
        }
      S.metadata = { width: 24, height: 24 }
      var x = S,
        k = a('EHV7'),
        I = a('wpLu'),
        T = a('EfHu'),
        P = a('cOhU'),
        R = a('cap5'),
        L = a('r9x5'),
        M = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            n.a.createElement(
              'g',
              null,
              n.a.createElement('path', {
                d: 'M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.75 12.257c-.038 0-.074-.003-.11-.008l-3.667-.54s-.28-.048-.292-.053c-.343-.07-.602-.372-.602-.735V6.417c0-.414.336-.75.75-.75s.75.336.75.75v5.115l3.28.483c.41.06.692.44.632.852-.055.372-.375.64-.74.64z',
              }),
            ),
          )
        }
      M.metadata = { width: 24, height: 24 }
      var _ = M,
        O = a('0qK0'),
        F = a('aPcQ'),
        z = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(E.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            n.a.createElement(
              'g',
              null,
              n.a.createElement('path', {
                d: 'M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z',
              }),
            ),
          )
        }
      z.metadata = { width: 24, height: 24 }
      var H = z,
        B = a('lUZE'),
        j = d.a.jb767df7,
        D = d.a.bb3323fa,
        A = d.a.db0798ed,
        N = d.a.dc716ec8,
        W = function (e) {
          return n.a.createElement(o.b, { dir: c.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        V = function (e, t) {
          return t
            ? j
            : (function (e) {
                var t = W(e)
                return n.a.createElement(d.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        G = s.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        U = s.a.create(function (e) {
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
          r = e.link,
          o = e.retweetData,
          c = e.text,
          s = e.topicData,
          u = e.userAvatarUrls,
          d = o || {},
          b = d.isSelfRetweet,
          C = d.name,
          w = d.screenName,
          E = (function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              r = G[t],
              o = [U.colorDeepGray, r],
              c = n.a.createElement(m.a, { style: o }),
              s = n.a.createElement(p.a, { style: o }),
              u = n.a.createElement(h.a, { style: o }),
              d = n.a.createElement(g.a, { style: o }),
              b = n.a.createElement(f.a, { style: o }),
              C = n.a.createElement(v.a, { style: U.circle }),
              w = n.a.createElement(y.a, { style: o }),
              E = n.a.createElement(x, { style: o }),
              S = n.a.createElement(k.a, { style: o }),
              M = n.a.createElement(I.a, { style: o }),
              z = n.a.createElement(T.a, { style: o }),
              j = n.a.createElement(P.a, { style: o }),
              D = n.a.createElement(R.a, { style: o }),
              A = n.a.createElement(L.a, { style: o }),
              N = n.a.createElement(_, { style: o }),
              W = n.a.createElement(O.a, { style: o }),
              V = n.a.createElement(F.a, { style: o }),
              K = n.a.createElement(H, { style: o }),
              X = n.a.createElement(i.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: a }),
              q = n.a.createElement(B.a, { style: o })
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
                return w
              case l.a.Feedback:
                return E
              case l.a.Topic:
                return S
              case l.a.List:
                return M
              case l.a.Location:
                return z
              case l.a.Community:
                return j
              case l.a.Spaces:
                return D
              case l.a.Sparkle:
                return A
              case l.a.SmartBlockExpiration:
                return N
              case l.a.SocialProof:
              case l.a.FollowFollowed:
                return K
              case l.a.FollowMutual:
                return V
              case l.a.FollowFollowing:
                return W
              case l.a.Facepile:
                return X
              case l.a.Bird:
                return q
              case l.a.TextOnly:
              default:
                return null
            }
          })(t, a, u)
        switch (t) {
          case l.a.Retweet:
            return { Icon: E, text: c || V(C, b), link: w ? 'https://twitter.com/'.concat(w) : void 0 }
          case l.a.Pin:
            return { Icon: E, text: c || D }
          case l.a.Topic:
            return {
              Icon: E,
              accessibilityLabel:
                'Recommendation' === (null == s ? void 0 : s.functionalityType) ||
                'RecWithEducation' === (null == s ? void 0 : s.functionalityType)
                  ? N({ topicName: c })
                  : A({ topicName: c }),
              text: c ? W(c) : null,
              link: r,
            }
          default:
            return { Icon: E, text: c ? W(c) : null, link: r }
        }
      }
    },
    r9x5: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            n()(
              n()({}, e),
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
    'tg+X': function (e, t, a) {
      'use strict'
      a('hBvt'), a('ho0z')
      var r = a('ERkP'),
        n = a.n(r),
        o = a('t62R'),
        i = a('3XMw'),
        c = a.n(i),
        l = a('rHpw'),
        s = function (e) {
          var t = e.groupedTrends,
            a = e.linkColor,
            r = e.textColor,
            i = u(t, a)
          return i ? n.a.createElement(o.b, { color: r, numberOfLines: 2, size: 'subtext2', style: h.root }, i) : null
        }
      s.defaultProps = { textColor: 'gray700' }
      var u = function (e, t) {
          return e.length >= 2 ? m(e, t) : 1 === e.length ? d(e[0], t) : null
        },
        d = function (e, t) {
          return n.a.createElement(c.a.I18NFormatMessage, { $i18n: 'fe7c309b' }, p(e, t, !0))
        },
        m = function (e, t) {
          return n.a.createElement(c.a.I18NFormatMessage, { $i18n: 'ea753bf4' }, p(e[0], t, !0), p(e[1], t))
        },
        p = function (e, t) {
          var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return n.a.createElement(
            o.b,
            { color: t, link: e.link, size: 'subtext2', style: a && h.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        h = l.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = s
    },
    uuEz: function (e, t, a) {
      'use strict'
      a.r(t)
      var r = a('yiKp'),
        n = a.n(r),
        o = a('ezF+'),
        i = a('VPAj'),
        c = a('97Jx'),
        l = a.n(c),
        s = a('m3Bd'),
        u = a.n(s),
        d = a('ERkP'),
        m = a.n(d),
        p = (a('z84I'), a('ho0z'), a('k+3s')),
        h = a('x5Pi'),
        g = a('tI3i'),
        f = a.n(g),
        v = a('6rlp'),
        y = a('caTy'),
        b = a('Zejx'),
        C = a('G6rE'),
        w = a('rxPX'),
        E = a('0KEI'),
        S = function (e, t) {
          return t.entry.content
        },
        x = function (e, t) {
          var a = S(0, t),
            r = a.socialContext && a.socialContext.topicContext && a.socialContext.topicContext.topicId
          return r ? b.a.select(e, r) : void 0
        },
        k = function (e, t) {
          var a = S(0, t).publisherId
          return a ? C.e.select(e, a) : void 0
        },
        I = Object(w.a)()
          .propsFromState(function () {
            return { eventSummary: S, publisher: k, topic: x }
          })
          .adjustStateProps(function (e) {
            var t = e.eventSummary,
              a = e.publisher,
              r = e.topic,
              n = t.displayType,
              o = t.groupedTrends,
              i = t.promotedMetadata,
              c = t.richContext,
              l = Object(y.b)(t.url)
            f()(l, 'link cannot be undefined in EventSummaryHero')
            var s = Object(h.d)({
                isCellWithProminentSocialContext: n === p.a.CellWithProminentSocialContext,
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
              publisher: a,
              richContext: c,
              socialContext: s,
              supportingText: t.supportingText,
              timeString: t.timeString,
              title: t.title,
            }
          })
          .propsFromActions(function () {
            return {
              logTrend: v.c,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('URT_EVENT_SUMMARY'),
            }
          })
          .withAnalytics(),
        T = (a('hBvt'), a('xZmF')),
        P = a('wtjx'),
        R = a('P1r1'),
        L = function (e, t) {
          return t.entry.content
        },
        M = function (e, t) {
          var a = L(0, t),
            r = a.socialContext && a.socialContext.topicContext && a.socialContext.topicContext.topicId
          return r ? b.a.select(e, r) : void 0
        },
        _ = function (e, t) {
          return t.entry.content.displayType === p.a.CellWithProminentSocialContext
        },
        O = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: R.j, eventSummary: L, hasProminentSocialContext: _, topic: M }
          })
          .adjustStateProps(function (e) {
            var t,
              a = e.dataSaverMode,
              r = e.eventSummary,
              n = e.hasProminentSocialContext,
              o = e.topic
            if (n && r.scoreEvent) {
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
            return { dataSaverMode: a, hasProminentSocialContext: n, id: r.id, scoreEvent: t, topic: o }
          })
          .propsFromActions(function () {
            return { saveAsRecentSearch: P.a }
          }),
        F = a('RoyM'),
        z = (a('KqXw'), a('WNMA'), a('MvUL'), a('0mK8')),
        H = a('rcen'),
        B = a('MWbm'),
        j = a('pjBI'),
        D = a('t62R'),
        A = a('tg+X'),
        N = a('e5HP'),
        W = a('jV+4'),
        V = a('Nxr7'),
        G = a('Wms4'),
        U = a('rHpw'),
        K = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        X = function (e) {
          var t = e.badge,
            a = e.groupedTrends,
            r = e.hasProminentSocialContext,
            n = e.linkColor,
            o = e.promotedContent,
            i = e.promotedTrendDescription,
            c = e.publisher,
            l = e.publisherTitleColor,
            s = void 0 === l ? 'text' : l,
            u = e.richContext,
            d = e.scoreEvent,
            p = e.shouldTruncateTitle,
            h = e.style,
            g = e.supportingText,
            f = e.textColor,
            v = void 0 === f ? 'gray700' : f,
            y = e.timeString,
            b = e.title,
            C = e.titleFontSize,
            w = void 0 === C ? 'body' : C,
            E = e.titleWeight,
            S = void 0 === E ? 'bold' : E,
            x = b.replace('#', '').charAt(0).match(K) ? 'rtl' : 'ltr',
            k = r ? void 0 : Q.title
          return m.a.createElement(
            B.a,
            { style: h },
            r
              ? null
              : m.a.createElement(
                  j.a,
                  { color: v, style: Q.aboveTitle },
                  g ? m.a.createElement(D.b, { color: v, numberOfLines: 1, size: 'subtext2' }, g) : null,
                  c ? m.a.createElement(z.a, { author: c, color: s, size: 'subtext2' }) : null,
                  t || y ? J(y, t, v) : null,
                ),
            m.a.createElement(
              D.b,
              { color: s, dir: x, numberOfLines: p ? 3 : void 0, size: w, style: k, weight: S, withHashflags: !0 },
              b,
            ),
            m.a.createElement(A.a, { groupedTrends: a, linkColor: n, textColor: v }),
            r
              ? m.a.createElement(
                  B.a,
                  { style: Q.belowTitle },
                  d
                    ? Y(d)
                    : (t || y) && c
                    ? q({ badge: t, publisher: c, textColor: v, timeString: y }) || J(y, t, v)
                    : null,
                )
              : null,
            o && o.advertiser
              ? m.a.createElement(
                  m.a.Fragment,
                  null,
                  m.a.createElement(D.b, { color: v }, i),
                  m.a.createElement(N.a, { color: 'white', promotedContent: o, style: Q.promotedIndicator }),
                )
              : null,
            u
              ? m.a.createElement(H.a, { color: v, entities: u.entities, rtl: u.rtl, size: 'subtext2', text: u.text })
              : null,
          )
        },
        q = function (e) {
          var t = e.badge,
            a = e.publisher,
            r = e.textColor,
            n = e.timeString,
            o = m.a.createElement(W.a, {
              isProtected: a.protected,
              isVerified: a.verified,
              name: a.name,
              nameSize: 'subtext2',
              profileImageUrl: a.profile_image_url_https,
            })
          return m.a.createElement(j.a, { style: Q.publisherRow }, o, J(n, t, r))
        },
        Y = function (e) {
          var t = e.category,
            a = e.eventState,
            r = e.gameClock,
            n = e.gameClockPeriod,
            o = e.participants,
            i = e.startTimeMillis,
            c = e.winnerId
          return m.a.createElement(V.a, {
            category: t,
            gameClock: r,
            gameClockPeriod: n,
            gameState: a,
            startTimeMillis: i,
            teams: o,
            winnerId: c,
            withCategory: !1,
          })
        },
        J = function (e, t, a) {
          return t && t.text
            ? m.a.createElement(G.a, { type: 'live' }, t.text)
            : e
            ? m.a.createElement(
                B.a,
                { style: Q.timestamp },
                m.a.createElement(D.b, { color: a, numberOfLines: 1, size: 'subtext2' }, e),
              )
            : null
        },
        Q = U.a.create(function (e) {
          return {
            aboveTitle: { alignItems: 'center', flexDirection: 'row' },
            belowTitle: { marginTop: e.spaces.space4 },
            promotedIndicator: { marginTop: e.spaces.space12 },
            publisherRow: { alignItems: 'center' },
            timestamp: { maxWidth: '50%' },
            title: { marginVertical: e.spaces.space2 },
          }
        }),
        Z = m.a.memo(X),
        $ = a('PbbS'),
        ee = a('LWCC'),
        te = a('9B+1'),
        ae = a('8bWS'),
        re = a('3IPs'),
        ne = a('qbku'),
        oe = a('X04g'),
        ie = a('PbQQ'),
        ce = a('htQn'),
        le = a('5mJL'),
        se = a('21zW'),
        ue = a('hxu0'),
        de = function (e) {
          var t = e.badge,
            a = e.dataSaverMode,
            r = e.feedbackItems,
            n = e.groupedTrends,
            o = e.hasProminentSocialContext,
            i = e.id,
            c = e.image,
            l = e.isInSidebar,
            s = e.link,
            u = e.onClick,
            d = e.onImpression,
            p = e.publisher,
            h = e.richContext,
            g = e.saveAsRecentSearch,
            f = e.scoreEvent,
            v = e.shouldStoreTypeaheadItem,
            y = e.socialContext,
            b = e.supportingText,
            C = e.timeString,
            w = e.title,
            E = e.topic
          m.a.useEffect(function () {
            d && d()
          }, [])
          var S = m.a.useCallback(
              function () {
                u(),
                  g &&
                    v &&
                    v(oe.a.ItemType.EVENT) &&
                    g({
                      event: {
                        id: i,
                        image: c || { url: '', height: 0, width: 0 },
                        supportText: b,
                        title: w,
                        type: re.a.Event,
                      },
                    })
              },
              [i, c, u, g, v, b, w],
            ),
            x = m.a.useMemo(
              function () {
                return null != r && r.length ? m.a.createElement(F.a, { feedbackItems: r }) : null
              },
              [r],
            )
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              ce.a,
              { link: e.withAnchorless(s), onClick: S, style: he.rootLink, withDarkerInteractiveBackground: l },
              o && y
                ? m.a.createElement(
                    le.a,
                    { rightControl: x, style: he.socialContextRow },
                    m.a.createElement(pe, { socialContext: y, topic: E }),
                  )
                : null,
              m.a.createElement(
                B.a,
                { style: he.row },
                m.a.createElement(Z, {
                  badge: t,
                  groupedTrends: n,
                  hasProminentSocialContext: o,
                  publisher: p,
                  richContext: h,
                  scoreEvent: f,
                  style: he.details,
                  supportingText: b,
                  timeString: C,
                  title: w,
                }),
                m.a.createElement(T.a, {
                  dataSaverMode: a,
                  icon: 'news',
                  image: c,
                  isCellWithProminentSocialContext: o,
                  scoreEvent: f,
                  type: o ? 'fixed' : void 0,
                }),
              ),
            )
          })
        },
        me = function (e) {
          var t = e.socialContext,
            a = e.topic,
            r = t.contextType,
            n = t.landingUrl,
            o = t.text,
            i = t.topicContext,
            c = i && Object(ae.c)(i),
            l = m.a.useMemo(
              function () {
                return a
                  ? m.a.createElement(
                      m.a.Fragment,
                      null,
                      m.a.createElement(se.a, { style: he.topicMiddot }),
                      m.a.createElement(ee.a, {
                        isTransparent: !0,
                        size: 'smallCompact',
                        textMode: $.a.FollowTopic,
                        topic: a,
                      }),
                    )
                  : null
              },
              [a],
            )
          return m.a.createElement(ne.a, {
            contextType: r,
            link: n ? Object(y.b)(n) : void 0,
            rightControl: c ? l : void 0,
            text: o,
            topicData: a && i ? Object(te.a)(i) : void 0,
            weight: 'bold',
            withLeftPadding: !1,
          })
        },
        pe = m.a.memo(me),
        he = U.a.create(function (e) {
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
        ge = Object(ue.a)(O(m.a.memo(de))),
        fe = (a('hBpG'), a('7x/C'), a('29/U')),
        ve = a('Fg8X'),
        ye = a('XOJV'),
        be = function (e, t) {
          return t.entry.content
        },
        Ce = function (e, t) {
          var a,
            r,
            n,
            o =
              null === (a = t.entry.content.media) ||
              void 0 === a ||
              null === (r = a.mediaEntity) ||
              void 0 === r ||
              null === (n = r.tweetMedia) ||
              void 0 === n
                ? void 0
                : n.momentId
          return ve.a.select(e, o)
        },
        we = function (e, t) {
          var a,
            r,
            n,
            o =
              null === (a = t.entry.content.media) ||
              void 0 === a ||
              null === (r = a.mediaEntity) ||
              void 0 === r ||
              null === (n = r.tweetMedia) ||
              void 0 === n
                ? void 0
                : n.tweetId
          return o ? ye.a.select(e, o) : void 0
        },
        Ee = function (e, t) {
          var a,
            r = null === (a = t.entry.content.promotedMetadata) || void 0 === a ? void 0 : a.advertiserId
          return r ? C.e.select(e, r) : void 0
        },
        Se = function (e) {
          var t = e.eventSummary,
            a = e.tweet
          if (a) {
            var r,
              n,
              o,
              i,
              c = null === (r = t.media) || void 0 === r || null === (n = r.mediaKey) || void 0 === n ? void 0 : n.id
            return null === (o = a.extended_entities) || void 0 === o || null === (i = o.media) || void 0 === i
              ? void 0
              : i.find(function (e) {
                  return e.id_str === c
                })
          }
        },
        xe = Object(w.a)()
          .propsFromState(function () {
            return { advertiser: Ee, eventSummary: be, moment: Ce, tweet: we }
          })
          .adjustStateProps(function (e) {
            var t = e.advertiser,
              a = e.eventSummary,
              r = e.moment,
              n = e.tweet,
              o = a.promotedMetadata
            return {
              coverMediaFromTweet: Se({ tweet: n, eventSummary: a }),
              manualCrops: Object(fe.f)(r),
              promotedContent: o
                ? {
                    advertiser: { id_str: o.advertiserId },
                    advertiser_name: t ? t.name : void 0,
                    impression_id: o.impressionId,
                    disclosure_type: 'NoDisclosure',
                  }
                : void 0,
              promotedTrendDescription: o ? o.promotedTrendDescription : void 0,
              tweetId: null == n ? void 0 : n.id_str,
            }
          }),
        ke = a('VrFO'),
        Ie = a.n(ke),
        Te = a('Y9Ll'),
        Pe = a.n(Te),
        Re = a('5Yy7'),
        Le = a.n(Re),
        Me = a('2VqO'),
        _e = a.n(Me),
        Oe = (a('2G9S'), a('prG5')),
        Fe = a('Modb'),
        ze = a('lklz'),
        He = a('9Xij'),
        Be = a('XrEN'),
        je = a('3dad'),
        De = a('A91F'),
        Ae = { red: 0, green: 0, blue: 0 },
        Ne = (function (e) {
          Le()(a, e)
          var t = _e()(a)
          function a() {
            return Ie()(this, a), t.apply(this, arguments)
          }
          return (
            Pe()(a, [
              {
                key: 'render',
                value: function () {
                  var e = U.a.theme.aspectRatios.landscape
                  return m.a.createElement(
                    He.a,
                    { ratio: e },
                    m.a.createElement(
                      B.a,
                      { style: [We.maxHeightWidth, this._getBackgroundColorStyle()] },
                      this._renderCover(),
                    ),
                    m.a.createElement(B.a, { style: [U.a.absoluteFill, this._getGradientColorStyle()] }),
                  )
                },
              },
              {
                key: '_renderCover',
                value: function () {
                  var e = this.props,
                    t = e.coverMediaFromTweet,
                    a = e.image,
                    r = e.promotedContent,
                    n = e.tweetId
                  if (n && t && 'photo' !== t.type) {
                    var o = Be.a.extractVideoProps(ze.b.forTweet(n), t)
                    return m.a.createElement(
                      Fe.a,
                      l()({}, o, {
                        aspectRatio: U.a.theme.aspectRatios.landscape,
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
                      c = je.a.getOriginalImage(t)
                    return this._renderCoverImage(c, i)
                  }
                  return this._renderCoverImage(a)
                },
              },
              {
                key: '_renderCoverImage',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
                  return e
                    ? m.a.createElement(Oe.a, {
                        accessibilityLabel: t,
                        aspectMode: De.a.exact(U.a.theme.aspectRatios.landscape),
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
                      : U.a.theme.colors.primary,
                  }
                },
              },
              {
                key: '_getGradientColorStyle',
                value: function () {
                  var e = Ae,
                    t = 'rgba('.concat(e.red, ',').concat(e.green, ',').concat(e.blue, ', 0.70)'),
                    a = 'rgba('.concat(e.red, ',').concat(e.green, ',').concat(e.blue, ', 0.80)')
                  return {
                    backgroundImage: 'linear-gradient(transparent 0%, transparent 25%, '
                      .concat(t, ' 75%, ')
                      .concat(a, ' 100%)'),
                  }
                },
              },
              {
                key: '_getCropCandidates',
                value: function () {
                  var e = this.props,
                    t = e.coverMediaFromTweet
                  return e.manualCrops || (t && je.a.getCropCandidates(t))
                },
              },
              {
                key: '_getDominantColor',
                value: function () {
                  var e = this.props.coverMediaFromTweet
                  return e && je.a.getBackgroundColor(e)
                },
              },
            ]),
            a
          )
        })(m.a.Component),
        We = U.a.create(function (e) {
          return { maxHeightWidth: { height: '100%', width: '100%' } }
        }),
        Ve = 'eventHero',
        Ge = a('cm6r'),
        Ue = 'white',
        Ke = function (e) {
          var t = e.badge,
            a = e.coverMediaFromTweet,
            r = e.feedbackItems,
            n = e.groupedTrends,
            o = e.image,
            i = e.link,
            c = e.manualCrops,
            l = e.onClick,
            s = e.onImpression,
            u = e.promotedContent,
            d = e.promotedTrendDescription,
            p = e.publisher,
            h = e.richContext,
            g = e.supportingText,
            f = e.timeString,
            v = e.title,
            y = e.tweetId
          m.a.useEffect(function () {
            s && s()
          }, [])
          var b = v.length > 80 ? 'headline1' : 'title4'
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(
                Ge.a,
                { link: e.withAnchorless(i), onClick: l, testID: Ve },
                m.a.createElement(Ne, {
                  coverMediaFromTweet: a,
                  image: o,
                  manualCrops: c,
                  promotedContent: u,
                  tweetId: y,
                }),
                m.a.createElement(
                  B.a,
                  { style: [U.a.absoluteFill, Xe.details] },
                  m.a.createElement(Z, {
                    badge: t,
                    groupedTrends: n,
                    linkColor: Ue,
                    promotedContent: u,
                    promotedTrendDescription: d,
                    publisher: p,
                    publisherTitleColor: Ue,
                    richContext: h,
                    shouldTruncateTitle: !0,
                    supportingText: g,
                    textColor: Ue,
                    timeString: f,
                    title: v,
                    titleFontSize: b,
                    titleWeight: 'heavy',
                  }),
                ),
              ),
              null != r && r.length
                ? m.a.createElement(
                    B.a,
                    { style: Xe.menuContainer },
                    m.a.createElement(F.a, { feedbackItems: r, isDisplayedOnMedia: !0 }),
                  )
                : null,
            )
          })
        },
        Xe = U.a.create(function (e) {
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
        qe = xe(m.a.memo(Ke)),
        Ye = a('cFuS'),
        Je = ['analytics', 'createLocalApiErrorHandler', 'logTrend', 'promotedMetadata'],
        Qe = function (e) {
          var t = e.analytics,
            a = e.createLocalApiErrorHandler,
            r = e.logTrend,
            n = e.promotedMetadata,
            o = u()(e, Je),
            i = m.a.useCallback(
              function (e) {
                n &&
                  n.promotedTrendId &&
                  r({ promoted_trend_id: n.promotedTrendId, impression_id: n.impressionId, event: e }).catch(a())
              },
              [n, r, a],
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
              return m.a.createElement(ge, l()({}, o, { onClick: c, onImpression: s }))
            case p.a.Hero:
              return m.a.createElement(qe, l()({}, o, { onClick: c, onImpression: s }))
            default:
              return null
          }
        },
        Ze = I(m.a.memo(Qe)),
        $e = a('Rp9C')
      t.default = function (e) {
        return o
          .b({
            component: Ze,
            getScribeDataItem: function (e) {
              return (function (e) {
                var t = e.content.promotedMetadata,
                  a = e.content.id,
                  r = n()(
                    { item_type: oe.a.ItemType.EVENT, event_details: { event_id: a } },
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
    wtjx: function (e, t, a) {
      'use strict'
      a.d(t, 'g', function () {
        return h
      }),
        a.d(t, 'f', function () {
          return g
        }),
        a.d(t, 'e', function () {
          return f
        }),
        a.d(t, 'd', function () {
          return C
        }),
        a.d(t, 'b', function () {
          return E
        }),
        a.d(t, 'a', function () {
          return x
        }),
        a.d(t, 'c', function () {
          return k
        })
      var r = a('KEM+'),
        n = a.n(r),
        o = a('yiKp'),
        i = a.n(o),
        c = (a('7x/C'), a('JtPf'), a('LW0h'), a('Ee2X'), a('Ssj5')),
        l = a('RqPI'),
        s = 'recentSearches',
        u = 'rweb.recentSearches',
        d = function (e) {
          return function (t, a, r) {
            return r.userPersistence.set(u, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        m = function (e, t) {
          var a = []
          if (e && e.user) {
            var r = e.user
            a = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== r.id)
            })
          } else if (e && e.topic) {
            var n = e.topic
            a = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== n.id)
            })
          } else if (e && e.event) {
            var o = e.event
            a = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== o.id)
            })
          } else if (e && e.keyword) {
            var i = e.keyword
            a = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== i.query) || e.user || e.topic || e.event
            })
          }
          return a
        },
        p = { fetched: !1, recentSearches: [] }
      var h = function (e) {
          return e.recentSearches.recentSearches
        },
        g = function (e) {
          return h(e)[0] || null
        },
        f = function (e) {
          return e.recentSearches.fetched
        },
        v = 'rweb/recentSearches/INIT_FROM_CACHE',
        y = function (e) {
          return { type: v, payload: e }
        },
        b = 'rweb/recentSearches/REMOVE_QUERY',
        C = function (e) {
          return function (t, a, r) {
            r.userPersistence
            t({ payload: e, type: b })
            var n = a().recentSearches
            return Object(l.n)(a()) ? t(d(n.recentSearches)) : Promise.resolve()
          }
        },
        w = 'rweb/recentSearches/CLEAR_ALL',
        E = function () {
          return function (e, t, a) {
            a.userPersistence
            e({ type: w })
            var r = t().recentSearches
            return Object(l.n)(t()) ? e(d(r.recentSearches)) : Promise.resolve()
          }
        },
        S = 'rweb/recentSearches/ADD_QUERY',
        x = function (e) {
          return function (t, a, r) {
            r.userPersistence
            t({ payload: e, type: S })
            var n = a().recentSearches
            return Object(l.n)(a()) ? t(d(n.recentSearches)) : Promise.resolve()
          }
        },
        k = function () {
          return function (e, t, a) {
            a.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, a) {
                  var r = a.userPersistence,
                    n = t()
                  return Object(l.n)(n)
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
        n()({}, s, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case S:
              var a = t.payload,
                r = a ? m(a, e.recentSearches) : []
              return r.length > 49 && r.splice(49, 1), a && r.unshift(a), i()(i()({}, e), {}, { recentSearches: r })
            case b:
              var n = t.payload,
                o = n ? m(n, e.recentSearches) : []
              return i()(i()({}, e), {}, { recentSearches: o })
            case w:
              return { fetched: !0, recentSearches: [] }
            case v:
              return i()(i()(i()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
    x0mb: function (e, t, a) {
      'use strict'
      var r = a('yiKp'),
        n = a.n(r),
        o = a('ERkP'),
        i = a.n(o),
        c = a('Lsrn'),
        l = a('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            n()(
              n()({}, e),
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
    xZmF: function (e, t, a) {
      'use strict'
      a('yH/f'), a('2G9S')
      var r = a('0mK8'),
        n = a('ERkP'),
        o = a.n(n),
        i = a('GliE'),
        c = a('YeIG'),
        l = a('MWbm'),
        s = a('TIdA'),
        u = a('A91F'),
        d = a('9Xij'),
        m = a('jUPy'),
        p = a('rHpw'),
        h = Object.freeze({ Fixed: 'fixed', Variable: 'variable' }),
        g = function (e) {
          var t = e.cropCandidates,
            a = e.dataSaverMode,
            n = e.icon,
            i = e.image,
            m = e.isCellWithProminentSocialContext,
            p = e.scoreEvent,
            h = e.type,
            g = v({ isCellWithProminentSocialContext: m, type: h })
          return o.a.createElement(
            l.a,
            { style: [y.coverContainer, g] },
            p
              ? f(p)
              : !i || Object(c.a)(i) || a
              ? a || Object(c.a)(i)
                ? o.a.createElement(d.a, { ratio: 1 }, o.a.createElement(r.c, { icon: n }))
                : null
              : o.a.createElement(s.a, { accessibilityLabel: '', aspectMode: u.a.SQUARE, cropCandidates: t, image: i }),
          )
        },
        f = function (e) {
          var t = e.category,
            a = e.eventState,
            r = e.gameClock,
            n = e.gameClockPeriod,
            c = e.participants,
            l = e.startTimeMillis,
            s = e.winnerId,
            u = Object(i.a)(t, a, c, n, s)
          return o.a.createElement(m.a, {
            accessibilityLabel: u,
            category: t,
            containerStyle: y.scoreCardTile,
            gameClock: r,
            gameClockPeriod: n,
            gameState: a,
            isCompact: !0,
            startTimeMillis: l,
            teams: c,
            winnerId: s,
          })
        },
        v = function (e) {
          var t = e.isCellWithProminentSocialContext
          switch (e.type) {
            case h.Fixed:
              return (t && y.fixedCellThumbnailWithProminentSocialContext) || y.fixedCellThumbnail
            case h.Variable:
              return y.variableCellThumbnail
            default:
              return
          }
        }
      g.defaultProps = { type: 'variable' }
      var y = p.a.create(function (e) {
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
      t.a = g
    },
  },
])
//# sourceMappingURL=WIPED
