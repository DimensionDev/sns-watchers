;(window.webpackJsonp = window.webpackJsonp || []).push([
  [202],
  {
    '3fah': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = (r('z84I'), r('ho0z'), r('ezF+')),
        i = r('6rlp'),
        c = r('ERkP'),
        l = r('wtjx'),
        s = r('VPAj'),
        u = r('0KEI'),
        d = r('RoyM'),
        p = r('k+3s'),
        m = r('x5Pi'),
        f = r('Fg8X'),
        v = r('caTy'),
        g = r('cFuS'),
        h = r('zh9S'),
        y = r('Rp9C'),
        b = r('P1r1'),
        C = r('X04g'),
        x = r('Zejx'),
        E = r('XOJV'),
        w = r('G6rE')
      function S(e, t) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      t.a = function (e) {
        var t = e.component,
          r = e.errorContext,
          n = e.getDisplayTypeSpecificProps,
          o = e.shouldStoreTypeaheadItem
        return a.g({
          isFocusable: Object(s.a)(!0),
          component: t,
          bindActions: function (e) {
            e.module
            return {
              logTrend: i.c,
              saveAsRecentSearch: l.a,
              scribe: h.c,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(r),
            }
          },
          selectData: function (e) {
            var t,
              r,
              n,
              o,
              a,
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
                null === (o = c.media) ||
                void 0 === o ||
                null === (a = o.mediaEntity) ||
                void 0 === a ||
                null === (i = a.tweetMedia) ||
                void 0 === i
                  ? void 0
                  : i.momentId,
              u = c.socialContext && c.socialContext.topicContext && c.socialContext.topicContext.topicId
            return {
              advertiser: function (e) {
                return c.promotedMetadata ? w.e.select(e, c.promotedMetadata.advertiserId) : void 0
              },
              dataSaverMode: b.k,
              publisher: function (e) {
                return c.publisherId ? w.e.select(e, c.publisherId) : void 0
              },
              tweet: function (e) {
                return l ? E.a.select(e, l) : void 0
              },
              moment: function (e) {
                return f.a.select(e, s)
              },
              topic: function (e) {
                return u ? x.a.select(e, u) : void 0
              },
            }
          },
          createProps: function (e) {
            var t = e.actions,
              r = t.createLocalApiErrorHandler,
              a = t.logTrend,
              i = t.saveAsRecentSearch,
              l = t.scribe,
              s = e.data,
              u = s.advertiser,
              f = s.dataSaverMode,
              h = s.moment,
              y = s.publisher,
              b = s.topic,
              C = s.tweet,
              x = e.entry,
              E = e.feedbackItems,
              w = e.scribeData,
              S = e.scribeNamespace,
              O = x.content,
              I = O.groupedTrends,
              k = O.promotedMetadata,
              P = O.richContext,
              M = O.url && Object(v.b)(O.url),
              j = O.displayType === p.a.CellWithProminentSocialContext,
              R = Object(m.d)({ isCellWithProminentSocialContext: j, socialContext: O.socialContext, topic: b }),
              _ = (I || []).map(function (e) {
                return { name: e.name, link: Object(v.b)(e.url) }
              })
            return T(
              T(
                {},
                n({
                  eventSummary: O,
                  tweet: C,
                  moment: h,
                  scribe: l,
                  scribeNamespace: S,
                  entry: x,
                  dataSaverMode: f,
                  saveAsRecentSearch: i,
                  shouldStoreTypeaheadItem: o,
                }),
              ),
              {},
              {
                badge: O.badge,
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
                supportingText: O.supportingText,
                timeString: O.timeString,
                link: M,
                curationMenu: c.createElement(d.a, {
                  feedbackItems: E,
                  isDisplayedOnMedia: !('Hero' !== x.content.displayType || 'eventSummary' !== x.type),
                }),
                onClick: function () {
                  l(T(T({}, S), {}, { action: 'click' }), w),
                    k &&
                      k.promotedTrendId &&
                      a({
                        promoted_trend_id: k.promotedTrendId,
                        impression_id: k.impressionId,
                        event: g.d.SPOTLIGHT_CLICK,
                      }).catch(r())
                },
                title: O.title,
                topic: b,
                richContext: P,
              },
            )
          },
          getScribeDataItem: function (e) {
            return (function (e) {
              var t = e.content.promotedMetadata,
                r = e.content.id,
                n = T(
                  { item_type: C.a.ItemType.EVENT, event_details: { event_id: r } },
                  y.a.getAllSurfaceDetails(e.itemMetadata.clientEventInfo),
                )
              return t && ((n.disclosure_type = t.disclosureType), (n.promoted_id = t.impressionId)), n
            })(e)
          },
          onImpression: function (e) {
            var t = e.actions,
              r = t.createLocalApiErrorHandler,
              n = t.logTrend,
              o = t.scribe,
              a = e.entry,
              i = e.scribeData,
              c = e.scribeNamespace,
              l = a.content.promotedMetadata
            o(T(T({}, c), {}, { action: 'impression' }), i),
              l &&
                l.promotedTrendId &&
                n({
                  promoted_trend_id: l.promotedTrendId,
                  impression_id: l.impressionId,
                  event: g.d.SPOTLIGHT_IMPRESSION,
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
        o = r.n(n),
        a = r('3fah'),
        i = (r('hBvt'), r('ERkP')),
        c = r('xZmF'),
        l = r('rH47'),
        s = r('PbbS'),
        u = r('LWCC'),
        d = r('9B+1'),
        p = r('8bWS'),
        m = r('caTy'),
        f = r('3IPs'),
        v = r('qbku'),
        g = r('X04g'),
        h = r('MWbm'),
        y = r('hxu0'),
        b = r('PbQQ'),
        C = r('htQn'),
        x = r('5mJL'),
        E = r('21zW'),
        w = r('rHpw'),
        S = function (e) {
          var t = e.socialContext,
            r = e.topic,
            n = t.contextType,
            o = t.landingUrl,
            a = t.text,
            c = t.topicContext,
            l = c && Object(p.c)(c),
            f =
              r &&
              i.createElement(
                i.Fragment,
                null,
                i.createElement(E.a, { style: T.topicMiddot }),
                i.createElement(u.a, { isTransparent: !0, size: 'smallCompact', textMode: s.a.FollowTopic, topic: r }),
              )
          return i.createElement(v.a, {
            contextType: n,
            link: o ? Object(m.b)(o) : void 0,
            rightControl: l ? f : void 0,
            text: a,
            topicData: r && c ? Object(d.a)(c) : void 0,
            weight: 'bold',
            withLeftPadding: !1,
          })
        },
        T = w.a.create(function (e) {
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
        O = Object(y.a)(function (e) {
          var t = e.badge,
            r = e.curationMenu,
            n = e.dataSaverMode,
            o = e.groupedTrends,
            a = e.hasProminentSocialContext,
            s = e.id,
            u = e.image,
            d = e.isInSidebar,
            p = e.link,
            m = e.onClick,
            v = e.publisher,
            y = e.richContext,
            E = e.saveAsRecentSearch,
            w = e.scoreEvent,
            O = e.shouldStoreTypeaheadItem,
            I = e.socialContext,
            k = e.supportingText,
            P = e.timeString,
            M = e.title,
            j = e.topic,
            R = function () {
              m(),
                E &&
                  O &&
                  O(g.a.ItemType.EVENT) &&
                  E({
                    event: {
                      id: s,
                      image: u || { url: '', height: 0, width: 0 },
                      supportText: k,
                      title: M,
                      type: f.a.Event,
                    },
                  })
            }
          return i.createElement(b.a.Consumer, null, function (e) {
            return i.createElement(
              C.a,
              { link: e.withAnchorless(p), onClick: R, style: T.rootLink, withDarkerInteractiveBackground: d },
              a && I
                ? i.createElement(
                    x.a,
                    { rightControl: r || null, style: T.socialContextRow },
                    S({ socialContext: I, topic: j }),
                  )
                : null,
              i.createElement(
                h.a,
                { style: T.row },
                i.createElement(l.a, {
                  badge: t,
                  groupedTrends: o,
                  hasProminentSocialContext: a,
                  publisher: v,
                  richContext: y,
                  scoreEvent: w,
                  style: T.details,
                  supportingText: k,
                  timeString: P,
                  title: M,
                }),
                i.createElement(c.a, {
                  dataSaverMode: n,
                  icon: 'news',
                  image: u,
                  isCellWithProminentSocialContext: a,
                  scoreEvent: w,
                  type: a ? 'fixed' : void 0,
                }),
              ),
            )
          })
        })
      function I(e, t) {
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
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var P = function (e) {
          return {
            id: e.eventSummary.id,
            image: e.eventSummary.image,
            dataSaverMode: e.dataSaverMode,
            saveAsRecentSearch: e.saveAsRecentSearch,
            shouldStoreTypeaheadItem: e.shouldStoreTypeaheadItem,
          }
        },
        M = function (e) {
          var t = e.eventSummary.scoreEvent || {},
            r = t.category,
            n = t.eventState,
            o = t.gameClock,
            a = t.gameClockPeriod,
            i = t.participants,
            c = t.startTimeMillis,
            l = t.winnerId
          return k(
            k({}, P(e)),
            {},
            {
              hasProminentSocialContext: !0,
              scoreEvent: e.eventSummary.scoreEvent
                ? {
                    category: r,
                    eventState: n,
                    gameClock: o,
                    gameClockPeriod: a,
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
          o = e.shouldStoreTypeaheadItem,
          i = P
        return (
          n && (i = M),
          Object(a.a)({ component: O, shouldStoreTypeaheadItem: o, getDisplayTypeSpecificProps: i, errorContext: t })
        )
      }
    },
    RoyM: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        o = (r('JtPf'), r('7x/C'), r('87if'), r('lTEL'), r('kYxP'), r('zb92')),
        a = Object(o.a)({
          loader: function () {
            return r.e(167).then(r.bind(null, 'ACNv'))
          },
        }),
        i = r('4bW+'),
        c = r('IG7M'),
        l = r('rHpw'),
        s = r('Irs7'),
        u = l.a.create(function (e) {
          return { curationControl: { marginStart: e.spaces.space20 } }
        })
      t.a = Object(s.a)(function (e) {
        var t = e.analytics,
          r = e.feedbackItems,
          o = e.isDisplayedOnMedia
        if (r && r.length > 0) {
          return n.createElement(c.a, {
            onClick: function () {
              return t.scribe({ element: 'caret', action: 'click' })
            },
            renderActionMenu: function (e) {
              return n.createElement(a, { actionItems: r, onClose: e })
            },
            style: u.curationControl,
            testID: i.a.caret,
            withDarkBackground: o,
          })
        }
        return null
      })
    },
    hxu0: function (e, t, r) {
      'use strict'
      var n = r('97Jx'),
        o = r.n(n),
        a = r('ERkP'),
        i = r('vqbU')
      t.a = function (e) {
        return function (t) {
          return a.createElement(i.a.Consumer, null, function (r) {
            return a.createElement(e, o()({}, t, { isInSidebar: r }))
          })
        }
      }
    },
    'm5t/': function (e, t, r) {
      'use strict'
      r.r(t)
      r('hBpG')
      var n = r('3fah'),
        o = (r('OZaJ'), r('VrFO')),
        a = r.n(o),
        i = r('Y9Ll'),
        c = r.n(i),
        l = r('5Yy7'),
        s = r.n(l),
        u = r('N+ot'),
        d = r.n(u),
        p = r('AuHH'),
        m = r.n(p),
        f = (r('hBvt'), r('ERkP')),
        v = r('rH47'),
        g = r('97Jx'),
        h = r.n(g),
        y = (r('2G9S'), r('prG5')),
        b = r('Modb'),
        C = r('lklz'),
        x = r('MWbm'),
        E = r('rHpw'),
        w = r('9Xij'),
        S = r('XrEN'),
        T = r('3dad'),
        O = r('A91F')
      function I(e) {
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
            var o = m()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var k = { red: 0, green: 0, blue: 0 },
        P = (function (e) {
          s()(r, e)
          var t = I(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = E.a.theme.aspectRatios.landscape
                  return f.createElement(
                    w.a,
                    { ratio: e },
                    f.createElement(
                      x.a,
                      { style: [M.maxHeightWidth, this._getBackgroundColorStyle()] },
                      this._renderCover(),
                    ),
                    f.createElement(x.a, { style: [E.a.absoluteFill, this._getGradientColorStyle()] }),
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
                    o = e.tweetId
                  if (o && t && 'photo' !== t.type) {
                    var a = S.a.extractVideoProps(C.b.forTweet(o), t)
                    return f.createElement(
                      b.a,
                      h()({}, a, {
                        aspectRatio: E.a.theme.aspectRatios.landscape,
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
                      c = T.a.getOriginalImage(t)
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
                    ? f.createElement(y.a, {
                        accessibilityLabel: t,
                        aspectMode: O.a.exact(E.a.theme.aspectRatios.landscape),
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
                      : E.a.theme.colors.primary,
                  }
                },
              },
              {
                key: '_getGradientColorStyle',
                value: function () {
                  var e = k,
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
                  return e.manualCrops || (t && T.a.getCropCandidates(t))
                },
              },
              {
                key: '_getDominantColor',
                value: function () {
                  var e = this.props.coverMediaFromTweet
                  return e && T.a.getBackgroundColor(e)
                },
              },
            ]),
            r
          )
        })(f.Component),
        M = E.a.create(function (e) {
          return { maxHeightWidth: { height: '100%', width: '100%' } }
        }),
        j = 'eventHero',
        R = r('PbQQ'),
        _ = r('cm6r')
      function D(e) {
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
            var o = m()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return d()(this, r)
        }
      }
      var F = 'white',
        L = (function (e) {
          s()(r, e)
          var t = D(r)
          function r() {
            return a()(this, r), t.apply(this, arguments)
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
                    o = e.groupedTrends,
                    a = e.image,
                    i = e.link,
                    c = e.manualCrops,
                    l = e.onClick,
                    s = e.promotedContent,
                    u = e.promotedTrendDescription,
                    d = e.publisher,
                    p = e.richContext,
                    m = e.supportingText,
                    g = e.timeString,
                    h = e.title,
                    y = e.tweetId,
                    b = h.length > 80 ? 'headline1' : 'title4'
                  return f.createElement(R.a.Consumer, null, function (e) {
                    return f.createElement(
                      f.Fragment,
                      null,
                      f.createElement(
                        _.a,
                        { link: e.withAnchorless(i), onClick: l, testID: j },
                        f.createElement(P, {
                          coverMediaFromTweet: r,
                          image: a,
                          manualCrops: c,
                          promotedContent: s,
                          tweetId: y,
                        }),
                        f.createElement(
                          x.a,
                          { style: [E.a.absoluteFill, A.details] },
                          f.createElement(v.a, {
                            badge: t,
                            groupedTrends: o,
                            linkColor: F,
                            promotedContent: s,
                            promotedTrendDescription: u,
                            publisher: d,
                            publisherTitleColor: F,
                            richContext: p,
                            shouldTruncateTitle: !0,
                            supportingText: m,
                            textColor: F,
                            timeString: g,
                            title: h,
                            titleFontSize: b,
                            titleWeight: 'heavy',
                          }),
                        ),
                      ),
                      n ? f.createElement(x.a, { style: A.menuContainer }, n) : null,
                    )
                  })
                },
              },
            ]),
            r
          )
        })(f.Component),
        A = E.a.create(function (e) {
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
        H = L,
        z = r('29/U'),
        B = function (e) {
          var t = e.eventSummary,
            r = e.tweet
          if (r) {
            var n,
              o,
              a = null === (n = t.media) || void 0 === n || null === (o = n.mediaKey) || void 0 === o ? void 0 : o.id
            return (
              r.extended_entities &&
              r.extended_entities.media &&
              r.extended_entities.media.find(function (e) {
                return e.id_str === a
              })
            )
          }
        },
        W = function (e) {
          return {
            coverMediaFromTweet: B(e),
            image:
              ((t = e.eventSummary),
              null !== (r = t.media) && void 0 !== r && null !== (n = r.mediaEntity) && void 0 !== n && n.image
                ? t.media.mediaEntity.image
                : t.image),
            manualCrops: Object(z.f)(e.moment),
            tweetId: e.tweet && e.tweet.id_str,
          }
          var t, r, n
        }
      t.default = function (e) {
        var t = e.errorContext
        return Object(n.a)({ component: H, getDisplayTypeSpecificProps: W, errorContext: t })
      }
    },
    prG5: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return M
      })
      r('OZaJ')
      var n = r('97Jx'),
        o = r.n(n),
        a = r('m3Bd'),
        i = r.n(a),
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
        E = r('nT9l'),
        w = r('3XMw'),
        S = r.n(w),
        T = 'image',
        O = r('TIdA'),
        I = r('a6qo')
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
            n = y()(e)
          if (t) {
            var o = y()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return g()(this, r)
        }
      }
      var P = S.a.f93bb3ee,
        M = (function (e) {
          f()(r, e)
          var t = k(r)
          function r() {
            var e
            l()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              C()(p()(e), '_renderContent', function (t) {
                var r = t.resourceSelectionHandler,
                  n = t.useMinimumData,
                  a = e.props,
                  c = a.accessibilityLabel,
                  l = (a.hideAcceptOverlay, a.shouldShowAltLabel),
                  s = i()(a, ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'])
                return x.createElement(
                  x.Fragment,
                  null,
                  x.createElement(
                    O.a,
                    o()({}, s, { accessibilityLabel: c, onVariantSelection: r, previewMode: n, testID: T }),
                  ),
                  l ? x.createElement(I.a, { align: 'left', altLabel: c }) : null,
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
                  return x.createElement(E.a, {
                    acceptLabel: P,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof r ? r : r.url,
                  })
                },
              },
            ]),
            r
          )
        })(x.Component)
    },
    rH47: function (e, t, r) {
      'use strict'
      r('WNMA'), r('KqXw'), r('MvUL'), r('ho0z')
      var n = r('0mK8'),
        o = r('ERkP'),
        a = r('rcen'),
        i = r('MWbm'),
        c = r('pjBI'),
        l = r('t62R'),
        s = r('tg+X'),
        u = r('e5HP'),
        d = r('jV+4'),
        p = r('Nxr7'),
        m = r('Wms4'),
        f = r('rHpw'),
        v = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        g = function (e) {
          var t = e.badge,
            r = e.publisher,
            n = e.textColor,
            a = e.timeString,
            i = o.createElement(d.a, {
              isProtected: r.protected,
              isVerified: r.verified,
              name: r.name,
              nameSize: 'subtext2',
              profileImageUrl: r.profile_image_url_https,
            })
          return o.createElement(c.a, { style: b.publisherRow }, i, y(a, t, n))
        },
        h = function (e) {
          var t = e.category,
            r = e.eventState,
            n = e.gameClock,
            a = e.gameClockPeriod,
            i = e.participants,
            c = e.startTimeMillis,
            l = e.winnerId
          return o.createElement(p.a, {
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
        y = function (e, t, r) {
          return t && t.text
            ? o.createElement(m.a, { type: 'live' }, t.text)
            : e
            ? o.createElement(
                i.a,
                { style: b.timestamp },
                o.createElement(l.b, { color: r, numberOfLines: 1, size: 'subtext2' }, e),
              )
            : null
        },
        b = f.a.create(function (e) {
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
          d = e.hasProminentSocialContext,
          p = e.linkColor,
          m = e.promotedContent,
          f = e.promotedTrendDescription,
          C = e.publisher,
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
          L = j.replace('#', '').charAt(0).match(v) ? 'rtl' : 'ltr',
          A = d ? void 0 : b.title
        return o.createElement(
          i.a,
          { style: O },
          d
            ? null
            : o.createElement(
                c.a,
                { color: P, style: b.aboveTitle },
                I ? o.createElement(l.b, { color: P, numberOfLines: 1, size: 'subtext2' }, I) : null,
                C ? o.createElement(n.a, { author: C, color: E, size: 'subtext2' }) : null,
                t || M ? y(M, t, P) : null,
              ),
          o.createElement(
            l.b,
            { color: E, dir: L, numberOfLines: T ? 3 : void 0, size: _, style: A, weight: F, withHashflags: !0 },
            j,
          ),
          o.createElement(s.a, { groupedTrends: r, linkColor: p, textColor: P }),
          d
            ? o.createElement(
                i.a,
                { style: b.belowTitle },
                S
                  ? h(S)
                  : (t || M) && C
                  ? g({ badge: t, publisher: C, textColor: P, timeString: M }) || y(M, t, P)
                  : null,
              )
            : null,
          m && m.advertiser
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(l.b, { color: P }, f),
                o.createElement(u.a, { color: 'white', promotedContent: m, style: b.promotedIndicator }),
              )
            : null,
          w
            ? o.createElement(a.a, { color: P, entities: w.entities, rtl: w.rtl, size: 'subtext2', text: w.text })
            : null,
        )
      }
    },
    'tg+X': function (e, t, r) {
      'use strict'
      r('hBvt'), r('ho0z')
      var n = r('ERkP'),
        o = r('t62R'),
        a = r('3XMw'),
        i = r.n(a),
        c = r('rHpw'),
        l = function (e) {
          var t = e.groupedTrends,
            r = e.linkColor,
            a = e.textColor,
            i = s(t, r)
          return i ? n.createElement(o.b, { color: a, numberOfLines: 2, size: 'subtext2', style: m.root }, i) : null
        }
      l.defaultProps = { textColor: 'gray700' }
      var s = function (e, t) {
          return e.length >= 2 ? d(e, t) : 1 === e.length ? u(e[0], t) : null
        },
        u = function (e, t) {
          return n.createElement(i.a.I18NFormatMessage, { $i18n: 'fe7c309b' }, p(e, t, !0))
        },
        d = function (e, t) {
          return n.createElement(i.a.I18NFormatMessage, { $i18n: 'ea753bf4' }, p(e[0], t, !0), p(e[1], t))
        },
        p = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return n.createElement(
            o.b,
            { color: t, link: e.link, size: 'subtext2', style: r && m.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        m = c.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = l
    },
  },
])
//# sourceMappingURL=WIPED
