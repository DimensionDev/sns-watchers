;(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    '+s2u': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'PromotionInfo_campaignInfo',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'AdCampaign',
            kind: 'LinkedField',
            name: 'campaign',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'status', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'end_time', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'start_time', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'Ad',
        abstractKey: null,
        hash: 'd2cabdfedee121dcf0ad150e773ded66',
      }
      t.default = r
    },
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
        i = n('yLYC'),
        o = n('Ud88'),
        l = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        c = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        s = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, t, n) {
        l()
        var c,
          d = o(),
          p = t.fetchKey,
          m = t.fetchPolicy,
          f = t.source,
          y = t.variables,
          g = t.networkCacheConfig,
          b = i(e, y, g)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && r(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: s(d, b.request.identifier, function () {
                return d === t.environment && null != f
                  ? d.executeWithSource({ operation: b, source: f })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: m,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(d, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(h) : (t.environment, h),
            fetchKey: p,
            fetchPolicy: m,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(c)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = r.useEffect,
        i = r.useRef
      e.exports = function () {
        var e = i(!0)
        return (
          a(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    '2O3u': function (e, t, n) {
      'use strict'
      n.r(t)
      var r = { kind: 'InlineDataFragment', name: 'TweetActivity_metrics', hash: '15b7c2798a31f76eb517582e90ab541d' }
      t.default = r
    },
    '8bFt': function (e, t, n) {
      'use strict'
      n('z84I')
      var r = n('ERkP'),
        a = n('3XMw'),
        i = n.n(a),
        o = n('rHpw'),
        l = n('MWbm'),
        c = n('t62R'),
        s = n('/yvb'),
        u = n('OiMc'),
        d = n('6s7X'),
        p = n('RjwM'),
        m = n('7Mjr'),
        f = n('WXWl'),
        y = i.a.affbaf62,
        g = i.a.c388d026,
        b = i.a.i2785008,
        h = i.a.d9687d23,
        v = i.a.ac73eb5a,
        w = i.a.c5a9f921,
        E = function (e) {
          var t = e.label,
            n = e.tooltip
          return n
            ? r.createElement(
                l.a,
                null,
                r.createElement(
                  u.a,
                  {
                    preferredVerticalOrientation: 'up',
                    renderContent: function (e) {
                      return r.createElement(
                        l.a,
                        { style: x.tooltip },
                        r.createElement(
                          l.a,
                          { style: x.tooltipTitle },
                          r.createElement(c.b, { size: 'title3', weight: 'heavy' }, t),
                        ),
                        r.createElement(
                          l.a,
                          { style: x.tooltipText },
                          r.createElement(c.b, { color: 'gray700', size: 'body', weight: 'normal' }, n),
                        ),
                        r.createElement(s.a, { onPress: e, type: 'primaryOutlined' }, g),
                      )
                    },
                    withArrow: !0,
                  },
                  r.createElement(d.a, {
                    accessibilityLabel: y,
                    accessibilityRole: 'tooltip',
                    style: x.iconInformation,
                  }),
                ),
              )
            : null
        },
        k = function (e) {
          var t = e.label,
            n = e.tooltip
          return t
            ? r.createElement(
                l.a,
                { style: x.labelBar },
                r.createElement(c.b, { color: 'gray700', size: 'subtext2', style: x.labelText, weight: 'medium' }, t),
                r.createElement(E, { label: t, tooltip: n }),
              )
            : null
        },
        I = function (e) {
          var t = e.unit
          return t ? r.createElement(c.b, { color: 'gray700', style: x.unitText, weight: 'medium' }, t) : null
        },
        P = function (e) {
          var t,
            n,
            a = e.trendValue
          return void 0 === a
            ? null
            : ((a = Math.round(100 * a) / 100),
              (t = b(a)),
              (n = (function (e) {
                if (e < 0) {
                  var t = b(e)
                  return h({ trendValueNegativePercent: t })
                }
                if (0 === e) return v
                var n = b(e)
                return w({ trendValuePositivePercent: n })
              })(a)),
              a < 0
                ? r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: x.trendBar },
                    r.createElement(p.a, { style: x.trendIconNeg }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === a
                ? r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: x.trendBar },
                    r.createElement(m.a, { style: x.trendIconZero }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: x.trendBar },
                    r.createElement(f.a, { style: x.trendIconPos }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  ))
        },
        O = function (e) {
          var t = e.subTextList
          return t
            ? t.map(function (e, t) {
                return r.createElement(
                  l.a,
                  { accessibilityLabel: e.accessibilityLabel, key: t, style: x.subTextListItem },
                  e.icon,
                  r.createElement(
                    c.b,
                    { accessibilityHidden: !(void 0 === e.accessibilityLabel), color: e.color },
                    e.text,
                  ),
                )
              })
            : null
        },
        x = o.a.create(function (e) {
          return {
            dataPoint: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
            labelBar: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: e.spaces.space2 },
            labelText: { marginRight: e.spaces.space4 },
            iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: 'pointer' },
            tooltip: { padding: e.spaces.space32 },
            tooltipTitle: { marginBottom: e.spaces.space8 },
            tooltipText: { marginBottom: e.spaces.space24 },
            valueBar: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginBottom: e.spaces.space4,
            },
            unitText: { marginLeft: e.spaces.space4, flexDirection: 'column' },
            trendBar: { marginLeft: e.spaces.space4, flexDirection: 'row' },
            trendIconPos: {
              marginTop: e.spaces.space1,
              marginBottom: e.spaces.space1,
              marginRight: e.spaces.space2,
              height: e.spaces.space16,
              color: e.colors.green500,
            },
            trendIconZero: {
              marginTop: e.spaces.space1,
              marginBottom: e.spaces.space1,
              marginRight: e.spaces.space2,
              height: e.spaces.space16,
              color: e.colors.gray700,
            },
            trendIconNeg: {
              marginTop: e.spaces.space1,
              marginBottom: e.spaces.space1,
              marginRight: e.spaces.space2,
              height: e.spaces.space16,
              color: e.colors.red500,
            },
            subTextListItem: { flexDirection: 'row', alignItems: 'center', marginBottom: e.spaces.space2 },
          }
        })
      t.a = function (e) {
        var t = e.label,
          n = e.size,
          a = e.subTextList,
          i = e.tooltip,
          o = e.trendValue,
          s = e.unit,
          u = e.value
        return r.createElement(
          l.a,
          { style: x.dataPoint },
          r.createElement(k, { label: t, tooltip: i }),
          r.createElement(
            l.a,
            { style: x.valueBar },
            r.createElement(c.b, { size: n, weight: 'bold' }, u),
            r.createElement(I, { unit: s }),
            r.createElement(P, { trendValue: o }),
          ),
          r.createElement(O, { subTextList: a }),
        )
      }
    },
    LlZX: function (e, t, n) {
      'use strict'
      n('M+/F')
      t.a = function (e, t) {
        var n = null == e ? 0 : e.length
        if (!n || t < 1) return []
        for (var r = 0, a = 0, i = new Array(Math.ceil(n / t)); r < n; ) (i[a] = e.slice(r, (r += t))), (a += 1)
        return i
      }
    },
    Pe39: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationAnalyticsScreen', function () {
          return rn
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('N+ot'),
        f = n.n(m),
        y = n('AuHH'),
        g = n.n(y),
        b = n('KEM+'),
        h = n.n(b),
        v = (n('2G9S'), n('ERkP')),
        w = (n('WNMA'), n('KqXw'), n('XOJV')),
        E = n('rxPX'),
        k = n('0KEI'),
        I = n('S3l+'),
        P = 'CONVERSATION_ANALYTICS_SCREEN',
        O = function (e, t) {
          return t.match.params.statusId
        },
        x = function (e, t) {
          return w.a.selectHydrated(e, O(0, t))
        },
        _ = function (e, t) {
          return w.a.selectFetchStatus(e, O(0, t))
        },
        T = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: _,
              professionalEligibilityFetchStatus: I.m,
              statusId: O,
              tweet: x,
              professionalEligibility: I.l,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(P),
              fetchTweetIfNeeded: w.a.fetchOneIfNeeded,
              fetchProfessionalEligibilityIfNeeded: I.h,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        L = n('v//M'),
        R = n('W5XZ'),
        S = n('jHSc'),
        C = n('KUGV'),
        j = n('3XMw'),
        V = n.n(j),
        D = n('b5s6')
      function F(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function A(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      var B = n('Rp9C'),
        K = (n('jQ3i'), n('hBpG'), n('z84I'), n('LlZX')),
        H = n('x0mb'),
        W = n('RhWx'),
        N = n.n(W),
        z = n('MWbm'),
        M = n('rHpw'),
        Q = n('8bFt'),
        q = V.a.ja781451,
        U = V.a.cfa1a7b8
      function G(e) {
        return e || 0
      }
      function X(e, t) {
        var n = G(t)
        return 0 === n ? 0 : G(e) / n
      }
      function Z(e) {
        var t = G(e)
        return t >= 1e5 ? U(t) : q(t)
      }
      function J(e) {
        return {
          count: Z(null == e ? void 0 : e.value.total),
          promotionPercentage: X(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
        }
      }
      var Y = function (e) {
          var t = e.isSmall,
            n = e.label,
            r = e.metric,
            a = e.showPromotionPercentages,
            i = e.tooltip,
            o = X(null == r ? void 0 : r.value.promoted, null == r ? void 0 : r.value.total),
            l = N()(a ? ge(o, !0) : [])
          return v.createElement(
            z.a,
            { style: [$.dataPoint, { marginBottom: t ? M.a.theme.spaces.space24 : M.a.theme.spaces.space40 }] },
            v.createElement(Q.a, {
              label: n,
              size: 'title1',
              subTextList: l,
              tooltip: i,
              value: Z(null == r ? void 0 : r.value.total),
            }),
          )
        },
        $ = M.a.create(function (e) {
          return { dataPoint: { marginRight: e.spaces.space56 } }
        }),
        ee = function (e) {
          var t = e.label,
            n = e.metric,
            r = e.showPromotionPercentages,
            a = e.tooltip,
            i = X(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = N()(r ? ge(i, !1) : [])
          return v.createElement(
            z.a,
            { style: te.dataPoint },
            v.createElement(Q.a, {
              label: t,
              size: 'title3',
              subTextList: o,
              tooltip: a,
              value: Z(null == n ? void 0 : n.value.total),
            }),
          )
        },
        te = M.a.create(function (e) {
          return { dataPoint: { flexGrow: 1, marginRight: e.spaces.space48 } }
        }),
        ne = n('0ig/'),
        re = V.a.e5fe61ef,
        ae = V.a.f6162a32,
        ie = V.a.d8abdaa4,
        oe = V.a.de0de3a7,
        le = V.a.aeee0181,
        ce = V.a.ccab7c76,
        se = V.a.b1b4d57d,
        ue = V.a.i680442e,
        de = V.a.d5f1e553,
        pe = V.a.d24b7811,
        me = V.a.i2785008,
        fe = V.a.g33fd6b0
      V.a.b71059c3
      function ye(e) {
        var t,
          n,
          r = e.follows,
          a = e.impressions,
          i = e.linkClicks,
          o = e.mediaViews,
          l = e.profileVisits,
          c = e.showPromotionPercentages,
          s = e.tweet,
          u = Object(ne.a)().width < M.a.theme.breakpoints.xSmall,
          d = !(null == s || null === (t = s.entities) || void 0 === t || !t.urls) && s.entities.urls.length > 0,
          p =
            !(null == s || null === (n = s.extended_entities) || void 0 === n || !n.media) &&
            s.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          m = [
            v.createElement(ee, { key: ie, label: ie, metric: r, showPromotionPercentages: c, tooltip: oe }),
            v.createElement(ee, { key: le, label: le, metric: l, showPromotionPercentages: c, tooltip: ce }),
            p ? v.createElement(ee, { key: se, label: se, metric: o, showPromotionPercentages: c, tooltip: ue }) : null,
            d ? v.createElement(ee, { key: de, label: de, metric: i, showPromotionPercentages: c, tooltip: pe }) : null,
          ].filter(function (e) {
            return e
          }),
          f = Math.ceil(m.length / 2) - 1
        return v.createElement(
          z.a,
          {
            style: [
              be.outerBox,
              { marginTop: u ? M.a.theme.spaces.space24 : M.a.theme.spaces.space40 },
              { marginHorizontal: u ? M.a.theme.spaces.space16 : M.a.theme.spaces.space32 },
            ],
          },
          v.createElement(Y, { isSmall: u, label: re, metric: a, showPromotionPercentages: c, tooltip: ae }),
          v.createElement(
            z.a,
            { style: be.minorMetrics },
            Object(K.a)(m, 2).map(function (e, t) {
              return v.createElement(
                z.a,
                {
                  key: 'dataPointGridRow'.concat(t),
                  style: [be.row, t < f && { paddingBottom: u ? M.a.theme.spaces.space24 : M.a.theme.spaces.space40 }],
                },
                e,
              )
            }),
          ),
        )
      }
      function ge(e, t) {
        var n = me(e),
          r = fe({ percentage: n })
        return [
          {
            accessibilityLabel: r,
            color: 'primary',
            text: t ? r : n,
            icon: v.createElement(H.a, { style: be.promotionIcon }),
          },
        ]
      }
      var be = M.a.create(function (e) {
          return {
            outerBox: {
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignContent: 'flex-start',
            },
            minorMetrics: { flexGrow: 1, display: 'flex' },
            row: { flexGrow: 1, display: 'flex', flexDirection: 'row' },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        he = n('UIzd'),
        ve = n.n(he),
        we = (n('uFXj'), n('t62R')),
        Ee = n('LbZ7'),
        ke = n('iEUn'),
        Ie = n('jlPL'),
        Pe = n('dFWS'),
        Oe = V.a.ib1f8491,
        xe = V.a.fbdb85f4,
        _e = V.a.d0eeb126,
        Te = V.a.i2785008,
        Le = V.a.g33fd6b0
      function Re(e) {
        var t = e.percentageValue,
          n = Te(t),
          r = Le({ percentage: n })
        return v.createElement(
          z.a,
          { accessibilityLabel: r, style: Ce.percentageView },
          v.createElement(H.a, { style: Ce.promotionIcon }),
          v.createElement(we.b, { accessibilityHidden: !0, color: 'primary' }, n),
        )
      }
      function Se(e) {
        var t = e.likes,
          n = e.replies,
          r = e.retweets,
          a = e.showPromotionPercentages,
          i = J(t),
          o = i.count,
          l = i.promotionPercentage,
          c = J(r),
          s = c.count,
          u = c.promotionPercentage,
          d = J(n),
          p = d.count,
          m = d.promotionPercentage
        return v.createElement(
          z.a,
          { style: Ce.actionsBar },
          v.createElement(
            Ee.a,
            null,
            v.createElement(
              z.a,
              { accessibilityLabel: Oe({ likeCount: o }), style: Ce.column },
              v.createElement(ke.a, { style: Ce.actionIconsColor }),
              v.createElement(we.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, o),
              a ? v.createElement(Re, { percentageValue: l }) : null,
            ),
            v.createElement(
              z.a,
              { accessibilityLabel: xe({ retweetCount: s }), style: Ce.column },
              v.createElement(Ie.a, { style: Ce.actionIconsColor }),
              v.createElement(we.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, s),
              a ? v.createElement(Re, { percentageValue: u }) : null,
            ),
            v.createElement(
              z.a,
              { accessibilityLabel: _e({ replyCount: p }), style: Ce.column },
              v.createElement(Pe.a, { style: Ce.actionIconsColor }),
              v.createElement(we.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, p),
              a ? v.createElement(Re, { percentageValue: m }) : null,
            ),
          ),
        )
      }
      var Ce = M.a.create(function (e) {
          return {
            column: { flexGrow: 1, marginHorizontal: 'auto', padding: e.componentDimensions.gutterHorizontal },
            actionsBar: {
              marginHorizontal: e.spaces.space16,
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderStyle: 'solid',
              borderRadius: e.borderRadii.large,
            },
            actionIconsColor: { color: e.colors.gray700, marginBottom: e.spaces.space4 },
            percentageView: { display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 'auto' },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        je = n('97Jx'),
        Ve = n.n(je),
        De = n('Wc+h'),
        Fe = n('gmpV'),
        Ae = n('876e'),
        Be = n('JYMr'),
        Ke = n('h0NW'),
        He = V.a.db6efeb8,
        We = V.a.j6daea85,
        Ne = V.a.jade381b,
        ze = V.a.d725a288,
        Me = V.a.hf9ed10f
      function Qe(e) {
        var t = e.end_time,
          n = e.isPaused,
          r = e.start_time,
          a = t ? new Date(t) : null,
          i = r ? new Date(r) : null,
          o = !!a && a > new Date(Date.now()),
          l = a && i ? Object(Fe.a)(new Date(i), new Date(a)) : 0,
          c = t && o ? Ae.a.getTimeLeftLabel(t) : null,
          s = a ? ze(a) : '',
          u = a ? Ne(a) : '',
          d = Me({ endTimeString: s, endDateString: u })
        return v.createElement(
          z.a,
          { style: Ue.promotionInfoView },
          v.createElement(
            z.a,
            { style: Ue.infoItemView },
            v.createElement(qe, { endTimeLabel: d, isPaused: n, percentagePassed: l, timeLeftLabel: c }),
          ),
        )
      }
      function qe(e) {
        var t = e.endTimeLabel,
          n = e.isPaused,
          r = e.percentagePassed,
          a = e.timeLeftLabel,
          i = {
            items: [
              {
                label: v.createElement(we.b, { size: 'headline2', weight: 'heavy' }, n ? We : He),
                description: a
                  ? v.createElement(
                      v.Fragment,
                      null,
                      v.createElement(
                        z.a,
                        { style: Ue.progressBarContainer },
                        v.createElement(Be.a, {
                          colorValue: n ? M.a.theme.colors.gray400 : M.a.theme.colors.primary,
                          progress: r,
                          style: Ue.progressBar,
                        }),
                      ),
                      v.createElement(we.b, { align: 'left', color: 'gray700', hoverLabel: { label: t } }, a),
                    )
                  : null,
                decoration: n ? null : v.createElement(De.a, { style: [Ue.icon, Ue.decorationContainer] }),
              },
            ],
          }
        return v.createElement(Ke.a, Ve()({}, i, { containerStyle: Ue.infoItem }))
      }
      var Ue = M.a.create(function (e) {
          return {
            promotionInfoView: {
              position: 'sticky',
              bottom: 0,
              left: 0,
              backgroundColor: e.colors.navigationBackground,
              borderTopWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderStyle: 'solid',
              padding: e.spaces.space24,
              flexDirection: 'row',
              alignItems: 'flex-start',
            },
            promotionInfoViewNarrow: { flexWrap: 'wrap' },
            promotionInfoUnderReview: { padding: e.spaces.space24 },
            infoItemView: { flex: 1 },
            infoItem: { paddingHorizontal: 0, paddingVertical: 0 },
            progressBarContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.medium,
              height: 'calc('.concat(e.spaces.space4, ' + ').concat(e.spaces.space2, ')'),
              marginTop: e.spaces.space12,
              marginBottom: e.spaces.space8,
            },
            progressBar: { borderRadius: e.borderRadii.medium, height: '100%' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: {
              height: e.spaces.space24,
              width: e.spaces.space24,
              color: e.colors.white,
              backgroundColor: e.colors.primary,
              borderRadius: e.borderRadii.small,
            },
          }
        }),
        Ge = n('WtWS'),
        Xe = (n('hBvt'), n('/yvb'))
      function Ze(e) {
        var t = e.buttonString,
          n = e.buttonTestID,
          r = e.infoItemGroup,
          a = e.link,
          i = e.onButtonPress,
          o = e.withIcon,
          l = Object(ne.a)().width < M.a.theme.breakpoints.medium,
          c = l ? [Je.promotionInfoView, Je.promotionInfoViewNarrow] : Je.promotionInfoView
        return v.createElement(
          z.a,
          { style: c },
          v.createElement(z.a, { style: [Je.infoItemView, !l && Je.infoItemViewWide] }, r),
          v.createElement(
            z.a,
            { style: l ? [Je.buttonViewNarrow, o && Je.buttonViewIcon] : Je.buttonViewWide },
            v.createElement(Xe.a, { link: a, onPress: i, size: 'large', testID: n, type: 'primaryFilled' }, t),
          ),
        )
      }
      var Je = M.a.create(function (e) {
          return {
            promotionInfoView: {
              position: 'sticky',
              bottom: 0,
              left: 0,
              backgroundColor: e.colors.navigationBackground,
              borderTopWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderStyle: 'solid',
              padding: e.spaces.space32,
              flexDirection: 'row',
              alignItems: 'flex-start',
            },
            promotionInfoViewNarrow: { flexWrap: 'wrap' },
            infoItemView: { flexShrink: 'initial', flexWrap: 'wrap' },
            infoItemViewWide: { flexShrink: 'initial' },
            buttonViewNarrow: { marginTop: e.spaces.space16 },
            buttonViewIcon: { marginLeft: e.spaces.space48 },
            buttonViewWide: { margin: 'auto', marginLeft: e.spaces.space32 },
          }
        }),
        Ye = n('Irs7'),
        $e = n('yE5w'),
        et = V.a.a63a89fe,
        tt = V.a.f4e13456,
        nt = V.a.e8adeec8,
        rt = V.a.ja781451
      function at(e) {
        var t = Object(Ye.b)(),
          n = rt(G(e.impressions)),
          r = tt({ impressions: n }),
          a = {
            items: [
              {
                label: v.createElement(we.b, { size: 'headline2', weight: 'heavy' }, et),
                description: r,
                decoration: v.createElement(Ge.a, { style: [it.icon, it.decorationContainer] }),
              },
            ],
          }
        var i = v.createElement(Ke.a, Ve()({}, a, { containerStyle: it.infoItem })),
          o = null !== Object(C.a)(),
          l = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? $e.a.Webview : $e.a.Rweb, '/')
            .concat($e.c.Intro)
        return v.createElement(Ze, {
          buttonString: nt,
          infoItemGroup: i,
          link: l,
          onButtonPress: function () {
            t.scribe(A(e.userId, 'PromoteAgainButton'))
          },
          withIcon: !0,
        })
      }
      var it = M.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        ot = V.a.dcfb0332,
        lt = V.a.g6bf2fda,
        ct = V.a.df2c469a,
        st = V.a.ja781451
      function ut(e) {
        var t = Object(Ye.b)(),
          n = null !== Object(C.a)(),
          r = st(G(e.impressions)),
          a = lt({ impressions: r })
        var i = {
            items: [{ label: v.createElement(we.b, { size: 'headline1', weight: 'heavy' }, ot), description: a }],
          },
          o = v.createElement(Ke.a, Ve()({}, i, { containerStyle: dt.infoItem }))
        return v.createElement(Ze, {
          buttonString: ct,
          buttonTestID: e.buttonTestID,
          infoItemGroup: o,
          link: {
            pathname: '/i/flow/convert_to_professional',
            state: { input: { requested_variant: 'qp-'.concat(e.tweet_id, '-').concat(n ? 'true' : 'false') } },
            method: 'push',
          },
          onButtonPress: function () {
            t.scribe(A(e.userId, 'SwitchToProfessionalButton'))
          },
          withIcon: !1,
        })
      }
      var dt = M.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        pt = V.a.dcfb0332,
        mt = V.a.f96eec3c,
        ft = V.a.e9891f7c
      function yt(e) {
        var t = Object(Ye.b)(),
          n = { items: [{ label: v.createElement(we.b, { size: 'headline1', weight: 'heavy' }, pt), description: mt }] }
        var r = v.createElement(Ke.a, Ve()({}, n, { containerStyle: gt.infoItem })),
          a = null !== Object(C.a)(),
          i = ''
            .concat(e.tweetPermalink, '/')
            .concat(a ? $e.a.Webview : $e.a.Rweb, '/')
            .concat($e.c.Intro)
        return v.createElement(Ze, {
          buttonString: ft,
          infoItemGroup: r,
          link: i,
          onButtonPress: function () {
            t.scribe(A(e.userId, 'NotStartedPromotionButton'))
          },
          withIcon: !1,
        })
      }
      var gt = M.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        bt = 'switchToProfessionalButton',
        ht = n('5emT'),
        vt = V.a.jede3014,
        wt = V.a.i094e43b,
        Et = V.a.f638d3e0
      function kt(e) {
        var t = Object(Ye.b)(),
          n = {
            items: [
              {
                label: v.createElement(we.b, { size: 'headline2', weight: 'heavy' }, vt),
                description: wt,
                decoration: v.createElement(ht.a, { style: [Pt.icon, Pt.decorationContainer] }),
              },
            ],
          }
        return v.createElement(
          z.a,
          { style: Pt.promotionInfoView },
          v.createElement(
            z.a,
            { style: Pt.infoItemView },
            v.createElement(Ke.a, Ve()({}, n, { containerStyle: Pt.infoItem })),
          ),
          v.createElement(
            z.a,
            { style: Pt.buttonView },
            v.createElement(
              we.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(A(e.userId, 'ReviewPolicyButton'))
                },
              },
              Et,
            ),
          ),
        )
      }
      var It,
        Pt = M.a.create(function (e) {
          return {
            promotionInfoView: {
              position: 'sticky',
              bottom: 0,
              left: 0,
              backgroundColor: e.colors.navigationBackground,
              borderTopWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderStyle: 'solid',
              padding: e.spaces.space24,
              flexDirection: 'row',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
            },
            infoItemView: { flexShrink: 'initial', flexWrap: 'wrap' },
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            buttonView: { marginTop: e.spaces.space16, marginLeft: e.spaces.space48 },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.gray700 },
          }
        }),
        Ot = (n('enFi'), n('jAXQ')),
        xt = n.n(Ot),
        _t =
          (n('yH/f'),
          Object.freeze({
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Tt = void 0 !== It ? It : (It = n('+s2u'))
      function Lt(e) {
        var t,
          n,
          r,
          a,
          i = e.impressions,
          o = e.isUserProfessional,
          l = e.promotionInfoState,
          c = e.tweet,
          s = xt()(Tt, e.campaignInfo)
        if (!o)
          return v.createElement(ut, {
            buttonTestID: bt,
            impressions: null == i ? void 0 : i.value.total,
            tweet_id: c.id_str,
            userId: e.userId,
          })
        switch (l) {
          case _t.notStarted:
            return v.createElement(yt, { tweetPermalink: c.permalink, userId: e.userId })
          case _t.underReview:
            return v.createElement(kt, { userId: e.userId })
          case _t.running:
            return v.createElement(Qe, {
              end_time: null == s || null === (t = s.campaign) || void 0 === t ? void 0 : t.end_time,
              isPaused: !1,
              start_time: null == s || null === (n = s.campaign) || void 0 === n ? void 0 : n.start_time,
            })
          case _t.completed:
            return v.createElement(at, {
              impressions: null == i ? void 0 : i.value.promoted,
              tweetPermalink: c.permalink,
              userId: e.userId,
            })
          case _t.paused:
            return v.createElement(Qe, {
              end_time: null == s || null === (r = s.campaign) || void 0 === r ? void 0 : r.end_time,
              isPaused: !0,
              start_time: null == s || null === (a = s.campaign) || void 0 === a ? void 0 : a.start_time,
            })
          default:
            return null
        }
      }
      var Rt,
        St,
        Ct,
        jt = n('Ud88'),
        Vt = n.n(jt),
        Dt = n('n0Rl'),
        Ft = n('Hsf0'),
        At = n.n(Ft),
        Bt = n('LLQb'),
        Kt = V.a.deaf5b15,
        Ht = void 0 !== Rt ? Rt : (Rt = n('2O3u')),
        Wt = void 0 !== St ? St : (St = n('njVe')),
        Nt = void 0 !== Ct ? Ct : (Ct = n('wfDE')),
        zt = Object(Dt.b)(Nt, { errorConfig: { context: P } })
      function Mt(e) {
        var t,
          n = e.hidePromotionInfo,
          r = e.professionalEligibility,
          a = e.tweet,
          i = e.userId,
          o = !!r,
          l =
            !a.is_quote_status &&
            (null == r || null === (t = r.quick_promote_eligibility) || void 0 === t ? void 0 : t.is_eligible),
          c = n || (o && !l),
          s = Vt()(),
          u = Object(k.useCreateLocalApiErrorHandler)(P)
        return (
          v.useEffect(
            function () {
              var e = u({ showToast: !1 })
              ve()(s, Nt, { restId: a.id_str }).subscribe({ error: e })
            },
            [a, s, u],
          ),
          v.createElement(zt, {
            render: function (e) {
              if (e.fetchStatus === Dt.a.FAILED) {
                var t = e.retry
                return v.createElement(Bt.a, { onRequestRetry: t, retryMessage: Kt })
              }
              if (e.fetchStatus === Dt.a.LOADED) {
                var n,
                  r,
                  l =
                    null === (n = e.data) || void 0 === n || null === (r = n.tweet_result_by_rest_id) || void 0 === r
                      ? void 0
                      : r.result
                if ('Tweet' === (null == l ? void 0 : l.__typename)) {
                  var s =
                      ((E = l.quick_promotion),
                      null == (O = At()(Wt, E)) || 'Rejected' === O.approval_status
                        ? 'not_started'
                        : 'UnderReview' === O.approval_status
                        ? 'under_review'
                        : 'Running' === (null === (k = O.campaign) || void 0 === k ? void 0 : k.status)
                        ? 'running'
                        : 'Paused' === (null === (I = O.campaign) || void 0 === I ? void 0 : I.status)
                        ? 'paused'
                        : ['Exhausted', 'Expired'].includes(
                            null === (P = O.campaign) || void 0 === P ? void 0 : P.status,
                          )
                        ? 'completed'
                        : 'not_started'),
                    u = qt(l.analytics),
                    d = u.follows,
                    p = u.impressions,
                    m = u.likes,
                    f = u.linkClicks,
                    y = u.mediaViews,
                    g = u.profileVisits,
                    b = u.replies,
                    h = u.retweets,
                    w = ['running', 'completed', 'paused'].includes(s)
                  return v.createElement(
                    z.a,
                    { style: Ut.tweetActivity },
                    v.createElement(
                      z.a,
                      { style: Ut.metricsView },
                      v.createElement(Se, { likes: m, replies: b, retweets: h, showPromotionPercentages: w }),
                      v.createElement(ye, {
                        follows: d,
                        impressions: p,
                        linkClicks: f,
                        mediaViews: y,
                        profileVisits: g,
                        showPromotionPercentages: w,
                        tweet: a,
                      }),
                    ),
                    c
                      ? null
                      : v.createElement(Lt, {
                          campaignInfo: l.quick_promotion,
                          impressions: p,
                          isUserProfessional: o,
                          promotionInfoState: s,
                          tweet: a,
                          userId: i,
                        }),
                  )
                }
              }
              var E, k, I, P, O
              return null
            },
            variables: { restId: a.id_str },
          })
        )
      }
      var Qt = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        qt = function (e) {
          var t = At()(Ht, e)
          return {
            follows: Qt(t, 'Follows'),
            impressions: Qt(t, 'Impressions'),
            likes: Qt(t, 'Favorites'),
            linkClicks: Qt(t, 'UrlClicks'),
            mediaViews: Qt(t, 'MediaViews'),
            profileVisits: Qt(t, 'UserProfileClicks'),
            replies: Qt(t, 'Replies'),
            retweets: Qt(t, 'Retweets'),
          }
        }
      var Ut = M.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        Gt = n('v6aA'),
        Xt = n('E0cF'),
        Zt = n('q9Zt')
      function Jt(e, t) {
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
      function Yt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Jt(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Jt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $t(e) {
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
            r = g()(e)
          if (t) {
            var a = g()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var en = V.a.g9079b93,
        tn = V.a.a57daeb1,
        nn = V.a.deaf5b15,
        rn = (function (e) {
          p()(n, e)
          var t = $t(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(u()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(n(R.a))
              }),
              h()(u()(e), '_handleFetchProfessionalEligibility', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchProfessionalEligibilityIfNeeded)().catch(n())
              }),
              h()(u()(e), '_render', function () {
                var t = e.props,
                  n = t.professionalEligibility,
                  r = t.tweet,
                  a = (r && Xt.a.getOriginalTweet(r)) || void 0
                return !a || (a && a.user.id_str !== e.context.loggedInUserId)
                  ? v.createElement(Zt.a, { onRetry: null, title: en })
                  : v.createElement(
                      z.a,
                      { style: an.topLevelView },
                      v.createElement(
                        z.a,
                        { style: an.quoteTweet },
                        v.createElement(D.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: a.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      v.createElement(Mt, {
                        hidePromotionInfo: !1,
                        professionalEligibility: n,
                        tweet: a,
                        userId: e.context.loggedInUserId || '',
                      }),
                    )
              }),
              h()(u()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              h()(u()(e), '_handleGoBack', function () {
                e.props.history.goBackThroughModals()
              }),
              h()(u()(e), '_scribeDwellTime', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.tweet,
                  i = (r && Xt.a.getOriginalTweet(r)) || void 0,
                  o = F(e._dwellStartTime),
                  l = o.data,
                  c = a()(o, ['data'])
                n.scribe(Yt(Yt({}, c), {}, { data: Yt(Yt({}, l), {}, { items: i ? [B.a.getTweetItem(i)] : [] }) }))
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchTweet(),
                    this._handleFetchProfessionalEligibility(),
                    (this._dwellStartTime = Date.now())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._scribeDwellTime()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.history,
                    r = e.tweet,
                    a = (r && Xt.a.getOriginalTweet(r)) || void 0,
                    i = null !== Object(C.a)()
                  return v.createElement(
                    S.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: a ? a.permalink : '/',
                      hideBackButton: i,
                      history: n,
                      onBackClick: this._handleGoBack,
                      renderHeader: function (e) {
                        return i ? null : e
                      },
                      title: i ? null : tn,
                    },
                    v.createElement(L.a, { fetchStatus: t, render: this._render, retryMessage: nn }),
                  )
                },
              },
            ]),
            n
          )
        })(v.PureComponent)
      h()(rn, 'contextType', Gt.a)
      var an = M.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        on = T(rn)
      t.default = on
    },
    RjwM: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('Lsrn'),
        l = n('k/Ka')
      function c(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M18.707 13.293c-.39-.39-1.023-.39-1.414 0L13 17.586V5c0-.553-.447-1-1-1s-1 .447-1 1v12.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    WXWl: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('Lsrn'),
        l = n('k/Ka')
      function c(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          s(
            s({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M18.707 10.293l-6-6c-.39-.39-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L11 7.414V20c0 .553.447 1 1 1s1-.447 1-1V7.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    b5s6: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        c = n('v6aA'),
        s = n('XOJV'),
        u = n('eSoz'),
        d = n('rxPX'),
        p = n('0KEI'),
        m = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            r = n && s.a.select(e, n)
          return r ? Object(u.f)(e, r) : void 0
        },
        y = Object(d.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: s.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.b.fetchOneIfNeeded,
            }
          }),
        g = n('YeIG'),
        b = n('uCxL'),
        h = n('x5Pi'),
        v = y(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            s =
              (e.tweetId,
              o()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            u = l.useContext(c.a),
            d = u.featureSwitches,
            p = u.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          l.useEffect(
            function () {
              m && Object(g.a)(t) && r(m).catch(n())
            },
            [t, m, n, r],
          )
          var f = d.isTrue('responsive_web_alt_text_badge_enabled'),
            y = i && Object(h.f)(i, p, t),
            v = y && Object(h.e)(y),
            w = d.isTrue('responsive_web_reactions_enabled')
          return l.createElement(
            b.a,
            a()({}, s, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: f,
              socialContextProps: v,
              tweet: i,
              withReactions: w,
            }),
          )
        })
      t.a = v
    },
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        i = n('Ud88'),
        o = n('aQQo'),
        l = o.loadQuery,
        c = o.useTrackLoadQueryInRender,
        s = n('ERkP'),
        u = s.useCallback,
        d = s.useEffect,
        p = s.useRef,
        m = s.useState,
        f = n('K1lQ').getRequest,
        y = { kind: 'NullQueryReference' }
      function g(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== f(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : y,
          o = i()
        c()
        var s = a(),
          f = p(new Set([n])),
          b = m(function () {
            return n
          }),
          h = b[0],
          v = b[1],
          w = m(function () {
            return n
          }),
          E = w[0],
          k = w[1]
        n !== E && (f.current.add(n), k(n), v(n))
        var I = u(
            function () {
              s.current && (f.current.add(y), v(y))
            },
            [s],
          ),
          P = u(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (s.current) {
                var a,
                  i = l(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : o, e, t, r)
                f.current.add(i), v(i)
              }
            },
            [o, e, v, s],
          ),
          O = p(!1)
        return (
          d(function () {
            return function () {
              O.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === O.current)
                return (
                  (O.current = !1),
                  void (
                    'NullQueryReference' !== h.kind &&
                    P(h.variables, { fetchPolicy: h.fetchPolicy, networkCacheConfig: h.networkCacheConfig })
                  )
                )
              var t = f.current
              if (s.current) {
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var i = n.value
                    if (i === h) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (g(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (o) {
                  a.e(o)
                } finally {
                  a.f()
                }
              }
            },
            [h, s, P, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, r.default)(f.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value
                    'NullQueryReference' !== a.kind &&
                      (g(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (i) {
                  n.e(i)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === h.kind ? null : h, P, I]
        )
      }
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return K
      })
      n('OZaJ')
      var r = n('ddV6'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('N+ot'),
        f = n.n(m),
        y = n('AuHH'),
        g = n.n(y),
        b = n('KEM+'),
        h = n.n(b),
        v = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        w = n('pXBW'),
        E = n('6/RC'),
        k = n('UIzd'),
        I = n.n(k),
        P = n('kGix')
      n.d(t, 'a', function () {
        return P.a
      })
      var O = n('fs1G'),
        x = n('0KEI'),
        _ = n('lU4h'),
        T = n.n(_),
        L = n('21nk'),
        R = n.n(L),
        S = n('bCEw'),
        C = n.n(S),
        j = n('Ud88'),
        V = n.n(j)
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
          var n,
            r = g()(e)
          if (t) {
            var a = g()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var F = function (e) {
          return (0, e.render)({ fetchStatus: P.a.LOADING, data: null, error: null, retry: O.a })
        },
        A = (function (e) {
          p()(n, e)
          var t = D(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(a))), h()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof w.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            n
          )
        })(v.Component),
        B = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = R()(t, n)
          return r({ fetchStatus: P.a.LOADED, data: a, error: null, retry: O.a })
        },
        K = function (e, t) {
          if (E.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                i = void 0 === r ? 'store-or-network' : r,
                o = n.render,
                l = n.variables,
                c = C()(e),
                s = a()(c, 2),
                u = s[0],
                d = s[1],
                p = Object(x.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = T()(l),
                f = a()(m, 1)[0],
                y = v.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                v.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: i })
                  },
                  [i, d, f],
                ),
                u
                  ? v.createElement(
                      v.Suspense,
                      { fallback: v.createElement(F, { render: o }) },
                      v.createElement(
                        A,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: y },
                        function (t, n) {
                          return t
                            ? o({ fetchStatus: P.a.FAILED, error: t, data: null, retry: n })
                            : v.createElement(B, { query: e, queryRef: u, render: o })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (r) {
            r.fetchPolicy
            var i = r.render,
              o = r.variables,
              l = V()(),
              c = Object(x.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = T()(o),
              u = a()(s, 1)[0],
              d = n.get(l)
            if (d) return d
            var p = v.lazy(function () {
              return I()(l, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: P.a.LOADED, data: e, error: null, retry: O.a })
                  },
                  function (e) {
                    return e instanceof w.a
                      ? (c(t.errorConfig.options || {})(e),
                        i({ fetchStatus: P.a.FAILED, data: null, error: e, retry: O.a }))
                      : v.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(l, e).get.bind(n, l) }
                })
            })
            return v.createElement(v.Suspense, null, v.createElement(p, null))
          }
        }
    },
    njVe: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = {
        kind: 'InlineDataFragment',
        name: 'TweetActivity_mapPromotionDataToPromotionInfoState',
        hash: 'ea7658c5830d417e53118b26df704a5f',
      }
      t.default = r
    },
    wfDE: function (e, t, n) {
      'use strict'
      n.r(t)
      var r,
        a,
        i,
        o,
        l,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (r = [{ defaultValue: null, kind: 'LocalArgument', name: 'restId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'TweetActivityQuery',
            selections: [
              {
                alias: null,
                args: (a = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'restId' },
                  { kind: 'Literal', name: 's', value: 41 },
                ]),
                concreteType: 'TweetResults',
                kind: 'LinkedField',
                name: 'tweet_result_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'result',
                    plural: !1,
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'TweetActivityMetricsResponse',
                            kind: 'LinkedField',
                            name: 'analytics',
                            plural: !1,
                            selections: [
                              {
                                kind: 'InlineDataFragmentSpread',
                                name: 'TweetActivity_metrics',
                                selections: (o = [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'EasyPromoteMetrics',
                                    kind: 'LinkedField',
                                    name: 'metrics',
                                    plural: !0,
                                    selections: [
                                      { alias: null, args: null, kind: 'ScalarField', name: 'key', storageKey: null },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'TweetActivityMetric',
                                        kind: 'LinkedField',
                                        name: 'value',
                                        plural: !1,
                                        selections: [
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'promoted',
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'total',
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ]),
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Ad',
                            kind: 'LinkedField',
                            name: 'quick_promotion',
                            plural: !1,
                            selections: [
                              {
                                kind: 'InlineDataFragmentSpread',
                                name: 'TweetActivity_mapPromotionDataToPromotionInfoState',
                                selections: [
                                  (l = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'approval_status',
                                    storageKey: null,
                                  }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'AdCampaign',
                                    kind: 'LinkedField',
                                    name: 'campaign',
                                    plural: !1,
                                    selections: [
                                      (c = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'status',
                                        storageKey: null,
                                      }),
                                    ],
                                    storageKey: null,
                                  },
                                ],
                              },
                              { args: null, kind: 'FragmentSpread', name: 'PromotionInfo_campaignInfo' },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'Tweet',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'TweetActivityQuery',
            selections: [
              {
                alias: null,
                args: a,
                concreteType: 'TweetResults',
                kind: 'LinkedField',
                name: 'tweet_result_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'result',
                    plural: !1,
                    selections: [
                      i,
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'TweetActivityMetricsResponse',
                            kind: 'LinkedField',
                            name: 'analytics',
                            plural: !1,
                            selections: o,
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'Ad',
                            kind: 'LinkedField',
                            name: 'quick_promotion',
                            plural: !1,
                            selections: [
                              l,
                              {
                                alias: null,
                                args: null,
                                concreteType: 'AdCampaign',
                                kind: 'LinkedField',
                                name: 'campaign',
                                plural: !1,
                                selections: [
                                  c,
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  { alias: null, args: null, kind: 'ScalarField', name: 'end_time', storageKey: null },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'start_time',
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              s,
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'Tweet',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'YBl1YqJGsv1sBeHsh1SbNA',
            metadata: {},
            name: 'TweetActivityQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(u.hash = 'ba7a6bbcaa8cf917049d8e03601b1a45'), (t.default = u)
    },
  },
])
//# sourceMappingURL=WIPED
