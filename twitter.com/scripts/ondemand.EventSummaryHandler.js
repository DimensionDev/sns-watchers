;(window.webpackJsonp = window.webpackJsonp || []).push([
  [205],
  {
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        i = Object(o.a)({
          loader: function () {
            return n.e(170).then(n.bind(null, 'ACNv'))
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
    hxu0: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(c.a.Consumer, null, function (n) {
            return i.a.createElement(e, a()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return F
      })
      n('OZaJ')
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
        f = n.n(p),
        v = n('N+ot'),
        g = n.n(v),
        h = n('AuHH'),
        b = n.n(h),
        y = n('KEM+'),
        C = n.n(y),
        x = (n('2G9S'), n('ERkP')),
        E = n.n(x),
        w = n('nT9l'),
        S = n('3XMw'),
        T = n.n(S),
        k = 'image',
        I = n('TIdA'),
        O = n('a6qo')
      function P(e) {
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
            r = b()(e)
          if (t) {
            var a = b()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var M = T.a.f93bb3ee,
        F = (function (e) {
          f()(n, e)
          var t = P(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              C()(m()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  o = e.props,
                  c = o.accessibilityLabel,
                  l = (o.hideAcceptOverlay, o.shouldShowAltLabel),
                  s = i()(o, ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'])
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(
                    I.a,
                    a()({}, s, { accessibilityLabel: c, onVariantSelection: n, previewMode: r, testID: k }),
                  ),
                  l ? E.a.createElement(O.a, { align: 'left', altLabel: c }) : null,
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
                  return E.a.createElement(w.a, {
                    acceptLabel: M,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof n ? n : n.url,
                  })
                },
              },
            ]),
            n
          )
        })(E.a.Component)
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
          return i ? a.a.createElement(o.b, { color: r, numberOfLines: 2, size: 'subtext2', style: f.root }, i) : null
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
            { color: t, link: e.link, size: 'subtext2', style: n && f.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        f = l.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = s
    },
    uuEz: function (e, t, n) {
      'use strict'
      n.r(t)
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
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
        f = n('x5Pi'),
        v = n('tI3i'),
        g = n.n(v),
        h = n('6rlp'),
        b = n('caTy'),
        y = n('Zejx'),
        C = n('G6rE'),
        x = n('rxPX'),
        E = n('0KEI'),
        w = function (e, t) {
          return t.entry.content
        },
        S = function (e, t) {
          var n = w(0, t),
            r = n.socialContext && n.socialContext.topicContext && n.socialContext.topicContext.topicId
          return r ? y.a.select(e, r) : void 0
        },
        T = function (e, t) {
          var n = w(0, t).publisherId
          return n ? C.e.select(e, n) : void 0
        },
        k = Object(x.a)()
          .propsFromState(function () {
            return { eventSummary: w, publisher: T, topic: S }
          })
          .adjustStateProps(function (e) {
            var t = e.eventSummary,
              n = e.publisher,
              r = e.topic,
              a = t.displayType,
              o = t.groupedTrends,
              i = t.promotedMetadata,
              c = t.richContext,
              l = Object(b.b)(t.url)
            g()(l, 'link cannot be undefined in EventSummaryHero')
            var s = Object(f.d)({
                isCellWithProminentSocialContext: a === p.a.CellWithProminentSocialContext,
                socialContext: t.socialContext,
                topic: r,
              }),
              u = (o || []).map(function (e) {
                return { name: e.name, link: Object(b.b)(e.url) }
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
              logTrend: h.c,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('URT_EVENT_SUMMARY'),
            }
          })
          .withAnalytics(),
        I = (n('hBvt'), n('xZmF')),
        O = n('wtjx'),
        P = n('P1r1'),
        M = function (e, t) {
          return t.entry.content
        },
        F = function (e, t) {
          var n = M(0, t),
            r = n.socialContext && n.socialContext.topicContext && n.socialContext.topicContext.topicId
          return r ? y.a.select(e, r) : void 0
        },
        j = function (e, t) {
          return t.entry.content.displayType === p.a.CellWithProminentSocialContext
        },
        _ = Object(x.a)()
          .propsFromState(function () {
            return { dataSaverMode: P.k, eventSummary: M, hasProminentSocialContext: j, topic: F }
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
            return { saveAsRecentSearch: O.a }
          }),
        R = n('RoyM'),
        L = (n('WNMA'), n('KqXw'), n('MvUL'), n('0mK8')),
        A = n('rcen'),
        D = n('MWbm'),
        H = n('pjBI'),
        z = n('t62R'),
        B = n('tg+X'),
        W = n('e5HP'),
        V = n('jV+4'),
        N = n('Nxr7'),
        X = n('Wms4'),
        G = n('rHpw'),
        J = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        K = function (e) {
          var t = e.badge,
            n = e.groupedTrends,
            r = e.hasProminentSocialContext,
            a = e.linkColor,
            o = e.promotedContent,
            i = e.promotedTrendDescription,
            c = e.publisher,
            l = e.publisherTitleColor,
            s = void 0 === l ? 'normal' : l,
            u = e.richContext,
            d = e.scoreEvent,
            p = e.shouldTruncateTitle,
            f = e.style,
            v = e.supportingText,
            g = e.textColor,
            h = void 0 === g ? 'gray700' : g,
            b = e.timeString,
            y = e.title,
            C = e.titleFontSize,
            x = void 0 === C ? 'body' : C,
            E = e.titleWeight,
            w = void 0 === E ? 'bold' : E,
            S = y.replace('#', '').charAt(0).match(J) ? 'rtl' : 'ltr',
            T = r ? void 0 : q.title
          return m.a.createElement(
            D.a,
            { style: f },
            r
              ? null
              : m.a.createElement(
                  H.a,
                  { color: h, style: q.aboveTitle },
                  v ? m.a.createElement(z.b, { color: h, numberOfLines: 1, size: 'subtext2' }, v) : null,
                  c ? m.a.createElement(L.a, { author: c, color: s, size: 'subtext2' }) : null,
                  t || b ? Z(b, t, h) : null,
                ),
            m.a.createElement(
              z.b,
              { color: s, dir: S, numberOfLines: p ? 3 : void 0, size: x, style: T, weight: w, withHashflags: !0 },
              y,
            ),
            m.a.createElement(B.a, { groupedTrends: n, linkColor: a, textColor: h }),
            r
              ? m.a.createElement(
                  D.a,
                  { style: q.belowTitle },
                  d
                    ? Y(d)
                    : (t || b) && c
                    ? U({ badge: t, publisher: c, textColor: h, timeString: b }) || Z(b, t, h)
                    : null,
                )
              : null,
            o && o.advertiser
              ? m.a.createElement(
                  m.a.Fragment,
                  null,
                  m.a.createElement(z.b, { color: h }, i),
                  m.a.createElement(W.a, { color: 'white', promotedContent: o, style: q.promotedIndicator }),
                )
              : null,
            u
              ? m.a.createElement(A.a, { color: h, entities: u.entities, rtl: u.rtl, size: 'subtext2', text: u.text })
              : null,
          )
        },
        U = function (e) {
          var t = e.badge,
            n = e.publisher,
            r = e.textColor,
            a = e.timeString,
            o = m.a.createElement(V.a, {
              isProtected: n.protected,
              isVerified: n.verified,
              name: n.name,
              nameSize: 'subtext2',
              profileImageUrl: n.profile_image_url_https,
            })
          return m.a.createElement(H.a, { style: q.publisherRow }, o, Z(a, t, r))
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
        Z = function (e, t, n) {
          return t && t.text
            ? m.a.createElement(X.a, { type: 'live' }, t.text)
            : e
            ? m.a.createElement(
                D.a,
                { style: q.timestamp },
                m.a.createElement(z.b, { color: n, numberOfLines: 1, size: 'subtext2' }, e),
              )
            : null
        },
        q = G.a.create(function (e) {
          return {
            aboveTitle: { alignItems: 'center', flexDirection: 'row' },
            belowTitle: { marginTop: e.spaces.space4 },
            promotedIndicator: { marginTop: e.spaces.space12 },
            publisherRow: { alignItems: 'center' },
            timestamp: { maxWidth: '50%' },
            title: { marginVertical: e.spaces.space2 },
          }
        }),
        Q = m.a.memo(K),
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
            f = e.richContext,
            v = e.saveAsRecentSearch,
            g = e.scoreEvent,
            h = e.shouldStoreTypeaheadItem,
            b = e.socialContext,
            y = e.supportingText,
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
                    h &&
                    h(oe.a.ItemType.EVENT) &&
                    v({
                      event: {
                        id: i,
                        image: c || { url: '', height: 0, width: 0 },
                        supportText: y,
                        title: x,
                        type: re.a.Event,
                      },
                    })
              },
              [i, c, u, v, h, y, x],
            ),
            S = m.a.useMemo(
              function () {
                return null != r && r.length ? m.a.createElement(R.a, { feedbackItems: r }) : null
              },
              [r],
            )
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              ce.a,
              { link: e.withAnchorless(s), onClick: w, style: fe.rootLink, withDarkerInteractiveBackground: l },
              o && b
                ? m.a.createElement(
                    le.a,
                    { rightControl: S, style: fe.socialContextRow },
                    m.a.createElement(pe, { socialContext: b, topic: E }),
                  )
                : null,
              m.a.createElement(
                D.a,
                { style: fe.row },
                m.a.createElement(Q, {
                  badge: t,
                  groupedTrends: a,
                  hasProminentSocialContext: o,
                  publisher: p,
                  richContext: f,
                  scoreEvent: g,
                  style: fe.details,
                  supportingText: y,
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
                      m.a.createElement(se.a, { style: fe.topicMiddot }),
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
            link: a ? Object(b.b)(a) : void 0,
            rightControl: c ? l : void 0,
            text: o,
            topicData: n && i ? Object(te.a)(i) : void 0,
            weight: 'bold',
            withLeftPadding: !1,
          })
        },
        pe = m.a.memo(me),
        fe = G.a.create(function (e) {
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
        ve = Object(ue.a)(_(m.a.memo(de))),
        ge = (n('hBpG'), n('29/U')),
        he = n('Fg8X'),
        be = n('XOJV'),
        ye = function (e, t) {
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
          return he.a.select(e, o)
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
          return o ? be.a.select(e, o) : void 0
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
            return { advertiser: Ee, eventSummary: ye, moment: Ce, tweet: xe }
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
        Te = (n('OZaJ'), n('VrFO')),
        ke = n.n(Te),
        Ie = n('Y9Ll'),
        Oe = n.n(Ie),
        Pe = n('5Yy7'),
        Me = n.n(Pe),
        Fe = n('N+ot'),
        je = n.n(Fe),
        _e = n('AuHH'),
        Re = n.n(_e),
        Le = (n('2G9S'), n('prG5')),
        Ae = n('Modb'),
        De = n('lklz'),
        He = n('9Xij'),
        ze = n('XrEN'),
        Be = n('3dad'),
        We = n('A91F')
      function Ve(e) {
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
            r = Re()(e)
          if (t) {
            var a = Re()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return je()(this, n)
        }
      }
      var Ne = { red: 0, green: 0, blue: 0 },
        Xe = (function (e) {
          Me()(n, e)
          var t = Ve(n)
          function n() {
            return ke()(this, n), t.apply(this, arguments)
          }
          return (
            Oe()(n, [
              {
                key: 'render',
                value: function () {
                  var e = G.a.theme.aspectRatios.landscape
                  return m.a.createElement(
                    He.a,
                    { ratio: e },
                    m.a.createElement(
                      D.a,
                      { style: [Ge.maxHeightWidth, this._getBackgroundColorStyle()] },
                      this._renderCover(),
                    ),
                    m.a.createElement(D.a, { style: [G.a.absoluteFill, this._getGradientColorStyle()] }),
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
                    var o = ze.a.extractVideoProps(De.b.forTweet(a), t)
                    return m.a.createElement(
                      Ae.a,
                      l()({}, o, {
                        aspectRatio: G.a.theme.aspectRatios.landscape,
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
                      c = Be.a.getOriginalImage(t)
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
                    ? m.a.createElement(Le.a, {
                        accessibilityLabel: t,
                        aspectMode: We.a.exact(G.a.theme.aspectRatios.landscape),
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
                      : G.a.theme.colors.primary,
                  }
                },
              },
              {
                key: '_getGradientColorStyle',
                value: function () {
                  var e = Ne,
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
                  return e.manualCrops || (t && Be.a.getCropCandidates(t))
                },
              },
              {
                key: '_getDominantColor',
                value: function () {
                  var e = this.props.coverMediaFromTweet
                  return e && Be.a.getBackgroundColor(e)
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        Ge = G.a.create(function (e) {
          return { maxHeightWidth: { height: '100%', width: '100%' } }
        }),
        Je = 'eventHero',
        Ke = n('cm6r'),
        Ue = 'white',
        Ye = function (e) {
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
            f = e.richContext,
            v = e.supportingText,
            g = e.timeString,
            h = e.title,
            b = e.tweetId
          m.a.useEffect(function () {
            s && s()
          }, [])
          var y = h.length > 80 ? 'headline1' : 'title4'
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(
                Ke.a,
                { link: e.withAnchorless(i), onClick: l, testID: Je },
                m.a.createElement(Xe, {
                  coverMediaFromTweet: n,
                  image: o,
                  manualCrops: c,
                  promotedContent: u,
                  tweetId: b,
                }),
                m.a.createElement(
                  D.a,
                  { style: [G.a.absoluteFill, Ze.details] },
                  m.a.createElement(Q, {
                    badge: t,
                    groupedTrends: a,
                    linkColor: Ue,
                    promotedContent: u,
                    promotedTrendDescription: d,
                    publisher: p,
                    publisherTitleColor: Ue,
                    richContext: f,
                    shouldTruncateTitle: !0,
                    supportingText: v,
                    textColor: Ue,
                    timeString: g,
                    title: h,
                    titleFontSize: y,
                    titleWeight: 'heavy',
                  }),
                ),
              ),
              null != r && r.length
                ? m.a.createElement(
                    D.a,
                    { style: Ze.menuContainer },
                    m.a.createElement(R.a, { feedbackItems: r, isDisplayedOnMedia: !0 }),
                  )
                : null,
            )
          })
        },
        Ze = G.a.create(function (e) {
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
        qe = Se(m.a.memo(Ye)),
        Qe = n('cFuS'),
        $e = function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = e.logTrend,
            a = e.promotedMetadata,
            o = u()(e, ['analytics', 'createLocalApiErrorHandler', 'logTrend', 'promotedMetadata']),
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
                t.scribeAction('click'), i(Qe.d.SPOTLIGHT_CLICK)
              },
              [t, i],
            ),
            s = m.a.useCallback(
              function () {
                t.scribeAction('impression'), i(Qe.d.SPOTLIGHT_IMPRESSION)
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
        et = k(m.a.memo($e)),
        tt = n('Rp9C')
      function nt(e, t) {
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
      var rt = function (e) {
        var t = e.content.promotedMetadata,
          n = e.content.id,
          r = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? nt(Object(n), !0).forEach(function (t) {
                    a()(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : nt(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  })
            }
            return e
          })(
            { item_type: oe.a.ItemType.EVENT, event_details: { event_id: n } },
            tt.a.getAllSurfaceDetails(e.itemMetadata.clientEventInfo),
          )
        return t && ((r.disclosure_type = t.disclosureType), (r.promoted_id = t.impressionId)), r
      }
      t.default = function (e) {
        return o
          .b({
            component: et,
            getScribeDataItem: function (e) {
              return rt(e)
            },
            isFocusable: Object(i.a)(!0),
          })
          .getHandler(function () {
            return e
          })
      }
    },
  },
])
//# sourceMappingURL=WIPED
