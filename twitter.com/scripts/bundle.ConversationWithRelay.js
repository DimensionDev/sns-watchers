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
          var v = u(d, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(v) : (t.environment, v),
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
        v = i.a.d9687d23,
        w = i.a.ac73eb5a,
        h = i.a.c5a9f921,
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
                        { style: O.tooltip },
                        r.createElement(
                          l.a,
                          { style: O.tooltipTitle },
                          r.createElement(c.b, { size: 'title3', weight: 'heavy' }, t),
                        ),
                        r.createElement(
                          l.a,
                          { style: O.tooltipText },
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
                    style: O.iconInformation,
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
                { style: O.labelBar },
                r.createElement(c.b, { color: 'gray700', size: 'subtext2', style: O.labelText, weight: 'medium' }, t),
                r.createElement(E, { label: t, tooltip: n }),
              )
            : null
        },
        I = function (e) {
          var t = e.unit
          return t ? r.createElement(c.b, { color: 'gray700', style: O.unitText, weight: 'medium' }, t) : null
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
                  return v({ trendValueNegativePercent: t })
                }
                if (0 === e) return w
                var n = b(e)
                return h({ trendValuePositivePercent: n })
              })(a)),
              a < 0
                ? r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: O.trendBar },
                    r.createElement(p.a, { style: O.trendIconNeg }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === a
                ? r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: O.trendBar },
                    r.createElement(m.a, { style: O.trendIconZero }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: O.trendBar },
                    r.createElement(f.a, { style: O.trendIconPos }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  ))
        },
        _ = function (e) {
          var t = e.subTextList
          return t
            ? t.map(function (e, t) {
                return r.createElement(
                  l.a,
                  { accessibilityLabel: e.accessibilityLabel, key: t, style: O.subTextListItem },
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
        O = o.a.create(function (e) {
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
          { style: O.dataPoint },
          r.createElement(k, { label: t, tooltip: i }),
          r.createElement(
            l.a,
            { style: O.valueBar },
            r.createElement(c.b, { size: n, weight: 'bold' }, u),
            r.createElement(I, { unit: s }),
            r.createElement(P, { trendValue: o }),
          ),
          r.createElement(_, { subTextList: a }),
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
          return nn
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
        v = n.n(b),
        w = (n('2G9S'), n('ERkP')),
        h = (n('WNMA'), n('KqXw'), n('XOJV')),
        E = n('rxPX'),
        k = n('0KEI'),
        I = n('S3l+'),
        P = 'CONVERSATION_ANALYTICS_SCREEN',
        _ = function (e, t) {
          return t.match.params.statusId
        },
        O = function (e, t) {
          return h.a.selectHydrated(e, _(0, t))
        },
        x = function (e, t) {
          return h.a.selectFetchStatus(e, _(0, t))
        },
        L = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: x,
              professionalEligibilityFetchStatus: I.l,
              statusId: _,
              tweet: O,
              professionalEligibility: I.k,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(P),
              fetchTweetIfNeeded: h.a.fetchOneIfNeeded,
              fetchProfessionalEligibilityIfNeeded: I.g,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        R = n('v//M'),
        T = n('W5XZ'),
        S = n('jHSc'),
        C = n('KUGV'),
        j = n('3XMw'),
        V = n.n(j),
        F = n('b5s6')
      function A(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function D(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      var B = n('Rp9C'),
        K = (n('jQ3i'), n('hBpG'), n('v6aA')),
        H = (n('z84I'), n('LlZX')),
        W = n('x0mb'),
        N = n('RhWx'),
        z = n.n(N),
        M = n('MWbm'),
        Q = n('8bFt'),
        q = n('rHpw'),
        U = V.a.ja781451,
        G = V.a.cfa1a7b8
      function X(e) {
        return e || 0
      }
      function Z(e, t) {
        var n = X(t)
        return 0 === n ? 0 : X(e) / n
      }
      function J(e) {
        var t = X(e)
        return t >= 1e5 ? G(t) : U(t)
      }
      function Y(e) {
        return {
          count: J(null == e ? void 0 : e.value.total),
          promotionPercentage: Z(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
        }
      }
      var $ = function (e) {
          var t = e.label,
            n = e.metric,
            r = e.showPromotionPercentages,
            a = e.tooltip,
            i = Z(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = z()(r ? ge(i, !0) : [])
          return w.createElement(
            M.a,
            { style: ee.dataPoint },
            w.createElement(Q.a, {
              label: t,
              size: 'title1',
              subTextList: o,
              tooltip: a,
              value: J(null == n ? void 0 : n.value.total),
            }),
          )
        },
        ee = q.a.create(function (e) {
          return { dataPoint: { marginRight: e.spaces.space56, marginBottom: e.spaces.space40 } }
        }),
        te = function (e) {
          var t = e.label,
            n = e.metric,
            r = e.showPromotionPercentages,
            a = e.tooltip,
            i = Z(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = z()(r ? ge(i, !1) : [])
          return w.createElement(
            M.a,
            { style: ne.dataPoint },
            w.createElement(Q.a, {
              label: t,
              size: 'title3',
              subTextList: o,
              tooltip: a,
              value: J(null == n ? void 0 : n.value.total),
            }),
          )
        },
        ne = q.a.create(function (e) {
          return { dataPoint: { flexGrow: 1, marginRight: e.spaces.space48 } }
        }),
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
          u = !(null == s || null === (t = s.entities) || void 0 === t || !t.urls) && s.entities.urls.length > 0,
          d =
            !(null == s || null === (n = s.extended_entities) || void 0 === n || !n.media) &&
            s.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          p = [
            w.createElement(te, { key: ie, label: ie, metric: r, showPromotionPercentages: c, tooltip: oe }),
            w.createElement(te, { key: le, label: le, metric: l, showPromotionPercentages: c, tooltip: ce }),
            d ? w.createElement(te, { key: se, label: se, metric: o, showPromotionPercentages: c, tooltip: ue }) : null,
            u ? w.createElement(te, { key: de, label: de, metric: i, showPromotionPercentages: c, tooltip: pe }) : null,
          ].filter(function (e) {
            return e
          }),
          m = ~~(p.length / 2)
        return w.createElement(
          M.a,
          { style: be.outerBox },
          w.createElement($, { label: re, metric: a, showPromotionPercentages: c, tooltip: ae }),
          w.createElement(
            M.a,
            null,
            Object(H.a)(p, 2).map(function (e, t) {
              return w.createElement(
                M.a,
                { key: 'dataPointGridRow'.concat(t), style: [be.row, t < m && be.notLastRow] },
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
            icon: w.createElement(W.a, { style: be.promotionIcon }),
          },
        ]
      }
      var be = q.a.create(function (e) {
          return {
            outerBox: {
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignContent: 'flex-start',
              marginTop: e.spaces.space40,
              marginHorizontal: e.spaces.space32,
            },
            row: { flexGrow: 1, display: 'flex', flexDirection: 'row' },
            notLastRow: { paddingBottom: e.spaces.space40 },
            dataPoint: { marginRight: e.spaces.space40, marginBottom: e.spaces.space40 },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        ve = n('UIzd'),
        we = n.n(ve),
        he = (n('uFXj'), n('t62R')),
        Ee = n('LbZ7'),
        ke = n('iEUn'),
        Ie = n('jlPL'),
        Pe = n('dFWS'),
        _e = V.a.ib1f8491,
        Oe = V.a.fbdb85f4,
        xe = V.a.d0eeb126,
        Le = V.a.i2785008,
        Re = V.a.g33fd6b0
      function Te(e) {
        var t = e.percentageValue,
          n = Le(t),
          r = Re({ percentage: n })
        return w.createElement(
          M.a,
          { accessibilityLabel: r, style: Ce.percentageView },
          w.createElement(W.a, { style: Ce.promotionIcon }),
          w.createElement(he.b, { accessibilityHidden: !0, color: 'primary' }, n),
        )
      }
      function Se(e) {
        var t = e.likes,
          n = e.replies,
          r = e.retweets,
          a = e.showPromotionPercentages,
          i = Y(t),
          o = i.count,
          l = i.promotionPercentage,
          c = Y(r),
          s = c.count,
          u = c.promotionPercentage,
          d = Y(n),
          p = d.count,
          m = d.promotionPercentage
        return w.createElement(
          M.a,
          { style: Ce.actionsBar },
          w.createElement(
            Ee.a,
            null,
            w.createElement(
              M.a,
              { accessibilityLabel: _e({ likeCount: o }), style: Ce.column },
              w.createElement(ke.a, { style: Ce.actionIconsColor }),
              w.createElement(he.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, o),
              a ? w.createElement(Te, { percentageValue: l }) : null,
            ),
            w.createElement(
              M.a,
              { accessibilityLabel: Oe({ retweetCount: s }), style: Ce.column },
              w.createElement(Ie.a, { style: Ce.actionIconsColor }),
              w.createElement(he.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, s),
              a ? w.createElement(Te, { percentageValue: u }) : null,
            ),
            w.createElement(
              M.a,
              { accessibilityLabel: xe({ replyCount: p }), style: Ce.column },
              w.createElement(Pe.a, { style: Ce.actionIconsColor }),
              w.createElement(he.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, p),
              a ? w.createElement(Te, { percentageValue: m }) : null,
            ),
          ),
        )
      }
      var Ce = q.a.create(function (e) {
          return {
            column: { flexGrow: 1, marginHorizontal: 'auto', padding: e.componentDimensions.gutterHorizontal },
            actionsBar: {
              marginHorizontal: e.spaces.space16,
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderStyle: 'solid',
              borderRadius: e.borderRadii.large,
            },
            actionIconsColor: { color: e.colors.gray700 },
            percentageView: { display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 'auto' },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        je = n('97Jx'),
        Ve = n.n(je),
        Fe = n('Wc+h'),
        Ae = n('gmpV'),
        De = n('876e'),
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
          l = a && i ? Object(Ae.a)(new Date(i), new Date(a)) : 0,
          c = t && o ? De.a.getTimeLeftLabel(t) : null,
          s = a ? ze(a) : '',
          u = a ? Ne(a) : '',
          d = Me({ endTimeString: s, endDateString: u })
        return w.createElement(
          M.a,
          { style: Ue.promotionInfoView },
          w.createElement(
            M.a,
            { style: Ue.infoItemView },
            w.createElement(qe, { endTimeLabel: d, isPaused: n, percentagePassed: l, timeLeftLabel: c }),
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
                label: w.createElement(he.b, { size: 'headline2', weight: 'heavy' }, n ? We : He),
                description: a
                  ? w.createElement(
                      w.Fragment,
                      null,
                      w.createElement(
                        M.a,
                        { style: Ue.progressBarContainer },
                        w.createElement(Be.a, {
                          colorValue: n ? q.a.theme.colors.gray400 : q.a.theme.colors.primary,
                          progress: r,
                          style: Ue.progressBar,
                        }),
                      ),
                      w.createElement(he.b, { align: 'left', color: 'gray700', hoverLabel: { label: t } }, a),
                    )
                  : null,
                decoration: n ? null : w.createElement(Fe.a, { style: [Ue.icon, Ue.decorationContainer] }),
              },
            ],
          }
        return w.createElement(Ke.a, Ve()({}, i, { containerStyle: Ue.infoItem }))
      }
      var Ue = q.a.create(function (e) {
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
        Xe = (n('hBvt'), n('0ig/')),
        Ze = n('/yvb')
      function Je(e) {
        var t = e.buttonString,
          n = e.infoItemGroup,
          r = e.link,
          a = e.onButtonPress,
          i = e.withIcon,
          o = Object(Xe.a)().width < q.a.theme.breakpoints.medium,
          l = o ? [Ye.promotionInfoView, Ye.promotionInfoViewNarrow] : Ye.promotionInfoView
        return w.createElement(
          M.a,
          { style: l },
          w.createElement(M.a, { style: [Ye.infoItemView, !o && Ye.infoItemViewWide] }, n),
          w.createElement(
            M.a,
            { style: o ? [Ye.buttonViewNarrow, i && Ye.buttonViewIcon] : Ye.buttonViewWide },
            w.createElement(Ze.a, { link: r, onPress: a, size: 'large', type: 'primaryFilled' }, t),
          ),
        )
      }
      var Ye = q.a.create(function (e) {
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
        $e = n('Irs7'),
        et = n('yE5w'),
        tt = V.a.a63a89fe,
        nt = V.a.f4e13456,
        rt = V.a.e8adeec8,
        at = V.a.ja781451
      function it(e) {
        var t = Object($e.b)(),
          n = at(X(e.impressions)),
          r = nt({ impressions: n }),
          a = {
            items: [
              {
                label: w.createElement(he.b, { size: 'headline2', weight: 'heavy' }, tt),
                description: r,
                decoration: w.createElement(Ge.a, { style: [ot.icon, ot.decorationContainer] }),
              },
            ],
          }
        var i = w.createElement(Ke.a, Ve()({}, a, { containerStyle: ot.infoItem })),
          o = null !== Object(C.a)(),
          l = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? et.a.Webview : et.a.Rweb, '/')
            .concat(et.c.Intro)
        return w.createElement(Je, {
          buttonString: rt,
          infoItemGroup: i,
          link: l,
          onButtonPress: function () {
            t.scribe(D(e.userId, 'PromoteAgainButton'))
          },
          withIcon: !0,
        })
      }
      var ot = q.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        lt = V.a.dcfb0332,
        ct = V.a.g6bf2fda,
        st = V.a.df2c469a,
        ut = V.a.ja781451
      function dt(e) {
        var t = Object($e.b)(),
          n = null !== Object(C.a)(),
          r = ut(X(e.impressions)),
          a = ct({ impressions: r })
        var i = {
            items: [{ label: w.createElement(he.b, { size: 'headline1', weight: 'heavy' }, lt), description: a }],
          },
          o = w.createElement(Ke.a, Ve()({}, i, { containerStyle: pt.infoItem }))
        return w.createElement(Je, {
          buttonString: st,
          infoItemGroup: o,
          link: {
            pathname: '/i/flow/convert_to_professional',
            state: { input: { requested_variant: 'qp-'.concat(e.tweet_id, '-').concat(n ? 'true' : 'false') } },
            method: 'push',
          },
          onButtonPress: function () {
            t.scribe(D(e.userId, 'SwitchToProfessionalButton'))
          },
          withIcon: !1,
        })
      }
      var pt = q.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        mt = V.a.dcfb0332,
        ft = V.a.f96eec3c,
        yt = V.a.e9891f7c
      function gt(e) {
        var t = Object($e.b)(),
          n = { items: [{ label: w.createElement(he.b, { size: 'headline1', weight: 'heavy' }, mt), description: ft }] }
        var r = w.createElement(Ke.a, Ve()({}, n, { containerStyle: bt.infoItem })),
          a = null !== Object(C.a)(),
          i = ''
            .concat(e.tweetPermalink, '/')
            .concat(a ? et.a.Webview : et.a.Rweb, '/')
            .concat(et.c.Intro)
        return w.createElement(Je, {
          buttonString: yt,
          infoItemGroup: r,
          link: i,
          onButtonPress: function () {
            t.scribe(D(e.userId, 'NotStartedPromotionButton'))
          },
          withIcon: !1,
        })
      }
      var bt = q.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        vt = n('5emT'),
        wt = V.a.jede3014,
        ht = V.a.i094e43b,
        Et = V.a.f638d3e0
      function kt(e) {
        var t = Object($e.b)(),
          n = {
            items: [
              {
                label: w.createElement(he.b, { size: 'headline2', weight: 'heavy' }, wt),
                description: ht,
                decoration: w.createElement(vt.a, { style: [Pt.icon, Pt.decorationContainer] }),
              },
            ],
          }
        return w.createElement(
          M.a,
          { style: Pt.promotionInfoView },
          w.createElement(
            M.a,
            { style: Pt.infoItemView },
            w.createElement(Ke.a, Ve()({}, n, { containerStyle: Pt.infoItem })),
          ),
          w.createElement(
            M.a,
            { style: Pt.buttonView },
            w.createElement(
              he.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(D(e.userId, 'ReviewPolicyButton'))
                },
              },
              Et,
            ),
          ),
        )
      }
      var It,
        Pt = q.a.create(function (e) {
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
        _t = (n('enFi'), n('jAXQ')),
        Ot = n.n(_t),
        xt =
          (n('yH/f'),
          Object.freeze({
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Lt = void 0 !== It ? It : (It = n('+s2u'))
      function Rt(e) {
        var t,
          n,
          r,
          a,
          i = e.impressions,
          o = e.isUserProfessional,
          l = e.promotionInfoState,
          c = e.tweet,
          s = Ot()(Lt, e.campaignInfo)
        if (!o)
          return w.createElement(dt, {
            impressions: null == i ? void 0 : i.value.total,
            tweet_id: c.id_str,
            userId: e.userId,
          })
        switch (l) {
          case xt.notStarted:
            return w.createElement(gt, { tweetPermalink: c.permalink, userId: e.userId })
          case xt.underReview:
            return w.createElement(kt, { userId: e.userId })
          case xt.running:
            return w.createElement(Qe, {
              end_time: null == s || null === (t = s.campaign) || void 0 === t ? void 0 : t.end_time,
              isPaused: !1,
              start_time: null == s || null === (n = s.campaign) || void 0 === n ? void 0 : n.start_time,
            })
          case xt.completed:
            return w.createElement(it, {
              impressions: null == i ? void 0 : i.value.promoted,
              tweetPermalink: c.permalink,
              userId: e.userId,
            })
          case xt.paused:
            return w.createElement(Qe, {
              end_time: null == s || null === (r = s.campaign) || void 0 === r ? void 0 : r.end_time,
              isPaused: !0,
              start_time: null == s || null === (a = s.campaign) || void 0 === a ? void 0 : a.start_time,
            })
          default:
            return null
        }
      }
      var Tt,
        St,
        Ct,
        jt = n('Ud88'),
        Vt = n.n(jt),
        Ft = n('n0Rl'),
        At = n('Hsf0'),
        Dt = n.n(At),
        Bt = n('LLQb'),
        Kt = V.a.deaf5b15,
        Ht = void 0 !== Tt ? Tt : (Tt = n('2O3u')),
        Wt = void 0 !== St ? St : (St = n('njVe')),
        Nt = void 0 !== Ct ? Ct : (Ct = n('wfDE')),
        zt = Object(Ft.b)(Nt, { errorConfig: { context: P } })
      function Mt(e) {
        var t,
          n = e.hidePromotionInfo,
          r = e.professionalEligibility,
          a = e.tweet,
          i = e.userId,
          o = w.useContext(K.a).featureSwitches.isTrue('responsive_web_qp_pa_signup_enabled'),
          l = !!r || !o,
          c =
            !a.is_quote_status &&
            (null == r || null === (t = r.quick_promote_eligibility) || void 0 === t ? void 0 : t.is_eligible),
          s = n || (l && !c && o),
          u = Vt()(),
          d = Object(k.useCreateLocalApiErrorHandler)(P)
        return (
          w.useEffect(
            function () {
              var e = d({ showToast: !1 })
              we()(u, Nt, { restId: a.id_str }).subscribe({ error: e })
            },
            [a, u, d],
          ),
          w.createElement(zt, {
            render: function (e) {
              if (e.fetchStatus === Ft.a.FAILED) {
                var t = e.retry
                return w.createElement(Bt.a, { onRequestRetry: t, retryMessage: Kt })
              }
              if (e.fetchStatus === Ft.a.LOADED) {
                var n,
                  r,
                  o =
                    null === (n = e.data) || void 0 === n || null === (r = n.tweet_result_by_rest_id) || void 0 === r
                      ? void 0
                      : r.result
                if ('Tweet' === (null == o ? void 0 : o.__typename)) {
                  var c =
                      ((E = o.quick_promotion),
                      null == (_ = Dt()(Wt, E)) || 'Rejected' === _.approval_status
                        ? 'not_started'
                        : 'UnderReview' === _.approval_status
                        ? 'under_review'
                        : 'Running' === (null === (k = _.campaign) || void 0 === k ? void 0 : k.status)
                        ? 'running'
                        : 'Paused' === (null === (I = _.campaign) || void 0 === I ? void 0 : I.status)
                        ? 'paused'
                        : ['Exhausted', 'Expired'].includes(
                            null === (P = _.campaign) || void 0 === P ? void 0 : P.status,
                          )
                        ? 'completed'
                        : 'not_started'),
                    u = qt(o.analytics),
                    d = u.follows,
                    p = u.impressions,
                    m = u.likes,
                    f = u.linkClicks,
                    y = u.mediaViews,
                    g = u.profileVisits,
                    b = u.replies,
                    v = u.retweets,
                    h = ['running', 'completed', 'paused'].includes(c)
                  return w.createElement(
                    M.a,
                    { style: Ut.tweetActivity },
                    w.createElement(
                      M.a,
                      { style: Ut.metricsView },
                      w.createElement(Se, { likes: m, replies: b, retweets: v, showPromotionPercentages: h }),
                      w.createElement(ye, {
                        follows: d,
                        impressions: p,
                        linkClicks: f,
                        mediaViews: y,
                        profileVisits: g,
                        showPromotionPercentages: h,
                        tweet: a,
                      }),
                    ),
                    s
                      ? null
                      : w.createElement(Rt, {
                          campaignInfo: o.quick_promotion,
                          impressions: p,
                          isUserProfessional: l,
                          promotionInfoState: c,
                          tweet: a,
                          userId: i,
                        }),
                  )
                }
              }
              var E, k, I, P, _
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
          var t = Dt()(Ht, e)
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
      var Ut = q.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        Gt = n('E0cF'),
        Xt = n('q9Zt')
      function Zt(e, t) {
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
      function Jt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Zt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Yt(e) {
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
      var $t = V.a.g9079b93,
        en = V.a.a57daeb1,
        tn = V.a.deaf5b15,
        nn = (function (e) {
          p()(n, e)
          var t = Yt(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(u()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(n(T.a))
              }),
              v()(u()(e), '_handleFetchProfessionalEligibility', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchProfessionalEligibilityIfNeeded)().catch(n())
              }),
              v()(u()(e), '_render', function () {
                var t = e.props,
                  n = t.professionalEligibility,
                  r = t.tweet,
                  a = (r && Gt.a.getOriginalTweet(r)) || void 0
                return !a || (a && a.user.id_str !== e.context.loggedInUserId)
                  ? w.createElement(Xt.a, { onRetry: null, title: $t })
                  : w.createElement(
                      M.a,
                      { style: rn.topLevelView },
                      w.createElement(
                        M.a,
                        { style: rn.quoteTweet },
                        w.createElement(F.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: a.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      w.createElement(Mt, {
                        hidePromotionInfo: !1,
                        professionalEligibility: n,
                        tweet: a,
                        userId: e.context.loggedInUserId || '',
                      }),
                    )
              }),
              v()(u()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              v()(u()(e), '_handleGoBack', function () {
                var t = e.props,
                  n = t.history,
                  r = t.location
                n.goBackThroughModals({ location: r })
              }),
              v()(u()(e), '_scribeDwellTime', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.tweet,
                  i = (r && Gt.a.getOriginalTweet(r)) || void 0,
                  o = A(e._dwellStartTime),
                  l = o.data,
                  c = a()(o, ['data'])
                n.scribe(Jt(Jt({}, c), {}, { data: Jt(Jt({}, l), {}, { items: i ? [B.a.getTweetItem(i)] : [] }) }))
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
                    a = (r && Gt.a.getOriginalTweet(r)) || void 0,
                    i = null !== Object(C.a)()
                  return w.createElement(
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
                      title: i ? null : en,
                    },
                    w.createElement(R.a, { fetchStatus: t, render: this._render, retryMessage: tn }),
                  )
                },
              },
            ]),
            n
          )
        })(w.PureComponent)
      v()(nn, 'contextType', K.a)
      var rn = q.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        an = L(nn)
      t.default = an
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
        v = n('x5Pi'),
        w = y(function (e) {
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
            y = i && Object(v.f)(i, p, t),
            w = y && Object(v.e)(y),
            h = d.isTrue('responsive_web_reactions_enabled')
          return l.createElement(
            b.a,
            a()({}, s, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: f,
              socialContextProps: w,
              tweet: i,
              withReactions: h,
            }),
          )
        })
      t.a = w
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
          v = b[0],
          w = b[1],
          h = m(function () {
            return n
          }),
          E = h[0],
          k = h[1]
        n !== E && (f.current.add(n), k(n), w(n))
        var I = u(
            function () {
              s.current && (f.current.add(y), w(y))
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
                f.current.add(i), w(i)
              }
            },
            [o, e, w, s],
          ),
          _ = p(!1)
        return (
          d(function () {
            return function () {
              _.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === _.current)
                return (
                  (_.current = !1),
                  void (
                    'NullQueryReference' !== v.kind &&
                    P(v.variables, { fetchPolicy: v.fetchPolicy, networkCacheConfig: v.networkCacheConfig })
                  )
                )
              var t = f.current
              if (s.current) {
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var i = n.value
                    if (i === v) break
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
            [v, s, P, e],
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
          ['NullQueryReference' === v.kind ? null : v, P, I]
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
        v = n.n(b),
        w = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        h = n('pXBW'),
        E = n('6/RC'),
        k = n('UIzd'),
        I = n.n(k),
        P = n('kGix')
      n.d(t, 'a', function () {
        return P.a
      })
      var _ = n('fs1G'),
        O = n('0KEI'),
        x = n('lU4h'),
        L = n.n(x),
        R = n('21nk'),
        T = n.n(R),
        S = n('bCEw'),
        C = n.n(S),
        j = n('Ud88'),
        V = n.n(j)
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
          var n,
            r = g()(e)
          if (t) {
            var a = g()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var A = function (e) {
          return (0, e.render)({ fetchStatus: P.a.LOADING, data: null, error: null, retry: _.a })
        },
        D = (function (e) {
          p()(n, e)
          var t = F(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(a))), v()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof h.a)) throw e
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
        })(w.Component),
        B = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = T()(t, n)
          return r({ fetchStatus: P.a.LOADED, data: a, error: null, retry: _.a })
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
                p = Object(O.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = L()(l),
                f = a()(m, 1)[0],
                y = w.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                w.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: i })
                  },
                  [i, d, f],
                ),
                u
                  ? w.createElement(
                      w.Suspense,
                      { fallback: w.createElement(A, { render: o }) },
                      w.createElement(
                        D,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: y },
                        function (t, n) {
                          return t
                            ? o({ fetchStatus: P.a.FAILED, error: t, data: null, retry: n })
                            : w.createElement(B, { query: e, queryRef: u, render: o })
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
              c = Object(O.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = L()(o),
              u = a()(s, 1)[0],
              d = n.get(l)
            if (d) return d
            var p = w.lazy(function () {
              return I()(l, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: P.a.LOADED, data: e, error: null, retry: _.a })
                  },
                  function (e) {
                    return e instanceof h.a
                      ? (c(t.errorConfig.options || {})(e),
                        i({ fetchStatus: P.a.FAILED, data: null, error: e, retry: _.a }))
                      : w.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(l, e).get.bind(n, l) }
                })
            })
            return w.createElement(w.Suspense, null, w.createElement(p, null))
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
