;(window.webpackJsonp = window.webpackJsonp || []).push([
  [200],
  {
    '3fah': function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        i = (r('z84I'), r('ho0z'), r('ezF+')),
        a = r('6rlp'),
        c = r('ERkP'),
        l = r('wtjx'),
        s = r('VPAj'),
        u = r('0KEI'),
        d = r('RoyM'),
        p = r('k+3s'),
        m = r('x5Pi'),
        f = r('Fg8X'),
        h = r('caTy'),
        v = r('cFuS'),
        g = r('zh9S'),
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
        return i.g({
          isFocusable: Object(s.a)(!0),
          component: t,
          bindActions: function (e) {
            e.module
            return {
              logTrend: a.c,
              saveAsRecentSearch: l.a,
              scribe: g.c,
              createLocalApiErrorHandler: Object(u.createLocalApiErrorHandlerWithContextFactory)(r),
            }
          },
          selectData: function (e) {
            var t,
              r,
              n,
              o,
              i,
              a,
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
                null === (i = o.mediaEntity) ||
                void 0 === i ||
                null === (a = i.tweetMedia) ||
                void 0 === a
                  ? void 0
                  : a.momentId,
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
              i = t.logTrend,
              a = t.saveAsRecentSearch,
              l = t.scribe,
              s = e.data,
              u = s.advertiser,
              f = s.dataSaverMode,
              g = s.moment,
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
              R = O.url && Object(h.b)(O.url),
              M = O.displayType === p.a.CellWithProminentSocialContext,
              j = Object(m.d)({ isCellWithProminentSocialContext: M, socialContext: O.socialContext, topic: b }),
              _ = (I || []).map(function (e) {
                return { name: e.name, link: Object(h.b)(e.url) }
              })
            return T(
              T(
                {},
                n({
                  eventSummary: O,
                  tweet: C,
                  moment: g,
                  scribe: l,
                  scribeNamespace: S,
                  entry: x,
                  dataSaverMode: f,
                  saveAsRecentSearch: a,
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
                socialContext: j,
                supportingText: O.supportingText,
                timeString: O.timeString,
                link: R,
                curationMenu: c.createElement(d.a, {
                  feedbackItems: E,
                  isDisplayedOnMedia: !('Hero' !== x.content.displayType || 'eventSummary' !== x.type),
                }),
                onClick: function () {
                  l(T(T({}, S), {}, { action: 'click' }), w),
                    k &&
                      k.promotedTrendId &&
                      i({
                        promoted_trend_id: k.promotedTrendId,
                        impression_id: k.impressionId,
                        event: v.d.SPOTLIGHT_CLICK,
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
              i = e.entry,
              a = e.scribeData,
              c = e.scribeNamespace,
              l = i.content.promotedMetadata
            o(T(T({}, c), {}, { action: 'impression' }), a),
              l &&
                l.promotedTrendId &&
                n({
                  promoted_trend_id: l.promotedTrendId,
                  impression_id: l.impressionId,
                  event: v.d.SPOTLIGHT_IMPRESSION,
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
        i = r('3fah'),
        a = (r('hBvt'), r('ERkP')),
        c = r('xZmF'),
        l = r('rH47'),
        s = r('PbbS'),
        u = r('LWCC'),
        d = r('9B+1'),
        p = r('8bWS'),
        m = r('caTy'),
        f = r('3IPs'),
        h = r('qbku'),
        v = r('X04g'),
        g = r('MWbm'),
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
            i = t.text,
            c = t.topicContext,
            l = c && Object(p.c)(c),
            f =
              r &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(E.a, { style: T.topicMiddot }),
                a.createElement(u.a, { isTransparent: !0, size: 'smallCompact', textMode: s.a.FollowTopic, topic: r }),
              )
          return a.createElement(h.a, {
            contextType: n,
            link: o ? Object(m.b)(o) : void 0,
            rightControl: l ? f : void 0,
            text: i,
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
            i = e.hasProminentSocialContext,
            s = e.id,
            u = e.image,
            d = e.isInSidebar,
            p = e.link,
            m = e.onClick,
            h = e.publisher,
            y = e.richContext,
            E = e.saveAsRecentSearch,
            w = e.scoreEvent,
            O = e.shouldStoreTypeaheadItem,
            I = e.socialContext,
            k = e.supportingText,
            P = e.timeString,
            R = e.title,
            M = e.topic,
            j = function () {
              m(),
                E &&
                  O &&
                  O(v.a.ItemType.EVENT) &&
                  E({
                    event: {
                      id: s,
                      image: u || { url: '', height: 0, width: 0 },
                      supportText: k,
                      title: R,
                      type: f.a.Event,
                    },
                  })
            }
          return a.createElement(b.a.Consumer, null, function (e) {
            return a.createElement(
              C.a,
              { link: e.withAnchorless(p), onClick: j, style: T.rootLink, withDarkerInteractiveBackground: d },
              i && I
                ? a.createElement(
                    x.a,
                    { rightControl: r || null, style: T.socialContextRow },
                    S({ socialContext: I, topic: M }),
                  )
                : null,
              a.createElement(
                g.a,
                { style: T.row },
                a.createElement(l.a, {
                  badge: t,
                  groupedTrends: o,
                  hasProminentSocialContext: i,
                  publisher: h,
                  richContext: y,
                  scoreEvent: w,
                  socialContext: I,
                  style: T.details,
                  supportingText: k,
                  timeString: P,
                  title: R,
                }),
                a.createElement(c.a, {
                  dataSaverMode: n,
                  icon: 'news',
                  image: u,
                  isCellWithProminentSocialContext: i,
                  scoreEvent: w,
                  type: i ? 'fixed' : void 0,
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
        R = function (e) {
          var t = e.eventSummary.scoreEvent || {},
            r = t.category,
            n = t.eventState,
            o = t.gameClock,
            i = t.gameClockPeriod,
            a = t.participants,
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
                    gameClockPeriod: i,
                    startTimeMillis: c,
                    participants: a,
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
          a = P
        return (
          n && (a = R),
          Object(i.a)({ component: O, shouldStoreTypeaheadItem: o, getDisplayTypeSpecificProps: a, errorContext: t })
        )
      }
    },
    i7AQ: function (e, t, r) {
      'use strict'
      r('hBvt'), r('ho0z')
      var n = r('ERkP'),
        o = r('3XMw'),
        i = r.n(o),
        a = r('t62R'),
        c = r('rHpw'),
        l = function (e) {
          var t = e.groupedTrends,
            r = e.linkColor,
            o = e.textColor,
            i = s(t, r)
          return i ? n.createElement(a.b, { color: o, numberOfLines: 2, size: 'subtext2', style: m.root }, i) : null
        }
      l.defaultProps = { textColor: 'gray700' }
      var s = function (e, t) {
          return e.length >= 2 ? d(e, t) : 1 === e.length ? u(e[0], t) : null
        },
        u = function (e, t) {
          return n.createElement(i.a.I18NFormatMessage, { $i18n: 'g1e704c3' }, p(e, t, !0))
        },
        d = function (e, t) {
          return n.createElement(i.a.I18NFormatMessage, { $i18n: 'i7bba09d' }, p(e[0], t, !0), p(e[1], t))
        },
        p = function (e, t) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          return n.createElement(
            a.b,
            { color: t, link: e.link, size: 'subtext2', style: r && m.paddingLeft, withHashflags: !0 },
            e.name,
          )
        },
        m = c.a.create(function (e) {
          return { root: { marginTop: e.spaces.space4 }, paddingLeft: { paddingLeft: e.spaces.space2 } }
        })
      t.a = l
    },
    'm5t/': function (e, t, r) {
      'use strict'
      r.r(t)
      r('hBpG')
      var n = r('3fah'),
        o = (r('OZaJ'), r('VrFO')),
        i = r.n(o),
        a = r('Y9Ll'),
        c = r.n(a),
        l = r('5Yy7'),
        s = r.n(l),
        u = r('N+ot'),
        d = r.n(u),
        p = r('AuHH'),
        m = r.n(p),
        f = (r('hBvt'), r('ERkP')),
        h = r('rH47'),
        v = r('97Jx'),
        g = r.n(v),
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
            return i()(this, r), t.apply(this, arguments)
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
                      { style: [R.maxHeightWidth, this._getBackgroundColorStyle()] },
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
                    var i = S.a.extractVideoProps(C.b.forTweet(o), t)
                    return f.createElement(
                      b.a,
                      g()({}, i, {
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
                    var a = t.ext_alt_text || '',
                      c = T.a.getOriginalImage(t)
                    return this._renderCoverImage(c, a)
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
        R = E.a.create(function (e) {
          return { maxHeightWidth: { height: '100%', width: '100%' } }
        }),
        M = 'eventHero',
        j = r('PbQQ'),
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
        A = (function (e) {
          s()(r, e)
          var t = D(r)
          function r() {
            return i()(this, r), t.apply(this, arguments)
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
                    i = e.image,
                    a = e.link,
                    c = e.manualCrops,
                    l = e.onClick,
                    s = e.promotedContent,
                    u = e.promotedTrendDescription,
                    d = e.publisher,
                    p = e.richContext,
                    m = e.socialContext,
                    v = e.supportingText,
                    g = e.timeString,
                    y = e.title,
                    b = e.tweetId,
                    C = y.length > 80 ? 'headline1' : 'title4'
                  return f.createElement(j.a.Consumer, null, function (e) {
                    return f.createElement(
                      f.Fragment,
                      null,
                      f.createElement(
                        _.a,
                        { link: e.withAnchorless(a), onClick: l, testID: M },
                        f.createElement(P, {
                          coverMediaFromTweet: r,
                          image: i,
                          manualCrops: c,
                          promotedContent: s,
                          tweetId: b,
                        }),
                        f.createElement(
                          x.a,
                          { style: [E.a.absoluteFill, L.details] },
                          f.createElement(h.a, {
                            badge: t,
                            groupedTrends: o,
                            linkColor: F,
                            promotedContent: s,
                            promotedTrendDescription: u,
                            publisher: d,
                            publisherTitleColor: F,
                            richContext: p,
                            shouldTruncateTitle: !0,
                            socialContext: m,
                            supportingText: v,
                            textColor: F,
                            timeString: g,
                            title: y,
                            titleFontSize: C,
                            titleWeight: 'heavy',
                          }),
                        ),
                      ),
                      n ? f.createElement(x.a, { style: L.menuContainer }, n) : null,
                    )
                  })
                },
              },
            ]),
            r
          )
        })(f.Component),
        L = E.a.create(function (e) {
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
        H = A,
        z = r('29/U'),
        B = function (e) {
          var t = e.eventSummary,
            r = e.tweet
          if (r) {
            var n,
              o,
              i = null === (n = t.media) || void 0 === n || null === (o = n.mediaKey) || void 0 === o ? void 0 : o.id
            return (
              r.extended_entities &&
              r.extended_entities.media &&
              r.extended_entities.media.find(function (e) {
                return e.id_str === i
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
        return R
      })
      r('OZaJ')
      var n = r('97Jx'),
        o = r.n(n),
        i = r('m3Bd'),
        a = r.n(i),
        c = r('VrFO'),
        l = r.n(c),
        s = r('Y9Ll'),
        u = r.n(s),
        d = r('1Pcy'),
        p = r.n(d),
        m = r('5Yy7'),
        f = r.n(m),
        h = r('N+ot'),
        v = r.n(h),
        g = r('AuHH'),
        y = r.n(g),
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
          return v()(this, r)
        }
      }
      var P = S.a.f93bb3ee,
        R = (function (e) {
          f()(r, e)
          var t = k(r)
          function r() {
            var e
            l()(this, r)
            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              C()(p()(e), '_renderContent', function (t) {
                var r = t.resourceSelectionHandler,
                  n = t.useMinimumData,
                  i = e.props,
                  c = i.accessibilityLabel,
                  l = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  s = a()(i, ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'])
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
        i = r('i7AQ'),
        a = r('rcen'),
        c = r('zOwA'),
        l = r('MWbm'),
        s = r('pjBI'),
        u = r('t62R'),
        d = r('e5HP'),
        p = r('jV+4'),
        m = r('Nxr7'),
        f = r('Wms4'),
        h = r('rHpw'),
        v = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
        g = function (e) {
          var t = e.badge,
            r = e.publisher,
            n = e.textColor,
            i = e.timeString,
            a = o.createElement(p.a, {
              isProtected: r.protected,
              isVerified: r.verified,
              name: r.name,
              nameSize: 'subtext2',
              profileImageUrl: r.profile_image_url_https,
            })
          return o.createElement(s.a, { style: C.publisherRow }, a, b(i, t, n))
        },
        y = function (e) {
          var t = e.category,
            r = e.eventState,
            n = e.gameClock,
            i = e.gameClockPeriod,
            a = e.participants,
            c = e.startTimeMillis,
            l = e.winnerId
          return o.createElement(m.a, {
            category: t,
            gameClock: n,
            gameClockPeriod: i,
            gameState: r,
            startTimeMillis: c,
            teams: a,
            winnerId: l,
            withCategory: !1,
          })
        },
        b = function (e, t, r) {
          return t && t.text
            ? o.createElement(f.a, { type: 'live' }, t.text)
            : e
            ? o.createElement(
                l.a,
                { style: C.timestamp },
                o.createElement(u.b, { color: r, numberOfLines: 1, size: 'subtext2' }, e),
              )
            : null
        },
        C = h.a.create(function (e) {
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
          p = e.hasProminentSocialContext,
          m = e.linkColor,
          f = e.promotedContent,
          h = e.promotedTrendDescription,
          x = e.publisher,
          E = e.publisherTitleColor,
          w = void 0 === E ? 'normal' : E,
          S = e.richContext,
          T = e.scoreEvent,
          O = e.shouldTruncateTitle,
          I = e.socialContext,
          k = e.style,
          P = e.supportingText,
          R = e.textColor,
          M = void 0 === R ? 'gray700' : R,
          j = e.timeString,
          _ = e.title,
          D = e.titleFontSize,
          F = void 0 === D ? 'body' : D,
          A = e.titleWeight,
          L = void 0 === A ? 'bold' : A,
          H = _.replace('#', '').charAt(0).match(v) ? 'rtl' : 'ltr',
          z = p ? void 0 : C.title,
          B = (I || {}).contextImageUrls,
          W = B && B[0]
        return o.createElement(
          l.a,
          { style: k },
          p
            ? null
            : o.createElement(
                s.a,
                { color: M, style: C.aboveTitle },
                P ? o.createElement(u.b, { color: M, numberOfLines: 1, size: 'subtext2' }, P) : null,
                x ? o.createElement(n.a, { author: x, color: w, size: 'subtext2' }) : null,
                t || j ? b(j, t, M) : null,
              ),
          o.createElement(
            u.b,
            { color: w, dir: H, numberOfLines: O ? 3 : void 0, size: F, style: z, weight: L, withHashflags: !0 },
            _,
          ),
          o.createElement(i.a, { groupedTrends: r, linkColor: m, textColor: M }),
          p
            ? o.createElement(
                l.a,
                { style: C.belowTitle },
                T
                  ? y(T)
                  : (t || j) && x
                  ? g({ badge: t, publisher: x, textColor: M, timeString: j }) || b(j, t, M)
                  : null,
              )
            : null,
          f && f.advertiser
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(u.b, { color: M }, h),
                o.createElement(d.a, { color: 'white', promotedContent: f, style: C.promotedIndicator }),
              )
            : null,
          S
            ? o.createElement(a.a, { color: M, entities: S.entities, rtl: S.rtl, size: 'subtext2', text: S.text })
            : I && I.text && !p
            ? o.createElement(c.a, { color: M, image: W, label: I.text, textSize: 'subtext2' })
            : null,
        )
      }
    },
    zOwA: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return E
      })
      r('OZaJ')
      var n = r('VrFO'),
        o = r.n(n),
        i = r('Y9Ll'),
        a = r.n(i),
        c = r('5Yy7'),
        l = r.n(c),
        s = r('N+ot'),
        u = r.n(s),
        d = r('AuHH'),
        p = r.n(d),
        m = r('KEM+'),
        f = r.n(m),
        h = r('ERkP'),
        v = r('9Xij'),
        g = r('t62R'),
        y = r('rHpw'),
        b = r('U+bB'),
        C = r('MWbm')
      function x(e) {
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
            n = p()(e)
          if (t) {
            var o = p()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return u()(this, r)
        }
      }
      var E = (function (e) {
        l()(r, e)
        var t = x(r)
        function r() {
          return o()(this, r), t.apply(this, arguments)
        }
        return (
          a()(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.color,
                  r = e.image,
                  n = e.label,
                  o = e.textSize
                return h.createElement(
                  C.a,
                  { style: w.root },
                  r
                    ? h.createElement(
                        C.a,
                        { style: w.imageContainer },
                        h.createElement(v.a, { ratio: 1 }, h.createElement(b.a, { source: r, style: w.image })),
                      )
                    : null,
                  h.createElement(g.b, { color: t, size: o }, n),
                )
              },
            },
          ]),
          r
        )
      })(h.PureComponent)
      f()(E, 'defaultProps', { color: 'gray700', textSize: 'body' })
      var w = y.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          imageContainer: {
            alignSelf: 'flex-start',
            backgroundColor: e.colors.gray200,
            flexShrink: 0,
            height: e.fontSizes.headline1,
            marginRight: e.spaces.space4,
            width: e.fontSizes.headline1,
            borderRadius: e.borderRadii.infinite,
          },
          image: { height: '100%', width: '100%', borderRadius: e.borderRadii.infinite },
        }
      })
    },
  },
])
//# sourceMappingURL=WIPED
