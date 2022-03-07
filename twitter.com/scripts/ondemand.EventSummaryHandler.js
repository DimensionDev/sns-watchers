;(window.webpackJsonp = window.webpackJsonp || []).push([
  [211],
  {
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        i = Object(o.a)({
          loader: function () {
            return n.e(175).then(n.bind(null, 'ACNv'))
          },
        }),
        l = n('4bW+'),
        c = n('IG7M'),
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
          return a.a.createElement(c.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return a.a.createElement(i, { actionItems: n, onClose: e })
            },
            style: d.curationControl,
            testID: l.a.caret,
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
        l = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(l.a.Consumer, null, function (n) {
            return i.a.createElement(e, a()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
      })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        v = n.n(p),
        g = n('2VqO'),
        h = n.n(g),
        C = n('KEM+'),
        f = n.n(C),
        b = (n('2G9S'), n('ERkP')),
        y = n.n(b),
        x = n('nT9l'),
        E = n('3XMw'),
        T = n.n(E),
        S = 'image',
        k = n('TIdA'),
        w = n('a6qo'),
        I = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        M = T.a.f93bb3ee,
        P = (function (e) {
          v()(n, e)
          var t = h()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++) o[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              f()(m()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  o = e.props,
                  l = o.accessibilityLabel,
                  c = (o.hideAcceptOverlay, o.shouldShowAltLabel),
                  s = i()(o, I)
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(
                    k.a,
                    a()({}, s, { accessibilityLabel: l, onVariantSelection: n, previewMode: r, testID: S }),
                  ),
                  c ? y.a.createElement(w.a, { align: 'left', altLabel: l }) : null,
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
                  return y.a.createElement(x.a, {
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
        })(y.a.Component)
    },
    'tg+X': function (e, t, n) {
      'use strict'
      n('hBvt'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        i = n('3XMw'),
        l = n.n(i),
        c = n('rHpw'),
        s = function (e) {
          var t = e.groupedTrends,
            n = e.linkColor,
            r = e.textColor,
            i = u(t, n)
          return i ? a.a.createElement(o.b, { color: r, numberOfLines: 2, size: 'subtext2', style: v.root }, i) : null
        }
      s.defaultProps = { textColor: 'gray700' }
      var u = function (e, t) {
          return e.length >= 2 ? m(e, t) : 1 === e.length ? d(e[0], t) : null
        },
        d = function (e, t) {
          return a.a.createElement(l.a.I18NFormatMessage, { $i18n: 'fe7c309b' }, p(e, t, !0))
        },
        m = function (e, t) {
          return a.a.createElement(l.a.I18NFormatMessage, { $i18n: 'ea753bf4' }, p(e[0], t, !0), p(e[1], t))
        },
        p = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return a.a.createElement(
            o.b,
            { color: t, link: e.link, size: 'subtext2', style: n && v.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        v = c.a.create(function (e) {
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
        l = n('97Jx'),
        c = n.n(l),
        s = n('m3Bd'),
        u = n.n(s),
        d = n('ERkP'),
        m = n.n(d),
        p = (n('z84I'), n('ho0z'), n('k+3s')),
        v = n('x5Pi'),
        g = n('tI3i'),
        h = n.n(g),
        C = n('6rlp'),
        f = n('caTy'),
        b = n('Zejx'),
        y = n('G6rE'),
        x = n('rxPX'),
        E = n('0KEI'),
        T = function (e, t) {
          return t.entry.content
        },
        S = function (e, t) {
          var n = T(0, t),
            r = n.socialContext && n.socialContext.topicContext && n.socialContext.topicContext.topicId
          return r ? b.a.select(e, r) : void 0
        },
        k = function (e, t) {
          var n = T(0, t).publisherId
          return n ? y.e.select(e, n) : void 0
        },
        w = Object(x.a)()
          .propsFromState(function () {
            return { eventSummary: T, publisher: k, topic: S }
          })
          .adjustStateProps(function (e) {
            var t = e.eventSummary,
              n = e.publisher,
              r = e.topic,
              a = t.displayType,
              o = t.groupedTrends,
              i = t.promotedMetadata,
              l = t.richContext,
              c = Object(f.b)(t.url)
            h()(c, 'link cannot be undefined in EventSummaryHero')
            var s = Object(v.d)({
                isCellWithProminentSocialContext: a === p.a.CellWithProminentSocialContext,
                socialContext: t.socialContext,
                topic: r,
              }),
              u = (o || []).map(function (e) {
                return { name: e.name, link: Object(f.b)(e.url) }
              })
            return {
              badge: t.badge,
              displayType: t.displayType,
              groupedTrends: u,
              image: t.image,
              link: c,
              promotedMetadata: i,
              publisher: n,
              richContext: l,
              socialContext: s,
              supportingText: t.supportingText,
              timeString: t.timeString,
              title: t.title,
            }
          })
          .propsFromActions(function () {
            return {
              logTrend: C.c,
              createLocalApiErrorHandler: Object(E.createLocalApiErrorHandlerWithContextFactory)('URT_EVENT_SUMMARY'),
            }
          })
          .withAnalytics(),
        I = (n('hBvt'), n('xZmF')),
        M = n('wtjx'),
        P = n('P1r1'),
        F = function (e, t) {
          return t.entry.content
        },
        _ = function (e, t) {
          var n = F(0, t),
            r = n.socialContext && n.socialContext.topicContext && n.socialContext.topicContext.topicId
          return r ? b.a.select(e, r) : void 0
        },
        O = function (e, t) {
          return t.entry.content.displayType === p.a.CellWithProminentSocialContext
        },
        L = Object(x.a)()
          .propsFromState(function () {
            return { dataSaverMode: P.k, eventSummary: F, hasProminentSocialContext: O, topic: _ }
          })
          .adjustStateProps(function (e) {
            var t,
              n = e.dataSaverMode,
              r = e.eventSummary,
              a = e.hasProminentSocialContext,
              o = e.topic
            if (a && r.scoreEvent) {
              var i = r.scoreEvent,
                l = i.category,
                c = i.eventState,
                s = i.gameClock,
                u = i.gameClockPeriod,
                d = i.participants
              t = {
                category: l,
                eventState: c,
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
            return { saveAsRecentSearch: M.a }
          }),
        A = n('RoyM'),
        j = (n('KqXw'), n('WNMA'), n('MvUL'), n('0mK8')),
        D = n('rcen'),
        R = n('MWbm'),
        z = n('pjBI'),
        H = n('t62R'),
        V = n('tg+X'),
        W = n('e5HP'),
        B = n('jV+4'),
        G = n('Nxr7'),
        N = n('Wms4'),
        X = n('rHpw'),
        J = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        K = function (e) {
          var t = e.badge,
            n = e.groupedTrends,
            r = e.hasProminentSocialContext,
            a = e.linkColor,
            o = e.promotedContent,
            i = e.promotedTrendDescription,
            l = e.publisher,
            c = e.publisherTitleColor,
            s = void 0 === c ? 'normal' : c,
            u = e.richContext,
            d = e.scoreEvent,
            p = e.shouldTruncateTitle,
            v = e.style,
            g = e.supportingText,
            h = e.textColor,
            C = void 0 === h ? 'gray700' : h,
            f = e.timeString,
            b = e.title,
            y = e.titleFontSize,
            x = void 0 === y ? 'body' : y,
            E = e.titleWeight,
            T = void 0 === E ? 'bold' : E,
            S = b.replace('#', '').charAt(0).match(J) ? 'rtl' : 'ltr',
            k = r ? void 0 : Q.title
          return m.a.createElement(
            R.a,
            { style: v },
            r
              ? null
              : m.a.createElement(
                  z.a,
                  { color: C, style: Q.aboveTitle },
                  g ? m.a.createElement(H.b, { color: C, numberOfLines: 1, size: 'subtext2' }, g) : null,
                  l ? m.a.createElement(j.a, { author: l, color: s, size: 'subtext2' }) : null,
                  t || f ? Y(f, t, C) : null,
                ),
            m.a.createElement(
              H.b,
              { color: s, dir: S, numberOfLines: p ? 3 : void 0, size: x, style: k, weight: T, withHashflags: !0 },
              b,
            ),
            m.a.createElement(V.a, { groupedTrends: n, linkColor: a, textColor: C }),
            r
              ? m.a.createElement(
                  R.a,
                  { style: Q.belowTitle },
                  d
                    ? q(d)
                    : (t || f) && l
                    ? U({ badge: t, publisher: l, textColor: C, timeString: f }) || Y(f, t, C)
                    : null,
                )
              : null,
            o && o.advertiser
              ? m.a.createElement(
                  m.a.Fragment,
                  null,
                  m.a.createElement(H.b, { color: C }, i),
                  m.a.createElement(W.a, { color: 'white', promotedContent: o, style: Q.promotedIndicator }),
                )
              : null,
            u
              ? m.a.createElement(D.a, { color: C, entities: u.entities, rtl: u.rtl, size: 'subtext2', text: u.text })
              : null,
          )
        },
        U = function (e) {
          var t = e.badge,
            n = e.publisher,
            r = e.textColor,
            a = e.timeString,
            o = m.a.createElement(B.a, {
              isProtected: n.protected,
              isVerified: n.verified,
              name: n.name,
              nameSize: 'subtext2',
              profileImageUrl: n.profile_image_url_https,
            })
          return m.a.createElement(z.a, { style: Q.publisherRow }, o, Y(a, t, r))
        },
        q = function (e) {
          var t = e.category,
            n = e.eventState,
            r = e.gameClock,
            a = e.gameClockPeriod,
            o = e.participants,
            i = e.startTimeMillis,
            l = e.winnerId
          return m.a.createElement(G.a, {
            category: t,
            gameClock: r,
            gameClockPeriod: a,
            gameState: n,
            startTimeMillis: i,
            teams: o,
            winnerId: l,
            withCategory: !1,
          })
        },
        Y = function (e, t, n) {
          return t && t.text
            ? m.a.createElement(N.a, { type: 'live' }, t.text)
            : e
            ? m.a.createElement(
                R.a,
                { style: Q.timestamp },
                m.a.createElement(H.b, { color: n, numberOfLines: 1, size: 'subtext2' }, e),
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
        Z = m.a.memo(K),
        $ = n('PbbS'),
        ee = n('LWCC'),
        te = n('9B+1'),
        ne = n('8bWS'),
        re = n('3IPs'),
        ae = n('qbku'),
        oe = n('X04g'),
        ie = n('PbQQ'),
        le = n('htQn'),
        ce = n('5mJL'),
        se = n('21zW'),
        ue = n('hxu0'),
        de = function (e) {
          var t = e.badge,
            n = e.dataSaverMode,
            r = e.feedbackItems,
            a = e.groupedTrends,
            o = e.hasProminentSocialContext,
            i = e.id,
            l = e.image,
            c = e.isInSidebar,
            s = e.link,
            u = e.onClick,
            d = e.onImpression,
            p = e.publisher,
            v = e.richContext,
            g = e.saveAsRecentSearch,
            h = e.scoreEvent,
            C = e.shouldStoreTypeaheadItem,
            f = e.socialContext,
            b = e.supportingText,
            y = e.timeString,
            x = e.title,
            E = e.topic
          m.a.useEffect(function () {
            d && d()
          }, [])
          var T = m.a.useCallback(
              function () {
                u(),
                  g &&
                    C &&
                    C(oe.a.ItemType.EVENT) &&
                    g({
                      event: {
                        id: i,
                        image: l || { url: '', height: 0, width: 0 },
                        supportText: b,
                        title: x,
                        type: re.a.Event,
                      },
                    })
              },
              [i, l, u, g, C, b, x],
            ),
            S = m.a.useMemo(
              function () {
                return null != r && r.length ? m.a.createElement(A.a, { feedbackItems: r }) : null
              },
              [r],
            )
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              le.a,
              { link: e.withAnchorless(s), onClick: T, style: ve.rootLink, withDarkerInteractiveBackground: c },
              o && f
                ? m.a.createElement(
                    ce.a,
                    { rightControl: S, style: ve.socialContextRow },
                    m.a.createElement(pe, { socialContext: f, topic: E }),
                  )
                : null,
              m.a.createElement(
                R.a,
                { style: ve.row },
                m.a.createElement(Z, {
                  badge: t,
                  groupedTrends: a,
                  hasProminentSocialContext: o,
                  publisher: p,
                  richContext: v,
                  scoreEvent: h,
                  style: ve.details,
                  supportingText: b,
                  timeString: y,
                  title: x,
                }),
                m.a.createElement(I.a, {
                  dataSaverMode: n,
                  icon: 'news',
                  image: l,
                  isCellWithProminentSocialContext: o,
                  scoreEvent: h,
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
            l = i && Object(ne.c)(i),
            c = m.a.useMemo(
              function () {
                return n
                  ? m.a.createElement(
                      m.a.Fragment,
                      null,
                      m.a.createElement(se.a, { style: ve.topicMiddot }),
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
            link: a ? Object(f.b)(a) : void 0,
            rightControl: l ? c : void 0,
            text: o,
            topicData: n && i ? Object(te.a)(i) : void 0,
            weight: 'bold',
            withLeftPadding: !1,
          })
        },
        pe = m.a.memo(me),
        ve = X.a.create(function (e) {
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
        ge = Object(ue.a)(L(m.a.memo(de))),
        he = (n('hBpG'), n('7x/C'), n('29/U')),
        Ce = n('Fg8X'),
        fe = n('XOJV'),
        be = function (e, t) {
          return t.entry.content
        },
        ye = function (e, t) {
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
          return Ce.a.select(e, o)
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
          return o ? fe.a.select(e, o) : void 0
        },
        Ee = function (e, t) {
          var n,
            r = null === (n = t.entry.content.promotedMetadata) || void 0 === n ? void 0 : n.advertiserId
          return r ? y.e.select(e, r) : void 0
        },
        Te = function (e) {
          var t = e.eventSummary,
            n = e.tweet
          if (n) {
            var r,
              a,
              o,
              i,
              l = null === (r = t.media) || void 0 === r || null === (a = r.mediaKey) || void 0 === a ? void 0 : a.id
            return null === (o = n.extended_entities) || void 0 === o || null === (i = o.media) || void 0 === i
              ? void 0
              : i.find(function (e) {
                  return e.id_str === l
                })
          }
        },
        Se = Object(x.a)()
          .propsFromState(function () {
            return { advertiser: Ee, eventSummary: be, moment: ye, tweet: xe }
          })
          .adjustStateProps(function (e) {
            var t = e.advertiser,
              n = e.eventSummary,
              r = e.moment,
              a = e.tweet,
              o = n.promotedMetadata
            return {
              coverMediaFromTweet: Te({ tweet: a, eventSummary: n }),
              manualCrops: Object(he.f)(r),
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
        we = n.n(ke),
        Ie = n('Y9Ll'),
        Me = n.n(Ie),
        Pe = n('5Yy7'),
        Fe = n.n(Pe),
        _e = n('2VqO'),
        Oe = n.n(_e),
        Le = (n('2G9S'), n('prG5')),
        Ae = n('Modb'),
        je = n('lklz'),
        De = n('9Xij'),
        Re = n('XrEN'),
        ze = n('3dad'),
        He = n('A91F'),
        Ve = { red: 0, green: 0, blue: 0 },
        We = (function (e) {
          Fe()(n, e)
          var t = Oe()(n)
          function n() {
            return we()(this, n), t.apply(this, arguments)
          }
          return (
            Me()(n, [
              {
                key: 'render',
                value: function () {
                  var e = X.a.theme.aspectRatios.landscape
                  return m.a.createElement(
                    De.a,
                    { ratio: e },
                    m.a.createElement(
                      R.a,
                      { style: [Be.maxHeightWidth, this._getBackgroundColorStyle()] },
                      this._renderCover(),
                    ),
                    m.a.createElement(R.a, { style: [X.a.absoluteFill, this._getGradientColorStyle()] }),
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
                    var o = Re.a.extractVideoProps(je.b.forTweet(a), t)
                    return m.a.createElement(
                      Ae.a,
                      c()({}, o, {
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
                      l = ze.a.getOriginalImage(t)
                    return this._renderCoverImage(l, i)
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
                        aspectMode: He.a.exact(X.a.theme.aspectRatios.landscape),
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
                  var e = Ve,
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
                  return e.manualCrops || (t && ze.a.getCropCandidates(t))
                },
              },
              {
                key: '_getDominantColor',
                value: function () {
                  var e = this.props.coverMediaFromTweet
                  return e && ze.a.getBackgroundColor(e)
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        Be = X.a.create(function (e) {
          return { maxHeightWidth: { height: '100%', width: '100%' } }
        }),
        Ge = 'eventHero',
        Ne = n('cm6r'),
        Xe = 'white',
        Je = function (e) {
          var t = e.badge,
            n = e.coverMediaFromTweet,
            r = e.feedbackItems,
            a = e.groupedTrends,
            o = e.image,
            i = e.link,
            l = e.manualCrops,
            c = e.onClick,
            s = e.onImpression,
            u = e.promotedContent,
            d = e.promotedTrendDescription,
            p = e.publisher,
            v = e.richContext,
            g = e.supportingText,
            h = e.timeString,
            C = e.title,
            f = e.tweetId
          m.a.useEffect(function () {
            s && s()
          }, [])
          var b = C.length > 80 ? 'headline1' : 'title4'
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(
                Ne.a,
                { link: e.withAnchorless(i), onClick: c, testID: Ge },
                m.a.createElement(We, {
                  coverMediaFromTweet: n,
                  image: o,
                  manualCrops: l,
                  promotedContent: u,
                  tweetId: f,
                }),
                m.a.createElement(
                  R.a,
                  { style: [X.a.absoluteFill, Ke.details] },
                  m.a.createElement(Z, {
                    badge: t,
                    groupedTrends: a,
                    linkColor: Xe,
                    promotedContent: u,
                    promotedTrendDescription: d,
                    publisher: p,
                    publisherTitleColor: Xe,
                    richContext: v,
                    shouldTruncateTitle: !0,
                    supportingText: g,
                    textColor: Xe,
                    timeString: h,
                    title: C,
                    titleFontSize: b,
                    titleWeight: 'heavy',
                  }),
                ),
              ),
              null != r && r.length
                ? m.a.createElement(
                    R.a,
                    { style: Ke.menuContainer },
                    m.a.createElement(A.a, { feedbackItems: r, isDisplayedOnMedia: !0 }),
                  )
                : null,
            )
          })
        },
        Ke = X.a.create(function (e) {
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
        Ue = Se(m.a.memo(Je)),
        qe = n('cFuS'),
        Ye = ['analytics', 'createLocalApiErrorHandler', 'logTrend', 'promotedMetadata'],
        Qe = function (e) {
          var t = e.analytics,
            n = e.createLocalApiErrorHandler,
            r = e.logTrend,
            a = e.promotedMetadata,
            o = u()(e, Ye),
            i = m.a.useCallback(
              function (e) {
                a &&
                  a.promotedTrendId &&
                  r({ promoted_trend_id: a.promotedTrendId, impression_id: a.impressionId, event: e }).catch(n())
              },
              [a, r, n],
            ),
            l = m.a.useCallback(
              function () {
                t.scribeAction('click'), i(qe.d.SPOTLIGHT_CLICK)
              },
              [t, i],
            ),
            s = m.a.useCallback(
              function () {
                t.scribeAction('impression'), i(qe.d.SPOTLIGHT_IMPRESSION)
              },
              [t, i],
            )
          switch (e.displayType) {
            case p.a.CellWithProminentSocialContext:
            case p.a.Cell:
              return m.a.createElement(ge, c()({}, o, { onClick: l, onImpression: s }))
            case p.a.Hero:
              return m.a.createElement(Ue, c()({}, o, { onClick: l, onImpression: s }))
            default:
              return null
          }
        },
        Ze = w(m.a.memo(Qe)),
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
  },
])
//# sourceMappingURL=WIPED
