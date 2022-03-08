;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    Ujvi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('2VqO'),
        c = n.n(d),
        u = (n('z84I'), n('ho0z'), n('ERkP')),
        p = n.n(u),
        h = n('t62R'),
        m = n('zrc3'),
        y = n('6ZHn'),
        g = n('rHpw'),
        f = n('MWbm'),
        v = n('3XMw'),
        w = n.n(v),
        T = w.a.f8e8e32d,
        _ = (function (e) {
          l()(n, e)
          var t = c()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.linkPath,
                    n = e.size,
                    r = e.users,
                    i = e.withIcon,
                    a = this._decodeUserList(),
                    o = a.isCurrentUserIncluded ? C.withCurrentUser : C.withoutCurrentUser,
                    s = this._selectMessage(o, a),
                    l = r.map(function (e) {
                      return e.user_id
                    }),
                    d = t && { pathname: t, state: { userIds: l } }
                  return r.length > 0
                    ? p.a.createElement(
                        f.a,
                        { style: [b.root, this.props.style] },
                        p.a.createElement(
                          h.b,
                          { color: 'gray700', link: d, size: n, withInteractiveStyling: !!d },
                          i ? p.a.createElement(y.a, { style: b.icon }) : null,
                          s,
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
                    r = t
                      ? Object(m.a)(n, function (e) {
                          return e.user_id === t
                        })
                      : -1,
                    i = r >= 0,
                    a = i && n[r] ? n[r] : void 0
                  return {
                    isCurrentUserIncluded: i,
                    firstName: n.length >= 1 ? (i && a ? a.name : n[0].name) : void 0,
                    secondName: n.length >= 2 ? (i && 0 !== r ? n[0].name : n[1].name) : void 0,
                    otherUsersCount: n.length > 0 ? n.length - 1 : 0,
                  }
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        k = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'normal'
          return p.a.createElement(h.b, { color: 'gray700', weight: t }, e)
        },
        C = {
          withCurrentUser: {
            single: function () {
              return k(T, 'bold')
            },
            multiple: function (e) {
              var t = e.otherUsersCount,
                n = e.secondName
              return t && n
                ? k(
                    p.a.createElement(
                      w.a.I18NFormatMessage,
                      { $i18n: 'd7b2c271' },
                      p.a.createElement(h.b, { weight: 'bold' }, w.a.df6703d2),
                      w.a.c20f7e9e({ otherUsersCount: t, secondName: p.a.createElement(h.b, null, n) }),
                    ),
                  )
                : null
            },
          },
          withoutCurrentUser: {
            single: function (e) {
              var t = e.firstName
              return t ? k(t) : null
            },
            multiple: function (e) {
              var t = e.firstName,
                n = e.otherUsersCount,
                r = e.secondName
              return n
                ? k(
                    p.a.createElement(
                      w.a.I18NFormatMessage,
                      { $i18n: 'b035fe73' },
                      p.a.createElement(h.b, null, t),
                      w.a.he26f625({ otherUsersCount: n, secondName: p.a.createElement(h.b, null, r) }),
                    ),
                  )
                : null
            },
          },
        },
        b = g.a.create(function (e) {
          return { root: { flexDirection: 'row' }, icon: { color: e.colors.gray700, marginRight: e.spaces.space4 } }
        })
    },
    VAyw: function (e, t, n) {
      'use strict'
      n('LW0h'), n('7x/C')
      var r = n('FLCi'),
        i = n('s1N3'),
        a = function (e) {
          var t, n
          return (
            (null === (t = e.features) || void 0 === t || null === (n = t.all) || void 0 === n ? void 0 : n.tags) || []
          )
        }
      t.a = {
        mergeTaggedUsers: function (e) {
          var t = Object(r.a)(e, a).filter(function (e) {
            return 'user' === e.type
          })
          return Object(i.a)(t, function (e) {
            return e.user_id
          })
        },
      }
    },
    bVhu: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        i = n.n(r),
        a = n('t62R'),
        o = n('gK2g'),
        s = n('jV+4'),
        l = n('MWbm'),
        d = n('3XMw'),
        c = n.n(d),
        u = c.a.f4393d0f,
        p = { element: 'screen_name', action: 'profile_click' }
      t.a = function (e) {
        var t = e.size,
          n = e.style,
          r = e.userIsProtected,
          d = e.userIsVerified,
          h = e.userName,
          m = e.userScreenName,
          y = o.a.useAnalytics(),
          g = i.a.createElement(s.a, {
            isProtected: r,
            isVerified: d,
            name: h,
            onLinkClick: function () {
              y.scribe(p)
            },
            screenName: m,
            withHoverCard: !0,
            withLink: !0,
            withScreenName: !1,
          })
        return i.a.createElement(
          l.a,
          { accessibilityLabel: u({ name: h }), style: n },
          i.a.createElement(
            a.b,
            { color: 'gray700', size: t },
            i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'dbf19261' }, g),
          ),
        )
      }
    },
    cTG8: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        i = n.n(r),
        a = n('m3Bd'),
        o = n.n(a),
        s = n('yiKp'),
        l = n.n(s),
        d = n('RhWx'),
        c = n.n(d),
        u = n('VrFO'),
        p = n.n(u),
        h = n('Y9Ll'),
        m = n.n(h),
        y = n('1Pcy'),
        g = n.n(y),
        f = n('5Yy7'),
        v = n.n(f),
        w = n('2VqO'),
        T = n.n(w),
        _ = n('KEM+'),
        k = n.n(_),
        C =
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
        b = n.n(C),
        x = n('t62R'),
        E = n('OIC0'),
        R = n('rHpw'),
        I = n('Q0VY'),
        M = n('FiRh'),
        S = [
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
          v()(n, e)
          var t = T()(n)
          function n() {
            var e
            p()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              k()(g()(e), '_getTextParts', function () {
                var t,
                  n,
                  r = e.props,
                  i = r.displayTextRange,
                  a = r.enrichments,
                  o = r.entities,
                  s = r.entityBaseUrl,
                  d = r.hitHighlights,
                  u = r.linkify,
                  p = r.quotedTweetPermalink,
                  h = r.text,
                  m = r.unmentionedUserIds,
                  y = r.withQuoteLinks,
                  g = r.withUnicodeEmojis,
                  f = h,
                  v = o,
                  w = o && o.urls && o.urls.length
                if (p && !w && y && ((f = ''.concat(h, ' ').concat(u ? p.url : p.display)), u)) {
                  var T = c()(h).length + 1
                  v = l()(
                    l()({ media: [] }, o),
                    {},
                    {
                      urls: [
                        {
                          display_url: p.display,
                          expanded_url: p.expanded,
                          url: p.url,
                          indices: [T, T + p.url.length],
                        },
                      ],
                    },
                  )
                }
                var _ = [0, f.length],
                  k = [(i || _)[0], f.length],
                  C = d || []
                return (
                  null !== (t = v) &&
                    void 0 !== t &&
                    null !== (n = t.user_mentions) &&
                    void 0 !== n &&
                    n.length &&
                    null != m &&
                    m.length &&
                    (v = l()(
                      l()({}, v),
                      {},
                      {
                        user_mentions: v.user_mentions.filter(function (e) {
                          return !m.includes(e.id_str)
                        }),
                      },
                    )),
                  I.a.tweetTextParts(f, k, v, a, {
                    useHashtagUrl: !0,
                    hitHighlights: C,
                    baseUrl: s,
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
                    r = (e.hitHighlights, e.lang),
                    a = e.linkColor,
                    s = e.linkify,
                    d = e.nativeID,
                    c = e.numberOfLines,
                    u = e.onEntityClick,
                    p = e.quotedTweetId,
                    h = (e.quotedTweetPermalink, e.style),
                    m = (e.text, e.transformUrl),
                    y = e.underlineLinks,
                    g = (e.unmentionedUserIds, e.withCardLinks),
                    f = e.withMediaLinks,
                    v = e.withQuoteLinks,
                    w = (e.withUnicodeEmojis, o()(e, S)),
                    T = this._getTextParts(),
                    _ = T.some(function (e) {
                      return e.entityType === E.a.MEDIA
                    }),
                    k = _ && !f,
                    C = p && !v,
                    R = T.map(function (e, r) {
                      var i = r === T.length - 1,
                        a = !!e.tweetId && e.tweetId === p
                      if (!f && e.entityType === E.a.MEDIA) return null
                      if (a && _ && e.indices && t[1] === e.indices[1]) return null
                      if (i) {
                        if (a && C && !k) return null
                        if (!k && !C && !g && n && (n === e.url || n === e.expandedUrl)) return null
                      }
                      return e
                    }).filter(Boolean),
                    I = R.map(function (e, t) {
                      var n = t === R.length - 1
                      if (e.entityType === E.a.TEXT) {
                        var r = e,
                          i = ''.concat(e.prefix).concat(e.text).trim()
                        return (!n && 0 !== t) || i
                          ? (n && (r = l()(l()({}, e), {}, { text: e.text.replace(/(\s+$)/g, '') })),
                            b.a.createElement(M.c, {
                              key: t,
                              linkColor: a,
                              linkify: s,
                              onClick: u,
                              part: r,
                              transformUrl: m,
                              underlineLinks: y,
                            }))
                          : null
                      }
                      return b.a.createElement(M.c, {
                        key: t,
                        linkColor: a,
                        linkify: s,
                        onClick: u,
                        part: e,
                        transformUrl: m,
                        underlineLinks: y,
                      })
                    }).filter(Boolean)
                  return I.length
                    ? b.a.createElement(
                        x.b,
                        i()({}, w, { children: I, lang: r, nativeID: d, numberOfLines: c, style: [P.root, h] }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      k()(L, 'defaultProps', {
        linkColor: 'link',
        linkify: M.a.linkify,
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
    kY28: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('1Pcy'),
        l = n.n(s),
        d = n('5Yy7'),
        c = n.n(d),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        y = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        g = n.n(y),
        f = n('t62R'),
        v = n('rHpw'),
        w = n('MWbm'),
        T = n('ddV6'),
        _ = n.n(T),
        k = n('RhWx'),
        C = n.n(k),
        b =
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
        x = n.n(b),
        E = n('yDX5'),
        R = x.a.ga629a8b,
        I = function (e, t, n) {
          return e
            ? g.a.createElement(
                E.a,
                { screenName: t },
                g.a.createElement(f.b, { link: 'https://twitter.com/'.concat(t), onClick: n }, '@'.concat(t)),
              )
            : '@'.concat(t)
        },
        M = function (e) {
          var t = e.children,
            n = e.onClick,
            r = e.viewMorePath
          return g.a.createElement(f.b, { accessibilityLabel: R, link: r, onClick: n }, t)
        },
        S = function (e) {
          return e.screen_name
        },
        L = n('s1N3'),
        P = function (e, t) {
          return e.find(function (e) {
            return e.id_str === t
          })
        },
        U = 'NotIncluded',
        N = 'DirectReply',
        O = 'NonDirectReply',
        A = function (e) {
          var t = e.displayTextRange,
            n = e.inReplyToName,
            r = e.inReplyToScreenName,
            i = e.inReplyToUserIdStr,
            a = e.userMentionsEntities,
            o = a.filter(function (e) {
              return e.indices[0] < t[0] || e.id_str === i
            }),
            s = C()(o),
            l = P(a, i),
            d = n || r
          return (
            !l && i && d && r && ((l = { id_str: i, name: d, screen_name: r, indices: [] }), s.push(l)),
            Object(L.a)(s, function (e) {
              return e.id_str
            })
          )
        },
        W = function (e) {
          var t,
            n = e.displayTextRange,
            r = e.inReplyToName,
            i = e.inReplyToScreenName,
            a = e.inReplyToUserIdStr,
            o = e.linkify,
            s = e.loggedInUserId,
            l = e.onClick,
            d = e.tweetPermalink,
            c = e.unmentionedUserIds,
            u = e.userMentionsEntities,
            p = a,
            h = A({
              displayTextRange: n,
              inReplyToName: r,
              inReplyToScreenName: i,
              inReplyToUserIdStr: a,
              userMentionsEntities: u,
            }),
            m = { id_str: '', indices: [], name: '', screen_name: '' },
            y = null !== (t = P(h, p)) && void 0 !== t ? t : m,
            v = (function (e, t, n, r) {
              var i = e ? g.a.createElement(M, { onClick: n, viewMorePath: t }) : g.a.createElement('span', null),
                a = e ? g.a.createElement(f.b, { color: 'link' }) : g.a.createElement('span', null),
                o = function (t) {
                  var n = null == r ? void 0 : r.includes(t.id_str)
                  return e && !n
                }
              return {
                replyToOne: function (e) {
                  var t = e.user,
                    r = I(o(t), S(t), n)
                  return g.a.createElement(x.a.I18NFormatMessage, { $i18n: 'h5970807' }, r)
                },
                replyToTwo: function (e) {
                  var t = e.userOne,
                    r = e.userTwo,
                    i = I(o(t), S(t), n),
                    s = I(o(r), S(r), n)
                  return g.a.createElement(
                    x.a.I18NFormatMessage,
                    { $i18n: 'ge01e6a2' },
                    i,
                    g.a.cloneElement(a, null, x.a.f34e6516),
                    s,
                  )
                },
                replyToMany: function (e) {
                  var t = e.othersCount,
                    r = e.user,
                    a = I(o(r), S(r), n)
                  return g.a.createElement(
                    x.a.I18NFormatMessage,
                    { $i18n: 'f5a069ab' },
                    a,
                    g.a.cloneElement(i, null, x.a.ff31714c({ othersCount: t })),
                  )
                },
                indirectReplyToThree: function (e) {
                  var t = e.userOne,
                    r = e.userThree,
                    i = e.userTwo,
                    s = I(o(t), S(t), n),
                    l = I(o(i), S(i), n),
                    d = I(o(r), S(r), n)
                  return g.a.createElement(
                    x.a.I18NFormatMessage,
                    { $i18n: 'hd7dd197' },
                    s,
                    l,
                    g.a.cloneElement(a, null, x.a.e06c99b6),
                    d,
                  )
                },
                indirectReplyToMany: function (e) {
                  var t = e.othersCount,
                    r = e.userOne,
                    a = e.userTwo,
                    s = I(o(r), S(r), n),
                    l = I(o(a), S(a), n)
                  return g.a.createElement(
                    x.a.I18NFormatMessage,
                    { $i18n: 'g4eb2847' },
                    s,
                    l,
                    g.a.cloneElement(i, null, x.a.i4e2f96b({ othersCount: t })),
                  )
                },
              }
            })(o, new URL(''.concat(d, '/people'), 'https://twitter.com').toString(), l, c),
            w = s === p,
            T = h.some(function (e) {
              return e.id_str === s
            })
          switch (w ? N : T ? O : U) {
            case N:
            case U:
              switch (h.length) {
                case 1:
                  return v.replyToOne({ user: y })
                case 2:
                  var k,
                    C =
                      null !==
                        (k = h.find(function (e) {
                          return e !== y
                        })) && void 0 !== k
                        ? k
                        : m
                  return v.replyToTwo({ userOne: y, userTwo: C })
                case 3:
                  var b = h.filter(function (e) {
                      return e !== y
                    }),
                    E = _()(b, 2),
                    R = E[0],
                    L = E[1]
                  return v.indirectReplyToThree({ userOne: y, userTwo: R, userThree: L })
                default:
                  var W,
                    V =
                      null !==
                        (W = h.find(function (e) {
                          return e !== y
                        })) && void 0 !== W
                        ? W
                        : m
                  return v.indirectReplyToMany({ userOne: y, userTwo: V, othersCount: h.length - 2 })
              }
            case O:
              switch (h.length) {
                case 1:
                  return null
                case 2:
                  var B,
                    D =
                      null !==
                        (B = h.find(function (e) {
                          return e !== y
                        })) && void 0 !== B
                        ? B
                        : m
                  return v.replyToTwo({ userOne: y, userTwo: D })
                case 3:
                  var z,
                    H,
                    j =
                      null !==
                        (z = h.find(function (e) {
                          var t = e.id_str
                          return t !== s && t !== p
                        })) && void 0 !== z
                        ? z
                        : m
                  return v.indirectReplyToThree({
                    userOne: y,
                    userTwo: null !== (H = P(h, s)) && void 0 !== H ? H : m,
                    userThree: j,
                  })
                default:
                  var X
                  return v.indirectReplyToMany({
                    userOne: y,
                    userTwo: null !== (X = P(h, s)) && void 0 !== X ? X : m,
                    othersCount: h.length - 2,
                  })
              }
            default:
              return null
          }
        },
        V = Object.freeze({ Threaded: 'threaded', Isolated: 'isolated', None: 'none' }),
        B = [V.Threaded, V.Isolated, V.None],
        D = Object.freeze({ all: 'all', name: 'name', none: 'none' }),
        z = (function (e) {
          c()(n, e)
          var t = p()(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              m()(l()(e), '_handleClick', function (t) {
                var n = e.props,
                  r = n.displayTextRange,
                  i = n.inReplyToName,
                  a = n.inReplyToScreenName,
                  o = n.inReplyToUserIdStr,
                  s = n.onClick,
                  l = n.userMentionsEntities
                s &&
                  s(
                    t,
                    A({
                      displayTextRange: r,
                      inReplyToName: i,
                      inReplyToScreenName: a,
                      inReplyToUserIdStr: o,
                      userMentionsEntities: l,
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
                    r = e.inReplyToScreenName,
                    i = e.inReplyToStatusIdStr,
                    a = e.inReplyToUserIdStr,
                    o = e.linkColor,
                    s = e.linkType,
                    l = e.loggedInUserId,
                    d = e.nativeID,
                    c = e.size,
                    u = e.style,
                    p = e.tweetPermalink,
                    h = e.unmentionedUserIds,
                    m = e.userMentionsEntities,
                    y = W({
                      displayTextRange: t,
                      inReplyToName: n,
                      inReplyToScreenName: r,
                      inReplyToUserIdStr: a,
                      tweetPermalink: p,
                      loggedInUserId: l,
                      linkify: s === D.name,
                      onClick: this._handleClick,
                      unmentionedUserIds: h,
                      userMentionsEntities: m,
                    })
                  if (s === D.all) {
                    var v = i && 'https://twitter.com/'.concat(r || 'i', '/status/').concat(i)
                    return g.a.createElement(f.b, { color: o, link: v, nativeID: d, size: c, style: u }, y)
                  }
                  return s === D.name
                    ? g.a.createElement(
                        w.a,
                        { style: [H.root, u] },
                        g.a.createElement(f.b, { color: 'gray700', nativeID: d, size: c }, y),
                      )
                    : g.a.createElement(f.b, { color: 'gray700', nativeID: d, size: c, style: u }, y)
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      m()(z, 'getReplyContextParticipants', A),
        m()(z, 'ReplyContextTypes', V),
        m()(z, 'TweetReplyContextTypes', B),
        m()(z, 'ReplyContextLinkTypes', D),
        m()(z, 'defaultProps', { linkColor: 'link', linkType: D.name, size: 'body', userMentionsEntities: [] })
      var H = v.a.create(function (e) {
        return { root: { display: 'inline-block' } }
      })
      t.a = z
    },
    rOiJ: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        i = n.n(r),
        a = n('97Jx'),
        o = n.n(a),
        s = n('VrFO'),
        l = n.n(s),
        d = n('Y9Ll'),
        c = n.n(d),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        m = n.n(h),
        y = n('2VqO'),
        g = n.n(y),
        f = n('KEM+'),
        v = n.n(f),
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
        T = n.n(w),
        _ = n('nBUg'),
        k = n('3XMw'),
        C = n.n(k),
        b = n('I4+6'),
        x = n('cm6r'),
        E = n('wD1h'),
        R = n('bVhu'),
        I = n('3dad'),
        M = n('Ujvi'),
        S = n('VAyw'),
        L = n('XrEN'),
        P = n('k2KP'),
        U = n('Sp5X'),
        N = n('gK2g'),
        O = n('rHpw'),
        A = n('t62R'),
        W = n('MWbm'),
        V = function (e) {
          var t = e.description,
            n = e.title
          return n || t
            ? T.a.createElement(
                W.a,
                { style: B.metadataContainer },
                n ? T.a.createElement(A.b, { style: B.metadata, weight: 'bold', withHashflags: !0 }, n) : null,
                t ? T.a.createElement(A.b, { style: B.metadata }, t) : null,
              )
            : null
        },
        B = O.a.create(function (e) {
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
        D = n('wnTO'),
        z = n('lklz'),
        H = n('diSD'),
        j = n('mN6z'),
        X = n('zrOZ'),
        q = n('oQhu'),
        F = n('Qyxo'),
        Y = C.a.b74bf8b7,
        K = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(p()(e), '_getPhotos', function () {
                var t = e.props,
                  n = t.authorId,
                  r = t.forwardPivotInfo,
                  i = t.loggedInUserId,
                  a = t.mediaAltTranslations,
                  o = t.mediaDetails,
                  s = t.shouldShowAltLabelAlways
                return Q(n, r, i, o, s, a)
              }),
              v()(p()(e), '_getSourceUser', function () {
                var t = e.props.mediaDetails
                return t && t[0] && t[0].additional_media_info && t[0].additional_media_info.source_user
              }),
              v()(p()(e), '_openPhotoModal', function () {
                var t = e.props.onClick,
                  n = e._getPhotos(),
                  r = 'string' == typeof n[0].expandedUrl ? n[0].expandedUrl : n[0].expandedUrl.pathname
                t && t(), U.a && U.a.push(r)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(j.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.hasSensitiveMedia,
                    r = t.style,
                    i = t.withHalvedMediaSize
                  return T.a.createElement(_.b.UseProps, null, function (t) {
                    var a = t.edgeToEdgeEnabled,
                      o = t.sensitiveMediaWarningsEnabled,
                      s = e.sensitiveMediaWarnings,
                      l = s.size && o()
                    return T.a.createElement(
                      N.a.Provider,
                      { namespace: { element: 'media' } },
                      T.a.createElement(
                        W.a,
                        { style: [i ? $.halvedMediaSize : null, r] },
                        n || s.size
                          ? T.a.createElement(
                              P.a,
                              {
                                revealableTombstoneConfig: l
                                  ? P.a.sensitiveMediaWarningTombstoneConfig
                                  : P.a.sensitiveMediaTombstoneConfig,
                                sensitiveMediaWarnings: l ? s : void 0,
                                withRoundedCorners: !a(),
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
                    r = e.showRoundCorners,
                    i = this._getPhotos(),
                    a = n && (i.length >= 1 || this._isVideo()),
                    o = i.length
                      ? b.a.generate({
                          backgroundColor: 'transparent',
                          color: O.a.theme.colors.primary,
                          withFocusWithinFocusRing: !0,
                        })
                      : null,
                    s = null
                  return (
                    i.length >= 1 ? (s = this._renderPhotos()) : this._isVideo() && (s = this._renderVideo()),
                    s
                      ? T.a.createElement(
                          x.a,
                          { interactiveStyles: o, style: [a && $.itemWithBorder, r && $.itemWithRoundCorners, t] },
                          s,
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
                    r = e.enableKeyboardShortcuts,
                    i = e.hideAcceptOverlay,
                    a = e.mediaMaxHeight,
                    o = e.onClick,
                    s = e.singleImageMaxAspectRatio,
                    l = e.singleImageMinAspectRatio,
                    d = e.withCenterCrop,
                    c = e.withLink
                  return T.a.createElement(
                    E.a,
                    { enabled: r, handlers: v()({}, E.a.shortcuts.openMediaModal, this._openPhotoModal) },
                    T.a.createElement(D.a, {
                      cacheLocationKey: t,
                      containerAspectRatio: n,
                      hideAcceptOverlay: i,
                      images: this._getPhotos(),
                      mediaMaxHeight: a,
                      onClick: o,
                      singleImageMaxAspectRatio: s,
                      singleImageMinAspectRatio: l,
                      withCenterCrop: d,
                      withLink: c,
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
                    r = e.hideAcceptOverlay,
                    i = e.mediaDetails,
                    a = e.preventPlayback,
                    s = e.promotedContent,
                    l = e.shouldShowAltLabelAlways,
                    d = e.tweetCreatedAt,
                    c = e.tweetId,
                    u = e.tweetText,
                    p = e.videoAspectRatio,
                    h = e.videoOptions,
                    m = e.withPostPlayback,
                    y = i[0],
                    g = y && 'photo' !== y.type ? y : void 0,
                    f = g && L.a.extractVideoProps(z.b.forTweet(c), g, void 0, n, l)
                  return g && f
                    ? T.a.createElement(
                        H.a,
                        o()({}, f, h, {
                          additionalMediaInfo: g.additional_media_info,
                          aspectRatio: p || f.aspectRatio,
                          authorScreenName: t,
                          hideDataSaverAcceptOverlay: r,
                          preventPlayback: a,
                          promotedContent: s,
                          tweetCreatedAt: d,
                          tweetId: c,
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
                    r = i()(n, 1)[0].additional_media_info || {},
                    a = r.description,
                    o = r.title
                  return t ? T.a.createElement(V, { description: a, title: o }) : null
                },
              },
              {
                key: '_renderMediaTags',
                value: function () {
                  var e = this.props,
                    t = e.displayMediaTags,
                    n = e.loggedInUserId,
                    r = e.mediaDetails,
                    i = e.mediaTagsLink,
                    a = e.withMediaTagsIcon,
                    o = S.a.mergeTaggedUsers(r)
                  return t && i && o.length
                    ? T.a.createElement(M.a, {
                        linkPath: i,
                        loggedInUserId: n,
                        size: a ? 'body' : 'subtext2',
                        style: $.mediaTags,
                        users: o,
                        withIcon: a,
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
                    r = this._getSourceUser()
                  return t && r
                    ? T.a.createElement(R.a, {
                        size: n ? 'body' : 'subtext2',
                        style: $.mediaAttribution,
                        userIsProtected: r.protected,
                        userIsVerified: r.verified,
                        userName: r.name,
                        userScreenName: r.screen_name,
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
                  return Object(X.a)(
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
        })(T.a.Component)
      v()(K, 'defaultProps', {
        displayMediaAttribution: !1,
        displayMediaTags: !0,
        enableKeyboardShortcuts: !1,
        hasSensitiveMedia: !1,
        mediaDetails: [],
        showBorder: !0,
        showRoundCorners: !0,
        singleImageMaxAspectRatio: 16 / 9,
        singleImageMinAspectRatio: 16 / 9,
        withCenterCrop: !1,
        withLink: !0,
        withMediaTagsIcon: !1,
      })
      var Q = Object(q.a)(function (e, t, n, r, i) {
          var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
          return Object(F.a)(r, function (r) {
            var o = { pathname: r.expanded_url, state: { forwardPivotInfo: t } },
              s = 'photo' === r.type && r.original_info,
              l = I.a.getOriginalImage(r)
            return (
              s &&
              l && {
                accessibilityLabel: a[r.id_str] || r.ext_alt_text || Y,
                backgroundColor: I.a.getBackgroundColor(r),
                cropCandidates: I.a.getCropCandidates(r),
                expandedUrl: o,
                height: l.height,
                id_str: r.id_str,
                shouldShowAltLabel: !(!r.ext_alt_text || (e !== n && !i)),
                url: l.url,
                width: l.width,
              }
            )
          })
        }),
        $ = O.a.create(function (e) {
          return {
            halvedMediaSize: { minWidth: 2 * e.spacesPx.space72, width: '50%' },
            itemWithBorder: { borderWidth: '1px', borderStyle: 'solid', borderColor: e.colors.nestedBorderColor },
            itemWithRoundCorners: { borderRadius: e.borderRadii.xLarge, overflow: 'hidden' },
            mediaAttribution: { marginTop: e.spaces.space4 },
            mediaTags: { marginTop: e.spaces.space4 },
          }
        })
      t.a = K
    },
    uCxL: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        i = n.n(r),
        a = n('VrFO'),
        o = n.n(a),
        s = n('Y9Ll'),
        l = n.n(s),
        d = n('1Pcy'),
        c = n.n(d),
        u = n('5Yy7'),
        p = n.n(u),
        h = n('2VqO'),
        m = n.n(h),
        y = n('KEM+'),
        g = n.n(y),
        f = n('97Jx'),
        v = n.n(f),
        w = (n('2G9S'), n('ho0z'), n('5BYb'), n('7x/C'), n('kFen'), n('qd3W'), n('uFXj'), n('SV7d')),
        T = n('ERkP'),
        _ = n.n(T),
        k = n('t62R'),
        C = n('/Ikv'),
        b = n('ir4X'),
        x = n('3XMw'),
        E = n.n(x),
        R = n('htQn'),
        I = n('GBcw'),
        M = n('Nqmc'),
        S = n('rHpw'),
        L = n('rOiJ'),
        P = n('kY28'),
        U = n('cTG8'),
        N = n('UzHQ'),
        O = n('E0cF'),
        A = n('jV+4'),
        W = n('IV4V'),
        V = n('Y6la'),
        B = n('RT39'),
        D = n('shC7'),
        z = n('MWbm'),
        H = n('mN6z'),
        j = n('tn7R'),
        X = n('VRZ4'),
        q = ['iconStyle', 'style'],
        F = E.a.c9d7235d,
        Y = E.a.a8b58cf3,
        K = E.a.i5f742fd,
        Q = { viewType: 'quote_tweet' }
      t.a = function (e) {
        var t = e.tweet,
          n = !!t && !O.a.isQuotedTweetUnavailable({ is_quote_status: !0, quoted_status: t })
        return t && n ? _.a.createElement($, v()({}, e, { tweet: t })) : _.a.createElement(N.a, null)
      }
      var $ = (function (e) {
        p()(n, e)
        var t = m()(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            g()(c()(e), '_renderForwardPivot', function () {
              var t = e.props,
                n = t.forwardPivotInfo,
                r = t.tweet,
                i = t.withReactions
              if (n && n.displayType === B.a.SoftIntervention) {
                var a = n.displayType,
                  o = n.landingUrl,
                  s = n.softInterventionDisplayType,
                  l = n.text
                return _.a.createElement(B.b, {
                  displayType: a,
                  inQuoteTweet: !0,
                  isTweetNonCompliant: 'non_compliant' === r.limited_actions,
                  landingUrl: o,
                  softInterventionDisplayType: s,
                  text: l,
                  tweetId: r.id_str,
                  withReactions: i,
                })
              }
            }),
            g()(c()(e), '_handlePress', function () {
              var t = e.props.onPress
              t && t()
            }),
            e
          )
        }
        return (
          l()(n, [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return !Object(H.a)(e, this.props)
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
                  r = e.style,
                  i = e.tweet,
                  a = e.withLink,
                  o = [G.quoteTweetContainer, n && G.quoteTweetContainerBorder, !a && G.quoteTweetWithoutLink, r]
                return _.a.createElement(
                  w.a,
                  { behavioralEventContext: Q },
                  _.a.createElement(
                    z.a,
                    { nativeID: t },
                    _.a.createElement(k.b, { style: S.a.visuallyHidden }, F),
                    _.a.createElement(
                      R.a,
                      {
                        link: a ? { pathname: 'https://twitter.com'.concat(i.permalink), anchorless: !0 } : void 0,
                        onPress: this._handlePress,
                        style: o,
                        withInteractiveStyling: !!a,
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
                return _.a.createElement(
                  z.a,
                  null,
                  this._renderHeader(),
                  e ? this._renderTweetContentCondensed() : this._renderTweetContentExpanded(),
                )
              },
            },
            {
              key: '_renderTweetContentCondensed',
              value: function () {
                return _.a.createElement(
                  z.a,
                  { style: G.condensedContentBody },
                  this.shouldRenderMedia
                    ? _.a.createElement(
                        z.a,
                        { style: [G.marginTopXXSmall, G.condensedMediaSide] },
                        this._renderTweetMedia(!0),
                      )
                    : null,
                  _.a.createElement(z.a, { style: G.condensedContentSide }, this._renderTextContent(!0)),
                )
              },
            },
            {
              key: '_renderTweetContentExpanded',
              value: function () {
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  this._renderTextContent(!1),
                  this.shouldRenderMedia
                    ? _.a.createElement(z.a, { style: G.marginTopXXSmall }, this._renderTweetMedia(!1))
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
                  r = n.user || {}
                return _.a.createElement(
                  z.a,
                  { style: G.headerContainer },
                  t ? this._renderSocialContext() : null,
                  _.a.createElement(
                    z.a,
                    {
                      style: [
                        r.highlightedLabel ? G.attributionWrapperFlexStart : G.attributionWrapperCenter,
                        G.attributionWrapper,
                      ],
                    },
                    this._renderUserName(r),
                    _.a.createElement(
                      k.b,
                      { color: 'gray700', dir: D.a.getConstants().isRTL ? 'rtl' : 'ltr', style: G.timestampWrapper },
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
                    r = i()(e, q)
                  return _.a.createElement(
                    M.a,
                    v()(
                      {
                        iconStyle: [G.socialContextIconSpacing, t],
                        style: [G.socialContextSpacing, n],
                        withLeftPadding: !1,
                      },
                      r,
                    ),
                  )
                }
              },
            },
            {
              key: '_renderTextContent',
              value: function (e) {
                var t = this.props.tweet
                return _.a.createElement(
                  z.a,
                  { style: G.textContentPadding },
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
                  ? this._renderShowText(K)
                  : e.self_thread
                  ? this._renderShowText(Y)
                  : null
              },
            },
            {
              key: '_renderTweetText',
              value: function (e) {
                var t = this.props,
                  n = t.tweet,
                  r = t.withMediaAsTextLinks,
                  i = e ? 5 : void 0
                return _.a.createElement(U.a, {
                  displayTextRange: n.display_text_range,
                  entities: n.entities,
                  lang: n.lang,
                  numberOfLines: i,
                  quotedTweetPermalink: n.quoted_status_permalink,
                  style: G.marginTopXXSmall,
                  text: n.text,
                  withCardLinks: !0,
                  withMediaLinks: r || n.possibly_sensitive || this._hasSensitiveMediaWarnings(),
                  withQuoteLinks: !0,
                })
              },
            },
            {
              key: '_renderUserName',
              value: function (e) {
                var t = this.props,
                  n = t.withHeaderLinks,
                  r = t.withUserHoverCard
                return _.a.createElement(
                  z.a,
                  { style: G.userNameRoot },
                  _.a.createElement(
                    z.a,
                    { style: G.userNameWrapper },
                    _.a.createElement(A.a, {
                      isProtected: e.protected,
                      isVerified: e.verified,
                      name: e.name,
                      profileImageUrl: e.profile_image_url_https,
                      screenName: e.screen_name,
                      withHoverCard: r,
                      withLink: n,
                    }),
                  ),
                  e.highlightedLabel ? _.a.createElement(b.a, { label: e.highlightedLabel }) : null,
                )
              },
            },
            {
              key: '_renderTweetMedia',
              value: function (e) {
                var t,
                  n = this.props,
                  r = n.forwardPivotInfo,
                  i = n.loggedInUserId,
                  a = n.mediaContentStyles,
                  o = n.mediaMaxHeight,
                  s = n.preventVideoPlayback,
                  l = n.shouldShowAltLabelAlways,
                  d = n.singleImageMaxAspectRatio,
                  c = n.singleImageMinAspectRatio,
                  u = n.tweet,
                  p = n.withCenterCrop,
                  h = n.withLink
                if (W.a.hasVoiceMedia(u))
                  return _.a.createElement(
                    z.a,
                    { style: G.marginTopXXSmall },
                    _.a.createElement(W.a, { tweet: u, withStraightBorders: !0 }),
                  )
                if (Object(X.c)(u)) {
                  var m = Object(X.b)(u)
                  if (m)
                    return _.a.createElement(
                      z.a,
                      { style: G.marginTopXXSmall },
                      _.a.createElement(X.a, { audioSpaceId: m, withStraightBorders: !0 }),
                    )
                }
                var y = e ? 1 : 1.7777777777777777,
                  g = e ? 1 : void 0,
                  f = {
                    displayOptions: {
                      badgeConfiguration: e ? { hideDuration: !1, hideDataSize: !0, hideViewCount: !0 } : void 0,
                    },
                    hidePreviewPlayButton: e,
                  },
                  v = !!o && !e
                return _.a.createElement(L.a, {
                  authorId: u.user.id_str,
                  authorScreenName: u.user.screen_name,
                  cacheLocationKey: 'quote_tweet',
                  containerAspectRatio: y,
                  displayMediaTags: !1,
                  forwardPivotInfo: r,
                  hasSensitiveMedia: u.possibly_sensitive,
                  hideAcceptOverlay: e,
                  loggedInUserId: i,
                  mediaContentStyles: a,
                  mediaDetails: null === (t = u.extended_entities) || void 0 === t ? void 0 : t.media,
                  mediaMaxHeight: o,
                  mediaTagsLink: ''.concat(u.permalink, '/media_tags'),
                  preventPlayback: e || s,
                  shouldShowAltLabelAlways: l,
                  showBorder: e,
                  showRoundCorners: e,
                  singleImageMaxAspectRatio: e ? g : d,
                  singleImageMinAspectRatio: e ? g : c,
                  style: v ? G.centerItems : void 0,
                  tweetCreatedAt: u.created_at,
                  tweetId: u.id_str,
                  tweetText: u.text,
                  videoAspectRatio: y,
                  videoOptions: f,
                  withCenterCrop: p,
                  withLink: h,
                  withPostPlayback: !0,
                })
              },
            },
            {
              key: '_renderTimestamp',
              value: function (e) {
                var t = this.props,
                  n = t.tweet,
                  r = t.withHeaderLinks ? { pathname: 'https://twitter.com'.concat(n.permalink) } : void 0
                return _.a.createElement(I.a, { link: r, timestamp: e })
              },
            },
            {
              key: '_renderReplyContext',
              value: function () {
                var e,
                  t = this.props.tweet
                return t.in_reply_to_status_id_str
                  ? _.a.createElement(P.a, {
                      displayTextRange: t.display_text_range,
                      inReplyToName: t.in_reply_to_name,
                      inReplyToScreenName: t.in_reply_to_screen_name,
                      inReplyToUserIdStr: t.in_reply_to_user_id_str,
                      linkType: P.a.ReplyContextLinkTypes.none,
                      style: G.marginTopXXSmall,
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
                return _.a.createElement(k.b, { color: 'link', style: [G.marginTopXXSmall, !t && G.disabledLink] }, e)
              },
            },
            {
              key: '_renderWithheldTweet',
              value: function () {
                var e = this.props,
                  t = e.style,
                  n = e.tweet
                return _.a.createElement(
                  z.a,
                  { style: t },
                  _.a.createElement(V.a, {
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
                return e.card && C.a.isPollCard(e.card.name)
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
                      return e.sensitive_media_warning ? Object(j.a)(e.sensitive_media_warning) : []
                    })
                    .some(Boolean)
                )
              },
            },
            {
              key: '_canRenderAudioSpaceMedia',
              value: function (e) {
                return Boolean(Object(X.c)(e) && !this.props.isCondensed)
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
      })(_.a.Component)
      g()($, 'defaultProps', {
        onPress: void 0,
        shouldShowBorder: !0,
        withCenterCrop: !1,
        withMediaAsTextLinks: !1,
        withHeaderLinks: !1,
        withLink: !0,
        withUserHoverCard: !0,
      })
      var G = S.a.create(function (e) {
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
  },
])
//# sourceMappingURL=WIPED
