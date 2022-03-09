;(window.webpackJsonp = window.webpackJsonp || []).push([
  [213],
  {
    RoyM: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        i = Object(o.a)({
          loader: function () {
            return n.e(177).then(n.bind(null, 'ACNv'))
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
        v = n.n(p),
        f = n('2VqO'),
        h = n.n(f),
        g = n('KEM+'),
        C = n.n(g),
        b = (n('2G9S'), n('ERkP')),
        y = n.n(b),
        E = n('nT9l'),
        x = n('3XMw'),
        S = n.n(x),
        w = 'image',
        k = n('TIdA'),
        T = n('a6qo'),
        I = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        P = S.a.f93bb3ee,
        M = (function (e) {
          v()(n, e)
          var t = h()(n)
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
                  s = i()(o, I)
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(
                    k.a,
                    a()({}, s, { accessibilityLabel: c, onVariantSelection: n, previewMode: r, testID: w }),
                  ),
                  l ? y.a.createElement(T.a, { align: 'left', altLabel: c }) : null,
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
                  return y.a.createElement(E.a, {
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
        })(y.a.Component)
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
          return i ? a.a.createElement(o.b, { color: r, numberOfLines: 2, size: 'subtext2', style: v.root }, i) : null
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
            { color: t, link: e.link, size: 'subtext2', style: n && v.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        v = l.a.create(function (e) {
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
        v = n('x5Pi'),
        f = n('tI3i'),
        h = n.n(f),
        g = n('6rlp'),
        C = n('caTy'),
        b = n('Zejx'),
        y = n('G6rE'),
        E = n('rxPX'),
        x = n('0KEI'),
        S = function (e, t) {
          return t.entry.content
        },
        w = function (e, t) {
          var n = S(0, t),
            r = n.socialContext && n.socialContext.topicContext && n.socialContext.topicContext.topicId
          return r ? b.a.select(e, r) : void 0
        },
        k = function (e, t) {
          var n = S(0, t).publisherId
          return n ? y.e.select(e, n) : void 0
        },
        T = Object(E.a)()
          .propsFromState(function () {
            return { eventSummary: S, publisher: k, topic: w }
          })
          .adjustStateProps(function (e) {
            var t = e.eventSummary,
              n = e.publisher,
              r = e.topic,
              a = t.displayType,
              o = t.groupedTrends,
              i = t.promotedMetadata,
              c = t.richContext,
              l = Object(C.b)(t.url)
            h()(l, 'link cannot be undefined in EventSummaryHero')
            var s = Object(v.d)({
                isCellWithProminentSocialContext: a === p.a.CellWithProminentSocialContext,
                socialContext: t.socialContext,
                topic: r,
              }),
              u = (o || []).map(function (e) {
                return { name: e.name, link: Object(C.b)(e.url) }
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
              logTrend: g.c,
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('URT_EVENT_SUMMARY'),
            }
          })
          .withAnalytics(),
        I = (n('hBvt'), n('xZmF')),
        P = n('wtjx'),
        M = n('P1r1'),
        _ = function (e, t) {
          return t.entry.content
        },
        O = function (e, t) {
          var n = _(0, t),
            r = n.socialContext && n.socialContext.topicContext && n.socialContext.topicContext.topicId
          return r ? b.a.select(e, r) : void 0
        },
        F = function (e, t) {
          return t.entry.content.displayType === p.a.CellWithProminentSocialContext
        },
        L = Object(E.a)()
          .propsFromState(function () {
            return { dataSaverMode: M.j, eventSummary: _, hasProminentSocialContext: F, topic: O }
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
        A = n('RoyM'),
        j = (n('KqXw'), n('WNMA'), n('MvUL'), n('0mK8')),
        R = n('rcen'),
        D = n('MWbm'),
        H = n('pjBI'),
        z = n('t62R'),
        V = n('tg+X'),
        W = n('e5HP'),
        B = n('jV+4'),
        N = n('Nxr7'),
        X = n('Wms4'),
        G = n('rHpw'),
        q = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        J = function (e) {
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
            v = e.style,
            f = e.supportingText,
            h = e.textColor,
            g = void 0 === h ? 'gray700' : h,
            C = e.timeString,
            b = e.title,
            y = e.titleFontSize,
            E = void 0 === y ? 'body' : y,
            x = e.titleWeight,
            S = void 0 === x ? 'bold' : x,
            w = b.replace('#', '').charAt(0).match(q) ? 'rtl' : 'ltr',
            k = r ? void 0 : Q.title
          return m.a.createElement(
            D.a,
            { style: v },
            r
              ? null
              : m.a.createElement(
                  H.a,
                  { color: g, style: Q.aboveTitle },
                  f ? m.a.createElement(z.b, { color: g, numberOfLines: 1, size: 'subtext2' }, f) : null,
                  c ? m.a.createElement(j.a, { author: c, color: s, size: 'subtext2' }) : null,
                  t || C ? Y(C, t, g) : null,
                ),
            m.a.createElement(
              z.b,
              { color: s, dir: w, numberOfLines: p ? 3 : void 0, size: E, style: k, weight: S, withHashflags: !0 },
              b,
            ),
            m.a.createElement(V.a, { groupedTrends: n, linkColor: a, textColor: g }),
            r
              ? m.a.createElement(
                  D.a,
                  { style: Q.belowTitle },
                  d
                    ? U(d)
                    : (t || C) && c
                    ? K({ badge: t, publisher: c, textColor: g, timeString: C }) || Y(C, t, g)
                    : null,
                )
              : null,
            o && o.advertiser
              ? m.a.createElement(
                  m.a.Fragment,
                  null,
                  m.a.createElement(z.b, { color: g }, i),
                  m.a.createElement(W.a, { color: 'white', promotedContent: o, style: Q.promotedIndicator }),
                )
              : null,
            u
              ? m.a.createElement(R.a, { color: g, entities: u.entities, rtl: u.rtl, size: 'subtext2', text: u.text })
              : null,
          )
        },
        K = function (e) {
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
          return m.a.createElement(H.a, { style: Q.publisherRow }, o, Y(a, t, r))
        },
        U = function (e) {
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
        Y = function (e, t, n) {
          return t && t.text
            ? m.a.createElement(X.a, { type: 'live' }, t.text)
            : e
            ? m.a.createElement(
                D.a,
                { style: Q.timestamp },
                m.a.createElement(z.b, { color: n, numberOfLines: 1, size: 'subtext2' }, e),
              )
            : null
        },
        Q = G.a.create(function (e) {
          return {
            aboveTitle: { alignItems: 'center', flexDirection: 'row' },
            belowTitle: { marginTop: e.spaces.space4 },
            promotedIndicator: { marginTop: e.spaces.space12 },
            publisherRow: { alignItems: 'center' },
            timestamp: { maxWidth: '50%' },
            title: { marginVertical: e.spaces.space2 },
          }
        }),
        Z = m.a.memo(J),
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
            v = e.richContext,
            f = e.saveAsRecentSearch,
            h = e.scoreEvent,
            g = e.shouldStoreTypeaheadItem,
            C = e.socialContext,
            b = e.supportingText,
            y = e.timeString,
            E = e.title,
            x = e.topic
          m.a.useEffect(function () {
            d && d()
          }, [])
          var S = m.a.useCallback(
              function () {
                u(),
                  f &&
                    g &&
                    g(oe.a.ItemType.EVENT) &&
                    f({
                      event: {
                        id: i,
                        image: c || { url: '', height: 0, width: 0 },
                        supportText: b,
                        title: E,
                        type: re.a.Event,
                      },
                    })
              },
              [i, c, u, f, g, b, E],
            ),
            w = m.a.useMemo(
              function () {
                return null != r && r.length ? m.a.createElement(A.a, { feedbackItems: r }) : null
              },
              [r],
            )
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              ce.a,
              { link: e.withAnchorless(s), onClick: S, style: ve.rootLink, withDarkerInteractiveBackground: l },
              o && C
                ? m.a.createElement(
                    le.a,
                    { rightControl: w, style: ve.socialContextRow },
                    m.a.createElement(pe, { socialContext: C, topic: x }),
                  )
                : null,
              m.a.createElement(
                D.a,
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
                  title: E,
                }),
                m.a.createElement(I.a, {
                  dataSaverMode: n,
                  icon: 'news',
                  image: c,
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
            c = i && Object(ne.c)(i),
            l = m.a.useMemo(
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
            link: a ? Object(C.b)(a) : void 0,
            rightControl: c ? l : void 0,
            text: o,
            topicData: n && i ? Object(te.a)(i) : void 0,
            weight: 'bold',
            withLeftPadding: !1,
          })
        },
        pe = m.a.memo(me),
        ve = G.a.create(function (e) {
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
        fe = Object(ue.a)(L(m.a.memo(de))),
        he = (n('hBpG'), n('7x/C'), n('29/U')),
        ge = n('Fg8X'),
        Ce = n('XOJV'),
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
          return ge.a.select(e, o)
        },
        Ee = function (e, t) {
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
          return o ? Ce.a.select(e, o) : void 0
        },
        xe = function (e, t) {
          var n,
            r = null === (n = t.entry.content.promotedMetadata) || void 0 === n ? void 0 : n.advertiserId
          return r ? y.e.select(e, r) : void 0
        },
        Se = function (e) {
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
        we = Object(E.a)()
          .propsFromState(function () {
            return { advertiser: xe, eventSummary: be, moment: ye, tweet: Ee }
          })
          .adjustStateProps(function (e) {
            var t = e.advertiser,
              n = e.eventSummary,
              r = e.moment,
              a = e.tweet,
              o = n.promotedMetadata
            return {
              coverMediaFromTweet: Se({ tweet: a, eventSummary: n }),
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
        Te = n.n(ke),
        Ie = n('Y9Ll'),
        Pe = n.n(Ie),
        Me = n('5Yy7'),
        _e = n.n(Me),
        Oe = n('2VqO'),
        Fe = n.n(Oe),
        Le = (n('2G9S'), n('prG5')),
        Ae = n('Modb'),
        je = n('lklz'),
        Re = n('9Xij'),
        De = n('XrEN'),
        He = n('3dad'),
        ze = n('A91F'),
        Ve = { red: 0, green: 0, blue: 0 },
        We = (function (e) {
          _e()(n, e)
          var t = Fe()(n)
          function n() {
            return Te()(this, n), t.apply(this, arguments)
          }
          return (
            Pe()(n, [
              {
                key: 'render',
                value: function () {
                  var e = G.a.theme.aspectRatios.landscape
                  return m.a.createElement(
                    Re.a,
                    { ratio: e },
                    m.a.createElement(
                      D.a,
                      { style: [Be.maxHeightWidth, this._getBackgroundColorStyle()] },
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
                    var o = De.a.extractVideoProps(je.b.forTweet(a), t)
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
                      c = He.a.getOriginalImage(t)
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
                        aspectMode: ze.a.exact(G.a.theme.aspectRatios.landscape),
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
                  return e.manualCrops || (t && He.a.getCropCandidates(t))
                },
              },
              {
                key: '_getDominantColor',
                value: function () {
                  var e = this.props.coverMediaFromTweet
                  return e && He.a.getBackgroundColor(e)
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        Be = G.a.create(function (e) {
          return { maxHeightWidth: { height: '100%', width: '100%' } }
        }),
        Ne = 'eventHero',
        Xe = n('cm6r'),
        Ge = 'white',
        qe = function (e) {
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
            v = e.richContext,
            f = e.supportingText,
            h = e.timeString,
            g = e.title,
            C = e.tweetId
          m.a.useEffect(function () {
            s && s()
          }, [])
          var b = g.length > 80 ? 'headline1' : 'title4'
          return m.a.createElement(ie.a.Consumer, null, function (e) {
            return m.a.createElement(
              m.a.Fragment,
              null,
              m.a.createElement(
                Xe.a,
                { link: e.withAnchorless(i), onClick: l, testID: Ne },
                m.a.createElement(We, {
                  coverMediaFromTweet: n,
                  image: o,
                  manualCrops: c,
                  promotedContent: u,
                  tweetId: C,
                }),
                m.a.createElement(
                  D.a,
                  { style: [G.a.absoluteFill, Je.details] },
                  m.a.createElement(Z, {
                    badge: t,
                    groupedTrends: a,
                    linkColor: Ge,
                    promotedContent: u,
                    promotedTrendDescription: d,
                    publisher: p,
                    publisherTitleColor: Ge,
                    richContext: v,
                    shouldTruncateTitle: !0,
                    supportingText: f,
                    textColor: Ge,
                    timeString: h,
                    title: g,
                    titleFontSize: b,
                    titleWeight: 'heavy',
                  }),
                ),
              ),
              null != r && r.length
                ? m.a.createElement(
                    D.a,
                    { style: Je.menuContainer },
                    m.a.createElement(A.a, { feedbackItems: r, isDisplayedOnMedia: !0 }),
                  )
                : null,
            )
          })
        },
        Je = G.a.create(function (e) {
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
        Ke = we(m.a.memo(qe)),
        Ue = n('cFuS'),
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
            c = m.a.useCallback(
              function () {
                t.scribeAction('click'), i(Ue.d.SPOTLIGHT_CLICK)
              },
              [t, i],
            ),
            s = m.a.useCallback(
              function () {
                t.scribeAction('impression'), i(Ue.d.SPOTLIGHT_IMPRESSION)
              },
              [t, i],
            )
          switch (e.displayType) {
            case p.a.CellWithProminentSocialContext:
            case p.a.Cell:
              return m.a.createElement(fe, l()({}, o, { onClick: c, onImpression: s }))
            case p.a.Hero:
              return m.a.createElement(Ke, l()({}, o, { onClick: c, onImpression: s }))
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
        return v
      }),
        n.d(t, 'f', function () {
          return f
        }),
        n.d(t, 'e', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'b', function () {
          return x
        }),
        n.d(t, 'a', function () {
          return w
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
      var v = function (e) {
          return e.recentSearches.recentSearches
        },
        f = function (e) {
          return v(e)[0] || null
        },
        h = function (e) {
          return e.recentSearches.fetched
        },
        g = 'rweb/recentSearches/INIT_FROM_CACHE',
        C = function (e) {
          return { type: g, payload: e }
        },
        b = 'rweb/recentSearches/REMOVE_QUERY',
        y = function (e) {
          return function (t, n, r) {
            r.userPersistence
            t({ payload: e, type: b })
            var a = n().recentSearches
            return Object(l.m)(n()) ? t(d(a.recentSearches)) : Promise.resolve()
          }
        },
        E = 'rweb/recentSearches/CLEAR_ALL',
        x = function () {
          return function (e, t, n) {
            n.userPersistence
            e({ type: E })
            var r = t().recentSearches
            return Object(l.m)(t()) ? e(d(r.recentSearches)) : Promise.resolve()
          }
        },
        S = 'rweb/recentSearches/ADD_QUERY',
        w = function (e) {
          return function (t, n, r) {
            r.userPersistence
            t({ payload: e, type: S })
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
                          e(C(t))
                        })
                        .catch(function () {
                          e(C())
                        })
                    : (e(C()), Promise.resolve())
                })
          }
        }
      c.a.register(
        a()({}, s, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case S:
              var n = t.payload,
                r = n ? m(n, e.recentSearches) : []
              return r.length > 49 && r.splice(49, 1), n && r.unshift(n), i()(i()({}, e), {}, { recentSearches: r })
            case b:
              var a = t.payload,
                o = a ? m(a, e.recentSearches) : []
              return i()(i()({}, e), {}, { recentSearches: o })
            case E:
              return { fetched: !0, recentSearches: [] }
            case g:
              return i()(i()(i()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
  },
])
//# sourceMappingURL=WIPED
