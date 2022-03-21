;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '89tF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('jwue'), n('7x/C'), n('+oxZ'), n('+KXO'), n('yH/f')
      function a(e) {
        var t = {}
        return (
          Object.keys(e).forEach(function (e) {
            t[e] = e
          }),
          Object.freeze(t)
        )
      }
    },
    FITr: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    GCOQ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
                d: 'M19.875 2.75v18.5c0 .55-.45 1-1 1s-1-.45-1-1v-7.14c-1.86-.78-3.77-.21-5.79.38-1.39.41-2.81.82-4.26.82-1.1 0-2.2-.23-3.33-.89-.23-.14-.37-.38-.37-.65V4c0-.27.14-.52.38-.65.23-.13.52-.13.75 0 2.05 1.21 4.17.59 6.41-.07 2.02-.59 4.09-1.2 6.21-.54.01-.55.45-.99 1-.99s1 .45 1 1z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    Nqmc: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        h = n.n(u),
        p = n('KEM+'),
        m = n.n(p),
        y = (n('hBvt'), n('uFXj'), n('2G9S'), n('SV7d')),
        g = n('ERkP'),
        v = n.n(g),
        f = n('t62R'),
        w = n('5mJL'),
        b = n('nBUg'),
        C = n('qjak'),
        x = n('dC06'),
        k = n('rHpw'),
        T = n('XIXT'),
        E = n('yDX5'),
        _ = n('MWbm'),
        R = [
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
        S = { viewType: 'social_context' },
        I = (function (e) {
          d()(n, e)
          var t = h()(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.avatarSize,
                    a = t.bottomControl,
                    i = t.iconStyle,
                    o = t.nativeID,
                    l = t.onLayout,
                    s = t.rightControl,
                    c = t.style,
                    d = t.testID,
                    u = t.textColor,
                    h = t.textSize,
                    p = t.topControl,
                    m = t.weight,
                    g = (t.withBottomBorder, t.withLeftPadding),
                    x = (t.withTextCentered, r()(t, R)),
                    k = Object(C.a)(x),
                    T = k.Icon,
                    E = k.accessibilityLabel,
                    I = k.link,
                    L = k.text,
                    P = v.a.createElement(
                      f.b,
                      { accessibilityLabel: E, color: u, nativeID: o, numberOfLines: 2, size: h, testID: d, weight: m },
                      L,
                    ),
                    U = this._getStyles(),
                    O = U.cellStyle,
                    B = U.viewStyle
                  return L
                    ? v.a.createElement(b.b.UseProps, null, function (t) {
                        return v.a.createElement(
                          y.a,
                          { behavioralEventContext: S },
                          v.a.createElement(
                            v.a.Fragment,
                            null,
                            p || null,
                            v.a.createElement(
                              _.a,
                              {
                                onLayout: l,
                                style: [c, B, t.socialContextRefreshEnabled() && !g && M.socialContextRefresh],
                              },
                              v.a.createElement(
                                w.a,
                                {
                                  avatarCell: T || (g ? null : void 0),
                                  avatarCellStyle: [
                                    i,
                                    M.socialContextIconColumn,
                                    !g && M.unsetIconWidth,
                                    t.socialContextRefreshEnabled() && !g && M.socialContextRefreshIcon,
                                  ],
                                  avatarSize: n,
                                  cellStyle: O,
                                },
                                v.a.createElement(
                                  _.a,
                                  { style: M.cellWrapper },
                                  v.a.createElement(
                                    _.a,
                                    {
                                      style: [
                                        M.socialContextTextColumn,
                                        t.socialContextRefreshEnabled() && !g && M.socialContextRefreshTextColumn,
                                      ],
                                    },
                                    I ? e._renderLink(I, P) : P,
                                  ),
                                  s || null,
                                ),
                              ),
                              a || null,
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
                    a = n.contextType,
                    r = n.nativeID,
                    i = n.onClick,
                    o = n.retweetData,
                    l = n.textColor,
                    s = n.topicData,
                    c = (o || {}).screenName,
                    d = v.a.createElement(f.b, { color: l, link: e, nativeID: r, onClick: i }, t)
                  return a === x.a.Topic && s
                    ? v.a.createElement(T.a, { topicId: s.topicId }, d)
                    : a === x.a.Retweet && c
                    ? v.a.createElement(E.a, { screenName: c }, d)
                    : d
                },
              },
              {
                key: '_getStyles',
                value: function () {
                  var e = this.props,
                    t = e.bottomControl,
                    n = e.contextType,
                    a = e.withBottomBorder,
                    r = e.withTextCentered,
                    i = n === x.a.TextOnly,
                    o = a ? [M.bottomBorderMargin, t && M.bottomBorder] : [],
                    l = a && !t ? [M.bottomBorder] : []
                  return (
                    i && l.push(M.topicContext),
                    r && l.push(M.socialContextTextCentered),
                    { viewStyle: o, cellStyle: l }
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      m()(I, 'defaultProps', {
        iconSize: 'small',
        textColor: 'gray700',
        textSize: 'subtext2',
        withBottomBorder: !1,
        withLeftPadding: !0,
        withTextCentered: !1,
      })
      var M = k.a.create(function (e) {
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
      t.a = I
    },
    Ujvi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        s = n.n(l),
        c = n('2VqO'),
        d = n.n(c),
        u = (n('z84I'), n('ho0z'), n('ERkP')),
        h = n.n(u),
        p = n('t62R'),
        m = n('zrc3'),
        y = n('6ZHn'),
        g = n('rHpw'),
        v = n('MWbm'),
        f = n('3XMw'),
        w = n.n(f),
        b = w.a.f8e8e32d,
        C = (function (e) {
          s()(n, e)
          var t = d()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.linkPath,
                    n = e.size,
                    a = e.users,
                    r = e.withIcon,
                    i = this._decodeUserList(),
                    o = i.isCurrentUserIncluded ? k.withCurrentUser : k.withoutCurrentUser,
                    l = this._selectMessage(o, i),
                    s = a.map(function (e) {
                      return e.user_id
                    }),
                    c = t && { pathname: t, state: { userIds: s } }
                  return a.length > 0
                    ? h.a.createElement(
                        v.a,
                        { style: [T.root, this.props.style] },
                        h.a.createElement(
                          p.b,
                          { color: 'gray700', link: c, size: n, withInteractiveStyling: !!c },
                          r ? h.a.createElement(y.a, { style: T.icon }) : null,
                          l,
                        ),
                      )
                    : null
                },
              },
              {
                key: '_selectMessage',
                value: function (e, t) {
                  switch (this.props.users.length) {
                    case 0:
                      return null
                    case 1:
                      return e.single(t)
                    default:
                      return e.multiple(t)
                  }
                },
              },
              {
                key: '_decodeUserList',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUserId,
                    n = e.users,
                    a = t
                      ? Object(m.a)(n, function (e) {
                          return e.user_id === t
                        })
                      : -1,
                    r = a >= 0,
                    i = r && n[a] ? n[a] : void 0
                  return {
                    isCurrentUserIncluded: r,
                    firstName: n.length >= 1 ? (r && i ? i.name : n[0].name) : void 0,
                    secondName: n.length >= 2 ? (r && 0 !== a ? n[0].name : n[1].name) : void 0,
                    otherUsersCount: n.length > 0 ? n.length - 1 : 0,
                  }
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        x = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'normal'
          return h.a.createElement(p.b, { color: 'gray700', weight: t }, e)
        },
        k = {
          withCurrentUser: {
            single: function () {
              return x(b, 'bold')
            },
            multiple: function (e) {
              var t = e.otherUsersCount,
                n = e.secondName
              return t && n
                ? x(
                    h.a.createElement(
                      w.a.I18NFormatMessage,
                      { $i18n: 'd7b2c271' },
                      h.a.createElement(p.b, { weight: 'bold' }, w.a.df6703d2),
                      w.a.c20f7e9e({ otherUsersCount: t, secondName: h.a.createElement(p.b, null, n) }),
                    ),
                  )
                : null
            },
          },
          withoutCurrentUser: {
            single: function (e) {
              var t = e.firstName
              return t ? x(t) : null
            },
            multiple: function (e) {
              var t = e.firstName,
                n = e.otherUsersCount,
                a = e.secondName
              return n
                ? x(
                    h.a.createElement(
                      w.a.I18NFormatMessage,
                      { $i18n: 'b035fe73' },
                      h.a.createElement(p.b, null, t),
                      w.a.he26f625({ otherUsersCount: n, secondName: h.a.createElement(p.b, null, a) }),
                    ),
                  )
                : null
            },
          },
        },
        T = g.a.create(function (e) {
          return { root: { flexDirection: 'row' }, icon: { color: e.colors.gray700, marginRight: e.spaces.space4 } }
        })
    },
    VAyw: function (e, t, n) {
      'use strict'
      n('LW0h'), n('7x/C')
      var a = n('FLCi'),
        r = n('s1N3'),
        i = function (e) {
          var t, n
          return (
            (null === (t = e.features) || void 0 === t || null === (n = t.all) || void 0 === n ? void 0 : n.tags) || []
          )
        }
      t.a = {
        mergeTaggedUsers: function (e) {
          var t = Object(a.a)(e, i).filter(function (e) {
            return 'user' === e.type
          })
          return Object(r.a)(t, function (e) {
            return e.user_id
          })
        },
      }
    },
    aPcQ: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    bVhu: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('gK2g'),
        l = n('jV+4'),
        s = n('MWbm'),
        c = n('3XMw'),
        d = n.n(c),
        u = d.a.f4393d0f,
        h = { element: 'screen_name', action: 'profile_click' }
      t.a = function (e) {
        var t = e.size,
          n = e.style,
          a = e.userIsProtected,
          c = e.userIsVerified,
          p = e.userName,
          m = e.userScreenName,
          y = o.a.useAnalytics(),
          g = r.a.createElement(l.a, {
            isProtected: a,
            isVerified: c,
            name: p,
            onLinkClick: function () {
              y.scribe(h)
            },
            screenName: m,
            withHoverCard: !0,
            withLink: !0,
            withScreenName: !1,
          })
        return r.a.createElement(
          s.a,
          { accessibilityLabel: u({ name: p }), style: n },
          r.a.createElement(
            i.b,
            { color: 'gray700', size: t },
            r.a.createElement(d.a.I18NFormatMessage, { $i18n: 'dbf19261' }, g),
          ),
        )
      }
    },
    cFyg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var a = n('ZUOq'),
        r = n('rHpw'),
        i = { durationMs: 300 },
        o = r.a.create(function (e) {
          return {
            root: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.navigationBackground,
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              marginRight: e.spaces.space20,
              minWidth: a.a.dmDrawerWidth.min,
              maxWidth: a.a.dmDrawerWidth.max,
            },
            expandable: { transition: 'all '.concat(i.durationMs, 'ms ease') },
            expanded: { maxHeight: a.a.dmDrawerHeight.expanded, height: '80vh' },
            drawerHeaderRadius: {
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
            },
          }
        })
      t.b = o
    },
    cTG8: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('yiKp'),
        s = n.n(l),
        c = n('RhWx'),
        d = n.n(c),
        u = n('VrFO'),
        h = n.n(u),
        p = n('Y9Ll'),
        m = n.n(p),
        y = n('1Pcy'),
        g = n.n(y),
        v = n('5Yy7'),
        f = n.n(v),
        w = n('2VqO'),
        b = n.n(w),
        C = n('KEM+'),
        x = n.n(C),
        k =
          (n('2G9S'),
          n('LW0h'),
          n('7x/C'),
          n('jQ3i'),
          n('x4t0'),
          n('5BYb'),
          n('z84I'),
          n('tVqn'),
          n('KqXw'),
          n('MvUL'),
          n('ERkP')),
        T = n.n(k),
        E = n('t62R'),
        _ = n('OIC0'),
        R = n('rHpw'),
        S = n('Q0VY'),
        I = n('FiRh'),
        M = [
          'displayTextRange',
          'enrichments',
          'entities',
          'entityBaseUrl',
          'excludeCardUrl',
          'hitHighlights',
          'lang',
          'linkColor',
          'linkify',
          'nativeID',
          'numberOfLines',
          'onEntityClick',
          'quotedTweetId',
          'quotedTweetPermalink',
          'style',
          'text',
          'transformUrl',
          'underlineLinks',
          'unmentionedUserIds',
          'withCardLinks',
          'withMediaLinks',
          'withQuoteLinks',
          'withUnicodeEmojis',
        ],
        L = (function (e) {
          f()(n, e)
          var t = b()(n)
          function n() {
            var e
            h()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              x()(g()(e), '_getTextParts', function () {
                var t,
                  n,
                  a = e.props,
                  r = a.displayTextRange,
                  i = a.enrichments,
                  o = a.entities,
                  l = a.entityBaseUrl,
                  c = a.hitHighlights,
                  u = a.linkify,
                  h = a.quotedTweetPermalink,
                  p = a.text,
                  m = a.unmentionedUserIds,
                  y = a.withQuoteLinks,
                  g = a.withUnicodeEmojis,
                  v = p,
                  f = o,
                  w = o && o.urls && o.urls.length
                if (h && !w && y && ((v = ''.concat(p, ' ').concat(u ? h.url : h.display)), u)) {
                  var b = d()(p).length + 1
                  f = s()(
                    s()({ media: [] }, o),
                    {},
                    {
                      urls: [
                        {
                          display_url: h.display,
                          expanded_url: h.expanded,
                          url: h.url,
                          indices: [b, b + h.url.length],
                        },
                      ],
                    },
                  )
                }
                var C = [0, v.length],
                  x = [(r || C)[0], v.length],
                  k = c || []
                return (
                  null !== (t = f) &&
                    void 0 !== t &&
                    null !== (n = t.user_mentions) &&
                    void 0 !== n &&
                    n.length &&
                    null != m &&
                    m.length &&
                    (f = s()(
                      s()({}, f),
                      {},
                      {
                        user_mentions: f.user_mentions.filter(function (e) {
                          return !m.includes(e.id_str)
                        }),
                      },
                    )),
                  S.a.tweetTextParts(v, x, f, i, {
                    useHashtagUrl: !0,
                    hitHighlights: k,
                    baseUrl: l,
                    renderUnicodeEmojis: g,
                  })
                )
              }),
              e
            )
          }
          return (
            m()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.displayTextRange,
                    n = (e.enrichments, e.entities, e.entityBaseUrl, e.excludeCardUrl),
                    a = (e.hitHighlights, e.lang),
                    i = e.linkColor,
                    l = e.linkify,
                    c = e.nativeID,
                    d = e.numberOfLines,
                    u = e.onEntityClick,
                    h = e.quotedTweetId,
                    p = (e.quotedTweetPermalink, e.style),
                    m = (e.text, e.transformUrl),
                    y = e.underlineLinks,
                    g = (e.unmentionedUserIds, e.withCardLinks),
                    v = e.withMediaLinks,
                    f = e.withQuoteLinks,
                    w = (e.withUnicodeEmojis, o()(e, M)),
                    b = this._getTextParts(),
                    C = b.some(function (e) {
                      return e.entityType === _.a.MEDIA
                    }),
                    x = C && !v,
                    k = h && !f,
                    R = b
                      .map(function (e, a) {
                        var r = a === b.length - 1,
                          i = !!e.tweetId && e.tweetId === h
                        if (!v && e.entityType === _.a.MEDIA) return null
                        if (i && C && e.indices && t[1] === e.indices[1]) return null
                        if (r) {
                          if (i && k && !x) return null
                          if (!x && !k && !g && n && (n === e.url || n === e.expandedUrl)) return null
                        }
                        return e
                      })
                      .filter(Boolean),
                    S = R.map(function (e, t) {
                      var n = t === R.length - 1
                      if (e.entityType === _.a.TEXT) {
                        var a = e,
                          r = ''.concat(e.prefix).concat(e.text).trim()
                        return (!n && 0 !== t) || r
                          ? (n && (a = s()(s()({}, e), {}, { text: e.text.replace(/(\s+$)/g, '') })),
                            T.a.createElement(I.b, {
                              key: t,
                              linkColor: i,
                              linkify: l,
                              onClick: u,
                              part: a,
                              transformUrl: m,
                              underlineLinks: y,
                            }))
                          : null
                      }
                      return T.a.createElement(I.b, {
                        key: t,
                        linkColor: i,
                        linkify: l,
                        onClick: u,
                        part: e,
                        transformUrl: m,
                        underlineLinks: y,
                      })
                    }).filter(Boolean)
                  return S.length
                    ? T.a.createElement(
                        E.b,
                        r()({}, w, { children: S, lang: a, nativeID: c, numberOfLines: d, style: [P.root, p] }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(T.a.Component)
      x()(L, 'defaultProps', {
        linkColor: 'link',
        linkify: I.a.linkify,
        underlineLinks: !1,
        withCardLinks: !1,
        withMediaLinks: !1,
        withQuoteLinks: !1,
        withUnicodeEmojis: !1,
      })
      var P = R.a.create(function (e) {
        return { root: { position: 'relative' } }
      })
      t.a = L
    },
    dC06: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('yH/f'), n('ERkP')
      var a = Object.freeze({
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
    kY28: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        h = n.n(u),
        p = n('KEM+'),
        m = n.n(p),
        y = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        g = n.n(y),
        v = n('t62R'),
        f = n('rHpw'),
        w = n('MWbm'),
        b = n('ddV6'),
        C = n.n(b),
        x = n('RhWx'),
        k = n.n(x),
        T =
          (n('hBpG'),
          n('7x/C'),
          n('LW0h'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('Cm4o'),
          n('KrtT'),
          n('TJCb'),
          n('DZ+c'),
          n('5BYb'),
          n('jQ3i'),
          n('x4t0'),
          n('3XMw')),
        E = n.n(T),
        _ = n('yDX5'),
        R = E.a.ga629a8b,
        S = function (e, t, n) {
          return e
            ? g.a.createElement(
                _.a,
                { screenName: t },
                g.a.createElement(v.b, { link: 'https://twitter.com/'.concat(t), onClick: n }, '@'.concat(t)),
              )
            : '@'.concat(t)
        },
        I = function (e) {
          var t = e.children,
            n = e.onClick,
            a = e.viewMorePath
          return g.a.createElement(v.b, { accessibilityLabel: R, link: a, onClick: n }, t)
        },
        M = function (e) {
          return e.screen_name
        },
        L = n('s1N3'),
        P = function (e, t) {
          return e.find(function (e) {
            return e.id_str === t
          })
        },
        U = 'NotIncluded',
        O = 'DirectReply',
        B = 'NonDirectReply',
        N = function (e) {
          var t = e.displayTextRange,
            n = e.inReplyToName,
            a = e.inReplyToScreenName,
            r = e.inReplyToUserIdStr,
            i = e.userMentionsEntities,
            o = i.filter(function (e) {
              return e.indices[0] < t[0] || e.id_str === r
            }),
            l = k()(o),
            s = P(i, r),
            c = n || a
          return (
            !s && r && c && a && ((s = { id_str: r, name: c, screen_name: a, indices: [] }), l.push(s)),
            Object(L.a)(l, function (e) {
              return e.id_str
            })
          )
        },
        H = function (e) {
          var t,
            n = e.displayTextRange,
            a = e.inReplyToName,
            r = e.inReplyToScreenName,
            i = e.inReplyToUserIdStr,
            o = e.linkify,
            l = e.loggedInUserId,
            s = e.onClick,
            c = e.tweetPermalink,
            d = e.unmentionedUserIds,
            u = e.userMentionsEntities,
            h = i,
            p = N({
              displayTextRange: n,
              inReplyToName: a,
              inReplyToScreenName: r,
              inReplyToUserIdStr: i,
              userMentionsEntities: u,
            }),
            m = { id_str: '', indices: [], name: '', screen_name: '' },
            y = null !== (t = P(p, h)) && void 0 !== t ? t : m,
            f = (function (e, t, n, a) {
              var r = e ? g.a.createElement(I, { onClick: n, viewMorePath: t }) : g.a.createElement('span', null),
                i = e ? g.a.createElement(v.b, { color: 'link' }) : g.a.createElement('span', null),
                o = function (t) {
                  var n = null == a ? void 0 : a.includes(t.id_str)
                  return e && !n
                }
              return {
                replyToOne: function (e) {
                  var t = e.user,
                    a = S(o(t), M(t), n)
                  return g.a.createElement(E.a.I18NFormatMessage, { $i18n: 'h5970807' }, a)
                },
                replyToTwo: function (e) {
                  var t = e.userOne,
                    a = e.userTwo,
                    r = S(o(t), M(t), n),
                    l = S(o(a), M(a), n)
                  return g.a.createElement(
                    E.a.I18NFormatMessage,
                    { $i18n: 'ge01e6a2' },
                    r,
                    g.a.cloneElement(i, null, E.a.f34e6516),
                    l,
                  )
                },
                replyToMany: function (e) {
                  var t = e.othersCount,
                    a = e.user,
                    i = S(o(a), M(a), n)
                  return g.a.createElement(
                    E.a.I18NFormatMessage,
                    { $i18n: 'f5a069ab' },
                    i,
                    g.a.cloneElement(r, null, E.a.ff31714c({ othersCount: t })),
                  )
                },
                indirectReplyToThree: function (e) {
                  var t = e.userOne,
                    a = e.userThree,
                    r = e.userTwo,
                    l = S(o(t), M(t), n),
                    s = S(o(r), M(r), n),
                    c = S(o(a), M(a), n)
                  return g.a.createElement(
                    E.a.I18NFormatMessage,
                    { $i18n: 'hd7dd197' },
                    l,
                    s,
                    g.a.cloneElement(i, null, E.a.e06c99b6),
                    c,
                  )
                },
                indirectReplyToMany: function (e) {
                  var t = e.othersCount,
                    a = e.userOne,
                    i = e.userTwo,
                    l = S(o(a), M(a), n),
                    s = S(o(i), M(i), n)
                  return g.a.createElement(
                    E.a.I18NFormatMessage,
                    { $i18n: 'g4eb2847' },
                    l,
                    s,
                    g.a.cloneElement(r, null, E.a.i4e2f96b({ othersCount: t })),
                  )
                },
              }
            })(o, new URL(''.concat(c, '/people'), 'https://twitter.com').toString(), s, d),
            w = l === h,
            b = p.some(function (e) {
              return e.id_str === l
            })
          switch (w ? O : b ? B : U) {
            case O:
            case U:
              switch (p.length) {
                case 1:
                  return f.replyToOne({ user: y })
                case 2:
                  var x,
                    k =
                      null !==
                        (x = p.find(function (e) {
                          return e !== y
                        })) && void 0 !== x
                        ? x
                        : m
                  return f.replyToTwo({ userOne: y, userTwo: k })
                case 3:
                  var T = p.filter(function (e) {
                      return e !== y
                    }),
                    _ = C()(T, 2),
                    R = _[0],
                    L = _[1]
                  return f.indirectReplyToThree({ userOne: y, userTwo: R, userThree: L })
                default:
                  var H,
                    z =
                      null !==
                        (H = p.find(function (e) {
                          return e !== y
                        })) && void 0 !== H
                        ? H
                        : m
                  return f.indirectReplyToMany({ userOne: y, userTwo: z, othersCount: p.length - 2 })
              }
            case B:
              switch (p.length) {
                case 1:
                  return null
                case 2:
                  var F,
                    W =
                      null !==
                        (F = p.find(function (e) {
                          return e !== y
                        })) && void 0 !== F
                        ? F
                        : m
                  return f.replyToTwo({ userOne: y, userTwo: W })
                case 3:
                  var A,
                    D,
                    V =
                      null !==
                        (A = p.find(function (e) {
                          var t = e.id_str
                          return t !== l && t !== h
                        })) && void 0 !== A
                        ? A
                        : m
                  return f.indirectReplyToThree({
                    userOne: y,
                    userTwo: null !== (D = P(p, l)) && void 0 !== D ? D : m,
                    userThree: V,
                  })
                default:
                  var j
                  return f.indirectReplyToMany({
                    userOne: y,
                    userTwo: null !== (j = P(p, l)) && void 0 !== j ? j : m,
                    othersCount: p.length - 2,
                  })
              }
            default:
              return null
          }
        },
        z = Object.freeze({ Threaded: 'threaded', Isolated: 'isolated', None: 'none' }),
        F = [z.Threaded, z.Isolated, z.None],
        W = Object.freeze({ all: 'all', name: 'name', none: 'none' }),
        A = (function (e) {
          d()(n, e)
          var t = h()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(s()(e), '_handleClick', function (t) {
                var n = e.props,
                  a = n.displayTextRange,
                  r = n.inReplyToName,
                  i = n.inReplyToScreenName,
                  o = n.inReplyToUserIdStr,
                  l = n.onClick,
                  s = n.userMentionsEntities
                l &&
                  l(
                    t,
                    N({
                      displayTextRange: a,
                      inReplyToName: r,
                      inReplyToScreenName: i,
                      inReplyToUserIdStr: o,
                      userMentionsEntities: s,
                    }).length,
                  )
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
                    t = e.displayTextRange,
                    n = e.inReplyToName,
                    a = e.inReplyToScreenName,
                    r = e.inReplyToStatusIdStr,
                    i = e.inReplyToUserIdStr,
                    o = e.linkColor,
                    l = e.linkType,
                    s = e.loggedInUserId,
                    c = e.nativeID,
                    d = e.size,
                    u = e.style,
                    h = e.tweetPermalink,
                    p = e.unmentionedUserIds,
                    m = e.userMentionsEntities,
                    y = H({
                      displayTextRange: t,
                      inReplyToName: n,
                      inReplyToScreenName: a,
                      inReplyToUserIdStr: i,
                      tweetPermalink: h,
                      loggedInUserId: s,
                      linkify: l === W.name,
                      onClick: this._handleClick,
                      unmentionedUserIds: p,
                      userMentionsEntities: m,
                    })
                  if (l === W.all) {
                    var f = r && 'https://twitter.com/'.concat(a || 'i', '/status/').concat(r)
                    return g.a.createElement(v.b, { color: o, link: f, nativeID: c, size: d, style: u }, y)
                  }
                  return l === W.name
                    ? g.a.createElement(
                        w.a,
                        { style: [D.root, u] },
                        g.a.createElement(v.b, { color: 'gray700', nativeID: c, size: d }, y),
                      )
                    : g.a.createElement(v.b, { color: 'gray700', nativeID: c, size: d, style: u }, y)
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      m()(A, 'getReplyContextParticipants', N),
        m()(A, 'ReplyContextTypes', z),
        m()(A, 'TweetReplyContextTypes', F),
        m()(A, 'ReplyContextLinkTypes', W),
        m()(A, 'defaultProps', { linkColor: 'link', linkType: W.name, size: 'body', userMentionsEntities: [] })
      var D = f.a.create(function (e) {
        return { root: { display: 'inline-block' } }
      })
      t.a = A
    },
    qjak: function (e, t, n) {
      'use strict'
      n('hBvt'), n('ho0z')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('MAI/'),
        l = n('shC7'),
        s = n('dC06'),
        c = n('rHpw'),
        d = n('3XMw'),
        u = n.n(d),
        h = n('FITr'),
        p = n('yVEN'),
        m = n('uCrx'),
        y = n('6ZHn'),
        g = n('GcQN'),
        v = n('x0mb'),
        f = n('Hp3u'),
        w = n('yiKp'),
        b = n.n(w),
        C = n('Lsrn'),
        x = n('k/Ka'),
        k = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(x.a)(
            'svg',
            b()(
              b()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [C.a.root, e.style],
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
      k.metadata = { width: 24, height: 24 }
      var T = k,
        E = n('EHV7'),
        _ = n('wpLu'),
        R = n('EfHu'),
        S = n('cOhU'),
        I = n('cap5'),
        M = n('r9x5'),
        L = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(x.a)(
            'svg',
            b()(
              b()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [C.a.root, e.style],
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
      L.metadata = { width: 24, height: 24 }
      var P = L,
        U = n('0qK0'),
        O = n('aPcQ'),
        B = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(x.a)(
            'svg',
            b()(
              b()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [C.a.root, e.style],
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
      B.metadata = { width: 24, height: 24 }
      var N = B,
        H = n('lUZE'),
        z = u.a.jb767df7,
        F = u.a.bb3323fa,
        W = u.a.db0798ed,
        A = u.a.dc716ec8,
        D = function (e) {
          return r.a.createElement(i.b, { dir: l.a.getConstants().isRTL ? 'rtl' : 'ltr', withHashflags: !0 }, e)
        },
        V = function (e, t) {
          return t
            ? z
            : (function (e) {
                var t = D(e)
                return r.a.createElement(u.a.I18NFormatMessage, { $i18n: 'h99e9c95' }, t)
              })(e)
        },
        j = c.a.create(function (e) {
          return {
            small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 },
            large: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 },
            xLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 },
          }
        }),
        X = c.a.create(function (e) {
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
          a = e.link,
          i = e.retweetData,
          l = e.text,
          c = e.topicData,
          d = e.userAvatarUrls,
          u = i || {},
          w = u.isSelfRetweet,
          b = u.name,
          C = u.screenName,
          x = (function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              a = j[t],
              i = [X.colorDeepGray, a],
              l = r.a.createElement(h.a, { style: i }),
              c = r.a.createElement(p.a, { style: i }),
              d = r.a.createElement(m.a, { style: i }),
              u = r.a.createElement(y.a, { style: i }),
              w = r.a.createElement(g.a, { style: i }),
              b = r.a.createElement(v.a, { style: X.circle }),
              C = r.a.createElement(f.a, { style: i }),
              x = r.a.createElement(T, { style: i }),
              k = r.a.createElement(E.a, { style: i }),
              L = r.a.createElement(_.a, { style: i }),
              B = r.a.createElement(R.a, { style: i }),
              z = r.a.createElement(S.a, { style: i }),
              F = r.a.createElement(I.a, { style: i }),
              W = r.a.createElement(M.a, { style: i }),
              A = r.a.createElement(P, { style: i }),
              D = r.a.createElement(U.a, { style: i }),
              V = r.a.createElement(O.a, { style: i }),
              q = r.a.createElement(N, { style: i }),
              K = r.a.createElement(o.a, { borderColor: 'cellBackground', userAvatarSize: t, userAvatarUrls: n }),
              Y = r.a.createElement(H.a, { style: i })
            switch (e) {
              case s.a.Pin:
                return l
              case s.a.Retweet:
                return c
              case s.a.Like:
                return d
              case s.a.Follow:
                return u
              case s.a.Moment:
                return w
              case s.a.NewTweets:
                return b
              case s.a.Reply:
              case s.a.Conversation:
                return C
              case s.a.Feedback:
                return x
              case s.a.Topic:
                return k
              case s.a.List:
                return L
              case s.a.Location:
                return B
              case s.a.Community:
                return z
              case s.a.Spaces:
                return F
              case s.a.Sparkle:
                return W
              case s.a.SmartBlockExpiration:
                return A
              case s.a.SocialProof:
              case s.a.FollowFollowed:
                return q
              case s.a.FollowMutual:
                return V
              case s.a.FollowFollowing:
                return D
              case s.a.Facepile:
                return K
              case s.a.Bird:
                return Y
              case s.a.TextOnly:
              default:
                return null
            }
          })(t, n, d)
        switch (t) {
          case s.a.Retweet:
            return { Icon: x, text: l || V(b, w), link: C ? 'https://twitter.com/'.concat(C) : void 0 }
          case s.a.Pin:
            return { Icon: x, text: l || F }
          case s.a.Topic:
            return {
              Icon: x,
              accessibilityLabel:
                'Recommendation' === (null == c ? void 0 : c.functionalityType) ||
                'RecWithEducation' === (null == c ? void 0 : c.functionalityType)
                  ? A({ topicName: l })
                  : W({ topicName: l }),
              text: l ? D(l) : null,
              link: a,
            }
          default:
            return { Icon: x, text: l ? D(l) : null, link: a }
        }
      }
    },
    r9x5: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    rOiJ: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('97Jx'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        h = n.n(u),
        p = n('5Yy7'),
        m = n.n(p),
        y = n('2VqO'),
        g = n.n(y),
        v = n('KEM+'),
        f = n.n(v),
        w =
          (n('2G9S'),
          n('1t7P'),
          n('jQ/y'),
          n('ho0z'),
          n('kFen'),
          n('qd3W'),
          n('7x/C'),
          n('LW0h'),
          n('+KXO'),
          n('ERkP')),
        b = n.n(w),
        C = n('nBUg'),
        x = n('3XMw'),
        k = n.n(x),
        T = n('I4+6'),
        E = n('cm6r'),
        _ = n('wD1h'),
        R = n('bVhu'),
        S = n('3dad'),
        I = n('Ujvi'),
        M = n('VAyw'),
        L = n('XrEN'),
        P = n('k2KP'),
        U = n('Sp5X'),
        O = n('gK2g'),
        B = n('rHpw'),
        N = n('t62R'),
        H = n('MWbm'),
        z = function (e) {
          var t = e.description,
            n = e.title
          return n || t
            ? b.a.createElement(
                H.a,
                { style: F.metadataContainer },
                n ? b.a.createElement(N.b, { style: F.metadata, weight: 'bold', withHashflags: !0 }, n) : null,
                t ? b.a.createElement(N.b, { style: F.metadata }, t) : null,
              )
            : null
        },
        F = B.a.create(function (e) {
          return {
            metadata: { marginBottom: e.spaces.space4 },
            metadataContainer: {
              flex: 1,
              flexDirection: 'column',
              paddingBottom: e.spaces.space4,
              paddingHorizontal: e.spaces.space12,
              paddingTop: e.spaces.space12,
            },
          }
        }),
        W = n('wnTO'),
        A = n('lklz'),
        D = n('diSD'),
        V = n('mN6z'),
        j = n('zrOZ'),
        X = n('oQhu'),
        q = n('Qyxo'),
        K = k.a.b74bf8b7,
        Y = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(h()(e), '_getPhotos', function () {
                var t = e.props,
                  n = t.authorId,
                  a = t.forwardPivotInfo,
                  r = t.loggedInUserId,
                  i = t.mediaAltTranslations,
                  o = t.mediaDetails,
                  l = t.shouldShowAltLabelAlways
                return Q(n, a, r, o, l, i)
              }),
              f()(h()(e), '_getSourceUser', function () {
                var t = e.props.mediaDetails
                return t && t[0] && t[0].additional_media_info && t[0].additional_media_info.source_user
              }),
              f()(h()(e), '_openPhotoModal', function () {
                var t = e.props.onClick,
                  n = e._getPhotos(),
                  a = 'string' == typeof n[0].expandedUrl ? n[0].expandedUrl : n[0].expandedUrl.pathname
                t && t(), U.a && U.a.push(a)
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(V.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.hasSensitiveMedia,
                    a = t.style,
                    r = t.withHalvedMediaSize
                  return b.a.createElement(C.b.UseProps, null, function (t) {
                    var i = t.edgeToEdgeEnabled,
                      o = t.sensitiveMediaWarningsEnabled,
                      l = e.sensitiveMediaWarnings,
                      s = l.size && o()
                    return b.a.createElement(
                      O.a.Provider,
                      { namespace: { element: 'media' } },
                      b.a.createElement(
                        H.a,
                        { style: [r ? G.halvedMediaSize : null, a] },
                        n || l.size
                          ? b.a.createElement(
                              P.a,
                              {
                                revealableTombstoneConfig: s
                                  ? P.a.sensitiveMediaWarningTombstoneConfig
                                  : P.a.sensitiveMediaTombstoneConfig,
                                sensitiveMediaWarnings: s ? l : void 0,
                                withRoundedCorners: !i(),
                              },
                              e._renderContent(),
                            )
                          : e._renderContent(),
                        e._renderMediaTags(),
                        e._renderMediaAttribution(),
                      ),
                    )
                  })
                },
              },
              {
                key: '_renderContent',
                value: function () {
                  var e = this.props,
                    t = e.mediaContentStyles,
                    n = e.showBorder,
                    a = e.showRoundCorners,
                    r = this._getPhotos(),
                    i = n && (r.length >= 1 || this._isVideo()),
                    o = r.length
                      ? T.a.generate({
                          backgroundColor: 'transparent',
                          color: B.a.theme.colors.primary,
                          withFocusWithinFocusRing: !0,
                        })
                      : null,
                    l = null
                  return (
                    r.length >= 1 ? (l = this._renderPhotos()) : this._isVideo() && (l = this._renderVideo()),
                    l
                      ? b.a.createElement(
                          E.a,
                          { interactiveStyles: o, style: [i && G.itemWithBorder, a && G.itemWithRoundCorners, t] },
                          l,
                          this._renderMediaMetadata(),
                        )
                      : null
                  )
                },
              },
              {
                key: '_renderPhotos',
                value: function () {
                  var e = this.props,
                    t = e.cacheLocationKey,
                    n = e.containerAspectRatio,
                    a = e.enableKeyboardShortcuts,
                    r = e.hideAcceptOverlay,
                    i = e.isCondensed,
                    o = e.mediaMaxHeight,
                    l = e.onClick,
                    s = e.singleImageMaxAspectRatio,
                    c = e.singleImageMinAspectRatio,
                    d = e.withCenterCrop,
                    u = e.withLink
                  return b.a.createElement(
                    _.a,
                    { enabled: a, handlers: f()({}, _.a.shortcuts.openMediaModal, this._openPhotoModal) },
                    b.a.createElement(W.a, {
                      cacheLocationKey: t,
                      containerAspectRatio: n,
                      hideAcceptOverlay: r,
                      images: this._getPhotos(),
                      isCondensed: i,
                      mediaMaxHeight: o,
                      onClick: l,
                      singleImageMaxAspectRatio: s,
                      singleImageMinAspectRatio: c,
                      withCenterCrop: d,
                      withLink: u,
                    }),
                  )
                },
              },
              {
                key: '_renderVideo',
                value: function () {
                  var e = this.props,
                    t = e.authorScreenName,
                    n = e.forwardPivotInfo,
                    a = e.hideAcceptOverlay,
                    r = e.mediaDetails,
                    i = e.preventPlayback,
                    l = e.promotedContent,
                    s = e.shouldShowAltLabelAlways,
                    c = e.tweetCreatedAt,
                    d = e.tweetId,
                    u = e.tweetText,
                    h = e.videoAspectRatio,
                    p = e.videoOptions,
                    m = e.withPostPlayback,
                    y = r[0],
                    g = y && 'photo' !== y.type ? y : void 0,
                    v = g && L.a.extractVideoProps(A.b.forTweet(d), g, void 0, n, s)
                  return g && v
                    ? b.a.createElement(
                        D.a,
                        o()({}, v, p, {
                          additionalMediaInfo: g.additional_media_info,
                          aspectRatio: h || v.aspectRatio,
                          authorScreenName: t,
                          hideDataSaverAcceptOverlay: a,
                          preventPlayback: i,
                          promotedContent: l,
                          tweetCreatedAt: c,
                          tweetId: d,
                          tweetText: u,
                          withPostPlayback: m,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderMediaMetadata',
                value: function () {
                  var e = this.props,
                    t = e.displayMediaMetadata,
                    n = e.mediaDetails,
                    a = r()(n, 1)[0].additional_media_info || {},
                    i = a.description,
                    o = a.title
                  return t ? b.a.createElement(z, { description: i, title: o }) : null
                },
              },
              {
                key: '_renderMediaTags',
                value: function () {
                  var e = this.props,
                    t = e.displayMediaTags,
                    n = e.loggedInUserId,
                    a = e.mediaDetails,
                    r = e.mediaTagsLink,
                    i = e.withMediaTagsIcon,
                    o = M.a.mergeTaggedUsers(a)
                  return t && r && o.length
                    ? b.a.createElement(I.a, {
                        linkPath: r,
                        loggedInUserId: n,
                        size: i ? 'body' : 'subtext2',
                        style: G.mediaTags,
                        users: o,
                        withIcon: i,
                      })
                    : null
                },
              },
              {
                key: '_renderMediaAttribution',
                value: function () {
                  var e = this.props,
                    t = e.displayMediaAttribution,
                    n = e.withMediaTagsIcon,
                    a = this._getSourceUser()
                  return t && a
                    ? b.a.createElement(R.a, {
                        size: n ? 'body' : 'subtext2',
                        style: G.mediaAttribution,
                        userIsProtected: a.protected,
                        userIsVerified: a.verified,
                        userName: a.name,
                        userScreenName: a.screen_name,
                      })
                    : null
                },
              },
              {
                key: '_isVideo',
                value: function () {
                  var e = this.props.mediaDetails
                  return e[0] && L.a.isVideo(e[0])
                },
              },
              {
                key: 'sensitiveMediaWarnings',
                get: function () {
                  var e = this.props.mediaDetails
                  return Object(j.a)(
                    e.flatMap(function (e) {
                      var t = e.sensitive_media_warning
                      return t
                        ? Object.keys(t).filter(function (e) {
                            return t[e]
                          })
                        : []
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      f()(Y, 'defaultProps', {
        displayMediaAttribution: !1,
        displayMediaTags: !0,
        enableKeyboardShortcuts: !1,
        hasSensitiveMedia: !1,
        isCondensed: !1,
        mediaDetails: [],
        showBorder: !0,
        showRoundCorners: !0,
        singleImageMaxAspectRatio: 16 / 9,
        singleImageMinAspectRatio: 16 / 9,
        withCenterCrop: !1,
        withLink: !0,
        withMediaTagsIcon: !1,
      })
      var Q = Object(X.a)(function (e, t, n, a, r) {
          var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
          return Object(q.a)(a, function (a) {
            var o = { pathname: a.expanded_url, state: { forwardPivotInfo: t } },
              l = 'photo' === a.type && a.original_info,
              s = S.a.getOriginalImage(a)
            return (
              l &&
              s && {
                accessibilityLabel: i[a.id_str] || a.ext_alt_text || K,
                backgroundColor: S.a.getBackgroundColor(a),
                cropCandidates: S.a.getCropCandidates(a),
                expandedUrl: o,
                height: s.height,
                id_str: a.id_str,
                shouldShowAltLabel: !(!a.ext_alt_text || (e !== n && !r)),
                url: s.url,
                width: s.width,
              }
            )
          })
        }),
        G = B.a.create(function (e) {
          return {
            halvedMediaSize: { minWidth: 2 * e.spacesPx.space72, width: '50%' },
            itemWithBorder: { borderWidth: '1px', borderStyle: 'solid', borderColor: e.colors.nestedBorderColor },
            itemWithRoundCorners: { borderRadius: e.borderRadii.xLarge, overflow: 'hidden' },
            mediaAttribution: { marginTop: e.spaces.space4 },
            mediaTags: { marginTop: e.spaces.space4 },
          }
        })
      t.a = Y
    },
    uCxL: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        h = n.n(u),
        p = n('2VqO'),
        m = n.n(p),
        y = n('KEM+'),
        g = n.n(y),
        v = n('97Jx'),
        f = n.n(v),
        w = (n('2G9S'), n('ho0z'), n('5BYb'), n('7x/C'), n('kFen'), n('qd3W'), n('uFXj'), n('SV7d')),
        b = n('ERkP'),
        C = n.n(b),
        x = n('t62R'),
        k = n('/Ikv'),
        T = n('ir4X'),
        E = n('3XMw'),
        _ = n.n(E),
        R = n('htQn'),
        S = n('GBcw'),
        I = n('Nqmc'),
        M = n('rHpw'),
        L = n('rOiJ'),
        P = n('kY28'),
        U = n('cTG8'),
        O = n('UzHQ'),
        B = n('E0cF'),
        N = n('jV+4'),
        H = n('IV4V'),
        z = n('Y6la'),
        F = n('RT39'),
        W = n('shC7'),
        A = n('MWbm'),
        D = n('mN6z'),
        V = n('tn7R'),
        j = n('VRZ4'),
        X = ['iconStyle', 'style'],
        q = _.a.c9d7235d,
        K = _.a.a8b58cf3,
        Y = _.a.i5f742fd,
        Q = { viewType: 'quote_tweet' }
      t.a = function (e) {
        var t = e.tweet,
          n = !!t && !B.a.isQuotedTweetUnavailable({ is_quote_status: !0, quoted_status: t })
        return t && n ? C.a.createElement(G, f()({}, e, { tweet: t })) : C.a.createElement(O.a, null)
      }
      var G = (function (e) {
        h()(n, e)
        var t = m()(n)
        function n() {
          var e
          o()(this, n)
          for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(r))),
            g()(d()(e), '_renderForwardPivot', function () {
              var t = e.props,
                n = t.forwardPivotInfo,
                a = t.tweet,
                r = t.withReactions
              if (n && n.displayType === F.a.SoftIntervention) {
                var i = n.displayType,
                  o = n.landingUrl,
                  l = n.softInterventionDisplayType,
                  s = n.text
                return C.a.createElement(F.b, {
                  displayType: i,
                  inQuoteTweet: !0,
                  isTweetNonCompliant: 'non_compliant' === a.limited_actions,
                  landingUrl: o,
                  softInterventionDisplayType: l,
                  text: s,
                  tweetId: a.id_str,
                  withReactions: r,
                })
              }
            }),
            g()(d()(e), '_handlePress', function () {
              var t = e.props.onPress
              t && t()
            }),
            e
          )
        }
        return (
          s()(n, [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return !Object(D.a)(e, this.props)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props.tweet
                return this._isWithheldTweet(e) ? this._renderWithheldTweet() : this._renderTweet()
              },
            },
            {
              key: '_renderTweet',
              value: function () {
                var e = this.props,
                  t = e.nativeID,
                  n = e.shouldShowBorder,
                  a = e.style,
                  r = e.tweet,
                  i = e.withLink,
                  o = [$.quoteTweetContainer, n && $.quoteTweetContainerBorder, !i && $.quoteTweetWithoutLink, a]
                return C.a.createElement(
                  w.a,
                  { behavioralEventContext: Q },
                  C.a.createElement(
                    A.a,
                    { nativeID: t },
                    C.a.createElement(x.b, { style: M.a.visuallyHidden }, q),
                    C.a.createElement(
                      R.a,
                      {
                        link: i ? { pathname: 'https://twitter.com'.concat(r.permalink), anchorless: !0 } : void 0,
                        onPress: this._handlePress,
                        style: o,
                        withInteractiveStyling: !!i,
                        withOutsetFocusRing: !0,
                      },
                      this._renderTweetContent(),
                      this._renderForwardPivot(),
                    ),
                  ),
                )
              },
            },
            {
              key: '_renderTweetContent',
              value: function () {
                var e = this.props.isCondensed
                return C.a.createElement(
                  A.a,
                  null,
                  this._renderHeader(),
                  e ? this._renderTweetContentCondensed() : this._renderTweetContentExpanded(),
                )
              },
            },
            {
              key: '_renderTweetContentCondensed',
              value: function () {
                return C.a.createElement(
                  A.a,
                  { style: $.condensedContentBody },
                  this.shouldRenderMedia
                    ? C.a.createElement(
                        A.a,
                        { style: [$.marginTopXXSmall, $.condensedMediaSide] },
                        this._renderTweetMedia(!0),
                      )
                    : null,
                  C.a.createElement(A.a, { style: $.condensedContentSide }, this._renderTextContent(!0)),
                )
              },
            },
            {
              key: '_renderTweetContentExpanded',
              value: function () {
                return C.a.createElement(
                  C.a.Fragment,
                  null,
                  this._renderTextContent(!1),
                  this.shouldRenderMedia
                    ? C.a.createElement(A.a, { style: $.marginTopXXSmall }, this._renderTweetMedia(!1))
                    : null,
                )
              },
            },
            {
              key: '_renderHeader',
              value: function () {
                var e = this.props,
                  t = e.socialContextProps,
                  n = e.tweet,
                  a = n.user || {}
                return C.a.createElement(
                  A.a,
                  { style: $.headerContainer },
                  t ? this._renderSocialContext() : null,
                  C.a.createElement(
                    A.a,
                    {
                      style: [
                        a.highlightedLabel ? $.attributionWrapperFlexStart : $.attributionWrapperCenter,
                        $.attributionWrapper,
                      ],
                    },
                    this._renderUserName(a),
                    C.a.createElement(
                      x.b,
                      { color: 'gray700', dir: W.a.getConstants().isRTL ? 'rtl' : 'ltr', style: $.timestampWrapper },
                      ' ',
                      '· ',
                      this._renderTimestamp(n.created_at),
                    ),
                  ),
                )
              },
            },
            {
              key: '_renderSocialContext',
              value: function () {
                var e = this.props.socialContextProps
                if (e) {
                  var t = e.iconStyle,
                    n = e.style,
                    a = r()(e, X)
                  return C.a.createElement(
                    I.a,
                    f()(
                      {
                        iconStyle: [$.socialContextIconSpacing, t],
                        style: [$.socialContextSpacing, n],
                        withLeftPadding: !1,
                      },
                      a,
                    ),
                  )
                }
              },
            },
            {
              key: '_renderTextContent',
              value: function (e) {
                var t = this.props.tweet
                return C.a.createElement(
                  A.a,
                  { style: $.textContentPadding },
                  t.self_thread ? null : this._renderReplyContext(),
                  this._renderTweetText(e),
                  this._renderShowLinks(),
                )
              },
            },
            {
              key: '_renderShowLinks',
              value: function () {
                var e = this.props.tweet
                return this.shouldRenderShowPollText
                  ? this._renderShowText(Y)
                  : e.self_thread
                  ? this._renderShowText(K)
                  : null
              },
            },
            {
              key: '_renderTweetText',
              value: function (e) {
                var t = this.props,
                  n = t.tweet,
                  a = t.withMediaAsTextLinks,
                  r = e ? 5 : void 0
                return C.a.createElement(U.a, {
                  displayTextRange: n.display_text_range,
                  entities: n.entities,
                  lang: n.lang,
                  numberOfLines: r,
                  quotedTweetPermalink: n.quoted_status_permalink,
                  style: $.marginTopXXSmall,
                  text: n.text,
                  withCardLinks: !0,
                  withMediaLinks: a || n.possibly_sensitive || this._hasSensitiveMediaWarnings(),
                  withQuoteLinks: !0,
                })
              },
            },
            {
              key: '_renderUserName',
              value: function (e) {
                var t = this.props,
                  n = t.withHeaderLinks,
                  a = t.withUserHoverCard
                return C.a.createElement(
                  A.a,
                  { style: $.userNameRoot },
                  C.a.createElement(
                    A.a,
                    { style: $.userNameWrapper },
                    C.a.createElement(N.a, {
                      isProtected: e.protected,
                      isVerified: e.verified,
                      name: e.name,
                      profileImageUrl: e.profile_image_url_https,
                      screenName: e.screen_name,
                      withHoverCard: a,
                      withLink: n,
                    }),
                  ),
                  e.highlightedLabel ? C.a.createElement(T.a, { label: e.highlightedLabel }) : null,
                )
              },
            },
            {
              key: '_renderTweetMedia',
              value: function (e) {
                var t,
                  n = this.props,
                  a = n.forwardPivotInfo,
                  r = n.loggedInUserId,
                  i = n.mediaContentStyles,
                  o = n.mediaMaxHeight,
                  l = n.preventVideoPlayback,
                  s = n.shouldShowAltLabelAlways,
                  c = n.singleImageMaxAspectRatio,
                  d = n.singleImageMinAspectRatio,
                  u = n.tweet,
                  h = n.withCenterCrop,
                  p = n.withLink
                if (H.a.hasVoiceMedia(u))
                  return C.a.createElement(
                    A.a,
                    { style: $.marginTopXXSmall },
                    C.a.createElement(H.a, { tweet: u, withStraightBorders: !0 }),
                  )
                if (Object(j.c)(u)) {
                  var m = Object(j.b)(u)
                  if (m)
                    return C.a.createElement(
                      A.a,
                      { style: $.marginTopXXSmall },
                      C.a.createElement(j.a, { audioSpaceId: m, withStraightBorders: !0 }),
                    )
                }
                var y = e ? 1 : 1.7777777777777777,
                  g = e ? 1 : void 0,
                  v = {
                    displayOptions: {
                      badgeConfiguration: e ? { hideDuration: !1, hideDataSize: !0, hideViewCount: !0 } : void 0,
                    },
                    hidePreviewPlayButton: e,
                  },
                  f = !!o && !e
                return C.a.createElement(L.a, {
                  authorId: u.user.id_str,
                  authorScreenName: u.user.screen_name,
                  cacheLocationKey: 'quote_tweet',
                  containerAspectRatio: y,
                  displayMediaTags: !1,
                  forwardPivotInfo: a,
                  hasSensitiveMedia: u.possibly_sensitive,
                  hideAcceptOverlay: e,
                  isCondensed: e,
                  loggedInUserId: r,
                  mediaContentStyles: i,
                  mediaDetails: null === (t = u.extended_entities) || void 0 === t ? void 0 : t.media,
                  mediaMaxHeight: o,
                  mediaTagsLink: ''.concat(u.permalink, '/media_tags'),
                  preventPlayback: e || l,
                  shouldShowAltLabelAlways: s,
                  showBorder: e,
                  showRoundCorners: e,
                  singleImageMaxAspectRatio: e ? g : c,
                  singleImageMinAspectRatio: e ? g : d,
                  style: f ? $.centerItems : void 0,
                  tweetCreatedAt: u.created_at,
                  tweetId: u.id_str,
                  tweetText: u.text,
                  videoAspectRatio: y,
                  videoOptions: v,
                  withCenterCrop: h,
                  withLink: p,
                  withPostPlayback: !0,
                })
              },
            },
            {
              key: '_renderTimestamp',
              value: function (e) {
                var t = this.props,
                  n = t.tweet,
                  a = t.withHeaderLinks ? { pathname: 'https://twitter.com'.concat(n.permalink) } : void 0
                return C.a.createElement(S.a, { link: a, timestamp: e })
              },
            },
            {
              key: '_renderReplyContext',
              value: function () {
                var e,
                  t = this.props.tweet
                return t.in_reply_to_status_id_str
                  ? C.a.createElement(P.a, {
                      displayTextRange: t.display_text_range,
                      inReplyToName: t.in_reply_to_name,
                      inReplyToScreenName: t.in_reply_to_screen_name,
                      inReplyToUserIdStr: t.in_reply_to_user_id_str,
                      linkType: P.a.ReplyContextLinkTypes.none,
                      style: $.marginTopXXSmall,
                      tweetPermalink: t.permalink,
                      userMentionsEntities: null === (e = t.entities) || void 0 === e ? void 0 : e.user_mentions,
                    })
                  : null
              },
            },
            {
              key: '_renderShowText',
              value: function (e) {
                var t = this.props.withLink
                return C.a.createElement(x.b, { color: 'link', style: [$.marginTopXXSmall, !t && $.disabledLink] }, e)
              },
            },
            {
              key: '_renderWithheldTweet',
              value: function () {
                var e = this.props,
                  t = e.style,
                  n = e.tweet
                return C.a.createElement(
                  A.a,
                  { style: t },
                  C.a.createElement(z.a, {
                    displayTextRange: n.display_text_range,
                    entities: n.withheld_entities || n.entities,
                    inline: !0,
                    lang: n.lang,
                    text: n.withheld_text || n.text,
                  }),
                )
              },
            },
            {
              key: 'shouldRenderMedia',
              get: function () {
                var e = this.props.tweet
                return this._hasMedia(e) && !e.possibly_sensitive && !this._hasSensitiveMediaWarnings()
              },
            },
            {
              key: 'shouldRenderShowPollText',
              get: function () {
                var e = this.props.tweet
                return e.card && k.a.isPollCard(e.card.name)
              },
            },
            {
              key: '_hasMedia',
              value: function (e) {
                var t = e.extended_entities,
                  n = this.props.withMediaAsTextLinks
                return this._canRenderAudioSpaceMedia(e) || !(!(t && t.media && t.media.length) || n)
              },
            },
            {
              key: '_hasSensitiveMediaWarnings',
              value: function () {
                var e, t
                return !(
                  null === (e = this.props.tweet.extended_entities) ||
                  void 0 === e ||
                  null === (t = e.media) ||
                  void 0 === t ||
                  !t
                    .flatMap(function (e) {
                      return e.sensitive_media_warning ? Object(V.a)(e.sensitive_media_warning) : []
                    })
                    .some(Boolean)
                )
              },
            },
            {
              key: '_canRenderAudioSpaceMedia',
              value: function (e) {
                return Boolean(Object(j.c)(e) && !this.props.isCondensed)
              },
            },
            {
              key: '_isWithheldTweet',
              value: function (e) {
                return !!e.withheld_scope
              },
            },
          ]),
          n
        )
      })(C.a.Component)
      g()(G, 'defaultProps', {
        onPress: void 0,
        shouldShowBorder: !0,
        withCenterCrop: !1,
        withMediaAsTextLinks: !1,
        withHeaderLinks: !1,
        withLink: !0,
        withUserHoverCard: !0,
      })
      var $ = M.a.create(function (e) {
        return {
          marginTopXXSmall: { marginTop: e.spaces.space4 },
          quoteTweetContainer: { overflow: 'hidden', minHeight: e.spaces.space64 },
          quoteTweetContainerBorder: {
            borderColor: e.colors.nestedBorderColor,
            borderWidth: e.borderWidths.small,
            borderRadius: e.borderRadii.xLarge,
          },
          quoteTweetWithoutLink: { cursor: 'default' },
          socialContextSpacing: { marginBottom: e.spaces.space2, marginLeft: e.spaces.space8 },
          socialContextIconSpacing: { marginRight: e.spaces.space4 },
          headerContainer: { flexDirection: 'column', marginHorizontal: e.spaces.space12, marginTop: e.spaces.space12 },
          userNameRoot: { flexShrink: 1, overflow: 'hidden' },
          userNameWrapper: { alignItems: 'flex-start', maxWidth: '100%' },
          attributionWrapper: { flexShrink: 1, flexDirection: 'row' },
          attributionWrapperCenter: { alignItems: 'center' },
          attributionWrapperFlexStart: { alignItems: 'flex-start' },
          timestampWrapper: { flexShrink: 0, whiteSpace: 'pre' },
          textContentPadding: { marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space12 },
          disabledLink: { opacity: 0.5 },
          condensedMediaSide: {
            flex: 2,
            alignSelf: 'flex-start',
            marginVertical: e.spaces.space12,
            marginLeft: e.spaces.space12,
            overflow: 'hidden',
            borderRadius: e.borderRadii.xLarge,
            borderStyle: 'solid',
            borderColor: 'transparent',
          },
          condensedContentSide: { flex: 8, flexBasis: '0%' },
          condensedContentBody: { flexDirection: 'row' },
          centerItems: { alignItems: 'center' },
        }
      })
    },
    x0mb: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
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
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
  },
])
//# sourceMappingURL=WIPED
