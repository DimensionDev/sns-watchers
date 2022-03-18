;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '89tF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('jwue'), n('7x/C'), n('+oxZ'), n('+KXO'), n('yH/f')
      function r(e) {
        var t = {}
        return (
          Object.keys(e).forEach(function (e) {
            t[e] = e
          }),
          Object.freeze(t)
        )
      }
    },
    GCOQ: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        d = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    Ujvi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return k
      })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
        d = n('2VqO'),
        c = n.n(d),
        u = (n('z84I'), n('ho0z'), n('ERkP')),
        h = n.n(u),
        p = n('t62R'),
        m = n('zrc3'),
        y = n('6ZHn'),
        g = n('rHpw'),
        f = n('MWbm'),
        v = n('3XMw'),
        w = n.n(v),
        T = w.a.f8e8e32d,
        k = (function (e) {
          l()(n, e)
          var t = c()(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
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
                    a = e.withIcon,
                    i = this._decodeUserList(),
                    o = i.isCurrentUserIncluded ? b.withCurrentUser : b.withoutCurrentUser,
                    s = this._selectMessage(o, i),
                    l = r.map(function (e) {
                      return e.user_id
                    }),
                    d = t && { pathname: t, state: { userIds: l } }
                  return r.length > 0
                    ? h.a.createElement(
                        f.a,
                        { style: [C.root, this.props.style] },
                        h.a.createElement(
                          p.b,
                          { color: 'gray700', link: d, size: n, withInteractiveStyling: !!d },
                          a ? h.a.createElement(y.a, { style: C.icon }) : null,
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
                    a = r >= 0,
                    i = a && n[r] ? n[r] : void 0
                  return {
                    isCurrentUserIncluded: a,
                    firstName: n.length >= 1 ? (a && i ? i.name : n[0].name) : void 0,
                    secondName: n.length >= 2 ? (a && 0 !== r ? n[0].name : n[1].name) : void 0,
                    otherUsersCount: n.length > 0 ? n.length - 1 : 0,
                  }
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        _ = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'normal'
          return h.a.createElement(p.b, { color: 'gray700', weight: t }, e)
        },
        b = {
          withCurrentUser: {
            single: function () {
              return _(T, 'bold')
            },
            multiple: function (e) {
              var t = e.otherUsersCount,
                n = e.secondName
              return t && n
                ? _(
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
              return t ? _(t) : null
            },
            multiple: function (e) {
              var t = e.firstName,
                n = e.otherUsersCount,
                r = e.secondName
              return n
                ? _(
                    h.a.createElement(
                      w.a.I18NFormatMessage,
                      { $i18n: 'b035fe73' },
                      h.a.createElement(p.b, null, t),
                      w.a.he26f625({ otherUsersCount: n, secondName: h.a.createElement(p.b, null, r) }),
                    ),
                  )
                : null
            },
          },
        },
        C = g.a.create(function (e) {
          return { root: { flexDirection: 'row' }, icon: { color: e.colors.gray700, marginRight: e.spaces.space4 } }
        })
    },
    VAyw: function (e, t, n) {
      'use strict'
      n('LW0h'), n('7x/C')
      var r = n('FLCi'),
        a = n('s1N3'),
        i = function (e) {
          var t, n
          return (
            (null === (t = e.features) || void 0 === t || null === (n = t.all) || void 0 === n ? void 0 : n.tags) || []
          )
        }
      t.a = {
        mergeTaggedUsers: function (e) {
          var t = Object(r.a)(e, i).filter(function (e) {
            return 'user' === e.type
          })
          return Object(a.a)(t, function (e) {
            return e.user_id
          })
        },
      }
    },
    bVhu: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        i = n('t62R'),
        o = n('gK2g'),
        s = n('jV+4'),
        l = n('MWbm'),
        d = n('3XMw'),
        c = n.n(d),
        u = c.a.f4393d0f,
        h = { element: 'screen_name', action: 'profile_click' }
      t.a = function (e) {
        var t = e.size,
          n = e.style,
          r = e.userIsProtected,
          d = e.userIsVerified,
          p = e.userName,
          m = e.userScreenName,
          y = o.a.useAnalytics(),
          g = a.a.createElement(s.a, {
            isProtected: r,
            isVerified: d,
            name: p,
            onLinkClick: function () {
              y.scribe(h)
            },
            screenName: m,
            withHoverCard: !0,
            withLink: !0,
            withScreenName: !1,
          })
        return a.a.createElement(
          l.a,
          { accessibilityLabel: u({ name: p }), style: n },
          a.a.createElement(
            i.b,
            { color: 'gray700', size: t },
            a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'dbf19261' }, g),
          ),
        )
      }
    },
    cFyg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var r = n('ZUOq'),
        a = n('rHpw'),
        i = { durationMs: 300 },
        o = a.a.create(function (e) {
          return {
            root: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.navigationBackground,
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              marginRight: e.spaces.space20,
              minWidth: r.a.dmDrawerWidth.min,
              maxWidth: r.a.dmDrawerWidth.max,
            },
            expandable: { transition: 'all '.concat(i.durationMs, 'ms ease') },
            expanded: { maxHeight: r.a.dmDrawerHeight.expanded, height: '80vh' },
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
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('yiKp'),
        l = n.n(s),
        d = n('RhWx'),
        c = n.n(d),
        u = n('VrFO'),
        h = n.n(u),
        p = n('Y9Ll'),
        m = n.n(p),
        y = n('1Pcy'),
        g = n.n(y),
        f = n('5Yy7'),
        v = n.n(f),
        w = n('2VqO'),
        T = n.n(w),
        k = n('KEM+'),
        _ = n.n(k),
        b =
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
        C = n.n(b),
        x = n('t62R'),
        R = n('OIC0'),
        E = n('rHpw'),
        M = n('Q0VY'),
        I = n('FiRh'),
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
            h()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              _()(g()(e), '_getTextParts', function () {
                var t,
                  n,
                  r = e.props,
                  a = r.displayTextRange,
                  i = r.enrichments,
                  o = r.entities,
                  s = r.entityBaseUrl,
                  d = r.hitHighlights,
                  u = r.linkify,
                  h = r.quotedTweetPermalink,
                  p = r.text,
                  m = r.unmentionedUserIds,
                  y = r.withQuoteLinks,
                  g = r.withUnicodeEmojis,
                  f = p,
                  v = o,
                  w = o && o.urls && o.urls.length
                if (h && !w && y && ((f = ''.concat(p, ' ').concat(u ? h.url : h.display)), u)) {
                  var T = c()(p).length + 1
                  v = l()(
                    l()({ media: [] }, o),
                    {},
                    {
                      urls: [
                        {
                          display_url: h.display,
                          expanded_url: h.expanded,
                          url: h.url,
                          indices: [T, T + h.url.length],
                        },
                      ],
                    },
                  )
                }
                var k = [0, f.length],
                  _ = [(a || k)[0], f.length],
                  b = d || []
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
                  M.a.tweetTextParts(f, _, v, i, {
                    useHashtagUrl: !0,
                    hitHighlights: b,
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
                    i = e.linkColor,
                    s = e.linkify,
                    d = e.nativeID,
                    c = e.numberOfLines,
                    u = e.onEntityClick,
                    h = e.quotedTweetId,
                    p = (e.quotedTweetPermalink, e.style),
                    m = (e.text, e.transformUrl),
                    y = e.underlineLinks,
                    g = (e.unmentionedUserIds, e.withCardLinks),
                    f = e.withMediaLinks,
                    v = e.withQuoteLinks,
                    w = (e.withUnicodeEmojis, o()(e, S)),
                    T = this._getTextParts(),
                    k = T.some(function (e) {
                      return e.entityType === R.a.MEDIA
                    }),
                    _ = k && !f,
                    b = h && !v,
                    E = T.map(function (e, r) {
                      var a = r === T.length - 1,
                        i = !!e.tweetId && e.tweetId === h
                      if (!f && e.entityType === R.a.MEDIA) return null
                      if (i && k && e.indices && t[1] === e.indices[1]) return null
                      if (a) {
                        if (i && b && !_) return null
                        if (!_ && !b && !g && n && (n === e.url || n === e.expandedUrl)) return null
                      }
                      return e
                    }).filter(Boolean),
                    M = E.map(function (e, t) {
                      var n = t === E.length - 1
                      if (e.entityType === R.a.TEXT) {
                        var r = e,
                          a = ''.concat(e.prefix).concat(e.text).trim()
                        return (!n && 0 !== t) || a
                          ? (n && (r = l()(l()({}, e), {}, { text: e.text.replace(/(\s+$)/g, '') })),
                            C.a.createElement(I.b, {
                              key: t,
                              linkColor: i,
                              linkify: s,
                              onClick: u,
                              part: r,
                              transformUrl: m,
                              underlineLinks: y,
                            }))
                          : null
                      }
                      return C.a.createElement(I.b, {
                        key: t,
                        linkColor: i,
                        linkify: s,
                        onClick: u,
                        part: e,
                        transformUrl: m,
                        underlineLinks: y,
                      })
                    }).filter(Boolean)
                  return M.length
                    ? C.a.createElement(
                        x.b,
                        a()({}, w, { children: M, lang: r, nativeID: d, numberOfLines: c, style: [P.root, p] }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      _()(L, 'defaultProps', {
        linkColor: 'link',
        linkify: I.a.linkify,
        underlineLinks: !1,
        withCardLinks: !1,
        withMediaLinks: !1,
        withQuoteLinks: !1,
        withUnicodeEmojis: !1,
      })
      var P = E.a.create(function (e) {
        return { root: { position: 'relative' } }
      })
      t.a = L
    },
    kY28: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        d = n('5Yy7'),
        c = n.n(d),
        u = n('2VqO'),
        h = n.n(u),
        p = n('KEM+'),
        m = n.n(p),
        y = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        g = n.n(y),
        f = n('t62R'),
        v = n('rHpw'),
        w = n('MWbm'),
        T = n('ddV6'),
        k = n.n(T),
        _ = n('RhWx'),
        b = n.n(_),
        C =
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
        x = n.n(C),
        R = n('yDX5'),
        E = x.a.ga629a8b,
        M = function (e, t, n) {
          return e
            ? g.a.createElement(
                R.a,
                { screenName: t },
                g.a.createElement(f.b, { link: 'https://twitter.com/'.concat(t), onClick: n }, '@'.concat(t)),
              )
            : '@'.concat(t)
        },
        I = function (e) {
          var t = e.children,
            n = e.onClick,
            r = e.viewMorePath
          return g.a.createElement(f.b, { accessibilityLabel: E, link: r, onClick: n }, t)
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
        O = 'DirectReply',
        N = 'NonDirectReply',
        A = function (e) {
          var t = e.displayTextRange,
            n = e.inReplyToName,
            r = e.inReplyToScreenName,
            a = e.inReplyToUserIdStr,
            i = e.userMentionsEntities,
            o = i.filter(function (e) {
              return e.indices[0] < t[0] || e.id_str === a
            }),
            s = b()(o),
            l = P(i, a),
            d = n || r
          return (
            !l && a && d && r && ((l = { id_str: a, name: d, screen_name: r, indices: [] }), s.push(l)),
            Object(L.a)(s, function (e) {
              return e.id_str
            })
          )
        },
        W = function (e) {
          var t,
            n = e.displayTextRange,
            r = e.inReplyToName,
            a = e.inReplyToScreenName,
            i = e.inReplyToUserIdStr,
            o = e.linkify,
            s = e.loggedInUserId,
            l = e.onClick,
            d = e.tweetPermalink,
            c = e.unmentionedUserIds,
            u = e.userMentionsEntities,
            h = i,
            p = A({
              displayTextRange: n,
              inReplyToName: r,
              inReplyToScreenName: a,
              inReplyToUserIdStr: i,
              userMentionsEntities: u,
            }),
            m = { id_str: '', indices: [], name: '', screen_name: '' },
            y = null !== (t = P(p, h)) && void 0 !== t ? t : m,
            v = (function (e, t, n, r) {
              var a = e ? g.a.createElement(I, { onClick: n, viewMorePath: t }) : g.a.createElement('span', null),
                i = e ? g.a.createElement(f.b, { color: 'link' }) : g.a.createElement('span', null),
                o = function (t) {
                  var n = null == r ? void 0 : r.includes(t.id_str)
                  return e && !n
                }
              return {
                replyToOne: function (e) {
                  var t = e.user,
                    r = M(o(t), S(t), n)
                  return g.a.createElement(x.a.I18NFormatMessage, { $i18n: 'h5970807' }, r)
                },
                replyToTwo: function (e) {
                  var t = e.userOne,
                    r = e.userTwo,
                    a = M(o(t), S(t), n),
                    s = M(o(r), S(r), n)
                  return g.a.createElement(
                    x.a.I18NFormatMessage,
                    { $i18n: 'ge01e6a2' },
                    a,
                    g.a.cloneElement(i, null, x.a.f34e6516),
                    s,
                  )
                },
                replyToMany: function (e) {
                  var t = e.othersCount,
                    r = e.user,
                    i = M(o(r), S(r), n)
                  return g.a.createElement(
                    x.a.I18NFormatMessage,
                    { $i18n: 'f5a069ab' },
                    i,
                    g.a.cloneElement(a, null, x.a.ff31714c({ othersCount: t })),
                  )
                },
                indirectReplyToThree: function (e) {
                  var t = e.userOne,
                    r = e.userThree,
                    a = e.userTwo,
                    s = M(o(t), S(t), n),
                    l = M(o(a), S(a), n),
                    d = M(o(r), S(r), n)
                  return g.a.createElement(
                    x.a.I18NFormatMessage,
                    { $i18n: 'hd7dd197' },
                    s,
                    l,
                    g.a.cloneElement(i, null, x.a.e06c99b6),
                    d,
                  )
                },
                indirectReplyToMany: function (e) {
                  var t = e.othersCount,
                    r = e.userOne,
                    i = e.userTwo,
                    s = M(o(r), S(r), n),
                    l = M(o(i), S(i), n)
                  return g.a.createElement(
                    x.a.I18NFormatMessage,
                    { $i18n: 'g4eb2847' },
                    s,
                    l,
                    g.a.cloneElement(a, null, x.a.i4e2f96b({ othersCount: t })),
                  )
                },
              }
            })(o, new URL(''.concat(d, '/people'), 'https://twitter.com').toString(), l, c),
            w = s === h,
            T = p.some(function (e) {
              return e.id_str === s
            })
          switch (w ? O : T ? N : U) {
            case O:
            case U:
              switch (p.length) {
                case 1:
                  return v.replyToOne({ user: y })
                case 2:
                  var _,
                    b =
                      null !==
                        (_ = p.find(function (e) {
                          return e !== y
                        })) && void 0 !== _
                        ? _
                        : m
                  return v.replyToTwo({ userOne: y, userTwo: b })
                case 3:
                  var C = p.filter(function (e) {
                      return e !== y
                    }),
                    R = k()(C, 2),
                    E = R[0],
                    L = R[1]
                  return v.indirectReplyToThree({ userOne: y, userTwo: E, userThree: L })
                default:
                  var W,
                    V =
                      null !==
                        (W = p.find(function (e) {
                          return e !== y
                        })) && void 0 !== W
                        ? W
                        : m
                  return v.indirectReplyToMany({ userOne: y, userTwo: V, othersCount: p.length - 2 })
              }
            case N:
              switch (p.length) {
                case 1:
                  return null
                case 2:
                  var B,
                    D =
                      null !==
                        (B = p.find(function (e) {
                          return e !== y
                        })) && void 0 !== B
                        ? B
                        : m
                  return v.replyToTwo({ userOne: y, userTwo: D })
                case 3:
                  var H,
                    z,
                    j =
                      null !==
                        (H = p.find(function (e) {
                          var t = e.id_str
                          return t !== s && t !== h
                        })) && void 0 !== H
                        ? H
                        : m
                  return v.indirectReplyToThree({
                    userOne: y,
                    userTwo: null !== (z = P(p, s)) && void 0 !== z ? z : m,
                    userThree: j,
                  })
                default:
                  var X
                  return v.indirectReplyToMany({
                    userOne: y,
                    userTwo: null !== (X = P(p, s)) && void 0 !== X ? X : m,
                    othersCount: p.length - 2,
                  })
              }
            default:
              return null
          }
        },
        V = Object.freeze({ Threaded: 'threaded', Isolated: 'isolated', None: 'none' }),
        B = [V.Threaded, V.Isolated, V.None],
        D = Object.freeze({ all: 'all', name: 'name', none: 'none' }),
        H = (function (e) {
          c()(n, e)
          var t = h()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(l()(e), '_handleClick', function (t) {
                var n = e.props,
                  r = n.displayTextRange,
                  a = n.inReplyToName,
                  i = n.inReplyToScreenName,
                  o = n.inReplyToUserIdStr,
                  s = n.onClick,
                  l = n.userMentionsEntities
                s &&
                  s(
                    t,
                    A({
                      displayTextRange: r,
                      inReplyToName: a,
                      inReplyToScreenName: i,
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
                    a = e.inReplyToStatusIdStr,
                    i = e.inReplyToUserIdStr,
                    o = e.linkColor,
                    s = e.linkType,
                    l = e.loggedInUserId,
                    d = e.nativeID,
                    c = e.size,
                    u = e.style,
                    h = e.tweetPermalink,
                    p = e.unmentionedUserIds,
                    m = e.userMentionsEntities,
                    y = W({
                      displayTextRange: t,
                      inReplyToName: n,
                      inReplyToScreenName: r,
                      inReplyToUserIdStr: i,
                      tweetPermalink: h,
                      loggedInUserId: l,
                      linkify: s === D.name,
                      onClick: this._handleClick,
                      unmentionedUserIds: p,
                      userMentionsEntities: m,
                    })
                  if (s === D.all) {
                    var v = a && 'https://twitter.com/'.concat(r || 'i', '/status/').concat(a)
                    return g.a.createElement(f.b, { color: o, link: v, nativeID: d, size: c, style: u }, y)
                  }
                  return s === D.name
                    ? g.a.createElement(
                        w.a,
                        { style: [z.root, u] },
                        g.a.createElement(f.b, { color: 'gray700', nativeID: d, size: c }, y),
                      )
                    : g.a.createElement(f.b, { color: 'gray700', nativeID: d, size: c, style: u }, y)
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      m()(H, 'getReplyContextParticipants', A),
        m()(H, 'ReplyContextTypes', V),
        m()(H, 'TweetReplyContextTypes', B),
        m()(H, 'ReplyContextLinkTypes', D),
        m()(H, 'defaultProps', { linkColor: 'link', linkType: D.name, size: 'body', userMentionsEntities: [] })
      var z = v.a.create(function (e) {
        return { root: { display: 'inline-block' } }
      })
      t.a = H
    },
    rOiJ: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        i = n('97Jx'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
        d = n('Y9Ll'),
        c = n.n(d),
        u = n('1Pcy'),
        h = n.n(u),
        p = n('5Yy7'),
        m = n.n(p),
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
        k = n('nBUg'),
        _ = n('3XMw'),
        b = n.n(_),
        C = n('I4+6'),
        x = n('cm6r'),
        R = n('wD1h'),
        E = n('bVhu'),
        M = n('3dad'),
        I = n('Ujvi'),
        S = n('VAyw'),
        L = n('XrEN'),
        P = n('k2KP'),
        U = n('Sp5X'),
        O = n('gK2g'),
        N = n('rHpw'),
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
        B = N.a.create(function (e) {
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
        H = n('lklz'),
        z = n('diSD'),
        j = n('mN6z'),
        X = n('zrOZ'),
        F = n('oQhu'),
        q = n('Qyxo'),
        K = b.a.b74bf8b7,
        Y = (function (e) {
          m()(n, e)
          var t = g()(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(h()(e), '_getPhotos', function () {
                var t = e.props,
                  n = t.authorId,
                  r = t.forwardPivotInfo,
                  a = t.loggedInUserId,
                  i = t.mediaAltTranslations,
                  o = t.mediaDetails,
                  s = t.shouldShowAltLabelAlways
                return Q(n, r, a, o, s, i)
              }),
              v()(h()(e), '_getSourceUser', function () {
                var t = e.props.mediaDetails
                return t && t[0] && t[0].additional_media_info && t[0].additional_media_info.source_user
              }),
              v()(h()(e), '_openPhotoModal', function () {
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
                    a = t.withHalvedMediaSize
                  return T.a.createElement(k.b.UseProps, null, function (t) {
                    var i = t.edgeToEdgeEnabled,
                      o = t.sensitiveMediaWarningsEnabled,
                      s = e.sensitiveMediaWarnings,
                      l = s.size && o()
                    return T.a.createElement(
                      O.a.Provider,
                      { namespace: { element: 'media' } },
                      T.a.createElement(
                        W.a,
                        { style: [a ? G.halvedMediaSize : null, r] },
                        n || s.size
                          ? T.a.createElement(
                              P.a,
                              {
                                revealableTombstoneConfig: l
                                  ? P.a.sensitiveMediaWarningTombstoneConfig
                                  : P.a.sensitiveMediaTombstoneConfig,
                                sensitiveMediaWarnings: l ? s : void 0,
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
                    r = e.showRoundCorners,
                    a = this._getPhotos(),
                    i = n && (a.length >= 1 || this._isVideo()),
                    o = a.length
                      ? C.a.generate({
                          backgroundColor: 'transparent',
                          color: N.a.theme.colors.primary,
                          withFocusWithinFocusRing: !0,
                        })
                      : null,
                    s = null
                  return (
                    a.length >= 1 ? (s = this._renderPhotos()) : this._isVideo() && (s = this._renderVideo()),
                    s
                      ? T.a.createElement(
                          x.a,
                          { interactiveStyles: o, style: [i && G.itemWithBorder, r && G.itemWithRoundCorners, t] },
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
                    a = e.hideAcceptOverlay,
                    i = e.isCondensed,
                    o = e.mediaMaxHeight,
                    s = e.onClick,
                    l = e.singleImageMaxAspectRatio,
                    d = e.singleImageMinAspectRatio,
                    c = e.withCenterCrop,
                    u = e.withLink
                  return T.a.createElement(
                    R.a,
                    { enabled: r, handlers: v()({}, R.a.shortcuts.openMediaModal, this._openPhotoModal) },
                    T.a.createElement(D.a, {
                      cacheLocationKey: t,
                      containerAspectRatio: n,
                      hideAcceptOverlay: a,
                      images: this._getPhotos(),
                      isCondensed: i,
                      mediaMaxHeight: o,
                      onClick: s,
                      singleImageMaxAspectRatio: l,
                      singleImageMinAspectRatio: d,
                      withCenterCrop: c,
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
                    r = e.hideAcceptOverlay,
                    a = e.mediaDetails,
                    i = e.preventPlayback,
                    s = e.promotedContent,
                    l = e.shouldShowAltLabelAlways,
                    d = e.tweetCreatedAt,
                    c = e.tweetId,
                    u = e.tweetText,
                    h = e.videoAspectRatio,
                    p = e.videoOptions,
                    m = e.withPostPlayback,
                    y = a[0],
                    g = y && 'photo' !== y.type ? y : void 0,
                    f = g && L.a.extractVideoProps(H.b.forTweet(c), g, void 0, n, l)
                  return g && f
                    ? T.a.createElement(
                        z.a,
                        o()({}, f, p, {
                          additionalMediaInfo: g.additional_media_info,
                          aspectRatio: h || f.aspectRatio,
                          authorScreenName: t,
                          hideDataSaverAcceptOverlay: r,
                          preventPlayback: i,
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
                    r = a()(n, 1)[0].additional_media_info || {},
                    i = r.description,
                    o = r.title
                  return t ? T.a.createElement(V, { description: i, title: o }) : null
                },
              },
              {
                key: '_renderMediaTags',
                value: function () {
                  var e = this.props,
                    t = e.displayMediaTags,
                    n = e.loggedInUserId,
                    r = e.mediaDetails,
                    a = e.mediaTagsLink,
                    i = e.withMediaTagsIcon,
                    o = S.a.mergeTaggedUsers(r)
                  return t && a && o.length
                    ? T.a.createElement(I.a, {
                        linkPath: a,
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
                    r = this._getSourceUser()
                  return t && r
                    ? T.a.createElement(E.a, {
                        size: n ? 'body' : 'subtext2',
                        style: G.mediaAttribution,
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
      v()(Y, 'defaultProps', {
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
      var Q = Object(F.a)(function (e, t, n, r, a) {
          var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
          return Object(q.a)(r, function (r) {
            var o = { pathname: r.expanded_url, state: { forwardPivotInfo: t } },
              s = 'photo' === r.type && r.original_info,
              l = M.a.getOriginalImage(r)
            return (
              s &&
              l && {
                accessibilityLabel: i[r.id_str] || r.ext_alt_text || K,
                backgroundColor: M.a.getBackgroundColor(r),
                cropCandidates: M.a.getCropCandidates(r),
                expandedUrl: o,
                height: l.height,
                id_str: r.id_str,
                shouldShowAltLabel: !(!r.ext_alt_text || (e !== n && !a)),
                url: l.url,
                width: l.width,
              }
            )
          })
        }),
        G = N.a.create(function (e) {
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
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        l = n.n(s),
        d = n('1Pcy'),
        c = n.n(d),
        u = n('5Yy7'),
        h = n.n(u),
        p = n('2VqO'),
        m = n.n(p),
        y = n('KEM+'),
        g = n.n(y),
        f = n('97Jx'),
        v = n.n(f),
        w = (n('2G9S'), n('ho0z'), n('5BYb'), n('7x/C'), n('kFen'), n('qd3W'), n('uFXj'), n('SV7d')),
        T = n('ERkP'),
        k = n.n(T),
        _ = n('t62R'),
        b = n('/Ikv'),
        C = n('ir4X'),
        x = n('3XMw'),
        R = n.n(x),
        E = n('htQn'),
        M = n('GBcw'),
        I = n('Nqmc'),
        S = n('rHpw'),
        L = n('rOiJ'),
        P = n('kY28'),
        U = n('cTG8'),
        O = n('UzHQ'),
        N = n('E0cF'),
        A = n('jV+4'),
        W = n('IV4V'),
        V = n('Y6la'),
        B = n('RT39'),
        D = n('shC7'),
        H = n('MWbm'),
        z = n('mN6z'),
        j = n('tn7R'),
        X = n('VRZ4'),
        F = ['iconStyle', 'style'],
        q = R.a.c9d7235d,
        K = R.a.a8b58cf3,
        Y = R.a.i5f742fd,
        Q = { viewType: 'quote_tweet' }
      t.a = function (e) {
        var t = e.tweet,
          n = !!t && !N.a.isQuotedTweetUnavailable({ is_quote_status: !0, quoted_status: t })
        return t && n ? k.a.createElement(G, v()({}, e, { tweet: t })) : k.a.createElement(O.a, null)
      }
      var G = (function (e) {
        h()(n, e)
        var t = m()(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            g()(c()(e), '_renderForwardPivot', function () {
              var t = e.props,
                n = t.forwardPivotInfo,
                r = t.tweet,
                a = t.withReactions
              if (n && n.displayType === B.a.SoftIntervention) {
                var i = n.displayType,
                  o = n.landingUrl,
                  s = n.softInterventionDisplayType,
                  l = n.text
                return k.a.createElement(B.b, {
                  displayType: i,
                  inQuoteTweet: !0,
                  isTweetNonCompliant: 'non_compliant' === r.limited_actions,
                  landingUrl: o,
                  softInterventionDisplayType: s,
                  text: l,
                  tweetId: r.id_str,
                  withReactions: a,
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
                return !Object(z.a)(e, this.props)
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
                  a = e.tweet,
                  i = e.withLink,
                  o = [$.quoteTweetContainer, n && $.quoteTweetContainerBorder, !i && $.quoteTweetWithoutLink, r]
                return k.a.createElement(
                  w.a,
                  { behavioralEventContext: Q },
                  k.a.createElement(
                    H.a,
                    { nativeID: t },
                    k.a.createElement(_.b, { style: S.a.visuallyHidden }, q),
                    k.a.createElement(
                      E.a,
                      {
                        link: i ? { pathname: 'https://twitter.com'.concat(a.permalink), anchorless: !0 } : void 0,
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
                return k.a.createElement(
                  H.a,
                  null,
                  this._renderHeader(),
                  e ? this._renderTweetContentCondensed() : this._renderTweetContentExpanded(),
                )
              },
            },
            {
              key: '_renderTweetContentCondensed',
              value: function () {
                return k.a.createElement(
                  H.a,
                  { style: $.condensedContentBody },
                  this.shouldRenderMedia
                    ? k.a.createElement(
                        H.a,
                        { style: [$.marginTopXXSmall, $.condensedMediaSide] },
                        this._renderTweetMedia(!0),
                      )
                    : null,
                  k.a.createElement(H.a, { style: $.condensedContentSide }, this._renderTextContent(!0)),
                )
              },
            },
            {
              key: '_renderTweetContentExpanded',
              value: function () {
                return k.a.createElement(
                  k.a.Fragment,
                  null,
                  this._renderTextContent(!1),
                  this.shouldRenderMedia
                    ? k.a.createElement(H.a, { style: $.marginTopXXSmall }, this._renderTweetMedia(!1))
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
                return k.a.createElement(
                  H.a,
                  { style: $.headerContainer },
                  t ? this._renderSocialContext() : null,
                  k.a.createElement(
                    H.a,
                    {
                      style: [
                        r.highlightedLabel ? $.attributionWrapperFlexStart : $.attributionWrapperCenter,
                        $.attributionWrapper,
                      ],
                    },
                    this._renderUserName(r),
                    k.a.createElement(
                      _.b,
                      { color: 'gray700', dir: D.a.getConstants().isRTL ? 'rtl' : 'ltr', style: $.timestampWrapper },
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
                    r = a()(e, F)
                  return k.a.createElement(
                    I.a,
                    v()(
                      {
                        iconStyle: [$.socialContextIconSpacing, t],
                        style: [$.socialContextSpacing, n],
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
                return k.a.createElement(
                  H.a,
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
                  r = t.withMediaAsTextLinks,
                  a = e ? 5 : void 0
                return k.a.createElement(U.a, {
                  displayTextRange: n.display_text_range,
                  entities: n.entities,
                  lang: n.lang,
                  numberOfLines: a,
                  quotedTweetPermalink: n.quoted_status_permalink,
                  style: $.marginTopXXSmall,
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
                return k.a.createElement(
                  H.a,
                  { style: $.userNameRoot },
                  k.a.createElement(
                    H.a,
                    { style: $.userNameWrapper },
                    k.a.createElement(A.a, {
                      isProtected: e.protected,
                      isVerified: e.verified,
                      name: e.name,
                      profileImageUrl: e.profile_image_url_https,
                      screenName: e.screen_name,
                      withHoverCard: r,
                      withLink: n,
                    }),
                  ),
                  e.highlightedLabel ? k.a.createElement(C.a, { label: e.highlightedLabel }) : null,
                )
              },
            },
            {
              key: '_renderTweetMedia',
              value: function (e) {
                var t,
                  n = this.props,
                  r = n.forwardPivotInfo,
                  a = n.loggedInUserId,
                  i = n.mediaContentStyles,
                  o = n.mediaMaxHeight,
                  s = n.preventVideoPlayback,
                  l = n.shouldShowAltLabelAlways,
                  d = n.singleImageMaxAspectRatio,
                  c = n.singleImageMinAspectRatio,
                  u = n.tweet,
                  h = n.withCenterCrop,
                  p = n.withLink
                if (W.a.hasVoiceMedia(u))
                  return k.a.createElement(
                    H.a,
                    { style: $.marginTopXXSmall },
                    k.a.createElement(W.a, { tweet: u, withStraightBorders: !0 }),
                  )
                if (Object(X.c)(u)) {
                  var m = Object(X.b)(u)
                  if (m)
                    return k.a.createElement(
                      H.a,
                      { style: $.marginTopXXSmall },
                      k.a.createElement(X.a, { audioSpaceId: m, withStraightBorders: !0 }),
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
                return k.a.createElement(L.a, {
                  authorId: u.user.id_str,
                  authorScreenName: u.user.screen_name,
                  cacheLocationKey: 'quote_tweet',
                  containerAspectRatio: y,
                  displayMediaTags: !1,
                  forwardPivotInfo: r,
                  hasSensitiveMedia: u.possibly_sensitive,
                  hideAcceptOverlay: e,
                  isCondensed: e,
                  loggedInUserId: a,
                  mediaContentStyles: i,
                  mediaDetails: null === (t = u.extended_entities) || void 0 === t ? void 0 : t.media,
                  mediaMaxHeight: o,
                  mediaTagsLink: ''.concat(u.permalink, '/media_tags'),
                  preventPlayback: e || s,
                  shouldShowAltLabelAlways: l,
                  showBorder: e,
                  showRoundCorners: e,
                  singleImageMaxAspectRatio: e ? g : d,
                  singleImageMinAspectRatio: e ? g : c,
                  style: v ? $.centerItems : void 0,
                  tweetCreatedAt: u.created_at,
                  tweetId: u.id_str,
                  tweetText: u.text,
                  videoAspectRatio: y,
                  videoOptions: f,
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
                  r = t.withHeaderLinks ? { pathname: 'https://twitter.com'.concat(n.permalink) } : void 0
                return k.a.createElement(M.a, { link: r, timestamp: e })
              },
            },
            {
              key: '_renderReplyContext',
              value: function () {
                var e,
                  t = this.props.tweet
                return t.in_reply_to_status_id_str
                  ? k.a.createElement(P.a, {
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
                return k.a.createElement(_.b, { color: 'link', style: [$.marginTopXXSmall, !t && $.disabledLink] }, e)
              },
            },
            {
              key: '_renderWithheldTweet',
              value: function () {
                var e = this.props,
                  t = e.style,
                  n = e.tweet
                return k.a.createElement(
                  H.a,
                  { style: t },
                  k.a.createElement(V.a, {
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
                return e.card && b.a.isPollCard(e.card.name)
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
      })(k.a.Component)
      g()(G, 'defaultProps', {
        onPress: void 0,
        shouldShowBorder: !0,
        withCenterCrop: !1,
        withMediaAsTextLinks: !1,
        withHeaderLinks: !1,
        withLink: !0,
        withUserHoverCard: !0,
      })
      var $ = S.a.create(function (e) {
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
