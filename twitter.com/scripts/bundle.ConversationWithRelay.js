;(window.webpackJsonp = window.webpackJsonp || []).push([
  [47],
  {
    '+s2u': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
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
      t.default = a
    },
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
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
          m = t.fetchKey,
          p = t.fetchPolicy,
          f = t.source,
          y = t.variables,
          g = t.networkCacheConfig,
          b = i(e, y, g)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && a(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: m,
              fetchObservable: s(d, b.request.identifier, function () {
                return d === t.environment && null != f
                  ? d.executeWithSource({ operation: b, source: f })
                  : d.execute({ operation: b })
              }),
              fetchPolicy: p,
              query: b,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var h = u(d, b)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != f && d === t.environment ? f.ifEmpty(h) : (t.environment, h),
            fetchKey: m,
            fetchPolicy: p,
            query: b,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(c)
      }
    },
    '23An': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = a.useEffect,
        i = a.useRef
      e.exports = function () {
        var e = i(!0)
        return (
          r(function () {
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
      var a = { kind: 'InlineDataFragment', name: 'TweetActivity_metrics', hash: '15b7c2798a31f76eb517582e90ab541d' }
      t.default = a
    },
    '8bFt': function (e, t, n) {
      'use strict'
      n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('rHpw'),
        c = n('MWbm'),
        s = n('t62R'),
        u = n('/yvb'),
        d = n('OiMc'),
        m = n('6s7X'),
        p = n('RjwM'),
        f = n('7Mjr'),
        y = n('WXWl'),
        g = o.a.affbaf62,
        b = o.a.c388d026,
        h = o.a.i2785008,
        v = o.a.d9687d23,
        w = o.a.ac73eb5a,
        E = o.a.c5a9f921,
        k = function (e) {
          var t = e.label,
            n = e.tooltip
          return n
            ? r.a.createElement(
                c.a,
                null,
                r.a.createElement(
                  d.a,
                  {
                    preferredVerticalOrientation: 'up',
                    renderContent: function (e) {
                      return r.a.createElement(
                        c.a,
                        { style: T.tooltip },
                        r.a.createElement(
                          c.a,
                          { style: T.tooltipTitle },
                          r.a.createElement(s.b, { size: 'title3', weight: 'heavy' }, t),
                        ),
                        r.a.createElement(
                          c.a,
                          { style: T.tooltipText },
                          r.a.createElement(s.b, { color: 'gray700', size: 'body', weight: 'normal' }, n),
                        ),
                        r.a.createElement(u.a, { onPress: e, type: 'primaryOutlined' }, b),
                      )
                    },
                    withArrow: !0,
                  },
                  r.a.createElement(m.a, {
                    accessibilityLabel: g,
                    accessibilityRole: 'tooltip',
                    style: T.iconInformation,
                  }),
                ),
              )
            : null
        },
        I = function (e) {
          var t = e.label,
            n = e.tooltip
          return t
            ? r.a.createElement(
                c.a,
                { style: T.labelBar },
                r.a.createElement(s.b, { color: 'gray700', size: 'subtext2', style: T.labelText, weight: 'medium' }, t),
                r.a.createElement(k, { label: t, tooltip: n }),
              )
            : null
        },
        P = function (e) {
          var t = e.unit
          return t ? r.a.createElement(s.b, { color: 'gray700', style: T.unitText, weight: 'medium' }, t) : null
        },
        O = function (e) {
          var t,
            n,
            a = e.trendValue
          return void 0 === a
            ? null
            : ((a = Math.round(100 * a) / 100),
              (t = h(a)),
              (n = (function (e) {
                if (e < 0) {
                  var t = h(e)
                  return v({ trendValueNegativePercent: t })
                }
                if (0 === e) return w
                var n = h(e)
                return E({ trendValuePositivePercent: n })
              })(a)),
              a < 0
                ? r.a.createElement(
                    c.a,
                    { accessibilityLabel: n, style: T.trendBar },
                    r.a.createElement(p.a, { style: T.trendIconNeg }),
                    r.a.createElement(
                      s.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === a
                ? r.a.createElement(
                    c.a,
                    { accessibilityLabel: n, style: T.trendBar },
                    r.a.createElement(f.a, { style: T.trendIconZero }),
                    r.a.createElement(
                      s.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : r.a.createElement(
                    c.a,
                    { accessibilityLabel: n, style: T.trendBar },
                    r.a.createElement(y.a, { style: T.trendIconPos }),
                    r.a.createElement(
                      s.b,
                      { accessibilityHidden: !0, color: 'green500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  ))
        },
        _ = function (e) {
          var t = e.subTextList
          return t
            ? t.map(function (e, t) {
                return r.a.createElement(
                  c.a,
                  { accessibilityLabel: e.accessibilityLabel, key: t, style: [T.subTextListItem, e.style] },
                  e.icon,
                  r.a.createElement(
                    s.b,
                    { accessibilityHidden: !(void 0 === e.accessibilityLabel), color: e.color },
                    e.text,
                  ),
                )
              })
            : null
        },
        T = l.a.create(function (e) {
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
          l = e.unit,
          u = e.value
        return r.a.createElement(
          c.a,
          { style: T.dataPoint },
          r.a.createElement(I, { label: t, tooltip: i }),
          r.a.createElement(
            c.a,
            { style: T.valueBar },
            r.a.createElement(s.b, { size: n, weight: 'bold' }, u),
            r.a.createElement(P, { unit: l }),
            r.a.createElement(O, { trendValue: o }),
          ),
          r.a.createElement(_, { subTextList: a }),
        )
      }
    },
    DL4F: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationAnalyticsScreen', function () {
          return un
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('N+ot'),
        f = n.n(p),
        y = n('AuHH'),
        g = n.n(y),
        b = n('KEM+'),
        h = n.n(b),
        v = (n('2G9S'), n('ERkP')),
        w = n.n(v),
        E = (n('WNMA'), n('KqXw'), n('XOJV')),
        k = n('rxPX'),
        I = n('0KEI'),
        P = n('S3l+'),
        O = 'CONVERSATION_ANALYTICS_SCREEN',
        _ = function (e, t) {
          return t.match.params.statusId
        },
        T = function (e, t) {
          return E.a.selectHydrated(e, _(0, t))
        },
        x = function (e, t) {
          return Object(P.p)(e, _(0, t))
        },
        L = function (e, t) {
          return E.a.selectFetchStatus(e, _(0, t))
        },
        R = function (e, t) {
          return Object(P.o)(e, _(0, t))
        },
        S = Object(k.a)()
          .propsFromState(function () {
            return {
              fetchStatus: L,
              quickPromoteEligibilityFetchStatus: x,
              statusId: _,
              tweet: T,
              quickPromoteEligibility: R,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(O),
              fetchTweetIfNeeded: E.a.fetchOneIfNeeded,
              fetchQuickPromoteEligibilityIfNeeded: P.j,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        C = n('v//M'),
        j = n('W5XZ'),
        D = n('jHSc'),
        A = n('KUGV'),
        V = n('3XMw'),
        F = n.n(V),
        B = n('b5s6')
      function K(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function H(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      function N(e, t, n) {
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: [{ item_type: 0, id: n }], profile_id: t },
        }
      }
      var W = n('Rp9C'),
        z = (n('jQ3i'), n('hBpG'), n('z84I'), n('x0mb')),
        Q = n('RhWx'),
        M = n.n(Q),
        q = n('8bFt'),
        U = F.a.ja781451,
        G = F.a.cfa1a7b8
      function X(e) {
        return e || 0
      }
      function J(e, t) {
        var n = X(t)
        return 0 === n ? 0 : X(e) / n
      }
      function Y(e) {
        var t = X(e)
        return t >= 1e5 ? G(t) : U(t)
      }
      function Z(e) {
        return {
          count: Y(null == e ? void 0 : e.value.total),
          promotionPercentage: J(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
        }
      }
      var $ = function (e) {
          var t = e.label,
            n = e.metric,
            a = e.showPromotionPercentages,
            r = e.tooltip,
            i = J(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = M()(a ? Ie(i, !0) : [])
          return w.a.createElement(q.a, {
            label: t,
            size: 'title1',
            subTextList: o,
            tooltip: r,
            value: Y(null == n ? void 0 : n.value.total),
          })
        },
        ee = n('MWbm'),
        te = n('rHpw'),
        ne = function (e) {
          var t = e.label,
            n = e.metric,
            a = e.showPromotionPercentages,
            r = e.tooltip,
            i = J(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = M()(a ? Ie(i, !1) : [])
          return w.a.createElement(
            ee.a,
            { style: ae.dataPoint },
            w.a.createElement(q.a, {
              label: t,
              size: 'title3',
              subTextList: o,
              tooltip: r,
              value: Y(null == n ? void 0 : n.value.total),
            }),
          )
        },
        ae = te.a.create(function (e) {
          return { dataPoint: { flexGrow: 1 } }
        }),
        re = n('7N4s'),
        ie = n('0ig/'),
        oe = F.a.e5fe61ef,
        le = F.a.f6162a32,
        ce = F.a.dbe9353d,
        se = F.a.e044b63f,
        ue = F.a.d8abdaa4,
        de = F.a.de0de3a7,
        me = F.a.aeee0181,
        pe = F.a.ccab7c76,
        fe = F.a.b1b4d57d,
        ye = F.a.i680442e,
        ge = F.a.d5f1e553,
        be = F.a.d24b7811,
        he = F.a.b40d33e4,
        ve = F.a.ee547382,
        we = F.a.i2785008,
        Ee = F.a.g33fd6b0
      F.a.b71059c3
      function ke(e) {
        var t,
          n,
          a = e.detailExpands,
          r = e.engagements,
          i = e.follows,
          o = e.impressions,
          l = e.linkClicks,
          c = e.mediaViews,
          s = e.profileVisits,
          u = e.showPromotionPercentages,
          d = e.tweet,
          m = w.a.useContext(re.b).isModal,
          p = Object(ie.a)().width < te.a.theme.breakpoints.xSmall,
          f = !(null == d || null === (t = d.entities) || void 0 === t || !t.urls) && d.entities.urls.length > 0,
          y =
            !(null == d || null === (n = d.extended_entities) || void 0 === n || !n.media) &&
            d.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          g = [
            w.a.createElement(ne, { key: ce, label: ce, metric: r, showPromotionPercentages: u, tooltip: se }),
            w.a.createElement(ne, { key: he, label: he, metric: a, showPromotionPercentages: u, tooltip: ve }),
            w.a.createElement(ne, { key: ue, label: ue, metric: i, showPromotionPercentages: u, tooltip: de }),
            w.a.createElement(ne, { key: me, label: me, metric: s, showPromotionPercentages: u, tooltip: pe }),
            y
              ? w.a.createElement(ne, { key: fe, label: fe, metric: c, showPromotionPercentages: u, tooltip: ye })
              : null,
            f
              ? w.a.createElement(ne, { key: ge, label: ge, metric: l, showPromotionPercentages: u, tooltip: be })
              : null,
          ].filter(function (e) {
            return e
          })
        return w.a.createElement(
          ee.a,
          {
            style: [
              Pe.grid,
              { gridTemplateColumns: m ? ' 1fr 2fr' : '1fr' },
              { gridGap: p ? te.a.theme.spaces.space24 : te.a.theme.spaces.space40 },
              { marginTop: p ? te.a.theme.spaces.space24 : te.a.theme.spaces.space40 },
              { marginHorizontal: p ? te.a.theme.spaces.space16 : te.a.theme.spaces.space32 },
            ],
          },
          w.a.createElement($, { label: oe, metric: o, showPromotionPercentages: u, tooltip: le }),
          w.a.createElement(
            ee.a,
            { style: [Pe.minorDataPointsGrid, { gridGap: p ? te.a.theme.spaces.space24 : te.a.theme.spaces.space40 }] },
            g.map(function (e, t) {
              return w.a.createElement(ee.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function Ie(e, t) {
        var n = we(e),
          a = Ee({ percentage: n })
        return [
          {
            accessibilityLabel: a,
            color: 'primary',
            text: t ? a : n,
            icon: w.a.createElement(z.a, { style: Pe.promotionIcon }),
          },
        ]
      }
      var Pe = te.a.create(function (e) {
          return {
            grid: { display: 'grid', marginBottom: e.spaces.space40 },
            minorDataPointsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        Oe = n('UIzd'),
        _e = n.n(Oe),
        Te = (n('uFXj'), n('t62R')),
        xe = n('LbZ7'),
        Le = n('iEUn'),
        Re = n('jlPL'),
        Se = n('dFWS'),
        Ce = F.a.ib1f8491,
        je = F.a.fbdb85f4,
        De = F.a.d0eeb126,
        Ae = F.a.i2785008,
        Ve = F.a.g33fd6b0
      function Fe(e) {
        var t = e.percentageValue,
          n = Ae(t),
          a = Ve({ percentage: n })
        return w.a.createElement(
          ee.a,
          { accessibilityLabel: a, style: Ke.percentageView },
          w.a.createElement(z.a, { style: Ke.promotionIcon }),
          w.a.createElement(Te.b, { accessibilityHidden: !0, color: 'primary' }, n),
        )
      }
      function Be(e) {
        var t = e.likes,
          n = e.replies,
          a = e.retweets,
          r = e.showPromotionPercentages,
          i = Z(t),
          o = i.count,
          l = i.promotionPercentage,
          c = Z(a),
          s = c.count,
          u = c.promotionPercentage,
          d = Z(n),
          m = d.count,
          p = d.promotionPercentage
        return w.a.createElement(
          ee.a,
          { style: Ke.actionsBar },
          w.a.createElement(
            xe.a,
            null,
            w.a.createElement(
              ee.a,
              { accessibilityLabel: Ce({ likeCount: o }), style: Ke.column },
              w.a.createElement(Le.a, { style: Ke.actionIconsColor }),
              w.a.createElement(Te.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, o),
              r ? w.a.createElement(Fe, { percentageValue: l }) : null,
            ),
            w.a.createElement(
              ee.a,
              { accessibilityLabel: je({ retweetCount: s }), style: Ke.column },
              w.a.createElement(Re.a, { style: Ke.actionIconsColor }),
              w.a.createElement(Te.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, s),
              r ? w.a.createElement(Fe, { percentageValue: u }) : null,
            ),
            w.a.createElement(
              ee.a,
              { accessibilityLabel: De({ replyCount: m }), style: Ke.column },
              w.a.createElement(Se.a, { style: Ke.actionIconsColor }),
              w.a.createElement(Te.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, m),
              r ? w.a.createElement(Fe, { percentageValue: p }) : null,
            ),
          ),
        )
      }
      var Ke = te.a.create(function (e) {
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
        He = n('97Jx'),
        Ne = n.n(He),
        We = n('Wc+h'),
        ze = n('gmpV'),
        Qe = n('876e'),
        Me = n('JYMr'),
        qe = n('h0NW'),
        Ue = F.a.db6efeb8,
        Ge = F.a.j6daea85,
        Xe = F.a.jade381b,
        Je = F.a.d725a288,
        Ye = F.a.hf9ed10f
      function Ze(e) {
        var t = e.end_time,
          n = e.isPaused,
          a = e.start_time,
          r = t ? new Date(t) : null,
          i = a ? new Date(a) : null,
          o = !!r && r > new Date(Date.now()),
          l = r && i ? Object(ze.a)(new Date(i), new Date(r)) : 0,
          c = t && o ? Qe.a.getTimeLeftLabel(t) : null,
          s = r ? Je(r) : '',
          u = r ? Xe(r) : '',
          d = Ye({ endTimeString: s, endDateString: u })
        return w.a.createElement(
          ee.a,
          { style: et.promotionInfoView },
          w.a.createElement(
            ee.a,
            { style: et.infoItemView },
            w.a.createElement($e, { endTimeLabel: d, isPaused: n, percentagePassed: l, timeLeftLabel: c }),
          ),
        )
      }
      function $e(e) {
        var t = e.endTimeLabel,
          n = e.isPaused,
          a = e.percentagePassed,
          r = e.timeLeftLabel,
          i = {
            items: [
              {
                label: w.a.createElement(Te.b, { size: 'headline2', weight: 'heavy' }, n ? Ge : Ue),
                description: r
                  ? w.a.createElement(
                      w.a.Fragment,
                      null,
                      w.a.createElement(
                        ee.a,
                        { style: et.progressBarContainer },
                        w.a.createElement(Me.a, {
                          colorValue: n ? te.a.theme.colors.gray400 : te.a.theme.colors.primary,
                          progress: a,
                          style: et.progressBar,
                        }),
                      ),
                      w.a.createElement(Te.b, { align: 'left', color: 'gray700', hoverLabel: { label: t } }, r),
                    )
                  : null,
                decoration: n ? null : w.a.createElement(We.a, { style: [et.icon, et.decorationContainer] }),
              },
            ],
          }
        return w.a.createElement(qe.a, Ne()({}, i, { containerStyle: et.infoItem }))
      }
      var et = te.a.create(function (e) {
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
        tt = n('WtWS'),
        nt = (n('hBvt'), n('/yvb'))
      function at(e) {
        var t = e.buttonString,
          n = e.buttonTestID,
          a = e.infoItemGroup,
          r = e.link,
          i = e.onButtonPress,
          o = e.withIcon,
          l = Object(ie.a)().width < te.a.theme.breakpoints.medium,
          c = l ? [rt.promotionInfoView, rt.promotionInfoViewNarrow] : rt.promotionInfoView
        return w.a.createElement(
          ee.a,
          { style: c },
          w.a.createElement(ee.a, { style: [rt.infoItemView, !l && rt.infoItemViewWide] }, a),
          w.a.createElement(
            ee.a,
            { style: l ? [rt.buttonViewNarrow, o && rt.buttonViewIcon] : rt.buttonViewWide },
            w.a.createElement(nt.a, { link: r, onPress: i, size: 'large', testID: n, type: 'primaryFilled' }, t),
          ),
        )
      }
      var rt = te.a.create(function (e) {
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
        it = n('Irs7'),
        ot = n('yE5w'),
        lt = F.a.a63a89fe,
        ct = F.a.f4e13456,
        st = F.a.e8adeec8,
        ut = F.a.ja781451
      function dt(e) {
        var t = Object(it.b)(),
          n = ut(X(e.impressions)),
          a = ct({ impressions: n }),
          r = {
            items: [
              {
                label: w.a.createElement(Te.b, { size: 'headline2', weight: 'heavy' }, lt),
                description: a,
                decoration: w.a.createElement(tt.a, { style: [mt.icon, mt.decorationContainer] }),
              },
            ],
          }
        var i = w.a.createElement(qe.a, Ne()({}, r, { containerStyle: mt.infoItem })),
          o = null !== Object(A.a)(),
          l = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? ot.a.Webview : ot.a.Rweb, '/')
            .concat(ot.c.Intro)
        return w.a.createElement(at, {
          buttonString: st,
          infoItemGroup: i,
          link: l,
          onButtonPress: function () {
            t.scribe(H(e.userId, 'PromoteAgainButton'))
          },
          withIcon: !0,
        })
      }
      var mt = te.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        pt = F.a.dcfb0332,
        ft = F.a.g6bf2fda,
        yt = F.a.df2c469a,
        gt = F.a.ja781451
      function bt(e) {
        var t = Object(it.b)(),
          n = null !== Object(A.a)(),
          a = gt(X(e.impressions)),
          r = ft({ impressions: a })
        var i = {
            items: [{ label: w.a.createElement(Te.b, { size: 'headline1', weight: 'heavy' }, pt), description: r }],
          },
          o = w.a.createElement(qe.a, Ne()({}, i, { containerStyle: ht.infoItem }))
        return w.a.createElement(at, {
          buttonString: yt,
          buttonTestID: e.buttonTestID,
          infoItemGroup: o,
          link: {
            pathname: '/i/flow/convert_to_professional',
            state: { input: { requested_variant: 'qp-'.concat(e.tweet_id, '-').concat(n ? 'true' : 'false') } },
            method: 'push',
          },
          onButtonPress: function () {
            t.scribe(H(e.userId, 'SwitchToProfessionalButton'))
          },
          withIcon: !1,
        })
      }
      var ht = te.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        vt = F.a.dcfb0332,
        wt = F.a.f96eec3c,
        Et = F.a.e9891f7c
      function kt(e) {
        var t = Object(it.b)(),
          n = {
            items: [{ label: w.a.createElement(Te.b, { size: 'headline1', weight: 'heavy' }, vt), description: wt }],
          }
        var a = w.a.createElement(qe.a, Ne()({}, n, { containerStyle: It.infoItem })),
          r = null !== Object(A.a)(),
          i = ''
            .concat(e.tweetPermalink, '/')
            .concat(r ? ot.a.Webview : ot.a.Rweb, '/')
            .concat(ot.c.Intro)
        return w.a.createElement(at, {
          buttonString: Et,
          infoItemGroup: a,
          link: i,
          onButtonPress: function () {
            t.scribe(H(e.userId, 'NotStartedPromotionButton'))
          },
          withIcon: !1,
        })
      }
      var It = te.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        Pt = 'switchToProfessionalButton',
        Ot = n('5emT'),
        _t = F.a.jede3014,
        Tt = F.a.i094e43b,
        xt = F.a.f638d3e0
      function Lt(e) {
        var t = Object(it.b)(),
          n = {
            items: [
              {
                label: w.a.createElement(Te.b, { size: 'headline2', weight: 'heavy' }, _t),
                description: Tt,
                decoration: w.a.createElement(Ot.a, { style: [St.icon, St.decorationContainer] }),
              },
            ],
          }
        return w.a.createElement(
          ee.a,
          { style: St.promotionInfoView },
          w.a.createElement(
            ee.a,
            { style: St.infoItemView },
            w.a.createElement(qe.a, Ne()({}, n, { containerStyle: St.infoItem })),
          ),
          w.a.createElement(
            ee.a,
            { style: St.buttonView },
            w.a.createElement(
              Te.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(H(e.userId, 'ReviewPolicyButton'))
                },
              },
              xt,
            ),
          ),
        )
      }
      var Rt,
        St = te.a.create(function (e) {
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
        Ct = (n('enFi'), n('jAXQ')),
        jt = n.n(Ct),
        Dt =
          (n('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        At = void 0 !== Rt ? Rt : (Rt = n('+s2u'))
      function Vt(e) {
        var t,
          n,
          a,
          r,
          i = e.impressions,
          o = e.promotionInfoState,
          l = e.tweet,
          c = jt()(At, e.campaignInfo)
        switch (o) {
          case Dt.notProfessional:
            return w.a.createElement(bt, {
              buttonTestID: Pt,
              impressions: null == i ? void 0 : i.value.total,
              tweet_id: l.id_str,
              userId: e.userId,
            })
          case Dt.notStarted:
            return w.a.createElement(kt, { tweetPermalink: l.permalink, userId: e.userId })
          case Dt.underReview:
            return w.a.createElement(Lt, { userId: e.userId })
          case Dt.running:
            return w.a.createElement(Ze, {
              end_time: null == c || null === (t = c.campaign) || void 0 === t ? void 0 : t.end_time,
              isPaused: !1,
              start_time: null == c || null === (n = c.campaign) || void 0 === n ? void 0 : n.start_time,
            })
          case Dt.completed:
            return w.a.createElement(dt, {
              impressions: null == i ? void 0 : i.value.promoted,
              tweetPermalink: l.permalink,
              userId: e.userId,
            })
          case Dt.paused:
            return w.a.createElement(Ze, {
              end_time: null == c || null === (a = c.campaign) || void 0 === a ? void 0 : a.end_time,
              isPaused: !0,
              start_time: null == c || null === (r = c.campaign) || void 0 === r ? void 0 : r.start_time,
            })
          default:
            return null
        }
      }
      var Ft,
        Bt,
        Kt,
        Ht = n('Ud88'),
        Nt = n.n(Ht),
        Wt = n('n0Rl'),
        zt = n('Hsf0'),
        Qt = n.n(zt),
        Mt = n('LLQb'),
        qt = F.a.deaf5b15,
        Ut = void 0 !== Ft ? Ft : (Ft = n('2O3u')),
        Gt = (void 0 !== Bt || (Bt = n('njVe')), void 0 !== Kt ? Kt : (Kt = n('wfDE'))),
        Xt = Object(Wt.b)(Gt, { errorConfig: { context: O } })
      function Jt(e) {
        var t = e.hidePromotionInfo,
          n = e.quickPromoteEligibility,
          a = e.tweet,
          r = e.userId,
          i = Object(it.b)(),
          o = Nt()(),
          l = Object(I.useCreateLocalApiErrorHandler)(O)
        return (
          w.a.useEffect(
            function () {
              var e = l({ showToast: !1 })
              _e()(o, Gt, { restId: a.id_str }).subscribe({ error: e })
            },
            [a, o, l],
          ),
          w.a.createElement(Xt, {
            render: function (e) {
              if (e.fetchStatus === Wt.a.FAILED) {
                var o = e.retry
                return (
                  i.scribe(N('NetworkError', r, a.id_str)),
                  w.a.createElement(Mt.a, { onRequestRetry: o, retryMessage: qt })
                )
              }
              if (e.fetchStatus === Wt.a.LOADED) {
                var l,
                  c,
                  s =
                    null === (l = e.data) || void 0 === l || null === (c = l.tweet_result_by_rest_id) || void 0 === c
                      ? void 0
                      : c.result
                if ('Tweet' === (null == s ? void 0 : s.__typename)) {
                  var u = Qt()(Ut, s.analytics)
                  ;(null != u && u.metrics.length) || i.scribe(N('EmptyMetricsFromBackend', r, a.id_str))
                  var d = Zt(s.analytics),
                    m = d.detailExpands,
                    p = d.engagements,
                    f = d.follows,
                    y = d.impressions,
                    g = d.likes,
                    b = d.linkClicks,
                    h = d.mediaViews,
                    v = d.profileVisits,
                    E = d.replies,
                    k = d.retweets,
                    I = (function (e) {
                      if (!e) return null
                      switch (e) {
                        case 'Eligible':
                        case 'ReplyTweet':
                          return 'not_started'
                        case 'EligibleWithPreviousCampaign':
                          return 'completed'
                        case 'IneligibleNotProfessional':
                        case 'IneligibleNotProfessionalAndAdAccountEligible':
                        case 'IneligibleNotProfessionalAndAdAccountIneligible':
                        case 'IneligibleNotProfessionalAndPendingPayment':
                          return 'not_professional'
                        case 'IneligibleCampaignPaused':
                          return 'paused'
                        case 'IneligibleCampaignRunning':
                          return 'running'
                        case 'IneligibleCampaignUnderReview':
                          return 'under_review'
                        case 'IneligibleUserUnauthorized':
                        case 'IneligibleTweet':
                        default:
                          return null
                      }
                    })(n),
                    P = ['running', 'completed', 'paused'].includes(I)
                  return w.a.createElement(
                    ee.a,
                    { style: $t.tweetActivity },
                    w.a.createElement(
                      ee.a,
                      { style: $t.metricsView },
                      w.a.createElement(Be, { likes: g, replies: E, retweets: k, showPromotionPercentages: P }),
                      w.a.createElement(ke, {
                        detailExpands: m,
                        engagements: p,
                        follows: f,
                        impressions: y,
                        linkClicks: b,
                        mediaViews: h,
                        profileVisits: v,
                        showPromotionPercentages: P,
                        tweet: a,
                      }),
                    ),
                    t || !I
                      ? null
                      : w.a.createElement(Vt, {
                          campaignInfo: s.quick_promotion,
                          impressions: y,
                          promotionInfoState: I,
                          tweet: a,
                          userId: r,
                        }),
                  )
                }
              }
              return null
            },
            variables: { restId: a.id_str },
          })
        )
      }
      var Yt = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        Zt = function (e) {
          var t = Qt()(Ut, e)
          return {
            detailExpands: Yt(t, 'DetailExpands'),
            engagements: Yt(t, 'Engagements'),
            follows: Yt(t, 'Follows'),
            impressions: Yt(t, 'Impressions'),
            likes: Yt(t, 'Favorites'),
            linkClicks: Yt(t, 'UrlClicks'),
            mediaViews: Yt(t, 'MediaViews'),
            profileVisits: Yt(t, 'UserProfileClicks'),
            replies: Yt(t, 'Replies'),
            retweets: Yt(t, 'Retweets'),
          }
        }
      var $t = te.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        en = n('v6aA'),
        tn = n('E0cF'),
        nn = n('q9Zt')
      function an(e, t) {
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
      function rn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? an(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : an(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function on(e) {
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
            a = g()(e)
          if (t) {
            var r = g()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ln = F.a.g9079b93,
        cn = F.a.a57daeb1,
        sn = F.a.deaf5b15,
        un = (function (e) {
          m()(n, e)
          var t = on(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(u()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(n(j.a))
              }),
              h()(u()(e), '_handleFetchQuickPromoteEligibility', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchQuickPromoteEligibilityIfNeeded)({ statusId: t.statusId }).catch(n())
              }),
              h()(u()(e), '_render', function () {
                var t = e.props,
                  n = t.quickPromoteEligibility,
                  a = t.tweet,
                  r = (a && tn.a.getOriginalTweet(a)) || void 0
                return !r || (r && r.user.id_str !== e.context.loggedInUserId)
                  ? w.a.createElement(nn.a, { onRetry: null, title: ln })
                  : (e._scribeEligibility(),
                    w.a.createElement(
                      ee.a,
                      { style: dn.topLevelView },
                      w.a.createElement(
                        ee.a,
                        { style: dn.quoteTweet },
                        w.a.createElement(B.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: r.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      w.a.createElement(Jt, {
                        hidePromotionInfo: !1,
                        quickPromoteEligibility: n,
                        tweet: r,
                        userId: e.context.loggedInUserId || '',
                      }),
                    ))
              }),
              h()(u()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              h()(u()(e), '_handleGoBack', function () {
                e.props.history.goBackThroughModals()
              }),
              h()(u()(e), '_scribeEligibility', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.quickPromoteEligibility
                n.scribe({ element: 'eligibility', action: 'view', data: { event_info: a || '' } })
              }),
              h()(u()(e), '_scribeDwellTime', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.tweet,
                  i = (a && tn.a.getOriginalTweet(a)) || void 0,
                  o = K(e._dwellStartTime),
                  l = o.data,
                  c = r()(o, ['data'])
                n.scribe(rn(rn({}, c), {}, { data: rn(rn({}, l), {}, { items: i ? [W.a.getTweetItem(i)] : [] }) }))
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
                    this._handleFetchQuickPromoteEligibility(),
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
                    a = e.tweet,
                    r = (a && tn.a.getOriginalTweet(a)) || void 0,
                    i = null !== Object(A.a)()
                  return w.a.createElement(
                    D.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: r ? r.permalink : '/',
                      hideBackButton: i,
                      history: n,
                      onBackClick: this._handleGoBack,
                      renderHeader: function (e) {
                        return i ? null : e
                      },
                      title: i ? null : cn,
                    },
                    w.a.createElement(C.a, { fetchStatus: t, render: this._render, retryMessage: sn }),
                  )
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      h()(un, 'contextType', en.a)
      var dn = te.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        mn = S(un)
      t.default = mn
    },
    RjwM: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [l.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M18.707 13.293c-.39-.39-1.023-.39-1.414 0L13 17.586V5c0-.553-.447-1-1-1s-1 .447-1 1v12.586l-4.293-4.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    WXWl: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [l.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M18.707 10.293l-6-6c-.39-.39-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L11 7.414V20c0 .553.447 1 1 1s1-.447 1-1V7.414l4.293 4.293c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        c = n.n(l),
        s = n('v6aA'),
        u = n('XOJV'),
        d = n('eSoz'),
        m = n('rxPX'),
        p = n('0KEI'),
        f = function (e, t) {
          return t.tweetId
        },
        y = function (e, t) {
          var n = t.tweetId,
            a = n && u.a.select(e, n)
          return a ? Object(d.g)(e, a) : void 0
        },
        g = Object(m.a)()
          .propsFromState(function () {
            return { community: y, hydratedTweet: u.a.createHydratedTweetSelector(f) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(p.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          }),
        b = n('YeIG'),
        h = n('uCxL'),
        v = n('x5Pi'),
        w = g(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            l =
              (e.tweetId,
              o()(e, [
                'community',
                'createLocalApiErrorHandler',
                'fetchCommunityIfNeeded',
                'hydratedTweet',
                'tweetId',
              ])),
            u = c.a.useContext(s.a),
            d = u.featureSwitches,
            m = u.loggedInUserId,
            p = null == i ? void 0 : i.community_id_str
          c.a.useEffect(
            function () {
              p && Object(b.a)(t) && a(p).catch(n())
            },
            [t, p, n, a],
          )
          var f = d.isTrue('responsive_web_alt_text_badge_enabled'),
            y = i && Object(v.f)(i, m, t),
            g = y && Object(v.e)(y),
            w = d.isTrue('responsive_web_reactions_enabled')
          return c.a.createElement(
            h.a,
            r()({}, l, {
              loggedInUserId: m,
              shouldShowAltLabelAlways: f,
              socialContextProps: g,
              tweet: i,
              withReactions: w,
            }),
          )
        })
      t.a = w
    },
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        i = n('Ud88'),
        o = n('aQQo'),
        l = o.loadQuery,
        c = o.useTrackLoadQueryInRender,
        s = n('ERkP'),
        u = s.useCallback,
        d = s.useEffect,
        m = s.useRef,
        p = s.useState,
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
        var s = r(),
          f = m(new Set([n])),
          b = p(function () {
            return n
          }),
          h = b[0],
          v = b[1],
          w = p(function () {
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
              var a =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (s.current) {
                var r,
                  i = l(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : o, e, t, a)
                f.current.add(i), v(i)
              }
            },
            [o, e, v, s],
          ),
          O = m(!1)
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
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var i = n.value
                    if (i === h) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (g(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
              }
            },
            [h, s, P, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(f.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (g(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
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
        return H
      })
      n('OZaJ')
      var a = n('ddV6'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('N+ot'),
        f = n.n(p),
        y = n('AuHH'),
        g = n.n(y),
        b = n('KEM+'),
        h = n.n(b),
        v = (n('2G9S'), n('ZUdG'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')),
        w = n.n(v),
        E = n('pXBW'),
        k = n('6/RC'),
        I = n('UIzd'),
        P = n.n(I),
        O = n('kGix')
      n.d(t, 'a', function () {
        return O.a
      })
      var _ = n('fs1G'),
        T = n('0KEI'),
        x = n('lU4h'),
        L = n.n(x),
        R = n('21nk'),
        S = n.n(R),
        C = n('bCEw'),
        j = n.n(C),
        D = n('Ud88'),
        A = n.n(D)
      function V(e) {
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
            a = g()(e)
          if (t) {
            var r = g()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
        }
      }
      var F = function (e) {
          return (0, e.render)({ fetchStatus: O.a.LOADING, data: null, error: null, retry: _.a })
        },
        B = (function (e) {
          m()(n, e)
          var t = V(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), h()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof E.a)) throw e
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
        })(w.a.Component),
        K = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = S()(t, n)
          return a({ fetchStatus: O.a.LOADED, data: r, error: null, retry: _.a })
        },
        H = function (e, t) {
          if (k.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                i = void 0 === a ? 'store-or-network' : a,
                o = n.render,
                l = n.variables,
                c = j()(e),
                s = r()(c, 2),
                u = s[0],
                d = s[1],
                m = Object(T.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = L()(l),
                f = r()(p, 1)[0],
                y = w.a.useCallback(
                  function () {
                    d(f, { fetchPolicy: 'network-only' })
                  },
                  [d, f],
                )
              return (
                w.a.useLayoutEffect(
                  function () {
                    d(f, { fetchPolicy: i })
                  },
                  [i, d, f],
                ),
                u
                  ? w.a.createElement(
                      w.a.Suspense,
                      { fallback: w.a.createElement(F, { render: o }) },
                      w.a.createElement(
                        B,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: y },
                        function (t, n) {
                          return t
                            ? o({ fetchStatus: O.a.FAILED, error: t, data: null, retry: n })
                            : w.a.createElement(K, { query: e, queryRef: u, render: o })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var i = a.render,
              o = a.variables,
              l = A()(),
              c = Object(T.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = L()(o),
              u = r()(s, 1)[0],
              d = n.get(l)
            if (d) return d
            var m = w.a.lazy(function () {
              return P()(l, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: O.a.LOADED, data: e, error: null, retry: _.a })
                  },
                  function (e) {
                    return e instanceof E.a
                      ? (c(t.errorConfig.options || {})(e),
                        i({ fetchStatus: O.a.FAILED, data: null, error: e, retry: _.a }))
                      : w.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(l, e).get.bind(n, l) }
                })
            })
            return w.a.createElement(w.a.Suspense, null, w.a.createElement(m, null))
          }
        }
    },
    njVe: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = {
        kind: 'InlineDataFragment',
        name: 'TweetActivity_mapPromotionDataToPromotionInfoState',
        hash: 'ea7658c5830d417e53118b26df704a5f',
      }
      t.default = a
    },
    wfDE: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        o,
        l,
        c,
        s,
        u = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'restId' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'TweetActivityQuery',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'rest_id', variableName: 'restId' },
                  { kind: 'Literal', name: 's', value: 42 },
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
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'TweetActivityQuery',
            selections: [
              {
                alias: null,
                args: r,
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
