;(window.webpackJsonp = window.webpackJsonp || []).push([
  [205],
  {
    '3fah': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = (r('z84I'), r('ho0z'), r('ezF+')),
        i = r('6rlp'),
        c = r('ERkP'),
        l = r.n(c),
        s = r('wtjx'),
        u = r('VPAj'),
        d = r('0KEI'),
        p = r('RoyM'),
        m = r('k+3s'),
        f = r('x5Pi'),
        v = r('Fg8X'),
        g = r('caTy'),
        h = r('cFuS'),
        y = r('zh9S'),
        b = r('Rp9C'),
        C = r('P1r1'),
        x = r('X04g'),
        E = r('Zejx'),
        w = r('XOJV'),
        S = r('G6rE')
      function T(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : T(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      t.a = function (e) {
        var t = e.component,
          r = e.errorContext,
          n = e.getDisplayTypeSpecificProps,
          a = e.shouldStoreTypeaheadItem
        return o.g({
          isFocusable: Object(u.a)(!0),
          component: t,
          bindActions: function (e) {
            e.module
            return {
              logTrend: i.c,
              saveAsRecentSearch: s.a,
              scribe: y.c,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)(r),
            }
          },
          selectData: function (e) {
            var t,
              r,
              n,
              a,
              o,
              i,
              c = e.entry.content,
              l =
                null === (t = c.media) ||
                void 0 === t ||
                null === (r = t.mediaEntity) ||
                void 0 === r ||
                null === (n = r.tweetMedia) ||
                void 0 === n
                  ? void 0
                  : n.tweetId,
              s =
                null === (a = c.media) ||
                void 0 === a ||
                null === (o = a.mediaEntity) ||
                void 0 === o ||
                null === (i = o.tweetMedia) ||
                void 0 === i
                  ? void 0
                  : i.momentId,
              u = c.socialContext && c.socialContext.topicContext && c.socialContext.topicContext.topicId
            return {
              advertiser: function (e) {
                return c.promotedMetadata ? S.e.select(e, c.promotedMetadata.advertiserId) : void 0
              },
              dataSaverMode: C.k,
              publisher: function (e) {
                return c.publisherId ? S.e.select(e, c.publisherId) : void 0
              },
              tweet: function (e) {
                return l ? w.a.select(e, l) : void 0
              },
              moment: function (e) {
                return v.a.select(e, s)
              },
              topic: function (e) {
                return u ? E.a.select(e, u) : void 0
              },
            }
          },
          createProps: function (e) {
            var t = e.actions,
              r = t.createLocalApiErrorHandler,
              o = t.logTrend,
              i = t.saveAsRecentSearch,
              c = t.scribe,
              s = e.data,
              u = s.advertiser,
              d = s.dataSaverMode,
              v = s.moment,
              y = s.publisher,
              b = s.topic,
              C = s.tweet,
              x = e.entry,
              E = e.feedbackItems,
              w = e.scribeData,
              S = e.scribeNamespace,
              T = x.content,
              I = T.groupedTrends,
              k = T.promotedMetadata,
              P = T.richContext,
              M = T.url && Object(g.b)(T.url),
              j = T.displayType === m.a.CellWithProminentSocialContext,
              R = Object(f.d)({ isCellWithProminentSocialContext: j, socialContext: T.socialContext, topic: b }),
              _ = (I || []).map(function (e) {
                return { name: e.name, link: Object(g.b)(e.url) }
              })
            return O(
              O(
                {},
                n({
                  eventSummary: T,
                  tweet: C,
                  moment: v,
                  scribe: c,
                  scribeNamespace: S,
                  entry: x,
                  dataSaverMode: d,
                  saveAsRecentSearch: i,
                  shouldStoreTypeaheadItem: a,
                }),
              ),
              {},
              {
                badge: T.badge,
                groupedTrends: _,
                promotedContent: k
                  ? {
                      advertiser: { id_str: k.advertiserId },
                      advertiser_name: u ? u.name : null,
                      impression_id: k.impressionId,
                      disclosure_type: 'NoDisclosure',
                    }
                  : void 0,
                promotedTrendDescription: k ? k.promotedTrendDescription : void 0,
                publisher: y,
                socialContext: R,
                supportingText: T.supportingText,
                timeString: T.timeString,
                link: M,
                curationMenu: l.a.createElement(p.a, {
                  feedbackItems: E,
                  isDisplayedOnMedia: !('Hero' !== x.content.displayType || 'eventSummary' !== x.type),
                }),
                onClick: function () {
                  c(O(O({}, S), {}, { action: 'click' }), w),
                    k &&
                      k.promotedTrendId &&
                      o({
                        promoted_trend_id: k.promotedTrendId,
                        impression_id: k.impressionId,
                        event: h.d.SPOTLIGHT_CLICK,
                      }).catch(r())
                },
                title: T.title,
                topic: b,
                richContext: P,
              },
            )
          },
          getScribeDataItem: function (e) {
            return (function (e) {
              var t = e.content.promotedMetadata,
                r = e.content.id,
                n = O(
                  { item_type: x.a.ItemType.EVENT, event_details: { event_id: r } },
                  b.a.getAllSurfaceDetails(e.itemMetadata.clientEventInfo),
                )
              return t && ((n.disclosure_type = t.disclosureType), (n.promoted_id = t.impressionId)), n
            })(e)
          },
          onImpression: function (e) {
            var t = e.actions,
              r = t.createLocalApiErrorHandler,
              n = t.logTrend,
              a = t.scribe,
              o = e.entry,
              i = e.scribeData,
              c = e.scribeNamespace,
              l = o.content.promotedMetadata
            a(O(O({}, c), {}, { action: 'impression' }), i),
              l &&
                l.promotedTrendId &&
                n({
                  promoted_trend_id: l.promotedTrendId,
                  impression_id: l.impressionId,
                  event: h.d.SPOTLIGHT_IMPRESSION,
                }).catch(r())
          },
        })
      }
    },
    '8qIq': function (e, t, r) {
      'use strict'
      r.r(t)
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('3fah'),
        i = (r('hBvt'), r('ERkP')),
        c = r.n(i),
        l = r('xZmF'),
        s = r('rH47'),
        u = r('PbbS'),
        d = r('LWCC'),
        p = r('9B+1'),
        m = r('8bWS'),
        f = r('caTy'),
        v = r('3IPs'),
        g = r('qbku'),
        h = r('X04g'),
        y = r('MWbm'),
        b = r('hxu0'),
        C = r('PbQQ'),
        x = r('htQn'),
        E = r('5mJL'),
        w = r('21zW'),
        S = r('rHpw'),
        T = function (e) {
          var t = e.socialContext,
            r = e.topic,
            n = t.contextType,
            a = t.landingUrl,
            o = t.text,
            i = t.topicContext,
            l = i && Object(m.c)(i),
            s =
              r &&
              c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(w.a, { style: O.topicMiddot }),
                c.a.createElement(d.a, {
                  isTransparent: !0,
                  size: 'smallCompact',
                  textMode: u.a.FollowTopic,
                  topic: r,
                }),
              )
          return c.a.createElement(g.a, {
            contextType: n,
            link: a ? Object(f.b)(a) : void 0,
            rightControl: l ? s : void 0,
            text: o,
            topicData: r && i ? Object(p.a)(i) : void 0,
            weight: 'bold',
            withLeftPadding: !1,
          })
        },
        O = S.a.create(function (e) {
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
        I = Object(b.a)(function (e) {
          var t = e.badge,
            r = e.curationMenu,
            n = e.dataSaverMode,
            a = e.groupedTrends,
            o = e.hasProminentSocialContext,
            i = e.id,
            u = e.image,
            d = e.isInSidebar,
            p = e.link,
            m = e.onClick,
            f = e.publisher,
            g = e.richContext,
            b = e.saveAsRecentSearch,
            w = e.scoreEvent,
            S = e.shouldStoreTypeaheadItem,
            I = e.socialContext,
            k = e.supportingText,
            P = e.timeString,
            M = e.title,
            j = e.topic,
            R = function () {
              m(),
                b &&
                  S &&
                  S(h.a.ItemType.EVENT) &&
                  b({
                    event: {
                      id: i,
                      image: u || { url: '', height: 0, width: 0 },
                      supportText: k,
                      title: M,
                      type: v.a.Event,
                    },
                  })
            }
          return c.a.createElement(C.a.Consumer, null, function (e) {
            return c.a.createElement(
              x.a,
              { link: e.withAnchorless(p), onClick: R, style: O.rootLink, withDarkerInteractiveBackground: d },
              o && I
                ? c.a.createElement(
                    E.a,
                    { rightControl: r || null, style: O.socialContextRow },
                    T({ socialContext: I, topic: j }),
                  )
                : null,
              c.a.createElement(
                y.a,
                { style: O.row },
                c.a.createElement(s.a, {
                  badge: t,
                  groupedTrends: a,
                  hasProminentSocialContext: o,
                  publisher: f,
                  richContext: g,
                  scoreEvent: w,
                  style: O.details,
                  supportingText: k,
                  timeString: P,
                  title: M,
                }),
                c.a.createElement(l.a, {
                  dataSaverMode: n,
                  icon: 'news',
                  image: u,
                  isCellWithProminentSocialContext: o,
                  scoreEvent: w,
                  type: o ? 'fixed' : void 0,
                }),
              ),
            )
          })
        })
      function k(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? k(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var M = function (e) {
          return {
            id: e.eventSummary.id,
            image: e.eventSummary.image,
            dataSaverMode: e.dataSaverMode,
            saveAsRecentSearch: e.saveAsRecentSearch,
            shouldStoreTypeaheadItem: e.shouldStoreTypeaheadItem,
          }
        },
        j = function (e) {
          var t = e.eventSummary.scoreEvent || {},
            r = t.category,
            n = t.eventState,
            a = t.gameClock,
            o = t.gameClockPeriod,
            i = t.participants,
            c = t.startTimeMillis,
            l = t.winnerId
          return P(
            P({}, M(e)),
            {},
            {
              hasProminentSocialContext: !0,
              scoreEvent: e.eventSummary.scoreEvent
                ? {
                    category: r,
                    eventState: n,
                    gameClock: a,
                    gameClockPeriod: o,
                    startTimeMillis: c,
                    participants: i,
                    winnerId: l,
                  }
                : void 0,
            },
          )
        }
      t.default = function (e) {
        var t = e.errorContext,
          r = e.hasProminentSocialContext,
          n = void 0 !== r && r,
          a = e.shouldStoreTypeaheadItem,
          i = M
        return (
          n && (i = j),
          Object(o.a)({ component: I, shouldStoreTypeaheadItem: a, getDisplayTypeSpecificProps: i, errorContext: t })
        )
      }
    },
    RoyM: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = r.n(n),
        o = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('zb92')),
        i = Object(o.a)({
          loader: function () {
            return r.e(169).then(r.bind(null, 'ACNv'))
          },
        }),
        c = r('4bW+'),
        l = r('IG7M'),
        s = r('rHpw'),
        u = r('Irs7'),
        d = s.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(u.a)(function (e) {
        var t = e.analytics,
          r = e.feedbackItems,
          n = e.isDisplayedOnMedia
        if (r && r.length > 0) {
          return a.a.createElement(l.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return a.a.createElement(i, { actionItems: r, onClose: e })
            },
            style: d.curationControl,
            testID: c.a.caret,
            withDarkBackground: n,
          })
        }
        return null
      })
    },
    hxu0: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        a = r.n(n),
        o = r('ERkP'),
        i = r.n(o),
        c = r('vqbU')
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(c.a.Consumer, null, function (r) {
            return i.a.createElement(e, a()({}, t, { isInSidebar: r }))
          })
        }
      }
    },
    'm5t/': function (e, t, r) {
      'use strict'
      r.r(t)
      r('hBpG')
      var n = r('3fah'),
        a = (r('OZaJ'), r('VrFO')),
        o = r.n(a),
        i = r('Y9Ll'),
        c = r.n(i),
        l = r('5Yy7'),
        s = r.n(l),
        u = r('N+ot'),
        d = r.n(u),
        p = r('AuHH'),
        m = r.n(p),
        f = (r('hBvt'), r('ERkP')),
        v = r.n(f),
        g = r('rH47'),
        h = r('97Jx'),
        y = r.n(h),
        b = (r('2G9S'), r('prG5')),
        C = r('Modb'),
        x = r('lklz'),
        E = r('MWbm'),
        w = r('rHpw'),
        S = r('9Xij'),
        T = r('XrEN'),
        O = r('3dad'),
        I = r('A91F')
      function k(e) {
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var P = { red: 0, green: 0, blue: 0 },
        M = (function (e) {
          s()(r, e)
          var t = k(r)
          function r() {
            return o()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = w.a.theme.aspectRatios.landscape
                  return v.a.createElement(
                    S.a,
                    { ratio: e },
                    v.a.createElement(
                      E.a,
                      { style: [j.maxHeightWidth, this._getBackgroundColorStyle()] },
                      this._renderCover(),
                    ),
                    v.a.createElement(E.a, { style: [w.a.absoluteFill, this._getGradientColorStyle()] }),
                  )
                },
              },
              {
                key: '_renderCover',
                value: function () {
                  var e = this.props,
                    t = e.coverMediaFromTweet,
                    r = e.image,
                    n = e.promotedContent,
                    a = e.tweetId
                  if (a && t && 'photo' !== t.type) {
                    var o = T.a.extractVideoProps(x.b.forTweet(a), t)
                    return v.a.createElement(
                      C.a,
                      y()({}, o, {
                        aspectRatio: w.a.theme.aspectRatios.landscape,
                        displayOptions: { objectFitVideo: 'cover', hideLeftBadges: !0, hidePosterImage: !0 },
                        forceLoop: !0,
                        hideDataSaverAcceptOverlay: !0,
                        hidePreviewPlayButton: !0,
                        promotedContent: n,
                        showControls: !1,
                      }),
                    )
                  }
                  if (t) {
                    var i = t.ext_alt_text || '',
                      c = O.a.getOriginalImage(t)
                    return this._renderCoverImage(c, i)
                  }
                  return this._renderCoverImage(r)
                },
              },
              {
                key: '_renderCoverImage',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
                  return e
                    ? v.a.createElement(b.a, {
                        accessibilityLabel: t,
                        aspectMode: I.a.exact(w.a.theme.aspectRatios.landscape),
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
                      : w.a.theme.colors.primary,
                  }
                },
              },
              {
                key: '_getGradientColorStyle',
                value: function () {
                  var e = P,
                    t = 'rgba('.concat(e.red, ',').concat(e.green, ',').concat(e.blue, ', 0.70)'),
                    r = 'rgba('.concat(e.red, ',').concat(e.green, ',').concat(e.blue, ', 0.80)')
                  return {
                    backgroundImage: 'linear-gradient(transparent 0%, transparent 25%, '
                      .concat(t, ' 75%, ')
                      .concat(r, ' 100%)'),
                  }
                },
              },
              {
                key: '_getCropCandidates',
                value: function () {
                  var e = this.props,
                    t = e.coverMediaFromTweet
                  return e.manualCrops || (t && O.a.getCropCandidates(t))
                },
              },
              {
                key: '_getDominantColor',
                value: function () {
                  var e = this.props.coverMediaFromTweet
                  return e && O.a.getBackgroundColor(e)
                },
              },
            ]),
            r
          )
        })(v.a.Component),
        j = w.a.create(function (e) {
          return { maxHeightWidth: { height: '100%', width: '100%' } }
        }),
        R = 'eventHero',
        _ = r('PbQQ'),
        D = r('cm6r')
      function F(e) {
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var L = 'white',
        A = (function (e) {
          s()(r, e)
          var t = F(r)
          function r() {
            return o()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.onImpression
                  e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.badge,
                    r = e.coverMediaFromTweet,
                    n = e.curationMenu,
                    a = e.groupedTrends,
                    o = e.image,
                    i = e.link,
                    c = e.manualCrops,
                    l = e.onClick,
                    s = e.promotedContent,
                    u = e.promotedTrendDescription,
                    d = e.publisher,
                    p = e.richContext,
                    m = e.supportingText,
                    f = e.timeString,
                    h = e.title,
                    y = e.tweetId,
                    b = h.length > 80 ? 'headline1' : 'title4'
                  return v.a.createElement(_.a.Consumer, null, function (e) {
                    return v.a.createElement(
                      v.a.Fragment,
                      null,
                      v.a.createElement(
                        D.a,
                        { link: e.withAnchorless(i), onClick: l, testID: R },
                        v.a.createElement(M, {
                          coverMediaFromTweet: r,
                          image: o,
                          manualCrops: c,
                          promotedContent: s,
                          tweetId: y,
                        }),
                        v.a.createElement(
                          E.a,
                          { style: [w.a.absoluteFill, H.details] },
                          v.a.createElement(g.a, {
                            badge: t,
                            groupedTrends: a,
                            linkColor: L,
                            promotedContent: s,
                            promotedTrendDescription: u,
                            publisher: d,
                            publisherTitleColor: L,
                            richContext: p,
                            shouldTruncateTitle: !0,
                            supportingText: m,
                            textColor: L,
                            timeString: f,
                            title: h,
                            titleFontSize: b,
                            titleWeight: 'heavy',
                          }),
                        ),
                      ),
                      n ? v.a.createElement(E.a, { style: H.menuContainer }, n) : null,
                    )
                  })
                },
              },
            ]),
            r
          )
        })(v.a.Component),
        H = w.a.create(function (e) {
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
        z = A,
        B = r('29/U'),
        W = function (e) {
          var t = e.eventSummary,
            r = e.tweet
          if (r) {
            var n,
              a,
              o = null === (n = t.media) || void 0 === n || null === (a = n.mediaKey) || void 0 === a ? void 0 : a.id
            return (
              r.extended_entities &&
              r.extended_entities.media &&
              r.extended_entities.media.find(function (e) {
                return e.id_str === o
              })
            )
          }
        },
        V = function (e) {
          return {
            coverMediaFromTweet: W(e),
            image:
              ((t = e.eventSummary),
              null !== (r = t.media) && void 0 !== r && null !== (n = r.mediaEntity) && void 0 !== n && n.image
                ? t.media.mediaEntity.image
                : t.image),
            manualCrops: Object(B.f)(e.moment),
            tweetId: e.tweet && e.tweet.id_str,
          }
          var t, r, n
        }
      t.default = function (e) {
        var t = e.errorContext
        return Object(n.a)({ component: z, getDisplayTypeSpecificProps: V, errorContext: t })
      }
    },
    prG5: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return j
      })
      r('OZaJ')
      var n = r('97Jx'),
        a = r.n(n),
        o = r('m3Bd'),
        i = r.n(o),
        c = r('VrFO'),
        l = r.n(c),
        s = r('Y9Ll'),
        u = r.n(s),
        d = r('1Pcy'),
        p = r.n(d),
        m = r('5Yy7'),
        f = r.n(m),
        v = r('N+ot'),
        g = r.n(v),
        h = r('AuHH'),
        y = r.n(h),
        b = r('KEM+'),
        C = r.n(b),
        x = (r('2G9S'), r('ERkP')),
        E = r.n(x),
        w = r('nT9l'),
        S = r('3XMw'),
        T = r.n(S),
        O = 'image',
        I = r('TIdA'),
        k = r('a6qo')
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
          var r,
            n = y()(e)
          if (t) {
            var a = y()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return g()(this, r)
        }
      }
      var M = T.a.f93bb3ee,
        j = (function (e) {
          f()(r, e)
          var t = P(r)
          function r() {
            var e
            l()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              C()(p()(e), '_renderContent', function (t) {
                var r = t.resourceSelectionHandler,
                  n = t.useMinimumData,
                  o = e.props,
                  c = o.accessibilityLabel,
                  l = (o.hideAcceptOverlay, o.shouldShowAltLabel),
                  s = i()(o, ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'])
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(
                    I.a,
                    a()({}, s, { accessibilityLabel: c, onVariantSelection: r, previewMode: n, testID: O }),
                  ),
                  l ? E.a.createElement(k.a, { align: 'left', altLabel: c }) : null,
                )
              }),
              e
            )
          }
          return (
            u()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hideAcceptOverlay,
                    r = e.image
                  return E.a.createElement(w.a, {
                    acceptLabel: M,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof r ? r : r.url,
                  })
                },
              },
            ]),
            r
          )
        })(E.a.Component)
    },
    rH47: function (e, t, r) {
      'use strict'
      r('WNMA'), r('KqXw'), r('MvUL'), r('ho0z')
      var n = r('0mK8'),
        a = r('ERkP'),
        o = r.n(a),
        i = r('rcen'),
        c = r('MWbm'),
        l = r('pjBI'),
        s = r('t62R'),
        u = r('tg+X'),
        d = r('e5HP'),
        p = r('jV+4'),
        m = r('Nxr7'),
        f = r('Wms4'),
        v = r('rHpw'),
        g = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        h = function (e) {
          var t = e.badge,
            r = e.publisher,
            n = e.textColor,
            a = e.timeString,
            i = o.a.createElement(p.a, {
              isProtected: r.protected,
              isVerified: r.verified,
              name: r.name,
              nameSize: 'subtext2',
              profileImageUrl: r.profile_image_url_https,
            })
          return o.a.createElement(l.a, { style: C.publisherRow }, i, b(a, t, n))
        },
        y = function (e) {
          var t = e.category,
            r = e.eventState,
            n = e.gameClock,
            a = e.gameClockPeriod,
            i = e.participants,
            c = e.startTimeMillis,
            l = e.winnerId
          return o.a.createElement(m.a, {
            category: t,
            gameClock: n,
            gameClockPeriod: a,
            gameState: r,
            startTimeMillis: c,
            teams: i,
            winnerId: l,
            withCategory: !1,
          })
        },
        b = function (e, t, r) {
          return t && t.text
            ? o.a.createElement(f.a, { type: 'live' }, t.text)
            : e
            ? o.a.createElement(
                c.a,
                { style: C.timestamp },
                o.a.createElement(s.b, { color: r, numberOfLines: 1, size: 'subtext2' }, e),
              )
            : null
        },
        C = v.a.create(function (e) {
          return {
            aboveTitle: { alignItems: 'center', flexDirection: 'row' },
            belowTitle: { marginTop: e.spaces.space4 },
            promotedIndicator: { marginTop: e.spaces.space12 },
            publisherRow: { alignItems: 'center' },
            timestamp: { maxWidth: '50%' },
            title: { marginVertical: e.spaces.space2 },
          }
        })
      t.a = function (e) {
        var t = e.badge,
          r = e.groupedTrends,
          a = e.hasProminentSocialContext,
          p = e.linkColor,
          m = e.promotedContent,
          f = e.promotedTrendDescription,
          v = e.publisher,
          x = e.publisherTitleColor,
          E = void 0 === x ? 'normal' : x,
          w = e.richContext,
          S = e.scoreEvent,
          T = e.shouldTruncateTitle,
          O = e.style,
          I = e.supportingText,
          k = e.textColor,
          P = void 0 === k ? 'gray700' : k,
          M = e.timeString,
          j = e.title,
          R = e.titleFontSize,
          _ = void 0 === R ? 'body' : R,
          D = e.titleWeight,
          F = void 0 === D ? 'bold' : D,
          L = j.replace('#', '').charAt(0).match(g) ? 'rtl' : 'ltr',
          A = a ? void 0 : C.title
        return o.a.createElement(
          c.a,
          { style: O },
          a
            ? null
            : o.a.createElement(
                l.a,
                { color: P, style: C.aboveTitle },
                I ? o.a.createElement(s.b, { color: P, numberOfLines: 1, size: 'subtext2' }, I) : null,
                v ? o.a.createElement(n.a, { author: v, color: E, size: 'subtext2' }) : null,
                t || M ? b(M, t, P) : null,
              ),
          o.a.createElement(
            s.b,
            { color: E, dir: L, numberOfLines: T ? 3 : void 0, size: _, style: A, weight: F, withHashflags: !0 },
            j,
          ),
          o.a.createElement(u.a, { groupedTrends: r, linkColor: p, textColor: P }),
          a
            ? o.a.createElement(
                c.a,
                { style: C.belowTitle },
                S
                  ? y(S)
                  : (t || M) && v
                  ? h({ badge: t, publisher: v, textColor: P, timeString: M }) || b(M, t, P)
                  : null,
              )
            : null,
          m && m.advertiser
            ? o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(s.b, { color: P }, f),
                o.a.createElement(d.a, { color: 'white', promotedContent: m, style: C.promotedIndicator }),
              )
            : null,
          w
            ? o.a.createElement(i.a, { color: P, entities: w.entities, rtl: w.rtl, size: 'subtext2', text: w.text })
            : null,
        )
      }
    },
    'tg+X': function (e, t, r) {
      'use strict'
      r('hBvt'), r('ho0z')
      var n = r('ERkP'),
        a = r.n(n),
        o = r('t62R'),
        i = r('3XMw'),
        c = r.n(i),
        l = r('rHpw'),
        s = function (e) {
          var t = e.groupedTrends,
            r = e.linkColor,
            n = e.textColor,
            i = u(t, r)
          return i ? a.a.createElement(o.b, { color: n, numberOfLines: 2, size: 'subtext2', style: f.root }, i) : null
        }
      s.defaultProps = { textColor: 'gray700' }
      var u = function (e, t) {
          return e.length >= 2 ? p(e, t) : 1 === e.length ? d(e[0], t) : null
        },
        d = function (e, t) {
          return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'fe7c309b' }, m(e, t, !0))
        },
        p = function (e, t) {
          return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'ea753bf4' }, m(e[0], t, !0), m(e[1], t))
        },
        m = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return a.a.createElement(
            o.b,
            { color: t, link: e.link, size: 'subtext2', style: r && f.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        f = l.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = s
    },
  },
])
//# sourceMappingURL=WIPED
