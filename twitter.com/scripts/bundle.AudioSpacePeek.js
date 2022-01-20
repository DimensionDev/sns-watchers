;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    BXJq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('Qavd'), n('JtPf'), n('7x/C'), n('ERkP')),
        o = n('dgjd')
      function c(e) {
        var t = Object(o.a)(e),
          n = t.handlers,
          r = t.space,
          c = i.useState(!1),
          s = a()(c, 2),
          l = s[0],
          u = s[1],
          d = { hasReminderSet: !1, onClick: void 0, scheduledStart: void 0 }
        return (
          (function (e) {
            return e && e.host && e.scheduled_start && ('NotStarted' === e.state || 'PrePublished' === e.state)
          })(r) &&
            ((d.hasReminderSet = Boolean(null == r ? void 0 : r.is_subscribed)),
            (d.onClick = function () {
              var e = function () {
                return u(!1)
              }
              u(!0), d.hasReminderSet ? n.unsubscribe().finally(e) : n.subscribe().finally(e)
            }),
            (d.scheduledStart = null == r ? void 0 : r.scheduled_start)),
          { props: d, isSubscribing: l }
        )
      }
    },
    'Fg/a': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return z
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        b = n.n(m),
        g = (n('2G9S'), n('ERkP')),
        v = n('Pc/x'),
        y = n('6/RC'),
        E = (n('WNMA'), n('KqXw'), n('Z5jE')),
        w = n('rxPX'),
        S = function (e, t) {
          return Object(E.a)(t.match)
        },
        O = function (e) {
          return function (t, n, r) {
            return r.api.AudioSpaces.byId(e, { isMetatagsQuery: !0 })
          }
        },
        C = Object(w.a)()
          .propsFromState(function () {
            return { broadcastId: S }
          })
          .propsFromActions(function () {
            return { fetchAudioSpace: O }
          }),
        P = (n('1t7P'), n('jQ/y'), n('3XMw')),
        j = n.n(P),
        I = n('rJoH'),
        x = n('Rumh'),
        k = n('AooF')
      function D(e) {
        var t = e.space
        if (!t) return null
        var n = (function (e) {
          var t = (function (e) {
              var t,
                n,
                r,
                a,
                i = null == e || null === (t = e.host) || void 0 === t ? void 0 : t.display_name,
                o = i ? H.hostSpace({ name: i }) : H.hostSpaceFallback,
                c = e.title || o,
                s = H.descriptionGeneric,
                l = (null == e ? void 0 : e.participants.total) || 0,
                u = x.a.formatCountShort(l),
                d = H.descriptionListening({ count: u })
              if (e.state === k.a.SpaceState.Running)
                (n = H.titleRunning({ spaceTitle: c })),
                  (r = H.descriptionFormatRunning({ hostSpace: o, descriptionListening: d, descriptionGeneric: s })),
                  (a = L.ttl.Frequent)
              else if (e.state === k.a.SpaceState.NotStarted || e.state === k.a.SpaceState.PrePublished) {
                var p = H.scheduledSpaceGeneric
                ;(n = H.titleScheduled({ date: p, spaceTitle: c })),
                  (r = H.descriptionFormatScheduled({ hostSpace: o, descriptionGeneric: s })),
                  (a = L.ttl.Frequent)
              } else
                (n = H.titleEnded({ spaceTitle: c })),
                  (r = H.descriptionFormatEnded({ hostSpace: o, descriptionGeneric: s })),
                  (a = L.ttl.LongLivedCache)
              var f = 'https://twitter.com/i/spaces/'.concat(e.rest_id)
              return { title: n, canonical: f, description: r, ttl: a }
            })(e),
            n = t.canonical,
            r = t.description,
            a = t.title,
            i = t.ttl
          return {
            type: 'website',
            canonical: n,
            title: a,
            description: r,
            image: L.image.url,
            imageType: L.image.type,
            imageW: L.image.width,
            imageH: L.image.height,
            imageAlt: L.image.alt,
            ttl: i,
          }
        })(t)
        return g.createElement(I.a, n)
      }
      var H = {
          twitterSpaces: j.a.gaa01f2c,
          hostSpace: j.a.b6d3e0ee,
          hostSpaceFallback: j.a.ab4fc8bb,
          descriptionGeneric: j.a.fec3c1ef,
          descriptionListeners: j.a.ce447fcb,
          descriptionListening: j.a.ef7da97e,
          scheduledSpaceGeneric: j.a.f8464691,
          titleRunning: j.a.a065e7e7,
          titleScheduled: j.a.hd5e7b20,
          titleEnded: j.a.f826f7ee,
          descriptionFormatRunning: j.a.b2a94e92,
          descriptionFormatScheduled: j.a.f6432ce5,
          descriptionFormatEnded: j.a.f6432ce5,
        },
        L = {
          ttl: { Frequent: 300, LongLivedCache: 86400 },
          image: {
            type: 'image/jpeg',
            url: 'https://abs.twimg.com/sticky/cards/TwitterSpacesCardImage.2.jpg',
            width: 1200,
            height: 630,
            alt: H.twitterSpaces,
          },
        },
        R = n('G8HL')
      function _(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = h()(e)
          if (t) {
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var B = (function (e) {
        u()(n, e)
        var t = _(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (e = t.call.apply(t, [this].concat(i))), b()(s()(e), 'state', { space: null }), e
        }
        return (
          o()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                var e = this
                this.props
                  .fetchAudioSpace(this.props.broadcastId)
                  .catch(function () {
                    return null
                  })
                  .then(function (t) {
                    !t || t instanceof Error || e.setState({ space: t })
                  })
              },
            },
            {
              key: 'render',
              value: function () {
                return g.createElement(
                  g.Fragment,
                  null,
                  g.createElement(F, this.props),
                  g.createElement(D, { space: this.state.space }),
                )
              },
            },
          ]),
          n
        )
      })(g.Component)
      function F(e) {
        return (
          g.useEffect(function () {
            y.canUseDOM && v.a.proxsee.login()
          }, []),
          e.children
        )
      }
      var z = C(Object(R.a)(B))
    },
    UUFr: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return Ne
        })
      var r = n('97Jx'),
        a = n.n(r),
        i = (n('WNMA'), n('KqXw'), n('ERkP')),
        o = n('Fg/a'),
        c = n('Z5jE'),
        s = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        l = n.n(s),
        u = (n('7xRU'), n('v6aA')),
        d = n('3XMw'),
        p = n.n(d),
        f = n('MWbm'),
        h = n('t62R'),
        m = n('rHpw')
      function b(e) {
        return i.createElement(
          f.a,
          { style: v.container },
          i.createElement(h.b, { align: 'center', numberOfLines: 1, size: 'title4', weight: 'bold' }, g.connecting),
        )
      }
      var g = { connecting: p.a.e4e811fb },
        v = m.a.create(function (e) {
          return { container: { paddingBottom: e.spaces.space48 } }
        }),
        y = n('Pc/x'),
        E = (n('z84I'), n('p3P5')),
        w = n('m3Bd'),
        S = n.n(w),
        O = n('ddV6'),
        C = n.n(O),
        P = n('hOZg'),
        j = n('RqPI')
      var I = n('Ty5D'),
        x = n('uDfI'),
        k = n('dgjd'),
        D = n('mjJ+'),
        H = n('/yvb'),
        L = n('FXw/'),
        R = n('GCOQ')
      function _(e) {
        var t = (function (e) {
            var t = Object(I.g)(),
              n = Object(k.a)(e).utils,
              r = Object(x.d)(j.m),
              a = [],
              i = {
                Icon: R.a,
                isEmphasized: !0,
                onClick: function () {
                  n.scribe(':audiospace::caret:report:click'),
                    t.push(
                      (function (e) {
                        return '/i/spaces/'.concat(e, '/peek/report')
                      })(e),
                    )
                },
                text: B.reportThisSpace,
              }
            r && a.push(i)
            return { items: a }
          })(e.audioSpaceId),
          n = i.useState(!1),
          r = C()(n, 2),
          a = r[0],
          o = r[1]
        if (t.items.length < 1) return null
        var c = a
          ? i.createElement(D.a, {
              isFixed: !0,
              items: t.items,
              onCloseRequested: function () {
                return o(!1)
              },
              shouldCloseOnClick: !0,
            })
          : null
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(H.a, {
            accessibilityLabel: B.more,
            borderColor: 'transparent',
            color: 'text',
            hoverLabel: { label: B.more },
            icon: i.createElement(L.a, null),
            onPress: function () {
              return o(!0)
            },
            pullRight: e.pullRight,
            size: 'medium',
          }),
          c,
        )
      }
      var B = { more: p.a.h63a5c3b, reportThisSpace: p.a.b3481ffd },
        F = n('0nhk'),
        z = n('xVWt')
      var U = n('sgih')
      function M(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function N(e) {
        var t,
          n,
          r,
          o,
          c,
          s = {
            type: 'bottom',
            accessibilityRole: 'menu',
            onMaskClick: e.onClose,
            allowBackNavigation: !0,
            withKeyboardNavigation: !0,
            withMask: !0,
          },
          l =
            ((t = i.useState(null)),
            (n = C()(t, 2)),
            (r = n[0]),
            (o = n[1]),
            (c = i.useMemo(
              function () {
                if (!r)
                  return function (e) {
                    var t = e.nativeEvent.layout
                    t && o(t)
                  }
              },
              [r],
            )),
            [r, c]),
          u = C()(l, 2),
          d = u[0],
          p = u[1],
          h = [G.sheetContainer, e.withoutPadding && G.withoutPadding]
        return i.createElement(
          U.a,
          s,
          i.createElement(
            f.a,
            { onLayout: p, style: h },
            i.createElement(f.a, { style: G.sheetSpacerTop }),
            i.createElement(W, e),
            i.createElement(A, e),
            i.createElement(T, a()({}, e, { shellLayout: d })),
          ),
        )
      }
      function W(e) {
        e.Content, e.CustomHeader, e.withoutDescription, e.withoutPadding
        var t = S()(e, ['Content', 'CustomHeader', 'withoutDescription', 'withoutPadding']),
          n = i.createElement(
            H.a,
            a()(
              {
                accessibilityLabel: X.close,
                icon: i.createElement(P.a, { style: G.closeIcon }),
                onPress: e.onClose,
                pullLeft: !0,
              },
              q,
            ),
          )
        if (e.CustomHeader) return i.createElement(e.CustomHeader, a()({}, t, { closeButton: n }))
        var r = e.space.rest_id
        return i.createElement(
          f.a,
          { style: G.header },
          i.createElement(f.a, { style: G.headerLeft }, n),
          i.createElement(
            f.a,
            { style: G.headerRight },
            i.createElement(
              f.a,
              { style: G.headerRightItem },
              i.createElement(F.a, { audioSpaceId: r, type: 'icon-borderless' }),
            ),
            i.createElement(f.a, { style: G.headerRightItem }, i.createElement(_, { audioSpaceId: r, pullRight: !0 })),
          ),
        )
      }
      function A(e) {
        return e.withoutDescription
          ? null
          : i.createElement(
              f.a,
              { style: G.descriptionContainer },
              i.createElement(z.b, { audioSpaceId: e.space.rest_id }),
            )
      }
      function T(e) {
        if (!e.Content) return null
        e.Content, e.CustomHeader
        var t = e.shellLayout,
          n =
            (e.withoutDescription,
            e.withoutPadding,
            S()(e, ['Content', 'CustomHeader', 'shellLayout', 'withoutDescription', 'withoutPadding']))
        return i.createElement(
          f.a,
          { style: [G.content, e.withoutPadding && G.withoutPadding] },
          i.createElement(e.Content, a()({}, n, { onClose: e.onClose, shellLayout: t })),
        )
      }
      function J(e) {
        return { sheetContainer: { paddingHorizontal: e.spacesPx.space16 } }
      }
      var G = m.a.create(function (e) {
          var t = J(e),
            n = { height: e.spacesPx.space24 },
            r = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? M(Object(n), !0).forEach(function (t) {
                      l()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : M(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ flex: 1 }, t.sheetContainer),
            a = { flex: 1, alignItems: 'center', paddingVertical: e.spacesPx.space20 },
            i = { marginLeft: e.spaces.space8 },
            o = { paddingVertical: e.spacesPx.space16 },
            c = e.spacesPx.space24
          return {
            sheetSpacerTop: n,
            sheetContainer: r,
            withoutPadding: { paddingHorizontal: 0, paddingVertical: 0 },
            content: a,
            header: { flexDirection: 'row' },
            headerLeft: { flex: 1, alignItems: 'flex-start' },
            headerRight: { flexDirection: 'row' },
            headerRightItem: i,
            descriptionContainer: o,
            closeIcon: { width: c, height: c },
          }
        }),
        q = { borderColor: 'transparent', color: 'text', size: 'medium' },
        X = { close: p.a.ia5e7487 }
      function V(e, t) {
        var n,
          r,
          a = t.width,
          i = t.height,
          o =
            ((n = m.a.theme),
            (r = J(n)),
            {
              getHorizontal: function (e) {
                return e - 2 * r.sheetContainer.paddingHorizontal
              },
            }),
          c = Object(E.b)(m.a.theme),
          s = m.a.theme.spacesPx.space40,
          l = i * Y - s - e.height,
          u = a > m.a.theme.breakpoints.medium ? Math.min(K, a * Z) : a,
          d = o.getHorizontal(u),
          p = c.getHeight(),
          f = c.getWidth(),
          h = Math.min(4, Math.floor(l / p)),
          b = 4 === h ? 3 : 4,
          g = Math.min(b, Math.floor(d / f))
        return { maxDisplayParticipantCount: g * h, dynamicParticipantWidth: d / g }
      }
      var K = 600,
        Z = 0.8,
        Y = 1,
        Q = n('4EYz'),
        $ = n('s1N3'),
        ee = n('i4Oy'),
        te = n('VKFJ')
      function ne(e) {
        var t = e.shellLayout
        if (!t) return null
        var n = ae(ee.a.get('window')),
          r = V(ae(t), n),
          a = e.cohosts,
          o = e.host,
          c = e.participants,
          s = []
        o && s.push({ user: o, kind: te.a.host })
        for (
          var l = Object($.a)(a, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: te.a.cohost }
            }),
            u = 0;
          u < l.length && !(s.length >= r.maxDisplayParticipantCount);
          u++
        )
          s.push(l[u])
        for (
          var d = Object($.a)(c.speakers, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: te.a.speaker }
            }),
            p = 0;
          p < d.length && !(s.length >= r.maxDisplayParticipantCount);
          p++
        )
          s.push(d[p])
        for (var h = 0; h < c.listeners.length && !(s.length >= r.maxDisplayParticipantCount); h++) {
          var m = c.listeners[h]
          m && e._temp_omitByScreenName !== m.twitter_screen_name && s.push({ user: m, kind: te.a.listener })
        }
        var b = c.total || l.length + d.length,
          g = Math.max(0, b - s.length)
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            f.a,
            { style: re.participantsGridContainer },
            i.createElement(
              f.a,
              { style: re.participantsGridContent },
              s.map(function (e, t) {
                return i.createElement(E.a, {
                  hasNftAvatar: e.user.has_nft_avatar,
                  isVerified: e.user.is_verified,
                  key: e.user.twitter_screen_name,
                  kind: e.kind,
                  name: e.user.display_name,
                  profile_image_url_https: e.user.avatar_url,
                  screenName: e.user.twitter_screen_name,
                  width: r.dynamicParticipantWidth,
                })
              }),
            ),
          ),
          i.createElement(Q.a, { audioSpaceId: e.audioSpaceId, count: g, interactive: !1 }),
        )
      }
      var re = m.a.create(function (e) {
        return {
          participantsGridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
          participantsGridContent: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
        }
      })
      function ae(e) {
        var t = e.height
        return { width: e.width, height: t }
      }
      var ie = n('ISLN')
      function oe(e) {
        var t = e.space
        if (!t) return null
        var n = y.a.loggedInUser(),
          r = n && n.screen_name
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(ne, {
            _temp_omitByScreenName: r,
            audioSpaceId: t.rest_id,
            cohosts: t.cohosts,
            host: t.host,
            participants: t.participants,
            shellLayout: e.shellLayout,
          }),
          i.createElement(
            f.a,
            { style: se.joinSubtitleContainer },
            i.createElement(
              h.b,
              { align: 'center', numberOfLines: 1, size: 'subtext2', style: se.joinSubtitle },
              ce.spaceJoinSubtitle,
            ),
          ),
          i.createElement(
            f.a,
            { style: se.joinButtonContainer },
            i.createElement(
              ie.a,
              {
                accessibilityLabel: ce.spaceJoin,
                onPress: function () {
                  e.onJoin(), e.onClose()
                },
              },
              i.createElement(
                h.b,
                { align: 'center', color: 'white', numberOfLines: 1, size: 'headline1', weight: 'bold' },
                ce.spaceJoin,
              ),
            ),
          ),
        )
      }
      var ce = { spaceJoin: p.a.cc8f82bb, spaceJoinSubtitle: p.a.e51df2e6 },
        se = m.a.create(function (e) {
          return {
            joinSubtitleContainer: { width: '100%', marginTop: e.spacesPx.space20 },
            joinSubtitle: { lineHeight: e.lineHeightsPx.subtext2 },
            joinButtonContainer: {
              width: '100%',
              paddingHorizontal: e.spaces.space20,
              paddingVertical: e.spacesPx.space16,
            },
          }
        }),
        le = n('BXJq'),
        ue = n('bNYH'),
        de = n('Xyrk'),
        pe = n('AooF')
      function fe(e) {
        var t = Object(le.a)(e.broadcastId)
        return i.createElement(
          f.a,
          { style: he.container },
          i.createElement(
            f.a,
            { style: he.cardContainer },
            i.createElement(ue.a, { audioSpaceId: e.broadcastId, withoutButton: !0 }),
          ),
          i.createElement(
            de.a.Default,
            { style: he.ctaButton },
            i.createElement(pe.a.Button, {
              disablePassiveBackgroundColor: !0,
              hasReminderSet: t.props.hasReminderSet,
              isJoined: !1,
              isSmall: !1,
              onClick: t.props.onClick,
              scheduledStart: t.props.scheduledStart,
              state: 'NotStarted',
            }),
          ),
          i.createElement(
            f.a,
            { style: he.shareButtonContainer },
            i.createElement(F.a, { audioSpaceId: e.broadcastId }),
          ),
        )
      }
      var he = m.a.create(function (e) {
          var t = { width: '100%', paddingHorizontal: e.spaces.space8, paddingBottom: e.spaces.space48 }
          return {
            cardContainer: { paddingBottom: e.spaces.space32 },
            container: t,
            ctaButton: { width: '100%', marginTop: e.spaces.space32, borderRadius: e.borderRadii.infinite },
            shareButtonContainer: { marginTop: e.spaces.space8 },
          }
        }),
        me = n('cFuS')
      function be(e) {
        return i.createElement(
          f.a,
          { style: ve.endedContainer },
          i.createElement(
            h.b,
            { align: 'center', style: ve.endedTitle },
            i.createElement('span', { role: 'img' }, '🙉'),
          ),
          i.createElement(h.b, { align: 'center', numberOfLines: 1, size: 'title4', weight: 'bold' }, ge.spaceEnded),
          i.createElement(
            h.b,
            {
              align: 'center',
              color: 'gray700',
              numberOfLines: 1,
              size: 'body',
              style: ve.endedSubtitle,
              weight: 'bold',
            },
            ge.spaceEndedSubtitle,
          ),
        )
      }
      var ge = { spaceEnded: p.a.cc5ab041, spaceEndedSubtitle: p.a.eadd5677 },
        ve = m.a.create(function (e) {
          return {
            endedContainer: { paddingBottom: e.spaces.space48 },
            endedTitle: {
              paddingBottom: e.spaces.space32,
              fontSize: e.spaces.space64,
              lineHeight: ''.concat(m.a.theme.spacesPx.space64 + m.a.theme.spacesPx.space20, 'px'),
            },
            endedSubtitle: { paddingTop: e.spaces.space12 },
          }
        }),
        ye = n('hqDb'),
        Ee = n('cHvH'),
        we = n('88ay')
      function Se(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Se(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Se(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ce(e, t) {
        return i.createElement(we.b, {
          decoration: we.e,
          displayMode: 'UserCompact',
          key: t,
          promotedItemType: me.c.USER,
          style: e ? He.userCellWide : He.userCell,
          userId: t,
          withFollowsYou: !0,
        })
      }
      function Pe(e) {
        return Ce(!1, e)
      }
      function je(e) {
        return Ce(!0, e)
      }
      function Ie(e) {
        var t = e.isWide,
          n = e.label,
          r = e.style,
          a = e.users
        return 0 === a.length
          ? null
          : i.createElement(
              f.a,
              { style: r },
              i.createElement(
                h.b,
                {
                  numberOfLines: 1,
                  size: 'headline2',
                  style: t ? He.endedSubtitleWide : He.endedSubtitle,
                  weight: 'bold',
                },
                n,
              ),
              i.createElement(ye.a, { displayMode: 'UserCompact', renderUserCell: t ? je : Pe, userIds: a }),
            )
      }
      function xe(e) {
        var t,
          n,
          r = e.windowWidth,
          a = S()(e, ['windowWidth']),
          o = a.space
        if (!o) return i.createElement(be, a)
        var c = function (e) {
            return Object($.a)(
              (null == e
                ? void 0
                : e
                    .map(function (e) {
                      var t
                      return null === (t = e.user) || void 0 === t ? void 0 : t.rest_id
                    })
                    .filter(Boolean)) || [],
            )
          },
          s = null === (t = o.host) || void 0 === t || null === (n = t.user) || void 0 === n ? void 0 : n.rest_id,
          l = c(o.cohosts),
          u = c(o.participants.speakers),
          d = r > m.a.theme.breakpoints.medium
        return i.createElement(
          f.a,
          { style: d ? He.endedContainerWide : He.endedContainer },
          i.createElement(
            f.a,
            { style: He.overflow },
            i.createElement(Ie, { isWide: d, label: De.host, users: s ? [s] : [] }),
            i.createElement(Ie, {
              isWide: d,
              label: De.cohosts({ hostCount: l.length }),
              style: He.userSectionPadding,
              users: l,
            }),
            i.createElement(Ie, {
              isWide: d,
              label: De.speakers({ speakerCount: u.length }),
              style: He.userSectionPadding,
              users: u,
            }),
          ),
        )
      }
      function ke(e) {
        return i.createElement(Ee.a, null, function (t) {
          var n = t.windowWidth
          return i.createElement(xe, a()({ windowWidth: n }, e))
        })
      }
      var De = { spaceEnded: p.a.ba55e824, host: p.a.cededf29, cohosts: p.a.aadbc746, speakers: p.a.hbd6035f },
        He = m.a.create(function (e) {
          var t = { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 },
            n = { width: '100%', maxHeight: 550, overflow: 'auto' }
          return {
            endedContainer: n,
            endedContainerWide: Oe(Oe({}, n), {}, { paddingBottom: e.componentDimensions.gutterHorizontalPx }),
            endedSubtitle: Oe(Oe({}, t), {}, { paddingHorizontal: e.componentDimensions.gutterHorizontalPx }),
            endedSubtitleWide: Oe(Oe({}, t), {}, { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx }),
            userCell: { paddingHorizontal: e.componentDimensions.gutterHorizontalPx },
            userCellWide: { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx },
            overflow: { overflow: 'visible' },
            userSectionPadding: { paddingTop: e.spacesPx.space16 },
          }
        }),
        Le = n('21zW'),
        Re = n('MH+I')
      function _e(e) {
        var t,
          n,
          r = null === (t = e.space) || void 0 === t ? void 0 : t.ended_at,
          a = null === (n = e.space) || void 0 === n ? void 0 : n.started_at,
          o = 0
        return (
          null != r && null != a && (o = r - a),
          i.createElement(Ee.a, null, function (t) {
            var n,
              r = t.windowWidth
            return i.createElement(
              f.a,
              { style: r > m.a.theme.breakpoints.medium ? Fe.endedHeaderWide : Fe.endedHeader },
              i.createElement(
                f.a,
                { style: [Fe.row, Fe.spaceBetween] },
                i.createElement(
                  f.a,
                  { style: Fe.row },
                  i.createElement(
                    h.b,
                    { color: 'gray700', size: 'subtext1', style: [Fe.endedLabel, Fe.upper], weight: 'bold' },
                    Be.ended,
                    ' ',
                    i.createElement(Le.a, null),
                  ),
                  i.createElement(Re.a, {
                    color: 'gray700',
                    short: !0,
                    size: 'subtext1',
                    style: Fe.endedLabel,
                    timeMs: o,
                  }),
                ),
                i.createElement(f.a, { style: Fe.closeButton }, e.closeButton),
              ),
              i.createElement(
                h.b,
                { size: 'title2', weight: 'bold' },
                null === (n = e.space) || void 0 === n ? void 0 : n.title,
              ),
            )
          })
        )
      }
      var Be = { ended: p.a.ba55e824 },
        Fe = m.a.create(function (e) {
          return {
            endedHeader: { paddingHorizontal: e.componentDimensions.gutterHorizontalPx },
            endedHeaderWide: { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx },
            endedLabel: { lineHeight: 38 },
            row: { flexDirection: 'row' },
            spaceBetween: { justifyContent: 'space-between' },
            upper: { textTransform: 'uppercase' },
            closeButton: { marginRight: -11 },
          }
        })
      function ze(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ze(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ze(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Me(e) {
        var t,
          n = null === (t = e.location.state) || void 0 === t ? void 0 : t.origin,
          r = i.useContext(u.a).featureSwitches,
          o = Object(k.a)(e.broadcastId || '')
        i.useEffect(function () {
          var e
          return (
            o.utils.is.joined && (e = setTimeout(s, 1e3)),
            o.utils.scribe(':audiospace:preview:::impression', { origin: n }),
            function () {
              clearTimeout(e)
            }
          )
        }, [])
        var c = o.space
        if (!c) return null
        function s() {
          e.history.goBackThroughModals()
        }
        var l = Ue(
          Ue({}, e),
          {},
          {
            space: c,
            onClose: s,
            onJoin: function () {
              return o.handlers.join(n)
            },
          },
        )
        return o.utils.is.joined
          ? i.createElement(N, a()({}, l, { Content: b }))
          : o.utils.is.Running
          ? i.createElement(N, a()({}, l, { Content: oe }))
          : o.utils.is.NotStarted || o.utils.is.PrePublished
          ? i.createElement(N, a()({}, l, { Content: fe, withoutDescription: !0 }))
          : o.utils.is.loaded
          ? r.isTrue('voice_rooms_end_screen_participants')
            ? i.createElement(
                N,
                a()({}, l, { Content: ke, CustomHeader: _e, withoutDescription: !0, withoutPadding: !0 }),
              )
            : i.createElement(N, a()({}, l, { Content: be }))
          : i.createElement(N, a()({}, l, { Content: b }))
      }
      function Ne(e) {
        return i.createElement(o.a, e, i.createElement(We, e))
      }
      function We(e) {
        var t = Object(c.a)(e.match)
        return i.createElement(Me, a()({}, e, { broadcastId: t }))
      }
    },
    Z5jE: function (e, t, n) {
      'use strict'
      function r(e) {
        return e.params.broadcastId || ''
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    hqDb: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        f = n('5Yy7'),
        h = n.n(f),
        m = n('N+ot'),
        b = n.n(m),
        g = n('AuHH'),
        v = n.n(g),
        y = n('KEM+'),
        E = n.n(y),
        w = (n('2G9S'), n('ERkP')),
        S = n('k49u'),
        O = (n('LW0h'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        C = n('kGix'),
        P = n('G6rE'),
        j = n('rxPX'),
        I = n('0KEI'),
        x = function (e, t) {
          return t.userIds
        },
        k = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!P.e.select(e, t)
          })
        },
        D = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var r = P.e.selectFetchStatus(e, n)
            return (t[n] = r === C.a.NONE ? C.a.LOADING : r), t
          }, {})
        },
        H = Object(j.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(O.a)(k, function (e) {
                return e
              }),
              fetchStatus: Object(O.a)(k, D, x, function (e, t, n) {
                for (var r = C.a.LOADED, a = 0; a < n.length; a++) {
                  var i = n[a]
                  if (-1 === e.indexOf(i)) {
                    var o = t[i] || C.a.LOADING
                    r = r === C.a.LOADED ? o : r
                  }
                  if (r === C.a.LOADED) break
                }
                return r
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: P.e.fetchManyIfNeeded,
            }
          }),
        L = n('v//M'),
        R = n('3XMw'),
        _ = n.n(R),
        B = n('pQ3Z'),
        F = n.n(B),
        z = (n('z84I'), n('cFuS')),
        U = n('Re5t'),
        M = n('MWbm'),
        N = n('88ay'),
        W = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            r = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return w.createElement(
            M.a,
            null,
            r.map(function (e, r) {
              return n
                ? n(e)
                : w.createElement(N.b, {
                    decoration: N.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: z.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      W.defaultProps = { displayMode: U.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var A = W
      function T(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return b()(this, n)
        }
      }
      var J = _.a.f5b426c2,
        G = { viewType: 'user_list' },
        q = H(
          (function (e) {
            h()(n, e)
            var t = T(n)
            function n() {
              var e
              s()(this, n)
              for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                E()(p()(e), 'state', { allUsersUnavailable: !1 }),
                E()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    r =
                      (t.createLocalApiErrorHandler,
                      t.fetchStatus,
                      t.fetchUsersIfNeeded,
                      t.userIds,
                      o()(t, [
                        'availableUserIds',
                        'createLocalApiErrorHandler',
                        'fetchStatus',
                        'fetchUsersIfNeeded',
                        'userIds',
                      ]))
                  return w.createElement(A, a()({}, r, { userIds: n }))
                }),
                E()(p()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              u()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    F()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return w.createElement(L.a, {
                      accessibilityLabel: J,
                      behavioralEventContext: G,
                      fetchStatus: this.state.allUsersUnavailable ? C.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      n = this.props,
                      r = n.availableUserIds,
                      a = n.createLocalApiErrorHandler
                    ;(0, n.fetchUsersIfNeeded)(n.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      a(
                        ((e = {}),
                        E()(e, S.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        E()(e, S.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              n
            )
          })(w.Component),
        )
      t.a = q
    },
  },
])
//# sourceMappingURL=WIPED
