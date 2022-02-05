;(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    BXJq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('Qavd'), n('JtPf'), n('7x/C'), n('ERkP')),
        o = n.n(i),
        c = n('dgjd')
      function s(e) {
        var t = Object(c.a)(e),
          n = t.handlers,
          a = t.space,
          i = o.a.useState(!1),
          s = r()(i, 2),
          l = s[0],
          u = s[1],
          d = { hasReminderSet: !1, onClick: void 0, scheduledStart: void 0 }
        return (
          (function (e) {
            return e && e.host && e.scheduled_start && ('NotStarted' === e.state || 'PrePublished' === e.state)
          })(a) &&
            ((d.hasReminderSet = Boolean(null == a ? void 0 : a.is_subscribed)),
            (d.onClick = function () {
              var e = function () {
                return u(!1)
              }
              u(!0), d.hasReminderSet ? n.unsubscribe().finally(e) : n.subscribe().finally(e)
            }),
            (d.scheduledStart = null == a ? void 0 : a.scheduled_start)),
          { props: d, isSubscribing: l }
        )
      }
    },
    'Fg/a': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return W
      })
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        m = n('AuHH'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        b = (n('2G9S'), n('ERkP')),
        y = n.n(b),
        v = n('Pc/x'),
        w = n('6/RC'),
        E = (n('WNMA'), n('KqXw'), n('Z5jE')),
        S = n('rxPX'),
        C = function (e, t) {
          return Object(E.a)(t.match)
        },
        P = function (e) {
          return function (t, n, a) {
            return a.api.AudioSpaces.byId(e, { isMetatagsQuery: !0 })
          }
        },
        O = Object(S.a)()
          .propsFromState(function () {
            return { broadcastId: C }
          })
          .propsFromActions(function () {
            return { fetchAudioSpace: P }
          }),
        j = (n('1t7P'), n('jQ/y'), n('3XMw')),
        x = n.n(j),
        H = n('rJoH'),
        k = n('Rumh'),
        D = n('AooF')
      function _(e) {
        var t = e.space
        if (!t) return null
        var n = (function (e) {
          var t = (function (e) {
              var t,
                n,
                a,
                r,
                i = null == e || null === (t = e.host) || void 0 === t ? void 0 : t.display_name,
                o = i ? R.hostSpace({ name: i }) : R.hostSpaceFallback,
                c = e.title || o,
                s = R.descriptionGeneric,
                l = (null == e ? void 0 : e.participants.total) || 0,
                u = k.a.formatCountShort(l),
                d = R.descriptionListening({ count: u })
              if (e.state === D.a.SpaceState.Running)
                (n = R.titleRunning({ spaceTitle: c })),
                  (a = R.descriptionFormatRunning({ hostSpace: o, descriptionListening: d, descriptionGeneric: s })),
                  (r = I.ttl.Frequent)
              else if (e.state === D.a.SpaceState.NotStarted || e.state === D.a.SpaceState.PrePublished) {
                var p = R.scheduledSpaceGeneric
                ;(n = R.titleScheduled({ date: p, spaceTitle: c })),
                  (a = R.descriptionFormatScheduled({ hostSpace: o, descriptionGeneric: s })),
                  (r = I.ttl.Frequent)
              } else
                (n = R.titleEnded({ spaceTitle: c })),
                  (a = R.descriptionFormatEnded({ hostSpace: o, descriptionGeneric: s })),
                  (r = I.ttl.LongLivedCache)
              var m = 'https://twitter.com/i/spaces/'.concat(e.rest_id)
              return { title: n, canonical: m, description: a, ttl: r }
            })(e),
            n = t.canonical,
            a = t.description,
            r = t.title,
            i = t.ttl
          return {
            type: 'website',
            canonical: n,
            title: r,
            description: a,
            image: I.image.url,
            imageType: I.image.type,
            imageW: I.image.width,
            imageH: I.image.height,
            imageAlt: I.image.alt,
            ttl: i,
          }
        })(t)
        return y.a.createElement(H.a, n)
      }
      var R = {
          twitterSpaces: x.a.gaa01f2c,
          hostSpace: x.a.b6d3e0ee,
          hostSpaceFallback: x.a.ab4fc8bb,
          descriptionGeneric: x.a.fec3c1ef,
          descriptionListeners: x.a.ce447fcb,
          descriptionListening: x.a.ef7da97e,
          scheduledSpaceGeneric: x.a.f8464691,
          titleRunning: x.a.a065e7e7,
          titleScheduled: x.a.hd5e7b20,
          titleEnded: x.a.f826f7ee,
          descriptionFormatRunning: x.a.b2a94e92,
          descriptionFormatScheduled: x.a.f6432ce5,
          descriptionFormatEnded: x.a.f6432ce5,
        },
        I = {
          ttl: { Frequent: 300, LongLivedCache: 86400 },
          image: {
            type: 'image/jpeg',
            url: 'https://abs.twimg.com/sticky/cards/TwitterSpacesCardImage.2.jpg',
            width: 1200,
            height: 630,
            alt: R.twitterSpaces,
          },
        },
        L = n('G8HL')
      function z(e) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var B = (function (e) {
        u()(n, e)
        var t = z(n)
        function n() {
          var e
          r()(this, n)
          for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
          return (e = t.call.apply(t, [this].concat(i))), g()(s()(e), 'state', { space: null }), e
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
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(F, this.props),
                  y.a.createElement(_, { space: this.state.space }),
                )
              },
            },
          ]),
          n
        )
      })(y.a.Component)
      function F(e) {
        return (
          y.a.useEffect(function () {
            w.canUseDOM && v.a.proxsee.login()
          }, []),
          e.children
        )
      }
      var W = O(Object(L.a)(B))
    },
    UUFr: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return Je
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('WNMA'), n('KqXw'), n('ERkP')),
        o = n.n(i),
        c = n('Fg/a'),
        s = n('Z5jE'),
        l = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        u = n.n(l),
        d = (n('7xRU'), n('v6aA')),
        p = n('3XMw'),
        m = n.n(p),
        h = n('MWbm'),
        f = n('t62R'),
        g = n('rHpw')
      function b(e) {
        return o.a.createElement(
          h.a,
          { style: v.container },
          o.a.createElement(f.b, { align: 'center', numberOfLines: 1, size: 'title4', weight: 'bold' }, y.connecting),
        )
      }
      var y = { connecting: m.a.e4e811fb },
        v = g.a.create(function (e) {
          return { container: { paddingBottom: e.spaces.space48 } }
        }),
        w = n('Pc/x'),
        E = (n('z84I'), n('p3P5')),
        S = n('m3Bd'),
        C = n.n(S),
        P = n('ddV6'),
        O = n.n(P),
        j = n('hOZg'),
        x = n('RqPI')
      var H = n('Ty5D'),
        k = n('uDfI'),
        D = n('dgjd'),
        _ = n('mjJ+'),
        R = n('/yvb'),
        I = n('FXw/'),
        L = n('GCOQ')
      function z(e) {
        var t = (function (e) {
            var t = Object(H.g)(),
              n = Object(D.a)(e).utils,
              a = Object(k.d)(x.m),
              r = [],
              i = {
                Icon: L.a,
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
            a && r.push(i)
            return { items: r }
          })(e.audioSpaceId),
          n = o.a.useState(!1),
          a = O()(n, 2),
          r = a[0],
          i = a[1]
        if (t.items.length < 1) return null
        var c = r
          ? o.a.createElement(_.a, {
              isFixed: !0,
              items: t.items,
              onCloseRequested: function () {
                return i(!1)
              },
              shouldCloseOnClick: !0,
            })
          : null
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(R.a, {
            accessibilityLabel: B.more,
            borderColor: 'transparent',
            color: 'text',
            hoverLabel: { label: B.more },
            icon: o.a.createElement(I.a, null),
            onPress: function () {
              return i(!0)
            },
            pullRight: e.pullRight,
            size: 'medium',
          }),
          c,
        )
      }
      var B = { more: m.a.h63a5c3b, reportThisSpace: m.a.b3481ffd },
        F = n('0nhk'),
        W = n('xVWt')
      var M = n('sgih')
      function T(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function J(e) {
        var t,
          n,
          a,
          i,
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
            ((t = o.a.useState(null)),
            (n = O()(t, 2)),
            (a = n[0]),
            (i = n[1]),
            (c = o.a.useMemo(
              function () {
                if (!a)
                  return function (e) {
                    var t = e.nativeEvent.layout
                    t && i(t)
                  }
              },
              [a],
            )),
            [a, c]),
          u = O()(l, 2),
          d = u[0],
          p = u[1],
          m = [V.sheetContainer, e.withoutPadding && V.withoutPadding]
        return o.a.createElement(
          M.a,
          s,
          o.a.createElement(
            h.a,
            { onLayout: p, style: m },
            o.a.createElement(h.a, { style: V.sheetSpacerTop }),
            o.a.createElement(N, e),
            o.a.createElement(G, e),
            o.a.createElement(A, r()({}, e, { shellLayout: d })),
          ),
        )
      }
      function N(e) {
        e.Content, e.CustomHeader, e.withoutDescription, e.withoutPadding
        var t = C()(e, ['Content', 'CustomHeader', 'withoutDescription', 'withoutPadding']),
          n = o.a.createElement(
            R.a,
            r()(
              {
                accessibilityLabel: U.close,
                icon: o.a.createElement(j.a, { style: V.closeIcon }),
                onPress: e.onClose,
                pullLeft: !0,
              },
              X,
            ),
          )
        if (e.CustomHeader) return o.a.createElement(e.CustomHeader, r()({}, t, { closeButton: n }))
        var a = e.space.rest_id
        return o.a.createElement(
          h.a,
          { style: V.header },
          o.a.createElement(h.a, { style: V.headerLeft }, n),
          o.a.createElement(
            h.a,
            { style: V.headerRight },
            o.a.createElement(
              h.a,
              { style: V.headerRightItem },
              o.a.createElement(F.a, { audioSpaceId: a, type: 'icon-borderless' }),
            ),
            o.a.createElement(
              h.a,
              { style: V.headerRightItem },
              o.a.createElement(z, { audioSpaceId: a, pullRight: !0 }),
            ),
          ),
        )
      }
      function G(e) {
        return e.withoutDescription
          ? null
          : o.a.createElement(
              h.a,
              { style: V.descriptionContainer },
              o.a.createElement(W.b, { audioSpaceId: e.space.rest_id }),
            )
      }
      function A(e) {
        if (!e.Content) return null
        e.Content, e.CustomHeader
        var t = e.shellLayout,
          n =
            (e.withoutDescription,
            e.withoutPadding,
            C()(e, ['Content', 'CustomHeader', 'shellLayout', 'withoutDescription', 'withoutPadding']))
        return o.a.createElement(
          h.a,
          { style: [V.content, e.withoutPadding && V.withoutPadding] },
          o.a.createElement(e.Content, r()({}, n, { onClose: e.onClose, shellLayout: t })),
        )
      }
      function q(e) {
        return { sheetContainer: { paddingHorizontal: e.spacesPx.space16 } }
      }
      var V = g.a.create(function (e) {
          var t = q(e),
            n = { height: e.spacesPx.space24 },
            a = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? T(Object(n), !0).forEach(function (t) {
                      u()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : T(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ flex: 1 }, t.sheetContainer),
            r = { flex: 1, alignItems: 'center', paddingVertical: e.spacesPx.space20 },
            i = { marginLeft: e.spaces.space8 },
            o = { paddingVertical: e.spacesPx.space16 },
            c = e.spacesPx.space24
          return {
            sheetSpacerTop: n,
            sheetContainer: a,
            withoutPadding: { paddingHorizontal: 0, paddingVertical: 0 },
            content: r,
            header: { flexDirection: 'row' },
            headerLeft: { flex: 1, alignItems: 'flex-start' },
            headerRight: { flexDirection: 'row' },
            headerRightItem: i,
            descriptionContainer: o,
            closeIcon: { width: c, height: c },
          }
        }),
        X = { borderColor: 'transparent', color: 'text', size: 'medium' },
        U = { close: m.a.ia5e7487 }
      function K(e, t) {
        var n,
          a,
          r = t.width,
          i = t.height,
          o =
            ((n = g.a.theme),
            (a = q(n)),
            {
              getHorizontal: function (e) {
                return e - 2 * a.sheetContainer.paddingHorizontal
              },
            }),
          c = Object(E.b)(g.a.theme),
          s = g.a.theme.spacesPx.space40,
          l = i * Q - s - e.height,
          u = r > g.a.theme.breakpoints.medium ? Math.min(Z, r * Y) : r,
          d = o.getHorizontal(u),
          p = c.getHeight(),
          m = c.getWidth(),
          h = Math.min(4, Math.floor(l / p)),
          f = 4 === h ? 3 : 4,
          b = Math.min(f, Math.floor(d / m))
        return { maxDisplayParticipantCount: b * h, dynamicParticipantWidth: d / b }
      }
      var Z = 600,
        Y = 0.8,
        Q = 1,
        $ = n('4EYz'),
        ee = n('s1N3'),
        te = n('i4Oy'),
        ne = n('VKFJ')
      function ae(e) {
        var t = e.shellLayout
        if (!t) return null
        var n = ie(te.a.get('window')),
          a = K(ie(t), n),
          r = e.cohosts,
          i = e.host,
          c = e.participants,
          s = []
        i && s.push({ user: i, kind: ne.a.host })
        for (
          var l = Object(ee.a)(r, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: ne.a.cohost }
            }),
            u = 0;
          u < l.length && !(s.length >= a.maxDisplayParticipantCount);
          u++
        )
          s.push(l[u])
        for (
          var d = Object(ee.a)(c.speakers, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: ne.a.speaker }
            }),
            p = 0;
          p < d.length && !(s.length >= a.maxDisplayParticipantCount);
          p++
        )
          s.push(d[p])
        for (var m = 0; m < c.listeners.length && !(s.length >= a.maxDisplayParticipantCount); m++) {
          var f = c.listeners[m]
          f && e._temp_omitByScreenName !== f.twitter_screen_name && s.push({ user: f, kind: ne.a.listener })
        }
        var g = c.total || l.length + d.length,
          b = Math.max(0, g - s.length)
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            h.a,
            { style: re.participantsGridContainer },
            o.a.createElement(
              h.a,
              { style: re.participantsGridContent },
              s.map(function (e, t) {
                return o.a.createElement(E.a, {
                  hasNftAvatar: e.user.has_nft_avatar,
                  isVerified: e.user.is_verified,
                  key: e.user.twitter_screen_name,
                  kind: e.kind,
                  name: e.user.display_name,
                  profile_image_url_https: e.user.avatar_url,
                  screenName: e.user.twitter_screen_name,
                  width: a.dynamicParticipantWidth,
                })
              }),
            ),
          ),
          o.a.createElement($.a, { audioSpaceId: e.audioSpaceId, count: b, interactive: !1 }),
        )
      }
      var re = g.a.create(function (e) {
        return {
          participantsGridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
          participantsGridContent: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
        }
      })
      function ie(e) {
        var t = e.height
        return { width: e.width, height: t }
      }
      var oe = n('ISLN')
      function ce(e) {
        var t = e.space
        if (!t) return null
        var n = w.a.loggedInUser(),
          a = n && n.screen_name
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(ae, {
            _temp_omitByScreenName: a,
            audioSpaceId: t.rest_id,
            cohosts: t.cohosts,
            host: t.host,
            participants: t.participants,
            shellLayout: e.shellLayout,
          }),
          o.a.createElement(
            h.a,
            { style: le.joinSubtitleContainer },
            o.a.createElement(
              f.b,
              { align: 'center', numberOfLines: 1, size: 'subtext2', style: le.joinSubtitle },
              se.spaceJoinSubtitle,
            ),
          ),
          o.a.createElement(
            h.a,
            { style: le.joinButtonContainer },
            o.a.createElement(
              oe.a,
              {
                accessibilityLabel: se.spaceJoin,
                onPress: function () {
                  e.onJoin(), e.onClose()
                },
              },
              o.a.createElement(
                f.b,
                { align: 'center', color: 'white', numberOfLines: 1, size: 'headline1', weight: 'bold' },
                se.spaceJoin,
              ),
            ),
          ),
        )
      }
      var se = { spaceJoin: m.a.cc8f82bb, spaceJoinSubtitle: m.a.e51df2e6 },
        le = g.a.create(function (e) {
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
        ue = n('BXJq'),
        de = n('bNYH'),
        pe = n('Xyrk'),
        me = n('AooF')
      function he(e) {
        var t = Object(ue.a)(e.broadcastId)
        return o.a.createElement(
          h.a,
          { style: fe.container },
          o.a.createElement(
            h.a,
            { style: fe.cardContainer },
            o.a.createElement(de.a, { audioSpaceId: e.broadcastId, withoutButton: !0 }),
          ),
          o.a.createElement(
            pe.a.Default,
            { style: fe.ctaButton },
            o.a.createElement(me.a.Button, {
              disablePassiveBackgroundColor: !0,
              hasReminderSet: t.props.hasReminderSet,
              isJoined: !1,
              isSmall: !1,
              onClick: t.props.onClick,
              scheduledStart: t.props.scheduledStart,
              state: 'NotStarted',
            }),
          ),
          o.a.createElement(
            h.a,
            { style: fe.shareButtonContainer },
            o.a.createElement(F.a, { audioSpaceId: e.broadcastId }),
          ),
        )
      }
      var fe = g.a.create(function (e) {
          var t = { width: '100%', paddingHorizontal: e.spaces.space8, paddingBottom: e.spaces.space48 }
          return {
            cardContainer: { paddingBottom: e.spaces.space32 },
            container: t,
            ctaButton: { width: '100%', marginTop: e.spaces.space32, borderRadius: e.borderRadii.infinite },
            shareButtonContainer: { marginTop: e.spaces.space8 },
          }
        }),
        ge = n('cFuS')
      function be(e) {
        return o.a.createElement(
          h.a,
          { style: ve.endedContainer },
          o.a.createElement(
            f.b,
            { align: 'center', style: ve.endedTitle },
            o.a.createElement('span', { role: 'img' }, '🙉'),
          ),
          o.a.createElement(f.b, { align: 'center', numberOfLines: 1, size: 'title4', weight: 'bold' }, ye.spaceEnded),
          o.a.createElement(
            f.b,
            {
              align: 'center',
              color: 'gray700',
              numberOfLines: 1,
              size: 'body',
              style: ve.endedSubtitle,
              weight: 'bold',
            },
            ye.spaceEndedSubtitle,
          ),
        )
      }
      var ye = { spaceEnded: m.a.cc5ab041, spaceEndedSubtitle: m.a.eadd5677 },
        ve = g.a.create(function (e) {
          return {
            endedContainer: { paddingBottom: e.spaces.space48 },
            endedTitle: {
              paddingBottom: e.spaces.space32,
              fontSize: e.spaces.space64,
              lineHeight: ''.concat(g.a.theme.spacesPx.space64 + g.a.theme.spacesPx.space20, 'px'),
            },
            endedSubtitle: { paddingTop: e.spaces.space12 },
          }
        }),
        we = n('hqDb'),
        Ee = n('cHvH'),
        Se = n('88ay')
      function Ce(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ce(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ce(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Oe(e, t) {
        return o.a.createElement(Se.b, {
          decoration: Se.e,
          displayMode: 'UserCompact',
          key: t,
          promotedItemType: ge.c.USER,
          style: e ? Re.userCellWide : Re.userCell,
          userId: t,
          withFollowsYou: !0,
        })
      }
      function je(e) {
        return Oe(!1, e)
      }
      function xe(e) {
        return Oe(!0, e)
      }
      function He(e) {
        var t = e.isWide,
          n = e.label,
          a = e.style,
          r = e.users
        return 0 === r.length
          ? null
          : o.a.createElement(
              h.a,
              { style: a },
              o.a.createElement(
                f.b,
                {
                  numberOfLines: 1,
                  size: 'headline2',
                  style: t ? Re.endedSubtitleWide : Re.endedSubtitle,
                  weight: 'bold',
                },
                n,
              ),
              o.a.createElement(we.a, { displayMode: 'UserCompact', renderUserCell: t ? xe : je, userIds: r }),
            )
      }
      function ke(e) {
        var t,
          n,
          a = e.windowWidth,
          r = C()(e, ['windowWidth']),
          i = r.space
        if (!i) return o.a.createElement(be, r)
        var c = function (e) {
            return Object(ee.a)(
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
          s = null === (t = i.host) || void 0 === t || null === (n = t.user) || void 0 === n ? void 0 : n.rest_id,
          l = c(i.cohosts),
          u = c(i.participants.speakers),
          d = a > g.a.theme.breakpoints.medium
        return o.a.createElement(
          h.a,
          { style: d ? Re.endedContainerWide : Re.endedContainer },
          o.a.createElement(
            h.a,
            { style: Re.overflow },
            o.a.createElement(He, { isWide: d, label: _e.host, users: s ? [s] : [] }),
            o.a.createElement(He, {
              isWide: d,
              label: _e.cohosts({ hostCount: l.length }),
              style: Re.userSectionPadding,
              users: l,
            }),
            o.a.createElement(He, {
              isWide: d,
              label: _e.speakers({ speakerCount: u.length }),
              style: Re.userSectionPadding,
              users: u,
            }),
          ),
        )
      }
      function De(e) {
        return o.a.createElement(Ee.a, null, function (t) {
          var n = t.windowWidth
          return o.a.createElement(ke, r()({ windowWidth: n }, e))
        })
      }
      var _e = { spaceEnded: m.a.ba55e824, host: m.a.cededf29, cohosts: m.a.aadbc746, speakers: m.a.hbd6035f },
        Re = g.a.create(function (e) {
          var t = { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 },
            n = { width: '100%', maxHeight: 550, overflow: 'auto' }
          return {
            endedContainer: n,
            endedContainerWide: Pe(Pe({}, n), {}, { paddingBottom: e.componentDimensions.gutterHorizontalPx }),
            endedSubtitle: Pe(Pe({}, t), {}, { paddingHorizontal: e.componentDimensions.gutterHorizontalPx }),
            endedSubtitleWide: Pe(Pe({}, t), {}, { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx }),
            userCell: { paddingHorizontal: e.componentDimensions.gutterHorizontalPx },
            userCellWide: { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx },
            overflow: { overflow: 'visible' },
            userSectionPadding: { paddingTop: e.spacesPx.space16 },
          }
        }),
        Ie = n('21zW'),
        Le = n('MH+I')
      function ze(e) {
        var t,
          n,
          a = null === (t = e.space) || void 0 === t ? void 0 : t.ended_at,
          r = null === (n = e.space) || void 0 === n ? void 0 : n.started_at,
          i = 0
        return (
          null != a && null != r && (i = a - r),
          o.a.createElement(Ee.a, null, function (t) {
            var n,
              a = t.windowWidth
            return o.a.createElement(
              h.a,
              { style: a > g.a.theme.breakpoints.medium ? Fe.endedHeaderWide : Fe.endedHeader },
              o.a.createElement(
                h.a,
                null,
                o.a.createElement(h.a, { style: Fe.closeButton }, e.closeButton),
                o.a.createElement(
                  h.a,
                  { style: Fe.row },
                  o.a.createElement(
                    f.b,
                    { color: 'gray700', size: 'subtext1', style: [Fe.endedLabel, Fe.upper], weight: 'bold' },
                    Be.ended,
                    ' ',
                    o.a.createElement(Ie.a, null),
                  ),
                  o.a.createElement(Le.a, {
                    color: 'gray700',
                    short: !0,
                    size: 'subtext1',
                    style: Fe.endedLabel,
                    timeMs: i,
                  }),
                ),
              ),
              o.a.createElement(
                f.b,
                { size: 'title2', weight: 'bold' },
                null === (n = e.space) || void 0 === n ? void 0 : n.title,
              ),
            )
          })
        )
      }
      var Be = { ended: m.a.ba55e824 },
        Fe = g.a.create(function (e) {
          return {
            endedHeader: { paddingHorizontal: e.componentDimensions.gutterHorizontalPx },
            endedHeaderWide: { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx },
            endedLabel: { lineHeight: 38 },
            row: { flexDirection: 'row' },
            spaceBetween: { justifyContent: 'space-between' },
            upper: { textTransform: 'uppercase' },
            closeButton: { alignItems: 'flex-start' },
          }
        })
      function We(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function Me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? We(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : We(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Te(e) {
        var t,
          n = null === (t = e.location.state) || void 0 === t ? void 0 : t.origin,
          a = o.a.useContext(d.a).featureSwitches,
          i = Object(D.a)(e.broadcastId || '')
        o.a.useEffect(function () {
          var e
          return (
            i.utils.is.joined && (e = setTimeout(s, 1e3)),
            i.utils.scribe(':audiospace:preview:::impression', { origin: n }),
            function () {
              clearTimeout(e)
            }
          )
        }, [])
        var c = i.space
        if (!c) return null
        function s() {
          e.history.goBackThroughModals()
        }
        var l = Me(
          Me({}, e),
          {},
          {
            space: c,
            onClose: s,
            onJoin: function () {
              return i.handlers.join(n)
            },
          },
        )
        return i.utils.is.joined
          ? o.a.createElement(J, r()({}, l, { Content: b }))
          : i.utils.is.Running
          ? o.a.createElement(J, r()({}, l, { Content: ce }))
          : i.utils.is.NotStarted || i.utils.is.PrePublished
          ? o.a.createElement(J, r()({}, l, { Content: he, withoutDescription: !0 }))
          : i.utils.is.loaded
          ? a.isTrue('voice_rooms_end_screen_participants')
            ? o.a.createElement(
                J,
                r()({}, l, { Content: De, CustomHeader: ze, withoutDescription: !0, withoutPadding: !0 }),
              )
            : o.a.createElement(J, r()({}, l, { Content: be }))
          : o.a.createElement(J, r()({}, l, { Content: b }))
      }
      function Je(e) {
        return o.a.createElement(c.a, e, o.a.createElement(Ne, e))
      }
      function Ne(e) {
        var t = Object(s.a)(e.match)
        return o.a.createElement(Te, r()({}, e, { broadcastId: t }))
      }
    },
    Z5jE: function (e, t, n) {
      'use strict'
      function a(e) {
        return e.params.broadcastId || ''
      }
      n.d(t, 'a', function () {
        return a
      })
    },
  },
])
//# sourceMappingURL=WIPED
