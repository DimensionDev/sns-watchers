;(window.webpackJsonp = window.webpackJsonp || []).push([
  [32],
  {
    BXJq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('Qavd'), n('JtPf'), n('7x/C'), n('ERkP')),
        o = n('v6aA'),
        c = n('dgjd')
      function s(e) {
        var t = i.useContext(o.a).featureSwitches,
          n = Object(c.a)(e),
          a = n.handlers,
          s = n.space,
          l = i.useState(!1),
          u = r()(l, 2),
          d = u[0],
          p = u[1],
          m =
            t.isTrue('voice_rooms_scheduling_enabled') &&
            (function (e) {
              return e && e.host && e.scheduled_start && ('NotStarted' === e.state || 'PrePublished' === e.state)
            })(s),
          h = { hasReminderSet: !1, onClick: void 0, scheduledStart: void 0 }
        return (
          m &&
            ((h.hasReminderSet = Boolean(m && (null == s ? void 0 : s.is_subscribed))),
            (h.onClick = function () {
              var e = function () {
                return p(!1)
              }
              p(!0), h.hasReminderSet ? a.unsubscribe().finally(e) : a.subscribe().finally(e)
            }),
            (h.scheduledStart = null == s ? void 0 : s.scheduled_start)),
          { props: h, isSubscribing: d }
        )
      }
    },
    'Fg/a': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return F
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
        y = n('Pc/x'),
        v = n('6/RC'),
        w = (n('WNMA'), n('KqXw'), n('Z5jE')),
        E = n('rxPX'),
        S = function (e, t) {
          return Object(w.a)(t.match)
        },
        C = function (e) {
          return function (t, n, a) {
            return a.api.AudioSpaces.byId(e, { isMetatagsQuery: !0 })
          }
        },
        P = Object(E.a)()
          .propsFromState(function () {
            return { broadcastId: S }
          })
          .propsFromActions(function () {
            return { fetchAudioSpace: C }
          }),
        O = (n('1t7P'), n('jQ/y'), n('3XMw')),
        j = n.n(O),
        x = n('rJoH'),
        H = n('Rumh'),
        k = n('AooF')
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
                o = i ? D.hostSpace({ name: i }) : D.hostSpaceFallback,
                c = e.title || o,
                s = D.descriptionGeneric,
                l = (null == e ? void 0 : e.participants.total) || 0,
                u = H.a.formatCountShort(l),
                d = D.descriptionListening({ count: u })
              if (e.state === k.a.SpaceState.Running)
                (n = D.titleRunning({ spaceTitle: c })),
                  (a = D.descriptionFormatRunning({ hostSpace: o, descriptionListening: d, descriptionGeneric: s })),
                  (r = R.ttl.Frequent)
              else if (e.state === k.a.SpaceState.NotStarted || e.state === k.a.SpaceState.PrePublished) {
                var p = D.scheduledSpaceGeneric
                ;(n = D.titleScheduled({ date: p, spaceTitle: c })),
                  (a = D.descriptionFormatScheduled({ hostSpace: o, descriptionGeneric: s })),
                  (r = R.ttl.Frequent)
              } else
                (n = D.titleEnded({ spaceTitle: c })),
                  (a = D.descriptionFormatEnded({ hostSpace: o, descriptionGeneric: s })),
                  (r = R.ttl.LongLivedCache)
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
            image: R.image.url,
            imageType: R.image.type,
            imageW: R.image.width,
            imageH: R.image.height,
            imageAlt: R.image.alt,
            ttl: i,
          }
        })(t)
        return b.createElement(x.a, n)
      }
      var D = {
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
        R = {
          ttl: { Frequent: 300, LongLivedCache: 86400 },
          image: {
            type: 'image/jpeg',
            url: 'https://abs.twimg.com/sticky/cards/TwitterSpacesCardImage.2.jpg',
            width: 1200,
            height: 630,
            alt: D.twitterSpaces,
          },
        },
        z = n('G8HL')
      function L(e) {
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
      var I = (function (e) {
        u()(n, e)
        var t = L(n)
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
                return b.createElement(
                  b.Fragment,
                  null,
                  b.createElement(B, this.props),
                  b.createElement(_, { space: this.state.space }),
                )
              },
            },
          ]),
          n
        )
      })(b.Component)
      function B(e) {
        return (
          b.useEffect(function () {
            v.canUseDOM && y.a.proxsee.login()
          }, []),
          e.children
        )
      }
      var F = P(Object(z.a)(I))
    },
    UUFr: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return Te
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('WNMA'), n('KqXw'), n('ERkP')),
        o = n('Fg/a'),
        c = n('Z5jE'),
        s = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        l = n.n(s),
        u = (n('7xRU'), n('v6aA')),
        d = n('3XMw'),
        p = n.n(d),
        m = n('MWbm'),
        h = n('t62R'),
        f = n('rHpw')
      function g(e) {
        return i.createElement(
          m.a,
          { style: y.container },
          i.createElement(h.b, { align: 'center', numberOfLines: 1, size: 'title4', weight: 'bold' }, b.connecting),
        )
      }
      var b = { connecting: p.a.e4e811fb },
        y = f.a.create(function (e) {
          return { container: { paddingBottom: e.spaces.space48 } }
        }),
        v = n('Pc/x'),
        w = (n('z84I'), n('p3P5')),
        E = n('m3Bd'),
        S = n.n(E),
        C = n('ddV6'),
        P = n.n(C),
        O = n('hOZg'),
        j = n('RqPI')
      var x = n('zCf4'),
        H = n('uDfI'),
        k = n('dgjd'),
        _ = n('mjJ+'),
        D = n('/yvb'),
        R = n('FXw/'),
        z = n('GCOQ')
      function L(e) {
        var t = (function (e) {
            var t = Object(x.g)(),
              n = Object(k.a)(e).utils,
              a = Object(H.d)(j.l),
              r = [],
              i = {
                Icon: z.a,
                isEmphasized: !0,
                onClick: function () {
                  n.scribe(':audiospace::caret:report:click'),
                    t.push(
                      (function (e) {
                        return '/i/spaces/'.concat(e, '/peek/report')
                      })(e),
                    )
                },
                text: I.reportThisSpace,
              }
            a && r.push(i)
            return { items: r }
          })(e.audioSpaceId),
          n = i.useState(!1),
          a = P()(n, 2),
          r = a[0],
          o = a[1]
        if (t.items.length < 1) return null
        var c = r
          ? i.createElement(_.a, {
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
          i.createElement(D.a, {
            accessibilityLabel: I.more,
            borderColor: 'transparent',
            color: 'text',
            hoverLabel: { label: I.more },
            icon: i.createElement(R.a, null),
            onPress: function () {
              return o(!0)
            },
            pullRight: e.pullRight,
            size: 'medium',
          }),
          c,
        )
      }
      var I = { more: p.a.h63a5c3b, reportThisSpace: p.a.b3481ffd },
        B = n('0nhk'),
        F = n('xVWt')
      var W = n('sgih')
      function M(e, t) {
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
      function T(e) {
        var t,
          n,
          a,
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
            (n = P()(t, 2)),
            (a = n[0]),
            (o = n[1]),
            (c = i.useMemo(
              function () {
                if (!a)
                  return function (e) {
                    var t = e.nativeEvent.layout
                    t && o(t)
                  }
              },
              [a],
            )),
            [a, c]),
          u = P()(l, 2),
          d = u[0],
          p = u[1],
          h = [q.sheetContainer, e.withoutPadding && q.withoutPadding]
        return i.createElement(
          W.a,
          s,
          i.createElement(
            m.a,
            { onLayout: p, style: h },
            i.createElement(m.a, { style: q.sheetSpacerTop }),
            i.createElement(J, e),
            i.createElement(N, e),
            i.createElement(A, r()({}, e, { shellLayout: d })),
          ),
        )
      }
      function J(e) {
        e.Content, e.CustomHeader, e.withoutDescription, e.withoutPadding
        var t = S()(e, ['Content', 'CustomHeader', 'withoutDescription', 'withoutPadding']),
          n = i.createElement(
            D.a,
            r()(
              {
                accessibilityLabel: X.close,
                icon: i.createElement(O.a, { style: q.closeIcon }),
                onPress: e.onClose,
                pullLeft: !0,
              },
              V,
            ),
          )
        if (e.CustomHeader) return i.createElement(e.CustomHeader, r()({}, t, { closeButton: n }))
        var a = e.space.rest_id
        return i.createElement(
          m.a,
          { style: q.header },
          i.createElement(m.a, { style: q.headerLeft }, n),
          i.createElement(
            m.a,
            { style: q.headerRight },
            i.createElement(
              m.a,
              { style: q.headerRightItem },
              i.createElement(B.a, { audioSpaceId: a, type: 'icon-borderless' }),
            ),
            i.createElement(m.a, { style: q.headerRightItem }, i.createElement(L, { audioSpaceId: a, pullRight: !0 })),
          ),
        )
      }
      function N(e) {
        return e.withoutDescription
          ? null
          : i.createElement(
              m.a,
              { style: q.descriptionContainer },
              i.createElement(F.b, { audioSpaceId: e.space.rest_id }),
            )
      }
      function A(e) {
        if (!e.Content) return null
        e.Content, e.CustomHeader
        var t = e.shellLayout,
          n =
            (e.withoutDescription,
            e.withoutPadding,
            S()(e, ['Content', 'CustomHeader', 'shellLayout', 'withoutDescription', 'withoutPadding']))
        return i.createElement(
          m.a,
          { style: [q.content, e.withoutPadding && q.withoutPadding] },
          i.createElement(e.Content, r()({}, n, { onClose: e.onClose, shellLayout: t })),
        )
      }
      function G(e) {
        return { sheetContainer: { paddingHorizontal: e.spacesPx.space16 } }
      }
      var q = f.a.create(function (e) {
          var t = G(e),
            n = { height: e.spacesPx.space24 },
            a = (function (e) {
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
        V = { borderColor: 'transparent', color: 'text', size: 'medium' },
        X = { close: p.a.ia5e7487 }
      function U(e, t) {
        var n,
          a,
          r = t.width,
          i = t.height,
          o =
            ((n = f.a.theme),
            (a = G(n)),
            {
              getHorizontal: function (e) {
                return e - 2 * a.sheetContainer.paddingHorizontal
              },
            }),
          c = Object(w.b)(f.a.theme),
          s = f.a.theme.spacesPx.space40,
          l = i * Y - s - e.height,
          u = r > f.a.theme.breakpoints.medium ? Math.min(K, r * Z) : r,
          d = o.getHorizontal(u),
          p = c.getHeight(),
          m = c.getWidth(),
          h = Math.min(4, Math.floor(l / p)),
          g = 4 === h ? 3 : 4,
          b = Math.min(g, Math.floor(d / m))
        return { maxDisplayParticipantCount: b * h, dynamicParticipantWidth: d / b }
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
        var n = re(ee.a.get('window')),
          a = U(re(t), n),
          r = e.cohosts,
          o = e.host,
          c = e.participants,
          s = []
        o && s.push({ user: o, kind: te.a.host })
        for (
          var l = Object($.a)(r, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: te.a.cohost }
            }),
            u = 0;
          u < l.length && !(s.length >= a.maxDisplayParticipantCount);
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
          p < d.length && !(s.length >= a.maxDisplayParticipantCount);
          p++
        )
          s.push(d[p])
        for (var h = 0; h < c.listeners.length && !(s.length >= a.maxDisplayParticipantCount); h++) {
          var f = c.listeners[h]
          f && e._temp_omitByScreenName !== f.twitter_screen_name && s.push({ user: f, kind: te.a.listener })
        }
        var g = c.total || l.length + d.length,
          b = Math.max(0, g - s.length)
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            m.a,
            { style: ae.participantsGridContainer },
            i.createElement(
              m.a,
              { style: ae.participantsGridContent },
              s.map(function (e, t) {
                return i.createElement(w.a, {
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
          i.createElement(Q.a, { audioSpaceId: e.audioSpaceId, count: b, interactive: !1 }),
        )
      }
      var ae = f.a.create(function (e) {
        return {
          participantsGridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
          participantsGridContent: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
        }
      })
      function re(e) {
        var t = e.height
        return { width: e.width, height: t }
      }
      var ie = n('ISLN')
      function oe(e) {
        var t = e.space
        if (!t) return null
        var n = v.a.loggedInUser(),
          a = n && n.screen_name
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(ne, {
            _temp_omitByScreenName: a,
            audioSpaceId: t.rest_id,
            cohosts: t.cohosts,
            host: t.host,
            participants: t.participants,
            shellLayout: e.shellLayout,
          }),
          i.createElement(
            m.a,
            { style: se.joinSubtitleContainer },
            i.createElement(
              h.b,
              { align: 'center', numberOfLines: 1, size: 'subtext2', style: se.joinSubtitle },
              ce.spaceJoinSubtitle,
            ),
          ),
          i.createElement(
            m.a,
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
        se = f.a.create(function (e) {
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
      function me(e) {
        var t = Object(le.a)(e.broadcastId)
        return i.createElement(
          m.a,
          { style: he.container },
          i.createElement(
            m.a,
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
            m.a,
            { style: he.shareButtonContainer },
            i.createElement(B.a, { audioSpaceId: e.broadcastId }),
          ),
        )
      }
      var he = f.a.create(function (e) {
          var t = { width: '100%', paddingHorizontal: e.spaces.space8, paddingBottom: e.spaces.space48 }
          return {
            cardContainer: { paddingBottom: e.spaces.space32 },
            container: t,
            ctaButton: { width: '100%', marginTop: e.spaces.space32, borderRadius: e.borderRadii.infinite },
            shareButtonContainer: { marginTop: e.spaces.space8 },
          }
        }),
        fe = n('cFuS')
      function ge(e) {
        return i.createElement(
          m.a,
          { style: ye.endedContainer },
          i.createElement(
            h.b,
            { align: 'center', style: ye.endedTitle },
            i.createElement('span', { role: 'img' }, '🙉'),
          ),
          i.createElement(h.b, { align: 'center', numberOfLines: 1, size: 'title4', weight: 'bold' }, be.spaceEnded),
          i.createElement(
            h.b,
            {
              align: 'center',
              color: 'gray700',
              numberOfLines: 1,
              size: 'body',
              style: ye.endedSubtitle,
              weight: 'bold',
            },
            be.spaceEndedSubtitle,
          ),
        )
      }
      var be = { spaceEnded: p.a.cc5ab041, spaceEndedSubtitle: p.a.eadd5677 },
        ye = f.a.create(function (e) {
          return {
            endedContainer: { paddingBottom: e.spaces.space48 },
            endedTitle: {
              paddingBottom: e.spaces.space32,
              fontSize: e.spaces.space64,
              lineHeight: ''.concat(f.a.theme.spacesPx.space64 + f.a.theme.spacesPx.space20, 'px'),
            },
            endedSubtitle: { paddingTop: e.spaces.space12 },
          }
        }),
        ve = n('hqDb'),
        we = n('cHvH'),
        Ee = n('88ay')
      function Se(e, t) {
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
      function Ce(e) {
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
      function Pe(e, t) {
        return i.createElement(Ee.b, {
          decoration: Ee.e,
          displayMode: 'UserCompact',
          key: t,
          promotedItemType: fe.c.USER,
          style: e ? De.userCellWide : De.userCell,
          userId: t,
          withFollowsYou: !0,
        })
      }
      function Oe(e) {
        return Pe(!1, e)
      }
      function je(e) {
        return Pe(!0, e)
      }
      function xe(e) {
        var t = e.isWide,
          n = e.label,
          a = e.style,
          r = e.users
        return 0 === r.length
          ? null
          : i.createElement(
              m.a,
              { style: a },
              i.createElement(
                h.b,
                {
                  numberOfLines: 1,
                  size: 'headline2',
                  style: t ? De.endedSubtitleWide : De.endedSubtitle,
                  weight: 'bold',
                },
                n,
              ),
              i.createElement(ve.a, { displayMode: 'UserCompact', renderUserCell: t ? je : Oe, userIds: r }),
            )
      }
      function He(e) {
        var t,
          n,
          a = e.windowWidth,
          r = S()(e, ['windowWidth']),
          o = r.space
        if (!o) return i.createElement(ge, r)
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
          d = a > f.a.theme.breakpoints.medium
        return i.createElement(
          m.a,
          { style: d ? De.endedContainerWide : De.endedContainer },
          i.createElement(
            m.a,
            { style: De.overflow },
            i.createElement(xe, { isWide: d, label: _e.host, users: s ? [s] : [] }),
            i.createElement(xe, {
              isWide: d,
              label: _e.cohosts({ hostCount: l.length }),
              style: De.userSectionPadding,
              users: l,
            }),
            i.createElement(xe, {
              isWide: d,
              label: _e.speakers({ speakerCount: u.length }),
              style: De.userSectionPadding,
              users: u,
            }),
          ),
        )
      }
      function ke(e) {
        return i.createElement(we.a, null, function (t) {
          var n = t.windowWidth
          return i.createElement(He, r()({ windowWidth: n }, e))
        })
      }
      var _e = { spaceEnded: p.a.ba55e824, host: p.a.cededf29, cohosts: p.a.aadbc746, speakers: p.a.hbd6035f },
        De = f.a.create(function (e) {
          var t = { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 },
            n = { width: '100%', maxHeight: 550, overflow: 'auto' }
          return {
            endedContainer: n,
            endedContainerWide: Ce(Ce({}, n), {}, { paddingBottom: e.componentDimensions.gutterHorizontalPx }),
            endedSubtitle: Ce(Ce({}, t), {}, { paddingHorizontal: e.componentDimensions.gutterHorizontalPx }),
            endedSubtitleWide: Ce(Ce({}, t), {}, { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx }),
            userCell: { paddingHorizontal: e.componentDimensions.gutterHorizontalPx },
            userCellWide: { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx },
            overflow: { overflow: 'visible' },
            userSectionPadding: { paddingTop: e.spacesPx.space16 },
          }
        }),
        Re = n('21zW'),
        ze = n('MH+I')
      function Le(e) {
        var t,
          n,
          a = null === (t = e.space) || void 0 === t ? void 0 : t.ended_at,
          r = null === (n = e.space) || void 0 === n ? void 0 : n.started_at,
          o = 0
        return (
          null != a && null != r && (o = a - r),
          i.createElement(we.a, null, function (t) {
            var n,
              a = t.windowWidth
            return i.createElement(
              m.a,
              { style: a > f.a.theme.breakpoints.medium ? Be.endedHeaderWide : Be.endedHeader },
              i.createElement(
                m.a,
                { style: [Be.row, Be.spaceBetween] },
                i.createElement(
                  m.a,
                  { style: Be.row },
                  i.createElement(
                    h.b,
                    { color: 'gray700', size: 'subtext1', style: [Be.endedLabel, Be.upper], weight: 'bold' },
                    Ie.ended,
                    ' ',
                    i.createElement(Re.a, null),
                  ),
                  i.createElement(ze.a, {
                    color: 'gray700',
                    short: !0,
                    size: 'subtext1',
                    style: Be.endedLabel,
                    timeMs: o,
                  }),
                ),
                i.createElement(m.a, { style: Be.closeButton }, e.closeButton),
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
      var Ie = { ended: p.a.ba55e824 },
        Be = f.a.create(function (e) {
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
      function Fe(e, t) {
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
      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Fe(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Fe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Me(e) {
        var t,
          n = null === (t = e.location.state) || void 0 === t ? void 0 : t.origin,
          a = i.useContext(u.a).featureSwitches,
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
          var t = e.location
          e.history.goBackThroughModals({ location: t })
        }
        var l = We(
          We({}, e),
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
          ? i.createElement(T, r()({}, l, { Content: g }))
          : o.utils.is.Running
          ? i.createElement(T, r()({}, l, { Content: oe }))
          : o.utils.is.NotStarted || o.utils.is.PrePublished
          ? i.createElement(T, r()({}, l, { Content: me, withoutDescription: !0 }))
          : o.utils.is.loaded
          ? a.isTrue('voice_rooms_end_screen_participants')
            ? i.createElement(
                T,
                r()({}, l, { Content: ke, CustomHeader: Le, withoutDescription: !0, withoutPadding: !0 }),
              )
            : i.createElement(T, r()({}, l, { Content: ge }))
          : i.createElement(T, r()({}, l, { Content: g }))
      }
      function Te(e) {
        return i.createElement(o.a, e, i.createElement(Je, e))
      }
      function Je(e) {
        var t = Object(c.a)(e.match)
        return i.createElement(Me, r()({}, e, { broadcastId: t }))
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
