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
          m = t.fetchKey,
          p = t.fetchPolicy,
          f = t.source,
          y = t.variables,
          g = t.networkCacheConfig,
          b = i(e, y, g)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          b.request.node.params.name !== t.name && r(!1),
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
        m = n('RjwM'),
        p = n('7Mjr'),
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
                        { style: _.tooltip },
                        r.createElement(
                          l.a,
                          { style: _.tooltipTitle },
                          r.createElement(c.b, { size: 'title3', weight: 'heavy' }, t),
                        ),
                        r.createElement(
                          l.a,
                          { style: _.tooltipText },
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
                    style: _.iconInformation,
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
                { style: _.labelBar },
                r.createElement(c.b, { color: 'gray700', size: 'subtext2', style: _.labelText, weight: 'medium' }, t),
                r.createElement(E, { label: t, tooltip: n }),
              )
            : null
        },
        I = function (e) {
          var t = e.unit
          return t ? r.createElement(c.b, { color: 'gray700', style: _.unitText, weight: 'medium' }, t) : null
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
                    { accessibilityLabel: n, style: _.trendBar },
                    r.createElement(m.a, { style: _.trendIconNeg }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'red500', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : 0 === a
                ? r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: _.trendBar },
                    r.createElement(p.a, { style: _.trendIconZero }),
                    r.createElement(
                      c.b,
                      { accessibilityHidden: !0, color: 'gray700', size: 'body', weight: 'medium' },
                      t,
                    ),
                  )
                : r.createElement(
                    l.a,
                    { accessibilityLabel: n, style: _.trendBar },
                    r.createElement(f.a, { style: _.trendIconPos }),
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
                  { accessibilityLabel: e.accessibilityLabel, key: t, style: [_.subTextListItem, e.style] },
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
        _ = o.a.create(function (e) {
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
          { style: _.dataPoint },
          r.createElement(k, { label: t, tooltip: i }),
          r.createElement(
            l.a,
            { style: _.valueBar },
            r.createElement(c.b, { size: n, weight: 'bold' }, u),
            r.createElement(I, { unit: s }),
            r.createElement(P, { trendValue: o }),
          ),
          r.createElement(O, { subTextList: a }),
        )
      }
    },
    DL4F: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationAnalyticsScreen', function () {
          return an
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
        m = n.n(d),
        p = n('N+ot'),
        f = n.n(p),
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
        _ = function (e, t) {
          return w.a.selectHydrated(e, O(0, t))
        },
        T = function (e, t) {
          return Object(I.p)(e, O(0, t))
        },
        x = function (e, t) {
          return w.a.selectFetchStatus(e, O(0, t))
        },
        L = function (e, t) {
          return Object(I.o)(e, O(0, t))
        },
        R = Object(E.a)()
          .propsFromState(function () {
            return {
              fetchStatus: x,
              quickPromoteEligibilityFetchStatus: T,
              statusId: O,
              tweet: _,
              quickPromoteEligibility: L,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(P),
              fetchTweetIfNeeded: w.a.fetchOneIfNeeded,
              fetchQuickPromoteEligibilityIfNeeded: I.j,
            }
          })
          .withAnalytics({ page: 'tweet', section: 'analytics', component: 'RwebConversationAnalytics' }),
        S = n('v//M'),
        C = n('W5XZ'),
        j = n('jHSc'),
        A = n('KUGV'),
        D = n('3XMw'),
        V = n.n(D),
        F = n('b5s6')
      function B(e) {
        var t = Date.now() - e
        return { action: 'view', data: { event_info: JSON.stringify({ duration_ms: t }) } }
      }
      function K(e, t) {
        return { element: t, action: 'click', data: { profile_id: e } }
      }
      function H(e, t, n) {
        return {
          element: 'TweetActivityQueryRenderer',
          action: 'error',
          data: { event_info: e, items: [{ item_type: 0, id: n }], profile_id: t },
        }
      }
      var N = n('Rp9C'),
        W = (n('jQ3i'), n('hBpG'), n('z84I'), n('x0mb')),
        z = n('RhWx'),
        Q = n.n(z),
        M = n('8bFt'),
        q = V.a.ja781451,
        U = V.a.cfa1a7b8
      function G(e) {
        return e || 0
      }
      function X(e, t) {
        var n = G(t)
        return 0 === n ? 0 : G(e) / n
      }
      function J(e) {
        var t = G(e)
        return t >= 1e5 ? U(t) : q(t)
      }
      function Y(e) {
        return {
          count: J(null == e ? void 0 : e.value.total),
          promotionPercentage: X(null == e ? void 0 : e.value.promoted, null == e ? void 0 : e.value.total),
        }
      }
      var Z = function (e) {
          var t = e.label,
            n = e.metric,
            r = e.showPromotionPercentages,
            a = e.tooltip,
            i = X(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = Q()(r ? he(i, !0) : [])
          return v.createElement(M.a, {
            label: t,
            size: 'title1',
            subTextList: o,
            tooltip: a,
            value: J(null == n ? void 0 : n.value.total),
          })
        },
        $ = n('MWbm'),
        ee = n('rHpw'),
        te = function (e) {
          var t = e.label,
            n = e.metric,
            r = e.showPromotionPercentages,
            a = e.tooltip,
            i = X(null == n ? void 0 : n.value.promoted, null == n ? void 0 : n.value.total),
            o = Q()(r ? he(i, !1) : [])
          return v.createElement(
            $.a,
            { style: ne.dataPoint },
            v.createElement(M.a, {
              label: t,
              size: 'title3',
              subTextList: o,
              tooltip: a,
              value: J(null == n ? void 0 : n.value.total),
            }),
          )
        },
        ne = ee.a.create(function (e) {
          return { dataPoint: { flexGrow: 1 } }
        }),
        re = n('7N4s'),
        ae = n('0ig/'),
        ie = V.a.e5fe61ef,
        oe = V.a.f6162a32,
        le = V.a.d8abdaa4,
        ce = V.a.de0de3a7,
        se = V.a.aeee0181,
        ue = V.a.ccab7c76,
        de = V.a.b1b4d57d,
        me = V.a.i680442e,
        pe = V.a.d5f1e553,
        fe = V.a.d24b7811,
        ye = V.a.i2785008,
        ge = V.a.g33fd6b0
      V.a.b71059c3
      function be(e) {
        var t,
          n,
          r = e.follows,
          a = e.impressions,
          i = e.linkClicks,
          o = e.mediaViews,
          l = e.profileVisits,
          c = e.showPromotionPercentages,
          s = e.tweet,
          u = v.useContext(re.b).isModal,
          d = Object(ae.a)().width < ee.a.theme.breakpoints.xSmall,
          m = !(null == s || null === (t = s.entities) || void 0 === t || !t.urls) && s.entities.urls.length > 0,
          p =
            !(null == s || null === (n = s.extended_entities) || void 0 === n || !n.media) &&
            s.extended_entities.media.filter(function (e) {
              return 'video' === e.type
            }).length > 0,
          f = [
            v.createElement(te, { key: le, label: le, metric: r, showPromotionPercentages: c, tooltip: ce }),
            v.createElement(te, { key: se, label: se, metric: l, showPromotionPercentages: c, tooltip: ue }),
            p ? v.createElement(te, { key: de, label: de, metric: o, showPromotionPercentages: c, tooltip: me }) : null,
            m ? v.createElement(te, { key: pe, label: pe, metric: i, showPromotionPercentages: c, tooltip: fe }) : null,
          ].filter(function (e) {
            return e
          })
        return v.createElement(
          $.a,
          {
            style: [
              ve.grid,
              { gridTemplateColumns: u ? ' 1fr 2fr' : '1fr' },
              { gridGap: d ? ee.a.theme.spaces.space24 : ee.a.theme.spaces.space40 },
              { marginTop: d ? ee.a.theme.spaces.space24 : ee.a.theme.spaces.space40 },
              { marginHorizontal: d ? ee.a.theme.spaces.space16 : ee.a.theme.spaces.space32 },
            ],
          },
          v.createElement(Z, { label: ie, metric: a, showPromotionPercentages: c, tooltip: oe }),
          v.createElement(
            $.a,
            { style: [ve.minorDataPointsGrid, { gridGap: d ? ee.a.theme.spaces.space24 : ee.a.theme.spaces.space40 }] },
            f.map(function (e, t) {
              return v.createElement($.a, { key: 'minorDataPoint'.concat(t) }, e)
            }),
          ),
        )
      }
      function he(e, t) {
        var n = ye(e),
          r = ge({ percentage: n })
        return [
          {
            accessibilityLabel: r,
            color: 'primary',
            text: t ? r : n,
            icon: v.createElement(W.a, { style: ve.promotionIcon }),
          },
        ]
      }
      var ve = ee.a.create(function (e) {
          return {
            grid: { display: 'grid' },
            minorDataPointsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' },
            promotionIcon: { fontSize: e.spaces.space4, color: e.colors.primary, marginRight: e.spaces.space4 },
          }
        }),
        we = n('UIzd'),
        Ee = n.n(we),
        ke = (n('uFXj'), n('t62R')),
        Ie = n('LbZ7'),
        Pe = n('iEUn'),
        Oe = n('jlPL'),
        _e = n('dFWS'),
        Te = V.a.ib1f8491,
        xe = V.a.fbdb85f4,
        Le = V.a.d0eeb126,
        Re = V.a.i2785008,
        Se = V.a.g33fd6b0
      function Ce(e) {
        var t = e.percentageValue,
          n = Re(t),
          r = Se({ percentage: n })
        return v.createElement(
          $.a,
          { accessibilityLabel: r, style: Ae.percentageView },
          v.createElement(W.a, { style: Ae.promotionIcon }),
          v.createElement(ke.b, { accessibilityHidden: !0, color: 'primary' }, n),
        )
      }
      function je(e) {
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
          m = d.count,
          p = d.promotionPercentage
        return v.createElement(
          $.a,
          { style: Ae.actionsBar },
          v.createElement(
            Ie.a,
            null,
            v.createElement(
              $.a,
              { accessibilityLabel: Te({ likeCount: o }), style: Ae.column },
              v.createElement(Pe.a, { style: Ae.actionIconsColor }),
              v.createElement(ke.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, o),
              a ? v.createElement(Ce, { percentageValue: l }) : null,
            ),
            v.createElement(
              $.a,
              { accessibilityLabel: xe({ retweetCount: s }), style: Ae.column },
              v.createElement(Oe.a, { style: Ae.actionIconsColor }),
              v.createElement(ke.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, s),
              a ? v.createElement(Ce, { percentageValue: u }) : null,
            ),
            v.createElement(
              $.a,
              { accessibilityLabel: Le({ replyCount: m }), style: Ae.column },
              v.createElement(_e.a, { style: Ae.actionIconsColor }),
              v.createElement(ke.b, { accessibilityHidden: !0, align: 'center', weight: 'bold' }, m),
              a ? v.createElement(Ce, { percentageValue: p }) : null,
            ),
          ),
        )
      }
      var Ae = ee.a.create(function (e) {
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
        De = n('97Jx'),
        Ve = n.n(De),
        Fe = n('Wc+h'),
        Be = n('gmpV'),
        Ke = n('876e'),
        He = n('JYMr'),
        Ne = n('h0NW'),
        We = V.a.db6efeb8,
        ze = V.a.j6daea85,
        Qe = V.a.jade381b,
        Me = V.a.d725a288,
        qe = V.a.hf9ed10f
      function Ue(e) {
        var t = e.end_time,
          n = e.isPaused,
          r = e.start_time,
          a = t ? new Date(t) : null,
          i = r ? new Date(r) : null,
          o = !!a && a > new Date(Date.now()),
          l = a && i ? Object(Be.a)(new Date(i), new Date(a)) : 0,
          c = t && o ? Ke.a.getTimeLeftLabel(t) : null,
          s = a ? Me(a) : '',
          u = a ? Qe(a) : '',
          d = qe({ endTimeString: s, endDateString: u })
        return v.createElement(
          $.a,
          { style: Xe.promotionInfoView },
          v.createElement(
            $.a,
            { style: Xe.infoItemView },
            v.createElement(Ge, { endTimeLabel: d, isPaused: n, percentagePassed: l, timeLeftLabel: c }),
          ),
        )
      }
      function Ge(e) {
        var t = e.endTimeLabel,
          n = e.isPaused,
          r = e.percentagePassed,
          a = e.timeLeftLabel,
          i = {
            items: [
              {
                label: v.createElement(ke.b, { size: 'headline2', weight: 'heavy' }, n ? ze : We),
                description: a
                  ? v.createElement(
                      v.Fragment,
                      null,
                      v.createElement(
                        $.a,
                        { style: Xe.progressBarContainer },
                        v.createElement(He.a, {
                          colorValue: n ? ee.a.theme.colors.gray400 : ee.a.theme.colors.primary,
                          progress: r,
                          style: Xe.progressBar,
                        }),
                      ),
                      v.createElement(ke.b, { align: 'left', color: 'gray700', hoverLabel: { label: t } }, a),
                    )
                  : null,
                decoration: n ? null : v.createElement(Fe.a, { style: [Xe.icon, Xe.decorationContainer] }),
              },
            ],
          }
        return v.createElement(Ne.a, Ve()({}, i, { containerStyle: Xe.infoItem }))
      }
      var Xe = ee.a.create(function (e) {
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
        Je = n('WtWS'),
        Ye = (n('hBvt'), n('/yvb'))
      function Ze(e) {
        var t = e.buttonString,
          n = e.buttonTestID,
          r = e.infoItemGroup,
          a = e.link,
          i = e.onButtonPress,
          o = e.withIcon,
          l = Object(ae.a)().width < ee.a.theme.breakpoints.medium,
          c = l ? [$e.promotionInfoView, $e.promotionInfoViewNarrow] : $e.promotionInfoView
        return v.createElement(
          $.a,
          { style: c },
          v.createElement($.a, { style: [$e.infoItemView, !l && $e.infoItemViewWide] }, r),
          v.createElement(
            $.a,
            { style: l ? [$e.buttonViewNarrow, o && $e.buttonViewIcon] : $e.buttonViewWide },
            v.createElement(Ye.a, { link: a, onPress: i, size: 'large', testID: n, type: 'primaryFilled' }, t),
          ),
        )
      }
      var $e = ee.a.create(function (e) {
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
        et = n('Irs7'),
        tt = n('yE5w'),
        nt = V.a.a63a89fe,
        rt = V.a.f4e13456,
        at = V.a.e8adeec8,
        it = V.a.ja781451
      function ot(e) {
        var t = Object(et.b)(),
          n = it(G(e.impressions)),
          r = rt({ impressions: n }),
          a = {
            items: [
              {
                label: v.createElement(ke.b, { size: 'headline2', weight: 'heavy' }, nt),
                description: r,
                decoration: v.createElement(Je.a, { style: [lt.icon, lt.decorationContainer] }),
              },
            ],
          }
        var i = v.createElement(Ne.a, Ve()({}, a, { containerStyle: lt.infoItem })),
          o = null !== Object(A.a)(),
          l = ''
            .concat(e.tweetPermalink, '/')
            .concat(o ? tt.a.Webview : tt.a.Rweb, '/')
            .concat(tt.c.Intro)
        return v.createElement(Ze, {
          buttonString: at,
          infoItemGroup: i,
          link: l,
          onButtonPress: function () {
            t.scribe(K(e.userId, 'PromoteAgainButton'))
          },
          withIcon: !0,
        })
      }
      var lt = ee.a.create(function (e) {
          return {
            infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' },
            decorationContainer: { height: e.spaces.space24, width: e.spaces.space24, marginRight: e.spaces.space24 },
            icon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.green500 },
          }
        }),
        ct = V.a.dcfb0332,
        st = V.a.g6bf2fda,
        ut = V.a.df2c469a,
        dt = V.a.ja781451
      function mt(e) {
        var t = Object(et.b)(),
          n = null !== Object(A.a)(),
          r = dt(G(e.impressions)),
          a = st({ impressions: r })
        var i = {
            items: [{ label: v.createElement(ke.b, { size: 'headline1', weight: 'heavy' }, ct), description: a }],
          },
          o = v.createElement(Ne.a, Ve()({}, i, { containerStyle: pt.infoItem }))
        return v.createElement(Ze, {
          buttonString: ut,
          buttonTestID: e.buttonTestID,
          infoItemGroup: o,
          link: {
            pathname: '/i/flow/convert_to_professional',
            state: { input: { requested_variant: 'qp-'.concat(e.tweet_id, '-').concat(n ? 'true' : 'false') } },
            method: 'push',
          },
          onButtonPress: function () {
            t.scribe(K(e.userId, 'SwitchToProfessionalButton'))
          },
          withIcon: !1,
        })
      }
      var pt = ee.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        ft = V.a.dcfb0332,
        yt = V.a.f96eec3c,
        gt = V.a.e9891f7c
      function bt(e) {
        var t = Object(et.b)(),
          n = { items: [{ label: v.createElement(ke.b, { size: 'headline1', weight: 'heavy' }, ft), description: yt }] }
        var r = v.createElement(Ne.a, Ve()({}, n, { containerStyle: ht.infoItem })),
          a = null !== Object(A.a)(),
          i = ''
            .concat(e.tweetPermalink, '/')
            .concat(a ? tt.a.Webview : tt.a.Rweb, '/')
            .concat(tt.c.Intro)
        return v.createElement(Ze, {
          buttonString: gt,
          infoItemGroup: r,
          link: i,
          onButtonPress: function () {
            t.scribe(K(e.userId, 'NotStartedPromotionButton'))
          },
          withIcon: !1,
        })
      }
      var ht = ee.a.create(function (e) {
          return { infoItem: { paddingHorizontal: '0px', paddingVertical: '0px' } }
        }),
        vt = 'switchToProfessionalButton',
        wt = n('5emT'),
        Et = V.a.jede3014,
        kt = V.a.i094e43b,
        It = V.a.f638d3e0
      function Pt(e) {
        var t = Object(et.b)(),
          n = {
            items: [
              {
                label: v.createElement(ke.b, { size: 'headline2', weight: 'heavy' }, Et),
                description: kt,
                decoration: v.createElement(wt.a, { style: [_t.icon, _t.decorationContainer] }),
              },
            ],
          }
        return v.createElement(
          $.a,
          { style: _t.promotionInfoView },
          v.createElement(
            $.a,
            { style: _t.infoItemView },
            v.createElement(Ne.a, Ve()({}, n, { containerStyle: _t.infoItem })),
          ),
          v.createElement(
            $.a,
            { style: _t.buttonView },
            v.createElement(
              ke.b,
              {
                color: 'primary',
                link: 'https://twitter.com/adspolicy',
                onPress: function () {
                  t.scribe(K(e.userId, 'ReviewPolicyButton'))
                },
              },
              It,
            ),
          ),
        )
      }
      var Ot,
        _t = ee.a.create(function (e) {
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
        Tt = (n('enFi'), n('jAXQ')),
        xt = n.n(Tt),
        Lt =
          (n('yH/f'),
          Object.freeze({
            notProfessional: 'not_professional',
            notStarted: 'not_started',
            underReview: 'under_review',
            running: 'running',
            completed: 'completed',
            paused: 'paused',
          })),
        Rt = void 0 !== Ot ? Ot : (Ot = n('+s2u'))
      function St(e) {
        var t,
          n,
          r,
          a,
          i = e.impressions,
          o = e.promotionInfoState,
          l = e.tweet,
          c = xt()(Rt, e.campaignInfo)
        switch (o) {
          case Lt.notProfessional:
            return v.createElement(mt, {
              buttonTestID: vt,
              impressions: null == i ? void 0 : i.value.total,
              tweet_id: l.id_str,
              userId: e.userId,
            })
          case Lt.notStarted:
            return v.createElement(bt, { tweetPermalink: l.permalink, userId: e.userId })
          case Lt.underReview:
            return v.createElement(Pt, { userId: e.userId })
          case Lt.running:
            return v.createElement(Ue, {
              end_time: null == c || null === (t = c.campaign) || void 0 === t ? void 0 : t.end_time,
              isPaused: !1,
              start_time: null == c || null === (n = c.campaign) || void 0 === n ? void 0 : n.start_time,
            })
          case Lt.completed:
            return v.createElement(ot, {
              impressions: null == i ? void 0 : i.value.promoted,
              tweetPermalink: l.permalink,
              userId: e.userId,
            })
          case Lt.paused:
            return v.createElement(Ue, {
              end_time: null == c || null === (r = c.campaign) || void 0 === r ? void 0 : r.end_time,
              isPaused: !0,
              start_time: null == c || null === (a = c.campaign) || void 0 === a ? void 0 : a.start_time,
            })
          default:
            return null
        }
      }
      var Ct,
        jt,
        At,
        Dt = n('Ud88'),
        Vt = n.n(Dt),
        Ft = n('n0Rl'),
        Bt = n('Hsf0'),
        Kt = n.n(Bt),
        Ht = n('LLQb'),
        Nt = V.a.deaf5b15,
        Wt = void 0 !== Ct ? Ct : (Ct = n('2O3u')),
        zt = (void 0 !== jt || (jt = n('njVe')), void 0 !== At ? At : (At = n('wfDE'))),
        Qt = Object(Ft.b)(zt, { errorConfig: { context: P } })
      function Mt(e) {
        var t = e.hidePromotionInfo,
          n = e.quickPromoteEligibility,
          r = e.tweet,
          a = e.userId,
          i = Object(et.b)(),
          o = Vt()(),
          l = Object(k.useCreateLocalApiErrorHandler)(P)
        return (
          v.useEffect(
            function () {
              var e = l({ showToast: !1 })
              Ee()(o, zt, { restId: r.id_str }).subscribe({ error: e })
            },
            [r, o, l],
          ),
          v.createElement(Qt, {
            render: function (e) {
              if (e.fetchStatus === Ft.a.FAILED) {
                var o = e.retry
                return (
                  i.scribe(H('NetworkError', a, r.id_str)),
                  v.createElement(Ht.a, { onRequestRetry: o, retryMessage: Nt })
                )
              }
              if (e.fetchStatus === Ft.a.LOADED) {
                var l,
                  c,
                  s =
                    null === (l = e.data) || void 0 === l || null === (c = l.tweet_result_by_rest_id) || void 0 === c
                      ? void 0
                      : c.result
                if ('Tweet' === (null == s ? void 0 : s.__typename)) {
                  var u = Kt()(Wt, s.analytics)
                  ;(null != u && u.metrics.length) || i.scribe(H('EmptyMetricsFromBackend', a, r.id_str))
                  var d = Ut(s.analytics),
                    m = d.follows,
                    p = d.impressions,
                    f = d.likes,
                    y = d.linkClicks,
                    g = d.mediaViews,
                    b = d.profileVisits,
                    h = d.replies,
                    w = d.retweets,
                    E = (function (e) {
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
                    k = ['running', 'completed', 'paused'].includes(E)
                  return v.createElement(
                    $.a,
                    { style: Gt.tweetActivity },
                    v.createElement(
                      $.a,
                      { style: Gt.metricsView },
                      v.createElement(je, { likes: f, replies: h, retweets: w, showPromotionPercentages: k }),
                      v.createElement(be, {
                        follows: m,
                        impressions: p,
                        linkClicks: y,
                        mediaViews: g,
                        profileVisits: b,
                        showPromotionPercentages: k,
                        tweet: r,
                      }),
                    ),
                    t || !E
                      ? null
                      : v.createElement(St, {
                          campaignInfo: s.quick_promotion,
                          impressions: p,
                          promotionInfoState: E,
                          tweet: r,
                          userId: a,
                        }),
                  )
                }
              }
              return null
            },
            variables: { restId: r.id_str },
          })
        )
      }
      var qt = function (e, t) {
          return e
            ? e.metrics.find(function (e) {
                return e.key === t
              })
            : null
        },
        Ut = function (e) {
          var t = Kt()(Wt, e)
          return {
            follows: qt(t, 'Follows'),
            impressions: qt(t, 'Impressions'),
            likes: qt(t, 'Favorites'),
            linkClicks: qt(t, 'UrlClicks'),
            mediaViews: qt(t, 'MediaViews'),
            profileVisits: qt(t, 'UserProfileClicks'),
            replies: qt(t, 'Replies'),
            retweets: qt(t, 'Retweets'),
          }
        }
      var Gt = ee.a.create(function (e) {
          return { tweetActivity: { flex: 1 }, metricsView: { flexGrow: 1 } }
        }),
        Xt = n('v6aA'),
        Jt = n('E0cF'),
        Yt = n('q9Zt')
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
      function $t(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Zt(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function en(e) {
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
      var tn = V.a.g9079b93,
        nn = V.a.a57daeb1,
        rn = V.a.deaf5b15,
        an = (function (e) {
          m()(n, e)
          var t = en(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(u()(e), '_handleFetchTweet', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTweetIfNeeded)(t.statusId).catch(n(C.a))
              }),
              h()(u()(e), '_handleFetchQuickPromoteEligibility', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchQuickPromoteEligibilityIfNeeded)({ statusId: t.statusId }).catch(n())
              }),
              h()(u()(e), '_render', function () {
                var t = e.props,
                  n = t.quickPromoteEligibility,
                  r = t.tweet,
                  a = (r && Jt.a.getOriginalTweet(r)) || void 0
                return !a || (a && a.user.id_str !== e.context.loggedInUserId)
                  ? v.createElement(Yt.a, { onRetry: null, title: tn })
                  : (e._scribeEligibility(),
                    v.createElement(
                      $.a,
                      { style: on.topLevelView },
                      v.createElement(
                        $.a,
                        { style: on.quoteTweet },
                        v.createElement(F.a, {
                          isCondensed: !0,
                          style: { cursor: 'default' },
                          tweetId: a.id_str,
                          withLink: !1,
                          withUserHoverCard: !1,
                        }),
                      ),
                      v.createElement(Mt, {
                        hidePromotionInfo: !1,
                        quickPromoteEligibility: n,
                        tweet: a,
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
                  r = t.quickPromoteEligibility
                n.scribe({ element: 'eligibility', action: 'view', data: { event_info: r || '' } })
              }),
              h()(u()(e), '_scribeDwellTime', function () {
                var t = e.props,
                  n = t.analytics,
                  r = t.tweet,
                  i = (r && Jt.a.getOriginalTweet(r)) || void 0,
                  o = B(e._dwellStartTime),
                  l = o.data,
                  c = a()(o, ['data'])
                n.scribe($t($t({}, c), {}, { data: $t($t({}, l), {}, { items: i ? [N.a.getTweetItem(i)] : [] }) }))
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
                    r = e.tweet,
                    a = (r && Jt.a.getOriginalTweet(r)) || void 0,
                    i = null !== Object(A.a)()
                  return v.createElement(
                    j.b,
                    {
                      appBarRef: this._setAppBarRef,
                      backLocation: a ? a.permalink : '/',
                      hideBackButton: i,
                      history: n,
                      onBackClick: this._handleGoBack,
                      renderHeader: function (e) {
                        return i ? null : e
                      },
                      title: i ? null : nn,
                    },
                    v.createElement(S.a, { fetchStatus: t, render: this._render, retryMessage: rn }),
                  )
                },
              },
            ]),
            n
          )
        })(v.PureComponent)
      h()(an, 'contextType', Xt.a)
      var on = ee.a.create(function (e) {
          return { topLevelView: { flex: 1 }, quoteTweet: { margin: e.spaces.space16, marginBottom: e.spaces.space12 } }
        }),
        ln = R(an)
      t.default = ln
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
        m = n('0KEI'),
        p = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            r = n && s.a.select(e, n)
          return r ? Object(u.f)(e, r) : void 0
        },
        y = Object(d.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: s.a.createHydratedTweetSelector(p) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
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
            m = u.loggedInUserId,
            p = null == i ? void 0 : i.community_id_str
          l.useEffect(
            function () {
              p && Object(g.a)(t) && r(p).catch(n())
            },
            [t, p, n, r],
          )
          var f = d.isTrue('responsive_web_alt_text_badge_enabled'),
            y = i && Object(h.f)(i, m, t),
            v = y && Object(h.e)(y),
            w = d.isTrue('responsive_web_reactions_enabled')
          return l.createElement(
            b.a,
            a()({}, s, {
              loggedInUserId: m,
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
        var s = a(),
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
        m = n.n(d),
        p = n('N+ot'),
        f = n.n(p),
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
        _ = n('0KEI'),
        T = n('lU4h'),
        x = n.n(T),
        L = n('21nk'),
        R = n.n(L),
        S = n('bCEw'),
        C = n.n(S),
        j = n('Ud88'),
        A = n.n(j)
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
      var V = function (e) {
          return (0, e.render)({ fetchStatus: P.a.LOADING, data: null, error: null, retry: O.a })
        },
        F = (function (e) {
          m()(n, e)
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
                m = Object(_.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                p = x()(l),
                f = a()(p, 1)[0],
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
                      { fallback: v.createElement(V, { render: o }) },
                      v.createElement(
                        F,
                        { errorHandler: m(t.errorConfig.options || {}), key: u.fetchKey, retry: y },
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
              l = A()(),
              c = Object(_.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              s = x()(o),
              u = a()(s, 1)[0],
              d = n.get(l)
            if (d) return d
            var m = v.lazy(function () {
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
            return v.createElement(v.Suspense, null, v.createElement(m, null))
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
